// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_secret_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultCipherSecretKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The algorithm name used to produce this cipher, e.g. AES/CBC/PKCS5Padding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_secret_key#cipher_transformation_name DefaultCipherSecretKey#cipher_transformation_name}
  */
  readonly cipherTransformationName?: string;
  /**
  * The initialization vector length of the cipher in bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_secret_key#initialization_vector_length_bits DefaultCipherSecretKey#initialization_vector_length_bits}
  */
  readonly initializationVectorLengthBits?: number;
  /**
  * If the key is compromised, an administrator may set this flag to immediately trigger the creation of a new secret key. After the new key is generated, the value of this property will be reset to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_secret_key#is_compromised DefaultCipherSecretKey#is_compromised}
  */
  readonly isCompromised?: boolean | cdktf.IResolvable;
  /**
  * The unique system-generated identifier for the Secret Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_secret_key#key_id DefaultCipherSecretKey#key_id}
  */
  readonly keyId?: string;
  /**
  * The length of the key in bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_secret_key#key_length_bits DefaultCipherSecretKey#key_length_bits}
  */
  readonly keyLengthBits?: number;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_secret_key#name DefaultCipherSecretKey#name}
  */
  readonly name: string;
  /**
  * Name of the parent Server Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_secret_key#server_instance_name DefaultCipherSecretKey#server_instance_name}
  */
  readonly serverInstanceName: string;
  /**
  * The symmetric key that is used for both encryption of plain text and decryption of cipher text. This stores the secret key for each server instance encrypted with that server's inter-server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_secret_key#symmetric_key DefaultCipherSecretKey#symmetric_key}
  */
  readonly symmetricKey?: string[];
}
export interface DefaultCipherSecretKeyRequiredActions {
}

export function defaultCipherSecretKeyRequiredActionsToTerraform(struct?: DefaultCipherSecretKeyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultCipherSecretKeyRequiredActionsToHclTerraform(struct?: DefaultCipherSecretKeyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultCipherSecretKeyRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultCipherSecretKeyRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCipherSecretKeyRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultCipherSecretKeyRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DefaultCipherSecretKeyRequiredActionsOutputReference {
    return new DefaultCipherSecretKeyRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_secret_key pingdirectory_default_cipher_secret_key}
*/
export class DefaultCipherSecretKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_cipher_secret_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultCipherSecretKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultCipherSecretKey to import
  * @param importFromId The id of the existing DefaultCipherSecretKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_secret_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultCipherSecretKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_cipher_secret_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_cipher_secret_key pingdirectory_default_cipher_secret_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultCipherSecretKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultCipherSecretKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_cipher_secret_key',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cipherTransformationName = config.cipherTransformationName;
    this._initializationVectorLengthBits = config.initializationVectorLengthBits;
    this._isCompromised = config.isCompromised;
    this._keyId = config.keyId;
    this._keyLengthBits = config.keyLengthBits;
    this._name = config.name;
    this._serverInstanceName = config.serverInstanceName;
    this._symmetricKey = config.symmetricKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipher_transformation_name - computed: true, optional: true, required: false
  private _cipherTransformationName?: string; 
  public get cipherTransformationName() {
    return this.getStringAttribute('cipher_transformation_name');
  }
  public set cipherTransformationName(value: string) {
    this._cipherTransformationName = value;
  }
  public resetCipherTransformationName() {
    this._cipherTransformationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherTransformationNameInput() {
    return this._cipherTransformationName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initialization_vector_length_bits - computed: true, optional: true, required: false
  private _initializationVectorLengthBits?: number; 
  public get initializationVectorLengthBits() {
    return this.getNumberAttribute('initialization_vector_length_bits');
  }
  public set initializationVectorLengthBits(value: number) {
    this._initializationVectorLengthBits = value;
  }
  public resetInitializationVectorLengthBits() {
    this._initializationVectorLengthBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationVectorLengthBitsInput() {
    return this._initializationVectorLengthBits;
  }

  // is_compromised - computed: true, optional: true, required: false
  private _isCompromised?: boolean | cdktf.IResolvable; 
  public get isCompromised() {
    return this.getBooleanAttribute('is_compromised');
  }
  public set isCompromised(value: boolean | cdktf.IResolvable) {
    this._isCompromised = value;
  }
  public resetIsCompromised() {
    this._isCompromised = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompromisedInput() {
    return this._isCompromised;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_length_bits - computed: true, optional: true, required: false
  private _keyLengthBits?: number; 
  public get keyLengthBits() {
    return this.getNumberAttribute('key_length_bits');
  }
  public set keyLengthBits(value: number) {
    this._keyLengthBits = value;
  }
  public resetKeyLengthBits() {
    this._keyLengthBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLengthBitsInput() {
    return this._keyLengthBits;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultCipherSecretKeyRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // server_instance_name - computed: false, optional: false, required: true
  private _serverInstanceName?: string; 
  public get serverInstanceName() {
    return this.getStringAttribute('server_instance_name');
  }
  public set serverInstanceName(value: string) {
    this._serverInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceNameInput() {
    return this._serverInstanceName;
  }

  // symmetric_key - computed: true, optional: true, required: false
  private _symmetricKey?: string[]; 
  public get symmetricKey() {
    return cdktf.Fn.tolist(this.getListAttribute('symmetric_key'));
  }
  public set symmetricKey(value: string[]) {
    this._symmetricKey = value;
  }
  public resetSymmetricKey() {
    this._symmetricKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmetricKeyInput() {
    return this._symmetricKey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cipher_transformation_name: cdktf.stringToTerraform(this._cipherTransformationName),
      initialization_vector_length_bits: cdktf.numberToTerraform(this._initializationVectorLengthBits),
      is_compromised: cdktf.booleanToTerraform(this._isCompromised),
      key_id: cdktf.stringToTerraform(this._keyId),
      key_length_bits: cdktf.numberToTerraform(this._keyLengthBits),
      name: cdktf.stringToTerraform(this._name),
      server_instance_name: cdktf.stringToTerraform(this._serverInstanceName),
      symmetric_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._symmetricKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cipher_transformation_name: {
        value: cdktf.stringToHclTerraform(this._cipherTransformationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initialization_vector_length_bits: {
        value: cdktf.numberToHclTerraform(this._initializationVectorLengthBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_compromised: {
        value: cdktf.booleanToHclTerraform(this._isCompromised),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_length_bits: {
        value: cdktf.numberToHclTerraform(this._keyLengthBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_instance_name: {
        value: cdktf.stringToHclTerraform(this._serverInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      symmetric_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._symmetricKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
