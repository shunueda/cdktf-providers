// https://registry.terraform.io/providers/datastax/astra/2.4.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AstraProviderConfig {
  /**
  * URL for Astra API. May also be provided via ASTRA_API_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs#astra_api_url AstraProvider#astra_api_url}
  */
  readonly astraApiUrl?: string;
  /**
  * DNS suffix for Astra databases. May also be provided via ASTRA_APPS_DOMAIN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs#astra_apps_domain AstraProvider#astra_apps_domain}
  */
  readonly astraAppsDomain?: string;
  /**
  * URL for Astra Streaming API. May also be provided via ASTRA_STREAMING_API_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs#streaming_api_url AstraProvider#streaming_api_url}
  */
  readonly streamingApiUrl?: string;
  /**
  * Authentication token for Astra API. May also be provided via ASTRA_API_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs#token AstraProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs#alias AstraProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs astra}
*/
export class AstraProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AstraProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AstraProvider to import
  * @param importFromId The id of the existing AstraProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AstraProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs astra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AstraProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AstraProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'astra',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      terraformProviderSource: 'datastax/astra'
    });
    this._astraApiUrl = config.astraApiUrl;
    this._astraAppsDomain = config.astraAppsDomain;
    this._streamingApiUrl = config.streamingApiUrl;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // astra_api_url - computed: false, optional: true, required: false
  private _astraApiUrl?: string; 
  public get astraApiUrl() {
    return this._astraApiUrl;
  }
  public set astraApiUrl(value: string | undefined) {
    this._astraApiUrl = value;
  }
  public resetAstraApiUrl() {
    this._astraApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get astraApiUrlInput() {
    return this._astraApiUrl;
  }

  // astra_apps_domain - computed: false, optional: true, required: false
  private _astraAppsDomain?: string; 
  public get astraAppsDomain() {
    return this._astraAppsDomain;
  }
  public set astraAppsDomain(value: string | undefined) {
    this._astraAppsDomain = value;
  }
  public resetAstraAppsDomain() {
    this._astraAppsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get astraAppsDomainInput() {
    return this._astraAppsDomain;
  }

  // streaming_api_url - computed: false, optional: true, required: false
  private _streamingApiUrl?: string; 
  public get streamingApiUrl() {
    return this._streamingApiUrl;
  }
  public set streamingApiUrl(value: string | undefined) {
    this._streamingApiUrl = value;
  }
  public resetStreamingApiUrl() {
    this._streamingApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingApiUrlInput() {
    return this._streamingApiUrl;
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
      astra_api_url: cdktf.stringToTerraform(this._astraApiUrl),
      astra_apps_domain: cdktf.stringToTerraform(this._astraAppsDomain),
      streaming_api_url: cdktf.stringToTerraform(this._streamingApiUrl),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      astra_api_url: {
        value: cdktf.stringToHclTerraform(this._astraApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      astra_apps_domain: {
        value: cdktf.stringToHclTerraform(this._astraAppsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      streaming_api_url: {
        value: cdktf.stringToHclTerraform(this._streamingApiUrl),
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
