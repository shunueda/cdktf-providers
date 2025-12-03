// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskInviteToSlackChannelOpsgenieConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#enabled WorkflowTaskInviteToSlackChannelOpsgenie#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#id WorkflowTaskInviteToSlackChannelOpsgenie#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#name WorkflowTaskInviteToSlackChannelOpsgenie#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#position WorkflowTaskInviteToSlackChannelOpsgenie#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#skip_on_failure WorkflowTaskInviteToSlackChannelOpsgenie#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#workflow_id WorkflowTaskInviteToSlackChannelOpsgenie#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#task_params WorkflowTaskInviteToSlackChannelOpsgenie#task_params}
  */
  readonly taskParams: WorkflowTaskInviteToSlackChannelOpsgenieTaskParams;
}
export interface WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#id WorkflowTaskInviteToSlackChannelOpsgenie#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#name WorkflowTaskInviteToSlackChannelOpsgenie#name}
  */
  readonly name: string;
}

export function workflowTaskInviteToSlackChannelOpsgenieTaskParamsChannelsToTerraform(struct?: WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskInviteToSlackChannelOpsgenieTaskParamsChannelsToHclTerraform(struct?: WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannels | cdktf.IResolvable): any {
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

export class WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannels | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannelsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannels[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannelsOutputReference {
    return new WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskInviteToSlackChannelOpsgenieTaskParams {
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#schedule WorkflowTaskInviteToSlackChannelOpsgenie#schedule}
  */
  readonly schedule: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#task_type WorkflowTaskInviteToSlackChannelOpsgenie#task_type}
  */
  readonly taskType?: string;
  /**
  * channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#channels WorkflowTaskInviteToSlackChannelOpsgenie#channels}
  */
  readonly channels: WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannels[] | cdktf.IResolvable;
}

export function workflowTaskInviteToSlackChannelOpsgenieTaskParamsToTerraform(struct?: WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsOutputReference | WorkflowTaskInviteToSlackChannelOpsgenieTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.schedule),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    channels: cdktf.listMapper(workflowTaskInviteToSlackChannelOpsgenieTaskParamsChannelsToTerraform, true)(struct!.channels),
  }
}


export function workflowTaskInviteToSlackChannelOpsgenieTaskParamsToHclTerraform(struct?: WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsOutputReference | WorkflowTaskInviteToSlackChannelOpsgenieTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.schedule),
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
    channels: {
      value: cdktf.listMapperHcl(workflowTaskInviteToSlackChannelOpsgenieTaskParamsChannelsToHclTerraform, true)(struct!.channels),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskInviteToSlackChannelOpsgenieTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._channels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskInviteToSlackChannelOpsgenieTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schedule = undefined;
      this._taskType = undefined;
      this._channels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schedule = value.schedule;
      this._taskType = value.taskType;
      this._channels.internalValue = value.channels;
    }
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: { [key: string]: string }; 
  public get schedule() {
    return this.getStringMapAttribute('schedule');
  }
  public set schedule(value: { [key: string]: string }) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
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

  // channels - computed: false, optional: false, required: true
  private _channels = new WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannelsList(this, "channels", false);
  public get channels() {
    return this._channels;
  }
  public putChannels(value: WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsChannels[] | cdktf.IResolvable) {
    this._channels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie rootly_workflow_task_invite_to_slack_channel_opsgenie}
*/
export class WorkflowTaskInviteToSlackChannelOpsgenie extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_invite_to_slack_channel_opsgenie";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskInviteToSlackChannelOpsgenie resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskInviteToSlackChannelOpsgenie to import
  * @param importFromId The id of the existing WorkflowTaskInviteToSlackChannelOpsgenie that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskInviteToSlackChannelOpsgenie to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_invite_to_slack_channel_opsgenie", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_invite_to_slack_channel_opsgenie rootly_workflow_task_invite_to_slack_channel_opsgenie} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskInviteToSlackChannelOpsgenieConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskInviteToSlackChannelOpsgenieConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_invite_to_slack_channel_opsgenie',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.10',
        providerVersionConstraint: '4.3.10'
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
  private _taskParams = new WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskInviteToSlackChannelOpsgenieTaskParams) {
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
      task_params: workflowTaskInviteToSlackChannelOpsgenieTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskInviteToSlackChannelOpsgenieTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskInviteToSlackChannelOpsgenieTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
