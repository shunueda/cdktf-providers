// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsEncryptedDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#associated_data KmsEncryptedData#associated_data}
  */
  readonly associatedData?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#crypto_endpoint KmsEncryptedData#crypto_endpoint}
  */
  readonly cryptoEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#encryption_algorithm KmsEncryptedData#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#id KmsEncryptedData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#key_id KmsEncryptedData#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#key_version_id KmsEncryptedData#key_version_id}
  */
  readonly keyVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#logging_context KmsEncryptedData#logging_context}
  */
  readonly loggingContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#plaintext KmsEncryptedData#plaintext}
  */
  readonly plaintext: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#timeouts KmsEncryptedData#timeouts}
  */
  readonly timeouts?: KmsEncryptedDataTimeouts;
}
export interface KmsEncryptedDataTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#create KmsEncryptedData#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#delete KmsEncryptedData#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#update KmsEncryptedData#update}
  */
  readonly update?: string;
}

export function kmsEncryptedDataTimeoutsToTerraform(struct?: KmsEncryptedDataTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kmsEncryptedDataTimeoutsToHclTerraform(struct?: KmsEncryptedDataTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsEncryptedDataTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KmsEncryptedDataTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsEncryptedDataTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data oci_kms_encrypted_data}
*/
export class KmsEncryptedData extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_kms_encrypted_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsEncryptedData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsEncryptedData to import
  * @param importFromId The id of the existing KmsEncryptedData that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsEncryptedData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_kms_encrypted_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/kms_encrypted_data oci_kms_encrypted_data} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsEncryptedDataConfig
  */
  public constructor(scope: Construct, id: string, config: KmsEncryptedDataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_encrypted_data',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._encryptionAlgorithm = config.encryptionAlgorithm;
    this._id = config.id;
    this._keyId = config.keyId;
    this._keyVersionId = config.keyVersionId;
    this._loggingContext = config.loggingContext;
    this._plaintext = config.plaintext;
    this._timeouts.internalValue = config.timeouts;
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

  // encryption_algorithm - computed: true, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
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

  // key_version_id - computed: true, optional: true, required: false
  private _keyVersionId?: string; 
  public get keyVersionId() {
    return this.getStringAttribute('key_version_id');
  }
  public set keyVersionId(value: string) {
    this._keyVersionId = value;
  }
  public resetKeyVersionId() {
    this._keyVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionIdInput() {
    return this._keyVersionId;
  }

  // logging_context - computed: false, optional: true, required: false
  private _loggingContext?: { [key: string]: string }; 
  public get loggingContext() {
    return this.getStringMapAttribute('logging_context');
  }
  public set loggingContext(value: { [key: string]: string }) {
    this._loggingContext = value;
  }
  public resetLoggingContext() {
    this._loggingContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingContextInput() {
    return this._loggingContext;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsEncryptedDataTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsEncryptedDataTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_data: cdktf.hashMapper(cdktf.stringToTerraform)(this._associatedData),
      crypto_endpoint: cdktf.stringToTerraform(this._cryptoEndpoint),
      encryption_algorithm: cdktf.stringToTerraform(this._encryptionAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      key_version_id: cdktf.stringToTerraform(this._keyVersionId),
      logging_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._loggingContext),
      plaintext: cdktf.stringToTerraform(this._plaintext),
      timeouts: kmsEncryptedDataTimeoutsToTerraform(this._timeouts.internalValue),
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
      encryption_algorithm: {
        value: cdktf.stringToHclTerraform(this._encryptionAlgorithm),
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
      key_version_id: {
        value: cdktf.stringToHclTerraform(this._keyVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._loggingContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      plaintext: {
        value: cdktf.stringToHclTerraform(this._plaintext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: kmsEncryptedDataTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KmsEncryptedDataTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
