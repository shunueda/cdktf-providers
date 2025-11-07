// https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsgenieProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs#api_key OpsgenieProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs#api_retry_count OpsgenieProvider#api_retry_count}
  */
  readonly apiRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs#api_retry_wait_max OpsgenieProvider#api_retry_wait_max}
  */
  readonly apiRetryWaitMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs#api_retry_wait_min OpsgenieProvider#api_retry_wait_min}
  */
  readonly apiRetryWaitMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs#api_url OpsgenieProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs#alias OpsgenieProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs opsgenie}
*/
export class OpsgenieProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opsgenie";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpsgenieProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpsgenieProvider to import
  * @param importFromId The id of the existing OpsgenieProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpsgenieProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opsgenie", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs opsgenie} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsgenieProviderConfig
  */
  public constructor(scope: Construct, id: string, config: OpsgenieProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'opsgenie',
      terraformGeneratorMetadata: {
        providerName: 'opsgenie',
        providerVersion: '0.6.40'
      },
      terraformProviderSource: 'opsgenie/opsgenie'
    });
    this._apiKey = config.apiKey;
    this._apiRetryCount = config.apiRetryCount;
    this._apiRetryWaitMax = config.apiRetryWaitMax;
    this._apiRetryWaitMin = config.apiRetryWaitMin;
    this._apiUrl = config.apiUrl;
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

  // api_retry_count - computed: false, optional: true, required: false
  private _apiRetryCount?: number; 
  public get apiRetryCount() {
    return this._apiRetryCount;
  }
  public set apiRetryCount(value: number | undefined) {
    this._apiRetryCount = value;
  }
  public resetApiRetryCount() {
    this._apiRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRetryCountInput() {
    return this._apiRetryCount;
  }

  // api_retry_wait_max - computed: false, optional: true, required: false
  private _apiRetryWaitMax?: number; 
  public get apiRetryWaitMax() {
    return this._apiRetryWaitMax;
  }
  public set apiRetryWaitMax(value: number | undefined) {
    this._apiRetryWaitMax = value;
  }
  public resetApiRetryWaitMax() {
    this._apiRetryWaitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRetryWaitMaxInput() {
    return this._apiRetryWaitMax;
  }

  // api_retry_wait_min - computed: false, optional: true, required: false
  private _apiRetryWaitMin?: number; 
  public get apiRetryWaitMin() {
    return this._apiRetryWaitMin;
  }
  public set apiRetryWaitMin(value: number | undefined) {
    this._apiRetryWaitMin = value;
  }
  public resetApiRetryWaitMin() {
    this._apiRetryWaitMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRetryWaitMinInput() {
    return this._apiRetryWaitMin;
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
      api_retry_count: cdktf.numberToTerraform(this._apiRetryCount),
      api_retry_wait_max: cdktf.numberToTerraform(this._apiRetryWaitMax),
      api_retry_wait_min: cdktf.numberToTerraform(this._apiRetryWaitMin),
      api_url: cdktf.stringToTerraform(this._apiUrl),
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
      api_retry_count: {
        value: cdktf.numberToHclTerraform(this._apiRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_retry_wait_max: {
        value: cdktf.numberToHclTerraform(this._apiRetryWaitMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_retry_wait_min: {
        value: cdktf.numberToHclTerraform(this._apiRetryWaitMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
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
