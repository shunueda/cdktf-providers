// https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NgrokProviderConfig {
  /**
  * base URL for the ngrok API. only overridden for ngrok's internal testing purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs#api_base_url NgrokProvider#api_base_url}
  */
  readonly apiBaseUrl?: string;
  /**
  * ngrok API key used for authenticating to the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs#api_key NgrokProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs#alias NgrokProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs ngrok}
*/
export class NgrokProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ngrok";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NgrokProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NgrokProvider to import
  * @param importFromId The id of the existing NgrokProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NgrokProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ngrok", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs ngrok} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NgrokProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NgrokProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ngrok',
      terraformGeneratorMetadata: {
        providerName: 'ngrok',
        providerVersion: '0.5.0'
      },
      terraformProviderSource: 'ngrok/ngrok'
    });
    this._apiBaseUrl = config.apiBaseUrl;
    this._apiKey = config.apiKey;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
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
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
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
