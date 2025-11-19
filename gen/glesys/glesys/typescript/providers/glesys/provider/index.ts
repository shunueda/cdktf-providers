// https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlesysProviderConfig {
  /**
  * The base URL to use for the Glesys API requests. (Defaults to the value of the `GLESYS_API_URL` environment variable or `https://api.glesys.com` if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs#api_endpoint GlesysProvider#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * User token for the Glesys API. Alternatively, this can be set using the `GLESYS_TOKEN` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs#token GlesysProvider#token}
  */
  readonly token: string;
  /**
  * UserId for the Glesys API. Alternatively, this can be set using the `GLESYS_USERID` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs#userid GlesysProvider#userid}
  */
  readonly userid: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs#alias GlesysProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs glesys}
*/
export class GlesysProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlesysProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlesysProvider to import
  * @param importFromId The id of the existing GlesysProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlesysProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs glesys} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlesysProviderConfig
  */
  public constructor(scope: Construct, id: string, config: GlesysProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.16.0',
        providerVersionConstraint: '0.16.0'
      },
      terraformProviderSource: 'glesys/glesys'
    });
    this._apiEndpoint = config.apiEndpoint;
    this._token = config.token;
    this._userid = config.userid;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public set apiEndpoint(value: string | undefined) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // userid - computed: false, optional: false, required: true
  private _userid?: string; 
  public get userid() {
    return this._userid;
  }
  public set userid(value: string | undefined) {
    this._userid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useridInput() {
    return this._userid;
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
      api_endpoint: cdktf.stringToTerraform(this._apiEndpoint),
      token: cdktf.stringToTerraform(this._token),
      userid: cdktf.stringToTerraform(this._userid),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_endpoint: {
        value: cdktf.stringToHclTerraform(this._apiEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userid: {
        value: cdktf.stringToHclTerraform(this._userid),
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
