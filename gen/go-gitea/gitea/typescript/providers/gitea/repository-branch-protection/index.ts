// https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryBranchProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only reviews from allowlisted teams will count to the required
  * 								approvals. Without approval allowlist, reviews from anyone with
  * 								write access count to the required approvals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#approval_whitelist_teams RepositoryBranchProtection#approval_whitelist_teams}
  */
  readonly approvalWhitelistTeams?: string[];
  /**
  * Only reviews from allowlisted users will count to the required
  * 								approvals. Without approval allowlist, reviews from anyone with
  * 								write access count to the required approvals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#approval_whitelist_users RepositoryBranchProtection#approval_whitelist_users}
  */
  readonly approvalWhitelistUsers?: string[];
  /**
  * Merging will not be possible when it has official
  * 								review requests, even if there are enough approvals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#block_merge_on_official_review_requests RepositoryBranchProtection#block_merge_on_official_review_requests}
  */
  readonly blockMergeOnOfficialReviewRequests?: boolean | cdktf.IResolvable;
  /**
  * Merging will not be possible when head branch is behind base branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#block_merge_on_outdated_branch RepositoryBranchProtection#block_merge_on_outdated_branch}
  */
  readonly blockMergeOnOutdatedBranch?: boolean | cdktf.IResolvable;
  /**
  * Merging will not be possible when changes are
  * 								requested by official reviewers, even if there are enough
  * 								approvals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#block_merge_on_rejected_reviews RepositoryBranchProtection#block_merge_on_rejected_reviews}
  */
  readonly blockMergeOnRejectedReviews?: boolean | cdktf.IResolvable;
  /**
  * When new commits that change the content of the pull request
  * 								are pushed to the branch, old approvals will be dismissed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#dismiss_stale_approvals RepositoryBranchProtection#dismiss_stale_approvals}
  */
  readonly dismissStaleApprovals?: boolean | cdktf.IResolvable;
  /**
  * Anyone with write access will be allowed to push to this branch
  * 								(but not force push), add a whitelist users or teams to limit
  * 								access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#enable_push RepositoryBranchProtection#enable_push}
  */
  readonly enablePush?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#id RepositoryBranchProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allow only allowlisted teams to merge pull requests into this branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#merge_whitelist_teams RepositoryBranchProtection#merge_whitelist_teams}
  */
  readonly mergeWhitelistTeams?: string[];
  /**
  * Allow only allowlisted users to merge pull requests into this branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#merge_whitelist_users RepositoryBranchProtection#merge_whitelist_users}
  */
  readonly mergeWhitelistUsers?: string[];
  /**
  * Repository name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#name RepositoryBranchProtection#name}
  */
  readonly name: string;
  /**
  * Protected file patterns (separated using semicolon ';')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#protected_file_patterns RepositoryBranchProtection#protected_file_patterns}
  */
  readonly protectedFilePatterns?: string;
  /**
  * Allow deploy keys with write access to push. Requires enable_push to be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#push_whitelist_deploy_keys RepositoryBranchProtection#push_whitelist_deploy_keys}
  */
  readonly pushWhitelistDeployKeys?: boolean | cdktf.IResolvable;
  /**
  * Allowlisted teams for pushing. Requires enable_push to be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#push_whitelist_teams RepositoryBranchProtection#push_whitelist_teams}
  */
  readonly pushWhitelistTeams?: string[];
  /**
  * Allowlisted users for pushing. Requires enable_push to be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#push_whitelist_users RepositoryBranchProtection#push_whitelist_users}
  */
  readonly pushWhitelistUsers?: string[];
  /**
  * Reject pushes to this branch if they are unsigned or unverifiable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#require_signed_commits RepositoryBranchProtection#require_signed_commits}
  */
  readonly requireSignedCommits?: boolean | cdktf.IResolvable;
  /**
  * Allow only to merge pull request with enough positive reviews.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#required_approvals RepositoryBranchProtection#required_approvals}
  */
  readonly requiredApprovals?: number;
  /**
  * Protected Branch Name Pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#rule_name RepositoryBranchProtection#rule_name}
  */
  readonly ruleName: string;
  /**
  * Enter patterns to specify which status checks must pass before
  * 								branches can be merged into a branch that matches this rule.
  * 								Each line specifies a pattern. Patterns cannot be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#status_check_patterns RepositoryBranchProtection#status_check_patterns}
  */
  readonly statusCheckPatterns?: string[];
  /**
  * Unprotected file patterns (separated using semicolon ';')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#unprotected_file_patterns RepositoryBranchProtection#unprotected_file_patterns}
  */
  readonly unprotectedFilePatterns?: string;
  /**
  * User name or organization name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#username RepositoryBranchProtection#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection gitea_repository_branch_protection}
*/
export class RepositoryBranchProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitea_repository_branch_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryBranchProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryBranchProtection to import
  * @param importFromId The id of the existing RepositoryBranchProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryBranchProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitea_repository_branch_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/repository_branch_protection gitea_repository_branch_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryBranchProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryBranchProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'gitea_repository_branch_protection',
      terraformGeneratorMetadata: {
        providerName: 'gitea',
        providerVersion: '0.7.0',
        providerVersionConstraint: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvalWhitelistTeams = config.approvalWhitelistTeams;
    this._approvalWhitelistUsers = config.approvalWhitelistUsers;
    this._blockMergeOnOfficialReviewRequests = config.blockMergeOnOfficialReviewRequests;
    this._blockMergeOnOutdatedBranch = config.blockMergeOnOutdatedBranch;
    this._blockMergeOnRejectedReviews = config.blockMergeOnRejectedReviews;
    this._dismissStaleApprovals = config.dismissStaleApprovals;
    this._enablePush = config.enablePush;
    this._id = config.id;
    this._mergeWhitelistTeams = config.mergeWhitelistTeams;
    this._mergeWhitelistUsers = config.mergeWhitelistUsers;
    this._name = config.name;
    this._protectedFilePatterns = config.protectedFilePatterns;
    this._pushWhitelistDeployKeys = config.pushWhitelistDeployKeys;
    this._pushWhitelistTeams = config.pushWhitelistTeams;
    this._pushWhitelistUsers = config.pushWhitelistUsers;
    this._requireSignedCommits = config.requireSignedCommits;
    this._requiredApprovals = config.requiredApprovals;
    this._ruleName = config.ruleName;
    this._statusCheckPatterns = config.statusCheckPatterns;
    this._unprotectedFilePatterns = config.unprotectedFilePatterns;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_whitelist_teams - computed: false, optional: true, required: false
  private _approvalWhitelistTeams?: string[]; 
  public get approvalWhitelistTeams() {
    return this.getListAttribute('approval_whitelist_teams');
  }
  public set approvalWhitelistTeams(value: string[]) {
    this._approvalWhitelistTeams = value;
  }
  public resetApprovalWhitelistTeams() {
    this._approvalWhitelistTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalWhitelistTeamsInput() {
    return this._approvalWhitelistTeams;
  }

  // approval_whitelist_users - computed: false, optional: true, required: false
  private _approvalWhitelistUsers?: string[]; 
  public get approvalWhitelistUsers() {
    return this.getListAttribute('approval_whitelist_users');
  }
  public set approvalWhitelistUsers(value: string[]) {
    this._approvalWhitelistUsers = value;
  }
  public resetApprovalWhitelistUsers() {
    this._approvalWhitelistUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalWhitelistUsersInput() {
    return this._approvalWhitelistUsers;
  }

  // block_merge_on_official_review_requests - computed: false, optional: true, required: false
  private _blockMergeOnOfficialReviewRequests?: boolean | cdktf.IResolvable; 
  public get blockMergeOnOfficialReviewRequests() {
    return this.getBooleanAttribute('block_merge_on_official_review_requests');
  }
  public set blockMergeOnOfficialReviewRequests(value: boolean | cdktf.IResolvable) {
    this._blockMergeOnOfficialReviewRequests = value;
  }
  public resetBlockMergeOnOfficialReviewRequests() {
    this._blockMergeOnOfficialReviewRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMergeOnOfficialReviewRequestsInput() {
    return this._blockMergeOnOfficialReviewRequests;
  }

  // block_merge_on_outdated_branch - computed: false, optional: true, required: false
  private _blockMergeOnOutdatedBranch?: boolean | cdktf.IResolvable; 
  public get blockMergeOnOutdatedBranch() {
    return this.getBooleanAttribute('block_merge_on_outdated_branch');
  }
  public set blockMergeOnOutdatedBranch(value: boolean | cdktf.IResolvable) {
    this._blockMergeOnOutdatedBranch = value;
  }
  public resetBlockMergeOnOutdatedBranch() {
    this._blockMergeOnOutdatedBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMergeOnOutdatedBranchInput() {
    return this._blockMergeOnOutdatedBranch;
  }

  // block_merge_on_rejected_reviews - computed: false, optional: true, required: false
  private _blockMergeOnRejectedReviews?: boolean | cdktf.IResolvable; 
  public get blockMergeOnRejectedReviews() {
    return this.getBooleanAttribute('block_merge_on_rejected_reviews');
  }
  public set blockMergeOnRejectedReviews(value: boolean | cdktf.IResolvable) {
    this._blockMergeOnRejectedReviews = value;
  }
  public resetBlockMergeOnRejectedReviews() {
    this._blockMergeOnRejectedReviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMergeOnRejectedReviewsInput() {
    return this._blockMergeOnRejectedReviews;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dismiss_stale_approvals - computed: false, optional: true, required: false
  private _dismissStaleApprovals?: boolean | cdktf.IResolvable; 
  public get dismissStaleApprovals() {
    return this.getBooleanAttribute('dismiss_stale_approvals');
  }
  public set dismissStaleApprovals(value: boolean | cdktf.IResolvable) {
    this._dismissStaleApprovals = value;
  }
  public resetDismissStaleApprovals() {
    this._dismissStaleApprovals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dismissStaleApprovalsInput() {
    return this._dismissStaleApprovals;
  }

  // enable_approval_whitelist - computed: true, optional: false, required: false
  public get enableApprovalWhitelist() {
    return this.getBooleanAttribute('enable_approval_whitelist');
  }

  // enable_merge_whitelist - computed: true, optional: false, required: false
  public get enableMergeWhitelist() {
    return this.getBooleanAttribute('enable_merge_whitelist');
  }

  // enable_push - computed: false, optional: true, required: false
  private _enablePush?: boolean | cdktf.IResolvable; 
  public get enablePush() {
    return this.getBooleanAttribute('enable_push');
  }
  public set enablePush(value: boolean | cdktf.IResolvable) {
    this._enablePush = value;
  }
  public resetEnablePush() {
    this._enablePush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePushInput() {
    return this._enablePush;
  }

  // enable_push_whitelist - computed: true, optional: false, required: false
  public get enablePushWhitelist() {
    return this.getBooleanAttribute('enable_push_whitelist');
  }

  // enable_status_check - computed: true, optional: false, required: false
  public get enableStatusCheck() {
    return this.getBooleanAttribute('enable_status_check');
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

  // merge_whitelist_teams - computed: false, optional: true, required: false
  private _mergeWhitelistTeams?: string[]; 
  public get mergeWhitelistTeams() {
    return this.getListAttribute('merge_whitelist_teams');
  }
  public set mergeWhitelistTeams(value: string[]) {
    this._mergeWhitelistTeams = value;
  }
  public resetMergeWhitelistTeams() {
    this._mergeWhitelistTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeWhitelistTeamsInput() {
    return this._mergeWhitelistTeams;
  }

  // merge_whitelist_users - computed: false, optional: true, required: false
  private _mergeWhitelistUsers?: string[]; 
  public get mergeWhitelistUsers() {
    return this.getListAttribute('merge_whitelist_users');
  }
  public set mergeWhitelistUsers(value: string[]) {
    this._mergeWhitelistUsers = value;
  }
  public resetMergeWhitelistUsers() {
    this._mergeWhitelistUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeWhitelistUsersInput() {
    return this._mergeWhitelistUsers;
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

  // protected_file_patterns - computed: false, optional: true, required: false
  private _protectedFilePatterns?: string; 
  public get protectedFilePatterns() {
    return this.getStringAttribute('protected_file_patterns');
  }
  public set protectedFilePatterns(value: string) {
    this._protectedFilePatterns = value;
  }
  public resetProtectedFilePatterns() {
    this._protectedFilePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedFilePatternsInput() {
    return this._protectedFilePatterns;
  }

  // push_whitelist_deploy_keys - computed: false, optional: true, required: false
  private _pushWhitelistDeployKeys?: boolean | cdktf.IResolvable; 
  public get pushWhitelistDeployKeys() {
    return this.getBooleanAttribute('push_whitelist_deploy_keys');
  }
  public set pushWhitelistDeployKeys(value: boolean | cdktf.IResolvable) {
    this._pushWhitelistDeployKeys = value;
  }
  public resetPushWhitelistDeployKeys() {
    this._pushWhitelistDeployKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushWhitelistDeployKeysInput() {
    return this._pushWhitelistDeployKeys;
  }

  // push_whitelist_teams - computed: false, optional: true, required: false
  private _pushWhitelistTeams?: string[]; 
  public get pushWhitelistTeams() {
    return this.getListAttribute('push_whitelist_teams');
  }
  public set pushWhitelistTeams(value: string[]) {
    this._pushWhitelistTeams = value;
  }
  public resetPushWhitelistTeams() {
    this._pushWhitelistTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushWhitelistTeamsInput() {
    return this._pushWhitelistTeams;
  }

  // push_whitelist_users - computed: false, optional: true, required: false
  private _pushWhitelistUsers?: string[]; 
  public get pushWhitelistUsers() {
    return this.getListAttribute('push_whitelist_users');
  }
  public set pushWhitelistUsers(value: string[]) {
    this._pushWhitelistUsers = value;
  }
  public resetPushWhitelistUsers() {
    this._pushWhitelistUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushWhitelistUsersInput() {
    return this._pushWhitelistUsers;
  }

  // require_signed_commits - computed: false, optional: true, required: false
  private _requireSignedCommits?: boolean | cdktf.IResolvable; 
  public get requireSignedCommits() {
    return this.getBooleanAttribute('require_signed_commits');
  }
  public set requireSignedCommits(value: boolean | cdktf.IResolvable) {
    this._requireSignedCommits = value;
  }
  public resetRequireSignedCommits() {
    this._requireSignedCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedCommitsInput() {
    return this._requireSignedCommits;
  }

  // required_approvals - computed: false, optional: true, required: false
  private _requiredApprovals?: number; 
  public get requiredApprovals() {
    return this.getNumberAttribute('required_approvals');
  }
  public set requiredApprovals(value: number) {
    this._requiredApprovals = value;
  }
  public resetRequiredApprovals() {
    this._requiredApprovals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredApprovalsInput() {
    return this._requiredApprovals;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // status_check_patterns - computed: false, optional: true, required: false
  private _statusCheckPatterns?: string[]; 
  public get statusCheckPatterns() {
    return this.getListAttribute('status_check_patterns');
  }
  public set statusCheckPatterns(value: string[]) {
    this._statusCheckPatterns = value;
  }
  public resetStatusCheckPatterns() {
    this._statusCheckPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCheckPatternsInput() {
    return this._statusCheckPatterns;
  }

  // unprotected_file_patterns - computed: false, optional: true, required: false
  private _unprotectedFilePatterns?: string; 
  public get unprotectedFilePatterns() {
    return this.getStringAttribute('unprotected_file_patterns');
  }
  public set unprotectedFilePatterns(value: string) {
    this._unprotectedFilePatterns = value;
  }
  public resetUnprotectedFilePatterns() {
    this._unprotectedFilePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unprotectedFilePatternsInput() {
    return this._unprotectedFilePatterns;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approval_whitelist_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvalWhitelistTeams),
      approval_whitelist_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvalWhitelistUsers),
      block_merge_on_official_review_requests: cdktf.booleanToTerraform(this._blockMergeOnOfficialReviewRequests),
      block_merge_on_outdated_branch: cdktf.booleanToTerraform(this._blockMergeOnOutdatedBranch),
      block_merge_on_rejected_reviews: cdktf.booleanToTerraform(this._blockMergeOnRejectedReviews),
      dismiss_stale_approvals: cdktf.booleanToTerraform(this._dismissStaleApprovals),
      enable_push: cdktf.booleanToTerraform(this._enablePush),
      id: cdktf.stringToTerraform(this._id),
      merge_whitelist_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mergeWhitelistTeams),
      merge_whitelist_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mergeWhitelistUsers),
      name: cdktf.stringToTerraform(this._name),
      protected_file_patterns: cdktf.stringToTerraform(this._protectedFilePatterns),
      push_whitelist_deploy_keys: cdktf.booleanToTerraform(this._pushWhitelistDeployKeys),
      push_whitelist_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pushWhitelistTeams),
      push_whitelist_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pushWhitelistUsers),
      require_signed_commits: cdktf.booleanToTerraform(this._requireSignedCommits),
      required_approvals: cdktf.numberToTerraform(this._requiredApprovals),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      status_check_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._statusCheckPatterns),
      unprotected_file_patterns: cdktf.stringToTerraform(this._unprotectedFilePatterns),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approval_whitelist_teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvalWhitelistTeams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      approval_whitelist_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvalWhitelistUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      block_merge_on_official_review_requests: {
        value: cdktf.booleanToHclTerraform(this._blockMergeOnOfficialReviewRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_merge_on_outdated_branch: {
        value: cdktf.booleanToHclTerraform(this._blockMergeOnOutdatedBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_merge_on_rejected_reviews: {
        value: cdktf.booleanToHclTerraform(this._blockMergeOnRejectedReviews),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dismiss_stale_approvals: {
        value: cdktf.booleanToHclTerraform(this._dismissStaleApprovals),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_push: {
        value: cdktf.booleanToHclTerraform(this._enablePush),
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
      merge_whitelist_teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mergeWhitelistTeams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      merge_whitelist_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mergeWhitelistUsers),
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
      protected_file_patterns: {
        value: cdktf.stringToHclTerraform(this._protectedFilePatterns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push_whitelist_deploy_keys: {
        value: cdktf.booleanToHclTerraform(this._pushWhitelistDeployKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      push_whitelist_teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pushWhitelistTeams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      push_whitelist_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pushWhitelistUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      require_signed_commits: {
        value: cdktf.booleanToHclTerraform(this._requireSignedCommits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required_approvals: {
        value: cdktf.numberToHclTerraform(this._requiredApprovals),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_check_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._statusCheckPatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unprotected_file_patterns: {
        value: cdktf.stringToHclTerraform(this._unprotectedFilePatterns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
