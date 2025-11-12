// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) E-mail of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This flag can be used to create the user in a non-root domain where user management is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user#is_domain_user User#is_domain_user}
  */
  readonly isDomainUser?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Full name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user#name User#name}
  */
  readonly name?: string;
  /**
  * (Updateable) The user password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user#password User#password}
  */
  readonly password: string;
  /**
  * (Updateable) Password change required flag. If set to true, user will be required to change their password on next successful login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user#password_change_required User#password_change_required}
  */
  readonly passwordChangeRequired?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) If true, user is not allowed to login from Web UI. Default - false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user#prevent_ui_login User#prevent_ui_login}
  */
  readonly preventUiLogin?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) User meta data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user#user_metadata User#user_metadata}
  */
  readonly userMetadata?: { [key: string]: string };
  /**
  * The user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user#username User#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user ciphertrust_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/user ciphertrust_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_user',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
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
    this._id = config.id;
    this._isDomainUser = config.isDomainUser;
    this._name = config.name;
    this._password = config.password;
    this._passwordChangeRequired = config.passwordChangeRequired;
    this._preventUiLogin = config.preventUiLogin;
    this._userMetadata = config.userMetadata;
    this._username = config.username;
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

  // is_domain_user - computed: false, optional: true, required: false
  private _isDomainUser?: boolean | cdktf.IResolvable; 
  public get isDomainUser() {
    return this.getBooleanAttribute('is_domain_user');
  }
  public set isDomainUser(value: boolean | cdktf.IResolvable) {
    this._isDomainUser = value;
  }
  public resetIsDomainUser() {
    this._isDomainUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDomainUserInput() {
    return this._isDomainUser;
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

  // password_change_required - computed: false, optional: true, required: false
  private _passwordChangeRequired?: boolean | cdktf.IResolvable; 
  public get passwordChangeRequired() {
    return this.getBooleanAttribute('password_change_required');
  }
  public set passwordChangeRequired(value: boolean | cdktf.IResolvable) {
    this._passwordChangeRequired = value;
  }
  public resetPasswordChangeRequired() {
    this._passwordChangeRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeRequiredInput() {
    return this._passwordChangeRequired;
  }

  // prevent_ui_login - computed: false, optional: true, required: false
  private _preventUiLogin?: boolean | cdktf.IResolvable; 
  public get preventUiLogin() {
    return this.getBooleanAttribute('prevent_ui_login');
  }
  public set preventUiLogin(value: boolean | cdktf.IResolvable) {
    this._preventUiLogin = value;
  }
  public resetPreventUiLogin() {
    this._preventUiLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventUiLoginInput() {
    return this._preventUiLogin;
  }

  // user_metadata - computed: false, optional: true, required: false
  private _userMetadata?: { [key: string]: string }; 
  public get userMetadata() {
    return this.getStringMapAttribute('user_metadata');
  }
  public set userMetadata(value: { [key: string]: string }) {
    this._userMetadata = value;
  }
  public resetUserMetadata() {
    this._userMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMetadataInput() {
    return this._userMetadata;
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
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      is_domain_user: cdktf.booleanToTerraform(this._isDomainUser),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_change_required: cdktf.booleanToTerraform(this._passwordChangeRequired),
      prevent_ui_login: cdktf.booleanToTerraform(this._preventUiLogin),
      user_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._userMetadata),
      username: cdktf.stringToTerraform(this._username),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_domain_user: {
        value: cdktf.booleanToHclTerraform(this._isDomainUser),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_change_required: {
        value: cdktf.booleanToHclTerraform(this._passwordChangeRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_ui_login: {
        value: cdktf.booleanToHclTerraform(this._preventUiLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._userMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
