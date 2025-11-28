// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskUpdateActionItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#enabled WorkflowTaskUpdateActionItem#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#id WorkflowTaskUpdateActionItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#name WorkflowTaskUpdateActionItem#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#position WorkflowTaskUpdateActionItem#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#skip_on_failure WorkflowTaskUpdateActionItem#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#workflow_id WorkflowTaskUpdateActionItem#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#task_params WorkflowTaskUpdateActionItem#task_params}
  */
  readonly taskParams: WorkflowTaskUpdateActionItemTaskParams;
}
export interface WorkflowTaskUpdateActionItemTaskParams {
  /**
  * Map must contain two fields, `id` and `name`.  The user this action item is assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#assigned_to_user WorkflowTaskUpdateActionItem#assigned_to_user}
  */
  readonly assignedToUser?: { [key: string]: string };
  /**
  * [DEPRECATED] Use assigned_to_user attribute instead. The user id this action item is assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#assigned_to_user_id WorkflowTaskUpdateActionItem#assigned_to_user_id}
  */
  readonly assignedToUserId?: string;
  /**
  * Attribute of the action item to match against. Value must be one of `id`, `jira_issue_id`, `asana_task_id`, `shortcut_task_id`, `linear_issue_id`, `zendesk_ticket_id`, `motion_task_id`, `trello_card_id`, `airtable_record_id`, `shortcut_story_id`, `github_issue_id`, `gitlab_issue_id`, `freshservice_ticket_id`, `freshservice_task_id`, `clickup_task_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#attribute_to_query_by WorkflowTaskUpdateActionItem#attribute_to_query_by}
  */
  readonly attributeToQueryBy: string;
  /**
  * Custom field mappings. Can contain liquid markup and need to be valid JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#custom_fields_mapping WorkflowTaskUpdateActionItem#custom_fields_mapping}
  */
  readonly customFieldsMapping?: string;
  /**
  * The action item description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#description WorkflowTaskUpdateActionItem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#group_ids WorkflowTaskUpdateActionItem#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#post_to_incident_timeline WorkflowTaskUpdateActionItem#post_to_incident_timeline}
  */
  readonly postToIncidentTimeline?: boolean | cdktf.IResolvable;
  /**
  * The action item priority. Value must be one of `high`, `medium`, `low`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#priority WorkflowTaskUpdateActionItem#priority}
  */
  readonly priority?: string;
  /**
  * Value that attribute_to_query_by to uses to match against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#query_value WorkflowTaskUpdateActionItem#query_value}
  */
  readonly queryValue: string;
  /**
  * The action item status. Value must be one of `open`, `in_progress`, `cancelled`, `done`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#status WorkflowTaskUpdateActionItem#status}
  */
  readonly status?: string;
  /**
  * Brief description of the action item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#summary WorkflowTaskUpdateActionItem#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#task_type WorkflowTaskUpdateActionItem#task_type}
  */
  readonly taskType?: string;
}

export function workflowTaskUpdateActionItemTaskParamsToTerraform(struct?: WorkflowTaskUpdateActionItemTaskParamsOutputReference | WorkflowTaskUpdateActionItemTaskParams): any {
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
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    post_to_incident_timeline: cdktf.booleanToTerraform(struct!.postToIncidentTimeline),
    priority: cdktf.stringToTerraform(struct!.priority),
    query_value: cdktf.stringToTerraform(struct!.queryValue),
    status: cdktf.stringToTerraform(struct!.status),
    summary: cdktf.stringToTerraform(struct!.summary),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


export function workflowTaskUpdateActionItemTaskParamsToHclTerraform(struct?: WorkflowTaskUpdateActionItemTaskParamsOutputReference | WorkflowTaskUpdateActionItemTaskParams): any {
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
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskUpdateActionItemTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskUpdateActionItemTaskParams | undefined {
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
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskUpdateActionItemTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedToUser = undefined;
      this._assignedToUserId = undefined;
      this._attributeToQueryBy = undefined;
      this._customFieldsMapping = undefined;
      this._description = undefined;
      this._groupIds = undefined;
      this._postToIncidentTimeline = undefined;
      this._priority = undefined;
      this._queryValue = undefined;
      this._status = undefined;
      this._summary = undefined;
      this._taskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedToUser = value.assignedToUser;
      this._assignedToUserId = value.assignedToUserId;
      this._attributeToQueryBy = value.attributeToQueryBy;
      this._customFieldsMapping = value.customFieldsMapping;
      this._description = value.description;
      this._groupIds = value.groupIds;
      this._postToIncidentTimeline = value.postToIncidentTimeline;
      this._priority = value.priority;
      this._queryValue = value.queryValue;
      this._status = value.status;
      this._summary = value.summary;
      this._taskType = value.taskType;
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

  // attribute_to_query_by - computed: false, optional: false, required: true
  private _attributeToQueryBy?: string; 
  public get attributeToQueryBy() {
    return this.getStringAttribute('attribute_to_query_by');
  }
  public set attributeToQueryBy(value: string) {
    this._attributeToQueryBy = value;
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

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // query_value - computed: false, optional: false, required: true
  private _queryValue?: string; 
  public get queryValue() {
    return this.getStringAttribute('query_value');
  }
  public set queryValue(value: string) {
    this._queryValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryValueInput() {
    return this._queryValue;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item rootly_workflow_task_update_action_item}
*/
export class WorkflowTaskUpdateActionItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_update_action_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskUpdateActionItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskUpdateActionItem to import
  * @param importFromId The id of the existing WorkflowTaskUpdateActionItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskUpdateActionItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_update_action_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_update_action_item rootly_workflow_task_update_action_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskUpdateActionItemConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskUpdateActionItemConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_update_action_item',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.9',
        providerVersionConstraint: '4.3.9'
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
  private _taskParams = new WorkflowTaskUpdateActionItemTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskUpdateActionItemTaskParams) {
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
      task_params: workflowTaskUpdateActionItemTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskUpdateActionItemTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskUpdateActionItemTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
