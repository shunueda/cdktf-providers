// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityMonitorAgentStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name for the agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#agent_name DataThunderVisibilityMonitorAgentStats#agent_name}
  */
  readonly agentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#id DataThunderVisibilityMonitorAgentStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#stats DataThunderVisibilityMonitorAgentStats#stats}
  */
  readonly stats?: DataThunderVisibilityMonitorAgentStatsStats;
}
export interface DataThunderVisibilityMonitorAgentStatsStats {
  /**
  * Netflow Flow Samples Processing Disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_disabled DataThunderVisibilityMonitorAgentStats#netflow_disabled}
  */
  readonly netflowDisabled?: number;
  /**
  * Netflow ICMP Samples Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_icmp_sample_received DataThunderVisibilityMonitorAgentStats#netflow_icmp_sample_received}
  */
  readonly netflowIcmpSampleReceived?: number;
  /**
  * Netflow OTHER Samples Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_other_sample_received DataThunderVisibilityMonitorAgentStats#netflow_other_sample_received}
  */
  readonly netflowOtherSampleReceived?: number;
  /**
  * Netflow Data Record Copy Fail OOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_record_copy_oom_error DataThunderVisibilityMonitorAgentStats#netflow_record_copy_oom_error}
  */
  readonly netflowRecordCopyOomError?: number;
  /**
  * Netflow Data Record Reduced Size Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_record_rse_invalid DataThunderVisibilityMonitorAgentStats#netflow_record_rse_invalid}
  */
  readonly netflowRecordRseInvalid?: number;
  /**
  * Netflow Sample Flow Duration Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_sample_flow_dur_error DataThunderVisibilityMonitorAgentStats#netflow_sample_flow_dur_error}
  */
  readonly netflowSampleFlowDurError?: number;
  /**
  * Netflow TCP Samples Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_tcp_sample_received DataThunderVisibilityMonitorAgentStats#netflow_tcp_sample_received}
  */
  readonly netflowTcpSampleReceived?: number;
  /**
  * Netflow UDP Samples received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_udp_sample_received DataThunderVisibilityMonitorAgentStats#netflow_udp_sample_received}
  */
  readonly netflowUdpSampleReceived?: number;
  /**
  * Netflow v10 Sample Max records Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v10_max_records_exceed DataThunderVisibilityMonitorAgentStats#netflow_v10_max_records_exceed}
  */
  readonly netflowV10MaxRecordsExceed?: number;
  /**
  * Netflow v10 Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v10_packets_received DataThunderVisibilityMonitorAgentStats#netflow_v10_packets_received}
  */
  readonly netflowV10PacketsReceived?: number;
  /**
  * Netflow v10 Sample Records Bad Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v10_sample_records_bad_len DataThunderVisibilityMonitorAgentStats#netflow_v10_sample_records_bad_len}
  */
  readonly netflowV10SampleRecordsBadLen?: number;
  /**
  * Netflow v10 Samples Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v10_samples_received DataThunderVisibilityMonitorAgentStats#netflow_v10_samples_received}
  */
  readonly netflowV10SamplesReceived?: number;
  /**
  * Netflow v10 Samples Procssed For Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v10_samples_sent_for_detection DataThunderVisibilityMonitorAgentStats#netflow_v10_samples_sent_for_detection}
  */
  readonly netflowV10SamplesSentForDetection?: number;
  /**
  * Netflow v5 Sample Max Records Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v5_max_records_exceed DataThunderVisibilityMonitorAgentStats#netflow_v5_max_records_exceed}
  */
  readonly netflowV5MaxRecordsExceed?: number;
  /**
  * Netflow v5 Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v5_packets_received DataThunderVisibilityMonitorAgentStats#netflow_v5_packets_received}
  */
  readonly netflowV5PacketsReceived?: number;
  /**
  * Netflow v5 Sample Records Bad Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v5_sample_records_bad_len DataThunderVisibilityMonitorAgentStats#netflow_v5_sample_records_bad_len}
  */
  readonly netflowV5SampleRecordsBadLen?: number;
  /**
  * Netflow v5 Samples Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v5_samples_received DataThunderVisibilityMonitorAgentStats#netflow_v5_samples_received}
  */
  readonly netflowV5SamplesReceived?: number;
  /**
  * Netflow v5 Samples Processed For Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v5_samples_sent_for_detection DataThunderVisibilityMonitorAgentStats#netflow_v5_samples_sent_for_detection}
  */
  readonly netflowV5SamplesSentForDetection?: number;
  /**
  * Netflow v9 Sample Max Records Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v9_max_records_exceed DataThunderVisibilityMonitorAgentStats#netflow_v9_max_records_exceed}
  */
  readonly netflowV9MaxRecordsExceed?: number;
  /**
  * Netflow v9 Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v9_packets_received DataThunderVisibilityMonitorAgentStats#netflow_v9_packets_received}
  */
  readonly netflowV9PacketsReceived?: number;
  /**
  * Netflow v9 Sample Records Bad Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v9_sample_records_bad_len DataThunderVisibilityMonitorAgentStats#netflow_v9_sample_records_bad_len}
  */
  readonly netflowV9SampleRecordsBadLen?: number;
  /**
  * Netflow v9 Samples Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v9_samples_received DataThunderVisibilityMonitorAgentStats#netflow_v9_samples_received}
  */
  readonly netflowV9SamplesReceived?: number;
  /**
  * Netflow v9 Samples Processed For Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#netflow_v9_samples_sent_for_detection DataThunderVisibilityMonitorAgentStats#netflow_v9_samples_sent_for_detection}
  */
  readonly netflowV9SamplesSentForDetection?: number;
  /**
  * sFlow Packet Samples Processing Disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#sflow_disabled DataThunderVisibilityMonitorAgentStats#sflow_disabled}
  */
  readonly sflowDisabled?: number;
  /**
  * sFlow Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#sflow_packets_received DataThunderVisibilityMonitorAgentStats#sflow_packets_received}
  */
  readonly sflowPacketsReceived?: number;
  /**
  * sFlow Sample IPv6 Record Header Parse Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#sflow_sample_ipv6_hdr_parse_fail DataThunderVisibilityMonitorAgentStats#sflow_sample_ipv6_hdr_parse_fail}
  */
  readonly sflowSampleIpv6HdrParseFail?: number;
  /**
  * sFlow Sample Records Bad Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#sflow_sample_record_bad_len DataThunderVisibilityMonitorAgentStats#sflow_sample_record_bad_len}
  */
  readonly sflowSampleRecordBadLen?: number;
  /**
  * sFlow Sample Records Unknown Layer-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#sflow_sample_record_invalid_layer2 DataThunderVisibilityMonitorAgentStats#sflow_sample_record_invalid_layer2}
  */
  readonly sflowSampleRecordInvalidLayer2?: number;
  /**
  * sFlow Samples Bad Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#sflow_samples_bad_len DataThunderVisibilityMonitorAgentStats#sflow_samples_bad_len}
  */
  readonly sflowSamplesBadLen?: number;
  /**
  * sFlow Samples Non-standard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#sflow_samples_non_std DataThunderVisibilityMonitorAgentStats#sflow_samples_non_std}
  */
  readonly sflowSamplesNonStd?: number;
  /**
  * sFlow Samples Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#sflow_samples_received DataThunderVisibilityMonitorAgentStats#sflow_samples_received}
  */
  readonly sflowSamplesReceived?: number;
  /**
  * sFlow Samples Processed For Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#sflow_samples_sent_for_detection DataThunderVisibilityMonitorAgentStats#sflow_samples_sent_for_detection}
  */
  readonly sflowSamplesSentForDetection?: number;
  /**
  * sFlow Samples Skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#sflow_samples_skipped DataThunderVisibilityMonitorAgentStats#sflow_samples_skipped}
  */
  readonly sflowSamplesSkipped?: number;
}

export function dataThunderVisibilityMonitorAgentStatsStatsToTerraform(struct?: DataThunderVisibilityMonitorAgentStatsStatsOutputReference | DataThunderVisibilityMonitorAgentStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    netflow_disabled: cdktf.numberToTerraform(struct!.netflowDisabled),
    netflow_icmp_sample_received: cdktf.numberToTerraform(struct!.netflowIcmpSampleReceived),
    netflow_other_sample_received: cdktf.numberToTerraform(struct!.netflowOtherSampleReceived),
    netflow_record_copy_oom_error: cdktf.numberToTerraform(struct!.netflowRecordCopyOomError),
    netflow_record_rse_invalid: cdktf.numberToTerraform(struct!.netflowRecordRseInvalid),
    netflow_sample_flow_dur_error: cdktf.numberToTerraform(struct!.netflowSampleFlowDurError),
    netflow_tcp_sample_received: cdktf.numberToTerraform(struct!.netflowTcpSampleReceived),
    netflow_udp_sample_received: cdktf.numberToTerraform(struct!.netflowUdpSampleReceived),
    netflow_v10_max_records_exceed: cdktf.numberToTerraform(struct!.netflowV10MaxRecordsExceed),
    netflow_v10_packets_received: cdktf.numberToTerraform(struct!.netflowV10PacketsReceived),
    netflow_v10_sample_records_bad_len: cdktf.numberToTerraform(struct!.netflowV10SampleRecordsBadLen),
    netflow_v10_samples_received: cdktf.numberToTerraform(struct!.netflowV10SamplesReceived),
    netflow_v10_samples_sent_for_detection: cdktf.numberToTerraform(struct!.netflowV10SamplesSentForDetection),
    netflow_v5_max_records_exceed: cdktf.numberToTerraform(struct!.netflowV5MaxRecordsExceed),
    netflow_v5_packets_received: cdktf.numberToTerraform(struct!.netflowV5PacketsReceived),
    netflow_v5_sample_records_bad_len: cdktf.numberToTerraform(struct!.netflowV5SampleRecordsBadLen),
    netflow_v5_samples_received: cdktf.numberToTerraform(struct!.netflowV5SamplesReceived),
    netflow_v5_samples_sent_for_detection: cdktf.numberToTerraform(struct!.netflowV5SamplesSentForDetection),
    netflow_v9_max_records_exceed: cdktf.numberToTerraform(struct!.netflowV9MaxRecordsExceed),
    netflow_v9_packets_received: cdktf.numberToTerraform(struct!.netflowV9PacketsReceived),
    netflow_v9_sample_records_bad_len: cdktf.numberToTerraform(struct!.netflowV9SampleRecordsBadLen),
    netflow_v9_samples_received: cdktf.numberToTerraform(struct!.netflowV9SamplesReceived),
    netflow_v9_samples_sent_for_detection: cdktf.numberToTerraform(struct!.netflowV9SamplesSentForDetection),
    sflow_disabled: cdktf.numberToTerraform(struct!.sflowDisabled),
    sflow_packets_received: cdktf.numberToTerraform(struct!.sflowPacketsReceived),
    sflow_sample_ipv6_hdr_parse_fail: cdktf.numberToTerraform(struct!.sflowSampleIpv6HdrParseFail),
    sflow_sample_record_bad_len: cdktf.numberToTerraform(struct!.sflowSampleRecordBadLen),
    sflow_sample_record_invalid_layer2: cdktf.numberToTerraform(struct!.sflowSampleRecordInvalidLayer2),
    sflow_samples_bad_len: cdktf.numberToTerraform(struct!.sflowSamplesBadLen),
    sflow_samples_non_std: cdktf.numberToTerraform(struct!.sflowSamplesNonStd),
    sflow_samples_received: cdktf.numberToTerraform(struct!.sflowSamplesReceived),
    sflow_samples_sent_for_detection: cdktf.numberToTerraform(struct!.sflowSamplesSentForDetection),
    sflow_samples_skipped: cdktf.numberToTerraform(struct!.sflowSamplesSkipped),
  }
}


export function dataThunderVisibilityMonitorAgentStatsStatsToHclTerraform(struct?: DataThunderVisibilityMonitorAgentStatsStatsOutputReference | DataThunderVisibilityMonitorAgentStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    netflow_disabled: {
      value: cdktf.numberToHclTerraform(struct!.netflowDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_icmp_sample_received: {
      value: cdktf.numberToHclTerraform(struct!.netflowIcmpSampleReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_other_sample_received: {
      value: cdktf.numberToHclTerraform(struct!.netflowOtherSampleReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_record_copy_oom_error: {
      value: cdktf.numberToHclTerraform(struct!.netflowRecordCopyOomError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_record_rse_invalid: {
      value: cdktf.numberToHclTerraform(struct!.netflowRecordRseInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_sample_flow_dur_error: {
      value: cdktf.numberToHclTerraform(struct!.netflowSampleFlowDurError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_tcp_sample_received: {
      value: cdktf.numberToHclTerraform(struct!.netflowTcpSampleReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_udp_sample_received: {
      value: cdktf.numberToHclTerraform(struct!.netflowUdpSampleReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v10_max_records_exceed: {
      value: cdktf.numberToHclTerraform(struct!.netflowV10MaxRecordsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v10_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.netflowV10PacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v10_sample_records_bad_len: {
      value: cdktf.numberToHclTerraform(struct!.netflowV10SampleRecordsBadLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v10_samples_received: {
      value: cdktf.numberToHclTerraform(struct!.netflowV10SamplesReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v10_samples_sent_for_detection: {
      value: cdktf.numberToHclTerraform(struct!.netflowV10SamplesSentForDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v5_max_records_exceed: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5MaxRecordsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v5_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5PacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v5_sample_records_bad_len: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5SampleRecordsBadLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v5_samples_received: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5SamplesReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v5_samples_sent_for_detection: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5SamplesSentForDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v9_max_records_exceed: {
      value: cdktf.numberToHclTerraform(struct!.netflowV9MaxRecordsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v9_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.netflowV9PacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v9_sample_records_bad_len: {
      value: cdktf.numberToHclTerraform(struct!.netflowV9SampleRecordsBadLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v9_samples_received: {
      value: cdktf.numberToHclTerraform(struct!.netflowV9SamplesReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v9_samples_sent_for_detection: {
      value: cdktf.numberToHclTerraform(struct!.netflowV9SamplesSentForDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_disabled: {
      value: cdktf.numberToHclTerraform(struct!.sflowDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.sflowPacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_sample_ipv6_hdr_parse_fail: {
      value: cdktf.numberToHclTerraform(struct!.sflowSampleIpv6HdrParseFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_sample_record_bad_len: {
      value: cdktf.numberToHclTerraform(struct!.sflowSampleRecordBadLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_sample_record_invalid_layer2: {
      value: cdktf.numberToHclTerraform(struct!.sflowSampleRecordInvalidLayer2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_samples_bad_len: {
      value: cdktf.numberToHclTerraform(struct!.sflowSamplesBadLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_samples_non_std: {
      value: cdktf.numberToHclTerraform(struct!.sflowSamplesNonStd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_samples_received: {
      value: cdktf.numberToHclTerraform(struct!.sflowSamplesReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_samples_sent_for_detection: {
      value: cdktf.numberToHclTerraform(struct!.sflowSamplesSentForDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_samples_skipped: {
      value: cdktf.numberToHclTerraform(struct!.sflowSamplesSkipped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonitorAgentStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonitorAgentStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._netflowDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowDisabled = this._netflowDisabled;
    }
    if (this._netflowIcmpSampleReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowIcmpSampleReceived = this._netflowIcmpSampleReceived;
    }
    if (this._netflowOtherSampleReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowOtherSampleReceived = this._netflowOtherSampleReceived;
    }
    if (this._netflowRecordCopyOomError !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowRecordCopyOomError = this._netflowRecordCopyOomError;
    }
    if (this._netflowRecordRseInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowRecordRseInvalid = this._netflowRecordRseInvalid;
    }
    if (this._netflowSampleFlowDurError !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowSampleFlowDurError = this._netflowSampleFlowDurError;
    }
    if (this._netflowTcpSampleReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowTcpSampleReceived = this._netflowTcpSampleReceived;
    }
    if (this._netflowUdpSampleReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowUdpSampleReceived = this._netflowUdpSampleReceived;
    }
    if (this._netflowV10MaxRecordsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV10MaxRecordsExceed = this._netflowV10MaxRecordsExceed;
    }
    if (this._netflowV10PacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV10PacketsReceived = this._netflowV10PacketsReceived;
    }
    if (this._netflowV10SampleRecordsBadLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV10SampleRecordsBadLen = this._netflowV10SampleRecordsBadLen;
    }
    if (this._netflowV10SamplesReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV10SamplesReceived = this._netflowV10SamplesReceived;
    }
    if (this._netflowV10SamplesSentForDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV10SamplesSentForDetection = this._netflowV10SamplesSentForDetection;
    }
    if (this._netflowV5MaxRecordsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5MaxRecordsExceed = this._netflowV5MaxRecordsExceed;
    }
    if (this._netflowV5PacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5PacketsReceived = this._netflowV5PacketsReceived;
    }
    if (this._netflowV5SampleRecordsBadLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5SampleRecordsBadLen = this._netflowV5SampleRecordsBadLen;
    }
    if (this._netflowV5SamplesReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5SamplesReceived = this._netflowV5SamplesReceived;
    }
    if (this._netflowV5SamplesSentForDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5SamplesSentForDetection = this._netflowV5SamplesSentForDetection;
    }
    if (this._netflowV9MaxRecordsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV9MaxRecordsExceed = this._netflowV9MaxRecordsExceed;
    }
    if (this._netflowV9PacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV9PacketsReceived = this._netflowV9PacketsReceived;
    }
    if (this._netflowV9SampleRecordsBadLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV9SampleRecordsBadLen = this._netflowV9SampleRecordsBadLen;
    }
    if (this._netflowV9SamplesReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV9SamplesReceived = this._netflowV9SamplesReceived;
    }
    if (this._netflowV9SamplesSentForDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV9SamplesSentForDetection = this._netflowV9SamplesSentForDetection;
    }
    if (this._sflowDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowDisabled = this._sflowDisabled;
    }
    if (this._sflowPacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowPacketsReceived = this._sflowPacketsReceived;
    }
    if (this._sflowSampleIpv6HdrParseFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSampleIpv6HdrParseFail = this._sflowSampleIpv6HdrParseFail;
    }
    if (this._sflowSampleRecordBadLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSampleRecordBadLen = this._sflowSampleRecordBadLen;
    }
    if (this._sflowSampleRecordInvalidLayer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSampleRecordInvalidLayer2 = this._sflowSampleRecordInvalidLayer2;
    }
    if (this._sflowSamplesBadLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSamplesBadLen = this._sflowSamplesBadLen;
    }
    if (this._sflowSamplesNonStd !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSamplesNonStd = this._sflowSamplesNonStd;
    }
    if (this._sflowSamplesReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSamplesReceived = this._sflowSamplesReceived;
    }
    if (this._sflowSamplesSentForDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSamplesSentForDetection = this._sflowSamplesSentForDetection;
    }
    if (this._sflowSamplesSkipped !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSamplesSkipped = this._sflowSamplesSkipped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonitorAgentStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._netflowDisabled = undefined;
      this._netflowIcmpSampleReceived = undefined;
      this._netflowOtherSampleReceived = undefined;
      this._netflowRecordCopyOomError = undefined;
      this._netflowRecordRseInvalid = undefined;
      this._netflowSampleFlowDurError = undefined;
      this._netflowTcpSampleReceived = undefined;
      this._netflowUdpSampleReceived = undefined;
      this._netflowV10MaxRecordsExceed = undefined;
      this._netflowV10PacketsReceived = undefined;
      this._netflowV10SampleRecordsBadLen = undefined;
      this._netflowV10SamplesReceived = undefined;
      this._netflowV10SamplesSentForDetection = undefined;
      this._netflowV5MaxRecordsExceed = undefined;
      this._netflowV5PacketsReceived = undefined;
      this._netflowV5SampleRecordsBadLen = undefined;
      this._netflowV5SamplesReceived = undefined;
      this._netflowV5SamplesSentForDetection = undefined;
      this._netflowV9MaxRecordsExceed = undefined;
      this._netflowV9PacketsReceived = undefined;
      this._netflowV9SampleRecordsBadLen = undefined;
      this._netflowV9SamplesReceived = undefined;
      this._netflowV9SamplesSentForDetection = undefined;
      this._sflowDisabled = undefined;
      this._sflowPacketsReceived = undefined;
      this._sflowSampleIpv6HdrParseFail = undefined;
      this._sflowSampleRecordBadLen = undefined;
      this._sflowSampleRecordInvalidLayer2 = undefined;
      this._sflowSamplesBadLen = undefined;
      this._sflowSamplesNonStd = undefined;
      this._sflowSamplesReceived = undefined;
      this._sflowSamplesSentForDetection = undefined;
      this._sflowSamplesSkipped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._netflowDisabled = value.netflowDisabled;
      this._netflowIcmpSampleReceived = value.netflowIcmpSampleReceived;
      this._netflowOtherSampleReceived = value.netflowOtherSampleReceived;
      this._netflowRecordCopyOomError = value.netflowRecordCopyOomError;
      this._netflowRecordRseInvalid = value.netflowRecordRseInvalid;
      this._netflowSampleFlowDurError = value.netflowSampleFlowDurError;
      this._netflowTcpSampleReceived = value.netflowTcpSampleReceived;
      this._netflowUdpSampleReceived = value.netflowUdpSampleReceived;
      this._netflowV10MaxRecordsExceed = value.netflowV10MaxRecordsExceed;
      this._netflowV10PacketsReceived = value.netflowV10PacketsReceived;
      this._netflowV10SampleRecordsBadLen = value.netflowV10SampleRecordsBadLen;
      this._netflowV10SamplesReceived = value.netflowV10SamplesReceived;
      this._netflowV10SamplesSentForDetection = value.netflowV10SamplesSentForDetection;
      this._netflowV5MaxRecordsExceed = value.netflowV5MaxRecordsExceed;
      this._netflowV5PacketsReceived = value.netflowV5PacketsReceived;
      this._netflowV5SampleRecordsBadLen = value.netflowV5SampleRecordsBadLen;
      this._netflowV5SamplesReceived = value.netflowV5SamplesReceived;
      this._netflowV5SamplesSentForDetection = value.netflowV5SamplesSentForDetection;
      this._netflowV9MaxRecordsExceed = value.netflowV9MaxRecordsExceed;
      this._netflowV9PacketsReceived = value.netflowV9PacketsReceived;
      this._netflowV9SampleRecordsBadLen = value.netflowV9SampleRecordsBadLen;
      this._netflowV9SamplesReceived = value.netflowV9SamplesReceived;
      this._netflowV9SamplesSentForDetection = value.netflowV9SamplesSentForDetection;
      this._sflowDisabled = value.sflowDisabled;
      this._sflowPacketsReceived = value.sflowPacketsReceived;
      this._sflowSampleIpv6HdrParseFail = value.sflowSampleIpv6HdrParseFail;
      this._sflowSampleRecordBadLen = value.sflowSampleRecordBadLen;
      this._sflowSampleRecordInvalidLayer2 = value.sflowSampleRecordInvalidLayer2;
      this._sflowSamplesBadLen = value.sflowSamplesBadLen;
      this._sflowSamplesNonStd = value.sflowSamplesNonStd;
      this._sflowSamplesReceived = value.sflowSamplesReceived;
      this._sflowSamplesSentForDetection = value.sflowSamplesSentForDetection;
      this._sflowSamplesSkipped = value.sflowSamplesSkipped;
    }
  }

  // netflow_disabled - computed: false, optional: true, required: false
  private _netflowDisabled?: number; 
  public get netflowDisabled() {
    return this.getNumberAttribute('netflow_disabled');
  }
  public set netflowDisabled(value: number) {
    this._netflowDisabled = value;
  }
  public resetNetflowDisabled() {
    this._netflowDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowDisabledInput() {
    return this._netflowDisabled;
  }

  // netflow_icmp_sample_received - computed: false, optional: true, required: false
  private _netflowIcmpSampleReceived?: number; 
  public get netflowIcmpSampleReceived() {
    return this.getNumberAttribute('netflow_icmp_sample_received');
  }
  public set netflowIcmpSampleReceived(value: number) {
    this._netflowIcmpSampleReceived = value;
  }
  public resetNetflowIcmpSampleReceived() {
    this._netflowIcmpSampleReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowIcmpSampleReceivedInput() {
    return this._netflowIcmpSampleReceived;
  }

  // netflow_other_sample_received - computed: false, optional: true, required: false
  private _netflowOtherSampleReceived?: number; 
  public get netflowOtherSampleReceived() {
    return this.getNumberAttribute('netflow_other_sample_received');
  }
  public set netflowOtherSampleReceived(value: number) {
    this._netflowOtherSampleReceived = value;
  }
  public resetNetflowOtherSampleReceived() {
    this._netflowOtherSampleReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowOtherSampleReceivedInput() {
    return this._netflowOtherSampleReceived;
  }

  // netflow_record_copy_oom_error - computed: false, optional: true, required: false
  private _netflowRecordCopyOomError?: number; 
  public get netflowRecordCopyOomError() {
    return this.getNumberAttribute('netflow_record_copy_oom_error');
  }
  public set netflowRecordCopyOomError(value: number) {
    this._netflowRecordCopyOomError = value;
  }
  public resetNetflowRecordCopyOomError() {
    this._netflowRecordCopyOomError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowRecordCopyOomErrorInput() {
    return this._netflowRecordCopyOomError;
  }

  // netflow_record_rse_invalid - computed: false, optional: true, required: false
  private _netflowRecordRseInvalid?: number; 
  public get netflowRecordRseInvalid() {
    return this.getNumberAttribute('netflow_record_rse_invalid');
  }
  public set netflowRecordRseInvalid(value: number) {
    this._netflowRecordRseInvalid = value;
  }
  public resetNetflowRecordRseInvalid() {
    this._netflowRecordRseInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowRecordRseInvalidInput() {
    return this._netflowRecordRseInvalid;
  }

  // netflow_sample_flow_dur_error - computed: false, optional: true, required: false
  private _netflowSampleFlowDurError?: number; 
  public get netflowSampleFlowDurError() {
    return this.getNumberAttribute('netflow_sample_flow_dur_error');
  }
  public set netflowSampleFlowDurError(value: number) {
    this._netflowSampleFlowDurError = value;
  }
  public resetNetflowSampleFlowDurError() {
    this._netflowSampleFlowDurError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowSampleFlowDurErrorInput() {
    return this._netflowSampleFlowDurError;
  }

  // netflow_tcp_sample_received - computed: false, optional: true, required: false
  private _netflowTcpSampleReceived?: number; 
  public get netflowTcpSampleReceived() {
    return this.getNumberAttribute('netflow_tcp_sample_received');
  }
  public set netflowTcpSampleReceived(value: number) {
    this._netflowTcpSampleReceived = value;
  }
  public resetNetflowTcpSampleReceived() {
    this._netflowTcpSampleReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowTcpSampleReceivedInput() {
    return this._netflowTcpSampleReceived;
  }

  // netflow_udp_sample_received - computed: false, optional: true, required: false
  private _netflowUdpSampleReceived?: number; 
  public get netflowUdpSampleReceived() {
    return this.getNumberAttribute('netflow_udp_sample_received');
  }
  public set netflowUdpSampleReceived(value: number) {
    this._netflowUdpSampleReceived = value;
  }
  public resetNetflowUdpSampleReceived() {
    this._netflowUdpSampleReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowUdpSampleReceivedInput() {
    return this._netflowUdpSampleReceived;
  }

  // netflow_v10_max_records_exceed - computed: false, optional: true, required: false
  private _netflowV10MaxRecordsExceed?: number; 
  public get netflowV10MaxRecordsExceed() {
    return this.getNumberAttribute('netflow_v10_max_records_exceed');
  }
  public set netflowV10MaxRecordsExceed(value: number) {
    this._netflowV10MaxRecordsExceed = value;
  }
  public resetNetflowV10MaxRecordsExceed() {
    this._netflowV10MaxRecordsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV10MaxRecordsExceedInput() {
    return this._netflowV10MaxRecordsExceed;
  }

  // netflow_v10_packets_received - computed: false, optional: true, required: false
  private _netflowV10PacketsReceived?: number; 
  public get netflowV10PacketsReceived() {
    return this.getNumberAttribute('netflow_v10_packets_received');
  }
  public set netflowV10PacketsReceived(value: number) {
    this._netflowV10PacketsReceived = value;
  }
  public resetNetflowV10PacketsReceived() {
    this._netflowV10PacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV10PacketsReceivedInput() {
    return this._netflowV10PacketsReceived;
  }

  // netflow_v10_sample_records_bad_len - computed: false, optional: true, required: false
  private _netflowV10SampleRecordsBadLen?: number; 
  public get netflowV10SampleRecordsBadLen() {
    return this.getNumberAttribute('netflow_v10_sample_records_bad_len');
  }
  public set netflowV10SampleRecordsBadLen(value: number) {
    this._netflowV10SampleRecordsBadLen = value;
  }
  public resetNetflowV10SampleRecordsBadLen() {
    this._netflowV10SampleRecordsBadLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV10SampleRecordsBadLenInput() {
    return this._netflowV10SampleRecordsBadLen;
  }

  // netflow_v10_samples_received - computed: false, optional: true, required: false
  private _netflowV10SamplesReceived?: number; 
  public get netflowV10SamplesReceived() {
    return this.getNumberAttribute('netflow_v10_samples_received');
  }
  public set netflowV10SamplesReceived(value: number) {
    this._netflowV10SamplesReceived = value;
  }
  public resetNetflowV10SamplesReceived() {
    this._netflowV10SamplesReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV10SamplesReceivedInput() {
    return this._netflowV10SamplesReceived;
  }

  // netflow_v10_samples_sent_for_detection - computed: false, optional: true, required: false
  private _netflowV10SamplesSentForDetection?: number; 
  public get netflowV10SamplesSentForDetection() {
    return this.getNumberAttribute('netflow_v10_samples_sent_for_detection');
  }
  public set netflowV10SamplesSentForDetection(value: number) {
    this._netflowV10SamplesSentForDetection = value;
  }
  public resetNetflowV10SamplesSentForDetection() {
    this._netflowV10SamplesSentForDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV10SamplesSentForDetectionInput() {
    return this._netflowV10SamplesSentForDetection;
  }

  // netflow_v5_max_records_exceed - computed: false, optional: true, required: false
  private _netflowV5MaxRecordsExceed?: number; 
  public get netflowV5MaxRecordsExceed() {
    return this.getNumberAttribute('netflow_v5_max_records_exceed');
  }
  public set netflowV5MaxRecordsExceed(value: number) {
    this._netflowV5MaxRecordsExceed = value;
  }
  public resetNetflowV5MaxRecordsExceed() {
    this._netflowV5MaxRecordsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5MaxRecordsExceedInput() {
    return this._netflowV5MaxRecordsExceed;
  }

  // netflow_v5_packets_received - computed: false, optional: true, required: false
  private _netflowV5PacketsReceived?: number; 
  public get netflowV5PacketsReceived() {
    return this.getNumberAttribute('netflow_v5_packets_received');
  }
  public set netflowV5PacketsReceived(value: number) {
    this._netflowV5PacketsReceived = value;
  }
  public resetNetflowV5PacketsReceived() {
    this._netflowV5PacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5PacketsReceivedInput() {
    return this._netflowV5PacketsReceived;
  }

  // netflow_v5_sample_records_bad_len - computed: false, optional: true, required: false
  private _netflowV5SampleRecordsBadLen?: number; 
  public get netflowV5SampleRecordsBadLen() {
    return this.getNumberAttribute('netflow_v5_sample_records_bad_len');
  }
  public set netflowV5SampleRecordsBadLen(value: number) {
    this._netflowV5SampleRecordsBadLen = value;
  }
  public resetNetflowV5SampleRecordsBadLen() {
    this._netflowV5SampleRecordsBadLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5SampleRecordsBadLenInput() {
    return this._netflowV5SampleRecordsBadLen;
  }

  // netflow_v5_samples_received - computed: false, optional: true, required: false
  private _netflowV5SamplesReceived?: number; 
  public get netflowV5SamplesReceived() {
    return this.getNumberAttribute('netflow_v5_samples_received');
  }
  public set netflowV5SamplesReceived(value: number) {
    this._netflowV5SamplesReceived = value;
  }
  public resetNetflowV5SamplesReceived() {
    this._netflowV5SamplesReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5SamplesReceivedInput() {
    return this._netflowV5SamplesReceived;
  }

  // netflow_v5_samples_sent_for_detection - computed: false, optional: true, required: false
  private _netflowV5SamplesSentForDetection?: number; 
  public get netflowV5SamplesSentForDetection() {
    return this.getNumberAttribute('netflow_v5_samples_sent_for_detection');
  }
  public set netflowV5SamplesSentForDetection(value: number) {
    this._netflowV5SamplesSentForDetection = value;
  }
  public resetNetflowV5SamplesSentForDetection() {
    this._netflowV5SamplesSentForDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5SamplesSentForDetectionInput() {
    return this._netflowV5SamplesSentForDetection;
  }

  // netflow_v9_max_records_exceed - computed: false, optional: true, required: false
  private _netflowV9MaxRecordsExceed?: number; 
  public get netflowV9MaxRecordsExceed() {
    return this.getNumberAttribute('netflow_v9_max_records_exceed');
  }
  public set netflowV9MaxRecordsExceed(value: number) {
    this._netflowV9MaxRecordsExceed = value;
  }
  public resetNetflowV9MaxRecordsExceed() {
    this._netflowV9MaxRecordsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV9MaxRecordsExceedInput() {
    return this._netflowV9MaxRecordsExceed;
  }

  // netflow_v9_packets_received - computed: false, optional: true, required: false
  private _netflowV9PacketsReceived?: number; 
  public get netflowV9PacketsReceived() {
    return this.getNumberAttribute('netflow_v9_packets_received');
  }
  public set netflowV9PacketsReceived(value: number) {
    this._netflowV9PacketsReceived = value;
  }
  public resetNetflowV9PacketsReceived() {
    this._netflowV9PacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV9PacketsReceivedInput() {
    return this._netflowV9PacketsReceived;
  }

  // netflow_v9_sample_records_bad_len - computed: false, optional: true, required: false
  private _netflowV9SampleRecordsBadLen?: number; 
  public get netflowV9SampleRecordsBadLen() {
    return this.getNumberAttribute('netflow_v9_sample_records_bad_len');
  }
  public set netflowV9SampleRecordsBadLen(value: number) {
    this._netflowV9SampleRecordsBadLen = value;
  }
  public resetNetflowV9SampleRecordsBadLen() {
    this._netflowV9SampleRecordsBadLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV9SampleRecordsBadLenInput() {
    return this._netflowV9SampleRecordsBadLen;
  }

  // netflow_v9_samples_received - computed: false, optional: true, required: false
  private _netflowV9SamplesReceived?: number; 
  public get netflowV9SamplesReceived() {
    return this.getNumberAttribute('netflow_v9_samples_received');
  }
  public set netflowV9SamplesReceived(value: number) {
    this._netflowV9SamplesReceived = value;
  }
  public resetNetflowV9SamplesReceived() {
    this._netflowV9SamplesReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV9SamplesReceivedInput() {
    return this._netflowV9SamplesReceived;
  }

  // netflow_v9_samples_sent_for_detection - computed: false, optional: true, required: false
  private _netflowV9SamplesSentForDetection?: number; 
  public get netflowV9SamplesSentForDetection() {
    return this.getNumberAttribute('netflow_v9_samples_sent_for_detection');
  }
  public set netflowV9SamplesSentForDetection(value: number) {
    this._netflowV9SamplesSentForDetection = value;
  }
  public resetNetflowV9SamplesSentForDetection() {
    this._netflowV9SamplesSentForDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV9SamplesSentForDetectionInput() {
    return this._netflowV9SamplesSentForDetection;
  }

  // sflow_disabled - computed: false, optional: true, required: false
  private _sflowDisabled?: number; 
  public get sflowDisabled() {
    return this.getNumberAttribute('sflow_disabled');
  }
  public set sflowDisabled(value: number) {
    this._sflowDisabled = value;
  }
  public resetSflowDisabled() {
    this._sflowDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowDisabledInput() {
    return this._sflowDisabled;
  }

  // sflow_packets_received - computed: false, optional: true, required: false
  private _sflowPacketsReceived?: number; 
  public get sflowPacketsReceived() {
    return this.getNumberAttribute('sflow_packets_received');
  }
  public set sflowPacketsReceived(value: number) {
    this._sflowPacketsReceived = value;
  }
  public resetSflowPacketsReceived() {
    this._sflowPacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowPacketsReceivedInput() {
    return this._sflowPacketsReceived;
  }

  // sflow_sample_ipv6_hdr_parse_fail - computed: false, optional: true, required: false
  private _sflowSampleIpv6HdrParseFail?: number; 
  public get sflowSampleIpv6HdrParseFail() {
    return this.getNumberAttribute('sflow_sample_ipv6_hdr_parse_fail');
  }
  public set sflowSampleIpv6HdrParseFail(value: number) {
    this._sflowSampleIpv6HdrParseFail = value;
  }
  public resetSflowSampleIpv6HdrParseFail() {
    this._sflowSampleIpv6HdrParseFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSampleIpv6HdrParseFailInput() {
    return this._sflowSampleIpv6HdrParseFail;
  }

  // sflow_sample_record_bad_len - computed: false, optional: true, required: false
  private _sflowSampleRecordBadLen?: number; 
  public get sflowSampleRecordBadLen() {
    return this.getNumberAttribute('sflow_sample_record_bad_len');
  }
  public set sflowSampleRecordBadLen(value: number) {
    this._sflowSampleRecordBadLen = value;
  }
  public resetSflowSampleRecordBadLen() {
    this._sflowSampleRecordBadLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSampleRecordBadLenInput() {
    return this._sflowSampleRecordBadLen;
  }

  // sflow_sample_record_invalid_layer2 - computed: false, optional: true, required: false
  private _sflowSampleRecordInvalidLayer2?: number; 
  public get sflowSampleRecordInvalidLayer2() {
    return this.getNumberAttribute('sflow_sample_record_invalid_layer2');
  }
  public set sflowSampleRecordInvalidLayer2(value: number) {
    this._sflowSampleRecordInvalidLayer2 = value;
  }
  public resetSflowSampleRecordInvalidLayer2() {
    this._sflowSampleRecordInvalidLayer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSampleRecordInvalidLayer2Input() {
    return this._sflowSampleRecordInvalidLayer2;
  }

  // sflow_samples_bad_len - computed: false, optional: true, required: false
  private _sflowSamplesBadLen?: number; 
  public get sflowSamplesBadLen() {
    return this.getNumberAttribute('sflow_samples_bad_len');
  }
  public set sflowSamplesBadLen(value: number) {
    this._sflowSamplesBadLen = value;
  }
  public resetSflowSamplesBadLen() {
    this._sflowSamplesBadLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSamplesBadLenInput() {
    return this._sflowSamplesBadLen;
  }

  // sflow_samples_non_std - computed: false, optional: true, required: false
  private _sflowSamplesNonStd?: number; 
  public get sflowSamplesNonStd() {
    return this.getNumberAttribute('sflow_samples_non_std');
  }
  public set sflowSamplesNonStd(value: number) {
    this._sflowSamplesNonStd = value;
  }
  public resetSflowSamplesNonStd() {
    this._sflowSamplesNonStd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSamplesNonStdInput() {
    return this._sflowSamplesNonStd;
  }

  // sflow_samples_received - computed: false, optional: true, required: false
  private _sflowSamplesReceived?: number; 
  public get sflowSamplesReceived() {
    return this.getNumberAttribute('sflow_samples_received');
  }
  public set sflowSamplesReceived(value: number) {
    this._sflowSamplesReceived = value;
  }
  public resetSflowSamplesReceived() {
    this._sflowSamplesReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSamplesReceivedInput() {
    return this._sflowSamplesReceived;
  }

  // sflow_samples_sent_for_detection - computed: false, optional: true, required: false
  private _sflowSamplesSentForDetection?: number; 
  public get sflowSamplesSentForDetection() {
    return this.getNumberAttribute('sflow_samples_sent_for_detection');
  }
  public set sflowSamplesSentForDetection(value: number) {
    this._sflowSamplesSentForDetection = value;
  }
  public resetSflowSamplesSentForDetection() {
    this._sflowSamplesSentForDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSamplesSentForDetectionInput() {
    return this._sflowSamplesSentForDetection;
  }

  // sflow_samples_skipped - computed: false, optional: true, required: false
  private _sflowSamplesSkipped?: number; 
  public get sflowSamplesSkipped() {
    return this.getNumberAttribute('sflow_samples_skipped');
  }
  public set sflowSamplesSkipped(value: number) {
    this._sflowSamplesSkipped = value;
  }
  public resetSflowSamplesSkipped() {
    this._sflowSamplesSkipped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSamplesSkippedInput() {
    return this._sflowSamplesSkipped;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats thunder_visibility_monitor_agent_stats}
*/
export class DataThunderVisibilityMonitorAgentStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_monitor_agent_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityMonitorAgentStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityMonitorAgentStats to import
  * @param importFromId The id of the existing DataThunderVisibilityMonitorAgentStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityMonitorAgentStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_monitor_agent_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_monitor_agent_stats thunder_visibility_monitor_agent_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityMonitorAgentStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityMonitorAgentStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_monitor_agent_stats',
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
    this._agentName = config.agentName;
    this._id = config.id;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_name - computed: false, optional: false, required: true
  private _agentName?: string; 
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string) {
    this._agentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityMonitorAgentStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityMonitorAgentStatsStats) {
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
      agent_name: cdktf.stringToTerraform(this._agentName),
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderVisibilityMonitorAgentStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_name: {
        value: cdktf.stringToHclTerraform(this._agentName),
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
      stats: {
        value: dataThunderVisibilityMonitorAgentStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonitorAgentStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
