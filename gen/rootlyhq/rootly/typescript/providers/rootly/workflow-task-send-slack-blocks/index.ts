// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskSendSlackBlocksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#enabled WorkflowTaskSendSlackBlocks#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#id WorkflowTaskSendSlackBlocks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#name WorkflowTaskSendSlackBlocks#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#position WorkflowTaskSendSlackBlocks#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#skip_on_failure WorkflowTaskSendSlackBlocks#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#workflow_id WorkflowTaskSendSlackBlocks#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#task_params WorkflowTaskSendSlackBlocks#task_params}
  */
  readonly taskParams: WorkflowTaskSendSlackBlocksTaskParams;
}
export interface WorkflowTaskSendSlackBlocksTaskParamsChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#id WorkflowTaskSendSlackBlocks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#name WorkflowTaskSendSlackBlocks#name}
  */
  readonly name: string;
}

export function workflowTaskSendSlackBlocksTaskParamsChannelsToTerraform(struct?: WorkflowTaskSendSlackBlocksTaskParamsChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskSendSlackBlocksTaskParamsChannelsToHclTerraform(struct?: WorkflowTaskSendSlackBlocksTaskParamsChannels | cdktf.IResolvable): any {
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

export class WorkflowTaskSendSlackBlocksTaskParamsChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskSendSlackBlocksTaskParamsChannels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskSendSlackBlocksTaskParamsChannels | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskSendSlackBlocksTaskParamsChannelsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskSendSlackBlocksTaskParamsChannels[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskSendSlackBlocksTaskParamsChannelsOutputReference {
    return new WorkflowTaskSendSlackBlocksTaskParamsChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#id WorkflowTaskSendSlackBlocks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#name WorkflowTaskSendSlackBlocks#name}
  */
  readonly name: string;
}

export function workflowTaskSendSlackBlocksTaskParamsSlackUserGroupsToTerraform(struct?: WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskSendSlackBlocksTaskParamsSlackUserGroupsToHclTerraform(struct?: WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroups | cdktf.IResolvable): any {
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

export class WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroups | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroupsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroups[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroupsOutputReference {
    return new WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskSendSlackBlocksTaskParamsSlackUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#id WorkflowTaskSendSlackBlocks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#name WorkflowTaskSendSlackBlocks#name}
  */
  readonly name: string;
}

export function workflowTaskSendSlackBlocksTaskParamsSlackUsersToTerraform(struct?: WorkflowTaskSendSlackBlocksTaskParamsSlackUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskSendSlackBlocksTaskParamsSlackUsersToHclTerraform(struct?: WorkflowTaskSendSlackBlocksTaskParamsSlackUsers | cdktf.IResolvable): any {
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

export class WorkflowTaskSendSlackBlocksTaskParamsSlackUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskSendSlackBlocksTaskParamsSlackUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskSendSlackBlocksTaskParamsSlackUsers | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskSendSlackBlocksTaskParamsSlackUsersList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskSendSlackBlocksTaskParamsSlackUsers[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskSendSlackBlocksTaskParamsSlackUsersOutputReference {
    return new WorkflowTaskSendSlackBlocksTaskParamsSlackUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskSendSlackBlocksTaskParams {
  /**
  * Support liquid markup. Needs to be a valid JSON string after liquid is parsed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#attachments WorkflowTaskSendSlackBlocks#attachments}
  */
  readonly attachments?: string;
  /**
  * Support liquid markup. Needs to be a valid JSON string after liquid is parsed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#blocks WorkflowTaskSendSlackBlocks#blocks}
  */
  readonly blocks: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#broadcast_thread_reply_to_channel WorkflowTaskSendSlackBlocks#broadcast_thread_reply_to_channel}
  */
  readonly broadcastThreadReplyToChannel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#message WorkflowTaskSendSlackBlocks#message}
  */
  readonly message?: string;
  /**
  * Map must contain two fields, `id` and `name`. A hash where [id] is the task id of the parent task that sent a message, and [name] is the name of the parent task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#parent_message_thread_task WorkflowTaskSendSlackBlocks#parent_message_thread_task}
  */
  readonly parentMessageThreadTask?: { [key: string]: string };
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#pin_to_channel WorkflowTaskSendSlackBlocks#pin_to_channel}
  */
  readonly pinToChannel?: boolean | cdktf.IResolvable;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#send_as_ephemeral WorkflowTaskSendSlackBlocks#send_as_ephemeral}
  */
  readonly sendAsEphemeral?: boolean | cdktf.IResolvable;
  /**
  * When set to true, if the parent for this threaded message cannot be found the message will be skipped.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#send_only_as_threaded_message WorkflowTaskSendSlackBlocks#send_only_as_threaded_message}
  */
  readonly sendOnlyAsThreadedMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#task_type WorkflowTaskSendSlackBlocks#task_type}
  */
  readonly taskType?: string;
  /**
  * The thread to send the message into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#thread_ts WorkflowTaskSendSlackBlocks#thread_ts}
  */
  readonly threadTs?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#update_parent_message WorkflowTaskSendSlackBlocks#update_parent_message}
  */
  readonly updateParentMessage?: boolean | cdktf.IResolvable;
  /**
  * channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#channels WorkflowTaskSendSlackBlocks#channels}
  */
  readonly channels?: WorkflowTaskSendSlackBlocksTaskParamsChannels[] | cdktf.IResolvable;
  /**
  * slack_user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#slack_user_groups WorkflowTaskSendSlackBlocks#slack_user_groups}
  */
  readonly slackUserGroups?: WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroups[] | cdktf.IResolvable;
  /**
  * slack_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#slack_users WorkflowTaskSendSlackBlocks#slack_users}
  */
  readonly slackUsers?: WorkflowTaskSendSlackBlocksTaskParamsSlackUsers[] | cdktf.IResolvable;
}

export function workflowTaskSendSlackBlocksTaskParamsToTerraform(struct?: WorkflowTaskSendSlackBlocksTaskParamsOutputReference | WorkflowTaskSendSlackBlocksTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachments: cdktf.stringToTerraform(struct!.attachments),
    blocks: cdktf.stringToTerraform(struct!.blocks),
    broadcast_thread_reply_to_channel: cdktf.booleanToTerraform(struct!.broadcastThreadReplyToChannel),
    message: cdktf.stringToTerraform(struct!.message),
    parent_message_thread_task: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parentMessageThreadTask),
    pin_to_channel: cdktf.booleanToTerraform(struct!.pinToChannel),
    send_as_ephemeral: cdktf.booleanToTerraform(struct!.sendAsEphemeral),
    send_only_as_threaded_message: cdktf.booleanToTerraform(struct!.sendOnlyAsThreadedMessage),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    thread_ts: cdktf.stringToTerraform(struct!.threadTs),
    update_parent_message: cdktf.booleanToTerraform(struct!.updateParentMessage),
    channels: cdktf.listMapper(workflowTaskSendSlackBlocksTaskParamsChannelsToTerraform, true)(struct!.channels),
    slack_user_groups: cdktf.listMapper(workflowTaskSendSlackBlocksTaskParamsSlackUserGroupsToTerraform, true)(struct!.slackUserGroups),
    slack_users: cdktf.listMapper(workflowTaskSendSlackBlocksTaskParamsSlackUsersToTerraform, true)(struct!.slackUsers),
  }
}


export function workflowTaskSendSlackBlocksTaskParamsToHclTerraform(struct?: WorkflowTaskSendSlackBlocksTaskParamsOutputReference | WorkflowTaskSendSlackBlocksTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachments: {
      value: cdktf.stringToHclTerraform(struct!.attachments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocks: {
      value: cdktf.stringToHclTerraform(struct!.blocks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broadcast_thread_reply_to_channel: {
      value: cdktf.booleanToHclTerraform(struct!.broadcastThreadReplyToChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
      value: cdktf.listMapperHcl(workflowTaskSendSlackBlocksTaskParamsChannelsToHclTerraform, true)(struct!.channels),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskSendSlackBlocksTaskParamsChannelsList",
    },
    slack_user_groups: {
      value: cdktf.listMapperHcl(workflowTaskSendSlackBlocksTaskParamsSlackUserGroupsToHclTerraform, true)(struct!.slackUserGroups),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroupsList",
    },
    slack_users: {
      value: cdktf.listMapperHcl(workflowTaskSendSlackBlocksTaskParamsSlackUsersToHclTerraform, true)(struct!.slackUsers),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskSendSlackBlocksTaskParamsSlackUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskSendSlackBlocksTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskSendSlackBlocksTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachments = this._attachments;
    }
    if (this._blocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks;
    }
    if (this._broadcastThreadReplyToChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastThreadReplyToChannel = this._broadcastThreadReplyToChannel;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
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

  public set internalValue(value: WorkflowTaskSendSlackBlocksTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attachments = undefined;
      this._blocks = undefined;
      this._broadcastThreadReplyToChannel = undefined;
      this._message = undefined;
      this._parentMessageThreadTask = undefined;
      this._pinToChannel = undefined;
      this._sendAsEphemeral = undefined;
      this._sendOnlyAsThreadedMessage = undefined;
      this._taskType = undefined;
      this._threadTs = undefined;
      this._updateParentMessage = undefined;
      this._channels.internalValue = undefined;
      this._slackUserGroups.internalValue = undefined;
      this._slackUsers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attachments = value.attachments;
      this._blocks = value.blocks;
      this._broadcastThreadReplyToChannel = value.broadcastThreadReplyToChannel;
      this._message = value.message;
      this._parentMessageThreadTask = value.parentMessageThreadTask;
      this._pinToChannel = value.pinToChannel;
      this._sendAsEphemeral = value.sendAsEphemeral;
      this._sendOnlyAsThreadedMessage = value.sendOnlyAsThreadedMessage;
      this._taskType = value.taskType;
      this._threadTs = value.threadTs;
      this._updateParentMessage = value.updateParentMessage;
      this._channels.internalValue = value.channels;
      this._slackUserGroups.internalValue = value.slackUserGroups;
      this._slackUsers.internalValue = value.slackUsers;
    }
  }

  // attachments - computed: false, optional: true, required: false
  private _attachments?: string; 
  public get attachments() {
    return this.getStringAttribute('attachments');
  }
  public set attachments(value: string) {
    this._attachments = value;
  }
  public resetAttachments() {
    this._attachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments;
  }

  // blocks - computed: false, optional: false, required: true
  private _blocks?: string; 
  public get blocks() {
    return this.getStringAttribute('blocks');
  }
  public set blocks(value: string) {
    this._blocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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
  private _channels = new WorkflowTaskSendSlackBlocksTaskParamsChannelsList(this, "channels", false);
  public get channels() {
    return this._channels;
  }
  public putChannels(value: WorkflowTaskSendSlackBlocksTaskParamsChannels[] | cdktf.IResolvable) {
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
  private _slackUserGroups = new WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroupsList(this, "slack_user_groups", false);
  public get slackUserGroups() {
    return this._slackUserGroups;
  }
  public putSlackUserGroups(value: WorkflowTaskSendSlackBlocksTaskParamsSlackUserGroups[] | cdktf.IResolvable) {
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
  private _slackUsers = new WorkflowTaskSendSlackBlocksTaskParamsSlackUsersList(this, "slack_users", false);
  public get slackUsers() {
    return this._slackUsers;
  }
  public putSlackUsers(value: WorkflowTaskSendSlackBlocksTaskParamsSlackUsers[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks rootly_workflow_task_send_slack_blocks}
*/
export class WorkflowTaskSendSlackBlocks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_send_slack_blocks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskSendSlackBlocks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskSendSlackBlocks to import
  * @param importFromId The id of the existing WorkflowTaskSendSlackBlocks that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskSendSlackBlocks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_send_slack_blocks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_send_slack_blocks rootly_workflow_task_send_slack_blocks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskSendSlackBlocksConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskSendSlackBlocksConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_send_slack_blocks',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.0',
        providerVersionConstraint: '5.2.0'
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
  private _taskParams = new WorkflowTaskSendSlackBlocksTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskSendSlackBlocksTaskParams) {
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
      task_params: workflowTaskSendSlackBlocksTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskSendSlackBlocksTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskSendSlackBlocksTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
