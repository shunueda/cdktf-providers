// https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JobTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#allow_simultaneous JobTemplate#allow_simultaneous}
  */
  readonly allowSimultaneous?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#ask_credential_on_launch JobTemplate#ask_credential_on_launch}
  */
  readonly askCredentialOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#ask_diff_mode_on_launch JobTemplate#ask_diff_mode_on_launch}
  */
  readonly askDiffModeOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#ask_inventory_on_launch JobTemplate#ask_inventory_on_launch}
  */
  readonly askInventoryOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#ask_job_type_on_launch JobTemplate#ask_job_type_on_launch}
  */
  readonly askJobTypeOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#ask_limit_on_launch JobTemplate#ask_limit_on_launch}
  */
  readonly askLimitOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#ask_skip_tags_on_launch JobTemplate#ask_skip_tags_on_launch}
  */
  readonly askSkipTagsOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#ask_tags_on_launch JobTemplate#ask_tags_on_launch}
  */
  readonly askTagsOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#ask_variables_on_launch JobTemplate#ask_variables_on_launch}
  */
  readonly askVariablesOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#ask_verbosity_on_launch JobTemplate#ask_verbosity_on_launch}
  */
  readonly askVerbosityOnLaunch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#become_enabled JobTemplate#become_enabled}
  */
  readonly becomeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#custom_virtualenv JobTemplate#custom_virtualenv}
  */
  readonly customVirtualenv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#description JobTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#diff_mode JobTemplate#diff_mode}
  */
  readonly diffMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#execution_environment JobTemplate#execution_environment}
  */
  readonly executionEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#extra_vars JobTemplate#extra_vars}
  */
  readonly extraVars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#force_handlers JobTemplate#force_handlers}
  */
  readonly forceHandlers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#forks JobTemplate#forks}
  */
  readonly forks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#host_config_key JobTemplate#host_config_key}
  */
  readonly hostConfigKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#id JobTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#inventory_id JobTemplate#inventory_id}
  */
  readonly inventoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#job_tags JobTemplate#job_tags}
  */
  readonly jobTags?: string;
  /**
  * One of: run, check, scan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#job_type JobTemplate#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#limit JobTemplate#limit}
  */
  readonly limit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#name JobTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#playbook JobTemplate#playbook}
  */
  readonly playbook?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#project_id JobTemplate#project_id}
  */
  readonly projectId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#skip_tags JobTemplate#skip_tags}
  */
  readonly skipTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#start_at_task JobTemplate#start_at_task}
  */
  readonly startAtTask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#survey_enabled JobTemplate#survey_enabled}
  */
  readonly surveyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#timeout JobTemplate#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#use_fact_cache JobTemplate#use_fact_cache}
  */
  readonly useFactCache?: boolean | cdktf.IResolvable;
  /**
  * One of 0,1,2,3,4,5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#verbosity JobTemplate#verbosity}
  */
  readonly verbosity?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template awx_job_template}
*/
export class JobTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_job_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JobTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JobTemplate to import
  * @param importFromId The id of the existing JobTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JobTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_job_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/resources/job_template awx_job_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JobTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: JobTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_job_template',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '0.29.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowSimultaneous = config.allowSimultaneous;
    this._askCredentialOnLaunch = config.askCredentialOnLaunch;
    this._askDiffModeOnLaunch = config.askDiffModeOnLaunch;
    this._askInventoryOnLaunch = config.askInventoryOnLaunch;
    this._askJobTypeOnLaunch = config.askJobTypeOnLaunch;
    this._askLimitOnLaunch = config.askLimitOnLaunch;
    this._askSkipTagsOnLaunch = config.askSkipTagsOnLaunch;
    this._askTagsOnLaunch = config.askTagsOnLaunch;
    this._askVariablesOnLaunch = config.askVariablesOnLaunch;
    this._askVerbosityOnLaunch = config.askVerbosityOnLaunch;
    this._becomeEnabled = config.becomeEnabled;
    this._customVirtualenv = config.customVirtualenv;
    this._description = config.description;
    this._diffMode = config.diffMode;
    this._executionEnvironment = config.executionEnvironment;
    this._extraVars = config.extraVars;
    this._forceHandlers = config.forceHandlers;
    this._forks = config.forks;
    this._hostConfigKey = config.hostConfigKey;
    this._id = config.id;
    this._inventoryId = config.inventoryId;
    this._jobTags = config.jobTags;
    this._jobType = config.jobType;
    this._limit = config.limit;
    this._name = config.name;
    this._playbook = config.playbook;
    this._projectId = config.projectId;
    this._skipTags = config.skipTags;
    this._startAtTask = config.startAtTask;
    this._surveyEnabled = config.surveyEnabled;
    this._timeout = config.timeout;
    this._useFactCache = config.useFactCache;
    this._verbosity = config.verbosity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_simultaneous - computed: false, optional: true, required: false
  private _allowSimultaneous?: boolean | cdktf.IResolvable; 
  public get allowSimultaneous() {
    return this.getBooleanAttribute('allow_simultaneous');
  }
  public set allowSimultaneous(value: boolean | cdktf.IResolvable) {
    this._allowSimultaneous = value;
  }
  public resetAllowSimultaneous() {
    this._allowSimultaneous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSimultaneousInput() {
    return this._allowSimultaneous;
  }

  // ask_credential_on_launch - computed: false, optional: true, required: false
  private _askCredentialOnLaunch?: boolean | cdktf.IResolvable; 
  public get askCredentialOnLaunch() {
    return this.getBooleanAttribute('ask_credential_on_launch');
  }
  public set askCredentialOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askCredentialOnLaunch = value;
  }
  public resetAskCredentialOnLaunch() {
    this._askCredentialOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askCredentialOnLaunchInput() {
    return this._askCredentialOnLaunch;
  }

  // ask_diff_mode_on_launch - computed: false, optional: true, required: false
  private _askDiffModeOnLaunch?: boolean | cdktf.IResolvable; 
  public get askDiffModeOnLaunch() {
    return this.getBooleanAttribute('ask_diff_mode_on_launch');
  }
  public set askDiffModeOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askDiffModeOnLaunch = value;
  }
  public resetAskDiffModeOnLaunch() {
    this._askDiffModeOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askDiffModeOnLaunchInput() {
    return this._askDiffModeOnLaunch;
  }

  // ask_inventory_on_launch - computed: false, optional: true, required: false
  private _askInventoryOnLaunch?: boolean | cdktf.IResolvable; 
  public get askInventoryOnLaunch() {
    return this.getBooleanAttribute('ask_inventory_on_launch');
  }
  public set askInventoryOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askInventoryOnLaunch = value;
  }
  public resetAskInventoryOnLaunch() {
    this._askInventoryOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askInventoryOnLaunchInput() {
    return this._askInventoryOnLaunch;
  }

  // ask_job_type_on_launch - computed: false, optional: true, required: false
  private _askJobTypeOnLaunch?: boolean | cdktf.IResolvable; 
  public get askJobTypeOnLaunch() {
    return this.getBooleanAttribute('ask_job_type_on_launch');
  }
  public set askJobTypeOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askJobTypeOnLaunch = value;
  }
  public resetAskJobTypeOnLaunch() {
    this._askJobTypeOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askJobTypeOnLaunchInput() {
    return this._askJobTypeOnLaunch;
  }

  // ask_limit_on_launch - computed: false, optional: true, required: false
  private _askLimitOnLaunch?: boolean | cdktf.IResolvable; 
  public get askLimitOnLaunch() {
    return this.getBooleanAttribute('ask_limit_on_launch');
  }
  public set askLimitOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askLimitOnLaunch = value;
  }
  public resetAskLimitOnLaunch() {
    this._askLimitOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askLimitOnLaunchInput() {
    return this._askLimitOnLaunch;
  }

  // ask_skip_tags_on_launch - computed: false, optional: true, required: false
  private _askSkipTagsOnLaunch?: boolean | cdktf.IResolvable; 
  public get askSkipTagsOnLaunch() {
    return this.getBooleanAttribute('ask_skip_tags_on_launch');
  }
  public set askSkipTagsOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askSkipTagsOnLaunch = value;
  }
  public resetAskSkipTagsOnLaunch() {
    this._askSkipTagsOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askSkipTagsOnLaunchInput() {
    return this._askSkipTagsOnLaunch;
  }

  // ask_tags_on_launch - computed: false, optional: true, required: false
  private _askTagsOnLaunch?: boolean | cdktf.IResolvable; 
  public get askTagsOnLaunch() {
    return this.getBooleanAttribute('ask_tags_on_launch');
  }
  public set askTagsOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askTagsOnLaunch = value;
  }
  public resetAskTagsOnLaunch() {
    this._askTagsOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askTagsOnLaunchInput() {
    return this._askTagsOnLaunch;
  }

  // ask_variables_on_launch - computed: false, optional: true, required: false
  private _askVariablesOnLaunch?: boolean | cdktf.IResolvable; 
  public get askVariablesOnLaunch() {
    return this.getBooleanAttribute('ask_variables_on_launch');
  }
  public set askVariablesOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askVariablesOnLaunch = value;
  }
  public resetAskVariablesOnLaunch() {
    this._askVariablesOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askVariablesOnLaunchInput() {
    return this._askVariablesOnLaunch;
  }

  // ask_verbosity_on_launch - computed: false, optional: true, required: false
  private _askVerbosityOnLaunch?: boolean | cdktf.IResolvable; 
  public get askVerbosityOnLaunch() {
    return this.getBooleanAttribute('ask_verbosity_on_launch');
  }
  public set askVerbosityOnLaunch(value: boolean | cdktf.IResolvable) {
    this._askVerbosityOnLaunch = value;
  }
  public resetAskVerbosityOnLaunch() {
    this._askVerbosityOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askVerbosityOnLaunchInput() {
    return this._askVerbosityOnLaunch;
  }

  // become_enabled - computed: false, optional: true, required: false
  private _becomeEnabled?: boolean | cdktf.IResolvable; 
  public get becomeEnabled() {
    return this.getBooleanAttribute('become_enabled');
  }
  public set becomeEnabled(value: boolean | cdktf.IResolvable) {
    this._becomeEnabled = value;
  }
  public resetBecomeEnabled() {
    this._becomeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get becomeEnabledInput() {
    return this._becomeEnabled;
  }

  // custom_virtualenv - computed: false, optional: true, required: false
  private _customVirtualenv?: string; 
  public get customVirtualenv() {
    return this.getStringAttribute('custom_virtualenv');
  }
  public set customVirtualenv(value: string) {
    this._customVirtualenv = value;
  }
  public resetCustomVirtualenv() {
    this._customVirtualenv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualenvInput() {
    return this._customVirtualenv;
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

  // diff_mode - computed: false, optional: true, required: false
  private _diffMode?: boolean | cdktf.IResolvable; 
  public get diffMode() {
    return this.getBooleanAttribute('diff_mode');
  }
  public set diffMode(value: boolean | cdktf.IResolvable) {
    this._diffMode = value;
  }
  public resetDiffMode() {
    this._diffMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffModeInput() {
    return this._diffMode;
  }

  // execution_environment - computed: false, optional: true, required: false
  private _executionEnvironment?: string; 
  public get executionEnvironment() {
    return this.getStringAttribute('execution_environment');
  }
  public set executionEnvironment(value: string) {
    this._executionEnvironment = value;
  }
  public resetExecutionEnvironment() {
    this._executionEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionEnvironmentInput() {
    return this._executionEnvironment;
  }

  // extra_vars - computed: false, optional: true, required: false
  private _extraVars?: string; 
  public get extraVars() {
    return this.getStringAttribute('extra_vars');
  }
  public set extraVars(value: string) {
    this._extraVars = value;
  }
  public resetExtraVars() {
    this._extraVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraVarsInput() {
    return this._extraVars;
  }

  // force_handlers - computed: false, optional: true, required: false
  private _forceHandlers?: boolean | cdktf.IResolvable; 
  public get forceHandlers() {
    return this.getBooleanAttribute('force_handlers');
  }
  public set forceHandlers(value: boolean | cdktf.IResolvable) {
    this._forceHandlers = value;
  }
  public resetForceHandlers() {
    this._forceHandlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceHandlersInput() {
    return this._forceHandlers;
  }

  // forks - computed: false, optional: true, required: false
  private _forks?: number; 
  public get forks() {
    return this.getNumberAttribute('forks');
  }
  public set forks(value: number) {
    this._forks = value;
  }
  public resetForks() {
    this._forks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forksInput() {
    return this._forks;
  }

  // host_config_key - computed: false, optional: true, required: false
  private _hostConfigKey?: string; 
  public get hostConfigKey() {
    return this.getStringAttribute('host_config_key');
  }
  public set hostConfigKey(value: string) {
    this._hostConfigKey = value;
  }
  public resetHostConfigKey() {
    this._hostConfigKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConfigKeyInput() {
    return this._hostConfigKey;
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

  // inventory_id - computed: false, optional: false, required: true
  private _inventoryId?: string; 
  public get inventoryId() {
    return this.getStringAttribute('inventory_id');
  }
  public set inventoryId(value: string) {
    this._inventoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryIdInput() {
    return this._inventoryId;
  }

  // job_tags - computed: false, optional: true, required: false
  private _jobTags?: string; 
  public get jobTags() {
    return this.getStringAttribute('job_tags');
  }
  public set jobTags(value: string) {
    this._jobTags = value;
  }
  public resetJobTags() {
    this._jobTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTagsInput() {
    return this._jobTags;
  }

  // job_type - computed: false, optional: false, required: true
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // playbook - computed: false, optional: true, required: false
  private _playbook?: string; 
  public get playbook() {
    return this.getStringAttribute('playbook');
  }
  public set playbook(value: string) {
    this._playbook = value;
  }
  public resetPlaybook() {
    this._playbook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playbookInput() {
    return this._playbook;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // skip_tags - computed: false, optional: true, required: false
  private _skipTags?: string; 
  public get skipTags() {
    return this.getStringAttribute('skip_tags');
  }
  public set skipTags(value: string) {
    this._skipTags = value;
  }
  public resetSkipTags() {
    this._skipTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTagsInput() {
    return this._skipTags;
  }

  // start_at_task - computed: false, optional: true, required: false
  private _startAtTask?: string; 
  public get startAtTask() {
    return this.getStringAttribute('start_at_task');
  }
  public set startAtTask(value: string) {
    this._startAtTask = value;
  }
  public resetStartAtTask() {
    this._startAtTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAtTaskInput() {
    return this._startAtTask;
  }

  // survey_enabled - computed: false, optional: true, required: false
  private _surveyEnabled?: boolean | cdktf.IResolvable; 
  public get surveyEnabled() {
    return this.getBooleanAttribute('survey_enabled');
  }
  public set surveyEnabled(value: boolean | cdktf.IResolvable) {
    this._surveyEnabled = value;
  }
  public resetSurveyEnabled() {
    this._surveyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surveyEnabledInput() {
    return this._surveyEnabled;
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

  // use_fact_cache - computed: false, optional: true, required: false
  private _useFactCache?: boolean | cdktf.IResolvable; 
  public get useFactCache() {
    return this.getBooleanAttribute('use_fact_cache');
  }
  public set useFactCache(value: boolean | cdktf.IResolvable) {
    this._useFactCache = value;
  }
  public resetUseFactCache() {
    this._useFactCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFactCacheInput() {
    return this._useFactCache;
  }

  // verbosity - computed: false, optional: true, required: false
  private _verbosity?: number; 
  public get verbosity() {
    return this.getNumberAttribute('verbosity');
  }
  public set verbosity(value: number) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_simultaneous: cdktf.booleanToTerraform(this._allowSimultaneous),
      ask_credential_on_launch: cdktf.booleanToTerraform(this._askCredentialOnLaunch),
      ask_diff_mode_on_launch: cdktf.booleanToTerraform(this._askDiffModeOnLaunch),
      ask_inventory_on_launch: cdktf.booleanToTerraform(this._askInventoryOnLaunch),
      ask_job_type_on_launch: cdktf.booleanToTerraform(this._askJobTypeOnLaunch),
      ask_limit_on_launch: cdktf.booleanToTerraform(this._askLimitOnLaunch),
      ask_skip_tags_on_launch: cdktf.booleanToTerraform(this._askSkipTagsOnLaunch),
      ask_tags_on_launch: cdktf.booleanToTerraform(this._askTagsOnLaunch),
      ask_variables_on_launch: cdktf.booleanToTerraform(this._askVariablesOnLaunch),
      ask_verbosity_on_launch: cdktf.booleanToTerraform(this._askVerbosityOnLaunch),
      become_enabled: cdktf.booleanToTerraform(this._becomeEnabled),
      custom_virtualenv: cdktf.stringToTerraform(this._customVirtualenv),
      description: cdktf.stringToTerraform(this._description),
      diff_mode: cdktf.booleanToTerraform(this._diffMode),
      execution_environment: cdktf.stringToTerraform(this._executionEnvironment),
      extra_vars: cdktf.stringToTerraform(this._extraVars),
      force_handlers: cdktf.booleanToTerraform(this._forceHandlers),
      forks: cdktf.numberToTerraform(this._forks),
      host_config_key: cdktf.stringToTerraform(this._hostConfigKey),
      id: cdktf.stringToTerraform(this._id),
      inventory_id: cdktf.stringToTerraform(this._inventoryId),
      job_tags: cdktf.stringToTerraform(this._jobTags),
      job_type: cdktf.stringToTerraform(this._jobType),
      limit: cdktf.stringToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      playbook: cdktf.stringToTerraform(this._playbook),
      project_id: cdktf.numberToTerraform(this._projectId),
      skip_tags: cdktf.stringToTerraform(this._skipTags),
      start_at_task: cdktf.stringToTerraform(this._startAtTask),
      survey_enabled: cdktf.booleanToTerraform(this._surveyEnabled),
      timeout: cdktf.numberToTerraform(this._timeout),
      use_fact_cache: cdktf.booleanToTerraform(this._useFactCache),
      verbosity: cdktf.numberToTerraform(this._verbosity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_simultaneous: {
        value: cdktf.booleanToHclTerraform(this._allowSimultaneous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_credential_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askCredentialOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_diff_mode_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askDiffModeOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_inventory_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askInventoryOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_job_type_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askJobTypeOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_limit_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askLimitOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_skip_tags_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askSkipTagsOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_tags_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askTagsOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_variables_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askVariablesOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ask_verbosity_on_launch: {
        value: cdktf.booleanToHclTerraform(this._askVerbosityOnLaunch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      become_enabled: {
        value: cdktf.booleanToHclTerraform(this._becomeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_virtualenv: {
        value: cdktf.stringToHclTerraform(this._customVirtualenv),
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
      diff_mode: {
        value: cdktf.booleanToHclTerraform(this._diffMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execution_environment: {
        value: cdktf.stringToHclTerraform(this._executionEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_vars: {
        value: cdktf.stringToHclTerraform(this._extraVars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_handlers: {
        value: cdktf.booleanToHclTerraform(this._forceHandlers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forks: {
        value: cdktf.numberToHclTerraform(this._forks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_config_key: {
        value: cdktf.stringToHclTerraform(this._hostConfigKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_id: {
        value: cdktf.stringToHclTerraform(this._inventoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_tags: {
        value: cdktf.stringToHclTerraform(this._jobTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_type: {
        value: cdktf.stringToHclTerraform(this._jobType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.stringToHclTerraform(this._limit),
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
      playbook: {
        value: cdktf.stringToHclTerraform(this._playbook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_tags: {
        value: cdktf.stringToHclTerraform(this._skipTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_at_task: {
        value: cdktf.stringToHclTerraform(this._startAtTask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      survey_enabled: {
        value: cdktf.booleanToHclTerraform(this._surveyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_fact_cache: {
        value: cdktf.booleanToHclTerraform(this._useFactCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      verbosity: {
        value: cdktf.numberToHclTerraform(this._verbosity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
