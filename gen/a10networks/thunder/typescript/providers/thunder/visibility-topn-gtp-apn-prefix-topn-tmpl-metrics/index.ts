// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityTopnGtpApnPrefixTopnTmplMetricsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Track Top-N entities for Downlink Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#downlink_bytes VisibilityTopnGtpApnPrefixTopnTmplMetricsA#downlink_bytes}
  */
  readonly downlinkBytes?: number;
  /**
  * Track Top-N entities for Downlink Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#downlink_pkts VisibilityTopnGtpApnPrefixTopnTmplMetricsA#downlink_pkts}
  */
  readonly downlinkPkts?: number;
  /**
  * Track Top-N entities for Filtering Drop: APN IMSI Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_flt_apn_filtering VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_flt_apn_filtering}
  */
  readonly dropFltApnFiltering?: number;
  /**
  * Track Top-N entities for Filtering Drop: GTP in GTP Tunnel Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_flt_gtp_in_gtp VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_flt_gtp_in_gtp}
  */
  readonly dropFltGtpInGtp?: number;
  /**
  * Track Top-N entities for Filtering Drop: Message Type Not Permitted on Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_flt_message_filtering VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_flt_message_filtering}
  */
  readonly dropFltMessageFiltering?: number;
  /**
  * Track Top-N entities for Filtering Drop: MSISDN Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_flt_msisdn_filtering VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_flt_msisdn_filtering}
  */
  readonly dropFltMsisdnFiltering?: number;
  /**
  * Track Top-N entities for Filtering Drop: RAT Type Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_flt_rat_type_filtering VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_flt_rat_type_filtering}
  */
  readonly dropFltRatTypeFiltering?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: GTP-U Downlink byte rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_u_downlink_byte VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_u_downlink_byte}
  */
  readonly dropRlGtpUDownlinkByte?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: GTP-U Downlink packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_u_downlink_packet VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_u_downlink_packet}
  */
  readonly dropRlGtpUDownlinkPacket?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: GTP-U Concurrent Tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_u_max_concurrent_tunnels VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_u_max_concurrent_tunnels}
  */
  readonly dropRlGtpUMaxConcurrentTunnels?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: GTP-U Total byte rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_u_total_byte VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_u_total_byte}
  */
  readonly dropRlGtpUTotalByte?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: GTP-U Total packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_u_total_packet VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_u_total_packet}
  */
  readonly dropRlGtpUTotalPacket?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: GTP-U Tunnel Creation rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_u_tunnel_create VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_u_tunnel_create}
  */
  readonly dropRlGtpUTunnelCreate?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: GTP-U Uplink byte rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_u_uplink_byte VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_u_uplink_byte}
  */
  readonly dropRlGtpUUplinkByte?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: GTP-U Uplink packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_u_uplink_packet VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_u_uplink_packet}
  */
  readonly dropRlGtpUUplinkPacket?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: Maximum GTPv0-C messages rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_v0_c_agg VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_v0_c_agg}
  */
  readonly dropRlGtpV0CAgg?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: Maximum GTPv1-C messages rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_v1_c_agg VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_v1_c_agg}
  */
  readonly dropRlGtpV1CAgg?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: GTPv1-C Create PDP Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_v1_c_create_pdp_request VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_v1_c_create_pdp_request}
  */
  readonly dropRlGtpV1CCreatePdpRequest?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: GTPv1-C Update PDP Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_v1_c_update_pdp_request VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_v1_c_update_pdp_request}
  */
  readonly dropRlGtpV1CUpdatePdpRequest?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: Maximum GTPv2-C messages rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_v2_c_agg VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_v2_c_agg}
  */
  readonly dropRlGtpV2CAgg?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: GTPv2-C Create Session Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_v2_c_create_session_request VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_v2_c_create_session_request}
  */
  readonly dropRlGtpV2CCreateSessionRequest?: number;
  /**
  * Track Top-N entities for Rate-limit Drop: GTPv2-C Modify Bearer Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_rl_gtp_v2_c_modify_bearer_request VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_rl_gtp_v2_c_modify_bearer_request}
  */
  readonly dropRlGtpV2CModifyBearerRequest?: number;
  /**
  * Track Top-N entities for Validation Drop: Country Code Mismatch in IMSI and MSISDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_country_code_mismatch VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_country_code_mismatch}
  */
  readonly dropVldCountryCodeMismatch?: number;
  /**
  * Track Top-N entities for Validation Drop: Cross Layer IP Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_cross_layer_correlation VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_cross_layer_correlation}
  */
  readonly dropVldCrossLayerCorrelation?: number;
  /**
  * Track Top-N entities for Validation Drop: GTP Bearer count exceeded max (11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_gtp_bearer_count_exceed VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_gtp_bearer_count_exceed}
  */
  readonly dropVldGtpBearerCountExceed?: number;
  /**
  * Track Top-N entities for Validation Drop: GTP-C Invalid APN Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_gtp_invalid_apn_len_drop VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_gtp_invalid_apn_len_drop}
  */
  readonly dropVldGtpInvalidApnLenDrop?: number;
  /**
  * Track Top-N entities for Validation Drop: GTP-C Invalid IMSI Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_gtp_invalid_imsi_len_drop VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_gtp_invalid_imsi_len_drop}
  */
  readonly dropVldGtpInvalidImsiLenDrop?: number;
  /**
  * Track Top-N entities for Validation Drop: GTP-U IP Address Spoofed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_gtp_u_spoofed_source_address VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_gtp_u_spoofed_source_address}
  */
  readonly dropVldGtpUSpoofedSourceAddress?: number;
  /**
  * Track Top-N entities for Validation Drop: GTPV2-C Wrong LBI in Create Bearer Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_gtp_v2_wrong_lbi_create_bearer VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_gtp_v2_wrong_lbi_create_bearer}
  */
  readonly dropVldGtpV2WrongLbiCreateBearer?: number;
  /**
  * Track Top-N entities for Validation Drop: GTPV0-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_gtpv0_seqnum_buffer_full VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_gtpv0_seqnum_buffer_full}
  */
  readonly dropVldGtpv0SeqnumBufferFull?: number;
  /**
  * Track Top-N entities for Validation Drop: GTPV1-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_gtpv1_seqnum_buffer_full VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_gtpv1_seqnum_buffer_full}
  */
  readonly dropVldGtpv1SeqnumBufferFull?: number;
  /**
  * Track Top-N entities for Validation Drop: GTPV2-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_gtpv2_seqnum_buffer_full VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_gtpv2_seqnum_buffer_full}
  */
  readonly dropVldGtpv2SeqnumBufferFull?: number;
  /**
  * Track Top-N entities for Validation Drop: Invalid Flow Label in GTPv0-C Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_invalid_flow_label_v0 VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_invalid_flow_label_v0}
  */
  readonly dropVldInvalidFlowLabelV0?: number;
  /**
  * Track Top-N entities for Validation Drop: Piggyback message invalid packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_invalid_pkt_len_piggyback VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_invalid_pkt_len_piggyback}
  */
  readonly dropVldInvalidPktLenPiggyback?: number;
  /**
  * Track Top-N entities for Validation Drop: Invalid TEID Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_invalid_teid VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_invalid_teid}
  */
  readonly dropVldInvalidTeid?: number;
  /**
  * Track Top-N entities for Validation Drop: Mandatory IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_mandatory_information_element VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_mandatory_information_element}
  */
  readonly dropVldMandatoryInformationElement?: number;
  /**
  * Track Top-N entities for Validation Drop: Message Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_message_length VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_message_length}
  */
  readonly dropVldMessageLength?: number;
  /**
  * Track Top-N entities for Validation Drop: GTPv1-C Message Out of Order IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_out_of_order_ie VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_out_of_order_ie}
  */
  readonly dropVldOutOfOrderIe?: number;
  /**
  * Track Top-N entities for Validation Drop: Out Of State GTP Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_out_of_state VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_out_of_state}
  */
  readonly dropVldOutOfState?: number;
  /**
  * Track Top-N entities for Validation Drop: Unexpected IE Present in Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_out_of_state_ie VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_out_of_state_ie}
  */
  readonly dropVldOutOfStateIe?: number;
  /**
  * Track Top-N entities for Validation Drop: Protocol flag in Header Field not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_protocol_flag_unset VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_protocol_flag_unset}
  */
  readonly dropVldProtocolFlagUnset?: number;
  /**
  * Track Top-N entities for Validation Drop: Reserved Header Field Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_reserved_field_set VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_reserved_field_set}
  */
  readonly dropVldReservedFieldSet?: number;
  /**
  * Track Top-N entities for Validation Drop: Reserved IE Field Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_reserved_information_element VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_reserved_information_element}
  */
  readonly dropVldReservedInformationElement?: number;
  /**
  * Track Top-N entities for Validation Drop: piggyback message anomaly failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_sanity_failed_piggyback VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_sanity_failed_piggyback}
  */
  readonly dropVldSanityFailedPiggyback?: number;
  /**
  * Track Top-N entities for Validation Drop: GTP-C Sequence number Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_sequence_num_correlation VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_sequence_num_correlation}
  */
  readonly dropVldSequenceNumCorrelation?: number;
  /**
  * Track Top-N entities for Validation Drop: Tunnel Header Flag Not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_tunnel_id_flag VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_tunnel_id_flag}
  */
  readonly dropVldTunnelIdFlag?: number;
  /**
  * Track Top-N entities for Validation Drop: Message type not supported by GTP Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_unsupported_message_type VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_unsupported_message_type}
  */
  readonly dropVldUnsupportedMessageType?: number;
  /**
  * Track Top-N entities for Validation Drop: Invalid GTP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#drop_vld_version_not_supported VisibilityTopnGtpApnPrefixTopnTmplMetricsA#drop_vld_version_not_supported}
  */
  readonly dropVldVersionNotSupported?: number;
  /**
  * Track Top-N entities for GTP-C matching a conn with Handover In Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_c_handover_in_progress_with_conn VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_c_handover_in_progress_with_conn}
  */
  readonly gtpCHandoverInProgressWithConn?: number;
  /**
  * Track Top-N entities for GTP Path Management Messages Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_path_management_message VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_path_management_message}
  */
  readonly gtpPathManagementMessage?: number;
  /**
  * Track Top-N entities for GTP-U Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_u_tunnel_created VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_u_tunnel_created}
  */
  readonly gtpUTunnelCreated?: number;
  /**
  * Track Top-N entities for GTP-U Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_u_tunnel_deleted VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_u_tunnel_deleted}
  */
  readonly gtpUTunnelDeleted?: number;
  /**
  * Track Top-N entities for GTPV0-C Create PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v0_c_create_pdp_resp_unsuccess VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v0_c_create_pdp_resp_unsuccess}
  */
  readonly gtpV0CCreatePdpRespUnsuccess?: number;
  /**
  * Track Top-N entities for GTPv0-C Half open tunnel closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v0_c_half_open_tunnel_closed VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v0_c_half_open_tunnel_closed}
  */
  readonly gtpV0CHalfOpenTunnelClosed?: number;
  /**
  * Track Top-N entities for GTPv0-C Tunnel Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v0_c_tunnel_closed VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v0_c_tunnel_closed}
  */
  readonly gtpV0CTunnelClosed?: number;
  /**
  * Track Top-N entities for GTPv0-C Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v0_c_tunnel_created VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v0_c_tunnel_created}
  */
  readonly gtpV0CTunnelCreated?: number;
  /**
  * Track Top-N entities for GTPv0-C Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v0_c_tunnel_deleted VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v0_c_tunnel_deleted}
  */
  readonly gtpV0CTunnelDeleted?: number;
  /**
  * Track Top-N entities for GTPv0-C Tunnel Deleted with Restart/failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v0_c_tunnel_deleted_restart VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v0_c_tunnel_deleted_restart}
  */
  readonly gtpV0CTunnelDeletedRestart?: number;
  /**
  * Track Top-N entities for GTPv0-C Tunnel Delete Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v0_c_tunnel_half_closed VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v0_c_tunnel_half_closed}
  */
  readonly gtpV0CTunnelHalfClosed?: number;
  /**
  * Track Top-N entities for GTPv0-C Half open tunnel created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v0_c_tunnel_half_open VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v0_c_tunnel_half_open}
  */
  readonly gtpV0CTunnelHalfOpen?: number;
  /**
  * Track Top-N entities for GTPV0-C Update PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v0_c_update_pdp_resp_unsuccess VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v0_c_update_pdp_resp_unsuccess}
  */
  readonly gtpV0CUpdatePdpRespUnsuccess?: number;
  /**
  * Track Top-N entities for GTPV1-C Create PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v1_c_create_pdp_resp_unsuccess VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v1_c_create_pdp_resp_unsuccess}
  */
  readonly gtpV1CCreatePdpRespUnsuccess?: number;
  /**
  * Track Top-N entities for GTPv1-C Half open tunnel closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v1_c_half_open_tunnel_closed VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v1_c_half_open_tunnel_closed}
  */
  readonly gtpV1CHalfOpenTunnelClosed?: number;
  /**
  * Track Top-N entities for GTPv1-C Tunnel Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v1_c_tunnel_closed VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v1_c_tunnel_closed}
  */
  readonly gtpV1CTunnelClosed?: number;
  /**
  * Track Top-N entities for GTPv1-C Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v1_c_tunnel_created VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v1_c_tunnel_created}
  */
  readonly gtpV1CTunnelCreated?: number;
  /**
  * Track Top-N entities for GTPv1-C Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v1_c_tunnel_deleted VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v1_c_tunnel_deleted}
  */
  readonly gtpV1CTunnelDeleted?: number;
  /**
  * Track Top-N entities for GTPv1-C Tunnel Deleted with Restart/failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v1_c_tunnel_deleted_restart VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v1_c_tunnel_deleted_restart}
  */
  readonly gtpV1CTunnelDeletedRestart?: number;
  /**
  * Track Top-N entities for GTPv1-C Tunnel Delete Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v1_c_tunnel_half_closed VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v1_c_tunnel_half_closed}
  */
  readonly gtpV1CTunnelHalfClosed?: number;
  /**
  * Track Top-N entities for GTPv1-C Half open tunnel created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v1_c_tunnel_half_open VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v1_c_tunnel_half_open}
  */
  readonly gtpV1CTunnelHalfOpen?: number;
  /**
  * Track Top-N entities for GTPV1-C Update PDP Context response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v1_c_update_pdp_resp_unsuccess VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v1_c_update_pdp_resp_unsuccess}
  */
  readonly gtpV1CUpdatePdpRespUnsuccess?: number;
  /**
  * Track Top-N entities for GTPV2-C Create Session Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v2_c_create_sess_resp_unsuccess VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v2_c_create_sess_resp_unsuccess}
  */
  readonly gtpV2CCreateSessRespUnsuccess?: number;
  /**
  * Track Top-N entities for GTPv2-C Half open tunnel closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v2_c_half_open_tunnel_closed VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v2_c_half_open_tunnel_closed}
  */
  readonly gtpV2CHalfOpenTunnelClosed?: number;
  /**
  * Track Top-N entities for GTPV2-C Modify Bearer Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v2_c_mod_bearer_resp_unsuccess VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v2_c_mod_bearer_resp_unsuccess}
  */
  readonly gtpV2CModBearerRespUnsuccess?: number;
  /**
  * Track Top-N entities for GTPv2-C Piggyback Messages seen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v2_c_piggyback_message VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v2_c_piggyback_message}
  */
  readonly gtpV2CPiggybackMessage?: number;
  /**
  * Track Top-N entities for GTPv2-C Tunnel Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v2_c_tunnel_closed VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v2_c_tunnel_closed}
  */
  readonly gtpV2CTunnelClosed?: number;
  /**
  * Track Top-N entities for GTPv2-C Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v2_c_tunnel_created VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v2_c_tunnel_created}
  */
  readonly gtpV2CTunnelCreated?: number;
  /**
  * Track Top-N entities for GTPv2-C Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v2_c_tunnel_deleted VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v2_c_tunnel_deleted}
  */
  readonly gtpV2CTunnelDeleted?: number;
  /**
  * Track Top-N entities for GTPv2-C Tunnel Deleted with Restart/failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v2_c_tunnel_deleted_restart VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v2_c_tunnel_deleted_restart}
  */
  readonly gtpV2CTunnelDeletedRestart?: number;
  /**
  * Track Top-N entities for GTPv2-C Tunnel Delete Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v2_c_tunnel_half_closed VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v2_c_tunnel_half_closed}
  */
  readonly gtpV2CTunnelHalfClosed?: number;
  /**
  * Track Top-N entities for GTPv2-C Half open tunnel created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#gtp_v2_c_tunnel_half_open VisibilityTopnGtpApnPrefixTopnTmplMetricsA#gtp_v2_c_tunnel_half_open}
  */
  readonly gtpV2CTunnelHalfOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#id VisibilityTopnGtpApnPrefixTopnTmplMetricsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#name VisibilityTopnGtpApnPrefixTopnTmplMetricsA#name}
  */
  readonly name: string;
  /**
  * Track Top-N entities for Uplink Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#uplink_bytes VisibilityTopnGtpApnPrefixTopnTmplMetricsA#uplink_bytes}
  */
  readonly uplinkBytes?: number;
  /**
  * Track Top-N entities for Uplink Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#uplink_pkts VisibilityTopnGtpApnPrefixTopnTmplMetricsA#uplink_pkts}
  */
  readonly uplinkPkts?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#uuid VisibilityTopnGtpApnPrefixTopnTmplMetricsA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics thunder_visibility_topn_gtp_apn_prefix_topn_tmpl_metrics}
*/
export class VisibilityTopnGtpApnPrefixTopnTmplMetricsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_topn_gtp_apn_prefix_topn_tmpl_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityTopnGtpApnPrefixTopnTmplMetricsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityTopnGtpApnPrefixTopnTmplMetricsA to import
  * @param importFromId The id of the existing VisibilityTopnGtpApnPrefixTopnTmplMetricsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityTopnGtpApnPrefixTopnTmplMetricsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_topn_gtp_apn_prefix_topn_tmpl_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_topn_gtp_apn_prefix_topn_tmpl_metrics thunder_visibility_topn_gtp_apn_prefix_topn_tmpl_metrics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityTopnGtpApnPrefixTopnTmplMetricsAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityTopnGtpApnPrefixTopnTmplMetricsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_topn_gtp_apn_prefix_topn_tmpl_metrics',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._downlinkBytes = config.downlinkBytes;
    this._downlinkPkts = config.downlinkPkts;
    this._dropFltApnFiltering = config.dropFltApnFiltering;
    this._dropFltGtpInGtp = config.dropFltGtpInGtp;
    this._dropFltMessageFiltering = config.dropFltMessageFiltering;
    this._dropFltMsisdnFiltering = config.dropFltMsisdnFiltering;
    this._dropFltRatTypeFiltering = config.dropFltRatTypeFiltering;
    this._dropRlGtpUDownlinkByte = config.dropRlGtpUDownlinkByte;
    this._dropRlGtpUDownlinkPacket = config.dropRlGtpUDownlinkPacket;
    this._dropRlGtpUMaxConcurrentTunnels = config.dropRlGtpUMaxConcurrentTunnels;
    this._dropRlGtpUTotalByte = config.dropRlGtpUTotalByte;
    this._dropRlGtpUTotalPacket = config.dropRlGtpUTotalPacket;
    this._dropRlGtpUTunnelCreate = config.dropRlGtpUTunnelCreate;
    this._dropRlGtpUUplinkByte = config.dropRlGtpUUplinkByte;
    this._dropRlGtpUUplinkPacket = config.dropRlGtpUUplinkPacket;
    this._dropRlGtpV0CAgg = config.dropRlGtpV0CAgg;
    this._dropRlGtpV1CAgg = config.dropRlGtpV1CAgg;
    this._dropRlGtpV1CCreatePdpRequest = config.dropRlGtpV1CCreatePdpRequest;
    this._dropRlGtpV1CUpdatePdpRequest = config.dropRlGtpV1CUpdatePdpRequest;
    this._dropRlGtpV2CAgg = config.dropRlGtpV2CAgg;
    this._dropRlGtpV2CCreateSessionRequest = config.dropRlGtpV2CCreateSessionRequest;
    this._dropRlGtpV2CModifyBearerRequest = config.dropRlGtpV2CModifyBearerRequest;
    this._dropVldCountryCodeMismatch = config.dropVldCountryCodeMismatch;
    this._dropVldCrossLayerCorrelation = config.dropVldCrossLayerCorrelation;
    this._dropVldGtpBearerCountExceed = config.dropVldGtpBearerCountExceed;
    this._dropVldGtpInvalidApnLenDrop = config.dropVldGtpInvalidApnLenDrop;
    this._dropVldGtpInvalidImsiLenDrop = config.dropVldGtpInvalidImsiLenDrop;
    this._dropVldGtpUSpoofedSourceAddress = config.dropVldGtpUSpoofedSourceAddress;
    this._dropVldGtpV2WrongLbiCreateBearer = config.dropVldGtpV2WrongLbiCreateBearer;
    this._dropVldGtpv0SeqnumBufferFull = config.dropVldGtpv0SeqnumBufferFull;
    this._dropVldGtpv1SeqnumBufferFull = config.dropVldGtpv1SeqnumBufferFull;
    this._dropVldGtpv2SeqnumBufferFull = config.dropVldGtpv2SeqnumBufferFull;
    this._dropVldInvalidFlowLabelV0 = config.dropVldInvalidFlowLabelV0;
    this._dropVldInvalidPktLenPiggyback = config.dropVldInvalidPktLenPiggyback;
    this._dropVldInvalidTeid = config.dropVldInvalidTeid;
    this._dropVldMandatoryInformationElement = config.dropVldMandatoryInformationElement;
    this._dropVldMessageLength = config.dropVldMessageLength;
    this._dropVldOutOfOrderIe = config.dropVldOutOfOrderIe;
    this._dropVldOutOfState = config.dropVldOutOfState;
    this._dropVldOutOfStateIe = config.dropVldOutOfStateIe;
    this._dropVldProtocolFlagUnset = config.dropVldProtocolFlagUnset;
    this._dropVldReservedFieldSet = config.dropVldReservedFieldSet;
    this._dropVldReservedInformationElement = config.dropVldReservedInformationElement;
    this._dropVldSanityFailedPiggyback = config.dropVldSanityFailedPiggyback;
    this._dropVldSequenceNumCorrelation = config.dropVldSequenceNumCorrelation;
    this._dropVldTunnelIdFlag = config.dropVldTunnelIdFlag;
    this._dropVldUnsupportedMessageType = config.dropVldUnsupportedMessageType;
    this._dropVldVersionNotSupported = config.dropVldVersionNotSupported;
    this._gtpCHandoverInProgressWithConn = config.gtpCHandoverInProgressWithConn;
    this._gtpPathManagementMessage = config.gtpPathManagementMessage;
    this._gtpUTunnelCreated = config.gtpUTunnelCreated;
    this._gtpUTunnelDeleted = config.gtpUTunnelDeleted;
    this._gtpV0CCreatePdpRespUnsuccess = config.gtpV0CCreatePdpRespUnsuccess;
    this._gtpV0CHalfOpenTunnelClosed = config.gtpV0CHalfOpenTunnelClosed;
    this._gtpV0CTunnelClosed = config.gtpV0CTunnelClosed;
    this._gtpV0CTunnelCreated = config.gtpV0CTunnelCreated;
    this._gtpV0CTunnelDeleted = config.gtpV0CTunnelDeleted;
    this._gtpV0CTunnelDeletedRestart = config.gtpV0CTunnelDeletedRestart;
    this._gtpV0CTunnelHalfClosed = config.gtpV0CTunnelHalfClosed;
    this._gtpV0CTunnelHalfOpen = config.gtpV0CTunnelHalfOpen;
    this._gtpV0CUpdatePdpRespUnsuccess = config.gtpV0CUpdatePdpRespUnsuccess;
    this._gtpV1CCreatePdpRespUnsuccess = config.gtpV1CCreatePdpRespUnsuccess;
    this._gtpV1CHalfOpenTunnelClosed = config.gtpV1CHalfOpenTunnelClosed;
    this._gtpV1CTunnelClosed = config.gtpV1CTunnelClosed;
    this._gtpV1CTunnelCreated = config.gtpV1CTunnelCreated;
    this._gtpV1CTunnelDeleted = config.gtpV1CTunnelDeleted;
    this._gtpV1CTunnelDeletedRestart = config.gtpV1CTunnelDeletedRestart;
    this._gtpV1CTunnelHalfClosed = config.gtpV1CTunnelHalfClosed;
    this._gtpV1CTunnelHalfOpen = config.gtpV1CTunnelHalfOpen;
    this._gtpV1CUpdatePdpRespUnsuccess = config.gtpV1CUpdatePdpRespUnsuccess;
    this._gtpV2CCreateSessRespUnsuccess = config.gtpV2CCreateSessRespUnsuccess;
    this._gtpV2CHalfOpenTunnelClosed = config.gtpV2CHalfOpenTunnelClosed;
    this._gtpV2CModBearerRespUnsuccess = config.gtpV2CModBearerRespUnsuccess;
    this._gtpV2CPiggybackMessage = config.gtpV2CPiggybackMessage;
    this._gtpV2CTunnelClosed = config.gtpV2CTunnelClosed;
    this._gtpV2CTunnelCreated = config.gtpV2CTunnelCreated;
    this._gtpV2CTunnelDeleted = config.gtpV2CTunnelDeleted;
    this._gtpV2CTunnelDeletedRestart = config.gtpV2CTunnelDeletedRestart;
    this._gtpV2CTunnelHalfClosed = config.gtpV2CTunnelHalfClosed;
    this._gtpV2CTunnelHalfOpen = config.gtpV2CTunnelHalfOpen;
    this._id = config.id;
    this._name = config.name;
    this._uplinkBytes = config.uplinkBytes;
    this._uplinkPkts = config.uplinkPkts;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // downlink_bytes - computed: false, optional: true, required: false
  private _downlinkBytes?: number; 
  public get downlinkBytes() {
    return this.getNumberAttribute('downlink_bytes');
  }
  public set downlinkBytes(value: number) {
    this._downlinkBytes = value;
  }
  public resetDownlinkBytes() {
    this._downlinkBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkBytesInput() {
    return this._downlinkBytes;
  }

  // downlink_pkts - computed: false, optional: true, required: false
  private _downlinkPkts?: number; 
  public get downlinkPkts() {
    return this.getNumberAttribute('downlink_pkts');
  }
  public set downlinkPkts(value: number) {
    this._downlinkPkts = value;
  }
  public resetDownlinkPkts() {
    this._downlinkPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkPktsInput() {
    return this._downlinkPkts;
  }

  // drop_flt_apn_filtering - computed: false, optional: true, required: false
  private _dropFltApnFiltering?: number; 
  public get dropFltApnFiltering() {
    return this.getNumberAttribute('drop_flt_apn_filtering');
  }
  public set dropFltApnFiltering(value: number) {
    this._dropFltApnFiltering = value;
  }
  public resetDropFltApnFiltering() {
    this._dropFltApnFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFltApnFilteringInput() {
    return this._dropFltApnFiltering;
  }

  // drop_flt_gtp_in_gtp - computed: false, optional: true, required: false
  private _dropFltGtpInGtp?: number; 
  public get dropFltGtpInGtp() {
    return this.getNumberAttribute('drop_flt_gtp_in_gtp');
  }
  public set dropFltGtpInGtp(value: number) {
    this._dropFltGtpInGtp = value;
  }
  public resetDropFltGtpInGtp() {
    this._dropFltGtpInGtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFltGtpInGtpInput() {
    return this._dropFltGtpInGtp;
  }

  // drop_flt_message_filtering - computed: false, optional: true, required: false
  private _dropFltMessageFiltering?: number; 
  public get dropFltMessageFiltering() {
    return this.getNumberAttribute('drop_flt_message_filtering');
  }
  public set dropFltMessageFiltering(value: number) {
    this._dropFltMessageFiltering = value;
  }
  public resetDropFltMessageFiltering() {
    this._dropFltMessageFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFltMessageFilteringInput() {
    return this._dropFltMessageFiltering;
  }

  // drop_flt_msisdn_filtering - computed: false, optional: true, required: false
  private _dropFltMsisdnFiltering?: number; 
  public get dropFltMsisdnFiltering() {
    return this.getNumberAttribute('drop_flt_msisdn_filtering');
  }
  public set dropFltMsisdnFiltering(value: number) {
    this._dropFltMsisdnFiltering = value;
  }
  public resetDropFltMsisdnFiltering() {
    this._dropFltMsisdnFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFltMsisdnFilteringInput() {
    return this._dropFltMsisdnFiltering;
  }

  // drop_flt_rat_type_filtering - computed: false, optional: true, required: false
  private _dropFltRatTypeFiltering?: number; 
  public get dropFltRatTypeFiltering() {
    return this.getNumberAttribute('drop_flt_rat_type_filtering');
  }
  public set dropFltRatTypeFiltering(value: number) {
    this._dropFltRatTypeFiltering = value;
  }
  public resetDropFltRatTypeFiltering() {
    this._dropFltRatTypeFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFltRatTypeFilteringInput() {
    return this._dropFltRatTypeFiltering;
  }

  // drop_rl_gtp_u_downlink_byte - computed: false, optional: true, required: false
  private _dropRlGtpUDownlinkByte?: number; 
  public get dropRlGtpUDownlinkByte() {
    return this.getNumberAttribute('drop_rl_gtp_u_downlink_byte');
  }
  public set dropRlGtpUDownlinkByte(value: number) {
    this._dropRlGtpUDownlinkByte = value;
  }
  public resetDropRlGtpUDownlinkByte() {
    this._dropRlGtpUDownlinkByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpUDownlinkByteInput() {
    return this._dropRlGtpUDownlinkByte;
  }

  // drop_rl_gtp_u_downlink_packet - computed: false, optional: true, required: false
  private _dropRlGtpUDownlinkPacket?: number; 
  public get dropRlGtpUDownlinkPacket() {
    return this.getNumberAttribute('drop_rl_gtp_u_downlink_packet');
  }
  public set dropRlGtpUDownlinkPacket(value: number) {
    this._dropRlGtpUDownlinkPacket = value;
  }
  public resetDropRlGtpUDownlinkPacket() {
    this._dropRlGtpUDownlinkPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpUDownlinkPacketInput() {
    return this._dropRlGtpUDownlinkPacket;
  }

  // drop_rl_gtp_u_max_concurrent_tunnels - computed: false, optional: true, required: false
  private _dropRlGtpUMaxConcurrentTunnels?: number; 
  public get dropRlGtpUMaxConcurrentTunnels() {
    return this.getNumberAttribute('drop_rl_gtp_u_max_concurrent_tunnels');
  }
  public set dropRlGtpUMaxConcurrentTunnels(value: number) {
    this._dropRlGtpUMaxConcurrentTunnels = value;
  }
  public resetDropRlGtpUMaxConcurrentTunnels() {
    this._dropRlGtpUMaxConcurrentTunnels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpUMaxConcurrentTunnelsInput() {
    return this._dropRlGtpUMaxConcurrentTunnels;
  }

  // drop_rl_gtp_u_total_byte - computed: false, optional: true, required: false
  private _dropRlGtpUTotalByte?: number; 
  public get dropRlGtpUTotalByte() {
    return this.getNumberAttribute('drop_rl_gtp_u_total_byte');
  }
  public set dropRlGtpUTotalByte(value: number) {
    this._dropRlGtpUTotalByte = value;
  }
  public resetDropRlGtpUTotalByte() {
    this._dropRlGtpUTotalByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpUTotalByteInput() {
    return this._dropRlGtpUTotalByte;
  }

  // drop_rl_gtp_u_total_packet - computed: false, optional: true, required: false
  private _dropRlGtpUTotalPacket?: number; 
  public get dropRlGtpUTotalPacket() {
    return this.getNumberAttribute('drop_rl_gtp_u_total_packet');
  }
  public set dropRlGtpUTotalPacket(value: number) {
    this._dropRlGtpUTotalPacket = value;
  }
  public resetDropRlGtpUTotalPacket() {
    this._dropRlGtpUTotalPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpUTotalPacketInput() {
    return this._dropRlGtpUTotalPacket;
  }

  // drop_rl_gtp_u_tunnel_create - computed: false, optional: true, required: false
  private _dropRlGtpUTunnelCreate?: number; 
  public get dropRlGtpUTunnelCreate() {
    return this.getNumberAttribute('drop_rl_gtp_u_tunnel_create');
  }
  public set dropRlGtpUTunnelCreate(value: number) {
    this._dropRlGtpUTunnelCreate = value;
  }
  public resetDropRlGtpUTunnelCreate() {
    this._dropRlGtpUTunnelCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpUTunnelCreateInput() {
    return this._dropRlGtpUTunnelCreate;
  }

  // drop_rl_gtp_u_uplink_byte - computed: false, optional: true, required: false
  private _dropRlGtpUUplinkByte?: number; 
  public get dropRlGtpUUplinkByte() {
    return this.getNumberAttribute('drop_rl_gtp_u_uplink_byte');
  }
  public set dropRlGtpUUplinkByte(value: number) {
    this._dropRlGtpUUplinkByte = value;
  }
  public resetDropRlGtpUUplinkByte() {
    this._dropRlGtpUUplinkByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpUUplinkByteInput() {
    return this._dropRlGtpUUplinkByte;
  }

  // drop_rl_gtp_u_uplink_packet - computed: false, optional: true, required: false
  private _dropRlGtpUUplinkPacket?: number; 
  public get dropRlGtpUUplinkPacket() {
    return this.getNumberAttribute('drop_rl_gtp_u_uplink_packet');
  }
  public set dropRlGtpUUplinkPacket(value: number) {
    this._dropRlGtpUUplinkPacket = value;
  }
  public resetDropRlGtpUUplinkPacket() {
    this._dropRlGtpUUplinkPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpUUplinkPacketInput() {
    return this._dropRlGtpUUplinkPacket;
  }

  // drop_rl_gtp_v0_c_agg - computed: false, optional: true, required: false
  private _dropRlGtpV0CAgg?: number; 
  public get dropRlGtpV0CAgg() {
    return this.getNumberAttribute('drop_rl_gtp_v0_c_agg');
  }
  public set dropRlGtpV0CAgg(value: number) {
    this._dropRlGtpV0CAgg = value;
  }
  public resetDropRlGtpV0CAgg() {
    this._dropRlGtpV0CAgg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpV0CAggInput() {
    return this._dropRlGtpV0CAgg;
  }

  // drop_rl_gtp_v1_c_agg - computed: false, optional: true, required: false
  private _dropRlGtpV1CAgg?: number; 
  public get dropRlGtpV1CAgg() {
    return this.getNumberAttribute('drop_rl_gtp_v1_c_agg');
  }
  public set dropRlGtpV1CAgg(value: number) {
    this._dropRlGtpV1CAgg = value;
  }
  public resetDropRlGtpV1CAgg() {
    this._dropRlGtpV1CAgg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpV1CAggInput() {
    return this._dropRlGtpV1CAgg;
  }

  // drop_rl_gtp_v1_c_create_pdp_request - computed: false, optional: true, required: false
  private _dropRlGtpV1CCreatePdpRequest?: number; 
  public get dropRlGtpV1CCreatePdpRequest() {
    return this.getNumberAttribute('drop_rl_gtp_v1_c_create_pdp_request');
  }
  public set dropRlGtpV1CCreatePdpRequest(value: number) {
    this._dropRlGtpV1CCreatePdpRequest = value;
  }
  public resetDropRlGtpV1CCreatePdpRequest() {
    this._dropRlGtpV1CCreatePdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpV1CCreatePdpRequestInput() {
    return this._dropRlGtpV1CCreatePdpRequest;
  }

  // drop_rl_gtp_v1_c_update_pdp_request - computed: false, optional: true, required: false
  private _dropRlGtpV1CUpdatePdpRequest?: number; 
  public get dropRlGtpV1CUpdatePdpRequest() {
    return this.getNumberAttribute('drop_rl_gtp_v1_c_update_pdp_request');
  }
  public set dropRlGtpV1CUpdatePdpRequest(value: number) {
    this._dropRlGtpV1CUpdatePdpRequest = value;
  }
  public resetDropRlGtpV1CUpdatePdpRequest() {
    this._dropRlGtpV1CUpdatePdpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpV1CUpdatePdpRequestInput() {
    return this._dropRlGtpV1CUpdatePdpRequest;
  }

  // drop_rl_gtp_v2_c_agg - computed: false, optional: true, required: false
  private _dropRlGtpV2CAgg?: number; 
  public get dropRlGtpV2CAgg() {
    return this.getNumberAttribute('drop_rl_gtp_v2_c_agg');
  }
  public set dropRlGtpV2CAgg(value: number) {
    this._dropRlGtpV2CAgg = value;
  }
  public resetDropRlGtpV2CAgg() {
    this._dropRlGtpV2CAgg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpV2CAggInput() {
    return this._dropRlGtpV2CAgg;
  }

  // drop_rl_gtp_v2_c_create_session_request - computed: false, optional: true, required: false
  private _dropRlGtpV2CCreateSessionRequest?: number; 
  public get dropRlGtpV2CCreateSessionRequest() {
    return this.getNumberAttribute('drop_rl_gtp_v2_c_create_session_request');
  }
  public set dropRlGtpV2CCreateSessionRequest(value: number) {
    this._dropRlGtpV2CCreateSessionRequest = value;
  }
  public resetDropRlGtpV2CCreateSessionRequest() {
    this._dropRlGtpV2CCreateSessionRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpV2CCreateSessionRequestInput() {
    return this._dropRlGtpV2CCreateSessionRequest;
  }

  // drop_rl_gtp_v2_c_modify_bearer_request - computed: false, optional: true, required: false
  private _dropRlGtpV2CModifyBearerRequest?: number; 
  public get dropRlGtpV2CModifyBearerRequest() {
    return this.getNumberAttribute('drop_rl_gtp_v2_c_modify_bearer_request');
  }
  public set dropRlGtpV2CModifyBearerRequest(value: number) {
    this._dropRlGtpV2CModifyBearerRequest = value;
  }
  public resetDropRlGtpV2CModifyBearerRequest() {
    this._dropRlGtpV2CModifyBearerRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRlGtpV2CModifyBearerRequestInput() {
    return this._dropRlGtpV2CModifyBearerRequest;
  }

  // drop_vld_country_code_mismatch - computed: false, optional: true, required: false
  private _dropVldCountryCodeMismatch?: number; 
  public get dropVldCountryCodeMismatch() {
    return this.getNumberAttribute('drop_vld_country_code_mismatch');
  }
  public set dropVldCountryCodeMismatch(value: number) {
    this._dropVldCountryCodeMismatch = value;
  }
  public resetDropVldCountryCodeMismatch() {
    this._dropVldCountryCodeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldCountryCodeMismatchInput() {
    return this._dropVldCountryCodeMismatch;
  }

  // drop_vld_cross_layer_correlation - computed: false, optional: true, required: false
  private _dropVldCrossLayerCorrelation?: number; 
  public get dropVldCrossLayerCorrelation() {
    return this.getNumberAttribute('drop_vld_cross_layer_correlation');
  }
  public set dropVldCrossLayerCorrelation(value: number) {
    this._dropVldCrossLayerCorrelation = value;
  }
  public resetDropVldCrossLayerCorrelation() {
    this._dropVldCrossLayerCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldCrossLayerCorrelationInput() {
    return this._dropVldCrossLayerCorrelation;
  }

  // drop_vld_gtp_bearer_count_exceed - computed: false, optional: true, required: false
  private _dropVldGtpBearerCountExceed?: number; 
  public get dropVldGtpBearerCountExceed() {
    return this.getNumberAttribute('drop_vld_gtp_bearer_count_exceed');
  }
  public set dropVldGtpBearerCountExceed(value: number) {
    this._dropVldGtpBearerCountExceed = value;
  }
  public resetDropVldGtpBearerCountExceed() {
    this._dropVldGtpBearerCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpBearerCountExceedInput() {
    return this._dropVldGtpBearerCountExceed;
  }

  // drop_vld_gtp_invalid_apn_len_drop - computed: false, optional: true, required: false
  private _dropVldGtpInvalidApnLenDrop?: number; 
  public get dropVldGtpInvalidApnLenDrop() {
    return this.getNumberAttribute('drop_vld_gtp_invalid_apn_len_drop');
  }
  public set dropVldGtpInvalidApnLenDrop(value: number) {
    this._dropVldGtpInvalidApnLenDrop = value;
  }
  public resetDropVldGtpInvalidApnLenDrop() {
    this._dropVldGtpInvalidApnLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpInvalidApnLenDropInput() {
    return this._dropVldGtpInvalidApnLenDrop;
  }

  // drop_vld_gtp_invalid_imsi_len_drop - computed: false, optional: true, required: false
  private _dropVldGtpInvalidImsiLenDrop?: number; 
  public get dropVldGtpInvalidImsiLenDrop() {
    return this.getNumberAttribute('drop_vld_gtp_invalid_imsi_len_drop');
  }
  public set dropVldGtpInvalidImsiLenDrop(value: number) {
    this._dropVldGtpInvalidImsiLenDrop = value;
  }
  public resetDropVldGtpInvalidImsiLenDrop() {
    this._dropVldGtpInvalidImsiLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpInvalidImsiLenDropInput() {
    return this._dropVldGtpInvalidImsiLenDrop;
  }

  // drop_vld_gtp_u_spoofed_source_address - computed: false, optional: true, required: false
  private _dropVldGtpUSpoofedSourceAddress?: number; 
  public get dropVldGtpUSpoofedSourceAddress() {
    return this.getNumberAttribute('drop_vld_gtp_u_spoofed_source_address');
  }
  public set dropVldGtpUSpoofedSourceAddress(value: number) {
    this._dropVldGtpUSpoofedSourceAddress = value;
  }
  public resetDropVldGtpUSpoofedSourceAddress() {
    this._dropVldGtpUSpoofedSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpUSpoofedSourceAddressInput() {
    return this._dropVldGtpUSpoofedSourceAddress;
  }

  // drop_vld_gtp_v2_wrong_lbi_create_bearer - computed: false, optional: true, required: false
  private _dropVldGtpV2WrongLbiCreateBearer?: number; 
  public get dropVldGtpV2WrongLbiCreateBearer() {
    return this.getNumberAttribute('drop_vld_gtp_v2_wrong_lbi_create_bearer');
  }
  public set dropVldGtpV2WrongLbiCreateBearer(value: number) {
    this._dropVldGtpV2WrongLbiCreateBearer = value;
  }
  public resetDropVldGtpV2WrongLbiCreateBearer() {
    this._dropVldGtpV2WrongLbiCreateBearer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2WrongLbiCreateBearerInput() {
    return this._dropVldGtpV2WrongLbiCreateBearer;
  }

  // drop_vld_gtpv0_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv0SeqnumBufferFull?: number; 
  public get dropVldGtpv0SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv0_seqnum_buffer_full');
  }
  public set dropVldGtpv0SeqnumBufferFull(value: number) {
    this._dropVldGtpv0SeqnumBufferFull = value;
  }
  public resetDropVldGtpv0SeqnumBufferFull() {
    this._dropVldGtpv0SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv0SeqnumBufferFullInput() {
    return this._dropVldGtpv0SeqnumBufferFull;
  }

  // drop_vld_gtpv1_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv1SeqnumBufferFull?: number; 
  public get dropVldGtpv1SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv1_seqnum_buffer_full');
  }
  public set dropVldGtpv1SeqnumBufferFull(value: number) {
    this._dropVldGtpv1SeqnumBufferFull = value;
  }
  public resetDropVldGtpv1SeqnumBufferFull() {
    this._dropVldGtpv1SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv1SeqnumBufferFullInput() {
    return this._dropVldGtpv1SeqnumBufferFull;
  }

  // drop_vld_gtpv2_seqnum_buffer_full - computed: false, optional: true, required: false
  private _dropVldGtpv2SeqnumBufferFull?: number; 
  public get dropVldGtpv2SeqnumBufferFull() {
    return this.getNumberAttribute('drop_vld_gtpv2_seqnum_buffer_full');
  }
  public set dropVldGtpv2SeqnumBufferFull(value: number) {
    this._dropVldGtpv2SeqnumBufferFull = value;
  }
  public resetDropVldGtpv2SeqnumBufferFull() {
    this._dropVldGtpv2SeqnumBufferFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv2SeqnumBufferFullInput() {
    return this._dropVldGtpv2SeqnumBufferFull;
  }

  // drop_vld_invalid_flow_label_v0 - computed: false, optional: true, required: false
  private _dropVldInvalidFlowLabelV0?: number; 
  public get dropVldInvalidFlowLabelV0() {
    return this.getNumberAttribute('drop_vld_invalid_flow_label_v0');
  }
  public set dropVldInvalidFlowLabelV0(value: number) {
    this._dropVldInvalidFlowLabelV0 = value;
  }
  public resetDropVldInvalidFlowLabelV0() {
    this._dropVldInvalidFlowLabelV0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidFlowLabelV0Input() {
    return this._dropVldInvalidFlowLabelV0;
  }

  // drop_vld_invalid_pkt_len_piggyback - computed: false, optional: true, required: false
  private _dropVldInvalidPktLenPiggyback?: number; 
  public get dropVldInvalidPktLenPiggyback() {
    return this.getNumberAttribute('drop_vld_invalid_pkt_len_piggyback');
  }
  public set dropVldInvalidPktLenPiggyback(value: number) {
    this._dropVldInvalidPktLenPiggyback = value;
  }
  public resetDropVldInvalidPktLenPiggyback() {
    this._dropVldInvalidPktLenPiggyback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidPktLenPiggybackInput() {
    return this._dropVldInvalidPktLenPiggyback;
  }

  // drop_vld_invalid_teid - computed: false, optional: true, required: false
  private _dropVldInvalidTeid?: number; 
  public get dropVldInvalidTeid() {
    return this.getNumberAttribute('drop_vld_invalid_teid');
  }
  public set dropVldInvalidTeid(value: number) {
    this._dropVldInvalidTeid = value;
  }
  public resetDropVldInvalidTeid() {
    this._dropVldInvalidTeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldInvalidTeidInput() {
    return this._dropVldInvalidTeid;
  }

  // drop_vld_mandatory_information_element - computed: false, optional: true, required: false
  private _dropVldMandatoryInformationElement?: number; 
  public get dropVldMandatoryInformationElement() {
    return this.getNumberAttribute('drop_vld_mandatory_information_element');
  }
  public set dropVldMandatoryInformationElement(value: number) {
    this._dropVldMandatoryInformationElement = value;
  }
  public resetDropVldMandatoryInformationElement() {
    this._dropVldMandatoryInformationElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMandatoryInformationElementInput() {
    return this._dropVldMandatoryInformationElement;
  }

  // drop_vld_message_length - computed: false, optional: true, required: false
  private _dropVldMessageLength?: number; 
  public get dropVldMessageLength() {
    return this.getNumberAttribute('drop_vld_message_length');
  }
  public set dropVldMessageLength(value: number) {
    this._dropVldMessageLength = value;
  }
  public resetDropVldMessageLength() {
    this._dropVldMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldMessageLengthInput() {
    return this._dropVldMessageLength;
  }

  // drop_vld_out_of_order_ie - computed: false, optional: true, required: false
  private _dropVldOutOfOrderIe?: number; 
  public get dropVldOutOfOrderIe() {
    return this.getNumberAttribute('drop_vld_out_of_order_ie');
  }
  public set dropVldOutOfOrderIe(value: number) {
    this._dropVldOutOfOrderIe = value;
  }
  public resetDropVldOutOfOrderIe() {
    this._dropVldOutOfOrderIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfOrderIeInput() {
    return this._dropVldOutOfOrderIe;
  }

  // drop_vld_out_of_state - computed: false, optional: true, required: false
  private _dropVldOutOfState?: number; 
  public get dropVldOutOfState() {
    return this.getNumberAttribute('drop_vld_out_of_state');
  }
  public set dropVldOutOfState(value: number) {
    this._dropVldOutOfState = value;
  }
  public resetDropVldOutOfState() {
    this._dropVldOutOfState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfStateInput() {
    return this._dropVldOutOfState;
  }

  // drop_vld_out_of_state_ie - computed: false, optional: true, required: false
  private _dropVldOutOfStateIe?: number; 
  public get dropVldOutOfStateIe() {
    return this.getNumberAttribute('drop_vld_out_of_state_ie');
  }
  public set dropVldOutOfStateIe(value: number) {
    this._dropVldOutOfStateIe = value;
  }
  public resetDropVldOutOfStateIe() {
    this._dropVldOutOfStateIe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldOutOfStateIeInput() {
    return this._dropVldOutOfStateIe;
  }

  // drop_vld_protocol_flag_unset - computed: false, optional: true, required: false
  private _dropVldProtocolFlagUnset?: number; 
  public get dropVldProtocolFlagUnset() {
    return this.getNumberAttribute('drop_vld_protocol_flag_unset');
  }
  public set dropVldProtocolFlagUnset(value: number) {
    this._dropVldProtocolFlagUnset = value;
  }
  public resetDropVldProtocolFlagUnset() {
    this._dropVldProtocolFlagUnset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldProtocolFlagUnsetInput() {
    return this._dropVldProtocolFlagUnset;
  }

  // drop_vld_reserved_field_set - computed: false, optional: true, required: false
  private _dropVldReservedFieldSet?: number; 
  public get dropVldReservedFieldSet() {
    return this.getNumberAttribute('drop_vld_reserved_field_set');
  }
  public set dropVldReservedFieldSet(value: number) {
    this._dropVldReservedFieldSet = value;
  }
  public resetDropVldReservedFieldSet() {
    this._dropVldReservedFieldSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldReservedFieldSetInput() {
    return this._dropVldReservedFieldSet;
  }

  // drop_vld_reserved_information_element - computed: false, optional: true, required: false
  private _dropVldReservedInformationElement?: number; 
  public get dropVldReservedInformationElement() {
    return this.getNumberAttribute('drop_vld_reserved_information_element');
  }
  public set dropVldReservedInformationElement(value: number) {
    this._dropVldReservedInformationElement = value;
  }
  public resetDropVldReservedInformationElement() {
    this._dropVldReservedInformationElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldReservedInformationElementInput() {
    return this._dropVldReservedInformationElement;
  }

  // drop_vld_sanity_failed_piggyback - computed: false, optional: true, required: false
  private _dropVldSanityFailedPiggyback?: number; 
  public get dropVldSanityFailedPiggyback() {
    return this.getNumberAttribute('drop_vld_sanity_failed_piggyback');
  }
  public set dropVldSanityFailedPiggyback(value: number) {
    this._dropVldSanityFailedPiggyback = value;
  }
  public resetDropVldSanityFailedPiggyback() {
    this._dropVldSanityFailedPiggyback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldSanityFailedPiggybackInput() {
    return this._dropVldSanityFailedPiggyback;
  }

  // drop_vld_sequence_num_correlation - computed: false, optional: true, required: false
  private _dropVldSequenceNumCorrelation?: number; 
  public get dropVldSequenceNumCorrelation() {
    return this.getNumberAttribute('drop_vld_sequence_num_correlation');
  }
  public set dropVldSequenceNumCorrelation(value: number) {
    this._dropVldSequenceNumCorrelation = value;
  }
  public resetDropVldSequenceNumCorrelation() {
    this._dropVldSequenceNumCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldSequenceNumCorrelationInput() {
    return this._dropVldSequenceNumCorrelation;
  }

  // drop_vld_tunnel_id_flag - computed: false, optional: true, required: false
  private _dropVldTunnelIdFlag?: number; 
  public get dropVldTunnelIdFlag() {
    return this.getNumberAttribute('drop_vld_tunnel_id_flag');
  }
  public set dropVldTunnelIdFlag(value: number) {
    this._dropVldTunnelIdFlag = value;
  }
  public resetDropVldTunnelIdFlag() {
    this._dropVldTunnelIdFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldTunnelIdFlagInput() {
    return this._dropVldTunnelIdFlag;
  }

  // drop_vld_unsupported_message_type - computed: false, optional: true, required: false
  private _dropVldUnsupportedMessageType?: number; 
  public get dropVldUnsupportedMessageType() {
    return this.getNumberAttribute('drop_vld_unsupported_message_type');
  }
  public set dropVldUnsupportedMessageType(value: number) {
    this._dropVldUnsupportedMessageType = value;
  }
  public resetDropVldUnsupportedMessageType() {
    this._dropVldUnsupportedMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldUnsupportedMessageTypeInput() {
    return this._dropVldUnsupportedMessageType;
  }

  // drop_vld_version_not_supported - computed: false, optional: true, required: false
  private _dropVldVersionNotSupported?: number; 
  public get dropVldVersionNotSupported() {
    return this.getNumberAttribute('drop_vld_version_not_supported');
  }
  public set dropVldVersionNotSupported(value: number) {
    this._dropVldVersionNotSupported = value;
  }
  public resetDropVldVersionNotSupported() {
    this._dropVldVersionNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldVersionNotSupportedInput() {
    return this._dropVldVersionNotSupported;
  }

  // gtp_c_handover_in_progress_with_conn - computed: false, optional: true, required: false
  private _gtpCHandoverInProgressWithConn?: number; 
  public get gtpCHandoverInProgressWithConn() {
    return this.getNumberAttribute('gtp_c_handover_in_progress_with_conn');
  }
  public set gtpCHandoverInProgressWithConn(value: number) {
    this._gtpCHandoverInProgressWithConn = value;
  }
  public resetGtpCHandoverInProgressWithConn() {
    this._gtpCHandoverInProgressWithConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCHandoverInProgressWithConnInput() {
    return this._gtpCHandoverInProgressWithConn;
  }

  // gtp_path_management_message - computed: false, optional: true, required: false
  private _gtpPathManagementMessage?: number; 
  public get gtpPathManagementMessage() {
    return this.getNumberAttribute('gtp_path_management_message');
  }
  public set gtpPathManagementMessage(value: number) {
    this._gtpPathManagementMessage = value;
  }
  public resetGtpPathManagementMessage() {
    this._gtpPathManagementMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpPathManagementMessageInput() {
    return this._gtpPathManagementMessage;
  }

  // gtp_u_tunnel_created - computed: false, optional: true, required: false
  private _gtpUTunnelCreated?: number; 
  public get gtpUTunnelCreated() {
    return this.getNumberAttribute('gtp_u_tunnel_created');
  }
  public set gtpUTunnelCreated(value: number) {
    this._gtpUTunnelCreated = value;
  }
  public resetGtpUTunnelCreated() {
    this._gtpUTunnelCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUTunnelCreatedInput() {
    return this._gtpUTunnelCreated;
  }

  // gtp_u_tunnel_deleted - computed: false, optional: true, required: false
  private _gtpUTunnelDeleted?: number; 
  public get gtpUTunnelDeleted() {
    return this.getNumberAttribute('gtp_u_tunnel_deleted');
  }
  public set gtpUTunnelDeleted(value: number) {
    this._gtpUTunnelDeleted = value;
  }
  public resetGtpUTunnelDeleted() {
    this._gtpUTunnelDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUTunnelDeletedInput() {
    return this._gtpUTunnelDeleted;
  }

  // gtp_v0_c_create_pdp_resp_unsuccess - computed: false, optional: true, required: false
  private _gtpV0CCreatePdpRespUnsuccess?: number; 
  public get gtpV0CCreatePdpRespUnsuccess() {
    return this.getNumberAttribute('gtp_v0_c_create_pdp_resp_unsuccess');
  }
  public set gtpV0CCreatePdpRespUnsuccess(value: number) {
    this._gtpV0CCreatePdpRespUnsuccess = value;
  }
  public resetGtpV0CCreatePdpRespUnsuccess() {
    this._gtpV0CCreatePdpRespUnsuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CCreatePdpRespUnsuccessInput() {
    return this._gtpV0CCreatePdpRespUnsuccess;
  }

  // gtp_v0_c_half_open_tunnel_closed - computed: false, optional: true, required: false
  private _gtpV0CHalfOpenTunnelClosed?: number; 
  public get gtpV0CHalfOpenTunnelClosed() {
    return this.getNumberAttribute('gtp_v0_c_half_open_tunnel_closed');
  }
  public set gtpV0CHalfOpenTunnelClosed(value: number) {
    this._gtpV0CHalfOpenTunnelClosed = value;
  }
  public resetGtpV0CHalfOpenTunnelClosed() {
    this._gtpV0CHalfOpenTunnelClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CHalfOpenTunnelClosedInput() {
    return this._gtpV0CHalfOpenTunnelClosed;
  }

  // gtp_v0_c_tunnel_closed - computed: false, optional: true, required: false
  private _gtpV0CTunnelClosed?: number; 
  public get gtpV0CTunnelClosed() {
    return this.getNumberAttribute('gtp_v0_c_tunnel_closed');
  }
  public set gtpV0CTunnelClosed(value: number) {
    this._gtpV0CTunnelClosed = value;
  }
  public resetGtpV0CTunnelClosed() {
    this._gtpV0CTunnelClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CTunnelClosedInput() {
    return this._gtpV0CTunnelClosed;
  }

  // gtp_v0_c_tunnel_created - computed: false, optional: true, required: false
  private _gtpV0CTunnelCreated?: number; 
  public get gtpV0CTunnelCreated() {
    return this.getNumberAttribute('gtp_v0_c_tunnel_created');
  }
  public set gtpV0CTunnelCreated(value: number) {
    this._gtpV0CTunnelCreated = value;
  }
  public resetGtpV0CTunnelCreated() {
    this._gtpV0CTunnelCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CTunnelCreatedInput() {
    return this._gtpV0CTunnelCreated;
  }

  // gtp_v0_c_tunnel_deleted - computed: false, optional: true, required: false
  private _gtpV0CTunnelDeleted?: number; 
  public get gtpV0CTunnelDeleted() {
    return this.getNumberAttribute('gtp_v0_c_tunnel_deleted');
  }
  public set gtpV0CTunnelDeleted(value: number) {
    this._gtpV0CTunnelDeleted = value;
  }
  public resetGtpV0CTunnelDeleted() {
    this._gtpV0CTunnelDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CTunnelDeletedInput() {
    return this._gtpV0CTunnelDeleted;
  }

  // gtp_v0_c_tunnel_deleted_restart - computed: false, optional: true, required: false
  private _gtpV0CTunnelDeletedRestart?: number; 
  public get gtpV0CTunnelDeletedRestart() {
    return this.getNumberAttribute('gtp_v0_c_tunnel_deleted_restart');
  }
  public set gtpV0CTunnelDeletedRestart(value: number) {
    this._gtpV0CTunnelDeletedRestart = value;
  }
  public resetGtpV0CTunnelDeletedRestart() {
    this._gtpV0CTunnelDeletedRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CTunnelDeletedRestartInput() {
    return this._gtpV0CTunnelDeletedRestart;
  }

  // gtp_v0_c_tunnel_half_closed - computed: false, optional: true, required: false
  private _gtpV0CTunnelHalfClosed?: number; 
  public get gtpV0CTunnelHalfClosed() {
    return this.getNumberAttribute('gtp_v0_c_tunnel_half_closed');
  }
  public set gtpV0CTunnelHalfClosed(value: number) {
    this._gtpV0CTunnelHalfClosed = value;
  }
  public resetGtpV0CTunnelHalfClosed() {
    this._gtpV0CTunnelHalfClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CTunnelHalfClosedInput() {
    return this._gtpV0CTunnelHalfClosed;
  }

  // gtp_v0_c_tunnel_half_open - computed: false, optional: true, required: false
  private _gtpV0CTunnelHalfOpen?: number; 
  public get gtpV0CTunnelHalfOpen() {
    return this.getNumberAttribute('gtp_v0_c_tunnel_half_open');
  }
  public set gtpV0CTunnelHalfOpen(value: number) {
    this._gtpV0CTunnelHalfOpen = value;
  }
  public resetGtpV0CTunnelHalfOpen() {
    this._gtpV0CTunnelHalfOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CTunnelHalfOpenInput() {
    return this._gtpV0CTunnelHalfOpen;
  }

  // gtp_v0_c_update_pdp_resp_unsuccess - computed: false, optional: true, required: false
  private _gtpV0CUpdatePdpRespUnsuccess?: number; 
  public get gtpV0CUpdatePdpRespUnsuccess() {
    return this.getNumberAttribute('gtp_v0_c_update_pdp_resp_unsuccess');
  }
  public set gtpV0CUpdatePdpRespUnsuccess(value: number) {
    this._gtpV0CUpdatePdpRespUnsuccess = value;
  }
  public resetGtpV0CUpdatePdpRespUnsuccess() {
    this._gtpV0CUpdatePdpRespUnsuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CUpdatePdpRespUnsuccessInput() {
    return this._gtpV0CUpdatePdpRespUnsuccess;
  }

  // gtp_v1_c_create_pdp_resp_unsuccess - computed: false, optional: true, required: false
  private _gtpV1CCreatePdpRespUnsuccess?: number; 
  public get gtpV1CCreatePdpRespUnsuccess() {
    return this.getNumberAttribute('gtp_v1_c_create_pdp_resp_unsuccess');
  }
  public set gtpV1CCreatePdpRespUnsuccess(value: number) {
    this._gtpV1CCreatePdpRespUnsuccess = value;
  }
  public resetGtpV1CCreatePdpRespUnsuccess() {
    this._gtpV1CCreatePdpRespUnsuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CCreatePdpRespUnsuccessInput() {
    return this._gtpV1CCreatePdpRespUnsuccess;
  }

  // gtp_v1_c_half_open_tunnel_closed - computed: false, optional: true, required: false
  private _gtpV1CHalfOpenTunnelClosed?: number; 
  public get gtpV1CHalfOpenTunnelClosed() {
    return this.getNumberAttribute('gtp_v1_c_half_open_tunnel_closed');
  }
  public set gtpV1CHalfOpenTunnelClosed(value: number) {
    this._gtpV1CHalfOpenTunnelClosed = value;
  }
  public resetGtpV1CHalfOpenTunnelClosed() {
    this._gtpV1CHalfOpenTunnelClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CHalfOpenTunnelClosedInput() {
    return this._gtpV1CHalfOpenTunnelClosed;
  }

  // gtp_v1_c_tunnel_closed - computed: false, optional: true, required: false
  private _gtpV1CTunnelClosed?: number; 
  public get gtpV1CTunnelClosed() {
    return this.getNumberAttribute('gtp_v1_c_tunnel_closed');
  }
  public set gtpV1CTunnelClosed(value: number) {
    this._gtpV1CTunnelClosed = value;
  }
  public resetGtpV1CTunnelClosed() {
    this._gtpV1CTunnelClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CTunnelClosedInput() {
    return this._gtpV1CTunnelClosed;
  }

  // gtp_v1_c_tunnel_created - computed: false, optional: true, required: false
  private _gtpV1CTunnelCreated?: number; 
  public get gtpV1CTunnelCreated() {
    return this.getNumberAttribute('gtp_v1_c_tunnel_created');
  }
  public set gtpV1CTunnelCreated(value: number) {
    this._gtpV1CTunnelCreated = value;
  }
  public resetGtpV1CTunnelCreated() {
    this._gtpV1CTunnelCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CTunnelCreatedInput() {
    return this._gtpV1CTunnelCreated;
  }

  // gtp_v1_c_tunnel_deleted - computed: false, optional: true, required: false
  private _gtpV1CTunnelDeleted?: number; 
  public get gtpV1CTunnelDeleted() {
    return this.getNumberAttribute('gtp_v1_c_tunnel_deleted');
  }
  public set gtpV1CTunnelDeleted(value: number) {
    this._gtpV1CTunnelDeleted = value;
  }
  public resetGtpV1CTunnelDeleted() {
    this._gtpV1CTunnelDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CTunnelDeletedInput() {
    return this._gtpV1CTunnelDeleted;
  }

  // gtp_v1_c_tunnel_deleted_restart - computed: false, optional: true, required: false
  private _gtpV1CTunnelDeletedRestart?: number; 
  public get gtpV1CTunnelDeletedRestart() {
    return this.getNumberAttribute('gtp_v1_c_tunnel_deleted_restart');
  }
  public set gtpV1CTunnelDeletedRestart(value: number) {
    this._gtpV1CTunnelDeletedRestart = value;
  }
  public resetGtpV1CTunnelDeletedRestart() {
    this._gtpV1CTunnelDeletedRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CTunnelDeletedRestartInput() {
    return this._gtpV1CTunnelDeletedRestart;
  }

  // gtp_v1_c_tunnel_half_closed - computed: false, optional: true, required: false
  private _gtpV1CTunnelHalfClosed?: number; 
  public get gtpV1CTunnelHalfClosed() {
    return this.getNumberAttribute('gtp_v1_c_tunnel_half_closed');
  }
  public set gtpV1CTunnelHalfClosed(value: number) {
    this._gtpV1CTunnelHalfClosed = value;
  }
  public resetGtpV1CTunnelHalfClosed() {
    this._gtpV1CTunnelHalfClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CTunnelHalfClosedInput() {
    return this._gtpV1CTunnelHalfClosed;
  }

  // gtp_v1_c_tunnel_half_open - computed: false, optional: true, required: false
  private _gtpV1CTunnelHalfOpen?: number; 
  public get gtpV1CTunnelHalfOpen() {
    return this.getNumberAttribute('gtp_v1_c_tunnel_half_open');
  }
  public set gtpV1CTunnelHalfOpen(value: number) {
    this._gtpV1CTunnelHalfOpen = value;
  }
  public resetGtpV1CTunnelHalfOpen() {
    this._gtpV1CTunnelHalfOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CTunnelHalfOpenInput() {
    return this._gtpV1CTunnelHalfOpen;
  }

  // gtp_v1_c_update_pdp_resp_unsuccess - computed: false, optional: true, required: false
  private _gtpV1CUpdatePdpRespUnsuccess?: number; 
  public get gtpV1CUpdatePdpRespUnsuccess() {
    return this.getNumberAttribute('gtp_v1_c_update_pdp_resp_unsuccess');
  }
  public set gtpV1CUpdatePdpRespUnsuccess(value: number) {
    this._gtpV1CUpdatePdpRespUnsuccess = value;
  }
  public resetGtpV1CUpdatePdpRespUnsuccess() {
    this._gtpV1CUpdatePdpRespUnsuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CUpdatePdpRespUnsuccessInput() {
    return this._gtpV1CUpdatePdpRespUnsuccess;
  }

  // gtp_v2_c_create_sess_resp_unsuccess - computed: false, optional: true, required: false
  private _gtpV2CCreateSessRespUnsuccess?: number; 
  public get gtpV2CCreateSessRespUnsuccess() {
    return this.getNumberAttribute('gtp_v2_c_create_sess_resp_unsuccess');
  }
  public set gtpV2CCreateSessRespUnsuccess(value: number) {
    this._gtpV2CCreateSessRespUnsuccess = value;
  }
  public resetGtpV2CCreateSessRespUnsuccess() {
    this._gtpV2CCreateSessRespUnsuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CCreateSessRespUnsuccessInput() {
    return this._gtpV2CCreateSessRespUnsuccess;
  }

  // gtp_v2_c_half_open_tunnel_closed - computed: false, optional: true, required: false
  private _gtpV2CHalfOpenTunnelClosed?: number; 
  public get gtpV2CHalfOpenTunnelClosed() {
    return this.getNumberAttribute('gtp_v2_c_half_open_tunnel_closed');
  }
  public set gtpV2CHalfOpenTunnelClosed(value: number) {
    this._gtpV2CHalfOpenTunnelClosed = value;
  }
  public resetGtpV2CHalfOpenTunnelClosed() {
    this._gtpV2CHalfOpenTunnelClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CHalfOpenTunnelClosedInput() {
    return this._gtpV2CHalfOpenTunnelClosed;
  }

  // gtp_v2_c_mod_bearer_resp_unsuccess - computed: false, optional: true, required: false
  private _gtpV2CModBearerRespUnsuccess?: number; 
  public get gtpV2CModBearerRespUnsuccess() {
    return this.getNumberAttribute('gtp_v2_c_mod_bearer_resp_unsuccess');
  }
  public set gtpV2CModBearerRespUnsuccess(value: number) {
    this._gtpV2CModBearerRespUnsuccess = value;
  }
  public resetGtpV2CModBearerRespUnsuccess() {
    this._gtpV2CModBearerRespUnsuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CModBearerRespUnsuccessInput() {
    return this._gtpV2CModBearerRespUnsuccess;
  }

  // gtp_v2_c_piggyback_message - computed: false, optional: true, required: false
  private _gtpV2CPiggybackMessage?: number; 
  public get gtpV2CPiggybackMessage() {
    return this.getNumberAttribute('gtp_v2_c_piggyback_message');
  }
  public set gtpV2CPiggybackMessage(value: number) {
    this._gtpV2CPiggybackMessage = value;
  }
  public resetGtpV2CPiggybackMessage() {
    this._gtpV2CPiggybackMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CPiggybackMessageInput() {
    return this._gtpV2CPiggybackMessage;
  }

  // gtp_v2_c_tunnel_closed - computed: false, optional: true, required: false
  private _gtpV2CTunnelClosed?: number; 
  public get gtpV2CTunnelClosed() {
    return this.getNumberAttribute('gtp_v2_c_tunnel_closed');
  }
  public set gtpV2CTunnelClosed(value: number) {
    this._gtpV2CTunnelClosed = value;
  }
  public resetGtpV2CTunnelClosed() {
    this._gtpV2CTunnelClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CTunnelClosedInput() {
    return this._gtpV2CTunnelClosed;
  }

  // gtp_v2_c_tunnel_created - computed: false, optional: true, required: false
  private _gtpV2CTunnelCreated?: number; 
  public get gtpV2CTunnelCreated() {
    return this.getNumberAttribute('gtp_v2_c_tunnel_created');
  }
  public set gtpV2CTunnelCreated(value: number) {
    this._gtpV2CTunnelCreated = value;
  }
  public resetGtpV2CTunnelCreated() {
    this._gtpV2CTunnelCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CTunnelCreatedInput() {
    return this._gtpV2CTunnelCreated;
  }

  // gtp_v2_c_tunnel_deleted - computed: false, optional: true, required: false
  private _gtpV2CTunnelDeleted?: number; 
  public get gtpV2CTunnelDeleted() {
    return this.getNumberAttribute('gtp_v2_c_tunnel_deleted');
  }
  public set gtpV2CTunnelDeleted(value: number) {
    this._gtpV2CTunnelDeleted = value;
  }
  public resetGtpV2CTunnelDeleted() {
    this._gtpV2CTunnelDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CTunnelDeletedInput() {
    return this._gtpV2CTunnelDeleted;
  }

  // gtp_v2_c_tunnel_deleted_restart - computed: false, optional: true, required: false
  private _gtpV2CTunnelDeletedRestart?: number; 
  public get gtpV2CTunnelDeletedRestart() {
    return this.getNumberAttribute('gtp_v2_c_tunnel_deleted_restart');
  }
  public set gtpV2CTunnelDeletedRestart(value: number) {
    this._gtpV2CTunnelDeletedRestart = value;
  }
  public resetGtpV2CTunnelDeletedRestart() {
    this._gtpV2CTunnelDeletedRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CTunnelDeletedRestartInput() {
    return this._gtpV2CTunnelDeletedRestart;
  }

  // gtp_v2_c_tunnel_half_closed - computed: false, optional: true, required: false
  private _gtpV2CTunnelHalfClosed?: number; 
  public get gtpV2CTunnelHalfClosed() {
    return this.getNumberAttribute('gtp_v2_c_tunnel_half_closed');
  }
  public set gtpV2CTunnelHalfClosed(value: number) {
    this._gtpV2CTunnelHalfClosed = value;
  }
  public resetGtpV2CTunnelHalfClosed() {
    this._gtpV2CTunnelHalfClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CTunnelHalfClosedInput() {
    return this._gtpV2CTunnelHalfClosed;
  }

  // gtp_v2_c_tunnel_half_open - computed: false, optional: true, required: false
  private _gtpV2CTunnelHalfOpen?: number; 
  public get gtpV2CTunnelHalfOpen() {
    return this.getNumberAttribute('gtp_v2_c_tunnel_half_open');
  }
  public set gtpV2CTunnelHalfOpen(value: number) {
    this._gtpV2CTunnelHalfOpen = value;
  }
  public resetGtpV2CTunnelHalfOpen() {
    this._gtpV2CTunnelHalfOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CTunnelHalfOpenInput() {
    return this._gtpV2CTunnelHalfOpen;
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

  // uplink_bytes - computed: false, optional: true, required: false
  private _uplinkBytes?: number; 
  public get uplinkBytes() {
    return this.getNumberAttribute('uplink_bytes');
  }
  public set uplinkBytes(value: number) {
    this._uplinkBytes = value;
  }
  public resetUplinkBytes() {
    this._uplinkBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkBytesInput() {
    return this._uplinkBytes;
  }

  // uplink_pkts - computed: false, optional: true, required: false
  private _uplinkPkts?: number; 
  public get uplinkPkts() {
    return this.getNumberAttribute('uplink_pkts');
  }
  public set uplinkPkts(value: number) {
    this._uplinkPkts = value;
  }
  public resetUplinkPkts() {
    this._uplinkPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkPktsInput() {
    return this._uplinkPkts;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      downlink_bytes: cdktf.numberToTerraform(this._downlinkBytes),
      downlink_pkts: cdktf.numberToTerraform(this._downlinkPkts),
      drop_flt_apn_filtering: cdktf.numberToTerraform(this._dropFltApnFiltering),
      drop_flt_gtp_in_gtp: cdktf.numberToTerraform(this._dropFltGtpInGtp),
      drop_flt_message_filtering: cdktf.numberToTerraform(this._dropFltMessageFiltering),
      drop_flt_msisdn_filtering: cdktf.numberToTerraform(this._dropFltMsisdnFiltering),
      drop_flt_rat_type_filtering: cdktf.numberToTerraform(this._dropFltRatTypeFiltering),
      drop_rl_gtp_u_downlink_byte: cdktf.numberToTerraform(this._dropRlGtpUDownlinkByte),
      drop_rl_gtp_u_downlink_packet: cdktf.numberToTerraform(this._dropRlGtpUDownlinkPacket),
      drop_rl_gtp_u_max_concurrent_tunnels: cdktf.numberToTerraform(this._dropRlGtpUMaxConcurrentTunnels),
      drop_rl_gtp_u_total_byte: cdktf.numberToTerraform(this._dropRlGtpUTotalByte),
      drop_rl_gtp_u_total_packet: cdktf.numberToTerraform(this._dropRlGtpUTotalPacket),
      drop_rl_gtp_u_tunnel_create: cdktf.numberToTerraform(this._dropRlGtpUTunnelCreate),
      drop_rl_gtp_u_uplink_byte: cdktf.numberToTerraform(this._dropRlGtpUUplinkByte),
      drop_rl_gtp_u_uplink_packet: cdktf.numberToTerraform(this._dropRlGtpUUplinkPacket),
      drop_rl_gtp_v0_c_agg: cdktf.numberToTerraform(this._dropRlGtpV0CAgg),
      drop_rl_gtp_v1_c_agg: cdktf.numberToTerraform(this._dropRlGtpV1CAgg),
      drop_rl_gtp_v1_c_create_pdp_request: cdktf.numberToTerraform(this._dropRlGtpV1CCreatePdpRequest),
      drop_rl_gtp_v1_c_update_pdp_request: cdktf.numberToTerraform(this._dropRlGtpV1CUpdatePdpRequest),
      drop_rl_gtp_v2_c_agg: cdktf.numberToTerraform(this._dropRlGtpV2CAgg),
      drop_rl_gtp_v2_c_create_session_request: cdktf.numberToTerraform(this._dropRlGtpV2CCreateSessionRequest),
      drop_rl_gtp_v2_c_modify_bearer_request: cdktf.numberToTerraform(this._dropRlGtpV2CModifyBearerRequest),
      drop_vld_country_code_mismatch: cdktf.numberToTerraform(this._dropVldCountryCodeMismatch),
      drop_vld_cross_layer_correlation: cdktf.numberToTerraform(this._dropVldCrossLayerCorrelation),
      drop_vld_gtp_bearer_count_exceed: cdktf.numberToTerraform(this._dropVldGtpBearerCountExceed),
      drop_vld_gtp_invalid_apn_len_drop: cdktf.numberToTerraform(this._dropVldGtpInvalidApnLenDrop),
      drop_vld_gtp_invalid_imsi_len_drop: cdktf.numberToTerraform(this._dropVldGtpInvalidImsiLenDrop),
      drop_vld_gtp_u_spoofed_source_address: cdktf.numberToTerraform(this._dropVldGtpUSpoofedSourceAddress),
      drop_vld_gtp_v2_wrong_lbi_create_bearer: cdktf.numberToTerraform(this._dropVldGtpV2WrongLbiCreateBearer),
      drop_vld_gtpv0_seqnum_buffer_full: cdktf.numberToTerraform(this._dropVldGtpv0SeqnumBufferFull),
      drop_vld_gtpv1_seqnum_buffer_full: cdktf.numberToTerraform(this._dropVldGtpv1SeqnumBufferFull),
      drop_vld_gtpv2_seqnum_buffer_full: cdktf.numberToTerraform(this._dropVldGtpv2SeqnumBufferFull),
      drop_vld_invalid_flow_label_v0: cdktf.numberToTerraform(this._dropVldInvalidFlowLabelV0),
      drop_vld_invalid_pkt_len_piggyback: cdktf.numberToTerraform(this._dropVldInvalidPktLenPiggyback),
      drop_vld_invalid_teid: cdktf.numberToTerraform(this._dropVldInvalidTeid),
      drop_vld_mandatory_information_element: cdktf.numberToTerraform(this._dropVldMandatoryInformationElement),
      drop_vld_message_length: cdktf.numberToTerraform(this._dropVldMessageLength),
      drop_vld_out_of_order_ie: cdktf.numberToTerraform(this._dropVldOutOfOrderIe),
      drop_vld_out_of_state: cdktf.numberToTerraform(this._dropVldOutOfState),
      drop_vld_out_of_state_ie: cdktf.numberToTerraform(this._dropVldOutOfStateIe),
      drop_vld_protocol_flag_unset: cdktf.numberToTerraform(this._dropVldProtocolFlagUnset),
      drop_vld_reserved_field_set: cdktf.numberToTerraform(this._dropVldReservedFieldSet),
      drop_vld_reserved_information_element: cdktf.numberToTerraform(this._dropVldReservedInformationElement),
      drop_vld_sanity_failed_piggyback: cdktf.numberToTerraform(this._dropVldSanityFailedPiggyback),
      drop_vld_sequence_num_correlation: cdktf.numberToTerraform(this._dropVldSequenceNumCorrelation),
      drop_vld_tunnel_id_flag: cdktf.numberToTerraform(this._dropVldTunnelIdFlag),
      drop_vld_unsupported_message_type: cdktf.numberToTerraform(this._dropVldUnsupportedMessageType),
      drop_vld_version_not_supported: cdktf.numberToTerraform(this._dropVldVersionNotSupported),
      gtp_c_handover_in_progress_with_conn: cdktf.numberToTerraform(this._gtpCHandoverInProgressWithConn),
      gtp_path_management_message: cdktf.numberToTerraform(this._gtpPathManagementMessage),
      gtp_u_tunnel_created: cdktf.numberToTerraform(this._gtpUTunnelCreated),
      gtp_u_tunnel_deleted: cdktf.numberToTerraform(this._gtpUTunnelDeleted),
      gtp_v0_c_create_pdp_resp_unsuccess: cdktf.numberToTerraform(this._gtpV0CCreatePdpRespUnsuccess),
      gtp_v0_c_half_open_tunnel_closed: cdktf.numberToTerraform(this._gtpV0CHalfOpenTunnelClosed),
      gtp_v0_c_tunnel_closed: cdktf.numberToTerraform(this._gtpV0CTunnelClosed),
      gtp_v0_c_tunnel_created: cdktf.numberToTerraform(this._gtpV0CTunnelCreated),
      gtp_v0_c_tunnel_deleted: cdktf.numberToTerraform(this._gtpV0CTunnelDeleted),
      gtp_v0_c_tunnel_deleted_restart: cdktf.numberToTerraform(this._gtpV0CTunnelDeletedRestart),
      gtp_v0_c_tunnel_half_closed: cdktf.numberToTerraform(this._gtpV0CTunnelHalfClosed),
      gtp_v0_c_tunnel_half_open: cdktf.numberToTerraform(this._gtpV0CTunnelHalfOpen),
      gtp_v0_c_update_pdp_resp_unsuccess: cdktf.numberToTerraform(this._gtpV0CUpdatePdpRespUnsuccess),
      gtp_v1_c_create_pdp_resp_unsuccess: cdktf.numberToTerraform(this._gtpV1CCreatePdpRespUnsuccess),
      gtp_v1_c_half_open_tunnel_closed: cdktf.numberToTerraform(this._gtpV1CHalfOpenTunnelClosed),
      gtp_v1_c_tunnel_closed: cdktf.numberToTerraform(this._gtpV1CTunnelClosed),
      gtp_v1_c_tunnel_created: cdktf.numberToTerraform(this._gtpV1CTunnelCreated),
      gtp_v1_c_tunnel_deleted: cdktf.numberToTerraform(this._gtpV1CTunnelDeleted),
      gtp_v1_c_tunnel_deleted_restart: cdktf.numberToTerraform(this._gtpV1CTunnelDeletedRestart),
      gtp_v1_c_tunnel_half_closed: cdktf.numberToTerraform(this._gtpV1CTunnelHalfClosed),
      gtp_v1_c_tunnel_half_open: cdktf.numberToTerraform(this._gtpV1CTunnelHalfOpen),
      gtp_v1_c_update_pdp_resp_unsuccess: cdktf.numberToTerraform(this._gtpV1CUpdatePdpRespUnsuccess),
      gtp_v2_c_create_sess_resp_unsuccess: cdktf.numberToTerraform(this._gtpV2CCreateSessRespUnsuccess),
      gtp_v2_c_half_open_tunnel_closed: cdktf.numberToTerraform(this._gtpV2CHalfOpenTunnelClosed),
      gtp_v2_c_mod_bearer_resp_unsuccess: cdktf.numberToTerraform(this._gtpV2CModBearerRespUnsuccess),
      gtp_v2_c_piggyback_message: cdktf.numberToTerraform(this._gtpV2CPiggybackMessage),
      gtp_v2_c_tunnel_closed: cdktf.numberToTerraform(this._gtpV2CTunnelClosed),
      gtp_v2_c_tunnel_created: cdktf.numberToTerraform(this._gtpV2CTunnelCreated),
      gtp_v2_c_tunnel_deleted: cdktf.numberToTerraform(this._gtpV2CTunnelDeleted),
      gtp_v2_c_tunnel_deleted_restart: cdktf.numberToTerraform(this._gtpV2CTunnelDeletedRestart),
      gtp_v2_c_tunnel_half_closed: cdktf.numberToTerraform(this._gtpV2CTunnelHalfClosed),
      gtp_v2_c_tunnel_half_open: cdktf.numberToTerraform(this._gtpV2CTunnelHalfOpen),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uplink_bytes: cdktf.numberToTerraform(this._uplinkBytes),
      uplink_pkts: cdktf.numberToTerraform(this._uplinkPkts),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      downlink_bytes: {
        value: cdktf.numberToHclTerraform(this._downlinkBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downlink_pkts: {
        value: cdktf.numberToHclTerraform(this._downlinkPkts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_flt_apn_filtering: {
        value: cdktf.numberToHclTerraform(this._dropFltApnFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_flt_gtp_in_gtp: {
        value: cdktf.numberToHclTerraform(this._dropFltGtpInGtp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_flt_message_filtering: {
        value: cdktf.numberToHclTerraform(this._dropFltMessageFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_flt_msisdn_filtering: {
        value: cdktf.numberToHclTerraform(this._dropFltMsisdnFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_flt_rat_type_filtering: {
        value: cdktf.numberToHclTerraform(this._dropFltRatTypeFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_u_downlink_byte: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpUDownlinkByte),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_u_downlink_packet: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpUDownlinkPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_u_max_concurrent_tunnels: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpUMaxConcurrentTunnels),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_u_total_byte: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpUTotalByte),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_u_total_packet: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpUTotalPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_u_tunnel_create: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpUTunnelCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_u_uplink_byte: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpUUplinkByte),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_u_uplink_packet: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpUUplinkPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_v0_c_agg: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpV0CAgg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_v1_c_agg: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpV1CAgg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_v1_c_create_pdp_request: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpV1CCreatePdpRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_v1_c_update_pdp_request: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpV1CUpdatePdpRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_v2_c_agg: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpV2CAgg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_v2_c_create_session_request: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpV2CCreateSessionRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_rl_gtp_v2_c_modify_bearer_request: {
        value: cdktf.numberToHclTerraform(this._dropRlGtpV2CModifyBearerRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_country_code_mismatch: {
        value: cdktf.numberToHclTerraform(this._dropVldCountryCodeMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_cross_layer_correlation: {
        value: cdktf.numberToHclTerraform(this._dropVldCrossLayerCorrelation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtp_bearer_count_exceed: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpBearerCountExceed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtp_invalid_apn_len_drop: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpInvalidApnLenDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtp_invalid_imsi_len_drop: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpInvalidImsiLenDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtp_u_spoofed_source_address: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpUSpoofedSourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtp_v2_wrong_lbi_create_bearer: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpV2WrongLbiCreateBearer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtpv0_seqnum_buffer_full: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpv0SeqnumBufferFull),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtpv1_seqnum_buffer_full: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpv1SeqnumBufferFull),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_gtpv2_seqnum_buffer_full: {
        value: cdktf.numberToHclTerraform(this._dropVldGtpv2SeqnumBufferFull),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_invalid_flow_label_v0: {
        value: cdktf.numberToHclTerraform(this._dropVldInvalidFlowLabelV0),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_invalid_pkt_len_piggyback: {
        value: cdktf.numberToHclTerraform(this._dropVldInvalidPktLenPiggyback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_invalid_teid: {
        value: cdktf.numberToHclTerraform(this._dropVldInvalidTeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_mandatory_information_element: {
        value: cdktf.numberToHclTerraform(this._dropVldMandatoryInformationElement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_message_length: {
        value: cdktf.numberToHclTerraform(this._dropVldMessageLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_out_of_order_ie: {
        value: cdktf.numberToHclTerraform(this._dropVldOutOfOrderIe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_out_of_state: {
        value: cdktf.numberToHclTerraform(this._dropVldOutOfState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_out_of_state_ie: {
        value: cdktf.numberToHclTerraform(this._dropVldOutOfStateIe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_protocol_flag_unset: {
        value: cdktf.numberToHclTerraform(this._dropVldProtocolFlagUnset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_reserved_field_set: {
        value: cdktf.numberToHclTerraform(this._dropVldReservedFieldSet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_reserved_information_element: {
        value: cdktf.numberToHclTerraform(this._dropVldReservedInformationElement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_sanity_failed_piggyback: {
        value: cdktf.numberToHclTerraform(this._dropVldSanityFailedPiggyback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_sequence_num_correlation: {
        value: cdktf.numberToHclTerraform(this._dropVldSequenceNumCorrelation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_tunnel_id_flag: {
        value: cdktf.numberToHclTerraform(this._dropVldTunnelIdFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_unsupported_message_type: {
        value: cdktf.numberToHclTerraform(this._dropVldUnsupportedMessageType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_vld_version_not_supported: {
        value: cdktf.numberToHclTerraform(this._dropVldVersionNotSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_c_handover_in_progress_with_conn: {
        value: cdktf.numberToHclTerraform(this._gtpCHandoverInProgressWithConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_path_management_message: {
        value: cdktf.numberToHclTerraform(this._gtpPathManagementMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_tunnel_created: {
        value: cdktf.numberToHclTerraform(this._gtpUTunnelCreated),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_tunnel_deleted: {
        value: cdktf.numberToHclTerraform(this._gtpUTunnelDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v0_c_create_pdp_resp_unsuccess: {
        value: cdktf.numberToHclTerraform(this._gtpV0CCreatePdpRespUnsuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v0_c_half_open_tunnel_closed: {
        value: cdktf.numberToHclTerraform(this._gtpV0CHalfOpenTunnelClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v0_c_tunnel_closed: {
        value: cdktf.numberToHclTerraform(this._gtpV0CTunnelClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v0_c_tunnel_created: {
        value: cdktf.numberToHclTerraform(this._gtpV0CTunnelCreated),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v0_c_tunnel_deleted: {
        value: cdktf.numberToHclTerraform(this._gtpV0CTunnelDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v0_c_tunnel_deleted_restart: {
        value: cdktf.numberToHclTerraform(this._gtpV0CTunnelDeletedRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v0_c_tunnel_half_closed: {
        value: cdktf.numberToHclTerraform(this._gtpV0CTunnelHalfClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v0_c_tunnel_half_open: {
        value: cdktf.numberToHclTerraform(this._gtpV0CTunnelHalfOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v0_c_update_pdp_resp_unsuccess: {
        value: cdktf.numberToHclTerraform(this._gtpV0CUpdatePdpRespUnsuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v1_c_create_pdp_resp_unsuccess: {
        value: cdktf.numberToHclTerraform(this._gtpV1CCreatePdpRespUnsuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v1_c_half_open_tunnel_closed: {
        value: cdktf.numberToHclTerraform(this._gtpV1CHalfOpenTunnelClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v1_c_tunnel_closed: {
        value: cdktf.numberToHclTerraform(this._gtpV1CTunnelClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v1_c_tunnel_created: {
        value: cdktf.numberToHclTerraform(this._gtpV1CTunnelCreated),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v1_c_tunnel_deleted: {
        value: cdktf.numberToHclTerraform(this._gtpV1CTunnelDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v1_c_tunnel_deleted_restart: {
        value: cdktf.numberToHclTerraform(this._gtpV1CTunnelDeletedRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v1_c_tunnel_half_closed: {
        value: cdktf.numberToHclTerraform(this._gtpV1CTunnelHalfClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v1_c_tunnel_half_open: {
        value: cdktf.numberToHclTerraform(this._gtpV1CTunnelHalfOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v1_c_update_pdp_resp_unsuccess: {
        value: cdktf.numberToHclTerraform(this._gtpV1CUpdatePdpRespUnsuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v2_c_create_sess_resp_unsuccess: {
        value: cdktf.numberToHclTerraform(this._gtpV2CCreateSessRespUnsuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v2_c_half_open_tunnel_closed: {
        value: cdktf.numberToHclTerraform(this._gtpV2CHalfOpenTunnelClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v2_c_mod_bearer_resp_unsuccess: {
        value: cdktf.numberToHclTerraform(this._gtpV2CModBearerRespUnsuccess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v2_c_piggyback_message: {
        value: cdktf.numberToHclTerraform(this._gtpV2CPiggybackMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v2_c_tunnel_closed: {
        value: cdktf.numberToHclTerraform(this._gtpV2CTunnelClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v2_c_tunnel_created: {
        value: cdktf.numberToHclTerraform(this._gtpV2CTunnelCreated),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v2_c_tunnel_deleted: {
        value: cdktf.numberToHclTerraform(this._gtpV2CTunnelDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v2_c_tunnel_deleted_restart: {
        value: cdktf.numberToHclTerraform(this._gtpV2CTunnelDeletedRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v2_c_tunnel_half_closed: {
        value: cdktf.numberToHclTerraform(this._gtpV2CTunnelHalfClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_v2_c_tunnel_half_open: {
        value: cdktf.numberToHclTerraform(this._gtpV2CTunnelHalfOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      uplink_bytes: {
        value: cdktf.numberToHclTerraform(this._uplinkBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_pkts: {
        value: cdktf.numberToHclTerraform(this._uplinkPkts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
