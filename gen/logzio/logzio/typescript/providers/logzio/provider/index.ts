// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogzioProviderConfig {
  /**
  * Your API token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs#api_token LogzioProvider#api_token}
  */
  readonly apiToken: string;
  /**
  * Custom API URL to override the default Logz.io API endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs#custom_api_url LogzioProvider#custom_api_url}
  */
  readonly customApiUrl?: string;
  /**
  * Your logz.io region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs#region LogzioProvider#region}
  */
  readonly region?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs#alias LogzioProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs logzio}
*/
export class LogzioProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogzioProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogzioProvider to import
  * @param importFromId The id of the existing LogzioProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogzioProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs logzio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogzioProviderConfig
  */
  public constructor(scope: Construct, id: string, config: LogzioProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'logzio',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0'
      },
      terraformProviderSource: 'logzio/logzio'
    });
    this._apiToken = config.apiToken;
    this._customApiUrl = config.customApiUrl;
    this._region = config.region;
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

  // custom_api_url - computed: false, optional: true, required: false
  private _customApiUrl?: string; 
  public get customApiUrl() {
    return this._customApiUrl;
  }
  public set customApiUrl(value: string | undefined) {
    this._customApiUrl = value;
  }
  public resetCustomApiUrl() {
    this._customApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApiUrlInput() {
    return this._customApiUrl;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      custom_api_url: cdktf.stringToTerraform(this._customApiUrl),
      region: cdktf.stringToTerraform(this._region),
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
      custom_api_url: {
        value: cdktf.stringToHclTerraform(this._customApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
