// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NiosProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs#nios_host_url NiosProvider#nios_host_url}
  */
  readonly niosHostUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs#nios_password NiosProvider#nios_password}
  */
  readonly niosPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs#nios_username NiosProvider#nios_username}
  */
  readonly niosUsername?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs#alias NiosProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs nios}
*/
export class NiosProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NiosProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NiosProvider to import
  * @param importFromId The id of the existing NiosProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NiosProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs nios} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NiosProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NiosProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      terraformProviderSource: 'infobloxopen/nios'
    });
    this._niosHostUrl = config.niosHostUrl;
    this._niosPassword = config.niosPassword;
    this._niosUsername = config.niosUsername;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // nios_host_url - computed: false, optional: true, required: false
  private _niosHostUrl?: string; 
  public get niosHostUrl() {
    return this._niosHostUrl;
  }
  public set niosHostUrl(value: string | undefined) {
    this._niosHostUrl = value;
  }
  public resetNiosHostUrl() {
    this._niosHostUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get niosHostUrlInput() {
    return this._niosHostUrl;
  }

  // nios_password - computed: false, optional: true, required: false
  private _niosPassword?: string; 
  public get niosPassword() {
    return this._niosPassword;
  }
  public set niosPassword(value: string | undefined) {
    this._niosPassword = value;
  }
  public resetNiosPassword() {
    this._niosPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get niosPasswordInput() {
    return this._niosPassword;
  }

  // nios_username - computed: false, optional: true, required: false
  private _niosUsername?: string; 
  public get niosUsername() {
    return this._niosUsername;
  }
  public set niosUsername(value: string | undefined) {
    this._niosUsername = value;
  }
  public resetNiosUsername() {
    this._niosUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get niosUsernameInput() {
    return this._niosUsername;
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
      nios_host_url: cdktf.stringToTerraform(this._niosHostUrl),
      nios_password: cdktf.stringToTerraform(this._niosPassword),
      nios_username: cdktf.stringToTerraform(this._niosUsername),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      nios_host_url: {
        value: cdktf.stringToHclTerraform(this._niosHostUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nios_password: {
        value: cdktf.stringToHclTerraform(this._niosPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nios_username: {
        value: cdktf.stringToHclTerraform(this._niosUsername),
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
