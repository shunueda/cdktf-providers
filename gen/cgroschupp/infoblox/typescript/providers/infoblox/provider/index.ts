// https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfobloxProviderConfig {
  /**
  * Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs#connect_timeout InfobloxProvider#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Password to authenticate with Infoblox server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs#password InfobloxProvider#password}
  */
  readonly password: string;
  /**
  * Maximum number of connections to establish to the Infoblox server. Zero means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs#pool_connections InfobloxProvider#pool_connections}
  */
  readonly poolConnections?: number;
  /**
  * Port number used for connection for Infoblox Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs#port InfobloxProvider#port}
  */
  readonly port?: string;
  /**
  * Infoblox server IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs#server InfobloxProvider#server}
  */
  readonly server: string;
  /**
  * If set, Infoblox client will permit unverifiable SSL certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs#sslmode InfobloxProvider#sslmode}
  */
  readonly sslmode?: boolean | cdktf.IResolvable;
  /**
  * User to authenticate with Infoblox server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs#username InfobloxProvider#username}
  */
  readonly username: string;
  /**
  * WAPI Version of Infoblox server defaults to v2.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs#wapi_version InfobloxProvider#wapi_version}
  */
  readonly wapiVersion?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs#alias InfobloxProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs infoblox}
*/
export class InfobloxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InfobloxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InfobloxProvider to import
  * @param importFromId The id of the existing InfobloxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InfobloxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs infoblox} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfobloxProviderConfig
  */
  public constructor(scope: Construct, id: string, config: InfobloxProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '1.1.7'
      },
      terraformProviderSource: 'cgroschupp/infoblox'
    });
    this._connectTimeout = config.connectTimeout;
    this._password = config.password;
    this._poolConnections = config.poolConnections;
    this._port = config.port;
    this._server = config.server;
    this._sslmode = config.sslmode;
    this._username = config.username;
    this._wapiVersion = config.wapiVersion;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this._connectTimeout;
  }
  public set connectTimeout(value: number | undefined) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
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

  // pool_connections - computed: false, optional: true, required: false
  private _poolConnections?: number; 
  public get poolConnections() {
    return this._poolConnections;
  }
  public set poolConnections(value: number | undefined) {
    this._poolConnections = value;
  }
  public resetPoolConnections() {
    this._poolConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolConnectionsInput() {
    return this._poolConnections;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this._port;
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this._server;
  }
  public set server(value: string | undefined) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // sslmode - computed: false, optional: true, required: false
  private _sslmode?: boolean | cdktf.IResolvable; 
  public get sslmode() {
    return this._sslmode;
  }
  public set sslmode(value: boolean | cdktf.IResolvable | undefined) {
    this._sslmode = value;
  }
  public resetSslmode() {
    this._sslmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslmodeInput() {
    return this._sslmode;
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

  // wapi_version - computed: false, optional: true, required: false
  private _wapiVersion?: string; 
  public get wapiVersion() {
    return this._wapiVersion;
  }
  public set wapiVersion(value: string | undefined) {
    this._wapiVersion = value;
  }
  public resetWapiVersion() {
    this._wapiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wapiVersionInput() {
    return this._wapiVersion;
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
      connect_timeout: cdktf.numberToTerraform(this._connectTimeout),
      password: cdktf.stringToTerraform(this._password),
      pool_connections: cdktf.numberToTerraform(this._poolConnections),
      port: cdktf.stringToTerraform(this._port),
      server: cdktf.stringToTerraform(this._server),
      sslmode: cdktf.booleanToTerraform(this._sslmode),
      username: cdktf.stringToTerraform(this._username),
      wapi_version: cdktf.stringToTerraform(this._wapiVersion),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect_timeout: {
        value: cdktf.numberToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_connections: {
        value: cdktf.numberToHclTerraform(this._poolConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslmode: {
        value: cdktf.booleanToHclTerraform(this._sslmode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wapi_version: {
        value: cdktf.stringToHclTerraform(this._wapiVersion),
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
