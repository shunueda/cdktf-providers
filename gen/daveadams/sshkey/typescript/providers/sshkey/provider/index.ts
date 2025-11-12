// https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshkeyProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs#noop SshkeyProvider#noop}
  */
  readonly noop?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs#alias SshkeyProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs sshkey}
*/
export class SshkeyProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sshkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SshkeyProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SshkeyProvider to import
  * @param importFromId The id of the existing SshkeyProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SshkeyProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sshkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs sshkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshkeyProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SshkeyProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sshkey',
      terraformGeneratorMetadata: {
        providerName: 'sshkey',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
      },
      terraformProviderSource: 'daveadams/sshkey'
    });
    this._noop = config.noop;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // noop - computed: false, optional: true, required: false
  private _noop?: string; 
  public get noop() {
    return this._noop;
  }
  public set noop(value: string | undefined) {
    this._noop = value;
  }
  public resetNoop() {
    this._noop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noopInput() {
    return this._noop;
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
      noop: cdktf.stringToTerraform(this._noop),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      noop: {
        value: cdktf.stringToHclTerraform(this._noop),
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
