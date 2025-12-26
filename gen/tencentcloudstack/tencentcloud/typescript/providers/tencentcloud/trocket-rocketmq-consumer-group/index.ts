// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_consumer_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrocketRocketmqConsumerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_consumer_group#consume_enable TrocketRocketmqConsumerGroup#consume_enable}
  */
  readonly consumeEnable: boolean | cdktf.IResolvable;
  /**
  * `true`: Sequential delivery, `false`: Concurrent delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_consumer_group#consume_message_orderly TrocketRocketmqConsumerGroup#consume_message_orderly}
  */
  readonly consumeMessageOrderly: boolean | cdktf.IResolvable;
  /**
  * Name of consumer group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_consumer_group#consumer_group TrocketRocketmqConsumerGroup#consumer_group}
  */
  readonly consumerGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_consumer_group#id TrocketRocketmqConsumerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_consumer_group#instance_id TrocketRocketmqConsumerGroup#instance_id}
  */
  readonly instanceId: string;
  /**
  * Max retry times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_consumer_group#max_retry_times TrocketRocketmqConsumerGroup#max_retry_times}
  */
  readonly maxRetryTimes: number;
  /**
  * remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_consumer_group#remark TrocketRocketmqConsumerGroup#remark}
  */
  readonly remark?: string;
  /**
  * Tag of consumer group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_consumer_group#tags TrocketRocketmqConsumerGroup#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_consumer_group tencentcloud_trocket_rocketmq_consumer_group}
*/
export class TrocketRocketmqConsumerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_trocket_rocketmq_consumer_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrocketRocketmqConsumerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrocketRocketmqConsumerGroup to import
  * @param importFromId The id of the existing TrocketRocketmqConsumerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_consumer_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrocketRocketmqConsumerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_trocket_rocketmq_consumer_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/trocket_rocketmq_consumer_group tencentcloud_trocket_rocketmq_consumer_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrocketRocketmqConsumerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TrocketRocketmqConsumerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_trocket_rocketmq_consumer_group',
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
    this._consumeEnable = config.consumeEnable;
    this._consumeMessageOrderly = config.consumeMessageOrderly;
    this._consumerGroup = config.consumerGroup;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._maxRetryTimes = config.maxRetryTimes;
    this._remark = config.remark;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consume_enable - computed: false, optional: false, required: true
  private _consumeEnable?: boolean | cdktf.IResolvable; 
  public get consumeEnable() {
    return this.getBooleanAttribute('consume_enable');
  }
  public set consumeEnable(value: boolean | cdktf.IResolvable) {
    this._consumeEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeEnableInput() {
    return this._consumeEnable;
  }

  // consume_message_orderly - computed: false, optional: false, required: true
  private _consumeMessageOrderly?: boolean | cdktf.IResolvable; 
  public get consumeMessageOrderly() {
    return this.getBooleanAttribute('consume_message_orderly');
  }
  public set consumeMessageOrderly(value: boolean | cdktf.IResolvable) {
    this._consumeMessageOrderly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeMessageOrderlyInput() {
    return this._consumeMessageOrderly;
  }

  // consumer_group - computed: false, optional: false, required: true
  private _consumerGroup?: string; 
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }
  public set consumerGroup(value: string) {
    this._consumerGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupInput() {
    return this._consumerGroup;
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

  // max_retry_times - computed: false, optional: false, required: true
  private _maxRetryTimes?: number; 
  public get maxRetryTimes() {
    return this.getNumberAttribute('max_retry_times');
  }
  public set maxRetryTimes(value: number) {
    this._maxRetryTimes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryTimesInput() {
    return this._maxRetryTimes;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consume_enable: cdktf.booleanToTerraform(this._consumeEnable),
      consume_message_orderly: cdktf.booleanToTerraform(this._consumeMessageOrderly),
      consumer_group: cdktf.stringToTerraform(this._consumerGroup),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_retry_times: cdktf.numberToTerraform(this._maxRetryTimes),
      remark: cdktf.stringToTerraform(this._remark),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consume_enable: {
        value: cdktf.booleanToHclTerraform(this._consumeEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consume_message_orderly: {
        value: cdktf.booleanToHclTerraform(this._consumeMessageOrderly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consumer_group: {
        value: cdktf.stringToHclTerraform(this._consumerGroup),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retry_times: {
        value: cdktf.numberToHclTerraform(this._maxRetryTimes),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
