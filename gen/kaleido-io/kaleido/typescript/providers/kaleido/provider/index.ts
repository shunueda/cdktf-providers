// https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KaleidoProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs#api KaleidoProvider#api}
  */
  readonly api?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs#api_key KaleidoProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * For resources prefixed with `platform_`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs#platform_api KaleidoProvider#platform_api}
  */
  readonly platformApi?: string;
  /**
  * For resources prefixed with `platform_`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs#platform_bearer_token KaleidoProvider#platform_bearer_token}
  */
  readonly platformBearerToken?: string;
  /**
  * For resources prefixed with `platform_`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs#platform_password KaleidoProvider#platform_password}
  */
  readonly platformPassword?: string;
  /**
  * For resources prefixed with `platform_`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs#platform_username KaleidoProvider#platform_username}
  */
  readonly platformUsername?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs#alias KaleidoProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs kaleido}
*/
export class KaleidoProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KaleidoProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KaleidoProvider to import
  * @param importFromId The id of the existing KaleidoProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KaleidoProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs kaleido} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KaleidoProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KaleidoProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kaleido',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      terraformProviderSource: 'kaleido-io/kaleido'
    });
    this._api = config.api;
    this._apiKey = config.apiKey;
    this._platformApi = config.platformApi;
    this._platformBearerToken = config.platformBearerToken;
    this._platformPassword = config.platformPassword;
    this._platformUsername = config.platformUsername;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: false, optional: true, required: false
  private _api?: string; 
  public get api() {
    return this._api;
  }
  public set api(value: string | undefined) {
    this._api = value;
  }
  public resetApi() {
    this._api = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // platform_api - computed: false, optional: true, required: false
  private _platformApi?: string; 
  public get platformApi() {
    return this._platformApi;
  }
  public set platformApi(value: string | undefined) {
    this._platformApi = value;
  }
  public resetPlatformApi() {
    this._platformApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformApiInput() {
    return this._platformApi;
  }

  // platform_bearer_token - computed: false, optional: true, required: false
  private _platformBearerToken?: string; 
  public get platformBearerToken() {
    return this._platformBearerToken;
  }
  public set platformBearerToken(value: string | undefined) {
    this._platformBearerToken = value;
  }
  public resetPlatformBearerToken() {
    this._platformBearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformBearerTokenInput() {
    return this._platformBearerToken;
  }

  // platform_password - computed: false, optional: true, required: false
  private _platformPassword?: string; 
  public get platformPassword() {
    return this._platformPassword;
  }
  public set platformPassword(value: string | undefined) {
    this._platformPassword = value;
  }
  public resetPlatformPassword() {
    this._platformPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformPasswordInput() {
    return this._platformPassword;
  }

  // platform_username - computed: false, optional: true, required: false
  private _platformUsername?: string; 
  public get platformUsername() {
    return this._platformUsername;
  }
  public set platformUsername(value: string | undefined) {
    this._platformUsername = value;
  }
  public resetPlatformUsername() {
    this._platformUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformUsernameInput() {
    return this._platformUsername;
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
      api: cdktf.stringToTerraform(this._api),
      api_key: cdktf.stringToTerraform(this._apiKey),
      platform_api: cdktf.stringToTerraform(this._platformApi),
      platform_bearer_token: cdktf.stringToTerraform(this._platformBearerToken),
      platform_password: cdktf.stringToTerraform(this._platformPassword),
      platform_username: cdktf.stringToTerraform(this._platformUsername),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api: {
        value: cdktf.stringToHclTerraform(this._api),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_api: {
        value: cdktf.stringToHclTerraform(this._platformApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_bearer_token: {
        value: cdktf.stringToHclTerraform(this._platformBearerToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_password: {
        value: cdktf.stringToHclTerraform(this._platformPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_username: {
        value: cdktf.stringToHclTerraform(this._platformUsername),
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
