// https://registry.terraform.io/providers/timohirt/hetznerdns/2.2.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HetznerdnsProviderConfig {
  /**
  * The API access token to authenticate at Hetzner DNS API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timohirt/hetznerdns/2.2.0/docs#apitoken HetznerdnsProvider#apitoken}
  */
  readonly apitoken: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timohirt/hetznerdns/2.2.0/docs#alias HetznerdnsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/timohirt/hetznerdns/2.2.0/docs hetznerdns}
*/
export class HetznerdnsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hetznerdns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HetznerdnsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HetznerdnsProvider to import
  * @param importFromId The id of the existing HetznerdnsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/timohirt/hetznerdns/2.2.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HetznerdnsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hetznerdns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timohirt/hetznerdns/2.2.0/docs hetznerdns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HetznerdnsProviderConfig
  */
  public constructor(scope: Construct, id: string, config: HetznerdnsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'hetznerdns',
      terraformGeneratorMetadata: {
        providerName: 'hetznerdns',
        providerVersion: '2.2.0',
        providerVersionConstraint: '2.2.0'
      },
      terraformProviderSource: 'timohirt/hetznerdns'
    });
    this._apitoken = config.apitoken;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apitoken - computed: false, optional: false, required: true
  private _apitoken?: string; 
  public get apitoken() {
    return this._apitoken;
  }
  public set apitoken(value: string | undefined) {
    this._apitoken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apitokenInput() {
    return this._apitoken;
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
      apitoken: cdktf.stringToTerraform(this._apitoken),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apitoken: {
        value: cdktf.stringToHclTerraform(this._apitoken),
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
