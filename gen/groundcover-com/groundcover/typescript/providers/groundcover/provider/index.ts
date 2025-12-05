// https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroundcoverProviderConfig {
  /**
  * groundcover API Key. Can also be set via the GROUNDCOVER_API_KEY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs#api_key GroundcoverProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * groundcover API URL. Defaults to the groundcover production URL. Can also be set via the GROUNDCOVER_API_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs#api_url GroundcoverProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * groundcover Backend ID. Can also be set via the GROUNDCOVER_BACKEND_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs#backend_id GroundcoverProvider#backend_id}
  */
  readonly backendId?: string;
  /**
  * groundcover Organization Name. Can also be set via the GROUNDCOVER_ORG_NAME environment variable. Deprecated: Use backend_id instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs#org_name GroundcoverProvider#org_name}
  */
  readonly orgName?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs#alias GroundcoverProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs groundcover}
*/
export class GroundcoverProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "groundcover";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroundcoverProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroundcoverProvider to import
  * @param importFromId The id of the existing GroundcoverProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroundcoverProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "groundcover", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.1/docs groundcover} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroundcoverProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GroundcoverProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'groundcover',
      terraformGeneratorMetadata: {
        providerName: 'groundcover',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      terraformProviderSource: 'groundcover-com/groundcover'
    });
    this._apiKey = config.apiKey;
    this._apiUrl = config.apiUrl;
    this._backendId = config.backendId;
    this._orgName = config.orgName;
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

  // backend_id - computed: false, optional: true, required: false
  private _backendId?: string; 
  public get backendId() {
    return this._backendId;
  }
  public set backendId(value: string | undefined) {
    this._backendId = value;
  }
  public resetBackendId() {
    this._backendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendIdInput() {
    return this._backendId;
  }

  // org_name - computed: false, optional: true, required: false
  private _orgName?: string; 
  public get orgName() {
    return this._orgName;
  }
  public set orgName(value: string | undefined) {
    this._orgName = value;
  }
  public resetOrgName() {
    this._orgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNameInput() {
    return this._orgName;
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
      api_url: cdktf.stringToTerraform(this._apiUrl),
      backend_id: cdktf.stringToTerraform(this._backendId),
      org_name: cdktf.stringToTerraform(this._orgName),
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
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_id: {
        value: cdktf.stringToHclTerraform(this._backendId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_name: {
        value: cdktf.stringToHclTerraform(this._orgName),
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
