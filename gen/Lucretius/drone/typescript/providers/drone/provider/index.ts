// https://registry.terraform.io/providers/lucretius/drone/0.2.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DroneProviderConfig {
  /**
  * URL for the drone server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lucretius/drone/0.2.5/docs#server DroneProvider#server}
  */
  readonly server: string;
  /**
  * API Token for the drone server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lucretius/drone/0.2.5/docs#token DroneProvider#token}
  */
  readonly token: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lucretius/drone/0.2.5/docs#alias DroneProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lucretius/drone/0.2.5/docs drone}
*/
export class DroneProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "drone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DroneProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DroneProvider to import
  * @param importFromId The id of the existing DroneProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/lucretius/drone/0.2.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DroneProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "drone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lucretius/drone/0.2.5/docs drone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DroneProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DroneProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'drone',
      terraformGeneratorMetadata: {
        providerName: 'drone',
        providerVersion: '0.2.5'
      },
      terraformProviderSource: 'Lucretius/drone'
    });
    this._server = config.server;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this._server;
  }
  public set server(value: string | undefined) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
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
      server: cdktf.stringToTerraform(this._server),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      server: {
        value: cdktf.stringToHclTerraform(this._server),
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
