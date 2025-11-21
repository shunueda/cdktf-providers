// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CkafkaTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clear log policy, log clear mode, default is `delete`. `delete`: logs are deleted according to the storage time. `compact`: logs are compressed according to the key. `compact, delete`: logs are compressed according to the key and will be deleted according to the storage time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#clean_up_policy CkafkaTopic#clean_up_policy}
  */
  readonly cleanUpPolicy?: string;
  /**
  * Whether to open the ip whitelist, `true`: open, `false`: close.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#enable_white_list CkafkaTopic#enable_white_list}
  */
  readonly enableWhiteList?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#id CkafkaTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ckafka instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#instance_id CkafkaTopic#instance_id}
  */
  readonly instanceId: string;
  /**
  * Ip whitelist, quota limit, required when enableWhileList=true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#ip_white_list CkafkaTopic#ip_white_list}
  */
  readonly ipWhiteList?: string[];
  /**
  * Max message bytes. min: 1024 Byte(1KB), max: 8388608 Byte(8MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#max_message_bytes CkafkaTopic#max_message_bytes}
  */
  readonly maxMessageBytes?: number;
  /**
  * The subject note. It must start with a letter, and the remaining part can contain letters, numbers and dashes (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#note CkafkaTopic#note}
  */
  readonly note?: string;
  /**
  * The number of partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#partition_num CkafkaTopic#partition_num}
  */
  readonly partitionNum: number;
  /**
  * The number of replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#replica_num CkafkaTopic#replica_num}
  */
  readonly replicaNum: number;
  /**
  * Message can be selected. Retention time, unit is ms, the current minimum value is 60000ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#retention CkafkaTopic#retention}
  */
  readonly retention?: number;
  /**
  * Segment scrolling time, in ms, the current minimum is 3600000ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#segment CkafkaTopic#segment}
  */
  readonly segment?: number;
  /**
  * Min number of sync replicas, Default is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#sync_replica_min_num CkafkaTopic#sync_replica_min_num}
  */
  readonly syncReplicaMinNum?: number;
  /**
  * Name of the CKafka topic. It must start with a letter, the rest can contain letters, numbers and dashes(-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#topic_name CkafkaTopic#topic_name}
  */
  readonly topicName: string;
  /**
  * Whether to allow unsynchronized replicas to be selected as leader, default is `false`, `true: `allowed, `false`: not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#unclean_leader_election_enable CkafkaTopic#unclean_leader_election_enable}
  */
  readonly uncleanLeaderElectionEnable?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic tencentcloud_ckafka_topic}
*/
export class CkafkaTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CkafkaTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CkafkaTopic to import
  * @param importFromId The id of the existing CkafkaTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CkafkaTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/ckafka_topic tencentcloud_ckafka_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CkafkaTopicConfig
  */
  public constructor(scope: Construct, id: string, config: CkafkaTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_topic',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cleanUpPolicy = config.cleanUpPolicy;
    this._enableWhiteList = config.enableWhiteList;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ipWhiteList = config.ipWhiteList;
    this._maxMessageBytes = config.maxMessageBytes;
    this._note = config.note;
    this._partitionNum = config.partitionNum;
    this._replicaNum = config.replicaNum;
    this._retention = config.retention;
    this._segment = config.segment;
    this._syncReplicaMinNum = config.syncReplicaMinNum;
    this._topicName = config.topicName;
    this._uncleanLeaderElectionEnable = config.uncleanLeaderElectionEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clean_up_policy - computed: false, optional: true, required: false
  private _cleanUpPolicy?: string; 
  public get cleanUpPolicy() {
    return this.getStringAttribute('clean_up_policy');
  }
  public set cleanUpPolicy(value: string) {
    this._cleanUpPolicy = value;
  }
  public resetCleanUpPolicy() {
    this._cleanUpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanUpPolicyInput() {
    return this._cleanUpPolicy;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // enable_white_list - computed: false, optional: true, required: false
  private _enableWhiteList?: boolean | cdktf.IResolvable; 
  public get enableWhiteList() {
    return this.getBooleanAttribute('enable_white_list');
  }
  public set enableWhiteList(value: boolean | cdktf.IResolvable) {
    this._enableWhiteList = value;
  }
  public resetEnableWhiteList() {
    this._enableWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWhiteListInput() {
    return this._enableWhiteList;
  }

  // forward_cos_bucket - computed: true, optional: false, required: false
  public get forwardCosBucket() {
    return this.getStringAttribute('forward_cos_bucket');
  }

  // forward_interval - computed: true, optional: false, required: false
  public get forwardInterval() {
    return this.getNumberAttribute('forward_interval');
  }

  // forward_status - computed: true, optional: false, required: false
  public get forwardStatus() {
    return this.getNumberAttribute('forward_status');
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip_white_list - computed: false, optional: true, required: false
  private _ipWhiteList?: string[]; 
  public get ipWhiteList() {
    return this.getListAttribute('ip_white_list');
  }
  public set ipWhiteList(value: string[]) {
    this._ipWhiteList = value;
  }
  public resetIpWhiteList() {
    this._ipWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhiteListInput() {
    return this._ipWhiteList;
  }

  // max_message_bytes - computed: true, optional: true, required: false
  private _maxMessageBytes?: number; 
  public get maxMessageBytes() {
    return this.getNumberAttribute('max_message_bytes');
  }
  public set maxMessageBytes(value: number) {
    this._maxMessageBytes = value;
  }
  public resetMaxMessageBytes() {
    this._maxMessageBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageBytesInput() {
    return this._maxMessageBytes;
  }

  // message_storage_location - computed: true, optional: false, required: false
  public get messageStorageLocation() {
    return this.getStringAttribute('message_storage_location');
  }

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // partition_num - computed: false, optional: false, required: true
  private _partitionNum?: number; 
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }
  public set partitionNum(value: number) {
    this._partitionNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNumInput() {
    return this._partitionNum;
  }

  // replica_num - computed: false, optional: false, required: true
  private _replicaNum?: number; 
  public get replicaNum() {
    return this.getNumberAttribute('replica_num');
  }
  public set replicaNum(value: number) {
    this._replicaNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaNumInput() {
    return this._replicaNum;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // segment - computed: false, optional: true, required: false
  private _segment?: number; 
  public get segment() {
    return this.getNumberAttribute('segment');
  }
  public set segment(value: number) {
    this._segment = value;
  }
  public resetSegment() {
    this._segment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // segment_bytes - computed: true, optional: false, required: false
  public get segmentBytes() {
    return this.getNumberAttribute('segment_bytes');
  }

  // sync_replica_min_num - computed: false, optional: true, required: false
  private _syncReplicaMinNum?: number; 
  public get syncReplicaMinNum() {
    return this.getNumberAttribute('sync_replica_min_num');
  }
  public set syncReplicaMinNum(value: number) {
    this._syncReplicaMinNum = value;
  }
  public resetSyncReplicaMinNum() {
    this._syncReplicaMinNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncReplicaMinNumInput() {
    return this._syncReplicaMinNum;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clean_up_policy: cdktf.stringToTerraform(this._cleanUpPolicy),
      enable_white_list: cdktf.booleanToTerraform(this._enableWhiteList),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipWhiteList),
      max_message_bytes: cdktf.numberToTerraform(this._maxMessageBytes),
      note: cdktf.stringToTerraform(this._note),
      partition_num: cdktf.numberToTerraform(this._partitionNum),
      replica_num: cdktf.numberToTerraform(this._replicaNum),
      retention: cdktf.numberToTerraform(this._retention),
      segment: cdktf.numberToTerraform(this._segment),
      sync_replica_min_num: cdktf.numberToTerraform(this._syncReplicaMinNum),
      topic_name: cdktf.stringToTerraform(this._topicName),
      unclean_leader_election_enable: cdktf.booleanToTerraform(this._uncleanLeaderElectionEnable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clean_up_policy: {
        value: cdktf.stringToHclTerraform(this._cleanUpPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_white_list: {
        value: cdktf.booleanToHclTerraform(this._enableWhiteList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_white_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipWhiteList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_message_bytes: {
        value: cdktf.numberToHclTerraform(this._maxMessageBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_num: {
        value: cdktf.numberToHclTerraform(this._partitionNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replica_num: {
        value: cdktf.numberToHclTerraform(this._replicaNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention: {
        value: cdktf.numberToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      segment: {
        value: cdktf.numberToHclTerraform(this._segment),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_replica_min_num: {
        value: cdktf.numberToHclTerraform(this._syncReplicaMinNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topic_name: {
        value: cdktf.stringToHclTerraform(this._topicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unclean_leader_election_enable: {
        value: cdktf.booleanToHclTerraform(this._uncleanLeaderElectionEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
