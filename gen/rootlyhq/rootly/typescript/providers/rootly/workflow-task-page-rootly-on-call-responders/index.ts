// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskPageRootlyOnCallRespondersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#enabled WorkflowTaskPageRootlyOnCallResponders#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#id WorkflowTaskPageRootlyOnCallResponders#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#name WorkflowTaskPageRootlyOnCallResponders#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#position WorkflowTaskPageRootlyOnCallResponders#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#skip_on_failure WorkflowTaskPageRootlyOnCallResponders#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#workflow_id WorkflowTaskPageRootlyOnCallResponders#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#task_params WorkflowTaskPageRootlyOnCallResponders#task_params}
  */
  readonly taskParams: WorkflowTaskPageRootlyOnCallRespondersTaskParams;
}
export interface WorkflowTaskPageRootlyOnCallRespondersTaskParams {
  /**
  * Alert urgency ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#alert_urgency_id WorkflowTaskPageRootlyOnCallResponders#alert_urgency_id}
  */
  readonly alertUrgencyId?: string;
  /**
  * Alert description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#description WorkflowTaskPageRootlyOnCallResponders#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#escalation_note WorkflowTaskPageRootlyOnCallResponders#escalation_note}
  */
  readonly escalationNote?: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#escalation_policy_target WorkflowTaskPageRootlyOnCallResponders#escalation_policy_target}
  */
  readonly escalationPolicyTarget?: { [key: string]: string };
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#group_target WorkflowTaskPageRootlyOnCallResponders#group_target}
  */
  readonly groupTarget?: { [key: string]: string };
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#service_target WorkflowTaskPageRootlyOnCallResponders#service_target}
  */
  readonly serviceTarget?: { [key: string]: string };
  /**
  * Alert title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#summary WorkflowTaskPageRootlyOnCallResponders#summary}
  */
  readonly summary: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#task_type WorkflowTaskPageRootlyOnCallResponders#task_type}
  */
  readonly taskType?: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#user_target WorkflowTaskPageRootlyOnCallResponders#user_target}
  */
  readonly userTarget?: { [key: string]: string };
}

export function workflowTaskPageRootlyOnCallRespondersTaskParamsToTerraform(struct?: WorkflowTaskPageRootlyOnCallRespondersTaskParamsOutputReference | WorkflowTaskPageRootlyOnCallRespondersTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_urgency_id: cdktf.stringToTerraform(struct!.alertUrgencyId),
    description: cdktf.stringToTerraform(struct!.description),
    escalation_note: cdktf.stringToTerraform(struct!.escalationNote),
    escalation_policy_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.escalationPolicyTarget),
    group_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.groupTarget),
    service_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceTarget),
    summary: cdktf.stringToTerraform(struct!.summary),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    user_target: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userTarget),
  }
}


export function workflowTaskPageRootlyOnCallRespondersTaskParamsToHclTerraform(struct?: WorkflowTaskPageRootlyOnCallRespondersTaskParamsOutputReference | WorkflowTaskPageRootlyOnCallRespondersTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_urgency_id: {
      value: cdktf.stringToHclTerraform(struct!.alertUrgencyId),
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
    escalation_note: {
      value: cdktf.stringToHclTerraform(struct!.escalationNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    service_target: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceTarget),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class WorkflowTaskPageRootlyOnCallRespondersTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskPageRootlyOnCallRespondersTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertUrgencyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertUrgencyId = this._alertUrgencyId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._escalationNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationNote = this._escalationNote;
    }
    if (this._escalationPolicyTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationPolicyTarget = this._escalationPolicyTarget;
    }
    if (this._groupTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupTarget = this._groupTarget;
    }
    if (this._serviceTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTarget = this._serviceTarget;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
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

  public set internalValue(value: WorkflowTaskPageRootlyOnCallRespondersTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertUrgencyId = undefined;
      this._description = undefined;
      this._escalationNote = undefined;
      this._escalationPolicyTarget = undefined;
      this._groupTarget = undefined;
      this._serviceTarget = undefined;
      this._summary = undefined;
      this._taskType = undefined;
      this._userTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertUrgencyId = value.alertUrgencyId;
      this._description = value.description;
      this._escalationNote = value.escalationNote;
      this._escalationPolicyTarget = value.escalationPolicyTarget;
      this._groupTarget = value.groupTarget;
      this._serviceTarget = value.serviceTarget;
      this._summary = value.summary;
      this._taskType = value.taskType;
      this._userTarget = value.userTarget;
    }
  }

  // alert_urgency_id - computed: false, optional: true, required: false
  private _alertUrgencyId?: string; 
  public get alertUrgencyId() {
    return this.getStringAttribute('alert_urgency_id');
  }
  public set alertUrgencyId(value: string) {
    this._alertUrgencyId = value;
  }
  public resetAlertUrgencyId() {
    this._alertUrgencyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertUrgencyIdInput() {
    return this._alertUrgencyId;
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

  // escalation_note - computed: false, optional: true, required: false
  private _escalationNote?: string; 
  public get escalationNote() {
    return this.getStringAttribute('escalation_note');
  }
  public set escalationNote(value: string) {
    this._escalationNote = value;
  }
  public resetEscalationNote() {
    this._escalationNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationNoteInput() {
    return this._escalationNote;
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders rootly_workflow_task_page_rootly_on_call_responders}
*/
export class WorkflowTaskPageRootlyOnCallResponders extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_page_rootly_on_call_responders";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskPageRootlyOnCallResponders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskPageRootlyOnCallResponders to import
  * @param importFromId The id of the existing WorkflowTaskPageRootlyOnCallResponders that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskPageRootlyOnCallResponders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_page_rootly_on_call_responders", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_page_rootly_on_call_responders rootly_workflow_task_page_rootly_on_call_responders} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskPageRootlyOnCallRespondersConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskPageRootlyOnCallRespondersConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_page_rootly_on_call_responders',
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
  private _taskParams = new WorkflowTaskPageRootlyOnCallRespondersTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskPageRootlyOnCallRespondersTaskParams) {
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
      task_params: workflowTaskPageRootlyOnCallRespondersTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskPageRootlyOnCallRespondersTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskPageRootlyOnCallRespondersTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
