// https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectGitRepoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#allow_warnings ProjectGitRepo#allow_warnings}
  */
  readonly allowWarnings?: boolean | cdktf.IResolvable;
  /**
  * Branch which will be deployed to Production after creation of Project Resource. Required: Advanced Deploy Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#deploy_branch ProjectGitRepo#deploy_branch}
  */
  readonly deployBranch?: string;
  /**
  * Secret Value for Authentication Webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#deploy_secret ProjectGitRepo#deploy_secret}
  */
  readonly deploySecret?: string;
  /**
  * Git password for HTTPS authentication. For SSH authentication skip this option and create project_git_deploy_key resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#git_password ProjectGitRepo#git_password}
  */
  readonly gitPassword?: string;
  /**
  * Git production branch name. Defaults to ~~master~~ main. Supported only in Looker 21.0 and higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#git_production_branch_name ProjectGitRepo#git_production_branch_name}
  */
  readonly gitProductionBranchName?: string;
  /**
  * Advanced Deploy Mode - Required for Webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#git_release_mgmt_enabled ProjectGitRepo#git_release_mgmt_enabled}
  */
  readonly gitReleaseMgmtEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#git_remote_url ProjectGitRepo#git_remote_url}
  */
  readonly gitRemoteUrl: string;
  /**
  * Name of the git service provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#git_service_name ProjectGitRepo#git_service_name}
  */
  readonly gitServiceName: string;
  /**
  * Git username for HTTPS authentication. For SSH authentication skip this option and create project_git_deploy_key resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#git_username ProjectGitRepo#git_username}
  */
  readonly gitUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#id ProjectGitRepo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#is_example ProjectGitRepo#is_example}
  */
  readonly isExample?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#project_id ProjectGitRepo#project_id}
  */
  readonly projectId: string;
  /**
  * The git pull request policy for this project. Valid values are: `off`, `links`, `recommended`, `required`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#pull_request_mode ProjectGitRepo#pull_request_mode}
  */
  readonly pullRequestMode?: string;
  /**
  * If true, the project uses a git cookie for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#use_git_cookie_auth ProjectGitRepo#use_git_cookie_auth}
  */
  readonly useGitCookieAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#validation_required ProjectGitRepo#validation_required}
  */
  readonly validationRequired?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo looker_project_git_repo}
*/
export class ProjectGitRepo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "looker_project_git_repo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectGitRepo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectGitRepo to import
  * @param importFromId The id of the existing ProjectGitRepo that should be imported. Refer to the {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectGitRepo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "looker_project_git_repo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/project_git_repo looker_project_git_repo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectGitRepoConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectGitRepoConfig) {
    super(scope, id, {
      terraformResourceType: 'looker_project_git_repo',
      terraformGeneratorMetadata: {
        providerName: 'looker',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowWarnings = config.allowWarnings;
    this._deployBranch = config.deployBranch;
    this._deploySecret = config.deploySecret;
    this._gitPassword = config.gitPassword;
    this._gitProductionBranchName = config.gitProductionBranchName;
    this._gitReleaseMgmtEnabled = config.gitReleaseMgmtEnabled;
    this._gitRemoteUrl = config.gitRemoteUrl;
    this._gitServiceName = config.gitServiceName;
    this._gitUsername = config.gitUsername;
    this._id = config.id;
    this._isExample = config.isExample;
    this._projectId = config.projectId;
    this._pullRequestMode = config.pullRequestMode;
    this._useGitCookieAuth = config.useGitCookieAuth;
    this._validationRequired = config.validationRequired;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_warnings - computed: false, optional: true, required: false
  private _allowWarnings?: boolean | cdktf.IResolvable; 
  public get allowWarnings() {
    return this.getBooleanAttribute('allow_warnings');
  }
  public set allowWarnings(value: boolean | cdktf.IResolvable) {
    this._allowWarnings = value;
  }
  public resetAllowWarnings() {
    this._allowWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWarningsInput() {
    return this._allowWarnings;
  }

  // deploy_branch - computed: false, optional: true, required: false
  private _deployBranch?: string; 
  public get deployBranch() {
    return this.getStringAttribute('deploy_branch');
  }
  public set deployBranch(value: string) {
    this._deployBranch = value;
  }
  public resetDeployBranch() {
    this._deployBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployBranchInput() {
    return this._deployBranch;
  }

  // deploy_secret - computed: false, optional: true, required: false
  private _deploySecret?: string; 
  public get deploySecret() {
    return this.getStringAttribute('deploy_secret');
  }
  public set deploySecret(value: string) {
    this._deploySecret = value;
  }
  public resetDeploySecret() {
    this._deploySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploySecretInput() {
    return this._deploySecret;
  }

  // git_password - computed: false, optional: true, required: false
  private _gitPassword?: string; 
  public get gitPassword() {
    return this.getStringAttribute('git_password');
  }
  public set gitPassword(value: string) {
    this._gitPassword = value;
  }
  public resetGitPassword() {
    this._gitPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitPasswordInput() {
    return this._gitPassword;
  }

  // git_production_branch_name - computed: false, optional: true, required: false
  private _gitProductionBranchName?: string; 
  public get gitProductionBranchName() {
    return this.getStringAttribute('git_production_branch_name');
  }
  public set gitProductionBranchName(value: string) {
    this._gitProductionBranchName = value;
  }
  public resetGitProductionBranchName() {
    this._gitProductionBranchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProductionBranchNameInput() {
    return this._gitProductionBranchName;
  }

  // git_release_mgmt_enabled - computed: false, optional: true, required: false
  private _gitReleaseMgmtEnabled?: boolean | cdktf.IResolvable; 
  public get gitReleaseMgmtEnabled() {
    return this.getBooleanAttribute('git_release_mgmt_enabled');
  }
  public set gitReleaseMgmtEnabled(value: boolean | cdktf.IResolvable) {
    this._gitReleaseMgmtEnabled = value;
  }
  public resetGitReleaseMgmtEnabled() {
    this._gitReleaseMgmtEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitReleaseMgmtEnabledInput() {
    return this._gitReleaseMgmtEnabled;
  }

  // git_remote_url - computed: false, optional: false, required: true
  private _gitRemoteUrl?: string; 
  public get gitRemoteUrl() {
    return this.getStringAttribute('git_remote_url');
  }
  public set gitRemoteUrl(value: string) {
    this._gitRemoteUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRemoteUrlInput() {
    return this._gitRemoteUrl;
  }

  // git_service_name - computed: false, optional: false, required: true
  private _gitServiceName?: string; 
  public get gitServiceName() {
    return this.getStringAttribute('git_service_name');
  }
  public set gitServiceName(value: string) {
    this._gitServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitServiceNameInput() {
    return this._gitServiceName;
  }

  // git_username - computed: false, optional: true, required: false
  private _gitUsername?: string; 
  public get gitUsername() {
    return this.getStringAttribute('git_username');
  }
  public set gitUsername(value: string) {
    this._gitUsername = value;
  }
  public resetGitUsername() {
    this._gitUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUsernameInput() {
    return this._gitUsername;
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

  // is_example - computed: false, optional: true, required: false
  private _isExample?: boolean | cdktf.IResolvable; 
  public get isExample() {
    return this.getBooleanAttribute('is_example');
  }
  public set isExample(value: boolean | cdktf.IResolvable) {
    this._isExample = value;
  }
  public resetIsExample() {
    this._isExample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExampleInput() {
    return this._isExample;
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

  // pull_request_mode - computed: false, optional: true, required: false
  private _pullRequestMode?: string; 
  public get pullRequestMode() {
    return this.getStringAttribute('pull_request_mode');
  }
  public set pullRequestMode(value: string) {
    this._pullRequestMode = value;
  }
  public resetPullRequestMode() {
    this._pullRequestMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestModeInput() {
    return this._pullRequestMode;
  }

  // use_git_cookie_auth - computed: false, optional: true, required: false
  private _useGitCookieAuth?: boolean | cdktf.IResolvable; 
  public get useGitCookieAuth() {
    return this.getBooleanAttribute('use_git_cookie_auth');
  }
  public set useGitCookieAuth(value: boolean | cdktf.IResolvable) {
    this._useGitCookieAuth = value;
  }
  public resetUseGitCookieAuth() {
    this._useGitCookieAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGitCookieAuthInput() {
    return this._useGitCookieAuth;
  }

  // validation_required - computed: false, optional: true, required: false
  private _validationRequired?: boolean | cdktf.IResolvable; 
  public get validationRequired() {
    return this.getBooleanAttribute('validation_required');
  }
  public set validationRequired(value: boolean | cdktf.IResolvable) {
    this._validationRequired = value;
  }
  public resetValidationRequired() {
    this._validationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRequiredInput() {
    return this._validationRequired;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_warnings: cdktf.booleanToTerraform(this._allowWarnings),
      deploy_branch: cdktf.stringToTerraform(this._deployBranch),
      deploy_secret: cdktf.stringToTerraform(this._deploySecret),
      git_password: cdktf.stringToTerraform(this._gitPassword),
      git_production_branch_name: cdktf.stringToTerraform(this._gitProductionBranchName),
      git_release_mgmt_enabled: cdktf.booleanToTerraform(this._gitReleaseMgmtEnabled),
      git_remote_url: cdktf.stringToTerraform(this._gitRemoteUrl),
      git_service_name: cdktf.stringToTerraform(this._gitServiceName),
      git_username: cdktf.stringToTerraform(this._gitUsername),
      id: cdktf.stringToTerraform(this._id),
      is_example: cdktf.booleanToTerraform(this._isExample),
      project_id: cdktf.stringToTerraform(this._projectId),
      pull_request_mode: cdktf.stringToTerraform(this._pullRequestMode),
      use_git_cookie_auth: cdktf.booleanToTerraform(this._useGitCookieAuth),
      validation_required: cdktf.booleanToTerraform(this._validationRequired),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_warnings: {
        value: cdktf.booleanToHclTerraform(this._allowWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deploy_branch: {
        value: cdktf.stringToHclTerraform(this._deployBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_secret: {
        value: cdktf.stringToHclTerraform(this._deploySecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_password: {
        value: cdktf.stringToHclTerraform(this._gitPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_production_branch_name: {
        value: cdktf.stringToHclTerraform(this._gitProductionBranchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_release_mgmt_enabled: {
        value: cdktf.booleanToHclTerraform(this._gitReleaseMgmtEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_remote_url: {
        value: cdktf.stringToHclTerraform(this._gitRemoteUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_service_name: {
        value: cdktf.stringToHclTerraform(this._gitServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_username: {
        value: cdktf.stringToHclTerraform(this._gitUsername),
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
      is_example: {
        value: cdktf.booleanToHclTerraform(this._isExample),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_request_mode: {
        value: cdktf.stringToHclTerraform(this._pullRequestMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_git_cookie_auth: {
        value: cdktf.booleanToHclTerraform(this._useGitCookieAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validation_required: {
        value: cdktf.booleanToHclTerraform(this._validationRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
