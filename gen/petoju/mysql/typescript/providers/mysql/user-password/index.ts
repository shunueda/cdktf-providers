// https://registry.terraform.io/providers/petoju/mysql/3.0.86/docs/resources/user_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserPasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.86/docs/resources/user_password#host UserPassword#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.86/docs/resources/user_password#id UserPassword#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.86/docs/resources/user_password#plaintext_password UserPassword#plaintext_password}
  */
  readonly plaintextPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.86/docs/resources/user_password#retain_old_password UserPassword#retain_old_password}
  */
  readonly retainOldPassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.86/docs/resources/user_password#user UserPassword#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/petoju/mysql/3.0.86/docs/resources/user_password mysql_user_password}
*/
export class UserPassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mysql_user_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserPassword resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserPassword to import
  * @param importFromId The id of the existing UserPassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/petoju/mysql/3.0.86/docs/resources/user_password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserPassword to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mysql_user_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/petoju/mysql/3.0.86/docs/resources/user_password mysql_user_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserPasswordConfig
  */
  public constructor(scope: Construct, id: string, config: UserPasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'mysql_user_password',
      terraformGeneratorMetadata: {
        providerName: 'mysql',
        providerVersion: '3.0.86',
        providerVersionConstraint: '3.0.86'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._host = config.host;
    this._id = config.id;
    this._plaintextPassword = config.plaintextPassword;
    this._retainOldPassword = config.retainOldPassword;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // plaintext_password - computed: false, optional: true, required: false
  private _plaintextPassword?: string; 
  public get plaintextPassword() {
    return this.getStringAttribute('plaintext_password');
  }
  public set plaintextPassword(value: string) {
    this._plaintextPassword = value;
  }
  public resetPlaintextPassword() {
    this._plaintextPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextPasswordInput() {
    return this._plaintextPassword;
  }

  // retain_old_password - computed: false, optional: true, required: false
  private _retainOldPassword?: boolean | cdktf.IResolvable; 
  public get retainOldPassword() {
    return this.getBooleanAttribute('retain_old_password');
  }
  public set retainOldPassword(value: boolean | cdktf.IResolvable) {
    this._retainOldPassword = value;
  }
  public resetRetainOldPassword() {
    this._retainOldPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainOldPasswordInput() {
    return this._retainOldPassword;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      plaintext_password: cdktf.stringToTerraform(this._plaintextPassword),
      retain_old_password: cdktf.booleanToTerraform(this._retainOldPassword),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      plaintext_password: {
        value: cdktf.stringToHclTerraform(this._plaintextPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_old_password: {
        value: cdktf.booleanToHclTerraform(this._retainOldPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
