// https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatuscakeProviderConfig {
  /**
  * The API token for operations. This can also be provided as an environment variable `STATUSCAKE_API_TOKEN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs#api_token StatuscakeProvider#api_token}
  */
  readonly apiToken: string;
  /**
  * Maximum backoff period in seconds after failed API calls. This can also be provided as an environment variable `STATUSCAKE_MAX_BACKOFF`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs#max_backoff StatuscakeProvider#max_backoff}
  */
  readonly maxBackoff?: number;
  /**
  * Minimum backoff period in seconds after failed API calls. This can also be provided as an environment variable `STATUSCAKE_MIN_BACKOFF`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs#min_backoff StatuscakeProvider#min_backoff}
  */
  readonly minBackoff?: number;
  /**
  * Maximum number of retries to perform when an API request fails. This can also be provided as an environment variable `STATUSCAKE_RETRIES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs#retries StatuscakeProvider#retries}
  */
  readonly retries?: number;
  /**
  * RPS limit to apply when making calls to the API. This can also be provided as an environment variable `STATUSCAKE_RPS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs#rps StatuscakeProvider#rps}
  */
  readonly rps?: number;
  /**
  * Custom endpoint to which request will be made. This can also be provided as an environment variable `STATUCAKE_CUSTOM_ENDPOINT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs#statuscake_custom_endpoint StatuscakeProvider#statuscake_custom_endpoint}
  */
  readonly statuscakeCustomEndpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs#alias StatuscakeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs statuscake}
*/
export class StatuscakeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuscake";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StatuscakeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatuscakeProvider to import
  * @param importFromId The id of the existing StatuscakeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatuscakeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuscake", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs statuscake} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatuscakeProviderConfig
  */
  public constructor(scope: Construct, id: string, config: StatuscakeProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'statuscake',
      terraformGeneratorMetadata: {
        providerName: 'statuscake',
        providerVersion: '2.2.2'
      },
      terraformProviderSource: 'StatusCakeDev/statuscake'
    });
    this._apiToken = config.apiToken;
    this._maxBackoff = config.maxBackoff;
    this._minBackoff = config.minBackoff;
    this._retries = config.retries;
    this._rps = config.rps;
    this._statuscakeCustomEndpoint = config.statuscakeCustomEndpoint;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // max_backoff - computed: false, optional: true, required: false
  private _maxBackoff?: number; 
  public get maxBackoff() {
    return this._maxBackoff;
  }
  public set maxBackoff(value: number | undefined) {
    this._maxBackoff = value;
  }
  public resetMaxBackoff() {
    this._maxBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffInput() {
    return this._maxBackoff;
  }

  // min_backoff - computed: false, optional: true, required: false
  private _minBackoff?: number; 
  public get minBackoff() {
    return this._minBackoff;
  }
  public set minBackoff(value: number | undefined) {
    this._minBackoff = value;
  }
  public resetMinBackoff() {
    this._minBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackoffInput() {
    return this._minBackoff;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // rps - computed: false, optional: true, required: false
  private _rps?: number; 
  public get rps() {
    return this._rps;
  }
  public set rps(value: number | undefined) {
    this._rps = value;
  }
  public resetRps() {
    this._rps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpsInput() {
    return this._rps;
  }

  // statuscake_custom_endpoint - computed: false, optional: true, required: false
  private _statuscakeCustomEndpoint?: string; 
  public get statuscakeCustomEndpoint() {
    return this._statuscakeCustomEndpoint;
  }
  public set statuscakeCustomEndpoint(value: string | undefined) {
    this._statuscakeCustomEndpoint = value;
  }
  public resetStatuscakeCustomEndpoint() {
    this._statuscakeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statuscakeCustomEndpointInput() {
    return this._statuscakeCustomEndpoint;
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
      api_token: cdktf.stringToTerraform(this._apiToken),
      max_backoff: cdktf.numberToTerraform(this._maxBackoff),
      min_backoff: cdktf.numberToTerraform(this._minBackoff),
      retries: cdktf.numberToTerraform(this._retries),
      rps: cdktf.numberToTerraform(this._rps),
      statuscake_custom_endpoint: cdktf.stringToTerraform(this._statuscakeCustomEndpoint),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_backoff: {
        value: cdktf.numberToHclTerraform(this._maxBackoff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_backoff: {
        value: cdktf.numberToHclTerraform(this._minBackoff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rps: {
        value: cdktf.numberToHclTerraform(this._rps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      statuscake_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._statuscakeCustomEndpoint),
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
