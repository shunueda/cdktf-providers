// https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenesiscloudProviderConfig {
  /**
  * Genesis Cloud API endpoint. May also be provided via `GENESISCLOUD_ENDPOINT` environment variable. If neither is provided, defaults to `https://api.genesiscloud.com/compute/v1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs#endpoint GenesiscloudProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The polling interval.
  *   - The string must be a positive [time duration](https://pkg.go.dev/time#ParseDuration), for example "10s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs#polling_interval GenesiscloudProvider#polling_interval}
  */
  readonly pollingInterval?: string;
  /**
  * Genesis Cloud API token. May also be provided via `GENESISCLOUD_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs#token GenesiscloudProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs#alias GenesiscloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs genesiscloud}
*/
export class GenesiscloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesiscloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenesiscloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenesiscloudProvider to import
  * @param importFromId The id of the existing GenesiscloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenesiscloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesiscloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs genesiscloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenesiscloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GenesiscloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'genesiscloud',
      terraformGeneratorMetadata: {
        providerName: 'genesiscloud',
        providerVersion: '1.1.14',
        providerVersionConstraint: '1.1.14'
      },
      terraformProviderSource: 'genesiscloud/genesiscloud'
    });
    this._endpoint = config.endpoint;
    this._pollingInterval = config.pollingInterval;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // polling_interval - computed: false, optional: true, required: false
  private _pollingInterval?: string; 
  public get pollingInterval() {
    return this._pollingInterval;
  }
  public set pollingInterval(value: string | undefined) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
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
      endpoint: cdktf.stringToTerraform(this._endpoint),
      polling_interval: cdktf.stringToTerraform(this._pollingInterval),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_interval: {
        value: cdktf.stringToHclTerraform(this._pollingInterval),
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
