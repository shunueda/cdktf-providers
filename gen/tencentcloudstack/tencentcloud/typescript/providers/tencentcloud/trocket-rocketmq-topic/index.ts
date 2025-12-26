// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrocketRocketmqTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_topic#id TrocketRocketmqTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_topic#instance_id TrocketRocketmqTopic#instance_id}
  */
  readonly instanceId: string;
  /**
  * Number of queue. Must be greater than or equal to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_topic#queue_num TrocketRocketmqTopic#queue_num}
  */
  readonly queueNum: number;
  /**
  * remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_topic#remark TrocketRocketmqTopic#remark}
  */
  readonly remark?: string;
  /**
  * Tag of topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_topic#tags TrocketRocketmqTopic#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_topic#topic TrocketRocketmqTopic#topic}
  */
  readonly topic: string;
  /**
  * Topic type. `UNSPECIFIED`: not specified, `NORMAL`: normal message, `FIFO`: sequential message, `DELAY`: delayed message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_topic#topic_type TrocketRocketmqTopic#topic_type}
  */
  readonly topicType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_topic tencentcloud_trocket_rocketmq_topic}
*/
export class TrocketRocketmqTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_trocket_rocketmq_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrocketRocketmqTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrocketRocketmqTopic to import
  * @param importFromId The id of the existing TrocketRocketmqTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrocketRocketmqTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_trocket_rocketmq_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_topic tencentcloud_trocket_rocketmq_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrocketRocketmqTopicConfig
  */
  public constructor(scope: Construct, id: string, config: TrocketRocketmqTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_trocket_rocketmq_topic',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._instanceId = config.instanceId;
    this._queueNum = config.queueNum;
    this._remark = config.remark;
    this._tags = config.tags;
    this._topic = config.topic;
    this._topicType = config.topicType;
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

  // queue_num - computed: false, optional: false, required: true
  private _queueNum?: number; 
  public get queueNum() {
    return this.getNumberAttribute('queue_num');
  }
  public set queueNum(value: number) {
    this._queueNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNumInput() {
    return this._queueNum;
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

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // topic_type - computed: false, optional: false, required: true
  private _topicType?: string; 
  public get topicType() {
    return this.getStringAttribute('topic_type');
  }
  public set topicType(value: string) {
    this._topicType = value;
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
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      queue_num: cdktf.numberToTerraform(this._queueNum),
      remark: cdktf.stringToTerraform(this._remark),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      topic: cdktf.stringToTerraform(this._topic),
      topic_type: cdktf.stringToTerraform(this._topicType),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_num: {
        value: cdktf.numberToHclTerraform(this._queueNum),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      topic: {
        value: cdktf.stringToHclTerraform(this._topic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_type: {
        value: cdktf.stringToHclTerraform(this._topicType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
