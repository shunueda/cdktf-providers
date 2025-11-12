// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#description PlatformService#description}
  */
  readonly description?: string;
  /**
  * to fetch resoled service yaml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#fetch_resolved_yaml PlatformService#fetch_resolved_yaml}
  */
  readonly fetchResolvedYaml?: boolean | cdktf.IResolvable;
  /**
  * Enable this flag for force deletion of service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#force_delete PlatformService#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#id PlatformService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#identifier PlatformService#identifier}
  */
  readonly identifier: string;
  /**
  * import service from git
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#import_from_git PlatformService#import_from_git}
  */
  readonly importFromGit?: boolean | cdktf.IResolvable;
  /**
  * force import service from remote even if same file path already exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#is_force_import PlatformService#is_force_import}
  */
  readonly isForceImport?: boolean | cdktf.IResolvable;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#name PlatformService#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#org_id PlatformService#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#project_id PlatformService#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#tags PlatformService#tags}
  */
  readonly tags?: string[];
  /**
  * Service YAML. In YAML, to reference an entity at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference an entity at the account scope, prefix 'account` to the expression: account.{identifier}. For eg, to reference a connector with identifier 'connectorId' at the organization scope in a stage mention it as connectorRef: org.connectorId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#yaml PlatformService#yaml}
  */
  readonly yaml?: string;
  /**
  * git_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#git_details PlatformService#git_details}
  */
  readonly gitDetails?: PlatformServiceGitDetails;
}
export interface PlatformServiceGitDetails {
  /**
  * Name of the default branch (this checks out a new branch titled by branch_name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#base_branch PlatformService#base_branch}
  */
  readonly baseBranch?: string;
  /**
  * Name of the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#branch PlatformService#branch}
  */
  readonly branch?: string;
  /**
  * Commit message used for the merge commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#commit_message PlatformService#commit_message}
  */
  readonly commitMessage?: string;
  /**
  * Identifier of the Harness Connector used for CRUD operations on the Entity. To reference a connector at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a connector at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#connector_ref PlatformService#connector_ref}
  */
  readonly connectorRef?: string;
  /**
  * File path of the Entity in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#file_path PlatformService#file_path}
  */
  readonly filePath?: string;
  /**
  * If the repo is harness code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#is_harness_code_repo PlatformService#is_harness_code_repo}
  */
  readonly isHarnessCodeRepo?: boolean | cdktf.IResolvable;
  /**
  * If the branch being created is new
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#is_new_branch PlatformService#is_new_branch}
  */
  readonly isNewBranch?: boolean | cdktf.IResolvable;
  /**
  * Last commit identifier (for Git Repositories other than Github). To be provided only when updating Pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#last_commit_id PlatformService#last_commit_id}
  */
  readonly lastCommitId?: string;
  /**
  * Last object identifier (for Github). To be provided only when updating Pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#last_object_id PlatformService#last_object_id}
  */
  readonly lastObjectId?: string;
  /**
  * Load service yaml from catch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#load_from_cache PlatformService#load_from_cache}
  */
  readonly loadFromCache?: boolean | cdktf.IResolvable;
  /**
  * Load service yaml from fallback branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#load_from_fallback_branch PlatformService#load_from_fallback_branch}
  */
  readonly loadFromFallbackBranch?: boolean | cdktf.IResolvable;
  /**
  * Name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#repo_name PlatformService#repo_name}
  */
  readonly repoName?: string;
  /**
  * Specifies whether the Entity is to be stored in Git or not. Possible values: INLINE, REMOTE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#store_type PlatformService#store_type}
  */
  readonly storeType?: string;
}

export function platformServiceGitDetailsToTerraform(struct?: PlatformServiceGitDetailsOutputReference | PlatformServiceGitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_branch: cdktf.stringToTerraform(struct!.baseBranch),
    branch: cdktf.stringToTerraform(struct!.branch),
    commit_message: cdktf.stringToTerraform(struct!.commitMessage),
    connector_ref: cdktf.stringToTerraform(struct!.connectorRef),
    file_path: cdktf.stringToTerraform(struct!.filePath),
    is_harness_code_repo: cdktf.booleanToTerraform(struct!.isHarnessCodeRepo),
    is_new_branch: cdktf.booleanToTerraform(struct!.isNewBranch),
    last_commit_id: cdktf.stringToTerraform(struct!.lastCommitId),
    last_object_id: cdktf.stringToTerraform(struct!.lastObjectId),
    load_from_cache: cdktf.booleanToTerraform(struct!.loadFromCache),
    load_from_fallback_branch: cdktf.booleanToTerraform(struct!.loadFromFallbackBranch),
    repo_name: cdktf.stringToTerraform(struct!.repoName),
    store_type: cdktf.stringToTerraform(struct!.storeType),
  }
}


export function platformServiceGitDetailsToHclTerraform(struct?: PlatformServiceGitDetailsOutputReference | PlatformServiceGitDetails): any {
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
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
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
    is_new_branch: {
      value: cdktf.booleanToHclTerraform(struct!.isNewBranch),
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
    load_from_cache: {
      value: cdktf.booleanToHclTerraform(struct!.loadFromCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_from_fallback_branch: {
      value: cdktf.booleanToHclTerraform(struct!.loadFromFallbackBranch),
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

export class PlatformServiceGitDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformServiceGitDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseBranch = this._baseBranch;
    }
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
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
    if (this._isNewBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNewBranch = this._isNewBranch;
    }
    if (this._lastCommitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCommitId = this._lastCommitId;
    }
    if (this._lastObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObjectId = this._lastObjectId;
    }
    if (this._loadFromCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadFromCache = this._loadFromCache;
    }
    if (this._loadFromFallbackBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadFromFallbackBranch = this._loadFromFallbackBranch;
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

  public set internalValue(value: PlatformServiceGitDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseBranch = undefined;
      this._branch = undefined;
      this._commitMessage = undefined;
      this._connectorRef = undefined;
      this._filePath = undefined;
      this._isHarnessCodeRepo = undefined;
      this._isNewBranch = undefined;
      this._lastCommitId = undefined;
      this._lastObjectId = undefined;
      this._loadFromCache = undefined;
      this._loadFromFallbackBranch = undefined;
      this._repoName = undefined;
      this._storeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseBranch = value.baseBranch;
      this._branch = value.branch;
      this._commitMessage = value.commitMessage;
      this._connectorRef = value.connectorRef;
      this._filePath = value.filePath;
      this._isHarnessCodeRepo = value.isHarnessCodeRepo;
      this._isNewBranch = value.isNewBranch;
      this._lastCommitId = value.lastCommitId;
      this._lastObjectId = value.lastObjectId;
      this._loadFromCache = value.loadFromCache;
      this._loadFromFallbackBranch = value.loadFromFallbackBranch;
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

  // branch - computed: true, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
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

  // is_new_branch - computed: true, optional: true, required: false
  private _isNewBranch?: boolean | cdktf.IResolvable; 
  public get isNewBranch() {
    return this.getBooleanAttribute('is_new_branch');
  }
  public set isNewBranch(value: boolean | cdktf.IResolvable) {
    this._isNewBranch = value;
  }
  public resetIsNewBranch() {
    this._isNewBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNewBranchInput() {
    return this._isNewBranch;
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

  // load_from_cache - computed: true, optional: true, required: false
  private _loadFromCache?: boolean | cdktf.IResolvable; 
  public get loadFromCache() {
    return this.getBooleanAttribute('load_from_cache');
  }
  public set loadFromCache(value: boolean | cdktf.IResolvable) {
    this._loadFromCache = value;
  }
  public resetLoadFromCache() {
    this._loadFromCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadFromCacheInput() {
    return this._loadFromCache;
  }

  // load_from_fallback_branch - computed: true, optional: true, required: false
  private _loadFromFallbackBranch?: boolean | cdktf.IResolvable; 
  public get loadFromFallbackBranch() {
    return this.getBooleanAttribute('load_from_fallback_branch');
  }
  public set loadFromFallbackBranch(value: boolean | cdktf.IResolvable) {
    this._loadFromFallbackBranch = value;
  }
  public resetLoadFromFallbackBranch() {
    this._loadFromFallbackBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadFromFallbackBranchInput() {
    return this._loadFromFallbackBranch;
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

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service harness_platform_service}
*/
export class PlatformService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformService to import
  * @param importFromId The id of the existing PlatformService that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_service harness_platform_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformServiceConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_service',
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
    this._fetchResolvedYaml = config.fetchResolvedYaml;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._identifier = config.identifier;
    this._importFromGit = config.importFromGit;
    this._isForceImport = config.isForceImport;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._yaml = config.yaml;
    this._gitDetails.internalValue = config.gitDetails;
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

  // fetch_resolved_yaml - computed: true, optional: true, required: false
  private _fetchResolvedYaml?: boolean | cdktf.IResolvable; 
  public get fetchResolvedYaml() {
    return this.getBooleanAttribute('fetch_resolved_yaml');
  }
  public set fetchResolvedYaml(value: boolean | cdktf.IResolvable) {
    this._fetchResolvedYaml = value;
  }
  public resetFetchResolvedYaml() {
    this._fetchResolvedYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchResolvedYamlInput() {
    return this._fetchResolvedYaml;
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

  // import_from_git - computed: true, optional: true, required: false
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

  // is_force_import - computed: true, optional: true, required: false
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
  private _gitDetails = new PlatformServiceGitDetailsOutputReference(this, "git_details");
  public get gitDetails() {
    return this._gitDetails;
  }
  public putGitDetails(value: PlatformServiceGitDetails) {
    this._gitDetails.internalValue = value;
  }
  public resetGitDetails() {
    this._gitDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDetailsInput() {
    return this._gitDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      fetch_resolved_yaml: cdktf.booleanToTerraform(this._fetchResolvedYaml),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      import_from_git: cdktf.booleanToTerraform(this._importFromGit),
      is_force_import: cdktf.booleanToTerraform(this._isForceImport),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      yaml: cdktf.stringToTerraform(this._yaml),
      git_details: platformServiceGitDetailsToTerraform(this._gitDetails.internalValue),
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
      fetch_resolved_yaml: {
        value: cdktf.booleanToHclTerraform(this._fetchResolvedYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      is_force_import: {
        value: cdktf.booleanToHclTerraform(this._isForceImport),
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
      yaml: {
        value: cdktf.stringToHclTerraform(this._yaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_details: {
        value: platformServiceGitDetailsToHclTerraform(this._gitDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformServiceGitDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
