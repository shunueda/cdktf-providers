// https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChecklyProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs#account_id ChecklyProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs#api_key ChecklyProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs#api_url ChecklyProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs#alias ChecklyProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs checkly}
*/
export class ChecklyProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChecklyProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChecklyProvider to import
  * @param importFromId The id of the existing ChecklyProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChecklyProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs checkly} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChecklyProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ChecklyProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.17.1',
        providerVersionConstraint: '1.17.1'
      },
      terraformProviderSource: 'checkly/checkly'
    });
    this._accountId = config.accountId;
    this._apiKey = config.apiKey;
    this._apiUrl = config.apiUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this._accountId;
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

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
      account_id: cdktf.stringToTerraform(this._accountId),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
