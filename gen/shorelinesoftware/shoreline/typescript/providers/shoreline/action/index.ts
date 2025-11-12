// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of users who can run an action or notebook. Any user can run if left empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#allowed_entities Action#allowed_entities}
  */
  readonly allowedEntities?: string[];
  /**
  * The list of resources on which an action or notebook can run. No restriction, if left empty. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#allowed_resources_query Action#allowed_resources_query}
  */
  readonly allowedResourcesQuery?: string;
  /**
  * A specific action to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#command Action#command}
  */
  readonly command: string;
  /**
  * A string value denoting the slack channel where notifications related to the object should be sent to. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#communication_channel Action#communication_channel}
  */
  readonly communicationChannel?: string;
  /**
  * A string value denoting the slack workspace where notifications related to the object should be sent to. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#communication_workspace Action#communication_workspace}
  */
  readonly communicationWorkspace?: string;
  /**
  * The long description of the Action's completion. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#complete_long_template Action#complete_long_template}
  */
  readonly completeLongTemplate?: string;
  /**
  * The short description of the Action's completion. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#complete_short_template Action#complete_short_template}
  */
  readonly completeShortTemplate?: string;
  /**
  * UI title of the Action's completion. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#complete_title_template Action#complete_title_template}
  */
  readonly completeTitleTemplate?: string;
  /**
  * A user-friendly explanation of an object. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#description Action#description}
  */
  readonly description?: string;
  /**
  * List of users who can edit the object (with configure permission). Empty maps to all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#editors Action#editors}
  */
  readonly editors?: string[];
  /**
  * If the object is currently enabled or disabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#enabled Action#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The long description of the Action's error condition. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#error_long_template Action#error_long_template}
  */
  readonly errorLongTemplate?: string;
  /**
  * The short description of the Action's error condition. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#error_short_template Action#error_short_template}
  */
  readonly errorShortTemplate?: string;
  /**
  * UI title of the Action's error condition. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#error_title_template Action#error_title_template}
  */
  readonly errorTitleTemplate?: string;
  /**
  * file object dependencies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#file_deps Action#file_deps}
  */
  readonly fileDeps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#id Action#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#name Action#name}
  */
  readonly name: string;
  /**
  * Named variables to pass to an object (e.g. an Action).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#params Action#params}
  */
  readonly params?: string[];
  /**
  * Result environment variable ... an environment variable used to output values through. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#res_env_var Action#res_env_var}
  */
  readonly resEnvVar?: string;
  /**
  * A set of Resources (e.g. host, pod, container), optionally filtered on tags or dynamic conditions. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#resource_query Action#resource_query}
  */
  readonly resourceQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#resource_tags_to_export Action#resource_tags_to_export}
  */
  readonly resourceTagsToExport?: string[];
  /**
  * The commandline shell to use (e.g. /bin/sh). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#shell Action#shell}
  */
  readonly shell?: string;
  /**
  * The long description when starting the Action. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#start_long_template Action#start_long_template}
  */
  readonly startLongTemplate?: string;
  /**
  * The short description when starting the Action. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#start_short_template Action#start_short_template}
  */
  readonly startShortTemplate?: string;
  /**
  * UI title of the start of the Action. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#start_title_template Action#start_title_template}
  */
  readonly startTitleTemplate?: string;
  /**
  * Maximum time to wait, in milliseconds. Defaults to `60000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#timeout Action#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action shoreline_action}
*/
export class Action extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Action resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Action to import
  * @param importFromId The id of the existing Action that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Action to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/action shoreline_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionConfig
  */
  public constructor(scope: Construct, id: string, config: ActionConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline_action',
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
    this._command = config.command;
    this._communicationChannel = config.communicationChannel;
    this._communicationWorkspace = config.communicationWorkspace;
    this._completeLongTemplate = config.completeLongTemplate;
    this._completeShortTemplate = config.completeShortTemplate;
    this._completeTitleTemplate = config.completeTitleTemplate;
    this._description = config.description;
    this._editors = config.editors;
    this._enabled = config.enabled;
    this._errorLongTemplate = config.errorLongTemplate;
    this._errorShortTemplate = config.errorShortTemplate;
    this._errorTitleTemplate = config.errorTitleTemplate;
    this._fileDeps = config.fileDeps;
    this._id = config.id;
    this._name = config.name;
    this._params = config.params;
    this._resEnvVar = config.resEnvVar;
    this._resourceQuery = config.resourceQuery;
    this._resourceTagsToExport = config.resourceTagsToExport;
    this._shell = config.shell;
    this._startLongTemplate = config.startLongTemplate;
    this._startShortTemplate = config.startShortTemplate;
    this._startTitleTemplate = config.startTitleTemplate;
    this._timeout = config.timeout;
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

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
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

  // complete_long_template - computed: false, optional: true, required: false
  private _completeLongTemplate?: string; 
  public get completeLongTemplate() {
    return this.getStringAttribute('complete_long_template');
  }
  public set completeLongTemplate(value: string) {
    this._completeLongTemplate = value;
  }
  public resetCompleteLongTemplate() {
    this._completeLongTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeLongTemplateInput() {
    return this._completeLongTemplate;
  }

  // complete_short_template - computed: false, optional: true, required: false
  private _completeShortTemplate?: string; 
  public get completeShortTemplate() {
    return this.getStringAttribute('complete_short_template');
  }
  public set completeShortTemplate(value: string) {
    this._completeShortTemplate = value;
  }
  public resetCompleteShortTemplate() {
    this._completeShortTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeShortTemplateInput() {
    return this._completeShortTemplate;
  }

  // complete_title_template - computed: false, optional: true, required: false
  private _completeTitleTemplate?: string; 
  public get completeTitleTemplate() {
    return this.getStringAttribute('complete_title_template');
  }
  public set completeTitleTemplate(value: string) {
    this._completeTitleTemplate = value;
  }
  public resetCompleteTitleTemplate() {
    this._completeTitleTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeTitleTemplateInput() {
    return this._completeTitleTemplate;
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

  // error_long_template - computed: false, optional: true, required: false
  private _errorLongTemplate?: string; 
  public get errorLongTemplate() {
    return this.getStringAttribute('error_long_template');
  }
  public set errorLongTemplate(value: string) {
    this._errorLongTemplate = value;
  }
  public resetErrorLongTemplate() {
    this._errorLongTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLongTemplateInput() {
    return this._errorLongTemplate;
  }

  // error_short_template - computed: false, optional: true, required: false
  private _errorShortTemplate?: string; 
  public get errorShortTemplate() {
    return this.getStringAttribute('error_short_template');
  }
  public set errorShortTemplate(value: string) {
    this._errorShortTemplate = value;
  }
  public resetErrorShortTemplate() {
    this._errorShortTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorShortTemplateInput() {
    return this._errorShortTemplate;
  }

  // error_title_template - computed: false, optional: true, required: false
  private _errorTitleTemplate?: string; 
  public get errorTitleTemplate() {
    return this.getStringAttribute('error_title_template');
  }
  public set errorTitleTemplate(value: string) {
    this._errorTitleTemplate = value;
  }
  public resetErrorTitleTemplate() {
    this._errorTitleTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorTitleTemplateInput() {
    return this._errorTitleTemplate;
  }

  // file_deps - computed: false, optional: true, required: false
  private _fileDeps?: string[]; 
  public get fileDeps() {
    return this.getListAttribute('file_deps');
  }
  public set fileDeps(value: string[]) {
    this._fileDeps = value;
  }
  public resetFileDeps() {
    this._fileDeps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDepsInput() {
    return this._fileDeps;
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
  private _params?: string[]; 
  public get params() {
    return this.getListAttribute('params');
  }
  public set params(value: string[]) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // res_env_var - computed: false, optional: true, required: false
  private _resEnvVar?: string; 
  public get resEnvVar() {
    return this.getStringAttribute('res_env_var');
  }
  public set resEnvVar(value: string) {
    this._resEnvVar = value;
  }
  public resetResEnvVar() {
    this._resEnvVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resEnvVarInput() {
    return this._resEnvVar;
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

  // resource_tags_to_export - computed: false, optional: true, required: false
  private _resourceTagsToExport?: string[]; 
  public get resourceTagsToExport() {
    return this.getListAttribute('resource_tags_to_export');
  }
  public set resourceTagsToExport(value: string[]) {
    this._resourceTagsToExport = value;
  }
  public resetResourceTagsToExport() {
    this._resourceTagsToExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsToExportInput() {
    return this._resourceTagsToExport;
  }

  // shell - computed: false, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // start_long_template - computed: false, optional: true, required: false
  private _startLongTemplate?: string; 
  public get startLongTemplate() {
    return this.getStringAttribute('start_long_template');
  }
  public set startLongTemplate(value: string) {
    this._startLongTemplate = value;
  }
  public resetStartLongTemplate() {
    this._startLongTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startLongTemplateInput() {
    return this._startLongTemplate;
  }

  // start_short_template - computed: false, optional: true, required: false
  private _startShortTemplate?: string; 
  public get startShortTemplate() {
    return this.getStringAttribute('start_short_template');
  }
  public set startShortTemplate(value: string) {
    this._startShortTemplate = value;
  }
  public resetStartShortTemplate() {
    this._startShortTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startShortTemplateInput() {
    return this._startShortTemplate;
  }

  // start_title_template - computed: false, optional: true, required: false
  private _startTitleTemplate?: string; 
  public get startTitleTemplate() {
    return this.getStringAttribute('start_title_template');
  }
  public set startTitleTemplate(value: string) {
    this._startTitleTemplate = value;
  }
  public resetStartTitleTemplate() {
    this._startTitleTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTitleTemplateInput() {
    return this._startTitleTemplate;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
      command: cdktf.stringToTerraform(this._command),
      communication_channel: cdktf.stringToTerraform(this._communicationChannel),
      communication_workspace: cdktf.stringToTerraform(this._communicationWorkspace),
      complete_long_template: cdktf.stringToTerraform(this._completeLongTemplate),
      complete_short_template: cdktf.stringToTerraform(this._completeShortTemplate),
      complete_title_template: cdktf.stringToTerraform(this._completeTitleTemplate),
      description: cdktf.stringToTerraform(this._description),
      editors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._editors),
      enabled: cdktf.booleanToTerraform(this._enabled),
      error_long_template: cdktf.stringToTerraform(this._errorLongTemplate),
      error_short_template: cdktf.stringToTerraform(this._errorShortTemplate),
      error_title_template: cdktf.stringToTerraform(this._errorTitleTemplate),
      file_deps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fileDeps),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      params: cdktf.listMapper(cdktf.stringToTerraform, false)(this._params),
      res_env_var: cdktf.stringToTerraform(this._resEnvVar),
      resource_query: cdktf.stringToTerraform(this._resourceQuery),
      resource_tags_to_export: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceTagsToExport),
      shell: cdktf.stringToTerraform(this._shell),
      start_long_template: cdktf.stringToTerraform(this._startLongTemplate),
      start_short_template: cdktf.stringToTerraform(this._startShortTemplate),
      start_title_template: cdktf.stringToTerraform(this._startTitleTemplate),
      timeout: cdktf.numberToTerraform(this._timeout),
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
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_channel: {
        value: cdktf.stringToHclTerraform(this._communicationChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communication_workspace: {
        value: cdktf.stringToHclTerraform(this._communicationWorkspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      complete_long_template: {
        value: cdktf.stringToHclTerraform(this._completeLongTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      complete_short_template: {
        value: cdktf.stringToHclTerraform(this._completeShortTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      complete_title_template: {
        value: cdktf.stringToHclTerraform(this._completeTitleTemplate),
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
      error_long_template: {
        value: cdktf.stringToHclTerraform(this._errorLongTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_short_template: {
        value: cdktf.stringToHclTerraform(this._errorShortTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_title_template: {
        value: cdktf.stringToHclTerraform(this._errorTitleTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_deps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fileDeps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      params: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._params),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      res_env_var: {
        value: cdktf.stringToHclTerraform(this._resEnvVar),
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
      resource_tags_to_export: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceTagsToExport),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shell: {
        value: cdktf.stringToHclTerraform(this._shell),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_long_template: {
        value: cdktf.stringToHclTerraform(this._startLongTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_short_template: {
        value: cdktf.stringToHclTerraform(this._startShortTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_title_template: {
        value: cdktf.stringToHclTerraform(this._startTitleTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
