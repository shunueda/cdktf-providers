// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityPacketCaptureCaptureConfigStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#id DataThunderVisibilityPacketCaptureCaptureConfigStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the name of the capture-config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#name DataThunderVisibilityPacketCaptureCaptureConfigStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#stats DataThunderVisibilityPacketCaptureCaptureConfigStats#stats}
  */
  readonly stats?: DataThunderVisibilityPacketCaptureCaptureConfigStatsStats;
}
export interface DataThunderVisibilityPacketCaptureCaptureConfigStatsStats {
  /**
  * Auto pcapng files merged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#auto_pcap_file_merged DataThunderVisibilityPacketCaptureCaptureConfigStats#auto_pcap_file_merged}
  */
  readonly autoPcapFileMerged?: number;
  /**
  * Auto pcapng files merged failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#auto_pcap_file_merged_failed DataThunderVisibilityPacketCaptureCaptureConfigStats#auto_pcap_file_merged_failed}
  */
  readonly autoPcapFileMergedFailed?: number;
  /**
  * Dynamic Capture(ctr anomaly based) freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#concurrent_capture_by_ctr_anomaly_freed DataThunderVisibilityPacketCaptureCaptureConfigStats#concurrent_capture_by_ctr_anomaly_freed}
  */
  readonly concurrentCaptureByCtrAnomalyFreed?: number;
  /**
  * Dynamic Capture(ctr increment based) freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#concurrent_capture_by_ctr_increment_freed DataThunderVisibilityPacketCaptureCaptureConfigStats#concurrent_capture_by_ctr_increment_freed}
  */
  readonly concurrentCaptureByCtrIncrementFreed?: number;
  /**
  * Dynamic Capture(Other feature based) freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#concurrent_capture_by_ctr_other_feature_freed DataThunderVisibilityPacketCaptureCaptureConfigStats#concurrent_capture_by_ctr_other_feature_freed}
  */
  readonly concurrentCaptureByCtrOtherFeatureFreed?: number;
  /**
  * Error, Dynamic Capture(ctr anomaly based) create failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#concurrent_capture_create_failed_by_ctr_anomaly DataThunderVisibilityPacketCaptureCaptureConfigStats#concurrent_capture_create_failed_by_ctr_anomaly}
  */
  readonly concurrentCaptureCreateFailedByCtrAnomaly?: number;
  /**
  * Error, Dynamic Capture(ctr increment based) create failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#concurrent_capture_create_failed_by_ctr_increment DataThunderVisibilityPacketCaptureCaptureConfigStats#concurrent_capture_create_failed_by_ctr_increment}
  */
  readonly concurrentCaptureCreateFailedByCtrIncrement?: number;
  /**
  * Error, Dynamic Capture(Other feature based) create failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#concurrent_capture_create_failed_by_other_feature DataThunderVisibilityPacketCaptureCaptureConfigStats#concurrent_capture_create_failed_by_other_feature}
  */
  readonly concurrentCaptureCreateFailedByOtherFeature?: number;
  /**
  * Error, Dynamic Capture create failed, OOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#concurrent_capture_create_failed_oom DataThunderVisibilityPacketCaptureCaptureConfigStats#concurrent_capture_create_failed_oom}
  */
  readonly concurrentCaptureCreateFailedOom?: number;
  /**
  * Dynamic 3 tuple based capture created (ctr anomaly based)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#concurrent_capture_created_by_ctr_anomaly DataThunderVisibilityPacketCaptureCaptureConfigStats#concurrent_capture_created_by_ctr_anomaly}
  */
  readonly concurrentCaptureCreatedByCtrAnomaly?: number;
  /**
  * Dynamic 3 tuple based capture created (ctr increment based)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#concurrent_capture_created_by_ctr_increment DataThunderVisibilityPacketCaptureCaptureConfigStats#concurrent_capture_created_by_ctr_increment}
  */
  readonly concurrentCaptureCreatedByCtrIncrement?: number;
  /**
  * Number of Dynamic captures(3 tuple based) finished capturing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#concurrent_capture_finished DataThunderVisibilityPacketCaptureCaptureConfigStats#concurrent_capture_finished}
  */
  readonly concurrentCaptureFinished?: number;
  /**
  * Dynamic Capture configured concurrent limit reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#concurrent_capture_limit_reached DataThunderVisibilityPacketCaptureCaptureConfigStats#concurrent_capture_limit_reached}
  */
  readonly concurrentCaptureLimitReached?: number;
  /**
  * Error, Conn extension creation fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#conn_ext_failed DataThunderVisibilityPacketCaptureCaptureConfigStats#conn_ext_failed}
  */
  readonly connExtFailed?: number;
  /**
  * Skip capturing, capture-config marked completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#failed_as_return_completed_set DataThunderVisibilityPacketCaptureCaptureConfigStats#failed_as_return_completed_set}
  */
  readonly failedAsReturnCompletedSet?: number;
  /**
  * Error, Capture fail, Disk limit reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#failed_disk_full DataThunderVisibilityPacketCaptureCaptureConfigStats#failed_disk_full}
  */
  readonly failedDiskFull?: number;
  /**
  * Number of times global capture finished capturing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#global_capture_finished DataThunderVisibilityPacketCaptureCaptureConfigStats#global_capture_finished}
  */
  readonly globalCaptureFinished?: number;
  /**
  * Skip capturing, not packet processing path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#non_pkt_path DataThunderVisibilityPacketCaptureCaptureConfigStats#non_pkt_path}
  */
  readonly nonPktPath?: number;
  /**
  * Conn tag success (based on ctr anomaly, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_anomaly DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_anomaly}
  */
  readonly numConnsTaggedAnomaly?: number;
  /**
  * Conn tag fail (based on ctr anomaly, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_anomaly_fail DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_anomaly_fail}
  */
  readonly numConnsTaggedAnomalyFail?: number;
  /**
  * Conn tag fail, reached limit (based on ctr anomaly, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_anomaly_maxed DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_anomaly_maxed}
  */
  readonly numConnsTaggedAnomalyMaxed?: number;
  /**
  * Conn tag success (based on ctr anomaly, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_global_anomaly DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_global_anomaly}
  */
  readonly numConnsTaggedGlobalAnomaly?: number;
  /**
  * Conn tag fail (based on ctr anomaly, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_global_anomaly_fail DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_global_anomaly_fail}
  */
  readonly numConnsTaggedGlobalAnomalyFail?: number;
  /**
  * Conn tag fail, reached limit (based on ctr anomaly, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_global_anomaly_maxed DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_global_anomaly_maxed}
  */
  readonly numConnsTaggedGlobalAnomalyMaxed?: number;
  /**
  * Conn tag success (based on ctr increment, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_global_increment DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_global_increment}
  */
  readonly numConnsTaggedGlobalIncrement?: number;
  /**
  * Conn tag fail (based on ctr increment, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_global_increment_fail DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_global_increment_fail}
  */
  readonly numConnsTaggedGlobalIncrementFail?: number;
  /**
  * Conn tag fail, reached limit (based on ctr increment, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_global_increment_maxed DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_global_increment_maxed}
  */
  readonly numConnsTaggedGlobalIncrementMaxed?: number;
  /**
  * Conn tag success (based on Other feature, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_global_other_feature DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_global_other_feature}
  */
  readonly numConnsTaggedGlobalOtherFeature?: number;
  /**
  * Conn tag fail (based on Other feature, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_global_other_feature_fail DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_global_other_feature_fail}
  */
  readonly numConnsTaggedGlobalOtherFeatureFail?: number;
  /**
  * Conn tag fail, reached limit (based on Other feature, Global)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_global_other_feature_maxed DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_global_other_feature_maxed}
  */
  readonly numConnsTaggedGlobalOtherFeatureMaxed?: number;
  /**
  * Conn tag success (based on ctr increment, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_increment DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_increment}
  */
  readonly numConnsTaggedIncrement?: number;
  /**
  * Conn tag fail (based on ctr increment, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_increment_fail DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_increment_fail}
  */
  readonly numConnsTaggedIncrementFail?: number;
  /**
  * Conn tag fail, reached limit (based on ctr increment, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_increment_maxed DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_increment_maxed}
  */
  readonly numConnsTaggedIncrementMaxed?: number;
  /**
  * Conn tag success (based on Other feature, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_other_feature DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_other_feature}
  */
  readonly numConnsTaggedOtherFeature?: number;
  /**
  * Conn tag fail (based on Other feature, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_other_feature_fail DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_other_feature_fail}
  */
  readonly numConnsTaggedOtherFeatureFail?: number;
  /**
  * Conn tag fail, reached limit (based on Other feature, dynamic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_tagged_other_feature_maxed DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_tagged_other_feature_maxed}
  */
  readonly numConnsTaggedOtherFeatureMaxed?: number;
  /**
  * Number of conns untagged (done with conn limit or capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_conns_untagged DataThunderVisibilityPacketCaptureCaptureConfigStats#num_conns_untagged}
  */
  readonly numConnsUntagged?: number;
  /**
  * Number of dynamic capture-config created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_dynamic_capture_config_created DataThunderVisibilityPacketCaptureCaptureConfigStats#num_dynamic_capture_config_created}
  */
  readonly numDynamicCaptureConfigCreated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_dynamic_capture_config_delete_q DataThunderVisibilityPacketCaptureCaptureConfigStats#num_dynamic_capture_config_delete_q}
  */
  readonly numDynamicCaptureConfigDeleteQ?: number;
  /**
  * Number of dynamic capture-config deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_dynamic_capture_config_deleted DataThunderVisibilityPacketCaptureCaptureConfigStats#num_dynamic_capture_config_deleted}
  */
  readonly numDynamicCaptureConfigDeleted?: number;
  /**
  * Number of global objects deregistered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_global_counters_deregistered DataThunderVisibilityPacketCaptureCaptureConfigStats#num_global_counters_deregistered}
  */
  readonly numGlobalCountersDeregistered?: number;
  /**
  * Number of global objects registered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_global_counters_registered DataThunderVisibilityPacketCaptureCaptureConfigStats#num_global_counters_registered}
  */
  readonly numGlobalCountersRegistered?: number;
  /**
  * Number of times ctr Anomaly cleared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_of_anomalies_cleared DataThunderVisibilityPacketCaptureCaptureConfigStats#num_of_anomalies_cleared}
  */
  readonly numOfAnomaliesCleared?: number;
  /**
  * Number of times ctr Anomaly detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_of_anomalies_detected DataThunderVisibilityPacketCaptureCaptureConfigStats#num_of_anomalies_detected}
  */
  readonly numOfAnomaliesDetected?: number;
  /**
  * Error, Number of pcapng files creation failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_pcaps_create_failed DataThunderVisibilityPacketCaptureCaptureConfigStats#num_pcaps_create_failed}
  */
  readonly numPcapsCreateFailed?: number;
  /**
  * Number of pcapng files created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_pcaps_created DataThunderVisibilityPacketCaptureCaptureConfigStats#num_pcaps_created}
  */
  readonly numPcapsCreated?: number;
  /**
  * Number of per instance objects deregistered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_per_object_counters_deregistered DataThunderVisibilityPacketCaptureCaptureConfigStats#num_per_object_counters_deregistered}
  */
  readonly numPerObjectCountersDeregistered?: number;
  /**
  * Number of per instance objects registered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_per_object_counters_registered DataThunderVisibilityPacketCaptureCaptureConfigStats#num_per_object_counters_registered}
  */
  readonly numPerObjectCountersRegistered?: number;
  /**
  * Number of temporary pcapng files created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#num_tmp_pcaps_created DataThunderVisibilityPacketCaptureCaptureConfigStats#num_tmp_pcaps_created}
  */
  readonly numTmpPcapsCreated?: number;
  /**
  * Skip capturing, packet already captured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pkt_already_captured DataThunderVisibilityPacketCaptureCaptureConfigStats#pkt_already_captured}
  */
  readonly pktAlreadyCaptured?: number;
  /**
  * Error, Automated Packet capture infra OOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcap_oom DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcap_oom}
  */
  readonly pktcapOom?: number;
  /**
  * Capture fail, file size reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_failure_file_size_rchd DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_failure_file_size_rchd}
  */
  readonly pktcaptureFailureFileSizeRchd?: number;
  /**
  * Capture fail, waiting to get free buffer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_failure_wait_for_block DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_failure_wait_for_block}
  */
  readonly pktcaptureFailureWaitForBlock?: number;
  /**
  * Capture triggered by counter anomaly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_triggered_by_anomaly DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_triggered_by_anomaly}
  */
  readonly pktcaptureTriggeredByAnomaly?: number;
  /**
  * Capture triggered by counter increment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_triggered_by_increment DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_triggered_by_increment}
  */
  readonly pktcaptureTriggeredByIncrement?: number;
  /**
  * Capture triggered by Other feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_triggered_by_other_feature DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_triggered_by_other_feature}
  */
  readonly pktcaptureTriggeredByOtherFeature?: number;
  /**
  * Capture fail, Packets with untagged conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_with_conn_but_not_tagged_failure DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_with_conn_but_not_tagged_failure}
  */
  readonly pktcaptureWithConnButNotTaggedFailure?: number;
  /**
  * Capture success, Packets with untagged conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_with_conn_but_not_tagged_success DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_with_conn_but_not_tagged_success}
  */
  readonly pktcaptureWithConnButNotTaggedSuccess?: number;
  /**
  * Capture fail, Packets with tagged conn (dynamic capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_with_conn_failure DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_with_conn_failure}
  */
  readonly pktcaptureWithConnFailure?: number;
  /**
  * Capture fail, Packets with tagged conn (global capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_with_conn_failure_global DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_with_conn_failure_global}
  */
  readonly pktcaptureWithConnFailureGlobal?: number;
  /**
  * Capture success, Packets with tagged conn (dynamic capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_with_conn_success DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_with_conn_success}
  */
  readonly pktcaptureWithConnSuccess?: number;
  /**
  * Capture success, Packets with tagged conn (global capture)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_with_conn_success_global DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_with_conn_success_global}
  */
  readonly pktcaptureWithConnSuccessGlobal?: number;
  /**
  * Capture fail, Packets without conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_with_no_conn_failure DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_with_no_conn_failure}
  */
  readonly pktcaptureWithNoConnFailure?: number;
  /**
  * Capture success, Packets without conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#pktcapture_with_no_conn_success DataThunderVisibilityPacketCaptureCaptureConfigStats#pktcapture_with_no_conn_success}
  */
  readonly pktcaptureWithNoConnSuccess?: number;
  /**
  * Skip creating capture, conn was already captured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#skip_as_conn_already_recapture DataThunderVisibilityPacketCaptureCaptureConfigStats#skip_as_conn_already_recapture}
  */
  readonly skipAsConnAlreadyRecapture?: number;
  /**
  * Skip capturing, conn was created before the capture started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#skip_capture_as_conn_created_before_smp DataThunderVisibilityPacketCaptureCaptureConfigStats#skip_capture_as_conn_created_before_smp}
  */
  readonly skipCaptureAsConnCreatedBeforeSmp?: number;
  /**
  * Counter increment issue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#wrong_ctr_incremented DataThunderVisibilityPacketCaptureCaptureConfigStats#wrong_ctr_incremented}
  */
  readonly wrongCtrIncremented?: number;
}

export function dataThunderVisibilityPacketCaptureCaptureConfigStatsStatsToTerraform(struct?: DataThunderVisibilityPacketCaptureCaptureConfigStatsStatsOutputReference | DataThunderVisibilityPacketCaptureCaptureConfigStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_pcap_file_merged: cdktf.numberToTerraform(struct!.autoPcapFileMerged),
    auto_pcap_file_merged_failed: cdktf.numberToTerraform(struct!.autoPcapFileMergedFailed),
    concurrent_capture_by_ctr_anomaly_freed: cdktf.numberToTerraform(struct!.concurrentCaptureByCtrAnomalyFreed),
    concurrent_capture_by_ctr_increment_freed: cdktf.numberToTerraform(struct!.concurrentCaptureByCtrIncrementFreed),
    concurrent_capture_by_ctr_other_feature_freed: cdktf.numberToTerraform(struct!.concurrentCaptureByCtrOtherFeatureFreed),
    concurrent_capture_create_failed_by_ctr_anomaly: cdktf.numberToTerraform(struct!.concurrentCaptureCreateFailedByCtrAnomaly),
    concurrent_capture_create_failed_by_ctr_increment: cdktf.numberToTerraform(struct!.concurrentCaptureCreateFailedByCtrIncrement),
    concurrent_capture_create_failed_by_other_feature: cdktf.numberToTerraform(struct!.concurrentCaptureCreateFailedByOtherFeature),
    concurrent_capture_create_failed_oom: cdktf.numberToTerraform(struct!.concurrentCaptureCreateFailedOom),
    concurrent_capture_created_by_ctr_anomaly: cdktf.numberToTerraform(struct!.concurrentCaptureCreatedByCtrAnomaly),
    concurrent_capture_created_by_ctr_increment: cdktf.numberToTerraform(struct!.concurrentCaptureCreatedByCtrIncrement),
    concurrent_capture_finished: cdktf.numberToTerraform(struct!.concurrentCaptureFinished),
    concurrent_capture_limit_reached: cdktf.numberToTerraform(struct!.concurrentCaptureLimitReached),
    conn_ext_failed: cdktf.numberToTerraform(struct!.connExtFailed),
    failed_as_return_completed_set: cdktf.numberToTerraform(struct!.failedAsReturnCompletedSet),
    failed_disk_full: cdktf.numberToTerraform(struct!.failedDiskFull),
    global_capture_finished: cdktf.numberToTerraform(struct!.globalCaptureFinished),
    non_pkt_path: cdktf.numberToTerraform(struct!.nonPktPath),
    num_conns_tagged_anomaly: cdktf.numberToTerraform(struct!.numConnsTaggedAnomaly),
    num_conns_tagged_anomaly_fail: cdktf.numberToTerraform(struct!.numConnsTaggedAnomalyFail),
    num_conns_tagged_anomaly_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedAnomalyMaxed),
    num_conns_tagged_global_anomaly: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalAnomaly),
    num_conns_tagged_global_anomaly_fail: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalAnomalyFail),
    num_conns_tagged_global_anomaly_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalAnomalyMaxed),
    num_conns_tagged_global_increment: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalIncrement),
    num_conns_tagged_global_increment_fail: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalIncrementFail),
    num_conns_tagged_global_increment_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalIncrementMaxed),
    num_conns_tagged_global_other_feature: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalOtherFeature),
    num_conns_tagged_global_other_feature_fail: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalOtherFeatureFail),
    num_conns_tagged_global_other_feature_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedGlobalOtherFeatureMaxed),
    num_conns_tagged_increment: cdktf.numberToTerraform(struct!.numConnsTaggedIncrement),
    num_conns_tagged_increment_fail: cdktf.numberToTerraform(struct!.numConnsTaggedIncrementFail),
    num_conns_tagged_increment_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedIncrementMaxed),
    num_conns_tagged_other_feature: cdktf.numberToTerraform(struct!.numConnsTaggedOtherFeature),
    num_conns_tagged_other_feature_fail: cdktf.numberToTerraform(struct!.numConnsTaggedOtherFeatureFail),
    num_conns_tagged_other_feature_maxed: cdktf.numberToTerraform(struct!.numConnsTaggedOtherFeatureMaxed),
    num_conns_untagged: cdktf.numberToTerraform(struct!.numConnsUntagged),
    num_dynamic_capture_config_created: cdktf.numberToTerraform(struct!.numDynamicCaptureConfigCreated),
    num_dynamic_capture_config_delete_q: cdktf.numberToTerraform(struct!.numDynamicCaptureConfigDeleteQ),
    num_dynamic_capture_config_deleted: cdktf.numberToTerraform(struct!.numDynamicCaptureConfigDeleted),
    num_global_counters_deregistered: cdktf.numberToTerraform(struct!.numGlobalCountersDeregistered),
    num_global_counters_registered: cdktf.numberToTerraform(struct!.numGlobalCountersRegistered),
    num_of_anomalies_cleared: cdktf.numberToTerraform(struct!.numOfAnomaliesCleared),
    num_of_anomalies_detected: cdktf.numberToTerraform(struct!.numOfAnomaliesDetected),
    num_pcaps_create_failed: cdktf.numberToTerraform(struct!.numPcapsCreateFailed),
    num_pcaps_created: cdktf.numberToTerraform(struct!.numPcapsCreated),
    num_per_object_counters_deregistered: cdktf.numberToTerraform(struct!.numPerObjectCountersDeregistered),
    num_per_object_counters_registered: cdktf.numberToTerraform(struct!.numPerObjectCountersRegistered),
    num_tmp_pcaps_created: cdktf.numberToTerraform(struct!.numTmpPcapsCreated),
    pkt_already_captured: cdktf.numberToTerraform(struct!.pktAlreadyCaptured),
    pktcap_oom: cdktf.numberToTerraform(struct!.pktcapOom),
    pktcapture_failure_file_size_rchd: cdktf.numberToTerraform(struct!.pktcaptureFailureFileSizeRchd),
    pktcapture_failure_wait_for_block: cdktf.numberToTerraform(struct!.pktcaptureFailureWaitForBlock),
    pktcapture_triggered_by_anomaly: cdktf.numberToTerraform(struct!.pktcaptureTriggeredByAnomaly),
    pktcapture_triggered_by_increment: cdktf.numberToTerraform(struct!.pktcaptureTriggeredByIncrement),
    pktcapture_triggered_by_other_feature: cdktf.numberToTerraform(struct!.pktcaptureTriggeredByOtherFeature),
    pktcapture_with_conn_but_not_tagged_failure: cdktf.numberToTerraform(struct!.pktcaptureWithConnButNotTaggedFailure),
    pktcapture_with_conn_but_not_tagged_success: cdktf.numberToTerraform(struct!.pktcaptureWithConnButNotTaggedSuccess),
    pktcapture_with_conn_failure: cdktf.numberToTerraform(struct!.pktcaptureWithConnFailure),
    pktcapture_with_conn_failure_global: cdktf.numberToTerraform(struct!.pktcaptureWithConnFailureGlobal),
    pktcapture_with_conn_success: cdktf.numberToTerraform(struct!.pktcaptureWithConnSuccess),
    pktcapture_with_conn_success_global: cdktf.numberToTerraform(struct!.pktcaptureWithConnSuccessGlobal),
    pktcapture_with_no_conn_failure: cdktf.numberToTerraform(struct!.pktcaptureWithNoConnFailure),
    pktcapture_with_no_conn_success: cdktf.numberToTerraform(struct!.pktcaptureWithNoConnSuccess),
    skip_as_conn_already_recapture: cdktf.numberToTerraform(struct!.skipAsConnAlreadyRecapture),
    skip_capture_as_conn_created_before_smp: cdktf.numberToTerraform(struct!.skipCaptureAsConnCreatedBeforeSmp),
    wrong_ctr_incremented: cdktf.numberToTerraform(struct!.wrongCtrIncremented),
  }
}


export function dataThunderVisibilityPacketCaptureCaptureConfigStatsStatsToHclTerraform(struct?: DataThunderVisibilityPacketCaptureCaptureConfigStatsStatsOutputReference | DataThunderVisibilityPacketCaptureCaptureConfigStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_pcap_file_merged: {
      value: cdktf.numberToHclTerraform(struct!.autoPcapFileMerged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_pcap_file_merged_failed: {
      value: cdktf.numberToHclTerraform(struct!.autoPcapFileMergedFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_by_ctr_anomaly_freed: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureByCtrAnomalyFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_by_ctr_increment_freed: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureByCtrIncrementFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_by_ctr_other_feature_freed: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureByCtrOtherFeatureFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_create_failed_by_ctr_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreateFailedByCtrAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_create_failed_by_ctr_increment: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreateFailedByCtrIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_create_failed_by_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreateFailedByOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_create_failed_oom: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreateFailedOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_created_by_ctr_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreatedByCtrAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_created_by_ctr_increment: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureCreatedByCtrIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_finished: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_capture_limit_reached: {
      value: cdktf.numberToHclTerraform(struct!.concurrentCaptureLimitReached),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_ext_failed: {
      value: cdktf.numberToHclTerraform(struct!.connExtFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_as_return_completed_set: {
      value: cdktf.numberToHclTerraform(struct!.failedAsReturnCompletedSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_disk_full: {
      value: cdktf.numberToHclTerraform(struct!.failedDiskFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    global_capture_finished: {
      value: cdktf.numberToHclTerraform(struct!.globalCaptureFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_pkt_path: {
      value: cdktf.numberToHclTerraform(struct!.nonPktPath),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_anomaly_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedAnomalyFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_anomaly_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedAnomalyMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_anomaly_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalAnomalyFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_anomaly_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalAnomalyMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_increment: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_increment_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalIncrementFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_increment_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalIncrementMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_other_feature_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalOtherFeatureFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_global_other_feature_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedGlobalOtherFeatureMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_increment: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_increment_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedIncrementFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_increment_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedIncrementMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_other_feature_fail: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedOtherFeatureFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_tagged_other_feature_maxed: {
      value: cdktf.numberToHclTerraform(struct!.numConnsTaggedOtherFeatureMaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_conns_untagged: {
      value: cdktf.numberToHclTerraform(struct!.numConnsUntagged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_dynamic_capture_config_created: {
      value: cdktf.numberToHclTerraform(struct!.numDynamicCaptureConfigCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_dynamic_capture_config_delete_q: {
      value: cdktf.numberToHclTerraform(struct!.numDynamicCaptureConfigDeleteQ),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_dynamic_capture_config_deleted: {
      value: cdktf.numberToHclTerraform(struct!.numDynamicCaptureConfigDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_global_counters_deregistered: {
      value: cdktf.numberToHclTerraform(struct!.numGlobalCountersDeregistered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_global_counters_registered: {
      value: cdktf.numberToHclTerraform(struct!.numGlobalCountersRegistered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_of_anomalies_cleared: {
      value: cdktf.numberToHclTerraform(struct!.numOfAnomaliesCleared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_of_anomalies_detected: {
      value: cdktf.numberToHclTerraform(struct!.numOfAnomaliesDetected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_pcaps_create_failed: {
      value: cdktf.numberToHclTerraform(struct!.numPcapsCreateFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_pcaps_created: {
      value: cdktf.numberToHclTerraform(struct!.numPcapsCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_per_object_counters_deregistered: {
      value: cdktf.numberToHclTerraform(struct!.numPerObjectCountersDeregistered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_per_object_counters_registered: {
      value: cdktf.numberToHclTerraform(struct!.numPerObjectCountersRegistered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_tmp_pcaps_created: {
      value: cdktf.numberToHclTerraform(struct!.numTmpPcapsCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_already_captured: {
      value: cdktf.numberToHclTerraform(struct!.pktAlreadyCaptured),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcap_oom: {
      value: cdktf.numberToHclTerraform(struct!.pktcapOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_failure_file_size_rchd: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureFailureFileSizeRchd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_failure_wait_for_block: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureFailureWaitForBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_triggered_by_anomaly: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureTriggeredByAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_triggered_by_increment: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureTriggeredByIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_triggered_by_other_feature: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureTriggeredByOtherFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_but_not_tagged_failure: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnButNotTaggedFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_but_not_tagged_success: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnButNotTaggedSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_failure: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_failure_global: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnFailureGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_success: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_conn_success_global: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithConnSuccessGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_no_conn_failure: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithNoConnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktcapture_with_no_conn_success: {
      value: cdktf.numberToHclTerraform(struct!.pktcaptureWithNoConnSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_as_conn_already_recapture: {
      value: cdktf.numberToHclTerraform(struct!.skipAsConnAlreadyRecapture),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_capture_as_conn_created_before_smp: {
      value: cdktf.numberToHclTerraform(struct!.skipCaptureAsConnCreatedBeforeSmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_ctr_incremented: {
      value: cdktf.numberToHclTerraform(struct!.wrongCtrIncremented),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPacketCaptureCaptureConfigStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityPacketCaptureCaptureConfigStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPcapFileMerged !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPcapFileMerged = this._autoPcapFileMerged;
    }
    if (this._autoPcapFileMergedFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPcapFileMergedFailed = this._autoPcapFileMergedFailed;
    }
    if (this._concurrentCaptureByCtrAnomalyFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureByCtrAnomalyFreed = this._concurrentCaptureByCtrAnomalyFreed;
    }
    if (this._concurrentCaptureByCtrIncrementFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureByCtrIncrementFreed = this._concurrentCaptureByCtrIncrementFreed;
    }
    if (this._concurrentCaptureByCtrOtherFeatureFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureByCtrOtherFeatureFreed = this._concurrentCaptureByCtrOtherFeatureFreed;
    }
    if (this._concurrentCaptureCreateFailedByCtrAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreateFailedByCtrAnomaly = this._concurrentCaptureCreateFailedByCtrAnomaly;
    }
    if (this._concurrentCaptureCreateFailedByCtrIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreateFailedByCtrIncrement = this._concurrentCaptureCreateFailedByCtrIncrement;
    }
    if (this._concurrentCaptureCreateFailedByOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreateFailedByOtherFeature = this._concurrentCaptureCreateFailedByOtherFeature;
    }
    if (this._concurrentCaptureCreateFailedOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreateFailedOom = this._concurrentCaptureCreateFailedOom;
    }
    if (this._concurrentCaptureCreatedByCtrAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreatedByCtrAnomaly = this._concurrentCaptureCreatedByCtrAnomaly;
    }
    if (this._concurrentCaptureCreatedByCtrIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureCreatedByCtrIncrement = this._concurrentCaptureCreatedByCtrIncrement;
    }
    if (this._concurrentCaptureFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureFinished = this._concurrentCaptureFinished;
    }
    if (this._concurrentCaptureLimitReached !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentCaptureLimitReached = this._concurrentCaptureLimitReached;
    }
    if (this._connExtFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connExtFailed = this._connExtFailed;
    }
    if (this._failedAsReturnCompletedSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedAsReturnCompletedSet = this._failedAsReturnCompletedSet;
    }
    if (this._failedDiskFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedDiskFull = this._failedDiskFull;
    }
    if (this._globalCaptureFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalCaptureFinished = this._globalCaptureFinished;
    }
    if (this._nonPktPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonPktPath = this._nonPktPath;
    }
    if (this._numConnsTaggedAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedAnomaly = this._numConnsTaggedAnomaly;
    }
    if (this._numConnsTaggedAnomalyFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedAnomalyFail = this._numConnsTaggedAnomalyFail;
    }
    if (this._numConnsTaggedAnomalyMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedAnomalyMaxed = this._numConnsTaggedAnomalyMaxed;
    }
    if (this._numConnsTaggedGlobalAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalAnomaly = this._numConnsTaggedGlobalAnomaly;
    }
    if (this._numConnsTaggedGlobalAnomalyFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalAnomalyFail = this._numConnsTaggedGlobalAnomalyFail;
    }
    if (this._numConnsTaggedGlobalAnomalyMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalAnomalyMaxed = this._numConnsTaggedGlobalAnomalyMaxed;
    }
    if (this._numConnsTaggedGlobalIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalIncrement = this._numConnsTaggedGlobalIncrement;
    }
    if (this._numConnsTaggedGlobalIncrementFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalIncrementFail = this._numConnsTaggedGlobalIncrementFail;
    }
    if (this._numConnsTaggedGlobalIncrementMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalIncrementMaxed = this._numConnsTaggedGlobalIncrementMaxed;
    }
    if (this._numConnsTaggedGlobalOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalOtherFeature = this._numConnsTaggedGlobalOtherFeature;
    }
    if (this._numConnsTaggedGlobalOtherFeatureFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalOtherFeatureFail = this._numConnsTaggedGlobalOtherFeatureFail;
    }
    if (this._numConnsTaggedGlobalOtherFeatureMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedGlobalOtherFeatureMaxed = this._numConnsTaggedGlobalOtherFeatureMaxed;
    }
    if (this._numConnsTaggedIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedIncrement = this._numConnsTaggedIncrement;
    }
    if (this._numConnsTaggedIncrementFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedIncrementFail = this._numConnsTaggedIncrementFail;
    }
    if (this._numConnsTaggedIncrementMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedIncrementMaxed = this._numConnsTaggedIncrementMaxed;
    }
    if (this._numConnsTaggedOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedOtherFeature = this._numConnsTaggedOtherFeature;
    }
    if (this._numConnsTaggedOtherFeatureFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedOtherFeatureFail = this._numConnsTaggedOtherFeatureFail;
    }
    if (this._numConnsTaggedOtherFeatureMaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsTaggedOtherFeatureMaxed = this._numConnsTaggedOtherFeatureMaxed;
    }
    if (this._numConnsUntagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.numConnsUntagged = this._numConnsUntagged;
    }
    if (this._numDynamicCaptureConfigCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDynamicCaptureConfigCreated = this._numDynamicCaptureConfigCreated;
    }
    if (this._numDynamicCaptureConfigDeleteQ !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDynamicCaptureConfigDeleteQ = this._numDynamicCaptureConfigDeleteQ;
    }
    if (this._numDynamicCaptureConfigDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDynamicCaptureConfigDeleted = this._numDynamicCaptureConfigDeleted;
    }
    if (this._numGlobalCountersDeregistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.numGlobalCountersDeregistered = this._numGlobalCountersDeregistered;
    }
    if (this._numGlobalCountersRegistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.numGlobalCountersRegistered = this._numGlobalCountersRegistered;
    }
    if (this._numOfAnomaliesCleared !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfAnomaliesCleared = this._numOfAnomaliesCleared;
    }
    if (this._numOfAnomaliesDetected !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfAnomaliesDetected = this._numOfAnomaliesDetected;
    }
    if (this._numPcapsCreateFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPcapsCreateFailed = this._numPcapsCreateFailed;
    }
    if (this._numPcapsCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPcapsCreated = this._numPcapsCreated;
    }
    if (this._numPerObjectCountersDeregistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPerObjectCountersDeregistered = this._numPerObjectCountersDeregistered;
    }
    if (this._numPerObjectCountersRegistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPerObjectCountersRegistered = this._numPerObjectCountersRegistered;
    }
    if (this._numTmpPcapsCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTmpPcapsCreated = this._numTmpPcapsCreated;
    }
    if (this._pktAlreadyCaptured !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktAlreadyCaptured = this._pktAlreadyCaptured;
    }
    if (this._pktcapOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcapOom = this._pktcapOom;
    }
    if (this._pktcaptureFailureFileSizeRchd !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureFailureFileSizeRchd = this._pktcaptureFailureFileSizeRchd;
    }
    if (this._pktcaptureFailureWaitForBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureFailureWaitForBlock = this._pktcaptureFailureWaitForBlock;
    }
    if (this._pktcaptureTriggeredByAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureTriggeredByAnomaly = this._pktcaptureTriggeredByAnomaly;
    }
    if (this._pktcaptureTriggeredByIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureTriggeredByIncrement = this._pktcaptureTriggeredByIncrement;
    }
    if (this._pktcaptureTriggeredByOtherFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureTriggeredByOtherFeature = this._pktcaptureTriggeredByOtherFeature;
    }
    if (this._pktcaptureWithConnButNotTaggedFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnButNotTaggedFailure = this._pktcaptureWithConnButNotTaggedFailure;
    }
    if (this._pktcaptureWithConnButNotTaggedSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnButNotTaggedSuccess = this._pktcaptureWithConnButNotTaggedSuccess;
    }
    if (this._pktcaptureWithConnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnFailure = this._pktcaptureWithConnFailure;
    }
    if (this._pktcaptureWithConnFailureGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnFailureGlobal = this._pktcaptureWithConnFailureGlobal;
    }
    if (this._pktcaptureWithConnSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnSuccess = this._pktcaptureWithConnSuccess;
    }
    if (this._pktcaptureWithConnSuccessGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithConnSuccessGlobal = this._pktcaptureWithConnSuccessGlobal;
    }
    if (this._pktcaptureWithNoConnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithNoConnFailure = this._pktcaptureWithNoConnFailure;
    }
    if (this._pktcaptureWithNoConnSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktcaptureWithNoConnSuccess = this._pktcaptureWithNoConnSuccess;
    }
    if (this._skipAsConnAlreadyRecapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipAsConnAlreadyRecapture = this._skipAsConnAlreadyRecapture;
    }
    if (this._skipCaptureAsConnCreatedBeforeSmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCaptureAsConnCreatedBeforeSmp = this._skipCaptureAsConnCreatedBeforeSmp;
    }
    if (this._wrongCtrIncremented !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongCtrIncremented = this._wrongCtrIncremented;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPacketCaptureCaptureConfigStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPcapFileMerged = undefined;
      this._autoPcapFileMergedFailed = undefined;
      this._concurrentCaptureByCtrAnomalyFreed = undefined;
      this._concurrentCaptureByCtrIncrementFreed = undefined;
      this._concurrentCaptureByCtrOtherFeatureFreed = undefined;
      this._concurrentCaptureCreateFailedByCtrAnomaly = undefined;
      this._concurrentCaptureCreateFailedByCtrIncrement = undefined;
      this._concurrentCaptureCreateFailedByOtherFeature = undefined;
      this._concurrentCaptureCreateFailedOom = undefined;
      this._concurrentCaptureCreatedByCtrAnomaly = undefined;
      this._concurrentCaptureCreatedByCtrIncrement = undefined;
      this._concurrentCaptureFinished = undefined;
      this._concurrentCaptureLimitReached = undefined;
      this._connExtFailed = undefined;
      this._failedAsReturnCompletedSet = undefined;
      this._failedDiskFull = undefined;
      this._globalCaptureFinished = undefined;
      this._nonPktPath = undefined;
      this._numConnsTaggedAnomaly = undefined;
      this._numConnsTaggedAnomalyFail = undefined;
      this._numConnsTaggedAnomalyMaxed = undefined;
      this._numConnsTaggedGlobalAnomaly = undefined;
      this._numConnsTaggedGlobalAnomalyFail = undefined;
      this._numConnsTaggedGlobalAnomalyMaxed = undefined;
      this._numConnsTaggedGlobalIncrement = undefined;
      this._numConnsTaggedGlobalIncrementFail = undefined;
      this._numConnsTaggedGlobalIncrementMaxed = undefined;
      this._numConnsTaggedGlobalOtherFeature = undefined;
      this._numConnsTaggedGlobalOtherFeatureFail = undefined;
      this._numConnsTaggedGlobalOtherFeatureMaxed = undefined;
      this._numConnsTaggedIncrement = undefined;
      this._numConnsTaggedIncrementFail = undefined;
      this._numConnsTaggedIncrementMaxed = undefined;
      this._numConnsTaggedOtherFeature = undefined;
      this._numConnsTaggedOtherFeatureFail = undefined;
      this._numConnsTaggedOtherFeatureMaxed = undefined;
      this._numConnsUntagged = undefined;
      this._numDynamicCaptureConfigCreated = undefined;
      this._numDynamicCaptureConfigDeleteQ = undefined;
      this._numDynamicCaptureConfigDeleted = undefined;
      this._numGlobalCountersDeregistered = undefined;
      this._numGlobalCountersRegistered = undefined;
      this._numOfAnomaliesCleared = undefined;
      this._numOfAnomaliesDetected = undefined;
      this._numPcapsCreateFailed = undefined;
      this._numPcapsCreated = undefined;
      this._numPerObjectCountersDeregistered = undefined;
      this._numPerObjectCountersRegistered = undefined;
      this._numTmpPcapsCreated = undefined;
      this._pktAlreadyCaptured = undefined;
      this._pktcapOom = undefined;
      this._pktcaptureFailureFileSizeRchd = undefined;
      this._pktcaptureFailureWaitForBlock = undefined;
      this._pktcaptureTriggeredByAnomaly = undefined;
      this._pktcaptureTriggeredByIncrement = undefined;
      this._pktcaptureTriggeredByOtherFeature = undefined;
      this._pktcaptureWithConnButNotTaggedFailure = undefined;
      this._pktcaptureWithConnButNotTaggedSuccess = undefined;
      this._pktcaptureWithConnFailure = undefined;
      this._pktcaptureWithConnFailureGlobal = undefined;
      this._pktcaptureWithConnSuccess = undefined;
      this._pktcaptureWithConnSuccessGlobal = undefined;
      this._pktcaptureWithNoConnFailure = undefined;
      this._pktcaptureWithNoConnSuccess = undefined;
      this._skipAsConnAlreadyRecapture = undefined;
      this._skipCaptureAsConnCreatedBeforeSmp = undefined;
      this._wrongCtrIncremented = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPcapFileMerged = value.autoPcapFileMerged;
      this._autoPcapFileMergedFailed = value.autoPcapFileMergedFailed;
      this._concurrentCaptureByCtrAnomalyFreed = value.concurrentCaptureByCtrAnomalyFreed;
      this._concurrentCaptureByCtrIncrementFreed = value.concurrentCaptureByCtrIncrementFreed;
      this._concurrentCaptureByCtrOtherFeatureFreed = value.concurrentCaptureByCtrOtherFeatureFreed;
      this._concurrentCaptureCreateFailedByCtrAnomaly = value.concurrentCaptureCreateFailedByCtrAnomaly;
      this._concurrentCaptureCreateFailedByCtrIncrement = value.concurrentCaptureCreateFailedByCtrIncrement;
      this._concurrentCaptureCreateFailedByOtherFeature = value.concurrentCaptureCreateFailedByOtherFeature;
      this._concurrentCaptureCreateFailedOom = value.concurrentCaptureCreateFailedOom;
      this._concurrentCaptureCreatedByCtrAnomaly = value.concurrentCaptureCreatedByCtrAnomaly;
      this._concurrentCaptureCreatedByCtrIncrement = value.concurrentCaptureCreatedByCtrIncrement;
      this._concurrentCaptureFinished = value.concurrentCaptureFinished;
      this._concurrentCaptureLimitReached = value.concurrentCaptureLimitReached;
      this._connExtFailed = value.connExtFailed;
      this._failedAsReturnCompletedSet = value.failedAsReturnCompletedSet;
      this._failedDiskFull = value.failedDiskFull;
      this._globalCaptureFinished = value.globalCaptureFinished;
      this._nonPktPath = value.nonPktPath;
      this._numConnsTaggedAnomaly = value.numConnsTaggedAnomaly;
      this._numConnsTaggedAnomalyFail = value.numConnsTaggedAnomalyFail;
      this._numConnsTaggedAnomalyMaxed = value.numConnsTaggedAnomalyMaxed;
      this._numConnsTaggedGlobalAnomaly = value.numConnsTaggedGlobalAnomaly;
      this._numConnsTaggedGlobalAnomalyFail = value.numConnsTaggedGlobalAnomalyFail;
      this._numConnsTaggedGlobalAnomalyMaxed = value.numConnsTaggedGlobalAnomalyMaxed;
      this._numConnsTaggedGlobalIncrement = value.numConnsTaggedGlobalIncrement;
      this._numConnsTaggedGlobalIncrementFail = value.numConnsTaggedGlobalIncrementFail;
      this._numConnsTaggedGlobalIncrementMaxed = value.numConnsTaggedGlobalIncrementMaxed;
      this._numConnsTaggedGlobalOtherFeature = value.numConnsTaggedGlobalOtherFeature;
      this._numConnsTaggedGlobalOtherFeatureFail = value.numConnsTaggedGlobalOtherFeatureFail;
      this._numConnsTaggedGlobalOtherFeatureMaxed = value.numConnsTaggedGlobalOtherFeatureMaxed;
      this._numConnsTaggedIncrement = value.numConnsTaggedIncrement;
      this._numConnsTaggedIncrementFail = value.numConnsTaggedIncrementFail;
      this._numConnsTaggedIncrementMaxed = value.numConnsTaggedIncrementMaxed;
      this._numConnsTaggedOtherFeature = value.numConnsTaggedOtherFeature;
      this._numConnsTaggedOtherFeatureFail = value.numConnsTaggedOtherFeatureFail;
      this._numConnsTaggedOtherFeatureMaxed = value.numConnsTaggedOtherFeatureMaxed;
      this._numConnsUntagged = value.numConnsUntagged;
      this._numDynamicCaptureConfigCreated = value.numDynamicCaptureConfigCreated;
      this._numDynamicCaptureConfigDeleteQ = value.numDynamicCaptureConfigDeleteQ;
      this._numDynamicCaptureConfigDeleted = value.numDynamicCaptureConfigDeleted;
      this._numGlobalCountersDeregistered = value.numGlobalCountersDeregistered;
      this._numGlobalCountersRegistered = value.numGlobalCountersRegistered;
      this._numOfAnomaliesCleared = value.numOfAnomaliesCleared;
      this._numOfAnomaliesDetected = value.numOfAnomaliesDetected;
      this._numPcapsCreateFailed = value.numPcapsCreateFailed;
      this._numPcapsCreated = value.numPcapsCreated;
      this._numPerObjectCountersDeregistered = value.numPerObjectCountersDeregistered;
      this._numPerObjectCountersRegistered = value.numPerObjectCountersRegistered;
      this._numTmpPcapsCreated = value.numTmpPcapsCreated;
      this._pktAlreadyCaptured = value.pktAlreadyCaptured;
      this._pktcapOom = value.pktcapOom;
      this._pktcaptureFailureFileSizeRchd = value.pktcaptureFailureFileSizeRchd;
      this._pktcaptureFailureWaitForBlock = value.pktcaptureFailureWaitForBlock;
      this._pktcaptureTriggeredByAnomaly = value.pktcaptureTriggeredByAnomaly;
      this._pktcaptureTriggeredByIncrement = value.pktcaptureTriggeredByIncrement;
      this._pktcaptureTriggeredByOtherFeature = value.pktcaptureTriggeredByOtherFeature;
      this._pktcaptureWithConnButNotTaggedFailure = value.pktcaptureWithConnButNotTaggedFailure;
      this._pktcaptureWithConnButNotTaggedSuccess = value.pktcaptureWithConnButNotTaggedSuccess;
      this._pktcaptureWithConnFailure = value.pktcaptureWithConnFailure;
      this._pktcaptureWithConnFailureGlobal = value.pktcaptureWithConnFailureGlobal;
      this._pktcaptureWithConnSuccess = value.pktcaptureWithConnSuccess;
      this._pktcaptureWithConnSuccessGlobal = value.pktcaptureWithConnSuccessGlobal;
      this._pktcaptureWithNoConnFailure = value.pktcaptureWithNoConnFailure;
      this._pktcaptureWithNoConnSuccess = value.pktcaptureWithNoConnSuccess;
      this._skipAsConnAlreadyRecapture = value.skipAsConnAlreadyRecapture;
      this._skipCaptureAsConnCreatedBeforeSmp = value.skipCaptureAsConnCreatedBeforeSmp;
      this._wrongCtrIncremented = value.wrongCtrIncremented;
    }
  }

  // auto_pcap_file_merged - computed: false, optional: true, required: false
  private _autoPcapFileMerged?: number; 
  public get autoPcapFileMerged() {
    return this.getNumberAttribute('auto_pcap_file_merged');
  }
  public set autoPcapFileMerged(value: number) {
    this._autoPcapFileMerged = value;
  }
  public resetAutoPcapFileMerged() {
    this._autoPcapFileMerged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPcapFileMergedInput() {
    return this._autoPcapFileMerged;
  }

  // auto_pcap_file_merged_failed - computed: false, optional: true, required: false
  private _autoPcapFileMergedFailed?: number; 
  public get autoPcapFileMergedFailed() {
    return this.getNumberAttribute('auto_pcap_file_merged_failed');
  }
  public set autoPcapFileMergedFailed(value: number) {
    this._autoPcapFileMergedFailed = value;
  }
  public resetAutoPcapFileMergedFailed() {
    this._autoPcapFileMergedFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPcapFileMergedFailedInput() {
    return this._autoPcapFileMergedFailed;
  }

  // concurrent_capture_by_ctr_anomaly_freed - computed: false, optional: true, required: false
  private _concurrentCaptureByCtrAnomalyFreed?: number; 
  public get concurrentCaptureByCtrAnomalyFreed() {
    return this.getNumberAttribute('concurrent_capture_by_ctr_anomaly_freed');
  }
  public set concurrentCaptureByCtrAnomalyFreed(value: number) {
    this._concurrentCaptureByCtrAnomalyFreed = value;
  }
  public resetConcurrentCaptureByCtrAnomalyFreed() {
    this._concurrentCaptureByCtrAnomalyFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureByCtrAnomalyFreedInput() {
    return this._concurrentCaptureByCtrAnomalyFreed;
  }

  // concurrent_capture_by_ctr_increment_freed - computed: false, optional: true, required: false
  private _concurrentCaptureByCtrIncrementFreed?: number; 
  public get concurrentCaptureByCtrIncrementFreed() {
    return this.getNumberAttribute('concurrent_capture_by_ctr_increment_freed');
  }
  public set concurrentCaptureByCtrIncrementFreed(value: number) {
    this._concurrentCaptureByCtrIncrementFreed = value;
  }
  public resetConcurrentCaptureByCtrIncrementFreed() {
    this._concurrentCaptureByCtrIncrementFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureByCtrIncrementFreedInput() {
    return this._concurrentCaptureByCtrIncrementFreed;
  }

  // concurrent_capture_by_ctr_other_feature_freed - computed: false, optional: true, required: false
  private _concurrentCaptureByCtrOtherFeatureFreed?: number; 
  public get concurrentCaptureByCtrOtherFeatureFreed() {
    return this.getNumberAttribute('concurrent_capture_by_ctr_other_feature_freed');
  }
  public set concurrentCaptureByCtrOtherFeatureFreed(value: number) {
    this._concurrentCaptureByCtrOtherFeatureFreed = value;
  }
  public resetConcurrentCaptureByCtrOtherFeatureFreed() {
    this._concurrentCaptureByCtrOtherFeatureFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureByCtrOtherFeatureFreedInput() {
    return this._concurrentCaptureByCtrOtherFeatureFreed;
  }

  // concurrent_capture_create_failed_by_ctr_anomaly - computed: false, optional: true, required: false
  private _concurrentCaptureCreateFailedByCtrAnomaly?: number; 
  public get concurrentCaptureCreateFailedByCtrAnomaly() {
    return this.getNumberAttribute('concurrent_capture_create_failed_by_ctr_anomaly');
  }
  public set concurrentCaptureCreateFailedByCtrAnomaly(value: number) {
    this._concurrentCaptureCreateFailedByCtrAnomaly = value;
  }
  public resetConcurrentCaptureCreateFailedByCtrAnomaly() {
    this._concurrentCaptureCreateFailedByCtrAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreateFailedByCtrAnomalyInput() {
    return this._concurrentCaptureCreateFailedByCtrAnomaly;
  }

  // concurrent_capture_create_failed_by_ctr_increment - computed: false, optional: true, required: false
  private _concurrentCaptureCreateFailedByCtrIncrement?: number; 
  public get concurrentCaptureCreateFailedByCtrIncrement() {
    return this.getNumberAttribute('concurrent_capture_create_failed_by_ctr_increment');
  }
  public set concurrentCaptureCreateFailedByCtrIncrement(value: number) {
    this._concurrentCaptureCreateFailedByCtrIncrement = value;
  }
  public resetConcurrentCaptureCreateFailedByCtrIncrement() {
    this._concurrentCaptureCreateFailedByCtrIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreateFailedByCtrIncrementInput() {
    return this._concurrentCaptureCreateFailedByCtrIncrement;
  }

  // concurrent_capture_create_failed_by_other_feature - computed: false, optional: true, required: false
  private _concurrentCaptureCreateFailedByOtherFeature?: number; 
  public get concurrentCaptureCreateFailedByOtherFeature() {
    return this.getNumberAttribute('concurrent_capture_create_failed_by_other_feature');
  }
  public set concurrentCaptureCreateFailedByOtherFeature(value: number) {
    this._concurrentCaptureCreateFailedByOtherFeature = value;
  }
  public resetConcurrentCaptureCreateFailedByOtherFeature() {
    this._concurrentCaptureCreateFailedByOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreateFailedByOtherFeatureInput() {
    return this._concurrentCaptureCreateFailedByOtherFeature;
  }

  // concurrent_capture_create_failed_oom - computed: false, optional: true, required: false
  private _concurrentCaptureCreateFailedOom?: number; 
  public get concurrentCaptureCreateFailedOom() {
    return this.getNumberAttribute('concurrent_capture_create_failed_oom');
  }
  public set concurrentCaptureCreateFailedOom(value: number) {
    this._concurrentCaptureCreateFailedOom = value;
  }
  public resetConcurrentCaptureCreateFailedOom() {
    this._concurrentCaptureCreateFailedOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreateFailedOomInput() {
    return this._concurrentCaptureCreateFailedOom;
  }

  // concurrent_capture_created_by_ctr_anomaly - computed: false, optional: true, required: false
  private _concurrentCaptureCreatedByCtrAnomaly?: number; 
  public get concurrentCaptureCreatedByCtrAnomaly() {
    return this.getNumberAttribute('concurrent_capture_created_by_ctr_anomaly');
  }
  public set concurrentCaptureCreatedByCtrAnomaly(value: number) {
    this._concurrentCaptureCreatedByCtrAnomaly = value;
  }
  public resetConcurrentCaptureCreatedByCtrAnomaly() {
    this._concurrentCaptureCreatedByCtrAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreatedByCtrAnomalyInput() {
    return this._concurrentCaptureCreatedByCtrAnomaly;
  }

  // concurrent_capture_created_by_ctr_increment - computed: false, optional: true, required: false
  private _concurrentCaptureCreatedByCtrIncrement?: number; 
  public get concurrentCaptureCreatedByCtrIncrement() {
    return this.getNumberAttribute('concurrent_capture_created_by_ctr_increment');
  }
  public set concurrentCaptureCreatedByCtrIncrement(value: number) {
    this._concurrentCaptureCreatedByCtrIncrement = value;
  }
  public resetConcurrentCaptureCreatedByCtrIncrement() {
    this._concurrentCaptureCreatedByCtrIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureCreatedByCtrIncrementInput() {
    return this._concurrentCaptureCreatedByCtrIncrement;
  }

  // concurrent_capture_finished - computed: false, optional: true, required: false
  private _concurrentCaptureFinished?: number; 
  public get concurrentCaptureFinished() {
    return this.getNumberAttribute('concurrent_capture_finished');
  }
  public set concurrentCaptureFinished(value: number) {
    this._concurrentCaptureFinished = value;
  }
  public resetConcurrentCaptureFinished() {
    this._concurrentCaptureFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureFinishedInput() {
    return this._concurrentCaptureFinished;
  }

  // concurrent_capture_limit_reached - computed: false, optional: true, required: false
  private _concurrentCaptureLimitReached?: number; 
  public get concurrentCaptureLimitReached() {
    return this.getNumberAttribute('concurrent_capture_limit_reached');
  }
  public set concurrentCaptureLimitReached(value: number) {
    this._concurrentCaptureLimitReached = value;
  }
  public resetConcurrentCaptureLimitReached() {
    this._concurrentCaptureLimitReached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCaptureLimitReachedInput() {
    return this._concurrentCaptureLimitReached;
  }

  // conn_ext_failed - computed: false, optional: true, required: false
  private _connExtFailed?: number; 
  public get connExtFailed() {
    return this.getNumberAttribute('conn_ext_failed');
  }
  public set connExtFailed(value: number) {
    this._connExtFailed = value;
  }
  public resetConnExtFailed() {
    this._connExtFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connExtFailedInput() {
    return this._connExtFailed;
  }

  // failed_as_return_completed_set - computed: false, optional: true, required: false
  private _failedAsReturnCompletedSet?: number; 
  public get failedAsReturnCompletedSet() {
    return this.getNumberAttribute('failed_as_return_completed_set');
  }
  public set failedAsReturnCompletedSet(value: number) {
    this._failedAsReturnCompletedSet = value;
  }
  public resetFailedAsReturnCompletedSet() {
    this._failedAsReturnCompletedSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedAsReturnCompletedSetInput() {
    return this._failedAsReturnCompletedSet;
  }

  // failed_disk_full - computed: false, optional: true, required: false
  private _failedDiskFull?: number; 
  public get failedDiskFull() {
    return this.getNumberAttribute('failed_disk_full');
  }
  public set failedDiskFull(value: number) {
    this._failedDiskFull = value;
  }
  public resetFailedDiskFull() {
    this._failedDiskFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedDiskFullInput() {
    return this._failedDiskFull;
  }

  // global_capture_finished - computed: false, optional: true, required: false
  private _globalCaptureFinished?: number; 
  public get globalCaptureFinished() {
    return this.getNumberAttribute('global_capture_finished');
  }
  public set globalCaptureFinished(value: number) {
    this._globalCaptureFinished = value;
  }
  public resetGlobalCaptureFinished() {
    this._globalCaptureFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCaptureFinishedInput() {
    return this._globalCaptureFinished;
  }

  // non_pkt_path - computed: false, optional: true, required: false
  private _nonPktPath?: number; 
  public get nonPktPath() {
    return this.getNumberAttribute('non_pkt_path');
  }
  public set nonPktPath(value: number) {
    this._nonPktPath = value;
  }
  public resetNonPktPath() {
    this._nonPktPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonPktPathInput() {
    return this._nonPktPath;
  }

  // num_conns_tagged_anomaly - computed: false, optional: true, required: false
  private _numConnsTaggedAnomaly?: number; 
  public get numConnsTaggedAnomaly() {
    return this.getNumberAttribute('num_conns_tagged_anomaly');
  }
  public set numConnsTaggedAnomaly(value: number) {
    this._numConnsTaggedAnomaly = value;
  }
  public resetNumConnsTaggedAnomaly() {
    this._numConnsTaggedAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedAnomalyInput() {
    return this._numConnsTaggedAnomaly;
  }

  // num_conns_tagged_anomaly_fail - computed: false, optional: true, required: false
  private _numConnsTaggedAnomalyFail?: number; 
  public get numConnsTaggedAnomalyFail() {
    return this.getNumberAttribute('num_conns_tagged_anomaly_fail');
  }
  public set numConnsTaggedAnomalyFail(value: number) {
    this._numConnsTaggedAnomalyFail = value;
  }
  public resetNumConnsTaggedAnomalyFail() {
    this._numConnsTaggedAnomalyFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedAnomalyFailInput() {
    return this._numConnsTaggedAnomalyFail;
  }

  // num_conns_tagged_anomaly_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedAnomalyMaxed?: number; 
  public get numConnsTaggedAnomalyMaxed() {
    return this.getNumberAttribute('num_conns_tagged_anomaly_maxed');
  }
  public set numConnsTaggedAnomalyMaxed(value: number) {
    this._numConnsTaggedAnomalyMaxed = value;
  }
  public resetNumConnsTaggedAnomalyMaxed() {
    this._numConnsTaggedAnomalyMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedAnomalyMaxedInput() {
    return this._numConnsTaggedAnomalyMaxed;
  }

  // num_conns_tagged_global_anomaly - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalAnomaly?: number; 
  public get numConnsTaggedGlobalAnomaly() {
    return this.getNumberAttribute('num_conns_tagged_global_anomaly');
  }
  public set numConnsTaggedGlobalAnomaly(value: number) {
    this._numConnsTaggedGlobalAnomaly = value;
  }
  public resetNumConnsTaggedGlobalAnomaly() {
    this._numConnsTaggedGlobalAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalAnomalyInput() {
    return this._numConnsTaggedGlobalAnomaly;
  }

  // num_conns_tagged_global_anomaly_fail - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalAnomalyFail?: number; 
  public get numConnsTaggedGlobalAnomalyFail() {
    return this.getNumberAttribute('num_conns_tagged_global_anomaly_fail');
  }
  public set numConnsTaggedGlobalAnomalyFail(value: number) {
    this._numConnsTaggedGlobalAnomalyFail = value;
  }
  public resetNumConnsTaggedGlobalAnomalyFail() {
    this._numConnsTaggedGlobalAnomalyFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalAnomalyFailInput() {
    return this._numConnsTaggedGlobalAnomalyFail;
  }

  // num_conns_tagged_global_anomaly_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalAnomalyMaxed?: number; 
  public get numConnsTaggedGlobalAnomalyMaxed() {
    return this.getNumberAttribute('num_conns_tagged_global_anomaly_maxed');
  }
  public set numConnsTaggedGlobalAnomalyMaxed(value: number) {
    this._numConnsTaggedGlobalAnomalyMaxed = value;
  }
  public resetNumConnsTaggedGlobalAnomalyMaxed() {
    this._numConnsTaggedGlobalAnomalyMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalAnomalyMaxedInput() {
    return this._numConnsTaggedGlobalAnomalyMaxed;
  }

  // num_conns_tagged_global_increment - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalIncrement?: number; 
  public get numConnsTaggedGlobalIncrement() {
    return this.getNumberAttribute('num_conns_tagged_global_increment');
  }
  public set numConnsTaggedGlobalIncrement(value: number) {
    this._numConnsTaggedGlobalIncrement = value;
  }
  public resetNumConnsTaggedGlobalIncrement() {
    this._numConnsTaggedGlobalIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalIncrementInput() {
    return this._numConnsTaggedGlobalIncrement;
  }

  // num_conns_tagged_global_increment_fail - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalIncrementFail?: number; 
  public get numConnsTaggedGlobalIncrementFail() {
    return this.getNumberAttribute('num_conns_tagged_global_increment_fail');
  }
  public set numConnsTaggedGlobalIncrementFail(value: number) {
    this._numConnsTaggedGlobalIncrementFail = value;
  }
  public resetNumConnsTaggedGlobalIncrementFail() {
    this._numConnsTaggedGlobalIncrementFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalIncrementFailInput() {
    return this._numConnsTaggedGlobalIncrementFail;
  }

  // num_conns_tagged_global_increment_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalIncrementMaxed?: number; 
  public get numConnsTaggedGlobalIncrementMaxed() {
    return this.getNumberAttribute('num_conns_tagged_global_increment_maxed');
  }
  public set numConnsTaggedGlobalIncrementMaxed(value: number) {
    this._numConnsTaggedGlobalIncrementMaxed = value;
  }
  public resetNumConnsTaggedGlobalIncrementMaxed() {
    this._numConnsTaggedGlobalIncrementMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalIncrementMaxedInput() {
    return this._numConnsTaggedGlobalIncrementMaxed;
  }

  // num_conns_tagged_global_other_feature - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalOtherFeature?: number; 
  public get numConnsTaggedGlobalOtherFeature() {
    return this.getNumberAttribute('num_conns_tagged_global_other_feature');
  }
  public set numConnsTaggedGlobalOtherFeature(value: number) {
    this._numConnsTaggedGlobalOtherFeature = value;
  }
  public resetNumConnsTaggedGlobalOtherFeature() {
    this._numConnsTaggedGlobalOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalOtherFeatureInput() {
    return this._numConnsTaggedGlobalOtherFeature;
  }

  // num_conns_tagged_global_other_feature_fail - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalOtherFeatureFail?: number; 
  public get numConnsTaggedGlobalOtherFeatureFail() {
    return this.getNumberAttribute('num_conns_tagged_global_other_feature_fail');
  }
  public set numConnsTaggedGlobalOtherFeatureFail(value: number) {
    this._numConnsTaggedGlobalOtherFeatureFail = value;
  }
  public resetNumConnsTaggedGlobalOtherFeatureFail() {
    this._numConnsTaggedGlobalOtherFeatureFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalOtherFeatureFailInput() {
    return this._numConnsTaggedGlobalOtherFeatureFail;
  }

  // num_conns_tagged_global_other_feature_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedGlobalOtherFeatureMaxed?: number; 
  public get numConnsTaggedGlobalOtherFeatureMaxed() {
    return this.getNumberAttribute('num_conns_tagged_global_other_feature_maxed');
  }
  public set numConnsTaggedGlobalOtherFeatureMaxed(value: number) {
    this._numConnsTaggedGlobalOtherFeatureMaxed = value;
  }
  public resetNumConnsTaggedGlobalOtherFeatureMaxed() {
    this._numConnsTaggedGlobalOtherFeatureMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedGlobalOtherFeatureMaxedInput() {
    return this._numConnsTaggedGlobalOtherFeatureMaxed;
  }

  // num_conns_tagged_increment - computed: false, optional: true, required: false
  private _numConnsTaggedIncrement?: number; 
  public get numConnsTaggedIncrement() {
    return this.getNumberAttribute('num_conns_tagged_increment');
  }
  public set numConnsTaggedIncrement(value: number) {
    this._numConnsTaggedIncrement = value;
  }
  public resetNumConnsTaggedIncrement() {
    this._numConnsTaggedIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedIncrementInput() {
    return this._numConnsTaggedIncrement;
  }

  // num_conns_tagged_increment_fail - computed: false, optional: true, required: false
  private _numConnsTaggedIncrementFail?: number; 
  public get numConnsTaggedIncrementFail() {
    return this.getNumberAttribute('num_conns_tagged_increment_fail');
  }
  public set numConnsTaggedIncrementFail(value: number) {
    this._numConnsTaggedIncrementFail = value;
  }
  public resetNumConnsTaggedIncrementFail() {
    this._numConnsTaggedIncrementFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedIncrementFailInput() {
    return this._numConnsTaggedIncrementFail;
  }

  // num_conns_tagged_increment_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedIncrementMaxed?: number; 
  public get numConnsTaggedIncrementMaxed() {
    return this.getNumberAttribute('num_conns_tagged_increment_maxed');
  }
  public set numConnsTaggedIncrementMaxed(value: number) {
    this._numConnsTaggedIncrementMaxed = value;
  }
  public resetNumConnsTaggedIncrementMaxed() {
    this._numConnsTaggedIncrementMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedIncrementMaxedInput() {
    return this._numConnsTaggedIncrementMaxed;
  }

  // num_conns_tagged_other_feature - computed: false, optional: true, required: false
  private _numConnsTaggedOtherFeature?: number; 
  public get numConnsTaggedOtherFeature() {
    return this.getNumberAttribute('num_conns_tagged_other_feature');
  }
  public set numConnsTaggedOtherFeature(value: number) {
    this._numConnsTaggedOtherFeature = value;
  }
  public resetNumConnsTaggedOtherFeature() {
    this._numConnsTaggedOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedOtherFeatureInput() {
    return this._numConnsTaggedOtherFeature;
  }

  // num_conns_tagged_other_feature_fail - computed: false, optional: true, required: false
  private _numConnsTaggedOtherFeatureFail?: number; 
  public get numConnsTaggedOtherFeatureFail() {
    return this.getNumberAttribute('num_conns_tagged_other_feature_fail');
  }
  public set numConnsTaggedOtherFeatureFail(value: number) {
    this._numConnsTaggedOtherFeatureFail = value;
  }
  public resetNumConnsTaggedOtherFeatureFail() {
    this._numConnsTaggedOtherFeatureFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedOtherFeatureFailInput() {
    return this._numConnsTaggedOtherFeatureFail;
  }

  // num_conns_tagged_other_feature_maxed - computed: false, optional: true, required: false
  private _numConnsTaggedOtherFeatureMaxed?: number; 
  public get numConnsTaggedOtherFeatureMaxed() {
    return this.getNumberAttribute('num_conns_tagged_other_feature_maxed');
  }
  public set numConnsTaggedOtherFeatureMaxed(value: number) {
    this._numConnsTaggedOtherFeatureMaxed = value;
  }
  public resetNumConnsTaggedOtherFeatureMaxed() {
    this._numConnsTaggedOtherFeatureMaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsTaggedOtherFeatureMaxedInput() {
    return this._numConnsTaggedOtherFeatureMaxed;
  }

  // num_conns_untagged - computed: false, optional: true, required: false
  private _numConnsUntagged?: number; 
  public get numConnsUntagged() {
    return this.getNumberAttribute('num_conns_untagged');
  }
  public set numConnsUntagged(value: number) {
    this._numConnsUntagged = value;
  }
  public resetNumConnsUntagged() {
    this._numConnsUntagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numConnsUntaggedInput() {
    return this._numConnsUntagged;
  }

  // num_dynamic_capture_config_created - computed: false, optional: true, required: false
  private _numDynamicCaptureConfigCreated?: number; 
  public get numDynamicCaptureConfigCreated() {
    return this.getNumberAttribute('num_dynamic_capture_config_created');
  }
  public set numDynamicCaptureConfigCreated(value: number) {
    this._numDynamicCaptureConfigCreated = value;
  }
  public resetNumDynamicCaptureConfigCreated() {
    this._numDynamicCaptureConfigCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDynamicCaptureConfigCreatedInput() {
    return this._numDynamicCaptureConfigCreated;
  }

  // num_dynamic_capture_config_delete_q - computed: false, optional: true, required: false
  private _numDynamicCaptureConfigDeleteQ?: number; 
  public get numDynamicCaptureConfigDeleteQ() {
    return this.getNumberAttribute('num_dynamic_capture_config_delete_q');
  }
  public set numDynamicCaptureConfigDeleteQ(value: number) {
    this._numDynamicCaptureConfigDeleteQ = value;
  }
  public resetNumDynamicCaptureConfigDeleteQ() {
    this._numDynamicCaptureConfigDeleteQ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDynamicCaptureConfigDeleteQInput() {
    return this._numDynamicCaptureConfigDeleteQ;
  }

  // num_dynamic_capture_config_deleted - computed: false, optional: true, required: false
  private _numDynamicCaptureConfigDeleted?: number; 
  public get numDynamicCaptureConfigDeleted() {
    return this.getNumberAttribute('num_dynamic_capture_config_deleted');
  }
  public set numDynamicCaptureConfigDeleted(value: number) {
    this._numDynamicCaptureConfigDeleted = value;
  }
  public resetNumDynamicCaptureConfigDeleted() {
    this._numDynamicCaptureConfigDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDynamicCaptureConfigDeletedInput() {
    return this._numDynamicCaptureConfigDeleted;
  }

  // num_global_counters_deregistered - computed: false, optional: true, required: false
  private _numGlobalCountersDeregistered?: number; 
  public get numGlobalCountersDeregistered() {
    return this.getNumberAttribute('num_global_counters_deregistered');
  }
  public set numGlobalCountersDeregistered(value: number) {
    this._numGlobalCountersDeregistered = value;
  }
  public resetNumGlobalCountersDeregistered() {
    this._numGlobalCountersDeregistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numGlobalCountersDeregisteredInput() {
    return this._numGlobalCountersDeregistered;
  }

  // num_global_counters_registered - computed: false, optional: true, required: false
  private _numGlobalCountersRegistered?: number; 
  public get numGlobalCountersRegistered() {
    return this.getNumberAttribute('num_global_counters_registered');
  }
  public set numGlobalCountersRegistered(value: number) {
    this._numGlobalCountersRegistered = value;
  }
  public resetNumGlobalCountersRegistered() {
    this._numGlobalCountersRegistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numGlobalCountersRegisteredInput() {
    return this._numGlobalCountersRegistered;
  }

  // num_of_anomalies_cleared - computed: false, optional: true, required: false
  private _numOfAnomaliesCleared?: number; 
  public get numOfAnomaliesCleared() {
    return this.getNumberAttribute('num_of_anomalies_cleared');
  }
  public set numOfAnomaliesCleared(value: number) {
    this._numOfAnomaliesCleared = value;
  }
  public resetNumOfAnomaliesCleared() {
    this._numOfAnomaliesCleared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfAnomaliesClearedInput() {
    return this._numOfAnomaliesCleared;
  }

  // num_of_anomalies_detected - computed: false, optional: true, required: false
  private _numOfAnomaliesDetected?: number; 
  public get numOfAnomaliesDetected() {
    return this.getNumberAttribute('num_of_anomalies_detected');
  }
  public set numOfAnomaliesDetected(value: number) {
    this._numOfAnomaliesDetected = value;
  }
  public resetNumOfAnomaliesDetected() {
    this._numOfAnomaliesDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfAnomaliesDetectedInput() {
    return this._numOfAnomaliesDetected;
  }

  // num_pcaps_create_failed - computed: false, optional: true, required: false
  private _numPcapsCreateFailed?: number; 
  public get numPcapsCreateFailed() {
    return this.getNumberAttribute('num_pcaps_create_failed');
  }
  public set numPcapsCreateFailed(value: number) {
    this._numPcapsCreateFailed = value;
  }
  public resetNumPcapsCreateFailed() {
    this._numPcapsCreateFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPcapsCreateFailedInput() {
    return this._numPcapsCreateFailed;
  }

  // num_pcaps_created - computed: false, optional: true, required: false
  private _numPcapsCreated?: number; 
  public get numPcapsCreated() {
    return this.getNumberAttribute('num_pcaps_created');
  }
  public set numPcapsCreated(value: number) {
    this._numPcapsCreated = value;
  }
  public resetNumPcapsCreated() {
    this._numPcapsCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPcapsCreatedInput() {
    return this._numPcapsCreated;
  }

  // num_per_object_counters_deregistered - computed: false, optional: true, required: false
  private _numPerObjectCountersDeregistered?: number; 
  public get numPerObjectCountersDeregistered() {
    return this.getNumberAttribute('num_per_object_counters_deregistered');
  }
  public set numPerObjectCountersDeregistered(value: number) {
    this._numPerObjectCountersDeregistered = value;
  }
  public resetNumPerObjectCountersDeregistered() {
    this._numPerObjectCountersDeregistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPerObjectCountersDeregisteredInput() {
    return this._numPerObjectCountersDeregistered;
  }

  // num_per_object_counters_registered - computed: false, optional: true, required: false
  private _numPerObjectCountersRegistered?: number; 
  public get numPerObjectCountersRegistered() {
    return this.getNumberAttribute('num_per_object_counters_registered');
  }
  public set numPerObjectCountersRegistered(value: number) {
    this._numPerObjectCountersRegistered = value;
  }
  public resetNumPerObjectCountersRegistered() {
    this._numPerObjectCountersRegistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPerObjectCountersRegisteredInput() {
    return this._numPerObjectCountersRegistered;
  }

  // num_tmp_pcaps_created - computed: false, optional: true, required: false
  private _numTmpPcapsCreated?: number; 
  public get numTmpPcapsCreated() {
    return this.getNumberAttribute('num_tmp_pcaps_created');
  }
  public set numTmpPcapsCreated(value: number) {
    this._numTmpPcapsCreated = value;
  }
  public resetNumTmpPcapsCreated() {
    this._numTmpPcapsCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTmpPcapsCreatedInput() {
    return this._numTmpPcapsCreated;
  }

  // pkt_already_captured - computed: false, optional: true, required: false
  private _pktAlreadyCaptured?: number; 
  public get pktAlreadyCaptured() {
    return this.getNumberAttribute('pkt_already_captured');
  }
  public set pktAlreadyCaptured(value: number) {
    this._pktAlreadyCaptured = value;
  }
  public resetPktAlreadyCaptured() {
    this._pktAlreadyCaptured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktAlreadyCapturedInput() {
    return this._pktAlreadyCaptured;
  }

  // pktcap_oom - computed: false, optional: true, required: false
  private _pktcapOom?: number; 
  public get pktcapOom() {
    return this.getNumberAttribute('pktcap_oom');
  }
  public set pktcapOom(value: number) {
    this._pktcapOom = value;
  }
  public resetPktcapOom() {
    this._pktcapOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcapOomInput() {
    return this._pktcapOom;
  }

  // pktcapture_failure_file_size_rchd - computed: false, optional: true, required: false
  private _pktcaptureFailureFileSizeRchd?: number; 
  public get pktcaptureFailureFileSizeRchd() {
    return this.getNumberAttribute('pktcapture_failure_file_size_rchd');
  }
  public set pktcaptureFailureFileSizeRchd(value: number) {
    this._pktcaptureFailureFileSizeRchd = value;
  }
  public resetPktcaptureFailureFileSizeRchd() {
    this._pktcaptureFailureFileSizeRchd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureFailureFileSizeRchdInput() {
    return this._pktcaptureFailureFileSizeRchd;
  }

  // pktcapture_failure_wait_for_block - computed: false, optional: true, required: false
  private _pktcaptureFailureWaitForBlock?: number; 
  public get pktcaptureFailureWaitForBlock() {
    return this.getNumberAttribute('pktcapture_failure_wait_for_block');
  }
  public set pktcaptureFailureWaitForBlock(value: number) {
    this._pktcaptureFailureWaitForBlock = value;
  }
  public resetPktcaptureFailureWaitForBlock() {
    this._pktcaptureFailureWaitForBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureFailureWaitForBlockInput() {
    return this._pktcaptureFailureWaitForBlock;
  }

  // pktcapture_triggered_by_anomaly - computed: false, optional: true, required: false
  private _pktcaptureTriggeredByAnomaly?: number; 
  public get pktcaptureTriggeredByAnomaly() {
    return this.getNumberAttribute('pktcapture_triggered_by_anomaly');
  }
  public set pktcaptureTriggeredByAnomaly(value: number) {
    this._pktcaptureTriggeredByAnomaly = value;
  }
  public resetPktcaptureTriggeredByAnomaly() {
    this._pktcaptureTriggeredByAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureTriggeredByAnomalyInput() {
    return this._pktcaptureTriggeredByAnomaly;
  }

  // pktcapture_triggered_by_increment - computed: false, optional: true, required: false
  private _pktcaptureTriggeredByIncrement?: number; 
  public get pktcaptureTriggeredByIncrement() {
    return this.getNumberAttribute('pktcapture_triggered_by_increment');
  }
  public set pktcaptureTriggeredByIncrement(value: number) {
    this._pktcaptureTriggeredByIncrement = value;
  }
  public resetPktcaptureTriggeredByIncrement() {
    this._pktcaptureTriggeredByIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureTriggeredByIncrementInput() {
    return this._pktcaptureTriggeredByIncrement;
  }

  // pktcapture_triggered_by_other_feature - computed: false, optional: true, required: false
  private _pktcaptureTriggeredByOtherFeature?: number; 
  public get pktcaptureTriggeredByOtherFeature() {
    return this.getNumberAttribute('pktcapture_triggered_by_other_feature');
  }
  public set pktcaptureTriggeredByOtherFeature(value: number) {
    this._pktcaptureTriggeredByOtherFeature = value;
  }
  public resetPktcaptureTriggeredByOtherFeature() {
    this._pktcaptureTriggeredByOtherFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureTriggeredByOtherFeatureInput() {
    return this._pktcaptureTriggeredByOtherFeature;
  }

  // pktcapture_with_conn_but_not_tagged_failure - computed: false, optional: true, required: false
  private _pktcaptureWithConnButNotTaggedFailure?: number; 
  public get pktcaptureWithConnButNotTaggedFailure() {
    return this.getNumberAttribute('pktcapture_with_conn_but_not_tagged_failure');
  }
  public set pktcaptureWithConnButNotTaggedFailure(value: number) {
    this._pktcaptureWithConnButNotTaggedFailure = value;
  }
  public resetPktcaptureWithConnButNotTaggedFailure() {
    this._pktcaptureWithConnButNotTaggedFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnButNotTaggedFailureInput() {
    return this._pktcaptureWithConnButNotTaggedFailure;
  }

  // pktcapture_with_conn_but_not_tagged_success - computed: false, optional: true, required: false
  private _pktcaptureWithConnButNotTaggedSuccess?: number; 
  public get pktcaptureWithConnButNotTaggedSuccess() {
    return this.getNumberAttribute('pktcapture_with_conn_but_not_tagged_success');
  }
  public set pktcaptureWithConnButNotTaggedSuccess(value: number) {
    this._pktcaptureWithConnButNotTaggedSuccess = value;
  }
  public resetPktcaptureWithConnButNotTaggedSuccess() {
    this._pktcaptureWithConnButNotTaggedSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnButNotTaggedSuccessInput() {
    return this._pktcaptureWithConnButNotTaggedSuccess;
  }

  // pktcapture_with_conn_failure - computed: false, optional: true, required: false
  private _pktcaptureWithConnFailure?: number; 
  public get pktcaptureWithConnFailure() {
    return this.getNumberAttribute('pktcapture_with_conn_failure');
  }
  public set pktcaptureWithConnFailure(value: number) {
    this._pktcaptureWithConnFailure = value;
  }
  public resetPktcaptureWithConnFailure() {
    this._pktcaptureWithConnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnFailureInput() {
    return this._pktcaptureWithConnFailure;
  }

  // pktcapture_with_conn_failure_global - computed: false, optional: true, required: false
  private _pktcaptureWithConnFailureGlobal?: number; 
  public get pktcaptureWithConnFailureGlobal() {
    return this.getNumberAttribute('pktcapture_with_conn_failure_global');
  }
  public set pktcaptureWithConnFailureGlobal(value: number) {
    this._pktcaptureWithConnFailureGlobal = value;
  }
  public resetPktcaptureWithConnFailureGlobal() {
    this._pktcaptureWithConnFailureGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnFailureGlobalInput() {
    return this._pktcaptureWithConnFailureGlobal;
  }

  // pktcapture_with_conn_success - computed: false, optional: true, required: false
  private _pktcaptureWithConnSuccess?: number; 
  public get pktcaptureWithConnSuccess() {
    return this.getNumberAttribute('pktcapture_with_conn_success');
  }
  public set pktcaptureWithConnSuccess(value: number) {
    this._pktcaptureWithConnSuccess = value;
  }
  public resetPktcaptureWithConnSuccess() {
    this._pktcaptureWithConnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnSuccessInput() {
    return this._pktcaptureWithConnSuccess;
  }

  // pktcapture_with_conn_success_global - computed: false, optional: true, required: false
  private _pktcaptureWithConnSuccessGlobal?: number; 
  public get pktcaptureWithConnSuccessGlobal() {
    return this.getNumberAttribute('pktcapture_with_conn_success_global');
  }
  public set pktcaptureWithConnSuccessGlobal(value: number) {
    this._pktcaptureWithConnSuccessGlobal = value;
  }
  public resetPktcaptureWithConnSuccessGlobal() {
    this._pktcaptureWithConnSuccessGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithConnSuccessGlobalInput() {
    return this._pktcaptureWithConnSuccessGlobal;
  }

  // pktcapture_with_no_conn_failure - computed: false, optional: true, required: false
  private _pktcaptureWithNoConnFailure?: number; 
  public get pktcaptureWithNoConnFailure() {
    return this.getNumberAttribute('pktcapture_with_no_conn_failure');
  }
  public set pktcaptureWithNoConnFailure(value: number) {
    this._pktcaptureWithNoConnFailure = value;
  }
  public resetPktcaptureWithNoConnFailure() {
    this._pktcaptureWithNoConnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithNoConnFailureInput() {
    return this._pktcaptureWithNoConnFailure;
  }

  // pktcapture_with_no_conn_success - computed: false, optional: true, required: false
  private _pktcaptureWithNoConnSuccess?: number; 
  public get pktcaptureWithNoConnSuccess() {
    return this.getNumberAttribute('pktcapture_with_no_conn_success');
  }
  public set pktcaptureWithNoConnSuccess(value: number) {
    this._pktcaptureWithNoConnSuccess = value;
  }
  public resetPktcaptureWithNoConnSuccess() {
    this._pktcaptureWithNoConnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureWithNoConnSuccessInput() {
    return this._pktcaptureWithNoConnSuccess;
  }

  // skip_as_conn_already_recapture - computed: false, optional: true, required: false
  private _skipAsConnAlreadyRecapture?: number; 
  public get skipAsConnAlreadyRecapture() {
    return this.getNumberAttribute('skip_as_conn_already_recapture');
  }
  public set skipAsConnAlreadyRecapture(value: number) {
    this._skipAsConnAlreadyRecapture = value;
  }
  public resetSkipAsConnAlreadyRecapture() {
    this._skipAsConnAlreadyRecapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAsConnAlreadyRecaptureInput() {
    return this._skipAsConnAlreadyRecapture;
  }

  // skip_capture_as_conn_created_before_smp - computed: false, optional: true, required: false
  private _skipCaptureAsConnCreatedBeforeSmp?: number; 
  public get skipCaptureAsConnCreatedBeforeSmp() {
    return this.getNumberAttribute('skip_capture_as_conn_created_before_smp');
  }
  public set skipCaptureAsConnCreatedBeforeSmp(value: number) {
    this._skipCaptureAsConnCreatedBeforeSmp = value;
  }
  public resetSkipCaptureAsConnCreatedBeforeSmp() {
    this._skipCaptureAsConnCreatedBeforeSmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCaptureAsConnCreatedBeforeSmpInput() {
    return this._skipCaptureAsConnCreatedBeforeSmp;
  }

  // wrong_ctr_incremented - computed: false, optional: true, required: false
  private _wrongCtrIncremented?: number; 
  public get wrongCtrIncremented() {
    return this.getNumberAttribute('wrong_ctr_incremented');
  }
  public set wrongCtrIncremented(value: number) {
    this._wrongCtrIncremented = value;
  }
  public resetWrongCtrIncremented() {
    this._wrongCtrIncremented = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongCtrIncrementedInput() {
    return this._wrongCtrIncremented;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats thunder_visibility_packet_capture_capture_config_stats}
*/
export class DataThunderVisibilityPacketCaptureCaptureConfigStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_capture_config_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityPacketCaptureCaptureConfigStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityPacketCaptureCaptureConfigStats to import
  * @param importFromId The id of the existing DataThunderVisibilityPacketCaptureCaptureConfigStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityPacketCaptureCaptureConfigStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_capture_config_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_packet_capture_capture_config_stats thunder_visibility_packet_capture_capture_config_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityPacketCaptureCaptureConfigStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityPacketCaptureCaptureConfigStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_capture_config_stats',
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
    this._name = config.name;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityPacketCaptureCaptureConfigStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityPacketCaptureCaptureConfigStatsStats) {
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
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderVisibilityPacketCaptureCaptureConfigStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderVisibilityPacketCaptureCaptureConfigStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityPacketCaptureCaptureConfigStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
