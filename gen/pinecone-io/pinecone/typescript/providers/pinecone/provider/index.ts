// https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PineconeProviderConfig {
  /**
  * Pinecone API Key. Can be configured by setting PINECONE_API_KEY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs#api_key PineconeProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Pinecone Client ID for admin operations. Can be configured by setting PINECONE_CLIENT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs#client_id PineconeProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Pinecone Client Secret for admin operations. Can be configured by setting PINECONE_CLIENT_SECRET environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs#client_secret PineconeProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs#alias PineconeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs pinecone}
*/
export class PineconeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pinecone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PineconeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PineconeProvider to import
  * @param importFromId The id of the existing PineconeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PineconeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pinecone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs pinecone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PineconeProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PineconeProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pinecone',
      terraformGeneratorMetadata: {
        providerName: 'pinecone',
        providerVersion: '2.0.0'
      },
      terraformProviderSource: 'pinecone-io/pinecone'
    });
    this._apiKey = config.apiKey;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
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
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
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
