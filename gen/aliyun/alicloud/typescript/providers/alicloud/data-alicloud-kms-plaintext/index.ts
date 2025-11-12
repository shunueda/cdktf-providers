// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/kms_plaintext
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudKmsPlaintextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/kms_plaintext#ciphertext_blob DataAlicloudKmsPlaintext#ciphertext_blob}
  */
  readonly ciphertextBlob: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/kms_plaintext#encryption_context DataAlicloudKmsPlaintext#encryption_context}
  */
  readonly encryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/kms_plaintext#id DataAlicloudKmsPlaintext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/kms_plaintext alicloud_kms_plaintext}
*/
export class DataAlicloudKmsPlaintext extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_kms_plaintext";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudKmsPlaintext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudKmsPlaintext to import
  * @param importFromId The id of the existing DataAlicloudKmsPlaintext that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/kms_plaintext#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudKmsPlaintext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_kms_plaintext", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/kms_plaintext alicloud_kms_plaintext} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudKmsPlaintextConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudKmsPlaintextConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_kms_plaintext',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ciphertextBlob = config.ciphertextBlob;
    this._encryptionContext = config.encryptionContext;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ciphertext_blob - computed: false, optional: false, required: true
  private _ciphertextBlob?: string; 
  public get ciphertextBlob() {
    return this.getStringAttribute('ciphertext_blob');
  }
  public set ciphertextBlob(value: string) {
    this._ciphertextBlob = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphertextBlobInput() {
    return this._ciphertextBlob;
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

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // plaintext - computed: true, optional: false, required: false
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ciphertext_blob: cdktf.stringToTerraform(this._ciphertextBlob),
      encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._encryptionContext),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ciphertext_blob: {
        value: cdktf.stringToHclTerraform(this._ciphertextBlob),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
