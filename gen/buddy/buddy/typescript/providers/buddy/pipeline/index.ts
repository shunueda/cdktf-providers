// https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines whether or not to upload everything from scratch on every run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#always_from_scratch Pipeline#always_from_scratch}
  */
  readonly alwaysFromScratch?: boolean | cdktf.IResolvable;
  /**
  * Defines whether or not to automatically clear cache before running the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#auto_clear_cache Pipeline#auto_clear_cache}
  */
  readonly autoClearCache?: boolean | cdktf.IResolvable;
  /**
  * The pipeline's filesystem clone depth. Creates a shallow clone with a history truncated to the specified number of commits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#clone_depth Pipeline#clone_depth}
  */
  readonly cloneDepth?: number;
  /**
  * Defines whether or not pipeline can be run concurrently
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#concurrent_pipeline_runs Pipeline#concurrent_pipeline_runs}
  */
  readonly concurrentPipelineRuns?: boolean | cdktf.IResolvable;
  /**
  * The pipeline's cpu. Allowed: `X64`, `ARM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#cpu Pipeline#cpu}
  */
  readonly cpu?: string;
  /**
  * The pipeline's definition source. Allowed: `LOCAL`, `REMOTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#definition_source Pipeline#definition_source}
  */
  readonly definitionSource?: string;
  /**
  * Defines whether or not pipeline's execution must be commented
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#description_required Pipeline#description_required}
  */
  readonly descriptionRequired?: boolean | cdktf.IResolvable;
  /**
  * Defines whether or not the pipeline can be run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#disabled Pipeline#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The pipeline's disabling reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#disabling_reason Pipeline#disabling_reason}
  */
  readonly disablingReason?: string;
  /**
  * Defines whether or not to omit sending commit statuses to GitHub or GitLab upon execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#do_not_create_commit_status Pipeline#do_not_create_commit_status}
  */
  readonly doNotCreateCommitStatus?: boolean | cdktf.IResolvable;
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#domain Pipeline#domain}
  */
  readonly domain: string;
  /**
  * The pipeline's run title. Default: `$BUDDY_EXECUTION_REVISION_SUBJECT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#execution_message_template Pipeline#execution_message_template}
  */
  readonly executionMessageTemplate?: string;
  /**
  * Defines either or not run should fail if any warning occurs in prepare environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#fail_on_prepare_env_warning Pipeline#fail_on_prepare_env_warning}
  */
  readonly failOnPrepareEnvWarning?: boolean | cdktf.IResolvable;
  /**
  * Defines whether or not fetch all refs from repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#fetch_all_refs Pipeline#fetch_all_refs}
  */
  readonly fetchAllRefs?: boolean | cdktf.IResolvable;
  /**
  * Defines pipeline's filesystem changeset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#filesystem_changeset_base Pipeline#filesystem_changeset_base}
  */
  readonly filesystemChangesetBase?: string;
  /**
  * Defines pipeline's GIT changeset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#git_changeset_base Pipeline#git_changeset_base}
  */
  readonly gitChangesetBase?: string;
  /**
  * The pipeline's GIT configuration spec for `git_config_ref` = `FIXED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#git_config Pipeline#git_config}
  */
  readonly gitConfig?: PipelineGitConfig;
  /**
  * The pipeline's GIT configuration type. Allowed: `NONE`, `FIXED`, `DYNAMIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#git_config_ref Pipeline#git_config_ref}
  */
  readonly gitConfigRef?: string;
  /**
  * The pipeline's identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#identifier Pipeline#identifier}
  */
  readonly identifier?: string;
  /**
  * If set to true the status of a given pipeline will be ignored on the projects' dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#ignore_fail_on_project_status Pipeline#ignore_fail_on_project_status}
  */
  readonly ignoreFailOnProjectStatus?: boolean | cdktf.IResolvable;
  /**
  * Specify multiple variables to create a multi-dimensional matrix. A pipeline will run for each possible combination of the variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#loop Pipeline#loop}
  */
  readonly loop?: string[];
  /**
  * If set to true pipeline permissions will be managed by yaml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#manage_permissions_by_yaml Pipeline#manage_permissions_by_yaml}
  */
  readonly managePermissionsByYaml?: boolean | cdktf.IResolvable;
  /**
  * If set to true pipeline variables will be managed by yaml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#manage_variables_by_yaml Pipeline#manage_variables_by_yaml}
  */
  readonly manageVariablesByYaml?: boolean | cdktf.IResolvable;
  /**
  * The pipeline's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name: string;
  /**
  * Defines whether or not to skip run to the most recent run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#no_skip_to_most_recent Pipeline#no_skip_to_most_recent}
  */
  readonly noSkipToMostRecent?: boolean | cdktf.IResolvable;
  /**
  * The pipeline's max failed executions before it is paused. Restricted to schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#pause_on_repeated_failures Pipeline#pause_on_repeated_failures}
  */
  readonly pauseOnRepeatedFailures?: number;
  /**
  * Is the pipeline's run paused. Restricted schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#paused Pipeline#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The pipeline's priority. Allowed: `LOW`, `NORMAL`, `HIGH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#priority Pipeline#priority}
  */
  readonly priority?: string;
  /**
  * The project's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#project_name Pipeline#project_name}
  */
  readonly projectName: string;
  /**
  * The pipeline's list of refs for manual mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#refs Pipeline#refs}
  */
  readonly refs?: string[];
  /**
  * The pipeline's remote definition branch name. Set it if `definition_source: REMOTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#remote_branch Pipeline#remote_branch}
  */
  readonly remoteBranch?: string;
  /**
  * The pipeline's remote definition path. Set it if `definition_source: REMOTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#remote_path Pipeline#remote_path}
  */
  readonly remotePath?: string;
  /**
  * The pipeline's remote definition project name. Set it if `definition_source: REMOTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#remote_project_name Pipeline#remote_project_name}
  */
  readonly remoteProjectName?: string;
  /**
  * The pipeline's remote definition ref name. Set it if `definition_source: REMOTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#remote_ref Pipeline#remote_ref}
  */
  readonly remoteRef?: string;
  /**
  * The pipeline's list of tags. Only for `Buddy Enterprise`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#tags Pipeline#tags}
  */
  readonly tags?: string[];
  /**
  * The pipeline's website target URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#target_site_url Pipeline#target_site_url}
  */
  readonly targetSiteUrl?: string;
  /**
  * The pipeline's worker name. Only for `Buddy Enterprise`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#worker Pipeline#worker}
  */
  readonly worker?: string;
  /**
  * event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#event Pipeline#event}
  */
  readonly event?: PipelineEvent[] | cdktf.IResolvable;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#permissions Pipeline#permissions}
  */
  readonly permissions?: PipelinePermissions[] | cdktf.IResolvable;
  /**
  * remote_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#remote_parameter Pipeline#remote_parameter}
  */
  readonly remoteParameter?: PipelineRemoteParameter[] | cdktf.IResolvable;
  /**
  * trigger_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#trigger_condition Pipeline#trigger_condition}
  */
  readonly triggerCondition?: PipelineTriggerCondition[] | cdktf.IResolvable;
}
export interface PipelineCreator {
}

export function pipelineCreatorToTerraform(struct?: PipelineCreator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pipelineCreatorToHclTerraform(struct?: PipelineCreator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PipelineCreatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineCreator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineCreator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getNumberAttribute('member_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // workspace_owner - computed: true, optional: false, required: false
  public get workspaceOwner() {
    return this.getBooleanAttribute('workspace_owner');
  }
}

export class PipelineCreatorList extends cdktf.ComplexList {

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
  public get(index: number): PipelineCreatorOutputReference {
    return new PipelineCreatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineGitConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#branch Pipeline#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#path Pipeline#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#project Pipeline#project}
  */
  readonly project?: string;
}

export function pipelineGitConfigToTerraform(struct?: PipelineGitConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    path: cdktf.stringToTerraform(struct!.path),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function pipelineGitConfigToHclTerraform(struct?: PipelineGitConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineGitConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineGitConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineGitConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._path = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._path = value.path;
      this._project = value.project;
    }
  }

  // branch - computed: true, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface PipelineProject {
}

export function pipelineProjectToTerraform(struct?: PipelineProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pipelineProjectToHclTerraform(struct?: PipelineProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PipelineProjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class PipelineProjectList extends cdktf.ComplexList {

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
  public get(index: number): PipelineProjectOutputReference {
    return new PipelineProjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineEvent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#branches Pipeline#branches}
  */
  readonly branches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#cron Pipeline#cron}
  */
  readonly cron?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#delay Pipeline#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#events Pipeline#events}
  */
  readonly events?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#prefix Pipeline#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#refs Pipeline#refs}
  */
  readonly refs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#start_date Pipeline#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#timezone Pipeline#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#totp Pipeline#totp}
  */
  readonly totp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#type Pipeline#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#whitelist Pipeline#whitelist}
  */
  readonly whitelist?: string[];
}

export function pipelineEventToTerraform(struct?: PipelineEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.branches),
    cron: cdktf.stringToTerraform(struct!.cron),
    delay: cdktf.numberToTerraform(struct!.delay),
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.refs),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    totp: cdktf.booleanToTerraform(struct!.totp),
    type: cdktf.stringToTerraform(struct!.type),
    whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelist),
  }
}


export function pipelineEventToHclTerraform(struct?: PipelineEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.branches),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cron: {
      value: cdktf.stringToHclTerraform(struct!.cron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.refs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    totp: {
      value: cdktf.booleanToHclTerraform(struct!.totp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineEventOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branches !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches;
    }
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._refs !== undefined) {
      hasAnyValues = true;
      internalValueResult.refs = this._refs;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._totp !== undefined) {
      hasAnyValues = true;
      internalValueResult.totp = this._totp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._whitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelist = this._whitelist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branches = undefined;
      this._cron = undefined;
      this._delay = undefined;
      this._events = undefined;
      this._prefix = undefined;
      this._refs = undefined;
      this._startDate = undefined;
      this._timezone = undefined;
      this._totp = undefined;
      this._type = undefined;
      this._whitelist = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branches = value.branches;
      this._cron = value.cron;
      this._delay = value.delay;
      this._events = value.events;
      this._prefix = value.prefix;
      this._refs = value.refs;
      this._startDate = value.startDate;
      this._timezone = value.timezone;
      this._totp = value.totp;
      this._type = value.type;
      this._whitelist = value.whitelist;
    }
  }

  // branches - computed: false, optional: true, required: false
  private _branches?: string[]; 
  public get branches() {
    return cdktf.Fn.tolist(this.getListAttribute('branches'));
  }
  public set branches(value: string[]) {
    this._branches = value;
  }
  public resetBranches() {
    this._branches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches;
  }

  // cron - computed: false, optional: true, required: false
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  public resetCron() {
    this._cron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // refs - computed: false, optional: true, required: false
  private _refs?: string[]; 
  public get refs() {
    return cdktf.Fn.tolist(this.getListAttribute('refs'));
  }
  public set refs(value: string[]) {
    this._refs = value;
  }
  public resetRefs() {
    this._refs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refsInput() {
    return this._refs;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // totp - computed: false, optional: true, required: false
  private _totp?: boolean | cdktf.IResolvable; 
  public get totp() {
    return this.getBooleanAttribute('totp');
  }
  public set totp(value: boolean | cdktf.IResolvable) {
    this._totp = value;
  }
  public resetTotp() {
    this._totp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totpInput() {
    return this._totp;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // whitelist - computed: false, optional: true, required: false
  private _whitelist?: string[]; 
  public get whitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('whitelist'));
  }
  public set whitelist(value: string[]) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }
}

export class PipelineEventList extends cdktf.ComplexList {
  public internalValue? : PipelineEvent[] | cdktf.IResolvable

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
  public get(index: number): PipelineEventOutputReference {
    return new PipelineEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelinePermissionsGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#access_level Pipeline#access_level}
  */
  readonly accessLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#id Pipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function pipelinePermissionsGroupToTerraform(struct?: PipelinePermissionsGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function pipelinePermissionsGroupToHclTerraform(struct?: PipelinePermissionsGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelinePermissionsGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelinePermissionsGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelinePermissionsGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._id = value.id;
    }
  }

  // access_level - computed: false, optional: false, required: true
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class PipelinePermissionsGroupList extends cdktf.ComplexList {
  public internalValue? : PipelinePermissionsGroup[] | cdktf.IResolvable

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
  public get(index: number): PipelinePermissionsGroupOutputReference {
    return new PipelinePermissionsGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelinePermissionsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#access_level Pipeline#access_level}
  */
  readonly accessLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#id Pipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function pipelinePermissionsUserToTerraform(struct?: PipelinePermissionsUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function pipelinePermissionsUserToHclTerraform(struct?: PipelinePermissionsUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelinePermissionsUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelinePermissionsUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelinePermissionsUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._id = value.id;
    }
  }

  // access_level - computed: false, optional: false, required: true
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class PipelinePermissionsUserList extends cdktf.ComplexList {
  public internalValue? : PipelinePermissionsUser[] | cdktf.IResolvable

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
  public get(index: number): PipelinePermissionsUserOutputReference {
    return new PipelinePermissionsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelinePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#others Pipeline#others}
  */
  readonly others?: string;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#group Pipeline#group}
  */
  readonly group?: PipelinePermissionsGroup[] | cdktf.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#user Pipeline#user}
  */
  readonly user?: PipelinePermissionsUser[] | cdktf.IResolvable;
}

export function pipelinePermissionsToTerraform(struct?: PipelinePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    others: cdktf.stringToTerraform(struct!.others),
    group: cdktf.listMapper(pipelinePermissionsGroupToTerraform, true)(struct!.group),
    user: cdktf.listMapper(pipelinePermissionsUserToTerraform, true)(struct!.user),
  }
}


export function pipelinePermissionsToHclTerraform(struct?: PipelinePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    others: {
      value: cdktf.stringToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.listMapperHcl(pipelinePermissionsGroupToHclTerraform, true)(struct!.group),
      isBlock: true,
      type: "set",
      storageClassType: "PipelinePermissionsGroupList",
    },
    user: {
      value: cdktf.listMapperHcl(pipelinePermissionsUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "set",
      storageClassType: "PipelinePermissionsUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelinePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelinePermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelinePermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._others = undefined;
      this._group.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._others = value.others;
      this._group.internalValue = value.group;
      this._user.internalValue = value.user;
    }
  }

  // others - computed: false, optional: true, required: false
  private _others?: string; 
  public get others() {
    return this.getStringAttribute('others');
  }
  public set others(value: string) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // group - computed: false, optional: true, required: false
  private _group = new PipelinePermissionsGroupList(this, "group", true);
  public get group() {
    return this._group;
  }
  public putGroup(value: PipelinePermissionsGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new PipelinePermissionsUserList(this, "user", true);
  public get user() {
    return this._user;
  }
  public putUser(value: PipelinePermissionsUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}

export class PipelinePermissionsList extends cdktf.ComplexList {
  public internalValue? : PipelinePermissions[] | cdktf.IResolvable

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
  public get(index: number): PipelinePermissionsOutputReference {
    return new PipelinePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineRemoteParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#key Pipeline#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#value Pipeline#value}
  */
  readonly value: string;
}

export function pipelineRemoteParameterToTerraform(struct?: PipelineRemoteParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pipelineRemoteParameterToHclTerraform(struct?: PipelineRemoteParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineRemoteParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineRemoteParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineRemoteParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PipelineRemoteParameterList extends cdktf.ComplexList {
  public internalValue? : PipelineRemoteParameter[] | cdktf.IResolvable

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
  public get(index: number): PipelineRemoteParameterOutputReference {
    return new PipelineRemoteParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineTriggerCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#condition Pipeline#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#days Pipeline#days}
  */
  readonly days?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#hours Pipeline#hours}
  */
  readonly hours?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#paths Pipeline#paths}
  */
  readonly paths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#pipeline_name Pipeline#pipeline_name}
  */
  readonly pipelineName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#project_name Pipeline#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#timezone Pipeline#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#trigger_group Pipeline#trigger_group}
  */
  readonly triggerGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#trigger_user Pipeline#trigger_user}
  */
  readonly triggerUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#variable_key Pipeline#variable_key}
  */
  readonly variableKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#variable_value Pipeline#variable_value}
  */
  readonly variableValue?: string;
}

export function pipelineTriggerConditionToTerraform(struct?: PipelineTriggerCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.days),
    hours: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hours),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    pipeline_name: cdktf.stringToTerraform(struct!.pipelineName),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    trigger_group: cdktf.stringToTerraform(struct!.triggerGroup),
    trigger_user: cdktf.stringToTerraform(struct!.triggerUser),
    variable_key: cdktf.stringToTerraform(struct!.variableKey),
    variable_value: cdktf.stringToTerraform(struct!.variableValue),
  }
}


export function pipelineTriggerConditionToHclTerraform(struct?: PipelineTriggerCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    hours: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.hours),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pipeline_name: {
      value: cdktf.stringToHclTerraform(struct!.pipelineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_group: {
      value: cdktf.stringToHclTerraform(struct!.triggerGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_user: {
      value: cdktf.stringToHclTerraform(struct!.triggerUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_key: {
      value: cdktf.stringToHclTerraform(struct!.variableKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_value: {
      value: cdktf.stringToHclTerraform(struct!.variableValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineTriggerConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineTriggerCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._pipelineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineName = this._pipelineName;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._triggerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerGroup = this._triggerGroup;
    }
    if (this._triggerUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerUser = this._triggerUser;
    }
    if (this._variableKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableKey = this._variableKey;
    }
    if (this._variableValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableValue = this._variableValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineTriggerCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._days = undefined;
      this._hours = undefined;
      this._paths = undefined;
      this._pipelineName = undefined;
      this._projectName = undefined;
      this._timezone = undefined;
      this._triggerGroup = undefined;
      this._triggerUser = undefined;
      this._variableKey = undefined;
      this._variableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._days = value.days;
      this._hours = value.hours;
      this._paths = value.paths;
      this._pipelineName = value.pipelineName;
      this._projectName = value.projectName;
      this._timezone = value.timezone;
      this._triggerGroup = value.triggerGroup;
      this._triggerUser = value.triggerUser;
      this._variableKey = value.variableKey;
      this._variableValue = value.variableValue;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // days - computed: false, optional: true, required: false
  private _days?: number[]; 
  public get days() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days')));
  }
  public set days(value: number[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number[]; 
  public get hours() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('hours')));
  }
  public set hours(value: number[]) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // pipeline_name - computed: false, optional: true, required: false
  private _pipelineName?: string; 
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  public resetPipelineName() {
    this._pipelineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // trigger_group - computed: false, optional: true, required: false
  private _triggerGroup?: string; 
  public get triggerGroup() {
    return this.getStringAttribute('trigger_group');
  }
  public set triggerGroup(value: string) {
    this._triggerGroup = value;
  }
  public resetTriggerGroup() {
    this._triggerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerGroupInput() {
    return this._triggerGroup;
  }

  // trigger_user - computed: false, optional: true, required: false
  private _triggerUser?: string; 
  public get triggerUser() {
    return this.getStringAttribute('trigger_user');
  }
  public set triggerUser(value: string) {
    this._triggerUser = value;
  }
  public resetTriggerUser() {
    this._triggerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerUserInput() {
    return this._triggerUser;
  }

  // variable_key - computed: false, optional: true, required: false
  private _variableKey?: string; 
  public get variableKey() {
    return this.getStringAttribute('variable_key');
  }
  public set variableKey(value: string) {
    this._variableKey = value;
  }
  public resetVariableKey() {
    this._variableKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableKeyInput() {
    return this._variableKey;
  }

  // variable_value - computed: false, optional: true, required: false
  private _variableValue?: string; 
  public get variableValue() {
    return this.getStringAttribute('variable_value');
  }
  public set variableValue(value: string) {
    this._variableValue = value;
  }
  public resetVariableValue() {
    this._variableValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableValueInput() {
    return this._variableValue;
  }
}

export class PipelineTriggerConditionList extends cdktf.ComplexList {
  public internalValue? : PipelineTriggerCondition[] | cdktf.IResolvable

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
  public get(index: number): PipelineTriggerConditionOutputReference {
    return new PipelineTriggerConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline buddy_pipeline}
*/
export class Pipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pipeline to import
  * @param importFromId The id of the existing Pipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/pipeline buddy_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_pipeline',
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
    this._alwaysFromScratch = config.alwaysFromScratch;
    this._autoClearCache = config.autoClearCache;
    this._cloneDepth = config.cloneDepth;
    this._concurrentPipelineRuns = config.concurrentPipelineRuns;
    this._cpu = config.cpu;
    this._definitionSource = config.definitionSource;
    this._descriptionRequired = config.descriptionRequired;
    this._disabled = config.disabled;
    this._disablingReason = config.disablingReason;
    this._doNotCreateCommitStatus = config.doNotCreateCommitStatus;
    this._domain = config.domain;
    this._executionMessageTemplate = config.executionMessageTemplate;
    this._failOnPrepareEnvWarning = config.failOnPrepareEnvWarning;
    this._fetchAllRefs = config.fetchAllRefs;
    this._filesystemChangesetBase = config.filesystemChangesetBase;
    this._gitChangesetBase = config.gitChangesetBase;
    this._gitConfig.internalValue = config.gitConfig;
    this._gitConfigRef = config.gitConfigRef;
    this._identifier = config.identifier;
    this._ignoreFailOnProjectStatus = config.ignoreFailOnProjectStatus;
    this._loop = config.loop;
    this._managePermissionsByYaml = config.managePermissionsByYaml;
    this._manageVariablesByYaml = config.manageVariablesByYaml;
    this._name = config.name;
    this._noSkipToMostRecent = config.noSkipToMostRecent;
    this._pauseOnRepeatedFailures = config.pauseOnRepeatedFailures;
    this._paused = config.paused;
    this._priority = config.priority;
    this._projectName = config.projectName;
    this._refs = config.refs;
    this._remoteBranch = config.remoteBranch;
    this._remotePath = config.remotePath;
    this._remoteProjectName = config.remoteProjectName;
    this._remoteRef = config.remoteRef;
    this._tags = config.tags;
    this._targetSiteUrl = config.targetSiteUrl;
    this._worker = config.worker;
    this._event.internalValue = config.event;
    this._permissions.internalValue = config.permissions;
    this._remoteParameter.internalValue = config.remoteParameter;
    this._triggerCondition.internalValue = config.triggerCondition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_from_scratch - computed: true, optional: true, required: false
  private _alwaysFromScratch?: boolean | cdktf.IResolvable; 
  public get alwaysFromScratch() {
    return this.getBooleanAttribute('always_from_scratch');
  }
  public set alwaysFromScratch(value: boolean | cdktf.IResolvable) {
    this._alwaysFromScratch = value;
  }
  public resetAlwaysFromScratch() {
    this._alwaysFromScratch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysFromScratchInput() {
    return this._alwaysFromScratch;
  }

  // auto_clear_cache - computed: true, optional: true, required: false
  private _autoClearCache?: boolean | cdktf.IResolvable; 
  public get autoClearCache() {
    return this.getBooleanAttribute('auto_clear_cache');
  }
  public set autoClearCache(value: boolean | cdktf.IResolvable) {
    this._autoClearCache = value;
  }
  public resetAutoClearCache() {
    this._autoClearCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoClearCacheInput() {
    return this._autoClearCache;
  }

  // clone_depth - computed: true, optional: true, required: false
  private _cloneDepth?: number; 
  public get cloneDepth() {
    return this.getNumberAttribute('clone_depth');
  }
  public set cloneDepth(value: number) {
    this._cloneDepth = value;
  }
  public resetCloneDepth() {
    this._cloneDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneDepthInput() {
    return this._cloneDepth;
  }

  // concurrent_pipeline_runs - computed: true, optional: true, required: false
  private _concurrentPipelineRuns?: boolean | cdktf.IResolvable; 
  public get concurrentPipelineRuns() {
    return this.getBooleanAttribute('concurrent_pipeline_runs');
  }
  public set concurrentPipelineRuns(value: boolean | cdktf.IResolvable) {
    this._concurrentPipelineRuns = value;
  }
  public resetConcurrentPipelineRuns() {
    this._concurrentPipelineRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentPipelineRunsInput() {
    return this._concurrentPipelineRuns;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // creator - computed: true, optional: false, required: false
  private _creator = new PipelineCreatorList(this, "creator", true);
  public get creator() {
    return this._creator;
  }

  // definition_source - computed: true, optional: true, required: false
  private _definitionSource?: string; 
  public get definitionSource() {
    return this.getStringAttribute('definition_source');
  }
  public set definitionSource(value: string) {
    this._definitionSource = value;
  }
  public resetDefinitionSource() {
    this._definitionSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionSourceInput() {
    return this._definitionSource;
  }

  // description_required - computed: true, optional: true, required: false
  private _descriptionRequired?: boolean | cdktf.IResolvable; 
  public get descriptionRequired() {
    return this.getBooleanAttribute('description_required');
  }
  public set descriptionRequired(value: boolean | cdktf.IResolvable) {
    this._descriptionRequired = value;
  }
  public resetDescriptionRequired() {
    this._descriptionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRequiredInput() {
    return this._descriptionRequired;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // disabling_reason - computed: true, optional: true, required: false
  private _disablingReason?: string; 
  public get disablingReason() {
    return this.getStringAttribute('disabling_reason');
  }
  public set disablingReason(value: string) {
    this._disablingReason = value;
  }
  public resetDisablingReason() {
    this._disablingReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablingReasonInput() {
    return this._disablingReason;
  }

  // do_not_create_commit_status - computed: true, optional: true, required: false
  private _doNotCreateCommitStatus?: boolean | cdktf.IResolvable; 
  public get doNotCreateCommitStatus() {
    return this.getBooleanAttribute('do_not_create_commit_status');
  }
  public set doNotCreateCommitStatus(value: boolean | cdktf.IResolvable) {
    this._doNotCreateCommitStatus = value;
  }
  public resetDoNotCreateCommitStatus() {
    this._doNotCreateCommitStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotCreateCommitStatusInput() {
    return this._doNotCreateCommitStatus;
  }

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

  // execution_message_template - computed: true, optional: true, required: false
  private _executionMessageTemplate?: string; 
  public get executionMessageTemplate() {
    return this.getStringAttribute('execution_message_template');
  }
  public set executionMessageTemplate(value: string) {
    this._executionMessageTemplate = value;
  }
  public resetExecutionMessageTemplate() {
    this._executionMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionMessageTemplateInput() {
    return this._executionMessageTemplate;
  }

  // fail_on_prepare_env_warning - computed: true, optional: true, required: false
  private _failOnPrepareEnvWarning?: boolean | cdktf.IResolvable; 
  public get failOnPrepareEnvWarning() {
    return this.getBooleanAttribute('fail_on_prepare_env_warning');
  }
  public set failOnPrepareEnvWarning(value: boolean | cdktf.IResolvable) {
    this._failOnPrepareEnvWarning = value;
  }
  public resetFailOnPrepareEnvWarning() {
    this._failOnPrepareEnvWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnPrepareEnvWarningInput() {
    return this._failOnPrepareEnvWarning;
  }

  // fetch_all_refs - computed: true, optional: true, required: false
  private _fetchAllRefs?: boolean | cdktf.IResolvable; 
  public get fetchAllRefs() {
    return this.getBooleanAttribute('fetch_all_refs');
  }
  public set fetchAllRefs(value: boolean | cdktf.IResolvable) {
    this._fetchAllRefs = value;
  }
  public resetFetchAllRefs() {
    this._fetchAllRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllRefsInput() {
    return this._fetchAllRefs;
  }

  // filesystem_changeset_base - computed: true, optional: true, required: false
  private _filesystemChangesetBase?: string; 
  public get filesystemChangesetBase() {
    return this.getStringAttribute('filesystem_changeset_base');
  }
  public set filesystemChangesetBase(value: string) {
    this._filesystemChangesetBase = value;
  }
  public resetFilesystemChangesetBase() {
    this._filesystemChangesetBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemChangesetBaseInput() {
    return this._filesystemChangesetBase;
  }

  // git_changeset_base - computed: true, optional: true, required: false
  private _gitChangesetBase?: string; 
  public get gitChangesetBase() {
    return this.getStringAttribute('git_changeset_base');
  }
  public set gitChangesetBase(value: string) {
    this._gitChangesetBase = value;
  }
  public resetGitChangesetBase() {
    this._gitChangesetBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitChangesetBaseInput() {
    return this._gitChangesetBase;
  }

  // git_config - computed: true, optional: true, required: false
  private _gitConfig = new PipelineGitConfigOutputReference(this, "git_config");
  public get gitConfig() {
    return this._gitConfig;
  }
  public putGitConfig(value: PipelineGitConfig) {
    this._gitConfig.internalValue = value;
  }
  public resetGitConfig() {
    this._gitConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitConfigInput() {
    return this._gitConfig.internalValue;
  }

  // git_config_ref - computed: true, optional: true, required: false
  private _gitConfigRef?: string; 
  public get gitConfigRef() {
    return this.getStringAttribute('git_config_ref');
  }
  public set gitConfigRef(value: string) {
    this._gitConfigRef = value;
  }
  public resetGitConfigRef() {
    this._gitConfigRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitConfigRefInput() {
    return this._gitConfigRef;
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // ignore_fail_on_project_status - computed: true, optional: true, required: false
  private _ignoreFailOnProjectStatus?: boolean | cdktf.IResolvable; 
  public get ignoreFailOnProjectStatus() {
    return this.getBooleanAttribute('ignore_fail_on_project_status');
  }
  public set ignoreFailOnProjectStatus(value: boolean | cdktf.IResolvable) {
    this._ignoreFailOnProjectStatus = value;
  }
  public resetIgnoreFailOnProjectStatus() {
    this._ignoreFailOnProjectStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFailOnProjectStatusInput() {
    return this._ignoreFailOnProjectStatus;
  }

  // last_execution_revision - computed: true, optional: false, required: false
  public get lastExecutionRevision() {
    return this.getStringAttribute('last_execution_revision');
  }

  // last_execution_status - computed: true, optional: false, required: false
  public get lastExecutionStatus() {
    return this.getStringAttribute('last_execution_status');
  }

  // loop - computed: true, optional: true, required: false
  private _loop?: string[]; 
  public get loop() {
    return cdktf.Fn.tolist(this.getListAttribute('loop'));
  }
  public set loop(value: string[]) {
    this._loop = value;
  }
  public resetLoop() {
    this._loop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopInput() {
    return this._loop;
  }

  // manage_permissions_by_yaml - computed: true, optional: true, required: false
  private _managePermissionsByYaml?: boolean | cdktf.IResolvable; 
  public get managePermissionsByYaml() {
    return this.getBooleanAttribute('manage_permissions_by_yaml');
  }
  public set managePermissionsByYaml(value: boolean | cdktf.IResolvable) {
    this._managePermissionsByYaml = value;
  }
  public resetManagePermissionsByYaml() {
    this._managePermissionsByYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managePermissionsByYamlInput() {
    return this._managePermissionsByYaml;
  }

  // manage_variables_by_yaml - computed: true, optional: true, required: false
  private _manageVariablesByYaml?: boolean | cdktf.IResolvable; 
  public get manageVariablesByYaml() {
    return this.getBooleanAttribute('manage_variables_by_yaml');
  }
  public set manageVariablesByYaml(value: boolean | cdktf.IResolvable) {
    this._manageVariablesByYaml = value;
  }
  public resetManageVariablesByYaml() {
    this._manageVariablesByYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageVariablesByYamlInput() {
    return this._manageVariablesByYaml;
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

  // no_skip_to_most_recent - computed: true, optional: true, required: false
  private _noSkipToMostRecent?: boolean | cdktf.IResolvable; 
  public get noSkipToMostRecent() {
    return this.getBooleanAttribute('no_skip_to_most_recent');
  }
  public set noSkipToMostRecent(value: boolean | cdktf.IResolvable) {
    this._noSkipToMostRecent = value;
  }
  public resetNoSkipToMostRecent() {
    this._noSkipToMostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSkipToMostRecentInput() {
    return this._noSkipToMostRecent;
  }

  // pause_on_repeated_failures - computed: true, optional: true, required: false
  private _pauseOnRepeatedFailures?: number; 
  public get pauseOnRepeatedFailures() {
    return this.getNumberAttribute('pause_on_repeated_failures');
  }
  public set pauseOnRepeatedFailures(value: number) {
    this._pauseOnRepeatedFailures = value;
  }
  public resetPauseOnRepeatedFailures() {
    this._pauseOnRepeatedFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseOnRepeatedFailuresInput() {
    return this._pauseOnRepeatedFailures;
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getNumberAttribute('pipeline_id');
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // project - computed: true, optional: false, required: false
  private _project = new PipelineProjectList(this, "project", true);
  public get project() {
    return this._project;
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

  // refs - computed: true, optional: true, required: false
  private _refs?: string[]; 
  public get refs() {
    return cdktf.Fn.tolist(this.getListAttribute('refs'));
  }
  public set refs(value: string[]) {
    this._refs = value;
  }
  public resetRefs() {
    this._refs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refsInput() {
    return this._refs;
  }

  // remote_branch - computed: true, optional: true, required: false
  private _remoteBranch?: string; 
  public get remoteBranch() {
    return this.getStringAttribute('remote_branch');
  }
  public set remoteBranch(value: string) {
    this._remoteBranch = value;
  }
  public resetRemoteBranch() {
    this._remoteBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteBranchInput() {
    return this._remoteBranch;
  }

  // remote_path - computed: true, optional: true, required: false
  private _remotePath?: string; 
  public get remotePath() {
    return this.getStringAttribute('remote_path');
  }
  public set remotePath(value: string) {
    this._remotePath = value;
  }
  public resetRemotePath() {
    this._remotePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePathInput() {
    return this._remotePath;
  }

  // remote_project_name - computed: true, optional: true, required: false
  private _remoteProjectName?: string; 
  public get remoteProjectName() {
    return this.getStringAttribute('remote_project_name');
  }
  public set remoteProjectName(value: string) {
    this._remoteProjectName = value;
  }
  public resetRemoteProjectName() {
    this._remoteProjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteProjectNameInput() {
    return this._remoteProjectName;
  }

  // remote_ref - computed: true, optional: true, required: false
  private _remoteRef?: string; 
  public get remoteRef() {
    return this.getStringAttribute('remote_ref');
  }
  public set remoteRef(value: string) {
    this._remoteRef = value;
  }
  public resetRemoteRef() {
    this._remoteRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRefInput() {
    return this._remoteRef;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_site_url - computed: true, optional: true, required: false
  private _targetSiteUrl?: string; 
  public get targetSiteUrl() {
    return this.getStringAttribute('target_site_url');
  }
  public set targetSiteUrl(value: string) {
    this._targetSiteUrl = value;
  }
  public resetTargetSiteUrl() {
    this._targetSiteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSiteUrlInput() {
    return this._targetSiteUrl;
  }

  // worker - computed: false, optional: true, required: false
  private _worker?: string; 
  public get worker() {
    return this.getStringAttribute('worker');
  }
  public set worker(value: string) {
    this._worker = value;
  }
  public resetWorker() {
    this._worker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker;
  }

  // event - computed: false, optional: true, required: false
  private _event = new PipelineEventList(this, "event", true);
  public get event() {
    return this._event;
  }
  public putEvent(value: PipelineEvent[] | cdktf.IResolvable) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new PipelinePermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: PipelinePermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // remote_parameter - computed: false, optional: true, required: false
  private _remoteParameter = new PipelineRemoteParameterList(this, "remote_parameter", true);
  public get remoteParameter() {
    return this._remoteParameter;
  }
  public putRemoteParameter(value: PipelineRemoteParameter[] | cdktf.IResolvable) {
    this._remoteParameter.internalValue = value;
  }
  public resetRemoteParameter() {
    this._remoteParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteParameterInput() {
    return this._remoteParameter.internalValue;
  }

  // trigger_condition - computed: false, optional: true, required: false
  private _triggerCondition = new PipelineTriggerConditionList(this, "trigger_condition", true);
  public get triggerCondition() {
    return this._triggerCondition;
  }
  public putTriggerCondition(value: PipelineTriggerCondition[] | cdktf.IResolvable) {
    this._triggerCondition.internalValue = value;
  }
  public resetTriggerCondition() {
    this._triggerCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConditionInput() {
    return this._triggerCondition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_from_scratch: cdktf.booleanToTerraform(this._alwaysFromScratch),
      auto_clear_cache: cdktf.booleanToTerraform(this._autoClearCache),
      clone_depth: cdktf.numberToTerraform(this._cloneDepth),
      concurrent_pipeline_runs: cdktf.booleanToTerraform(this._concurrentPipelineRuns),
      cpu: cdktf.stringToTerraform(this._cpu),
      definition_source: cdktf.stringToTerraform(this._definitionSource),
      description_required: cdktf.booleanToTerraform(this._descriptionRequired),
      disabled: cdktf.booleanToTerraform(this._disabled),
      disabling_reason: cdktf.stringToTerraform(this._disablingReason),
      do_not_create_commit_status: cdktf.booleanToTerraform(this._doNotCreateCommitStatus),
      domain: cdktf.stringToTerraform(this._domain),
      execution_message_template: cdktf.stringToTerraform(this._executionMessageTemplate),
      fail_on_prepare_env_warning: cdktf.booleanToTerraform(this._failOnPrepareEnvWarning),
      fetch_all_refs: cdktf.booleanToTerraform(this._fetchAllRefs),
      filesystem_changeset_base: cdktf.stringToTerraform(this._filesystemChangesetBase),
      git_changeset_base: cdktf.stringToTerraform(this._gitChangesetBase),
      git_config: pipelineGitConfigToTerraform(this._gitConfig.internalValue),
      git_config_ref: cdktf.stringToTerraform(this._gitConfigRef),
      identifier: cdktf.stringToTerraform(this._identifier),
      ignore_fail_on_project_status: cdktf.booleanToTerraform(this._ignoreFailOnProjectStatus),
      loop: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loop),
      manage_permissions_by_yaml: cdktf.booleanToTerraform(this._managePermissionsByYaml),
      manage_variables_by_yaml: cdktf.booleanToTerraform(this._manageVariablesByYaml),
      name: cdktf.stringToTerraform(this._name),
      no_skip_to_most_recent: cdktf.booleanToTerraform(this._noSkipToMostRecent),
      pause_on_repeated_failures: cdktf.numberToTerraform(this._pauseOnRepeatedFailures),
      paused: cdktf.booleanToTerraform(this._paused),
      priority: cdktf.stringToTerraform(this._priority),
      project_name: cdktf.stringToTerraform(this._projectName),
      refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._refs),
      remote_branch: cdktf.stringToTerraform(this._remoteBranch),
      remote_path: cdktf.stringToTerraform(this._remotePath),
      remote_project_name: cdktf.stringToTerraform(this._remoteProjectName),
      remote_ref: cdktf.stringToTerraform(this._remoteRef),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_site_url: cdktf.stringToTerraform(this._targetSiteUrl),
      worker: cdktf.stringToTerraform(this._worker),
      event: cdktf.listMapper(pipelineEventToTerraform, true)(this._event.internalValue),
      permissions: cdktf.listMapper(pipelinePermissionsToTerraform, true)(this._permissions.internalValue),
      remote_parameter: cdktf.listMapper(pipelineRemoteParameterToTerraform, true)(this._remoteParameter.internalValue),
      trigger_condition: cdktf.listMapper(pipelineTriggerConditionToTerraform, true)(this._triggerCondition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_from_scratch: {
        value: cdktf.booleanToHclTerraform(this._alwaysFromScratch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_clear_cache: {
        value: cdktf.booleanToHclTerraform(this._autoClearCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clone_depth: {
        value: cdktf.numberToHclTerraform(this._cloneDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_pipeline_runs: {
        value: cdktf.booleanToHclTerraform(this._concurrentPipelineRuns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu: {
        value: cdktf.stringToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      definition_source: {
        value: cdktf.stringToHclTerraform(this._definitionSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description_required: {
        value: cdktf.booleanToHclTerraform(this._descriptionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabling_reason: {
        value: cdktf.stringToHclTerraform(this._disablingReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      do_not_create_commit_status: {
        value: cdktf.booleanToHclTerraform(this._doNotCreateCommitStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_message_template: {
        value: cdktf.stringToHclTerraform(this._executionMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_on_prepare_env_warning: {
        value: cdktf.booleanToHclTerraform(this._failOnPrepareEnvWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fetch_all_refs: {
        value: cdktf.booleanToHclTerraform(this._fetchAllRefs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filesystem_changeset_base: {
        value: cdktf.stringToHclTerraform(this._filesystemChangesetBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_changeset_base: {
        value: cdktf.stringToHclTerraform(this._gitChangesetBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_config: {
        value: pipelineGitConfigToHclTerraform(this._gitConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineGitConfig",
      },
      git_config_ref: {
        value: cdktf.stringToHclTerraform(this._gitConfigRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_fail_on_project_status: {
        value: cdktf.booleanToHclTerraform(this._ignoreFailOnProjectStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      loop: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loop),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      manage_permissions_by_yaml: {
        value: cdktf.booleanToHclTerraform(this._managePermissionsByYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_variables_by_yaml: {
        value: cdktf.booleanToHclTerraform(this._manageVariablesByYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_skip_to_most_recent: {
        value: cdktf.booleanToHclTerraform(this._noSkipToMostRecent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pause_on_repeated_failures: {
        value: cdktf.numberToHclTerraform(this._pauseOnRepeatedFailures),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
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
      refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._refs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      remote_branch: {
        value: cdktf.stringToHclTerraform(this._remoteBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_path: {
        value: cdktf.stringToHclTerraform(this._remotePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_project_name: {
        value: cdktf.stringToHclTerraform(this._remoteProjectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ref: {
        value: cdktf.stringToHclTerraform(this._remoteRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_site_url: {
        value: cdktf.stringToHclTerraform(this._targetSiteUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker: {
        value: cdktf.stringToHclTerraform(this._worker),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event: {
        value: cdktf.listMapperHcl(pipelineEventToHclTerraform, true)(this._event.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PipelineEventList",
      },
      permissions: {
        value: cdktf.listMapperHcl(pipelinePermissionsToHclTerraform, true)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PipelinePermissionsList",
      },
      remote_parameter: {
        value: cdktf.listMapperHcl(pipelineRemoteParameterToHclTerraform, true)(this._remoteParameter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PipelineRemoteParameterList",
      },
      trigger_condition: {
        value: cdktf.listMapperHcl(pipelineTriggerConditionToHclTerraform, true)(this._triggerCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PipelineTriggerConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
