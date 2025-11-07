// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallGtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#addr_notify ObjectFirewallGtp#addr_notify}
  */
  readonly addrNotify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#adom ObjectFirewallGtp#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#apn_filter ObjectFirewallGtp#apn_filter}
  */
  readonly apnFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#authorized_ggsns ObjectFirewallGtp#authorized_ggsns}
  */
  readonly authorizedGgsns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#authorized_ggsns6 ObjectFirewallGtp#authorized_ggsns6}
  */
  readonly authorizedGgsns6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#authorized_sgsns ObjectFirewallGtp#authorized_sgsns}
  */
  readonly authorizedSgsns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#authorized_sgsns6 ObjectFirewallGtp#authorized_sgsns6}
  */
  readonly authorizedSgsns6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#comment ObjectFirewallGtp#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#context_id ObjectFirewallGtp#context_id}
  */
  readonly contextId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#control_plane_message_rate_limit ObjectFirewallGtp#control_plane_message_rate_limit}
  */
  readonly controlPlaneMessageRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#default_apn_action ObjectFirewallGtp#default_apn_action}
  */
  readonly defaultApnAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#default_imsi_action ObjectFirewallGtp#default_imsi_action}
  */
  readonly defaultImsiAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#default_ip_action ObjectFirewallGtp#default_ip_action}
  */
  readonly defaultIpAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#default_noip_action ObjectFirewallGtp#default_noip_action}
  */
  readonly defaultNoipAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#default_policy_action ObjectFirewallGtp#default_policy_action}
  */
  readonly defaultPolicyAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#denied_log ObjectFirewallGtp#denied_log}
  */
  readonly deniedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#dynamic_sort_subtable ObjectFirewallGtp#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#echo_request_interval ObjectFirewallGtp#echo_request_interval}
  */
  readonly echoRequestInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#extension_log ObjectFirewallGtp#extension_log}
  */
  readonly extensionLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#forwarded_log ObjectFirewallGtp#forwarded_log}
  */
  readonly forwardedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#global_tunnel_limit ObjectFirewallGtp#global_tunnel_limit}
  */
  readonly globalTunnelLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#gtp_in_gtp ObjectFirewallGtp#gtp_in_gtp}
  */
  readonly gtpInGtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#gtpu_denied_log ObjectFirewallGtp#gtpu_denied_log}
  */
  readonly gtpuDeniedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#gtpu_forwarded_log ObjectFirewallGtp#gtpu_forwarded_log}
  */
  readonly gtpuForwardedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#gtpu_log_freq ObjectFirewallGtp#gtpu_log_freq}
  */
  readonly gtpuLogFreq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#gtpv0 ObjectFirewallGtp#gtpv0}
  */
  readonly gtpv0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#half_close_timeout ObjectFirewallGtp#half_close_timeout}
  */
  readonly halfCloseTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#half_open_timeout ObjectFirewallGtp#half_open_timeout}
  */
  readonly halfOpenTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#handover_group ObjectFirewallGtp#handover_group}
  */
  readonly handoverGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#handover_group6 ObjectFirewallGtp#handover_group6}
  */
  readonly handoverGroup6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#id ObjectFirewallGtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#ie_allow_list_v0v1 ObjectFirewallGtp#ie_allow_list_v0v1}
  */
  readonly ieAllowListV0V1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#ie_allow_list_v2 ObjectFirewallGtp#ie_allow_list_v2}
  */
  readonly ieAllowListV2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#ie_remover ObjectFirewallGtp#ie_remover}
  */
  readonly ieRemover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#ie_white_list_v0v1 ObjectFirewallGtp#ie_white_list_v0v1}
  */
  readonly ieWhiteListV0V1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#ie_white_list_v2 ObjectFirewallGtp#ie_white_list_v2}
  */
  readonly ieWhiteListV2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#imsi_filter ObjectFirewallGtp#imsi_filter}
  */
  readonly imsiFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#interface_notify ObjectFirewallGtp#interface_notify}
  */
  readonly interfaceNotify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#invalid_reserved_field ObjectFirewallGtp#invalid_reserved_field}
  */
  readonly invalidReservedField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#invalid_sgsns6_to_log ObjectFirewallGtp#invalid_sgsns6_to_log}
  */
  readonly invalidSgsns6ToLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#invalid_sgsns_to_log ObjectFirewallGtp#invalid_sgsns_to_log}
  */
  readonly invalidSgsnsToLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#ip_filter ObjectFirewallGtp#ip_filter}
  */
  readonly ipFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#log_freq ObjectFirewallGtp#log_freq}
  */
  readonly logFreq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#log_gtpu_limit ObjectFirewallGtp#log_gtpu_limit}
  */
  readonly logGtpuLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#log_imsi_prefix ObjectFirewallGtp#log_imsi_prefix}
  */
  readonly logImsiPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#log_msisdn_prefix ObjectFirewallGtp#log_msisdn_prefix}
  */
  readonly logMsisdnPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#max_message_length ObjectFirewallGtp#max_message_length}
  */
  readonly maxMessageLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#message_filter_v0v1 ObjectFirewallGtp#message_filter_v0v1}
  */
  readonly messageFilterV0V1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#message_filter_v2 ObjectFirewallGtp#message_filter_v2}
  */
  readonly messageFilterV2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#min_message_length ObjectFirewallGtp#min_message_length}
  */
  readonly minMessageLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#miss_must_ie ObjectFirewallGtp#miss_must_ie}
  */
  readonly missMustIe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#monitor_mode ObjectFirewallGtp#monitor_mode}
  */
  readonly monitorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#name ObjectFirewallGtp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#noip_filter ObjectFirewallGtp#noip_filter}
  */
  readonly noipFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#out_of_state_ie ObjectFirewallGtp#out_of_state_ie}
  */
  readonly outOfStateIe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#out_of_state_message ObjectFirewallGtp#out_of_state_message}
  */
  readonly outOfStateMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#policy_filter ObjectFirewallGtp#policy_filter}
  */
  readonly policyFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#port_notify ObjectFirewallGtp#port_notify}
  */
  readonly portNotify?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#rat_timeout_profile ObjectFirewallGtp#rat_timeout_profile}
  */
  readonly ratTimeoutProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#rate_limit_mode ObjectFirewallGtp#rate_limit_mode}
  */
  readonly rateLimitMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#rate_limited_log ObjectFirewallGtp#rate_limited_log}
  */
  readonly rateLimitedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#rate_sampling_interval ObjectFirewallGtp#rate_sampling_interval}
  */
  readonly rateSamplingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#remove_if_echo_expires ObjectFirewallGtp#remove_if_echo_expires}
  */
  readonly removeIfEchoExpires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#remove_if_recovery_differ ObjectFirewallGtp#remove_if_recovery_differ}
  */
  readonly removeIfRecoveryDiffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#reserved_ie ObjectFirewallGtp#reserved_ie}
  */
  readonly reservedIe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#scopetype ObjectFirewallGtp#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#send_delete_when_timeout ObjectFirewallGtp#send_delete_when_timeout}
  */
  readonly sendDeleteWhenTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#send_delete_when_timeout_v2 ObjectFirewallGtp#send_delete_when_timeout_v2}
  */
  readonly sendDeleteWhenTimeoutV2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#spoof_src_addr ObjectFirewallGtp#spoof_src_addr}
  */
  readonly spoofSrcAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#state_invalid_log ObjectFirewallGtp#state_invalid_log}
  */
  readonly stateInvalidLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#sub_second_interval ObjectFirewallGtp#sub_second_interval}
  */
  readonly subSecondInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#sub_second_sampling ObjectFirewallGtp#sub_second_sampling}
  */
  readonly subSecondSampling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#traffic_count_log ObjectFirewallGtp#traffic_count_log}
  */
  readonly trafficCountLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#tunnel_limit ObjectFirewallGtp#tunnel_limit}
  */
  readonly tunnelLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#tunnel_limit_log ObjectFirewallGtp#tunnel_limit_log}
  */
  readonly tunnelLimitLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#tunnel_timeout ObjectFirewallGtp#tunnel_timeout}
  */
  readonly tunnelTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#unknown_version_action ObjectFirewallGtp#unknown_version_action}
  */
  readonly unknownVersionAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#user_plane_message_rate_limit ObjectFirewallGtp#user_plane_message_rate_limit}
  */
  readonly userPlaneMessageRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#warning_threshold ObjectFirewallGtp#warning_threshold}
  */
  readonly warningThreshold?: number;
  /**
  * apn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#apn ObjectFirewallGtp#apn}
  */
  readonly apn?: ObjectFirewallGtpApn[] | cdktf.IResolvable;
  /**
  * ie_remove_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#ie_remove_policy ObjectFirewallGtp#ie_remove_policy}
  */
  readonly ieRemovePolicy?: ObjectFirewallGtpIeRemovePolicy[] | cdktf.IResolvable;
  /**
  * ie_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#ie_validation ObjectFirewallGtp#ie_validation}
  */
  readonly ieValidation?: ObjectFirewallGtpIeValidation;
  /**
  * imsi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#imsi ObjectFirewallGtp#imsi}
  */
  readonly imsi?: ObjectFirewallGtpImsi[] | cdktf.IResolvable;
  /**
  * ip_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#ip_policy ObjectFirewallGtp#ip_policy}
  */
  readonly ipPolicy?: ObjectFirewallGtpIpPolicy[] | cdktf.IResolvable;
  /**
  * message_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#message_rate_limit ObjectFirewallGtp#message_rate_limit}
  */
  readonly messageRateLimit?: ObjectFirewallGtpMessageRateLimit;
  /**
  * message_rate_limit_v0 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#message_rate_limit_v0 ObjectFirewallGtp#message_rate_limit_v0}
  */
  readonly messageRateLimitV0?: ObjectFirewallGtpMessageRateLimitV0;
  /**
  * message_rate_limit_v1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#message_rate_limit_v1 ObjectFirewallGtp#message_rate_limit_v1}
  */
  readonly messageRateLimitV1?: ObjectFirewallGtpMessageRateLimitV1;
  /**
  * message_rate_limit_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#message_rate_limit_v2 ObjectFirewallGtp#message_rate_limit_v2}
  */
  readonly messageRateLimitV2?: ObjectFirewallGtpMessageRateLimitV2;
  /**
  * noip_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#noip_policy ObjectFirewallGtp#noip_policy}
  */
  readonly noipPolicy?: ObjectFirewallGtpNoipPolicy[] | cdktf.IResolvable;
  /**
  * per_apn_shaper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#per_apn_shaper ObjectFirewallGtp#per_apn_shaper}
  */
  readonly perApnShaper?: ObjectFirewallGtpPerApnShaper[] | cdktf.IResolvable;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#policy ObjectFirewallGtp#policy}
  */
  readonly policy?: ObjectFirewallGtpPolicy[] | cdktf.IResolvable;
  /**
  * policy_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#policy_v2 ObjectFirewallGtp#policy_v2}
  */
  readonly policyV2?: ObjectFirewallGtpPolicyV2[] | cdktf.IResolvable;
}
export interface ObjectFirewallGtpApn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#action ObjectFirewallGtp#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#apnmember ObjectFirewallGtp#apnmember}
  */
  readonly apnmember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#id ObjectFirewallGtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#selection_mode ObjectFirewallGtp#selection_mode}
  */
  readonly selectionMode?: string[];
}

export function objectFirewallGtpApnToTerraform(struct?: ObjectFirewallGtpApn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    apnmember: cdktf.stringToTerraform(struct!.apnmember),
    id: cdktf.numberToTerraform(struct!.id),
    selection_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectionMode),
  }
}


export function objectFirewallGtpApnToHclTerraform(struct?: ObjectFirewallGtpApn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apnmember: {
      value: cdktf.stringToHclTerraform(struct!.apnmember),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selection_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectionMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpApnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallGtpApn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._apnmember !== undefined) {
      hasAnyValues = true;
      internalValueResult.apnmember = this._apnmember;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._selectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionMode = this._selectionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpApn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._apnmember = undefined;
      this._id = undefined;
      this._selectionMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._apnmember = value.apnmember;
      this._id = value.id;
      this._selectionMode = value.selectionMode;
    }
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

  // apnmember - computed: false, optional: true, required: false
  private _apnmember?: string; 
  public get apnmember() {
    return this.getStringAttribute('apnmember');
  }
  public set apnmember(value: string) {
    this._apnmember = value;
  }
  public resetApnmember() {
    this._apnmember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnmemberInput() {
    return this._apnmember;
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

  // selection_mode - computed: true, optional: true, required: false
  private _selectionMode?: string[]; 
  public get selectionMode() {
    return cdktf.Fn.tolist(this.getListAttribute('selection_mode'));
  }
  public set selectionMode(value: string[]) {
    this._selectionMode = value;
  }
  public resetSelectionMode() {
    this._selectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionModeInput() {
    return this._selectionMode;
  }
}

export class ObjectFirewallGtpApnList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallGtpApn[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallGtpApnOutputReference {
    return new ObjectFirewallGtpApnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallGtpIeRemovePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#id ObjectFirewallGtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#remove_ies ObjectFirewallGtp#remove_ies}
  */
  readonly removeIes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#sgsn_addr ObjectFirewallGtp#sgsn_addr}
  */
  readonly sgsnAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#sgsn_addr6 ObjectFirewallGtp#sgsn_addr6}
  */
  readonly sgsnAddr6?: string;
}

export function objectFirewallGtpIeRemovePolicyToTerraform(struct?: ObjectFirewallGtpIeRemovePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    remove_ies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeIes),
    sgsn_addr: cdktf.stringToTerraform(struct!.sgsnAddr),
    sgsn_addr6: cdktf.stringToTerraform(struct!.sgsnAddr6),
  }
}


export function objectFirewallGtpIeRemovePolicyToHclTerraform(struct?: ObjectFirewallGtpIeRemovePolicy | cdktf.IResolvable): any {
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
    remove_ies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeIes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sgsn_addr: {
      value: cdktf.stringToHclTerraform(struct!.sgsnAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sgsn_addr6: {
      value: cdktf.stringToHclTerraform(struct!.sgsnAddr6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpIeRemovePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallGtpIeRemovePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._removeIes !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeIes = this._removeIes;
    }
    if (this._sgsnAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgsnAddr = this._sgsnAddr;
    }
    if (this._sgsnAddr6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgsnAddr6 = this._sgsnAddr6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpIeRemovePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._removeIes = undefined;
      this._sgsnAddr = undefined;
      this._sgsnAddr6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._removeIes = value.removeIes;
      this._sgsnAddr = value.sgsnAddr;
      this._sgsnAddr6 = value.sgsnAddr6;
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

  // remove_ies - computed: true, optional: true, required: false
  private _removeIes?: string[]; 
  public get removeIes() {
    return cdktf.Fn.tolist(this.getListAttribute('remove_ies'));
  }
  public set removeIes(value: string[]) {
    this._removeIes = value;
  }
  public resetRemoveIes() {
    this._removeIes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeIesInput() {
    return this._removeIes;
  }

  // sgsn_addr - computed: false, optional: true, required: false
  private _sgsnAddr?: string; 
  public get sgsnAddr() {
    return this.getStringAttribute('sgsn_addr');
  }
  public set sgsnAddr(value: string) {
    this._sgsnAddr = value;
  }
  public resetSgsnAddr() {
    this._sgsnAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgsnAddrInput() {
    return this._sgsnAddr;
  }

  // sgsn_addr6 - computed: false, optional: true, required: false
  private _sgsnAddr6?: string; 
  public get sgsnAddr6() {
    return this.getStringAttribute('sgsn_addr6');
  }
  public set sgsnAddr6(value: string) {
    this._sgsnAddr6 = value;
  }
  public resetSgsnAddr6() {
    this._sgsnAddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgsnAddr6Input() {
    return this._sgsnAddr6;
  }
}

export class ObjectFirewallGtpIeRemovePolicyList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallGtpIeRemovePolicy[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallGtpIeRemovePolicyOutputReference {
    return new ObjectFirewallGtpIeRemovePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallGtpIeValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#apn_restriction ObjectFirewallGtp#apn_restriction}
  */
  readonly apnRestriction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#charging_gateway_addr ObjectFirewallGtp#charging_gateway_addr}
  */
  readonly chargingGatewayAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#charging_id ObjectFirewallGtp#charging_id}
  */
  readonly chargingId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#end_user_addr ObjectFirewallGtp#end_user_addr}
  */
  readonly endUserAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#gsn_addr ObjectFirewallGtp#gsn_addr}
  */
  readonly gsnAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#imei ObjectFirewallGtp#imei}
  */
  readonly imei?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#imsi ObjectFirewallGtp#imsi}
  */
  readonly imsi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mm_context ObjectFirewallGtp#mm_context}
  */
  readonly mmContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#ms_tzone ObjectFirewallGtp#ms_tzone}
  */
  readonly msTzone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#ms_validated ObjectFirewallGtp#ms_validated}
  */
  readonly msValidated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#msisdn ObjectFirewallGtp#msisdn}
  */
  readonly msisdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#nsapi ObjectFirewallGtp#nsapi}
  */
  readonly nsapi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#pdp_context ObjectFirewallGtp#pdp_context}
  */
  readonly pdpContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#qos_profile ObjectFirewallGtp#qos_profile}
  */
  readonly qosProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#rai ObjectFirewallGtp#rai}
  */
  readonly rai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#rat_type ObjectFirewallGtp#rat_type}
  */
  readonly ratType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#reordering_required ObjectFirewallGtp#reordering_required}
  */
  readonly reorderingRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#selection_mode ObjectFirewallGtp#selection_mode}
  */
  readonly selectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#uli ObjectFirewallGtp#uli}
  */
  readonly uli?: string;
}

export function objectFirewallGtpIeValidationToTerraform(struct?: ObjectFirewallGtpIeValidationOutputReference | ObjectFirewallGtpIeValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apn_restriction: cdktf.stringToTerraform(struct!.apnRestriction),
    charging_gateway_addr: cdktf.stringToTerraform(struct!.chargingGatewayAddr),
    charging_id: cdktf.stringToTerraform(struct!.chargingId),
    end_user_addr: cdktf.stringToTerraform(struct!.endUserAddr),
    gsn_addr: cdktf.stringToTerraform(struct!.gsnAddr),
    imei: cdktf.stringToTerraform(struct!.imei),
    imsi: cdktf.stringToTerraform(struct!.imsi),
    mm_context: cdktf.stringToTerraform(struct!.mmContext),
    ms_tzone: cdktf.stringToTerraform(struct!.msTzone),
    ms_validated: cdktf.stringToTerraform(struct!.msValidated),
    msisdn: cdktf.stringToTerraform(struct!.msisdn),
    nsapi: cdktf.stringToTerraform(struct!.nsapi),
    pdp_context: cdktf.stringToTerraform(struct!.pdpContext),
    qos_profile: cdktf.stringToTerraform(struct!.qosProfile),
    rai: cdktf.stringToTerraform(struct!.rai),
    rat_type: cdktf.stringToTerraform(struct!.ratType),
    reordering_required: cdktf.stringToTerraform(struct!.reorderingRequired),
    selection_mode: cdktf.stringToTerraform(struct!.selectionMode),
    uli: cdktf.stringToTerraform(struct!.uli),
  }
}


export function objectFirewallGtpIeValidationToHclTerraform(struct?: ObjectFirewallGtpIeValidationOutputReference | ObjectFirewallGtpIeValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apn_restriction: {
      value: cdktf.stringToHclTerraform(struct!.apnRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    charging_gateway_addr: {
      value: cdktf.stringToHclTerraform(struct!.chargingGatewayAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    charging_id: {
      value: cdktf.stringToHclTerraform(struct!.chargingId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_user_addr: {
      value: cdktf.stringToHclTerraform(struct!.endUserAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gsn_addr: {
      value: cdktf.stringToHclTerraform(struct!.gsnAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imei: {
      value: cdktf.stringToHclTerraform(struct!.imei),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imsi: {
      value: cdktf.stringToHclTerraform(struct!.imsi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mm_context: {
      value: cdktf.stringToHclTerraform(struct!.mmContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ms_tzone: {
      value: cdktf.stringToHclTerraform(struct!.msTzone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ms_validated: {
      value: cdktf.stringToHclTerraform(struct!.msValidated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msisdn: {
      value: cdktf.stringToHclTerraform(struct!.msisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsapi: {
      value: cdktf.stringToHclTerraform(struct!.nsapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdp_context: {
      value: cdktf.stringToHclTerraform(struct!.pdpContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_profile: {
      value: cdktf.stringToHclTerraform(struct!.qosProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rai: {
      value: cdktf.stringToHclTerraform(struct!.rai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rat_type: {
      value: cdktf.stringToHclTerraform(struct!.ratType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reordering_required: {
      value: cdktf.stringToHclTerraform(struct!.reorderingRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_mode: {
      value: cdktf.stringToHclTerraform(struct!.selectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uli: {
      value: cdktf.stringToHclTerraform(struct!.uli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpIeValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallGtpIeValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apnRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.apnRestriction = this._apnRestriction;
    }
    if (this._chargingGatewayAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.chargingGatewayAddr = this._chargingGatewayAddr;
    }
    if (this._chargingId !== undefined) {
      hasAnyValues = true;
      internalValueResult.chargingId = this._chargingId;
    }
    if (this._endUserAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.endUserAddr = this._endUserAddr;
    }
    if (this._gsnAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsnAddr = this._gsnAddr;
    }
    if (this._imei !== undefined) {
      hasAnyValues = true;
      internalValueResult.imei = this._imei;
    }
    if (this._imsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsi = this._imsi;
    }
    if (this._mmContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.mmContext = this._mmContext;
    }
    if (this._msTzone !== undefined) {
      hasAnyValues = true;
      internalValueResult.msTzone = this._msTzone;
    }
    if (this._msValidated !== undefined) {
      hasAnyValues = true;
      internalValueResult.msValidated = this._msValidated;
    }
    if (this._msisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msisdn = this._msisdn;
    }
    if (this._nsapi !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsapi = this._nsapi;
    }
    if (this._pdpContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdpContext = this._pdpContext;
    }
    if (this._qosProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosProfile = this._qosProfile;
    }
    if (this._rai !== undefined) {
      hasAnyValues = true;
      internalValueResult.rai = this._rai;
    }
    if (this._ratType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratType = this._ratType;
    }
    if (this._reorderingRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.reorderingRequired = this._reorderingRequired;
    }
    if (this._selectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionMode = this._selectionMode;
    }
    if (this._uli !== undefined) {
      hasAnyValues = true;
      internalValueResult.uli = this._uli;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpIeValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apnRestriction = undefined;
      this._chargingGatewayAddr = undefined;
      this._chargingId = undefined;
      this._endUserAddr = undefined;
      this._gsnAddr = undefined;
      this._imei = undefined;
      this._imsi = undefined;
      this._mmContext = undefined;
      this._msTzone = undefined;
      this._msValidated = undefined;
      this._msisdn = undefined;
      this._nsapi = undefined;
      this._pdpContext = undefined;
      this._qosProfile = undefined;
      this._rai = undefined;
      this._ratType = undefined;
      this._reorderingRequired = undefined;
      this._selectionMode = undefined;
      this._uli = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apnRestriction = value.apnRestriction;
      this._chargingGatewayAddr = value.chargingGatewayAddr;
      this._chargingId = value.chargingId;
      this._endUserAddr = value.endUserAddr;
      this._gsnAddr = value.gsnAddr;
      this._imei = value.imei;
      this._imsi = value.imsi;
      this._mmContext = value.mmContext;
      this._msTzone = value.msTzone;
      this._msValidated = value.msValidated;
      this._msisdn = value.msisdn;
      this._nsapi = value.nsapi;
      this._pdpContext = value.pdpContext;
      this._qosProfile = value.qosProfile;
      this._rai = value.rai;
      this._ratType = value.ratType;
      this._reorderingRequired = value.reorderingRequired;
      this._selectionMode = value.selectionMode;
      this._uli = value.uli;
    }
  }

  // apn_restriction - computed: false, optional: true, required: false
  private _apnRestriction?: string; 
  public get apnRestriction() {
    return this.getStringAttribute('apn_restriction');
  }
  public set apnRestriction(value: string) {
    this._apnRestriction = value;
  }
  public resetApnRestriction() {
    this._apnRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnRestrictionInput() {
    return this._apnRestriction;
  }

  // charging_gateway_addr - computed: false, optional: true, required: false
  private _chargingGatewayAddr?: string; 
  public get chargingGatewayAddr() {
    return this.getStringAttribute('charging_gateway_addr');
  }
  public set chargingGatewayAddr(value: string) {
    this._chargingGatewayAddr = value;
  }
  public resetChargingGatewayAddr() {
    this._chargingGatewayAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargingGatewayAddrInput() {
    return this._chargingGatewayAddr;
  }

  // charging_id - computed: false, optional: true, required: false
  private _chargingId?: string; 
  public get chargingId() {
    return this.getStringAttribute('charging_id');
  }
  public set chargingId(value: string) {
    this._chargingId = value;
  }
  public resetChargingId() {
    this._chargingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargingIdInput() {
    return this._chargingId;
  }

  // end_user_addr - computed: false, optional: true, required: false
  private _endUserAddr?: string; 
  public get endUserAddr() {
    return this.getStringAttribute('end_user_addr');
  }
  public set endUserAddr(value: string) {
    this._endUserAddr = value;
  }
  public resetEndUserAddr() {
    this._endUserAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserAddrInput() {
    return this._endUserAddr;
  }

  // gsn_addr - computed: false, optional: true, required: false
  private _gsnAddr?: string; 
  public get gsnAddr() {
    return this.getStringAttribute('gsn_addr');
  }
  public set gsnAddr(value: string) {
    this._gsnAddr = value;
  }
  public resetGsnAddr() {
    this._gsnAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsnAddrInput() {
    return this._gsnAddr;
  }

  // imei - computed: false, optional: true, required: false
  private _imei?: string; 
  public get imei() {
    return this.getStringAttribute('imei');
  }
  public set imei(value: string) {
    this._imei = value;
  }
  public resetImei() {
    this._imei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imeiInput() {
    return this._imei;
  }

  // imsi - computed: false, optional: true, required: false
  private _imsi?: string; 
  public get imsi() {
    return this.getStringAttribute('imsi');
  }
  public set imsi(value: string) {
    this._imsi = value;
  }
  public resetImsi() {
    this._imsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiInput() {
    return this._imsi;
  }

  // mm_context - computed: false, optional: true, required: false
  private _mmContext?: string; 
  public get mmContext() {
    return this.getStringAttribute('mm_context');
  }
  public set mmContext(value: string) {
    this._mmContext = value;
  }
  public resetMmContext() {
    this._mmContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmContextInput() {
    return this._mmContext;
  }

  // ms_tzone - computed: false, optional: true, required: false
  private _msTzone?: string; 
  public get msTzone() {
    return this.getStringAttribute('ms_tzone');
  }
  public set msTzone(value: string) {
    this._msTzone = value;
  }
  public resetMsTzone() {
    this._msTzone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msTzoneInput() {
    return this._msTzone;
  }

  // ms_validated - computed: false, optional: true, required: false
  private _msValidated?: string; 
  public get msValidated() {
    return this.getStringAttribute('ms_validated');
  }
  public set msValidated(value: string) {
    this._msValidated = value;
  }
  public resetMsValidated() {
    this._msValidated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msValidatedInput() {
    return this._msValidated;
  }

  // msisdn - computed: false, optional: true, required: false
  private _msisdn?: string; 
  public get msisdn() {
    return this.getStringAttribute('msisdn');
  }
  public set msisdn(value: string) {
    this._msisdn = value;
  }
  public resetMsisdn() {
    this._msisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnInput() {
    return this._msisdn;
  }

  // nsapi - computed: false, optional: true, required: false
  private _nsapi?: string; 
  public get nsapi() {
    return this.getStringAttribute('nsapi');
  }
  public set nsapi(value: string) {
    this._nsapi = value;
  }
  public resetNsapi() {
    this._nsapi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsapiInput() {
    return this._nsapi;
  }

  // pdp_context - computed: false, optional: true, required: false
  private _pdpContext?: string; 
  public get pdpContext() {
    return this.getStringAttribute('pdp_context');
  }
  public set pdpContext(value: string) {
    this._pdpContext = value;
  }
  public resetPdpContext() {
    this._pdpContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdpContextInput() {
    return this._pdpContext;
  }

  // qos_profile - computed: false, optional: true, required: false
  private _qosProfile?: string; 
  public get qosProfile() {
    return this.getStringAttribute('qos_profile');
  }
  public set qosProfile(value: string) {
    this._qosProfile = value;
  }
  public resetQosProfile() {
    this._qosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosProfileInput() {
    return this._qosProfile;
  }

  // rai - computed: false, optional: true, required: false
  private _rai?: string; 
  public get rai() {
    return this.getStringAttribute('rai');
  }
  public set rai(value: string) {
    this._rai = value;
  }
  public resetRai() {
    this._rai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raiInput() {
    return this._rai;
  }

  // rat_type - computed: false, optional: true, required: false
  private _ratType?: string; 
  public get ratType() {
    return this.getStringAttribute('rat_type');
  }
  public set ratType(value: string) {
    this._ratType = value;
  }
  public resetRatType() {
    this._ratType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratTypeInput() {
    return this._ratType;
  }

  // reordering_required - computed: false, optional: true, required: false
  private _reorderingRequired?: string; 
  public get reorderingRequired() {
    return this.getStringAttribute('reordering_required');
  }
  public set reorderingRequired(value: string) {
    this._reorderingRequired = value;
  }
  public resetReorderingRequired() {
    this._reorderingRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reorderingRequiredInput() {
    return this._reorderingRequired;
  }

  // selection_mode - computed: false, optional: true, required: false
  private _selectionMode?: string; 
  public get selectionMode() {
    return this.getStringAttribute('selection_mode');
  }
  public set selectionMode(value: string) {
    this._selectionMode = value;
  }
  public resetSelectionMode() {
    this._selectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionModeInput() {
    return this._selectionMode;
  }

  // uli - computed: false, optional: true, required: false
  private _uli?: string; 
  public get uli() {
    return this.getStringAttribute('uli');
  }
  public set uli(value: string) {
    this._uli = value;
  }
  public resetUli() {
    this._uli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uliInput() {
    return this._uli;
  }
}
export interface ObjectFirewallGtpImsi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#action ObjectFirewallGtp#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#apnmember ObjectFirewallGtp#apnmember}
  */
  readonly apnmember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#id ObjectFirewallGtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mcc_mnc ObjectFirewallGtp#mcc_mnc}
  */
  readonly mccMnc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#msisdn_prefix ObjectFirewallGtp#msisdn_prefix}
  */
  readonly msisdnPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#selection_mode ObjectFirewallGtp#selection_mode}
  */
  readonly selectionMode?: string[];
}

export function objectFirewallGtpImsiToTerraform(struct?: ObjectFirewallGtpImsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    apnmember: cdktf.stringToTerraform(struct!.apnmember),
    id: cdktf.numberToTerraform(struct!.id),
    mcc_mnc: cdktf.stringToTerraform(struct!.mccMnc),
    msisdn_prefix: cdktf.stringToTerraform(struct!.msisdnPrefix),
    selection_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectionMode),
  }
}


export function objectFirewallGtpImsiToHclTerraform(struct?: ObjectFirewallGtpImsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apnmember: {
      value: cdktf.stringToHclTerraform(struct!.apnmember),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcc_mnc: {
      value: cdktf.stringToHclTerraform(struct!.mccMnc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msisdn_prefix: {
      value: cdktf.stringToHclTerraform(struct!.msisdnPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectionMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpImsiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallGtpImsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._apnmember !== undefined) {
      hasAnyValues = true;
      internalValueResult.apnmember = this._apnmember;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mccMnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.mccMnc = this._mccMnc;
    }
    if (this._msisdnPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.msisdnPrefix = this._msisdnPrefix;
    }
    if (this._selectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionMode = this._selectionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpImsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._apnmember = undefined;
      this._id = undefined;
      this._mccMnc = undefined;
      this._msisdnPrefix = undefined;
      this._selectionMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._apnmember = value.apnmember;
      this._id = value.id;
      this._mccMnc = value.mccMnc;
      this._msisdnPrefix = value.msisdnPrefix;
      this._selectionMode = value.selectionMode;
    }
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

  // apnmember - computed: false, optional: true, required: false
  private _apnmember?: string; 
  public get apnmember() {
    return this.getStringAttribute('apnmember');
  }
  public set apnmember(value: string) {
    this._apnmember = value;
  }
  public resetApnmember() {
    this._apnmember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnmemberInput() {
    return this._apnmember;
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

  // mcc_mnc - computed: false, optional: true, required: false
  private _mccMnc?: string; 
  public get mccMnc() {
    return this.getStringAttribute('mcc_mnc');
  }
  public set mccMnc(value: string) {
    this._mccMnc = value;
  }
  public resetMccMnc() {
    this._mccMnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mccMncInput() {
    return this._mccMnc;
  }

  // msisdn_prefix - computed: false, optional: true, required: false
  private _msisdnPrefix?: string; 
  public get msisdnPrefix() {
    return this.getStringAttribute('msisdn_prefix');
  }
  public set msisdnPrefix(value: string) {
    this._msisdnPrefix = value;
  }
  public resetMsisdnPrefix() {
    this._msisdnPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnPrefixInput() {
    return this._msisdnPrefix;
  }

  // selection_mode - computed: true, optional: true, required: false
  private _selectionMode?: string[]; 
  public get selectionMode() {
    return cdktf.Fn.tolist(this.getListAttribute('selection_mode'));
  }
  public set selectionMode(value: string[]) {
    this._selectionMode = value;
  }
  public resetSelectionMode() {
    this._selectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionModeInput() {
    return this._selectionMode;
  }
}

export class ObjectFirewallGtpImsiList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallGtpImsi[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallGtpImsiOutputReference {
    return new ObjectFirewallGtpImsiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallGtpIpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#action ObjectFirewallGtp#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#dstaddr ObjectFirewallGtp#dstaddr}
  */
  readonly dstaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#dstaddr6 ObjectFirewallGtp#dstaddr6}
  */
  readonly dstaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#id ObjectFirewallGtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#srcaddr ObjectFirewallGtp#srcaddr}
  */
  readonly srcaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#srcaddr6 ObjectFirewallGtp#srcaddr6}
  */
  readonly srcaddr6?: string;
}

export function objectFirewallGtpIpPolicyToTerraform(struct?: ObjectFirewallGtpIpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dstaddr: cdktf.stringToTerraform(struct!.dstaddr),
    dstaddr6: cdktf.stringToTerraform(struct!.dstaddr6),
    id: cdktf.numberToTerraform(struct!.id),
    srcaddr: cdktf.stringToTerraform(struct!.srcaddr),
    srcaddr6: cdktf.stringToTerraform(struct!.srcaddr6),
  }
}


export function objectFirewallGtpIpPolicyToHclTerraform(struct?: ObjectFirewallGtpIpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstaddr: {
      value: cdktf.stringToHclTerraform(struct!.dstaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstaddr6: {
      value: cdktf.stringToHclTerraform(struct!.dstaddr6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srcaddr: {
      value: cdktf.stringToHclTerraform(struct!.srcaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcaddr6: {
      value: cdktf.stringToHclTerraform(struct!.srcaddr6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpIpPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallGtpIpPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dstaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstaddr = this._dstaddr;
    }
    if (this._dstaddr6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstaddr6 = this._dstaddr6;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._srcaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcaddr = this._srcaddr;
    }
    if (this._srcaddr6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcaddr6 = this._srcaddr6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpIpPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dstaddr = undefined;
      this._dstaddr6 = undefined;
      this._id = undefined;
      this._srcaddr = undefined;
      this._srcaddr6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dstaddr = value.dstaddr;
      this._dstaddr6 = value.dstaddr6;
      this._id = value.id;
      this._srcaddr = value.srcaddr;
      this._srcaddr6 = value.srcaddr6;
    }
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
}

export class ObjectFirewallGtpIpPolicyList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallGtpIpPolicy[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallGtpIpPolicyOutputReference {
    return new ObjectFirewallGtpIpPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallGtpMessageRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#create_aa_pdp_request ObjectFirewallGtp#create_aa_pdp_request}
  */
  readonly createAaPdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#create_aa_pdp_response ObjectFirewallGtp#create_aa_pdp_response}
  */
  readonly createAaPdpResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#create_mbms_request ObjectFirewallGtp#create_mbms_request}
  */
  readonly createMbmsRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#create_mbms_response ObjectFirewallGtp#create_mbms_response}
  */
  readonly createMbmsResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#create_pdp_request ObjectFirewallGtp#create_pdp_request}
  */
  readonly createPdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#create_pdp_response ObjectFirewallGtp#create_pdp_response}
  */
  readonly createPdpResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#delete_aa_pdp_request ObjectFirewallGtp#delete_aa_pdp_request}
  */
  readonly deleteAaPdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#delete_aa_pdp_response ObjectFirewallGtp#delete_aa_pdp_response}
  */
  readonly deleteAaPdpResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#delete_mbms_request ObjectFirewallGtp#delete_mbms_request}
  */
  readonly deleteMbmsRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#delete_mbms_response ObjectFirewallGtp#delete_mbms_response}
  */
  readonly deleteMbmsResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#delete_pdp_request ObjectFirewallGtp#delete_pdp_request}
  */
  readonly deletePdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#delete_pdp_response ObjectFirewallGtp#delete_pdp_response}
  */
  readonly deletePdpResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#echo_reponse ObjectFirewallGtp#echo_reponse}
  */
  readonly echoReponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#echo_request ObjectFirewallGtp#echo_request}
  */
  readonly echoRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#echo_response ObjectFirewallGtp#echo_response}
  */
  readonly echoResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#error_indication ObjectFirewallGtp#error_indication}
  */
  readonly errorIndication?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#failure_report_request ObjectFirewallGtp#failure_report_request}
  */
  readonly failureReportRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#failure_report_response ObjectFirewallGtp#failure_report_response}
  */
  readonly failureReportResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#fwd_reloc_complete_ack ObjectFirewallGtp#fwd_reloc_complete_ack}
  */
  readonly fwdRelocCompleteAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#fwd_relocation_complete ObjectFirewallGtp#fwd_relocation_complete}
  */
  readonly fwdRelocationComplete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#fwd_relocation_request ObjectFirewallGtp#fwd_relocation_request}
  */
  readonly fwdRelocationRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#fwd_relocation_response ObjectFirewallGtp#fwd_relocation_response}
  */
  readonly fwdRelocationResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#fwd_srns_context ObjectFirewallGtp#fwd_srns_context}
  */
  readonly fwdSrnsContext?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#fwd_srns_context_ack ObjectFirewallGtp#fwd_srns_context_ack}
  */
  readonly fwdSrnsContextAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#g_pdu ObjectFirewallGtp#g_pdu}
  */
  readonly gPdu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#identification_request ObjectFirewallGtp#identification_request}
  */
  readonly identificationRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#identification_response ObjectFirewallGtp#identification_response}
  */
  readonly identificationResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mbms_de_reg_request ObjectFirewallGtp#mbms_de_reg_request}
  */
  readonly mbmsDeRegRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mbms_de_reg_response ObjectFirewallGtp#mbms_de_reg_response}
  */
  readonly mbmsDeRegResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mbms_notify_rej_request ObjectFirewallGtp#mbms_notify_rej_request}
  */
  readonly mbmsNotifyRejRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mbms_notify_rej_response ObjectFirewallGtp#mbms_notify_rej_response}
  */
  readonly mbmsNotifyRejResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mbms_notify_request ObjectFirewallGtp#mbms_notify_request}
  */
  readonly mbmsNotifyRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mbms_notify_response ObjectFirewallGtp#mbms_notify_response}
  */
  readonly mbmsNotifyResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mbms_reg_request ObjectFirewallGtp#mbms_reg_request}
  */
  readonly mbmsRegRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mbms_reg_response ObjectFirewallGtp#mbms_reg_response}
  */
  readonly mbmsRegResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mbms_ses_start_request ObjectFirewallGtp#mbms_ses_start_request}
  */
  readonly mbmsSesStartRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mbms_ses_start_response ObjectFirewallGtp#mbms_ses_start_response}
  */
  readonly mbmsSesStartResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mbms_ses_stop_request ObjectFirewallGtp#mbms_ses_stop_request}
  */
  readonly mbmsSesStopRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mbms_ses_stop_response ObjectFirewallGtp#mbms_ses_stop_response}
  */
  readonly mbmsSesStopResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#note_ms_request ObjectFirewallGtp#note_ms_request}
  */
  readonly noteMsRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#note_ms_response ObjectFirewallGtp#note_ms_response}
  */
  readonly noteMsResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#pdu_notify_rej_request ObjectFirewallGtp#pdu_notify_rej_request}
  */
  readonly pduNotifyRejRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#pdu_notify_rej_response ObjectFirewallGtp#pdu_notify_rej_response}
  */
  readonly pduNotifyRejResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#pdu_notify_request ObjectFirewallGtp#pdu_notify_request}
  */
  readonly pduNotifyRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#pdu_notify_response ObjectFirewallGtp#pdu_notify_response}
  */
  readonly pduNotifyResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#ran_info ObjectFirewallGtp#ran_info}
  */
  readonly ranInfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#relocation_cancel_request ObjectFirewallGtp#relocation_cancel_request}
  */
  readonly relocationCancelRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#relocation_cancel_response ObjectFirewallGtp#relocation_cancel_response}
  */
  readonly relocationCancelResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#send_route_request ObjectFirewallGtp#send_route_request}
  */
  readonly sendRouteRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#send_route_response ObjectFirewallGtp#send_route_response}
  */
  readonly sendRouteResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#sgsn_context_ack ObjectFirewallGtp#sgsn_context_ack}
  */
  readonly sgsnContextAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#sgsn_context_request ObjectFirewallGtp#sgsn_context_request}
  */
  readonly sgsnContextRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#sgsn_context_response ObjectFirewallGtp#sgsn_context_response}
  */
  readonly sgsnContextResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#support_ext_hdr_notify ObjectFirewallGtp#support_ext_hdr_notify}
  */
  readonly supportExtHdrNotify?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#update_mbms_request ObjectFirewallGtp#update_mbms_request}
  */
  readonly updateMbmsRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#update_mbms_response ObjectFirewallGtp#update_mbms_response}
  */
  readonly updateMbmsResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#update_pdp_request ObjectFirewallGtp#update_pdp_request}
  */
  readonly updatePdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#update_pdp_response ObjectFirewallGtp#update_pdp_response}
  */
  readonly updatePdpResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#version_not_support ObjectFirewallGtp#version_not_support}
  */
  readonly versionNotSupport?: number;
}

export function objectFirewallGtpMessageRateLimitToTerraform(struct?: ObjectFirewallGtpMessageRateLimitOutputReference | ObjectFirewallGtpMessageRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_aa_pdp_request: cdktf.numberToTerraform(struct!.createAaPdpRequest),
    create_aa_pdp_response: cdktf.numberToTerraform(struct!.createAaPdpResponse),
    create_mbms_request: cdktf.numberToTerraform(struct!.createMbmsRequest),
    create_mbms_response: cdktf.numberToTerraform(struct!.createMbmsResponse),
    create_pdp_request: cdktf.numberToTerraform(struct!.createPdpRequest),
    create_pdp_response: cdktf.numberToTerraform(struct!.createPdpResponse),
    delete_aa_pdp_request: cdktf.numberToTerraform(struct!.deleteAaPdpRequest),
    delete_aa_pdp_response: cdktf.numberToTerraform(struct!.deleteAaPdpResponse),
    delete_mbms_request: cdktf.numberToTerraform(struct!.deleteMbmsRequest),
    delete_mbms_response: cdktf.numberToTerraform(struct!.deleteMbmsResponse),
    delete_pdp_request: cdktf.numberToTerraform(struct!.deletePdpRequest),
    delete_pdp_response: cdktf.numberToTerraform(struct!.deletePdpResponse),
    echo_reponse: cdktf.numberToTerraform(struct!.echoReponse),
    echo_request: cdktf.numberToTerraform(struct!.echoRequest),
    echo_response: cdktf.numberToTerraform(struct!.echoResponse),
    error_indication: cdktf.numberToTerraform(struct!.errorIndication),
    failure_report_request: cdktf.numberToTerraform(struct!.failureReportRequest),
    failure_report_response: cdktf.numberToTerraform(struct!.failureReportResponse),
    fwd_reloc_complete_ack: cdktf.numberToTerraform(struct!.fwdRelocCompleteAck),
    fwd_relocation_complete: cdktf.numberToTerraform(struct!.fwdRelocationComplete),
    fwd_relocation_request: cdktf.numberToTerraform(struct!.fwdRelocationRequest),
    fwd_relocation_response: cdktf.numberToTerraform(struct!.fwdRelocationResponse),
    fwd_srns_context: cdktf.numberToTerraform(struct!.fwdSrnsContext),
    fwd_srns_context_ack: cdktf.numberToTerraform(struct!.fwdSrnsContextAck),
    g_pdu: cdktf.numberToTerraform(struct!.gPdu),
    identification_request: cdktf.numberToTerraform(struct!.identificationRequest),
    identification_response: cdktf.numberToTerraform(struct!.identificationResponse),
    mbms_de_reg_request: cdktf.numberToTerraform(struct!.mbmsDeRegRequest),
    mbms_de_reg_response: cdktf.numberToTerraform(struct!.mbmsDeRegResponse),
    mbms_notify_rej_request: cdktf.numberToTerraform(struct!.mbmsNotifyRejRequest),
    mbms_notify_rej_response: cdktf.numberToTerraform(struct!.mbmsNotifyRejResponse),
    mbms_notify_request: cdktf.numberToTerraform(struct!.mbmsNotifyRequest),
    mbms_notify_response: cdktf.numberToTerraform(struct!.mbmsNotifyResponse),
    mbms_reg_request: cdktf.numberToTerraform(struct!.mbmsRegRequest),
    mbms_reg_response: cdktf.numberToTerraform(struct!.mbmsRegResponse),
    mbms_ses_start_request: cdktf.numberToTerraform(struct!.mbmsSesStartRequest),
    mbms_ses_start_response: cdktf.numberToTerraform(struct!.mbmsSesStartResponse),
    mbms_ses_stop_request: cdktf.numberToTerraform(struct!.mbmsSesStopRequest),
    mbms_ses_stop_response: cdktf.numberToTerraform(struct!.mbmsSesStopResponse),
    note_ms_request: cdktf.numberToTerraform(struct!.noteMsRequest),
    note_ms_response: cdktf.numberToTerraform(struct!.noteMsResponse),
    pdu_notify_rej_request: cdktf.numberToTerraform(struct!.pduNotifyRejRequest),
    pdu_notify_rej_response: cdktf.numberToTerraform(struct!.pduNotifyRejResponse),
    pdu_notify_request: cdktf.numberToTerraform(struct!.pduNotifyRequest),
    pdu_notify_response: cdktf.numberToTerraform(struct!.pduNotifyResponse),
    ran_info: cdktf.numberToTerraform(struct!.ranInfo),
    relocation_cancel_request: cdktf.numberToTerraform(struct!.relocationCancelRequest),
    relocation_cancel_response: cdktf.numberToTerraform(struct!.relocationCancelResponse),
    send_route_request: cdktf.numberToTerraform(struct!.sendRouteRequest),
    send_route_response: cdktf.numberToTerraform(struct!.sendRouteResponse),
    sgsn_context_ack: cdktf.numberToTerraform(struct!.sgsnContextAck),
    sgsn_context_request: cdktf.numberToTerraform(struct!.sgsnContextRequest),
    sgsn_context_response: cdktf.numberToTerraform(struct!.sgsnContextResponse),
    support_ext_hdr_notify: cdktf.numberToTerraform(struct!.supportExtHdrNotify),
    update_mbms_request: cdktf.numberToTerraform(struct!.updateMbmsRequest),
    update_mbms_response: cdktf.numberToTerraform(struct!.updateMbmsResponse),
    update_pdp_request: cdktf.numberToTerraform(struct!.updatePdpRequest),
    update_pdp_response: cdktf.numberToTerraform(struct!.updatePdpResponse),
    version_not_support: cdktf.numberToTerraform(struct!.versionNotSupport),
  }
}


export function objectFirewallGtpMessageRateLimitToHclTerraform(struct?: ObjectFirewallGtpMessageRateLimitOutputReference | ObjectFirewallGtpMessageRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_aa_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.createAaPdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_aa_pdp_response: {
      value: cdktf.numberToHclTerraform(struct!.createAaPdpResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_mbms_request: {
      value: cdktf.numberToHclTerraform(struct!.createMbmsRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_mbms_response: {
      value: cdktf.numberToHclTerraform(struct!.createMbmsResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.createPdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_pdp_response: {
      value: cdktf.numberToHclTerraform(struct!.createPdpResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_aa_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.deleteAaPdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_aa_pdp_response: {
      value: cdktf.numberToHclTerraform(struct!.deleteAaPdpResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_mbms_request: {
      value: cdktf.numberToHclTerraform(struct!.deleteMbmsRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_mbms_response: {
      value: cdktf.numberToHclTerraform(struct!.deleteMbmsResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.deletePdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_pdp_response: {
      value: cdktf.numberToHclTerraform(struct!.deletePdpResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    echo_reponse: {
      value: cdktf.numberToHclTerraform(struct!.echoReponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    echo_request: {
      value: cdktf.numberToHclTerraform(struct!.echoRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    echo_response: {
      value: cdktf.numberToHclTerraform(struct!.echoResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_indication: {
      value: cdktf.numberToHclTerraform(struct!.errorIndication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_report_request: {
      value: cdktf.numberToHclTerraform(struct!.failureReportRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_report_response: {
      value: cdktf.numberToHclTerraform(struct!.failureReportResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_reloc_complete_ack: {
      value: cdktf.numberToHclTerraform(struct!.fwdRelocCompleteAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_relocation_complete: {
      value: cdktf.numberToHclTerraform(struct!.fwdRelocationComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_relocation_request: {
      value: cdktf.numberToHclTerraform(struct!.fwdRelocationRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_relocation_response: {
      value: cdktf.numberToHclTerraform(struct!.fwdRelocationResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_srns_context: {
      value: cdktf.numberToHclTerraform(struct!.fwdSrnsContext),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_srns_context_ack: {
      value: cdktf.numberToHclTerraform(struct!.fwdSrnsContextAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    g_pdu: {
      value: cdktf.numberToHclTerraform(struct!.gPdu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    identification_request: {
      value: cdktf.numberToHclTerraform(struct!.identificationRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    identification_response: {
      value: cdktf.numberToHclTerraform(struct!.identificationResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbms_de_reg_request: {
      value: cdktf.numberToHclTerraform(struct!.mbmsDeRegRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbms_de_reg_response: {
      value: cdktf.numberToHclTerraform(struct!.mbmsDeRegResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbms_notify_rej_request: {
      value: cdktf.numberToHclTerraform(struct!.mbmsNotifyRejRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbms_notify_rej_response: {
      value: cdktf.numberToHclTerraform(struct!.mbmsNotifyRejResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbms_notify_request: {
      value: cdktf.numberToHclTerraform(struct!.mbmsNotifyRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbms_notify_response: {
      value: cdktf.numberToHclTerraform(struct!.mbmsNotifyResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbms_reg_request: {
      value: cdktf.numberToHclTerraform(struct!.mbmsRegRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbms_reg_response: {
      value: cdktf.numberToHclTerraform(struct!.mbmsRegResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbms_ses_start_request: {
      value: cdktf.numberToHclTerraform(struct!.mbmsSesStartRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbms_ses_start_response: {
      value: cdktf.numberToHclTerraform(struct!.mbmsSesStartResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbms_ses_stop_request: {
      value: cdktf.numberToHclTerraform(struct!.mbmsSesStopRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbms_ses_stop_response: {
      value: cdktf.numberToHclTerraform(struct!.mbmsSesStopResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    note_ms_request: {
      value: cdktf.numberToHclTerraform(struct!.noteMsRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    note_ms_response: {
      value: cdktf.numberToHclTerraform(struct!.noteMsResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pdu_notify_rej_request: {
      value: cdktf.numberToHclTerraform(struct!.pduNotifyRejRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pdu_notify_rej_response: {
      value: cdktf.numberToHclTerraform(struct!.pduNotifyRejResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pdu_notify_request: {
      value: cdktf.numberToHclTerraform(struct!.pduNotifyRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pdu_notify_response: {
      value: cdktf.numberToHclTerraform(struct!.pduNotifyResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ran_info: {
      value: cdktf.numberToHclTerraform(struct!.ranInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relocation_cancel_request: {
      value: cdktf.numberToHclTerraform(struct!.relocationCancelRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relocation_cancel_response: {
      value: cdktf.numberToHclTerraform(struct!.relocationCancelResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_route_request: {
      value: cdktf.numberToHclTerraform(struct!.sendRouteRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_route_response: {
      value: cdktf.numberToHclTerraform(struct!.sendRouteResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sgsn_context_ack: {
      value: cdktf.numberToHclTerraform(struct!.sgsnContextAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sgsn_context_request: {
      value: cdktf.numberToHclTerraform(struct!.sgsnContextRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sgsn_context_response: {
      value: cdktf.numberToHclTerraform(struct!.sgsnContextResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    support_ext_hdr_notify: {
      value: cdktf.numberToHclTerraform(struct!.supportExtHdrNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_mbms_request: {
      value: cdktf.numberToHclTerraform(struct!.updateMbmsRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_mbms_response: {
      value: cdktf.numberToHclTerraform(struct!.updateMbmsResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.updatePdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_pdp_response: {
      value: cdktf.numberToHclTerraform(struct!.updatePdpResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version_not_support: {
      value: cdktf.numberToHclTerraform(struct!.versionNotSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpMessageRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallGtpMessageRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createAaPdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAaPdpRequest = this._createAaPdpRequest;
    }
    if (this._createAaPdpResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAaPdpResponse = this._createAaPdpResponse;
    }
    if (this._createMbmsRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.createMbmsRequest = this._createMbmsRequest;
    }
    if (this._createMbmsResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.createMbmsResponse = this._createMbmsResponse;
    }
    if (this._createPdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPdpRequest = this._createPdpRequest;
    }
    if (this._createPdpResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPdpResponse = this._createPdpResponse;
    }
    if (this._deleteAaPdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAaPdpRequest = this._deleteAaPdpRequest;
    }
    if (this._deleteAaPdpResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAaPdpResponse = this._deleteAaPdpResponse;
    }
    if (this._deleteMbmsRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMbmsRequest = this._deleteMbmsRequest;
    }
    if (this._deleteMbmsResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMbmsResponse = this._deleteMbmsResponse;
    }
    if (this._deletePdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePdpRequest = this._deletePdpRequest;
    }
    if (this._deletePdpResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePdpResponse = this._deletePdpResponse;
    }
    if (this._echoReponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoReponse = this._echoReponse;
    }
    if (this._echoRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoRequest = this._echoRequest;
    }
    if (this._echoResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoResponse = this._echoResponse;
    }
    if (this._errorIndication !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorIndication = this._errorIndication;
    }
    if (this._failureReportRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureReportRequest = this._failureReportRequest;
    }
    if (this._failureReportResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureReportResponse = this._failureReportResponse;
    }
    if (this._fwdRelocCompleteAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdRelocCompleteAck = this._fwdRelocCompleteAck;
    }
    if (this._fwdRelocationComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdRelocationComplete = this._fwdRelocationComplete;
    }
    if (this._fwdRelocationRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdRelocationRequest = this._fwdRelocationRequest;
    }
    if (this._fwdRelocationResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdRelocationResponse = this._fwdRelocationResponse;
    }
    if (this._fwdSrnsContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdSrnsContext = this._fwdSrnsContext;
    }
    if (this._fwdSrnsContextAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdSrnsContextAck = this._fwdSrnsContextAck;
    }
    if (this._gPdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.gPdu = this._gPdu;
    }
    if (this._identificationRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationRequest = this._identificationRequest;
    }
    if (this._identificationResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.identificationResponse = this._identificationResponse;
    }
    if (this._mbmsDeRegRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsDeRegRequest = this._mbmsDeRegRequest;
    }
    if (this._mbmsDeRegResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsDeRegResponse = this._mbmsDeRegResponse;
    }
    if (this._mbmsNotifyRejRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsNotifyRejRequest = this._mbmsNotifyRejRequest;
    }
    if (this._mbmsNotifyRejResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsNotifyRejResponse = this._mbmsNotifyRejResponse;
    }
    if (this._mbmsNotifyRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsNotifyRequest = this._mbmsNotifyRequest;
    }
    if (this._mbmsNotifyResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsNotifyResponse = this._mbmsNotifyResponse;
    }
    if (this._mbmsRegRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsRegRequest = this._mbmsRegRequest;
    }
    if (this._mbmsRegResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsRegResponse = this._mbmsRegResponse;
    }
    if (this._mbmsSesStartRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsSesStartRequest = this._mbmsSesStartRequest;
    }
    if (this._mbmsSesStartResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsSesStartResponse = this._mbmsSesStartResponse;
    }
    if (this._mbmsSesStopRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsSesStopRequest = this._mbmsSesStopRequest;
    }
    if (this._mbmsSesStopResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsSesStopResponse = this._mbmsSesStopResponse;
    }
    if (this._noteMsRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteMsRequest = this._noteMsRequest;
    }
    if (this._noteMsResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteMsResponse = this._noteMsResponse;
    }
    if (this._pduNotifyRejRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.pduNotifyRejRequest = this._pduNotifyRejRequest;
    }
    if (this._pduNotifyRejResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.pduNotifyRejResponse = this._pduNotifyRejResponse;
    }
    if (this._pduNotifyRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.pduNotifyRequest = this._pduNotifyRequest;
    }
    if (this._pduNotifyResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.pduNotifyResponse = this._pduNotifyResponse;
    }
    if (this._ranInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranInfo = this._ranInfo;
    }
    if (this._relocationCancelRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.relocationCancelRequest = this._relocationCancelRequest;
    }
    if (this._relocationCancelResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.relocationCancelResponse = this._relocationCancelResponse;
    }
    if (this._sendRouteRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendRouteRequest = this._sendRouteRequest;
    }
    if (this._sendRouteResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendRouteResponse = this._sendRouteResponse;
    }
    if (this._sgsnContextAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgsnContextAck = this._sgsnContextAck;
    }
    if (this._sgsnContextRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgsnContextRequest = this._sgsnContextRequest;
    }
    if (this._sgsnContextResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgsnContextResponse = this._sgsnContextResponse;
    }
    if (this._supportExtHdrNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportExtHdrNotify = this._supportExtHdrNotify;
    }
    if (this._updateMbmsRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateMbmsRequest = this._updateMbmsRequest;
    }
    if (this._updateMbmsResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateMbmsResponse = this._updateMbmsResponse;
    }
    if (this._updatePdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePdpRequest = this._updatePdpRequest;
    }
    if (this._updatePdpResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePdpResponse = this._updatePdpResponse;
    }
    if (this._versionNotSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionNotSupport = this._versionNotSupport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpMessageRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createAaPdpRequest = undefined;
      this._createAaPdpResponse = undefined;
      this._createMbmsRequest = undefined;
      this._createMbmsResponse = undefined;
      this._createPdpRequest = undefined;
      this._createPdpResponse = undefined;
      this._deleteAaPdpRequest = undefined;
      this._deleteAaPdpResponse = undefined;
      this._deleteMbmsRequest = undefined;
      this._deleteMbmsResponse = undefined;
      this._deletePdpRequest = undefined;
      this._deletePdpResponse = undefined;
      this._echoReponse = undefined;
      this._echoRequest = undefined;
      this._echoResponse = undefined;
      this._errorIndication = undefined;
      this._failureReportRequest = undefined;
      this._failureReportResponse = undefined;
      this._fwdRelocCompleteAck = undefined;
      this._fwdRelocationComplete = undefined;
      this._fwdRelocationRequest = undefined;
      this._fwdRelocationResponse = undefined;
      this._fwdSrnsContext = undefined;
      this._fwdSrnsContextAck = undefined;
      this._gPdu = undefined;
      this._identificationRequest = undefined;
      this._identificationResponse = undefined;
      this._mbmsDeRegRequest = undefined;
      this._mbmsDeRegResponse = undefined;
      this._mbmsNotifyRejRequest = undefined;
      this._mbmsNotifyRejResponse = undefined;
      this._mbmsNotifyRequest = undefined;
      this._mbmsNotifyResponse = undefined;
      this._mbmsRegRequest = undefined;
      this._mbmsRegResponse = undefined;
      this._mbmsSesStartRequest = undefined;
      this._mbmsSesStartResponse = undefined;
      this._mbmsSesStopRequest = undefined;
      this._mbmsSesStopResponse = undefined;
      this._noteMsRequest = undefined;
      this._noteMsResponse = undefined;
      this._pduNotifyRejRequest = undefined;
      this._pduNotifyRejResponse = undefined;
      this._pduNotifyRequest = undefined;
      this._pduNotifyResponse = undefined;
      this._ranInfo = undefined;
      this._relocationCancelRequest = undefined;
      this._relocationCancelResponse = undefined;
      this._sendRouteRequest = undefined;
      this._sendRouteResponse = undefined;
      this._sgsnContextAck = undefined;
      this._sgsnContextRequest = undefined;
      this._sgsnContextResponse = undefined;
      this._supportExtHdrNotify = undefined;
      this._updateMbmsRequest = undefined;
      this._updateMbmsResponse = undefined;
      this._updatePdpRequest = undefined;
      this._updatePdpResponse = undefined;
      this._versionNotSupport = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createAaPdpRequest = value.createAaPdpRequest;
      this._createAaPdpResponse = value.createAaPdpResponse;
      this._createMbmsRequest = value.createMbmsRequest;
      this._createMbmsResponse = value.createMbmsResponse;
      this._createPdpRequest = value.createPdpRequest;
      this._createPdpResponse = value.createPdpResponse;
      this._deleteAaPdpRequest = value.deleteAaPdpRequest;
      this._deleteAaPdpResponse = value.deleteAaPdpResponse;
      this._deleteMbmsRequest = value.deleteMbmsRequest;
      this._deleteMbmsResponse = value.deleteMbmsResponse;
      this._deletePdpRequest = value.deletePdpRequest;
      this._deletePdpResponse = value.deletePdpResponse;
      this._echoReponse = value.echoReponse;
      this._echoRequest = value.echoRequest;
      this._echoResponse = value.echoResponse;
      this._errorIndication = value.errorIndication;
      this._failureReportRequest = value.failureReportRequest;
      this._failureReportResponse = value.failureReportResponse;
      this._fwdRelocCompleteAck = value.fwdRelocCompleteAck;
      this._fwdRelocationComplete = value.fwdRelocationComplete;
      this._fwdRelocationRequest = value.fwdRelocationRequest;
      this._fwdRelocationResponse = value.fwdRelocationResponse;
      this._fwdSrnsContext = value.fwdSrnsContext;
      this._fwdSrnsContextAck = value.fwdSrnsContextAck;
      this._gPdu = value.gPdu;
      this._identificationRequest = value.identificationRequest;
      this._identificationResponse = value.identificationResponse;
      this._mbmsDeRegRequest = value.mbmsDeRegRequest;
      this._mbmsDeRegResponse = value.mbmsDeRegResponse;
      this._mbmsNotifyRejRequest = value.mbmsNotifyRejRequest;
      this._mbmsNotifyRejResponse = value.mbmsNotifyRejResponse;
      this._mbmsNotifyRequest = value.mbmsNotifyRequest;
      this._mbmsNotifyResponse = value.mbmsNotifyResponse;
      this._mbmsRegRequest = value.mbmsRegRequest;
      this._mbmsRegResponse = value.mbmsRegResponse;
      this._mbmsSesStartRequest = value.mbmsSesStartRequest;
      this._mbmsSesStartResponse = value.mbmsSesStartResponse;
      this._mbmsSesStopRequest = value.mbmsSesStopRequest;
      this._mbmsSesStopResponse = value.mbmsSesStopResponse;
      this._noteMsRequest = value.noteMsRequest;
      this._noteMsResponse = value.noteMsResponse;
      this._pduNotifyRejRequest = value.pduNotifyRejRequest;
      this._pduNotifyRejResponse = value.pduNotifyRejResponse;
      this._pduNotifyRequest = value.pduNotifyRequest;
      this._pduNotifyResponse = value.pduNotifyResponse;
      this._ranInfo = value.ranInfo;
      this._relocationCancelRequest = value.relocationCancelRequest;
      this._relocationCancelResponse = value.relocationCancelResponse;
      this._sendRouteRequest = value.sendRouteRequest;
      this._sendRouteResponse = value.sendRouteResponse;
      this._sgsnContextAck = value.sgsnContextAck;
      this._sgsnContextRequest = value.sgsnContextRequest;
      this._sgsnContextResponse = value.sgsnContextResponse;
      this._supportExtHdrNotify = value.supportExtHdrNotify;
      this._updateMbmsRequest = value.updateMbmsRequest;
      this._updateMbmsResponse = value.updateMbmsResponse;
      this._updatePdpRequest = value.updatePdpRequest;
      this._updatePdpResponse = value.updatePdpResponse;
      this._versionNotSupport = value.versionNotSupport;
    }
  }

  // create_aa_pdp_request - computed: false, optional: true, required: false
  private _createAaPdpRequest?: number; 
  public get createAaPdpRequest() {
    return this.getNumberAttribute('create_aa_pdp_request');
  }
  public set createAaPdpRequest(value: number) {
    this._createAaPdpRequest = value;
  }
  public resetCreateAaPdpRequest() {
    this._createAaPdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAaPdpRequestInput() {
    return this._createAaPdpRequest;
  }

  // create_aa_pdp_response - computed: false, optional: true, required: false
  private _createAaPdpResponse?: number; 
  public get createAaPdpResponse() {
    return this.getNumberAttribute('create_aa_pdp_response');
  }
  public set createAaPdpResponse(value: number) {
    this._createAaPdpResponse = value;
  }
  public resetCreateAaPdpResponse() {
    this._createAaPdpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAaPdpResponseInput() {
    return this._createAaPdpResponse;
  }

  // create_mbms_request - computed: false, optional: true, required: false
  private _createMbmsRequest?: number; 
  public get createMbmsRequest() {
    return this.getNumberAttribute('create_mbms_request');
  }
  public set createMbmsRequest(value: number) {
    this._createMbmsRequest = value;
  }
  public resetCreateMbmsRequest() {
    this._createMbmsRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMbmsRequestInput() {
    return this._createMbmsRequest;
  }

  // create_mbms_response - computed: false, optional: true, required: false
  private _createMbmsResponse?: number; 
  public get createMbmsResponse() {
    return this.getNumberAttribute('create_mbms_response');
  }
  public set createMbmsResponse(value: number) {
    this._createMbmsResponse = value;
  }
  public resetCreateMbmsResponse() {
    this._createMbmsResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMbmsResponseInput() {
    return this._createMbmsResponse;
  }

  // create_pdp_request - computed: false, optional: true, required: false
  private _createPdpRequest?: number; 
  public get createPdpRequest() {
    return this.getNumberAttribute('create_pdp_request');
  }
  public set createPdpRequest(value: number) {
    this._createPdpRequest = value;
  }
  public resetCreatePdpRequest() {
    this._createPdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPdpRequestInput() {
    return this._createPdpRequest;
  }

  // create_pdp_response - computed: false, optional: true, required: false
  private _createPdpResponse?: number; 
  public get createPdpResponse() {
    return this.getNumberAttribute('create_pdp_response');
  }
  public set createPdpResponse(value: number) {
    this._createPdpResponse = value;
  }
  public resetCreatePdpResponse() {
    this._createPdpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPdpResponseInput() {
    return this._createPdpResponse;
  }

  // delete_aa_pdp_request - computed: false, optional: true, required: false
  private _deleteAaPdpRequest?: number; 
  public get deleteAaPdpRequest() {
    return this.getNumberAttribute('delete_aa_pdp_request');
  }
  public set deleteAaPdpRequest(value: number) {
    this._deleteAaPdpRequest = value;
  }
  public resetDeleteAaPdpRequest() {
    this._deleteAaPdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAaPdpRequestInput() {
    return this._deleteAaPdpRequest;
  }

  // delete_aa_pdp_response - computed: false, optional: true, required: false
  private _deleteAaPdpResponse?: number; 
  public get deleteAaPdpResponse() {
    return this.getNumberAttribute('delete_aa_pdp_response');
  }
  public set deleteAaPdpResponse(value: number) {
    this._deleteAaPdpResponse = value;
  }
  public resetDeleteAaPdpResponse() {
    this._deleteAaPdpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAaPdpResponseInput() {
    return this._deleteAaPdpResponse;
  }

  // delete_mbms_request - computed: false, optional: true, required: false
  private _deleteMbmsRequest?: number; 
  public get deleteMbmsRequest() {
    return this.getNumberAttribute('delete_mbms_request');
  }
  public set deleteMbmsRequest(value: number) {
    this._deleteMbmsRequest = value;
  }
  public resetDeleteMbmsRequest() {
    this._deleteMbmsRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMbmsRequestInput() {
    return this._deleteMbmsRequest;
  }

  // delete_mbms_response - computed: false, optional: true, required: false
  private _deleteMbmsResponse?: number; 
  public get deleteMbmsResponse() {
    return this.getNumberAttribute('delete_mbms_response');
  }
  public set deleteMbmsResponse(value: number) {
    this._deleteMbmsResponse = value;
  }
  public resetDeleteMbmsResponse() {
    this._deleteMbmsResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMbmsResponseInput() {
    return this._deleteMbmsResponse;
  }

  // delete_pdp_request - computed: false, optional: true, required: false
  private _deletePdpRequest?: number; 
  public get deletePdpRequest() {
    return this.getNumberAttribute('delete_pdp_request');
  }
  public set deletePdpRequest(value: number) {
    this._deletePdpRequest = value;
  }
  public resetDeletePdpRequest() {
    this._deletePdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePdpRequestInput() {
    return this._deletePdpRequest;
  }

  // delete_pdp_response - computed: false, optional: true, required: false
  private _deletePdpResponse?: number; 
  public get deletePdpResponse() {
    return this.getNumberAttribute('delete_pdp_response');
  }
  public set deletePdpResponse(value: number) {
    this._deletePdpResponse = value;
  }
  public resetDeletePdpResponse() {
    this._deletePdpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePdpResponseInput() {
    return this._deletePdpResponse;
  }

  // echo_reponse - computed: false, optional: true, required: false
  private _echoReponse?: number; 
  public get echoReponse() {
    return this.getNumberAttribute('echo_reponse');
  }
  public set echoReponse(value: number) {
    this._echoReponse = value;
  }
  public resetEchoReponse() {
    this._echoReponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoReponseInput() {
    return this._echoReponse;
  }

  // echo_request - computed: false, optional: true, required: false
  private _echoRequest?: number; 
  public get echoRequest() {
    return this.getNumberAttribute('echo_request');
  }
  public set echoRequest(value: number) {
    this._echoRequest = value;
  }
  public resetEchoRequest() {
    this._echoRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoRequestInput() {
    return this._echoRequest;
  }

  // echo_response - computed: false, optional: true, required: false
  private _echoResponse?: number; 
  public get echoResponse() {
    return this.getNumberAttribute('echo_response');
  }
  public set echoResponse(value: number) {
    this._echoResponse = value;
  }
  public resetEchoResponse() {
    this._echoResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoResponseInput() {
    return this._echoResponse;
  }

  // error_indication - computed: false, optional: true, required: false
  private _errorIndication?: number; 
  public get errorIndication() {
    return this.getNumberAttribute('error_indication');
  }
  public set errorIndication(value: number) {
    this._errorIndication = value;
  }
  public resetErrorIndication() {
    this._errorIndication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorIndicationInput() {
    return this._errorIndication;
  }

  // failure_report_request - computed: false, optional: true, required: false
  private _failureReportRequest?: number; 
  public get failureReportRequest() {
    return this.getNumberAttribute('failure_report_request');
  }
  public set failureReportRequest(value: number) {
    this._failureReportRequest = value;
  }
  public resetFailureReportRequest() {
    this._failureReportRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureReportRequestInput() {
    return this._failureReportRequest;
  }

  // failure_report_response - computed: false, optional: true, required: false
  private _failureReportResponse?: number; 
  public get failureReportResponse() {
    return this.getNumberAttribute('failure_report_response');
  }
  public set failureReportResponse(value: number) {
    this._failureReportResponse = value;
  }
  public resetFailureReportResponse() {
    this._failureReportResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureReportResponseInput() {
    return this._failureReportResponse;
  }

  // fwd_reloc_complete_ack - computed: false, optional: true, required: false
  private _fwdRelocCompleteAck?: number; 
  public get fwdRelocCompleteAck() {
    return this.getNumberAttribute('fwd_reloc_complete_ack');
  }
  public set fwdRelocCompleteAck(value: number) {
    this._fwdRelocCompleteAck = value;
  }
  public resetFwdRelocCompleteAck() {
    this._fwdRelocCompleteAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdRelocCompleteAckInput() {
    return this._fwdRelocCompleteAck;
  }

  // fwd_relocation_complete - computed: false, optional: true, required: false
  private _fwdRelocationComplete?: number; 
  public get fwdRelocationComplete() {
    return this.getNumberAttribute('fwd_relocation_complete');
  }
  public set fwdRelocationComplete(value: number) {
    this._fwdRelocationComplete = value;
  }
  public resetFwdRelocationComplete() {
    this._fwdRelocationComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdRelocationCompleteInput() {
    return this._fwdRelocationComplete;
  }

  // fwd_relocation_request - computed: false, optional: true, required: false
  private _fwdRelocationRequest?: number; 
  public get fwdRelocationRequest() {
    return this.getNumberAttribute('fwd_relocation_request');
  }
  public set fwdRelocationRequest(value: number) {
    this._fwdRelocationRequest = value;
  }
  public resetFwdRelocationRequest() {
    this._fwdRelocationRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdRelocationRequestInput() {
    return this._fwdRelocationRequest;
  }

  // fwd_relocation_response - computed: false, optional: true, required: false
  private _fwdRelocationResponse?: number; 
  public get fwdRelocationResponse() {
    return this.getNumberAttribute('fwd_relocation_response');
  }
  public set fwdRelocationResponse(value: number) {
    this._fwdRelocationResponse = value;
  }
  public resetFwdRelocationResponse() {
    this._fwdRelocationResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdRelocationResponseInput() {
    return this._fwdRelocationResponse;
  }

  // fwd_srns_context - computed: false, optional: true, required: false
  private _fwdSrnsContext?: number; 
  public get fwdSrnsContext() {
    return this.getNumberAttribute('fwd_srns_context');
  }
  public set fwdSrnsContext(value: number) {
    this._fwdSrnsContext = value;
  }
  public resetFwdSrnsContext() {
    this._fwdSrnsContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSrnsContextInput() {
    return this._fwdSrnsContext;
  }

  // fwd_srns_context_ack - computed: false, optional: true, required: false
  private _fwdSrnsContextAck?: number; 
  public get fwdSrnsContextAck() {
    return this.getNumberAttribute('fwd_srns_context_ack');
  }
  public set fwdSrnsContextAck(value: number) {
    this._fwdSrnsContextAck = value;
  }
  public resetFwdSrnsContextAck() {
    this._fwdSrnsContextAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSrnsContextAckInput() {
    return this._fwdSrnsContextAck;
  }

  // g_pdu - computed: false, optional: true, required: false
  private _gPdu?: number; 
  public get gPdu() {
    return this.getNumberAttribute('g_pdu');
  }
  public set gPdu(value: number) {
    this._gPdu = value;
  }
  public resetGPdu() {
    this._gPdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gPduInput() {
    return this._gPdu;
  }

  // identification_request - computed: false, optional: true, required: false
  private _identificationRequest?: number; 
  public get identificationRequest() {
    return this.getNumberAttribute('identification_request');
  }
  public set identificationRequest(value: number) {
    this._identificationRequest = value;
  }
  public resetIdentificationRequest() {
    this._identificationRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationRequestInput() {
    return this._identificationRequest;
  }

  // identification_response - computed: false, optional: true, required: false
  private _identificationResponse?: number; 
  public get identificationResponse() {
    return this.getNumberAttribute('identification_response');
  }
  public set identificationResponse(value: number) {
    this._identificationResponse = value;
  }
  public resetIdentificationResponse() {
    this._identificationResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identificationResponseInput() {
    return this._identificationResponse;
  }

  // mbms_de_reg_request - computed: false, optional: true, required: false
  private _mbmsDeRegRequest?: number; 
  public get mbmsDeRegRequest() {
    return this.getNumberAttribute('mbms_de_reg_request');
  }
  public set mbmsDeRegRequest(value: number) {
    this._mbmsDeRegRequest = value;
  }
  public resetMbmsDeRegRequest() {
    this._mbmsDeRegRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsDeRegRequestInput() {
    return this._mbmsDeRegRequest;
  }

  // mbms_de_reg_response - computed: false, optional: true, required: false
  private _mbmsDeRegResponse?: number; 
  public get mbmsDeRegResponse() {
    return this.getNumberAttribute('mbms_de_reg_response');
  }
  public set mbmsDeRegResponse(value: number) {
    this._mbmsDeRegResponse = value;
  }
  public resetMbmsDeRegResponse() {
    this._mbmsDeRegResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsDeRegResponseInput() {
    return this._mbmsDeRegResponse;
  }

  // mbms_notify_rej_request - computed: false, optional: true, required: false
  private _mbmsNotifyRejRequest?: number; 
  public get mbmsNotifyRejRequest() {
    return this.getNumberAttribute('mbms_notify_rej_request');
  }
  public set mbmsNotifyRejRequest(value: number) {
    this._mbmsNotifyRejRequest = value;
  }
  public resetMbmsNotifyRejRequest() {
    this._mbmsNotifyRejRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsNotifyRejRequestInput() {
    return this._mbmsNotifyRejRequest;
  }

  // mbms_notify_rej_response - computed: false, optional: true, required: false
  private _mbmsNotifyRejResponse?: number; 
  public get mbmsNotifyRejResponse() {
    return this.getNumberAttribute('mbms_notify_rej_response');
  }
  public set mbmsNotifyRejResponse(value: number) {
    this._mbmsNotifyRejResponse = value;
  }
  public resetMbmsNotifyRejResponse() {
    this._mbmsNotifyRejResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsNotifyRejResponseInput() {
    return this._mbmsNotifyRejResponse;
  }

  // mbms_notify_request - computed: false, optional: true, required: false
  private _mbmsNotifyRequest?: number; 
  public get mbmsNotifyRequest() {
    return this.getNumberAttribute('mbms_notify_request');
  }
  public set mbmsNotifyRequest(value: number) {
    this._mbmsNotifyRequest = value;
  }
  public resetMbmsNotifyRequest() {
    this._mbmsNotifyRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsNotifyRequestInput() {
    return this._mbmsNotifyRequest;
  }

  // mbms_notify_response - computed: false, optional: true, required: false
  private _mbmsNotifyResponse?: number; 
  public get mbmsNotifyResponse() {
    return this.getNumberAttribute('mbms_notify_response');
  }
  public set mbmsNotifyResponse(value: number) {
    this._mbmsNotifyResponse = value;
  }
  public resetMbmsNotifyResponse() {
    this._mbmsNotifyResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsNotifyResponseInput() {
    return this._mbmsNotifyResponse;
  }

  // mbms_reg_request - computed: false, optional: true, required: false
  private _mbmsRegRequest?: number; 
  public get mbmsRegRequest() {
    return this.getNumberAttribute('mbms_reg_request');
  }
  public set mbmsRegRequest(value: number) {
    this._mbmsRegRequest = value;
  }
  public resetMbmsRegRequest() {
    this._mbmsRegRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsRegRequestInput() {
    return this._mbmsRegRequest;
  }

  // mbms_reg_response - computed: false, optional: true, required: false
  private _mbmsRegResponse?: number; 
  public get mbmsRegResponse() {
    return this.getNumberAttribute('mbms_reg_response');
  }
  public set mbmsRegResponse(value: number) {
    this._mbmsRegResponse = value;
  }
  public resetMbmsRegResponse() {
    this._mbmsRegResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsRegResponseInput() {
    return this._mbmsRegResponse;
  }

  // mbms_ses_start_request - computed: false, optional: true, required: false
  private _mbmsSesStartRequest?: number; 
  public get mbmsSesStartRequest() {
    return this.getNumberAttribute('mbms_ses_start_request');
  }
  public set mbmsSesStartRequest(value: number) {
    this._mbmsSesStartRequest = value;
  }
  public resetMbmsSesStartRequest() {
    this._mbmsSesStartRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsSesStartRequestInput() {
    return this._mbmsSesStartRequest;
  }

  // mbms_ses_start_response - computed: false, optional: true, required: false
  private _mbmsSesStartResponse?: number; 
  public get mbmsSesStartResponse() {
    return this.getNumberAttribute('mbms_ses_start_response');
  }
  public set mbmsSesStartResponse(value: number) {
    this._mbmsSesStartResponse = value;
  }
  public resetMbmsSesStartResponse() {
    this._mbmsSesStartResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsSesStartResponseInput() {
    return this._mbmsSesStartResponse;
  }

  // mbms_ses_stop_request - computed: false, optional: true, required: false
  private _mbmsSesStopRequest?: number; 
  public get mbmsSesStopRequest() {
    return this.getNumberAttribute('mbms_ses_stop_request');
  }
  public set mbmsSesStopRequest(value: number) {
    this._mbmsSesStopRequest = value;
  }
  public resetMbmsSesStopRequest() {
    this._mbmsSesStopRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsSesStopRequestInput() {
    return this._mbmsSesStopRequest;
  }

  // mbms_ses_stop_response - computed: false, optional: true, required: false
  private _mbmsSesStopResponse?: number; 
  public get mbmsSesStopResponse() {
    return this.getNumberAttribute('mbms_ses_stop_response');
  }
  public set mbmsSesStopResponse(value: number) {
    this._mbmsSesStopResponse = value;
  }
  public resetMbmsSesStopResponse() {
    this._mbmsSesStopResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsSesStopResponseInput() {
    return this._mbmsSesStopResponse;
  }

  // note_ms_request - computed: false, optional: true, required: false
  private _noteMsRequest?: number; 
  public get noteMsRequest() {
    return this.getNumberAttribute('note_ms_request');
  }
  public set noteMsRequest(value: number) {
    this._noteMsRequest = value;
  }
  public resetNoteMsRequest() {
    this._noteMsRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteMsRequestInput() {
    return this._noteMsRequest;
  }

  // note_ms_response - computed: false, optional: true, required: false
  private _noteMsResponse?: number; 
  public get noteMsResponse() {
    return this.getNumberAttribute('note_ms_response');
  }
  public set noteMsResponse(value: number) {
    this._noteMsResponse = value;
  }
  public resetNoteMsResponse() {
    this._noteMsResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteMsResponseInput() {
    return this._noteMsResponse;
  }

  // pdu_notify_rej_request - computed: false, optional: true, required: false
  private _pduNotifyRejRequest?: number; 
  public get pduNotifyRejRequest() {
    return this.getNumberAttribute('pdu_notify_rej_request');
  }
  public set pduNotifyRejRequest(value: number) {
    this._pduNotifyRejRequest = value;
  }
  public resetPduNotifyRejRequest() {
    this._pduNotifyRejRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pduNotifyRejRequestInput() {
    return this._pduNotifyRejRequest;
  }

  // pdu_notify_rej_response - computed: false, optional: true, required: false
  private _pduNotifyRejResponse?: number; 
  public get pduNotifyRejResponse() {
    return this.getNumberAttribute('pdu_notify_rej_response');
  }
  public set pduNotifyRejResponse(value: number) {
    this._pduNotifyRejResponse = value;
  }
  public resetPduNotifyRejResponse() {
    this._pduNotifyRejResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pduNotifyRejResponseInput() {
    return this._pduNotifyRejResponse;
  }

  // pdu_notify_request - computed: false, optional: true, required: false
  private _pduNotifyRequest?: number; 
  public get pduNotifyRequest() {
    return this.getNumberAttribute('pdu_notify_request');
  }
  public set pduNotifyRequest(value: number) {
    this._pduNotifyRequest = value;
  }
  public resetPduNotifyRequest() {
    this._pduNotifyRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pduNotifyRequestInput() {
    return this._pduNotifyRequest;
  }

  // pdu_notify_response - computed: false, optional: true, required: false
  private _pduNotifyResponse?: number; 
  public get pduNotifyResponse() {
    return this.getNumberAttribute('pdu_notify_response');
  }
  public set pduNotifyResponse(value: number) {
    this._pduNotifyResponse = value;
  }
  public resetPduNotifyResponse() {
    this._pduNotifyResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pduNotifyResponseInput() {
    return this._pduNotifyResponse;
  }

  // ran_info - computed: false, optional: true, required: false
  private _ranInfo?: number; 
  public get ranInfo() {
    return this.getNumberAttribute('ran_info');
  }
  public set ranInfo(value: number) {
    this._ranInfo = value;
  }
  public resetRanInfo() {
    this._ranInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ranInfoInput() {
    return this._ranInfo;
  }

  // relocation_cancel_request - computed: false, optional: true, required: false
  private _relocationCancelRequest?: number; 
  public get relocationCancelRequest() {
    return this.getNumberAttribute('relocation_cancel_request');
  }
  public set relocationCancelRequest(value: number) {
    this._relocationCancelRequest = value;
  }
  public resetRelocationCancelRequest() {
    this._relocationCancelRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relocationCancelRequestInput() {
    return this._relocationCancelRequest;
  }

  // relocation_cancel_response - computed: false, optional: true, required: false
  private _relocationCancelResponse?: number; 
  public get relocationCancelResponse() {
    return this.getNumberAttribute('relocation_cancel_response');
  }
  public set relocationCancelResponse(value: number) {
    this._relocationCancelResponse = value;
  }
  public resetRelocationCancelResponse() {
    this._relocationCancelResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relocationCancelResponseInput() {
    return this._relocationCancelResponse;
  }

  // send_route_request - computed: false, optional: true, required: false
  private _sendRouteRequest?: number; 
  public get sendRouteRequest() {
    return this.getNumberAttribute('send_route_request');
  }
  public set sendRouteRequest(value: number) {
    this._sendRouteRequest = value;
  }
  public resetSendRouteRequest() {
    this._sendRouteRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendRouteRequestInput() {
    return this._sendRouteRequest;
  }

  // send_route_response - computed: false, optional: true, required: false
  private _sendRouteResponse?: number; 
  public get sendRouteResponse() {
    return this.getNumberAttribute('send_route_response');
  }
  public set sendRouteResponse(value: number) {
    this._sendRouteResponse = value;
  }
  public resetSendRouteResponse() {
    this._sendRouteResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendRouteResponseInput() {
    return this._sendRouteResponse;
  }

  // sgsn_context_ack - computed: false, optional: true, required: false
  private _sgsnContextAck?: number; 
  public get sgsnContextAck() {
    return this.getNumberAttribute('sgsn_context_ack');
  }
  public set sgsnContextAck(value: number) {
    this._sgsnContextAck = value;
  }
  public resetSgsnContextAck() {
    this._sgsnContextAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgsnContextAckInput() {
    return this._sgsnContextAck;
  }

  // sgsn_context_request - computed: false, optional: true, required: false
  private _sgsnContextRequest?: number; 
  public get sgsnContextRequest() {
    return this.getNumberAttribute('sgsn_context_request');
  }
  public set sgsnContextRequest(value: number) {
    this._sgsnContextRequest = value;
  }
  public resetSgsnContextRequest() {
    this._sgsnContextRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgsnContextRequestInput() {
    return this._sgsnContextRequest;
  }

  // sgsn_context_response - computed: false, optional: true, required: false
  private _sgsnContextResponse?: number; 
  public get sgsnContextResponse() {
    return this.getNumberAttribute('sgsn_context_response');
  }
  public set sgsnContextResponse(value: number) {
    this._sgsnContextResponse = value;
  }
  public resetSgsnContextResponse() {
    this._sgsnContextResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgsnContextResponseInput() {
    return this._sgsnContextResponse;
  }

  // support_ext_hdr_notify - computed: false, optional: true, required: false
  private _supportExtHdrNotify?: number; 
  public get supportExtHdrNotify() {
    return this.getNumberAttribute('support_ext_hdr_notify');
  }
  public set supportExtHdrNotify(value: number) {
    this._supportExtHdrNotify = value;
  }
  public resetSupportExtHdrNotify() {
    this._supportExtHdrNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportExtHdrNotifyInput() {
    return this._supportExtHdrNotify;
  }

  // update_mbms_request - computed: false, optional: true, required: false
  private _updateMbmsRequest?: number; 
  public get updateMbmsRequest() {
    return this.getNumberAttribute('update_mbms_request');
  }
  public set updateMbmsRequest(value: number) {
    this._updateMbmsRequest = value;
  }
  public resetUpdateMbmsRequest() {
    this._updateMbmsRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMbmsRequestInput() {
    return this._updateMbmsRequest;
  }

  // update_mbms_response - computed: false, optional: true, required: false
  private _updateMbmsResponse?: number; 
  public get updateMbmsResponse() {
    return this.getNumberAttribute('update_mbms_response');
  }
  public set updateMbmsResponse(value: number) {
    this._updateMbmsResponse = value;
  }
  public resetUpdateMbmsResponse() {
    this._updateMbmsResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMbmsResponseInput() {
    return this._updateMbmsResponse;
  }

  // update_pdp_request - computed: false, optional: true, required: false
  private _updatePdpRequest?: number; 
  public get updatePdpRequest() {
    return this.getNumberAttribute('update_pdp_request');
  }
  public set updatePdpRequest(value: number) {
    this._updatePdpRequest = value;
  }
  public resetUpdatePdpRequest() {
    this._updatePdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePdpRequestInput() {
    return this._updatePdpRequest;
  }

  // update_pdp_response - computed: false, optional: true, required: false
  private _updatePdpResponse?: number; 
  public get updatePdpResponse() {
    return this.getNumberAttribute('update_pdp_response');
  }
  public set updatePdpResponse(value: number) {
    this._updatePdpResponse = value;
  }
  public resetUpdatePdpResponse() {
    this._updatePdpResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePdpResponseInput() {
    return this._updatePdpResponse;
  }

  // version_not_support - computed: false, optional: true, required: false
  private _versionNotSupport?: number; 
  public get versionNotSupport() {
    return this.getNumberAttribute('version_not_support');
  }
  public set versionNotSupport(value: number) {
    this._versionNotSupport = value;
  }
  public resetVersionNotSupport() {
    this._versionNotSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNotSupportInput() {
    return this._versionNotSupport;
  }
}
export interface ObjectFirewallGtpMessageRateLimitV0 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#create_pdp_request ObjectFirewallGtp#create_pdp_request}
  */
  readonly createPdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#delete_pdp_request ObjectFirewallGtp#delete_pdp_request}
  */
  readonly deletePdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#echo_request ObjectFirewallGtp#echo_request}
  */
  readonly echoRequest?: number;
}

export function objectFirewallGtpMessageRateLimitV0ToTerraform(struct?: ObjectFirewallGtpMessageRateLimitV0OutputReference | ObjectFirewallGtpMessageRateLimitV0): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_pdp_request: cdktf.numberToTerraform(struct!.createPdpRequest),
    delete_pdp_request: cdktf.numberToTerraform(struct!.deletePdpRequest),
    echo_request: cdktf.numberToTerraform(struct!.echoRequest),
  }
}


export function objectFirewallGtpMessageRateLimitV0ToHclTerraform(struct?: ObjectFirewallGtpMessageRateLimitV0OutputReference | ObjectFirewallGtpMessageRateLimitV0): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.createPdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.deletePdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    echo_request: {
      value: cdktf.numberToHclTerraform(struct!.echoRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpMessageRateLimitV0OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallGtpMessageRateLimitV0 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createPdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPdpRequest = this._createPdpRequest;
    }
    if (this._deletePdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePdpRequest = this._deletePdpRequest;
    }
    if (this._echoRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoRequest = this._echoRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpMessageRateLimitV0 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createPdpRequest = undefined;
      this._deletePdpRequest = undefined;
      this._echoRequest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createPdpRequest = value.createPdpRequest;
      this._deletePdpRequest = value.deletePdpRequest;
      this._echoRequest = value.echoRequest;
    }
  }

  // create_pdp_request - computed: false, optional: true, required: false
  private _createPdpRequest?: number; 
  public get createPdpRequest() {
    return this.getNumberAttribute('create_pdp_request');
  }
  public set createPdpRequest(value: number) {
    this._createPdpRequest = value;
  }
  public resetCreatePdpRequest() {
    this._createPdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPdpRequestInput() {
    return this._createPdpRequest;
  }

  // delete_pdp_request - computed: false, optional: true, required: false
  private _deletePdpRequest?: number; 
  public get deletePdpRequest() {
    return this.getNumberAttribute('delete_pdp_request');
  }
  public set deletePdpRequest(value: number) {
    this._deletePdpRequest = value;
  }
  public resetDeletePdpRequest() {
    this._deletePdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePdpRequestInput() {
    return this._deletePdpRequest;
  }

  // echo_request - computed: false, optional: true, required: false
  private _echoRequest?: number; 
  public get echoRequest() {
    return this.getNumberAttribute('echo_request');
  }
  public set echoRequest(value: number) {
    this._echoRequest = value;
  }
  public resetEchoRequest() {
    this._echoRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoRequestInput() {
    return this._echoRequest;
  }
}
export interface ObjectFirewallGtpMessageRateLimitV1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#create_pdp_request ObjectFirewallGtp#create_pdp_request}
  */
  readonly createPdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#delete_pdp_request ObjectFirewallGtp#delete_pdp_request}
  */
  readonly deletePdpRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#echo_request ObjectFirewallGtp#echo_request}
  */
  readonly echoRequest?: number;
}

export function objectFirewallGtpMessageRateLimitV1ToTerraform(struct?: ObjectFirewallGtpMessageRateLimitV1OutputReference | ObjectFirewallGtpMessageRateLimitV1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_pdp_request: cdktf.numberToTerraform(struct!.createPdpRequest),
    delete_pdp_request: cdktf.numberToTerraform(struct!.deletePdpRequest),
    echo_request: cdktf.numberToTerraform(struct!.echoRequest),
  }
}


export function objectFirewallGtpMessageRateLimitV1ToHclTerraform(struct?: ObjectFirewallGtpMessageRateLimitV1OutputReference | ObjectFirewallGtpMessageRateLimitV1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.createPdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.deletePdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    echo_request: {
      value: cdktf.numberToHclTerraform(struct!.echoRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpMessageRateLimitV1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallGtpMessageRateLimitV1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createPdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPdpRequest = this._createPdpRequest;
    }
    if (this._deletePdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePdpRequest = this._deletePdpRequest;
    }
    if (this._echoRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoRequest = this._echoRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpMessageRateLimitV1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createPdpRequest = undefined;
      this._deletePdpRequest = undefined;
      this._echoRequest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createPdpRequest = value.createPdpRequest;
      this._deletePdpRequest = value.deletePdpRequest;
      this._echoRequest = value.echoRequest;
    }
  }

  // create_pdp_request - computed: false, optional: true, required: false
  private _createPdpRequest?: number; 
  public get createPdpRequest() {
    return this.getNumberAttribute('create_pdp_request');
  }
  public set createPdpRequest(value: number) {
    this._createPdpRequest = value;
  }
  public resetCreatePdpRequest() {
    this._createPdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPdpRequestInput() {
    return this._createPdpRequest;
  }

  // delete_pdp_request - computed: false, optional: true, required: false
  private _deletePdpRequest?: number; 
  public get deletePdpRequest() {
    return this.getNumberAttribute('delete_pdp_request');
  }
  public set deletePdpRequest(value: number) {
    this._deletePdpRequest = value;
  }
  public resetDeletePdpRequest() {
    this._deletePdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePdpRequestInput() {
    return this._deletePdpRequest;
  }

  // echo_request - computed: false, optional: true, required: false
  private _echoRequest?: number; 
  public get echoRequest() {
    return this.getNumberAttribute('echo_request');
  }
  public set echoRequest(value: number) {
    this._echoRequest = value;
  }
  public resetEchoRequest() {
    this._echoRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoRequestInput() {
    return this._echoRequest;
  }
}
export interface ObjectFirewallGtpMessageRateLimitV2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#create_session_request ObjectFirewallGtp#create_session_request}
  */
  readonly createSessionRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#delete_session_request ObjectFirewallGtp#delete_session_request}
  */
  readonly deleteSessionRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#echo_request ObjectFirewallGtp#echo_request}
  */
  readonly echoRequest?: number;
}

export function objectFirewallGtpMessageRateLimitV2ToTerraform(struct?: ObjectFirewallGtpMessageRateLimitV2OutputReference | ObjectFirewallGtpMessageRateLimitV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_session_request: cdktf.numberToTerraform(struct!.createSessionRequest),
    delete_session_request: cdktf.numberToTerraform(struct!.deleteSessionRequest),
    echo_request: cdktf.numberToTerraform(struct!.echoRequest),
  }
}


export function objectFirewallGtpMessageRateLimitV2ToHclTerraform(struct?: ObjectFirewallGtpMessageRateLimitV2OutputReference | ObjectFirewallGtpMessageRateLimitV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_session_request: {
      value: cdktf.numberToHclTerraform(struct!.createSessionRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_session_request: {
      value: cdktf.numberToHclTerraform(struct!.deleteSessionRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    echo_request: {
      value: cdktf.numberToHclTerraform(struct!.echoRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpMessageRateLimitV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallGtpMessageRateLimitV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createSessionRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.createSessionRequest = this._createSessionRequest;
    }
    if (this._deleteSessionRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteSessionRequest = this._deleteSessionRequest;
    }
    if (this._echoRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.echoRequest = this._echoRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpMessageRateLimitV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createSessionRequest = undefined;
      this._deleteSessionRequest = undefined;
      this._echoRequest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createSessionRequest = value.createSessionRequest;
      this._deleteSessionRequest = value.deleteSessionRequest;
      this._echoRequest = value.echoRequest;
    }
  }

  // create_session_request - computed: false, optional: true, required: false
  private _createSessionRequest?: number; 
  public get createSessionRequest() {
    return this.getNumberAttribute('create_session_request');
  }
  public set createSessionRequest(value: number) {
    this._createSessionRequest = value;
  }
  public resetCreateSessionRequest() {
    this._createSessionRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSessionRequestInput() {
    return this._createSessionRequest;
  }

  // delete_session_request - computed: false, optional: true, required: false
  private _deleteSessionRequest?: number; 
  public get deleteSessionRequest() {
    return this.getNumberAttribute('delete_session_request');
  }
  public set deleteSessionRequest(value: number) {
    this._deleteSessionRequest = value;
  }
  public resetDeleteSessionRequest() {
    this._deleteSessionRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSessionRequestInput() {
    return this._deleteSessionRequest;
  }

  // echo_request - computed: false, optional: true, required: false
  private _echoRequest?: number; 
  public get echoRequest() {
    return this.getNumberAttribute('echo_request');
  }
  public set echoRequest(value: number) {
    this._echoRequest = value;
  }
  public resetEchoRequest() {
    this._echoRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoRequestInput() {
    return this._echoRequest;
  }
}
export interface ObjectFirewallGtpNoipPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#action ObjectFirewallGtp#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#end ObjectFirewallGtp#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#id ObjectFirewallGtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#start ObjectFirewallGtp#start}
  */
  readonly start?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#type ObjectFirewallGtp#type}
  */
  readonly type?: string;
}

export function objectFirewallGtpNoipPolicyToTerraform(struct?: ObjectFirewallGtpNoipPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    end: cdktf.numberToTerraform(struct!.end),
    id: cdktf.numberToTerraform(struct!.id),
    start: cdktf.numberToTerraform(struct!.start),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function objectFirewallGtpNoipPolicyToHclTerraform(struct?: ObjectFirewallGtpNoipPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpNoipPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallGtpNoipPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpNoipPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._end = undefined;
      this._id = undefined;
      this._start = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._end = value.end;
      this._id = value.id;
      this._start = value.start;
      this._type = value.type;
    }
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

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
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

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ObjectFirewallGtpNoipPolicyList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallGtpNoipPolicy[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallGtpNoipPolicyOutputReference {
    return new ObjectFirewallGtpNoipPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallGtpPerApnShaper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#apn ObjectFirewallGtp#apn}
  */
  readonly apn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#id ObjectFirewallGtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#rate_limit ObjectFirewallGtp#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#version ObjectFirewallGtp#version}
  */
  readonly version?: number;
}

export function objectFirewallGtpPerApnShaperToTerraform(struct?: ObjectFirewallGtpPerApnShaper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apn: cdktf.stringToTerraform(struct!.apn),
    id: cdktf.numberToTerraform(struct!.id),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function objectFirewallGtpPerApnShaperToHclTerraform(struct?: ObjectFirewallGtpPerApnShaper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apn: {
      value: cdktf.stringToHclTerraform(struct!.apn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpPerApnShaperOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallGtpPerApnShaper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apn !== undefined) {
      hasAnyValues = true;
      internalValueResult.apn = this._apn;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpPerApnShaper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apn = undefined;
      this._id = undefined;
      this._rateLimit = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apn = value.apn;
      this._id = value.id;
      this._rateLimit = value.rateLimit;
      this._version = value.version;
    }
  }

  // apn - computed: false, optional: true, required: false
  private _apn?: string; 
  public get apn() {
    return this.getStringAttribute('apn');
  }
  public set apn(value: string) {
    this._apn = value;
  }
  public resetApn() {
    this._apn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnInput() {
    return this._apn;
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

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ObjectFirewallGtpPerApnShaperList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallGtpPerApnShaper[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallGtpPerApnShaperOutputReference {
    return new ObjectFirewallGtpPerApnShaperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallGtpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#action ObjectFirewallGtp#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#apn_sel_mode ObjectFirewallGtp#apn_sel_mode}
  */
  readonly apnSelMode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#apnmember ObjectFirewallGtp#apnmember}
  */
  readonly apnmember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#id ObjectFirewallGtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#imei ObjectFirewallGtp#imei}
  */
  readonly imei?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#imsi ObjectFirewallGtp#imsi}
  */
  readonly imsi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#imsi_prefix ObjectFirewallGtp#imsi_prefix}
  */
  readonly imsiPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#max_apn_restriction ObjectFirewallGtp#max_apn_restriction}
  */
  readonly maxApnRestriction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#messages ObjectFirewallGtp#messages}
  */
  readonly messages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#msisdn ObjectFirewallGtp#msisdn}
  */
  readonly msisdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#msisdn_prefix ObjectFirewallGtp#msisdn_prefix}
  */
  readonly msisdnPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#rai ObjectFirewallGtp#rai}
  */
  readonly rai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#rat_type ObjectFirewallGtp#rat_type}
  */
  readonly ratType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#uli ObjectFirewallGtp#uli}
  */
  readonly uli?: string;
}

export function objectFirewallGtpPolicyToTerraform(struct?: ObjectFirewallGtpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    apn_sel_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apnSelMode),
    apnmember: cdktf.stringToTerraform(struct!.apnmember),
    id: cdktf.numberToTerraform(struct!.id),
    imei: cdktf.stringToTerraform(struct!.imei),
    imsi: cdktf.stringToTerraform(struct!.imsi),
    imsi_prefix: cdktf.stringToTerraform(struct!.imsiPrefix),
    max_apn_restriction: cdktf.stringToTerraform(struct!.maxApnRestriction),
    messages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.messages),
    msisdn: cdktf.stringToTerraform(struct!.msisdn),
    msisdn_prefix: cdktf.stringToTerraform(struct!.msisdnPrefix),
    rai: cdktf.stringToTerraform(struct!.rai),
    rat_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ratType),
    uli: cdktf.stringToTerraform(struct!.uli),
  }
}


export function objectFirewallGtpPolicyToHclTerraform(struct?: ObjectFirewallGtpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apn_sel_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apnSelMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    apnmember: {
      value: cdktf.stringToHclTerraform(struct!.apnmember),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imei: {
      value: cdktf.stringToHclTerraform(struct!.imei),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imsi: {
      value: cdktf.stringToHclTerraform(struct!.imsi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imsi_prefix: {
      value: cdktf.stringToHclTerraform(struct!.imsiPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_apn_restriction: {
      value: cdktf.stringToHclTerraform(struct!.maxApnRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    messages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.messages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    msisdn: {
      value: cdktf.stringToHclTerraform(struct!.msisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msisdn_prefix: {
      value: cdktf.stringToHclTerraform(struct!.msisdnPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rai: {
      value: cdktf.stringToHclTerraform(struct!.rai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rat_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ratType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    uli: {
      value: cdktf.stringToHclTerraform(struct!.uli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallGtpPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._apnSelMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.apnSelMode = this._apnSelMode;
    }
    if (this._apnmember !== undefined) {
      hasAnyValues = true;
      internalValueResult.apnmember = this._apnmember;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imei !== undefined) {
      hasAnyValues = true;
      internalValueResult.imei = this._imei;
    }
    if (this._imsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsi = this._imsi;
    }
    if (this._imsiPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsiPrefix = this._imsiPrefix;
    }
    if (this._maxApnRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxApnRestriction = this._maxApnRestriction;
    }
    if (this._messages !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages;
    }
    if (this._msisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msisdn = this._msisdn;
    }
    if (this._msisdnPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.msisdnPrefix = this._msisdnPrefix;
    }
    if (this._rai !== undefined) {
      hasAnyValues = true;
      internalValueResult.rai = this._rai;
    }
    if (this._ratType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratType = this._ratType;
    }
    if (this._uli !== undefined) {
      hasAnyValues = true;
      internalValueResult.uli = this._uli;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._apnSelMode = undefined;
      this._apnmember = undefined;
      this._id = undefined;
      this._imei = undefined;
      this._imsi = undefined;
      this._imsiPrefix = undefined;
      this._maxApnRestriction = undefined;
      this._messages = undefined;
      this._msisdn = undefined;
      this._msisdnPrefix = undefined;
      this._rai = undefined;
      this._ratType = undefined;
      this._uli = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._apnSelMode = value.apnSelMode;
      this._apnmember = value.apnmember;
      this._id = value.id;
      this._imei = value.imei;
      this._imsi = value.imsi;
      this._imsiPrefix = value.imsiPrefix;
      this._maxApnRestriction = value.maxApnRestriction;
      this._messages = value.messages;
      this._msisdn = value.msisdn;
      this._msisdnPrefix = value.msisdnPrefix;
      this._rai = value.rai;
      this._ratType = value.ratType;
      this._uli = value.uli;
    }
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

  // apn_sel_mode - computed: true, optional: true, required: false
  private _apnSelMode?: string[]; 
  public get apnSelMode() {
    return cdktf.Fn.tolist(this.getListAttribute('apn_sel_mode'));
  }
  public set apnSelMode(value: string[]) {
    this._apnSelMode = value;
  }
  public resetApnSelMode() {
    this._apnSelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnSelModeInput() {
    return this._apnSelMode;
  }

  // apnmember - computed: false, optional: true, required: false
  private _apnmember?: string; 
  public get apnmember() {
    return this.getStringAttribute('apnmember');
  }
  public set apnmember(value: string) {
    this._apnmember = value;
  }
  public resetApnmember() {
    this._apnmember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnmemberInput() {
    return this._apnmember;
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

  // imei - computed: false, optional: true, required: false
  private _imei?: string; 
  public get imei() {
    return this.getStringAttribute('imei');
  }
  public set imei(value: string) {
    this._imei = value;
  }
  public resetImei() {
    this._imei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imeiInput() {
    return this._imei;
  }

  // imsi - computed: false, optional: true, required: false
  private _imsi?: string; 
  public get imsi() {
    return this.getStringAttribute('imsi');
  }
  public set imsi(value: string) {
    this._imsi = value;
  }
  public resetImsi() {
    this._imsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiInput() {
    return this._imsi;
  }

  // imsi_prefix - computed: false, optional: true, required: false
  private _imsiPrefix?: string; 
  public get imsiPrefix() {
    return this.getStringAttribute('imsi_prefix');
  }
  public set imsiPrefix(value: string) {
    this._imsiPrefix = value;
  }
  public resetImsiPrefix() {
    this._imsiPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiPrefixInput() {
    return this._imsiPrefix;
  }

  // max_apn_restriction - computed: false, optional: true, required: false
  private _maxApnRestriction?: string; 
  public get maxApnRestriction() {
    return this.getStringAttribute('max_apn_restriction');
  }
  public set maxApnRestriction(value: string) {
    this._maxApnRestriction = value;
  }
  public resetMaxApnRestriction() {
    this._maxApnRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxApnRestrictionInput() {
    return this._maxApnRestriction;
  }

  // messages - computed: true, optional: true, required: false
  private _messages?: string[]; 
  public get messages() {
    return cdktf.Fn.tolist(this.getListAttribute('messages'));
  }
  public set messages(value: string[]) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages;
  }

  // msisdn - computed: false, optional: true, required: false
  private _msisdn?: string; 
  public get msisdn() {
    return this.getStringAttribute('msisdn');
  }
  public set msisdn(value: string) {
    this._msisdn = value;
  }
  public resetMsisdn() {
    this._msisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnInput() {
    return this._msisdn;
  }

  // msisdn_prefix - computed: false, optional: true, required: false
  private _msisdnPrefix?: string; 
  public get msisdnPrefix() {
    return this.getStringAttribute('msisdn_prefix');
  }
  public set msisdnPrefix(value: string) {
    this._msisdnPrefix = value;
  }
  public resetMsisdnPrefix() {
    this._msisdnPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnPrefixInput() {
    return this._msisdnPrefix;
  }

  // rai - computed: false, optional: true, required: false
  private _rai?: string; 
  public get rai() {
    return this.getStringAttribute('rai');
  }
  public set rai(value: string) {
    this._rai = value;
  }
  public resetRai() {
    this._rai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raiInput() {
    return this._rai;
  }

  // rat_type - computed: true, optional: true, required: false
  private _ratType?: string[]; 
  public get ratType() {
    return cdktf.Fn.tolist(this.getListAttribute('rat_type'));
  }
  public set ratType(value: string[]) {
    this._ratType = value;
  }
  public resetRatType() {
    this._ratType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratTypeInput() {
    return this._ratType;
  }

  // uli - computed: false, optional: true, required: false
  private _uli?: string; 
  public get uli() {
    return this.getStringAttribute('uli');
  }
  public set uli(value: string) {
    this._uli = value;
  }
  public resetUli() {
    this._uli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uliInput() {
    return this._uli;
  }
}

export class ObjectFirewallGtpPolicyList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallGtpPolicy[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallGtpPolicyOutputReference {
    return new ObjectFirewallGtpPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallGtpPolicyV2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#action ObjectFirewallGtp#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#apn_sel_mode ObjectFirewallGtp#apn_sel_mode}
  */
  readonly apnSelMode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#apnmember ObjectFirewallGtp#apnmember}
  */
  readonly apnmember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#id ObjectFirewallGtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#imsi_prefix ObjectFirewallGtp#imsi_prefix}
  */
  readonly imsiPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#max_apn_restriction ObjectFirewallGtp#max_apn_restriction}
  */
  readonly maxApnRestriction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#mei ObjectFirewallGtp#mei}
  */
  readonly mei?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#messages ObjectFirewallGtp#messages}
  */
  readonly messages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#msisdn_prefix ObjectFirewallGtp#msisdn_prefix}
  */
  readonly msisdnPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#rat_type ObjectFirewallGtp#rat_type}
  */
  readonly ratType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#uli ObjectFirewallGtp#uli}
  */
  readonly uli?: string[];
}

export function objectFirewallGtpPolicyV2ToTerraform(struct?: ObjectFirewallGtpPolicyV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    apn_sel_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apnSelMode),
    apnmember: cdktf.stringToTerraform(struct!.apnmember),
    id: cdktf.numberToTerraform(struct!.id),
    imsi_prefix: cdktf.stringToTerraform(struct!.imsiPrefix),
    max_apn_restriction: cdktf.stringToTerraform(struct!.maxApnRestriction),
    mei: cdktf.stringToTerraform(struct!.mei),
    messages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.messages),
    msisdn_prefix: cdktf.stringToTerraform(struct!.msisdnPrefix),
    rat_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ratType),
    uli: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uli),
  }
}


export function objectFirewallGtpPolicyV2ToHclTerraform(struct?: ObjectFirewallGtpPolicyV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apn_sel_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apnSelMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    apnmember: {
      value: cdktf.stringToHclTerraform(struct!.apnmember),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imsi_prefix: {
      value: cdktf.stringToHclTerraform(struct!.imsiPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_apn_restriction: {
      value: cdktf.stringToHclTerraform(struct!.maxApnRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mei: {
      value: cdktf.stringToHclTerraform(struct!.mei),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    messages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.messages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    msisdn_prefix: {
      value: cdktf.stringToHclTerraform(struct!.msisdnPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rat_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ratType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    uli: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uli),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallGtpPolicyV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallGtpPolicyV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._apnSelMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.apnSelMode = this._apnSelMode;
    }
    if (this._apnmember !== undefined) {
      hasAnyValues = true;
      internalValueResult.apnmember = this._apnmember;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imsiPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsiPrefix = this._imsiPrefix;
    }
    if (this._maxApnRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxApnRestriction = this._maxApnRestriction;
    }
    if (this._mei !== undefined) {
      hasAnyValues = true;
      internalValueResult.mei = this._mei;
    }
    if (this._messages !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages;
    }
    if (this._msisdnPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.msisdnPrefix = this._msisdnPrefix;
    }
    if (this._ratType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratType = this._ratType;
    }
    if (this._uli !== undefined) {
      hasAnyValues = true;
      internalValueResult.uli = this._uli;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallGtpPolicyV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._apnSelMode = undefined;
      this._apnmember = undefined;
      this._id = undefined;
      this._imsiPrefix = undefined;
      this._maxApnRestriction = undefined;
      this._mei = undefined;
      this._messages = undefined;
      this._msisdnPrefix = undefined;
      this._ratType = undefined;
      this._uli = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._apnSelMode = value.apnSelMode;
      this._apnmember = value.apnmember;
      this._id = value.id;
      this._imsiPrefix = value.imsiPrefix;
      this._maxApnRestriction = value.maxApnRestriction;
      this._mei = value.mei;
      this._messages = value.messages;
      this._msisdnPrefix = value.msisdnPrefix;
      this._ratType = value.ratType;
      this._uli = value.uli;
    }
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

  // apn_sel_mode - computed: true, optional: true, required: false
  private _apnSelMode?: string[]; 
  public get apnSelMode() {
    return cdktf.Fn.tolist(this.getListAttribute('apn_sel_mode'));
  }
  public set apnSelMode(value: string[]) {
    this._apnSelMode = value;
  }
  public resetApnSelMode() {
    this._apnSelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnSelModeInput() {
    return this._apnSelMode;
  }

  // apnmember - computed: false, optional: true, required: false
  private _apnmember?: string; 
  public get apnmember() {
    return this.getStringAttribute('apnmember');
  }
  public set apnmember(value: string) {
    this._apnmember = value;
  }
  public resetApnmember() {
    this._apnmember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnmemberInput() {
    return this._apnmember;
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

  // imsi_prefix - computed: false, optional: true, required: false
  private _imsiPrefix?: string; 
  public get imsiPrefix() {
    return this.getStringAttribute('imsi_prefix');
  }
  public set imsiPrefix(value: string) {
    this._imsiPrefix = value;
  }
  public resetImsiPrefix() {
    this._imsiPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiPrefixInput() {
    return this._imsiPrefix;
  }

  // max_apn_restriction - computed: false, optional: true, required: false
  private _maxApnRestriction?: string; 
  public get maxApnRestriction() {
    return this.getStringAttribute('max_apn_restriction');
  }
  public set maxApnRestriction(value: string) {
    this._maxApnRestriction = value;
  }
  public resetMaxApnRestriction() {
    this._maxApnRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxApnRestrictionInput() {
    return this._maxApnRestriction;
  }

  // mei - computed: false, optional: true, required: false
  private _mei?: string; 
  public get mei() {
    return this.getStringAttribute('mei');
  }
  public set mei(value: string) {
    this._mei = value;
  }
  public resetMei() {
    this._mei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meiInput() {
    return this._mei;
  }

  // messages - computed: true, optional: true, required: false
  private _messages?: string[]; 
  public get messages() {
    return cdktf.Fn.tolist(this.getListAttribute('messages'));
  }
  public set messages(value: string[]) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages;
  }

  // msisdn_prefix - computed: false, optional: true, required: false
  private _msisdnPrefix?: string; 
  public get msisdnPrefix() {
    return this.getStringAttribute('msisdn_prefix');
  }
  public set msisdnPrefix(value: string) {
    this._msisdnPrefix = value;
  }
  public resetMsisdnPrefix() {
    this._msisdnPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnPrefixInput() {
    return this._msisdnPrefix;
  }

  // rat_type - computed: true, optional: true, required: false
  private _ratType?: string[]; 
  public get ratType() {
    return cdktf.Fn.tolist(this.getListAttribute('rat_type'));
  }
  public set ratType(value: string[]) {
    this._ratType = value;
  }
  public resetRatType() {
    this._ratType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratTypeInput() {
    return this._ratType;
  }

  // uli - computed: true, optional: true, required: false
  private _uli?: string[]; 
  public get uli() {
    return cdktf.Fn.tolist(this.getListAttribute('uli'));
  }
  public set uli(value: string[]) {
    this._uli = value;
  }
  public resetUli() {
    this._uli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uliInput() {
    return this._uli;
  }
}

export class ObjectFirewallGtpPolicyV2List extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallGtpPolicyV2[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallGtpPolicyV2OutputReference {
    return new ObjectFirewallGtpPolicyV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp fortimanager_object_firewall_gtp}
*/
export class ObjectFirewallGtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_gtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallGtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallGtp to import
  * @param importFromId The id of the existing ObjectFirewallGtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallGtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_gtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_gtp fortimanager_object_firewall_gtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallGtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallGtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_gtp',
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
    this._addrNotify = config.addrNotify;
    this._adom = config.adom;
    this._apnFilter = config.apnFilter;
    this._authorizedGgsns = config.authorizedGgsns;
    this._authorizedGgsns6 = config.authorizedGgsns6;
    this._authorizedSgsns = config.authorizedSgsns;
    this._authorizedSgsns6 = config.authorizedSgsns6;
    this._comment = config.comment;
    this._contextId = config.contextId;
    this._controlPlaneMessageRateLimit = config.controlPlaneMessageRateLimit;
    this._defaultApnAction = config.defaultApnAction;
    this._defaultImsiAction = config.defaultImsiAction;
    this._defaultIpAction = config.defaultIpAction;
    this._defaultNoipAction = config.defaultNoipAction;
    this._defaultPolicyAction = config.defaultPolicyAction;
    this._deniedLog = config.deniedLog;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._echoRequestInterval = config.echoRequestInterval;
    this._extensionLog = config.extensionLog;
    this._forwardedLog = config.forwardedLog;
    this._globalTunnelLimit = config.globalTunnelLimit;
    this._gtpInGtp = config.gtpInGtp;
    this._gtpuDeniedLog = config.gtpuDeniedLog;
    this._gtpuForwardedLog = config.gtpuForwardedLog;
    this._gtpuLogFreq = config.gtpuLogFreq;
    this._gtpv0 = config.gtpv0;
    this._halfCloseTimeout = config.halfCloseTimeout;
    this._halfOpenTimeout = config.halfOpenTimeout;
    this._handoverGroup = config.handoverGroup;
    this._handoverGroup6 = config.handoverGroup6;
    this._id = config.id;
    this._ieAllowListV0V1 = config.ieAllowListV0V1;
    this._ieAllowListV2 = config.ieAllowListV2;
    this._ieRemover = config.ieRemover;
    this._ieWhiteListV0V1 = config.ieWhiteListV0V1;
    this._ieWhiteListV2 = config.ieWhiteListV2;
    this._imsiFilter = config.imsiFilter;
    this._interfaceNotify = config.interfaceNotify;
    this._invalidReservedField = config.invalidReservedField;
    this._invalidSgsns6ToLog = config.invalidSgsns6ToLog;
    this._invalidSgsnsToLog = config.invalidSgsnsToLog;
    this._ipFilter = config.ipFilter;
    this._logFreq = config.logFreq;
    this._logGtpuLimit = config.logGtpuLimit;
    this._logImsiPrefix = config.logImsiPrefix;
    this._logMsisdnPrefix = config.logMsisdnPrefix;
    this._maxMessageLength = config.maxMessageLength;
    this._messageFilterV0V1 = config.messageFilterV0V1;
    this._messageFilterV2 = config.messageFilterV2;
    this._minMessageLength = config.minMessageLength;
    this._missMustIe = config.missMustIe;
    this._monitorMode = config.monitorMode;
    this._name = config.name;
    this._noipFilter = config.noipFilter;
    this._outOfStateIe = config.outOfStateIe;
    this._outOfStateMessage = config.outOfStateMessage;
    this._policyFilter = config.policyFilter;
    this._portNotify = config.portNotify;
    this._ratTimeoutProfile = config.ratTimeoutProfile;
    this._rateLimitMode = config.rateLimitMode;
    this._rateLimitedLog = config.rateLimitedLog;
    this._rateSamplingInterval = config.rateSamplingInterval;
    this._removeIfEchoExpires = config.removeIfEchoExpires;
    this._removeIfRecoveryDiffer = config.removeIfRecoveryDiffer;
    this._reservedIe = config.reservedIe;
    this._scopetype = config.scopetype;
    this._sendDeleteWhenTimeout = config.sendDeleteWhenTimeout;
    this._sendDeleteWhenTimeoutV2 = config.sendDeleteWhenTimeoutV2;
    this._spoofSrcAddr = config.spoofSrcAddr;
    this._stateInvalidLog = config.stateInvalidLog;
    this._subSecondInterval = config.subSecondInterval;
    this._subSecondSampling = config.subSecondSampling;
    this._trafficCountLog = config.trafficCountLog;
    this._tunnelLimit = config.tunnelLimit;
    this._tunnelLimitLog = config.tunnelLimitLog;
    this._tunnelTimeout = config.tunnelTimeout;
    this._unknownVersionAction = config.unknownVersionAction;
    this._userPlaneMessageRateLimit = config.userPlaneMessageRateLimit;
    this._warningThreshold = config.warningThreshold;
    this._apn.internalValue = config.apn;
    this._ieRemovePolicy.internalValue = config.ieRemovePolicy;
    this._ieValidation.internalValue = config.ieValidation;
    this._imsi.internalValue = config.imsi;
    this._ipPolicy.internalValue = config.ipPolicy;
    this._messageRateLimit.internalValue = config.messageRateLimit;
    this._messageRateLimitV0.internalValue = config.messageRateLimitV0;
    this._messageRateLimitV1.internalValue = config.messageRateLimitV1;
    this._messageRateLimitV2.internalValue = config.messageRateLimitV2;
    this._noipPolicy.internalValue = config.noipPolicy;
    this._perApnShaper.internalValue = config.perApnShaper;
    this._policy.internalValue = config.policy;
    this._policyV2.internalValue = config.policyV2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_notify - computed: false, optional: true, required: false
  private _addrNotify?: string; 
  public get addrNotify() {
    return this.getStringAttribute('addr_notify');
  }
  public set addrNotify(value: string) {
    this._addrNotify = value;
  }
  public resetAddrNotify() {
    this._addrNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrNotifyInput() {
    return this._addrNotify;
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

  // apn_filter - computed: false, optional: true, required: false
  private _apnFilter?: string; 
  public get apnFilter() {
    return this.getStringAttribute('apn_filter');
  }
  public set apnFilter(value: string) {
    this._apnFilter = value;
  }
  public resetApnFilter() {
    this._apnFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnFilterInput() {
    return this._apnFilter;
  }

  // authorized_ggsns - computed: false, optional: true, required: false
  private _authorizedGgsns?: string; 
  public get authorizedGgsns() {
    return this.getStringAttribute('authorized_ggsns');
  }
  public set authorizedGgsns(value: string) {
    this._authorizedGgsns = value;
  }
  public resetAuthorizedGgsns() {
    this._authorizedGgsns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedGgsnsInput() {
    return this._authorizedGgsns;
  }

  // authorized_ggsns6 - computed: false, optional: true, required: false
  private _authorizedGgsns6?: string; 
  public get authorizedGgsns6() {
    return this.getStringAttribute('authorized_ggsns6');
  }
  public set authorizedGgsns6(value: string) {
    this._authorizedGgsns6 = value;
  }
  public resetAuthorizedGgsns6() {
    this._authorizedGgsns6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedGgsns6Input() {
    return this._authorizedGgsns6;
  }

  // authorized_sgsns - computed: false, optional: true, required: false
  private _authorizedSgsns?: string; 
  public get authorizedSgsns() {
    return this.getStringAttribute('authorized_sgsns');
  }
  public set authorizedSgsns(value: string) {
    this._authorizedSgsns = value;
  }
  public resetAuthorizedSgsns() {
    this._authorizedSgsns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedSgsnsInput() {
    return this._authorizedSgsns;
  }

  // authorized_sgsns6 - computed: false, optional: true, required: false
  private _authorizedSgsns6?: string; 
  public get authorizedSgsns6() {
    return this.getStringAttribute('authorized_sgsns6');
  }
  public set authorizedSgsns6(value: string) {
    this._authorizedSgsns6 = value;
  }
  public resetAuthorizedSgsns6() {
    this._authorizedSgsns6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedSgsns6Input() {
    return this._authorizedSgsns6;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // context_id - computed: false, optional: true, required: false
  private _contextId?: number; 
  public get contextId() {
    return this.getNumberAttribute('context_id');
  }
  public set contextId(value: number) {
    this._contextId = value;
  }
  public resetContextId() {
    this._contextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextIdInput() {
    return this._contextId;
  }

  // control_plane_message_rate_limit - computed: false, optional: true, required: false
  private _controlPlaneMessageRateLimit?: number; 
  public get controlPlaneMessageRateLimit() {
    return this.getNumberAttribute('control_plane_message_rate_limit');
  }
  public set controlPlaneMessageRateLimit(value: number) {
    this._controlPlaneMessageRateLimit = value;
  }
  public resetControlPlaneMessageRateLimit() {
    this._controlPlaneMessageRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneMessageRateLimitInput() {
    return this._controlPlaneMessageRateLimit;
  }

  // default_apn_action - computed: false, optional: true, required: false
  private _defaultApnAction?: string; 
  public get defaultApnAction() {
    return this.getStringAttribute('default_apn_action');
  }
  public set defaultApnAction(value: string) {
    this._defaultApnAction = value;
  }
  public resetDefaultApnAction() {
    this._defaultApnAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApnActionInput() {
    return this._defaultApnAction;
  }

  // default_imsi_action - computed: false, optional: true, required: false
  private _defaultImsiAction?: string; 
  public get defaultImsiAction() {
    return this.getStringAttribute('default_imsi_action');
  }
  public set defaultImsiAction(value: string) {
    this._defaultImsiAction = value;
  }
  public resetDefaultImsiAction() {
    this._defaultImsiAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultImsiActionInput() {
    return this._defaultImsiAction;
  }

  // default_ip_action - computed: false, optional: true, required: false
  private _defaultIpAction?: string; 
  public get defaultIpAction() {
    return this.getStringAttribute('default_ip_action');
  }
  public set defaultIpAction(value: string) {
    this._defaultIpAction = value;
  }
  public resetDefaultIpAction() {
    this._defaultIpAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIpActionInput() {
    return this._defaultIpAction;
  }

  // default_noip_action - computed: false, optional: true, required: false
  private _defaultNoipAction?: string; 
  public get defaultNoipAction() {
    return this.getStringAttribute('default_noip_action');
  }
  public set defaultNoipAction(value: string) {
    this._defaultNoipAction = value;
  }
  public resetDefaultNoipAction() {
    this._defaultNoipAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNoipActionInput() {
    return this._defaultNoipAction;
  }

  // default_policy_action - computed: false, optional: true, required: false
  private _defaultPolicyAction?: string; 
  public get defaultPolicyAction() {
    return this.getStringAttribute('default_policy_action');
  }
  public set defaultPolicyAction(value: string) {
    this._defaultPolicyAction = value;
  }
  public resetDefaultPolicyAction() {
    this._defaultPolicyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyActionInput() {
    return this._defaultPolicyAction;
  }

  // denied_log - computed: false, optional: true, required: false
  private _deniedLog?: string; 
  public get deniedLog() {
    return this.getStringAttribute('denied_log');
  }
  public set deniedLog(value: string) {
    this._deniedLog = value;
  }
  public resetDeniedLog() {
    this._deniedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedLogInput() {
    return this._deniedLog;
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

  // echo_request_interval - computed: false, optional: true, required: false
  private _echoRequestInterval?: number; 
  public get echoRequestInterval() {
    return this.getNumberAttribute('echo_request_interval');
  }
  public set echoRequestInterval(value: number) {
    this._echoRequestInterval = value;
  }
  public resetEchoRequestInterval() {
    this._echoRequestInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoRequestIntervalInput() {
    return this._echoRequestInterval;
  }

  // extension_log - computed: false, optional: true, required: false
  private _extensionLog?: string; 
  public get extensionLog() {
    return this.getStringAttribute('extension_log');
  }
  public set extensionLog(value: string) {
    this._extensionLog = value;
  }
  public resetExtensionLog() {
    this._extensionLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionLogInput() {
    return this._extensionLog;
  }

  // forwarded_log - computed: false, optional: true, required: false
  private _forwardedLog?: string; 
  public get forwardedLog() {
    return this.getStringAttribute('forwarded_log');
  }
  public set forwardedLog(value: string) {
    this._forwardedLog = value;
  }
  public resetForwardedLog() {
    this._forwardedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedLogInput() {
    return this._forwardedLog;
  }

  // global_tunnel_limit - computed: false, optional: true, required: false
  private _globalTunnelLimit?: string; 
  public get globalTunnelLimit() {
    return this.getStringAttribute('global_tunnel_limit');
  }
  public set globalTunnelLimit(value: string) {
    this._globalTunnelLimit = value;
  }
  public resetGlobalTunnelLimit() {
    this._globalTunnelLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTunnelLimitInput() {
    return this._globalTunnelLimit;
  }

  // gtp_in_gtp - computed: false, optional: true, required: false
  private _gtpInGtp?: string; 
  public get gtpInGtp() {
    return this.getStringAttribute('gtp_in_gtp');
  }
  public set gtpInGtp(value: string) {
    this._gtpInGtp = value;
  }
  public resetGtpInGtp() {
    this._gtpInGtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInGtpInput() {
    return this._gtpInGtp;
  }

  // gtpu_denied_log - computed: false, optional: true, required: false
  private _gtpuDeniedLog?: string; 
  public get gtpuDeniedLog() {
    return this.getStringAttribute('gtpu_denied_log');
  }
  public set gtpuDeniedLog(value: string) {
    this._gtpuDeniedLog = value;
  }
  public resetGtpuDeniedLog() {
    this._gtpuDeniedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpuDeniedLogInput() {
    return this._gtpuDeniedLog;
  }

  // gtpu_forwarded_log - computed: false, optional: true, required: false
  private _gtpuForwardedLog?: string; 
  public get gtpuForwardedLog() {
    return this.getStringAttribute('gtpu_forwarded_log');
  }
  public set gtpuForwardedLog(value: string) {
    this._gtpuForwardedLog = value;
  }
  public resetGtpuForwardedLog() {
    this._gtpuForwardedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpuForwardedLogInput() {
    return this._gtpuForwardedLog;
  }

  // gtpu_log_freq - computed: false, optional: true, required: false
  private _gtpuLogFreq?: number; 
  public get gtpuLogFreq() {
    return this.getNumberAttribute('gtpu_log_freq');
  }
  public set gtpuLogFreq(value: number) {
    this._gtpuLogFreq = value;
  }
  public resetGtpuLogFreq() {
    this._gtpuLogFreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpuLogFreqInput() {
    return this._gtpuLogFreq;
  }

  // gtpv0 - computed: false, optional: true, required: false
  private _gtpv0?: string; 
  public get gtpv0() {
    return this.getStringAttribute('gtpv0');
  }
  public set gtpv0(value: string) {
    this._gtpv0 = value;
  }
  public resetGtpv0() {
    this._gtpv0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpv0Input() {
    return this._gtpv0;
  }

  // half_close_timeout - computed: false, optional: true, required: false
  private _halfCloseTimeout?: number; 
  public get halfCloseTimeout() {
    return this.getNumberAttribute('half_close_timeout');
  }
  public set halfCloseTimeout(value: number) {
    this._halfCloseTimeout = value;
  }
  public resetHalfCloseTimeout() {
    this._halfCloseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfCloseTimeoutInput() {
    return this._halfCloseTimeout;
  }

  // half_open_timeout - computed: false, optional: true, required: false
  private _halfOpenTimeout?: number; 
  public get halfOpenTimeout() {
    return this.getNumberAttribute('half_open_timeout');
  }
  public set halfOpenTimeout(value: number) {
    this._halfOpenTimeout = value;
  }
  public resetHalfOpenTimeout() {
    this._halfOpenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfOpenTimeoutInput() {
    return this._halfOpenTimeout;
  }

  // handover_group - computed: false, optional: true, required: false
  private _handoverGroup?: string; 
  public get handoverGroup() {
    return this.getStringAttribute('handover_group');
  }
  public set handoverGroup(value: string) {
    this._handoverGroup = value;
  }
  public resetHandoverGroup() {
    this._handoverGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoverGroupInput() {
    return this._handoverGroup;
  }

  // handover_group6 - computed: false, optional: true, required: false
  private _handoverGroup6?: string; 
  public get handoverGroup6() {
    return this.getStringAttribute('handover_group6');
  }
  public set handoverGroup6(value: string) {
    this._handoverGroup6 = value;
  }
  public resetHandoverGroup6() {
    this._handoverGroup6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoverGroup6Input() {
    return this._handoverGroup6;
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

  // ie_allow_list_v0v1 - computed: false, optional: true, required: false
  private _ieAllowListV0V1?: string; 
  public get ieAllowListV0V1() {
    return this.getStringAttribute('ie_allow_list_v0v1');
  }
  public set ieAllowListV0V1(value: string) {
    this._ieAllowListV0V1 = value;
  }
  public resetIeAllowListV0V1() {
    this._ieAllowListV0V1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ieAllowListV0V1Input() {
    return this._ieAllowListV0V1;
  }

  // ie_allow_list_v2 - computed: false, optional: true, required: false
  private _ieAllowListV2?: string; 
  public get ieAllowListV2() {
    return this.getStringAttribute('ie_allow_list_v2');
  }
  public set ieAllowListV2(value: string) {
    this._ieAllowListV2 = value;
  }
  public resetIeAllowListV2() {
    this._ieAllowListV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ieAllowListV2Input() {
    return this._ieAllowListV2;
  }

  // ie_remover - computed: false, optional: true, required: false
  private _ieRemover?: string; 
  public get ieRemover() {
    return this.getStringAttribute('ie_remover');
  }
  public set ieRemover(value: string) {
    this._ieRemover = value;
  }
  public resetIeRemover() {
    this._ieRemover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ieRemoverInput() {
    return this._ieRemover;
  }

  // ie_white_list_v0v1 - computed: false, optional: true, required: false
  private _ieWhiteListV0V1?: string; 
  public get ieWhiteListV0V1() {
    return this.getStringAttribute('ie_white_list_v0v1');
  }
  public set ieWhiteListV0V1(value: string) {
    this._ieWhiteListV0V1 = value;
  }
  public resetIeWhiteListV0V1() {
    this._ieWhiteListV0V1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ieWhiteListV0V1Input() {
    return this._ieWhiteListV0V1;
  }

  // ie_white_list_v2 - computed: false, optional: true, required: false
  private _ieWhiteListV2?: string; 
  public get ieWhiteListV2() {
    return this.getStringAttribute('ie_white_list_v2');
  }
  public set ieWhiteListV2(value: string) {
    this._ieWhiteListV2 = value;
  }
  public resetIeWhiteListV2() {
    this._ieWhiteListV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ieWhiteListV2Input() {
    return this._ieWhiteListV2;
  }

  // imsi_filter - computed: false, optional: true, required: false
  private _imsiFilter?: string; 
  public get imsiFilter() {
    return this.getStringAttribute('imsi_filter');
  }
  public set imsiFilter(value: string) {
    this._imsiFilter = value;
  }
  public resetImsiFilter() {
    this._imsiFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiFilterInput() {
    return this._imsiFilter;
  }

  // interface_notify - computed: false, optional: true, required: false
  private _interfaceNotify?: string; 
  public get interfaceNotify() {
    return this.getStringAttribute('interface_notify');
  }
  public set interfaceNotify(value: string) {
    this._interfaceNotify = value;
  }
  public resetInterfaceNotify() {
    this._interfaceNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNotifyInput() {
    return this._interfaceNotify;
  }

  // invalid_reserved_field - computed: false, optional: true, required: false
  private _invalidReservedField?: string; 
  public get invalidReservedField() {
    return this.getStringAttribute('invalid_reserved_field');
  }
  public set invalidReservedField(value: string) {
    this._invalidReservedField = value;
  }
  public resetInvalidReservedField() {
    this._invalidReservedField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidReservedFieldInput() {
    return this._invalidReservedField;
  }

  // invalid_sgsns6_to_log - computed: false, optional: true, required: false
  private _invalidSgsns6ToLog?: string; 
  public get invalidSgsns6ToLog() {
    return this.getStringAttribute('invalid_sgsns6_to_log');
  }
  public set invalidSgsns6ToLog(value: string) {
    this._invalidSgsns6ToLog = value;
  }
  public resetInvalidSgsns6ToLog() {
    this._invalidSgsns6ToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidSgsns6ToLogInput() {
    return this._invalidSgsns6ToLog;
  }

  // invalid_sgsns_to_log - computed: false, optional: true, required: false
  private _invalidSgsnsToLog?: string; 
  public get invalidSgsnsToLog() {
    return this.getStringAttribute('invalid_sgsns_to_log');
  }
  public set invalidSgsnsToLog(value: string) {
    this._invalidSgsnsToLog = value;
  }
  public resetInvalidSgsnsToLog() {
    this._invalidSgsnsToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidSgsnsToLogInput() {
    return this._invalidSgsnsToLog;
  }

  // ip_filter - computed: false, optional: true, required: false
  private _ipFilter?: string; 
  public get ipFilter() {
    return this.getStringAttribute('ip_filter');
  }
  public set ipFilter(value: string) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // log_freq - computed: false, optional: true, required: false
  private _logFreq?: number; 
  public get logFreq() {
    return this.getNumberAttribute('log_freq');
  }
  public set logFreq(value: number) {
    this._logFreq = value;
  }
  public resetLogFreq() {
    this._logFreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFreqInput() {
    return this._logFreq;
  }

  // log_gtpu_limit - computed: false, optional: true, required: false
  private _logGtpuLimit?: number; 
  public get logGtpuLimit() {
    return this.getNumberAttribute('log_gtpu_limit');
  }
  public set logGtpuLimit(value: number) {
    this._logGtpuLimit = value;
  }
  public resetLogGtpuLimit() {
    this._logGtpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGtpuLimitInput() {
    return this._logGtpuLimit;
  }

  // log_imsi_prefix - computed: false, optional: true, required: false
  private _logImsiPrefix?: string; 
  public get logImsiPrefix() {
    return this.getStringAttribute('log_imsi_prefix');
  }
  public set logImsiPrefix(value: string) {
    this._logImsiPrefix = value;
  }
  public resetLogImsiPrefix() {
    this._logImsiPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logImsiPrefixInput() {
    return this._logImsiPrefix;
  }

  // log_msisdn_prefix - computed: false, optional: true, required: false
  private _logMsisdnPrefix?: string; 
  public get logMsisdnPrefix() {
    return this.getStringAttribute('log_msisdn_prefix');
  }
  public set logMsisdnPrefix(value: string) {
    this._logMsisdnPrefix = value;
  }
  public resetLogMsisdnPrefix() {
    this._logMsisdnPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMsisdnPrefixInput() {
    return this._logMsisdnPrefix;
  }

  // max_message_length - computed: false, optional: true, required: false
  private _maxMessageLength?: number; 
  public get maxMessageLength() {
    return this.getNumberAttribute('max_message_length');
  }
  public set maxMessageLength(value: number) {
    this._maxMessageLength = value;
  }
  public resetMaxMessageLength() {
    this._maxMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageLengthInput() {
    return this._maxMessageLength;
  }

  // message_filter_v0v1 - computed: false, optional: true, required: false
  private _messageFilterV0V1?: string; 
  public get messageFilterV0V1() {
    return this.getStringAttribute('message_filter_v0v1');
  }
  public set messageFilterV0V1(value: string) {
    this._messageFilterV0V1 = value;
  }
  public resetMessageFilterV0V1() {
    this._messageFilterV0V1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFilterV0V1Input() {
    return this._messageFilterV0V1;
  }

  // message_filter_v2 - computed: false, optional: true, required: false
  private _messageFilterV2?: string; 
  public get messageFilterV2() {
    return this.getStringAttribute('message_filter_v2');
  }
  public set messageFilterV2(value: string) {
    this._messageFilterV2 = value;
  }
  public resetMessageFilterV2() {
    this._messageFilterV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFilterV2Input() {
    return this._messageFilterV2;
  }

  // min_message_length - computed: false, optional: true, required: false
  private _minMessageLength?: number; 
  public get minMessageLength() {
    return this.getNumberAttribute('min_message_length');
  }
  public set minMessageLength(value: number) {
    this._minMessageLength = value;
  }
  public resetMinMessageLength() {
    this._minMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMessageLengthInput() {
    return this._minMessageLength;
  }

  // miss_must_ie - computed: false, optional: true, required: false
  private _missMustIe?: string; 
  public get missMustIe() {
    return this.getStringAttribute('miss_must_ie');
  }
  public set missMustIe(value: string) {
    this._missMustIe = value;
  }
  public resetMissMustIe() {
    this._missMustIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missMustIeInput() {
    return this._missMustIe;
  }

  // monitor_mode - computed: false, optional: true, required: false
  private _monitorMode?: string; 
  public get monitorMode() {
    return this.getStringAttribute('monitor_mode');
  }
  public set monitorMode(value: string) {
    this._monitorMode = value;
  }
  public resetMonitorMode() {
    this._monitorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorModeInput() {
    return this._monitorMode;
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

  // noip_filter - computed: false, optional: true, required: false
  private _noipFilter?: string; 
  public get noipFilter() {
    return this.getStringAttribute('noip_filter');
  }
  public set noipFilter(value: string) {
    this._noipFilter = value;
  }
  public resetNoipFilter() {
    this._noipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noipFilterInput() {
    return this._noipFilter;
  }

  // out_of_state_ie - computed: false, optional: true, required: false
  private _outOfStateIe?: string; 
  public get outOfStateIe() {
    return this.getStringAttribute('out_of_state_ie');
  }
  public set outOfStateIe(value: string) {
    this._outOfStateIe = value;
  }
  public resetOutOfStateIe() {
    this._outOfStateIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfStateIeInput() {
    return this._outOfStateIe;
  }

  // out_of_state_message - computed: false, optional: true, required: false
  private _outOfStateMessage?: string; 
  public get outOfStateMessage() {
    return this.getStringAttribute('out_of_state_message');
  }
  public set outOfStateMessage(value: string) {
    this._outOfStateMessage = value;
  }
  public resetOutOfStateMessage() {
    this._outOfStateMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfStateMessageInput() {
    return this._outOfStateMessage;
  }

  // policy_filter - computed: false, optional: true, required: false
  private _policyFilter?: string; 
  public get policyFilter() {
    return this.getStringAttribute('policy_filter');
  }
  public set policyFilter(value: string) {
    this._policyFilter = value;
  }
  public resetPolicyFilter() {
    this._policyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyFilterInput() {
    return this._policyFilter;
  }

  // port_notify - computed: false, optional: true, required: false
  private _portNotify?: number; 
  public get portNotify() {
    return this.getNumberAttribute('port_notify');
  }
  public set portNotify(value: number) {
    this._portNotify = value;
  }
  public resetPortNotify() {
    this._portNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNotifyInput() {
    return this._portNotify;
  }

  // rat_timeout_profile - computed: false, optional: true, required: false
  private _ratTimeoutProfile?: string; 
  public get ratTimeoutProfile() {
    return this.getStringAttribute('rat_timeout_profile');
  }
  public set ratTimeoutProfile(value: string) {
    this._ratTimeoutProfile = value;
  }
  public resetRatTimeoutProfile() {
    this._ratTimeoutProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratTimeoutProfileInput() {
    return this._ratTimeoutProfile;
  }

  // rate_limit_mode - computed: false, optional: true, required: false
  private _rateLimitMode?: string; 
  public get rateLimitMode() {
    return this.getStringAttribute('rate_limit_mode');
  }
  public set rateLimitMode(value: string) {
    this._rateLimitMode = value;
  }
  public resetRateLimitMode() {
    this._rateLimitMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitModeInput() {
    return this._rateLimitMode;
  }

  // rate_limited_log - computed: false, optional: true, required: false
  private _rateLimitedLog?: string; 
  public get rateLimitedLog() {
    return this.getStringAttribute('rate_limited_log');
  }
  public set rateLimitedLog(value: string) {
    this._rateLimitedLog = value;
  }
  public resetRateLimitedLog() {
    this._rateLimitedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitedLogInput() {
    return this._rateLimitedLog;
  }

  // rate_sampling_interval - computed: false, optional: true, required: false
  private _rateSamplingInterval?: number; 
  public get rateSamplingInterval() {
    return this.getNumberAttribute('rate_sampling_interval');
  }
  public set rateSamplingInterval(value: number) {
    this._rateSamplingInterval = value;
  }
  public resetRateSamplingInterval() {
    this._rateSamplingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateSamplingIntervalInput() {
    return this._rateSamplingInterval;
  }

  // remove_if_echo_expires - computed: false, optional: true, required: false
  private _removeIfEchoExpires?: string; 
  public get removeIfEchoExpires() {
    return this.getStringAttribute('remove_if_echo_expires');
  }
  public set removeIfEchoExpires(value: string) {
    this._removeIfEchoExpires = value;
  }
  public resetRemoveIfEchoExpires() {
    this._removeIfEchoExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeIfEchoExpiresInput() {
    return this._removeIfEchoExpires;
  }

  // remove_if_recovery_differ - computed: false, optional: true, required: false
  private _removeIfRecoveryDiffer?: string; 
  public get removeIfRecoveryDiffer() {
    return this.getStringAttribute('remove_if_recovery_differ');
  }
  public set removeIfRecoveryDiffer(value: string) {
    this._removeIfRecoveryDiffer = value;
  }
  public resetRemoveIfRecoveryDiffer() {
    this._removeIfRecoveryDiffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeIfRecoveryDifferInput() {
    return this._removeIfRecoveryDiffer;
  }

  // reserved_ie - computed: false, optional: true, required: false
  private _reservedIe?: string; 
  public get reservedIe() {
    return this.getStringAttribute('reserved_ie');
  }
  public set reservedIe(value: string) {
    this._reservedIe = value;
  }
  public resetReservedIe() {
    this._reservedIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIeInput() {
    return this._reservedIe;
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

  // send_delete_when_timeout - computed: false, optional: true, required: false
  private _sendDeleteWhenTimeout?: string; 
  public get sendDeleteWhenTimeout() {
    return this.getStringAttribute('send_delete_when_timeout');
  }
  public set sendDeleteWhenTimeout(value: string) {
    this._sendDeleteWhenTimeout = value;
  }
  public resetSendDeleteWhenTimeout() {
    this._sendDeleteWhenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDeleteWhenTimeoutInput() {
    return this._sendDeleteWhenTimeout;
  }

  // send_delete_when_timeout_v2 - computed: false, optional: true, required: false
  private _sendDeleteWhenTimeoutV2?: string; 
  public get sendDeleteWhenTimeoutV2() {
    return this.getStringAttribute('send_delete_when_timeout_v2');
  }
  public set sendDeleteWhenTimeoutV2(value: string) {
    this._sendDeleteWhenTimeoutV2 = value;
  }
  public resetSendDeleteWhenTimeoutV2() {
    this._sendDeleteWhenTimeoutV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDeleteWhenTimeoutV2Input() {
    return this._sendDeleteWhenTimeoutV2;
  }

  // spoof_src_addr - computed: false, optional: true, required: false
  private _spoofSrcAddr?: string; 
  public get spoofSrcAddr() {
    return this.getStringAttribute('spoof_src_addr');
  }
  public set spoofSrcAddr(value: string) {
    this._spoofSrcAddr = value;
  }
  public resetSpoofSrcAddr() {
    this._spoofSrcAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofSrcAddrInput() {
    return this._spoofSrcAddr;
  }

  // state_invalid_log - computed: false, optional: true, required: false
  private _stateInvalidLog?: string; 
  public get stateInvalidLog() {
    return this.getStringAttribute('state_invalid_log');
  }
  public set stateInvalidLog(value: string) {
    this._stateInvalidLog = value;
  }
  public resetStateInvalidLog() {
    this._stateInvalidLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInvalidLogInput() {
    return this._stateInvalidLog;
  }

  // sub_second_interval - computed: false, optional: true, required: false
  private _subSecondInterval?: string; 
  public get subSecondInterval() {
    return this.getStringAttribute('sub_second_interval');
  }
  public set subSecondInterval(value: string) {
    this._subSecondInterval = value;
  }
  public resetSubSecondInterval() {
    this._subSecondInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subSecondIntervalInput() {
    return this._subSecondInterval;
  }

  // sub_second_sampling - computed: false, optional: true, required: false
  private _subSecondSampling?: string; 
  public get subSecondSampling() {
    return this.getStringAttribute('sub_second_sampling');
  }
  public set subSecondSampling(value: string) {
    this._subSecondSampling = value;
  }
  public resetSubSecondSampling() {
    this._subSecondSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subSecondSamplingInput() {
    return this._subSecondSampling;
  }

  // traffic_count_log - computed: false, optional: true, required: false
  private _trafficCountLog?: string; 
  public get trafficCountLog() {
    return this.getStringAttribute('traffic_count_log');
  }
  public set trafficCountLog(value: string) {
    this._trafficCountLog = value;
  }
  public resetTrafficCountLog() {
    this._trafficCountLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficCountLogInput() {
    return this._trafficCountLog;
  }

  // tunnel_limit - computed: false, optional: true, required: false
  private _tunnelLimit?: number; 
  public get tunnelLimit() {
    return this.getNumberAttribute('tunnel_limit');
  }
  public set tunnelLimit(value: number) {
    this._tunnelLimit = value;
  }
  public resetTunnelLimit() {
    this._tunnelLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelLimitInput() {
    return this._tunnelLimit;
  }

  // tunnel_limit_log - computed: false, optional: true, required: false
  private _tunnelLimitLog?: string; 
  public get tunnelLimitLog() {
    return this.getStringAttribute('tunnel_limit_log');
  }
  public set tunnelLimitLog(value: string) {
    this._tunnelLimitLog = value;
  }
  public resetTunnelLimitLog() {
    this._tunnelLimitLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelLimitLogInput() {
    return this._tunnelLimitLog;
  }

  // tunnel_timeout - computed: false, optional: true, required: false
  private _tunnelTimeout?: number; 
  public get tunnelTimeout() {
    return this.getNumberAttribute('tunnel_timeout');
  }
  public set tunnelTimeout(value: number) {
    this._tunnelTimeout = value;
  }
  public resetTunnelTimeout() {
    this._tunnelTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelTimeoutInput() {
    return this._tunnelTimeout;
  }

  // unknown_version_action - computed: false, optional: true, required: false
  private _unknownVersionAction?: string; 
  public get unknownVersionAction() {
    return this.getStringAttribute('unknown_version_action');
  }
  public set unknownVersionAction(value: string) {
    this._unknownVersionAction = value;
  }
  public resetUnknownVersionAction() {
    this._unknownVersionAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownVersionActionInput() {
    return this._unknownVersionAction;
  }

  // user_plane_message_rate_limit - computed: false, optional: true, required: false
  private _userPlaneMessageRateLimit?: number; 
  public get userPlaneMessageRateLimit() {
    return this.getNumberAttribute('user_plane_message_rate_limit');
  }
  public set userPlaneMessageRateLimit(value: number) {
    this._userPlaneMessageRateLimit = value;
  }
  public resetUserPlaneMessageRateLimit() {
    this._userPlaneMessageRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPlaneMessageRateLimitInput() {
    return this._userPlaneMessageRateLimit;
  }

  // warning_threshold - computed: false, optional: true, required: false
  private _warningThreshold?: number; 
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }
  public set warningThreshold(value: number) {
    this._warningThreshold = value;
  }
  public resetWarningThreshold() {
    this._warningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }

  // apn - computed: false, optional: true, required: false
  private _apn = new ObjectFirewallGtpApnList(this, "apn", false);
  public get apn() {
    return this._apn;
  }
  public putApn(value: ObjectFirewallGtpApn[] | cdktf.IResolvable) {
    this._apn.internalValue = value;
  }
  public resetApn() {
    this._apn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnInput() {
    return this._apn.internalValue;
  }

  // ie_remove_policy - computed: false, optional: true, required: false
  private _ieRemovePolicy = new ObjectFirewallGtpIeRemovePolicyList(this, "ie_remove_policy", false);
  public get ieRemovePolicy() {
    return this._ieRemovePolicy;
  }
  public putIeRemovePolicy(value: ObjectFirewallGtpIeRemovePolicy[] | cdktf.IResolvable) {
    this._ieRemovePolicy.internalValue = value;
  }
  public resetIeRemovePolicy() {
    this._ieRemovePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ieRemovePolicyInput() {
    return this._ieRemovePolicy.internalValue;
  }

  // ie_validation - computed: false, optional: true, required: false
  private _ieValidation = new ObjectFirewallGtpIeValidationOutputReference(this, "ie_validation");
  public get ieValidation() {
    return this._ieValidation;
  }
  public putIeValidation(value: ObjectFirewallGtpIeValidation) {
    this._ieValidation.internalValue = value;
  }
  public resetIeValidation() {
    this._ieValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ieValidationInput() {
    return this._ieValidation.internalValue;
  }

  // imsi - computed: false, optional: true, required: false
  private _imsi = new ObjectFirewallGtpImsiList(this, "imsi", false);
  public get imsi() {
    return this._imsi;
  }
  public putImsi(value: ObjectFirewallGtpImsi[] | cdktf.IResolvable) {
    this._imsi.internalValue = value;
  }
  public resetImsi() {
    this._imsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiInput() {
    return this._imsi.internalValue;
  }

  // ip_policy - computed: false, optional: true, required: false
  private _ipPolicy = new ObjectFirewallGtpIpPolicyList(this, "ip_policy", false);
  public get ipPolicy() {
    return this._ipPolicy;
  }
  public putIpPolicy(value: ObjectFirewallGtpIpPolicy[] | cdktf.IResolvable) {
    this._ipPolicy.internalValue = value;
  }
  public resetIpPolicy() {
    this._ipPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPolicyInput() {
    return this._ipPolicy.internalValue;
  }

  // message_rate_limit - computed: false, optional: true, required: false
  private _messageRateLimit = new ObjectFirewallGtpMessageRateLimitOutputReference(this, "message_rate_limit");
  public get messageRateLimit() {
    return this._messageRateLimit;
  }
  public putMessageRateLimit(value: ObjectFirewallGtpMessageRateLimit) {
    this._messageRateLimit.internalValue = value;
  }
  public resetMessageRateLimit() {
    this._messageRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRateLimitInput() {
    return this._messageRateLimit.internalValue;
  }

  // message_rate_limit_v0 - computed: false, optional: true, required: false
  private _messageRateLimitV0 = new ObjectFirewallGtpMessageRateLimitV0OutputReference(this, "message_rate_limit_v0");
  public get messageRateLimitV0() {
    return this._messageRateLimitV0;
  }
  public putMessageRateLimitV0(value: ObjectFirewallGtpMessageRateLimitV0) {
    this._messageRateLimitV0.internalValue = value;
  }
  public resetMessageRateLimitV0() {
    this._messageRateLimitV0.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRateLimitV0Input() {
    return this._messageRateLimitV0.internalValue;
  }

  // message_rate_limit_v1 - computed: false, optional: true, required: false
  private _messageRateLimitV1 = new ObjectFirewallGtpMessageRateLimitV1OutputReference(this, "message_rate_limit_v1");
  public get messageRateLimitV1() {
    return this._messageRateLimitV1;
  }
  public putMessageRateLimitV1(value: ObjectFirewallGtpMessageRateLimitV1) {
    this._messageRateLimitV1.internalValue = value;
  }
  public resetMessageRateLimitV1() {
    this._messageRateLimitV1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRateLimitV1Input() {
    return this._messageRateLimitV1.internalValue;
  }

  // message_rate_limit_v2 - computed: false, optional: true, required: false
  private _messageRateLimitV2 = new ObjectFirewallGtpMessageRateLimitV2OutputReference(this, "message_rate_limit_v2");
  public get messageRateLimitV2() {
    return this._messageRateLimitV2;
  }
  public putMessageRateLimitV2(value: ObjectFirewallGtpMessageRateLimitV2) {
    this._messageRateLimitV2.internalValue = value;
  }
  public resetMessageRateLimitV2() {
    this._messageRateLimitV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRateLimitV2Input() {
    return this._messageRateLimitV2.internalValue;
  }

  // noip_policy - computed: false, optional: true, required: false
  private _noipPolicy = new ObjectFirewallGtpNoipPolicyList(this, "noip_policy", false);
  public get noipPolicy() {
    return this._noipPolicy;
  }
  public putNoipPolicy(value: ObjectFirewallGtpNoipPolicy[] | cdktf.IResolvable) {
    this._noipPolicy.internalValue = value;
  }
  public resetNoipPolicy() {
    this._noipPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noipPolicyInput() {
    return this._noipPolicy.internalValue;
  }

  // per_apn_shaper - computed: false, optional: true, required: false
  private _perApnShaper = new ObjectFirewallGtpPerApnShaperList(this, "per_apn_shaper", false);
  public get perApnShaper() {
    return this._perApnShaper;
  }
  public putPerApnShaper(value: ObjectFirewallGtpPerApnShaper[] | cdktf.IResolvable) {
    this._perApnShaper.internalValue = value;
  }
  public resetPerApnShaper() {
    this._perApnShaper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perApnShaperInput() {
    return this._perApnShaper.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new ObjectFirewallGtpPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: ObjectFirewallGtpPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // policy_v2 - computed: false, optional: true, required: false
  private _policyV2 = new ObjectFirewallGtpPolicyV2List(this, "policy_v2", false);
  public get policyV2() {
    return this._policyV2;
  }
  public putPolicyV2(value: ObjectFirewallGtpPolicyV2[] | cdktf.IResolvable) {
    this._policyV2.internalValue = value;
  }
  public resetPolicyV2() {
    this._policyV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyV2Input() {
    return this._policyV2.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_notify: cdktf.stringToTerraform(this._addrNotify),
      adom: cdktf.stringToTerraform(this._adom),
      apn_filter: cdktf.stringToTerraform(this._apnFilter),
      authorized_ggsns: cdktf.stringToTerraform(this._authorizedGgsns),
      authorized_ggsns6: cdktf.stringToTerraform(this._authorizedGgsns6),
      authorized_sgsns: cdktf.stringToTerraform(this._authorizedSgsns),
      authorized_sgsns6: cdktf.stringToTerraform(this._authorizedSgsns6),
      comment: cdktf.stringToTerraform(this._comment),
      context_id: cdktf.numberToTerraform(this._contextId),
      control_plane_message_rate_limit: cdktf.numberToTerraform(this._controlPlaneMessageRateLimit),
      default_apn_action: cdktf.stringToTerraform(this._defaultApnAction),
      default_imsi_action: cdktf.stringToTerraform(this._defaultImsiAction),
      default_ip_action: cdktf.stringToTerraform(this._defaultIpAction),
      default_noip_action: cdktf.stringToTerraform(this._defaultNoipAction),
      default_policy_action: cdktf.stringToTerraform(this._defaultPolicyAction),
      denied_log: cdktf.stringToTerraform(this._deniedLog),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      echo_request_interval: cdktf.numberToTerraform(this._echoRequestInterval),
      extension_log: cdktf.stringToTerraform(this._extensionLog),
      forwarded_log: cdktf.stringToTerraform(this._forwardedLog),
      global_tunnel_limit: cdktf.stringToTerraform(this._globalTunnelLimit),
      gtp_in_gtp: cdktf.stringToTerraform(this._gtpInGtp),
      gtpu_denied_log: cdktf.stringToTerraform(this._gtpuDeniedLog),
      gtpu_forwarded_log: cdktf.stringToTerraform(this._gtpuForwardedLog),
      gtpu_log_freq: cdktf.numberToTerraform(this._gtpuLogFreq),
      gtpv0: cdktf.stringToTerraform(this._gtpv0),
      half_close_timeout: cdktf.numberToTerraform(this._halfCloseTimeout),
      half_open_timeout: cdktf.numberToTerraform(this._halfOpenTimeout),
      handover_group: cdktf.stringToTerraform(this._handoverGroup),
      handover_group6: cdktf.stringToTerraform(this._handoverGroup6),
      id: cdktf.stringToTerraform(this._id),
      ie_allow_list_v0v1: cdktf.stringToTerraform(this._ieAllowListV0V1),
      ie_allow_list_v2: cdktf.stringToTerraform(this._ieAllowListV2),
      ie_remover: cdktf.stringToTerraform(this._ieRemover),
      ie_white_list_v0v1: cdktf.stringToTerraform(this._ieWhiteListV0V1),
      ie_white_list_v2: cdktf.stringToTerraform(this._ieWhiteListV2),
      imsi_filter: cdktf.stringToTerraform(this._imsiFilter),
      interface_notify: cdktf.stringToTerraform(this._interfaceNotify),
      invalid_reserved_field: cdktf.stringToTerraform(this._invalidReservedField),
      invalid_sgsns6_to_log: cdktf.stringToTerraform(this._invalidSgsns6ToLog),
      invalid_sgsns_to_log: cdktf.stringToTerraform(this._invalidSgsnsToLog),
      ip_filter: cdktf.stringToTerraform(this._ipFilter),
      log_freq: cdktf.numberToTerraform(this._logFreq),
      log_gtpu_limit: cdktf.numberToTerraform(this._logGtpuLimit),
      log_imsi_prefix: cdktf.stringToTerraform(this._logImsiPrefix),
      log_msisdn_prefix: cdktf.stringToTerraform(this._logMsisdnPrefix),
      max_message_length: cdktf.numberToTerraform(this._maxMessageLength),
      message_filter_v0v1: cdktf.stringToTerraform(this._messageFilterV0V1),
      message_filter_v2: cdktf.stringToTerraform(this._messageFilterV2),
      min_message_length: cdktf.numberToTerraform(this._minMessageLength),
      miss_must_ie: cdktf.stringToTerraform(this._missMustIe),
      monitor_mode: cdktf.stringToTerraform(this._monitorMode),
      name: cdktf.stringToTerraform(this._name),
      noip_filter: cdktf.stringToTerraform(this._noipFilter),
      out_of_state_ie: cdktf.stringToTerraform(this._outOfStateIe),
      out_of_state_message: cdktf.stringToTerraform(this._outOfStateMessage),
      policy_filter: cdktf.stringToTerraform(this._policyFilter),
      port_notify: cdktf.numberToTerraform(this._portNotify),
      rat_timeout_profile: cdktf.stringToTerraform(this._ratTimeoutProfile),
      rate_limit_mode: cdktf.stringToTerraform(this._rateLimitMode),
      rate_limited_log: cdktf.stringToTerraform(this._rateLimitedLog),
      rate_sampling_interval: cdktf.numberToTerraform(this._rateSamplingInterval),
      remove_if_echo_expires: cdktf.stringToTerraform(this._removeIfEchoExpires),
      remove_if_recovery_differ: cdktf.stringToTerraform(this._removeIfRecoveryDiffer),
      reserved_ie: cdktf.stringToTerraform(this._reservedIe),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      send_delete_when_timeout: cdktf.stringToTerraform(this._sendDeleteWhenTimeout),
      send_delete_when_timeout_v2: cdktf.stringToTerraform(this._sendDeleteWhenTimeoutV2),
      spoof_src_addr: cdktf.stringToTerraform(this._spoofSrcAddr),
      state_invalid_log: cdktf.stringToTerraform(this._stateInvalidLog),
      sub_second_interval: cdktf.stringToTerraform(this._subSecondInterval),
      sub_second_sampling: cdktf.stringToTerraform(this._subSecondSampling),
      traffic_count_log: cdktf.stringToTerraform(this._trafficCountLog),
      tunnel_limit: cdktf.numberToTerraform(this._tunnelLimit),
      tunnel_limit_log: cdktf.stringToTerraform(this._tunnelLimitLog),
      tunnel_timeout: cdktf.numberToTerraform(this._tunnelTimeout),
      unknown_version_action: cdktf.stringToTerraform(this._unknownVersionAction),
      user_plane_message_rate_limit: cdktf.numberToTerraform(this._userPlaneMessageRateLimit),
      warning_threshold: cdktf.numberToTerraform(this._warningThreshold),
      apn: cdktf.listMapper(objectFirewallGtpApnToTerraform, true)(this._apn.internalValue),
      ie_remove_policy: cdktf.listMapper(objectFirewallGtpIeRemovePolicyToTerraform, true)(this._ieRemovePolicy.internalValue),
      ie_validation: objectFirewallGtpIeValidationToTerraform(this._ieValidation.internalValue),
      imsi: cdktf.listMapper(objectFirewallGtpImsiToTerraform, true)(this._imsi.internalValue),
      ip_policy: cdktf.listMapper(objectFirewallGtpIpPolicyToTerraform, true)(this._ipPolicy.internalValue),
      message_rate_limit: objectFirewallGtpMessageRateLimitToTerraform(this._messageRateLimit.internalValue),
      message_rate_limit_v0: objectFirewallGtpMessageRateLimitV0ToTerraform(this._messageRateLimitV0.internalValue),
      message_rate_limit_v1: objectFirewallGtpMessageRateLimitV1ToTerraform(this._messageRateLimitV1.internalValue),
      message_rate_limit_v2: objectFirewallGtpMessageRateLimitV2ToTerraform(this._messageRateLimitV2.internalValue),
      noip_policy: cdktf.listMapper(objectFirewallGtpNoipPolicyToTerraform, true)(this._noipPolicy.internalValue),
      per_apn_shaper: cdktf.listMapper(objectFirewallGtpPerApnShaperToTerraform, true)(this._perApnShaper.internalValue),
      policy: cdktf.listMapper(objectFirewallGtpPolicyToTerraform, true)(this._policy.internalValue),
      policy_v2: cdktf.listMapper(objectFirewallGtpPolicyV2ToTerraform, true)(this._policyV2.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_notify: {
        value: cdktf.stringToHclTerraform(this._addrNotify),
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
      apn_filter: {
        value: cdktf.stringToHclTerraform(this._apnFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_ggsns: {
        value: cdktf.stringToHclTerraform(this._authorizedGgsns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_ggsns6: {
        value: cdktf.stringToHclTerraform(this._authorizedGgsns6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_sgsns: {
        value: cdktf.stringToHclTerraform(this._authorizedSgsns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_sgsns6: {
        value: cdktf.stringToHclTerraform(this._authorizedSgsns6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context_id: {
        value: cdktf.numberToHclTerraform(this._contextId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      control_plane_message_rate_limit: {
        value: cdktf.numberToHclTerraform(this._controlPlaneMessageRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_apn_action: {
        value: cdktf.stringToHclTerraform(this._defaultApnAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_imsi_action: {
        value: cdktf.stringToHclTerraform(this._defaultImsiAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ip_action: {
        value: cdktf.stringToHclTerraform(this._defaultIpAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_noip_action: {
        value: cdktf.stringToHclTerraform(this._defaultNoipAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_policy_action: {
        value: cdktf.stringToHclTerraform(this._defaultPolicyAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      denied_log: {
        value: cdktf.stringToHclTerraform(this._deniedLog),
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
      echo_request_interval: {
        value: cdktf.numberToHclTerraform(this._echoRequestInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extension_log: {
        value: cdktf.stringToHclTerraform(this._extensionLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarded_log: {
        value: cdktf.stringToHclTerraform(this._forwardedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_tunnel_limit: {
        value: cdktf.stringToHclTerraform(this._globalTunnelLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtp_in_gtp: {
        value: cdktf.stringToHclTerraform(this._gtpInGtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtpu_denied_log: {
        value: cdktf.stringToHclTerraform(this._gtpuDeniedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtpu_forwarded_log: {
        value: cdktf.stringToHclTerraform(this._gtpuForwardedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtpu_log_freq: {
        value: cdktf.numberToHclTerraform(this._gtpuLogFreq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtpv0: {
        value: cdktf.stringToHclTerraform(this._gtpv0),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      half_close_timeout: {
        value: cdktf.numberToHclTerraform(this._halfCloseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      half_open_timeout: {
        value: cdktf.numberToHclTerraform(this._halfOpenTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      handover_group: {
        value: cdktf.stringToHclTerraform(this._handoverGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handover_group6: {
        value: cdktf.stringToHclTerraform(this._handoverGroup6),
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
      ie_allow_list_v0v1: {
        value: cdktf.stringToHclTerraform(this._ieAllowListV0V1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ie_allow_list_v2: {
        value: cdktf.stringToHclTerraform(this._ieAllowListV2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ie_remover: {
        value: cdktf.stringToHclTerraform(this._ieRemover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ie_white_list_v0v1: {
        value: cdktf.stringToHclTerraform(this._ieWhiteListV0V1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ie_white_list_v2: {
        value: cdktf.stringToHclTerraform(this._ieWhiteListV2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imsi_filter: {
        value: cdktf.stringToHclTerraform(this._imsiFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_notify: {
        value: cdktf.stringToHclTerraform(this._interfaceNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invalid_reserved_field: {
        value: cdktf.stringToHclTerraform(this._invalidReservedField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invalid_sgsns6_to_log: {
        value: cdktf.stringToHclTerraform(this._invalidSgsns6ToLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invalid_sgsns_to_log: {
        value: cdktf.stringToHclTerraform(this._invalidSgsnsToLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_filter: {
        value: cdktf.stringToHclTerraform(this._ipFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_freq: {
        value: cdktf.numberToHclTerraform(this._logFreq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_gtpu_limit: {
        value: cdktf.numberToHclTerraform(this._logGtpuLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_imsi_prefix: {
        value: cdktf.stringToHclTerraform(this._logImsiPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_msisdn_prefix: {
        value: cdktf.stringToHclTerraform(this._logMsisdnPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_message_length: {
        value: cdktf.numberToHclTerraform(this._maxMessageLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_filter_v0v1: {
        value: cdktf.stringToHclTerraform(this._messageFilterV0V1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_filter_v2: {
        value: cdktf.stringToHclTerraform(this._messageFilterV2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_message_length: {
        value: cdktf.numberToHclTerraform(this._minMessageLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      miss_must_ie: {
        value: cdktf.stringToHclTerraform(this._missMustIe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_mode: {
        value: cdktf.stringToHclTerraform(this._monitorMode),
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
      noip_filter: {
        value: cdktf.stringToHclTerraform(this._noipFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_of_state_ie: {
        value: cdktf.stringToHclTerraform(this._outOfStateIe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_of_state_message: {
        value: cdktf.stringToHclTerraform(this._outOfStateMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_filter: {
        value: cdktf.stringToHclTerraform(this._policyFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_notify: {
        value: cdktf.numberToHclTerraform(this._portNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rat_timeout_profile: {
        value: cdktf.stringToHclTerraform(this._ratTimeoutProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_mode: {
        value: cdktf.stringToHclTerraform(this._rateLimitMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limited_log: {
        value: cdktf.stringToHclTerraform(this._rateLimitedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_sampling_interval: {
        value: cdktf.numberToHclTerraform(this._rateSamplingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_if_echo_expires: {
        value: cdktf.stringToHclTerraform(this._removeIfEchoExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_if_recovery_differ: {
        value: cdktf.stringToHclTerraform(this._removeIfRecoveryDiffer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_ie: {
        value: cdktf.stringToHclTerraform(this._reservedIe),
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
      send_delete_when_timeout: {
        value: cdktf.stringToHclTerraform(this._sendDeleteWhenTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_delete_when_timeout_v2: {
        value: cdktf.stringToHclTerraform(this._sendDeleteWhenTimeoutV2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoof_src_addr: {
        value: cdktf.stringToHclTerraform(this._spoofSrcAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_invalid_log: {
        value: cdktf.stringToHclTerraform(this._stateInvalidLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_second_interval: {
        value: cdktf.stringToHclTerraform(this._subSecondInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_second_sampling: {
        value: cdktf.stringToHclTerraform(this._subSecondSampling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_count_log: {
        value: cdktf.stringToHclTerraform(this._trafficCountLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_limit: {
        value: cdktf.numberToHclTerraform(this._tunnelLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_limit_log: {
        value: cdktf.stringToHclTerraform(this._tunnelLimitLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_timeout: {
        value: cdktf.numberToHclTerraform(this._tunnelTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_version_action: {
        value: cdktf.stringToHclTerraform(this._unknownVersionAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_plane_message_rate_limit: {
        value: cdktf.numberToHclTerraform(this._userPlaneMessageRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      warning_threshold: {
        value: cdktf.numberToHclTerraform(this._warningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apn: {
        value: cdktf.listMapperHcl(objectFirewallGtpApnToHclTerraform, true)(this._apn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpApnList",
      },
      ie_remove_policy: {
        value: cdktf.listMapperHcl(objectFirewallGtpIeRemovePolicyToHclTerraform, true)(this._ieRemovePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpIeRemovePolicyList",
      },
      ie_validation: {
        value: objectFirewallGtpIeValidationToHclTerraform(this._ieValidation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpIeValidationList",
      },
      imsi: {
        value: cdktf.listMapperHcl(objectFirewallGtpImsiToHclTerraform, true)(this._imsi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpImsiList",
      },
      ip_policy: {
        value: cdktf.listMapperHcl(objectFirewallGtpIpPolicyToHclTerraform, true)(this._ipPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpIpPolicyList",
      },
      message_rate_limit: {
        value: objectFirewallGtpMessageRateLimitToHclTerraform(this._messageRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpMessageRateLimitList",
      },
      message_rate_limit_v0: {
        value: objectFirewallGtpMessageRateLimitV0ToHclTerraform(this._messageRateLimitV0.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpMessageRateLimitV0List",
      },
      message_rate_limit_v1: {
        value: objectFirewallGtpMessageRateLimitV1ToHclTerraform(this._messageRateLimitV1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpMessageRateLimitV1List",
      },
      message_rate_limit_v2: {
        value: objectFirewallGtpMessageRateLimitV2ToHclTerraform(this._messageRateLimitV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpMessageRateLimitV2List",
      },
      noip_policy: {
        value: cdktf.listMapperHcl(objectFirewallGtpNoipPolicyToHclTerraform, true)(this._noipPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpNoipPolicyList",
      },
      per_apn_shaper: {
        value: cdktf.listMapperHcl(objectFirewallGtpPerApnShaperToHclTerraform, true)(this._perApnShaper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpPerApnShaperList",
      },
      policy: {
        value: cdktf.listMapperHcl(objectFirewallGtpPolicyToHclTerraform, true)(this._policy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpPolicyList",
      },
      policy_v2: {
        value: cdktf.listMapperHcl(objectFirewallGtpPolicyV2ToHclTerraform, true)(this._policyV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallGtpPolicyV2List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
