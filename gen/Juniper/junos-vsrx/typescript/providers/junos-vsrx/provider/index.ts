// https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JunosVsrxProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs#host JunosVsrxProvider#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs#password JunosVsrxProvider#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs#port JunosVsrxProvider#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs#sshkey JunosVsrxProvider#sshkey}
  */
  readonly sshkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs#username JunosVsrxProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs#alias JunosVsrxProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs junos-vsrx}
*/
export class JunosVsrxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos-vsrx";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JunosVsrxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JunosVsrxProvider to import
  * @param importFromId The id of the existing JunosVsrxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JunosVsrxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos-vsrx", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs junos-vsrx} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JunosVsrxProviderConfig
  */
  public constructor(scope: Construct, id: string, config: JunosVsrxProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'junos-vsrx',
      terraformGeneratorMetadata: {
        providerName: 'junos-vsrx',
        providerVersion: '20.32.106'
      },
      terraformProviderSource: 'Juniper/junos-vsrx'
    });
    this._host = config.host;
    this._password = config.password;
    this._port = config.port;
    this._sshkey = config.sshkey;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sshkey - computed: false, optional: false, required: true
  private _sshkey?: string; 
  public get sshkey() {
    return this._sshkey;
  }
  public set sshkey(value: string | undefined) {
    this._sshkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshkeyInput() {
    return this._sshkey;
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
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      sshkey: cdktf.stringToTerraform(this._sshkey),
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
      sshkey: {
        value: cdktf.stringToHclTerraform(this._sshkey),
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
