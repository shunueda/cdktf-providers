// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Which other job should trigger this job when it finishes, and on which conditions. Format for the property will change in the next release to match the one from the one from dbtcloud_jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/job#job_completion_trigger_condition DataDbtcloudJob#job_completion_trigger_condition}
  */
  readonly jobCompletionTriggerCondition?: DataDbtcloudJobJobCompletionTriggerCondition[] | cdktf.IResolvable;
  /**
  * The ID of the job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/job#job_id DataDbtcloudJob#job_id}
  */
  readonly jobId: number;
}
export interface DataDbtcloudJobEnvironment {
}

export function dataDbtcloudJobEnvironmentToTerraform(struct?: DataDbtcloudJobEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobEnvironmentToHclTerraform(struct?: DataDbtcloudJobEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudJobEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobEnvironment | undefined) {
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
export interface DataDbtcloudJobExecution {
}

export function dataDbtcloudJobExecutionToTerraform(struct?: DataDbtcloudJobExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobExecutionToHclTerraform(struct?: DataDbtcloudJobExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudJobExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobExecution | undefined) {
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
export interface DataDbtcloudJobJobCompletionTriggerCondition {
}

export function dataDbtcloudJobJobCompletionTriggerConditionToTerraform(struct?: DataDbtcloudJobJobCompletionTriggerCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobJobCompletionTriggerConditionToHclTerraform(struct?: DataDbtcloudJobJobCompletionTriggerCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobJobCompletionTriggerConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDbtcloudJobJobCompletionTriggerCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobJobCompletionTriggerCondition | cdktf.IResolvable | undefined) {
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

export class DataDbtcloudJobJobCompletionTriggerConditionList extends cdktf.ComplexList {
  public internalValue? : DataDbtcloudJobJobCompletionTriggerCondition[] | cdktf.IResolvable

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
  public get(index: number): DataDbtcloudJobJobCompletionTriggerConditionOutputReference {
    return new DataDbtcloudJobJobCompletionTriggerConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDbtcloudJobSchedule {
}

export function dataDbtcloudJobScheduleToTerraform(struct?: DataDbtcloudJobSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobScheduleToHclTerraform(struct?: DataDbtcloudJobSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudJobSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobSchedule | undefined) {
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
export interface DataDbtcloudJobSettings {
}

export function dataDbtcloudJobSettingsToTerraform(struct?: DataDbtcloudJobSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobSettingsToHclTerraform(struct?: DataDbtcloudJobSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudJobSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobSettings | undefined) {
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
export interface DataDbtcloudJobTriggers {
}

export function dataDbtcloudJobTriggersToTerraform(struct?: DataDbtcloudJobTriggers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudJobTriggersToHclTerraform(struct?: DataDbtcloudJobTriggers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudJobTriggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudJobTriggers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudJobTriggers | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/job dbtcloud_job}
*/
export class DataDbtcloudJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudJob to import
  * @param importFromId The id of the existing DataDbtcloudJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/job dbtcloud_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudJobConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_job',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._jobCompletionTriggerCondition.internalValue = config.jobCompletionTriggerCondition;
    this._jobId = config.jobId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dbt_version - computed: true, optional: false, required: false
  public get dbtVersion() {
    return this.getStringAttribute('dbt_version');
  }

  // deferring_environment_id - computed: true, optional: false, required: false
  public get deferringEnvironmentId() {
    return this.getNumberAttribute('deferring_environment_id');
  }

  // deferring_job_id - computed: true, optional: false, required: false
  public get deferringJobId() {
    return this.getNumberAttribute('deferring_job_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataDbtcloudJobEnvironmentOutputReference(this, "environment");
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
  private _execution = new DataDbtcloudJobExecutionOutputReference(this, "execution");
  public get execution() {
    return this._execution;
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
  private _jobCompletionTriggerCondition = new DataDbtcloudJobJobCompletionTriggerConditionList(this, "job_completion_trigger_condition", false);
  public get jobCompletionTriggerCondition() {
    return this._jobCompletionTriggerCondition;
  }
  public putJobCompletionTriggerCondition(value: DataDbtcloudJobJobCompletionTriggerCondition[] | cdktf.IResolvable) {
    this._jobCompletionTriggerCondition.internalValue = value;
  }
  public resetJobCompletionTriggerCondition() {
    this._jobCompletionTriggerCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCompletionTriggerConditionInput() {
    return this._jobCompletionTriggerCondition.internalValue;
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
  private _schedule = new DataDbtcloudJobScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // self_deferring - computed: true, optional: false, required: false
  public get selfDeferring() {
    return this.getBooleanAttribute('self_deferring');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataDbtcloudJobSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // triggers - computed: true, optional: false, required: false
  private _triggers = new DataDbtcloudJobTriggersOutputReference(this, "triggers");
  public get triggers() {
    return this._triggers;
  }

  // triggers_on_draft_pr - computed: true, optional: false, required: false
  public get triggersOnDraftPr() {
    return this.getBooleanAttribute('triggers_on_draft_pr');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      job_completion_trigger_condition: cdktf.listMapper(dataDbtcloudJobJobCompletionTriggerConditionToTerraform, false)(this._jobCompletionTriggerCondition.internalValue),
      job_id: cdktf.numberToTerraform(this._jobId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      job_completion_trigger_condition: {
        value: cdktf.listMapperHcl(dataDbtcloudJobJobCompletionTriggerConditionToHclTerraform, false)(this._jobCompletionTriggerCondition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDbtcloudJobJobCompletionTriggerConditionList",
      },
      job_id: {
        value: cdktf.numberToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
