// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/key_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/key_pair#id KeyPair#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Description of key pair. The length should be less than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/key_pair#key_description KeyPair#key_description}
  */
  readonly keyDescription?: string;
  /**
  * Key pair name. Up to 32 characters in length are supported, containing letters, digits and special character -_. The names cannot be duplicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/key_pair#key_name KeyPair#key_name}
  */
  readonly keyName: string;
  /**
  * Public SSH keys in OpenSSH format. Up to 5 public keys are allowed, separated by pressing ENTER key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/key_pair#public_key KeyPair#public_key}
  */
  readonly publicKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/key_pair zenlayercloud_key_pair}
*/
export class KeyPair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_key_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyPair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyPair to import
  * @param importFromId The id of the existing KeyPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/key_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyPair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_key_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/key_pair zenlayercloud_key_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyPairConfig
  */
  public constructor(scope: Construct, id: string, config: KeyPairConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_key_pair',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.10',
        providerVersionConstraint: '0.2.10'
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
    this._keyDescription = config.keyDescription;
    this._keyName = config.keyName;
    this._publicKey = config.publicKey;
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

  // key_description - computed: false, optional: true, required: false
  private _keyDescription?: string; 
  public get keyDescription() {
    return this.getStringAttribute('key_description');
  }
  public set keyDescription(value: string) {
    this._keyDescription = value;
  }
  public resetKeyDescription() {
    this._keyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDescriptionInput() {
    return this._keyDescription;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_description: cdktf.stringToTerraform(this._keyDescription),
      key_name: cdktf.stringToTerraform(this._keyName),
      public_key: cdktf.stringToTerraform(this._publicKey),
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
      key_description: {
        value: cdktf.stringToHclTerraform(this._keyDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
