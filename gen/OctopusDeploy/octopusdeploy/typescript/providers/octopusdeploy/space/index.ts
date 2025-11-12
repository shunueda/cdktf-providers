// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of this space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/space#description Space#description}
  */
  readonly description?: string;
  /**
  * Specifies if this space is the default space in Octopus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/space#is_default Space#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Specifies the status of the task queue for this space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/space#is_task_queue_stopped Space#is_task_queue_stopped}
  */
  readonly isTaskQueueStopped?: boolean | cdktf.IResolvable;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/space#name Space#name}
  */
  readonly name: string;
  /**
  * The unique slug of this space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/space#slug Space#slug}
  */
  readonly slug?: string;
  /**
  * A list of user IDs designated to be managers of this space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/space#space_managers_team_members Space#space_managers_team_members}
  */
  readonly spaceManagersTeamMembers?: string[];
  /**
  * A list of team IDs designated to be managers of this space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/space#space_managers_teams Space#space_managers_teams}
  */
  readonly spaceManagersTeams?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/space octopusdeploy_space}
*/
export class Space extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Space resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Space to import
  * @param importFromId The id of the existing Space that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Space to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/space octopusdeploy_space} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpaceConfig
  */
  public constructor(scope: Construct, id: string, config: SpaceConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_space',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._isDefault = config.isDefault;
    this._isTaskQueueStopped = config.isTaskQueueStopped;
    this._name = config.name;
    this._slug = config.slug;
    this._spaceManagersTeamMembers = config.spaceManagersTeamMembers;
    this._spaceManagersTeams = config.spaceManagersTeams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // is_task_queue_stopped - computed: true, optional: true, required: false
  private _isTaskQueueStopped?: boolean | cdktf.IResolvable; 
  public get isTaskQueueStopped() {
    return this.getBooleanAttribute('is_task_queue_stopped');
  }
  public set isTaskQueueStopped(value: boolean | cdktf.IResolvable) {
    this._isTaskQueueStopped = value;
  }
  public resetIsTaskQueueStopped() {
    this._isTaskQueueStopped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTaskQueueStoppedInput() {
    return this._isTaskQueueStopped;
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

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // space_managers_team_members - computed: true, optional: true, required: false
  private _spaceManagersTeamMembers?: string[]; 
  public get spaceManagersTeamMembers() {
    return cdktf.Fn.tolist(this.getListAttribute('space_managers_team_members'));
  }
  public set spaceManagersTeamMembers(value: string[]) {
    this._spaceManagersTeamMembers = value;
  }
  public resetSpaceManagersTeamMembers() {
    this._spaceManagersTeamMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceManagersTeamMembersInput() {
    return this._spaceManagersTeamMembers;
  }

  // space_managers_teams - computed: true, optional: true, required: false
  private _spaceManagersTeams?: string[]; 
  public get spaceManagersTeams() {
    return cdktf.Fn.tolist(this.getListAttribute('space_managers_teams'));
  }
  public set spaceManagersTeams(value: string[]) {
    this._spaceManagersTeams = value;
  }
  public resetSpaceManagersTeams() {
    this._spaceManagersTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceManagersTeamsInput() {
    return this._spaceManagersTeams;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      is_task_queue_stopped: cdktf.booleanToTerraform(this._isTaskQueueStopped),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
      space_managers_team_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spaceManagersTeamMembers),
      space_managers_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spaceManagersTeams),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_task_queue_stopped: {
        value: cdktf.booleanToHclTerraform(this._isTaskQueueStopped),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_managers_team_members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spaceManagersTeamMembers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      space_managers_teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spaceManagersTeams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
