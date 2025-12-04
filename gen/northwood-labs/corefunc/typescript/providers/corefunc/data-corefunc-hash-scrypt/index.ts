// https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/hash_scrypt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncHashScryptConfig extends cdktf.TerraformMetaArguments {
  /**
  * The string to generate the Scrypt hash for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/hash_scrypt#input DataCorefuncHashScrypt#input}
  */
  readonly input: string;
  /**
  * A random value to provide additional entropy in the calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/hash_scrypt#salt DataCorefuncHashScrypt#salt}
  */
  readonly salt: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/hash_scrypt corefunc_hash_scrypt}
*/
export class DataCorefuncHashScrypt extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_hash_scrypt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncHashScrypt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncHashScrypt to import
  * @param importFromId The id of the existing DataCorefuncHashScrypt that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/hash_scrypt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncHashScrypt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_hash_scrypt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/hash_scrypt corefunc_hash_scrypt} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncHashScryptConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncHashScryptConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_hash_scrypt',
      terraformGeneratorMetadata: {
        providerName: 'corefunc',
        providerVersion: '2.2.1',
        providerVersionConstraint: '2.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._input = config.input;
    this._salt = config.salt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // input - computed: false, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // salt - computed: false, optional: false, required: true
  private _salt?: string; 
  public get salt() {
    return this.getStringAttribute('salt');
  }
  public set salt(value: string) {
    this._salt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saltInput() {
    return this._salt;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      input: cdktf.stringToTerraform(this._input),
      salt: cdktf.stringToTerraform(this._salt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      input: {
        value: cdktf.stringToHclTerraform(this._input),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      salt: {
        value: cdktf.stringToHclTerraform(this._salt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
