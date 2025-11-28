// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskCreateTrelloCardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#enabled WorkflowTaskCreateTrelloCard#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#id WorkflowTaskCreateTrelloCard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#name WorkflowTaskCreateTrelloCard#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#position WorkflowTaskCreateTrelloCard#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#skip_on_failure WorkflowTaskCreateTrelloCard#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#workflow_id WorkflowTaskCreateTrelloCard#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#task_params WorkflowTaskCreateTrelloCard#task_params}
  */
  readonly taskParams: WorkflowTaskCreateTrelloCardTaskParams;
}
export interface WorkflowTaskCreateTrelloCardTaskParamsLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#id WorkflowTaskCreateTrelloCard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#name WorkflowTaskCreateTrelloCard#name}
  */
  readonly name: string;
}

export function workflowTaskCreateTrelloCardTaskParamsLabelsToTerraform(struct?: WorkflowTaskCreateTrelloCardTaskParamsLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workflowTaskCreateTrelloCardTaskParamsLabelsToHclTerraform(struct?: WorkflowTaskCreateTrelloCardTaskParamsLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskCreateTrelloCardTaskParamsLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkflowTaskCreateTrelloCardTaskParamsLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskCreateTrelloCardTaskParamsLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class WorkflowTaskCreateTrelloCardTaskParamsLabelsList extends cdktf.ComplexList {
  public internalValue? : WorkflowTaskCreateTrelloCardTaskParamsLabels[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WorkflowTaskCreateTrelloCardTaskParamsLabelsOutputReference {
    return new WorkflowTaskCreateTrelloCardTaskParamsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkflowTaskCreateTrelloCardTaskParams {
  /**
  * Map must contain two fields, `id` and `name`. The archivation id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#archivation WorkflowTaskCreateTrelloCard#archivation}
  */
  readonly archivation?: { [key: string]: string };
  /**
  * Map must contain two fields, `id` and `name`. The board id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#board WorkflowTaskCreateTrelloCard#board}
  */
  readonly board: { [key: string]: string };
  /**
  * The card description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#description WorkflowTaskCreateTrelloCard#description}
  */
  readonly description?: string;
  /**
  * The due date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#due_date WorkflowTaskCreateTrelloCard#due_date}
  */
  readonly dueDate?: string;
  /**
  * Map must contain two fields, `id` and `name`. The list id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#list WorkflowTaskCreateTrelloCard#list}
  */
  readonly list: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#task_type WorkflowTaskCreateTrelloCard#task_type}
  */
  readonly taskType?: string;
  /**
  * The card title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#title WorkflowTaskCreateTrelloCard#title}
  */
  readonly title: string;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#labels WorkflowTaskCreateTrelloCard#labels}
  */
  readonly labels?: WorkflowTaskCreateTrelloCardTaskParamsLabels[] | cdktf.IResolvable;
}

export function workflowTaskCreateTrelloCardTaskParamsToTerraform(struct?: WorkflowTaskCreateTrelloCardTaskParamsOutputReference | WorkflowTaskCreateTrelloCardTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archivation: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.archivation),
    board: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.board),
    description: cdktf.stringToTerraform(struct!.description),
    due_date: cdktf.stringToTerraform(struct!.dueDate),
    list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.list),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    title: cdktf.stringToTerraform(struct!.title),
    labels: cdktf.listMapper(workflowTaskCreateTrelloCardTaskParamsLabelsToTerraform, true)(struct!.labels),
  }
}


export function workflowTaskCreateTrelloCardTaskParamsToHclTerraform(struct?: WorkflowTaskCreateTrelloCardTaskParamsOutputReference | WorkflowTaskCreateTrelloCardTaskParams): any {
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
    board: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.board),
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
    list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.list),
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
    labels: {
      value: cdktf.listMapperHcl(workflowTaskCreateTrelloCardTaskParamsLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "WorkflowTaskCreateTrelloCardTaskParamsLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskCreateTrelloCardTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskCreateTrelloCardTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archivation !== undefined) {
      hasAnyValues = true;
      internalValueResult.archivation = this._archivation;
    }
    if (this._board !== undefined) {
      hasAnyValues = true;
      internalValueResult.board = this._board;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dueDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dueDate = this._dueDate;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskCreateTrelloCardTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archivation = undefined;
      this._board = undefined;
      this._description = undefined;
      this._dueDate = undefined;
      this._list = undefined;
      this._taskType = undefined;
      this._title = undefined;
      this._labels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archivation = value.archivation;
      this._board = value.board;
      this._description = value.description;
      this._dueDate = value.dueDate;
      this._list = value.list;
      this._taskType = value.taskType;
      this._title = value.title;
      this._labels.internalValue = value.labels;
    }
  }

  // archivation - computed: false, optional: true, required: false
  private _archivation?: { [key: string]: string }; 
  public get archivation() {
    return this.getStringMapAttribute('archivation');
  }
  public set archivation(value: { [key: string]: string }) {
    this._archivation = value;
  }
  public resetArchivation() {
    this._archivation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivationInput() {
    return this._archivation;
  }

  // board - computed: false, optional: false, required: true
  private _board?: { [key: string]: string }; 
  public get board() {
    return this.getStringMapAttribute('board');
  }
  public set board(value: { [key: string]: string }) {
    this._board = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boardInput() {
    return this._board;
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

  // list - computed: false, optional: false, required: true
  private _list?: { [key: string]: string }; 
  public get list() {
    return this.getStringMapAttribute('list');
  }
  public set list(value: { [key: string]: string }) {
    this._list = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
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

  // labels - computed: false, optional: true, required: false
  private _labels = new WorkflowTaskCreateTrelloCardTaskParamsLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: WorkflowTaskCreateTrelloCardTaskParamsLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card rootly_workflow_task_create_trello_card}
*/
export class WorkflowTaskCreateTrelloCard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_create_trello_card";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskCreateTrelloCard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskCreateTrelloCard to import
  * @param importFromId The id of the existing WorkflowTaskCreateTrelloCard that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskCreateTrelloCard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_create_trello_card", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_task_create_trello_card rootly_workflow_task_create_trello_card} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskCreateTrelloCardConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskCreateTrelloCardConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_create_trello_card',
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
  private _taskParams = new WorkflowTaskCreateTrelloCardTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskCreateTrelloCardTaskParams) {
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
      task_params: workflowTaskCreateTrelloCardTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskCreateTrelloCardTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskCreateTrelloCardTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
