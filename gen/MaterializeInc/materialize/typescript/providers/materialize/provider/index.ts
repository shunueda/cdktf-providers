// https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaterializeProviderConfig {
  /**
  * The base endpoint for Materialize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs#base_endpoint MaterializeProvider#base_endpoint}
  */
  readonly baseEndpoint?: string;
  /**
  * The endpoint for the Materialize Cloud API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs#cloud_endpoint MaterializeProvider#cloud_endpoint}
  */
  readonly cloudEndpoint?: string;
  /**
  * The Materialize database. Can also come from the `MZ_DATABASE` environment variable. Defaults to `materialize`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs#database MaterializeProvider#database}
  */
  readonly database?: string;
  /**
  * The default region if not specified in the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs#default_region MaterializeProvider#default_region}
  */
  readonly defaultRegion?: string;
  /**
  * The endpoint for the Materialize API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs#endpoint MaterializeProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The Materialize host. Can also come from the `MZ_HOST` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs#host MaterializeProvider#host}
  */
  readonly host?: string;
  /**
  * Materialize host. Can also come from the `MZ_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs#password MaterializeProvider#password}
  */
  readonly password?: string;
  /**
  * The Materialize SQL port. Can also come from the `MZ_PORT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs#port MaterializeProvider#port}
  */
  readonly port?: number;
  /**
  * For testing purposes, the SSL mode to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs#sslmode MaterializeProvider#sslmode}
  */
  readonly sslmode?: string;
  /**
  * The Materialize username. Can also come from the `MZ_USERNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs#username MaterializeProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs#alias MaterializeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs materialize}
*/
export class MaterializeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaterializeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaterializeProvider to import
  * @param importFromId The id of the existing MaterializeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaterializeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs materialize} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaterializeProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MaterializeProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'materialize',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.9.2',
        providerVersionConstraint: '0.9.2'
      },
      terraformProviderSource: 'MaterializeInc/materialize'
    });
    this._baseEndpoint = config.baseEndpoint;
    this._cloudEndpoint = config.cloudEndpoint;
    this._database = config.database;
    this._defaultRegion = config.defaultRegion;
    this._endpoint = config.endpoint;
    this._host = config.host;
    this._password = config.password;
    this._port = config.port;
    this._sslmode = config.sslmode;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_endpoint - computed: false, optional: true, required: false
  private _baseEndpoint?: string; 
  public get baseEndpoint() {
    return this._baseEndpoint;
  }
  public set baseEndpoint(value: string | undefined) {
    this._baseEndpoint = value;
  }
  public resetBaseEndpoint() {
    this._baseEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEndpointInput() {
    return this._baseEndpoint;
  }

  // cloud_endpoint - computed: false, optional: true, required: false
  private _cloudEndpoint?: string; 
  public get cloudEndpoint() {
    return this._cloudEndpoint;
  }
  public set cloudEndpoint(value: string | undefined) {
    this._cloudEndpoint = value;
  }
  public resetCloudEndpoint() {
    this._cloudEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudEndpointInput() {
    return this._cloudEndpoint;
  }

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

  // default_region - computed: false, optional: true, required: false
  private _defaultRegion?: string; 
  public get defaultRegion() {
    return this._defaultRegion;
  }
  public set defaultRegion(value: string | undefined) {
    this._defaultRegion = value;
  }
  public resetDefaultRegion() {
    this._defaultRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRegionInput() {
    return this._defaultRegion;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // sslmode - computed: false, optional: true, required: false
  private _sslmode?: string; 
  public get sslmode() {
    return this._sslmode;
  }
  public set sslmode(value: string | undefined) {
    this._sslmode = value;
  }
  public resetSslmode() {
    this._sslmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslmodeInput() {
    return this._sslmode;
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
      base_endpoint: cdktf.stringToTerraform(this._baseEndpoint),
      cloud_endpoint: cdktf.stringToTerraform(this._cloudEndpoint),
      database: cdktf.stringToTerraform(this._database),
      default_region: cdktf.stringToTerraform(this._defaultRegion),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      host: cdktf.stringToTerraform(this._host),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      sslmode: cdktf.stringToTerraform(this._sslmode),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_endpoint: {
        value: cdktf.stringToHclTerraform(this._baseEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_region: {
        value: cdktf.stringToHclTerraform(this._defaultRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslmode: {
        value: cdktf.stringToHclTerraform(this._sslmode),
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
