// https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VergeioProviderConfig {
  /**
  * Host Address of VergeOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs#host VergeioProvider#host}
  */
  readonly host: string;
  /**
  * Allow insecure connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs#insecure VergeioProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs#password VergeioProvider#password}
  */
  readonly password: string;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs#username VergeioProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs#alias VergeioProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs vergeio}
*/
export class VergeioProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vergeio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VergeioProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VergeioProvider to import
  * @param importFromId The id of the existing VergeioProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VergeioProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vergeio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs vergeio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VergeioProviderConfig
  */
  public constructor(scope: Construct, id: string, config: VergeioProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vergeio',
      terraformGeneratorMetadata: {
        providerName: 'vergeio',
        providerVersion: '2.7.1'
      },
      terraformProviderSource: 'verge-io/vergeio'
    });
    this._host = config.host;
    this._insecure = config.insecure;
    this._password = config.password;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

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
      host: cdktf.stringToTerraform(this._host),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
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
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
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
