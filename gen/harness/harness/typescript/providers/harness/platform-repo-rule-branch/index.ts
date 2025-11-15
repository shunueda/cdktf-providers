// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformRepoRuleBranchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#description PlatformRepoRuleBranch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#id PlatformRepoRuleBranch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#identifier PlatformRepoRuleBranch#identifier}
  */
  readonly identifier: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#org_id PlatformRepoRuleBranch#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#project_id PlatformRepoRuleBranch#project_id}
  */
  readonly projectId?: string;
  /**
  * Repo identifier of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#repo_identifier PlatformRepoRuleBranch#repo_identifier}
  */
  readonly repoIdentifier: string;
  /**
  * State of the rule (active, disable, monitor).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#state PlatformRepoRuleBranch#state}
  */
  readonly state: string;
  /**
  * bypass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#bypass PlatformRepoRuleBranch#bypass}
  */
  readonly bypass: PlatformRepoRuleBranchBypass[] | cdktf.IResolvable;
  /**
  * pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#pattern PlatformRepoRuleBranch#pattern}
  */
  readonly pattern?: PlatformRepoRuleBranchPattern[] | cdktf.IResolvable;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#policies PlatformRepoRuleBranch#policies}
  */
  readonly policies: PlatformRepoRuleBranchPolicies[] | cdktf.IResolvable;
}
export interface PlatformRepoRuleBranchBypass {
  /**
  * Allow users with repository edit permission to bypass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#repo_owners PlatformRepoRuleBranch#repo_owners}
  */
  readonly repoOwners?: boolean | cdktf.IResolvable;
  /**
  * List of user ids with who can bypass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#user_ids PlatformRepoRuleBranch#user_ids}
  */
  readonly userIds?: string[];
}

export function platformRepoRuleBranchBypassToTerraform(struct?: PlatformRepoRuleBranchBypass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repo_owners: cdktf.booleanToTerraform(struct!.repoOwners),
    user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userIds),
  }
}


export function platformRepoRuleBranchBypassToHclTerraform(struct?: PlatformRepoRuleBranchBypass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repo_owners: {
      value: cdktf.booleanToHclTerraform(struct!.repoOwners),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformRepoRuleBranchBypassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformRepoRuleBranchBypass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repoOwners !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoOwners = this._repoOwners;
    }
    if (this._userIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIds = this._userIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformRepoRuleBranchBypass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repoOwners = undefined;
      this._userIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repoOwners = value.repoOwners;
      this._userIds = value.userIds;
    }
  }

  // repo_owners - computed: false, optional: true, required: false
  private _repoOwners?: boolean | cdktf.IResolvable; 
  public get repoOwners() {
    return this.getBooleanAttribute('repo_owners');
  }
  public set repoOwners(value: boolean | cdktf.IResolvable) {
    this._repoOwners = value;
  }
  public resetRepoOwners() {
    this._repoOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoOwnersInput() {
    return this._repoOwners;
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: string[]; 
  public get userIds() {
    return this.getListAttribute('user_ids');
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }
}

export class PlatformRepoRuleBranchBypassList extends cdktf.ComplexList {
  public internalValue? : PlatformRepoRuleBranchBypass[] | cdktf.IResolvable

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
  public get(index: number): PlatformRepoRuleBranchBypassOutputReference {
    return new PlatformRepoRuleBranchBypassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformRepoRuleBranchPattern {
  /**
  * Should rule apply to default branch of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#default_branch PlatformRepoRuleBranch#default_branch}
  */
  readonly defaultBranch?: boolean | cdktf.IResolvable;
  /**
  * Globstar branch patterns on which rules will NOT be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#exclude PlatformRepoRuleBranch#exclude}
  */
  readonly exclude?: string[];
  /**
  * Globstar branch patterns on which rules will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#include PlatformRepoRuleBranch#include}
  */
  readonly include?: string[];
}

export function platformRepoRuleBranchPatternToTerraform(struct?: PlatformRepoRuleBranchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_branch: cdktf.booleanToTerraform(struct!.defaultBranch),
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function platformRepoRuleBranchPatternToHclTerraform(struct?: PlatformRepoRuleBranchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_branch: {
      value: cdktf.booleanToHclTerraform(struct!.defaultBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformRepoRuleBranchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformRepoRuleBranchPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBranch = this._defaultBranch;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformRepoRuleBranchPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultBranch = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultBranch = value.defaultBranch;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // default_branch - computed: false, optional: true, required: false
  private _defaultBranch?: boolean | cdktf.IResolvable; 
  public get defaultBranch() {
    return this.getBooleanAttribute('default_branch');
  }
  public set defaultBranch(value: boolean | cdktf.IResolvable) {
    this._defaultBranch = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class PlatformRepoRuleBranchPatternList extends cdktf.ComplexList {
  public internalValue? : PlatformRepoRuleBranchPattern[] | cdktf.IResolvable

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
  public get(index: number): PlatformRepoRuleBranchPatternOutputReference {
    return new PlatformRepoRuleBranchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformRepoRuleBranchPolicies {
  /**
  * Limit which merge strategies are available to merge a pull request(Any of squash, rebase, merge).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#allow_merge_strategies PlatformRepoRuleBranch#allow_merge_strategies}
  */
  readonly allowMergeStrategies?: string[];
  /**
  * Only allow users with bypass permission to create matching branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#block_branch_creation PlatformRepoRuleBranch#block_branch_creation}
  */
  readonly blockBranchCreation?: boolean | cdktf.IResolvable;
  /**
  * Only allow users with bypass permission to delete matching branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#block_branch_deletion PlatformRepoRuleBranch#block_branch_deletion}
  */
  readonly blockBranchDeletion?: boolean | cdktf.IResolvable;
  /**
  * Automatically delete the source branch of a pull request after it is merged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#delete_branch_on_merge PlatformRepoRuleBranch#delete_branch_on_merge}
  */
  readonly deleteBranchOnMerge?: boolean | cdktf.IResolvable;
  /**
  * Require approval on pull requests from one reviewer for each codeowner rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#require_code_owners PlatformRepoRuleBranch#require_code_owners}
  */
  readonly requireCodeOwners?: boolean | cdktf.IResolvable;
  /**
  * Require re-approval when there are new changes in the pull request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#require_latest_commit_approval PlatformRepoRuleBranch#require_latest_commit_approval}
  */
  readonly requireLatestCommitApproval?: boolean | cdktf.IResolvable;
  /**
  * Require approval on pull requests from a minimum number of reviewers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#require_minimum_approval_count PlatformRepoRuleBranch#require_minimum_approval_count}
  */
  readonly requireMinimumApprovalCount?: number;
  /**
  * Require all request for changes have been resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#require_no_change_request PlatformRepoRuleBranch#require_no_change_request}
  */
  readonly requireNoChangeRequest?: boolean | cdktf.IResolvable;
  /**
  * Do not allow any changes to matching branches without a pull request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#require_pull_request PlatformRepoRuleBranch#require_pull_request}
  */
  readonly requirePullRequest?: boolean | cdktf.IResolvable;
  /**
  * All comments on a pull request must be resolved before it can be merged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#require_resolve_all_comments PlatformRepoRuleBranch#require_resolve_all_comments}
  */
  readonly requireResolveAllComments?: boolean | cdktf.IResolvable;
  /**
  * Selected status checks must pass before a pull request can be merged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#require_status_checks PlatformRepoRuleBranch#require_status_checks}
  */
  readonly requireStatusChecks?: string[];
}

export function platformRepoRuleBranchPoliciesToTerraform(struct?: PlatformRepoRuleBranchPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_merge_strategies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMergeStrategies),
    block_branch_creation: cdktf.booleanToTerraform(struct!.blockBranchCreation),
    block_branch_deletion: cdktf.booleanToTerraform(struct!.blockBranchDeletion),
    delete_branch_on_merge: cdktf.booleanToTerraform(struct!.deleteBranchOnMerge),
    require_code_owners: cdktf.booleanToTerraform(struct!.requireCodeOwners),
    require_latest_commit_approval: cdktf.booleanToTerraform(struct!.requireLatestCommitApproval),
    require_minimum_approval_count: cdktf.numberToTerraform(struct!.requireMinimumApprovalCount),
    require_no_change_request: cdktf.booleanToTerraform(struct!.requireNoChangeRequest),
    require_pull_request: cdktf.booleanToTerraform(struct!.requirePullRequest),
    require_resolve_all_comments: cdktf.booleanToTerraform(struct!.requireResolveAllComments),
    require_status_checks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requireStatusChecks),
  }
}


export function platformRepoRuleBranchPoliciesToHclTerraform(struct?: PlatformRepoRuleBranchPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_merge_strategies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowMergeStrategies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    block_branch_creation: {
      value: cdktf.booleanToHclTerraform(struct!.blockBranchCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_branch_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.blockBranchDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_branch_on_merge: {
      value: cdktf.booleanToHclTerraform(struct!.deleteBranchOnMerge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_code_owners: {
      value: cdktf.booleanToHclTerraform(struct!.requireCodeOwners),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_latest_commit_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireLatestCommitApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_minimum_approval_count: {
      value: cdktf.numberToHclTerraform(struct!.requireMinimumApprovalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_no_change_request: {
      value: cdktf.booleanToHclTerraform(struct!.requireNoChangeRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_pull_request: {
      value: cdktf.booleanToHclTerraform(struct!.requirePullRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_resolve_all_comments: {
      value: cdktf.booleanToHclTerraform(struct!.requireResolveAllComments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_status_checks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requireStatusChecks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformRepoRuleBranchPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformRepoRuleBranchPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowMergeStrategies !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMergeStrategies = this._allowMergeStrategies;
    }
    if (this._blockBranchCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockBranchCreation = this._blockBranchCreation;
    }
    if (this._blockBranchDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockBranchDeletion = this._blockBranchDeletion;
    }
    if (this._deleteBranchOnMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteBranchOnMerge = this._deleteBranchOnMerge;
    }
    if (this._requireCodeOwners !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireCodeOwners = this._requireCodeOwners;
    }
    if (this._requireLatestCommitApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireLatestCommitApproval = this._requireLatestCommitApproval;
    }
    if (this._requireMinimumApprovalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMinimumApprovalCount = this._requireMinimumApprovalCount;
    }
    if (this._requireNoChangeRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireNoChangeRequest = this._requireNoChangeRequest;
    }
    if (this._requirePullRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePullRequest = this._requirePullRequest;
    }
    if (this._requireResolveAllComments !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireResolveAllComments = this._requireResolveAllComments;
    }
    if (this._requireStatusChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireStatusChecks = this._requireStatusChecks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformRepoRuleBranchPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowMergeStrategies = undefined;
      this._blockBranchCreation = undefined;
      this._blockBranchDeletion = undefined;
      this._deleteBranchOnMerge = undefined;
      this._requireCodeOwners = undefined;
      this._requireLatestCommitApproval = undefined;
      this._requireMinimumApprovalCount = undefined;
      this._requireNoChangeRequest = undefined;
      this._requirePullRequest = undefined;
      this._requireResolveAllComments = undefined;
      this._requireStatusChecks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowMergeStrategies = value.allowMergeStrategies;
      this._blockBranchCreation = value.blockBranchCreation;
      this._blockBranchDeletion = value.blockBranchDeletion;
      this._deleteBranchOnMerge = value.deleteBranchOnMerge;
      this._requireCodeOwners = value.requireCodeOwners;
      this._requireLatestCommitApproval = value.requireLatestCommitApproval;
      this._requireMinimumApprovalCount = value.requireMinimumApprovalCount;
      this._requireNoChangeRequest = value.requireNoChangeRequest;
      this._requirePullRequest = value.requirePullRequest;
      this._requireResolveAllComments = value.requireResolveAllComments;
      this._requireStatusChecks = value.requireStatusChecks;
    }
  }

  // allow_merge_strategies - computed: false, optional: true, required: false
  private _allowMergeStrategies?: string[]; 
  public get allowMergeStrategies() {
    return this.getListAttribute('allow_merge_strategies');
  }
  public set allowMergeStrategies(value: string[]) {
    this._allowMergeStrategies = value;
  }
  public resetAllowMergeStrategies() {
    this._allowMergeStrategies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMergeStrategiesInput() {
    return this._allowMergeStrategies;
  }

  // block_branch_creation - computed: false, optional: true, required: false
  private _blockBranchCreation?: boolean | cdktf.IResolvable; 
  public get blockBranchCreation() {
    return this.getBooleanAttribute('block_branch_creation');
  }
  public set blockBranchCreation(value: boolean | cdktf.IResolvable) {
    this._blockBranchCreation = value;
  }
  public resetBlockBranchCreation() {
    this._blockBranchCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockBranchCreationInput() {
    return this._blockBranchCreation;
  }

  // block_branch_deletion - computed: false, optional: true, required: false
  private _blockBranchDeletion?: boolean | cdktf.IResolvable; 
  public get blockBranchDeletion() {
    return this.getBooleanAttribute('block_branch_deletion');
  }
  public set blockBranchDeletion(value: boolean | cdktf.IResolvable) {
    this._blockBranchDeletion = value;
  }
  public resetBlockBranchDeletion() {
    this._blockBranchDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockBranchDeletionInput() {
    return this._blockBranchDeletion;
  }

  // delete_branch_on_merge - computed: false, optional: true, required: false
  private _deleteBranchOnMerge?: boolean | cdktf.IResolvable; 
  public get deleteBranchOnMerge() {
    return this.getBooleanAttribute('delete_branch_on_merge');
  }
  public set deleteBranchOnMerge(value: boolean | cdktf.IResolvable) {
    this._deleteBranchOnMerge = value;
  }
  public resetDeleteBranchOnMerge() {
    this._deleteBranchOnMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBranchOnMergeInput() {
    return this._deleteBranchOnMerge;
  }

  // require_code_owners - computed: false, optional: true, required: false
  private _requireCodeOwners?: boolean | cdktf.IResolvable; 
  public get requireCodeOwners() {
    return this.getBooleanAttribute('require_code_owners');
  }
  public set requireCodeOwners(value: boolean | cdktf.IResolvable) {
    this._requireCodeOwners = value;
  }
  public resetRequireCodeOwners() {
    this._requireCodeOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCodeOwnersInput() {
    return this._requireCodeOwners;
  }

  // require_latest_commit_approval - computed: false, optional: true, required: false
  private _requireLatestCommitApproval?: boolean | cdktf.IResolvable; 
  public get requireLatestCommitApproval() {
    return this.getBooleanAttribute('require_latest_commit_approval');
  }
  public set requireLatestCommitApproval(value: boolean | cdktf.IResolvable) {
    this._requireLatestCommitApproval = value;
  }
  public resetRequireLatestCommitApproval() {
    this._requireLatestCommitApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLatestCommitApprovalInput() {
    return this._requireLatestCommitApproval;
  }

  // require_minimum_approval_count - computed: false, optional: true, required: false
  private _requireMinimumApprovalCount?: number; 
  public get requireMinimumApprovalCount() {
    return this.getNumberAttribute('require_minimum_approval_count');
  }
  public set requireMinimumApprovalCount(value: number) {
    this._requireMinimumApprovalCount = value;
  }
  public resetRequireMinimumApprovalCount() {
    this._requireMinimumApprovalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMinimumApprovalCountInput() {
    return this._requireMinimumApprovalCount;
  }

  // require_no_change_request - computed: false, optional: true, required: false
  private _requireNoChangeRequest?: boolean | cdktf.IResolvable; 
  public get requireNoChangeRequest() {
    return this.getBooleanAttribute('require_no_change_request');
  }
  public set requireNoChangeRequest(value: boolean | cdktf.IResolvable) {
    this._requireNoChangeRequest = value;
  }
  public resetRequireNoChangeRequest() {
    this._requireNoChangeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireNoChangeRequestInput() {
    return this._requireNoChangeRequest;
  }

  // require_pull_request - computed: false, optional: true, required: false
  private _requirePullRequest?: boolean | cdktf.IResolvable; 
  public get requirePullRequest() {
    return this.getBooleanAttribute('require_pull_request');
  }
  public set requirePullRequest(value: boolean | cdktf.IResolvable) {
    this._requirePullRequest = value;
  }
  public resetRequirePullRequest() {
    this._requirePullRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePullRequestInput() {
    return this._requirePullRequest;
  }

  // require_resolve_all_comments - computed: false, optional: true, required: false
  private _requireResolveAllComments?: boolean | cdktf.IResolvable; 
  public get requireResolveAllComments() {
    return this.getBooleanAttribute('require_resolve_all_comments');
  }
  public set requireResolveAllComments(value: boolean | cdktf.IResolvable) {
    this._requireResolveAllComments = value;
  }
  public resetRequireResolveAllComments() {
    this._requireResolveAllComments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireResolveAllCommentsInput() {
    return this._requireResolveAllComments;
  }

  // require_status_checks - computed: false, optional: true, required: false
  private _requireStatusChecks?: string[]; 
  public get requireStatusChecks() {
    return this.getListAttribute('require_status_checks');
  }
  public set requireStatusChecks(value: string[]) {
    this._requireStatusChecks = value;
  }
  public resetRequireStatusChecks() {
    this._requireStatusChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireStatusChecksInput() {
    return this._requireStatusChecks;
  }
}

export class PlatformRepoRuleBranchPoliciesList extends cdktf.ComplexList {
  public internalValue? : PlatformRepoRuleBranchPolicies[] | cdktf.IResolvable

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
  public get(index: number): PlatformRepoRuleBranchPoliciesOutputReference {
    return new PlatformRepoRuleBranchPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch harness_platform_repo_rule_branch}
*/
export class PlatformRepoRuleBranch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_repo_rule_branch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformRepoRuleBranch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformRepoRuleBranch to import
  * @param importFromId The id of the existing PlatformRepoRuleBranch that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformRepoRuleBranch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_repo_rule_branch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_repo_rule_branch harness_platform_repo_rule_branch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformRepoRuleBranchConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformRepoRuleBranchConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_repo_rule_branch',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._repoIdentifier = config.repoIdentifier;
    this._state = config.state;
    this._bypass.internalValue = config.bypass;
    this._pattern.internalValue = config.pattern;
    this._policies.internalValue = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getNumberAttribute('created_by');
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repo_identifier - computed: false, optional: false, required: true
  private _repoIdentifier?: string; 
  public get repoIdentifier() {
    return this.getStringAttribute('repo_identifier');
  }
  public set repoIdentifier(value: string) {
    this._repoIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoIdentifierInput() {
    return this._repoIdentifier;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getNumberAttribute('updated');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getNumberAttribute('updated_by');
  }

  // bypass - computed: false, optional: false, required: true
  private _bypass = new PlatformRepoRuleBranchBypassList(this, "bypass", true);
  public get bypass() {
    return this._bypass;
  }
  public putBypass(value: PlatformRepoRuleBranchBypass[] | cdktf.IResolvable) {
    this._bypass.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass.internalValue;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern = new PlatformRepoRuleBranchPatternList(this, "pattern", true);
  public get pattern() {
    return this._pattern;
  }
  public putPattern(value: PlatformRepoRuleBranchPattern[] | cdktf.IResolvable) {
    this._pattern.internalValue = value;
  }
  public resetPattern() {
    this._pattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern.internalValue;
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new PlatformRepoRuleBranchPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: PlatformRepoRuleBranchPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      repo_identifier: cdktf.stringToTerraform(this._repoIdentifier),
      state: cdktf.stringToTerraform(this._state),
      bypass: cdktf.listMapper(platformRepoRuleBranchBypassToTerraform, true)(this._bypass.internalValue),
      pattern: cdktf.listMapper(platformRepoRuleBranchPatternToTerraform, true)(this._pattern.internalValue),
      policies: cdktf.listMapper(platformRepoRuleBranchPoliciesToTerraform, true)(this._policies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_identifier: {
        value: cdktf.stringToHclTerraform(this._repoIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass: {
        value: cdktf.listMapperHcl(platformRepoRuleBranchBypassToHclTerraform, true)(this._bypass.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformRepoRuleBranchBypassList",
      },
      pattern: {
        value: cdktf.listMapperHcl(platformRepoRuleBranchPatternToHclTerraform, true)(this._pattern.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformRepoRuleBranchPatternList",
      },
      policies: {
        value: cdktf.listMapperHcl(platformRepoRuleBranchPoliciesToHclTerraform, true)(this._policies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformRepoRuleBranchPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
