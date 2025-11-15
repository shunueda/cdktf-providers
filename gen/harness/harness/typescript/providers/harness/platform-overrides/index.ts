// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformOverridesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cluster ID to which the overrides are associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#cluster_id PlatformOverrides#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The environment ID to which the overrides are associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#env_id PlatformOverrides#env_id}
  */
  readonly envId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#id PlatformOverrides#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier of the override entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#identifier PlatformOverrides#identifier}
  */
  readonly identifier?: string;
  /**
  * import override from git
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#import_from_git PlatformOverrides#import_from_git}
  */
  readonly importFromGit?: boolean | cdktf.IResolvable;
  /**
  * The infrastructure ID to which the overrides are associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#infra_id PlatformOverrides#infra_id}
  */
  readonly infraId?: string;
  /**
  * force import override from remote even if same file path already exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#is_force_import PlatformOverrides#is_force_import}
  */
  readonly isForceImport?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#org_id PlatformOverrides#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#project_id PlatformOverrides#project_id}
  */
  readonly projectId?: string;
  /**
  * The service ID to which the overrides applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#service_id PlatformOverrides#service_id}
  */
  readonly serviceId?: string;
  /**
  * The type of the overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#type PlatformOverrides#type}
  */
  readonly type: string;
  /**
  * The yaml of the override entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#yaml PlatformOverrides#yaml}
  */
  readonly yaml?: string;
  /**
  * git_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#git_details PlatformOverrides#git_details}
  */
  readonly gitDetails?: PlatformOverridesGitDetails;
}
export interface PlatformOverridesGitDetails {
  /**
  * Name of the default branch (this checks out a new branch titled by branch_name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#base_branch PlatformOverrides#base_branch}
  */
  readonly baseBranch?: string;
  /**
  * Name of the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#branch PlatformOverrides#branch}
  */
  readonly branch?: string;
  /**
  * Commit message used for the merge commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#commit_message PlatformOverrides#commit_message}
  */
  readonly commitMessage?: string;
  /**
  * Identifier of the Harness Connector used for CRUD operations on the Entity. To reference a connector at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a connector at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#connector_ref PlatformOverrides#connector_ref}
  */
  readonly connectorRef?: string;
  /**
  * File path of the Entity in the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#file_path PlatformOverrides#file_path}
  */
  readonly filePath?: string;
  /**
  * If the repo is in harness code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#is_harness_code_repo PlatformOverrides#is_harness_code_repo}
  */
  readonly isHarnessCodeRepo?: boolean | cdktf.IResolvable;
  /**
  * If the branch being created is new
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#is_new_branch PlatformOverrides#is_new_branch}
  */
  readonly isNewBranch?: boolean | cdktf.IResolvable;
  /**
  * Last commit identifier (for Git Repositories other than Github). To be provided only when updating override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#last_commit_id PlatformOverrides#last_commit_id}
  */
  readonly lastCommitId?: string;
  /**
  * Last object identifier (for Github). To be provided only when updating override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#last_object_id PlatformOverrides#last_object_id}
  */
  readonly lastObjectId?: string;
  /**
  * Load service yaml from catch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#load_from_cache PlatformOverrides#load_from_cache}
  */
  readonly loadFromCache?: boolean | cdktf.IResolvable;
  /**
  * Load service yaml from fallback branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#load_from_fallback_branch PlatformOverrides#load_from_fallback_branch}
  */
  readonly loadFromFallbackBranch?: boolean | cdktf.IResolvable;
  /**
  * Name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#repo_name PlatformOverrides#repo_name}
  */
  readonly repoName?: string;
  /**
  * Specifies whether the Entity is to be stored in Git or not. Possible values: INLINE, REMOTE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#store_type PlatformOverrides#store_type}
  */
  readonly storeType?: string;
}

export function platformOverridesGitDetailsToTerraform(struct?: PlatformOverridesGitDetailsOutputReference | PlatformOverridesGitDetails): any {
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


export function platformOverridesGitDetailsToHclTerraform(struct?: PlatformOverridesGitDetailsOutputReference | PlatformOverridesGitDetails): any {
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

export class PlatformOverridesGitDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformOverridesGitDetails | undefined {
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

  public set internalValue(value: PlatformOverridesGitDetails | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides harness_platform_overrides}
*/
export class PlatformOverrides extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_overrides";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformOverrides resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformOverrides to import
  * @param importFromId The id of the existing PlatformOverrides that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformOverrides to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_overrides", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_overrides harness_platform_overrides} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformOverridesConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformOverridesConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_overrides',
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
    this._clusterId = config.clusterId;
    this._envId = config.envId;
    this._id = config.id;
    this._identifier = config.identifier;
    this._importFromGit = config.importFromGit;
    this._infraId = config.infraId;
    this._isForceImport = config.isForceImport;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._serviceId = config.serviceId;
    this._type = config.type;
    this._yaml = config.yaml;
    this._gitDetails.internalValue = config.gitDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
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

  // env_id - computed: false, optional: false, required: true
  private _envId?: string; 
  public get envId() {
    return this.getStringAttribute('env_id');
  }
  public set envId(value: string) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
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

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
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

  // infra_id - computed: true, optional: true, required: false
  private _infraId?: string; 
  public get infraId() {
    return this.getStringAttribute('infra_id');
  }
  public set infraId(value: string) {
    this._infraId = value;
  }
  public resetInfraId() {
    this._infraId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraIdInput() {
    return this._infraId;
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

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
  private _gitDetails = new PlatformOverridesGitDetailsOutputReference(this, "git_details");
  public get gitDetails() {
    return this._gitDetails;
  }
  public putGitDetails(value: PlatformOverridesGitDetails) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      env_id: cdktf.stringToTerraform(this._envId),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      import_from_git: cdktf.booleanToTerraform(this._importFromGit),
      infra_id: cdktf.stringToTerraform(this._infraId),
      is_force_import: cdktf.booleanToTerraform(this._isForceImport),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      service_id: cdktf.stringToTerraform(this._serviceId),
      type: cdktf.stringToTerraform(this._type),
      yaml: cdktf.stringToTerraform(this._yaml),
      git_details: platformOverridesGitDetailsToTerraform(this._gitDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_id: {
        value: cdktf.stringToHclTerraform(this._envId),
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
      infra_id: {
        value: cdktf.stringToHclTerraform(this._infraId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_force_import: {
        value: cdktf.booleanToHclTerraform(this._isForceImport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      yaml: {
        value: cdktf.stringToHclTerraform(this._yaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_details: {
        value: platformOverridesGitDetailsToHclTerraform(this._gitDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformOverridesGitDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
