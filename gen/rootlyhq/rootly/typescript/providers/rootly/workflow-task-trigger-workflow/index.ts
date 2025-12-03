// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskTriggerWorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#enabled WorkflowTaskTriggerWorkflow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#id WorkflowTaskTriggerWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#name WorkflowTaskTriggerWorkflow#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#position WorkflowTaskTriggerWorkflow#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#skip_on_failure WorkflowTaskTriggerWorkflow#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#workflow_id WorkflowTaskTriggerWorkflow#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#task_params WorkflowTaskTriggerWorkflow#task_params}
  */
  readonly taskParams: WorkflowTaskTriggerWorkflowTaskParams;
}
export interface WorkflowTaskTriggerWorkflowTaskParams {
  /**
  * ["(incident) kind can only match [:id, :slug, :sequential_id, :pagerduty_incident_id, :opsgenie_incident_id, :victor_ops_incident_id, :jira_issue_id, :asana_task_id, :shortcut_task_id, :linear_issue_id, :zendesk_ticket_id, :motion_task_id, :trello_card_id, :airtable_record_id, :shortcut_story_id, :github_issue_id, :freshservice_ticket_id, :freshservice_task_id, :clickup_task_id]", "(post_mortem) kind can only match [:id]", "(action_item) kind can only match [:id, :jira_issue_id, :asana_task_id, :shortcut_task_id, :linear_issue_id, :zendesk_ticket_id, :motion_task_id, :trello_card_id, :airtable_record_id, :shortcut_story_id, :github_issue_id, :freshservice_ticket_id, :freshservice_task_id, :clickup_task_id]", "(pulse) kind can only match [:id]", "(alert) kind can only match [:id]"]. Value must be one of `id`, `slug`, `sequential_id`, `pagerduty_incident_id`, `opsgenie_incident_id`, `victor_ops_incident_id`, `jira_issue_id`, `asana_task_id`, `shortcut_task_id`, `linear_issue_id`, `zendesk_ticket_id`, `motion_task_id`, `trello_card_id`, `airtable_record_id`, `shortcut_story_id`, `github_issue_id`, `freshservice_ticket_id`, `freshservice_task_id`, `clickup_task_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#attribute_to_query_by WorkflowTaskTriggerWorkflow#attribute_to_query_by}
  */
  readonly attributeToQueryBy: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#check_workflow_conditions WorkflowTaskTriggerWorkflow#check_workflow_conditions}
  */
  readonly checkWorkflowConditions?: boolean | cdktf.IResolvable;
  /**
  * Value must be one of `incident`, `post_mortem`, `action_item`, `pulse`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#kind WorkflowTaskTriggerWorkflow#kind}
  */
  readonly kind: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#resource WorkflowTaskTriggerWorkflow#resource}
  */
  readonly resource: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#task_type WorkflowTaskTriggerWorkflow#task_type}
  */
  readonly taskType?: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#workflow WorkflowTaskTriggerWorkflow#workflow}
  */
  readonly workflow: { [key: string]: string };
}

export function workflowTaskTriggerWorkflowTaskParamsToTerraform(struct?: WorkflowTaskTriggerWorkflowTaskParamsOutputReference | WorkflowTaskTriggerWorkflowTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_to_query_by: cdktf.stringToTerraform(struct!.attributeToQueryBy),
    check_workflow_conditions: cdktf.booleanToTerraform(struct!.checkWorkflowConditions),
    kind: cdktf.stringToTerraform(struct!.kind),
    resource: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resource),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    workflow: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.workflow),
  }
}


export function workflowTaskTriggerWorkflowTaskParamsToHclTerraform(struct?: WorkflowTaskTriggerWorkflowTaskParamsOutputReference | WorkflowTaskTriggerWorkflowTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_to_query_by: {
      value: cdktf.stringToHclTerraform(struct!.attributeToQueryBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_workflow_conditions: {
      value: cdktf.booleanToHclTerraform(struct!.checkWorkflowConditions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resource),
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
    workflow: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.workflow),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskTriggerWorkflowTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskTriggerWorkflowTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeToQueryBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeToQueryBy = this._attributeToQueryBy;
    }
    if (this._checkWorkflowConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkWorkflowConditions = this._checkWorkflowConditions;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._workflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskTriggerWorkflowTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributeToQueryBy = undefined;
      this._checkWorkflowConditions = undefined;
      this._kind = undefined;
      this._resource = undefined;
      this._taskType = undefined;
      this._workflow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributeToQueryBy = value.attributeToQueryBy;
      this._checkWorkflowConditions = value.checkWorkflowConditions;
      this._kind = value.kind;
      this._resource = value.resource;
      this._taskType = value.taskType;
      this._workflow = value.workflow;
    }
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

  // check_workflow_conditions - computed: false, optional: true, required: false
  private _checkWorkflowConditions?: boolean | cdktf.IResolvable; 
  public get checkWorkflowConditions() {
    return this.getBooleanAttribute('check_workflow_conditions');
  }
  public set checkWorkflowConditions(value: boolean | cdktf.IResolvable) {
    this._checkWorkflowConditions = value;
  }
  public resetCheckWorkflowConditions() {
    this._checkWorkflowConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkWorkflowConditionsInput() {
    return this._checkWorkflowConditions;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: { [key: string]: string }; 
  public get resource() {
    return this.getStringMapAttribute('resource');
  }
  public set resource(value: { [key: string]: string }) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
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

  // workflow - computed: false, optional: false, required: true
  private _workflow?: { [key: string]: string }; 
  public get workflow() {
    return this.getStringMapAttribute('workflow');
  }
  public set workflow(value: { [key: string]: string }) {
    this._workflow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow rootly_workflow_task_trigger_workflow}
*/
export class WorkflowTaskTriggerWorkflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_trigger_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskTriggerWorkflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskTriggerWorkflow to import
  * @param importFromId The id of the existing WorkflowTaskTriggerWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskTriggerWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_trigger_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_trigger_workflow rootly_workflow_task_trigger_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskTriggerWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskTriggerWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_trigger_workflow',
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
  private _taskParams = new WorkflowTaskTriggerWorkflowTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskTriggerWorkflowTaskParams) {
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
      task_params: workflowTaskTriggerWorkflowTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskTriggerWorkflowTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskTriggerWorkflowTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
