// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmqpQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#auto_delete_state AmqpQueue#auto_delete_state}
  */
  readonly autoDeleteState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#auto_expire_state AmqpQueue#auto_expire_state}
  */
  readonly autoExpireState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#dead_letter_exchange AmqpQueue#dead_letter_exchange}
  */
  readonly deadLetterExchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#dead_letter_routing_key AmqpQueue#dead_letter_routing_key}
  */
  readonly deadLetterRoutingKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#exclusive_state AmqpQueue#exclusive_state}
  */
  readonly exclusiveState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#id AmqpQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#instance_id AmqpQueue#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#max_length AmqpQueue#max_length}
  */
  readonly maxLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#maximum_priority AmqpQueue#maximum_priority}
  */
  readonly maximumPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#message_ttl AmqpQueue#message_ttl}
  */
  readonly messageTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#queue_name AmqpQueue#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#virtual_host_name AmqpQueue#virtual_host_name}
  */
  readonly virtualHostName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue alicloud_amqp_queue}
*/
export class AmqpQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_amqp_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AmqpQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AmqpQueue to import
  * @param importFromId The id of the existing AmqpQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AmqpQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_amqp_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/amqp_queue alicloud_amqp_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmqpQueueConfig
  */
  public constructor(scope: Construct, id: string, config: AmqpQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_amqp_queue',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoDeleteState = config.autoDeleteState;
    this._autoExpireState = config.autoExpireState;
    this._deadLetterExchange = config.deadLetterExchange;
    this._deadLetterRoutingKey = config.deadLetterRoutingKey;
    this._exclusiveState = config.exclusiveState;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._maxLength = config.maxLength;
    this._maximumPriority = config.maximumPriority;
    this._messageTtl = config.messageTtl;
    this._queueName = config.queueName;
    this._virtualHostName = config.virtualHostName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_delete_state - computed: false, optional: true, required: false
  private _autoDeleteState?: boolean | cdktf.IResolvable; 
  public get autoDeleteState() {
    return this.getBooleanAttribute('auto_delete_state');
  }
  public set autoDeleteState(value: boolean | cdktf.IResolvable) {
    this._autoDeleteState = value;
  }
  public resetAutoDeleteState() {
    this._autoDeleteState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteStateInput() {
    return this._autoDeleteState;
  }

  // auto_expire_state - computed: false, optional: true, required: false
  private _autoExpireState?: string; 
  public get autoExpireState() {
    return this.getStringAttribute('auto_expire_state');
  }
  public set autoExpireState(value: string) {
    this._autoExpireState = value;
  }
  public resetAutoExpireState() {
    this._autoExpireState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExpireStateInput() {
    return this._autoExpireState;
  }

  // dead_letter_exchange - computed: false, optional: true, required: false
  private _deadLetterExchange?: string; 
  public get deadLetterExchange() {
    return this.getStringAttribute('dead_letter_exchange');
  }
  public set deadLetterExchange(value: string) {
    this._deadLetterExchange = value;
  }
  public resetDeadLetterExchange() {
    this._deadLetterExchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterExchangeInput() {
    return this._deadLetterExchange;
  }

  // dead_letter_routing_key - computed: false, optional: true, required: false
  private _deadLetterRoutingKey?: string; 
  public get deadLetterRoutingKey() {
    return this.getStringAttribute('dead_letter_routing_key');
  }
  public set deadLetterRoutingKey(value: string) {
    this._deadLetterRoutingKey = value;
  }
  public resetDeadLetterRoutingKey() {
    this._deadLetterRoutingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterRoutingKeyInput() {
    return this._deadLetterRoutingKey;
  }

  // exclusive_state - computed: false, optional: true, required: false
  private _exclusiveState?: boolean | cdktf.IResolvable; 
  public get exclusiveState() {
    return this.getBooleanAttribute('exclusive_state');
  }
  public set exclusiveState(value: boolean | cdktf.IResolvable) {
    this._exclusiveState = value;
  }
  public resetExclusiveState() {
    this._exclusiveState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveStateInput() {
    return this._exclusiveState;
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

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: string; 
  public get maxLength() {
    return this.getStringAttribute('max_length');
  }
  public set maxLength(value: string) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // maximum_priority - computed: false, optional: true, required: false
  private _maximumPriority?: number; 
  public get maximumPriority() {
    return this.getNumberAttribute('maximum_priority');
  }
  public set maximumPriority(value: number) {
    this._maximumPriority = value;
  }
  public resetMaximumPriority() {
    this._maximumPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPriorityInput() {
    return this._maximumPriority;
  }

  // message_ttl - computed: false, optional: true, required: false
  private _messageTtl?: string; 
  public get messageTtl() {
    return this.getStringAttribute('message_ttl');
  }
  public set messageTtl(value: string) {
    this._messageTtl = value;
  }
  public resetMessageTtl() {
    this._messageTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTtlInput() {
    return this._messageTtl;
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // virtual_host_name - computed: false, optional: false, required: true
  private _virtualHostName?: string; 
  public get virtualHostName() {
    return this.getStringAttribute('virtual_host_name');
  }
  public set virtualHostName(value: string) {
    this._virtualHostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostNameInput() {
    return this._virtualHostName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_delete_state: cdktf.booleanToTerraform(this._autoDeleteState),
      auto_expire_state: cdktf.stringToTerraform(this._autoExpireState),
      dead_letter_exchange: cdktf.stringToTerraform(this._deadLetterExchange),
      dead_letter_routing_key: cdktf.stringToTerraform(this._deadLetterRoutingKey),
      exclusive_state: cdktf.booleanToTerraform(this._exclusiveState),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_length: cdktf.stringToTerraform(this._maxLength),
      maximum_priority: cdktf.numberToTerraform(this._maximumPriority),
      message_ttl: cdktf.stringToTerraform(this._messageTtl),
      queue_name: cdktf.stringToTerraform(this._queueName),
      virtual_host_name: cdktf.stringToTerraform(this._virtualHostName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_delete_state: {
        value: cdktf.booleanToHclTerraform(this._autoDeleteState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_expire_state: {
        value: cdktf.stringToHclTerraform(this._autoExpireState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dead_letter_exchange: {
        value: cdktf.stringToHclTerraform(this._deadLetterExchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dead_letter_routing_key: {
        value: cdktf.stringToHclTerraform(this._deadLetterRoutingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusive_state: {
        value: cdktf.booleanToHclTerraform(this._exclusiveState),
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
      max_length: {
        value: cdktf.stringToHclTerraform(this._maxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_priority: {
        value: cdktf.numberToHclTerraform(this._maximumPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_ttl: {
        value: cdktf.stringToHclTerraform(this._messageTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_name: {
        value: cdktf.stringToHclTerraform(this._queueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_host_name: {
        value: cdktf.stringToHclTerraform(this._virtualHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
