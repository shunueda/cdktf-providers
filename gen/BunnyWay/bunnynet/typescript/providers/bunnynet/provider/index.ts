// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BunnynetProviderConfig {
  /**
  * API key. Can also be set using the `BUNNYNET_API_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs#api_key BunnynetProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Optional. The API URL. Defaults to `https://api.bunny.net`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs#api_url BunnynetProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Optional. The Container API URL. Defaults to `https://api-mc.opsbunny.net`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs#container_api_url BunnynetProvider#container_api_url}
  */
  readonly containerApiUrl?: string;
  /**
  * Optional. The Stream API URL. Defaults to `https://video.bunnycdn.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs#stream_api_url BunnynetProvider#stream_api_url}
  */
  readonly streamApiUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs#alias BunnynetProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs bunnynet}
*/
export class BunnynetProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BunnynetProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BunnynetProvider to import
  * @param importFromId The id of the existing BunnynetProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BunnynetProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.3/docs bunnynet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BunnynetProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BunnynetProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bunnynet',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      terraformProviderSource: 'BunnyWay/bunnynet'
    });
    this._apiKey = config.apiKey;
    this._apiUrl = config.apiUrl;
    this._containerApiUrl = config.containerApiUrl;
    this._streamApiUrl = config.streamApiUrl;
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

  // container_api_url - computed: false, optional: true, required: false
  private _containerApiUrl?: string; 
  public get containerApiUrl() {
    return this._containerApiUrl;
  }
  public set containerApiUrl(value: string | undefined) {
    this._containerApiUrl = value;
  }
  public resetContainerApiUrl() {
    this._containerApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerApiUrlInput() {
    return this._containerApiUrl;
  }

  // stream_api_url - computed: false, optional: true, required: false
  private _streamApiUrl?: string; 
  public get streamApiUrl() {
    return this._streamApiUrl;
  }
  public set streamApiUrl(value: string | undefined) {
    this._streamApiUrl = value;
  }
  public resetStreamApiUrl() {
    this._streamApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamApiUrlInput() {
    return this._streamApiUrl;
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
      api_url: cdktf.stringToTerraform(this._apiUrl),
      container_api_url: cdktf.stringToTerraform(this._containerApiUrl),
      stream_api_url: cdktf.stringToTerraform(this._streamApiUrl),
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
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_api_url: {
        value: cdktf.stringToHclTerraform(this._containerApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_api_url: {
        value: cdktf.stringToHclTerraform(this._streamApiUrl),
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
