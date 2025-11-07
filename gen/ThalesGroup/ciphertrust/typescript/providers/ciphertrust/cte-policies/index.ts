// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CtePoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) Description of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#description CtePolicies#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#id CtePolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key combine algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#key_combine_algorithm CtePolicies#key_combine_algorithm}
  */
  readonly keyCombineAlgorithm?: string;
  /**
  * This is the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#name CtePolicies#name}
  */
  readonly name: string;
  /**
  * (Updateable) Never deny
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#never_deny CtePolicies#never_deny}
  */
  readonly neverDeny?: boolean | cdktf.IResolvable;
  /**
  * Permit combine algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#permit_combine_algorithm CtePolicies#permit_combine_algorithm}
  */
  readonly permitCombineAlgorithm?: string;
  /**
  * Policy key version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#policy_key_version CtePolicies#policy_key_version}
  */
  readonly policyKeyVersion?: number;
  /**
  * Policy Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#policy_version CtePolicies#policy_version}
  */
  readonly policyVersion?: number;
  /**
  * (Updateable) Restrict_update flag toggler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#restrict_update CtePolicies#restrict_update}
  */
  readonly restrictUpdate?: boolean | cdktf.IResolvable;
  /**
  * Schema version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#schema_version CtePolicies#schema_version}
  */
  readonly schemaVersion?: number;
  /**
  * Type of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#type CtePolicies#type}
  */
  readonly type: string;
  /**
  * Updated By
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#updated_by CtePolicies#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * data_transform_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#data_transform_rules CtePolicies#data_transform_rules}
  */
  readonly dataTransformRules?: CtePoliciesDataTransformRules[] | cdktf.IResolvable;
  /**
  * idt_key_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#idt_key_rules CtePolicies#idt_key_rules}
  */
  readonly idtKeyRules?: CtePoliciesIdtKeyRules[] | cdktf.IResolvable;
  /**
  * key_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#key_rules CtePolicies#key_rules}
  */
  readonly keyRules?: CtePoliciesKeyRules[] | cdktf.IResolvable;
  /**
  * ldt_key_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#ldt_key_rules CtePolicies#ldt_key_rules}
  */
  readonly ldtKeyRules?: CtePoliciesLdtKeyRules[] | cdktf.IResolvable;
  /**
  * security_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#security_rules CtePolicies#security_rules}
  */
  readonly securityRules?: CtePoliciesSecurityRules[] | cdktf.IResolvable;
}
export interface CtePoliciesDataTransformRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#key_id CtePolicies#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#key_type CtePolicies#key_type}
  */
  readonly keyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#order_number CtePolicies#order_number}
  */
  readonly orderNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#policy_id CtePolicies#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#resource_set_id CtePolicies#resource_set_id}
  */
  readonly resourceSetId?: string;
}

export function ctePoliciesDataTransformRulesToTerraform(struct?: CtePoliciesDataTransformRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    order_number: cdktf.numberToTerraform(struct!.orderNumber),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    resource_set_id: cdktf.stringToTerraform(struct!.resourceSetId),
  }
}


export function ctePoliciesDataTransformRulesToHclTerraform(struct?: CtePoliciesDataTransformRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_number: {
      value: cdktf.numberToHclTerraform(struct!.orderNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_id: {
      value: cdktf.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_set_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CtePoliciesDataTransformRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CtePoliciesDataTransformRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._orderNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderNumber = this._orderNumber;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._resourceSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSetId = this._resourceSetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CtePoliciesDataTransformRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._keyType = undefined;
      this._orderNumber = undefined;
      this._policyId = undefined;
      this._resourceSetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._keyType = value.keyType;
      this._orderNumber = value.orderNumber;
      this._policyId = value.policyId;
      this._resourceSetId = value.resourceSetId;
    }
  }

  // key_id - computed: false, optional: true, required: false
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

  // key_type - computed: false, optional: true, required: false
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

  // order_number - computed: false, optional: true, required: false
  private _orderNumber?: number; 
  public get orderNumber() {
    return this.getNumberAttribute('order_number');
  }
  public set orderNumber(value: number) {
    this._orderNumber = value;
  }
  public resetOrderNumber() {
    this._orderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderNumberInput() {
    return this._orderNumber;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // resource_set_id - computed: false, optional: true, required: false
  private _resourceSetId?: string; 
  public get resourceSetId() {
    return this.getStringAttribute('resource_set_id');
  }
  public set resourceSetId(value: string) {
    this._resourceSetId = value;
  }
  public resetResourceSetId() {
    this._resourceSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetIdInput() {
    return this._resourceSetId;
  }
}

export class CtePoliciesDataTransformRulesList extends cdktf.ComplexList {
  public internalValue? : CtePoliciesDataTransformRules[] | cdktf.IResolvable

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
  public get(index: number): CtePoliciesDataTransformRulesOutputReference {
    return new CtePoliciesDataTransformRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CtePoliciesIdtKeyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#current_key CtePolicies#current_key}
  */
  readonly currentKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#current_key_type CtePolicies#current_key_type}
  */
  readonly currentKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#resource_set_id CtePolicies#resource_set_id}
  */
  readonly resourceSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#transformation_key CtePolicies#transformation_key}
  */
  readonly transformationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#transformation_key_type CtePolicies#transformation_key_type}
  */
  readonly transformationKeyType?: string;
}

export function ctePoliciesIdtKeyRulesToTerraform(struct?: CtePoliciesIdtKeyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_key: cdktf.stringToTerraform(struct!.currentKey),
    current_key_type: cdktf.stringToTerraform(struct!.currentKeyType),
    resource_set_id: cdktf.stringToTerraform(struct!.resourceSetId),
    transformation_key: cdktf.stringToTerraform(struct!.transformationKey),
    transformation_key_type: cdktf.stringToTerraform(struct!.transformationKeyType),
  }
}


export function ctePoliciesIdtKeyRulesToHclTerraform(struct?: CtePoliciesIdtKeyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_key: {
      value: cdktf.stringToHclTerraform(struct!.currentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_key_type: {
      value: cdktf.stringToHclTerraform(struct!.currentKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_set_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_key: {
      value: cdktf.stringToHclTerraform(struct!.transformationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_key_type: {
      value: cdktf.stringToHclTerraform(struct!.transformationKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CtePoliciesIdtKeyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CtePoliciesIdtKeyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKey = this._currentKey;
    }
    if (this._currentKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKeyType = this._currentKeyType;
    }
    if (this._resourceSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSetId = this._resourceSetId;
    }
    if (this._transformationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationKey = this._transformationKey;
    }
    if (this._transformationKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationKeyType = this._transformationKeyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CtePoliciesIdtKeyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentKey = undefined;
      this._currentKeyType = undefined;
      this._resourceSetId = undefined;
      this._transformationKey = undefined;
      this._transformationKeyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentKey = value.currentKey;
      this._currentKeyType = value.currentKeyType;
      this._resourceSetId = value.resourceSetId;
      this._transformationKey = value.transformationKey;
      this._transformationKeyType = value.transformationKeyType;
    }
  }

  // current_key - computed: false, optional: true, required: false
  private _currentKey?: string; 
  public get currentKey() {
    return this.getStringAttribute('current_key');
  }
  public set currentKey(value: string) {
    this._currentKey = value;
  }
  public resetCurrentKey() {
    this._currentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKeyInput() {
    return this._currentKey;
  }

  // current_key_type - computed: false, optional: true, required: false
  private _currentKeyType?: string; 
  public get currentKeyType() {
    return this.getStringAttribute('current_key_type');
  }
  public set currentKeyType(value: string) {
    this._currentKeyType = value;
  }
  public resetCurrentKeyType() {
    this._currentKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKeyTypeInput() {
    return this._currentKeyType;
  }

  // resource_set_id - computed: false, optional: true, required: false
  private _resourceSetId?: string; 
  public get resourceSetId() {
    return this.getStringAttribute('resource_set_id');
  }
  public set resourceSetId(value: string) {
    this._resourceSetId = value;
  }
  public resetResourceSetId() {
    this._resourceSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetIdInput() {
    return this._resourceSetId;
  }

  // transformation_key - computed: false, optional: true, required: false
  private _transformationKey?: string; 
  public get transformationKey() {
    return this.getStringAttribute('transformation_key');
  }
  public set transformationKey(value: string) {
    this._transformationKey = value;
  }
  public resetTransformationKey() {
    this._transformationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationKeyInput() {
    return this._transformationKey;
  }

  // transformation_key_type - computed: false, optional: true, required: false
  private _transformationKeyType?: string; 
  public get transformationKeyType() {
    return this.getStringAttribute('transformation_key_type');
  }
  public set transformationKeyType(value: string) {
    this._transformationKeyType = value;
  }
  public resetTransformationKeyType() {
    this._transformationKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationKeyTypeInput() {
    return this._transformationKeyType;
  }
}

export class CtePoliciesIdtKeyRulesList extends cdktf.ComplexList {
  public internalValue? : CtePoliciesIdtKeyRules[] | cdktf.IResolvable

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
  public get(index: number): CtePoliciesIdtKeyRulesOutputReference {
    return new CtePoliciesIdtKeyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CtePoliciesKeyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#key_id CtePolicies#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#key_type CtePolicies#key_type}
  */
  readonly keyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#order_number CtePolicies#order_number}
  */
  readonly orderNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#policy_id CtePolicies#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#resource_set_id CtePolicies#resource_set_id}
  */
  readonly resourceSetId?: string;
}

export function ctePoliciesKeyRulesToTerraform(struct?: CtePoliciesKeyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    order_number: cdktf.numberToTerraform(struct!.orderNumber),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    resource_set_id: cdktf.stringToTerraform(struct!.resourceSetId),
  }
}


export function ctePoliciesKeyRulesToHclTerraform(struct?: CtePoliciesKeyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_number: {
      value: cdktf.numberToHclTerraform(struct!.orderNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_id: {
      value: cdktf.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_set_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CtePoliciesKeyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CtePoliciesKeyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._orderNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderNumber = this._orderNumber;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._resourceSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSetId = this._resourceSetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CtePoliciesKeyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._keyType = undefined;
      this._orderNumber = undefined;
      this._policyId = undefined;
      this._resourceSetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._keyType = value.keyType;
      this._orderNumber = value.orderNumber;
      this._policyId = value.policyId;
      this._resourceSetId = value.resourceSetId;
    }
  }

  // key_id - computed: false, optional: true, required: false
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

  // key_type - computed: false, optional: true, required: false
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

  // order_number - computed: false, optional: true, required: false
  private _orderNumber?: number; 
  public get orderNumber() {
    return this.getNumberAttribute('order_number');
  }
  public set orderNumber(value: number) {
    this._orderNumber = value;
  }
  public resetOrderNumber() {
    this._orderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderNumberInput() {
    return this._orderNumber;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // resource_set_id - computed: false, optional: true, required: false
  private _resourceSetId?: string; 
  public get resourceSetId() {
    return this.getStringAttribute('resource_set_id');
  }
  public set resourceSetId(value: string) {
    this._resourceSetId = value;
  }
  public resetResourceSetId() {
    this._resourceSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetIdInput() {
    return this._resourceSetId;
  }
}

export class CtePoliciesKeyRulesList extends cdktf.ComplexList {
  public internalValue? : CtePoliciesKeyRules[] | cdktf.IResolvable

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
  public get(index: number): CtePoliciesKeyRulesOutputReference {
    return new CtePoliciesKeyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CtePoliciesLdtKeyRulesCurrentKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#key_id CtePolicies#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#key_type CtePolicies#key_type}
  */
  readonly keyType?: string;
}

export function ctePoliciesLdtKeyRulesCurrentKeyToTerraform(struct?: CtePoliciesLdtKeyRulesCurrentKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}


export function ctePoliciesLdtKeyRulesCurrentKeyToHclTerraform(struct?: CtePoliciesLdtKeyRulesCurrentKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CtePoliciesLdtKeyRulesCurrentKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CtePoliciesLdtKeyRulesCurrentKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CtePoliciesLdtKeyRulesCurrentKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._keyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._keyType = value.keyType;
    }
  }

  // key_id - computed: false, optional: true, required: false
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

  // key_type - computed: false, optional: true, required: false
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
}

export class CtePoliciesLdtKeyRulesCurrentKeyList extends cdktf.ComplexList {
  public internalValue? : CtePoliciesLdtKeyRulesCurrentKey[] | cdktf.IResolvable

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
  public get(index: number): CtePoliciesLdtKeyRulesCurrentKeyOutputReference {
    return new CtePoliciesLdtKeyRulesCurrentKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CtePoliciesLdtKeyRulesTransformationKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#key_id CtePolicies#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#key_type CtePolicies#key_type}
  */
  readonly keyType?: string;
}

export function ctePoliciesLdtKeyRulesTransformationKeyToTerraform(struct?: CtePoliciesLdtKeyRulesTransformationKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}


export function ctePoliciesLdtKeyRulesTransformationKeyToHclTerraform(struct?: CtePoliciesLdtKeyRulesTransformationKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CtePoliciesLdtKeyRulesTransformationKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CtePoliciesLdtKeyRulesTransformationKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CtePoliciesLdtKeyRulesTransformationKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._keyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._keyType = value.keyType;
    }
  }

  // key_id - computed: false, optional: true, required: false
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

  // key_type - computed: false, optional: true, required: false
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
}

export class CtePoliciesLdtKeyRulesTransformationKeyList extends cdktf.ComplexList {
  public internalValue? : CtePoliciesLdtKeyRulesTransformationKey[] | cdktf.IResolvable

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
  public get(index: number): CtePoliciesLdtKeyRulesTransformationKeyOutputReference {
    return new CtePoliciesLdtKeyRulesTransformationKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CtePoliciesLdtKeyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#is_exclusion_rule CtePolicies#is_exclusion_rule}
  */
  readonly isExclusionRule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#order_number CtePolicies#order_number}
  */
  readonly orderNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#resource_set_id CtePolicies#resource_set_id}
  */
  readonly resourceSetId?: string;
  /**
  * current_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#current_key CtePolicies#current_key}
  */
  readonly currentKey?: CtePoliciesLdtKeyRulesCurrentKey[] | cdktf.IResolvable;
  /**
  * transformation_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#transformation_key CtePolicies#transformation_key}
  */
  readonly transformationKey?: CtePoliciesLdtKeyRulesTransformationKey[] | cdktf.IResolvable;
}

export function ctePoliciesLdtKeyRulesToTerraform(struct?: CtePoliciesLdtKeyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_exclusion_rule: cdktf.booleanToTerraform(struct!.isExclusionRule),
    order_number: cdktf.numberToTerraform(struct!.orderNumber),
    resource_set_id: cdktf.stringToTerraform(struct!.resourceSetId),
    current_key: cdktf.listMapper(ctePoliciesLdtKeyRulesCurrentKeyToTerraform, true)(struct!.currentKey),
    transformation_key: cdktf.listMapper(ctePoliciesLdtKeyRulesTransformationKeyToTerraform, true)(struct!.transformationKey),
  }
}


export function ctePoliciesLdtKeyRulesToHclTerraform(struct?: CtePoliciesLdtKeyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_exclusion_rule: {
      value: cdktf.booleanToHclTerraform(struct!.isExclusionRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    order_number: {
      value: cdktf.numberToHclTerraform(struct!.orderNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_set_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_key: {
      value: cdktf.listMapperHcl(ctePoliciesLdtKeyRulesCurrentKeyToHclTerraform, true)(struct!.currentKey),
      isBlock: true,
      type: "list",
      storageClassType: "CtePoliciesLdtKeyRulesCurrentKeyList",
    },
    transformation_key: {
      value: cdktf.listMapperHcl(ctePoliciesLdtKeyRulesTransformationKeyToHclTerraform, true)(struct!.transformationKey),
      isBlock: true,
      type: "list",
      storageClassType: "CtePoliciesLdtKeyRulesTransformationKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CtePoliciesLdtKeyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CtePoliciesLdtKeyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isExclusionRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.isExclusionRule = this._isExclusionRule;
    }
    if (this._orderNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderNumber = this._orderNumber;
    }
    if (this._resourceSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSetId = this._resourceSetId;
    }
    if (this._currentKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKey = this._currentKey?.internalValue;
    }
    if (this._transformationKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationKey = this._transformationKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CtePoliciesLdtKeyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isExclusionRule = undefined;
      this._orderNumber = undefined;
      this._resourceSetId = undefined;
      this._currentKey.internalValue = undefined;
      this._transformationKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isExclusionRule = value.isExclusionRule;
      this._orderNumber = value.orderNumber;
      this._resourceSetId = value.resourceSetId;
      this._currentKey.internalValue = value.currentKey;
      this._transformationKey.internalValue = value.transformationKey;
    }
  }

  // is_exclusion_rule - computed: false, optional: true, required: false
  private _isExclusionRule?: boolean | cdktf.IResolvable; 
  public get isExclusionRule() {
    return this.getBooleanAttribute('is_exclusion_rule');
  }
  public set isExclusionRule(value: boolean | cdktf.IResolvable) {
    this._isExclusionRule = value;
  }
  public resetIsExclusionRule() {
    this._isExclusionRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExclusionRuleInput() {
    return this._isExclusionRule;
  }

  // order_number - computed: false, optional: true, required: false
  private _orderNumber?: number; 
  public get orderNumber() {
    return this.getNumberAttribute('order_number');
  }
  public set orderNumber(value: number) {
    this._orderNumber = value;
  }
  public resetOrderNumber() {
    this._orderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderNumberInput() {
    return this._orderNumber;
  }

  // resource_set_id - computed: false, optional: true, required: false
  private _resourceSetId?: string; 
  public get resourceSetId() {
    return this.getStringAttribute('resource_set_id');
  }
  public set resourceSetId(value: string) {
    this._resourceSetId = value;
  }
  public resetResourceSetId() {
    this._resourceSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetIdInput() {
    return this._resourceSetId;
  }

  // current_key - computed: false, optional: true, required: false
  private _currentKey = new CtePoliciesLdtKeyRulesCurrentKeyList(this, "current_key", false);
  public get currentKey() {
    return this._currentKey;
  }
  public putCurrentKey(value: CtePoliciesLdtKeyRulesCurrentKey[] | cdktf.IResolvable) {
    this._currentKey.internalValue = value;
  }
  public resetCurrentKey() {
    this._currentKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKeyInput() {
    return this._currentKey.internalValue;
  }

  // transformation_key - computed: false, optional: true, required: false
  private _transformationKey = new CtePoliciesLdtKeyRulesTransformationKeyList(this, "transformation_key", false);
  public get transformationKey() {
    return this._transformationKey;
  }
  public putTransformationKey(value: CtePoliciesLdtKeyRulesTransformationKey[] | cdktf.IResolvable) {
    this._transformationKey.internalValue = value;
  }
  public resetTransformationKey() {
    this._transformationKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationKeyInput() {
    return this._transformationKey.internalValue;
  }
}

export class CtePoliciesLdtKeyRulesList extends cdktf.ComplexList {
  public internalValue? : CtePoliciesLdtKeyRules[] | cdktf.IResolvable

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
  public get(index: number): CtePoliciesLdtKeyRulesOutputReference {
    return new CtePoliciesLdtKeyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CtePoliciesSecurityRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#action CtePolicies#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#effect CtePolicies#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#exclude_process_set CtePolicies#exclude_process_set}
  */
  readonly excludeProcessSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#exclude_resource_set CtePolicies#exclude_resource_set}
  */
  readonly excludeResourceSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#exclude_user_set CtePolicies#exclude_user_set}
  */
  readonly excludeUserSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#generation CtePolicies#generation}
  */
  readonly generation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#order_number CtePolicies#order_number}
  */
  readonly orderNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#partial_match CtePolicies#partial_match}
  */
  readonly partialMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#policy_id CtePolicies#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#process_set_id CtePolicies#process_set_id}
  */
  readonly processSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#process_signed CtePolicies#process_signed}
  */
  readonly processSigned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#resource_set_id CtePolicies#resource_set_id}
  */
  readonly resourceSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#user_set_id CtePolicies#user_set_id}
  */
  readonly userSetId?: string;
}

export function ctePoliciesSecurityRulesToTerraform(struct?: CtePoliciesSecurityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    effect: cdktf.stringToTerraform(struct!.effect),
    exclude_process_set: cdktf.booleanToTerraform(struct!.excludeProcessSet),
    exclude_resource_set: cdktf.booleanToTerraform(struct!.excludeResourceSet),
    exclude_user_set: cdktf.booleanToTerraform(struct!.excludeUserSet),
    generation: cdktf.stringToTerraform(struct!.generation),
    order_number: cdktf.numberToTerraform(struct!.orderNumber),
    partial_match: cdktf.booleanToTerraform(struct!.partialMatch),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    process_set_id: cdktf.stringToTerraform(struct!.processSetId),
    process_signed: cdktf.stringToTerraform(struct!.processSigned),
    resource_set_id: cdktf.stringToTerraform(struct!.resourceSetId),
    user_set_id: cdktf.stringToTerraform(struct!.userSetId),
  }
}


export function ctePoliciesSecurityRulesToHclTerraform(struct?: CtePoliciesSecurityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_process_set: {
      value: cdktf.booleanToHclTerraform(struct!.excludeProcessSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_resource_set: {
      value: cdktf.booleanToHclTerraform(struct!.excludeResourceSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_user_set: {
      value: cdktf.booleanToHclTerraform(struct!.excludeUserSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_number: {
      value: cdktf.numberToHclTerraform(struct!.orderNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partial_match: {
      value: cdktf.booleanToHclTerraform(struct!.partialMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_id: {
      value: cdktf.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_set_id: {
      value: cdktf.stringToHclTerraform(struct!.processSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_signed: {
      value: cdktf.stringToHclTerraform(struct!.processSigned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_set_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_set_id: {
      value: cdktf.stringToHclTerraform(struct!.userSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CtePoliciesSecurityRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CtePoliciesSecurityRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._excludeProcessSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeProcessSet = this._excludeProcessSet;
    }
    if (this._excludeResourceSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeResourceSet = this._excludeResourceSet;
    }
    if (this._excludeUserSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeUserSet = this._excludeUserSet;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._orderNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderNumber = this._orderNumber;
    }
    if (this._partialMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialMatch = this._partialMatch;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._processSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.processSetId = this._processSetId;
    }
    if (this._processSigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.processSigned = this._processSigned;
    }
    if (this._resourceSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSetId = this._resourceSetId;
    }
    if (this._userSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSetId = this._userSetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CtePoliciesSecurityRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._effect = undefined;
      this._excludeProcessSet = undefined;
      this._excludeResourceSet = undefined;
      this._excludeUserSet = undefined;
      this._generation = undefined;
      this._orderNumber = undefined;
      this._partialMatch = undefined;
      this._policyId = undefined;
      this._processSetId = undefined;
      this._processSigned = undefined;
      this._resourceSetId = undefined;
      this._userSetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._effect = value.effect;
      this._excludeProcessSet = value.excludeProcessSet;
      this._excludeResourceSet = value.excludeResourceSet;
      this._excludeUserSet = value.excludeUserSet;
      this._generation = value.generation;
      this._orderNumber = value.orderNumber;
      this._partialMatch = value.partialMatch;
      this._policyId = value.policyId;
      this._processSetId = value.processSetId;
      this._processSigned = value.processSigned;
      this._resourceSetId = value.resourceSetId;
      this._userSetId = value.userSetId;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exclude_process_set - computed: false, optional: true, required: false
  private _excludeProcessSet?: boolean | cdktf.IResolvable; 
  public get excludeProcessSet() {
    return this.getBooleanAttribute('exclude_process_set');
  }
  public set excludeProcessSet(value: boolean | cdktf.IResolvable) {
    this._excludeProcessSet = value;
  }
  public resetExcludeProcessSet() {
    this._excludeProcessSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeProcessSetInput() {
    return this._excludeProcessSet;
  }

  // exclude_resource_set - computed: false, optional: true, required: false
  private _excludeResourceSet?: boolean | cdktf.IResolvable; 
  public get excludeResourceSet() {
    return this.getBooleanAttribute('exclude_resource_set');
  }
  public set excludeResourceSet(value: boolean | cdktf.IResolvable) {
    this._excludeResourceSet = value;
  }
  public resetExcludeResourceSet() {
    this._excludeResourceSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeResourceSetInput() {
    return this._excludeResourceSet;
  }

  // exclude_user_set - computed: false, optional: true, required: false
  private _excludeUserSet?: boolean | cdktf.IResolvable; 
  public get excludeUserSet() {
    return this.getBooleanAttribute('exclude_user_set');
  }
  public set excludeUserSet(value: boolean | cdktf.IResolvable) {
    this._excludeUserSet = value;
  }
  public resetExcludeUserSet() {
    this._excludeUserSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUserSetInput() {
    return this._excludeUserSet;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // order_number - computed: false, optional: true, required: false
  private _orderNumber?: number; 
  public get orderNumber() {
    return this.getNumberAttribute('order_number');
  }
  public set orderNumber(value: number) {
    this._orderNumber = value;
  }
  public resetOrderNumber() {
    this._orderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderNumberInput() {
    return this._orderNumber;
  }

  // partial_match - computed: false, optional: true, required: false
  private _partialMatch?: boolean | cdktf.IResolvable; 
  public get partialMatch() {
    return this.getBooleanAttribute('partial_match');
  }
  public set partialMatch(value: boolean | cdktf.IResolvable) {
    this._partialMatch = value;
  }
  public resetPartialMatch() {
    this._partialMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialMatchInput() {
    return this._partialMatch;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // process_set_id - computed: false, optional: true, required: false
  private _processSetId?: string; 
  public get processSetId() {
    return this.getStringAttribute('process_set_id');
  }
  public set processSetId(value: string) {
    this._processSetId = value;
  }
  public resetProcessSetId() {
    this._processSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processSetIdInput() {
    return this._processSetId;
  }

  // process_signed - computed: false, optional: true, required: false
  private _processSigned?: string; 
  public get processSigned() {
    return this.getStringAttribute('process_signed');
  }
  public set processSigned(value: string) {
    this._processSigned = value;
  }
  public resetProcessSigned() {
    this._processSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processSignedInput() {
    return this._processSigned;
  }

  // resource_set_id - computed: false, optional: true, required: false
  private _resourceSetId?: string; 
  public get resourceSetId() {
    return this.getStringAttribute('resource_set_id');
  }
  public set resourceSetId(value: string) {
    this._resourceSetId = value;
  }
  public resetResourceSetId() {
    this._resourceSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetIdInput() {
    return this._resourceSetId;
  }

  // user_set_id - computed: false, optional: true, required: false
  private _userSetId?: string; 
  public get userSetId() {
    return this.getStringAttribute('user_set_id');
  }
  public set userSetId(value: string) {
    this._userSetId = value;
  }
  public resetUserSetId() {
    this._userSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSetIdInput() {
    return this._userSetId;
  }
}

export class CtePoliciesSecurityRulesList extends cdktf.ComplexList {
  public internalValue? : CtePoliciesSecurityRules[] | cdktf.IResolvable

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
  public get(index: number): CtePoliciesSecurityRulesOutputReference {
    return new CtePoliciesSecurityRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies ciphertrust_cte_policies}
*/
export class CtePolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_cte_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CtePolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CtePolicies to import
  * @param importFromId The id of the existing CtePolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CtePolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_cte_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_policies ciphertrust_cte_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CtePoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: CtePoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_cte_policies',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._keyCombineAlgorithm = config.keyCombineAlgorithm;
    this._name = config.name;
    this._neverDeny = config.neverDeny;
    this._permitCombineAlgorithm = config.permitCombineAlgorithm;
    this._policyKeyVersion = config.policyKeyVersion;
    this._policyVersion = config.policyVersion;
    this._restrictUpdate = config.restrictUpdate;
    this._schemaVersion = config.schemaVersion;
    this._type = config.type;
    this._updatedBy = config.updatedBy;
    this._dataTransformRules.internalValue = config.dataTransformRules;
    this._idtKeyRules.internalValue = config.idtKeyRules;
    this._keyRules.internalValue = config.keyRules;
    this._ldtKeyRules.internalValue = config.ldtKeyRules;
    this._securityRules.internalValue = config.securityRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // key_combine_algorithm - computed: false, optional: true, required: false
  private _keyCombineAlgorithm?: string; 
  public get keyCombineAlgorithm() {
    return this.getStringAttribute('key_combine_algorithm');
  }
  public set keyCombineAlgorithm(value: string) {
    this._keyCombineAlgorithm = value;
  }
  public resetKeyCombineAlgorithm() {
    this._keyCombineAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCombineAlgorithmInput() {
    return this._keyCombineAlgorithm;
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

  // never_deny - computed: false, optional: true, required: false
  private _neverDeny?: boolean | cdktf.IResolvable; 
  public get neverDeny() {
    return this.getBooleanAttribute('never_deny');
  }
  public set neverDeny(value: boolean | cdktf.IResolvable) {
    this._neverDeny = value;
  }
  public resetNeverDeny() {
    this._neverDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neverDenyInput() {
    return this._neverDeny;
  }

  // permit_combine_algorithm - computed: false, optional: true, required: false
  private _permitCombineAlgorithm?: string; 
  public get permitCombineAlgorithm() {
    return this.getStringAttribute('permit_combine_algorithm');
  }
  public set permitCombineAlgorithm(value: string) {
    this._permitCombineAlgorithm = value;
  }
  public resetPermitCombineAlgorithm() {
    this._permitCombineAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitCombineAlgorithmInput() {
    return this._permitCombineAlgorithm;
  }

  // policy_key_version - computed: false, optional: true, required: false
  private _policyKeyVersion?: number; 
  public get policyKeyVersion() {
    return this.getNumberAttribute('policy_key_version');
  }
  public set policyKeyVersion(value: number) {
    this._policyKeyVersion = value;
  }
  public resetPolicyKeyVersion() {
    this._policyKeyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyKeyVersionInput() {
    return this._policyKeyVersion;
  }

  // policy_version - computed: false, optional: true, required: false
  private _policyVersion?: number; 
  public get policyVersion() {
    return this.getNumberAttribute('policy_version');
  }
  public set policyVersion(value: number) {
    this._policyVersion = value;
  }
  public resetPolicyVersion() {
    this._policyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyVersionInput() {
    return this._policyVersion;
  }

  // restrict_update - computed: false, optional: true, required: false
  private _restrictUpdate?: boolean | cdktf.IResolvable; 
  public get restrictUpdate() {
    return this.getBooleanAttribute('restrict_update');
  }
  public set restrictUpdate(value: boolean | cdktf.IResolvable) {
    this._restrictUpdate = value;
  }
  public resetRestrictUpdate() {
    this._restrictUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictUpdateInput() {
    return this._restrictUpdate;
  }

  // schema_version - computed: false, optional: true, required: false
  private _schemaVersion?: number; 
  public get schemaVersion() {
    return this.getNumberAttribute('schema_version');
  }
  public set schemaVersion(value: number) {
    this._schemaVersion = value;
  }
  public resetSchemaVersion() {
    this._schemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionInput() {
    return this._schemaVersion;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_by - computed: false, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // data_transform_rules - computed: false, optional: true, required: false
  private _dataTransformRules = new CtePoliciesDataTransformRulesList(this, "data_transform_rules", false);
  public get dataTransformRules() {
    return this._dataTransformRules;
  }
  public putDataTransformRules(value: CtePoliciesDataTransformRules[] | cdktf.IResolvable) {
    this._dataTransformRules.internalValue = value;
  }
  public resetDataTransformRules() {
    this._dataTransformRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransformRulesInput() {
    return this._dataTransformRules.internalValue;
  }

  // idt_key_rules - computed: false, optional: true, required: false
  private _idtKeyRules = new CtePoliciesIdtKeyRulesList(this, "idt_key_rules", false);
  public get idtKeyRules() {
    return this._idtKeyRules;
  }
  public putIdtKeyRules(value: CtePoliciesIdtKeyRules[] | cdktf.IResolvable) {
    this._idtKeyRules.internalValue = value;
  }
  public resetIdtKeyRules() {
    this._idtKeyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtKeyRulesInput() {
    return this._idtKeyRules.internalValue;
  }

  // key_rules - computed: false, optional: true, required: false
  private _keyRules = new CtePoliciesKeyRulesList(this, "key_rules", false);
  public get keyRules() {
    return this._keyRules;
  }
  public putKeyRules(value: CtePoliciesKeyRules[] | cdktf.IResolvable) {
    this._keyRules.internalValue = value;
  }
  public resetKeyRules() {
    this._keyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRulesInput() {
    return this._keyRules.internalValue;
  }

  // ldt_key_rules - computed: false, optional: true, required: false
  private _ldtKeyRules = new CtePoliciesLdtKeyRulesList(this, "ldt_key_rules", false);
  public get ldtKeyRules() {
    return this._ldtKeyRules;
  }
  public putLdtKeyRules(value: CtePoliciesLdtKeyRules[] | cdktf.IResolvable) {
    this._ldtKeyRules.internalValue = value;
  }
  public resetLdtKeyRules() {
    this._ldtKeyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldtKeyRulesInput() {
    return this._ldtKeyRules.internalValue;
  }

  // security_rules - computed: false, optional: true, required: false
  private _securityRules = new CtePoliciesSecurityRulesList(this, "security_rules", false);
  public get securityRules() {
    return this._securityRules;
  }
  public putSecurityRules(value: CtePoliciesSecurityRules[] | cdktf.IResolvable) {
    this._securityRules.internalValue = value;
  }
  public resetSecurityRules() {
    this._securityRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRulesInput() {
    return this._securityRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key_combine_algorithm: cdktf.stringToTerraform(this._keyCombineAlgorithm),
      name: cdktf.stringToTerraform(this._name),
      never_deny: cdktf.booleanToTerraform(this._neverDeny),
      permit_combine_algorithm: cdktf.stringToTerraform(this._permitCombineAlgorithm),
      policy_key_version: cdktf.numberToTerraform(this._policyKeyVersion),
      policy_version: cdktf.numberToTerraform(this._policyVersion),
      restrict_update: cdktf.booleanToTerraform(this._restrictUpdate),
      schema_version: cdktf.numberToTerraform(this._schemaVersion),
      type: cdktf.stringToTerraform(this._type),
      updated_by: cdktf.stringToTerraform(this._updatedBy),
      data_transform_rules: cdktf.listMapper(ctePoliciesDataTransformRulesToTerraform, true)(this._dataTransformRules.internalValue),
      idt_key_rules: cdktf.listMapper(ctePoliciesIdtKeyRulesToTerraform, true)(this._idtKeyRules.internalValue),
      key_rules: cdktf.listMapper(ctePoliciesKeyRulesToTerraform, true)(this._keyRules.internalValue),
      ldt_key_rules: cdktf.listMapper(ctePoliciesLdtKeyRulesToTerraform, true)(this._ldtKeyRules.internalValue),
      security_rules: cdktf.listMapper(ctePoliciesSecurityRulesToTerraform, true)(this._securityRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      key_combine_algorithm: {
        value: cdktf.stringToHclTerraform(this._keyCombineAlgorithm),
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
      never_deny: {
        value: cdktf.booleanToHclTerraform(this._neverDeny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permit_combine_algorithm: {
        value: cdktf.stringToHclTerraform(this._permitCombineAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_key_version: {
        value: cdktf.numberToHclTerraform(this._policyKeyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_version: {
        value: cdktf.numberToHclTerraform(this._policyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restrict_update: {
        value: cdktf.booleanToHclTerraform(this._restrictUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema_version: {
        value: cdktf.numberToHclTerraform(this._schemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_by: {
        value: cdktf.stringToHclTerraform(this._updatedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_transform_rules: {
        value: cdktf.listMapperHcl(ctePoliciesDataTransformRulesToHclTerraform, true)(this._dataTransformRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CtePoliciesDataTransformRulesList",
      },
      idt_key_rules: {
        value: cdktf.listMapperHcl(ctePoliciesIdtKeyRulesToHclTerraform, true)(this._idtKeyRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CtePoliciesIdtKeyRulesList",
      },
      key_rules: {
        value: cdktf.listMapperHcl(ctePoliciesKeyRulesToHclTerraform, true)(this._keyRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CtePoliciesKeyRulesList",
      },
      ldt_key_rules: {
        value: cdktf.listMapperHcl(ctePoliciesLdtKeyRulesToHclTerraform, true)(this._ldtKeyRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CtePoliciesLdtKeyRulesList",
      },
      security_rules: {
        value: cdktf.listMapperHcl(ctePoliciesSecurityRulesToHclTerraform, true)(this._securityRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CtePoliciesSecurityRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
