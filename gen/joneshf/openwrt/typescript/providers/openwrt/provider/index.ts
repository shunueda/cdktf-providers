// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenwrtProviderConfig {
  /**
  * The hostname to use. Defaults to "192.168.1.1".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs#hostname OpenwrtProvider#hostname}
  */
  readonly hostname?: string;
  /**
  * The password to use. Defaults to "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs#password OpenwrtProvider#password}
  */
  readonly password?: string;
  /**
  * The port to use. Defaults to 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs#port OpenwrtProvider#port}
  */
  readonly port?: number;
  /**
  * The URI scheme to use. Defaults to "http".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs#scheme OpenwrtProvider#scheme}
  */
  readonly scheme?: string;
  /**
  * The username to use. Defaults to "root".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs#username OpenwrtProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs#alias OpenwrtProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs openwrt}
*/
export class OpenwrtProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenwrtProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenwrtProvider to import
  * @param importFromId The id of the existing OpenwrtProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenwrtProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs openwrt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenwrtProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpenwrtProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'openwrt',
      terraformGeneratorMetadata: {
        providerName: 'openwrt',
        providerVersion: '0.0.20'
      },
      terraformProviderSource: 'joneshf/openwrt'
    });
    this._hostname = config.hostname;
    this._password = config.password;
    this._port = config.port;
    this._scheme = config.scheme;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this._hostname;
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this._scheme;
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
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
      hostname: cdktf.stringToTerraform(this._hostname),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      scheme: cdktf.stringToTerraform(this._scheme),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheme: {
        value: cdktf.stringToHclTerraform(this._scheme),
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
