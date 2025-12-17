// https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskAutoAssignRolePagerdutyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#enabled WorkflowTaskAutoAssignRolePagerduty#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#id WorkflowTaskAutoAssignRolePagerduty#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#name WorkflowTaskAutoAssignRolePagerduty#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#position WorkflowTaskAutoAssignRolePagerduty#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#skip_on_failure WorkflowTaskAutoAssignRolePagerduty#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#workflow_id WorkflowTaskAutoAssignRolePagerduty#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#task_params WorkflowTaskAutoAssignRolePagerduty#task_params}
  */
  readonly taskParams: WorkflowTaskAutoAssignRolePagerdutyTaskParams;
}
export interface WorkflowTaskAutoAssignRolePagerdutyTaskParams {
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#escalation_policy WorkflowTaskAutoAssignRolePagerduty#escalation_policy}
  */
  readonly escalationPolicy?: { [key: string]: string };
  /**
  * The role id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#incident_role_id WorkflowTaskAutoAssignRolePagerduty#incident_role_id}
  */
  readonly incidentRoleId: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#schedule WorkflowTaskAutoAssignRolePagerduty#schedule}
  */
  readonly schedule?: { [key: string]: string };
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#service WorkflowTaskAutoAssignRolePagerduty#service}
  */
  readonly service?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#task_type WorkflowTaskAutoAssignRolePagerduty#task_type}
  */
  readonly taskType?: string;
}

export function workflowTaskAutoAssignRolePagerdutyTaskParamsToTerraform(struct?: WorkflowTaskAutoAssignRolePagerdutyTaskParamsOutputReference | WorkflowTaskAutoAssignRolePagerdutyTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_policy: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.escalationPolicy),
    incident_role_id: cdktf.stringToTerraform(struct!.incidentRoleId),
    schedule: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.schedule),
    service: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.service),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


export function workflowTaskAutoAssignRolePagerdutyTaskParamsToHclTerraform(struct?: WorkflowTaskAutoAssignRolePagerdutyTaskParamsOutputReference | WorkflowTaskAutoAssignRolePagerdutyTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalation_policy: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.escalationPolicy),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    incident_role_id: {
      value: cdktf.stringToHclTerraform(struct!.incidentRoleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.schedule),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.service),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskAutoAssignRolePagerdutyTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskAutoAssignRolePagerdutyTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationPolicy = this._escalationPolicy;
    }
    if (this._incidentRoleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentRoleId = this._incidentRoleId;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskAutoAssignRolePagerdutyTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._escalationPolicy = undefined;
      this._incidentRoleId = undefined;
      this._schedule = undefined;
      this._service = undefined;
      this._taskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._escalationPolicy = value.escalationPolicy;
      this._incidentRoleId = value.incidentRoleId;
      this._schedule = value.schedule;
      this._service = value.service;
      this._taskType = value.taskType;
    }
  }

  // escalation_policy - computed: false, optional: true, required: false
  private _escalationPolicy?: { [key: string]: string }; 
  public get escalationPolicy() {
    return this.getStringMapAttribute('escalation_policy');
  }
  public set escalationPolicy(value: { [key: string]: string }) {
    this._escalationPolicy = value;
  }
  public resetEscalationPolicy() {
    this._escalationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyInput() {
    return this._escalationPolicy;
  }

  // incident_role_id - computed: false, optional: false, required: true
  private _incidentRoleId?: string; 
  public get incidentRoleId() {
    return this.getStringAttribute('incident_role_id');
  }
  public set incidentRoleId(value: string) {
    this._incidentRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentRoleIdInput() {
    return this._incidentRoleId;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: { [key: string]: string }; 
  public get schedule() {
    return this.getStringMapAttribute('schedule');
  }
  public set schedule(value: { [key: string]: string }) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // service - computed: false, optional: true, required: false
  private _service?: { [key: string]: string }; 
  public get service() {
    return this.getStringMapAttribute('service');
  }
  public set service(value: { [key: string]: string }) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty rootly_workflow_task_auto_assign_role_pagerduty}
*/
export class WorkflowTaskAutoAssignRolePagerduty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_auto_assign_role_pagerduty";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskAutoAssignRolePagerduty resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskAutoAssignRolePagerduty to import
  * @param importFromId The id of the existing WorkflowTaskAutoAssignRolePagerduty that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskAutoAssignRolePagerduty to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_auto_assign_role_pagerduty", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/workflow_task_auto_assign_role_pagerduty rootly_workflow_task_auto_assign_role_pagerduty} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskAutoAssignRolePagerdutyConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskAutoAssignRolePagerdutyConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_auto_assign_role_pagerduty',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
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
  private _taskParams = new WorkflowTaskAutoAssignRolePagerdutyTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskAutoAssignRolePagerdutyTaskParams) {
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
      task_params: workflowTaskAutoAssignRolePagerdutyTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskAutoAssignRolePagerdutyTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskAutoAssignRolePagerdutyTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
