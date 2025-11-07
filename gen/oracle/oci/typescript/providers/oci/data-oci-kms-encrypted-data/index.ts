// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/kms_encrypted_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciKmsEncryptedDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/kms_encrypted_data#associated_data DataOciKmsEncryptedData#associated_data}
  */
  readonly associatedData?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/kms_encrypted_data#crypto_endpoint DataOciKmsEncryptedData#crypto_endpoint}
  */
  readonly cryptoEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/kms_encrypted_data#id DataOciKmsEncryptedData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/kms_encrypted_data#key_id DataOciKmsEncryptedData#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/kms_encrypted_data#plaintext DataOciKmsEncryptedData#plaintext}
  */
  readonly plaintext: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/kms_encrypted_data oci_kms_encrypted_data}
*/
export class DataOciKmsEncryptedData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_kms_encrypted_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciKmsEncryptedData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciKmsEncryptedData to import
  * @param importFromId The id of the existing DataOciKmsEncryptedData that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/kms_encrypted_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciKmsEncryptedData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_kms_encrypted_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/kms_encrypted_data oci_kms_encrypted_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciKmsEncryptedDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciKmsEncryptedDataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_encrypted_data',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedData = config.associatedData;
    this._cryptoEndpoint = config.cryptoEndpoint;
    this._id = config.id;
    this._keyId = config.keyId;
    this._plaintext = config.plaintext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_data - computed: false, optional: true, required: false
  private _associatedData?: { [key: string]: string }; 
  public get associatedData() {
    return this.getStringMapAttribute('associated_data');
  }
  public set associatedData(value: { [key: string]: string }) {
    this._associatedData = value;
  }
  public resetAssociatedData() {
    this._associatedData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedDataInput() {
    return this._associatedData;
  }

  // ciphertext - computed: true, optional: false, required: false
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }

  // crypto_endpoint - computed: false, optional: false, required: true
  private _cryptoEndpoint?: string; 
  public get cryptoEndpoint() {
    return this.getStringAttribute('crypto_endpoint');
  }
  public set cryptoEndpoint(value: string) {
    this._cryptoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoEndpointInput() {
    return this._cryptoEndpoint;
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
      associated_data: cdktf.hashMapper(cdktf.stringToTerraform)(this._associatedData),
      crypto_endpoint: cdktf.stringToTerraform(this._cryptoEndpoint),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      plaintext: cdktf.stringToTerraform(this._plaintext),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._associatedData),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      crypto_endpoint: {
        value: cdktf.stringToHclTerraform(this._cryptoEndpoint),
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
