// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchPolicyMinReviewersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#blocking BranchPolicyMinReviewers#blocking}
  */
  readonly blocking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#enabled BranchPolicyMinReviewers#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#id BranchPolicyMinReviewers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#project_id BranchPolicyMinReviewers#project_id}
  */
  readonly projectId: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#settings BranchPolicyMinReviewers#settings}
  */
  readonly settings: BranchPolicyMinReviewersSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#timeouts BranchPolicyMinReviewers#timeouts}
  */
  readonly timeouts?: BranchPolicyMinReviewersTimeouts;
}
export interface BranchPolicyMinReviewersSettingsScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#match_type BranchPolicyMinReviewers#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#repository_id BranchPolicyMinReviewers#repository_id}
  */
  readonly repositoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#repository_ref BranchPolicyMinReviewers#repository_ref}
  */
  readonly repositoryRef?: string;
}

export function branchPolicyMinReviewersSettingsScopeToTerraform(struct?: BranchPolicyMinReviewersSettingsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
    repository_ref: cdktf.stringToTerraform(struct!.repositoryRef),
  }
}


export function branchPolicyMinReviewersSettingsScopeToHclTerraform(struct?: BranchPolicyMinReviewersSettingsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_ref: {
      value: cdktf.stringToHclTerraform(struct!.repositoryRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BranchPolicyMinReviewersSettingsScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BranchPolicyMinReviewersSettingsScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    if (this._repositoryRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryRef = this._repositoryRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchPolicyMinReviewersSettingsScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._repositoryId = undefined;
      this._repositoryRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._repositoryId = value.repositoryId;
      this._repositoryRef = value.repositoryRef;
    }
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // repository_ref - computed: false, optional: true, required: false
  private _repositoryRef?: string; 
  public get repositoryRef() {
    return this.getStringAttribute('repository_ref');
  }
  public set repositoryRef(value: string) {
    this._repositoryRef = value;
  }
  public resetRepositoryRef() {
    this._repositoryRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryRefInput() {
    return this._repositoryRef;
  }
}

export class BranchPolicyMinReviewersSettingsScopeList extends cdktf.ComplexList {
  public internalValue? : BranchPolicyMinReviewersSettingsScope[] | cdktf.IResolvable

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
  public get(index: number): BranchPolicyMinReviewersSettingsScopeOutputReference {
    return new BranchPolicyMinReviewersSettingsScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BranchPolicyMinReviewersSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#allow_completion_with_rejects_or_waits BranchPolicyMinReviewers#allow_completion_with_rejects_or_waits}
  */
  readonly allowCompletionWithRejectsOrWaits?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#last_pusher_cannot_approve BranchPolicyMinReviewers#last_pusher_cannot_approve}
  */
  readonly lastPusherCannotApprove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#on_last_iteration_require_vote BranchPolicyMinReviewers#on_last_iteration_require_vote}
  */
  readonly onLastIterationRequireVote?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#on_push_reset_all_votes BranchPolicyMinReviewers#on_push_reset_all_votes}
  */
  readonly onPushResetAllVotes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#on_push_reset_approved_votes BranchPolicyMinReviewers#on_push_reset_approved_votes}
  */
  readonly onPushResetApprovedVotes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#reviewer_count BranchPolicyMinReviewers#reviewer_count}
  */
  readonly reviewerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#submitter_can_vote BranchPolicyMinReviewers#submitter_can_vote}
  */
  readonly submitterCanVote?: boolean | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#scope BranchPolicyMinReviewers#scope}
  */
  readonly scope: BranchPolicyMinReviewersSettingsScope[] | cdktf.IResolvable;
}

export function branchPolicyMinReviewersSettingsToTerraform(struct?: BranchPolicyMinReviewersSettingsOutputReference | BranchPolicyMinReviewersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_completion_with_rejects_or_waits: cdktf.booleanToTerraform(struct!.allowCompletionWithRejectsOrWaits),
    last_pusher_cannot_approve: cdktf.booleanToTerraform(struct!.lastPusherCannotApprove),
    on_last_iteration_require_vote: cdktf.booleanToTerraform(struct!.onLastIterationRequireVote),
    on_push_reset_all_votes: cdktf.booleanToTerraform(struct!.onPushResetAllVotes),
    on_push_reset_approved_votes: cdktf.booleanToTerraform(struct!.onPushResetApprovedVotes),
    reviewer_count: cdktf.numberToTerraform(struct!.reviewerCount),
    submitter_can_vote: cdktf.booleanToTerraform(struct!.submitterCanVote),
    scope: cdktf.listMapper(branchPolicyMinReviewersSettingsScopeToTerraform, true)(struct!.scope),
  }
}


export function branchPolicyMinReviewersSettingsToHclTerraform(struct?: BranchPolicyMinReviewersSettingsOutputReference | BranchPolicyMinReviewersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_completion_with_rejects_or_waits: {
      value: cdktf.booleanToHclTerraform(struct!.allowCompletionWithRejectsOrWaits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_pusher_cannot_approve: {
      value: cdktf.booleanToHclTerraform(struct!.lastPusherCannotApprove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_last_iteration_require_vote: {
      value: cdktf.booleanToHclTerraform(struct!.onLastIterationRequireVote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_push_reset_all_votes: {
      value: cdktf.booleanToHclTerraform(struct!.onPushResetAllVotes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_push_reset_approved_votes: {
      value: cdktf.booleanToHclTerraform(struct!.onPushResetApprovedVotes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reviewer_count: {
      value: cdktf.numberToHclTerraform(struct!.reviewerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    submitter_can_vote: {
      value: cdktf.booleanToHclTerraform(struct!.submitterCanVote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope: {
      value: cdktf.listMapperHcl(branchPolicyMinReviewersSettingsScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "BranchPolicyMinReviewersSettingsScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BranchPolicyMinReviewersSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BranchPolicyMinReviewersSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCompletionWithRejectsOrWaits !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCompletionWithRejectsOrWaits = this._allowCompletionWithRejectsOrWaits;
    }
    if (this._lastPusherCannotApprove !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastPusherCannotApprove = this._lastPusherCannotApprove;
    }
    if (this._onLastIterationRequireVote !== undefined) {
      hasAnyValues = true;
      internalValueResult.onLastIterationRequireVote = this._onLastIterationRequireVote;
    }
    if (this._onPushResetAllVotes !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPushResetAllVotes = this._onPushResetAllVotes;
    }
    if (this._onPushResetApprovedVotes !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPushResetApprovedVotes = this._onPushResetApprovedVotes;
    }
    if (this._reviewerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerCount = this._reviewerCount;
    }
    if (this._submitterCanVote !== undefined) {
      hasAnyValues = true;
      internalValueResult.submitterCanVote = this._submitterCanVote;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchPolicyMinReviewersSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCompletionWithRejectsOrWaits = undefined;
      this._lastPusherCannotApprove = undefined;
      this._onLastIterationRequireVote = undefined;
      this._onPushResetAllVotes = undefined;
      this._onPushResetApprovedVotes = undefined;
      this._reviewerCount = undefined;
      this._submitterCanVote = undefined;
      this._scope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCompletionWithRejectsOrWaits = value.allowCompletionWithRejectsOrWaits;
      this._lastPusherCannotApprove = value.lastPusherCannotApprove;
      this._onLastIterationRequireVote = value.onLastIterationRequireVote;
      this._onPushResetAllVotes = value.onPushResetAllVotes;
      this._onPushResetApprovedVotes = value.onPushResetApprovedVotes;
      this._reviewerCount = value.reviewerCount;
      this._submitterCanVote = value.submitterCanVote;
      this._scope.internalValue = value.scope;
    }
  }

  // allow_completion_with_rejects_or_waits - computed: false, optional: true, required: false
  private _allowCompletionWithRejectsOrWaits?: boolean | cdktf.IResolvable; 
  public get allowCompletionWithRejectsOrWaits() {
    return this.getBooleanAttribute('allow_completion_with_rejects_or_waits');
  }
  public set allowCompletionWithRejectsOrWaits(value: boolean | cdktf.IResolvable) {
    this._allowCompletionWithRejectsOrWaits = value;
  }
  public resetAllowCompletionWithRejectsOrWaits() {
    this._allowCompletionWithRejectsOrWaits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCompletionWithRejectsOrWaitsInput() {
    return this._allowCompletionWithRejectsOrWaits;
  }

  // last_pusher_cannot_approve - computed: false, optional: true, required: false
  private _lastPusherCannotApprove?: boolean | cdktf.IResolvable; 
  public get lastPusherCannotApprove() {
    return this.getBooleanAttribute('last_pusher_cannot_approve');
  }
  public set lastPusherCannotApprove(value: boolean | cdktf.IResolvable) {
    this._lastPusherCannotApprove = value;
  }
  public resetLastPusherCannotApprove() {
    this._lastPusherCannotApprove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastPusherCannotApproveInput() {
    return this._lastPusherCannotApprove;
  }

  // on_last_iteration_require_vote - computed: false, optional: true, required: false
  private _onLastIterationRequireVote?: boolean | cdktf.IResolvable; 
  public get onLastIterationRequireVote() {
    return this.getBooleanAttribute('on_last_iteration_require_vote');
  }
  public set onLastIterationRequireVote(value: boolean | cdktf.IResolvable) {
    this._onLastIterationRequireVote = value;
  }
  public resetOnLastIterationRequireVote() {
    this._onLastIterationRequireVote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onLastIterationRequireVoteInput() {
    return this._onLastIterationRequireVote;
  }

  // on_push_reset_all_votes - computed: false, optional: true, required: false
  private _onPushResetAllVotes?: boolean | cdktf.IResolvable; 
  public get onPushResetAllVotes() {
    return this.getBooleanAttribute('on_push_reset_all_votes');
  }
  public set onPushResetAllVotes(value: boolean | cdktf.IResolvable) {
    this._onPushResetAllVotes = value;
  }
  public resetOnPushResetAllVotes() {
    this._onPushResetAllVotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPushResetAllVotesInput() {
    return this._onPushResetAllVotes;
  }

  // on_push_reset_approved_votes - computed: false, optional: true, required: false
  private _onPushResetApprovedVotes?: boolean | cdktf.IResolvable; 
  public get onPushResetApprovedVotes() {
    return this.getBooleanAttribute('on_push_reset_approved_votes');
  }
  public set onPushResetApprovedVotes(value: boolean | cdktf.IResolvable) {
    this._onPushResetApprovedVotes = value;
  }
  public resetOnPushResetApprovedVotes() {
    this._onPushResetApprovedVotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPushResetApprovedVotesInput() {
    return this._onPushResetApprovedVotes;
  }

  // reviewer_count - computed: false, optional: true, required: false
  private _reviewerCount?: number; 
  public get reviewerCount() {
    return this.getNumberAttribute('reviewer_count');
  }
  public set reviewerCount(value: number) {
    this._reviewerCount = value;
  }
  public resetReviewerCount() {
    this._reviewerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerCountInput() {
    return this._reviewerCount;
  }

  // submitter_can_vote - computed: false, optional: true, required: false
  private _submitterCanVote?: boolean | cdktf.IResolvable; 
  public get submitterCanVote() {
    return this.getBooleanAttribute('submitter_can_vote');
  }
  public set submitterCanVote(value: boolean | cdktf.IResolvable) {
    this._submitterCanVote = value;
  }
  public resetSubmitterCanVote() {
    this._submitterCanVote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submitterCanVoteInput() {
    return this._submitterCanVote;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new BranchPolicyMinReviewersSettingsScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: BranchPolicyMinReviewersSettingsScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}
export interface BranchPolicyMinReviewersTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#create BranchPolicyMinReviewers#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#delete BranchPolicyMinReviewers#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#read BranchPolicyMinReviewers#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#update BranchPolicyMinReviewers#update}
  */
  readonly update?: string;
}

export function branchPolicyMinReviewersTimeoutsToTerraform(struct?: BranchPolicyMinReviewersTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function branchPolicyMinReviewersTimeoutsToHclTerraform(struct?: BranchPolicyMinReviewersTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BranchPolicyMinReviewersTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BranchPolicyMinReviewersTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchPolicyMinReviewersTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers azuredevops_branch_policy_min_reviewers}
*/
export class BranchPolicyMinReviewers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_branch_policy_min_reviewers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BranchPolicyMinReviewers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BranchPolicyMinReviewers to import
  * @param importFromId The id of the existing BranchPolicyMinReviewers that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BranchPolicyMinReviewers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_branch_policy_min_reviewers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_min_reviewers azuredevops_branch_policy_min_reviewers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchPolicyMinReviewersConfig
  */
  public constructor(scope: Construct, id: string, config: BranchPolicyMinReviewersConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_branch_policy_min_reviewers',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.2',
        providerVersionConstraint: '1.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blocking = config.blocking;
    this._enabled = config.enabled;
    this._id = config.id;
    this._projectId = config.projectId;
    this._settings.internalValue = config.settings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocking - computed: false, optional: true, required: false
  private _blocking?: boolean | cdktf.IResolvable; 
  public get blocking() {
    return this.getBooleanAttribute('blocking');
  }
  public set blocking(value: boolean | cdktf.IResolvable) {
    this._blocking = value;
  }
  public resetBlocking() {
    this._blocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingInput() {
    return this._blocking;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new BranchPolicyMinReviewersSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: BranchPolicyMinReviewersSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BranchPolicyMinReviewersTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BranchPolicyMinReviewersTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocking: cdktf.booleanToTerraform(this._blocking),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      settings: branchPolicyMinReviewersSettingsToTerraform(this._settings.internalValue),
      timeouts: branchPolicyMinReviewersTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocking: {
        value: cdktf.booleanToHclTerraform(this._blocking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: branchPolicyMinReviewersSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BranchPolicyMinReviewersSettingsList",
      },
      timeouts: {
        value: branchPolicyMinReviewersTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BranchPolicyMinReviewersTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
