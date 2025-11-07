// https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * the client key used for integration with Bitbucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#bitbucket_client_key Module#bitbucket_client_key}
  */
  readonly bitbucketClientKey?: string;
  /**
  * description of the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#description Module#description}
  */
  readonly description?: string;
  /**
  * the env0 application installation id on the relevant Github repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#github_installation_id Module#github_installation_id}
  */
  readonly githubInstallationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#id Module#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * true if this module integrates with azure dev ops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#is_azure_devops Module#is_azure_devops}
  */
  readonly isAzureDevops?: boolean | cdktf.IResolvable;
  /**
  * true if this module integrates with Bitbucket Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#is_bitbucket_server Module#is_bitbucket_server}
  */
  readonly isBitbucketServer?: boolean | cdktf.IResolvable;
  /**
  * true if this module integrates with GitHub Enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#is_github_enterprise Module#is_github_enterprise}
  */
  readonly isGithubEnterprise?: boolean | cdktf.IResolvable;
  /**
  * true if this module integrates with GitLab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#is_gitlab Module#is_gitlab}
  */
  readonly isGitlab?: boolean | cdktf.IResolvable;
  /**
  * true if this module integrates with GitLab Enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#is_gitlab_enterprise Module#is_gitlab_enterprise}
  */
  readonly isGitlabEnterprise?: boolean | cdktf.IResolvable;
  /**
  * name of the module (Match pattern: ^[0-9A-Za-z](?:[0-9A-Za-z-_]{0,62}[0-9A-Za-z])?$)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#module_name Module#module_name}
  */
  readonly moduleName: string;
  /**
  * the provider name in the module source (Match pattern: ^[0-9a-z]{0,64}$)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#module_provider Module#module_provider}
  */
  readonly moduleProvider: string;
  /**
  * set to 'true' to enable module test (defaults to 'false')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#module_test_enabled Module#module_test_enabled}
  */
  readonly moduleTestEnabled?: boolean | cdktf.IResolvable;
  /**
  * the opentofu version to use, Can only be set if 'module_test_enabled' is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#opentofu_version Module#opentofu_version}
  */
  readonly opentofuVersion?: string;
  /**
  * the folder in the repository to create the module from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#path Module#path}
  */
  readonly path?: string;
  /**
  * the repository containing the module files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#repository Module#repository}
  */
  readonly repository: string;
  /**
  * set to 'true' to run tests on pull request (defaults to 'false'). Can only be enabled if 'module_test_enabled' is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#run_tests_on_pull_request Module#run_tests_on_pull_request}
  */
  readonly runTestsOnPullRequest?: boolean | cdktf.IResolvable;
  /**
  * an array of references to 'data_ssh_key' to use when accessing git over ssh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#ssh_keys Module#ssh_keys}
  */
  readonly sshKeys?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * a tag prefix for the module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#tag_prefix Module#tag_prefix}
  */
  readonly tagPrefix?: string;
  /**
  * the git token id to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#token_id Module#token_id}
  */
  readonly tokenId?: string;
  /**
  * the token name used for integration with GitLab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#token_name Module#token_name}
  */
  readonly tokenName?: string;
  /**
  * the VCS connection id to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#vcs_connection_id Module#vcs_connection_id}
  */
  readonly vcsConnectionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module env0_module}
*/
export class Module extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Module resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Module to import
  * @param importFromId The id of the existing Module that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Module to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/module env0_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ModuleConfig
  */
  public constructor(scope: Construct, id: string, config: ModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_module',
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
    this._bitbucketClientKey = config.bitbucketClientKey;
    this._description = config.description;
    this._githubInstallationId = config.githubInstallationId;
    this._id = config.id;
    this._isAzureDevops = config.isAzureDevops;
    this._isBitbucketServer = config.isBitbucketServer;
    this._isGithubEnterprise = config.isGithubEnterprise;
    this._isGitlab = config.isGitlab;
    this._isGitlabEnterprise = config.isGitlabEnterprise;
    this._moduleName = config.moduleName;
    this._moduleProvider = config.moduleProvider;
    this._moduleTestEnabled = config.moduleTestEnabled;
    this._opentofuVersion = config.opentofuVersion;
    this._path = config.path;
    this._repository = config.repository;
    this._runTestsOnPullRequest = config.runTestsOnPullRequest;
    this._sshKeys = config.sshKeys;
    this._tagPrefix = config.tagPrefix;
    this._tokenId = config.tokenId;
    this._tokenName = config.tokenName;
    this._vcsConnectionId = config.vcsConnectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // module_name - computed: false, optional: false, required: true
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }

  // module_provider - computed: false, optional: false, required: true
  private _moduleProvider?: string; 
  public get moduleProvider() {
    return this.getStringAttribute('module_provider');
  }
  public set moduleProvider(value: string) {
    this._moduleProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleProviderInput() {
    return this._moduleProvider;
  }

  // module_test_enabled - computed: false, optional: true, required: false
  private _moduleTestEnabled?: boolean | cdktf.IResolvable; 
  public get moduleTestEnabled() {
    return this.getBooleanAttribute('module_test_enabled');
  }
  public set moduleTestEnabled(value: boolean | cdktf.IResolvable) {
    this._moduleTestEnabled = value;
  }
  public resetModuleTestEnabled() {
    this._moduleTestEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleTestEnabledInput() {
    return this._moduleTestEnabled;
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

  // run_tests_on_pull_request - computed: false, optional: true, required: false
  private _runTestsOnPullRequest?: boolean | cdktf.IResolvable; 
  public get runTestsOnPullRequest() {
    return this.getBooleanAttribute('run_tests_on_pull_request');
  }
  public set runTestsOnPullRequest(value: boolean | cdktf.IResolvable) {
    this._runTestsOnPullRequest = value;
  }
  public resetRunTestsOnPullRequest() {
    this._runTestsOnPullRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTestsOnPullRequestInput() {
    return this._runTestsOnPullRequest;
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

  // tag_prefix - computed: false, optional: true, required: false
  private _tagPrefix?: string; 
  public get tagPrefix() {
    return this.getStringAttribute('tag_prefix');
  }
  public set tagPrefix(value: string) {
    this._tagPrefix = value;
  }
  public resetTagPrefix() {
    this._tagPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPrefixInput() {
    return this._tagPrefix;
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
      bitbucket_client_key: cdktf.stringToTerraform(this._bitbucketClientKey),
      description: cdktf.stringToTerraform(this._description),
      github_installation_id: cdktf.numberToTerraform(this._githubInstallationId),
      id: cdktf.stringToTerraform(this._id),
      is_azure_devops: cdktf.booleanToTerraform(this._isAzureDevops),
      is_bitbucket_server: cdktf.booleanToTerraform(this._isBitbucketServer),
      is_github_enterprise: cdktf.booleanToTerraform(this._isGithubEnterprise),
      is_gitlab: cdktf.booleanToTerraform(this._isGitlab),
      is_gitlab_enterprise: cdktf.booleanToTerraform(this._isGitlabEnterprise),
      module_name: cdktf.stringToTerraform(this._moduleName),
      module_provider: cdktf.stringToTerraform(this._moduleProvider),
      module_test_enabled: cdktf.booleanToTerraform(this._moduleTestEnabled),
      opentofu_version: cdktf.stringToTerraform(this._opentofuVersion),
      path: cdktf.stringToTerraform(this._path),
      repository: cdktf.stringToTerraform(this._repository),
      run_tests_on_pull_request: cdktf.booleanToTerraform(this._runTestsOnPullRequest),
      ssh_keys: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._sshKeys),
      tag_prefix: cdktf.stringToTerraform(this._tagPrefix),
      token_id: cdktf.stringToTerraform(this._tokenId),
      token_name: cdktf.stringToTerraform(this._tokenName),
      vcs_connection_id: cdktf.stringToTerraform(this._vcsConnectionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      github_installation_id: {
        value: cdktf.numberToHclTerraform(this._githubInstallationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      module_name: {
        value: cdktf.stringToHclTerraform(this._moduleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module_provider: {
        value: cdktf.stringToHclTerraform(this._moduleProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module_test_enabled: {
        value: cdktf.booleanToHclTerraform(this._moduleTestEnabled),
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
      run_tests_on_pull_request: {
        value: cdktf.booleanToHclTerraform(this._runTestsOnPullRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._sshKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      tag_prefix: {
        value: cdktf.stringToHclTerraform(this._tagPrefix),
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
