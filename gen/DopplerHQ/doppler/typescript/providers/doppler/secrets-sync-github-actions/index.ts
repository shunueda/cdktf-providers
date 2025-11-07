// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsSyncGithubActionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Doppler config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions#config SecretsSyncGithubActions#config}
  */
  readonly config: string;
  /**
  * The behavior to be performed on the secrets in the sync target when this resource is deleted or recreated. Either `leave_in_target` (default) or `delete_from_target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions#delete_behavior SecretsSyncGithubActions#delete_behavior}
  */
  readonly deleteBehavior?: string;
  /**
  * The GitHub repo environment name to sync to (only used when `sync_target` is set to "repo")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions#environment_name SecretsSyncGithubActions#environment_name}
  */
  readonly environmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions#id SecretsSyncGithubActions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The slug of the integration to use for this sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions#integration SecretsSyncGithubActions#integration}
  */
  readonly integration: string;
  /**
  * Either "all" or "private", based on the which repos you want to have access (only used when `sync_target` is set to "org")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions#org_scope SecretsSyncGithubActions#org_scope}
  */
  readonly orgScope?: string;
  /**
  * The name of the Doppler project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions#project SecretsSyncGithubActions#project}
  */
  readonly project: string;
  /**
  * The GitHub repo name to sync to (only used when `sync_target` is set to "repo")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions#repo_name SecretsSyncGithubActions#repo_name}
  */
  readonly repoName?: string;
  /**
  * Either "repo" or "org", based on the resource type to sync to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions#sync_target SecretsSyncGithubActions#sync_target}
  */
  readonly syncTarget: string;
  /**
  * When enabled, causes secrets with the `unmasked` visibility type to get synced as GitHub Action Variables. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions#sync_unmasked_as_variables SecretsSyncGithubActions#sync_unmasked_as_variables}
  */
  readonly syncUnmaskedAsVariables?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions doppler_secrets_sync_github_actions}
*/
export class SecretsSyncGithubActions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_secrets_sync_github_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretsSyncGithubActions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsSyncGithubActions to import
  * @param importFromId The id of the existing SecretsSyncGithubActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsSyncGithubActions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_secrets_sync_github_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_github_actions doppler_secrets_sync_github_actions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsSyncGithubActionsConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsSyncGithubActionsConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_secrets_sync_github_actions',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._deleteBehavior = config.deleteBehavior;
    this._environmentName = config.environmentName;
    this._id = config.id;
    this._integration = config.integration;
    this._orgScope = config.orgScope;
    this._project = config.project;
    this._repoName = config.repoName;
    this._syncTarget = config.syncTarget;
    this._syncUnmaskedAsVariables = config.syncUnmaskedAsVariables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // delete_behavior - computed: false, optional: true, required: false
  private _deleteBehavior?: string; 
  public get deleteBehavior() {
    return this.getStringAttribute('delete_behavior');
  }
  public set deleteBehavior(value: string) {
    this._deleteBehavior = value;
  }
  public resetDeleteBehavior() {
    this._deleteBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBehaviorInput() {
    return this._deleteBehavior;
  }

  // environment_name - computed: false, optional: true, required: false
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  public resetEnvironmentName() {
    this._environmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
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

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }

  // org_scope - computed: false, optional: true, required: false
  private _orgScope?: string; 
  public get orgScope() {
    return this.getStringAttribute('org_scope');
  }
  public set orgScope(value: string) {
    this._orgScope = value;
  }
  public resetOrgScope() {
    this._orgScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgScopeInput() {
    return this._orgScope;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // repo_name - computed: false, optional: true, required: false
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

  // sync_target - computed: false, optional: false, required: true
  private _syncTarget?: string; 
  public get syncTarget() {
    return this.getStringAttribute('sync_target');
  }
  public set syncTarget(value: string) {
    this._syncTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTargetInput() {
    return this._syncTarget;
  }

  // sync_unmasked_as_variables - computed: false, optional: true, required: false
  private _syncUnmaskedAsVariables?: boolean | cdktf.IResolvable; 
  public get syncUnmaskedAsVariables() {
    return this.getBooleanAttribute('sync_unmasked_as_variables');
  }
  public set syncUnmaskedAsVariables(value: boolean | cdktf.IResolvable) {
    this._syncUnmaskedAsVariables = value;
  }
  public resetSyncUnmaskedAsVariables() {
    this._syncUnmaskedAsVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncUnmaskedAsVariablesInput() {
    return this._syncUnmaskedAsVariables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      delete_behavior: cdktf.stringToTerraform(this._deleteBehavior),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      id: cdktf.stringToTerraform(this._id),
      integration: cdktf.stringToTerraform(this._integration),
      org_scope: cdktf.stringToTerraform(this._orgScope),
      project: cdktf.stringToTerraform(this._project),
      repo_name: cdktf.stringToTerraform(this._repoName),
      sync_target: cdktf.stringToTerraform(this._syncTarget),
      sync_unmasked_as_variables: cdktf.booleanToTerraform(this._syncUnmaskedAsVariables),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_behavior: {
        value: cdktf.stringToHclTerraform(this._deleteBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
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
      integration: {
        value: cdktf.stringToHclTerraform(this._integration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_scope: {
        value: cdktf.stringToHclTerraform(this._orgScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_name: {
        value: cdktf.stringToHclTerraform(this._repoName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_target: {
        value: cdktf.stringToHclTerraform(this._syncTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_unmasked_as_variables: {
        value: cdktf.booleanToHclTerraform(this._syncUnmaskedAsVariables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
