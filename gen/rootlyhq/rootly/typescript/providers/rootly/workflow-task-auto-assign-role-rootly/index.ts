// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskAutoAssignRoleRootlyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#enabled WorkflowTaskAutoAssignRoleRootly#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#id WorkflowTaskAutoAssignRoleRootly#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#name WorkflowTaskAutoAssignRoleRootly#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#position WorkflowTaskAutoAssignRoleRootly#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#skip_on_failure WorkflowTaskAutoAssignRoleRootly#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#workflow_id WorkflowTaskAutoAssignRoleRootly#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#task_params WorkflowTaskAutoAssignRoleRootly#task_params}
  */
  readonly taskParams: WorkflowTaskAutoAssignRoleRootlyTaskParams;
}
export interface WorkflowTaskAutoAssignRoleRootlyTaskParams {
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#escalation_policy_target WorkflowTaskAutoAssignRoleRootly#escalation_policy_target}
  */
  readonly escalationPolicyTarget?: { [key: string]: string };
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#group_target WorkflowTaskAutoAssignRoleRootly#group_target}
  */
  readonly groupTarget?: { [key: string]: string };
  /**
  * The role id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#incident_role_id WorkflowTaskAutoAssignRoleRootly#incident_role_id}
  */
  readonly incidentRoleId: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#schedule_target WorkflowTaskAutoAssignRoleRootly#schedule_target}
  */
  readonly scheduleTarget?: { [key: string]: string };
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#service_target WorkflowTaskAutoAssignRoleRootly#service_target}
  */
  readonly serviceTarget?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#task_type WorkflowTaskAutoAssignRoleRootly#task_type}
  */
  readonly taskType?: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#user_target WorkflowTaskAutoAssignRoleRootly#user_target}
  */
  readonly userTarget?: { [key: string]: string };
}

export function workflowTaskAutoAssignRoleRootlyTaskParamsToTerraform(struct?: WorkflowTaskAutoAssignRoleRootlyTaskParamsOutputReference | WorkflowTaskAutoAssignRoleRootlyTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_policy_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.escalationPolicyTarget),
    group_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.groupTarget),
    incident_role_id: cdktf.stringToTerraform(struct!.incidentRoleId),
    schedule_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.scheduleTarget),
    service_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceTarget),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    user_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userTarget),
  }
}


export function workflowTaskAutoAssignRoleRootlyTaskParamsToHclTerraform(struct?: WorkflowTaskAutoAssignRoleRootlyTaskParamsOutputReference | WorkflowTaskAutoAssignRoleRootlyTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalation_policy_target: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.escalationPolicyTarget),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    group_target: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.groupTarget),
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
    schedule_target: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.scheduleTarget),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_target: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceTarget),
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
    user_target: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.userTarget),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskAutoAssignRoleRootlyTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskAutoAssignRoleRootlyTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalationPolicyTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationPolicyTarget = this._escalationPolicyTarget;
    }
    if (this._groupTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupTarget = this._groupTarget;
    }
    if (this._incidentRoleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentRoleId = this._incidentRoleId;
    }
    if (this._scheduleTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleTarget = this._scheduleTarget;
    }
    if (this._serviceTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTarget = this._serviceTarget;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._userTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTarget = this._userTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskAutoAssignRoleRootlyTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._escalationPolicyTarget = undefined;
      this._groupTarget = undefined;
      this._incidentRoleId = undefined;
      this._scheduleTarget = undefined;
      this._serviceTarget = undefined;
      this._taskType = undefined;
      this._userTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._escalationPolicyTarget = value.escalationPolicyTarget;
      this._groupTarget = value.groupTarget;
      this._incidentRoleId = value.incidentRoleId;
      this._scheduleTarget = value.scheduleTarget;
      this._serviceTarget = value.serviceTarget;
      this._taskType = value.taskType;
      this._userTarget = value.userTarget;
    }
  }

  // escalation_policy_target - computed: false, optional: true, required: false
  private _escalationPolicyTarget?: { [key: string]: string }; 
  public get escalationPolicyTarget() {
    return this.getStringMapAttribute('escalation_policy_target');
  }
  public set escalationPolicyTarget(value: { [key: string]: string }) {
    this._escalationPolicyTarget = value;
  }
  public resetEscalationPolicyTarget() {
    this._escalationPolicyTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyTargetInput() {
    return this._escalationPolicyTarget;
  }

  // group_target - computed: false, optional: true, required: false
  private _groupTarget?: { [key: string]: string }; 
  public get groupTarget() {
    return this.getStringMapAttribute('group_target');
  }
  public set groupTarget(value: { [key: string]: string }) {
    this._groupTarget = value;
  }
  public resetGroupTarget() {
    this._groupTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTargetInput() {
    return this._groupTarget;
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

  // schedule_target - computed: false, optional: true, required: false
  private _scheduleTarget?: { [key: string]: string }; 
  public get scheduleTarget() {
    return this.getStringMapAttribute('schedule_target');
  }
  public set scheduleTarget(value: { [key: string]: string }) {
    this._scheduleTarget = value;
  }
  public resetScheduleTarget() {
    this._scheduleTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTargetInput() {
    return this._scheduleTarget;
  }

  // service_target - computed: false, optional: true, required: false
  private _serviceTarget?: { [key: string]: string }; 
  public get serviceTarget() {
    return this.getStringMapAttribute('service_target');
  }
  public set serviceTarget(value: { [key: string]: string }) {
    this._serviceTarget = value;
  }
  public resetServiceTarget() {
    this._serviceTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTargetInput() {
    return this._serviceTarget;
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

  // user_target - computed: false, optional: true, required: false
  private _userTarget?: { [key: string]: string }; 
  public get userTarget() {
    return this.getStringMapAttribute('user_target');
  }
  public set userTarget(value: { [key: string]: string }) {
    this._userTarget = value;
  }
  public resetUserTarget() {
    this._userTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTargetInput() {
    return this._userTarget;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly rootly_workflow_task_auto_assign_role_rootly}
*/
export class WorkflowTaskAutoAssignRoleRootly extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_auto_assign_role_rootly";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskAutoAssignRoleRootly resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskAutoAssignRoleRootly to import
  * @param importFromId The id of the existing WorkflowTaskAutoAssignRoleRootly that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskAutoAssignRoleRootly to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_auto_assign_role_rootly", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_auto_assign_role_rootly rootly_workflow_task_auto_assign_role_rootly} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskAutoAssignRoleRootlyConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskAutoAssignRoleRootlyConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_auto_assign_role_rootly',
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
  private _taskParams = new WorkflowTaskAutoAssignRoleRootlyTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskAutoAssignRoleRootlyTaskParams) {
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
      task_params: workflowTaskAutoAssignRoleRootlyTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskAutoAssignRoleRootlyTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskAutoAssignRoleRootlyTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
