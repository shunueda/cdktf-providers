// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Azure Dev Ops project ID. It can be retrieved via the Azure API or using the data source `dbtcloud_azure_dev_ops_project` and the project name - (required for ADO native integration only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#azure_active_directory_project_id Repository#azure_active_directory_project_id}
  */
  readonly azureActiveDirectoryProjectId?: string;
  /**
  * The Azure Dev Ops repository ID. It can be retrieved via the Azure API or using the data source `dbtcloud_azure_dev_ops_repository` along with the ADO Project ID and the repository name - (required for ADO native integration only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#azure_active_directory_repository_id Repository#azure_active_directory_repository_id}
  */
  readonly azureActiveDirectoryRepositoryId?: string;
  /**
  * If set to False (the default), the connection will fail if the service user doesn't have access to set webhooks (required for auto-triggering CI jobs). If set to True, the connection will be successful but no automated CI job will be triggered - (for ADO native integration only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#azure_bypass_webhook_registration_failure Repository#azure_bypass_webhook_registration_failure}
  */
  readonly azureBypassWebhookRegistrationFailure?: boolean | cdktf.IResolvable;
  /**
  * Whether we should return the public deploy key - (for the `deploy_key` strategy)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#fetch_deploy_key Repository#fetch_deploy_key}
  */
  readonly fetchDeployKey?: boolean | cdktf.IResolvable;
  /**
  * Git clone strategy for the repository. Can be `deploy_key` (default) for cloning via SSH Deploy Key, `github_app` for GitHub native integration, `deploy_token` for the GitLab native integration and `azure_active_directory_app` for ADO native integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#git_clone_strategy Repository#git_clone_strategy}
  */
  readonly gitCloneStrategy?: string;
  /**
  * Identifier for the GitHub App - (for GitHub native integration only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#github_installation_id Repository#github_installation_id}
  */
  readonly githubInstallationId?: number;
  /**
  * Identifier for the Gitlab project -  (for GitLab native integration only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#gitlab_project_id Repository#gitlab_project_id}
  */
  readonly gitlabProjectId?: number;
  /**
  * Whether the repository is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#is_active Repository#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Identifier for the PrivateLink endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#private_link_endpoint_id Repository#private_link_endpoint_id}
  */
  readonly privateLinkEndpointId?: string;
  /**
  * Project ID to create the repository in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#project_id Repository#project_id}
  */
  readonly projectId: number;
  /**
  * URL template for creating a pull request. If it is not set, the default template will create a PR from the current branch to the branch configured in the Development environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#pull_request_url_template Repository#pull_request_url_template}
  */
  readonly pullRequestUrlTemplate?: string;
  /**
  * Git URL for the repository or \<Group>/\<Project> for Gitlab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#remote_url Repository#remote_url}
  */
  readonly remoteUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository dbtcloud_repository}
*/
export class Repository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Repository to import
  * @param importFromId The id of the existing Repository that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Repository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/repository dbtcloud_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_repository',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureActiveDirectoryProjectId = config.azureActiveDirectoryProjectId;
    this._azureActiveDirectoryRepositoryId = config.azureActiveDirectoryRepositoryId;
    this._azureBypassWebhookRegistrationFailure = config.azureBypassWebhookRegistrationFailure;
    this._fetchDeployKey = config.fetchDeployKey;
    this._gitCloneStrategy = config.gitCloneStrategy;
    this._githubInstallationId = config.githubInstallationId;
    this._gitlabProjectId = config.gitlabProjectId;
    this._isActive = config.isActive;
    this._privateLinkEndpointId = config.privateLinkEndpointId;
    this._projectId = config.projectId;
    this._pullRequestUrlTemplate = config.pullRequestUrlTemplate;
    this._remoteUrl = config.remoteUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_active_directory_project_id - computed: true, optional: true, required: false
  private _azureActiveDirectoryProjectId?: string; 
  public get azureActiveDirectoryProjectId() {
    return this.getStringAttribute('azure_active_directory_project_id');
  }
  public set azureActiveDirectoryProjectId(value: string) {
    this._azureActiveDirectoryProjectId = value;
  }
  public resetAzureActiveDirectoryProjectId() {
    this._azureActiveDirectoryProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryProjectIdInput() {
    return this._azureActiveDirectoryProjectId;
  }

  // azure_active_directory_repository_id - computed: true, optional: true, required: false
  private _azureActiveDirectoryRepositoryId?: string; 
  public get azureActiveDirectoryRepositoryId() {
    return this.getStringAttribute('azure_active_directory_repository_id');
  }
  public set azureActiveDirectoryRepositoryId(value: string) {
    this._azureActiveDirectoryRepositoryId = value;
  }
  public resetAzureActiveDirectoryRepositoryId() {
    this._azureActiveDirectoryRepositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryRepositoryIdInput() {
    return this._azureActiveDirectoryRepositoryId;
  }

  // azure_bypass_webhook_registration_failure - computed: true, optional: true, required: false
  private _azureBypassWebhookRegistrationFailure?: boolean | cdktf.IResolvable; 
  public get azureBypassWebhookRegistrationFailure() {
    return this.getBooleanAttribute('azure_bypass_webhook_registration_failure');
  }
  public set azureBypassWebhookRegistrationFailure(value: boolean | cdktf.IResolvable) {
    this._azureBypassWebhookRegistrationFailure = value;
  }
  public resetAzureBypassWebhookRegistrationFailure() {
    this._azureBypassWebhookRegistrationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBypassWebhookRegistrationFailureInput() {
    return this._azureBypassWebhookRegistrationFailure;
  }

  // deploy_key - computed: true, optional: false, required: false
  public get deployKey() {
    return this.getStringAttribute('deploy_key');
  }

  // fetch_deploy_key - computed: true, optional: true, required: false
  private _fetchDeployKey?: boolean | cdktf.IResolvable; 
  public get fetchDeployKey() {
    return this.getBooleanAttribute('fetch_deploy_key');
  }
  public set fetchDeployKey(value: boolean | cdktf.IResolvable) {
    this._fetchDeployKey = value;
  }
  public resetFetchDeployKey() {
    this._fetchDeployKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchDeployKeyInput() {
    return this._fetchDeployKey;
  }

  // git_clone_strategy - computed: true, optional: true, required: false
  private _gitCloneStrategy?: string; 
  public get gitCloneStrategy() {
    return this.getStringAttribute('git_clone_strategy');
  }
  public set gitCloneStrategy(value: string) {
    this._gitCloneStrategy = value;
  }
  public resetGitCloneStrategy() {
    this._gitCloneStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCloneStrategyInput() {
    return this._gitCloneStrategy;
  }

  // github_installation_id - computed: false, optional: true, required: false
  private _githubInstallationId?: number; 
  public get githubInstallationId() {
    return this.getNumberAttribute('github_installation_id');
  }
  public set githubInstallationId(value: number) {
    this._githubInstallationId = value;
  }
  public resetGithubInstallationId() {
    this._githubInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInstallationIdInput() {
    return this._githubInstallationId;
  }

  // gitlab_project_id - computed: false, optional: true, required: false
  private _gitlabProjectId?: number; 
  public get gitlabProjectId() {
    return this.getNumberAttribute('gitlab_project_id');
  }
  public set gitlabProjectId(value: number) {
    this._gitlabProjectId = value;
  }
  public resetGitlabProjectId() {
    this._gitlabProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabProjectIdInput() {
    return this._gitlabProjectId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // private_link_endpoint_id - computed: false, optional: true, required: false
  private _privateLinkEndpointId?: string; 
  public get privateLinkEndpointId() {
    return this.getStringAttribute('private_link_endpoint_id');
  }
  public set privateLinkEndpointId(value: string) {
    this._privateLinkEndpointId = value;
  }
  public resetPrivateLinkEndpointId() {
    this._privateLinkEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkEndpointIdInput() {
    return this._privateLinkEndpointId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // pull_request_url_template - computed: true, optional: true, required: false
  private _pullRequestUrlTemplate?: string; 
  public get pullRequestUrlTemplate() {
    return this.getStringAttribute('pull_request_url_template');
  }
  public set pullRequestUrlTemplate(value: string) {
    this._pullRequestUrlTemplate = value;
  }
  public resetPullRequestUrlTemplate() {
    this._pullRequestUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestUrlTemplateInput() {
    return this._pullRequestUrlTemplate;
  }

  // remote_url - computed: false, optional: false, required: true
  private _remoteUrl?: string; 
  public get remoteUrl() {
    return this.getStringAttribute('remote_url');
  }
  public set remoteUrl(value: string) {
    this._remoteUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUrlInput() {
    return this._remoteUrl;
  }

  // repository_credentials_id - computed: true, optional: false, required: false
  public get repositoryCredentialsId() {
    return this.getNumberAttribute('repository_credentials_id');
  }

  // repository_id - computed: true, optional: false, required: false
  public get repositoryId() {
    return this.getNumberAttribute('repository_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_active_directory_project_id: cdktf.stringToTerraform(this._azureActiveDirectoryProjectId),
      azure_active_directory_repository_id: cdktf.stringToTerraform(this._azureActiveDirectoryRepositoryId),
      azure_bypass_webhook_registration_failure: cdktf.booleanToTerraform(this._azureBypassWebhookRegistrationFailure),
      fetch_deploy_key: cdktf.booleanToTerraform(this._fetchDeployKey),
      git_clone_strategy: cdktf.stringToTerraform(this._gitCloneStrategy),
      github_installation_id: cdktf.numberToTerraform(this._githubInstallationId),
      gitlab_project_id: cdktf.numberToTerraform(this._gitlabProjectId),
      is_active: cdktf.booleanToTerraform(this._isActive),
      private_link_endpoint_id: cdktf.stringToTerraform(this._privateLinkEndpointId),
      project_id: cdktf.numberToTerraform(this._projectId),
      pull_request_url_template: cdktf.stringToTerraform(this._pullRequestUrlTemplate),
      remote_url: cdktf.stringToTerraform(this._remoteUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_active_directory_project_id: {
        value: cdktf.stringToHclTerraform(this._azureActiveDirectoryProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_active_directory_repository_id: {
        value: cdktf.stringToHclTerraform(this._azureActiveDirectoryRepositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_bypass_webhook_registration_failure: {
        value: cdktf.booleanToHclTerraform(this._azureBypassWebhookRegistrationFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fetch_deploy_key: {
        value: cdktf.booleanToHclTerraform(this._fetchDeployKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_clone_strategy: {
        value: cdktf.stringToHclTerraform(this._gitCloneStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github_installation_id: {
        value: cdktf.numberToHclTerraform(this._githubInstallationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gitlab_project_id: {
        value: cdktf.numberToHclTerraform(this._gitlabProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_link_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._privateLinkEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pull_request_url_template: {
        value: cdktf.stringToHclTerraform(this._pullRequestUrlTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_url: {
        value: cdktf.stringToHclTerraform(this._remoteUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
