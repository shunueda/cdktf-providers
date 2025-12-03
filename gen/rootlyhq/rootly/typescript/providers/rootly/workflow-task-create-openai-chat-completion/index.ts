// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskCreateOpenaiChatCompletionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#enabled WorkflowTaskCreateOpenaiChatCompletion#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#id WorkflowTaskCreateOpenaiChatCompletion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#name WorkflowTaskCreateOpenaiChatCompletion#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#position WorkflowTaskCreateOpenaiChatCompletion#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#skip_on_failure WorkflowTaskCreateOpenaiChatCompletion#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#workflow_id WorkflowTaskCreateOpenaiChatCompletion#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#task_params WorkflowTaskCreateOpenaiChatCompletion#task_params}
  */
  readonly taskParams: WorkflowTaskCreateOpenaiChatCompletionTaskParams;
}
export interface WorkflowTaskCreateOpenaiChatCompletionTaskParams {
  /**
  * Maximum number of tokens to generate in the response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#max_tokens WorkflowTaskCreateOpenaiChatCompletion#max_tokens}
  */
  readonly maxTokens?: string;
  /**
  * Map must contain two fields, `id` and `name`. The OpenAI model. eg: gpt-4o-mini
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#model WorkflowTaskCreateOpenaiChatCompletion#model}
  */
  readonly model: { [key: string]: string };
  /**
  * The prompt to send to OpenAI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#prompt WorkflowTaskCreateOpenaiChatCompletion#prompt}
  */
  readonly prompt: string;
  /**
  * Constrains effort on reasoning for GPT-5 and o-series models. Value must be one of `minimal`, `low`, `medium`, `high`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#reasoning_effort WorkflowTaskCreateOpenaiChatCompletion#reasoning_effort}
  */
  readonly reasoningEffort?: string;
  /**
  * Summary of the reasoning performed by the model for GPT-5 and o-series models. Value must be one of `auto`, `concise`, `detailed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#reasoning_summary WorkflowTaskCreateOpenaiChatCompletion#reasoning_summary}
  */
  readonly reasoningSummary?: string;
  /**
  * The system prompt to send to OpenAI (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#system_prompt WorkflowTaskCreateOpenaiChatCompletion#system_prompt}
  */
  readonly systemPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#task_type WorkflowTaskCreateOpenaiChatCompletion#task_type}
  */
  readonly taskType?: string;
  /**
  * Controls randomness in the response. Higher values make output more random
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#temperature WorkflowTaskCreateOpenaiChatCompletion#temperature}
  */
  readonly temperature?: number;
  /**
  * Controls diversity via nucleus sampling. Lower values make output more focused
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#top_p WorkflowTaskCreateOpenaiChatCompletion#top_p}
  */
  readonly topP?: number;
}

export function workflowTaskCreateOpenaiChatCompletionTaskParamsToTerraform(struct?: WorkflowTaskCreateOpenaiChatCompletionTaskParamsOutputReference | WorkflowTaskCreateOpenaiChatCompletionTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_tokens: cdktf.stringToTerraform(struct!.maxTokens),
    model: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.model),
    prompt: cdktf.stringToTerraform(struct!.prompt),
    reasoning_effort: cdktf.stringToTerraform(struct!.reasoningEffort),
    reasoning_summary: cdktf.stringToTerraform(struct!.reasoningSummary),
    system_prompt: cdktf.stringToTerraform(struct!.systemPrompt),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    temperature: cdktf.numberToTerraform(struct!.temperature),
    top_p: cdktf.numberToTerraform(struct!.topP),
  }
}


export function workflowTaskCreateOpenaiChatCompletionTaskParamsToHclTerraform(struct?: WorkflowTaskCreateOpenaiChatCompletionTaskParamsOutputReference | WorkflowTaskCreateOpenaiChatCompletionTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_tokens: {
      value: cdktf.stringToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.model),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reasoning_effort: {
      value: cdktf.stringToHclTerraform(struct!.reasoningEffort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reasoning_summary: {
      value: cdktf.stringToHclTerraform(struct!.reasoningSummary),
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
    temperature: {
      value: cdktf.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktf.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskCreateOpenaiChatCompletionTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskCreateOpenaiChatCompletionTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._reasoningEffort !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasoningEffort = this._reasoningEffort;
    }
    if (this._reasoningSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasoningSummary = this._reasoningSummary;
    }
    if (this._systemPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemPrompt = this._systemPrompt;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskCreateOpenaiChatCompletionTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxTokens = undefined;
      this._model = undefined;
      this._prompt = undefined;
      this._reasoningEffort = undefined;
      this._reasoningSummary = undefined;
      this._systemPrompt = undefined;
      this._taskType = undefined;
      this._temperature = undefined;
      this._topP = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxTokens = value.maxTokens;
      this._model = value.model;
      this._prompt = value.prompt;
      this._reasoningEffort = value.reasoningEffort;
      this._reasoningSummary = value.reasoningSummary;
      this._systemPrompt = value.systemPrompt;
      this._taskType = value.taskType;
      this._temperature = value.temperature;
      this._topP = value.topP;
    }
  }

  // max_tokens - computed: false, optional: true, required: false
  private _maxTokens?: string; 
  public get maxTokens() {
    return this.getStringAttribute('max_tokens');
  }
  public set maxTokens(value: string) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
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

  // reasoning_effort - computed: false, optional: true, required: false
  private _reasoningEffort?: string; 
  public get reasoningEffort() {
    return this.getStringAttribute('reasoning_effort');
  }
  public set reasoningEffort(value: string) {
    this._reasoningEffort = value;
  }
  public resetReasoningEffort() {
    this._reasoningEffort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasoningEffortInput() {
    return this._reasoningEffort;
  }

  // reasoning_summary - computed: false, optional: true, required: false
  private _reasoningSummary?: string; 
  public get reasoningSummary() {
    return this.getStringAttribute('reasoning_summary');
  }
  public set reasoningSummary(value: string) {
    this._reasoningSummary = value;
  }
  public resetReasoningSummary() {
    this._reasoningSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasoningSummaryInput() {
    return this._reasoningSummary;
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

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_p - computed: false, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion rootly_workflow_task_create_openai_chat_completion}
*/
export class WorkflowTaskCreateOpenaiChatCompletion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_create_openai_chat_completion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskCreateOpenaiChatCompletion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskCreateOpenaiChatCompletion to import
  * @param importFromId The id of the existing WorkflowTaskCreateOpenaiChatCompletion that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskCreateOpenaiChatCompletion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_create_openai_chat_completion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_task_create_openai_chat_completion rootly_workflow_task_create_openai_chat_completion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskCreateOpenaiChatCompletionConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskCreateOpenaiChatCompletionConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_create_openai_chat_completion',
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
  private _taskParams = new WorkflowTaskCreateOpenaiChatCompletionTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskCreateOpenaiChatCompletionTaskParams) {
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
      task_params: workflowTaskCreateOpenaiChatCompletionTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskCreateOpenaiChatCompletionTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskCreateOpenaiChatCompletionTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
