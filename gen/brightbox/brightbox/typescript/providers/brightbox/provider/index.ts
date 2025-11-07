// https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrightboxProviderConfig {
  /**
  * Brightbox Cloud Account to operate on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs#account BrightboxProvider#account}
  */
  readonly account?: string;
  /**
  * Brightbox Cloud API Client/OAuth Application ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs#apiclient BrightboxProvider#apiclient}
  */
  readonly apiclient?: string;
  /**
  * Brightbox Cloud API Client/OAuth Application Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs#apisecret BrightboxProvider#apisecret}
  */
  readonly apisecret?: string;
  /**
  * Brightbox Cloud Api URL for selected Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs#apiurl BrightboxProvider#apiurl}
  */
  readonly apiurl?: string;
  /**
  * Brightbox Cloud Orbit URL for selected Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs#orbit_url BrightboxProvider#orbit_url}
  */
  readonly orbitUrl?: string;
  /**
  * Brightbox Cloud Password for User Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs#password BrightboxProvider#password}
  */
  readonly password?: string;
  /**
  * Brightbox Cloud User Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs#username BrightboxProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs#alias BrightboxProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs brightbox}
*/
export class BrightboxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "brightbox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BrightboxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BrightboxProvider to import
  * @param importFromId The id of the existing BrightboxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BrightboxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "brightbox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs brightbox} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrightboxProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BrightboxProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'brightbox',
      terraformGeneratorMetadata: {
        providerName: 'brightbox',
        providerVersion: '3.4.3'
      },
      terraformProviderSource: 'brightbox/brightbox'
    });
    this._account = config.account;
    this._apiclient = config.apiclient;
    this._apisecret = config.apisecret;
    this._apiurl = config.apiurl;
    this._orbitUrl = config.orbitUrl;
    this._password = config.password;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this._account;
  }
  public set account(value: string | undefined) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // apiclient - computed: false, optional: true, required: false
  private _apiclient?: string; 
  public get apiclient() {
    return this._apiclient;
  }
  public set apiclient(value: string | undefined) {
    this._apiclient = value;
  }
  public resetApiclient() {
    this._apiclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiclientInput() {
    return this._apiclient;
  }

  // apisecret - computed: false, optional: true, required: false
  private _apisecret?: string; 
  public get apisecret() {
    return this._apisecret;
  }
  public set apisecret(value: string | undefined) {
    this._apisecret = value;
  }
  public resetApisecret() {
    this._apisecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apisecretInput() {
    return this._apisecret;
  }

  // apiurl - computed: false, optional: true, required: false
  private _apiurl?: string; 
  public get apiurl() {
    return this._apiurl;
  }
  public set apiurl(value: string | undefined) {
    this._apiurl = value;
  }
  public resetApiurl() {
    this._apiurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiurlInput() {
    return this._apiurl;
  }

  // orbit_url - computed: false, optional: true, required: false
  private _orbitUrl?: string; 
  public get orbitUrl() {
    return this._orbitUrl;
  }
  public set orbitUrl(value: string | undefined) {
    this._orbitUrl = value;
  }
  public resetOrbitUrl() {
    this._orbitUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orbitUrlInput() {
    return this._orbitUrl;
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
      account: cdktf.stringToTerraform(this._account),
      apiclient: cdktf.stringToTerraform(this._apiclient),
      apisecret: cdktf.stringToTerraform(this._apisecret),
      apiurl: cdktf.stringToTerraform(this._apiurl),
      orbit_url: cdktf.stringToTerraform(this._orbitUrl),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apiclient: {
        value: cdktf.stringToHclTerraform(this._apiclient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apisecret: {
        value: cdktf.stringToHclTerraform(this._apisecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apiurl: {
        value: cdktf.stringToHclTerraform(this._apiurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      orbit_url: {
        value: cdktf.stringToHclTerraform(this._orbitUrl),
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
