// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosL4UdpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#id DataThunderDdosL4UdpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#stats DataThunderDdosL4UdpStats#stats}
  */
  readonly stats?: DataThunderDdosL4UdpStatsStats;
}
export interface DataThunderDdosL4UdpStatsStats {
  /**
  * Dst Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#dst_udp_filter_action_blacklist DataThunderDdosL4UdpStats#dst_udp_filter_action_blacklist}
  */
  readonly dstUdpFilterActionBlacklist?: number;
  /**
  * Dst Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#dst_udp_filter_action_default_pass DataThunderDdosL4UdpStats#dst_udp_filter_action_default_pass}
  */
  readonly dstUdpFilterActionDefaultPass?: number;
  /**
  * Dst Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#dst_udp_filter_action_drop DataThunderDdosL4UdpStats#dst_udp_filter_action_drop}
  */
  readonly dstUdpFilterActionDrop?: number;
  /**
  * Dst Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#dst_udp_filter_action_whitelist DataThunderDdosL4UdpStats#dst_udp_filter_action_whitelist}
  */
  readonly dstUdpFilterActionWhitelist?: number;
  /**
  * Dst Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#dst_udp_filter_match DataThunderDdosL4UdpStats#dst_udp_filter_match}
  */
  readonly dstUdpFilterMatch?: number;
  /**
  * Dst Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#dst_udp_filter_not_match DataThunderDdosL4UdpStats#dst_udp_filter_not_match}
  */
  readonly dstUdpFilterNotMatch?: number;
  /**
  * UDP Stateless Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#instateless DataThunderDdosL4UdpStats#instateless}
  */
  readonly instateless?: number;
  /**
  * UDP Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#inudp DataThunderDdosL4UdpStats#inudp}
  */
  readonly inudp?: number;
  /**
  * NTP Monlist Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#ntp_monlist_req DataThunderDdosL4UdpStats#ntp_monlist_req}
  */
  readonly ntpMonlistReq?: number;
  /**
  * NTP Monlist Request Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#ntp_monlist_req_bl DataThunderDdosL4UdpStats#ntp_monlist_req_bl}
  */
  readonly ntpMonlistReqBl?: number;
  /**
  * NTP Monlist Request Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#ntp_monlist_req_drop DataThunderDdosL4UdpStats#ntp_monlist_req_drop}
  */
  readonly ntpMonlistReqDrop?: number;
  /**
  * NTP Monlist Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#ntp_monlist_resp DataThunderDdosL4UdpStats#ntp_monlist_resp}
  */
  readonly ntpMonlistResp?: number;
  /**
  * NTP Monlist Response Blacklsited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#ntp_monlist_resp_bl DataThunderDdosL4UdpStats#ntp_monlist_resp_bl}
  */
  readonly ntpMonlistRespBl?: number;
  /**
  * NTP Monlist Response Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#ntp_monlist_resp_drop DataThunderDdosL4UdpStats#ntp_monlist_resp_drop}
  */
  readonly ntpMonlistRespDrop?: number;
  /**
  * SrcDst Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#src_dst_udp_filter_action_blacklist DataThunderDdosL4UdpStats#src_dst_udp_filter_action_blacklist}
  */
  readonly srcDstUdpFilterActionBlacklist?: number;
  /**
  * SrcDst Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#src_dst_udp_filter_action_default_pass DataThunderDdosL4UdpStats#src_dst_udp_filter_action_default_pass}
  */
  readonly srcDstUdpFilterActionDefaultPass?: number;
  /**
  * SrcDst Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#src_dst_udp_filter_action_drop DataThunderDdosL4UdpStats#src_dst_udp_filter_action_drop}
  */
  readonly srcDstUdpFilterActionDrop?: number;
  /**
  * SrcDst Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#src_dst_udp_filter_action_whitelist DataThunderDdosL4UdpStats#src_dst_udp_filter_action_whitelist}
  */
  readonly srcDstUdpFilterActionWhitelist?: number;
  /**
  * SrcDst Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#src_dst_udp_filter_match DataThunderDdosL4UdpStats#src_dst_udp_filter_match}
  */
  readonly srcDstUdpFilterMatch?: number;
  /**
  * SrcDst Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#src_dst_udp_filter_not_match DataThunderDdosL4UdpStats#src_dst_udp_filter_not_match}
  */
  readonly srcDstUdpFilterNotMatch?: number;
  /**
  * Src Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#src_udp_filter_action_blacklist DataThunderDdosL4UdpStats#src_udp_filter_action_blacklist}
  */
  readonly srcUdpFilterActionBlacklist?: number;
  /**
  * Src Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#src_udp_filter_action_default_pass DataThunderDdosL4UdpStats#src_udp_filter_action_default_pass}
  */
  readonly srcUdpFilterActionDefaultPass?: number;
  /**
  * Src Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#src_udp_filter_action_drop DataThunderDdosL4UdpStats#src_udp_filter_action_drop}
  */
  readonly srcUdpFilterActionDrop?: number;
  /**
  * Src Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#src_udp_filter_action_whitelist DataThunderDdosL4UdpStats#src_udp_filter_action_whitelist}
  */
  readonly srcUdpFilterActionWhitelist?: number;
  /**
  * Src Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#src_udp_filter_match DataThunderDdosL4UdpStats#src_udp_filter_match}
  */
  readonly srcUdpFilterMatch?: number;
  /**
  * Src Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#src_udp_filter_not_match DataThunderDdosL4UdpStats#src_udp_filter_not_match}
  */
  readonly srcUdpFilterNotMatch?: number;
  /**
  * UDP Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_any_exceed DataThunderDdosL4UdpStats#udp_any_exceed}
  */
  readonly udpAnyExceed?: number;
  /**
  * UDP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_auth_drop DataThunderDdosL4UdpStats#udp_auth_drop}
  */
  readonly udpAuthDrop?: number;
  /**
  * UDP Auth Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_auth_pass DataThunderDdosL4UdpStats#udp_auth_pass}
  */
  readonly udpAuthPass?: number;
  /**
  * UDP Conn Pkt Rate Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_conn_prate_bl DataThunderDdosL4UdpStats#udp_conn_prate_bl}
  */
  readonly udpConnPrateBl?: number;
  /**
  * UDP Conn Pkt Rate Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_conn_prate_drop DataThunderDdosL4UdpStats#udp_conn_prate_drop}
  */
  readonly udpConnPrateDrop?: number;
  /**
  * UDP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_conn_prate_exceed DataThunderDdosL4UdpStats#udp_conn_prate_exceed}
  */
  readonly udpConnPrateExceed?: number;
  /**
  * UDP Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_drop_bl DataThunderDdosL4UdpStats#udp_drop_bl}
  */
  readonly udpDropBl?: number;
  /**
  * UDP Src Blacklist User Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_drop_black_user_cfg_src DataThunderDdosL4UdpStats#udp_drop_black_user_cfg_src}
  */
  readonly udpDropBlackUserCfgSrc?: number;
  /**
  * UDP SrcDst Blacklist User Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_drop_black_user_cfg_src_dst DataThunderDdosL4UdpStats#udp_drop_black_user_cfg_src_dst}
  */
  readonly udpDropBlackUserCfgSrcDst?: number;
  /**
  * UDP Dst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_drop_dst DataThunderDdosL4UdpStats#udp_drop_dst}
  */
  readonly udpDropDst?: number;
  /**
  * UDP Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_drop_src DataThunderDdosL4UdpStats#udp_drop_src}
  */
  readonly udpDropSrc?: number;
  /**
  * UDP Frag Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_frag_drop DataThunderDdosL4UdpStats#udp_frag_drop}
  */
  readonly udpFragDrop?: number;
  /**
  * UDP Frag Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_frag_rcvd DataThunderDdosL4UdpStats#udp_frag_rcvd}
  */
  readonly udpFragRcvd?: number;
  /**
  * UDP Payload Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_payload_too_big DataThunderDdosL4UdpStats#udp_payload_too_big}
  */
  readonly udpPayloadTooBig?: number;
  /**
  * UDP Payload Too Large Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_payload_too_big_bl DataThunderDdosL4UdpStats#udp_payload_too_big_bl}
  */
  readonly udpPayloadTooBigBl?: number;
  /**
  * UDP Payload Too Large Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_payload_too_big_drop DataThunderDdosL4UdpStats#udp_payload_too_big_drop}
  */
  readonly udpPayloadTooBigDrop?: number;
  /**
  * UDP Payload Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_payload_too_small DataThunderDdosL4UdpStats#udp_payload_too_small}
  */
  readonly udpPayloadTooSmall?: number;
  /**
  * UDP Payload Too Small Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_payload_too_small_bl DataThunderDdosL4UdpStats#udp_payload_too_small_bl}
  */
  readonly udpPayloadTooSmallBl?: number;
  /**
  * UDP Payload Too Small Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_payload_too_small_drop DataThunderDdosL4UdpStats#udp_payload_too_small_drop}
  */
  readonly udpPayloadTooSmallDrop?: number;
  /**
  * UDP Port 0 Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_port_zero_drop DataThunderDdosL4UdpStats#udp_port_zero_drop}
  */
  readonly udpPortZeroDrop?: number;
  /**
  * UDP Retry Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_retry_fail DataThunderDdosL4UdpStats#udp_retry_fail}
  */
  readonly udpRetryFail?: number;
  /**
  * UDP Retry Fail Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_retry_fail_bl DataThunderDdosL4UdpStats#udp_retry_fail_bl}
  */
  readonly udpRetryFailBl?: number;
  /**
  * UDP Retry-Gap Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_retry_gap_drop DataThunderDdosL4UdpStats#udp_retry_gap_drop}
  */
  readonly udpRetryGapDrop?: number;
  /**
  * UDP Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_retry_pass DataThunderDdosL4UdpStats#udp_retry_pass}
  */
  readonly udpRetryPass?: number;
  /**
  * UDP Retry Pass WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_retry_pass_wl DataThunderDdosL4UdpStats#udp_retry_pass_wl}
  */
  readonly udpRetryPassWl?: number;
  /**
  * UDP Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_retry_start DataThunderDdosL4UdpStats#udp_retry_start}
  */
  readonly udpRetryStart?: number;
  /**
  * UDP Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_retry_timeout DataThunderDdosL4UdpStats#udp_retry_timeout}
  */
  readonly udpRetryTimeout?: number;
  /**
  * UDP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_sess_create DataThunderDdosL4UdpStats#udp_sess_create}
  */
  readonly udpSessCreate?: number;
  /**
  * UDP SrcDst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_src_dst_drop DataThunderDdosL4UdpStats#udp_src_dst_drop}
  */
  readonly udpSrcDstDrop?: number;
  /**
  * UDP Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_total_bytes_drop DataThunderDdosL4UdpStats#udp_total_bytes_drop}
  */
  readonly udpTotalBytesDrop?: number;
  /**
  * UDP Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_total_bytes_rcv DataThunderDdosL4UdpStats#udp_total_bytes_rcv}
  */
  readonly udpTotalBytesRcv?: number;
  /**
  * UDP Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_total_drop DataThunderDdosL4UdpStats#udp_total_drop}
  */
  readonly udpTotalDrop?: number;
  /**
  * UDP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_wellknown_src_port DataThunderDdosL4UdpStats#udp_wellknown_src_port}
  */
  readonly udpWellknownSrcPort?: number;
  /**
  * UDP SrcPort Wellknown Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_wellknown_src_port_bl DataThunderDdosL4UdpStats#udp_wellknown_src_port_bl}
  */
  readonly udpWellknownSrcPortBl?: number;
  /**
  * UDP SrcPort Wellknown Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#udp_wellknown_src_port_drop DataThunderDdosL4UdpStats#udp_wellknown_src_port_drop}
  */
  readonly udpWellknownSrcPortDrop?: number;
}

export function dataThunderDdosL4UdpStatsStatsToTerraform(struct?: DataThunderDdosL4UdpStatsStatsOutputReference | DataThunderDdosL4UdpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_udp_filter_action_blacklist: cdktf.numberToTerraform(struct!.dstUdpFilterActionBlacklist),
    dst_udp_filter_action_default_pass: cdktf.numberToTerraform(struct!.dstUdpFilterActionDefaultPass),
    dst_udp_filter_action_drop: cdktf.numberToTerraform(struct!.dstUdpFilterActionDrop),
    dst_udp_filter_action_whitelist: cdktf.numberToTerraform(struct!.dstUdpFilterActionWhitelist),
    dst_udp_filter_match: cdktf.numberToTerraform(struct!.dstUdpFilterMatch),
    dst_udp_filter_not_match: cdktf.numberToTerraform(struct!.dstUdpFilterNotMatch),
    instateless: cdktf.numberToTerraform(struct!.instateless),
    inudp: cdktf.numberToTerraform(struct!.inudp),
    ntp_monlist_req: cdktf.numberToTerraform(struct!.ntpMonlistReq),
    ntp_monlist_req_bl: cdktf.numberToTerraform(struct!.ntpMonlistReqBl),
    ntp_monlist_req_drop: cdktf.numberToTerraform(struct!.ntpMonlistReqDrop),
    ntp_monlist_resp: cdktf.numberToTerraform(struct!.ntpMonlistResp),
    ntp_monlist_resp_bl: cdktf.numberToTerraform(struct!.ntpMonlistRespBl),
    ntp_monlist_resp_drop: cdktf.numberToTerraform(struct!.ntpMonlistRespDrop),
    src_dst_udp_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcDstUdpFilterActionBlacklist),
    src_dst_udp_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcDstUdpFilterActionDefaultPass),
    src_dst_udp_filter_action_drop: cdktf.numberToTerraform(struct!.srcDstUdpFilterActionDrop),
    src_dst_udp_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcDstUdpFilterActionWhitelist),
    src_dst_udp_filter_match: cdktf.numberToTerraform(struct!.srcDstUdpFilterMatch),
    src_dst_udp_filter_not_match: cdktf.numberToTerraform(struct!.srcDstUdpFilterNotMatch),
    src_udp_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcUdpFilterActionBlacklist),
    src_udp_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcUdpFilterActionDefaultPass),
    src_udp_filter_action_drop: cdktf.numberToTerraform(struct!.srcUdpFilterActionDrop),
    src_udp_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcUdpFilterActionWhitelist),
    src_udp_filter_match: cdktf.numberToTerraform(struct!.srcUdpFilterMatch),
    src_udp_filter_not_match: cdktf.numberToTerraform(struct!.srcUdpFilterNotMatch),
    udp_any_exceed: cdktf.numberToTerraform(struct!.udpAnyExceed),
    udp_auth_drop: cdktf.numberToTerraform(struct!.udpAuthDrop),
    udp_auth_pass: cdktf.numberToTerraform(struct!.udpAuthPass),
    udp_conn_prate_bl: cdktf.numberToTerraform(struct!.udpConnPrateBl),
    udp_conn_prate_drop: cdktf.numberToTerraform(struct!.udpConnPrateDrop),
    udp_conn_prate_exceed: cdktf.numberToTerraform(struct!.udpConnPrateExceed),
    udp_drop_bl: cdktf.numberToTerraform(struct!.udpDropBl),
    udp_drop_black_user_cfg_src: cdktf.numberToTerraform(struct!.udpDropBlackUserCfgSrc),
    udp_drop_black_user_cfg_src_dst: cdktf.numberToTerraform(struct!.udpDropBlackUserCfgSrcDst),
    udp_drop_dst: cdktf.numberToTerraform(struct!.udpDropDst),
    udp_drop_src: cdktf.numberToTerraform(struct!.udpDropSrc),
    udp_frag_drop: cdktf.numberToTerraform(struct!.udpFragDrop),
    udp_frag_rcvd: cdktf.numberToTerraform(struct!.udpFragRcvd),
    udp_payload_too_big: cdktf.numberToTerraform(struct!.udpPayloadTooBig),
    udp_payload_too_big_bl: cdktf.numberToTerraform(struct!.udpPayloadTooBigBl),
    udp_payload_too_big_drop: cdktf.numberToTerraform(struct!.udpPayloadTooBigDrop),
    udp_payload_too_small: cdktf.numberToTerraform(struct!.udpPayloadTooSmall),
    udp_payload_too_small_bl: cdktf.numberToTerraform(struct!.udpPayloadTooSmallBl),
    udp_payload_too_small_drop: cdktf.numberToTerraform(struct!.udpPayloadTooSmallDrop),
    udp_port_zero_drop: cdktf.numberToTerraform(struct!.udpPortZeroDrop),
    udp_retry_fail: cdktf.numberToTerraform(struct!.udpRetryFail),
    udp_retry_fail_bl: cdktf.numberToTerraform(struct!.udpRetryFailBl),
    udp_retry_gap_drop: cdktf.numberToTerraform(struct!.udpRetryGapDrop),
    udp_retry_pass: cdktf.numberToTerraform(struct!.udpRetryPass),
    udp_retry_pass_wl: cdktf.numberToTerraform(struct!.udpRetryPassWl),
    udp_retry_start: cdktf.numberToTerraform(struct!.udpRetryStart),
    udp_retry_timeout: cdktf.numberToTerraform(struct!.udpRetryTimeout),
    udp_sess_create: cdktf.numberToTerraform(struct!.udpSessCreate),
    udp_src_dst_drop: cdktf.numberToTerraform(struct!.udpSrcDstDrop),
    udp_total_bytes_drop: cdktf.numberToTerraform(struct!.udpTotalBytesDrop),
    udp_total_bytes_rcv: cdktf.numberToTerraform(struct!.udpTotalBytesRcv),
    udp_total_drop: cdktf.numberToTerraform(struct!.udpTotalDrop),
    udp_wellknown_src_port: cdktf.numberToTerraform(struct!.udpWellknownSrcPort),
    udp_wellknown_src_port_bl: cdktf.numberToTerraform(struct!.udpWellknownSrcPortBl),
    udp_wellknown_src_port_drop: cdktf.numberToTerraform(struct!.udpWellknownSrcPortDrop),
  }
}


export function dataThunderDdosL4UdpStatsStatsToHclTerraform(struct?: DataThunderDdosL4UdpStatsStatsOutputReference | DataThunderDdosL4UdpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_udp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instateless: {
      value: cdktf.numberToHclTerraform(struct!.instateless),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inudp: {
      value: cdktf.numberToHclTerraform(struct!.inudp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_monlist_req: {
      value: cdktf.numberToHclTerraform(struct!.ntpMonlistReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_monlist_req_bl: {
      value: cdktf.numberToHclTerraform(struct!.ntpMonlistReqBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_monlist_req_drop: {
      value: cdktf.numberToHclTerraform(struct!.ntpMonlistReqDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_monlist_resp: {
      value: cdktf.numberToHclTerraform(struct!.ntpMonlistResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_monlist_resp_bl: {
      value: cdktf.numberToHclTerraform(struct!.ntpMonlistRespBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_monlist_resp_drop: {
      value: cdktf.numberToHclTerraform(struct!.ntpMonlistRespDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_udp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcDstUdpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_udp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcDstUdpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_udp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcDstUdpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_udp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcDstUdpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_udp_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.srcDstUdpFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_udp_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcDstUdpFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.udpAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_conn_prate_bl: {
      value: cdktf.numberToHclTerraform(struct!.udpConnPrateBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_conn_prate_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpConnPrateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_conn_prate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.udpConnPrateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_drop_bl: {
      value: cdktf.numberToHclTerraform(struct!.udpDropBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_drop_black_user_cfg_src: {
      value: cdktf.numberToHclTerraform(struct!.udpDropBlackUserCfgSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_drop_black_user_cfg_src_dst: {
      value: cdktf.numberToHclTerraform(struct!.udpDropBlackUserCfgSrcDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_drop_dst: {
      value: cdktf.numberToHclTerraform(struct!.udpDropDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_drop_src: {
      value: cdktf.numberToHclTerraform(struct!.udpDropSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_frag_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.udpFragRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_payload_too_big: {
      value: cdktf.numberToHclTerraform(struct!.udpPayloadTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_payload_too_big_bl: {
      value: cdktf.numberToHclTerraform(struct!.udpPayloadTooBigBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_payload_too_big_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpPayloadTooBigDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_payload_too_small: {
      value: cdktf.numberToHclTerraform(struct!.udpPayloadTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_payload_too_small_bl: {
      value: cdktf.numberToHclTerraform(struct!.udpPayloadTooSmallBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_payload_too_small_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpPayloadTooSmallDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_zero_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpPortZeroDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_fail: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_fail_bl: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryFailBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_pass: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_pass_wl: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryPassWl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_start: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_sess_create: {
      value: cdktf.numberToHclTerraform(struct!.udpSessCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_src_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpSrcDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_total_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpTotalBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_total_bytes_rcv: {
      value: cdktf.numberToHclTerraform(struct!.udpTotalBytesRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_total_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpTotalDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_wellknown_src_port: {
      value: cdktf.numberToHclTerraform(struct!.udpWellknownSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_wellknown_src_port_bl: {
      value: cdktf.numberToHclTerraform(struct!.udpWellknownSrcPortBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_wellknown_src_port_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpWellknownSrcPortDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosL4UdpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosL4UdpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstUdpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFilterActionBlacklist = this._dstUdpFilterActionBlacklist;
    }
    if (this._dstUdpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFilterActionDefaultPass = this._dstUdpFilterActionDefaultPass;
    }
    if (this._dstUdpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFilterActionDrop = this._dstUdpFilterActionDrop;
    }
    if (this._dstUdpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFilterActionWhitelist = this._dstUdpFilterActionWhitelist;
    }
    if (this._dstUdpFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFilterMatch = this._dstUdpFilterMatch;
    }
    if (this._dstUdpFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFilterNotMatch = this._dstUdpFilterNotMatch;
    }
    if (this._instateless !== undefined) {
      hasAnyValues = true;
      internalValueResult.instateless = this._instateless;
    }
    if (this._inudp !== undefined) {
      hasAnyValues = true;
      internalValueResult.inudp = this._inudp;
    }
    if (this._ntpMonlistReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistReq = this._ntpMonlistReq;
    }
    if (this._ntpMonlistReqBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistReqBl = this._ntpMonlistReqBl;
    }
    if (this._ntpMonlistReqDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistReqDrop = this._ntpMonlistReqDrop;
    }
    if (this._ntpMonlistResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistResp = this._ntpMonlistResp;
    }
    if (this._ntpMonlistRespBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistRespBl = this._ntpMonlistRespBl;
    }
    if (this._ntpMonlistRespDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistRespDrop = this._ntpMonlistRespDrop;
    }
    if (this._srcDstUdpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstUdpFilterActionBlacklist = this._srcDstUdpFilterActionBlacklist;
    }
    if (this._srcDstUdpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstUdpFilterActionDefaultPass = this._srcDstUdpFilterActionDefaultPass;
    }
    if (this._srcDstUdpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstUdpFilterActionDrop = this._srcDstUdpFilterActionDrop;
    }
    if (this._srcDstUdpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstUdpFilterActionWhitelist = this._srcDstUdpFilterActionWhitelist;
    }
    if (this._srcDstUdpFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstUdpFilterMatch = this._srcDstUdpFilterMatch;
    }
    if (this._srcDstUdpFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstUdpFilterNotMatch = this._srcDstUdpFilterNotMatch;
    }
    if (this._srcUdpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpFilterActionBlacklist = this._srcUdpFilterActionBlacklist;
    }
    if (this._srcUdpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpFilterActionDefaultPass = this._srcUdpFilterActionDefaultPass;
    }
    if (this._srcUdpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpFilterActionDrop = this._srcUdpFilterActionDrop;
    }
    if (this._srcUdpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpFilterActionWhitelist = this._srcUdpFilterActionWhitelist;
    }
    if (this._srcUdpFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpFilterMatch = this._srcUdpFilterMatch;
    }
    if (this._srcUdpFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpFilterNotMatch = this._srcUdpFilterNotMatch;
    }
    if (this._udpAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAnyExceed = this._udpAnyExceed;
    }
    if (this._udpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthDrop = this._udpAuthDrop;
    }
    if (this._udpAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthPass = this._udpAuthPass;
    }
    if (this._udpConnPrateBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpConnPrateBl = this._udpConnPrateBl;
    }
    if (this._udpConnPrateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpConnPrateDrop = this._udpConnPrateDrop;
    }
    if (this._udpConnPrateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpConnPrateExceed = this._udpConnPrateExceed;
    }
    if (this._udpDropBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpDropBl = this._udpDropBl;
    }
    if (this._udpDropBlackUserCfgSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpDropBlackUserCfgSrc = this._udpDropBlackUserCfgSrc;
    }
    if (this._udpDropBlackUserCfgSrcDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpDropBlackUserCfgSrcDst = this._udpDropBlackUserCfgSrcDst;
    }
    if (this._udpDropDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpDropDst = this._udpDropDst;
    }
    if (this._udpDropSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpDropSrc = this._udpDropSrc;
    }
    if (this._udpFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFragDrop = this._udpFragDrop;
    }
    if (this._udpFragRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFragRcvd = this._udpFragRcvd;
    }
    if (this._udpPayloadTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPayloadTooBig = this._udpPayloadTooBig;
    }
    if (this._udpPayloadTooBigBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPayloadTooBigBl = this._udpPayloadTooBigBl;
    }
    if (this._udpPayloadTooBigDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPayloadTooBigDrop = this._udpPayloadTooBigDrop;
    }
    if (this._udpPayloadTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPayloadTooSmall = this._udpPayloadTooSmall;
    }
    if (this._udpPayloadTooSmallBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPayloadTooSmallBl = this._udpPayloadTooSmallBl;
    }
    if (this._udpPayloadTooSmallDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPayloadTooSmallDrop = this._udpPayloadTooSmallDrop;
    }
    if (this._udpPortZeroDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortZeroDrop = this._udpPortZeroDrop;
    }
    if (this._udpRetryFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryFail = this._udpRetryFail;
    }
    if (this._udpRetryFailBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryFailBl = this._udpRetryFailBl;
    }
    if (this._udpRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryGapDrop = this._udpRetryGapDrop;
    }
    if (this._udpRetryPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryPass = this._udpRetryPass;
    }
    if (this._udpRetryPassWl !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryPassWl = this._udpRetryPassWl;
    }
    if (this._udpRetryStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryStart = this._udpRetryStart;
    }
    if (this._udpRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryTimeout = this._udpRetryTimeout;
    }
    if (this._udpSessCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSessCreate = this._udpSessCreate;
    }
    if (this._udpSrcDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSrcDstDrop = this._udpSrcDstDrop;
    }
    if (this._udpTotalBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTotalBytesDrop = this._udpTotalBytesDrop;
    }
    if (this._udpTotalBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTotalBytesRcv = this._udpTotalBytesRcv;
    }
    if (this._udpTotalDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTotalDrop = this._udpTotalDrop;
    }
    if (this._udpWellknownSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpWellknownSrcPort = this._udpWellknownSrcPort;
    }
    if (this._udpWellknownSrcPortBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpWellknownSrcPortBl = this._udpWellknownSrcPortBl;
    }
    if (this._udpWellknownSrcPortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpWellknownSrcPortDrop = this._udpWellknownSrcPortDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosL4UdpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstUdpFilterActionBlacklist = undefined;
      this._dstUdpFilterActionDefaultPass = undefined;
      this._dstUdpFilterActionDrop = undefined;
      this._dstUdpFilterActionWhitelist = undefined;
      this._dstUdpFilterMatch = undefined;
      this._dstUdpFilterNotMatch = undefined;
      this._instateless = undefined;
      this._inudp = undefined;
      this._ntpMonlistReq = undefined;
      this._ntpMonlistReqBl = undefined;
      this._ntpMonlistReqDrop = undefined;
      this._ntpMonlistResp = undefined;
      this._ntpMonlistRespBl = undefined;
      this._ntpMonlistRespDrop = undefined;
      this._srcDstUdpFilterActionBlacklist = undefined;
      this._srcDstUdpFilterActionDefaultPass = undefined;
      this._srcDstUdpFilterActionDrop = undefined;
      this._srcDstUdpFilterActionWhitelist = undefined;
      this._srcDstUdpFilterMatch = undefined;
      this._srcDstUdpFilterNotMatch = undefined;
      this._srcUdpFilterActionBlacklist = undefined;
      this._srcUdpFilterActionDefaultPass = undefined;
      this._srcUdpFilterActionDrop = undefined;
      this._srcUdpFilterActionWhitelist = undefined;
      this._srcUdpFilterMatch = undefined;
      this._srcUdpFilterNotMatch = undefined;
      this._udpAnyExceed = undefined;
      this._udpAuthDrop = undefined;
      this._udpAuthPass = undefined;
      this._udpConnPrateBl = undefined;
      this._udpConnPrateDrop = undefined;
      this._udpConnPrateExceed = undefined;
      this._udpDropBl = undefined;
      this._udpDropBlackUserCfgSrc = undefined;
      this._udpDropBlackUserCfgSrcDst = undefined;
      this._udpDropDst = undefined;
      this._udpDropSrc = undefined;
      this._udpFragDrop = undefined;
      this._udpFragRcvd = undefined;
      this._udpPayloadTooBig = undefined;
      this._udpPayloadTooBigBl = undefined;
      this._udpPayloadTooBigDrop = undefined;
      this._udpPayloadTooSmall = undefined;
      this._udpPayloadTooSmallBl = undefined;
      this._udpPayloadTooSmallDrop = undefined;
      this._udpPortZeroDrop = undefined;
      this._udpRetryFail = undefined;
      this._udpRetryFailBl = undefined;
      this._udpRetryGapDrop = undefined;
      this._udpRetryPass = undefined;
      this._udpRetryPassWl = undefined;
      this._udpRetryStart = undefined;
      this._udpRetryTimeout = undefined;
      this._udpSessCreate = undefined;
      this._udpSrcDstDrop = undefined;
      this._udpTotalBytesDrop = undefined;
      this._udpTotalBytesRcv = undefined;
      this._udpTotalDrop = undefined;
      this._udpWellknownSrcPort = undefined;
      this._udpWellknownSrcPortBl = undefined;
      this._udpWellknownSrcPortDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstUdpFilterActionBlacklist = value.dstUdpFilterActionBlacklist;
      this._dstUdpFilterActionDefaultPass = value.dstUdpFilterActionDefaultPass;
      this._dstUdpFilterActionDrop = value.dstUdpFilterActionDrop;
      this._dstUdpFilterActionWhitelist = value.dstUdpFilterActionWhitelist;
      this._dstUdpFilterMatch = value.dstUdpFilterMatch;
      this._dstUdpFilterNotMatch = value.dstUdpFilterNotMatch;
      this._instateless = value.instateless;
      this._inudp = value.inudp;
      this._ntpMonlistReq = value.ntpMonlistReq;
      this._ntpMonlistReqBl = value.ntpMonlistReqBl;
      this._ntpMonlistReqDrop = value.ntpMonlistReqDrop;
      this._ntpMonlistResp = value.ntpMonlistResp;
      this._ntpMonlistRespBl = value.ntpMonlistRespBl;
      this._ntpMonlistRespDrop = value.ntpMonlistRespDrop;
      this._srcDstUdpFilterActionBlacklist = value.srcDstUdpFilterActionBlacklist;
      this._srcDstUdpFilterActionDefaultPass = value.srcDstUdpFilterActionDefaultPass;
      this._srcDstUdpFilterActionDrop = value.srcDstUdpFilterActionDrop;
      this._srcDstUdpFilterActionWhitelist = value.srcDstUdpFilterActionWhitelist;
      this._srcDstUdpFilterMatch = value.srcDstUdpFilterMatch;
      this._srcDstUdpFilterNotMatch = value.srcDstUdpFilterNotMatch;
      this._srcUdpFilterActionBlacklist = value.srcUdpFilterActionBlacklist;
      this._srcUdpFilterActionDefaultPass = value.srcUdpFilterActionDefaultPass;
      this._srcUdpFilterActionDrop = value.srcUdpFilterActionDrop;
      this._srcUdpFilterActionWhitelist = value.srcUdpFilterActionWhitelist;
      this._srcUdpFilterMatch = value.srcUdpFilterMatch;
      this._srcUdpFilterNotMatch = value.srcUdpFilterNotMatch;
      this._udpAnyExceed = value.udpAnyExceed;
      this._udpAuthDrop = value.udpAuthDrop;
      this._udpAuthPass = value.udpAuthPass;
      this._udpConnPrateBl = value.udpConnPrateBl;
      this._udpConnPrateDrop = value.udpConnPrateDrop;
      this._udpConnPrateExceed = value.udpConnPrateExceed;
      this._udpDropBl = value.udpDropBl;
      this._udpDropBlackUserCfgSrc = value.udpDropBlackUserCfgSrc;
      this._udpDropBlackUserCfgSrcDst = value.udpDropBlackUserCfgSrcDst;
      this._udpDropDst = value.udpDropDst;
      this._udpDropSrc = value.udpDropSrc;
      this._udpFragDrop = value.udpFragDrop;
      this._udpFragRcvd = value.udpFragRcvd;
      this._udpPayloadTooBig = value.udpPayloadTooBig;
      this._udpPayloadTooBigBl = value.udpPayloadTooBigBl;
      this._udpPayloadTooBigDrop = value.udpPayloadTooBigDrop;
      this._udpPayloadTooSmall = value.udpPayloadTooSmall;
      this._udpPayloadTooSmallBl = value.udpPayloadTooSmallBl;
      this._udpPayloadTooSmallDrop = value.udpPayloadTooSmallDrop;
      this._udpPortZeroDrop = value.udpPortZeroDrop;
      this._udpRetryFail = value.udpRetryFail;
      this._udpRetryFailBl = value.udpRetryFailBl;
      this._udpRetryGapDrop = value.udpRetryGapDrop;
      this._udpRetryPass = value.udpRetryPass;
      this._udpRetryPassWl = value.udpRetryPassWl;
      this._udpRetryStart = value.udpRetryStart;
      this._udpRetryTimeout = value.udpRetryTimeout;
      this._udpSessCreate = value.udpSessCreate;
      this._udpSrcDstDrop = value.udpSrcDstDrop;
      this._udpTotalBytesDrop = value.udpTotalBytesDrop;
      this._udpTotalBytesRcv = value.udpTotalBytesRcv;
      this._udpTotalDrop = value.udpTotalDrop;
      this._udpWellknownSrcPort = value.udpWellknownSrcPort;
      this._udpWellknownSrcPortBl = value.udpWellknownSrcPortBl;
      this._udpWellknownSrcPortDrop = value.udpWellknownSrcPortDrop;
    }
  }

  // dst_udp_filter_action_blacklist - computed: false, optional: true, required: false
  private _dstUdpFilterActionBlacklist?: number; 
  public get dstUdpFilterActionBlacklist() {
    return this.getNumberAttribute('dst_udp_filter_action_blacklist');
  }
  public set dstUdpFilterActionBlacklist(value: number) {
    this._dstUdpFilterActionBlacklist = value;
  }
  public resetDstUdpFilterActionBlacklist() {
    this._dstUdpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFilterActionBlacklistInput() {
    return this._dstUdpFilterActionBlacklist;
  }

  // dst_udp_filter_action_default_pass - computed: false, optional: true, required: false
  private _dstUdpFilterActionDefaultPass?: number; 
  public get dstUdpFilterActionDefaultPass() {
    return this.getNumberAttribute('dst_udp_filter_action_default_pass');
  }
  public set dstUdpFilterActionDefaultPass(value: number) {
    this._dstUdpFilterActionDefaultPass = value;
  }
  public resetDstUdpFilterActionDefaultPass() {
    this._dstUdpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFilterActionDefaultPassInput() {
    return this._dstUdpFilterActionDefaultPass;
  }

  // dst_udp_filter_action_drop - computed: false, optional: true, required: false
  private _dstUdpFilterActionDrop?: number; 
  public get dstUdpFilterActionDrop() {
    return this.getNumberAttribute('dst_udp_filter_action_drop');
  }
  public set dstUdpFilterActionDrop(value: number) {
    this._dstUdpFilterActionDrop = value;
  }
  public resetDstUdpFilterActionDrop() {
    this._dstUdpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFilterActionDropInput() {
    return this._dstUdpFilterActionDrop;
  }

  // dst_udp_filter_action_whitelist - computed: false, optional: true, required: false
  private _dstUdpFilterActionWhitelist?: number; 
  public get dstUdpFilterActionWhitelist() {
    return this.getNumberAttribute('dst_udp_filter_action_whitelist');
  }
  public set dstUdpFilterActionWhitelist(value: number) {
    this._dstUdpFilterActionWhitelist = value;
  }
  public resetDstUdpFilterActionWhitelist() {
    this._dstUdpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFilterActionWhitelistInput() {
    return this._dstUdpFilterActionWhitelist;
  }

  // dst_udp_filter_match - computed: false, optional: true, required: false
  private _dstUdpFilterMatch?: number; 
  public get dstUdpFilterMatch() {
    return this.getNumberAttribute('dst_udp_filter_match');
  }
  public set dstUdpFilterMatch(value: number) {
    this._dstUdpFilterMatch = value;
  }
  public resetDstUdpFilterMatch() {
    this._dstUdpFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFilterMatchInput() {
    return this._dstUdpFilterMatch;
  }

  // dst_udp_filter_not_match - computed: false, optional: true, required: false
  private _dstUdpFilterNotMatch?: number; 
  public get dstUdpFilterNotMatch() {
    return this.getNumberAttribute('dst_udp_filter_not_match');
  }
  public set dstUdpFilterNotMatch(value: number) {
    this._dstUdpFilterNotMatch = value;
  }
  public resetDstUdpFilterNotMatch() {
    this._dstUdpFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFilterNotMatchInput() {
    return this._dstUdpFilterNotMatch;
  }

  // instateless - computed: false, optional: true, required: false
  private _instateless?: number; 
  public get instateless() {
    return this.getNumberAttribute('instateless');
  }
  public set instateless(value: number) {
    this._instateless = value;
  }
  public resetInstateless() {
    this._instateless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instatelessInput() {
    return this._instateless;
  }

  // inudp - computed: false, optional: true, required: false
  private _inudp?: number; 
  public get inudp() {
    return this.getNumberAttribute('inudp');
  }
  public set inudp(value: number) {
    this._inudp = value;
  }
  public resetInudp() {
    this._inudp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inudpInput() {
    return this._inudp;
  }

  // ntp_monlist_req - computed: false, optional: true, required: false
  private _ntpMonlistReq?: number; 
  public get ntpMonlistReq() {
    return this.getNumberAttribute('ntp_monlist_req');
  }
  public set ntpMonlistReq(value: number) {
    this._ntpMonlistReq = value;
  }
  public resetNtpMonlistReq() {
    this._ntpMonlistReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistReqInput() {
    return this._ntpMonlistReq;
  }

  // ntp_monlist_req_bl - computed: false, optional: true, required: false
  private _ntpMonlistReqBl?: number; 
  public get ntpMonlistReqBl() {
    return this.getNumberAttribute('ntp_monlist_req_bl');
  }
  public set ntpMonlistReqBl(value: number) {
    this._ntpMonlistReqBl = value;
  }
  public resetNtpMonlistReqBl() {
    this._ntpMonlistReqBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistReqBlInput() {
    return this._ntpMonlistReqBl;
  }

  // ntp_monlist_req_drop - computed: false, optional: true, required: false
  private _ntpMonlistReqDrop?: number; 
  public get ntpMonlistReqDrop() {
    return this.getNumberAttribute('ntp_monlist_req_drop');
  }
  public set ntpMonlistReqDrop(value: number) {
    this._ntpMonlistReqDrop = value;
  }
  public resetNtpMonlistReqDrop() {
    this._ntpMonlistReqDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistReqDropInput() {
    return this._ntpMonlistReqDrop;
  }

  // ntp_monlist_resp - computed: false, optional: true, required: false
  private _ntpMonlistResp?: number; 
  public get ntpMonlistResp() {
    return this.getNumberAttribute('ntp_monlist_resp');
  }
  public set ntpMonlistResp(value: number) {
    this._ntpMonlistResp = value;
  }
  public resetNtpMonlistResp() {
    this._ntpMonlistResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistRespInput() {
    return this._ntpMonlistResp;
  }

  // ntp_monlist_resp_bl - computed: false, optional: true, required: false
  private _ntpMonlistRespBl?: number; 
  public get ntpMonlistRespBl() {
    return this.getNumberAttribute('ntp_monlist_resp_bl');
  }
  public set ntpMonlistRespBl(value: number) {
    this._ntpMonlistRespBl = value;
  }
  public resetNtpMonlistRespBl() {
    this._ntpMonlistRespBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistRespBlInput() {
    return this._ntpMonlistRespBl;
  }

  // ntp_monlist_resp_drop - computed: false, optional: true, required: false
  private _ntpMonlistRespDrop?: number; 
  public get ntpMonlistRespDrop() {
    return this.getNumberAttribute('ntp_monlist_resp_drop');
  }
  public set ntpMonlistRespDrop(value: number) {
    this._ntpMonlistRespDrop = value;
  }
  public resetNtpMonlistRespDrop() {
    this._ntpMonlistRespDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistRespDropInput() {
    return this._ntpMonlistRespDrop;
  }

  // src_dst_udp_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcDstUdpFilterActionBlacklist?: number; 
  public get srcDstUdpFilterActionBlacklist() {
    return this.getNumberAttribute('src_dst_udp_filter_action_blacklist');
  }
  public set srcDstUdpFilterActionBlacklist(value: number) {
    this._srcDstUdpFilterActionBlacklist = value;
  }
  public resetSrcDstUdpFilterActionBlacklist() {
    this._srcDstUdpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstUdpFilterActionBlacklistInput() {
    return this._srcDstUdpFilterActionBlacklist;
  }

  // src_dst_udp_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcDstUdpFilterActionDefaultPass?: number; 
  public get srcDstUdpFilterActionDefaultPass() {
    return this.getNumberAttribute('src_dst_udp_filter_action_default_pass');
  }
  public set srcDstUdpFilterActionDefaultPass(value: number) {
    this._srcDstUdpFilterActionDefaultPass = value;
  }
  public resetSrcDstUdpFilterActionDefaultPass() {
    this._srcDstUdpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstUdpFilterActionDefaultPassInput() {
    return this._srcDstUdpFilterActionDefaultPass;
  }

  // src_dst_udp_filter_action_drop - computed: false, optional: true, required: false
  private _srcDstUdpFilterActionDrop?: number; 
  public get srcDstUdpFilterActionDrop() {
    return this.getNumberAttribute('src_dst_udp_filter_action_drop');
  }
  public set srcDstUdpFilterActionDrop(value: number) {
    this._srcDstUdpFilterActionDrop = value;
  }
  public resetSrcDstUdpFilterActionDrop() {
    this._srcDstUdpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstUdpFilterActionDropInput() {
    return this._srcDstUdpFilterActionDrop;
  }

  // src_dst_udp_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcDstUdpFilterActionWhitelist?: number; 
  public get srcDstUdpFilterActionWhitelist() {
    return this.getNumberAttribute('src_dst_udp_filter_action_whitelist');
  }
  public set srcDstUdpFilterActionWhitelist(value: number) {
    this._srcDstUdpFilterActionWhitelist = value;
  }
  public resetSrcDstUdpFilterActionWhitelist() {
    this._srcDstUdpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstUdpFilterActionWhitelistInput() {
    return this._srcDstUdpFilterActionWhitelist;
  }

  // src_dst_udp_filter_match - computed: false, optional: true, required: false
  private _srcDstUdpFilterMatch?: number; 
  public get srcDstUdpFilterMatch() {
    return this.getNumberAttribute('src_dst_udp_filter_match');
  }
  public set srcDstUdpFilterMatch(value: number) {
    this._srcDstUdpFilterMatch = value;
  }
  public resetSrcDstUdpFilterMatch() {
    this._srcDstUdpFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstUdpFilterMatchInput() {
    return this._srcDstUdpFilterMatch;
  }

  // src_dst_udp_filter_not_match - computed: false, optional: true, required: false
  private _srcDstUdpFilterNotMatch?: number; 
  public get srcDstUdpFilterNotMatch() {
    return this.getNumberAttribute('src_dst_udp_filter_not_match');
  }
  public set srcDstUdpFilterNotMatch(value: number) {
    this._srcDstUdpFilterNotMatch = value;
  }
  public resetSrcDstUdpFilterNotMatch() {
    this._srcDstUdpFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstUdpFilterNotMatchInput() {
    return this._srcDstUdpFilterNotMatch;
  }

  // src_udp_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcUdpFilterActionBlacklist?: number; 
  public get srcUdpFilterActionBlacklist() {
    return this.getNumberAttribute('src_udp_filter_action_blacklist');
  }
  public set srcUdpFilterActionBlacklist(value: number) {
    this._srcUdpFilterActionBlacklist = value;
  }
  public resetSrcUdpFilterActionBlacklist() {
    this._srcUdpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpFilterActionBlacklistInput() {
    return this._srcUdpFilterActionBlacklist;
  }

  // src_udp_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcUdpFilterActionDefaultPass?: number; 
  public get srcUdpFilterActionDefaultPass() {
    return this.getNumberAttribute('src_udp_filter_action_default_pass');
  }
  public set srcUdpFilterActionDefaultPass(value: number) {
    this._srcUdpFilterActionDefaultPass = value;
  }
  public resetSrcUdpFilterActionDefaultPass() {
    this._srcUdpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpFilterActionDefaultPassInput() {
    return this._srcUdpFilterActionDefaultPass;
  }

  // src_udp_filter_action_drop - computed: false, optional: true, required: false
  private _srcUdpFilterActionDrop?: number; 
  public get srcUdpFilterActionDrop() {
    return this.getNumberAttribute('src_udp_filter_action_drop');
  }
  public set srcUdpFilterActionDrop(value: number) {
    this._srcUdpFilterActionDrop = value;
  }
  public resetSrcUdpFilterActionDrop() {
    this._srcUdpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpFilterActionDropInput() {
    return this._srcUdpFilterActionDrop;
  }

  // src_udp_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcUdpFilterActionWhitelist?: number; 
  public get srcUdpFilterActionWhitelist() {
    return this.getNumberAttribute('src_udp_filter_action_whitelist');
  }
  public set srcUdpFilterActionWhitelist(value: number) {
    this._srcUdpFilterActionWhitelist = value;
  }
  public resetSrcUdpFilterActionWhitelist() {
    this._srcUdpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpFilterActionWhitelistInput() {
    return this._srcUdpFilterActionWhitelist;
  }

  // src_udp_filter_match - computed: false, optional: true, required: false
  private _srcUdpFilterMatch?: number; 
  public get srcUdpFilterMatch() {
    return this.getNumberAttribute('src_udp_filter_match');
  }
  public set srcUdpFilterMatch(value: number) {
    this._srcUdpFilterMatch = value;
  }
  public resetSrcUdpFilterMatch() {
    this._srcUdpFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpFilterMatchInput() {
    return this._srcUdpFilterMatch;
  }

  // src_udp_filter_not_match - computed: false, optional: true, required: false
  private _srcUdpFilterNotMatch?: number; 
  public get srcUdpFilterNotMatch() {
    return this.getNumberAttribute('src_udp_filter_not_match');
  }
  public set srcUdpFilterNotMatch(value: number) {
    this._srcUdpFilterNotMatch = value;
  }
  public resetSrcUdpFilterNotMatch() {
    this._srcUdpFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpFilterNotMatchInput() {
    return this._srcUdpFilterNotMatch;
  }

  // udp_any_exceed - computed: false, optional: true, required: false
  private _udpAnyExceed?: number; 
  public get udpAnyExceed() {
    return this.getNumberAttribute('udp_any_exceed');
  }
  public set udpAnyExceed(value: number) {
    this._udpAnyExceed = value;
  }
  public resetUdpAnyExceed() {
    this._udpAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAnyExceedInput() {
    return this._udpAnyExceed;
  }

  // udp_auth_drop - computed: false, optional: true, required: false
  private _udpAuthDrop?: number; 
  public get udpAuthDrop() {
    return this.getNumberAttribute('udp_auth_drop');
  }
  public set udpAuthDrop(value: number) {
    this._udpAuthDrop = value;
  }
  public resetUdpAuthDrop() {
    this._udpAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthDropInput() {
    return this._udpAuthDrop;
  }

  // udp_auth_pass - computed: false, optional: true, required: false
  private _udpAuthPass?: number; 
  public get udpAuthPass() {
    return this.getNumberAttribute('udp_auth_pass');
  }
  public set udpAuthPass(value: number) {
    this._udpAuthPass = value;
  }
  public resetUdpAuthPass() {
    this._udpAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthPassInput() {
    return this._udpAuthPass;
  }

  // udp_conn_prate_bl - computed: false, optional: true, required: false
  private _udpConnPrateBl?: number; 
  public get udpConnPrateBl() {
    return this.getNumberAttribute('udp_conn_prate_bl');
  }
  public set udpConnPrateBl(value: number) {
    this._udpConnPrateBl = value;
  }
  public resetUdpConnPrateBl() {
    this._udpConnPrateBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpConnPrateBlInput() {
    return this._udpConnPrateBl;
  }

  // udp_conn_prate_drop - computed: false, optional: true, required: false
  private _udpConnPrateDrop?: number; 
  public get udpConnPrateDrop() {
    return this.getNumberAttribute('udp_conn_prate_drop');
  }
  public set udpConnPrateDrop(value: number) {
    this._udpConnPrateDrop = value;
  }
  public resetUdpConnPrateDrop() {
    this._udpConnPrateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpConnPrateDropInput() {
    return this._udpConnPrateDrop;
  }

  // udp_conn_prate_exceed - computed: false, optional: true, required: false
  private _udpConnPrateExceed?: number; 
  public get udpConnPrateExceed() {
    return this.getNumberAttribute('udp_conn_prate_exceed');
  }
  public set udpConnPrateExceed(value: number) {
    this._udpConnPrateExceed = value;
  }
  public resetUdpConnPrateExceed() {
    this._udpConnPrateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpConnPrateExceedInput() {
    return this._udpConnPrateExceed;
  }

  // udp_drop_bl - computed: false, optional: true, required: false
  private _udpDropBl?: number; 
  public get udpDropBl() {
    return this.getNumberAttribute('udp_drop_bl');
  }
  public set udpDropBl(value: number) {
    this._udpDropBl = value;
  }
  public resetUdpDropBl() {
    this._udpDropBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpDropBlInput() {
    return this._udpDropBl;
  }

  // udp_drop_black_user_cfg_src - computed: false, optional: true, required: false
  private _udpDropBlackUserCfgSrc?: number; 
  public get udpDropBlackUserCfgSrc() {
    return this.getNumberAttribute('udp_drop_black_user_cfg_src');
  }
  public set udpDropBlackUserCfgSrc(value: number) {
    this._udpDropBlackUserCfgSrc = value;
  }
  public resetUdpDropBlackUserCfgSrc() {
    this._udpDropBlackUserCfgSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpDropBlackUserCfgSrcInput() {
    return this._udpDropBlackUserCfgSrc;
  }

  // udp_drop_black_user_cfg_src_dst - computed: false, optional: true, required: false
  private _udpDropBlackUserCfgSrcDst?: number; 
  public get udpDropBlackUserCfgSrcDst() {
    return this.getNumberAttribute('udp_drop_black_user_cfg_src_dst');
  }
  public set udpDropBlackUserCfgSrcDst(value: number) {
    this._udpDropBlackUserCfgSrcDst = value;
  }
  public resetUdpDropBlackUserCfgSrcDst() {
    this._udpDropBlackUserCfgSrcDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpDropBlackUserCfgSrcDstInput() {
    return this._udpDropBlackUserCfgSrcDst;
  }

  // udp_drop_dst - computed: false, optional: true, required: false
  private _udpDropDst?: number; 
  public get udpDropDst() {
    return this.getNumberAttribute('udp_drop_dst');
  }
  public set udpDropDst(value: number) {
    this._udpDropDst = value;
  }
  public resetUdpDropDst() {
    this._udpDropDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpDropDstInput() {
    return this._udpDropDst;
  }

  // udp_drop_src - computed: false, optional: true, required: false
  private _udpDropSrc?: number; 
  public get udpDropSrc() {
    return this.getNumberAttribute('udp_drop_src');
  }
  public set udpDropSrc(value: number) {
    this._udpDropSrc = value;
  }
  public resetUdpDropSrc() {
    this._udpDropSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpDropSrcInput() {
    return this._udpDropSrc;
  }

  // udp_frag_drop - computed: false, optional: true, required: false
  private _udpFragDrop?: number; 
  public get udpFragDrop() {
    return this.getNumberAttribute('udp_frag_drop');
  }
  public set udpFragDrop(value: number) {
    this._udpFragDrop = value;
  }
  public resetUdpFragDrop() {
    this._udpFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFragDropInput() {
    return this._udpFragDrop;
  }

  // udp_frag_rcvd - computed: false, optional: true, required: false
  private _udpFragRcvd?: number; 
  public get udpFragRcvd() {
    return this.getNumberAttribute('udp_frag_rcvd');
  }
  public set udpFragRcvd(value: number) {
    this._udpFragRcvd = value;
  }
  public resetUdpFragRcvd() {
    this._udpFragRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFragRcvdInput() {
    return this._udpFragRcvd;
  }

  // udp_payload_too_big - computed: false, optional: true, required: false
  private _udpPayloadTooBig?: number; 
  public get udpPayloadTooBig() {
    return this.getNumberAttribute('udp_payload_too_big');
  }
  public set udpPayloadTooBig(value: number) {
    this._udpPayloadTooBig = value;
  }
  public resetUdpPayloadTooBig() {
    this._udpPayloadTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPayloadTooBigInput() {
    return this._udpPayloadTooBig;
  }

  // udp_payload_too_big_bl - computed: false, optional: true, required: false
  private _udpPayloadTooBigBl?: number; 
  public get udpPayloadTooBigBl() {
    return this.getNumberAttribute('udp_payload_too_big_bl');
  }
  public set udpPayloadTooBigBl(value: number) {
    this._udpPayloadTooBigBl = value;
  }
  public resetUdpPayloadTooBigBl() {
    this._udpPayloadTooBigBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPayloadTooBigBlInput() {
    return this._udpPayloadTooBigBl;
  }

  // udp_payload_too_big_drop - computed: false, optional: true, required: false
  private _udpPayloadTooBigDrop?: number; 
  public get udpPayloadTooBigDrop() {
    return this.getNumberAttribute('udp_payload_too_big_drop');
  }
  public set udpPayloadTooBigDrop(value: number) {
    this._udpPayloadTooBigDrop = value;
  }
  public resetUdpPayloadTooBigDrop() {
    this._udpPayloadTooBigDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPayloadTooBigDropInput() {
    return this._udpPayloadTooBigDrop;
  }

  // udp_payload_too_small - computed: false, optional: true, required: false
  private _udpPayloadTooSmall?: number; 
  public get udpPayloadTooSmall() {
    return this.getNumberAttribute('udp_payload_too_small');
  }
  public set udpPayloadTooSmall(value: number) {
    this._udpPayloadTooSmall = value;
  }
  public resetUdpPayloadTooSmall() {
    this._udpPayloadTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPayloadTooSmallInput() {
    return this._udpPayloadTooSmall;
  }

  // udp_payload_too_small_bl - computed: false, optional: true, required: false
  private _udpPayloadTooSmallBl?: number; 
  public get udpPayloadTooSmallBl() {
    return this.getNumberAttribute('udp_payload_too_small_bl');
  }
  public set udpPayloadTooSmallBl(value: number) {
    this._udpPayloadTooSmallBl = value;
  }
  public resetUdpPayloadTooSmallBl() {
    this._udpPayloadTooSmallBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPayloadTooSmallBlInput() {
    return this._udpPayloadTooSmallBl;
  }

  // udp_payload_too_small_drop - computed: false, optional: true, required: false
  private _udpPayloadTooSmallDrop?: number; 
  public get udpPayloadTooSmallDrop() {
    return this.getNumberAttribute('udp_payload_too_small_drop');
  }
  public set udpPayloadTooSmallDrop(value: number) {
    this._udpPayloadTooSmallDrop = value;
  }
  public resetUdpPayloadTooSmallDrop() {
    this._udpPayloadTooSmallDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPayloadTooSmallDropInput() {
    return this._udpPayloadTooSmallDrop;
  }

  // udp_port_zero_drop - computed: false, optional: true, required: false
  private _udpPortZeroDrop?: number; 
  public get udpPortZeroDrop() {
    return this.getNumberAttribute('udp_port_zero_drop');
  }
  public set udpPortZeroDrop(value: number) {
    this._udpPortZeroDrop = value;
  }
  public resetUdpPortZeroDrop() {
    this._udpPortZeroDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortZeroDropInput() {
    return this._udpPortZeroDrop;
  }

  // udp_retry_fail - computed: false, optional: true, required: false
  private _udpRetryFail?: number; 
  public get udpRetryFail() {
    return this.getNumberAttribute('udp_retry_fail');
  }
  public set udpRetryFail(value: number) {
    this._udpRetryFail = value;
  }
  public resetUdpRetryFail() {
    this._udpRetryFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryFailInput() {
    return this._udpRetryFail;
  }

  // udp_retry_fail_bl - computed: false, optional: true, required: false
  private _udpRetryFailBl?: number; 
  public get udpRetryFailBl() {
    return this.getNumberAttribute('udp_retry_fail_bl');
  }
  public set udpRetryFailBl(value: number) {
    this._udpRetryFailBl = value;
  }
  public resetUdpRetryFailBl() {
    this._udpRetryFailBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryFailBlInput() {
    return this._udpRetryFailBl;
  }

  // udp_retry_gap_drop - computed: false, optional: true, required: false
  private _udpRetryGapDrop?: number; 
  public get udpRetryGapDrop() {
    return this.getNumberAttribute('udp_retry_gap_drop');
  }
  public set udpRetryGapDrop(value: number) {
    this._udpRetryGapDrop = value;
  }
  public resetUdpRetryGapDrop() {
    this._udpRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryGapDropInput() {
    return this._udpRetryGapDrop;
  }

  // udp_retry_pass - computed: false, optional: true, required: false
  private _udpRetryPass?: number; 
  public get udpRetryPass() {
    return this.getNumberAttribute('udp_retry_pass');
  }
  public set udpRetryPass(value: number) {
    this._udpRetryPass = value;
  }
  public resetUdpRetryPass() {
    this._udpRetryPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryPassInput() {
    return this._udpRetryPass;
  }

  // udp_retry_pass_wl - computed: false, optional: true, required: false
  private _udpRetryPassWl?: number; 
  public get udpRetryPassWl() {
    return this.getNumberAttribute('udp_retry_pass_wl');
  }
  public set udpRetryPassWl(value: number) {
    this._udpRetryPassWl = value;
  }
  public resetUdpRetryPassWl() {
    this._udpRetryPassWl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryPassWlInput() {
    return this._udpRetryPassWl;
  }

  // udp_retry_start - computed: false, optional: true, required: false
  private _udpRetryStart?: number; 
  public get udpRetryStart() {
    return this.getNumberAttribute('udp_retry_start');
  }
  public set udpRetryStart(value: number) {
    this._udpRetryStart = value;
  }
  public resetUdpRetryStart() {
    this._udpRetryStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryStartInput() {
    return this._udpRetryStart;
  }

  // udp_retry_timeout - computed: false, optional: true, required: false
  private _udpRetryTimeout?: number; 
  public get udpRetryTimeout() {
    return this.getNumberAttribute('udp_retry_timeout');
  }
  public set udpRetryTimeout(value: number) {
    this._udpRetryTimeout = value;
  }
  public resetUdpRetryTimeout() {
    this._udpRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryTimeoutInput() {
    return this._udpRetryTimeout;
  }

  // udp_sess_create - computed: false, optional: true, required: false
  private _udpSessCreate?: number; 
  public get udpSessCreate() {
    return this.getNumberAttribute('udp_sess_create');
  }
  public set udpSessCreate(value: number) {
    this._udpSessCreate = value;
  }
  public resetUdpSessCreate() {
    this._udpSessCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSessCreateInput() {
    return this._udpSessCreate;
  }

  // udp_src_dst_drop - computed: false, optional: true, required: false
  private _udpSrcDstDrop?: number; 
  public get udpSrcDstDrop() {
    return this.getNumberAttribute('udp_src_dst_drop');
  }
  public set udpSrcDstDrop(value: number) {
    this._udpSrcDstDrop = value;
  }
  public resetUdpSrcDstDrop() {
    this._udpSrcDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSrcDstDropInput() {
    return this._udpSrcDstDrop;
  }

  // udp_total_bytes_drop - computed: false, optional: true, required: false
  private _udpTotalBytesDrop?: number; 
  public get udpTotalBytesDrop() {
    return this.getNumberAttribute('udp_total_bytes_drop');
  }
  public set udpTotalBytesDrop(value: number) {
    this._udpTotalBytesDrop = value;
  }
  public resetUdpTotalBytesDrop() {
    this._udpTotalBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTotalBytesDropInput() {
    return this._udpTotalBytesDrop;
  }

  // udp_total_bytes_rcv - computed: false, optional: true, required: false
  private _udpTotalBytesRcv?: number; 
  public get udpTotalBytesRcv() {
    return this.getNumberAttribute('udp_total_bytes_rcv');
  }
  public set udpTotalBytesRcv(value: number) {
    this._udpTotalBytesRcv = value;
  }
  public resetUdpTotalBytesRcv() {
    this._udpTotalBytesRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTotalBytesRcvInput() {
    return this._udpTotalBytesRcv;
  }

  // udp_total_drop - computed: false, optional: true, required: false
  private _udpTotalDrop?: number; 
  public get udpTotalDrop() {
    return this.getNumberAttribute('udp_total_drop');
  }
  public set udpTotalDrop(value: number) {
    this._udpTotalDrop = value;
  }
  public resetUdpTotalDrop() {
    this._udpTotalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTotalDropInput() {
    return this._udpTotalDrop;
  }

  // udp_wellknown_src_port - computed: false, optional: true, required: false
  private _udpWellknownSrcPort?: number; 
  public get udpWellknownSrcPort() {
    return this.getNumberAttribute('udp_wellknown_src_port');
  }
  public set udpWellknownSrcPort(value: number) {
    this._udpWellknownSrcPort = value;
  }
  public resetUdpWellknownSrcPort() {
    this._udpWellknownSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpWellknownSrcPortInput() {
    return this._udpWellknownSrcPort;
  }

  // udp_wellknown_src_port_bl - computed: false, optional: true, required: false
  private _udpWellknownSrcPortBl?: number; 
  public get udpWellknownSrcPortBl() {
    return this.getNumberAttribute('udp_wellknown_src_port_bl');
  }
  public set udpWellknownSrcPortBl(value: number) {
    this._udpWellknownSrcPortBl = value;
  }
  public resetUdpWellknownSrcPortBl() {
    this._udpWellknownSrcPortBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpWellknownSrcPortBlInput() {
    return this._udpWellknownSrcPortBl;
  }

  // udp_wellknown_src_port_drop - computed: false, optional: true, required: false
  private _udpWellknownSrcPortDrop?: number; 
  public get udpWellknownSrcPortDrop() {
    return this.getNumberAttribute('udp_wellknown_src_port_drop');
  }
  public set udpWellknownSrcPortDrop(value: number) {
    this._udpWellknownSrcPortDrop = value;
  }
  public resetUdpWellknownSrcPortDrop() {
    this._udpWellknownSrcPortDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpWellknownSrcPortDropInput() {
    return this._udpWellknownSrcPortDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats thunder_ddos_l4_udp_stats}
*/
export class DataThunderDdosL4UdpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_l4_udp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosL4UdpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosL4UdpStats to import
  * @param importFromId The id of the existing DataThunderDdosL4UdpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosL4UdpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_l4_udp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_udp_stats thunder_ddos_l4_udp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosL4UdpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosL4UdpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_l4_udp_stats',
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
  private _stats = new DataThunderDdosL4UdpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosL4UdpStatsStats) {
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
      stats: dataThunderDdosL4UdpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosL4UdpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosL4UdpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
