// https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/encryption_key_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EncryptionKeyManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/encryption_key_manager#id EncryptionKeyManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If this value is changed, the encryption keys will be rotated. A UUID is recommended for the `key_rotation_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/encryption_key_manager#key_rotation_id EncryptionKeyManager#key_rotation_id}
  */
  readonly keyRotationId?: string;
  /**
  * customer_provided_root_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/encryption_key_manager#customer_provided_root_key EncryptionKeyManager#customer_provided_root_key}
  */
  readonly customerProvidedRootKey?: EncryptionKeyManagerCustomerProvidedRootKey;
}
export interface EncryptionKeyManagerEncryptionKeys {
}

export function encryptionKeyManagerEncryptionKeysToTerraform(struct?: EncryptionKeyManagerEncryptionKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function encryptionKeyManagerEncryptionKeysToHclTerraform(struct?: EncryptionKeyManagerEncryptionKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EncryptionKeyManagerEncryptionKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EncryptionKeyManagerEncryptionKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionKeyManagerEncryptionKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // parent_key_id - computed: true, optional: false, required: false
  public get parentKeyId() {
    return this.getStringAttribute('parent_key_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class EncryptionKeyManagerEncryptionKeysList extends cdktf.ComplexList {

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
  public get(index: number): EncryptionKeyManagerEncryptionKeysOutputReference {
    return new EncryptionKeyManagerEncryptionKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EncryptionKeyManagerCustomerProvidedRootKey {
  /**
  * The base64-encoded customer provided root key, wrapped using the `public_wrapping_key`. This can be removed after the wrapped key has been applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/encryption_key_manager#wrapped_key EncryptionKeyManager#wrapped_key}
  */
  readonly wrappedKey?: string;
}

export function encryptionKeyManagerCustomerProvidedRootKeyToTerraform(struct?: EncryptionKeyManagerCustomerProvidedRootKeyOutputReference | EncryptionKeyManagerCustomerProvidedRootKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function encryptionKeyManagerCustomerProvidedRootKeyToHclTerraform(struct?: EncryptionKeyManagerCustomerProvidedRootKeyOutputReference | EncryptionKeyManagerCustomerProvidedRootKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EncryptionKeyManagerCustomerProvidedRootKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptionKeyManagerCustomerProvidedRootKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EncryptionKeyManagerCustomerProvidedRootKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // parent_key_id - computed: true, optional: false, required: false
  public get parentKeyId() {
    return this.getStringAttribute('parent_key_id');
  }

  // public_wrapping_key - computed: true, optional: false, required: false
  public get publicWrappingKey() {
    return this.getStringAttribute('public_wrapping_key');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // wrapped_key - computed: false, optional: true, required: false
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  public resetWrappedKey() {
    this._wrappedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }

  // wrapping_algorithm - computed: true, optional: false, required: false
  public get wrappingAlgorithm() {
    return this.getStringAttribute('wrapping_algorithm');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/encryption_key_manager auth0_encryption_key_manager}
*/
export class EncryptionKeyManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_encryption_key_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EncryptionKeyManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EncryptionKeyManager to import
  * @param importFromId The id of the existing EncryptionKeyManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/encryption_key_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EncryptionKeyManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_encryption_key_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/resources/encryption_key_manager auth0_encryption_key_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EncryptionKeyManagerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EncryptionKeyManagerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0_encryption_key_manager',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.37.0',
        providerVersionConstraint: '1.37.0'
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
    this._keyRotationId = config.keyRotationId;
    this._customerProvidedRootKey.internalValue = config.customerProvidedRootKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encryption_keys - computed: true, optional: false, required: false
  private _encryptionKeys = new EncryptionKeyManagerEncryptionKeysList(this, "encryption_keys", false);
  public get encryptionKeys() {
    return this._encryptionKeys;
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

  // key_rotation_id - computed: false, optional: true, required: false
  private _keyRotationId?: string; 
  public get keyRotationId() {
    return this.getStringAttribute('key_rotation_id');
  }
  public set keyRotationId(value: string) {
    this._keyRotationId = value;
  }
  public resetKeyRotationId() {
    this._keyRotationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRotationIdInput() {
    return this._keyRotationId;
  }

  // customer_provided_root_key - computed: false, optional: true, required: false
  private _customerProvidedRootKey = new EncryptionKeyManagerCustomerProvidedRootKeyOutputReference(this, "customer_provided_root_key");
  public get customerProvidedRootKey() {
    return this._customerProvidedRootKey;
  }
  public putCustomerProvidedRootKey(value: EncryptionKeyManagerCustomerProvidedRootKey) {
    this._customerProvidedRootKey.internalValue = value;
  }
  public resetCustomerProvidedRootKey() {
    this._customerProvidedRootKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerProvidedRootKeyInput() {
    return this._customerProvidedRootKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_rotation_id: cdktf.stringToTerraform(this._keyRotationId),
      customer_provided_root_key: encryptionKeyManagerCustomerProvidedRootKeyToTerraform(this._customerProvidedRootKey.internalValue),
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
      key_rotation_id: {
        value: cdktf.stringToHclTerraform(this._keyRotationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_provided_root_key: {
        value: encryptionKeyManagerCustomerProvidedRootKeyToHclTerraform(this._customerProvidedRootKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EncryptionKeyManagerCustomerProvidedRootKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
