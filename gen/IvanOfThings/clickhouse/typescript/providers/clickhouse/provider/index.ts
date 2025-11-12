// https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickhouseProviderConfig {
  /**
  * Default cluster, if provided will be used when no cluster is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs#default_cluster ClickhouseProvider#default_cluster}
  */
  readonly defaultCluster?: string;
  /**
  * Clickhouse server url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs#host ClickhouseProvider#host}
  */
  readonly host?: string;
  /**
  * Clickhouse user password with admin privileges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs#password ClickhouseProvider#password}
  */
  readonly password?: string;
  /**
  * Clickhouse server native protocol port (TCP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs#port ClickhouseProvider#port}
  */
  readonly port?: number;
  /**
  * Clickhouse secure connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs#secure ClickhouseProvider#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
  /**
  * Clickhouse username with admin privileges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs#username ClickhouseProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs#alias ClickhouseProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs clickhouse}
*/
export class ClickhouseProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhouse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickhouseProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickhouseProvider to import
  * @param importFromId The id of the existing ClickhouseProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickhouseProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhouse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs clickhouse} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickhouseProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClickhouseProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'clickhouse',
      terraformGeneratorMetadata: {
        providerName: 'clickhouse',
        providerVersion: '3.8.0',
        providerVersionConstraint: '3.8.0'
      },
      terraformProviderSource: 'IvanOfThings/clickhouse'
    });
    this._defaultCluster = config.defaultCluster;
    this._host = config.host;
    this._password = config.password;
    this._port = config.port;
    this._secure = config.secure;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_cluster - computed: false, optional: true, required: false
  private _defaultCluster?: string; 
  public get defaultCluster() {
    return this._defaultCluster;
  }
  public set defaultCluster(value: string | undefined) {
    this._defaultCluster = value;
  }
  public resetDefaultCluster() {
    this._defaultCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClusterInput() {
    return this._defaultCluster;
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

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this._secure;
  }
  public set secure(value: boolean | cdktf.IResolvable | undefined) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
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
      default_cluster: cdktf.stringToTerraform(this._defaultCluster),
      host: cdktf.stringToTerraform(this._host),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      secure: cdktf.booleanToTerraform(this._secure),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_cluster: {
        value: cdktf.stringToHclTerraform(this._defaultCluster),
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
      secure: {
        value: cdktf.booleanToHclTerraform(this._secure),
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
