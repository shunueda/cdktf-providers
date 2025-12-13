// https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SinglestoredbProviderConfig {
  /**
  * The SingleStore Management API key used for authentication. If not provided, the provider will attempt to read the key from the file specified in the 'api_key_path' attribute or from the environment variable 'SINGLESTOREDB_API_KEY'. Generate your API key in the SingleStore Portal at https://portal.singlestore.com/organizations/org-id/api-keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs#api_key SinglestoredbProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The absolute path to a file containing the SingleStore Management API key for authentication. If not provided, the provider will use the value in the 'api_key' attribute or the 'SINGLESTOREDB_API_KEY' environment variable. Generate your API key in the SingleStore Portal at https://portal.singlestore.com/organizations/org-id/api-keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs#api_key_path SinglestoredbProvider#api_key_path}
  */
  readonly apiKeyPath?: string;
  /**
  * The URL of the SingleStore Management API service. This URL is used by the provider to interact with the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs#api_service_url SinglestoredbProvider#api_service_url}
  */
  readonly apiServiceUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs#alias SinglestoredbProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs singlestoredb}
*/
export class SinglestoredbProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "singlestoredb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SinglestoredbProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SinglestoredbProvider to import
  * @param importFromId The id of the existing SinglestoredbProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SinglestoredbProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "singlestoredb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs singlestoredb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SinglestoredbProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SinglestoredbProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'singlestoredb',
      terraformGeneratorMetadata: {
        providerName: 'singlestoredb',
        providerVersion: '0.1.8',
        providerVersionConstraint: '0.1.8'
      },
      terraformProviderSource: 'singlestore-labs/singlestoredb'
    });
    this._apiKey = config.apiKey;
    this._apiKeyPath = config.apiKeyPath;
    this._apiServiceUrl = config.apiServiceUrl;
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

  // api_key_path - computed: false, optional: true, required: false
  private _apiKeyPath?: string; 
  public get apiKeyPath() {
    return this._apiKeyPath;
  }
  public set apiKeyPath(value: string | undefined) {
    this._apiKeyPath = value;
  }
  public resetApiKeyPath() {
    this._apiKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyPathInput() {
    return this._apiKeyPath;
  }

  // api_service_url - computed: false, optional: true, required: false
  private _apiServiceUrl?: string; 
  public get apiServiceUrl() {
    return this._apiServiceUrl;
  }
  public set apiServiceUrl(value: string | undefined) {
    this._apiServiceUrl = value;
  }
  public resetApiServiceUrl() {
    this._apiServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServiceUrlInput() {
    return this._apiServiceUrl;
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
      api_key_path: cdktf.stringToTerraform(this._apiKeyPath),
      api_service_url: cdktf.stringToTerraform(this._apiServiceUrl),
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
      api_key_path: {
        value: cdktf.stringToHclTerraform(this._apiKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_service_url: {
        value: cdktf.stringToHclTerraform(this._apiServiceUrl),
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
