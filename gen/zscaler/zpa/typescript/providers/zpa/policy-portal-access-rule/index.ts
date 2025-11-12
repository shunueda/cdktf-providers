// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyPortalAccessRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  *   This is for providing the rule action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#action PolicyPortalAccessRule#action}
  */
  readonly action?: string;
  /**
  * This is the description of the access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#description PolicyPortalAccessRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#microtenant_id PolicyPortalAccessRule#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * This is the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#name PolicyPortalAccessRule#name}
  */
  readonly name: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#conditions PolicyPortalAccessRule#conditions}
  */
  readonly conditions?: PolicyPortalAccessRuleConditions[] | cdktf.IResolvable;
  /**
  * privileged_portal_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#privileged_portal_capabilities PolicyPortalAccessRule#privileged_portal_capabilities}
  */
  readonly privilegedPortalCapabilities?: PolicyPortalAccessRulePrivilegedPortalCapabilities;
}
export interface PolicyPortalAccessRuleConditionsOperandsEntryValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#lhs PolicyPortalAccessRule#lhs}
  */
  readonly lhs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#rhs PolicyPortalAccessRule#rhs}
  */
  readonly rhs?: string;
}

export function policyPortalAccessRuleConditionsOperandsEntryValuesToTerraform(struct?: PolicyPortalAccessRuleConditionsOperandsEntryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lhs: cdktf.stringToTerraform(struct!.lhs),
    rhs: cdktf.stringToTerraform(struct!.rhs),
  }
}


export function policyPortalAccessRuleConditionsOperandsEntryValuesToHclTerraform(struct?: PolicyPortalAccessRuleConditionsOperandsEntryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lhs: {
      value: cdktf.stringToHclTerraform(struct!.lhs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rhs: {
      value: cdktf.stringToHclTerraform(struct!.rhs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyPortalAccessRuleConditionsOperandsEntryValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyPortalAccessRuleConditionsOperandsEntryValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lhs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lhs = this._lhs;
    }
    if (this._rhs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rhs = this._rhs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyPortalAccessRuleConditionsOperandsEntryValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lhs = undefined;
      this._rhs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lhs = value.lhs;
      this._rhs = value.rhs;
    }
  }

  // lhs - computed: false, optional: true, required: false
  private _lhs?: string; 
  public get lhs() {
    return this.getStringAttribute('lhs');
  }
  public set lhs(value: string) {
    this._lhs = value;
  }
  public resetLhs() {
    this._lhs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lhsInput() {
    return this._lhs;
  }

  // rhs - computed: false, optional: true, required: false
  private _rhs?: string; 
  public get rhs() {
    return this.getStringAttribute('rhs');
  }
  public set rhs(value: string) {
    this._rhs = value;
  }
  public resetRhs() {
    this._rhs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rhsInput() {
    return this._rhs;
  }
}

export class PolicyPortalAccessRuleConditionsOperandsEntryValuesList extends cdktf.ComplexList {
  public internalValue? : PolicyPortalAccessRuleConditionsOperandsEntryValues[] | cdktf.IResolvable

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
  public get(index: number): PolicyPortalAccessRuleConditionsOperandsEntryValuesOutputReference {
    return new PolicyPortalAccessRuleConditionsOperandsEntryValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyPortalAccessRuleConditionsOperands {
  /**
  *   This is for specifying the policy critiera.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#object_type PolicyPortalAccessRule#object_type}
  */
  readonly objectType?: string;
  /**
  * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#values PolicyPortalAccessRule#values}
  */
  readonly values?: string[];
  /**
  * entry_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#entry_values PolicyPortalAccessRule#entry_values}
  */
  readonly entryValues?: PolicyPortalAccessRuleConditionsOperandsEntryValues[] | cdktf.IResolvable;
}

export function policyPortalAccessRuleConditionsOperandsToTerraform(struct?: PolicyPortalAccessRuleConditionsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_type: cdktf.stringToTerraform(struct!.objectType),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    entry_values: cdktf.listMapper(policyPortalAccessRuleConditionsOperandsEntryValuesToTerraform, true)(struct!.entryValues),
  }
}


export function policyPortalAccessRuleConditionsOperandsToHclTerraform(struct?: PolicyPortalAccessRuleConditionsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    entry_values: {
      value: cdktf.listMapperHcl(policyPortalAccessRuleConditionsOperandsEntryValuesToHclTerraform, true)(struct!.entryValues),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyPortalAccessRuleConditionsOperandsEntryValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyPortalAccessRuleConditionsOperandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyPortalAccessRuleConditionsOperands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._entryValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryValues = this._entryValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyPortalAccessRuleConditionsOperands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectType = undefined;
      this._values = undefined;
      this._entryValues.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectType = value.objectType;
      this._values = value.values;
      this._entryValues.internalValue = value.entryValues;
    }
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // entry_values - computed: false, optional: true, required: false
  private _entryValues = new PolicyPortalAccessRuleConditionsOperandsEntryValuesList(this, "entry_values", true);
  public get entryValues() {
    return this._entryValues;
  }
  public putEntryValues(value: PolicyPortalAccessRuleConditionsOperandsEntryValues[] | cdktf.IResolvable) {
    this._entryValues.internalValue = value;
  }
  public resetEntryValues() {
    this._entryValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryValuesInput() {
    return this._entryValues.internalValue;
  }
}

export class PolicyPortalAccessRuleConditionsOperandsList extends cdktf.ComplexList {
  public internalValue? : PolicyPortalAccessRuleConditionsOperands[] | cdktf.IResolvable

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
  public get(index: number): PolicyPortalAccessRuleConditionsOperandsOutputReference {
    return new PolicyPortalAccessRuleConditionsOperandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyPortalAccessRuleConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#operator PolicyPortalAccessRule#operator}
  */
  readonly operator?: string;
  /**
  * operands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#operands PolicyPortalAccessRule#operands}
  */
  readonly operands?: PolicyPortalAccessRuleConditionsOperands[] | cdktf.IResolvable;
}

export function policyPortalAccessRuleConditionsToTerraform(struct?: PolicyPortalAccessRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    operands: cdktf.listMapper(policyPortalAccessRuleConditionsOperandsToTerraform, true)(struct!.operands),
  }
}


export function policyPortalAccessRuleConditionsToHclTerraform(struct?: PolicyPortalAccessRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operands: {
      value: cdktf.listMapperHcl(policyPortalAccessRuleConditionsOperandsToHclTerraform, true)(struct!.operands),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyPortalAccessRuleConditionsOperandsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyPortalAccessRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyPortalAccessRuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._operands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operands = this._operands?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyPortalAccessRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._operands.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._operands.internalValue = value.operands;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // operands - computed: false, optional: true, required: false
  private _operands = new PolicyPortalAccessRuleConditionsOperandsList(this, "operands", true);
  public get operands() {
    return this._operands;
  }
  public putOperands(value: PolicyPortalAccessRuleConditionsOperands[] | cdktf.IResolvable) {
    this._operands.internalValue = value;
  }
  public resetOperands() {
    this._operands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandsInput() {
    return this._operands.internalValue;
  }
}

export class PolicyPortalAccessRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyPortalAccessRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyPortalAccessRuleConditionsOutputReference {
    return new PolicyPortalAccessRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyPortalAccessRulePrivilegedPortalCapabilities {
  /**
  * Allows a User like an Admin to see all files marked Uninspected from other users in the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#access_uninspected_file PolicyPortalAccessRule#access_uninspected_file}
  */
  readonly accessUninspectedFile?: boolean | cdktf.IResolvable;
  /**
  * Allows a User to delete files to reclaim space. Allowing deletion will prevent auditing of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#delete_file PolicyPortalAccessRule#delete_file}
  */
  readonly deleteFile?: boolean | cdktf.IResolvable;
  /**
  * Allows a User to request approvals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#request_approvals PolicyPortalAccessRule#request_approvals}
  */
  readonly requestApprovals?: boolean | cdktf.IResolvable;
  /**
  * Allows a User to review approvals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#review_approvals PolicyPortalAccessRule#review_approvals}
  */
  readonly reviewApprovals?: boolean | cdktf.IResolvable;
}

export function policyPortalAccessRulePrivilegedPortalCapabilitiesToTerraform(struct?: PolicyPortalAccessRulePrivilegedPortalCapabilitiesOutputReference | PolicyPortalAccessRulePrivilegedPortalCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_uninspected_file: cdktf.booleanToTerraform(struct!.accessUninspectedFile),
    delete_file: cdktf.booleanToTerraform(struct!.deleteFile),
    request_approvals: cdktf.booleanToTerraform(struct!.requestApprovals),
    review_approvals: cdktf.booleanToTerraform(struct!.reviewApprovals),
  }
}


export function policyPortalAccessRulePrivilegedPortalCapabilitiesToHclTerraform(struct?: PolicyPortalAccessRulePrivilegedPortalCapabilitiesOutputReference | PolicyPortalAccessRulePrivilegedPortalCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_uninspected_file: {
      value: cdktf.booleanToHclTerraform(struct!.accessUninspectedFile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_file: {
      value: cdktf.booleanToHclTerraform(struct!.deleteFile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_approvals: {
      value: cdktf.booleanToHclTerraform(struct!.requestApprovals),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    review_approvals: {
      value: cdktf.booleanToHclTerraform(struct!.reviewApprovals),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyPortalAccessRulePrivilegedPortalCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyPortalAccessRulePrivilegedPortalCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessUninspectedFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessUninspectedFile = this._accessUninspectedFile;
    }
    if (this._deleteFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteFile = this._deleteFile;
    }
    if (this._requestApprovals !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestApprovals = this._requestApprovals;
    }
    if (this._reviewApprovals !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewApprovals = this._reviewApprovals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyPortalAccessRulePrivilegedPortalCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessUninspectedFile = undefined;
      this._deleteFile = undefined;
      this._requestApprovals = undefined;
      this._reviewApprovals = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessUninspectedFile = value.accessUninspectedFile;
      this._deleteFile = value.deleteFile;
      this._requestApprovals = value.requestApprovals;
      this._reviewApprovals = value.reviewApprovals;
    }
  }

  // access_uninspected_file - computed: false, optional: true, required: false
  private _accessUninspectedFile?: boolean | cdktf.IResolvable; 
  public get accessUninspectedFile() {
    return this.getBooleanAttribute('access_uninspected_file');
  }
  public set accessUninspectedFile(value: boolean | cdktf.IResolvable) {
    this._accessUninspectedFile = value;
  }
  public resetAccessUninspectedFile() {
    this._accessUninspectedFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessUninspectedFileInput() {
    return this._accessUninspectedFile;
  }

  // delete_file - computed: false, optional: true, required: false
  private _deleteFile?: boolean | cdktf.IResolvable; 
  public get deleteFile() {
    return this.getBooleanAttribute('delete_file');
  }
  public set deleteFile(value: boolean | cdktf.IResolvable) {
    this._deleteFile = value;
  }
  public resetDeleteFile() {
    this._deleteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteFileInput() {
    return this._deleteFile;
  }

  // request_approvals - computed: false, optional: true, required: false
  private _requestApprovals?: boolean | cdktf.IResolvable; 
  public get requestApprovals() {
    return this.getBooleanAttribute('request_approvals');
  }
  public set requestApprovals(value: boolean | cdktf.IResolvable) {
    this._requestApprovals = value;
  }
  public resetRequestApprovals() {
    this._requestApprovals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestApprovalsInput() {
    return this._requestApprovals;
  }

  // review_approvals - computed: false, optional: true, required: false
  private _reviewApprovals?: boolean | cdktf.IResolvable; 
  public get reviewApprovals() {
    return this.getBooleanAttribute('review_approvals');
  }
  public set reviewApprovals(value: boolean | cdktf.IResolvable) {
    this._reviewApprovals = value;
  }
  public resetReviewApprovals() {
    this._reviewApprovals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewApprovalsInput() {
    return this._reviewApprovals;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule zpa_policy_portal_access_rule}
*/
export class PolicyPortalAccessRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_policy_portal_access_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyPortalAccessRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyPortalAccessRule to import
  * @param importFromId The id of the existing PolicyPortalAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyPortalAccessRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_policy_portal_access_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_portal_access_rule zpa_policy_portal_access_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyPortalAccessRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyPortalAccessRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_policy_portal_access_rule',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2',
        providerVersionConstraint: '4.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._conditions.internalValue = config.conditions;
    this._privilegedPortalCapabilities.internalValue = config.privilegedPortalCapabilities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // policy_set_id - computed: true, optional: false, required: false
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new PolicyPortalAccessRuleConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: PolicyPortalAccessRuleConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // privileged_portal_capabilities - computed: false, optional: true, required: false
  private _privilegedPortalCapabilities = new PolicyPortalAccessRulePrivilegedPortalCapabilitiesOutputReference(this, "privileged_portal_capabilities");
  public get privilegedPortalCapabilities() {
    return this._privilegedPortalCapabilities;
  }
  public putPrivilegedPortalCapabilities(value: PolicyPortalAccessRulePrivilegedPortalCapabilities) {
    this._privilegedPortalCapabilities.internalValue = value;
  }
  public resetPrivilegedPortalCapabilities() {
    this._privilegedPortalCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedPortalCapabilitiesInput() {
    return this._privilegedPortalCapabilities.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      conditions: cdktf.listMapper(policyPortalAccessRuleConditionsToTerraform, true)(this._conditions.internalValue),
      privileged_portal_capabilities: policyPortalAccessRulePrivilegedPortalCapabilitiesToTerraform(this._privilegedPortalCapabilities.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
      conditions: {
        value: cdktf.listMapperHcl(policyPortalAccessRuleConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyPortalAccessRuleConditionsList",
      },
      privileged_portal_capabilities: {
        value: policyPortalAccessRulePrivilegedPortalCapabilitiesToHclTerraform(this._privilegedPortalCapabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyPortalAccessRulePrivilegedPortalCapabilitiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
