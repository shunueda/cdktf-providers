// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * the bitbucket client key used for integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#bitbucket_client_key CustomFlow#bitbucket_client_key}
  */
  readonly bitbucketClientKey?: string;
  /**
  * the env0 application installation id on the relevant github repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#github_installation_id CustomFlow#github_installation_id}
  */
  readonly githubInstallationId?: number;
  /**
  * the project id of the relevant repository (deprecated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#gitlab_project_id CustomFlow#gitlab_project_id}
  */
  readonly gitlabProjectId?: number;
  /**
  * true if this custom flow integrates with azure dev ops repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#is_azure_devops CustomFlow#is_azure_devops}
  */
  readonly isAzureDevops?: boolean | cdktf.IResolvable;
  /**
  * true if this custom flow uses bitbucket server repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#is_bitbucket_server CustomFlow#is_bitbucket_server}
  */
  readonly isBitbucketServer?: boolean | cdktf.IResolvable;
  /**
  * true if this custom flow uses github enterprise repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#is_github_enterprise CustomFlow#is_github_enterprise}
  */
  readonly isGithubEnterprise?: boolean | cdktf.IResolvable;
  /**
  * true if this custom flow integrates with gitlab repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#is_gitlab CustomFlow#is_gitlab}
  */
  readonly isGitlab?: boolean | cdktf.IResolvable;
  /**
  * true if this custom flow uses gitlab enterprise repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#is_gitlab_enterprise CustomFlow#is_gitlab_enterprise}
  */
  readonly isGitlabEnterprise?: boolean | cdktf.IResolvable;
  /**
  * name for the custom flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#name CustomFlow#name}
  */
  readonly name: string;
  /**
  * terraform / terragrunt file folder inside source code. Should be the full path including the .yaml/.yml file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#path CustomFlow#path}
  */
  readonly path?: string;
  /**
  * repository url for the custom flow source code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#repository CustomFlow#repository}
  */
  readonly repository: string;
  /**
  * source code revision (branch / tag) to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#revision CustomFlow#revision}
  */
  readonly revision?: string;
  /**
  * an array of references to 'data_ssh_key' to use when accessing git over ssh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#ssh_keys CustomFlow#ssh_keys}
  */
  readonly sshKeys?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * the git token id to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#token_id CustomFlow#token_id}
  */
  readonly tokenId?: string;
  /**
  * the VCS connection id to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#vcs_connection_id CustomFlow#vcs_connection_id}
  */
  readonly vcsConnectionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow env0_custom_flow}
*/
export class CustomFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_custom_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomFlow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomFlow to import
  * @param importFromId The id of the existing CustomFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_custom_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/custom_flow env0_custom_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomFlowConfig
  */
  public constructor(scope: Construct, id: string, config: CustomFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_custom_flow',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
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
    this._githubInstallationId = config.githubInstallationId;
    this._gitlabProjectId = config.gitlabProjectId;
    this._isAzureDevops = config.isAzureDevops;
    this._isBitbucketServer = config.isBitbucketServer;
    this._isGithubEnterprise = config.isGithubEnterprise;
    this._isGitlab = config.isGitlab;
    this._isGitlabEnterprise = config.isGitlabEnterprise;
    this._name = config.name;
    this._path = config.path;
    this._repository = config.repository;
    this._revision = config.revision;
    this._sshKeys = config.sshKeys;
    this._tokenId = config.tokenId;
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
      github_installation_id: cdktf.numberToTerraform(this._githubInstallationId),
      gitlab_project_id: cdktf.numberToTerraform(this._gitlabProjectId),
      is_azure_devops: cdktf.booleanToTerraform(this._isAzureDevops),
      is_bitbucket_server: cdktf.booleanToTerraform(this._isBitbucketServer),
      is_github_enterprise: cdktf.booleanToTerraform(this._isGithubEnterprise),
      is_gitlab: cdktf.booleanToTerraform(this._isGitlab),
      is_gitlab_enterprise: cdktf.booleanToTerraform(this._isGitlabEnterprise),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      repository: cdktf.stringToTerraform(this._repository),
      revision: cdktf.stringToTerraform(this._revision),
      ssh_keys: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._sshKeys),
      token_id: cdktf.stringToTerraform(this._tokenId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      token_id: {
        value: cdktf.stringToHclTerraform(this._tokenId),
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
