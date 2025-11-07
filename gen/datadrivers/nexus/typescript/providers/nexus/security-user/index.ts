// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email address associated with the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user#email SecurityUser#email}
  */
  readonly email: string;
  /**
  * The first name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user#firstname SecurityUser#firstname}
  */
  readonly firstname: string;
  /**
  * The last name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user#lastname SecurityUser#lastname}
  */
  readonly lastname: string;
  /**
  * The password for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user#password SecurityUser#password}
  */
  readonly password: string;
  /**
  * The roles which the user has been assigned within Nexus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user#roles SecurityUser#roles}
  */
  readonly roles?: string[];
  /**
  * The user's status, e.g. active or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user#status SecurityUser#status}
  */
  readonly status?: string;
  /**
  * The userid which is required for login. This value cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user#userid SecurityUser#userid}
  */
  readonly userid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user nexus_security_user}
*/
export class SecurityUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_security_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityUser to import
  * @param importFromId The id of the existing SecurityUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_security_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/security_user nexus_security_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityUserConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityUserConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_security_user',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._firstname = config.firstname;
    this._lastname = config.lastname;
    this._password = config.password;
    this._roles = config.roles;
    this._status = config.status;
    this._userid = config.userid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // firstname - computed: false, optional: false, required: true
  private _firstname?: string; 
  public get firstname() {
    return this.getStringAttribute('firstname');
  }
  public set firstname(value: string) {
    this._firstname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstnameInput() {
    return this._firstname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lastname - computed: false, optional: false, required: true
  private _lastname?: string; 
  public get lastname() {
    return this.getStringAttribute('lastname');
  }
  public set lastname(value: string) {
    this._lastname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastnameInput() {
    return this._lastname;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // userid - computed: false, optional: false, required: true
  private _userid?: string; 
  public get userid() {
    return this.getStringAttribute('userid');
  }
  public set userid(value: string) {
    this._userid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useridInput() {
    return this._userid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      firstname: cdktf.stringToTerraform(this._firstname),
      lastname: cdktf.stringToTerraform(this._lastname),
      password: cdktf.stringToTerraform(this._password),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      status: cdktf.stringToTerraform(this._status),
      userid: cdktf.stringToTerraform(this._userid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firstname: {
        value: cdktf.stringToHclTerraform(this._firstname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lastname: {
        value: cdktf.stringToHclTerraform(this._lastname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userid: {
        value: cdktf.stringToHclTerraform(this._userid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
