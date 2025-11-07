// https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The project's access. Possible values: `PRIVATE`, `PUBLIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#access Project#access}
  */
  readonly access?: string;
  /**
  * Defines whether or not pull requests are enabled (GitHub)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#allow_pull_requests Project#allow_pull_requests}
  */
  readonly allowPullRequests?: boolean | cdktf.IResolvable;
  /**
  * The project's custom repository password. Needed when cloning from a custom repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#custom_repo_pass Project#custom_repo_pass}
  */
  readonly customRepoPass?: string;
  /**
  * The project's custom repository SSH key ID. Needed when cloning from a custom repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#custom_repo_ssh_key_id Project#custom_repo_ssh_key_id}
  */
  readonly customRepoSshKeyId?: number;
  /**
  * The project's custom repository URL. Needed when cloning from a custom repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#custom_repo_url Project#custom_repo_url}
  */
  readonly customRepoUrl?: string;
  /**
  * The project's custom repository user. Needed when cloning from a custom repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#custom_repo_user Project#custom_repo_user}
  */
  readonly customRepoUser?: string;
  /**
  * The project's display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#display_name Project#display_name}
  */
  readonly displayName: string;
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#domain Project#domain}
  */
  readonly domain: string;
  /**
  * The project's external project ID. Needed when cloning from GitHub, GitLab or BitBucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#external_project_id Project#external_project_id}
  */
  readonly externalProjectId?: string;
  /**
  * Defines whether or not fetch submodules in repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#fetch_submodules Project#fetch_submodules}
  */
  readonly fetchSubmodules?: boolean | cdktf.IResolvable;
  /**
  * The project's environmental key name for fetching submodules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#fetch_submodules_env_key Project#fetch_submodules_env_key}
  */
  readonly fetchSubmodulesEnvKey?: string;
  /**
  * The project's GitLab project ID. Needed when cloning from a GitLab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#git_lab_project_id Project#git_lab_project_id}
  */
  readonly gitLabProjectId?: string;
  /**
  * The project's integration ID. Needed when cloning from a GitHub, GitLab or BitBucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#integration_id Project#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Defines whether or not update default branch from external repository (GitHub, GitLab, BitBucket)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#update_default_branch_from_external Project#update_default_branch_from_external}
  */
  readonly updateDefaultBranchFromExternal?: boolean | cdktf.IResolvable;
  /**
  * Defines whether or not create GIT repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#without_repository Project#without_repository}
  */
  readonly withoutRepository?: boolean | cdktf.IResolvable;
}
export interface ProjectCreatedBy {
}

export function projectCreatedByToTerraform(struct?: ProjectCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectCreatedByToHclTerraform(struct?: ProjectCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getBooleanAttribute('admin');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getNumberAttribute('member_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // workspace_owner - computed: true, optional: false, required: false
  public get workspaceOwner() {
    return this.getBooleanAttribute('workspace_owner');
  }
}

export class ProjectCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): ProjectCreatedByOutputReference {
    return new ProjectCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project buddy_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/project buddy_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_project',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.37.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._allowPullRequests = config.allowPullRequests;
    this._customRepoPass = config.customRepoPass;
    this._customRepoSshKeyId = config.customRepoSshKeyId;
    this._customRepoUrl = config.customRepoUrl;
    this._customRepoUser = config.customRepoUser;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._externalProjectId = config.externalProjectId;
    this._fetchSubmodules = config.fetchSubmodules;
    this._fetchSubmodulesEnvKey = config.fetchSubmodulesEnvKey;
    this._gitLabProjectId = config.gitLabProjectId;
    this._integrationId = config.integrationId;
    this._updateDefaultBranchFromExternal = config.updateDefaultBranchFromExternal;
    this._withoutRepository = config.withoutRepository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // allow_pull_requests - computed: true, optional: true, required: false
  private _allowPullRequests?: boolean | cdktf.IResolvable; 
  public get allowPullRequests() {
    return this.getBooleanAttribute('allow_pull_requests');
  }
  public set allowPullRequests(value: boolean | cdktf.IResolvable) {
    this._allowPullRequests = value;
  }
  public resetAllowPullRequests() {
    this._allowPullRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPullRequestsInput() {
    return this._allowPullRequests;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new ProjectCreatedByList(this, "created_by", true);
  public get createdBy() {
    return this._createdBy;
  }

  // custom_repo_pass - computed: false, optional: true, required: false
  private _customRepoPass?: string; 
  public get customRepoPass() {
    return this.getStringAttribute('custom_repo_pass');
  }
  public set customRepoPass(value: string) {
    this._customRepoPass = value;
  }
  public resetCustomRepoPass() {
    this._customRepoPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRepoPassInput() {
    return this._customRepoPass;
  }

  // custom_repo_ssh_key_id - computed: false, optional: true, required: false
  private _customRepoSshKeyId?: number; 
  public get customRepoSshKeyId() {
    return this.getNumberAttribute('custom_repo_ssh_key_id');
  }
  public set customRepoSshKeyId(value: number) {
    this._customRepoSshKeyId = value;
  }
  public resetCustomRepoSshKeyId() {
    this._customRepoSshKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRepoSshKeyIdInput() {
    return this._customRepoSshKeyId;
  }

  // custom_repo_url - computed: false, optional: true, required: false
  private _customRepoUrl?: string; 
  public get customRepoUrl() {
    return this.getStringAttribute('custom_repo_url');
  }
  public set customRepoUrl(value: string) {
    this._customRepoUrl = value;
  }
  public resetCustomRepoUrl() {
    this._customRepoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRepoUrlInput() {
    return this._customRepoUrl;
  }

  // custom_repo_user - computed: false, optional: true, required: false
  private _customRepoUser?: string; 
  public get customRepoUser() {
    return this.getStringAttribute('custom_repo_user');
  }
  public set customRepoUser(value: string) {
    this._customRepoUser = value;
  }
  public resetCustomRepoUser() {
    this._customRepoUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRepoUserInput() {
    return this._customRepoUser;
  }

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // external_project_id - computed: false, optional: true, required: false
  private _externalProjectId?: string; 
  public get externalProjectId() {
    return this.getStringAttribute('external_project_id');
  }
  public set externalProjectId(value: string) {
    this._externalProjectId = value;
  }
  public resetExternalProjectId() {
    this._externalProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalProjectIdInput() {
    return this._externalProjectId;
  }

  // fetch_submodules - computed: true, optional: true, required: false
  private _fetchSubmodules?: boolean | cdktf.IResolvable; 
  public get fetchSubmodules() {
    return this.getBooleanAttribute('fetch_submodules');
  }
  public set fetchSubmodules(value: boolean | cdktf.IResolvable) {
    this._fetchSubmodules = value;
  }
  public resetFetchSubmodules() {
    this._fetchSubmodules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchSubmodulesInput() {
    return this._fetchSubmodules;
  }

  // fetch_submodules_env_key - computed: true, optional: true, required: false
  private _fetchSubmodulesEnvKey?: string; 
  public get fetchSubmodulesEnvKey() {
    return this.getStringAttribute('fetch_submodules_env_key');
  }
  public set fetchSubmodulesEnvKey(value: string) {
    this._fetchSubmodulesEnvKey = value;
  }
  public resetFetchSubmodulesEnvKey() {
    this._fetchSubmodulesEnvKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchSubmodulesEnvKeyInput() {
    return this._fetchSubmodulesEnvKey;
  }

  // git_lab_project_id - computed: false, optional: true, required: false
  private _gitLabProjectId?: string; 
  public get gitLabProjectId() {
    return this.getStringAttribute('git_lab_project_id');
  }
  public set gitLabProjectId(value: string) {
    this._gitLabProjectId = value;
  }
  public resetGitLabProjectId() {
    this._gitLabProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitLabProjectIdInput() {
    return this._gitLabProjectId;
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // http_repository - computed: true, optional: false, required: false
  public get httpRepository() {
    return this.getStringAttribute('http_repository');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ssh_repository - computed: true, optional: false, required: false
  public get sshRepository() {
    return this.getStringAttribute('ssh_repository');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // update_default_branch_from_external - computed: true, optional: true, required: false
  private _updateDefaultBranchFromExternal?: boolean | cdktf.IResolvable; 
  public get updateDefaultBranchFromExternal() {
    return this.getBooleanAttribute('update_default_branch_from_external');
  }
  public set updateDefaultBranchFromExternal(value: boolean | cdktf.IResolvable) {
    this._updateDefaultBranchFromExternal = value;
  }
  public resetUpdateDefaultBranchFromExternal() {
    this._updateDefaultBranchFromExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDefaultBranchFromExternalInput() {
    return this._updateDefaultBranchFromExternal;
  }

  // without_repository - computed: false, optional: true, required: false
  private _withoutRepository?: boolean | cdktf.IResolvable; 
  public get withoutRepository() {
    return this.getBooleanAttribute('without_repository');
  }
  public set withoutRepository(value: boolean | cdktf.IResolvable) {
    this._withoutRepository = value;
  }
  public resetWithoutRepository() {
    this._withoutRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withoutRepositoryInput() {
    return this._withoutRepository;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      allow_pull_requests: cdktf.booleanToTerraform(this._allowPullRequests),
      custom_repo_pass: cdktf.stringToTerraform(this._customRepoPass),
      custom_repo_ssh_key_id: cdktf.numberToTerraform(this._customRepoSshKeyId),
      custom_repo_url: cdktf.stringToTerraform(this._customRepoUrl),
      custom_repo_user: cdktf.stringToTerraform(this._customRepoUser),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain: cdktf.stringToTerraform(this._domain),
      external_project_id: cdktf.stringToTerraform(this._externalProjectId),
      fetch_submodules: cdktf.booleanToTerraform(this._fetchSubmodules),
      fetch_submodules_env_key: cdktf.stringToTerraform(this._fetchSubmodulesEnvKey),
      git_lab_project_id: cdktf.stringToTerraform(this._gitLabProjectId),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      update_default_branch_from_external: cdktf.booleanToTerraform(this._updateDefaultBranchFromExternal),
      without_repository: cdktf.booleanToTerraform(this._withoutRepository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_pull_requests: {
        value: cdktf.booleanToHclTerraform(this._allowPullRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_repo_pass: {
        value: cdktf.stringToHclTerraform(this._customRepoPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_repo_ssh_key_id: {
        value: cdktf.numberToHclTerraform(this._customRepoSshKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_repo_url: {
        value: cdktf.stringToHclTerraform(this._customRepoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_repo_user: {
        value: cdktf.stringToHclTerraform(this._customRepoUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_project_id: {
        value: cdktf.stringToHclTerraform(this._externalProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fetch_submodules: {
        value: cdktf.booleanToHclTerraform(this._fetchSubmodules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fetch_submodules_env_key: {
        value: cdktf.stringToHclTerraform(this._fetchSubmodulesEnvKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_lab_project_id: {
        value: cdktf.stringToHclTerraform(this._gitLabProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_default_branch_from_external: {
        value: cdktf.booleanToHclTerraform(this._updateDefaultBranchFromExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      without_repository: {
        value: cdktf.booleanToHclTerraform(this._withoutRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
