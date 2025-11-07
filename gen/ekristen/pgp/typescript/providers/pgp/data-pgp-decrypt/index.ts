// https://registry.terraform.io/providers/ekristen/pgp/0.2.4/docs/data-sources/decrypt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPgpDecryptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ekristen/pgp/0.2.4/docs/data-sources/decrypt#ciphertext DataPgpDecrypt#ciphertext}
  */
  readonly ciphertext: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ekristen/pgp/0.2.4/docs/data-sources/decrypt#ciphertext_encoding DataPgpDecrypt#ciphertext_encoding}
  */
  readonly ciphertextEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ekristen/pgp/0.2.4/docs/data-sources/decrypt#id DataPgpDecrypt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ekristen/pgp/0.2.4/docs/data-sources/decrypt#private_key DataPgpDecrypt#private_key}
  */
  readonly privateKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ekristen/pgp/0.2.4/docs/data-sources/decrypt pgp_decrypt}
*/
export class DataPgpDecrypt extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pgp_decrypt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPgpDecrypt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPgpDecrypt to import
  * @param importFromId The id of the existing DataPgpDecrypt that should be imported. Refer to the {@link https://registry.terraform.io/providers/ekristen/pgp/0.2.4/docs/data-sources/decrypt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPgpDecrypt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pgp_decrypt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ekristen/pgp/0.2.4/docs/data-sources/decrypt pgp_decrypt} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPgpDecryptConfig
  */
  public constructor(scope: Construct, id: string, config: DataPgpDecryptConfig) {
    super(scope, id, {
      terraformResourceType: 'pgp_decrypt',
      terraformGeneratorMetadata: {
        providerName: 'pgp',
        providerVersion: '0.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ciphertext = config.ciphertext;
    this._ciphertextEncoding = config.ciphertextEncoding;
    this._id = config.id;
    this._privateKey = config.privateKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ciphertext - computed: false, optional: false, required: true
  private _ciphertext?: string; 
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }
  public set ciphertext(value: string) {
    this._ciphertext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphertextInput() {
    return this._ciphertext;
  }

  // ciphertext_encoding - computed: false, optional: true, required: false
  private _ciphertextEncoding?: string; 
  public get ciphertextEncoding() {
    return this.getStringAttribute('ciphertext_encoding');
  }
  public set ciphertextEncoding(value: string) {
    this._ciphertextEncoding = value;
  }
  public resetCiphertextEncoding() {
    this._ciphertextEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphertextEncodingInput() {
    return this._ciphertextEncoding;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // plaintext - computed: true, optional: false, required: false
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ciphertext: cdktf.stringToTerraform(this._ciphertext),
      ciphertext_encoding: cdktf.stringToTerraform(this._ciphertextEncoding),
      id: cdktf.stringToTerraform(this._id),
      private_key: cdktf.stringToTerraform(this._privateKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ciphertext: {
        value: cdktf.stringToHclTerraform(this._ciphertext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciphertext_encoding: {
        value: cdktf.stringToHclTerraform(this._ciphertextEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
