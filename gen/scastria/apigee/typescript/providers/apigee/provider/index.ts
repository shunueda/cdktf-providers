// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#access_token ApigeeProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#oauth_port ApigeeProvider#oauth_port}
  */
  readonly oauthPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#oauth_server ApigeeProvider#oauth_server}
  */
  readonly oauthServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#oauth_server_path ApigeeProvider#oauth_server_path}
  */
  readonly oauthServerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#organization ApigeeProvider#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#password ApigeeProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#port ApigeeProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#server ApigeeProvider#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#server_path ApigeeProvider#server_path}
  */
  readonly serverPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#use_ssl ApigeeProvider#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#username ApigeeProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#alias ApigeeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs apigee}
*/
export class ApigeeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigeeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigeeProvider to import
  * @param importFromId The id of the existing ApigeeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigeeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs apigee} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee',
      terraformGeneratorMetadata: {
        providerName: 'apigee',
        providerVersion: '0.1.53'
      },
      terraformProviderSource: 'scastria/apigee'
    });
    this._accessToken = config.accessToken;
    this._oauthPort = config.oauthPort;
    this._oauthServer = config.oauthServer;
    this._oauthServerPath = config.oauthServerPath;
    this._organization = config.organization;
    this._password = config.password;
    this._port = config.port;
    this._server = config.server;
    this._serverPath = config.serverPath;
    this._useSsl = config.useSsl;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // oauth_port - computed: false, optional: true, required: false
  private _oauthPort?: number; 
  public get oauthPort() {
    return this._oauthPort;
  }
  public set oauthPort(value: number | undefined) {
    this._oauthPort = value;
  }
  public resetOauthPort() {
    this._oauthPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthPortInput() {
    return this._oauthPort;
  }

  // oauth_server - computed: false, optional: true, required: false
  private _oauthServer?: string; 
  public get oauthServer() {
    return this._oauthServer;
  }
  public set oauthServer(value: string | undefined) {
    this._oauthServer = value;
  }
  public resetOauthServer() {
    this._oauthServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthServerInput() {
    return this._oauthServer;
  }

  // oauth_server_path - computed: false, optional: true, required: false
  private _oauthServerPath?: string; 
  public get oauthServerPath() {
    return this._oauthServerPath;
  }
  public set oauthServerPath(value: string | undefined) {
    this._oauthServerPath = value;
  }
  public resetOauthServerPath() {
    this._oauthServerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthServerPathInput() {
    return this._oauthServerPath;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this._organization;
  }
  public set organization(value: string | undefined) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this._server;
  }
  public set server(value: string | undefined) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_path - computed: false, optional: true, required: false
  private _serverPath?: string; 
  public get serverPath() {
    return this._serverPath;
  }
  public set serverPath(value: string | undefined) {
    this._serverPath = value;
  }
  public resetServerPath() {
    this._serverPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPathInput() {
    return this._serverPath;
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this._useSsl;
  }
  public set useSsl(value: boolean | cdktf.IResolvable | undefined) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
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
      access_token: cdktf.stringToTerraform(this._accessToken),
      oauth_port: cdktf.numberToTerraform(this._oauthPort),
      oauth_server: cdktf.stringToTerraform(this._oauthServer),
      oauth_server_path: cdktf.stringToTerraform(this._oauthServerPath),
      organization: cdktf.stringToTerraform(this._organization),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      server: cdktf.stringToTerraform(this._server),
      server_path: cdktf.stringToTerraform(this._serverPath),
      use_ssl: cdktf.booleanToTerraform(this._useSsl),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_port: {
        value: cdktf.numberToHclTerraform(this._oauthPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oauth_server: {
        value: cdktf.stringToHclTerraform(this._oauthServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_server_path: {
        value: cdktf.stringToHclTerraform(this._oauthServerPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
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
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_path: {
        value: cdktf.stringToHclTerraform(this._serverPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ssl: {
        value: cdktf.booleanToHclTerraform(this._useSsl),
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
