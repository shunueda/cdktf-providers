// https://registry.terraform.io/providers/env0/env0/1.29.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Env0ProviderConfig {
  /**
  * env0 API endpoint. This can also be set via the ENV0_API_ENDPOINT environment variable, and is usually used for testing purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs#api_endpoint Env0Provider#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * env0 API key. This field can be removed from the provider block; instead of the field, you can set the value via the ENV0_API_KEY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs#api_key Env0Provider#api_key}
  */
  readonly apiKey?: string;
  /**
  * env0 API secret. This field can be removed from the provider block; instead of the field, you can set the value via the ENV0_API_SECRET environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs#api_secret Env0Provider#api_secret}
  */
  readonly apiSecret?: string;
  /**
  * when the API key is associated with multiple organizations, this field is required. If an API key has one organization, this field is ignored. This can also be set via the ENV0_ORGANIZATION_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs#organization_id Env0Provider#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs#alias Env0Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs env0}
*/
export class Env0Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Env0Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Env0Provider to import
  * @param importFromId The id of the existing Env0Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Env0Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs env0} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Env0ProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Env0ProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'env0',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.4'
      },
      terraformProviderSource: 'env0/env0'
    });
    this._apiEndpoint = config.apiEndpoint;
    this._apiKey = config.apiKey;
    this._apiSecret = config.apiSecret;
    this._organizationId = config.organizationId;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public set apiEndpoint(value: string | undefined) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
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

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this._organizationId;
  }
  public set organizationId(value: string | undefined) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
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
      api_endpoint: cdktf.stringToTerraform(this._apiEndpoint),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_secret: cdktf.stringToTerraform(this._apiSecret),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_endpoint: {
        value: cdktf.stringToHclTerraform(this._apiEndpoint),
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
      api_secret: {
        value: cdktf.stringToHclTerraform(this._apiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
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
