// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskUpdateClickupTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#enabled WorkflowTaskUpdateClickupTask#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#id WorkflowTaskUpdateClickupTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#name WorkflowTaskUpdateClickupTask#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#position WorkflowTaskUpdateClickupTask#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#skip_on_failure WorkflowTaskUpdateClickupTask#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#workflow_id WorkflowTaskUpdateClickupTask#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#task_params WorkflowTaskUpdateClickupTask#task_params}
  */
  readonly taskParams: WorkflowTaskUpdateClickupTaskTaskParams;
}
export interface WorkflowTaskUpdateClickupTaskTaskParams {
  /**
  * Custom field mappings. Can contain liquid markup and need to be valid JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#custom_fields_mapping WorkflowTaskUpdateClickupTask#custom_fields_mapping}
  */
  readonly customFieldsMapping?: string;
  /**
  * The task description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#description WorkflowTaskUpdateClickupTask#description}
  */
  readonly description?: string;
  /**
  * The due date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#due_date WorkflowTaskUpdateClickupTask#due_date}
  */
  readonly dueDate?: string;
  /**
  * Map must contain two fields, `id` and `name`. The priority id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#priority WorkflowTaskUpdateClickupTask#priority}
  */
  readonly priority?: { [key: string]: string };
  /**
  * The task tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#tags WorkflowTaskUpdateClickupTask#tags}
  */
  readonly tags?: string;
  /**
  * The task id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#task_id WorkflowTaskUpdateClickupTask#task_id}
  */
  readonly taskId: string;
  /**
  * Additional ClickUp task attributes. Will be merged into whatever was specified in this tasks current parameters. Can contain liquid markup and need to be valid JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#task_payload WorkflowTaskUpdateClickupTask#task_payload}
  */
  readonly taskPayload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#task_type WorkflowTaskUpdateClickupTask#task_type}
  */
  readonly taskType?: string;
  /**
  * The task title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#title WorkflowTaskUpdateClickupTask#title}
  */
  readonly title?: string;
}

export function workflowTaskUpdateClickupTaskTaskParamsToTerraform(struct?: WorkflowTaskUpdateClickupTaskTaskParamsOutputReference | WorkflowTaskUpdateClickupTaskTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_fields_mapping: cdktf.stringToTerraform(struct!.customFieldsMapping),
    description: cdktf.stringToTerraform(struct!.description),
    due_date: cdktf.stringToTerraform(struct!.dueDate),
    priority: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.priority),
    tags: cdktf.stringToTerraform(struct!.tags),
    task_id: cdktf.stringToTerraform(struct!.taskId),
    task_payload: cdktf.stringToTerraform(struct!.taskPayload),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function workflowTaskUpdateClickupTaskTaskParamsToHclTerraform(struct?: WorkflowTaskUpdateClickupTaskTaskParamsOutputReference | WorkflowTaskUpdateClickupTaskTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    due_date: {
      value: cdktf.stringToHclTerraform(struct!.dueDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.priority),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_id: {
      value: cdktf.stringToHclTerraform(struct!.taskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_payload: {
      value: cdktf.stringToHclTerraform(struct!.taskPayload),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskUpdateClickupTaskTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskUpdateClickupTaskTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFieldsMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFieldsMapping = this._customFieldsMapping;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dueDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dueDate = this._dueDate;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._taskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskId = this._taskId;
    }
    if (this._taskPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskPayload = this._taskPayload;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskUpdateClickupTaskTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customFieldsMapping = undefined;
      this._description = undefined;
      this._dueDate = undefined;
      this._priority = undefined;
      this._tags = undefined;
      this._taskId = undefined;
      this._taskPayload = undefined;
      this._taskType = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customFieldsMapping = value.customFieldsMapping;
      this._description = value.description;
      this._dueDate = value.dueDate;
      this._priority = value.priority;
      this._tags = value.tags;
      this._taskId = value.taskId;
      this._taskPayload = value.taskPayload;
      this._taskType = value.taskType;
      this._title = value.title;
    }
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

  // due_date - computed: false, optional: true, required: false
  private _dueDate?: string; 
  public get dueDate() {
    return this.getStringAttribute('due_date');
  }
  public set dueDate(value: string) {
    this._dueDate = value;
  }
  public resetDueDate() {
    this._dueDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dueDateInput() {
    return this._dueDate;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: { [key: string]: string }; 
  public get priority() {
    return this.getStringMapAttribute('priority');
  }
  public set priority(value: { [key: string]: string }) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // task_id - computed: false, optional: false, required: true
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
  }

  // task_payload - computed: false, optional: true, required: false
  private _taskPayload?: string; 
  public get taskPayload() {
    return this.getStringAttribute('task_payload');
  }
  public set taskPayload(value: string) {
    this._taskPayload = value;
  }
  public resetTaskPayload() {
    this._taskPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskPayloadInput() {
    return this._taskPayload;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task rootly_workflow_task_update_clickup_task}
*/
export class WorkflowTaskUpdateClickupTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_update_clickup_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskUpdateClickupTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskUpdateClickupTask to import
  * @param importFromId The id of the existing WorkflowTaskUpdateClickupTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskUpdateClickupTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_update_clickup_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/workflow_task_update_clickup_task rootly_workflow_task_update_clickup_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskUpdateClickupTaskConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskUpdateClickupTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_update_clickup_task',
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
  private _taskParams = new WorkflowTaskUpdateClickupTaskTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskUpdateClickupTaskTaskParams) {
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
      task_params: workflowTaskUpdateClickupTaskTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskUpdateClickupTaskTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskUpdateClickupTaskTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
