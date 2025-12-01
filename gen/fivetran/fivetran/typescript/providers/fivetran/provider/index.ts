// https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FivetranProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs#api_key FivetranProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs#api_secret FivetranProvider#api_secret}
  */
  readonly apiSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs#api_url FivetranProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs#alias FivetranProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs fivetran}
*/
export class FivetranProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FivetranProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FivetranProvider to import
  * @param importFromId The id of the existing FivetranProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FivetranProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs fivetran} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FivetranProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FivetranProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fivetran',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.16',
        providerVersionConstraint: '1.9.16'
      },
      terraformProviderSource: 'fivetran/fivetran'
    });
    this._apiKey = config.apiKey;
    this._apiSecret = config.apiSecret;
    this._apiUrl = config.apiUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // api_secret - computed: false, optional: true, required: false
  private _apiSecret?: string; 
  public get apiSecret() {
    return this._apiSecret;
  }
  public set apiSecret(value: string | undefined) {
    this._apiSecret = value;
  }
  public resetApiSecret() {
    this._apiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretInput() {
    return this._apiSecret;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_secret: cdktf.stringToTerraform(this._apiSecret),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_secret: {
        value: cdktf.stringToHclTerraform(this._apiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
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
