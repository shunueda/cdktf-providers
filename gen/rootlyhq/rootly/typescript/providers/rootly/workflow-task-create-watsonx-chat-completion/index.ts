// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskCreateWatsonxChatCompletionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#enabled WorkflowTaskCreateWatsonxChatCompletion#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#id WorkflowTaskCreateWatsonxChatCompletion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#name WorkflowTaskCreateWatsonxChatCompletion#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#position WorkflowTaskCreateWatsonxChatCompletion#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#skip_on_failure WorkflowTaskCreateWatsonxChatCompletion#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#workflow_id WorkflowTaskCreateWatsonxChatCompletion#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#task_params WorkflowTaskCreateWatsonxChatCompletion#task_params}
  */
  readonly taskParams: WorkflowTaskCreateWatsonxChatCompletionTaskParams;
}
export interface WorkflowTaskCreateWatsonxChatCompletionTaskParams {
  /**
  * Map must contain two fields, `id` and `name`. The WatsonX model. eg: ibm/granite-3-b8b-instruct
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#model WorkflowTaskCreateWatsonxChatCompletion#model}
  */
  readonly model: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#project_id WorkflowTaskCreateWatsonxChatCompletion#project_id}
  */
  readonly projectId: string;
  /**
  * The prompt to send to WatsonX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#prompt WorkflowTaskCreateWatsonxChatCompletion#prompt}
  */
  readonly prompt: string;
  /**
  * The system prompt to send to WatsonX (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#system_prompt WorkflowTaskCreateWatsonxChatCompletion#system_prompt}
  */
  readonly systemPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#task_type WorkflowTaskCreateWatsonxChatCompletion#task_type}
  */
  readonly taskType?: string;
}

export function workflowTaskCreateWatsonxChatCompletionTaskParamsToTerraform(struct?: WorkflowTaskCreateWatsonxChatCompletionTaskParamsOutputReference | WorkflowTaskCreateWatsonxChatCompletionTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.model),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    prompt: cdktf.stringToTerraform(struct!.prompt),
    system_prompt: cdktf.stringToTerraform(struct!.systemPrompt),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


export function workflowTaskCreateWatsonxChatCompletionTaskParamsToHclTerraform(struct?: WorkflowTaskCreateWatsonxChatCompletionTaskParamsOutputReference | WorkflowTaskCreateWatsonxChatCompletionTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.model),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_prompt: {
      value: cdktf.stringToHclTerraform(struct!.systemPrompt),
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

export class WorkflowTaskCreateWatsonxChatCompletionTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskCreateWatsonxChatCompletionTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._systemPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemPrompt = this._systemPrompt;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskCreateWatsonxChatCompletionTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._projectId = undefined;
      this._prompt = undefined;
      this._systemPrompt = undefined;
      this._taskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._projectId = value.projectId;
      this._prompt = value.prompt;
      this._systemPrompt = value.systemPrompt;
      this._taskType = value.taskType;
    }
  }

  // model - computed: false, optional: false, required: true
  private _model?: { [key: string]: string }; 
  public get model() {
    return this.getStringMapAttribute('model');
  }
  public set model(value: { [key: string]: string }) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // system_prompt - computed: false, optional: true, required: false
  private _systemPrompt?: string; 
  public get systemPrompt() {
    return this.getStringAttribute('system_prompt');
  }
  public set systemPrompt(value: string) {
    this._systemPrompt = value;
  }
  public resetSystemPrompt() {
    this._systemPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPromptInput() {
    return this._systemPrompt;
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion rootly_workflow_task_create_watsonx_chat_completion}
*/
export class WorkflowTaskCreateWatsonxChatCompletion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_create_watsonx_chat_completion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskCreateWatsonxChatCompletion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskCreateWatsonxChatCompletion to import
  * @param importFromId The id of the existing WorkflowTaskCreateWatsonxChatCompletion that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskCreateWatsonxChatCompletion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_create_watsonx_chat_completion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_create_watsonx_chat_completion rootly_workflow_task_create_watsonx_chat_completion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskCreateWatsonxChatCompletionConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskCreateWatsonxChatCompletionConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_create_watsonx_chat_completion',
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
  private _taskParams = new WorkflowTaskCreateWatsonxChatCompletionTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskCreateWatsonxChatCompletionTaskParams) {
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
      task_params: workflowTaskCreateWatsonxChatCompletionTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskCreateWatsonxChatCompletionTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskCreateWatsonxChatCompletionTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
