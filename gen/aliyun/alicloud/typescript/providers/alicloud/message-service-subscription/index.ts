// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MessageServiceSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#endpoint MessageServiceSubscription#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#filter_tag MessageServiceSubscription#filter_tag}
  */
  readonly filterTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#id MessageServiceSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#notify_content_format MessageServiceSubscription#notify_content_format}
  */
  readonly notifyContentFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#notify_strategy MessageServiceSubscription#notify_strategy}
  */
  readonly notifyStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#push_type MessageServiceSubscription#push_type}
  */
  readonly pushType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#sts_role_arn MessageServiceSubscription#sts_role_arn}
  */
  readonly stsRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#subscription_name MessageServiceSubscription#subscription_name}
  */
  readonly subscriptionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#topic_name MessageServiceSubscription#topic_name}
  */
  readonly topicName: string;
  /**
  * dlq_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#dlq_policy MessageServiceSubscription#dlq_policy}
  */
  readonly dlqPolicy?: MessageServiceSubscriptionDlqPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#timeouts MessageServiceSubscription#timeouts}
  */
  readonly timeouts?: MessageServiceSubscriptionTimeouts;
}
export interface MessageServiceSubscriptionDlqPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#dead_letter_target_queue MessageServiceSubscription#dead_letter_target_queue}
  */
  readonly deadLetterTargetQueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#enabled MessageServiceSubscription#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function messageServiceSubscriptionDlqPolicyToTerraform(struct?: MessageServiceSubscriptionDlqPolicyOutputReference | MessageServiceSubscriptionDlqPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_letter_target_queue: cdktf.stringToTerraform(struct!.deadLetterTargetQueue),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function messageServiceSubscriptionDlqPolicyToHclTerraform(struct?: MessageServiceSubscriptionDlqPolicyOutputReference | MessageServiceSubscriptionDlqPolicy): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MessageServiceSubscriptionDlqPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MessageServiceSubscriptionDlqPolicy | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MessageServiceSubscriptionDlqPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deadLetterTargetQueue = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deadLetterTargetQueue = value.deadLetterTargetQueue;
      this._enabled = value.enabled;
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
}
export interface MessageServiceSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#create MessageServiceSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#delete MessageServiceSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#update MessageServiceSubscription#update}
  */
  readonly update?: string;
}

export function messageServiceSubscriptionTimeoutsToTerraform(struct?: MessageServiceSubscriptionTimeouts | cdktf.IResolvable): any {
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


export function messageServiceSubscriptionTimeoutsToHclTerraform(struct?: MessageServiceSubscriptionTimeouts | cdktf.IResolvable): any {
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

export class MessageServiceSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MessageServiceSubscriptionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MessageServiceSubscriptionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription alicloud_message_service_subscription}
*/
export class MessageServiceSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_message_service_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MessageServiceSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MessageServiceSubscription to import
  * @param importFromId The id of the existing MessageServiceSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MessageServiceSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_message_service_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/message_service_subscription alicloud_message_service_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MessageServiceSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: MessageServiceSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_message_service_subscription',
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
    this._endpoint = config.endpoint;
    this._filterTag = config.filterTag;
    this._id = config.id;
    this._notifyContentFormat = config.notifyContentFormat;
    this._notifyStrategy = config.notifyStrategy;
    this._pushType = config.pushType;
    this._stsRoleArn = config.stsRoleArn;
    this._subscriptionName = config.subscriptionName;
    this._topicName = config.topicName;
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

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // filter_tag - computed: false, optional: true, required: false
  private _filterTag?: string; 
  public get filterTag() {
    return this.getStringAttribute('filter_tag');
  }
  public set filterTag(value: string) {
    this._filterTag = value;
  }
  public resetFilterTag() {
    this._filterTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTagInput() {
    return this._filterTag;
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

  // notify_content_format - computed: true, optional: true, required: false
  private _notifyContentFormat?: string; 
  public get notifyContentFormat() {
    return this.getStringAttribute('notify_content_format');
  }
  public set notifyContentFormat(value: string) {
    this._notifyContentFormat = value;
  }
  public resetNotifyContentFormat() {
    this._notifyContentFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyContentFormatInput() {
    return this._notifyContentFormat;
  }

  // notify_strategy - computed: true, optional: true, required: false
  private _notifyStrategy?: string; 
  public get notifyStrategy() {
    return this.getStringAttribute('notify_strategy');
  }
  public set notifyStrategy(value: string) {
    this._notifyStrategy = value;
  }
  public resetNotifyStrategy() {
    this._notifyStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyStrategyInput() {
    return this._notifyStrategy;
  }

  // push_type - computed: false, optional: false, required: true
  private _pushType?: string; 
  public get pushType() {
    return this.getStringAttribute('push_type');
  }
  public set pushType(value: string) {
    this._pushType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pushTypeInput() {
    return this._pushType;
  }

  // sts_role_arn - computed: false, optional: true, required: false
  private _stsRoleArn?: string; 
  public get stsRoleArn() {
    return this.getStringAttribute('sts_role_arn');
  }
  public set stsRoleArn(value: string) {
    this._stsRoleArn = value;
  }
  public resetStsRoleArn() {
    this._stsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsRoleArnInput() {
    return this._stsRoleArn;
  }

  // subscription_name - computed: false, optional: false, required: true
  private _subscriptionName?: string; 
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName;
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

  // dlq_policy - computed: false, optional: true, required: false
  private _dlqPolicy = new MessageServiceSubscriptionDlqPolicyOutputReference(this, "dlq_policy");
  public get dlqPolicy() {
    return this._dlqPolicy;
  }
  public putDlqPolicy(value: MessageServiceSubscriptionDlqPolicy) {
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
  private _timeouts = new MessageServiceSubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MessageServiceSubscriptionTimeouts) {
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
      endpoint: cdktf.stringToTerraform(this._endpoint),
      filter_tag: cdktf.stringToTerraform(this._filterTag),
      id: cdktf.stringToTerraform(this._id),
      notify_content_format: cdktf.stringToTerraform(this._notifyContentFormat),
      notify_strategy: cdktf.stringToTerraform(this._notifyStrategy),
      push_type: cdktf.stringToTerraform(this._pushType),
      sts_role_arn: cdktf.stringToTerraform(this._stsRoleArn),
      subscription_name: cdktf.stringToTerraform(this._subscriptionName),
      topic_name: cdktf.stringToTerraform(this._topicName),
      dlq_policy: messageServiceSubscriptionDlqPolicyToTerraform(this._dlqPolicy.internalValue),
      timeouts: messageServiceSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_tag: {
        value: cdktf.stringToHclTerraform(this._filterTag),
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
      notify_content_format: {
        value: cdktf.stringToHclTerraform(this._notifyContentFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_strategy: {
        value: cdktf.stringToHclTerraform(this._notifyStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push_type: {
        value: cdktf.stringToHclTerraform(this._pushType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sts_role_arn: {
        value: cdktf.stringToHclTerraform(this._stsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_name: {
        value: cdktf.stringToHclTerraform(this._subscriptionName),
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
      dlq_policy: {
        value: messageServiceSubscriptionDlqPolicyToHclTerraform(this._dlqPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MessageServiceSubscriptionDlqPolicyList",
      },
      timeouts: {
        value: messageServiceSubscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MessageServiceSubscriptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
