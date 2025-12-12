// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/key_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/key_pair#id KeyPair#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/key_pair#key_file KeyPair#key_file}
  */
  readonly keyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/key_pair#key_name KeyPair#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/key_pair#key_name_prefix KeyPair#key_name_prefix}
  */
  readonly keyNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/key_pair#key_pair_name KeyPair#key_pair_name}
  */
  readonly keyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/key_pair#public_key KeyPair#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/key_pair#tags KeyPair#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/key_pair alibabacloudstack_key_pair}
*/
export class KeyPair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_key_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyPair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyPair to import
  * @param importFromId The id of the existing KeyPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/key_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyPair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_key_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/key_pair alibabacloudstack_key_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyPairConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KeyPairConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_key_pair',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._keyFile = config.keyFile;
    this._keyName = config.keyName;
    this._keyNamePrefix = config.keyNamePrefix;
    this._keyPairName = config.keyPairName;
    this._publicKey = config.publicKey;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // finger_print - computed: true, optional: false, required: false
  public get fingerPrint() {
    return this.getStringAttribute('finger_print');
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

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_name_prefix - computed: false, optional: true, required: false
  private _keyNamePrefix?: string; 
  public get keyNamePrefix() {
    return this.getStringAttribute('key_name_prefix');
  }
  public set keyNamePrefix(value: string) {
    this._keyNamePrefix = value;
  }
  public resetKeyNamePrefix() {
    this._keyNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNamePrefixInput() {
    return this._keyNamePrefix;
  }

  // key_pair_name - computed: true, optional: true, required: false
  private _keyPairName?: string; 
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }
  public set keyPairName(value: string) {
    this._keyPairName = value;
  }
  public resetKeyPairName() {
    this._keyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairNameInput() {
    return this._keyPairName;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_file: cdktf.stringToTerraform(this._keyFile),
      key_name: cdktf.stringToTerraform(this._keyName),
      key_name_prefix: cdktf.stringToTerraform(this._keyNamePrefix),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      public_key: cdktf.stringToTerraform(this._publicKey),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      key_file: {
        value: cdktf.stringToHclTerraform(this._keyFile),
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
      key_name_prefix: {
        value: cdktf.stringToHclTerraform(this._keyNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair_name: {
        value: cdktf.stringToHclTerraform(this._keyPairName),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
