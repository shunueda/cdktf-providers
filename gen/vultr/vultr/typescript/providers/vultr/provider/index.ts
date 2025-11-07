// https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VultrProviderConfig {
  /**
  * The API Key that allows interaction with the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs#api_key VultrProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * Allows users to set the speed of API calls to work with the Vultr Rate Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs#rate_limit VultrProvider#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Allows users to set the maximum number of retries allowed for a failed API call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs#retry_limit VultrProvider#retry_limit}
  */
  readonly retryLimit?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs#alias VultrProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs vultr}
*/
export class VultrProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vultr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VultrProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VultrProvider to import
  * @param importFromId The id of the existing VultrProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VultrProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vultr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs vultr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VultrProviderConfig
  */
  public constructor(scope: Construct, id: string, config: VultrProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vultr',
      terraformGeneratorMetadata: {
        providerName: 'vultr',
        providerVersion: '2.27.1'
      },
      terraformProviderSource: 'vultr/vultr'
    });
    this._apiKey = config.apiKey;
    this._rateLimit = config.rateLimit;
    this._retryLimit = config.retryLimit;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this._rateLimit;
  }
  public set rateLimit(value: number | undefined) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // retry_limit - computed: false, optional: true, required: false
  private _retryLimit?: number; 
  public get retryLimit() {
    return this._retryLimit;
  }
  public set retryLimit(value: number | undefined) {
    this._retryLimit = value;
  }
  public resetRetryLimit() {
    this._retryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryLimitInput() {
    return this._retryLimit;
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
      rate_limit: cdktf.numberToTerraform(this._rateLimit),
      retry_limit: cdktf.numberToTerraform(this._retryLimit),
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
      rate_limit: {
        value: cdktf.numberToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_limit: {
        value: cdktf.numberToHclTerraform(this._retryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
