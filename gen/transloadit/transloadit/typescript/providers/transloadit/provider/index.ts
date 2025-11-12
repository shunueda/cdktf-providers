// https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransloaditProviderConfig {
  /**
  * TransloadIt API Authentication Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs#auth_key TransloaditProvider#auth_key}
  */
  readonly authKey?: string;
  /**
  * TransloadIt API Authentication Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs#auth_secret TransloaditProvider#auth_secret}
  */
  readonly authSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs#endpoint TransloaditProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs#alias TransloaditProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs transloadit}
*/
export class TransloaditProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "transloadit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransloaditProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransloaditProvider to import
  * @param importFromId The id of the existing TransloaditProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransloaditProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "transloadit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/transloadit/transloadit/0.7.0/docs transloadit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransloaditProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TransloaditProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'transloadit',
      terraformGeneratorMetadata: {
        providerName: 'transloadit',
        providerVersion: '0.7.0',
        providerVersionConstraint: '0.7.0'
      },
      terraformProviderSource: 'transloadit/transloadit'
    });
    this._authKey = config.authKey;
    this._authSecret = config.authSecret;
    this._endpoint = config.endpoint;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this._authKey;
  }
  public set authKey(value: string | undefined) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // auth_secret - computed: false, optional: true, required: false
  private _authSecret?: string; 
  public get authSecret() {
    return this._authSecret;
  }
  public set authSecret(value: string | undefined) {
    this._authSecret = value;
  }
  public resetAuthSecret() {
    this._authSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSecretInput() {
    return this._authSecret;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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
      auth_key: cdktf.stringToTerraform(this._authKey),
      auth_secret: cdktf.stringToTerraform(this._authSecret),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_key: {
        value: cdktf.stringToHclTerraform(this._authKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_secret: {
        value: cdktf.stringToHclTerraform(this._authSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
