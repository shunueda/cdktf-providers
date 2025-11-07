// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#id KafkaTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the user group that owns the topic. Assigning ownership to decentralize topic management is part of [Aiven for Apache Kafka® governance](https://aiven.io/docs/products/kafka/concepts/governance-overview).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#owner_user_group_id KafkaTopic#owner_user_group_id}
  */
  readonly ownerUserGroupId?: string;
  /**
  * The number of partitions to create in the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#partitions KafkaTopic#partitions}
  */
  readonly partitions: number;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#project KafkaTopic#project}
  */
  readonly project: string;
  /**
  * The replication factor for the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#replication KafkaTopic#replication}
  */
  readonly replication: number;
  /**
  * The name of the service that this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#service_name KafkaTopic#service_name}
  */
  readonly serviceName: string;
  /**
  * Prevents topics from being deleted by Terraform. It's recommended for topics containing critical data. **Topics can still be deleted in the Aiven Console.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#termination_protection KafkaTopic#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * The description of the topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#topic_description KafkaTopic#topic_description}
  */
  readonly topicDescription?: string;
  /**
  * The name of the topic. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#topic_name KafkaTopic#topic_name}
  */
  readonly topicName: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#config KafkaTopic#config}
  */
  readonly config?: KafkaTopicConfigA;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#tag KafkaTopic#tag}
  */
  readonly tag?: KafkaTopicTag[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#timeouts KafkaTopic#timeouts}
  */
  readonly timeouts?: KafkaTopicTimeouts;
}
export interface KafkaTopicConfigA {
  /**
  * The retention policy to use on old segments. Possible values include 'delete', 'compact', or a comma-separated list of them. The default policy ('delete') will discard old segments when their retention time or size limit has been reached. The 'compact' setting will enable log compaction on the topic. The possible values are `compact`, `compact,delete` and `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#cleanup_policy KafkaTopic#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * Specify the final compression type for a given topic. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'uncompressed' which is equivalent to no compression; and 'producer' which means retain the original compression codec set by the producer. The possible values are `gzip`, `lz4`, `producer`, `snappy`, `uncompressed` and `zstd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#compression_type KafkaTopic#compression_type}
  */
  readonly compressionType?: string;
  /**
  * The amount of time to retain delete tombstone markers for log compacted topics. This setting also gives a bound on the time in which a consumer must complete a read if they begin from offset 0 to ensure that they get a valid snapshot of the final stage (otherwise delete tombstones may be collected before they complete their scan).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#delete_retention_ms KafkaTopic#delete_retention_ms}
  */
  readonly deleteRetentionMs?: string;
  /**
  * Creates a [diskless topic](https://aiven.io/docs/products/diskless). You can only do this when you create the topic and you cannot change it later. Diskless topics are only available for bring your own cloud (BYOC) services that have the feature enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#diskless_enable KafkaTopic#diskless_enable}
  */
  readonly disklessEnable?: boolean | cdktf.IResolvable;
  /**
  * The time to wait before deleting a file from the filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#file_delete_delay_ms KafkaTopic#file_delete_delay_ms}
  */
  readonly fileDeleteDelayMs?: string;
  /**
  * This setting allows specifying an interval at which we will force an fsync of data written to the log. For example if this was set to 1 we would fsync after every message; if it were 5 we would fsync after every five messages. In general we recommend you not set this and use replication for durability and allow the operating system's background flush capabilities as it is more efficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#flush_messages KafkaTopic#flush_messages}
  */
  readonly flushMessages?: string;
  /**
  * This setting allows specifying a time interval at which we will force an fsync of data written to the log. For example if this was set to 1000 we would fsync after 1000 ms had passed. In general we recommend you not set this and use replication for durability and allow the operating system's background flush capabilities as it is more efficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#flush_ms KafkaTopic#flush_ms}
  */
  readonly flushMs?: string;
  /**
  * This setting controls how frequently Kafka adds an index entry to its offset index. The default setting ensures that we index a message roughly every 4096 bytes. More indexing allows reads to jump closer to the exact position in the log but makes the index larger. You probably don't need to change this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#index_interval_bytes KafkaTopic#index_interval_bytes}
  */
  readonly indexIntervalBytes?: string;
  /**
  * This configuration controls the maximum bytes tiered storage will retain segment files locally before it will discard old log segments to free up space. If set to -2, the limit is equal to overall retention time. If set to -1, no limit is applied but it's possible only if overall retention is also -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#local_retention_bytes KafkaTopic#local_retention_bytes}
  */
  readonly localRetentionBytes?: string;
  /**
  * This configuration controls the maximum time tiered storage will retain segment files locally before it will discard old log segments to free up space. If set to -2, the time limit is equal to overall retention time. If set to -1, no time limit is applied but it's possible only if overall retention is also -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#local_retention_ms KafkaTopic#local_retention_ms}
  */
  readonly localRetentionMs?: string;
  /**
  * The maximum time a message will remain ineligible for compaction in the log. Only applicable for logs that are being compacted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#max_compaction_lag_ms KafkaTopic#max_compaction_lag_ms}
  */
  readonly maxCompactionLagMs?: string;
  /**
  * The largest record batch size allowed by Kafka (after compression if compression is enabled). If this is increased and there are consumers older than 0.10.2, the consumers' fetch size must also be increased so that the they can fetch record batches this large. In the latest message format version, records are always grouped into batches for efficiency. In previous message format versions, uncompressed records are not grouped into batches and this limit only applies to a single record in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#max_message_bytes KafkaTopic#max_message_bytes}
  */
  readonly maxMessageBytes?: string;
  /**
  * This configuration controls whether down-conversion of message formats is enabled to satisfy consume requests. When set to false, broker will not perform down-conversion for consumers expecting an older message format. The broker responds with UNSUPPORTED_VERSION error for consume requests from such older clients. This configuration does not apply to any message format conversion that might be required for replication to followers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#message_downconversion_enable KafkaTopic#message_downconversion_enable}
  */
  readonly messageDownconversionEnable?: boolean | cdktf.IResolvable;
  /**
  * Specify the message format version the broker will use to append messages to the logs. The value should be a valid ApiVersion. Some examples are: 0.8.2, 0.9.0.0, 0.10.0, check ApiVersion for more details. By setting a particular message format version, the user is certifying that all the existing messages on disk are smaller or equal than the specified version. Setting this value incorrectly will cause consumers with older versions to break as they will receive messages with a format that they don't understand. Deprecated in Kafka 4.0+: this configuration is removed and any supplied value will be ignored; for services upgraded to 4.0+, the returned value may be 'None'. The possible values are `0.10.0`, `0.10.0-IV0`, `0.10.0-IV1`, `0.10.1`, `0.10.1-IV0`, `0.10.1-IV1`, `0.10.1-IV2`, `0.10.2`, `0.10.2-IV0`, `0.11.0`, `0.11.0-IV0`, `0.11.0-IV1`, `0.11.0-IV2`, `0.8.0`, `0.8.1`, `0.8.2`, `0.9.0`, `1.0`, `1.0-IV0`, `1.1`, `1.1-IV0`, `2.0`, `2.0-IV0`, `2.0-IV1`, `2.1`, `2.1-IV0`, `2.1-IV1`, `2.1-IV2`, `2.2`, `2.2-IV0`, `2.2-IV1`, `2.3`, `2.3-IV0`, `2.3-IV1`, `2.4`, `2.4-IV0`, `2.4-IV1`, `2.5`, `2.5-IV0`, `2.6`, `2.6-IV0`, `2.7`, `2.7-IV0`, `2.7-IV1`, `2.7-IV2`, `2.8`, `2.8-IV0`, `2.8-IV1`, `3.0`, `3.0-IV0`, `3.0-IV1`, `3.1`, `3.1-IV0`, `3.2`, `3.2-IV0`, `3.3`, `3.3-IV0`, `3.3-IV1`, `3.3-IV2`, `3.3-IV3`, `3.4`, `3.4-IV0`, `3.5`, `3.5-IV0`, `3.5-IV1`, `3.5-IV2`, `3.6`, `3.6-IV0`, `3.6-IV1`, `3.6-IV2`, `3.7`, `3.7-IV0`, `3.7-IV1`, `3.7-IV2`, `3.7-IV3`, `3.7-IV4`, `3.8`, `3.8-IV0`, `3.9`, `3.9-IV0`, `3.9-IV1`, `4.0`, `4.0-IV0`, `4.1` and `4.1-IV0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#message_format_version KafkaTopic#message_format_version}
  */
  readonly messageFormatVersion?: string;
  /**
  * The maximum difference allowed between the timestamp when a broker receives a message and the timestamp specified in the message. If message.timestamp.type=CreateTime, a message will be rejected if the difference in timestamp exceeds this threshold. This configuration is ignored if message.timestamp.type=LogAppendTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#message_timestamp_difference_max_ms KafkaTopic#message_timestamp_difference_max_ms}
  */
  readonly messageTimestampDifferenceMaxMs?: string;
  /**
  * Define whether the timestamp in the message is message create time or log append time. The possible values are `CreateTime` and `LogAppendTime`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#message_timestamp_type KafkaTopic#message_timestamp_type}
  */
  readonly messageTimestampType?: string;
  /**
  * This configuration controls how frequently the log compactor will attempt to clean the log (assuming log compaction is enabled). By default we will avoid cleaning a log where more than 50% of the log has been compacted. This ratio bounds the maximum space wasted in the log by duplicates (at 50% at most 50% of the log could be duplicates). A higher ratio will mean fewer, more efficient cleanings but will mean more wasted space in the log. If the max.compaction.lag.ms or the min.compaction.lag.ms configurations are also specified, then the log compactor considers the log to be eligible for compaction as soon as either: (i) the dirty ratio threshold has been met and the log has had dirty (uncompacted) records for at least the min.compaction.lag.ms duration, or (ii) if the log has had dirty (uncompacted) records for at most the max.compaction.lag.ms period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#min_cleanable_dirty_ratio KafkaTopic#min_cleanable_dirty_ratio}
  */
  readonly minCleanableDirtyRatio?: number;
  /**
  * The minimum time a message will remain uncompacted in the log. Only applicable for logs that are being compacted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#min_compaction_lag_ms KafkaTopic#min_compaction_lag_ms}
  */
  readonly minCompactionLagMs?: string;
  /**
  * When a producer sets acks to 'all' (or '-1'), this configuration specifies the minimum number of replicas that must acknowledge a write for the write to be considered successful. If this minimum cannot be met, then the producer will raise an exception (either NotEnoughReplicas or NotEnoughReplicasAfterAppend). When used together, min.insync.replicas and acks allow you to enforce greater durability guarantees. A typical scenario would be to create a topic with a replication factor of 3, set min.insync.replicas to 2, and produce with acks of 'all'. This will ensure that the producer raises an exception if a majority of replicas do not receive a write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#min_insync_replicas KafkaTopic#min_insync_replicas}
  */
  readonly minInsyncReplicas?: string;
  /**
  * True if we should preallocate the file on disk when creating a new log segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#preallocate KafkaTopic#preallocate}
  */
  readonly preallocate?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether tiered storage should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#remote_storage_enable KafkaTopic#remote_storage_enable}
  */
  readonly remoteStorageEnable?: boolean | cdktf.IResolvable;
  /**
  * This configuration controls the maximum size a partition (which consists of log segments) can grow to before we will discard old log segments to free up space if we are using the 'delete' retention policy. By default there is no size limit only a time limit. Since this limit is enforced at the partition level, multiply it by the number of partitions to compute the topic retention in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#retention_bytes KafkaTopic#retention_bytes}
  */
  readonly retentionBytes?: string;
  /**
  * This configuration controls the maximum time we will retain a log before we will discard old log segments to free up space if we are using the 'delete' retention policy. This represents an SLA on how soon consumers must read their data. If set to -1, no time limit is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#retention_ms KafkaTopic#retention_ms}
  */
  readonly retentionMs?: string;
  /**
  * This configuration controls the size of the index that maps offsets to file positions. We preallocate this index file and shrink it only after log rolls. You generally should not need to change this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#segment_bytes KafkaTopic#segment_bytes}
  */
  readonly segmentBytes?: string;
  /**
  * This configuration controls the size of the index that maps offsets to file positions. We preallocate this index file and shrink it only after log rolls. You generally should not need to change this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#segment_index_bytes KafkaTopic#segment_index_bytes}
  */
  readonly segmentIndexBytes?: string;
  /**
  * The maximum random jitter subtracted from the scheduled segment roll time to avoid thundering herds of segment rolling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#segment_jitter_ms KafkaTopic#segment_jitter_ms}
  */
  readonly segmentJitterMs?: string;
  /**
  * This configuration controls the period of time after which Kafka will force the log to roll even if the segment file isn't full to ensure that retention can delete or compact old data. Setting this to a very low value has consequences, and the Aiven management plane ignores values less than 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#segment_ms KafkaTopic#segment_ms}
  */
  readonly segmentMs?: string;
  /**
  * Indicates whether to enable replicas not in the ISR set to be elected as leader as a last resort, even though doing so may result in data loss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#unclean_leader_election_enable KafkaTopic#unclean_leader_election_enable}
  */
  readonly uncleanLeaderElectionEnable?: boolean | cdktf.IResolvable;
}

export function kafkaTopicConfigAToTerraform(struct?: KafkaTopicConfigAOutputReference | KafkaTopicConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    delete_retention_ms: cdktf.stringToTerraform(struct!.deleteRetentionMs),
    diskless_enable: cdktf.booleanToTerraform(struct!.disklessEnable),
    file_delete_delay_ms: cdktf.stringToTerraform(struct!.fileDeleteDelayMs),
    flush_messages: cdktf.stringToTerraform(struct!.flushMessages),
    flush_ms: cdktf.stringToTerraform(struct!.flushMs),
    index_interval_bytes: cdktf.stringToTerraform(struct!.indexIntervalBytes),
    local_retention_bytes: cdktf.stringToTerraform(struct!.localRetentionBytes),
    local_retention_ms: cdktf.stringToTerraform(struct!.localRetentionMs),
    max_compaction_lag_ms: cdktf.stringToTerraform(struct!.maxCompactionLagMs),
    max_message_bytes: cdktf.stringToTerraform(struct!.maxMessageBytes),
    message_downconversion_enable: cdktf.booleanToTerraform(struct!.messageDownconversionEnable),
    message_format_version: cdktf.stringToTerraform(struct!.messageFormatVersion),
    message_timestamp_difference_max_ms: cdktf.stringToTerraform(struct!.messageTimestampDifferenceMaxMs),
    message_timestamp_type: cdktf.stringToTerraform(struct!.messageTimestampType),
    min_cleanable_dirty_ratio: cdktf.numberToTerraform(struct!.minCleanableDirtyRatio),
    min_compaction_lag_ms: cdktf.stringToTerraform(struct!.minCompactionLagMs),
    min_insync_replicas: cdktf.stringToTerraform(struct!.minInsyncReplicas),
    preallocate: cdktf.booleanToTerraform(struct!.preallocate),
    remote_storage_enable: cdktf.booleanToTerraform(struct!.remoteStorageEnable),
    retention_bytes: cdktf.stringToTerraform(struct!.retentionBytes),
    retention_ms: cdktf.stringToTerraform(struct!.retentionMs),
    segment_bytes: cdktf.stringToTerraform(struct!.segmentBytes),
    segment_index_bytes: cdktf.stringToTerraform(struct!.segmentIndexBytes),
    segment_jitter_ms: cdktf.stringToTerraform(struct!.segmentJitterMs),
    segment_ms: cdktf.stringToTerraform(struct!.segmentMs),
    unclean_leader_election_enable: cdktf.booleanToTerraform(struct!.uncleanLeaderElectionEnable),
  }
}


export function kafkaTopicConfigAToHclTerraform(struct?: KafkaTopicConfigAOutputReference | KafkaTopicConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_retention_ms: {
      value: cdktf.stringToHclTerraform(struct!.deleteRetentionMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    diskless_enable: {
      value: cdktf.booleanToHclTerraform(struct!.disklessEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_delete_delay_ms: {
      value: cdktf.stringToHclTerraform(struct!.fileDeleteDelayMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_messages: {
      value: cdktf.stringToHclTerraform(struct!.flushMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flush_ms: {
      value: cdktf.stringToHclTerraform(struct!.flushMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_interval_bytes: {
      value: cdktf.stringToHclTerraform(struct!.indexIntervalBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_retention_bytes: {
      value: cdktf.stringToHclTerraform(struct!.localRetentionBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_retention_ms: {
      value: cdktf.stringToHclTerraform(struct!.localRetentionMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_compaction_lag_ms: {
      value: cdktf.stringToHclTerraform(struct!.maxCompactionLagMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_message_bytes: {
      value: cdktf.stringToHclTerraform(struct!.maxMessageBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_downconversion_enable: {
      value: cdktf.booleanToHclTerraform(struct!.messageDownconversionEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_format_version: {
      value: cdktf.stringToHclTerraform(struct!.messageFormatVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_timestamp_difference_max_ms: {
      value: cdktf.stringToHclTerraform(struct!.messageTimestampDifferenceMaxMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_timestamp_type: {
      value: cdktf.stringToHclTerraform(struct!.messageTimestampType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cleanable_dirty_ratio: {
      value: cdktf.numberToHclTerraform(struct!.minCleanableDirtyRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_compaction_lag_ms: {
      value: cdktf.stringToHclTerraform(struct!.minCompactionLagMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_insync_replicas: {
      value: cdktf.stringToHclTerraform(struct!.minInsyncReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preallocate: {
      value: cdktf.booleanToHclTerraform(struct!.preallocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_storage_enable: {
      value: cdktf.booleanToHclTerraform(struct!.remoteStorageEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_bytes: {
      value: cdktf.stringToHclTerraform(struct!.retentionBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_ms: {
      value: cdktf.stringToHclTerraform(struct!.retentionMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_bytes: {
      value: cdktf.stringToHclTerraform(struct!.segmentBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_index_bytes: {
      value: cdktf.stringToHclTerraform(struct!.segmentIndexBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_jitter_ms: {
      value: cdktf.stringToHclTerraform(struct!.segmentJitterMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_ms: {
      value: cdktf.stringToHclTerraform(struct!.segmentMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unclean_leader_election_enable: {
      value: cdktf.booleanToHclTerraform(struct!.uncleanLeaderElectionEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaTopicConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaTopicConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._deleteRetentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRetentionMs = this._deleteRetentionMs;
    }
    if (this._disklessEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disklessEnable = this._disklessEnable;
    }
    if (this._fileDeleteDelayMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileDeleteDelayMs = this._fileDeleteDelayMs;
    }
    if (this._flushMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushMessages = this._flushMessages;
    }
    if (this._flushMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushMs = this._flushMs;
    }
    if (this._indexIntervalBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexIntervalBytes = this._indexIntervalBytes;
    }
    if (this._localRetentionBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRetentionBytes = this._localRetentionBytes;
    }
    if (this._localRetentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRetentionMs = this._localRetentionMs;
    }
    if (this._maxCompactionLagMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCompactionLagMs = this._maxCompactionLagMs;
    }
    if (this._maxMessageBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessageBytes = this._maxMessageBytes;
    }
    if (this._messageDownconversionEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDownconversionEnable = this._messageDownconversionEnable;
    }
    if (this._messageFormatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormatVersion = this._messageFormatVersion;
    }
    if (this._messageTimestampDifferenceMaxMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTimestampDifferenceMaxMs = this._messageTimestampDifferenceMaxMs;
    }
    if (this._messageTimestampType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTimestampType = this._messageTimestampType;
    }
    if (this._minCleanableDirtyRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCleanableDirtyRatio = this._minCleanableDirtyRatio;
    }
    if (this._minCompactionLagMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCompactionLagMs = this._minCompactionLagMs;
    }
    if (this._minInsyncReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInsyncReplicas = this._minInsyncReplicas;
    }
    if (this._preallocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.preallocate = this._preallocate;
    }
    if (this._remoteStorageEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteStorageEnable = this._remoteStorageEnable;
    }
    if (this._retentionBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionBytes = this._retentionBytes;
    }
    if (this._retentionMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionMs = this._retentionMs;
    }
    if (this._segmentBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentBytes = this._segmentBytes;
    }
    if (this._segmentIndexBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentIndexBytes = this._segmentIndexBytes;
    }
    if (this._segmentJitterMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentJitterMs = this._segmentJitterMs;
    }
    if (this._segmentMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentMs = this._segmentMs;
    }
    if (this._uncleanLeaderElectionEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncleanLeaderElectionEnable = this._uncleanLeaderElectionEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaTopicConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanupPolicy = undefined;
      this._compressionType = undefined;
      this._deleteRetentionMs = undefined;
      this._disklessEnable = undefined;
      this._fileDeleteDelayMs = undefined;
      this._flushMessages = undefined;
      this._flushMs = undefined;
      this._indexIntervalBytes = undefined;
      this._localRetentionBytes = undefined;
      this._localRetentionMs = undefined;
      this._maxCompactionLagMs = undefined;
      this._maxMessageBytes = undefined;
      this._messageDownconversionEnable = undefined;
      this._messageFormatVersion = undefined;
      this._messageTimestampDifferenceMaxMs = undefined;
      this._messageTimestampType = undefined;
      this._minCleanableDirtyRatio = undefined;
      this._minCompactionLagMs = undefined;
      this._minInsyncReplicas = undefined;
      this._preallocate = undefined;
      this._remoteStorageEnable = undefined;
      this._retentionBytes = undefined;
      this._retentionMs = undefined;
      this._segmentBytes = undefined;
      this._segmentIndexBytes = undefined;
      this._segmentJitterMs = undefined;
      this._segmentMs = undefined;
      this._uncleanLeaderElectionEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanupPolicy = value.cleanupPolicy;
      this._compressionType = value.compressionType;
      this._deleteRetentionMs = value.deleteRetentionMs;
      this._disklessEnable = value.disklessEnable;
      this._fileDeleteDelayMs = value.fileDeleteDelayMs;
      this._flushMessages = value.flushMessages;
      this._flushMs = value.flushMs;
      this._indexIntervalBytes = value.indexIntervalBytes;
      this._localRetentionBytes = value.localRetentionBytes;
      this._localRetentionMs = value.localRetentionMs;
      this._maxCompactionLagMs = value.maxCompactionLagMs;
      this._maxMessageBytes = value.maxMessageBytes;
      this._messageDownconversionEnable = value.messageDownconversionEnable;
      this._messageFormatVersion = value.messageFormatVersion;
      this._messageTimestampDifferenceMaxMs = value.messageTimestampDifferenceMaxMs;
      this._messageTimestampType = value.messageTimestampType;
      this._minCleanableDirtyRatio = value.minCleanableDirtyRatio;
      this._minCompactionLagMs = value.minCompactionLagMs;
      this._minInsyncReplicas = value.minInsyncReplicas;
      this._preallocate = value.preallocate;
      this._remoteStorageEnable = value.remoteStorageEnable;
      this._retentionBytes = value.retentionBytes;
      this._retentionMs = value.retentionMs;
      this._segmentBytes = value.segmentBytes;
      this._segmentIndexBytes = value.segmentIndexBytes;
      this._segmentJitterMs = value.segmentJitterMs;
      this._segmentMs = value.segmentMs;
      this._uncleanLeaderElectionEnable = value.uncleanLeaderElectionEnable;
    }
  }

  // cleanup_policy - computed: false, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // delete_retention_ms - computed: false, optional: true, required: false
  private _deleteRetentionMs?: string; 
  public get deleteRetentionMs() {
    return this.getStringAttribute('delete_retention_ms');
  }
  public set deleteRetentionMs(value: string) {
    this._deleteRetentionMs = value;
  }
  public resetDeleteRetentionMs() {
    this._deleteRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRetentionMsInput() {
    return this._deleteRetentionMs;
  }

  // diskless_enable - computed: false, optional: true, required: false
  private _disklessEnable?: boolean | cdktf.IResolvable; 
  public get disklessEnable() {
    return this.getBooleanAttribute('diskless_enable');
  }
  public set disklessEnable(value: boolean | cdktf.IResolvable) {
    this._disklessEnable = value;
  }
  public resetDisklessEnable() {
    this._disklessEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disklessEnableInput() {
    return this._disklessEnable;
  }

  // file_delete_delay_ms - computed: false, optional: true, required: false
  private _fileDeleteDelayMs?: string; 
  public get fileDeleteDelayMs() {
    return this.getStringAttribute('file_delete_delay_ms');
  }
  public set fileDeleteDelayMs(value: string) {
    this._fileDeleteDelayMs = value;
  }
  public resetFileDeleteDelayMs() {
    this._fileDeleteDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDeleteDelayMsInput() {
    return this._fileDeleteDelayMs;
  }

  // flush_messages - computed: false, optional: true, required: false
  private _flushMessages?: string; 
  public get flushMessages() {
    return this.getStringAttribute('flush_messages');
  }
  public set flushMessages(value: string) {
    this._flushMessages = value;
  }
  public resetFlushMessages() {
    this._flushMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushMessagesInput() {
    return this._flushMessages;
  }

  // flush_ms - computed: false, optional: true, required: false
  private _flushMs?: string; 
  public get flushMs() {
    return this.getStringAttribute('flush_ms');
  }
  public set flushMs(value: string) {
    this._flushMs = value;
  }
  public resetFlushMs() {
    this._flushMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushMsInput() {
    return this._flushMs;
  }

  // index_interval_bytes - computed: false, optional: true, required: false
  private _indexIntervalBytes?: string; 
  public get indexIntervalBytes() {
    return this.getStringAttribute('index_interval_bytes');
  }
  public set indexIntervalBytes(value: string) {
    this._indexIntervalBytes = value;
  }
  public resetIndexIntervalBytes() {
    this._indexIntervalBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIntervalBytesInput() {
    return this._indexIntervalBytes;
  }

  // local_retention_bytes - computed: false, optional: true, required: false
  private _localRetentionBytes?: string; 
  public get localRetentionBytes() {
    return this.getStringAttribute('local_retention_bytes');
  }
  public set localRetentionBytes(value: string) {
    this._localRetentionBytes = value;
  }
  public resetLocalRetentionBytes() {
    this._localRetentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRetentionBytesInput() {
    return this._localRetentionBytes;
  }

  // local_retention_ms - computed: false, optional: true, required: false
  private _localRetentionMs?: string; 
  public get localRetentionMs() {
    return this.getStringAttribute('local_retention_ms');
  }
  public set localRetentionMs(value: string) {
    this._localRetentionMs = value;
  }
  public resetLocalRetentionMs() {
    this._localRetentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRetentionMsInput() {
    return this._localRetentionMs;
  }

  // max_compaction_lag_ms - computed: false, optional: true, required: false
  private _maxCompactionLagMs?: string; 
  public get maxCompactionLagMs() {
    return this.getStringAttribute('max_compaction_lag_ms');
  }
  public set maxCompactionLagMs(value: string) {
    this._maxCompactionLagMs = value;
  }
  public resetMaxCompactionLagMs() {
    this._maxCompactionLagMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCompactionLagMsInput() {
    return this._maxCompactionLagMs;
  }

  // max_message_bytes - computed: false, optional: true, required: false
  private _maxMessageBytes?: string; 
  public get maxMessageBytes() {
    return this.getStringAttribute('max_message_bytes');
  }
  public set maxMessageBytes(value: string) {
    this._maxMessageBytes = value;
  }
  public resetMaxMessageBytes() {
    this._maxMessageBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageBytesInput() {
    return this._maxMessageBytes;
  }

  // message_downconversion_enable - computed: false, optional: true, required: false
  private _messageDownconversionEnable?: boolean | cdktf.IResolvable; 
  public get messageDownconversionEnable() {
    return this.getBooleanAttribute('message_downconversion_enable');
  }
  public set messageDownconversionEnable(value: boolean | cdktf.IResolvable) {
    this._messageDownconversionEnable = value;
  }
  public resetMessageDownconversionEnable() {
    this._messageDownconversionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDownconversionEnableInput() {
    return this._messageDownconversionEnable;
  }

  // message_format_version - computed: false, optional: true, required: false
  private _messageFormatVersion?: string; 
  public get messageFormatVersion() {
    return this.getStringAttribute('message_format_version');
  }
  public set messageFormatVersion(value: string) {
    this._messageFormatVersion = value;
  }
  public resetMessageFormatVersion() {
    this._messageFormatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatVersionInput() {
    return this._messageFormatVersion;
  }

  // message_timestamp_difference_max_ms - computed: false, optional: true, required: false
  private _messageTimestampDifferenceMaxMs?: string; 
  public get messageTimestampDifferenceMaxMs() {
    return this.getStringAttribute('message_timestamp_difference_max_ms');
  }
  public set messageTimestampDifferenceMaxMs(value: string) {
    this._messageTimestampDifferenceMaxMs = value;
  }
  public resetMessageTimestampDifferenceMaxMs() {
    this._messageTimestampDifferenceMaxMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTimestampDifferenceMaxMsInput() {
    return this._messageTimestampDifferenceMaxMs;
  }

  // message_timestamp_type - computed: false, optional: true, required: false
  private _messageTimestampType?: string; 
  public get messageTimestampType() {
    return this.getStringAttribute('message_timestamp_type');
  }
  public set messageTimestampType(value: string) {
    this._messageTimestampType = value;
  }
  public resetMessageTimestampType() {
    this._messageTimestampType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTimestampTypeInput() {
    return this._messageTimestampType;
  }

  // min_cleanable_dirty_ratio - computed: false, optional: true, required: false
  private _minCleanableDirtyRatio?: number; 
  public get minCleanableDirtyRatio() {
    return this.getNumberAttribute('min_cleanable_dirty_ratio');
  }
  public set minCleanableDirtyRatio(value: number) {
    this._minCleanableDirtyRatio = value;
  }
  public resetMinCleanableDirtyRatio() {
    this._minCleanableDirtyRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCleanableDirtyRatioInput() {
    return this._minCleanableDirtyRatio;
  }

  // min_compaction_lag_ms - computed: false, optional: true, required: false
  private _minCompactionLagMs?: string; 
  public get minCompactionLagMs() {
    return this.getStringAttribute('min_compaction_lag_ms');
  }
  public set minCompactionLagMs(value: string) {
    this._minCompactionLagMs = value;
  }
  public resetMinCompactionLagMs() {
    this._minCompactionLagMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCompactionLagMsInput() {
    return this._minCompactionLagMs;
  }

  // min_insync_replicas - computed: false, optional: true, required: false
  private _minInsyncReplicas?: string; 
  public get minInsyncReplicas() {
    return this.getStringAttribute('min_insync_replicas');
  }
  public set minInsyncReplicas(value: string) {
    this._minInsyncReplicas = value;
  }
  public resetMinInsyncReplicas() {
    this._minInsyncReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInsyncReplicasInput() {
    return this._minInsyncReplicas;
  }

  // preallocate - computed: false, optional: true, required: false
  private _preallocate?: boolean | cdktf.IResolvable; 
  public get preallocate() {
    return this.getBooleanAttribute('preallocate');
  }
  public set preallocate(value: boolean | cdktf.IResolvable) {
    this._preallocate = value;
  }
  public resetPreallocate() {
    this._preallocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preallocateInput() {
    return this._preallocate;
  }

  // remote_storage_enable - computed: false, optional: true, required: false
  private _remoteStorageEnable?: boolean | cdktf.IResolvable; 
  public get remoteStorageEnable() {
    return this.getBooleanAttribute('remote_storage_enable');
  }
  public set remoteStorageEnable(value: boolean | cdktf.IResolvable) {
    this._remoteStorageEnable = value;
  }
  public resetRemoteStorageEnable() {
    this._remoteStorageEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteStorageEnableInput() {
    return this._remoteStorageEnable;
  }

  // retention_bytes - computed: false, optional: true, required: false
  private _retentionBytes?: string; 
  public get retentionBytes() {
    return this.getStringAttribute('retention_bytes');
  }
  public set retentionBytes(value: string) {
    this._retentionBytes = value;
  }
  public resetRetentionBytes() {
    this._retentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionBytesInput() {
    return this._retentionBytes;
  }

  // retention_ms - computed: false, optional: true, required: false
  private _retentionMs?: string; 
  public get retentionMs() {
    return this.getStringAttribute('retention_ms');
  }
  public set retentionMs(value: string) {
    this._retentionMs = value;
  }
  public resetRetentionMs() {
    this._retentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionMsInput() {
    return this._retentionMs;
  }

  // segment_bytes - computed: false, optional: true, required: false
  private _segmentBytes?: string; 
  public get segmentBytes() {
    return this.getStringAttribute('segment_bytes');
  }
  public set segmentBytes(value: string) {
    this._segmentBytes = value;
  }
  public resetSegmentBytes() {
    this._segmentBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentBytesInput() {
    return this._segmentBytes;
  }

  // segment_index_bytes - computed: false, optional: true, required: false
  private _segmentIndexBytes?: string; 
  public get segmentIndexBytes() {
    return this.getStringAttribute('segment_index_bytes');
  }
  public set segmentIndexBytes(value: string) {
    this._segmentIndexBytes = value;
  }
  public resetSegmentIndexBytes() {
    this._segmentIndexBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIndexBytesInput() {
    return this._segmentIndexBytes;
  }

  // segment_jitter_ms - computed: false, optional: true, required: false
  private _segmentJitterMs?: string; 
  public get segmentJitterMs() {
    return this.getStringAttribute('segment_jitter_ms');
  }
  public set segmentJitterMs(value: string) {
    this._segmentJitterMs = value;
  }
  public resetSegmentJitterMs() {
    this._segmentJitterMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentJitterMsInput() {
    return this._segmentJitterMs;
  }

  // segment_ms - computed: false, optional: true, required: false
  private _segmentMs?: string; 
  public get segmentMs() {
    return this.getStringAttribute('segment_ms');
  }
  public set segmentMs(value: string) {
    this._segmentMs = value;
  }
  public resetSegmentMs() {
    this._segmentMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentMsInput() {
    return this._segmentMs;
  }

  // unclean_leader_election_enable - computed: false, optional: true, required: false
  private _uncleanLeaderElectionEnable?: boolean | cdktf.IResolvable; 
  public get uncleanLeaderElectionEnable() {
    return this.getBooleanAttribute('unclean_leader_election_enable');
  }
  public set uncleanLeaderElectionEnable(value: boolean | cdktf.IResolvable) {
    this._uncleanLeaderElectionEnable = value;
  }
  public resetUncleanLeaderElectionEnable() {
    this._uncleanLeaderElectionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncleanLeaderElectionEnableInput() {
    return this._uncleanLeaderElectionEnable;
  }
}
export interface KafkaTopicTag {
  /**
  * Tag key. Maximum length: `64`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#key KafkaTopic#key}
  */
  readonly key: string;
  /**
  * Tag value. Maximum length: `256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#value KafkaTopic#value}
  */
  readonly value?: string;
}

export function kafkaTopicTagToTerraform(struct?: KafkaTopicTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kafkaTopicTagToHclTerraform(struct?: KafkaTopicTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaTopicTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KafkaTopicTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaTopicTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KafkaTopicTagList extends cdktf.ComplexList {
  public internalValue? : KafkaTopicTag[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KafkaTopicTagOutputReference {
    return new KafkaTopicTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaTopicTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#create KafkaTopic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#default KafkaTopic#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#delete KafkaTopic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#read KafkaTopic#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#update KafkaTopic#update}
  */
  readonly update?: string;
}

export function kafkaTopicTimeoutsToTerraform(struct?: KafkaTopicTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kafkaTopicTimeoutsToHclTerraform(struct?: KafkaTopicTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaTopicTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaTopicTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaTopicTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic aiven_kafka_topic}
*/
export class KafkaTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_kafka_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaTopic to import
  * @param importFromId The id of the existing KafkaTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_kafka_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_topic aiven_kafka_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaTopicConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_kafka_topic',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1'
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
    this._ownerUserGroupId = config.ownerUserGroupId;
    this._partitions = config.partitions;
    this._project = config.project;
    this._replication = config.replication;
    this._serviceName = config.serviceName;
    this._terminationProtection = config.terminationProtection;
    this._topicDescription = config.topicDescription;
    this._topicName = config.topicName;
    this._config.internalValue = config.config;
    this._tag.internalValue = config.tag;
    this._timeouts.internalValue = config.timeouts;
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

  // owner_user_group_id - computed: false, optional: true, required: false
  private _ownerUserGroupId?: string; 
  public get ownerUserGroupId() {
    return this.getStringAttribute('owner_user_group_id');
  }
  public set ownerUserGroupId(value: string) {
    this._ownerUserGroupId = value;
  }
  public resetOwnerUserGroupId() {
    this._ownerUserGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserGroupIdInput() {
    return this._ownerUserGroupId;
  }

  // partitions - computed: false, optional: false, required: true
  private _partitions?: number; 
  public get partitions() {
    return this.getNumberAttribute('partitions');
  }
  public set partitions(value: number) {
    this._partitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // replication - computed: false, optional: false, required: true
  private _replication?: number; 
  public get replication() {
    return this.getNumberAttribute('replication');
  }
  public set replication(value: number) {
    this._replication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // termination_protection - computed: false, optional: true, required: false
  private _terminationProtection?: boolean | cdktf.IResolvable; 
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean | cdktf.IResolvable) {
    this._terminationProtection = value;
  }
  public resetTerminationProtection() {
    this._terminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionInput() {
    return this._terminationProtection;
  }

  // topic_description - computed: false, optional: true, required: false
  private _topicDescription?: string; 
  public get topicDescription() {
    return this.getStringAttribute('topic_description');
  }
  public set topicDescription(value: string) {
    this._topicDescription = value;
  }
  public resetTopicDescription() {
    this._topicDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicDescriptionInput() {
    return this._topicDescription;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // config - computed: false, optional: true, required: false
  private _config = new KafkaTopicConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: KafkaTopicConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new KafkaTopicTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: KafkaTopicTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaTopicTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaTopicTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      owner_user_group_id: cdktf.stringToTerraform(this._ownerUserGroupId),
      partitions: cdktf.numberToTerraform(this._partitions),
      project: cdktf.stringToTerraform(this._project),
      replication: cdktf.numberToTerraform(this._replication),
      service_name: cdktf.stringToTerraform(this._serviceName),
      termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
      topic_description: cdktf.stringToTerraform(this._topicDescription),
      topic_name: cdktf.stringToTerraform(this._topicName),
      config: kafkaTopicConfigAToTerraform(this._config.internalValue),
      tag: cdktf.listMapper(kafkaTopicTagToTerraform, true)(this._tag.internalValue),
      timeouts: kafkaTopicTimeoutsToTerraform(this._timeouts.internalValue),
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
      owner_user_group_id: {
        value: cdktf.stringToHclTerraform(this._ownerUserGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partitions: {
        value: cdktf.numberToHclTerraform(this._partitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication: {
        value: cdktf.numberToHclTerraform(this._replication),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      termination_protection: {
        value: cdktf.booleanToHclTerraform(this._terminationProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      topic_description: {
        value: cdktf.stringToHclTerraform(this._topicDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_name: {
        value: cdktf.stringToHclTerraform(this._topicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: kafkaTopicConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaTopicConfigAList",
      },
      tag: {
        value: cdktf.listMapperHcl(kafkaTopicTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaTopicTagList",
      },
      timeouts: {
        value: kafkaTopicTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaTopicTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
