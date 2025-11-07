// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskUpdateNotionPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#enabled WorkflowTaskUpdateNotionPage#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#id WorkflowTaskUpdateNotionPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#name WorkflowTaskUpdateNotionPage#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#position WorkflowTaskUpdateNotionPage#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#skip_on_failure WorkflowTaskUpdateNotionPage#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#workflow_id WorkflowTaskUpdateNotionPage#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#task_params WorkflowTaskUpdateNotionPage#task_params}
  */
  readonly taskParams: WorkflowTaskUpdateNotionPageTaskParams;
}
export interface WorkflowTaskUpdateNotionPageTaskParams {
  /**
  * Custom page content with liquid templating support. When provided, only this content will be rendered (no default sections)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#content WorkflowTaskUpdateNotionPage#content}
  */
  readonly content?: string;
  /**
  * The Notion page ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#file_id WorkflowTaskUpdateNotionPage#file_id}
  */
  readonly fileId: string;
  /**
  * Retrospective template to use when creating page task, if desired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#post_mortem_template_id WorkflowTaskUpdateNotionPage#post_mortem_template_id}
  */
  readonly postMortemTemplateId?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#show_action_items_as_table WorkflowTaskUpdateNotionPage#show_action_items_as_table}
  */
  readonly showActionItemsAsTable?: boolean | cdktf.IResolvable;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#show_timeline_as_table WorkflowTaskUpdateNotionPage#show_timeline_as_table}
  */
  readonly showTimelineAsTable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#task_type WorkflowTaskUpdateNotionPage#task_type}
  */
  readonly taskType?: string;
  /**
  * The Notion page title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#title WorkflowTaskUpdateNotionPage#title}
  */
  readonly title?: string;
}

export function workflowTaskUpdateNotionPageTaskParamsToTerraform(struct?: WorkflowTaskUpdateNotionPageTaskParamsOutputReference | WorkflowTaskUpdateNotionPageTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    file_id: cdktf.stringToTerraform(struct!.fileId),
    post_mortem_template_id: cdktf.stringToTerraform(struct!.postMortemTemplateId),
    show_action_items_as_table: cdktf.booleanToTerraform(struct!.showActionItemsAsTable),
    show_timeline_as_table: cdktf.booleanToTerraform(struct!.showTimelineAsTable),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function workflowTaskUpdateNotionPageTaskParamsToHclTerraform(struct?: WorkflowTaskUpdateNotionPageTaskParamsOutputReference | WorkflowTaskUpdateNotionPageTaskParams): any {
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
    file_id: {
      value: cdktf.stringToHclTerraform(struct!.fileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_mortem_template_id: {
      value: cdktf.stringToHclTerraform(struct!.postMortemTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_action_items_as_table: {
      value: cdktf.booleanToHclTerraform(struct!.showActionItemsAsTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_timeline_as_table: {
      value: cdktf.booleanToHclTerraform(struct!.showTimelineAsTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class WorkflowTaskUpdateNotionPageTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskUpdateNotionPageTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._fileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileId = this._fileId;
    }
    if (this._postMortemTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.postMortemTemplateId = this._postMortemTemplateId;
    }
    if (this._showActionItemsAsTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.showActionItemsAsTable = this._showActionItemsAsTable;
    }
    if (this._showTimelineAsTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTimelineAsTable = this._showTimelineAsTable;
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

  public set internalValue(value: WorkflowTaskUpdateNotionPageTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._fileId = undefined;
      this._postMortemTemplateId = undefined;
      this._showActionItemsAsTable = undefined;
      this._showTimelineAsTable = undefined;
      this._taskType = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._fileId = value.fileId;
      this._postMortemTemplateId = value.postMortemTemplateId;
      this._showActionItemsAsTable = value.showActionItemsAsTable;
      this._showTimelineAsTable = value.showTimelineAsTable;
      this._taskType = value.taskType;
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

  // file_id - computed: false, optional: false, required: true
  private _fileId?: string; 
  public get fileId() {
    return this.getStringAttribute('file_id');
  }
  public set fileId(value: string) {
    this._fileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIdInput() {
    return this._fileId;
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

  // show_action_items_as_table - computed: false, optional: true, required: false
  private _showActionItemsAsTable?: boolean | cdktf.IResolvable; 
  public get showActionItemsAsTable() {
    return this.getBooleanAttribute('show_action_items_as_table');
  }
  public set showActionItemsAsTable(value: boolean | cdktf.IResolvable) {
    this._showActionItemsAsTable = value;
  }
  public resetShowActionItemsAsTable() {
    this._showActionItemsAsTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showActionItemsAsTableInput() {
    return this._showActionItemsAsTable;
  }

  // show_timeline_as_table - computed: false, optional: true, required: false
  private _showTimelineAsTable?: boolean | cdktf.IResolvable; 
  public get showTimelineAsTable() {
    return this.getBooleanAttribute('show_timeline_as_table');
  }
  public set showTimelineAsTable(value: boolean | cdktf.IResolvable) {
    this._showTimelineAsTable = value;
  }
  public resetShowTimelineAsTable() {
    this._showTimelineAsTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTimelineAsTableInput() {
    return this._showTimelineAsTable;
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page rootly_workflow_task_update_notion_page}
*/
export class WorkflowTaskUpdateNotionPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_update_notion_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskUpdateNotionPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskUpdateNotionPage to import
  * @param importFromId The id of the existing WorkflowTaskUpdateNotionPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskUpdateNotionPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_update_notion_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_task_update_notion_page rootly_workflow_task_update_notion_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskUpdateNotionPageConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskUpdateNotionPageConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_update_notion_page',
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
  private _taskParams = new WorkflowTaskUpdateNotionPageTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskUpdateNotionPageTaskParams) {
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
      task_params: workflowTaskUpdateNotionPageTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskUpdateNotionPageTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskUpdateNotionPageTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
