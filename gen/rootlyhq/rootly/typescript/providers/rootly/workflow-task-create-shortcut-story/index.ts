// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskCreateShortcutStoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#enabled WorkflowTaskCreateShortcutStory#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#id WorkflowTaskCreateShortcutStory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#name WorkflowTaskCreateShortcutStory#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#position WorkflowTaskCreateShortcutStory#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#skip_on_failure WorkflowTaskCreateShortcutStory#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#workflow_id WorkflowTaskCreateShortcutStory#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#task_params WorkflowTaskCreateShortcutStory#task_params}
  */
  readonly taskParams: WorkflowTaskCreateShortcutStoryTaskParams;
}
export interface WorkflowTaskCreateShortcutStoryTaskParams {
  /**
  * Map must contain two fields, `id` and `name`. The archivation id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#archivation WorkflowTaskCreateShortcutStory#archivation}
  */
  readonly archivation: { [key: string]: string };
  /**
  * The incident description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#description WorkflowTaskCreateShortcutStory#description}
  */
  readonly description?: string;
  /**
  * The due date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#due_date WorkflowTaskCreateShortcutStory#due_date}
  */
  readonly dueDate?: string;
  /**
  * Map must contain two fields, `id` and `name`. The group id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#group WorkflowTaskCreateShortcutStory#group}
  */
  readonly group?: { [key: string]: string };
  /**
  * Value must be one of `bug`, `chore`, `feature`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#kind WorkflowTaskCreateShortcutStory#kind}
  */
  readonly kind: string;
  /**
  * The story labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#labels WorkflowTaskCreateShortcutStory#labels}
  */
  readonly labels?: string;
  /**
  * Map must contain two fields, `id` and `name`. The project id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#project WorkflowTaskCreateShortcutStory#project}
  */
  readonly project?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#task_type WorkflowTaskCreateShortcutStory#task_type}
  */
  readonly taskType?: string;
  /**
  * The incident title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#title WorkflowTaskCreateShortcutStory#title}
  */
  readonly title: string;
  /**
  * Map must contain two fields, `id` and `name`. The workflow state id workflow state name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#workflow_state WorkflowTaskCreateShortcutStory#workflow_state}
  */
  readonly workflowState?: { [key: string]: string };
}

export function workflowTaskCreateShortcutStoryTaskParamsToTerraform(struct?: WorkflowTaskCreateShortcutStoryTaskParamsOutputReference | WorkflowTaskCreateShortcutStoryTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archivation: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.archivation),
    description: cdktf.stringToTerraform(struct!.description),
    due_date: cdktf.stringToTerraform(struct!.dueDate),
    group: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.stringToTerraform(struct!.labels),
    project: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.project),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    title: cdktf.stringToTerraform(struct!.title),
    workflow_state: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.workflowState),
  }
}


export function workflowTaskCreateShortcutStoryTaskParamsToHclTerraform(struct?: WorkflowTaskCreateShortcutStoryTaskParamsOutputReference | WorkflowTaskCreateShortcutStoryTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archivation: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.archivation),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    group: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.group),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.stringToHclTerraform(struct!.labels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.project),
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
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_state: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.workflowState),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskCreateShortcutStoryTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskCreateShortcutStoryTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archivation !== undefined) {
      hasAnyValues = true;
      internalValueResult.archivation = this._archivation;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dueDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dueDate = this._dueDate;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._workflowState !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowState = this._workflowState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskCreateShortcutStoryTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archivation = undefined;
      this._description = undefined;
      this._dueDate = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._project = undefined;
      this._taskType = undefined;
      this._title = undefined;
      this._workflowState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archivation = value.archivation;
      this._description = value.description;
      this._dueDate = value.dueDate;
      this._group = value.group;
      this._kind = value.kind;
      this._labels = value.labels;
      this._project = value.project;
      this._taskType = value.taskType;
      this._title = value.title;
      this._workflowState = value.workflowState;
    }
  }

  // archivation - computed: false, optional: false, required: true
  private _archivation?: { [key: string]: string }; 
  public get archivation() {
    return this.getStringMapAttribute('archivation');
  }
  public set archivation(value: { [key: string]: string }) {
    this._archivation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archivationInput() {
    return this._archivation;
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

  // group - computed: false, optional: true, required: false
  private _group?: { [key: string]: string }; 
  public get group() {
    return this.getStringMapAttribute('group');
  }
  public set group(value: { [key: string]: string }) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // project - computed: false, optional: true, required: false
  private _project?: { [key: string]: string }; 
  public get project() {
    return this.getStringMapAttribute('project');
  }
  public set project(value: { [key: string]: string }) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // workflow_state - computed: false, optional: true, required: false
  private _workflowState?: { [key: string]: string }; 
  public get workflowState() {
    return this.getStringMapAttribute('workflow_state');
  }
  public set workflowState(value: { [key: string]: string }) {
    this._workflowState = value;
  }
  public resetWorkflowState() {
    this._workflowState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowStateInput() {
    return this._workflowState;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story rootly_workflow_task_create_shortcut_story}
*/
export class WorkflowTaskCreateShortcutStory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_create_shortcut_story";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskCreateShortcutStory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskCreateShortcutStory to import
  * @param importFromId The id of the existing WorkflowTaskCreateShortcutStory that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskCreateShortcutStory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_create_shortcut_story", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_create_shortcut_story rootly_workflow_task_create_shortcut_story} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskCreateShortcutStoryConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskCreateShortcutStoryConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_create_shortcut_story',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.1',
        providerVersionConstraint: '5.2.1'
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
  private _taskParams = new WorkflowTaskCreateShortcutStoryTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskCreateShortcutStoryTaskParams) {
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
      task_params: workflowTaskCreateShortcutStoryTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskCreateShortcutStoryTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskCreateShortcutStoryTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
