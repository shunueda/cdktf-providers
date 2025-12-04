// https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/hash_hmac_sha256
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncHashHmacSha256Config extends cdktf.TerraformMetaArguments {
  /**
  * The string to generate the SHA-2/256-bit HMAC hash for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/hash_hmac_sha256#input DataCorefuncHashHmacSha256#input}
  */
  readonly input: string;
  /**
  * A secret value to provide additional entropy in the calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/hash_hmac_sha256#key DataCorefuncHashHmacSha256#key}
  */
  readonly key: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/hash_hmac_sha256 corefunc_hash_hmac_sha256}
*/
export class DataCorefuncHashHmacSha256 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_hash_hmac_sha256";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncHashHmacSha256 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncHashHmacSha256 to import
  * @param importFromId The id of the existing DataCorefuncHashHmacSha256 that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/hash_hmac_sha256#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncHashHmacSha256 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_hash_hmac_sha256", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/hash_hmac_sha256 corefunc_hash_hmac_sha256} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncHashHmacSha256Config
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncHashHmacSha256Config) {
    super(scope, id, {
      terraformResourceType: 'corefunc_hash_hmac_sha256',
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
    this._key = config.key;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
      key: cdktf.stringToTerraform(this._key),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
