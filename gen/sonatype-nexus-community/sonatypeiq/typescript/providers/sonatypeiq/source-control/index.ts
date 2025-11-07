// https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default branch to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control#base_branch SourceControl#base_branch}
  */
  readonly baseBranch?: string;
  /**
  * Must be a valid organization or application ID, for the root organization use `ROOT_ORGANIZATION_ID`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control#owner_id SourceControl#owner_id}
  */
  readonly ownerId: string;
  /**
  * The type of the owner, must be one of 'organization' or 'application'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control#owner_type SourceControl#owner_type}
  */
  readonly ownerType: string;
  /**
  * Set to true to enable the Pull Request Commenting feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control#pull_request_commenting_enabled SourceControl#pull_request_commenting_enabled}
  */
  readonly pullRequestCommentingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set to true to enable the Automated Pull Requests feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control#remediation_pull_requests_enabled SourceControl#remediation_pull_requests_enabled}
  */
  readonly remediationPullRequestsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The SCM provider URL for the repository, only valid for `owner_type` of `application`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control#repository_url SourceControl#repository_url}
  */
  readonly repositoryUrl?: string;
  /**
  * The type of SCM Provider, must be one of 'azure, bitbucket, github or gitlab'. This is required when the organization is set to `ROOT_ORGANIZATION_ID`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control#scm_provider SourceControl#scm_provider}
  */
  readonly scmProvider?: string;
  /**
  * Set to true to enable Nexus IQ triggered source control evaluations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control#source_control_evaluation_enabled SourceControl#source_control_evaluation_enabled}
  */
  readonly sourceControlEvaluationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The token for use with the SCM Provider 'scm_provider'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control#token SourceControl#token}
  */
  readonly token?: string;
  /**
  * The user name to use when setting `scm_provider` to `bitbucket`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control#user_name SourceControl#user_name}
  */
  readonly userName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control sonatypeiq_source_control}
*/
export class SourceControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonatypeiq_source_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceControl to import
  * @param importFromId The id of the existing SourceControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonatypeiq_source_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/source_control sonatypeiq_source_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceControlConfig
  */
  public constructor(scope: Construct, id: string, config: SourceControlConfig) {
    super(scope, id, {
      terraformResourceType: 'sonatypeiq_source_control',
      terraformGeneratorMetadata: {
        providerName: 'sonatypeiq',
        providerVersion: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseBranch = config.baseBranch;
    this._ownerId = config.ownerId;
    this._ownerType = config.ownerType;
    this._pullRequestCommentingEnabled = config.pullRequestCommentingEnabled;
    this._remediationPullRequestsEnabled = config.remediationPullRequestsEnabled;
    this._repositoryUrl = config.repositoryUrl;
    this._scmProvider = config.scmProvider;
    this._sourceControlEvaluationEnabled = config.sourceControlEvaluationEnabled;
    this._token = config.token;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_branch - computed: false, optional: true, required: false
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

  // owner_id - computed: false, optional: false, required: true
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // owner_type - computed: false, optional: false, required: true
  private _ownerType?: string; 
  public get ownerType() {
    return this.getStringAttribute('owner_type');
  }
  public set ownerType(value: string) {
    this._ownerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTypeInput() {
    return this._ownerType;
  }

  // pull_request_commenting_enabled - computed: false, optional: true, required: false
  private _pullRequestCommentingEnabled?: boolean | cdktf.IResolvable; 
  public get pullRequestCommentingEnabled() {
    return this.getBooleanAttribute('pull_request_commenting_enabled');
  }
  public set pullRequestCommentingEnabled(value: boolean | cdktf.IResolvable) {
    this._pullRequestCommentingEnabled = value;
  }
  public resetPullRequestCommentingEnabled() {
    this._pullRequestCommentingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestCommentingEnabledInput() {
    return this._pullRequestCommentingEnabled;
  }

  // remediation_pull_requests_enabled - computed: true, optional: true, required: false
  private _remediationPullRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get remediationPullRequestsEnabled() {
    return this.getBooleanAttribute('remediation_pull_requests_enabled');
  }
  public set remediationPullRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._remediationPullRequestsEnabled = value;
  }
  public resetRemediationPullRequestsEnabled() {
    this._remediationPullRequestsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationPullRequestsEnabledInput() {
    return this._remediationPullRequestsEnabled;
  }

  // repository_url - computed: false, optional: true, required: false
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  public resetRepositoryUrl() {
    this._repositoryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // scm_provider - computed: false, optional: true, required: false
  private _scmProvider?: string; 
  public get scmProvider() {
    return this.getStringAttribute('scm_provider');
  }
  public set scmProvider(value: string) {
    this._scmProvider = value;
  }
  public resetScmProvider() {
    this._scmProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmProviderInput() {
    return this._scmProvider;
  }

  // source_control_evaluation_enabled - computed: false, optional: true, required: false
  private _sourceControlEvaluationEnabled?: boolean | cdktf.IResolvable; 
  public get sourceControlEvaluationEnabled() {
    return this.getBooleanAttribute('source_control_evaluation_enabled');
  }
  public set sourceControlEvaluationEnabled(value: boolean | cdktf.IResolvable) {
    this._sourceControlEvaluationEnabled = value;
  }
  public resetSourceControlEvaluationEnabled() {
    this._sourceControlEvaluationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceControlEvaluationEnabledInput() {
    return this._sourceControlEvaluationEnabled;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_branch: cdktf.stringToTerraform(this._baseBranch),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      owner_type: cdktf.stringToTerraform(this._ownerType),
      pull_request_commenting_enabled: cdktf.booleanToTerraform(this._pullRequestCommentingEnabled),
      remediation_pull_requests_enabled: cdktf.booleanToTerraform(this._remediationPullRequestsEnabled),
      repository_url: cdktf.stringToTerraform(this._repositoryUrl),
      scm_provider: cdktf.stringToTerraform(this._scmProvider),
      source_control_evaluation_enabled: cdktf.booleanToTerraform(this._sourceControlEvaluationEnabled),
      token: cdktf.stringToTerraform(this._token),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_branch: {
        value: cdktf.stringToHclTerraform(this._baseBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_type: {
        value: cdktf.stringToHclTerraform(this._ownerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_request_commenting_enabled: {
        value: cdktf.booleanToHclTerraform(this._pullRequestCommentingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remediation_pull_requests_enabled: {
        value: cdktf.booleanToHclTerraform(this._remediationPullRequestsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository_url: {
        value: cdktf.stringToHclTerraform(this._repositoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scm_provider: {
        value: cdktf.stringToHclTerraform(this._scmProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_control_evaluation_enabled: {
        value: cdktf.booleanToHclTerraform(this._sourceControlEvaluationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
