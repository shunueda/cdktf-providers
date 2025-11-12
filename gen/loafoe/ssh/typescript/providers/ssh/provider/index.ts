// https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshProviderConfig {
  /**
  * File to write debugging info to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs#debug_log SshProvider#debug_log}
  */
  readonly debugLog?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs#alias SshProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs ssh}
*/
export class SshProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ssh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SshProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SshProvider to import
  * @param importFromId The id of the existing SshProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SshProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ssh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/loafoe/ssh/2.7.0/docs ssh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SshProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ssh',
      terraformGeneratorMetadata: {
        providerName: 'ssh',
        providerVersion: '2.7.0',
        providerVersionConstraint: '2.7.0'
      },
      terraformProviderSource: 'loafoe/ssh'
    });
    this._debugLog = config.debugLog;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_log - computed: false, optional: true, required: false
  private _debugLog?: string; 
  public get debugLog() {
    return this._debugLog;
  }
  public set debugLog(value: string | undefined) {
    this._debugLog = value;
  }
  public resetDebugLog() {
    this._debugLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLogInput() {
    return this._debugLog;
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
      debug_log: cdktf.stringToTerraform(this._debugLog),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug_log: {
        value: cdktf.stringToHclTerraform(this._debugLog),
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
