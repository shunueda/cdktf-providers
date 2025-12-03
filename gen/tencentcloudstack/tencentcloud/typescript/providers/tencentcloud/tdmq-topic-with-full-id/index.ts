// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tdmq_topic_with_full_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TdmqTopicWithFullIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Dedicated Cluster Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tdmq_topic_with_full_id#cluster_id TdmqTopicWithFullId#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The name of tdmq namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tdmq_topic_with_full_id#environ_id TdmqTopicWithFullId#environ_id}
  */
  readonly environId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tdmq_topic_with_full_id#id TdmqTopicWithFullId#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The partitions of topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tdmq_topic_with_full_id#partitions TdmqTopicWithFullId#partitions}
  */
  readonly partitions: number;
  /**
  * Pulsar Topic Type 0: Non-persistent non-partitioned 1: Non-persistent partitioned 2: Persistent non-partitioned 3: Persistent partitioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tdmq_topic_with_full_id#pulsar_topic_type TdmqTopicWithFullId#pulsar_topic_type}
  */
  readonly pulsarTopicType?: number;
  /**
  * Description of the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tdmq_topic_with_full_id#remark TdmqTopicWithFullId#remark}
  */
  readonly remark?: string;
  /**
  * The name of topic to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tdmq_topic_with_full_id#topic_name TdmqTopicWithFullId#topic_name}
  */
  readonly topicName: string;
  /**
  * The type of topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tdmq_topic_with_full_id#topic_type TdmqTopicWithFullId#topic_type}
  */
  readonly topicType?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tdmq_topic_with_full_id tencentcloud_tdmq_topic_with_full_id}
*/
export class TdmqTopicWithFullId extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_topic_with_full_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TdmqTopicWithFullId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TdmqTopicWithFullId to import
  * @param importFromId The id of the existing TdmqTopicWithFullId that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tdmq_topic_with_full_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TdmqTopicWithFullId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_topic_with_full_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/tdmq_topic_with_full_id tencentcloud_tdmq_topic_with_full_id} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TdmqTopicWithFullIdConfig
  */
  public constructor(scope: Construct, id: string, config: TdmqTopicWithFullIdConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_topic_with_full_id',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._environId = config.environId;
    this._id = config.id;
    this._partitions = config.partitions;
    this._pulsarTopicType = config.pulsarTopicType;
    this._remark = config.remark;
    this._topicName = config.topicName;
    this._topicType = config.topicType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // environ_id - computed: false, optional: false, required: true
  private _environId?: string; 
  public get environId() {
    return this.getStringAttribute('environ_id');
  }
  public set environId(value: string) {
    this._environId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environIdInput() {
    return this._environId;
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

  // pulsar_topic_type - computed: true, optional: true, required: false
  private _pulsarTopicType?: number; 
  public get pulsarTopicType() {
    return this.getNumberAttribute('pulsar_topic_type');
  }
  public set pulsarTopicType(value: number) {
    this._pulsarTopicType = value;
  }
  public resetPulsarTopicType() {
    this._pulsarTopicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pulsarTopicTypeInput() {
    return this._pulsarTopicType;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
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

  // topic_type - computed: true, optional: true, required: false
  private _topicType?: number; 
  public get topicType() {
    return this.getNumberAttribute('topic_type');
  }
  public set topicType(value: number) {
    this._topicType = value;
  }
  public resetTopicType() {
    this._topicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicTypeInput() {
    return this._topicType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      environ_id: cdktf.stringToTerraform(this._environId),
      id: cdktf.stringToTerraform(this._id),
      partitions: cdktf.numberToTerraform(this._partitions),
      pulsar_topic_type: cdktf.numberToTerraform(this._pulsarTopicType),
      remark: cdktf.stringToTerraform(this._remark),
      topic_name: cdktf.stringToTerraform(this._topicName),
      topic_type: cdktf.numberToTerraform(this._topicType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environ_id: {
        value: cdktf.stringToHclTerraform(this._environId),
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
      partitions: {
        value: cdktf.numberToHclTerraform(this._partitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pulsar_topic_type: {
        value: cdktf.numberToHclTerraform(this._pulsarTopicType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
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
      topic_type: {
        value: cdktf.numberToHclTerraform(this._topicType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
