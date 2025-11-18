// https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/pipelines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBuddyPipelinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/pipelines#domain DataBuddyPipelines#domain}
  */
  readonly domain: string;
  /**
  * The pipeline's name regular expression to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/pipelines#name_regex DataBuddyPipelines#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * The project's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/pipelines#project_name DataBuddyPipelines#project_name}
  */
  readonly projectName: string;
}
export interface DataBuddyPipelinesPipelinesEvent {
}

export function dataBuddyPipelinesPipelinesEventToTerraform(struct?: DataBuddyPipelinesPipelinesEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBuddyPipelinesPipelinesEventToHclTerraform(struct?: DataBuddyPipelinesPipelinesEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBuddyPipelinesPipelinesEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBuddyPipelinesPipelinesEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBuddyPipelinesPipelinesEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branches - computed: true, optional: false, required: false
  public get branches() {
    return cdktf.Fn.tolist(this.getListAttribute('branches'));
  }

  // cron - computed: true, optional: false, required: false
  public get cron() {
    return this.getStringAttribute('cron');
  }

  // delay - computed: true, optional: false, required: false
  public get delay() {
    return this.getNumberAttribute('delay');
  }

  // events - computed: true, optional: false, required: false
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // refs - computed: true, optional: false, required: false
  public get refs() {
    return cdktf.Fn.tolist(this.getListAttribute('refs'));
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // totp - computed: true, optional: false, required: false
  public get totp() {
    return this.getBooleanAttribute('totp');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // whitelist - computed: true, optional: false, required: false
  public get whitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('whitelist'));
  }
}

export class DataBuddyPipelinesPipelinesEventList extends cdktf.ComplexList {

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
  public get(index: number): DataBuddyPipelinesPipelinesEventOutputReference {
    return new DataBuddyPipelinesPipelinesEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBuddyPipelinesPipelinesGitConfig {
}

export function dataBuddyPipelinesPipelinesGitConfigToTerraform(struct?: DataBuddyPipelinesPipelinesGitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBuddyPipelinesPipelinesGitConfigToHclTerraform(struct?: DataBuddyPipelinesPipelinesGitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBuddyPipelinesPipelinesGitConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBuddyPipelinesPipelinesGitConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBuddyPipelinesPipelinesGitConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}
export interface DataBuddyPipelinesPipelinesRemoteParameter {
}

export function dataBuddyPipelinesPipelinesRemoteParameterToTerraform(struct?: DataBuddyPipelinesPipelinesRemoteParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBuddyPipelinesPipelinesRemoteParameterToHclTerraform(struct?: DataBuddyPipelinesPipelinesRemoteParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBuddyPipelinesPipelinesRemoteParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBuddyPipelinesPipelinesRemoteParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBuddyPipelinesPipelinesRemoteParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataBuddyPipelinesPipelinesRemoteParameterList extends cdktf.ComplexList {

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
  public get(index: number): DataBuddyPipelinesPipelinesRemoteParameterOutputReference {
    return new DataBuddyPipelinesPipelinesRemoteParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBuddyPipelinesPipelines {
}

export function dataBuddyPipelinesPipelinesToTerraform(struct?: DataBuddyPipelinesPipelines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBuddyPipelinesPipelinesToHclTerraform(struct?: DataBuddyPipelinesPipelines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBuddyPipelinesPipelinesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBuddyPipelinesPipelines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBuddyPipelinesPipelines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrent_pipeline_runs - computed: true, optional: false, required: false
  public get concurrentPipelineRuns() {
    return this.getBooleanAttribute('concurrent_pipeline_runs');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // definition_source - computed: true, optional: false, required: false
  public get definitionSource() {
    return this.getStringAttribute('definition_source');
  }

  // description_required - computed: true, optional: false, required: false
  public get descriptionRequired() {
    return this.getBooleanAttribute('description_required');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // disabling_reason - computed: true, optional: false, required: false
  public get disablingReason() {
    return this.getStringAttribute('disabling_reason');
  }

  // event - computed: true, optional: false, required: false
  private _event = new DataBuddyPipelinesPipelinesEventList(this, "event", true);
  public get event() {
    return this._event;
  }

  // filesystem_changeset_base - computed: true, optional: false, required: false
  public get filesystemChangesetBase() {
    return this.getStringAttribute('filesystem_changeset_base');
  }

  // git_changeset_base - computed: true, optional: false, required: false
  public get gitChangesetBase() {
    return this.getStringAttribute('git_changeset_base');
  }

  // git_config - computed: true, optional: false, required: false
  private _gitConfig = new DataBuddyPipelinesPipelinesGitConfigOutputReference(this, "git_config");
  public get gitConfig() {
    return this._gitConfig;
  }

  // git_config_ref - computed: true, optional: false, required: false
  public get gitConfigRef() {
    return this.getStringAttribute('git_config_ref');
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // last_execution_revision - computed: true, optional: false, required: false
  public get lastExecutionRevision() {
    return this.getStringAttribute('last_execution_revision');
  }

  // last_execution_status - computed: true, optional: false, required: false
  public get lastExecutionStatus() {
    return this.getStringAttribute('last_execution_status');
  }

  // loop - computed: true, optional: false, required: false
  public get loop() {
    return cdktf.Fn.tolist(this.getListAttribute('loop'));
  }

  // manage_permissions_by_yaml - computed: true, optional: false, required: false
  public get managePermissionsByYaml() {
    return this.getBooleanAttribute('manage_permissions_by_yaml');
  }

  // manage_variables_by_yaml - computed: true, optional: false, required: false
  public get manageVariablesByYaml() {
    return this.getBooleanAttribute('manage_variables_by_yaml');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getNumberAttribute('pipeline_id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // refs - computed: true, optional: false, required: false
  public get refs() {
    return cdktf.Fn.tolist(this.getListAttribute('refs'));
  }

  // remote_branch - computed: true, optional: false, required: false
  public get remoteBranch() {
    return this.getStringAttribute('remote_branch');
  }

  // remote_parameter - computed: true, optional: false, required: false
  private _remoteParameter = new DataBuddyPipelinesPipelinesRemoteParameterList(this, "remote_parameter", true);
  public get remoteParameter() {
    return this._remoteParameter;
  }

  // remote_path - computed: true, optional: false, required: false
  public get remotePath() {
    return this.getStringAttribute('remote_path');
  }

  // remote_project_name - computed: true, optional: false, required: false
  public get remoteProjectName() {
    return this.getStringAttribute('remote_project_name');
  }

  // remote_ref - computed: true, optional: false, required: false
  public get remoteRef() {
    return this.getStringAttribute('remote_ref');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
}

export class DataBuddyPipelinesPipelinesList extends cdktf.ComplexList {

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
  public get(index: number): DataBuddyPipelinesPipelinesOutputReference {
    return new DataBuddyPipelinesPipelinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/pipelines buddy_pipelines}
*/
export class DataBuddyPipelines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_pipelines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBuddyPipelines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBuddyPipelines to import
  * @param importFromId The id of the existing DataBuddyPipelines that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/pipelines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBuddyPipelines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_pipelines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/data-sources/pipelines buddy_pipelines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBuddyPipelinesConfig
  */
  public constructor(scope: Construct, id: string, config: DataBuddyPipelinesConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_pipelines',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.38.0',
        providerVersionConstraint: '1.38.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._nameRegex = config.nameRegex;
    this._projectName = config.projectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // pipelines - computed: true, optional: false, required: false
  private _pipelines = new DataBuddyPipelinesPipelinesList(this, "pipelines", true);
  public get pipelines() {
    return this._pipelines;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      project_name: cdktf.stringToTerraform(this._projectName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
