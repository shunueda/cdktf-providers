// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/kms_ciphertexts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackKmsCiphertextsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/kms_ciphertexts#encryption_context DataAlibabacloudstackKmsCiphertexts#encryption_context}
  */
  readonly encryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/kms_ciphertexts#id DataAlibabacloudstackKmsCiphertexts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/kms_ciphertexts#key_id DataAlibabacloudstackKmsCiphertexts#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/kms_ciphertexts#plaintext DataAlibabacloudstackKmsCiphertexts#plaintext}
  */
  readonly plaintext: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/kms_ciphertexts alibabacloudstack_kms_ciphertexts}
*/
export class DataAlibabacloudstackKmsCiphertexts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_kms_ciphertexts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackKmsCiphertexts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackKmsCiphertexts to import
  * @param importFromId The id of the existing DataAlibabacloudstackKmsCiphertexts that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/kms_ciphertexts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackKmsCiphertexts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_kms_ciphertexts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/kms_ciphertexts alibabacloudstack_kms_ciphertexts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackKmsCiphertextsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackKmsCiphertextsConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_kms_ciphertexts',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._encryptionContext = config.encryptionContext;
    this._id = config.id;
    this._keyId = config.keyId;
    this._plaintext = config.plaintext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ciphertext_blob - computed: true, optional: false, required: false
  public get ciphertextBlob() {
    return this.getStringAttribute('ciphertext_blob');
  }

  // encryption_context - computed: false, optional: true, required: false
  private _encryptionContext?: { [key: string]: string }; 
  public get encryptionContext() {
    return this.getStringMapAttribute('encryption_context');
  }
  public set encryptionContext(value: { [key: string]: string }) {
    this._encryptionContext = value;
  }
  public resetEncryptionContext() {
    this._encryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContextInput() {
    return this._encryptionContext;
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

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._encryptionContext),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      plaintext: cdktf.stringToTerraform(this._plaintext),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encryption_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._encryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
