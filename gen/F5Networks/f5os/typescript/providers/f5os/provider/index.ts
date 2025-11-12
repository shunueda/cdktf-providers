// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface F5OsProviderConfig {
  /**
  * `disable_tls_verify` controls whether a client verifies the server's certificate chain and host name. default it is set to `true`. If `disable_tls_verify` is true, crypto/tls accepts any certificate presented by the server and any host name in that certificate. In this mode, TLS is susceptible to machine-in-the-middle attacks unless custom verification is used.
  * can be provided by `DISABLE_TLS_VERIFY` environment variable.
  * 
  * ~> **NOTE** If it is set to `false`, certificate/ca certificates should be added to `trusted store` of host where we are running this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs#disable_tls_verify F5OsProvider#disable_tls_verify}
  */
  readonly disableTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * URI/Host details for F5os Device,can be provided via `F5OS_HOST` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs#host F5OsProvider#host}
  */
  readonly host?: string;
  /**
  * Password for F5os Device,can be provided via `F5OS_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs#password F5OsProvider#password}
  */
  readonly password?: string;
  /**
  * Port Number to be used to make API calls to HOST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs#port F5OsProvider#port}
  */
  readonly port?: number;
  /**
  * If this flag set to true,sending telemetry data to TEEM will be disabled,can be provided via `TEEM_DISABLE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs#teem_disable F5OsProvider#teem_disable}
  */
  readonly teemDisable?: boolean | cdktf.IResolvable;
  /**
  * Username for F5os Device,can be provided via `F5OS_USERNAME` environment variable.User provided here need to have required permission as per [UserManagement](https://techdocs.f5.com/en-us/f5os-a-1-4-0/f5-rseries-systems-administration-configuration/title-user-mgmt.html)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs#username F5OsProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs#alias F5OsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs f5os}
*/
export class F5OsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a F5OsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the F5OsProvider to import
  * @param importFromId The id of the existing F5OsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the F5OsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs f5os} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options F5OsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: F5OsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'f5os',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0',
        providerVersionConstraint: '1.10.0'
      },
      terraformProviderSource: 'F5Networks/f5os'
    });
    this._disableTlsVerify = config.disableTlsVerify;
    this._host = config.host;
    this._password = config.password;
    this._port = config.port;
    this._teemDisable = config.teemDisable;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_tls_verify - computed: false, optional: true, required: false
  private _disableTlsVerify?: boolean | cdktf.IResolvable; 
  public get disableTlsVerify() {
    return this._disableTlsVerify;
  }
  public set disableTlsVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._disableTlsVerify = value;
  }
  public resetDisableTlsVerify() {
    this._disableTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTlsVerifyInput() {
    return this._disableTlsVerify;
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

  // teem_disable - computed: false, optional: true, required: false
  private _teemDisable?: boolean | cdktf.IResolvable; 
  public get teemDisable() {
    return this._teemDisable;
  }
  public set teemDisable(value: boolean | cdktf.IResolvable | undefined) {
    this._teemDisable = value;
  }
  public resetTeemDisable() {
    this._teemDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teemDisableInput() {
    return this._teemDisable;
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
      disable_tls_verify: cdktf.booleanToTerraform(this._disableTlsVerify),
      host: cdktf.stringToTerraform(this._host),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      teem_disable: cdktf.booleanToTerraform(this._teemDisable),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_tls_verify: {
        value: cdktf.booleanToHclTerraform(this._disableTlsVerify),
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
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      teem_disable: {
        value: cdktf.booleanToHclTerraform(this._teemDisable),
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
