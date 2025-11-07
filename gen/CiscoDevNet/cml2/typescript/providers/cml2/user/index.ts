// https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/user#description User#description}
  */
  readonly description?: string;
  /**
  * E-mail address of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * Full name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/user#fullname User#fullname}
  */
  readonly fullname?: string;
  /**
  * Set of group IDs where the user is member of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/user#groups User#groups}
  */
  readonly groups?: string[];
  /**
  * True if the user has admin rights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/user#is_admin User#is_admin}
  */
  readonly isAdmin?: boolean | cdktf.IResolvable;
  /**
  * Password of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/user#password User#password}
  */
  readonly password: string;
  /**
  * Resource pool ID, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/user#resource_pool User#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * Login name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/user#username User#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/user cml2_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cml2_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cml2_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/user cml2_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'cml2_user',
      terraformGeneratorMetadata: {
        providerName: 'cml2',
        providerVersion: '0.8.5'
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
    this._email = config.email;
    this._fullname = config.fullname;
    this._groups = config.groups;
    this._isAdmin = config.isAdmin;
    this._password = config.password;
    this._resourcePool = config.resourcePool;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // directory_dn - computed: true, optional: false, required: false
  public get directoryDn() {
    return this.getStringAttribute('directory_dn');
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // fullname - computed: false, optional: true, required: false
  private _fullname?: string; 
  public get fullname() {
    return this.getStringAttribute('fullname');
  }
  public set fullname(value: string) {
    this._fullname = value;
  }
  public resetFullname() {
    this._fullname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullnameInput() {
    return this._fullname;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_admin - computed: false, optional: true, required: false
  private _isAdmin?: boolean | cdktf.IResolvable; 
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }
  public set isAdmin(value: boolean | cdktf.IResolvable) {
    this._isAdmin = value;
  }
  public resetIsAdmin() {
    this._isAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdminInput() {
    return this._isAdmin;
  }

  // labs - computed: true, optional: false, required: false
  public get labs() {
    return cdktf.Fn.tolist(this.getListAttribute('labs'));
  }

  // opt_in - computed: true, optional: false, required: false
  public get optIn() {
    return this.getBooleanAttribute('opt_in');
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

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
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
      description: cdktf.stringToTerraform(this._description),
      email: cdktf.stringToTerraform(this._email),
      fullname: cdktf.stringToTerraform(this._fullname),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      is_admin: cdktf.booleanToTerraform(this._isAdmin),
      password: cdktf.stringToTerraform(this._password),
      resource_pool: cdktf.stringToTerraform(this._resourcePool),
      username: cdktf.stringToTerraform(this._username),
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
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fullname: {
        value: cdktf.stringToHclTerraform(this._fullname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_admin: {
        value: cdktf.booleanToHclTerraform(this._isAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_pool: {
        value: cdktf.stringToHclTerraform(this._resourcePool),
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
