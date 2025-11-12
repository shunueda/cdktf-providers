// https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceVcsProviderLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to create speculative plans automatically for PRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link#auto_speculative_plan WorkspaceVcsProviderLink#auto_speculative_plan}
  */
  readonly autoSpeculativePlan: boolean | cdktf.IResolvable;
  /**
  * The repository branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link#branch WorkspaceVcsProviderLink#branch}
  */
  readonly branch?: string;
  /**
  * Glob patterns to use for monitoring changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link#glob_patterns WorkspaceVcsProviderLink#glob_patterns}
  */
  readonly globPatterns: string[];
  /**
  * The module's directory path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link#module_directory WorkspaceVcsProviderLink#module_directory}
  */
  readonly moduleDirectory: string;
  /**
  * The path portion of the repository URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link#repository_path WorkspaceVcsProviderLink#repository_path}
  */
  readonly repositoryPath: string;
  /**
  * A regular expression that specifies which tags trigger runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link#tag_regex WorkspaceVcsProviderLink#tag_regex}
  */
  readonly tagRegex?: string;
  /**
  * The string identifier of the  VCS provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link#vcs_provider_id WorkspaceVcsProviderLink#vcs_provider_id}
  */
  readonly vcsProviderId: string;
  /**
  * Whether to disable the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link#webhook_disabled WorkspaceVcsProviderLink#webhook_disabled}
  */
  readonly webhookDisabled: boolean | cdktf.IResolvable;
  /**
  * The resource path of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link#workspace_path WorkspaceVcsProviderLink#workspace_path}
  */
  readonly workspacePath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link tharsis_workspace_vcs_provider_link}
*/
export class WorkspaceVcsProviderLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis_workspace_vcs_provider_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceVcsProviderLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceVcsProviderLink to import
  * @param importFromId The id of the existing WorkspaceVcsProviderLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceVcsProviderLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis_workspace_vcs_provider_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/workspace_vcs_provider_link tharsis_workspace_vcs_provider_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceVcsProviderLinkConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceVcsProviderLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'tharsis_workspace_vcs_provider_link',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.14.1',
        providerVersionConstraint: '0.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSpeculativePlan = config.autoSpeculativePlan;
    this._branch = config.branch;
    this._globPatterns = config.globPatterns;
    this._moduleDirectory = config.moduleDirectory;
    this._repositoryPath = config.repositoryPath;
    this._tagRegex = config.tagRegex;
    this._vcsProviderId = config.vcsProviderId;
    this._webhookDisabled = config.webhookDisabled;
    this._workspacePath = config.workspacePath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_speculative_plan - computed: false, optional: false, required: true
  private _autoSpeculativePlan?: boolean | cdktf.IResolvable; 
  public get autoSpeculativePlan() {
    return this.getBooleanAttribute('auto_speculative_plan');
  }
  public set autoSpeculativePlan(value: boolean | cdktf.IResolvable) {
    this._autoSpeculativePlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSpeculativePlanInput() {
    return this._autoSpeculativePlan;
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

  // glob_patterns - computed: false, optional: false, required: true
  private _globPatterns?: string[]; 
  public get globPatterns() {
    return this.getListAttribute('glob_patterns');
  }
  public set globPatterns(value: string[]) {
    this._globPatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globPatternsInput() {
    return this._globPatterns;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // module_directory - computed: false, optional: false, required: true
  private _moduleDirectory?: string; 
  public get moduleDirectory() {
    return this.getStringAttribute('module_directory');
  }
  public set moduleDirectory(value: string) {
    this._moduleDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleDirectoryInput() {
    return this._moduleDirectory;
  }

  // repository_path - computed: false, optional: false, required: true
  private _repositoryPath?: string; 
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
  public set repositoryPath(value: string) {
    this._repositoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPathInput() {
    return this._repositoryPath;
  }

  // tag_regex - computed: true, optional: true, required: false
  private _tagRegex?: string; 
  public get tagRegex() {
    return this.getStringAttribute('tag_regex');
  }
  public set tagRegex(value: string) {
    this._tagRegex = value;
  }
  public resetTagRegex() {
    this._tagRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagRegexInput() {
    return this._tagRegex;
  }

  // vcs_provider_id - computed: false, optional: false, required: true
  private _vcsProviderId?: string; 
  public get vcsProviderId() {
    return this.getStringAttribute('vcs_provider_id');
  }
  public set vcsProviderId(value: string) {
    this._vcsProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsProviderIdInput() {
    return this._vcsProviderId;
  }

  // webhook_disabled - computed: false, optional: false, required: true
  private _webhookDisabled?: boolean | cdktf.IResolvable; 
  public get webhookDisabled() {
    return this.getBooleanAttribute('webhook_disabled');
  }
  public set webhookDisabled(value: boolean | cdktf.IResolvable) {
    this._webhookDisabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookDisabledInput() {
    return this._webhookDisabled;
  }

  // webhook_id - computed: true, optional: false, required: false
  public get webhookId() {
    return this.getStringAttribute('webhook_id');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // workspace_path - computed: false, optional: false, required: true
  private _workspacePath?: string; 
  public get workspacePath() {
    return this.getStringAttribute('workspace_path');
  }
  public set workspacePath(value: string) {
    this._workspacePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspacePathInput() {
    return this._workspacePath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_speculative_plan: cdktf.booleanToTerraform(this._autoSpeculativePlan),
      branch: cdktf.stringToTerraform(this._branch),
      glob_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globPatterns),
      module_directory: cdktf.stringToTerraform(this._moduleDirectory),
      repository_path: cdktf.stringToTerraform(this._repositoryPath),
      tag_regex: cdktf.stringToTerraform(this._tagRegex),
      vcs_provider_id: cdktf.stringToTerraform(this._vcsProviderId),
      webhook_disabled: cdktf.booleanToTerraform(this._webhookDisabled),
      workspace_path: cdktf.stringToTerraform(this._workspacePath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_speculative_plan: {
        value: cdktf.booleanToHclTerraform(this._autoSpeculativePlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glob_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._globPatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      module_directory: {
        value: cdktf.stringToHclTerraform(this._moduleDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_path: {
        value: cdktf.stringToHclTerraform(this._repositoryPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_regex: {
        value: cdktf.stringToHclTerraform(this._tagRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcs_provider_id: {
        value: cdktf.stringToHclTerraform(this._vcsProviderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_disabled: {
        value: cdktf.booleanToHclTerraform(this._webhookDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workspace_path: {
        value: cdktf.stringToHclTerraform(this._workspacePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
