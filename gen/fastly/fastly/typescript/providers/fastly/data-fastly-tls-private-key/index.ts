// https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_private_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFastlyTlsPrivateKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timestamp (GMT) when the private key was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_private_key#created_at DataFastlyTlsPrivateKey#created_at}
  */
  readonly createdAt?: string;
  /**
  * Fastly private key ID. Conflicts with all the other filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_private_key#id DataFastlyTlsPrivateKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The key length used to generate the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_private_key#key_length DataFastlyTlsPrivateKey#key_length}
  */
  readonly keyLength?: number;
  /**
  * The algorithm used to generate the private key. Must be RSA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_private_key#key_type DataFastlyTlsPrivateKey#key_type}
  */
  readonly keyType?: string;
  /**
  * The human-readable name assigned to the private key when uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_private_key#name DataFastlyTlsPrivateKey#name}
  */
  readonly name?: string;
  /**
  * A hash of the associated public key, useful for safely identifying it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_private_key#public_key_sha1 DataFastlyTlsPrivateKey#public_key_sha1}
  */
  readonly publicKeySha1?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_private_key fastly_tls_private_key}
*/
export class DataFastlyTlsPrivateKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_tls_private_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFastlyTlsPrivateKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFastlyTlsPrivateKey to import
  * @param importFromId The id of the existing DataFastlyTlsPrivateKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_private_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFastlyTlsPrivateKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_tls_private_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_private_key fastly_tls_private_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFastlyTlsPrivateKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFastlyTlsPrivateKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fastly_tls_private_key',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.4.0',
        providerVersionConstraint: '8.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._id = config.id;
    this._keyLength = config.keyLength;
    this._keyType = config.keyType;
    this._name = config.name;
    this._publicKeySha1 = config.publicKeySha1;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // key_length - computed: true, optional: true, required: false
  private _keyLength?: number; 
  public get keyLength() {
    return this.getNumberAttribute('key_length');
  }
  public set keyLength(value: number) {
    this._keyLength = value;
  }
  public resetKeyLength() {
    this._keyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLengthInput() {
    return this._keyLength;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // public_key_sha1 - computed: true, optional: true, required: false
  private _publicKeySha1?: string; 
  public get publicKeySha1() {
    return this.getStringAttribute('public_key_sha1');
  }
  public set publicKeySha1(value: string) {
    this._publicKeySha1 = value;
  }
  public resetPublicKeySha1() {
    this._publicKeySha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeySha1Input() {
    return this._publicKeySha1;
  }

  // replace - computed: true, optional: false, required: false
  public get replace() {
    return this.getBooleanAttribute('replace');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.stringToTerraform(this._createdAt),
      id: cdktf.stringToTerraform(this._id),
      key_length: cdktf.numberToTerraform(this._keyLength),
      key_type: cdktf.stringToTerraform(this._keyType),
      name: cdktf.stringToTerraform(this._name),
      public_key_sha1: cdktf.stringToTerraform(this._publicKeySha1),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
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
      key_length: {
        value: cdktf.numberToHclTerraform(this._keyLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key_sha1: {
        value: cdktf.stringToHclTerraform(this._publicKeySha1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
