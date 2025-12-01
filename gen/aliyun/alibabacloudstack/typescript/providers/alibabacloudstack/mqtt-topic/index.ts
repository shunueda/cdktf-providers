// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MqttTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_topic#id MqttTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_topic#order_type MqttTopic#order_type}
  */
  readonly orderType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_topic#remark MqttTopic#remark}
  */
  readonly remark: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_topic#store_instance_id MqttTopic#store_instance_id}
  */
  readonly storeInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_topic#topic MqttTopic#topic}
  */
  readonly topic: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_topic alibabacloudstack_mqtt_topic}
*/
export class MqttTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_mqtt_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MqttTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MqttTopic to import
  * @param importFromId The id of the existing MqttTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MqttTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_mqtt_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/mqtt_topic alibabacloudstack_mqtt_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MqttTopicConfig
  */
  public constructor(scope: Construct, id: string, config: MqttTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_mqtt_topic',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._orderType = config.orderType;
    this._remark = config.remark;
    this._storeInstanceId = config.storeInstanceId;
    this._topic = config.topic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getNumberAttribute('channel_id');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
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

  // independent_naming - computed: true, optional: false, required: false
  public get independentNaming() {
    return this.getBooleanAttribute('independent_naming');
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // order_type - computed: false, optional: false, required: true
  private _orderType?: number; 
  public get orderType() {
    return this.getNumberAttribute('order_type');
  }
  public set orderType(value: number) {
    this._orderType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderTypeInput() {
    return this._orderType;
  }

  // relation - computed: true, optional: false, required: false
  public get relation() {
    return this.getNumberAttribute('relation');
  }

  // relation_name - computed: true, optional: false, required: false
  public get relationName() {
    return this.getStringAttribute('relation_name');
  }

  // remark - computed: false, optional: false, required: true
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_name - computed: true, optional: false, required: false
  public get statusName() {
    return this.getStringAttribute('status_name');
  }

  // store_instance_id - computed: false, optional: false, required: true
  private _storeInstanceId?: string; 
  public get storeInstanceId() {
    return this.getStringAttribute('store_instance_id');
  }
  public set storeInstanceId(value: string) {
    this._storeInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInstanceIdInput() {
    return this._storeInstanceId;
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

  // unit_flag - computed: true, optional: false, required: false
  public get unitFlag() {
    return this.getBooleanAttribute('unit_flag');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      order_type: cdktf.numberToTerraform(this._orderType),
      remark: cdktf.stringToTerraform(this._remark),
      store_instance_id: cdktf.stringToTerraform(this._storeInstanceId),
      topic: cdktf.stringToTerraform(this._topic),
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
      order_type: {
        value: cdktf.numberToHclTerraform(this._orderType),
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
      store_instance_id: {
        value: cdktf.stringToHclTerraform(this._storeInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic: {
        value: cdktf.stringToHclTerraform(this._topic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
