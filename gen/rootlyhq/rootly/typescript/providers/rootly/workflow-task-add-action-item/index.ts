// https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskAddActionItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#enabled WorkflowTaskAddActionItem#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#id WorkflowTaskAddActionItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#name WorkflowTaskAddActionItem#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#position WorkflowTaskAddActionItem#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#skip_on_failure WorkflowTaskAddActionItem#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#workflow_id WorkflowTaskAddActionItem#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#task_params WorkflowTaskAddActionItem#task_params}
  */
  readonly taskParams: WorkflowTaskAddActionItemTaskParams;
}
export interface WorkflowTaskAddActionItemTaskParamsPostToSlackChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#id WorkflowTaskAddActionItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#name WorkflowTaskAddActionItem#name}
  */
  readonly name: string;
}

export function workflowTaskAddActionItemTaskParamsPostToSlackChannelsToTerraform(struct?: WorkflowTaskAddActionItemTaskParamsPostToSlackChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskAddActionItemTaskParamsPostToSlackChannelsToHclTerraform(struct?: WorkflowTaskAddActionItemTaskParamsPostToSlackChannels | cdktf.IResolvable): any {
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

export class WorkflowTaskAddActionItemTaskParamsPostToSlackChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkflowTaskAddActionItemTaskParamsPostToSlackChannels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkflowTaskAddActionItemTaskParamsPostToSlackChannels | cdktf.IResolvable | undefined) {
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

export class WorkflowTaskAddActionItemTaskParamsPostToSlackChannelsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskAddActionItemTaskParamsPostToSlackChannels[] | cdktf.IResolvable

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
  public get(index: number): WorkflowTaskAddActionItemTaskParamsPostToSlackChannelsOutputReference {
    return new WorkflowTaskAddActionItemTaskParamsPostToSlackChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskAddActionItemTaskParams {
  /**
  * Map must contain two fields, `id` and `name`.  The user this action item is assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#assigned_to_user WorkflowTaskAddActionItem#assigned_to_user}
  */
  readonly assignedToUser?: { [key: string]: string };
  /**
  * [DEPRECATED] Use assigned_to_user attribute instead. The user id this action item is assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#assigned_to_user_id WorkflowTaskAddActionItem#assigned_to_user_id}
  */
  readonly assignedToUserId?: string;
  /**
  * Attribute of the Incident to match against. Value must be one of `jira_issue_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#attribute_to_query_by WorkflowTaskAddActionItem#attribute_to_query_by}
  */
  readonly attributeToQueryBy?: string;
  /**
  * Custom field mappings. Can contain liquid markup and need to be valid JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#custom_fields_mapping WorkflowTaskAddActionItem#custom_fields_mapping}
  */
  readonly customFieldsMapping?: string;
  /**
  * The action item description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#description WorkflowTaskAddActionItem#description}
  */
  readonly description?: string;
  /**
  * The role id this action item is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#incident_role_id WorkflowTaskAddActionItem#incident_role_id}
  */
  readonly incidentRoleId?: string;
  /**
  * The action item kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#kind WorkflowTaskAddActionItem#kind}
  */
  readonly kind?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#post_to_incident_timeline WorkflowTaskAddActionItem#post_to_incident_timeline}
  */
  readonly postToIncidentTimeline?: boolean | cdktf.IResolvable;
  /**
  * The action item priority. Value must be one of `high`, `medium`, `low`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#priority WorkflowTaskAddActionItem#priority}
  */
  readonly priority: string;
  /**
  * Value that attribute_to_query_by to uses to match against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#query_value WorkflowTaskAddActionItem#query_value}
  */
  readonly queryValue?: string;
  /**
  * The action item status. Value must be one of `open`, `in_progress`, `cancelled`, `done`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#status WorkflowTaskAddActionItem#status}
  */
  readonly status: string;
  /**
  * The action item summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#summary WorkflowTaskAddActionItem#summary}
  */
  readonly summary: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#task_type WorkflowTaskAddActionItem#task_type}
  */
  readonly taskType?: string;
  /**
  * post_to_slack_channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#post_to_slack_channels WorkflowTaskAddActionItem#post_to_slack_channels}
  */
  readonly postToSlackChannels?: WorkflowTaskAddActionItemTaskParamsPostToSlackChannels[] | cdktf.IResolvable;
}

export function workflowTaskAddActionItemTaskParamsToTerraform(struct?: WorkflowTaskAddActionItemTaskParamsOutputReference | WorkflowTaskAddActionItemTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_to_user: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.assignedToUser),
    assigned_to_user_id: cdktf.stringToTerraform(struct!.assignedToUserId),
    attribute_to_query_by: cdktf.stringToTerraform(struct!.attributeToQueryBy),
    custom_fields_mapping: cdktf.stringToTerraform(struct!.customFieldsMapping),
    description: cdktf.stringToTerraform(struct!.description),
    incident_role_id: cdktf.stringToTerraform(struct!.incidentRoleId),
    kind: cdktf.stringToTerraform(struct!.kind),
    post_to_incident_timeline: cdktf.booleanToTerraform(struct!.postToIncidentTimeline),
    priority: cdktf.stringToTerraform(struct!.priority),
    query_value: cdktf.stringToTerraform(struct!.queryValue),
    status: cdktf.stringToTerraform(struct!.status),
    summary: cdktf.stringToTerraform(struct!.summary),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    post_to_slack_channels: cdktf.listMapper(workflowTaskAddActionItemTaskParamsPostToSlackChannelsToTerraform, true)(struct!.postToSlackChannels),
  }
}


export function workflowTaskAddActionItemTaskParamsToHclTerraform(struct?: WorkflowTaskAddActionItemTaskParamsOutputReference | WorkflowTaskAddActionItemTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_to_user: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.assignedToUser),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    assigned_to_user_id: {
      value: cdktf.stringToHclTerraform(struct!.assignedToUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_to_query_by: {
      value: cdktf.stringToHclTerraform(struct!.attributeToQueryBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_fields_mapping: {
      value: cdktf.stringToHclTerraform(struct!.customFieldsMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_role_id: {
      value: cdktf.stringToHclTerraform(struct!.incidentRoleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_to_incident_timeline: {
      value: cdktf.booleanToHclTerraform(struct!.postToIncidentTimeline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_value: {
      value: cdktf.stringToHclTerraform(struct!.queryValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
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
    post_to_slack_channels: {
      value: cdktf.listMapperHcl(workflowTaskAddActionItemTaskParamsPostToSlackChannelsToHclTerraform, true)(struct!.postToSlackChannels),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskAddActionItemTaskParamsPostToSlackChannelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskAddActionItemTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskAddActionItemTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedToUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedToUser = this._assignedToUser;
    }
    if (this._assignedToUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedToUserId = this._assignedToUserId;
    }
    if (this._attributeToQueryBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeToQueryBy = this._attributeToQueryBy;
    }
    if (this._customFieldsMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFieldsMapping = this._customFieldsMapping;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._incidentRoleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentRoleId = this._incidentRoleId;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._postToIncidentTimeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.postToIncidentTimeline = this._postToIncidentTimeline;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._queryValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryValue = this._queryValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._postToSlackChannels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postToSlackChannels = this._postToSlackChannels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskAddActionItemTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedToUser = undefined;
      this._assignedToUserId = undefined;
      this._attributeToQueryBy = undefined;
      this._customFieldsMapping = undefined;
      this._description = undefined;
      this._incidentRoleId = undefined;
      this._kind = undefined;
      this._postToIncidentTimeline = undefined;
      this._priority = undefined;
      this._queryValue = undefined;
      this._status = undefined;
      this._summary = undefined;
      this._taskType = undefined;
      this._postToSlackChannels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedToUser = value.assignedToUser;
      this._assignedToUserId = value.assignedToUserId;
      this._attributeToQueryBy = value.attributeToQueryBy;
      this._customFieldsMapping = value.customFieldsMapping;
      this._description = value.description;
      this._incidentRoleId = value.incidentRoleId;
      this._kind = value.kind;
      this._postToIncidentTimeline = value.postToIncidentTimeline;
      this._priority = value.priority;
      this._queryValue = value.queryValue;
      this._status = value.status;
      this._summary = value.summary;
      this._taskType = value.taskType;
      this._postToSlackChannels.internalValue = value.postToSlackChannels;
    }
  }

  // assigned_to_user - computed: false, optional: true, required: false
  private _assignedToUser?: { [key: string]: string }; 
  public get assignedToUser() {
    return this.getStringMapAttribute('assigned_to_user');
  }
  public set assignedToUser(value: { [key: string]: string }) {
    this._assignedToUser = value;
  }
  public resetAssignedToUser() {
    this._assignedToUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedToUserInput() {
    return this._assignedToUser;
  }

  // assigned_to_user_id - computed: false, optional: true, required: false
  private _assignedToUserId?: string; 
  public get assignedToUserId() {
    return this.getStringAttribute('assigned_to_user_id');
  }
  public set assignedToUserId(value: string) {
    this._assignedToUserId = value;
  }
  public resetAssignedToUserId() {
    this._assignedToUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedToUserIdInput() {
    return this._assignedToUserId;
  }

  // attribute_to_query_by - computed: false, optional: true, required: false
  private _attributeToQueryBy?: string; 
  public get attributeToQueryBy() {
    return this.getStringAttribute('attribute_to_query_by');
  }
  public set attributeToQueryBy(value: string) {
    this._attributeToQueryBy = value;
  }
  public resetAttributeToQueryBy() {
    this._attributeToQueryBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeToQueryByInput() {
    return this._attributeToQueryBy;
  }

  // custom_fields_mapping - computed: false, optional: true, required: false
  private _customFieldsMapping?: string; 
  public get customFieldsMapping() {
    return this.getStringAttribute('custom_fields_mapping');
  }
  public set customFieldsMapping(value: string) {
    this._customFieldsMapping = value;
  }
  public resetCustomFieldsMapping() {
    this._customFieldsMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsMappingInput() {
    return this._customFieldsMapping;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // incident_role_id - computed: false, optional: true, required: false
  private _incidentRoleId?: string; 
  public get incidentRoleId() {
    return this.getStringAttribute('incident_role_id');
  }
  public set incidentRoleId(value: string) {
    this._incidentRoleId = value;
  }
  public resetIncidentRoleId() {
    this._incidentRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentRoleIdInput() {
    return this._incidentRoleId;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // post_to_incident_timeline - computed: false, optional: true, required: false
  private _postToIncidentTimeline?: boolean | cdktf.IResolvable; 
  public get postToIncidentTimeline() {
    return this.getBooleanAttribute('post_to_incident_timeline');
  }
  public set postToIncidentTimeline(value: boolean | cdktf.IResolvable) {
    this._postToIncidentTimeline = value;
  }
  public resetPostToIncidentTimeline() {
    this._postToIncidentTimeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postToIncidentTimelineInput() {
    return this._postToIncidentTimeline;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // query_value - computed: false, optional: true, required: false
  private _queryValue?: string; 
  public get queryValue() {
    return this.getStringAttribute('query_value');
  }
  public set queryValue(value: string) {
    this._queryValue = value;
  }
  public resetQueryValue() {
    this._queryValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryValueInput() {
    return this._queryValue;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
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

  // post_to_slack_channels - computed: false, optional: true, required: false
  private _postToSlackChannels = new WorkflowTaskAddActionItemTaskParamsPostToSlackChannelsList(this, "post_to_slack_channels", false);
  public get postToSlackChannels() {
    return this._postToSlackChannels;
  }
  public putPostToSlackChannels(value: WorkflowTaskAddActionItemTaskParamsPostToSlackChannels[] | cdktf.IResolvable) {
    this._postToSlackChannels.internalValue = value;
  }
  public resetPostToSlackChannels() {
    this._postToSlackChannels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postToSlackChannelsInput() {
    return this._postToSlackChannels.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item rootly_workflow_task_add_action_item}
*/
export class WorkflowTaskAddActionItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_add_action_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskAddActionItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskAddActionItem to import
  * @param importFromId The id of the existing WorkflowTaskAddActionItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskAddActionItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_add_action_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_add_action_item rootly_workflow_task_add_action_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskAddActionItemConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskAddActionItemConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_add_action_item',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
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
  private _taskParams = new WorkflowTaskAddActionItemTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskAddActionItemTaskParams) {
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
      task_params: workflowTaskAddActionItemTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskAddActionItemTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskAddActionItemTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
