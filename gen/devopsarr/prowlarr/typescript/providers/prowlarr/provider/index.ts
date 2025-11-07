// https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProwlarrProviderConfig {
  /**
  * API key for Prowlarr authentication. Can be specified via the `PROWLARR_API_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs#api_key ProwlarrProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Extra headers to be sent along with all Prowlarr requests. If this attribute is unset, it can be specified via environment variables following this pattern `PROWLARR_EXTRA_HEADER_${Header-Name}=${Header-Value}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs#extra_headers ProwlarrProvider#extra_headers}
  */
  readonly extraHeaders?: ProwlarrProviderExtraHeaders[] | cdktf.IResolvable;
  /**
  * Full Prowlarr URL with protocol and port (e.g. `https://test.prowlarr.audio:8686`). You should **NOT** supply any path (`/api`), the SDK will use the appropriate paths. Can be specified via the `PROWLARR_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs#url ProwlarrProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs#alias ProwlarrProvider#alias}
  */
  readonly alias?: string;
}
export interface ProwlarrProviderExtraHeaders {
  /**
  * Header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs#name ProwlarrProvider#name}
  */
  readonly name: string;
  /**
  * Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs#value ProwlarrProvider#value}
  */
  readonly value: string;
}

export function prowlarrProviderExtraHeadersToTerraform(struct?: ProwlarrProviderExtraHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function prowlarrProviderExtraHeadersToHclTerraform(struct?: ProwlarrProviderExtraHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs prowlarr}
*/
export class ProwlarrProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProwlarrProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProwlarrProvider to import
  * @param importFromId The id of the existing ProwlarrProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProwlarrProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.0.2/docs prowlarr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProwlarrProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ProwlarrProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prowlarr',
      terraformGeneratorMetadata: {
        providerName: 'prowlarr',
        providerVersion: '3.0.2'
      },
      terraformProviderSource: 'devopsarr/prowlarr'
    });
    this._apiKey = config.apiKey;
    this._extraHeaders = config.extraHeaders;
    this._url = config.url;
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

  // extra_headers - computed: false, optional: true, required: false
  private _extraHeaders?: ProwlarrProviderExtraHeaders[] | cdktf.IResolvable; 
  public get extraHeaders() {
    return this._extraHeaders;
  }
  public set extraHeaders(value: ProwlarrProviderExtraHeaders[] | cdktf.IResolvable | undefined) {
    this._extraHeaders = value;
  }
  public resetExtraHeaders() {
    this._extraHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraHeadersInput() {
    return this._extraHeaders;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      extra_headers: cdktf.listMapper(prowlarrProviderExtraHeadersToTerraform, false)(this._extraHeaders),
      url: cdktf.stringToTerraform(this._url),
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
      extra_headers: {
        value: cdktf.listMapperHcl(prowlarrProviderExtraHeadersToHclTerraform, false)(this._extraHeaders),
        isBlock: true,
        type: "set",
        storageClassType: "ProwlarrProviderExtraHeadersList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
