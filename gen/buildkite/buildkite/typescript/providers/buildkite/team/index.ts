// https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default role for new members of the team. This can be either `MEMBER` or `MAINTAINER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/team#default_member_role Team#default_member_role}
  */
  readonly defaultMemberRole: string;
  /**
  * Whether this is the default team for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/team#default_team Team#default_team}
  */
  readonly defaultTeam: boolean | cdktf.IResolvable;
  /**
  * A description for the team. This is displayed in the Buildkite UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/team#description Team#description}
  */
  readonly description?: string;
  /**
  * Whether members of the team can create Pipelines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/team#members_can_create_pipelines Team#members_can_create_pipelines}
  */
  readonly membersCanCreatePipelines?: boolean | cdktf.IResolvable;
  /**
  * The name of the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/team#name Team#name}
  */
  readonly name: string;
  /**
  * The privacy setting for the team. This can be either `VISIBLE` or `SECRET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/team#privacy Team#privacy}
  */
  readonly privacy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/team buildkite_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.0/docs/resources/team buildkite_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_team',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.27.0',
        providerVersionConstraint: '1.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultMemberRole = config.defaultMemberRole;
    this._defaultTeam = config.defaultTeam;
    this._description = config.description;
    this._membersCanCreatePipelines = config.membersCanCreatePipelines;
    this._name = config.name;
    this._privacy = config.privacy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_member_role - computed: false, optional: false, required: true
  private _defaultMemberRole?: string; 
  public get defaultMemberRole() {
    return this.getStringAttribute('default_member_role');
  }
  public set defaultMemberRole(value: string) {
    this._defaultMemberRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMemberRoleInput() {
    return this._defaultMemberRole;
  }

  // default_team - computed: false, optional: false, required: true
  private _defaultTeam?: boolean | cdktf.IResolvable; 
  public get defaultTeam() {
    return this.getBooleanAttribute('default_team');
  }
  public set defaultTeam(value: boolean | cdktf.IResolvable) {
    this._defaultTeam = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTeamInput() {
    return this._defaultTeam;
  }

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

  // members_can_create_pipelines - computed: true, optional: true, required: false
  private _membersCanCreatePipelines?: boolean | cdktf.IResolvable; 
  public get membersCanCreatePipelines() {
    return this.getBooleanAttribute('members_can_create_pipelines');
  }
  public set membersCanCreatePipelines(value: boolean | cdktf.IResolvable) {
    this._membersCanCreatePipelines = value;
  }
  public resetMembersCanCreatePipelines() {
    this._membersCanCreatePipelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersCanCreatePipelinesInput() {
    return this._membersCanCreatePipelines;
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

  // privacy - computed: false, optional: false, required: true
  private _privacy?: string; 
  public get privacy() {
    return this.getStringAttribute('privacy');
  }
  public set privacy(value: string) {
    this._privacy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyInput() {
    return this._privacy;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_member_role: cdktf.stringToTerraform(this._defaultMemberRole),
      default_team: cdktf.booleanToTerraform(this._defaultTeam),
      description: cdktf.stringToTerraform(this._description),
      members_can_create_pipelines: cdktf.booleanToTerraform(this._membersCanCreatePipelines),
      name: cdktf.stringToTerraform(this._name),
      privacy: cdktf.stringToTerraform(this._privacy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_member_role: {
        value: cdktf.stringToHclTerraform(this._defaultMemberRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_team: {
        value: cdktf.booleanToHclTerraform(this._defaultTeam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members_can_create_pipelines: {
        value: cdktf.booleanToHclTerraform(this._membersCanCreatePipelines),
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
      privacy: {
        value: cdktf.stringToHclTerraform(this._privacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
