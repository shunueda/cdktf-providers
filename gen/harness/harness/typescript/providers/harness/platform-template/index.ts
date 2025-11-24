// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify comment with respect to changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#comments PlatformTemplate#comments}
  */
  readonly comments?: string;
  /**
  * Description of the entity. Description field is deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#description PlatformTemplate#description}
  */
  readonly description?: string;
  /**
  * Enable this flag for force deletion of template. It will delete the Harness entity even if your pipelines or other entities reference it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#force_delete PlatformTemplate#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#id PlatformTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#identifier PlatformTemplate#identifier}
  */
  readonly identifier: string;
  /**
  * Flag to set if importing from Git
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#import_from_git PlatformTemplate#import_from_git}
  */
  readonly importFromGit?: boolean | cdktf.IResolvable;
  /**
  * True if given version for template to be set as stable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#is_stable PlatformTemplate#is_stable}
  */
  readonly isStable?: boolean | cdktf.IResolvable;
  /**
  * Name of the Variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#name PlatformTemplate#name}
  */
  readonly name: string;
  /**
  * Organization Identifier for the Entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#org_id PlatformTemplate#org_id}
  */
  readonly orgId?: string;
  /**
  * Project Identifier for the Entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#project_id PlatformTemplate#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#tags PlatformTemplate#tags}
  */
  readonly tags?: string[];
  /**
  * Yaml for creating new Template. In YAML, to reference an entity at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference an entity at the account scope, prefix 'account` to the expression: account.{identifier}. For eg, to reference a connector with identifier 'connectorId' at the organization scope in a stage mention it as connectorRef: org.connectorId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#template_yaml PlatformTemplate#template_yaml}
  */
  readonly templateYaml?: string;
  /**
  * Version Label for Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#version PlatformTemplate#version}
  */
  readonly version: string;
  /**
  * git_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#git_details PlatformTemplate#git_details}
  */
  readonly gitDetails?: PlatformTemplateGitDetails;
  /**
  * git_import_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#git_import_details PlatformTemplate#git_import_details}
  */
  readonly gitImportDetails?: PlatformTemplateGitImportDetails;
  /**
  * template_import_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#template_import_request PlatformTemplate#template_import_request}
  */
  readonly templateImportRequest?: PlatformTemplateTemplateImportRequest;
}
export interface PlatformTemplateGitDetails {
  /**
  * Name of the default branch (this checks out a new branch titled by branch_name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#base_branch PlatformTemplate#base_branch}
  */
  readonly baseBranch?: string;
  /**
  * Name of the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#branch_name PlatformTemplate#branch_name}
  */
  readonly branchName?: string;
  /**
  * Commit message used for the merge commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#commit_message PlatformTemplate#commit_message}
  */
  readonly commitMessage?: string;
  /**
  * Identifier of the Harness Connector used for CRUD operations on the Entity. To reference a connector at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a connector at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#connector_ref PlatformTemplate#connector_ref}
  */
  readonly connectorRef?: string;
  /**
  * File path of the Entity in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#file_path PlatformTemplate#file_path}
  */
  readonly filePath?: string;
  /**
  * Last commit identifier (for Git Repositories other than Github). To be provided only when updating Pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#last_commit_id PlatformTemplate#last_commit_id}
  */
  readonly lastCommitId?: string;
  /**
  * Last object identifier (for Github). To be provided only when updating Pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#last_object_id PlatformTemplate#last_object_id}
  */
  readonly lastObjectId?: string;
  /**
  * Name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#repo_name PlatformTemplate#repo_name}
  */
  readonly repoName?: string;
  /**
  * Specifies whether the Entity is to be stored in Git or not. Possible values: INLINE, REMOTE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#store_type PlatformTemplate#store_type}
  */
  readonly storeType?: string;
}

export function platformTemplateGitDetailsToTerraform(struct?: PlatformTemplateGitDetailsOutputReference | PlatformTemplateGitDetails): any {
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
    last_commit_id: cdktf.stringToTerraform(struct!.lastCommitId),
    last_object_id: cdktf.stringToTerraform(struct!.lastObjectId),
    repo_name: cdktf.stringToTerraform(struct!.repoName),
    store_type: cdktf.stringToTerraform(struct!.storeType),
  }
}


export function platformTemplateGitDetailsToHclTerraform(struct?: PlatformTemplateGitDetailsOutputReference | PlatformTemplateGitDetails): any {
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

export class PlatformTemplateGitDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformTemplateGitDetails | undefined {
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
    if (this._lastCommitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCommitId = this._lastCommitId;
    }
    if (this._lastObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObjectId = this._lastObjectId;
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

  public set internalValue(value: PlatformTemplateGitDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseBranch = undefined;
      this._branchName = undefined;
      this._commitMessage = undefined;
      this._connectorRef = undefined;
      this._filePath = undefined;
      this._lastCommitId = undefined;
      this._lastObjectId = undefined;
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
      this._lastCommitId = value.lastCommitId;
      this._lastObjectId = value.lastObjectId;
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
export interface PlatformTemplateGitImportDetails {
  /**
  * Name of the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#branch_name PlatformTemplate#branch_name}
  */
  readonly branchName?: string;
  /**
  * Identifier of the Harness Connector used for importing entity from Git To reference a connector at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a connector at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#connector_ref PlatformTemplate#connector_ref}
  */
  readonly connectorRef?: string;
  /**
  * File path of the Entity in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#file_path PlatformTemplate#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#is_force_import PlatformTemplate#is_force_import}
  */
  readonly isForceImport?: boolean | cdktf.IResolvable;
  /**
  * Name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#repo_name PlatformTemplate#repo_name}
  */
  readonly repoName?: string;
}

export function platformTemplateGitImportDetailsToTerraform(struct?: PlatformTemplateGitImportDetailsOutputReference | PlatformTemplateGitImportDetails): any {
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


export function platformTemplateGitImportDetailsToHclTerraform(struct?: PlatformTemplateGitImportDetailsOutputReference | PlatformTemplateGitImportDetails): any {
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

export class PlatformTemplateGitImportDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformTemplateGitImportDetails | undefined {
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

  public set internalValue(value: PlatformTemplateGitImportDetails | undefined) {
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
export interface PlatformTemplateTemplateImportRequest {
  /**
  * Description of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#template_description PlatformTemplate#template_description}
  */
  readonly templateDescription?: string;
  /**
  * Name of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#template_name PlatformTemplate#template_name}
  */
  readonly templateName?: string;
  /**
  * Version of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#template_version PlatformTemplate#template_version}
  */
  readonly templateVersion?: string;
}

export function platformTemplateTemplateImportRequestToTerraform(struct?: PlatformTemplateTemplateImportRequestOutputReference | PlatformTemplateTemplateImportRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_description: cdktf.stringToTerraform(struct!.templateDescription),
    template_name: cdktf.stringToTerraform(struct!.templateName),
    template_version: cdktf.stringToTerraform(struct!.templateVersion),
  }
}


export function platformTemplateTemplateImportRequestToHclTerraform(struct?: PlatformTemplateTemplateImportRequestOutputReference | PlatformTemplateTemplateImportRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_description: {
      value: cdktf.stringToHclTerraform(struct!.templateDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_version: {
      value: cdktf.stringToHclTerraform(struct!.templateVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformTemplateTemplateImportRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformTemplateTemplateImportRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDescription = this._templateDescription;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._templateVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVersion = this._templateVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformTemplateTemplateImportRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateDescription = undefined;
      this._templateName = undefined;
      this._templateVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateDescription = value.templateDescription;
      this._templateName = value.templateName;
      this._templateVersion = value.templateVersion;
    }
  }

  // template_description - computed: false, optional: true, required: false
  private _templateDescription?: string; 
  public get templateDescription() {
    return this.getStringAttribute('template_description');
  }
  public set templateDescription(value: string) {
    this._templateDescription = value;
  }
  public resetTemplateDescription() {
    this._templateDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDescriptionInput() {
    return this._templateDescription;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // template_version - computed: false, optional: true, required: false
  private _templateVersion?: string; 
  public get templateVersion() {
    return this.getStringAttribute('template_version');
  }
  public set templateVersion(value: string) {
    this._templateVersion = value;
  }
  public resetTemplateVersion() {
    this._templateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVersionInput() {
    return this._templateVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template harness_platform_template}
*/
export class PlatformTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformTemplate to import
  * @param importFromId The id of the existing PlatformTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_template harness_platform_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_template',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._description = config.description;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._identifier = config.identifier;
    this._importFromGit = config.importFromGit;
    this._isStable = config.isStable;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._templateYaml = config.templateYaml;
    this._version = config.version;
    this._gitDetails.internalValue = config.gitDetails;
    this._gitImportDetails.internalValue = config.gitImportDetails;
    this._templateImportRequest.internalValue = config.templateImportRequest;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // force_delete - computed: true, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // is_stable - computed: true, optional: true, required: false
  private _isStable?: boolean | cdktf.IResolvable; 
  public get isStable() {
    return this.getBooleanAttribute('is_stable');
  }
  public set isStable(value: boolean | cdktf.IResolvable) {
    this._isStable = value;
  }
  public resetIsStable() {
    this._isStable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStableInput() {
    return this._isStable;
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

  // template_yaml - computed: true, optional: true, required: false
  private _templateYaml?: string; 
  public get templateYaml() {
    return this.getStringAttribute('template_yaml');
  }
  public set templateYaml(value: string) {
    this._templateYaml = value;
  }
  public resetTemplateYaml() {
    this._templateYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateYamlInput() {
    return this._templateYaml;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // git_details - computed: false, optional: true, required: false
  private _gitDetails = new PlatformTemplateGitDetailsOutputReference(this, "git_details");
  public get gitDetails() {
    return this._gitDetails;
  }
  public putGitDetails(value: PlatformTemplateGitDetails) {
    this._gitDetails.internalValue = value;
  }
  public resetGitDetails() {
    this._gitDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDetailsInput() {
    return this._gitDetails.internalValue;
  }

  // git_import_details - computed: false, optional: true, required: false
  private _gitImportDetails = new PlatformTemplateGitImportDetailsOutputReference(this, "git_import_details");
  public get gitImportDetails() {
    return this._gitImportDetails;
  }
  public putGitImportDetails(value: PlatformTemplateGitImportDetails) {
    this._gitImportDetails.internalValue = value;
  }
  public resetGitImportDetails() {
    this._gitImportDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitImportDetailsInput() {
    return this._gitImportDetails.internalValue;
  }

  // template_import_request - computed: false, optional: true, required: false
  private _templateImportRequest = new PlatformTemplateTemplateImportRequestOutputReference(this, "template_import_request");
  public get templateImportRequest() {
    return this._templateImportRequest;
  }
  public putTemplateImportRequest(value: PlatformTemplateTemplateImportRequest) {
    this._templateImportRequest.internalValue = value;
  }
  public resetTemplateImportRequest() {
    this._templateImportRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateImportRequestInput() {
    return this._templateImportRequest.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      description: cdktf.stringToTerraform(this._description),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      import_from_git: cdktf.booleanToTerraform(this._importFromGit),
      is_stable: cdktf.booleanToTerraform(this._isStable),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template_yaml: cdktf.stringToTerraform(this._templateYaml),
      version: cdktf.stringToTerraform(this._version),
      git_details: platformTemplateGitDetailsToTerraform(this._gitDetails.internalValue),
      git_import_details: platformTemplateGitImportDetailsToTerraform(this._gitImportDetails.internalValue),
      template_import_request: platformTemplateTemplateImportRequestToTerraform(this._templateImportRequest.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      is_stable: {
        value: cdktf.booleanToHclTerraform(this._isStable),
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
      template_yaml: {
        value: cdktf.stringToHclTerraform(this._templateYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_details: {
        value: platformTemplateGitDetailsToHclTerraform(this._gitDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformTemplateGitDetailsList",
      },
      git_import_details: {
        value: platformTemplateGitImportDetailsToHclTerraform(this._gitImportDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformTemplateGitImportDetailsList",
      },
      template_import_request: {
        value: platformTemplateTemplateImportRequestToHclTerraform(this._templateImportRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformTemplateTemplateImportRequestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
