// https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectEnvironmentVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * A comment explaining what the environment variable is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable#comment ProjectEnvironmentVariable#comment}
  */
  readonly comment?: string;
  /**
  * The IDs of Custom Environments that the Environment Variable should be present on. At least one of `target` or `custom_environment_ids` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable#custom_environment_ids ProjectEnvironmentVariable#custom_environment_ids}
  */
  readonly customEnvironmentIds?: string[];
  /**
  * The git branch of the Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable#git_branch ProjectEnvironmentVariable#git_branch}
  */
  readonly gitBranch?: string;
  /**
  * The name of the Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable#key ProjectEnvironmentVariable#key}
  */
  readonly key: string;
  /**
  * The ID of the Vercel project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable#project_id ProjectEnvironmentVariable#project_id}
  */
  readonly projectId: string;
  /**
  * Whether the Environment Variable is sensitive or not. (May be affected by a [team-wide environment variable policy](https://vercel.com/docs/projects/environment-variables/sensitive-environment-variables#environment-variables-policy))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable#sensitive ProjectEnvironmentVariable#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * The environments that the Environment Variable should be present on. Valid targets are either `production`, `preview`, or `development`. At least one of `target` or `custom_environment_ids` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable#target ProjectEnvironmentVariable#target}
  */
  readonly target?: string[];
  /**
  * The ID of the Vercel team.Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable#team_id ProjectEnvironmentVariable#team_id}
  */
  readonly teamId?: string;
  /**
  * The value of the Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable#value ProjectEnvironmentVariable#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable vercel_project_environment_variable}
*/
export class ProjectEnvironmentVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_project_environment_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectEnvironmentVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectEnvironmentVariable to import
  * @param importFromId The id of the existing ProjectEnvironmentVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectEnvironmentVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_project_environment_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/project_environment_variable vercel_project_environment_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectEnvironmentVariableConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectEnvironmentVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_project_environment_variable',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._customEnvironmentIds = config.customEnvironmentIds;
    this._gitBranch = config.gitBranch;
    this._key = config.key;
    this._projectId = config.projectId;
    this._sensitive = config.sensitive;
    this._target = config.target;
    this._teamId = config.teamId;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // custom_environment_ids - computed: true, optional: true, required: false
  private _customEnvironmentIds?: string[]; 
  public get customEnvironmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_environment_ids'));
  }
  public set customEnvironmentIds(value: string[]) {
    this._customEnvironmentIds = value;
  }
  public resetCustomEnvironmentIds() {
    this._customEnvironmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEnvironmentIdsInput() {
    return this._customEnvironmentIds;
  }

  // git_branch - computed: false, optional: true, required: false
  private _gitBranch?: string; 
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }
  public set gitBranch(value: string) {
    this._gitBranch = value;
  }
  public resetGitBranch() {
    this._gitBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitBranchInput() {
    return this._gitBranch;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // sensitive - computed: true, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string[]; 
  public get target() {
    return cdktf.Fn.tolist(this.getListAttribute('target'));
  }
  public set target(value: string[]) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      custom_environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customEnvironmentIds),
      git_branch: cdktf.stringToTerraform(this._gitBranch),
      key: cdktf.stringToTerraform(this._key),
      project_id: cdktf.stringToTerraform(this._projectId),
      sensitive: cdktf.booleanToTerraform(this._sensitive),
      target: cdktf.listMapper(cdktf.stringToTerraform, false)(this._target),
      team_id: cdktf.stringToTerraform(this._teamId),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_environment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customEnvironmentIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      git_branch: {
        value: cdktf.stringToHclTerraform(this._gitBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      sensitive: {
        value: cdktf.booleanToHclTerraform(this._sensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._target),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
