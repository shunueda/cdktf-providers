// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of SSH authorized keys for the user (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user#authorized_keys User#authorized_keys}
  */
  readonly authorizedKeys?: string[];
  /**
  * Account expiration status. Value can be 'enabled', 'locked', or a specific expiry date in YYYY-MM-DD format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user#expiry_status User#expiry_status}
  */
  readonly expiryStatus?: string;
  /**
  * Password for the user account. Must meet F5OS device password policy requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user#password User#password}
  */
  readonly password: string;
  /**
  * Specifies primary role assigned to the user (e.g., admin, operator, user).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user#role User#role}
  */
  readonly role: string;
  /**
  * Optional secondary role assigned to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user#secondary_role User#secondary_role}
  */
  readonly secondaryRole?: string;
  /**
  * Specifies assigned username of user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user#username User#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user f5os_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/user f5os_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_user',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0',
        providerVersionConstraint: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizedKeys = config.authorizedKeys;
    this._expiryStatus = config.expiryStatus;
    this._password = config.password;
    this._role = config.role;
    this._secondaryRole = config.secondaryRole;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_keys - computed: false, optional: true, required: false
  private _authorizedKeys?: string[]; 
  public get authorizedKeys() {
    return this.getListAttribute('authorized_keys');
  }
  public set authorizedKeys(value: string[]) {
    this._authorizedKeys = value;
  }
  public resetAuthorizedKeys() {
    this._authorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeysInput() {
    return this._authorizedKeys;
  }

  // expiry_status - computed: false, optional: true, required: false
  private _expiryStatus?: string; 
  public get expiryStatus() {
    return this.getStringAttribute('expiry_status');
  }
  public set expiryStatus(value: string) {
    this._expiryStatus = value;
  }
  public resetExpiryStatus() {
    this._expiryStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryStatusInput() {
    return this._expiryStatus;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // secondary_role - computed: false, optional: true, required: false
  private _secondaryRole?: string; 
  public get secondaryRole() {
    return this.getStringAttribute('secondary_role');
  }
  public set secondaryRole(value: string) {
    this._secondaryRole = value;
  }
  public resetSecondaryRole() {
    this._secondaryRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryRoleInput() {
    return this._secondaryRole;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedKeys),
      expiry_status: cdktf.stringToTerraform(this._expiryStatus),
      password: cdktf.stringToTerraform(this._password),
      role: cdktf.stringToTerraform(this._role),
      secondary_role: cdktf.stringToTerraform(this._secondaryRole),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      expiry_status: {
        value: cdktf.stringToHclTerraform(this._expiryStatus),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_role: {
        value: cdktf.stringToHclTerraform(this._secondaryRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
