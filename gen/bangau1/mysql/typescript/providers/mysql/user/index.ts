// https://registry.terraform.io/providers/bangau1/mysql/1.10.4/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bangau1/mysql/1.10.4/docs/resources/user#auth_plugin User#auth_plugin}
  */
  readonly authPlugin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bangau1/mysql/1.10.4/docs/resources/user#host User#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bangau1/mysql/1.10.4/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bangau1/mysql/1.10.4/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bangau1/mysql/1.10.4/docs/resources/user#plaintext_password User#plaintext_password}
  */
  readonly plaintextPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bangau1/mysql/1.10.4/docs/resources/user#tls_option User#tls_option}
  */
  readonly tlsOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bangau1/mysql/1.10.4/docs/resources/user#user User#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bangau1/mysql/1.10.4/docs/resources/user mysql_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mysql_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/bangau1/mysql/1.10.4/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mysql_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bangau1/mysql/1.10.4/docs/resources/user mysql_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'mysql_user',
      terraformGeneratorMetadata: {
        providerName: 'mysql',
        providerVersion: '1.10.4',
        providerVersionConstraint: '1.10.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authPlugin = config.authPlugin;
    this._host = config.host;
    this._id = config.id;
    this._password = config.password;
    this._plaintextPassword = config.plaintextPassword;
    this._tlsOption = config.tlsOption;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_plugin - computed: false, optional: true, required: false
  private _authPlugin?: string; 
  public get authPlugin() {
    return this.getStringAttribute('auth_plugin');
  }
  public set authPlugin(value: string) {
    this._authPlugin = value;
  }
  public resetAuthPlugin() {
    this._authPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPluginInput() {
    return this._authPlugin;
  }

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

  // tls_option - computed: false, optional: true, required: false
  private _tlsOption?: string; 
  public get tlsOption() {
    return this.getStringAttribute('tls_option');
  }
  public set tlsOption(value: string) {
    this._tlsOption = value;
  }
  public resetTlsOption() {
    this._tlsOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsOptionInput() {
    return this._tlsOption;
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
      auth_plugin: cdktf.stringToTerraform(this._authPlugin),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      plaintext_password: cdktf.stringToTerraform(this._plaintextPassword),
      tls_option: cdktf.stringToTerraform(this._tlsOption),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_plugin: {
        value: cdktf.stringToHclTerraform(this._authPlugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      tls_option: {
        value: cdktf.stringToHclTerraform(this._tlsOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
