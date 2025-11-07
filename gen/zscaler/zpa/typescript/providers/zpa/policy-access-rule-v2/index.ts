// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyAccessRuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  *   This is for providing the rule action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#action PolicyAccessRuleV2#action}
  */
  readonly action?: string;
  /**
  * This is for providing a customer message for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#custom_msg PolicyAccessRuleV2#custom_msg}
  */
  readonly customMsg?: string;
  /**
  * This is the description of the access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#description PolicyAccessRuleV2#description}
  */
  readonly description?: string;
  /**
  * Enable extranet for this policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#extranet_enabled PolicyAccessRuleV2#extranet_enabled}
  */
  readonly extranetEnabled?: boolean | cdktf.IResolvable;
  /**
  * This is the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#name PolicyAccessRuleV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#operator PolicyAccessRuleV2#operator}
  */
  readonly operator?: string;
  /**
  * app_connector_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#app_connector_groups PolicyAccessRuleV2#app_connector_groups}
  */
  readonly appConnectorGroups?: PolicyAccessRuleV2AppConnectorGroups[] | cdktf.IResolvable;
  /**
  * app_server_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#app_server_groups PolicyAccessRuleV2#app_server_groups}
  */
  readonly appServerGroups?: PolicyAccessRuleV2AppServerGroups[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#conditions PolicyAccessRuleV2#conditions}
  */
  readonly conditions?: PolicyAccessRuleV2Conditions[] | cdktf.IResolvable;
  /**
  * extranet_dto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#extranet_dto PolicyAccessRuleV2#extranet_dto}
  */
  readonly extranetDto?: PolicyAccessRuleV2ExtranetDto[] | cdktf.IResolvable;
}
export interface PolicyAccessRuleV2AppConnectorGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#id PolicyAccessRuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
}

export function policyAccessRuleV2AppConnectorGroupsToTerraform(struct?: PolicyAccessRuleV2AppConnectorGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function policyAccessRuleV2AppConnectorGroupsToHclTerraform(struct?: PolicyAccessRuleV2AppConnectorGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyAccessRuleV2AppConnectorGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyAccessRuleV2AppConnectorGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyAccessRuleV2AppConnectorGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class PolicyAccessRuleV2AppConnectorGroupsList extends cdktf.ComplexList {
  public internalValue? : PolicyAccessRuleV2AppConnectorGroups[] | cdktf.IResolvable

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
  public get(index: number): PolicyAccessRuleV2AppConnectorGroupsOutputReference {
    return new PolicyAccessRuleV2AppConnectorGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyAccessRuleV2AppServerGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#id PolicyAccessRuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string[];
}

export function policyAccessRuleV2AppServerGroupsToTerraform(struct?: PolicyAccessRuleV2AppServerGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function policyAccessRuleV2AppServerGroupsToHclTerraform(struct?: PolicyAccessRuleV2AppServerGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyAccessRuleV2AppServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyAccessRuleV2AppServerGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyAccessRuleV2AppServerGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class PolicyAccessRuleV2AppServerGroupsList extends cdktf.ComplexList {
  public internalValue? : PolicyAccessRuleV2AppServerGroups[] | cdktf.IResolvable

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
  public get(index: number): PolicyAccessRuleV2AppServerGroupsOutputReference {
    return new PolicyAccessRuleV2AppServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyAccessRuleV2ConditionsOperandsEntryValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#lhs PolicyAccessRuleV2#lhs}
  */
  readonly lhs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#rhs PolicyAccessRuleV2#rhs}
  */
  readonly rhs?: string;
}

export function policyAccessRuleV2ConditionsOperandsEntryValuesToTerraform(struct?: PolicyAccessRuleV2ConditionsOperandsEntryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lhs: cdktf.stringToTerraform(struct!.lhs),
    rhs: cdktf.stringToTerraform(struct!.rhs),
  }
}


export function policyAccessRuleV2ConditionsOperandsEntryValuesToHclTerraform(struct?: PolicyAccessRuleV2ConditionsOperandsEntryValues | cdktf.IResolvable): any {
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

export class PolicyAccessRuleV2ConditionsOperandsEntryValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyAccessRuleV2ConditionsOperandsEntryValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyAccessRuleV2ConditionsOperandsEntryValues | cdktf.IResolvable | undefined) {
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

export class PolicyAccessRuleV2ConditionsOperandsEntryValuesList extends cdktf.ComplexList {
  public internalValue? : PolicyAccessRuleV2ConditionsOperandsEntryValues[] | cdktf.IResolvable

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
  public get(index: number): PolicyAccessRuleV2ConditionsOperandsEntryValuesOutputReference {
    return new PolicyAccessRuleV2ConditionsOperandsEntryValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyAccessRuleV2ConditionsOperands {
  /**
  *   This is for specifying the policy critiera.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#object_type PolicyAccessRuleV2#object_type}
  */
  readonly objectType?: string;
  /**
  * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#values PolicyAccessRuleV2#values}
  */
  readonly values?: string[];
  /**
  * entry_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#entry_values PolicyAccessRuleV2#entry_values}
  */
  readonly entryValues?: PolicyAccessRuleV2ConditionsOperandsEntryValues[] | cdktf.IResolvable;
}

export function policyAccessRuleV2ConditionsOperandsToTerraform(struct?: PolicyAccessRuleV2ConditionsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_type: cdktf.stringToTerraform(struct!.objectType),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    entry_values: cdktf.listMapper(policyAccessRuleV2ConditionsOperandsEntryValuesToTerraform, true)(struct!.entryValues),
  }
}


export function policyAccessRuleV2ConditionsOperandsToHclTerraform(struct?: PolicyAccessRuleV2ConditionsOperands | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(policyAccessRuleV2ConditionsOperandsEntryValuesToHclTerraform, true)(struct!.entryValues),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyAccessRuleV2ConditionsOperandsEntryValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyAccessRuleV2ConditionsOperandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyAccessRuleV2ConditionsOperands | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyAccessRuleV2ConditionsOperands | cdktf.IResolvable | undefined) {
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
  private _entryValues = new PolicyAccessRuleV2ConditionsOperandsEntryValuesList(this, "entry_values", true);
  public get entryValues() {
    return this._entryValues;
  }
  public putEntryValues(value: PolicyAccessRuleV2ConditionsOperandsEntryValues[] | cdktf.IResolvable) {
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

export class PolicyAccessRuleV2ConditionsOperandsList extends cdktf.ComplexList {
  public internalValue? : PolicyAccessRuleV2ConditionsOperands[] | cdktf.IResolvable

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
  public get(index: number): PolicyAccessRuleV2ConditionsOperandsOutputReference {
    return new PolicyAccessRuleV2ConditionsOperandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyAccessRuleV2Conditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#operator PolicyAccessRuleV2#operator}
  */
  readonly operator?: string;
  /**
  * operands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#operands PolicyAccessRuleV2#operands}
  */
  readonly operands?: PolicyAccessRuleV2ConditionsOperands[] | cdktf.IResolvable;
}

export function policyAccessRuleV2ConditionsToTerraform(struct?: PolicyAccessRuleV2Conditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    operands: cdktf.listMapper(policyAccessRuleV2ConditionsOperandsToTerraform, true)(struct!.operands),
  }
}


export function policyAccessRuleV2ConditionsToHclTerraform(struct?: PolicyAccessRuleV2Conditions | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(policyAccessRuleV2ConditionsOperandsToHclTerraform, true)(struct!.operands),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyAccessRuleV2ConditionsOperandsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyAccessRuleV2ConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyAccessRuleV2Conditions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyAccessRuleV2Conditions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
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
  private _operands = new PolicyAccessRuleV2ConditionsOperandsList(this, "operands", true);
  public get operands() {
    return this._operands;
  }
  public putOperands(value: PolicyAccessRuleV2ConditionsOperands[] | cdktf.IResolvable) {
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

export class PolicyAccessRuleV2ConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyAccessRuleV2Conditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyAccessRuleV2ConditionsOutputReference {
    return new PolicyAccessRuleV2ConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyAccessRuleV2ExtranetDtoLocationDto {
  /**
  * Location ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#id PolicyAccessRuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function policyAccessRuleV2ExtranetDtoLocationDtoToTerraform(struct?: PolicyAccessRuleV2ExtranetDtoLocationDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function policyAccessRuleV2ExtranetDtoLocationDtoToHclTerraform(struct?: PolicyAccessRuleV2ExtranetDtoLocationDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyAccessRuleV2ExtranetDtoLocationDtoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyAccessRuleV2ExtranetDtoLocationDto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyAccessRuleV2ExtranetDtoLocationDto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class PolicyAccessRuleV2ExtranetDtoLocationDtoList extends cdktf.ComplexList {
  public internalValue? : PolicyAccessRuleV2ExtranetDtoLocationDto[] | cdktf.IResolvable

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
  public get(index: number): PolicyAccessRuleV2ExtranetDtoLocationDtoOutputReference {
    return new PolicyAccessRuleV2ExtranetDtoLocationDtoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyAccessRuleV2ExtranetDtoLocationGroupDto {
  /**
  * Location Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#id PolicyAccessRuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function policyAccessRuleV2ExtranetDtoLocationGroupDtoToTerraform(struct?: PolicyAccessRuleV2ExtranetDtoLocationGroupDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function policyAccessRuleV2ExtranetDtoLocationGroupDtoToHclTerraform(struct?: PolicyAccessRuleV2ExtranetDtoLocationGroupDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyAccessRuleV2ExtranetDtoLocationGroupDtoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyAccessRuleV2ExtranetDtoLocationGroupDto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyAccessRuleV2ExtranetDtoLocationGroupDto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class PolicyAccessRuleV2ExtranetDtoLocationGroupDtoList extends cdktf.ComplexList {
  public internalValue? : PolicyAccessRuleV2ExtranetDtoLocationGroupDto[] | cdktf.IResolvable

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
  public get(index: number): PolicyAccessRuleV2ExtranetDtoLocationGroupDtoOutputReference {
    return new PolicyAccessRuleV2ExtranetDtoLocationGroupDtoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyAccessRuleV2ExtranetDto {
  /**
  * ZPN Extranet Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#zpn_er_id PolicyAccessRuleV2#zpn_er_id}
  */
  readonly zpnErId?: string;
  /**
  * location_dto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#location_dto PolicyAccessRuleV2#location_dto}
  */
  readonly locationDto?: PolicyAccessRuleV2ExtranetDtoLocationDto[] | cdktf.IResolvable;
  /**
  * location_group_dto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#location_group_dto PolicyAccessRuleV2#location_group_dto}
  */
  readonly locationGroupDto?: PolicyAccessRuleV2ExtranetDtoLocationGroupDto[] | cdktf.IResolvable;
}

export function policyAccessRuleV2ExtranetDtoToTerraform(struct?: PolicyAccessRuleV2ExtranetDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zpn_er_id: cdktf.stringToTerraform(struct!.zpnErId),
    location_dto: cdktf.listMapper(policyAccessRuleV2ExtranetDtoLocationDtoToTerraform, true)(struct!.locationDto),
    location_group_dto: cdktf.listMapper(policyAccessRuleV2ExtranetDtoLocationGroupDtoToTerraform, true)(struct!.locationGroupDto),
  }
}


export function policyAccessRuleV2ExtranetDtoToHclTerraform(struct?: PolicyAccessRuleV2ExtranetDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zpn_er_id: {
      value: cdktf.stringToHclTerraform(struct!.zpnErId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_dto: {
      value: cdktf.listMapperHcl(policyAccessRuleV2ExtranetDtoLocationDtoToHclTerraform, true)(struct!.locationDto),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyAccessRuleV2ExtranetDtoLocationDtoList",
    },
    location_group_dto: {
      value: cdktf.listMapperHcl(policyAccessRuleV2ExtranetDtoLocationGroupDtoToHclTerraform, true)(struct!.locationGroupDto),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyAccessRuleV2ExtranetDtoLocationGroupDtoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyAccessRuleV2ExtranetDtoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyAccessRuleV2ExtranetDto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zpnErId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zpnErId = this._zpnErId;
    }
    if (this._locationDto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationDto = this._locationDto?.internalValue;
    }
    if (this._locationGroupDto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationGroupDto = this._locationGroupDto?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyAccessRuleV2ExtranetDto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._zpnErId = undefined;
      this._locationDto.internalValue = undefined;
      this._locationGroupDto.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._zpnErId = value.zpnErId;
      this._locationDto.internalValue = value.locationDto;
      this._locationGroupDto.internalValue = value.locationGroupDto;
    }
  }

  // zpn_er_id - computed: false, optional: true, required: false
  private _zpnErId?: string; 
  public get zpnErId() {
    return this.getStringAttribute('zpn_er_id');
  }
  public set zpnErId(value: string) {
    this._zpnErId = value;
  }
  public resetZpnErId() {
    this._zpnErId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpnErIdInput() {
    return this._zpnErId;
  }

  // location_dto - computed: false, optional: true, required: false
  private _locationDto = new PolicyAccessRuleV2ExtranetDtoLocationDtoList(this, "location_dto", false);
  public get locationDto() {
    return this._locationDto;
  }
  public putLocationDto(value: PolicyAccessRuleV2ExtranetDtoLocationDto[] | cdktf.IResolvable) {
    this._locationDto.internalValue = value;
  }
  public resetLocationDto() {
    this._locationDto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationDtoInput() {
    return this._locationDto.internalValue;
  }

  // location_group_dto - computed: false, optional: true, required: false
  private _locationGroupDto = new PolicyAccessRuleV2ExtranetDtoLocationGroupDtoList(this, "location_group_dto", false);
  public get locationGroupDto() {
    return this._locationGroupDto;
  }
  public putLocationGroupDto(value: PolicyAccessRuleV2ExtranetDtoLocationGroupDto[] | cdktf.IResolvable) {
    this._locationGroupDto.internalValue = value;
  }
  public resetLocationGroupDto() {
    this._locationGroupDto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationGroupDtoInput() {
    return this._locationGroupDto.internalValue;
  }
}

export class PolicyAccessRuleV2ExtranetDtoList extends cdktf.ComplexList {
  public internalValue? : PolicyAccessRuleV2ExtranetDto[] | cdktf.IResolvable

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
  public get(index: number): PolicyAccessRuleV2ExtranetDtoOutputReference {
    return new PolicyAccessRuleV2ExtranetDtoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2 zpa_policy_access_rule_v2}
*/
export class PolicyAccessRuleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_policy_access_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyAccessRuleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyAccessRuleV2 to import
  * @param importFromId The id of the existing PolicyAccessRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyAccessRuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_policy_access_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/policy_access_rule_v2 zpa_policy_access_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyAccessRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: PolicyAccessRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'zpa_policy_access_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2'
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
    this._customMsg = config.customMsg;
    this._description = config.description;
    this._extranetEnabled = config.extranetEnabled;
    this._name = config.name;
    this._operator = config.operator;
    this._appConnectorGroups.internalValue = config.appConnectorGroups;
    this._appServerGroups.internalValue = config.appServerGroups;
    this._conditions.internalValue = config.conditions;
    this._extranetDto.internalValue = config.extranetDto;
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

  // custom_msg - computed: true, optional: true, required: false
  private _customMsg?: string; 
  public get customMsg() {
    return this.getStringAttribute('custom_msg');
  }
  public set customMsg(value: string) {
    this._customMsg = value;
  }
  public resetCustomMsg() {
    this._customMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMsgInput() {
    return this._customMsg;
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

  // extranet_enabled - computed: false, optional: true, required: false
  private _extranetEnabled?: boolean | cdktf.IResolvable; 
  public get extranetEnabled() {
    return this.getBooleanAttribute('extranet_enabled');
  }
  public set extranetEnabled(value: boolean | cdktf.IResolvable) {
    this._extranetEnabled = value;
  }
  public resetExtranetEnabled() {
    this._extranetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extranetEnabledInput() {
    return this._extranetEnabled;
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

  // policy_set_id - computed: true, optional: false, required: false
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }

  // app_connector_groups - computed: false, optional: true, required: false
  private _appConnectorGroups = new PolicyAccessRuleV2AppConnectorGroupsList(this, "app_connector_groups", false);
  public get appConnectorGroups() {
    return this._appConnectorGroups;
  }
  public putAppConnectorGroups(value: PolicyAccessRuleV2AppConnectorGroups[] | cdktf.IResolvable) {
    this._appConnectorGroups.internalValue = value;
  }
  public resetAppConnectorGroups() {
    this._appConnectorGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appConnectorGroupsInput() {
    return this._appConnectorGroups.internalValue;
  }

  // app_server_groups - computed: false, optional: true, required: false
  private _appServerGroups = new PolicyAccessRuleV2AppServerGroupsList(this, "app_server_groups", false);
  public get appServerGroups() {
    return this._appServerGroups;
  }
  public putAppServerGroups(value: PolicyAccessRuleV2AppServerGroups[] | cdktf.IResolvable) {
    this._appServerGroups.internalValue = value;
  }
  public resetAppServerGroups() {
    this._appServerGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServerGroupsInput() {
    return this._appServerGroups.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new PolicyAccessRuleV2ConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: PolicyAccessRuleV2Conditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // extranet_dto - computed: false, optional: true, required: false
  private _extranetDto = new PolicyAccessRuleV2ExtranetDtoList(this, "extranet_dto", false);
  public get extranetDto() {
    return this._extranetDto;
  }
  public putExtranetDto(value: PolicyAccessRuleV2ExtranetDto[] | cdktf.IResolvable) {
    this._extranetDto.internalValue = value;
  }
  public resetExtranetDto() {
    this._extranetDto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extranetDtoInput() {
    return this._extranetDto.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      custom_msg: cdktf.stringToTerraform(this._customMsg),
      description: cdktf.stringToTerraform(this._description),
      extranet_enabled: cdktf.booleanToTerraform(this._extranetEnabled),
      name: cdktf.stringToTerraform(this._name),
      operator: cdktf.stringToTerraform(this._operator),
      app_connector_groups: cdktf.listMapper(policyAccessRuleV2AppConnectorGroupsToTerraform, true)(this._appConnectorGroups.internalValue),
      app_server_groups: cdktf.listMapper(policyAccessRuleV2AppServerGroupsToTerraform, true)(this._appServerGroups.internalValue),
      conditions: cdktf.listMapper(policyAccessRuleV2ConditionsToTerraform, true)(this._conditions.internalValue),
      extranet_dto: cdktf.listMapper(policyAccessRuleV2ExtranetDtoToTerraform, true)(this._extranetDto.internalValue),
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
      custom_msg: {
        value: cdktf.stringToHclTerraform(this._customMsg),
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
      extranet_enabled: {
        value: cdktf.booleanToHclTerraform(this._extranetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operator: {
        value: cdktf.stringToHclTerraform(this._operator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_connector_groups: {
        value: cdktf.listMapperHcl(policyAccessRuleV2AppConnectorGroupsToHclTerraform, true)(this._appConnectorGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyAccessRuleV2AppConnectorGroupsList",
      },
      app_server_groups: {
        value: cdktf.listMapperHcl(policyAccessRuleV2AppServerGroupsToHclTerraform, true)(this._appServerGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyAccessRuleV2AppServerGroupsList",
      },
      conditions: {
        value: cdktf.listMapperHcl(policyAccessRuleV2ConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyAccessRuleV2ConditionsList",
      },
      extranet_dto: {
        value: cdktf.listMapperHcl(policyAccessRuleV2ExtranetDtoToHclTerraform, true)(this._extranetDto.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyAccessRuleV2ExtranetDtoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
