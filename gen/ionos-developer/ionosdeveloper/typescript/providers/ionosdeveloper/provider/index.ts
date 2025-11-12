// https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IonosdeveloperProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs#api_key IonosdeveloperProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs#auth_header IonosdeveloperProvider#auth_header}
  */
  readonly authHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs#url IonosdeveloperProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs#alias IonosdeveloperProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs ionosdeveloper}
*/
export class IonosdeveloperProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionosdeveloper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IonosdeveloperProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IonosdeveloperProvider to import
  * @param importFromId The id of the existing IonosdeveloperProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IonosdeveloperProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionosdeveloper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-developer/ionosdeveloper/0.0.1/docs ionosdeveloper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IonosdeveloperProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IonosdeveloperProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'ionosdeveloper',
      terraformGeneratorMetadata: {
        providerName: 'ionosdeveloper',
        providerVersion: '0.0.1',
        providerVersionConstraint: '0.0.1'
      },
      terraformProviderSource: 'ionos-developer/ionosdeveloper'
    });
    this._apiKey = config.apiKey;
    this._authHeader = config.authHeader;
    this._url = config.url;
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

  // auth_header - computed: false, optional: true, required: false
  private _authHeader?: string; 
  public get authHeader() {
    return this._authHeader;
  }
  public set authHeader(value: string | undefined) {
    this._authHeader = value;
  }
  public resetAuthHeader() {
    this._authHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHeaderInput() {
    return this._authHeader;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      auth_header: cdktf.stringToTerraform(this._authHeader),
      url: cdktf.stringToTerraform(this._url),
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
      auth_header: {
        value: cdktf.stringToHclTerraform(this._authHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
