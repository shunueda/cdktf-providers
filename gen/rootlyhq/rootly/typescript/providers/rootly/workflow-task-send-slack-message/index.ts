// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskSendSlackMessageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#enabled WorkflowTaskSendSlackMessage#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#id WorkflowTaskSendSlackMessage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#name WorkflowTaskSendSlackMessage#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#position WorkflowTaskSendSlackMessage#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#skip_on_failure WorkflowTaskSendSlackMessage#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#workflow_id WorkflowTaskSendSlackMessage#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#task_params WorkflowTaskSendSlackMessage#task_params}
  */
  readonly taskParams: WorkflowTaskSendSlackMessageTaskParams;
}
export interface WorkflowTaskSendSlackMessageTaskParamsChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#id WorkflowTaskSendSlackMessage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#name WorkflowTaskSendSlackMessage#name}
  */
  readonly name: string;
}

export function workflowTaskSendSlackMessageTaskParamsChannelsToTerraform(struct?: WorkflowTaskSendSlackMessageTaskParamsChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskSendSlackMessageTaskParamsChannelsToHclTerraform(struct?: WorkflowTaskSendSlackMessageTaskParamsChannels | cdktf.IResolvable): any {
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

export class WorkflowTaskSendSlackMessageTaskParamsChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskSendSlackMessageTaskParamsChannels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskSendSlackMessageTaskParamsChannels | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskSendSlackMessageTaskParamsChannelsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskSendSlackMessageTaskParamsChannels[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskSendSlackMessageTaskParamsChannelsOutputReference {
    return new WorkflowTaskSendSlackMessageTaskParamsChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskSendSlackMessageTaskParamsSlackUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#id WorkflowTaskSendSlackMessage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#name WorkflowTaskSendSlackMessage#name}
  */
  readonly name: string;
}

export function workflowTaskSendSlackMessageTaskParamsSlackUserGroupsToTerraform(struct?: WorkflowTaskSendSlackMessageTaskParamsSlackUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskSendSlackMessageTaskParamsSlackUserGroupsToHclTerraform(struct?: WorkflowTaskSendSlackMessageTaskParamsSlackUserGroups | cdktf.IResolvable): any {
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

export class WorkflowTaskSendSlackMessageTaskParamsSlackUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskSendSlackMessageTaskParamsSlackUserGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskSendSlackMessageTaskParamsSlackUserGroups | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskSendSlackMessageTaskParamsSlackUserGroupsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskSendSlackMessageTaskParamsSlackUserGroups[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskSendSlackMessageTaskParamsSlackUserGroupsOutputReference {
    return new WorkflowTaskSendSlackMessageTaskParamsSlackUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskSendSlackMessageTaskParamsSlackUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#id WorkflowTaskSendSlackMessage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#name WorkflowTaskSendSlackMessage#name}
  */
  readonly name: string;
}

export function workflowTaskSendSlackMessageTaskParamsSlackUsersToTerraform(struct?: WorkflowTaskSendSlackMessageTaskParamsSlackUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskSendSlackMessageTaskParamsSlackUsersToHclTerraform(struct?: WorkflowTaskSendSlackMessageTaskParamsSlackUsers | cdktf.IResolvable): any {
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

export class WorkflowTaskSendSlackMessageTaskParamsSlackUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskSendSlackMessageTaskParamsSlackUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskSendSlackMessageTaskParamsSlackUsers | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskSendSlackMessageTaskParamsSlackUsersList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskSendSlackMessageTaskParamsSlackUsers[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskSendSlackMessageTaskParamsSlackUsersOutputReference {
    return new WorkflowTaskSendSlackMessageTaskParamsSlackUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskSendSlackMessageTaskParams {
  /**
  * Value must be one of `update_summary`, `update_status`, `archive_channel`, `manage_incident_roles`, `update_incident`, `all_commands`, `leave_feedback`, `manage_form_fields`, `manage_action_items`, `view_tasks`, `add_pagerduty_responders`, `add_opsgenie_responders`, `add_victor_ops_responders`, `update_status_page`, `pause_reminder`, `snooze_reminder`, `restart_reminder`, `cancel_incident`, `delete_message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#actionables WorkflowTaskSendSlackMessage#actionables}
  */
  readonly actionables?: string[];
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#broadcast_thread_reply_to_channel WorkflowTaskSendSlackMessage#broadcast_thread_reply_to_channel}
  */
  readonly broadcastThreadReplyToChannel?: boolean | cdktf.IResolvable;
  /**
  * A hex color 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#color WorkflowTaskSendSlackMessage#color}
  */
  readonly color?: string;
  /**
  * Map must contain two fields, `id` and `name`. A hash where [id] is the task id of the parent task that sent a message, and [name] is the name of the parent task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#parent_message_thread_task WorkflowTaskSendSlackMessage#parent_message_thread_task}
  */
  readonly parentMessageThreadTask?: { [key: string]: string };
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#pin_to_channel WorkflowTaskSendSlackMessage#pin_to_channel}
  */
  readonly pinToChannel?: boolean | cdktf.IResolvable;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#send_as_ephemeral WorkflowTaskSendSlackMessage#send_as_ephemeral}
  */
  readonly sendAsEphemeral?: boolean | cdktf.IResolvable;
  /**
  * When set to true, if the parent for this threaded message cannot be found the message will be skipped.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#send_only_as_threaded_message WorkflowTaskSendSlackMessage#send_only_as_threaded_message}
  */
  readonly sendOnlyAsThreadedMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#task_type WorkflowTaskSendSlackMessage#task_type}
  */
  readonly taskType?: string;
  /**
  * The message text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#text WorkflowTaskSendSlackMessage#text}
  */
  readonly text: string;
  /**
  * The thread to send the message into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#thread_ts WorkflowTaskSendSlackMessage#thread_ts}
  */
  readonly threadTs?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#update_parent_message WorkflowTaskSendSlackMessage#update_parent_message}
  */
  readonly updateParentMessage?: boolean | cdktf.IResolvable;
  /**
  * channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#channels WorkflowTaskSendSlackMessage#channels}
  */
  readonly channels?: WorkflowTaskSendSlackMessageTaskParamsChannels[] | cdktf.IResolvable;
  /**
  * slack_user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#slack_user_groups WorkflowTaskSendSlackMessage#slack_user_groups}
  */
  readonly slackUserGroups?: WorkflowTaskSendSlackMessageTaskParamsSlackUserGroups[] | cdktf.IResolvable;
  /**
  * slack_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#slack_users WorkflowTaskSendSlackMessage#slack_users}
  */
  readonly slackUsers?: WorkflowTaskSendSlackMessageTaskParamsSlackUsers[] | cdktf.IResolvable;
}

export function workflowTaskSendSlackMessageTaskParamsToTerraform(struct?: WorkflowTaskSendSlackMessageTaskParamsOutputReference | WorkflowTaskSendSlackMessageTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actionables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actionables),
    broadcast_thread_reply_to_channel: cdktf.booleanToTerraform(struct!.broadcastThreadReplyToChannel),
    color: cdktf.stringToTerraform(struct!.color),
    parent_message_thread_task: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parentMessageThreadTask),
    pin_to_channel: cdktf.booleanToTerraform(struct!.pinToChannel),
    send_as_ephemeral: cdktf.booleanToTerraform(struct!.sendAsEphemeral),
    send_only_as_threaded_message: cdktf.booleanToTerraform(struct!.sendOnlyAsThreadedMessage),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    text: cdktf.stringToTerraform(struct!.text),
    thread_ts: cdktf.stringToTerraform(struct!.threadTs),
    update_parent_message: cdktf.booleanToTerraform(struct!.updateParentMessage),
    channels: cdktf.listMapper(workflowTaskSendSlackMessageTaskParamsChannelsToTerraform, true)(struct!.channels),
    slack_user_groups: cdktf.listMapper(workflowTaskSendSlackMessageTaskParamsSlackUserGroupsToTerraform, true)(struct!.slackUserGroups),
    slack_users: cdktf.listMapper(workflowTaskSendSlackMessageTaskParamsSlackUsersToTerraform, true)(struct!.slackUsers),
  }
}


export function workflowTaskSendSlackMessageTaskParamsToHclTerraform(struct?: WorkflowTaskSendSlackMessageTaskParamsOutputReference | WorkflowTaskSendSlackMessageTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actionables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actionables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    broadcast_thread_reply_to_channel: {
      value: cdktf.booleanToHclTerraform(struct!.broadcastThreadReplyToChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_message_thread_task: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parentMessageThreadTask),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pin_to_channel: {
      value: cdktf.booleanToHclTerraform(struct!.pinToChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_as_ephemeral: {
      value: cdktf.booleanToHclTerraform(struct!.sendAsEphemeral),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_only_as_threaded_message: {
      value: cdktf.booleanToHclTerraform(struct!.sendOnlyAsThreadedMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thread_ts: {
      value: cdktf.stringToHclTerraform(struct!.threadTs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_parent_message: {
      value: cdktf.booleanToHclTerraform(struct!.updateParentMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channels: {
      value: cdktf.listMapperHcl(workflowTaskSendSlackMessageTaskParamsChannelsToHclTerraform, true)(struct!.channels),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskSendSlackMessageTaskParamsChannelsList",
    },
    slack_user_groups: {
      value: cdktf.listMapperHcl(workflowTaskSendSlackMessageTaskParamsSlackUserGroupsToHclTerraform, true)(struct!.slackUserGroups),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskSendSlackMessageTaskParamsSlackUserGroupsList",
    },
    slack_users: {
      value: cdktf.listMapperHcl(workflowTaskSendSlackMessageTaskParamsSlackUsersToHclTerraform, true)(struct!.slackUsers),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskSendSlackMessageTaskParamsSlackUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskSendSlackMessageTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskSendSlackMessageTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionables !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionables = this._actionables;
    }
    if (this._broadcastThreadReplyToChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastThreadReplyToChannel = this._broadcastThreadReplyToChannel;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._parentMessageThreadTask !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentMessageThreadTask = this._parentMessageThreadTask;
    }
    if (this._pinToChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinToChannel = this._pinToChannel;
    }
    if (this._sendAsEphemeral !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendAsEphemeral = this._sendAsEphemeral;
    }
    if (this._sendOnlyAsThreadedMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnlyAsThreadedMessage = this._sendOnlyAsThreadedMessage;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._threadTs !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadTs = this._threadTs;
    }
    if (this._updateParentMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateParentMessage = this._updateParentMessage;
    }
    if (this._channels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels?.internalValue;
    }
    if (this._slackUserGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackUserGroups = this._slackUserGroups?.internalValue;
    }
    if (this._slackUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackUsers = this._slackUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskSendSlackMessageTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionables = undefined;
      this._broadcastThreadReplyToChannel = undefined;
      this._color = undefined;
      this._parentMessageThreadTask = undefined;
      this._pinToChannel = undefined;
      this._sendAsEphemeral = undefined;
      this._sendOnlyAsThreadedMessage = undefined;
      this._taskType = undefined;
      this._text = undefined;
      this._threadTs = undefined;
      this._updateParentMessage = undefined;
      this._channels.internalValue = undefined;
      this._slackUserGroups.internalValue = undefined;
      this._slackUsers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionables = value.actionables;
      this._broadcastThreadReplyToChannel = value.broadcastThreadReplyToChannel;
      this._color = value.color;
      this._parentMessageThreadTask = value.parentMessageThreadTask;
      this._pinToChannel = value.pinToChannel;
      this._sendAsEphemeral = value.sendAsEphemeral;
      this._sendOnlyAsThreadedMessage = value.sendOnlyAsThreadedMessage;
      this._taskType = value.taskType;
      this._text = value.text;
      this._threadTs = value.threadTs;
      this._updateParentMessage = value.updateParentMessage;
      this._channels.internalValue = value.channels;
      this._slackUserGroups.internalValue = value.slackUserGroups;
      this._slackUsers.internalValue = value.slackUsers;
    }
  }

  // actionables - computed: false, optional: true, required: false
  private _actionables?: string[]; 
  public get actionables() {
    return this.getListAttribute('actionables');
  }
  public set actionables(value: string[]) {
    this._actionables = value;
  }
  public resetActionables() {
    this._actionables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionablesInput() {
    return this._actionables;
  }

  // broadcast_thread_reply_to_channel - computed: false, optional: true, required: false
  private _broadcastThreadReplyToChannel?: boolean | cdktf.IResolvable; 
  public get broadcastThreadReplyToChannel() {
    return this.getBooleanAttribute('broadcast_thread_reply_to_channel');
  }
  public set broadcastThreadReplyToChannel(value: boolean | cdktf.IResolvable) {
    this._broadcastThreadReplyToChannel = value;
  }
  public resetBroadcastThreadReplyToChannel() {
    this._broadcastThreadReplyToChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastThreadReplyToChannelInput() {
    return this._broadcastThreadReplyToChannel;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // parent_message_thread_task - computed: false, optional: true, required: false
  private _parentMessageThreadTask?: { [key: string]: string }; 
  public get parentMessageThreadTask() {
    return this.getStringMapAttribute('parent_message_thread_task');
  }
  public set parentMessageThreadTask(value: { [key: string]: string }) {
    this._parentMessageThreadTask = value;
  }
  public resetParentMessageThreadTask() {
    this._parentMessageThreadTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentMessageThreadTaskInput() {
    return this._parentMessageThreadTask;
  }

  // pin_to_channel - computed: false, optional: true, required: false
  private _pinToChannel?: boolean | cdktf.IResolvable; 
  public get pinToChannel() {
    return this.getBooleanAttribute('pin_to_channel');
  }
  public set pinToChannel(value: boolean | cdktf.IResolvable) {
    this._pinToChannel = value;
  }
  public resetPinToChannel() {
    this._pinToChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinToChannelInput() {
    return this._pinToChannel;
  }

  // send_as_ephemeral - computed: false, optional: true, required: false
  private _sendAsEphemeral?: boolean | cdktf.IResolvable; 
  public get sendAsEphemeral() {
    return this.getBooleanAttribute('send_as_ephemeral');
  }
  public set sendAsEphemeral(value: boolean | cdktf.IResolvable) {
    this._sendAsEphemeral = value;
  }
  public resetSendAsEphemeral() {
    this._sendAsEphemeral = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAsEphemeralInput() {
    return this._sendAsEphemeral;
  }

  // send_only_as_threaded_message - computed: false, optional: true, required: false
  private _sendOnlyAsThreadedMessage?: boolean | cdktf.IResolvable; 
  public get sendOnlyAsThreadedMessage() {
    return this.getBooleanAttribute('send_only_as_threaded_message');
  }
  public set sendOnlyAsThreadedMessage(value: boolean | cdktf.IResolvable) {
    this._sendOnlyAsThreadedMessage = value;
  }
  public resetSendOnlyAsThreadedMessage() {
    this._sendOnlyAsThreadedMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnlyAsThreadedMessageInput() {
    return this._sendOnlyAsThreadedMessage;
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

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // thread_ts - computed: false, optional: true, required: false
  private _threadTs?: string; 
  public get threadTs() {
    return this.getStringAttribute('thread_ts');
  }
  public set threadTs(value: string) {
    this._threadTs = value;
  }
  public resetThreadTs() {
    this._threadTs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadTsInput() {
    return this._threadTs;
  }

  // update_parent_message - computed: false, optional: true, required: false
  private _updateParentMessage?: boolean | cdktf.IResolvable; 
  public get updateParentMessage() {
    return this.getBooleanAttribute('update_parent_message');
  }
  public set updateParentMessage(value: boolean | cdktf.IResolvable) {
    this._updateParentMessage = value;
  }
  public resetUpdateParentMessage() {
    this._updateParentMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateParentMessageInput() {
    return this._updateParentMessage;
  }

  // channels - computed: false, optional: true, required: false
  private _channels = new WorkflowTaskSendSlackMessageTaskParamsChannelsList(this, "channels", false);
  public get channels() {
    return this._channels;
  }
  public putChannels(value: WorkflowTaskSendSlackMessageTaskParamsChannels[] | cdktf.IResolvable) {
    this._channels.internalValue = value;
  }
  public resetChannels() {
    this._channels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels.internalValue;
  }

  // slack_user_groups - computed: false, optional: true, required: false
  private _slackUserGroups = new WorkflowTaskSendSlackMessageTaskParamsSlackUserGroupsList(this, "slack_user_groups", false);
  public get slackUserGroups() {
    return this._slackUserGroups;
  }
  public putSlackUserGroups(value: WorkflowTaskSendSlackMessageTaskParamsSlackUserGroups[] | cdktf.IResolvable) {
    this._slackUserGroups.internalValue = value;
  }
  public resetSlackUserGroups() {
    this._slackUserGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackUserGroupsInput() {
    return this._slackUserGroups.internalValue;
  }

  // slack_users - computed: false, optional: true, required: false
  private _slackUsers = new WorkflowTaskSendSlackMessageTaskParamsSlackUsersList(this, "slack_users", false);
  public get slackUsers() {
    return this._slackUsers;
  }
  public putSlackUsers(value: WorkflowTaskSendSlackMessageTaskParamsSlackUsers[] | cdktf.IResolvable) {
    this._slackUsers.internalValue = value;
  }
  public resetSlackUsers() {
    this._slackUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackUsersInput() {
    return this._slackUsers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message rootly_workflow_task_send_slack_message}
*/
export class WorkflowTaskSendSlackMessage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_send_slack_message";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskSendSlackMessage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskSendSlackMessage to import
  * @param importFromId The id of the existing WorkflowTaskSendSlackMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskSendSlackMessage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_send_slack_message", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_send_slack_message rootly_workflow_task_send_slack_message} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskSendSlackMessageConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskSendSlackMessageConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_send_slack_message',
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
  private _taskParams = new WorkflowTaskSendSlackMessageTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskSendSlackMessageTaskParams) {
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
      task_params: workflowTaskSendSlackMessageTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskSendSlackMessageTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskSendSlackMessageTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
