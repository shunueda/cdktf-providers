// https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappElementswProviderConfig {
  /**
  * The ElementSW server API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs#api_version NetappElementswProvider#api_version}
  */
  readonly apiVersion: string;
  /**
  * The ElementSW server name for ElementSW API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs#elementsw_server NetappElementswProvider#elementsw_server}
  */
  readonly elementswServer: string;
  /**
  * The user password for ElementSW API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs#password NetappElementswProvider#password}
  */
  readonly password: string;
  /**
  * The user name for ElementSW API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs#username NetappElementswProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs#alias NetappElementswProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs netapp-elementsw}
*/
export class NetappElementswProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-elementsw";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetappElementswProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappElementswProvider to import
  * @param importFromId The id of the existing NetappElementswProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappElementswProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-elementsw", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs netapp-elementsw} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappElementswProviderConfig
  */
  public constructor(scope: Construct, id: string, config: NetappElementswProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-elementsw',
      terraformGeneratorMetadata: {
        providerName: 'netapp-elementsw',
        providerVersion: '20.11.0'
      },
      terraformProviderSource: 'NetApp/netapp-elementsw'
    });
    this._apiVersion = config.apiVersion;
    this._elementswServer = config.elementswServer;
    this._password = config.password;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this._apiVersion;
  }
  public set apiVersion(value: string | undefined) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // elementsw_server - computed: false, optional: false, required: true
  private _elementswServer?: string; 
  public get elementswServer() {
    return this._elementswServer;
  }
  public set elementswServer(value: string | undefined) {
    this._elementswServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementswServerInput() {
    return this._elementswServer;
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
      api_version: cdktf.stringToTerraform(this._apiVersion),
      elementsw_server: cdktf.stringToTerraform(this._elementswServer),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elementsw_server: {
        value: cdktf.stringToHclTerraform(this._elementswServer),
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
