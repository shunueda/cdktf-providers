// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudRunsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter to apply to the runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#filter DataDbtcloudRuns#filter}
  */
  readonly filter?: DataDbtcloudRunsFilter;
}
export interface DataDbtcloudRunsFilter {
  /**
  * The ID of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#environment_id DataDbtcloudRuns#environment_id}
  */
  readonly environmentId?: number;
  /**
  * The ID of the job definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#job_definition_id DataDbtcloudRuns#job_definition_id}
  */
  readonly jobDefinitionId?: number;
  /**
  * The limit of the runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#limit DataDbtcloudRuns#limit}
  */
  readonly limit?: number;
  /**
  * The ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#project_id DataDbtcloudRuns#project_id}
  */
  readonly projectId?: number;
  /**
  * The ID of the pull request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#pull_request_id DataDbtcloudRuns#pull_request_id}
  */
  readonly pullRequestId?: number;
  /**
  * The status of the run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#status DataDbtcloudRuns#status}
  */
  readonly status?: number;
  /**
  * The status of the run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#status_in DataDbtcloudRuns#status_in}
  */
  readonly statusIn?: string;
  /**
  * The ID of the trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#trigger_id DataDbtcloudRuns#trigger_id}
  */
  readonly triggerId?: number;
}

export function dataDbtcloudRunsFilterToTerraform(struct?: DataDbtcloudRunsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_id: cdktf.numberToTerraform(struct!.environmentId),
    job_definition_id: cdktf.numberToTerraform(struct!.jobDefinitionId),
    limit: cdktf.numberToTerraform(struct!.limit),
    project_id: cdktf.numberToTerraform(struct!.projectId),
    pull_request_id: cdktf.numberToTerraform(struct!.pullRequestId),
    status: cdktf.numberToTerraform(struct!.status),
    status_in: cdktf.stringToTerraform(struct!.statusIn),
    trigger_id: cdktf.numberToTerraform(struct!.triggerId),
  }
}


export function dataDbtcloudRunsFilterToHclTerraform(struct?: DataDbtcloudRunsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_id: {
      value: cdktf.numberToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_definition_id: {
      value: cdktf.numberToHclTerraform(struct!.jobDefinitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
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
    pull_request_id: {
      value: cdktf.numberToHclTerraform(struct!.pullRequestId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_in: {
      value: cdktf.stringToHclTerraform(struct!.statusIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_id: {
      value: cdktf.numberToHclTerraform(struct!.triggerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDbtcloudRunsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudRunsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    if (this._jobDefinitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobDefinitionId = this._jobDefinitionId;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._pullRequestId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestId = this._pullRequestId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._statusIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusIn = this._statusIn;
    }
    if (this._triggerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerId = this._triggerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudRunsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentId = undefined;
      this._jobDefinitionId = undefined;
      this._limit = undefined;
      this._projectId = undefined;
      this._pullRequestId = undefined;
      this._status = undefined;
      this._statusIn = undefined;
      this._triggerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentId = value.environmentId;
      this._jobDefinitionId = value.jobDefinitionId;
      this._limit = value.limit;
      this._projectId = value.projectId;
      this._pullRequestId = value.pullRequestId;
      this._status = value.status;
      this._statusIn = value.statusIn;
      this._triggerId = value.triggerId;
    }
  }

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

  // job_definition_id - computed: false, optional: true, required: false
  private _jobDefinitionId?: number; 
  public get jobDefinitionId() {
    return this.getNumberAttribute('job_definition_id');
  }
  public set jobDefinitionId(value: number) {
    this._jobDefinitionId = value;
  }
  public resetJobDefinitionId() {
    this._jobDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDefinitionIdInput() {
    return this._jobDefinitionId;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // pull_request_id - computed: false, optional: true, required: false
  private _pullRequestId?: number; 
  public get pullRequestId() {
    return this.getNumberAttribute('pull_request_id');
  }
  public set pullRequestId(value: number) {
    this._pullRequestId = value;
  }
  public resetPullRequestId() {
    this._pullRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestIdInput() {
    return this._pullRequestId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_in - computed: false, optional: true, required: false
  private _statusIn?: string; 
  public get statusIn() {
    return this.getStringAttribute('status_in');
  }
  public set statusIn(value: string) {
    this._statusIn = value;
  }
  public resetStatusIn() {
    this._statusIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInInput() {
    return this._statusIn;
  }

  // trigger_id - computed: false, optional: true, required: false
  private _triggerId?: number; 
  public get triggerId() {
    return this.getNumberAttribute('trigger_id');
  }
  public set triggerId(value: number) {
    this._triggerId = value;
  }
  public resetTriggerId() {
    this._triggerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerIdInput() {
    return this._triggerId;
  }
}
export interface DataDbtcloudRunsRuns {
  /**
  * The cause of the run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#cause DataDbtcloudRuns#cause}
  */
  readonly cause?: string;
  /**
  * The branch of the commit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#git_branch DataDbtcloudRuns#git_branch}
  */
  readonly gitBranch: string;
  /**
  * The SHA of the commit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#git_sha DataDbtcloudRuns#git_sha}
  */
  readonly gitSha: string;
  /**
  * The ID of the pull request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#github_pull_request_id DataDbtcloudRuns#github_pull_request_id}
  */
  readonly githubPullRequestId: string;
  /**
  * The ID of the job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#job_id DataDbtcloudRuns#job_id}
  */
  readonly jobId: number;
  /**
  * The schema override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#schema_override DataDbtcloudRuns#schema_override}
  */
  readonly schemaOverride?: string;
}

export function dataDbtcloudRunsRunsToTerraform(struct?: DataDbtcloudRunsRuns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cause: cdktf.stringToTerraform(struct!.cause),
    git_branch: cdktf.stringToTerraform(struct!.gitBranch),
    git_sha: cdktf.stringToTerraform(struct!.gitSha),
    github_pull_request_id: cdktf.stringToTerraform(struct!.githubPullRequestId),
    job_id: cdktf.numberToTerraform(struct!.jobId),
    schema_override: cdktf.stringToTerraform(struct!.schemaOverride),
  }
}


export function dataDbtcloudRunsRunsToHclTerraform(struct?: DataDbtcloudRunsRuns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cause: {
      value: cdktf.stringToHclTerraform(struct!.cause),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_branch: {
      value: cdktf.stringToHclTerraform(struct!.gitBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_sha: {
      value: cdktf.stringToHclTerraform(struct!.gitSha),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_pull_request_id: {
      value: cdktf.stringToHclTerraform(struct!.githubPullRequestId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_id: {
      value: cdktf.numberToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema_override: {
      value: cdktf.stringToHclTerraform(struct!.schemaOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDbtcloudRunsRunsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDbtcloudRunsRuns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cause !== undefined) {
      hasAnyValues = true;
      internalValueResult.cause = this._cause;
    }
    if (this._gitBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitBranch = this._gitBranch;
    }
    if (this._gitSha !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSha = this._gitSha;
    }
    if (this._githubPullRequestId !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubPullRequestId = this._githubPullRequestId;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._schemaOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaOverride = this._schemaOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudRunsRuns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cause = undefined;
      this._gitBranch = undefined;
      this._gitSha = undefined;
      this._githubPullRequestId = undefined;
      this._jobId = undefined;
      this._schemaOverride = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cause = value.cause;
      this._gitBranch = value.gitBranch;
      this._gitSha = value.gitSha;
      this._githubPullRequestId = value.githubPullRequestId;
      this._jobId = value.jobId;
      this._schemaOverride = value.schemaOverride;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // cause - computed: true, optional: true, required: false
  private _cause?: string; 
  public get cause() {
    return this.getStringAttribute('cause');
  }
  public set cause(value: string) {
    this._cause = value;
  }
  public resetCause() {
    this._cause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get causeInput() {
    return this._cause;
  }

  // git_branch - computed: true, optional: false, required: true
  private _gitBranch?: string; 
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }
  public set gitBranch(value: string) {
    this._gitBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitBranchInput() {
    return this._gitBranch;
  }

  // git_sha - computed: true, optional: false, required: true
  private _gitSha?: string; 
  public get gitSha() {
    return this.getStringAttribute('git_sha');
  }
  public set gitSha(value: string) {
    this._gitSha = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitShaInput() {
    return this._gitSha;
  }

  // github_pull_request_id - computed: true, optional: false, required: true
  private _githubPullRequestId?: string; 
  public get githubPullRequestId() {
    return this.getStringAttribute('github_pull_request_id');
  }
  public set githubPullRequestId(value: string) {
    this._githubPullRequestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get githubPullRequestIdInput() {
    return this._githubPullRequestId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // job_id - computed: true, optional: false, required: true
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

  // schema_override - computed: true, optional: true, required: false
  private _schemaOverride?: string; 
  public get schemaOverride() {
    return this.getStringAttribute('schema_override');
  }
  public set schemaOverride(value: string) {
    this._schemaOverride = value;
  }
  public resetSchemaOverride() {
    this._schemaOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaOverrideInput() {
    return this._schemaOverride;
  }
}

export class DataDbtcloudRunsRunsList extends cdktf.ComplexList {
  public internalValue? : DataDbtcloudRunsRuns[] | cdktf.IResolvable

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
  public get(index: number): DataDbtcloudRunsRunsOutputReference {
    return new DataDbtcloudRunsRunsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs dbtcloud_runs}
*/
export class DataDbtcloudRuns extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_runs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudRuns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudRuns to import
  * @param importFromId The id of the existing DataDbtcloudRuns that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudRuns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_runs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/runs dbtcloud_runs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudRunsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudRunsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_runs',
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
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter = new DataDbtcloudRunsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataDbtcloudRunsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // runs - computed: true, optional: false, required: false
  private _runs = new DataDbtcloudRunsRunsList(this, "runs", true);
  public get runs() {
    return this._runs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataDbtcloudRunsFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataDbtcloudRunsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDbtcloudRunsFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
