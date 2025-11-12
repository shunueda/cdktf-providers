// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwGtpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#id DataThunderFwGtpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * apn_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#apn_prefix DataThunderFwGtpStats#apn_prefix}
  */
  readonly apnPrefix?: DataThunderFwGtpStatsApnPrefix;
  /**
  * network_element block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#network_element DataThunderFwGtpStats#network_element}
  */
  readonly networkElement?: DataThunderFwGtpStatsNetworkElement;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#stats DataThunderFwGtpStats#stats}
  */
  readonly stats?: DataThunderFwGtpStatsStats;
}
export interface DataThunderFwGtpStatsApnPrefixStats {
  /**
  * Downlink Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#downlink_bytes DataThunderFwGtpStats#downlink_bytes}
  */
  readonly downlinkBytes?: number;
  /**
  * Downlink Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#downlink_pkts DataThunderFwGtpStats#downlink_pkts}
  */
  readonly downlinkPkts?: number;
  /**
  * Filtering Drop: APN IMSI Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_flt_apn_filtering DataThunderFwGtpStats#drop_flt_apn_filtering}
  */
  readonly dropFltApnFiltering?: number;
  /**
  * Filtering Drop: GTP in GTP Tunnel Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_flt_gtp_in_gtp DataThunderFwGtpStats#drop_flt_gtp_in_gtp}
  */
  readonly dropFltGtpInGtp?: number;
  /**
  * Filtering Drop: Message Type Not Permitted on Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_flt_message_filtering DataThunderFwGtpStats#drop_flt_message_filtering}
  */
  readonly dropFltMessageFiltering?: number;
  /**
  * Filtering Drop: MSISDN Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_flt_msisdn_filtering DataThunderFwGtpStats#drop_flt_msisdn_filtering}
  */
  readonly dropFltMsisdnFiltering?: number;
  /**
  * Filtering Drop: RAT Type Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_flt_rat_type_filtering DataThunderFwGtpStats#drop_flt_rat_type_filtering}
  */
  readonly dropFltRatTypeFiltering?: number;
  /**
  * Rate-limit Drop: GTP-U Downlink byte rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_downlink_byte DataThunderFwGtpStats#drop_rl_gtp_u_downlink_byte}
  */
  readonly dropRlGtpUDownlinkByte?: number;
  /**
  * Rate-limit Drop: GTP-U Downlink packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_downlink_packet DataThunderFwGtpStats#drop_rl_gtp_u_downlink_packet}
  */
  readonly dropRlGtpUDownlinkPacket?: number;
  /**
  * Rate-limit Drop: GTP-U Concurrent Tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_max_concurrent_tunnels DataThunderFwGtpStats#drop_rl_gtp_u_max_concurrent_tunnels}
  */
  readonly dropRlGtpUMaxConcurrentTunnels?: number;
  /**
  * Rate-limit Drop: GTP-U Total byte rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_total_byte DataThunderFwGtpStats#drop_rl_gtp_u_total_byte}
  */
  readonly dropRlGtpUTotalByte?: number;
  /**
  * Rate-limit Drop: GTP-U Total packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_total_packet DataThunderFwGtpStats#drop_rl_gtp_u_total_packet}
  */
  readonly dropRlGtpUTotalPacket?: number;
  /**
  * Rate-limit Drop: GTP-U Tunnel Creation rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_tunnel_create DataThunderFwGtpStats#drop_rl_gtp_u_tunnel_create}
  */
  readonly dropRlGtpUTunnelCreate?: number;
  /**
  * Rate-limit Drop: GTP-U Uplink byte rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_uplink_byte DataThunderFwGtpStats#drop_rl_gtp_u_uplink_byte}
  */
  readonly dropRlGtpUUplinkByte?: number;
  /**
  * Rate-limit Drop: GTP-U Uplink packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_uplink_packet DataThunderFwGtpStats#drop_rl_gtp_u_uplink_packet}
  */
  readonly dropRlGtpUUplinkPacket?: number;
  /**
  * Rate-limit Drop: Maximum GTPv0-C messages rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v0_c_agg DataThunderFwGtpStats#drop_rl_gtp_v0_c_agg}
  */
  readonly dropRlGtpV0CAgg?: number;
  /**
  * Rate-limit Drop: Maximum GTPv1-C messages rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v1_c_agg DataThunderFwGtpStats#drop_rl_gtp_v1_c_agg}
  */
  readonly dropRlGtpV1CAgg?: number;
  /**
  * Rate-limit Drop: GTPv1-C Create PDP Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v1_c_create_pdp_request DataThunderFwGtpStats#drop_rl_gtp_v1_c_create_pdp_request}
  */
  readonly dropRlGtpV1CCreatePdpRequest?: number;
  /**
  * Rate-limit Drop: GTPv1-C Update PDP Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v1_c_update_pdp_request DataThunderFwGtpStats#drop_rl_gtp_v1_c_update_pdp_request}
  */
  readonly dropRlGtpV1CUpdatePdpRequest?: number;
  /**
  * Rate-limit Drop: Maximum GTPv2-C messages rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v2_c_agg DataThunderFwGtpStats#drop_rl_gtp_v2_c_agg}
  */
  readonly dropRlGtpV2CAgg?: number;
  /**
  * Rate-limit Drop: GTPv2-C Create Session Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v2_c_create_session_request DataThunderFwGtpStats#drop_rl_gtp_v2_c_create_session_request}
  */
  readonly dropRlGtpV2CCreateSessionRequest?: number;
  /**
  * Rate-limit Drop: GTPv2-C Modify Bearer Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v2_c_modify_bearer_request DataThunderFwGtpStats#drop_rl_gtp_v2_c_modify_bearer_request}
  */
  readonly dropRlGtpV2CModifyBearerRequest?: number;
  /**
  * Validation Drop: Country Code Mismatch in IMSI and MSISDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_country_code_mismatch DataThunderFwGtpStats#drop_vld_country_code_mismatch}
  */
  readonly dropVldCountryCodeMismatch?: number;
  /**
  * Validation Drop: Cross Layer IP Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_cross_layer_correlation DataThunderFwGtpStats#drop_vld_cross_layer_correlation}
  */
  readonly dropVldCrossLayerCorrelation?: number;
  /**
  * Validation Drop: GTP Bearer count exceeded max (11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_bearer_count_exceed DataThunderFwGtpStats#drop_vld_gtp_bearer_count_exceed}
  */
  readonly dropVldGtpBearerCountExceed?: number;
  /**
  * Validation Drop: GTP-C Invalid APN Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_invalid_apn_len_drop DataThunderFwGtpStats#drop_vld_gtp_invalid_apn_len_drop}
  */
  readonly dropVldGtpInvalidApnLenDrop?: number;
  /**
  * Validation Drop: GTP-C Invalid IMSI Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_invalid_imsi_len_drop DataThunderFwGtpStats#drop_vld_gtp_invalid_imsi_len_drop}
  */
  readonly dropVldGtpInvalidImsiLenDrop?: number;
  /**
  * Validation Drop: GTP-U IP Address Spoofed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_u_spoofed_source_address DataThunderFwGtpStats#drop_vld_gtp_u_spoofed_source_address}
  */
  readonly dropVldGtpUSpoofedSourceAddress?: number;
  /**
  * Validation Drop: GTPv0-C IE Length Exceeds Message Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v0_c_ie_len_exceed_msg_len DataThunderFwGtpStats#drop_vld_gtp_v0_c_ie_len_exceed_msg_len}
  */
  readonly dropVldGtpV0CIeLenExceedMsgLen?: number;
  /**
  * GTPv0-C APN/IMSI Filtering dropped (No APN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn DataThunderFwGtpStats#drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn}
  */
  readonly dropVldGtpV0CMessageDroppedApnFilteringNoApn?: number;
  /**
  * Validation Drop: GTPv0-C Message Length Mismatch Across Layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v0_c_message_length_mismatch DataThunderFwGtpStats#drop_vld_gtp_v0_c_message_length_mismatch}
  */
  readonly dropVldGtpV0CMessageLengthMismatch?: number;
  /**
  * Validation Drop: GTPv0-C PDU Notification Request with TEID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v0_c_message_with_teid_zero_expected DataThunderFwGtpStats#drop_vld_gtp_v0_c_message_with_teid_zero_expected}
  */
  readonly dropVldGtpV0CMessageWithTeidZeroExpected?: number;
  /**
  * Validation Drop: GTPv1-C IE Length Exceeds Message Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v1_c_ie_len_exceed_msg_len DataThunderFwGtpStats#drop_vld_gtp_v1_c_ie_len_exceed_msg_len}
  */
  readonly dropVldGtpV1CIeLenExceedMsgLen?: number;
  /**
  * GTPv1-C APN/IMSI Filtering dropped (No APN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn DataThunderFwGtpStats#drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn}
  */
  readonly dropVldGtpV1CMessageDroppedApnFilteringNoApn?: number;
  /**
  * Validation Drop: GTPv1-C Message Length Mismatch Across Layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v1_c_message_length_mismatch DataThunderFwGtpStats#drop_vld_gtp_v1_c_message_length_mismatch}
  */
  readonly dropVldGtpV1CMessageLengthMismatch?: number;
  /**
  * Validation Drop: GTPv1-C PDU Notification Request with TEID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v1_c_message_with_teid_zero_expected DataThunderFwGtpStats#drop_vld_gtp_v1_c_message_with_teid_zero_expected}
  */
  readonly dropVldGtpV1CMessageWithTeidZeroExpected?: number;
  /**
  * Validation Drop: GTPv2-C IE Length Exceeds Message Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v2_c_ie_len_exceed_msg_len DataThunderFwGtpStats#drop_vld_gtp_v2_c_ie_len_exceed_msg_len}
  */
  readonly dropVldGtpV2CIeLenExceedMsgLen?: number;
  /**
  * GTPv2-C APN/IMSI Filtering dropped (No APN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn DataThunderFwGtpStats#drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn}
  */
  readonly dropVldGtpV2CMessageDroppedApnFilteringNoApn?: number;
  /**
  * Validation Drop: GTPv2-C Message Length Mismatch Across Layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v2_c_message_length_mismatch DataThunderFwGtpStats#drop_vld_gtp_v2_c_message_length_mismatch}
  */
  readonly dropVldGtpV2CMessageLengthMismatch?: number;
  /**
  * Validation Drop: GTPv2-C Create Session Request with TEID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v2_c_message_with_teid_zero_expected DataThunderFwGtpStats#drop_vld_gtp_v2_c_message_with_teid_zero_expected}
  */
  readonly dropVldGtpV2CMessageWithTeidZeroExpected?: number;
  /**
  * Validation Drop: GTPV2-C Wrong LBI in Create Bearer Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v2_wrong_lbi_create_bearer_req DataThunderFwGtpStats#drop_vld_gtp_v2_wrong_lbi_create_bearer_req}
  */
  readonly dropVldGtpV2WrongLbiCreateBearerReq?: number;
  /**
  * Validation Drop: GTPV0-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtpv0_seqnum_buffer_full DataThunderFwGtpStats#drop_vld_gtpv0_seqnum_buffer_full}
  */
  readonly dropVldGtpv0SeqnumBufferFull?: number;
  /**
  * Validation Drop: GTPV0-c Subscriber Attributes Missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtpv0_subscriber_attr_miss DataThunderFwGtpStats#drop_vld_gtpv0_subscriber_attr_miss}
  */
  readonly dropVldGtpv0SubscriberAttrMiss?: number;
  /**
  * Validation Drop: GTPV1-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtpv1_seqnum_buffer_full DataThunderFwGtpStats#drop_vld_gtpv1_seqnum_buffer_full}
  */
  readonly dropVldGtpv1SeqnumBufferFull?: number;
  /**
  * Validation Drop: GTPV1-c Subscriber Attributes Missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtpv1_subscriber_attr_miss DataThunderFwGtpStats#drop_vld_gtpv1_subscriber_attr_miss}
  */
  readonly dropVldGtpv1SubscriberAttrMiss?: number;
  /**
  * Validation Drop: GTPV2-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtpv2_seqnum_buffer_full DataThunderFwGtpStats#drop_vld_gtpv2_seqnum_buffer_full}
  */
  readonly dropVldGtpv2SeqnumBufferFull?: number;
  /**
  * Validation Drop: GTPV2-c Subscriber Attributes Missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtpv2_subscriber_attr_miss DataThunderFwGtpStats#drop_vld_gtpv2_subscriber_attr_miss}
  */
  readonly dropVldGtpv2SubscriberAttrMiss?: number;
  /**
  * Validation Drop: Invalid Flow Label in GTPv0-C Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_invalid_flow_label_v0 DataThunderFwGtpStats#drop_vld_invalid_flow_label_v0}
  */
  readonly dropVldInvalidFlowLabelV0?: number;
  /**
  * Validation Drop: Piggyback message invalid packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_invalid_pkt_len_piggyback DataThunderFwGtpStats#drop_vld_invalid_pkt_len_piggyback}
  */
  readonly dropVldInvalidPktLenPiggyback?: number;
  /**
  * Validation Drop: Invalid TEID Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_invalid_teid DataThunderFwGtpStats#drop_vld_invalid_teid}
  */
  readonly dropVldInvalidTeid?: number;
  /**
  * Validation Drop: Mandatory IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_mandatory_information_element DataThunderFwGtpStats#drop_vld_mandatory_information_element}
  */
  readonly dropVldMandatoryInformationElement?: number;
  /**
  * Validation Drop: Message Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_message_length DataThunderFwGtpStats#drop_vld_message_length}
  */
  readonly dropVldMessageLength?: number;
  /**
  * Validation Drop: GTPv1-C Message Out of Order IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_out_of_order_ie DataThunderFwGtpStats#drop_vld_out_of_order_ie}
  */
  readonly dropVldOutOfOrderIe?: number;
  /**
  * Validation Drop: Out Of State GTP Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_out_of_state DataThunderFwGtpStats#drop_vld_out_of_state}
  */
  readonly dropVldOutOfState?: number;
  /**
  * Validation Drop: Unexpected IE Present in Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_out_of_state_ie DataThunderFwGtpStats#drop_vld_out_of_state_ie}
  */
  readonly dropVldOutOfStateIe?: number;
  /**
  * Validation Drop: Protocol flag in Header Field not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_protocol_flag_unset DataThunderFwGtpStats#drop_vld_protocol_flag_unset}
  */
  readonly dropVldProtocolFlagUnset?: number;
  /**
  * Validation Drop: Reserved Header Field Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_reserved_field_set DataThunderFwGtpStats#drop_vld_reserved_field_set}
  */
  readonly dropVldReservedFieldSet?: number;
  /**
  * Validation Drop: Reserved IE Field Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_reserved_information_element DataThunderFwGtpStats#drop_vld_reserved_information_element}
  */
  readonly dropVldReservedInformationElement?: number;
  /**
  * Validation Drop: piggyback message anomaly failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_sanity_failed_piggyback DataThunderFwGtpStats#drop_vld_sanity_failed_piggyback}
  */
  readonly dropVldSanityFailedPiggyback?: number;
  /**
  * Validation Drop: GTP-C Sequence number Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_sequence_num_correlation DataThunderFwGtpStats#drop_vld_sequence_num_correlation}
  */
  readonly dropVldSequenceNumCorrelation?: number;
  /**
  * Validation Drop: Tunnel Header Flag Not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_tunnel_id_flag DataThunderFwGtpStats#drop_vld_tunnel_id_flag}
  */
  readonly dropVldTunnelIdFlag?: number;
  /**
  * Validation Drop: Message type not supported by GTP Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_unsupported_message_type DataThunderFwGtpStats#drop_vld_unsupported_message_type}
  */
  readonly dropVldUnsupportedMessageType?: number;
  /**
  * Validation Drop: GTPv0-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_v0_reserved_message_drop DataThunderFwGtpStats#drop_vld_v0_reserved_message_drop}
  */
  readonly dropVldV0ReservedMessageDrop?: number;
  /**
  * Validation Drop: GTPv1-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_v1_reserved_message_drop DataThunderFwGtpStats#drop_vld_v1_reserved_message_drop}
  */
  readonly dropVldV1ReservedMessageDrop?: number;
  /**
  * Validation Drop: GTPv2-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_v2_reserved_message_drop DataThunderFwGtpStats#drop_vld_v2_reserved_message_drop}
  */
  readonly dropVldV2ReservedMessageDrop?: number;
  /**
  * Validation Drop: Invalid GTP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_version_not_supported DataThunderFwGtpStats#drop_vld_version_not_supported}
  */
  readonly dropVldVersionNotSupported?: number;
  /**
  * GTP-C matching a conn with Handover In Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_c_handover_in_progress_with_conn DataThunderFwGtpStats#gtp_c_handover_in_progress_with_conn}
  */
  readonly gtpCHandoverInProgressWithConn?: number;
  /**
  * GTP Path Management Messages Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_path_management_message DataThunderFwGtpStats#gtp_path_management_message}
  */
  readonly gtpPathManagementMessage?: number;
  /**
  * GTP-U Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_tunnel_created DataThunderFwGtpStats#gtp_u_tunnel_created}
  */
  readonly gtpUTunnelCreated?: number;
  /**
  * GTP-U Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_tunnel_deleted DataThunderFwGtpStats#gtp_u_tunnel_deleted}
  */
  readonly gtpUTunnelDeleted?: number;
  /**
  * GTPV0-C Create PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_create_pdp_resp_unsuccess DataThunderFwGtpStats#gtp_v0_c_create_pdp_resp_unsuccess}
  */
  readonly gtpV0CCreatePdpRespUnsuccess?: number;
  /**
  * GTPv0-C Half open tunnel closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_half_open_tunnel_closed DataThunderFwGtpStats#gtp_v0_c_half_open_tunnel_closed}
  */
  readonly gtpV0CHalfOpenTunnelClosed?: number;
  /**
  * GTPv0-C APN/IMSI Filtering Skipped (No IMSI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_message_skipped_apn_filtering_no_imsi DataThunderFwGtpStats#gtp_v0_c_message_skipped_apn_filtering_no_imsi}
  */
  readonly gtpV0CMessageSkippedApnFilteringNoImsi?: number;
  /**
  * GTPv0-C MSISDN Filtering Skipped (No MSISDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn DataThunderFwGtpStats#gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn}
  */
  readonly gtpV0CMessageSkippedMsisdnFilteringNoMsisdn?: number;
  /**
  * GTPv0-C Packet With Dummy MSISDN Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_packet_dummy_msisdn DataThunderFwGtpStats#gtp_v0_c_packet_dummy_msisdn}
  */
  readonly gtpV0CPacketDummyMsisdn?: number;
  /**
  * GTPv0-C PDU Notification Reject Request Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_pdu_notification_reject_request_forward DataThunderFwGtpStats#gtp_v0_c_pdu_notification_reject_request_forward}
  */
  readonly gtpV0CPduNotificationRejectRequestForward?: number;
  /**
  * GTPv0-C PDU Notification Request Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_pdu_notification_request_forward DataThunderFwGtpStats#gtp_v0_c_pdu_notification_request_forward}
  */
  readonly gtpV0CPduNotificationRequestForward?: number;
  /**
  * GTPv0-C Reserved Message Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_reserved_message_allow DataThunderFwGtpStats#gtp_v0_c_reserved_message_allow}
  */
  readonly gtpV0CReservedMessageAllow?: number;
  /**
  * GTPv0-C Tunnel Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_tunnel_closed DataThunderFwGtpStats#gtp_v0_c_tunnel_closed}
  */
  readonly gtpV0CTunnelClosed?: number;
  /**
  * GTPv0-C Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_tunnel_created DataThunderFwGtpStats#gtp_v0_c_tunnel_created}
  */
  readonly gtpV0CTunnelCreated?: number;
  /**
  * GTPv0-C Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_tunnel_deleted DataThunderFwGtpStats#gtp_v0_c_tunnel_deleted}
  */
  readonly gtpV0CTunnelDeleted?: number;
  /**
  * GTPv0-C Tunnel Deleted with Restart/failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_tunnel_deleted_restart DataThunderFwGtpStats#gtp_v0_c_tunnel_deleted_restart}
  */
  readonly gtpV0CTunnelDeletedRestart?: number;
  /**
  * GTPv0-C Tunnel Delete Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_tunnel_half_closed DataThunderFwGtpStats#gtp_v0_c_tunnel_half_closed}
  */
  readonly gtpV0CTunnelHalfClosed?: number;
  /**
  * GTPv0-C Half open tunnel created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_tunnel_half_open DataThunderFwGtpStats#gtp_v0_c_tunnel_half_open}
  */
  readonly gtpV0CTunnelHalfOpen?: number;
  /**
  * GTPV0-C Update PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_update_pdp_resp_unsuccess DataThunderFwGtpStats#gtp_v0_c_update_pdp_resp_unsuccess}
  */
  readonly gtpV0CUpdatePdpRespUnsuccess?: number;
  /**
  * GTPV1-C Create PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_create_pdp_resp_unsuccess DataThunderFwGtpStats#gtp_v1_c_create_pdp_resp_unsuccess}
  */
  readonly gtpV1CCreatePdpRespUnsuccess?: number;
  /**
  * GTPv1-C Half open tunnel closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_half_open_tunnel_closed DataThunderFwGtpStats#gtp_v1_c_half_open_tunnel_closed}
  */
  readonly gtpV1CHalfOpenTunnelClosed?: number;
  /**
  * GTPv1-C APN/IMSI Filtering Skipped (No IMSI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_message_skipped_apn_filtering_no_imsi DataThunderFwGtpStats#gtp_v1_c_message_skipped_apn_filtering_no_imsi}
  */
  readonly gtpV1CMessageSkippedApnFilteringNoImsi?: number;
  /**
  * GTPv1-C MSISDN Filtering Skipped (No MSISDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn DataThunderFwGtpStats#gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn}
  */
  readonly gtpV1CMessageSkippedMsisdnFilteringNoMsisdn?: number;
  /**
  * GTPv1-C Packet With Dummy MSISDN Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_packet_dummy_msisdn DataThunderFwGtpStats#gtp_v1_c_packet_dummy_msisdn}
  */
  readonly gtpV1CPacketDummyMsisdn?: number;
  /**
  * GTPv1-C PDU Notification Reject Request Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_pdu_notification_reject_request_forward DataThunderFwGtpStats#gtp_v1_c_pdu_notification_reject_request_forward}
  */
  readonly gtpV1CPduNotificationRejectRequestForward?: number;
  /**
  * GTPv1-C PDU Notification Request Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_pdu_notification_request_forward DataThunderFwGtpStats#gtp_v1_c_pdu_notification_request_forward}
  */
  readonly gtpV1CPduNotificationRequestForward?: number;
  /**
  * GTPv1-C Reserved Message Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_reserved_message_allow DataThunderFwGtpStats#gtp_v1_c_reserved_message_allow}
  */
  readonly gtpV1CReservedMessageAllow?: number;
  /**
  * GTPv1-C Tunnel Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_tunnel_closed DataThunderFwGtpStats#gtp_v1_c_tunnel_closed}
  */
  readonly gtpV1CTunnelClosed?: number;
  /**
  * GTPv1-C Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_tunnel_created DataThunderFwGtpStats#gtp_v1_c_tunnel_created}
  */
  readonly gtpV1CTunnelCreated?: number;
  /**
  * GTPv1-C Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_tunnel_deleted DataThunderFwGtpStats#gtp_v1_c_tunnel_deleted}
  */
  readonly gtpV1CTunnelDeleted?: number;
  /**
  * GTPv1-C Tunnel Deleted with Restart/failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_tunnel_deleted_restart DataThunderFwGtpStats#gtp_v1_c_tunnel_deleted_restart}
  */
  readonly gtpV1CTunnelDeletedRestart?: number;
  /**
  * GTPv1-C Tunnel Delete Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_tunnel_half_closed DataThunderFwGtpStats#gtp_v1_c_tunnel_half_closed}
  */
  readonly gtpV1CTunnelHalfClosed?: number;
  /**
  * GTPv1-C Half open tunnel created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_tunnel_half_open DataThunderFwGtpStats#gtp_v1_c_tunnel_half_open}
  */
  readonly gtpV1CTunnelHalfOpen?: number;
  /**
  * GTPV1-C Update PDP Context response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_update_pdp_resp_unsuccess DataThunderFwGtpStats#gtp_v1_c_update_pdp_resp_unsuccess}
  */
  readonly gtpV1CUpdatePdpRespUnsuccess?: number;
  /**
  * GTPV2-C Create Session Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_create_sess_resp_unsuccess DataThunderFwGtpStats#gtp_v2_c_create_sess_resp_unsuccess}
  */
  readonly gtpV2CCreateSessRespUnsuccess?: number;
  /**
  * GTPv2-C Half open tunnel closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_half_open_tunnel_closed DataThunderFwGtpStats#gtp_v2_c_half_open_tunnel_closed}
  */
  readonly gtpV2CHalfOpenTunnelClosed?: number;
  /**
  * GTPv2-C APN/IMSI Filtering Skipped (No IMSI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_message_skipped_apn_filtering_no_imsi DataThunderFwGtpStats#gtp_v2_c_message_skipped_apn_filtering_no_imsi}
  */
  readonly gtpV2CMessageSkippedApnFilteringNoImsi?: number;
  /**
  * GTPv2-C MSISDN Filtering Skipped (No MSISDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn DataThunderFwGtpStats#gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn}
  */
  readonly gtpV2CMessageSkippedMsisdnFilteringNoMsisdn?: number;
  /**
  * GTPV2-C Modify Bearer Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_mod_bearer_resp_unsuccess DataThunderFwGtpStats#gtp_v2_c_mod_bearer_resp_unsuccess}
  */
  readonly gtpV2CModBearerRespUnsuccess?: number;
  /**
  * GTPv2-C Packet With Dummy MSISDN Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_packet_dummy_msisdn DataThunderFwGtpStats#gtp_v2_c_packet_dummy_msisdn}
  */
  readonly gtpV2CPacketDummyMsisdn?: number;
  /**
  * GTPv2-C Piggyback Messages seen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_piggyback_message DataThunderFwGtpStats#gtp_v2_c_piggyback_message}
  */
  readonly gtpV2CPiggybackMessage?: number;
  /**
  * GTPv2-C Reserved Message Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_reserved_message_allow DataThunderFwGtpStats#gtp_v2_c_reserved_message_allow}
  */
  readonly gtpV2CReservedMessageAllow?: number;
  /**
  * GTPv2-C Tunnel Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_tunnel_closed DataThunderFwGtpStats#gtp_v2_c_tunnel_closed}
  */
  readonly gtpV2CTunnelClosed?: number;
  /**
  * GTPv2-C Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_tunnel_created DataThunderFwGtpStats#gtp_v2_c_tunnel_created}
  */
  readonly gtpV2CTunnelCreated?: number;
  /**
  * GTPv2-C Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_tunnel_deleted DataThunderFwGtpStats#gtp_v2_c_tunnel_deleted}
  */
  readonly gtpV2CTunnelDeleted?: number;
  /**
  * GTPv2-C Tunnel Deleted with Restart/failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_tunnel_deleted_restart DataThunderFwGtpStats#gtp_v2_c_tunnel_deleted_restart}
  */
  readonly gtpV2CTunnelDeletedRestart?: number;
  /**
  * GTPv2-C Tunnel Delete Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_tunnel_half_closed DataThunderFwGtpStats#gtp_v2_c_tunnel_half_closed}
  */
  readonly gtpV2CTunnelHalfClosed?: number;
  /**
  * GTPv2-C Half open tunnel created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_tunnel_half_open DataThunderFwGtpStats#gtp_v2_c_tunnel_half_open}
  */
  readonly gtpV2CTunnelHalfOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#key_name DataThunderFwGtpStats#key_name}
  */
  readonly keyName?: string;
  /**
  * Uplink Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#uplink_bytes DataThunderFwGtpStats#uplink_bytes}
  */
  readonly uplinkBytes?: number;
  /**
  * Uplink Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#uplink_pkts DataThunderFwGtpStats#uplink_pkts}
  */
  readonly uplinkPkts?: number;
}

export function dataThunderFwGtpStatsApnPrefixStatsToTerraform(struct?: DataThunderFwGtpStatsApnPrefixStatsOutputReference | DataThunderFwGtpStatsApnPrefixStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    downlink_bytes: cdktf.numberToTerraform(struct!.downlinkBytes),
    downlink_pkts: cdktf.numberToTerraform(struct!.downlinkPkts),
    drop_flt_apn_filtering: cdktf.numberToTerraform(struct!.dropFltApnFiltering),
    drop_flt_gtp_in_gtp: cdktf.numberToTerraform(struct!.dropFltGtpInGtp),
    drop_flt_message_filtering: cdktf.numberToTerraform(struct!.dropFltMessageFiltering),
    drop_flt_msisdn_filtering: cdktf.numberToTerraform(struct!.dropFltMsisdnFiltering),
    drop_flt_rat_type_filtering: cdktf.numberToTerraform(struct!.dropFltRatTypeFiltering),
    drop_rl_gtp_u_downlink_byte: cdktf.numberToTerraform(struct!.dropRlGtpUDownlinkByte),
    drop_rl_gtp_u_downlink_packet: cdktf.numberToTerraform(struct!.dropRlGtpUDownlinkPacket),
    drop_rl_gtp_u_max_concurrent_tunnels: cdktf.numberToTerraform(struct!.dropRlGtpUMaxConcurrentTunnels),
    drop_rl_gtp_u_total_byte: cdktf.numberToTerraform(struct!.dropRlGtpUTotalByte),
    drop_rl_gtp_u_total_packet: cdktf.numberToTerraform(struct!.dropRlGtpUTotalPacket),
    drop_rl_gtp_u_tunnel_create: cdktf.numberToTerraform(struct!.dropRlGtpUTunnelCreate),
    drop_rl_gtp_u_uplink_byte: cdktf.numberToTerraform(struct!.dropRlGtpUUplinkByte),
    drop_rl_gtp_u_uplink_packet: cdktf.numberToTerraform(struct!.dropRlGtpUUplinkPacket),
    drop_rl_gtp_v0_c_agg: cdktf.numberToTerraform(struct!.dropRlGtpV0CAgg),
    drop_rl_gtp_v1_c_agg: cdktf.numberToTerraform(struct!.dropRlGtpV1CAgg),
    drop_rl_gtp_v1_c_create_pdp_request: cdktf.numberToTerraform(struct!.dropRlGtpV1CCreatePdpRequest),
    drop_rl_gtp_v1_c_update_pdp_request: cdktf.numberToTerraform(struct!.dropRlGtpV1CUpdatePdpRequest),
    drop_rl_gtp_v2_c_agg: cdktf.numberToTerraform(struct!.dropRlGtpV2CAgg),
    drop_rl_gtp_v2_c_create_session_request: cdktf.numberToTerraform(struct!.dropRlGtpV2CCreateSessionRequest),
    drop_rl_gtp_v2_c_modify_bearer_request: cdktf.numberToTerraform(struct!.dropRlGtpV2CModifyBearerRequest),
    drop_vld_country_code_mismatch: cdktf.numberToTerraform(struct!.dropVldCountryCodeMismatch),
    drop_vld_cross_layer_correlation: cdktf.numberToTerraform(struct!.dropVldCrossLayerCorrelation),
    drop_vld_gtp_bearer_count_exceed: cdktf.numberToTerraform(struct!.dropVldGtpBearerCountExceed),
    drop_vld_gtp_invalid_apn_len_drop: cdktf.numberToTerraform(struct!.dropVldGtpInvalidApnLenDrop),
    drop_vld_gtp_invalid_imsi_len_drop: cdktf.numberToTerraform(struct!.dropVldGtpInvalidImsiLenDrop),
    drop_vld_gtp_u_spoofed_source_address: cdktf.numberToTerraform(struct!.dropVldGtpUSpoofedSourceAddress),
    drop_vld_gtp_v0_c_ie_len_exceed_msg_len: cdktf.numberToTerraform(struct!.dropVldGtpV0CIeLenExceedMsgLen),
    drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn: cdktf.numberToTerraform(struct!.dropVldGtpV0CMessageDroppedApnFilteringNoApn),
    drop_vld_gtp_v0_c_message_length_mismatch: cdktf.numberToTerraform(struct!.dropVldGtpV0CMessageLengthMismatch),
    drop_vld_gtp_v0_c_message_with_teid_zero_expected: cdktf.numberToTerraform(struct!.dropVldGtpV0CMessageWithTeidZeroExpected),
    drop_vld_gtp_v1_c_ie_len_exceed_msg_len: cdktf.numberToTerraform(struct!.dropVldGtpV1CIeLenExceedMsgLen),
    drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn: cdktf.numberToTerraform(struct!.dropVldGtpV1CMessageDroppedApnFilteringNoApn),
    drop_vld_gtp_v1_c_message_length_mismatch: cdktf.numberToTerraform(struct!.dropVldGtpV1CMessageLengthMismatch),
    drop_vld_gtp_v1_c_message_with_teid_zero_expected: cdktf.numberToTerraform(struct!.dropVldGtpV1CMessageWithTeidZeroExpected),
    drop_vld_gtp_v2_c_ie_len_exceed_msg_len: cdktf.numberToTerraform(struct!.dropVldGtpV2CIeLenExceedMsgLen),
    drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn: cdktf.numberToTerraform(struct!.dropVldGtpV2CMessageDroppedApnFilteringNoApn),
    drop_vld_gtp_v2_c_message_length_mismatch: cdktf.numberToTerraform(struct!.dropVldGtpV2CMessageLengthMismatch),
    drop_vld_gtp_v2_c_message_with_teid_zero_expected: cdktf.numberToTerraform(struct!.dropVldGtpV2CMessageWithTeidZeroExpected),
    drop_vld_gtp_v2_wrong_lbi_create_bearer_req: cdktf.numberToTerraform(struct!.dropVldGtpV2WrongLbiCreateBearerReq),
    drop_vld_gtpv0_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv0SeqnumBufferFull),
    drop_vld_gtpv0_subscriber_attr_miss: cdktf.numberToTerraform(struct!.dropVldGtpv0SubscriberAttrMiss),
    drop_vld_gtpv1_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv1SeqnumBufferFull),
    drop_vld_gtpv1_subscriber_attr_miss: cdktf.numberToTerraform(struct!.dropVldGtpv1SubscriberAttrMiss),
    drop_vld_gtpv2_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv2SeqnumBufferFull),
    drop_vld_gtpv2_subscriber_attr_miss: cdktf.numberToTerraform(struct!.dropVldGtpv2SubscriberAttrMiss),
    drop_vld_invalid_flow_label_v0: cdktf.numberToTerraform(struct!.dropVldInvalidFlowLabelV0),
    drop_vld_invalid_pkt_len_piggyback: cdktf.numberToTerraform(struct!.dropVldInvalidPktLenPiggyback),
    drop_vld_invalid_teid: cdktf.numberToTerraform(struct!.dropVldInvalidTeid),
    drop_vld_mandatory_information_element: cdktf.numberToTerraform(struct!.dropVldMandatoryInformationElement),
    drop_vld_message_length: cdktf.numberToTerraform(struct!.dropVldMessageLength),
    drop_vld_out_of_order_ie: cdktf.numberToTerraform(struct!.dropVldOutOfOrderIe),
    drop_vld_out_of_state: cdktf.numberToTerraform(struct!.dropVldOutOfState),
    drop_vld_out_of_state_ie: cdktf.numberToTerraform(struct!.dropVldOutOfStateIe),
    drop_vld_protocol_flag_unset: cdktf.numberToTerraform(struct!.dropVldProtocolFlagUnset),
    drop_vld_reserved_field_set: cdktf.numberToTerraform(struct!.dropVldReservedFieldSet),
    drop_vld_reserved_information_element: cdktf.numberToTerraform(struct!.dropVldReservedInformationElement),
    drop_vld_sanity_failed_piggyback: cdktf.numberToTerraform(struct!.dropVldSanityFailedPiggyback),
    drop_vld_sequence_num_correlation: cdktf.numberToTerraform(struct!.dropVldSequenceNumCorrelation),
    drop_vld_tunnel_id_flag: cdktf.numberToTerraform(struct!.dropVldTunnelIdFlag),
    drop_vld_unsupported_message_type: cdktf.numberToTerraform(struct!.dropVldUnsupportedMessageType),
    drop_vld_v0_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV0ReservedMessageDrop),
    drop_vld_v1_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV1ReservedMessageDrop),
    drop_vld_v2_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV2ReservedMessageDrop),
    drop_vld_version_not_supported: cdktf.numberToTerraform(struct!.dropVldVersionNotSupported),
    gtp_c_handover_in_progress_with_conn: cdktf.numberToTerraform(struct!.gtpCHandoverInProgressWithConn),
    gtp_path_management_message: cdktf.numberToTerraform(struct!.gtpPathManagementMessage),
    gtp_u_tunnel_created: cdktf.numberToTerraform(struct!.gtpUTunnelCreated),
    gtp_u_tunnel_deleted: cdktf.numberToTerraform(struct!.gtpUTunnelDeleted),
    gtp_v0_c_create_pdp_resp_unsuccess: cdktf.numberToTerraform(struct!.gtpV0CCreatePdpRespUnsuccess),
    gtp_v0_c_half_open_tunnel_closed: cdktf.numberToTerraform(struct!.gtpV0CHalfOpenTunnelClosed),
    gtp_v0_c_message_skipped_apn_filtering_no_imsi: cdktf.numberToTerraform(struct!.gtpV0CMessageSkippedApnFilteringNoImsi),
    gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn: cdktf.numberToTerraform(struct!.gtpV0CMessageSkippedMsisdnFilteringNoMsisdn),
    gtp_v0_c_packet_dummy_msisdn: cdktf.numberToTerraform(struct!.gtpV0CPacketDummyMsisdn),
    gtp_v0_c_pdu_notification_reject_request_forward: cdktf.numberToTerraform(struct!.gtpV0CPduNotificationRejectRequestForward),
    gtp_v0_c_pdu_notification_request_forward: cdktf.numberToTerraform(struct!.gtpV0CPduNotificationRequestForward),
    gtp_v0_c_reserved_message_allow: cdktf.numberToTerraform(struct!.gtpV0CReservedMessageAllow),
    gtp_v0_c_tunnel_closed: cdktf.numberToTerraform(struct!.gtpV0CTunnelClosed),
    gtp_v0_c_tunnel_created: cdktf.numberToTerraform(struct!.gtpV0CTunnelCreated),
    gtp_v0_c_tunnel_deleted: cdktf.numberToTerraform(struct!.gtpV0CTunnelDeleted),
    gtp_v0_c_tunnel_deleted_restart: cdktf.numberToTerraform(struct!.gtpV0CTunnelDeletedRestart),
    gtp_v0_c_tunnel_half_closed: cdktf.numberToTerraform(struct!.gtpV0CTunnelHalfClosed),
    gtp_v0_c_tunnel_half_open: cdktf.numberToTerraform(struct!.gtpV0CTunnelHalfOpen),
    gtp_v0_c_update_pdp_resp_unsuccess: cdktf.numberToTerraform(struct!.gtpV0CUpdatePdpRespUnsuccess),
    gtp_v1_c_create_pdp_resp_unsuccess: cdktf.numberToTerraform(struct!.gtpV1CCreatePdpRespUnsuccess),
    gtp_v1_c_half_open_tunnel_closed: cdktf.numberToTerraform(struct!.gtpV1CHalfOpenTunnelClosed),
    gtp_v1_c_message_skipped_apn_filtering_no_imsi: cdktf.numberToTerraform(struct!.gtpV1CMessageSkippedApnFilteringNoImsi),
    gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn: cdktf.numberToTerraform(struct!.gtpV1CMessageSkippedMsisdnFilteringNoMsisdn),
    gtp_v1_c_packet_dummy_msisdn: cdktf.numberToTerraform(struct!.gtpV1CPacketDummyMsisdn),
    gtp_v1_c_pdu_notification_reject_request_forward: cdktf.numberToTerraform(struct!.gtpV1CPduNotificationRejectRequestForward),
    gtp_v1_c_pdu_notification_request_forward: cdktf.numberToTerraform(struct!.gtpV1CPduNotificationRequestForward),
    gtp_v1_c_reserved_message_allow: cdktf.numberToTerraform(struct!.gtpV1CReservedMessageAllow),
    gtp_v1_c_tunnel_closed: cdktf.numberToTerraform(struct!.gtpV1CTunnelClosed),
    gtp_v1_c_tunnel_created: cdktf.numberToTerraform(struct!.gtpV1CTunnelCreated),
    gtp_v1_c_tunnel_deleted: cdktf.numberToTerraform(struct!.gtpV1CTunnelDeleted),
    gtp_v1_c_tunnel_deleted_restart: cdktf.numberToTerraform(struct!.gtpV1CTunnelDeletedRestart),
    gtp_v1_c_tunnel_half_closed: cdktf.numberToTerraform(struct!.gtpV1CTunnelHalfClosed),
    gtp_v1_c_tunnel_half_open: cdktf.numberToTerraform(struct!.gtpV1CTunnelHalfOpen),
    gtp_v1_c_update_pdp_resp_unsuccess: cdktf.numberToTerraform(struct!.gtpV1CUpdatePdpRespUnsuccess),
    gtp_v2_c_create_sess_resp_unsuccess: cdktf.numberToTerraform(struct!.gtpV2CCreateSessRespUnsuccess),
    gtp_v2_c_half_open_tunnel_closed: cdktf.numberToTerraform(struct!.gtpV2CHalfOpenTunnelClosed),
    gtp_v2_c_message_skipped_apn_filtering_no_imsi: cdktf.numberToTerraform(struct!.gtpV2CMessageSkippedApnFilteringNoImsi),
    gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn: cdktf.numberToTerraform(struct!.gtpV2CMessageSkippedMsisdnFilteringNoMsisdn),
    gtp_v2_c_mod_bearer_resp_unsuccess: cdktf.numberToTerraform(struct!.gtpV2CModBearerRespUnsuccess),
    gtp_v2_c_packet_dummy_msisdn: cdktf.numberToTerraform(struct!.gtpV2CPacketDummyMsisdn),
    gtp_v2_c_piggyback_message: cdktf.numberToTerraform(struct!.gtpV2CPiggybackMessage),
    gtp_v2_c_reserved_message_allow: cdktf.numberToTerraform(struct!.gtpV2CReservedMessageAllow),
    gtp_v2_c_tunnel_closed: cdktf.numberToTerraform(struct!.gtpV2CTunnelClosed),
    gtp_v2_c_tunnel_created: cdktf.numberToTerraform(struct!.gtpV2CTunnelCreated),
    gtp_v2_c_tunnel_deleted: cdktf.numberToTerraform(struct!.gtpV2CTunnelDeleted),
    gtp_v2_c_tunnel_deleted_restart: cdktf.numberToTerraform(struct!.gtpV2CTunnelDeletedRestart),
    gtp_v2_c_tunnel_half_closed: cdktf.numberToTerraform(struct!.gtpV2CTunnelHalfClosed),
    gtp_v2_c_tunnel_half_open: cdktf.numberToTerraform(struct!.gtpV2CTunnelHalfOpen),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    uplink_bytes: cdktf.numberToTerraform(struct!.uplinkBytes),
    uplink_pkts: cdktf.numberToTerraform(struct!.uplinkPkts),
  }
}


export function dataThunderFwGtpStatsApnPrefixStatsToHclTerraform(struct?: DataThunderFwGtpStatsApnPrefixStatsOutputReference | DataThunderFwGtpStatsApnPrefixStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    downlink_bytes: {
      value: cdktf.numberToHclTerraform(struct!.downlinkBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    downlink_pkts: {
      value: cdktf.numberToHclTerraform(struct!.downlinkPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_flt_apn_filtering: {
      value: cdktf.numberToHclTerraform(struct!.dropFltApnFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_flt_gtp_in_gtp: {
      value: cdktf.numberToHclTerraform(struct!.dropFltGtpInGtp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_flt_message_filtering: {
      value: cdktf.numberToHclTerraform(struct!.dropFltMessageFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_flt_msisdn_filtering: {
      value: cdktf.numberToHclTerraform(struct!.dropFltMsisdnFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_flt_rat_type_filtering: {
      value: cdktf.numberToHclTerraform(struct!.dropFltRatTypeFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_downlink_byte: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUDownlinkByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_downlink_packet: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUDownlinkPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_max_concurrent_tunnels: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUMaxConcurrentTunnels),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_total_byte: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUTotalByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_total_packet: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUTotalPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_tunnel_create: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUTunnelCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_uplink_byte: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUUplinkByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_uplink_packet: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUUplinkPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v0_c_agg: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV0CAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v1_c_agg: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV1CAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v1_c_create_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV1CCreatePdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v1_c_update_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV1CUpdatePdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v2_c_agg: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV2CAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v2_c_create_session_request: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV2CCreateSessionRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v2_c_modify_bearer_request: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV2CModifyBearerRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_country_code_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dropVldCountryCodeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_cross_layer_correlation: {
      value: cdktf.numberToHclTerraform(struct!.dropVldCrossLayerCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_bearer_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpBearerCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_invalid_apn_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpInvalidApnLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_invalid_imsi_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpInvalidImsiLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_u_spoofed_source_address: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpUSpoofedSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v0_c_ie_len_exceed_msg_len: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV0CIeLenExceedMsgLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV0CMessageDroppedApnFilteringNoApn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v0_c_message_length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV0CMessageLengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v0_c_message_with_teid_zero_expected: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV0CMessageWithTeidZeroExpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v1_c_ie_len_exceed_msg_len: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV1CIeLenExceedMsgLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV1CMessageDroppedApnFilteringNoApn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v1_c_message_length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV1CMessageLengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v1_c_message_with_teid_zero_expected: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV1CMessageWithTeidZeroExpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_c_ie_len_exceed_msg_len: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2CIeLenExceedMsgLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2CMessageDroppedApnFilteringNoApn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_c_message_length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2CMessageLengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_c_message_with_teid_zero_expected: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2CMessageWithTeidZeroExpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_wrong_lbi_create_bearer_req: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2WrongLbiCreateBearerReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv0_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv0SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv0_subscriber_attr_miss: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv0SubscriberAttrMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv1_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv1SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv1_subscriber_attr_miss: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv1SubscriberAttrMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv2_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv2SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv2_subscriber_attr_miss: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv2SubscriberAttrMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_flow_label_v0: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidFlowLabelV0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_pkt_len_piggyback: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidPktLenPiggyback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_teid: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidTeid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_mandatory_information_element: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMandatoryInformationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_message_length: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMessageLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_order_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfOrderIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_state: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_state_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfStateIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_protocol_flag_unset: {
      value: cdktf.numberToHclTerraform(struct!.dropVldProtocolFlagUnset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_reserved_field_set: {
      value: cdktf.numberToHclTerraform(struct!.dropVldReservedFieldSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_reserved_information_element: {
      value: cdktf.numberToHclTerraform(struct!.dropVldReservedInformationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_sanity_failed_piggyback: {
      value: cdktf.numberToHclTerraform(struct!.dropVldSanityFailedPiggyback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_sequence_num_correlation: {
      value: cdktf.numberToHclTerraform(struct!.dropVldSequenceNumCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_tunnel_id_flag: {
      value: cdktf.numberToHclTerraform(struct!.dropVldTunnelIdFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_unsupported_message_type: {
      value: cdktf.numberToHclTerraform(struct!.dropVldUnsupportedMessageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v0_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV0ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v1_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV1ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v2_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV2ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_version_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.dropVldVersionNotSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_handover_in_progress_with_conn: {
      value: cdktf.numberToHclTerraform(struct!.gtpCHandoverInProgressWithConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_path_management_message: {
      value: cdktf.numberToHclTerraform(struct!.gtpPathManagementMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_tunnel_created: {
      value: cdktf.numberToHclTerraform(struct!.gtpUTunnelCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_tunnel_deleted: {
      value: cdktf.numberToHclTerraform(struct!.gtpUTunnelDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_create_pdp_resp_unsuccess: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CCreatePdpRespUnsuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_half_open_tunnel_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CHalfOpenTunnelClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_message_skipped_apn_filtering_no_imsi: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CMessageSkippedApnFilteringNoImsi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CMessageSkippedMsisdnFilteringNoMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_packet_dummy_msisdn: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CPacketDummyMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_pdu_notification_reject_request_forward: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CPduNotificationRejectRequestForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_pdu_notification_request_forward: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CPduNotificationRequestForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_reserved_message_allow: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CReservedMessageAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_tunnel_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CTunnelClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_tunnel_created: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CTunnelCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_tunnel_deleted: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CTunnelDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_tunnel_deleted_restart: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CTunnelDeletedRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_tunnel_half_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CTunnelHalfClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_tunnel_half_open: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CTunnelHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_update_pdp_resp_unsuccess: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CUpdatePdpRespUnsuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_create_pdp_resp_unsuccess: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CCreatePdpRespUnsuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_half_open_tunnel_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CHalfOpenTunnelClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_message_skipped_apn_filtering_no_imsi: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CMessageSkippedApnFilteringNoImsi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CMessageSkippedMsisdnFilteringNoMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_packet_dummy_msisdn: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CPacketDummyMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_pdu_notification_reject_request_forward: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CPduNotificationRejectRequestForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_pdu_notification_request_forward: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CPduNotificationRequestForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_reserved_message_allow: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CReservedMessageAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_tunnel_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CTunnelClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_tunnel_created: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CTunnelCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_tunnel_deleted: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CTunnelDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_tunnel_deleted_restart: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CTunnelDeletedRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_tunnel_half_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CTunnelHalfClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_tunnel_half_open: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CTunnelHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_update_pdp_resp_unsuccess: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CUpdatePdpRespUnsuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_create_sess_resp_unsuccess: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CCreateSessRespUnsuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_half_open_tunnel_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CHalfOpenTunnelClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_message_skipped_apn_filtering_no_imsi: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CMessageSkippedApnFilteringNoImsi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CMessageSkippedMsisdnFilteringNoMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_mod_bearer_resp_unsuccess: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CModBearerRespUnsuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_packet_dummy_msisdn: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CPacketDummyMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_piggyback_message: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CPiggybackMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_reserved_message_allow: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CReservedMessageAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_tunnel_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CTunnelClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_tunnel_created: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CTunnelCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_tunnel_deleted: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CTunnelDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_tunnel_deleted_restart: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CTunnelDeletedRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_tunnel_half_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CTunnelHalfClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_tunnel_half_open: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CTunnelHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink_bytes: {
      value: cdktf.numberToHclTerraform(struct!.uplinkBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uplink_pkts: {
      value: cdktf.numberToHclTerraform(struct!.uplinkPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwGtpStatsApnPrefixStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwGtpStatsApnPrefixStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downlinkBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlinkBytes = this._downlinkBytes;
    }
    if (this._downlinkPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlinkPkts = this._downlinkPkts;
    }
    if (this._dropFltApnFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFltApnFiltering = this._dropFltApnFiltering;
    }
    if (this._dropFltGtpInGtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFltGtpInGtp = this._dropFltGtpInGtp;
    }
    if (this._dropFltMessageFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFltMessageFiltering = this._dropFltMessageFiltering;
    }
    if (this._dropFltMsisdnFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFltMsisdnFiltering = this._dropFltMsisdnFiltering;
    }
    if (this._dropFltRatTypeFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFltRatTypeFiltering = this._dropFltRatTypeFiltering;
    }
    if (this._dropRlGtpUDownlinkByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUDownlinkByte = this._dropRlGtpUDownlinkByte;
    }
    if (this._dropRlGtpUDownlinkPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUDownlinkPacket = this._dropRlGtpUDownlinkPacket;
    }
    if (this._dropRlGtpUMaxConcurrentTunnels !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUMaxConcurrentTunnels = this._dropRlGtpUMaxConcurrentTunnels;
    }
    if (this._dropRlGtpUTotalByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUTotalByte = this._dropRlGtpUTotalByte;
    }
    if (this._dropRlGtpUTotalPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUTotalPacket = this._dropRlGtpUTotalPacket;
    }
    if (this._dropRlGtpUTunnelCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUTunnelCreate = this._dropRlGtpUTunnelCreate;
    }
    if (this._dropRlGtpUUplinkByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUUplinkByte = this._dropRlGtpUUplinkByte;
    }
    if (this._dropRlGtpUUplinkPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUUplinkPacket = this._dropRlGtpUUplinkPacket;
    }
    if (this._dropRlGtpV0CAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV0CAgg = this._dropRlGtpV0CAgg;
    }
    if (this._dropRlGtpV1CAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV1CAgg = this._dropRlGtpV1CAgg;
    }
    if (this._dropRlGtpV1CCreatePdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV1CCreatePdpRequest = this._dropRlGtpV1CCreatePdpRequest;
    }
    if (this._dropRlGtpV1CUpdatePdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV1CUpdatePdpRequest = this._dropRlGtpV1CUpdatePdpRequest;
    }
    if (this._dropRlGtpV2CAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV2CAgg = this._dropRlGtpV2CAgg;
    }
    if (this._dropRlGtpV2CCreateSessionRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV2CCreateSessionRequest = this._dropRlGtpV2CCreateSessionRequest;
    }
    if (this._dropRlGtpV2CModifyBearerRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV2CModifyBearerRequest = this._dropRlGtpV2CModifyBearerRequest;
    }
    if (this._dropVldCountryCodeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldCountryCodeMismatch = this._dropVldCountryCodeMismatch;
    }
    if (this._dropVldCrossLayerCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldCrossLayerCorrelation = this._dropVldCrossLayerCorrelation;
    }
    if (this._dropVldGtpBearerCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpBearerCountExceed = this._dropVldGtpBearerCountExceed;
    }
    if (this._dropVldGtpInvalidApnLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpInvalidApnLenDrop = this._dropVldGtpInvalidApnLenDrop;
    }
    if (this._dropVldGtpInvalidImsiLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpInvalidImsiLenDrop = this._dropVldGtpInvalidImsiLenDrop;
    }
    if (this._dropVldGtpUSpoofedSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpUSpoofedSourceAddress = this._dropVldGtpUSpoofedSourceAddress;
    }
    if (this._dropVldGtpV0CIeLenExceedMsgLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV0CIeLenExceedMsgLen = this._dropVldGtpV0CIeLenExceedMsgLen;
    }
    if (this._dropVldGtpV0CMessageDroppedApnFilteringNoApn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV0CMessageDroppedApnFilteringNoApn = this._dropVldGtpV0CMessageDroppedApnFilteringNoApn;
    }
    if (this._dropVldGtpV0CMessageLengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV0CMessageLengthMismatch = this._dropVldGtpV0CMessageLengthMismatch;
    }
    if (this._dropVldGtpV0CMessageWithTeidZeroExpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV0CMessageWithTeidZeroExpected = this._dropVldGtpV0CMessageWithTeidZeroExpected;
    }
    if (this._dropVldGtpV1CIeLenExceedMsgLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV1CIeLenExceedMsgLen = this._dropVldGtpV1CIeLenExceedMsgLen;
    }
    if (this._dropVldGtpV1CMessageDroppedApnFilteringNoApn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV1CMessageDroppedApnFilteringNoApn = this._dropVldGtpV1CMessageDroppedApnFilteringNoApn;
    }
    if (this._dropVldGtpV1CMessageLengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV1CMessageLengthMismatch = this._dropVldGtpV1CMessageLengthMismatch;
    }
    if (this._dropVldGtpV1CMessageWithTeidZeroExpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV1CMessageWithTeidZeroExpected = this._dropVldGtpV1CMessageWithTeidZeroExpected;
    }
    if (this._dropVldGtpV2CIeLenExceedMsgLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2CIeLenExceedMsgLen = this._dropVldGtpV2CIeLenExceedMsgLen;
    }
    if (this._dropVldGtpV2CMessageDroppedApnFilteringNoApn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2CMessageDroppedApnFilteringNoApn = this._dropVldGtpV2CMessageDroppedApnFilteringNoApn;
    }
    if (this._dropVldGtpV2CMessageLengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2CMessageLengthMismatch = this._dropVldGtpV2CMessageLengthMismatch;
    }
    if (this._dropVldGtpV2CMessageWithTeidZeroExpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2CMessageWithTeidZeroExpected = this._dropVldGtpV2CMessageWithTeidZeroExpected;
    }
    if (this._dropVldGtpV2WrongLbiCreateBearerReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2WrongLbiCreateBearerReq = this._dropVldGtpV2WrongLbiCreateBearerReq;
    }
    if (this._dropVldGtpv0SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv0SeqnumBufferFull = this._dropVldGtpv0SeqnumBufferFull;
    }
    if (this._dropVldGtpv0SubscriberAttrMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv0SubscriberAttrMiss = this._dropVldGtpv0SubscriberAttrMiss;
    }
    if (this._dropVldGtpv1SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv1SeqnumBufferFull = this._dropVldGtpv1SeqnumBufferFull;
    }
    if (this._dropVldGtpv1SubscriberAttrMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv1SubscriberAttrMiss = this._dropVldGtpv1SubscriberAttrMiss;
    }
    if (this._dropVldGtpv2SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv2SeqnumBufferFull = this._dropVldGtpv2SeqnumBufferFull;
    }
    if (this._dropVldGtpv2SubscriberAttrMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv2SubscriberAttrMiss = this._dropVldGtpv2SubscriberAttrMiss;
    }
    if (this._dropVldInvalidFlowLabelV0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidFlowLabelV0 = this._dropVldInvalidFlowLabelV0;
    }
    if (this._dropVldInvalidPktLenPiggyback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidPktLenPiggyback = this._dropVldInvalidPktLenPiggyback;
    }
    if (this._dropVldInvalidTeid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidTeid = this._dropVldInvalidTeid;
    }
    if (this._dropVldMandatoryInformationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMandatoryInformationElement = this._dropVldMandatoryInformationElement;
    }
    if (this._dropVldMessageLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMessageLength = this._dropVldMessageLength;
    }
    if (this._dropVldOutOfOrderIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfOrderIe = this._dropVldOutOfOrderIe;
    }
    if (this._dropVldOutOfState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfState = this._dropVldOutOfState;
    }
    if (this._dropVldOutOfStateIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfStateIe = this._dropVldOutOfStateIe;
    }
    if (this._dropVldProtocolFlagUnset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldProtocolFlagUnset = this._dropVldProtocolFlagUnset;
    }
    if (this._dropVldReservedFieldSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldReservedFieldSet = this._dropVldReservedFieldSet;
    }
    if (this._dropVldReservedInformationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldReservedInformationElement = this._dropVldReservedInformationElement;
    }
    if (this._dropVldSanityFailedPiggyback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldSanityFailedPiggyback = this._dropVldSanityFailedPiggyback;
    }
    if (this._dropVldSequenceNumCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldSequenceNumCorrelation = this._dropVldSequenceNumCorrelation;
    }
    if (this._dropVldTunnelIdFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldTunnelIdFlag = this._dropVldTunnelIdFlag;
    }
    if (this._dropVldUnsupportedMessageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldUnsupportedMessageType = this._dropVldUnsupportedMessageType;
    }
    if (this._dropVldV0ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV0ReservedMessageDrop = this._dropVldV0ReservedMessageDrop;
    }
    if (this._dropVldV1ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV1ReservedMessageDrop = this._dropVldV1ReservedMessageDrop;
    }
    if (this._dropVldV2ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV2ReservedMessageDrop = this._dropVldV2ReservedMessageDrop;
    }
    if (this._dropVldVersionNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldVersionNotSupported = this._dropVldVersionNotSupported;
    }
    if (this._gtpCHandoverInProgressWithConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCHandoverInProgressWithConn = this._gtpCHandoverInProgressWithConn;
    }
    if (this._gtpPathManagementMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpPathManagementMessage = this._gtpPathManagementMessage;
    }
    if (this._gtpUTunnelCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUTunnelCreated = this._gtpUTunnelCreated;
    }
    if (this._gtpUTunnelDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUTunnelDeleted = this._gtpUTunnelDeleted;
    }
    if (this._gtpV0CCreatePdpRespUnsuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CCreatePdpRespUnsuccess = this._gtpV0CCreatePdpRespUnsuccess;
    }
    if (this._gtpV0CHalfOpenTunnelClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CHalfOpenTunnelClosed = this._gtpV0CHalfOpenTunnelClosed;
    }
    if (this._gtpV0CMessageSkippedApnFilteringNoImsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CMessageSkippedApnFilteringNoImsi = this._gtpV0CMessageSkippedApnFilteringNoImsi;
    }
    if (this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CMessageSkippedMsisdnFilteringNoMsisdn = this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn;
    }
    if (this._gtpV0CPacketDummyMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CPacketDummyMsisdn = this._gtpV0CPacketDummyMsisdn;
    }
    if (this._gtpV0CPduNotificationRejectRequestForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CPduNotificationRejectRequestForward = this._gtpV0CPduNotificationRejectRequestForward;
    }
    if (this._gtpV0CPduNotificationRequestForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CPduNotificationRequestForward = this._gtpV0CPduNotificationRequestForward;
    }
    if (this._gtpV0CReservedMessageAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CReservedMessageAllow = this._gtpV0CReservedMessageAllow;
    }
    if (this._gtpV0CTunnelClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CTunnelClosed = this._gtpV0CTunnelClosed;
    }
    if (this._gtpV0CTunnelCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CTunnelCreated = this._gtpV0CTunnelCreated;
    }
    if (this._gtpV0CTunnelDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CTunnelDeleted = this._gtpV0CTunnelDeleted;
    }
    if (this._gtpV0CTunnelDeletedRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CTunnelDeletedRestart = this._gtpV0CTunnelDeletedRestart;
    }
    if (this._gtpV0CTunnelHalfClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CTunnelHalfClosed = this._gtpV0CTunnelHalfClosed;
    }
    if (this._gtpV0CTunnelHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CTunnelHalfOpen = this._gtpV0CTunnelHalfOpen;
    }
    if (this._gtpV0CUpdatePdpRespUnsuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CUpdatePdpRespUnsuccess = this._gtpV0CUpdatePdpRespUnsuccess;
    }
    if (this._gtpV1CCreatePdpRespUnsuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CCreatePdpRespUnsuccess = this._gtpV1CCreatePdpRespUnsuccess;
    }
    if (this._gtpV1CHalfOpenTunnelClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CHalfOpenTunnelClosed = this._gtpV1CHalfOpenTunnelClosed;
    }
    if (this._gtpV1CMessageSkippedApnFilteringNoImsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CMessageSkippedApnFilteringNoImsi = this._gtpV1CMessageSkippedApnFilteringNoImsi;
    }
    if (this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CMessageSkippedMsisdnFilteringNoMsisdn = this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn;
    }
    if (this._gtpV1CPacketDummyMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CPacketDummyMsisdn = this._gtpV1CPacketDummyMsisdn;
    }
    if (this._gtpV1CPduNotificationRejectRequestForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CPduNotificationRejectRequestForward = this._gtpV1CPduNotificationRejectRequestForward;
    }
    if (this._gtpV1CPduNotificationRequestForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CPduNotificationRequestForward = this._gtpV1CPduNotificationRequestForward;
    }
    if (this._gtpV1CReservedMessageAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CReservedMessageAllow = this._gtpV1CReservedMessageAllow;
    }
    if (this._gtpV1CTunnelClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CTunnelClosed = this._gtpV1CTunnelClosed;
    }
    if (this._gtpV1CTunnelCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CTunnelCreated = this._gtpV1CTunnelCreated;
    }
    if (this._gtpV1CTunnelDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CTunnelDeleted = this._gtpV1CTunnelDeleted;
    }
    if (this._gtpV1CTunnelDeletedRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CTunnelDeletedRestart = this._gtpV1CTunnelDeletedRestart;
    }
    if (this._gtpV1CTunnelHalfClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CTunnelHalfClosed = this._gtpV1CTunnelHalfClosed;
    }
    if (this._gtpV1CTunnelHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CTunnelHalfOpen = this._gtpV1CTunnelHalfOpen;
    }
    if (this._gtpV1CUpdatePdpRespUnsuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CUpdatePdpRespUnsuccess = this._gtpV1CUpdatePdpRespUnsuccess;
    }
    if (this._gtpV2CCreateSessRespUnsuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CCreateSessRespUnsuccess = this._gtpV2CCreateSessRespUnsuccess;
    }
    if (this._gtpV2CHalfOpenTunnelClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CHalfOpenTunnelClosed = this._gtpV2CHalfOpenTunnelClosed;
    }
    if (this._gtpV2CMessageSkippedApnFilteringNoImsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CMessageSkippedApnFilteringNoImsi = this._gtpV2CMessageSkippedApnFilteringNoImsi;
    }
    if (this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CMessageSkippedMsisdnFilteringNoMsisdn = this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn;
    }
    if (this._gtpV2CModBearerRespUnsuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CModBearerRespUnsuccess = this._gtpV2CModBearerRespUnsuccess;
    }
    if (this._gtpV2CPacketDummyMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CPacketDummyMsisdn = this._gtpV2CPacketDummyMsisdn;
    }
    if (this._gtpV2CPiggybackMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CPiggybackMessage = this._gtpV2CPiggybackMessage;
    }
    if (this._gtpV2CReservedMessageAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CReservedMessageAllow = this._gtpV2CReservedMessageAllow;
    }
    if (this._gtpV2CTunnelClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CTunnelClosed = this._gtpV2CTunnelClosed;
    }
    if (this._gtpV2CTunnelCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CTunnelCreated = this._gtpV2CTunnelCreated;
    }
    if (this._gtpV2CTunnelDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CTunnelDeleted = this._gtpV2CTunnelDeleted;
    }
    if (this._gtpV2CTunnelDeletedRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CTunnelDeletedRestart = this._gtpV2CTunnelDeletedRestart;
    }
    if (this._gtpV2CTunnelHalfClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CTunnelHalfClosed = this._gtpV2CTunnelHalfClosed;
    }
    if (this._gtpV2CTunnelHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CTunnelHalfOpen = this._gtpV2CTunnelHalfOpen;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._uplinkBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkBytes = this._uplinkBytes;
    }
    if (this._uplinkPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkPkts = this._uplinkPkts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwGtpStatsApnPrefixStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._downlinkBytes = undefined;
      this._downlinkPkts = undefined;
      this._dropFltApnFiltering = undefined;
      this._dropFltGtpInGtp = undefined;
      this._dropFltMessageFiltering = undefined;
      this._dropFltMsisdnFiltering = undefined;
      this._dropFltRatTypeFiltering = undefined;
      this._dropRlGtpUDownlinkByte = undefined;
      this._dropRlGtpUDownlinkPacket = undefined;
      this._dropRlGtpUMaxConcurrentTunnels = undefined;
      this._dropRlGtpUTotalByte = undefined;
      this._dropRlGtpUTotalPacket = undefined;
      this._dropRlGtpUTunnelCreate = undefined;
      this._dropRlGtpUUplinkByte = undefined;
      this._dropRlGtpUUplinkPacket = undefined;
      this._dropRlGtpV0CAgg = undefined;
      this._dropRlGtpV1CAgg = undefined;
      this._dropRlGtpV1CCreatePdpRequest = undefined;
      this._dropRlGtpV1CUpdatePdpRequest = undefined;
      this._dropRlGtpV2CAgg = undefined;
      this._dropRlGtpV2CCreateSessionRequest = undefined;
      this._dropRlGtpV2CModifyBearerRequest = undefined;
      this._dropVldCountryCodeMismatch = undefined;
      this._dropVldCrossLayerCorrelation = undefined;
      this._dropVldGtpBearerCountExceed = undefined;
      this._dropVldGtpInvalidApnLenDrop = undefined;
      this._dropVldGtpInvalidImsiLenDrop = undefined;
      this._dropVldGtpUSpoofedSourceAddress = undefined;
      this._dropVldGtpV0CIeLenExceedMsgLen = undefined;
      this._dropVldGtpV0CMessageDroppedApnFilteringNoApn = undefined;
      this._dropVldGtpV0CMessageLengthMismatch = undefined;
      this._dropVldGtpV0CMessageWithTeidZeroExpected = undefined;
      this._dropVldGtpV1CIeLenExceedMsgLen = undefined;
      this._dropVldGtpV1CMessageDroppedApnFilteringNoApn = undefined;
      this._dropVldGtpV1CMessageLengthMismatch = undefined;
      this._dropVldGtpV1CMessageWithTeidZeroExpected = undefined;
      this._dropVldGtpV2CIeLenExceedMsgLen = undefined;
      this._dropVldGtpV2CMessageDroppedApnFilteringNoApn = undefined;
      this._dropVldGtpV2CMessageLengthMismatch = undefined;
      this._dropVldGtpV2CMessageWithTeidZeroExpected = undefined;
      this._dropVldGtpV2WrongLbiCreateBearerReq = undefined;
      this._dropVldGtpv0SeqnumBufferFull = undefined;
      this._dropVldGtpv0SubscriberAttrMiss = undefined;
      this._dropVldGtpv1SeqnumBufferFull = undefined;
      this._dropVldGtpv1SubscriberAttrMiss = undefined;
      this._dropVldGtpv2SeqnumBufferFull = undefined;
      this._dropVldGtpv2SubscriberAttrMiss = undefined;
      this._dropVldInvalidFlowLabelV0 = undefined;
      this._dropVldInvalidPktLenPiggyback = undefined;
      this._dropVldInvalidTeid = undefined;
      this._dropVldMandatoryInformationElement = undefined;
      this._dropVldMessageLength = undefined;
      this._dropVldOutOfOrderIe = undefined;
      this._dropVldOutOfState = undefined;
      this._dropVldOutOfStateIe = undefined;
      this._dropVldProtocolFlagUnset = undefined;
      this._dropVldReservedFieldSet = undefined;
      this._dropVldReservedInformationElement = undefined;
      this._dropVldSanityFailedPiggyback = undefined;
      this._dropVldSequenceNumCorrelation = undefined;
      this._dropVldTunnelIdFlag = undefined;
      this._dropVldUnsupportedMessageType = undefined;
      this._dropVldV0ReservedMessageDrop = undefined;
      this._dropVldV1ReservedMessageDrop = undefined;
      this._dropVldV2ReservedMessageDrop = undefined;
      this._dropVldVersionNotSupported = undefined;
      this._gtpCHandoverInProgressWithConn = undefined;
      this._gtpPathManagementMessage = undefined;
      this._gtpUTunnelCreated = undefined;
      this._gtpUTunnelDeleted = undefined;
      this._gtpV0CCreatePdpRespUnsuccess = undefined;
      this._gtpV0CHalfOpenTunnelClosed = undefined;
      this._gtpV0CMessageSkippedApnFilteringNoImsi = undefined;
      this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn = undefined;
      this._gtpV0CPacketDummyMsisdn = undefined;
      this._gtpV0CPduNotificationRejectRequestForward = undefined;
      this._gtpV0CPduNotificationRequestForward = undefined;
      this._gtpV0CReservedMessageAllow = undefined;
      this._gtpV0CTunnelClosed = undefined;
      this._gtpV0CTunnelCreated = undefined;
      this._gtpV0CTunnelDeleted = undefined;
      this._gtpV0CTunnelDeletedRestart = undefined;
      this._gtpV0CTunnelHalfClosed = undefined;
      this._gtpV0CTunnelHalfOpen = undefined;
      this._gtpV0CUpdatePdpRespUnsuccess = undefined;
      this._gtpV1CCreatePdpRespUnsuccess = undefined;
      this._gtpV1CHalfOpenTunnelClosed = undefined;
      this._gtpV1CMessageSkippedApnFilteringNoImsi = undefined;
      this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn = undefined;
      this._gtpV1CPacketDummyMsisdn = undefined;
      this._gtpV1CPduNotificationRejectRequestForward = undefined;
      this._gtpV1CPduNotificationRequestForward = undefined;
      this._gtpV1CReservedMessageAllow = undefined;
      this._gtpV1CTunnelClosed = undefined;
      this._gtpV1CTunnelCreated = undefined;
      this._gtpV1CTunnelDeleted = undefined;
      this._gtpV1CTunnelDeletedRestart = undefined;
      this._gtpV1CTunnelHalfClosed = undefined;
      this._gtpV1CTunnelHalfOpen = undefined;
      this._gtpV1CUpdatePdpRespUnsuccess = undefined;
      this._gtpV2CCreateSessRespUnsuccess = undefined;
      this._gtpV2CHalfOpenTunnelClosed = undefined;
      this._gtpV2CMessageSkippedApnFilteringNoImsi = undefined;
      this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn = undefined;
      this._gtpV2CModBearerRespUnsuccess = undefined;
      this._gtpV2CPacketDummyMsisdn = undefined;
      this._gtpV2CPiggybackMessage = undefined;
      this._gtpV2CReservedMessageAllow = undefined;
      this._gtpV2CTunnelClosed = undefined;
      this._gtpV2CTunnelCreated = undefined;
      this._gtpV2CTunnelDeleted = undefined;
      this._gtpV2CTunnelDeletedRestart = undefined;
      this._gtpV2CTunnelHalfClosed = undefined;
      this._gtpV2CTunnelHalfOpen = undefined;
      this._keyName = undefined;
      this._uplinkBytes = undefined;
      this._uplinkPkts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._downlinkBytes = value.downlinkBytes;
      this._downlinkPkts = value.downlinkPkts;
      this._dropFltApnFiltering = value.dropFltApnFiltering;
      this._dropFltGtpInGtp = value.dropFltGtpInGtp;
      this._dropFltMessageFiltering = value.dropFltMessageFiltering;
      this._dropFltMsisdnFiltering = value.dropFltMsisdnFiltering;
      this._dropFltRatTypeFiltering = value.dropFltRatTypeFiltering;
      this._dropRlGtpUDownlinkByte = value.dropRlGtpUDownlinkByte;
      this._dropRlGtpUDownlinkPacket = value.dropRlGtpUDownlinkPacket;
      this._dropRlGtpUMaxConcurrentTunnels = value.dropRlGtpUMaxConcurrentTunnels;
      this._dropRlGtpUTotalByte = value.dropRlGtpUTotalByte;
      this._dropRlGtpUTotalPacket = value.dropRlGtpUTotalPacket;
      this._dropRlGtpUTunnelCreate = value.dropRlGtpUTunnelCreate;
      this._dropRlGtpUUplinkByte = value.dropRlGtpUUplinkByte;
      this._dropRlGtpUUplinkPacket = value.dropRlGtpUUplinkPacket;
      this._dropRlGtpV0CAgg = value.dropRlGtpV0CAgg;
      this._dropRlGtpV1CAgg = value.dropRlGtpV1CAgg;
      this._dropRlGtpV1CCreatePdpRequest = value.dropRlGtpV1CCreatePdpRequest;
      this._dropRlGtpV1CUpdatePdpRequest = value.dropRlGtpV1CUpdatePdpRequest;
      this._dropRlGtpV2CAgg = value.dropRlGtpV2CAgg;
      this._dropRlGtpV2CCreateSessionRequest = value.dropRlGtpV2CCreateSessionRequest;
      this._dropRlGtpV2CModifyBearerRequest = value.dropRlGtpV2CModifyBearerRequest;
      this._dropVldCountryCodeMismatch = value.dropVldCountryCodeMismatch;
      this._dropVldCrossLayerCorrelation = value.dropVldCrossLayerCorrelation;
      this._dropVldGtpBearerCountExceed = value.dropVldGtpBearerCountExceed;
      this._dropVldGtpInvalidApnLenDrop = value.dropVldGtpInvalidApnLenDrop;
      this._dropVldGtpInvalidImsiLenDrop = value.dropVldGtpInvalidImsiLenDrop;
      this._dropVldGtpUSpoofedSourceAddress = value.dropVldGtpUSpoofedSourceAddress;
      this._dropVldGtpV0CIeLenExceedMsgLen = value.dropVldGtpV0CIeLenExceedMsgLen;
      this._dropVldGtpV0CMessageDroppedApnFilteringNoApn = value.dropVldGtpV0CMessageDroppedApnFilteringNoApn;
      this._dropVldGtpV0CMessageLengthMismatch = value.dropVldGtpV0CMessageLengthMismatch;
      this._dropVldGtpV0CMessageWithTeidZeroExpected = value.dropVldGtpV0CMessageWithTeidZeroExpected;
      this._dropVldGtpV1CIeLenExceedMsgLen = value.dropVldGtpV1CIeLenExceedMsgLen;
      this._dropVldGtpV1CMessageDroppedApnFilteringNoApn = value.dropVldGtpV1CMessageDroppedApnFilteringNoApn;
      this._dropVldGtpV1CMessageLengthMismatch = value.dropVldGtpV1CMessageLengthMismatch;
      this._dropVldGtpV1CMessageWithTeidZeroExpected = value.dropVldGtpV1CMessageWithTeidZeroExpected;
      this._dropVldGtpV2CIeLenExceedMsgLen = value.dropVldGtpV2CIeLenExceedMsgLen;
      this._dropVldGtpV2CMessageDroppedApnFilteringNoApn = value.dropVldGtpV2CMessageDroppedApnFilteringNoApn;
      this._dropVldGtpV2CMessageLengthMismatch = value.dropVldGtpV2CMessageLengthMismatch;
      this._dropVldGtpV2CMessageWithTeidZeroExpected = value.dropVldGtpV2CMessageWithTeidZeroExpected;
      this._dropVldGtpV2WrongLbiCreateBearerReq = value.dropVldGtpV2WrongLbiCreateBearerReq;
      this._dropVldGtpv0SeqnumBufferFull = value.dropVldGtpv0SeqnumBufferFull;
      this._dropVldGtpv0SubscriberAttrMiss = value.dropVldGtpv0SubscriberAttrMiss;
      this._dropVldGtpv1SeqnumBufferFull = value.dropVldGtpv1SeqnumBufferFull;
      this._dropVldGtpv1SubscriberAttrMiss = value.dropVldGtpv1SubscriberAttrMiss;
      this._dropVldGtpv2SeqnumBufferFull = value.dropVldGtpv2SeqnumBufferFull;
      this._dropVldGtpv2SubscriberAttrMiss = value.dropVldGtpv2SubscriberAttrMiss;
      this._dropVldInvalidFlowLabelV0 = value.dropVldInvalidFlowLabelV0;
      this._dropVldInvalidPktLenPiggyback = value.dropVldInvalidPktLenPiggyback;
      this._dropVldInvalidTeid = value.dropVldInvalidTeid;
      this._dropVldMandatoryInformationElement = value.dropVldMandatoryInformationElement;
      this._dropVldMessageLength = value.dropVldMessageLength;
      this._dropVldOutOfOrderIe = value.dropVldOutOfOrderIe;
      this._dropVldOutOfState = value.dropVldOutOfState;
      this._dropVldOutOfStateIe = value.dropVldOutOfStateIe;
      this._dropVldProtocolFlagUnset = value.dropVldProtocolFlagUnset;
      this._dropVldReservedFieldSet = value.dropVldReservedFieldSet;
      this._dropVldReservedInformationElement = value.dropVldReservedInformationElement;
      this._dropVldSanityFailedPiggyback = value.dropVldSanityFailedPiggyback;
      this._dropVldSequenceNumCorrelation = value.dropVldSequenceNumCorrelation;
      this._dropVldTunnelIdFlag = value.dropVldTunnelIdFlag;
      this._dropVldUnsupportedMessageType = value.dropVldUnsupportedMessageType;
      this._dropVldV0ReservedMessageDrop = value.dropVldV0ReservedMessageDrop;
      this._dropVldV1ReservedMessageDrop = value.dropVldV1ReservedMessageDrop;
      this._dropVldV2ReservedMessageDrop = value.dropVldV2ReservedMessageDrop;
      this._dropVldVersionNotSupported = value.dropVldVersionNotSupported;
      this._gtpCHandoverInProgressWithConn = value.gtpCHandoverInProgressWithConn;
      this._gtpPathManagementMessage = value.gtpPathManagementMessage;
      this._gtpUTunnelCreated = value.gtpUTunnelCreated;
      this._gtpUTunnelDeleted = value.gtpUTunnelDeleted;
      this._gtpV0CCreatePdpRespUnsuccess = value.gtpV0CCreatePdpRespUnsuccess;
      this._gtpV0CHalfOpenTunnelClosed = value.gtpV0CHalfOpenTunnelClosed;
      this._gtpV0CMessageSkippedApnFilteringNoImsi = value.gtpV0CMessageSkippedApnFilteringNoImsi;
      this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn = value.gtpV0CMessageSkippedMsisdnFilteringNoMsisdn;
      this._gtpV0CPacketDummyMsisdn = value.gtpV0CPacketDummyMsisdn;
      this._gtpV0CPduNotificationRejectRequestForward = value.gtpV0CPduNotificationRejectRequestForward;
      this._gtpV0CPduNotificationRequestForward = value.gtpV0CPduNotificationRequestForward;
      this._gtpV0CReservedMessageAllow = value.gtpV0CReservedMessageAllow;
      this._gtpV0CTunnelClosed = value.gtpV0CTunnelClosed;
      this._gtpV0CTunnelCreated = value.gtpV0CTunnelCreated;
      this._gtpV0CTunnelDeleted = value.gtpV0CTunnelDeleted;
      this._gtpV0CTunnelDeletedRestart = value.gtpV0CTunnelDeletedRestart;
      this._gtpV0CTunnelHalfClosed = value.gtpV0CTunnelHalfClosed;
      this._gtpV0CTunnelHalfOpen = value.gtpV0CTunnelHalfOpen;
      this._gtpV0CUpdatePdpRespUnsuccess = value.gtpV0CUpdatePdpRespUnsuccess;
      this._gtpV1CCreatePdpRespUnsuccess = value.gtpV1CCreatePdpRespUnsuccess;
      this._gtpV1CHalfOpenTunnelClosed = value.gtpV1CHalfOpenTunnelClosed;
      this._gtpV1CMessageSkippedApnFilteringNoImsi = value.gtpV1CMessageSkippedApnFilteringNoImsi;
      this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn = value.gtpV1CMessageSkippedMsisdnFilteringNoMsisdn;
      this._gtpV1CPacketDummyMsisdn = value.gtpV1CPacketDummyMsisdn;
      this._gtpV1CPduNotificationRejectRequestForward = value.gtpV1CPduNotificationRejectRequestForward;
      this._gtpV1CPduNotificationRequestForward = value.gtpV1CPduNotificationRequestForward;
      this._gtpV1CReservedMessageAllow = value.gtpV1CReservedMessageAllow;
      this._gtpV1CTunnelClosed = value.gtpV1CTunnelClosed;
      this._gtpV1CTunnelCreated = value.gtpV1CTunnelCreated;
      this._gtpV1CTunnelDeleted = value.gtpV1CTunnelDeleted;
      this._gtpV1CTunnelDeletedRestart = value.gtpV1CTunnelDeletedRestart;
      this._gtpV1CTunnelHalfClosed = value.gtpV1CTunnelHalfClosed;
      this._gtpV1CTunnelHalfOpen = value.gtpV1CTunnelHalfOpen;
      this._gtpV1CUpdatePdpRespUnsuccess = value.gtpV1CUpdatePdpRespUnsuccess;
      this._gtpV2CCreateSessRespUnsuccess = value.gtpV2CCreateSessRespUnsuccess;
      this._gtpV2CHalfOpenTunnelClosed = value.gtpV2CHalfOpenTunnelClosed;
      this._gtpV2CMessageSkippedApnFilteringNoImsi = value.gtpV2CMessageSkippedApnFilteringNoImsi;
      this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn = value.gtpV2CMessageSkippedMsisdnFilteringNoMsisdn;
      this._gtpV2CModBearerRespUnsuccess = value.gtpV2CModBearerRespUnsuccess;
      this._gtpV2CPacketDummyMsisdn = value.gtpV2CPacketDummyMsisdn;
      this._gtpV2CPiggybackMessage = value.gtpV2CPiggybackMessage;
      this._gtpV2CReservedMessageAllow = value.gtpV2CReservedMessageAllow;
      this._gtpV2CTunnelClosed = value.gtpV2CTunnelClosed;
      this._gtpV2CTunnelCreated = value.gtpV2CTunnelCreated;
      this._gtpV2CTunnelDeleted = value.gtpV2CTunnelDeleted;
      this._gtpV2CTunnelDeletedRestart = value.gtpV2CTunnelDeletedRestart;
      this._gtpV2CTunnelHalfClosed = value.gtpV2CTunnelHalfClosed;
      this._gtpV2CTunnelHalfOpen = value.gtpV2CTunnelHalfOpen;
      this._keyName = value.keyName;
      this._uplinkBytes = value.uplinkBytes;
      this._uplinkPkts = value.uplinkPkts;
    }
  }

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

  // drop_vld_gtp_v0_c_ie_len_exceed_msg_len - computed: false, optional: true, required: false
  private _dropVldGtpV0CIeLenExceedMsgLen?: number; 
  public get dropVldGtpV0CIeLenExceedMsgLen() {
    return this.getNumberAttribute('drop_vld_gtp_v0_c_ie_len_exceed_msg_len');
  }
  public set dropVldGtpV0CIeLenExceedMsgLen(value: number) {
    this._dropVldGtpV0CIeLenExceedMsgLen = value;
  }
  public resetDropVldGtpV0CIeLenExceedMsgLen() {
    this._dropVldGtpV0CIeLenExceedMsgLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV0CIeLenExceedMsgLenInput() {
    return this._dropVldGtpV0CIeLenExceedMsgLen;
  }

  // drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn - computed: false, optional: true, required: false
  private _dropVldGtpV0CMessageDroppedApnFilteringNoApn?: number; 
  public get dropVldGtpV0CMessageDroppedApnFilteringNoApn() {
    return this.getNumberAttribute('drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn');
  }
  public set dropVldGtpV0CMessageDroppedApnFilteringNoApn(value: number) {
    this._dropVldGtpV0CMessageDroppedApnFilteringNoApn = value;
  }
  public resetDropVldGtpV0CMessageDroppedApnFilteringNoApn() {
    this._dropVldGtpV0CMessageDroppedApnFilteringNoApn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV0CMessageDroppedApnFilteringNoApnInput() {
    return this._dropVldGtpV0CMessageDroppedApnFilteringNoApn;
  }

  // drop_vld_gtp_v0_c_message_length_mismatch - computed: false, optional: true, required: false
  private _dropVldGtpV0CMessageLengthMismatch?: number; 
  public get dropVldGtpV0CMessageLengthMismatch() {
    return this.getNumberAttribute('drop_vld_gtp_v0_c_message_length_mismatch');
  }
  public set dropVldGtpV0CMessageLengthMismatch(value: number) {
    this._dropVldGtpV0CMessageLengthMismatch = value;
  }
  public resetDropVldGtpV0CMessageLengthMismatch() {
    this._dropVldGtpV0CMessageLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV0CMessageLengthMismatchInput() {
    return this._dropVldGtpV0CMessageLengthMismatch;
  }

  // drop_vld_gtp_v0_c_message_with_teid_zero_expected - computed: false, optional: true, required: false
  private _dropVldGtpV0CMessageWithTeidZeroExpected?: number; 
  public get dropVldGtpV0CMessageWithTeidZeroExpected() {
    return this.getNumberAttribute('drop_vld_gtp_v0_c_message_with_teid_zero_expected');
  }
  public set dropVldGtpV0CMessageWithTeidZeroExpected(value: number) {
    this._dropVldGtpV0CMessageWithTeidZeroExpected = value;
  }
  public resetDropVldGtpV0CMessageWithTeidZeroExpected() {
    this._dropVldGtpV0CMessageWithTeidZeroExpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV0CMessageWithTeidZeroExpectedInput() {
    return this._dropVldGtpV0CMessageWithTeidZeroExpected;
  }

  // drop_vld_gtp_v1_c_ie_len_exceed_msg_len - computed: false, optional: true, required: false
  private _dropVldGtpV1CIeLenExceedMsgLen?: number; 
  public get dropVldGtpV1CIeLenExceedMsgLen() {
    return this.getNumberAttribute('drop_vld_gtp_v1_c_ie_len_exceed_msg_len');
  }
  public set dropVldGtpV1CIeLenExceedMsgLen(value: number) {
    this._dropVldGtpV1CIeLenExceedMsgLen = value;
  }
  public resetDropVldGtpV1CIeLenExceedMsgLen() {
    this._dropVldGtpV1CIeLenExceedMsgLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV1CIeLenExceedMsgLenInput() {
    return this._dropVldGtpV1CIeLenExceedMsgLen;
  }

  // drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn - computed: false, optional: true, required: false
  private _dropVldGtpV1CMessageDroppedApnFilteringNoApn?: number; 
  public get dropVldGtpV1CMessageDroppedApnFilteringNoApn() {
    return this.getNumberAttribute('drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn');
  }
  public set dropVldGtpV1CMessageDroppedApnFilteringNoApn(value: number) {
    this._dropVldGtpV1CMessageDroppedApnFilteringNoApn = value;
  }
  public resetDropVldGtpV1CMessageDroppedApnFilteringNoApn() {
    this._dropVldGtpV1CMessageDroppedApnFilteringNoApn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV1CMessageDroppedApnFilteringNoApnInput() {
    return this._dropVldGtpV1CMessageDroppedApnFilteringNoApn;
  }

  // drop_vld_gtp_v1_c_message_length_mismatch - computed: false, optional: true, required: false
  private _dropVldGtpV1CMessageLengthMismatch?: number; 
  public get dropVldGtpV1CMessageLengthMismatch() {
    return this.getNumberAttribute('drop_vld_gtp_v1_c_message_length_mismatch');
  }
  public set dropVldGtpV1CMessageLengthMismatch(value: number) {
    this._dropVldGtpV1CMessageLengthMismatch = value;
  }
  public resetDropVldGtpV1CMessageLengthMismatch() {
    this._dropVldGtpV1CMessageLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV1CMessageLengthMismatchInput() {
    return this._dropVldGtpV1CMessageLengthMismatch;
  }

  // drop_vld_gtp_v1_c_message_with_teid_zero_expected - computed: false, optional: true, required: false
  private _dropVldGtpV1CMessageWithTeidZeroExpected?: number; 
  public get dropVldGtpV1CMessageWithTeidZeroExpected() {
    return this.getNumberAttribute('drop_vld_gtp_v1_c_message_with_teid_zero_expected');
  }
  public set dropVldGtpV1CMessageWithTeidZeroExpected(value: number) {
    this._dropVldGtpV1CMessageWithTeidZeroExpected = value;
  }
  public resetDropVldGtpV1CMessageWithTeidZeroExpected() {
    this._dropVldGtpV1CMessageWithTeidZeroExpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV1CMessageWithTeidZeroExpectedInput() {
    return this._dropVldGtpV1CMessageWithTeidZeroExpected;
  }

  // drop_vld_gtp_v2_c_ie_len_exceed_msg_len - computed: false, optional: true, required: false
  private _dropVldGtpV2CIeLenExceedMsgLen?: number; 
  public get dropVldGtpV2CIeLenExceedMsgLen() {
    return this.getNumberAttribute('drop_vld_gtp_v2_c_ie_len_exceed_msg_len');
  }
  public set dropVldGtpV2CIeLenExceedMsgLen(value: number) {
    this._dropVldGtpV2CIeLenExceedMsgLen = value;
  }
  public resetDropVldGtpV2CIeLenExceedMsgLen() {
    this._dropVldGtpV2CIeLenExceedMsgLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2CIeLenExceedMsgLenInput() {
    return this._dropVldGtpV2CIeLenExceedMsgLen;
  }

  // drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn - computed: false, optional: true, required: false
  private _dropVldGtpV2CMessageDroppedApnFilteringNoApn?: number; 
  public get dropVldGtpV2CMessageDroppedApnFilteringNoApn() {
    return this.getNumberAttribute('drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn');
  }
  public set dropVldGtpV2CMessageDroppedApnFilteringNoApn(value: number) {
    this._dropVldGtpV2CMessageDroppedApnFilteringNoApn = value;
  }
  public resetDropVldGtpV2CMessageDroppedApnFilteringNoApn() {
    this._dropVldGtpV2CMessageDroppedApnFilteringNoApn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2CMessageDroppedApnFilteringNoApnInput() {
    return this._dropVldGtpV2CMessageDroppedApnFilteringNoApn;
  }

  // drop_vld_gtp_v2_c_message_length_mismatch - computed: false, optional: true, required: false
  private _dropVldGtpV2CMessageLengthMismatch?: number; 
  public get dropVldGtpV2CMessageLengthMismatch() {
    return this.getNumberAttribute('drop_vld_gtp_v2_c_message_length_mismatch');
  }
  public set dropVldGtpV2CMessageLengthMismatch(value: number) {
    this._dropVldGtpV2CMessageLengthMismatch = value;
  }
  public resetDropVldGtpV2CMessageLengthMismatch() {
    this._dropVldGtpV2CMessageLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2CMessageLengthMismatchInput() {
    return this._dropVldGtpV2CMessageLengthMismatch;
  }

  // drop_vld_gtp_v2_c_message_with_teid_zero_expected - computed: false, optional: true, required: false
  private _dropVldGtpV2CMessageWithTeidZeroExpected?: number; 
  public get dropVldGtpV2CMessageWithTeidZeroExpected() {
    return this.getNumberAttribute('drop_vld_gtp_v2_c_message_with_teid_zero_expected');
  }
  public set dropVldGtpV2CMessageWithTeidZeroExpected(value: number) {
    this._dropVldGtpV2CMessageWithTeidZeroExpected = value;
  }
  public resetDropVldGtpV2CMessageWithTeidZeroExpected() {
    this._dropVldGtpV2CMessageWithTeidZeroExpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2CMessageWithTeidZeroExpectedInput() {
    return this._dropVldGtpV2CMessageWithTeidZeroExpected;
  }

  // drop_vld_gtp_v2_wrong_lbi_create_bearer_req - computed: false, optional: true, required: false
  private _dropVldGtpV2WrongLbiCreateBearerReq?: number; 
  public get dropVldGtpV2WrongLbiCreateBearerReq() {
    return this.getNumberAttribute('drop_vld_gtp_v2_wrong_lbi_create_bearer_req');
  }
  public set dropVldGtpV2WrongLbiCreateBearerReq(value: number) {
    this._dropVldGtpV2WrongLbiCreateBearerReq = value;
  }
  public resetDropVldGtpV2WrongLbiCreateBearerReq() {
    this._dropVldGtpV2WrongLbiCreateBearerReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2WrongLbiCreateBearerReqInput() {
    return this._dropVldGtpV2WrongLbiCreateBearerReq;
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

  // drop_vld_gtpv0_subscriber_attr_miss - computed: false, optional: true, required: false
  private _dropVldGtpv0SubscriberAttrMiss?: number; 
  public get dropVldGtpv0SubscriberAttrMiss() {
    return this.getNumberAttribute('drop_vld_gtpv0_subscriber_attr_miss');
  }
  public set dropVldGtpv0SubscriberAttrMiss(value: number) {
    this._dropVldGtpv0SubscriberAttrMiss = value;
  }
  public resetDropVldGtpv0SubscriberAttrMiss() {
    this._dropVldGtpv0SubscriberAttrMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv0SubscriberAttrMissInput() {
    return this._dropVldGtpv0SubscriberAttrMiss;
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

  // drop_vld_gtpv1_subscriber_attr_miss - computed: false, optional: true, required: false
  private _dropVldGtpv1SubscriberAttrMiss?: number; 
  public get dropVldGtpv1SubscriberAttrMiss() {
    return this.getNumberAttribute('drop_vld_gtpv1_subscriber_attr_miss');
  }
  public set dropVldGtpv1SubscriberAttrMiss(value: number) {
    this._dropVldGtpv1SubscriberAttrMiss = value;
  }
  public resetDropVldGtpv1SubscriberAttrMiss() {
    this._dropVldGtpv1SubscriberAttrMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv1SubscriberAttrMissInput() {
    return this._dropVldGtpv1SubscriberAttrMiss;
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

  // drop_vld_gtpv2_subscriber_attr_miss - computed: false, optional: true, required: false
  private _dropVldGtpv2SubscriberAttrMiss?: number; 
  public get dropVldGtpv2SubscriberAttrMiss() {
    return this.getNumberAttribute('drop_vld_gtpv2_subscriber_attr_miss');
  }
  public set dropVldGtpv2SubscriberAttrMiss(value: number) {
    this._dropVldGtpv2SubscriberAttrMiss = value;
  }
  public resetDropVldGtpv2SubscriberAttrMiss() {
    this._dropVldGtpv2SubscriberAttrMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv2SubscriberAttrMissInput() {
    return this._dropVldGtpv2SubscriberAttrMiss;
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

  // drop_vld_v0_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV0ReservedMessageDrop?: number; 
  public get dropVldV0ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v0_reserved_message_drop');
  }
  public set dropVldV0ReservedMessageDrop(value: number) {
    this._dropVldV0ReservedMessageDrop = value;
  }
  public resetDropVldV0ReservedMessageDrop() {
    this._dropVldV0ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV0ReservedMessageDropInput() {
    return this._dropVldV0ReservedMessageDrop;
  }

  // drop_vld_v1_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV1ReservedMessageDrop?: number; 
  public get dropVldV1ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v1_reserved_message_drop');
  }
  public set dropVldV1ReservedMessageDrop(value: number) {
    this._dropVldV1ReservedMessageDrop = value;
  }
  public resetDropVldV1ReservedMessageDrop() {
    this._dropVldV1ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV1ReservedMessageDropInput() {
    return this._dropVldV1ReservedMessageDrop;
  }

  // drop_vld_v2_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV2ReservedMessageDrop?: number; 
  public get dropVldV2ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v2_reserved_message_drop');
  }
  public set dropVldV2ReservedMessageDrop(value: number) {
    this._dropVldV2ReservedMessageDrop = value;
  }
  public resetDropVldV2ReservedMessageDrop() {
    this._dropVldV2ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV2ReservedMessageDropInput() {
    return this._dropVldV2ReservedMessageDrop;
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

  // gtp_v0_c_message_skipped_apn_filtering_no_imsi - computed: false, optional: true, required: false
  private _gtpV0CMessageSkippedApnFilteringNoImsi?: number; 
  public get gtpV0CMessageSkippedApnFilteringNoImsi() {
    return this.getNumberAttribute('gtp_v0_c_message_skipped_apn_filtering_no_imsi');
  }
  public set gtpV0CMessageSkippedApnFilteringNoImsi(value: number) {
    this._gtpV0CMessageSkippedApnFilteringNoImsi = value;
  }
  public resetGtpV0CMessageSkippedApnFilteringNoImsi() {
    this._gtpV0CMessageSkippedApnFilteringNoImsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CMessageSkippedApnFilteringNoImsiInput() {
    return this._gtpV0CMessageSkippedApnFilteringNoImsi;
  }

  // gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn - computed: false, optional: true, required: false
  private _gtpV0CMessageSkippedMsisdnFilteringNoMsisdn?: number; 
  public get gtpV0CMessageSkippedMsisdnFilteringNoMsisdn() {
    return this.getNumberAttribute('gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn');
  }
  public set gtpV0CMessageSkippedMsisdnFilteringNoMsisdn(value: number) {
    this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn = value;
  }
  public resetGtpV0CMessageSkippedMsisdnFilteringNoMsisdn() {
    this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CMessageSkippedMsisdnFilteringNoMsisdnInput() {
    return this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn;
  }

  // gtp_v0_c_packet_dummy_msisdn - computed: false, optional: true, required: false
  private _gtpV0CPacketDummyMsisdn?: number; 
  public get gtpV0CPacketDummyMsisdn() {
    return this.getNumberAttribute('gtp_v0_c_packet_dummy_msisdn');
  }
  public set gtpV0CPacketDummyMsisdn(value: number) {
    this._gtpV0CPacketDummyMsisdn = value;
  }
  public resetGtpV0CPacketDummyMsisdn() {
    this._gtpV0CPacketDummyMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CPacketDummyMsisdnInput() {
    return this._gtpV0CPacketDummyMsisdn;
  }

  // gtp_v0_c_pdu_notification_reject_request_forward - computed: false, optional: true, required: false
  private _gtpV0CPduNotificationRejectRequestForward?: number; 
  public get gtpV0CPduNotificationRejectRequestForward() {
    return this.getNumberAttribute('gtp_v0_c_pdu_notification_reject_request_forward');
  }
  public set gtpV0CPduNotificationRejectRequestForward(value: number) {
    this._gtpV0CPduNotificationRejectRequestForward = value;
  }
  public resetGtpV0CPduNotificationRejectRequestForward() {
    this._gtpV0CPduNotificationRejectRequestForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CPduNotificationRejectRequestForwardInput() {
    return this._gtpV0CPduNotificationRejectRequestForward;
  }

  // gtp_v0_c_pdu_notification_request_forward - computed: false, optional: true, required: false
  private _gtpV0CPduNotificationRequestForward?: number; 
  public get gtpV0CPduNotificationRequestForward() {
    return this.getNumberAttribute('gtp_v0_c_pdu_notification_request_forward');
  }
  public set gtpV0CPduNotificationRequestForward(value: number) {
    this._gtpV0CPduNotificationRequestForward = value;
  }
  public resetGtpV0CPduNotificationRequestForward() {
    this._gtpV0CPduNotificationRequestForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CPduNotificationRequestForwardInput() {
    return this._gtpV0CPduNotificationRequestForward;
  }

  // gtp_v0_c_reserved_message_allow - computed: false, optional: true, required: false
  private _gtpV0CReservedMessageAllow?: number; 
  public get gtpV0CReservedMessageAllow() {
    return this.getNumberAttribute('gtp_v0_c_reserved_message_allow');
  }
  public set gtpV0CReservedMessageAllow(value: number) {
    this._gtpV0CReservedMessageAllow = value;
  }
  public resetGtpV0CReservedMessageAllow() {
    this._gtpV0CReservedMessageAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CReservedMessageAllowInput() {
    return this._gtpV0CReservedMessageAllow;
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

  // gtp_v1_c_message_skipped_apn_filtering_no_imsi - computed: false, optional: true, required: false
  private _gtpV1CMessageSkippedApnFilteringNoImsi?: number; 
  public get gtpV1CMessageSkippedApnFilteringNoImsi() {
    return this.getNumberAttribute('gtp_v1_c_message_skipped_apn_filtering_no_imsi');
  }
  public set gtpV1CMessageSkippedApnFilteringNoImsi(value: number) {
    this._gtpV1CMessageSkippedApnFilteringNoImsi = value;
  }
  public resetGtpV1CMessageSkippedApnFilteringNoImsi() {
    this._gtpV1CMessageSkippedApnFilteringNoImsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CMessageSkippedApnFilteringNoImsiInput() {
    return this._gtpV1CMessageSkippedApnFilteringNoImsi;
  }

  // gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn - computed: false, optional: true, required: false
  private _gtpV1CMessageSkippedMsisdnFilteringNoMsisdn?: number; 
  public get gtpV1CMessageSkippedMsisdnFilteringNoMsisdn() {
    return this.getNumberAttribute('gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn');
  }
  public set gtpV1CMessageSkippedMsisdnFilteringNoMsisdn(value: number) {
    this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn = value;
  }
  public resetGtpV1CMessageSkippedMsisdnFilteringNoMsisdn() {
    this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CMessageSkippedMsisdnFilteringNoMsisdnInput() {
    return this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn;
  }

  // gtp_v1_c_packet_dummy_msisdn - computed: false, optional: true, required: false
  private _gtpV1CPacketDummyMsisdn?: number; 
  public get gtpV1CPacketDummyMsisdn() {
    return this.getNumberAttribute('gtp_v1_c_packet_dummy_msisdn');
  }
  public set gtpV1CPacketDummyMsisdn(value: number) {
    this._gtpV1CPacketDummyMsisdn = value;
  }
  public resetGtpV1CPacketDummyMsisdn() {
    this._gtpV1CPacketDummyMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CPacketDummyMsisdnInput() {
    return this._gtpV1CPacketDummyMsisdn;
  }

  // gtp_v1_c_pdu_notification_reject_request_forward - computed: false, optional: true, required: false
  private _gtpV1CPduNotificationRejectRequestForward?: number; 
  public get gtpV1CPduNotificationRejectRequestForward() {
    return this.getNumberAttribute('gtp_v1_c_pdu_notification_reject_request_forward');
  }
  public set gtpV1CPduNotificationRejectRequestForward(value: number) {
    this._gtpV1CPduNotificationRejectRequestForward = value;
  }
  public resetGtpV1CPduNotificationRejectRequestForward() {
    this._gtpV1CPduNotificationRejectRequestForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CPduNotificationRejectRequestForwardInput() {
    return this._gtpV1CPduNotificationRejectRequestForward;
  }

  // gtp_v1_c_pdu_notification_request_forward - computed: false, optional: true, required: false
  private _gtpV1CPduNotificationRequestForward?: number; 
  public get gtpV1CPduNotificationRequestForward() {
    return this.getNumberAttribute('gtp_v1_c_pdu_notification_request_forward');
  }
  public set gtpV1CPduNotificationRequestForward(value: number) {
    this._gtpV1CPduNotificationRequestForward = value;
  }
  public resetGtpV1CPduNotificationRequestForward() {
    this._gtpV1CPduNotificationRequestForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CPduNotificationRequestForwardInput() {
    return this._gtpV1CPduNotificationRequestForward;
  }

  // gtp_v1_c_reserved_message_allow - computed: false, optional: true, required: false
  private _gtpV1CReservedMessageAllow?: number; 
  public get gtpV1CReservedMessageAllow() {
    return this.getNumberAttribute('gtp_v1_c_reserved_message_allow');
  }
  public set gtpV1CReservedMessageAllow(value: number) {
    this._gtpV1CReservedMessageAllow = value;
  }
  public resetGtpV1CReservedMessageAllow() {
    this._gtpV1CReservedMessageAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CReservedMessageAllowInput() {
    return this._gtpV1CReservedMessageAllow;
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

  // gtp_v2_c_message_skipped_apn_filtering_no_imsi - computed: false, optional: true, required: false
  private _gtpV2CMessageSkippedApnFilteringNoImsi?: number; 
  public get gtpV2CMessageSkippedApnFilteringNoImsi() {
    return this.getNumberAttribute('gtp_v2_c_message_skipped_apn_filtering_no_imsi');
  }
  public set gtpV2CMessageSkippedApnFilteringNoImsi(value: number) {
    this._gtpV2CMessageSkippedApnFilteringNoImsi = value;
  }
  public resetGtpV2CMessageSkippedApnFilteringNoImsi() {
    this._gtpV2CMessageSkippedApnFilteringNoImsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CMessageSkippedApnFilteringNoImsiInput() {
    return this._gtpV2CMessageSkippedApnFilteringNoImsi;
  }

  // gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn - computed: false, optional: true, required: false
  private _gtpV2CMessageSkippedMsisdnFilteringNoMsisdn?: number; 
  public get gtpV2CMessageSkippedMsisdnFilteringNoMsisdn() {
    return this.getNumberAttribute('gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn');
  }
  public set gtpV2CMessageSkippedMsisdnFilteringNoMsisdn(value: number) {
    this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn = value;
  }
  public resetGtpV2CMessageSkippedMsisdnFilteringNoMsisdn() {
    this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CMessageSkippedMsisdnFilteringNoMsisdnInput() {
    return this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn;
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

  // gtp_v2_c_packet_dummy_msisdn - computed: false, optional: true, required: false
  private _gtpV2CPacketDummyMsisdn?: number; 
  public get gtpV2CPacketDummyMsisdn() {
    return this.getNumberAttribute('gtp_v2_c_packet_dummy_msisdn');
  }
  public set gtpV2CPacketDummyMsisdn(value: number) {
    this._gtpV2CPacketDummyMsisdn = value;
  }
  public resetGtpV2CPacketDummyMsisdn() {
    this._gtpV2CPacketDummyMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CPacketDummyMsisdnInput() {
    return this._gtpV2CPacketDummyMsisdn;
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

  // gtp_v2_c_reserved_message_allow - computed: false, optional: true, required: false
  private _gtpV2CReservedMessageAllow?: number; 
  public get gtpV2CReservedMessageAllow() {
    return this.getNumberAttribute('gtp_v2_c_reserved_message_allow');
  }
  public set gtpV2CReservedMessageAllow(value: number) {
    this._gtpV2CReservedMessageAllow = value;
  }
  public resetGtpV2CReservedMessageAllow() {
    this._gtpV2CReservedMessageAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CReservedMessageAllowInput() {
    return this._gtpV2CReservedMessageAllow;
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

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
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
}
export interface DataThunderFwGtpStatsApnPrefix {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#stats DataThunderFwGtpStats#stats}
  */
  readonly stats?: DataThunderFwGtpStatsApnPrefixStats;
}

export function dataThunderFwGtpStatsApnPrefixToTerraform(struct?: DataThunderFwGtpStatsApnPrefixOutputReference | DataThunderFwGtpStatsApnPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderFwGtpStatsApnPrefixStatsToTerraform(struct!.stats),
  }
}


export function dataThunderFwGtpStatsApnPrefixToHclTerraform(struct?: DataThunderFwGtpStatsApnPrefixOutputReference | DataThunderFwGtpStatsApnPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderFwGtpStatsApnPrefixStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwGtpStatsApnPrefixStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwGtpStatsApnPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwGtpStatsApnPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwGtpStatsApnPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderFwGtpStatsApnPrefixStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwGtpStatsApnPrefixStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}
export interface DataThunderFwGtpStatsNetworkElementStats {
  /**
  * Downlink Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#downlink_bytes DataThunderFwGtpStats#downlink_bytes}
  */
  readonly downlinkBytes?: number;
  /**
  * Downlink Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#downlink_pkts DataThunderFwGtpStats#downlink_pkts}
  */
  readonly downlinkPkts?: number;
  /**
  * Filtering Drop: APN IMSI Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_flt_apn_filtering DataThunderFwGtpStats#drop_flt_apn_filtering}
  */
  readonly dropFltApnFiltering?: number;
  /**
  * Filtering Drop: GTP in GTP Tunnel Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_flt_gtp_in_gtp DataThunderFwGtpStats#drop_flt_gtp_in_gtp}
  */
  readonly dropFltGtpInGtp?: number;
  /**
  * Filtering Drop: Message Type Not Permitted on Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_flt_message_filtering DataThunderFwGtpStats#drop_flt_message_filtering}
  */
  readonly dropFltMessageFiltering?: number;
  /**
  * Filtering Drop: MSISDN Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_flt_msisdn_filtering DataThunderFwGtpStats#drop_flt_msisdn_filtering}
  */
  readonly dropFltMsisdnFiltering?: number;
  /**
  * Filtering Drop: RAT Type Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_flt_rat_type_filtering DataThunderFwGtpStats#drop_flt_rat_type_filtering}
  */
  readonly dropFltRatTypeFiltering?: number;
  /**
  * Rate-limit Drop: GTP-U Downlink byte rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_downlink_byte DataThunderFwGtpStats#drop_rl_gtp_u_downlink_byte}
  */
  readonly dropRlGtpUDownlinkByte?: number;
  /**
  * Rate-limit Drop: GTP-U Downlink packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_downlink_packet DataThunderFwGtpStats#drop_rl_gtp_u_downlink_packet}
  */
  readonly dropRlGtpUDownlinkPacket?: number;
  /**
  * Rate-limit Drop: GTP-U Concurrent Tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_max_concurrent_tunnels DataThunderFwGtpStats#drop_rl_gtp_u_max_concurrent_tunnels}
  */
  readonly dropRlGtpUMaxConcurrentTunnels?: number;
  /**
  * Rate-limit Drop: GTP-U Total byte rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_total_byte DataThunderFwGtpStats#drop_rl_gtp_u_total_byte}
  */
  readonly dropRlGtpUTotalByte?: number;
  /**
  * Rate-limit Drop: GTP-U Total packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_total_packet DataThunderFwGtpStats#drop_rl_gtp_u_total_packet}
  */
  readonly dropRlGtpUTotalPacket?: number;
  /**
  * Rate-limit Drop: GTP-U Tunnel Creation rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_tunnel_create DataThunderFwGtpStats#drop_rl_gtp_u_tunnel_create}
  */
  readonly dropRlGtpUTunnelCreate?: number;
  /**
  * Rate-limit Drop: GTP-U Uplink byte rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_uplink_byte DataThunderFwGtpStats#drop_rl_gtp_u_uplink_byte}
  */
  readonly dropRlGtpUUplinkByte?: number;
  /**
  * Rate-limit Drop: GTP-U Uplink packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_u_uplink_packet DataThunderFwGtpStats#drop_rl_gtp_u_uplink_packet}
  */
  readonly dropRlGtpUUplinkPacket?: number;
  /**
  * Rate-limit Drop: Maximum GTPv0-C messages rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v0_c_agg DataThunderFwGtpStats#drop_rl_gtp_v0_c_agg}
  */
  readonly dropRlGtpV0CAgg?: number;
  /**
  * Rate-limit Drop: Maximum GTPv1-C messages rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v1_c_agg DataThunderFwGtpStats#drop_rl_gtp_v1_c_agg}
  */
  readonly dropRlGtpV1CAgg?: number;
  /**
  * Rate-limit Drop: GTPv1-C Create PDP Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v1_c_create_pdp_request DataThunderFwGtpStats#drop_rl_gtp_v1_c_create_pdp_request}
  */
  readonly dropRlGtpV1CCreatePdpRequest?: number;
  /**
  * Rate-limit Drop: GTPv1-C Update PDP Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v1_c_update_pdp_request DataThunderFwGtpStats#drop_rl_gtp_v1_c_update_pdp_request}
  */
  readonly dropRlGtpV1CUpdatePdpRequest?: number;
  /**
  * Rate-limit Drop: Maximum GTPv2-C messages rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v2_c_agg DataThunderFwGtpStats#drop_rl_gtp_v2_c_agg}
  */
  readonly dropRlGtpV2CAgg?: number;
  /**
  * Rate-limit Drop: GTPv2-C Create Session Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v2_c_create_session_request DataThunderFwGtpStats#drop_rl_gtp_v2_c_create_session_request}
  */
  readonly dropRlGtpV2CCreateSessionRequest?: number;
  /**
  * Rate-limit Drop: GTPv2-C Modify Bearer Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_rl_gtp_v2_c_modify_bearer_request DataThunderFwGtpStats#drop_rl_gtp_v2_c_modify_bearer_request}
  */
  readonly dropRlGtpV2CModifyBearerRequest?: number;
  /**
  * Validation Drop: Country Code Mismatch in IMSI and MSISDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_country_code_mismatch DataThunderFwGtpStats#drop_vld_country_code_mismatch}
  */
  readonly dropVldCountryCodeMismatch?: number;
  /**
  * Validation Drop: Cross Layer IP Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_cross_layer_correlation DataThunderFwGtpStats#drop_vld_cross_layer_correlation}
  */
  readonly dropVldCrossLayerCorrelation?: number;
  /**
  * Validation Drop: GTP Bearer count exceeded max (11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_bearer_count_exceed DataThunderFwGtpStats#drop_vld_gtp_bearer_count_exceed}
  */
  readonly dropVldGtpBearerCountExceed?: number;
  /**
  * Validation Drop: GTP-C Invalid APN Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_invalid_apn_len_drop DataThunderFwGtpStats#drop_vld_gtp_invalid_apn_len_drop}
  */
  readonly dropVldGtpInvalidApnLenDrop?: number;
  /**
  * Validation Drop: GTP-C Invalid IMSI Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_invalid_imsi_len_drop DataThunderFwGtpStats#drop_vld_gtp_invalid_imsi_len_drop}
  */
  readonly dropVldGtpInvalidImsiLenDrop?: number;
  /**
  * Validation Drop: GTP-U IP Address Spoofed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_u_spoofed_source_address DataThunderFwGtpStats#drop_vld_gtp_u_spoofed_source_address}
  */
  readonly dropVldGtpUSpoofedSourceAddress?: number;
  /**
  * Validation Drop: GTPv0-C IE Length Exceeds Message Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v0_c_ie_len_exceed_msg_len DataThunderFwGtpStats#drop_vld_gtp_v0_c_ie_len_exceed_msg_len}
  */
  readonly dropVldGtpV0CIeLenExceedMsgLen?: number;
  /**
  * Validation Drop: GTPv0-C APN/IMSI Filtering dropped (No APN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn DataThunderFwGtpStats#drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn}
  */
  readonly dropVldGtpV0CMessageDroppedApnFilteringNoApn?: number;
  /**
  * Validation Drop: GTPv0-C Message Length Mismatch Across Layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v0_c_message_length_mismatch DataThunderFwGtpStats#drop_vld_gtp_v0_c_message_length_mismatch}
  */
  readonly dropVldGtpV0CMessageLengthMismatch?: number;
  /**
  * Validation Drop: GTPv0-C PDU Notification Request with TEID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v0_c_message_with_teid_zero_expected DataThunderFwGtpStats#drop_vld_gtp_v0_c_message_with_teid_zero_expected}
  */
  readonly dropVldGtpV0CMessageWithTeidZeroExpected?: number;
  /**
  * Validation Drop: GTPv1-C IE Length Exceeds Message Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v1_c_ie_len_exceed_msg_len DataThunderFwGtpStats#drop_vld_gtp_v1_c_ie_len_exceed_msg_len}
  */
  readonly dropVldGtpV1CIeLenExceedMsgLen?: number;
  /**
  * Validation Drop: GTPv1-C APN/IMSI Filtering dropped (No APN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn DataThunderFwGtpStats#drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn}
  */
  readonly dropVldGtpV1CMessageDroppedApnFilteringNoApn?: number;
  /**
  * Validation Drop: GTPv1-C Message Length Mismatch Across Layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v1_c_message_length_mismatch DataThunderFwGtpStats#drop_vld_gtp_v1_c_message_length_mismatch}
  */
  readonly dropVldGtpV1CMessageLengthMismatch?: number;
  /**
  * Validation Drop: GTPv1-C PDU Notification Request with TEID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v1_c_message_with_teid_zero_expected DataThunderFwGtpStats#drop_vld_gtp_v1_c_message_with_teid_zero_expected}
  */
  readonly dropVldGtpV1CMessageWithTeidZeroExpected?: number;
  /**
  * Validation Drop: GTPv2-C IE Length Exceeds Message Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v2_c_ie_len_exceed_msg_len DataThunderFwGtpStats#drop_vld_gtp_v2_c_ie_len_exceed_msg_len}
  */
  readonly dropVldGtpV2CIeLenExceedMsgLen?: number;
  /**
  * Validation Drop: GTPv2-C APN/IMSI Filtering dropped (No APN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn DataThunderFwGtpStats#drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn}
  */
  readonly dropVldGtpV2CMessageDroppedApnFilteringNoApn?: number;
  /**
  * Validation Drop: GTPv2-C Message Length Mismatch Across Layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v2_c_message_length_mismatch DataThunderFwGtpStats#drop_vld_gtp_v2_c_message_length_mismatch}
  */
  readonly dropVldGtpV2CMessageLengthMismatch?: number;
  /**
  * Validation Drop: GTPv2-C Create Session Request with TEID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v2_c_message_with_teid_zero_expected DataThunderFwGtpStats#drop_vld_gtp_v2_c_message_with_teid_zero_expected}
  */
  readonly dropVldGtpV2CMessageWithTeidZeroExpected?: number;
  /**
  * Validation Drop: GTPV2-C Wrong LBI in Create Bearer Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_v2_wrong_lbi_create_bearer_req DataThunderFwGtpStats#drop_vld_gtp_v2_wrong_lbi_create_bearer_req}
  */
  readonly dropVldGtpV2WrongLbiCreateBearerReq?: number;
  /**
  * Validation Drop: GTPV0-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtpv0_seqnum_buffer_full DataThunderFwGtpStats#drop_vld_gtpv0_seqnum_buffer_full}
  */
  readonly dropVldGtpv0SeqnumBufferFull?: number;
  /**
  * Validation Drop: GTPV0-c Subscriber Attributes Missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtpv0_subscriber_attr_miss DataThunderFwGtpStats#drop_vld_gtpv0_subscriber_attr_miss}
  */
  readonly dropVldGtpv0SubscriberAttrMiss?: number;
  /**
  * Validation Drop: GTPV1-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtpv1_seqnum_buffer_full DataThunderFwGtpStats#drop_vld_gtpv1_seqnum_buffer_full}
  */
  readonly dropVldGtpv1SeqnumBufferFull?: number;
  /**
  * Validation Drop: GTPV1-c Subscriber Attributes Missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtpv1_subscriber_attr_miss DataThunderFwGtpStats#drop_vld_gtpv1_subscriber_attr_miss}
  */
  readonly dropVldGtpv1SubscriberAttrMiss?: number;
  /**
  * Validation Drop: GTPV2-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtpv2_seqnum_buffer_full DataThunderFwGtpStats#drop_vld_gtpv2_seqnum_buffer_full}
  */
  readonly dropVldGtpv2SeqnumBufferFull?: number;
  /**
  * Validation Drop: GTPV2-c Subscriber Attributes Missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtpv2_subscriber_attr_miss DataThunderFwGtpStats#drop_vld_gtpv2_subscriber_attr_miss}
  */
  readonly dropVldGtpv2SubscriberAttrMiss?: number;
  /**
  * Validation Drop: Invalid Flow Label in GTPv0-C Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_invalid_flow_label_v0 DataThunderFwGtpStats#drop_vld_invalid_flow_label_v0}
  */
  readonly dropVldInvalidFlowLabelV0?: number;
  /**
  * Validation Drop: Piggyback message invalid packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_invalid_pkt_len_piggyback DataThunderFwGtpStats#drop_vld_invalid_pkt_len_piggyback}
  */
  readonly dropVldInvalidPktLenPiggyback?: number;
  /**
  * Validation Drop: Invalid TEID Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_invalid_teid DataThunderFwGtpStats#drop_vld_invalid_teid}
  */
  readonly dropVldInvalidTeid?: number;
  /**
  * Validation Drop: Mandatory IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_mandatory_information_element DataThunderFwGtpStats#drop_vld_mandatory_information_element}
  */
  readonly dropVldMandatoryInformationElement?: number;
  /**
  * Validation Drop: Message Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_message_length DataThunderFwGtpStats#drop_vld_message_length}
  */
  readonly dropVldMessageLength?: number;
  /**
  * Validation Drop: GTPv1-C Message Out of Order IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_out_of_order_ie DataThunderFwGtpStats#drop_vld_out_of_order_ie}
  */
  readonly dropVldOutOfOrderIe?: number;
  /**
  * Validation Drop: Out Of State GTP Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_out_of_state DataThunderFwGtpStats#drop_vld_out_of_state}
  */
  readonly dropVldOutOfState?: number;
  /**
  * Validation Drop: Unexpected IE Present in Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_out_of_state_ie DataThunderFwGtpStats#drop_vld_out_of_state_ie}
  */
  readonly dropVldOutOfStateIe?: number;
  /**
  * Validation Drop: Protocol flag in Header Field not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_protocol_flag_unset DataThunderFwGtpStats#drop_vld_protocol_flag_unset}
  */
  readonly dropVldProtocolFlagUnset?: number;
  /**
  * Validation Drop: Reserved Header Field Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_reserved_field_set DataThunderFwGtpStats#drop_vld_reserved_field_set}
  */
  readonly dropVldReservedFieldSet?: number;
  /**
  * Validation Drop: Reserved IE Field Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_reserved_information_element DataThunderFwGtpStats#drop_vld_reserved_information_element}
  */
  readonly dropVldReservedInformationElement?: number;
  /**
  * Validation Drop: piggyback message anomaly failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_sanity_failed_piggyback DataThunderFwGtpStats#drop_vld_sanity_failed_piggyback}
  */
  readonly dropVldSanityFailedPiggyback?: number;
  /**
  * Validation Drop: GTP-C Sequence number Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_sequence_num_correlation DataThunderFwGtpStats#drop_vld_sequence_num_correlation}
  */
  readonly dropVldSequenceNumCorrelation?: number;
  /**
  * Validation Drop: Tunnel Header Flag Not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_tunnel_id_flag DataThunderFwGtpStats#drop_vld_tunnel_id_flag}
  */
  readonly dropVldTunnelIdFlag?: number;
  /**
  * Validation Drop: Message type not supported by GTP Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_unsupported_message_type DataThunderFwGtpStats#drop_vld_unsupported_message_type}
  */
  readonly dropVldUnsupportedMessageType?: number;
  /**
  * Validation Drop: GTPv0-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_v0_reserved_message_drop DataThunderFwGtpStats#drop_vld_v0_reserved_message_drop}
  */
  readonly dropVldV0ReservedMessageDrop?: number;
  /**
  * Validation Drop: GTPv1-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_v1_reserved_message_drop DataThunderFwGtpStats#drop_vld_v1_reserved_message_drop}
  */
  readonly dropVldV1ReservedMessageDrop?: number;
  /**
  * Validation Drop: GTPv2-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_v2_reserved_message_drop DataThunderFwGtpStats#drop_vld_v2_reserved_message_drop}
  */
  readonly dropVldV2ReservedMessageDrop?: number;
  /**
  * Validation Drop: Invalid GTP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_version_not_supported DataThunderFwGtpStats#drop_vld_version_not_supported}
  */
  readonly dropVldVersionNotSupported?: number;
  /**
  * GTP-C matching a conn with Handover In Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_c_handover_in_progress_with_conn DataThunderFwGtpStats#gtp_c_handover_in_progress_with_conn}
  */
  readonly gtpCHandoverInProgressWithConn?: number;
  /**
  * GTP Node Restoration due to Recovery IE in GTP-C Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_node_restart_gtp_c DataThunderFwGtpStats#gtp_node_restart_gtp_c}
  */
  readonly gtpNodeRestartGtpC?: number;
  /**
  * GTP Path Management Messages Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_path_management_message DataThunderFwGtpStats#gtp_path_management_message}
  */
  readonly gtpPathManagementMessage?: number;
  /**
  * GTP-U Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_tunnel_created DataThunderFwGtpStats#gtp_u_tunnel_created}
  */
  readonly gtpUTunnelCreated?: number;
  /**
  * GTP-U Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_tunnel_deleted DataThunderFwGtpStats#gtp_u_tunnel_deleted}
  */
  readonly gtpUTunnelDeleted?: number;
  /**
  * GTPv0-C Create PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_create_pdp_resp_unsuccess DataThunderFwGtpStats#gtp_v0_c_create_pdp_resp_unsuccess}
  */
  readonly gtpV0CCreatePdpRespUnsuccess?: number;
  /**
  * GTPv0-C Half open tunnel closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_half_open_tunnel_closed DataThunderFwGtpStats#gtp_v0_c_half_open_tunnel_closed}
  */
  readonly gtpV0CHalfOpenTunnelClosed?: number;
  /**
  * GTPv0-C APN/IMSI Filtering Skipped (No IMSI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_message_skipped_apn_filtering_no_imsi DataThunderFwGtpStats#gtp_v0_c_message_skipped_apn_filtering_no_imsi}
  */
  readonly gtpV0CMessageSkippedApnFilteringNoImsi?: number;
  /**
  * GTPv0-C MSISDN Filtering Skipped (No MSISDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn DataThunderFwGtpStats#gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn}
  */
  readonly gtpV0CMessageSkippedMsisdnFilteringNoMsisdn?: number;
  /**
  * GTPv0-C Packet With Dummy MSISDN Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_packet_dummy_msisdn DataThunderFwGtpStats#gtp_v0_c_packet_dummy_msisdn}
  */
  readonly gtpV0CPacketDummyMsisdn?: number;
  /**
  * GTPv0-C PDU Notification Reject Request Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_pdu_notification_reject_request_forward DataThunderFwGtpStats#gtp_v0_c_pdu_notification_reject_request_forward}
  */
  readonly gtpV0CPduNotificationRejectRequestForward?: number;
  /**
  * GTPv0-C PDU Notification Request Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_pdu_notification_request_forward DataThunderFwGtpStats#gtp_v0_c_pdu_notification_request_forward}
  */
  readonly gtpV0CPduNotificationRequestForward?: number;
  /**
  * GTPv0-C Reserved Message Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_reserved_message_allow DataThunderFwGtpStats#gtp_v0_c_reserved_message_allow}
  */
  readonly gtpV0CReservedMessageAllow?: number;
  /**
  * GTPv0-C Tunnel Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_tunnel_closed DataThunderFwGtpStats#gtp_v0_c_tunnel_closed}
  */
  readonly gtpV0CTunnelClosed?: number;
  /**
  * GTPv0-C Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_tunnel_created DataThunderFwGtpStats#gtp_v0_c_tunnel_created}
  */
  readonly gtpV0CTunnelCreated?: number;
  /**
  * GTPv0-C Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_tunnel_deleted DataThunderFwGtpStats#gtp_v0_c_tunnel_deleted}
  */
  readonly gtpV0CTunnelDeleted?: number;
  /**
  * GTPv0-C Tunnel Deleted with Restart/failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_tunnel_deleted_restart DataThunderFwGtpStats#gtp_v0_c_tunnel_deleted_restart}
  */
  readonly gtpV0CTunnelDeletedRestart?: number;
  /**
  * GTPv0-C Tunnel Delete Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_tunnel_half_closed DataThunderFwGtpStats#gtp_v0_c_tunnel_half_closed}
  */
  readonly gtpV0CTunnelHalfClosed?: number;
  /**
  * GTPv0-C Half open tunnel created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_tunnel_half_open DataThunderFwGtpStats#gtp_v0_c_tunnel_half_open}
  */
  readonly gtpV0CTunnelHalfOpen?: number;
  /**
  * GTPv0-C Update PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_update_pdp_resp_unsuccess DataThunderFwGtpStats#gtp_v0_c_update_pdp_resp_unsuccess}
  */
  readonly gtpV0CUpdatePdpRespUnsuccess?: number;
  /**
  * GTPv1-C Create PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_create_pdp_resp_unsuccess DataThunderFwGtpStats#gtp_v1_c_create_pdp_resp_unsuccess}
  */
  readonly gtpV1CCreatePdpRespUnsuccess?: number;
  /**
  * GTPv1-C Half open tunnel closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_half_open_tunnel_closed DataThunderFwGtpStats#gtp_v1_c_half_open_tunnel_closed}
  */
  readonly gtpV1CHalfOpenTunnelClosed?: number;
  /**
  * GTPv1-C APN/IMSI Filtering Skipped (No IMSI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_message_skipped_apn_filtering_no_imsi DataThunderFwGtpStats#gtp_v1_c_message_skipped_apn_filtering_no_imsi}
  */
  readonly gtpV1CMessageSkippedApnFilteringNoImsi?: number;
  /**
  * GTPv1-C MSISDN Filtering Skipped (No MSISDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn DataThunderFwGtpStats#gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn}
  */
  readonly gtpV1CMessageSkippedMsisdnFilteringNoMsisdn?: number;
  /**
  * GTPv0-C Packet With Dummy MSISDN Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_packet_dummy_msisdn DataThunderFwGtpStats#gtp_v1_c_packet_dummy_msisdn}
  */
  readonly gtpV1CPacketDummyMsisdn?: number;
  /**
  * GTPv1-C PDU Notification Reject Request Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_pdu_notification_reject_request_forward DataThunderFwGtpStats#gtp_v1_c_pdu_notification_reject_request_forward}
  */
  readonly gtpV1CPduNotificationRejectRequestForward?: number;
  /**
  * GTPv1-C PDU Notification Request Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_pdu_notification_request_forward DataThunderFwGtpStats#gtp_v1_c_pdu_notification_request_forward}
  */
  readonly gtpV1CPduNotificationRequestForward?: number;
  /**
  * GTPv1-C Reserved Message Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_reserved_message_allow DataThunderFwGtpStats#gtp_v1_c_reserved_message_allow}
  */
  readonly gtpV1CReservedMessageAllow?: number;
  /**
  * GTPv1-C Tunnel Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_tunnel_closed DataThunderFwGtpStats#gtp_v1_c_tunnel_closed}
  */
  readonly gtpV1CTunnelClosed?: number;
  /**
  * GTPv1-C Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_tunnel_created DataThunderFwGtpStats#gtp_v1_c_tunnel_created}
  */
  readonly gtpV1CTunnelCreated?: number;
  /**
  * GTPv1-C Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_tunnel_deleted DataThunderFwGtpStats#gtp_v1_c_tunnel_deleted}
  */
  readonly gtpV1CTunnelDeleted?: number;
  /**
  * GTPv1-C Tunnel Deleted with Restart/failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_tunnel_deleted_restart DataThunderFwGtpStats#gtp_v1_c_tunnel_deleted_restart}
  */
  readonly gtpV1CTunnelDeletedRestart?: number;
  /**
  * GTPv1-C Tunnel Delete Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_tunnel_half_closed DataThunderFwGtpStats#gtp_v1_c_tunnel_half_closed}
  */
  readonly gtpV1CTunnelHalfClosed?: number;
  /**
  * GTPv1-C Half open tunnel created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_tunnel_half_open DataThunderFwGtpStats#gtp_v1_c_tunnel_half_open}
  */
  readonly gtpV1CTunnelHalfOpen?: number;
  /**
  * GTPv1-C Update PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_update_pdp_resp_unsuccess DataThunderFwGtpStats#gtp_v1_c_update_pdp_resp_unsuccess}
  */
  readonly gtpV1CUpdatePdpRespUnsuccess?: number;
  /**
  * GTPv2-C Create Session Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_create_sess_resp_unsuccess DataThunderFwGtpStats#gtp_v2_c_create_sess_resp_unsuccess}
  */
  readonly gtpV2CCreateSessRespUnsuccess?: number;
  /**
  * GTPv2-C Half open tunnel closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_half_open_tunnel_closed DataThunderFwGtpStats#gtp_v2_c_half_open_tunnel_closed}
  */
  readonly gtpV2CHalfOpenTunnelClosed?: number;
  /**
  * GTPv2-C APN/IMSI Filtering Skipped (No IMSI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_message_skipped_apn_filtering_no_imsi DataThunderFwGtpStats#gtp_v2_c_message_skipped_apn_filtering_no_imsi}
  */
  readonly gtpV2CMessageSkippedApnFilteringNoImsi?: number;
  /**
  * GTPv2-C MSISDN Filtering Skipped (No MSISDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn DataThunderFwGtpStats#gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn}
  */
  readonly gtpV2CMessageSkippedMsisdnFilteringNoMsisdn?: number;
  /**
  * GTPv2-C Modify Bearer Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_mod_bearer_resp_unsuccess DataThunderFwGtpStats#gtp_v2_c_mod_bearer_resp_unsuccess}
  */
  readonly gtpV2CModBearerRespUnsuccess?: number;
  /**
  * GTPv0-C Packet With Dummy MSISDN Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_packet_dummy_msisdn DataThunderFwGtpStats#gtp_v2_c_packet_dummy_msisdn}
  */
  readonly gtpV2CPacketDummyMsisdn?: number;
  /**
  * GTPv2-C Piggyback Messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_piggyback_message DataThunderFwGtpStats#gtp_v2_c_piggyback_message}
  */
  readonly gtpV2CPiggybackMessage?: number;
  /**
  * GTPv2-C Reserved Message Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_reserved_message_allow DataThunderFwGtpStats#gtp_v2_c_reserved_message_allow}
  */
  readonly gtpV2CReservedMessageAllow?: number;
  /**
  * GTPv2-C Tunnel Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_tunnel_closed DataThunderFwGtpStats#gtp_v2_c_tunnel_closed}
  */
  readonly gtpV2CTunnelClosed?: number;
  /**
  * GTPv2-C Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_tunnel_created DataThunderFwGtpStats#gtp_v2_c_tunnel_created}
  */
  readonly gtpV2CTunnelCreated?: number;
  /**
  * GTPv2-C Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_tunnel_deleted DataThunderFwGtpStats#gtp_v2_c_tunnel_deleted}
  */
  readonly gtpV2CTunnelDeleted?: number;
  /**
  * GTPv2-C Tunnel Deleted with Restart/failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_tunnel_deleted_restart DataThunderFwGtpStats#gtp_v2_c_tunnel_deleted_restart}
  */
  readonly gtpV2CTunnelDeletedRestart?: number;
  /**
  * GTPv2-C Tunnel Delete Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_tunnel_half_closed DataThunderFwGtpStats#gtp_v2_c_tunnel_half_closed}
  */
  readonly gtpV2CTunnelHalfClosed?: number;
  /**
  * GTPv2-C Half open tunnel created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_tunnel_half_open DataThunderFwGtpStats#gtp_v2_c_tunnel_half_open}
  */
  readonly gtpV2CTunnelHalfOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#key_name DataThunderFwGtpStats#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#key_type DataThunderFwGtpStats#key_type}
  */
  readonly keyType?: string;
  /**
  * Uplink Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#uplink_bytes DataThunderFwGtpStats#uplink_bytes}
  */
  readonly uplinkBytes?: number;
  /**
  * Uplink Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#uplink_pkts DataThunderFwGtpStats#uplink_pkts}
  */
  readonly uplinkPkts?: number;
}

export function dataThunderFwGtpStatsNetworkElementStatsToTerraform(struct?: DataThunderFwGtpStatsNetworkElementStatsOutputReference | DataThunderFwGtpStatsNetworkElementStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    downlink_bytes: cdktf.numberToTerraform(struct!.downlinkBytes),
    downlink_pkts: cdktf.numberToTerraform(struct!.downlinkPkts),
    drop_flt_apn_filtering: cdktf.numberToTerraform(struct!.dropFltApnFiltering),
    drop_flt_gtp_in_gtp: cdktf.numberToTerraform(struct!.dropFltGtpInGtp),
    drop_flt_message_filtering: cdktf.numberToTerraform(struct!.dropFltMessageFiltering),
    drop_flt_msisdn_filtering: cdktf.numberToTerraform(struct!.dropFltMsisdnFiltering),
    drop_flt_rat_type_filtering: cdktf.numberToTerraform(struct!.dropFltRatTypeFiltering),
    drop_rl_gtp_u_downlink_byte: cdktf.numberToTerraform(struct!.dropRlGtpUDownlinkByte),
    drop_rl_gtp_u_downlink_packet: cdktf.numberToTerraform(struct!.dropRlGtpUDownlinkPacket),
    drop_rl_gtp_u_max_concurrent_tunnels: cdktf.numberToTerraform(struct!.dropRlGtpUMaxConcurrentTunnels),
    drop_rl_gtp_u_total_byte: cdktf.numberToTerraform(struct!.dropRlGtpUTotalByte),
    drop_rl_gtp_u_total_packet: cdktf.numberToTerraform(struct!.dropRlGtpUTotalPacket),
    drop_rl_gtp_u_tunnel_create: cdktf.numberToTerraform(struct!.dropRlGtpUTunnelCreate),
    drop_rl_gtp_u_uplink_byte: cdktf.numberToTerraform(struct!.dropRlGtpUUplinkByte),
    drop_rl_gtp_u_uplink_packet: cdktf.numberToTerraform(struct!.dropRlGtpUUplinkPacket),
    drop_rl_gtp_v0_c_agg: cdktf.numberToTerraform(struct!.dropRlGtpV0CAgg),
    drop_rl_gtp_v1_c_agg: cdktf.numberToTerraform(struct!.dropRlGtpV1CAgg),
    drop_rl_gtp_v1_c_create_pdp_request: cdktf.numberToTerraform(struct!.dropRlGtpV1CCreatePdpRequest),
    drop_rl_gtp_v1_c_update_pdp_request: cdktf.numberToTerraform(struct!.dropRlGtpV1CUpdatePdpRequest),
    drop_rl_gtp_v2_c_agg: cdktf.numberToTerraform(struct!.dropRlGtpV2CAgg),
    drop_rl_gtp_v2_c_create_session_request: cdktf.numberToTerraform(struct!.dropRlGtpV2CCreateSessionRequest),
    drop_rl_gtp_v2_c_modify_bearer_request: cdktf.numberToTerraform(struct!.dropRlGtpV2CModifyBearerRequest),
    drop_vld_country_code_mismatch: cdktf.numberToTerraform(struct!.dropVldCountryCodeMismatch),
    drop_vld_cross_layer_correlation: cdktf.numberToTerraform(struct!.dropVldCrossLayerCorrelation),
    drop_vld_gtp_bearer_count_exceed: cdktf.numberToTerraform(struct!.dropVldGtpBearerCountExceed),
    drop_vld_gtp_invalid_apn_len_drop: cdktf.numberToTerraform(struct!.dropVldGtpInvalidApnLenDrop),
    drop_vld_gtp_invalid_imsi_len_drop: cdktf.numberToTerraform(struct!.dropVldGtpInvalidImsiLenDrop),
    drop_vld_gtp_u_spoofed_source_address: cdktf.numberToTerraform(struct!.dropVldGtpUSpoofedSourceAddress),
    drop_vld_gtp_v0_c_ie_len_exceed_msg_len: cdktf.numberToTerraform(struct!.dropVldGtpV0CIeLenExceedMsgLen),
    drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn: cdktf.numberToTerraform(struct!.dropVldGtpV0CMessageDroppedApnFilteringNoApn),
    drop_vld_gtp_v0_c_message_length_mismatch: cdktf.numberToTerraform(struct!.dropVldGtpV0CMessageLengthMismatch),
    drop_vld_gtp_v0_c_message_with_teid_zero_expected: cdktf.numberToTerraform(struct!.dropVldGtpV0CMessageWithTeidZeroExpected),
    drop_vld_gtp_v1_c_ie_len_exceed_msg_len: cdktf.numberToTerraform(struct!.dropVldGtpV1CIeLenExceedMsgLen),
    drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn: cdktf.numberToTerraform(struct!.dropVldGtpV1CMessageDroppedApnFilteringNoApn),
    drop_vld_gtp_v1_c_message_length_mismatch: cdktf.numberToTerraform(struct!.dropVldGtpV1CMessageLengthMismatch),
    drop_vld_gtp_v1_c_message_with_teid_zero_expected: cdktf.numberToTerraform(struct!.dropVldGtpV1CMessageWithTeidZeroExpected),
    drop_vld_gtp_v2_c_ie_len_exceed_msg_len: cdktf.numberToTerraform(struct!.dropVldGtpV2CIeLenExceedMsgLen),
    drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn: cdktf.numberToTerraform(struct!.dropVldGtpV2CMessageDroppedApnFilteringNoApn),
    drop_vld_gtp_v2_c_message_length_mismatch: cdktf.numberToTerraform(struct!.dropVldGtpV2CMessageLengthMismatch),
    drop_vld_gtp_v2_c_message_with_teid_zero_expected: cdktf.numberToTerraform(struct!.dropVldGtpV2CMessageWithTeidZeroExpected),
    drop_vld_gtp_v2_wrong_lbi_create_bearer_req: cdktf.numberToTerraform(struct!.dropVldGtpV2WrongLbiCreateBearerReq),
    drop_vld_gtpv0_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv0SeqnumBufferFull),
    drop_vld_gtpv0_subscriber_attr_miss: cdktf.numberToTerraform(struct!.dropVldGtpv0SubscriberAttrMiss),
    drop_vld_gtpv1_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv1SeqnumBufferFull),
    drop_vld_gtpv1_subscriber_attr_miss: cdktf.numberToTerraform(struct!.dropVldGtpv1SubscriberAttrMiss),
    drop_vld_gtpv2_seqnum_buffer_full: cdktf.numberToTerraform(struct!.dropVldGtpv2SeqnumBufferFull),
    drop_vld_gtpv2_subscriber_attr_miss: cdktf.numberToTerraform(struct!.dropVldGtpv2SubscriberAttrMiss),
    drop_vld_invalid_flow_label_v0: cdktf.numberToTerraform(struct!.dropVldInvalidFlowLabelV0),
    drop_vld_invalid_pkt_len_piggyback: cdktf.numberToTerraform(struct!.dropVldInvalidPktLenPiggyback),
    drop_vld_invalid_teid: cdktf.numberToTerraform(struct!.dropVldInvalidTeid),
    drop_vld_mandatory_information_element: cdktf.numberToTerraform(struct!.dropVldMandatoryInformationElement),
    drop_vld_message_length: cdktf.numberToTerraform(struct!.dropVldMessageLength),
    drop_vld_out_of_order_ie: cdktf.numberToTerraform(struct!.dropVldOutOfOrderIe),
    drop_vld_out_of_state: cdktf.numberToTerraform(struct!.dropVldOutOfState),
    drop_vld_out_of_state_ie: cdktf.numberToTerraform(struct!.dropVldOutOfStateIe),
    drop_vld_protocol_flag_unset: cdktf.numberToTerraform(struct!.dropVldProtocolFlagUnset),
    drop_vld_reserved_field_set: cdktf.numberToTerraform(struct!.dropVldReservedFieldSet),
    drop_vld_reserved_information_element: cdktf.numberToTerraform(struct!.dropVldReservedInformationElement),
    drop_vld_sanity_failed_piggyback: cdktf.numberToTerraform(struct!.dropVldSanityFailedPiggyback),
    drop_vld_sequence_num_correlation: cdktf.numberToTerraform(struct!.dropVldSequenceNumCorrelation),
    drop_vld_tunnel_id_flag: cdktf.numberToTerraform(struct!.dropVldTunnelIdFlag),
    drop_vld_unsupported_message_type: cdktf.numberToTerraform(struct!.dropVldUnsupportedMessageType),
    drop_vld_v0_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV0ReservedMessageDrop),
    drop_vld_v1_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV1ReservedMessageDrop),
    drop_vld_v2_reserved_message_drop: cdktf.numberToTerraform(struct!.dropVldV2ReservedMessageDrop),
    drop_vld_version_not_supported: cdktf.numberToTerraform(struct!.dropVldVersionNotSupported),
    gtp_c_handover_in_progress_with_conn: cdktf.numberToTerraform(struct!.gtpCHandoverInProgressWithConn),
    gtp_node_restart_gtp_c: cdktf.numberToTerraform(struct!.gtpNodeRestartGtpC),
    gtp_path_management_message: cdktf.numberToTerraform(struct!.gtpPathManagementMessage),
    gtp_u_tunnel_created: cdktf.numberToTerraform(struct!.gtpUTunnelCreated),
    gtp_u_tunnel_deleted: cdktf.numberToTerraform(struct!.gtpUTunnelDeleted),
    gtp_v0_c_create_pdp_resp_unsuccess: cdktf.numberToTerraform(struct!.gtpV0CCreatePdpRespUnsuccess),
    gtp_v0_c_half_open_tunnel_closed: cdktf.numberToTerraform(struct!.gtpV0CHalfOpenTunnelClosed),
    gtp_v0_c_message_skipped_apn_filtering_no_imsi: cdktf.numberToTerraform(struct!.gtpV0CMessageSkippedApnFilteringNoImsi),
    gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn: cdktf.numberToTerraform(struct!.gtpV0CMessageSkippedMsisdnFilteringNoMsisdn),
    gtp_v0_c_packet_dummy_msisdn: cdktf.numberToTerraform(struct!.gtpV0CPacketDummyMsisdn),
    gtp_v0_c_pdu_notification_reject_request_forward: cdktf.numberToTerraform(struct!.gtpV0CPduNotificationRejectRequestForward),
    gtp_v0_c_pdu_notification_request_forward: cdktf.numberToTerraform(struct!.gtpV0CPduNotificationRequestForward),
    gtp_v0_c_reserved_message_allow: cdktf.numberToTerraform(struct!.gtpV0CReservedMessageAllow),
    gtp_v0_c_tunnel_closed: cdktf.numberToTerraform(struct!.gtpV0CTunnelClosed),
    gtp_v0_c_tunnel_created: cdktf.numberToTerraform(struct!.gtpV0CTunnelCreated),
    gtp_v0_c_tunnel_deleted: cdktf.numberToTerraform(struct!.gtpV0CTunnelDeleted),
    gtp_v0_c_tunnel_deleted_restart: cdktf.numberToTerraform(struct!.gtpV0CTunnelDeletedRestart),
    gtp_v0_c_tunnel_half_closed: cdktf.numberToTerraform(struct!.gtpV0CTunnelHalfClosed),
    gtp_v0_c_tunnel_half_open: cdktf.numberToTerraform(struct!.gtpV0CTunnelHalfOpen),
    gtp_v0_c_update_pdp_resp_unsuccess: cdktf.numberToTerraform(struct!.gtpV0CUpdatePdpRespUnsuccess),
    gtp_v1_c_create_pdp_resp_unsuccess: cdktf.numberToTerraform(struct!.gtpV1CCreatePdpRespUnsuccess),
    gtp_v1_c_half_open_tunnel_closed: cdktf.numberToTerraform(struct!.gtpV1CHalfOpenTunnelClosed),
    gtp_v1_c_message_skipped_apn_filtering_no_imsi: cdktf.numberToTerraform(struct!.gtpV1CMessageSkippedApnFilteringNoImsi),
    gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn: cdktf.numberToTerraform(struct!.gtpV1CMessageSkippedMsisdnFilteringNoMsisdn),
    gtp_v1_c_packet_dummy_msisdn: cdktf.numberToTerraform(struct!.gtpV1CPacketDummyMsisdn),
    gtp_v1_c_pdu_notification_reject_request_forward: cdktf.numberToTerraform(struct!.gtpV1CPduNotificationRejectRequestForward),
    gtp_v1_c_pdu_notification_request_forward: cdktf.numberToTerraform(struct!.gtpV1CPduNotificationRequestForward),
    gtp_v1_c_reserved_message_allow: cdktf.numberToTerraform(struct!.gtpV1CReservedMessageAllow),
    gtp_v1_c_tunnel_closed: cdktf.numberToTerraform(struct!.gtpV1CTunnelClosed),
    gtp_v1_c_tunnel_created: cdktf.numberToTerraform(struct!.gtpV1CTunnelCreated),
    gtp_v1_c_tunnel_deleted: cdktf.numberToTerraform(struct!.gtpV1CTunnelDeleted),
    gtp_v1_c_tunnel_deleted_restart: cdktf.numberToTerraform(struct!.gtpV1CTunnelDeletedRestart),
    gtp_v1_c_tunnel_half_closed: cdktf.numberToTerraform(struct!.gtpV1CTunnelHalfClosed),
    gtp_v1_c_tunnel_half_open: cdktf.numberToTerraform(struct!.gtpV1CTunnelHalfOpen),
    gtp_v1_c_update_pdp_resp_unsuccess: cdktf.numberToTerraform(struct!.gtpV1CUpdatePdpRespUnsuccess),
    gtp_v2_c_create_sess_resp_unsuccess: cdktf.numberToTerraform(struct!.gtpV2CCreateSessRespUnsuccess),
    gtp_v2_c_half_open_tunnel_closed: cdktf.numberToTerraform(struct!.gtpV2CHalfOpenTunnelClosed),
    gtp_v2_c_message_skipped_apn_filtering_no_imsi: cdktf.numberToTerraform(struct!.gtpV2CMessageSkippedApnFilteringNoImsi),
    gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn: cdktf.numberToTerraform(struct!.gtpV2CMessageSkippedMsisdnFilteringNoMsisdn),
    gtp_v2_c_mod_bearer_resp_unsuccess: cdktf.numberToTerraform(struct!.gtpV2CModBearerRespUnsuccess),
    gtp_v2_c_packet_dummy_msisdn: cdktf.numberToTerraform(struct!.gtpV2CPacketDummyMsisdn),
    gtp_v2_c_piggyback_message: cdktf.numberToTerraform(struct!.gtpV2CPiggybackMessage),
    gtp_v2_c_reserved_message_allow: cdktf.numberToTerraform(struct!.gtpV2CReservedMessageAllow),
    gtp_v2_c_tunnel_closed: cdktf.numberToTerraform(struct!.gtpV2CTunnelClosed),
    gtp_v2_c_tunnel_created: cdktf.numberToTerraform(struct!.gtpV2CTunnelCreated),
    gtp_v2_c_tunnel_deleted: cdktf.numberToTerraform(struct!.gtpV2CTunnelDeleted),
    gtp_v2_c_tunnel_deleted_restart: cdktf.numberToTerraform(struct!.gtpV2CTunnelDeletedRestart),
    gtp_v2_c_tunnel_half_closed: cdktf.numberToTerraform(struct!.gtpV2CTunnelHalfClosed),
    gtp_v2_c_tunnel_half_open: cdktf.numberToTerraform(struct!.gtpV2CTunnelHalfOpen),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    uplink_bytes: cdktf.numberToTerraform(struct!.uplinkBytes),
    uplink_pkts: cdktf.numberToTerraform(struct!.uplinkPkts),
  }
}


export function dataThunderFwGtpStatsNetworkElementStatsToHclTerraform(struct?: DataThunderFwGtpStatsNetworkElementStatsOutputReference | DataThunderFwGtpStatsNetworkElementStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    downlink_bytes: {
      value: cdktf.numberToHclTerraform(struct!.downlinkBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    downlink_pkts: {
      value: cdktf.numberToHclTerraform(struct!.downlinkPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_flt_apn_filtering: {
      value: cdktf.numberToHclTerraform(struct!.dropFltApnFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_flt_gtp_in_gtp: {
      value: cdktf.numberToHclTerraform(struct!.dropFltGtpInGtp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_flt_message_filtering: {
      value: cdktf.numberToHclTerraform(struct!.dropFltMessageFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_flt_msisdn_filtering: {
      value: cdktf.numberToHclTerraform(struct!.dropFltMsisdnFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_flt_rat_type_filtering: {
      value: cdktf.numberToHclTerraform(struct!.dropFltRatTypeFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_downlink_byte: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUDownlinkByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_downlink_packet: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUDownlinkPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_max_concurrent_tunnels: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUMaxConcurrentTunnels),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_total_byte: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUTotalByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_total_packet: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUTotalPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_tunnel_create: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUTunnelCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_uplink_byte: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUUplinkByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_u_uplink_packet: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpUUplinkPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v0_c_agg: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV0CAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v1_c_agg: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV1CAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v1_c_create_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV1CCreatePdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v1_c_update_pdp_request: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV1CUpdatePdpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v2_c_agg: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV2CAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v2_c_create_session_request: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV2CCreateSessionRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_rl_gtp_v2_c_modify_bearer_request: {
      value: cdktf.numberToHclTerraform(struct!.dropRlGtpV2CModifyBearerRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_country_code_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dropVldCountryCodeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_cross_layer_correlation: {
      value: cdktf.numberToHclTerraform(struct!.dropVldCrossLayerCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_bearer_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpBearerCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_invalid_apn_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpInvalidApnLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_invalid_imsi_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpInvalidImsiLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_u_spoofed_source_address: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpUSpoofedSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v0_c_ie_len_exceed_msg_len: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV0CIeLenExceedMsgLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV0CMessageDroppedApnFilteringNoApn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v0_c_message_length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV0CMessageLengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v0_c_message_with_teid_zero_expected: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV0CMessageWithTeidZeroExpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v1_c_ie_len_exceed_msg_len: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV1CIeLenExceedMsgLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV1CMessageDroppedApnFilteringNoApn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v1_c_message_length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV1CMessageLengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v1_c_message_with_teid_zero_expected: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV1CMessageWithTeidZeroExpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_c_ie_len_exceed_msg_len: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2CIeLenExceedMsgLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2CMessageDroppedApnFilteringNoApn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_c_message_length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2CMessageLengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_c_message_with_teid_zero_expected: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2CMessageWithTeidZeroExpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_v2_wrong_lbi_create_bearer_req: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpV2WrongLbiCreateBearerReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv0_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv0SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv0_subscriber_attr_miss: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv0SubscriberAttrMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv1_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv1SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv1_subscriber_attr_miss: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv1SubscriberAttrMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv2_seqnum_buffer_full: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv2SeqnumBufferFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtpv2_subscriber_attr_miss: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpv2SubscriberAttrMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_flow_label_v0: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidFlowLabelV0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_pkt_len_piggyback: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidPktLenPiggyback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_invalid_teid: {
      value: cdktf.numberToHclTerraform(struct!.dropVldInvalidTeid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_mandatory_information_element: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMandatoryInformationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_message_length: {
      value: cdktf.numberToHclTerraform(struct!.dropVldMessageLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_order_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfOrderIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_state: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_out_of_state_ie: {
      value: cdktf.numberToHclTerraform(struct!.dropVldOutOfStateIe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_protocol_flag_unset: {
      value: cdktf.numberToHclTerraform(struct!.dropVldProtocolFlagUnset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_reserved_field_set: {
      value: cdktf.numberToHclTerraform(struct!.dropVldReservedFieldSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_reserved_information_element: {
      value: cdktf.numberToHclTerraform(struct!.dropVldReservedInformationElement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_sanity_failed_piggyback: {
      value: cdktf.numberToHclTerraform(struct!.dropVldSanityFailedPiggyback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_sequence_num_correlation: {
      value: cdktf.numberToHclTerraform(struct!.dropVldSequenceNumCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_tunnel_id_flag: {
      value: cdktf.numberToHclTerraform(struct!.dropVldTunnelIdFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_unsupported_message_type: {
      value: cdktf.numberToHclTerraform(struct!.dropVldUnsupportedMessageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v0_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV0ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v1_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV1ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_v2_reserved_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.dropVldV2ReservedMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_version_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.dropVldVersionNotSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_handover_in_progress_with_conn: {
      value: cdktf.numberToHclTerraform(struct!.gtpCHandoverInProgressWithConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_node_restart_gtp_c: {
      value: cdktf.numberToHclTerraform(struct!.gtpNodeRestartGtpC),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_path_management_message: {
      value: cdktf.numberToHclTerraform(struct!.gtpPathManagementMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_tunnel_created: {
      value: cdktf.numberToHclTerraform(struct!.gtpUTunnelCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_tunnel_deleted: {
      value: cdktf.numberToHclTerraform(struct!.gtpUTunnelDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_create_pdp_resp_unsuccess: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CCreatePdpRespUnsuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_half_open_tunnel_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CHalfOpenTunnelClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_message_skipped_apn_filtering_no_imsi: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CMessageSkippedApnFilteringNoImsi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CMessageSkippedMsisdnFilteringNoMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_packet_dummy_msisdn: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CPacketDummyMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_pdu_notification_reject_request_forward: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CPduNotificationRejectRequestForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_pdu_notification_request_forward: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CPduNotificationRequestForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_reserved_message_allow: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CReservedMessageAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_tunnel_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CTunnelClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_tunnel_created: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CTunnelCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_tunnel_deleted: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CTunnelDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_tunnel_deleted_restart: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CTunnelDeletedRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_tunnel_half_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CTunnelHalfClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_tunnel_half_open: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CTunnelHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_update_pdp_resp_unsuccess: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CUpdatePdpRespUnsuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_create_pdp_resp_unsuccess: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CCreatePdpRespUnsuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_half_open_tunnel_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CHalfOpenTunnelClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_message_skipped_apn_filtering_no_imsi: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CMessageSkippedApnFilteringNoImsi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CMessageSkippedMsisdnFilteringNoMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_packet_dummy_msisdn: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CPacketDummyMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_pdu_notification_reject_request_forward: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CPduNotificationRejectRequestForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_pdu_notification_request_forward: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CPduNotificationRequestForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_reserved_message_allow: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CReservedMessageAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_tunnel_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CTunnelClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_tunnel_created: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CTunnelCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_tunnel_deleted: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CTunnelDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_tunnel_deleted_restart: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CTunnelDeletedRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_tunnel_half_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CTunnelHalfClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_tunnel_half_open: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CTunnelHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_update_pdp_resp_unsuccess: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CUpdatePdpRespUnsuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_create_sess_resp_unsuccess: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CCreateSessRespUnsuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_half_open_tunnel_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CHalfOpenTunnelClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_message_skipped_apn_filtering_no_imsi: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CMessageSkippedApnFilteringNoImsi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CMessageSkippedMsisdnFilteringNoMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_mod_bearer_resp_unsuccess: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CModBearerRespUnsuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_packet_dummy_msisdn: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CPacketDummyMsisdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_piggyback_message: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CPiggybackMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_reserved_message_allow: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CReservedMessageAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_tunnel_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CTunnelClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_tunnel_created: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CTunnelCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_tunnel_deleted: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CTunnelDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_tunnel_deleted_restart: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CTunnelDeletedRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_tunnel_half_closed: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CTunnelHalfClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_tunnel_half_open: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CTunnelHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink_bytes: {
      value: cdktf.numberToHclTerraform(struct!.uplinkBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uplink_pkts: {
      value: cdktf.numberToHclTerraform(struct!.uplinkPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwGtpStatsNetworkElementStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwGtpStatsNetworkElementStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downlinkBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlinkBytes = this._downlinkBytes;
    }
    if (this._downlinkPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlinkPkts = this._downlinkPkts;
    }
    if (this._dropFltApnFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFltApnFiltering = this._dropFltApnFiltering;
    }
    if (this._dropFltGtpInGtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFltGtpInGtp = this._dropFltGtpInGtp;
    }
    if (this._dropFltMessageFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFltMessageFiltering = this._dropFltMessageFiltering;
    }
    if (this._dropFltMsisdnFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFltMsisdnFiltering = this._dropFltMsisdnFiltering;
    }
    if (this._dropFltRatTypeFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFltRatTypeFiltering = this._dropFltRatTypeFiltering;
    }
    if (this._dropRlGtpUDownlinkByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUDownlinkByte = this._dropRlGtpUDownlinkByte;
    }
    if (this._dropRlGtpUDownlinkPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUDownlinkPacket = this._dropRlGtpUDownlinkPacket;
    }
    if (this._dropRlGtpUMaxConcurrentTunnels !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUMaxConcurrentTunnels = this._dropRlGtpUMaxConcurrentTunnels;
    }
    if (this._dropRlGtpUTotalByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUTotalByte = this._dropRlGtpUTotalByte;
    }
    if (this._dropRlGtpUTotalPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUTotalPacket = this._dropRlGtpUTotalPacket;
    }
    if (this._dropRlGtpUTunnelCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUTunnelCreate = this._dropRlGtpUTunnelCreate;
    }
    if (this._dropRlGtpUUplinkByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUUplinkByte = this._dropRlGtpUUplinkByte;
    }
    if (this._dropRlGtpUUplinkPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpUUplinkPacket = this._dropRlGtpUUplinkPacket;
    }
    if (this._dropRlGtpV0CAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV0CAgg = this._dropRlGtpV0CAgg;
    }
    if (this._dropRlGtpV1CAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV1CAgg = this._dropRlGtpV1CAgg;
    }
    if (this._dropRlGtpV1CCreatePdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV1CCreatePdpRequest = this._dropRlGtpV1CCreatePdpRequest;
    }
    if (this._dropRlGtpV1CUpdatePdpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV1CUpdatePdpRequest = this._dropRlGtpV1CUpdatePdpRequest;
    }
    if (this._dropRlGtpV2CAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV2CAgg = this._dropRlGtpV2CAgg;
    }
    if (this._dropRlGtpV2CCreateSessionRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV2CCreateSessionRequest = this._dropRlGtpV2CCreateSessionRequest;
    }
    if (this._dropRlGtpV2CModifyBearerRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRlGtpV2CModifyBearerRequest = this._dropRlGtpV2CModifyBearerRequest;
    }
    if (this._dropVldCountryCodeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldCountryCodeMismatch = this._dropVldCountryCodeMismatch;
    }
    if (this._dropVldCrossLayerCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldCrossLayerCorrelation = this._dropVldCrossLayerCorrelation;
    }
    if (this._dropVldGtpBearerCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpBearerCountExceed = this._dropVldGtpBearerCountExceed;
    }
    if (this._dropVldGtpInvalidApnLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpInvalidApnLenDrop = this._dropVldGtpInvalidApnLenDrop;
    }
    if (this._dropVldGtpInvalidImsiLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpInvalidImsiLenDrop = this._dropVldGtpInvalidImsiLenDrop;
    }
    if (this._dropVldGtpUSpoofedSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpUSpoofedSourceAddress = this._dropVldGtpUSpoofedSourceAddress;
    }
    if (this._dropVldGtpV0CIeLenExceedMsgLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV0CIeLenExceedMsgLen = this._dropVldGtpV0CIeLenExceedMsgLen;
    }
    if (this._dropVldGtpV0CMessageDroppedApnFilteringNoApn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV0CMessageDroppedApnFilteringNoApn = this._dropVldGtpV0CMessageDroppedApnFilteringNoApn;
    }
    if (this._dropVldGtpV0CMessageLengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV0CMessageLengthMismatch = this._dropVldGtpV0CMessageLengthMismatch;
    }
    if (this._dropVldGtpV0CMessageWithTeidZeroExpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV0CMessageWithTeidZeroExpected = this._dropVldGtpV0CMessageWithTeidZeroExpected;
    }
    if (this._dropVldGtpV1CIeLenExceedMsgLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV1CIeLenExceedMsgLen = this._dropVldGtpV1CIeLenExceedMsgLen;
    }
    if (this._dropVldGtpV1CMessageDroppedApnFilteringNoApn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV1CMessageDroppedApnFilteringNoApn = this._dropVldGtpV1CMessageDroppedApnFilteringNoApn;
    }
    if (this._dropVldGtpV1CMessageLengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV1CMessageLengthMismatch = this._dropVldGtpV1CMessageLengthMismatch;
    }
    if (this._dropVldGtpV1CMessageWithTeidZeroExpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV1CMessageWithTeidZeroExpected = this._dropVldGtpV1CMessageWithTeidZeroExpected;
    }
    if (this._dropVldGtpV2CIeLenExceedMsgLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2CIeLenExceedMsgLen = this._dropVldGtpV2CIeLenExceedMsgLen;
    }
    if (this._dropVldGtpV2CMessageDroppedApnFilteringNoApn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2CMessageDroppedApnFilteringNoApn = this._dropVldGtpV2CMessageDroppedApnFilteringNoApn;
    }
    if (this._dropVldGtpV2CMessageLengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2CMessageLengthMismatch = this._dropVldGtpV2CMessageLengthMismatch;
    }
    if (this._dropVldGtpV2CMessageWithTeidZeroExpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2CMessageWithTeidZeroExpected = this._dropVldGtpV2CMessageWithTeidZeroExpected;
    }
    if (this._dropVldGtpV2WrongLbiCreateBearerReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpV2WrongLbiCreateBearerReq = this._dropVldGtpV2WrongLbiCreateBearerReq;
    }
    if (this._dropVldGtpv0SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv0SeqnumBufferFull = this._dropVldGtpv0SeqnumBufferFull;
    }
    if (this._dropVldGtpv0SubscriberAttrMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv0SubscriberAttrMiss = this._dropVldGtpv0SubscriberAttrMiss;
    }
    if (this._dropVldGtpv1SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv1SeqnumBufferFull = this._dropVldGtpv1SeqnumBufferFull;
    }
    if (this._dropVldGtpv1SubscriberAttrMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv1SubscriberAttrMiss = this._dropVldGtpv1SubscriberAttrMiss;
    }
    if (this._dropVldGtpv2SeqnumBufferFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv2SeqnumBufferFull = this._dropVldGtpv2SeqnumBufferFull;
    }
    if (this._dropVldGtpv2SubscriberAttrMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpv2SubscriberAttrMiss = this._dropVldGtpv2SubscriberAttrMiss;
    }
    if (this._dropVldInvalidFlowLabelV0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidFlowLabelV0 = this._dropVldInvalidFlowLabelV0;
    }
    if (this._dropVldInvalidPktLenPiggyback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidPktLenPiggyback = this._dropVldInvalidPktLenPiggyback;
    }
    if (this._dropVldInvalidTeid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldInvalidTeid = this._dropVldInvalidTeid;
    }
    if (this._dropVldMandatoryInformationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMandatoryInformationElement = this._dropVldMandatoryInformationElement;
    }
    if (this._dropVldMessageLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldMessageLength = this._dropVldMessageLength;
    }
    if (this._dropVldOutOfOrderIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfOrderIe = this._dropVldOutOfOrderIe;
    }
    if (this._dropVldOutOfState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfState = this._dropVldOutOfState;
    }
    if (this._dropVldOutOfStateIe !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldOutOfStateIe = this._dropVldOutOfStateIe;
    }
    if (this._dropVldProtocolFlagUnset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldProtocolFlagUnset = this._dropVldProtocolFlagUnset;
    }
    if (this._dropVldReservedFieldSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldReservedFieldSet = this._dropVldReservedFieldSet;
    }
    if (this._dropVldReservedInformationElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldReservedInformationElement = this._dropVldReservedInformationElement;
    }
    if (this._dropVldSanityFailedPiggyback !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldSanityFailedPiggyback = this._dropVldSanityFailedPiggyback;
    }
    if (this._dropVldSequenceNumCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldSequenceNumCorrelation = this._dropVldSequenceNumCorrelation;
    }
    if (this._dropVldTunnelIdFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldTunnelIdFlag = this._dropVldTunnelIdFlag;
    }
    if (this._dropVldUnsupportedMessageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldUnsupportedMessageType = this._dropVldUnsupportedMessageType;
    }
    if (this._dropVldV0ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV0ReservedMessageDrop = this._dropVldV0ReservedMessageDrop;
    }
    if (this._dropVldV1ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV1ReservedMessageDrop = this._dropVldV1ReservedMessageDrop;
    }
    if (this._dropVldV2ReservedMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldV2ReservedMessageDrop = this._dropVldV2ReservedMessageDrop;
    }
    if (this._dropVldVersionNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldVersionNotSupported = this._dropVldVersionNotSupported;
    }
    if (this._gtpCHandoverInProgressWithConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCHandoverInProgressWithConn = this._gtpCHandoverInProgressWithConn;
    }
    if (this._gtpNodeRestartGtpC !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpNodeRestartGtpC = this._gtpNodeRestartGtpC;
    }
    if (this._gtpPathManagementMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpPathManagementMessage = this._gtpPathManagementMessage;
    }
    if (this._gtpUTunnelCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUTunnelCreated = this._gtpUTunnelCreated;
    }
    if (this._gtpUTunnelDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUTunnelDeleted = this._gtpUTunnelDeleted;
    }
    if (this._gtpV0CCreatePdpRespUnsuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CCreatePdpRespUnsuccess = this._gtpV0CCreatePdpRespUnsuccess;
    }
    if (this._gtpV0CHalfOpenTunnelClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CHalfOpenTunnelClosed = this._gtpV0CHalfOpenTunnelClosed;
    }
    if (this._gtpV0CMessageSkippedApnFilteringNoImsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CMessageSkippedApnFilteringNoImsi = this._gtpV0CMessageSkippedApnFilteringNoImsi;
    }
    if (this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CMessageSkippedMsisdnFilteringNoMsisdn = this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn;
    }
    if (this._gtpV0CPacketDummyMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CPacketDummyMsisdn = this._gtpV0CPacketDummyMsisdn;
    }
    if (this._gtpV0CPduNotificationRejectRequestForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CPduNotificationRejectRequestForward = this._gtpV0CPduNotificationRejectRequestForward;
    }
    if (this._gtpV0CPduNotificationRequestForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CPduNotificationRequestForward = this._gtpV0CPduNotificationRequestForward;
    }
    if (this._gtpV0CReservedMessageAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CReservedMessageAllow = this._gtpV0CReservedMessageAllow;
    }
    if (this._gtpV0CTunnelClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CTunnelClosed = this._gtpV0CTunnelClosed;
    }
    if (this._gtpV0CTunnelCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CTunnelCreated = this._gtpV0CTunnelCreated;
    }
    if (this._gtpV0CTunnelDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CTunnelDeleted = this._gtpV0CTunnelDeleted;
    }
    if (this._gtpV0CTunnelDeletedRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CTunnelDeletedRestart = this._gtpV0CTunnelDeletedRestart;
    }
    if (this._gtpV0CTunnelHalfClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CTunnelHalfClosed = this._gtpV0CTunnelHalfClosed;
    }
    if (this._gtpV0CTunnelHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CTunnelHalfOpen = this._gtpV0CTunnelHalfOpen;
    }
    if (this._gtpV0CUpdatePdpRespUnsuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CUpdatePdpRespUnsuccess = this._gtpV0CUpdatePdpRespUnsuccess;
    }
    if (this._gtpV1CCreatePdpRespUnsuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CCreatePdpRespUnsuccess = this._gtpV1CCreatePdpRespUnsuccess;
    }
    if (this._gtpV1CHalfOpenTunnelClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CHalfOpenTunnelClosed = this._gtpV1CHalfOpenTunnelClosed;
    }
    if (this._gtpV1CMessageSkippedApnFilteringNoImsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CMessageSkippedApnFilteringNoImsi = this._gtpV1CMessageSkippedApnFilteringNoImsi;
    }
    if (this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CMessageSkippedMsisdnFilteringNoMsisdn = this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn;
    }
    if (this._gtpV1CPacketDummyMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CPacketDummyMsisdn = this._gtpV1CPacketDummyMsisdn;
    }
    if (this._gtpV1CPduNotificationRejectRequestForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CPduNotificationRejectRequestForward = this._gtpV1CPduNotificationRejectRequestForward;
    }
    if (this._gtpV1CPduNotificationRequestForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CPduNotificationRequestForward = this._gtpV1CPduNotificationRequestForward;
    }
    if (this._gtpV1CReservedMessageAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CReservedMessageAllow = this._gtpV1CReservedMessageAllow;
    }
    if (this._gtpV1CTunnelClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CTunnelClosed = this._gtpV1CTunnelClosed;
    }
    if (this._gtpV1CTunnelCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CTunnelCreated = this._gtpV1CTunnelCreated;
    }
    if (this._gtpV1CTunnelDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CTunnelDeleted = this._gtpV1CTunnelDeleted;
    }
    if (this._gtpV1CTunnelDeletedRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CTunnelDeletedRestart = this._gtpV1CTunnelDeletedRestart;
    }
    if (this._gtpV1CTunnelHalfClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CTunnelHalfClosed = this._gtpV1CTunnelHalfClosed;
    }
    if (this._gtpV1CTunnelHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CTunnelHalfOpen = this._gtpV1CTunnelHalfOpen;
    }
    if (this._gtpV1CUpdatePdpRespUnsuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CUpdatePdpRespUnsuccess = this._gtpV1CUpdatePdpRespUnsuccess;
    }
    if (this._gtpV2CCreateSessRespUnsuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CCreateSessRespUnsuccess = this._gtpV2CCreateSessRespUnsuccess;
    }
    if (this._gtpV2CHalfOpenTunnelClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CHalfOpenTunnelClosed = this._gtpV2CHalfOpenTunnelClosed;
    }
    if (this._gtpV2CMessageSkippedApnFilteringNoImsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CMessageSkippedApnFilteringNoImsi = this._gtpV2CMessageSkippedApnFilteringNoImsi;
    }
    if (this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CMessageSkippedMsisdnFilteringNoMsisdn = this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn;
    }
    if (this._gtpV2CModBearerRespUnsuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CModBearerRespUnsuccess = this._gtpV2CModBearerRespUnsuccess;
    }
    if (this._gtpV2CPacketDummyMsisdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CPacketDummyMsisdn = this._gtpV2CPacketDummyMsisdn;
    }
    if (this._gtpV2CPiggybackMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CPiggybackMessage = this._gtpV2CPiggybackMessage;
    }
    if (this._gtpV2CReservedMessageAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CReservedMessageAllow = this._gtpV2CReservedMessageAllow;
    }
    if (this._gtpV2CTunnelClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CTunnelClosed = this._gtpV2CTunnelClosed;
    }
    if (this._gtpV2CTunnelCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CTunnelCreated = this._gtpV2CTunnelCreated;
    }
    if (this._gtpV2CTunnelDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CTunnelDeleted = this._gtpV2CTunnelDeleted;
    }
    if (this._gtpV2CTunnelDeletedRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CTunnelDeletedRestart = this._gtpV2CTunnelDeletedRestart;
    }
    if (this._gtpV2CTunnelHalfClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CTunnelHalfClosed = this._gtpV2CTunnelHalfClosed;
    }
    if (this._gtpV2CTunnelHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CTunnelHalfOpen = this._gtpV2CTunnelHalfOpen;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._uplinkBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkBytes = this._uplinkBytes;
    }
    if (this._uplinkPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkPkts = this._uplinkPkts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwGtpStatsNetworkElementStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._downlinkBytes = undefined;
      this._downlinkPkts = undefined;
      this._dropFltApnFiltering = undefined;
      this._dropFltGtpInGtp = undefined;
      this._dropFltMessageFiltering = undefined;
      this._dropFltMsisdnFiltering = undefined;
      this._dropFltRatTypeFiltering = undefined;
      this._dropRlGtpUDownlinkByte = undefined;
      this._dropRlGtpUDownlinkPacket = undefined;
      this._dropRlGtpUMaxConcurrentTunnels = undefined;
      this._dropRlGtpUTotalByte = undefined;
      this._dropRlGtpUTotalPacket = undefined;
      this._dropRlGtpUTunnelCreate = undefined;
      this._dropRlGtpUUplinkByte = undefined;
      this._dropRlGtpUUplinkPacket = undefined;
      this._dropRlGtpV0CAgg = undefined;
      this._dropRlGtpV1CAgg = undefined;
      this._dropRlGtpV1CCreatePdpRequest = undefined;
      this._dropRlGtpV1CUpdatePdpRequest = undefined;
      this._dropRlGtpV2CAgg = undefined;
      this._dropRlGtpV2CCreateSessionRequest = undefined;
      this._dropRlGtpV2CModifyBearerRequest = undefined;
      this._dropVldCountryCodeMismatch = undefined;
      this._dropVldCrossLayerCorrelation = undefined;
      this._dropVldGtpBearerCountExceed = undefined;
      this._dropVldGtpInvalidApnLenDrop = undefined;
      this._dropVldGtpInvalidImsiLenDrop = undefined;
      this._dropVldGtpUSpoofedSourceAddress = undefined;
      this._dropVldGtpV0CIeLenExceedMsgLen = undefined;
      this._dropVldGtpV0CMessageDroppedApnFilteringNoApn = undefined;
      this._dropVldGtpV0CMessageLengthMismatch = undefined;
      this._dropVldGtpV0CMessageWithTeidZeroExpected = undefined;
      this._dropVldGtpV1CIeLenExceedMsgLen = undefined;
      this._dropVldGtpV1CMessageDroppedApnFilteringNoApn = undefined;
      this._dropVldGtpV1CMessageLengthMismatch = undefined;
      this._dropVldGtpV1CMessageWithTeidZeroExpected = undefined;
      this._dropVldGtpV2CIeLenExceedMsgLen = undefined;
      this._dropVldGtpV2CMessageDroppedApnFilteringNoApn = undefined;
      this._dropVldGtpV2CMessageLengthMismatch = undefined;
      this._dropVldGtpV2CMessageWithTeidZeroExpected = undefined;
      this._dropVldGtpV2WrongLbiCreateBearerReq = undefined;
      this._dropVldGtpv0SeqnumBufferFull = undefined;
      this._dropVldGtpv0SubscriberAttrMiss = undefined;
      this._dropVldGtpv1SeqnumBufferFull = undefined;
      this._dropVldGtpv1SubscriberAttrMiss = undefined;
      this._dropVldGtpv2SeqnumBufferFull = undefined;
      this._dropVldGtpv2SubscriberAttrMiss = undefined;
      this._dropVldInvalidFlowLabelV0 = undefined;
      this._dropVldInvalidPktLenPiggyback = undefined;
      this._dropVldInvalidTeid = undefined;
      this._dropVldMandatoryInformationElement = undefined;
      this._dropVldMessageLength = undefined;
      this._dropVldOutOfOrderIe = undefined;
      this._dropVldOutOfState = undefined;
      this._dropVldOutOfStateIe = undefined;
      this._dropVldProtocolFlagUnset = undefined;
      this._dropVldReservedFieldSet = undefined;
      this._dropVldReservedInformationElement = undefined;
      this._dropVldSanityFailedPiggyback = undefined;
      this._dropVldSequenceNumCorrelation = undefined;
      this._dropVldTunnelIdFlag = undefined;
      this._dropVldUnsupportedMessageType = undefined;
      this._dropVldV0ReservedMessageDrop = undefined;
      this._dropVldV1ReservedMessageDrop = undefined;
      this._dropVldV2ReservedMessageDrop = undefined;
      this._dropVldVersionNotSupported = undefined;
      this._gtpCHandoverInProgressWithConn = undefined;
      this._gtpNodeRestartGtpC = undefined;
      this._gtpPathManagementMessage = undefined;
      this._gtpUTunnelCreated = undefined;
      this._gtpUTunnelDeleted = undefined;
      this._gtpV0CCreatePdpRespUnsuccess = undefined;
      this._gtpV0CHalfOpenTunnelClosed = undefined;
      this._gtpV0CMessageSkippedApnFilteringNoImsi = undefined;
      this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn = undefined;
      this._gtpV0CPacketDummyMsisdn = undefined;
      this._gtpV0CPduNotificationRejectRequestForward = undefined;
      this._gtpV0CPduNotificationRequestForward = undefined;
      this._gtpV0CReservedMessageAllow = undefined;
      this._gtpV0CTunnelClosed = undefined;
      this._gtpV0CTunnelCreated = undefined;
      this._gtpV0CTunnelDeleted = undefined;
      this._gtpV0CTunnelDeletedRestart = undefined;
      this._gtpV0CTunnelHalfClosed = undefined;
      this._gtpV0CTunnelHalfOpen = undefined;
      this._gtpV0CUpdatePdpRespUnsuccess = undefined;
      this._gtpV1CCreatePdpRespUnsuccess = undefined;
      this._gtpV1CHalfOpenTunnelClosed = undefined;
      this._gtpV1CMessageSkippedApnFilteringNoImsi = undefined;
      this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn = undefined;
      this._gtpV1CPacketDummyMsisdn = undefined;
      this._gtpV1CPduNotificationRejectRequestForward = undefined;
      this._gtpV1CPduNotificationRequestForward = undefined;
      this._gtpV1CReservedMessageAllow = undefined;
      this._gtpV1CTunnelClosed = undefined;
      this._gtpV1CTunnelCreated = undefined;
      this._gtpV1CTunnelDeleted = undefined;
      this._gtpV1CTunnelDeletedRestart = undefined;
      this._gtpV1CTunnelHalfClosed = undefined;
      this._gtpV1CTunnelHalfOpen = undefined;
      this._gtpV1CUpdatePdpRespUnsuccess = undefined;
      this._gtpV2CCreateSessRespUnsuccess = undefined;
      this._gtpV2CHalfOpenTunnelClosed = undefined;
      this._gtpV2CMessageSkippedApnFilteringNoImsi = undefined;
      this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn = undefined;
      this._gtpV2CModBearerRespUnsuccess = undefined;
      this._gtpV2CPacketDummyMsisdn = undefined;
      this._gtpV2CPiggybackMessage = undefined;
      this._gtpV2CReservedMessageAllow = undefined;
      this._gtpV2CTunnelClosed = undefined;
      this._gtpV2CTunnelCreated = undefined;
      this._gtpV2CTunnelDeleted = undefined;
      this._gtpV2CTunnelDeletedRestart = undefined;
      this._gtpV2CTunnelHalfClosed = undefined;
      this._gtpV2CTunnelHalfOpen = undefined;
      this._keyName = undefined;
      this._keyType = undefined;
      this._uplinkBytes = undefined;
      this._uplinkPkts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._downlinkBytes = value.downlinkBytes;
      this._downlinkPkts = value.downlinkPkts;
      this._dropFltApnFiltering = value.dropFltApnFiltering;
      this._dropFltGtpInGtp = value.dropFltGtpInGtp;
      this._dropFltMessageFiltering = value.dropFltMessageFiltering;
      this._dropFltMsisdnFiltering = value.dropFltMsisdnFiltering;
      this._dropFltRatTypeFiltering = value.dropFltRatTypeFiltering;
      this._dropRlGtpUDownlinkByte = value.dropRlGtpUDownlinkByte;
      this._dropRlGtpUDownlinkPacket = value.dropRlGtpUDownlinkPacket;
      this._dropRlGtpUMaxConcurrentTunnels = value.dropRlGtpUMaxConcurrentTunnels;
      this._dropRlGtpUTotalByte = value.dropRlGtpUTotalByte;
      this._dropRlGtpUTotalPacket = value.dropRlGtpUTotalPacket;
      this._dropRlGtpUTunnelCreate = value.dropRlGtpUTunnelCreate;
      this._dropRlGtpUUplinkByte = value.dropRlGtpUUplinkByte;
      this._dropRlGtpUUplinkPacket = value.dropRlGtpUUplinkPacket;
      this._dropRlGtpV0CAgg = value.dropRlGtpV0CAgg;
      this._dropRlGtpV1CAgg = value.dropRlGtpV1CAgg;
      this._dropRlGtpV1CCreatePdpRequest = value.dropRlGtpV1CCreatePdpRequest;
      this._dropRlGtpV1CUpdatePdpRequest = value.dropRlGtpV1CUpdatePdpRequest;
      this._dropRlGtpV2CAgg = value.dropRlGtpV2CAgg;
      this._dropRlGtpV2CCreateSessionRequest = value.dropRlGtpV2CCreateSessionRequest;
      this._dropRlGtpV2CModifyBearerRequest = value.dropRlGtpV2CModifyBearerRequest;
      this._dropVldCountryCodeMismatch = value.dropVldCountryCodeMismatch;
      this._dropVldCrossLayerCorrelation = value.dropVldCrossLayerCorrelation;
      this._dropVldGtpBearerCountExceed = value.dropVldGtpBearerCountExceed;
      this._dropVldGtpInvalidApnLenDrop = value.dropVldGtpInvalidApnLenDrop;
      this._dropVldGtpInvalidImsiLenDrop = value.dropVldGtpInvalidImsiLenDrop;
      this._dropVldGtpUSpoofedSourceAddress = value.dropVldGtpUSpoofedSourceAddress;
      this._dropVldGtpV0CIeLenExceedMsgLen = value.dropVldGtpV0CIeLenExceedMsgLen;
      this._dropVldGtpV0CMessageDroppedApnFilteringNoApn = value.dropVldGtpV0CMessageDroppedApnFilteringNoApn;
      this._dropVldGtpV0CMessageLengthMismatch = value.dropVldGtpV0CMessageLengthMismatch;
      this._dropVldGtpV0CMessageWithTeidZeroExpected = value.dropVldGtpV0CMessageWithTeidZeroExpected;
      this._dropVldGtpV1CIeLenExceedMsgLen = value.dropVldGtpV1CIeLenExceedMsgLen;
      this._dropVldGtpV1CMessageDroppedApnFilteringNoApn = value.dropVldGtpV1CMessageDroppedApnFilteringNoApn;
      this._dropVldGtpV1CMessageLengthMismatch = value.dropVldGtpV1CMessageLengthMismatch;
      this._dropVldGtpV1CMessageWithTeidZeroExpected = value.dropVldGtpV1CMessageWithTeidZeroExpected;
      this._dropVldGtpV2CIeLenExceedMsgLen = value.dropVldGtpV2CIeLenExceedMsgLen;
      this._dropVldGtpV2CMessageDroppedApnFilteringNoApn = value.dropVldGtpV2CMessageDroppedApnFilteringNoApn;
      this._dropVldGtpV2CMessageLengthMismatch = value.dropVldGtpV2CMessageLengthMismatch;
      this._dropVldGtpV2CMessageWithTeidZeroExpected = value.dropVldGtpV2CMessageWithTeidZeroExpected;
      this._dropVldGtpV2WrongLbiCreateBearerReq = value.dropVldGtpV2WrongLbiCreateBearerReq;
      this._dropVldGtpv0SeqnumBufferFull = value.dropVldGtpv0SeqnumBufferFull;
      this._dropVldGtpv0SubscriberAttrMiss = value.dropVldGtpv0SubscriberAttrMiss;
      this._dropVldGtpv1SeqnumBufferFull = value.dropVldGtpv1SeqnumBufferFull;
      this._dropVldGtpv1SubscriberAttrMiss = value.dropVldGtpv1SubscriberAttrMiss;
      this._dropVldGtpv2SeqnumBufferFull = value.dropVldGtpv2SeqnumBufferFull;
      this._dropVldGtpv2SubscriberAttrMiss = value.dropVldGtpv2SubscriberAttrMiss;
      this._dropVldInvalidFlowLabelV0 = value.dropVldInvalidFlowLabelV0;
      this._dropVldInvalidPktLenPiggyback = value.dropVldInvalidPktLenPiggyback;
      this._dropVldInvalidTeid = value.dropVldInvalidTeid;
      this._dropVldMandatoryInformationElement = value.dropVldMandatoryInformationElement;
      this._dropVldMessageLength = value.dropVldMessageLength;
      this._dropVldOutOfOrderIe = value.dropVldOutOfOrderIe;
      this._dropVldOutOfState = value.dropVldOutOfState;
      this._dropVldOutOfStateIe = value.dropVldOutOfStateIe;
      this._dropVldProtocolFlagUnset = value.dropVldProtocolFlagUnset;
      this._dropVldReservedFieldSet = value.dropVldReservedFieldSet;
      this._dropVldReservedInformationElement = value.dropVldReservedInformationElement;
      this._dropVldSanityFailedPiggyback = value.dropVldSanityFailedPiggyback;
      this._dropVldSequenceNumCorrelation = value.dropVldSequenceNumCorrelation;
      this._dropVldTunnelIdFlag = value.dropVldTunnelIdFlag;
      this._dropVldUnsupportedMessageType = value.dropVldUnsupportedMessageType;
      this._dropVldV0ReservedMessageDrop = value.dropVldV0ReservedMessageDrop;
      this._dropVldV1ReservedMessageDrop = value.dropVldV1ReservedMessageDrop;
      this._dropVldV2ReservedMessageDrop = value.dropVldV2ReservedMessageDrop;
      this._dropVldVersionNotSupported = value.dropVldVersionNotSupported;
      this._gtpCHandoverInProgressWithConn = value.gtpCHandoverInProgressWithConn;
      this._gtpNodeRestartGtpC = value.gtpNodeRestartGtpC;
      this._gtpPathManagementMessage = value.gtpPathManagementMessage;
      this._gtpUTunnelCreated = value.gtpUTunnelCreated;
      this._gtpUTunnelDeleted = value.gtpUTunnelDeleted;
      this._gtpV0CCreatePdpRespUnsuccess = value.gtpV0CCreatePdpRespUnsuccess;
      this._gtpV0CHalfOpenTunnelClosed = value.gtpV0CHalfOpenTunnelClosed;
      this._gtpV0CMessageSkippedApnFilteringNoImsi = value.gtpV0CMessageSkippedApnFilteringNoImsi;
      this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn = value.gtpV0CMessageSkippedMsisdnFilteringNoMsisdn;
      this._gtpV0CPacketDummyMsisdn = value.gtpV0CPacketDummyMsisdn;
      this._gtpV0CPduNotificationRejectRequestForward = value.gtpV0CPduNotificationRejectRequestForward;
      this._gtpV0CPduNotificationRequestForward = value.gtpV0CPduNotificationRequestForward;
      this._gtpV0CReservedMessageAllow = value.gtpV0CReservedMessageAllow;
      this._gtpV0CTunnelClosed = value.gtpV0CTunnelClosed;
      this._gtpV0CTunnelCreated = value.gtpV0CTunnelCreated;
      this._gtpV0CTunnelDeleted = value.gtpV0CTunnelDeleted;
      this._gtpV0CTunnelDeletedRestart = value.gtpV0CTunnelDeletedRestart;
      this._gtpV0CTunnelHalfClosed = value.gtpV0CTunnelHalfClosed;
      this._gtpV0CTunnelHalfOpen = value.gtpV0CTunnelHalfOpen;
      this._gtpV0CUpdatePdpRespUnsuccess = value.gtpV0CUpdatePdpRespUnsuccess;
      this._gtpV1CCreatePdpRespUnsuccess = value.gtpV1CCreatePdpRespUnsuccess;
      this._gtpV1CHalfOpenTunnelClosed = value.gtpV1CHalfOpenTunnelClosed;
      this._gtpV1CMessageSkippedApnFilteringNoImsi = value.gtpV1CMessageSkippedApnFilteringNoImsi;
      this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn = value.gtpV1CMessageSkippedMsisdnFilteringNoMsisdn;
      this._gtpV1CPacketDummyMsisdn = value.gtpV1CPacketDummyMsisdn;
      this._gtpV1CPduNotificationRejectRequestForward = value.gtpV1CPduNotificationRejectRequestForward;
      this._gtpV1CPduNotificationRequestForward = value.gtpV1CPduNotificationRequestForward;
      this._gtpV1CReservedMessageAllow = value.gtpV1CReservedMessageAllow;
      this._gtpV1CTunnelClosed = value.gtpV1CTunnelClosed;
      this._gtpV1CTunnelCreated = value.gtpV1CTunnelCreated;
      this._gtpV1CTunnelDeleted = value.gtpV1CTunnelDeleted;
      this._gtpV1CTunnelDeletedRestart = value.gtpV1CTunnelDeletedRestart;
      this._gtpV1CTunnelHalfClosed = value.gtpV1CTunnelHalfClosed;
      this._gtpV1CTunnelHalfOpen = value.gtpV1CTunnelHalfOpen;
      this._gtpV1CUpdatePdpRespUnsuccess = value.gtpV1CUpdatePdpRespUnsuccess;
      this._gtpV2CCreateSessRespUnsuccess = value.gtpV2CCreateSessRespUnsuccess;
      this._gtpV2CHalfOpenTunnelClosed = value.gtpV2CHalfOpenTunnelClosed;
      this._gtpV2CMessageSkippedApnFilteringNoImsi = value.gtpV2CMessageSkippedApnFilteringNoImsi;
      this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn = value.gtpV2CMessageSkippedMsisdnFilteringNoMsisdn;
      this._gtpV2CModBearerRespUnsuccess = value.gtpV2CModBearerRespUnsuccess;
      this._gtpV2CPacketDummyMsisdn = value.gtpV2CPacketDummyMsisdn;
      this._gtpV2CPiggybackMessage = value.gtpV2CPiggybackMessage;
      this._gtpV2CReservedMessageAllow = value.gtpV2CReservedMessageAllow;
      this._gtpV2CTunnelClosed = value.gtpV2CTunnelClosed;
      this._gtpV2CTunnelCreated = value.gtpV2CTunnelCreated;
      this._gtpV2CTunnelDeleted = value.gtpV2CTunnelDeleted;
      this._gtpV2CTunnelDeletedRestart = value.gtpV2CTunnelDeletedRestart;
      this._gtpV2CTunnelHalfClosed = value.gtpV2CTunnelHalfClosed;
      this._gtpV2CTunnelHalfOpen = value.gtpV2CTunnelHalfOpen;
      this._keyName = value.keyName;
      this._keyType = value.keyType;
      this._uplinkBytes = value.uplinkBytes;
      this._uplinkPkts = value.uplinkPkts;
    }
  }

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

  // drop_vld_gtp_v0_c_ie_len_exceed_msg_len - computed: false, optional: true, required: false
  private _dropVldGtpV0CIeLenExceedMsgLen?: number; 
  public get dropVldGtpV0CIeLenExceedMsgLen() {
    return this.getNumberAttribute('drop_vld_gtp_v0_c_ie_len_exceed_msg_len');
  }
  public set dropVldGtpV0CIeLenExceedMsgLen(value: number) {
    this._dropVldGtpV0CIeLenExceedMsgLen = value;
  }
  public resetDropVldGtpV0CIeLenExceedMsgLen() {
    this._dropVldGtpV0CIeLenExceedMsgLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV0CIeLenExceedMsgLenInput() {
    return this._dropVldGtpV0CIeLenExceedMsgLen;
  }

  // drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn - computed: false, optional: true, required: false
  private _dropVldGtpV0CMessageDroppedApnFilteringNoApn?: number; 
  public get dropVldGtpV0CMessageDroppedApnFilteringNoApn() {
    return this.getNumberAttribute('drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn');
  }
  public set dropVldGtpV0CMessageDroppedApnFilteringNoApn(value: number) {
    this._dropVldGtpV0CMessageDroppedApnFilteringNoApn = value;
  }
  public resetDropVldGtpV0CMessageDroppedApnFilteringNoApn() {
    this._dropVldGtpV0CMessageDroppedApnFilteringNoApn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV0CMessageDroppedApnFilteringNoApnInput() {
    return this._dropVldGtpV0CMessageDroppedApnFilteringNoApn;
  }

  // drop_vld_gtp_v0_c_message_length_mismatch - computed: false, optional: true, required: false
  private _dropVldGtpV0CMessageLengthMismatch?: number; 
  public get dropVldGtpV0CMessageLengthMismatch() {
    return this.getNumberAttribute('drop_vld_gtp_v0_c_message_length_mismatch');
  }
  public set dropVldGtpV0CMessageLengthMismatch(value: number) {
    this._dropVldGtpV0CMessageLengthMismatch = value;
  }
  public resetDropVldGtpV0CMessageLengthMismatch() {
    this._dropVldGtpV0CMessageLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV0CMessageLengthMismatchInput() {
    return this._dropVldGtpV0CMessageLengthMismatch;
  }

  // drop_vld_gtp_v0_c_message_with_teid_zero_expected - computed: false, optional: true, required: false
  private _dropVldGtpV0CMessageWithTeidZeroExpected?: number; 
  public get dropVldGtpV0CMessageWithTeidZeroExpected() {
    return this.getNumberAttribute('drop_vld_gtp_v0_c_message_with_teid_zero_expected');
  }
  public set dropVldGtpV0CMessageWithTeidZeroExpected(value: number) {
    this._dropVldGtpV0CMessageWithTeidZeroExpected = value;
  }
  public resetDropVldGtpV0CMessageWithTeidZeroExpected() {
    this._dropVldGtpV0CMessageWithTeidZeroExpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV0CMessageWithTeidZeroExpectedInput() {
    return this._dropVldGtpV0CMessageWithTeidZeroExpected;
  }

  // drop_vld_gtp_v1_c_ie_len_exceed_msg_len - computed: false, optional: true, required: false
  private _dropVldGtpV1CIeLenExceedMsgLen?: number; 
  public get dropVldGtpV1CIeLenExceedMsgLen() {
    return this.getNumberAttribute('drop_vld_gtp_v1_c_ie_len_exceed_msg_len');
  }
  public set dropVldGtpV1CIeLenExceedMsgLen(value: number) {
    this._dropVldGtpV1CIeLenExceedMsgLen = value;
  }
  public resetDropVldGtpV1CIeLenExceedMsgLen() {
    this._dropVldGtpV1CIeLenExceedMsgLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV1CIeLenExceedMsgLenInput() {
    return this._dropVldGtpV1CIeLenExceedMsgLen;
  }

  // drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn - computed: false, optional: true, required: false
  private _dropVldGtpV1CMessageDroppedApnFilteringNoApn?: number; 
  public get dropVldGtpV1CMessageDroppedApnFilteringNoApn() {
    return this.getNumberAttribute('drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn');
  }
  public set dropVldGtpV1CMessageDroppedApnFilteringNoApn(value: number) {
    this._dropVldGtpV1CMessageDroppedApnFilteringNoApn = value;
  }
  public resetDropVldGtpV1CMessageDroppedApnFilteringNoApn() {
    this._dropVldGtpV1CMessageDroppedApnFilteringNoApn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV1CMessageDroppedApnFilteringNoApnInput() {
    return this._dropVldGtpV1CMessageDroppedApnFilteringNoApn;
  }

  // drop_vld_gtp_v1_c_message_length_mismatch - computed: false, optional: true, required: false
  private _dropVldGtpV1CMessageLengthMismatch?: number; 
  public get dropVldGtpV1CMessageLengthMismatch() {
    return this.getNumberAttribute('drop_vld_gtp_v1_c_message_length_mismatch');
  }
  public set dropVldGtpV1CMessageLengthMismatch(value: number) {
    this._dropVldGtpV1CMessageLengthMismatch = value;
  }
  public resetDropVldGtpV1CMessageLengthMismatch() {
    this._dropVldGtpV1CMessageLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV1CMessageLengthMismatchInput() {
    return this._dropVldGtpV1CMessageLengthMismatch;
  }

  // drop_vld_gtp_v1_c_message_with_teid_zero_expected - computed: false, optional: true, required: false
  private _dropVldGtpV1CMessageWithTeidZeroExpected?: number; 
  public get dropVldGtpV1CMessageWithTeidZeroExpected() {
    return this.getNumberAttribute('drop_vld_gtp_v1_c_message_with_teid_zero_expected');
  }
  public set dropVldGtpV1CMessageWithTeidZeroExpected(value: number) {
    this._dropVldGtpV1CMessageWithTeidZeroExpected = value;
  }
  public resetDropVldGtpV1CMessageWithTeidZeroExpected() {
    this._dropVldGtpV1CMessageWithTeidZeroExpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV1CMessageWithTeidZeroExpectedInput() {
    return this._dropVldGtpV1CMessageWithTeidZeroExpected;
  }

  // drop_vld_gtp_v2_c_ie_len_exceed_msg_len - computed: false, optional: true, required: false
  private _dropVldGtpV2CIeLenExceedMsgLen?: number; 
  public get dropVldGtpV2CIeLenExceedMsgLen() {
    return this.getNumberAttribute('drop_vld_gtp_v2_c_ie_len_exceed_msg_len');
  }
  public set dropVldGtpV2CIeLenExceedMsgLen(value: number) {
    this._dropVldGtpV2CIeLenExceedMsgLen = value;
  }
  public resetDropVldGtpV2CIeLenExceedMsgLen() {
    this._dropVldGtpV2CIeLenExceedMsgLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2CIeLenExceedMsgLenInput() {
    return this._dropVldGtpV2CIeLenExceedMsgLen;
  }

  // drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn - computed: false, optional: true, required: false
  private _dropVldGtpV2CMessageDroppedApnFilteringNoApn?: number; 
  public get dropVldGtpV2CMessageDroppedApnFilteringNoApn() {
    return this.getNumberAttribute('drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn');
  }
  public set dropVldGtpV2CMessageDroppedApnFilteringNoApn(value: number) {
    this._dropVldGtpV2CMessageDroppedApnFilteringNoApn = value;
  }
  public resetDropVldGtpV2CMessageDroppedApnFilteringNoApn() {
    this._dropVldGtpV2CMessageDroppedApnFilteringNoApn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2CMessageDroppedApnFilteringNoApnInput() {
    return this._dropVldGtpV2CMessageDroppedApnFilteringNoApn;
  }

  // drop_vld_gtp_v2_c_message_length_mismatch - computed: false, optional: true, required: false
  private _dropVldGtpV2CMessageLengthMismatch?: number; 
  public get dropVldGtpV2CMessageLengthMismatch() {
    return this.getNumberAttribute('drop_vld_gtp_v2_c_message_length_mismatch');
  }
  public set dropVldGtpV2CMessageLengthMismatch(value: number) {
    this._dropVldGtpV2CMessageLengthMismatch = value;
  }
  public resetDropVldGtpV2CMessageLengthMismatch() {
    this._dropVldGtpV2CMessageLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2CMessageLengthMismatchInput() {
    return this._dropVldGtpV2CMessageLengthMismatch;
  }

  // drop_vld_gtp_v2_c_message_with_teid_zero_expected - computed: false, optional: true, required: false
  private _dropVldGtpV2CMessageWithTeidZeroExpected?: number; 
  public get dropVldGtpV2CMessageWithTeidZeroExpected() {
    return this.getNumberAttribute('drop_vld_gtp_v2_c_message_with_teid_zero_expected');
  }
  public set dropVldGtpV2CMessageWithTeidZeroExpected(value: number) {
    this._dropVldGtpV2CMessageWithTeidZeroExpected = value;
  }
  public resetDropVldGtpV2CMessageWithTeidZeroExpected() {
    this._dropVldGtpV2CMessageWithTeidZeroExpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2CMessageWithTeidZeroExpectedInput() {
    return this._dropVldGtpV2CMessageWithTeidZeroExpected;
  }

  // drop_vld_gtp_v2_wrong_lbi_create_bearer_req - computed: false, optional: true, required: false
  private _dropVldGtpV2WrongLbiCreateBearerReq?: number; 
  public get dropVldGtpV2WrongLbiCreateBearerReq() {
    return this.getNumberAttribute('drop_vld_gtp_v2_wrong_lbi_create_bearer_req');
  }
  public set dropVldGtpV2WrongLbiCreateBearerReq(value: number) {
    this._dropVldGtpV2WrongLbiCreateBearerReq = value;
  }
  public resetDropVldGtpV2WrongLbiCreateBearerReq() {
    this._dropVldGtpV2WrongLbiCreateBearerReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpV2WrongLbiCreateBearerReqInput() {
    return this._dropVldGtpV2WrongLbiCreateBearerReq;
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

  // drop_vld_gtpv0_subscriber_attr_miss - computed: false, optional: true, required: false
  private _dropVldGtpv0SubscriberAttrMiss?: number; 
  public get dropVldGtpv0SubscriberAttrMiss() {
    return this.getNumberAttribute('drop_vld_gtpv0_subscriber_attr_miss');
  }
  public set dropVldGtpv0SubscriberAttrMiss(value: number) {
    this._dropVldGtpv0SubscriberAttrMiss = value;
  }
  public resetDropVldGtpv0SubscriberAttrMiss() {
    this._dropVldGtpv0SubscriberAttrMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv0SubscriberAttrMissInput() {
    return this._dropVldGtpv0SubscriberAttrMiss;
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

  // drop_vld_gtpv1_subscriber_attr_miss - computed: false, optional: true, required: false
  private _dropVldGtpv1SubscriberAttrMiss?: number; 
  public get dropVldGtpv1SubscriberAttrMiss() {
    return this.getNumberAttribute('drop_vld_gtpv1_subscriber_attr_miss');
  }
  public set dropVldGtpv1SubscriberAttrMiss(value: number) {
    this._dropVldGtpv1SubscriberAttrMiss = value;
  }
  public resetDropVldGtpv1SubscriberAttrMiss() {
    this._dropVldGtpv1SubscriberAttrMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv1SubscriberAttrMissInput() {
    return this._dropVldGtpv1SubscriberAttrMiss;
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

  // drop_vld_gtpv2_subscriber_attr_miss - computed: false, optional: true, required: false
  private _dropVldGtpv2SubscriberAttrMiss?: number; 
  public get dropVldGtpv2SubscriberAttrMiss() {
    return this.getNumberAttribute('drop_vld_gtpv2_subscriber_attr_miss');
  }
  public set dropVldGtpv2SubscriberAttrMiss(value: number) {
    this._dropVldGtpv2SubscriberAttrMiss = value;
  }
  public resetDropVldGtpv2SubscriberAttrMiss() {
    this._dropVldGtpv2SubscriberAttrMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpv2SubscriberAttrMissInput() {
    return this._dropVldGtpv2SubscriberAttrMiss;
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

  // drop_vld_v0_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV0ReservedMessageDrop?: number; 
  public get dropVldV0ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v0_reserved_message_drop');
  }
  public set dropVldV0ReservedMessageDrop(value: number) {
    this._dropVldV0ReservedMessageDrop = value;
  }
  public resetDropVldV0ReservedMessageDrop() {
    this._dropVldV0ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV0ReservedMessageDropInput() {
    return this._dropVldV0ReservedMessageDrop;
  }

  // drop_vld_v1_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV1ReservedMessageDrop?: number; 
  public get dropVldV1ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v1_reserved_message_drop');
  }
  public set dropVldV1ReservedMessageDrop(value: number) {
    this._dropVldV1ReservedMessageDrop = value;
  }
  public resetDropVldV1ReservedMessageDrop() {
    this._dropVldV1ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV1ReservedMessageDropInput() {
    return this._dropVldV1ReservedMessageDrop;
  }

  // drop_vld_v2_reserved_message_drop - computed: false, optional: true, required: false
  private _dropVldV2ReservedMessageDrop?: number; 
  public get dropVldV2ReservedMessageDrop() {
    return this.getNumberAttribute('drop_vld_v2_reserved_message_drop');
  }
  public set dropVldV2ReservedMessageDrop(value: number) {
    this._dropVldV2ReservedMessageDrop = value;
  }
  public resetDropVldV2ReservedMessageDrop() {
    this._dropVldV2ReservedMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldV2ReservedMessageDropInput() {
    return this._dropVldV2ReservedMessageDrop;
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

  // gtp_node_restart_gtp_c - computed: false, optional: true, required: false
  private _gtpNodeRestartGtpC?: number; 
  public get gtpNodeRestartGtpC() {
    return this.getNumberAttribute('gtp_node_restart_gtp_c');
  }
  public set gtpNodeRestartGtpC(value: number) {
    this._gtpNodeRestartGtpC = value;
  }
  public resetGtpNodeRestartGtpC() {
    this._gtpNodeRestartGtpC = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpNodeRestartGtpCInput() {
    return this._gtpNodeRestartGtpC;
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

  // gtp_v0_c_message_skipped_apn_filtering_no_imsi - computed: false, optional: true, required: false
  private _gtpV0CMessageSkippedApnFilteringNoImsi?: number; 
  public get gtpV0CMessageSkippedApnFilteringNoImsi() {
    return this.getNumberAttribute('gtp_v0_c_message_skipped_apn_filtering_no_imsi');
  }
  public set gtpV0CMessageSkippedApnFilteringNoImsi(value: number) {
    this._gtpV0CMessageSkippedApnFilteringNoImsi = value;
  }
  public resetGtpV0CMessageSkippedApnFilteringNoImsi() {
    this._gtpV0CMessageSkippedApnFilteringNoImsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CMessageSkippedApnFilteringNoImsiInput() {
    return this._gtpV0CMessageSkippedApnFilteringNoImsi;
  }

  // gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn - computed: false, optional: true, required: false
  private _gtpV0CMessageSkippedMsisdnFilteringNoMsisdn?: number; 
  public get gtpV0CMessageSkippedMsisdnFilteringNoMsisdn() {
    return this.getNumberAttribute('gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn');
  }
  public set gtpV0CMessageSkippedMsisdnFilteringNoMsisdn(value: number) {
    this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn = value;
  }
  public resetGtpV0CMessageSkippedMsisdnFilteringNoMsisdn() {
    this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CMessageSkippedMsisdnFilteringNoMsisdnInput() {
    return this._gtpV0CMessageSkippedMsisdnFilteringNoMsisdn;
  }

  // gtp_v0_c_packet_dummy_msisdn - computed: false, optional: true, required: false
  private _gtpV0CPacketDummyMsisdn?: number; 
  public get gtpV0CPacketDummyMsisdn() {
    return this.getNumberAttribute('gtp_v0_c_packet_dummy_msisdn');
  }
  public set gtpV0CPacketDummyMsisdn(value: number) {
    this._gtpV0CPacketDummyMsisdn = value;
  }
  public resetGtpV0CPacketDummyMsisdn() {
    this._gtpV0CPacketDummyMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CPacketDummyMsisdnInput() {
    return this._gtpV0CPacketDummyMsisdn;
  }

  // gtp_v0_c_pdu_notification_reject_request_forward - computed: false, optional: true, required: false
  private _gtpV0CPduNotificationRejectRequestForward?: number; 
  public get gtpV0CPduNotificationRejectRequestForward() {
    return this.getNumberAttribute('gtp_v0_c_pdu_notification_reject_request_forward');
  }
  public set gtpV0CPduNotificationRejectRequestForward(value: number) {
    this._gtpV0CPduNotificationRejectRequestForward = value;
  }
  public resetGtpV0CPduNotificationRejectRequestForward() {
    this._gtpV0CPduNotificationRejectRequestForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CPduNotificationRejectRequestForwardInput() {
    return this._gtpV0CPduNotificationRejectRequestForward;
  }

  // gtp_v0_c_pdu_notification_request_forward - computed: false, optional: true, required: false
  private _gtpV0CPduNotificationRequestForward?: number; 
  public get gtpV0CPduNotificationRequestForward() {
    return this.getNumberAttribute('gtp_v0_c_pdu_notification_request_forward');
  }
  public set gtpV0CPduNotificationRequestForward(value: number) {
    this._gtpV0CPduNotificationRequestForward = value;
  }
  public resetGtpV0CPduNotificationRequestForward() {
    this._gtpV0CPduNotificationRequestForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CPduNotificationRequestForwardInput() {
    return this._gtpV0CPduNotificationRequestForward;
  }

  // gtp_v0_c_reserved_message_allow - computed: false, optional: true, required: false
  private _gtpV0CReservedMessageAllow?: number; 
  public get gtpV0CReservedMessageAllow() {
    return this.getNumberAttribute('gtp_v0_c_reserved_message_allow');
  }
  public set gtpV0CReservedMessageAllow(value: number) {
    this._gtpV0CReservedMessageAllow = value;
  }
  public resetGtpV0CReservedMessageAllow() {
    this._gtpV0CReservedMessageAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CReservedMessageAllowInput() {
    return this._gtpV0CReservedMessageAllow;
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

  // gtp_v1_c_message_skipped_apn_filtering_no_imsi - computed: false, optional: true, required: false
  private _gtpV1CMessageSkippedApnFilteringNoImsi?: number; 
  public get gtpV1CMessageSkippedApnFilteringNoImsi() {
    return this.getNumberAttribute('gtp_v1_c_message_skipped_apn_filtering_no_imsi');
  }
  public set gtpV1CMessageSkippedApnFilteringNoImsi(value: number) {
    this._gtpV1CMessageSkippedApnFilteringNoImsi = value;
  }
  public resetGtpV1CMessageSkippedApnFilteringNoImsi() {
    this._gtpV1CMessageSkippedApnFilteringNoImsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CMessageSkippedApnFilteringNoImsiInput() {
    return this._gtpV1CMessageSkippedApnFilteringNoImsi;
  }

  // gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn - computed: false, optional: true, required: false
  private _gtpV1CMessageSkippedMsisdnFilteringNoMsisdn?: number; 
  public get gtpV1CMessageSkippedMsisdnFilteringNoMsisdn() {
    return this.getNumberAttribute('gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn');
  }
  public set gtpV1CMessageSkippedMsisdnFilteringNoMsisdn(value: number) {
    this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn = value;
  }
  public resetGtpV1CMessageSkippedMsisdnFilteringNoMsisdn() {
    this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CMessageSkippedMsisdnFilteringNoMsisdnInput() {
    return this._gtpV1CMessageSkippedMsisdnFilteringNoMsisdn;
  }

  // gtp_v1_c_packet_dummy_msisdn - computed: false, optional: true, required: false
  private _gtpV1CPacketDummyMsisdn?: number; 
  public get gtpV1CPacketDummyMsisdn() {
    return this.getNumberAttribute('gtp_v1_c_packet_dummy_msisdn');
  }
  public set gtpV1CPacketDummyMsisdn(value: number) {
    this._gtpV1CPacketDummyMsisdn = value;
  }
  public resetGtpV1CPacketDummyMsisdn() {
    this._gtpV1CPacketDummyMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CPacketDummyMsisdnInput() {
    return this._gtpV1CPacketDummyMsisdn;
  }

  // gtp_v1_c_pdu_notification_reject_request_forward - computed: false, optional: true, required: false
  private _gtpV1CPduNotificationRejectRequestForward?: number; 
  public get gtpV1CPduNotificationRejectRequestForward() {
    return this.getNumberAttribute('gtp_v1_c_pdu_notification_reject_request_forward');
  }
  public set gtpV1CPduNotificationRejectRequestForward(value: number) {
    this._gtpV1CPduNotificationRejectRequestForward = value;
  }
  public resetGtpV1CPduNotificationRejectRequestForward() {
    this._gtpV1CPduNotificationRejectRequestForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CPduNotificationRejectRequestForwardInput() {
    return this._gtpV1CPduNotificationRejectRequestForward;
  }

  // gtp_v1_c_pdu_notification_request_forward - computed: false, optional: true, required: false
  private _gtpV1CPduNotificationRequestForward?: number; 
  public get gtpV1CPduNotificationRequestForward() {
    return this.getNumberAttribute('gtp_v1_c_pdu_notification_request_forward');
  }
  public set gtpV1CPduNotificationRequestForward(value: number) {
    this._gtpV1CPduNotificationRequestForward = value;
  }
  public resetGtpV1CPduNotificationRequestForward() {
    this._gtpV1CPduNotificationRequestForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CPduNotificationRequestForwardInput() {
    return this._gtpV1CPduNotificationRequestForward;
  }

  // gtp_v1_c_reserved_message_allow - computed: false, optional: true, required: false
  private _gtpV1CReservedMessageAllow?: number; 
  public get gtpV1CReservedMessageAllow() {
    return this.getNumberAttribute('gtp_v1_c_reserved_message_allow');
  }
  public set gtpV1CReservedMessageAllow(value: number) {
    this._gtpV1CReservedMessageAllow = value;
  }
  public resetGtpV1CReservedMessageAllow() {
    this._gtpV1CReservedMessageAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CReservedMessageAllowInput() {
    return this._gtpV1CReservedMessageAllow;
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

  // gtp_v2_c_message_skipped_apn_filtering_no_imsi - computed: false, optional: true, required: false
  private _gtpV2CMessageSkippedApnFilteringNoImsi?: number; 
  public get gtpV2CMessageSkippedApnFilteringNoImsi() {
    return this.getNumberAttribute('gtp_v2_c_message_skipped_apn_filtering_no_imsi');
  }
  public set gtpV2CMessageSkippedApnFilteringNoImsi(value: number) {
    this._gtpV2CMessageSkippedApnFilteringNoImsi = value;
  }
  public resetGtpV2CMessageSkippedApnFilteringNoImsi() {
    this._gtpV2CMessageSkippedApnFilteringNoImsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CMessageSkippedApnFilteringNoImsiInput() {
    return this._gtpV2CMessageSkippedApnFilteringNoImsi;
  }

  // gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn - computed: false, optional: true, required: false
  private _gtpV2CMessageSkippedMsisdnFilteringNoMsisdn?: number; 
  public get gtpV2CMessageSkippedMsisdnFilteringNoMsisdn() {
    return this.getNumberAttribute('gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn');
  }
  public set gtpV2CMessageSkippedMsisdnFilteringNoMsisdn(value: number) {
    this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn = value;
  }
  public resetGtpV2CMessageSkippedMsisdnFilteringNoMsisdn() {
    this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CMessageSkippedMsisdnFilteringNoMsisdnInput() {
    return this._gtpV2CMessageSkippedMsisdnFilteringNoMsisdn;
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

  // gtp_v2_c_packet_dummy_msisdn - computed: false, optional: true, required: false
  private _gtpV2CPacketDummyMsisdn?: number; 
  public get gtpV2CPacketDummyMsisdn() {
    return this.getNumberAttribute('gtp_v2_c_packet_dummy_msisdn');
  }
  public set gtpV2CPacketDummyMsisdn(value: number) {
    this._gtpV2CPacketDummyMsisdn = value;
  }
  public resetGtpV2CPacketDummyMsisdn() {
    this._gtpV2CPacketDummyMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CPacketDummyMsisdnInput() {
    return this._gtpV2CPacketDummyMsisdn;
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

  // gtp_v2_c_reserved_message_allow - computed: false, optional: true, required: false
  private _gtpV2CReservedMessageAllow?: number; 
  public get gtpV2CReservedMessageAllow() {
    return this.getNumberAttribute('gtp_v2_c_reserved_message_allow');
  }
  public set gtpV2CReservedMessageAllow(value: number) {
    this._gtpV2CReservedMessageAllow = value;
  }
  public resetGtpV2CReservedMessageAllow() {
    this._gtpV2CReservedMessageAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CReservedMessageAllowInput() {
    return this._gtpV2CReservedMessageAllow;
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

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
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
}
export interface DataThunderFwGtpStatsNetworkElement {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#stats DataThunderFwGtpStats#stats}
  */
  readonly stats?: DataThunderFwGtpStatsNetworkElementStats;
}

export function dataThunderFwGtpStatsNetworkElementToTerraform(struct?: DataThunderFwGtpStatsNetworkElementOutputReference | DataThunderFwGtpStatsNetworkElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderFwGtpStatsNetworkElementStatsToTerraform(struct!.stats),
  }
}


export function dataThunderFwGtpStatsNetworkElementToHclTerraform(struct?: DataThunderFwGtpStatsNetworkElementOutputReference | DataThunderFwGtpStatsNetworkElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderFwGtpStatsNetworkElementStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwGtpStatsNetworkElementStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwGtpStatsNetworkElementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwGtpStatsNetworkElement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwGtpStatsNetworkElement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderFwGtpStatsNetworkElementStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwGtpStatsNetworkElementStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}
export interface DataThunderFwGtpStatsStats {
  /**
  * GTP Bearer not found in response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_gtp_bearer_not_found_in_resp DataThunderFwGtpStats#drop_gtp_bearer_not_found_in_resp}
  */
  readonly dropGtpBearerNotFoundInResp?: number;
  /**
  * GTP Fragmented or JUMBO packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_gtp_frag_or_jumbo_pkt DataThunderFwGtpStats#drop_gtp_frag_or_jumbo_pkt}
  */
  readonly dropGtpFragOrJumboPkt?: number;
  /**
  * Missing conditional IE in bearer context Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_gtp_missing_cond_ie_bearer_ctx DataThunderFwGtpStats#drop_gtp_missing_cond_ie_bearer_ctx}
  */
  readonly dropGtpMissingCondIeBearerCtx?: number;
  /**
  * GTP Echo IE Length Exceeds Message Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_echo_ie_len_exceed_msg_len DataThunderFwGtpStats#drop_vld_gtp_echo_ie_len_exceed_msg_len}
  */
  readonly dropVldGtpEchoIeLenExceedMsgLen?: number;
  /**
  * GTP Echo Out of State Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#drop_vld_gtp_echo_out_of_state_ DataThunderFwGtpStats#drop_vld_gtp_echo_out_of_state_}
  */
  readonly dropVldGtpEchoOutOfState?: number;
  /**
  * GTP-C Retransmitted Add Bearer Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_add_bearer_response_retransmit DataThunderFwGtpStats#gtp_add_bearer_response_retransmit}
  */
  readonly gtpAddBearerResponseRetransmit?: number;
  /**
  * GTP-C Path Failure due to Echo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_c_echo_path_failure DataThunderFwGtpStats#gtp_c_echo_path_failure}
  */
  readonly gtpCEchoPathFailure?: number;
  /**
  * GTP-C mesg matching conn with HO In Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_c_handover_in_progress_with_conn DataThunderFwGtpStats#gtp_c_handover_in_progress_with_conn}
  */
  readonly gtpCHandoverInProgressWithConn?: number;
  /**
  * GTP-C Handover Request Out of state Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_c_handover_request_out_of_state_drop DataThunderFwGtpStats#gtp_c_handover_request_out_of_state_drop}
  */
  readonly gtpCHandoverRequestOutOfStateDrop?: number;
  /**
  * GTP-C session count on C-smp exceeded 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_c_ref_count_smp_exceeded DataThunderFwGtpStats#gtp_c_ref_count_smp_exceeded}
  */
  readonly gtpCRefCountSmpExceeded?: number;
  /**
  * GTP-C Retransmitted Delete Bearer Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_del_bearer_request_retransmit DataThunderFwGtpStats#gtp_del_bearer_request_retransmit}
  */
  readonly gtpDelBearerRequestRetransmit?: number;
  /**
  * GTP messages forwarded via monitor mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_monitor_forward DataThunderFwGtpStats#gtp_monitor_forward}
  */
  readonly gtpMonitorForward?: number;
  /**
  * GTP Node Restoration due to Recovery IE in Echo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_node_restart_echo DataThunderFwGtpStats#gtp_node_restart_echo}
  */
  readonly gtpNodeRestartEcho?: number;
  /**
  * GTP-Path Message Length Mismatch Across Layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_path_message_length_mismatch DataThunderFwGtpStats#gtp_path_message_length_mismatch}
  */
  readonly gtpPathMessageLengthMismatch?: number;
  /**
  * GTP Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_rate_limit_entry_create_failure DataThunderFwGtpStats#gtp_rate_limit_entry_create_failure}
  */
  readonly gtpRateLimitEntryCreateFailure?: number;
  /**
  * GTP Rate Limit SMP Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_rate_limit_smp_create_failure DataThunderFwGtpStats#gtp_rate_limit_smp_create_failure}
  */
  readonly gtpRateLimitSmpCreateFailure?: number;
  /**
  * GTP Rate Limit Dynamic Counters Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_rate_limit_t3_ctr_create_failure DataThunderFwGtpStats#gtp_rate_limit_t3_ctr_create_failure}
  */
  readonly gtpRateLimitT3CtrCreateFailure?: number;
  /**
  * GTP Message Dropped in RR Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_rr_message_drop DataThunderFwGtpStats#gtp_rr_message_drop}
  */
  readonly gtpRrMessageDrop?: number;
  /**
  * GTP SMP check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_smp_check_failed DataThunderFwGtpStats#gtp_smp_check_failed}
  */
  readonly gtpSmpCheckFailed?: number;
  /**
  * GTP-U session count is 0 in GTP-C SMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_smp_dec_sess_count_check_failed DataThunderFwGtpStats#gtp_smp_dec_sess_count_check_failed}
  */
  readonly gtpSmpDecSessCountCheckFailed?: number;
  /**
  * GTP SMP PATH check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_smp_path_check_failed DataThunderFwGtpStats#gtp_smp_path_check_failed}
  */
  readonly gtpSmpPathCheckFailed?: number;
  /**
  * GTP-U session count is not in range of 0-11 in GTP-C SMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_smp_session_count_check_failed DataThunderFwGtpStats#gtp_smp_session_count_check_failed}
  */
  readonly gtpSmpSessionCountCheckFailed?: number;
  /**
  * GTP Stateless Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_stateless_forward DataThunderFwGtpStats#gtp_stateless_forward}
  */
  readonly gtpStatelessForward?: number;
  /**
  * GTP Tunnel Level Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_tunnel_rate_limit_entry_create_failure DataThunderFwGtpStats#gtp_tunnel_rate_limit_entry_create_failure}
  */
  readonly gtpTunnelRateLimitEntryCreateFailure?: number;
  /**
  * GTP-U Downlink Egress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_downlink_egress_bytes DataThunderFwGtpStats#gtp_u_downlink_egress_bytes}
  */
  readonly gtpUDownlinkEgressBytes?: number;
  /**
  * GTP-U Downlink Egress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_downlink_egress_packets DataThunderFwGtpStats#gtp_u_downlink_egress_packets}
  */
  readonly gtpUDownlinkEgressPackets?: number;
  /**
  * GTP-U Downlink Ingress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_downlink_ingress_bytes DataThunderFwGtpStats#gtp_u_downlink_ingress_bytes}
  */
  readonly gtpUDownlinkIngressBytes?: number;
  /**
  * GTP-U Downlink Ingress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_downlink_ingress_packets DataThunderFwGtpStats#gtp_u_downlink_ingress_packets}
  */
  readonly gtpUDownlinkIngressPackets?: number;
  /**
  * GTP-U Message Length Mismatch Across Layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_message_length_mismatch DataThunderFwGtpStats#gtp_u_message_length_mismatch}
  */
  readonly gtpUMessageLengthMismatch?: number;
  /**
  * GTP-U Out of state Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_out_of_state_drop DataThunderFwGtpStats#gtp_u_out_of_state_drop}
  */
  readonly gtpUOutOfStateDrop?: number;
  /**
  * GTP-U smp is marked RML with U-session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_smp_in_rml_with_sess DataThunderFwGtpStats#gtp_u_smp_in_rml_with_sess}
  */
  readonly gtpUSmpInRmlWithSess?: number;
  /**
  * GTP-U Uplink Egress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_uplink_egress_bytes DataThunderFwGtpStats#gtp_u_uplink_egress_bytes}
  */
  readonly gtpUUplinkEgressBytes?: number;
  /**
  * GTP-U Uplink Egress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_uplink_egress_packets DataThunderFwGtpStats#gtp_u_uplink_egress_packets}
  */
  readonly gtpUUplinkEgressPackets?: number;
  /**
  * GTP-U Uplink Ingress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_uplink_ingress_bytes DataThunderFwGtpStats#gtp_u_uplink_ingress_bytes}
  */
  readonly gtpUUplinkIngressBytes?: number;
  /**
  * GTP-U Uplink Ingress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_u_uplink_ingress_packets DataThunderFwGtpStats#gtp_u_uplink_ingress_packets}
  */
  readonly gtpUUplinkIngressPackets?: number;
  /**
  * GTPv0-C Downlink Egress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_downlink_egress_bytes DataThunderFwGtpStats#gtp_v0_c_downlink_egress_bytes}
  */
  readonly gtpV0CDownlinkEgressBytes?: number;
  /**
  * GTPv0-C Downlink Egress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_downlink_egress_packets DataThunderFwGtpStats#gtp_v0_c_downlink_egress_packets}
  */
  readonly gtpV0CDownlinkEgressPackets?: number;
  /**
  * GTPv0-C Downlink Ingress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_downlink_ingress_bytes DataThunderFwGtpStats#gtp_v0_c_downlink_ingress_bytes}
  */
  readonly gtpV0CDownlinkIngressBytes?: number;
  /**
  * GTPv0-C Downlink Ingress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_downlink_ingress_packets DataThunderFwGtpStats#gtp_v0_c_downlink_ingress_packets}
  */
  readonly gtpV0CDownlinkIngressPackets?: number;
  /**
  * GTPv0-C Uplink Egress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_uplink_egress_bytes DataThunderFwGtpStats#gtp_v0_c_uplink_egress_bytes}
  */
  readonly gtpV0CUplinkEgressBytes?: number;
  /**
  * GTPv0-C Uplink Egress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_uplink_egress_packets DataThunderFwGtpStats#gtp_v0_c_uplink_egress_packets}
  */
  readonly gtpV0CUplinkEgressPackets?: number;
  /**
  * GTPv0-C Uplink Ingress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_uplink_ingress_bytes DataThunderFwGtpStats#gtp_v0_c_uplink_ingress_bytes}
  */
  readonly gtpV0CUplinkIngressBytes?: number;
  /**
  * GTPv0-C Uplink Ingress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v0_c_uplink_ingress_packets DataThunderFwGtpStats#gtp_v0_c_uplink_ingress_packets}
  */
  readonly gtpV0CUplinkIngressPackets?: number;
  /**
  * GTPv1-C Downlink Egress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_downlink_egress_bytes DataThunderFwGtpStats#gtp_v1_c_downlink_egress_bytes}
  */
  readonly gtpV1CDownlinkEgressBytes?: number;
  /**
  * GTPv1-C Downlink Egress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_downlink_egress_packets DataThunderFwGtpStats#gtp_v1_c_downlink_egress_packets}
  */
  readonly gtpV1CDownlinkEgressPackets?: number;
  /**
  * GTPv1-C Downlink Ingress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_downlink_ingress_bytes DataThunderFwGtpStats#gtp_v1_c_downlink_ingress_bytes}
  */
  readonly gtpV1CDownlinkIngressBytes?: number;
  /**
  * GTPv1-C Downlink Ingress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_downlink_ingress_packets DataThunderFwGtpStats#gtp_v1_c_downlink_ingress_packets}
  */
  readonly gtpV1CDownlinkIngressPackets?: number;
  /**
  * GTPv1-C NSAPI Not Found in GTP Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_nsapi_not_found_in_delete_req DataThunderFwGtpStats#gtp_v1_c_nsapi_not_found_in_delete_req}
  */
  readonly gtpV1CNsapiNotFoundInDeleteReq?: number;
  /**
  * GTPv1-C Uplink Egress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_uplink_egress_bytes DataThunderFwGtpStats#gtp_v1_c_uplink_egress_bytes}
  */
  readonly gtpV1CUplinkEgressBytes?: number;
  /**
  * GTPv1-C Uplink Egress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_uplink_egress_packets DataThunderFwGtpStats#gtp_v1_c_uplink_egress_packets}
  */
  readonly gtpV1CUplinkEgressPackets?: number;
  /**
  * GTPv1-C Uplink Ingress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_uplink_ingress_bytes DataThunderFwGtpStats#gtp_v1_c_uplink_ingress_bytes}
  */
  readonly gtpV1CUplinkIngressBytes?: number;
  /**
  * GTPv1-C Uplink Ingress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v1_c_uplink_ingress_packets DataThunderFwGtpStats#gtp_v1_c_uplink_ingress_packets}
  */
  readonly gtpV1CUplinkIngressPackets?: number;
  /**
  * GTPv2-C Bearer Not Found in GTP Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_bearer_not_found_in_delete_req DataThunderFwGtpStats#gtp_v2_c_bearer_not_found_in_delete_req}
  */
  readonly gtpV2CBearerNotFoundInDeleteReq?: number;
  /**
  * GTPv2-C Bearer Not Found in GTP Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_bearer_not_found_in_delete_resp DataThunderFwGtpStats#gtp_v2_c_bearer_not_found_in_delete_resp}
  */
  readonly gtpV2CBearerNotFoundInDeleteResp?: number;
  /**
  * GTPv2-C Downlink Egress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_downlink_egress_bytes DataThunderFwGtpStats#gtp_v2_c_downlink_egress_bytes}
  */
  readonly gtpV2CDownlinkEgressBytes?: number;
  /**
  * GTPv2-C Downlink Egress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_downlink_egress_packets DataThunderFwGtpStats#gtp_v2_c_downlink_egress_packets}
  */
  readonly gtpV2CDownlinkEgressPackets?: number;
  /**
  * GTPv2-C Downlink Ingress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_downlink_ingress_bytes DataThunderFwGtpStats#gtp_v2_c_downlink_ingress_bytes}
  */
  readonly gtpV2CDownlinkIngressBytes?: number;
  /**
  * GTPv2-C Downlink Ingress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_downlink_ingress_packets DataThunderFwGtpStats#gtp_v2_c_downlink_ingress_packets}
  */
  readonly gtpV2CDownlinkIngressPackets?: number;
  /**
  * GTPv2-C Uplink Egress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_uplink_egress_bytes DataThunderFwGtpStats#gtp_v2_c_uplink_egress_bytes}
  */
  readonly gtpV2CUplinkEgressBytes?: number;
  /**
  * GTPv2-C Uplink Egress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_uplink_egress_packets DataThunderFwGtpStats#gtp_v2_c_uplink_egress_packets}
  */
  readonly gtpV2CUplinkEgressPackets?: number;
  /**
  * GTPv2-C Uplink Ingress Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_uplink_ingress_bytes DataThunderFwGtpStats#gtp_v2_c_uplink_ingress_bytes}
  */
  readonly gtpV2CUplinkIngressBytes?: number;
  /**
  * GTPv2-C Uplink Ingress Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#gtp_v2_c_uplink_ingress_packets DataThunderFwGtpStats#gtp_v2_c_uplink_ingress_packets}
  */
  readonly gtpV2CUplinkIngressPackets?: number;
  /**
  * No Forward Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#no_fwd_route DataThunderFwGtpStats#no_fwd_route}
  */
  readonly noFwdRoute?: number;
  /**
  * No Reverse Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#no_rev_route DataThunderFwGtpStats#no_rev_route}
  */
  readonly noRevRoute?: number;
  /**
  * Out of Tunnel Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#out_of_session_memory DataThunderFwGtpStats#out_of_session_memory}
  */
  readonly outOfSessionMemory?: number;
}

export function dataThunderFwGtpStatsStatsToTerraform(struct?: DataThunderFwGtpStatsStatsOutputReference | DataThunderFwGtpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_gtp_bearer_not_found_in_resp: cdktf.numberToTerraform(struct!.dropGtpBearerNotFoundInResp),
    drop_gtp_frag_or_jumbo_pkt: cdktf.numberToTerraform(struct!.dropGtpFragOrJumboPkt),
    drop_gtp_missing_cond_ie_bearer_ctx: cdktf.numberToTerraform(struct!.dropGtpMissingCondIeBearerCtx),
    drop_vld_gtp_echo_ie_len_exceed_msg_len: cdktf.numberToTerraform(struct!.dropVldGtpEchoIeLenExceedMsgLen),
    drop_vld_gtp_echo_out_of_state_: cdktf.numberToTerraform(struct!.dropVldGtpEchoOutOfState),
    gtp_add_bearer_response_retransmit: cdktf.numberToTerraform(struct!.gtpAddBearerResponseRetransmit),
    gtp_c_echo_path_failure: cdktf.numberToTerraform(struct!.gtpCEchoPathFailure),
    gtp_c_handover_in_progress_with_conn: cdktf.numberToTerraform(struct!.gtpCHandoverInProgressWithConn),
    gtp_c_handover_request_out_of_state_drop: cdktf.numberToTerraform(struct!.gtpCHandoverRequestOutOfStateDrop),
    gtp_c_ref_count_smp_exceeded: cdktf.numberToTerraform(struct!.gtpCRefCountSmpExceeded),
    gtp_del_bearer_request_retransmit: cdktf.numberToTerraform(struct!.gtpDelBearerRequestRetransmit),
    gtp_monitor_forward: cdktf.numberToTerraform(struct!.gtpMonitorForward),
    gtp_node_restart_echo: cdktf.numberToTerraform(struct!.gtpNodeRestartEcho),
    gtp_path_message_length_mismatch: cdktf.numberToTerraform(struct!.gtpPathMessageLengthMismatch),
    gtp_rate_limit_entry_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitEntryCreateFailure),
    gtp_rate_limit_smp_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitSmpCreateFailure),
    gtp_rate_limit_t3_ctr_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitT3CtrCreateFailure),
    gtp_rr_message_drop: cdktf.numberToTerraform(struct!.gtpRrMessageDrop),
    gtp_smp_check_failed: cdktf.numberToTerraform(struct!.gtpSmpCheckFailed),
    gtp_smp_dec_sess_count_check_failed: cdktf.numberToTerraform(struct!.gtpSmpDecSessCountCheckFailed),
    gtp_smp_path_check_failed: cdktf.numberToTerraform(struct!.gtpSmpPathCheckFailed),
    gtp_smp_session_count_check_failed: cdktf.numberToTerraform(struct!.gtpSmpSessionCountCheckFailed),
    gtp_stateless_forward: cdktf.numberToTerraform(struct!.gtpStatelessForward),
    gtp_tunnel_rate_limit_entry_create_failure: cdktf.numberToTerraform(struct!.gtpTunnelRateLimitEntryCreateFailure),
    gtp_u_downlink_egress_bytes: cdktf.numberToTerraform(struct!.gtpUDownlinkEgressBytes),
    gtp_u_downlink_egress_packets: cdktf.numberToTerraform(struct!.gtpUDownlinkEgressPackets),
    gtp_u_downlink_ingress_bytes: cdktf.numberToTerraform(struct!.gtpUDownlinkIngressBytes),
    gtp_u_downlink_ingress_packets: cdktf.numberToTerraform(struct!.gtpUDownlinkIngressPackets),
    gtp_u_message_length_mismatch: cdktf.numberToTerraform(struct!.gtpUMessageLengthMismatch),
    gtp_u_out_of_state_drop: cdktf.numberToTerraform(struct!.gtpUOutOfStateDrop),
    gtp_u_smp_in_rml_with_sess: cdktf.numberToTerraform(struct!.gtpUSmpInRmlWithSess),
    gtp_u_uplink_egress_bytes: cdktf.numberToTerraform(struct!.gtpUUplinkEgressBytes),
    gtp_u_uplink_egress_packets: cdktf.numberToTerraform(struct!.gtpUUplinkEgressPackets),
    gtp_u_uplink_ingress_bytes: cdktf.numberToTerraform(struct!.gtpUUplinkIngressBytes),
    gtp_u_uplink_ingress_packets: cdktf.numberToTerraform(struct!.gtpUUplinkIngressPackets),
    gtp_v0_c_downlink_egress_bytes: cdktf.numberToTerraform(struct!.gtpV0CDownlinkEgressBytes),
    gtp_v0_c_downlink_egress_packets: cdktf.numberToTerraform(struct!.gtpV0CDownlinkEgressPackets),
    gtp_v0_c_downlink_ingress_bytes: cdktf.numberToTerraform(struct!.gtpV0CDownlinkIngressBytes),
    gtp_v0_c_downlink_ingress_packets: cdktf.numberToTerraform(struct!.gtpV0CDownlinkIngressPackets),
    gtp_v0_c_uplink_egress_bytes: cdktf.numberToTerraform(struct!.gtpV0CUplinkEgressBytes),
    gtp_v0_c_uplink_egress_packets: cdktf.numberToTerraform(struct!.gtpV0CUplinkEgressPackets),
    gtp_v0_c_uplink_ingress_bytes: cdktf.numberToTerraform(struct!.gtpV0CUplinkIngressBytes),
    gtp_v0_c_uplink_ingress_packets: cdktf.numberToTerraform(struct!.gtpV0CUplinkIngressPackets),
    gtp_v1_c_downlink_egress_bytes: cdktf.numberToTerraform(struct!.gtpV1CDownlinkEgressBytes),
    gtp_v1_c_downlink_egress_packets: cdktf.numberToTerraform(struct!.gtpV1CDownlinkEgressPackets),
    gtp_v1_c_downlink_ingress_bytes: cdktf.numberToTerraform(struct!.gtpV1CDownlinkIngressBytes),
    gtp_v1_c_downlink_ingress_packets: cdktf.numberToTerraform(struct!.gtpV1CDownlinkIngressPackets),
    gtp_v1_c_nsapi_not_found_in_delete_req: cdktf.numberToTerraform(struct!.gtpV1CNsapiNotFoundInDeleteReq),
    gtp_v1_c_uplink_egress_bytes: cdktf.numberToTerraform(struct!.gtpV1CUplinkEgressBytes),
    gtp_v1_c_uplink_egress_packets: cdktf.numberToTerraform(struct!.gtpV1CUplinkEgressPackets),
    gtp_v1_c_uplink_ingress_bytes: cdktf.numberToTerraform(struct!.gtpV1CUplinkIngressBytes),
    gtp_v1_c_uplink_ingress_packets: cdktf.numberToTerraform(struct!.gtpV1CUplinkIngressPackets),
    gtp_v2_c_bearer_not_found_in_delete_req: cdktf.numberToTerraform(struct!.gtpV2CBearerNotFoundInDeleteReq),
    gtp_v2_c_bearer_not_found_in_delete_resp: cdktf.numberToTerraform(struct!.gtpV2CBearerNotFoundInDeleteResp),
    gtp_v2_c_downlink_egress_bytes: cdktf.numberToTerraform(struct!.gtpV2CDownlinkEgressBytes),
    gtp_v2_c_downlink_egress_packets: cdktf.numberToTerraform(struct!.gtpV2CDownlinkEgressPackets),
    gtp_v2_c_downlink_ingress_bytes: cdktf.numberToTerraform(struct!.gtpV2CDownlinkIngressBytes),
    gtp_v2_c_downlink_ingress_packets: cdktf.numberToTerraform(struct!.gtpV2CDownlinkIngressPackets),
    gtp_v2_c_uplink_egress_bytes: cdktf.numberToTerraform(struct!.gtpV2CUplinkEgressBytes),
    gtp_v2_c_uplink_egress_packets: cdktf.numberToTerraform(struct!.gtpV2CUplinkEgressPackets),
    gtp_v2_c_uplink_ingress_bytes: cdktf.numberToTerraform(struct!.gtpV2CUplinkIngressBytes),
    gtp_v2_c_uplink_ingress_packets: cdktf.numberToTerraform(struct!.gtpV2CUplinkIngressPackets),
    no_fwd_route: cdktf.numberToTerraform(struct!.noFwdRoute),
    no_rev_route: cdktf.numberToTerraform(struct!.noRevRoute),
    out_of_session_memory: cdktf.numberToTerraform(struct!.outOfSessionMemory),
  }
}


export function dataThunderFwGtpStatsStatsToHclTerraform(struct?: DataThunderFwGtpStatsStatsOutputReference | DataThunderFwGtpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_gtp_bearer_not_found_in_resp: {
      value: cdktf.numberToHclTerraform(struct!.dropGtpBearerNotFoundInResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_gtp_frag_or_jumbo_pkt: {
      value: cdktf.numberToHclTerraform(struct!.dropGtpFragOrJumboPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_gtp_missing_cond_ie_bearer_ctx: {
      value: cdktf.numberToHclTerraform(struct!.dropGtpMissingCondIeBearerCtx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_echo_ie_len_exceed_msg_len: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpEchoIeLenExceedMsgLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_vld_gtp_echo_out_of_state_: {
      value: cdktf.numberToHclTerraform(struct!.dropVldGtpEchoOutOfState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_add_bearer_response_retransmit: {
      value: cdktf.numberToHclTerraform(struct!.gtpAddBearerResponseRetransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_echo_path_failure: {
      value: cdktf.numberToHclTerraform(struct!.gtpCEchoPathFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_handover_in_progress_with_conn: {
      value: cdktf.numberToHclTerraform(struct!.gtpCHandoverInProgressWithConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_handover_request_out_of_state_drop: {
      value: cdktf.numberToHclTerraform(struct!.gtpCHandoverRequestOutOfStateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_ref_count_smp_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.gtpCRefCountSmpExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_del_bearer_request_retransmit: {
      value: cdktf.numberToHclTerraform(struct!.gtpDelBearerRequestRetransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_monitor_forward: {
      value: cdktf.numberToHclTerraform(struct!.gtpMonitorForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_node_restart_echo: {
      value: cdktf.numberToHclTerraform(struct!.gtpNodeRestartEcho),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_path_message_length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.gtpPathMessageLengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_rate_limit_entry_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.gtpRateLimitEntryCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_rate_limit_smp_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.gtpRateLimitSmpCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_rate_limit_t3_ctr_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.gtpRateLimitT3CtrCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_rr_message_drop: {
      value: cdktf.numberToHclTerraform(struct!.gtpRrMessageDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_smp_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_smp_dec_sess_count_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpDecSessCountCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_smp_path_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpPathCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_smp_session_count_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpSessionCountCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_stateless_forward: {
      value: cdktf.numberToHclTerraform(struct!.gtpStatelessForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_tunnel_rate_limit_entry_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.gtpTunnelRateLimitEntryCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_downlink_egress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpUDownlinkEgressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_downlink_egress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpUDownlinkEgressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_downlink_ingress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpUDownlinkIngressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_downlink_ingress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpUDownlinkIngressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_message_length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.gtpUMessageLengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_out_of_state_drop: {
      value: cdktf.numberToHclTerraform(struct!.gtpUOutOfStateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_smp_in_rml_with_sess: {
      value: cdktf.numberToHclTerraform(struct!.gtpUSmpInRmlWithSess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_uplink_egress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpUUplinkEgressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_uplink_egress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpUUplinkEgressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_uplink_ingress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpUUplinkIngressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_uplink_ingress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpUUplinkIngressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_downlink_egress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CDownlinkEgressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_downlink_egress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CDownlinkEgressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_downlink_ingress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CDownlinkIngressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_downlink_ingress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CDownlinkIngressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_uplink_egress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CUplinkEgressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_uplink_egress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CUplinkEgressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_uplink_ingress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CUplinkIngressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v0_c_uplink_ingress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpV0CUplinkIngressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_downlink_egress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CDownlinkEgressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_downlink_egress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CDownlinkEgressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_downlink_ingress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CDownlinkIngressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_downlink_ingress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CDownlinkIngressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_nsapi_not_found_in_delete_req: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CNsapiNotFoundInDeleteReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_uplink_egress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CUplinkEgressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_uplink_egress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CUplinkEgressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_uplink_ingress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CUplinkIngressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v1_c_uplink_ingress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpV1CUplinkIngressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_bearer_not_found_in_delete_req: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CBearerNotFoundInDeleteReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_bearer_not_found_in_delete_resp: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CBearerNotFoundInDeleteResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_downlink_egress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CDownlinkEgressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_downlink_egress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CDownlinkEgressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_downlink_ingress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CDownlinkIngressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_downlink_ingress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CDownlinkIngressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_uplink_egress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CUplinkEgressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_uplink_egress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CUplinkEgressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_uplink_ingress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CUplinkIngressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_v2_c_uplink_ingress_packets: {
      value: cdktf.numberToHclTerraform(struct!.gtpV2CUplinkIngressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_fwd_route: {
      value: cdktf.numberToHclTerraform(struct!.noFwdRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_rev_route: {
      value: cdktf.numberToHclTerraform(struct!.noRevRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_session_memory: {
      value: cdktf.numberToHclTerraform(struct!.outOfSessionMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwGtpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwGtpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropGtpBearerNotFoundInResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropGtpBearerNotFoundInResp = this._dropGtpBearerNotFoundInResp;
    }
    if (this._dropGtpFragOrJumboPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropGtpFragOrJumboPkt = this._dropGtpFragOrJumboPkt;
    }
    if (this._dropGtpMissingCondIeBearerCtx !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropGtpMissingCondIeBearerCtx = this._dropGtpMissingCondIeBearerCtx;
    }
    if (this._dropVldGtpEchoIeLenExceedMsgLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpEchoIeLenExceedMsgLen = this._dropVldGtpEchoIeLenExceedMsgLen;
    }
    if (this._dropVldGtpEchoOutOfState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVldGtpEchoOutOfState = this._dropVldGtpEchoOutOfState;
    }
    if (this._gtpAddBearerResponseRetransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpAddBearerResponseRetransmit = this._gtpAddBearerResponseRetransmit;
    }
    if (this._gtpCEchoPathFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCEchoPathFailure = this._gtpCEchoPathFailure;
    }
    if (this._gtpCHandoverInProgressWithConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCHandoverInProgressWithConn = this._gtpCHandoverInProgressWithConn;
    }
    if (this._gtpCHandoverRequestOutOfStateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCHandoverRequestOutOfStateDrop = this._gtpCHandoverRequestOutOfStateDrop;
    }
    if (this._gtpCRefCountSmpExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCRefCountSmpExceeded = this._gtpCRefCountSmpExceeded;
    }
    if (this._gtpDelBearerRequestRetransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpDelBearerRequestRetransmit = this._gtpDelBearerRequestRetransmit;
    }
    if (this._gtpMonitorForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpMonitorForward = this._gtpMonitorForward;
    }
    if (this._gtpNodeRestartEcho !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpNodeRestartEcho = this._gtpNodeRestartEcho;
    }
    if (this._gtpPathMessageLengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpPathMessageLengthMismatch = this._gtpPathMessageLengthMismatch;
    }
    if (this._gtpRateLimitEntryCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRateLimitEntryCreateFailure = this._gtpRateLimitEntryCreateFailure;
    }
    if (this._gtpRateLimitSmpCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRateLimitSmpCreateFailure = this._gtpRateLimitSmpCreateFailure;
    }
    if (this._gtpRateLimitT3CtrCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRateLimitT3CtrCreateFailure = this._gtpRateLimitT3CtrCreateFailure;
    }
    if (this._gtpRrMessageDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRrMessageDrop = this._gtpRrMessageDrop;
    }
    if (this._gtpSmpCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpCheckFailed = this._gtpSmpCheckFailed;
    }
    if (this._gtpSmpDecSessCountCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpDecSessCountCheckFailed = this._gtpSmpDecSessCountCheckFailed;
    }
    if (this._gtpSmpPathCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpPathCheckFailed = this._gtpSmpPathCheckFailed;
    }
    if (this._gtpSmpSessionCountCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpSessionCountCheckFailed = this._gtpSmpSessionCountCheckFailed;
    }
    if (this._gtpStatelessForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpStatelessForward = this._gtpStatelessForward;
    }
    if (this._gtpTunnelRateLimitEntryCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpTunnelRateLimitEntryCreateFailure = this._gtpTunnelRateLimitEntryCreateFailure;
    }
    if (this._gtpUDownlinkEgressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUDownlinkEgressBytes = this._gtpUDownlinkEgressBytes;
    }
    if (this._gtpUDownlinkEgressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUDownlinkEgressPackets = this._gtpUDownlinkEgressPackets;
    }
    if (this._gtpUDownlinkIngressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUDownlinkIngressBytes = this._gtpUDownlinkIngressBytes;
    }
    if (this._gtpUDownlinkIngressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUDownlinkIngressPackets = this._gtpUDownlinkIngressPackets;
    }
    if (this._gtpUMessageLengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUMessageLengthMismatch = this._gtpUMessageLengthMismatch;
    }
    if (this._gtpUOutOfStateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUOutOfStateDrop = this._gtpUOutOfStateDrop;
    }
    if (this._gtpUSmpInRmlWithSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUSmpInRmlWithSess = this._gtpUSmpInRmlWithSess;
    }
    if (this._gtpUUplinkEgressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUUplinkEgressBytes = this._gtpUUplinkEgressBytes;
    }
    if (this._gtpUUplinkEgressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUUplinkEgressPackets = this._gtpUUplinkEgressPackets;
    }
    if (this._gtpUUplinkIngressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUUplinkIngressBytes = this._gtpUUplinkIngressBytes;
    }
    if (this._gtpUUplinkIngressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUUplinkIngressPackets = this._gtpUUplinkIngressPackets;
    }
    if (this._gtpV0CDownlinkEgressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CDownlinkEgressBytes = this._gtpV0CDownlinkEgressBytes;
    }
    if (this._gtpV0CDownlinkEgressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CDownlinkEgressPackets = this._gtpV0CDownlinkEgressPackets;
    }
    if (this._gtpV0CDownlinkIngressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CDownlinkIngressBytes = this._gtpV0CDownlinkIngressBytes;
    }
    if (this._gtpV0CDownlinkIngressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CDownlinkIngressPackets = this._gtpV0CDownlinkIngressPackets;
    }
    if (this._gtpV0CUplinkEgressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CUplinkEgressBytes = this._gtpV0CUplinkEgressBytes;
    }
    if (this._gtpV0CUplinkEgressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CUplinkEgressPackets = this._gtpV0CUplinkEgressPackets;
    }
    if (this._gtpV0CUplinkIngressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CUplinkIngressBytes = this._gtpV0CUplinkIngressBytes;
    }
    if (this._gtpV0CUplinkIngressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV0CUplinkIngressPackets = this._gtpV0CUplinkIngressPackets;
    }
    if (this._gtpV1CDownlinkEgressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CDownlinkEgressBytes = this._gtpV1CDownlinkEgressBytes;
    }
    if (this._gtpV1CDownlinkEgressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CDownlinkEgressPackets = this._gtpV1CDownlinkEgressPackets;
    }
    if (this._gtpV1CDownlinkIngressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CDownlinkIngressBytes = this._gtpV1CDownlinkIngressBytes;
    }
    if (this._gtpV1CDownlinkIngressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CDownlinkIngressPackets = this._gtpV1CDownlinkIngressPackets;
    }
    if (this._gtpV1CNsapiNotFoundInDeleteReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CNsapiNotFoundInDeleteReq = this._gtpV1CNsapiNotFoundInDeleteReq;
    }
    if (this._gtpV1CUplinkEgressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CUplinkEgressBytes = this._gtpV1CUplinkEgressBytes;
    }
    if (this._gtpV1CUplinkEgressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CUplinkEgressPackets = this._gtpV1CUplinkEgressPackets;
    }
    if (this._gtpV1CUplinkIngressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CUplinkIngressBytes = this._gtpV1CUplinkIngressBytes;
    }
    if (this._gtpV1CUplinkIngressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV1CUplinkIngressPackets = this._gtpV1CUplinkIngressPackets;
    }
    if (this._gtpV2CBearerNotFoundInDeleteReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CBearerNotFoundInDeleteReq = this._gtpV2CBearerNotFoundInDeleteReq;
    }
    if (this._gtpV2CBearerNotFoundInDeleteResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CBearerNotFoundInDeleteResp = this._gtpV2CBearerNotFoundInDeleteResp;
    }
    if (this._gtpV2CDownlinkEgressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CDownlinkEgressBytes = this._gtpV2CDownlinkEgressBytes;
    }
    if (this._gtpV2CDownlinkEgressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CDownlinkEgressPackets = this._gtpV2CDownlinkEgressPackets;
    }
    if (this._gtpV2CDownlinkIngressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CDownlinkIngressBytes = this._gtpV2CDownlinkIngressBytes;
    }
    if (this._gtpV2CDownlinkIngressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CDownlinkIngressPackets = this._gtpV2CDownlinkIngressPackets;
    }
    if (this._gtpV2CUplinkEgressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CUplinkEgressBytes = this._gtpV2CUplinkEgressBytes;
    }
    if (this._gtpV2CUplinkEgressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CUplinkEgressPackets = this._gtpV2CUplinkEgressPackets;
    }
    if (this._gtpV2CUplinkIngressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CUplinkIngressBytes = this._gtpV2CUplinkIngressBytes;
    }
    if (this._gtpV2CUplinkIngressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpV2CUplinkIngressPackets = this._gtpV2CUplinkIngressPackets;
    }
    if (this._noFwdRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFwdRoute = this._noFwdRoute;
    }
    if (this._noRevRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRevRoute = this._noRevRoute;
    }
    if (this._outOfSessionMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfSessionMemory = this._outOfSessionMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwGtpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropGtpBearerNotFoundInResp = undefined;
      this._dropGtpFragOrJumboPkt = undefined;
      this._dropGtpMissingCondIeBearerCtx = undefined;
      this._dropVldGtpEchoIeLenExceedMsgLen = undefined;
      this._dropVldGtpEchoOutOfState = undefined;
      this._gtpAddBearerResponseRetransmit = undefined;
      this._gtpCEchoPathFailure = undefined;
      this._gtpCHandoverInProgressWithConn = undefined;
      this._gtpCHandoverRequestOutOfStateDrop = undefined;
      this._gtpCRefCountSmpExceeded = undefined;
      this._gtpDelBearerRequestRetransmit = undefined;
      this._gtpMonitorForward = undefined;
      this._gtpNodeRestartEcho = undefined;
      this._gtpPathMessageLengthMismatch = undefined;
      this._gtpRateLimitEntryCreateFailure = undefined;
      this._gtpRateLimitSmpCreateFailure = undefined;
      this._gtpRateLimitT3CtrCreateFailure = undefined;
      this._gtpRrMessageDrop = undefined;
      this._gtpSmpCheckFailed = undefined;
      this._gtpSmpDecSessCountCheckFailed = undefined;
      this._gtpSmpPathCheckFailed = undefined;
      this._gtpSmpSessionCountCheckFailed = undefined;
      this._gtpStatelessForward = undefined;
      this._gtpTunnelRateLimitEntryCreateFailure = undefined;
      this._gtpUDownlinkEgressBytes = undefined;
      this._gtpUDownlinkEgressPackets = undefined;
      this._gtpUDownlinkIngressBytes = undefined;
      this._gtpUDownlinkIngressPackets = undefined;
      this._gtpUMessageLengthMismatch = undefined;
      this._gtpUOutOfStateDrop = undefined;
      this._gtpUSmpInRmlWithSess = undefined;
      this._gtpUUplinkEgressBytes = undefined;
      this._gtpUUplinkEgressPackets = undefined;
      this._gtpUUplinkIngressBytes = undefined;
      this._gtpUUplinkIngressPackets = undefined;
      this._gtpV0CDownlinkEgressBytes = undefined;
      this._gtpV0CDownlinkEgressPackets = undefined;
      this._gtpV0CDownlinkIngressBytes = undefined;
      this._gtpV0CDownlinkIngressPackets = undefined;
      this._gtpV0CUplinkEgressBytes = undefined;
      this._gtpV0CUplinkEgressPackets = undefined;
      this._gtpV0CUplinkIngressBytes = undefined;
      this._gtpV0CUplinkIngressPackets = undefined;
      this._gtpV1CDownlinkEgressBytes = undefined;
      this._gtpV1CDownlinkEgressPackets = undefined;
      this._gtpV1CDownlinkIngressBytes = undefined;
      this._gtpV1CDownlinkIngressPackets = undefined;
      this._gtpV1CNsapiNotFoundInDeleteReq = undefined;
      this._gtpV1CUplinkEgressBytes = undefined;
      this._gtpV1CUplinkEgressPackets = undefined;
      this._gtpV1CUplinkIngressBytes = undefined;
      this._gtpV1CUplinkIngressPackets = undefined;
      this._gtpV2CBearerNotFoundInDeleteReq = undefined;
      this._gtpV2CBearerNotFoundInDeleteResp = undefined;
      this._gtpV2CDownlinkEgressBytes = undefined;
      this._gtpV2CDownlinkEgressPackets = undefined;
      this._gtpV2CDownlinkIngressBytes = undefined;
      this._gtpV2CDownlinkIngressPackets = undefined;
      this._gtpV2CUplinkEgressBytes = undefined;
      this._gtpV2CUplinkEgressPackets = undefined;
      this._gtpV2CUplinkIngressBytes = undefined;
      this._gtpV2CUplinkIngressPackets = undefined;
      this._noFwdRoute = undefined;
      this._noRevRoute = undefined;
      this._outOfSessionMemory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropGtpBearerNotFoundInResp = value.dropGtpBearerNotFoundInResp;
      this._dropGtpFragOrJumboPkt = value.dropGtpFragOrJumboPkt;
      this._dropGtpMissingCondIeBearerCtx = value.dropGtpMissingCondIeBearerCtx;
      this._dropVldGtpEchoIeLenExceedMsgLen = value.dropVldGtpEchoIeLenExceedMsgLen;
      this._dropVldGtpEchoOutOfState = value.dropVldGtpEchoOutOfState;
      this._gtpAddBearerResponseRetransmit = value.gtpAddBearerResponseRetransmit;
      this._gtpCEchoPathFailure = value.gtpCEchoPathFailure;
      this._gtpCHandoverInProgressWithConn = value.gtpCHandoverInProgressWithConn;
      this._gtpCHandoverRequestOutOfStateDrop = value.gtpCHandoverRequestOutOfStateDrop;
      this._gtpCRefCountSmpExceeded = value.gtpCRefCountSmpExceeded;
      this._gtpDelBearerRequestRetransmit = value.gtpDelBearerRequestRetransmit;
      this._gtpMonitorForward = value.gtpMonitorForward;
      this._gtpNodeRestartEcho = value.gtpNodeRestartEcho;
      this._gtpPathMessageLengthMismatch = value.gtpPathMessageLengthMismatch;
      this._gtpRateLimitEntryCreateFailure = value.gtpRateLimitEntryCreateFailure;
      this._gtpRateLimitSmpCreateFailure = value.gtpRateLimitSmpCreateFailure;
      this._gtpRateLimitT3CtrCreateFailure = value.gtpRateLimitT3CtrCreateFailure;
      this._gtpRrMessageDrop = value.gtpRrMessageDrop;
      this._gtpSmpCheckFailed = value.gtpSmpCheckFailed;
      this._gtpSmpDecSessCountCheckFailed = value.gtpSmpDecSessCountCheckFailed;
      this._gtpSmpPathCheckFailed = value.gtpSmpPathCheckFailed;
      this._gtpSmpSessionCountCheckFailed = value.gtpSmpSessionCountCheckFailed;
      this._gtpStatelessForward = value.gtpStatelessForward;
      this._gtpTunnelRateLimitEntryCreateFailure = value.gtpTunnelRateLimitEntryCreateFailure;
      this._gtpUDownlinkEgressBytes = value.gtpUDownlinkEgressBytes;
      this._gtpUDownlinkEgressPackets = value.gtpUDownlinkEgressPackets;
      this._gtpUDownlinkIngressBytes = value.gtpUDownlinkIngressBytes;
      this._gtpUDownlinkIngressPackets = value.gtpUDownlinkIngressPackets;
      this._gtpUMessageLengthMismatch = value.gtpUMessageLengthMismatch;
      this._gtpUOutOfStateDrop = value.gtpUOutOfStateDrop;
      this._gtpUSmpInRmlWithSess = value.gtpUSmpInRmlWithSess;
      this._gtpUUplinkEgressBytes = value.gtpUUplinkEgressBytes;
      this._gtpUUplinkEgressPackets = value.gtpUUplinkEgressPackets;
      this._gtpUUplinkIngressBytes = value.gtpUUplinkIngressBytes;
      this._gtpUUplinkIngressPackets = value.gtpUUplinkIngressPackets;
      this._gtpV0CDownlinkEgressBytes = value.gtpV0CDownlinkEgressBytes;
      this._gtpV0CDownlinkEgressPackets = value.gtpV0CDownlinkEgressPackets;
      this._gtpV0CDownlinkIngressBytes = value.gtpV0CDownlinkIngressBytes;
      this._gtpV0CDownlinkIngressPackets = value.gtpV0CDownlinkIngressPackets;
      this._gtpV0CUplinkEgressBytes = value.gtpV0CUplinkEgressBytes;
      this._gtpV0CUplinkEgressPackets = value.gtpV0CUplinkEgressPackets;
      this._gtpV0CUplinkIngressBytes = value.gtpV0CUplinkIngressBytes;
      this._gtpV0CUplinkIngressPackets = value.gtpV0CUplinkIngressPackets;
      this._gtpV1CDownlinkEgressBytes = value.gtpV1CDownlinkEgressBytes;
      this._gtpV1CDownlinkEgressPackets = value.gtpV1CDownlinkEgressPackets;
      this._gtpV1CDownlinkIngressBytes = value.gtpV1CDownlinkIngressBytes;
      this._gtpV1CDownlinkIngressPackets = value.gtpV1CDownlinkIngressPackets;
      this._gtpV1CNsapiNotFoundInDeleteReq = value.gtpV1CNsapiNotFoundInDeleteReq;
      this._gtpV1CUplinkEgressBytes = value.gtpV1CUplinkEgressBytes;
      this._gtpV1CUplinkEgressPackets = value.gtpV1CUplinkEgressPackets;
      this._gtpV1CUplinkIngressBytes = value.gtpV1CUplinkIngressBytes;
      this._gtpV1CUplinkIngressPackets = value.gtpV1CUplinkIngressPackets;
      this._gtpV2CBearerNotFoundInDeleteReq = value.gtpV2CBearerNotFoundInDeleteReq;
      this._gtpV2CBearerNotFoundInDeleteResp = value.gtpV2CBearerNotFoundInDeleteResp;
      this._gtpV2CDownlinkEgressBytes = value.gtpV2CDownlinkEgressBytes;
      this._gtpV2CDownlinkEgressPackets = value.gtpV2CDownlinkEgressPackets;
      this._gtpV2CDownlinkIngressBytes = value.gtpV2CDownlinkIngressBytes;
      this._gtpV2CDownlinkIngressPackets = value.gtpV2CDownlinkIngressPackets;
      this._gtpV2CUplinkEgressBytes = value.gtpV2CUplinkEgressBytes;
      this._gtpV2CUplinkEgressPackets = value.gtpV2CUplinkEgressPackets;
      this._gtpV2CUplinkIngressBytes = value.gtpV2CUplinkIngressBytes;
      this._gtpV2CUplinkIngressPackets = value.gtpV2CUplinkIngressPackets;
      this._noFwdRoute = value.noFwdRoute;
      this._noRevRoute = value.noRevRoute;
      this._outOfSessionMemory = value.outOfSessionMemory;
    }
  }

  // drop_gtp_bearer_not_found_in_resp - computed: false, optional: true, required: false
  private _dropGtpBearerNotFoundInResp?: number; 
  public get dropGtpBearerNotFoundInResp() {
    return this.getNumberAttribute('drop_gtp_bearer_not_found_in_resp');
  }
  public set dropGtpBearerNotFoundInResp(value: number) {
    this._dropGtpBearerNotFoundInResp = value;
  }
  public resetDropGtpBearerNotFoundInResp() {
    this._dropGtpBearerNotFoundInResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropGtpBearerNotFoundInRespInput() {
    return this._dropGtpBearerNotFoundInResp;
  }

  // drop_gtp_frag_or_jumbo_pkt - computed: false, optional: true, required: false
  private _dropGtpFragOrJumboPkt?: number; 
  public get dropGtpFragOrJumboPkt() {
    return this.getNumberAttribute('drop_gtp_frag_or_jumbo_pkt');
  }
  public set dropGtpFragOrJumboPkt(value: number) {
    this._dropGtpFragOrJumboPkt = value;
  }
  public resetDropGtpFragOrJumboPkt() {
    this._dropGtpFragOrJumboPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropGtpFragOrJumboPktInput() {
    return this._dropGtpFragOrJumboPkt;
  }

  // drop_gtp_missing_cond_ie_bearer_ctx - computed: false, optional: true, required: false
  private _dropGtpMissingCondIeBearerCtx?: number; 
  public get dropGtpMissingCondIeBearerCtx() {
    return this.getNumberAttribute('drop_gtp_missing_cond_ie_bearer_ctx');
  }
  public set dropGtpMissingCondIeBearerCtx(value: number) {
    this._dropGtpMissingCondIeBearerCtx = value;
  }
  public resetDropGtpMissingCondIeBearerCtx() {
    this._dropGtpMissingCondIeBearerCtx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropGtpMissingCondIeBearerCtxInput() {
    return this._dropGtpMissingCondIeBearerCtx;
  }

  // drop_vld_gtp_echo_ie_len_exceed_msg_len - computed: false, optional: true, required: false
  private _dropVldGtpEchoIeLenExceedMsgLen?: number; 
  public get dropVldGtpEchoIeLenExceedMsgLen() {
    return this.getNumberAttribute('drop_vld_gtp_echo_ie_len_exceed_msg_len');
  }
  public set dropVldGtpEchoIeLenExceedMsgLen(value: number) {
    this._dropVldGtpEchoIeLenExceedMsgLen = value;
  }
  public resetDropVldGtpEchoIeLenExceedMsgLen() {
    this._dropVldGtpEchoIeLenExceedMsgLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpEchoIeLenExceedMsgLenInput() {
    return this._dropVldGtpEchoIeLenExceedMsgLen;
  }

  // drop_vld_gtp_echo_out_of_state_ - computed: false, optional: true, required: false
  private _dropVldGtpEchoOutOfState?: number; 
  public get dropVldGtpEchoOutOfState() {
    return this.getNumberAttribute('drop_vld_gtp_echo_out_of_state_');
  }
  public set dropVldGtpEchoOutOfState(value: number) {
    this._dropVldGtpEchoOutOfState = value;
  }
  public resetDropVldGtpEchoOutOfState() {
    this._dropVldGtpEchoOutOfState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVldGtpEchoOutOfStateInput() {
    return this._dropVldGtpEchoOutOfState;
  }

  // gtp_add_bearer_response_retransmit - computed: false, optional: true, required: false
  private _gtpAddBearerResponseRetransmit?: number; 
  public get gtpAddBearerResponseRetransmit() {
    return this.getNumberAttribute('gtp_add_bearer_response_retransmit');
  }
  public set gtpAddBearerResponseRetransmit(value: number) {
    this._gtpAddBearerResponseRetransmit = value;
  }
  public resetGtpAddBearerResponseRetransmit() {
    this._gtpAddBearerResponseRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpAddBearerResponseRetransmitInput() {
    return this._gtpAddBearerResponseRetransmit;
  }

  // gtp_c_echo_path_failure - computed: false, optional: true, required: false
  private _gtpCEchoPathFailure?: number; 
  public get gtpCEchoPathFailure() {
    return this.getNumberAttribute('gtp_c_echo_path_failure');
  }
  public set gtpCEchoPathFailure(value: number) {
    this._gtpCEchoPathFailure = value;
  }
  public resetGtpCEchoPathFailure() {
    this._gtpCEchoPathFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCEchoPathFailureInput() {
    return this._gtpCEchoPathFailure;
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

  // gtp_c_handover_request_out_of_state_drop - computed: false, optional: true, required: false
  private _gtpCHandoverRequestOutOfStateDrop?: number; 
  public get gtpCHandoverRequestOutOfStateDrop() {
    return this.getNumberAttribute('gtp_c_handover_request_out_of_state_drop');
  }
  public set gtpCHandoverRequestOutOfStateDrop(value: number) {
    this._gtpCHandoverRequestOutOfStateDrop = value;
  }
  public resetGtpCHandoverRequestOutOfStateDrop() {
    this._gtpCHandoverRequestOutOfStateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCHandoverRequestOutOfStateDropInput() {
    return this._gtpCHandoverRequestOutOfStateDrop;
  }

  // gtp_c_ref_count_smp_exceeded - computed: false, optional: true, required: false
  private _gtpCRefCountSmpExceeded?: number; 
  public get gtpCRefCountSmpExceeded() {
    return this.getNumberAttribute('gtp_c_ref_count_smp_exceeded');
  }
  public set gtpCRefCountSmpExceeded(value: number) {
    this._gtpCRefCountSmpExceeded = value;
  }
  public resetGtpCRefCountSmpExceeded() {
    this._gtpCRefCountSmpExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCRefCountSmpExceededInput() {
    return this._gtpCRefCountSmpExceeded;
  }

  // gtp_del_bearer_request_retransmit - computed: false, optional: true, required: false
  private _gtpDelBearerRequestRetransmit?: number; 
  public get gtpDelBearerRequestRetransmit() {
    return this.getNumberAttribute('gtp_del_bearer_request_retransmit');
  }
  public set gtpDelBearerRequestRetransmit(value: number) {
    this._gtpDelBearerRequestRetransmit = value;
  }
  public resetGtpDelBearerRequestRetransmit() {
    this._gtpDelBearerRequestRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpDelBearerRequestRetransmitInput() {
    return this._gtpDelBearerRequestRetransmit;
  }

  // gtp_monitor_forward - computed: false, optional: true, required: false
  private _gtpMonitorForward?: number; 
  public get gtpMonitorForward() {
    return this.getNumberAttribute('gtp_monitor_forward');
  }
  public set gtpMonitorForward(value: number) {
    this._gtpMonitorForward = value;
  }
  public resetGtpMonitorForward() {
    this._gtpMonitorForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpMonitorForwardInput() {
    return this._gtpMonitorForward;
  }

  // gtp_node_restart_echo - computed: false, optional: true, required: false
  private _gtpNodeRestartEcho?: number; 
  public get gtpNodeRestartEcho() {
    return this.getNumberAttribute('gtp_node_restart_echo');
  }
  public set gtpNodeRestartEcho(value: number) {
    this._gtpNodeRestartEcho = value;
  }
  public resetGtpNodeRestartEcho() {
    this._gtpNodeRestartEcho = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpNodeRestartEchoInput() {
    return this._gtpNodeRestartEcho;
  }

  // gtp_path_message_length_mismatch - computed: false, optional: true, required: false
  private _gtpPathMessageLengthMismatch?: number; 
  public get gtpPathMessageLengthMismatch() {
    return this.getNumberAttribute('gtp_path_message_length_mismatch');
  }
  public set gtpPathMessageLengthMismatch(value: number) {
    this._gtpPathMessageLengthMismatch = value;
  }
  public resetGtpPathMessageLengthMismatch() {
    this._gtpPathMessageLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpPathMessageLengthMismatchInput() {
    return this._gtpPathMessageLengthMismatch;
  }

  // gtp_rate_limit_entry_create_failure - computed: false, optional: true, required: false
  private _gtpRateLimitEntryCreateFailure?: number; 
  public get gtpRateLimitEntryCreateFailure() {
    return this.getNumberAttribute('gtp_rate_limit_entry_create_failure');
  }
  public set gtpRateLimitEntryCreateFailure(value: number) {
    this._gtpRateLimitEntryCreateFailure = value;
  }
  public resetGtpRateLimitEntryCreateFailure() {
    this._gtpRateLimitEntryCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRateLimitEntryCreateFailureInput() {
    return this._gtpRateLimitEntryCreateFailure;
  }

  // gtp_rate_limit_smp_create_failure - computed: false, optional: true, required: false
  private _gtpRateLimitSmpCreateFailure?: number; 
  public get gtpRateLimitSmpCreateFailure() {
    return this.getNumberAttribute('gtp_rate_limit_smp_create_failure');
  }
  public set gtpRateLimitSmpCreateFailure(value: number) {
    this._gtpRateLimitSmpCreateFailure = value;
  }
  public resetGtpRateLimitSmpCreateFailure() {
    this._gtpRateLimitSmpCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRateLimitSmpCreateFailureInput() {
    return this._gtpRateLimitSmpCreateFailure;
  }

  // gtp_rate_limit_t3_ctr_create_failure - computed: false, optional: true, required: false
  private _gtpRateLimitT3CtrCreateFailure?: number; 
  public get gtpRateLimitT3CtrCreateFailure() {
    return this.getNumberAttribute('gtp_rate_limit_t3_ctr_create_failure');
  }
  public set gtpRateLimitT3CtrCreateFailure(value: number) {
    this._gtpRateLimitT3CtrCreateFailure = value;
  }
  public resetGtpRateLimitT3CtrCreateFailure() {
    this._gtpRateLimitT3CtrCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRateLimitT3CtrCreateFailureInput() {
    return this._gtpRateLimitT3CtrCreateFailure;
  }

  // gtp_rr_message_drop - computed: false, optional: true, required: false
  private _gtpRrMessageDrop?: number; 
  public get gtpRrMessageDrop() {
    return this.getNumberAttribute('gtp_rr_message_drop');
  }
  public set gtpRrMessageDrop(value: number) {
    this._gtpRrMessageDrop = value;
  }
  public resetGtpRrMessageDrop() {
    this._gtpRrMessageDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRrMessageDropInput() {
    return this._gtpRrMessageDrop;
  }

  // gtp_smp_check_failed - computed: false, optional: true, required: false
  private _gtpSmpCheckFailed?: number; 
  public get gtpSmpCheckFailed() {
    return this.getNumberAttribute('gtp_smp_check_failed');
  }
  public set gtpSmpCheckFailed(value: number) {
    this._gtpSmpCheckFailed = value;
  }
  public resetGtpSmpCheckFailed() {
    this._gtpSmpCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpCheckFailedInput() {
    return this._gtpSmpCheckFailed;
  }

  // gtp_smp_dec_sess_count_check_failed - computed: false, optional: true, required: false
  private _gtpSmpDecSessCountCheckFailed?: number; 
  public get gtpSmpDecSessCountCheckFailed() {
    return this.getNumberAttribute('gtp_smp_dec_sess_count_check_failed');
  }
  public set gtpSmpDecSessCountCheckFailed(value: number) {
    this._gtpSmpDecSessCountCheckFailed = value;
  }
  public resetGtpSmpDecSessCountCheckFailed() {
    this._gtpSmpDecSessCountCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpDecSessCountCheckFailedInput() {
    return this._gtpSmpDecSessCountCheckFailed;
  }

  // gtp_smp_path_check_failed - computed: false, optional: true, required: false
  private _gtpSmpPathCheckFailed?: number; 
  public get gtpSmpPathCheckFailed() {
    return this.getNumberAttribute('gtp_smp_path_check_failed');
  }
  public set gtpSmpPathCheckFailed(value: number) {
    this._gtpSmpPathCheckFailed = value;
  }
  public resetGtpSmpPathCheckFailed() {
    this._gtpSmpPathCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpPathCheckFailedInput() {
    return this._gtpSmpPathCheckFailed;
  }

  // gtp_smp_session_count_check_failed - computed: false, optional: true, required: false
  private _gtpSmpSessionCountCheckFailed?: number; 
  public get gtpSmpSessionCountCheckFailed() {
    return this.getNumberAttribute('gtp_smp_session_count_check_failed');
  }
  public set gtpSmpSessionCountCheckFailed(value: number) {
    this._gtpSmpSessionCountCheckFailed = value;
  }
  public resetGtpSmpSessionCountCheckFailed() {
    this._gtpSmpSessionCountCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpSessionCountCheckFailedInput() {
    return this._gtpSmpSessionCountCheckFailed;
  }

  // gtp_stateless_forward - computed: false, optional: true, required: false
  private _gtpStatelessForward?: number; 
  public get gtpStatelessForward() {
    return this.getNumberAttribute('gtp_stateless_forward');
  }
  public set gtpStatelessForward(value: number) {
    this._gtpStatelessForward = value;
  }
  public resetGtpStatelessForward() {
    this._gtpStatelessForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpStatelessForwardInput() {
    return this._gtpStatelessForward;
  }

  // gtp_tunnel_rate_limit_entry_create_failure - computed: false, optional: true, required: false
  private _gtpTunnelRateLimitEntryCreateFailure?: number; 
  public get gtpTunnelRateLimitEntryCreateFailure() {
    return this.getNumberAttribute('gtp_tunnel_rate_limit_entry_create_failure');
  }
  public set gtpTunnelRateLimitEntryCreateFailure(value: number) {
    this._gtpTunnelRateLimitEntryCreateFailure = value;
  }
  public resetGtpTunnelRateLimitEntryCreateFailure() {
    this._gtpTunnelRateLimitEntryCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpTunnelRateLimitEntryCreateFailureInput() {
    return this._gtpTunnelRateLimitEntryCreateFailure;
  }

  // gtp_u_downlink_egress_bytes - computed: false, optional: true, required: false
  private _gtpUDownlinkEgressBytes?: number; 
  public get gtpUDownlinkEgressBytes() {
    return this.getNumberAttribute('gtp_u_downlink_egress_bytes');
  }
  public set gtpUDownlinkEgressBytes(value: number) {
    this._gtpUDownlinkEgressBytes = value;
  }
  public resetGtpUDownlinkEgressBytes() {
    this._gtpUDownlinkEgressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUDownlinkEgressBytesInput() {
    return this._gtpUDownlinkEgressBytes;
  }

  // gtp_u_downlink_egress_packets - computed: false, optional: true, required: false
  private _gtpUDownlinkEgressPackets?: number; 
  public get gtpUDownlinkEgressPackets() {
    return this.getNumberAttribute('gtp_u_downlink_egress_packets');
  }
  public set gtpUDownlinkEgressPackets(value: number) {
    this._gtpUDownlinkEgressPackets = value;
  }
  public resetGtpUDownlinkEgressPackets() {
    this._gtpUDownlinkEgressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUDownlinkEgressPacketsInput() {
    return this._gtpUDownlinkEgressPackets;
  }

  // gtp_u_downlink_ingress_bytes - computed: false, optional: true, required: false
  private _gtpUDownlinkIngressBytes?: number; 
  public get gtpUDownlinkIngressBytes() {
    return this.getNumberAttribute('gtp_u_downlink_ingress_bytes');
  }
  public set gtpUDownlinkIngressBytes(value: number) {
    this._gtpUDownlinkIngressBytes = value;
  }
  public resetGtpUDownlinkIngressBytes() {
    this._gtpUDownlinkIngressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUDownlinkIngressBytesInput() {
    return this._gtpUDownlinkIngressBytes;
  }

  // gtp_u_downlink_ingress_packets - computed: false, optional: true, required: false
  private _gtpUDownlinkIngressPackets?: number; 
  public get gtpUDownlinkIngressPackets() {
    return this.getNumberAttribute('gtp_u_downlink_ingress_packets');
  }
  public set gtpUDownlinkIngressPackets(value: number) {
    this._gtpUDownlinkIngressPackets = value;
  }
  public resetGtpUDownlinkIngressPackets() {
    this._gtpUDownlinkIngressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUDownlinkIngressPacketsInput() {
    return this._gtpUDownlinkIngressPackets;
  }

  // gtp_u_message_length_mismatch - computed: false, optional: true, required: false
  private _gtpUMessageLengthMismatch?: number; 
  public get gtpUMessageLengthMismatch() {
    return this.getNumberAttribute('gtp_u_message_length_mismatch');
  }
  public set gtpUMessageLengthMismatch(value: number) {
    this._gtpUMessageLengthMismatch = value;
  }
  public resetGtpUMessageLengthMismatch() {
    this._gtpUMessageLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUMessageLengthMismatchInput() {
    return this._gtpUMessageLengthMismatch;
  }

  // gtp_u_out_of_state_drop - computed: false, optional: true, required: false
  private _gtpUOutOfStateDrop?: number; 
  public get gtpUOutOfStateDrop() {
    return this.getNumberAttribute('gtp_u_out_of_state_drop');
  }
  public set gtpUOutOfStateDrop(value: number) {
    this._gtpUOutOfStateDrop = value;
  }
  public resetGtpUOutOfStateDrop() {
    this._gtpUOutOfStateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUOutOfStateDropInput() {
    return this._gtpUOutOfStateDrop;
  }

  // gtp_u_smp_in_rml_with_sess - computed: false, optional: true, required: false
  private _gtpUSmpInRmlWithSess?: number; 
  public get gtpUSmpInRmlWithSess() {
    return this.getNumberAttribute('gtp_u_smp_in_rml_with_sess');
  }
  public set gtpUSmpInRmlWithSess(value: number) {
    this._gtpUSmpInRmlWithSess = value;
  }
  public resetGtpUSmpInRmlWithSess() {
    this._gtpUSmpInRmlWithSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUSmpInRmlWithSessInput() {
    return this._gtpUSmpInRmlWithSess;
  }

  // gtp_u_uplink_egress_bytes - computed: false, optional: true, required: false
  private _gtpUUplinkEgressBytes?: number; 
  public get gtpUUplinkEgressBytes() {
    return this.getNumberAttribute('gtp_u_uplink_egress_bytes');
  }
  public set gtpUUplinkEgressBytes(value: number) {
    this._gtpUUplinkEgressBytes = value;
  }
  public resetGtpUUplinkEgressBytes() {
    this._gtpUUplinkEgressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUUplinkEgressBytesInput() {
    return this._gtpUUplinkEgressBytes;
  }

  // gtp_u_uplink_egress_packets - computed: false, optional: true, required: false
  private _gtpUUplinkEgressPackets?: number; 
  public get gtpUUplinkEgressPackets() {
    return this.getNumberAttribute('gtp_u_uplink_egress_packets');
  }
  public set gtpUUplinkEgressPackets(value: number) {
    this._gtpUUplinkEgressPackets = value;
  }
  public resetGtpUUplinkEgressPackets() {
    this._gtpUUplinkEgressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUUplinkEgressPacketsInput() {
    return this._gtpUUplinkEgressPackets;
  }

  // gtp_u_uplink_ingress_bytes - computed: false, optional: true, required: false
  private _gtpUUplinkIngressBytes?: number; 
  public get gtpUUplinkIngressBytes() {
    return this.getNumberAttribute('gtp_u_uplink_ingress_bytes');
  }
  public set gtpUUplinkIngressBytes(value: number) {
    this._gtpUUplinkIngressBytes = value;
  }
  public resetGtpUUplinkIngressBytes() {
    this._gtpUUplinkIngressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUUplinkIngressBytesInput() {
    return this._gtpUUplinkIngressBytes;
  }

  // gtp_u_uplink_ingress_packets - computed: false, optional: true, required: false
  private _gtpUUplinkIngressPackets?: number; 
  public get gtpUUplinkIngressPackets() {
    return this.getNumberAttribute('gtp_u_uplink_ingress_packets');
  }
  public set gtpUUplinkIngressPackets(value: number) {
    this._gtpUUplinkIngressPackets = value;
  }
  public resetGtpUUplinkIngressPackets() {
    this._gtpUUplinkIngressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUUplinkIngressPacketsInput() {
    return this._gtpUUplinkIngressPackets;
  }

  // gtp_v0_c_downlink_egress_bytes - computed: false, optional: true, required: false
  private _gtpV0CDownlinkEgressBytes?: number; 
  public get gtpV0CDownlinkEgressBytes() {
    return this.getNumberAttribute('gtp_v0_c_downlink_egress_bytes');
  }
  public set gtpV0CDownlinkEgressBytes(value: number) {
    this._gtpV0CDownlinkEgressBytes = value;
  }
  public resetGtpV0CDownlinkEgressBytes() {
    this._gtpV0CDownlinkEgressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CDownlinkEgressBytesInput() {
    return this._gtpV0CDownlinkEgressBytes;
  }

  // gtp_v0_c_downlink_egress_packets - computed: false, optional: true, required: false
  private _gtpV0CDownlinkEgressPackets?: number; 
  public get gtpV0CDownlinkEgressPackets() {
    return this.getNumberAttribute('gtp_v0_c_downlink_egress_packets');
  }
  public set gtpV0CDownlinkEgressPackets(value: number) {
    this._gtpV0CDownlinkEgressPackets = value;
  }
  public resetGtpV0CDownlinkEgressPackets() {
    this._gtpV0CDownlinkEgressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CDownlinkEgressPacketsInput() {
    return this._gtpV0CDownlinkEgressPackets;
  }

  // gtp_v0_c_downlink_ingress_bytes - computed: false, optional: true, required: false
  private _gtpV0CDownlinkIngressBytes?: number; 
  public get gtpV0CDownlinkIngressBytes() {
    return this.getNumberAttribute('gtp_v0_c_downlink_ingress_bytes');
  }
  public set gtpV0CDownlinkIngressBytes(value: number) {
    this._gtpV0CDownlinkIngressBytes = value;
  }
  public resetGtpV0CDownlinkIngressBytes() {
    this._gtpV0CDownlinkIngressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CDownlinkIngressBytesInput() {
    return this._gtpV0CDownlinkIngressBytes;
  }

  // gtp_v0_c_downlink_ingress_packets - computed: false, optional: true, required: false
  private _gtpV0CDownlinkIngressPackets?: number; 
  public get gtpV0CDownlinkIngressPackets() {
    return this.getNumberAttribute('gtp_v0_c_downlink_ingress_packets');
  }
  public set gtpV0CDownlinkIngressPackets(value: number) {
    this._gtpV0CDownlinkIngressPackets = value;
  }
  public resetGtpV0CDownlinkIngressPackets() {
    this._gtpV0CDownlinkIngressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CDownlinkIngressPacketsInput() {
    return this._gtpV0CDownlinkIngressPackets;
  }

  // gtp_v0_c_uplink_egress_bytes - computed: false, optional: true, required: false
  private _gtpV0CUplinkEgressBytes?: number; 
  public get gtpV0CUplinkEgressBytes() {
    return this.getNumberAttribute('gtp_v0_c_uplink_egress_bytes');
  }
  public set gtpV0CUplinkEgressBytes(value: number) {
    this._gtpV0CUplinkEgressBytes = value;
  }
  public resetGtpV0CUplinkEgressBytes() {
    this._gtpV0CUplinkEgressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CUplinkEgressBytesInput() {
    return this._gtpV0CUplinkEgressBytes;
  }

  // gtp_v0_c_uplink_egress_packets - computed: false, optional: true, required: false
  private _gtpV0CUplinkEgressPackets?: number; 
  public get gtpV0CUplinkEgressPackets() {
    return this.getNumberAttribute('gtp_v0_c_uplink_egress_packets');
  }
  public set gtpV0CUplinkEgressPackets(value: number) {
    this._gtpV0CUplinkEgressPackets = value;
  }
  public resetGtpV0CUplinkEgressPackets() {
    this._gtpV0CUplinkEgressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CUplinkEgressPacketsInput() {
    return this._gtpV0CUplinkEgressPackets;
  }

  // gtp_v0_c_uplink_ingress_bytes - computed: false, optional: true, required: false
  private _gtpV0CUplinkIngressBytes?: number; 
  public get gtpV0CUplinkIngressBytes() {
    return this.getNumberAttribute('gtp_v0_c_uplink_ingress_bytes');
  }
  public set gtpV0CUplinkIngressBytes(value: number) {
    this._gtpV0CUplinkIngressBytes = value;
  }
  public resetGtpV0CUplinkIngressBytes() {
    this._gtpV0CUplinkIngressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CUplinkIngressBytesInput() {
    return this._gtpV0CUplinkIngressBytes;
  }

  // gtp_v0_c_uplink_ingress_packets - computed: false, optional: true, required: false
  private _gtpV0CUplinkIngressPackets?: number; 
  public get gtpV0CUplinkIngressPackets() {
    return this.getNumberAttribute('gtp_v0_c_uplink_ingress_packets');
  }
  public set gtpV0CUplinkIngressPackets(value: number) {
    this._gtpV0CUplinkIngressPackets = value;
  }
  public resetGtpV0CUplinkIngressPackets() {
    this._gtpV0CUplinkIngressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV0CUplinkIngressPacketsInput() {
    return this._gtpV0CUplinkIngressPackets;
  }

  // gtp_v1_c_downlink_egress_bytes - computed: false, optional: true, required: false
  private _gtpV1CDownlinkEgressBytes?: number; 
  public get gtpV1CDownlinkEgressBytes() {
    return this.getNumberAttribute('gtp_v1_c_downlink_egress_bytes');
  }
  public set gtpV1CDownlinkEgressBytes(value: number) {
    this._gtpV1CDownlinkEgressBytes = value;
  }
  public resetGtpV1CDownlinkEgressBytes() {
    this._gtpV1CDownlinkEgressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CDownlinkEgressBytesInput() {
    return this._gtpV1CDownlinkEgressBytes;
  }

  // gtp_v1_c_downlink_egress_packets - computed: false, optional: true, required: false
  private _gtpV1CDownlinkEgressPackets?: number; 
  public get gtpV1CDownlinkEgressPackets() {
    return this.getNumberAttribute('gtp_v1_c_downlink_egress_packets');
  }
  public set gtpV1CDownlinkEgressPackets(value: number) {
    this._gtpV1CDownlinkEgressPackets = value;
  }
  public resetGtpV1CDownlinkEgressPackets() {
    this._gtpV1CDownlinkEgressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CDownlinkEgressPacketsInput() {
    return this._gtpV1CDownlinkEgressPackets;
  }

  // gtp_v1_c_downlink_ingress_bytes - computed: false, optional: true, required: false
  private _gtpV1CDownlinkIngressBytes?: number; 
  public get gtpV1CDownlinkIngressBytes() {
    return this.getNumberAttribute('gtp_v1_c_downlink_ingress_bytes');
  }
  public set gtpV1CDownlinkIngressBytes(value: number) {
    this._gtpV1CDownlinkIngressBytes = value;
  }
  public resetGtpV1CDownlinkIngressBytes() {
    this._gtpV1CDownlinkIngressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CDownlinkIngressBytesInput() {
    return this._gtpV1CDownlinkIngressBytes;
  }

  // gtp_v1_c_downlink_ingress_packets - computed: false, optional: true, required: false
  private _gtpV1CDownlinkIngressPackets?: number; 
  public get gtpV1CDownlinkIngressPackets() {
    return this.getNumberAttribute('gtp_v1_c_downlink_ingress_packets');
  }
  public set gtpV1CDownlinkIngressPackets(value: number) {
    this._gtpV1CDownlinkIngressPackets = value;
  }
  public resetGtpV1CDownlinkIngressPackets() {
    this._gtpV1CDownlinkIngressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CDownlinkIngressPacketsInput() {
    return this._gtpV1CDownlinkIngressPackets;
  }

  // gtp_v1_c_nsapi_not_found_in_delete_req - computed: false, optional: true, required: false
  private _gtpV1CNsapiNotFoundInDeleteReq?: number; 
  public get gtpV1CNsapiNotFoundInDeleteReq() {
    return this.getNumberAttribute('gtp_v1_c_nsapi_not_found_in_delete_req');
  }
  public set gtpV1CNsapiNotFoundInDeleteReq(value: number) {
    this._gtpV1CNsapiNotFoundInDeleteReq = value;
  }
  public resetGtpV1CNsapiNotFoundInDeleteReq() {
    this._gtpV1CNsapiNotFoundInDeleteReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CNsapiNotFoundInDeleteReqInput() {
    return this._gtpV1CNsapiNotFoundInDeleteReq;
  }

  // gtp_v1_c_uplink_egress_bytes - computed: false, optional: true, required: false
  private _gtpV1CUplinkEgressBytes?: number; 
  public get gtpV1CUplinkEgressBytes() {
    return this.getNumberAttribute('gtp_v1_c_uplink_egress_bytes');
  }
  public set gtpV1CUplinkEgressBytes(value: number) {
    this._gtpV1CUplinkEgressBytes = value;
  }
  public resetGtpV1CUplinkEgressBytes() {
    this._gtpV1CUplinkEgressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CUplinkEgressBytesInput() {
    return this._gtpV1CUplinkEgressBytes;
  }

  // gtp_v1_c_uplink_egress_packets - computed: false, optional: true, required: false
  private _gtpV1CUplinkEgressPackets?: number; 
  public get gtpV1CUplinkEgressPackets() {
    return this.getNumberAttribute('gtp_v1_c_uplink_egress_packets');
  }
  public set gtpV1CUplinkEgressPackets(value: number) {
    this._gtpV1CUplinkEgressPackets = value;
  }
  public resetGtpV1CUplinkEgressPackets() {
    this._gtpV1CUplinkEgressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CUplinkEgressPacketsInput() {
    return this._gtpV1CUplinkEgressPackets;
  }

  // gtp_v1_c_uplink_ingress_bytes - computed: false, optional: true, required: false
  private _gtpV1CUplinkIngressBytes?: number; 
  public get gtpV1CUplinkIngressBytes() {
    return this.getNumberAttribute('gtp_v1_c_uplink_ingress_bytes');
  }
  public set gtpV1CUplinkIngressBytes(value: number) {
    this._gtpV1CUplinkIngressBytes = value;
  }
  public resetGtpV1CUplinkIngressBytes() {
    this._gtpV1CUplinkIngressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CUplinkIngressBytesInput() {
    return this._gtpV1CUplinkIngressBytes;
  }

  // gtp_v1_c_uplink_ingress_packets - computed: false, optional: true, required: false
  private _gtpV1CUplinkIngressPackets?: number; 
  public get gtpV1CUplinkIngressPackets() {
    return this.getNumberAttribute('gtp_v1_c_uplink_ingress_packets');
  }
  public set gtpV1CUplinkIngressPackets(value: number) {
    this._gtpV1CUplinkIngressPackets = value;
  }
  public resetGtpV1CUplinkIngressPackets() {
    this._gtpV1CUplinkIngressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV1CUplinkIngressPacketsInput() {
    return this._gtpV1CUplinkIngressPackets;
  }

  // gtp_v2_c_bearer_not_found_in_delete_req - computed: false, optional: true, required: false
  private _gtpV2CBearerNotFoundInDeleteReq?: number; 
  public get gtpV2CBearerNotFoundInDeleteReq() {
    return this.getNumberAttribute('gtp_v2_c_bearer_not_found_in_delete_req');
  }
  public set gtpV2CBearerNotFoundInDeleteReq(value: number) {
    this._gtpV2CBearerNotFoundInDeleteReq = value;
  }
  public resetGtpV2CBearerNotFoundInDeleteReq() {
    this._gtpV2CBearerNotFoundInDeleteReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CBearerNotFoundInDeleteReqInput() {
    return this._gtpV2CBearerNotFoundInDeleteReq;
  }

  // gtp_v2_c_bearer_not_found_in_delete_resp - computed: false, optional: true, required: false
  private _gtpV2CBearerNotFoundInDeleteResp?: number; 
  public get gtpV2CBearerNotFoundInDeleteResp() {
    return this.getNumberAttribute('gtp_v2_c_bearer_not_found_in_delete_resp');
  }
  public set gtpV2CBearerNotFoundInDeleteResp(value: number) {
    this._gtpV2CBearerNotFoundInDeleteResp = value;
  }
  public resetGtpV2CBearerNotFoundInDeleteResp() {
    this._gtpV2CBearerNotFoundInDeleteResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CBearerNotFoundInDeleteRespInput() {
    return this._gtpV2CBearerNotFoundInDeleteResp;
  }

  // gtp_v2_c_downlink_egress_bytes - computed: false, optional: true, required: false
  private _gtpV2CDownlinkEgressBytes?: number; 
  public get gtpV2CDownlinkEgressBytes() {
    return this.getNumberAttribute('gtp_v2_c_downlink_egress_bytes');
  }
  public set gtpV2CDownlinkEgressBytes(value: number) {
    this._gtpV2CDownlinkEgressBytes = value;
  }
  public resetGtpV2CDownlinkEgressBytes() {
    this._gtpV2CDownlinkEgressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CDownlinkEgressBytesInput() {
    return this._gtpV2CDownlinkEgressBytes;
  }

  // gtp_v2_c_downlink_egress_packets - computed: false, optional: true, required: false
  private _gtpV2CDownlinkEgressPackets?: number; 
  public get gtpV2CDownlinkEgressPackets() {
    return this.getNumberAttribute('gtp_v2_c_downlink_egress_packets');
  }
  public set gtpV2CDownlinkEgressPackets(value: number) {
    this._gtpV2CDownlinkEgressPackets = value;
  }
  public resetGtpV2CDownlinkEgressPackets() {
    this._gtpV2CDownlinkEgressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CDownlinkEgressPacketsInput() {
    return this._gtpV2CDownlinkEgressPackets;
  }

  // gtp_v2_c_downlink_ingress_bytes - computed: false, optional: true, required: false
  private _gtpV2CDownlinkIngressBytes?: number; 
  public get gtpV2CDownlinkIngressBytes() {
    return this.getNumberAttribute('gtp_v2_c_downlink_ingress_bytes');
  }
  public set gtpV2CDownlinkIngressBytes(value: number) {
    this._gtpV2CDownlinkIngressBytes = value;
  }
  public resetGtpV2CDownlinkIngressBytes() {
    this._gtpV2CDownlinkIngressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CDownlinkIngressBytesInput() {
    return this._gtpV2CDownlinkIngressBytes;
  }

  // gtp_v2_c_downlink_ingress_packets - computed: false, optional: true, required: false
  private _gtpV2CDownlinkIngressPackets?: number; 
  public get gtpV2CDownlinkIngressPackets() {
    return this.getNumberAttribute('gtp_v2_c_downlink_ingress_packets');
  }
  public set gtpV2CDownlinkIngressPackets(value: number) {
    this._gtpV2CDownlinkIngressPackets = value;
  }
  public resetGtpV2CDownlinkIngressPackets() {
    this._gtpV2CDownlinkIngressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CDownlinkIngressPacketsInput() {
    return this._gtpV2CDownlinkIngressPackets;
  }

  // gtp_v2_c_uplink_egress_bytes - computed: false, optional: true, required: false
  private _gtpV2CUplinkEgressBytes?: number; 
  public get gtpV2CUplinkEgressBytes() {
    return this.getNumberAttribute('gtp_v2_c_uplink_egress_bytes');
  }
  public set gtpV2CUplinkEgressBytes(value: number) {
    this._gtpV2CUplinkEgressBytes = value;
  }
  public resetGtpV2CUplinkEgressBytes() {
    this._gtpV2CUplinkEgressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CUplinkEgressBytesInput() {
    return this._gtpV2CUplinkEgressBytes;
  }

  // gtp_v2_c_uplink_egress_packets - computed: false, optional: true, required: false
  private _gtpV2CUplinkEgressPackets?: number; 
  public get gtpV2CUplinkEgressPackets() {
    return this.getNumberAttribute('gtp_v2_c_uplink_egress_packets');
  }
  public set gtpV2CUplinkEgressPackets(value: number) {
    this._gtpV2CUplinkEgressPackets = value;
  }
  public resetGtpV2CUplinkEgressPackets() {
    this._gtpV2CUplinkEgressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CUplinkEgressPacketsInput() {
    return this._gtpV2CUplinkEgressPackets;
  }

  // gtp_v2_c_uplink_ingress_bytes - computed: false, optional: true, required: false
  private _gtpV2CUplinkIngressBytes?: number; 
  public get gtpV2CUplinkIngressBytes() {
    return this.getNumberAttribute('gtp_v2_c_uplink_ingress_bytes');
  }
  public set gtpV2CUplinkIngressBytes(value: number) {
    this._gtpV2CUplinkIngressBytes = value;
  }
  public resetGtpV2CUplinkIngressBytes() {
    this._gtpV2CUplinkIngressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CUplinkIngressBytesInput() {
    return this._gtpV2CUplinkIngressBytes;
  }

  // gtp_v2_c_uplink_ingress_packets - computed: false, optional: true, required: false
  private _gtpV2CUplinkIngressPackets?: number; 
  public get gtpV2CUplinkIngressPackets() {
    return this.getNumberAttribute('gtp_v2_c_uplink_ingress_packets');
  }
  public set gtpV2CUplinkIngressPackets(value: number) {
    this._gtpV2CUplinkIngressPackets = value;
  }
  public resetGtpV2CUplinkIngressPackets() {
    this._gtpV2CUplinkIngressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpV2CUplinkIngressPacketsInput() {
    return this._gtpV2CUplinkIngressPackets;
  }

  // no_fwd_route - computed: false, optional: true, required: false
  private _noFwdRoute?: number; 
  public get noFwdRoute() {
    return this.getNumberAttribute('no_fwd_route');
  }
  public set noFwdRoute(value: number) {
    this._noFwdRoute = value;
  }
  public resetNoFwdRoute() {
    this._noFwdRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFwdRouteInput() {
    return this._noFwdRoute;
  }

  // no_rev_route - computed: false, optional: true, required: false
  private _noRevRoute?: number; 
  public get noRevRoute() {
    return this.getNumberAttribute('no_rev_route');
  }
  public set noRevRoute(value: number) {
    this._noRevRoute = value;
  }
  public resetNoRevRoute() {
    this._noRevRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRevRouteInput() {
    return this._noRevRoute;
  }

  // out_of_session_memory - computed: false, optional: true, required: false
  private _outOfSessionMemory?: number; 
  public get outOfSessionMemory() {
    return this.getNumberAttribute('out_of_session_memory');
  }
  public set outOfSessionMemory(value: number) {
    this._outOfSessionMemory = value;
  }
  public resetOutOfSessionMemory() {
    this._outOfSessionMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSessionMemoryInput() {
    return this._outOfSessionMemory;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats thunder_fw_gtp_stats}
*/
export class DataThunderFwGtpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_gtp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwGtpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwGtpStats to import
  * @param importFromId The id of the existing DataThunderFwGtpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwGtpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_gtp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_stats thunder_fw_gtp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwGtpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwGtpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_gtp_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._apnPrefix.internalValue = config.apnPrefix;
    this._networkElement.internalValue = config.networkElement;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // apn_prefix - computed: false, optional: true, required: false
  private _apnPrefix = new DataThunderFwGtpStatsApnPrefixOutputReference(this, "apn_prefix");
  public get apnPrefix() {
    return this._apnPrefix;
  }
  public putApnPrefix(value: DataThunderFwGtpStatsApnPrefix) {
    this._apnPrefix.internalValue = value;
  }
  public resetApnPrefix() {
    this._apnPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnPrefixInput() {
    return this._apnPrefix.internalValue;
  }

  // network_element - computed: false, optional: true, required: false
  private _networkElement = new DataThunderFwGtpStatsNetworkElementOutputReference(this, "network_element");
  public get networkElement() {
    return this._networkElement;
  }
  public putNetworkElement(value: DataThunderFwGtpStatsNetworkElement) {
    this._networkElement.internalValue = value;
  }
  public resetNetworkElement() {
    this._networkElement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkElementInput() {
    return this._networkElement.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderFwGtpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwGtpStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      apn_prefix: dataThunderFwGtpStatsApnPrefixToTerraform(this._apnPrefix.internalValue),
      network_element: dataThunderFwGtpStatsNetworkElementToTerraform(this._networkElement.internalValue),
      stats: dataThunderFwGtpStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apn_prefix: {
        value: dataThunderFwGtpStatsApnPrefixToHclTerraform(this._apnPrefix.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwGtpStatsApnPrefixList",
      },
      network_element: {
        value: dataThunderFwGtpStatsNetworkElementToHclTerraform(this._networkElement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwGtpStatsNetworkElementList",
      },
      stats: {
        value: dataThunderFwGtpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwGtpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
