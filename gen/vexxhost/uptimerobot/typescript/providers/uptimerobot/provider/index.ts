// https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UptimerobotProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs#api_key UptimerobotProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs#alias UptimerobotProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs uptimerobot}
*/
export class UptimerobotProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptimerobot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UptimerobotProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UptimerobotProvider to import
  * @param importFromId The id of the existing UptimerobotProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UptimerobotProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptimerobot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs uptimerobot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UptimerobotProviderConfig
  */
  public constructor(scope: Construct, id: string, config: UptimerobotProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'uptimerobot',
      terraformGeneratorMetadata: {
        providerName: 'uptimerobot',
        providerVersion: '0.8.2',
        providerVersionConstraint: '0.8.2'
      },
      terraformProviderSource: 'vexxhost/uptimerobot'
    });
    this._apiKey = config.apiKey;
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
