// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Dome9ProviderConfig {
  /**
  * dome9 base url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs#base_url Dome9Provider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * dome9 access id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs#dome9_access_id Dome9Provider#dome9_access_id}
  */
  readonly dome9AccessId: string;
  /**
  * dome9 api secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs#dome9_secret_key Dome9Provider#dome9_secret_key}
  */
  readonly dome9SecretKey: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs#alias Dome9Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs dome9}
*/
export class Dome9Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dome9Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dome9Provider to import
  * @param importFromId The id of the existing Dome9Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dome9Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs dome9} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Dome9ProviderConfig
  */
  public constructor(scope: Construct, id: string, config: Dome9ProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4'
      },
      terraformProviderSource: 'dome9/dome9'
    });
    this._baseUrl = config.baseUrl;
    this._dome9AccessId = config.dome9AccessId;
    this._dome9SecretKey = config.dome9SecretKey;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // dome9_access_id - computed: false, optional: false, required: true
  private _dome9AccessId?: string; 
  public get dome9AccessId() {
    return this._dome9AccessId;
  }
  public set dome9AccessId(value: string | undefined) {
    this._dome9AccessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dome9AccessIdInput() {
    return this._dome9AccessId;
  }

  // dome9_secret_key - computed: false, optional: false, required: true
  private _dome9SecretKey?: string; 
  public get dome9SecretKey() {
    return this._dome9SecretKey;
  }
  public set dome9SecretKey(value: string | undefined) {
    this._dome9SecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dome9SecretKeyInput() {
    return this._dome9SecretKey;
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
      base_url: cdktf.stringToTerraform(this._baseUrl),
      dome9_access_id: cdktf.stringToTerraform(this._dome9AccessId),
      dome9_secret_key: cdktf.stringToTerraform(this._dome9SecretKey),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dome9_access_id: {
        value: cdktf.stringToHclTerraform(this._dome9AccessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dome9_secret_key: {
        value: cdktf.stringToHclTerraform(this._dome9SecretKey),
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
