// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_send_rocketmq_message
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TdmqSendRocketmqMessageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_send_rocketmq_message#cluster_id TdmqSendRocketmqMessage#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_send_rocketmq_message#id TdmqSendRocketmqMessage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_send_rocketmq_message#msg_body TdmqSendRocketmqMessage#msg_body}
  */
  readonly msgBody: string;
  /**
  * Message key information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_send_rocketmq_message#msg_key TdmqSendRocketmqMessage#msg_key}
  */
  readonly msgKey?: string;
  /**
  * Message tag information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_send_rocketmq_message#msg_tag TdmqSendRocketmqMessage#msg_tag}
  */
  readonly msgTag?: string;
  /**
  * Namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_send_rocketmq_message#namespace_id TdmqSendRocketmqMessage#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * topic name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_send_rocketmq_message#topic_name TdmqSendRocketmqMessage#topic_name}
  */
  readonly topicName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_send_rocketmq_message tencentcloud_tdmq_send_rocketmq_message}
*/
export class TdmqSendRocketmqMessage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_send_rocketmq_message";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TdmqSendRocketmqMessage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TdmqSendRocketmqMessage to import
  * @param importFromId The id of the existing TdmqSendRocketmqMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_send_rocketmq_message#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TdmqSendRocketmqMessage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_send_rocketmq_message", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_send_rocketmq_message tencentcloud_tdmq_send_rocketmq_message} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TdmqSendRocketmqMessageConfig
  */
  public constructor(scope: Construct, id: string, config: TdmqSendRocketmqMessageConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_send_rocketmq_message',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._id = config.id;
    this._msgBody = config.msgBody;
    this._msgKey = config.msgKey;
    this._msgTag = config.msgTag;
    this._namespaceId = config.namespaceId;
    this._topicName = config.topicName;
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

  // msg_body - computed: false, optional: false, required: true
  private _msgBody?: string; 
  public get msgBody() {
    return this.getStringAttribute('msg_body');
  }
  public set msgBody(value: string) {
    this._msgBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgBodyInput() {
    return this._msgBody;
  }

  // msg_key - computed: false, optional: true, required: false
  private _msgKey?: string; 
  public get msgKey() {
    return this.getStringAttribute('msg_key');
  }
  public set msgKey(value: string) {
    this._msgKey = value;
  }
  public resetMsgKey() {
    this._msgKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgKeyInput() {
    return this._msgKey;
  }

  // msg_tag - computed: false, optional: true, required: false
  private _msgTag?: string; 
  public get msgTag() {
    return this.getStringAttribute('msg_tag');
  }
  public set msgTag(value: string) {
    this._msgTag = value;
  }
  public resetMsgTag() {
    this._msgTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTagInput() {
    return this._msgTag;
  }

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      msg_body: cdktf.stringToTerraform(this._msgBody),
      msg_key: cdktf.stringToTerraform(this._msgKey),
      msg_tag: cdktf.stringToTerraform(this._msgTag),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      topic_name: cdktf.stringToTerraform(this._topicName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_body: {
        value: cdktf.stringToHclTerraform(this._msgBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_key: {
        value: cdktf.stringToHclTerraform(this._msgKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_tag: {
        value: cdktf.stringToHclTerraform(this._msgTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
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
