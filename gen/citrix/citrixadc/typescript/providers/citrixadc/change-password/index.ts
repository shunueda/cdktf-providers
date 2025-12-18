// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/change_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChangePasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Value is 'true' if the user is changing the default password, else value is 'false' if user wants to change password at any point later
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/change_password#first_time_password_reset ChangePassword#first_time_password_reset}
  */
  readonly firstTimePasswordReset: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/change_password#id ChangePassword#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/change_password#new_password ChangePassword#new_password}
  */
  readonly newPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/change_password#password ChangePassword#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/change_password#username ChangePassword#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/change_password citrixadc_change_password}
*/
export class ChangePassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_change_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChangePassword resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChangePassword to import
  * @param importFromId The id of the existing ChangePassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/change_password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChangePassword to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_change_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/change_password citrixadc_change_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChangePasswordConfig
  */
  public constructor(scope: Construct, id: string, config: ChangePasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_change_password',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firstTimePasswordReset = config.firstTimePasswordReset;
    this._id = config.id;
    this._newPassword = config.newPassword;
    this._password = config.password;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // first_time_password_reset - computed: false, optional: false, required: true
  private _firstTimePasswordReset?: boolean | cdktf.IResolvable; 
  public get firstTimePasswordReset() {
    return this.getBooleanAttribute('first_time_password_reset');
  }
  public set firstTimePasswordReset(value: boolean | cdktf.IResolvable) {
    this._firstTimePasswordReset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstTimePasswordResetInput() {
    return this._firstTimePasswordReset;
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

  // new_password - computed: false, optional: false, required: true
  private _newPassword?: string; 
  public get newPassword() {
    return this.getStringAttribute('new_password');
  }
  public set newPassword(value: string) {
    this._newPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordInput() {
    return this._newPassword;
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
      first_time_password_reset: cdktf.booleanToTerraform(this._firstTimePasswordReset),
      id: cdktf.stringToTerraform(this._id),
      new_password: cdktf.stringToTerraform(this._newPassword),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      first_time_password_reset: {
        value: cdktf.booleanToHclTerraform(this._firstTimePasswordReset),
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
      new_password: {
        value: cdktf.stringToHclTerraform(this._newPassword),
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
