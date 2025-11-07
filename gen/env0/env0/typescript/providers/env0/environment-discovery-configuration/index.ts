// https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentDiscoveryConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * If specified, deploy/plan on changes matching the given pattern (glob). Otherwise, deploy on template folder changes only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#auto_deploy_by_custom_glob EnvironmentDiscoveryConfiguration#auto_deploy_by_custom_glob}
  */
  readonly autoDeployByCustomGlob?: string;
  /**
  * bitbucket client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#bitbucket_client_key EnvironmentDiscoveryConfiguration#bitbucket_client_key}
  */
  readonly bitbucketClientKey?: string;
  /**
  * create new environments from pull requests (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#create_new_environments_from_pull_requests EnvironmentDiscoveryConfiguration#create_new_environments_from_pull_requests}
  */
  readonly createNewEnvironmentsFromPullRequests?: boolean | cdktf.IResolvable;
  /**
  * the environment placement strategy with the project (default: 'topProject')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#environment_placement EnvironmentDiscoveryConfiguration#environment_placement}
  */
  readonly environmentPlacement?: string;
  /**
  * github repository id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#github_installation_id EnvironmentDiscoveryConfiguration#github_installation_id}
  */
  readonly githubInstallationId?: number;
  /**
  * gitlab project id (deprecated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#gitlab_project_id EnvironmentDiscoveryConfiguration#gitlab_project_id}
  */
  readonly gitlabProjectId?: number;
  /**
  * the environments glob pattern. Any match to this pattern will result in an Environment creation and plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#glob_pattern EnvironmentDiscoveryConfiguration#glob_pattern}
  */
  readonly globPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#id EnvironmentDiscoveryConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * set to true if azure devops is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#is_azure_devops EnvironmentDiscoveryConfiguration#is_azure_devops}
  */
  readonly isAzureDevops?: boolean | cdktf.IResolvable;
  /**
  * set to true if Bitbucket Server is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#is_bitbucket_server EnvironmentDiscoveryConfiguration#is_bitbucket_server}
  */
  readonly isBitbucketServer?: boolean | cdktf.IResolvable;
  /**
  * set to true if GitHub Enterprise is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#is_github_enterprise EnvironmentDiscoveryConfiguration#is_github_enterprise}
  */
  readonly isGithubEnterprise?: boolean | cdktf.IResolvable;
  /**
  * set to true if GitLab Enterprise is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#is_gitlab_enterprise EnvironmentDiscoveryConfiguration#is_gitlab_enterprise}
  */
  readonly isGitlabEnterprise?: boolean | cdktf.IResolvable;
  /**
  * If set to 'true', execute terragrunt commands with 'run all' (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#is_terragrunt_run_all EnvironmentDiscoveryConfiguration#is_terragrunt_run_all}
  */
  readonly isTerragruntRunAll?: boolean | cdktf.IResolvable;
  /**
  * the Opentofu version to use (example: 1.6.1). Setting to `latest`, the version used will be the most recent one available for OpenTofu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#opentofu_version EnvironmentDiscoveryConfiguration#opentofu_version}
  */
  readonly opentofuVersion?: string;
  /**
  * the project id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#project_id EnvironmentDiscoveryConfiguration#project_id}
  */
  readonly projectId: string;
  /**
  * the repository to run discovery on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#repository EnvironmentDiscoveryConfiguration#repository}
  */
  readonly repository: string;
  /**
  * number of times to retry when deploy fails (between 1 and 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#retries_on_deploy EnvironmentDiscoveryConfiguration#retries_on_deploy}
  */
  readonly retriesOnDeploy?: number;
  /**
  * number of times to retry when destroy fails (between 1 and 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#retries_on_destroy EnvironmentDiscoveryConfiguration#retries_on_destroy}
  */
  readonly retriesOnDestroy?: number;
  /**
  * retry (on deploy) if error matches the specified regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#retry_on_deploy_only_when_matches_regex EnvironmentDiscoveryConfiguration#retry_on_deploy_only_when_matches_regex}
  */
  readonly retryOnDeployOnlyWhenMatchesRegex?: string;
  /**
  * retry (on destroy) if error matches the specified regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#retry_on_destroy_only_when_matches_regex EnvironmentDiscoveryConfiguration#retry_on_destroy_only_when_matches_regex}
  */
  readonly retryOnDestroyOnlyWhenMatchesRegex?: string;
  /**
  * start files Glob matching from this folder only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#root_path EnvironmentDiscoveryConfiguration#root_path}
  */
  readonly rootPath?: string;
  /**
  * The ssh key id that will be available during deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#ssh_key_id EnvironmentDiscoveryConfiguration#ssh_key_id}
  */
  readonly sshKeyId?: string;
  /**
  * The ssh key name that will be available during deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#ssh_key_name EnvironmentDiscoveryConfiguration#ssh_key_name}
  */
  readonly sshKeyName?: string;
  /**
  * the Terraform version to use (example: 1.7.4). Setting to `RESOLVE_FROM_TERRAFORM_CODE` defaults to the version of `terraform.required_version` during run-time (resolve from terraform code). Setting to `latest`, the version used will be the most recent one available for Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#terraform_version EnvironmentDiscoveryConfiguration#terraform_version}
  */
  readonly terraformVersion?: string;
  /**
  * The binary to use with Terragrunt. Valid values: 'opentofu' and 'terraform' (default: 'opentofu')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#terragrunt_tf_binary EnvironmentDiscoveryConfiguration#terragrunt_tf_binary}
  */
  readonly terragruntTfBinary?: string;
  /**
  * the Terragrunt version to use (example: 0.52.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#terragrunt_version EnvironmentDiscoveryConfiguration#terragrunt_version}
  */
  readonly terragruntVersion?: string;
  /**
  * a token id to be used with 'gitlab' or 'azure_devops'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#token_id EnvironmentDiscoveryConfiguration#token_id}
  */
  readonly tokenId?: string;
  /**
  * the infrastructure type use. Valid values: 'opentofu', 'terraform', 'terragrunt', 'workflow' (default: 'opentofu')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#type EnvironmentDiscoveryConfiguration#type}
  */
  readonly type?: string;
  /**
  * the VCS connection id to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#vcs_connection_id EnvironmentDiscoveryConfiguration#vcs_connection_id}
  */
  readonly vcsConnectionId?: string;
  /**
  * the Workspace namimg strategy (default: 'default')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#workspace_naming EnvironmentDiscoveryConfiguration#workspace_naming}
  */
  readonly workspaceNaming?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration env0_environment_discovery_configuration}
*/
export class EnvironmentDiscoveryConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_environment_discovery_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentDiscoveryConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentDiscoveryConfiguration to import
  * @param importFromId The id of the existing EnvironmentDiscoveryConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentDiscoveryConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_environment_discovery_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/environment_discovery_configuration env0_environment_discovery_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentDiscoveryConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentDiscoveryConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_environment_discovery_configuration',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoDeployByCustomGlob = config.autoDeployByCustomGlob;
    this._bitbucketClientKey = config.bitbucketClientKey;
    this._createNewEnvironmentsFromPullRequests = config.createNewEnvironmentsFromPullRequests;
    this._environmentPlacement = config.environmentPlacement;
    this._githubInstallationId = config.githubInstallationId;
    this._gitlabProjectId = config.gitlabProjectId;
    this._globPattern = config.globPattern;
    this._id = config.id;
    this._isAzureDevops = config.isAzureDevops;
    this._isBitbucketServer = config.isBitbucketServer;
    this._isGithubEnterprise = config.isGithubEnterprise;
    this._isGitlabEnterprise = config.isGitlabEnterprise;
    this._isTerragruntRunAll = config.isTerragruntRunAll;
    this._opentofuVersion = config.opentofuVersion;
    this._projectId = config.projectId;
    this._repository = config.repository;
    this._retriesOnDeploy = config.retriesOnDeploy;
    this._retriesOnDestroy = config.retriesOnDestroy;
    this._retryOnDeployOnlyWhenMatchesRegex = config.retryOnDeployOnlyWhenMatchesRegex;
    this._retryOnDestroyOnlyWhenMatchesRegex = config.retryOnDestroyOnlyWhenMatchesRegex;
    this._rootPath = config.rootPath;
    this._sshKeyId = config.sshKeyId;
    this._sshKeyName = config.sshKeyName;
    this._terraformVersion = config.terraformVersion;
    this._terragruntTfBinary = config.terragruntTfBinary;
    this._terragruntVersion = config.terragruntVersion;
    this._tokenId = config.tokenId;
    this._type = config.type;
    this._vcsConnectionId = config.vcsConnectionId;
    this._workspaceNaming = config.workspaceNaming;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_deploy_by_custom_glob - computed: false, optional: true, required: false
  private _autoDeployByCustomGlob?: string; 
  public get autoDeployByCustomGlob() {
    return this.getStringAttribute('auto_deploy_by_custom_glob');
  }
  public set autoDeployByCustomGlob(value: string) {
    this._autoDeployByCustomGlob = value;
  }
  public resetAutoDeployByCustomGlob() {
    this._autoDeployByCustomGlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployByCustomGlobInput() {
    return this._autoDeployByCustomGlob;
  }

  // bitbucket_client_key - computed: false, optional: true, required: false
  private _bitbucketClientKey?: string; 
  public get bitbucketClientKey() {
    return this.getStringAttribute('bitbucket_client_key');
  }
  public set bitbucketClientKey(value: string) {
    this._bitbucketClientKey = value;
  }
  public resetBitbucketClientKey() {
    this._bitbucketClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketClientKeyInput() {
    return this._bitbucketClientKey;
  }

  // create_new_environments_from_pull_requests - computed: false, optional: true, required: false
  private _createNewEnvironmentsFromPullRequests?: boolean | cdktf.IResolvable; 
  public get createNewEnvironmentsFromPullRequests() {
    return this.getBooleanAttribute('create_new_environments_from_pull_requests');
  }
  public set createNewEnvironmentsFromPullRequests(value: boolean | cdktf.IResolvable) {
    this._createNewEnvironmentsFromPullRequests = value;
  }
  public resetCreateNewEnvironmentsFromPullRequests() {
    this._createNewEnvironmentsFromPullRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNewEnvironmentsFromPullRequestsInput() {
    return this._createNewEnvironmentsFromPullRequests;
  }

  // environment_placement - computed: false, optional: true, required: false
  private _environmentPlacement?: string; 
  public get environmentPlacement() {
    return this.getStringAttribute('environment_placement');
  }
  public set environmentPlacement(value: string) {
    this._environmentPlacement = value;
  }
  public resetEnvironmentPlacement() {
    this._environmentPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentPlacementInput() {
    return this._environmentPlacement;
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

  // glob_pattern - computed: false, optional: false, required: true
  private _globPattern?: string; 
  public get globPattern() {
    return this.getStringAttribute('glob_pattern');
  }
  public set globPattern(value: string) {
    this._globPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globPatternInput() {
    return this._globPattern;
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

  // is_azure_devops - computed: false, optional: true, required: false
  private _isAzureDevops?: boolean | cdktf.IResolvable; 
  public get isAzureDevops() {
    return this.getBooleanAttribute('is_azure_devops');
  }
  public set isAzureDevops(value: boolean | cdktf.IResolvable) {
    this._isAzureDevops = value;
  }
  public resetIsAzureDevops() {
    this._isAzureDevops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAzureDevopsInput() {
    return this._isAzureDevops;
  }

  // is_bitbucket_server - computed: false, optional: true, required: false
  private _isBitbucketServer?: boolean | cdktf.IResolvable; 
  public get isBitbucketServer() {
    return this.getBooleanAttribute('is_bitbucket_server');
  }
  public set isBitbucketServer(value: boolean | cdktf.IResolvable) {
    this._isBitbucketServer = value;
  }
  public resetIsBitbucketServer() {
    this._isBitbucketServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBitbucketServerInput() {
    return this._isBitbucketServer;
  }

  // is_github_enterprise - computed: false, optional: true, required: false
  private _isGithubEnterprise?: boolean | cdktf.IResolvable; 
  public get isGithubEnterprise() {
    return this.getBooleanAttribute('is_github_enterprise');
  }
  public set isGithubEnterprise(value: boolean | cdktf.IResolvable) {
    this._isGithubEnterprise = value;
  }
  public resetIsGithubEnterprise() {
    this._isGithubEnterprise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGithubEnterpriseInput() {
    return this._isGithubEnterprise;
  }

  // is_gitlab_enterprise - computed: false, optional: true, required: false
  private _isGitlabEnterprise?: boolean | cdktf.IResolvable; 
  public get isGitlabEnterprise() {
    return this.getBooleanAttribute('is_gitlab_enterprise');
  }
  public set isGitlabEnterprise(value: boolean | cdktf.IResolvable) {
    this._isGitlabEnterprise = value;
  }
  public resetIsGitlabEnterprise() {
    this._isGitlabEnterprise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGitlabEnterpriseInput() {
    return this._isGitlabEnterprise;
  }

  // is_terragrunt_run_all - computed: false, optional: true, required: false
  private _isTerragruntRunAll?: boolean | cdktf.IResolvable; 
  public get isTerragruntRunAll() {
    return this.getBooleanAttribute('is_terragrunt_run_all');
  }
  public set isTerragruntRunAll(value: boolean | cdktf.IResolvable) {
    this._isTerragruntRunAll = value;
  }
  public resetIsTerragruntRunAll() {
    this._isTerragruntRunAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTerragruntRunAllInput() {
    return this._isTerragruntRunAll;
  }

  // opentofu_version - computed: false, optional: true, required: false
  private _opentofuVersion?: string; 
  public get opentofuVersion() {
    return this.getStringAttribute('opentofu_version');
  }
  public set opentofuVersion(value: string) {
    this._opentofuVersion = value;
  }
  public resetOpentofuVersion() {
    this._opentofuVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentofuVersionInput() {
    return this._opentofuVersion;
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

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // retries_on_deploy - computed: false, optional: true, required: false
  private _retriesOnDeploy?: number; 
  public get retriesOnDeploy() {
    return this.getNumberAttribute('retries_on_deploy');
  }
  public set retriesOnDeploy(value: number) {
    this._retriesOnDeploy = value;
  }
  public resetRetriesOnDeploy() {
    this._retriesOnDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesOnDeployInput() {
    return this._retriesOnDeploy;
  }

  // retries_on_destroy - computed: false, optional: true, required: false
  private _retriesOnDestroy?: number; 
  public get retriesOnDestroy() {
    return this.getNumberAttribute('retries_on_destroy');
  }
  public set retriesOnDestroy(value: number) {
    this._retriesOnDestroy = value;
  }
  public resetRetriesOnDestroy() {
    this._retriesOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesOnDestroyInput() {
    return this._retriesOnDestroy;
  }

  // retry_on_deploy_only_when_matches_regex - computed: false, optional: true, required: false
  private _retryOnDeployOnlyWhenMatchesRegex?: string; 
  public get retryOnDeployOnlyWhenMatchesRegex() {
    return this.getStringAttribute('retry_on_deploy_only_when_matches_regex');
  }
  public set retryOnDeployOnlyWhenMatchesRegex(value: string) {
    this._retryOnDeployOnlyWhenMatchesRegex = value;
  }
  public resetRetryOnDeployOnlyWhenMatchesRegex() {
    this._retryOnDeployOnlyWhenMatchesRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnDeployOnlyWhenMatchesRegexInput() {
    return this._retryOnDeployOnlyWhenMatchesRegex;
  }

  // retry_on_destroy_only_when_matches_regex - computed: false, optional: true, required: false
  private _retryOnDestroyOnlyWhenMatchesRegex?: string; 
  public get retryOnDestroyOnlyWhenMatchesRegex() {
    return this.getStringAttribute('retry_on_destroy_only_when_matches_regex');
  }
  public set retryOnDestroyOnlyWhenMatchesRegex(value: string) {
    this._retryOnDestroyOnlyWhenMatchesRegex = value;
  }
  public resetRetryOnDestroyOnlyWhenMatchesRegex() {
    this._retryOnDestroyOnlyWhenMatchesRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnDestroyOnlyWhenMatchesRegexInput() {
    return this._retryOnDestroyOnlyWhenMatchesRegex;
  }

  // root_path - computed: false, optional: true, required: false
  private _rootPath?: string; 
  public get rootPath() {
    return this.getStringAttribute('root_path');
  }
  public set rootPath(value: string) {
    this._rootPath = value;
  }
  public resetRootPath() {
    this._rootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPathInput() {
    return this._rootPath;
  }

  // ssh_key_id - computed: false, optional: true, required: false
  private _sshKeyId?: string; 
  public get sshKeyId() {
    return this.getStringAttribute('ssh_key_id');
  }
  public set sshKeyId(value: string) {
    this._sshKeyId = value;
  }
  public resetSshKeyId() {
    this._sshKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyIdInput() {
    return this._sshKeyId;
  }

  // ssh_key_name - computed: false, optional: true, required: false
  private _sshKeyName?: string; 
  public get sshKeyName() {
    return this.getStringAttribute('ssh_key_name');
  }
  public set sshKeyName(value: string) {
    this._sshKeyName = value;
  }
  public resetSshKeyName() {
    this._sshKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyNameInput() {
    return this._sshKeyName;
  }

  // terraform_version - computed: false, optional: true, required: false
  private _terraformVersion?: string; 
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }
  public set terraformVersion(value: string) {
    this._terraformVersion = value;
  }
  public resetTerraformVersion() {
    this._terraformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformVersionInput() {
    return this._terraformVersion;
  }

  // terragrunt_tf_binary - computed: false, optional: true, required: false
  private _terragruntTfBinary?: string; 
  public get terragruntTfBinary() {
    return this.getStringAttribute('terragrunt_tf_binary');
  }
  public set terragruntTfBinary(value: string) {
    this._terragruntTfBinary = value;
  }
  public resetTerragruntTfBinary() {
    this._terragruntTfBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terragruntTfBinaryInput() {
    return this._terragruntTfBinary;
  }

  // terragrunt_version - computed: false, optional: true, required: false
  private _terragruntVersion?: string; 
  public get terragruntVersion() {
    return this.getStringAttribute('terragrunt_version');
  }
  public set terragruntVersion(value: string) {
    this._terragruntVersion = value;
  }
  public resetTerragruntVersion() {
    this._terragruntVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terragruntVersionInput() {
    return this._terragruntVersion;
  }

  // token_id - computed: false, optional: true, required: false
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  public resetTokenId() {
    this._tokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vcs_connection_id - computed: false, optional: true, required: false
  private _vcsConnectionId?: string; 
  public get vcsConnectionId() {
    return this.getStringAttribute('vcs_connection_id');
  }
  public set vcsConnectionId(value: string) {
    this._vcsConnectionId = value;
  }
  public resetVcsConnectionId() {
    this._vcsConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsConnectionIdInput() {
    return this._vcsConnectionId;
  }

  // workspace_naming - computed: false, optional: true, required: false
  private _workspaceNaming?: string; 
  public get workspaceNaming() {
    return this.getStringAttribute('workspace_naming');
  }
  public set workspaceNaming(value: string) {
    this._workspaceNaming = value;
  }
  public resetWorkspaceNaming() {
    this._workspaceNaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNamingInput() {
    return this._workspaceNaming;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_deploy_by_custom_glob: cdktf.stringToTerraform(this._autoDeployByCustomGlob),
      bitbucket_client_key: cdktf.stringToTerraform(this._bitbucketClientKey),
      create_new_environments_from_pull_requests: cdktf.booleanToTerraform(this._createNewEnvironmentsFromPullRequests),
      environment_placement: cdktf.stringToTerraform(this._environmentPlacement),
      github_installation_id: cdktf.numberToTerraform(this._githubInstallationId),
      gitlab_project_id: cdktf.numberToTerraform(this._gitlabProjectId),
      glob_pattern: cdktf.stringToTerraform(this._globPattern),
      id: cdktf.stringToTerraform(this._id),
      is_azure_devops: cdktf.booleanToTerraform(this._isAzureDevops),
      is_bitbucket_server: cdktf.booleanToTerraform(this._isBitbucketServer),
      is_github_enterprise: cdktf.booleanToTerraform(this._isGithubEnterprise),
      is_gitlab_enterprise: cdktf.booleanToTerraform(this._isGitlabEnterprise),
      is_terragrunt_run_all: cdktf.booleanToTerraform(this._isTerragruntRunAll),
      opentofu_version: cdktf.stringToTerraform(this._opentofuVersion),
      project_id: cdktf.stringToTerraform(this._projectId),
      repository: cdktf.stringToTerraform(this._repository),
      retries_on_deploy: cdktf.numberToTerraform(this._retriesOnDeploy),
      retries_on_destroy: cdktf.numberToTerraform(this._retriesOnDestroy),
      retry_on_deploy_only_when_matches_regex: cdktf.stringToTerraform(this._retryOnDeployOnlyWhenMatchesRegex),
      retry_on_destroy_only_when_matches_regex: cdktf.stringToTerraform(this._retryOnDestroyOnlyWhenMatchesRegex),
      root_path: cdktf.stringToTerraform(this._rootPath),
      ssh_key_id: cdktf.stringToTerraform(this._sshKeyId),
      ssh_key_name: cdktf.stringToTerraform(this._sshKeyName),
      terraform_version: cdktf.stringToTerraform(this._terraformVersion),
      terragrunt_tf_binary: cdktf.stringToTerraform(this._terragruntTfBinary),
      terragrunt_version: cdktf.stringToTerraform(this._terragruntVersion),
      token_id: cdktf.stringToTerraform(this._tokenId),
      type: cdktf.stringToTerraform(this._type),
      vcs_connection_id: cdktf.stringToTerraform(this._vcsConnectionId),
      workspace_naming: cdktf.stringToTerraform(this._workspaceNaming),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_deploy_by_custom_glob: {
        value: cdktf.stringToHclTerraform(this._autoDeployByCustomGlob),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bitbucket_client_key: {
        value: cdktf.stringToHclTerraform(this._bitbucketClientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_new_environments_from_pull_requests: {
        value: cdktf.booleanToHclTerraform(this._createNewEnvironmentsFromPullRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_placement: {
        value: cdktf.stringToHclTerraform(this._environmentPlacement),
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
      glob_pattern: {
        value: cdktf.stringToHclTerraform(this._globPattern),
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
      is_azure_devops: {
        value: cdktf.booleanToHclTerraform(this._isAzureDevops),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_bitbucket_server: {
        value: cdktf.booleanToHclTerraform(this._isBitbucketServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_github_enterprise: {
        value: cdktf.booleanToHclTerraform(this._isGithubEnterprise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_gitlab_enterprise: {
        value: cdktf.booleanToHclTerraform(this._isGitlabEnterprise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_terragrunt_run_all: {
        value: cdktf.booleanToHclTerraform(this._isTerragruntRunAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      opentofu_version: {
        value: cdktf.stringToHclTerraform(this._opentofuVersion),
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
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries_on_deploy: {
        value: cdktf.numberToHclTerraform(this._retriesOnDeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retries_on_destroy: {
        value: cdktf.numberToHclTerraform(this._retriesOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_on_deploy_only_when_matches_regex: {
        value: cdktf.stringToHclTerraform(this._retryOnDeployOnlyWhenMatchesRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_on_destroy_only_when_matches_regex: {
        value: cdktf.stringToHclTerraform(this._retryOnDestroyOnlyWhenMatchesRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_path: {
        value: cdktf.stringToHclTerraform(this._rootPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_id: {
        value: cdktf.stringToHclTerraform(this._sshKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_name: {
        value: cdktf.stringToHclTerraform(this._sshKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terraform_version: {
        value: cdktf.stringToHclTerraform(this._terraformVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terragrunt_tf_binary: {
        value: cdktf.stringToHclTerraform(this._terragruntTfBinary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terragrunt_version: {
        value: cdktf.stringToHclTerraform(this._terragruntVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_id: {
        value: cdktf.stringToHclTerraform(this._tokenId),
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
      vcs_connection_id: {
        value: cdktf.stringToHclTerraform(this._vcsConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_naming: {
        value: cdktf.stringToHclTerraform(this._workspaceNaming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
