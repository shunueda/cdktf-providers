// https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfitbricksProviderConfig {
  /**
  * ProfitBricks REST API URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs#endpoint ProfitbricksProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * ProfitBricks password for API operations. If token is provided, token is preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs#password ProfitbricksProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs#retries ProfitbricksProvider#retries}
  */
  readonly retries?: number;
  /**
  * ProfitBricks bearer token for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs#token ProfitbricksProvider#token}
  */
  readonly token?: string;
  /**
  * ProfitBricks username for API operations. If token is provided, token is preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs#username ProfitbricksProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs#alias ProfitbricksProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs profitbricks}
*/
export class ProfitbricksProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "profitbricks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfitbricksProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfitbricksProvider to import
  * @param importFromId The id of the existing ProfitbricksProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfitbricksProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "profitbricks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/profitbricks/1.6.5/docs profitbricks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfitbricksProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ProfitbricksProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'profitbricks',
      terraformGeneratorMetadata: {
        providerName: 'profitbricks',
        providerVersion: '1.6.5',
        providerVersionConstraint: '1.6.5'
      },
      terraformProviderSource: 'ionos-cloud/profitbricks'
    });
    this._endpoint = config.endpoint;
    this._password = config.password;
    this._retries = config.retries;
    this._token = config.token;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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
      endpoint: cdktf.stringToTerraform(this._endpoint),
      password: cdktf.stringToTerraform(this._password),
      retries: cdktf.numberToTerraform(this._retries),
      token: cdktf.stringToTerraform(this._token),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
