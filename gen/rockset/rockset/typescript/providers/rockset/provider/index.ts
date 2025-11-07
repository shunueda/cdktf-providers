// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RocksetProviderConfig {
  /**
  * The API key used to access Rockset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs#api_key RocksetProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The API server for accessing Rockset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs#api_server RocksetProvider#api_server}
  */
  readonly apiServer?: string;
  /**
  * The ID of the organization to connect to. If this is set, the provider will validate that the organization_id matches the organization_id of the api key. If it does not match, the provider will return an error.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs#organization_id RocksetProvider#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs#alias RocksetProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs rockset}
*/
export class RocksetProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RocksetProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RocksetProvider to import
  * @param importFromId The id of the existing RocksetProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RocksetProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs rockset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RocksetProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RocksetProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rockset',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8'
      },
      terraformProviderSource: 'rockset/rockset'
    });
    this._apiKey = config.apiKey;
    this._apiServer = config.apiServer;
    this._organizationId = config.organizationId;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // api_server - computed: false, optional: true, required: false
  private _apiServer?: string; 
  public get apiServer() {
    return this._apiServer;
  }
  public set apiServer(value: string | undefined) {
    this._apiServer = value;
  }
  public resetApiServer() {
    this._apiServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerInput() {
    return this._apiServer;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_server: cdktf.stringToTerraform(this._apiServer),
      organization_id: cdktf.stringToTerraform(this._organizationId),
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
      api_server: {
        value: cdktf.stringToHclTerraform(this._apiServer),
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
