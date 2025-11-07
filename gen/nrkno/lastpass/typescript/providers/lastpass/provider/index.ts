// https://registry.terraform.io/providers/nrkno/lastpass/0.5.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LastpassProviderConfig {
  /**
  * Lastpass login password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/lastpass/0.5.3/docs#password LastpassProvider#password}
  */
  readonly password: string;
  /**
  * Lastpass login e-mail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/lastpass/0.5.3/docs#username LastpassProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nrkno/lastpass/0.5.3/docs#alias LastpassProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nrkno/lastpass/0.5.3/docs lastpass}
*/
export class LastpassProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lastpass";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LastpassProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LastpassProvider to import
  * @param importFromId The id of the existing LastpassProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/nrkno/lastpass/0.5.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LastpassProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lastpass", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nrkno/lastpass/0.5.3/docs lastpass} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LastpassProviderConfig
  */
  public constructor(scope: Construct, id: string, config: LastpassProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'lastpass',
      terraformGeneratorMetadata: {
        providerName: 'lastpass',
        providerVersion: '0.5.3'
      },
      terraformProviderSource: 'nrkno/lastpass'
    });
    this._password = config.password;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
