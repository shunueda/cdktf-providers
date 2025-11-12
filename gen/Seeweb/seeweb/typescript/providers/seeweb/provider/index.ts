// https://registry.terraform.io/providers/seeweb/seeweb/0.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SeewebProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seeweb/seeweb/0.1.0/docs#api_url_override SeewebProvider#api_url_override}
  */
  readonly apiUrlOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seeweb/seeweb/0.1.0/docs#token SeewebProvider#token}
  */
  readonly token: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/seeweb/seeweb/0.1.0/docs#alias SeewebProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/seeweb/seeweb/0.1.0/docs seeweb}
*/
export class SeewebProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "seeweb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SeewebProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SeewebProvider to import
  * @param importFromId The id of the existing SeewebProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/seeweb/seeweb/0.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SeewebProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "seeweb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/seeweb/seeweb/0.1.0/docs seeweb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SeewebProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SeewebProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'seeweb',
      terraformGeneratorMetadata: {
        providerName: 'seeweb',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      terraformProviderSource: 'Seeweb/seeweb'
    });
    this._apiUrlOverride = config.apiUrlOverride;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url_override - computed: false, optional: true, required: false
  private _apiUrlOverride?: string; 
  public get apiUrlOverride() {
    return this._apiUrlOverride;
  }
  public set apiUrlOverride(value: string | undefined) {
    this._apiUrlOverride = value;
  }
  public resetApiUrlOverride() {
    this._apiUrlOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlOverrideInput() {
    return this._apiUrlOverride;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
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
      api_url_override: cdktf.stringToTerraform(this._apiUrlOverride),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_url_override: {
        value: cdktf.stringToHclTerraform(this._apiUrlOverride),
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
