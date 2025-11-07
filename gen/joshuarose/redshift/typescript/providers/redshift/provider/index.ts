// https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftProviderConfig {
  /**
  * default database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs#database RedshiftProvider#database}
  */
  readonly database?: string;
  /**
  * master password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs#password RedshiftProvider#password}
  */
  readonly password: string;
  /**
  * port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs#port RedshiftProvider#port}
  */
  readonly port?: string;
  /**
  * SSL mode (require, disable, verify-ca, verify-full)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs#ssl_mode RedshiftProvider#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Redshift url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs#url RedshiftProvider#url}
  */
  readonly url: string;
  /**
  * master user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs#user RedshiftProvider#user}
  */
  readonly user: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs#alias RedshiftProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs redshift}
*/
export class RedshiftProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redshift";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftProvider to import
  * @param importFromId The id of the existing RedshiftProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redshift", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs redshift} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftProviderConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'redshift',
      terraformGeneratorMetadata: {
        providerName: 'redshift',
        providerVersion: '0.0.4'
      },
      terraformProviderSource: 'joshuarose/redshift'
    });
    this._database = config.database;
    this._password = config.password;
    this._port = config.port;
    this._sslMode = config.sslMode;
    this._url = config.url;
    this._user = config.user;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this._database;
  }
  public set database(value: string | undefined) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // ssl_mode - computed: false, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this._sslMode;
  }
  public set sslMode(value: string | undefined) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this._user;
  }
  public set user(value: string | undefined) {
    this._user = value;
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
      database: cdktf.stringToTerraform(this._database),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      ssl_mode: cdktf.stringToTerraform(this._sslMode),
      url: cdktf.stringToTerraform(this._url),
      user: cdktf.stringToTerraform(this._user),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database: {
        value: cdktf.stringToHclTerraform(this._database),
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
      ssl_mode: {
        value: cdktf.stringToHclTerraform(this._sslMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
