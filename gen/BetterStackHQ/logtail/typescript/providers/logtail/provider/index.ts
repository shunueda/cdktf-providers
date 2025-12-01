// https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogtailProviderConfig {
  /**
  * Better Stack Telemetry API token. The value can be omitted if `LOGTAIL_API_TOKEN` environment variable is set. See https://betterstack.com/docs/logs/api/getting-started/#get-an-logs-api-token on how to obtain the API token for your team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs#api_token LogtailProvider#api_token}
  */
  readonly apiToken: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs#alias LogtailProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs logtail}
*/
export class LogtailProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogtailProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogtailProvider to import
  * @param importFromId The id of the existing LogtailProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogtailProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.2/docs logtail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogtailProviderConfig
  */
  public constructor(scope: Construct, id: string, config: LogtailProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'logtail',
      terraformGeneratorMetadata: {
        providerName: 'logtail',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      terraformProviderSource: 'BetterStackHQ/logtail'
    });
    this._apiToken = config.apiToken;
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
