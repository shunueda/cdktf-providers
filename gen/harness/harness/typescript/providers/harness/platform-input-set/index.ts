// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformInputSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#description PlatformInputSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#id PlatformInputSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#identifier PlatformInputSet#identifier}
  */
  readonly identifier: string;
  /**
  * Flag to set if importing from Git
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#import_from_git PlatformInputSet#import_from_git}
  */
  readonly importFromGit?: boolean | cdktf.IResolvable;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#name PlatformInputSet#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#org_id PlatformInputSet#org_id}
  */
  readonly orgId: string;
  /**
  * Identifier of the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#pipeline_id PlatformInputSet#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#project_id PlatformInputSet#project_id}
  */
  readonly projectId: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#tags PlatformInputSet#tags}
  */
  readonly tags?: string[];
  /**
  * Input Set YAML. In YAML, to reference an entity at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference an entity at the account scope, prefix 'account` to the expression: account.{identifier}. For eg, to reference a connector with identifier 'connectorId' at the organization scope in a stage mention it as connectorRef: org.connectorId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#yaml PlatformInputSet#yaml}
  */
  readonly yaml?: string;
  /**
  * git_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#git_details PlatformInputSet#git_details}
  */
  readonly gitDetails?: PlatformInputSetGitDetails;
  /**
  * git_import_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#git_import_info PlatformInputSet#git_import_info}
  */
  readonly gitImportInfo?: PlatformInputSetGitImportInfo;
  /**
  * input_set_import_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#input_set_import_request PlatformInputSet#input_set_import_request}
  */
  readonly inputSetImportRequest?: PlatformInputSetInputSetImportRequest;
}
export interface PlatformInputSetGitDetails {
  /**
  * Name of the default branch (this checks out a new branch titled by branch_name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#base_branch PlatformInputSet#base_branch}
  */
  readonly baseBranch?: string;
  /**
  * Name of the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#branch_name PlatformInputSet#branch_name}
  */
  readonly branchName?: string;
  /**
  * Commit message used for the merge commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#commit_message PlatformInputSet#commit_message}
  */
  readonly commitMessage?: string;
  /**
  * Identifier of the Harness Connector used for CRUD operations on the Entity. To reference a connector at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a connector at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#connector_ref PlatformInputSet#connector_ref}
  */
  readonly connectorRef?: string;
  /**
  * File path of the Entity in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#file_path PlatformInputSet#file_path}
  */
  readonly filePath?: string;
  /**
  * If the repo is harness code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#is_harness_code_repo PlatformInputSet#is_harness_code_repo}
  */
  readonly isHarnessCodeRepo?: boolean | cdktf.IResolvable;
  /**
  * Last commit identifier (for Git Repositories other than Github). To be provided only when updating Pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#last_commit_id PlatformInputSet#last_commit_id}
  */
  readonly lastCommitId?: string;
  /**
  * Last object identifier (for Github). To be provided only when updating Pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#last_object_id PlatformInputSet#last_object_id}
  */
  readonly lastObjectId?: string;
  /**
  * Connector reference for Parent Entity (Pipeline). To reference a connector at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a connector at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#parent_entity_connector_ref PlatformInputSet#parent_entity_connector_ref}
  */
  readonly parentEntityConnectorRef?: string;
  /**
  * Repository name for Parent Entity (Pipeline).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#parent_entity_repo_name PlatformInputSet#parent_entity_repo_name}
  */
  readonly parentEntityRepoName?: string;
  /**
  * Name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#repo_name PlatformInputSet#repo_name}
  */
  readonly repoName?: string;
  /**
  * Specifies whether the Entity is to be stored in Git or not. Possible values: INLINE, REMOTE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#store_type PlatformInputSet#store_type}
  */
  readonly storeType?: string;
}

export function platformInputSetGitDetailsToTerraform(struct?: PlatformInputSetGitDetailsOutputReference | PlatformInputSetGitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_branch: cdktf.stringToTerraform(struct!.baseBranch),
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    commit_message: cdktf.stringToTerraform(struct!.commitMessage),
    connector_ref: cdktf.stringToTerraform(struct!.connectorRef),
    file_path: cdktf.stringToTerraform(struct!.filePath),
    is_harness_code_repo: cdktf.booleanToTerraform(struct!.isHarnessCodeRepo),
    last_commit_id: cdktf.stringToTerraform(struct!.lastCommitId),
    last_object_id: cdktf.stringToTerraform(struct!.lastObjectId),
    parent_entity_connector_ref: cdktf.stringToTerraform(struct!.parentEntityConnectorRef),
    parent_entity_repo_name: cdktf.stringToTerraform(struct!.parentEntityRepoName),
    repo_name: cdktf.stringToTerraform(struct!.repoName),
    store_type: cdktf.stringToTerraform(struct!.storeType),
  }
}


export function platformInputSetGitDetailsToHclTerraform(struct?: PlatformInputSetGitDetailsOutputReference | PlatformInputSetGitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_branch: {
      value: cdktf.stringToHclTerraform(struct!.baseBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch_name: {
      value: cdktf.stringToHclTerraform(struct!.branchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_message: {
      value: cdktf.stringToHclTerraform(struct!.commitMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_ref: {
      value: cdktf.stringToHclTerraform(struct!.connectorRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_harness_code_repo: {
      value: cdktf.booleanToHclTerraform(struct!.isHarnessCodeRepo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_commit_id: {
      value: cdktf.stringToHclTerraform(struct!.lastCommitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_object_id: {
      value: cdktf.stringToHclTerraform(struct!.lastObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_entity_connector_ref: {
      value: cdktf.stringToHclTerraform(struct!.parentEntityConnectorRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_entity_repo_name: {
      value: cdktf.stringToHclTerraform(struct!.parentEntityRepoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_name: {
      value: cdktf.stringToHclTerraform(struct!.repoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_type: {
      value: cdktf.stringToHclTerraform(struct!.storeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformInputSetGitDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformInputSetGitDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseBranch = this._baseBranch;
    }
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._commitMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitMessage = this._commitMessage;
    }
    if (this._connectorRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorRef = this._connectorRef;
    }
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._isHarnessCodeRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHarnessCodeRepo = this._isHarnessCodeRepo;
    }
    if (this._lastCommitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCommitId = this._lastCommitId;
    }
    if (this._lastObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObjectId = this._lastObjectId;
    }
    if (this._parentEntityConnectorRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentEntityConnectorRef = this._parentEntityConnectorRef;
    }
    if (this._parentEntityRepoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentEntityRepoName = this._parentEntityRepoName;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    if (this._storeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeType = this._storeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformInputSetGitDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseBranch = undefined;
      this._branchName = undefined;
      this._commitMessage = undefined;
      this._connectorRef = undefined;
      this._filePath = undefined;
      this._isHarnessCodeRepo = undefined;
      this._lastCommitId = undefined;
      this._lastObjectId = undefined;
      this._parentEntityConnectorRef = undefined;
      this._parentEntityRepoName = undefined;
      this._repoName = undefined;
      this._storeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseBranch = value.baseBranch;
      this._branchName = value.branchName;
      this._commitMessage = value.commitMessage;
      this._connectorRef = value.connectorRef;
      this._filePath = value.filePath;
      this._isHarnessCodeRepo = value.isHarnessCodeRepo;
      this._lastCommitId = value.lastCommitId;
      this._lastObjectId = value.lastObjectId;
      this._parentEntityConnectorRef = value.parentEntityConnectorRef;
      this._parentEntityRepoName = value.parentEntityRepoName;
      this._repoName = value.repoName;
      this._storeType = value.storeType;
    }
  }

  // base_branch - computed: true, optional: true, required: false
  private _baseBranch?: string; 
  public get baseBranch() {
    return this.getStringAttribute('base_branch');
  }
  public set baseBranch(value: string) {
    this._baseBranch = value;
  }
  public resetBaseBranch() {
    this._baseBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseBranchInput() {
    return this._baseBranch;
  }

  // branch_name - computed: true, optional: true, required: false
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  public resetBranchName() {
    this._branchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // commit_message - computed: true, optional: true, required: false
  private _commitMessage?: string; 
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }
  public set commitMessage(value: string) {
    this._commitMessage = value;
  }
  public resetCommitMessage() {
    this._commitMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessageInput() {
    return this._commitMessage;
  }

  // connector_ref - computed: true, optional: true, required: false
  private _connectorRef?: string; 
  public get connectorRef() {
    return this.getStringAttribute('connector_ref');
  }
  public set connectorRef(value: string) {
    this._connectorRef = value;
  }
  public resetConnectorRef() {
    this._connectorRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorRefInput() {
    return this._connectorRef;
  }

  // file_path - computed: true, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // is_harness_code_repo - computed: true, optional: true, required: false
  private _isHarnessCodeRepo?: boolean | cdktf.IResolvable; 
  public get isHarnessCodeRepo() {
    return this.getBooleanAttribute('is_harness_code_repo');
  }
  public set isHarnessCodeRepo(value: boolean | cdktf.IResolvable) {
    this._isHarnessCodeRepo = value;
  }
  public resetIsHarnessCodeRepo() {
    this._isHarnessCodeRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHarnessCodeRepoInput() {
    return this._isHarnessCodeRepo;
  }

  // last_commit_id - computed: true, optional: true, required: false
  private _lastCommitId?: string; 
  public get lastCommitId() {
    return this.getStringAttribute('last_commit_id');
  }
  public set lastCommitId(value: string) {
    this._lastCommitId = value;
  }
  public resetLastCommitId() {
    this._lastCommitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCommitIdInput() {
    return this._lastCommitId;
  }

  // last_object_id - computed: true, optional: true, required: false
  private _lastObjectId?: string; 
  public get lastObjectId() {
    return this.getStringAttribute('last_object_id');
  }
  public set lastObjectId(value: string) {
    this._lastObjectId = value;
  }
  public resetLastObjectId() {
    this._lastObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObjectIdInput() {
    return this._lastObjectId;
  }

  // parent_entity_connector_ref - computed: true, optional: true, required: false
  private _parentEntityConnectorRef?: string; 
  public get parentEntityConnectorRef() {
    return this.getStringAttribute('parent_entity_connector_ref');
  }
  public set parentEntityConnectorRef(value: string) {
    this._parentEntityConnectorRef = value;
  }
  public resetParentEntityConnectorRef() {
    this._parentEntityConnectorRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentEntityConnectorRefInput() {
    return this._parentEntityConnectorRef;
  }

  // parent_entity_repo_name - computed: true, optional: true, required: false
  private _parentEntityRepoName?: string; 
  public get parentEntityRepoName() {
    return this.getStringAttribute('parent_entity_repo_name');
  }
  public set parentEntityRepoName(value: string) {
    this._parentEntityRepoName = value;
  }
  public resetParentEntityRepoName() {
    this._parentEntityRepoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentEntityRepoNameInput() {
    return this._parentEntityRepoName;
  }

  // repo_name - computed: true, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // store_type - computed: true, optional: true, required: false
  private _storeType?: string; 
  public get storeType() {
    return this.getStringAttribute('store_type');
  }
  public set storeType(value: string) {
    this._storeType = value;
  }
  public resetStoreType() {
    this._storeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeTypeInput() {
    return this._storeType;
  }
}
export interface PlatformInputSetGitImportInfo {
  /**
  * Name of the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#branch_name PlatformInputSet#branch_name}
  */
  readonly branchName?: string;
  /**
  * Identifier of the Harness Connector used for importing entity from Git To reference a connector at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a connector at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#connector_ref PlatformInputSet#connector_ref}
  */
  readonly connectorRef?: string;
  /**
  * File path of the Entity in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#file_path PlatformInputSet#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#is_force_import PlatformInputSet#is_force_import}
  */
  readonly isForceImport?: boolean | cdktf.IResolvable;
  /**
  * Name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#repo_name PlatformInputSet#repo_name}
  */
  readonly repoName?: string;
}

export function platformInputSetGitImportInfoToTerraform(struct?: PlatformInputSetGitImportInfoOutputReference | PlatformInputSetGitImportInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    connector_ref: cdktf.stringToTerraform(struct!.connectorRef),
    file_path: cdktf.stringToTerraform(struct!.filePath),
    is_force_import: cdktf.booleanToTerraform(struct!.isForceImport),
    repo_name: cdktf.stringToTerraform(struct!.repoName),
  }
}


export function platformInputSetGitImportInfoToHclTerraform(struct?: PlatformInputSetGitImportInfoOutputReference | PlatformInputSetGitImportInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_name: {
      value: cdktf.stringToHclTerraform(struct!.branchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_ref: {
      value: cdktf.stringToHclTerraform(struct!.connectorRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_force_import: {
      value: cdktf.booleanToHclTerraform(struct!.isForceImport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repo_name: {
      value: cdktf.stringToHclTerraform(struct!.repoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformInputSetGitImportInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformInputSetGitImportInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._connectorRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorRef = this._connectorRef;
    }
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._isForceImport !== undefined) {
      hasAnyValues = true;
      internalValueResult.isForceImport = this._isForceImport;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformInputSetGitImportInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchName = undefined;
      this._connectorRef = undefined;
      this._filePath = undefined;
      this._isForceImport = undefined;
      this._repoName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchName = value.branchName;
      this._connectorRef = value.connectorRef;
      this._filePath = value.filePath;
      this._isForceImport = value.isForceImport;
      this._repoName = value.repoName;
    }
  }

  // branch_name - computed: false, optional: true, required: false
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  public resetBranchName() {
    this._branchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // connector_ref - computed: false, optional: true, required: false
  private _connectorRef?: string; 
  public get connectorRef() {
    return this.getStringAttribute('connector_ref');
  }
  public set connectorRef(value: string) {
    this._connectorRef = value;
  }
  public resetConnectorRef() {
    this._connectorRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorRefInput() {
    return this._connectorRef;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // is_force_import - computed: false, optional: true, required: false
  private _isForceImport?: boolean | cdktf.IResolvable; 
  public get isForceImport() {
    return this.getBooleanAttribute('is_force_import');
  }
  public set isForceImport(value: boolean | cdktf.IResolvable) {
    this._isForceImport = value;
  }
  public resetIsForceImport() {
    this._isForceImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForceImportInput() {
    return this._isForceImport;
  }

  // repo_name - computed: false, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }
}
export interface PlatformInputSetInputSetImportRequest {
  /**
  * Description of the input set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#input_set_description PlatformInputSet#input_set_description}
  */
  readonly inputSetDescription?: string;
  /**
  * Name of the input set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#input_set_name PlatformInputSet#input_set_name}
  */
  readonly inputSetName?: string;
}

export function platformInputSetInputSetImportRequestToTerraform(struct?: PlatformInputSetInputSetImportRequestOutputReference | PlatformInputSetInputSetImportRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_set_description: cdktf.stringToTerraform(struct!.inputSetDescription),
    input_set_name: cdktf.stringToTerraform(struct!.inputSetName),
  }
}


export function platformInputSetInputSetImportRequestToHclTerraform(struct?: PlatformInputSetInputSetImportRequestOutputReference | PlatformInputSetInputSetImportRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_set_description: {
      value: cdktf.stringToHclTerraform(struct!.inputSetDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_set_name: {
      value: cdktf.stringToHclTerraform(struct!.inputSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformInputSetInputSetImportRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformInputSetInputSetImportRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputSetDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSetDescription = this._inputSetDescription;
    }
    if (this._inputSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSetName = this._inputSetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformInputSetInputSetImportRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputSetDescription = undefined;
      this._inputSetName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputSetDescription = value.inputSetDescription;
      this._inputSetName = value.inputSetName;
    }
  }

  // input_set_description - computed: false, optional: true, required: false
  private _inputSetDescription?: string; 
  public get inputSetDescription() {
    return this.getStringAttribute('input_set_description');
  }
  public set inputSetDescription(value: string) {
    this._inputSetDescription = value;
  }
  public resetInputSetDescription() {
    this._inputSetDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSetDescriptionInput() {
    return this._inputSetDescription;
  }

  // input_set_name - computed: false, optional: true, required: false
  private _inputSetName?: string; 
  public get inputSetName() {
    return this.getStringAttribute('input_set_name');
  }
  public set inputSetName(value: string) {
    this._inputSetName = value;
  }
  public resetInputSetName() {
    this._inputSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSetNameInput() {
    return this._inputSetName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set harness_platform_input_set}
*/
export class PlatformInputSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_input_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformInputSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformInputSet to import
  * @param importFromId The id of the existing PlatformInputSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformInputSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_input_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_input_set harness_platform_input_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformInputSetConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformInputSetConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_input_set',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
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
    this._importFromGit = config.importFromGit;
    this._name = config.name;
    this._orgId = config.orgId;
    this._pipelineId = config.pipelineId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._yaml = config.yaml;
    this._gitDetails.internalValue = config.gitDetails;
    this._gitImportInfo.internalValue = config.gitImportInfo;
    this._inputSetImportRequest.internalValue = config.inputSetImportRequest;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // import_from_git - computed: false, optional: true, required: false
  private _importFromGit?: boolean | cdktf.IResolvable; 
  public get importFromGit() {
    return this.getBooleanAttribute('import_from_git');
  }
  public set importFromGit(value: boolean | cdktf.IResolvable) {
    this._importFromGit = value;
  }
  public resetImportFromGit() {
    this._importFromGit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importFromGitInput() {
    return this._importFromGit;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
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

  // tags - computed: false, optional: true, required: false
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

  // yaml - computed: true, optional: true, required: false
  private _yaml?: string; 
  public get yaml() {
    return this.getStringAttribute('yaml');
  }
  public set yaml(value: string) {
    this._yaml = value;
  }
  public resetYaml() {
    this._yaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlInput() {
    return this._yaml;
  }

  // git_details - computed: false, optional: true, required: false
  private _gitDetails = new PlatformInputSetGitDetailsOutputReference(this, "git_details");
  public get gitDetails() {
    return this._gitDetails;
  }
  public putGitDetails(value: PlatformInputSetGitDetails) {
    this._gitDetails.internalValue = value;
  }
  public resetGitDetails() {
    this._gitDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDetailsInput() {
    return this._gitDetails.internalValue;
  }

  // git_import_info - computed: false, optional: true, required: false
  private _gitImportInfo = new PlatformInputSetGitImportInfoOutputReference(this, "git_import_info");
  public get gitImportInfo() {
    return this._gitImportInfo;
  }
  public putGitImportInfo(value: PlatformInputSetGitImportInfo) {
    this._gitImportInfo.internalValue = value;
  }
  public resetGitImportInfo() {
    this._gitImportInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitImportInfoInput() {
    return this._gitImportInfo.internalValue;
  }

  // input_set_import_request - computed: false, optional: true, required: false
  private _inputSetImportRequest = new PlatformInputSetInputSetImportRequestOutputReference(this, "input_set_import_request");
  public get inputSetImportRequest() {
    return this._inputSetImportRequest;
  }
  public putInputSetImportRequest(value: PlatformInputSetInputSetImportRequest) {
    this._inputSetImportRequest.internalValue = value;
  }
  public resetInputSetImportRequest() {
    this._inputSetImportRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSetImportRequestInput() {
    return this._inputSetImportRequest.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      import_from_git: cdktf.booleanToTerraform(this._importFromGit),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      yaml: cdktf.stringToTerraform(this._yaml),
      git_details: platformInputSetGitDetailsToTerraform(this._gitDetails.internalValue),
      git_import_info: platformInputSetGitImportInfoToTerraform(this._gitImportInfo.internalValue),
      input_set_import_request: platformInputSetInputSetImportRequestToTerraform(this._inputSetImportRequest.internalValue),
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
      import_from_git: {
        value: cdktf.booleanToHclTerraform(this._importFromGit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      pipeline_id: {
        value: cdktf.stringToHclTerraform(this._pipelineId),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      yaml: {
        value: cdktf.stringToHclTerraform(this._yaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_details: {
        value: platformInputSetGitDetailsToHclTerraform(this._gitDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformInputSetGitDetailsList",
      },
      git_import_info: {
        value: platformInputSetGitImportInfoToHclTerraform(this._gitImportInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformInputSetGitImportInfoList",
      },
      input_set_import_request: {
        value: platformInputSetInputSetImportRequestToHclTerraform(this._inputSetImportRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformInputSetInputSetImportRequestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
