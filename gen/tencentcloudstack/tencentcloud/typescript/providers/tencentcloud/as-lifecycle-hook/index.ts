// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsLifecycleHookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines the action the AS group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. Valid values: `CONTINUE` and `ABANDON`. The default value is `CONTINUE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#default_result AsLifecycleHook#default_result}
  */
  readonly defaultResult?: string;
  /**
  * Defines the amount of time, in seconds, that can elapse before the lifecycle hook times out. Valid value ranges: (30~7200). and default value is `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#heartbeat_timeout AsLifecycleHook#heartbeat_timeout}
  */
  readonly heartbeatTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#id AsLifecycleHook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the lifecycle hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#lifecycle_hook_name AsLifecycleHook#lifecycle_hook_name}
  */
  readonly lifecycleHookName: string;
  /**
  * The instance state to which you want to attach the lifecycle hook. Valid values: `INSTANCE_LAUNCHING` and `INSTANCE_TERMINATING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#lifecycle_transition AsLifecycleHook#lifecycle_transition}
  */
  readonly lifecycleTransition: string;
  /**
  * The scenario where the lifecycle hook is applied. `EXTENSION`: the lifecycle hook will be triggered when AttachInstances, DetachInstances or RemoveInstaces is called. `NORMAL`: the lifecycle hook is not triggered by the above APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#lifecycle_transition_type AsLifecycleHook#lifecycle_transition_type}
  */
  readonly lifecycleTransitionType?: string;
  /**
  * Contains additional information that you want to include any time AS sends a message to the notification target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#notification_metadata AsLifecycleHook#notification_metadata}
  */
  readonly notificationMetadata?: string;
  /**
  * For CMQ_QUEUE type, a name of queue must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#notification_queue_name AsLifecycleHook#notification_queue_name}
  */
  readonly notificationQueueName?: string;
  /**
  * Target type. Valid values: `CMQ_QUEUE`, `CMQ_TOPIC`, `TDMQ_CMQ_QUEUE`, `TDMQ_CMQ_TOPIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#notification_target_type AsLifecycleHook#notification_target_type}
  */
  readonly notificationTargetType?: string;
  /**
  * For CMQ_TOPIC type, a name of topic must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#notification_topic_name AsLifecycleHook#notification_topic_name}
  */
  readonly notificationTopicName?: string;
  /**
  * ID of a scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#scaling_group_id AsLifecycleHook#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * lifecycle_command block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#lifecycle_command AsLifecycleHook#lifecycle_command}
  */
  readonly lifecycleCommand?: AsLifecycleHookLifecycleCommand;
}
export interface AsLifecycleHookLifecycleCommand {
  /**
  * Remote command ID. It is required to execute a command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#command_id AsLifecycleHook#command_id}
  */
  readonly commandId: string;
  /**
  * Custom parameter. The field type is JSON encoded string. For example, {"varA": "222"}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#parameters AsLifecycleHook#parameters}
  */
  readonly parameters?: string;
}

export function asLifecycleHookLifecycleCommandToTerraform(struct?: AsLifecycleHookLifecycleCommandOutputReference | AsLifecycleHookLifecycleCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_id: cdktf.stringToTerraform(struct!.commandId),
    parameters: cdktf.stringToTerraform(struct!.parameters),
  }
}


export function asLifecycleHookLifecycleCommandToHclTerraform(struct?: AsLifecycleHookLifecycleCommandOutputReference | AsLifecycleHookLifecycleCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_id: {
      value: cdktf.stringToHclTerraform(struct!.commandId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsLifecycleHookLifecycleCommandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsLifecycleHookLifecycleCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandId !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandId = this._commandId;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsLifecycleHookLifecycleCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandId = undefined;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandId = value.commandId;
      this._parameters = value.parameters;
    }
  }

  // command_id - computed: false, optional: false, required: true
  private _commandId?: string; 
  public get commandId() {
    return this.getStringAttribute('command_id');
  }
  public set commandId(value: string) {
    this._commandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandIdInput() {
    return this._commandId;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook tencentcloud_as_lifecycle_hook}
*/
export class AsLifecycleHook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_lifecycle_hook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsLifecycleHook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsLifecycleHook to import
  * @param importFromId The id of the existing AsLifecycleHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsLifecycleHook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_lifecycle_hook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/as_lifecycle_hook tencentcloud_as_lifecycle_hook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsLifecycleHookConfig
  */
  public constructor(scope: Construct, id: string, config: AsLifecycleHookConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_lifecycle_hook',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultResult = config.defaultResult;
    this._heartbeatTimeout = config.heartbeatTimeout;
    this._id = config.id;
    this._lifecycleHookName = config.lifecycleHookName;
    this._lifecycleTransition = config.lifecycleTransition;
    this._lifecycleTransitionType = config.lifecycleTransitionType;
    this._notificationMetadata = config.notificationMetadata;
    this._notificationQueueName = config.notificationQueueName;
    this._notificationTargetType = config.notificationTargetType;
    this._notificationTopicName = config.notificationTopicName;
    this._scalingGroupId = config.scalingGroupId;
    this._lifecycleCommand.internalValue = config.lifecycleCommand;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_result - computed: false, optional: true, required: false
  private _defaultResult?: string; 
  public get defaultResult() {
    return this.getStringAttribute('default_result');
  }
  public set defaultResult(value: string) {
    this._defaultResult = value;
  }
  public resetDefaultResult() {
    this._defaultResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResultInput() {
    return this._defaultResult;
  }

  // heartbeat_timeout - computed: false, optional: true, required: false
  private _heartbeatTimeout?: number; 
  public get heartbeatTimeout() {
    return this.getNumberAttribute('heartbeat_timeout');
  }
  public set heartbeatTimeout(value: number) {
    this._heartbeatTimeout = value;
  }
  public resetHeartbeatTimeout() {
    this._heartbeatTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatTimeoutInput() {
    return this._heartbeatTimeout;
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

  // lifecycle_hook_name - computed: false, optional: false, required: true
  private _lifecycleHookName?: string; 
  public get lifecycleHookName() {
    return this.getStringAttribute('lifecycle_hook_name');
  }
  public set lifecycleHookName(value: string) {
    this._lifecycleHookName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleHookNameInput() {
    return this._lifecycleHookName;
  }

  // lifecycle_transition - computed: false, optional: false, required: true
  private _lifecycleTransition?: string; 
  public get lifecycleTransition() {
    return this.getStringAttribute('lifecycle_transition');
  }
  public set lifecycleTransition(value: string) {
    this._lifecycleTransition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleTransitionInput() {
    return this._lifecycleTransition;
  }

  // lifecycle_transition_type - computed: true, optional: true, required: false
  private _lifecycleTransitionType?: string; 
  public get lifecycleTransitionType() {
    return this.getStringAttribute('lifecycle_transition_type');
  }
  public set lifecycleTransitionType(value: string) {
    this._lifecycleTransitionType = value;
  }
  public resetLifecycleTransitionType() {
    this._lifecycleTransitionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleTransitionTypeInput() {
    return this._lifecycleTransitionType;
  }

  // notification_metadata - computed: false, optional: true, required: false
  private _notificationMetadata?: string; 
  public get notificationMetadata() {
    return this.getStringAttribute('notification_metadata');
  }
  public set notificationMetadata(value: string) {
    this._notificationMetadata = value;
  }
  public resetNotificationMetadata() {
    this._notificationMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationMetadataInput() {
    return this._notificationMetadata;
  }

  // notification_queue_name - computed: false, optional: true, required: false
  private _notificationQueueName?: string; 
  public get notificationQueueName() {
    return this.getStringAttribute('notification_queue_name');
  }
  public set notificationQueueName(value: string) {
    this._notificationQueueName = value;
  }
  public resetNotificationQueueName() {
    this._notificationQueueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationQueueNameInput() {
    return this._notificationQueueName;
  }

  // notification_target_type - computed: false, optional: true, required: false
  private _notificationTargetType?: string; 
  public get notificationTargetType() {
    return this.getStringAttribute('notification_target_type');
  }
  public set notificationTargetType(value: string) {
    this._notificationTargetType = value;
  }
  public resetNotificationTargetType() {
    this._notificationTargetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTargetTypeInput() {
    return this._notificationTargetType;
  }

  // notification_topic_name - computed: false, optional: true, required: false
  private _notificationTopicName?: string; 
  public get notificationTopicName() {
    return this.getStringAttribute('notification_topic_name');
  }
  public set notificationTopicName(value: string) {
    this._notificationTopicName = value;
  }
  public resetNotificationTopicName() {
    this._notificationTopicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicNameInput() {
    return this._notificationTopicName;
  }

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // lifecycle_command - computed: false, optional: true, required: false
  private _lifecycleCommand = new AsLifecycleHookLifecycleCommandOutputReference(this, "lifecycle_command");
  public get lifecycleCommand() {
    return this._lifecycleCommand;
  }
  public putLifecycleCommand(value: AsLifecycleHookLifecycleCommand) {
    this._lifecycleCommand.internalValue = value;
  }
  public resetLifecycleCommand() {
    this._lifecycleCommand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleCommandInput() {
    return this._lifecycleCommand.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_result: cdktf.stringToTerraform(this._defaultResult),
      heartbeat_timeout: cdktf.numberToTerraform(this._heartbeatTimeout),
      id: cdktf.stringToTerraform(this._id),
      lifecycle_hook_name: cdktf.stringToTerraform(this._lifecycleHookName),
      lifecycle_transition: cdktf.stringToTerraform(this._lifecycleTransition),
      lifecycle_transition_type: cdktf.stringToTerraform(this._lifecycleTransitionType),
      notification_metadata: cdktf.stringToTerraform(this._notificationMetadata),
      notification_queue_name: cdktf.stringToTerraform(this._notificationQueueName),
      notification_target_type: cdktf.stringToTerraform(this._notificationTargetType),
      notification_topic_name: cdktf.stringToTerraform(this._notificationTopicName),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      lifecycle_command: asLifecycleHookLifecycleCommandToTerraform(this._lifecycleCommand.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_result: {
        value: cdktf.stringToHclTerraform(this._defaultResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heartbeat_timeout: {
        value: cdktf.numberToHclTerraform(this._heartbeatTimeout),
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
      lifecycle_hook_name: {
        value: cdktf.stringToHclTerraform(this._lifecycleHookName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_transition: {
        value: cdktf.stringToHclTerraform(this._lifecycleTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_transition_type: {
        value: cdktf.stringToHclTerraform(this._lifecycleTransitionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_metadata: {
        value: cdktf.stringToHclTerraform(this._notificationMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_queue_name: {
        value: cdktf.stringToHclTerraform(this._notificationQueueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_target_type: {
        value: cdktf.stringToHclTerraform(this._notificationTargetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_topic_name: {
        value: cdktf.stringToHclTerraform(this._notificationTopicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_command: {
        value: asLifecycleHookLifecycleCommandToHclTerraform(this._lifecycleCommand.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsLifecycleHookLifecycleCommandList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
