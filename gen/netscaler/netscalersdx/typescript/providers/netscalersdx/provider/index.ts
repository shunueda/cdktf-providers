// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetscalersdxProviderConfig {
  /**
  * TODO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs#headers NetscalersdxProvider#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * NetScaler SDX host. Can be specified with `NETSCALERSDX_HOST` environment variable. This has to start with https://
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs#host NetscalersdxProvider#host}
  */
  readonly host?: string;
  /**
  * TODO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs#json_log_format NetscalersdxProvider#json_log_format}
  */
  readonly jsonLogFormat?: boolean | cdktf.IResolvable;
  /**
  * Log level (Default is INFO). Can be specified with `NETSCALERSDX_LOG_LEVEL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs#log_level NetscalersdxProvider#log_level}
  */
  readonly logLevel?: string;
  /**
  * NetScaler SDX password. Can be specified with `NETSCALERSDX_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs#password NetscalersdxProvider#password}
  */
  readonly password?: string;
  /**
  * TODO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs#root_ca_path NetscalersdxProvider#root_ca_path}
  */
  readonly rootCaPath?: string;
  /**
  * TODO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs#server_name NetscalersdxProvider#server_name}
  */
  readonly serverName?: string;
  /**
  * Ignore validity of SDX TLS certificate if true. Can be specified with `NETSCALERSDX_SSL_VERIFY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs#ssl_verify NetscalersdxProvider#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * NetScaler SDX username. Can be specified with `NETSCALERSDX_USERNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs#username NetscalersdxProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs#alias NetscalersdxProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs netscalersdx}
*/
export class NetscalersdxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetscalersdxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetscalersdxProvider to import
  * @param importFromId The id of the existing NetscalersdxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetscalersdxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs netscalersdx} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetscalersdxProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetscalersdxProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
      },
      terraformProviderSource: 'netscaler/netscalersdx'
    });
    this._headers = config.headers;
    this._host = config.host;
    this._jsonLogFormat = config.jsonLogFormat;
    this._logLevel = config.logLevel;
    this._password = config.password;
    this._rootCaPath = config.rootCaPath;
    this._serverName = config.serverName;
    this._sslVerify = config.sslVerify;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: { [key: string]: string } | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // json_log_format - computed: false, optional: true, required: false
  private _jsonLogFormat?: boolean | cdktf.IResolvable; 
  public get jsonLogFormat() {
    return this._jsonLogFormat;
  }
  public set jsonLogFormat(value: boolean | cdktf.IResolvable | undefined) {
    this._jsonLogFormat = value;
  }
  public resetJsonLogFormat() {
    this._jsonLogFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonLogFormatInput() {
    return this._jsonLogFormat;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this._logLevel;
  }
  public set logLevel(value: string | undefined) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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

  // root_ca_path - computed: false, optional: true, required: false
  private _rootCaPath?: string; 
  public get rootCaPath() {
    return this._rootCaPath;
  }
  public set rootCaPath(value: string | undefined) {
    this._rootCaPath = value;
  }
  public resetRootCaPath() {
    this._rootCaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaPathInput() {
    return this._rootCaPath;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this._serverName;
  }
  public set serverName(value: string | undefined) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_verify - computed: false, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this._sslVerify;
  }
  public set sslVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
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
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      host: cdktf.stringToTerraform(this._host),
      json_log_format: cdktf.booleanToTerraform(this._jsonLogFormat),
      log_level: cdktf.stringToTerraform(this._logLevel),
      password: cdktf.stringToTerraform(this._password),
      root_ca_path: cdktf.stringToTerraform(this._rootCaPath),
      server_name: cdktf.stringToTerraform(this._serverName),
      ssl_verify: cdktf.booleanToTerraform(this._sslVerify),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_log_format: {
        value: cdktf.booleanToHclTerraform(this._jsonLogFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
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
      root_ca_path: {
        value: cdktf.stringToHclTerraform(this._rootCaPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_verify: {
        value: cdktf.booleanToHclTerraform(this._sslVerify),
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
