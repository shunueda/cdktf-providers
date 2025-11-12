// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotebookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of users who can run an action or notebook. Any user can run if left empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#allowed_entities Notebook#allowed_entities}
  */
  readonly allowedEntities?: string[];
  /**
  * The list of resources on which an action or notebook can run. No restriction, if left empty. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#allowed_resources_query Notebook#allowed_resources_query}
  */
  readonly allowedResourcesQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#approvers Notebook#approvers}
  */
  readonly approvers?: string[];
  /**
  * The data cells inside a notebook. Defined as a list of JSON objects. These may be either Markdown or Op commands. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#cells Notebook#cells}
  */
  readonly cells?: string;
  /**
  * Enables slack notifications for approvals operations. (Requires workspace and channel.) Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#communication_approval_notifications Notebook#communication_approval_notifications}
  */
  readonly communicationApprovalNotifications?: boolean | cdktf.IResolvable;
  /**
  * A string value denoting the slack channel where notifications related to the object should be sent to. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#communication_channel Notebook#communication_channel}
  */
  readonly communicationChannel?: string;
  /**
  * Enables slack notifications for create/update/delete operations. (Requires workspace and channel.) Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#communication_cud_notifications Notebook#communication_cud_notifications}
  */
  readonly communicationCudNotifications?: boolean | cdktf.IResolvable;
  /**
  * Enables slack notifications for the object executions. (Requires workspace and channel.) Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#communication_execution_notifications Notebook#communication_execution_notifications}
  */
  readonly communicationExecutionNotifications?: boolean | cdktf.IResolvable;
  /**
  * A string value denoting the slack workspace where notifications related to the object should be sent to. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#communication_workspace Notebook#communication_workspace}
  */
  readonly communicationWorkspace?: string;
  /**
  * **Deprecated** Field 'data' is obsolete. The JSON representation of a Notebook. If this field is used, then the JSON should only contain these four fields: cells, params, external_params and enabled. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#data Notebook#data}
  */
  readonly data?: string;
  /**
  * A user-friendly explanation of an object. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#description Notebook#description}
  */
  readonly description?: string;
  /**
  * List of users who can edit the object (with configure permission). Empty maps to all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#editors Notebook#editors}
  */
  readonly editors?: string[];
  /**
  * If the object is currently enabled or disabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#enabled Notebook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Notebook parameters defined via with a JSON path used to extract the parameter's value from an external payload, such as an Alertmanager alert. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#external_params Notebook#external_params}
  */
  readonly externalParams?: string;
  /**
  * Determines whether parameters containing resources are exported to actions. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#filter_resource_to_action Notebook#filter_resource_to_action}
  */
  readonly filterResourceToAction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#id Notebook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A boolean value denoting whether or not cell outputs should be persisted when running a notebook Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#is_run_output_persisted Notebook#is_run_output_persisted}
  */
  readonly isRunOutputPersisted?: boolean | cdktf.IResolvable;
  /**
  * A list of strings by which notebooks can be grouped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#labels Notebook#labels}
  */
  readonly labels?: string[];
  /**
  * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#name Notebook#name}
  */
  readonly name: string;
  /**
  * Named variables to pass to an object (e.g. an Action). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#params Notebook#params}
  */
  readonly params?: string;
  /**
  * **Deprecated** Please use 'allowed_resources_query' instead. A set of Resources (e.g. host, pod, container), optionally filtered on tags or dynamic conditions. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#resource_query Notebook#resource_query}
  */
  readonly resourceQuery?: string;
  /**
  * A list of strings that contains the name of the secrets that are used in the runbook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#secret_names Notebook#secret_names}
  */
  readonly secretNames?: string[];
  /**
  * Defaults to `60000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#timeout_ms Notebook#timeout_ms}
  */
  readonly timeoutMs?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook shoreline_notebook}
*/
export class Notebook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline_notebook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Notebook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Notebook to import
  * @param importFromId The id of the existing Notebook that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Notebook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline_notebook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/notebook shoreline_notebook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotebookConfig
  */
  public constructor(scope: Construct, id: string, config: NotebookConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline_notebook',
      terraformGeneratorMetadata: {
        providerName: 'shoreline',
        providerVersion: '1.15.38',
        providerVersionConstraint: '1.15.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedEntities = config.allowedEntities;
    this._allowedResourcesQuery = config.allowedResourcesQuery;
    this._approvers = config.approvers;
    this._cells = config.cells;
    this._communicationApprovalNotifications = config.communicationApprovalNotifications;
    this._communicationChannel = config.communicationChannel;
    this._communicationCudNotifications = config.communicationCudNotifications;
    this._communicationExecutionNotifications = config.communicationExecutionNotifications;
    this._communicationWorkspace = config.communicationWorkspace;
    this._data = config.data;
    this._description = config.description;
    this._editors = config.editors;
    this._enabled = config.enabled;
    this._externalParams = config.externalParams;
    this._filterResourceToAction = config.filterResourceToAction;
    this._id = config.id;
    this._isRunOutputPersisted = config.isRunOutputPersisted;
    this._labels = config.labels;
    this._name = config.name;
    this._params = config.params;
    this._resourceQuery = config.resourceQuery;
    this._secretNames = config.secretNames;
    this._timeoutMs = config.timeoutMs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_entities - computed: false, optional: true, required: false
  private _allowedEntities?: string[]; 
  public get allowedEntities() {
    return this.getListAttribute('allowed_entities');
  }
  public set allowedEntities(value: string[]) {
    this._allowedEntities = value;
  }
  public resetAllowedEntities() {
    this._allowedEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEntitiesInput() {
    return this._allowedEntities;
  }

  // allowed_resources_query - computed: false, optional: true, required: false
  private _allowedResourcesQuery?: string; 
  public get allowedResourcesQuery() {
    return this.getStringAttribute('allowed_resources_query');
  }
  public set allowedResourcesQuery(value: string) {
    this._allowedResourcesQuery = value;
  }
  public resetAllowedResourcesQuery() {
    this._allowedResourcesQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedResourcesQueryInput() {
    return this._allowedResourcesQuery;
  }

  // approvers - computed: false, optional: true, required: false
  private _approvers?: string[]; 
  public get approvers() {
    return this.getListAttribute('approvers');
  }
  public set approvers(value: string[]) {
    this._approvers = value;
  }
  public resetApprovers() {
    this._approvers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approversInput() {
    return this._approvers;
  }

  // cells - computed: false, optional: true, required: false
  private _cells?: string; 
  public get cells() {
    return this.getStringAttribute('cells');
  }
  public set cells(value: string) {
    this._cells = value;
  }
  public resetCells() {
    this._cells = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellsInput() {
    return this._cells;
  }

  // communication_approval_notifications - computed: false, optional: true, required: false
  private _communicationApprovalNotifications?: boolean | cdktf.IResolvable; 
  public get communicationApprovalNotifications() {
    return this.getBooleanAttribute('communication_approval_notifications');
  }
  public set communicationApprovalNotifications(value: boolean | cdktf.IResolvable) {
    this._communicationApprovalNotifications = value;
  }
  public resetCommunicationApprovalNotifications() {
    this._communicationApprovalNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationApprovalNotificationsInput() {
    return this._communicationApprovalNotifications;
  }

  // communication_channel - computed: false, optional: true, required: false
  private _communicationChannel?: string; 
  public get communicationChannel() {
    return this.getStringAttribute('communication_channel');
  }
  public set communicationChannel(value: string) {
    this._communicationChannel = value;
  }
  public resetCommunicationChannel() {
    this._communicationChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationChannelInput() {
    return this._communicationChannel;
  }

  // communication_cud_notifications - computed: false, optional: true, required: false
  private _communicationCudNotifications?: boolean | cdktf.IResolvable; 
  public get communicationCudNotifications() {
    return this.getBooleanAttribute('communication_cud_notifications');
  }
  public set communicationCudNotifications(value: boolean | cdktf.IResolvable) {
    this._communicationCudNotifications = value;
  }
  public resetCommunicationCudNotifications() {
    this._communicationCudNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationCudNotificationsInput() {
    return this._communicationCudNotifications;
  }

  // communication_execution_notifications - computed: false, optional: true, required: false
  private _communicationExecutionNotifications?: boolean | cdktf.IResolvable; 
  public get communicationExecutionNotifications() {
    return this.getBooleanAttribute('communication_execution_notifications');
  }
  public set communicationExecutionNotifications(value: boolean | cdktf.IResolvable) {
    this._communicationExecutionNotifications = value;
  }
  public resetCommunicationExecutionNotifications() {
    this._communicationExecutionNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationExecutionNotificationsInput() {
    return this._communicationExecutionNotifications;
  }

  // communication_workspace - computed: false, optional: true, required: false
  private _communicationWorkspace?: string; 
  public get communicationWorkspace() {
    return this.getStringAttribute('communication_workspace');
  }
  public set communicationWorkspace(value: string) {
    this._communicationWorkspace = value;
  }
  public resetCommunicationWorkspace() {
    this._communicationWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationWorkspaceInput() {
    return this._communicationWorkspace;
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // editors - computed: false, optional: true, required: false
  private _editors?: string[]; 
  public get editors() {
    return this.getListAttribute('editors');
  }
  public set editors(value: string[]) {
    this._editors = value;
  }
  public resetEditors() {
    this._editors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editorsInput() {
    return this._editors;
  }

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

  // external_params - computed: false, optional: true, required: false
  private _externalParams?: string; 
  public get externalParams() {
    return this.getStringAttribute('external_params');
  }
  public set externalParams(value: string) {
    this._externalParams = value;
  }
  public resetExternalParams() {
    this._externalParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalParamsInput() {
    return this._externalParams;
  }

  // filter_resource_to_action - computed: false, optional: true, required: false
  private _filterResourceToAction?: boolean | cdktf.IResolvable; 
  public get filterResourceToAction() {
    return this.getBooleanAttribute('filter_resource_to_action');
  }
  public set filterResourceToAction(value: boolean | cdktf.IResolvable) {
    this._filterResourceToAction = value;
  }
  public resetFilterResourceToAction() {
    this._filterResourceToAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterResourceToActionInput() {
    return this._filterResourceToAction;
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

  // is_run_output_persisted - computed: false, optional: true, required: false
  private _isRunOutputPersisted?: boolean | cdktf.IResolvable; 
  public get isRunOutputPersisted() {
    return this.getBooleanAttribute('is_run_output_persisted');
  }
  public set isRunOutputPersisted(value: boolean | cdktf.IResolvable) {
    this._isRunOutputPersisted = value;
  }
  public resetIsRunOutputPersisted() {
    this._isRunOutputPersisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRunOutputPersistedInput() {
    return this._isRunOutputPersisted;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // params - computed: false, optional: true, required: false
  private _params?: string; 
  public get params() {
    return this.getStringAttribute('params');
  }
  public set params(value: string) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // resource_query - computed: false, optional: true, required: false
  private _resourceQuery?: string; 
  public get resourceQuery() {
    return this.getStringAttribute('resource_query');
  }
  public set resourceQuery(value: string) {
    this._resourceQuery = value;
  }
  public resetResourceQuery() {
    this._resourceQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQueryInput() {
    return this._resourceQuery;
  }

  // secret_names - computed: false, optional: true, required: false
  private _secretNames?: string[]; 
  public get secretNames() {
    return this.getListAttribute('secret_names');
  }
  public set secretNames(value: string[]) {
    this._secretNames = value;
  }
  public resetSecretNames() {
    this._secretNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamesInput() {
    return this._secretNames;
  }

  // timeout_ms - computed: false, optional: true, required: false
  private _timeoutMs?: number; 
  public get timeoutMs() {
    return this.getNumberAttribute('timeout_ms');
  }
  public set timeoutMs(value: number) {
    this._timeoutMs = value;
  }
  public resetTimeoutMs() {
    this._timeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMsInput() {
    return this._timeoutMs;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedEntities),
      allowed_resources_query: cdktf.stringToTerraform(this._allowedResourcesQuery),
      approvers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvers),
      cells: cdktf.stringToTerraform(this._cells),
      communication_approval_notifications: cdktf.booleanToTerraform(this._communicationApprovalNotifications),
      communication_channel: cdktf.stringToTerraform(this._communicationChannel),
      communication_cud_notifications: cdktf.booleanToTerraform(this._communicationCudNotifications),
      communication_execution_notifications: cdktf.booleanToTerraform(this._communicationExecutionNotifications),
      communication_workspace: cdktf.stringToTerraform(this._communicationWorkspace),
      data: cdktf.stringToTerraform(this._data),
      description: cdktf.stringToTerraform(this._description),
      editors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._editors),
      enabled: cdktf.booleanToTerraform(this._enabled),
      external_params: cdktf.stringToTerraform(this._externalParams),
      filter_resource_to_action: cdktf.booleanToTerraform(this._filterResourceToAction),
      id: cdktf.stringToTerraform(this._id),
      is_run_output_persisted: cdktf.booleanToTerraform(this._isRunOutputPersisted),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      params: cdktf.stringToTerraform(this._params),
      resource_query: cdktf.stringToTerraform(this._resourceQuery),
      secret_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secretNames),
      timeout_ms: cdktf.numberToTerraform(this._timeoutMs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_entities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedEntities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_resources_query: {
        value: cdktf.stringToHclTerraform(this._allowedResourcesQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approvers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cells: {
        value: cdktf.stringToHclTerraform(this._cells),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_approval_notifications: {
        value: cdktf.booleanToHclTerraform(this._communicationApprovalNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      communication_channel: {
        value: cdktf.stringToHclTerraform(this._communicationChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_cud_notifications: {
        value: cdktf.booleanToHclTerraform(this._communicationCudNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      communication_execution_notifications: {
        value: cdktf.booleanToHclTerraform(this._communicationExecutionNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      communication_workspace: {
        value: cdktf.stringToHclTerraform(this._communicationWorkspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      editors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._editors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_params: {
        value: cdktf.stringToHclTerraform(this._externalParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_resource_to_action: {
        value: cdktf.booleanToHclTerraform(this._filterResourceToAction),
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
      is_run_output_persisted: {
        value: cdktf.booleanToHclTerraform(this._isRunOutputPersisted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params: {
        value: cdktf.stringToHclTerraform(this._params),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_query: {
        value: cdktf.stringToHclTerraform(this._resourceQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secretNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout_ms: {
        value: cdktf.numberToHclTerraform(this._timeoutMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
