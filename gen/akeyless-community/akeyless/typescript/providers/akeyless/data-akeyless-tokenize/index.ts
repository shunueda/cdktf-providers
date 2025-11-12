// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/tokenize
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkeylessTokenizeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/tokenize#id DataAkeylessTokenize#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Data to be encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/tokenize#plaintext DataAkeylessTokenize#plaintext}
  */
  readonly plaintext: string;
  /**
  * The name of the tokenizer to use in the encryption process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/tokenize#tokenizer_name DataAkeylessTokenize#tokenizer_name}
  */
  readonly tokenizerName: string;
  /**
  * Base64 encoded tweak for vaultless encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/tokenize#tweak DataAkeylessTokenize#tweak}
  */
  readonly tweak?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/tokenize akeyless_tokenize}
*/
export class DataAkeylessTokenize extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_tokenize";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkeylessTokenize resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkeylessTokenize to import
  * @param importFromId The id of the existing DataAkeylessTokenize that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/tokenize#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkeylessTokenize to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_tokenize", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/tokenize akeyless_tokenize} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkeylessTokenizeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkeylessTokenizeConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_tokenize',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._plaintext = config.plaintext;
    this._tokenizerName = config.tokenizerName;
    this._tweak = config.tweak;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // plaintext - computed: false, optional: false, required: true
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // tokenizer_name - computed: false, optional: false, required: true
  private _tokenizerName?: string; 
  public get tokenizerName() {
    return this.getStringAttribute('tokenizer_name');
  }
  public set tokenizerName(value: string) {
    this._tokenizerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenizerNameInput() {
    return this._tokenizerName;
  }

  // tweak - computed: true, optional: true, required: false
  private _tweak?: string; 
  public get tweak() {
    return this.getStringAttribute('tweak');
  }
  public set tweak(value: string) {
    this._tweak = value;
  }
  public resetTweak() {
    this._tweak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tweakInput() {
    return this._tweak;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      plaintext: cdktf.stringToTerraform(this._plaintext),
      tokenizer_name: cdktf.stringToTerraform(this._tokenizerName),
      tweak: cdktf.stringToTerraform(this._tweak),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plaintext: {
        value: cdktf.stringToHclTerraform(this._plaintext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tokenizer_name: {
        value: cdktf.stringToHclTerraform(this._tokenizerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tweak: {
        value: cdktf.stringToHclTerraform(this._tweak),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
