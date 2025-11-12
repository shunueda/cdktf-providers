// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderIpv6InIpv4FragStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#id DataThunderIpv6InIpv4FragStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#stats DataThunderIpv6InIpv4FragStats#stats}
  */
  readonly stats?: DataThunderIpv6InIpv4FragStatsStats;
}
export interface DataThunderIpv6InIpv4FragStatsStats {
  /**
  * Bad IP Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#bad_ip_len DataThunderIpv6InIpv4FragStats#bad_ip_len}
  */
  readonly badIpLen?: number;
  /**
  * High CPU Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#cpu_threshold_drop DataThunderIpv6InIpv4FragStats#cpu_threshold_drop}
  */
  readonly cpuThresholdDrop?: number;
  /**
  * Duplicate First Fragment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#duplicate_first_frag DataThunderIpv6InIpv4FragStats#duplicate_first_frag}
  */
  readonly duplicateFirstFrag?: number;
  /**
  * Duplicate Last Fragment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#duplicate_last_frag DataThunderIpv6InIpv4FragStats#duplicate_last_frag}
  */
  readonly duplicateLastFrag?: number;
  /**
  * Fragment Processing Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#error_drop DataThunderIpv6InIpv4FragStats#error_drop}
  */
  readonly errorDrop?: number;
  /**
  * Payload Length Out of Bounds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#exceeded_len DataThunderIpv6InIpv4FragStats#exceeded_len}
  */
  readonly exceededLen?: number;
  /**
  * Fragmentation Fast Aging Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#fast_aging_set DataThunderIpv6InIpv4FragStats#fast_aging_set}
  */
  readonly fastAgingSet?: number;
  /**
  * Fragmentation Fast Aging Unset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#fast_aging_unset DataThunderIpv6InIpv4FragStats#fast_aging_unset}
  */
  readonly fastAgingUnset?: number;
  /**
  * First GTP Fragment Too Small Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#first_gtp_packet_too_small DataThunderIpv6InIpv4FragStats#first_gtp_packet_too_small}
  */
  readonly firstGtpPacketTooSmall?: number;
  /**
  * First L4 Fragment Too Small Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#first_l4_too_small DataThunderIpv6InIpv4FragStats#first_l4_too_small}
  */
  readonly firstL4TooSmall?: number;
  /**
  * First TCP Fragment Too Small Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#first_tcp_too_small DataThunderIpv6InIpv4FragStats#first_tcp_too_small}
  */
  readonly firstTcpTooSmall?: number;
  /**
  * Fragment Queue Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#fragment_queue_failure DataThunderIpv6InIpv4FragStats#fragment_queue_failure}
  */
  readonly fragmentQueueFailure?: number;
  /**
  * Fragment Queue Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#fragment_queue_success DataThunderIpv6InIpv4FragStats#fragment_queue_success}
  */
  readonly fragmentQueueSuccess?: number;
  /**
  * High CPU Threshold Reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#high_cpu_threshold DataThunderIpv6InIpv4FragStats#high_cpu_threshold}
  */
  readonly highCpuThreshold?: number;
  /**
  * ICMP Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#icmp_dropped DataThunderIpv6InIpv4FragStats#icmp_dropped}
  */
  readonly icmpDropped?: number;
  /**
  * ICMP Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#icmp_rcv DataThunderIpv6InIpv4FragStats#icmp_rcv}
  */
  readonly icmpRcv?: number;
  /**
  * ICMPv6 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#icmpv6_dropped DataThunderIpv6InIpv4FragStats#icmpv6_dropped}
  */
  readonly icmpv6Dropped?: number;
  /**
  * ICMPv6 Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#icmpv6_rcv DataThunderIpv6InIpv4FragStats#icmpv6_rcv}
  */
  readonly icmpv6Rcv?: number;
  /**
  * DDoS Protection Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#ipd_entry_drop DataThunderIpv6InIpv4FragStats#ipd_entry_drop}
  */
  readonly ipdEntryDrop?: number;
  /**
  * IP-in-IP Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#ipip_dropped DataThunderIpv6InIpv4FragStats#ipip_dropped}
  */
  readonly ipipDropped?: number;
  /**
  * IP-in-IP Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#ipip_rcv DataThunderIpv6InIpv4FragStats#ipip_rcv}
  */
  readonly ipipRcv?: number;
  /**
  * IPv6-in-IP Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#ipv6ip_dropped DataThunderIpv6InIpv4FragStats#ipv6ip_dropped}
  */
  readonly ipv6IpDropped?: number;
  /**
  * IPv6-in-IP Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#ipv6ip_rcv DataThunderIpv6InIpv4FragStats#ipv6ip_rcv}
  */
  readonly ipv6IpRcv?: number;
  /**
  * Low CPU Threshold Reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#low_cpu_threshold DataThunderIpv6InIpv4FragStats#low_cpu_threshold}
  */
  readonly lowCpuThreshold?: number;
  /**
  * Fragment Max Data Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#max_len_exceeded DataThunderIpv6InIpv4FragStats#max_len_exceeded}
  */
  readonly maxLenExceeded?: number;
  /**
  * Too Many Packets Per Reassembly Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#max_packets_exceeded DataThunderIpv6InIpv4FragStats#max_packets_exceeded}
  */
  readonly maxPacketsExceeded?: number;
  /**
  * Out of Session Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#no_session_memory DataThunderIpv6InIpv4FragStats#no_session_memory}
  */
  readonly noSessionMemory?: number;
  /**
  * Other Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#other_dropped DataThunderIpv6InIpv4FragStats#other_dropped}
  */
  readonly otherDropped?: number;
  /**
  * Other Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#other_rcv DataThunderIpv6InIpv4FragStats#other_rcv}
  */
  readonly otherRcv?: number;
  /**
  * Overlapping Fragment Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#overlap_error DataThunderIpv6InIpv4FragStats#overlap_error}
  */
  readonly overlapError?: number;
  /**
  * MTU Exceeded Policy Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#policy_drop DataThunderIpv6InIpv4FragStats#policy_drop}
  */
  readonly policyDrop?: number;
  /**
  * Fragment Reassembly Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#reassembly_failure DataThunderIpv6InIpv4FragStats#reassembly_failure}
  */
  readonly reassemblyFailure?: number;
  /**
  * Fragment Reassembly Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#reassembly_success DataThunderIpv6InIpv4FragStats#reassembly_success}
  */
  readonly reassemblySuccess?: number;
  /**
  * SCTP Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#sctp_dropped DataThunderIpv6InIpv4FragStats#sctp_dropped}
  */
  readonly sctpDropped?: number;
  /**
  * SCTP Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#sctp_rcv DataThunderIpv6InIpv4FragStats#sctp_rcv}
  */
  readonly sctpRcv?: number;
  /**
  * Session Expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#session_expired DataThunderIpv6InIpv4FragStats#session_expired}
  */
  readonly sessionExpired?: number;
  /**
  * Session Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#session_inserted DataThunderIpv6InIpv4FragStats#session_inserted}
  */
  readonly sessionInserted?: number;
  /**
  * Session Max Packets Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#session_packets_exceeded DataThunderIpv6InIpv4FragStats#session_packets_exceeded}
  */
  readonly sessionPacketsExceeded?: number;
  /**
  * TCP Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#tcp_dropped DataThunderIpv6InIpv4FragStats#tcp_dropped}
  */
  readonly tcpDropped?: number;
  /**
  * TCP Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#tcp_rcv DataThunderIpv6InIpv4FragStats#tcp_rcv}
  */
  readonly tcpRcv?: number;
  /**
  * Fragment Too Small Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#too_small DataThunderIpv6InIpv4FragStats#too_small}
  */
  readonly tooSmall?: number;
  /**
  * Total Queued Fragments Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#total_fragments_exceeded DataThunderIpv6InIpv4FragStats#total_fragments_exceeded}
  */
  readonly totalFragmentsExceeded?: number;
  /**
  * Total Sessions Exceeded Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#total_sessions_exceeded DataThunderIpv6InIpv4FragStats#total_sessions_exceeded}
  */
  readonly totalSessionsExceeded?: number;
  /**
  * UDP Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#udp_dropped DataThunderIpv6InIpv4FragStats#udp_dropped}
  */
  readonly udpDropped?: number;
  /**
  * UDP Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#udp_rcv DataThunderIpv6InIpv4FragStats#udp_rcv}
  */
  readonly udpRcv?: number;
  /**
  * Payload Length Unaligned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#unaligned_len DataThunderIpv6InIpv4FragStats#unaligned_len}
  */
  readonly unalignedLen?: number;
}

export function dataThunderIpv6InIpv4FragStatsStatsToTerraform(struct?: DataThunderIpv6InIpv4FragStatsStatsOutputReference | DataThunderIpv6InIpv4FragStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_ip_len: cdktf.numberToTerraform(struct!.badIpLen),
    cpu_threshold_drop: cdktf.numberToTerraform(struct!.cpuThresholdDrop),
    duplicate_first_frag: cdktf.numberToTerraform(struct!.duplicateFirstFrag),
    duplicate_last_frag: cdktf.numberToTerraform(struct!.duplicateLastFrag),
    error_drop: cdktf.numberToTerraform(struct!.errorDrop),
    exceeded_len: cdktf.numberToTerraform(struct!.exceededLen),
    fast_aging_set: cdktf.numberToTerraform(struct!.fastAgingSet),
    fast_aging_unset: cdktf.numberToTerraform(struct!.fastAgingUnset),
    first_gtp_packet_too_small: cdktf.numberToTerraform(struct!.firstGtpPacketTooSmall),
    first_l4_too_small: cdktf.numberToTerraform(struct!.firstL4TooSmall),
    first_tcp_too_small: cdktf.numberToTerraform(struct!.firstTcpTooSmall),
    fragment_queue_failure: cdktf.numberToTerraform(struct!.fragmentQueueFailure),
    fragment_queue_success: cdktf.numberToTerraform(struct!.fragmentQueueSuccess),
    high_cpu_threshold: cdktf.numberToTerraform(struct!.highCpuThreshold),
    icmp_dropped: cdktf.numberToTerraform(struct!.icmpDropped),
    icmp_rcv: cdktf.numberToTerraform(struct!.icmpRcv),
    icmpv6_dropped: cdktf.numberToTerraform(struct!.icmpv6Dropped),
    icmpv6_rcv: cdktf.numberToTerraform(struct!.icmpv6Rcv),
    ipd_entry_drop: cdktf.numberToTerraform(struct!.ipdEntryDrop),
    ipip_dropped: cdktf.numberToTerraform(struct!.ipipDropped),
    ipip_rcv: cdktf.numberToTerraform(struct!.ipipRcv),
    ipv6ip_dropped: cdktf.numberToTerraform(struct!.ipv6IpDropped),
    ipv6ip_rcv: cdktf.numberToTerraform(struct!.ipv6IpRcv),
    low_cpu_threshold: cdktf.numberToTerraform(struct!.lowCpuThreshold),
    max_len_exceeded: cdktf.numberToTerraform(struct!.maxLenExceeded),
    max_packets_exceeded: cdktf.numberToTerraform(struct!.maxPacketsExceeded),
    no_session_memory: cdktf.numberToTerraform(struct!.noSessionMemory),
    other_dropped: cdktf.numberToTerraform(struct!.otherDropped),
    other_rcv: cdktf.numberToTerraform(struct!.otherRcv),
    overlap_error: cdktf.numberToTerraform(struct!.overlapError),
    policy_drop: cdktf.numberToTerraform(struct!.policyDrop),
    reassembly_failure: cdktf.numberToTerraform(struct!.reassemblyFailure),
    reassembly_success: cdktf.numberToTerraform(struct!.reassemblySuccess),
    sctp_dropped: cdktf.numberToTerraform(struct!.sctpDropped),
    sctp_rcv: cdktf.numberToTerraform(struct!.sctpRcv),
    session_expired: cdktf.numberToTerraform(struct!.sessionExpired),
    session_inserted: cdktf.numberToTerraform(struct!.sessionInserted),
    session_packets_exceeded: cdktf.numberToTerraform(struct!.sessionPacketsExceeded),
    tcp_dropped: cdktf.numberToTerraform(struct!.tcpDropped),
    tcp_rcv: cdktf.numberToTerraform(struct!.tcpRcv),
    too_small: cdktf.numberToTerraform(struct!.tooSmall),
    total_fragments_exceeded: cdktf.numberToTerraform(struct!.totalFragmentsExceeded),
    total_sessions_exceeded: cdktf.numberToTerraform(struct!.totalSessionsExceeded),
    udp_dropped: cdktf.numberToTerraform(struct!.udpDropped),
    udp_rcv: cdktf.numberToTerraform(struct!.udpRcv),
    unaligned_len: cdktf.numberToTerraform(struct!.unalignedLen),
  }
}


export function dataThunderIpv6InIpv4FragStatsStatsToHclTerraform(struct?: DataThunderIpv6InIpv4FragStatsStatsOutputReference | DataThunderIpv6InIpv4FragStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_ip_len: {
      value: cdktf.numberToHclTerraform(struct!.badIpLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_threshold_drop: {
      value: cdktf.numberToHclTerraform(struct!.cpuThresholdDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duplicate_first_frag: {
      value: cdktf.numberToHclTerraform(struct!.duplicateFirstFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duplicate_last_frag: {
      value: cdktf.numberToHclTerraform(struct!.duplicateLastFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_drop: {
      value: cdktf.numberToHclTerraform(struct!.errorDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceeded_len: {
      value: cdktf.numberToHclTerraform(struct!.exceededLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_aging_set: {
      value: cdktf.numberToHclTerraform(struct!.fastAgingSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_aging_unset: {
      value: cdktf.numberToHclTerraform(struct!.fastAgingUnset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first_gtp_packet_too_small: {
      value: cdktf.numberToHclTerraform(struct!.firstGtpPacketTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first_l4_too_small: {
      value: cdktf.numberToHclTerraform(struct!.firstL4TooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first_tcp_too_small: {
      value: cdktf.numberToHclTerraform(struct!.firstTcpTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragment_queue_failure: {
      value: cdktf.numberToHclTerraform(struct!.fragmentQueueFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragment_queue_success: {
      value: cdktf.numberToHclTerraform(struct!.fragmentQueueSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high_cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.highCpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_dropped: {
      value: cdktf.numberToHclTerraform(struct!.icmpDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rcv: {
      value: cdktf.numberToHclTerraform(struct!.icmpRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_dropped: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6Dropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_rcv: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6Rcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipd_entry_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipdEntryDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipip_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ipipDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipip_rcv: {
      value: cdktf.numberToHclTerraform(struct!.ipipRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6ip_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ipv6IpDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6ip_rcv: {
      value: cdktf.numberToHclTerraform(struct!.ipv6IpRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low_cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.lowCpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_len_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.maxLenExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_packets_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.maxPacketsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_session_memory: {
      value: cdktf.numberToHclTerraform(struct!.noSessionMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_dropped: {
      value: cdktf.numberToHclTerraform(struct!.otherDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_rcv: {
      value: cdktf.numberToHclTerraform(struct!.otherRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overlap_error: {
      value: cdktf.numberToHclTerraform(struct!.overlapError),
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
    reassembly_failure: {
      value: cdktf.numberToHclTerraform(struct!.reassemblyFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reassembly_success: {
      value: cdktf.numberToHclTerraform(struct!.reassemblySuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_dropped: {
      value: cdktf.numberToHclTerraform(struct!.sctpDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_rcv: {
      value: cdktf.numberToHclTerraform(struct!.sctpRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_expired: {
      value: cdktf.numberToHclTerraform(struct!.sessionExpired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_inserted: {
      value: cdktf.numberToHclTerraform(struct!.sessionInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_packets_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.sessionPacketsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_dropped: {
      value: cdktf.numberToHclTerraform(struct!.tcpDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rcv: {
      value: cdktf.numberToHclTerraform(struct!.tcpRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    too_small: {
      value: cdktf.numberToHclTerraform(struct!.tooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fragments_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.totalFragmentsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_sessions_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.totalSessionsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_dropped: {
      value: cdktf.numberToHclTerraform(struct!.udpDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_rcv: {
      value: cdktf.numberToHclTerraform(struct!.udpRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unaligned_len: {
      value: cdktf.numberToHclTerraform(struct!.unalignedLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpv6InIpv4FragStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderIpv6InIpv4FragStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badIpLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpLen = this._badIpLen;
    }
    if (this._cpuThresholdDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuThresholdDrop = this._cpuThresholdDrop;
    }
    if (this._duplicateFirstFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicateFirstFrag = this._duplicateFirstFrag;
    }
    if (this._duplicateLastFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplicateLastFrag = this._duplicateLastFrag;
    }
    if (this._errorDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorDrop = this._errorDrop;
    }
    if (this._exceededLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceededLen = this._exceededLen;
    }
    if (this._fastAgingSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastAgingSet = this._fastAgingSet;
    }
    if (this._fastAgingUnset !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastAgingUnset = this._fastAgingUnset;
    }
    if (this._firstGtpPacketTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstGtpPacketTooSmall = this._firstGtpPacketTooSmall;
    }
    if (this._firstL4TooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstL4TooSmall = this._firstL4TooSmall;
    }
    if (this._firstTcpTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstTcpTooSmall = this._firstTcpTooSmall;
    }
    if (this._fragmentQueueFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentQueueFailure = this._fragmentQueueFailure;
    }
    if (this._fragmentQueueSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentQueueSuccess = this._fragmentQueueSuccess;
    }
    if (this._highCpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.highCpuThreshold = this._highCpuThreshold;
    }
    if (this._icmpDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpDropped = this._icmpDropped;
    }
    if (this._icmpRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRcv = this._icmpRcv;
    }
    if (this._icmpv6Dropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6Dropped = this._icmpv6Dropped;
    }
    if (this._icmpv6Rcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6Rcv = this._icmpv6Rcv;
    }
    if (this._ipdEntryDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipdEntryDrop = this._ipdEntryDrop;
    }
    if (this._ipipDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipDropped = this._ipipDropped;
    }
    if (this._ipipRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipRcv = this._ipipRcv;
    }
    if (this._ipv6IpDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6IpDropped = this._ipv6IpDropped;
    }
    if (this._ipv6IpRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6IpRcv = this._ipv6IpRcv;
    }
    if (this._lowCpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowCpuThreshold = this._lowCpuThreshold;
    }
    if (this._maxLenExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLenExceeded = this._maxLenExceeded;
    }
    if (this._maxPacketsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPacketsExceeded = this._maxPacketsExceeded;
    }
    if (this._noSessionMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSessionMemory = this._noSessionMemory;
    }
    if (this._otherDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherDropped = this._otherDropped;
    }
    if (this._otherRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherRcv = this._otherRcv;
    }
    if (this._overlapError !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlapError = this._overlapError;
    }
    if (this._policyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDrop = this._policyDrop;
    }
    if (this._reassemblyFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.reassemblyFailure = this._reassemblyFailure;
    }
    if (this._reassemblySuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.reassemblySuccess = this._reassemblySuccess;
    }
    if (this._sctpDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpDropped = this._sctpDropped;
    }
    if (this._sctpRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpRcv = this._sctpRcv;
    }
    if (this._sessionExpired !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionExpired = this._sessionExpired;
    }
    if (this._sessionInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionInserted = this._sessionInserted;
    }
    if (this._sessionPacketsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPacketsExceeded = this._sessionPacketsExceeded;
    }
    if (this._tcpDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpDropped = this._tcpDropped;
    }
    if (this._tcpRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRcv = this._tcpRcv;
    }
    if (this._tooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooSmall = this._tooSmall;
    }
    if (this._totalFragmentsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFragmentsExceeded = this._totalFragmentsExceeded;
    }
    if (this._totalSessionsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSessionsExceeded = this._totalSessionsExceeded;
    }
    if (this._udpDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpDropped = this._udpDropped;
    }
    if (this._udpRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRcv = this._udpRcv;
    }
    if (this._unalignedLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.unalignedLen = this._unalignedLen;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpv6InIpv4FragStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badIpLen = undefined;
      this._cpuThresholdDrop = undefined;
      this._duplicateFirstFrag = undefined;
      this._duplicateLastFrag = undefined;
      this._errorDrop = undefined;
      this._exceededLen = undefined;
      this._fastAgingSet = undefined;
      this._fastAgingUnset = undefined;
      this._firstGtpPacketTooSmall = undefined;
      this._firstL4TooSmall = undefined;
      this._firstTcpTooSmall = undefined;
      this._fragmentQueueFailure = undefined;
      this._fragmentQueueSuccess = undefined;
      this._highCpuThreshold = undefined;
      this._icmpDropped = undefined;
      this._icmpRcv = undefined;
      this._icmpv6Dropped = undefined;
      this._icmpv6Rcv = undefined;
      this._ipdEntryDrop = undefined;
      this._ipipDropped = undefined;
      this._ipipRcv = undefined;
      this._ipv6IpDropped = undefined;
      this._ipv6IpRcv = undefined;
      this._lowCpuThreshold = undefined;
      this._maxLenExceeded = undefined;
      this._maxPacketsExceeded = undefined;
      this._noSessionMemory = undefined;
      this._otherDropped = undefined;
      this._otherRcv = undefined;
      this._overlapError = undefined;
      this._policyDrop = undefined;
      this._reassemblyFailure = undefined;
      this._reassemblySuccess = undefined;
      this._sctpDropped = undefined;
      this._sctpRcv = undefined;
      this._sessionExpired = undefined;
      this._sessionInserted = undefined;
      this._sessionPacketsExceeded = undefined;
      this._tcpDropped = undefined;
      this._tcpRcv = undefined;
      this._tooSmall = undefined;
      this._totalFragmentsExceeded = undefined;
      this._totalSessionsExceeded = undefined;
      this._udpDropped = undefined;
      this._udpRcv = undefined;
      this._unalignedLen = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badIpLen = value.badIpLen;
      this._cpuThresholdDrop = value.cpuThresholdDrop;
      this._duplicateFirstFrag = value.duplicateFirstFrag;
      this._duplicateLastFrag = value.duplicateLastFrag;
      this._errorDrop = value.errorDrop;
      this._exceededLen = value.exceededLen;
      this._fastAgingSet = value.fastAgingSet;
      this._fastAgingUnset = value.fastAgingUnset;
      this._firstGtpPacketTooSmall = value.firstGtpPacketTooSmall;
      this._firstL4TooSmall = value.firstL4TooSmall;
      this._firstTcpTooSmall = value.firstTcpTooSmall;
      this._fragmentQueueFailure = value.fragmentQueueFailure;
      this._fragmentQueueSuccess = value.fragmentQueueSuccess;
      this._highCpuThreshold = value.highCpuThreshold;
      this._icmpDropped = value.icmpDropped;
      this._icmpRcv = value.icmpRcv;
      this._icmpv6Dropped = value.icmpv6Dropped;
      this._icmpv6Rcv = value.icmpv6Rcv;
      this._ipdEntryDrop = value.ipdEntryDrop;
      this._ipipDropped = value.ipipDropped;
      this._ipipRcv = value.ipipRcv;
      this._ipv6IpDropped = value.ipv6IpDropped;
      this._ipv6IpRcv = value.ipv6IpRcv;
      this._lowCpuThreshold = value.lowCpuThreshold;
      this._maxLenExceeded = value.maxLenExceeded;
      this._maxPacketsExceeded = value.maxPacketsExceeded;
      this._noSessionMemory = value.noSessionMemory;
      this._otherDropped = value.otherDropped;
      this._otherRcv = value.otherRcv;
      this._overlapError = value.overlapError;
      this._policyDrop = value.policyDrop;
      this._reassemblyFailure = value.reassemblyFailure;
      this._reassemblySuccess = value.reassemblySuccess;
      this._sctpDropped = value.sctpDropped;
      this._sctpRcv = value.sctpRcv;
      this._sessionExpired = value.sessionExpired;
      this._sessionInserted = value.sessionInserted;
      this._sessionPacketsExceeded = value.sessionPacketsExceeded;
      this._tcpDropped = value.tcpDropped;
      this._tcpRcv = value.tcpRcv;
      this._tooSmall = value.tooSmall;
      this._totalFragmentsExceeded = value.totalFragmentsExceeded;
      this._totalSessionsExceeded = value.totalSessionsExceeded;
      this._udpDropped = value.udpDropped;
      this._udpRcv = value.udpRcv;
      this._unalignedLen = value.unalignedLen;
    }
  }

  // bad_ip_len - computed: false, optional: true, required: false
  private _badIpLen?: number; 
  public get badIpLen() {
    return this.getNumberAttribute('bad_ip_len');
  }
  public set badIpLen(value: number) {
    this._badIpLen = value;
  }
  public resetBadIpLen() {
    this._badIpLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpLenInput() {
    return this._badIpLen;
  }

  // cpu_threshold_drop - computed: false, optional: true, required: false
  private _cpuThresholdDrop?: number; 
  public get cpuThresholdDrop() {
    return this.getNumberAttribute('cpu_threshold_drop');
  }
  public set cpuThresholdDrop(value: number) {
    this._cpuThresholdDrop = value;
  }
  public resetCpuThresholdDrop() {
    this._cpuThresholdDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThresholdDropInput() {
    return this._cpuThresholdDrop;
  }

  // duplicate_first_frag - computed: false, optional: true, required: false
  private _duplicateFirstFrag?: number; 
  public get duplicateFirstFrag() {
    return this.getNumberAttribute('duplicate_first_frag');
  }
  public set duplicateFirstFrag(value: number) {
    this._duplicateFirstFrag = value;
  }
  public resetDuplicateFirstFrag() {
    this._duplicateFirstFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateFirstFragInput() {
    return this._duplicateFirstFrag;
  }

  // duplicate_last_frag - computed: false, optional: true, required: false
  private _duplicateLastFrag?: number; 
  public get duplicateLastFrag() {
    return this.getNumberAttribute('duplicate_last_frag');
  }
  public set duplicateLastFrag(value: number) {
    this._duplicateLastFrag = value;
  }
  public resetDuplicateLastFrag() {
    this._duplicateLastFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateLastFragInput() {
    return this._duplicateLastFrag;
  }

  // error_drop - computed: false, optional: true, required: false
  private _errorDrop?: number; 
  public get errorDrop() {
    return this.getNumberAttribute('error_drop');
  }
  public set errorDrop(value: number) {
    this._errorDrop = value;
  }
  public resetErrorDrop() {
    this._errorDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDropInput() {
    return this._errorDrop;
  }

  // exceeded_len - computed: false, optional: true, required: false
  private _exceededLen?: number; 
  public get exceededLen() {
    return this.getNumberAttribute('exceeded_len');
  }
  public set exceededLen(value: number) {
    this._exceededLen = value;
  }
  public resetExceededLen() {
    this._exceededLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceededLenInput() {
    return this._exceededLen;
  }

  // fast_aging_set - computed: false, optional: true, required: false
  private _fastAgingSet?: number; 
  public get fastAgingSet() {
    return this.getNumberAttribute('fast_aging_set');
  }
  public set fastAgingSet(value: number) {
    this._fastAgingSet = value;
  }
  public resetFastAgingSet() {
    this._fastAgingSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastAgingSetInput() {
    return this._fastAgingSet;
  }

  // fast_aging_unset - computed: false, optional: true, required: false
  private _fastAgingUnset?: number; 
  public get fastAgingUnset() {
    return this.getNumberAttribute('fast_aging_unset');
  }
  public set fastAgingUnset(value: number) {
    this._fastAgingUnset = value;
  }
  public resetFastAgingUnset() {
    this._fastAgingUnset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastAgingUnsetInput() {
    return this._fastAgingUnset;
  }

  // first_gtp_packet_too_small - computed: false, optional: true, required: false
  private _firstGtpPacketTooSmall?: number; 
  public get firstGtpPacketTooSmall() {
    return this.getNumberAttribute('first_gtp_packet_too_small');
  }
  public set firstGtpPacketTooSmall(value: number) {
    this._firstGtpPacketTooSmall = value;
  }
  public resetFirstGtpPacketTooSmall() {
    this._firstGtpPacketTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstGtpPacketTooSmallInput() {
    return this._firstGtpPacketTooSmall;
  }

  // first_l4_too_small - computed: false, optional: true, required: false
  private _firstL4TooSmall?: number; 
  public get firstL4TooSmall() {
    return this.getNumberAttribute('first_l4_too_small');
  }
  public set firstL4TooSmall(value: number) {
    this._firstL4TooSmall = value;
  }
  public resetFirstL4TooSmall() {
    this._firstL4TooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstL4TooSmallInput() {
    return this._firstL4TooSmall;
  }

  // first_tcp_too_small - computed: false, optional: true, required: false
  private _firstTcpTooSmall?: number; 
  public get firstTcpTooSmall() {
    return this.getNumberAttribute('first_tcp_too_small');
  }
  public set firstTcpTooSmall(value: number) {
    this._firstTcpTooSmall = value;
  }
  public resetFirstTcpTooSmall() {
    this._firstTcpTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstTcpTooSmallInput() {
    return this._firstTcpTooSmall;
  }

  // fragment_queue_failure - computed: false, optional: true, required: false
  private _fragmentQueueFailure?: number; 
  public get fragmentQueueFailure() {
    return this.getNumberAttribute('fragment_queue_failure');
  }
  public set fragmentQueueFailure(value: number) {
    this._fragmentQueueFailure = value;
  }
  public resetFragmentQueueFailure() {
    this._fragmentQueueFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentQueueFailureInput() {
    return this._fragmentQueueFailure;
  }

  // fragment_queue_success - computed: false, optional: true, required: false
  private _fragmentQueueSuccess?: number; 
  public get fragmentQueueSuccess() {
    return this.getNumberAttribute('fragment_queue_success');
  }
  public set fragmentQueueSuccess(value: number) {
    this._fragmentQueueSuccess = value;
  }
  public resetFragmentQueueSuccess() {
    this._fragmentQueueSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentQueueSuccessInput() {
    return this._fragmentQueueSuccess;
  }

  // high_cpu_threshold - computed: false, optional: true, required: false
  private _highCpuThreshold?: number; 
  public get highCpuThreshold() {
    return this.getNumberAttribute('high_cpu_threshold');
  }
  public set highCpuThreshold(value: number) {
    this._highCpuThreshold = value;
  }
  public resetHighCpuThreshold() {
    this._highCpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highCpuThresholdInput() {
    return this._highCpuThreshold;
  }

  // icmp_dropped - computed: false, optional: true, required: false
  private _icmpDropped?: number; 
  public get icmpDropped() {
    return this.getNumberAttribute('icmp_dropped');
  }
  public set icmpDropped(value: number) {
    this._icmpDropped = value;
  }
  public resetIcmpDropped() {
    this._icmpDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpDroppedInput() {
    return this._icmpDropped;
  }

  // icmp_rcv - computed: false, optional: true, required: false
  private _icmpRcv?: number; 
  public get icmpRcv() {
    return this.getNumberAttribute('icmp_rcv');
  }
  public set icmpRcv(value: number) {
    this._icmpRcv = value;
  }
  public resetIcmpRcv() {
    this._icmpRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRcvInput() {
    return this._icmpRcv;
  }

  // icmpv6_dropped - computed: false, optional: true, required: false
  private _icmpv6Dropped?: number; 
  public get icmpv6Dropped() {
    return this.getNumberAttribute('icmpv6_dropped');
  }
  public set icmpv6Dropped(value: number) {
    this._icmpv6Dropped = value;
  }
  public resetIcmpv6Dropped() {
    this._icmpv6Dropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6DroppedInput() {
    return this._icmpv6Dropped;
  }

  // icmpv6_rcv - computed: false, optional: true, required: false
  private _icmpv6Rcv?: number; 
  public get icmpv6Rcv() {
    return this.getNumberAttribute('icmpv6_rcv');
  }
  public set icmpv6Rcv(value: number) {
    this._icmpv6Rcv = value;
  }
  public resetIcmpv6Rcv() {
    this._icmpv6Rcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6RcvInput() {
    return this._icmpv6Rcv;
  }

  // ipd_entry_drop - computed: false, optional: true, required: false
  private _ipdEntryDrop?: number; 
  public get ipdEntryDrop() {
    return this.getNumberAttribute('ipd_entry_drop');
  }
  public set ipdEntryDrop(value: number) {
    this._ipdEntryDrop = value;
  }
  public resetIpdEntryDrop() {
    this._ipdEntryDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipdEntryDropInput() {
    return this._ipdEntryDrop;
  }

  // ipip_dropped - computed: false, optional: true, required: false
  private _ipipDropped?: number; 
  public get ipipDropped() {
    return this.getNumberAttribute('ipip_dropped');
  }
  public set ipipDropped(value: number) {
    this._ipipDropped = value;
  }
  public resetIpipDropped() {
    this._ipipDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipDroppedInput() {
    return this._ipipDropped;
  }

  // ipip_rcv - computed: false, optional: true, required: false
  private _ipipRcv?: number; 
  public get ipipRcv() {
    return this.getNumberAttribute('ipip_rcv');
  }
  public set ipipRcv(value: number) {
    this._ipipRcv = value;
  }
  public resetIpipRcv() {
    this._ipipRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipRcvInput() {
    return this._ipipRcv;
  }

  // ipv6ip_dropped - computed: false, optional: true, required: false
  private _ipv6IpDropped?: number; 
  public get ipv6IpDropped() {
    return this.getNumberAttribute('ipv6ip_dropped');
  }
  public set ipv6IpDropped(value: number) {
    this._ipv6IpDropped = value;
  }
  public resetIpv6IpDropped() {
    this._ipv6IpDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6IpDroppedInput() {
    return this._ipv6IpDropped;
  }

  // ipv6ip_rcv - computed: false, optional: true, required: false
  private _ipv6IpRcv?: number; 
  public get ipv6IpRcv() {
    return this.getNumberAttribute('ipv6ip_rcv');
  }
  public set ipv6IpRcv(value: number) {
    this._ipv6IpRcv = value;
  }
  public resetIpv6IpRcv() {
    this._ipv6IpRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6IpRcvInput() {
    return this._ipv6IpRcv;
  }

  // low_cpu_threshold - computed: false, optional: true, required: false
  private _lowCpuThreshold?: number; 
  public get lowCpuThreshold() {
    return this.getNumberAttribute('low_cpu_threshold');
  }
  public set lowCpuThreshold(value: number) {
    this._lowCpuThreshold = value;
  }
  public resetLowCpuThreshold() {
    this._lowCpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowCpuThresholdInput() {
    return this._lowCpuThreshold;
  }

  // max_len_exceeded - computed: false, optional: true, required: false
  private _maxLenExceeded?: number; 
  public get maxLenExceeded() {
    return this.getNumberAttribute('max_len_exceeded');
  }
  public set maxLenExceeded(value: number) {
    this._maxLenExceeded = value;
  }
  public resetMaxLenExceeded() {
    this._maxLenExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLenExceededInput() {
    return this._maxLenExceeded;
  }

  // max_packets_exceeded - computed: false, optional: true, required: false
  private _maxPacketsExceeded?: number; 
  public get maxPacketsExceeded() {
    return this.getNumberAttribute('max_packets_exceeded');
  }
  public set maxPacketsExceeded(value: number) {
    this._maxPacketsExceeded = value;
  }
  public resetMaxPacketsExceeded() {
    this._maxPacketsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketsExceededInput() {
    return this._maxPacketsExceeded;
  }

  // no_session_memory - computed: false, optional: true, required: false
  private _noSessionMemory?: number; 
  public get noSessionMemory() {
    return this.getNumberAttribute('no_session_memory');
  }
  public set noSessionMemory(value: number) {
    this._noSessionMemory = value;
  }
  public resetNoSessionMemory() {
    this._noSessionMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSessionMemoryInput() {
    return this._noSessionMemory;
  }

  // other_dropped - computed: false, optional: true, required: false
  private _otherDropped?: number; 
  public get otherDropped() {
    return this.getNumberAttribute('other_dropped');
  }
  public set otherDropped(value: number) {
    this._otherDropped = value;
  }
  public resetOtherDropped() {
    this._otherDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherDroppedInput() {
    return this._otherDropped;
  }

  // other_rcv - computed: false, optional: true, required: false
  private _otherRcv?: number; 
  public get otherRcv() {
    return this.getNumberAttribute('other_rcv');
  }
  public set otherRcv(value: number) {
    this._otherRcv = value;
  }
  public resetOtherRcv() {
    this._otherRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherRcvInput() {
    return this._otherRcv;
  }

  // overlap_error - computed: false, optional: true, required: false
  private _overlapError?: number; 
  public get overlapError() {
    return this.getNumberAttribute('overlap_error');
  }
  public set overlapError(value: number) {
    this._overlapError = value;
  }
  public resetOverlapError() {
    this._overlapError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapErrorInput() {
    return this._overlapError;
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

  // reassembly_failure - computed: false, optional: true, required: false
  private _reassemblyFailure?: number; 
  public get reassemblyFailure() {
    return this.getNumberAttribute('reassembly_failure');
  }
  public set reassemblyFailure(value: number) {
    this._reassemblyFailure = value;
  }
  public resetReassemblyFailure() {
    this._reassemblyFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassemblyFailureInput() {
    return this._reassemblyFailure;
  }

  // reassembly_success - computed: false, optional: true, required: false
  private _reassemblySuccess?: number; 
  public get reassemblySuccess() {
    return this.getNumberAttribute('reassembly_success');
  }
  public set reassemblySuccess(value: number) {
    this._reassemblySuccess = value;
  }
  public resetReassemblySuccess() {
    this._reassemblySuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassemblySuccessInput() {
    return this._reassemblySuccess;
  }

  // sctp_dropped - computed: false, optional: true, required: false
  private _sctpDropped?: number; 
  public get sctpDropped() {
    return this.getNumberAttribute('sctp_dropped');
  }
  public set sctpDropped(value: number) {
    this._sctpDropped = value;
  }
  public resetSctpDropped() {
    this._sctpDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpDroppedInput() {
    return this._sctpDropped;
  }

  // sctp_rcv - computed: false, optional: true, required: false
  private _sctpRcv?: number; 
  public get sctpRcv() {
    return this.getNumberAttribute('sctp_rcv');
  }
  public set sctpRcv(value: number) {
    this._sctpRcv = value;
  }
  public resetSctpRcv() {
    this._sctpRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpRcvInput() {
    return this._sctpRcv;
  }

  // session_expired - computed: false, optional: true, required: false
  private _sessionExpired?: number; 
  public get sessionExpired() {
    return this.getNumberAttribute('session_expired');
  }
  public set sessionExpired(value: number) {
    this._sessionExpired = value;
  }
  public resetSessionExpired() {
    this._sessionExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionExpiredInput() {
    return this._sessionExpired;
  }

  // session_inserted - computed: false, optional: true, required: false
  private _sessionInserted?: number; 
  public get sessionInserted() {
    return this.getNumberAttribute('session_inserted');
  }
  public set sessionInserted(value: number) {
    this._sessionInserted = value;
  }
  public resetSessionInserted() {
    this._sessionInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInsertedInput() {
    return this._sessionInserted;
  }

  // session_packets_exceeded - computed: false, optional: true, required: false
  private _sessionPacketsExceeded?: number; 
  public get sessionPacketsExceeded() {
    return this.getNumberAttribute('session_packets_exceeded');
  }
  public set sessionPacketsExceeded(value: number) {
    this._sessionPacketsExceeded = value;
  }
  public resetSessionPacketsExceeded() {
    this._sessionPacketsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPacketsExceededInput() {
    return this._sessionPacketsExceeded;
  }

  // tcp_dropped - computed: false, optional: true, required: false
  private _tcpDropped?: number; 
  public get tcpDropped() {
    return this.getNumberAttribute('tcp_dropped');
  }
  public set tcpDropped(value: number) {
    this._tcpDropped = value;
  }
  public resetTcpDropped() {
    this._tcpDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDroppedInput() {
    return this._tcpDropped;
  }

  // tcp_rcv - computed: false, optional: true, required: false
  private _tcpRcv?: number; 
  public get tcpRcv() {
    return this.getNumberAttribute('tcp_rcv');
  }
  public set tcpRcv(value: number) {
    this._tcpRcv = value;
  }
  public resetTcpRcv() {
    this._tcpRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRcvInput() {
    return this._tcpRcv;
  }

  // too_small - computed: false, optional: true, required: false
  private _tooSmall?: number; 
  public get tooSmall() {
    return this.getNumberAttribute('too_small');
  }
  public set tooSmall(value: number) {
    this._tooSmall = value;
  }
  public resetTooSmall() {
    this._tooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooSmallInput() {
    return this._tooSmall;
  }

  // total_fragments_exceeded - computed: false, optional: true, required: false
  private _totalFragmentsExceeded?: number; 
  public get totalFragmentsExceeded() {
    return this.getNumberAttribute('total_fragments_exceeded');
  }
  public set totalFragmentsExceeded(value: number) {
    this._totalFragmentsExceeded = value;
  }
  public resetTotalFragmentsExceeded() {
    this._totalFragmentsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFragmentsExceededInput() {
    return this._totalFragmentsExceeded;
  }

  // total_sessions_exceeded - computed: false, optional: true, required: false
  private _totalSessionsExceeded?: number; 
  public get totalSessionsExceeded() {
    return this.getNumberAttribute('total_sessions_exceeded');
  }
  public set totalSessionsExceeded(value: number) {
    this._totalSessionsExceeded = value;
  }
  public resetTotalSessionsExceeded() {
    this._totalSessionsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSessionsExceededInput() {
    return this._totalSessionsExceeded;
  }

  // udp_dropped - computed: false, optional: true, required: false
  private _udpDropped?: number; 
  public get udpDropped() {
    return this.getNumberAttribute('udp_dropped');
  }
  public set udpDropped(value: number) {
    this._udpDropped = value;
  }
  public resetUdpDropped() {
    this._udpDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpDroppedInput() {
    return this._udpDropped;
  }

  // udp_rcv - computed: false, optional: true, required: false
  private _udpRcv?: number; 
  public get udpRcv() {
    return this.getNumberAttribute('udp_rcv');
  }
  public set udpRcv(value: number) {
    this._udpRcv = value;
  }
  public resetUdpRcv() {
    this._udpRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRcvInput() {
    return this._udpRcv;
  }

  // unaligned_len - computed: false, optional: true, required: false
  private _unalignedLen?: number; 
  public get unalignedLen() {
    return this.getNumberAttribute('unaligned_len');
  }
  public set unalignedLen(value: number) {
    this._unalignedLen = value;
  }
  public resetUnalignedLen() {
    this._unalignedLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unalignedLenInput() {
    return this._unalignedLen;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats thunder_ipv6_in_ipv4_frag_stats}
*/
export class DataThunderIpv6InIpv4FragStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_in_ipv4_frag_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderIpv6InIpv4FragStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderIpv6InIpv4FragStats to import
  * @param importFromId The id of the existing DataThunderIpv6InIpv4FragStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderIpv6InIpv4FragStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_in_ipv4_frag_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_in_ipv4_frag_stats thunder_ipv6_in_ipv4_frag_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderIpv6InIpv4FragStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderIpv6InIpv4FragStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_in_ipv4_frag_stats',
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
  private _stats = new DataThunderIpv6InIpv4FragStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderIpv6InIpv4FragStatsStats) {
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
      stats: dataThunderIpv6InIpv4FragStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderIpv6InIpv4FragStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderIpv6InIpv4FragStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
