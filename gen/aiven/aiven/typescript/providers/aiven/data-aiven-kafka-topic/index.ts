// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/kafka_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenKafkaTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/kafka_topic#id DataAivenKafkaTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/kafka_topic#project DataAivenKafkaTopic#project}
  */
  readonly project: string;
  /**
  * The name of the service that this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/kafka_topic#service_name DataAivenKafkaTopic#service_name}
  */
  readonly serviceName: string;
  /**
  * The name of the topic. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/kafka_topic#topic_name DataAivenKafkaTopic#topic_name}
  */
  readonly topicName: string;
}
export interface DataAivenKafkaTopicConfigA {
}

export function dataAivenKafkaTopicConfigAToTerraform(struct?: DataAivenKafkaTopicConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaTopicConfigAToHclTerraform(struct?: DataAivenKafkaTopicConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaTopicConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAivenKafkaTopicConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaTopicConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cleanup_policy - computed: true, optional: false, required: false
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // delete_retention_ms - computed: true, optional: false, required: false
  public get deleteRetentionMs() {
    return this.getStringAttribute('delete_retention_ms');
  }

  // diskless_enable - computed: true, optional: false, required: false
  public get disklessEnable() {
    return this.getBooleanAttribute('diskless_enable');
  }

  // file_delete_delay_ms - computed: true, optional: false, required: false
  public get fileDeleteDelayMs() {
    return this.getStringAttribute('file_delete_delay_ms');
  }

  // flush_messages - computed: true, optional: false, required: false
  public get flushMessages() {
    return this.getStringAttribute('flush_messages');
  }

  // flush_ms - computed: true, optional: false, required: false
  public get flushMs() {
    return this.getStringAttribute('flush_ms');
  }

  // index_interval_bytes - computed: true, optional: false, required: false
  public get indexIntervalBytes() {
    return this.getStringAttribute('index_interval_bytes');
  }

  // local_retention_bytes - computed: true, optional: false, required: false
  public get localRetentionBytes() {
    return this.getStringAttribute('local_retention_bytes');
  }

  // local_retention_ms - computed: true, optional: false, required: false
  public get localRetentionMs() {
    return this.getStringAttribute('local_retention_ms');
  }

  // max_compaction_lag_ms - computed: true, optional: false, required: false
  public get maxCompactionLagMs() {
    return this.getStringAttribute('max_compaction_lag_ms');
  }

  // max_message_bytes - computed: true, optional: false, required: false
  public get maxMessageBytes() {
    return this.getStringAttribute('max_message_bytes');
  }

  // message_downconversion_enable - computed: true, optional: false, required: false
  public get messageDownconversionEnable() {
    return this.getBooleanAttribute('message_downconversion_enable');
  }

  // message_format_version - computed: true, optional: false, required: false
  public get messageFormatVersion() {
    return this.getStringAttribute('message_format_version');
  }

  // message_timestamp_difference_max_ms - computed: true, optional: false, required: false
  public get messageTimestampDifferenceMaxMs() {
    return this.getStringAttribute('message_timestamp_difference_max_ms');
  }

  // message_timestamp_type - computed: true, optional: false, required: false
  public get messageTimestampType() {
    return this.getStringAttribute('message_timestamp_type');
  }

  // min_cleanable_dirty_ratio - computed: true, optional: false, required: false
  public get minCleanableDirtyRatio() {
    return this.getNumberAttribute('min_cleanable_dirty_ratio');
  }

  // min_compaction_lag_ms - computed: true, optional: false, required: false
  public get minCompactionLagMs() {
    return this.getStringAttribute('min_compaction_lag_ms');
  }

  // min_insync_replicas - computed: true, optional: false, required: false
  public get minInsyncReplicas() {
    return this.getStringAttribute('min_insync_replicas');
  }

  // preallocate - computed: true, optional: false, required: false
  public get preallocate() {
    return this.getBooleanAttribute('preallocate');
  }

  // remote_storage_enable - computed: true, optional: false, required: false
  public get remoteStorageEnable() {
    return this.getBooleanAttribute('remote_storage_enable');
  }

  // retention_bytes - computed: true, optional: false, required: false
  public get retentionBytes() {
    return this.getStringAttribute('retention_bytes');
  }

  // retention_ms - computed: true, optional: false, required: false
  public get retentionMs() {
    return this.getStringAttribute('retention_ms');
  }

  // segment_bytes - computed: true, optional: false, required: false
  public get segmentBytes() {
    return this.getStringAttribute('segment_bytes');
  }

  // segment_index_bytes - computed: true, optional: false, required: false
  public get segmentIndexBytes() {
    return this.getStringAttribute('segment_index_bytes');
  }

  // segment_jitter_ms - computed: true, optional: false, required: false
  public get segmentJitterMs() {
    return this.getStringAttribute('segment_jitter_ms');
  }

  // segment_ms - computed: true, optional: false, required: false
  public get segmentMs() {
    return this.getStringAttribute('segment_ms');
  }

  // unclean_leader_election_enable - computed: true, optional: false, required: false
  public get uncleanLeaderElectionEnable() {
    return this.getBooleanAttribute('unclean_leader_election_enable');
  }
}

export class DataAivenKafkaTopicConfigAList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaTopicConfigAOutputReference {
    return new DataAivenKafkaTopicConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaTopicTag {
}

export function dataAivenKafkaTopicTagToTerraform(struct?: DataAivenKafkaTopicTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaTopicTagToHclTerraform(struct?: DataAivenKafkaTopicTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaTopicTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAivenKafkaTopicTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaTopicTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAivenKafkaTopicTagList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaTopicTagOutputReference {
    return new DataAivenKafkaTopicTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/kafka_topic aiven_kafka_topic}
*/
export class DataAivenKafkaTopic extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_kafka_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenKafkaTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenKafkaTopic to import
  * @param importFromId The id of the existing DataAivenKafkaTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/kafka_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenKafkaTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_kafka_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/kafka_topic aiven_kafka_topic} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenKafkaTopicConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenKafkaTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_kafka_topic',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1',
        providerVersionConstraint: '4.46.1'
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
    this._project = config.project;
    this._serviceName = config.serviceName;
    this._topicName = config.topicName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  private _config = new DataAivenKafkaTopicConfigAList(this, "config", false);
  public get config() {
    return this._config;
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

  // owner_user_group_id - computed: true, optional: false, required: false
  public get ownerUserGroupId() {
    return this.getStringAttribute('owner_user_group_id');
  }

  // partitions - computed: true, optional: false, required: false
  public get partitions() {
    return this.getNumberAttribute('partitions');
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

  // replication - computed: true, optional: false, required: false
  public get replication() {
    return this.getNumberAttribute('replication');
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

  // tag - computed: true, optional: false, required: false
  private _tag = new DataAivenKafkaTopicTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }

  // termination_protection - computed: true, optional: false, required: false
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }

  // topic_description - computed: true, optional: false, required: false
  public get topicDescription() {
    return this.getStringAttribute('topic_description');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      service_name: cdktf.stringToTerraform(this._serviceName),
      topic_name: cdktf.stringToTerraform(this._topicName),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
