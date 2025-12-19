// https://registry.terraform.io/providers/juniper/mist/0.6.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MistProviderConfig {
  /**
  * Enable API request/response debugging. When enabled, request and response bodies, headers, and other sensitive data may be logged. Can also be set via the `MIST_API_DEBUG` environment variable. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs#api_debug MistProvider#api_debug}
  */
  readonly apiDebug?: boolean | cdktf.IResolvable;
  /**
  * Timeout in seconds for API requests. Set to 0 for infinite timeout. Can also be set via the `MIST_API_TIMEOUT` environment variable. Default: `10` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs#api_timeout MistProvider#api_timeout}
  */
  readonly apiTimeout?: number;
  /**
  * Mist API Token for authentication. Can also be set via the `MIST_APITOKEN` environment variable. This is the recommended authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs#apitoken MistProvider#apitoken}
  */
  readonly apitoken?: string;
  /**
  * URL of the Mist Cloud (e.g., `api.mist.com`). Can also be set via the `MIST_HOST` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs#host MistProvider#host}
  */
  readonly host?: string;
  /**
  * Mist Account password for basic authentication. Can also be set via the `MIST_PASSWORD` environment variable. Requires `username` to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs#password MistProvider#password}
  */
  readonly password?: string;
  /**
  * Proxy configuration for API requests. The value may be either a complete URL or `[username:password@]host[:port]` format. Supported schemes: `http`, `https`, and `socks5`. If no scheme is provided, `http` is assumed. Can also be set via the `MIST_PROXY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs#proxy MistProvider#proxy}
  */
  readonly proxy?: string;
  /**
  * Mist Account username for basic authentication. Can also be set via the `MIST_USERNAME` environment variable. Requires `password` to be set and 2FA to be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs#username MistProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs#alias MistProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs mist}
*/
export class MistProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MistProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MistProvider to import
  * @param importFromId The id of the existing MistProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MistProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs mist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MistProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MistProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mist',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      terraformProviderSource: 'Juniper/mist'
    });
    this._apiDebug = config.apiDebug;
    this._apiTimeout = config.apiTimeout;
    this._apitoken = config.apitoken;
    this._host = config.host;
    this._password = config.password;
    this._proxy = config.proxy;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_debug - computed: false, optional: true, required: false
  private _apiDebug?: boolean | cdktf.IResolvable; 
  public get apiDebug() {
    return this._apiDebug;
  }
  public set apiDebug(value: boolean | cdktf.IResolvable | undefined) {
    this._apiDebug = value;
  }
  public resetApiDebug() {
    this._apiDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDebugInput() {
    return this._apiDebug;
  }

  // api_timeout - computed: false, optional: true, required: false
  private _apiTimeout?: number; 
  public get apiTimeout() {
    return this._apiTimeout;
  }
  public set apiTimeout(value: number | undefined) {
    this._apiTimeout = value;
  }
  public resetApiTimeout() {
    this._apiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTimeoutInput() {
    return this._apiTimeout;
  }

  // apitoken - computed: false, optional: true, required: false
  private _apitoken?: string; 
  public get apitoken() {
    return this._apitoken;
  }
  public set apitoken(value: string | undefined) {
    this._apitoken = value;
  }
  public resetApitoken() {
    this._apitoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apitokenInput() {
    return this._apitoken;
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

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this._proxy;
  }
  public set proxy(value: string | undefined) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
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
      api_debug: cdktf.booleanToTerraform(this._apiDebug),
      api_timeout: cdktf.numberToTerraform(this._apiTimeout),
      apitoken: cdktf.stringToTerraform(this._apitoken),
      host: cdktf.stringToTerraform(this._host),
      password: cdktf.stringToTerraform(this._password),
      proxy: cdktf.stringToTerraform(this._proxy),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_debug: {
        value: cdktf.booleanToHclTerraform(this._apiDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_timeout: {
        value: cdktf.numberToHclTerraform(this._apiTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apitoken: {
        value: cdktf.stringToHclTerraform(this._apitoken),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
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
