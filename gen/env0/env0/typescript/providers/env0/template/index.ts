// https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * the ansible version to use (required when the template type is 'ansible'). Supported versions are 3.0.0 and above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#ansible_version Template#ansible_version}
  */
  readonly ansibleVersion?: string;
  /**
  * the bitbucket client key used for integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#bitbucket_client_key Template#bitbucket_client_key}
  */
  readonly bitbucketClientKey?: string;
  /**
  * description for the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#description Template#description}
  */
  readonly description?: string;
  /**
  * the cloudformation file name. Required if the template type is cloudformation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#file_name Template#file_name}
  */
  readonly fileName?: string;
  /**
  * the env0 application installation id on the relevant github repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#github_installation_id Template#github_installation_id}
  */
  readonly githubInstallationId?: number;
  /**
  * the project id of the relevant repository (deprecated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#gitlab_project_id Template#gitlab_project_id}
  */
  readonly gitlabProjectId?: number;
  /**
  * the helm chart name. Required if is_helm_repository is set to 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#helm_chart_name Template#helm_chart_name}
  */
  readonly helmChartName?: string;
  /**
  * true if this template integrates with azure dev ops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#is_azure_devops Template#is_azure_devops}
  */
  readonly isAzureDevops?: boolean | cdktf.IResolvable;
  /**
  * true if this template uses bitbucket server repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#is_bitbucket_server Template#is_bitbucket_server}
  */
  readonly isBitbucketServer?: boolean | cdktf.IResolvable;
  /**
  * true if this template uses github enterprise repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#is_github_enterprise Template#is_github_enterprise}
  */
  readonly isGithubEnterprise?: boolean | cdktf.IResolvable;
  /**
  * set to 'true' if the repository is Gitlab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#is_gitlab Template#is_gitlab}
  */
  readonly isGitlab?: boolean | cdktf.IResolvable;
  /**
  * true if this template uses gitlab enterprise repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#is_gitlab_enterprise Template#is_gitlab_enterprise}
  */
  readonly isGitlabEnterprise?: boolean | cdktf.IResolvable;
  /**
  * true if this template integrates with a helm repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#is_helm_repository Template#is_helm_repository}
  */
  readonly isHelmRepository?: boolean | cdktf.IResolvable;
  /**
  * true if this template should execute run-all commands on multiple modules (check https://terragrunt.gruntwork.io/docs/features/execute-terraform-commands-on-multiple-modules-at-once/#the-run-all-command for additional details). Can only be true with 'terragrunt' template type and terragrunt version 0.28.1 and above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#is_terragrunt_run_all Template#is_terragrunt_run_all}
  */
  readonly isTerragruntRunAll?: boolean | cdktf.IResolvable;
  /**
  * name to give the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#name Template#name}
  */
  readonly name: string;
  /**
  * the Opentofu version to use (example: 1.6.2). Setting to 'RESOLVE_FROM_CODE' extracts the version from the Opentofu code during runtime. Setting to `latest`, the version used will be the most recent one available for Opentofu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#opentofu_version Template#opentofu_version}
  */
  readonly opentofuVersion?: string;
  /**
  * terraform / terragrunt file folder inside source code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#path Template#path}
  */
  readonly path?: string;
  /**
  * git repository url for the template source code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#repository Template#repository}
  */
  readonly repository: string;
  /**
  * number of times to retry when deploying an environment based on this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#retries_on_deploy Template#retries_on_deploy}
  */
  readonly retriesOnDeploy?: number;
  /**
  * number of times to retry when destroying an environment based on this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#retries_on_destroy Template#retries_on_destroy}
  */
  readonly retriesOnDestroy?: number;
  /**
  * if specified, will only retry (on deploy) if error matches specified regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#retry_on_deploy_only_when_matches_regex Template#retry_on_deploy_only_when_matches_regex}
  */
  readonly retryOnDeployOnlyWhenMatchesRegex?: string;
  /**
  * if specified, will only retry (on destroy) if error matches specified regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#retry_on_destroy_only_when_matches_regex Template#retry_on_destroy_only_when_matches_regex}
  */
  readonly retryOnDestroyOnlyWhenMatchesRegex?: string;
  /**
  * source code revision (branch / tag) to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#revision Template#revision}
  */
  readonly revision?: string;
  /**
  * an array of references to 'data_ssh_key' to use when accessing git over ssh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#ssh_keys Template#ssh_keys}
  */
  readonly sshKeys?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * the Terraform version to use (example: 0.15.1). Setting to `RESOLVE_FROM_TERRAFORM_CODE` defaults to the version of `terraform.required_version` during run-time (resolve from terraform code). Setting to `latest`, the version used will be the most recent one available for Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#terraform_version Template#terraform_version}
  */
  readonly terraformVersion?: string;
  /**
  * the binary to use if the template type is 'terragrunt'. Valid values 'opentofu' and 'terraform'. Defaults to 'opentofu'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#terragrunt_tf_binary Template#terragrunt_tf_binary}
  */
  readonly terragruntTfBinary?: string;
  /**
  * the Terragrunt version to use (example: 0.36.5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#terragrunt_version Template#terragrunt_version}
  */
  readonly terragruntVersion?: string;
  /**
  * the git token id to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#token_id Template#token_id}
  */
  readonly tokenId?: string;
  /**
  * token name for Gitlab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#token_name Template#token_name}
  */
  readonly tokenName?: string;
  /**
  * template type (allowed values: terraform, terragrunt, pulumi, k8s, workflow, cloudformation, helm, opentofu, ansible)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#type Template#type}
  */
  readonly type: string;
  /**
  * the VCS connection id to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#vcs_connection_id Template#vcs_connection_id}
  */
  readonly vcsConnectionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template env0_template}
*/
export class Template extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Template resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Template to import
  * @param importFromId The id of the existing Template that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Template to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/template env0_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_template',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.6',
        providerVersionConstraint: '1.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ansibleVersion = config.ansibleVersion;
    this._bitbucketClientKey = config.bitbucketClientKey;
    this._description = config.description;
    this._fileName = config.fileName;
    this._githubInstallationId = config.githubInstallationId;
    this._gitlabProjectId = config.gitlabProjectId;
    this._helmChartName = config.helmChartName;
    this._isAzureDevops = config.isAzureDevops;
    this._isBitbucketServer = config.isBitbucketServer;
    this._isGithubEnterprise = config.isGithubEnterprise;
    this._isGitlab = config.isGitlab;
    this._isGitlabEnterprise = config.isGitlabEnterprise;
    this._isHelmRepository = config.isHelmRepository;
    this._isTerragruntRunAll = config.isTerragruntRunAll;
    this._name = config.name;
    this._opentofuVersion = config.opentofuVersion;
    this._path = config.path;
    this._repository = config.repository;
    this._retriesOnDeploy = config.retriesOnDeploy;
    this._retriesOnDestroy = config.retriesOnDestroy;
    this._retryOnDeployOnlyWhenMatchesRegex = config.retryOnDeployOnlyWhenMatchesRegex;
    this._retryOnDestroyOnlyWhenMatchesRegex = config.retryOnDestroyOnlyWhenMatchesRegex;
    this._revision = config.revision;
    this._sshKeys = config.sshKeys;
    this._terraformVersion = config.terraformVersion;
    this._terragruntTfBinary = config.terragruntTfBinary;
    this._terragruntVersion = config.terragruntVersion;
    this._tokenId = config.tokenId;
    this._tokenName = config.tokenName;
    this._type = config.type;
    this._vcsConnectionId = config.vcsConnectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ansible_version - computed: false, optional: true, required: false
  private _ansibleVersion?: string; 
  public get ansibleVersion() {
    return this.getStringAttribute('ansible_version');
  }
  public set ansibleVersion(value: string) {
    this._ansibleVersion = value;
  }
  public resetAnsibleVersion() {
    this._ansibleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ansibleVersionInput() {
    return this._ansibleVersion;
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

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
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

  // helm_chart_name - computed: false, optional: true, required: false
  private _helmChartName?: string; 
  public get helmChartName() {
    return this.getStringAttribute('helm_chart_name');
  }
  public set helmChartName(value: string) {
    this._helmChartName = value;
  }
  public resetHelmChartName() {
    this._helmChartName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmChartNameInput() {
    return this._helmChartName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // is_gitlab - computed: false, optional: true, required: false
  private _isGitlab?: boolean | cdktf.IResolvable; 
  public get isGitlab() {
    return this.getBooleanAttribute('is_gitlab');
  }
  public set isGitlab(value: boolean | cdktf.IResolvable) {
    this._isGitlab = value;
  }
  public resetIsGitlab() {
    this._isGitlab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGitlabInput() {
    return this._isGitlab;
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

  // is_helm_repository - computed: false, optional: true, required: false
  private _isHelmRepository?: boolean | cdktf.IResolvable; 
  public get isHelmRepository() {
    return this.getBooleanAttribute('is_helm_repository');
  }
  public set isHelmRepository(value: boolean | cdktf.IResolvable) {
    this._isHelmRepository = value;
  }
  public resetIsHelmRepository() {
    this._isHelmRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHelmRepositoryInput() {
    return this._isHelmRepository;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get sshKeys() {
    return this.interpolationForAttribute('ssh_keys');
  }
  public set sshKeys(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
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

  // token_name - computed: false, optional: true, required: false
  private _tokenName?: string; 
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }
  public set tokenName(value: string) {
    this._tokenName = value;
  }
  public resetTokenName() {
    this._tokenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ansible_version: cdktf.stringToTerraform(this._ansibleVersion),
      bitbucket_client_key: cdktf.stringToTerraform(this._bitbucketClientKey),
      description: cdktf.stringToTerraform(this._description),
      file_name: cdktf.stringToTerraform(this._fileName),
      github_installation_id: cdktf.numberToTerraform(this._githubInstallationId),
      gitlab_project_id: cdktf.numberToTerraform(this._gitlabProjectId),
      helm_chart_name: cdktf.stringToTerraform(this._helmChartName),
      is_azure_devops: cdktf.booleanToTerraform(this._isAzureDevops),
      is_bitbucket_server: cdktf.booleanToTerraform(this._isBitbucketServer),
      is_github_enterprise: cdktf.booleanToTerraform(this._isGithubEnterprise),
      is_gitlab: cdktf.booleanToTerraform(this._isGitlab),
      is_gitlab_enterprise: cdktf.booleanToTerraform(this._isGitlabEnterprise),
      is_helm_repository: cdktf.booleanToTerraform(this._isHelmRepository),
      is_terragrunt_run_all: cdktf.booleanToTerraform(this._isTerragruntRunAll),
      name: cdktf.stringToTerraform(this._name),
      opentofu_version: cdktf.stringToTerraform(this._opentofuVersion),
      path: cdktf.stringToTerraform(this._path),
      repository: cdktf.stringToTerraform(this._repository),
      retries_on_deploy: cdktf.numberToTerraform(this._retriesOnDeploy),
      retries_on_destroy: cdktf.numberToTerraform(this._retriesOnDestroy),
      retry_on_deploy_only_when_matches_regex: cdktf.stringToTerraform(this._retryOnDeployOnlyWhenMatchesRegex),
      retry_on_destroy_only_when_matches_regex: cdktf.stringToTerraform(this._retryOnDestroyOnlyWhenMatchesRegex),
      revision: cdktf.stringToTerraform(this._revision),
      ssh_keys: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._sshKeys),
      terraform_version: cdktf.stringToTerraform(this._terraformVersion),
      terragrunt_tf_binary: cdktf.stringToTerraform(this._terragruntTfBinary),
      terragrunt_version: cdktf.stringToTerraform(this._terragruntVersion),
      token_id: cdktf.stringToTerraform(this._tokenId),
      token_name: cdktf.stringToTerraform(this._tokenName),
      type: cdktf.stringToTerraform(this._type),
      vcs_connection_id: cdktf.stringToTerraform(this._vcsConnectionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ansible_version: {
        value: cdktf.stringToHclTerraform(this._ansibleVersion),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
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
      helm_chart_name: {
        value: cdktf.stringToHclTerraform(this._helmChartName),
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
      is_gitlab: {
        value: cdktf.booleanToHclTerraform(this._isGitlab),
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
      is_helm_repository: {
        value: cdktf.booleanToHclTerraform(this._isHelmRepository),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opentofu_version: {
        value: cdktf.stringToHclTerraform(this._opentofuVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
      revision: {
        value: cdktf.stringToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._sshKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
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
      token_name: {
        value: cdktf.stringToHclTerraform(this._tokenName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
