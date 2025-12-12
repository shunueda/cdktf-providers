// https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskUpdateIncidentStatusTimestampConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp#enabled WorkflowTaskUpdateIncidentStatusTimestamp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp#id WorkflowTaskUpdateIncidentStatusTimestamp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp#name WorkflowTaskUpdateIncidentStatusTimestamp#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp#position WorkflowTaskUpdateIncidentStatusTimestamp#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp#skip_on_failure WorkflowTaskUpdateIncidentStatusTimestamp#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp#workflow_id WorkflowTaskUpdateIncidentStatusTimestamp#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp#task_params WorkflowTaskUpdateIncidentStatusTimestamp#task_params}
  */
  readonly taskParams: WorkflowTaskUpdateIncidentStatusTimestampTaskParams;
}
export interface WorkflowTaskUpdateIncidentStatusTimestampTaskParams {
  /**
  * Timestamp of when the sub-status was assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp#assigned_at WorkflowTaskUpdateIncidentStatusTimestamp#assigned_at}
  */
  readonly assignedAt: string;
  /**
  * Sub-status to update timestamp for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp#sub_status_id WorkflowTaskUpdateIncidentStatusTimestamp#sub_status_id}
  */
  readonly subStatusId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp#task_type WorkflowTaskUpdateIncidentStatusTimestamp#task_type}
  */
  readonly taskType?: string;
}

export function workflowTaskUpdateIncidentStatusTimestampTaskParamsToTerraform(struct?: WorkflowTaskUpdateIncidentStatusTimestampTaskParamsOutputReference | WorkflowTaskUpdateIncidentStatusTimestampTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_at: cdktf.stringToTerraform(struct!.assignedAt),
    sub_status_id: cdktf.stringToTerraform(struct!.subStatusId),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


export function workflowTaskUpdateIncidentStatusTimestampTaskParamsToHclTerraform(struct?: WorkflowTaskUpdateIncidentStatusTimestampTaskParamsOutputReference | WorkflowTaskUpdateIncidentStatusTimestampTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_at: {
      value: cdktf.stringToHclTerraform(struct!.assignedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_status_id: {
      value: cdktf.stringToHclTerraform(struct!.subStatusId),
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

export class WorkflowTaskUpdateIncidentStatusTimestampTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskUpdateIncidentStatusTimestampTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedAt = this._assignedAt;
    }
    if (this._subStatusId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subStatusId = this._subStatusId;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskUpdateIncidentStatusTimestampTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedAt = undefined;
      this._subStatusId = undefined;
      this._taskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedAt = value.assignedAt;
      this._subStatusId = value.subStatusId;
      this._taskType = value.taskType;
    }
  }

  // assigned_at - computed: false, optional: false, required: true
  private _assignedAt?: string; 
  public get assignedAt() {
    return this.getStringAttribute('assigned_at');
  }
  public set assignedAt(value: string) {
    this._assignedAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedAtInput() {
    return this._assignedAt;
  }

  // sub_status_id - computed: false, optional: false, required: true
  private _subStatusId?: string; 
  public get subStatusId() {
    return this.getStringAttribute('sub_status_id');
  }
  public set subStatusId(value: string) {
    this._subStatusId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subStatusIdInput() {
    return this._subStatusId;
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp rootly_workflow_task_update_incident_status_timestamp}
*/
export class WorkflowTaskUpdateIncidentStatusTimestamp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_update_incident_status_timestamp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskUpdateIncidentStatusTimestamp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskUpdateIncidentStatusTimestamp to import
  * @param importFromId The id of the existing WorkflowTaskUpdateIncidentStatusTimestamp that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskUpdateIncidentStatusTimestamp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_update_incident_status_timestamp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_incident_status_timestamp rootly_workflow_task_update_incident_status_timestamp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskUpdateIncidentStatusTimestampConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskUpdateIncidentStatusTimestampConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_update_incident_status_timestamp',
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
  private _taskParams = new WorkflowTaskUpdateIncidentStatusTimestampTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskUpdateIncidentStatusTimestampTaskParams) {
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
      task_params: workflowTaskUpdateIncidentStatusTimestampTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskUpdateIncidentStatusTimestampTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskUpdateIncidentStatusTimestampTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
