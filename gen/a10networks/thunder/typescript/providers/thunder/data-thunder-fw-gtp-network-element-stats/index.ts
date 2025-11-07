// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwGtpNetworkElementStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#id DataThunderFwGtpNetworkElementStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#stats DataThunderFwGtpNetworkElementStats#stats}
  */
  readonly stats?: DataThunderFwGtpNetworkElementStatsStats;
}
export interface DataThunderFwGtpNetworkElementStatsStats {
  /**
  * Downlink Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#downlink_bytes DataThunderFwGtpNetworkElementStats#downlink_bytes}
  */
  readonly downlinkBytes?: number;
  /**
  * Downlink Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#downlink_pkts DataThunderFwGtpNetworkElementStats#downlink_pkts}
  */
  readonly downlinkPkts?: number;
  /**
  * Filtering Drop: APN IMSI Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_flt_apn_filtering DataThunderFwGtpNetworkElementStats#drop_flt_apn_filtering}
  */
  readonly dropFltApnFiltering?: number;
  /**
  * Filtering Drop: GTP in GTP Tunnel Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_flt_gtp_in_gtp DataThunderFwGtpNetworkElementStats#drop_flt_gtp_in_gtp}
  */
  readonly dropFltGtpInGtp?: number;
  /**
  * Filtering Drop: Message Type Not Permitted on Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_flt_message_filtering DataThunderFwGtpNetworkElementStats#drop_flt_message_filtering}
  */
  readonly dropFltMessageFiltering?: number;
  /**
  * Filtering Drop: MSISDN Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_flt_msisdn_filtering DataThunderFwGtpNetworkElementStats#drop_flt_msisdn_filtering}
  */
  readonly dropFltMsisdnFiltering?: number;
  /**
  * Filtering Drop: RAT Type Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_flt_rat_type_filtering DataThunderFwGtpNetworkElementStats#drop_flt_rat_type_filtering}
  */
  readonly dropFltRatTypeFiltering?: number;
  /**
  * Rate-limit Drop: GTP-U Downlink byte rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_u_downlink_byte DataThunderFwGtpNetworkElementStats#drop_rl_gtp_u_downlink_byte}
  */
  readonly dropRlGtpUDownlinkByte?: number;
  /**
  * Rate-limit Drop: GTP-U Downlink packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_u_downlink_packet DataThunderFwGtpNetworkElementStats#drop_rl_gtp_u_downlink_packet}
  */
  readonly dropRlGtpUDownlinkPacket?: number;
  /**
  * Rate-limit Drop: GTP-U Concurrent Tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_u_max_concurrent_tunnels DataThunderFwGtpNetworkElementStats#drop_rl_gtp_u_max_concurrent_tunnels}
  */
  readonly dropRlGtpUMaxConcurrentTunnels?: number;
  /**
  * Rate-limit Drop: GTP-U Total byte rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_u_total_byte DataThunderFwGtpNetworkElementStats#drop_rl_gtp_u_total_byte}
  */
  readonly dropRlGtpUTotalByte?: number;
  /**
  * Rate-limit Drop: GTP-U Total packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_u_total_packet DataThunderFwGtpNetworkElementStats#drop_rl_gtp_u_total_packet}
  */
  readonly dropRlGtpUTotalPacket?: number;
  /**
  * Rate-limit Drop: GTP-U Tunnel Creation rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_u_tunnel_create DataThunderFwGtpNetworkElementStats#drop_rl_gtp_u_tunnel_create}
  */
  readonly dropRlGtpUTunnelCreate?: number;
  /**
  * Rate-limit Drop: GTP-U Uplink byte rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_u_uplink_byte DataThunderFwGtpNetworkElementStats#drop_rl_gtp_u_uplink_byte}
  */
  readonly dropRlGtpUUplinkByte?: number;
  /**
  * Rate-limit Drop: GTP-U Uplink packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_u_uplink_packet DataThunderFwGtpNetworkElementStats#drop_rl_gtp_u_uplink_packet}
  */
  readonly dropRlGtpUUplinkPacket?: number;
  /**
  * Rate-limit Drop: Maximum GTPv0-C messages rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_v0_c_agg DataThunderFwGtpNetworkElementStats#drop_rl_gtp_v0_c_agg}
  */
  readonly dropRlGtpV0CAgg?: number;
  /**
  * Rate-limit Drop: Maximum GTPv1-C messages rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_v1_c_agg DataThunderFwGtpNetworkElementStats#drop_rl_gtp_v1_c_agg}
  */
  readonly dropRlGtpV1CAgg?: number;
  /**
  * Rate-limit Drop: GTPv1-C Create PDP Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_v1_c_create_pdp_request DataThunderFwGtpNetworkElementStats#drop_rl_gtp_v1_c_create_pdp_request}
  */
  readonly dropRlGtpV1CCreatePdpRequest?: number;
  /**
  * Rate-limit Drop: GTPv1-C Update PDP Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_v1_c_update_pdp_request DataThunderFwGtpNetworkElementStats#drop_rl_gtp_v1_c_update_pdp_request}
  */
  readonly dropRlGtpV1CUpdatePdpRequest?: number;
  /**
  * Rate-limit Drop: Maximum GTPv2-C messages rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_v2_c_agg DataThunderFwGtpNetworkElementStats#drop_rl_gtp_v2_c_agg}
  */
  readonly dropRlGtpV2CAgg?: number;
  /**
  * Rate-limit Drop: GTPv2-C Create Session Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_v2_c_create_session_request DataThunderFwGtpNetworkElementStats#drop_rl_gtp_v2_c_create_session_request}
  */
  readonly dropRlGtpV2CCreateSessionRequest?: number;
  /**
  * Rate-limit Drop: GTPv2-C Modify Bearer Req rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_rl_gtp_v2_c_modify_bearer_request DataThunderFwGtpNetworkElementStats#drop_rl_gtp_v2_c_modify_bearer_request}
  */
  readonly dropRlGtpV2CModifyBearerRequest?: number;
  /**
  * Validation Drop: Country Code Mismatch in IMSI and MSISDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_country_code_mismatch DataThunderFwGtpNetworkElementStats#drop_vld_country_code_mismatch}
  */
  readonly dropVldCountryCodeMismatch?: number;
  /**
  * Validation Drop: Cross Layer IP Address Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_cross_layer_correlation DataThunderFwGtpNetworkElementStats#drop_vld_cross_layer_correlation}
  */
  readonly dropVldCrossLayerCorrelation?: number;
  /**
  * Validation Drop: GTP Bearer count exceeded max (11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_bearer_count_exceed DataThunderFwGtpNetworkElementStats#drop_vld_gtp_bearer_count_exceed}
  */
  readonly dropVldGtpBearerCountExceed?: number;
  /**
  * Validation Drop: GTP-C Invalid APN Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_invalid_apn_len_drop DataThunderFwGtpNetworkElementStats#drop_vld_gtp_invalid_apn_len_drop}
  */
  readonly dropVldGtpInvalidApnLenDrop?: number;
  /**
  * Validation Drop: GTP-C Invalid IMSI Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_invalid_imsi_len_drop DataThunderFwGtpNetworkElementStats#drop_vld_gtp_invalid_imsi_len_drop}
  */
  readonly dropVldGtpInvalidImsiLenDrop?: number;
  /**
  * Validation Drop: GTP-U IP Address Spoofed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_u_spoofed_source_address DataThunderFwGtpNetworkElementStats#drop_vld_gtp_u_spoofed_source_address}
  */
  readonly dropVldGtpUSpoofedSourceAddress?: number;
  /**
  * Validation Drop: GTPv0-C IE Length Exceeds Message Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v0_c_ie_len_exceed_msg_len DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v0_c_ie_len_exceed_msg_len}
  */
  readonly dropVldGtpV0CIeLenExceedMsgLen?: number;
  /**
  * Validation Drop: GTPv0-C APN/IMSI Filtering dropped (No APN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v0_c_message_dropped_apn_filtering_no_apn}
  */
  readonly dropVldGtpV0CMessageDroppedApnFilteringNoApn?: number;
  /**
  * Validation Drop: GTPv0-C Message Length Mismatch Across Layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v0_c_message_length_mismatch DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v0_c_message_length_mismatch}
  */
  readonly dropVldGtpV0CMessageLengthMismatch?: number;
  /**
  * Validation Drop: GTPv0-C PDU Notification Request with TEID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v0_c_message_with_teid_zero_expected DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v0_c_message_with_teid_zero_expected}
  */
  readonly dropVldGtpV0CMessageWithTeidZeroExpected?: number;
  /**
  * Validation Drop: GTPv1-C IE Length Exceeds Message Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v1_c_ie_len_exceed_msg_len DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v1_c_ie_len_exceed_msg_len}
  */
  readonly dropVldGtpV1CIeLenExceedMsgLen?: number;
  /**
  * Validation Drop: GTPv1-C APN/IMSI Filtering dropped (No APN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v1_c_message_dropped_apn_filtering_no_apn}
  */
  readonly dropVldGtpV1CMessageDroppedApnFilteringNoApn?: number;
  /**
  * Validation Drop: GTPv1-C Message Length Mismatch Across Layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v1_c_message_length_mismatch DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v1_c_message_length_mismatch}
  */
  readonly dropVldGtpV1CMessageLengthMismatch?: number;
  /**
  * Validation Drop: GTPv1-C PDU Notification Request with TEID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v1_c_message_with_teid_zero_expected DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v1_c_message_with_teid_zero_expected}
  */
  readonly dropVldGtpV1CMessageWithTeidZeroExpected?: number;
  /**
  * Validation Drop: GTPv2-C IE Length Exceeds Message Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v2_c_ie_len_exceed_msg_len DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v2_c_ie_len_exceed_msg_len}
  */
  readonly dropVldGtpV2CIeLenExceedMsgLen?: number;
  /**
  * Validation Drop: GTPv2-C APN/IMSI Filtering dropped (No APN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v2_c_message_dropped_apn_filtering_no_apn}
  */
  readonly dropVldGtpV2CMessageDroppedApnFilteringNoApn?: number;
  /**
  * Validation Drop: GTPv2-C Message Length Mismatch Across Layers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v2_c_message_length_mismatch DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v2_c_message_length_mismatch}
  */
  readonly dropVldGtpV2CMessageLengthMismatch?: number;
  /**
  * Validation Drop: GTPv2-C Create Session Request with TEID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v2_c_message_with_teid_zero_expected DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v2_c_message_with_teid_zero_expected}
  */
  readonly dropVldGtpV2CMessageWithTeidZeroExpected?: number;
  /**
  * Validation Drop: GTPV2-C Wrong LBI in Create Bearer Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtp_v2_wrong_lbi_create_bearer_req DataThunderFwGtpNetworkElementStats#drop_vld_gtp_v2_wrong_lbi_create_bearer_req}
  */
  readonly dropVldGtpV2WrongLbiCreateBearerReq?: number;
  /**
  * Validation Drop: GTPV0-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtpv0_seqnum_buffer_full DataThunderFwGtpNetworkElementStats#drop_vld_gtpv0_seqnum_buffer_full}
  */
  readonly dropVldGtpv0SeqnumBufferFull?: number;
  /**
  * Validation Drop: GTPV0-c Subscriber Attributes Missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtpv0_subscriber_attr_miss DataThunderFwGtpNetworkElementStats#drop_vld_gtpv0_subscriber_attr_miss}
  */
  readonly dropVldGtpv0SubscriberAttrMiss?: number;
  /**
  * Validation Drop: GTPV1-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtpv1_seqnum_buffer_full DataThunderFwGtpNetworkElementStats#drop_vld_gtpv1_seqnum_buffer_full}
  */
  readonly dropVldGtpv1SeqnumBufferFull?: number;
  /**
  * Validation Drop: GTPV1-c Subscriber Attributes Missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtpv1_subscriber_attr_miss DataThunderFwGtpNetworkElementStats#drop_vld_gtpv1_subscriber_attr_miss}
  */
  readonly dropVldGtpv1SubscriberAttrMiss?: number;
  /**
  * Validation Drop: GTPV2-C conn Sequence number Buffer Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtpv2_seqnum_buffer_full DataThunderFwGtpNetworkElementStats#drop_vld_gtpv2_seqnum_buffer_full}
  */
  readonly dropVldGtpv2SeqnumBufferFull?: number;
  /**
  * Validation Drop: GTPV2-c Subscriber Attributes Missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_gtpv2_subscriber_attr_miss DataThunderFwGtpNetworkElementStats#drop_vld_gtpv2_subscriber_attr_miss}
  */
  readonly dropVldGtpv2SubscriberAttrMiss?: number;
  /**
  * Validation Drop: Invalid Flow Label in GTPv0-C Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_invalid_flow_label_v0 DataThunderFwGtpNetworkElementStats#drop_vld_invalid_flow_label_v0}
  */
  readonly dropVldInvalidFlowLabelV0?: number;
  /**
  * Validation Drop: Piggyback message invalid packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_invalid_pkt_len_piggyback DataThunderFwGtpNetworkElementStats#drop_vld_invalid_pkt_len_piggyback}
  */
  readonly dropVldInvalidPktLenPiggyback?: number;
  /**
  * Validation Drop: Invalid TEID Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_invalid_teid DataThunderFwGtpNetworkElementStats#drop_vld_invalid_teid}
  */
  readonly dropVldInvalidTeid?: number;
  /**
  * Validation Drop: Mandatory IE Not Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_mandatory_information_element DataThunderFwGtpNetworkElementStats#drop_vld_mandatory_information_element}
  */
  readonly dropVldMandatoryInformationElement?: number;
  /**
  * Validation Drop: Message Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_message_length DataThunderFwGtpNetworkElementStats#drop_vld_message_length}
  */
  readonly dropVldMessageLength?: number;
  /**
  * Validation Drop: GTPv1-C Message Out of Order IE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_out_of_order_ie DataThunderFwGtpNetworkElementStats#drop_vld_out_of_order_ie}
  */
  readonly dropVldOutOfOrderIe?: number;
  /**
  * Validation Drop: Out Of State GTP Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_out_of_state DataThunderFwGtpNetworkElementStats#drop_vld_out_of_state}
  */
  readonly dropVldOutOfState?: number;
  /**
  * Validation Drop: Unexpected IE Present in Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_out_of_state_ie DataThunderFwGtpNetworkElementStats#drop_vld_out_of_state_ie}
  */
  readonly dropVldOutOfStateIe?: number;
  /**
  * Validation Drop: Protocol flag in Header Field not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_protocol_flag_unset DataThunderFwGtpNetworkElementStats#drop_vld_protocol_flag_unset}
  */
  readonly dropVldProtocolFlagUnset?: number;
  /**
  * Validation Drop: Reserved Header Field Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_reserved_field_set DataThunderFwGtpNetworkElementStats#drop_vld_reserved_field_set}
  */
  readonly dropVldReservedFieldSet?: number;
  /**
  * Validation Drop: Reserved IE Field Present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_reserved_information_element DataThunderFwGtpNetworkElementStats#drop_vld_reserved_information_element}
  */
  readonly dropVldReservedInformationElement?: number;
  /**
  * Validation Drop: piggyback message anomaly failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_sanity_failed_piggyback DataThunderFwGtpNetworkElementStats#drop_vld_sanity_failed_piggyback}
  */
  readonly dropVldSanityFailedPiggyback?: number;
  /**
  * Validation Drop: GTP-C Sequence number Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_sequence_num_correlation DataThunderFwGtpNetworkElementStats#drop_vld_sequence_num_correlation}
  */
  readonly dropVldSequenceNumCorrelation?: number;
  /**
  * Validation Drop: Tunnel Header Flag Not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_tunnel_id_flag DataThunderFwGtpNetworkElementStats#drop_vld_tunnel_id_flag}
  */
  readonly dropVldTunnelIdFlag?: number;
  /**
  * Validation Drop: Message type not supported by GTP Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_unsupported_message_type DataThunderFwGtpNetworkElementStats#drop_vld_unsupported_message_type}
  */
  readonly dropVldUnsupportedMessageType?: number;
  /**
  * Validation Drop: GTPv0-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_v0_reserved_message_drop DataThunderFwGtpNetworkElementStats#drop_vld_v0_reserved_message_drop}
  */
  readonly dropVldV0ReservedMessageDrop?: number;
  /**
  * Validation Drop: GTPv1-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_v1_reserved_message_drop DataThunderFwGtpNetworkElementStats#drop_vld_v1_reserved_message_drop}
  */
  readonly dropVldV1ReservedMessageDrop?: number;
  /**
  * Validation Drop: GTPv2-C Reserved Message Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_v2_reserved_message_drop DataThunderFwGtpNetworkElementStats#drop_vld_v2_reserved_message_drop}
  */
  readonly dropVldV2ReservedMessageDrop?: number;
  /**
  * Validation Drop: Invalid GTP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#drop_vld_version_not_supported DataThunderFwGtpNetworkElementStats#drop_vld_version_not_supported}
  */
  readonly dropVldVersionNotSupported?: number;
  /**
  * GTP-C matching a conn with Handover In Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_c_handover_in_progress_with_conn DataThunderFwGtpNetworkElementStats#gtp_c_handover_in_progress_with_conn}
  */
  readonly gtpCHandoverInProgressWithConn?: number;
  /**
  * GTP Node Restoration due to Recovery IE in GTP-C Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_node_restart_gtp_c DataThunderFwGtpNetworkElementStats#gtp_node_restart_gtp_c}
  */
  readonly gtpNodeRestartGtpC?: number;
  /**
  * GTP Path Management Messages Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_path_management_message DataThunderFwGtpNetworkElementStats#gtp_path_management_message}
  */
  readonly gtpPathManagementMessage?: number;
  /**
  * GTP-U Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_u_tunnel_created DataThunderFwGtpNetworkElementStats#gtp_u_tunnel_created}
  */
  readonly gtpUTunnelCreated?: number;
  /**
  * GTP-U Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_u_tunnel_deleted DataThunderFwGtpNetworkElementStats#gtp_u_tunnel_deleted}
  */
  readonly gtpUTunnelDeleted?: number;
  /**
  * GTPv0-C Create PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_create_pdp_resp_unsuccess DataThunderFwGtpNetworkElementStats#gtp_v0_c_create_pdp_resp_unsuccess}
  */
  readonly gtpV0CCreatePdpRespUnsuccess?: number;
  /**
  * GTPv0-C Half open tunnel closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_half_open_tunnel_closed DataThunderFwGtpNetworkElementStats#gtp_v0_c_half_open_tunnel_closed}
  */
  readonly gtpV0CHalfOpenTunnelClosed?: number;
  /**
  * GTPv0-C APN/IMSI Filtering Skipped (No IMSI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_message_skipped_apn_filtering_no_imsi DataThunderFwGtpNetworkElementStats#gtp_v0_c_message_skipped_apn_filtering_no_imsi}
  */
  readonly gtpV0CMessageSkippedApnFilteringNoImsi?: number;
  /**
  * GTPv0-C MSISDN Filtering Skipped (No MSISDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn DataThunderFwGtpNetworkElementStats#gtp_v0_c_message_skipped_msisdn_filtering_no_msisdn}
  */
  readonly gtpV0CMessageSkippedMsisdnFilteringNoMsisdn?: number;
  /**
  * GTPv0-C Packet With Dummy MSISDN Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_packet_dummy_msisdn DataThunderFwGtpNetworkElementStats#gtp_v0_c_packet_dummy_msisdn}
  */
  readonly gtpV0CPacketDummyMsisdn?: number;
  /**
  * GTPv0-C PDU Notification Reject Request Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_pdu_notification_reject_request_forward DataThunderFwGtpNetworkElementStats#gtp_v0_c_pdu_notification_reject_request_forward}
  */
  readonly gtpV0CPduNotificationRejectRequestForward?: number;
  /**
  * GTPv0-C PDU Notification Request Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_pdu_notification_request_forward DataThunderFwGtpNetworkElementStats#gtp_v0_c_pdu_notification_request_forward}
  */
  readonly gtpV0CPduNotificationRequestForward?: number;
  /**
  * GTPv0-C Reserved Message Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_reserved_message_allow DataThunderFwGtpNetworkElementStats#gtp_v0_c_reserved_message_allow}
  */
  readonly gtpV0CReservedMessageAllow?: number;
  /**
  * GTPv0-C Tunnel Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_tunnel_closed DataThunderFwGtpNetworkElementStats#gtp_v0_c_tunnel_closed}
  */
  readonly gtpV0CTunnelClosed?: number;
  /**
  * GTPv0-C Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_tunnel_created DataThunderFwGtpNetworkElementStats#gtp_v0_c_tunnel_created}
  */
  readonly gtpV0CTunnelCreated?: number;
  /**
  * GTPv0-C Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_tunnel_deleted DataThunderFwGtpNetworkElementStats#gtp_v0_c_tunnel_deleted}
  */
  readonly gtpV0CTunnelDeleted?: number;
  /**
  * GTPv0-C Tunnel Deleted with Restart/failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_tunnel_deleted_restart DataThunderFwGtpNetworkElementStats#gtp_v0_c_tunnel_deleted_restart}
  */
  readonly gtpV0CTunnelDeletedRestart?: number;
  /**
  * GTPv0-C Tunnel Delete Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_tunnel_half_closed DataThunderFwGtpNetworkElementStats#gtp_v0_c_tunnel_half_closed}
  */
  readonly gtpV0CTunnelHalfClosed?: number;
  /**
  * GTPv0-C Half open tunnel created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_tunnel_half_open DataThunderFwGtpNetworkElementStats#gtp_v0_c_tunnel_half_open}
  */
  readonly gtpV0CTunnelHalfOpen?: number;
  /**
  * GTPv0-C Update PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v0_c_update_pdp_resp_unsuccess DataThunderFwGtpNetworkElementStats#gtp_v0_c_update_pdp_resp_unsuccess}
  */
  readonly gtpV0CUpdatePdpRespUnsuccess?: number;
  /**
  * GTPv1-C Create PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_create_pdp_resp_unsuccess DataThunderFwGtpNetworkElementStats#gtp_v1_c_create_pdp_resp_unsuccess}
  */
  readonly gtpV1CCreatePdpRespUnsuccess?: number;
  /**
  * GTPv1-C Half open tunnel closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_half_open_tunnel_closed DataThunderFwGtpNetworkElementStats#gtp_v1_c_half_open_tunnel_closed}
  */
  readonly gtpV1CHalfOpenTunnelClosed?: number;
  /**
  * GTPv1-C APN/IMSI Filtering Skipped (No IMSI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_message_skipped_apn_filtering_no_imsi DataThunderFwGtpNetworkElementStats#gtp_v1_c_message_skipped_apn_filtering_no_imsi}
  */
  readonly gtpV1CMessageSkippedApnFilteringNoImsi?: number;
  /**
  * GTPv1-C MSISDN Filtering Skipped (No MSISDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn DataThunderFwGtpNetworkElementStats#gtp_v1_c_message_skipped_msisdn_filtering_no_msisdn}
  */
  readonly gtpV1CMessageSkippedMsisdnFilteringNoMsisdn?: number;
  /**
  * GTPv0-C Packet With Dummy MSISDN Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_packet_dummy_msisdn DataThunderFwGtpNetworkElementStats#gtp_v1_c_packet_dummy_msisdn}
  */
  readonly gtpV1CPacketDummyMsisdn?: number;
  /**
  * GTPv1-C PDU Notification Reject Request Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_pdu_notification_reject_request_forward DataThunderFwGtpNetworkElementStats#gtp_v1_c_pdu_notification_reject_request_forward}
  */
  readonly gtpV1CPduNotificationRejectRequestForward?: number;
  /**
  * GTPv1-C PDU Notification Request Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_pdu_notification_request_forward DataThunderFwGtpNetworkElementStats#gtp_v1_c_pdu_notification_request_forward}
  */
  readonly gtpV1CPduNotificationRequestForward?: number;
  /**
  * GTPv1-C Reserved Message Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_reserved_message_allow DataThunderFwGtpNetworkElementStats#gtp_v1_c_reserved_message_allow}
  */
  readonly gtpV1CReservedMessageAllow?: number;
  /**
  * GTPv1-C Tunnel Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_tunnel_closed DataThunderFwGtpNetworkElementStats#gtp_v1_c_tunnel_closed}
  */
  readonly gtpV1CTunnelClosed?: number;
  /**
  * GTPv1-C Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_tunnel_created DataThunderFwGtpNetworkElementStats#gtp_v1_c_tunnel_created}
  */
  readonly gtpV1CTunnelCreated?: number;
  /**
  * GTPv1-C Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_tunnel_deleted DataThunderFwGtpNetworkElementStats#gtp_v1_c_tunnel_deleted}
  */
  readonly gtpV1CTunnelDeleted?: number;
  /**
  * GTPv1-C Tunnel Deleted with Restart/failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_tunnel_deleted_restart DataThunderFwGtpNetworkElementStats#gtp_v1_c_tunnel_deleted_restart}
  */
  readonly gtpV1CTunnelDeletedRestart?: number;
  /**
  * GTPv1-C Tunnel Delete Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_tunnel_half_closed DataThunderFwGtpNetworkElementStats#gtp_v1_c_tunnel_half_closed}
  */
  readonly gtpV1CTunnelHalfClosed?: number;
  /**
  * GTPv1-C Half open tunnel created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_tunnel_half_open DataThunderFwGtpNetworkElementStats#gtp_v1_c_tunnel_half_open}
  */
  readonly gtpV1CTunnelHalfOpen?: number;
  /**
  * GTPv1-C Update PDP Context Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v1_c_update_pdp_resp_unsuccess DataThunderFwGtpNetworkElementStats#gtp_v1_c_update_pdp_resp_unsuccess}
  */
  readonly gtpV1CUpdatePdpRespUnsuccess?: number;
  /**
  * GTPv2-C Create Session Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_create_sess_resp_unsuccess DataThunderFwGtpNetworkElementStats#gtp_v2_c_create_sess_resp_unsuccess}
  */
  readonly gtpV2CCreateSessRespUnsuccess?: number;
  /**
  * GTPv2-C Half open tunnel closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_half_open_tunnel_closed DataThunderFwGtpNetworkElementStats#gtp_v2_c_half_open_tunnel_closed}
  */
  readonly gtpV2CHalfOpenTunnelClosed?: number;
  /**
  * GTPv2-C APN/IMSI Filtering Skipped (No IMSI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_message_skipped_apn_filtering_no_imsi DataThunderFwGtpNetworkElementStats#gtp_v2_c_message_skipped_apn_filtering_no_imsi}
  */
  readonly gtpV2CMessageSkippedApnFilteringNoImsi?: number;
  /**
  * GTPv2-C MSISDN Filtering Skipped (No MSISDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn DataThunderFwGtpNetworkElementStats#gtp_v2_c_message_skipped_msisdn_filtering_no_msisdn}
  */
  readonly gtpV2CMessageSkippedMsisdnFilteringNoMsisdn?: number;
  /**
  * GTPv2-C Modify Bearer Response Unsuccessful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_mod_bearer_resp_unsuccess DataThunderFwGtpNetworkElementStats#gtp_v2_c_mod_bearer_resp_unsuccess}
  */
  readonly gtpV2CModBearerRespUnsuccess?: number;
  /**
  * GTPv0-C Packet With Dummy MSISDN Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_packet_dummy_msisdn DataThunderFwGtpNetworkElementStats#gtp_v2_c_packet_dummy_msisdn}
  */
  readonly gtpV2CPacketDummyMsisdn?: number;
  /**
  * GTPv2-C Piggyback Messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_piggyback_message DataThunderFwGtpNetworkElementStats#gtp_v2_c_piggyback_message}
  */
  readonly gtpV2CPiggybackMessage?: number;
  /**
  * GTPv2-C Reserved Message Allow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_reserved_message_allow DataThunderFwGtpNetworkElementStats#gtp_v2_c_reserved_message_allow}
  */
  readonly gtpV2CReservedMessageAllow?: number;
  /**
  * GTPv2-C Tunnel Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_tunnel_closed DataThunderFwGtpNetworkElementStats#gtp_v2_c_tunnel_closed}
  */
  readonly gtpV2CTunnelClosed?: number;
  /**
  * GTPv2-C Tunnel Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_tunnel_created DataThunderFwGtpNetworkElementStats#gtp_v2_c_tunnel_created}
  */
  readonly gtpV2CTunnelCreated?: number;
  /**
  * GTPv2-C Tunnel Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_tunnel_deleted DataThunderFwGtpNetworkElementStats#gtp_v2_c_tunnel_deleted}
  */
  readonly gtpV2CTunnelDeleted?: number;
  /**
  * GTPv2-C Tunnel Deleted with Restart/failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_tunnel_deleted_restart DataThunderFwGtpNetworkElementStats#gtp_v2_c_tunnel_deleted_restart}
  */
  readonly gtpV2CTunnelDeletedRestart?: number;
  /**
  * GTPv2-C Tunnel Delete Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_tunnel_half_closed DataThunderFwGtpNetworkElementStats#gtp_v2_c_tunnel_half_closed}
  */
  readonly gtpV2CTunnelHalfClosed?: number;
  /**
  * GTPv2-C Half open tunnel created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#gtp_v2_c_tunnel_half_open DataThunderFwGtpNetworkElementStats#gtp_v2_c_tunnel_half_open}
  */
  readonly gtpV2CTunnelHalfOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#key_name DataThunderFwGtpNetworkElementStats#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#key_type DataThunderFwGtpNetworkElementStats#key_type}
  */
  readonly keyType?: string;
  /**
  * Uplink Bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#uplink_bytes DataThunderFwGtpNetworkElementStats#uplink_bytes}
  */
  readonly uplinkBytes?: number;
  /**
  * Uplink Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#uplink_pkts DataThunderFwGtpNetworkElementStats#uplink_pkts}
  */
  readonly uplinkPkts?: number;
}

export function dataThunderFwGtpNetworkElementStatsStatsToTerraform(struct?: DataThunderFwGtpNetworkElementStatsStatsOutputReference | DataThunderFwGtpNetworkElementStatsStats): any {
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


export function dataThunderFwGtpNetworkElementStatsStatsToHclTerraform(struct?: DataThunderFwGtpNetworkElementStatsStatsOutputReference | DataThunderFwGtpNetworkElementStatsStats): any {
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

export class DataThunderFwGtpNetworkElementStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwGtpNetworkElementStatsStats | undefined {
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

  public set internalValue(value: DataThunderFwGtpNetworkElementStatsStats | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats thunder_fw_gtp_network_element_stats}
*/
export class DataThunderFwGtpNetworkElementStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_gtp_network_element_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwGtpNetworkElementStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwGtpNetworkElementStats to import
  * @param importFromId The id of the existing DataThunderFwGtpNetworkElementStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwGtpNetworkElementStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_gtp_network_element_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_gtp_network_element_stats thunder_fw_gtp_network_element_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwGtpNetworkElementStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwGtpNetworkElementStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_gtp_network_element_stats',
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
    this._id = config.id;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderFwGtpNetworkElementStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwGtpNetworkElementStatsStats) {
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
      stats: dataThunderFwGtpNetworkElementStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderFwGtpNetworkElementStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwGtpNetworkElementStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
