// https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/shared_environment_variable_project_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SharedEnvironmentVariableProjectLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Vercel project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/shared_environment_variable_project_link#project_id SharedEnvironmentVariableProjectLink#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the shared environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/shared_environment_variable_project_link#shared_environment_variable_id SharedEnvironmentVariableProjectLink#shared_environment_variable_id}
  */
  readonly sharedEnvironmentVariableId: string;
  /**
  * The ID of the Vercel team. Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/shared_environment_variable_project_link#team_id SharedEnvironmentVariableProjectLink#team_id}
  */
  readonly teamId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/shared_environment_variable_project_link vercel_shared_environment_variable_project_link}
*/
export class SharedEnvironmentVariableProjectLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_shared_environment_variable_project_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SharedEnvironmentVariableProjectLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SharedEnvironmentVariableProjectLink to import
  * @param importFromId The id of the existing SharedEnvironmentVariableProjectLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/shared_environment_variable_project_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SharedEnvironmentVariableProjectLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_shared_environment_variable_project_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/shared_environment_variable_project_link vercel_shared_environment_variable_project_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SharedEnvironmentVariableProjectLinkConfig
  */
  public constructor(scope: Construct, id: string, config: SharedEnvironmentVariableProjectLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_shared_environment_variable_project_link',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.0',
        providerVersionConstraint: '4.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._sharedEnvironmentVariableId = config.sharedEnvironmentVariableId;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // shared_environment_variable_id - computed: false, optional: false, required: true
  private _sharedEnvironmentVariableId?: string; 
  public get sharedEnvironmentVariableId() {
    return this.getStringAttribute('shared_environment_variable_id');
  }
  public set sharedEnvironmentVariableId(value: string) {
    this._sharedEnvironmentVariableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedEnvironmentVariableIdInput() {
    return this._sharedEnvironmentVariableId;
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      shared_environment_variable_id: cdktf.stringToTerraform(this._sharedEnvironmentVariableId),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_environment_variable_id: {
        value: cdktf.stringToHclTerraform(this._sharedEnvironmentVariableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
