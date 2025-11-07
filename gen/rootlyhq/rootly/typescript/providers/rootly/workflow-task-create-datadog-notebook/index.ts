// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskCreateDatadogNotebookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#enabled WorkflowTaskCreateDatadogNotebook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#id WorkflowTaskCreateDatadogNotebook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#name WorkflowTaskCreateDatadogNotebook#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#position WorkflowTaskCreateDatadogNotebook#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#skip_on_failure WorkflowTaskCreateDatadogNotebook#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#workflow_id WorkflowTaskCreateDatadogNotebook#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#task_params WorkflowTaskCreateDatadogNotebook#task_params}
  */
  readonly taskParams: WorkflowTaskCreateDatadogNotebookTaskParams;
}
export interface WorkflowTaskCreateDatadogNotebookTaskParams {
  /**
  * The notebook content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#content WorkflowTaskCreateDatadogNotebook#content}
  */
  readonly content?: string;
  /**
  * The notebook kind. Value must be one of `postmortem`, `runbook`, `investigation`, `documentation`, `report`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#kind WorkflowTaskCreateDatadogNotebook#kind}
  */
  readonly kind: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#mark_post_mortem_as_published WorkflowTaskCreateDatadogNotebook#mark_post_mortem_as_published}
  */
  readonly markPostMortemAsPublished?: boolean | cdktf.IResolvable;
  /**
  * Retrospective template to use when creating notebook, if desired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#post_mortem_template_id WorkflowTaskCreateDatadogNotebook#post_mortem_template_id}
  */
  readonly postMortemTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#task_type WorkflowTaskCreateDatadogNotebook#task_type}
  */
  readonly taskType?: string;
  /**
  * Map must contain two fields, `id` and `name`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#template WorkflowTaskCreateDatadogNotebook#template}
  */
  readonly template?: { [key: string]: string };
  /**
  * The notebook title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#title WorkflowTaskCreateDatadogNotebook#title}
  */
  readonly title: string;
}

export function workflowTaskCreateDatadogNotebookTaskParamsToTerraform(struct?: WorkflowTaskCreateDatadogNotebookTaskParamsOutputReference | WorkflowTaskCreateDatadogNotebookTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    kind: cdktf.stringToTerraform(struct!.kind),
    mark_post_mortem_as_published: cdktf.booleanToTerraform(struct!.markPostMortemAsPublished),
    post_mortem_template_id: cdktf.stringToTerraform(struct!.postMortemTemplateId),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function workflowTaskCreateDatadogNotebookTaskParamsToHclTerraform(struct?: WorkflowTaskCreateDatadogNotebookTaskParamsOutputReference | WorkflowTaskCreateDatadogNotebookTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
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
    mark_post_mortem_as_published: {
      value: cdktf.booleanToHclTerraform(struct!.markPostMortemAsPublished),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    post_mortem_template_id: {
      value: cdktf.stringToHclTerraform(struct!.postMortemTemplateId),
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
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class WorkflowTaskCreateDatadogNotebookTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskCreateDatadogNotebookTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._markPostMortemAsPublished !== undefined) {
      hasAnyValues = true;
      internalValueResult.markPostMortemAsPublished = this._markPostMortemAsPublished;
    }
    if (this._postMortemTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.postMortemTemplateId = this._postMortemTemplateId;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskCreateDatadogNotebookTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._kind = undefined;
      this._markPostMortemAsPublished = undefined;
      this._postMortemTemplateId = undefined;
      this._taskType = undefined;
      this._template = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._kind = value.kind;
      this._markPostMortemAsPublished = value.markPostMortemAsPublished;
      this._postMortemTemplateId = value.postMortemTemplateId;
      this._taskType = value.taskType;
      this._template = value.template;
      this._title = value.title;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // mark_post_mortem_as_published - computed: false, optional: true, required: false
  private _markPostMortemAsPublished?: boolean | cdktf.IResolvable; 
  public get markPostMortemAsPublished() {
    return this.getBooleanAttribute('mark_post_mortem_as_published');
  }
  public set markPostMortemAsPublished(value: boolean | cdktf.IResolvable) {
    this._markPostMortemAsPublished = value;
  }
  public resetMarkPostMortemAsPublished() {
    this._markPostMortemAsPublished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markPostMortemAsPublishedInput() {
    return this._markPostMortemAsPublished;
  }

  // post_mortem_template_id - computed: false, optional: true, required: false
  private _postMortemTemplateId?: string; 
  public get postMortemTemplateId() {
    return this.getStringAttribute('post_mortem_template_id');
  }
  public set postMortemTemplateId(value: string) {
    this._postMortemTemplateId = value;
  }
  public resetPostMortemTemplateId() {
    this._postMortemTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postMortemTemplateIdInput() {
    return this._postMortemTemplateId;
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

  // template - computed: false, optional: true, required: false
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook rootly_workflow_task_create_datadog_notebook}
*/
export class WorkflowTaskCreateDatadogNotebook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_create_datadog_notebook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskCreateDatadogNotebook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskCreateDatadogNotebook to import
  * @param importFromId The id of the existing WorkflowTaskCreateDatadogNotebook that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskCreateDatadogNotebook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_create_datadog_notebook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_datadog_notebook rootly_workflow_task_create_datadog_notebook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskCreateDatadogNotebookConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskCreateDatadogNotebookConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_create_datadog_notebook',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.7'
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
  private _taskParams = new WorkflowTaskCreateDatadogNotebookTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskCreateDatadogNotebookTaskParams) {
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
      task_params: workflowTaskCreateDatadogNotebookTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskCreateDatadogNotebookTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskCreateDatadogNotebookTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
