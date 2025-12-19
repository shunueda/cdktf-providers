// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosL4TcpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#id DataThunderDdosL4TcpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#stats DataThunderDdosL4TcpStats#stats}
  */
  readonly stats?: DataThunderDdosL4TcpStatsStats;
}
export interface DataThunderDdosL4TcpStatsStats {
  /**
  * Dst Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#dst_tcp_filter_action_blacklist DataThunderDdosL4TcpStats#dst_tcp_filter_action_blacklist}
  */
  readonly dstTcpFilterActionBlacklist?: number;
  /**
  * Dst Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#dst_tcp_filter_action_default_pass DataThunderDdosL4TcpStats#dst_tcp_filter_action_default_pass}
  */
  readonly dstTcpFilterActionDefaultPass?: number;
  /**
  * Dst Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#dst_tcp_filter_action_drop DataThunderDdosL4TcpStats#dst_tcp_filter_action_drop}
  */
  readonly dstTcpFilterActionDrop?: number;
  /**
  * Dst Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#dst_tcp_filter_action_whitelist DataThunderDdosL4TcpStats#dst_tcp_filter_action_whitelist}
  */
  readonly dstTcpFilterActionWhitelist?: number;
  /**
  * Dst Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#dst_tcp_filter_match DataThunderDdosL4TcpStats#dst_tcp_filter_match}
  */
  readonly dstTcpFilterMatch?: number;
  /**
  * Dst Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#dst_tcp_filter_not_match DataThunderDdosL4TcpStats#dst_tcp_filter_not_match}
  */
  readonly dstTcpFilterNotMatch?: number;
  /**
  * SYN Auth Hybrid Auth no match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_auth_no_match DataThunderDdosL4TcpStats#hybrid_syn_auth_auth_no_match}
  */
  readonly hybridSynAuthAuthNoMatch?: number;
  /**
  * SYN Auth Hybrid Entry Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_entry_aged_out DataThunderDdosL4TcpStats#hybrid_syn_auth_entry_aged_out}
  */
  readonly hybridSynAuthEntryAgedOut?: number;
  /**
  * SYN Auth Hybrid Filter Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_filter_full DataThunderDdosL4TcpStats#hybrid_syn_auth_filter_full}
  */
  readonly hybridSynAuthFilterFull?: number;
  /**
  * SYN Auth Hybrid Invalid SYNACK Auth Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_invalid_fail DataThunderDdosL4TcpStats#hybrid_syn_auth_invalid_fail}
  */
  readonly hybridSynAuthInvalidFail?: number;
  /**
  * SYN Auth Hybrid Invalid SYNACK Auth Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_invalid_pass DataThunderDdosL4TcpStats#hybrid_syn_auth_invalid_pass}
  */
  readonly hybridSynAuthInvalidPass?: number;
  /**
  * SYN Auth Hybrid Invalid SYNACK Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_invalid_sa_sent DataThunderDdosL4TcpStats#hybrid_syn_auth_invalid_sa_sent}
  */
  readonly hybridSynAuthInvalidSaSent?: number;
  /**
  * SYN Auth Hybrid Lookup Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_lookup_fail DataThunderDdosL4TcpStats#hybrid_syn_auth_lookup_fail}
  */
  readonly hybridSynAuthLookupFail?: number;
  /**
  * SYN Auth Hybrid Method Change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_method_change DataThunderDdosL4TcpStats#hybrid_syn_auth_method_change}
  */
  readonly hybridSynAuthMethodChange?: number;
  /**
  * SYN Auth Hybrid Unknown Auth Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_unknown_fail DataThunderDdosL4TcpStats#hybrid_syn_auth_unknown_fail}
  */
  readonly hybridSynAuthUnknownFail?: number;
  /**
  * SYN Auth Hybrid Unknown Auth Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_unknown_pass DataThunderDdosL4TcpStats#hybrid_syn_auth_unknown_pass}
  */
  readonly hybridSynAuthUnknownPass?: number;
  /**
  * SYN Auth Hybrid Valid SYNACK Auth Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_valid_fail DataThunderDdosL4TcpStats#hybrid_syn_auth_valid_fail}
  */
  readonly hybridSynAuthValidFail?: number;
  /**
  * SYN Auth Hybrid Valid SYNACK Auth Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_valid_pass DataThunderDdosL4TcpStats#hybrid_syn_auth_valid_pass}
  */
  readonly hybridSynAuthValidPass?: number;
  /**
  * SYN Auth Hybrid Valid SYNACK Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#hybrid_syn_auth_valid_sa_sent DataThunderDdosL4TcpStats#hybrid_syn_auth_valid_sa_sent}
  */
  readonly hybridSynAuthValidSaSent?: number;
  /**
  * TCP Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#intcp DataThunderDdosL4TcpStats#intcp}
  */
  readonly intcp?: number;
  /**
  * SrcDst Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#src_dst_tcp_filter_action_blacklist DataThunderDdosL4TcpStats#src_dst_tcp_filter_action_blacklist}
  */
  readonly srcDstTcpFilterActionBlacklist?: number;
  /**
  * SrcDst Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#src_dst_tcp_filter_action_default_pass DataThunderDdosL4TcpStats#src_dst_tcp_filter_action_default_pass}
  */
  readonly srcDstTcpFilterActionDefaultPass?: number;
  /**
  * SrcDst Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#src_dst_tcp_filter_action_drop DataThunderDdosL4TcpStats#src_dst_tcp_filter_action_drop}
  */
  readonly srcDstTcpFilterActionDrop?: number;
  /**
  * SrcDst Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#src_dst_tcp_filter_action_whitelist DataThunderDdosL4TcpStats#src_dst_tcp_filter_action_whitelist}
  */
  readonly srcDstTcpFilterActionWhitelist?: number;
  /**
  * SrcDst Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#src_dst_tcp_filter_match DataThunderDdosL4TcpStats#src_dst_tcp_filter_match}
  */
  readonly srcDstTcpFilterMatch?: number;
  /**
  * SrcDst Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#src_dst_tcp_filter_not_match DataThunderDdosL4TcpStats#src_dst_tcp_filter_not_match}
  */
  readonly srcDstTcpFilterNotMatch?: number;
  /**
  * Src Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#src_tcp_filter_action_blacklist DataThunderDdosL4TcpStats#src_tcp_filter_action_blacklist}
  */
  readonly srcTcpFilterActionBlacklist?: number;
  /**
  * Src Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#src_tcp_filter_action_default_pass DataThunderDdosL4TcpStats#src_tcp_filter_action_default_pass}
  */
  readonly srcTcpFilterActionDefaultPass?: number;
  /**
  * Src Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#src_tcp_filter_action_drop DataThunderDdosL4TcpStats#src_tcp_filter_action_drop}
  */
  readonly srcTcpFilterActionDrop?: number;
  /**
  * Src Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#src_tcp_filter_action_whitelist DataThunderDdosL4TcpStats#src_tcp_filter_action_whitelist}
  */
  readonly srcTcpFilterActionWhitelist?: number;
  /**
  * Src Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#src_tcp_filter_match DataThunderDdosL4TcpStats#src_tcp_filter_match}
  */
  readonly srcTcpFilterMatch?: number;
  /**
  * Src Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#src_tcp_filter_not_match DataThunderDdosL4TcpStats#src_tcp_filter_not_match}
  */
  readonly srcTcpFilterNotMatch?: number;
  /**
  * TCP SYN Auth Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#syn_auth_pass DataThunderDdosL4TcpStats#syn_auth_pass}
  */
  readonly synAuthPass?: number;
  /**
  * TCP SYN Auth Pass WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#syn_auth_pass_wl DataThunderDdosL4TcpStats#syn_auth_pass_wl}
  */
  readonly synAuthPassWl?: number;
  /**
  * TCP SYN Auth Skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#syn_auth_skip DataThunderDdosL4TcpStats#syn_auth_skip}
  */
  readonly synAuthSkip?: number;
  /**
  * TCP ACK No SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_ack_no_syn DataThunderDdosL4TcpStats#tcp_ack_no_syn}
  */
  readonly tcpAckNoSyn?: number;
  /**
  * TCP ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_ack_rcvd DataThunderDdosL4TcpStats#tcp_ack_rcvd}
  */
  readonly tcpAckRcvd?: number;
  /**
  * TCP ACK Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_ack_bl DataThunderDdosL4TcpStats#tcp_action_on_ack_bl}
  */
  readonly tcpActionOnAckBl?: number;
  /**
  * TCP ACK Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_ack_failed DataThunderDdosL4TcpStats#tcp_action_on_ack_failed}
  */
  readonly tcpActionOnAckFailed?: number;
  /**
  * TCP ACK Retry Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_ack_gap_drop DataThunderDdosL4TcpStats#tcp_action_on_ack_gap_drop}
  */
  readonly tcpActionOnAckGapDrop?: number;
  /**
  * TCP ACK Retry Retry-Gap Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_ack_gap_pass DataThunderDdosL4TcpStats#tcp_action_on_ack_gap_pass}
  */
  readonly tcpActionOnAckGapPass?: number;
  /**
  * TCP ACK Retry Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_ack_matched DataThunderDdosL4TcpStats#tcp_action_on_ack_matched}
  */
  readonly tcpActionOnAckMatched?: number;
  /**
  * TCP ACK Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_ack_passed DataThunderDdosL4TcpStats#tcp_action_on_ack_passed}
  */
  readonly tcpActionOnAckPassed?: number;
  /**
  * TCP ACK Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_ack_reset DataThunderDdosL4TcpStats#tcp_action_on_ack_reset}
  */
  readonly tcpActionOnAckReset?: number;
  /**
  * TCP ACK Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_ack_start DataThunderDdosL4TcpStats#tcp_action_on_ack_start}
  */
  readonly tcpActionOnAckStart?: number;
  /**
  * TCP ACK Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_ack_timeout DataThunderDdosL4TcpStats#tcp_action_on_ack_timeout}
  */
  readonly tcpActionOnAckTimeout?: number;
  /**
  * TCP SYN Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_syn_bl DataThunderDdosL4TcpStats#tcp_action_on_syn_bl}
  */
  readonly tcpActionOnSynBl?: number;
  /**
  * TCP SYN Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_syn_failed DataThunderDdosL4TcpStats#tcp_action_on_syn_failed}
  */
  readonly tcpActionOnSynFailed?: number;
  /**
  * TCP SYN Retry Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_syn_gap_drop DataThunderDdosL4TcpStats#tcp_action_on_syn_gap_drop}
  */
  readonly tcpActionOnSynGapDrop?: number;
  /**
  * TCP SYN Retry Retry-Gap Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_syn_gap_pass DataThunderDdosL4TcpStats#tcp_action_on_syn_gap_pass}
  */
  readonly tcpActionOnSynGapPass?: number;
  /**
  * TCP SYN Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_syn_passed DataThunderDdosL4TcpStats#tcp_action_on_syn_passed}
  */
  readonly tcpActionOnSynPassed?: number;
  /**
  * TCP SYN Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_syn_reset DataThunderDdosL4TcpStats#tcp_action_on_syn_reset}
  */
  readonly tcpActionOnSynReset?: number;
  /**
  * TCP SYN Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_syn_start DataThunderDdosL4TcpStats#tcp_action_on_syn_start}
  */
  readonly tcpActionOnSynStart?: number;
  /**
  * TCP SYN Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_action_on_syn_timeout DataThunderDdosL4TcpStats#tcp_action_on_syn_timeout}
  */
  readonly tcpActionOnSynTimeout?: number;
  /**
  * TCP Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_any_exceed DataThunderDdosL4TcpStats#tcp_any_exceed}
  */
  readonly tcpAnyExceed?: number;
  /**
  * TCP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_auth_drop DataThunderDdosL4TcpStats#tcp_auth_drop}
  */
  readonly tcpAuthDrop?: number;
  /**
  * TCP Auth Responded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_auth_resp DataThunderDdosL4TcpStats#tcp_auth_resp}
  */
  readonly tcpAuthResp?: number;
  /**
  * TCP Auth Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_auth_rst DataThunderDdosL4TcpStats#tcp_auth_rst}
  */
  readonly tcpAuthRst?: number;
  /**
  * TCP Concurrent Port Access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_concurrent DataThunderDdosL4TcpStats#tcp_concurrent}
  */
  readonly tcpConcurrent?: number;
  /**
  * TCP Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_drop_bl DataThunderDdosL4TcpStats#tcp_drop_bl}
  */
  readonly tcpDropBl?: number;
  /**
  * TCP Src Blacklist User Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_drop_black_user_cfg_src DataThunderDdosL4TcpStats#tcp_drop_black_user_cfg_src}
  */
  readonly tcpDropBlackUserCfgSrc?: number;
  /**
  * TCP SrcDst Blacklist User Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_drop_black_user_cfg_src_dst DataThunderDdosL4TcpStats#tcp_drop_black_user_cfg_src_dst}
  */
  readonly tcpDropBlackUserCfgSrcDst?: number;
  /**
  * TCP Dst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_dst_drop DataThunderDdosL4TcpStats#tcp_dst_drop}
  */
  readonly tcpDstDrop?: number;
  /**
  * TCP FIN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_fin_rcvd DataThunderDdosL4TcpStats#tcp_fin_rcvd}
  */
  readonly tcpFinRcvd?: number;
  /**
  * TCP Frag Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_frag_drop DataThunderDdosL4TcpStats#tcp_frag_drop}
  */
  readonly tcpFragDrop?: number;
  /**
  * TCP Frag Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_frag_rcvd DataThunderDdosL4TcpStats#tcp_frag_rcvd}
  */
  readonly tcpFragRcvd?: number;
  /**
  * TCP Invalid SYN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_invalid_syn_rcvd DataThunderDdosL4TcpStats#tcp_invalid_syn_rcvd}
  */
  readonly tcpInvalidSynRcvd?: number;
  /**
  * TCP Invalid SYNACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_invalid_synack_rcvd DataThunderDdosL4TcpStats#tcp_invalid_synack_rcvd}
  */
  readonly tcpInvalidSynackRcvd?: number;
  /**
  * TCP Out-Of-Seq Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_out_of_seq DataThunderDdosL4TcpStats#tcp_out_of_seq}
  */
  readonly tcpOutOfSeq?: number;
  /**
  * TCP Out-Of-Seq Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_out_of_seq_bl DataThunderDdosL4TcpStats#tcp_out_of_seq_bl}
  */
  readonly tcpOutOfSeqBl?: number;
  /**
  * TCP Out-Of-Seq Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_out_of_seq_drop DataThunderDdosL4TcpStats#tcp_out_of_seq_drop}
  */
  readonly tcpOutOfSeqDrop?: number;
  /**
  * TCP Outbound RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_outrst DataThunderDdosL4TcpStats#tcp_outrst}
  */
  readonly tcpOutrst?: number;
  /**
  * TCP Conn Out-Of-Seq Rate Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_per_conn_ofo_rate_exceed_bl DataThunderDdosL4TcpStats#tcp_per_conn_ofo_rate_exceed_bl}
  */
  readonly tcpPerConnOfoRateExceedBl?: number;
  /**
  * TCP Conn Out-Of-Seq Rate Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_per_conn_ofo_rate_exceed_drop DataThunderDdosL4TcpStats#tcp_per_conn_ofo_rate_exceed_drop}
  */
  readonly tcpPerConnOfoRateExceedDrop?: number;
  /**
  * TCP Conn Pkt Rate Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_per_conn_prate_exceed DataThunderDdosL4TcpStats#tcp_per_conn_prate_exceed}
  */
  readonly tcpPerConnPrateExceed?: number;
  /**
  * TCP Conn Pkt Rate Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_per_conn_prate_exceed_bl DataThunderDdosL4TcpStats#tcp_per_conn_prate_exceed_bl}
  */
  readonly tcpPerConnPrateExceedBl?: number;
  /**
  * TCP Conn Retransmit Rate Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_per_conn_rexmit_rate_exceed_bl DataThunderDdosL4TcpStats#tcp_per_conn_rexmit_rate_exceed_bl}
  */
  readonly tcpPerConnRexmitRateExceedBl?: number;
  /**
  * TCP Conn Retransmit Rate Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_per_conn_rexmit_rate_exceed_drop DataThunderDdosL4TcpStats#tcp_per_conn_rexmit_rate_exceed_drop}
  */
  readonly tcpPerConnRexmitRateExceedDrop?: number;
  /**
  * TCP Conn Zero-Window Rate Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_per_conn_zwindow_rate_exceed_bl DataThunderDdosL4TcpStats#tcp_per_conn_zwindow_rate_exceed_bl}
  */
  readonly tcpPerConnZwindowRateExceedBl?: number;
  /**
  * TCP Conn Zero-Window Rate Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_per_conn_zwindow_rate_exceed_drop DataThunderDdosL4TcpStats#tcp_per_conn_zwindow_rate_exceed_drop}
  */
  readonly tcpPerConnZwindowRateExceedDrop?: number;
  /**
  * TCP Port 0 Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_port_zero_drop DataThunderDdosL4TcpStats#tcp_port_zero_drop}
  */
  readonly tcpPortZeroDrop?: number;
  /**
  * Progression: Violation Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_progression_violation_exceed DataThunderDdosL4TcpStats#tcp_progression_violation_exceed}
  */
  readonly tcpProgressionViolationExceed?: number;
  /**
  * Progression: Violation Exceeded Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_progression_violation_exceed_bl DataThunderDdosL4TcpStats#tcp_progression_violation_exceed_bl}
  */
  readonly tcpProgressionViolationExceedBl?: number;
  /**
  * Progression: Violation Exceeded Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_progression_violation_exceed_drop DataThunderDdosL4TcpStats#tcp_progression_violation_exceed_drop}
  */
  readonly tcpProgressionViolationExceedDrop?: number;
  /**
  * Progression: Violation Exceeded Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_progression_violation_exceed_reset DataThunderDdosL4TcpStats#tcp_progression_violation_exceed_reset}
  */
  readonly tcpProgressionViolationExceedReset?: number;
  /**
  * TCP Reset Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_reset_client DataThunderDdosL4TcpStats#tcp_reset_client}
  */
  readonly tcpResetClient?: number;
  /**
  * TCP Reset Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_reset_server DataThunderDdosL4TcpStats#tcp_reset_server}
  */
  readonly tcpResetServer?: number;
  /**
  * TCP Retransmit Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_retransmit DataThunderDdosL4TcpStats#tcp_retransmit}
  */
  readonly tcpRetransmit?: number;
  /**
  * TCP Retransmit Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_retransmit_bl DataThunderDdosL4TcpStats#tcp_retransmit_bl}
  */
  readonly tcpRetransmitBl?: number;
  /**
  * TCP Retransmit Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_retransmit_drop DataThunderDdosL4TcpStats#tcp_retransmit_drop}
  */
  readonly tcpRetransmitDrop?: number;
  /**
  * TCP Retransmit SYN Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_rexmit_syn_limit_bl DataThunderDdosL4TcpStats#tcp_rexmit_syn_limit_bl}
  */
  readonly tcpRexmitSynLimitBl?: number;
  /**
  * TCP Retransmit SYN Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_rexmit_syn_limit_drop DataThunderDdosL4TcpStats#tcp_rexmit_syn_limit_drop}
  */
  readonly tcpRexmitSynLimitDrop?: number;
  /**
  * TCP RST Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_rst_rcvd DataThunderDdosL4TcpStats#tcp_rst_rcvd}
  */
  readonly tcpRstRcvd?: number;
  /**
  * TCP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_sess_create DataThunderDdosL4TcpStats#tcp_sess_create}
  */
  readonly tcpSessCreate?: number;
  /**
  * TCP Small-Window Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_small_window DataThunderDdosL4TcpStats#tcp_small_window}
  */
  readonly tcpSmallWindow?: number;
  /**
  * TCP Small-Window Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_small_window_bl DataThunderDdosL4TcpStats#tcp_small_window_bl}
  */
  readonly tcpSmallWindowBl?: number;
  /**
  * TCP Small-Window Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_small_window_drop DataThunderDdosL4TcpStats#tcp_small_window_drop}
  */
  readonly tcpSmallWindowDrop?: number;
  /**
  * TCP Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_src_drop DataThunderDdosL4TcpStats#tcp_src_drop}
  */
  readonly tcpSrcDrop?: number;
  /**
  * TCP SrcDst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_src_dst_drop DataThunderDdosL4TcpStats#tcp_src_dst_drop}
  */
  readonly tcpSrcDstDrop?: number;
  /**
  * TCP SYN ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_syn_ack_rcvd DataThunderDdosL4TcpStats#tcp_syn_ack_rcvd}
  */
  readonly tcpSynAckRcvd?: number;
  /**
  * TCP SYN Rate Per Sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_syn_rate DataThunderDdosL4TcpStats#tcp_syn_rate}
  */
  readonly tcpSynRate?: number;
  /**
  * TCP SYN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_syn_rcvd DataThunderDdosL4TcpStats#tcp_syn_rcvd}
  */
  readonly tcpSynRcvd?: number;
  /**
  * TCP SYN TFO Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_syn_tfo_rcvd DataThunderDdosL4TcpStats#tcp_syn_tfo_rcvd}
  */
  readonly tcpSynTfoRcvd?: number;
  /**
  * TCP SYN Cookie Check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_syncookie_check_fail DataThunderDdosL4TcpStats#tcp_syncookie_check_fail}
  */
  readonly tcpSyncookieCheckFail?: number;
  /**
  * TCP SYN Cookie Blacklist Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_syncookie_fail_bl DataThunderDdosL4TcpStats#tcp_syncookie_fail_bl}
  */
  readonly tcpSyncookieFailBl?: number;
  /**
  * TCP SYN Cookie HW Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_syncookie_hw_missing DataThunderDdosL4TcpStats#tcp_syncookie_hw_missing}
  */
  readonly tcpSyncookieHwMissing?: number;
  /**
  * TCP SYN Cookie Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_syncookie_pass DataThunderDdosL4TcpStats#tcp_syncookie_pass}
  */
  readonly tcpSyncookiePass?: number;
  /**
  * TCP SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_syncookie_sent DataThunderDdosL4TcpStats#tcp_syncookie_sent}
  */
  readonly tcpSyncookieSent?: number;
  /**
  * TCP SYN Cookie Send Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_syncookie_sent_fail DataThunderDdosL4TcpStats#tcp_syncookie_sent_fail}
  */
  readonly tcpSyncookieSentFail?: number;
  /**
  * TCP Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_total_bytes_drop DataThunderDdosL4TcpStats#tcp_total_bytes_drop}
  */
  readonly tcpTotalBytesDrop?: number;
  /**
  * TCP Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_total_bytes_rcv DataThunderDdosL4TcpStats#tcp_total_bytes_rcv}
  */
  readonly tcpTotalBytesRcv?: number;
  /**
  * TCP Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_total_drop DataThunderDdosL4TcpStats#tcp_total_drop}
  */
  readonly tcpTotalDrop?: number;
  /**
  * TCP Unauth RST Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_unauth_rst_drop DataThunderDdosL4TcpStats#tcp_unauth_rst_drop}
  */
  readonly tcpUnauthRstDrop?: number;
  /**
  * TCP Zero-Window Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_zero_window DataThunderDdosL4TcpStats#tcp_zero_window}
  */
  readonly tcpZeroWindow?: number;
  /**
  * TCP Zero-Window Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_zero_window_bl DataThunderDdosL4TcpStats#tcp_zero_window_bl}
  */
  readonly tcpZeroWindowBl?: number;
  /**
  * TCP Zero-Window Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#tcp_zero_window_drop DataThunderDdosL4TcpStats#tcp_zero_window_drop}
  */
  readonly tcpZeroWindowDrop?: number;
}

export function dataThunderDdosL4TcpStatsStatsToTerraform(struct?: DataThunderDdosL4TcpStatsStatsOutputReference | DataThunderDdosL4TcpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_tcp_filter_action_blacklist: cdktf.numberToTerraform(struct!.dstTcpFilterActionBlacklist),
    dst_tcp_filter_action_default_pass: cdktf.numberToTerraform(struct!.dstTcpFilterActionDefaultPass),
    dst_tcp_filter_action_drop: cdktf.numberToTerraform(struct!.dstTcpFilterActionDrop),
    dst_tcp_filter_action_whitelist: cdktf.numberToTerraform(struct!.dstTcpFilterActionWhitelist),
    dst_tcp_filter_match: cdktf.numberToTerraform(struct!.dstTcpFilterMatch),
    dst_tcp_filter_not_match: cdktf.numberToTerraform(struct!.dstTcpFilterNotMatch),
    hybrid_syn_auth_auth_no_match: cdktf.numberToTerraform(struct!.hybridSynAuthAuthNoMatch),
    hybrid_syn_auth_entry_aged_out: cdktf.numberToTerraform(struct!.hybridSynAuthEntryAgedOut),
    hybrid_syn_auth_filter_full: cdktf.numberToTerraform(struct!.hybridSynAuthFilterFull),
    hybrid_syn_auth_invalid_fail: cdktf.numberToTerraform(struct!.hybridSynAuthInvalidFail),
    hybrid_syn_auth_invalid_pass: cdktf.numberToTerraform(struct!.hybridSynAuthInvalidPass),
    hybrid_syn_auth_invalid_sa_sent: cdktf.numberToTerraform(struct!.hybridSynAuthInvalidSaSent),
    hybrid_syn_auth_lookup_fail: cdktf.numberToTerraform(struct!.hybridSynAuthLookupFail),
    hybrid_syn_auth_method_change: cdktf.numberToTerraform(struct!.hybridSynAuthMethodChange),
    hybrid_syn_auth_unknown_fail: cdktf.numberToTerraform(struct!.hybridSynAuthUnknownFail),
    hybrid_syn_auth_unknown_pass: cdktf.numberToTerraform(struct!.hybridSynAuthUnknownPass),
    hybrid_syn_auth_valid_fail: cdktf.numberToTerraform(struct!.hybridSynAuthValidFail),
    hybrid_syn_auth_valid_pass: cdktf.numberToTerraform(struct!.hybridSynAuthValidPass),
    hybrid_syn_auth_valid_sa_sent: cdktf.numberToTerraform(struct!.hybridSynAuthValidSaSent),
    intcp: cdktf.numberToTerraform(struct!.intcp),
    src_dst_tcp_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcDstTcpFilterActionBlacklist),
    src_dst_tcp_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcDstTcpFilterActionDefaultPass),
    src_dst_tcp_filter_action_drop: cdktf.numberToTerraform(struct!.srcDstTcpFilterActionDrop),
    src_dst_tcp_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcDstTcpFilterActionWhitelist),
    src_dst_tcp_filter_match: cdktf.numberToTerraform(struct!.srcDstTcpFilterMatch),
    src_dst_tcp_filter_not_match: cdktf.numberToTerraform(struct!.srcDstTcpFilterNotMatch),
    src_tcp_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcTcpFilterActionBlacklist),
    src_tcp_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcTcpFilterActionDefaultPass),
    src_tcp_filter_action_drop: cdktf.numberToTerraform(struct!.srcTcpFilterActionDrop),
    src_tcp_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcTcpFilterActionWhitelist),
    src_tcp_filter_match: cdktf.numberToTerraform(struct!.srcTcpFilterMatch),
    src_tcp_filter_not_match: cdktf.numberToTerraform(struct!.srcTcpFilterNotMatch),
    syn_auth_pass: cdktf.numberToTerraform(struct!.synAuthPass),
    syn_auth_pass_wl: cdktf.numberToTerraform(struct!.synAuthPassWl),
    syn_auth_skip: cdktf.numberToTerraform(struct!.synAuthSkip),
    tcp_ack_no_syn: cdktf.numberToTerraform(struct!.tcpAckNoSyn),
    tcp_ack_rcvd: cdktf.numberToTerraform(struct!.tcpAckRcvd),
    tcp_action_on_ack_bl: cdktf.numberToTerraform(struct!.tcpActionOnAckBl),
    tcp_action_on_ack_failed: cdktf.numberToTerraform(struct!.tcpActionOnAckFailed),
    tcp_action_on_ack_gap_drop: cdktf.numberToTerraform(struct!.tcpActionOnAckGapDrop),
    tcp_action_on_ack_gap_pass: cdktf.numberToTerraform(struct!.tcpActionOnAckGapPass),
    tcp_action_on_ack_matched: cdktf.numberToTerraform(struct!.tcpActionOnAckMatched),
    tcp_action_on_ack_passed: cdktf.numberToTerraform(struct!.tcpActionOnAckPassed),
    tcp_action_on_ack_reset: cdktf.numberToTerraform(struct!.tcpActionOnAckReset),
    tcp_action_on_ack_start: cdktf.numberToTerraform(struct!.tcpActionOnAckStart),
    tcp_action_on_ack_timeout: cdktf.numberToTerraform(struct!.tcpActionOnAckTimeout),
    tcp_action_on_syn_bl: cdktf.numberToTerraform(struct!.tcpActionOnSynBl),
    tcp_action_on_syn_failed: cdktf.numberToTerraform(struct!.tcpActionOnSynFailed),
    tcp_action_on_syn_gap_drop: cdktf.numberToTerraform(struct!.tcpActionOnSynGapDrop),
    tcp_action_on_syn_gap_pass: cdktf.numberToTerraform(struct!.tcpActionOnSynGapPass),
    tcp_action_on_syn_passed: cdktf.numberToTerraform(struct!.tcpActionOnSynPassed),
    tcp_action_on_syn_reset: cdktf.numberToTerraform(struct!.tcpActionOnSynReset),
    tcp_action_on_syn_start: cdktf.numberToTerraform(struct!.tcpActionOnSynStart),
    tcp_action_on_syn_timeout: cdktf.numberToTerraform(struct!.tcpActionOnSynTimeout),
    tcp_any_exceed: cdktf.numberToTerraform(struct!.tcpAnyExceed),
    tcp_auth_drop: cdktf.numberToTerraform(struct!.tcpAuthDrop),
    tcp_auth_resp: cdktf.numberToTerraform(struct!.tcpAuthResp),
    tcp_auth_rst: cdktf.numberToTerraform(struct!.tcpAuthRst),
    tcp_concurrent: cdktf.numberToTerraform(struct!.tcpConcurrent),
    tcp_drop_bl: cdktf.numberToTerraform(struct!.tcpDropBl),
    tcp_drop_black_user_cfg_src: cdktf.numberToTerraform(struct!.tcpDropBlackUserCfgSrc),
    tcp_drop_black_user_cfg_src_dst: cdktf.numberToTerraform(struct!.tcpDropBlackUserCfgSrcDst),
    tcp_dst_drop: cdktf.numberToTerraform(struct!.tcpDstDrop),
    tcp_fin_rcvd: cdktf.numberToTerraform(struct!.tcpFinRcvd),
    tcp_frag_drop: cdktf.numberToTerraform(struct!.tcpFragDrop),
    tcp_frag_rcvd: cdktf.numberToTerraform(struct!.tcpFragRcvd),
    tcp_invalid_syn_rcvd: cdktf.numberToTerraform(struct!.tcpInvalidSynRcvd),
    tcp_invalid_synack_rcvd: cdktf.numberToTerraform(struct!.tcpInvalidSynackRcvd),
    tcp_out_of_seq: cdktf.numberToTerraform(struct!.tcpOutOfSeq),
    tcp_out_of_seq_bl: cdktf.numberToTerraform(struct!.tcpOutOfSeqBl),
    tcp_out_of_seq_drop: cdktf.numberToTerraform(struct!.tcpOutOfSeqDrop),
    tcp_outrst: cdktf.numberToTerraform(struct!.tcpOutrst),
    tcp_per_conn_ofo_rate_exceed_bl: cdktf.numberToTerraform(struct!.tcpPerConnOfoRateExceedBl),
    tcp_per_conn_ofo_rate_exceed_drop: cdktf.numberToTerraform(struct!.tcpPerConnOfoRateExceedDrop),
    tcp_per_conn_prate_exceed: cdktf.numberToTerraform(struct!.tcpPerConnPrateExceed),
    tcp_per_conn_prate_exceed_bl: cdktf.numberToTerraform(struct!.tcpPerConnPrateExceedBl),
    tcp_per_conn_rexmit_rate_exceed_bl: cdktf.numberToTerraform(struct!.tcpPerConnRexmitRateExceedBl),
    tcp_per_conn_rexmit_rate_exceed_drop: cdktf.numberToTerraform(struct!.tcpPerConnRexmitRateExceedDrop),
    tcp_per_conn_zwindow_rate_exceed_bl: cdktf.numberToTerraform(struct!.tcpPerConnZwindowRateExceedBl),
    tcp_per_conn_zwindow_rate_exceed_drop: cdktf.numberToTerraform(struct!.tcpPerConnZwindowRateExceedDrop),
    tcp_port_zero_drop: cdktf.numberToTerraform(struct!.tcpPortZeroDrop),
    tcp_progression_violation_exceed: cdktf.numberToTerraform(struct!.tcpProgressionViolationExceed),
    tcp_progression_violation_exceed_bl: cdktf.numberToTerraform(struct!.tcpProgressionViolationExceedBl),
    tcp_progression_violation_exceed_drop: cdktf.numberToTerraform(struct!.tcpProgressionViolationExceedDrop),
    tcp_progression_violation_exceed_reset: cdktf.numberToTerraform(struct!.tcpProgressionViolationExceedReset),
    tcp_reset_client: cdktf.numberToTerraform(struct!.tcpResetClient),
    tcp_reset_server: cdktf.numberToTerraform(struct!.tcpResetServer),
    tcp_retransmit: cdktf.numberToTerraform(struct!.tcpRetransmit),
    tcp_retransmit_bl: cdktf.numberToTerraform(struct!.tcpRetransmitBl),
    tcp_retransmit_drop: cdktf.numberToTerraform(struct!.tcpRetransmitDrop),
    tcp_rexmit_syn_limit_bl: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitBl),
    tcp_rexmit_syn_limit_drop: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitDrop),
    tcp_rst_rcvd: cdktf.numberToTerraform(struct!.tcpRstRcvd),
    tcp_sess_create: cdktf.numberToTerraform(struct!.tcpSessCreate),
    tcp_small_window: cdktf.numberToTerraform(struct!.tcpSmallWindow),
    tcp_small_window_bl: cdktf.numberToTerraform(struct!.tcpSmallWindowBl),
    tcp_small_window_drop: cdktf.numberToTerraform(struct!.tcpSmallWindowDrop),
    tcp_src_drop: cdktf.numberToTerraform(struct!.tcpSrcDrop),
    tcp_src_dst_drop: cdktf.numberToTerraform(struct!.tcpSrcDstDrop),
    tcp_syn_ack_rcvd: cdktf.numberToTerraform(struct!.tcpSynAckRcvd),
    tcp_syn_rate: cdktf.numberToTerraform(struct!.tcpSynRate),
    tcp_syn_rcvd: cdktf.numberToTerraform(struct!.tcpSynRcvd),
    tcp_syn_tfo_rcvd: cdktf.numberToTerraform(struct!.tcpSynTfoRcvd),
    tcp_syncookie_check_fail: cdktf.numberToTerraform(struct!.tcpSyncookieCheckFail),
    tcp_syncookie_fail_bl: cdktf.numberToTerraform(struct!.tcpSyncookieFailBl),
    tcp_syncookie_hw_missing: cdktf.numberToTerraform(struct!.tcpSyncookieHwMissing),
    tcp_syncookie_pass: cdktf.numberToTerraform(struct!.tcpSyncookiePass),
    tcp_syncookie_sent: cdktf.numberToTerraform(struct!.tcpSyncookieSent),
    tcp_syncookie_sent_fail: cdktf.numberToTerraform(struct!.tcpSyncookieSentFail),
    tcp_total_bytes_drop: cdktf.numberToTerraform(struct!.tcpTotalBytesDrop),
    tcp_total_bytes_rcv: cdktf.numberToTerraform(struct!.tcpTotalBytesRcv),
    tcp_total_drop: cdktf.numberToTerraform(struct!.tcpTotalDrop),
    tcp_unauth_rst_drop: cdktf.numberToTerraform(struct!.tcpUnauthRstDrop),
    tcp_zero_window: cdktf.numberToTerraform(struct!.tcpZeroWindow),
    tcp_zero_window_bl: cdktf.numberToTerraform(struct!.tcpZeroWindowBl),
    tcp_zero_window_drop: cdktf.numberToTerraform(struct!.tcpZeroWindowDrop),
  }
}


export function dataThunderDdosL4TcpStatsStatsToHclTerraform(struct?: DataThunderDdosL4TcpStatsStatsOutputReference | DataThunderDdosL4TcpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_tcp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_auth_no_match: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthAuthNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_entry_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthEntryAgedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_filter_full: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthFilterFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_invalid_fail: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthInvalidFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_invalid_pass: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthInvalidPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_invalid_sa_sent: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthInvalidSaSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_lookup_fail: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthLookupFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_method_change: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthMethodChange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_unknown_fail: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthUnknownFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_unknown_pass: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthUnknownPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_valid_fail: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthValidFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_valid_pass: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthValidPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_syn_auth_valid_sa_sent: {
      value: cdktf.numberToHclTerraform(struct!.hybridSynAuthValidSaSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    intcp: {
      value: cdktf.numberToHclTerraform(struct!.intcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_tcp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcDstTcpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_tcp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcDstTcpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_tcp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcDstTcpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_tcp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcDstTcpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_tcp_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.srcDstTcpFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_tcp_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcDstTcpFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpFilterNotMatch),
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
    syn_auth_pass_wl: {
      value: cdktf.numberToHclTerraform(struct!.synAuthPassWl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_auth_skip: {
      value: cdktf.numberToHclTerraform(struct!.synAuthSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack_no_syn: {
      value: cdktf.numberToHclTerraform(struct!.tcpAckNoSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpAckRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_failed: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_gap_pass: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckGapPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_matched: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckMatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_passed: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_reset: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_syn_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnSynBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_syn_failed: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnSynFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_syn_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnSynGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_syn_gap_pass: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnSynGapPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_syn_passed: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnSynPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_syn_reset: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnSynReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_syn_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnSynStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_syn_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnSynTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.tcpAnyExceed),
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
    tcp_concurrent: {
      value: cdktf.numberToHclTerraform(struct!.tcpConcurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_drop_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpDropBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_drop_black_user_cfg_src: {
      value: cdktf.numberToHclTerraform(struct!.tcpDropBlackUserCfgSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_drop_black_user_cfg_src_dst: {
      value: cdktf.numberToHclTerraform(struct!.tcpDropBlackUserCfgSrcDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fin_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpFinRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_frag_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpFragRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_invalid_syn_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpInvalidSynRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_invalid_synack_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpInvalidSynackRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_of_seq: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutOfSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_of_seq_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutOfSeqBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_of_seq_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutOfSeqDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_outrst: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutrst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_per_conn_ofo_rate_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpPerConnOfoRateExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_per_conn_ofo_rate_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpPerConnOfoRateExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_per_conn_prate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.tcpPerConnPrateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_per_conn_prate_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpPerConnPrateExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_per_conn_rexmit_rate_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpPerConnRexmitRateExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_per_conn_rexmit_rate_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpPerConnRexmitRateExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_per_conn_zwindow_rate_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpPerConnZwindowRateExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_per_conn_zwindow_rate_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpPerConnZwindowRateExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_zero_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortZeroDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_progression_violation_exceed: {
      value: cdktf.numberToHclTerraform(struct!.tcpProgressionViolationExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_progression_violation_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpProgressionViolationExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_progression_violation_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpProgressionViolationExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_progression_violation_exceed_reset: {
      value: cdktf.numberToHclTerraform(struct!.tcpProgressionViolationExceedReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_reset_client: {
      value: cdktf.numberToHclTerraform(struct!.tcpResetClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_reset_server: {
      value: cdktf.numberToHclTerraform(struct!.tcpResetServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_retransmit: {
      value: cdktf.numberToHclTerraform(struct!.tcpRetransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_retransmit_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpRetransmitBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_retransmit_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpRetransmitDrop),
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
    tcp_rst_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpRstRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_sess_create: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_small_window: {
      value: cdktf.numberToHclTerraform(struct!.tcpSmallWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_small_window_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpSmallWindowBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_small_window_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpSmallWindowDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_src_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpSrcDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_ack_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynAckRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_rate: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_tfo_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynTfoRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookie_check_fail: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookieCheckFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookie_fail_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookieFailBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookie_hw_missing: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookieHwMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookie_pass: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookiePass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookie_sent: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookieSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookie_sent_fail: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookieSentFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_total_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpTotalBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_total_bytes_rcv: {
      value: cdktf.numberToHclTerraform(struct!.tcpTotalBytesRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_total_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpTotalDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_unauth_rst_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpUnauthRstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_zero_window: {
      value: cdktf.numberToHclTerraform(struct!.tcpZeroWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_zero_window_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpZeroWindowBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_zero_window_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpZeroWindowDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosL4TcpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosL4TcpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstTcpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFilterActionBlacklist = this._dstTcpFilterActionBlacklist;
    }
    if (this._dstTcpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFilterActionDefaultPass = this._dstTcpFilterActionDefaultPass;
    }
    if (this._dstTcpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFilterActionDrop = this._dstTcpFilterActionDrop;
    }
    if (this._dstTcpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFilterActionWhitelist = this._dstTcpFilterActionWhitelist;
    }
    if (this._dstTcpFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFilterMatch = this._dstTcpFilterMatch;
    }
    if (this._dstTcpFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFilterNotMatch = this._dstTcpFilterNotMatch;
    }
    if (this._hybridSynAuthAuthNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthAuthNoMatch = this._hybridSynAuthAuthNoMatch;
    }
    if (this._hybridSynAuthEntryAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthEntryAgedOut = this._hybridSynAuthEntryAgedOut;
    }
    if (this._hybridSynAuthFilterFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthFilterFull = this._hybridSynAuthFilterFull;
    }
    if (this._hybridSynAuthInvalidFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthInvalidFail = this._hybridSynAuthInvalidFail;
    }
    if (this._hybridSynAuthInvalidPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthInvalidPass = this._hybridSynAuthInvalidPass;
    }
    if (this._hybridSynAuthInvalidSaSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthInvalidSaSent = this._hybridSynAuthInvalidSaSent;
    }
    if (this._hybridSynAuthLookupFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthLookupFail = this._hybridSynAuthLookupFail;
    }
    if (this._hybridSynAuthMethodChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthMethodChange = this._hybridSynAuthMethodChange;
    }
    if (this._hybridSynAuthUnknownFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthUnknownFail = this._hybridSynAuthUnknownFail;
    }
    if (this._hybridSynAuthUnknownPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthUnknownPass = this._hybridSynAuthUnknownPass;
    }
    if (this._hybridSynAuthValidFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthValidFail = this._hybridSynAuthValidFail;
    }
    if (this._hybridSynAuthValidPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthValidPass = this._hybridSynAuthValidPass;
    }
    if (this._hybridSynAuthValidSaSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridSynAuthValidSaSent = this._hybridSynAuthValidSaSent;
    }
    if (this._intcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.intcp = this._intcp;
    }
    if (this._srcDstTcpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstTcpFilterActionBlacklist = this._srcDstTcpFilterActionBlacklist;
    }
    if (this._srcDstTcpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstTcpFilterActionDefaultPass = this._srcDstTcpFilterActionDefaultPass;
    }
    if (this._srcDstTcpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstTcpFilterActionDrop = this._srcDstTcpFilterActionDrop;
    }
    if (this._srcDstTcpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstTcpFilterActionWhitelist = this._srcDstTcpFilterActionWhitelist;
    }
    if (this._srcDstTcpFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstTcpFilterMatch = this._srcDstTcpFilterMatch;
    }
    if (this._srcDstTcpFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstTcpFilterNotMatch = this._srcDstTcpFilterNotMatch;
    }
    if (this._srcTcpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpFilterActionBlacklist = this._srcTcpFilterActionBlacklist;
    }
    if (this._srcTcpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpFilterActionDefaultPass = this._srcTcpFilterActionDefaultPass;
    }
    if (this._srcTcpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpFilterActionDrop = this._srcTcpFilterActionDrop;
    }
    if (this._srcTcpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpFilterActionWhitelist = this._srcTcpFilterActionWhitelist;
    }
    if (this._srcTcpFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpFilterMatch = this._srcTcpFilterMatch;
    }
    if (this._srcTcpFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpFilterNotMatch = this._srcTcpFilterNotMatch;
    }
    if (this._synAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthPass = this._synAuthPass;
    }
    if (this._synAuthPassWl !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthPassWl = this._synAuthPassWl;
    }
    if (this._synAuthSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthSkip = this._synAuthSkip;
    }
    if (this._tcpAckNoSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAckNoSyn = this._tcpAckNoSyn;
    }
    if (this._tcpAckRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAckRcvd = this._tcpAckRcvd;
    }
    if (this._tcpActionOnAckBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckBl = this._tcpActionOnAckBl;
    }
    if (this._tcpActionOnAckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckFailed = this._tcpActionOnAckFailed;
    }
    if (this._tcpActionOnAckGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckGapDrop = this._tcpActionOnAckGapDrop;
    }
    if (this._tcpActionOnAckGapPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckGapPass = this._tcpActionOnAckGapPass;
    }
    if (this._tcpActionOnAckMatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckMatched = this._tcpActionOnAckMatched;
    }
    if (this._tcpActionOnAckPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckPassed = this._tcpActionOnAckPassed;
    }
    if (this._tcpActionOnAckReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckReset = this._tcpActionOnAckReset;
    }
    if (this._tcpActionOnAckStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckStart = this._tcpActionOnAckStart;
    }
    if (this._tcpActionOnAckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckTimeout = this._tcpActionOnAckTimeout;
    }
    if (this._tcpActionOnSynBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnSynBl = this._tcpActionOnSynBl;
    }
    if (this._tcpActionOnSynFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnSynFailed = this._tcpActionOnSynFailed;
    }
    if (this._tcpActionOnSynGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnSynGapDrop = this._tcpActionOnSynGapDrop;
    }
    if (this._tcpActionOnSynGapPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnSynGapPass = this._tcpActionOnSynGapPass;
    }
    if (this._tcpActionOnSynPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnSynPassed = this._tcpActionOnSynPassed;
    }
    if (this._tcpActionOnSynReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnSynReset = this._tcpActionOnSynReset;
    }
    if (this._tcpActionOnSynStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnSynStart = this._tcpActionOnSynStart;
    }
    if (this._tcpActionOnSynTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnSynTimeout = this._tcpActionOnSynTimeout;
    }
    if (this._tcpAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAnyExceed = this._tcpAnyExceed;
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
    if (this._tcpConcurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpConcurrent = this._tcpConcurrent;
    }
    if (this._tcpDropBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpDropBl = this._tcpDropBl;
    }
    if (this._tcpDropBlackUserCfgSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpDropBlackUserCfgSrc = this._tcpDropBlackUserCfgSrc;
    }
    if (this._tcpDropBlackUserCfgSrcDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpDropBlackUserCfgSrcDst = this._tcpDropBlackUserCfgSrcDst;
    }
    if (this._tcpDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpDstDrop = this._tcpDstDrop;
    }
    if (this._tcpFinRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinRcvd = this._tcpFinRcvd;
    }
    if (this._tcpFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFragDrop = this._tcpFragDrop;
    }
    if (this._tcpFragRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFragRcvd = this._tcpFragRcvd;
    }
    if (this._tcpInvalidSynRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInvalidSynRcvd = this._tcpInvalidSynRcvd;
    }
    if (this._tcpInvalidSynackRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInvalidSynackRcvd = this._tcpInvalidSynackRcvd;
    }
    if (this._tcpOutOfSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutOfSeq = this._tcpOutOfSeq;
    }
    if (this._tcpOutOfSeqBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutOfSeqBl = this._tcpOutOfSeqBl;
    }
    if (this._tcpOutOfSeqDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutOfSeqDrop = this._tcpOutOfSeqDrop;
    }
    if (this._tcpOutrst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutrst = this._tcpOutrst;
    }
    if (this._tcpPerConnOfoRateExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPerConnOfoRateExceedBl = this._tcpPerConnOfoRateExceedBl;
    }
    if (this._tcpPerConnOfoRateExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPerConnOfoRateExceedDrop = this._tcpPerConnOfoRateExceedDrop;
    }
    if (this._tcpPerConnPrateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPerConnPrateExceed = this._tcpPerConnPrateExceed;
    }
    if (this._tcpPerConnPrateExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPerConnPrateExceedBl = this._tcpPerConnPrateExceedBl;
    }
    if (this._tcpPerConnRexmitRateExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPerConnRexmitRateExceedBl = this._tcpPerConnRexmitRateExceedBl;
    }
    if (this._tcpPerConnRexmitRateExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPerConnRexmitRateExceedDrop = this._tcpPerConnRexmitRateExceedDrop;
    }
    if (this._tcpPerConnZwindowRateExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPerConnZwindowRateExceedBl = this._tcpPerConnZwindowRateExceedBl;
    }
    if (this._tcpPerConnZwindowRateExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPerConnZwindowRateExceedDrop = this._tcpPerConnZwindowRateExceedDrop;
    }
    if (this._tcpPortZeroDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortZeroDrop = this._tcpPortZeroDrop;
    }
    if (this._tcpProgressionViolationExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpProgressionViolationExceed = this._tcpProgressionViolationExceed;
    }
    if (this._tcpProgressionViolationExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpProgressionViolationExceedBl = this._tcpProgressionViolationExceedBl;
    }
    if (this._tcpProgressionViolationExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpProgressionViolationExceedDrop = this._tcpProgressionViolationExceedDrop;
    }
    if (this._tcpProgressionViolationExceedReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpProgressionViolationExceedReset = this._tcpProgressionViolationExceedReset;
    }
    if (this._tcpResetClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpResetClient = this._tcpResetClient;
    }
    if (this._tcpResetServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpResetServer = this._tcpResetServer;
    }
    if (this._tcpRetransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetransmit = this._tcpRetransmit;
    }
    if (this._tcpRetransmitBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetransmitBl = this._tcpRetransmitBl;
    }
    if (this._tcpRetransmitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetransmitDrop = this._tcpRetransmitDrop;
    }
    if (this._tcpRexmitSynLimitBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynLimitBl = this._tcpRexmitSynLimitBl;
    }
    if (this._tcpRexmitSynLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynLimitDrop = this._tcpRexmitSynLimitDrop;
    }
    if (this._tcpRstRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRstRcvd = this._tcpRstRcvd;
    }
    if (this._tcpSessCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessCreate = this._tcpSessCreate;
    }
    if (this._tcpSmallWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSmallWindow = this._tcpSmallWindow;
    }
    if (this._tcpSmallWindowBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSmallWindowBl = this._tcpSmallWindowBl;
    }
    if (this._tcpSmallWindowDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSmallWindowDrop = this._tcpSmallWindowDrop;
    }
    if (this._tcpSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSrcDrop = this._tcpSrcDrop;
    }
    if (this._tcpSrcDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSrcDstDrop = this._tcpSrcDstDrop;
    }
    if (this._tcpSynAckRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynAckRcvd = this._tcpSynAckRcvd;
    }
    if (this._tcpSynRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynRate = this._tcpSynRate;
    }
    if (this._tcpSynRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynRcvd = this._tcpSynRcvd;
    }
    if (this._tcpSynTfoRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynTfoRcvd = this._tcpSynTfoRcvd;
    }
    if (this._tcpSyncookieCheckFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookieCheckFail = this._tcpSyncookieCheckFail;
    }
    if (this._tcpSyncookieFailBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookieFailBl = this._tcpSyncookieFailBl;
    }
    if (this._tcpSyncookieHwMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookieHwMissing = this._tcpSyncookieHwMissing;
    }
    if (this._tcpSyncookiePass !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookiePass = this._tcpSyncookiePass;
    }
    if (this._tcpSyncookieSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookieSent = this._tcpSyncookieSent;
    }
    if (this._tcpSyncookieSentFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookieSentFail = this._tcpSyncookieSentFail;
    }
    if (this._tcpTotalBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTotalBytesDrop = this._tcpTotalBytesDrop;
    }
    if (this._tcpTotalBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTotalBytesRcv = this._tcpTotalBytesRcv;
    }
    if (this._tcpTotalDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTotalDrop = this._tcpTotalDrop;
    }
    if (this._tcpUnauthRstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpUnauthRstDrop = this._tcpUnauthRstDrop;
    }
    if (this._tcpZeroWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpZeroWindow = this._tcpZeroWindow;
    }
    if (this._tcpZeroWindowBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpZeroWindowBl = this._tcpZeroWindowBl;
    }
    if (this._tcpZeroWindowDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpZeroWindowDrop = this._tcpZeroWindowDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosL4TcpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstTcpFilterActionBlacklist = undefined;
      this._dstTcpFilterActionDefaultPass = undefined;
      this._dstTcpFilterActionDrop = undefined;
      this._dstTcpFilterActionWhitelist = undefined;
      this._dstTcpFilterMatch = undefined;
      this._dstTcpFilterNotMatch = undefined;
      this._hybridSynAuthAuthNoMatch = undefined;
      this._hybridSynAuthEntryAgedOut = undefined;
      this._hybridSynAuthFilterFull = undefined;
      this._hybridSynAuthInvalidFail = undefined;
      this._hybridSynAuthInvalidPass = undefined;
      this._hybridSynAuthInvalidSaSent = undefined;
      this._hybridSynAuthLookupFail = undefined;
      this._hybridSynAuthMethodChange = undefined;
      this._hybridSynAuthUnknownFail = undefined;
      this._hybridSynAuthUnknownPass = undefined;
      this._hybridSynAuthValidFail = undefined;
      this._hybridSynAuthValidPass = undefined;
      this._hybridSynAuthValidSaSent = undefined;
      this._intcp = undefined;
      this._srcDstTcpFilterActionBlacklist = undefined;
      this._srcDstTcpFilterActionDefaultPass = undefined;
      this._srcDstTcpFilterActionDrop = undefined;
      this._srcDstTcpFilterActionWhitelist = undefined;
      this._srcDstTcpFilterMatch = undefined;
      this._srcDstTcpFilterNotMatch = undefined;
      this._srcTcpFilterActionBlacklist = undefined;
      this._srcTcpFilterActionDefaultPass = undefined;
      this._srcTcpFilterActionDrop = undefined;
      this._srcTcpFilterActionWhitelist = undefined;
      this._srcTcpFilterMatch = undefined;
      this._srcTcpFilterNotMatch = undefined;
      this._synAuthPass = undefined;
      this._synAuthPassWl = undefined;
      this._synAuthSkip = undefined;
      this._tcpAckNoSyn = undefined;
      this._tcpAckRcvd = undefined;
      this._tcpActionOnAckBl = undefined;
      this._tcpActionOnAckFailed = undefined;
      this._tcpActionOnAckGapDrop = undefined;
      this._tcpActionOnAckGapPass = undefined;
      this._tcpActionOnAckMatched = undefined;
      this._tcpActionOnAckPassed = undefined;
      this._tcpActionOnAckReset = undefined;
      this._tcpActionOnAckStart = undefined;
      this._tcpActionOnAckTimeout = undefined;
      this._tcpActionOnSynBl = undefined;
      this._tcpActionOnSynFailed = undefined;
      this._tcpActionOnSynGapDrop = undefined;
      this._tcpActionOnSynGapPass = undefined;
      this._tcpActionOnSynPassed = undefined;
      this._tcpActionOnSynReset = undefined;
      this._tcpActionOnSynStart = undefined;
      this._tcpActionOnSynTimeout = undefined;
      this._tcpAnyExceed = undefined;
      this._tcpAuthDrop = undefined;
      this._tcpAuthResp = undefined;
      this._tcpAuthRst = undefined;
      this._tcpConcurrent = undefined;
      this._tcpDropBl = undefined;
      this._tcpDropBlackUserCfgSrc = undefined;
      this._tcpDropBlackUserCfgSrcDst = undefined;
      this._tcpDstDrop = undefined;
      this._tcpFinRcvd = undefined;
      this._tcpFragDrop = undefined;
      this._tcpFragRcvd = undefined;
      this._tcpInvalidSynRcvd = undefined;
      this._tcpInvalidSynackRcvd = undefined;
      this._tcpOutOfSeq = undefined;
      this._tcpOutOfSeqBl = undefined;
      this._tcpOutOfSeqDrop = undefined;
      this._tcpOutrst = undefined;
      this._tcpPerConnOfoRateExceedBl = undefined;
      this._tcpPerConnOfoRateExceedDrop = undefined;
      this._tcpPerConnPrateExceed = undefined;
      this._tcpPerConnPrateExceedBl = undefined;
      this._tcpPerConnRexmitRateExceedBl = undefined;
      this._tcpPerConnRexmitRateExceedDrop = undefined;
      this._tcpPerConnZwindowRateExceedBl = undefined;
      this._tcpPerConnZwindowRateExceedDrop = undefined;
      this._tcpPortZeroDrop = undefined;
      this._tcpProgressionViolationExceed = undefined;
      this._tcpProgressionViolationExceedBl = undefined;
      this._tcpProgressionViolationExceedDrop = undefined;
      this._tcpProgressionViolationExceedReset = undefined;
      this._tcpResetClient = undefined;
      this._tcpResetServer = undefined;
      this._tcpRetransmit = undefined;
      this._tcpRetransmitBl = undefined;
      this._tcpRetransmitDrop = undefined;
      this._tcpRexmitSynLimitBl = undefined;
      this._tcpRexmitSynLimitDrop = undefined;
      this._tcpRstRcvd = undefined;
      this._tcpSessCreate = undefined;
      this._tcpSmallWindow = undefined;
      this._tcpSmallWindowBl = undefined;
      this._tcpSmallWindowDrop = undefined;
      this._tcpSrcDrop = undefined;
      this._tcpSrcDstDrop = undefined;
      this._tcpSynAckRcvd = undefined;
      this._tcpSynRate = undefined;
      this._tcpSynRcvd = undefined;
      this._tcpSynTfoRcvd = undefined;
      this._tcpSyncookieCheckFail = undefined;
      this._tcpSyncookieFailBl = undefined;
      this._tcpSyncookieHwMissing = undefined;
      this._tcpSyncookiePass = undefined;
      this._tcpSyncookieSent = undefined;
      this._tcpSyncookieSentFail = undefined;
      this._tcpTotalBytesDrop = undefined;
      this._tcpTotalBytesRcv = undefined;
      this._tcpTotalDrop = undefined;
      this._tcpUnauthRstDrop = undefined;
      this._tcpZeroWindow = undefined;
      this._tcpZeroWindowBl = undefined;
      this._tcpZeroWindowDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstTcpFilterActionBlacklist = value.dstTcpFilterActionBlacklist;
      this._dstTcpFilterActionDefaultPass = value.dstTcpFilterActionDefaultPass;
      this._dstTcpFilterActionDrop = value.dstTcpFilterActionDrop;
      this._dstTcpFilterActionWhitelist = value.dstTcpFilterActionWhitelist;
      this._dstTcpFilterMatch = value.dstTcpFilterMatch;
      this._dstTcpFilterNotMatch = value.dstTcpFilterNotMatch;
      this._hybridSynAuthAuthNoMatch = value.hybridSynAuthAuthNoMatch;
      this._hybridSynAuthEntryAgedOut = value.hybridSynAuthEntryAgedOut;
      this._hybridSynAuthFilterFull = value.hybridSynAuthFilterFull;
      this._hybridSynAuthInvalidFail = value.hybridSynAuthInvalidFail;
      this._hybridSynAuthInvalidPass = value.hybridSynAuthInvalidPass;
      this._hybridSynAuthInvalidSaSent = value.hybridSynAuthInvalidSaSent;
      this._hybridSynAuthLookupFail = value.hybridSynAuthLookupFail;
      this._hybridSynAuthMethodChange = value.hybridSynAuthMethodChange;
      this._hybridSynAuthUnknownFail = value.hybridSynAuthUnknownFail;
      this._hybridSynAuthUnknownPass = value.hybridSynAuthUnknownPass;
      this._hybridSynAuthValidFail = value.hybridSynAuthValidFail;
      this._hybridSynAuthValidPass = value.hybridSynAuthValidPass;
      this._hybridSynAuthValidSaSent = value.hybridSynAuthValidSaSent;
      this._intcp = value.intcp;
      this._srcDstTcpFilterActionBlacklist = value.srcDstTcpFilterActionBlacklist;
      this._srcDstTcpFilterActionDefaultPass = value.srcDstTcpFilterActionDefaultPass;
      this._srcDstTcpFilterActionDrop = value.srcDstTcpFilterActionDrop;
      this._srcDstTcpFilterActionWhitelist = value.srcDstTcpFilterActionWhitelist;
      this._srcDstTcpFilterMatch = value.srcDstTcpFilterMatch;
      this._srcDstTcpFilterNotMatch = value.srcDstTcpFilterNotMatch;
      this._srcTcpFilterActionBlacklist = value.srcTcpFilterActionBlacklist;
      this._srcTcpFilterActionDefaultPass = value.srcTcpFilterActionDefaultPass;
      this._srcTcpFilterActionDrop = value.srcTcpFilterActionDrop;
      this._srcTcpFilterActionWhitelist = value.srcTcpFilterActionWhitelist;
      this._srcTcpFilterMatch = value.srcTcpFilterMatch;
      this._srcTcpFilterNotMatch = value.srcTcpFilterNotMatch;
      this._synAuthPass = value.synAuthPass;
      this._synAuthPassWl = value.synAuthPassWl;
      this._synAuthSkip = value.synAuthSkip;
      this._tcpAckNoSyn = value.tcpAckNoSyn;
      this._tcpAckRcvd = value.tcpAckRcvd;
      this._tcpActionOnAckBl = value.tcpActionOnAckBl;
      this._tcpActionOnAckFailed = value.tcpActionOnAckFailed;
      this._tcpActionOnAckGapDrop = value.tcpActionOnAckGapDrop;
      this._tcpActionOnAckGapPass = value.tcpActionOnAckGapPass;
      this._tcpActionOnAckMatched = value.tcpActionOnAckMatched;
      this._tcpActionOnAckPassed = value.tcpActionOnAckPassed;
      this._tcpActionOnAckReset = value.tcpActionOnAckReset;
      this._tcpActionOnAckStart = value.tcpActionOnAckStart;
      this._tcpActionOnAckTimeout = value.tcpActionOnAckTimeout;
      this._tcpActionOnSynBl = value.tcpActionOnSynBl;
      this._tcpActionOnSynFailed = value.tcpActionOnSynFailed;
      this._tcpActionOnSynGapDrop = value.tcpActionOnSynGapDrop;
      this._tcpActionOnSynGapPass = value.tcpActionOnSynGapPass;
      this._tcpActionOnSynPassed = value.tcpActionOnSynPassed;
      this._tcpActionOnSynReset = value.tcpActionOnSynReset;
      this._tcpActionOnSynStart = value.tcpActionOnSynStart;
      this._tcpActionOnSynTimeout = value.tcpActionOnSynTimeout;
      this._tcpAnyExceed = value.tcpAnyExceed;
      this._tcpAuthDrop = value.tcpAuthDrop;
      this._tcpAuthResp = value.tcpAuthResp;
      this._tcpAuthRst = value.tcpAuthRst;
      this._tcpConcurrent = value.tcpConcurrent;
      this._tcpDropBl = value.tcpDropBl;
      this._tcpDropBlackUserCfgSrc = value.tcpDropBlackUserCfgSrc;
      this._tcpDropBlackUserCfgSrcDst = value.tcpDropBlackUserCfgSrcDst;
      this._tcpDstDrop = value.tcpDstDrop;
      this._tcpFinRcvd = value.tcpFinRcvd;
      this._tcpFragDrop = value.tcpFragDrop;
      this._tcpFragRcvd = value.tcpFragRcvd;
      this._tcpInvalidSynRcvd = value.tcpInvalidSynRcvd;
      this._tcpInvalidSynackRcvd = value.tcpInvalidSynackRcvd;
      this._tcpOutOfSeq = value.tcpOutOfSeq;
      this._tcpOutOfSeqBl = value.tcpOutOfSeqBl;
      this._tcpOutOfSeqDrop = value.tcpOutOfSeqDrop;
      this._tcpOutrst = value.tcpOutrst;
      this._tcpPerConnOfoRateExceedBl = value.tcpPerConnOfoRateExceedBl;
      this._tcpPerConnOfoRateExceedDrop = value.tcpPerConnOfoRateExceedDrop;
      this._tcpPerConnPrateExceed = value.tcpPerConnPrateExceed;
      this._tcpPerConnPrateExceedBl = value.tcpPerConnPrateExceedBl;
      this._tcpPerConnRexmitRateExceedBl = value.tcpPerConnRexmitRateExceedBl;
      this._tcpPerConnRexmitRateExceedDrop = value.tcpPerConnRexmitRateExceedDrop;
      this._tcpPerConnZwindowRateExceedBl = value.tcpPerConnZwindowRateExceedBl;
      this._tcpPerConnZwindowRateExceedDrop = value.tcpPerConnZwindowRateExceedDrop;
      this._tcpPortZeroDrop = value.tcpPortZeroDrop;
      this._tcpProgressionViolationExceed = value.tcpProgressionViolationExceed;
      this._tcpProgressionViolationExceedBl = value.tcpProgressionViolationExceedBl;
      this._tcpProgressionViolationExceedDrop = value.tcpProgressionViolationExceedDrop;
      this._tcpProgressionViolationExceedReset = value.tcpProgressionViolationExceedReset;
      this._tcpResetClient = value.tcpResetClient;
      this._tcpResetServer = value.tcpResetServer;
      this._tcpRetransmit = value.tcpRetransmit;
      this._tcpRetransmitBl = value.tcpRetransmitBl;
      this._tcpRetransmitDrop = value.tcpRetransmitDrop;
      this._tcpRexmitSynLimitBl = value.tcpRexmitSynLimitBl;
      this._tcpRexmitSynLimitDrop = value.tcpRexmitSynLimitDrop;
      this._tcpRstRcvd = value.tcpRstRcvd;
      this._tcpSessCreate = value.tcpSessCreate;
      this._tcpSmallWindow = value.tcpSmallWindow;
      this._tcpSmallWindowBl = value.tcpSmallWindowBl;
      this._tcpSmallWindowDrop = value.tcpSmallWindowDrop;
      this._tcpSrcDrop = value.tcpSrcDrop;
      this._tcpSrcDstDrop = value.tcpSrcDstDrop;
      this._tcpSynAckRcvd = value.tcpSynAckRcvd;
      this._tcpSynRate = value.tcpSynRate;
      this._tcpSynRcvd = value.tcpSynRcvd;
      this._tcpSynTfoRcvd = value.tcpSynTfoRcvd;
      this._tcpSyncookieCheckFail = value.tcpSyncookieCheckFail;
      this._tcpSyncookieFailBl = value.tcpSyncookieFailBl;
      this._tcpSyncookieHwMissing = value.tcpSyncookieHwMissing;
      this._tcpSyncookiePass = value.tcpSyncookiePass;
      this._tcpSyncookieSent = value.tcpSyncookieSent;
      this._tcpSyncookieSentFail = value.tcpSyncookieSentFail;
      this._tcpTotalBytesDrop = value.tcpTotalBytesDrop;
      this._tcpTotalBytesRcv = value.tcpTotalBytesRcv;
      this._tcpTotalDrop = value.tcpTotalDrop;
      this._tcpUnauthRstDrop = value.tcpUnauthRstDrop;
      this._tcpZeroWindow = value.tcpZeroWindow;
      this._tcpZeroWindowBl = value.tcpZeroWindowBl;
      this._tcpZeroWindowDrop = value.tcpZeroWindowDrop;
    }
  }

  // dst_tcp_filter_action_blacklist - computed: false, optional: true, required: false
  private _dstTcpFilterActionBlacklist?: number; 
  public get dstTcpFilterActionBlacklist() {
    return this.getNumberAttribute('dst_tcp_filter_action_blacklist');
  }
  public set dstTcpFilterActionBlacklist(value: number) {
    this._dstTcpFilterActionBlacklist = value;
  }
  public resetDstTcpFilterActionBlacklist() {
    this._dstTcpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFilterActionBlacklistInput() {
    return this._dstTcpFilterActionBlacklist;
  }

  // dst_tcp_filter_action_default_pass - computed: false, optional: true, required: false
  private _dstTcpFilterActionDefaultPass?: number; 
  public get dstTcpFilterActionDefaultPass() {
    return this.getNumberAttribute('dst_tcp_filter_action_default_pass');
  }
  public set dstTcpFilterActionDefaultPass(value: number) {
    this._dstTcpFilterActionDefaultPass = value;
  }
  public resetDstTcpFilterActionDefaultPass() {
    this._dstTcpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFilterActionDefaultPassInput() {
    return this._dstTcpFilterActionDefaultPass;
  }

  // dst_tcp_filter_action_drop - computed: false, optional: true, required: false
  private _dstTcpFilterActionDrop?: number; 
  public get dstTcpFilterActionDrop() {
    return this.getNumberAttribute('dst_tcp_filter_action_drop');
  }
  public set dstTcpFilterActionDrop(value: number) {
    this._dstTcpFilterActionDrop = value;
  }
  public resetDstTcpFilterActionDrop() {
    this._dstTcpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFilterActionDropInput() {
    return this._dstTcpFilterActionDrop;
  }

  // dst_tcp_filter_action_whitelist - computed: false, optional: true, required: false
  private _dstTcpFilterActionWhitelist?: number; 
  public get dstTcpFilterActionWhitelist() {
    return this.getNumberAttribute('dst_tcp_filter_action_whitelist');
  }
  public set dstTcpFilterActionWhitelist(value: number) {
    this._dstTcpFilterActionWhitelist = value;
  }
  public resetDstTcpFilterActionWhitelist() {
    this._dstTcpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFilterActionWhitelistInput() {
    return this._dstTcpFilterActionWhitelist;
  }

  // dst_tcp_filter_match - computed: false, optional: true, required: false
  private _dstTcpFilterMatch?: number; 
  public get dstTcpFilterMatch() {
    return this.getNumberAttribute('dst_tcp_filter_match');
  }
  public set dstTcpFilterMatch(value: number) {
    this._dstTcpFilterMatch = value;
  }
  public resetDstTcpFilterMatch() {
    this._dstTcpFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFilterMatchInput() {
    return this._dstTcpFilterMatch;
  }

  // dst_tcp_filter_not_match - computed: false, optional: true, required: false
  private _dstTcpFilterNotMatch?: number; 
  public get dstTcpFilterNotMatch() {
    return this.getNumberAttribute('dst_tcp_filter_not_match');
  }
  public set dstTcpFilterNotMatch(value: number) {
    this._dstTcpFilterNotMatch = value;
  }
  public resetDstTcpFilterNotMatch() {
    this._dstTcpFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFilterNotMatchInput() {
    return this._dstTcpFilterNotMatch;
  }

  // hybrid_syn_auth_auth_no_match - computed: false, optional: true, required: false
  private _hybridSynAuthAuthNoMatch?: number; 
  public get hybridSynAuthAuthNoMatch() {
    return this.getNumberAttribute('hybrid_syn_auth_auth_no_match');
  }
  public set hybridSynAuthAuthNoMatch(value: number) {
    this._hybridSynAuthAuthNoMatch = value;
  }
  public resetHybridSynAuthAuthNoMatch() {
    this._hybridSynAuthAuthNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthAuthNoMatchInput() {
    return this._hybridSynAuthAuthNoMatch;
  }

  // hybrid_syn_auth_entry_aged_out - computed: false, optional: true, required: false
  private _hybridSynAuthEntryAgedOut?: number; 
  public get hybridSynAuthEntryAgedOut() {
    return this.getNumberAttribute('hybrid_syn_auth_entry_aged_out');
  }
  public set hybridSynAuthEntryAgedOut(value: number) {
    this._hybridSynAuthEntryAgedOut = value;
  }
  public resetHybridSynAuthEntryAgedOut() {
    this._hybridSynAuthEntryAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthEntryAgedOutInput() {
    return this._hybridSynAuthEntryAgedOut;
  }

  // hybrid_syn_auth_filter_full - computed: false, optional: true, required: false
  private _hybridSynAuthFilterFull?: number; 
  public get hybridSynAuthFilterFull() {
    return this.getNumberAttribute('hybrid_syn_auth_filter_full');
  }
  public set hybridSynAuthFilterFull(value: number) {
    this._hybridSynAuthFilterFull = value;
  }
  public resetHybridSynAuthFilterFull() {
    this._hybridSynAuthFilterFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthFilterFullInput() {
    return this._hybridSynAuthFilterFull;
  }

  // hybrid_syn_auth_invalid_fail - computed: false, optional: true, required: false
  private _hybridSynAuthInvalidFail?: number; 
  public get hybridSynAuthInvalidFail() {
    return this.getNumberAttribute('hybrid_syn_auth_invalid_fail');
  }
  public set hybridSynAuthInvalidFail(value: number) {
    this._hybridSynAuthInvalidFail = value;
  }
  public resetHybridSynAuthInvalidFail() {
    this._hybridSynAuthInvalidFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthInvalidFailInput() {
    return this._hybridSynAuthInvalidFail;
  }

  // hybrid_syn_auth_invalid_pass - computed: false, optional: true, required: false
  private _hybridSynAuthInvalidPass?: number; 
  public get hybridSynAuthInvalidPass() {
    return this.getNumberAttribute('hybrid_syn_auth_invalid_pass');
  }
  public set hybridSynAuthInvalidPass(value: number) {
    this._hybridSynAuthInvalidPass = value;
  }
  public resetHybridSynAuthInvalidPass() {
    this._hybridSynAuthInvalidPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthInvalidPassInput() {
    return this._hybridSynAuthInvalidPass;
  }

  // hybrid_syn_auth_invalid_sa_sent - computed: false, optional: true, required: false
  private _hybridSynAuthInvalidSaSent?: number; 
  public get hybridSynAuthInvalidSaSent() {
    return this.getNumberAttribute('hybrid_syn_auth_invalid_sa_sent');
  }
  public set hybridSynAuthInvalidSaSent(value: number) {
    this._hybridSynAuthInvalidSaSent = value;
  }
  public resetHybridSynAuthInvalidSaSent() {
    this._hybridSynAuthInvalidSaSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthInvalidSaSentInput() {
    return this._hybridSynAuthInvalidSaSent;
  }

  // hybrid_syn_auth_lookup_fail - computed: false, optional: true, required: false
  private _hybridSynAuthLookupFail?: number; 
  public get hybridSynAuthLookupFail() {
    return this.getNumberAttribute('hybrid_syn_auth_lookup_fail');
  }
  public set hybridSynAuthLookupFail(value: number) {
    this._hybridSynAuthLookupFail = value;
  }
  public resetHybridSynAuthLookupFail() {
    this._hybridSynAuthLookupFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthLookupFailInput() {
    return this._hybridSynAuthLookupFail;
  }

  // hybrid_syn_auth_method_change - computed: false, optional: true, required: false
  private _hybridSynAuthMethodChange?: number; 
  public get hybridSynAuthMethodChange() {
    return this.getNumberAttribute('hybrid_syn_auth_method_change');
  }
  public set hybridSynAuthMethodChange(value: number) {
    this._hybridSynAuthMethodChange = value;
  }
  public resetHybridSynAuthMethodChange() {
    this._hybridSynAuthMethodChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthMethodChangeInput() {
    return this._hybridSynAuthMethodChange;
  }

  // hybrid_syn_auth_unknown_fail - computed: false, optional: true, required: false
  private _hybridSynAuthUnknownFail?: number; 
  public get hybridSynAuthUnknownFail() {
    return this.getNumberAttribute('hybrid_syn_auth_unknown_fail');
  }
  public set hybridSynAuthUnknownFail(value: number) {
    this._hybridSynAuthUnknownFail = value;
  }
  public resetHybridSynAuthUnknownFail() {
    this._hybridSynAuthUnknownFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthUnknownFailInput() {
    return this._hybridSynAuthUnknownFail;
  }

  // hybrid_syn_auth_unknown_pass - computed: false, optional: true, required: false
  private _hybridSynAuthUnknownPass?: number; 
  public get hybridSynAuthUnknownPass() {
    return this.getNumberAttribute('hybrid_syn_auth_unknown_pass');
  }
  public set hybridSynAuthUnknownPass(value: number) {
    this._hybridSynAuthUnknownPass = value;
  }
  public resetHybridSynAuthUnknownPass() {
    this._hybridSynAuthUnknownPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthUnknownPassInput() {
    return this._hybridSynAuthUnknownPass;
  }

  // hybrid_syn_auth_valid_fail - computed: false, optional: true, required: false
  private _hybridSynAuthValidFail?: number; 
  public get hybridSynAuthValidFail() {
    return this.getNumberAttribute('hybrid_syn_auth_valid_fail');
  }
  public set hybridSynAuthValidFail(value: number) {
    this._hybridSynAuthValidFail = value;
  }
  public resetHybridSynAuthValidFail() {
    this._hybridSynAuthValidFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthValidFailInput() {
    return this._hybridSynAuthValidFail;
  }

  // hybrid_syn_auth_valid_pass - computed: false, optional: true, required: false
  private _hybridSynAuthValidPass?: number; 
  public get hybridSynAuthValidPass() {
    return this.getNumberAttribute('hybrid_syn_auth_valid_pass');
  }
  public set hybridSynAuthValidPass(value: number) {
    this._hybridSynAuthValidPass = value;
  }
  public resetHybridSynAuthValidPass() {
    this._hybridSynAuthValidPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthValidPassInput() {
    return this._hybridSynAuthValidPass;
  }

  // hybrid_syn_auth_valid_sa_sent - computed: false, optional: true, required: false
  private _hybridSynAuthValidSaSent?: number; 
  public get hybridSynAuthValidSaSent() {
    return this.getNumberAttribute('hybrid_syn_auth_valid_sa_sent');
  }
  public set hybridSynAuthValidSaSent(value: number) {
    this._hybridSynAuthValidSaSent = value;
  }
  public resetHybridSynAuthValidSaSent() {
    this._hybridSynAuthValidSaSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSynAuthValidSaSentInput() {
    return this._hybridSynAuthValidSaSent;
  }

  // intcp - computed: false, optional: true, required: false
  private _intcp?: number; 
  public get intcp() {
    return this.getNumberAttribute('intcp');
  }
  public set intcp(value: number) {
    this._intcp = value;
  }
  public resetIntcp() {
    this._intcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intcpInput() {
    return this._intcp;
  }

  // src_dst_tcp_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcDstTcpFilterActionBlacklist?: number; 
  public get srcDstTcpFilterActionBlacklist() {
    return this.getNumberAttribute('src_dst_tcp_filter_action_blacklist');
  }
  public set srcDstTcpFilterActionBlacklist(value: number) {
    this._srcDstTcpFilterActionBlacklist = value;
  }
  public resetSrcDstTcpFilterActionBlacklist() {
    this._srcDstTcpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstTcpFilterActionBlacklistInput() {
    return this._srcDstTcpFilterActionBlacklist;
  }

  // src_dst_tcp_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcDstTcpFilterActionDefaultPass?: number; 
  public get srcDstTcpFilterActionDefaultPass() {
    return this.getNumberAttribute('src_dst_tcp_filter_action_default_pass');
  }
  public set srcDstTcpFilterActionDefaultPass(value: number) {
    this._srcDstTcpFilterActionDefaultPass = value;
  }
  public resetSrcDstTcpFilterActionDefaultPass() {
    this._srcDstTcpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstTcpFilterActionDefaultPassInput() {
    return this._srcDstTcpFilterActionDefaultPass;
  }

  // src_dst_tcp_filter_action_drop - computed: false, optional: true, required: false
  private _srcDstTcpFilterActionDrop?: number; 
  public get srcDstTcpFilterActionDrop() {
    return this.getNumberAttribute('src_dst_tcp_filter_action_drop');
  }
  public set srcDstTcpFilterActionDrop(value: number) {
    this._srcDstTcpFilterActionDrop = value;
  }
  public resetSrcDstTcpFilterActionDrop() {
    this._srcDstTcpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstTcpFilterActionDropInput() {
    return this._srcDstTcpFilterActionDrop;
  }

  // src_dst_tcp_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcDstTcpFilterActionWhitelist?: number; 
  public get srcDstTcpFilterActionWhitelist() {
    return this.getNumberAttribute('src_dst_tcp_filter_action_whitelist');
  }
  public set srcDstTcpFilterActionWhitelist(value: number) {
    this._srcDstTcpFilterActionWhitelist = value;
  }
  public resetSrcDstTcpFilterActionWhitelist() {
    this._srcDstTcpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstTcpFilterActionWhitelistInput() {
    return this._srcDstTcpFilterActionWhitelist;
  }

  // src_dst_tcp_filter_match - computed: false, optional: true, required: false
  private _srcDstTcpFilterMatch?: number; 
  public get srcDstTcpFilterMatch() {
    return this.getNumberAttribute('src_dst_tcp_filter_match');
  }
  public set srcDstTcpFilterMatch(value: number) {
    this._srcDstTcpFilterMatch = value;
  }
  public resetSrcDstTcpFilterMatch() {
    this._srcDstTcpFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstTcpFilterMatchInput() {
    return this._srcDstTcpFilterMatch;
  }

  // src_dst_tcp_filter_not_match - computed: false, optional: true, required: false
  private _srcDstTcpFilterNotMatch?: number; 
  public get srcDstTcpFilterNotMatch() {
    return this.getNumberAttribute('src_dst_tcp_filter_not_match');
  }
  public set srcDstTcpFilterNotMatch(value: number) {
    this._srcDstTcpFilterNotMatch = value;
  }
  public resetSrcDstTcpFilterNotMatch() {
    this._srcDstTcpFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstTcpFilterNotMatchInput() {
    return this._srcDstTcpFilterNotMatch;
  }

  // src_tcp_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcTcpFilterActionBlacklist?: number; 
  public get srcTcpFilterActionBlacklist() {
    return this.getNumberAttribute('src_tcp_filter_action_blacklist');
  }
  public set srcTcpFilterActionBlacklist(value: number) {
    this._srcTcpFilterActionBlacklist = value;
  }
  public resetSrcTcpFilterActionBlacklist() {
    this._srcTcpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpFilterActionBlacklistInput() {
    return this._srcTcpFilterActionBlacklist;
  }

  // src_tcp_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcTcpFilterActionDefaultPass?: number; 
  public get srcTcpFilterActionDefaultPass() {
    return this.getNumberAttribute('src_tcp_filter_action_default_pass');
  }
  public set srcTcpFilterActionDefaultPass(value: number) {
    this._srcTcpFilterActionDefaultPass = value;
  }
  public resetSrcTcpFilterActionDefaultPass() {
    this._srcTcpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpFilterActionDefaultPassInput() {
    return this._srcTcpFilterActionDefaultPass;
  }

  // src_tcp_filter_action_drop - computed: false, optional: true, required: false
  private _srcTcpFilterActionDrop?: number; 
  public get srcTcpFilterActionDrop() {
    return this.getNumberAttribute('src_tcp_filter_action_drop');
  }
  public set srcTcpFilterActionDrop(value: number) {
    this._srcTcpFilterActionDrop = value;
  }
  public resetSrcTcpFilterActionDrop() {
    this._srcTcpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpFilterActionDropInput() {
    return this._srcTcpFilterActionDrop;
  }

  // src_tcp_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcTcpFilterActionWhitelist?: number; 
  public get srcTcpFilterActionWhitelist() {
    return this.getNumberAttribute('src_tcp_filter_action_whitelist');
  }
  public set srcTcpFilterActionWhitelist(value: number) {
    this._srcTcpFilterActionWhitelist = value;
  }
  public resetSrcTcpFilterActionWhitelist() {
    this._srcTcpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpFilterActionWhitelistInput() {
    return this._srcTcpFilterActionWhitelist;
  }

  // src_tcp_filter_match - computed: false, optional: true, required: false
  private _srcTcpFilterMatch?: number; 
  public get srcTcpFilterMatch() {
    return this.getNumberAttribute('src_tcp_filter_match');
  }
  public set srcTcpFilterMatch(value: number) {
    this._srcTcpFilterMatch = value;
  }
  public resetSrcTcpFilterMatch() {
    this._srcTcpFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpFilterMatchInput() {
    return this._srcTcpFilterMatch;
  }

  // src_tcp_filter_not_match - computed: false, optional: true, required: false
  private _srcTcpFilterNotMatch?: number; 
  public get srcTcpFilterNotMatch() {
    return this.getNumberAttribute('src_tcp_filter_not_match');
  }
  public set srcTcpFilterNotMatch(value: number) {
    this._srcTcpFilterNotMatch = value;
  }
  public resetSrcTcpFilterNotMatch() {
    this._srcTcpFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpFilterNotMatchInput() {
    return this._srcTcpFilterNotMatch;
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

  // syn_auth_pass_wl - computed: false, optional: true, required: false
  private _synAuthPassWl?: number; 
  public get synAuthPassWl() {
    return this.getNumberAttribute('syn_auth_pass_wl');
  }
  public set synAuthPassWl(value: number) {
    this._synAuthPassWl = value;
  }
  public resetSynAuthPassWl() {
    this._synAuthPassWl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthPassWlInput() {
    return this._synAuthPassWl;
  }

  // syn_auth_skip - computed: false, optional: true, required: false
  private _synAuthSkip?: number; 
  public get synAuthSkip() {
    return this.getNumberAttribute('syn_auth_skip');
  }
  public set synAuthSkip(value: number) {
    this._synAuthSkip = value;
  }
  public resetSynAuthSkip() {
    this._synAuthSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthSkipInput() {
    return this._synAuthSkip;
  }

  // tcp_ack_no_syn - computed: false, optional: true, required: false
  private _tcpAckNoSyn?: number; 
  public get tcpAckNoSyn() {
    return this.getNumberAttribute('tcp_ack_no_syn');
  }
  public set tcpAckNoSyn(value: number) {
    this._tcpAckNoSyn = value;
  }
  public resetTcpAckNoSyn() {
    this._tcpAckNoSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckNoSynInput() {
    return this._tcpAckNoSyn;
  }

  // tcp_ack_rcvd - computed: false, optional: true, required: false
  private _tcpAckRcvd?: number; 
  public get tcpAckRcvd() {
    return this.getNumberAttribute('tcp_ack_rcvd');
  }
  public set tcpAckRcvd(value: number) {
    this._tcpAckRcvd = value;
  }
  public resetTcpAckRcvd() {
    this._tcpAckRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckRcvdInput() {
    return this._tcpAckRcvd;
  }

  // tcp_action_on_ack_bl - computed: false, optional: true, required: false
  private _tcpActionOnAckBl?: number; 
  public get tcpActionOnAckBl() {
    return this.getNumberAttribute('tcp_action_on_ack_bl');
  }
  public set tcpActionOnAckBl(value: number) {
    this._tcpActionOnAckBl = value;
  }
  public resetTcpActionOnAckBl() {
    this._tcpActionOnAckBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckBlInput() {
    return this._tcpActionOnAckBl;
  }

  // tcp_action_on_ack_failed - computed: false, optional: true, required: false
  private _tcpActionOnAckFailed?: number; 
  public get tcpActionOnAckFailed() {
    return this.getNumberAttribute('tcp_action_on_ack_failed');
  }
  public set tcpActionOnAckFailed(value: number) {
    this._tcpActionOnAckFailed = value;
  }
  public resetTcpActionOnAckFailed() {
    this._tcpActionOnAckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckFailedInput() {
    return this._tcpActionOnAckFailed;
  }

  // tcp_action_on_ack_gap_drop - computed: false, optional: true, required: false
  private _tcpActionOnAckGapDrop?: number; 
  public get tcpActionOnAckGapDrop() {
    return this.getNumberAttribute('tcp_action_on_ack_gap_drop');
  }
  public set tcpActionOnAckGapDrop(value: number) {
    this._tcpActionOnAckGapDrop = value;
  }
  public resetTcpActionOnAckGapDrop() {
    this._tcpActionOnAckGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckGapDropInput() {
    return this._tcpActionOnAckGapDrop;
  }

  // tcp_action_on_ack_gap_pass - computed: false, optional: true, required: false
  private _tcpActionOnAckGapPass?: number; 
  public get tcpActionOnAckGapPass() {
    return this.getNumberAttribute('tcp_action_on_ack_gap_pass');
  }
  public set tcpActionOnAckGapPass(value: number) {
    this._tcpActionOnAckGapPass = value;
  }
  public resetTcpActionOnAckGapPass() {
    this._tcpActionOnAckGapPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckGapPassInput() {
    return this._tcpActionOnAckGapPass;
  }

  // tcp_action_on_ack_matched - computed: false, optional: true, required: false
  private _tcpActionOnAckMatched?: number; 
  public get tcpActionOnAckMatched() {
    return this.getNumberAttribute('tcp_action_on_ack_matched');
  }
  public set tcpActionOnAckMatched(value: number) {
    this._tcpActionOnAckMatched = value;
  }
  public resetTcpActionOnAckMatched() {
    this._tcpActionOnAckMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckMatchedInput() {
    return this._tcpActionOnAckMatched;
  }

  // tcp_action_on_ack_passed - computed: false, optional: true, required: false
  private _tcpActionOnAckPassed?: number; 
  public get tcpActionOnAckPassed() {
    return this.getNumberAttribute('tcp_action_on_ack_passed');
  }
  public set tcpActionOnAckPassed(value: number) {
    this._tcpActionOnAckPassed = value;
  }
  public resetTcpActionOnAckPassed() {
    this._tcpActionOnAckPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckPassedInput() {
    return this._tcpActionOnAckPassed;
  }

  // tcp_action_on_ack_reset - computed: false, optional: true, required: false
  private _tcpActionOnAckReset?: number; 
  public get tcpActionOnAckReset() {
    return this.getNumberAttribute('tcp_action_on_ack_reset');
  }
  public set tcpActionOnAckReset(value: number) {
    this._tcpActionOnAckReset = value;
  }
  public resetTcpActionOnAckReset() {
    this._tcpActionOnAckReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckResetInput() {
    return this._tcpActionOnAckReset;
  }

  // tcp_action_on_ack_start - computed: false, optional: true, required: false
  private _tcpActionOnAckStart?: number; 
  public get tcpActionOnAckStart() {
    return this.getNumberAttribute('tcp_action_on_ack_start');
  }
  public set tcpActionOnAckStart(value: number) {
    this._tcpActionOnAckStart = value;
  }
  public resetTcpActionOnAckStart() {
    this._tcpActionOnAckStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckStartInput() {
    return this._tcpActionOnAckStart;
  }

  // tcp_action_on_ack_timeout - computed: false, optional: true, required: false
  private _tcpActionOnAckTimeout?: number; 
  public get tcpActionOnAckTimeout() {
    return this.getNumberAttribute('tcp_action_on_ack_timeout');
  }
  public set tcpActionOnAckTimeout(value: number) {
    this._tcpActionOnAckTimeout = value;
  }
  public resetTcpActionOnAckTimeout() {
    this._tcpActionOnAckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckTimeoutInput() {
    return this._tcpActionOnAckTimeout;
  }

  // tcp_action_on_syn_bl - computed: false, optional: true, required: false
  private _tcpActionOnSynBl?: number; 
  public get tcpActionOnSynBl() {
    return this.getNumberAttribute('tcp_action_on_syn_bl');
  }
  public set tcpActionOnSynBl(value: number) {
    this._tcpActionOnSynBl = value;
  }
  public resetTcpActionOnSynBl() {
    this._tcpActionOnSynBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnSynBlInput() {
    return this._tcpActionOnSynBl;
  }

  // tcp_action_on_syn_failed - computed: false, optional: true, required: false
  private _tcpActionOnSynFailed?: number; 
  public get tcpActionOnSynFailed() {
    return this.getNumberAttribute('tcp_action_on_syn_failed');
  }
  public set tcpActionOnSynFailed(value: number) {
    this._tcpActionOnSynFailed = value;
  }
  public resetTcpActionOnSynFailed() {
    this._tcpActionOnSynFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnSynFailedInput() {
    return this._tcpActionOnSynFailed;
  }

  // tcp_action_on_syn_gap_drop - computed: false, optional: true, required: false
  private _tcpActionOnSynGapDrop?: number; 
  public get tcpActionOnSynGapDrop() {
    return this.getNumberAttribute('tcp_action_on_syn_gap_drop');
  }
  public set tcpActionOnSynGapDrop(value: number) {
    this._tcpActionOnSynGapDrop = value;
  }
  public resetTcpActionOnSynGapDrop() {
    this._tcpActionOnSynGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnSynGapDropInput() {
    return this._tcpActionOnSynGapDrop;
  }

  // tcp_action_on_syn_gap_pass - computed: false, optional: true, required: false
  private _tcpActionOnSynGapPass?: number; 
  public get tcpActionOnSynGapPass() {
    return this.getNumberAttribute('tcp_action_on_syn_gap_pass');
  }
  public set tcpActionOnSynGapPass(value: number) {
    this._tcpActionOnSynGapPass = value;
  }
  public resetTcpActionOnSynGapPass() {
    this._tcpActionOnSynGapPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnSynGapPassInput() {
    return this._tcpActionOnSynGapPass;
  }

  // tcp_action_on_syn_passed - computed: false, optional: true, required: false
  private _tcpActionOnSynPassed?: number; 
  public get tcpActionOnSynPassed() {
    return this.getNumberAttribute('tcp_action_on_syn_passed');
  }
  public set tcpActionOnSynPassed(value: number) {
    this._tcpActionOnSynPassed = value;
  }
  public resetTcpActionOnSynPassed() {
    this._tcpActionOnSynPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnSynPassedInput() {
    return this._tcpActionOnSynPassed;
  }

  // tcp_action_on_syn_reset - computed: false, optional: true, required: false
  private _tcpActionOnSynReset?: number; 
  public get tcpActionOnSynReset() {
    return this.getNumberAttribute('tcp_action_on_syn_reset');
  }
  public set tcpActionOnSynReset(value: number) {
    this._tcpActionOnSynReset = value;
  }
  public resetTcpActionOnSynReset() {
    this._tcpActionOnSynReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnSynResetInput() {
    return this._tcpActionOnSynReset;
  }

  // tcp_action_on_syn_start - computed: false, optional: true, required: false
  private _tcpActionOnSynStart?: number; 
  public get tcpActionOnSynStart() {
    return this.getNumberAttribute('tcp_action_on_syn_start');
  }
  public set tcpActionOnSynStart(value: number) {
    this._tcpActionOnSynStart = value;
  }
  public resetTcpActionOnSynStart() {
    this._tcpActionOnSynStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnSynStartInput() {
    return this._tcpActionOnSynStart;
  }

  // tcp_action_on_syn_timeout - computed: false, optional: true, required: false
  private _tcpActionOnSynTimeout?: number; 
  public get tcpActionOnSynTimeout() {
    return this.getNumberAttribute('tcp_action_on_syn_timeout');
  }
  public set tcpActionOnSynTimeout(value: number) {
    this._tcpActionOnSynTimeout = value;
  }
  public resetTcpActionOnSynTimeout() {
    this._tcpActionOnSynTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnSynTimeoutInput() {
    return this._tcpActionOnSynTimeout;
  }

  // tcp_any_exceed - computed: false, optional: true, required: false
  private _tcpAnyExceed?: number; 
  public get tcpAnyExceed() {
    return this.getNumberAttribute('tcp_any_exceed');
  }
  public set tcpAnyExceed(value: number) {
    this._tcpAnyExceed = value;
  }
  public resetTcpAnyExceed() {
    this._tcpAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAnyExceedInput() {
    return this._tcpAnyExceed;
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

  // tcp_concurrent - computed: false, optional: true, required: false
  private _tcpConcurrent?: number; 
  public get tcpConcurrent() {
    return this.getNumberAttribute('tcp_concurrent');
  }
  public set tcpConcurrent(value: number) {
    this._tcpConcurrent = value;
  }
  public resetTcpConcurrent() {
    this._tcpConcurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConcurrentInput() {
    return this._tcpConcurrent;
  }

  // tcp_drop_bl - computed: false, optional: true, required: false
  private _tcpDropBl?: number; 
  public get tcpDropBl() {
    return this.getNumberAttribute('tcp_drop_bl');
  }
  public set tcpDropBl(value: number) {
    this._tcpDropBl = value;
  }
  public resetTcpDropBl() {
    this._tcpDropBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDropBlInput() {
    return this._tcpDropBl;
  }

  // tcp_drop_black_user_cfg_src - computed: false, optional: true, required: false
  private _tcpDropBlackUserCfgSrc?: number; 
  public get tcpDropBlackUserCfgSrc() {
    return this.getNumberAttribute('tcp_drop_black_user_cfg_src');
  }
  public set tcpDropBlackUserCfgSrc(value: number) {
    this._tcpDropBlackUserCfgSrc = value;
  }
  public resetTcpDropBlackUserCfgSrc() {
    this._tcpDropBlackUserCfgSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDropBlackUserCfgSrcInput() {
    return this._tcpDropBlackUserCfgSrc;
  }

  // tcp_drop_black_user_cfg_src_dst - computed: false, optional: true, required: false
  private _tcpDropBlackUserCfgSrcDst?: number; 
  public get tcpDropBlackUserCfgSrcDst() {
    return this.getNumberAttribute('tcp_drop_black_user_cfg_src_dst');
  }
  public set tcpDropBlackUserCfgSrcDst(value: number) {
    this._tcpDropBlackUserCfgSrcDst = value;
  }
  public resetTcpDropBlackUserCfgSrcDst() {
    this._tcpDropBlackUserCfgSrcDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDropBlackUserCfgSrcDstInput() {
    return this._tcpDropBlackUserCfgSrcDst;
  }

  // tcp_dst_drop - computed: false, optional: true, required: false
  private _tcpDstDrop?: number; 
  public get tcpDstDrop() {
    return this.getNumberAttribute('tcp_dst_drop');
  }
  public set tcpDstDrop(value: number) {
    this._tcpDstDrop = value;
  }
  public resetTcpDstDrop() {
    this._tcpDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDstDropInput() {
    return this._tcpDstDrop;
  }

  // tcp_fin_rcvd - computed: false, optional: true, required: false
  private _tcpFinRcvd?: number; 
  public get tcpFinRcvd() {
    return this.getNumberAttribute('tcp_fin_rcvd');
  }
  public set tcpFinRcvd(value: number) {
    this._tcpFinRcvd = value;
  }
  public resetTcpFinRcvd() {
    this._tcpFinRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinRcvdInput() {
    return this._tcpFinRcvd;
  }

  // tcp_frag_drop - computed: false, optional: true, required: false
  private _tcpFragDrop?: number; 
  public get tcpFragDrop() {
    return this.getNumberAttribute('tcp_frag_drop');
  }
  public set tcpFragDrop(value: number) {
    this._tcpFragDrop = value;
  }
  public resetTcpFragDrop() {
    this._tcpFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFragDropInput() {
    return this._tcpFragDrop;
  }

  // tcp_frag_rcvd - computed: false, optional: true, required: false
  private _tcpFragRcvd?: number; 
  public get tcpFragRcvd() {
    return this.getNumberAttribute('tcp_frag_rcvd');
  }
  public set tcpFragRcvd(value: number) {
    this._tcpFragRcvd = value;
  }
  public resetTcpFragRcvd() {
    this._tcpFragRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFragRcvdInput() {
    return this._tcpFragRcvd;
  }

  // tcp_invalid_syn_rcvd - computed: false, optional: true, required: false
  private _tcpInvalidSynRcvd?: number; 
  public get tcpInvalidSynRcvd() {
    return this.getNumberAttribute('tcp_invalid_syn_rcvd');
  }
  public set tcpInvalidSynRcvd(value: number) {
    this._tcpInvalidSynRcvd = value;
  }
  public resetTcpInvalidSynRcvd() {
    this._tcpInvalidSynRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInvalidSynRcvdInput() {
    return this._tcpInvalidSynRcvd;
  }

  // tcp_invalid_synack_rcvd - computed: false, optional: true, required: false
  private _tcpInvalidSynackRcvd?: number; 
  public get tcpInvalidSynackRcvd() {
    return this.getNumberAttribute('tcp_invalid_synack_rcvd');
  }
  public set tcpInvalidSynackRcvd(value: number) {
    this._tcpInvalidSynackRcvd = value;
  }
  public resetTcpInvalidSynackRcvd() {
    this._tcpInvalidSynackRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInvalidSynackRcvdInput() {
    return this._tcpInvalidSynackRcvd;
  }

  // tcp_out_of_seq - computed: false, optional: true, required: false
  private _tcpOutOfSeq?: number; 
  public get tcpOutOfSeq() {
    return this.getNumberAttribute('tcp_out_of_seq');
  }
  public set tcpOutOfSeq(value: number) {
    this._tcpOutOfSeq = value;
  }
  public resetTcpOutOfSeq() {
    this._tcpOutOfSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutOfSeqInput() {
    return this._tcpOutOfSeq;
  }

  // tcp_out_of_seq_bl - computed: false, optional: true, required: false
  private _tcpOutOfSeqBl?: number; 
  public get tcpOutOfSeqBl() {
    return this.getNumberAttribute('tcp_out_of_seq_bl');
  }
  public set tcpOutOfSeqBl(value: number) {
    this._tcpOutOfSeqBl = value;
  }
  public resetTcpOutOfSeqBl() {
    this._tcpOutOfSeqBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutOfSeqBlInput() {
    return this._tcpOutOfSeqBl;
  }

  // tcp_out_of_seq_drop - computed: false, optional: true, required: false
  private _tcpOutOfSeqDrop?: number; 
  public get tcpOutOfSeqDrop() {
    return this.getNumberAttribute('tcp_out_of_seq_drop');
  }
  public set tcpOutOfSeqDrop(value: number) {
    this._tcpOutOfSeqDrop = value;
  }
  public resetTcpOutOfSeqDrop() {
    this._tcpOutOfSeqDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutOfSeqDropInput() {
    return this._tcpOutOfSeqDrop;
  }

  // tcp_outrst - computed: false, optional: true, required: false
  private _tcpOutrst?: number; 
  public get tcpOutrst() {
    return this.getNumberAttribute('tcp_outrst');
  }
  public set tcpOutrst(value: number) {
    this._tcpOutrst = value;
  }
  public resetTcpOutrst() {
    this._tcpOutrst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutrstInput() {
    return this._tcpOutrst;
  }

  // tcp_per_conn_ofo_rate_exceed_bl - computed: false, optional: true, required: false
  private _tcpPerConnOfoRateExceedBl?: number; 
  public get tcpPerConnOfoRateExceedBl() {
    return this.getNumberAttribute('tcp_per_conn_ofo_rate_exceed_bl');
  }
  public set tcpPerConnOfoRateExceedBl(value: number) {
    this._tcpPerConnOfoRateExceedBl = value;
  }
  public resetTcpPerConnOfoRateExceedBl() {
    this._tcpPerConnOfoRateExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPerConnOfoRateExceedBlInput() {
    return this._tcpPerConnOfoRateExceedBl;
  }

  // tcp_per_conn_ofo_rate_exceed_drop - computed: false, optional: true, required: false
  private _tcpPerConnOfoRateExceedDrop?: number; 
  public get tcpPerConnOfoRateExceedDrop() {
    return this.getNumberAttribute('tcp_per_conn_ofo_rate_exceed_drop');
  }
  public set tcpPerConnOfoRateExceedDrop(value: number) {
    this._tcpPerConnOfoRateExceedDrop = value;
  }
  public resetTcpPerConnOfoRateExceedDrop() {
    this._tcpPerConnOfoRateExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPerConnOfoRateExceedDropInput() {
    return this._tcpPerConnOfoRateExceedDrop;
  }

  // tcp_per_conn_prate_exceed - computed: false, optional: true, required: false
  private _tcpPerConnPrateExceed?: number; 
  public get tcpPerConnPrateExceed() {
    return this.getNumberAttribute('tcp_per_conn_prate_exceed');
  }
  public set tcpPerConnPrateExceed(value: number) {
    this._tcpPerConnPrateExceed = value;
  }
  public resetTcpPerConnPrateExceed() {
    this._tcpPerConnPrateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPerConnPrateExceedInput() {
    return this._tcpPerConnPrateExceed;
  }

  // tcp_per_conn_prate_exceed_bl - computed: false, optional: true, required: false
  private _tcpPerConnPrateExceedBl?: number; 
  public get tcpPerConnPrateExceedBl() {
    return this.getNumberAttribute('tcp_per_conn_prate_exceed_bl');
  }
  public set tcpPerConnPrateExceedBl(value: number) {
    this._tcpPerConnPrateExceedBl = value;
  }
  public resetTcpPerConnPrateExceedBl() {
    this._tcpPerConnPrateExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPerConnPrateExceedBlInput() {
    return this._tcpPerConnPrateExceedBl;
  }

  // tcp_per_conn_rexmit_rate_exceed_bl - computed: false, optional: true, required: false
  private _tcpPerConnRexmitRateExceedBl?: number; 
  public get tcpPerConnRexmitRateExceedBl() {
    return this.getNumberAttribute('tcp_per_conn_rexmit_rate_exceed_bl');
  }
  public set tcpPerConnRexmitRateExceedBl(value: number) {
    this._tcpPerConnRexmitRateExceedBl = value;
  }
  public resetTcpPerConnRexmitRateExceedBl() {
    this._tcpPerConnRexmitRateExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPerConnRexmitRateExceedBlInput() {
    return this._tcpPerConnRexmitRateExceedBl;
  }

  // tcp_per_conn_rexmit_rate_exceed_drop - computed: false, optional: true, required: false
  private _tcpPerConnRexmitRateExceedDrop?: number; 
  public get tcpPerConnRexmitRateExceedDrop() {
    return this.getNumberAttribute('tcp_per_conn_rexmit_rate_exceed_drop');
  }
  public set tcpPerConnRexmitRateExceedDrop(value: number) {
    this._tcpPerConnRexmitRateExceedDrop = value;
  }
  public resetTcpPerConnRexmitRateExceedDrop() {
    this._tcpPerConnRexmitRateExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPerConnRexmitRateExceedDropInput() {
    return this._tcpPerConnRexmitRateExceedDrop;
  }

  // tcp_per_conn_zwindow_rate_exceed_bl - computed: false, optional: true, required: false
  private _tcpPerConnZwindowRateExceedBl?: number; 
  public get tcpPerConnZwindowRateExceedBl() {
    return this.getNumberAttribute('tcp_per_conn_zwindow_rate_exceed_bl');
  }
  public set tcpPerConnZwindowRateExceedBl(value: number) {
    this._tcpPerConnZwindowRateExceedBl = value;
  }
  public resetTcpPerConnZwindowRateExceedBl() {
    this._tcpPerConnZwindowRateExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPerConnZwindowRateExceedBlInput() {
    return this._tcpPerConnZwindowRateExceedBl;
  }

  // tcp_per_conn_zwindow_rate_exceed_drop - computed: false, optional: true, required: false
  private _tcpPerConnZwindowRateExceedDrop?: number; 
  public get tcpPerConnZwindowRateExceedDrop() {
    return this.getNumberAttribute('tcp_per_conn_zwindow_rate_exceed_drop');
  }
  public set tcpPerConnZwindowRateExceedDrop(value: number) {
    this._tcpPerConnZwindowRateExceedDrop = value;
  }
  public resetTcpPerConnZwindowRateExceedDrop() {
    this._tcpPerConnZwindowRateExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPerConnZwindowRateExceedDropInput() {
    return this._tcpPerConnZwindowRateExceedDrop;
  }

  // tcp_port_zero_drop - computed: false, optional: true, required: false
  private _tcpPortZeroDrop?: number; 
  public get tcpPortZeroDrop() {
    return this.getNumberAttribute('tcp_port_zero_drop');
  }
  public set tcpPortZeroDrop(value: number) {
    this._tcpPortZeroDrop = value;
  }
  public resetTcpPortZeroDrop() {
    this._tcpPortZeroDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortZeroDropInput() {
    return this._tcpPortZeroDrop;
  }

  // tcp_progression_violation_exceed - computed: false, optional: true, required: false
  private _tcpProgressionViolationExceed?: number; 
  public get tcpProgressionViolationExceed() {
    return this.getNumberAttribute('tcp_progression_violation_exceed');
  }
  public set tcpProgressionViolationExceed(value: number) {
    this._tcpProgressionViolationExceed = value;
  }
  public resetTcpProgressionViolationExceed() {
    this._tcpProgressionViolationExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProgressionViolationExceedInput() {
    return this._tcpProgressionViolationExceed;
  }

  // tcp_progression_violation_exceed_bl - computed: false, optional: true, required: false
  private _tcpProgressionViolationExceedBl?: number; 
  public get tcpProgressionViolationExceedBl() {
    return this.getNumberAttribute('tcp_progression_violation_exceed_bl');
  }
  public set tcpProgressionViolationExceedBl(value: number) {
    this._tcpProgressionViolationExceedBl = value;
  }
  public resetTcpProgressionViolationExceedBl() {
    this._tcpProgressionViolationExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProgressionViolationExceedBlInput() {
    return this._tcpProgressionViolationExceedBl;
  }

  // tcp_progression_violation_exceed_drop - computed: false, optional: true, required: false
  private _tcpProgressionViolationExceedDrop?: number; 
  public get tcpProgressionViolationExceedDrop() {
    return this.getNumberAttribute('tcp_progression_violation_exceed_drop');
  }
  public set tcpProgressionViolationExceedDrop(value: number) {
    this._tcpProgressionViolationExceedDrop = value;
  }
  public resetTcpProgressionViolationExceedDrop() {
    this._tcpProgressionViolationExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProgressionViolationExceedDropInput() {
    return this._tcpProgressionViolationExceedDrop;
  }

  // tcp_progression_violation_exceed_reset - computed: false, optional: true, required: false
  private _tcpProgressionViolationExceedReset?: number; 
  public get tcpProgressionViolationExceedReset() {
    return this.getNumberAttribute('tcp_progression_violation_exceed_reset');
  }
  public set tcpProgressionViolationExceedReset(value: number) {
    this._tcpProgressionViolationExceedReset = value;
  }
  public resetTcpProgressionViolationExceedReset() {
    this._tcpProgressionViolationExceedReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProgressionViolationExceedResetInput() {
    return this._tcpProgressionViolationExceedReset;
  }

  // tcp_reset_client - computed: false, optional: true, required: false
  private _tcpResetClient?: number; 
  public get tcpResetClient() {
    return this.getNumberAttribute('tcp_reset_client');
  }
  public set tcpResetClient(value: number) {
    this._tcpResetClient = value;
  }
  public resetTcpResetClient() {
    this._tcpResetClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpResetClientInput() {
    return this._tcpResetClient;
  }

  // tcp_reset_server - computed: false, optional: true, required: false
  private _tcpResetServer?: number; 
  public get tcpResetServer() {
    return this.getNumberAttribute('tcp_reset_server');
  }
  public set tcpResetServer(value: number) {
    this._tcpResetServer = value;
  }
  public resetTcpResetServer() {
    this._tcpResetServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpResetServerInput() {
    return this._tcpResetServer;
  }

  // tcp_retransmit - computed: false, optional: true, required: false
  private _tcpRetransmit?: number; 
  public get tcpRetransmit() {
    return this.getNumberAttribute('tcp_retransmit');
  }
  public set tcpRetransmit(value: number) {
    this._tcpRetransmit = value;
  }
  public resetTcpRetransmit() {
    this._tcpRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetransmitInput() {
    return this._tcpRetransmit;
  }

  // tcp_retransmit_bl - computed: false, optional: true, required: false
  private _tcpRetransmitBl?: number; 
  public get tcpRetransmitBl() {
    return this.getNumberAttribute('tcp_retransmit_bl');
  }
  public set tcpRetransmitBl(value: number) {
    this._tcpRetransmitBl = value;
  }
  public resetTcpRetransmitBl() {
    this._tcpRetransmitBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetransmitBlInput() {
    return this._tcpRetransmitBl;
  }

  // tcp_retransmit_drop - computed: false, optional: true, required: false
  private _tcpRetransmitDrop?: number; 
  public get tcpRetransmitDrop() {
    return this.getNumberAttribute('tcp_retransmit_drop');
  }
  public set tcpRetransmitDrop(value: number) {
    this._tcpRetransmitDrop = value;
  }
  public resetTcpRetransmitDrop() {
    this._tcpRetransmitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetransmitDropInput() {
    return this._tcpRetransmitDrop;
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

  // tcp_rst_rcvd - computed: false, optional: true, required: false
  private _tcpRstRcvd?: number; 
  public get tcpRstRcvd() {
    return this.getNumberAttribute('tcp_rst_rcvd');
  }
  public set tcpRstRcvd(value: number) {
    this._tcpRstRcvd = value;
  }
  public resetTcpRstRcvd() {
    this._tcpRstRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstRcvdInput() {
    return this._tcpRstRcvd;
  }

  // tcp_sess_create - computed: false, optional: true, required: false
  private _tcpSessCreate?: number; 
  public get tcpSessCreate() {
    return this.getNumberAttribute('tcp_sess_create');
  }
  public set tcpSessCreate(value: number) {
    this._tcpSessCreate = value;
  }
  public resetTcpSessCreate() {
    this._tcpSessCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessCreateInput() {
    return this._tcpSessCreate;
  }

  // tcp_small_window - computed: false, optional: true, required: false
  private _tcpSmallWindow?: number; 
  public get tcpSmallWindow() {
    return this.getNumberAttribute('tcp_small_window');
  }
  public set tcpSmallWindow(value: number) {
    this._tcpSmallWindow = value;
  }
  public resetTcpSmallWindow() {
    this._tcpSmallWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSmallWindowInput() {
    return this._tcpSmallWindow;
  }

  // tcp_small_window_bl - computed: false, optional: true, required: false
  private _tcpSmallWindowBl?: number; 
  public get tcpSmallWindowBl() {
    return this.getNumberAttribute('tcp_small_window_bl');
  }
  public set tcpSmallWindowBl(value: number) {
    this._tcpSmallWindowBl = value;
  }
  public resetTcpSmallWindowBl() {
    this._tcpSmallWindowBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSmallWindowBlInput() {
    return this._tcpSmallWindowBl;
  }

  // tcp_small_window_drop - computed: false, optional: true, required: false
  private _tcpSmallWindowDrop?: number; 
  public get tcpSmallWindowDrop() {
    return this.getNumberAttribute('tcp_small_window_drop');
  }
  public set tcpSmallWindowDrop(value: number) {
    this._tcpSmallWindowDrop = value;
  }
  public resetTcpSmallWindowDrop() {
    this._tcpSmallWindowDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSmallWindowDropInput() {
    return this._tcpSmallWindowDrop;
  }

  // tcp_src_drop - computed: false, optional: true, required: false
  private _tcpSrcDrop?: number; 
  public get tcpSrcDrop() {
    return this.getNumberAttribute('tcp_src_drop');
  }
  public set tcpSrcDrop(value: number) {
    this._tcpSrcDrop = value;
  }
  public resetTcpSrcDrop() {
    this._tcpSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSrcDropInput() {
    return this._tcpSrcDrop;
  }

  // tcp_src_dst_drop - computed: false, optional: true, required: false
  private _tcpSrcDstDrop?: number; 
  public get tcpSrcDstDrop() {
    return this.getNumberAttribute('tcp_src_dst_drop');
  }
  public set tcpSrcDstDrop(value: number) {
    this._tcpSrcDstDrop = value;
  }
  public resetTcpSrcDstDrop() {
    this._tcpSrcDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSrcDstDropInput() {
    return this._tcpSrcDstDrop;
  }

  // tcp_syn_ack_rcvd - computed: false, optional: true, required: false
  private _tcpSynAckRcvd?: number; 
  public get tcpSynAckRcvd() {
    return this.getNumberAttribute('tcp_syn_ack_rcvd');
  }
  public set tcpSynAckRcvd(value: number) {
    this._tcpSynAckRcvd = value;
  }
  public resetTcpSynAckRcvd() {
    this._tcpSynAckRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynAckRcvdInput() {
    return this._tcpSynAckRcvd;
  }

  // tcp_syn_rate - computed: false, optional: true, required: false
  private _tcpSynRate?: number; 
  public get tcpSynRate() {
    return this.getNumberAttribute('tcp_syn_rate');
  }
  public set tcpSynRate(value: number) {
    this._tcpSynRate = value;
  }
  public resetTcpSynRate() {
    this._tcpSynRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynRateInput() {
    return this._tcpSynRate;
  }

  // tcp_syn_rcvd - computed: false, optional: true, required: false
  private _tcpSynRcvd?: number; 
  public get tcpSynRcvd() {
    return this.getNumberAttribute('tcp_syn_rcvd');
  }
  public set tcpSynRcvd(value: number) {
    this._tcpSynRcvd = value;
  }
  public resetTcpSynRcvd() {
    this._tcpSynRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynRcvdInput() {
    return this._tcpSynRcvd;
  }

  // tcp_syn_tfo_rcvd - computed: false, optional: true, required: false
  private _tcpSynTfoRcvd?: number; 
  public get tcpSynTfoRcvd() {
    return this.getNumberAttribute('tcp_syn_tfo_rcvd');
  }
  public set tcpSynTfoRcvd(value: number) {
    this._tcpSynTfoRcvd = value;
  }
  public resetTcpSynTfoRcvd() {
    this._tcpSynTfoRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynTfoRcvdInput() {
    return this._tcpSynTfoRcvd;
  }

  // tcp_syncookie_check_fail - computed: false, optional: true, required: false
  private _tcpSyncookieCheckFail?: number; 
  public get tcpSyncookieCheckFail() {
    return this.getNumberAttribute('tcp_syncookie_check_fail');
  }
  public set tcpSyncookieCheckFail(value: number) {
    this._tcpSyncookieCheckFail = value;
  }
  public resetTcpSyncookieCheckFail() {
    this._tcpSyncookieCheckFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookieCheckFailInput() {
    return this._tcpSyncookieCheckFail;
  }

  // tcp_syncookie_fail_bl - computed: false, optional: true, required: false
  private _tcpSyncookieFailBl?: number; 
  public get tcpSyncookieFailBl() {
    return this.getNumberAttribute('tcp_syncookie_fail_bl');
  }
  public set tcpSyncookieFailBl(value: number) {
    this._tcpSyncookieFailBl = value;
  }
  public resetTcpSyncookieFailBl() {
    this._tcpSyncookieFailBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookieFailBlInput() {
    return this._tcpSyncookieFailBl;
  }

  // tcp_syncookie_hw_missing - computed: false, optional: true, required: false
  private _tcpSyncookieHwMissing?: number; 
  public get tcpSyncookieHwMissing() {
    return this.getNumberAttribute('tcp_syncookie_hw_missing');
  }
  public set tcpSyncookieHwMissing(value: number) {
    this._tcpSyncookieHwMissing = value;
  }
  public resetTcpSyncookieHwMissing() {
    this._tcpSyncookieHwMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookieHwMissingInput() {
    return this._tcpSyncookieHwMissing;
  }

  // tcp_syncookie_pass - computed: false, optional: true, required: false
  private _tcpSyncookiePass?: number; 
  public get tcpSyncookiePass() {
    return this.getNumberAttribute('tcp_syncookie_pass');
  }
  public set tcpSyncookiePass(value: number) {
    this._tcpSyncookiePass = value;
  }
  public resetTcpSyncookiePass() {
    this._tcpSyncookiePass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookiePassInput() {
    return this._tcpSyncookiePass;
  }

  // tcp_syncookie_sent - computed: false, optional: true, required: false
  private _tcpSyncookieSent?: number; 
  public get tcpSyncookieSent() {
    return this.getNumberAttribute('tcp_syncookie_sent');
  }
  public set tcpSyncookieSent(value: number) {
    this._tcpSyncookieSent = value;
  }
  public resetTcpSyncookieSent() {
    this._tcpSyncookieSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookieSentInput() {
    return this._tcpSyncookieSent;
  }

  // tcp_syncookie_sent_fail - computed: false, optional: true, required: false
  private _tcpSyncookieSentFail?: number; 
  public get tcpSyncookieSentFail() {
    return this.getNumberAttribute('tcp_syncookie_sent_fail');
  }
  public set tcpSyncookieSentFail(value: number) {
    this._tcpSyncookieSentFail = value;
  }
  public resetTcpSyncookieSentFail() {
    this._tcpSyncookieSentFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookieSentFailInput() {
    return this._tcpSyncookieSentFail;
  }

  // tcp_total_bytes_drop - computed: false, optional: true, required: false
  private _tcpTotalBytesDrop?: number; 
  public get tcpTotalBytesDrop() {
    return this.getNumberAttribute('tcp_total_bytes_drop');
  }
  public set tcpTotalBytesDrop(value: number) {
    this._tcpTotalBytesDrop = value;
  }
  public resetTcpTotalBytesDrop() {
    this._tcpTotalBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTotalBytesDropInput() {
    return this._tcpTotalBytesDrop;
  }

  // tcp_total_bytes_rcv - computed: false, optional: true, required: false
  private _tcpTotalBytesRcv?: number; 
  public get tcpTotalBytesRcv() {
    return this.getNumberAttribute('tcp_total_bytes_rcv');
  }
  public set tcpTotalBytesRcv(value: number) {
    this._tcpTotalBytesRcv = value;
  }
  public resetTcpTotalBytesRcv() {
    this._tcpTotalBytesRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTotalBytesRcvInput() {
    return this._tcpTotalBytesRcv;
  }

  // tcp_total_drop - computed: false, optional: true, required: false
  private _tcpTotalDrop?: number; 
  public get tcpTotalDrop() {
    return this.getNumberAttribute('tcp_total_drop');
  }
  public set tcpTotalDrop(value: number) {
    this._tcpTotalDrop = value;
  }
  public resetTcpTotalDrop() {
    this._tcpTotalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTotalDropInput() {
    return this._tcpTotalDrop;
  }

  // tcp_unauth_rst_drop - computed: false, optional: true, required: false
  private _tcpUnauthRstDrop?: number; 
  public get tcpUnauthRstDrop() {
    return this.getNumberAttribute('tcp_unauth_rst_drop');
  }
  public set tcpUnauthRstDrop(value: number) {
    this._tcpUnauthRstDrop = value;
  }
  public resetTcpUnauthRstDrop() {
    this._tcpUnauthRstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUnauthRstDropInput() {
    return this._tcpUnauthRstDrop;
  }

  // tcp_zero_window - computed: false, optional: true, required: false
  private _tcpZeroWindow?: number; 
  public get tcpZeroWindow() {
    return this.getNumberAttribute('tcp_zero_window');
  }
  public set tcpZeroWindow(value: number) {
    this._tcpZeroWindow = value;
  }
  public resetTcpZeroWindow() {
    this._tcpZeroWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpZeroWindowInput() {
    return this._tcpZeroWindow;
  }

  // tcp_zero_window_bl - computed: false, optional: true, required: false
  private _tcpZeroWindowBl?: number; 
  public get tcpZeroWindowBl() {
    return this.getNumberAttribute('tcp_zero_window_bl');
  }
  public set tcpZeroWindowBl(value: number) {
    this._tcpZeroWindowBl = value;
  }
  public resetTcpZeroWindowBl() {
    this._tcpZeroWindowBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpZeroWindowBlInput() {
    return this._tcpZeroWindowBl;
  }

  // tcp_zero_window_drop - computed: false, optional: true, required: false
  private _tcpZeroWindowDrop?: number; 
  public get tcpZeroWindowDrop() {
    return this.getNumberAttribute('tcp_zero_window_drop');
  }
  public set tcpZeroWindowDrop(value: number) {
    this._tcpZeroWindowDrop = value;
  }
  public resetTcpZeroWindowDrop() {
    this._tcpZeroWindowDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpZeroWindowDropInput() {
    return this._tcpZeroWindowDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats thunder_ddos_l4_tcp_stats}
*/
export class DataThunderDdosL4TcpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_l4_tcp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosL4TcpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosL4TcpStats to import
  * @param importFromId The id of the existing DataThunderDdosL4TcpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosL4TcpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_l4_tcp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_l4_tcp_stats thunder_ddos_l4_tcp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosL4TcpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosL4TcpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_l4_tcp_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
  private _stats = new DataThunderDdosL4TcpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosL4TcpStatsStats) {
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
      stats: dataThunderDdosL4TcpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosL4TcpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosL4TcpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
