// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderEventNotificationKafkaServerStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#id DataThunderEventNotificationKafkaServerStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#stats DataThunderEventNotificationKafkaServerStats#stats}
  */
  readonly stats?: DataThunderEventNotificationKafkaServerStatsStats;
}
export interface DataThunderEventNotificationKafkaServerStatsStats {
  /**
  * Analytics bus restart count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#analytics_bus_restart DataThunderEventNotificationKafkaServerStats#analytics_bus_restart}
  */
  readonly analyticsBusRestart?: number;
  /**
  * Device Status Metrics sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#avro_device_status_topic DataThunderEventNotificationKafkaServerStats#avro_device_status_topic}
  */
  readonly avroDeviceStatusTopic?: number;
  /**
  * Device Status dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#avro_device_status_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#avro_device_status_topic_dequeue_err}
  */
  readonly avroDeviceStatusTopicDequeueErr?: number;
  /**
  * Device Status dropped,enq error on acos queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#avro_device_status_topic_enqueue_err DataThunderEventNotificationKafkaServerStats#avro_device_status_topic_enqueue_err}
  */
  readonly avroDeviceStatusTopicEnqueueErr?: number;
  /**
  * Generic Metrics dropped,encoding error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#avro_generic_failed_encoding DataThunderEventNotificationKafkaServerStats#avro_generic_failed_encoding}
  */
  readonly avroGenericFailedEncoding?: number;
  /**
  * Generic Metrics dropped,sending failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#avro_generic_failed_sending DataThunderEventNotificationKafkaServerStats#avro_generic_failed_sending}
  */
  readonly avroGenericFailedSending?: number;
  /**
  * Generic Metrics sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#avro_generic_sent DataThunderEventNotificationKafkaServerStats#avro_generic_sent}
  */
  readonly avroGenericSent?: number;
  /**
  * Partition Metrics sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#avro_partition_metrics_topic DataThunderEventNotificationKafkaServerStats#avro_partition_metrics_topic}
  */
  readonly avroPartitionMetricsTopic?: number;
  /**
  * Part metrics dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#avro_partition_metrics_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#avro_partition_metrics_topic_dequeue_err}
  */
  readonly avroPartitionMetricsTopicDequeueErr?: number;
  /**
  * Part metrics dropped,enq error on acos queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#avro_partition_metrics_topic_enqueue_err DataThunderEventNotificationKafkaServerStats#avro_partition_metrics_topic_enqueue_err}
  */
  readonly avroPartitionMetricsTopicEnqueueErr?: number;
  /**
  * System Environmet dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#avro_system_env_dequeue_err DataThunderEventNotificationKafkaServerStats#avro_system_env_dequeue_err}
  */
  readonly avroSystemEnvDequeueErr?: number;
  /**
  * System environment sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#avro_system_env_topic DataThunderEventNotificationKafkaServerStats#avro_system_env_topic}
  */
  readonly avroSystemEnvTopic?: number;
  /**
  * Cert-pinning candidate list sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#cert_pinning_list_topic DataThunderEventNotificationKafkaServerStats#cert_pinning_list_topic}
  */
  readonly certPinningListTopic?: number;
  /**
  * Cert-pinning candidate list dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#cert_pinning_list_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#cert_pinning_list_topic_dequeue_err}
  */
  readonly certPinningListTopicDequeueErr?: number;
  /**
  * CGN PC logs sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#cgn_pc_acos_harmony_topic DataThunderEventNotificationKafkaServerStats#cgn_pc_acos_harmony_topic}
  */
  readonly cgnPcAcosHarmonyTopic?: number;
  /**
  * CGN PC logs dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#cgn_pc_acos_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#cgn_pc_acos_harmony_topic_dequeue_err}
  */
  readonly cgnPcAcosHarmonyTopicDequeueErr?: number;
  /**
  * CGN PE logs sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#cgn_pe_acos_harmony_topic DataThunderEventNotificationKafkaServerStats#cgn_pe_acos_harmony_topic}
  */
  readonly cgnPeAcosHarmonyTopic?: number;
  /**
  * CGN PE logs dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#cgn_pe_acos_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#cgn_pe_acos_harmony_topic_dequeue_err}
  */
  readonly cgnPeAcosHarmonyTopicDequeueErr?: number;
  /**
  * CGN Port Usage Histogram HC Export
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#cgn_port_usage_hstgrm_acos_harmony_topic DataThunderEventNotificationKafkaServerStats#cgn_port_usage_hstgrm_acos_harmony_topic}
  */
  readonly cgnPortUsageHstgrmAcosHarmonyTopic?: number;
  /**
  * CGN Port Usage Histogram HC Export Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#cgn_port_usage_hstgrm_acos_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#cgn_port_usage_hstgrm_acos_harmony_topic_dequeue_err}
  */
  readonly cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr?: number;
  /**
  * CGN PE logs sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#cgn_summary_error_acos_harmony_topic DataThunderEventNotificationKafkaServerStats#cgn_summary_error_acos_harmony_topic}
  */
  readonly cgnSummaryErrorAcosHarmonyTopic?: number;
  /**
  * CGN PE logs dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#cgn_summary_error_acos_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#cgn_summary_error_acos_harmony_topic_dequeue_err}
  */
  readonly cgnSummaryErrorAcosHarmonyTopicDequeueErr?: number;
  /**
  * FW DENY PC logs sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#fw_deny_pc_acos_harmony_topic DataThunderEventNotificationKafkaServerStats#fw_deny_pc_acos_harmony_topic}
  */
  readonly fwDenyPcAcosHarmonyTopic?: number;
  /**
  * FW DENY PC logs dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#fw_deny_pc_acos_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#fw_deny_pc_acos_harmony_topic_dequeue_err}
  */
  readonly fwDenyPcAcosHarmonyTopicDequeueErr?: number;
  /**
  * FW PC logs sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#fw_pc_acos_harmony_topic DataThunderEventNotificationKafkaServerStats#fw_pc_acos_harmony_topic}
  */
  readonly fwPcAcosHarmonyTopic?: number;
  /**
  * FW PC logs dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#fw_pc_acos_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#fw_pc_acos_harmony_topic_dequeue_err}
  */
  readonly fwPcAcosHarmonyTopicDequeueErr?: number;
  /**
  * FW RST PC logs sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#fw_rst_pc_acos_harmony_topic DataThunderEventNotificationKafkaServerStats#fw_rst_pc_acos_harmony_topic}
  */
  readonly fwRstPcAcosHarmonyTopic?: number;
  /**
  * FW RST PC logs dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#fw_rst_pc_acos_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#fw_rst_pc_acos_harmony_topic_dequeue_err}
  */
  readonly fwRstPcAcosHarmonyTopicDequeueErr?: number;
  /**
  * HC counters dropped from blade (uuid or size mismatch)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#hc_counters_dropped_from_blade DataThunderEventNotificationKafkaServerStats#hc_counters_dropped_from_blade}
  */
  readonly hcCountersDroppedFromBlade?: number;
  /**
  * HC counters received from blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#hc_counters_received_from_blade DataThunderEventNotificationKafkaServerStats#hc_counters_received_from_blade}
  */
  readonly hcCountersReceivedFromBlade?: number;
  /**
  * HC counters sent to master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#hc_counters_sent_to_master DataThunderEventNotificationKafkaServerStats#hc_counters_sent_to_master}
  */
  readonly hcCountersSentToMaster?: number;
  /**
  * HC logs received from blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#hc_logs_received_from_blade DataThunderEventNotificationKafkaServerStats#hc_logs_received_from_blade}
  */
  readonly hcLogsReceivedFromBlade?: number;
  /**
  * HC logs sent to master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#hc_logs_sent_to_master DataThunderEventNotificationKafkaServerStats#hc_logs_sent_to_master}
  */
  readonly hcLogsSentToMaster?: number;
  /**
  * HC oper received from blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#hc_oper_received_from_blade DataThunderEventNotificationKafkaServerStats#hc_oper_received_from_blade}
  */
  readonly hcOperReceivedFromBlade?: number;
  /**
  * HC oper to master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#hc_oper_sent_to_master DataThunderEventNotificationKafkaServerStats#hc_oper_sent_to_master}
  */
  readonly hcOperSentToMaster?: number;
  /**
  * Messages dropped,analytics down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#kafka_broker_down DataThunderEventNotificationKafkaServerStats#kafka_broker_down}
  */
  readonly kafkaBrokerDown?: number;
  /**
  * Messages dropped,acos analytics queue full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#kafka_queue_full_err DataThunderEventNotificationKafkaServerStats#kafka_queue_full_err}
  */
  readonly kafkaQueueFullErr?: number;
  /**
  * Module not supported by analytics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#kafka_topic_error DataThunderEventNotificationKafkaServerStats#kafka_topic_error}
  */
  readonly kafkaTopicError?: number;
  /**
  * Unknown type dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#kafka_unknown_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#kafka_unknown_topic_dequeue_err}
  */
  readonly kafkaUnknownTopicDequeueErr?: number;
  /**
  * Metrics dropped,missing partition tenant mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#metrics_dropped_pt_missing DataThunderEventNotificationKafkaServerStats#metrics_dropped_pt_missing}
  */
  readonly metricsDroppedPtMissing?: number;
  /**
  * NGWAF HC PE export
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#ngwaf_hc_ep_topic DataThunderEventNotificationKafkaServerStats#ngwaf_hc_ep_topic}
  */
  readonly ngwafHcEpTopic?: number;
  /**
  * NGWAF HC PE export failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#ngwaf_hc_ep_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#ngwaf_hc_ep_topic_dequeue_err}
  */
  readonly ngwafHcEpTopicDequeueErr?: number;
  /**
  * NGWAF HC metrics export
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#ngwaf_hc_metrics_topic DataThunderEventNotificationKafkaServerStats#ngwaf_hc_metrics_topic}
  */
  readonly ngwafHcMetricsTopic?: number;
  /**
  * NGWAF HC metrics export failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#ngwaf_hc_metrics_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#ngwaf_hc_metrics_topic_dequeue_err}
  */
  readonly ngwafHcMetricsTopicDequeueErr?: number;
  /**
  * L4 PC logs sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pc_acos_harmony_topic DataThunderEventNotificationKafkaServerStats#pc_acos_harmony_topic}
  */
  readonly pcAcosHarmonyTopic?: number;
  /**
  * L4 PC logs dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pc_acos_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#pc_acos_harmony_topic_dequeue_err}
  */
  readonly pcAcosHarmonyTopicDequeueErr?: number;
  /**
  * L4 PC logs dropped,encoding error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pc_encoding_failed DataThunderEventNotificationKafkaServerStats#pc_encoding_failed}
  */
  readonly pcEncodingFailed?: number;
  /**
  * L4 PC logs dropped,throttling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pc_throttle_drop DataThunderEventNotificationKafkaServerStats#pc_throttle_drop}
  */
  readonly pcThrottleDrop?: number;
  /**
  * L7 PE logs sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pe_acos_harmony_topic DataThunderEventNotificationKafkaServerStats#pe_acos_harmony_topic}
  */
  readonly peAcosHarmonyTopic?: number;
  /**
  * L7 PE dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pe_acos_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#pe_acos_harmony_topic_dequeue_err}
  */
  readonly peAcosHarmonyTopicDequeueErr?: number;
  /**
  * L7 PE dropped,enq error on acos queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pe_acos_harmony_topic_enqueue_err DataThunderEventNotificationKafkaServerStats#pe_acos_harmony_topic_enqueue_err}
  */
  readonly peAcosHarmonyTopicEnqueueErr?: number;
  /**
  * L7 PR logs sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pr_acos_harmony_topic DataThunderEventNotificationKafkaServerStats#pr_acos_harmony_topic}
  */
  readonly prAcosHarmonyTopic?: number;
  /**
  * L7 PR dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pr_acos_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#pr_acos_harmony_topic_dequeue_err}
  */
  readonly prAcosHarmonyTopicDequeueErr?: number;
  /**
  * L7 PR dropped,enq error on acos queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pr_acos_harmony_topic_enqueue_err DataThunderEventNotificationKafkaServerStats#pr_acos_harmony_topic_enqueue_err}
  */
  readonly prAcosHarmonyTopicEnqueueErr?: number;
  /**
  * L7 PR back-end ttfb is negative
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pr_be_ttfb_anomaly DataThunderEventNotificationKafkaServerStats#pr_be_ttfb_anomaly}
  */
  readonly prBeTtfbAnomaly?: number;
  /**
  * L7 PR back-end ttlb is negative
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pr_be_ttlb_anomaly DataThunderEventNotificationKafkaServerStats#pr_be_ttlb_anomaly}
  */
  readonly prBeTtlbAnomaly?: number;
  /**
  * L7 PR on latency negative
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pr_in_latency_anomaly DataThunderEventNotificationKafkaServerStats#pr_in_latency_anomaly}
  */
  readonly prInLatencyAnomaly?: number;
  /**
  * L7 PR on latency threshold exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pr_in_latency_threshold_exceed DataThunderEventNotificationKafkaServerStats#pr_in_latency_threshold_exceed}
  */
  readonly prInLatencyThresholdExceed?: number;
  /**
  * L7 PR dropped, not allowed to be sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pr_not_allowed_drop DataThunderEventNotificationKafkaServerStats#pr_not_allowed_drop}
  */
  readonly prNotAllowedDrop?: number;
  /**
  * L7 PR out latency negative
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pr_out_latency_anomaly DataThunderEventNotificationKafkaServerStats#pr_out_latency_anomaly}
  */
  readonly prOutLatencyAnomaly?: number;
  /**
  * L7 PR out latency threshold exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pr_out_latency_threshold_exceed DataThunderEventNotificationKafkaServerStats#pr_out_latency_threshold_exceed}
  */
  readonly prOutLatencyThresholdExceed?: number;
  /**
  * L7 PR dropped,log throttling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#pr_throttle_drop DataThunderEventNotificationKafkaServerStats#pr_throttle_drop}
  */
  readonly prThrottleDrop?: number;
  /**
  * AppFW metrics sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#rule_set_application_metrics_topic DataThunderEventNotificationKafkaServerStats#rule_set_application_metrics_topic}
  */
  readonly ruleSetApplicationMetricsTopic?: number;
  /**
  * AppFW metrics dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#rule_set_application_metrics_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#rule_set_application_metrics_topic_dequeue_err}
  */
  readonly ruleSetApplicationMetricsTopicDequeueErr?: number;
  /**
  * Client SSL metrics sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#slb_client_ssl_counters_metrics_topic DataThunderEventNotificationKafkaServerStats#slb_client_ssl_counters_metrics_topic}
  */
  readonly slbClientSslCountersMetricsTopic?: number;
  /**
  * Cilent SSL metrics dropped,enq error analytics qs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#slb_client_ssl_counters_metrics_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#slb_client_ssl_counters_metrics_topic_dequeue_err}
  */
  readonly slbClientSslCountersMetricsTopicDequeueErr?: number;
  /**
  * Server SSL metrics sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#slb_server_ssl_counters_metrics_topic DataThunderEventNotificationKafkaServerStats#slb_server_ssl_counters_metrics_topic}
  */
  readonly slbServerSslCountersMetricsTopic?: number;
  /**
  * Server SSL metrics dropped,enq error analytics qs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#slb_server_ssl_counters_metrics_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#slb_server_ssl_counters_metrics_topic_dequeue_err}
  */
  readonly slbServerSslCountersMetricsTopicDequeueErr?: number;
  /**
  * SSL metrics sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#slb_ssl_stats_metrics_topic DataThunderEventNotificationKafkaServerStats#slb_ssl_stats_metrics_topic}
  */
  readonly slbSslStatsMetricsTopic?: number;
  /**
  * SSL metrics dropped,enq error analytics queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#slb_ssl_stats_metrics_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#slb_ssl_stats_metrics_topic_dequeue_err}
  */
  readonly slbSslStatsMetricsTopicDequeueErr?: number;
  /**
  * SSLi PC topic counter from acos to harmony
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#ssli_pc_acos_harmony_topic DataThunderEventNotificationKafkaServerStats#ssli_pc_acos_harmony_topic}
  */
  readonly ssliPcAcosHarmonyTopic?: number;
  /**
  * SSLi PC topic to harmony dequeue error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#ssli_pc_acos_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#ssli_pc_acos_harmony_topic_dequeue_err}
  */
  readonly ssliPcAcosHarmonyTopicDequeueErr?: number;
  /**
  * SSLi PE topic counter from acos to harmony
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#ssli_pe_acos_harmony_topic DataThunderEventNotificationKafkaServerStats#ssli_pe_acos_harmony_topic}
  */
  readonly ssliPeAcosHarmonyTopic?: number;
  /**
  * SSLi PE topic to harmony dequeue error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#ssli_pe_acos_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#ssli_pe_acos_harmony_topic_dequeue_err}
  */
  readonly ssliPeAcosHarmonyTopicDequeueErr?: number;
  /**
  * Visibility TopN sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#visibility_topn_harmony_topic DataThunderEventNotificationKafkaServerStats#visibility_topn_harmony_topic}
  */
  readonly visibilityTopnHarmonyTopic?: number;
  /**
  * Visibility TopN metrics dropped,enq error analytics qs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#visibility_topn_harmony_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#visibility_topn_harmony_topic_dequeue_err}
  */
  readonly visibilityTopnHarmonyTopicDequeueErr?: number;
  /**
  * IKE gateway metrics sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#vpn_ike_gateway_metrics_topic DataThunderEventNotificationKafkaServerStats#vpn_ike_gateway_metrics_topic}
  */
  readonly vpnIkeGatewayMetricsTopic?: number;
  /**
  * IKE gateway metrics dropped,enq error analytics qs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#vpn_ike_gateway_metrics_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#vpn_ike_gateway_metrics_topic_dequeue_err}
  */
  readonly vpnIkeGatewayMetricsTopicDequeueErr?: number;
  /**
  * IPSec SA metrics sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#vpn_ipsec_sa_metrics_topic DataThunderEventNotificationKafkaServerStats#vpn_ipsec_sa_metrics_topic}
  */
  readonly vpnIpsecSaMetricsTopic?: number;
  /**
  * IPSec SA metrics dropped,enq error analytics qs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#vpn_ipsec_sa_metrics_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#vpn_ipsec_sa_metrics_topic_dequeue_err}
  */
  readonly vpnIpsecSaMetricsTopicDequeueErr?: number;
  /**
  * VPN STATS metrics sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#vpn_stats_metrics_topic DataThunderEventNotificationKafkaServerStats#vpn_stats_metrics_topic}
  */
  readonly vpnStatsMetricsTopic?: number;
  /**
  * VPN STATS metrics dropped,enq error analytics qs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#vpn_stats_metrics_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#vpn_stats_metrics_topic_dequeue_err}
  */
  readonly vpnStatsMetricsTopicDequeueErr?: number;
  /**
  * WAF events topic counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#waf_events_topic DataThunderEventNotificationKafkaServerStats#waf_events_topic}
  */
  readonly wafEventsTopic?: number;
  /**
  * WAF events metrics dropped,enq error analytics qs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#waf_events_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#waf_events_topic_dequeue_err}
  */
  readonly wafEventsTopicDequeueErr?: number;
  /**
  * WAF learn topic counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#waf_learn_pr_topic DataThunderEventNotificationKafkaServerStats#waf_learn_pr_topic}
  */
  readonly wafLearnPrTopic?: number;
  /**
  * WAF learn metrics dropped,enq error analytics qs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#waf_learn_pr_topic_dequeue_err DataThunderEventNotificationKafkaServerStats#waf_learn_pr_topic_dequeue_err}
  */
  readonly wafLearnPrTopicDequeueErr?: number;
}

export function dataThunderEventNotificationKafkaServerStatsStatsToTerraform(struct?: DataThunderEventNotificationKafkaServerStatsStatsOutputReference | DataThunderEventNotificationKafkaServerStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analytics_bus_restart: cdktf.numberToTerraform(struct!.analyticsBusRestart),
    avro_device_status_topic: cdktf.numberToTerraform(struct!.avroDeviceStatusTopic),
    avro_device_status_topic_dequeue_err: cdktf.numberToTerraform(struct!.avroDeviceStatusTopicDequeueErr),
    avro_device_status_topic_enqueue_err: cdktf.numberToTerraform(struct!.avroDeviceStatusTopicEnqueueErr),
    avro_generic_failed_encoding: cdktf.numberToTerraform(struct!.avroGenericFailedEncoding),
    avro_generic_failed_sending: cdktf.numberToTerraform(struct!.avroGenericFailedSending),
    avro_generic_sent: cdktf.numberToTerraform(struct!.avroGenericSent),
    avro_partition_metrics_topic: cdktf.numberToTerraform(struct!.avroPartitionMetricsTopic),
    avro_partition_metrics_topic_dequeue_err: cdktf.numberToTerraform(struct!.avroPartitionMetricsTopicDequeueErr),
    avro_partition_metrics_topic_enqueue_err: cdktf.numberToTerraform(struct!.avroPartitionMetricsTopicEnqueueErr),
    avro_system_env_dequeue_err: cdktf.numberToTerraform(struct!.avroSystemEnvDequeueErr),
    avro_system_env_topic: cdktf.numberToTerraform(struct!.avroSystemEnvTopic),
    cert_pinning_list_topic: cdktf.numberToTerraform(struct!.certPinningListTopic),
    cert_pinning_list_topic_dequeue_err: cdktf.numberToTerraform(struct!.certPinningListTopicDequeueErr),
    cgn_pc_acos_harmony_topic: cdktf.numberToTerraform(struct!.cgnPcAcosHarmonyTopic),
    cgn_pc_acos_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.cgnPcAcosHarmonyTopicDequeueErr),
    cgn_pe_acos_harmony_topic: cdktf.numberToTerraform(struct!.cgnPeAcosHarmonyTopic),
    cgn_pe_acos_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.cgnPeAcosHarmonyTopicDequeueErr),
    cgn_port_usage_hstgrm_acos_harmony_topic: cdktf.numberToTerraform(struct!.cgnPortUsageHstgrmAcosHarmonyTopic),
    cgn_port_usage_hstgrm_acos_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr),
    cgn_summary_error_acos_harmony_topic: cdktf.numberToTerraform(struct!.cgnSummaryErrorAcosHarmonyTopic),
    cgn_summary_error_acos_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.cgnSummaryErrorAcosHarmonyTopicDequeueErr),
    fw_deny_pc_acos_harmony_topic: cdktf.numberToTerraform(struct!.fwDenyPcAcosHarmonyTopic),
    fw_deny_pc_acos_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.fwDenyPcAcosHarmonyTopicDequeueErr),
    fw_pc_acos_harmony_topic: cdktf.numberToTerraform(struct!.fwPcAcosHarmonyTopic),
    fw_pc_acos_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.fwPcAcosHarmonyTopicDequeueErr),
    fw_rst_pc_acos_harmony_topic: cdktf.numberToTerraform(struct!.fwRstPcAcosHarmonyTopic),
    fw_rst_pc_acos_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.fwRstPcAcosHarmonyTopicDequeueErr),
    hc_counters_dropped_from_blade: cdktf.numberToTerraform(struct!.hcCountersDroppedFromBlade),
    hc_counters_received_from_blade: cdktf.numberToTerraform(struct!.hcCountersReceivedFromBlade),
    hc_counters_sent_to_master: cdktf.numberToTerraform(struct!.hcCountersSentToMaster),
    hc_logs_received_from_blade: cdktf.numberToTerraform(struct!.hcLogsReceivedFromBlade),
    hc_logs_sent_to_master: cdktf.numberToTerraform(struct!.hcLogsSentToMaster),
    hc_oper_received_from_blade: cdktf.numberToTerraform(struct!.hcOperReceivedFromBlade),
    hc_oper_sent_to_master: cdktf.numberToTerraform(struct!.hcOperSentToMaster),
    kafka_broker_down: cdktf.numberToTerraform(struct!.kafkaBrokerDown),
    kafka_queue_full_err: cdktf.numberToTerraform(struct!.kafkaQueueFullErr),
    kafka_topic_error: cdktf.numberToTerraform(struct!.kafkaTopicError),
    kafka_unknown_topic_dequeue_err: cdktf.numberToTerraform(struct!.kafkaUnknownTopicDequeueErr),
    metrics_dropped_pt_missing: cdktf.numberToTerraform(struct!.metricsDroppedPtMissing),
    ngwaf_hc_ep_topic: cdktf.numberToTerraform(struct!.ngwafHcEpTopic),
    ngwaf_hc_ep_topic_dequeue_err: cdktf.numberToTerraform(struct!.ngwafHcEpTopicDequeueErr),
    ngwaf_hc_metrics_topic: cdktf.numberToTerraform(struct!.ngwafHcMetricsTopic),
    ngwaf_hc_metrics_topic_dequeue_err: cdktf.numberToTerraform(struct!.ngwafHcMetricsTopicDequeueErr),
    pc_acos_harmony_topic: cdktf.numberToTerraform(struct!.pcAcosHarmonyTopic),
    pc_acos_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.pcAcosHarmonyTopicDequeueErr),
    pc_encoding_failed: cdktf.numberToTerraform(struct!.pcEncodingFailed),
    pc_throttle_drop: cdktf.numberToTerraform(struct!.pcThrottleDrop),
    pe_acos_harmony_topic: cdktf.numberToTerraform(struct!.peAcosHarmonyTopic),
    pe_acos_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.peAcosHarmonyTopicDequeueErr),
    pe_acos_harmony_topic_enqueue_err: cdktf.numberToTerraform(struct!.peAcosHarmonyTopicEnqueueErr),
    pr_acos_harmony_topic: cdktf.numberToTerraform(struct!.prAcosHarmonyTopic),
    pr_acos_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.prAcosHarmonyTopicDequeueErr),
    pr_acos_harmony_topic_enqueue_err: cdktf.numberToTerraform(struct!.prAcosHarmonyTopicEnqueueErr),
    pr_be_ttfb_anomaly: cdktf.numberToTerraform(struct!.prBeTtfbAnomaly),
    pr_be_ttlb_anomaly: cdktf.numberToTerraform(struct!.prBeTtlbAnomaly),
    pr_in_latency_anomaly: cdktf.numberToTerraform(struct!.prInLatencyAnomaly),
    pr_in_latency_threshold_exceed: cdktf.numberToTerraform(struct!.prInLatencyThresholdExceed),
    pr_not_allowed_drop: cdktf.numberToTerraform(struct!.prNotAllowedDrop),
    pr_out_latency_anomaly: cdktf.numberToTerraform(struct!.prOutLatencyAnomaly),
    pr_out_latency_threshold_exceed: cdktf.numberToTerraform(struct!.prOutLatencyThresholdExceed),
    pr_throttle_drop: cdktf.numberToTerraform(struct!.prThrottleDrop),
    rule_set_application_metrics_topic: cdktf.numberToTerraform(struct!.ruleSetApplicationMetricsTopic),
    rule_set_application_metrics_topic_dequeue_err: cdktf.numberToTerraform(struct!.ruleSetApplicationMetricsTopicDequeueErr),
    slb_client_ssl_counters_metrics_topic: cdktf.numberToTerraform(struct!.slbClientSslCountersMetricsTopic),
    slb_client_ssl_counters_metrics_topic_dequeue_err: cdktf.numberToTerraform(struct!.slbClientSslCountersMetricsTopicDequeueErr),
    slb_server_ssl_counters_metrics_topic: cdktf.numberToTerraform(struct!.slbServerSslCountersMetricsTopic),
    slb_server_ssl_counters_metrics_topic_dequeue_err: cdktf.numberToTerraform(struct!.slbServerSslCountersMetricsTopicDequeueErr),
    slb_ssl_stats_metrics_topic: cdktf.numberToTerraform(struct!.slbSslStatsMetricsTopic),
    slb_ssl_stats_metrics_topic_dequeue_err: cdktf.numberToTerraform(struct!.slbSslStatsMetricsTopicDequeueErr),
    ssli_pc_acos_harmony_topic: cdktf.numberToTerraform(struct!.ssliPcAcosHarmonyTopic),
    ssli_pc_acos_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.ssliPcAcosHarmonyTopicDequeueErr),
    ssli_pe_acos_harmony_topic: cdktf.numberToTerraform(struct!.ssliPeAcosHarmonyTopic),
    ssli_pe_acos_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.ssliPeAcosHarmonyTopicDequeueErr),
    visibility_topn_harmony_topic: cdktf.numberToTerraform(struct!.visibilityTopnHarmonyTopic),
    visibility_topn_harmony_topic_dequeue_err: cdktf.numberToTerraform(struct!.visibilityTopnHarmonyTopicDequeueErr),
    vpn_ike_gateway_metrics_topic: cdktf.numberToTerraform(struct!.vpnIkeGatewayMetricsTopic),
    vpn_ike_gateway_metrics_topic_dequeue_err: cdktf.numberToTerraform(struct!.vpnIkeGatewayMetricsTopicDequeueErr),
    vpn_ipsec_sa_metrics_topic: cdktf.numberToTerraform(struct!.vpnIpsecSaMetricsTopic),
    vpn_ipsec_sa_metrics_topic_dequeue_err: cdktf.numberToTerraform(struct!.vpnIpsecSaMetricsTopicDequeueErr),
    vpn_stats_metrics_topic: cdktf.numberToTerraform(struct!.vpnStatsMetricsTopic),
    vpn_stats_metrics_topic_dequeue_err: cdktf.numberToTerraform(struct!.vpnStatsMetricsTopicDequeueErr),
    waf_events_topic: cdktf.numberToTerraform(struct!.wafEventsTopic),
    waf_events_topic_dequeue_err: cdktf.numberToTerraform(struct!.wafEventsTopicDequeueErr),
    waf_learn_pr_topic: cdktf.numberToTerraform(struct!.wafLearnPrTopic),
    waf_learn_pr_topic_dequeue_err: cdktf.numberToTerraform(struct!.wafLearnPrTopicDequeueErr),
  }
}


export function dataThunderEventNotificationKafkaServerStatsStatsToHclTerraform(struct?: DataThunderEventNotificationKafkaServerStatsStatsOutputReference | DataThunderEventNotificationKafkaServerStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analytics_bus_restart: {
      value: cdktf.numberToHclTerraform(struct!.analyticsBusRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avro_device_status_topic: {
      value: cdktf.numberToHclTerraform(struct!.avroDeviceStatusTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avro_device_status_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.avroDeviceStatusTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avro_device_status_topic_enqueue_err: {
      value: cdktf.numberToHclTerraform(struct!.avroDeviceStatusTopicEnqueueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avro_generic_failed_encoding: {
      value: cdktf.numberToHclTerraform(struct!.avroGenericFailedEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avro_generic_failed_sending: {
      value: cdktf.numberToHclTerraform(struct!.avroGenericFailedSending),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avro_generic_sent: {
      value: cdktf.numberToHclTerraform(struct!.avroGenericSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avro_partition_metrics_topic: {
      value: cdktf.numberToHclTerraform(struct!.avroPartitionMetricsTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avro_partition_metrics_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.avroPartitionMetricsTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avro_partition_metrics_topic_enqueue_err: {
      value: cdktf.numberToHclTerraform(struct!.avroPartitionMetricsTopicEnqueueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avro_system_env_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.avroSystemEnvDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avro_system_env_topic: {
      value: cdktf.numberToHclTerraform(struct!.avroSystemEnvTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_pinning_list_topic: {
      value: cdktf.numberToHclTerraform(struct!.certPinningListTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_pinning_list_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.certPinningListTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cgn_pc_acos_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.cgnPcAcosHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cgn_pc_acos_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.cgnPcAcosHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cgn_pe_acos_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.cgnPeAcosHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cgn_pe_acos_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.cgnPeAcosHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cgn_port_usage_hstgrm_acos_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.cgnPortUsageHstgrmAcosHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cgn_port_usage_hstgrm_acos_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cgn_summary_error_acos_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.cgnSummaryErrorAcosHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cgn_summary_error_acos_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.cgnSummaryErrorAcosHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_deny_pc_acos_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.fwDenyPcAcosHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_deny_pc_acos_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.fwDenyPcAcosHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_pc_acos_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.fwPcAcosHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_pc_acos_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.fwPcAcosHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_rst_pc_acos_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.fwRstPcAcosHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_rst_pc_acos_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.fwRstPcAcosHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hc_counters_dropped_from_blade: {
      value: cdktf.numberToHclTerraform(struct!.hcCountersDroppedFromBlade),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hc_counters_received_from_blade: {
      value: cdktf.numberToHclTerraform(struct!.hcCountersReceivedFromBlade),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hc_counters_sent_to_master: {
      value: cdktf.numberToHclTerraform(struct!.hcCountersSentToMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hc_logs_received_from_blade: {
      value: cdktf.numberToHclTerraform(struct!.hcLogsReceivedFromBlade),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hc_logs_sent_to_master: {
      value: cdktf.numberToHclTerraform(struct!.hcLogsSentToMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hc_oper_received_from_blade: {
      value: cdktf.numberToHclTerraform(struct!.hcOperReceivedFromBlade),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hc_oper_sent_to_master: {
      value: cdktf.numberToHclTerraform(struct!.hcOperSentToMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_broker_down: {
      value: cdktf.numberToHclTerraform(struct!.kafkaBrokerDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_queue_full_err: {
      value: cdktf.numberToHclTerraform(struct!.kafkaQueueFullErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_topic_error: {
      value: cdktf.numberToHclTerraform(struct!.kafkaTopicError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_unknown_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.kafkaUnknownTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics_dropped_pt_missing: {
      value: cdktf.numberToHclTerraform(struct!.metricsDroppedPtMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ngwaf_hc_ep_topic: {
      value: cdktf.numberToHclTerraform(struct!.ngwafHcEpTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ngwaf_hc_ep_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.ngwafHcEpTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ngwaf_hc_metrics_topic: {
      value: cdktf.numberToHclTerraform(struct!.ngwafHcMetricsTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ngwaf_hc_metrics_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.ngwafHcMetricsTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pc_acos_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.pcAcosHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pc_acos_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.pcAcosHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pc_encoding_failed: {
      value: cdktf.numberToHclTerraform(struct!.pcEncodingFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pc_throttle_drop: {
      value: cdktf.numberToHclTerraform(struct!.pcThrottleDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pe_acos_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.peAcosHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pe_acos_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.peAcosHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pe_acos_harmony_topic_enqueue_err: {
      value: cdktf.numberToHclTerraform(struct!.peAcosHarmonyTopicEnqueueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pr_acos_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.prAcosHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pr_acos_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.prAcosHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pr_acos_harmony_topic_enqueue_err: {
      value: cdktf.numberToHclTerraform(struct!.prAcosHarmonyTopicEnqueueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pr_be_ttfb_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.prBeTtfbAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pr_be_ttlb_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.prBeTtlbAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pr_in_latency_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.prInLatencyAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pr_in_latency_threshold_exceed: {
      value: cdktf.numberToHclTerraform(struct!.prInLatencyThresholdExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pr_not_allowed_drop: {
      value: cdktf.numberToHclTerraform(struct!.prNotAllowedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pr_out_latency_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.prOutLatencyAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pr_out_latency_threshold_exceed: {
      value: cdktf.numberToHclTerraform(struct!.prOutLatencyThresholdExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pr_throttle_drop: {
      value: cdktf.numberToHclTerraform(struct!.prThrottleDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_set_application_metrics_topic: {
      value: cdktf.numberToHclTerraform(struct!.ruleSetApplicationMetricsTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_set_application_metrics_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.ruleSetApplicationMetricsTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_client_ssl_counters_metrics_topic: {
      value: cdktf.numberToHclTerraform(struct!.slbClientSslCountersMetricsTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_client_ssl_counters_metrics_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.slbClientSslCountersMetricsTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_server_ssl_counters_metrics_topic: {
      value: cdktf.numberToHclTerraform(struct!.slbServerSslCountersMetricsTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_server_ssl_counters_metrics_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.slbServerSslCountersMetricsTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_ssl_stats_metrics_topic: {
      value: cdktf.numberToHclTerraform(struct!.slbSslStatsMetricsTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_ssl_stats_metrics_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.slbSslStatsMetricsTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssli_pc_acos_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.ssliPcAcosHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssli_pc_acos_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.ssliPcAcosHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssli_pe_acos_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.ssliPeAcosHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssli_pe_acos_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.ssliPeAcosHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    visibility_topn_harmony_topic: {
      value: cdktf.numberToHclTerraform(struct!.visibilityTopnHarmonyTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    visibility_topn_harmony_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.visibilityTopnHarmonyTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_ike_gateway_metrics_topic: {
      value: cdktf.numberToHclTerraform(struct!.vpnIkeGatewayMetricsTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_ike_gateway_metrics_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.vpnIkeGatewayMetricsTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_ipsec_sa_metrics_topic: {
      value: cdktf.numberToHclTerraform(struct!.vpnIpsecSaMetricsTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_ipsec_sa_metrics_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.vpnIpsecSaMetricsTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_stats_metrics_topic: {
      value: cdktf.numberToHclTerraform(struct!.vpnStatsMetricsTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_stats_metrics_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.vpnStatsMetricsTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    waf_events_topic: {
      value: cdktf.numberToHclTerraform(struct!.wafEventsTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    waf_events_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.wafEventsTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    waf_learn_pr_topic: {
      value: cdktf.numberToHclTerraform(struct!.wafLearnPrTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    waf_learn_pr_topic_dequeue_err: {
      value: cdktf.numberToHclTerraform(struct!.wafLearnPrTopicDequeueErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderEventNotificationKafkaServerStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderEventNotificationKafkaServerStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyticsBusRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsBusRestart = this._analyticsBusRestart;
    }
    if (this._avroDeviceStatusTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroDeviceStatusTopic = this._avroDeviceStatusTopic;
    }
    if (this._avroDeviceStatusTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroDeviceStatusTopicDequeueErr = this._avroDeviceStatusTopicDequeueErr;
    }
    if (this._avroDeviceStatusTopicEnqueueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroDeviceStatusTopicEnqueueErr = this._avroDeviceStatusTopicEnqueueErr;
    }
    if (this._avroGenericFailedEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroGenericFailedEncoding = this._avroGenericFailedEncoding;
    }
    if (this._avroGenericFailedSending !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroGenericFailedSending = this._avroGenericFailedSending;
    }
    if (this._avroGenericSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroGenericSent = this._avroGenericSent;
    }
    if (this._avroPartitionMetricsTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroPartitionMetricsTopic = this._avroPartitionMetricsTopic;
    }
    if (this._avroPartitionMetricsTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroPartitionMetricsTopicDequeueErr = this._avroPartitionMetricsTopicDequeueErr;
    }
    if (this._avroPartitionMetricsTopicEnqueueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroPartitionMetricsTopicEnqueueErr = this._avroPartitionMetricsTopicEnqueueErr;
    }
    if (this._avroSystemEnvDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroSystemEnvDequeueErr = this._avroSystemEnvDequeueErr;
    }
    if (this._avroSystemEnvTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroSystemEnvTopic = this._avroSystemEnvTopic;
    }
    if (this._certPinningListTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPinningListTopic = this._certPinningListTopic;
    }
    if (this._certPinningListTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPinningListTopicDequeueErr = this._certPinningListTopicDequeueErr;
    }
    if (this._cgnPcAcosHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnPcAcosHarmonyTopic = this._cgnPcAcosHarmonyTopic;
    }
    if (this._cgnPcAcosHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnPcAcosHarmonyTopicDequeueErr = this._cgnPcAcosHarmonyTopicDequeueErr;
    }
    if (this._cgnPeAcosHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnPeAcosHarmonyTopic = this._cgnPeAcosHarmonyTopic;
    }
    if (this._cgnPeAcosHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnPeAcosHarmonyTopicDequeueErr = this._cgnPeAcosHarmonyTopicDequeueErr;
    }
    if (this._cgnPortUsageHstgrmAcosHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnPortUsageHstgrmAcosHarmonyTopic = this._cgnPortUsageHstgrmAcosHarmonyTopic;
    }
    if (this._cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr = this._cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr;
    }
    if (this._cgnSummaryErrorAcosHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnSummaryErrorAcosHarmonyTopic = this._cgnSummaryErrorAcosHarmonyTopic;
    }
    if (this._cgnSummaryErrorAcosHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnSummaryErrorAcosHarmonyTopicDequeueErr = this._cgnSummaryErrorAcosHarmonyTopicDequeueErr;
    }
    if (this._fwDenyPcAcosHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwDenyPcAcosHarmonyTopic = this._fwDenyPcAcosHarmonyTopic;
    }
    if (this._fwDenyPcAcosHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwDenyPcAcosHarmonyTopicDequeueErr = this._fwDenyPcAcosHarmonyTopicDequeueErr;
    }
    if (this._fwPcAcosHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwPcAcosHarmonyTopic = this._fwPcAcosHarmonyTopic;
    }
    if (this._fwPcAcosHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwPcAcosHarmonyTopicDequeueErr = this._fwPcAcosHarmonyTopicDequeueErr;
    }
    if (this._fwRstPcAcosHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwRstPcAcosHarmonyTopic = this._fwRstPcAcosHarmonyTopic;
    }
    if (this._fwRstPcAcosHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwRstPcAcosHarmonyTopicDequeueErr = this._fwRstPcAcosHarmonyTopicDequeueErr;
    }
    if (this._hcCountersDroppedFromBlade !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcCountersDroppedFromBlade = this._hcCountersDroppedFromBlade;
    }
    if (this._hcCountersReceivedFromBlade !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcCountersReceivedFromBlade = this._hcCountersReceivedFromBlade;
    }
    if (this._hcCountersSentToMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcCountersSentToMaster = this._hcCountersSentToMaster;
    }
    if (this._hcLogsReceivedFromBlade !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcLogsReceivedFromBlade = this._hcLogsReceivedFromBlade;
    }
    if (this._hcLogsSentToMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcLogsSentToMaster = this._hcLogsSentToMaster;
    }
    if (this._hcOperReceivedFromBlade !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcOperReceivedFromBlade = this._hcOperReceivedFromBlade;
    }
    if (this._hcOperSentToMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcOperSentToMaster = this._hcOperSentToMaster;
    }
    if (this._kafkaBrokerDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaBrokerDown = this._kafkaBrokerDown;
    }
    if (this._kafkaQueueFullErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaQueueFullErr = this._kafkaQueueFullErr;
    }
    if (this._kafkaTopicError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaTopicError = this._kafkaTopicError;
    }
    if (this._kafkaUnknownTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaUnknownTopicDequeueErr = this._kafkaUnknownTopicDequeueErr;
    }
    if (this._metricsDroppedPtMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsDroppedPtMissing = this._metricsDroppedPtMissing;
    }
    if (this._ngwafHcEpTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngwafHcEpTopic = this._ngwafHcEpTopic;
    }
    if (this._ngwafHcEpTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngwafHcEpTopicDequeueErr = this._ngwafHcEpTopicDequeueErr;
    }
    if (this._ngwafHcMetricsTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngwafHcMetricsTopic = this._ngwafHcMetricsTopic;
    }
    if (this._ngwafHcMetricsTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngwafHcMetricsTopicDequeueErr = this._ngwafHcMetricsTopicDequeueErr;
    }
    if (this._pcAcosHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcAcosHarmonyTopic = this._pcAcosHarmonyTopic;
    }
    if (this._pcAcosHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcAcosHarmonyTopicDequeueErr = this._pcAcosHarmonyTopicDequeueErr;
    }
    if (this._pcEncodingFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcEncodingFailed = this._pcEncodingFailed;
    }
    if (this._pcThrottleDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcThrottleDrop = this._pcThrottleDrop;
    }
    if (this._peAcosHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.peAcosHarmonyTopic = this._peAcosHarmonyTopic;
    }
    if (this._peAcosHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.peAcosHarmonyTopicDequeueErr = this._peAcosHarmonyTopicDequeueErr;
    }
    if (this._peAcosHarmonyTopicEnqueueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.peAcosHarmonyTopicEnqueueErr = this._peAcosHarmonyTopicEnqueueErr;
    }
    if (this._prAcosHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.prAcosHarmonyTopic = this._prAcosHarmonyTopic;
    }
    if (this._prAcosHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.prAcosHarmonyTopicDequeueErr = this._prAcosHarmonyTopicDequeueErr;
    }
    if (this._prAcosHarmonyTopicEnqueueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.prAcosHarmonyTopicEnqueueErr = this._prAcosHarmonyTopicEnqueueErr;
    }
    if (this._prBeTtfbAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.prBeTtfbAnomaly = this._prBeTtfbAnomaly;
    }
    if (this._prBeTtlbAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.prBeTtlbAnomaly = this._prBeTtlbAnomaly;
    }
    if (this._prInLatencyAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.prInLatencyAnomaly = this._prInLatencyAnomaly;
    }
    if (this._prInLatencyThresholdExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.prInLatencyThresholdExceed = this._prInLatencyThresholdExceed;
    }
    if (this._prNotAllowedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.prNotAllowedDrop = this._prNotAllowedDrop;
    }
    if (this._prOutLatencyAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.prOutLatencyAnomaly = this._prOutLatencyAnomaly;
    }
    if (this._prOutLatencyThresholdExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.prOutLatencyThresholdExceed = this._prOutLatencyThresholdExceed;
    }
    if (this._prThrottleDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.prThrottleDrop = this._prThrottleDrop;
    }
    if (this._ruleSetApplicationMetricsTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSetApplicationMetricsTopic = this._ruleSetApplicationMetricsTopic;
    }
    if (this._ruleSetApplicationMetricsTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSetApplicationMetricsTopicDequeueErr = this._ruleSetApplicationMetricsTopicDequeueErr;
    }
    if (this._slbClientSslCountersMetricsTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbClientSslCountersMetricsTopic = this._slbClientSslCountersMetricsTopic;
    }
    if (this._slbClientSslCountersMetricsTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbClientSslCountersMetricsTopicDequeueErr = this._slbClientSslCountersMetricsTopicDequeueErr;
    }
    if (this._slbServerSslCountersMetricsTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbServerSslCountersMetricsTopic = this._slbServerSslCountersMetricsTopic;
    }
    if (this._slbServerSslCountersMetricsTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbServerSslCountersMetricsTopicDequeueErr = this._slbServerSslCountersMetricsTopicDequeueErr;
    }
    if (this._slbSslStatsMetricsTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbSslStatsMetricsTopic = this._slbSslStatsMetricsTopic;
    }
    if (this._slbSslStatsMetricsTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbSslStatsMetricsTopicDequeueErr = this._slbSslStatsMetricsTopicDequeueErr;
    }
    if (this._ssliPcAcosHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssliPcAcosHarmonyTopic = this._ssliPcAcosHarmonyTopic;
    }
    if (this._ssliPcAcosHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssliPcAcosHarmonyTopicDequeueErr = this._ssliPcAcosHarmonyTopicDequeueErr;
    }
    if (this._ssliPeAcosHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssliPeAcosHarmonyTopic = this._ssliPeAcosHarmonyTopic;
    }
    if (this._ssliPeAcosHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssliPeAcosHarmonyTopicDequeueErr = this._ssliPeAcosHarmonyTopicDequeueErr;
    }
    if (this._visibilityTopnHarmonyTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityTopnHarmonyTopic = this._visibilityTopnHarmonyTopic;
    }
    if (this._visibilityTopnHarmonyTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityTopnHarmonyTopicDequeueErr = this._visibilityTopnHarmonyTopicDequeueErr;
    }
    if (this._vpnIkeGatewayMetricsTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIkeGatewayMetricsTopic = this._vpnIkeGatewayMetricsTopic;
    }
    if (this._vpnIkeGatewayMetricsTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIkeGatewayMetricsTopicDequeueErr = this._vpnIkeGatewayMetricsTopicDequeueErr;
    }
    if (this._vpnIpsecSaMetricsTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIpsecSaMetricsTopic = this._vpnIpsecSaMetricsTopic;
    }
    if (this._vpnIpsecSaMetricsTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIpsecSaMetricsTopicDequeueErr = this._vpnIpsecSaMetricsTopicDequeueErr;
    }
    if (this._vpnStatsMetricsTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnStatsMetricsTopic = this._vpnStatsMetricsTopic;
    }
    if (this._vpnStatsMetricsTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnStatsMetricsTopicDequeueErr = this._vpnStatsMetricsTopicDequeueErr;
    }
    if (this._wafEventsTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafEventsTopic = this._wafEventsTopic;
    }
    if (this._wafEventsTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafEventsTopicDequeueErr = this._wafEventsTopicDequeueErr;
    }
    if (this._wafLearnPrTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafLearnPrTopic = this._wafLearnPrTopic;
    }
    if (this._wafLearnPrTopicDequeueErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafLearnPrTopicDequeueErr = this._wafLearnPrTopicDequeueErr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderEventNotificationKafkaServerStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._analyticsBusRestart = undefined;
      this._avroDeviceStatusTopic = undefined;
      this._avroDeviceStatusTopicDequeueErr = undefined;
      this._avroDeviceStatusTopicEnqueueErr = undefined;
      this._avroGenericFailedEncoding = undefined;
      this._avroGenericFailedSending = undefined;
      this._avroGenericSent = undefined;
      this._avroPartitionMetricsTopic = undefined;
      this._avroPartitionMetricsTopicDequeueErr = undefined;
      this._avroPartitionMetricsTopicEnqueueErr = undefined;
      this._avroSystemEnvDequeueErr = undefined;
      this._avroSystemEnvTopic = undefined;
      this._certPinningListTopic = undefined;
      this._certPinningListTopicDequeueErr = undefined;
      this._cgnPcAcosHarmonyTopic = undefined;
      this._cgnPcAcosHarmonyTopicDequeueErr = undefined;
      this._cgnPeAcosHarmonyTopic = undefined;
      this._cgnPeAcosHarmonyTopicDequeueErr = undefined;
      this._cgnPortUsageHstgrmAcosHarmonyTopic = undefined;
      this._cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr = undefined;
      this._cgnSummaryErrorAcosHarmonyTopic = undefined;
      this._cgnSummaryErrorAcosHarmonyTopicDequeueErr = undefined;
      this._fwDenyPcAcosHarmonyTopic = undefined;
      this._fwDenyPcAcosHarmonyTopicDequeueErr = undefined;
      this._fwPcAcosHarmonyTopic = undefined;
      this._fwPcAcosHarmonyTopicDequeueErr = undefined;
      this._fwRstPcAcosHarmonyTopic = undefined;
      this._fwRstPcAcosHarmonyTopicDequeueErr = undefined;
      this._hcCountersDroppedFromBlade = undefined;
      this._hcCountersReceivedFromBlade = undefined;
      this._hcCountersSentToMaster = undefined;
      this._hcLogsReceivedFromBlade = undefined;
      this._hcLogsSentToMaster = undefined;
      this._hcOperReceivedFromBlade = undefined;
      this._hcOperSentToMaster = undefined;
      this._kafkaBrokerDown = undefined;
      this._kafkaQueueFullErr = undefined;
      this._kafkaTopicError = undefined;
      this._kafkaUnknownTopicDequeueErr = undefined;
      this._metricsDroppedPtMissing = undefined;
      this._ngwafHcEpTopic = undefined;
      this._ngwafHcEpTopicDequeueErr = undefined;
      this._ngwafHcMetricsTopic = undefined;
      this._ngwafHcMetricsTopicDequeueErr = undefined;
      this._pcAcosHarmonyTopic = undefined;
      this._pcAcosHarmonyTopicDequeueErr = undefined;
      this._pcEncodingFailed = undefined;
      this._pcThrottleDrop = undefined;
      this._peAcosHarmonyTopic = undefined;
      this._peAcosHarmonyTopicDequeueErr = undefined;
      this._peAcosHarmonyTopicEnqueueErr = undefined;
      this._prAcosHarmonyTopic = undefined;
      this._prAcosHarmonyTopicDequeueErr = undefined;
      this._prAcosHarmonyTopicEnqueueErr = undefined;
      this._prBeTtfbAnomaly = undefined;
      this._prBeTtlbAnomaly = undefined;
      this._prInLatencyAnomaly = undefined;
      this._prInLatencyThresholdExceed = undefined;
      this._prNotAllowedDrop = undefined;
      this._prOutLatencyAnomaly = undefined;
      this._prOutLatencyThresholdExceed = undefined;
      this._prThrottleDrop = undefined;
      this._ruleSetApplicationMetricsTopic = undefined;
      this._ruleSetApplicationMetricsTopicDequeueErr = undefined;
      this._slbClientSslCountersMetricsTopic = undefined;
      this._slbClientSslCountersMetricsTopicDequeueErr = undefined;
      this._slbServerSslCountersMetricsTopic = undefined;
      this._slbServerSslCountersMetricsTopicDequeueErr = undefined;
      this._slbSslStatsMetricsTopic = undefined;
      this._slbSslStatsMetricsTopicDequeueErr = undefined;
      this._ssliPcAcosHarmonyTopic = undefined;
      this._ssliPcAcosHarmonyTopicDequeueErr = undefined;
      this._ssliPeAcosHarmonyTopic = undefined;
      this._ssliPeAcosHarmonyTopicDequeueErr = undefined;
      this._visibilityTopnHarmonyTopic = undefined;
      this._visibilityTopnHarmonyTopicDequeueErr = undefined;
      this._vpnIkeGatewayMetricsTopic = undefined;
      this._vpnIkeGatewayMetricsTopicDequeueErr = undefined;
      this._vpnIpsecSaMetricsTopic = undefined;
      this._vpnIpsecSaMetricsTopicDequeueErr = undefined;
      this._vpnStatsMetricsTopic = undefined;
      this._vpnStatsMetricsTopicDequeueErr = undefined;
      this._wafEventsTopic = undefined;
      this._wafEventsTopicDequeueErr = undefined;
      this._wafLearnPrTopic = undefined;
      this._wafLearnPrTopicDequeueErr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._analyticsBusRestart = value.analyticsBusRestart;
      this._avroDeviceStatusTopic = value.avroDeviceStatusTopic;
      this._avroDeviceStatusTopicDequeueErr = value.avroDeviceStatusTopicDequeueErr;
      this._avroDeviceStatusTopicEnqueueErr = value.avroDeviceStatusTopicEnqueueErr;
      this._avroGenericFailedEncoding = value.avroGenericFailedEncoding;
      this._avroGenericFailedSending = value.avroGenericFailedSending;
      this._avroGenericSent = value.avroGenericSent;
      this._avroPartitionMetricsTopic = value.avroPartitionMetricsTopic;
      this._avroPartitionMetricsTopicDequeueErr = value.avroPartitionMetricsTopicDequeueErr;
      this._avroPartitionMetricsTopicEnqueueErr = value.avroPartitionMetricsTopicEnqueueErr;
      this._avroSystemEnvDequeueErr = value.avroSystemEnvDequeueErr;
      this._avroSystemEnvTopic = value.avroSystemEnvTopic;
      this._certPinningListTopic = value.certPinningListTopic;
      this._certPinningListTopicDequeueErr = value.certPinningListTopicDequeueErr;
      this._cgnPcAcosHarmonyTopic = value.cgnPcAcosHarmonyTopic;
      this._cgnPcAcosHarmonyTopicDequeueErr = value.cgnPcAcosHarmonyTopicDequeueErr;
      this._cgnPeAcosHarmonyTopic = value.cgnPeAcosHarmonyTopic;
      this._cgnPeAcosHarmonyTopicDequeueErr = value.cgnPeAcosHarmonyTopicDequeueErr;
      this._cgnPortUsageHstgrmAcosHarmonyTopic = value.cgnPortUsageHstgrmAcosHarmonyTopic;
      this._cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr = value.cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr;
      this._cgnSummaryErrorAcosHarmonyTopic = value.cgnSummaryErrorAcosHarmonyTopic;
      this._cgnSummaryErrorAcosHarmonyTopicDequeueErr = value.cgnSummaryErrorAcosHarmonyTopicDequeueErr;
      this._fwDenyPcAcosHarmonyTopic = value.fwDenyPcAcosHarmonyTopic;
      this._fwDenyPcAcosHarmonyTopicDequeueErr = value.fwDenyPcAcosHarmonyTopicDequeueErr;
      this._fwPcAcosHarmonyTopic = value.fwPcAcosHarmonyTopic;
      this._fwPcAcosHarmonyTopicDequeueErr = value.fwPcAcosHarmonyTopicDequeueErr;
      this._fwRstPcAcosHarmonyTopic = value.fwRstPcAcosHarmonyTopic;
      this._fwRstPcAcosHarmonyTopicDequeueErr = value.fwRstPcAcosHarmonyTopicDequeueErr;
      this._hcCountersDroppedFromBlade = value.hcCountersDroppedFromBlade;
      this._hcCountersReceivedFromBlade = value.hcCountersReceivedFromBlade;
      this._hcCountersSentToMaster = value.hcCountersSentToMaster;
      this._hcLogsReceivedFromBlade = value.hcLogsReceivedFromBlade;
      this._hcLogsSentToMaster = value.hcLogsSentToMaster;
      this._hcOperReceivedFromBlade = value.hcOperReceivedFromBlade;
      this._hcOperSentToMaster = value.hcOperSentToMaster;
      this._kafkaBrokerDown = value.kafkaBrokerDown;
      this._kafkaQueueFullErr = value.kafkaQueueFullErr;
      this._kafkaTopicError = value.kafkaTopicError;
      this._kafkaUnknownTopicDequeueErr = value.kafkaUnknownTopicDequeueErr;
      this._metricsDroppedPtMissing = value.metricsDroppedPtMissing;
      this._ngwafHcEpTopic = value.ngwafHcEpTopic;
      this._ngwafHcEpTopicDequeueErr = value.ngwafHcEpTopicDequeueErr;
      this._ngwafHcMetricsTopic = value.ngwafHcMetricsTopic;
      this._ngwafHcMetricsTopicDequeueErr = value.ngwafHcMetricsTopicDequeueErr;
      this._pcAcosHarmonyTopic = value.pcAcosHarmonyTopic;
      this._pcAcosHarmonyTopicDequeueErr = value.pcAcosHarmonyTopicDequeueErr;
      this._pcEncodingFailed = value.pcEncodingFailed;
      this._pcThrottleDrop = value.pcThrottleDrop;
      this._peAcosHarmonyTopic = value.peAcosHarmonyTopic;
      this._peAcosHarmonyTopicDequeueErr = value.peAcosHarmonyTopicDequeueErr;
      this._peAcosHarmonyTopicEnqueueErr = value.peAcosHarmonyTopicEnqueueErr;
      this._prAcosHarmonyTopic = value.prAcosHarmonyTopic;
      this._prAcosHarmonyTopicDequeueErr = value.prAcosHarmonyTopicDequeueErr;
      this._prAcosHarmonyTopicEnqueueErr = value.prAcosHarmonyTopicEnqueueErr;
      this._prBeTtfbAnomaly = value.prBeTtfbAnomaly;
      this._prBeTtlbAnomaly = value.prBeTtlbAnomaly;
      this._prInLatencyAnomaly = value.prInLatencyAnomaly;
      this._prInLatencyThresholdExceed = value.prInLatencyThresholdExceed;
      this._prNotAllowedDrop = value.prNotAllowedDrop;
      this._prOutLatencyAnomaly = value.prOutLatencyAnomaly;
      this._prOutLatencyThresholdExceed = value.prOutLatencyThresholdExceed;
      this._prThrottleDrop = value.prThrottleDrop;
      this._ruleSetApplicationMetricsTopic = value.ruleSetApplicationMetricsTopic;
      this._ruleSetApplicationMetricsTopicDequeueErr = value.ruleSetApplicationMetricsTopicDequeueErr;
      this._slbClientSslCountersMetricsTopic = value.slbClientSslCountersMetricsTopic;
      this._slbClientSslCountersMetricsTopicDequeueErr = value.slbClientSslCountersMetricsTopicDequeueErr;
      this._slbServerSslCountersMetricsTopic = value.slbServerSslCountersMetricsTopic;
      this._slbServerSslCountersMetricsTopicDequeueErr = value.slbServerSslCountersMetricsTopicDequeueErr;
      this._slbSslStatsMetricsTopic = value.slbSslStatsMetricsTopic;
      this._slbSslStatsMetricsTopicDequeueErr = value.slbSslStatsMetricsTopicDequeueErr;
      this._ssliPcAcosHarmonyTopic = value.ssliPcAcosHarmonyTopic;
      this._ssliPcAcosHarmonyTopicDequeueErr = value.ssliPcAcosHarmonyTopicDequeueErr;
      this._ssliPeAcosHarmonyTopic = value.ssliPeAcosHarmonyTopic;
      this._ssliPeAcosHarmonyTopicDequeueErr = value.ssliPeAcosHarmonyTopicDequeueErr;
      this._visibilityTopnHarmonyTopic = value.visibilityTopnHarmonyTopic;
      this._visibilityTopnHarmonyTopicDequeueErr = value.visibilityTopnHarmonyTopicDequeueErr;
      this._vpnIkeGatewayMetricsTopic = value.vpnIkeGatewayMetricsTopic;
      this._vpnIkeGatewayMetricsTopicDequeueErr = value.vpnIkeGatewayMetricsTopicDequeueErr;
      this._vpnIpsecSaMetricsTopic = value.vpnIpsecSaMetricsTopic;
      this._vpnIpsecSaMetricsTopicDequeueErr = value.vpnIpsecSaMetricsTopicDequeueErr;
      this._vpnStatsMetricsTopic = value.vpnStatsMetricsTopic;
      this._vpnStatsMetricsTopicDequeueErr = value.vpnStatsMetricsTopicDequeueErr;
      this._wafEventsTopic = value.wafEventsTopic;
      this._wafEventsTopicDequeueErr = value.wafEventsTopicDequeueErr;
      this._wafLearnPrTopic = value.wafLearnPrTopic;
      this._wafLearnPrTopicDequeueErr = value.wafLearnPrTopicDequeueErr;
    }
  }

  // analytics_bus_restart - computed: false, optional: true, required: false
  private _analyticsBusRestart?: number; 
  public get analyticsBusRestart() {
    return this.getNumberAttribute('analytics_bus_restart');
  }
  public set analyticsBusRestart(value: number) {
    this._analyticsBusRestart = value;
  }
  public resetAnalyticsBusRestart() {
    this._analyticsBusRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsBusRestartInput() {
    return this._analyticsBusRestart;
  }

  // avro_device_status_topic - computed: false, optional: true, required: false
  private _avroDeviceStatusTopic?: number; 
  public get avroDeviceStatusTopic() {
    return this.getNumberAttribute('avro_device_status_topic');
  }
  public set avroDeviceStatusTopic(value: number) {
    this._avroDeviceStatusTopic = value;
  }
  public resetAvroDeviceStatusTopic() {
    this._avroDeviceStatusTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroDeviceStatusTopicInput() {
    return this._avroDeviceStatusTopic;
  }

  // avro_device_status_topic_dequeue_err - computed: false, optional: true, required: false
  private _avroDeviceStatusTopicDequeueErr?: number; 
  public get avroDeviceStatusTopicDequeueErr() {
    return this.getNumberAttribute('avro_device_status_topic_dequeue_err');
  }
  public set avroDeviceStatusTopicDequeueErr(value: number) {
    this._avroDeviceStatusTopicDequeueErr = value;
  }
  public resetAvroDeviceStatusTopicDequeueErr() {
    this._avroDeviceStatusTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroDeviceStatusTopicDequeueErrInput() {
    return this._avroDeviceStatusTopicDequeueErr;
  }

  // avro_device_status_topic_enqueue_err - computed: false, optional: true, required: false
  private _avroDeviceStatusTopicEnqueueErr?: number; 
  public get avroDeviceStatusTopicEnqueueErr() {
    return this.getNumberAttribute('avro_device_status_topic_enqueue_err');
  }
  public set avroDeviceStatusTopicEnqueueErr(value: number) {
    this._avroDeviceStatusTopicEnqueueErr = value;
  }
  public resetAvroDeviceStatusTopicEnqueueErr() {
    this._avroDeviceStatusTopicEnqueueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroDeviceStatusTopicEnqueueErrInput() {
    return this._avroDeviceStatusTopicEnqueueErr;
  }

  // avro_generic_failed_encoding - computed: false, optional: true, required: false
  private _avroGenericFailedEncoding?: number; 
  public get avroGenericFailedEncoding() {
    return this.getNumberAttribute('avro_generic_failed_encoding');
  }
  public set avroGenericFailedEncoding(value: number) {
    this._avroGenericFailedEncoding = value;
  }
  public resetAvroGenericFailedEncoding() {
    this._avroGenericFailedEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroGenericFailedEncodingInput() {
    return this._avroGenericFailedEncoding;
  }

  // avro_generic_failed_sending - computed: false, optional: true, required: false
  private _avroGenericFailedSending?: number; 
  public get avroGenericFailedSending() {
    return this.getNumberAttribute('avro_generic_failed_sending');
  }
  public set avroGenericFailedSending(value: number) {
    this._avroGenericFailedSending = value;
  }
  public resetAvroGenericFailedSending() {
    this._avroGenericFailedSending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroGenericFailedSendingInput() {
    return this._avroGenericFailedSending;
  }

  // avro_generic_sent - computed: false, optional: true, required: false
  private _avroGenericSent?: number; 
  public get avroGenericSent() {
    return this.getNumberAttribute('avro_generic_sent');
  }
  public set avroGenericSent(value: number) {
    this._avroGenericSent = value;
  }
  public resetAvroGenericSent() {
    this._avroGenericSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroGenericSentInput() {
    return this._avroGenericSent;
  }

  // avro_partition_metrics_topic - computed: false, optional: true, required: false
  private _avroPartitionMetricsTopic?: number; 
  public get avroPartitionMetricsTopic() {
    return this.getNumberAttribute('avro_partition_metrics_topic');
  }
  public set avroPartitionMetricsTopic(value: number) {
    this._avroPartitionMetricsTopic = value;
  }
  public resetAvroPartitionMetricsTopic() {
    this._avroPartitionMetricsTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroPartitionMetricsTopicInput() {
    return this._avroPartitionMetricsTopic;
  }

  // avro_partition_metrics_topic_dequeue_err - computed: false, optional: true, required: false
  private _avroPartitionMetricsTopicDequeueErr?: number; 
  public get avroPartitionMetricsTopicDequeueErr() {
    return this.getNumberAttribute('avro_partition_metrics_topic_dequeue_err');
  }
  public set avroPartitionMetricsTopicDequeueErr(value: number) {
    this._avroPartitionMetricsTopicDequeueErr = value;
  }
  public resetAvroPartitionMetricsTopicDequeueErr() {
    this._avroPartitionMetricsTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroPartitionMetricsTopicDequeueErrInput() {
    return this._avroPartitionMetricsTopicDequeueErr;
  }

  // avro_partition_metrics_topic_enqueue_err - computed: false, optional: true, required: false
  private _avroPartitionMetricsTopicEnqueueErr?: number; 
  public get avroPartitionMetricsTopicEnqueueErr() {
    return this.getNumberAttribute('avro_partition_metrics_topic_enqueue_err');
  }
  public set avroPartitionMetricsTopicEnqueueErr(value: number) {
    this._avroPartitionMetricsTopicEnqueueErr = value;
  }
  public resetAvroPartitionMetricsTopicEnqueueErr() {
    this._avroPartitionMetricsTopicEnqueueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroPartitionMetricsTopicEnqueueErrInput() {
    return this._avroPartitionMetricsTopicEnqueueErr;
  }

  // avro_system_env_dequeue_err - computed: false, optional: true, required: false
  private _avroSystemEnvDequeueErr?: number; 
  public get avroSystemEnvDequeueErr() {
    return this.getNumberAttribute('avro_system_env_dequeue_err');
  }
  public set avroSystemEnvDequeueErr(value: number) {
    this._avroSystemEnvDequeueErr = value;
  }
  public resetAvroSystemEnvDequeueErr() {
    this._avroSystemEnvDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroSystemEnvDequeueErrInput() {
    return this._avroSystemEnvDequeueErr;
  }

  // avro_system_env_topic - computed: false, optional: true, required: false
  private _avroSystemEnvTopic?: number; 
  public get avroSystemEnvTopic() {
    return this.getNumberAttribute('avro_system_env_topic');
  }
  public set avroSystemEnvTopic(value: number) {
    this._avroSystemEnvTopic = value;
  }
  public resetAvroSystemEnvTopic() {
    this._avroSystemEnvTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroSystemEnvTopicInput() {
    return this._avroSystemEnvTopic;
  }

  // cert_pinning_list_topic - computed: false, optional: true, required: false
  private _certPinningListTopic?: number; 
  public get certPinningListTopic() {
    return this.getNumberAttribute('cert_pinning_list_topic');
  }
  public set certPinningListTopic(value: number) {
    this._certPinningListTopic = value;
  }
  public resetCertPinningListTopic() {
    this._certPinningListTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPinningListTopicInput() {
    return this._certPinningListTopic;
  }

  // cert_pinning_list_topic_dequeue_err - computed: false, optional: true, required: false
  private _certPinningListTopicDequeueErr?: number; 
  public get certPinningListTopicDequeueErr() {
    return this.getNumberAttribute('cert_pinning_list_topic_dequeue_err');
  }
  public set certPinningListTopicDequeueErr(value: number) {
    this._certPinningListTopicDequeueErr = value;
  }
  public resetCertPinningListTopicDequeueErr() {
    this._certPinningListTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPinningListTopicDequeueErrInput() {
    return this._certPinningListTopicDequeueErr;
  }

  // cgn_pc_acos_harmony_topic - computed: false, optional: true, required: false
  private _cgnPcAcosHarmonyTopic?: number; 
  public get cgnPcAcosHarmonyTopic() {
    return this.getNumberAttribute('cgn_pc_acos_harmony_topic');
  }
  public set cgnPcAcosHarmonyTopic(value: number) {
    this._cgnPcAcosHarmonyTopic = value;
  }
  public resetCgnPcAcosHarmonyTopic() {
    this._cgnPcAcosHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnPcAcosHarmonyTopicInput() {
    return this._cgnPcAcosHarmonyTopic;
  }

  // cgn_pc_acos_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _cgnPcAcosHarmonyTopicDequeueErr?: number; 
  public get cgnPcAcosHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('cgn_pc_acos_harmony_topic_dequeue_err');
  }
  public set cgnPcAcosHarmonyTopicDequeueErr(value: number) {
    this._cgnPcAcosHarmonyTopicDequeueErr = value;
  }
  public resetCgnPcAcosHarmonyTopicDequeueErr() {
    this._cgnPcAcosHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnPcAcosHarmonyTopicDequeueErrInput() {
    return this._cgnPcAcosHarmonyTopicDequeueErr;
  }

  // cgn_pe_acos_harmony_topic - computed: false, optional: true, required: false
  private _cgnPeAcosHarmonyTopic?: number; 
  public get cgnPeAcosHarmonyTopic() {
    return this.getNumberAttribute('cgn_pe_acos_harmony_topic');
  }
  public set cgnPeAcosHarmonyTopic(value: number) {
    this._cgnPeAcosHarmonyTopic = value;
  }
  public resetCgnPeAcosHarmonyTopic() {
    this._cgnPeAcosHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnPeAcosHarmonyTopicInput() {
    return this._cgnPeAcosHarmonyTopic;
  }

  // cgn_pe_acos_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _cgnPeAcosHarmonyTopicDequeueErr?: number; 
  public get cgnPeAcosHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('cgn_pe_acos_harmony_topic_dequeue_err');
  }
  public set cgnPeAcosHarmonyTopicDequeueErr(value: number) {
    this._cgnPeAcosHarmonyTopicDequeueErr = value;
  }
  public resetCgnPeAcosHarmonyTopicDequeueErr() {
    this._cgnPeAcosHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnPeAcosHarmonyTopicDequeueErrInput() {
    return this._cgnPeAcosHarmonyTopicDequeueErr;
  }

  // cgn_port_usage_hstgrm_acos_harmony_topic - computed: false, optional: true, required: false
  private _cgnPortUsageHstgrmAcosHarmonyTopic?: number; 
  public get cgnPortUsageHstgrmAcosHarmonyTopic() {
    return this.getNumberAttribute('cgn_port_usage_hstgrm_acos_harmony_topic');
  }
  public set cgnPortUsageHstgrmAcosHarmonyTopic(value: number) {
    this._cgnPortUsageHstgrmAcosHarmonyTopic = value;
  }
  public resetCgnPortUsageHstgrmAcosHarmonyTopic() {
    this._cgnPortUsageHstgrmAcosHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnPortUsageHstgrmAcosHarmonyTopicInput() {
    return this._cgnPortUsageHstgrmAcosHarmonyTopic;
  }

  // cgn_port_usage_hstgrm_acos_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr?: number; 
  public get cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('cgn_port_usage_hstgrm_acos_harmony_topic_dequeue_err');
  }
  public set cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr(value: number) {
    this._cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr = value;
  }
  public resetCgnPortUsageHstgrmAcosHarmonyTopicDequeueErr() {
    this._cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnPortUsageHstgrmAcosHarmonyTopicDequeueErrInput() {
    return this._cgnPortUsageHstgrmAcosHarmonyTopicDequeueErr;
  }

  // cgn_summary_error_acos_harmony_topic - computed: false, optional: true, required: false
  private _cgnSummaryErrorAcosHarmonyTopic?: number; 
  public get cgnSummaryErrorAcosHarmonyTopic() {
    return this.getNumberAttribute('cgn_summary_error_acos_harmony_topic');
  }
  public set cgnSummaryErrorAcosHarmonyTopic(value: number) {
    this._cgnSummaryErrorAcosHarmonyTopic = value;
  }
  public resetCgnSummaryErrorAcosHarmonyTopic() {
    this._cgnSummaryErrorAcosHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnSummaryErrorAcosHarmonyTopicInput() {
    return this._cgnSummaryErrorAcosHarmonyTopic;
  }

  // cgn_summary_error_acos_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _cgnSummaryErrorAcosHarmonyTopicDequeueErr?: number; 
  public get cgnSummaryErrorAcosHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('cgn_summary_error_acos_harmony_topic_dequeue_err');
  }
  public set cgnSummaryErrorAcosHarmonyTopicDequeueErr(value: number) {
    this._cgnSummaryErrorAcosHarmonyTopicDequeueErr = value;
  }
  public resetCgnSummaryErrorAcosHarmonyTopicDequeueErr() {
    this._cgnSummaryErrorAcosHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnSummaryErrorAcosHarmonyTopicDequeueErrInput() {
    return this._cgnSummaryErrorAcosHarmonyTopicDequeueErr;
  }

  // fw_deny_pc_acos_harmony_topic - computed: false, optional: true, required: false
  private _fwDenyPcAcosHarmonyTopic?: number; 
  public get fwDenyPcAcosHarmonyTopic() {
    return this.getNumberAttribute('fw_deny_pc_acos_harmony_topic');
  }
  public set fwDenyPcAcosHarmonyTopic(value: number) {
    this._fwDenyPcAcosHarmonyTopic = value;
  }
  public resetFwDenyPcAcosHarmonyTopic() {
    this._fwDenyPcAcosHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDenyPcAcosHarmonyTopicInput() {
    return this._fwDenyPcAcosHarmonyTopic;
  }

  // fw_deny_pc_acos_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _fwDenyPcAcosHarmonyTopicDequeueErr?: number; 
  public get fwDenyPcAcosHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('fw_deny_pc_acos_harmony_topic_dequeue_err');
  }
  public set fwDenyPcAcosHarmonyTopicDequeueErr(value: number) {
    this._fwDenyPcAcosHarmonyTopicDequeueErr = value;
  }
  public resetFwDenyPcAcosHarmonyTopicDequeueErr() {
    this._fwDenyPcAcosHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwDenyPcAcosHarmonyTopicDequeueErrInput() {
    return this._fwDenyPcAcosHarmonyTopicDequeueErr;
  }

  // fw_pc_acos_harmony_topic - computed: false, optional: true, required: false
  private _fwPcAcosHarmonyTopic?: number; 
  public get fwPcAcosHarmonyTopic() {
    return this.getNumberAttribute('fw_pc_acos_harmony_topic');
  }
  public set fwPcAcosHarmonyTopic(value: number) {
    this._fwPcAcosHarmonyTopic = value;
  }
  public resetFwPcAcosHarmonyTopic() {
    this._fwPcAcosHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwPcAcosHarmonyTopicInput() {
    return this._fwPcAcosHarmonyTopic;
  }

  // fw_pc_acos_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _fwPcAcosHarmonyTopicDequeueErr?: number; 
  public get fwPcAcosHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('fw_pc_acos_harmony_topic_dequeue_err');
  }
  public set fwPcAcosHarmonyTopicDequeueErr(value: number) {
    this._fwPcAcosHarmonyTopicDequeueErr = value;
  }
  public resetFwPcAcosHarmonyTopicDequeueErr() {
    this._fwPcAcosHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwPcAcosHarmonyTopicDequeueErrInput() {
    return this._fwPcAcosHarmonyTopicDequeueErr;
  }

  // fw_rst_pc_acos_harmony_topic - computed: false, optional: true, required: false
  private _fwRstPcAcosHarmonyTopic?: number; 
  public get fwRstPcAcosHarmonyTopic() {
    return this.getNumberAttribute('fw_rst_pc_acos_harmony_topic');
  }
  public set fwRstPcAcosHarmonyTopic(value: number) {
    this._fwRstPcAcosHarmonyTopic = value;
  }
  public resetFwRstPcAcosHarmonyTopic() {
    this._fwRstPcAcosHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwRstPcAcosHarmonyTopicInput() {
    return this._fwRstPcAcosHarmonyTopic;
  }

  // fw_rst_pc_acos_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _fwRstPcAcosHarmonyTopicDequeueErr?: number; 
  public get fwRstPcAcosHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('fw_rst_pc_acos_harmony_topic_dequeue_err');
  }
  public set fwRstPcAcosHarmonyTopicDequeueErr(value: number) {
    this._fwRstPcAcosHarmonyTopicDequeueErr = value;
  }
  public resetFwRstPcAcosHarmonyTopicDequeueErr() {
    this._fwRstPcAcosHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwRstPcAcosHarmonyTopicDequeueErrInput() {
    return this._fwRstPcAcosHarmonyTopicDequeueErr;
  }

  // hc_counters_dropped_from_blade - computed: false, optional: true, required: false
  private _hcCountersDroppedFromBlade?: number; 
  public get hcCountersDroppedFromBlade() {
    return this.getNumberAttribute('hc_counters_dropped_from_blade');
  }
  public set hcCountersDroppedFromBlade(value: number) {
    this._hcCountersDroppedFromBlade = value;
  }
  public resetHcCountersDroppedFromBlade() {
    this._hcCountersDroppedFromBlade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcCountersDroppedFromBladeInput() {
    return this._hcCountersDroppedFromBlade;
  }

  // hc_counters_received_from_blade - computed: false, optional: true, required: false
  private _hcCountersReceivedFromBlade?: number; 
  public get hcCountersReceivedFromBlade() {
    return this.getNumberAttribute('hc_counters_received_from_blade');
  }
  public set hcCountersReceivedFromBlade(value: number) {
    this._hcCountersReceivedFromBlade = value;
  }
  public resetHcCountersReceivedFromBlade() {
    this._hcCountersReceivedFromBlade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcCountersReceivedFromBladeInput() {
    return this._hcCountersReceivedFromBlade;
  }

  // hc_counters_sent_to_master - computed: false, optional: true, required: false
  private _hcCountersSentToMaster?: number; 
  public get hcCountersSentToMaster() {
    return this.getNumberAttribute('hc_counters_sent_to_master');
  }
  public set hcCountersSentToMaster(value: number) {
    this._hcCountersSentToMaster = value;
  }
  public resetHcCountersSentToMaster() {
    this._hcCountersSentToMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcCountersSentToMasterInput() {
    return this._hcCountersSentToMaster;
  }

  // hc_logs_received_from_blade - computed: false, optional: true, required: false
  private _hcLogsReceivedFromBlade?: number; 
  public get hcLogsReceivedFromBlade() {
    return this.getNumberAttribute('hc_logs_received_from_blade');
  }
  public set hcLogsReceivedFromBlade(value: number) {
    this._hcLogsReceivedFromBlade = value;
  }
  public resetHcLogsReceivedFromBlade() {
    this._hcLogsReceivedFromBlade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcLogsReceivedFromBladeInput() {
    return this._hcLogsReceivedFromBlade;
  }

  // hc_logs_sent_to_master - computed: false, optional: true, required: false
  private _hcLogsSentToMaster?: number; 
  public get hcLogsSentToMaster() {
    return this.getNumberAttribute('hc_logs_sent_to_master');
  }
  public set hcLogsSentToMaster(value: number) {
    this._hcLogsSentToMaster = value;
  }
  public resetHcLogsSentToMaster() {
    this._hcLogsSentToMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcLogsSentToMasterInput() {
    return this._hcLogsSentToMaster;
  }

  // hc_oper_received_from_blade - computed: false, optional: true, required: false
  private _hcOperReceivedFromBlade?: number; 
  public get hcOperReceivedFromBlade() {
    return this.getNumberAttribute('hc_oper_received_from_blade');
  }
  public set hcOperReceivedFromBlade(value: number) {
    this._hcOperReceivedFromBlade = value;
  }
  public resetHcOperReceivedFromBlade() {
    this._hcOperReceivedFromBlade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcOperReceivedFromBladeInput() {
    return this._hcOperReceivedFromBlade;
  }

  // hc_oper_sent_to_master - computed: false, optional: true, required: false
  private _hcOperSentToMaster?: number; 
  public get hcOperSentToMaster() {
    return this.getNumberAttribute('hc_oper_sent_to_master');
  }
  public set hcOperSentToMaster(value: number) {
    this._hcOperSentToMaster = value;
  }
  public resetHcOperSentToMaster() {
    this._hcOperSentToMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcOperSentToMasterInput() {
    return this._hcOperSentToMaster;
  }

  // kafka_broker_down - computed: false, optional: true, required: false
  private _kafkaBrokerDown?: number; 
  public get kafkaBrokerDown() {
    return this.getNumberAttribute('kafka_broker_down');
  }
  public set kafkaBrokerDown(value: number) {
    this._kafkaBrokerDown = value;
  }
  public resetKafkaBrokerDown() {
    this._kafkaBrokerDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaBrokerDownInput() {
    return this._kafkaBrokerDown;
  }

  // kafka_queue_full_err - computed: false, optional: true, required: false
  private _kafkaQueueFullErr?: number; 
  public get kafkaQueueFullErr() {
    return this.getNumberAttribute('kafka_queue_full_err');
  }
  public set kafkaQueueFullErr(value: number) {
    this._kafkaQueueFullErr = value;
  }
  public resetKafkaQueueFullErr() {
    this._kafkaQueueFullErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaQueueFullErrInput() {
    return this._kafkaQueueFullErr;
  }

  // kafka_topic_error - computed: false, optional: true, required: false
  private _kafkaTopicError?: number; 
  public get kafkaTopicError() {
    return this.getNumberAttribute('kafka_topic_error');
  }
  public set kafkaTopicError(value: number) {
    this._kafkaTopicError = value;
  }
  public resetKafkaTopicError() {
    this._kafkaTopicError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaTopicErrorInput() {
    return this._kafkaTopicError;
  }

  // kafka_unknown_topic_dequeue_err - computed: false, optional: true, required: false
  private _kafkaUnknownTopicDequeueErr?: number; 
  public get kafkaUnknownTopicDequeueErr() {
    return this.getNumberAttribute('kafka_unknown_topic_dequeue_err');
  }
  public set kafkaUnknownTopicDequeueErr(value: number) {
    this._kafkaUnknownTopicDequeueErr = value;
  }
  public resetKafkaUnknownTopicDequeueErr() {
    this._kafkaUnknownTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaUnknownTopicDequeueErrInput() {
    return this._kafkaUnknownTopicDequeueErr;
  }

  // metrics_dropped_pt_missing - computed: false, optional: true, required: false
  private _metricsDroppedPtMissing?: number; 
  public get metricsDroppedPtMissing() {
    return this.getNumberAttribute('metrics_dropped_pt_missing');
  }
  public set metricsDroppedPtMissing(value: number) {
    this._metricsDroppedPtMissing = value;
  }
  public resetMetricsDroppedPtMissing() {
    this._metricsDroppedPtMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsDroppedPtMissingInput() {
    return this._metricsDroppedPtMissing;
  }

  // ngwaf_hc_ep_topic - computed: false, optional: true, required: false
  private _ngwafHcEpTopic?: number; 
  public get ngwafHcEpTopic() {
    return this.getNumberAttribute('ngwaf_hc_ep_topic');
  }
  public set ngwafHcEpTopic(value: number) {
    this._ngwafHcEpTopic = value;
  }
  public resetNgwafHcEpTopic() {
    this._ngwafHcEpTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafHcEpTopicInput() {
    return this._ngwafHcEpTopic;
  }

  // ngwaf_hc_ep_topic_dequeue_err - computed: false, optional: true, required: false
  private _ngwafHcEpTopicDequeueErr?: number; 
  public get ngwafHcEpTopicDequeueErr() {
    return this.getNumberAttribute('ngwaf_hc_ep_topic_dequeue_err');
  }
  public set ngwafHcEpTopicDequeueErr(value: number) {
    this._ngwafHcEpTopicDequeueErr = value;
  }
  public resetNgwafHcEpTopicDequeueErr() {
    this._ngwafHcEpTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafHcEpTopicDequeueErrInput() {
    return this._ngwafHcEpTopicDequeueErr;
  }

  // ngwaf_hc_metrics_topic - computed: false, optional: true, required: false
  private _ngwafHcMetricsTopic?: number; 
  public get ngwafHcMetricsTopic() {
    return this.getNumberAttribute('ngwaf_hc_metrics_topic');
  }
  public set ngwafHcMetricsTopic(value: number) {
    this._ngwafHcMetricsTopic = value;
  }
  public resetNgwafHcMetricsTopic() {
    this._ngwafHcMetricsTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafHcMetricsTopicInput() {
    return this._ngwafHcMetricsTopic;
  }

  // ngwaf_hc_metrics_topic_dequeue_err - computed: false, optional: true, required: false
  private _ngwafHcMetricsTopicDequeueErr?: number; 
  public get ngwafHcMetricsTopicDequeueErr() {
    return this.getNumberAttribute('ngwaf_hc_metrics_topic_dequeue_err');
  }
  public set ngwafHcMetricsTopicDequeueErr(value: number) {
    this._ngwafHcMetricsTopicDequeueErr = value;
  }
  public resetNgwafHcMetricsTopicDequeueErr() {
    this._ngwafHcMetricsTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafHcMetricsTopicDequeueErrInput() {
    return this._ngwafHcMetricsTopicDequeueErr;
  }

  // pc_acos_harmony_topic - computed: false, optional: true, required: false
  private _pcAcosHarmonyTopic?: number; 
  public get pcAcosHarmonyTopic() {
    return this.getNumberAttribute('pc_acos_harmony_topic');
  }
  public set pcAcosHarmonyTopic(value: number) {
    this._pcAcosHarmonyTopic = value;
  }
  public resetPcAcosHarmonyTopic() {
    this._pcAcosHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcAcosHarmonyTopicInput() {
    return this._pcAcosHarmonyTopic;
  }

  // pc_acos_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _pcAcosHarmonyTopicDequeueErr?: number; 
  public get pcAcosHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('pc_acos_harmony_topic_dequeue_err');
  }
  public set pcAcosHarmonyTopicDequeueErr(value: number) {
    this._pcAcosHarmonyTopicDequeueErr = value;
  }
  public resetPcAcosHarmonyTopicDequeueErr() {
    this._pcAcosHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcAcosHarmonyTopicDequeueErrInput() {
    return this._pcAcosHarmonyTopicDequeueErr;
  }

  // pc_encoding_failed - computed: false, optional: true, required: false
  private _pcEncodingFailed?: number; 
  public get pcEncodingFailed() {
    return this.getNumberAttribute('pc_encoding_failed');
  }
  public set pcEncodingFailed(value: number) {
    this._pcEncodingFailed = value;
  }
  public resetPcEncodingFailed() {
    this._pcEncodingFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcEncodingFailedInput() {
    return this._pcEncodingFailed;
  }

  // pc_throttle_drop - computed: false, optional: true, required: false
  private _pcThrottleDrop?: number; 
  public get pcThrottleDrop() {
    return this.getNumberAttribute('pc_throttle_drop');
  }
  public set pcThrottleDrop(value: number) {
    this._pcThrottleDrop = value;
  }
  public resetPcThrottleDrop() {
    this._pcThrottleDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcThrottleDropInput() {
    return this._pcThrottleDrop;
  }

  // pe_acos_harmony_topic - computed: false, optional: true, required: false
  private _peAcosHarmonyTopic?: number; 
  public get peAcosHarmonyTopic() {
    return this.getNumberAttribute('pe_acos_harmony_topic');
  }
  public set peAcosHarmonyTopic(value: number) {
    this._peAcosHarmonyTopic = value;
  }
  public resetPeAcosHarmonyTopic() {
    this._peAcosHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peAcosHarmonyTopicInput() {
    return this._peAcosHarmonyTopic;
  }

  // pe_acos_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _peAcosHarmonyTopicDequeueErr?: number; 
  public get peAcosHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('pe_acos_harmony_topic_dequeue_err');
  }
  public set peAcosHarmonyTopicDequeueErr(value: number) {
    this._peAcosHarmonyTopicDequeueErr = value;
  }
  public resetPeAcosHarmonyTopicDequeueErr() {
    this._peAcosHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peAcosHarmonyTopicDequeueErrInput() {
    return this._peAcosHarmonyTopicDequeueErr;
  }

  // pe_acos_harmony_topic_enqueue_err - computed: false, optional: true, required: false
  private _peAcosHarmonyTopicEnqueueErr?: number; 
  public get peAcosHarmonyTopicEnqueueErr() {
    return this.getNumberAttribute('pe_acos_harmony_topic_enqueue_err');
  }
  public set peAcosHarmonyTopicEnqueueErr(value: number) {
    this._peAcosHarmonyTopicEnqueueErr = value;
  }
  public resetPeAcosHarmonyTopicEnqueueErr() {
    this._peAcosHarmonyTopicEnqueueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peAcosHarmonyTopicEnqueueErrInput() {
    return this._peAcosHarmonyTopicEnqueueErr;
  }

  // pr_acos_harmony_topic - computed: false, optional: true, required: false
  private _prAcosHarmonyTopic?: number; 
  public get prAcosHarmonyTopic() {
    return this.getNumberAttribute('pr_acos_harmony_topic');
  }
  public set prAcosHarmonyTopic(value: number) {
    this._prAcosHarmonyTopic = value;
  }
  public resetPrAcosHarmonyTopic() {
    this._prAcosHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prAcosHarmonyTopicInput() {
    return this._prAcosHarmonyTopic;
  }

  // pr_acos_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _prAcosHarmonyTopicDequeueErr?: number; 
  public get prAcosHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('pr_acos_harmony_topic_dequeue_err');
  }
  public set prAcosHarmonyTopicDequeueErr(value: number) {
    this._prAcosHarmonyTopicDequeueErr = value;
  }
  public resetPrAcosHarmonyTopicDequeueErr() {
    this._prAcosHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prAcosHarmonyTopicDequeueErrInput() {
    return this._prAcosHarmonyTopicDequeueErr;
  }

  // pr_acos_harmony_topic_enqueue_err - computed: false, optional: true, required: false
  private _prAcosHarmonyTopicEnqueueErr?: number; 
  public get prAcosHarmonyTopicEnqueueErr() {
    return this.getNumberAttribute('pr_acos_harmony_topic_enqueue_err');
  }
  public set prAcosHarmonyTopicEnqueueErr(value: number) {
    this._prAcosHarmonyTopicEnqueueErr = value;
  }
  public resetPrAcosHarmonyTopicEnqueueErr() {
    this._prAcosHarmonyTopicEnqueueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prAcosHarmonyTopicEnqueueErrInput() {
    return this._prAcosHarmonyTopicEnqueueErr;
  }

  // pr_be_ttfb_anomaly - computed: false, optional: true, required: false
  private _prBeTtfbAnomaly?: number; 
  public get prBeTtfbAnomaly() {
    return this.getNumberAttribute('pr_be_ttfb_anomaly');
  }
  public set prBeTtfbAnomaly(value: number) {
    this._prBeTtfbAnomaly = value;
  }
  public resetPrBeTtfbAnomaly() {
    this._prBeTtfbAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prBeTtfbAnomalyInput() {
    return this._prBeTtfbAnomaly;
  }

  // pr_be_ttlb_anomaly - computed: false, optional: true, required: false
  private _prBeTtlbAnomaly?: number; 
  public get prBeTtlbAnomaly() {
    return this.getNumberAttribute('pr_be_ttlb_anomaly');
  }
  public set prBeTtlbAnomaly(value: number) {
    this._prBeTtlbAnomaly = value;
  }
  public resetPrBeTtlbAnomaly() {
    this._prBeTtlbAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prBeTtlbAnomalyInput() {
    return this._prBeTtlbAnomaly;
  }

  // pr_in_latency_anomaly - computed: false, optional: true, required: false
  private _prInLatencyAnomaly?: number; 
  public get prInLatencyAnomaly() {
    return this.getNumberAttribute('pr_in_latency_anomaly');
  }
  public set prInLatencyAnomaly(value: number) {
    this._prInLatencyAnomaly = value;
  }
  public resetPrInLatencyAnomaly() {
    this._prInLatencyAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prInLatencyAnomalyInput() {
    return this._prInLatencyAnomaly;
  }

  // pr_in_latency_threshold_exceed - computed: false, optional: true, required: false
  private _prInLatencyThresholdExceed?: number; 
  public get prInLatencyThresholdExceed() {
    return this.getNumberAttribute('pr_in_latency_threshold_exceed');
  }
  public set prInLatencyThresholdExceed(value: number) {
    this._prInLatencyThresholdExceed = value;
  }
  public resetPrInLatencyThresholdExceed() {
    this._prInLatencyThresholdExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prInLatencyThresholdExceedInput() {
    return this._prInLatencyThresholdExceed;
  }

  // pr_not_allowed_drop - computed: false, optional: true, required: false
  private _prNotAllowedDrop?: number; 
  public get prNotAllowedDrop() {
    return this.getNumberAttribute('pr_not_allowed_drop');
  }
  public set prNotAllowedDrop(value: number) {
    this._prNotAllowedDrop = value;
  }
  public resetPrNotAllowedDrop() {
    this._prNotAllowedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prNotAllowedDropInput() {
    return this._prNotAllowedDrop;
  }

  // pr_out_latency_anomaly - computed: false, optional: true, required: false
  private _prOutLatencyAnomaly?: number; 
  public get prOutLatencyAnomaly() {
    return this.getNumberAttribute('pr_out_latency_anomaly');
  }
  public set prOutLatencyAnomaly(value: number) {
    this._prOutLatencyAnomaly = value;
  }
  public resetPrOutLatencyAnomaly() {
    this._prOutLatencyAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prOutLatencyAnomalyInput() {
    return this._prOutLatencyAnomaly;
  }

  // pr_out_latency_threshold_exceed - computed: false, optional: true, required: false
  private _prOutLatencyThresholdExceed?: number; 
  public get prOutLatencyThresholdExceed() {
    return this.getNumberAttribute('pr_out_latency_threshold_exceed');
  }
  public set prOutLatencyThresholdExceed(value: number) {
    this._prOutLatencyThresholdExceed = value;
  }
  public resetPrOutLatencyThresholdExceed() {
    this._prOutLatencyThresholdExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prOutLatencyThresholdExceedInput() {
    return this._prOutLatencyThresholdExceed;
  }

  // pr_throttle_drop - computed: false, optional: true, required: false
  private _prThrottleDrop?: number; 
  public get prThrottleDrop() {
    return this.getNumberAttribute('pr_throttle_drop');
  }
  public set prThrottleDrop(value: number) {
    this._prThrottleDrop = value;
  }
  public resetPrThrottleDrop() {
    this._prThrottleDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prThrottleDropInput() {
    return this._prThrottleDrop;
  }

  // rule_set_application_metrics_topic - computed: false, optional: true, required: false
  private _ruleSetApplicationMetricsTopic?: number; 
  public get ruleSetApplicationMetricsTopic() {
    return this.getNumberAttribute('rule_set_application_metrics_topic');
  }
  public set ruleSetApplicationMetricsTopic(value: number) {
    this._ruleSetApplicationMetricsTopic = value;
  }
  public resetRuleSetApplicationMetricsTopic() {
    this._ruleSetApplicationMetricsTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetApplicationMetricsTopicInput() {
    return this._ruleSetApplicationMetricsTopic;
  }

  // rule_set_application_metrics_topic_dequeue_err - computed: false, optional: true, required: false
  private _ruleSetApplicationMetricsTopicDequeueErr?: number; 
  public get ruleSetApplicationMetricsTopicDequeueErr() {
    return this.getNumberAttribute('rule_set_application_metrics_topic_dequeue_err');
  }
  public set ruleSetApplicationMetricsTopicDequeueErr(value: number) {
    this._ruleSetApplicationMetricsTopicDequeueErr = value;
  }
  public resetRuleSetApplicationMetricsTopicDequeueErr() {
    this._ruleSetApplicationMetricsTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetApplicationMetricsTopicDequeueErrInput() {
    return this._ruleSetApplicationMetricsTopicDequeueErr;
  }

  // slb_client_ssl_counters_metrics_topic - computed: false, optional: true, required: false
  private _slbClientSslCountersMetricsTopic?: number; 
  public get slbClientSslCountersMetricsTopic() {
    return this.getNumberAttribute('slb_client_ssl_counters_metrics_topic');
  }
  public set slbClientSslCountersMetricsTopic(value: number) {
    this._slbClientSslCountersMetricsTopic = value;
  }
  public resetSlbClientSslCountersMetricsTopic() {
    this._slbClientSslCountersMetricsTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbClientSslCountersMetricsTopicInput() {
    return this._slbClientSslCountersMetricsTopic;
  }

  // slb_client_ssl_counters_metrics_topic_dequeue_err - computed: false, optional: true, required: false
  private _slbClientSslCountersMetricsTopicDequeueErr?: number; 
  public get slbClientSslCountersMetricsTopicDequeueErr() {
    return this.getNumberAttribute('slb_client_ssl_counters_metrics_topic_dequeue_err');
  }
  public set slbClientSslCountersMetricsTopicDequeueErr(value: number) {
    this._slbClientSslCountersMetricsTopicDequeueErr = value;
  }
  public resetSlbClientSslCountersMetricsTopicDequeueErr() {
    this._slbClientSslCountersMetricsTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbClientSslCountersMetricsTopicDequeueErrInput() {
    return this._slbClientSslCountersMetricsTopicDequeueErr;
  }

  // slb_server_ssl_counters_metrics_topic - computed: false, optional: true, required: false
  private _slbServerSslCountersMetricsTopic?: number; 
  public get slbServerSslCountersMetricsTopic() {
    return this.getNumberAttribute('slb_server_ssl_counters_metrics_topic');
  }
  public set slbServerSslCountersMetricsTopic(value: number) {
    this._slbServerSslCountersMetricsTopic = value;
  }
  public resetSlbServerSslCountersMetricsTopic() {
    this._slbServerSslCountersMetricsTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbServerSslCountersMetricsTopicInput() {
    return this._slbServerSslCountersMetricsTopic;
  }

  // slb_server_ssl_counters_metrics_topic_dequeue_err - computed: false, optional: true, required: false
  private _slbServerSslCountersMetricsTopicDequeueErr?: number; 
  public get slbServerSslCountersMetricsTopicDequeueErr() {
    return this.getNumberAttribute('slb_server_ssl_counters_metrics_topic_dequeue_err');
  }
  public set slbServerSslCountersMetricsTopicDequeueErr(value: number) {
    this._slbServerSslCountersMetricsTopicDequeueErr = value;
  }
  public resetSlbServerSslCountersMetricsTopicDequeueErr() {
    this._slbServerSslCountersMetricsTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbServerSslCountersMetricsTopicDequeueErrInput() {
    return this._slbServerSslCountersMetricsTopicDequeueErr;
  }

  // slb_ssl_stats_metrics_topic - computed: false, optional: true, required: false
  private _slbSslStatsMetricsTopic?: number; 
  public get slbSslStatsMetricsTopic() {
    return this.getNumberAttribute('slb_ssl_stats_metrics_topic');
  }
  public set slbSslStatsMetricsTopic(value: number) {
    this._slbSslStatsMetricsTopic = value;
  }
  public resetSlbSslStatsMetricsTopic() {
    this._slbSslStatsMetricsTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbSslStatsMetricsTopicInput() {
    return this._slbSslStatsMetricsTopic;
  }

  // slb_ssl_stats_metrics_topic_dequeue_err - computed: false, optional: true, required: false
  private _slbSslStatsMetricsTopicDequeueErr?: number; 
  public get slbSslStatsMetricsTopicDequeueErr() {
    return this.getNumberAttribute('slb_ssl_stats_metrics_topic_dequeue_err');
  }
  public set slbSslStatsMetricsTopicDequeueErr(value: number) {
    this._slbSslStatsMetricsTopicDequeueErr = value;
  }
  public resetSlbSslStatsMetricsTopicDequeueErr() {
    this._slbSslStatsMetricsTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbSslStatsMetricsTopicDequeueErrInput() {
    return this._slbSslStatsMetricsTopicDequeueErr;
  }

  // ssli_pc_acos_harmony_topic - computed: false, optional: true, required: false
  private _ssliPcAcosHarmonyTopic?: number; 
  public get ssliPcAcosHarmonyTopic() {
    return this.getNumberAttribute('ssli_pc_acos_harmony_topic');
  }
  public set ssliPcAcosHarmonyTopic(value: number) {
    this._ssliPcAcosHarmonyTopic = value;
  }
  public resetSsliPcAcosHarmonyTopic() {
    this._ssliPcAcosHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliPcAcosHarmonyTopicInput() {
    return this._ssliPcAcosHarmonyTopic;
  }

  // ssli_pc_acos_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _ssliPcAcosHarmonyTopicDequeueErr?: number; 
  public get ssliPcAcosHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('ssli_pc_acos_harmony_topic_dequeue_err');
  }
  public set ssliPcAcosHarmonyTopicDequeueErr(value: number) {
    this._ssliPcAcosHarmonyTopicDequeueErr = value;
  }
  public resetSsliPcAcosHarmonyTopicDequeueErr() {
    this._ssliPcAcosHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliPcAcosHarmonyTopicDequeueErrInput() {
    return this._ssliPcAcosHarmonyTopicDequeueErr;
  }

  // ssli_pe_acos_harmony_topic - computed: false, optional: true, required: false
  private _ssliPeAcosHarmonyTopic?: number; 
  public get ssliPeAcosHarmonyTopic() {
    return this.getNumberAttribute('ssli_pe_acos_harmony_topic');
  }
  public set ssliPeAcosHarmonyTopic(value: number) {
    this._ssliPeAcosHarmonyTopic = value;
  }
  public resetSsliPeAcosHarmonyTopic() {
    this._ssliPeAcosHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliPeAcosHarmonyTopicInput() {
    return this._ssliPeAcosHarmonyTopic;
  }

  // ssli_pe_acos_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _ssliPeAcosHarmonyTopicDequeueErr?: number; 
  public get ssliPeAcosHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('ssli_pe_acos_harmony_topic_dequeue_err');
  }
  public set ssliPeAcosHarmonyTopicDequeueErr(value: number) {
    this._ssliPeAcosHarmonyTopicDequeueErr = value;
  }
  public resetSsliPeAcosHarmonyTopicDequeueErr() {
    this._ssliPeAcosHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliPeAcosHarmonyTopicDequeueErrInput() {
    return this._ssliPeAcosHarmonyTopicDequeueErr;
  }

  // visibility_topn_harmony_topic - computed: false, optional: true, required: false
  private _visibilityTopnHarmonyTopic?: number; 
  public get visibilityTopnHarmonyTopic() {
    return this.getNumberAttribute('visibility_topn_harmony_topic');
  }
  public set visibilityTopnHarmonyTopic(value: number) {
    this._visibilityTopnHarmonyTopic = value;
  }
  public resetVisibilityTopnHarmonyTopic() {
    this._visibilityTopnHarmonyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTopnHarmonyTopicInput() {
    return this._visibilityTopnHarmonyTopic;
  }

  // visibility_topn_harmony_topic_dequeue_err - computed: false, optional: true, required: false
  private _visibilityTopnHarmonyTopicDequeueErr?: number; 
  public get visibilityTopnHarmonyTopicDequeueErr() {
    return this.getNumberAttribute('visibility_topn_harmony_topic_dequeue_err');
  }
  public set visibilityTopnHarmonyTopicDequeueErr(value: number) {
    this._visibilityTopnHarmonyTopicDequeueErr = value;
  }
  public resetVisibilityTopnHarmonyTopicDequeueErr() {
    this._visibilityTopnHarmonyTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTopnHarmonyTopicDequeueErrInput() {
    return this._visibilityTopnHarmonyTopicDequeueErr;
  }

  // vpn_ike_gateway_metrics_topic - computed: false, optional: true, required: false
  private _vpnIkeGatewayMetricsTopic?: number; 
  public get vpnIkeGatewayMetricsTopic() {
    return this.getNumberAttribute('vpn_ike_gateway_metrics_topic');
  }
  public set vpnIkeGatewayMetricsTopic(value: number) {
    this._vpnIkeGatewayMetricsTopic = value;
  }
  public resetVpnIkeGatewayMetricsTopic() {
    this._vpnIkeGatewayMetricsTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIkeGatewayMetricsTopicInput() {
    return this._vpnIkeGatewayMetricsTopic;
  }

  // vpn_ike_gateway_metrics_topic_dequeue_err - computed: false, optional: true, required: false
  private _vpnIkeGatewayMetricsTopicDequeueErr?: number; 
  public get vpnIkeGatewayMetricsTopicDequeueErr() {
    return this.getNumberAttribute('vpn_ike_gateway_metrics_topic_dequeue_err');
  }
  public set vpnIkeGatewayMetricsTopicDequeueErr(value: number) {
    this._vpnIkeGatewayMetricsTopicDequeueErr = value;
  }
  public resetVpnIkeGatewayMetricsTopicDequeueErr() {
    this._vpnIkeGatewayMetricsTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIkeGatewayMetricsTopicDequeueErrInput() {
    return this._vpnIkeGatewayMetricsTopicDequeueErr;
  }

  // vpn_ipsec_sa_metrics_topic - computed: false, optional: true, required: false
  private _vpnIpsecSaMetricsTopic?: number; 
  public get vpnIpsecSaMetricsTopic() {
    return this.getNumberAttribute('vpn_ipsec_sa_metrics_topic');
  }
  public set vpnIpsecSaMetricsTopic(value: number) {
    this._vpnIpsecSaMetricsTopic = value;
  }
  public resetVpnIpsecSaMetricsTopic() {
    this._vpnIpsecSaMetricsTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIpsecSaMetricsTopicInput() {
    return this._vpnIpsecSaMetricsTopic;
  }

  // vpn_ipsec_sa_metrics_topic_dequeue_err - computed: false, optional: true, required: false
  private _vpnIpsecSaMetricsTopicDequeueErr?: number; 
  public get vpnIpsecSaMetricsTopicDequeueErr() {
    return this.getNumberAttribute('vpn_ipsec_sa_metrics_topic_dequeue_err');
  }
  public set vpnIpsecSaMetricsTopicDequeueErr(value: number) {
    this._vpnIpsecSaMetricsTopicDequeueErr = value;
  }
  public resetVpnIpsecSaMetricsTopicDequeueErr() {
    this._vpnIpsecSaMetricsTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIpsecSaMetricsTopicDequeueErrInput() {
    return this._vpnIpsecSaMetricsTopicDequeueErr;
  }

  // vpn_stats_metrics_topic - computed: false, optional: true, required: false
  private _vpnStatsMetricsTopic?: number; 
  public get vpnStatsMetricsTopic() {
    return this.getNumberAttribute('vpn_stats_metrics_topic');
  }
  public set vpnStatsMetricsTopic(value: number) {
    this._vpnStatsMetricsTopic = value;
  }
  public resetVpnStatsMetricsTopic() {
    this._vpnStatsMetricsTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnStatsMetricsTopicInput() {
    return this._vpnStatsMetricsTopic;
  }

  // vpn_stats_metrics_topic_dequeue_err - computed: false, optional: true, required: false
  private _vpnStatsMetricsTopicDequeueErr?: number; 
  public get vpnStatsMetricsTopicDequeueErr() {
    return this.getNumberAttribute('vpn_stats_metrics_topic_dequeue_err');
  }
  public set vpnStatsMetricsTopicDequeueErr(value: number) {
    this._vpnStatsMetricsTopicDequeueErr = value;
  }
  public resetVpnStatsMetricsTopicDequeueErr() {
    this._vpnStatsMetricsTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnStatsMetricsTopicDequeueErrInput() {
    return this._vpnStatsMetricsTopicDequeueErr;
  }

  // waf_events_topic - computed: false, optional: true, required: false
  private _wafEventsTopic?: number; 
  public get wafEventsTopic() {
    return this.getNumberAttribute('waf_events_topic');
  }
  public set wafEventsTopic(value: number) {
    this._wafEventsTopic = value;
  }
  public resetWafEventsTopic() {
    this._wafEventsTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafEventsTopicInput() {
    return this._wafEventsTopic;
  }

  // waf_events_topic_dequeue_err - computed: false, optional: true, required: false
  private _wafEventsTopicDequeueErr?: number; 
  public get wafEventsTopicDequeueErr() {
    return this.getNumberAttribute('waf_events_topic_dequeue_err');
  }
  public set wafEventsTopicDequeueErr(value: number) {
    this._wafEventsTopicDequeueErr = value;
  }
  public resetWafEventsTopicDequeueErr() {
    this._wafEventsTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafEventsTopicDequeueErrInput() {
    return this._wafEventsTopicDequeueErr;
  }

  // waf_learn_pr_topic - computed: false, optional: true, required: false
  private _wafLearnPrTopic?: number; 
  public get wafLearnPrTopic() {
    return this.getNumberAttribute('waf_learn_pr_topic');
  }
  public set wafLearnPrTopic(value: number) {
    this._wafLearnPrTopic = value;
  }
  public resetWafLearnPrTopic() {
    this._wafLearnPrTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafLearnPrTopicInput() {
    return this._wafLearnPrTopic;
  }

  // waf_learn_pr_topic_dequeue_err - computed: false, optional: true, required: false
  private _wafLearnPrTopicDequeueErr?: number; 
  public get wafLearnPrTopicDequeueErr() {
    return this.getNumberAttribute('waf_learn_pr_topic_dequeue_err');
  }
  public set wafLearnPrTopicDequeueErr(value: number) {
    this._wafLearnPrTopicDequeueErr = value;
  }
  public resetWafLearnPrTopicDequeueErr() {
    this._wafLearnPrTopicDequeueErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafLearnPrTopicDequeueErrInput() {
    return this._wafLearnPrTopicDequeueErr;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats thunder_event_notification_kafka_server_stats}
*/
export class DataThunderEventNotificationKafkaServerStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_event_notification_kafka_server_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderEventNotificationKafkaServerStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderEventNotificationKafkaServerStats to import
  * @param importFromId The id of the existing DataThunderEventNotificationKafkaServerStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderEventNotificationKafkaServerStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_event_notification_kafka_server_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/event_notification_kafka_server_stats thunder_event_notification_kafka_server_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderEventNotificationKafkaServerStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderEventNotificationKafkaServerStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_event_notification_kafka_server_stats',
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
  private _stats = new DataThunderEventNotificationKafkaServerStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderEventNotificationKafkaServerStatsStats) {
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
      stats: dataThunderEventNotificationKafkaServerStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderEventNotificationKafkaServerStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderEventNotificationKafkaServerStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
