// https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PantherProviderConfig {
  /**
  * The API token for the Panther API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs#token PantherProvider#token}
  */
  readonly token?: string;
  /**
  * The API URL for the target Panther instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs#url PantherProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs#alias PantherProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs panther}
*/
export class PantherProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panther";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PantherProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PantherProvider to import
  * @param importFromId The id of the existing PantherProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PantherProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panther", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs panther} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PantherProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PantherProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'panther',
      terraformGeneratorMetadata: {
        providerName: 'panther',
        providerVersion: '0.2.7'
      },
      terraformProviderSource: 'panther-labs/panther'
    });
    this._token = config.token;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
