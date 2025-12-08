// https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/shared_environment_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SharedEnvironmentVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the shared environment variable should be applied to all custom environments in the linked projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/shared_environment_variable#apply_to_all_custom_environments SharedEnvironmentVariable#apply_to_all_custom_environments}
  */
  readonly applyToAllCustomEnvironments?: boolean | cdktf.IResolvable;
  /**
  * A comment explaining what the environment variable is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/shared_environment_variable#comment SharedEnvironmentVariable#comment}
  */
  readonly comment?: string;
  /**
  * The name of the Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/shared_environment_variable#key SharedEnvironmentVariable#key}
  */
  readonly key: string;
  /**
  * The ID of the Vercel project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/shared_environment_variable#project_ids SharedEnvironmentVariable#project_ids}
  */
  readonly projectIds: string[];
  /**
  * Whether the Environment Variable is sensitive or not. (May be affected by a [team-wide environment variable policy](https://vercel.com/docs/projects/environment-variables/sensitive-environment-variables#environment-variables-policy))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/shared_environment_variable#sensitive SharedEnvironmentVariable#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * The environments that the Environment Variable should be present on. Valid targets are either `production`, `preview`, or `development`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/shared_environment_variable#target SharedEnvironmentVariable#target}
  */
  readonly target?: string[];
  /**
  * The ID of the Vercel team. Shared environment variables require a team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/shared_environment_variable#team_id SharedEnvironmentVariable#team_id}
  */
  readonly teamId?: string;
  /**
  * The value of the Environment Variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/shared_environment_variable#value SharedEnvironmentVariable#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/shared_environment_variable vercel_shared_environment_variable}
*/
export class SharedEnvironmentVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_shared_environment_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SharedEnvironmentVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SharedEnvironmentVariable to import
  * @param importFromId The id of the existing SharedEnvironmentVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/shared_environment_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SharedEnvironmentVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_shared_environment_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/shared_environment_variable vercel_shared_environment_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SharedEnvironmentVariableConfig
  */
  public constructor(scope: Construct, id: string, config: SharedEnvironmentVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_shared_environment_variable',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.2',
        providerVersionConstraint: '4.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyToAllCustomEnvironments = config.applyToAllCustomEnvironments;
    this._comment = config.comment;
    this._key = config.key;
    this._projectIds = config.projectIds;
    this._sensitive = config.sensitive;
    this._target = config.target;
    this._teamId = config.teamId;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_to_all_custom_environments - computed: true, optional: true, required: false
  private _applyToAllCustomEnvironments?: boolean | cdktf.IResolvable; 
  public get applyToAllCustomEnvironments() {
    return this.getBooleanAttribute('apply_to_all_custom_environments');
  }
  public set applyToAllCustomEnvironments(value: boolean | cdktf.IResolvable) {
    this._applyToAllCustomEnvironments = value;
  }
  public resetApplyToAllCustomEnvironments() {
    this._applyToAllCustomEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToAllCustomEnvironmentsInput() {
    return this._applyToAllCustomEnvironments;
  }

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

  // project_ids - computed: false, optional: false, required: true
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
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
      apply_to_all_custom_environments: cdktf.booleanToTerraform(this._applyToAllCustomEnvironments),
      comment: cdktf.stringToTerraform(this._comment),
      key: cdktf.stringToTerraform(this._key),
      project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectIds),
      sensitive: cdktf.booleanToTerraform(this._sensitive),
      target: cdktf.listMapper(cdktf.stringToTerraform, false)(this._target),
      team_id: cdktf.stringToTerraform(this._teamId),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_to_all_custom_environments: {
        value: cdktf.booleanToHclTerraform(this._applyToAllCustomEnvironments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
