// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskInviteToSlackChannelRootlyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#enabled WorkflowTaskInviteToSlackChannelRootly#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#id WorkflowTaskInviteToSlackChannelRootly#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#name WorkflowTaskInviteToSlackChannelRootly#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#position WorkflowTaskInviteToSlackChannelRootly#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#skip_on_failure WorkflowTaskInviteToSlackChannelRootly#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#workflow_id WorkflowTaskInviteToSlackChannelRootly#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#task_params WorkflowTaskInviteToSlackChannelRootly#task_params}
  */
  readonly taskParams: WorkflowTaskInviteToSlackChannelRootlyTaskParams;
}
export interface WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#id WorkflowTaskInviteToSlackChannelRootly#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#name WorkflowTaskInviteToSlackChannelRootly#name}
  */
  readonly name: string;
}

export function workflowTaskInviteToSlackChannelRootlyTaskParamsChannelsToTerraform(struct?: WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskInviteToSlackChannelRootlyTaskParamsChannelsToHclTerraform(struct?: WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannelsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannels[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannelsOutputReference {
    return new WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskInviteToSlackChannelRootlyTaskParams {
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#escalation_policy_target WorkflowTaskInviteToSlackChannelRootly#escalation_policy_target}
  */
  readonly escalationPolicyTarget?: { [key: string]: string };
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#group_target WorkflowTaskInviteToSlackChannelRootly#group_target}
  */
  readonly groupTarget?: { [key: string]: string };
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#schedule_target WorkflowTaskInviteToSlackChannelRootly#schedule_target}
  */
  readonly scheduleTarget?: { [key: string]: string };
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#service_target WorkflowTaskInviteToSlackChannelRootly#service_target}
  */
  readonly serviceTarget?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#task_type WorkflowTaskInviteToSlackChannelRootly#task_type}
  */
  readonly taskType?: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#user_target WorkflowTaskInviteToSlackChannelRootly#user_target}
  */
  readonly userTarget?: { [key: string]: string };
  /**
  * channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#channels WorkflowTaskInviteToSlackChannelRootly#channels}
  */
  readonly channels: WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannels[] | cdktf.IResolvable;
}

export function workflowTaskInviteToSlackChannelRootlyTaskParamsToTerraform(struct?: WorkflowTaskInviteToSlackChannelRootlyTaskParamsOutputReference | WorkflowTaskInviteToSlackChannelRootlyTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_policy_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.escalationPolicyTarget),
    group_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.groupTarget),
    schedule_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.scheduleTarget),
    service_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceTarget),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    user_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userTarget),
    channels: cdktf.listMapper(workflowTaskInviteToSlackChannelRootlyTaskParamsChannelsToTerraform, true)(struct!.channels),
  }
}


export function workflowTaskInviteToSlackChannelRootlyTaskParamsToHclTerraform(struct?: WorkflowTaskInviteToSlackChannelRootlyTaskParamsOutputReference | WorkflowTaskInviteToSlackChannelRootlyTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalation_policy_target: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.escalationPolicyTarget),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    group_target: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.groupTarget),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    schedule_target: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.scheduleTarget),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_target: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceTarget),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_target: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.userTarget),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    channels: {
      value: cdktf.listMapperHcl(workflowTaskInviteToSlackChannelRootlyTaskParamsChannelsToHclTerraform, true)(struct!.channels),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskInviteToSlackChannelRootlyTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskInviteToSlackChannelRootlyTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalationPolicyTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationPolicyTarget = this._escalationPolicyTarget;
    }
    if (this._groupTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupTarget = this._groupTarget;
    }
    if (this._scheduleTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleTarget = this._scheduleTarget;
    }
    if (this._serviceTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTarget = this._serviceTarget;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._userTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTarget = this._userTarget;
    }
    if (this._channels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskInviteToSlackChannelRootlyTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._escalationPolicyTarget = undefined;
      this._groupTarget = undefined;
      this._scheduleTarget = undefined;
      this._serviceTarget = undefined;
      this._taskType = undefined;
      this._userTarget = undefined;
      this._channels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._escalationPolicyTarget = value.escalationPolicyTarget;
      this._groupTarget = value.groupTarget;
      this._scheduleTarget = value.scheduleTarget;
      this._serviceTarget = value.serviceTarget;
      this._taskType = value.taskType;
      this._userTarget = value.userTarget;
      this._channels.internalValue = value.channels;
    }
  }

  // escalation_policy_target - computed: false, optional: true, required: false
  private _escalationPolicyTarget?: { [key: string]: string }; 
  public get escalationPolicyTarget() {
    return this.getStringMapAttribute('escalation_policy_target');
  }
  public set escalationPolicyTarget(value: { [key: string]: string }) {
    this._escalationPolicyTarget = value;
  }
  public resetEscalationPolicyTarget() {
    this._escalationPolicyTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyTargetInput() {
    return this._escalationPolicyTarget;
  }

  // group_target - computed: false, optional: true, required: false
  private _groupTarget?: { [key: string]: string }; 
  public get groupTarget() {
    return this.getStringMapAttribute('group_target');
  }
  public set groupTarget(value: { [key: string]: string }) {
    this._groupTarget = value;
  }
  public resetGroupTarget() {
    this._groupTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTargetInput() {
    return this._groupTarget;
  }

  // schedule_target - computed: false, optional: true, required: false
  private _scheduleTarget?: { [key: string]: string }; 
  public get scheduleTarget() {
    return this.getStringMapAttribute('schedule_target');
  }
  public set scheduleTarget(value: { [key: string]: string }) {
    this._scheduleTarget = value;
  }
  public resetScheduleTarget() {
    this._scheduleTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTargetInput() {
    return this._scheduleTarget;
  }

  // service_target - computed: false, optional: true, required: false
  private _serviceTarget?: { [key: string]: string }; 
  public get serviceTarget() {
    return this.getStringMapAttribute('service_target');
  }
  public set serviceTarget(value: { [key: string]: string }) {
    this._serviceTarget = value;
  }
  public resetServiceTarget() {
    this._serviceTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTargetInput() {
    return this._serviceTarget;
  }

  // task_type - computed: false, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // user_target - computed: false, optional: true, required: false
  private _userTarget?: { [key: string]: string }; 
  public get userTarget() {
    return this.getStringMapAttribute('user_target');
  }
  public set userTarget(value: { [key: string]: string }) {
    this._userTarget = value;
  }
  public resetUserTarget() {
    this._userTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTargetInput() {
    return this._userTarget;
  }

  // channels - computed: false, optional: false, required: true
  private _channels = new WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannelsList(this, "channels", false);
  public get channels() {
    return this._channels;
  }
  public putChannels(value: WorkflowTaskInviteToSlackChannelRootlyTaskParamsChannels[] | cdktf.IResolvable) {
    this._channels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly rootly_workflow_task_invite_to_slack_channel_rootly}
*/
export class WorkflowTaskInviteToSlackChannelRootly extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_invite_to_slack_channel_rootly";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskInviteToSlackChannelRootly resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskInviteToSlackChannelRootly to import
  * @param importFromId The id of the existing WorkflowTaskInviteToSlackChannelRootly that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskInviteToSlackChannelRootly to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_invite_to_slack_channel_rootly", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/workflow_task_invite_to_slack_channel_rootly rootly_workflow_task_invite_to_slack_channel_rootly} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskInviteToSlackChannelRootlyConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskInviteToSlackChannelRootlyConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_invite_to_slack_channel_rootly',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.11',
        providerVersionConstraint: '4.3.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._position = config.position;
    this._skipOnFailure = config.skipOnFailure;
    this._workflowId = config.workflowId;
    this._taskParams.internalValue = config.taskParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // skip_on_failure - computed: false, optional: true, required: false
  private _skipOnFailure?: boolean | cdktf.IResolvable; 
  public get skipOnFailure() {
    return this.getBooleanAttribute('skip_on_failure');
  }
  public set skipOnFailure(value: boolean | cdktf.IResolvable) {
    this._skipOnFailure = value;
  }
  public resetSkipOnFailure() {
    this._skipOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOnFailureInput() {
    return this._skipOnFailure;
  }

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // task_params - computed: false, optional: false, required: true
  private _taskParams = new WorkflowTaskInviteToSlackChannelRootlyTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskInviteToSlackChannelRootlyTaskParams) {
    this._taskParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskParamsInput() {
    return this._taskParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      skip_on_failure: cdktf.booleanToTerraform(this._skipOnFailure),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
      task_params: workflowTaskInviteToSlackChannelRootlyTaskParamsToTerraform(this._taskParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_on_failure: {
        value: cdktf.booleanToHclTerraform(this._skipOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workflow_id: {
        value: cdktf.stringToHclTerraform(this._workflowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_params: {
        value: workflowTaskInviteToSlackChannelRootlyTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskInviteToSlackChannelRootlyTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
