// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MessageServiceQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#delay_seconds MessageServiceQueue#delay_seconds}
  */
  readonly delaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#id MessageServiceQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#logging_enabled MessageServiceQueue#logging_enabled}
  */
  readonly loggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#maximum_message_size MessageServiceQueue#maximum_message_size}
  */
  readonly maximumMessageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#message_retention_period MessageServiceQueue#message_retention_period}
  */
  readonly messageRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#polling_wait_seconds MessageServiceQueue#polling_wait_seconds}
  */
  readonly pollingWaitSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#queue_name MessageServiceQueue#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#tags MessageServiceQueue#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#visibility_timeout MessageServiceQueue#visibility_timeout}
  */
  readonly visibilityTimeout?: number;
  /**
  * dlq_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#dlq_policy MessageServiceQueue#dlq_policy}
  */
  readonly dlqPolicy?: MessageServiceQueueDlqPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#timeouts MessageServiceQueue#timeouts}
  */
  readonly timeouts?: MessageServiceQueueTimeouts;
}
export interface MessageServiceQueueDlqPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#dead_letter_target_queue MessageServiceQueue#dead_letter_target_queue}
  */
  readonly deadLetterTargetQueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#enabled MessageServiceQueue#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#max_receive_count MessageServiceQueue#max_receive_count}
  */
  readonly maxReceiveCount?: number;
}

export function messageServiceQueueDlqPolicyToTerraform(struct?: MessageServiceQueueDlqPolicyOutputReference | MessageServiceQueueDlqPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_letter_target_queue: cdktf.stringToTerraform(struct!.deadLetterTargetQueue),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_receive_count: cdktf.numberToTerraform(struct!.maxReceiveCount),
  }
}


export function messageServiceQueueDlqPolicyToHclTerraform(struct?: MessageServiceQueueDlqPolicyOutputReference | MessageServiceQueueDlqPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_letter_target_queue: {
      value: cdktf.stringToHclTerraform(struct!.deadLetterTargetQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_receive_count: {
      value: cdktf.numberToHclTerraform(struct!.maxReceiveCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MessageServiceQueueDlqPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MessageServiceQueueDlqPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadLetterTargetQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterTargetQueue = this._deadLetterTargetQueue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxReceiveCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReceiveCount = this._maxReceiveCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MessageServiceQueueDlqPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deadLetterTargetQueue = undefined;
      this._enabled = undefined;
      this._maxReceiveCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deadLetterTargetQueue = value.deadLetterTargetQueue;
      this._enabled = value.enabled;
      this._maxReceiveCount = value.maxReceiveCount;
    }
  }

  // dead_letter_target_queue - computed: false, optional: true, required: false
  private _deadLetterTargetQueue?: string; 
  public get deadLetterTargetQueue() {
    return this.getStringAttribute('dead_letter_target_queue');
  }
  public set deadLetterTargetQueue(value: string) {
    this._deadLetterTargetQueue = value;
  }
  public resetDeadLetterTargetQueue() {
    this._deadLetterTargetQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterTargetQueueInput() {
    return this._deadLetterTargetQueue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_receive_count - computed: false, optional: true, required: false
  private _maxReceiveCount?: number; 
  public get maxReceiveCount() {
    return this.getNumberAttribute('max_receive_count');
  }
  public set maxReceiveCount(value: number) {
    this._maxReceiveCount = value;
  }
  public resetMaxReceiveCount() {
    this._maxReceiveCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReceiveCountInput() {
    return this._maxReceiveCount;
  }
}
export interface MessageServiceQueueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#create MessageServiceQueue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#delete MessageServiceQueue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#update MessageServiceQueue#update}
  */
  readonly update?: string;
}

export function messageServiceQueueTimeoutsToTerraform(struct?: MessageServiceQueueTimeouts | cdktf.IResolvable): any {
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


export function messageServiceQueueTimeoutsToHclTerraform(struct?: MessageServiceQueueTimeouts | cdktf.IResolvable): any {
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

export class MessageServiceQueueTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MessageServiceQueueTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MessageServiceQueueTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue alicloud_message_service_queue}
*/
export class MessageServiceQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_message_service_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MessageServiceQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MessageServiceQueue to import
  * @param importFromId The id of the existing MessageServiceQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MessageServiceQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_message_service_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_queue alicloud_message_service_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MessageServiceQueueConfig
  */
  public constructor(scope: Construct, id: string, config: MessageServiceQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_message_service_queue',
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
    this._delaySeconds = config.delaySeconds;
    this._id = config.id;
    this._loggingEnabled = config.loggingEnabled;
    this._maximumMessageSize = config.maximumMessageSize;
    this._messageRetentionPeriod = config.messageRetentionPeriod;
    this._pollingWaitSeconds = config.pollingWaitSeconds;
    this._queueName = config.queueName;
    this._tags = config.tags;
    this._visibilityTimeout = config.visibilityTimeout;
    this._dlqPolicy.internalValue = config.dlqPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // delay_seconds - computed: true, optional: true, required: false
  private _delaySeconds?: number; 
  public get delaySeconds() {
    return this.getNumberAttribute('delay_seconds');
  }
  public set delaySeconds(value: number) {
    this._delaySeconds = value;
  }
  public resetDelaySeconds() {
    this._delaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaySecondsInput() {
    return this._delaySeconds;
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

  // logging_enabled - computed: false, optional: true, required: false
  private _loggingEnabled?: boolean | cdktf.IResolvable; 
  public get loggingEnabled() {
    return this.getBooleanAttribute('logging_enabled');
  }
  public set loggingEnabled(value: boolean | cdktf.IResolvable) {
    this._loggingEnabled = value;
  }
  public resetLoggingEnabled() {
    this._loggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingEnabledInput() {
    return this._loggingEnabled;
  }

  // maximum_message_size - computed: true, optional: true, required: false
  private _maximumMessageSize?: number; 
  public get maximumMessageSize() {
    return this.getNumberAttribute('maximum_message_size');
  }
  public set maximumMessageSize(value: number) {
    this._maximumMessageSize = value;
  }
  public resetMaximumMessageSize() {
    this._maximumMessageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMessageSizeInput() {
    return this._maximumMessageSize;
  }

  // message_retention_period - computed: true, optional: true, required: false
  private _messageRetentionPeriod?: number; 
  public get messageRetentionPeriod() {
    return this.getNumberAttribute('message_retention_period');
  }
  public set messageRetentionPeriod(value: number) {
    this._messageRetentionPeriod = value;
  }
  public resetMessageRetentionPeriod() {
    this._messageRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionPeriodInput() {
    return this._messageRetentionPeriod;
  }

  // polling_wait_seconds - computed: true, optional: true, required: false
  private _pollingWaitSeconds?: number; 
  public get pollingWaitSeconds() {
    return this.getNumberAttribute('polling_wait_seconds');
  }
  public set pollingWaitSeconds(value: number) {
    this._pollingWaitSeconds = value;
  }
  public resetPollingWaitSeconds() {
    this._pollingWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingWaitSecondsInput() {
    return this._pollingWaitSeconds;
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

  // tags - computed: false, optional: true, required: false
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

  // visibility_timeout - computed: true, optional: true, required: false
  private _visibilityTimeout?: number; 
  public get visibilityTimeout() {
    return this.getNumberAttribute('visibility_timeout');
  }
  public set visibilityTimeout(value: number) {
    this._visibilityTimeout = value;
  }
  public resetVisibilityTimeout() {
    this._visibilityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutInput() {
    return this._visibilityTimeout;
  }

  // dlq_policy - computed: false, optional: true, required: false
  private _dlqPolicy = new MessageServiceQueueDlqPolicyOutputReference(this, "dlq_policy");
  public get dlqPolicy() {
    return this._dlqPolicy;
  }
  public putDlqPolicy(value: MessageServiceQueueDlqPolicy) {
    this._dlqPolicy.internalValue = value;
  }
  public resetDlqPolicy() {
    this._dlqPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlqPolicyInput() {
    return this._dlqPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MessageServiceQueueTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MessageServiceQueueTimeouts) {
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
      delay_seconds: cdktf.numberToTerraform(this._delaySeconds),
      id: cdktf.stringToTerraform(this._id),
      logging_enabled: cdktf.booleanToTerraform(this._loggingEnabled),
      maximum_message_size: cdktf.numberToTerraform(this._maximumMessageSize),
      message_retention_period: cdktf.numberToTerraform(this._messageRetentionPeriod),
      polling_wait_seconds: cdktf.numberToTerraform(this._pollingWaitSeconds),
      queue_name: cdktf.stringToTerraform(this._queueName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      visibility_timeout: cdktf.numberToTerraform(this._visibilityTimeout),
      dlq_policy: messageServiceQueueDlqPolicyToTerraform(this._dlqPolicy.internalValue),
      timeouts: messageServiceQueueTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay_seconds: {
        value: cdktf.numberToHclTerraform(this._delaySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._loggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_message_size: {
        value: cdktf.numberToHclTerraform(this._maximumMessageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_retention_period: {
        value: cdktf.numberToHclTerraform(this._messageRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      polling_wait_seconds: {
        value: cdktf.numberToHclTerraform(this._pollingWaitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_name: {
        value: cdktf.stringToHclTerraform(this._queueName),
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
      visibility_timeout: {
        value: cdktf.numberToHclTerraform(this._visibilityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dlq_policy: {
        value: messageServiceQueueDlqPolicyToHclTerraform(this._dlqPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MessageServiceQueueDlqPolicyList",
      },
      timeouts: {
        value: messageServiceQueueTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MessageServiceQueueTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
