// https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LumenProviderConfig {
  /**
  * Lumen customer account number (required for new versions of bare metal resources/data sources)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs#account_number LumenProvider#account_number}
  */
  readonly accountNumber: string;
  /**
  * Consumer key for Lumen API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs#consumer_key LumenProvider#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * Consumer secret for Lumen API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs#consumer_secret LumenProvider#consumer_secret}
  */
  readonly consumerSecret: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs#alias LumenProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs lumen}
*/
export class LumenProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lumen";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LumenProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LumenProvider to import
  * @param importFromId The id of the existing LumenProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LumenProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lumen", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs lumen} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LumenProviderConfig
  */
  public constructor(scope: Construct, id: string, config: LumenProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'lumen',
      terraformGeneratorMetadata: {
        providerName: 'lumen',
        providerVersion: '3.0.0'
      },
      terraformProviderSource: 'LumenTech/lumen'
    });
    this._accountNumber = config.accountNumber;
    this._consumerKey = config.consumerKey;
    this._consumerSecret = config.consumerSecret;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_number - computed: false, optional: false, required: true
  private _accountNumber?: string; 
  public get accountNumber() {
    return this._accountNumber;
  }
  public set accountNumber(value: string | undefined) {
    this._accountNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // consumer_key - computed: false, optional: false, required: true
  private _consumerKey?: string; 
  public get consumerKey() {
    return this._consumerKey;
  }
  public set consumerKey(value: string | undefined) {
    this._consumerKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerKeyInput() {
    return this._consumerKey;
  }

  // consumer_secret - computed: false, optional: false, required: true
  private _consumerSecret?: string; 
  public get consumerSecret() {
    return this._consumerSecret;
  }
  public set consumerSecret(value: string | undefined) {
    this._consumerSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretInput() {
    return this._consumerSecret;
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
      account_number: cdktf.stringToTerraform(this._accountNumber),
      consumer_key: cdktf.stringToTerraform(this._consumerKey),
      consumer_secret: cdktf.stringToTerraform(this._consumerSecret),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_number: {
        value: cdktf.stringToHclTerraform(this._accountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_key: {
        value: cdktf.stringToHclTerraform(this._consumerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_secret: {
        value: cdktf.stringToHclTerraform(this._consumerSecret),
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
