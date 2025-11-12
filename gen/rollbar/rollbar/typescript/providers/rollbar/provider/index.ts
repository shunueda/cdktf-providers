// https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RollbarProviderConfig {
  /**
  * Rollbar API authentication token. Value will be sourced from environment variable `ROLLBAR_API_KEY` if set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs#api_key RollbarProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Base URL for the Rollbar API.  Defaults to https://api.rollbar.com.  Value will be sourced from environment variable `ROLLBAR_API_URL` if set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs#api_url RollbarProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Rollbar API authentication token (project level). Value will be sourced from environment variable `ROLLBAR_PROJECT_API_KEY` if set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs#project_api_key RollbarProvider#project_api_key}
  */
  readonly projectApiKey?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs#alias RollbarProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs rollbar}
*/
export class RollbarProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rollbar";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RollbarProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RollbarProvider to import
  * @param importFromId The id of the existing RollbarProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RollbarProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rollbar", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs rollbar} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RollbarProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RollbarProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rollbar',
      terraformGeneratorMetadata: {
        providerName: 'rollbar',
        providerVersion: '1.16.0',
        providerVersionConstraint: '1.16.0'
      },
      terraformProviderSource: 'rollbar/rollbar'
    });
    this._apiKey = config.apiKey;
    this._apiUrl = config.apiUrl;
    this._projectApiKey = config.projectApiKey;
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

  // project_api_key - computed: false, optional: true, required: false
  private _projectApiKey?: string; 
  public get projectApiKey() {
    return this._projectApiKey;
  }
  public set projectApiKey(value: string | undefined) {
    this._projectApiKey = value;
  }
  public resetProjectApiKey() {
    this._projectApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectApiKeyInput() {
    return this._projectApiKey;
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
      project_api_key: cdktf.stringToTerraform(this._projectApiKey),
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
      project_api_key: {
        value: cdktf.stringToHclTerraform(this._projectApiKey),
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
