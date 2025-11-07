// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudsmithProviderConfig {
  /**
  * The API host to connect to (mostly useful for testing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs#api_host CloudsmithProvider#api_host}
  */
  readonly apiHost?: string;
  /**
  * The API key for authenticating with the Cloudsmith API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs#api_key CloudsmithProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * Additional HTTP headers to include in API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs#headers CloudsmithProvider#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs#alias CloudsmithProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs cloudsmith}
*/
export class CloudsmithProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudsmithProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudsmithProvider to import
  * @param importFromId The id of the existing CloudsmithProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudsmithProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs cloudsmith} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudsmithProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CloudsmithProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.66'
      },
      terraformProviderSource: 'cloudsmith-io/cloudsmith'
    });
    this._apiHost = config.apiHost;
    this._apiKey = config.apiKey;
    this._headers = config.headers;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_host - computed: false, optional: true, required: false
  private _apiHost?: string; 
  public get apiHost() {
    return this._apiHost;
  }
  public set apiHost(value: string | undefined) {
    this._apiHost = value;
  }
  public resetApiHost() {
    this._apiHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiHostInput() {
    return this._apiHost;
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: { [key: string]: string } | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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
      api_host: cdktf.stringToTerraform(this._apiHost),
      api_key: cdktf.stringToTerraform(this._apiKey),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_host: {
        value: cdktf.stringToHclTerraform(this._apiHost),
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
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
