// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnalyticsprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#apdex_response_threshold Analyticsprofile#apdex_response_threshold}
  */
  readonly apdexResponseThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#apdex_response_tolerated_factor Analyticsprofile#apdex_response_tolerated_factor}
  */
  readonly apdexResponseToleratedFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#apdex_rtt_threshold Analyticsprofile#apdex_rtt_threshold}
  */
  readonly apdexRttThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#apdex_rtt_tolerated_factor Analyticsprofile#apdex_rtt_tolerated_factor}
  */
  readonly apdexRttToleratedFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#apdex_rum_threshold Analyticsprofile#apdex_rum_threshold}
  */
  readonly apdexRumThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#apdex_rum_tolerated_factor Analyticsprofile#apdex_rum_tolerated_factor}
  */
  readonly apdexRumToleratedFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#apdex_server_response_threshold Analyticsprofile#apdex_server_response_threshold}
  */
  readonly apdexServerResponseThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#apdex_server_response_tolerated_factor Analyticsprofile#apdex_server_response_tolerated_factor}
  */
  readonly apdexServerResponseToleratedFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#apdex_server_rtt_threshold Analyticsprofile#apdex_server_rtt_threshold}
  */
  readonly apdexServerRttThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#apdex_server_rtt_tolerated_factor Analyticsprofile#apdex_server_rtt_tolerated_factor}
  */
  readonly apdexServerRttToleratedFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#conn_lossy_ooo_threshold Analyticsprofile#conn_lossy_ooo_threshold}
  */
  readonly connLossyOooThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#conn_lossy_timeo_rexmt_threshold Analyticsprofile#conn_lossy_timeo_rexmt_threshold}
  */
  readonly connLossyTimeoRexmtThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#conn_lossy_total_rexmt_threshold Analyticsprofile#conn_lossy_total_rexmt_threshold}
  */
  readonly connLossyTotalRexmtThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#conn_lossy_zero_win_size_event_threshold Analyticsprofile#conn_lossy_zero_win_size_event_threshold}
  */
  readonly connLossyZeroWinSizeEventThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#conn_server_lossy_ooo_threshold Analyticsprofile#conn_server_lossy_ooo_threshold}
  */
  readonly connServerLossyOooThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#conn_server_lossy_timeo_rexmt_threshold Analyticsprofile#conn_server_lossy_timeo_rexmt_threshold}
  */
  readonly connServerLossyTimeoRexmtThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#conn_server_lossy_total_rexmt_threshold Analyticsprofile#conn_server_lossy_total_rexmt_threshold}
  */
  readonly connServerLossyTotalRexmtThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#conn_server_lossy_zero_win_size_event_threshold Analyticsprofile#conn_server_lossy_zero_win_size_event_threshold}
  */
  readonly connServerLossyZeroWinSizeEventThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#description Analyticsprofile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#enable_adaptive_config Analyticsprofile#enable_adaptive_config}
  */
  readonly enableAdaptiveConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#enable_advanced_analytics Analyticsprofile#enable_advanced_analytics}
  */
  readonly enableAdvancedAnalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#enable_ondemand_metrics Analyticsprofile#enable_ondemand_metrics}
  */
  readonly enableOndemandMetrics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#enable_se_analytics Analyticsprofile#enable_se_analytics}
  */
  readonly enableSeAnalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#enable_server_analytics Analyticsprofile#enable_server_analytics}
  */
  readonly enableServerAnalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#enable_vs_analytics Analyticsprofile#enable_vs_analytics}
  */
  readonly enableVsAnalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_client_close_before_request_as_error Analyticsprofile#exclude_client_close_before_request_as_error}
  */
  readonly excludeClientCloseBeforeRequestAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_conn_drop_client_small_window_as_error Analyticsprofile#exclude_conn_drop_client_small_window_as_error}
  */
  readonly excludeConnDropClientSmallWindowAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_dns_policy_drop_as_significant Analyticsprofile#exclude_dns_policy_drop_as_significant}
  */
  readonly excludeDnsPolicyDropAsSignificant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_gs_down_as_error Analyticsprofile#exclude_gs_down_as_error}
  */
  readonly excludeGsDownAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_http_error_codes Analyticsprofile#exclude_http_error_codes}
  */
  readonly excludeHttpErrorCodes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_invalid_dns_domain_as_error Analyticsprofile#exclude_invalid_dns_domain_as_error}
  */
  readonly excludeInvalidDnsDomainAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_invalid_dns_query_as_error Analyticsprofile#exclude_invalid_dns_query_as_error}
  */
  readonly excludeInvalidDnsQueryAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_issuer_revoked_ocsp_responses_as_error Analyticsprofile#exclude_issuer_revoked_ocsp_responses_as_error}
  */
  readonly excludeIssuerRevokedOcspResponsesAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_no_dns_record_as_error Analyticsprofile#exclude_no_dns_record_as_error}
  */
  readonly excludeNoDnsRecordAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_no_valid_gs_member_as_error Analyticsprofile#exclude_no_valid_gs_member_as_error}
  */
  readonly excludeNoValidGsMemberAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_persistence_change_as_error Analyticsprofile#exclude_persistence_change_as_error}
  */
  readonly excludePersistenceChangeAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_revoked_ocsp_responses_as_error Analyticsprofile#exclude_revoked_ocsp_responses_as_error}
  */
  readonly excludeRevokedOcspResponsesAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_server_dns_error_as_error Analyticsprofile#exclude_server_dns_error_as_error}
  */
  readonly excludeServerDnsErrorAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_server_tcp_reset_as_error Analyticsprofile#exclude_server_tcp_reset_as_error}
  */
  readonly excludeServerTcpResetAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_sip_error_codes Analyticsprofile#exclude_sip_error_codes}
  */
  readonly excludeSipErrorCodes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_stale_ocsp_responses_as_error Analyticsprofile#exclude_stale_ocsp_responses_as_error}
  */
  readonly excludeStaleOcspResponsesAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_syn_retransmit_as_error Analyticsprofile#exclude_syn_retransmit_as_error}
  */
  readonly excludeSynRetransmitAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_tcp_reset_as_error Analyticsprofile#exclude_tcp_reset_as_error}
  */
  readonly excludeTcpResetAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_unavailable_ocsp_responses_as_error Analyticsprofile#exclude_unavailable_ocsp_responses_as_error}
  */
  readonly excludeUnavailableOcspResponsesAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#exclude_unsupported_dns_query_as_error Analyticsprofile#exclude_unsupported_dns_query_as_error}
  */
  readonly excludeUnsupportedDnsQueryAsError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#healthscore_max_server_limit Analyticsprofile#healthscore_max_server_limit}
  */
  readonly healthscoreMaxServerLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_event_throttle_window Analyticsprofile#hs_event_throttle_window}
  */
  readonly hsEventThrottleWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_max_anomaly_penalty Analyticsprofile#hs_max_anomaly_penalty}
  */
  readonly hsMaxAnomalyPenalty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_max_resources_penalty Analyticsprofile#hs_max_resources_penalty}
  */
  readonly hsMaxResourcesPenalty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_max_security_penalty Analyticsprofile#hs_max_security_penalty}
  */
  readonly hsMaxSecurityPenalty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_min_dos_rate Analyticsprofile#hs_min_dos_rate}
  */
  readonly hsMinDosRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_performance_boost Analyticsprofile#hs_performance_boost}
  */
  readonly hsPerformanceBoost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_pscore_traffic_threshold_l4_client Analyticsprofile#hs_pscore_traffic_threshold_l4_client}
  */
  readonly hsPscoreTrafficThresholdL4Client?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_pscore_traffic_threshold_l4_server Analyticsprofile#hs_pscore_traffic_threshold_l4_server}
  */
  readonly hsPscoreTrafficThresholdL4Server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_certscore_expired Analyticsprofile#hs_security_certscore_expired}
  */
  readonly hsSecurityCertscoreExpired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_certscore_gt30d Analyticsprofile#hs_security_certscore_gt30d}
  */
  readonly hsSecurityCertscoreGt30D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_certscore_le07d Analyticsprofile#hs_security_certscore_le07d}
  */
  readonly hsSecurityCertscoreLe07D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_certscore_le30d Analyticsprofile#hs_security_certscore_le30d}
  */
  readonly hsSecurityCertscoreLe30D?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_chain_invalidity_penalty Analyticsprofile#hs_security_chain_invalidity_penalty}
  */
  readonly hsSecurityChainInvalidityPenalty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_cipherscore_eq000b Analyticsprofile#hs_security_cipherscore_eq000b}
  */
  readonly hsSecurityCipherscoreEq000B?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_cipherscore_ge128b Analyticsprofile#hs_security_cipherscore_ge128b}
  */
  readonly hsSecurityCipherscoreGe128B?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_cipherscore_lt128b Analyticsprofile#hs_security_cipherscore_lt128b}
  */
  readonly hsSecurityCipherscoreLt128B?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_encalgo_score_none Analyticsprofile#hs_security_encalgo_score_none}
  */
  readonly hsSecurityEncalgoScoreNone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_encalgo_score_rc4 Analyticsprofile#hs_security_encalgo_score_rc4}
  */
  readonly hsSecurityEncalgoScoreRc4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_hsts_penalty Analyticsprofile#hs_security_hsts_penalty}
  */
  readonly hsSecurityHstsPenalty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_nonpfs_penalty Analyticsprofile#hs_security_nonpfs_penalty}
  */
  readonly hsSecurityNonpfsPenalty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_ocsp_revoked_score Analyticsprofile#hs_security_ocsp_revoked_score}
  */
  readonly hsSecurityOcspRevokedScore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_selfsignedcert_penalty Analyticsprofile#hs_security_selfsignedcert_penalty}
  */
  readonly hsSecuritySelfsignedcertPenalty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_ssl30_score Analyticsprofile#hs_security_ssl30_score}
  */
  readonly hsSecuritySsl30Score?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_tls10_score Analyticsprofile#hs_security_tls10_score}
  */
  readonly hsSecurityTls10Score?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_tls11_score Analyticsprofile#hs_security_tls11_score}
  */
  readonly hsSecurityTls11Score?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_tls12_score Analyticsprofile#hs_security_tls12_score}
  */
  readonly hsSecurityTls12Score?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_tls13_score Analyticsprofile#hs_security_tls13_score}
  */
  readonly hsSecurityTls13Score?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hs_security_weak_signature_algo_penalty Analyticsprofile#hs_security_weak_signature_algo_penalty}
  */
  readonly hsSecurityWeakSignatureAlgoPenalty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#id Analyticsprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#name Analyticsprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#ondemand_metrics_idle_timeout Analyticsprofile#ondemand_metrics_idle_timeout}
  */
  readonly ondemandMetricsIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#resp_code_block Analyticsprofile#resp_code_block}
  */
  readonly respCodeBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#sip_log_depth Analyticsprofile#sip_log_depth}
  */
  readonly sipLogDepth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#tenant_ref Analyticsprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#uuid Analyticsprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * client_log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#client_log_config Analyticsprofile#client_log_config}
  */
  readonly clientLogConfig?: AnalyticsprofileClientLogConfig[] | cdktf.IResolvable;
  /**
  * client_log_streaming_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#client_log_streaming_config Analyticsprofile#client_log_streaming_config}
  */
  readonly clientLogStreamingConfig?: AnalyticsprofileClientLogStreamingConfig[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#configpb_attributes Analyticsprofile#configpb_attributes}
  */
  readonly configpbAttributes?: AnalyticsprofileConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * latency_audit_props block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#latency_audit_props Analyticsprofile#latency_audit_props}
  */
  readonly latencyAuditProps?: AnalyticsprofileLatencyAuditProps[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#markers Analyticsprofile#markers}
  */
  readonly markers?: AnalyticsprofileMarkers[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#ranges Analyticsprofile#ranges}
  */
  readonly ranges?: AnalyticsprofileRanges[] | cdktf.IResolvable;
  /**
  * sensitive_log_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#sensitive_log_profile Analyticsprofile#sensitive_log_profile}
  */
  readonly sensitiveLogProfile?: AnalyticsprofileSensitiveLogProfile[] | cdktf.IResolvable;
  /**
  * time_tracker_props block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#time_tracker_props Analyticsprofile#time_tracker_props}
  */
  readonly timeTrackerProps?: AnalyticsprofileTimeTrackerProps[] | cdktf.IResolvable;
}
export interface AnalyticsprofileClientLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#enable_significant_log_collection Analyticsprofile#enable_significant_log_collection}
  */
  readonly enableSignificantLogCollection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#filtered_log_processing Analyticsprofile#filtered_log_processing}
  */
  readonly filteredLogProcessing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#non_significant_log_processing Analyticsprofile#non_significant_log_processing}
  */
  readonly nonSignificantLogProcessing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#significant_log_processing Analyticsprofile#significant_log_processing}
  */
  readonly significantLogProcessing?: string;
}

export function analyticsprofileClientLogConfigToTerraform(struct?: AnalyticsprofileClientLogConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_significant_log_collection: cdktf.stringToTerraform(struct!.enableSignificantLogCollection),
    filtered_log_processing: cdktf.stringToTerraform(struct!.filteredLogProcessing),
    non_significant_log_processing: cdktf.stringToTerraform(struct!.nonSignificantLogProcessing),
    significant_log_processing: cdktf.stringToTerraform(struct!.significantLogProcessing),
  }
}


export function analyticsprofileClientLogConfigToHclTerraform(struct?: AnalyticsprofileClientLogConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_significant_log_collection: {
      value: cdktf.stringToHclTerraform(struct!.enableSignificantLogCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filtered_log_processing: {
      value: cdktf.stringToHclTerraform(struct!.filteredLogProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_significant_log_processing: {
      value: cdktf.stringToHclTerraform(struct!.nonSignificantLogProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    significant_log_processing: {
      value: cdktf.stringToHclTerraform(struct!.significantLogProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileClientLogConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileClientLogConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSignificantLogCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSignificantLogCollection = this._enableSignificantLogCollection;
    }
    if (this._filteredLogProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.filteredLogProcessing = this._filteredLogProcessing;
    }
    if (this._nonSignificantLogProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonSignificantLogProcessing = this._nonSignificantLogProcessing;
    }
    if (this._significantLogProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.significantLogProcessing = this._significantLogProcessing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileClientLogConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableSignificantLogCollection = undefined;
      this._filteredLogProcessing = undefined;
      this._nonSignificantLogProcessing = undefined;
      this._significantLogProcessing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableSignificantLogCollection = value.enableSignificantLogCollection;
      this._filteredLogProcessing = value.filteredLogProcessing;
      this._nonSignificantLogProcessing = value.nonSignificantLogProcessing;
      this._significantLogProcessing = value.significantLogProcessing;
    }
  }

  // enable_significant_log_collection - computed: false, optional: true, required: false
  private _enableSignificantLogCollection?: string; 
  public get enableSignificantLogCollection() {
    return this.getStringAttribute('enable_significant_log_collection');
  }
  public set enableSignificantLogCollection(value: string) {
    this._enableSignificantLogCollection = value;
  }
  public resetEnableSignificantLogCollection() {
    this._enableSignificantLogCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSignificantLogCollectionInput() {
    return this._enableSignificantLogCollection;
  }

  // filtered_log_processing - computed: false, optional: true, required: false
  private _filteredLogProcessing?: string; 
  public get filteredLogProcessing() {
    return this.getStringAttribute('filtered_log_processing');
  }
  public set filteredLogProcessing(value: string) {
    this._filteredLogProcessing = value;
  }
  public resetFilteredLogProcessing() {
    this._filteredLogProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteredLogProcessingInput() {
    return this._filteredLogProcessing;
  }

  // non_significant_log_processing - computed: false, optional: true, required: false
  private _nonSignificantLogProcessing?: string; 
  public get nonSignificantLogProcessing() {
    return this.getStringAttribute('non_significant_log_processing');
  }
  public set nonSignificantLogProcessing(value: string) {
    this._nonSignificantLogProcessing = value;
  }
  public resetNonSignificantLogProcessing() {
    this._nonSignificantLogProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSignificantLogProcessingInput() {
    return this._nonSignificantLogProcessing;
  }

  // significant_log_processing - computed: false, optional: true, required: false
  private _significantLogProcessing?: string; 
  public get significantLogProcessing() {
    return this.getStringAttribute('significant_log_processing');
  }
  public set significantLogProcessing(value: string) {
    this._significantLogProcessing = value;
  }
  public resetSignificantLogProcessing() {
    this._significantLogProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get significantLogProcessingInput() {
    return this._significantLogProcessing;
  }
}

export class AnalyticsprofileClientLogConfigList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileClientLogConfig[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileClientLogConfigOutputReference {
    return new AnalyticsprofileClientLogConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileClientLogStreamingConfigFormatConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#format Analyticsprofile#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#included_fields Analyticsprofile#included_fields}
  */
  readonly includedFields?: string[];
}

export function analyticsprofileClientLogStreamingConfigFormatConfigToTerraform(struct?: AnalyticsprofileClientLogStreamingConfigFormatConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    included_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedFields),
  }
}


export function analyticsprofileClientLogStreamingConfigFormatConfigToHclTerraform(struct?: AnalyticsprofileClientLogStreamingConfigFormatConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    included_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileClientLogStreamingConfigFormatConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileClientLogStreamingConfigFormatConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._includedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedFields = this._includedFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileClientLogStreamingConfigFormatConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._includedFields = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._includedFields = value.includedFields;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // included_fields - computed: false, optional: true, required: false
  private _includedFields?: string[]; 
  public get includedFields() {
    return this.getListAttribute('included_fields');
  }
  public set includedFields(value: string[]) {
    this._includedFields = value;
  }
  public resetIncludedFields() {
    this._includedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedFieldsInput() {
    return this._includedFields;
  }
}

export class AnalyticsprofileClientLogStreamingConfigFormatConfigList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileClientLogStreamingConfigFormatConfig[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileClientLogStreamingConfigFormatConfigOutputReference {
    return new AnalyticsprofileClientLogStreamingConfigFormatConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileClientLogStreamingConfigMarkerKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#key Analyticsprofile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#values Analyticsprofile#values}
  */
  readonly values?: string[];
}

export function analyticsprofileClientLogStreamingConfigMarkerKeysToTerraform(struct?: AnalyticsprofileClientLogStreamingConfigMarkerKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function analyticsprofileClientLogStreamingConfigMarkerKeysToHclTerraform(struct?: AnalyticsprofileClientLogStreamingConfigMarkerKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileClientLogStreamingConfigMarkerKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileClientLogStreamingConfigMarkerKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileClientLogStreamingConfigMarkerKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AnalyticsprofileClientLogStreamingConfigMarkerKeysList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileClientLogStreamingConfigMarkerKeys[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileClientLogStreamingConfigMarkerKeysOutputReference {
    return new AnalyticsprofileClientLogStreamingConfigMarkerKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileClientLogStreamingConfigSyslogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#facility Analyticsprofile#facility}
  */
  readonly facility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#filtered_log_severity Analyticsprofile#filtered_log_severity}
  */
  readonly filteredLogSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#hostname Analyticsprofile#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#msg_id Analyticsprofile#msg_id}
  */
  readonly msgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#non_significant_log_severity Analyticsprofile#non_significant_log_severity}
  */
  readonly nonSignificantLogSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#proc_id Analyticsprofile#proc_id}
  */
  readonly procId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#significant_log_severity Analyticsprofile#significant_log_severity}
  */
  readonly significantLogSeverity?: string;
}

export function analyticsprofileClientLogStreamingConfigSyslogConfigToTerraform(struct?: AnalyticsprofileClientLogStreamingConfigSyslogConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facility: cdktf.stringToTerraform(struct!.facility),
    filtered_log_severity: cdktf.stringToTerraform(struct!.filteredLogSeverity),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    msg_id: cdktf.stringToTerraform(struct!.msgId),
    non_significant_log_severity: cdktf.stringToTerraform(struct!.nonSignificantLogSeverity),
    proc_id: cdktf.stringToTerraform(struct!.procId),
    significant_log_severity: cdktf.stringToTerraform(struct!.significantLogSeverity),
  }
}


export function analyticsprofileClientLogStreamingConfigSyslogConfigToHclTerraform(struct?: AnalyticsprofileClientLogStreamingConfigSyslogConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    facility: {
      value: cdktf.stringToHclTerraform(struct!.facility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filtered_log_severity: {
      value: cdktf.stringToHclTerraform(struct!.filteredLogSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msg_id: {
      value: cdktf.stringToHclTerraform(struct!.msgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_significant_log_severity: {
      value: cdktf.stringToHclTerraform(struct!.nonSignificantLogSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proc_id: {
      value: cdktf.stringToHclTerraform(struct!.procId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    significant_log_severity: {
      value: cdktf.stringToHclTerraform(struct!.significantLogSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileClientLogStreamingConfigSyslogConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileClientLogStreamingConfigSyslogConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facility !== undefined) {
      hasAnyValues = true;
      internalValueResult.facility = this._facility;
    }
    if (this._filteredLogSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.filteredLogSeverity = this._filteredLogSeverity;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._msgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgId = this._msgId;
    }
    if (this._nonSignificantLogSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonSignificantLogSeverity = this._nonSignificantLogSeverity;
    }
    if (this._procId !== undefined) {
      hasAnyValues = true;
      internalValueResult.procId = this._procId;
    }
    if (this._significantLogSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.significantLogSeverity = this._significantLogSeverity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileClientLogStreamingConfigSyslogConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facility = undefined;
      this._filteredLogSeverity = undefined;
      this._hostname = undefined;
      this._msgId = undefined;
      this._nonSignificantLogSeverity = undefined;
      this._procId = undefined;
      this._significantLogSeverity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facility = value.facility;
      this._filteredLogSeverity = value.filteredLogSeverity;
      this._hostname = value.hostname;
      this._msgId = value.msgId;
      this._nonSignificantLogSeverity = value.nonSignificantLogSeverity;
      this._procId = value.procId;
      this._significantLogSeverity = value.significantLogSeverity;
    }
  }

  // facility - computed: false, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // filtered_log_severity - computed: false, optional: true, required: false
  private _filteredLogSeverity?: string; 
  public get filteredLogSeverity() {
    return this.getStringAttribute('filtered_log_severity');
  }
  public set filteredLogSeverity(value: string) {
    this._filteredLogSeverity = value;
  }
  public resetFilteredLogSeverity() {
    this._filteredLogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteredLogSeverityInput() {
    return this._filteredLogSeverity;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // msg_id - computed: false, optional: true, required: false
  private _msgId?: string; 
  public get msgId() {
    return this.getStringAttribute('msg_id');
  }
  public set msgId(value: string) {
    this._msgId = value;
  }
  public resetMsgId() {
    this._msgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgIdInput() {
    return this._msgId;
  }

  // non_significant_log_severity - computed: false, optional: true, required: false
  private _nonSignificantLogSeverity?: string; 
  public get nonSignificantLogSeverity() {
    return this.getStringAttribute('non_significant_log_severity');
  }
  public set nonSignificantLogSeverity(value: string) {
    this._nonSignificantLogSeverity = value;
  }
  public resetNonSignificantLogSeverity() {
    this._nonSignificantLogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSignificantLogSeverityInput() {
    return this._nonSignificantLogSeverity;
  }

  // proc_id - computed: false, optional: true, required: false
  private _procId?: string; 
  public get procId() {
    return this.getStringAttribute('proc_id');
  }
  public set procId(value: string) {
    this._procId = value;
  }
  public resetProcId() {
    this._procId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procIdInput() {
    return this._procId;
  }

  // significant_log_severity - computed: false, optional: true, required: false
  private _significantLogSeverity?: string; 
  public get significantLogSeverity() {
    return this.getStringAttribute('significant_log_severity');
  }
  public set significantLogSeverity(value: string) {
    this._significantLogSeverity = value;
  }
  public resetSignificantLogSeverity() {
    this._significantLogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get significantLogSeverityInput() {
    return this._significantLogSeverity;
  }
}

export class AnalyticsprofileClientLogStreamingConfigSyslogConfigList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileClientLogStreamingConfigSyslogConfig[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileClientLogStreamingConfigSyslogConfigOutputReference {
    return new AnalyticsprofileClientLogStreamingConfigSyslogConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileClientLogStreamingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#external_server Analyticsprofile#external_server}
  */
  readonly externalServer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#external_server_port Analyticsprofile#external_server_port}
  */
  readonly externalServerPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#log_types_to_send Analyticsprofile#log_types_to_send}
  */
  readonly logTypesToSend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#max_logs_per_second Analyticsprofile#max_logs_per_second}
  */
  readonly maxLogsPerSecond?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#protocol Analyticsprofile#protocol}
  */
  readonly protocol?: string;
  /**
  * format_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#format_config Analyticsprofile#format_config}
  */
  readonly formatConfig?: AnalyticsprofileClientLogStreamingConfigFormatConfig[] | cdktf.IResolvable;
  /**
  * marker_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#marker_keys Analyticsprofile#marker_keys}
  */
  readonly markerKeys?: AnalyticsprofileClientLogStreamingConfigMarkerKeys[] | cdktf.IResolvable;
  /**
  * syslog_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#syslog_config Analyticsprofile#syslog_config}
  */
  readonly syslogConfig?: AnalyticsprofileClientLogStreamingConfigSyslogConfig[] | cdktf.IResolvable;
}

export function analyticsprofileClientLogStreamingConfigToTerraform(struct?: AnalyticsprofileClientLogStreamingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_server: cdktf.stringToTerraform(struct!.externalServer),
    external_server_port: cdktf.stringToTerraform(struct!.externalServerPort),
    log_types_to_send: cdktf.stringToTerraform(struct!.logTypesToSend),
    max_logs_per_second: cdktf.stringToTerraform(struct!.maxLogsPerSecond),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    format_config: cdktf.listMapper(analyticsprofileClientLogStreamingConfigFormatConfigToTerraform, true)(struct!.formatConfig),
    marker_keys: cdktf.listMapper(analyticsprofileClientLogStreamingConfigMarkerKeysToTerraform, true)(struct!.markerKeys),
    syslog_config: cdktf.listMapper(analyticsprofileClientLogStreamingConfigSyslogConfigToTerraform, true)(struct!.syslogConfig),
  }
}


export function analyticsprofileClientLogStreamingConfigToHclTerraform(struct?: AnalyticsprofileClientLogStreamingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_server: {
      value: cdktf.stringToHclTerraform(struct!.externalServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_server_port: {
      value: cdktf.stringToHclTerraform(struct!.externalServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_types_to_send: {
      value: cdktf.stringToHclTerraform(struct!.logTypesToSend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_logs_per_second: {
      value: cdktf.stringToHclTerraform(struct!.maxLogsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_config: {
      value: cdktf.listMapperHcl(analyticsprofileClientLogStreamingConfigFormatConfigToHclTerraform, true)(struct!.formatConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AnalyticsprofileClientLogStreamingConfigFormatConfigList",
    },
    marker_keys: {
      value: cdktf.listMapperHcl(analyticsprofileClientLogStreamingConfigMarkerKeysToHclTerraform, true)(struct!.markerKeys),
      isBlock: true,
      type: "list",
      storageClassType: "AnalyticsprofileClientLogStreamingConfigMarkerKeysList",
    },
    syslog_config: {
      value: cdktf.listMapperHcl(analyticsprofileClientLogStreamingConfigSyslogConfigToHclTerraform, true)(struct!.syslogConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AnalyticsprofileClientLogStreamingConfigSyslogConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileClientLogStreamingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileClientLogStreamingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalServer = this._externalServer;
    }
    if (this._externalServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalServerPort = this._externalServerPort;
    }
    if (this._logTypesToSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypesToSend = this._logTypesToSend;
    }
    if (this._maxLogsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLogsPerSecond = this._maxLogsPerSecond;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._formatConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatConfig = this._formatConfig?.internalValue;
    }
    if (this._markerKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.markerKeys = this._markerKeys?.internalValue;
    }
    if (this._syslogConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogConfig = this._syslogConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileClientLogStreamingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalServer = undefined;
      this._externalServerPort = undefined;
      this._logTypesToSend = undefined;
      this._maxLogsPerSecond = undefined;
      this._protocol = undefined;
      this._formatConfig.internalValue = undefined;
      this._markerKeys.internalValue = undefined;
      this._syslogConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalServer = value.externalServer;
      this._externalServerPort = value.externalServerPort;
      this._logTypesToSend = value.logTypesToSend;
      this._maxLogsPerSecond = value.maxLogsPerSecond;
      this._protocol = value.protocol;
      this._formatConfig.internalValue = value.formatConfig;
      this._markerKeys.internalValue = value.markerKeys;
      this._syslogConfig.internalValue = value.syslogConfig;
    }
  }

  // external_server - computed: false, optional: false, required: true
  private _externalServer?: string; 
  public get externalServer() {
    return this.getStringAttribute('external_server');
  }
  public set externalServer(value: string) {
    this._externalServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServerInput() {
    return this._externalServer;
  }

  // external_server_port - computed: false, optional: true, required: false
  private _externalServerPort?: string; 
  public get externalServerPort() {
    return this.getStringAttribute('external_server_port');
  }
  public set externalServerPort(value: string) {
    this._externalServerPort = value;
  }
  public resetExternalServerPort() {
    this._externalServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServerPortInput() {
    return this._externalServerPort;
  }

  // log_types_to_send - computed: false, optional: true, required: false
  private _logTypesToSend?: string; 
  public get logTypesToSend() {
    return this.getStringAttribute('log_types_to_send');
  }
  public set logTypesToSend(value: string) {
    this._logTypesToSend = value;
  }
  public resetLogTypesToSend() {
    this._logTypesToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesToSendInput() {
    return this._logTypesToSend;
  }

  // max_logs_per_second - computed: false, optional: true, required: false
  private _maxLogsPerSecond?: string; 
  public get maxLogsPerSecond() {
    return this.getStringAttribute('max_logs_per_second');
  }
  public set maxLogsPerSecond(value: string) {
    this._maxLogsPerSecond = value;
  }
  public resetMaxLogsPerSecond() {
    this._maxLogsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogsPerSecondInput() {
    return this._maxLogsPerSecond;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // format_config - computed: false, optional: true, required: false
  private _formatConfig = new AnalyticsprofileClientLogStreamingConfigFormatConfigList(this, "format_config", true);
  public get formatConfig() {
    return this._formatConfig;
  }
  public putFormatConfig(value: AnalyticsprofileClientLogStreamingConfigFormatConfig[] | cdktf.IResolvable) {
    this._formatConfig.internalValue = value;
  }
  public resetFormatConfig() {
    this._formatConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatConfigInput() {
    return this._formatConfig.internalValue;
  }

  // marker_keys - computed: false, optional: true, required: false
  private _markerKeys = new AnalyticsprofileClientLogStreamingConfigMarkerKeysList(this, "marker_keys", false);
  public get markerKeys() {
    return this._markerKeys;
  }
  public putMarkerKeys(value: AnalyticsprofileClientLogStreamingConfigMarkerKeys[] | cdktf.IResolvable) {
    this._markerKeys.internalValue = value;
  }
  public resetMarkerKeys() {
    this._markerKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerKeysInput() {
    return this._markerKeys.internalValue;
  }

  // syslog_config - computed: false, optional: true, required: false
  private _syslogConfig = new AnalyticsprofileClientLogStreamingConfigSyslogConfigList(this, "syslog_config", true);
  public get syslogConfig() {
    return this._syslogConfig;
  }
  public putSyslogConfig(value: AnalyticsprofileClientLogStreamingConfigSyslogConfig[] | cdktf.IResolvable) {
    this._syslogConfig.internalValue = value;
  }
  public resetSyslogConfig() {
    this._syslogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogConfigInput() {
    return this._syslogConfig.internalValue;
  }
}

export class AnalyticsprofileClientLogStreamingConfigList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileClientLogStreamingConfig[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileClientLogStreamingConfigOutputReference {
    return new AnalyticsprofileClientLogStreamingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#version Analyticsprofile#version}
  */
  readonly version?: string;
}

export function analyticsprofileConfigpbAttributesToTerraform(struct?: AnalyticsprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function analyticsprofileConfigpbAttributesToHclTerraform(struct?: AnalyticsprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
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

export class AnalyticsprofileConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileConfigpbAttributesOutputReference {
    return new AnalyticsprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileLatencyAuditProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#conn_est_audit_mode Analyticsprofile#conn_est_audit_mode}
  */
  readonly connEstAuditMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#conn_est_threshold Analyticsprofile#conn_est_threshold}
  */
  readonly connEstThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#latency_audit_mode Analyticsprofile#latency_audit_mode}
  */
  readonly latencyAuditMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#latency_threshold Analyticsprofile#latency_threshold}
  */
  readonly latencyThreshold?: string;
}

export function analyticsprofileLatencyAuditPropsToTerraform(struct?: AnalyticsprofileLatencyAuditProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_est_audit_mode: cdktf.stringToTerraform(struct!.connEstAuditMode),
    conn_est_threshold: cdktf.stringToTerraform(struct!.connEstThreshold),
    latency_audit_mode: cdktf.stringToTerraform(struct!.latencyAuditMode),
    latency_threshold: cdktf.stringToTerraform(struct!.latencyThreshold),
  }
}


export function analyticsprofileLatencyAuditPropsToHclTerraform(struct?: AnalyticsprofileLatencyAuditProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_est_audit_mode: {
      value: cdktf.stringToHclTerraform(struct!.connEstAuditMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conn_est_threshold: {
      value: cdktf.stringToHclTerraform(struct!.connEstThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latency_audit_mode: {
      value: cdktf.stringToHclTerraform(struct!.latencyAuditMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latency_threshold: {
      value: cdktf.stringToHclTerraform(struct!.latencyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileLatencyAuditPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileLatencyAuditProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connEstAuditMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.connEstAuditMode = this._connEstAuditMode;
    }
    if (this._connEstThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.connEstThreshold = this._connEstThreshold;
    }
    if (this._latencyAuditMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyAuditMode = this._latencyAuditMode;
    }
    if (this._latencyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyThreshold = this._latencyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileLatencyAuditProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connEstAuditMode = undefined;
      this._connEstThreshold = undefined;
      this._latencyAuditMode = undefined;
      this._latencyThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connEstAuditMode = value.connEstAuditMode;
      this._connEstThreshold = value.connEstThreshold;
      this._latencyAuditMode = value.latencyAuditMode;
      this._latencyThreshold = value.latencyThreshold;
    }
  }

  // conn_est_audit_mode - computed: true, optional: true, required: false
  private _connEstAuditMode?: string; 
  public get connEstAuditMode() {
    return this.getStringAttribute('conn_est_audit_mode');
  }
  public set connEstAuditMode(value: string) {
    this._connEstAuditMode = value;
  }
  public resetConnEstAuditMode() {
    this._connEstAuditMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connEstAuditModeInput() {
    return this._connEstAuditMode;
  }

  // conn_est_threshold - computed: true, optional: true, required: false
  private _connEstThreshold?: string; 
  public get connEstThreshold() {
    return this.getStringAttribute('conn_est_threshold');
  }
  public set connEstThreshold(value: string) {
    this._connEstThreshold = value;
  }
  public resetConnEstThreshold() {
    this._connEstThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connEstThresholdInput() {
    return this._connEstThreshold;
  }

  // latency_audit_mode - computed: true, optional: true, required: false
  private _latencyAuditMode?: string; 
  public get latencyAuditMode() {
    return this.getStringAttribute('latency_audit_mode');
  }
  public set latencyAuditMode(value: string) {
    this._latencyAuditMode = value;
  }
  public resetLatencyAuditMode() {
    this._latencyAuditMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyAuditModeInput() {
    return this._latencyAuditMode;
  }

  // latency_threshold - computed: true, optional: true, required: false
  private _latencyThreshold?: string; 
  public get latencyThreshold() {
    return this.getStringAttribute('latency_threshold');
  }
  public set latencyThreshold(value: string) {
    this._latencyThreshold = value;
  }
  public resetLatencyThreshold() {
    this._latencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdInput() {
    return this._latencyThreshold;
  }
}

export class AnalyticsprofileLatencyAuditPropsList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileLatencyAuditProps[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileLatencyAuditPropsOutputReference {
    return new AnalyticsprofileLatencyAuditPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#key Analyticsprofile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#values Analyticsprofile#values}
  */
  readonly values?: string[];
}

export function analyticsprofileMarkersToTerraform(struct?: AnalyticsprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function analyticsprofileMarkersToHclTerraform(struct?: AnalyticsprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AnalyticsprofileMarkersList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileMarkers[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileMarkersOutputReference {
    return new AnalyticsprofileMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#begin Analyticsprofile#begin}
  */
  readonly begin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#end Analyticsprofile#end}
  */
  readonly end: string;
}

export function analyticsprofileRangesToTerraform(struct?: AnalyticsprofileRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.stringToTerraform(struct!.begin),
    end: cdktf.stringToTerraform(struct!.end),
  }
}


export function analyticsprofileRangesToHclTerraform(struct?: AnalyticsprofileRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.stringToHclTerraform(struct!.begin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin = undefined;
      this._end = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin = value.begin;
      this._end = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin?: string; 
  public get begin() {
    return this.getStringAttribute('begin');
  }
  public set begin(value: string) {
    this._begin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin;
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }
}

export class AnalyticsprofileRangesList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileRanges[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileRangesOutputReference {
    return new AnalyticsprofileRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#match_criteria Analyticsprofile#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#match_str Analyticsprofile#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#string_group_refs Analyticsprofile#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function analyticsprofileSensitiveLogProfileHeaderFieldRulesMatchToTerraform(struct?: AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function analyticsprofileSensitiveLogProfileHeaderFieldRulesMatchToHclTerraform(struct?: AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchOutputReference {
    return new AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileSensitiveLogProfileHeaderFieldRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#action Analyticsprofile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#enabled Analyticsprofile#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#index Analyticsprofile#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#name Analyticsprofile#name}
  */
  readonly name?: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#match Analyticsprofile#match}
  */
  readonly match?: AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch[] | cdktf.IResolvable;
}

export function analyticsprofileSensitiveLogProfileHeaderFieldRulesToTerraform(struct?: AnalyticsprofileSensitiveLogProfileHeaderFieldRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    match: cdktf.listMapper(analyticsprofileSensitiveLogProfileHeaderFieldRulesMatchToTerraform, true)(struct!.match),
  }
}


export function analyticsprofileSensitiveLogProfileHeaderFieldRulesToHclTerraform(struct?: AnalyticsprofileSensitiveLogProfileHeaderFieldRules | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.listMapperHcl(analyticsprofileSensitiveLogProfileHeaderFieldRulesMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "set",
      storageClassType: "AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileSensitiveLogProfileHeaderFieldRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileSensitiveLogProfileHeaderFieldRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileSensitiveLogProfileHeaderFieldRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
      this._index = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._enabled = value.enabled;
      this._index = value.index;
      this._name = value.name;
      this._match.internalValue = value.match;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // name - computed: true, optional: true, required: false
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

  // match - computed: false, optional: true, required: false
  private _match = new AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatchList(this, "match", true);
  public get match() {
    return this._match;
  }
  public putMatch(value: AnalyticsprofileSensitiveLogProfileHeaderFieldRulesMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class AnalyticsprofileSensitiveLogProfileHeaderFieldRulesList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileSensitiveLogProfileHeaderFieldRules[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileSensitiveLogProfileHeaderFieldRulesOutputReference {
    return new AnalyticsprofileSensitiveLogProfileHeaderFieldRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#match_criteria Analyticsprofile#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#match_str Analyticsprofile#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#string_group_refs Analyticsprofile#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function analyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchToTerraform(struct?: AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function analyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchToHclTerraform(struct?: AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchOutputReference {
    return new AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileSensitiveLogProfileUriQueryFieldRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#action Analyticsprofile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#enabled Analyticsprofile#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#index Analyticsprofile#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#name Analyticsprofile#name}
  */
  readonly name?: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#match Analyticsprofile#match}
  */
  readonly match?: AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch[] | cdktf.IResolvable;
}

export function analyticsprofileSensitiveLogProfileUriQueryFieldRulesToTerraform(struct?: AnalyticsprofileSensitiveLogProfileUriQueryFieldRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    match: cdktf.listMapper(analyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchToTerraform, true)(struct!.match),
  }
}


export function analyticsprofileSensitiveLogProfileUriQueryFieldRulesToHclTerraform(struct?: AnalyticsprofileSensitiveLogProfileUriQueryFieldRules | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.listMapperHcl(analyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "set",
      storageClassType: "AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileSensitiveLogProfileUriQueryFieldRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileSensitiveLogProfileUriQueryFieldRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
      this._index = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._enabled = value.enabled;
      this._index = value.index;
      this._name = value.name;
      this._match.internalValue = value.match;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // name - computed: true, optional: true, required: false
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

  // match - computed: false, optional: true, required: false
  private _match = new AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatchList(this, "match", true);
  public get match() {
    return this._match;
  }
  public putMatch(value: AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileSensitiveLogProfileUriQueryFieldRules[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesOutputReference {
    return new AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileSensitiveLogProfileWafFieldRulesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#match_criteria Analyticsprofile#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#match_str Analyticsprofile#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#string_group_refs Analyticsprofile#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function analyticsprofileSensitiveLogProfileWafFieldRulesMatchToTerraform(struct?: AnalyticsprofileSensitiveLogProfileWafFieldRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function analyticsprofileSensitiveLogProfileWafFieldRulesMatchToHclTerraform(struct?: AnalyticsprofileSensitiveLogProfileWafFieldRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileSensitiveLogProfileWafFieldRulesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileSensitiveLogProfileWafFieldRulesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileSensitiveLogProfileWafFieldRulesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class AnalyticsprofileSensitiveLogProfileWafFieldRulesMatchList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileSensitiveLogProfileWafFieldRulesMatch[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileSensitiveLogProfileWafFieldRulesMatchOutputReference {
    return new AnalyticsprofileSensitiveLogProfileWafFieldRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileSensitiveLogProfileWafFieldRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#action Analyticsprofile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#enabled Analyticsprofile#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#index Analyticsprofile#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#name Analyticsprofile#name}
  */
  readonly name?: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#match Analyticsprofile#match}
  */
  readonly match?: AnalyticsprofileSensitiveLogProfileWafFieldRulesMatch[] | cdktf.IResolvable;
}

export function analyticsprofileSensitiveLogProfileWafFieldRulesToTerraform(struct?: AnalyticsprofileSensitiveLogProfileWafFieldRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    match: cdktf.listMapper(analyticsprofileSensitiveLogProfileWafFieldRulesMatchToTerraform, true)(struct!.match),
  }
}


export function analyticsprofileSensitiveLogProfileWafFieldRulesToHclTerraform(struct?: AnalyticsprofileSensitiveLogProfileWafFieldRules | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.listMapperHcl(analyticsprofileSensitiveLogProfileWafFieldRulesMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "set",
      storageClassType: "AnalyticsprofileSensitiveLogProfileWafFieldRulesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileSensitiveLogProfileWafFieldRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileSensitiveLogProfileWafFieldRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileSensitiveLogProfileWafFieldRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
      this._index = undefined;
      this._name = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._enabled = value.enabled;
      this._index = value.index;
      this._name = value.name;
      this._match.internalValue = value.match;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // name - computed: true, optional: true, required: false
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

  // match - computed: false, optional: true, required: false
  private _match = new AnalyticsprofileSensitiveLogProfileWafFieldRulesMatchList(this, "match", true);
  public get match() {
    return this._match;
  }
  public putMatch(value: AnalyticsprofileSensitiveLogProfileWafFieldRulesMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class AnalyticsprofileSensitiveLogProfileWafFieldRulesList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileSensitiveLogProfileWafFieldRules[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileSensitiveLogProfileWafFieldRulesOutputReference {
    return new AnalyticsprofileSensitiveLogProfileWafFieldRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileSensitiveLogProfile {
  /**
  * header_field_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#header_field_rules Analyticsprofile#header_field_rules}
  */
  readonly headerFieldRules?: AnalyticsprofileSensitiveLogProfileHeaderFieldRules[] | cdktf.IResolvable;
  /**
  * uri_query_field_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#uri_query_field_rules Analyticsprofile#uri_query_field_rules}
  */
  readonly uriQueryFieldRules?: AnalyticsprofileSensitiveLogProfileUriQueryFieldRules[] | cdktf.IResolvable;
  /**
  * waf_field_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#waf_field_rules Analyticsprofile#waf_field_rules}
  */
  readonly wafFieldRules?: AnalyticsprofileSensitiveLogProfileWafFieldRules[] | cdktf.IResolvable;
}

export function analyticsprofileSensitiveLogProfileToTerraform(struct?: AnalyticsprofileSensitiveLogProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_field_rules: cdktf.listMapper(analyticsprofileSensitiveLogProfileHeaderFieldRulesToTerraform, true)(struct!.headerFieldRules),
    uri_query_field_rules: cdktf.listMapper(analyticsprofileSensitiveLogProfileUriQueryFieldRulesToTerraform, true)(struct!.uriQueryFieldRules),
    waf_field_rules: cdktf.listMapper(analyticsprofileSensitiveLogProfileWafFieldRulesToTerraform, true)(struct!.wafFieldRules),
  }
}


export function analyticsprofileSensitiveLogProfileToHclTerraform(struct?: AnalyticsprofileSensitiveLogProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_field_rules: {
      value: cdktf.listMapperHcl(analyticsprofileSensitiveLogProfileHeaderFieldRulesToHclTerraform, true)(struct!.headerFieldRules),
      isBlock: true,
      type: "list",
      storageClassType: "AnalyticsprofileSensitiveLogProfileHeaderFieldRulesList",
    },
    uri_query_field_rules: {
      value: cdktf.listMapperHcl(analyticsprofileSensitiveLogProfileUriQueryFieldRulesToHclTerraform, true)(struct!.uriQueryFieldRules),
      isBlock: true,
      type: "list",
      storageClassType: "AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesList",
    },
    waf_field_rules: {
      value: cdktf.listMapperHcl(analyticsprofileSensitiveLogProfileWafFieldRulesToHclTerraform, true)(struct!.wafFieldRules),
      isBlock: true,
      type: "list",
      storageClassType: "AnalyticsprofileSensitiveLogProfileWafFieldRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileSensitiveLogProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileSensitiveLogProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerFieldRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFieldRules = this._headerFieldRules?.internalValue;
    }
    if (this._uriQueryFieldRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriQueryFieldRules = this._uriQueryFieldRules?.internalValue;
    }
    if (this._wafFieldRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafFieldRules = this._wafFieldRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileSensitiveLogProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerFieldRules.internalValue = undefined;
      this._uriQueryFieldRules.internalValue = undefined;
      this._wafFieldRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerFieldRules.internalValue = value.headerFieldRules;
      this._uriQueryFieldRules.internalValue = value.uriQueryFieldRules;
      this._wafFieldRules.internalValue = value.wafFieldRules;
    }
  }

  // header_field_rules - computed: false, optional: true, required: false
  private _headerFieldRules = new AnalyticsprofileSensitiveLogProfileHeaderFieldRulesList(this, "header_field_rules", false);
  public get headerFieldRules() {
    return this._headerFieldRules;
  }
  public putHeaderFieldRules(value: AnalyticsprofileSensitiveLogProfileHeaderFieldRules[] | cdktf.IResolvable) {
    this._headerFieldRules.internalValue = value;
  }
  public resetHeaderFieldRules() {
    this._headerFieldRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFieldRulesInput() {
    return this._headerFieldRules.internalValue;
  }

  // uri_query_field_rules - computed: false, optional: true, required: false
  private _uriQueryFieldRules = new AnalyticsprofileSensitiveLogProfileUriQueryFieldRulesList(this, "uri_query_field_rules", false);
  public get uriQueryFieldRules() {
    return this._uriQueryFieldRules;
  }
  public putUriQueryFieldRules(value: AnalyticsprofileSensitiveLogProfileUriQueryFieldRules[] | cdktf.IResolvable) {
    this._uriQueryFieldRules.internalValue = value;
  }
  public resetUriQueryFieldRules() {
    this._uriQueryFieldRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriQueryFieldRulesInput() {
    return this._uriQueryFieldRules.internalValue;
  }

  // waf_field_rules - computed: false, optional: true, required: false
  private _wafFieldRules = new AnalyticsprofileSensitiveLogProfileWafFieldRulesList(this, "waf_field_rules", false);
  public get wafFieldRules() {
    return this._wafFieldRules;
  }
  public putWafFieldRules(value: AnalyticsprofileSensitiveLogProfileWafFieldRules[] | cdktf.IResolvable) {
    this._wafFieldRules.internalValue = value;
  }
  public resetWafFieldRules() {
    this._wafFieldRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafFieldRulesInput() {
    return this._wafFieldRules.internalValue;
  }
}

export class AnalyticsprofileSensitiveLogProfileList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileSensitiveLogProfile[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileSensitiveLogProfileOutputReference {
    return new AnalyticsprofileSensitiveLogProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnalyticsprofileTimeTrackerProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#be_conn_est_audit_mode Analyticsprofile#be_conn_est_audit_mode}
  */
  readonly beConnEstAuditMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#be_conn_est_threshold Analyticsprofile#be_conn_est_threshold}
  */
  readonly beConnEstThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#fe_conn_est_audit_mode Analyticsprofile#fe_conn_est_audit_mode}
  */
  readonly feConnEstAuditMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#fe_conn_est_threshold Analyticsprofile#fe_conn_est_threshold}
  */
  readonly feConnEstThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#ingress_sig_log Analyticsprofile#ingress_sig_log}
  */
  readonly ingressSigLog?: string;
}

export function analyticsprofileTimeTrackerPropsToTerraform(struct?: AnalyticsprofileTimeTrackerProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    be_conn_est_audit_mode: cdktf.stringToTerraform(struct!.beConnEstAuditMode),
    be_conn_est_threshold: cdktf.stringToTerraform(struct!.beConnEstThreshold),
    fe_conn_est_audit_mode: cdktf.stringToTerraform(struct!.feConnEstAuditMode),
    fe_conn_est_threshold: cdktf.stringToTerraform(struct!.feConnEstThreshold),
    ingress_sig_log: cdktf.stringToTerraform(struct!.ingressSigLog),
  }
}


export function analyticsprofileTimeTrackerPropsToHclTerraform(struct?: AnalyticsprofileTimeTrackerProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    be_conn_est_audit_mode: {
      value: cdktf.stringToHclTerraform(struct!.beConnEstAuditMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    be_conn_est_threshold: {
      value: cdktf.stringToHclTerraform(struct!.beConnEstThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fe_conn_est_audit_mode: {
      value: cdktf.stringToHclTerraform(struct!.feConnEstAuditMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fe_conn_est_threshold: {
      value: cdktf.stringToHclTerraform(struct!.feConnEstThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_sig_log: {
      value: cdktf.stringToHclTerraform(struct!.ingressSigLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnalyticsprofileTimeTrackerPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnalyticsprofileTimeTrackerProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beConnEstAuditMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.beConnEstAuditMode = this._beConnEstAuditMode;
    }
    if (this._beConnEstThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.beConnEstThreshold = this._beConnEstThreshold;
    }
    if (this._feConnEstAuditMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.feConnEstAuditMode = this._feConnEstAuditMode;
    }
    if (this._feConnEstThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.feConnEstThreshold = this._feConnEstThreshold;
    }
    if (this._ingressSigLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressSigLog = this._ingressSigLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnalyticsprofileTimeTrackerProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beConnEstAuditMode = undefined;
      this._beConnEstThreshold = undefined;
      this._feConnEstAuditMode = undefined;
      this._feConnEstThreshold = undefined;
      this._ingressSigLog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beConnEstAuditMode = value.beConnEstAuditMode;
      this._beConnEstThreshold = value.beConnEstThreshold;
      this._feConnEstAuditMode = value.feConnEstAuditMode;
      this._feConnEstThreshold = value.feConnEstThreshold;
      this._ingressSigLog = value.ingressSigLog;
    }
  }

  // be_conn_est_audit_mode - computed: true, optional: true, required: false
  private _beConnEstAuditMode?: string; 
  public get beConnEstAuditMode() {
    return this.getStringAttribute('be_conn_est_audit_mode');
  }
  public set beConnEstAuditMode(value: string) {
    this._beConnEstAuditMode = value;
  }
  public resetBeConnEstAuditMode() {
    this._beConnEstAuditMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beConnEstAuditModeInput() {
    return this._beConnEstAuditMode;
  }

  // be_conn_est_threshold - computed: true, optional: true, required: false
  private _beConnEstThreshold?: string; 
  public get beConnEstThreshold() {
    return this.getStringAttribute('be_conn_est_threshold');
  }
  public set beConnEstThreshold(value: string) {
    this._beConnEstThreshold = value;
  }
  public resetBeConnEstThreshold() {
    this._beConnEstThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beConnEstThresholdInput() {
    return this._beConnEstThreshold;
  }

  // fe_conn_est_audit_mode - computed: true, optional: true, required: false
  private _feConnEstAuditMode?: string; 
  public get feConnEstAuditMode() {
    return this.getStringAttribute('fe_conn_est_audit_mode');
  }
  public set feConnEstAuditMode(value: string) {
    this._feConnEstAuditMode = value;
  }
  public resetFeConnEstAuditMode() {
    this._feConnEstAuditMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feConnEstAuditModeInput() {
    return this._feConnEstAuditMode;
  }

  // fe_conn_est_threshold - computed: true, optional: true, required: false
  private _feConnEstThreshold?: string; 
  public get feConnEstThreshold() {
    return this.getStringAttribute('fe_conn_est_threshold');
  }
  public set feConnEstThreshold(value: string) {
    this._feConnEstThreshold = value;
  }
  public resetFeConnEstThreshold() {
    this._feConnEstThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feConnEstThresholdInput() {
    return this._feConnEstThreshold;
  }

  // ingress_sig_log - computed: true, optional: true, required: false
  private _ingressSigLog?: string; 
  public get ingressSigLog() {
    return this.getStringAttribute('ingress_sig_log');
  }
  public set ingressSigLog(value: string) {
    this._ingressSigLog = value;
  }
  public resetIngressSigLog() {
    this._ingressSigLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSigLogInput() {
    return this._ingressSigLog;
  }
}

export class AnalyticsprofileTimeTrackerPropsList extends cdktf.ComplexList {
  public internalValue? : AnalyticsprofileTimeTrackerProps[] | cdktf.IResolvable

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
  public get(index: number): AnalyticsprofileTimeTrackerPropsOutputReference {
    return new AnalyticsprofileTimeTrackerPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile avi_analyticsprofile}
*/
export class Analyticsprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_analyticsprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Analyticsprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Analyticsprofile to import
  * @param importFromId The id of the existing Analyticsprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Analyticsprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_analyticsprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/analyticsprofile avi_analyticsprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnalyticsprofileConfig
  */
  public constructor(scope: Construct, id: string, config: AnalyticsprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_analyticsprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apdexResponseThreshold = config.apdexResponseThreshold;
    this._apdexResponseToleratedFactor = config.apdexResponseToleratedFactor;
    this._apdexRttThreshold = config.apdexRttThreshold;
    this._apdexRttToleratedFactor = config.apdexRttToleratedFactor;
    this._apdexRumThreshold = config.apdexRumThreshold;
    this._apdexRumToleratedFactor = config.apdexRumToleratedFactor;
    this._apdexServerResponseThreshold = config.apdexServerResponseThreshold;
    this._apdexServerResponseToleratedFactor = config.apdexServerResponseToleratedFactor;
    this._apdexServerRttThreshold = config.apdexServerRttThreshold;
    this._apdexServerRttToleratedFactor = config.apdexServerRttToleratedFactor;
    this._connLossyOooThreshold = config.connLossyOooThreshold;
    this._connLossyTimeoRexmtThreshold = config.connLossyTimeoRexmtThreshold;
    this._connLossyTotalRexmtThreshold = config.connLossyTotalRexmtThreshold;
    this._connLossyZeroWinSizeEventThreshold = config.connLossyZeroWinSizeEventThreshold;
    this._connServerLossyOooThreshold = config.connServerLossyOooThreshold;
    this._connServerLossyTimeoRexmtThreshold = config.connServerLossyTimeoRexmtThreshold;
    this._connServerLossyTotalRexmtThreshold = config.connServerLossyTotalRexmtThreshold;
    this._connServerLossyZeroWinSizeEventThreshold = config.connServerLossyZeroWinSizeEventThreshold;
    this._description = config.description;
    this._enableAdaptiveConfig = config.enableAdaptiveConfig;
    this._enableAdvancedAnalytics = config.enableAdvancedAnalytics;
    this._enableOndemandMetrics = config.enableOndemandMetrics;
    this._enableSeAnalytics = config.enableSeAnalytics;
    this._enableServerAnalytics = config.enableServerAnalytics;
    this._enableVsAnalytics = config.enableVsAnalytics;
    this._excludeClientCloseBeforeRequestAsError = config.excludeClientCloseBeforeRequestAsError;
    this._excludeConnDropClientSmallWindowAsError = config.excludeConnDropClientSmallWindowAsError;
    this._excludeDnsPolicyDropAsSignificant = config.excludeDnsPolicyDropAsSignificant;
    this._excludeGsDownAsError = config.excludeGsDownAsError;
    this._excludeHttpErrorCodes = config.excludeHttpErrorCodes;
    this._excludeInvalidDnsDomainAsError = config.excludeInvalidDnsDomainAsError;
    this._excludeInvalidDnsQueryAsError = config.excludeInvalidDnsQueryAsError;
    this._excludeIssuerRevokedOcspResponsesAsError = config.excludeIssuerRevokedOcspResponsesAsError;
    this._excludeNoDnsRecordAsError = config.excludeNoDnsRecordAsError;
    this._excludeNoValidGsMemberAsError = config.excludeNoValidGsMemberAsError;
    this._excludePersistenceChangeAsError = config.excludePersistenceChangeAsError;
    this._excludeRevokedOcspResponsesAsError = config.excludeRevokedOcspResponsesAsError;
    this._excludeServerDnsErrorAsError = config.excludeServerDnsErrorAsError;
    this._excludeServerTcpResetAsError = config.excludeServerTcpResetAsError;
    this._excludeSipErrorCodes = config.excludeSipErrorCodes;
    this._excludeStaleOcspResponsesAsError = config.excludeStaleOcspResponsesAsError;
    this._excludeSynRetransmitAsError = config.excludeSynRetransmitAsError;
    this._excludeTcpResetAsError = config.excludeTcpResetAsError;
    this._excludeUnavailableOcspResponsesAsError = config.excludeUnavailableOcspResponsesAsError;
    this._excludeUnsupportedDnsQueryAsError = config.excludeUnsupportedDnsQueryAsError;
    this._healthscoreMaxServerLimit = config.healthscoreMaxServerLimit;
    this._hsEventThrottleWindow = config.hsEventThrottleWindow;
    this._hsMaxAnomalyPenalty = config.hsMaxAnomalyPenalty;
    this._hsMaxResourcesPenalty = config.hsMaxResourcesPenalty;
    this._hsMaxSecurityPenalty = config.hsMaxSecurityPenalty;
    this._hsMinDosRate = config.hsMinDosRate;
    this._hsPerformanceBoost = config.hsPerformanceBoost;
    this._hsPscoreTrafficThresholdL4Client = config.hsPscoreTrafficThresholdL4Client;
    this._hsPscoreTrafficThresholdL4Server = config.hsPscoreTrafficThresholdL4Server;
    this._hsSecurityCertscoreExpired = config.hsSecurityCertscoreExpired;
    this._hsSecurityCertscoreGt30D = config.hsSecurityCertscoreGt30D;
    this._hsSecurityCertscoreLe07D = config.hsSecurityCertscoreLe07D;
    this._hsSecurityCertscoreLe30D = config.hsSecurityCertscoreLe30D;
    this._hsSecurityChainInvalidityPenalty = config.hsSecurityChainInvalidityPenalty;
    this._hsSecurityCipherscoreEq000B = config.hsSecurityCipherscoreEq000B;
    this._hsSecurityCipherscoreGe128B = config.hsSecurityCipherscoreGe128B;
    this._hsSecurityCipherscoreLt128B = config.hsSecurityCipherscoreLt128B;
    this._hsSecurityEncalgoScoreNone = config.hsSecurityEncalgoScoreNone;
    this._hsSecurityEncalgoScoreRc4 = config.hsSecurityEncalgoScoreRc4;
    this._hsSecurityHstsPenalty = config.hsSecurityHstsPenalty;
    this._hsSecurityNonpfsPenalty = config.hsSecurityNonpfsPenalty;
    this._hsSecurityOcspRevokedScore = config.hsSecurityOcspRevokedScore;
    this._hsSecuritySelfsignedcertPenalty = config.hsSecuritySelfsignedcertPenalty;
    this._hsSecuritySsl30Score = config.hsSecuritySsl30Score;
    this._hsSecurityTls10Score = config.hsSecurityTls10Score;
    this._hsSecurityTls11Score = config.hsSecurityTls11Score;
    this._hsSecurityTls12Score = config.hsSecurityTls12Score;
    this._hsSecurityTls13Score = config.hsSecurityTls13Score;
    this._hsSecurityWeakSignatureAlgoPenalty = config.hsSecurityWeakSignatureAlgoPenalty;
    this._id = config.id;
    this._name = config.name;
    this._ondemandMetricsIdleTimeout = config.ondemandMetricsIdleTimeout;
    this._respCodeBlock = config.respCodeBlock;
    this._sipLogDepth = config.sipLogDepth;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._clientLogConfig.internalValue = config.clientLogConfig;
    this._clientLogStreamingConfig.internalValue = config.clientLogStreamingConfig;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._latencyAuditProps.internalValue = config.latencyAuditProps;
    this._markers.internalValue = config.markers;
    this._ranges.internalValue = config.ranges;
    this._sensitiveLogProfile.internalValue = config.sensitiveLogProfile;
    this._timeTrackerProps.internalValue = config.timeTrackerProps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apdex_response_threshold - computed: false, optional: true, required: false
  private _apdexResponseThreshold?: string; 
  public get apdexResponseThreshold() {
    return this.getStringAttribute('apdex_response_threshold');
  }
  public set apdexResponseThreshold(value: string) {
    this._apdexResponseThreshold = value;
  }
  public resetApdexResponseThreshold() {
    this._apdexResponseThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexResponseThresholdInput() {
    return this._apdexResponseThreshold;
  }

  // apdex_response_tolerated_factor - computed: false, optional: true, required: false
  private _apdexResponseToleratedFactor?: string; 
  public get apdexResponseToleratedFactor() {
    return this.getStringAttribute('apdex_response_tolerated_factor');
  }
  public set apdexResponseToleratedFactor(value: string) {
    this._apdexResponseToleratedFactor = value;
  }
  public resetApdexResponseToleratedFactor() {
    this._apdexResponseToleratedFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexResponseToleratedFactorInput() {
    return this._apdexResponseToleratedFactor;
  }

  // apdex_rtt_threshold - computed: false, optional: true, required: false
  private _apdexRttThreshold?: string; 
  public get apdexRttThreshold() {
    return this.getStringAttribute('apdex_rtt_threshold');
  }
  public set apdexRttThreshold(value: string) {
    this._apdexRttThreshold = value;
  }
  public resetApdexRttThreshold() {
    this._apdexRttThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexRttThresholdInput() {
    return this._apdexRttThreshold;
  }

  // apdex_rtt_tolerated_factor - computed: false, optional: true, required: false
  private _apdexRttToleratedFactor?: string; 
  public get apdexRttToleratedFactor() {
    return this.getStringAttribute('apdex_rtt_tolerated_factor');
  }
  public set apdexRttToleratedFactor(value: string) {
    this._apdexRttToleratedFactor = value;
  }
  public resetApdexRttToleratedFactor() {
    this._apdexRttToleratedFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexRttToleratedFactorInput() {
    return this._apdexRttToleratedFactor;
  }

  // apdex_rum_threshold - computed: false, optional: true, required: false
  private _apdexRumThreshold?: string; 
  public get apdexRumThreshold() {
    return this.getStringAttribute('apdex_rum_threshold');
  }
  public set apdexRumThreshold(value: string) {
    this._apdexRumThreshold = value;
  }
  public resetApdexRumThreshold() {
    this._apdexRumThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexRumThresholdInput() {
    return this._apdexRumThreshold;
  }

  // apdex_rum_tolerated_factor - computed: false, optional: true, required: false
  private _apdexRumToleratedFactor?: string; 
  public get apdexRumToleratedFactor() {
    return this.getStringAttribute('apdex_rum_tolerated_factor');
  }
  public set apdexRumToleratedFactor(value: string) {
    this._apdexRumToleratedFactor = value;
  }
  public resetApdexRumToleratedFactor() {
    this._apdexRumToleratedFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexRumToleratedFactorInput() {
    return this._apdexRumToleratedFactor;
  }

  // apdex_server_response_threshold - computed: false, optional: true, required: false
  private _apdexServerResponseThreshold?: string; 
  public get apdexServerResponseThreshold() {
    return this.getStringAttribute('apdex_server_response_threshold');
  }
  public set apdexServerResponseThreshold(value: string) {
    this._apdexServerResponseThreshold = value;
  }
  public resetApdexServerResponseThreshold() {
    this._apdexServerResponseThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexServerResponseThresholdInput() {
    return this._apdexServerResponseThreshold;
  }

  // apdex_server_response_tolerated_factor - computed: false, optional: true, required: false
  private _apdexServerResponseToleratedFactor?: string; 
  public get apdexServerResponseToleratedFactor() {
    return this.getStringAttribute('apdex_server_response_tolerated_factor');
  }
  public set apdexServerResponseToleratedFactor(value: string) {
    this._apdexServerResponseToleratedFactor = value;
  }
  public resetApdexServerResponseToleratedFactor() {
    this._apdexServerResponseToleratedFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexServerResponseToleratedFactorInput() {
    return this._apdexServerResponseToleratedFactor;
  }

  // apdex_server_rtt_threshold - computed: false, optional: true, required: false
  private _apdexServerRttThreshold?: string; 
  public get apdexServerRttThreshold() {
    return this.getStringAttribute('apdex_server_rtt_threshold');
  }
  public set apdexServerRttThreshold(value: string) {
    this._apdexServerRttThreshold = value;
  }
  public resetApdexServerRttThreshold() {
    this._apdexServerRttThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexServerRttThresholdInput() {
    return this._apdexServerRttThreshold;
  }

  // apdex_server_rtt_tolerated_factor - computed: false, optional: true, required: false
  private _apdexServerRttToleratedFactor?: string; 
  public get apdexServerRttToleratedFactor() {
    return this.getStringAttribute('apdex_server_rtt_tolerated_factor');
  }
  public set apdexServerRttToleratedFactor(value: string) {
    this._apdexServerRttToleratedFactor = value;
  }
  public resetApdexServerRttToleratedFactor() {
    this._apdexServerRttToleratedFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexServerRttToleratedFactorInput() {
    return this._apdexServerRttToleratedFactor;
  }

  // conn_lossy_ooo_threshold - computed: false, optional: true, required: false
  private _connLossyOooThreshold?: string; 
  public get connLossyOooThreshold() {
    return this.getStringAttribute('conn_lossy_ooo_threshold');
  }
  public set connLossyOooThreshold(value: string) {
    this._connLossyOooThreshold = value;
  }
  public resetConnLossyOooThreshold() {
    this._connLossyOooThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLossyOooThresholdInput() {
    return this._connLossyOooThreshold;
  }

  // conn_lossy_timeo_rexmt_threshold - computed: false, optional: true, required: false
  private _connLossyTimeoRexmtThreshold?: string; 
  public get connLossyTimeoRexmtThreshold() {
    return this.getStringAttribute('conn_lossy_timeo_rexmt_threshold');
  }
  public set connLossyTimeoRexmtThreshold(value: string) {
    this._connLossyTimeoRexmtThreshold = value;
  }
  public resetConnLossyTimeoRexmtThreshold() {
    this._connLossyTimeoRexmtThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLossyTimeoRexmtThresholdInput() {
    return this._connLossyTimeoRexmtThreshold;
  }

  // conn_lossy_total_rexmt_threshold - computed: false, optional: true, required: false
  private _connLossyTotalRexmtThreshold?: string; 
  public get connLossyTotalRexmtThreshold() {
    return this.getStringAttribute('conn_lossy_total_rexmt_threshold');
  }
  public set connLossyTotalRexmtThreshold(value: string) {
    this._connLossyTotalRexmtThreshold = value;
  }
  public resetConnLossyTotalRexmtThreshold() {
    this._connLossyTotalRexmtThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLossyTotalRexmtThresholdInput() {
    return this._connLossyTotalRexmtThreshold;
  }

  // conn_lossy_zero_win_size_event_threshold - computed: false, optional: true, required: false
  private _connLossyZeroWinSizeEventThreshold?: string; 
  public get connLossyZeroWinSizeEventThreshold() {
    return this.getStringAttribute('conn_lossy_zero_win_size_event_threshold');
  }
  public set connLossyZeroWinSizeEventThreshold(value: string) {
    this._connLossyZeroWinSizeEventThreshold = value;
  }
  public resetConnLossyZeroWinSizeEventThreshold() {
    this._connLossyZeroWinSizeEventThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLossyZeroWinSizeEventThresholdInput() {
    return this._connLossyZeroWinSizeEventThreshold;
  }

  // conn_server_lossy_ooo_threshold - computed: false, optional: true, required: false
  private _connServerLossyOooThreshold?: string; 
  public get connServerLossyOooThreshold() {
    return this.getStringAttribute('conn_server_lossy_ooo_threshold');
  }
  public set connServerLossyOooThreshold(value: string) {
    this._connServerLossyOooThreshold = value;
  }
  public resetConnServerLossyOooThreshold() {
    this._connServerLossyOooThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connServerLossyOooThresholdInput() {
    return this._connServerLossyOooThreshold;
  }

  // conn_server_lossy_timeo_rexmt_threshold - computed: false, optional: true, required: false
  private _connServerLossyTimeoRexmtThreshold?: string; 
  public get connServerLossyTimeoRexmtThreshold() {
    return this.getStringAttribute('conn_server_lossy_timeo_rexmt_threshold');
  }
  public set connServerLossyTimeoRexmtThreshold(value: string) {
    this._connServerLossyTimeoRexmtThreshold = value;
  }
  public resetConnServerLossyTimeoRexmtThreshold() {
    this._connServerLossyTimeoRexmtThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connServerLossyTimeoRexmtThresholdInput() {
    return this._connServerLossyTimeoRexmtThreshold;
  }

  // conn_server_lossy_total_rexmt_threshold - computed: false, optional: true, required: false
  private _connServerLossyTotalRexmtThreshold?: string; 
  public get connServerLossyTotalRexmtThreshold() {
    return this.getStringAttribute('conn_server_lossy_total_rexmt_threshold');
  }
  public set connServerLossyTotalRexmtThreshold(value: string) {
    this._connServerLossyTotalRexmtThreshold = value;
  }
  public resetConnServerLossyTotalRexmtThreshold() {
    this._connServerLossyTotalRexmtThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connServerLossyTotalRexmtThresholdInput() {
    return this._connServerLossyTotalRexmtThreshold;
  }

  // conn_server_lossy_zero_win_size_event_threshold - computed: false, optional: true, required: false
  private _connServerLossyZeroWinSizeEventThreshold?: string; 
  public get connServerLossyZeroWinSizeEventThreshold() {
    return this.getStringAttribute('conn_server_lossy_zero_win_size_event_threshold');
  }
  public set connServerLossyZeroWinSizeEventThreshold(value: string) {
    this._connServerLossyZeroWinSizeEventThreshold = value;
  }
  public resetConnServerLossyZeroWinSizeEventThreshold() {
    this._connServerLossyZeroWinSizeEventThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connServerLossyZeroWinSizeEventThresholdInput() {
    return this._connServerLossyZeroWinSizeEventThreshold;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_adaptive_config - computed: false, optional: true, required: false
  private _enableAdaptiveConfig?: string; 
  public get enableAdaptiveConfig() {
    return this.getStringAttribute('enable_adaptive_config');
  }
  public set enableAdaptiveConfig(value: string) {
    this._enableAdaptiveConfig = value;
  }
  public resetEnableAdaptiveConfig() {
    this._enableAdaptiveConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdaptiveConfigInput() {
    return this._enableAdaptiveConfig;
  }

  // enable_advanced_analytics - computed: false, optional: true, required: false
  private _enableAdvancedAnalytics?: string; 
  public get enableAdvancedAnalytics() {
    return this.getStringAttribute('enable_advanced_analytics');
  }
  public set enableAdvancedAnalytics(value: string) {
    this._enableAdvancedAnalytics = value;
  }
  public resetEnableAdvancedAnalytics() {
    this._enableAdvancedAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdvancedAnalyticsInput() {
    return this._enableAdvancedAnalytics;
  }

  // enable_ondemand_metrics - computed: false, optional: true, required: false
  private _enableOndemandMetrics?: string; 
  public get enableOndemandMetrics() {
    return this.getStringAttribute('enable_ondemand_metrics');
  }
  public set enableOndemandMetrics(value: string) {
    this._enableOndemandMetrics = value;
  }
  public resetEnableOndemandMetrics() {
    this._enableOndemandMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOndemandMetricsInput() {
    return this._enableOndemandMetrics;
  }

  // enable_se_analytics - computed: false, optional: true, required: false
  private _enableSeAnalytics?: string; 
  public get enableSeAnalytics() {
    return this.getStringAttribute('enable_se_analytics');
  }
  public set enableSeAnalytics(value: string) {
    this._enableSeAnalytics = value;
  }
  public resetEnableSeAnalytics() {
    this._enableSeAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSeAnalyticsInput() {
    return this._enableSeAnalytics;
  }

  // enable_server_analytics - computed: false, optional: true, required: false
  private _enableServerAnalytics?: string; 
  public get enableServerAnalytics() {
    return this.getStringAttribute('enable_server_analytics');
  }
  public set enableServerAnalytics(value: string) {
    this._enableServerAnalytics = value;
  }
  public resetEnableServerAnalytics() {
    this._enableServerAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServerAnalyticsInput() {
    return this._enableServerAnalytics;
  }

  // enable_vs_analytics - computed: false, optional: true, required: false
  private _enableVsAnalytics?: string; 
  public get enableVsAnalytics() {
    return this.getStringAttribute('enable_vs_analytics');
  }
  public set enableVsAnalytics(value: string) {
    this._enableVsAnalytics = value;
  }
  public resetEnableVsAnalytics() {
    this._enableVsAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVsAnalyticsInput() {
    return this._enableVsAnalytics;
  }

  // exclude_client_close_before_request_as_error - computed: false, optional: true, required: false
  private _excludeClientCloseBeforeRequestAsError?: string; 
  public get excludeClientCloseBeforeRequestAsError() {
    return this.getStringAttribute('exclude_client_close_before_request_as_error');
  }
  public set excludeClientCloseBeforeRequestAsError(value: string) {
    this._excludeClientCloseBeforeRequestAsError = value;
  }
  public resetExcludeClientCloseBeforeRequestAsError() {
    this._excludeClientCloseBeforeRequestAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeClientCloseBeforeRequestAsErrorInput() {
    return this._excludeClientCloseBeforeRequestAsError;
  }

  // exclude_conn_drop_client_small_window_as_error - computed: false, optional: true, required: false
  private _excludeConnDropClientSmallWindowAsError?: string; 
  public get excludeConnDropClientSmallWindowAsError() {
    return this.getStringAttribute('exclude_conn_drop_client_small_window_as_error');
  }
  public set excludeConnDropClientSmallWindowAsError(value: string) {
    this._excludeConnDropClientSmallWindowAsError = value;
  }
  public resetExcludeConnDropClientSmallWindowAsError() {
    this._excludeConnDropClientSmallWindowAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeConnDropClientSmallWindowAsErrorInput() {
    return this._excludeConnDropClientSmallWindowAsError;
  }

  // exclude_dns_policy_drop_as_significant - computed: false, optional: true, required: false
  private _excludeDnsPolicyDropAsSignificant?: string; 
  public get excludeDnsPolicyDropAsSignificant() {
    return this.getStringAttribute('exclude_dns_policy_drop_as_significant');
  }
  public set excludeDnsPolicyDropAsSignificant(value: string) {
    this._excludeDnsPolicyDropAsSignificant = value;
  }
  public resetExcludeDnsPolicyDropAsSignificant() {
    this._excludeDnsPolicyDropAsSignificant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDnsPolicyDropAsSignificantInput() {
    return this._excludeDnsPolicyDropAsSignificant;
  }

  // exclude_gs_down_as_error - computed: false, optional: true, required: false
  private _excludeGsDownAsError?: string; 
  public get excludeGsDownAsError() {
    return this.getStringAttribute('exclude_gs_down_as_error');
  }
  public set excludeGsDownAsError(value: string) {
    this._excludeGsDownAsError = value;
  }
  public resetExcludeGsDownAsError() {
    this._excludeGsDownAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeGsDownAsErrorInput() {
    return this._excludeGsDownAsError;
  }

  // exclude_http_error_codes - computed: false, optional: true, required: false
  private _excludeHttpErrorCodes?: number[]; 
  public get excludeHttpErrorCodes() {
    return this.getNumberListAttribute('exclude_http_error_codes');
  }
  public set excludeHttpErrorCodes(value: number[]) {
    this._excludeHttpErrorCodes = value;
  }
  public resetExcludeHttpErrorCodes() {
    this._excludeHttpErrorCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeHttpErrorCodesInput() {
    return this._excludeHttpErrorCodes;
  }

  // exclude_invalid_dns_domain_as_error - computed: false, optional: true, required: false
  private _excludeInvalidDnsDomainAsError?: string; 
  public get excludeInvalidDnsDomainAsError() {
    return this.getStringAttribute('exclude_invalid_dns_domain_as_error');
  }
  public set excludeInvalidDnsDomainAsError(value: string) {
    this._excludeInvalidDnsDomainAsError = value;
  }
  public resetExcludeInvalidDnsDomainAsError() {
    this._excludeInvalidDnsDomainAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInvalidDnsDomainAsErrorInput() {
    return this._excludeInvalidDnsDomainAsError;
  }

  // exclude_invalid_dns_query_as_error - computed: false, optional: true, required: false
  private _excludeInvalidDnsQueryAsError?: string; 
  public get excludeInvalidDnsQueryAsError() {
    return this.getStringAttribute('exclude_invalid_dns_query_as_error');
  }
  public set excludeInvalidDnsQueryAsError(value: string) {
    this._excludeInvalidDnsQueryAsError = value;
  }
  public resetExcludeInvalidDnsQueryAsError() {
    this._excludeInvalidDnsQueryAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInvalidDnsQueryAsErrorInput() {
    return this._excludeInvalidDnsQueryAsError;
  }

  // exclude_issuer_revoked_ocsp_responses_as_error - computed: false, optional: true, required: false
  private _excludeIssuerRevokedOcspResponsesAsError?: string; 
  public get excludeIssuerRevokedOcspResponsesAsError() {
    return this.getStringAttribute('exclude_issuer_revoked_ocsp_responses_as_error');
  }
  public set excludeIssuerRevokedOcspResponsesAsError(value: string) {
    this._excludeIssuerRevokedOcspResponsesAsError = value;
  }
  public resetExcludeIssuerRevokedOcspResponsesAsError() {
    this._excludeIssuerRevokedOcspResponsesAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIssuerRevokedOcspResponsesAsErrorInput() {
    return this._excludeIssuerRevokedOcspResponsesAsError;
  }

  // exclude_no_dns_record_as_error - computed: false, optional: true, required: false
  private _excludeNoDnsRecordAsError?: string; 
  public get excludeNoDnsRecordAsError() {
    return this.getStringAttribute('exclude_no_dns_record_as_error');
  }
  public set excludeNoDnsRecordAsError(value: string) {
    this._excludeNoDnsRecordAsError = value;
  }
  public resetExcludeNoDnsRecordAsError() {
    this._excludeNoDnsRecordAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNoDnsRecordAsErrorInput() {
    return this._excludeNoDnsRecordAsError;
  }

  // exclude_no_valid_gs_member_as_error - computed: false, optional: true, required: false
  private _excludeNoValidGsMemberAsError?: string; 
  public get excludeNoValidGsMemberAsError() {
    return this.getStringAttribute('exclude_no_valid_gs_member_as_error');
  }
  public set excludeNoValidGsMemberAsError(value: string) {
    this._excludeNoValidGsMemberAsError = value;
  }
  public resetExcludeNoValidGsMemberAsError() {
    this._excludeNoValidGsMemberAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNoValidGsMemberAsErrorInput() {
    return this._excludeNoValidGsMemberAsError;
  }

  // exclude_persistence_change_as_error - computed: false, optional: true, required: false
  private _excludePersistenceChangeAsError?: string; 
  public get excludePersistenceChangeAsError() {
    return this.getStringAttribute('exclude_persistence_change_as_error');
  }
  public set excludePersistenceChangeAsError(value: string) {
    this._excludePersistenceChangeAsError = value;
  }
  public resetExcludePersistenceChangeAsError() {
    this._excludePersistenceChangeAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePersistenceChangeAsErrorInput() {
    return this._excludePersistenceChangeAsError;
  }

  // exclude_revoked_ocsp_responses_as_error - computed: false, optional: true, required: false
  private _excludeRevokedOcspResponsesAsError?: string; 
  public get excludeRevokedOcspResponsesAsError() {
    return this.getStringAttribute('exclude_revoked_ocsp_responses_as_error');
  }
  public set excludeRevokedOcspResponsesAsError(value: string) {
    this._excludeRevokedOcspResponsesAsError = value;
  }
  public resetExcludeRevokedOcspResponsesAsError() {
    this._excludeRevokedOcspResponsesAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRevokedOcspResponsesAsErrorInput() {
    return this._excludeRevokedOcspResponsesAsError;
  }

  // exclude_server_dns_error_as_error - computed: false, optional: true, required: false
  private _excludeServerDnsErrorAsError?: string; 
  public get excludeServerDnsErrorAsError() {
    return this.getStringAttribute('exclude_server_dns_error_as_error');
  }
  public set excludeServerDnsErrorAsError(value: string) {
    this._excludeServerDnsErrorAsError = value;
  }
  public resetExcludeServerDnsErrorAsError() {
    this._excludeServerDnsErrorAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeServerDnsErrorAsErrorInput() {
    return this._excludeServerDnsErrorAsError;
  }

  // exclude_server_tcp_reset_as_error - computed: false, optional: true, required: false
  private _excludeServerTcpResetAsError?: string; 
  public get excludeServerTcpResetAsError() {
    return this.getStringAttribute('exclude_server_tcp_reset_as_error');
  }
  public set excludeServerTcpResetAsError(value: string) {
    this._excludeServerTcpResetAsError = value;
  }
  public resetExcludeServerTcpResetAsError() {
    this._excludeServerTcpResetAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeServerTcpResetAsErrorInput() {
    return this._excludeServerTcpResetAsError;
  }

  // exclude_sip_error_codes - computed: false, optional: true, required: false
  private _excludeSipErrorCodes?: number[]; 
  public get excludeSipErrorCodes() {
    return this.getNumberListAttribute('exclude_sip_error_codes');
  }
  public set excludeSipErrorCodes(value: number[]) {
    this._excludeSipErrorCodes = value;
  }
  public resetExcludeSipErrorCodes() {
    this._excludeSipErrorCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSipErrorCodesInput() {
    return this._excludeSipErrorCodes;
  }

  // exclude_stale_ocsp_responses_as_error - computed: false, optional: true, required: false
  private _excludeStaleOcspResponsesAsError?: string; 
  public get excludeStaleOcspResponsesAsError() {
    return this.getStringAttribute('exclude_stale_ocsp_responses_as_error');
  }
  public set excludeStaleOcspResponsesAsError(value: string) {
    this._excludeStaleOcspResponsesAsError = value;
  }
  public resetExcludeStaleOcspResponsesAsError() {
    this._excludeStaleOcspResponsesAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeStaleOcspResponsesAsErrorInput() {
    return this._excludeStaleOcspResponsesAsError;
  }

  // exclude_syn_retransmit_as_error - computed: false, optional: true, required: false
  private _excludeSynRetransmitAsError?: string; 
  public get excludeSynRetransmitAsError() {
    return this.getStringAttribute('exclude_syn_retransmit_as_error');
  }
  public set excludeSynRetransmitAsError(value: string) {
    this._excludeSynRetransmitAsError = value;
  }
  public resetExcludeSynRetransmitAsError() {
    this._excludeSynRetransmitAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSynRetransmitAsErrorInput() {
    return this._excludeSynRetransmitAsError;
  }

  // exclude_tcp_reset_as_error - computed: false, optional: true, required: false
  private _excludeTcpResetAsError?: string; 
  public get excludeTcpResetAsError() {
    return this.getStringAttribute('exclude_tcp_reset_as_error');
  }
  public set excludeTcpResetAsError(value: string) {
    this._excludeTcpResetAsError = value;
  }
  public resetExcludeTcpResetAsError() {
    this._excludeTcpResetAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTcpResetAsErrorInput() {
    return this._excludeTcpResetAsError;
  }

  // exclude_unavailable_ocsp_responses_as_error - computed: false, optional: true, required: false
  private _excludeUnavailableOcspResponsesAsError?: string; 
  public get excludeUnavailableOcspResponsesAsError() {
    return this.getStringAttribute('exclude_unavailable_ocsp_responses_as_error');
  }
  public set excludeUnavailableOcspResponsesAsError(value: string) {
    this._excludeUnavailableOcspResponsesAsError = value;
  }
  public resetExcludeUnavailableOcspResponsesAsError() {
    this._excludeUnavailableOcspResponsesAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUnavailableOcspResponsesAsErrorInput() {
    return this._excludeUnavailableOcspResponsesAsError;
  }

  // exclude_unsupported_dns_query_as_error - computed: false, optional: true, required: false
  private _excludeUnsupportedDnsQueryAsError?: string; 
  public get excludeUnsupportedDnsQueryAsError() {
    return this.getStringAttribute('exclude_unsupported_dns_query_as_error');
  }
  public set excludeUnsupportedDnsQueryAsError(value: string) {
    this._excludeUnsupportedDnsQueryAsError = value;
  }
  public resetExcludeUnsupportedDnsQueryAsError() {
    this._excludeUnsupportedDnsQueryAsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUnsupportedDnsQueryAsErrorInput() {
    return this._excludeUnsupportedDnsQueryAsError;
  }

  // healthscore_max_server_limit - computed: false, optional: true, required: false
  private _healthscoreMaxServerLimit?: string; 
  public get healthscoreMaxServerLimit() {
    return this.getStringAttribute('healthscore_max_server_limit');
  }
  public set healthscoreMaxServerLimit(value: string) {
    this._healthscoreMaxServerLimit = value;
  }
  public resetHealthscoreMaxServerLimit() {
    this._healthscoreMaxServerLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthscoreMaxServerLimitInput() {
    return this._healthscoreMaxServerLimit;
  }

  // hs_event_throttle_window - computed: false, optional: true, required: false
  private _hsEventThrottleWindow?: string; 
  public get hsEventThrottleWindow() {
    return this.getStringAttribute('hs_event_throttle_window');
  }
  public set hsEventThrottleWindow(value: string) {
    this._hsEventThrottleWindow = value;
  }
  public resetHsEventThrottleWindow() {
    this._hsEventThrottleWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsEventThrottleWindowInput() {
    return this._hsEventThrottleWindow;
  }

  // hs_max_anomaly_penalty - computed: false, optional: true, required: false
  private _hsMaxAnomalyPenalty?: string; 
  public get hsMaxAnomalyPenalty() {
    return this.getStringAttribute('hs_max_anomaly_penalty');
  }
  public set hsMaxAnomalyPenalty(value: string) {
    this._hsMaxAnomalyPenalty = value;
  }
  public resetHsMaxAnomalyPenalty() {
    this._hsMaxAnomalyPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsMaxAnomalyPenaltyInput() {
    return this._hsMaxAnomalyPenalty;
  }

  // hs_max_resources_penalty - computed: false, optional: true, required: false
  private _hsMaxResourcesPenalty?: string; 
  public get hsMaxResourcesPenalty() {
    return this.getStringAttribute('hs_max_resources_penalty');
  }
  public set hsMaxResourcesPenalty(value: string) {
    this._hsMaxResourcesPenalty = value;
  }
  public resetHsMaxResourcesPenalty() {
    this._hsMaxResourcesPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsMaxResourcesPenaltyInput() {
    return this._hsMaxResourcesPenalty;
  }

  // hs_max_security_penalty - computed: false, optional: true, required: false
  private _hsMaxSecurityPenalty?: string; 
  public get hsMaxSecurityPenalty() {
    return this.getStringAttribute('hs_max_security_penalty');
  }
  public set hsMaxSecurityPenalty(value: string) {
    this._hsMaxSecurityPenalty = value;
  }
  public resetHsMaxSecurityPenalty() {
    this._hsMaxSecurityPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsMaxSecurityPenaltyInput() {
    return this._hsMaxSecurityPenalty;
  }

  // hs_min_dos_rate - computed: false, optional: true, required: false
  private _hsMinDosRate?: string; 
  public get hsMinDosRate() {
    return this.getStringAttribute('hs_min_dos_rate');
  }
  public set hsMinDosRate(value: string) {
    this._hsMinDosRate = value;
  }
  public resetHsMinDosRate() {
    this._hsMinDosRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsMinDosRateInput() {
    return this._hsMinDosRate;
  }

  // hs_performance_boost - computed: false, optional: true, required: false
  private _hsPerformanceBoost?: string; 
  public get hsPerformanceBoost() {
    return this.getStringAttribute('hs_performance_boost');
  }
  public set hsPerformanceBoost(value: string) {
    this._hsPerformanceBoost = value;
  }
  public resetHsPerformanceBoost() {
    this._hsPerformanceBoost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsPerformanceBoostInput() {
    return this._hsPerformanceBoost;
  }

  // hs_pscore_traffic_threshold_l4_client - computed: false, optional: true, required: false
  private _hsPscoreTrafficThresholdL4Client?: string; 
  public get hsPscoreTrafficThresholdL4Client() {
    return this.getStringAttribute('hs_pscore_traffic_threshold_l4_client');
  }
  public set hsPscoreTrafficThresholdL4Client(value: string) {
    this._hsPscoreTrafficThresholdL4Client = value;
  }
  public resetHsPscoreTrafficThresholdL4Client() {
    this._hsPscoreTrafficThresholdL4Client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsPscoreTrafficThresholdL4ClientInput() {
    return this._hsPscoreTrafficThresholdL4Client;
  }

  // hs_pscore_traffic_threshold_l4_server - computed: false, optional: true, required: false
  private _hsPscoreTrafficThresholdL4Server?: string; 
  public get hsPscoreTrafficThresholdL4Server() {
    return this.getStringAttribute('hs_pscore_traffic_threshold_l4_server');
  }
  public set hsPscoreTrafficThresholdL4Server(value: string) {
    this._hsPscoreTrafficThresholdL4Server = value;
  }
  public resetHsPscoreTrafficThresholdL4Server() {
    this._hsPscoreTrafficThresholdL4Server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsPscoreTrafficThresholdL4ServerInput() {
    return this._hsPscoreTrafficThresholdL4Server;
  }

  // hs_security_certscore_expired - computed: false, optional: true, required: false
  private _hsSecurityCertscoreExpired?: string; 
  public get hsSecurityCertscoreExpired() {
    return this.getStringAttribute('hs_security_certscore_expired');
  }
  public set hsSecurityCertscoreExpired(value: string) {
    this._hsSecurityCertscoreExpired = value;
  }
  public resetHsSecurityCertscoreExpired() {
    this._hsSecurityCertscoreExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityCertscoreExpiredInput() {
    return this._hsSecurityCertscoreExpired;
  }

  // hs_security_certscore_gt30d - computed: false, optional: true, required: false
  private _hsSecurityCertscoreGt30D?: string; 
  public get hsSecurityCertscoreGt30D() {
    return this.getStringAttribute('hs_security_certscore_gt30d');
  }
  public set hsSecurityCertscoreGt30D(value: string) {
    this._hsSecurityCertscoreGt30D = value;
  }
  public resetHsSecurityCertscoreGt30D() {
    this._hsSecurityCertscoreGt30D = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityCertscoreGt30DInput() {
    return this._hsSecurityCertscoreGt30D;
  }

  // hs_security_certscore_le07d - computed: false, optional: true, required: false
  private _hsSecurityCertscoreLe07D?: string; 
  public get hsSecurityCertscoreLe07D() {
    return this.getStringAttribute('hs_security_certscore_le07d');
  }
  public set hsSecurityCertscoreLe07D(value: string) {
    this._hsSecurityCertscoreLe07D = value;
  }
  public resetHsSecurityCertscoreLe07D() {
    this._hsSecurityCertscoreLe07D = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityCertscoreLe07DInput() {
    return this._hsSecurityCertscoreLe07D;
  }

  // hs_security_certscore_le30d - computed: false, optional: true, required: false
  private _hsSecurityCertscoreLe30D?: string; 
  public get hsSecurityCertscoreLe30D() {
    return this.getStringAttribute('hs_security_certscore_le30d');
  }
  public set hsSecurityCertscoreLe30D(value: string) {
    this._hsSecurityCertscoreLe30D = value;
  }
  public resetHsSecurityCertscoreLe30D() {
    this._hsSecurityCertscoreLe30D = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityCertscoreLe30DInput() {
    return this._hsSecurityCertscoreLe30D;
  }

  // hs_security_chain_invalidity_penalty - computed: false, optional: true, required: false
  private _hsSecurityChainInvalidityPenalty?: string; 
  public get hsSecurityChainInvalidityPenalty() {
    return this.getStringAttribute('hs_security_chain_invalidity_penalty');
  }
  public set hsSecurityChainInvalidityPenalty(value: string) {
    this._hsSecurityChainInvalidityPenalty = value;
  }
  public resetHsSecurityChainInvalidityPenalty() {
    this._hsSecurityChainInvalidityPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityChainInvalidityPenaltyInput() {
    return this._hsSecurityChainInvalidityPenalty;
  }

  // hs_security_cipherscore_eq000b - computed: false, optional: true, required: false
  private _hsSecurityCipherscoreEq000B?: string; 
  public get hsSecurityCipherscoreEq000B() {
    return this.getStringAttribute('hs_security_cipherscore_eq000b');
  }
  public set hsSecurityCipherscoreEq000B(value: string) {
    this._hsSecurityCipherscoreEq000B = value;
  }
  public resetHsSecurityCipherscoreEq000B() {
    this._hsSecurityCipherscoreEq000B = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityCipherscoreEq000BInput() {
    return this._hsSecurityCipherscoreEq000B;
  }

  // hs_security_cipherscore_ge128b - computed: false, optional: true, required: false
  private _hsSecurityCipherscoreGe128B?: string; 
  public get hsSecurityCipherscoreGe128B() {
    return this.getStringAttribute('hs_security_cipherscore_ge128b');
  }
  public set hsSecurityCipherscoreGe128B(value: string) {
    this._hsSecurityCipherscoreGe128B = value;
  }
  public resetHsSecurityCipherscoreGe128B() {
    this._hsSecurityCipherscoreGe128B = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityCipherscoreGe128BInput() {
    return this._hsSecurityCipherscoreGe128B;
  }

  // hs_security_cipherscore_lt128b - computed: false, optional: true, required: false
  private _hsSecurityCipherscoreLt128B?: string; 
  public get hsSecurityCipherscoreLt128B() {
    return this.getStringAttribute('hs_security_cipherscore_lt128b');
  }
  public set hsSecurityCipherscoreLt128B(value: string) {
    this._hsSecurityCipherscoreLt128B = value;
  }
  public resetHsSecurityCipherscoreLt128B() {
    this._hsSecurityCipherscoreLt128B = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityCipherscoreLt128BInput() {
    return this._hsSecurityCipherscoreLt128B;
  }

  // hs_security_encalgo_score_none - computed: false, optional: true, required: false
  private _hsSecurityEncalgoScoreNone?: string; 
  public get hsSecurityEncalgoScoreNone() {
    return this.getStringAttribute('hs_security_encalgo_score_none');
  }
  public set hsSecurityEncalgoScoreNone(value: string) {
    this._hsSecurityEncalgoScoreNone = value;
  }
  public resetHsSecurityEncalgoScoreNone() {
    this._hsSecurityEncalgoScoreNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityEncalgoScoreNoneInput() {
    return this._hsSecurityEncalgoScoreNone;
  }

  // hs_security_encalgo_score_rc4 - computed: false, optional: true, required: false
  private _hsSecurityEncalgoScoreRc4?: string; 
  public get hsSecurityEncalgoScoreRc4() {
    return this.getStringAttribute('hs_security_encalgo_score_rc4');
  }
  public set hsSecurityEncalgoScoreRc4(value: string) {
    this._hsSecurityEncalgoScoreRc4 = value;
  }
  public resetHsSecurityEncalgoScoreRc4() {
    this._hsSecurityEncalgoScoreRc4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityEncalgoScoreRc4Input() {
    return this._hsSecurityEncalgoScoreRc4;
  }

  // hs_security_hsts_penalty - computed: false, optional: true, required: false
  private _hsSecurityHstsPenalty?: string; 
  public get hsSecurityHstsPenalty() {
    return this.getStringAttribute('hs_security_hsts_penalty');
  }
  public set hsSecurityHstsPenalty(value: string) {
    this._hsSecurityHstsPenalty = value;
  }
  public resetHsSecurityHstsPenalty() {
    this._hsSecurityHstsPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityHstsPenaltyInput() {
    return this._hsSecurityHstsPenalty;
  }

  // hs_security_nonpfs_penalty - computed: false, optional: true, required: false
  private _hsSecurityNonpfsPenalty?: string; 
  public get hsSecurityNonpfsPenalty() {
    return this.getStringAttribute('hs_security_nonpfs_penalty');
  }
  public set hsSecurityNonpfsPenalty(value: string) {
    this._hsSecurityNonpfsPenalty = value;
  }
  public resetHsSecurityNonpfsPenalty() {
    this._hsSecurityNonpfsPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityNonpfsPenaltyInput() {
    return this._hsSecurityNonpfsPenalty;
  }

  // hs_security_ocsp_revoked_score - computed: false, optional: true, required: false
  private _hsSecurityOcspRevokedScore?: string; 
  public get hsSecurityOcspRevokedScore() {
    return this.getStringAttribute('hs_security_ocsp_revoked_score');
  }
  public set hsSecurityOcspRevokedScore(value: string) {
    this._hsSecurityOcspRevokedScore = value;
  }
  public resetHsSecurityOcspRevokedScore() {
    this._hsSecurityOcspRevokedScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityOcspRevokedScoreInput() {
    return this._hsSecurityOcspRevokedScore;
  }

  // hs_security_selfsignedcert_penalty - computed: false, optional: true, required: false
  private _hsSecuritySelfsignedcertPenalty?: string; 
  public get hsSecuritySelfsignedcertPenalty() {
    return this.getStringAttribute('hs_security_selfsignedcert_penalty');
  }
  public set hsSecuritySelfsignedcertPenalty(value: string) {
    this._hsSecuritySelfsignedcertPenalty = value;
  }
  public resetHsSecuritySelfsignedcertPenalty() {
    this._hsSecuritySelfsignedcertPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecuritySelfsignedcertPenaltyInput() {
    return this._hsSecuritySelfsignedcertPenalty;
  }

  // hs_security_ssl30_score - computed: false, optional: true, required: false
  private _hsSecuritySsl30Score?: string; 
  public get hsSecuritySsl30Score() {
    return this.getStringAttribute('hs_security_ssl30_score');
  }
  public set hsSecuritySsl30Score(value: string) {
    this._hsSecuritySsl30Score = value;
  }
  public resetHsSecuritySsl30Score() {
    this._hsSecuritySsl30Score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecuritySsl30ScoreInput() {
    return this._hsSecuritySsl30Score;
  }

  // hs_security_tls10_score - computed: false, optional: true, required: false
  private _hsSecurityTls10Score?: string; 
  public get hsSecurityTls10Score() {
    return this.getStringAttribute('hs_security_tls10_score');
  }
  public set hsSecurityTls10Score(value: string) {
    this._hsSecurityTls10Score = value;
  }
  public resetHsSecurityTls10Score() {
    this._hsSecurityTls10Score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityTls10ScoreInput() {
    return this._hsSecurityTls10Score;
  }

  // hs_security_tls11_score - computed: false, optional: true, required: false
  private _hsSecurityTls11Score?: string; 
  public get hsSecurityTls11Score() {
    return this.getStringAttribute('hs_security_tls11_score');
  }
  public set hsSecurityTls11Score(value: string) {
    this._hsSecurityTls11Score = value;
  }
  public resetHsSecurityTls11Score() {
    this._hsSecurityTls11Score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityTls11ScoreInput() {
    return this._hsSecurityTls11Score;
  }

  // hs_security_tls12_score - computed: false, optional: true, required: false
  private _hsSecurityTls12Score?: string; 
  public get hsSecurityTls12Score() {
    return this.getStringAttribute('hs_security_tls12_score');
  }
  public set hsSecurityTls12Score(value: string) {
    this._hsSecurityTls12Score = value;
  }
  public resetHsSecurityTls12Score() {
    this._hsSecurityTls12Score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityTls12ScoreInput() {
    return this._hsSecurityTls12Score;
  }

  // hs_security_tls13_score - computed: false, optional: true, required: false
  private _hsSecurityTls13Score?: string; 
  public get hsSecurityTls13Score() {
    return this.getStringAttribute('hs_security_tls13_score');
  }
  public set hsSecurityTls13Score(value: string) {
    this._hsSecurityTls13Score = value;
  }
  public resetHsSecurityTls13Score() {
    this._hsSecurityTls13Score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityTls13ScoreInput() {
    return this._hsSecurityTls13Score;
  }

  // hs_security_weak_signature_algo_penalty - computed: false, optional: true, required: false
  private _hsSecurityWeakSignatureAlgoPenalty?: string; 
  public get hsSecurityWeakSignatureAlgoPenalty() {
    return this.getStringAttribute('hs_security_weak_signature_algo_penalty');
  }
  public set hsSecurityWeakSignatureAlgoPenalty(value: string) {
    this._hsSecurityWeakSignatureAlgoPenalty = value;
  }
  public resetHsSecurityWeakSignatureAlgoPenalty() {
    this._hsSecurityWeakSignatureAlgoPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsSecurityWeakSignatureAlgoPenaltyInput() {
    return this._hsSecurityWeakSignatureAlgoPenalty;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ondemand_metrics_idle_timeout - computed: false, optional: true, required: false
  private _ondemandMetricsIdleTimeout?: string; 
  public get ondemandMetricsIdleTimeout() {
    return this.getStringAttribute('ondemand_metrics_idle_timeout');
  }
  public set ondemandMetricsIdleTimeout(value: string) {
    this._ondemandMetricsIdleTimeout = value;
  }
  public resetOndemandMetricsIdleTimeout() {
    this._ondemandMetricsIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ondemandMetricsIdleTimeoutInput() {
    return this._ondemandMetricsIdleTimeout;
  }

  // resp_code_block - computed: false, optional: true, required: false
  private _respCodeBlock?: string[]; 
  public get respCodeBlock() {
    return this.getListAttribute('resp_code_block');
  }
  public set respCodeBlock(value: string[]) {
    this._respCodeBlock = value;
  }
  public resetRespCodeBlock() {
    this._respCodeBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCodeBlockInput() {
    return this._respCodeBlock;
  }

  // sip_log_depth - computed: false, optional: true, required: false
  private _sipLogDepth?: string; 
  public get sipLogDepth() {
    return this.getStringAttribute('sip_log_depth');
  }
  public set sipLogDepth(value: string) {
    this._sipLogDepth = value;
  }
  public resetSipLogDepth() {
    this._sipLogDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipLogDepthInput() {
    return this._sipLogDepth;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
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

  // client_log_config - computed: false, optional: true, required: false
  private _clientLogConfig = new AnalyticsprofileClientLogConfigList(this, "client_log_config", true);
  public get clientLogConfig() {
    return this._clientLogConfig;
  }
  public putClientLogConfig(value: AnalyticsprofileClientLogConfig[] | cdktf.IResolvable) {
    this._clientLogConfig.internalValue = value;
  }
  public resetClientLogConfig() {
    this._clientLogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLogConfigInput() {
    return this._clientLogConfig.internalValue;
  }

  // client_log_streaming_config - computed: false, optional: true, required: false
  private _clientLogStreamingConfig = new AnalyticsprofileClientLogStreamingConfigList(this, "client_log_streaming_config", true);
  public get clientLogStreamingConfig() {
    return this._clientLogStreamingConfig;
  }
  public putClientLogStreamingConfig(value: AnalyticsprofileClientLogStreamingConfig[] | cdktf.IResolvable) {
    this._clientLogStreamingConfig.internalValue = value;
  }
  public resetClientLogStreamingConfig() {
    this._clientLogStreamingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLogStreamingConfigInput() {
    return this._clientLogStreamingConfig.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new AnalyticsprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: AnalyticsprofileConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // latency_audit_props - computed: false, optional: true, required: false
  private _latencyAuditProps = new AnalyticsprofileLatencyAuditPropsList(this, "latency_audit_props", true);
  public get latencyAuditProps() {
    return this._latencyAuditProps;
  }
  public putLatencyAuditProps(value: AnalyticsprofileLatencyAuditProps[] | cdktf.IResolvable) {
    this._latencyAuditProps.internalValue = value;
  }
  public resetLatencyAuditProps() {
    this._latencyAuditProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyAuditPropsInput() {
    return this._latencyAuditProps.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new AnalyticsprofileMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: AnalyticsprofileMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new AnalyticsprofileRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: AnalyticsprofileRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }

  // sensitive_log_profile - computed: false, optional: true, required: false
  private _sensitiveLogProfile = new AnalyticsprofileSensitiveLogProfileList(this, "sensitive_log_profile", true);
  public get sensitiveLogProfile() {
    return this._sensitiveLogProfile;
  }
  public putSensitiveLogProfile(value: AnalyticsprofileSensitiveLogProfile[] | cdktf.IResolvable) {
    this._sensitiveLogProfile.internalValue = value;
  }
  public resetSensitiveLogProfile() {
    this._sensitiveLogProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveLogProfileInput() {
    return this._sensitiveLogProfile.internalValue;
  }

  // time_tracker_props - computed: false, optional: true, required: false
  private _timeTrackerProps = new AnalyticsprofileTimeTrackerPropsList(this, "time_tracker_props", true);
  public get timeTrackerProps() {
    return this._timeTrackerProps;
  }
  public putTimeTrackerProps(value: AnalyticsprofileTimeTrackerProps[] | cdktf.IResolvable) {
    this._timeTrackerProps.internalValue = value;
  }
  public resetTimeTrackerProps() {
    this._timeTrackerProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTrackerPropsInput() {
    return this._timeTrackerProps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apdex_response_threshold: cdktf.stringToTerraform(this._apdexResponseThreshold),
      apdex_response_tolerated_factor: cdktf.stringToTerraform(this._apdexResponseToleratedFactor),
      apdex_rtt_threshold: cdktf.stringToTerraform(this._apdexRttThreshold),
      apdex_rtt_tolerated_factor: cdktf.stringToTerraform(this._apdexRttToleratedFactor),
      apdex_rum_threshold: cdktf.stringToTerraform(this._apdexRumThreshold),
      apdex_rum_tolerated_factor: cdktf.stringToTerraform(this._apdexRumToleratedFactor),
      apdex_server_response_threshold: cdktf.stringToTerraform(this._apdexServerResponseThreshold),
      apdex_server_response_tolerated_factor: cdktf.stringToTerraform(this._apdexServerResponseToleratedFactor),
      apdex_server_rtt_threshold: cdktf.stringToTerraform(this._apdexServerRttThreshold),
      apdex_server_rtt_tolerated_factor: cdktf.stringToTerraform(this._apdexServerRttToleratedFactor),
      conn_lossy_ooo_threshold: cdktf.stringToTerraform(this._connLossyOooThreshold),
      conn_lossy_timeo_rexmt_threshold: cdktf.stringToTerraform(this._connLossyTimeoRexmtThreshold),
      conn_lossy_total_rexmt_threshold: cdktf.stringToTerraform(this._connLossyTotalRexmtThreshold),
      conn_lossy_zero_win_size_event_threshold: cdktf.stringToTerraform(this._connLossyZeroWinSizeEventThreshold),
      conn_server_lossy_ooo_threshold: cdktf.stringToTerraform(this._connServerLossyOooThreshold),
      conn_server_lossy_timeo_rexmt_threshold: cdktf.stringToTerraform(this._connServerLossyTimeoRexmtThreshold),
      conn_server_lossy_total_rexmt_threshold: cdktf.stringToTerraform(this._connServerLossyTotalRexmtThreshold),
      conn_server_lossy_zero_win_size_event_threshold: cdktf.stringToTerraform(this._connServerLossyZeroWinSizeEventThreshold),
      description: cdktf.stringToTerraform(this._description),
      enable_adaptive_config: cdktf.stringToTerraform(this._enableAdaptiveConfig),
      enable_advanced_analytics: cdktf.stringToTerraform(this._enableAdvancedAnalytics),
      enable_ondemand_metrics: cdktf.stringToTerraform(this._enableOndemandMetrics),
      enable_se_analytics: cdktf.stringToTerraform(this._enableSeAnalytics),
      enable_server_analytics: cdktf.stringToTerraform(this._enableServerAnalytics),
      enable_vs_analytics: cdktf.stringToTerraform(this._enableVsAnalytics),
      exclude_client_close_before_request_as_error: cdktf.stringToTerraform(this._excludeClientCloseBeforeRequestAsError),
      exclude_conn_drop_client_small_window_as_error: cdktf.stringToTerraform(this._excludeConnDropClientSmallWindowAsError),
      exclude_dns_policy_drop_as_significant: cdktf.stringToTerraform(this._excludeDnsPolicyDropAsSignificant),
      exclude_gs_down_as_error: cdktf.stringToTerraform(this._excludeGsDownAsError),
      exclude_http_error_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludeHttpErrorCodes),
      exclude_invalid_dns_domain_as_error: cdktf.stringToTerraform(this._excludeInvalidDnsDomainAsError),
      exclude_invalid_dns_query_as_error: cdktf.stringToTerraform(this._excludeInvalidDnsQueryAsError),
      exclude_issuer_revoked_ocsp_responses_as_error: cdktf.stringToTerraform(this._excludeIssuerRevokedOcspResponsesAsError),
      exclude_no_dns_record_as_error: cdktf.stringToTerraform(this._excludeNoDnsRecordAsError),
      exclude_no_valid_gs_member_as_error: cdktf.stringToTerraform(this._excludeNoValidGsMemberAsError),
      exclude_persistence_change_as_error: cdktf.stringToTerraform(this._excludePersistenceChangeAsError),
      exclude_revoked_ocsp_responses_as_error: cdktf.stringToTerraform(this._excludeRevokedOcspResponsesAsError),
      exclude_server_dns_error_as_error: cdktf.stringToTerraform(this._excludeServerDnsErrorAsError),
      exclude_server_tcp_reset_as_error: cdktf.stringToTerraform(this._excludeServerTcpResetAsError),
      exclude_sip_error_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludeSipErrorCodes),
      exclude_stale_ocsp_responses_as_error: cdktf.stringToTerraform(this._excludeStaleOcspResponsesAsError),
      exclude_syn_retransmit_as_error: cdktf.stringToTerraform(this._excludeSynRetransmitAsError),
      exclude_tcp_reset_as_error: cdktf.stringToTerraform(this._excludeTcpResetAsError),
      exclude_unavailable_ocsp_responses_as_error: cdktf.stringToTerraform(this._excludeUnavailableOcspResponsesAsError),
      exclude_unsupported_dns_query_as_error: cdktf.stringToTerraform(this._excludeUnsupportedDnsQueryAsError),
      healthscore_max_server_limit: cdktf.stringToTerraform(this._healthscoreMaxServerLimit),
      hs_event_throttle_window: cdktf.stringToTerraform(this._hsEventThrottleWindow),
      hs_max_anomaly_penalty: cdktf.stringToTerraform(this._hsMaxAnomalyPenalty),
      hs_max_resources_penalty: cdktf.stringToTerraform(this._hsMaxResourcesPenalty),
      hs_max_security_penalty: cdktf.stringToTerraform(this._hsMaxSecurityPenalty),
      hs_min_dos_rate: cdktf.stringToTerraform(this._hsMinDosRate),
      hs_performance_boost: cdktf.stringToTerraform(this._hsPerformanceBoost),
      hs_pscore_traffic_threshold_l4_client: cdktf.stringToTerraform(this._hsPscoreTrafficThresholdL4Client),
      hs_pscore_traffic_threshold_l4_server: cdktf.stringToTerraform(this._hsPscoreTrafficThresholdL4Server),
      hs_security_certscore_expired: cdktf.stringToTerraform(this._hsSecurityCertscoreExpired),
      hs_security_certscore_gt30d: cdktf.stringToTerraform(this._hsSecurityCertscoreGt30D),
      hs_security_certscore_le07d: cdktf.stringToTerraform(this._hsSecurityCertscoreLe07D),
      hs_security_certscore_le30d: cdktf.stringToTerraform(this._hsSecurityCertscoreLe30D),
      hs_security_chain_invalidity_penalty: cdktf.stringToTerraform(this._hsSecurityChainInvalidityPenalty),
      hs_security_cipherscore_eq000b: cdktf.stringToTerraform(this._hsSecurityCipherscoreEq000B),
      hs_security_cipherscore_ge128b: cdktf.stringToTerraform(this._hsSecurityCipherscoreGe128B),
      hs_security_cipherscore_lt128b: cdktf.stringToTerraform(this._hsSecurityCipherscoreLt128B),
      hs_security_encalgo_score_none: cdktf.stringToTerraform(this._hsSecurityEncalgoScoreNone),
      hs_security_encalgo_score_rc4: cdktf.stringToTerraform(this._hsSecurityEncalgoScoreRc4),
      hs_security_hsts_penalty: cdktf.stringToTerraform(this._hsSecurityHstsPenalty),
      hs_security_nonpfs_penalty: cdktf.stringToTerraform(this._hsSecurityNonpfsPenalty),
      hs_security_ocsp_revoked_score: cdktf.stringToTerraform(this._hsSecurityOcspRevokedScore),
      hs_security_selfsignedcert_penalty: cdktf.stringToTerraform(this._hsSecuritySelfsignedcertPenalty),
      hs_security_ssl30_score: cdktf.stringToTerraform(this._hsSecuritySsl30Score),
      hs_security_tls10_score: cdktf.stringToTerraform(this._hsSecurityTls10Score),
      hs_security_tls11_score: cdktf.stringToTerraform(this._hsSecurityTls11Score),
      hs_security_tls12_score: cdktf.stringToTerraform(this._hsSecurityTls12Score),
      hs_security_tls13_score: cdktf.stringToTerraform(this._hsSecurityTls13Score),
      hs_security_weak_signature_algo_penalty: cdktf.stringToTerraform(this._hsSecurityWeakSignatureAlgoPenalty),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ondemand_metrics_idle_timeout: cdktf.stringToTerraform(this._ondemandMetricsIdleTimeout),
      resp_code_block: cdktf.listMapper(cdktf.stringToTerraform, false)(this._respCodeBlock),
      sip_log_depth: cdktf.stringToTerraform(this._sipLogDepth),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      client_log_config: cdktf.listMapper(analyticsprofileClientLogConfigToTerraform, true)(this._clientLogConfig.internalValue),
      client_log_streaming_config: cdktf.listMapper(analyticsprofileClientLogStreamingConfigToTerraform, true)(this._clientLogStreamingConfig.internalValue),
      configpb_attributes: cdktf.listMapper(analyticsprofileConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      latency_audit_props: cdktf.listMapper(analyticsprofileLatencyAuditPropsToTerraform, true)(this._latencyAuditProps.internalValue),
      markers: cdktf.listMapper(analyticsprofileMarkersToTerraform, true)(this._markers.internalValue),
      ranges: cdktf.listMapper(analyticsprofileRangesToTerraform, true)(this._ranges.internalValue),
      sensitive_log_profile: cdktf.listMapper(analyticsprofileSensitiveLogProfileToTerraform, true)(this._sensitiveLogProfile.internalValue),
      time_tracker_props: cdktf.listMapper(analyticsprofileTimeTrackerPropsToTerraform, true)(this._timeTrackerProps.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apdex_response_threshold: {
        value: cdktf.stringToHclTerraform(this._apdexResponseThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apdex_response_tolerated_factor: {
        value: cdktf.stringToHclTerraform(this._apdexResponseToleratedFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apdex_rtt_threshold: {
        value: cdktf.stringToHclTerraform(this._apdexRttThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apdex_rtt_tolerated_factor: {
        value: cdktf.stringToHclTerraform(this._apdexRttToleratedFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apdex_rum_threshold: {
        value: cdktf.stringToHclTerraform(this._apdexRumThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apdex_rum_tolerated_factor: {
        value: cdktf.stringToHclTerraform(this._apdexRumToleratedFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apdex_server_response_threshold: {
        value: cdktf.stringToHclTerraform(this._apdexServerResponseThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apdex_server_response_tolerated_factor: {
        value: cdktf.stringToHclTerraform(this._apdexServerResponseToleratedFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apdex_server_rtt_threshold: {
        value: cdktf.stringToHclTerraform(this._apdexServerRttThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apdex_server_rtt_tolerated_factor: {
        value: cdktf.stringToHclTerraform(this._apdexServerRttToleratedFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_lossy_ooo_threshold: {
        value: cdktf.stringToHclTerraform(this._connLossyOooThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_lossy_timeo_rexmt_threshold: {
        value: cdktf.stringToHclTerraform(this._connLossyTimeoRexmtThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_lossy_total_rexmt_threshold: {
        value: cdktf.stringToHclTerraform(this._connLossyTotalRexmtThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_lossy_zero_win_size_event_threshold: {
        value: cdktf.stringToHclTerraform(this._connLossyZeroWinSizeEventThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_server_lossy_ooo_threshold: {
        value: cdktf.stringToHclTerraform(this._connServerLossyOooThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_server_lossy_timeo_rexmt_threshold: {
        value: cdktf.stringToHclTerraform(this._connServerLossyTimeoRexmtThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_server_lossy_total_rexmt_threshold: {
        value: cdktf.stringToHclTerraform(this._connServerLossyTotalRexmtThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_server_lossy_zero_win_size_event_threshold: {
        value: cdktf.stringToHclTerraform(this._connServerLossyZeroWinSizeEventThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_adaptive_config: {
        value: cdktf.stringToHclTerraform(this._enableAdaptiveConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_advanced_analytics: {
        value: cdktf.stringToHclTerraform(this._enableAdvancedAnalytics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ondemand_metrics: {
        value: cdktf.stringToHclTerraform(this._enableOndemandMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_se_analytics: {
        value: cdktf.stringToHclTerraform(this._enableSeAnalytics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_server_analytics: {
        value: cdktf.stringToHclTerraform(this._enableServerAnalytics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_vs_analytics: {
        value: cdktf.stringToHclTerraform(this._enableVsAnalytics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_client_close_before_request_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeClientCloseBeforeRequestAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_conn_drop_client_small_window_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeConnDropClientSmallWindowAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_dns_policy_drop_as_significant: {
        value: cdktf.stringToHclTerraform(this._excludeDnsPolicyDropAsSignificant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_gs_down_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeGsDownAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_http_error_codes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._excludeHttpErrorCodes),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      exclude_invalid_dns_domain_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeInvalidDnsDomainAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_invalid_dns_query_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeInvalidDnsQueryAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_issuer_revoked_ocsp_responses_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeIssuerRevokedOcspResponsesAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_no_dns_record_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeNoDnsRecordAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_no_valid_gs_member_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeNoValidGsMemberAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_persistence_change_as_error: {
        value: cdktf.stringToHclTerraform(this._excludePersistenceChangeAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_revoked_ocsp_responses_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeRevokedOcspResponsesAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_server_dns_error_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeServerDnsErrorAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_server_tcp_reset_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeServerTcpResetAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_sip_error_codes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._excludeSipErrorCodes),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      exclude_stale_ocsp_responses_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeStaleOcspResponsesAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_syn_retransmit_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeSynRetransmitAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_tcp_reset_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeTcpResetAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_unavailable_ocsp_responses_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeUnavailableOcspResponsesAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_unsupported_dns_query_as_error: {
        value: cdktf.stringToHclTerraform(this._excludeUnsupportedDnsQueryAsError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthscore_max_server_limit: {
        value: cdktf.stringToHclTerraform(this._healthscoreMaxServerLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_event_throttle_window: {
        value: cdktf.stringToHclTerraform(this._hsEventThrottleWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_max_anomaly_penalty: {
        value: cdktf.stringToHclTerraform(this._hsMaxAnomalyPenalty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_max_resources_penalty: {
        value: cdktf.stringToHclTerraform(this._hsMaxResourcesPenalty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_max_security_penalty: {
        value: cdktf.stringToHclTerraform(this._hsMaxSecurityPenalty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_min_dos_rate: {
        value: cdktf.stringToHclTerraform(this._hsMinDosRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_performance_boost: {
        value: cdktf.stringToHclTerraform(this._hsPerformanceBoost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_pscore_traffic_threshold_l4_client: {
        value: cdktf.stringToHclTerraform(this._hsPscoreTrafficThresholdL4Client),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_pscore_traffic_threshold_l4_server: {
        value: cdktf.stringToHclTerraform(this._hsPscoreTrafficThresholdL4Server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_certscore_expired: {
        value: cdktf.stringToHclTerraform(this._hsSecurityCertscoreExpired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_certscore_gt30d: {
        value: cdktf.stringToHclTerraform(this._hsSecurityCertscoreGt30D),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_certscore_le07d: {
        value: cdktf.stringToHclTerraform(this._hsSecurityCertscoreLe07D),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_certscore_le30d: {
        value: cdktf.stringToHclTerraform(this._hsSecurityCertscoreLe30D),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_chain_invalidity_penalty: {
        value: cdktf.stringToHclTerraform(this._hsSecurityChainInvalidityPenalty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_cipherscore_eq000b: {
        value: cdktf.stringToHclTerraform(this._hsSecurityCipherscoreEq000B),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_cipherscore_ge128b: {
        value: cdktf.stringToHclTerraform(this._hsSecurityCipherscoreGe128B),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_cipherscore_lt128b: {
        value: cdktf.stringToHclTerraform(this._hsSecurityCipherscoreLt128B),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_encalgo_score_none: {
        value: cdktf.stringToHclTerraform(this._hsSecurityEncalgoScoreNone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_encalgo_score_rc4: {
        value: cdktf.stringToHclTerraform(this._hsSecurityEncalgoScoreRc4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_hsts_penalty: {
        value: cdktf.stringToHclTerraform(this._hsSecurityHstsPenalty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_nonpfs_penalty: {
        value: cdktf.stringToHclTerraform(this._hsSecurityNonpfsPenalty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_ocsp_revoked_score: {
        value: cdktf.stringToHclTerraform(this._hsSecurityOcspRevokedScore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_selfsignedcert_penalty: {
        value: cdktf.stringToHclTerraform(this._hsSecuritySelfsignedcertPenalty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_ssl30_score: {
        value: cdktf.stringToHclTerraform(this._hsSecuritySsl30Score),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_tls10_score: {
        value: cdktf.stringToHclTerraform(this._hsSecurityTls10Score),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_tls11_score: {
        value: cdktf.stringToHclTerraform(this._hsSecurityTls11Score),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_tls12_score: {
        value: cdktf.stringToHclTerraform(this._hsSecurityTls12Score),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_tls13_score: {
        value: cdktf.stringToHclTerraform(this._hsSecurityTls13Score),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hs_security_weak_signature_algo_penalty: {
        value: cdktf.stringToHclTerraform(this._hsSecurityWeakSignatureAlgoPenalty),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ondemand_metrics_idle_timeout: {
        value: cdktf.stringToHclTerraform(this._ondemandMetricsIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resp_code_block: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._respCodeBlock),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sip_log_depth: {
        value: cdktf.stringToHclTerraform(this._sipLogDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
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
      client_log_config: {
        value: cdktf.listMapperHcl(analyticsprofileClientLogConfigToHclTerraform, true)(this._clientLogConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AnalyticsprofileClientLogConfigList",
      },
      client_log_streaming_config: {
        value: cdktf.listMapperHcl(analyticsprofileClientLogStreamingConfigToHclTerraform, true)(this._clientLogStreamingConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AnalyticsprofileClientLogStreamingConfigList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(analyticsprofileConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AnalyticsprofileConfigpbAttributesList",
      },
      latency_audit_props: {
        value: cdktf.listMapperHcl(analyticsprofileLatencyAuditPropsToHclTerraform, true)(this._latencyAuditProps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AnalyticsprofileLatencyAuditPropsList",
      },
      markers: {
        value: cdktf.listMapperHcl(analyticsprofileMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AnalyticsprofileMarkersList",
      },
      ranges: {
        value: cdktf.listMapperHcl(analyticsprofileRangesToHclTerraform, true)(this._ranges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AnalyticsprofileRangesList",
      },
      sensitive_log_profile: {
        value: cdktf.listMapperHcl(analyticsprofileSensitiveLogProfileToHclTerraform, true)(this._sensitiveLogProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AnalyticsprofileSensitiveLogProfileList",
      },
      time_tracker_props: {
        value: cdktf.listMapperHcl(analyticsprofileTimeTrackerPropsToHclTerraform, true)(this._timeTrackerProps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AnalyticsprofileTimeTrackerPropsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
