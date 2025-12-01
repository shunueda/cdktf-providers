// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RocketmqConsumerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#consumer_group_id RocketmqConsumerGroup#consumer_group_id}
  */
  readonly consumerGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#delivery_order_type RocketmqConsumerGroup#delivery_order_type}
  */
  readonly deliveryOrderType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#id RocketmqConsumerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#instance_id RocketmqConsumerGroup#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#max_receive_tps RocketmqConsumerGroup#max_receive_tps}
  */
  readonly maxReceiveTps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#remark RocketmqConsumerGroup#remark}
  */
  readonly remark?: string;
  /**
  * consume_retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#consume_retry_policy RocketmqConsumerGroup#consume_retry_policy}
  */
  readonly consumeRetryPolicy: RocketmqConsumerGroupConsumeRetryPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#timeouts RocketmqConsumerGroup#timeouts}
  */
  readonly timeouts?: RocketmqConsumerGroupTimeouts;
}
export interface RocketmqConsumerGroupConsumeRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#dead_letter_target_topic RocketmqConsumerGroup#dead_letter_target_topic}
  */
  readonly deadLetterTargetTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#max_retry_times RocketmqConsumerGroup#max_retry_times}
  */
  readonly maxRetryTimes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#retry_policy RocketmqConsumerGroup#retry_policy}
  */
  readonly retryPolicy?: string;
}

export function rocketmqConsumerGroupConsumeRetryPolicyToTerraform(struct?: RocketmqConsumerGroupConsumeRetryPolicyOutputReference | RocketmqConsumerGroupConsumeRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_letter_target_topic: cdktf.stringToTerraform(struct!.deadLetterTargetTopic),
    max_retry_times: cdktf.numberToTerraform(struct!.maxRetryTimes),
    retry_policy: cdktf.stringToTerraform(struct!.retryPolicy),
  }
}


export function rocketmqConsumerGroupConsumeRetryPolicyToHclTerraform(struct?: RocketmqConsumerGroupConsumeRetryPolicyOutputReference | RocketmqConsumerGroupConsumeRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_letter_target_topic: {
      value: cdktf.stringToHclTerraform(struct!.deadLetterTargetTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retry_times: {
      value: cdktf.numberToHclTerraform(struct!.maxRetryTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_policy: {
      value: cdktf.stringToHclTerraform(struct!.retryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RocketmqConsumerGroupConsumeRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RocketmqConsumerGroupConsumeRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadLetterTargetTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterTargetTopic = this._deadLetterTargetTopic;
    }
    if (this._maxRetryTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryTimes = this._maxRetryTimes;
    }
    if (this._retryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RocketmqConsumerGroupConsumeRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deadLetterTargetTopic = undefined;
      this._maxRetryTimes = undefined;
      this._retryPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deadLetterTargetTopic = value.deadLetterTargetTopic;
      this._maxRetryTimes = value.maxRetryTimes;
      this._retryPolicy = value.retryPolicy;
    }
  }

  // dead_letter_target_topic - computed: false, optional: true, required: false
  private _deadLetterTargetTopic?: string; 
  public get deadLetterTargetTopic() {
    return this.getStringAttribute('dead_letter_target_topic');
  }
  public set deadLetterTargetTopic(value: string) {
    this._deadLetterTargetTopic = value;
  }
  public resetDeadLetterTargetTopic() {
    this._deadLetterTargetTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterTargetTopicInput() {
    return this._deadLetterTargetTopic;
  }

  // max_retry_times - computed: false, optional: true, required: false
  private _maxRetryTimes?: number; 
  public get maxRetryTimes() {
    return this.getNumberAttribute('max_retry_times');
  }
  public set maxRetryTimes(value: number) {
    this._maxRetryTimes = value;
  }
  public resetMaxRetryTimes() {
    this._maxRetryTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryTimesInput() {
    return this._maxRetryTimes;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: string; 
  public get retryPolicy() {
    return this.getStringAttribute('retry_policy');
  }
  public set retryPolicy(value: string) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy;
  }
}
export interface RocketmqConsumerGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#create RocketmqConsumerGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#delete RocketmqConsumerGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#update RocketmqConsumerGroup#update}
  */
  readonly update?: string;
}

export function rocketmqConsumerGroupTimeoutsToTerraform(struct?: RocketmqConsumerGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function rocketmqConsumerGroupTimeoutsToHclTerraform(struct?: RocketmqConsumerGroupTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class RocketmqConsumerGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RocketmqConsumerGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RocketmqConsumerGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group alicloud_rocketmq_consumer_group}
*/
export class RocketmqConsumerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rocketmq_consumer_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RocketmqConsumerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RocketmqConsumerGroup to import
  * @param importFromId The id of the existing RocketmqConsumerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RocketmqConsumerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rocketmq_consumer_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rocketmq_consumer_group alicloud_rocketmq_consumer_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RocketmqConsumerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RocketmqConsumerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rocketmq_consumer_group',
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
    this._consumerGroupId = config.consumerGroupId;
    this._deliveryOrderType = config.deliveryOrderType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._maxReceiveTps = config.maxReceiveTps;
    this._remark = config.remark;
    this._consumeRetryPolicy.internalValue = config.consumeRetryPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_group_id - computed: false, optional: false, required: true
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delivery_order_type - computed: false, optional: true, required: false
  private _deliveryOrderType?: string; 
  public get deliveryOrderType() {
    return this.getStringAttribute('delivery_order_type');
  }
  public set deliveryOrderType(value: string) {
    this._deliveryOrderType = value;
  }
  public resetDeliveryOrderType() {
    this._deliveryOrderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryOrderTypeInput() {
    return this._deliveryOrderType;
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

  // max_receive_tps - computed: false, optional: true, required: false
  private _maxReceiveTps?: number; 
  public get maxReceiveTps() {
    return this.getNumberAttribute('max_receive_tps');
  }
  public set maxReceiveTps(value: number) {
    this._maxReceiveTps = value;
  }
  public resetMaxReceiveTps() {
    this._maxReceiveTps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReceiveTpsInput() {
    return this._maxReceiveTps;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // consume_retry_policy - computed: false, optional: false, required: true
  private _consumeRetryPolicy = new RocketmqConsumerGroupConsumeRetryPolicyOutputReference(this, "consume_retry_policy");
  public get consumeRetryPolicy() {
    return this._consumeRetryPolicy;
  }
  public putConsumeRetryPolicy(value: RocketmqConsumerGroupConsumeRetryPolicy) {
    this._consumeRetryPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeRetryPolicyInput() {
    return this._consumeRetryPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RocketmqConsumerGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RocketmqConsumerGroupTimeouts) {
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
      consumer_group_id: cdktf.stringToTerraform(this._consumerGroupId),
      delivery_order_type: cdktf.stringToTerraform(this._deliveryOrderType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_receive_tps: cdktf.numberToTerraform(this._maxReceiveTps),
      remark: cdktf.stringToTerraform(this._remark),
      consume_retry_policy: rocketmqConsumerGroupConsumeRetryPolicyToTerraform(this._consumeRetryPolicy.internalValue),
      timeouts: rocketmqConsumerGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_group_id: {
        value: cdktf.stringToHclTerraform(this._consumerGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_order_type: {
        value: cdktf.stringToHclTerraform(this._deliveryOrderType),
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
      max_receive_tps: {
        value: cdktf.numberToHclTerraform(this._maxReceiveTps),
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
      consume_retry_policy: {
        value: rocketmqConsumerGroupConsumeRetryPolicyToHclTerraform(this._consumeRetryPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RocketmqConsumerGroupConsumeRetryPolicyList",
      },
      timeouts: {
        value: rocketmqConsumerGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RocketmqConsumerGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
