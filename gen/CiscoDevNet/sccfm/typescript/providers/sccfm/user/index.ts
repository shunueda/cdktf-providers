// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The first name of the user. This is only used for non-API users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/user#first_name User#first_name}
  */
  readonly firstName?: string;
  /**
  * Indicate whether this user is an [API only user](https://www.cisco.com/c/en/us/td/docs/security/cdo/managing-ftd-with-cdo/managing-ftd-with-cisco-defense-orchestrator/basics-of-cisco-defense-orchestrator.html?bookSearch=true#Cisco_Task.dita_d5ae397b-5aa5-4de0-82c1-a4aff63c5ba1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/user#is_api_only_user User#is_api_only_user}
  */
  readonly isApiOnlyUser: boolean | cdktf.IResolvable;
  /**
  * The last name of the user. This is only used for non-API users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/user#last_name User#last_name}
  */
  readonly lastName?: string;
  /**
  * The username. If the user is not an [API only user](https://www.cisco.com/c/en/us/td/docs/security/cdo/managing-ftd-with-cdo/managing-ftd-with-cisco-defense-orchestrator/basics-of-cisco-defense-orchestrator.html?bookSearch=true#Cisco_Task.dita_d5ae397b-5aa5-4de0-82c1-a4aff63c5ba1), it must be an e-mail address; if the user is an API-only user, it must not be an email address, and CDO will generate a name for the user prefixed by the value provided here (see `generated_username`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * There are a variety of user roles in Cisco Defense Orchestrator (CDO). User roles are configured for each user on each tenant. See [User Roles in CDO](https://www.cisco.com/c/en/us/td/docs/security/cdo/managing-asa-with-cdo/managing-asa-with-cisco-defense-orchestrator/basics-of-cisco-defense-orchestrator.html#User_Roles) to learn more. Valid Values: (ROLE_READ_ONLY, ROLE_ADMIN, ROLE_SUPER_ADMIN, ROLE_DEPLOY_ONLY, ROLE_EDIT_ONLY, ROLE_VPN_SESSIONS_MANAGER)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/user#role User#role}
  */
  readonly role: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/user sccfm_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/user sccfm_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_user',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firstName = config.firstName;
    this._isApiOnlyUser = config.isApiOnlyUser;
    this._lastName = config.lastName;
    this._name = config.name;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // generated_username - computed: true, optional: false, required: false
  public get generatedUsername() {
    return this.getStringAttribute('generated_username');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_api_only_user - computed: false, optional: false, required: true
  private _isApiOnlyUser?: boolean | cdktf.IResolvable; 
  public get isApiOnlyUser() {
    return this.getBooleanAttribute('is_api_only_user');
  }
  public set isApiOnlyUser(value: boolean | cdktf.IResolvable) {
    this._isApiOnlyUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isApiOnlyUserInput() {
    return this._isApiOnlyUser;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      first_name: cdktf.stringToTerraform(this._firstName),
      is_api_only_user: cdktf.booleanToTerraform(this._isApiOnlyUser),
      last_name: cdktf.stringToTerraform(this._lastName),
      name: cdktf.stringToTerraform(this._name),
      role: cdktf.stringToTerraform(this._role),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_api_only_user: {
        value: cdktf.booleanToHclTerraform(this._isApiOnlyUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
