// https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SplunkItsiProviderConfig {
  /**
  * Bearer token used to authenticate HTTP requests to Splunk API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs#access_token SplunkItsiProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs#host SplunkItsiProvider#host}
  */
  readonly host?: string;
  /**
  * Whether the API should be accessed without verifying the TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs#insecure SplunkItsiProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs#password SplunkItsiProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs#port SplunkItsiProvider#port}
  */
  readonly port?: number;
  /**
  * HTTP timeout in seconds for CRUD requests to Splunk/ITSI API. 0 means no timeout. (Terraform resource timeouts still apply)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs#timeout SplunkItsiProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs#user SplunkItsiProvider#user}
  */
  readonly user?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs#alias SplunkItsiProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs splunk-itsi}
*/
export class SplunkItsiProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunk-itsi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SplunkItsiProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SplunkItsiProvider to import
  * @param importFromId The id of the existing SplunkItsiProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SplunkItsiProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunk-itsi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs splunk-itsi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SplunkItsiProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SplunkItsiProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'splunk-itsi',
      terraformGeneratorMetadata: {
        providerName: 'splunk-itsi',
        providerVersion: '2.2.4'
      },
      terraformProviderSource: 'TiVo/splunk-itsi'
    });
    this._accessToken = config.accessToken;
    this._host = config.host;
    this._insecure = config.insecure;
    this._password = config.password;
    this._port = config.port;
    this._timeout = config.timeout;
    this._user = config.user;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this._user;
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
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
      host: cdktf.stringToTerraform(this._host),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      timeout: cdktf.numberToTerraform(this._timeout),
      user: cdktf.stringToTerraform(this._user),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
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
