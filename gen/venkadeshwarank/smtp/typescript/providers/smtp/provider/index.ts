// https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmtpProviderConfig {
  /**
  * Enable or Disable the authentication with SMTP (by default, it sets to 'true'). May also be provided via SMTP_AUTHENTICATION environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs#authentication SmtpProvider#authentication}
  */
  readonly authentication?: boolean | cdktf.IResolvable;
  /**
  * SMTP host domain. eg. smtp.example.com. May also be provided via SMTP_HOST environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs#host SmtpProvider#host}
  */
  readonly host?: string;
  /**
  * Password to authenticate with SMTP. May also be provided via SMTP_PASSWORD environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs#password SmtpProvider#password}
  */
  readonly password?: string;
  /**
  * SMTP host port. eg: 25. May also be provided via SMTP_PORT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs#port SmtpProvider#port}
  */
  readonly port?: string;
  /**
  * User name to authenticate with SMTP. May also be provided via SMTP_USERNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs#username SmtpProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs#alias SmtpProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs smtp}
*/
export class SmtpProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "smtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmtpProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmtpProvider to import
  * @param importFromId The id of the existing SmtpProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmtpProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "smtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/venkadeshwarank/smtp/0.3.1/docs smtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmtpProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SmtpProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'smtp',
      terraformGeneratorMetadata: {
        providerName: 'smtp',
        providerVersion: '0.3.1',
        providerVersionConstraint: '0.3.1'
      },
      terraformProviderSource: 'venkadeshwarank/smtp'
    });
    this._authentication = config.authentication;
    this._host = config.host;
    this._password = config.password;
    this._port = config.port;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: false, optional: true, required: false
  private _authentication?: boolean | cdktf.IResolvable; 
  public get authentication() {
    return this._authentication;
  }
  public set authentication(value: boolean | cdktf.IResolvable | undefined) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
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
      authentication: cdktf.booleanToTerraform(this._authentication),
      host: cdktf.stringToTerraform(this._host),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.booleanToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
