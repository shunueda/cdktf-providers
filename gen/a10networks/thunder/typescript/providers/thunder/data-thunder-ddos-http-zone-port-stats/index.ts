// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosHttpZonePortStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#id DataThunderDdosHttpZonePortStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#stats DataThunderDdosHttpZonePortStats#stats}
  */
  readonly stats?: DataThunderDdosHttpZonePortStatsStats;
}
export interface DataThunderDdosHttpZonePortStatsStats {
  /**
  * ACK Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ack_auth_fail DataThunderDdosHttpZonePortStats#ack_auth_fail}
  */
  readonly ackAuthFail?: number;
  /**
  * ACK Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ack_retry_blacklist DataThunderDdosHttpZonePortStats#ack_retry_blacklist}
  */
  readonly ackRetryBlacklist?: number;
  /**
  * ACK Retry Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ack_retry_gap_drop DataThunderDdosHttpZonePortStats#ack_retry_gap_drop}
  */
  readonly ackRetryGapDrop?: number;
  /**
  * ACK Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ack_retry_init DataThunderDdosHttpZonePortStats#ack_retry_init}
  */
  readonly ackRetryInit?: number;
  /**
  * ACK Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ack_retry_pass DataThunderDdosHttpZonePortStats#ack_retry_pass}
  */
  readonly ackRetryPass?: number;
  /**
  * ACK Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ack_retry_reset DataThunderDdosHttpZonePortStats#ack_retry_reset}
  */
  readonly ackRetryReset?: number;
  /**
  * ACK Retry RTO Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ack_retry_rto_fail DataThunderDdosHttpZonePortStats#ack_retry_rto_fail}
  */
  readonly ackRetryRtoFail?: number;
  /**
  * ACK Retry RTO Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ack_retry_rto_pass DataThunderDdosHttpZonePortStats#ack_retry_rto_pass}
  */
  readonly ackRetryRtoPass?: number;
  /**
  * ACK Retry RTO Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ack_retry_rto_progress DataThunderDdosHttpZonePortStats#ack_retry_rto_progress}
  */
  readonly ackRetryRtoProgress?: number;
  /**
  * ACK Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ack_retry_timeout DataThunderDdosHttpZonePortStats#ack_retry_timeout}
  */
  readonly ackRetryTimeout?: number;
  /**
  * IP Filtering Policy: Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#addr_filter_bl DataThunderDdosHttpZonePortStats#addr_filter_bl}
  */
  readonly addrFilterBl?: number;
  /**
  * IP Filtering Policy: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#addr_filter_drop DataThunderDdosHttpZonePortStats#addr_filter_drop}
  */
  readonly addrFilterDrop?: number;
  /**
  * Dst Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#bl DataThunderDdosHttpZonePortStats#bl}
  */
  readonly bl?: number;
  /**
  * Challenge Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#challenge_failed DataThunderDdosHttpZonePortStats#challenge_failed}
  */
  readonly challengeFailed?: number;
  /**
  * Bad Payload Chunk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#chunk_bad DataThunderDdosHttpZonePortStats#chunk_bad}
  */
  readonly chunkBad?: number;
  /**
  * Payload Chunk Size Less Than or Equal to 1K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#chunk_sz_1k DataThunderDdosHttpZonePortStats#chunk_sz_1k}
  */
  readonly chunkSz1K?: number;
  /**
  * Payload Chunk Size Less Than or Equal to 2K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#chunk_sz_2k DataThunderDdosHttpZonePortStats#chunk_sz_2k}
  */
  readonly chunkSz2K?: number;
  /**
  * Payload Chunk Size Less Than or Equal to 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#chunk_sz_4k DataThunderDdosHttpZonePortStats#chunk_sz_4k}
  */
  readonly chunkSz4K?: number;
  /**
  * Payload Chunk Size Less Than or Equal to 512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#chunk_sz_512 DataThunderDdosHttpZonePortStats#chunk_sz_512}
  */
  readonly chunkSz512?: number;
  /**
  * Payload Chunk Size Larger Than 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#chunk_sz_gt_4k DataThunderDdosHttpZonePortStats#chunk_sz_gt_4k}
  */
  readonly chunkSzGt4K?: number;
  /**
  * Client TCP RST Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#client_rst DataThunderDdosHttpZonePortStats#client_rst}
  */
  readonly clientRst?: number;
  /**
  * Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#conn_close DataThunderDdosHttpZonePortStats#conn_close}
  */
  readonly connClose?: number;
  /**
  * Half Open Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#conn_close_half_open DataThunderDdosHttpZonePortStats#conn_close_half_open}
  */
  readonly connCloseHalfOpen?: number;
  /**
  * FIN Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#conn_close_w_fin DataThunderDdosHttpZonePortStats#conn_close_w_fin}
  */
  readonly connCloseWFin?: number;
  /**
  * Idle Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#conn_close_w_idle DataThunderDdosHttpZonePortStats#conn_close_w_idle}
  */
  readonly connCloseWIdle?: number;
  /**
  * RST Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#conn_close_w_rst DataThunderDdosHttpZonePortStats#conn_close_w_rst}
  */
  readonly connCloseWRst?: number;
  /**
  * Connections Created From ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#conn_create_from_ack DataThunderDdosHttpZonePortStats#conn_create_from_ack}
  */
  readonly connCreateFromAck?: number;
  /**
  * Connections Created From SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#conn_create_from_syn DataThunderDdosHttpZonePortStats#conn_create_from_syn}
  */
  readonly connCreateFromSyn?: number;
  /**
  * Connections Created From SYNACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#conn_create_from_synack DataThunderDdosHttpZonePortStats#conn_create_from_synack}
  */
  readonly connCreateFromSynack?: number;
  /**
  * TCP Conn Out-Of-Seq Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#conn_ofo_rate_excd DataThunderDdosHttpZonePortStats#conn_ofo_rate_excd}
  */
  readonly connOfoRateExcd?: number;
  /**
  * TCP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#conn_prate_excd DataThunderDdosHttpZonePortStats#conn_prate_excd}
  */
  readonly connPrateExcd?: number;
  /**
  * TCP Conn Retransmit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#conn_rexmit_rate_excd DataThunderDdosHttpZonePortStats#conn_rexmit_rate_excd}
  */
  readonly connRexmitRateExcd?: number;
  /**
  * TCP Conn Zero-Window Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#conn_zwindow_rate_excd DataThunderDdosHttpZonePortStats#conn_zwindow_rate_excd}
  */
  readonly connZwindowRateExcd?: number;
  /**
  * Malform Content Length Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#content_length_too_long DataThunderDdosHttpZonePortStats#content_length_too_long}
  */
  readonly contentLengthTooLong?: number;
  /**
  * Create Conn with non-SYN Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#create_conn_non_syn_dropped DataThunderDdosHttpZonePortStats#create_conn_non_syn_dropped}
  */
  readonly createConnNonSynDropped?: number;
  /**
  * Current Escalation Level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#current_es_level DataThunderDdosHttpZonePortStats#current_es_level}
  */
  readonly currentEsLevel?: number;
  /**
  * Dst Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#dst_hw_drop DataThunderDdosHttpZonePortStats#dst_hw_drop}
  */
  readonly dstHwDrop?: number;
  /**
  * Dst Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#dst_hw_drop_inserted DataThunderDdosHttpZonePortStats#dst_hw_drop_inserted}
  */
  readonly dstHwDropInserted?: number;
  /**
  * Dst Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#dst_hw_drop_removed DataThunderDdosHttpZonePortStats#dst_hw_drop_removed}
  */
  readonly dstHwDropRemoved?: number;
  /**
  * Dst Post Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#dst_post_rate_exceed DataThunderDdosHttpZonePortStats#dst_post_rate_exceed}
  */
  readonly dstPostRateExceed?: number;
  /**
  * Dst Request Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#dst_req_rate_exceed DataThunderDdosHttpZonePortStats#dst_req_rate_exceed}
  */
  readonly dstReqRateExceed?: number;
  /**
  * Dst Response Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#dst_resp_rate_exceed DataThunderDdosHttpZonePortStats#dst_resp_rate_exceed}
  */
  readonly dstRespRateExceed?: number;
  /**
  * Error Condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#er_condition DataThunderDdosHttpZonePortStats#er_condition}
  */
  readonly erCondition?: number;
  /**
  * East-West Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ew_inbound_port_byte_drop DataThunderDdosHttpZonePortStats#ew_inbound_port_byte_drop}
  */
  readonly ewInboundPortByteDrop?: number;
  /**
  * East-West Inbound Bytes Recevied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ew_inbound_port_byte_rcv DataThunderDdosHttpZonePortStats#ew_inbound_port_byte_rcv}
  */
  readonly ewInboundPortByteRcv?: number;
  /**
  * East-West Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ew_inbound_port_byte_sent DataThunderDdosHttpZonePortStats#ew_inbound_port_byte_sent}
  */
  readonly ewInboundPortByteSent?: number;
  /**
  * East-West Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ew_inbound_port_drop DataThunderDdosHttpZonePortStats#ew_inbound_port_drop}
  */
  readonly ewInboundPortDrop?: number;
  /**
  * East-West Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ew_inbound_port_rcv DataThunderDdosHttpZonePortStats#ew_inbound_port_rcv}
  */
  readonly ewInboundPortRcv?: number;
  /**
  * East-West Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ew_inbound_port_sent DataThunderDdosHttpZonePortStats#ew_inbound_port_sent}
  */
  readonly ewInboundPortSent?: number;
  /**
  * East-West Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ew_outbound_port_byte_drop DataThunderDdosHttpZonePortStats#ew_outbound_port_byte_drop}
  */
  readonly ewOutboundPortByteDrop?: number;
  /**
  * East-West Outbound Bytes Recevied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ew_outbound_port_byte_rcv DataThunderDdosHttpZonePortStats#ew_outbound_port_byte_rcv}
  */
  readonly ewOutboundPortByteRcv?: number;
  /**
  * East-West Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ew_outbound_port_byte_sent DataThunderDdosHttpZonePortStats#ew_outbound_port_byte_sent}
  */
  readonly ewOutboundPortByteSent?: number;
  /**
  * East-West Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ew_outbound_port_drop DataThunderDdosHttpZonePortStats#ew_outbound_port_drop}
  */
  readonly ewOutboundPortDrop?: number;
  /**
  * East-West Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ew_outbound_port_rcv DataThunderDdosHttpZonePortStats#ew_outbound_port_rcv}
  */
  readonly ewOutboundPortRcv?: number;
  /**
  * East-West Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ew_outbound_port_sent DataThunderDdosHttpZonePortStats#ew_outbound_port_sent}
  */
  readonly ewOutboundPortSent?: number;
  /**
  * Exceed Action: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#exceed_action_drop DataThunderDdosHttpZonePortStats#exceed_action_drop}
  */
  readonly exceedActionDrop?: number;
  /**
  * Exceed Action: Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#exceed_action_tunnel DataThunderDdosHttpZonePortStats#exceed_action_tunnel}
  */
  readonly exceedActionTunnel?: number;
  /**
  * Src KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#exceed_drop_brate_src DataThunderDdosHttpZonePortStats#exceed_drop_brate_src}
  */
  readonly exceedDropBrateSrc?: number;
  /**
  * Src KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#exceed_drop_brate_src_pkt DataThunderDdosHttpZonePortStats#exceed_drop_brate_src_pkt}
  */
  readonly exceedDropBrateSrcPkt?: number;
  /**
  * Src Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#exceed_drop_climit_src DataThunderDdosHttpZonePortStats#exceed_drop_climit_src}
  */
  readonly exceedDropClimitSrc?: number;
  /**
  * Src Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#exceed_drop_crate_src DataThunderDdosHttpZonePortStats#exceed_drop_crate_src}
  */
  readonly exceedDropCrateSrc?: number;
  /**
  * Src Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#exceed_drop_prate_src DataThunderDdosHttpZonePortStats#exceed_drop_prate_src}
  */
  readonly exceedDropPrateSrc?: number;
  /**
  * Alloc Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#fail_alloc DataThunderDdosHttpZonePortStats#fail_alloc}
  */
  readonly failAlloc?: number;
  /**
  * Alloc Header Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#fail_alloc_hdr DataThunderDdosHttpZonePortStats#fail_alloc_hdr}
  */
  readonly failAllocHdr?: number;
  /**
  * Get Line Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#fail_get_line DataThunderDdosHttpZonePortStats#fail_get_line}
  */
  readonly failGetLine?: number;
  /**
  * Filter10 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter10_drop DataThunderDdosHttpZonePortStats#filter10_drop}
  */
  readonly filter10Drop?: number;
  /**
  * Filter10 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter10_match DataThunderDdosHttpZonePortStats#filter10_match}
  */
  readonly filter10Match?: number;
  /**
  * Filter1 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter1_drop DataThunderDdosHttpZonePortStats#filter1_drop}
  */
  readonly filter1Drop?: number;
  /**
  * Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter1_match DataThunderDdosHttpZonePortStats#filter1_match}
  */
  readonly filter1Match?: number;
  /**
  * Filter2 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter2_drop DataThunderDdosHttpZonePortStats#filter2_drop}
  */
  readonly filter2Drop?: number;
  /**
  * Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter2_match DataThunderDdosHttpZonePortStats#filter2_match}
  */
  readonly filter2Match?: number;
  /**
  * Filter3 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter3_drop DataThunderDdosHttpZonePortStats#filter3_drop}
  */
  readonly filter3Drop?: number;
  /**
  * Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter3_match DataThunderDdosHttpZonePortStats#filter3_match}
  */
  readonly filter3Match?: number;
  /**
  * Filter4 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter4_drop DataThunderDdosHttpZonePortStats#filter4_drop}
  */
  readonly filter4Drop?: number;
  /**
  * Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter4_match DataThunderDdosHttpZonePortStats#filter4_match}
  */
  readonly filter4Match?: number;
  /**
  * Filter5 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter5_drop DataThunderDdosHttpZonePortStats#filter5_drop}
  */
  readonly filter5Drop?: number;
  /**
  * Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter5_match DataThunderDdosHttpZonePortStats#filter5_match}
  */
  readonly filter5Match?: number;
  /**
  * Filter6 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter6_drop DataThunderDdosHttpZonePortStats#filter6_drop}
  */
  readonly filter6Drop?: number;
  /**
  * Filter6 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter6_match DataThunderDdosHttpZonePortStats#filter6_match}
  */
  readonly filter6Match?: number;
  /**
  * Filter7 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter7_drop DataThunderDdosHttpZonePortStats#filter7_drop}
  */
  readonly filter7Drop?: number;
  /**
  * Filter7 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter7_match DataThunderDdosHttpZonePortStats#filter7_match}
  */
  readonly filter7Match?: number;
  /**
  * Filter8 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter8_drop DataThunderDdosHttpZonePortStats#filter8_drop}
  */
  readonly filter8Drop?: number;
  /**
  * Filter8 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter8_match DataThunderDdosHttpZonePortStats#filter8_match}
  */
  readonly filter8Match?: number;
  /**
  * Filter9 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter9_drop DataThunderDdosHttpZonePortStats#filter9_drop}
  */
  readonly filter9Drop?: number;
  /**
  * Filter9 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter9_match DataThunderDdosHttpZonePortStats#filter9_match}
  */
  readonly filter9Match?: number;
  /**
  * Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter_action_blacklist DataThunderDdosHttpZonePortStats#filter_action_blacklist}
  */
  readonly filterActionBlacklist?: number;
  /**
  * Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter_action_default_pass DataThunderDdosHttpZonePortStats#filter_action_default_pass}
  */
  readonly filterActionDefaultPass?: number;
  /**
  * Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter_action_drop DataThunderDdosHttpZonePortStats#filter_action_drop}
  */
  readonly filterActionDrop?: number;
  /**
  * Filter Action Whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter_action_whitelist DataThunderDdosHttpZonePortStats#filter_action_whitelist}
  */
  readonly filterActionWhitelist?: number;
  /**
  * Filter Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter_auth_fail DataThunderDdosHttpZonePortStats#filter_auth_fail}
  */
  readonly filterAuthFail?: number;
  /**
  * Filter Total Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter_match DataThunderDdosHttpZonePortStats#filter_match}
  */
  readonly filterMatch?: number;
  /**
  * Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter_none_match DataThunderDdosHttpZonePortStats#filter_none_match}
  */
  readonly filterNoneMatch?: number;
  /**
  * Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#filter_not_match DataThunderDdosHttpZonePortStats#filter_not_match}
  */
  readonly filterNotMatch?: number;
  /**
  * Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#frag_drop DataThunderDdosHttpZonePortStats#frag_drop}
  */
  readonly fragDrop?: number;
  /**
  * Fragmented Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#frag_rcvd DataThunderDdosHttpZonePortStats#frag_rcvd}
  */
  readonly fragRcvd?: number;
  /**
  * Fragmented Packets Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#frag_timeout DataThunderDdosHttpZonePortStats#frag_timeout}
  */
  readonly fragTimeout?: number;
  /**
  * Header Name Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#header_name_too_long DataThunderDdosHttpZonePortStats#header_name_too_long}
  */
  readonly headerNameTooLong?: number;
  /**
  * Header Process Incomplete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#header_processing_incomplete DataThunderDdosHttpZonePortStats#header_processing_incomplete}
  */
  readonly headerProcessingIncomplete?: number;
  /**
  * Header Process Time Less Than 1s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#header_processing_time_0 DataThunderDdosHttpZonePortStats#header_processing_time_0}
  */
  readonly headerProcessingTime0?: number;
  /**
  * Header Process Time Less Than 10s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#header_processing_time_1 DataThunderDdosHttpZonePortStats#header_processing_time_1}
  */
  readonly headerProcessingTime1?: number;
  /**
  * Header Process Time Less Than 30S
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#header_processing_time_2 DataThunderDdosHttpZonePortStats#header_processing_time_2}
  */
  readonly headerProcessingTime2?: number;
  /**
  * Header Process Time Larger or Equal to 30s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#header_processing_time_3 DataThunderDdosHttpZonePortStats#header_processing_time_3}
  */
  readonly headerProcessingTime3?: number;
  /**
  * HTTP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#http_auth_drop DataThunderDdosHttpZonePortStats#http_auth_drop}
  */
  readonly httpAuthDrop?: number;
  /**
  * HTTP Auth Responded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#http_auth_resp DataThunderDdosHttpZonePortStats#http_auth_resp}
  */
  readonly httpAuthResp?: number;
  /**
  * Idle Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#idle_timeout DataThunderDdosHttpZonePortStats#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * HTTP Header Name Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#invalid_hdr_name DataThunderDdosHttpZonePortStats#invalid_hdr_name}
  */
  readonly invalidHdrName?: number;
  /**
  * HTTP Header Value Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#invalid_hdr_val DataThunderDdosHttpZonePortStats#invalid_hdr_val}
  */
  readonly invalidHdrVal?: number;
  /**
  * HTTP Header Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#invalid_header DataThunderDdosHttpZonePortStats#invalid_header}
  */
  readonly invalidHeader?: number;
  /**
  * Challenge Javascript Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#js_challenge_failed DataThunderDdosHttpZonePortStats#js_challenge_failed}
  */
  readonly jsChallengeFailed?: number;
  /**
  * Challenge Javascript Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#js_challenge_sent DataThunderDdosHttpZonePortStats#js_challenge_sent}
  */
  readonly jsChallengeSent?: number;
  /**
  * Min Payload Size Fail Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#less_than_mss_exceed DataThunderDdosHttpZonePortStats#less_than_mss_exceed}
  */
  readonly lessThanMssExceed?: number;
  /**
  * Line Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#line_too_long DataThunderDdosHttpZonePortStats#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Negative Request Remain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#negative_req_remain DataThunderDdosHttpZonePortStats#negative_req_remain}
  */
  readonly negativeReqRemain?: number;
  /**
  * Negative Response Remain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#negative_resp_remain DataThunderDdosHttpZonePortStats#negative_resp_remain}
  */
  readonly negativeRespRemain?: number;
  /**
  * TCP SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#new_syn DataThunderDdosHttpZonePortStats#new_syn}
  */
  readonly newSyn?: number;
  /**
  * No Policy Class-list Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#no_policy_class_list_match DataThunderDdosHttpZonePortStats#no_policy_class_list_match}
  */
  readonly noPolicyClassListMatch?: number;
  /**
  * No Route Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#no_route_drop DataThunderDdosHttpZonePortStats#no_route_drop}
  */
  readonly noRouteDrop?: number;
  /**
  * Out-Of-Order Queue Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ofo_queue_sz_exceed DataThunderDdosHttpZonePortStats#ofo_queue_sz_exceed}
  */
  readonly ofoQueueSzExceed?: number;
  /**
  * Out-Of-Order Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ofo_timer_expired DataThunderDdosHttpZonePortStats#ofo_timer_expired}
  */
  readonly ofoTimerExpired?: number;
  /**
  * Out-Of-Seq Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#out_of_seq_excd DataThunderDdosHttpZonePortStats#out_of_seq_excd}
  */
  readonly outOfSeqExcd?: number;
  /**
  * Outbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#outbound_port_bytes DataThunderDdosHttpZonePortStats#outbound_port_bytes}
  */
  readonly outboundPortBytes?: number;
  /**
  * Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#outbound_port_bytes_drop DataThunderDdosHttpZonePortStats#outbound_port_bytes_drop}
  */
  readonly outboundPortBytesDrop?: number;
  /**
  * Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#outbound_port_bytes_sent DataThunderDdosHttpZonePortStats#outbound_port_bytes_sent}
  */
  readonly outboundPortBytesSent?: number;
  /**
  * Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#outbound_port_drop DataThunderDdosHttpZonePortStats#outbound_port_drop}
  */
  readonly outboundPortDrop?: number;
  /**
  * Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#outbound_port_pkt_sent DataThunderDdosHttpZonePortStats#outbound_port_pkt_sent}
  */
  readonly outboundPortPktSent?: number;
  /**
  * Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#outbound_port_rcvd DataThunderDdosHttpZonePortStats#outbound_port_rcvd}
  */
  readonly outboundPortRcvd?: number;
  /**
  * Malform Bad Chunk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#parse_bad_chunk DataThunderDdosHttpZonePortStats#parse_bad_chunk}
  */
  readonly parseBadChunk?: number;
  /**
  * Malform Header Name Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#parse_header_name_too_long DataThunderDdosHttpZonePortStats#parse_header_name_too_long}
  */
  readonly parseHeaderNameTooLong?: number;
  /**
  * Malform Line Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#parse_line_too_long DataThunderDdosHttpZonePortStats#parse_line_too_long}
  */
  readonly parseLineTooLong?: number;
  /**
  * Malform Request Line Invalid Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#parse_req_line_invalid_method DataThunderDdosHttpZonePortStats#parse_req_line_invalid_method}
  */
  readonly parseReqLineInvalidMethod?: number;
  /**
  * Malform Request Line Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#parse_req_line_too_long DataThunderDdosHttpZonePortStats#parse_req_line_too_long}
  */
  readonly parseReqLineTooLong?: number;
  /**
  * Malform Request Line Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#parse_req_line_too_small DataThunderDdosHttpZonePortStats#parse_req_line_too_small}
  */
  readonly parseReqLineTooSmall?: number;
  /**
  * Malform Too Many Headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#parse_too_many_headers DataThunderDdosHttpZonePortStats#parse_too_many_headers}
  */
  readonly parseTooManyHeaders?: number;
  /**
  * Parse Request Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#parsereq_fail DataThunderDdosHttpZonePortStats#parsereq_fail}
  */
  readonly parsereqFail?: number;
  /**
  * Partial Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#partial_header DataThunderDdosHttpZonePortStats#partial_header}
  */
  readonly partialHeader?: number;
  /**
  * Extracted Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pattern_filter1_match DataThunderDdosHttpZonePortStats#pattern_filter1_match}
  */
  readonly patternFilter1Match?: number;
  /**
  * Extracted Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pattern_filter2_match DataThunderDdosHttpZonePortStats#pattern_filter2_match}
  */
  readonly patternFilter2Match?: number;
  /**
  * Extracted Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pattern_filter3_match DataThunderDdosHttpZonePortStats#pattern_filter3_match}
  */
  readonly patternFilter3Match?: number;
  /**
  * Extracted Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pattern_filter4_match DataThunderDdosHttpZonePortStats#pattern_filter4_match}
  */
  readonly patternFilter4Match?: number;
  /**
  * Extracted Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pattern_filter5_match DataThunderDdosHttpZonePortStats#pattern_filter5_match}
  */
  readonly patternFilter5Match?: number;
  /**
  * Extracted Filter Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pattern_filter_drop DataThunderDdosHttpZonePortStats#pattern_filter_drop}
  */
  readonly patternFilterDrop?: number;
  /**
  * Pattern Recognition: Pattern Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pattern_not_found DataThunderDdosHttpZonePortStats#pattern_not_found}
  */
  readonly patternNotFound?: number;
  /**
  * Pattern Recognition: Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pattern_recognition_generic_error DataThunderDdosHttpZonePortStats#pattern_recognition_generic_error}
  */
  readonly patternRecognitionGenericError?: number;
  /**
  * Pattern Recognition: Pattern Change Detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pattern_recognition_pattern_changed DataThunderDdosHttpZonePortStats#pattern_recognition_pattern_changed}
  */
  readonly patternRecognitionPatternChanged?: number;
  /**
  * Pattern Recognition: Engine Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pattern_recognition_proceeded DataThunderDdosHttpZonePortStats#pattern_recognition_proceeded}
  */
  readonly patternRecognitionProceeded?: number;
  /**
  * Pattern Recognition: Sampling Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pattern_recognition_sampling_started DataThunderDdosHttpZonePortStats#pattern_recognition_sampling_started}
  */
  readonly patternRecognitionSamplingStarted?: number;
  /**
  * Connect Passthru Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pkts_connect_passthru DataThunderDdosHttpZonePortStats#pkts_connect_passthru}
  */
  readonly pktsConnectPassthru?: number;
  /**
  * Out-Of-Order Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pkts_ofo DataThunderDdosHttpZonePortStats#pkts_ofo}
  */
  readonly pktsOfo?: number;
  /**
  * TCP Retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pkts_retrans DataThunderDdosHttpZonePortStats#pkts_retrans}
  */
  readonly pktsRetrans?: number;
  /**
  * TCP Retransmit FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pkts_retrans_fin DataThunderDdosHttpZonePortStats#pkts_retrans_fin}
  */
  readonly pktsRetransFin?: number;
  /**
  * TCP Retransmit PSH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pkts_retrans_push DataThunderDdosHttpZonePortStats#pkts_retrans_push}
  */
  readonly pktsRetransPush?: number;
  /**
  * TCP Retransmit RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#pkts_retrans_rst DataThunderDdosHttpZonePortStats#pkts_retrans_rst}
  */
  readonly pktsRetransRst?: number;
  /**
  * Policy Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#policy_drop DataThunderDdosHttpZonePortStats#policy_drop}
  */
  readonly policyDrop?: number;
  /**
  * Policy Violation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#policy_violation DataThunderDdosHttpZonePortStats#policy_violation}
  */
  readonly policyViolation?: number;
  /**
  * Inbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_bytes DataThunderDdosHttpZonePortStats#port_bytes}
  */
  readonly portBytes?: number;
  /**
  * Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_bytes_drop DataThunderDdosHttpZonePortStats#port_bytes_drop}
  */
  readonly portBytesDrop?: number;
  /**
  * Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_bytes_sent DataThunderDdosHttpZonePortStats#port_bytes_sent}
  */
  readonly portBytesSent?: number;
  /**
  * Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_conn_limm_exceed DataThunderDdosHttpZonePortStats#port_conn_limm_exceed}
  */
  readonly portConnLimmExceed?: number;
  /**
  * Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_conn_rate_exceed DataThunderDdosHttpZonePortStats#port_conn_rate_exceed}
  */
  readonly portConnRateExceed?: number;
  /**
  * Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_drop DataThunderDdosHttpZonePortStats#port_drop}
  */
  readonly portDrop?: number;
  /**
  * KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_kbit_rate_exceed DataThunderDdosHttpZonePortStats#port_kbit_rate_exceed}
  */
  readonly portKbitRateExceed?: number;
  /**
  * KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_kbit_rate_exceed_pkt DataThunderDdosHttpZonePortStats#port_kbit_rate_exceed_pkt}
  */
  readonly portKbitRateExceedPkt?: number;
  /**
  * Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_pkt_rate_exceed DataThunderDdosHttpZonePortStats#port_pkt_rate_exceed}
  */
  readonly portPktRateExceed?: number;
  /**
  * Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_pkt_sent DataThunderDdosHttpZonePortStats#port_pkt_sent}
  */
  readonly portPktSent?: number;
  /**
  * Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_rcvd DataThunderDdosHttpZonePortStats#port_rcvd}
  */
  readonly portRcvd?: number;
  /**
  * Src Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_src_bl DataThunderDdosHttpZonePortStats#port_src_bl}
  */
  readonly portSrcBl?: number;
  /**
  * Src Escalation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_src_escalation DataThunderDdosHttpZonePortStats#port_src_escalation}
  */
  readonly portSrcEscalation?: number;
  /**
  * TCP SYN Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_syn_rate_exceed DataThunderDdosHttpZonePortStats#port_syn_rate_exceed}
  */
  readonly portSynRateExceed?: number;
  /**
  * TCP SYNACK Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#port_synack_rate_exceed DataThunderDdosHttpZonePortStats#port_synack_rate_exceed}
  */
  readonly portSynackRateExceed?: number;
  /**
  * Packets Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#processed DataThunderDdosHttpZonePortStats#processed}
  */
  readonly processed?: number;
  /**
  * Connection: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_conn_exceed_bl DataThunderDdosHttpZonePortStats#prog_conn_exceed_bl}
  */
  readonly progConnExceedBl?: number;
  /**
  * Connection: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_conn_exceed_drop DataThunderDdosHttpZonePortStats#prog_conn_exceed_drop}
  */
  readonly progConnExceedDrop?: number;
  /**
  * Connection: Violation Exceed Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_conn_exceed_reset DataThunderDdosHttpZonePortStats#prog_conn_exceed_reset}
  */
  readonly progConnExceedReset?: number;
  /**
  * Connection: Received Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_conn_rcvd_exceed DataThunderDdosHttpZonePortStats#prog_conn_rcvd_exceed}
  */
  readonly progConnRcvdExceed?: number;
  /**
  * Connection: Received to Sent Ratio Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_conn_rcvd_sent_ratio_exceed DataThunderDdosHttpZonePortStats#prog_conn_rcvd_sent_ratio_exceed}
  */
  readonly progConnRcvdSentRatioExceed?: number;
  /**
  * Sample Collected: Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_conn_samples DataThunderDdosHttpZonePortStats#prog_conn_samples}
  */
  readonly progConnSamples?: number;
  /**
  * Sample Processed: Connnection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_conn_samples_processed DataThunderDdosHttpZonePortStats#prog_conn_samples_processed}
  */
  readonly progConnSamplesProcessed?: number;
  /**
  * Connection: Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_conn_sent_exceed DataThunderDdosHttpZonePortStats#prog_conn_sent_exceed}
  */
  readonly progConnSentExceed?: number;
  /**
  * Connection: Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_conn_time_exceed DataThunderDdosHttpZonePortStats#prog_conn_time_exceed}
  */
  readonly progConnTimeExceed?: number;
  /**
  * Req-Resp: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_exceed_bl DataThunderDdosHttpZonePortStats#prog_exceed_bl}
  */
  readonly progExceedBl?: number;
  /**
  * Req-Resp: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_exceed_drop DataThunderDdosHttpZonePortStats#prog_exceed_drop}
  */
  readonly progExceedDrop?: number;
  /**
  * Req-Resp: Violation Exceed Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_exceed_reset DataThunderDdosHttpZonePortStats#prog_exceed_reset}
  */
  readonly progExceedReset?: number;
  /**
  * Req-Resp: First Request Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_first_req_time_exceed DataThunderDdosHttpZonePortStats#prog_first_req_time_exceed}
  */
  readonly progFirstReqTimeExceed?: number;
  /**
  * Req-Resp: Request to Response Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_req_resp_time_exceed DataThunderDdosHttpZonePortStats#prog_req_resp_time_exceed}
  */
  readonly progReqRespTimeExceed?: number;
  /**
  * Sample Collected: Req-Resp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_req_samples DataThunderDdosHttpZonePortStats#prog_req_samples}
  */
  readonly progReqSamples?: number;
  /**
  * Sample Processed: Req-Resp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_req_samples_processed DataThunderDdosHttpZonePortStats#prog_req_samples_processed}
  */
  readonly progReqSamplesProcessed?: number;
  /**
  * Req-Resp: Request Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_request_len_exceed DataThunderDdosHttpZonePortStats#prog_request_len_exceed}
  */
  readonly progRequestLenExceed?: number;
  /**
  * Req-Resp: Response to Request Ratio Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_resp_req_ratio_exceed DataThunderDdosHttpZonePortStats#prog_resp_req_ratio_exceed}
  */
  readonly progRespReqRatioExceed?: number;
  /**
  * Req-Resp: Response to Request Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_resp_req_time_exceed DataThunderDdosHttpZonePortStats#prog_resp_req_time_exceed}
  */
  readonly progRespReqTimeExceed?: number;
  /**
  * Req-Resp: Response Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_response_len_exceed DataThunderDdosHttpZonePortStats#prog_response_len_exceed}
  */
  readonly progResponseLenExceed?: number;
  /**
  * Time Window: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_win_exceed_bl DataThunderDdosHttpZonePortStats#prog_win_exceed_bl}
  */
  readonly progWinExceedBl?: number;
  /**
  * Time Window: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_win_exceed_drop DataThunderDdosHttpZonePortStats#prog_win_exceed_drop}
  */
  readonly progWinExceedDrop?: number;
  /**
  * Time Window: Violation Exceed Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_win_exceed_reset DataThunderDdosHttpZonePortStats#prog_win_exceed_reset}
  */
  readonly progWinExceedReset?: number;
  /**
  * Time Window: Received Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_win_rcvd_exceed DataThunderDdosHttpZonePortStats#prog_win_rcvd_exceed}
  */
  readonly progWinRcvdExceed?: number;
  /**
  * Time Window: Received to Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_win_rcvd_sent_ratio_exceed DataThunderDdosHttpZonePortStats#prog_win_rcvd_sent_ratio_exceed}
  */
  readonly progWinRcvdSentRatioExceed?: number;
  /**
  * Sample Collected: Time Window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_win_samples DataThunderDdosHttpZonePortStats#prog_win_samples}
  */
  readonly progWinSamples?: number;
  /**
  * Sample Processed: Time Window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_win_samples_processed DataThunderDdosHttpZonePortStats#prog_win_samples_processed}
  */
  readonly progWinSamplesProcessed?: number;
  /**
  * Time Window: Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#prog_win_sent_exceed DataThunderDdosHttpZonePortStats#prog_win_sent_exceed}
  */
  readonly progWinSentExceed?: number;
  /**
  * Referer Filter Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#referer_filter_blacklist DataThunderDdosHttpZonePortStats#referer_filter_blacklist}
  */
  readonly refererFilterBlacklist?: number;
  /**
  * Referer Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#referer_filter_match DataThunderDdosHttpZonePortStats#referer_filter_match}
  */
  readonly refererFilterMatch?: number;
  /**
  * Request Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req DataThunderDdosHttpZonePortStats#req}
  */
  readonly req?: number;
  /**
  * Request Method CONNECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_connect DataThunderDdosHttpZonePortStats#req_connect}
  */
  readonly reqConnect?: number;
  /**
  * Request Content Length Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_content_len DataThunderDdosHttpZonePortStats#req_content_len}
  */
  readonly reqContentLen?: number;
  /**
  * Request Method DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_delete DataThunderDdosHttpZonePortStats#req_delete}
  */
  readonly reqDelete?: number;
  /**
  * Request Method GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_get DataThunderDdosHttpZonePortStats#req_get}
  */
  readonly reqGet?: number;
  /**
  * Request Method HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_head DataThunderDdosHttpZonePortStats#req_head}
  */
  readonly reqHead?: number;
  /**
  * Request HTTP 1.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_http10 DataThunderDdosHttpZonePortStats#req_http10}
  */
  readonly reqHttp10?: number;
  /**
  * Request HTTP 1.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_http11 DataThunderDdosHttpZonePortStats#req_http11}
  */
  readonly reqHttp11?: number;
  /**
  * Out-Of-Order Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_ofo DataThunderDdosHttpZonePortStats#req_ofo}
  */
  readonly reqOfo?: number;
  /**
  * Request Method OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_options DataThunderDdosHttpZonePortStats#req_options}
  */
  readonly reqOptions?: number;
  /**
  * Request Method POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_post DataThunderDdosHttpZonePortStats#req_post}
  */
  readonly reqPost?: number;
  /**
  * Request Method PUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_put DataThunderDdosHttpZonePortStats#req_put}
  */
  readonly reqPut?: number;
  /**
  * Request Retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_retran DataThunderDdosHttpZonePortStats#req_retran}
  */
  readonly reqRetran?: number;
  /**
  * Request Payload Size Less Than or Equal to 16K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_sz_16k DataThunderDdosHttpZonePortStats#req_sz_16k}
  */
  readonly reqSz16K?: number;
  /**
  * Request Payload Size Less Than or Equal to 1K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_sz_1k DataThunderDdosHttpZonePortStats#req_sz_1k}
  */
  readonly reqSz1K?: number;
  /**
  * Request Payload Size Less Than or Equal to 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_sz_256k DataThunderDdosHttpZonePortStats#req_sz_256k}
  */
  readonly reqSz256K?: number;
  /**
  * Request Payload Size Less Than or Equal to 2K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_sz_2k DataThunderDdosHttpZonePortStats#req_sz_2k}
  */
  readonly reqSz2K?: number;
  /**
  * Request Payload Size Less Than or Equal to 32K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_sz_32k DataThunderDdosHttpZonePortStats#req_sz_32k}
  */
  readonly reqSz32K?: number;
  /**
  * Request Payload Size Less Than or Equal to 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_sz_4k DataThunderDdosHttpZonePortStats#req_sz_4k}
  */
  readonly reqSz4K?: number;
  /**
  * Request Payload Size Less Than or Equal to 64K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_sz_64k DataThunderDdosHttpZonePortStats#req_sz_64k}
  */
  readonly reqSz64K?: number;
  /**
  * Request Payload Size Less Than or Equal to 8K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_sz_8k DataThunderDdosHttpZonePortStats#req_sz_8k}
  */
  readonly reqSz8K?: number;
  /**
  * Request Payload Size Larger Than 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_sz_gt_256k DataThunderDdosHttpZonePortStats#req_sz_gt_256k}
  */
  readonly reqSzGt256K?: number;
  /**
  * Request Method TRACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_trace DataThunderDdosHttpZonePortStats#req_trace}
  */
  readonly reqTrace?: number;
  /**
  * Request Method UNKNOWN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#req_unknown DataThunderDdosHttpZonePortStats#req_unknown}
  */
  readonly reqUnknown?: number;
  /**
  * HTTP Status Code 1XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#resp_code_1xx DataThunderDdosHttpZonePortStats#resp_code_1xx}
  */
  readonly respCode1Xx?: number;
  /**
  * HTTP Status Code 2XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#resp_code_2xx DataThunderDdosHttpZonePortStats#resp_code_2xx}
  */
  readonly respCode2Xx?: number;
  /**
  * HTTP Status Code 3XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#resp_code_3xx DataThunderDdosHttpZonePortStats#resp_code_3xx}
  */
  readonly respCode3Xx?: number;
  /**
  * HTTP Status Code 4XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#resp_code_4xx DataThunderDdosHttpZonePortStats#resp_code_4xx}
  */
  readonly respCode4Xx?: number;
  /**
  * HTTP Status Code 5XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#resp_code_5xx DataThunderDdosHttpZonePortStats#resp_code_5xx}
  */
  readonly respCode5Xx?: number;
  /**
  * HTTP Status Code OTHER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#resp_code_other DataThunderDdosHttpZonePortStats#resp_code_other}
  */
  readonly respCodeOther?: number;
  /**
  * Bad HTTP Response Chunk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#resp_mib_chunk_bad DataThunderDdosHttpZonePortStats#resp_mib_chunk_bad}
  */
  readonly respMibChunkBad?: number;
  /**
  * Retransmit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#retransmit_excd DataThunderDdosHttpZonePortStats#retransmit_excd}
  */
  readonly retransmitExcd?: number;
  /**
  * Response Chunk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#rsp_chunk DataThunderDdosHttpZonePortStats#rsp_chunk}
  */
  readonly rspChunk?: number;
  /**
  * RST Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#rst_cookie_fail DataThunderDdosHttpZonePortStats#rst_cookie_fail}
  */
  readonly rstCookieFail?: number;
  /**
  * Per Addr-Port Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#secondary_port_conn_limm_exceed DataThunderDdosHttpZonePortStats#secondary_port_conn_limm_exceed}
  */
  readonly secondaryPortConnLimmExceed?: number;
  /**
  * Per Addr-Port Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#secondary_port_conn_rate_exceed DataThunderDdosHttpZonePortStats#secondary_port_conn_rate_exceed}
  */
  readonly secondaryPortConnRateExceed?: number;
  /**
  * Per Addr-Port Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#secondary_port_hit DataThunderDdosHttpZonePortStats#secondary_port_hit}
  */
  readonly secondaryPortHit?: number;
  /**
  * Per Addr-Port KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#secondary_port_kbit_rate_exceed DataThunderDdosHttpZonePortStats#secondary_port_kbit_rate_exceed}
  */
  readonly secondaryPortKbitRateExceed?: number;
  /**
  * Per Addr-Port KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#secondary_port_kbit_rate_exceed_pkt DataThunderDdosHttpZonePortStats#secondary_port_kbit_rate_exceed_pkt}
  */
  readonly secondaryPortKbitRateExceedPkt?: number;
  /**
  * Per Addr-Port Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#secondary_port_pkt_rate_exceed DataThunderDdosHttpZonePortStats#secondary_port_pkt_rate_exceed}
  */
  readonly secondaryPortPktRateExceed?: number;
  /**
  * Sessions Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#sess_aged DataThunderDdosHttpZonePortStats#sess_aged}
  */
  readonly sessAged?: number;
  /**
  * Session Create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#sess_create DataThunderDdosHttpZonePortStats#sess_create}
  */
  readonly sessCreate?: number;
  /**
  * Inbound Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#sess_create_inbound DataThunderDdosHttpZonePortStats#sess_create_inbound}
  */
  readonly sessCreateInbound?: number;
  /**
  * Outbound Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#sess_create_outbound DataThunderDdosHttpZonePortStats#sess_create_outbound}
  */
  readonly sessCreateOutbound?: number;
  /**
  * Sflow External Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#sflow_external_packets_sent DataThunderDdosHttpZonePortStats#sflow_external_packets_sent}
  */
  readonly sflowExternalPacketsSent?: number;
  /**
  * Sflow External Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#sflow_external_samples_packed DataThunderDdosHttpZonePortStats#sflow_external_samples_packed}
  */
  readonly sflowExternalSamplesPacked?: number;
  /**
  * Sflow Internal Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#sflow_internal_packets_sent DataThunderDdosHttpZonePortStats#sflow_internal_packets_sent}
  */
  readonly sflowInternalPacketsSent?: number;
  /**
  * Sflow Internal Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#sflow_internal_samples_packed DataThunderDdosHttpZonePortStats#sflow_internal_samples_packed}
  */
  readonly sflowInternalSamplesPacked?: number;
  /**
  * Slow Post
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#slow_post DataThunderDdosHttpZonePortStats#slow_post}
  */
  readonly slowPost?: number;
  /**
  * Source NAT Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#snat_fail DataThunderDdosHttpZonePortStats#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Src ACK Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_ack_auth_fail DataThunderDdosHttpZonePortStats#src_ack_auth_fail}
  */
  readonly srcAckAuthFail?: number;
  /**
  * Src ACK Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_ack_retry_blacklist DataThunderDdosHttpZonePortStats#src_ack_retry_blacklist}
  */
  readonly srcAckRetryBlacklist?: number;
  /**
  * Src ACK Retry Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_ack_retry_gap_drop DataThunderDdosHttpZonePortStats#src_ack_retry_gap_drop}
  */
  readonly srcAckRetryGapDrop?: number;
  /**
  * Src ACK Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_ack_retry_init DataThunderDdosHttpZonePortStats#src_ack_retry_init}
  */
  readonly srcAckRetryInit?: number;
  /**
  * Src ACK Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_ack_retry_reset DataThunderDdosHttpZonePortStats#src_ack_retry_reset}
  */
  readonly srcAckRetryReset?: number;
  /**
  * Src ACK Retry RTO Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_ack_retry_rto_fail DataThunderDdosHttpZonePortStats#src_ack_retry_rto_fail}
  */
  readonly srcAckRetryRtoFail?: number;
  /**
  * Src ACK Retry RTO Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_ack_retry_rto_pass DataThunderDdosHttpZonePortStats#src_ack_retry_rto_pass}
  */
  readonly srcAckRetryRtoPass?: number;
  /**
  * Src ACK Retry RTO Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_ack_retry_rto_progress DataThunderDdosHttpZonePortStats#src_ack_retry_rto_progress}
  */
  readonly srcAckRetryRtoProgress?: number;
  /**
  * Src ACK Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_ack_retry_timeout DataThunderDdosHttpZonePortStats#src_ack_retry_timeout}
  */
  readonly srcAckRetryTimeout?: number;
  /**
  * Src TCP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_auth_drop DataThunderDdosHttpZonePortStats#src_auth_drop}
  */
  readonly srcAuthDrop?: number;
  /**
  * Src Challenge Javascript Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_challenge_js_fail DataThunderDdosHttpZonePortStats#src_challenge_js_fail}
  */
  readonly srcChallengeJsFail?: number;
  /**
  * Src Challenge URL Redirect Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_challenge_ud_fail DataThunderDdosHttpZonePortStats#src_challenge_ud_fail}
  */
  readonly srcChallengeUdFail?: number;
  /**
  * Src TCP Conn Out-Of-Seq Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_conn_ofo_rate_excd DataThunderDdosHttpZonePortStats#src_conn_ofo_rate_excd}
  */
  readonly srcConnOfoRateExcd?: number;
  /**
  * Src TCP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_conn_pkt_rate_excd DataThunderDdosHttpZonePortStats#src_conn_pkt_rate_excd}
  */
  readonly srcConnPktRateExcd?: number;
  /**
  * Src TCP Conn Retransmit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_conn_rexmit_rate_excd DataThunderDdosHttpZonePortStats#src_conn_rexmit_rate_excd}
  */
  readonly srcConnRexmitRateExcd?: number;
  /**
  * Src TCP Conn Zero-Window Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_conn_zwindow_rate_excd DataThunderDdosHttpZonePortStats#src_conn_zwindow_rate_excd}
  */
  readonly srcConnZwindowRateExcd?: number;
  /**
  * Src Create Conn with non-SYN Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_create_conn_non_syn_dropped DataThunderDdosHttpZonePortStats#src_create_conn_non_syn_dropped}
  */
  readonly srcCreateConnNonSynDropped?: number;
  /**
  * Src Policy Violation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_dos_policy_violation DataThunderDdosHttpZonePortStats#src_dos_policy_violation}
  */
  readonly srcDosPolicyViolation?: number;
  /**
  * Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_drop DataThunderDdosHttpZonePortStats#src_drop}
  */
  readonly srcDrop?: number;
  /**
  * Src Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_filter1_match DataThunderDdosHttpZonePortStats#src_filter1_match}
  */
  readonly srcFilter1Match?: number;
  /**
  * Src Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_filter2_match DataThunderDdosHttpZonePortStats#src_filter2_match}
  */
  readonly srcFilter2Match?: number;
  /**
  * Src Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_filter3_match DataThunderDdosHttpZonePortStats#src_filter3_match}
  */
  readonly srcFilter3Match?: number;
  /**
  * Src Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_filter4_match DataThunderDdosHttpZonePortStats#src_filter4_match}
  */
  readonly srcFilter4Match?: number;
  /**
  * Src Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_filter5_match DataThunderDdosHttpZonePortStats#src_filter5_match}
  */
  readonly srcFilter5Match?: number;
  /**
  * Src Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_filter_action_blacklist DataThunderDdosHttpZonePortStats#src_filter_action_blacklist}
  */
  readonly srcFilterActionBlacklist?: number;
  /**
  * Src Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_filter_action_default_pass DataThunderDdosHttpZonePortStats#src_filter_action_default_pass}
  */
  readonly srcFilterActionDefaultPass?: number;
  /**
  * Src Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_filter_action_drop DataThunderDdosHttpZonePortStats#src_filter_action_drop}
  */
  readonly srcFilterActionDrop?: number;
  /**
  * Src Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_filter_action_whitelist DataThunderDdosHttpZonePortStats#src_filter_action_whitelist}
  */
  readonly srcFilterActionWhitelist?: number;
  /**
  * Src Filter Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_filter_auth_fail DataThunderDdosHttpZonePortStats#src_filter_auth_fail}
  */
  readonly srcFilterAuthFail?: number;
  /**
  * Src Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_filter_none_match DataThunderDdosHttpZonePortStats#src_filter_none_match}
  */
  readonly srcFilterNoneMatch?: number;
  /**
  * Src Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_filter_total_not_match DataThunderDdosHttpZonePortStats#src_filter_total_not_match}
  */
  readonly srcFilterTotalNotMatch?: number;
  /**
  * Src Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_frag_drop DataThunderDdosHttpZonePortStats#src_frag_drop}
  */
  readonly srcFragDrop?: number;
  /**
  * Src Filter10 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter10_drop DataThunderDdosHttpZonePortStats#src_header_filter10_drop}
  */
  readonly srcHeaderFilter10Drop?: number;
  /**
  * Src Filter10 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter10_match DataThunderDdosHttpZonePortStats#src_header_filter10_match}
  */
  readonly srcHeaderFilter10Match?: number;
  /**
  * Src Filter1 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter1_drop DataThunderDdosHttpZonePortStats#src_header_filter1_drop}
  */
  readonly srcHeaderFilter1Drop?: number;
  /**
  * Src Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter1_match DataThunderDdosHttpZonePortStats#src_header_filter1_match}
  */
  readonly srcHeaderFilter1Match?: number;
  /**
  * Src Filter2 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter2_drop DataThunderDdosHttpZonePortStats#src_header_filter2_drop}
  */
  readonly srcHeaderFilter2Drop?: number;
  /**
  * Src Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter2_match DataThunderDdosHttpZonePortStats#src_header_filter2_match}
  */
  readonly srcHeaderFilter2Match?: number;
  /**
  * Src Filter3 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter3_drop DataThunderDdosHttpZonePortStats#src_header_filter3_drop}
  */
  readonly srcHeaderFilter3Drop?: number;
  /**
  * Src Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter3_match DataThunderDdosHttpZonePortStats#src_header_filter3_match}
  */
  readonly srcHeaderFilter3Match?: number;
  /**
  * Src Filter4 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter4_drop DataThunderDdosHttpZonePortStats#src_header_filter4_drop}
  */
  readonly srcHeaderFilter4Drop?: number;
  /**
  * Src Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter4_match DataThunderDdosHttpZonePortStats#src_header_filter4_match}
  */
  readonly srcHeaderFilter4Match?: number;
  /**
  * Src Filter5 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter5_drop DataThunderDdosHttpZonePortStats#src_header_filter5_drop}
  */
  readonly srcHeaderFilter5Drop?: number;
  /**
  * Src Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter5_match DataThunderDdosHttpZonePortStats#src_header_filter5_match}
  */
  readonly srcHeaderFilter5Match?: number;
  /**
  * Src Filter6 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter6_drop DataThunderDdosHttpZonePortStats#src_header_filter6_drop}
  */
  readonly srcHeaderFilter6Drop?: number;
  /**
  * Src Filter6 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter6_match DataThunderDdosHttpZonePortStats#src_header_filter6_match}
  */
  readonly srcHeaderFilter6Match?: number;
  /**
  * Src Filter7 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter7_drop DataThunderDdosHttpZonePortStats#src_header_filter7_drop}
  */
  readonly srcHeaderFilter7Drop?: number;
  /**
  * Src Filter7 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter7_match DataThunderDdosHttpZonePortStats#src_header_filter7_match}
  */
  readonly srcHeaderFilter7Match?: number;
  /**
  * Src Filter8 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter8_drop DataThunderDdosHttpZonePortStats#src_header_filter8_drop}
  */
  readonly srcHeaderFilter8Drop?: number;
  /**
  * Src Filter8 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter8_match DataThunderDdosHttpZonePortStats#src_header_filter8_match}
  */
  readonly srcHeaderFilter8Match?: number;
  /**
  * Src Filter9 Match Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter9_drop DataThunderDdosHttpZonePortStats#src_header_filter9_drop}
  */
  readonly srcHeaderFilter9Drop?: number;
  /**
  * Src Filter9 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter9_match DataThunderDdosHttpZonePortStats#src_header_filter9_match}
  */
  readonly srcHeaderFilter9Match?: number;
  /**
  * Src Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter_action_blacklist DataThunderDdosHttpZonePortStats#src_header_filter_action_blacklist}
  */
  readonly srcHeaderFilterActionBlacklist?: number;
  /**
  * Src Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter_action_default_pass DataThunderDdosHttpZonePortStats#src_header_filter_action_default_pass}
  */
  readonly srcHeaderFilterActionDefaultPass?: number;
  /**
  * Src Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter_action_drop DataThunderDdosHttpZonePortStats#src_header_filter_action_drop}
  */
  readonly srcHeaderFilterActionDrop?: number;
  /**
  * Src Filter Action Whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter_action_whitelist DataThunderDdosHttpZonePortStats#src_header_filter_action_whitelist}
  */
  readonly srcHeaderFilterActionWhitelist?: number;
  /**
  * Src Filter Total Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter_match DataThunderDdosHttpZonePortStats#src_header_filter_match}
  */
  readonly srcHeaderFilterMatch?: number;
  /**
  * Src Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter_none_match DataThunderDdosHttpZonePortStats#src_header_filter_none_match}
  */
  readonly srcHeaderFilterNoneMatch?: number;
  /**
  * Src Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_header_filter_not_match DataThunderDdosHttpZonePortStats#src_header_filter_not_match}
  */
  readonly srcHeaderFilterNotMatch?: number;
  /**
  * Src HTTP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_http_auth_drop DataThunderDdosHttpZonePortStats#src_http_auth_drop}
  */
  readonly srcHttpAuthDrop?: number;
  /**
  * Src Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_hw_drop DataThunderDdosHttpZonePortStats#src_hw_drop}
  */
  readonly srcHwDrop?: number;
  /**
  * Src Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_hw_drop_inserted DataThunderDdosHttpZonePortStats#src_hw_drop_inserted}
  */
  readonly srcHwDropInserted?: number;
  /**
  * Src Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_hw_drop_removed DataThunderDdosHttpZonePortStats#src_hw_drop_removed}
  */
  readonly srcHwDropRemoved?: number;
  /**
  * Src Challenge Javascript Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_js_challenge_sent DataThunderDdosHttpZonePortStats#src_js_challenge_sent}
  */
  readonly srcJsChallengeSent?: number;
  /**
  * Source Dynamic Entry Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_learn_overflow DataThunderDdosHttpZonePortStats#src_learn_overflow}
  */
  readonly srcLearnOverflow?: number;
  /**
  * Src Out-Of-Seq Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_out_of_seq_excd DataThunderDdosHttpZonePortStats#src_out_of_seq_excd}
  */
  readonly srcOutOfSeqExcd?: number;
  /**
  * Src Policy Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_policy_drop DataThunderDdosHttpZonePortStats#src_policy_drop}
  */
  readonly srcPolicyDrop?: number;
  /**
  * Src Post Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_post_rate_exceed DataThunderDdosHttpZonePortStats#src_post_rate_exceed}
  */
  readonly srcPostRateExceed?: number;
  /**
  * Src Request Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_req_rate_exceed DataThunderDdosHttpZonePortStats#src_req_rate_exceed}
  */
  readonly srcReqRateExceed?: number;
  /**
  * Src Retransmit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_retransmit_excd DataThunderDdosHttpZonePortStats#src_retransmit_excd}
  */
  readonly srcRetransmitExcd?: number;
  /**
  * Src RST Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_rst_cookie_fail DataThunderDdosHttpZonePortStats#src_rst_cookie_fail}
  */
  readonly srcRstCookieFail?: number;
  /**
  * Src SYN Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_auth_fail DataThunderDdosHttpZonePortStats#src_syn_auth_fail}
  */
  readonly srcSynAuthFail?: number;
  /**
  * Src SYN Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_cookie_fail DataThunderDdosHttpZonePortStats#src_syn_cookie_fail}
  */
  readonly srcSynCookieFail?: number;
  /**
  * Src SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_cookie_sent DataThunderDdosHttpZonePortStats#src_syn_cookie_sent}
  */
  readonly srcSynCookieSent?: number;
  /**
  * Src TCP SYN Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_rate_exceed DataThunderDdosHttpZonePortStats#src_syn_rate_exceed}
  */
  readonly srcSynRateExceed?: number;
  /**
  * Src SYN Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_retry_blacklist DataThunderDdosHttpZonePortStats#src_syn_retry_blacklist}
  */
  readonly srcSynRetryBlacklist?: number;
  /**
  * Src SYN Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_retry_failed DataThunderDdosHttpZonePortStats#src_syn_retry_failed}
  */
  readonly srcSynRetryFailed?: number;
  /**
  * Src SYN Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_retry_gap_drop DataThunderDdosHttpZonePortStats#src_syn_retry_gap_drop}
  */
  readonly srcSynRetryGapDrop?: number;
  /**
  * Src SYN Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_retry_init DataThunderDdosHttpZonePortStats#src_syn_retry_init}
  */
  readonly srcSynRetryInit?: number;
  /**
  * Src SYN Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_retry_reset DataThunderDdosHttpZonePortStats#src_syn_retry_reset}
  */
  readonly srcSynRetryReset?: number;
  /**
  * Src SYN Retry RTO Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_retry_rto_fail DataThunderDdosHttpZonePortStats#src_syn_retry_rto_fail}
  */
  readonly srcSynRetryRtoFail?: number;
  /**
  * Src SYN Retry RTO Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_retry_rto_pass DataThunderDdosHttpZonePortStats#src_syn_retry_rto_pass}
  */
  readonly srcSynRetryRtoPass?: number;
  /**
  * Src SYN Retry RTO Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_retry_rto_progress DataThunderDdosHttpZonePortStats#src_syn_retry_rto_progress}
  */
  readonly srcSynRetryRtoProgress?: number;
  /**
  * Src SYN Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_syn_retry_timeout DataThunderDdosHttpZonePortStats#src_syn_retry_timeout}
  */
  readonly srcSynRetryTimeout?: number;
  /**
  * Src TCP Auth Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_tcp_auth_rst DataThunderDdosHttpZonePortStats#src_tcp_auth_rst}
  */
  readonly srcTcpAuthRst?: number;
  /**
  * Src Challenge URL Redirect Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_ud_challenge_sent DataThunderDdosHttpZonePortStats#src_ud_challenge_sent}
  */
  readonly srcUdChallengeSent?: number;
  /**
  * Src TCP Unauth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_unauth_drop DataThunderDdosHttpZonePortStats#src_unauth_drop}
  */
  readonly srcUnauthDrop?: number;
  /**
  * Src TCP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_well_known_port DataThunderDdosHttpZonePortStats#src_well_known_port}
  */
  readonly srcWellKnownPort?: number;
  /**
  * Src Zero-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_zero_window_excd DataThunderDdosHttpZonePortStats#src_zero_window_excd}
  */
  readonly srcZeroWindowExcd?: number;
  /**
  * SrcZoneService Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_zone_service_entry_aged DataThunderDdosHttpZonePortStats#src_zone_service_entry_aged}
  */
  readonly srcZoneServiceEntryAged?: number;
  /**
  * SrcZoneService Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#src_zone_service_entry_learned DataThunderDdosHttpZonePortStats#src_zone_service_entry_learned}
  */
  readonly srcZoneServiceEntryLearned?: number;
  /**
  * SYN Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_auth_fail DataThunderDdosHttpZonePortStats#syn_auth_fail}
  */
  readonly synAuthFail?: number;
  /**
  * SYN Auth Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_auth_pass DataThunderDdosHttpZonePortStats#syn_auth_pass}
  */
  readonly synAuthPass?: number;
  /**
  * SYN Auth RST-ACK Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_auth_rst_ack_drop DataThunderDdosHttpZonePortStats#syn_auth_rst_ack_drop}
  */
  readonly synAuthRstAckDrop?: number;
  /**
  * SYN Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_cookie_fail DataThunderDdosHttpZonePortStats#syn_cookie_fail}
  */
  readonly synCookieFail?: number;
  /**
  * SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_cookie_sent DataThunderDdosHttpZonePortStats#syn_cookie_sent}
  */
  readonly synCookieSent?: number;
  /**
  * SYN Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_drop DataThunderDdosHttpZonePortStats#syn_drop}
  */
  readonly synDrop?: number;
  /**
  * SYN Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_retry_blacklist DataThunderDdosHttpZonePortStats#syn_retry_blacklist}
  */
  readonly synRetryBlacklist?: number;
  /**
  * SYN Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_retry_failed DataThunderDdosHttpZonePortStats#syn_retry_failed}
  */
  readonly synRetryFailed?: number;
  /**
  * SYN Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_retry_gap_drop DataThunderDdosHttpZonePortStats#syn_retry_gap_drop}
  */
  readonly synRetryGapDrop?: number;
  /**
  * SYN Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_retry_init DataThunderDdosHttpZonePortStats#syn_retry_init}
  */
  readonly synRetryInit?: number;
  /**
  * SYN Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_retry_pass DataThunderDdosHttpZonePortStats#syn_retry_pass}
  */
  readonly synRetryPass?: number;
  /**
  * SYN Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_retry_reset DataThunderDdosHttpZonePortStats#syn_retry_reset}
  */
  readonly synRetryReset?: number;
  /**
  * SYN Retry RTO Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_retry_rto_fail DataThunderDdosHttpZonePortStats#syn_retry_rto_fail}
  */
  readonly synRetryRtoFail?: number;
  /**
  * SYN Retry RTO Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_retry_rto_pass DataThunderDdosHttpZonePortStats#syn_retry_rto_pass}
  */
  readonly synRetryRtoPass?: number;
  /**
  * SYN Retry RTO Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_retry_rto_progress DataThunderDdosHttpZonePortStats#syn_retry_rto_progress}
  */
  readonly synRetryRtoProgress?: number;
  /**
  * SYN Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_retry_timeout DataThunderDdosHttpZonePortStats#syn_retry_timeout}
  */
  readonly synRetryTimeout?: number;
  /**
  * SYN TFO Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#syn_tfo_rcv DataThunderDdosHttpZonePortStats#syn_tfo_rcv}
  */
  readonly synTfoRcv?: number;
  /**
  * SYNACK Multiple Attempts Per IP Detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#synack_multiple_attempts_per_ip_detected DataThunderDdosHttpZonePortStats#synack_multiple_attempts_per_ip_detected}
  */
  readonly synackMultipleAttemptsPerIpDetected?: number;
  /**
  * SYNACK Reset Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#synack_reset_sent DataThunderDdosHttpZonePortStats#synack_reset_sent}
  */
  readonly synackResetSent?: number;
  /**
  * TCP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_auth_drop DataThunderDdosHttpZonePortStats#tcp_auth_drop}
  */
  readonly tcpAuthDrop?: number;
  /**
  * TCP Auth Responded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_auth_resp DataThunderDdosHttpZonePortStats#tcp_auth_resp}
  */
  readonly tcpAuthResp?: number;
  /**
  * TCP Auth Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_auth_rst DataThunderDdosHttpZonePortStats#tcp_auth_rst}
  */
  readonly tcpAuthRst?: number;
  /**
  * Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_filter1_match DataThunderDdosHttpZonePortStats#tcp_filter1_match}
  */
  readonly tcpFilter1Match?: number;
  /**
  * Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_filter2_match DataThunderDdosHttpZonePortStats#tcp_filter2_match}
  */
  readonly tcpFilter2Match?: number;
  /**
  * Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_filter3_match DataThunderDdosHttpZonePortStats#tcp_filter3_match}
  */
  readonly tcpFilter3Match?: number;
  /**
  * Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_filter4_match DataThunderDdosHttpZonePortStats#tcp_filter4_match}
  */
  readonly tcpFilter4Match?: number;
  /**
  * Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_filter5_match DataThunderDdosHttpZonePortStats#tcp_filter5_match}
  */
  readonly tcpFilter5Match?: number;
  /**
  * Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_filter_action_blacklist DataThunderDdosHttpZonePortStats#tcp_filter_action_blacklist}
  */
  readonly tcpFilterActionBlacklist?: number;
  /**
  * Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_filter_action_default_pass DataThunderDdosHttpZonePortStats#tcp_filter_action_default_pass}
  */
  readonly tcpFilterActionDefaultPass?: number;
  /**
  * Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_filter_action_drop DataThunderDdosHttpZonePortStats#tcp_filter_action_drop}
  */
  readonly tcpFilterActionDrop?: number;
  /**
  * Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_filter_action_whitelist DataThunderDdosHttpZonePortStats#tcp_filter_action_whitelist}
  */
  readonly tcpFilterActionWhitelist?: number;
  /**
  * Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_filter_none_match DataThunderDdosHttpZonePortStats#tcp_filter_none_match}
  */
  readonly tcpFilterNoneMatch?: number;
  /**
  * Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_filter_total_not_match DataThunderDdosHttpZonePortStats#tcp_filter_total_not_match}
  */
  readonly tcpFilterTotalNotMatch?: number;
  /**
  * TCP SYN Retransmit Exceeded Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_rexmit_syn_limit_bl DataThunderDdosHttpZonePortStats#tcp_rexmit_syn_limit_bl}
  */
  readonly tcpRexmitSynLimitBl?: number;
  /**
  * TCP SYN Retransmit Exceeded Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#tcp_rexmit_syn_limit_drop DataThunderDdosHttpZonePortStats#tcp_rexmit_syn_limit_drop}
  */
  readonly tcpRexmitSynLimitDrop?: number;
  /**
  * HTTP Header Too Many
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#too_many_headers DataThunderDdosHttpZonePortStats#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * Challenge URL Redirect Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ud_challenge_failed DataThunderDdosHttpZonePortStats#ud_challenge_failed}
  */
  readonly udChallengeFailed?: number;
  /**
  * Challenge URL Redirect Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#ud_challenge_sent DataThunderDdosHttpZonePortStats#ud_challenge_sent}
  */
  readonly udChallengeSent?: number;
  /**
  * TCP Unauth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#unauth_drop DataThunderDdosHttpZonePortStats#unauth_drop}
  */
  readonly unauthDrop?: number;
  /**
  * Session Reset for Unauthenticated Src
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#unauth_src_session_reset DataThunderDdosHttpZonePortStats#unauth_src_session_reset}
  */
  readonly unauthSrcSessionReset?: number;
  /**
  * URI Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#uri_filter_match DataThunderDdosHttpZonePortStats#uri_filter_match}
  */
  readonly uriFilterMatch?: number;
  /**
  * Use IP In Header As Src
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#use_hdr_src_ip DataThunderDdosHttpZonePortStats#use_hdr_src_ip}
  */
  readonly useHdrSrcIp?: number;
  /**
  * Agent Filter Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#user_agent_filter_blacklist DataThunderDdosHttpZonePortStats#user_agent_filter_blacklist}
  */
  readonly userAgentFilterBlacklist?: number;
  /**
  * Agent Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#user_agent_filter_match DataThunderDdosHttpZonePortStats#user_agent_filter_match}
  */
  readonly userAgentFilterMatch?: number;
  /**
  * TCP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#wellknown_sport_drop DataThunderDdosHttpZonePortStats#wellknown_sport_drop}
  */
  readonly wellknownSportDrop?: number;
  /**
  * Window Size Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#window_small DataThunderDdosHttpZonePortStats#window_small}
  */
  readonly windowSmall?: number;
  /**
  * Window Size Small Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#window_small_drop DataThunderDdosHttpZonePortStats#window_small_drop}
  */
  readonly windowSmallDrop?: number;
  /**
  * Zero-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#zero_window_excd DataThunderDdosHttpZonePortStats#zero_window_excd}
  */
  readonly zeroWindowExcd?: number;
}

export function dataThunderDdosHttpZonePortStatsStatsToTerraform(struct?: DataThunderDdosHttpZonePortStatsStatsOutputReference | DataThunderDdosHttpZonePortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_auth_fail: cdktf.numberToTerraform(struct!.ackAuthFail),
    ack_retry_blacklist: cdktf.numberToTerraform(struct!.ackRetryBlacklist),
    ack_retry_gap_drop: cdktf.numberToTerraform(struct!.ackRetryGapDrop),
    ack_retry_init: cdktf.numberToTerraform(struct!.ackRetryInit),
    ack_retry_pass: cdktf.numberToTerraform(struct!.ackRetryPass),
    ack_retry_reset: cdktf.numberToTerraform(struct!.ackRetryReset),
    ack_retry_rto_fail: cdktf.numberToTerraform(struct!.ackRetryRtoFail),
    ack_retry_rto_pass: cdktf.numberToTerraform(struct!.ackRetryRtoPass),
    ack_retry_rto_progress: cdktf.numberToTerraform(struct!.ackRetryRtoProgress),
    ack_retry_timeout: cdktf.numberToTerraform(struct!.ackRetryTimeout),
    addr_filter_bl: cdktf.numberToTerraform(struct!.addrFilterBl),
    addr_filter_drop: cdktf.numberToTerraform(struct!.addrFilterDrop),
    bl: cdktf.numberToTerraform(struct!.bl),
    challenge_failed: cdktf.numberToTerraform(struct!.challengeFailed),
    chunk_bad: cdktf.numberToTerraform(struct!.chunkBad),
    chunk_sz_1k: cdktf.numberToTerraform(struct!.chunkSz1K),
    chunk_sz_2k: cdktf.numberToTerraform(struct!.chunkSz2K),
    chunk_sz_4k: cdktf.numberToTerraform(struct!.chunkSz4K),
    chunk_sz_512: cdktf.numberToTerraform(struct!.chunkSz512),
    chunk_sz_gt_4k: cdktf.numberToTerraform(struct!.chunkSzGt4K),
    client_rst: cdktf.numberToTerraform(struct!.clientRst),
    conn_close: cdktf.numberToTerraform(struct!.connClose),
    conn_close_half_open: cdktf.numberToTerraform(struct!.connCloseHalfOpen),
    conn_close_w_fin: cdktf.numberToTerraform(struct!.connCloseWFin),
    conn_close_w_idle: cdktf.numberToTerraform(struct!.connCloseWIdle),
    conn_close_w_rst: cdktf.numberToTerraform(struct!.connCloseWRst),
    conn_create_from_ack: cdktf.numberToTerraform(struct!.connCreateFromAck),
    conn_create_from_syn: cdktf.numberToTerraform(struct!.connCreateFromSyn),
    conn_create_from_synack: cdktf.numberToTerraform(struct!.connCreateFromSynack),
    conn_ofo_rate_excd: cdktf.numberToTerraform(struct!.connOfoRateExcd),
    conn_prate_excd: cdktf.numberToTerraform(struct!.connPrateExcd),
    conn_rexmit_rate_excd: cdktf.numberToTerraform(struct!.connRexmitRateExcd),
    conn_zwindow_rate_excd: cdktf.numberToTerraform(struct!.connZwindowRateExcd),
    content_length_too_long: cdktf.numberToTerraform(struct!.contentLengthTooLong),
    create_conn_non_syn_dropped: cdktf.numberToTerraform(struct!.createConnNonSynDropped),
    current_es_level: cdktf.numberToTerraform(struct!.currentEsLevel),
    dst_hw_drop: cdktf.numberToTerraform(struct!.dstHwDrop),
    dst_hw_drop_inserted: cdktf.numberToTerraform(struct!.dstHwDropInserted),
    dst_hw_drop_removed: cdktf.numberToTerraform(struct!.dstHwDropRemoved),
    dst_post_rate_exceed: cdktf.numberToTerraform(struct!.dstPostRateExceed),
    dst_req_rate_exceed: cdktf.numberToTerraform(struct!.dstReqRateExceed),
    dst_resp_rate_exceed: cdktf.numberToTerraform(struct!.dstRespRateExceed),
    er_condition: cdktf.numberToTerraform(struct!.erCondition),
    ew_inbound_port_byte_drop: cdktf.numberToTerraform(struct!.ewInboundPortByteDrop),
    ew_inbound_port_byte_rcv: cdktf.numberToTerraform(struct!.ewInboundPortByteRcv),
    ew_inbound_port_byte_sent: cdktf.numberToTerraform(struct!.ewInboundPortByteSent),
    ew_inbound_port_drop: cdktf.numberToTerraform(struct!.ewInboundPortDrop),
    ew_inbound_port_rcv: cdktf.numberToTerraform(struct!.ewInboundPortRcv),
    ew_inbound_port_sent: cdktf.numberToTerraform(struct!.ewInboundPortSent),
    ew_outbound_port_byte_drop: cdktf.numberToTerraform(struct!.ewOutboundPortByteDrop),
    ew_outbound_port_byte_rcv: cdktf.numberToTerraform(struct!.ewOutboundPortByteRcv),
    ew_outbound_port_byte_sent: cdktf.numberToTerraform(struct!.ewOutboundPortByteSent),
    ew_outbound_port_drop: cdktf.numberToTerraform(struct!.ewOutboundPortDrop),
    ew_outbound_port_rcv: cdktf.numberToTerraform(struct!.ewOutboundPortRcv),
    ew_outbound_port_sent: cdktf.numberToTerraform(struct!.ewOutboundPortSent),
    exceed_action_drop: cdktf.numberToTerraform(struct!.exceedActionDrop),
    exceed_action_tunnel: cdktf.numberToTerraform(struct!.exceedActionTunnel),
    exceed_drop_brate_src: cdktf.numberToTerraform(struct!.exceedDropBrateSrc),
    exceed_drop_brate_src_pkt: cdktf.numberToTerraform(struct!.exceedDropBrateSrcPkt),
    exceed_drop_climit_src: cdktf.numberToTerraform(struct!.exceedDropClimitSrc),
    exceed_drop_crate_src: cdktf.numberToTerraform(struct!.exceedDropCrateSrc),
    exceed_drop_prate_src: cdktf.numberToTerraform(struct!.exceedDropPrateSrc),
    fail_alloc: cdktf.numberToTerraform(struct!.failAlloc),
    fail_alloc_hdr: cdktf.numberToTerraform(struct!.failAllocHdr),
    fail_get_line: cdktf.numberToTerraform(struct!.failGetLine),
    filter10_drop: cdktf.numberToTerraform(struct!.filter10Drop),
    filter10_match: cdktf.numberToTerraform(struct!.filter10Match),
    filter1_drop: cdktf.numberToTerraform(struct!.filter1Drop),
    filter1_match: cdktf.numberToTerraform(struct!.filter1Match),
    filter2_drop: cdktf.numberToTerraform(struct!.filter2Drop),
    filter2_match: cdktf.numberToTerraform(struct!.filter2Match),
    filter3_drop: cdktf.numberToTerraform(struct!.filter3Drop),
    filter3_match: cdktf.numberToTerraform(struct!.filter3Match),
    filter4_drop: cdktf.numberToTerraform(struct!.filter4Drop),
    filter4_match: cdktf.numberToTerraform(struct!.filter4Match),
    filter5_drop: cdktf.numberToTerraform(struct!.filter5Drop),
    filter5_match: cdktf.numberToTerraform(struct!.filter5Match),
    filter6_drop: cdktf.numberToTerraform(struct!.filter6Drop),
    filter6_match: cdktf.numberToTerraform(struct!.filter6Match),
    filter7_drop: cdktf.numberToTerraform(struct!.filter7Drop),
    filter7_match: cdktf.numberToTerraform(struct!.filter7Match),
    filter8_drop: cdktf.numberToTerraform(struct!.filter8Drop),
    filter8_match: cdktf.numberToTerraform(struct!.filter8Match),
    filter9_drop: cdktf.numberToTerraform(struct!.filter9Drop),
    filter9_match: cdktf.numberToTerraform(struct!.filter9Match),
    filter_action_blacklist: cdktf.numberToTerraform(struct!.filterActionBlacklist),
    filter_action_default_pass: cdktf.numberToTerraform(struct!.filterActionDefaultPass),
    filter_action_drop: cdktf.numberToTerraform(struct!.filterActionDrop),
    filter_action_whitelist: cdktf.numberToTerraform(struct!.filterActionWhitelist),
    filter_auth_fail: cdktf.numberToTerraform(struct!.filterAuthFail),
    filter_match: cdktf.numberToTerraform(struct!.filterMatch),
    filter_none_match: cdktf.numberToTerraform(struct!.filterNoneMatch),
    filter_not_match: cdktf.numberToTerraform(struct!.filterNotMatch),
    frag_drop: cdktf.numberToTerraform(struct!.fragDrop),
    frag_rcvd: cdktf.numberToTerraform(struct!.fragRcvd),
    frag_timeout: cdktf.numberToTerraform(struct!.fragTimeout),
    header_name_too_long: cdktf.numberToTerraform(struct!.headerNameTooLong),
    header_processing_incomplete: cdktf.numberToTerraform(struct!.headerProcessingIncomplete),
    header_processing_time_0: cdktf.numberToTerraform(struct!.headerProcessingTime0),
    header_processing_time_1: cdktf.numberToTerraform(struct!.headerProcessingTime1),
    header_processing_time_2: cdktf.numberToTerraform(struct!.headerProcessingTime2),
    header_processing_time_3: cdktf.numberToTerraform(struct!.headerProcessingTime3),
    http_auth_drop: cdktf.numberToTerraform(struct!.httpAuthDrop),
    http_auth_resp: cdktf.numberToTerraform(struct!.httpAuthResp),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
    invalid_hdr_name: cdktf.numberToTerraform(struct!.invalidHdrName),
    invalid_hdr_val: cdktf.numberToTerraform(struct!.invalidHdrVal),
    invalid_header: cdktf.numberToTerraform(struct!.invalidHeader),
    js_challenge_failed: cdktf.numberToTerraform(struct!.jsChallengeFailed),
    js_challenge_sent: cdktf.numberToTerraform(struct!.jsChallengeSent),
    less_than_mss_exceed: cdktf.numberToTerraform(struct!.lessThanMssExceed),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    negative_req_remain: cdktf.numberToTerraform(struct!.negativeReqRemain),
    negative_resp_remain: cdktf.numberToTerraform(struct!.negativeRespRemain),
    new_syn: cdktf.numberToTerraform(struct!.newSyn),
    no_policy_class_list_match: cdktf.numberToTerraform(struct!.noPolicyClassListMatch),
    no_route_drop: cdktf.numberToTerraform(struct!.noRouteDrop),
    ofo_queue_sz_exceed: cdktf.numberToTerraform(struct!.ofoQueueSzExceed),
    ofo_timer_expired: cdktf.numberToTerraform(struct!.ofoTimerExpired),
    out_of_seq_excd: cdktf.numberToTerraform(struct!.outOfSeqExcd),
    outbound_port_bytes: cdktf.numberToTerraform(struct!.outboundPortBytes),
    outbound_port_bytes_drop: cdktf.numberToTerraform(struct!.outboundPortBytesDrop),
    outbound_port_bytes_sent: cdktf.numberToTerraform(struct!.outboundPortBytesSent),
    outbound_port_drop: cdktf.numberToTerraform(struct!.outboundPortDrop),
    outbound_port_pkt_sent: cdktf.numberToTerraform(struct!.outboundPortPktSent),
    outbound_port_rcvd: cdktf.numberToTerraform(struct!.outboundPortRcvd),
    parse_bad_chunk: cdktf.numberToTerraform(struct!.parseBadChunk),
    parse_header_name_too_long: cdktf.numberToTerraform(struct!.parseHeaderNameTooLong),
    parse_line_too_long: cdktf.numberToTerraform(struct!.parseLineTooLong),
    parse_req_line_invalid_method: cdktf.numberToTerraform(struct!.parseReqLineInvalidMethod),
    parse_req_line_too_long: cdktf.numberToTerraform(struct!.parseReqLineTooLong),
    parse_req_line_too_small: cdktf.numberToTerraform(struct!.parseReqLineTooSmall),
    parse_too_many_headers: cdktf.numberToTerraform(struct!.parseTooManyHeaders),
    parsereq_fail: cdktf.numberToTerraform(struct!.parsereqFail),
    partial_header: cdktf.numberToTerraform(struct!.partialHeader),
    pattern_filter1_match: cdktf.numberToTerraform(struct!.patternFilter1Match),
    pattern_filter2_match: cdktf.numberToTerraform(struct!.patternFilter2Match),
    pattern_filter3_match: cdktf.numberToTerraform(struct!.patternFilter3Match),
    pattern_filter4_match: cdktf.numberToTerraform(struct!.patternFilter4Match),
    pattern_filter5_match: cdktf.numberToTerraform(struct!.patternFilter5Match),
    pattern_filter_drop: cdktf.numberToTerraform(struct!.patternFilterDrop),
    pattern_not_found: cdktf.numberToTerraform(struct!.patternNotFound),
    pattern_recognition_generic_error: cdktf.numberToTerraform(struct!.patternRecognitionGenericError),
    pattern_recognition_pattern_changed: cdktf.numberToTerraform(struct!.patternRecognitionPatternChanged),
    pattern_recognition_proceeded: cdktf.numberToTerraform(struct!.patternRecognitionProceeded),
    pattern_recognition_sampling_started: cdktf.numberToTerraform(struct!.patternRecognitionSamplingStarted),
    pkts_connect_passthru: cdktf.numberToTerraform(struct!.pktsConnectPassthru),
    pkts_ofo: cdktf.numberToTerraform(struct!.pktsOfo),
    pkts_retrans: cdktf.numberToTerraform(struct!.pktsRetrans),
    pkts_retrans_fin: cdktf.numberToTerraform(struct!.pktsRetransFin),
    pkts_retrans_push: cdktf.numberToTerraform(struct!.pktsRetransPush),
    pkts_retrans_rst: cdktf.numberToTerraform(struct!.pktsRetransRst),
    policy_drop: cdktf.numberToTerraform(struct!.policyDrop),
    policy_violation: cdktf.numberToTerraform(struct!.policyViolation),
    port_bytes: cdktf.numberToTerraform(struct!.portBytes),
    port_bytes_drop: cdktf.numberToTerraform(struct!.portBytesDrop),
    port_bytes_sent: cdktf.numberToTerraform(struct!.portBytesSent),
    port_conn_limm_exceed: cdktf.numberToTerraform(struct!.portConnLimmExceed),
    port_conn_rate_exceed: cdktf.numberToTerraform(struct!.portConnRateExceed),
    port_drop: cdktf.numberToTerraform(struct!.portDrop),
    port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.portKbitRateExceed),
    port_kbit_rate_exceed_pkt: cdktf.numberToTerraform(struct!.portKbitRateExceedPkt),
    port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.portPktRateExceed),
    port_pkt_sent: cdktf.numberToTerraform(struct!.portPktSent),
    port_rcvd: cdktf.numberToTerraform(struct!.portRcvd),
    port_src_bl: cdktf.numberToTerraform(struct!.portSrcBl),
    port_src_escalation: cdktf.numberToTerraform(struct!.portSrcEscalation),
    port_syn_rate_exceed: cdktf.numberToTerraform(struct!.portSynRateExceed),
    port_synack_rate_exceed: cdktf.numberToTerraform(struct!.portSynackRateExceed),
    processed: cdktf.numberToTerraform(struct!.processed),
    prog_conn_exceed_bl: cdktf.numberToTerraform(struct!.progConnExceedBl),
    prog_conn_exceed_drop: cdktf.numberToTerraform(struct!.progConnExceedDrop),
    prog_conn_exceed_reset: cdktf.numberToTerraform(struct!.progConnExceedReset),
    prog_conn_rcvd_exceed: cdktf.numberToTerraform(struct!.progConnRcvdExceed),
    prog_conn_rcvd_sent_ratio_exceed: cdktf.numberToTerraform(struct!.progConnRcvdSentRatioExceed),
    prog_conn_samples: cdktf.numberToTerraform(struct!.progConnSamples),
    prog_conn_samples_processed: cdktf.numberToTerraform(struct!.progConnSamplesProcessed),
    prog_conn_sent_exceed: cdktf.numberToTerraform(struct!.progConnSentExceed),
    prog_conn_time_exceed: cdktf.numberToTerraform(struct!.progConnTimeExceed),
    prog_exceed_bl: cdktf.numberToTerraform(struct!.progExceedBl),
    prog_exceed_drop: cdktf.numberToTerraform(struct!.progExceedDrop),
    prog_exceed_reset: cdktf.numberToTerraform(struct!.progExceedReset),
    prog_first_req_time_exceed: cdktf.numberToTerraform(struct!.progFirstReqTimeExceed),
    prog_req_resp_time_exceed: cdktf.numberToTerraform(struct!.progReqRespTimeExceed),
    prog_req_samples: cdktf.numberToTerraform(struct!.progReqSamples),
    prog_req_samples_processed: cdktf.numberToTerraform(struct!.progReqSamplesProcessed),
    prog_request_len_exceed: cdktf.numberToTerraform(struct!.progRequestLenExceed),
    prog_resp_req_ratio_exceed: cdktf.numberToTerraform(struct!.progRespReqRatioExceed),
    prog_resp_req_time_exceed: cdktf.numberToTerraform(struct!.progRespReqTimeExceed),
    prog_response_len_exceed: cdktf.numberToTerraform(struct!.progResponseLenExceed),
    prog_win_exceed_bl: cdktf.numberToTerraform(struct!.progWinExceedBl),
    prog_win_exceed_drop: cdktf.numberToTerraform(struct!.progWinExceedDrop),
    prog_win_exceed_reset: cdktf.numberToTerraform(struct!.progWinExceedReset),
    prog_win_rcvd_exceed: cdktf.numberToTerraform(struct!.progWinRcvdExceed),
    prog_win_rcvd_sent_ratio_exceed: cdktf.numberToTerraform(struct!.progWinRcvdSentRatioExceed),
    prog_win_samples: cdktf.numberToTerraform(struct!.progWinSamples),
    prog_win_samples_processed: cdktf.numberToTerraform(struct!.progWinSamplesProcessed),
    prog_win_sent_exceed: cdktf.numberToTerraform(struct!.progWinSentExceed),
    referer_filter_blacklist: cdktf.numberToTerraform(struct!.refererFilterBlacklist),
    referer_filter_match: cdktf.numberToTerraform(struct!.refererFilterMatch),
    req: cdktf.numberToTerraform(struct!.req),
    req_connect: cdktf.numberToTerraform(struct!.reqConnect),
    req_content_len: cdktf.numberToTerraform(struct!.reqContentLen),
    req_delete: cdktf.numberToTerraform(struct!.reqDelete),
    req_get: cdktf.numberToTerraform(struct!.reqGet),
    req_head: cdktf.numberToTerraform(struct!.reqHead),
    req_http10: cdktf.numberToTerraform(struct!.reqHttp10),
    req_http11: cdktf.numberToTerraform(struct!.reqHttp11),
    req_ofo: cdktf.numberToTerraform(struct!.reqOfo),
    req_options: cdktf.numberToTerraform(struct!.reqOptions),
    req_post: cdktf.numberToTerraform(struct!.reqPost),
    req_put: cdktf.numberToTerraform(struct!.reqPut),
    req_retran: cdktf.numberToTerraform(struct!.reqRetran),
    req_sz_16k: cdktf.numberToTerraform(struct!.reqSz16K),
    req_sz_1k: cdktf.numberToTerraform(struct!.reqSz1K),
    req_sz_256k: cdktf.numberToTerraform(struct!.reqSz256K),
    req_sz_2k: cdktf.numberToTerraform(struct!.reqSz2K),
    req_sz_32k: cdktf.numberToTerraform(struct!.reqSz32K),
    req_sz_4k: cdktf.numberToTerraform(struct!.reqSz4K),
    req_sz_64k: cdktf.numberToTerraform(struct!.reqSz64K),
    req_sz_8k: cdktf.numberToTerraform(struct!.reqSz8K),
    req_sz_gt_256k: cdktf.numberToTerraform(struct!.reqSzGt256K),
    req_trace: cdktf.numberToTerraform(struct!.reqTrace),
    req_unknown: cdktf.numberToTerraform(struct!.reqUnknown),
    resp_code_1xx: cdktf.numberToTerraform(struct!.respCode1Xx),
    resp_code_2xx: cdktf.numberToTerraform(struct!.respCode2Xx),
    resp_code_3xx: cdktf.numberToTerraform(struct!.respCode3Xx),
    resp_code_4xx: cdktf.numberToTerraform(struct!.respCode4Xx),
    resp_code_5xx: cdktf.numberToTerraform(struct!.respCode5Xx),
    resp_code_other: cdktf.numberToTerraform(struct!.respCodeOther),
    resp_mib_chunk_bad: cdktf.numberToTerraform(struct!.respMibChunkBad),
    retransmit_excd: cdktf.numberToTerraform(struct!.retransmitExcd),
    rsp_chunk: cdktf.numberToTerraform(struct!.rspChunk),
    rst_cookie_fail: cdktf.numberToTerraform(struct!.rstCookieFail),
    secondary_port_conn_limm_exceed: cdktf.numberToTerraform(struct!.secondaryPortConnLimmExceed),
    secondary_port_conn_rate_exceed: cdktf.numberToTerraform(struct!.secondaryPortConnRateExceed),
    secondary_port_hit: cdktf.numberToTerraform(struct!.secondaryPortHit),
    secondary_port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.secondaryPortKbitRateExceed),
    secondary_port_kbit_rate_exceed_pkt: cdktf.numberToTerraform(struct!.secondaryPortKbitRateExceedPkt),
    secondary_port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.secondaryPortPktRateExceed),
    sess_aged: cdktf.numberToTerraform(struct!.sessAged),
    sess_create: cdktf.numberToTerraform(struct!.sessCreate),
    sess_create_inbound: cdktf.numberToTerraform(struct!.sessCreateInbound),
    sess_create_outbound: cdktf.numberToTerraform(struct!.sessCreateOutbound),
    sflow_external_packets_sent: cdktf.numberToTerraform(struct!.sflowExternalPacketsSent),
    sflow_external_samples_packed: cdktf.numberToTerraform(struct!.sflowExternalSamplesPacked),
    sflow_internal_packets_sent: cdktf.numberToTerraform(struct!.sflowInternalPacketsSent),
    sflow_internal_samples_packed: cdktf.numberToTerraform(struct!.sflowInternalSamplesPacked),
    slow_post: cdktf.numberToTerraform(struct!.slowPost),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    src_ack_auth_fail: cdktf.numberToTerraform(struct!.srcAckAuthFail),
    src_ack_retry_blacklist: cdktf.numberToTerraform(struct!.srcAckRetryBlacklist),
    src_ack_retry_gap_drop: cdktf.numberToTerraform(struct!.srcAckRetryGapDrop),
    src_ack_retry_init: cdktf.numberToTerraform(struct!.srcAckRetryInit),
    src_ack_retry_reset: cdktf.numberToTerraform(struct!.srcAckRetryReset),
    src_ack_retry_rto_fail: cdktf.numberToTerraform(struct!.srcAckRetryRtoFail),
    src_ack_retry_rto_pass: cdktf.numberToTerraform(struct!.srcAckRetryRtoPass),
    src_ack_retry_rto_progress: cdktf.numberToTerraform(struct!.srcAckRetryRtoProgress),
    src_ack_retry_timeout: cdktf.numberToTerraform(struct!.srcAckRetryTimeout),
    src_auth_drop: cdktf.numberToTerraform(struct!.srcAuthDrop),
    src_challenge_js_fail: cdktf.numberToTerraform(struct!.srcChallengeJsFail),
    src_challenge_ud_fail: cdktf.numberToTerraform(struct!.srcChallengeUdFail),
    src_conn_ofo_rate_excd: cdktf.numberToTerraform(struct!.srcConnOfoRateExcd),
    src_conn_pkt_rate_excd: cdktf.numberToTerraform(struct!.srcConnPktRateExcd),
    src_conn_rexmit_rate_excd: cdktf.numberToTerraform(struct!.srcConnRexmitRateExcd),
    src_conn_zwindow_rate_excd: cdktf.numberToTerraform(struct!.srcConnZwindowRateExcd),
    src_create_conn_non_syn_dropped: cdktf.numberToTerraform(struct!.srcCreateConnNonSynDropped),
    src_dos_policy_violation: cdktf.numberToTerraform(struct!.srcDosPolicyViolation),
    src_drop: cdktf.numberToTerraform(struct!.srcDrop),
    src_filter1_match: cdktf.numberToTerraform(struct!.srcFilter1Match),
    src_filter2_match: cdktf.numberToTerraform(struct!.srcFilter2Match),
    src_filter3_match: cdktf.numberToTerraform(struct!.srcFilter3Match),
    src_filter4_match: cdktf.numberToTerraform(struct!.srcFilter4Match),
    src_filter5_match: cdktf.numberToTerraform(struct!.srcFilter5Match),
    src_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcFilterActionBlacklist),
    src_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcFilterActionDefaultPass),
    src_filter_action_drop: cdktf.numberToTerraform(struct!.srcFilterActionDrop),
    src_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcFilterActionWhitelist),
    src_filter_auth_fail: cdktf.numberToTerraform(struct!.srcFilterAuthFail),
    src_filter_none_match: cdktf.numberToTerraform(struct!.srcFilterNoneMatch),
    src_filter_total_not_match: cdktf.numberToTerraform(struct!.srcFilterTotalNotMatch),
    src_frag_drop: cdktf.numberToTerraform(struct!.srcFragDrop),
    src_header_filter10_drop: cdktf.numberToTerraform(struct!.srcHeaderFilter10Drop),
    src_header_filter10_match: cdktf.numberToTerraform(struct!.srcHeaderFilter10Match),
    src_header_filter1_drop: cdktf.numberToTerraform(struct!.srcHeaderFilter1Drop),
    src_header_filter1_match: cdktf.numberToTerraform(struct!.srcHeaderFilter1Match),
    src_header_filter2_drop: cdktf.numberToTerraform(struct!.srcHeaderFilter2Drop),
    src_header_filter2_match: cdktf.numberToTerraform(struct!.srcHeaderFilter2Match),
    src_header_filter3_drop: cdktf.numberToTerraform(struct!.srcHeaderFilter3Drop),
    src_header_filter3_match: cdktf.numberToTerraform(struct!.srcHeaderFilter3Match),
    src_header_filter4_drop: cdktf.numberToTerraform(struct!.srcHeaderFilter4Drop),
    src_header_filter4_match: cdktf.numberToTerraform(struct!.srcHeaderFilter4Match),
    src_header_filter5_drop: cdktf.numberToTerraform(struct!.srcHeaderFilter5Drop),
    src_header_filter5_match: cdktf.numberToTerraform(struct!.srcHeaderFilter5Match),
    src_header_filter6_drop: cdktf.numberToTerraform(struct!.srcHeaderFilter6Drop),
    src_header_filter6_match: cdktf.numberToTerraform(struct!.srcHeaderFilter6Match),
    src_header_filter7_drop: cdktf.numberToTerraform(struct!.srcHeaderFilter7Drop),
    src_header_filter7_match: cdktf.numberToTerraform(struct!.srcHeaderFilter7Match),
    src_header_filter8_drop: cdktf.numberToTerraform(struct!.srcHeaderFilter8Drop),
    src_header_filter8_match: cdktf.numberToTerraform(struct!.srcHeaderFilter8Match),
    src_header_filter9_drop: cdktf.numberToTerraform(struct!.srcHeaderFilter9Drop),
    src_header_filter9_match: cdktf.numberToTerraform(struct!.srcHeaderFilter9Match),
    src_header_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcHeaderFilterActionBlacklist),
    src_header_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcHeaderFilterActionDefaultPass),
    src_header_filter_action_drop: cdktf.numberToTerraform(struct!.srcHeaderFilterActionDrop),
    src_header_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcHeaderFilterActionWhitelist),
    src_header_filter_match: cdktf.numberToTerraform(struct!.srcHeaderFilterMatch),
    src_header_filter_none_match: cdktf.numberToTerraform(struct!.srcHeaderFilterNoneMatch),
    src_header_filter_not_match: cdktf.numberToTerraform(struct!.srcHeaderFilterNotMatch),
    src_http_auth_drop: cdktf.numberToTerraform(struct!.srcHttpAuthDrop),
    src_hw_drop: cdktf.numberToTerraform(struct!.srcHwDrop),
    src_hw_drop_inserted: cdktf.numberToTerraform(struct!.srcHwDropInserted),
    src_hw_drop_removed: cdktf.numberToTerraform(struct!.srcHwDropRemoved),
    src_js_challenge_sent: cdktf.numberToTerraform(struct!.srcJsChallengeSent),
    src_learn_overflow: cdktf.numberToTerraform(struct!.srcLearnOverflow),
    src_out_of_seq_excd: cdktf.numberToTerraform(struct!.srcOutOfSeqExcd),
    src_policy_drop: cdktf.numberToTerraform(struct!.srcPolicyDrop),
    src_post_rate_exceed: cdktf.numberToTerraform(struct!.srcPostRateExceed),
    src_req_rate_exceed: cdktf.numberToTerraform(struct!.srcReqRateExceed),
    src_retransmit_excd: cdktf.numberToTerraform(struct!.srcRetransmitExcd),
    src_rst_cookie_fail: cdktf.numberToTerraform(struct!.srcRstCookieFail),
    src_syn_auth_fail: cdktf.numberToTerraform(struct!.srcSynAuthFail),
    src_syn_cookie_fail: cdktf.numberToTerraform(struct!.srcSynCookieFail),
    src_syn_cookie_sent: cdktf.numberToTerraform(struct!.srcSynCookieSent),
    src_syn_rate_exceed: cdktf.numberToTerraform(struct!.srcSynRateExceed),
    src_syn_retry_blacklist: cdktf.numberToTerraform(struct!.srcSynRetryBlacklist),
    src_syn_retry_failed: cdktf.numberToTerraform(struct!.srcSynRetryFailed),
    src_syn_retry_gap_drop: cdktf.numberToTerraform(struct!.srcSynRetryGapDrop),
    src_syn_retry_init: cdktf.numberToTerraform(struct!.srcSynRetryInit),
    src_syn_retry_reset: cdktf.numberToTerraform(struct!.srcSynRetryReset),
    src_syn_retry_rto_fail: cdktf.numberToTerraform(struct!.srcSynRetryRtoFail),
    src_syn_retry_rto_pass: cdktf.numberToTerraform(struct!.srcSynRetryRtoPass),
    src_syn_retry_rto_progress: cdktf.numberToTerraform(struct!.srcSynRetryRtoProgress),
    src_syn_retry_timeout: cdktf.numberToTerraform(struct!.srcSynRetryTimeout),
    src_tcp_auth_rst: cdktf.numberToTerraform(struct!.srcTcpAuthRst),
    src_ud_challenge_sent: cdktf.numberToTerraform(struct!.srcUdChallengeSent),
    src_unauth_drop: cdktf.numberToTerraform(struct!.srcUnauthDrop),
    src_well_known_port: cdktf.numberToTerraform(struct!.srcWellKnownPort),
    src_zero_window_excd: cdktf.numberToTerraform(struct!.srcZeroWindowExcd),
    src_zone_service_entry_aged: cdktf.numberToTerraform(struct!.srcZoneServiceEntryAged),
    src_zone_service_entry_learned: cdktf.numberToTerraform(struct!.srcZoneServiceEntryLearned),
    syn_auth_fail: cdktf.numberToTerraform(struct!.synAuthFail),
    syn_auth_pass: cdktf.numberToTerraform(struct!.synAuthPass),
    syn_auth_rst_ack_drop: cdktf.numberToTerraform(struct!.synAuthRstAckDrop),
    syn_cookie_fail: cdktf.numberToTerraform(struct!.synCookieFail),
    syn_cookie_sent: cdktf.numberToTerraform(struct!.synCookieSent),
    syn_drop: cdktf.numberToTerraform(struct!.synDrop),
    syn_retry_blacklist: cdktf.numberToTerraform(struct!.synRetryBlacklist),
    syn_retry_failed: cdktf.numberToTerraform(struct!.synRetryFailed),
    syn_retry_gap_drop: cdktf.numberToTerraform(struct!.synRetryGapDrop),
    syn_retry_init: cdktf.numberToTerraform(struct!.synRetryInit),
    syn_retry_pass: cdktf.numberToTerraform(struct!.synRetryPass),
    syn_retry_reset: cdktf.numberToTerraform(struct!.synRetryReset),
    syn_retry_rto_fail: cdktf.numberToTerraform(struct!.synRetryRtoFail),
    syn_retry_rto_pass: cdktf.numberToTerraform(struct!.synRetryRtoPass),
    syn_retry_rto_progress: cdktf.numberToTerraform(struct!.synRetryRtoProgress),
    syn_retry_timeout: cdktf.numberToTerraform(struct!.synRetryTimeout),
    syn_tfo_rcv: cdktf.numberToTerraform(struct!.synTfoRcv),
    synack_multiple_attempts_per_ip_detected: cdktf.numberToTerraform(struct!.synackMultipleAttemptsPerIpDetected),
    synack_reset_sent: cdktf.numberToTerraform(struct!.synackResetSent),
    tcp_auth_drop: cdktf.numberToTerraform(struct!.tcpAuthDrop),
    tcp_auth_resp: cdktf.numberToTerraform(struct!.tcpAuthResp),
    tcp_auth_rst: cdktf.numberToTerraform(struct!.tcpAuthRst),
    tcp_filter1_match: cdktf.numberToTerraform(struct!.tcpFilter1Match),
    tcp_filter2_match: cdktf.numberToTerraform(struct!.tcpFilter2Match),
    tcp_filter3_match: cdktf.numberToTerraform(struct!.tcpFilter3Match),
    tcp_filter4_match: cdktf.numberToTerraform(struct!.tcpFilter4Match),
    tcp_filter5_match: cdktf.numberToTerraform(struct!.tcpFilter5Match),
    tcp_filter_action_blacklist: cdktf.numberToTerraform(struct!.tcpFilterActionBlacklist),
    tcp_filter_action_default_pass: cdktf.numberToTerraform(struct!.tcpFilterActionDefaultPass),
    tcp_filter_action_drop: cdktf.numberToTerraform(struct!.tcpFilterActionDrop),
    tcp_filter_action_whitelist: cdktf.numberToTerraform(struct!.tcpFilterActionWhitelist),
    tcp_filter_none_match: cdktf.numberToTerraform(struct!.tcpFilterNoneMatch),
    tcp_filter_total_not_match: cdktf.numberToTerraform(struct!.tcpFilterTotalNotMatch),
    tcp_rexmit_syn_limit_bl: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitBl),
    tcp_rexmit_syn_limit_drop: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitDrop),
    too_many_headers: cdktf.numberToTerraform(struct!.tooManyHeaders),
    ud_challenge_failed: cdktf.numberToTerraform(struct!.udChallengeFailed),
    ud_challenge_sent: cdktf.numberToTerraform(struct!.udChallengeSent),
    unauth_drop: cdktf.numberToTerraform(struct!.unauthDrop),
    unauth_src_session_reset: cdktf.numberToTerraform(struct!.unauthSrcSessionReset),
    uri_filter_match: cdktf.numberToTerraform(struct!.uriFilterMatch),
    use_hdr_src_ip: cdktf.numberToTerraform(struct!.useHdrSrcIp),
    user_agent_filter_blacklist: cdktf.numberToTerraform(struct!.userAgentFilterBlacklist),
    user_agent_filter_match: cdktf.numberToTerraform(struct!.userAgentFilterMatch),
    wellknown_sport_drop: cdktf.numberToTerraform(struct!.wellknownSportDrop),
    window_small: cdktf.numberToTerraform(struct!.windowSmall),
    window_small_drop: cdktf.numberToTerraform(struct!.windowSmallDrop),
    zero_window_excd: cdktf.numberToTerraform(struct!.zeroWindowExcd),
  }
}


export function dataThunderDdosHttpZonePortStatsStatsToHclTerraform(struct?: DataThunderDdosHttpZonePortStatsStatsOutputReference | DataThunderDdosHttpZonePortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.ackAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_pass: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_reset: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_rto_fail: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryRtoFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_rto_pass: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryRtoPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_rto_progress: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryRtoProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    addr_filter_bl: {
      value: cdktf.numberToHclTerraform(struct!.addrFilterBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    addr_filter_drop: {
      value: cdktf.numberToHclTerraform(struct!.addrFilterDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bl: {
      value: cdktf.numberToHclTerraform(struct!.bl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    challenge_failed: {
      value: cdktf.numberToHclTerraform(struct!.challengeFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_bad: {
      value: cdktf.numberToHclTerraform(struct!.chunkBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_1k: {
      value: cdktf.numberToHclTerraform(struct!.chunkSz1K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_2k: {
      value: cdktf.numberToHclTerraform(struct!.chunkSz2K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_4k: {
      value: cdktf.numberToHclTerraform(struct!.chunkSz4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_512: {
      value: cdktf.numberToHclTerraform(struct!.chunkSz512),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_gt_4k: {
      value: cdktf.numberToHclTerraform(struct!.chunkSzGt4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_rst: {
      value: cdktf.numberToHclTerraform(struct!.clientRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_close: {
      value: cdktf.numberToHclTerraform(struct!.connClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_close_half_open: {
      value: cdktf.numberToHclTerraform(struct!.connCloseHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_close_w_fin: {
      value: cdktf.numberToHclTerraform(struct!.connCloseWFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_close_w_idle: {
      value: cdktf.numberToHclTerraform(struct!.connCloseWIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_close_w_rst: {
      value: cdktf.numberToHclTerraform(struct!.connCloseWRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_create_from_ack: {
      value: cdktf.numberToHclTerraform(struct!.connCreateFromAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_create_from_syn: {
      value: cdktf.numberToHclTerraform(struct!.connCreateFromSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_create_from_synack: {
      value: cdktf.numberToHclTerraform(struct!.connCreateFromSynack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_ofo_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.connOfoRateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_prate_excd: {
      value: cdktf.numberToHclTerraform(struct!.connPrateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rexmit_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.connRexmitRateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_zwindow_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.connZwindowRateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content_length_too_long: {
      value: cdktf.numberToHclTerraform(struct!.contentLengthTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_conn_non_syn_dropped: {
      value: cdktf.numberToHclTerraform(struct!.createConnNonSynDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_es_level: {
      value: cdktf.numberToHclTerraform(struct!.currentEsLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hw_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hw_drop_inserted: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDropInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hw_drop_removed: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDropRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_post_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstPostRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_req_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstReqRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_resp_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstRespRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    er_condition: {
      value: cdktf.numberToHclTerraform(struct!.erCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_inbound_port_byte_drop: {
      value: cdktf.numberToHclTerraform(struct!.ewInboundPortByteDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_inbound_port_byte_rcv: {
      value: cdktf.numberToHclTerraform(struct!.ewInboundPortByteRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_inbound_port_byte_sent: {
      value: cdktf.numberToHclTerraform(struct!.ewInboundPortByteSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_inbound_port_drop: {
      value: cdktf.numberToHclTerraform(struct!.ewInboundPortDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_inbound_port_rcv: {
      value: cdktf.numberToHclTerraform(struct!.ewInboundPortRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_inbound_port_sent: {
      value: cdktf.numberToHclTerraform(struct!.ewInboundPortSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_outbound_port_byte_drop: {
      value: cdktf.numberToHclTerraform(struct!.ewOutboundPortByteDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_outbound_port_byte_rcv: {
      value: cdktf.numberToHclTerraform(struct!.ewOutboundPortByteRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_outbound_port_byte_sent: {
      value: cdktf.numberToHclTerraform(struct!.ewOutboundPortByteSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_outbound_port_drop: {
      value: cdktf.numberToHclTerraform(struct!.ewOutboundPortDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_outbound_port_rcv: {
      value: cdktf.numberToHclTerraform(struct!.ewOutboundPortRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_outbound_port_sent: {
      value: cdktf.numberToHclTerraform(struct!.ewOutboundPortSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.exceedActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_action_tunnel: {
      value: cdktf.numberToHclTerraform(struct!.exceedActionTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_brate_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropBrateSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_brate_src_pkt: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropBrateSrcPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_climit_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropClimitSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_crate_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropCrateSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_prate_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropPrateSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_alloc: {
      value: cdktf.numberToHclTerraform(struct!.failAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_alloc_hdr: {
      value: cdktf.numberToHclTerraform(struct!.failAllocHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_get_line: {
      value: cdktf.numberToHclTerraform(struct!.failGetLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter10_drop: {
      value: cdktf.numberToHclTerraform(struct!.filter10Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter10_match: {
      value: cdktf.numberToHclTerraform(struct!.filter10Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter1_drop: {
      value: cdktf.numberToHclTerraform(struct!.filter1Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter1_match: {
      value: cdktf.numberToHclTerraform(struct!.filter1Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter2_drop: {
      value: cdktf.numberToHclTerraform(struct!.filter2Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter2_match: {
      value: cdktf.numberToHclTerraform(struct!.filter2Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter3_drop: {
      value: cdktf.numberToHclTerraform(struct!.filter3Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter3_match: {
      value: cdktf.numberToHclTerraform(struct!.filter3Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter4_drop: {
      value: cdktf.numberToHclTerraform(struct!.filter4Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter4_match: {
      value: cdktf.numberToHclTerraform(struct!.filter4Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter5_drop: {
      value: cdktf.numberToHclTerraform(struct!.filter5Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter5_match: {
      value: cdktf.numberToHclTerraform(struct!.filter5Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter6_drop: {
      value: cdktf.numberToHclTerraform(struct!.filter6Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter6_match: {
      value: cdktf.numberToHclTerraform(struct!.filter6Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter7_drop: {
      value: cdktf.numberToHclTerraform(struct!.filter7Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter7_match: {
      value: cdktf.numberToHclTerraform(struct!.filter7Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter8_drop: {
      value: cdktf.numberToHclTerraform(struct!.filter8Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter8_match: {
      value: cdktf.numberToHclTerraform(struct!.filter8Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter9_drop: {
      value: cdktf.numberToHclTerraform(struct!.filter9Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter9_match: {
      value: cdktf.numberToHclTerraform(struct!.filter9Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.filterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.filterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.filterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.filterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.filterAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_match: {
      value: cdktf.numberToHclTerraform(struct!.filterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_none_match: {
      value: cdktf.numberToHclTerraform(struct!.filterNoneMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.filterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.fragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.fragRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_timeout: {
      value: cdktf.numberToHclTerraform(struct!.fragTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_name_too_long: {
      value: cdktf.numberToHclTerraform(struct!.headerNameTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_processing_incomplete: {
      value: cdktf.numberToHclTerraform(struct!.headerProcessingIncomplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_processing_time_0: {
      value: cdktf.numberToHclTerraform(struct!.headerProcessingTime0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_processing_time_1: {
      value: cdktf.numberToHclTerraform(struct!.headerProcessingTime1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_processing_time_2: {
      value: cdktf.numberToHclTerraform(struct!.headerProcessingTime2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_processing_time_3: {
      value: cdktf.numberToHclTerraform(struct!.headerProcessingTime3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.httpAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_auth_resp: {
      value: cdktf.numberToHclTerraform(struct!.httpAuthResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_hdr_name: {
      value: cdktf.numberToHclTerraform(struct!.invalidHdrName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_hdr_val: {
      value: cdktf.numberToHclTerraform(struct!.invalidHdrVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_header: {
      value: cdktf.numberToHclTerraform(struct!.invalidHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    js_challenge_failed: {
      value: cdktf.numberToHclTerraform(struct!.jsChallengeFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    js_challenge_sent: {
      value: cdktf.numberToHclTerraform(struct!.jsChallengeSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_than_mss_exceed: {
      value: cdktf.numberToHclTerraform(struct!.lessThanMssExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.lineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    negative_req_remain: {
      value: cdktf.numberToHclTerraform(struct!.negativeReqRemain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    negative_resp_remain: {
      value: cdktf.numberToHclTerraform(struct!.negativeRespRemain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_syn: {
      value: cdktf.numberToHclTerraform(struct!.newSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_policy_class_list_match: {
      value: cdktf.numberToHclTerraform(struct!.noPolicyClassListMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_route_drop: {
      value: cdktf.numberToHclTerraform(struct!.noRouteDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ofo_queue_sz_exceed: {
      value: cdktf.numberToHclTerraform(struct!.ofoQueueSzExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ofo_timer_expired: {
      value: cdktf.numberToHclTerraform(struct!.ofoTimerExpired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_seq_excd: {
      value: cdktf.numberToHclTerraform(struct!.outOfSeqExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_bytes: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_bad_chunk: {
      value: cdktf.numberToHclTerraform(struct!.parseBadChunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_header_name_too_long: {
      value: cdktf.numberToHclTerraform(struct!.parseHeaderNameTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.parseLineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_req_line_invalid_method: {
      value: cdktf.numberToHclTerraform(struct!.parseReqLineInvalidMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_req_line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.parseReqLineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_req_line_too_small: {
      value: cdktf.numberToHclTerraform(struct!.parseReqLineTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_too_many_headers: {
      value: cdktf.numberToHclTerraform(struct!.parseTooManyHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parsereq_fail: {
      value: cdktf.numberToHclTerraform(struct!.parsereqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partial_header: {
      value: cdktf.numberToHclTerraform(struct!.partialHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter1_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter1Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter2_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter2Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter3_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter3Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter4_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter4Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter5_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter5Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter_drop: {
      value: cdktf.numberToHclTerraform(struct!.patternFilterDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_not_found: {
      value: cdktf.numberToHclTerraform(struct!.patternNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_generic_error: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionGenericError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_pattern_changed: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionPatternChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_proceeded: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionProceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_sampling_started: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionSamplingStarted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_connect_passthru: {
      value: cdktf.numberToHclTerraform(struct!.pktsConnectPassthru),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_ofo: {
      value: cdktf.numberToHclTerraform(struct!.pktsOfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_retrans: {
      value: cdktf.numberToHclTerraform(struct!.pktsRetrans),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_retrans_fin: {
      value: cdktf.numberToHclTerraform(struct!.pktsRetransFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_retrans_push: {
      value: cdktf.numberToHclTerraform(struct!.pktsRetransPush),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_retrans_rst: {
      value: cdktf.numberToHclTerraform(struct!.pktsRetransRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_drop: {
      value: cdktf.numberToHclTerraform(struct!.policyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_violation: {
      value: cdktf.numberToHclTerraform(struct!.policyViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_bytes: {
      value: cdktf.numberToHclTerraform(struct!.portBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.portBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.portBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_conn_limm_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portConnLimmExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_drop: {
      value: cdktf.numberToHclTerraform(struct!.portDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_kbit_rate_exceed_pkt: {
      value: cdktf.numberToHclTerraform(struct!.portKbitRateExceedPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.portPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.portRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_src_bl: {
      value: cdktf.numberToHclTerraform(struct!.portSrcBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_src_escalation: {
      value: cdktf.numberToHclTerraform(struct!.portSrcEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_syn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portSynRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_synack_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portSynackRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    processed: {
      value: cdktf.numberToHclTerraform(struct!.processed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.progConnExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.progConnExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_exceed_reset: {
      value: cdktf.numberToHclTerraform(struct!.progConnExceedReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_rcvd_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progConnRcvdExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_rcvd_sent_ratio_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progConnRcvdSentRatioExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_samples: {
      value: cdktf.numberToHclTerraform(struct!.progConnSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_samples_processed: {
      value: cdktf.numberToHclTerraform(struct!.progConnSamplesProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_sent_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progConnSentExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_time_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progConnTimeExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.progExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.progExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_exceed_reset: {
      value: cdktf.numberToHclTerraform(struct!.progExceedReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_first_req_time_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progFirstReqTimeExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_req_resp_time_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progReqRespTimeExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_req_samples: {
      value: cdktf.numberToHclTerraform(struct!.progReqSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_req_samples_processed: {
      value: cdktf.numberToHclTerraform(struct!.progReqSamplesProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_request_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progRequestLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_resp_req_ratio_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progRespReqRatioExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_resp_req_time_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progRespReqTimeExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_response_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progResponseLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.progWinExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.progWinExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_exceed_reset: {
      value: cdktf.numberToHclTerraform(struct!.progWinExceedReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_rcvd_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progWinRcvdExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_rcvd_sent_ratio_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progWinRcvdSentRatioExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_samples: {
      value: cdktf.numberToHclTerraform(struct!.progWinSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_samples_processed: {
      value: cdktf.numberToHclTerraform(struct!.progWinSamplesProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_sent_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progWinSentExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    referer_filter_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.refererFilterBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    referer_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.refererFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req: {
      value: cdktf.numberToHclTerraform(struct!.req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_connect: {
      value: cdktf.numberToHclTerraform(struct!.reqConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_content_len: {
      value: cdktf.numberToHclTerraform(struct!.reqContentLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_delete: {
      value: cdktf.numberToHclTerraform(struct!.reqDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_get: {
      value: cdktf.numberToHclTerraform(struct!.reqGet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_head: {
      value: cdktf.numberToHclTerraform(struct!.reqHead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_http10: {
      value: cdktf.numberToHclTerraform(struct!.reqHttp10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_http11: {
      value: cdktf.numberToHclTerraform(struct!.reqHttp11),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_ofo: {
      value: cdktf.numberToHclTerraform(struct!.reqOfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_options: {
      value: cdktf.numberToHclTerraform(struct!.reqOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_post: {
      value: cdktf.numberToHclTerraform(struct!.reqPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_put: {
      value: cdktf.numberToHclTerraform(struct!.reqPut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_retran: {
      value: cdktf.numberToHclTerraform(struct!.reqRetran),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_16k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz16K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_1k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz1K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_256k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_2k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz2K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_32k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz32K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_4k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_64k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz64K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_8k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz8K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_gt_256k: {
      value: cdktf.numberToHclTerraform(struct!.reqSzGt256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_trace: {
      value: cdktf.numberToHclTerraform(struct!.reqTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_unknown: {
      value: cdktf.numberToHclTerraform(struct!.reqUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_code_1xx: {
      value: cdktf.numberToHclTerraform(struct!.respCode1Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_code_2xx: {
      value: cdktf.numberToHclTerraform(struct!.respCode2Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_code_3xx: {
      value: cdktf.numberToHclTerraform(struct!.respCode3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_code_4xx: {
      value: cdktf.numberToHclTerraform(struct!.respCode4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_code_5xx: {
      value: cdktf.numberToHclTerraform(struct!.respCode5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_code_other: {
      value: cdktf.numberToHclTerraform(struct!.respCodeOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_mib_chunk_bad: {
      value: cdktf.numberToHclTerraform(struct!.respMibChunkBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_excd: {
      value: cdktf.numberToHclTerraform(struct!.retransmitExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_chunk: {
      value: cdktf.numberToHclTerraform(struct!.rspChunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rst_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.rstCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_conn_limm_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortConnLimmExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_hit: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_kbit_rate_exceed_pkt: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortKbitRateExceedPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_aged: {
      value: cdktf.numberToHclTerraform(struct!.sessAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create: {
      value: cdktf.numberToHclTerraform(struct!.sessCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create_inbound: {
      value: cdktf.numberToHclTerraform(struct!.sessCreateInbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create_outbound: {
      value: cdktf.numberToHclTerraform(struct!.sessCreateOutbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_external_packets_sent: {
      value: cdktf.numberToHclTerraform(struct!.sflowExternalPacketsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_external_samples_packed: {
      value: cdktf.numberToHclTerraform(struct!.sflowExternalSamplesPacked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_internal_packets_sent: {
      value: cdktf.numberToHclTerraform(struct!.sflowInternalPacketsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_internal_samples_packed: {
      value: cdktf.numberToHclTerraform(struct!.sflowInternalSamplesPacked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow_post: {
      value: cdktf.numberToHclTerraform(struct!.slowPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcAckAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_reset: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_rto_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryRtoFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_rto_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryRtoPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_rto_progress: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryRtoProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_challenge_js_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcChallengeJsFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_challenge_ud_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcChallengeUdFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_conn_ofo_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcConnOfoRateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_conn_pkt_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcConnPktRateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_conn_rexmit_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcConnRexmitRateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_conn_zwindow_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcConnZwindowRateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_create_conn_non_syn_dropped: {
      value: cdktf.numberToHclTerraform(struct!.srcCreateConnNonSynDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dos_policy_violation: {
      value: cdktf.numberToHclTerraform(struct!.srcDosPolicyViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter1_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter1Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter2_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter2Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter3_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter3Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter4_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter4Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter5_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter5Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_none_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterNoneMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_total_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterTotalNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter10_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter10Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter10_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter10Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter1_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter1Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter1_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter1Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter2_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter2Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter2_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter2Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter3_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter3Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter3_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter3Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter4_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter4Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter4_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter4Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter5_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter5Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter5_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter5Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter6_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter6Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter6_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter6Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter7_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter7Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter7_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter7Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter8_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter8Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter8_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter8Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter9_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter9Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter9_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilter9Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_none_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterNoneMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_http_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHttpAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_hw_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHwDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_hw_drop_inserted: {
      value: cdktf.numberToHclTerraform(struct!.srcHwDropInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_hw_drop_removed: {
      value: cdktf.numberToHclTerraform(struct!.srcHwDropRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_js_challenge_sent: {
      value: cdktf.numberToHclTerraform(struct!.srcJsChallengeSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_learn_overflow: {
      value: cdktf.numberToHclTerraform(struct!.srcLearnOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_out_of_seq_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcOutOfSeqExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_policy_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcPolicyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_post_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcPostRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_req_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcReqRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_retransmit_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcRetransmitExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rst_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcRstCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcSynAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcSynCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_cookie_sent: {
      value: cdktf.numberToHclTerraform(struct!.srcSynCookieSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_failed: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_reset: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_rto_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryRtoFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_rto_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryRtoPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_rto_progress: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryRtoProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_auth_rst: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpAuthRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ud_challenge_sent: {
      value: cdktf.numberToHclTerraform(struct!.srcUdChallengeSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_unauth_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcUnauthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_well_known_port: {
      value: cdktf.numberToHclTerraform(struct!.srcWellKnownPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zero_window_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcZeroWindowExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_entry_aged: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceEntryAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_entry_learned: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceEntryLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.synAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.synAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_auth_rst_ack_drop: {
      value: cdktf.numberToHclTerraform(struct!.synAuthRstAckDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.synCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie_sent: {
      value: cdktf.numberToHclTerraform(struct!.synCookieSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_drop: {
      value: cdktf.numberToHclTerraform(struct!.synDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.synRetryBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_failed: {
      value: cdktf.numberToHclTerraform(struct!.synRetryFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.synRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.synRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_pass: {
      value: cdktf.numberToHclTerraform(struct!.synRetryPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_reset: {
      value: cdktf.numberToHclTerraform(struct!.synRetryReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_rto_fail: {
      value: cdktf.numberToHclTerraform(struct!.synRetryRtoFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_rto_pass: {
      value: cdktf.numberToHclTerraform(struct!.synRetryRtoPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_rto_progress: {
      value: cdktf.numberToHclTerraform(struct!.synRetryRtoProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.synRetryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_tfo_rcv: {
      value: cdktf.numberToHclTerraform(struct!.synTfoRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synack_multiple_attempts_per_ip_detected: {
      value: cdktf.numberToHclTerraform(struct!.synackMultipleAttemptsPerIpDetected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synack_reset_sent: {
      value: cdktf.numberToHclTerraform(struct!.synackResetSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_resp: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_rst: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter1_match: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilter1Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter2_match: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilter2Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter3_match: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilter3Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter4_match: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilter4Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter5_match: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilter5Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter_none_match: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterNoneMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter_total_not_match: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterTotalNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rexmit_syn_limit_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpRexmitSynLimitBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rexmit_syn_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpRexmitSynLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    too_many_headers: {
      value: cdktf.numberToHclTerraform(struct!.tooManyHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ud_challenge_failed: {
      value: cdktf.numberToHclTerraform(struct!.udChallengeFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ud_challenge_sent: {
      value: cdktf.numberToHclTerraform(struct!.udChallengeSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unauth_drop: {
      value: cdktf.numberToHclTerraform(struct!.unauthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unauth_src_session_reset: {
      value: cdktf.numberToHclTerraform(struct!.unauthSrcSessionReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uri_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.uriFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_hdr_src_ip: {
      value: cdktf.numberToHclTerraform(struct!.useHdrSrcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_agent_filter_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.userAgentFilterBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_agent_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.userAgentFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wellknown_sport_drop: {
      value: cdktf.numberToHclTerraform(struct!.wellknownSportDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_small: {
      value: cdktf.numberToHclTerraform(struct!.windowSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_small_drop: {
      value: cdktf.numberToHclTerraform(struct!.windowSmallDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zero_window_excd: {
      value: cdktf.numberToHclTerraform(struct!.zeroWindowExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosHttpZonePortStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosHttpZonePortStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackAuthFail = this._ackAuthFail;
    }
    if (this._ackRetryBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryBlacklist = this._ackRetryBlacklist;
    }
    if (this._ackRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryGapDrop = this._ackRetryGapDrop;
    }
    if (this._ackRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryInit = this._ackRetryInit;
    }
    if (this._ackRetryPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryPass = this._ackRetryPass;
    }
    if (this._ackRetryReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryReset = this._ackRetryReset;
    }
    if (this._ackRetryRtoFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryRtoFail = this._ackRetryRtoFail;
    }
    if (this._ackRetryRtoPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryRtoPass = this._ackRetryRtoPass;
    }
    if (this._ackRetryRtoProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryRtoProgress = this._ackRetryRtoProgress;
    }
    if (this._ackRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryTimeout = this._ackRetryTimeout;
    }
    if (this._addrFilterBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrFilterBl = this._addrFilterBl;
    }
    if (this._addrFilterDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrFilterDrop = this._addrFilterDrop;
    }
    if (this._bl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bl = this._bl;
    }
    if (this._challengeFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeFailed = this._challengeFailed;
    }
    if (this._chunkBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkBad = this._chunkBad;
    }
    if (this._chunkSz1K !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSz1K = this._chunkSz1K;
    }
    if (this._chunkSz2K !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSz2K = this._chunkSz2K;
    }
    if (this._chunkSz4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSz4K = this._chunkSz4K;
    }
    if (this._chunkSz512 !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSz512 = this._chunkSz512;
    }
    if (this._chunkSzGt4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSzGt4K = this._chunkSzGt4K;
    }
    if (this._clientRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRst = this._clientRst;
    }
    if (this._connClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.connClose = this._connClose;
    }
    if (this._connCloseHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCloseHalfOpen = this._connCloseHalfOpen;
    }
    if (this._connCloseWFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCloseWFin = this._connCloseWFin;
    }
    if (this._connCloseWIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCloseWIdle = this._connCloseWIdle;
    }
    if (this._connCloseWRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCloseWRst = this._connCloseWRst;
    }
    if (this._connCreateFromAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCreateFromAck = this._connCreateFromAck;
    }
    if (this._connCreateFromSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCreateFromSyn = this._connCreateFromSyn;
    }
    if (this._connCreateFromSynack !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCreateFromSynack = this._connCreateFromSynack;
    }
    if (this._connOfoRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connOfoRateExcd = this._connOfoRateExcd;
    }
    if (this._connPrateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connPrateExcd = this._connPrateExcd;
    }
    if (this._connRexmitRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRexmitRateExcd = this._connRexmitRateExcd;
    }
    if (this._connZwindowRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connZwindowRateExcd = this._connZwindowRateExcd;
    }
    if (this._contentLengthTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLengthTooLong = this._contentLengthTooLong;
    }
    if (this._createConnNonSynDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.createConnNonSynDropped = this._createConnNonSynDropped;
    }
    if (this._currentEsLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentEsLevel = this._currentEsLevel;
    }
    if (this._dstHwDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDrop = this._dstHwDrop;
    }
    if (this._dstHwDropInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDropInserted = this._dstHwDropInserted;
    }
    if (this._dstHwDropRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDropRemoved = this._dstHwDropRemoved;
    }
    if (this._dstPostRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPostRateExceed = this._dstPostRateExceed;
    }
    if (this._dstReqRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstReqRateExceed = this._dstReqRateExceed;
    }
    if (this._dstRespRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRespRateExceed = this._dstRespRateExceed;
    }
    if (this._erCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.erCondition = this._erCondition;
    }
    if (this._ewInboundPortByteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewInboundPortByteDrop = this._ewInboundPortByteDrop;
    }
    if (this._ewInboundPortByteRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewInboundPortByteRcv = this._ewInboundPortByteRcv;
    }
    if (this._ewInboundPortByteSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewInboundPortByteSent = this._ewInboundPortByteSent;
    }
    if (this._ewInboundPortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewInboundPortDrop = this._ewInboundPortDrop;
    }
    if (this._ewInboundPortRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewInboundPortRcv = this._ewInboundPortRcv;
    }
    if (this._ewInboundPortSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewInboundPortSent = this._ewInboundPortSent;
    }
    if (this._ewOutboundPortByteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewOutboundPortByteDrop = this._ewOutboundPortByteDrop;
    }
    if (this._ewOutboundPortByteRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewOutboundPortByteRcv = this._ewOutboundPortByteRcv;
    }
    if (this._ewOutboundPortByteSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewOutboundPortByteSent = this._ewOutboundPortByteSent;
    }
    if (this._ewOutboundPortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewOutboundPortDrop = this._ewOutboundPortDrop;
    }
    if (this._ewOutboundPortRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewOutboundPortRcv = this._ewOutboundPortRcv;
    }
    if (this._ewOutboundPortSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewOutboundPortSent = this._ewOutboundPortSent;
    }
    if (this._exceedActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedActionDrop = this._exceedActionDrop;
    }
    if (this._exceedActionTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedActionTunnel = this._exceedActionTunnel;
    }
    if (this._exceedDropBrateSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropBrateSrc = this._exceedDropBrateSrc;
    }
    if (this._exceedDropBrateSrcPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropBrateSrcPkt = this._exceedDropBrateSrcPkt;
    }
    if (this._exceedDropClimitSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropClimitSrc = this._exceedDropClimitSrc;
    }
    if (this._exceedDropCrateSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropCrateSrc = this._exceedDropCrateSrc;
    }
    if (this._exceedDropPrateSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropPrateSrc = this._exceedDropPrateSrc;
    }
    if (this._failAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.failAlloc = this._failAlloc;
    }
    if (this._failAllocHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.failAllocHdr = this._failAllocHdr;
    }
    if (this._failGetLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.failGetLine = this._failGetLine;
    }
    if (this._filter10Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter10Drop = this._filter10Drop;
    }
    if (this._filter10Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter10Match = this._filter10Match;
    }
    if (this._filter1Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter1Drop = this._filter1Drop;
    }
    if (this._filter1Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter1Match = this._filter1Match;
    }
    if (this._filter2Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter2Drop = this._filter2Drop;
    }
    if (this._filter2Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter2Match = this._filter2Match;
    }
    if (this._filter3Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter3Drop = this._filter3Drop;
    }
    if (this._filter3Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter3Match = this._filter3Match;
    }
    if (this._filter4Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter4Drop = this._filter4Drop;
    }
    if (this._filter4Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter4Match = this._filter4Match;
    }
    if (this._filter5Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter5Drop = this._filter5Drop;
    }
    if (this._filter5Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter5Match = this._filter5Match;
    }
    if (this._filter6Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter6Drop = this._filter6Drop;
    }
    if (this._filter6Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter6Match = this._filter6Match;
    }
    if (this._filter7Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter7Drop = this._filter7Drop;
    }
    if (this._filter7Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter7Match = this._filter7Match;
    }
    if (this._filter8Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter8Drop = this._filter8Drop;
    }
    if (this._filter8Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter8Match = this._filter8Match;
    }
    if (this._filter9Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter9Drop = this._filter9Drop;
    }
    if (this._filter9Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter9Match = this._filter9Match;
    }
    if (this._filterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActionBlacklist = this._filterActionBlacklist;
    }
    if (this._filterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActionDefaultPass = this._filterActionDefaultPass;
    }
    if (this._filterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActionDrop = this._filterActionDrop;
    }
    if (this._filterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActionWhitelist = this._filterActionWhitelist;
    }
    if (this._filterAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAuthFail = this._filterAuthFail;
    }
    if (this._filterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMatch = this._filterMatch;
    }
    if (this._filterNoneMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterNoneMatch = this._filterNoneMatch;
    }
    if (this._filterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterNotMatch = this._filterNotMatch;
    }
    if (this._fragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragDrop = this._fragDrop;
    }
    if (this._fragRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragRcvd = this._fragRcvd;
    }
    if (this._fragTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragTimeout = this._fragTimeout;
    }
    if (this._headerNameTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameTooLong = this._headerNameTooLong;
    }
    if (this._headerProcessingIncomplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerProcessingIncomplete = this._headerProcessingIncomplete;
    }
    if (this._headerProcessingTime0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerProcessingTime0 = this._headerProcessingTime0;
    }
    if (this._headerProcessingTime1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerProcessingTime1 = this._headerProcessingTime1;
    }
    if (this._headerProcessingTime2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerProcessingTime2 = this._headerProcessingTime2;
    }
    if (this._headerProcessingTime3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerProcessingTime3 = this._headerProcessingTime3;
    }
    if (this._httpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAuthDrop = this._httpAuthDrop;
    }
    if (this._httpAuthResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAuthResp = this._httpAuthResp;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._invalidHdrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidHdrName = this._invalidHdrName;
    }
    if (this._invalidHdrVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidHdrVal = this._invalidHdrVal;
    }
    if (this._invalidHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidHeader = this._invalidHeader;
    }
    if (this._jsChallengeFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsChallengeFailed = this._jsChallengeFailed;
    }
    if (this._jsChallengeSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsChallengeSent = this._jsChallengeSent;
    }
    if (this._lessThanMssExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThanMssExceed = this._lessThanMssExceed;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._negativeReqRemain !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeReqRemain = this._negativeReqRemain;
    }
    if (this._negativeRespRemain !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeRespRemain = this._negativeRespRemain;
    }
    if (this._newSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSyn = this._newSyn;
    }
    if (this._noPolicyClassListMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPolicyClassListMatch = this._noPolicyClassListMatch;
    }
    if (this._noRouteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRouteDrop = this._noRouteDrop;
    }
    if (this._ofoQueueSzExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ofoQueueSzExceed = this._ofoQueueSzExceed;
    }
    if (this._ofoTimerExpired !== undefined) {
      hasAnyValues = true;
      internalValueResult.ofoTimerExpired = this._ofoTimerExpired;
    }
    if (this._outOfSeqExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfSeqExcd = this._outOfSeqExcd;
    }
    if (this._outboundPortBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortBytes = this._outboundPortBytes;
    }
    if (this._outboundPortBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortBytesDrop = this._outboundPortBytesDrop;
    }
    if (this._outboundPortBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortBytesSent = this._outboundPortBytesSent;
    }
    if (this._outboundPortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortDrop = this._outboundPortDrop;
    }
    if (this._outboundPortPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortPktSent = this._outboundPortPktSent;
    }
    if (this._outboundPortRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortRcvd = this._outboundPortRcvd;
    }
    if (this._parseBadChunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseBadChunk = this._parseBadChunk;
    }
    if (this._parseHeaderNameTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseHeaderNameTooLong = this._parseHeaderNameTooLong;
    }
    if (this._parseLineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseLineTooLong = this._parseLineTooLong;
    }
    if (this._parseReqLineInvalidMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseReqLineInvalidMethod = this._parseReqLineInvalidMethod;
    }
    if (this._parseReqLineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseReqLineTooLong = this._parseReqLineTooLong;
    }
    if (this._parseReqLineTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseReqLineTooSmall = this._parseReqLineTooSmall;
    }
    if (this._parseTooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseTooManyHeaders = this._parseTooManyHeaders;
    }
    if (this._parsereqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsereqFail = this._parsereqFail;
    }
    if (this._partialHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialHeader = this._partialHeader;
    }
    if (this._patternFilter1Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter1Match = this._patternFilter1Match;
    }
    if (this._patternFilter2Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter2Match = this._patternFilter2Match;
    }
    if (this._patternFilter3Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter3Match = this._patternFilter3Match;
    }
    if (this._patternFilter4Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter4Match = this._patternFilter4Match;
    }
    if (this._patternFilter5Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter5Match = this._patternFilter5Match;
    }
    if (this._patternFilterDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilterDrop = this._patternFilterDrop;
    }
    if (this._patternNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternNotFound = this._patternNotFound;
    }
    if (this._patternRecognitionGenericError !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionGenericError = this._patternRecognitionGenericError;
    }
    if (this._patternRecognitionPatternChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionPatternChanged = this._patternRecognitionPatternChanged;
    }
    if (this._patternRecognitionProceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionProceeded = this._patternRecognitionProceeded;
    }
    if (this._patternRecognitionSamplingStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionSamplingStarted = this._patternRecognitionSamplingStarted;
    }
    if (this._pktsConnectPassthru !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsConnectPassthru = this._pktsConnectPassthru;
    }
    if (this._pktsOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsOfo = this._pktsOfo;
    }
    if (this._pktsRetrans !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsRetrans = this._pktsRetrans;
    }
    if (this._pktsRetransFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsRetransFin = this._pktsRetransFin;
    }
    if (this._pktsRetransPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsRetransPush = this._pktsRetransPush;
    }
    if (this._pktsRetransRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsRetransRst = this._pktsRetransRst;
    }
    if (this._policyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDrop = this._policyDrop;
    }
    if (this._policyViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyViolation = this._policyViolation;
    }
    if (this._portBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBytes = this._portBytes;
    }
    if (this._portBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBytesDrop = this._portBytesDrop;
    }
    if (this._portBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBytesSent = this._portBytesSent;
    }
    if (this._portConnLimmExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portConnLimmExceed = this._portConnLimmExceed;
    }
    if (this._portConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portConnRateExceed = this._portConnRateExceed;
    }
    if (this._portDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDrop = this._portDrop;
    }
    if (this._portKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKbitRateExceed = this._portKbitRateExceed;
    }
    if (this._portKbitRateExceedPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKbitRateExceedPkt = this._portKbitRateExceedPkt;
    }
    if (this._portPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPktRateExceed = this._portPktRateExceed;
    }
    if (this._portPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPktSent = this._portPktSent;
    }
    if (this._portRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRcvd = this._portRcvd;
    }
    if (this._portSrcBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSrcBl = this._portSrcBl;
    }
    if (this._portSrcEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSrcEscalation = this._portSrcEscalation;
    }
    if (this._portSynRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSynRateExceed = this._portSynRateExceed;
    }
    if (this._portSynackRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSynackRateExceed = this._portSynackRateExceed;
    }
    if (this._processed !== undefined) {
      hasAnyValues = true;
      internalValueResult.processed = this._processed;
    }
    if (this._progConnExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnExceedBl = this._progConnExceedBl;
    }
    if (this._progConnExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnExceedDrop = this._progConnExceedDrop;
    }
    if (this._progConnExceedReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnExceedReset = this._progConnExceedReset;
    }
    if (this._progConnRcvdExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnRcvdExceed = this._progConnRcvdExceed;
    }
    if (this._progConnRcvdSentRatioExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnRcvdSentRatioExceed = this._progConnRcvdSentRatioExceed;
    }
    if (this._progConnSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnSamples = this._progConnSamples;
    }
    if (this._progConnSamplesProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnSamplesProcessed = this._progConnSamplesProcessed;
    }
    if (this._progConnSentExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnSentExceed = this._progConnSentExceed;
    }
    if (this._progConnTimeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnTimeExceed = this._progConnTimeExceed;
    }
    if (this._progExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.progExceedBl = this._progExceedBl;
    }
    if (this._progExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.progExceedDrop = this._progExceedDrop;
    }
    if (this._progExceedReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.progExceedReset = this._progExceedReset;
    }
    if (this._progFirstReqTimeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progFirstReqTimeExceed = this._progFirstReqTimeExceed;
    }
    if (this._progReqRespTimeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progReqRespTimeExceed = this._progReqRespTimeExceed;
    }
    if (this._progReqSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.progReqSamples = this._progReqSamples;
    }
    if (this._progReqSamplesProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progReqSamplesProcessed = this._progReqSamplesProcessed;
    }
    if (this._progRequestLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progRequestLenExceed = this._progRequestLenExceed;
    }
    if (this._progRespReqRatioExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progRespReqRatioExceed = this._progRespReqRatioExceed;
    }
    if (this._progRespReqTimeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progRespReqTimeExceed = this._progRespReqTimeExceed;
    }
    if (this._progResponseLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progResponseLenExceed = this._progResponseLenExceed;
    }
    if (this._progWinExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinExceedBl = this._progWinExceedBl;
    }
    if (this._progWinExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinExceedDrop = this._progWinExceedDrop;
    }
    if (this._progWinExceedReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinExceedReset = this._progWinExceedReset;
    }
    if (this._progWinRcvdExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinRcvdExceed = this._progWinRcvdExceed;
    }
    if (this._progWinRcvdSentRatioExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinRcvdSentRatioExceed = this._progWinRcvdSentRatioExceed;
    }
    if (this._progWinSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinSamples = this._progWinSamples;
    }
    if (this._progWinSamplesProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinSamplesProcessed = this._progWinSamplesProcessed;
    }
    if (this._progWinSentExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinSentExceed = this._progWinSentExceed;
    }
    if (this._refererFilterBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererFilterBlacklist = this._refererFilterBlacklist;
    }
    if (this._refererFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererFilterMatch = this._refererFilterMatch;
    }
    if (this._req !== undefined) {
      hasAnyValues = true;
      internalValueResult.req = this._req;
    }
    if (this._reqConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqConnect = this._reqConnect;
    }
    if (this._reqContentLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqContentLen = this._reqContentLen;
    }
    if (this._reqDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqDelete = this._reqDelete;
    }
    if (this._reqGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqGet = this._reqGet;
    }
    if (this._reqHead !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHead = this._reqHead;
    }
    if (this._reqHttp10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHttp10 = this._reqHttp10;
    }
    if (this._reqHttp11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHttp11 = this._reqHttp11;
    }
    if (this._reqOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOfo = this._reqOfo;
    }
    if (this._reqOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOptions = this._reqOptions;
    }
    if (this._reqPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqPost = this._reqPost;
    }
    if (this._reqPut !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqPut = this._reqPut;
    }
    if (this._reqRetran !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRetran = this._reqRetran;
    }
    if (this._reqSz16K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz16K = this._reqSz16K;
    }
    if (this._reqSz1K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz1K = this._reqSz1K;
    }
    if (this._reqSz256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz256K = this._reqSz256K;
    }
    if (this._reqSz2K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz2K = this._reqSz2K;
    }
    if (this._reqSz32K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz32K = this._reqSz32K;
    }
    if (this._reqSz4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz4K = this._reqSz4K;
    }
    if (this._reqSz64K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz64K = this._reqSz64K;
    }
    if (this._reqSz8K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz8K = this._reqSz8K;
    }
    if (this._reqSzGt256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSzGt256K = this._reqSzGt256K;
    }
    if (this._reqTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqTrace = this._reqTrace;
    }
    if (this._reqUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqUnknown = this._reqUnknown;
    }
    if (this._respCode1Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCode1Xx = this._respCode1Xx;
    }
    if (this._respCode2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCode2Xx = this._respCode2Xx;
    }
    if (this._respCode3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCode3Xx = this._respCode3Xx;
    }
    if (this._respCode4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCode4Xx = this._respCode4Xx;
    }
    if (this._respCode5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCode5Xx = this._respCode5Xx;
    }
    if (this._respCodeOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCodeOther = this._respCodeOther;
    }
    if (this._respMibChunkBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.respMibChunkBad = this._respMibChunkBad;
    }
    if (this._retransmitExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitExcd = this._retransmitExcd;
    }
    if (this._rspChunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspChunk = this._rspChunk;
    }
    if (this._rstCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.rstCookieFail = this._rstCookieFail;
    }
    if (this._secondaryPortConnLimmExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortConnLimmExceed = this._secondaryPortConnLimmExceed;
    }
    if (this._secondaryPortConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortConnRateExceed = this._secondaryPortConnRateExceed;
    }
    if (this._secondaryPortHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortHit = this._secondaryPortHit;
    }
    if (this._secondaryPortKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortKbitRateExceed = this._secondaryPortKbitRateExceed;
    }
    if (this._secondaryPortKbitRateExceedPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortKbitRateExceedPkt = this._secondaryPortKbitRateExceedPkt;
    }
    if (this._secondaryPortPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortPktRateExceed = this._secondaryPortPktRateExceed;
    }
    if (this._sessAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessAged = this._sessAged;
    }
    if (this._sessCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreate = this._sessCreate;
    }
    if (this._sessCreateInbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreateInbound = this._sessCreateInbound;
    }
    if (this._sessCreateOutbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreateOutbound = this._sessCreateOutbound;
    }
    if (this._sflowExternalPacketsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowExternalPacketsSent = this._sflowExternalPacketsSent;
    }
    if (this._sflowExternalSamplesPacked !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowExternalSamplesPacked = this._sflowExternalSamplesPacked;
    }
    if (this._sflowInternalPacketsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowInternalPacketsSent = this._sflowInternalPacketsSent;
    }
    if (this._sflowInternalSamplesPacked !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowInternalSamplesPacked = this._sflowInternalSamplesPacked;
    }
    if (this._slowPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowPost = this._slowPost;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._srcAckAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckAuthFail = this._srcAckAuthFail;
    }
    if (this._srcAckRetryBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryBlacklist = this._srcAckRetryBlacklist;
    }
    if (this._srcAckRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryGapDrop = this._srcAckRetryGapDrop;
    }
    if (this._srcAckRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryInit = this._srcAckRetryInit;
    }
    if (this._srcAckRetryReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryReset = this._srcAckRetryReset;
    }
    if (this._srcAckRetryRtoFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryRtoFail = this._srcAckRetryRtoFail;
    }
    if (this._srcAckRetryRtoPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryRtoPass = this._srcAckRetryRtoPass;
    }
    if (this._srcAckRetryRtoProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryRtoProgress = this._srcAckRetryRtoProgress;
    }
    if (this._srcAckRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryTimeout = this._srcAckRetryTimeout;
    }
    if (this._srcAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAuthDrop = this._srcAuthDrop;
    }
    if (this._srcChallengeJsFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcChallengeJsFail = this._srcChallengeJsFail;
    }
    if (this._srcChallengeUdFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcChallengeUdFail = this._srcChallengeUdFail;
    }
    if (this._srcConnOfoRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnOfoRateExcd = this._srcConnOfoRateExcd;
    }
    if (this._srcConnPktRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnPktRateExcd = this._srcConnPktRateExcd;
    }
    if (this._srcConnRexmitRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnRexmitRateExcd = this._srcConnRexmitRateExcd;
    }
    if (this._srcConnZwindowRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnZwindowRateExcd = this._srcConnZwindowRateExcd;
    }
    if (this._srcCreateConnNonSynDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCreateConnNonSynDropped = this._srcCreateConnNonSynDropped;
    }
    if (this._srcDosPolicyViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDosPolicyViolation = this._srcDosPolicyViolation;
    }
    if (this._srcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDrop = this._srcDrop;
    }
    if (this._srcFilter1Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter1Match = this._srcFilter1Match;
    }
    if (this._srcFilter2Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter2Match = this._srcFilter2Match;
    }
    if (this._srcFilter3Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter3Match = this._srcFilter3Match;
    }
    if (this._srcFilter4Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter4Match = this._srcFilter4Match;
    }
    if (this._srcFilter5Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter5Match = this._srcFilter5Match;
    }
    if (this._srcFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionBlacklist = this._srcFilterActionBlacklist;
    }
    if (this._srcFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionDefaultPass = this._srcFilterActionDefaultPass;
    }
    if (this._srcFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionDrop = this._srcFilterActionDrop;
    }
    if (this._srcFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionWhitelist = this._srcFilterActionWhitelist;
    }
    if (this._srcFilterAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterAuthFail = this._srcFilterAuthFail;
    }
    if (this._srcFilterNoneMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterNoneMatch = this._srcFilterNoneMatch;
    }
    if (this._srcFilterTotalNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterTotalNotMatch = this._srcFilterTotalNotMatch;
    }
    if (this._srcFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFragDrop = this._srcFragDrop;
    }
    if (this._srcHeaderFilter10Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter10Drop = this._srcHeaderFilter10Drop;
    }
    if (this._srcHeaderFilter10Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter10Match = this._srcHeaderFilter10Match;
    }
    if (this._srcHeaderFilter1Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter1Drop = this._srcHeaderFilter1Drop;
    }
    if (this._srcHeaderFilter1Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter1Match = this._srcHeaderFilter1Match;
    }
    if (this._srcHeaderFilter2Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter2Drop = this._srcHeaderFilter2Drop;
    }
    if (this._srcHeaderFilter2Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter2Match = this._srcHeaderFilter2Match;
    }
    if (this._srcHeaderFilter3Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter3Drop = this._srcHeaderFilter3Drop;
    }
    if (this._srcHeaderFilter3Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter3Match = this._srcHeaderFilter3Match;
    }
    if (this._srcHeaderFilter4Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter4Drop = this._srcHeaderFilter4Drop;
    }
    if (this._srcHeaderFilter4Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter4Match = this._srcHeaderFilter4Match;
    }
    if (this._srcHeaderFilter5Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter5Drop = this._srcHeaderFilter5Drop;
    }
    if (this._srcHeaderFilter5Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter5Match = this._srcHeaderFilter5Match;
    }
    if (this._srcHeaderFilter6Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter6Drop = this._srcHeaderFilter6Drop;
    }
    if (this._srcHeaderFilter6Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter6Match = this._srcHeaderFilter6Match;
    }
    if (this._srcHeaderFilter7Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter7Drop = this._srcHeaderFilter7Drop;
    }
    if (this._srcHeaderFilter7Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter7Match = this._srcHeaderFilter7Match;
    }
    if (this._srcHeaderFilter8Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter8Drop = this._srcHeaderFilter8Drop;
    }
    if (this._srcHeaderFilter8Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter8Match = this._srcHeaderFilter8Match;
    }
    if (this._srcHeaderFilter9Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter9Drop = this._srcHeaderFilter9Drop;
    }
    if (this._srcHeaderFilter9Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilter9Match = this._srcHeaderFilter9Match;
    }
    if (this._srcHeaderFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterActionBlacklist = this._srcHeaderFilterActionBlacklist;
    }
    if (this._srcHeaderFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterActionDefaultPass = this._srcHeaderFilterActionDefaultPass;
    }
    if (this._srcHeaderFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterActionDrop = this._srcHeaderFilterActionDrop;
    }
    if (this._srcHeaderFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterActionWhitelist = this._srcHeaderFilterActionWhitelist;
    }
    if (this._srcHeaderFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterMatch = this._srcHeaderFilterMatch;
    }
    if (this._srcHeaderFilterNoneMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterNoneMatch = this._srcHeaderFilterNoneMatch;
    }
    if (this._srcHeaderFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterNotMatch = this._srcHeaderFilterNotMatch;
    }
    if (this._srcHttpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHttpAuthDrop = this._srcHttpAuthDrop;
    }
    if (this._srcHwDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHwDrop = this._srcHwDrop;
    }
    if (this._srcHwDropInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHwDropInserted = this._srcHwDropInserted;
    }
    if (this._srcHwDropRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHwDropRemoved = this._srcHwDropRemoved;
    }
    if (this._srcJsChallengeSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcJsChallengeSent = this._srcJsChallengeSent;
    }
    if (this._srcLearnOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcLearnOverflow = this._srcLearnOverflow;
    }
    if (this._srcOutOfSeqExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOutOfSeqExcd = this._srcOutOfSeqExcd;
    }
    if (this._srcPolicyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPolicyDrop = this._srcPolicyDrop;
    }
    if (this._srcPostRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPostRateExceed = this._srcPostRateExceed;
    }
    if (this._srcReqRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcReqRateExceed = this._srcReqRateExceed;
    }
    if (this._srcRetransmitExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRetransmitExcd = this._srcRetransmitExcd;
    }
    if (this._srcRstCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRstCookieFail = this._srcRstCookieFail;
    }
    if (this._srcSynAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynAuthFail = this._srcSynAuthFail;
    }
    if (this._srcSynCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynCookieFail = this._srcSynCookieFail;
    }
    if (this._srcSynCookieSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynCookieSent = this._srcSynCookieSent;
    }
    if (this._srcSynRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRateExceed = this._srcSynRateExceed;
    }
    if (this._srcSynRetryBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryBlacklist = this._srcSynRetryBlacklist;
    }
    if (this._srcSynRetryFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryFailed = this._srcSynRetryFailed;
    }
    if (this._srcSynRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryGapDrop = this._srcSynRetryGapDrop;
    }
    if (this._srcSynRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryInit = this._srcSynRetryInit;
    }
    if (this._srcSynRetryReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryReset = this._srcSynRetryReset;
    }
    if (this._srcSynRetryRtoFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryRtoFail = this._srcSynRetryRtoFail;
    }
    if (this._srcSynRetryRtoPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryRtoPass = this._srcSynRetryRtoPass;
    }
    if (this._srcSynRetryRtoProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryRtoProgress = this._srcSynRetryRtoProgress;
    }
    if (this._srcSynRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryTimeout = this._srcSynRetryTimeout;
    }
    if (this._srcTcpAuthRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpAuthRst = this._srcTcpAuthRst;
    }
    if (this._srcUdChallengeSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdChallengeSent = this._srcUdChallengeSent;
    }
    if (this._srcUnauthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUnauthDrop = this._srcUnauthDrop;
    }
    if (this._srcWellKnownPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcWellKnownPort = this._srcWellKnownPort;
    }
    if (this._srcZeroWindowExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZeroWindowExcd = this._srcZeroWindowExcd;
    }
    if (this._srcZoneServiceEntryAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceEntryAged = this._srcZoneServiceEntryAged;
    }
    if (this._srcZoneServiceEntryLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceEntryLearned = this._srcZoneServiceEntryLearned;
    }
    if (this._synAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthFail = this._synAuthFail;
    }
    if (this._synAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthPass = this._synAuthPass;
    }
    if (this._synAuthRstAckDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthRstAckDrop = this._synAuthRstAckDrop;
    }
    if (this._synCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieFail = this._synCookieFail;
    }
    if (this._synCookieSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieSent = this._synCookieSent;
    }
    if (this._synDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.synDrop = this._synDrop;
    }
    if (this._synRetryBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryBlacklist = this._synRetryBlacklist;
    }
    if (this._synRetryFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryFailed = this._synRetryFailed;
    }
    if (this._synRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryGapDrop = this._synRetryGapDrop;
    }
    if (this._synRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryInit = this._synRetryInit;
    }
    if (this._synRetryPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryPass = this._synRetryPass;
    }
    if (this._synRetryReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryReset = this._synRetryReset;
    }
    if (this._synRetryRtoFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryRtoFail = this._synRetryRtoFail;
    }
    if (this._synRetryRtoPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryRtoPass = this._synRetryRtoPass;
    }
    if (this._synRetryRtoProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryRtoProgress = this._synRetryRtoProgress;
    }
    if (this._synRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryTimeout = this._synRetryTimeout;
    }
    if (this._synTfoRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.synTfoRcv = this._synTfoRcv;
    }
    if (this._synackMultipleAttemptsPerIpDetected !== undefined) {
      hasAnyValues = true;
      internalValueResult.synackMultipleAttemptsPerIpDetected = this._synackMultipleAttemptsPerIpDetected;
    }
    if (this._synackResetSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.synackResetSent = this._synackResetSent;
    }
    if (this._tcpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthDrop = this._tcpAuthDrop;
    }
    if (this._tcpAuthResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthResp = this._tcpAuthResp;
    }
    if (this._tcpAuthRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthRst = this._tcpAuthRst;
    }
    if (this._tcpFilter1Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilter1Match = this._tcpFilter1Match;
    }
    if (this._tcpFilter2Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilter2Match = this._tcpFilter2Match;
    }
    if (this._tcpFilter3Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilter3Match = this._tcpFilter3Match;
    }
    if (this._tcpFilter4Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilter4Match = this._tcpFilter4Match;
    }
    if (this._tcpFilter5Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilter5Match = this._tcpFilter5Match;
    }
    if (this._tcpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterActionBlacklist = this._tcpFilterActionBlacklist;
    }
    if (this._tcpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterActionDefaultPass = this._tcpFilterActionDefaultPass;
    }
    if (this._tcpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterActionDrop = this._tcpFilterActionDrop;
    }
    if (this._tcpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterActionWhitelist = this._tcpFilterActionWhitelist;
    }
    if (this._tcpFilterNoneMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterNoneMatch = this._tcpFilterNoneMatch;
    }
    if (this._tcpFilterTotalNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterTotalNotMatch = this._tcpFilterTotalNotMatch;
    }
    if (this._tcpRexmitSynLimitBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynLimitBl = this._tcpRexmitSynLimitBl;
    }
    if (this._tcpRexmitSynLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynLimitDrop = this._tcpRexmitSynLimitDrop;
    }
    if (this._tooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeaders = this._tooManyHeaders;
    }
    if (this._udChallengeFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udChallengeFailed = this._udChallengeFailed;
    }
    if (this._udChallengeSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.udChallengeSent = this._udChallengeSent;
    }
    if (this._unauthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthDrop = this._unauthDrop;
    }
    if (this._unauthSrcSessionReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthSrcSessionReset = this._unauthSrcSessionReset;
    }
    if (this._uriFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriFilterMatch = this._uriFilterMatch;
    }
    if (this._useHdrSrcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHdrSrcIp = this._useHdrSrcIp;
    }
    if (this._userAgentFilterBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentFilterBlacklist = this._userAgentFilterBlacklist;
    }
    if (this._userAgentFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentFilterMatch = this._userAgentFilterMatch;
    }
    if (this._wellknownSportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellknownSportDrop = this._wellknownSportDrop;
    }
    if (this._windowSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSmall = this._windowSmall;
    }
    if (this._windowSmallDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSmallDrop = this._windowSmallDrop;
    }
    if (this._zeroWindowExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWindowExcd = this._zeroWindowExcd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosHttpZonePortStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ackAuthFail = undefined;
      this._ackRetryBlacklist = undefined;
      this._ackRetryGapDrop = undefined;
      this._ackRetryInit = undefined;
      this._ackRetryPass = undefined;
      this._ackRetryReset = undefined;
      this._ackRetryRtoFail = undefined;
      this._ackRetryRtoPass = undefined;
      this._ackRetryRtoProgress = undefined;
      this._ackRetryTimeout = undefined;
      this._addrFilterBl = undefined;
      this._addrFilterDrop = undefined;
      this._bl = undefined;
      this._challengeFailed = undefined;
      this._chunkBad = undefined;
      this._chunkSz1K = undefined;
      this._chunkSz2K = undefined;
      this._chunkSz4K = undefined;
      this._chunkSz512 = undefined;
      this._chunkSzGt4K = undefined;
      this._clientRst = undefined;
      this._connClose = undefined;
      this._connCloseHalfOpen = undefined;
      this._connCloseWFin = undefined;
      this._connCloseWIdle = undefined;
      this._connCloseWRst = undefined;
      this._connCreateFromAck = undefined;
      this._connCreateFromSyn = undefined;
      this._connCreateFromSynack = undefined;
      this._connOfoRateExcd = undefined;
      this._connPrateExcd = undefined;
      this._connRexmitRateExcd = undefined;
      this._connZwindowRateExcd = undefined;
      this._contentLengthTooLong = undefined;
      this._createConnNonSynDropped = undefined;
      this._currentEsLevel = undefined;
      this._dstHwDrop = undefined;
      this._dstHwDropInserted = undefined;
      this._dstHwDropRemoved = undefined;
      this._dstPostRateExceed = undefined;
      this._dstReqRateExceed = undefined;
      this._dstRespRateExceed = undefined;
      this._erCondition = undefined;
      this._ewInboundPortByteDrop = undefined;
      this._ewInboundPortByteRcv = undefined;
      this._ewInboundPortByteSent = undefined;
      this._ewInboundPortDrop = undefined;
      this._ewInboundPortRcv = undefined;
      this._ewInboundPortSent = undefined;
      this._ewOutboundPortByteDrop = undefined;
      this._ewOutboundPortByteRcv = undefined;
      this._ewOutboundPortByteSent = undefined;
      this._ewOutboundPortDrop = undefined;
      this._ewOutboundPortRcv = undefined;
      this._ewOutboundPortSent = undefined;
      this._exceedActionDrop = undefined;
      this._exceedActionTunnel = undefined;
      this._exceedDropBrateSrc = undefined;
      this._exceedDropBrateSrcPkt = undefined;
      this._exceedDropClimitSrc = undefined;
      this._exceedDropCrateSrc = undefined;
      this._exceedDropPrateSrc = undefined;
      this._failAlloc = undefined;
      this._failAllocHdr = undefined;
      this._failGetLine = undefined;
      this._filter10Drop = undefined;
      this._filter10Match = undefined;
      this._filter1Drop = undefined;
      this._filter1Match = undefined;
      this._filter2Drop = undefined;
      this._filter2Match = undefined;
      this._filter3Drop = undefined;
      this._filter3Match = undefined;
      this._filter4Drop = undefined;
      this._filter4Match = undefined;
      this._filter5Drop = undefined;
      this._filter5Match = undefined;
      this._filter6Drop = undefined;
      this._filter6Match = undefined;
      this._filter7Drop = undefined;
      this._filter7Match = undefined;
      this._filter8Drop = undefined;
      this._filter8Match = undefined;
      this._filter9Drop = undefined;
      this._filter9Match = undefined;
      this._filterActionBlacklist = undefined;
      this._filterActionDefaultPass = undefined;
      this._filterActionDrop = undefined;
      this._filterActionWhitelist = undefined;
      this._filterAuthFail = undefined;
      this._filterMatch = undefined;
      this._filterNoneMatch = undefined;
      this._filterNotMatch = undefined;
      this._fragDrop = undefined;
      this._fragRcvd = undefined;
      this._fragTimeout = undefined;
      this._headerNameTooLong = undefined;
      this._headerProcessingIncomplete = undefined;
      this._headerProcessingTime0 = undefined;
      this._headerProcessingTime1 = undefined;
      this._headerProcessingTime2 = undefined;
      this._headerProcessingTime3 = undefined;
      this._httpAuthDrop = undefined;
      this._httpAuthResp = undefined;
      this._idleTimeout = undefined;
      this._invalidHdrName = undefined;
      this._invalidHdrVal = undefined;
      this._invalidHeader = undefined;
      this._jsChallengeFailed = undefined;
      this._jsChallengeSent = undefined;
      this._lessThanMssExceed = undefined;
      this._lineTooLong = undefined;
      this._negativeReqRemain = undefined;
      this._negativeRespRemain = undefined;
      this._newSyn = undefined;
      this._noPolicyClassListMatch = undefined;
      this._noRouteDrop = undefined;
      this._ofoQueueSzExceed = undefined;
      this._ofoTimerExpired = undefined;
      this._outOfSeqExcd = undefined;
      this._outboundPortBytes = undefined;
      this._outboundPortBytesDrop = undefined;
      this._outboundPortBytesSent = undefined;
      this._outboundPortDrop = undefined;
      this._outboundPortPktSent = undefined;
      this._outboundPortRcvd = undefined;
      this._parseBadChunk = undefined;
      this._parseHeaderNameTooLong = undefined;
      this._parseLineTooLong = undefined;
      this._parseReqLineInvalidMethod = undefined;
      this._parseReqLineTooLong = undefined;
      this._parseReqLineTooSmall = undefined;
      this._parseTooManyHeaders = undefined;
      this._parsereqFail = undefined;
      this._partialHeader = undefined;
      this._patternFilter1Match = undefined;
      this._patternFilter2Match = undefined;
      this._patternFilter3Match = undefined;
      this._patternFilter4Match = undefined;
      this._patternFilter5Match = undefined;
      this._patternFilterDrop = undefined;
      this._patternNotFound = undefined;
      this._patternRecognitionGenericError = undefined;
      this._patternRecognitionPatternChanged = undefined;
      this._patternRecognitionProceeded = undefined;
      this._patternRecognitionSamplingStarted = undefined;
      this._pktsConnectPassthru = undefined;
      this._pktsOfo = undefined;
      this._pktsRetrans = undefined;
      this._pktsRetransFin = undefined;
      this._pktsRetransPush = undefined;
      this._pktsRetransRst = undefined;
      this._policyDrop = undefined;
      this._policyViolation = undefined;
      this._portBytes = undefined;
      this._portBytesDrop = undefined;
      this._portBytesSent = undefined;
      this._portConnLimmExceed = undefined;
      this._portConnRateExceed = undefined;
      this._portDrop = undefined;
      this._portKbitRateExceed = undefined;
      this._portKbitRateExceedPkt = undefined;
      this._portPktRateExceed = undefined;
      this._portPktSent = undefined;
      this._portRcvd = undefined;
      this._portSrcBl = undefined;
      this._portSrcEscalation = undefined;
      this._portSynRateExceed = undefined;
      this._portSynackRateExceed = undefined;
      this._processed = undefined;
      this._progConnExceedBl = undefined;
      this._progConnExceedDrop = undefined;
      this._progConnExceedReset = undefined;
      this._progConnRcvdExceed = undefined;
      this._progConnRcvdSentRatioExceed = undefined;
      this._progConnSamples = undefined;
      this._progConnSamplesProcessed = undefined;
      this._progConnSentExceed = undefined;
      this._progConnTimeExceed = undefined;
      this._progExceedBl = undefined;
      this._progExceedDrop = undefined;
      this._progExceedReset = undefined;
      this._progFirstReqTimeExceed = undefined;
      this._progReqRespTimeExceed = undefined;
      this._progReqSamples = undefined;
      this._progReqSamplesProcessed = undefined;
      this._progRequestLenExceed = undefined;
      this._progRespReqRatioExceed = undefined;
      this._progRespReqTimeExceed = undefined;
      this._progResponseLenExceed = undefined;
      this._progWinExceedBl = undefined;
      this._progWinExceedDrop = undefined;
      this._progWinExceedReset = undefined;
      this._progWinRcvdExceed = undefined;
      this._progWinRcvdSentRatioExceed = undefined;
      this._progWinSamples = undefined;
      this._progWinSamplesProcessed = undefined;
      this._progWinSentExceed = undefined;
      this._refererFilterBlacklist = undefined;
      this._refererFilterMatch = undefined;
      this._req = undefined;
      this._reqConnect = undefined;
      this._reqContentLen = undefined;
      this._reqDelete = undefined;
      this._reqGet = undefined;
      this._reqHead = undefined;
      this._reqHttp10 = undefined;
      this._reqHttp11 = undefined;
      this._reqOfo = undefined;
      this._reqOptions = undefined;
      this._reqPost = undefined;
      this._reqPut = undefined;
      this._reqRetran = undefined;
      this._reqSz16K = undefined;
      this._reqSz1K = undefined;
      this._reqSz256K = undefined;
      this._reqSz2K = undefined;
      this._reqSz32K = undefined;
      this._reqSz4K = undefined;
      this._reqSz64K = undefined;
      this._reqSz8K = undefined;
      this._reqSzGt256K = undefined;
      this._reqTrace = undefined;
      this._reqUnknown = undefined;
      this._respCode1Xx = undefined;
      this._respCode2Xx = undefined;
      this._respCode3Xx = undefined;
      this._respCode4Xx = undefined;
      this._respCode5Xx = undefined;
      this._respCodeOther = undefined;
      this._respMibChunkBad = undefined;
      this._retransmitExcd = undefined;
      this._rspChunk = undefined;
      this._rstCookieFail = undefined;
      this._secondaryPortConnLimmExceed = undefined;
      this._secondaryPortConnRateExceed = undefined;
      this._secondaryPortHit = undefined;
      this._secondaryPortKbitRateExceed = undefined;
      this._secondaryPortKbitRateExceedPkt = undefined;
      this._secondaryPortPktRateExceed = undefined;
      this._sessAged = undefined;
      this._sessCreate = undefined;
      this._sessCreateInbound = undefined;
      this._sessCreateOutbound = undefined;
      this._sflowExternalPacketsSent = undefined;
      this._sflowExternalSamplesPacked = undefined;
      this._sflowInternalPacketsSent = undefined;
      this._sflowInternalSamplesPacked = undefined;
      this._slowPost = undefined;
      this._snatFail = undefined;
      this._srcAckAuthFail = undefined;
      this._srcAckRetryBlacklist = undefined;
      this._srcAckRetryGapDrop = undefined;
      this._srcAckRetryInit = undefined;
      this._srcAckRetryReset = undefined;
      this._srcAckRetryRtoFail = undefined;
      this._srcAckRetryRtoPass = undefined;
      this._srcAckRetryRtoProgress = undefined;
      this._srcAckRetryTimeout = undefined;
      this._srcAuthDrop = undefined;
      this._srcChallengeJsFail = undefined;
      this._srcChallengeUdFail = undefined;
      this._srcConnOfoRateExcd = undefined;
      this._srcConnPktRateExcd = undefined;
      this._srcConnRexmitRateExcd = undefined;
      this._srcConnZwindowRateExcd = undefined;
      this._srcCreateConnNonSynDropped = undefined;
      this._srcDosPolicyViolation = undefined;
      this._srcDrop = undefined;
      this._srcFilter1Match = undefined;
      this._srcFilter2Match = undefined;
      this._srcFilter3Match = undefined;
      this._srcFilter4Match = undefined;
      this._srcFilter5Match = undefined;
      this._srcFilterActionBlacklist = undefined;
      this._srcFilterActionDefaultPass = undefined;
      this._srcFilterActionDrop = undefined;
      this._srcFilterActionWhitelist = undefined;
      this._srcFilterAuthFail = undefined;
      this._srcFilterNoneMatch = undefined;
      this._srcFilterTotalNotMatch = undefined;
      this._srcFragDrop = undefined;
      this._srcHeaderFilter10Drop = undefined;
      this._srcHeaderFilter10Match = undefined;
      this._srcHeaderFilter1Drop = undefined;
      this._srcHeaderFilter1Match = undefined;
      this._srcHeaderFilter2Drop = undefined;
      this._srcHeaderFilter2Match = undefined;
      this._srcHeaderFilter3Drop = undefined;
      this._srcHeaderFilter3Match = undefined;
      this._srcHeaderFilter4Drop = undefined;
      this._srcHeaderFilter4Match = undefined;
      this._srcHeaderFilter5Drop = undefined;
      this._srcHeaderFilter5Match = undefined;
      this._srcHeaderFilter6Drop = undefined;
      this._srcHeaderFilter6Match = undefined;
      this._srcHeaderFilter7Drop = undefined;
      this._srcHeaderFilter7Match = undefined;
      this._srcHeaderFilter8Drop = undefined;
      this._srcHeaderFilter8Match = undefined;
      this._srcHeaderFilter9Drop = undefined;
      this._srcHeaderFilter9Match = undefined;
      this._srcHeaderFilterActionBlacklist = undefined;
      this._srcHeaderFilterActionDefaultPass = undefined;
      this._srcHeaderFilterActionDrop = undefined;
      this._srcHeaderFilterActionWhitelist = undefined;
      this._srcHeaderFilterMatch = undefined;
      this._srcHeaderFilterNoneMatch = undefined;
      this._srcHeaderFilterNotMatch = undefined;
      this._srcHttpAuthDrop = undefined;
      this._srcHwDrop = undefined;
      this._srcHwDropInserted = undefined;
      this._srcHwDropRemoved = undefined;
      this._srcJsChallengeSent = undefined;
      this._srcLearnOverflow = undefined;
      this._srcOutOfSeqExcd = undefined;
      this._srcPolicyDrop = undefined;
      this._srcPostRateExceed = undefined;
      this._srcReqRateExceed = undefined;
      this._srcRetransmitExcd = undefined;
      this._srcRstCookieFail = undefined;
      this._srcSynAuthFail = undefined;
      this._srcSynCookieFail = undefined;
      this._srcSynCookieSent = undefined;
      this._srcSynRateExceed = undefined;
      this._srcSynRetryBlacklist = undefined;
      this._srcSynRetryFailed = undefined;
      this._srcSynRetryGapDrop = undefined;
      this._srcSynRetryInit = undefined;
      this._srcSynRetryReset = undefined;
      this._srcSynRetryRtoFail = undefined;
      this._srcSynRetryRtoPass = undefined;
      this._srcSynRetryRtoProgress = undefined;
      this._srcSynRetryTimeout = undefined;
      this._srcTcpAuthRst = undefined;
      this._srcUdChallengeSent = undefined;
      this._srcUnauthDrop = undefined;
      this._srcWellKnownPort = undefined;
      this._srcZeroWindowExcd = undefined;
      this._srcZoneServiceEntryAged = undefined;
      this._srcZoneServiceEntryLearned = undefined;
      this._synAuthFail = undefined;
      this._synAuthPass = undefined;
      this._synAuthRstAckDrop = undefined;
      this._synCookieFail = undefined;
      this._synCookieSent = undefined;
      this._synDrop = undefined;
      this._synRetryBlacklist = undefined;
      this._synRetryFailed = undefined;
      this._synRetryGapDrop = undefined;
      this._synRetryInit = undefined;
      this._synRetryPass = undefined;
      this._synRetryReset = undefined;
      this._synRetryRtoFail = undefined;
      this._synRetryRtoPass = undefined;
      this._synRetryRtoProgress = undefined;
      this._synRetryTimeout = undefined;
      this._synTfoRcv = undefined;
      this._synackMultipleAttemptsPerIpDetected = undefined;
      this._synackResetSent = undefined;
      this._tcpAuthDrop = undefined;
      this._tcpAuthResp = undefined;
      this._tcpAuthRst = undefined;
      this._tcpFilter1Match = undefined;
      this._tcpFilter2Match = undefined;
      this._tcpFilter3Match = undefined;
      this._tcpFilter4Match = undefined;
      this._tcpFilter5Match = undefined;
      this._tcpFilterActionBlacklist = undefined;
      this._tcpFilterActionDefaultPass = undefined;
      this._tcpFilterActionDrop = undefined;
      this._tcpFilterActionWhitelist = undefined;
      this._tcpFilterNoneMatch = undefined;
      this._tcpFilterTotalNotMatch = undefined;
      this._tcpRexmitSynLimitBl = undefined;
      this._tcpRexmitSynLimitDrop = undefined;
      this._tooManyHeaders = undefined;
      this._udChallengeFailed = undefined;
      this._udChallengeSent = undefined;
      this._unauthDrop = undefined;
      this._unauthSrcSessionReset = undefined;
      this._uriFilterMatch = undefined;
      this._useHdrSrcIp = undefined;
      this._userAgentFilterBlacklist = undefined;
      this._userAgentFilterMatch = undefined;
      this._wellknownSportDrop = undefined;
      this._windowSmall = undefined;
      this._windowSmallDrop = undefined;
      this._zeroWindowExcd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ackAuthFail = value.ackAuthFail;
      this._ackRetryBlacklist = value.ackRetryBlacklist;
      this._ackRetryGapDrop = value.ackRetryGapDrop;
      this._ackRetryInit = value.ackRetryInit;
      this._ackRetryPass = value.ackRetryPass;
      this._ackRetryReset = value.ackRetryReset;
      this._ackRetryRtoFail = value.ackRetryRtoFail;
      this._ackRetryRtoPass = value.ackRetryRtoPass;
      this._ackRetryRtoProgress = value.ackRetryRtoProgress;
      this._ackRetryTimeout = value.ackRetryTimeout;
      this._addrFilterBl = value.addrFilterBl;
      this._addrFilterDrop = value.addrFilterDrop;
      this._bl = value.bl;
      this._challengeFailed = value.challengeFailed;
      this._chunkBad = value.chunkBad;
      this._chunkSz1K = value.chunkSz1K;
      this._chunkSz2K = value.chunkSz2K;
      this._chunkSz4K = value.chunkSz4K;
      this._chunkSz512 = value.chunkSz512;
      this._chunkSzGt4K = value.chunkSzGt4K;
      this._clientRst = value.clientRst;
      this._connClose = value.connClose;
      this._connCloseHalfOpen = value.connCloseHalfOpen;
      this._connCloseWFin = value.connCloseWFin;
      this._connCloseWIdle = value.connCloseWIdle;
      this._connCloseWRst = value.connCloseWRst;
      this._connCreateFromAck = value.connCreateFromAck;
      this._connCreateFromSyn = value.connCreateFromSyn;
      this._connCreateFromSynack = value.connCreateFromSynack;
      this._connOfoRateExcd = value.connOfoRateExcd;
      this._connPrateExcd = value.connPrateExcd;
      this._connRexmitRateExcd = value.connRexmitRateExcd;
      this._connZwindowRateExcd = value.connZwindowRateExcd;
      this._contentLengthTooLong = value.contentLengthTooLong;
      this._createConnNonSynDropped = value.createConnNonSynDropped;
      this._currentEsLevel = value.currentEsLevel;
      this._dstHwDrop = value.dstHwDrop;
      this._dstHwDropInserted = value.dstHwDropInserted;
      this._dstHwDropRemoved = value.dstHwDropRemoved;
      this._dstPostRateExceed = value.dstPostRateExceed;
      this._dstReqRateExceed = value.dstReqRateExceed;
      this._dstRespRateExceed = value.dstRespRateExceed;
      this._erCondition = value.erCondition;
      this._ewInboundPortByteDrop = value.ewInboundPortByteDrop;
      this._ewInboundPortByteRcv = value.ewInboundPortByteRcv;
      this._ewInboundPortByteSent = value.ewInboundPortByteSent;
      this._ewInboundPortDrop = value.ewInboundPortDrop;
      this._ewInboundPortRcv = value.ewInboundPortRcv;
      this._ewInboundPortSent = value.ewInboundPortSent;
      this._ewOutboundPortByteDrop = value.ewOutboundPortByteDrop;
      this._ewOutboundPortByteRcv = value.ewOutboundPortByteRcv;
      this._ewOutboundPortByteSent = value.ewOutboundPortByteSent;
      this._ewOutboundPortDrop = value.ewOutboundPortDrop;
      this._ewOutboundPortRcv = value.ewOutboundPortRcv;
      this._ewOutboundPortSent = value.ewOutboundPortSent;
      this._exceedActionDrop = value.exceedActionDrop;
      this._exceedActionTunnel = value.exceedActionTunnel;
      this._exceedDropBrateSrc = value.exceedDropBrateSrc;
      this._exceedDropBrateSrcPkt = value.exceedDropBrateSrcPkt;
      this._exceedDropClimitSrc = value.exceedDropClimitSrc;
      this._exceedDropCrateSrc = value.exceedDropCrateSrc;
      this._exceedDropPrateSrc = value.exceedDropPrateSrc;
      this._failAlloc = value.failAlloc;
      this._failAllocHdr = value.failAllocHdr;
      this._failGetLine = value.failGetLine;
      this._filter10Drop = value.filter10Drop;
      this._filter10Match = value.filter10Match;
      this._filter1Drop = value.filter1Drop;
      this._filter1Match = value.filter1Match;
      this._filter2Drop = value.filter2Drop;
      this._filter2Match = value.filter2Match;
      this._filter3Drop = value.filter3Drop;
      this._filter3Match = value.filter3Match;
      this._filter4Drop = value.filter4Drop;
      this._filter4Match = value.filter4Match;
      this._filter5Drop = value.filter5Drop;
      this._filter5Match = value.filter5Match;
      this._filter6Drop = value.filter6Drop;
      this._filter6Match = value.filter6Match;
      this._filter7Drop = value.filter7Drop;
      this._filter7Match = value.filter7Match;
      this._filter8Drop = value.filter8Drop;
      this._filter8Match = value.filter8Match;
      this._filter9Drop = value.filter9Drop;
      this._filter9Match = value.filter9Match;
      this._filterActionBlacklist = value.filterActionBlacklist;
      this._filterActionDefaultPass = value.filterActionDefaultPass;
      this._filterActionDrop = value.filterActionDrop;
      this._filterActionWhitelist = value.filterActionWhitelist;
      this._filterAuthFail = value.filterAuthFail;
      this._filterMatch = value.filterMatch;
      this._filterNoneMatch = value.filterNoneMatch;
      this._filterNotMatch = value.filterNotMatch;
      this._fragDrop = value.fragDrop;
      this._fragRcvd = value.fragRcvd;
      this._fragTimeout = value.fragTimeout;
      this._headerNameTooLong = value.headerNameTooLong;
      this._headerProcessingIncomplete = value.headerProcessingIncomplete;
      this._headerProcessingTime0 = value.headerProcessingTime0;
      this._headerProcessingTime1 = value.headerProcessingTime1;
      this._headerProcessingTime2 = value.headerProcessingTime2;
      this._headerProcessingTime3 = value.headerProcessingTime3;
      this._httpAuthDrop = value.httpAuthDrop;
      this._httpAuthResp = value.httpAuthResp;
      this._idleTimeout = value.idleTimeout;
      this._invalidHdrName = value.invalidHdrName;
      this._invalidHdrVal = value.invalidHdrVal;
      this._invalidHeader = value.invalidHeader;
      this._jsChallengeFailed = value.jsChallengeFailed;
      this._jsChallengeSent = value.jsChallengeSent;
      this._lessThanMssExceed = value.lessThanMssExceed;
      this._lineTooLong = value.lineTooLong;
      this._negativeReqRemain = value.negativeReqRemain;
      this._negativeRespRemain = value.negativeRespRemain;
      this._newSyn = value.newSyn;
      this._noPolicyClassListMatch = value.noPolicyClassListMatch;
      this._noRouteDrop = value.noRouteDrop;
      this._ofoQueueSzExceed = value.ofoQueueSzExceed;
      this._ofoTimerExpired = value.ofoTimerExpired;
      this._outOfSeqExcd = value.outOfSeqExcd;
      this._outboundPortBytes = value.outboundPortBytes;
      this._outboundPortBytesDrop = value.outboundPortBytesDrop;
      this._outboundPortBytesSent = value.outboundPortBytesSent;
      this._outboundPortDrop = value.outboundPortDrop;
      this._outboundPortPktSent = value.outboundPortPktSent;
      this._outboundPortRcvd = value.outboundPortRcvd;
      this._parseBadChunk = value.parseBadChunk;
      this._parseHeaderNameTooLong = value.parseHeaderNameTooLong;
      this._parseLineTooLong = value.parseLineTooLong;
      this._parseReqLineInvalidMethod = value.parseReqLineInvalidMethod;
      this._parseReqLineTooLong = value.parseReqLineTooLong;
      this._parseReqLineTooSmall = value.parseReqLineTooSmall;
      this._parseTooManyHeaders = value.parseTooManyHeaders;
      this._parsereqFail = value.parsereqFail;
      this._partialHeader = value.partialHeader;
      this._patternFilter1Match = value.patternFilter1Match;
      this._patternFilter2Match = value.patternFilter2Match;
      this._patternFilter3Match = value.patternFilter3Match;
      this._patternFilter4Match = value.patternFilter4Match;
      this._patternFilter5Match = value.patternFilter5Match;
      this._patternFilterDrop = value.patternFilterDrop;
      this._patternNotFound = value.patternNotFound;
      this._patternRecognitionGenericError = value.patternRecognitionGenericError;
      this._patternRecognitionPatternChanged = value.patternRecognitionPatternChanged;
      this._patternRecognitionProceeded = value.patternRecognitionProceeded;
      this._patternRecognitionSamplingStarted = value.patternRecognitionSamplingStarted;
      this._pktsConnectPassthru = value.pktsConnectPassthru;
      this._pktsOfo = value.pktsOfo;
      this._pktsRetrans = value.pktsRetrans;
      this._pktsRetransFin = value.pktsRetransFin;
      this._pktsRetransPush = value.pktsRetransPush;
      this._pktsRetransRst = value.pktsRetransRst;
      this._policyDrop = value.policyDrop;
      this._policyViolation = value.policyViolation;
      this._portBytes = value.portBytes;
      this._portBytesDrop = value.portBytesDrop;
      this._portBytesSent = value.portBytesSent;
      this._portConnLimmExceed = value.portConnLimmExceed;
      this._portConnRateExceed = value.portConnRateExceed;
      this._portDrop = value.portDrop;
      this._portKbitRateExceed = value.portKbitRateExceed;
      this._portKbitRateExceedPkt = value.portKbitRateExceedPkt;
      this._portPktRateExceed = value.portPktRateExceed;
      this._portPktSent = value.portPktSent;
      this._portRcvd = value.portRcvd;
      this._portSrcBl = value.portSrcBl;
      this._portSrcEscalation = value.portSrcEscalation;
      this._portSynRateExceed = value.portSynRateExceed;
      this._portSynackRateExceed = value.portSynackRateExceed;
      this._processed = value.processed;
      this._progConnExceedBl = value.progConnExceedBl;
      this._progConnExceedDrop = value.progConnExceedDrop;
      this._progConnExceedReset = value.progConnExceedReset;
      this._progConnRcvdExceed = value.progConnRcvdExceed;
      this._progConnRcvdSentRatioExceed = value.progConnRcvdSentRatioExceed;
      this._progConnSamples = value.progConnSamples;
      this._progConnSamplesProcessed = value.progConnSamplesProcessed;
      this._progConnSentExceed = value.progConnSentExceed;
      this._progConnTimeExceed = value.progConnTimeExceed;
      this._progExceedBl = value.progExceedBl;
      this._progExceedDrop = value.progExceedDrop;
      this._progExceedReset = value.progExceedReset;
      this._progFirstReqTimeExceed = value.progFirstReqTimeExceed;
      this._progReqRespTimeExceed = value.progReqRespTimeExceed;
      this._progReqSamples = value.progReqSamples;
      this._progReqSamplesProcessed = value.progReqSamplesProcessed;
      this._progRequestLenExceed = value.progRequestLenExceed;
      this._progRespReqRatioExceed = value.progRespReqRatioExceed;
      this._progRespReqTimeExceed = value.progRespReqTimeExceed;
      this._progResponseLenExceed = value.progResponseLenExceed;
      this._progWinExceedBl = value.progWinExceedBl;
      this._progWinExceedDrop = value.progWinExceedDrop;
      this._progWinExceedReset = value.progWinExceedReset;
      this._progWinRcvdExceed = value.progWinRcvdExceed;
      this._progWinRcvdSentRatioExceed = value.progWinRcvdSentRatioExceed;
      this._progWinSamples = value.progWinSamples;
      this._progWinSamplesProcessed = value.progWinSamplesProcessed;
      this._progWinSentExceed = value.progWinSentExceed;
      this._refererFilterBlacklist = value.refererFilterBlacklist;
      this._refererFilterMatch = value.refererFilterMatch;
      this._req = value.req;
      this._reqConnect = value.reqConnect;
      this._reqContentLen = value.reqContentLen;
      this._reqDelete = value.reqDelete;
      this._reqGet = value.reqGet;
      this._reqHead = value.reqHead;
      this._reqHttp10 = value.reqHttp10;
      this._reqHttp11 = value.reqHttp11;
      this._reqOfo = value.reqOfo;
      this._reqOptions = value.reqOptions;
      this._reqPost = value.reqPost;
      this._reqPut = value.reqPut;
      this._reqRetran = value.reqRetran;
      this._reqSz16K = value.reqSz16K;
      this._reqSz1K = value.reqSz1K;
      this._reqSz256K = value.reqSz256K;
      this._reqSz2K = value.reqSz2K;
      this._reqSz32K = value.reqSz32K;
      this._reqSz4K = value.reqSz4K;
      this._reqSz64K = value.reqSz64K;
      this._reqSz8K = value.reqSz8K;
      this._reqSzGt256K = value.reqSzGt256K;
      this._reqTrace = value.reqTrace;
      this._reqUnknown = value.reqUnknown;
      this._respCode1Xx = value.respCode1Xx;
      this._respCode2Xx = value.respCode2Xx;
      this._respCode3Xx = value.respCode3Xx;
      this._respCode4Xx = value.respCode4Xx;
      this._respCode5Xx = value.respCode5Xx;
      this._respCodeOther = value.respCodeOther;
      this._respMibChunkBad = value.respMibChunkBad;
      this._retransmitExcd = value.retransmitExcd;
      this._rspChunk = value.rspChunk;
      this._rstCookieFail = value.rstCookieFail;
      this._secondaryPortConnLimmExceed = value.secondaryPortConnLimmExceed;
      this._secondaryPortConnRateExceed = value.secondaryPortConnRateExceed;
      this._secondaryPortHit = value.secondaryPortHit;
      this._secondaryPortKbitRateExceed = value.secondaryPortKbitRateExceed;
      this._secondaryPortKbitRateExceedPkt = value.secondaryPortKbitRateExceedPkt;
      this._secondaryPortPktRateExceed = value.secondaryPortPktRateExceed;
      this._sessAged = value.sessAged;
      this._sessCreate = value.sessCreate;
      this._sessCreateInbound = value.sessCreateInbound;
      this._sessCreateOutbound = value.sessCreateOutbound;
      this._sflowExternalPacketsSent = value.sflowExternalPacketsSent;
      this._sflowExternalSamplesPacked = value.sflowExternalSamplesPacked;
      this._sflowInternalPacketsSent = value.sflowInternalPacketsSent;
      this._sflowInternalSamplesPacked = value.sflowInternalSamplesPacked;
      this._slowPost = value.slowPost;
      this._snatFail = value.snatFail;
      this._srcAckAuthFail = value.srcAckAuthFail;
      this._srcAckRetryBlacklist = value.srcAckRetryBlacklist;
      this._srcAckRetryGapDrop = value.srcAckRetryGapDrop;
      this._srcAckRetryInit = value.srcAckRetryInit;
      this._srcAckRetryReset = value.srcAckRetryReset;
      this._srcAckRetryRtoFail = value.srcAckRetryRtoFail;
      this._srcAckRetryRtoPass = value.srcAckRetryRtoPass;
      this._srcAckRetryRtoProgress = value.srcAckRetryRtoProgress;
      this._srcAckRetryTimeout = value.srcAckRetryTimeout;
      this._srcAuthDrop = value.srcAuthDrop;
      this._srcChallengeJsFail = value.srcChallengeJsFail;
      this._srcChallengeUdFail = value.srcChallengeUdFail;
      this._srcConnOfoRateExcd = value.srcConnOfoRateExcd;
      this._srcConnPktRateExcd = value.srcConnPktRateExcd;
      this._srcConnRexmitRateExcd = value.srcConnRexmitRateExcd;
      this._srcConnZwindowRateExcd = value.srcConnZwindowRateExcd;
      this._srcCreateConnNonSynDropped = value.srcCreateConnNonSynDropped;
      this._srcDosPolicyViolation = value.srcDosPolicyViolation;
      this._srcDrop = value.srcDrop;
      this._srcFilter1Match = value.srcFilter1Match;
      this._srcFilter2Match = value.srcFilter2Match;
      this._srcFilter3Match = value.srcFilter3Match;
      this._srcFilter4Match = value.srcFilter4Match;
      this._srcFilter5Match = value.srcFilter5Match;
      this._srcFilterActionBlacklist = value.srcFilterActionBlacklist;
      this._srcFilterActionDefaultPass = value.srcFilterActionDefaultPass;
      this._srcFilterActionDrop = value.srcFilterActionDrop;
      this._srcFilterActionWhitelist = value.srcFilterActionWhitelist;
      this._srcFilterAuthFail = value.srcFilterAuthFail;
      this._srcFilterNoneMatch = value.srcFilterNoneMatch;
      this._srcFilterTotalNotMatch = value.srcFilterTotalNotMatch;
      this._srcFragDrop = value.srcFragDrop;
      this._srcHeaderFilter10Drop = value.srcHeaderFilter10Drop;
      this._srcHeaderFilter10Match = value.srcHeaderFilter10Match;
      this._srcHeaderFilter1Drop = value.srcHeaderFilter1Drop;
      this._srcHeaderFilter1Match = value.srcHeaderFilter1Match;
      this._srcHeaderFilter2Drop = value.srcHeaderFilter2Drop;
      this._srcHeaderFilter2Match = value.srcHeaderFilter2Match;
      this._srcHeaderFilter3Drop = value.srcHeaderFilter3Drop;
      this._srcHeaderFilter3Match = value.srcHeaderFilter3Match;
      this._srcHeaderFilter4Drop = value.srcHeaderFilter4Drop;
      this._srcHeaderFilter4Match = value.srcHeaderFilter4Match;
      this._srcHeaderFilter5Drop = value.srcHeaderFilter5Drop;
      this._srcHeaderFilter5Match = value.srcHeaderFilter5Match;
      this._srcHeaderFilter6Drop = value.srcHeaderFilter6Drop;
      this._srcHeaderFilter6Match = value.srcHeaderFilter6Match;
      this._srcHeaderFilter7Drop = value.srcHeaderFilter7Drop;
      this._srcHeaderFilter7Match = value.srcHeaderFilter7Match;
      this._srcHeaderFilter8Drop = value.srcHeaderFilter8Drop;
      this._srcHeaderFilter8Match = value.srcHeaderFilter8Match;
      this._srcHeaderFilter9Drop = value.srcHeaderFilter9Drop;
      this._srcHeaderFilter9Match = value.srcHeaderFilter9Match;
      this._srcHeaderFilterActionBlacklist = value.srcHeaderFilterActionBlacklist;
      this._srcHeaderFilterActionDefaultPass = value.srcHeaderFilterActionDefaultPass;
      this._srcHeaderFilterActionDrop = value.srcHeaderFilterActionDrop;
      this._srcHeaderFilterActionWhitelist = value.srcHeaderFilterActionWhitelist;
      this._srcHeaderFilterMatch = value.srcHeaderFilterMatch;
      this._srcHeaderFilterNoneMatch = value.srcHeaderFilterNoneMatch;
      this._srcHeaderFilterNotMatch = value.srcHeaderFilterNotMatch;
      this._srcHttpAuthDrop = value.srcHttpAuthDrop;
      this._srcHwDrop = value.srcHwDrop;
      this._srcHwDropInserted = value.srcHwDropInserted;
      this._srcHwDropRemoved = value.srcHwDropRemoved;
      this._srcJsChallengeSent = value.srcJsChallengeSent;
      this._srcLearnOverflow = value.srcLearnOverflow;
      this._srcOutOfSeqExcd = value.srcOutOfSeqExcd;
      this._srcPolicyDrop = value.srcPolicyDrop;
      this._srcPostRateExceed = value.srcPostRateExceed;
      this._srcReqRateExceed = value.srcReqRateExceed;
      this._srcRetransmitExcd = value.srcRetransmitExcd;
      this._srcRstCookieFail = value.srcRstCookieFail;
      this._srcSynAuthFail = value.srcSynAuthFail;
      this._srcSynCookieFail = value.srcSynCookieFail;
      this._srcSynCookieSent = value.srcSynCookieSent;
      this._srcSynRateExceed = value.srcSynRateExceed;
      this._srcSynRetryBlacklist = value.srcSynRetryBlacklist;
      this._srcSynRetryFailed = value.srcSynRetryFailed;
      this._srcSynRetryGapDrop = value.srcSynRetryGapDrop;
      this._srcSynRetryInit = value.srcSynRetryInit;
      this._srcSynRetryReset = value.srcSynRetryReset;
      this._srcSynRetryRtoFail = value.srcSynRetryRtoFail;
      this._srcSynRetryRtoPass = value.srcSynRetryRtoPass;
      this._srcSynRetryRtoProgress = value.srcSynRetryRtoProgress;
      this._srcSynRetryTimeout = value.srcSynRetryTimeout;
      this._srcTcpAuthRst = value.srcTcpAuthRst;
      this._srcUdChallengeSent = value.srcUdChallengeSent;
      this._srcUnauthDrop = value.srcUnauthDrop;
      this._srcWellKnownPort = value.srcWellKnownPort;
      this._srcZeroWindowExcd = value.srcZeroWindowExcd;
      this._srcZoneServiceEntryAged = value.srcZoneServiceEntryAged;
      this._srcZoneServiceEntryLearned = value.srcZoneServiceEntryLearned;
      this._synAuthFail = value.synAuthFail;
      this._synAuthPass = value.synAuthPass;
      this._synAuthRstAckDrop = value.synAuthRstAckDrop;
      this._synCookieFail = value.synCookieFail;
      this._synCookieSent = value.synCookieSent;
      this._synDrop = value.synDrop;
      this._synRetryBlacklist = value.synRetryBlacklist;
      this._synRetryFailed = value.synRetryFailed;
      this._synRetryGapDrop = value.synRetryGapDrop;
      this._synRetryInit = value.synRetryInit;
      this._synRetryPass = value.synRetryPass;
      this._synRetryReset = value.synRetryReset;
      this._synRetryRtoFail = value.synRetryRtoFail;
      this._synRetryRtoPass = value.synRetryRtoPass;
      this._synRetryRtoProgress = value.synRetryRtoProgress;
      this._synRetryTimeout = value.synRetryTimeout;
      this._synTfoRcv = value.synTfoRcv;
      this._synackMultipleAttemptsPerIpDetected = value.synackMultipleAttemptsPerIpDetected;
      this._synackResetSent = value.synackResetSent;
      this._tcpAuthDrop = value.tcpAuthDrop;
      this._tcpAuthResp = value.tcpAuthResp;
      this._tcpAuthRst = value.tcpAuthRst;
      this._tcpFilter1Match = value.tcpFilter1Match;
      this._tcpFilter2Match = value.tcpFilter2Match;
      this._tcpFilter3Match = value.tcpFilter3Match;
      this._tcpFilter4Match = value.tcpFilter4Match;
      this._tcpFilter5Match = value.tcpFilter5Match;
      this._tcpFilterActionBlacklist = value.tcpFilterActionBlacklist;
      this._tcpFilterActionDefaultPass = value.tcpFilterActionDefaultPass;
      this._tcpFilterActionDrop = value.tcpFilterActionDrop;
      this._tcpFilterActionWhitelist = value.tcpFilterActionWhitelist;
      this._tcpFilterNoneMatch = value.tcpFilterNoneMatch;
      this._tcpFilterTotalNotMatch = value.tcpFilterTotalNotMatch;
      this._tcpRexmitSynLimitBl = value.tcpRexmitSynLimitBl;
      this._tcpRexmitSynLimitDrop = value.tcpRexmitSynLimitDrop;
      this._tooManyHeaders = value.tooManyHeaders;
      this._udChallengeFailed = value.udChallengeFailed;
      this._udChallengeSent = value.udChallengeSent;
      this._unauthDrop = value.unauthDrop;
      this._unauthSrcSessionReset = value.unauthSrcSessionReset;
      this._uriFilterMatch = value.uriFilterMatch;
      this._useHdrSrcIp = value.useHdrSrcIp;
      this._userAgentFilterBlacklist = value.userAgentFilterBlacklist;
      this._userAgentFilterMatch = value.userAgentFilterMatch;
      this._wellknownSportDrop = value.wellknownSportDrop;
      this._windowSmall = value.windowSmall;
      this._windowSmallDrop = value.windowSmallDrop;
      this._zeroWindowExcd = value.zeroWindowExcd;
    }
  }

  // ack_auth_fail - computed: false, optional: true, required: false
  private _ackAuthFail?: number; 
  public get ackAuthFail() {
    return this.getNumberAttribute('ack_auth_fail');
  }
  public set ackAuthFail(value: number) {
    this._ackAuthFail = value;
  }
  public resetAckAuthFail() {
    this._ackAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAuthFailInput() {
    return this._ackAuthFail;
  }

  // ack_retry_blacklist - computed: false, optional: true, required: false
  private _ackRetryBlacklist?: number; 
  public get ackRetryBlacklist() {
    return this.getNumberAttribute('ack_retry_blacklist');
  }
  public set ackRetryBlacklist(value: number) {
    this._ackRetryBlacklist = value;
  }
  public resetAckRetryBlacklist() {
    this._ackRetryBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryBlacklistInput() {
    return this._ackRetryBlacklist;
  }

  // ack_retry_gap_drop - computed: false, optional: true, required: false
  private _ackRetryGapDrop?: number; 
  public get ackRetryGapDrop() {
    return this.getNumberAttribute('ack_retry_gap_drop');
  }
  public set ackRetryGapDrop(value: number) {
    this._ackRetryGapDrop = value;
  }
  public resetAckRetryGapDrop() {
    this._ackRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryGapDropInput() {
    return this._ackRetryGapDrop;
  }

  // ack_retry_init - computed: false, optional: true, required: false
  private _ackRetryInit?: number; 
  public get ackRetryInit() {
    return this.getNumberAttribute('ack_retry_init');
  }
  public set ackRetryInit(value: number) {
    this._ackRetryInit = value;
  }
  public resetAckRetryInit() {
    this._ackRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryInitInput() {
    return this._ackRetryInit;
  }

  // ack_retry_pass - computed: false, optional: true, required: false
  private _ackRetryPass?: number; 
  public get ackRetryPass() {
    return this.getNumberAttribute('ack_retry_pass');
  }
  public set ackRetryPass(value: number) {
    this._ackRetryPass = value;
  }
  public resetAckRetryPass() {
    this._ackRetryPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryPassInput() {
    return this._ackRetryPass;
  }

  // ack_retry_reset - computed: false, optional: true, required: false
  private _ackRetryReset?: number; 
  public get ackRetryReset() {
    return this.getNumberAttribute('ack_retry_reset');
  }
  public set ackRetryReset(value: number) {
    this._ackRetryReset = value;
  }
  public resetAckRetryReset() {
    this._ackRetryReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryResetInput() {
    return this._ackRetryReset;
  }

  // ack_retry_rto_fail - computed: false, optional: true, required: false
  private _ackRetryRtoFail?: number; 
  public get ackRetryRtoFail() {
    return this.getNumberAttribute('ack_retry_rto_fail');
  }
  public set ackRetryRtoFail(value: number) {
    this._ackRetryRtoFail = value;
  }
  public resetAckRetryRtoFail() {
    this._ackRetryRtoFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryRtoFailInput() {
    return this._ackRetryRtoFail;
  }

  // ack_retry_rto_pass - computed: false, optional: true, required: false
  private _ackRetryRtoPass?: number; 
  public get ackRetryRtoPass() {
    return this.getNumberAttribute('ack_retry_rto_pass');
  }
  public set ackRetryRtoPass(value: number) {
    this._ackRetryRtoPass = value;
  }
  public resetAckRetryRtoPass() {
    this._ackRetryRtoPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryRtoPassInput() {
    return this._ackRetryRtoPass;
  }

  // ack_retry_rto_progress - computed: false, optional: true, required: false
  private _ackRetryRtoProgress?: number; 
  public get ackRetryRtoProgress() {
    return this.getNumberAttribute('ack_retry_rto_progress');
  }
  public set ackRetryRtoProgress(value: number) {
    this._ackRetryRtoProgress = value;
  }
  public resetAckRetryRtoProgress() {
    this._ackRetryRtoProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryRtoProgressInput() {
    return this._ackRetryRtoProgress;
  }

  // ack_retry_timeout - computed: false, optional: true, required: false
  private _ackRetryTimeout?: number; 
  public get ackRetryTimeout() {
    return this.getNumberAttribute('ack_retry_timeout');
  }
  public set ackRetryTimeout(value: number) {
    this._ackRetryTimeout = value;
  }
  public resetAckRetryTimeout() {
    this._ackRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryTimeoutInput() {
    return this._ackRetryTimeout;
  }

  // addr_filter_bl - computed: false, optional: true, required: false
  private _addrFilterBl?: number; 
  public get addrFilterBl() {
    return this.getNumberAttribute('addr_filter_bl');
  }
  public set addrFilterBl(value: number) {
    this._addrFilterBl = value;
  }
  public resetAddrFilterBl() {
    this._addrFilterBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrFilterBlInput() {
    return this._addrFilterBl;
  }

  // addr_filter_drop - computed: false, optional: true, required: false
  private _addrFilterDrop?: number; 
  public get addrFilterDrop() {
    return this.getNumberAttribute('addr_filter_drop');
  }
  public set addrFilterDrop(value: number) {
    this._addrFilterDrop = value;
  }
  public resetAddrFilterDrop() {
    this._addrFilterDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrFilterDropInput() {
    return this._addrFilterDrop;
  }

  // bl - computed: false, optional: true, required: false
  private _bl?: number; 
  public get bl() {
    return this.getNumberAttribute('bl');
  }
  public set bl(value: number) {
    this._bl = value;
  }
  public resetBl() {
    this._bl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blInput() {
    return this._bl;
  }

  // challenge_failed - computed: false, optional: true, required: false
  private _challengeFailed?: number; 
  public get challengeFailed() {
    return this.getNumberAttribute('challenge_failed');
  }
  public set challengeFailed(value: number) {
    this._challengeFailed = value;
  }
  public resetChallengeFailed() {
    this._challengeFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeFailedInput() {
    return this._challengeFailed;
  }

  // chunk_bad - computed: false, optional: true, required: false
  private _chunkBad?: number; 
  public get chunkBad() {
    return this.getNumberAttribute('chunk_bad');
  }
  public set chunkBad(value: number) {
    this._chunkBad = value;
  }
  public resetChunkBad() {
    this._chunkBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkBadInput() {
    return this._chunkBad;
  }

  // chunk_sz_1k - computed: false, optional: true, required: false
  private _chunkSz1K?: number; 
  public get chunkSz1K() {
    return this.getNumberAttribute('chunk_sz_1k');
  }
  public set chunkSz1K(value: number) {
    this._chunkSz1K = value;
  }
  public resetChunkSz1K() {
    this._chunkSz1K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSz1KInput() {
    return this._chunkSz1K;
  }

  // chunk_sz_2k - computed: false, optional: true, required: false
  private _chunkSz2K?: number; 
  public get chunkSz2K() {
    return this.getNumberAttribute('chunk_sz_2k');
  }
  public set chunkSz2K(value: number) {
    this._chunkSz2K = value;
  }
  public resetChunkSz2K() {
    this._chunkSz2K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSz2KInput() {
    return this._chunkSz2K;
  }

  // chunk_sz_4k - computed: false, optional: true, required: false
  private _chunkSz4K?: number; 
  public get chunkSz4K() {
    return this.getNumberAttribute('chunk_sz_4k');
  }
  public set chunkSz4K(value: number) {
    this._chunkSz4K = value;
  }
  public resetChunkSz4K() {
    this._chunkSz4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSz4KInput() {
    return this._chunkSz4K;
  }

  // chunk_sz_512 - computed: false, optional: true, required: false
  private _chunkSz512?: number; 
  public get chunkSz512() {
    return this.getNumberAttribute('chunk_sz_512');
  }
  public set chunkSz512(value: number) {
    this._chunkSz512 = value;
  }
  public resetChunkSz512() {
    this._chunkSz512 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSz512Input() {
    return this._chunkSz512;
  }

  // chunk_sz_gt_4k - computed: false, optional: true, required: false
  private _chunkSzGt4K?: number; 
  public get chunkSzGt4K() {
    return this.getNumberAttribute('chunk_sz_gt_4k');
  }
  public set chunkSzGt4K(value: number) {
    this._chunkSzGt4K = value;
  }
  public resetChunkSzGt4K() {
    this._chunkSzGt4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSzGt4KInput() {
    return this._chunkSzGt4K;
  }

  // client_rst - computed: false, optional: true, required: false
  private _clientRst?: number; 
  public get clientRst() {
    return this.getNumberAttribute('client_rst');
  }
  public set clientRst(value: number) {
    this._clientRst = value;
  }
  public resetClientRst() {
    this._clientRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRstInput() {
    return this._clientRst;
  }

  // conn_close - computed: false, optional: true, required: false
  private _connClose?: number; 
  public get connClose() {
    return this.getNumberAttribute('conn_close');
  }
  public set connClose(value: number) {
    this._connClose = value;
  }
  public resetConnClose() {
    this._connClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCloseInput() {
    return this._connClose;
  }

  // conn_close_half_open - computed: false, optional: true, required: false
  private _connCloseHalfOpen?: number; 
  public get connCloseHalfOpen() {
    return this.getNumberAttribute('conn_close_half_open');
  }
  public set connCloseHalfOpen(value: number) {
    this._connCloseHalfOpen = value;
  }
  public resetConnCloseHalfOpen() {
    this._connCloseHalfOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCloseHalfOpenInput() {
    return this._connCloseHalfOpen;
  }

  // conn_close_w_fin - computed: false, optional: true, required: false
  private _connCloseWFin?: number; 
  public get connCloseWFin() {
    return this.getNumberAttribute('conn_close_w_fin');
  }
  public set connCloseWFin(value: number) {
    this._connCloseWFin = value;
  }
  public resetConnCloseWFin() {
    this._connCloseWFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCloseWFinInput() {
    return this._connCloseWFin;
  }

  // conn_close_w_idle - computed: false, optional: true, required: false
  private _connCloseWIdle?: number; 
  public get connCloseWIdle() {
    return this.getNumberAttribute('conn_close_w_idle');
  }
  public set connCloseWIdle(value: number) {
    this._connCloseWIdle = value;
  }
  public resetConnCloseWIdle() {
    this._connCloseWIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCloseWIdleInput() {
    return this._connCloseWIdle;
  }

  // conn_close_w_rst - computed: false, optional: true, required: false
  private _connCloseWRst?: number; 
  public get connCloseWRst() {
    return this.getNumberAttribute('conn_close_w_rst');
  }
  public set connCloseWRst(value: number) {
    this._connCloseWRst = value;
  }
  public resetConnCloseWRst() {
    this._connCloseWRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCloseWRstInput() {
    return this._connCloseWRst;
  }

  // conn_create_from_ack - computed: false, optional: true, required: false
  private _connCreateFromAck?: number; 
  public get connCreateFromAck() {
    return this.getNumberAttribute('conn_create_from_ack');
  }
  public set connCreateFromAck(value: number) {
    this._connCreateFromAck = value;
  }
  public resetConnCreateFromAck() {
    this._connCreateFromAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCreateFromAckInput() {
    return this._connCreateFromAck;
  }

  // conn_create_from_syn - computed: false, optional: true, required: false
  private _connCreateFromSyn?: number; 
  public get connCreateFromSyn() {
    return this.getNumberAttribute('conn_create_from_syn');
  }
  public set connCreateFromSyn(value: number) {
    this._connCreateFromSyn = value;
  }
  public resetConnCreateFromSyn() {
    this._connCreateFromSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCreateFromSynInput() {
    return this._connCreateFromSyn;
  }

  // conn_create_from_synack - computed: false, optional: true, required: false
  private _connCreateFromSynack?: number; 
  public get connCreateFromSynack() {
    return this.getNumberAttribute('conn_create_from_synack');
  }
  public set connCreateFromSynack(value: number) {
    this._connCreateFromSynack = value;
  }
  public resetConnCreateFromSynack() {
    this._connCreateFromSynack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCreateFromSynackInput() {
    return this._connCreateFromSynack;
  }

  // conn_ofo_rate_excd - computed: false, optional: true, required: false
  private _connOfoRateExcd?: number; 
  public get connOfoRateExcd() {
    return this.getNumberAttribute('conn_ofo_rate_excd');
  }
  public set connOfoRateExcd(value: number) {
    this._connOfoRateExcd = value;
  }
  public resetConnOfoRateExcd() {
    this._connOfoRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connOfoRateExcdInput() {
    return this._connOfoRateExcd;
  }

  // conn_prate_excd - computed: false, optional: true, required: false
  private _connPrateExcd?: number; 
  public get connPrateExcd() {
    return this.getNumberAttribute('conn_prate_excd');
  }
  public set connPrateExcd(value: number) {
    this._connPrateExcd = value;
  }
  public resetConnPrateExcd() {
    this._connPrateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connPrateExcdInput() {
    return this._connPrateExcd;
  }

  // conn_rexmit_rate_excd - computed: false, optional: true, required: false
  private _connRexmitRateExcd?: number; 
  public get connRexmitRateExcd() {
    return this.getNumberAttribute('conn_rexmit_rate_excd');
  }
  public set connRexmitRateExcd(value: number) {
    this._connRexmitRateExcd = value;
  }
  public resetConnRexmitRateExcd() {
    this._connRexmitRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRexmitRateExcdInput() {
    return this._connRexmitRateExcd;
  }

  // conn_zwindow_rate_excd - computed: false, optional: true, required: false
  private _connZwindowRateExcd?: number; 
  public get connZwindowRateExcd() {
    return this.getNumberAttribute('conn_zwindow_rate_excd');
  }
  public set connZwindowRateExcd(value: number) {
    this._connZwindowRateExcd = value;
  }
  public resetConnZwindowRateExcd() {
    this._connZwindowRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connZwindowRateExcdInput() {
    return this._connZwindowRateExcd;
  }

  // content_length_too_long - computed: false, optional: true, required: false
  private _contentLengthTooLong?: number; 
  public get contentLengthTooLong() {
    return this.getNumberAttribute('content_length_too_long');
  }
  public set contentLengthTooLong(value: number) {
    this._contentLengthTooLong = value;
  }
  public resetContentLengthTooLong() {
    this._contentLengthTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLengthTooLongInput() {
    return this._contentLengthTooLong;
  }

  // create_conn_non_syn_dropped - computed: false, optional: true, required: false
  private _createConnNonSynDropped?: number; 
  public get createConnNonSynDropped() {
    return this.getNumberAttribute('create_conn_non_syn_dropped');
  }
  public set createConnNonSynDropped(value: number) {
    this._createConnNonSynDropped = value;
  }
  public resetCreateConnNonSynDropped() {
    this._createConnNonSynDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createConnNonSynDroppedInput() {
    return this._createConnNonSynDropped;
  }

  // current_es_level - computed: false, optional: true, required: false
  private _currentEsLevel?: number; 
  public get currentEsLevel() {
    return this.getNumberAttribute('current_es_level');
  }
  public set currentEsLevel(value: number) {
    this._currentEsLevel = value;
  }
  public resetCurrentEsLevel() {
    this._currentEsLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentEsLevelInput() {
    return this._currentEsLevel;
  }

  // dst_hw_drop - computed: false, optional: true, required: false
  private _dstHwDrop?: number; 
  public get dstHwDrop() {
    return this.getNumberAttribute('dst_hw_drop');
  }
  public set dstHwDrop(value: number) {
    this._dstHwDrop = value;
  }
  public resetDstHwDrop() {
    this._dstHwDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHwDropInput() {
    return this._dstHwDrop;
  }

  // dst_hw_drop_inserted - computed: false, optional: true, required: false
  private _dstHwDropInserted?: number; 
  public get dstHwDropInserted() {
    return this.getNumberAttribute('dst_hw_drop_inserted');
  }
  public set dstHwDropInserted(value: number) {
    this._dstHwDropInserted = value;
  }
  public resetDstHwDropInserted() {
    this._dstHwDropInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHwDropInsertedInput() {
    return this._dstHwDropInserted;
  }

  // dst_hw_drop_removed - computed: false, optional: true, required: false
  private _dstHwDropRemoved?: number; 
  public get dstHwDropRemoved() {
    return this.getNumberAttribute('dst_hw_drop_removed');
  }
  public set dstHwDropRemoved(value: number) {
    this._dstHwDropRemoved = value;
  }
  public resetDstHwDropRemoved() {
    this._dstHwDropRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHwDropRemovedInput() {
    return this._dstHwDropRemoved;
  }

  // dst_post_rate_exceed - computed: false, optional: true, required: false
  private _dstPostRateExceed?: number; 
  public get dstPostRateExceed() {
    return this.getNumberAttribute('dst_post_rate_exceed');
  }
  public set dstPostRateExceed(value: number) {
    this._dstPostRateExceed = value;
  }
  public resetDstPostRateExceed() {
    this._dstPostRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPostRateExceedInput() {
    return this._dstPostRateExceed;
  }

  // dst_req_rate_exceed - computed: false, optional: true, required: false
  private _dstReqRateExceed?: number; 
  public get dstReqRateExceed() {
    return this.getNumberAttribute('dst_req_rate_exceed');
  }
  public set dstReqRateExceed(value: number) {
    this._dstReqRateExceed = value;
  }
  public resetDstReqRateExceed() {
    this._dstReqRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstReqRateExceedInput() {
    return this._dstReqRateExceed;
  }

  // dst_resp_rate_exceed - computed: false, optional: true, required: false
  private _dstRespRateExceed?: number; 
  public get dstRespRateExceed() {
    return this.getNumberAttribute('dst_resp_rate_exceed');
  }
  public set dstRespRateExceed(value: number) {
    this._dstRespRateExceed = value;
  }
  public resetDstRespRateExceed() {
    this._dstRespRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRespRateExceedInput() {
    return this._dstRespRateExceed;
  }

  // er_condition - computed: false, optional: true, required: false
  private _erCondition?: number; 
  public get erCondition() {
    return this.getNumberAttribute('er_condition');
  }
  public set erCondition(value: number) {
    this._erCondition = value;
  }
  public resetErCondition() {
    this._erCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erConditionInput() {
    return this._erCondition;
  }

  // ew_inbound_port_byte_drop - computed: false, optional: true, required: false
  private _ewInboundPortByteDrop?: number; 
  public get ewInboundPortByteDrop() {
    return this.getNumberAttribute('ew_inbound_port_byte_drop');
  }
  public set ewInboundPortByteDrop(value: number) {
    this._ewInboundPortByteDrop = value;
  }
  public resetEwInboundPortByteDrop() {
    this._ewInboundPortByteDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewInboundPortByteDropInput() {
    return this._ewInboundPortByteDrop;
  }

  // ew_inbound_port_byte_rcv - computed: false, optional: true, required: false
  private _ewInboundPortByteRcv?: number; 
  public get ewInboundPortByteRcv() {
    return this.getNumberAttribute('ew_inbound_port_byte_rcv');
  }
  public set ewInboundPortByteRcv(value: number) {
    this._ewInboundPortByteRcv = value;
  }
  public resetEwInboundPortByteRcv() {
    this._ewInboundPortByteRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewInboundPortByteRcvInput() {
    return this._ewInboundPortByteRcv;
  }

  // ew_inbound_port_byte_sent - computed: false, optional: true, required: false
  private _ewInboundPortByteSent?: number; 
  public get ewInboundPortByteSent() {
    return this.getNumberAttribute('ew_inbound_port_byte_sent');
  }
  public set ewInboundPortByteSent(value: number) {
    this._ewInboundPortByteSent = value;
  }
  public resetEwInboundPortByteSent() {
    this._ewInboundPortByteSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewInboundPortByteSentInput() {
    return this._ewInboundPortByteSent;
  }

  // ew_inbound_port_drop - computed: false, optional: true, required: false
  private _ewInboundPortDrop?: number; 
  public get ewInboundPortDrop() {
    return this.getNumberAttribute('ew_inbound_port_drop');
  }
  public set ewInboundPortDrop(value: number) {
    this._ewInboundPortDrop = value;
  }
  public resetEwInboundPortDrop() {
    this._ewInboundPortDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewInboundPortDropInput() {
    return this._ewInboundPortDrop;
  }

  // ew_inbound_port_rcv - computed: false, optional: true, required: false
  private _ewInboundPortRcv?: number; 
  public get ewInboundPortRcv() {
    return this.getNumberAttribute('ew_inbound_port_rcv');
  }
  public set ewInboundPortRcv(value: number) {
    this._ewInboundPortRcv = value;
  }
  public resetEwInboundPortRcv() {
    this._ewInboundPortRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewInboundPortRcvInput() {
    return this._ewInboundPortRcv;
  }

  // ew_inbound_port_sent - computed: false, optional: true, required: false
  private _ewInboundPortSent?: number; 
  public get ewInboundPortSent() {
    return this.getNumberAttribute('ew_inbound_port_sent');
  }
  public set ewInboundPortSent(value: number) {
    this._ewInboundPortSent = value;
  }
  public resetEwInboundPortSent() {
    this._ewInboundPortSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewInboundPortSentInput() {
    return this._ewInboundPortSent;
  }

  // ew_outbound_port_byte_drop - computed: false, optional: true, required: false
  private _ewOutboundPortByteDrop?: number; 
  public get ewOutboundPortByteDrop() {
    return this.getNumberAttribute('ew_outbound_port_byte_drop');
  }
  public set ewOutboundPortByteDrop(value: number) {
    this._ewOutboundPortByteDrop = value;
  }
  public resetEwOutboundPortByteDrop() {
    this._ewOutboundPortByteDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewOutboundPortByteDropInput() {
    return this._ewOutboundPortByteDrop;
  }

  // ew_outbound_port_byte_rcv - computed: false, optional: true, required: false
  private _ewOutboundPortByteRcv?: number; 
  public get ewOutboundPortByteRcv() {
    return this.getNumberAttribute('ew_outbound_port_byte_rcv');
  }
  public set ewOutboundPortByteRcv(value: number) {
    this._ewOutboundPortByteRcv = value;
  }
  public resetEwOutboundPortByteRcv() {
    this._ewOutboundPortByteRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewOutboundPortByteRcvInput() {
    return this._ewOutboundPortByteRcv;
  }

  // ew_outbound_port_byte_sent - computed: false, optional: true, required: false
  private _ewOutboundPortByteSent?: number; 
  public get ewOutboundPortByteSent() {
    return this.getNumberAttribute('ew_outbound_port_byte_sent');
  }
  public set ewOutboundPortByteSent(value: number) {
    this._ewOutboundPortByteSent = value;
  }
  public resetEwOutboundPortByteSent() {
    this._ewOutboundPortByteSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewOutboundPortByteSentInput() {
    return this._ewOutboundPortByteSent;
  }

  // ew_outbound_port_drop - computed: false, optional: true, required: false
  private _ewOutboundPortDrop?: number; 
  public get ewOutboundPortDrop() {
    return this.getNumberAttribute('ew_outbound_port_drop');
  }
  public set ewOutboundPortDrop(value: number) {
    this._ewOutboundPortDrop = value;
  }
  public resetEwOutboundPortDrop() {
    this._ewOutboundPortDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewOutboundPortDropInput() {
    return this._ewOutboundPortDrop;
  }

  // ew_outbound_port_rcv - computed: false, optional: true, required: false
  private _ewOutboundPortRcv?: number; 
  public get ewOutboundPortRcv() {
    return this.getNumberAttribute('ew_outbound_port_rcv');
  }
  public set ewOutboundPortRcv(value: number) {
    this._ewOutboundPortRcv = value;
  }
  public resetEwOutboundPortRcv() {
    this._ewOutboundPortRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewOutboundPortRcvInput() {
    return this._ewOutboundPortRcv;
  }

  // ew_outbound_port_sent - computed: false, optional: true, required: false
  private _ewOutboundPortSent?: number; 
  public get ewOutboundPortSent() {
    return this.getNumberAttribute('ew_outbound_port_sent');
  }
  public set ewOutboundPortSent(value: number) {
    this._ewOutboundPortSent = value;
  }
  public resetEwOutboundPortSent() {
    this._ewOutboundPortSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewOutboundPortSentInput() {
    return this._ewOutboundPortSent;
  }

  // exceed_action_drop - computed: false, optional: true, required: false
  private _exceedActionDrop?: number; 
  public get exceedActionDrop() {
    return this.getNumberAttribute('exceed_action_drop');
  }
  public set exceedActionDrop(value: number) {
    this._exceedActionDrop = value;
  }
  public resetExceedActionDrop() {
    this._exceedActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionDropInput() {
    return this._exceedActionDrop;
  }

  // exceed_action_tunnel - computed: false, optional: true, required: false
  private _exceedActionTunnel?: number; 
  public get exceedActionTunnel() {
    return this.getNumberAttribute('exceed_action_tunnel');
  }
  public set exceedActionTunnel(value: number) {
    this._exceedActionTunnel = value;
  }
  public resetExceedActionTunnel() {
    this._exceedActionTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionTunnelInput() {
    return this._exceedActionTunnel;
  }

  // exceed_drop_brate_src - computed: false, optional: true, required: false
  private _exceedDropBrateSrc?: number; 
  public get exceedDropBrateSrc() {
    return this.getNumberAttribute('exceed_drop_brate_src');
  }
  public set exceedDropBrateSrc(value: number) {
    this._exceedDropBrateSrc = value;
  }
  public resetExceedDropBrateSrc() {
    this._exceedDropBrateSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropBrateSrcInput() {
    return this._exceedDropBrateSrc;
  }

  // exceed_drop_brate_src_pkt - computed: false, optional: true, required: false
  private _exceedDropBrateSrcPkt?: number; 
  public get exceedDropBrateSrcPkt() {
    return this.getNumberAttribute('exceed_drop_brate_src_pkt');
  }
  public set exceedDropBrateSrcPkt(value: number) {
    this._exceedDropBrateSrcPkt = value;
  }
  public resetExceedDropBrateSrcPkt() {
    this._exceedDropBrateSrcPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropBrateSrcPktInput() {
    return this._exceedDropBrateSrcPkt;
  }

  // exceed_drop_climit_src - computed: false, optional: true, required: false
  private _exceedDropClimitSrc?: number; 
  public get exceedDropClimitSrc() {
    return this.getNumberAttribute('exceed_drop_climit_src');
  }
  public set exceedDropClimitSrc(value: number) {
    this._exceedDropClimitSrc = value;
  }
  public resetExceedDropClimitSrc() {
    this._exceedDropClimitSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropClimitSrcInput() {
    return this._exceedDropClimitSrc;
  }

  // exceed_drop_crate_src - computed: false, optional: true, required: false
  private _exceedDropCrateSrc?: number; 
  public get exceedDropCrateSrc() {
    return this.getNumberAttribute('exceed_drop_crate_src');
  }
  public set exceedDropCrateSrc(value: number) {
    this._exceedDropCrateSrc = value;
  }
  public resetExceedDropCrateSrc() {
    this._exceedDropCrateSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropCrateSrcInput() {
    return this._exceedDropCrateSrc;
  }

  // exceed_drop_prate_src - computed: false, optional: true, required: false
  private _exceedDropPrateSrc?: number; 
  public get exceedDropPrateSrc() {
    return this.getNumberAttribute('exceed_drop_prate_src');
  }
  public set exceedDropPrateSrc(value: number) {
    this._exceedDropPrateSrc = value;
  }
  public resetExceedDropPrateSrc() {
    this._exceedDropPrateSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropPrateSrcInput() {
    return this._exceedDropPrateSrc;
  }

  // fail_alloc - computed: false, optional: true, required: false
  private _failAlloc?: number; 
  public get failAlloc() {
    return this.getNumberAttribute('fail_alloc');
  }
  public set failAlloc(value: number) {
    this._failAlloc = value;
  }
  public resetFailAlloc() {
    this._failAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failAllocInput() {
    return this._failAlloc;
  }

  // fail_alloc_hdr - computed: false, optional: true, required: false
  private _failAllocHdr?: number; 
  public get failAllocHdr() {
    return this.getNumberAttribute('fail_alloc_hdr');
  }
  public set failAllocHdr(value: number) {
    this._failAllocHdr = value;
  }
  public resetFailAllocHdr() {
    this._failAllocHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failAllocHdrInput() {
    return this._failAllocHdr;
  }

  // fail_get_line - computed: false, optional: true, required: false
  private _failGetLine?: number; 
  public get failGetLine() {
    return this.getNumberAttribute('fail_get_line');
  }
  public set failGetLine(value: number) {
    this._failGetLine = value;
  }
  public resetFailGetLine() {
    this._failGetLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failGetLineInput() {
    return this._failGetLine;
  }

  // filter10_drop - computed: false, optional: true, required: false
  private _filter10Drop?: number; 
  public get filter10Drop() {
    return this.getNumberAttribute('filter10_drop');
  }
  public set filter10Drop(value: number) {
    this._filter10Drop = value;
  }
  public resetFilter10Drop() {
    this._filter10Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter10DropInput() {
    return this._filter10Drop;
  }

  // filter10_match - computed: false, optional: true, required: false
  private _filter10Match?: number; 
  public get filter10Match() {
    return this.getNumberAttribute('filter10_match');
  }
  public set filter10Match(value: number) {
    this._filter10Match = value;
  }
  public resetFilter10Match() {
    this._filter10Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter10MatchInput() {
    return this._filter10Match;
  }

  // filter1_drop - computed: false, optional: true, required: false
  private _filter1Drop?: number; 
  public get filter1Drop() {
    return this.getNumberAttribute('filter1_drop');
  }
  public set filter1Drop(value: number) {
    this._filter1Drop = value;
  }
  public resetFilter1Drop() {
    this._filter1Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter1DropInput() {
    return this._filter1Drop;
  }

  // filter1_match - computed: false, optional: true, required: false
  private _filter1Match?: number; 
  public get filter1Match() {
    return this.getNumberAttribute('filter1_match');
  }
  public set filter1Match(value: number) {
    this._filter1Match = value;
  }
  public resetFilter1Match() {
    this._filter1Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter1MatchInput() {
    return this._filter1Match;
  }

  // filter2_drop - computed: false, optional: true, required: false
  private _filter2Drop?: number; 
  public get filter2Drop() {
    return this.getNumberAttribute('filter2_drop');
  }
  public set filter2Drop(value: number) {
    this._filter2Drop = value;
  }
  public resetFilter2Drop() {
    this._filter2Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter2DropInput() {
    return this._filter2Drop;
  }

  // filter2_match - computed: false, optional: true, required: false
  private _filter2Match?: number; 
  public get filter2Match() {
    return this.getNumberAttribute('filter2_match');
  }
  public set filter2Match(value: number) {
    this._filter2Match = value;
  }
  public resetFilter2Match() {
    this._filter2Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter2MatchInput() {
    return this._filter2Match;
  }

  // filter3_drop - computed: false, optional: true, required: false
  private _filter3Drop?: number; 
  public get filter3Drop() {
    return this.getNumberAttribute('filter3_drop');
  }
  public set filter3Drop(value: number) {
    this._filter3Drop = value;
  }
  public resetFilter3Drop() {
    this._filter3Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter3DropInput() {
    return this._filter3Drop;
  }

  // filter3_match - computed: false, optional: true, required: false
  private _filter3Match?: number; 
  public get filter3Match() {
    return this.getNumberAttribute('filter3_match');
  }
  public set filter3Match(value: number) {
    this._filter3Match = value;
  }
  public resetFilter3Match() {
    this._filter3Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter3MatchInput() {
    return this._filter3Match;
  }

  // filter4_drop - computed: false, optional: true, required: false
  private _filter4Drop?: number; 
  public get filter4Drop() {
    return this.getNumberAttribute('filter4_drop');
  }
  public set filter4Drop(value: number) {
    this._filter4Drop = value;
  }
  public resetFilter4Drop() {
    this._filter4Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter4DropInput() {
    return this._filter4Drop;
  }

  // filter4_match - computed: false, optional: true, required: false
  private _filter4Match?: number; 
  public get filter4Match() {
    return this.getNumberAttribute('filter4_match');
  }
  public set filter4Match(value: number) {
    this._filter4Match = value;
  }
  public resetFilter4Match() {
    this._filter4Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter4MatchInput() {
    return this._filter4Match;
  }

  // filter5_drop - computed: false, optional: true, required: false
  private _filter5Drop?: number; 
  public get filter5Drop() {
    return this.getNumberAttribute('filter5_drop');
  }
  public set filter5Drop(value: number) {
    this._filter5Drop = value;
  }
  public resetFilter5Drop() {
    this._filter5Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter5DropInput() {
    return this._filter5Drop;
  }

  // filter5_match - computed: false, optional: true, required: false
  private _filter5Match?: number; 
  public get filter5Match() {
    return this.getNumberAttribute('filter5_match');
  }
  public set filter5Match(value: number) {
    this._filter5Match = value;
  }
  public resetFilter5Match() {
    this._filter5Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter5MatchInput() {
    return this._filter5Match;
  }

  // filter6_drop - computed: false, optional: true, required: false
  private _filter6Drop?: number; 
  public get filter6Drop() {
    return this.getNumberAttribute('filter6_drop');
  }
  public set filter6Drop(value: number) {
    this._filter6Drop = value;
  }
  public resetFilter6Drop() {
    this._filter6Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter6DropInput() {
    return this._filter6Drop;
  }

  // filter6_match - computed: false, optional: true, required: false
  private _filter6Match?: number; 
  public get filter6Match() {
    return this.getNumberAttribute('filter6_match');
  }
  public set filter6Match(value: number) {
    this._filter6Match = value;
  }
  public resetFilter6Match() {
    this._filter6Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter6MatchInput() {
    return this._filter6Match;
  }

  // filter7_drop - computed: false, optional: true, required: false
  private _filter7Drop?: number; 
  public get filter7Drop() {
    return this.getNumberAttribute('filter7_drop');
  }
  public set filter7Drop(value: number) {
    this._filter7Drop = value;
  }
  public resetFilter7Drop() {
    this._filter7Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter7DropInput() {
    return this._filter7Drop;
  }

  // filter7_match - computed: false, optional: true, required: false
  private _filter7Match?: number; 
  public get filter7Match() {
    return this.getNumberAttribute('filter7_match');
  }
  public set filter7Match(value: number) {
    this._filter7Match = value;
  }
  public resetFilter7Match() {
    this._filter7Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter7MatchInput() {
    return this._filter7Match;
  }

  // filter8_drop - computed: false, optional: true, required: false
  private _filter8Drop?: number; 
  public get filter8Drop() {
    return this.getNumberAttribute('filter8_drop');
  }
  public set filter8Drop(value: number) {
    this._filter8Drop = value;
  }
  public resetFilter8Drop() {
    this._filter8Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter8DropInput() {
    return this._filter8Drop;
  }

  // filter8_match - computed: false, optional: true, required: false
  private _filter8Match?: number; 
  public get filter8Match() {
    return this.getNumberAttribute('filter8_match');
  }
  public set filter8Match(value: number) {
    this._filter8Match = value;
  }
  public resetFilter8Match() {
    this._filter8Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter8MatchInput() {
    return this._filter8Match;
  }

  // filter9_drop - computed: false, optional: true, required: false
  private _filter9Drop?: number; 
  public get filter9Drop() {
    return this.getNumberAttribute('filter9_drop');
  }
  public set filter9Drop(value: number) {
    this._filter9Drop = value;
  }
  public resetFilter9Drop() {
    this._filter9Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter9DropInput() {
    return this._filter9Drop;
  }

  // filter9_match - computed: false, optional: true, required: false
  private _filter9Match?: number; 
  public get filter9Match() {
    return this.getNumberAttribute('filter9_match');
  }
  public set filter9Match(value: number) {
    this._filter9Match = value;
  }
  public resetFilter9Match() {
    this._filter9Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter9MatchInput() {
    return this._filter9Match;
  }

  // filter_action_blacklist - computed: false, optional: true, required: false
  private _filterActionBlacklist?: number; 
  public get filterActionBlacklist() {
    return this.getNumberAttribute('filter_action_blacklist');
  }
  public set filterActionBlacklist(value: number) {
    this._filterActionBlacklist = value;
  }
  public resetFilterActionBlacklist() {
    this._filterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionBlacklistInput() {
    return this._filterActionBlacklist;
  }

  // filter_action_default_pass - computed: false, optional: true, required: false
  private _filterActionDefaultPass?: number; 
  public get filterActionDefaultPass() {
    return this.getNumberAttribute('filter_action_default_pass');
  }
  public set filterActionDefaultPass(value: number) {
    this._filterActionDefaultPass = value;
  }
  public resetFilterActionDefaultPass() {
    this._filterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionDefaultPassInput() {
    return this._filterActionDefaultPass;
  }

  // filter_action_drop - computed: false, optional: true, required: false
  private _filterActionDrop?: number; 
  public get filterActionDrop() {
    return this.getNumberAttribute('filter_action_drop');
  }
  public set filterActionDrop(value: number) {
    this._filterActionDrop = value;
  }
  public resetFilterActionDrop() {
    this._filterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionDropInput() {
    return this._filterActionDrop;
  }

  // filter_action_whitelist - computed: false, optional: true, required: false
  private _filterActionWhitelist?: number; 
  public get filterActionWhitelist() {
    return this.getNumberAttribute('filter_action_whitelist');
  }
  public set filterActionWhitelist(value: number) {
    this._filterActionWhitelist = value;
  }
  public resetFilterActionWhitelist() {
    this._filterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionWhitelistInput() {
    return this._filterActionWhitelist;
  }

  // filter_auth_fail - computed: false, optional: true, required: false
  private _filterAuthFail?: number; 
  public get filterAuthFail() {
    return this.getNumberAttribute('filter_auth_fail');
  }
  public set filterAuthFail(value: number) {
    this._filterAuthFail = value;
  }
  public resetFilterAuthFail() {
    this._filterAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAuthFailInput() {
    return this._filterAuthFail;
  }

  // filter_match - computed: false, optional: true, required: false
  private _filterMatch?: number; 
  public get filterMatch() {
    return this.getNumberAttribute('filter_match');
  }
  public set filterMatch(value: number) {
    this._filterMatch = value;
  }
  public resetFilterMatch() {
    this._filterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMatchInput() {
    return this._filterMatch;
  }

  // filter_none_match - computed: false, optional: true, required: false
  private _filterNoneMatch?: number; 
  public get filterNoneMatch() {
    return this.getNumberAttribute('filter_none_match');
  }
  public set filterNoneMatch(value: number) {
    this._filterNoneMatch = value;
  }
  public resetFilterNoneMatch() {
    this._filterNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNoneMatchInput() {
    return this._filterNoneMatch;
  }

  // filter_not_match - computed: false, optional: true, required: false
  private _filterNotMatch?: number; 
  public get filterNotMatch() {
    return this.getNumberAttribute('filter_not_match');
  }
  public set filterNotMatch(value: number) {
    this._filterNotMatch = value;
  }
  public resetFilterNotMatch() {
    this._filterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNotMatchInput() {
    return this._filterNotMatch;
  }

  // frag_drop - computed: false, optional: true, required: false
  private _fragDrop?: number; 
  public get fragDrop() {
    return this.getNumberAttribute('frag_drop');
  }
  public set fragDrop(value: number) {
    this._fragDrop = value;
  }
  public resetFragDrop() {
    this._fragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragDropInput() {
    return this._fragDrop;
  }

  // frag_rcvd - computed: false, optional: true, required: false
  private _fragRcvd?: number; 
  public get fragRcvd() {
    return this.getNumberAttribute('frag_rcvd');
  }
  public set fragRcvd(value: number) {
    this._fragRcvd = value;
  }
  public resetFragRcvd() {
    this._fragRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragRcvdInput() {
    return this._fragRcvd;
  }

  // frag_timeout - computed: false, optional: true, required: false
  private _fragTimeout?: number; 
  public get fragTimeout() {
    return this.getNumberAttribute('frag_timeout');
  }
  public set fragTimeout(value: number) {
    this._fragTimeout = value;
  }
  public resetFragTimeout() {
    this._fragTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragTimeoutInput() {
    return this._fragTimeout;
  }

  // header_name_too_long - computed: false, optional: true, required: false
  private _headerNameTooLong?: number; 
  public get headerNameTooLong() {
    return this.getNumberAttribute('header_name_too_long');
  }
  public set headerNameTooLong(value: number) {
    this._headerNameTooLong = value;
  }
  public resetHeaderNameTooLong() {
    this._headerNameTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameTooLongInput() {
    return this._headerNameTooLong;
  }

  // header_processing_incomplete - computed: false, optional: true, required: false
  private _headerProcessingIncomplete?: number; 
  public get headerProcessingIncomplete() {
    return this.getNumberAttribute('header_processing_incomplete');
  }
  public set headerProcessingIncomplete(value: number) {
    this._headerProcessingIncomplete = value;
  }
  public resetHeaderProcessingIncomplete() {
    this._headerProcessingIncomplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerProcessingIncompleteInput() {
    return this._headerProcessingIncomplete;
  }

  // header_processing_time_0 - computed: false, optional: true, required: false
  private _headerProcessingTime0?: number; 
  public get headerProcessingTime0() {
    return this.getNumberAttribute('header_processing_time_0');
  }
  public set headerProcessingTime0(value: number) {
    this._headerProcessingTime0 = value;
  }
  public resetHeaderProcessingTime0() {
    this._headerProcessingTime0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerProcessingTime0Input() {
    return this._headerProcessingTime0;
  }

  // header_processing_time_1 - computed: false, optional: true, required: false
  private _headerProcessingTime1?: number; 
  public get headerProcessingTime1() {
    return this.getNumberAttribute('header_processing_time_1');
  }
  public set headerProcessingTime1(value: number) {
    this._headerProcessingTime1 = value;
  }
  public resetHeaderProcessingTime1() {
    this._headerProcessingTime1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerProcessingTime1Input() {
    return this._headerProcessingTime1;
  }

  // header_processing_time_2 - computed: false, optional: true, required: false
  private _headerProcessingTime2?: number; 
  public get headerProcessingTime2() {
    return this.getNumberAttribute('header_processing_time_2');
  }
  public set headerProcessingTime2(value: number) {
    this._headerProcessingTime2 = value;
  }
  public resetHeaderProcessingTime2() {
    this._headerProcessingTime2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerProcessingTime2Input() {
    return this._headerProcessingTime2;
  }

  // header_processing_time_3 - computed: false, optional: true, required: false
  private _headerProcessingTime3?: number; 
  public get headerProcessingTime3() {
    return this.getNumberAttribute('header_processing_time_3');
  }
  public set headerProcessingTime3(value: number) {
    this._headerProcessingTime3 = value;
  }
  public resetHeaderProcessingTime3() {
    this._headerProcessingTime3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerProcessingTime3Input() {
    return this._headerProcessingTime3;
  }

  // http_auth_drop - computed: false, optional: true, required: false
  private _httpAuthDrop?: number; 
  public get httpAuthDrop() {
    return this.getNumberAttribute('http_auth_drop');
  }
  public set httpAuthDrop(value: number) {
    this._httpAuthDrop = value;
  }
  public resetHttpAuthDrop() {
    this._httpAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthDropInput() {
    return this._httpAuthDrop;
  }

  // http_auth_resp - computed: false, optional: true, required: false
  private _httpAuthResp?: number; 
  public get httpAuthResp() {
    return this.getNumberAttribute('http_auth_resp');
  }
  public set httpAuthResp(value: number) {
    this._httpAuthResp = value;
  }
  public resetHttpAuthResp() {
    this._httpAuthResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthRespInput() {
    return this._httpAuthResp;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // invalid_hdr_name - computed: false, optional: true, required: false
  private _invalidHdrName?: number; 
  public get invalidHdrName() {
    return this.getNumberAttribute('invalid_hdr_name');
  }
  public set invalidHdrName(value: number) {
    this._invalidHdrName = value;
  }
  public resetInvalidHdrName() {
    this._invalidHdrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidHdrNameInput() {
    return this._invalidHdrName;
  }

  // invalid_hdr_val - computed: false, optional: true, required: false
  private _invalidHdrVal?: number; 
  public get invalidHdrVal() {
    return this.getNumberAttribute('invalid_hdr_val');
  }
  public set invalidHdrVal(value: number) {
    this._invalidHdrVal = value;
  }
  public resetInvalidHdrVal() {
    this._invalidHdrVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidHdrValInput() {
    return this._invalidHdrVal;
  }

  // invalid_header - computed: false, optional: true, required: false
  private _invalidHeader?: number; 
  public get invalidHeader() {
    return this.getNumberAttribute('invalid_header');
  }
  public set invalidHeader(value: number) {
    this._invalidHeader = value;
  }
  public resetInvalidHeader() {
    this._invalidHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidHeaderInput() {
    return this._invalidHeader;
  }

  // js_challenge_failed - computed: false, optional: true, required: false
  private _jsChallengeFailed?: number; 
  public get jsChallengeFailed() {
    return this.getNumberAttribute('js_challenge_failed');
  }
  public set jsChallengeFailed(value: number) {
    this._jsChallengeFailed = value;
  }
  public resetJsChallengeFailed() {
    this._jsChallengeFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsChallengeFailedInput() {
    return this._jsChallengeFailed;
  }

  // js_challenge_sent - computed: false, optional: true, required: false
  private _jsChallengeSent?: number; 
  public get jsChallengeSent() {
    return this.getNumberAttribute('js_challenge_sent');
  }
  public set jsChallengeSent(value: number) {
    this._jsChallengeSent = value;
  }
  public resetJsChallengeSent() {
    this._jsChallengeSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsChallengeSentInput() {
    return this._jsChallengeSent;
  }

  // less_than_mss_exceed - computed: false, optional: true, required: false
  private _lessThanMssExceed?: number; 
  public get lessThanMssExceed() {
    return this.getNumberAttribute('less_than_mss_exceed');
  }
  public set lessThanMssExceed(value: number) {
    this._lessThanMssExceed = value;
  }
  public resetLessThanMssExceed() {
    this._lessThanMssExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanMssExceedInput() {
    return this._lessThanMssExceed;
  }

  // line_too_long - computed: false, optional: true, required: false
  private _lineTooLong?: number; 
  public get lineTooLong() {
    return this.getNumberAttribute('line_too_long');
  }
  public set lineTooLong(value: number) {
    this._lineTooLong = value;
  }
  public resetLineTooLong() {
    this._lineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTooLongInput() {
    return this._lineTooLong;
  }

  // negative_req_remain - computed: false, optional: true, required: false
  private _negativeReqRemain?: number; 
  public get negativeReqRemain() {
    return this.getNumberAttribute('negative_req_remain');
  }
  public set negativeReqRemain(value: number) {
    this._negativeReqRemain = value;
  }
  public resetNegativeReqRemain() {
    this._negativeReqRemain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeReqRemainInput() {
    return this._negativeReqRemain;
  }

  // negative_resp_remain - computed: false, optional: true, required: false
  private _negativeRespRemain?: number; 
  public get negativeRespRemain() {
    return this.getNumberAttribute('negative_resp_remain');
  }
  public set negativeRespRemain(value: number) {
    this._negativeRespRemain = value;
  }
  public resetNegativeRespRemain() {
    this._negativeRespRemain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeRespRemainInput() {
    return this._negativeRespRemain;
  }

  // new_syn - computed: false, optional: true, required: false
  private _newSyn?: number; 
  public get newSyn() {
    return this.getNumberAttribute('new_syn');
  }
  public set newSyn(value: number) {
    this._newSyn = value;
  }
  public resetNewSyn() {
    this._newSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSynInput() {
    return this._newSyn;
  }

  // no_policy_class_list_match - computed: false, optional: true, required: false
  private _noPolicyClassListMatch?: number; 
  public get noPolicyClassListMatch() {
    return this.getNumberAttribute('no_policy_class_list_match');
  }
  public set noPolicyClassListMatch(value: number) {
    this._noPolicyClassListMatch = value;
  }
  public resetNoPolicyClassListMatch() {
    this._noPolicyClassListMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPolicyClassListMatchInput() {
    return this._noPolicyClassListMatch;
  }

  // no_route_drop - computed: false, optional: true, required: false
  private _noRouteDrop?: number; 
  public get noRouteDrop() {
    return this.getNumberAttribute('no_route_drop');
  }
  public set noRouteDrop(value: number) {
    this._noRouteDrop = value;
  }
  public resetNoRouteDrop() {
    this._noRouteDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteDropInput() {
    return this._noRouteDrop;
  }

  // ofo_queue_sz_exceed - computed: false, optional: true, required: false
  private _ofoQueueSzExceed?: number; 
  public get ofoQueueSzExceed() {
    return this.getNumberAttribute('ofo_queue_sz_exceed');
  }
  public set ofoQueueSzExceed(value: number) {
    this._ofoQueueSzExceed = value;
  }
  public resetOfoQueueSzExceed() {
    this._ofoQueueSzExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ofoQueueSzExceedInput() {
    return this._ofoQueueSzExceed;
  }

  // ofo_timer_expired - computed: false, optional: true, required: false
  private _ofoTimerExpired?: number; 
  public get ofoTimerExpired() {
    return this.getNumberAttribute('ofo_timer_expired');
  }
  public set ofoTimerExpired(value: number) {
    this._ofoTimerExpired = value;
  }
  public resetOfoTimerExpired() {
    this._ofoTimerExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ofoTimerExpiredInput() {
    return this._ofoTimerExpired;
  }

  // out_of_seq_excd - computed: false, optional: true, required: false
  private _outOfSeqExcd?: number; 
  public get outOfSeqExcd() {
    return this.getNumberAttribute('out_of_seq_excd');
  }
  public set outOfSeqExcd(value: number) {
    this._outOfSeqExcd = value;
  }
  public resetOutOfSeqExcd() {
    this._outOfSeqExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSeqExcdInput() {
    return this._outOfSeqExcd;
  }

  // outbound_port_bytes - computed: false, optional: true, required: false
  private _outboundPortBytes?: number; 
  public get outboundPortBytes() {
    return this.getNumberAttribute('outbound_port_bytes');
  }
  public set outboundPortBytes(value: number) {
    this._outboundPortBytes = value;
  }
  public resetOutboundPortBytes() {
    this._outboundPortBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortBytesInput() {
    return this._outboundPortBytes;
  }

  // outbound_port_bytes_drop - computed: false, optional: true, required: false
  private _outboundPortBytesDrop?: number; 
  public get outboundPortBytesDrop() {
    return this.getNumberAttribute('outbound_port_bytes_drop');
  }
  public set outboundPortBytesDrop(value: number) {
    this._outboundPortBytesDrop = value;
  }
  public resetOutboundPortBytesDrop() {
    this._outboundPortBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortBytesDropInput() {
    return this._outboundPortBytesDrop;
  }

  // outbound_port_bytes_sent - computed: false, optional: true, required: false
  private _outboundPortBytesSent?: number; 
  public get outboundPortBytesSent() {
    return this.getNumberAttribute('outbound_port_bytes_sent');
  }
  public set outboundPortBytesSent(value: number) {
    this._outboundPortBytesSent = value;
  }
  public resetOutboundPortBytesSent() {
    this._outboundPortBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortBytesSentInput() {
    return this._outboundPortBytesSent;
  }

  // outbound_port_drop - computed: false, optional: true, required: false
  private _outboundPortDrop?: number; 
  public get outboundPortDrop() {
    return this.getNumberAttribute('outbound_port_drop');
  }
  public set outboundPortDrop(value: number) {
    this._outboundPortDrop = value;
  }
  public resetOutboundPortDrop() {
    this._outboundPortDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortDropInput() {
    return this._outboundPortDrop;
  }

  // outbound_port_pkt_sent - computed: false, optional: true, required: false
  private _outboundPortPktSent?: number; 
  public get outboundPortPktSent() {
    return this.getNumberAttribute('outbound_port_pkt_sent');
  }
  public set outboundPortPktSent(value: number) {
    this._outboundPortPktSent = value;
  }
  public resetOutboundPortPktSent() {
    this._outboundPortPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortPktSentInput() {
    return this._outboundPortPktSent;
  }

  // outbound_port_rcvd - computed: false, optional: true, required: false
  private _outboundPortRcvd?: number; 
  public get outboundPortRcvd() {
    return this.getNumberAttribute('outbound_port_rcvd');
  }
  public set outboundPortRcvd(value: number) {
    this._outboundPortRcvd = value;
  }
  public resetOutboundPortRcvd() {
    this._outboundPortRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortRcvdInput() {
    return this._outboundPortRcvd;
  }

  // parse_bad_chunk - computed: false, optional: true, required: false
  private _parseBadChunk?: number; 
  public get parseBadChunk() {
    return this.getNumberAttribute('parse_bad_chunk');
  }
  public set parseBadChunk(value: number) {
    this._parseBadChunk = value;
  }
  public resetParseBadChunk() {
    this._parseBadChunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseBadChunkInput() {
    return this._parseBadChunk;
  }

  // parse_header_name_too_long - computed: false, optional: true, required: false
  private _parseHeaderNameTooLong?: number; 
  public get parseHeaderNameTooLong() {
    return this.getNumberAttribute('parse_header_name_too_long');
  }
  public set parseHeaderNameTooLong(value: number) {
    this._parseHeaderNameTooLong = value;
  }
  public resetParseHeaderNameTooLong() {
    this._parseHeaderNameTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseHeaderNameTooLongInput() {
    return this._parseHeaderNameTooLong;
  }

  // parse_line_too_long - computed: false, optional: true, required: false
  private _parseLineTooLong?: number; 
  public get parseLineTooLong() {
    return this.getNumberAttribute('parse_line_too_long');
  }
  public set parseLineTooLong(value: number) {
    this._parseLineTooLong = value;
  }
  public resetParseLineTooLong() {
    this._parseLineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseLineTooLongInput() {
    return this._parseLineTooLong;
  }

  // parse_req_line_invalid_method - computed: false, optional: true, required: false
  private _parseReqLineInvalidMethod?: number; 
  public get parseReqLineInvalidMethod() {
    return this.getNumberAttribute('parse_req_line_invalid_method');
  }
  public set parseReqLineInvalidMethod(value: number) {
    this._parseReqLineInvalidMethod = value;
  }
  public resetParseReqLineInvalidMethod() {
    this._parseReqLineInvalidMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseReqLineInvalidMethodInput() {
    return this._parseReqLineInvalidMethod;
  }

  // parse_req_line_too_long - computed: false, optional: true, required: false
  private _parseReqLineTooLong?: number; 
  public get parseReqLineTooLong() {
    return this.getNumberAttribute('parse_req_line_too_long');
  }
  public set parseReqLineTooLong(value: number) {
    this._parseReqLineTooLong = value;
  }
  public resetParseReqLineTooLong() {
    this._parseReqLineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseReqLineTooLongInput() {
    return this._parseReqLineTooLong;
  }

  // parse_req_line_too_small - computed: false, optional: true, required: false
  private _parseReqLineTooSmall?: number; 
  public get parseReqLineTooSmall() {
    return this.getNumberAttribute('parse_req_line_too_small');
  }
  public set parseReqLineTooSmall(value: number) {
    this._parseReqLineTooSmall = value;
  }
  public resetParseReqLineTooSmall() {
    this._parseReqLineTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseReqLineTooSmallInput() {
    return this._parseReqLineTooSmall;
  }

  // parse_too_many_headers - computed: false, optional: true, required: false
  private _parseTooManyHeaders?: number; 
  public get parseTooManyHeaders() {
    return this.getNumberAttribute('parse_too_many_headers');
  }
  public set parseTooManyHeaders(value: number) {
    this._parseTooManyHeaders = value;
  }
  public resetParseTooManyHeaders() {
    this._parseTooManyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseTooManyHeadersInput() {
    return this._parseTooManyHeaders;
  }

  // parsereq_fail - computed: false, optional: true, required: false
  private _parsereqFail?: number; 
  public get parsereqFail() {
    return this.getNumberAttribute('parsereq_fail');
  }
  public set parsereqFail(value: number) {
    this._parsereqFail = value;
  }
  public resetParsereqFail() {
    this._parsereqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsereqFailInput() {
    return this._parsereqFail;
  }

  // partial_header - computed: false, optional: true, required: false
  private _partialHeader?: number; 
  public get partialHeader() {
    return this.getNumberAttribute('partial_header');
  }
  public set partialHeader(value: number) {
    this._partialHeader = value;
  }
  public resetPartialHeader() {
    this._partialHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialHeaderInput() {
    return this._partialHeader;
  }

  // pattern_filter1_match - computed: false, optional: true, required: false
  private _patternFilter1Match?: number; 
  public get patternFilter1Match() {
    return this.getNumberAttribute('pattern_filter1_match');
  }
  public set patternFilter1Match(value: number) {
    this._patternFilter1Match = value;
  }
  public resetPatternFilter1Match() {
    this._patternFilter1Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter1MatchInput() {
    return this._patternFilter1Match;
  }

  // pattern_filter2_match - computed: false, optional: true, required: false
  private _patternFilter2Match?: number; 
  public get patternFilter2Match() {
    return this.getNumberAttribute('pattern_filter2_match');
  }
  public set patternFilter2Match(value: number) {
    this._patternFilter2Match = value;
  }
  public resetPatternFilter2Match() {
    this._patternFilter2Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter2MatchInput() {
    return this._patternFilter2Match;
  }

  // pattern_filter3_match - computed: false, optional: true, required: false
  private _patternFilter3Match?: number; 
  public get patternFilter3Match() {
    return this.getNumberAttribute('pattern_filter3_match');
  }
  public set patternFilter3Match(value: number) {
    this._patternFilter3Match = value;
  }
  public resetPatternFilter3Match() {
    this._patternFilter3Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter3MatchInput() {
    return this._patternFilter3Match;
  }

  // pattern_filter4_match - computed: false, optional: true, required: false
  private _patternFilter4Match?: number; 
  public get patternFilter4Match() {
    return this.getNumberAttribute('pattern_filter4_match');
  }
  public set patternFilter4Match(value: number) {
    this._patternFilter4Match = value;
  }
  public resetPatternFilter4Match() {
    this._patternFilter4Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter4MatchInput() {
    return this._patternFilter4Match;
  }

  // pattern_filter5_match - computed: false, optional: true, required: false
  private _patternFilter5Match?: number; 
  public get patternFilter5Match() {
    return this.getNumberAttribute('pattern_filter5_match');
  }
  public set patternFilter5Match(value: number) {
    this._patternFilter5Match = value;
  }
  public resetPatternFilter5Match() {
    this._patternFilter5Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter5MatchInput() {
    return this._patternFilter5Match;
  }

  // pattern_filter_drop - computed: false, optional: true, required: false
  private _patternFilterDrop?: number; 
  public get patternFilterDrop() {
    return this.getNumberAttribute('pattern_filter_drop');
  }
  public set patternFilterDrop(value: number) {
    this._patternFilterDrop = value;
  }
  public resetPatternFilterDrop() {
    this._patternFilterDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilterDropInput() {
    return this._patternFilterDrop;
  }

  // pattern_not_found - computed: false, optional: true, required: false
  private _patternNotFound?: number; 
  public get patternNotFound() {
    return this.getNumberAttribute('pattern_not_found');
  }
  public set patternNotFound(value: number) {
    this._patternNotFound = value;
  }
  public resetPatternNotFound() {
    this._patternNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternNotFoundInput() {
    return this._patternNotFound;
  }

  // pattern_recognition_generic_error - computed: false, optional: true, required: false
  private _patternRecognitionGenericError?: number; 
  public get patternRecognitionGenericError() {
    return this.getNumberAttribute('pattern_recognition_generic_error');
  }
  public set patternRecognitionGenericError(value: number) {
    this._patternRecognitionGenericError = value;
  }
  public resetPatternRecognitionGenericError() {
    this._patternRecognitionGenericError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionGenericErrorInput() {
    return this._patternRecognitionGenericError;
  }

  // pattern_recognition_pattern_changed - computed: false, optional: true, required: false
  private _patternRecognitionPatternChanged?: number; 
  public get patternRecognitionPatternChanged() {
    return this.getNumberAttribute('pattern_recognition_pattern_changed');
  }
  public set patternRecognitionPatternChanged(value: number) {
    this._patternRecognitionPatternChanged = value;
  }
  public resetPatternRecognitionPatternChanged() {
    this._patternRecognitionPatternChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionPatternChangedInput() {
    return this._patternRecognitionPatternChanged;
  }

  // pattern_recognition_proceeded - computed: false, optional: true, required: false
  private _patternRecognitionProceeded?: number; 
  public get patternRecognitionProceeded() {
    return this.getNumberAttribute('pattern_recognition_proceeded');
  }
  public set patternRecognitionProceeded(value: number) {
    this._patternRecognitionProceeded = value;
  }
  public resetPatternRecognitionProceeded() {
    this._patternRecognitionProceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionProceededInput() {
    return this._patternRecognitionProceeded;
  }

  // pattern_recognition_sampling_started - computed: false, optional: true, required: false
  private _patternRecognitionSamplingStarted?: number; 
  public get patternRecognitionSamplingStarted() {
    return this.getNumberAttribute('pattern_recognition_sampling_started');
  }
  public set patternRecognitionSamplingStarted(value: number) {
    this._patternRecognitionSamplingStarted = value;
  }
  public resetPatternRecognitionSamplingStarted() {
    this._patternRecognitionSamplingStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionSamplingStartedInput() {
    return this._patternRecognitionSamplingStarted;
  }

  // pkts_connect_passthru - computed: false, optional: true, required: false
  private _pktsConnectPassthru?: number; 
  public get pktsConnectPassthru() {
    return this.getNumberAttribute('pkts_connect_passthru');
  }
  public set pktsConnectPassthru(value: number) {
    this._pktsConnectPassthru = value;
  }
  public resetPktsConnectPassthru() {
    this._pktsConnectPassthru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsConnectPassthruInput() {
    return this._pktsConnectPassthru;
  }

  // pkts_ofo - computed: false, optional: true, required: false
  private _pktsOfo?: number; 
  public get pktsOfo() {
    return this.getNumberAttribute('pkts_ofo');
  }
  public set pktsOfo(value: number) {
    this._pktsOfo = value;
  }
  public resetPktsOfo() {
    this._pktsOfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsOfoInput() {
    return this._pktsOfo;
  }

  // pkts_retrans - computed: false, optional: true, required: false
  private _pktsRetrans?: number; 
  public get pktsRetrans() {
    return this.getNumberAttribute('pkts_retrans');
  }
  public set pktsRetrans(value: number) {
    this._pktsRetrans = value;
  }
  public resetPktsRetrans() {
    this._pktsRetrans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsRetransInput() {
    return this._pktsRetrans;
  }

  // pkts_retrans_fin - computed: false, optional: true, required: false
  private _pktsRetransFin?: number; 
  public get pktsRetransFin() {
    return this.getNumberAttribute('pkts_retrans_fin');
  }
  public set pktsRetransFin(value: number) {
    this._pktsRetransFin = value;
  }
  public resetPktsRetransFin() {
    this._pktsRetransFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsRetransFinInput() {
    return this._pktsRetransFin;
  }

  // pkts_retrans_push - computed: false, optional: true, required: false
  private _pktsRetransPush?: number; 
  public get pktsRetransPush() {
    return this.getNumberAttribute('pkts_retrans_push');
  }
  public set pktsRetransPush(value: number) {
    this._pktsRetransPush = value;
  }
  public resetPktsRetransPush() {
    this._pktsRetransPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsRetransPushInput() {
    return this._pktsRetransPush;
  }

  // pkts_retrans_rst - computed: false, optional: true, required: false
  private _pktsRetransRst?: number; 
  public get pktsRetransRst() {
    return this.getNumberAttribute('pkts_retrans_rst');
  }
  public set pktsRetransRst(value: number) {
    this._pktsRetransRst = value;
  }
  public resetPktsRetransRst() {
    this._pktsRetransRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsRetransRstInput() {
    return this._pktsRetransRst;
  }

  // policy_drop - computed: false, optional: true, required: false
  private _policyDrop?: number; 
  public get policyDrop() {
    return this.getNumberAttribute('policy_drop');
  }
  public set policyDrop(value: number) {
    this._policyDrop = value;
  }
  public resetPolicyDrop() {
    this._policyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDropInput() {
    return this._policyDrop;
  }

  // policy_violation - computed: false, optional: true, required: false
  private _policyViolation?: number; 
  public get policyViolation() {
    return this.getNumberAttribute('policy_violation');
  }
  public set policyViolation(value: number) {
    this._policyViolation = value;
  }
  public resetPolicyViolation() {
    this._policyViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyViolationInput() {
    return this._policyViolation;
  }

  // port_bytes - computed: false, optional: true, required: false
  private _portBytes?: number; 
  public get portBytes() {
    return this.getNumberAttribute('port_bytes');
  }
  public set portBytes(value: number) {
    this._portBytes = value;
  }
  public resetPortBytes() {
    this._portBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBytesInput() {
    return this._portBytes;
  }

  // port_bytes_drop - computed: false, optional: true, required: false
  private _portBytesDrop?: number; 
  public get portBytesDrop() {
    return this.getNumberAttribute('port_bytes_drop');
  }
  public set portBytesDrop(value: number) {
    this._portBytesDrop = value;
  }
  public resetPortBytesDrop() {
    this._portBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBytesDropInput() {
    return this._portBytesDrop;
  }

  // port_bytes_sent - computed: false, optional: true, required: false
  private _portBytesSent?: number; 
  public get portBytesSent() {
    return this.getNumberAttribute('port_bytes_sent');
  }
  public set portBytesSent(value: number) {
    this._portBytesSent = value;
  }
  public resetPortBytesSent() {
    this._portBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBytesSentInput() {
    return this._portBytesSent;
  }

  // port_conn_limm_exceed - computed: false, optional: true, required: false
  private _portConnLimmExceed?: number; 
  public get portConnLimmExceed() {
    return this.getNumberAttribute('port_conn_limm_exceed');
  }
  public set portConnLimmExceed(value: number) {
    this._portConnLimmExceed = value;
  }
  public resetPortConnLimmExceed() {
    this._portConnLimmExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConnLimmExceedInput() {
    return this._portConnLimmExceed;
  }

  // port_conn_rate_exceed - computed: false, optional: true, required: false
  private _portConnRateExceed?: number; 
  public get portConnRateExceed() {
    return this.getNumberAttribute('port_conn_rate_exceed');
  }
  public set portConnRateExceed(value: number) {
    this._portConnRateExceed = value;
  }
  public resetPortConnRateExceed() {
    this._portConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConnRateExceedInput() {
    return this._portConnRateExceed;
  }

  // port_drop - computed: false, optional: true, required: false
  private _portDrop?: number; 
  public get portDrop() {
    return this.getNumberAttribute('port_drop');
  }
  public set portDrop(value: number) {
    this._portDrop = value;
  }
  public resetPortDrop() {
    this._portDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDropInput() {
    return this._portDrop;
  }

  // port_kbit_rate_exceed - computed: false, optional: true, required: false
  private _portKbitRateExceed?: number; 
  public get portKbitRateExceed() {
    return this.getNumberAttribute('port_kbit_rate_exceed');
  }
  public set portKbitRateExceed(value: number) {
    this._portKbitRateExceed = value;
  }
  public resetPortKbitRateExceed() {
    this._portKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKbitRateExceedInput() {
    return this._portKbitRateExceed;
  }

  // port_kbit_rate_exceed_pkt - computed: false, optional: true, required: false
  private _portKbitRateExceedPkt?: number; 
  public get portKbitRateExceedPkt() {
    return this.getNumberAttribute('port_kbit_rate_exceed_pkt');
  }
  public set portKbitRateExceedPkt(value: number) {
    this._portKbitRateExceedPkt = value;
  }
  public resetPortKbitRateExceedPkt() {
    this._portKbitRateExceedPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKbitRateExceedPktInput() {
    return this._portKbitRateExceedPkt;
  }

  // port_pkt_rate_exceed - computed: false, optional: true, required: false
  private _portPktRateExceed?: number; 
  public get portPktRateExceed() {
    return this.getNumberAttribute('port_pkt_rate_exceed');
  }
  public set portPktRateExceed(value: number) {
    this._portPktRateExceed = value;
  }
  public resetPortPktRateExceed() {
    this._portPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPktRateExceedInput() {
    return this._portPktRateExceed;
  }

  // port_pkt_sent - computed: false, optional: true, required: false
  private _portPktSent?: number; 
  public get portPktSent() {
    return this.getNumberAttribute('port_pkt_sent');
  }
  public set portPktSent(value: number) {
    this._portPktSent = value;
  }
  public resetPortPktSent() {
    this._portPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPktSentInput() {
    return this._portPktSent;
  }

  // port_rcvd - computed: false, optional: true, required: false
  private _portRcvd?: number; 
  public get portRcvd() {
    return this.getNumberAttribute('port_rcvd');
  }
  public set portRcvd(value: number) {
    this._portRcvd = value;
  }
  public resetPortRcvd() {
    this._portRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRcvdInput() {
    return this._portRcvd;
  }

  // port_src_bl - computed: false, optional: true, required: false
  private _portSrcBl?: number; 
  public get portSrcBl() {
    return this.getNumberAttribute('port_src_bl');
  }
  public set portSrcBl(value: number) {
    this._portSrcBl = value;
  }
  public resetPortSrcBl() {
    this._portSrcBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSrcBlInput() {
    return this._portSrcBl;
  }

  // port_src_escalation - computed: false, optional: true, required: false
  private _portSrcEscalation?: number; 
  public get portSrcEscalation() {
    return this.getNumberAttribute('port_src_escalation');
  }
  public set portSrcEscalation(value: number) {
    this._portSrcEscalation = value;
  }
  public resetPortSrcEscalation() {
    this._portSrcEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSrcEscalationInput() {
    return this._portSrcEscalation;
  }

  // port_syn_rate_exceed - computed: false, optional: true, required: false
  private _portSynRateExceed?: number; 
  public get portSynRateExceed() {
    return this.getNumberAttribute('port_syn_rate_exceed');
  }
  public set portSynRateExceed(value: number) {
    this._portSynRateExceed = value;
  }
  public resetPortSynRateExceed() {
    this._portSynRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSynRateExceedInput() {
    return this._portSynRateExceed;
  }

  // port_synack_rate_exceed - computed: false, optional: true, required: false
  private _portSynackRateExceed?: number; 
  public get portSynackRateExceed() {
    return this.getNumberAttribute('port_synack_rate_exceed');
  }
  public set portSynackRateExceed(value: number) {
    this._portSynackRateExceed = value;
  }
  public resetPortSynackRateExceed() {
    this._portSynackRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSynackRateExceedInput() {
    return this._portSynackRateExceed;
  }

  // processed - computed: false, optional: true, required: false
  private _processed?: number; 
  public get processed() {
    return this.getNumberAttribute('processed');
  }
  public set processed(value: number) {
    this._processed = value;
  }
  public resetProcessed() {
    this._processed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processedInput() {
    return this._processed;
  }

  // prog_conn_exceed_bl - computed: false, optional: true, required: false
  private _progConnExceedBl?: number; 
  public get progConnExceedBl() {
    return this.getNumberAttribute('prog_conn_exceed_bl');
  }
  public set progConnExceedBl(value: number) {
    this._progConnExceedBl = value;
  }
  public resetProgConnExceedBl() {
    this._progConnExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnExceedBlInput() {
    return this._progConnExceedBl;
  }

  // prog_conn_exceed_drop - computed: false, optional: true, required: false
  private _progConnExceedDrop?: number; 
  public get progConnExceedDrop() {
    return this.getNumberAttribute('prog_conn_exceed_drop');
  }
  public set progConnExceedDrop(value: number) {
    this._progConnExceedDrop = value;
  }
  public resetProgConnExceedDrop() {
    this._progConnExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnExceedDropInput() {
    return this._progConnExceedDrop;
  }

  // prog_conn_exceed_reset - computed: false, optional: true, required: false
  private _progConnExceedReset?: number; 
  public get progConnExceedReset() {
    return this.getNumberAttribute('prog_conn_exceed_reset');
  }
  public set progConnExceedReset(value: number) {
    this._progConnExceedReset = value;
  }
  public resetProgConnExceedReset() {
    this._progConnExceedReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnExceedResetInput() {
    return this._progConnExceedReset;
  }

  // prog_conn_rcvd_exceed - computed: false, optional: true, required: false
  private _progConnRcvdExceed?: number; 
  public get progConnRcvdExceed() {
    return this.getNumberAttribute('prog_conn_rcvd_exceed');
  }
  public set progConnRcvdExceed(value: number) {
    this._progConnRcvdExceed = value;
  }
  public resetProgConnRcvdExceed() {
    this._progConnRcvdExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnRcvdExceedInput() {
    return this._progConnRcvdExceed;
  }

  // prog_conn_rcvd_sent_ratio_exceed - computed: false, optional: true, required: false
  private _progConnRcvdSentRatioExceed?: number; 
  public get progConnRcvdSentRatioExceed() {
    return this.getNumberAttribute('prog_conn_rcvd_sent_ratio_exceed');
  }
  public set progConnRcvdSentRatioExceed(value: number) {
    this._progConnRcvdSentRatioExceed = value;
  }
  public resetProgConnRcvdSentRatioExceed() {
    this._progConnRcvdSentRatioExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnRcvdSentRatioExceedInput() {
    return this._progConnRcvdSentRatioExceed;
  }

  // prog_conn_samples - computed: false, optional: true, required: false
  private _progConnSamples?: number; 
  public get progConnSamples() {
    return this.getNumberAttribute('prog_conn_samples');
  }
  public set progConnSamples(value: number) {
    this._progConnSamples = value;
  }
  public resetProgConnSamples() {
    this._progConnSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnSamplesInput() {
    return this._progConnSamples;
  }

  // prog_conn_samples_processed - computed: false, optional: true, required: false
  private _progConnSamplesProcessed?: number; 
  public get progConnSamplesProcessed() {
    return this.getNumberAttribute('prog_conn_samples_processed');
  }
  public set progConnSamplesProcessed(value: number) {
    this._progConnSamplesProcessed = value;
  }
  public resetProgConnSamplesProcessed() {
    this._progConnSamplesProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnSamplesProcessedInput() {
    return this._progConnSamplesProcessed;
  }

  // prog_conn_sent_exceed - computed: false, optional: true, required: false
  private _progConnSentExceed?: number; 
  public get progConnSentExceed() {
    return this.getNumberAttribute('prog_conn_sent_exceed');
  }
  public set progConnSentExceed(value: number) {
    this._progConnSentExceed = value;
  }
  public resetProgConnSentExceed() {
    this._progConnSentExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnSentExceedInput() {
    return this._progConnSentExceed;
  }

  // prog_conn_time_exceed - computed: false, optional: true, required: false
  private _progConnTimeExceed?: number; 
  public get progConnTimeExceed() {
    return this.getNumberAttribute('prog_conn_time_exceed');
  }
  public set progConnTimeExceed(value: number) {
    this._progConnTimeExceed = value;
  }
  public resetProgConnTimeExceed() {
    this._progConnTimeExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnTimeExceedInput() {
    return this._progConnTimeExceed;
  }

  // prog_exceed_bl - computed: false, optional: true, required: false
  private _progExceedBl?: number; 
  public get progExceedBl() {
    return this.getNumberAttribute('prog_exceed_bl');
  }
  public set progExceedBl(value: number) {
    this._progExceedBl = value;
  }
  public resetProgExceedBl() {
    this._progExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progExceedBlInput() {
    return this._progExceedBl;
  }

  // prog_exceed_drop - computed: false, optional: true, required: false
  private _progExceedDrop?: number; 
  public get progExceedDrop() {
    return this.getNumberAttribute('prog_exceed_drop');
  }
  public set progExceedDrop(value: number) {
    this._progExceedDrop = value;
  }
  public resetProgExceedDrop() {
    this._progExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progExceedDropInput() {
    return this._progExceedDrop;
  }

  // prog_exceed_reset - computed: false, optional: true, required: false
  private _progExceedReset?: number; 
  public get progExceedReset() {
    return this.getNumberAttribute('prog_exceed_reset');
  }
  public set progExceedReset(value: number) {
    this._progExceedReset = value;
  }
  public resetProgExceedReset() {
    this._progExceedReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progExceedResetInput() {
    return this._progExceedReset;
  }

  // prog_first_req_time_exceed - computed: false, optional: true, required: false
  private _progFirstReqTimeExceed?: number; 
  public get progFirstReqTimeExceed() {
    return this.getNumberAttribute('prog_first_req_time_exceed');
  }
  public set progFirstReqTimeExceed(value: number) {
    this._progFirstReqTimeExceed = value;
  }
  public resetProgFirstReqTimeExceed() {
    this._progFirstReqTimeExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progFirstReqTimeExceedInput() {
    return this._progFirstReqTimeExceed;
  }

  // prog_req_resp_time_exceed - computed: false, optional: true, required: false
  private _progReqRespTimeExceed?: number; 
  public get progReqRespTimeExceed() {
    return this.getNumberAttribute('prog_req_resp_time_exceed');
  }
  public set progReqRespTimeExceed(value: number) {
    this._progReqRespTimeExceed = value;
  }
  public resetProgReqRespTimeExceed() {
    this._progReqRespTimeExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progReqRespTimeExceedInput() {
    return this._progReqRespTimeExceed;
  }

  // prog_req_samples - computed: false, optional: true, required: false
  private _progReqSamples?: number; 
  public get progReqSamples() {
    return this.getNumberAttribute('prog_req_samples');
  }
  public set progReqSamples(value: number) {
    this._progReqSamples = value;
  }
  public resetProgReqSamples() {
    this._progReqSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progReqSamplesInput() {
    return this._progReqSamples;
  }

  // prog_req_samples_processed - computed: false, optional: true, required: false
  private _progReqSamplesProcessed?: number; 
  public get progReqSamplesProcessed() {
    return this.getNumberAttribute('prog_req_samples_processed');
  }
  public set progReqSamplesProcessed(value: number) {
    this._progReqSamplesProcessed = value;
  }
  public resetProgReqSamplesProcessed() {
    this._progReqSamplesProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progReqSamplesProcessedInput() {
    return this._progReqSamplesProcessed;
  }

  // prog_request_len_exceed - computed: false, optional: true, required: false
  private _progRequestLenExceed?: number; 
  public get progRequestLenExceed() {
    return this.getNumberAttribute('prog_request_len_exceed');
  }
  public set progRequestLenExceed(value: number) {
    this._progRequestLenExceed = value;
  }
  public resetProgRequestLenExceed() {
    this._progRequestLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progRequestLenExceedInput() {
    return this._progRequestLenExceed;
  }

  // prog_resp_req_ratio_exceed - computed: false, optional: true, required: false
  private _progRespReqRatioExceed?: number; 
  public get progRespReqRatioExceed() {
    return this.getNumberAttribute('prog_resp_req_ratio_exceed');
  }
  public set progRespReqRatioExceed(value: number) {
    this._progRespReqRatioExceed = value;
  }
  public resetProgRespReqRatioExceed() {
    this._progRespReqRatioExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progRespReqRatioExceedInput() {
    return this._progRespReqRatioExceed;
  }

  // prog_resp_req_time_exceed - computed: false, optional: true, required: false
  private _progRespReqTimeExceed?: number; 
  public get progRespReqTimeExceed() {
    return this.getNumberAttribute('prog_resp_req_time_exceed');
  }
  public set progRespReqTimeExceed(value: number) {
    this._progRespReqTimeExceed = value;
  }
  public resetProgRespReqTimeExceed() {
    this._progRespReqTimeExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progRespReqTimeExceedInput() {
    return this._progRespReqTimeExceed;
  }

  // prog_response_len_exceed - computed: false, optional: true, required: false
  private _progResponseLenExceed?: number; 
  public get progResponseLenExceed() {
    return this.getNumberAttribute('prog_response_len_exceed');
  }
  public set progResponseLenExceed(value: number) {
    this._progResponseLenExceed = value;
  }
  public resetProgResponseLenExceed() {
    this._progResponseLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progResponseLenExceedInput() {
    return this._progResponseLenExceed;
  }

  // prog_win_exceed_bl - computed: false, optional: true, required: false
  private _progWinExceedBl?: number; 
  public get progWinExceedBl() {
    return this.getNumberAttribute('prog_win_exceed_bl');
  }
  public set progWinExceedBl(value: number) {
    this._progWinExceedBl = value;
  }
  public resetProgWinExceedBl() {
    this._progWinExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinExceedBlInput() {
    return this._progWinExceedBl;
  }

  // prog_win_exceed_drop - computed: false, optional: true, required: false
  private _progWinExceedDrop?: number; 
  public get progWinExceedDrop() {
    return this.getNumberAttribute('prog_win_exceed_drop');
  }
  public set progWinExceedDrop(value: number) {
    this._progWinExceedDrop = value;
  }
  public resetProgWinExceedDrop() {
    this._progWinExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinExceedDropInput() {
    return this._progWinExceedDrop;
  }

  // prog_win_exceed_reset - computed: false, optional: true, required: false
  private _progWinExceedReset?: number; 
  public get progWinExceedReset() {
    return this.getNumberAttribute('prog_win_exceed_reset');
  }
  public set progWinExceedReset(value: number) {
    this._progWinExceedReset = value;
  }
  public resetProgWinExceedReset() {
    this._progWinExceedReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinExceedResetInput() {
    return this._progWinExceedReset;
  }

  // prog_win_rcvd_exceed - computed: false, optional: true, required: false
  private _progWinRcvdExceed?: number; 
  public get progWinRcvdExceed() {
    return this.getNumberAttribute('prog_win_rcvd_exceed');
  }
  public set progWinRcvdExceed(value: number) {
    this._progWinRcvdExceed = value;
  }
  public resetProgWinRcvdExceed() {
    this._progWinRcvdExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinRcvdExceedInput() {
    return this._progWinRcvdExceed;
  }

  // prog_win_rcvd_sent_ratio_exceed - computed: false, optional: true, required: false
  private _progWinRcvdSentRatioExceed?: number; 
  public get progWinRcvdSentRatioExceed() {
    return this.getNumberAttribute('prog_win_rcvd_sent_ratio_exceed');
  }
  public set progWinRcvdSentRatioExceed(value: number) {
    this._progWinRcvdSentRatioExceed = value;
  }
  public resetProgWinRcvdSentRatioExceed() {
    this._progWinRcvdSentRatioExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinRcvdSentRatioExceedInput() {
    return this._progWinRcvdSentRatioExceed;
  }

  // prog_win_samples - computed: false, optional: true, required: false
  private _progWinSamples?: number; 
  public get progWinSamples() {
    return this.getNumberAttribute('prog_win_samples');
  }
  public set progWinSamples(value: number) {
    this._progWinSamples = value;
  }
  public resetProgWinSamples() {
    this._progWinSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinSamplesInput() {
    return this._progWinSamples;
  }

  // prog_win_samples_processed - computed: false, optional: true, required: false
  private _progWinSamplesProcessed?: number; 
  public get progWinSamplesProcessed() {
    return this.getNumberAttribute('prog_win_samples_processed');
  }
  public set progWinSamplesProcessed(value: number) {
    this._progWinSamplesProcessed = value;
  }
  public resetProgWinSamplesProcessed() {
    this._progWinSamplesProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinSamplesProcessedInput() {
    return this._progWinSamplesProcessed;
  }

  // prog_win_sent_exceed - computed: false, optional: true, required: false
  private _progWinSentExceed?: number; 
  public get progWinSentExceed() {
    return this.getNumberAttribute('prog_win_sent_exceed');
  }
  public set progWinSentExceed(value: number) {
    this._progWinSentExceed = value;
  }
  public resetProgWinSentExceed() {
    this._progWinSentExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinSentExceedInput() {
    return this._progWinSentExceed;
  }

  // referer_filter_blacklist - computed: false, optional: true, required: false
  private _refererFilterBlacklist?: number; 
  public get refererFilterBlacklist() {
    return this.getNumberAttribute('referer_filter_blacklist');
  }
  public set refererFilterBlacklist(value: number) {
    this._refererFilterBlacklist = value;
  }
  public resetRefererFilterBlacklist() {
    this._refererFilterBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererFilterBlacklistInput() {
    return this._refererFilterBlacklist;
  }

  // referer_filter_match - computed: false, optional: true, required: false
  private _refererFilterMatch?: number; 
  public get refererFilterMatch() {
    return this.getNumberAttribute('referer_filter_match');
  }
  public set refererFilterMatch(value: number) {
    this._refererFilterMatch = value;
  }
  public resetRefererFilterMatch() {
    this._refererFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererFilterMatchInput() {
    return this._refererFilterMatch;
  }

  // req - computed: false, optional: true, required: false
  private _req?: number; 
  public get req() {
    return this.getNumberAttribute('req');
  }
  public set req(value: number) {
    this._req = value;
  }
  public resetReq() {
    this._req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqInput() {
    return this._req;
  }

  // req_connect - computed: false, optional: true, required: false
  private _reqConnect?: number; 
  public get reqConnect() {
    return this.getNumberAttribute('req_connect');
  }
  public set reqConnect(value: number) {
    this._reqConnect = value;
  }
  public resetReqConnect() {
    this._reqConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqConnectInput() {
    return this._reqConnect;
  }

  // req_content_len - computed: false, optional: true, required: false
  private _reqContentLen?: number; 
  public get reqContentLen() {
    return this.getNumberAttribute('req_content_len');
  }
  public set reqContentLen(value: number) {
    this._reqContentLen = value;
  }
  public resetReqContentLen() {
    this._reqContentLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqContentLenInput() {
    return this._reqContentLen;
  }

  // req_delete - computed: false, optional: true, required: false
  private _reqDelete?: number; 
  public get reqDelete() {
    return this.getNumberAttribute('req_delete');
  }
  public set reqDelete(value: number) {
    this._reqDelete = value;
  }
  public resetReqDelete() {
    this._reqDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqDeleteInput() {
    return this._reqDelete;
  }

  // req_get - computed: false, optional: true, required: false
  private _reqGet?: number; 
  public get reqGet() {
    return this.getNumberAttribute('req_get');
  }
  public set reqGet(value: number) {
    this._reqGet = value;
  }
  public resetReqGet() {
    this._reqGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqGetInput() {
    return this._reqGet;
  }

  // req_head - computed: false, optional: true, required: false
  private _reqHead?: number; 
  public get reqHead() {
    return this.getNumberAttribute('req_head');
  }
  public set reqHead(value: number) {
    this._reqHead = value;
  }
  public resetReqHead() {
    this._reqHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHeadInput() {
    return this._reqHead;
  }

  // req_http10 - computed: false, optional: true, required: false
  private _reqHttp10?: number; 
  public get reqHttp10() {
    return this.getNumberAttribute('req_http10');
  }
  public set reqHttp10(value: number) {
    this._reqHttp10 = value;
  }
  public resetReqHttp10() {
    this._reqHttp10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHttp10Input() {
    return this._reqHttp10;
  }

  // req_http11 - computed: false, optional: true, required: false
  private _reqHttp11?: number; 
  public get reqHttp11() {
    return this.getNumberAttribute('req_http11');
  }
  public set reqHttp11(value: number) {
    this._reqHttp11 = value;
  }
  public resetReqHttp11() {
    this._reqHttp11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHttp11Input() {
    return this._reqHttp11;
  }

  // req_ofo - computed: false, optional: true, required: false
  private _reqOfo?: number; 
  public get reqOfo() {
    return this.getNumberAttribute('req_ofo');
  }
  public set reqOfo(value: number) {
    this._reqOfo = value;
  }
  public resetReqOfo() {
    this._reqOfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOfoInput() {
    return this._reqOfo;
  }

  // req_options - computed: false, optional: true, required: false
  private _reqOptions?: number; 
  public get reqOptions() {
    return this.getNumberAttribute('req_options');
  }
  public set reqOptions(value: number) {
    this._reqOptions = value;
  }
  public resetReqOptions() {
    this._reqOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOptionsInput() {
    return this._reqOptions;
  }

  // req_post - computed: false, optional: true, required: false
  private _reqPost?: number; 
  public get reqPost() {
    return this.getNumberAttribute('req_post');
  }
  public set reqPost(value: number) {
    this._reqPost = value;
  }
  public resetReqPost() {
    this._reqPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqPostInput() {
    return this._reqPost;
  }

  // req_put - computed: false, optional: true, required: false
  private _reqPut?: number; 
  public get reqPut() {
    return this.getNumberAttribute('req_put');
  }
  public set reqPut(value: number) {
    this._reqPut = value;
  }
  public resetReqPut() {
    this._reqPut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqPutInput() {
    return this._reqPut;
  }

  // req_retran - computed: false, optional: true, required: false
  private _reqRetran?: number; 
  public get reqRetran() {
    return this.getNumberAttribute('req_retran');
  }
  public set reqRetran(value: number) {
    this._reqRetran = value;
  }
  public resetReqRetran() {
    this._reqRetran = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRetranInput() {
    return this._reqRetran;
  }

  // req_sz_16k - computed: false, optional: true, required: false
  private _reqSz16K?: number; 
  public get reqSz16K() {
    return this.getNumberAttribute('req_sz_16k');
  }
  public set reqSz16K(value: number) {
    this._reqSz16K = value;
  }
  public resetReqSz16K() {
    this._reqSz16K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz16KInput() {
    return this._reqSz16K;
  }

  // req_sz_1k - computed: false, optional: true, required: false
  private _reqSz1K?: number; 
  public get reqSz1K() {
    return this.getNumberAttribute('req_sz_1k');
  }
  public set reqSz1K(value: number) {
    this._reqSz1K = value;
  }
  public resetReqSz1K() {
    this._reqSz1K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz1KInput() {
    return this._reqSz1K;
  }

  // req_sz_256k - computed: false, optional: true, required: false
  private _reqSz256K?: number; 
  public get reqSz256K() {
    return this.getNumberAttribute('req_sz_256k');
  }
  public set reqSz256K(value: number) {
    this._reqSz256K = value;
  }
  public resetReqSz256K() {
    this._reqSz256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz256KInput() {
    return this._reqSz256K;
  }

  // req_sz_2k - computed: false, optional: true, required: false
  private _reqSz2K?: number; 
  public get reqSz2K() {
    return this.getNumberAttribute('req_sz_2k');
  }
  public set reqSz2K(value: number) {
    this._reqSz2K = value;
  }
  public resetReqSz2K() {
    this._reqSz2K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz2KInput() {
    return this._reqSz2K;
  }

  // req_sz_32k - computed: false, optional: true, required: false
  private _reqSz32K?: number; 
  public get reqSz32K() {
    return this.getNumberAttribute('req_sz_32k');
  }
  public set reqSz32K(value: number) {
    this._reqSz32K = value;
  }
  public resetReqSz32K() {
    this._reqSz32K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz32KInput() {
    return this._reqSz32K;
  }

  // req_sz_4k - computed: false, optional: true, required: false
  private _reqSz4K?: number; 
  public get reqSz4K() {
    return this.getNumberAttribute('req_sz_4k');
  }
  public set reqSz4K(value: number) {
    this._reqSz4K = value;
  }
  public resetReqSz4K() {
    this._reqSz4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz4KInput() {
    return this._reqSz4K;
  }

  // req_sz_64k - computed: false, optional: true, required: false
  private _reqSz64K?: number; 
  public get reqSz64K() {
    return this.getNumberAttribute('req_sz_64k');
  }
  public set reqSz64K(value: number) {
    this._reqSz64K = value;
  }
  public resetReqSz64K() {
    this._reqSz64K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz64KInput() {
    return this._reqSz64K;
  }

  // req_sz_8k - computed: false, optional: true, required: false
  private _reqSz8K?: number; 
  public get reqSz8K() {
    return this.getNumberAttribute('req_sz_8k');
  }
  public set reqSz8K(value: number) {
    this._reqSz8K = value;
  }
  public resetReqSz8K() {
    this._reqSz8K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz8KInput() {
    return this._reqSz8K;
  }

  // req_sz_gt_256k - computed: false, optional: true, required: false
  private _reqSzGt256K?: number; 
  public get reqSzGt256K() {
    return this.getNumberAttribute('req_sz_gt_256k');
  }
  public set reqSzGt256K(value: number) {
    this._reqSzGt256K = value;
  }
  public resetReqSzGt256K() {
    this._reqSzGt256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSzGt256KInput() {
    return this._reqSzGt256K;
  }

  // req_trace - computed: false, optional: true, required: false
  private _reqTrace?: number; 
  public get reqTrace() {
    return this.getNumberAttribute('req_trace');
  }
  public set reqTrace(value: number) {
    this._reqTrace = value;
  }
  public resetReqTrace() {
    this._reqTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqTraceInput() {
    return this._reqTrace;
  }

  // req_unknown - computed: false, optional: true, required: false
  private _reqUnknown?: number; 
  public get reqUnknown() {
    return this.getNumberAttribute('req_unknown');
  }
  public set reqUnknown(value: number) {
    this._reqUnknown = value;
  }
  public resetReqUnknown() {
    this._reqUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqUnknownInput() {
    return this._reqUnknown;
  }

  // resp_code_1xx - computed: false, optional: true, required: false
  private _respCode1Xx?: number; 
  public get respCode1Xx() {
    return this.getNumberAttribute('resp_code_1xx');
  }
  public set respCode1Xx(value: number) {
    this._respCode1Xx = value;
  }
  public resetRespCode1Xx() {
    this._respCode1Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCode1XxInput() {
    return this._respCode1Xx;
  }

  // resp_code_2xx - computed: false, optional: true, required: false
  private _respCode2Xx?: number; 
  public get respCode2Xx() {
    return this.getNumberAttribute('resp_code_2xx');
  }
  public set respCode2Xx(value: number) {
    this._respCode2Xx = value;
  }
  public resetRespCode2Xx() {
    this._respCode2Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCode2XxInput() {
    return this._respCode2Xx;
  }

  // resp_code_3xx - computed: false, optional: true, required: false
  private _respCode3Xx?: number; 
  public get respCode3Xx() {
    return this.getNumberAttribute('resp_code_3xx');
  }
  public set respCode3Xx(value: number) {
    this._respCode3Xx = value;
  }
  public resetRespCode3Xx() {
    this._respCode3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCode3XxInput() {
    return this._respCode3Xx;
  }

  // resp_code_4xx - computed: false, optional: true, required: false
  private _respCode4Xx?: number; 
  public get respCode4Xx() {
    return this.getNumberAttribute('resp_code_4xx');
  }
  public set respCode4Xx(value: number) {
    this._respCode4Xx = value;
  }
  public resetRespCode4Xx() {
    this._respCode4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCode4XxInput() {
    return this._respCode4Xx;
  }

  // resp_code_5xx - computed: false, optional: true, required: false
  private _respCode5Xx?: number; 
  public get respCode5Xx() {
    return this.getNumberAttribute('resp_code_5xx');
  }
  public set respCode5Xx(value: number) {
    this._respCode5Xx = value;
  }
  public resetRespCode5Xx() {
    this._respCode5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCode5XxInput() {
    return this._respCode5Xx;
  }

  // resp_code_other - computed: false, optional: true, required: false
  private _respCodeOther?: number; 
  public get respCodeOther() {
    return this.getNumberAttribute('resp_code_other');
  }
  public set respCodeOther(value: number) {
    this._respCodeOther = value;
  }
  public resetRespCodeOther() {
    this._respCodeOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCodeOtherInput() {
    return this._respCodeOther;
  }

  // resp_mib_chunk_bad - computed: false, optional: true, required: false
  private _respMibChunkBad?: number; 
  public get respMibChunkBad() {
    return this.getNumberAttribute('resp_mib_chunk_bad');
  }
  public set respMibChunkBad(value: number) {
    this._respMibChunkBad = value;
  }
  public resetRespMibChunkBad() {
    this._respMibChunkBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respMibChunkBadInput() {
    return this._respMibChunkBad;
  }

  // retransmit_excd - computed: false, optional: true, required: false
  private _retransmitExcd?: number; 
  public get retransmitExcd() {
    return this.getNumberAttribute('retransmit_excd');
  }
  public set retransmitExcd(value: number) {
    this._retransmitExcd = value;
  }
  public resetRetransmitExcd() {
    this._retransmitExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitExcdInput() {
    return this._retransmitExcd;
  }

  // rsp_chunk - computed: false, optional: true, required: false
  private _rspChunk?: number; 
  public get rspChunk() {
    return this.getNumberAttribute('rsp_chunk');
  }
  public set rspChunk(value: number) {
    this._rspChunk = value;
  }
  public resetRspChunk() {
    this._rspChunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspChunkInput() {
    return this._rspChunk;
  }

  // rst_cookie_fail - computed: false, optional: true, required: false
  private _rstCookieFail?: number; 
  public get rstCookieFail() {
    return this.getNumberAttribute('rst_cookie_fail');
  }
  public set rstCookieFail(value: number) {
    this._rstCookieFail = value;
  }
  public resetRstCookieFail() {
    this._rstCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstCookieFailInput() {
    return this._rstCookieFail;
  }

  // secondary_port_conn_limm_exceed - computed: false, optional: true, required: false
  private _secondaryPortConnLimmExceed?: number; 
  public get secondaryPortConnLimmExceed() {
    return this.getNumberAttribute('secondary_port_conn_limm_exceed');
  }
  public set secondaryPortConnLimmExceed(value: number) {
    this._secondaryPortConnLimmExceed = value;
  }
  public resetSecondaryPortConnLimmExceed() {
    this._secondaryPortConnLimmExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortConnLimmExceedInput() {
    return this._secondaryPortConnLimmExceed;
  }

  // secondary_port_conn_rate_exceed - computed: false, optional: true, required: false
  private _secondaryPortConnRateExceed?: number; 
  public get secondaryPortConnRateExceed() {
    return this.getNumberAttribute('secondary_port_conn_rate_exceed');
  }
  public set secondaryPortConnRateExceed(value: number) {
    this._secondaryPortConnRateExceed = value;
  }
  public resetSecondaryPortConnRateExceed() {
    this._secondaryPortConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortConnRateExceedInput() {
    return this._secondaryPortConnRateExceed;
  }

  // secondary_port_hit - computed: false, optional: true, required: false
  private _secondaryPortHit?: number; 
  public get secondaryPortHit() {
    return this.getNumberAttribute('secondary_port_hit');
  }
  public set secondaryPortHit(value: number) {
    this._secondaryPortHit = value;
  }
  public resetSecondaryPortHit() {
    this._secondaryPortHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortHitInput() {
    return this._secondaryPortHit;
  }

  // secondary_port_kbit_rate_exceed - computed: false, optional: true, required: false
  private _secondaryPortKbitRateExceed?: number; 
  public get secondaryPortKbitRateExceed() {
    return this.getNumberAttribute('secondary_port_kbit_rate_exceed');
  }
  public set secondaryPortKbitRateExceed(value: number) {
    this._secondaryPortKbitRateExceed = value;
  }
  public resetSecondaryPortKbitRateExceed() {
    this._secondaryPortKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortKbitRateExceedInput() {
    return this._secondaryPortKbitRateExceed;
  }

  // secondary_port_kbit_rate_exceed_pkt - computed: false, optional: true, required: false
  private _secondaryPortKbitRateExceedPkt?: number; 
  public get secondaryPortKbitRateExceedPkt() {
    return this.getNumberAttribute('secondary_port_kbit_rate_exceed_pkt');
  }
  public set secondaryPortKbitRateExceedPkt(value: number) {
    this._secondaryPortKbitRateExceedPkt = value;
  }
  public resetSecondaryPortKbitRateExceedPkt() {
    this._secondaryPortKbitRateExceedPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortKbitRateExceedPktInput() {
    return this._secondaryPortKbitRateExceedPkt;
  }

  // secondary_port_pkt_rate_exceed - computed: false, optional: true, required: false
  private _secondaryPortPktRateExceed?: number; 
  public get secondaryPortPktRateExceed() {
    return this.getNumberAttribute('secondary_port_pkt_rate_exceed');
  }
  public set secondaryPortPktRateExceed(value: number) {
    this._secondaryPortPktRateExceed = value;
  }
  public resetSecondaryPortPktRateExceed() {
    this._secondaryPortPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortPktRateExceedInput() {
    return this._secondaryPortPktRateExceed;
  }

  // sess_aged - computed: false, optional: true, required: false
  private _sessAged?: number; 
  public get sessAged() {
    return this.getNumberAttribute('sess_aged');
  }
  public set sessAged(value: number) {
    this._sessAged = value;
  }
  public resetSessAged() {
    this._sessAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessAgedInput() {
    return this._sessAged;
  }

  // sess_create - computed: false, optional: true, required: false
  private _sessCreate?: number; 
  public get sessCreate() {
    return this.getNumberAttribute('sess_create');
  }
  public set sessCreate(value: number) {
    this._sessCreate = value;
  }
  public resetSessCreate() {
    this._sessCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateInput() {
    return this._sessCreate;
  }

  // sess_create_inbound - computed: false, optional: true, required: false
  private _sessCreateInbound?: number; 
  public get sessCreateInbound() {
    return this.getNumberAttribute('sess_create_inbound');
  }
  public set sessCreateInbound(value: number) {
    this._sessCreateInbound = value;
  }
  public resetSessCreateInbound() {
    this._sessCreateInbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateInboundInput() {
    return this._sessCreateInbound;
  }

  // sess_create_outbound - computed: false, optional: true, required: false
  private _sessCreateOutbound?: number; 
  public get sessCreateOutbound() {
    return this.getNumberAttribute('sess_create_outbound');
  }
  public set sessCreateOutbound(value: number) {
    this._sessCreateOutbound = value;
  }
  public resetSessCreateOutbound() {
    this._sessCreateOutbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateOutboundInput() {
    return this._sessCreateOutbound;
  }

  // sflow_external_packets_sent - computed: false, optional: true, required: false
  private _sflowExternalPacketsSent?: number; 
  public get sflowExternalPacketsSent() {
    return this.getNumberAttribute('sflow_external_packets_sent');
  }
  public set sflowExternalPacketsSent(value: number) {
    this._sflowExternalPacketsSent = value;
  }
  public resetSflowExternalPacketsSent() {
    this._sflowExternalPacketsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowExternalPacketsSentInput() {
    return this._sflowExternalPacketsSent;
  }

  // sflow_external_samples_packed - computed: false, optional: true, required: false
  private _sflowExternalSamplesPacked?: number; 
  public get sflowExternalSamplesPacked() {
    return this.getNumberAttribute('sflow_external_samples_packed');
  }
  public set sflowExternalSamplesPacked(value: number) {
    this._sflowExternalSamplesPacked = value;
  }
  public resetSflowExternalSamplesPacked() {
    this._sflowExternalSamplesPacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowExternalSamplesPackedInput() {
    return this._sflowExternalSamplesPacked;
  }

  // sflow_internal_packets_sent - computed: false, optional: true, required: false
  private _sflowInternalPacketsSent?: number; 
  public get sflowInternalPacketsSent() {
    return this.getNumberAttribute('sflow_internal_packets_sent');
  }
  public set sflowInternalPacketsSent(value: number) {
    this._sflowInternalPacketsSent = value;
  }
  public resetSflowInternalPacketsSent() {
    this._sflowInternalPacketsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInternalPacketsSentInput() {
    return this._sflowInternalPacketsSent;
  }

  // sflow_internal_samples_packed - computed: false, optional: true, required: false
  private _sflowInternalSamplesPacked?: number; 
  public get sflowInternalSamplesPacked() {
    return this.getNumberAttribute('sflow_internal_samples_packed');
  }
  public set sflowInternalSamplesPacked(value: number) {
    this._sflowInternalSamplesPacked = value;
  }
  public resetSflowInternalSamplesPacked() {
    this._sflowInternalSamplesPacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInternalSamplesPackedInput() {
    return this._sflowInternalSamplesPacked;
  }

  // slow_post - computed: false, optional: true, required: false
  private _slowPost?: number; 
  public get slowPost() {
    return this.getNumberAttribute('slow_post');
  }
  public set slowPost(value: number) {
    this._slowPost = value;
  }
  public resetSlowPost() {
    this._slowPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowPostInput() {
    return this._slowPost;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // src_ack_auth_fail - computed: false, optional: true, required: false
  private _srcAckAuthFail?: number; 
  public get srcAckAuthFail() {
    return this.getNumberAttribute('src_ack_auth_fail');
  }
  public set srcAckAuthFail(value: number) {
    this._srcAckAuthFail = value;
  }
  public resetSrcAckAuthFail() {
    this._srcAckAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckAuthFailInput() {
    return this._srcAckAuthFail;
  }

  // src_ack_retry_blacklist - computed: false, optional: true, required: false
  private _srcAckRetryBlacklist?: number; 
  public get srcAckRetryBlacklist() {
    return this.getNumberAttribute('src_ack_retry_blacklist');
  }
  public set srcAckRetryBlacklist(value: number) {
    this._srcAckRetryBlacklist = value;
  }
  public resetSrcAckRetryBlacklist() {
    this._srcAckRetryBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryBlacklistInput() {
    return this._srcAckRetryBlacklist;
  }

  // src_ack_retry_gap_drop - computed: false, optional: true, required: false
  private _srcAckRetryGapDrop?: number; 
  public get srcAckRetryGapDrop() {
    return this.getNumberAttribute('src_ack_retry_gap_drop');
  }
  public set srcAckRetryGapDrop(value: number) {
    this._srcAckRetryGapDrop = value;
  }
  public resetSrcAckRetryGapDrop() {
    this._srcAckRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryGapDropInput() {
    return this._srcAckRetryGapDrop;
  }

  // src_ack_retry_init - computed: false, optional: true, required: false
  private _srcAckRetryInit?: number; 
  public get srcAckRetryInit() {
    return this.getNumberAttribute('src_ack_retry_init');
  }
  public set srcAckRetryInit(value: number) {
    this._srcAckRetryInit = value;
  }
  public resetSrcAckRetryInit() {
    this._srcAckRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryInitInput() {
    return this._srcAckRetryInit;
  }

  // src_ack_retry_reset - computed: false, optional: true, required: false
  private _srcAckRetryReset?: number; 
  public get srcAckRetryReset() {
    return this.getNumberAttribute('src_ack_retry_reset');
  }
  public set srcAckRetryReset(value: number) {
    this._srcAckRetryReset = value;
  }
  public resetSrcAckRetryReset() {
    this._srcAckRetryReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryResetInput() {
    return this._srcAckRetryReset;
  }

  // src_ack_retry_rto_fail - computed: false, optional: true, required: false
  private _srcAckRetryRtoFail?: number; 
  public get srcAckRetryRtoFail() {
    return this.getNumberAttribute('src_ack_retry_rto_fail');
  }
  public set srcAckRetryRtoFail(value: number) {
    this._srcAckRetryRtoFail = value;
  }
  public resetSrcAckRetryRtoFail() {
    this._srcAckRetryRtoFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryRtoFailInput() {
    return this._srcAckRetryRtoFail;
  }

  // src_ack_retry_rto_pass - computed: false, optional: true, required: false
  private _srcAckRetryRtoPass?: number; 
  public get srcAckRetryRtoPass() {
    return this.getNumberAttribute('src_ack_retry_rto_pass');
  }
  public set srcAckRetryRtoPass(value: number) {
    this._srcAckRetryRtoPass = value;
  }
  public resetSrcAckRetryRtoPass() {
    this._srcAckRetryRtoPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryRtoPassInput() {
    return this._srcAckRetryRtoPass;
  }

  // src_ack_retry_rto_progress - computed: false, optional: true, required: false
  private _srcAckRetryRtoProgress?: number; 
  public get srcAckRetryRtoProgress() {
    return this.getNumberAttribute('src_ack_retry_rto_progress');
  }
  public set srcAckRetryRtoProgress(value: number) {
    this._srcAckRetryRtoProgress = value;
  }
  public resetSrcAckRetryRtoProgress() {
    this._srcAckRetryRtoProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryRtoProgressInput() {
    return this._srcAckRetryRtoProgress;
  }

  // src_ack_retry_timeout - computed: false, optional: true, required: false
  private _srcAckRetryTimeout?: number; 
  public get srcAckRetryTimeout() {
    return this.getNumberAttribute('src_ack_retry_timeout');
  }
  public set srcAckRetryTimeout(value: number) {
    this._srcAckRetryTimeout = value;
  }
  public resetSrcAckRetryTimeout() {
    this._srcAckRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryTimeoutInput() {
    return this._srcAckRetryTimeout;
  }

  // src_auth_drop - computed: false, optional: true, required: false
  private _srcAuthDrop?: number; 
  public get srcAuthDrop() {
    return this.getNumberAttribute('src_auth_drop');
  }
  public set srcAuthDrop(value: number) {
    this._srcAuthDrop = value;
  }
  public resetSrcAuthDrop() {
    this._srcAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAuthDropInput() {
    return this._srcAuthDrop;
  }

  // src_challenge_js_fail - computed: false, optional: true, required: false
  private _srcChallengeJsFail?: number; 
  public get srcChallengeJsFail() {
    return this.getNumberAttribute('src_challenge_js_fail');
  }
  public set srcChallengeJsFail(value: number) {
    this._srcChallengeJsFail = value;
  }
  public resetSrcChallengeJsFail() {
    this._srcChallengeJsFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcChallengeJsFailInput() {
    return this._srcChallengeJsFail;
  }

  // src_challenge_ud_fail - computed: false, optional: true, required: false
  private _srcChallengeUdFail?: number; 
  public get srcChallengeUdFail() {
    return this.getNumberAttribute('src_challenge_ud_fail');
  }
  public set srcChallengeUdFail(value: number) {
    this._srcChallengeUdFail = value;
  }
  public resetSrcChallengeUdFail() {
    this._srcChallengeUdFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcChallengeUdFailInput() {
    return this._srcChallengeUdFail;
  }

  // src_conn_ofo_rate_excd - computed: false, optional: true, required: false
  private _srcConnOfoRateExcd?: number; 
  public get srcConnOfoRateExcd() {
    return this.getNumberAttribute('src_conn_ofo_rate_excd');
  }
  public set srcConnOfoRateExcd(value: number) {
    this._srcConnOfoRateExcd = value;
  }
  public resetSrcConnOfoRateExcd() {
    this._srcConnOfoRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnOfoRateExcdInput() {
    return this._srcConnOfoRateExcd;
  }

  // src_conn_pkt_rate_excd - computed: false, optional: true, required: false
  private _srcConnPktRateExcd?: number; 
  public get srcConnPktRateExcd() {
    return this.getNumberAttribute('src_conn_pkt_rate_excd');
  }
  public set srcConnPktRateExcd(value: number) {
    this._srcConnPktRateExcd = value;
  }
  public resetSrcConnPktRateExcd() {
    this._srcConnPktRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnPktRateExcdInput() {
    return this._srcConnPktRateExcd;
  }

  // src_conn_rexmit_rate_excd - computed: false, optional: true, required: false
  private _srcConnRexmitRateExcd?: number; 
  public get srcConnRexmitRateExcd() {
    return this.getNumberAttribute('src_conn_rexmit_rate_excd');
  }
  public set srcConnRexmitRateExcd(value: number) {
    this._srcConnRexmitRateExcd = value;
  }
  public resetSrcConnRexmitRateExcd() {
    this._srcConnRexmitRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnRexmitRateExcdInput() {
    return this._srcConnRexmitRateExcd;
  }

  // src_conn_zwindow_rate_excd - computed: false, optional: true, required: false
  private _srcConnZwindowRateExcd?: number; 
  public get srcConnZwindowRateExcd() {
    return this.getNumberAttribute('src_conn_zwindow_rate_excd');
  }
  public set srcConnZwindowRateExcd(value: number) {
    this._srcConnZwindowRateExcd = value;
  }
  public resetSrcConnZwindowRateExcd() {
    this._srcConnZwindowRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnZwindowRateExcdInput() {
    return this._srcConnZwindowRateExcd;
  }

  // src_create_conn_non_syn_dropped - computed: false, optional: true, required: false
  private _srcCreateConnNonSynDropped?: number; 
  public get srcCreateConnNonSynDropped() {
    return this.getNumberAttribute('src_create_conn_non_syn_dropped');
  }
  public set srcCreateConnNonSynDropped(value: number) {
    this._srcCreateConnNonSynDropped = value;
  }
  public resetSrcCreateConnNonSynDropped() {
    this._srcCreateConnNonSynDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCreateConnNonSynDroppedInput() {
    return this._srcCreateConnNonSynDropped;
  }

  // src_dos_policy_violation - computed: false, optional: true, required: false
  private _srcDosPolicyViolation?: number; 
  public get srcDosPolicyViolation() {
    return this.getNumberAttribute('src_dos_policy_violation');
  }
  public set srcDosPolicyViolation(value: number) {
    this._srcDosPolicyViolation = value;
  }
  public resetSrcDosPolicyViolation() {
    this._srcDosPolicyViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDosPolicyViolationInput() {
    return this._srcDosPolicyViolation;
  }

  // src_drop - computed: false, optional: true, required: false
  private _srcDrop?: number; 
  public get srcDrop() {
    return this.getNumberAttribute('src_drop');
  }
  public set srcDrop(value: number) {
    this._srcDrop = value;
  }
  public resetSrcDrop() {
    this._srcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDropInput() {
    return this._srcDrop;
  }

  // src_filter1_match - computed: false, optional: true, required: false
  private _srcFilter1Match?: number; 
  public get srcFilter1Match() {
    return this.getNumberAttribute('src_filter1_match');
  }
  public set srcFilter1Match(value: number) {
    this._srcFilter1Match = value;
  }
  public resetSrcFilter1Match() {
    this._srcFilter1Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter1MatchInput() {
    return this._srcFilter1Match;
  }

  // src_filter2_match - computed: false, optional: true, required: false
  private _srcFilter2Match?: number; 
  public get srcFilter2Match() {
    return this.getNumberAttribute('src_filter2_match');
  }
  public set srcFilter2Match(value: number) {
    this._srcFilter2Match = value;
  }
  public resetSrcFilter2Match() {
    this._srcFilter2Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter2MatchInput() {
    return this._srcFilter2Match;
  }

  // src_filter3_match - computed: false, optional: true, required: false
  private _srcFilter3Match?: number; 
  public get srcFilter3Match() {
    return this.getNumberAttribute('src_filter3_match');
  }
  public set srcFilter3Match(value: number) {
    this._srcFilter3Match = value;
  }
  public resetSrcFilter3Match() {
    this._srcFilter3Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter3MatchInput() {
    return this._srcFilter3Match;
  }

  // src_filter4_match - computed: false, optional: true, required: false
  private _srcFilter4Match?: number; 
  public get srcFilter4Match() {
    return this.getNumberAttribute('src_filter4_match');
  }
  public set srcFilter4Match(value: number) {
    this._srcFilter4Match = value;
  }
  public resetSrcFilter4Match() {
    this._srcFilter4Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter4MatchInput() {
    return this._srcFilter4Match;
  }

  // src_filter5_match - computed: false, optional: true, required: false
  private _srcFilter5Match?: number; 
  public get srcFilter5Match() {
    return this.getNumberAttribute('src_filter5_match');
  }
  public set srcFilter5Match(value: number) {
    this._srcFilter5Match = value;
  }
  public resetSrcFilter5Match() {
    this._srcFilter5Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter5MatchInput() {
    return this._srcFilter5Match;
  }

  // src_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcFilterActionBlacklist?: number; 
  public get srcFilterActionBlacklist() {
    return this.getNumberAttribute('src_filter_action_blacklist');
  }
  public set srcFilterActionBlacklist(value: number) {
    this._srcFilterActionBlacklist = value;
  }
  public resetSrcFilterActionBlacklist() {
    this._srcFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionBlacklistInput() {
    return this._srcFilterActionBlacklist;
  }

  // src_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcFilterActionDefaultPass?: number; 
  public get srcFilterActionDefaultPass() {
    return this.getNumberAttribute('src_filter_action_default_pass');
  }
  public set srcFilterActionDefaultPass(value: number) {
    this._srcFilterActionDefaultPass = value;
  }
  public resetSrcFilterActionDefaultPass() {
    this._srcFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionDefaultPassInput() {
    return this._srcFilterActionDefaultPass;
  }

  // src_filter_action_drop - computed: false, optional: true, required: false
  private _srcFilterActionDrop?: number; 
  public get srcFilterActionDrop() {
    return this.getNumberAttribute('src_filter_action_drop');
  }
  public set srcFilterActionDrop(value: number) {
    this._srcFilterActionDrop = value;
  }
  public resetSrcFilterActionDrop() {
    this._srcFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionDropInput() {
    return this._srcFilterActionDrop;
  }

  // src_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcFilterActionWhitelist?: number; 
  public get srcFilterActionWhitelist() {
    return this.getNumberAttribute('src_filter_action_whitelist');
  }
  public set srcFilterActionWhitelist(value: number) {
    this._srcFilterActionWhitelist = value;
  }
  public resetSrcFilterActionWhitelist() {
    this._srcFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionWhitelistInput() {
    return this._srcFilterActionWhitelist;
  }

  // src_filter_auth_fail - computed: false, optional: true, required: false
  private _srcFilterAuthFail?: number; 
  public get srcFilterAuthFail() {
    return this.getNumberAttribute('src_filter_auth_fail');
  }
  public set srcFilterAuthFail(value: number) {
    this._srcFilterAuthFail = value;
  }
  public resetSrcFilterAuthFail() {
    this._srcFilterAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterAuthFailInput() {
    return this._srcFilterAuthFail;
  }

  // src_filter_none_match - computed: false, optional: true, required: false
  private _srcFilterNoneMatch?: number; 
  public get srcFilterNoneMatch() {
    return this.getNumberAttribute('src_filter_none_match');
  }
  public set srcFilterNoneMatch(value: number) {
    this._srcFilterNoneMatch = value;
  }
  public resetSrcFilterNoneMatch() {
    this._srcFilterNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterNoneMatchInput() {
    return this._srcFilterNoneMatch;
  }

  // src_filter_total_not_match - computed: false, optional: true, required: false
  private _srcFilterTotalNotMatch?: number; 
  public get srcFilterTotalNotMatch() {
    return this.getNumberAttribute('src_filter_total_not_match');
  }
  public set srcFilterTotalNotMatch(value: number) {
    this._srcFilterTotalNotMatch = value;
  }
  public resetSrcFilterTotalNotMatch() {
    this._srcFilterTotalNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterTotalNotMatchInput() {
    return this._srcFilterTotalNotMatch;
  }

  // src_frag_drop - computed: false, optional: true, required: false
  private _srcFragDrop?: number; 
  public get srcFragDrop() {
    return this.getNumberAttribute('src_frag_drop');
  }
  public set srcFragDrop(value: number) {
    this._srcFragDrop = value;
  }
  public resetSrcFragDrop() {
    this._srcFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFragDropInput() {
    return this._srcFragDrop;
  }

  // src_header_filter10_drop - computed: false, optional: true, required: false
  private _srcHeaderFilter10Drop?: number; 
  public get srcHeaderFilter10Drop() {
    return this.getNumberAttribute('src_header_filter10_drop');
  }
  public set srcHeaderFilter10Drop(value: number) {
    this._srcHeaderFilter10Drop = value;
  }
  public resetSrcHeaderFilter10Drop() {
    this._srcHeaderFilter10Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter10DropInput() {
    return this._srcHeaderFilter10Drop;
  }

  // src_header_filter10_match - computed: false, optional: true, required: false
  private _srcHeaderFilter10Match?: number; 
  public get srcHeaderFilter10Match() {
    return this.getNumberAttribute('src_header_filter10_match');
  }
  public set srcHeaderFilter10Match(value: number) {
    this._srcHeaderFilter10Match = value;
  }
  public resetSrcHeaderFilter10Match() {
    this._srcHeaderFilter10Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter10MatchInput() {
    return this._srcHeaderFilter10Match;
  }

  // src_header_filter1_drop - computed: false, optional: true, required: false
  private _srcHeaderFilter1Drop?: number; 
  public get srcHeaderFilter1Drop() {
    return this.getNumberAttribute('src_header_filter1_drop');
  }
  public set srcHeaderFilter1Drop(value: number) {
    this._srcHeaderFilter1Drop = value;
  }
  public resetSrcHeaderFilter1Drop() {
    this._srcHeaderFilter1Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter1DropInput() {
    return this._srcHeaderFilter1Drop;
  }

  // src_header_filter1_match - computed: false, optional: true, required: false
  private _srcHeaderFilter1Match?: number; 
  public get srcHeaderFilter1Match() {
    return this.getNumberAttribute('src_header_filter1_match');
  }
  public set srcHeaderFilter1Match(value: number) {
    this._srcHeaderFilter1Match = value;
  }
  public resetSrcHeaderFilter1Match() {
    this._srcHeaderFilter1Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter1MatchInput() {
    return this._srcHeaderFilter1Match;
  }

  // src_header_filter2_drop - computed: false, optional: true, required: false
  private _srcHeaderFilter2Drop?: number; 
  public get srcHeaderFilter2Drop() {
    return this.getNumberAttribute('src_header_filter2_drop');
  }
  public set srcHeaderFilter2Drop(value: number) {
    this._srcHeaderFilter2Drop = value;
  }
  public resetSrcHeaderFilter2Drop() {
    this._srcHeaderFilter2Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter2DropInput() {
    return this._srcHeaderFilter2Drop;
  }

  // src_header_filter2_match - computed: false, optional: true, required: false
  private _srcHeaderFilter2Match?: number; 
  public get srcHeaderFilter2Match() {
    return this.getNumberAttribute('src_header_filter2_match');
  }
  public set srcHeaderFilter2Match(value: number) {
    this._srcHeaderFilter2Match = value;
  }
  public resetSrcHeaderFilter2Match() {
    this._srcHeaderFilter2Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter2MatchInput() {
    return this._srcHeaderFilter2Match;
  }

  // src_header_filter3_drop - computed: false, optional: true, required: false
  private _srcHeaderFilter3Drop?: number; 
  public get srcHeaderFilter3Drop() {
    return this.getNumberAttribute('src_header_filter3_drop');
  }
  public set srcHeaderFilter3Drop(value: number) {
    this._srcHeaderFilter3Drop = value;
  }
  public resetSrcHeaderFilter3Drop() {
    this._srcHeaderFilter3Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter3DropInput() {
    return this._srcHeaderFilter3Drop;
  }

  // src_header_filter3_match - computed: false, optional: true, required: false
  private _srcHeaderFilter3Match?: number; 
  public get srcHeaderFilter3Match() {
    return this.getNumberAttribute('src_header_filter3_match');
  }
  public set srcHeaderFilter3Match(value: number) {
    this._srcHeaderFilter3Match = value;
  }
  public resetSrcHeaderFilter3Match() {
    this._srcHeaderFilter3Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter3MatchInput() {
    return this._srcHeaderFilter3Match;
  }

  // src_header_filter4_drop - computed: false, optional: true, required: false
  private _srcHeaderFilter4Drop?: number; 
  public get srcHeaderFilter4Drop() {
    return this.getNumberAttribute('src_header_filter4_drop');
  }
  public set srcHeaderFilter4Drop(value: number) {
    this._srcHeaderFilter4Drop = value;
  }
  public resetSrcHeaderFilter4Drop() {
    this._srcHeaderFilter4Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter4DropInput() {
    return this._srcHeaderFilter4Drop;
  }

  // src_header_filter4_match - computed: false, optional: true, required: false
  private _srcHeaderFilter4Match?: number; 
  public get srcHeaderFilter4Match() {
    return this.getNumberAttribute('src_header_filter4_match');
  }
  public set srcHeaderFilter4Match(value: number) {
    this._srcHeaderFilter4Match = value;
  }
  public resetSrcHeaderFilter4Match() {
    this._srcHeaderFilter4Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter4MatchInput() {
    return this._srcHeaderFilter4Match;
  }

  // src_header_filter5_drop - computed: false, optional: true, required: false
  private _srcHeaderFilter5Drop?: number; 
  public get srcHeaderFilter5Drop() {
    return this.getNumberAttribute('src_header_filter5_drop');
  }
  public set srcHeaderFilter5Drop(value: number) {
    this._srcHeaderFilter5Drop = value;
  }
  public resetSrcHeaderFilter5Drop() {
    this._srcHeaderFilter5Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter5DropInput() {
    return this._srcHeaderFilter5Drop;
  }

  // src_header_filter5_match - computed: false, optional: true, required: false
  private _srcHeaderFilter5Match?: number; 
  public get srcHeaderFilter5Match() {
    return this.getNumberAttribute('src_header_filter5_match');
  }
  public set srcHeaderFilter5Match(value: number) {
    this._srcHeaderFilter5Match = value;
  }
  public resetSrcHeaderFilter5Match() {
    this._srcHeaderFilter5Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter5MatchInput() {
    return this._srcHeaderFilter5Match;
  }

  // src_header_filter6_drop - computed: false, optional: true, required: false
  private _srcHeaderFilter6Drop?: number; 
  public get srcHeaderFilter6Drop() {
    return this.getNumberAttribute('src_header_filter6_drop');
  }
  public set srcHeaderFilter6Drop(value: number) {
    this._srcHeaderFilter6Drop = value;
  }
  public resetSrcHeaderFilter6Drop() {
    this._srcHeaderFilter6Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter6DropInput() {
    return this._srcHeaderFilter6Drop;
  }

  // src_header_filter6_match - computed: false, optional: true, required: false
  private _srcHeaderFilter6Match?: number; 
  public get srcHeaderFilter6Match() {
    return this.getNumberAttribute('src_header_filter6_match');
  }
  public set srcHeaderFilter6Match(value: number) {
    this._srcHeaderFilter6Match = value;
  }
  public resetSrcHeaderFilter6Match() {
    this._srcHeaderFilter6Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter6MatchInput() {
    return this._srcHeaderFilter6Match;
  }

  // src_header_filter7_drop - computed: false, optional: true, required: false
  private _srcHeaderFilter7Drop?: number; 
  public get srcHeaderFilter7Drop() {
    return this.getNumberAttribute('src_header_filter7_drop');
  }
  public set srcHeaderFilter7Drop(value: number) {
    this._srcHeaderFilter7Drop = value;
  }
  public resetSrcHeaderFilter7Drop() {
    this._srcHeaderFilter7Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter7DropInput() {
    return this._srcHeaderFilter7Drop;
  }

  // src_header_filter7_match - computed: false, optional: true, required: false
  private _srcHeaderFilter7Match?: number; 
  public get srcHeaderFilter7Match() {
    return this.getNumberAttribute('src_header_filter7_match');
  }
  public set srcHeaderFilter7Match(value: number) {
    this._srcHeaderFilter7Match = value;
  }
  public resetSrcHeaderFilter7Match() {
    this._srcHeaderFilter7Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter7MatchInput() {
    return this._srcHeaderFilter7Match;
  }

  // src_header_filter8_drop - computed: false, optional: true, required: false
  private _srcHeaderFilter8Drop?: number; 
  public get srcHeaderFilter8Drop() {
    return this.getNumberAttribute('src_header_filter8_drop');
  }
  public set srcHeaderFilter8Drop(value: number) {
    this._srcHeaderFilter8Drop = value;
  }
  public resetSrcHeaderFilter8Drop() {
    this._srcHeaderFilter8Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter8DropInput() {
    return this._srcHeaderFilter8Drop;
  }

  // src_header_filter8_match - computed: false, optional: true, required: false
  private _srcHeaderFilter8Match?: number; 
  public get srcHeaderFilter8Match() {
    return this.getNumberAttribute('src_header_filter8_match');
  }
  public set srcHeaderFilter8Match(value: number) {
    this._srcHeaderFilter8Match = value;
  }
  public resetSrcHeaderFilter8Match() {
    this._srcHeaderFilter8Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter8MatchInput() {
    return this._srcHeaderFilter8Match;
  }

  // src_header_filter9_drop - computed: false, optional: true, required: false
  private _srcHeaderFilter9Drop?: number; 
  public get srcHeaderFilter9Drop() {
    return this.getNumberAttribute('src_header_filter9_drop');
  }
  public set srcHeaderFilter9Drop(value: number) {
    this._srcHeaderFilter9Drop = value;
  }
  public resetSrcHeaderFilter9Drop() {
    this._srcHeaderFilter9Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter9DropInput() {
    return this._srcHeaderFilter9Drop;
  }

  // src_header_filter9_match - computed: false, optional: true, required: false
  private _srcHeaderFilter9Match?: number; 
  public get srcHeaderFilter9Match() {
    return this.getNumberAttribute('src_header_filter9_match');
  }
  public set srcHeaderFilter9Match(value: number) {
    this._srcHeaderFilter9Match = value;
  }
  public resetSrcHeaderFilter9Match() {
    this._srcHeaderFilter9Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilter9MatchInput() {
    return this._srcHeaderFilter9Match;
  }

  // src_header_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcHeaderFilterActionBlacklist?: number; 
  public get srcHeaderFilterActionBlacklist() {
    return this.getNumberAttribute('src_header_filter_action_blacklist');
  }
  public set srcHeaderFilterActionBlacklist(value: number) {
    this._srcHeaderFilterActionBlacklist = value;
  }
  public resetSrcHeaderFilterActionBlacklist() {
    this._srcHeaderFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterActionBlacklistInput() {
    return this._srcHeaderFilterActionBlacklist;
  }

  // src_header_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcHeaderFilterActionDefaultPass?: number; 
  public get srcHeaderFilterActionDefaultPass() {
    return this.getNumberAttribute('src_header_filter_action_default_pass');
  }
  public set srcHeaderFilterActionDefaultPass(value: number) {
    this._srcHeaderFilterActionDefaultPass = value;
  }
  public resetSrcHeaderFilterActionDefaultPass() {
    this._srcHeaderFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterActionDefaultPassInput() {
    return this._srcHeaderFilterActionDefaultPass;
  }

  // src_header_filter_action_drop - computed: false, optional: true, required: false
  private _srcHeaderFilterActionDrop?: number; 
  public get srcHeaderFilterActionDrop() {
    return this.getNumberAttribute('src_header_filter_action_drop');
  }
  public set srcHeaderFilterActionDrop(value: number) {
    this._srcHeaderFilterActionDrop = value;
  }
  public resetSrcHeaderFilterActionDrop() {
    this._srcHeaderFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterActionDropInput() {
    return this._srcHeaderFilterActionDrop;
  }

  // src_header_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcHeaderFilterActionWhitelist?: number; 
  public get srcHeaderFilterActionWhitelist() {
    return this.getNumberAttribute('src_header_filter_action_whitelist');
  }
  public set srcHeaderFilterActionWhitelist(value: number) {
    this._srcHeaderFilterActionWhitelist = value;
  }
  public resetSrcHeaderFilterActionWhitelist() {
    this._srcHeaderFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterActionWhitelistInput() {
    return this._srcHeaderFilterActionWhitelist;
  }

  // src_header_filter_match - computed: false, optional: true, required: false
  private _srcHeaderFilterMatch?: number; 
  public get srcHeaderFilterMatch() {
    return this.getNumberAttribute('src_header_filter_match');
  }
  public set srcHeaderFilterMatch(value: number) {
    this._srcHeaderFilterMatch = value;
  }
  public resetSrcHeaderFilterMatch() {
    this._srcHeaderFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterMatchInput() {
    return this._srcHeaderFilterMatch;
  }

  // src_header_filter_none_match - computed: false, optional: true, required: false
  private _srcHeaderFilterNoneMatch?: number; 
  public get srcHeaderFilterNoneMatch() {
    return this.getNumberAttribute('src_header_filter_none_match');
  }
  public set srcHeaderFilterNoneMatch(value: number) {
    this._srcHeaderFilterNoneMatch = value;
  }
  public resetSrcHeaderFilterNoneMatch() {
    this._srcHeaderFilterNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterNoneMatchInput() {
    return this._srcHeaderFilterNoneMatch;
  }

  // src_header_filter_not_match - computed: false, optional: true, required: false
  private _srcHeaderFilterNotMatch?: number; 
  public get srcHeaderFilterNotMatch() {
    return this.getNumberAttribute('src_header_filter_not_match');
  }
  public set srcHeaderFilterNotMatch(value: number) {
    this._srcHeaderFilterNotMatch = value;
  }
  public resetSrcHeaderFilterNotMatch() {
    this._srcHeaderFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterNotMatchInput() {
    return this._srcHeaderFilterNotMatch;
  }

  // src_http_auth_drop - computed: false, optional: true, required: false
  private _srcHttpAuthDrop?: number; 
  public get srcHttpAuthDrop() {
    return this.getNumberAttribute('src_http_auth_drop');
  }
  public set srcHttpAuthDrop(value: number) {
    this._srcHttpAuthDrop = value;
  }
  public resetSrcHttpAuthDrop() {
    this._srcHttpAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHttpAuthDropInput() {
    return this._srcHttpAuthDrop;
  }

  // src_hw_drop - computed: false, optional: true, required: false
  private _srcHwDrop?: number; 
  public get srcHwDrop() {
    return this.getNumberAttribute('src_hw_drop');
  }
  public set srcHwDrop(value: number) {
    this._srcHwDrop = value;
  }
  public resetSrcHwDrop() {
    this._srcHwDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHwDropInput() {
    return this._srcHwDrop;
  }

  // src_hw_drop_inserted - computed: false, optional: true, required: false
  private _srcHwDropInserted?: number; 
  public get srcHwDropInserted() {
    return this.getNumberAttribute('src_hw_drop_inserted');
  }
  public set srcHwDropInserted(value: number) {
    this._srcHwDropInserted = value;
  }
  public resetSrcHwDropInserted() {
    this._srcHwDropInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHwDropInsertedInput() {
    return this._srcHwDropInserted;
  }

  // src_hw_drop_removed - computed: false, optional: true, required: false
  private _srcHwDropRemoved?: number; 
  public get srcHwDropRemoved() {
    return this.getNumberAttribute('src_hw_drop_removed');
  }
  public set srcHwDropRemoved(value: number) {
    this._srcHwDropRemoved = value;
  }
  public resetSrcHwDropRemoved() {
    this._srcHwDropRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHwDropRemovedInput() {
    return this._srcHwDropRemoved;
  }

  // src_js_challenge_sent - computed: false, optional: true, required: false
  private _srcJsChallengeSent?: number; 
  public get srcJsChallengeSent() {
    return this.getNumberAttribute('src_js_challenge_sent');
  }
  public set srcJsChallengeSent(value: number) {
    this._srcJsChallengeSent = value;
  }
  public resetSrcJsChallengeSent() {
    this._srcJsChallengeSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcJsChallengeSentInput() {
    return this._srcJsChallengeSent;
  }

  // src_learn_overflow - computed: false, optional: true, required: false
  private _srcLearnOverflow?: number; 
  public get srcLearnOverflow() {
    return this.getNumberAttribute('src_learn_overflow');
  }
  public set srcLearnOverflow(value: number) {
    this._srcLearnOverflow = value;
  }
  public resetSrcLearnOverflow() {
    this._srcLearnOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcLearnOverflowInput() {
    return this._srcLearnOverflow;
  }

  // src_out_of_seq_excd - computed: false, optional: true, required: false
  private _srcOutOfSeqExcd?: number; 
  public get srcOutOfSeqExcd() {
    return this.getNumberAttribute('src_out_of_seq_excd');
  }
  public set srcOutOfSeqExcd(value: number) {
    this._srcOutOfSeqExcd = value;
  }
  public resetSrcOutOfSeqExcd() {
    this._srcOutOfSeqExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOutOfSeqExcdInput() {
    return this._srcOutOfSeqExcd;
  }

  // src_policy_drop - computed: false, optional: true, required: false
  private _srcPolicyDrop?: number; 
  public get srcPolicyDrop() {
    return this.getNumberAttribute('src_policy_drop');
  }
  public set srcPolicyDrop(value: number) {
    this._srcPolicyDrop = value;
  }
  public resetSrcPolicyDrop() {
    this._srcPolicyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPolicyDropInput() {
    return this._srcPolicyDrop;
  }

  // src_post_rate_exceed - computed: false, optional: true, required: false
  private _srcPostRateExceed?: number; 
  public get srcPostRateExceed() {
    return this.getNumberAttribute('src_post_rate_exceed');
  }
  public set srcPostRateExceed(value: number) {
    this._srcPostRateExceed = value;
  }
  public resetSrcPostRateExceed() {
    this._srcPostRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPostRateExceedInput() {
    return this._srcPostRateExceed;
  }

  // src_req_rate_exceed - computed: false, optional: true, required: false
  private _srcReqRateExceed?: number; 
  public get srcReqRateExceed() {
    return this.getNumberAttribute('src_req_rate_exceed');
  }
  public set srcReqRateExceed(value: number) {
    this._srcReqRateExceed = value;
  }
  public resetSrcReqRateExceed() {
    this._srcReqRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcReqRateExceedInput() {
    return this._srcReqRateExceed;
  }

  // src_retransmit_excd - computed: false, optional: true, required: false
  private _srcRetransmitExcd?: number; 
  public get srcRetransmitExcd() {
    return this.getNumberAttribute('src_retransmit_excd');
  }
  public set srcRetransmitExcd(value: number) {
    this._srcRetransmitExcd = value;
  }
  public resetSrcRetransmitExcd() {
    this._srcRetransmitExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRetransmitExcdInput() {
    return this._srcRetransmitExcd;
  }

  // src_rst_cookie_fail - computed: false, optional: true, required: false
  private _srcRstCookieFail?: number; 
  public get srcRstCookieFail() {
    return this.getNumberAttribute('src_rst_cookie_fail');
  }
  public set srcRstCookieFail(value: number) {
    this._srcRstCookieFail = value;
  }
  public resetSrcRstCookieFail() {
    this._srcRstCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRstCookieFailInput() {
    return this._srcRstCookieFail;
  }

  // src_syn_auth_fail - computed: false, optional: true, required: false
  private _srcSynAuthFail?: number; 
  public get srcSynAuthFail() {
    return this.getNumberAttribute('src_syn_auth_fail');
  }
  public set srcSynAuthFail(value: number) {
    this._srcSynAuthFail = value;
  }
  public resetSrcSynAuthFail() {
    this._srcSynAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynAuthFailInput() {
    return this._srcSynAuthFail;
  }

  // src_syn_cookie_fail - computed: false, optional: true, required: false
  private _srcSynCookieFail?: number; 
  public get srcSynCookieFail() {
    return this.getNumberAttribute('src_syn_cookie_fail');
  }
  public set srcSynCookieFail(value: number) {
    this._srcSynCookieFail = value;
  }
  public resetSrcSynCookieFail() {
    this._srcSynCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynCookieFailInput() {
    return this._srcSynCookieFail;
  }

  // src_syn_cookie_sent - computed: false, optional: true, required: false
  private _srcSynCookieSent?: number; 
  public get srcSynCookieSent() {
    return this.getNumberAttribute('src_syn_cookie_sent');
  }
  public set srcSynCookieSent(value: number) {
    this._srcSynCookieSent = value;
  }
  public resetSrcSynCookieSent() {
    this._srcSynCookieSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynCookieSentInput() {
    return this._srcSynCookieSent;
  }

  // src_syn_rate_exceed - computed: false, optional: true, required: false
  private _srcSynRateExceed?: number; 
  public get srcSynRateExceed() {
    return this.getNumberAttribute('src_syn_rate_exceed');
  }
  public set srcSynRateExceed(value: number) {
    this._srcSynRateExceed = value;
  }
  public resetSrcSynRateExceed() {
    this._srcSynRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRateExceedInput() {
    return this._srcSynRateExceed;
  }

  // src_syn_retry_blacklist - computed: false, optional: true, required: false
  private _srcSynRetryBlacklist?: number; 
  public get srcSynRetryBlacklist() {
    return this.getNumberAttribute('src_syn_retry_blacklist');
  }
  public set srcSynRetryBlacklist(value: number) {
    this._srcSynRetryBlacklist = value;
  }
  public resetSrcSynRetryBlacklist() {
    this._srcSynRetryBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryBlacklistInput() {
    return this._srcSynRetryBlacklist;
  }

  // src_syn_retry_failed - computed: false, optional: true, required: false
  private _srcSynRetryFailed?: number; 
  public get srcSynRetryFailed() {
    return this.getNumberAttribute('src_syn_retry_failed');
  }
  public set srcSynRetryFailed(value: number) {
    this._srcSynRetryFailed = value;
  }
  public resetSrcSynRetryFailed() {
    this._srcSynRetryFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryFailedInput() {
    return this._srcSynRetryFailed;
  }

  // src_syn_retry_gap_drop - computed: false, optional: true, required: false
  private _srcSynRetryGapDrop?: number; 
  public get srcSynRetryGapDrop() {
    return this.getNumberAttribute('src_syn_retry_gap_drop');
  }
  public set srcSynRetryGapDrop(value: number) {
    this._srcSynRetryGapDrop = value;
  }
  public resetSrcSynRetryGapDrop() {
    this._srcSynRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryGapDropInput() {
    return this._srcSynRetryGapDrop;
  }

  // src_syn_retry_init - computed: false, optional: true, required: false
  private _srcSynRetryInit?: number; 
  public get srcSynRetryInit() {
    return this.getNumberAttribute('src_syn_retry_init');
  }
  public set srcSynRetryInit(value: number) {
    this._srcSynRetryInit = value;
  }
  public resetSrcSynRetryInit() {
    this._srcSynRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryInitInput() {
    return this._srcSynRetryInit;
  }

  // src_syn_retry_reset - computed: false, optional: true, required: false
  private _srcSynRetryReset?: number; 
  public get srcSynRetryReset() {
    return this.getNumberAttribute('src_syn_retry_reset');
  }
  public set srcSynRetryReset(value: number) {
    this._srcSynRetryReset = value;
  }
  public resetSrcSynRetryReset() {
    this._srcSynRetryReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryResetInput() {
    return this._srcSynRetryReset;
  }

  // src_syn_retry_rto_fail - computed: false, optional: true, required: false
  private _srcSynRetryRtoFail?: number; 
  public get srcSynRetryRtoFail() {
    return this.getNumberAttribute('src_syn_retry_rto_fail');
  }
  public set srcSynRetryRtoFail(value: number) {
    this._srcSynRetryRtoFail = value;
  }
  public resetSrcSynRetryRtoFail() {
    this._srcSynRetryRtoFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryRtoFailInput() {
    return this._srcSynRetryRtoFail;
  }

  // src_syn_retry_rto_pass - computed: false, optional: true, required: false
  private _srcSynRetryRtoPass?: number; 
  public get srcSynRetryRtoPass() {
    return this.getNumberAttribute('src_syn_retry_rto_pass');
  }
  public set srcSynRetryRtoPass(value: number) {
    this._srcSynRetryRtoPass = value;
  }
  public resetSrcSynRetryRtoPass() {
    this._srcSynRetryRtoPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryRtoPassInput() {
    return this._srcSynRetryRtoPass;
  }

  // src_syn_retry_rto_progress - computed: false, optional: true, required: false
  private _srcSynRetryRtoProgress?: number; 
  public get srcSynRetryRtoProgress() {
    return this.getNumberAttribute('src_syn_retry_rto_progress');
  }
  public set srcSynRetryRtoProgress(value: number) {
    this._srcSynRetryRtoProgress = value;
  }
  public resetSrcSynRetryRtoProgress() {
    this._srcSynRetryRtoProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryRtoProgressInput() {
    return this._srcSynRetryRtoProgress;
  }

  // src_syn_retry_timeout - computed: false, optional: true, required: false
  private _srcSynRetryTimeout?: number; 
  public get srcSynRetryTimeout() {
    return this.getNumberAttribute('src_syn_retry_timeout');
  }
  public set srcSynRetryTimeout(value: number) {
    this._srcSynRetryTimeout = value;
  }
  public resetSrcSynRetryTimeout() {
    this._srcSynRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryTimeoutInput() {
    return this._srcSynRetryTimeout;
  }

  // src_tcp_auth_rst - computed: false, optional: true, required: false
  private _srcTcpAuthRst?: number; 
  public get srcTcpAuthRst() {
    return this.getNumberAttribute('src_tcp_auth_rst');
  }
  public set srcTcpAuthRst(value: number) {
    this._srcTcpAuthRst = value;
  }
  public resetSrcTcpAuthRst() {
    this._srcTcpAuthRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpAuthRstInput() {
    return this._srcTcpAuthRst;
  }

  // src_ud_challenge_sent - computed: false, optional: true, required: false
  private _srcUdChallengeSent?: number; 
  public get srcUdChallengeSent() {
    return this.getNumberAttribute('src_ud_challenge_sent');
  }
  public set srcUdChallengeSent(value: number) {
    this._srcUdChallengeSent = value;
  }
  public resetSrcUdChallengeSent() {
    this._srcUdChallengeSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdChallengeSentInput() {
    return this._srcUdChallengeSent;
  }

  // src_unauth_drop - computed: false, optional: true, required: false
  private _srcUnauthDrop?: number; 
  public get srcUnauthDrop() {
    return this.getNumberAttribute('src_unauth_drop');
  }
  public set srcUnauthDrop(value: number) {
    this._srcUnauthDrop = value;
  }
  public resetSrcUnauthDrop() {
    this._srcUnauthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUnauthDropInput() {
    return this._srcUnauthDrop;
  }

  // src_well_known_port - computed: false, optional: true, required: false
  private _srcWellKnownPort?: number; 
  public get srcWellKnownPort() {
    return this.getNumberAttribute('src_well_known_port');
  }
  public set srcWellKnownPort(value: number) {
    this._srcWellKnownPort = value;
  }
  public resetSrcWellKnownPort() {
    this._srcWellKnownPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcWellKnownPortInput() {
    return this._srcWellKnownPort;
  }

  // src_zero_window_excd - computed: false, optional: true, required: false
  private _srcZeroWindowExcd?: number; 
  public get srcZeroWindowExcd() {
    return this.getNumberAttribute('src_zero_window_excd');
  }
  public set srcZeroWindowExcd(value: number) {
    this._srcZeroWindowExcd = value;
  }
  public resetSrcZeroWindowExcd() {
    this._srcZeroWindowExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZeroWindowExcdInput() {
    return this._srcZeroWindowExcd;
  }

  // src_zone_service_entry_aged - computed: false, optional: true, required: false
  private _srcZoneServiceEntryAged?: number; 
  public get srcZoneServiceEntryAged() {
    return this.getNumberAttribute('src_zone_service_entry_aged');
  }
  public set srcZoneServiceEntryAged(value: number) {
    this._srcZoneServiceEntryAged = value;
  }
  public resetSrcZoneServiceEntryAged() {
    this._srcZoneServiceEntryAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceEntryAgedInput() {
    return this._srcZoneServiceEntryAged;
  }

  // src_zone_service_entry_learned - computed: false, optional: true, required: false
  private _srcZoneServiceEntryLearned?: number; 
  public get srcZoneServiceEntryLearned() {
    return this.getNumberAttribute('src_zone_service_entry_learned');
  }
  public set srcZoneServiceEntryLearned(value: number) {
    this._srcZoneServiceEntryLearned = value;
  }
  public resetSrcZoneServiceEntryLearned() {
    this._srcZoneServiceEntryLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceEntryLearnedInput() {
    return this._srcZoneServiceEntryLearned;
  }

  // syn_auth_fail - computed: false, optional: true, required: false
  private _synAuthFail?: number; 
  public get synAuthFail() {
    return this.getNumberAttribute('syn_auth_fail');
  }
  public set synAuthFail(value: number) {
    this._synAuthFail = value;
  }
  public resetSynAuthFail() {
    this._synAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthFailInput() {
    return this._synAuthFail;
  }

  // syn_auth_pass - computed: false, optional: true, required: false
  private _synAuthPass?: number; 
  public get synAuthPass() {
    return this.getNumberAttribute('syn_auth_pass');
  }
  public set synAuthPass(value: number) {
    this._synAuthPass = value;
  }
  public resetSynAuthPass() {
    this._synAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthPassInput() {
    return this._synAuthPass;
  }

  // syn_auth_rst_ack_drop - computed: false, optional: true, required: false
  private _synAuthRstAckDrop?: number; 
  public get synAuthRstAckDrop() {
    return this.getNumberAttribute('syn_auth_rst_ack_drop');
  }
  public set synAuthRstAckDrop(value: number) {
    this._synAuthRstAckDrop = value;
  }
  public resetSynAuthRstAckDrop() {
    this._synAuthRstAckDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthRstAckDropInput() {
    return this._synAuthRstAckDrop;
  }

  // syn_cookie_fail - computed: false, optional: true, required: false
  private _synCookieFail?: number; 
  public get synCookieFail() {
    return this.getNumberAttribute('syn_cookie_fail');
  }
  public set synCookieFail(value: number) {
    this._synCookieFail = value;
  }
  public resetSynCookieFail() {
    this._synCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieFailInput() {
    return this._synCookieFail;
  }

  // syn_cookie_sent - computed: false, optional: true, required: false
  private _synCookieSent?: number; 
  public get synCookieSent() {
    return this.getNumberAttribute('syn_cookie_sent');
  }
  public set synCookieSent(value: number) {
    this._synCookieSent = value;
  }
  public resetSynCookieSent() {
    this._synCookieSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieSentInput() {
    return this._synCookieSent;
  }

  // syn_drop - computed: false, optional: true, required: false
  private _synDrop?: number; 
  public get synDrop() {
    return this.getNumberAttribute('syn_drop');
  }
  public set synDrop(value: number) {
    this._synDrop = value;
  }
  public resetSynDrop() {
    this._synDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synDropInput() {
    return this._synDrop;
  }

  // syn_retry_blacklist - computed: false, optional: true, required: false
  private _synRetryBlacklist?: number; 
  public get synRetryBlacklist() {
    return this.getNumberAttribute('syn_retry_blacklist');
  }
  public set synRetryBlacklist(value: number) {
    this._synRetryBlacklist = value;
  }
  public resetSynRetryBlacklist() {
    this._synRetryBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryBlacklistInput() {
    return this._synRetryBlacklist;
  }

  // syn_retry_failed - computed: false, optional: true, required: false
  private _synRetryFailed?: number; 
  public get synRetryFailed() {
    return this.getNumberAttribute('syn_retry_failed');
  }
  public set synRetryFailed(value: number) {
    this._synRetryFailed = value;
  }
  public resetSynRetryFailed() {
    this._synRetryFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryFailedInput() {
    return this._synRetryFailed;
  }

  // syn_retry_gap_drop - computed: false, optional: true, required: false
  private _synRetryGapDrop?: number; 
  public get synRetryGapDrop() {
    return this.getNumberAttribute('syn_retry_gap_drop');
  }
  public set synRetryGapDrop(value: number) {
    this._synRetryGapDrop = value;
  }
  public resetSynRetryGapDrop() {
    this._synRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryGapDropInput() {
    return this._synRetryGapDrop;
  }

  // syn_retry_init - computed: false, optional: true, required: false
  private _synRetryInit?: number; 
  public get synRetryInit() {
    return this.getNumberAttribute('syn_retry_init');
  }
  public set synRetryInit(value: number) {
    this._synRetryInit = value;
  }
  public resetSynRetryInit() {
    this._synRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryInitInput() {
    return this._synRetryInit;
  }

  // syn_retry_pass - computed: false, optional: true, required: false
  private _synRetryPass?: number; 
  public get synRetryPass() {
    return this.getNumberAttribute('syn_retry_pass');
  }
  public set synRetryPass(value: number) {
    this._synRetryPass = value;
  }
  public resetSynRetryPass() {
    this._synRetryPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryPassInput() {
    return this._synRetryPass;
  }

  // syn_retry_reset - computed: false, optional: true, required: false
  private _synRetryReset?: number; 
  public get synRetryReset() {
    return this.getNumberAttribute('syn_retry_reset');
  }
  public set synRetryReset(value: number) {
    this._synRetryReset = value;
  }
  public resetSynRetryReset() {
    this._synRetryReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryResetInput() {
    return this._synRetryReset;
  }

  // syn_retry_rto_fail - computed: false, optional: true, required: false
  private _synRetryRtoFail?: number; 
  public get synRetryRtoFail() {
    return this.getNumberAttribute('syn_retry_rto_fail');
  }
  public set synRetryRtoFail(value: number) {
    this._synRetryRtoFail = value;
  }
  public resetSynRetryRtoFail() {
    this._synRetryRtoFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryRtoFailInput() {
    return this._synRetryRtoFail;
  }

  // syn_retry_rto_pass - computed: false, optional: true, required: false
  private _synRetryRtoPass?: number; 
  public get synRetryRtoPass() {
    return this.getNumberAttribute('syn_retry_rto_pass');
  }
  public set synRetryRtoPass(value: number) {
    this._synRetryRtoPass = value;
  }
  public resetSynRetryRtoPass() {
    this._synRetryRtoPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryRtoPassInput() {
    return this._synRetryRtoPass;
  }

  // syn_retry_rto_progress - computed: false, optional: true, required: false
  private _synRetryRtoProgress?: number; 
  public get synRetryRtoProgress() {
    return this.getNumberAttribute('syn_retry_rto_progress');
  }
  public set synRetryRtoProgress(value: number) {
    this._synRetryRtoProgress = value;
  }
  public resetSynRetryRtoProgress() {
    this._synRetryRtoProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryRtoProgressInput() {
    return this._synRetryRtoProgress;
  }

  // syn_retry_timeout - computed: false, optional: true, required: false
  private _synRetryTimeout?: number; 
  public get synRetryTimeout() {
    return this.getNumberAttribute('syn_retry_timeout');
  }
  public set synRetryTimeout(value: number) {
    this._synRetryTimeout = value;
  }
  public resetSynRetryTimeout() {
    this._synRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryTimeoutInput() {
    return this._synRetryTimeout;
  }

  // syn_tfo_rcv - computed: false, optional: true, required: false
  private _synTfoRcv?: number; 
  public get synTfoRcv() {
    return this.getNumberAttribute('syn_tfo_rcv');
  }
  public set synTfoRcv(value: number) {
    this._synTfoRcv = value;
  }
  public resetSynTfoRcv() {
    this._synTfoRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synTfoRcvInput() {
    return this._synTfoRcv;
  }

  // synack_multiple_attempts_per_ip_detected - computed: false, optional: true, required: false
  private _synackMultipleAttemptsPerIpDetected?: number; 
  public get synackMultipleAttemptsPerIpDetected() {
    return this.getNumberAttribute('synack_multiple_attempts_per_ip_detected');
  }
  public set synackMultipleAttemptsPerIpDetected(value: number) {
    this._synackMultipleAttemptsPerIpDetected = value;
  }
  public resetSynackMultipleAttemptsPerIpDetected() {
    this._synackMultipleAttemptsPerIpDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synackMultipleAttemptsPerIpDetectedInput() {
    return this._synackMultipleAttemptsPerIpDetected;
  }

  // synack_reset_sent - computed: false, optional: true, required: false
  private _synackResetSent?: number; 
  public get synackResetSent() {
    return this.getNumberAttribute('synack_reset_sent');
  }
  public set synackResetSent(value: number) {
    this._synackResetSent = value;
  }
  public resetSynackResetSent() {
    this._synackResetSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synackResetSentInput() {
    return this._synackResetSent;
  }

  // tcp_auth_drop - computed: false, optional: true, required: false
  private _tcpAuthDrop?: number; 
  public get tcpAuthDrop() {
    return this.getNumberAttribute('tcp_auth_drop');
  }
  public set tcpAuthDrop(value: number) {
    this._tcpAuthDrop = value;
  }
  public resetTcpAuthDrop() {
    this._tcpAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthDropInput() {
    return this._tcpAuthDrop;
  }

  // tcp_auth_resp - computed: false, optional: true, required: false
  private _tcpAuthResp?: number; 
  public get tcpAuthResp() {
    return this.getNumberAttribute('tcp_auth_resp');
  }
  public set tcpAuthResp(value: number) {
    this._tcpAuthResp = value;
  }
  public resetTcpAuthResp() {
    this._tcpAuthResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthRespInput() {
    return this._tcpAuthResp;
  }

  // tcp_auth_rst - computed: false, optional: true, required: false
  private _tcpAuthRst?: number; 
  public get tcpAuthRst() {
    return this.getNumberAttribute('tcp_auth_rst');
  }
  public set tcpAuthRst(value: number) {
    this._tcpAuthRst = value;
  }
  public resetTcpAuthRst() {
    this._tcpAuthRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthRstInput() {
    return this._tcpAuthRst;
  }

  // tcp_filter1_match - computed: false, optional: true, required: false
  private _tcpFilter1Match?: number; 
  public get tcpFilter1Match() {
    return this.getNumberAttribute('tcp_filter1_match');
  }
  public set tcpFilter1Match(value: number) {
    this._tcpFilter1Match = value;
  }
  public resetTcpFilter1Match() {
    this._tcpFilter1Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilter1MatchInput() {
    return this._tcpFilter1Match;
  }

  // tcp_filter2_match - computed: false, optional: true, required: false
  private _tcpFilter2Match?: number; 
  public get tcpFilter2Match() {
    return this.getNumberAttribute('tcp_filter2_match');
  }
  public set tcpFilter2Match(value: number) {
    this._tcpFilter2Match = value;
  }
  public resetTcpFilter2Match() {
    this._tcpFilter2Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilter2MatchInput() {
    return this._tcpFilter2Match;
  }

  // tcp_filter3_match - computed: false, optional: true, required: false
  private _tcpFilter3Match?: number; 
  public get tcpFilter3Match() {
    return this.getNumberAttribute('tcp_filter3_match');
  }
  public set tcpFilter3Match(value: number) {
    this._tcpFilter3Match = value;
  }
  public resetTcpFilter3Match() {
    this._tcpFilter3Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilter3MatchInput() {
    return this._tcpFilter3Match;
  }

  // tcp_filter4_match - computed: false, optional: true, required: false
  private _tcpFilter4Match?: number; 
  public get tcpFilter4Match() {
    return this.getNumberAttribute('tcp_filter4_match');
  }
  public set tcpFilter4Match(value: number) {
    this._tcpFilter4Match = value;
  }
  public resetTcpFilter4Match() {
    this._tcpFilter4Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilter4MatchInput() {
    return this._tcpFilter4Match;
  }

  // tcp_filter5_match - computed: false, optional: true, required: false
  private _tcpFilter5Match?: number; 
  public get tcpFilter5Match() {
    return this.getNumberAttribute('tcp_filter5_match');
  }
  public set tcpFilter5Match(value: number) {
    this._tcpFilter5Match = value;
  }
  public resetTcpFilter5Match() {
    this._tcpFilter5Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilter5MatchInput() {
    return this._tcpFilter5Match;
  }

  // tcp_filter_action_blacklist - computed: false, optional: true, required: false
  private _tcpFilterActionBlacklist?: number; 
  public get tcpFilterActionBlacklist() {
    return this.getNumberAttribute('tcp_filter_action_blacklist');
  }
  public set tcpFilterActionBlacklist(value: number) {
    this._tcpFilterActionBlacklist = value;
  }
  public resetTcpFilterActionBlacklist() {
    this._tcpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterActionBlacklistInput() {
    return this._tcpFilterActionBlacklist;
  }

  // tcp_filter_action_default_pass - computed: false, optional: true, required: false
  private _tcpFilterActionDefaultPass?: number; 
  public get tcpFilterActionDefaultPass() {
    return this.getNumberAttribute('tcp_filter_action_default_pass');
  }
  public set tcpFilterActionDefaultPass(value: number) {
    this._tcpFilterActionDefaultPass = value;
  }
  public resetTcpFilterActionDefaultPass() {
    this._tcpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterActionDefaultPassInput() {
    return this._tcpFilterActionDefaultPass;
  }

  // tcp_filter_action_drop - computed: false, optional: true, required: false
  private _tcpFilterActionDrop?: number; 
  public get tcpFilterActionDrop() {
    return this.getNumberAttribute('tcp_filter_action_drop');
  }
  public set tcpFilterActionDrop(value: number) {
    this._tcpFilterActionDrop = value;
  }
  public resetTcpFilterActionDrop() {
    this._tcpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterActionDropInput() {
    return this._tcpFilterActionDrop;
  }

  // tcp_filter_action_whitelist - computed: false, optional: true, required: false
  private _tcpFilterActionWhitelist?: number; 
  public get tcpFilterActionWhitelist() {
    return this.getNumberAttribute('tcp_filter_action_whitelist');
  }
  public set tcpFilterActionWhitelist(value: number) {
    this._tcpFilterActionWhitelist = value;
  }
  public resetTcpFilterActionWhitelist() {
    this._tcpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterActionWhitelistInput() {
    return this._tcpFilterActionWhitelist;
  }

  // tcp_filter_none_match - computed: false, optional: true, required: false
  private _tcpFilterNoneMatch?: number; 
  public get tcpFilterNoneMatch() {
    return this.getNumberAttribute('tcp_filter_none_match');
  }
  public set tcpFilterNoneMatch(value: number) {
    this._tcpFilterNoneMatch = value;
  }
  public resetTcpFilterNoneMatch() {
    this._tcpFilterNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterNoneMatchInput() {
    return this._tcpFilterNoneMatch;
  }

  // tcp_filter_total_not_match - computed: false, optional: true, required: false
  private _tcpFilterTotalNotMatch?: number; 
  public get tcpFilterTotalNotMatch() {
    return this.getNumberAttribute('tcp_filter_total_not_match');
  }
  public set tcpFilterTotalNotMatch(value: number) {
    this._tcpFilterTotalNotMatch = value;
  }
  public resetTcpFilterTotalNotMatch() {
    this._tcpFilterTotalNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterTotalNotMatchInput() {
    return this._tcpFilterTotalNotMatch;
  }

  // tcp_rexmit_syn_limit_bl - computed: false, optional: true, required: false
  private _tcpRexmitSynLimitBl?: number; 
  public get tcpRexmitSynLimitBl() {
    return this.getNumberAttribute('tcp_rexmit_syn_limit_bl');
  }
  public set tcpRexmitSynLimitBl(value: number) {
    this._tcpRexmitSynLimitBl = value;
  }
  public resetTcpRexmitSynLimitBl() {
    this._tcpRexmitSynLimitBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRexmitSynLimitBlInput() {
    return this._tcpRexmitSynLimitBl;
  }

  // tcp_rexmit_syn_limit_drop - computed: false, optional: true, required: false
  private _tcpRexmitSynLimitDrop?: number; 
  public get tcpRexmitSynLimitDrop() {
    return this.getNumberAttribute('tcp_rexmit_syn_limit_drop');
  }
  public set tcpRexmitSynLimitDrop(value: number) {
    this._tcpRexmitSynLimitDrop = value;
  }
  public resetTcpRexmitSynLimitDrop() {
    this._tcpRexmitSynLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRexmitSynLimitDropInput() {
    return this._tcpRexmitSynLimitDrop;
  }

  // too_many_headers - computed: false, optional: true, required: false
  private _tooManyHeaders?: number; 
  public get tooManyHeaders() {
    return this.getNumberAttribute('too_many_headers');
  }
  public set tooManyHeaders(value: number) {
    this._tooManyHeaders = value;
  }
  public resetTooManyHeaders() {
    this._tooManyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooManyHeadersInput() {
    return this._tooManyHeaders;
  }

  // ud_challenge_failed - computed: false, optional: true, required: false
  private _udChallengeFailed?: number; 
  public get udChallengeFailed() {
    return this.getNumberAttribute('ud_challenge_failed');
  }
  public set udChallengeFailed(value: number) {
    this._udChallengeFailed = value;
  }
  public resetUdChallengeFailed() {
    this._udChallengeFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udChallengeFailedInput() {
    return this._udChallengeFailed;
  }

  // ud_challenge_sent - computed: false, optional: true, required: false
  private _udChallengeSent?: number; 
  public get udChallengeSent() {
    return this.getNumberAttribute('ud_challenge_sent');
  }
  public set udChallengeSent(value: number) {
    this._udChallengeSent = value;
  }
  public resetUdChallengeSent() {
    this._udChallengeSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udChallengeSentInput() {
    return this._udChallengeSent;
  }

  // unauth_drop - computed: false, optional: true, required: false
  private _unauthDrop?: number; 
  public get unauthDrop() {
    return this.getNumberAttribute('unauth_drop');
  }
  public set unauthDrop(value: number) {
    this._unauthDrop = value;
  }
  public resetUnauthDrop() {
    this._unauthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthDropInput() {
    return this._unauthDrop;
  }

  // unauth_src_session_reset - computed: false, optional: true, required: false
  private _unauthSrcSessionReset?: number; 
  public get unauthSrcSessionReset() {
    return this.getNumberAttribute('unauth_src_session_reset');
  }
  public set unauthSrcSessionReset(value: number) {
    this._unauthSrcSessionReset = value;
  }
  public resetUnauthSrcSessionReset() {
    this._unauthSrcSessionReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthSrcSessionResetInput() {
    return this._unauthSrcSessionReset;
  }

  // uri_filter_match - computed: false, optional: true, required: false
  private _uriFilterMatch?: number; 
  public get uriFilterMatch() {
    return this.getNumberAttribute('uri_filter_match');
  }
  public set uriFilterMatch(value: number) {
    this._uriFilterMatch = value;
  }
  public resetUriFilterMatch() {
    this._uriFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriFilterMatchInput() {
    return this._uriFilterMatch;
  }

  // use_hdr_src_ip - computed: false, optional: true, required: false
  private _useHdrSrcIp?: number; 
  public get useHdrSrcIp() {
    return this.getNumberAttribute('use_hdr_src_ip');
  }
  public set useHdrSrcIp(value: number) {
    this._useHdrSrcIp = value;
  }
  public resetUseHdrSrcIp() {
    this._useHdrSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHdrSrcIpInput() {
    return this._useHdrSrcIp;
  }

  // user_agent_filter_blacklist - computed: false, optional: true, required: false
  private _userAgentFilterBlacklist?: number; 
  public get userAgentFilterBlacklist() {
    return this.getNumberAttribute('user_agent_filter_blacklist');
  }
  public set userAgentFilterBlacklist(value: number) {
    this._userAgentFilterBlacklist = value;
  }
  public resetUserAgentFilterBlacklist() {
    this._userAgentFilterBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentFilterBlacklistInput() {
    return this._userAgentFilterBlacklist;
  }

  // user_agent_filter_match - computed: false, optional: true, required: false
  private _userAgentFilterMatch?: number; 
  public get userAgentFilterMatch() {
    return this.getNumberAttribute('user_agent_filter_match');
  }
  public set userAgentFilterMatch(value: number) {
    this._userAgentFilterMatch = value;
  }
  public resetUserAgentFilterMatch() {
    this._userAgentFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentFilterMatchInput() {
    return this._userAgentFilterMatch;
  }

  // wellknown_sport_drop - computed: false, optional: true, required: false
  private _wellknownSportDrop?: number; 
  public get wellknownSportDrop() {
    return this.getNumberAttribute('wellknown_sport_drop');
  }
  public set wellknownSportDrop(value: number) {
    this._wellknownSportDrop = value;
  }
  public resetWellknownSportDrop() {
    this._wellknownSportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellknownSportDropInput() {
    return this._wellknownSportDrop;
  }

  // window_small - computed: false, optional: true, required: false
  private _windowSmall?: number; 
  public get windowSmall() {
    return this.getNumberAttribute('window_small');
  }
  public set windowSmall(value: number) {
    this._windowSmall = value;
  }
  public resetWindowSmall() {
    this._windowSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSmallInput() {
    return this._windowSmall;
  }

  // window_small_drop - computed: false, optional: true, required: false
  private _windowSmallDrop?: number; 
  public get windowSmallDrop() {
    return this.getNumberAttribute('window_small_drop');
  }
  public set windowSmallDrop(value: number) {
    this._windowSmallDrop = value;
  }
  public resetWindowSmallDrop() {
    this._windowSmallDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSmallDropInput() {
    return this._windowSmallDrop;
  }

  // zero_window_excd - computed: false, optional: true, required: false
  private _zeroWindowExcd?: number; 
  public get zeroWindowExcd() {
    return this.getNumberAttribute('zero_window_excd');
  }
  public set zeroWindowExcd(value: number) {
    this._zeroWindowExcd = value;
  }
  public resetZeroWindowExcd() {
    this._zeroWindowExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWindowExcdInput() {
    return this._zeroWindowExcd;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats thunder_ddos_http_zone_port_stats}
*/
export class DataThunderDdosHttpZonePortStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_http_zone_port_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosHttpZonePortStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosHttpZonePortStats to import
  * @param importFromId The id of the existing DataThunderDdosHttpZonePortStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosHttpZonePortStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_http_zone_port_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_http_zone_port_stats thunder_ddos_http_zone_port_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosHttpZonePortStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosHttpZonePortStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_http_zone_port_stats',
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
  private _stats = new DataThunderDdosHttpZonePortStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosHttpZonePortStatsStats) {
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
      stats: dataThunderDdosHttpZonePortStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosHttpZonePortStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosHttpZonePortStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
