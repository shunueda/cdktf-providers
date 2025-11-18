// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The model selector for checking changes in the compare changes Advanced CI feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#compare_changes_flags Job#compare_changes_flags}
  */
  readonly compareChangesFlags?: string;
  /**
  * Version number of dbt to use in this job, usually in the format 1.2.0-latest rather than core versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#dbt_version Job#dbt_version}
  */
  readonly dbtVersion?: string;
  /**
  * Environment identifier that this job defers to (new deferring approach)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#deferring_environment_id Job#deferring_environment_id}
  */
  readonly deferringEnvironmentId?: number;
  /**
  * Job identifier that this job defers to (legacy deferring approach)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#deferring_job_id Job#deferring_job_id}
  */
  readonly deferringJobId?: number;
  /**
  * Description for the job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#description Job#description}
  */
  readonly description?: string;
  /**
  * Environment ID to create the job in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#environment_id Job#environment_id}
  */
  readonly environmentId: number;
  /**
  * Whether the CI job should fail when a lint error is found. Only used when `run_lint` is set to `true`. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#errors_on_lint_failure Job#errors_on_lint_failure}
  */
  readonly errorsOnLintFailure?: boolean | cdktf.IResolvable;
  /**
  * List of commands to execute for the job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#execute_steps Job#execute_steps}
  */
  readonly executeSteps: string[];
  /**
  * Whether to force node selection (SAO - Select All Optimizations) for the job. If `dbt_version` is not set to `latest-fusion`, this must be set to `true` when specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#force_node_selection Job#force_node_selection}
  */
  readonly forceNodeSelection?: boolean | cdktf.IResolvable;
  /**
  * Flag for whether the job should generate documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#generate_docs Job#generate_docs}
  */
  readonly generateDocs?: boolean | cdktf.IResolvable;
  /**
  * Should always be set to true as setting it to false is the same as creating a job in a deleted state. To create/keep a job in a 'deactivated' state, check  the `triggers` config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#is_active Job#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Can be used to enforce the job type betwen `ci`, `merge` and `scheduled`. Without this value the job type is inferred from the triggers configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#job_type Job#job_type}
  */
  readonly jobType?: string;
  /**
  * Job name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#name Job#name}
  */
  readonly name: string;
  /**
  * Number of threads to use in the job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#num_threads Job#num_threads}
  */
  readonly numThreads?: number;
  /**
  * Project ID to create the job in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#project_id Job#project_id}
  */
  readonly projectId: number;
  /**
  * Whether the CI job should compare data changes introduced by the code changes. Requires `deferring_environment_id` to be set. (Advanced CI needs to be activated in the dbt Cloud Account Settings first as well)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#run_compare_changes Job#run_compare_changes}
  */
  readonly runCompareChanges?: boolean | cdktf.IResolvable;
  /**
  * Flag for whether the job should add a `dbt source freshness` step to the job. The difference between manually adding a step with `dbt source freshness` in the job steps or using this flag is that with this flag, a failed freshness will still allow the following steps to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#run_generate_sources Job#run_generate_sources}
  */
  readonly runGenerateSources?: boolean | cdktf.IResolvable;
  /**
  * Whether the CI job should lint SQL changes. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#run_lint Job#run_lint}
  */
  readonly runLint?: boolean | cdktf.IResolvable;
  /**
  * Custom cron expression for schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#schedule_cron Job#schedule_cron}
  */
  readonly scheduleCron?: string;
  /**
  * List of days of week as numbers (0 = Sunday, 7 = Saturday) to execute the job at if running on a schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#schedule_days Job#schedule_days}
  */
  readonly scheduleDays?: number[];
  /**
  * List of hours to execute the job at if running on a schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#schedule_hours Job#schedule_hours}
  */
  readonly scheduleHours?: number[];
  /**
  * Number of hours between job executions if running on a schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#schedule_interval Job#schedule_interval}
  */
  readonly scheduleInterval?: number;
  /**
  * Type of schedule to use, one of every_day/ days_of_week/ custom_cron/ interval_cron
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#schedule_type Job#schedule_type}
  */
  readonly scheduleType?: string;
  /**
  *  Whether this job defers on a previous run of itself
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#self_deferring Job#self_deferring}
  */
  readonly selfDeferring?: boolean | cdktf.IResolvable;
  /**
  * Target name for the dbt profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#target_name Job#target_name}
  */
  readonly targetName?: string;
  /**
  * [Deprectated - Moved to execution.timeout_seconds] Number of seconds to allow the job to run before timing out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#timeout_seconds Job#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Flags for which types of triggers to use, the values are `github_webhook`, `git_provider_webhook`, `schedule` and `on_merge`. All flags should be listed and set with `true` or `false`. When `on_merge` is `true`, all the other values must be false.<br>`custom_branch_only` used to be allowed but has been deprecated from the API. The jobs will use the custom branch of the environment. Please remove the `custom_branch_only` from your config. <br>To create a job in a 'deactivated' state, set all to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#triggers Job#triggers}
  */
  readonly triggers: JobTriggers;
  /**
  * Whether the CI job should be automatically triggered on draft PRs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#triggers_on_draft_pr Job#triggers_on_draft_pr}
  */
  readonly triggersOnDraftPr?: boolean | cdktf.IResolvable;
  /**
  * job_completion_trigger_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#job_completion_trigger_condition Job#job_completion_trigger_condition}
  */
  readonly jobCompletionTriggerCondition?: JobJobCompletionTriggerCondition[] | cdktf.IResolvable;
}
export interface JobTriggers {
  /**
  * Whether the job runs automatically on PR creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#git_provider_webhook Job#git_provider_webhook}
  */
  readonly gitProviderWebhook?: boolean | cdktf.IResolvable;
  /**
  * Whether the job runs automatically on PR creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#github_webhook Job#github_webhook}
  */
  readonly githubWebhook?: boolean | cdktf.IResolvable;
  /**
  * Whether the job runs automatically once a PR is merged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#on_merge Job#on_merge}
  */
  readonly onMerge?: boolean | cdktf.IResolvable;
  /**
  * Whether the job runs on a schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#schedule Job#schedule}
  */
  readonly schedule?: boolean | cdktf.IResolvable;
}

export function jobTriggersToTerraform(struct?: JobTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    git_provider_webhook: cdktf.booleanToTerraform(struct!.gitProviderWebhook),
    github_webhook: cdktf.booleanToTerraform(struct!.githubWebhook),
    on_merge: cdktf.booleanToTerraform(struct!.onMerge),
    schedule: cdktf.booleanToTerraform(struct!.schedule),
  }
}


export function jobTriggersToHclTerraform(struct?: JobTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    git_provider_webhook: {
      value: cdktf.booleanToHclTerraform(struct!.gitProviderWebhook),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    github_webhook: {
      value: cdktf.booleanToHclTerraform(struct!.githubWebhook),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_merge: {
      value: cdktf.booleanToHclTerraform(struct!.onMerge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule: {
      value: cdktf.booleanToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JobTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gitProviderWebhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitProviderWebhook = this._gitProviderWebhook;
    }
    if (this._githubWebhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubWebhook = this._githubWebhook;
    }
    if (this._onMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.onMerge = this._onMerge;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gitProviderWebhook = undefined;
      this._githubWebhook = undefined;
      this._onMerge = undefined;
      this._schedule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gitProviderWebhook = value.gitProviderWebhook;
      this._githubWebhook = value.githubWebhook;
      this._onMerge = value.onMerge;
      this._schedule = value.schedule;
    }
  }

  // git_provider_webhook - computed: true, optional: true, required: false
  private _gitProviderWebhook?: boolean | cdktf.IResolvable; 
  public get gitProviderWebhook() {
    return this.getBooleanAttribute('git_provider_webhook');
  }
  public set gitProviderWebhook(value: boolean | cdktf.IResolvable) {
    this._gitProviderWebhook = value;
  }
  public resetGitProviderWebhook() {
    this._gitProviderWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProviderWebhookInput() {
    return this._gitProviderWebhook;
  }

  // github_webhook - computed: true, optional: true, required: false
  private _githubWebhook?: boolean | cdktf.IResolvable; 
  public get githubWebhook() {
    return this.getBooleanAttribute('github_webhook');
  }
  public set githubWebhook(value: boolean | cdktf.IResolvable) {
    this._githubWebhook = value;
  }
  public resetGithubWebhook() {
    this._githubWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubWebhookInput() {
    return this._githubWebhook;
  }

  // on_merge - computed: true, optional: true, required: false
  private _onMerge?: boolean | cdktf.IResolvable; 
  public get onMerge() {
    return this.getBooleanAttribute('on_merge');
  }
  public set onMerge(value: boolean | cdktf.IResolvable) {
    this._onMerge = value;
  }
  public resetOnMerge() {
    this._onMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMergeInput() {
    return this._onMerge;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: boolean | cdktf.IResolvable; 
  public get schedule() {
    return this.getBooleanAttribute('schedule');
  }
  public set schedule(value: boolean | cdktf.IResolvable) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}
export interface JobJobCompletionTriggerCondition {
  /**
  * The ID of the job that would trigger this job after completion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#job_id Job#job_id}
  */
  readonly jobId: number;
  /**
  * The ID of the project where the trigger job is running in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#project_id Job#project_id}
  */
  readonly projectId: number;
  /**
  * List of statuses to trigger the job on. Possible values are `success`, `error` and `canceled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#statuses Job#statuses}
  */
  readonly statuses: string[];
}

export function jobJobCompletionTriggerConditionToTerraform(struct?: JobJobCompletionTriggerCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_id: cdktf.numberToTerraform(struct!.jobId),
    project_id: cdktf.numberToTerraform(struct!.projectId),
    statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statuses),
  }
}


export function jobJobCompletionTriggerConditionToHclTerraform(struct?: JobJobCompletionTriggerCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_id: {
      value: cdktf.numberToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project_id: {
      value: cdktf.numberToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statuses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobJobCompletionTriggerConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobJobCompletionTriggerCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobJobCompletionTriggerCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobId = undefined;
      this._projectId = undefined;
      this._statuses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobId = value.jobId;
      this._projectId = value.projectId;
      this._statuses = value.statuses;
    }
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: number; 
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }
  public set jobId(value: number) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
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

  // statuses - computed: false, optional: false, required: true
  private _statuses?: string[]; 
  public get statuses() {
    return cdktf.Fn.tolist(this.getListAttribute('statuses'));
  }
  public set statuses(value: string[]) {
    this._statuses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }
}

export class JobJobCompletionTriggerConditionList extends cdktf.ComplexList {
  public internalValue? : JobJobCompletionTriggerCondition[] | cdktf.IResolvable

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
  public get(index: number): JobJobCompletionTriggerConditionOutputReference {
    return new JobJobCompletionTriggerConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job dbtcloud_job}
*/
export class Job extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Job resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Job to import
  * @param importFromId The id of the existing Job that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Job to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/job dbtcloud_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JobConfig
  */
  public constructor(scope: Construct, id: string, config: JobConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_job',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compareChangesFlags = config.compareChangesFlags;
    this._dbtVersion = config.dbtVersion;
    this._deferringEnvironmentId = config.deferringEnvironmentId;
    this._deferringJobId = config.deferringJobId;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._errorsOnLintFailure = config.errorsOnLintFailure;
    this._executeSteps = config.executeSteps;
    this._forceNodeSelection = config.forceNodeSelection;
    this._generateDocs = config.generateDocs;
    this._isActive = config.isActive;
    this._jobType = config.jobType;
    this._name = config.name;
    this._numThreads = config.numThreads;
    this._projectId = config.projectId;
    this._runCompareChanges = config.runCompareChanges;
    this._runGenerateSources = config.runGenerateSources;
    this._runLint = config.runLint;
    this._scheduleCron = config.scheduleCron;
    this._scheduleDays = config.scheduleDays;
    this._scheduleHours = config.scheduleHours;
    this._scheduleInterval = config.scheduleInterval;
    this._scheduleType = config.scheduleType;
    this._selfDeferring = config.selfDeferring;
    this._targetName = config.targetName;
    this._timeoutSeconds = config.timeoutSeconds;
    this._triggers.internalValue = config.triggers;
    this._triggersOnDraftPr = config.triggersOnDraftPr;
    this._jobCompletionTriggerCondition.internalValue = config.jobCompletionTriggerCondition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compare_changes_flags - computed: true, optional: true, required: false
  private _compareChangesFlags?: string; 
  public get compareChangesFlags() {
    return this.getStringAttribute('compare_changes_flags');
  }
  public set compareChangesFlags(value: string) {
    this._compareChangesFlags = value;
  }
  public resetCompareChangesFlags() {
    this._compareChangesFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareChangesFlagsInput() {
    return this._compareChangesFlags;
  }

  // dbt_version - computed: false, optional: true, required: false
  private _dbtVersion?: string; 
  public get dbtVersion() {
    return this.getStringAttribute('dbt_version');
  }
  public set dbtVersion(value: string) {
    this._dbtVersion = value;
  }
  public resetDbtVersion() {
    this._dbtVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtVersionInput() {
    return this._dbtVersion;
  }

  // deferring_environment_id - computed: false, optional: true, required: false
  private _deferringEnvironmentId?: number; 
  public get deferringEnvironmentId() {
    return this.getNumberAttribute('deferring_environment_id');
  }
  public set deferringEnvironmentId(value: number) {
    this._deferringEnvironmentId = value;
  }
  public resetDeferringEnvironmentId() {
    this._deferringEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferringEnvironmentIdInput() {
    return this._deferringEnvironmentId;
  }

  // deferring_job_id - computed: false, optional: true, required: false
  private _deferringJobId?: number; 
  public get deferringJobId() {
    return this.getNumberAttribute('deferring_job_id');
  }
  public set deferringJobId(value: number) {
    this._deferringJobId = value;
  }
  public resetDeferringJobId() {
    this._deferringJobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferringJobIdInput() {
    return this._deferringJobId;
  }

  // description - computed: true, optional: true, required: false
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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: number; 
  public get environmentId() {
    return this.getNumberAttribute('environment_id');
  }
  public set environmentId(value: number) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // errors_on_lint_failure - computed: true, optional: true, required: false
  private _errorsOnLintFailure?: boolean | cdktf.IResolvable; 
  public get errorsOnLintFailure() {
    return this.getBooleanAttribute('errors_on_lint_failure');
  }
  public set errorsOnLintFailure(value: boolean | cdktf.IResolvable) {
    this._errorsOnLintFailure = value;
  }
  public resetErrorsOnLintFailure() {
    this._errorsOnLintFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsOnLintFailureInput() {
    return this._errorsOnLintFailure;
  }

  // execute_steps - computed: false, optional: false, required: true
  private _executeSteps?: string[]; 
  public get executeSteps() {
    return this.getListAttribute('execute_steps');
  }
  public set executeSteps(value: string[]) {
    this._executeSteps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeStepsInput() {
    return this._executeSteps;
  }

  // force_node_selection - computed: true, optional: true, required: false
  private _forceNodeSelection?: boolean | cdktf.IResolvable; 
  public get forceNodeSelection() {
    return this.getBooleanAttribute('force_node_selection');
  }
  public set forceNodeSelection(value: boolean | cdktf.IResolvable) {
    this._forceNodeSelection = value;
  }
  public resetForceNodeSelection() {
    this._forceNodeSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNodeSelectionInput() {
    return this._forceNodeSelection;
  }

  // generate_docs - computed: true, optional: true, required: false
  private _generateDocs?: boolean | cdktf.IResolvable; 
  public get generateDocs() {
    return this.getBooleanAttribute('generate_docs');
  }
  public set generateDocs(value: boolean | cdktf.IResolvable) {
    this._generateDocs = value;
  }
  public resetGenerateDocs() {
    this._generateDocs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateDocsInput() {
    return this._generateDocs;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }

  // job_type - computed: true, optional: true, required: false
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  public resetJobType() {
    this._jobType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
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

  // num_threads - computed: true, optional: true, required: false
  private _numThreads?: number; 
  public get numThreads() {
    return this.getNumberAttribute('num_threads');
  }
  public set numThreads(value: number) {
    this._numThreads = value;
  }
  public resetNumThreads() {
    this._numThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numThreadsInput() {
    return this._numThreads;
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

  // run_compare_changes - computed: true, optional: true, required: false
  private _runCompareChanges?: boolean | cdktf.IResolvable; 
  public get runCompareChanges() {
    return this.getBooleanAttribute('run_compare_changes');
  }
  public set runCompareChanges(value: boolean | cdktf.IResolvable) {
    this._runCompareChanges = value;
  }
  public resetRunCompareChanges() {
    this._runCompareChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCompareChangesInput() {
    return this._runCompareChanges;
  }

  // run_generate_sources - computed: true, optional: true, required: false
  private _runGenerateSources?: boolean | cdktf.IResolvable; 
  public get runGenerateSources() {
    return this.getBooleanAttribute('run_generate_sources');
  }
  public set runGenerateSources(value: boolean | cdktf.IResolvable) {
    this._runGenerateSources = value;
  }
  public resetRunGenerateSources() {
    this._runGenerateSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runGenerateSourcesInput() {
    return this._runGenerateSources;
  }

  // run_lint - computed: true, optional: true, required: false
  private _runLint?: boolean | cdktf.IResolvable; 
  public get runLint() {
    return this.getBooleanAttribute('run_lint');
  }
  public set runLint(value: boolean | cdktf.IResolvable) {
    this._runLint = value;
  }
  public resetRunLint() {
    this._runLint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLintInput() {
    return this._runLint;
  }

  // schedule_cron - computed: false, optional: true, required: false
  private _scheduleCron?: string; 
  public get scheduleCron() {
    return this.getStringAttribute('schedule_cron');
  }
  public set scheduleCron(value: string) {
    this._scheduleCron = value;
  }
  public resetScheduleCron() {
    this._scheduleCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleCronInput() {
    return this._scheduleCron;
  }

  // schedule_days - computed: false, optional: true, required: false
  private _scheduleDays?: number[]; 
  public get scheduleDays() {
    return this.getNumberListAttribute('schedule_days');
  }
  public set scheduleDays(value: number[]) {
    this._scheduleDays = value;
  }
  public resetScheduleDays() {
    this._scheduleDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleDaysInput() {
    return this._scheduleDays;
  }

  // schedule_hours - computed: false, optional: true, required: false
  private _scheduleHours?: number[]; 
  public get scheduleHours() {
    return this.getNumberListAttribute('schedule_hours');
  }
  public set scheduleHours(value: number[]) {
    this._scheduleHours = value;
  }
  public resetScheduleHours() {
    this._scheduleHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleHoursInput() {
    return this._scheduleHours;
  }

  // schedule_interval - computed: true, optional: true, required: false
  private _scheduleInterval?: number; 
  public get scheduleInterval() {
    return this.getNumberAttribute('schedule_interval');
  }
  public set scheduleInterval(value: number) {
    this._scheduleInterval = value;
  }
  public resetScheduleInterval() {
    this._scheduleInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIntervalInput() {
    return this._scheduleInterval;
  }

  // schedule_type - computed: true, optional: true, required: false
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  public resetScheduleType() {
    this._scheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // self_deferring - computed: true, optional: true, required: false
  private _selfDeferring?: boolean | cdktf.IResolvable; 
  public get selfDeferring() {
    return this.getBooleanAttribute('self_deferring');
  }
  public set selfDeferring(value: boolean | cdktf.IResolvable) {
    this._selfDeferring = value;
  }
  public resetSelfDeferring() {
    this._selfDeferring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfDeferringInput() {
    return this._selfDeferring;
  }

  // target_name - computed: true, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // triggers - computed: false, optional: false, required: true
  private _triggers = new JobTriggersOutputReference(this, "triggers");
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: JobTriggers) {
    this._triggers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // triggers_on_draft_pr - computed: true, optional: true, required: false
  private _triggersOnDraftPr?: boolean | cdktf.IResolvable; 
  public get triggersOnDraftPr() {
    return this.getBooleanAttribute('triggers_on_draft_pr');
  }
  public set triggersOnDraftPr(value: boolean | cdktf.IResolvable) {
    this._triggersOnDraftPr = value;
  }
  public resetTriggersOnDraftPr() {
    this._triggersOnDraftPr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersOnDraftPrInput() {
    return this._triggersOnDraftPr;
  }

  // job_completion_trigger_condition - computed: false, optional: true, required: false
  private _jobCompletionTriggerCondition = new JobJobCompletionTriggerConditionList(this, "job_completion_trigger_condition", false);
  public get jobCompletionTriggerCondition() {
    return this._jobCompletionTriggerCondition;
  }
  public putJobCompletionTriggerCondition(value: JobJobCompletionTriggerCondition[] | cdktf.IResolvable) {
    this._jobCompletionTriggerCondition.internalValue = value;
  }
  public resetJobCompletionTriggerCondition() {
    this._jobCompletionTriggerCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCompletionTriggerConditionInput() {
    return this._jobCompletionTriggerCondition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compare_changes_flags: cdktf.stringToTerraform(this._compareChangesFlags),
      dbt_version: cdktf.stringToTerraform(this._dbtVersion),
      deferring_environment_id: cdktf.numberToTerraform(this._deferringEnvironmentId),
      deferring_job_id: cdktf.numberToTerraform(this._deferringJobId),
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.numberToTerraform(this._environmentId),
      errors_on_lint_failure: cdktf.booleanToTerraform(this._errorsOnLintFailure),
      execute_steps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._executeSteps),
      force_node_selection: cdktf.booleanToTerraform(this._forceNodeSelection),
      generate_docs: cdktf.booleanToTerraform(this._generateDocs),
      is_active: cdktf.booleanToTerraform(this._isActive),
      job_type: cdktf.stringToTerraform(this._jobType),
      name: cdktf.stringToTerraform(this._name),
      num_threads: cdktf.numberToTerraform(this._numThreads),
      project_id: cdktf.numberToTerraform(this._projectId),
      run_compare_changes: cdktf.booleanToTerraform(this._runCompareChanges),
      run_generate_sources: cdktf.booleanToTerraform(this._runGenerateSources),
      run_lint: cdktf.booleanToTerraform(this._runLint),
      schedule_cron: cdktf.stringToTerraform(this._scheduleCron),
      schedule_days: cdktf.listMapper(cdktf.numberToTerraform, false)(this._scheduleDays),
      schedule_hours: cdktf.listMapper(cdktf.numberToTerraform, false)(this._scheduleHours),
      schedule_interval: cdktf.numberToTerraform(this._scheduleInterval),
      schedule_type: cdktf.stringToTerraform(this._scheduleType),
      self_deferring: cdktf.booleanToTerraform(this._selfDeferring),
      target_name: cdktf.stringToTerraform(this._targetName),
      timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
      triggers: jobTriggersToTerraform(this._triggers.internalValue),
      triggers_on_draft_pr: cdktf.booleanToTerraform(this._triggersOnDraftPr),
      job_completion_trigger_condition: cdktf.listMapper(jobJobCompletionTriggerConditionToTerraform, true)(this._jobCompletionTriggerCondition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compare_changes_flags: {
        value: cdktf.stringToHclTerraform(this._compareChangesFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbt_version: {
        value: cdktf.stringToHclTerraform(this._dbtVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deferring_environment_id: {
        value: cdktf.numberToHclTerraform(this._deferringEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deferring_job_id: {
        value: cdktf.numberToHclTerraform(this._deferringJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.numberToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      errors_on_lint_failure: {
        value: cdktf.booleanToHclTerraform(this._errorsOnLintFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execute_steps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._executeSteps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      force_node_selection: {
        value: cdktf.booleanToHclTerraform(this._forceNodeSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      generate_docs: {
        value: cdktf.booleanToHclTerraform(this._generateDocs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      job_type: {
        value: cdktf.stringToHclTerraform(this._jobType),
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
      num_threads: {
        value: cdktf.numberToHclTerraform(this._numThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      run_compare_changes: {
        value: cdktf.booleanToHclTerraform(this._runCompareChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_generate_sources: {
        value: cdktf.booleanToHclTerraform(this._runGenerateSources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_lint: {
        value: cdktf.booleanToHclTerraform(this._runLint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schedule_cron: {
        value: cdktf.stringToHclTerraform(this._scheduleCron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_days: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._scheduleDays),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      schedule_hours: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._scheduleHours),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      schedule_interval: {
        value: cdktf.numberToHclTerraform(this._scheduleInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schedule_type: {
        value: cdktf.stringToHclTerraform(this._scheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_deferring: {
        value: cdktf.booleanToHclTerraform(this._selfDeferring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      triggers: {
        value: jobTriggersToHclTerraform(this._triggers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "JobTriggers",
      },
      triggers_on_draft_pr: {
        value: cdktf.booleanToHclTerraform(this._triggersOnDraftPr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      job_completion_trigger_condition: {
        value: cdktf.listMapperHcl(jobJobCompletionTriggerConditionToHclTerraform, true)(this._jobCompletionTriggerCondition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobJobCompletionTriggerConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
