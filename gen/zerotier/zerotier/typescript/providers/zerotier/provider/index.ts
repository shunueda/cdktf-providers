// https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZerotierProviderConfig {
  /**
  * ZeroTier Central API Token; you can generate a new one at https://my.zerotier.com/account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs#zerotier_central_token ZerotierProvider#zerotier_central_token}
  */
  readonly zerotierCentralToken: string;
  /**
  * ZeroTier Central API endpoint. Unlikely you'll need to alter this unless you're testing ZeroTier central itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs#zerotier_central_url ZerotierProvider#zerotier_central_url}
  */
  readonly zerotierCentralUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs#alias ZerotierProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs zerotier}
*/
export class ZerotierProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zerotier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZerotierProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZerotierProvider to import
  * @param importFromId The id of the existing ZerotierProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZerotierProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zerotier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs zerotier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZerotierProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ZerotierProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'zerotier',
      terraformGeneratorMetadata: {
        providerName: 'zerotier',
        providerVersion: '1.6.0'
      },
      terraformProviderSource: 'zerotier/zerotier'
    });
    this._zerotierCentralToken = config.zerotierCentralToken;
    this._zerotierCentralUrl = config.zerotierCentralUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // zerotier_central_token - computed: false, optional: false, required: true
  private _zerotierCentralToken?: string; 
  public get zerotierCentralToken() {
    return this._zerotierCentralToken;
  }
  public set zerotierCentralToken(value: string | undefined) {
    this._zerotierCentralToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zerotierCentralTokenInput() {
    return this._zerotierCentralToken;
  }

  // zerotier_central_url - computed: false, optional: true, required: false
  private _zerotierCentralUrl?: string; 
  public get zerotierCentralUrl() {
    return this._zerotierCentralUrl;
  }
  public set zerotierCentralUrl(value: string | undefined) {
    this._zerotierCentralUrl = value;
  }
  public resetZerotierCentralUrl() {
    this._zerotierCentralUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zerotierCentralUrlInput() {
    return this._zerotierCentralUrl;
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
      zerotier_central_token: cdktf.stringToTerraform(this._zerotierCentralToken),
      zerotier_central_url: cdktf.stringToTerraform(this._zerotierCentralUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      zerotier_central_token: {
        value: cdktf.stringToHclTerraform(this._zerotierCentralToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zerotier_central_url: {
        value: cdktf.stringToHclTerraform(this._zerotierCentralUrl),
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
