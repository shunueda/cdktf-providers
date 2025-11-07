// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user Email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * If the user must change the password first login. Applicable only one time, Later for user password resets use aqua console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/user#first_time User#first_time}
  */
  readonly firstTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/user#name User#name}
  */
  readonly name?: string;
  /**
  * Login password for the user; string, required, at least 8 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/user#password User#password}
  */
  readonly password: string;
  /**
  * Password confirmation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/user#password_confirm User#password_confirm}
  */
  readonly passwordConfirm?: string;
  /**
  * The roles that will be assigned to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/user#roles User#roles}
  */
  readonly roles: string[];
  /**
  * The user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/user#user_id User#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/user aquasec_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/user aquasec_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_user',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0'
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
    this._firstTime = config.firstTime;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._passwordConfirm = config.passwordConfirm;
    this._roles = config.roles;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // first_time - computed: false, optional: true, required: false
  private _firstTime?: boolean | cdktf.IResolvable; 
  public get firstTime() {
    return this.getBooleanAttribute('first_time');
  }
  public set firstTime(value: boolean | cdktf.IResolvable) {
    this._firstTime = value;
  }
  public resetFirstTime() {
    this._firstTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstTimeInput() {
    return this._firstTime;
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

  // is_super - computed: true, optional: false, required: false
  public get isSuper() {
    return this.getBooleanAttribute('is_super');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // password_confirm - computed: false, optional: true, required: false
  private _passwordConfirm?: string; 
  public get passwordConfirm() {
    return this.getStringAttribute('password_confirm');
  }
  public set passwordConfirm(value: string) {
    this._passwordConfirm = value;
  }
  public resetPasswordConfirm() {
    this._passwordConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordConfirmInput() {
    return this._passwordConfirm;
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // ui_access - computed: true, optional: false, required: false
  public get uiAccess() {
    return this.getBooleanAttribute('ui_access');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      first_time: cdktf.booleanToTerraform(this._firstTime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_confirm: cdktf.stringToTerraform(this._passwordConfirm),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      user_id: cdktf.stringToTerraform(this._userId),
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
      first_time: {
        value: cdktf.booleanToHclTerraform(this._firstTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_confirm: {
        value: cdktf.stringToHclTerraform(this._passwordConfirm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
