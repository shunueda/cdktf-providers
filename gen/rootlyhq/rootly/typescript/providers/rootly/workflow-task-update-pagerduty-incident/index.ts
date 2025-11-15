// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskUpdatePagerdutyIncidentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#enabled WorkflowTaskUpdatePagerdutyIncident#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#id WorkflowTaskUpdatePagerdutyIncident#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#name WorkflowTaskUpdatePagerdutyIncident#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#position WorkflowTaskUpdatePagerdutyIncident#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#skip_on_failure WorkflowTaskUpdatePagerdutyIncident#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#workflow_id WorkflowTaskUpdatePagerdutyIncident#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#task_params WorkflowTaskUpdatePagerdutyIncident#task_params}
  */
  readonly taskParams: WorkflowTaskUpdatePagerdutyIncidentTaskParams;
}
export interface WorkflowTaskUpdatePagerdutyIncidentTaskParams {
  /**
  * Escalation level of policy attached to incident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#escalation_level WorkflowTaskUpdatePagerdutyIncident#escalation_level}
  */
  readonly escalationLevel?: string;
  /**
  * Pagerduty incident id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#pagerduty_incident_id WorkflowTaskUpdatePagerdutyIncident#pagerduty_incident_id}
  */
  readonly pagerdutyIncidentId: string;
  /**
  * PagerDuty incident priority, selecting auto will let Rootly auto map our incident severity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#priority WorkflowTaskUpdatePagerdutyIncident#priority}
  */
  readonly priority?: string;
  /**
  * A message outlining the incident's resolution in PagerDuty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#resolution WorkflowTaskUpdatePagerdutyIncident#resolution}
  */
  readonly resolution?: string;
  /**
  * Value must be one of `resolved`, `acknowledged`, `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#status WorkflowTaskUpdatePagerdutyIncident#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#task_type WorkflowTaskUpdatePagerdutyIncident#task_type}
  */
  readonly taskType?: string;
  /**
  * Title to update to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#title WorkflowTaskUpdatePagerdutyIncident#title}
  */
  readonly title?: string;
  /**
  * PagerDuty incident urgency, selecting auto will let Rootly auto map our incident severity. Value must be one of `high`, `low`, `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#urgency WorkflowTaskUpdatePagerdutyIncident#urgency}
  */
  readonly urgency?: string;
}

export function workflowTaskUpdatePagerdutyIncidentTaskParamsToTerraform(struct?: WorkflowTaskUpdatePagerdutyIncidentTaskParamsOutputReference | WorkflowTaskUpdatePagerdutyIncidentTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_level: cdktf.stringToTerraform(struct!.escalationLevel),
    pagerduty_incident_id: cdktf.stringToTerraform(struct!.pagerdutyIncidentId),
    priority: cdktf.stringToTerraform(struct!.priority),
    resolution: cdktf.stringToTerraform(struct!.resolution),
    status: cdktf.stringToTerraform(struct!.status),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    title: cdktf.stringToTerraform(struct!.title),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


export function workflowTaskUpdatePagerdutyIncidentTaskParamsToHclTerraform(struct?: WorkflowTaskUpdatePagerdutyIncidentTaskParamsOutputReference | WorkflowTaskUpdatePagerdutyIncidentTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalation_level: {
      value: cdktf.stringToHclTerraform(struct!.escalationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pagerduty_incident_id: {
      value: cdktf.stringToHclTerraform(struct!.pagerdutyIncidentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolution: {
      value: cdktf.stringToHclTerraform(struct!.resolution),
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
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskUpdatePagerdutyIncidentTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskUpdatePagerdutyIncidentTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationLevel = this._escalationLevel;
    }
    if (this._pagerdutyIncidentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerdutyIncidentId = this._pagerdutyIncidentId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._resolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskUpdatePagerdutyIncidentTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._escalationLevel = undefined;
      this._pagerdutyIncidentId = undefined;
      this._priority = undefined;
      this._resolution = undefined;
      this._status = undefined;
      this._taskType = undefined;
      this._title = undefined;
      this._urgency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._escalationLevel = value.escalationLevel;
      this._pagerdutyIncidentId = value.pagerdutyIncidentId;
      this._priority = value.priority;
      this._resolution = value.resolution;
      this._status = value.status;
      this._taskType = value.taskType;
      this._title = value.title;
      this._urgency = value.urgency;
    }
  }

  // escalation_level - computed: false, optional: true, required: false
  private _escalationLevel?: string; 
  public get escalationLevel() {
    return this.getStringAttribute('escalation_level');
  }
  public set escalationLevel(value: string) {
    this._escalationLevel = value;
  }
  public resetEscalationLevel() {
    this._escalationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationLevelInput() {
    return this._escalationLevel;
  }

  // pagerduty_incident_id - computed: false, optional: false, required: true
  private _pagerdutyIncidentId?: string; 
  public get pagerdutyIncidentId() {
    return this.getStringAttribute('pagerduty_incident_id');
  }
  public set pagerdutyIncidentId(value: string) {
    this._pagerdutyIncidentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyIncidentIdInput() {
    return this._pagerdutyIncidentId;
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

  // resolution - computed: false, optional: true, required: false
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // urgency - computed: false, optional: true, required: false
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident rootly_workflow_task_update_pagerduty_incident}
*/
export class WorkflowTaskUpdatePagerdutyIncident extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_update_pagerduty_incident";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskUpdatePagerdutyIncident resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskUpdatePagerdutyIncident to import
  * @param importFromId The id of the existing WorkflowTaskUpdatePagerdutyIncident that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskUpdatePagerdutyIncident to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_update_pagerduty_incident", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_update_pagerduty_incident rootly_workflow_task_update_pagerduty_incident} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskUpdatePagerdutyIncidentConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskUpdatePagerdutyIncidentConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_update_pagerduty_incident',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.8',
        providerVersionConstraint: '4.3.8'
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
  private _taskParams = new WorkflowTaskUpdatePagerdutyIncidentTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskUpdatePagerdutyIncidentTaskParams) {
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
      task_params: workflowTaskUpdatePagerdutyIncidentTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskUpdatePagerdutyIncidentTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskUpdatePagerdutyIncidentTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
