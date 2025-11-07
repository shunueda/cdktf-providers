// https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PnapProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs#api_base_url PnapProvider#api_base_url}
  */
  readonly apiBaseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs#client_id PnapProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs#client_secret PnapProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs#config_file_path PnapProvider#config_file_path}
  */
  readonly configFilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs#token_url PnapProvider#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs#alias PnapProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs pnap}
*/
export class PnapProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pnap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PnapProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PnapProvider to import
  * @param importFromId The id of the existing PnapProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PnapProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pnap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs pnap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PnapProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PnapProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pnap',
      terraformGeneratorMetadata: {
        providerName: 'pnap',
        providerVersion: '0.30.0'
      },
      terraformProviderSource: 'phoenixnap/pnap'
    });
    this._apiBaseUrl = config.apiBaseUrl;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._configFilePath = config.configFilePath;
    this._tokenUrl = config.tokenUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_base_url - computed: false, optional: true, required: false
  private _apiBaseUrl?: string; 
  public get apiBaseUrl() {
    return this._apiBaseUrl;
  }
  public set apiBaseUrl(value: string | undefined) {
    this._apiBaseUrl = value;
  }
  public resetApiBaseUrl() {
    this._apiBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiBaseUrlInput() {
    return this._apiBaseUrl;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // config_file_path - computed: false, optional: true, required: false
  private _configFilePath?: string; 
  public get configFilePath() {
    return this._configFilePath;
  }
  public set configFilePath(value: string | undefined) {
    this._configFilePath = value;
  }
  public resetConfigFilePath() {
    this._configFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFilePathInput() {
    return this._configFilePath;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this._tokenUrl;
  }
  public set tokenUrl(value: string | undefined) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
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
      api_base_url: cdktf.stringToTerraform(this._apiBaseUrl),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      config_file_path: cdktf.stringToTerraform(this._configFilePath),
      token_url: cdktf.stringToTerraform(this._tokenUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_base_url: {
        value: cdktf.stringToHclTerraform(this._apiBaseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file_path: {
        value: cdktf.stringToHclTerraform(this._configFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_url: {
        value: cdktf.stringToHclTerraform(this._tokenUrl),
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
