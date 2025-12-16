// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchPolicyAutoReviewersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#blocking BranchPolicyAutoReviewers#blocking}
  */
  readonly blocking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#enabled BranchPolicyAutoReviewers#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#id BranchPolicyAutoReviewers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#project_id BranchPolicyAutoReviewers#project_id}
  */
  readonly projectId: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#settings BranchPolicyAutoReviewers#settings}
  */
  readonly settings: BranchPolicyAutoReviewersSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#timeouts BranchPolicyAutoReviewers#timeouts}
  */
  readonly timeouts?: BranchPolicyAutoReviewersTimeouts;
}
export interface BranchPolicyAutoReviewersSettingsScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#match_type BranchPolicyAutoReviewers#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#repository_id BranchPolicyAutoReviewers#repository_id}
  */
  readonly repositoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#repository_ref BranchPolicyAutoReviewers#repository_ref}
  */
  readonly repositoryRef?: string;
}

export function branchPolicyAutoReviewersSettingsScopeToTerraform(struct?: BranchPolicyAutoReviewersSettingsScope | cdktf.IResolvable): any {
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


export function branchPolicyAutoReviewersSettingsScopeToHclTerraform(struct?: BranchPolicyAutoReviewersSettingsScope | cdktf.IResolvable): any {
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

export class BranchPolicyAutoReviewersSettingsScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BranchPolicyAutoReviewersSettingsScope | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BranchPolicyAutoReviewersSettingsScope | cdktf.IResolvable | undefined) {
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

export class BranchPolicyAutoReviewersSettingsScopeList extends cdktf.ComplexList {
  public internalValue? : BranchPolicyAutoReviewersSettingsScope[] | cdktf.IResolvable

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
  public get(index: number): BranchPolicyAutoReviewersSettingsScopeOutputReference {
    return new BranchPolicyAutoReviewersSettingsScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BranchPolicyAutoReviewersSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#auto_reviewer_ids BranchPolicyAutoReviewers#auto_reviewer_ids}
  */
  readonly autoReviewerIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#message BranchPolicyAutoReviewers#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#minimum_number_of_reviewers BranchPolicyAutoReviewers#minimum_number_of_reviewers}
  */
  readonly minimumNumberOfReviewers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#path_filters BranchPolicyAutoReviewers#path_filters}
  */
  readonly pathFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#submitter_can_vote BranchPolicyAutoReviewers#submitter_can_vote}
  */
  readonly submitterCanVote?: boolean | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#scope BranchPolicyAutoReviewers#scope}
  */
  readonly scope: BranchPolicyAutoReviewersSettingsScope[] | cdktf.IResolvable;
}

export function branchPolicyAutoReviewersSettingsToTerraform(struct?: BranchPolicyAutoReviewersSettingsOutputReference | BranchPolicyAutoReviewersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_reviewer_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.autoReviewerIds),
    message: cdktf.stringToTerraform(struct!.message),
    minimum_number_of_reviewers: cdktf.numberToTerraform(struct!.minimumNumberOfReviewers),
    path_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pathFilters),
    submitter_can_vote: cdktf.booleanToTerraform(struct!.submitterCanVote),
    scope: cdktf.listMapper(branchPolicyAutoReviewersSettingsScopeToTerraform, true)(struct!.scope),
  }
}


export function branchPolicyAutoReviewersSettingsToHclTerraform(struct?: BranchPolicyAutoReviewersSettingsOutputReference | BranchPolicyAutoReviewersSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_reviewer_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.autoReviewerIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_number_of_reviewers: {
      value: cdktf.numberToHclTerraform(struct!.minimumNumberOfReviewers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pathFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    submitter_can_vote: {
      value: cdktf.booleanToHclTerraform(struct!.submitterCanVote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope: {
      value: cdktf.listMapperHcl(branchPolicyAutoReviewersSettingsScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "BranchPolicyAutoReviewersSettingsScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BranchPolicyAutoReviewersSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BranchPolicyAutoReviewersSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoReviewerIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoReviewerIds = this._autoReviewerIds;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._minimumNumberOfReviewers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumNumberOfReviewers = this._minimumNumberOfReviewers;
    }
    if (this._pathFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathFilters = this._pathFilters;
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

  public set internalValue(value: BranchPolicyAutoReviewersSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoReviewerIds = undefined;
      this._message = undefined;
      this._minimumNumberOfReviewers = undefined;
      this._pathFilters = undefined;
      this._submitterCanVote = undefined;
      this._scope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoReviewerIds = value.autoReviewerIds;
      this._message = value.message;
      this._minimumNumberOfReviewers = value.minimumNumberOfReviewers;
      this._pathFilters = value.pathFilters;
      this._submitterCanVote = value.submitterCanVote;
      this._scope.internalValue = value.scope;
    }
  }

  // auto_reviewer_ids - computed: false, optional: false, required: true
  private _autoReviewerIds?: string[]; 
  public get autoReviewerIds() {
    return this.getListAttribute('auto_reviewer_ids');
  }
  public set autoReviewerIds(value: string[]) {
    this._autoReviewerIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoReviewerIdsInput() {
    return this._autoReviewerIds;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // minimum_number_of_reviewers - computed: false, optional: true, required: false
  private _minimumNumberOfReviewers?: number; 
  public get minimumNumberOfReviewers() {
    return this.getNumberAttribute('minimum_number_of_reviewers');
  }
  public set minimumNumberOfReviewers(value: number) {
    this._minimumNumberOfReviewers = value;
  }
  public resetMinimumNumberOfReviewers() {
    this._minimumNumberOfReviewers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumNumberOfReviewersInput() {
    return this._minimumNumberOfReviewers;
  }

  // path_filters - computed: false, optional: true, required: false
  private _pathFilters?: string[]; 
  public get pathFilters() {
    return this.getListAttribute('path_filters');
  }
  public set pathFilters(value: string[]) {
    this._pathFilters = value;
  }
  public resetPathFilters() {
    this._pathFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathFiltersInput() {
    return this._pathFilters;
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
  private _scope = new BranchPolicyAutoReviewersSettingsScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: BranchPolicyAutoReviewersSettingsScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}
export interface BranchPolicyAutoReviewersTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#create BranchPolicyAutoReviewers#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#delete BranchPolicyAutoReviewers#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#read BranchPolicyAutoReviewers#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#update BranchPolicyAutoReviewers#update}
  */
  readonly update?: string;
}

export function branchPolicyAutoReviewersTimeoutsToTerraform(struct?: BranchPolicyAutoReviewersTimeouts | cdktf.IResolvable): any {
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


export function branchPolicyAutoReviewersTimeoutsToHclTerraform(struct?: BranchPolicyAutoReviewersTimeouts | cdktf.IResolvable): any {
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

export class BranchPolicyAutoReviewersTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BranchPolicyAutoReviewersTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BranchPolicyAutoReviewersTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers azuredevops_branch_policy_auto_reviewers}
*/
export class BranchPolicyAutoReviewers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_branch_policy_auto_reviewers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BranchPolicyAutoReviewers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BranchPolicyAutoReviewers to import
  * @param importFromId The id of the existing BranchPolicyAutoReviewers that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BranchPolicyAutoReviewers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_branch_policy_auto_reviewers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/branch_policy_auto_reviewers azuredevops_branch_policy_auto_reviewers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchPolicyAutoReviewersConfig
  */
  public constructor(scope: Construct, id: string, config: BranchPolicyAutoReviewersConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_branch_policy_auto_reviewers',
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
  private _settings = new BranchPolicyAutoReviewersSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: BranchPolicyAutoReviewersSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BranchPolicyAutoReviewersTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BranchPolicyAutoReviewersTimeouts) {
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
      settings: branchPolicyAutoReviewersSettingsToTerraform(this._settings.internalValue),
      timeouts: branchPolicyAutoReviewersTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: branchPolicyAutoReviewersSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BranchPolicyAutoReviewersSettingsList",
      },
      timeouts: {
        value: branchPolicyAutoReviewersTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BranchPolicyAutoReviewersTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
