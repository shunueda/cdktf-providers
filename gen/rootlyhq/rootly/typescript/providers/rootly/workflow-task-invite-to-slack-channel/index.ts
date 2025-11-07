// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskInviteToSlackChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#enabled WorkflowTaskInviteToSlackChannel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#id WorkflowTaskInviteToSlackChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#name WorkflowTaskInviteToSlackChannel#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#position WorkflowTaskInviteToSlackChannel#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#skip_on_failure WorkflowTaskInviteToSlackChannel#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#workflow_id WorkflowTaskInviteToSlackChannel#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#task_params WorkflowTaskInviteToSlackChannel#task_params}
  */
  readonly taskParams: WorkflowTaskInviteToSlackChannelTaskParams;
}
export interface WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#id WorkflowTaskInviteToSlackChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#name WorkflowTaskInviteToSlackChannel#name}
  */
  readonly name: string;
}

export function workflowTaskInviteToSlackChannelTaskParamsSlackUserGroupsToTerraform(struct?: WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskInviteToSlackChannelTaskParamsSlackUserGroupsToHclTerraform(struct?: WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroups | cdktf.IResolvable): any {
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

export class WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroups | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroupsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroups[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroupsOutputReference {
    return new WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskInviteToSlackChannelTaskParamsSlackUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#id WorkflowTaskInviteToSlackChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#name WorkflowTaskInviteToSlackChannel#name}
  */
  readonly name: string;
}

export function workflowTaskInviteToSlackChannelTaskParamsSlackUsersToTerraform(struct?: WorkflowTaskInviteToSlackChannelTaskParamsSlackUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskInviteToSlackChannelTaskParamsSlackUsersToHclTerraform(struct?: WorkflowTaskInviteToSlackChannelTaskParamsSlackUsers | cdktf.IResolvable): any {
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

export class WorkflowTaskInviteToSlackChannelTaskParamsSlackUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskInviteToSlackChannelTaskParamsSlackUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskInviteToSlackChannelTaskParamsSlackUsers | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskInviteToSlackChannelTaskParamsSlackUsersList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskInviteToSlackChannelTaskParamsSlackUsers[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskInviteToSlackChannelTaskParamsSlackUsersOutputReference {
    return new WorkflowTaskInviteToSlackChannelTaskParamsSlackUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskInviteToSlackChannelTaskParams {
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#channel WorkflowTaskInviteToSlackChannel#channel}
  */
  readonly channel: { [key: string]: string };
  /**
  * Comma separated list of emails to invite to the channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#slack_emails WorkflowTaskInviteToSlackChannel#slack_emails}
  */
  readonly slackEmails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#task_type WorkflowTaskInviteToSlackChannel#task_type}
  */
  readonly taskType?: string;
  /**
  * slack_user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#slack_user_groups WorkflowTaskInviteToSlackChannel#slack_user_groups}
  */
  readonly slackUserGroups?: WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroups[] | cdktf.IResolvable;
  /**
  * slack_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#slack_users WorkflowTaskInviteToSlackChannel#slack_users}
  */
  readonly slackUsers?: WorkflowTaskInviteToSlackChannelTaskParamsSlackUsers[] | cdktf.IResolvable;
}

export function workflowTaskInviteToSlackChannelTaskParamsToTerraform(struct?: WorkflowTaskInviteToSlackChannelTaskParamsOutputReference | WorkflowTaskInviteToSlackChannelTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.channel),
    slack_emails: cdktf.stringToTerraform(struct!.slackEmails),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    slack_user_groups: cdktf.listMapper(workflowTaskInviteToSlackChannelTaskParamsSlackUserGroupsToTerraform, true)(struct!.slackUserGroups),
    slack_users: cdktf.listMapper(workflowTaskInviteToSlackChannelTaskParamsSlackUsersToTerraform, true)(struct!.slackUsers),
  }
}


export function workflowTaskInviteToSlackChannelTaskParamsToHclTerraform(struct?: WorkflowTaskInviteToSlackChannelTaskParamsOutputReference | WorkflowTaskInviteToSlackChannelTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.channel),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    slack_emails: {
      value: cdktf.stringToHclTerraform(struct!.slackEmails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slack_user_groups: {
      value: cdktf.listMapperHcl(workflowTaskInviteToSlackChannelTaskParamsSlackUserGroupsToHclTerraform, true)(struct!.slackUserGroups),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroupsList",
    },
    slack_users: {
      value: cdktf.listMapperHcl(workflowTaskInviteToSlackChannelTaskParamsSlackUsersToHclTerraform, true)(struct!.slackUsers),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskInviteToSlackChannelTaskParamsSlackUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskInviteToSlackChannelTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskInviteToSlackChannelTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._slackEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackEmails = this._slackEmails;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
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

  public set internalValue(value: WorkflowTaskInviteToSlackChannelTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
      this._slackEmails = undefined;
      this._taskType = undefined;
      this._slackUserGroups.internalValue = undefined;
      this._slackUsers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
      this._slackEmails = value.slackEmails;
      this._taskType = value.taskType;
      this._slackUserGroups.internalValue = value.slackUserGroups;
      this._slackUsers.internalValue = value.slackUsers;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: { [key: string]: string }; 
  public get channel() {
    return this.getStringMapAttribute('channel');
  }
  public set channel(value: { [key: string]: string }) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // slack_emails - computed: false, optional: true, required: false
  private _slackEmails?: string; 
  public get slackEmails() {
    return this.getStringAttribute('slack_emails');
  }
  public set slackEmails(value: string) {
    this._slackEmails = value;
  }
  public resetSlackEmails() {
    this._slackEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackEmailsInput() {
    return this._slackEmails;
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

  // slack_user_groups - computed: false, optional: true, required: false
  private _slackUserGroups = new WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroupsList(this, "slack_user_groups", false);
  public get slackUserGroups() {
    return this._slackUserGroups;
  }
  public putSlackUserGroups(value: WorkflowTaskInviteToSlackChannelTaskParamsSlackUserGroups[] | cdktf.IResolvable) {
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
  private _slackUsers = new WorkflowTaskInviteToSlackChannelTaskParamsSlackUsersList(this, "slack_users", false);
  public get slackUsers() {
    return this._slackUsers;
  }
  public putSlackUsers(value: WorkflowTaskInviteToSlackChannelTaskParamsSlackUsers[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel rootly_workflow_task_invite_to_slack_channel}
*/
export class WorkflowTaskInviteToSlackChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_invite_to_slack_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskInviteToSlackChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskInviteToSlackChannel to import
  * @param importFromId The id of the existing WorkflowTaskInviteToSlackChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskInviteToSlackChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_invite_to_slack_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_invite_to_slack_channel rootly_workflow_task_invite_to_slack_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskInviteToSlackChannelConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskInviteToSlackChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_invite_to_slack_channel',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.7'
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
  private _taskParams = new WorkflowTaskInviteToSlackChannelTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskInviteToSlackChannelTaskParams) {
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
      task_params: workflowTaskInviteToSlackChannelTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskInviteToSlackChannelTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskInviteToSlackChannelTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
