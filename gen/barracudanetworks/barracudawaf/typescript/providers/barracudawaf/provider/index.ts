// https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BarracudawafProviderConfig {
  /**
  * IP Address of the WAF to be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs#address BarracudawafProvider#address}
  */
  readonly address: string;
  /**
  * Password of the WAF to be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs#password BarracudawafProvider#password}
  */
  readonly password: string;
  /**
  * Admin port on the WAF to be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs#port BarracudawafProvider#port}
  */
  readonly port: string;
  /**
  * Username of the WAF to be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs#username BarracudawafProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs#alias BarracudawafProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs barracudawaf}
*/
export class BarracudawafProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "barracudawaf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BarracudawafProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BarracudawafProvider to import
  * @param importFromId The id of the existing BarracudawafProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BarracudawafProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "barracudawaf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs barracudawaf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BarracudawafProviderConfig
  */
  public constructor(scope: Construct, id: string, config: BarracudawafProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'barracudawaf',
      terraformGeneratorMetadata: {
        providerName: 'barracudawaf',
        providerVersion: '1.0.10'
      },
      terraformProviderSource: 'barracudanetworks/barracudawaf'
    });
    this._address = config.address;
    this._password = config.password;
    this._port = config.port;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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
  private _port?: string; 
  public get port() {
    return this._port;
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
      address: cdktf.stringToTerraform(this._address),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
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
        value: cdktf.stringToHclTerraform(this._port),
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
