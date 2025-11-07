// https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/team#administrators Team#administrators}
  */
  readonly administrators?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/team#name Team#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/team#pacticipants Team#pacticipants}
  */
  readonly pacticipants?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/team#users Team#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/team pact_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pact_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pact_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/team pact_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'pact_team',
      terraformGeneratorMetadata: {
        providerName: 'pact',
        providerVersion: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administrators = config.administrators;
    this._id = config.id;
    this._name = config.name;
    this._pacticipants = config.pacticipants;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrators - computed: false, optional: true, required: false
  private _administrators?: string[]; 
  public get administrators() {
    return cdktf.Fn.tolist(this.getListAttribute('administrators'));
  }
  public set administrators(value: string[]) {
    this._administrators = value;
  }
  public resetAdministrators() {
    this._administrators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorsInput() {
    return this._administrators;
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

  // pacticipants - computed: false, optional: true, required: false
  private _pacticipants?: string[]; 
  public get pacticipants() {
    return cdktf.Fn.tolist(this.getListAttribute('pacticipants'));
  }
  public set pacticipants(value: string[]) {
    this._pacticipants = value;
  }
  public resetPacticipants() {
    this._pacticipants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacticipantsInput() {
    return this._pacticipants;
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administrators: cdktf.listMapper(cdktf.stringToTerraform, false)(this._administrators),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pacticipants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pacticipants),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrators: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._administrators),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      pacticipants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pacticipants),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
