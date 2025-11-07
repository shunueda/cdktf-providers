// https://registry.terraform.io/providers/invidian/gpg/0.3.1/docs/resources/encrypted_message
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EncryptedMessageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/invidian/gpg/0.3.1/docs/resources/encrypted_message#content EncryptedMessage#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/invidian/gpg/0.3.1/docs/resources/encrypted_message#id EncryptedMessage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/invidian/gpg/0.3.1/docs/resources/encrypted_message#public_keys EncryptedMessage#public_keys}
  */
  readonly publicKeys: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/invidian/gpg/0.3.1/docs/resources/encrypted_message gpg_encrypted_message}
*/
export class EncryptedMessage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gpg_encrypted_message";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EncryptedMessage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EncryptedMessage to import
  * @param importFromId The id of the existing EncryptedMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/invidian/gpg/0.3.1/docs/resources/encrypted_message#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EncryptedMessage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gpg_encrypted_message", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/invidian/gpg/0.3.1/docs/resources/encrypted_message gpg_encrypted_message} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EncryptedMessageConfig
  */
  public constructor(scope: Construct, id: string, config: EncryptedMessageConfig) {
    super(scope, id, {
      terraformResourceType: 'gpg_encrypted_message',
      terraformGeneratorMetadata: {
        providerName: 'gpg',
        providerVersion: '0.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._id = config.id;
    this._publicKeys = config.publicKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // public_keys - computed: false, optional: false, required: true
  private _publicKeys?: string[]; 
  public get publicKeys() {
    return this.getListAttribute('public_keys');
  }
  public set publicKeys(value: string[]) {
    this._publicKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      id: cdktf.stringToTerraform(this._id),
      public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicKeys),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
      public_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
