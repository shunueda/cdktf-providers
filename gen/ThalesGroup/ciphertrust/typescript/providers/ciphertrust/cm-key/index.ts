// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cm_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Algorithm of the key. Options: AES, EC and RSA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cm_key#algorithm CmKey#algorithm}
  */
  readonly algorithm: string;
  /**
  * Curve for an EC key. Options: secp224k1, secp224r1, secp256k1, secp384r1, secp521r1, prime256v1, brainpoolP224r1, brainpoolP224t1, brainpoolP256r1, brainpoolP256t1, brainpoolP384r1, brainpoolP384t1, brainpoolP512r1, brainpoolP512t1 and curve25519. Default is secp384r1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cm_key#curve CmKey#curve}
  */
  readonly curve?: string;
  /**
  * Required for RSA keys. Optional for AES keys. Defaults to 256 for AES keys. Options are: 128, 192, 256 for AES keys and 1024, 2048, 3072, 4096 for RSA keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cm_key#key_size CmKey#key_size}
  */
  readonly keySize?: number;
  /**
  * (Updateable) Name of the key. If the value of this parameter is changed, the key will be destroyed and a new key created. The key must already be deletable for a name change to be successful. Either 'undeletable' must already be false, or if 'undeletable' is true, 'remove_from_state_on_destroy' must already be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cm_key#name CmKey#name}
  */
  readonly name: string;
  /**
  * (Updateable) This parameter only applies to keys that are 'undeleteable'. If this parameter is true the key will be removed from terraform state during the terraform destroy process. It can not be deleted from CipherTrust Manager while 'undeleteable' is true. Default is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cm_key#remove_from_state_on_destroy CmKey#remove_from_state_on_destroy}
  */
  readonly removeFromStateOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Parameter to indicate if CM key is undeletable. If 'remove_from_state_on_destroy' is false 'undeleteable' must first be set to 'false' before this key and any linked keys can be destroyed. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cm_key#undeletable CmKey#undeletable}
  */
  readonly undeletable?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Parameter to indicate if CM key is unexportable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cm_key#unexportable CmKey#unexportable}
  */
  readonly unexportable?: boolean | cdktf.IResolvable;
  /**
  * Cryptographic usage mask. Add the usage masks to allow certain usages. Sign (1), Verify (2), Encrypt (4), Decrypt (8), Wrap Key (16), Unwrap Key (32), Export (64), MAC Generate (128), MAC Verify (256), Derive Key (512), Content Commitment (1024), Key Agreement (2048), Certificate Sign (4096), CRL Sign (8192), Generate Cryptogram (16384), Validate Cryptogram (32768), Translate Encrypt (65536), Translate Decrypt (131072), Translate Wrap (262144), Translate Unwrap (524288), FPE Encrypt (1048576), FPE Decrypt (2097152). Add the usage mask values to allow the usages. To set all usage mask bits, use 4194303. Equivalent usageMask values for deprecated usages 'fpe' (FPE Encrypt + FPE Decrypt = 3145728), 'blob' (Encrypt + Decrypt = 12), 'hmac' (MAC Generate + MAC Verify = 384), 'encrypt' (Encrypt + Decrypt = 12), 'sign' (Sign + Verify = 3), 'any' (4194303 - all usage masks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cm_key#usage_mask CmKey#usage_mask}
  */
  readonly usageMask?: number;
}
export interface CmKeyLinkedKeys {
}

export function cmKeyLinkedKeysToTerraform(struct?: CmKeyLinkedKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cmKeyLinkedKeysToHclTerraform(struct?: CmKeyLinkedKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CmKeyLinkedKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmKeyLinkedKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmKeyLinkedKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export class CmKeyLinkedKeysList extends cdktf.ComplexList {

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
  public get(index: number): CmKeyLinkedKeysOutputReference {
    return new CmKeyLinkedKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cm_key ciphertrust_cm_key}
*/
export class CmKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_cm_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmKey to import
  * @param importFromId The id of the existing CmKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cm_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_cm_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cm_key ciphertrust_cm_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmKeyConfig
  */
  public constructor(scope: Construct, id: string, config: CmKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_cm_key',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._curve = config.curve;
    this._keySize = config.keySize;
    this._name = config.name;
    this._removeFromStateOnDestroy = config.removeFromStateOnDestroy;
    this._undeletable = config.undeletable;
    this._unexportable = config.unexportable;
    this._usageMask = config.usageMask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // curve - computed: false, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // linked_keys - computed: true, optional: false, required: false
  private _linkedKeys = new CmKeyLinkedKeysList(this, "linked_keys", true);
  public get linkedKeys() {
    return this._linkedKeys;
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // remove_from_state_on_destroy - computed: false, optional: true, required: false
  private _removeFromStateOnDestroy?: boolean | cdktf.IResolvable; 
  public get removeFromStateOnDestroy() {
    return this.getBooleanAttribute('remove_from_state_on_destroy');
  }
  public set removeFromStateOnDestroy(value: boolean | cdktf.IResolvable) {
    this._removeFromStateOnDestroy = value;
  }
  public resetRemoveFromStateOnDestroy() {
    this._removeFromStateOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFromStateOnDestroyInput() {
    return this._removeFromStateOnDestroy;
  }

  // undeletable - computed: false, optional: true, required: false
  private _undeletable?: boolean | cdktf.IResolvable; 
  public get undeletable() {
    return this.getBooleanAttribute('undeletable');
  }
  public set undeletable(value: boolean | cdktf.IResolvable) {
    this._undeletable = value;
  }
  public resetUndeletable() {
    this._undeletable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undeletableInput() {
    return this._undeletable;
  }

  // unexportable - computed: false, optional: true, required: false
  private _unexportable?: boolean | cdktf.IResolvable; 
  public get unexportable() {
    return this.getBooleanAttribute('unexportable');
  }
  public set unexportable(value: boolean | cdktf.IResolvable) {
    this._unexportable = value;
  }
  public resetUnexportable() {
    this._unexportable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unexportableInput() {
    return this._unexportable;
  }

  // usage_mask - computed: false, optional: true, required: false
  private _usageMask?: number; 
  public get usageMask() {
    return this.getNumberAttribute('usage_mask');
  }
  public set usageMask(value: number) {
    this._usageMask = value;
  }
  public resetUsageMask() {
    this._usageMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageMaskInput() {
    return this._usageMask;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      curve: cdktf.stringToTerraform(this._curve),
      key_size: cdktf.numberToTerraform(this._keySize),
      name: cdktf.stringToTerraform(this._name),
      remove_from_state_on_destroy: cdktf.booleanToTerraform(this._removeFromStateOnDestroy),
      undeletable: cdktf.booleanToTerraform(this._undeletable),
      unexportable: cdktf.booleanToTerraform(this._unexportable),
      usage_mask: cdktf.numberToTerraform(this._usageMask),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      curve: {
        value: cdktf.stringToHclTerraform(this._curve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
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
      remove_from_state_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._removeFromStateOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      undeletable: {
        value: cdktf.booleanToHclTerraform(this._undeletable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unexportable: {
        value: cdktf.booleanToHclTerraform(this._unexportable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      usage_mask: {
        value: cdktf.numberToHclTerraform(this._usageMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
