// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policy_contract
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationPolicyContractConfig extends cdktf.TerraformMetaArguments {
  /**
  * The persistent, unique ID for the authentication policy contract. It can be any combination of `[a-zA-Z0-9._-]`. This property is system-assigned if not specified. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policy_contract#contract_id AuthenticationPolicyContract#contract_id}
  */
  readonly contractId?: string;
  /**
  * A list of additional attributes as needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policy_contract#extended_attributes AuthenticationPolicyContract#extended_attributes}
  */
  readonly extendedAttributes?: AuthenticationPolicyContractExtendedAttributes[] | cdktf.IResolvable;
  /**
  * The Authentication Policy contract name. Name is unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policy_contract#name AuthenticationPolicyContract#name}
  */
  readonly name: string;
}
export interface AuthenticationPolicyContractCoreAttributes {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policy_contract#name AuthenticationPolicyContract#name}
  */
  readonly name: string;
}

export function authenticationPolicyContractCoreAttributesToTerraform(struct?: AuthenticationPolicyContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function authenticationPolicyContractCoreAttributesToHclTerraform(struct?: AuthenticationPolicyContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationPolicyContractCoreAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationPolicyContractCoreAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationPolicyContractCoreAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
}

export class AuthenticationPolicyContractCoreAttributesList extends cdktf.ComplexList {
  public internalValue? : AuthenticationPolicyContractCoreAttributes[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationPolicyContractCoreAttributesOutputReference {
    return new AuthenticationPolicyContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthenticationPolicyContractExtendedAttributes {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policy_contract#name AuthenticationPolicyContract#name}
  */
  readonly name: string;
}

export function authenticationPolicyContractExtendedAttributesToTerraform(struct?: AuthenticationPolicyContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function authenticationPolicyContractExtendedAttributesToHclTerraform(struct?: AuthenticationPolicyContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationPolicyContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AuthenticationPolicyContractExtendedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationPolicyContractExtendedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
}

export class AuthenticationPolicyContractExtendedAttributesList extends cdktf.ComplexList {
  public internalValue? : AuthenticationPolicyContractExtendedAttributes[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationPolicyContractExtendedAttributesOutputReference {
    return new AuthenticationPolicyContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policy_contract pingfederate_authentication_policy_contract}
*/
export class AuthenticationPolicyContract extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_authentication_policy_contract";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationPolicyContract resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationPolicyContract to import
  * @param importFromId The id of the existing AuthenticationPolicyContract that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policy_contract#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationPolicyContract to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_authentication_policy_contract", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policy_contract pingfederate_authentication_policy_contract} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationPolicyContractConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationPolicyContractConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_authentication_policy_contract',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractId = config.contractId;
    this._extendedAttributes.internalValue = config.extendedAttributes;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contract_id - computed: true, optional: true, required: false
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  public resetContractId() {
    this._contractId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // core_attributes - computed: true, optional: false, required: false
  private _coreAttributes = new AuthenticationPolicyContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }

  // extended_attributes - computed: true, optional: true, required: false
  private _extendedAttributes = new AuthenticationPolicyContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
  public putExtendedAttributes(value: AuthenticationPolicyContractExtendedAttributes[] | cdktf.IResolvable) {
    this._extendedAttributes.internalValue = value;
  }
  public resetExtendedAttributes() {
    this._extendedAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesInput() {
    return this._extendedAttributes.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_id: cdktf.stringToTerraform(this._contractId),
      extended_attributes: cdktf.listMapper(authenticationPolicyContractExtendedAttributesToTerraform, false)(this._extendedAttributes.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_attributes: {
        value: cdktf.listMapperHcl(authenticationPolicyContractExtendedAttributesToHclTerraform, false)(this._extendedAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthenticationPolicyContractExtendedAttributesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
