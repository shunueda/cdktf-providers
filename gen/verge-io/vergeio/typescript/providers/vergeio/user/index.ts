// https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user#auth_source User#auth_source}
  */
  readonly authSource?: number;
  /**
  * Change password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user#change_password User#change_password}
  */
  readonly changePassword?: boolean | cdktf.IResolvable;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user#displayname User#displayname}
  */
  readonly displayname?: string;
  /**
  * Email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * User state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user#enabled User#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Unique user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * User password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Remote name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user#remote_name User#remote_name}
  */
  readonly remoteName?: string;
  /**
  * User type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user#type User#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user vergeio_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vergeio_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vergeio_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/user vergeio_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'vergeio_user',
      terraformGeneratorMetadata: {
        providerName: 'vergeio',
        providerVersion: '2.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authSource = config.authSource;
    this._changePassword = config.changePassword;
    this._displayname = config.displayname;
    this._email = config.email;
    this._enabled = config.enabled;
    this._name = config.name;
    this._password = config.password;
    this._remoteName = config.remoteName;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_source - computed: true, optional: true, required: false
  private _authSource?: number; 
  public get authSource() {
    return this.getNumberAttribute('auth_source');
  }
  public set authSource(value: number) {
    this._authSource = value;
  }
  public resetAuthSource() {
    this._authSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceInput() {
    return this._authSource;
  }

  // change_password - computed: true, optional: true, required: false
  private _changePassword?: boolean | cdktf.IResolvable; 
  public get changePassword() {
    return this.getBooleanAttribute('change_password');
  }
  public set changePassword(value: boolean | cdktf.IResolvable) {
    this._changePassword = value;
  }
  public resetChangePassword() {
    this._changePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordInput() {
    return this._changePassword;
  }

  // displayname - computed: true, optional: true, required: false
  private _displayname?: string; 
  public get displayname() {
    return this.getStringAttribute('displayname');
  }
  public set displayname(value: string) {
    this._displayname = value;
  }
  public resetDisplayname() {
    this._displayname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displaynameInput() {
    return this._displayname;
  }

  // email - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // remote_name - computed: true, optional: true, required: false
  private _remoteName?: string; 
  public get remoteName() {
    return this.getStringAttribute('remote_name');
  }
  public set remoteName(value: string) {
    this._remoteName = value;
  }
  public resetRemoteName() {
    this._remoteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNameInput() {
    return this._remoteName;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_source: cdktf.numberToTerraform(this._authSource),
      change_password: cdktf.booleanToTerraform(this._changePassword),
      displayname: cdktf.stringToTerraform(this._displayname),
      email: cdktf.stringToTerraform(this._email),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      remote_name: cdktf.stringToTerraform(this._remoteName),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_source: {
        value: cdktf.numberToHclTerraform(this._authSource),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      change_password: {
        value: cdktf.booleanToHclTerraform(this._changePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      displayname: {
        value: cdktf.stringToHclTerraform(this._displayname),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      remote_name: {
        value: cdktf.stringToHclTerraform(this._remoteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
