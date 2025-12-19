// https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether rebuilds are allowed for this pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#allow_rebuilds Pipeline#allow_rebuilds}
  */
  readonly allowRebuilds?: boolean | cdktf.IResolvable;
  /**
  * Configure the pipeline to only build on this branch conditional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#branch_configuration Pipeline#branch_configuration}
  */
  readonly branchConfiguration?: string;
  /**
  * Whether to cancel builds when a new commit is pushed to a matching branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#cancel_intermediate_builds Pipeline#cancel_intermediate_builds}
  */
  readonly cancelIntermediateBuilds?: boolean | cdktf.IResolvable;
  /**
  * Filter the `cancel_intermediate_builds` setting based on this branch condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#cancel_intermediate_builds_branch_filter Pipeline#cancel_intermediate_builds_branch_filter}
  */
  readonly cancelIntermediateBuildsBranchFilter?: string;
  /**
  * Attach this pipeline to the given cluster GraphQL ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#cluster_id Pipeline#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * A color hex code to represent this pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#color Pipeline#color}
  */
  readonly color?: string;
  /**
  * Default branch of the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#default_branch Pipeline#default_branch}
  */
  readonly defaultBranch?: string;
  /**
  * The GraphQL ID of a team to initially assign to the pipeline. This is required by the Buildkite API when creating a new pipeline. The team assigned here will be given 'Manage Build and Read' access. Further team associations can be managed with the `buildkite_pipeline_team` resource after the pipeline is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#default_team_id Pipeline#default_team_id}
  */
  readonly defaultTeamId?: string;
  /**
  * Set pipeline wide timeout for command steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#default_timeout_in_minutes Pipeline#default_timeout_in_minutes}
  */
  readonly defaultTimeoutInMinutes?: number;
  /**
  * Description for the pipeline. Can include emoji 🙌.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#description Pipeline#description}
  */
  readonly description?: string;
  /**
  * An emoji that represents this pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#emoji Pipeline#emoji}
  */
  readonly emoji?: string;
  /**
  * Set pipeline wide maximum timeout for command steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#maximum_timeout_in_minutes Pipeline#maximum_timeout_in_minutes}
  */
  readonly maximumTimeoutInMinutes?: number;
  /**
  * Name to give the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name: string;
  /**
  * The GraphQL ID of the pipeline template applied to this pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#pipeline_template_id Pipeline#pipeline_template_id}
  */
  readonly pipelineTemplateId?: string;
  /**
  * Control settings depending on the VCS provider used in `repository`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#provider_settings Pipeline#provider_settings}
  */
  readonly providerSettings?: PipelineProviderSettings;
  /**
  * URL to the repository this pipeline is configured for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#repository Pipeline#repository}
  */
  readonly repository: string;
  /**
  * Whether to skip queued builds if a new commit is pushed to a matching branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#skip_intermediate_builds Pipeline#skip_intermediate_builds}
  */
  readonly skipIntermediateBuilds?: boolean | cdktf.IResolvable;
  /**
  * Filter the `skip_intermediate_builds` setting based on this branch condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#skip_intermediate_builds_branch_filter Pipeline#skip_intermediate_builds_branch_filter}
  */
  readonly skipIntermediateBuildsBranchFilter?: string;
  /**
  * A custom identifier for the pipeline. If provided, this slug will be used as the pipeline's URL path instead of automatically converting the pipeline name. If not provided, the slug will be [derived](https://buildkite.com/docs/apis/graphql/cookbooks/pipelines#create-a-pipeline-deriving-a-pipeline-slug-from-the-pipelines-name) from the pipeline `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#slug Pipeline#slug}
  */
  readonly slug?: string;
  /**
  * The YAML steps to configure for the pipeline. Can also accept the `steps` attribute from the [`buildkite_signed_pipeline_steps`](/docs/data-sources/signed_pipeline_steps) data source to enable a signed pipeline. Defaults to `buildkite-agent pipeline upload`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#steps Pipeline#steps}
  */
  readonly steps?: string;
  /**
  * Tags to attribute to the pipeline. Useful for searching by in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#tags Pipeline#tags}
  */
  readonly tags?: string[];
}
export interface PipelineProviderSettings {
  /**
  * Whether to create builds when branches are pushed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#build_branches Pipeline#build_branches}
  */
  readonly buildBranches?: boolean | cdktf.IResolvable;
  /**
  * Whether to create merge queue builds for a merge queue enabled GitHub repository with required status checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#build_merge_group_checks_requested Pipeline#build_merge_group_checks_requested}
  */
  readonly buildMergeGroupChecksRequested?: boolean | cdktf.IResolvable;
  /**
  * Whether to create builds for pull requests when its base branch changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#build_pull_request_base_branch_changed Pipeline#build_pull_request_base_branch_changed}
  */
  readonly buildPullRequestBaseBranchChanged?: boolean | cdktf.IResolvable;
  /**
  * Whether to create builds for pull requests from third-party forks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#build_pull_request_forks Pipeline#build_pull_request_forks}
  */
  readonly buildPullRequestForks?: boolean | cdktf.IResolvable;
  /**
  * Whether to create builds for pull requests when labels are added or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#build_pull_request_labels_changed Pipeline#build_pull_request_labels_changed}
  */
  readonly buildPullRequestLabelsChanged?: boolean | cdktf.IResolvable;
  /**
  * Whether to create a build when a pull request changes to "Ready for review".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#build_pull_request_ready_for_review Pipeline#build_pull_request_ready_for_review}
  */
  readonly buildPullRequestReadyForReview?: boolean | cdktf.IResolvable;
  /**
  * Whether to create builds for commits that are part of a pull request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#build_pull_requests Pipeline#build_pull_requests}
  */
  readonly buildPullRequests?: boolean | cdktf.IResolvable;
  /**
  * Whether to create builds when tags are pushed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#build_tags Pipeline#build_tags}
  */
  readonly buildTags?: boolean | cdktf.IResolvable;
  /**
  * Automatically cancel running builds for a branch if the branch is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#cancel_deleted_branch_builds Pipeline#cancel_deleted_branch_builds}
  */
  readonly cancelDeletedBranchBuilds?: boolean | cdktf.IResolvable;
  /**
  * Whether to cancel any running builds belonging to a removed merge group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#cancel_when_merge_group_destroyed Pipeline#cancel_when_merge_group_destroyed}
  */
  readonly cancelWhenMergeGroupDestroyed?: boolean | cdktf.IResolvable;
  /**
  * The condition to evaluate when deciding if a build should run. This is only valid when `trigger_mode` is `code`. More details available in [the documentation](https://buildkite.com/docs/pipelines/conditionals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#filter_condition Pipeline#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Whether to filter builds to only run when the condition in `filter_condition` is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#filter_enabled Pipeline#filter_enabled}
  */
  readonly filterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to prevent caching pull requests with the source branch matching the default branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#ignore_default_branch_pull_requests Pipeline#ignore_default_branch_pull_requests}
  */
  readonly ignoreDefaultBranchPullRequests?: boolean | cdktf.IResolvable;
  /**
  * Prefix branch names for third-party fork builds to ensure they don't trigger branch conditions. For example, the main branch from some-user will become some-user:main.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#prefix_pull_request_fork_branch_names Pipeline#prefix_pull_request_fork_branch_names}
  */
  readonly prefixPullRequestForkBranchNames?: boolean | cdktf.IResolvable;
  /**
  * The status to use for blocked builds. Pending can be used with [required status checks](https://help.github.com/en/articles/enabling-required-status-checks) to prevent merging pull requests with blocked builds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#publish_blocked_as_pending Pipeline#publish_blocked_as_pending}
  */
  readonly publishBlockedAsPending?: boolean | cdktf.IResolvable;
  /**
  * Whether to update the status of commits in Bitbucket, GitHub, or GitLab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#publish_commit_status Pipeline#publish_commit_status}
  */
  readonly publishCommitStatus?: boolean | cdktf.IResolvable;
  /**
  * Whether to create a separate status for each job in a build, allowing you to see the status of each job directly in Bitbucket or GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#publish_commit_status_per_step Pipeline#publish_commit_status_per_step}
  */
  readonly publishCommitStatusPerStep?: boolean | cdktf.IResolvable;
  /**
  * Filter pull requests builds by the branch filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#pull_request_branch_filter_configuration Pipeline#pull_request_branch_filter_configuration}
  */
  readonly pullRequestBranchFilterConfiguration?: string;
  /**
  * Filter pull request builds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#pull_request_branch_filter_enabled Pipeline#pull_request_branch_filter_enabled}
  */
  readonly pullRequestBranchFilterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to create a separate status for pull request builds, allowing you to require a passing pull request build in your [required status checks](https://help.github.com/en/articles/enabling-required-status-checks) in GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#separate_pull_request_statuses Pipeline#separate_pull_request_statuses}
  */
  readonly separatePullRequestStatuses?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip creating a new build if an existing build for the commit and branch already exists. This option is only valid if the pipeline uses a GitHub repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#skip_builds_for_existing_commits Pipeline#skip_builds_for_existing_commits}
  */
  readonly skipBuildsForExistingCommits?: boolean | cdktf.IResolvable;
  /**
  * Whether to skip creating a new build for a pull request if an existing build for the commit and branch already exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#skip_pull_request_builds_for_existing_commits Pipeline#skip_pull_request_builds_for_existing_commits}
  */
  readonly skipPullRequestBuildsForExistingCommits?: boolean | cdktf.IResolvable;
  /**
  * What type of event to trigger builds on. Must be one of:
  * 	- `code` will create builds when code is pushed to GitHub.
  * 	- `deployment` will create builds when a deployment is created in GitHub.
  * 	- `fork` will create builds when the GitHub repository is forked.
  * 	- `none` will not create any builds based on GitHub activity.
  * 
  * 	-> `trigger_mode` is only valid if the pipeline uses a GitHub repository.
  * 	-> If not set, the default value is `code` and other provider settings defaults are applied.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#trigger_mode Pipeline#trigger_mode}
  */
  readonly triggerMode?: string;
  /**
  * When enabled, agents performing a git diff to determine steps to upload based on [`if_changed`](https://buildkite.com/docs/pipelines/configure/step-types/command-step#agent-applied-attributes)comparisons will use the base commit that points to the previous merge group rather than the base branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#use_merge_group_base_commit_for_git_diff_base Pipeline#use_merge_group_base_commit_for_git_diff_base}
  */
  readonly useMergeGroupBaseCommitForGitDiffBase?: boolean | cdktf.IResolvable;
}

export function pipelineProviderSettingsToTerraform(struct?: PipelineProviderSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_branches: cdktf.booleanToTerraform(struct!.buildBranches),
    build_merge_group_checks_requested: cdktf.booleanToTerraform(struct!.buildMergeGroupChecksRequested),
    build_pull_request_base_branch_changed: cdktf.booleanToTerraform(struct!.buildPullRequestBaseBranchChanged),
    build_pull_request_forks: cdktf.booleanToTerraform(struct!.buildPullRequestForks),
    build_pull_request_labels_changed: cdktf.booleanToTerraform(struct!.buildPullRequestLabelsChanged),
    build_pull_request_ready_for_review: cdktf.booleanToTerraform(struct!.buildPullRequestReadyForReview),
    build_pull_requests: cdktf.booleanToTerraform(struct!.buildPullRequests),
    build_tags: cdktf.booleanToTerraform(struct!.buildTags),
    cancel_deleted_branch_builds: cdktf.booleanToTerraform(struct!.cancelDeletedBranchBuilds),
    cancel_when_merge_group_destroyed: cdktf.booleanToTerraform(struct!.cancelWhenMergeGroupDestroyed),
    filter_condition: cdktf.stringToTerraform(struct!.filterCondition),
    filter_enabled: cdktf.booleanToTerraform(struct!.filterEnabled),
    ignore_default_branch_pull_requests: cdktf.booleanToTerraform(struct!.ignoreDefaultBranchPullRequests),
    prefix_pull_request_fork_branch_names: cdktf.booleanToTerraform(struct!.prefixPullRequestForkBranchNames),
    publish_blocked_as_pending: cdktf.booleanToTerraform(struct!.publishBlockedAsPending),
    publish_commit_status: cdktf.booleanToTerraform(struct!.publishCommitStatus),
    publish_commit_status_per_step: cdktf.booleanToTerraform(struct!.publishCommitStatusPerStep),
    pull_request_branch_filter_configuration: cdktf.stringToTerraform(struct!.pullRequestBranchFilterConfiguration),
    pull_request_branch_filter_enabled: cdktf.booleanToTerraform(struct!.pullRequestBranchFilterEnabled),
    separate_pull_request_statuses: cdktf.booleanToTerraform(struct!.separatePullRequestStatuses),
    skip_builds_for_existing_commits: cdktf.booleanToTerraform(struct!.skipBuildsForExistingCommits),
    skip_pull_request_builds_for_existing_commits: cdktf.booleanToTerraform(struct!.skipPullRequestBuildsForExistingCommits),
    trigger_mode: cdktf.stringToTerraform(struct!.triggerMode),
    use_merge_group_base_commit_for_git_diff_base: cdktf.booleanToTerraform(struct!.useMergeGroupBaseCommitForGitDiffBase),
  }
}


export function pipelineProviderSettingsToHclTerraform(struct?: PipelineProviderSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_branches: {
      value: cdktf.booleanToHclTerraform(struct!.buildBranches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    build_merge_group_checks_requested: {
      value: cdktf.booleanToHclTerraform(struct!.buildMergeGroupChecksRequested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    build_pull_request_base_branch_changed: {
      value: cdktf.booleanToHclTerraform(struct!.buildPullRequestBaseBranchChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    build_pull_request_forks: {
      value: cdktf.booleanToHclTerraform(struct!.buildPullRequestForks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    build_pull_request_labels_changed: {
      value: cdktf.booleanToHclTerraform(struct!.buildPullRequestLabelsChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    build_pull_request_ready_for_review: {
      value: cdktf.booleanToHclTerraform(struct!.buildPullRequestReadyForReview),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    build_pull_requests: {
      value: cdktf.booleanToHclTerraform(struct!.buildPullRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    build_tags: {
      value: cdktf.booleanToHclTerraform(struct!.buildTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cancel_deleted_branch_builds: {
      value: cdktf.booleanToHclTerraform(struct!.cancelDeletedBranchBuilds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cancel_when_merge_group_destroyed: {
      value: cdktf.booleanToHclTerraform(struct!.cancelWhenMergeGroupDestroyed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_condition: {
      value: cdktf.stringToHclTerraform(struct!.filterCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.filterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_default_branch_pull_requests: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDefaultBranchPullRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_pull_request_fork_branch_names: {
      value: cdktf.booleanToHclTerraform(struct!.prefixPullRequestForkBranchNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    publish_blocked_as_pending: {
      value: cdktf.booleanToHclTerraform(struct!.publishBlockedAsPending),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    publish_commit_status: {
      value: cdktf.booleanToHclTerraform(struct!.publishCommitStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    publish_commit_status_per_step: {
      value: cdktf.booleanToHclTerraform(struct!.publishCommitStatusPerStep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pull_request_branch_filter_configuration: {
      value: cdktf.stringToHclTerraform(struct!.pullRequestBranchFilterConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request_branch_filter_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pullRequestBranchFilterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    separate_pull_request_statuses: {
      value: cdktf.booleanToHclTerraform(struct!.separatePullRequestStatuses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_builds_for_existing_commits: {
      value: cdktf.booleanToHclTerraform(struct!.skipBuildsForExistingCommits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_pull_request_builds_for_existing_commits: {
      value: cdktf.booleanToHclTerraform(struct!.skipPullRequestBuildsForExistingCommits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trigger_mode: {
      value: cdktf.stringToHclTerraform(struct!.triggerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_merge_group_base_commit_for_git_diff_base: {
      value: cdktf.booleanToHclTerraform(struct!.useMergeGroupBaseCommitForGitDiffBase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineProviderSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineProviderSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildBranches = this._buildBranches;
    }
    if (this._buildMergeGroupChecksRequested !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildMergeGroupChecksRequested = this._buildMergeGroupChecksRequested;
    }
    if (this._buildPullRequestBaseBranchChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildPullRequestBaseBranchChanged = this._buildPullRequestBaseBranchChanged;
    }
    if (this._buildPullRequestForks !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildPullRequestForks = this._buildPullRequestForks;
    }
    if (this._buildPullRequestLabelsChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildPullRequestLabelsChanged = this._buildPullRequestLabelsChanged;
    }
    if (this._buildPullRequestReadyForReview !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildPullRequestReadyForReview = this._buildPullRequestReadyForReview;
    }
    if (this._buildPullRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildPullRequests = this._buildPullRequests;
    }
    if (this._buildTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildTags = this._buildTags;
    }
    if (this._cancelDeletedBranchBuilds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelDeletedBranchBuilds = this._cancelDeletedBranchBuilds;
    }
    if (this._cancelWhenMergeGroupDestroyed !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelWhenMergeGroupDestroyed = this._cancelWhenMergeGroupDestroyed;
    }
    if (this._filterCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCondition = this._filterCondition;
    }
    if (this._filterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEnabled = this._filterEnabled;
    }
    if (this._ignoreDefaultBranchPullRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDefaultBranchPullRequests = this._ignoreDefaultBranchPullRequests;
    }
    if (this._prefixPullRequestForkBranchNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPullRequestForkBranchNames = this._prefixPullRequestForkBranchNames;
    }
    if (this._publishBlockedAsPending !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishBlockedAsPending = this._publishBlockedAsPending;
    }
    if (this._publishCommitStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishCommitStatus = this._publishCommitStatus;
    }
    if (this._publishCommitStatusPerStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishCommitStatusPerStep = this._publishCommitStatusPerStep;
    }
    if (this._pullRequestBranchFilterConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestBranchFilterConfiguration = this._pullRequestBranchFilterConfiguration;
    }
    if (this._pullRequestBranchFilterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestBranchFilterEnabled = this._pullRequestBranchFilterEnabled;
    }
    if (this._separatePullRequestStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.separatePullRequestStatuses = this._separatePullRequestStatuses;
    }
    if (this._skipBuildsForExistingCommits !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipBuildsForExistingCommits = this._skipBuildsForExistingCommits;
    }
    if (this._skipPullRequestBuildsForExistingCommits !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipPullRequestBuildsForExistingCommits = this._skipPullRequestBuildsForExistingCommits;
    }
    if (this._triggerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerMode = this._triggerMode;
    }
    if (this._useMergeGroupBaseCommitForGitDiffBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMergeGroupBaseCommitForGitDiffBase = this._useMergeGroupBaseCommitForGitDiffBase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineProviderSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildBranches = undefined;
      this._buildMergeGroupChecksRequested = undefined;
      this._buildPullRequestBaseBranchChanged = undefined;
      this._buildPullRequestForks = undefined;
      this._buildPullRequestLabelsChanged = undefined;
      this._buildPullRequestReadyForReview = undefined;
      this._buildPullRequests = undefined;
      this._buildTags = undefined;
      this._cancelDeletedBranchBuilds = undefined;
      this._cancelWhenMergeGroupDestroyed = undefined;
      this._filterCondition = undefined;
      this._filterEnabled = undefined;
      this._ignoreDefaultBranchPullRequests = undefined;
      this._prefixPullRequestForkBranchNames = undefined;
      this._publishBlockedAsPending = undefined;
      this._publishCommitStatus = undefined;
      this._publishCommitStatusPerStep = undefined;
      this._pullRequestBranchFilterConfiguration = undefined;
      this._pullRequestBranchFilterEnabled = undefined;
      this._separatePullRequestStatuses = undefined;
      this._skipBuildsForExistingCommits = undefined;
      this._skipPullRequestBuildsForExistingCommits = undefined;
      this._triggerMode = undefined;
      this._useMergeGroupBaseCommitForGitDiffBase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildBranches = value.buildBranches;
      this._buildMergeGroupChecksRequested = value.buildMergeGroupChecksRequested;
      this._buildPullRequestBaseBranchChanged = value.buildPullRequestBaseBranchChanged;
      this._buildPullRequestForks = value.buildPullRequestForks;
      this._buildPullRequestLabelsChanged = value.buildPullRequestLabelsChanged;
      this._buildPullRequestReadyForReview = value.buildPullRequestReadyForReview;
      this._buildPullRequests = value.buildPullRequests;
      this._buildTags = value.buildTags;
      this._cancelDeletedBranchBuilds = value.cancelDeletedBranchBuilds;
      this._cancelWhenMergeGroupDestroyed = value.cancelWhenMergeGroupDestroyed;
      this._filterCondition = value.filterCondition;
      this._filterEnabled = value.filterEnabled;
      this._ignoreDefaultBranchPullRequests = value.ignoreDefaultBranchPullRequests;
      this._prefixPullRequestForkBranchNames = value.prefixPullRequestForkBranchNames;
      this._publishBlockedAsPending = value.publishBlockedAsPending;
      this._publishCommitStatus = value.publishCommitStatus;
      this._publishCommitStatusPerStep = value.publishCommitStatusPerStep;
      this._pullRequestBranchFilterConfiguration = value.pullRequestBranchFilterConfiguration;
      this._pullRequestBranchFilterEnabled = value.pullRequestBranchFilterEnabled;
      this._separatePullRequestStatuses = value.separatePullRequestStatuses;
      this._skipBuildsForExistingCommits = value.skipBuildsForExistingCommits;
      this._skipPullRequestBuildsForExistingCommits = value.skipPullRequestBuildsForExistingCommits;
      this._triggerMode = value.triggerMode;
      this._useMergeGroupBaseCommitForGitDiffBase = value.useMergeGroupBaseCommitForGitDiffBase;
    }
  }

  // build_branches - computed: true, optional: true, required: false
  private _buildBranches?: boolean | cdktf.IResolvable; 
  public get buildBranches() {
    return this.getBooleanAttribute('build_branches');
  }
  public set buildBranches(value: boolean | cdktf.IResolvable) {
    this._buildBranches = value;
  }
  public resetBuildBranches() {
    this._buildBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildBranchesInput() {
    return this._buildBranches;
  }

  // build_merge_group_checks_requested - computed: true, optional: true, required: false
  private _buildMergeGroupChecksRequested?: boolean | cdktf.IResolvable; 
  public get buildMergeGroupChecksRequested() {
    return this.getBooleanAttribute('build_merge_group_checks_requested');
  }
  public set buildMergeGroupChecksRequested(value: boolean | cdktf.IResolvable) {
    this._buildMergeGroupChecksRequested = value;
  }
  public resetBuildMergeGroupChecksRequested() {
    this._buildMergeGroupChecksRequested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildMergeGroupChecksRequestedInput() {
    return this._buildMergeGroupChecksRequested;
  }

  // build_pull_request_base_branch_changed - computed: true, optional: true, required: false
  private _buildPullRequestBaseBranchChanged?: boolean | cdktf.IResolvable; 
  public get buildPullRequestBaseBranchChanged() {
    return this.getBooleanAttribute('build_pull_request_base_branch_changed');
  }
  public set buildPullRequestBaseBranchChanged(value: boolean | cdktf.IResolvable) {
    this._buildPullRequestBaseBranchChanged = value;
  }
  public resetBuildPullRequestBaseBranchChanged() {
    this._buildPullRequestBaseBranchChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildPullRequestBaseBranchChangedInput() {
    return this._buildPullRequestBaseBranchChanged;
  }

  // build_pull_request_forks - computed: true, optional: true, required: false
  private _buildPullRequestForks?: boolean | cdktf.IResolvable; 
  public get buildPullRequestForks() {
    return this.getBooleanAttribute('build_pull_request_forks');
  }
  public set buildPullRequestForks(value: boolean | cdktf.IResolvable) {
    this._buildPullRequestForks = value;
  }
  public resetBuildPullRequestForks() {
    this._buildPullRequestForks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildPullRequestForksInput() {
    return this._buildPullRequestForks;
  }

  // build_pull_request_labels_changed - computed: true, optional: true, required: false
  private _buildPullRequestLabelsChanged?: boolean | cdktf.IResolvable; 
  public get buildPullRequestLabelsChanged() {
    return this.getBooleanAttribute('build_pull_request_labels_changed');
  }
  public set buildPullRequestLabelsChanged(value: boolean | cdktf.IResolvable) {
    this._buildPullRequestLabelsChanged = value;
  }
  public resetBuildPullRequestLabelsChanged() {
    this._buildPullRequestLabelsChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildPullRequestLabelsChangedInput() {
    return this._buildPullRequestLabelsChanged;
  }

  // build_pull_request_ready_for_review - computed: true, optional: true, required: false
  private _buildPullRequestReadyForReview?: boolean | cdktf.IResolvable; 
  public get buildPullRequestReadyForReview() {
    return this.getBooleanAttribute('build_pull_request_ready_for_review');
  }
  public set buildPullRequestReadyForReview(value: boolean | cdktf.IResolvable) {
    this._buildPullRequestReadyForReview = value;
  }
  public resetBuildPullRequestReadyForReview() {
    this._buildPullRequestReadyForReview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildPullRequestReadyForReviewInput() {
    return this._buildPullRequestReadyForReview;
  }

  // build_pull_requests - computed: true, optional: true, required: false
  private _buildPullRequests?: boolean | cdktf.IResolvable; 
  public get buildPullRequests() {
    return this.getBooleanAttribute('build_pull_requests');
  }
  public set buildPullRequests(value: boolean | cdktf.IResolvable) {
    this._buildPullRequests = value;
  }
  public resetBuildPullRequests() {
    this._buildPullRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildPullRequestsInput() {
    return this._buildPullRequests;
  }

  // build_tags - computed: true, optional: true, required: false
  private _buildTags?: boolean | cdktf.IResolvable; 
  public get buildTags() {
    return this.getBooleanAttribute('build_tags');
  }
  public set buildTags(value: boolean | cdktf.IResolvable) {
    this._buildTags = value;
  }
  public resetBuildTags() {
    this._buildTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTagsInput() {
    return this._buildTags;
  }

  // cancel_deleted_branch_builds - computed: true, optional: true, required: false
  private _cancelDeletedBranchBuilds?: boolean | cdktf.IResolvable; 
  public get cancelDeletedBranchBuilds() {
    return this.getBooleanAttribute('cancel_deleted_branch_builds');
  }
  public set cancelDeletedBranchBuilds(value: boolean | cdktf.IResolvable) {
    this._cancelDeletedBranchBuilds = value;
  }
  public resetCancelDeletedBranchBuilds() {
    this._cancelDeletedBranchBuilds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelDeletedBranchBuildsInput() {
    return this._cancelDeletedBranchBuilds;
  }

  // cancel_when_merge_group_destroyed - computed: true, optional: true, required: false
  private _cancelWhenMergeGroupDestroyed?: boolean | cdktf.IResolvable; 
  public get cancelWhenMergeGroupDestroyed() {
    return this.getBooleanAttribute('cancel_when_merge_group_destroyed');
  }
  public set cancelWhenMergeGroupDestroyed(value: boolean | cdktf.IResolvable) {
    this._cancelWhenMergeGroupDestroyed = value;
  }
  public resetCancelWhenMergeGroupDestroyed() {
    this._cancelWhenMergeGroupDestroyed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelWhenMergeGroupDestroyedInput() {
    return this._cancelWhenMergeGroupDestroyed;
  }

  // filter_condition - computed: true, optional: true, required: false
  private _filterCondition?: string; 
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }
  public set filterCondition(value: string) {
    this._filterCondition = value;
  }
  public resetFilterCondition() {
    this._filterCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConditionInput() {
    return this._filterCondition;
  }

  // filter_enabled - computed: true, optional: true, required: false
  private _filterEnabled?: boolean | cdktf.IResolvable; 
  public get filterEnabled() {
    return this.getBooleanAttribute('filter_enabled');
  }
  public set filterEnabled(value: boolean | cdktf.IResolvable) {
    this._filterEnabled = value;
  }
  public resetFilterEnabled() {
    this._filterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEnabledInput() {
    return this._filterEnabled;
  }

  // ignore_default_branch_pull_requests - computed: true, optional: true, required: false
  private _ignoreDefaultBranchPullRequests?: boolean | cdktf.IResolvable; 
  public get ignoreDefaultBranchPullRequests() {
    return this.getBooleanAttribute('ignore_default_branch_pull_requests');
  }
  public set ignoreDefaultBranchPullRequests(value: boolean | cdktf.IResolvable) {
    this._ignoreDefaultBranchPullRequests = value;
  }
  public resetIgnoreDefaultBranchPullRequests() {
    this._ignoreDefaultBranchPullRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDefaultBranchPullRequestsInput() {
    return this._ignoreDefaultBranchPullRequests;
  }

  // prefix_pull_request_fork_branch_names - computed: true, optional: true, required: false
  private _prefixPullRequestForkBranchNames?: boolean | cdktf.IResolvable; 
  public get prefixPullRequestForkBranchNames() {
    return this.getBooleanAttribute('prefix_pull_request_fork_branch_names');
  }
  public set prefixPullRequestForkBranchNames(value: boolean | cdktf.IResolvable) {
    this._prefixPullRequestForkBranchNames = value;
  }
  public resetPrefixPullRequestForkBranchNames() {
    this._prefixPullRequestForkBranchNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPullRequestForkBranchNamesInput() {
    return this._prefixPullRequestForkBranchNames;
  }

  // publish_blocked_as_pending - computed: true, optional: true, required: false
  private _publishBlockedAsPending?: boolean | cdktf.IResolvable; 
  public get publishBlockedAsPending() {
    return this.getBooleanAttribute('publish_blocked_as_pending');
  }
  public set publishBlockedAsPending(value: boolean | cdktf.IResolvable) {
    this._publishBlockedAsPending = value;
  }
  public resetPublishBlockedAsPending() {
    this._publishBlockedAsPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishBlockedAsPendingInput() {
    return this._publishBlockedAsPending;
  }

  // publish_commit_status - computed: true, optional: true, required: false
  private _publishCommitStatus?: boolean | cdktf.IResolvable; 
  public get publishCommitStatus() {
    return this.getBooleanAttribute('publish_commit_status');
  }
  public set publishCommitStatus(value: boolean | cdktf.IResolvable) {
    this._publishCommitStatus = value;
  }
  public resetPublishCommitStatus() {
    this._publishCommitStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCommitStatusInput() {
    return this._publishCommitStatus;
  }

  // publish_commit_status_per_step - computed: true, optional: true, required: false
  private _publishCommitStatusPerStep?: boolean | cdktf.IResolvable; 
  public get publishCommitStatusPerStep() {
    return this.getBooleanAttribute('publish_commit_status_per_step');
  }
  public set publishCommitStatusPerStep(value: boolean | cdktf.IResolvable) {
    this._publishCommitStatusPerStep = value;
  }
  public resetPublishCommitStatusPerStep() {
    this._publishCommitStatusPerStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCommitStatusPerStepInput() {
    return this._publishCommitStatusPerStep;
  }

  // pull_request_branch_filter_configuration - computed: true, optional: true, required: false
  private _pullRequestBranchFilterConfiguration?: string; 
  public get pullRequestBranchFilterConfiguration() {
    return this.getStringAttribute('pull_request_branch_filter_configuration');
  }
  public set pullRequestBranchFilterConfiguration(value: string) {
    this._pullRequestBranchFilterConfiguration = value;
  }
  public resetPullRequestBranchFilterConfiguration() {
    this._pullRequestBranchFilterConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestBranchFilterConfigurationInput() {
    return this._pullRequestBranchFilterConfiguration;
  }

  // pull_request_branch_filter_enabled - computed: true, optional: true, required: false
  private _pullRequestBranchFilterEnabled?: boolean | cdktf.IResolvable; 
  public get pullRequestBranchFilterEnabled() {
    return this.getBooleanAttribute('pull_request_branch_filter_enabled');
  }
  public set pullRequestBranchFilterEnabled(value: boolean | cdktf.IResolvable) {
    this._pullRequestBranchFilterEnabled = value;
  }
  public resetPullRequestBranchFilterEnabled() {
    this._pullRequestBranchFilterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestBranchFilterEnabledInput() {
    return this._pullRequestBranchFilterEnabled;
  }

  // separate_pull_request_statuses - computed: true, optional: true, required: false
  private _separatePullRequestStatuses?: boolean | cdktf.IResolvable; 
  public get separatePullRequestStatuses() {
    return this.getBooleanAttribute('separate_pull_request_statuses');
  }
  public set separatePullRequestStatuses(value: boolean | cdktf.IResolvable) {
    this._separatePullRequestStatuses = value;
  }
  public resetSeparatePullRequestStatuses() {
    this._separatePullRequestStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatePullRequestStatusesInput() {
    return this._separatePullRequestStatuses;
  }

  // skip_builds_for_existing_commits - computed: true, optional: true, required: false
  private _skipBuildsForExistingCommits?: boolean | cdktf.IResolvable; 
  public get skipBuildsForExistingCommits() {
    return this.getBooleanAttribute('skip_builds_for_existing_commits');
  }
  public set skipBuildsForExistingCommits(value: boolean | cdktf.IResolvable) {
    this._skipBuildsForExistingCommits = value;
  }
  public resetSkipBuildsForExistingCommits() {
    this._skipBuildsForExistingCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipBuildsForExistingCommitsInput() {
    return this._skipBuildsForExistingCommits;
  }

  // skip_pull_request_builds_for_existing_commits - computed: true, optional: true, required: false
  private _skipPullRequestBuildsForExistingCommits?: boolean | cdktf.IResolvable; 
  public get skipPullRequestBuildsForExistingCommits() {
    return this.getBooleanAttribute('skip_pull_request_builds_for_existing_commits');
  }
  public set skipPullRequestBuildsForExistingCommits(value: boolean | cdktf.IResolvable) {
    this._skipPullRequestBuildsForExistingCommits = value;
  }
  public resetSkipPullRequestBuildsForExistingCommits() {
    this._skipPullRequestBuildsForExistingCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipPullRequestBuildsForExistingCommitsInput() {
    return this._skipPullRequestBuildsForExistingCommits;
  }

  // trigger_mode - computed: true, optional: true, required: false
  private _triggerMode?: string; 
  public get triggerMode() {
    return this.getStringAttribute('trigger_mode');
  }
  public set triggerMode(value: string) {
    this._triggerMode = value;
  }
  public resetTriggerMode() {
    this._triggerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerModeInput() {
    return this._triggerMode;
  }

  // use_merge_group_base_commit_for_git_diff_base - computed: true, optional: true, required: false
  private _useMergeGroupBaseCommitForGitDiffBase?: boolean | cdktf.IResolvable; 
  public get useMergeGroupBaseCommitForGitDiffBase() {
    return this.getBooleanAttribute('use_merge_group_base_commit_for_git_diff_base');
  }
  public set useMergeGroupBaseCommitForGitDiffBase(value: boolean | cdktf.IResolvable) {
    this._useMergeGroupBaseCommitForGitDiffBase = value;
  }
  public resetUseMergeGroupBaseCommitForGitDiffBase() {
    this._useMergeGroupBaseCommitForGitDiffBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMergeGroupBaseCommitForGitDiffBaseInput() {
    return this._useMergeGroupBaseCommitForGitDiffBase;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline buildkite_pipeline}
*/
export class Pipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pipeline to import
  * @param importFromId The id of the existing Pipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/pipeline buildkite_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.28.0',
        providerVersionConstraint: '1.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowRebuilds = config.allowRebuilds;
    this._branchConfiguration = config.branchConfiguration;
    this._cancelIntermediateBuilds = config.cancelIntermediateBuilds;
    this._cancelIntermediateBuildsBranchFilter = config.cancelIntermediateBuildsBranchFilter;
    this._clusterId = config.clusterId;
    this._color = config.color;
    this._defaultBranch = config.defaultBranch;
    this._defaultTeamId = config.defaultTeamId;
    this._defaultTimeoutInMinutes = config.defaultTimeoutInMinutes;
    this._description = config.description;
    this._emoji = config.emoji;
    this._maximumTimeoutInMinutes = config.maximumTimeoutInMinutes;
    this._name = config.name;
    this._pipelineTemplateId = config.pipelineTemplateId;
    this._providerSettings.internalValue = config.providerSettings;
    this._repository = config.repository;
    this._skipIntermediateBuilds = config.skipIntermediateBuilds;
    this._skipIntermediateBuildsBranchFilter = config.skipIntermediateBuildsBranchFilter;
    this._slug = config.slug;
    this._steps = config.steps;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_rebuilds - computed: true, optional: true, required: false
  private _allowRebuilds?: boolean | cdktf.IResolvable; 
  public get allowRebuilds() {
    return this.getBooleanAttribute('allow_rebuilds');
  }
  public set allowRebuilds(value: boolean | cdktf.IResolvable) {
    this._allowRebuilds = value;
  }
  public resetAllowRebuilds() {
    this._allowRebuilds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRebuildsInput() {
    return this._allowRebuilds;
  }

  // badge_url - computed: true, optional: false, required: false
  public get badgeUrl() {
    return this.getStringAttribute('badge_url');
  }

  // branch_configuration - computed: false, optional: true, required: false
  private _branchConfiguration?: string; 
  public get branchConfiguration() {
    return this.getStringAttribute('branch_configuration');
  }
  public set branchConfiguration(value: string) {
    this._branchConfiguration = value;
  }
  public resetBranchConfiguration() {
    this._branchConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchConfigurationInput() {
    return this._branchConfiguration;
  }

  // cancel_intermediate_builds - computed: true, optional: true, required: false
  private _cancelIntermediateBuilds?: boolean | cdktf.IResolvable; 
  public get cancelIntermediateBuilds() {
    return this.getBooleanAttribute('cancel_intermediate_builds');
  }
  public set cancelIntermediateBuilds(value: boolean | cdktf.IResolvable) {
    this._cancelIntermediateBuilds = value;
  }
  public resetCancelIntermediateBuilds() {
    this._cancelIntermediateBuilds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelIntermediateBuildsInput() {
    return this._cancelIntermediateBuilds;
  }

  // cancel_intermediate_builds_branch_filter - computed: true, optional: true, required: false
  private _cancelIntermediateBuildsBranchFilter?: string; 
  public get cancelIntermediateBuildsBranchFilter() {
    return this.getStringAttribute('cancel_intermediate_builds_branch_filter');
  }
  public set cancelIntermediateBuildsBranchFilter(value: string) {
    this._cancelIntermediateBuildsBranchFilter = value;
  }
  public resetCancelIntermediateBuildsBranchFilter() {
    this._cancelIntermediateBuildsBranchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelIntermediateBuildsBranchFilterInput() {
    return this._cancelIntermediateBuildsBranchFilter;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // default_branch - computed: true, optional: true, required: false
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // default_team_id - computed: false, optional: true, required: false
  private _defaultTeamId?: string; 
  public get defaultTeamId() {
    return this.getStringAttribute('default_team_id');
  }
  public set defaultTeamId(value: string) {
    this._defaultTeamId = value;
  }
  public resetDefaultTeamId() {
    this._defaultTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTeamIdInput() {
    return this._defaultTeamId;
  }

  // default_timeout_in_minutes - computed: true, optional: true, required: false
  private _defaultTimeoutInMinutes?: number; 
  public get defaultTimeoutInMinutes() {
    return this.getNumberAttribute('default_timeout_in_minutes');
  }
  public set defaultTimeoutInMinutes(value: number) {
    this._defaultTimeoutInMinutes = value;
  }
  public resetDefaultTimeoutInMinutes() {
    this._defaultTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeoutInMinutesInput() {
    return this._defaultTimeoutInMinutes;
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

  // emoji - computed: false, optional: true, required: false
  private _emoji?: string; 
  public get emoji() {
    return this.getStringAttribute('emoji');
  }
  public set emoji(value: string) {
    this._emoji = value;
  }
  public resetEmoji() {
    this._emoji = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emojiInput() {
    return this._emoji;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum_timeout_in_minutes - computed: true, optional: true, required: false
  private _maximumTimeoutInMinutes?: number; 
  public get maximumTimeoutInMinutes() {
    return this.getNumberAttribute('maximum_timeout_in_minutes');
  }
  public set maximumTimeoutInMinutes(value: number) {
    this._maximumTimeoutInMinutes = value;
  }
  public resetMaximumTimeoutInMinutes() {
    this._maximumTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTimeoutInMinutesInput() {
    return this._maximumTimeoutInMinutes;
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

  // pipeline_template_id - computed: false, optional: true, required: false
  private _pipelineTemplateId?: string; 
  public get pipelineTemplateId() {
    return this.getStringAttribute('pipeline_template_id');
  }
  public set pipelineTemplateId(value: string) {
    this._pipelineTemplateId = value;
  }
  public resetPipelineTemplateId() {
    this._pipelineTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTemplateIdInput() {
    return this._pipelineTemplateId;
  }

  // provider_settings - computed: false, optional: true, required: false
  private _providerSettings = new PipelineProviderSettingsOutputReference(this, "provider_settings");
  public get providerSettings() {
    return this._providerSettings;
  }
  public putProviderSettings(value: PipelineProviderSettings) {
    this._providerSettings.internalValue = value;
  }
  public resetProviderSettings() {
    this._providerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerSettingsInput() {
    return this._providerSettings.internalValue;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // skip_intermediate_builds - computed: true, optional: true, required: false
  private _skipIntermediateBuilds?: boolean | cdktf.IResolvable; 
  public get skipIntermediateBuilds() {
    return this.getBooleanAttribute('skip_intermediate_builds');
  }
  public set skipIntermediateBuilds(value: boolean | cdktf.IResolvable) {
    this._skipIntermediateBuilds = value;
  }
  public resetSkipIntermediateBuilds() {
    this._skipIntermediateBuilds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipIntermediateBuildsInput() {
    return this._skipIntermediateBuilds;
  }

  // skip_intermediate_builds_branch_filter - computed: true, optional: true, required: false
  private _skipIntermediateBuildsBranchFilter?: string; 
  public get skipIntermediateBuildsBranchFilter() {
    return this.getStringAttribute('skip_intermediate_builds_branch_filter');
  }
  public set skipIntermediateBuildsBranchFilter(value: string) {
    this._skipIntermediateBuildsBranchFilter = value;
  }
  public resetSkipIntermediateBuildsBranchFilter() {
    this._skipIntermediateBuildsBranchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipIntermediateBuildsBranchFilterInput() {
    return this._skipIntermediateBuildsBranchFilter;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // steps - computed: true, optional: true, required: false
  private _steps?: string; 
  public get steps() {
    return this.getStringAttribute('steps');
  }
  public set steps(value: string) {
    this._steps = value;
  }
  public resetSteps() {
    this._steps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps;
  }

  // tags - computed: true, optional: true, required: false
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_rebuilds: cdktf.booleanToTerraform(this._allowRebuilds),
      branch_configuration: cdktf.stringToTerraform(this._branchConfiguration),
      cancel_intermediate_builds: cdktf.booleanToTerraform(this._cancelIntermediateBuilds),
      cancel_intermediate_builds_branch_filter: cdktf.stringToTerraform(this._cancelIntermediateBuildsBranchFilter),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      color: cdktf.stringToTerraform(this._color),
      default_branch: cdktf.stringToTerraform(this._defaultBranch),
      default_team_id: cdktf.stringToTerraform(this._defaultTeamId),
      default_timeout_in_minutes: cdktf.numberToTerraform(this._defaultTimeoutInMinutes),
      description: cdktf.stringToTerraform(this._description),
      emoji: cdktf.stringToTerraform(this._emoji),
      maximum_timeout_in_minutes: cdktf.numberToTerraform(this._maximumTimeoutInMinutes),
      name: cdktf.stringToTerraform(this._name),
      pipeline_template_id: cdktf.stringToTerraform(this._pipelineTemplateId),
      provider_settings: pipelineProviderSettingsToTerraform(this._providerSettings.internalValue),
      repository: cdktf.stringToTerraform(this._repository),
      skip_intermediate_builds: cdktf.booleanToTerraform(this._skipIntermediateBuilds),
      skip_intermediate_builds_branch_filter: cdktf.stringToTerraform(this._skipIntermediateBuildsBranchFilter),
      slug: cdktf.stringToTerraform(this._slug),
      steps: cdktf.stringToTerraform(this._steps),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_rebuilds: {
        value: cdktf.booleanToHclTerraform(this._allowRebuilds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      branch_configuration: {
        value: cdktf.stringToHclTerraform(this._branchConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cancel_intermediate_builds: {
        value: cdktf.booleanToHclTerraform(this._cancelIntermediateBuilds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cancel_intermediate_builds_branch_filter: {
        value: cdktf.stringToHclTerraform(this._cancelIntermediateBuildsBranchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_branch: {
        value: cdktf.stringToHclTerraform(this._defaultBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_team_id: {
        value: cdktf.stringToHclTerraform(this._defaultTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_timeout_in_minutes: {
        value: cdktf.numberToHclTerraform(this._defaultTimeoutInMinutes),
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
      emoji: {
        value: cdktf.stringToHclTerraform(this._emoji),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_timeout_in_minutes: {
        value: cdktf.numberToHclTerraform(this._maximumTimeoutInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_template_id: {
        value: cdktf.stringToHclTerraform(this._pipelineTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_settings: {
        value: pipelineProviderSettingsToHclTerraform(this._providerSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineProviderSettings",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_intermediate_builds: {
        value: cdktf.booleanToHclTerraform(this._skipIntermediateBuilds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_intermediate_builds_branch_filter: {
        value: cdktf.stringToHclTerraform(this._skipIntermediateBuildsBranchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      steps: {
        value: cdktf.stringToHclTerraform(this._steps),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
