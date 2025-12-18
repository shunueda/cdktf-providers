// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/jobs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudJobsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment for which we want to retrieve the jobs (one of `project_id` or `environment_id` must be set)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/jobs#environment_id DataDbtcloudJobs#environment_id}
  */
  readonly environmentId?: number;
  /**
  * The ID of the project for which we want to retrieve the jobs (one of `project_id` or `environment_id` must be set)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/jobs#project_id DataDbtcloudJobs#project_id}
  */
  readonly projectId?: number;
}
export interface DataDbtcloudJobsJobsEnvironment {
}

export function dataDbtcloudJobsJobsEnvironmentToTerraform(struct?: DataDbtcloudJobsJobsEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobsJobsEnvironmentToHclTerraform(struct?: DataDbtcloudJobsJobsEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobsJobsEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudJobsJobsEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobsJobsEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataDbtcloudJobsJobsExecution {
}

export function dataDbtcloudJobsJobsExecutionToTerraform(struct?: DataDbtcloudJobsJobsExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobsJobsExecutionToHclTerraform(struct?: DataDbtcloudJobsJobsExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobsJobsExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudJobsJobsExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobsJobsExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export interface DataDbtcloudJobsJobsJobCompletionTriggerConditionCondition {
}

export function dataDbtcloudJobsJobsJobCompletionTriggerConditionConditionToTerraform(struct?: DataDbtcloudJobsJobsJobCompletionTriggerConditionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobsJobsJobCompletionTriggerConditionConditionToHclTerraform(struct?: DataDbtcloudJobsJobsJobCompletionTriggerConditionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobsJobsJobCompletionTriggerConditionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudJobsJobsJobCompletionTriggerConditionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobsJobsJobCompletionTriggerConditionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // statuses - computed: true, optional: false, required: false
  public get statuses() {
    return cdktf.Fn.tolist(this.getListAttribute('statuses'));
  }
}
export interface DataDbtcloudJobsJobsJobCompletionTriggerCondition {
}

export function dataDbtcloudJobsJobsJobCompletionTriggerConditionToTerraform(struct?: DataDbtcloudJobsJobsJobCompletionTriggerCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobsJobsJobCompletionTriggerConditionToHclTerraform(struct?: DataDbtcloudJobsJobsJobCompletionTriggerCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobsJobsJobCompletionTriggerConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudJobsJobsJobCompletionTriggerCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobsJobsJobCompletionTriggerCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataDbtcloudJobsJobsJobCompletionTriggerConditionConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
}
export interface DataDbtcloudJobsJobsSchedule {
}

export function dataDbtcloudJobsJobsScheduleToTerraform(struct?: DataDbtcloudJobsJobsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobsJobsScheduleToHclTerraform(struct?: DataDbtcloudJobsJobsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobsJobsScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudJobsJobsSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobsJobsSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron - computed: true, optional: false, required: false
  public get cron() {
    return this.getStringAttribute('cron');
  }
}
export interface DataDbtcloudJobsJobsSettings {
}

export function dataDbtcloudJobsJobsSettingsToTerraform(struct?: DataDbtcloudJobsJobsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobsJobsSettingsToHclTerraform(struct?: DataDbtcloudJobsJobsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobsJobsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudJobsJobsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobsJobsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }

  // threads - computed: true, optional: false, required: false
  public get threads() {
    return this.getNumberAttribute('threads');
  }
}
export interface DataDbtcloudJobsJobsTriggers {
}

export function dataDbtcloudJobsJobsTriggersToTerraform(struct?: DataDbtcloudJobsJobsTriggers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobsJobsTriggersToHclTerraform(struct?: DataDbtcloudJobsJobsTriggers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobsJobsTriggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudJobsJobsTriggers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobsJobsTriggers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // git_provider_webhook - computed: true, optional: false, required: false
  public get gitProviderWebhook() {
    return this.getBooleanAttribute('git_provider_webhook');
  }

  // github_webhook - computed: true, optional: false, required: false
  public get githubWebhook() {
    return this.getBooleanAttribute('github_webhook');
  }

  // on_merge - computed: true, optional: false, required: false
  public get onMerge() {
    return this.getBooleanAttribute('on_merge');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getBooleanAttribute('schedule');
  }
}
export interface DataDbtcloudJobsJobs {
  /**
  * Whether the job is triggered by the completion of another job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/jobs#job_completion_trigger_condition DataDbtcloudJobs#job_completion_trigger_condition}
  */
  readonly jobCompletionTriggerCondition?: DataDbtcloudJobsJobsJobCompletionTriggerCondition;
}

export function dataDbtcloudJobsJobsToTerraform(struct?: DataDbtcloudJobsJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_completion_trigger_condition: dataDbtcloudJobsJobsJobCompletionTriggerConditionToTerraform(struct!.jobCompletionTriggerCondition),
  }
}


export function dataDbtcloudJobsJobsToHclTerraform(struct?: DataDbtcloudJobsJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_completion_trigger_condition: {
      value: dataDbtcloudJobsJobsJobCompletionTriggerConditionToHclTerraform(struct!.jobCompletionTriggerCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDbtcloudJobsJobsJobCompletionTriggerCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDbtcloudJobsJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDbtcloudJobsJobs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobCompletionTriggerCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCompletionTriggerCondition = this._jobCompletionTriggerCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobsJobs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobCompletionTriggerCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobCompletionTriggerCondition.internalValue = value.jobCompletionTriggerCondition;
    }
  }

  // dbt_version - computed: true, optional: false, required: false
  public get dbtVersion() {
    return this.getStringAttribute('dbt_version');
  }

  // deferring_environment_id - computed: true, optional: false, required: false
  public get deferringEnvironmentId() {
    return this.getNumberAttribute('deferring_environment_id');
  }

  // deferring_job_definition_id - computed: true, optional: false, required: false
  public get deferringJobDefinitionId() {
    return this.getNumberAttribute('deferring_job_definition_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataDbtcloudJobsJobsEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getNumberAttribute('environment_id');
  }

  // execute_steps - computed: true, optional: false, required: false
  public get executeSteps() {
    return this.getListAttribute('execute_steps');
  }

  // execution - computed: true, optional: false, required: false
  private _execution = new DataDbtcloudJobsJobsExecutionOutputReference(this, "execution");
  public get execution() {
    return this._execution;
  }

  // force_node_selection - computed: true, optional: false, required: false
  public get forceNodeSelection() {
    return this.getBooleanAttribute('force_node_selection');
  }

  // generate_docs - computed: true, optional: false, required: false
  public get generateDocs() {
    return this.getBooleanAttribute('generate_docs');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // job_completion_trigger_condition - computed: true, optional: true, required: false
  private _jobCompletionTriggerCondition = new DataDbtcloudJobsJobsJobCompletionTriggerConditionOutputReference(this, "job_completion_trigger_condition");
  public get jobCompletionTriggerCondition() {
    return this._jobCompletionTriggerCondition;
  }
  public putJobCompletionTriggerCondition(value: DataDbtcloudJobsJobsJobCompletionTriggerCondition) {
    this._jobCompletionTriggerCondition.internalValue = value;
  }
  public resetJobCompletionTriggerCondition() {
    this._jobCompletionTriggerCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCompletionTriggerConditionInput() {
    return this._jobCompletionTriggerCondition.internalValue;
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // run_compare_changes - computed: true, optional: false, required: false
  public get runCompareChanges() {
    return this.getBooleanAttribute('run_compare_changes');
  }

  // run_generate_sources - computed: true, optional: false, required: false
  public get runGenerateSources() {
    return this.getBooleanAttribute('run_generate_sources');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataDbtcloudJobsJobsScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataDbtcloudJobsJobsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // triggers - computed: true, optional: false, required: false
  private _triggers = new DataDbtcloudJobsJobsTriggersOutputReference(this, "triggers");
  public get triggers() {
    return this._triggers;
  }

  // triggers_on_draft_pr - computed: true, optional: false, required: false
  public get triggersOnDraftPr() {
    return this.getBooleanAttribute('triggers_on_draft_pr');
  }
}

export class DataDbtcloudJobsJobsList extends cdktf.ComplexList {
  public internalValue? : DataDbtcloudJobsJobs[] | cdktf.IResolvable

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
  public get(index: number): DataDbtcloudJobsJobsOutputReference {
    return new DataDbtcloudJobsJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/jobs dbtcloud_jobs}
*/
export class DataDbtcloudJobs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_jobs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudJobs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudJobs to import
  * @param importFromId The id of the existing DataDbtcloudJobs that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/jobs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudJobs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_jobs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/jobs dbtcloud_jobs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudJobsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudJobsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_jobs',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: number; 
  public get environmentId() {
    return this.getNumberAttribute('environment_id');
  }
  public set environmentId(value: number) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // jobs - computed: true, optional: false, required: false
  private _jobs = new DataDbtcloudJobsJobsList(this, "jobs", true);
  public get jobs() {
    return this._jobs;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.numberToTerraform(this._environmentId),
      project_id: cdktf.numberToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.numberToHclTerraform(this._environmentId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
