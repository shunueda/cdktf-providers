// https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MittwaldProviderConfig {
  /**
  * API key for the mittwald API; if omitted, the `MITTWALD_API_TOKEN` environment variable will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs#api_key MittwaldProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Whether to log request bodies when debugging is enabled. CAUTION: This will log sensitive data such as passwords in plain text!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs#debug_request_bodies MittwaldProvider#debug_request_bodies}
  */
  readonly debugRequestBodies?: boolean | cdktf.IResolvable;
  /**
  * API endpoint for the mittwald API. Default to `https://api.mittwald.de/v2` if omitted. During regular usage, you probably won't need this. However, it can be useful for testing against a different API endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs#endpoint MittwaldProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs#alias MittwaldProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs mittwald}
*/
export class MittwaldProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mittwald";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MittwaldProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MittwaldProvider to import
  * @param importFromId The id of the existing MittwaldProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MittwaldProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mittwald", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs mittwald} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MittwaldProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MittwaldProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mittwald',
      terraformGeneratorMetadata: {
        providerName: 'mittwald',
        providerVersion: '1.4.5',
        providerVersionConstraint: '1.4.5'
      },
      terraformProviderSource: 'mittwald/mittwald'
    });
    this._apiKey = config.apiKey;
    this._debugRequestBodies = config.debugRequestBodies;
    this._endpoint = config.endpoint;
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

  // debug_request_bodies - computed: false, optional: true, required: false
  private _debugRequestBodies?: boolean | cdktf.IResolvable; 
  public get debugRequestBodies() {
    return this._debugRequestBodies;
  }
  public set debugRequestBodies(value: boolean | cdktf.IResolvable | undefined) {
    this._debugRequestBodies = value;
  }
  public resetDebugRequestBodies() {
    this._debugRequestBodies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugRequestBodiesInput() {
    return this._debugRequestBodies;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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
      debug_request_bodies: cdktf.booleanToTerraform(this._debugRequestBodies),
      endpoint: cdktf.stringToTerraform(this._endpoint),
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
      debug_request_bodies: {
        value: cdktf.booleanToHclTerraform(this._debugRequestBodies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
