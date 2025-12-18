// https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpslevelProviderConfig {
  /**
  * Value (in seconds) to use for the timeout of API calls made.  It can also be sourced from the OPSLEVEL_API_TIMEOUT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs#api_timeout OpslevelProvider#api_timeout}
  */
  readonly apiTimeout?: number;
  /**
  * The API authorization token. It can also be sourced from the OPSLEVEL_API_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs#api_token OpslevelProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * The url of the OpsLevel API to. It can also be sourced from the OPSLEVEL_API_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs#api_url OpslevelProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs#alias OpslevelProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs opslevel}
*/
export class OpslevelProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpslevelProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpslevelProvider to import
  * @param importFromId The id of the existing OpslevelProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpslevelProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs opslevel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpslevelProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpslevelProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opslevel',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.8.1',
        providerVersionConstraint: '1.8.1'
      },
      terraformProviderSource: 'OpsLevel/opslevel'
    });
    this._apiTimeout = config.apiTimeout;
    this._apiToken = config.apiToken;
    this._apiUrl = config.apiUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_timeout - computed: false, optional: true, required: false
  private _apiTimeout?: number; 
  public get apiTimeout() {
    return this._apiTimeout;
  }
  public set apiTimeout(value: number | undefined) {
    this._apiTimeout = value;
  }
  public resetApiTimeout() {
    this._apiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTimeoutInput() {
    return this._apiTimeout;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
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
      api_timeout: cdktf.numberToTerraform(this._apiTimeout),
      api_token: cdktf.stringToTerraform(this._apiToken),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_timeout: {
        value: cdktf.numberToHclTerraform(this._apiTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
