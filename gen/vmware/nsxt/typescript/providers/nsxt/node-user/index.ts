// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/node_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean value that states if the user account is activated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/node_user#active NodeUser#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Full name for the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/node_user#full_name NodeUser#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/node_user#id NodeUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password for the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/node_user#password NodeUser#password}
  */
  readonly password?: string;
  /**
  * Number of days password is valid before it must be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/node_user#password_change_frequency NodeUser#password_change_frequency}
  */
  readonly passwordChangeFrequency?: number;
  /**
  * Number of days before user receives warning message of password expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/node_user#password_change_warning NodeUser#password_change_warning}
  */
  readonly passwordChangeWarning?: number;
  /**
  * User login name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/node_user#username NodeUser#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/node_user nsxt_node_user}
*/
export class NodeUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_node_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NodeUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NodeUser to import
  * @param importFromId The id of the existing NodeUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/node_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NodeUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_node_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/node_user nsxt_node_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeUserConfig
  */
  public constructor(scope: Construct, id: string, config: NodeUserConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_node_user',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._fullName = config.fullName;
    this._id = config.id;
    this._password = config.password;
    this._passwordChangeFrequency = config.passwordChangeFrequency;
    this._passwordChangeWarning = config.passwordChangeWarning;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // full_name - computed: false, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
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

  // last_password_change - computed: true, optional: false, required: false
  public get lastPasswordChange() {
    return this.getNumberAttribute('last_password_change');
  }

  // password - computed: false, optional: true, required: false
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

  // password_change_frequency - computed: false, optional: true, required: false
  private _passwordChangeFrequency?: number; 
  public get passwordChangeFrequency() {
    return this.getNumberAttribute('password_change_frequency');
  }
  public set passwordChangeFrequency(value: number) {
    this._passwordChangeFrequency = value;
  }
  public resetPasswordChangeFrequency() {
    this._passwordChangeFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeFrequencyInput() {
    return this._passwordChangeFrequency;
  }

  // password_change_warning - computed: false, optional: true, required: false
  private _passwordChangeWarning?: number; 
  public get passwordChangeWarning() {
    return this.getNumberAttribute('password_change_warning');
  }
  public set passwordChangeWarning(value: number) {
    this._passwordChangeWarning = value;
  }
  public resetPasswordChangeWarning() {
    this._passwordChangeWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeWarningInput() {
    return this._passwordChangeWarning;
  }

  // password_reset_required - computed: true, optional: false, required: false
  public get passwordResetRequired() {
    return this.getBooleanAttribute('password_reset_required');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
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
      active: cdktf.booleanToTerraform(this._active),
      full_name: cdktf.stringToTerraform(this._fullName),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      password_change_frequency: cdktf.numberToTerraform(this._passwordChangeFrequency),
      password_change_warning: cdktf.numberToTerraform(this._passwordChangeWarning),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_change_frequency: {
        value: cdktf.numberToHclTerraform(this._passwordChangeFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_change_warning: {
        value: cdktf.numberToHclTerraform(this._passwordChangeWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
