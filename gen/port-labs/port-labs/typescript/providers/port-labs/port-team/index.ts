// https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortTeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_team#description PortTeam#description}
  */
  readonly description?: string;
  /**
  * The name of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_team#name PortTeam#name}
  */
  readonly name: string;
  /**
  * The users of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_team#users PortTeam#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_team port_team}
*/
export class PortTeam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortTeam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortTeam to import
  * @param importFromId The id of the existing PortTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortTeam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_team port_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortTeamConfig
  */
  public constructor(scope: Construct, id: string, config: PortTeamConfig) {
    super(scope, id, {
      terraformResourceType: 'port_team',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.15.1',
        providerVersionConstraint: '2.15.1'
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
    this._name = config.name;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
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

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
