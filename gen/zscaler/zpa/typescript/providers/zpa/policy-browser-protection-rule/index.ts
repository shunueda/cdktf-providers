// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyBrowserProtectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  *   This is for providing the rule action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#action PolicyBrowserProtectionRule#action}
  */
  readonly action?: string;
  /**
  * This is the description of the access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#description PolicyBrowserProtectionRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#microtenant_id PolicyBrowserProtectionRule#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * This is the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#name PolicyBrowserProtectionRule#name}
  */
  readonly name: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#conditions PolicyBrowserProtectionRule#conditions}
  */
  readonly conditions?: PolicyBrowserProtectionRuleConditions[] | cdktf.IResolvable;
}
export interface PolicyBrowserProtectionRuleConditionsOperandsEntryValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#lhs PolicyBrowserProtectionRule#lhs}
  */
  readonly lhs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#rhs PolicyBrowserProtectionRule#rhs}
  */
  readonly rhs?: string;
}

export function policyBrowserProtectionRuleConditionsOperandsEntryValuesToTerraform(struct?: PolicyBrowserProtectionRuleConditionsOperandsEntryValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lhs: cdktf.stringToTerraform(struct!.lhs),
    rhs: cdktf.stringToTerraform(struct!.rhs),
  }
}


export function policyBrowserProtectionRuleConditionsOperandsEntryValuesToHclTerraform(struct?: PolicyBrowserProtectionRuleConditionsOperandsEntryValues | cdktf.IResolvable): any {
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

export class PolicyBrowserProtectionRuleConditionsOperandsEntryValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyBrowserProtectionRuleConditionsOperandsEntryValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyBrowserProtectionRuleConditionsOperandsEntryValues | cdktf.IResolvable | undefined) {
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

export class PolicyBrowserProtectionRuleConditionsOperandsEntryValuesList extends cdktf.ComplexList {
  public internalValue? : PolicyBrowserProtectionRuleConditionsOperandsEntryValues[] | cdktf.IResolvable

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
  public get(index: number): PolicyBrowserProtectionRuleConditionsOperandsEntryValuesOutputReference {
    return new PolicyBrowserProtectionRuleConditionsOperandsEntryValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyBrowserProtectionRuleConditionsOperands {
  /**
  *   This is for specifying the policy critiera.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#object_type PolicyBrowserProtectionRule#object_type}
  */
  readonly objectType?: string;
  /**
  * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#values PolicyBrowserProtectionRule#values}
  */
  readonly values?: string[];
  /**
  * entry_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#entry_values PolicyBrowserProtectionRule#entry_values}
  */
  readonly entryValues?: PolicyBrowserProtectionRuleConditionsOperandsEntryValues[] | cdktf.IResolvable;
}

export function policyBrowserProtectionRuleConditionsOperandsToTerraform(struct?: PolicyBrowserProtectionRuleConditionsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_type: cdktf.stringToTerraform(struct!.objectType),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    entry_values: cdktf.listMapper(policyBrowserProtectionRuleConditionsOperandsEntryValuesToTerraform, true)(struct!.entryValues),
  }
}


export function policyBrowserProtectionRuleConditionsOperandsToHclTerraform(struct?: PolicyBrowserProtectionRuleConditionsOperands | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(policyBrowserProtectionRuleConditionsOperandsEntryValuesToHclTerraform, true)(struct!.entryValues),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyBrowserProtectionRuleConditionsOperandsEntryValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyBrowserProtectionRuleConditionsOperandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyBrowserProtectionRuleConditionsOperands | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyBrowserProtectionRuleConditionsOperands | cdktf.IResolvable | undefined) {
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

  // object_type - computed: true, optional: true, required: false
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
  private _entryValues = new PolicyBrowserProtectionRuleConditionsOperandsEntryValuesList(this, "entry_values", true);
  public get entryValues() {
    return this._entryValues;
  }
  public putEntryValues(value: PolicyBrowserProtectionRuleConditionsOperandsEntryValues[] | cdktf.IResolvable) {
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

export class PolicyBrowserProtectionRuleConditionsOperandsList extends cdktf.ComplexList {
  public internalValue? : PolicyBrowserProtectionRuleConditionsOperands[] | cdktf.IResolvable

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
  public get(index: number): PolicyBrowserProtectionRuleConditionsOperandsOutputReference {
    return new PolicyBrowserProtectionRuleConditionsOperandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyBrowserProtectionRuleConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#operator PolicyBrowserProtectionRule#operator}
  */
  readonly operator?: string;
  /**
  * operands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#operands PolicyBrowserProtectionRule#operands}
  */
  readonly operands?: PolicyBrowserProtectionRuleConditionsOperands[] | cdktf.IResolvable;
}

export function policyBrowserProtectionRuleConditionsToTerraform(struct?: PolicyBrowserProtectionRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    operands: cdktf.listMapper(policyBrowserProtectionRuleConditionsOperandsToTerraform, true)(struct!.operands),
  }
}


export function policyBrowserProtectionRuleConditionsToHclTerraform(struct?: PolicyBrowserProtectionRuleConditions | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(policyBrowserProtectionRuleConditionsOperandsToHclTerraform, true)(struct!.operands),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyBrowserProtectionRuleConditionsOperandsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyBrowserProtectionRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyBrowserProtectionRuleConditions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyBrowserProtectionRuleConditions | cdktf.IResolvable | undefined) {
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
  private _operands = new PolicyBrowserProtectionRuleConditionsOperandsList(this, "operands", true);
  public get operands() {
    return this._operands;
  }
  public putOperands(value: PolicyBrowserProtectionRuleConditionsOperands[] | cdktf.IResolvable) {
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

export class PolicyBrowserProtectionRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyBrowserProtectionRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyBrowserProtectionRuleConditionsOutputReference {
    return new PolicyBrowserProtectionRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule zpa_policy_browser_protection_rule}
*/
export class PolicyBrowserProtectionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_policy_browser_protection_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyBrowserProtectionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyBrowserProtectionRule to import
  * @param importFromId The id of the existing PolicyBrowserProtectionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyBrowserProtectionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_policy_browser_protection_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/policy_browser_protection_rule zpa_policy_browser_protection_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyBrowserProtectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyBrowserProtectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_policy_browser_protection_rule',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.3',
        providerVersionConstraint: '4.3.3'
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

  // microtenant_id - computed: true, optional: true, required: false
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
  private _conditions = new PolicyBrowserProtectionRuleConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: PolicyBrowserProtectionRuleConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
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
      conditions: cdktf.listMapper(policyBrowserProtectionRuleConditionsToTerraform, true)(this._conditions.internalValue),
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
        value: cdktf.listMapperHcl(policyBrowserProtectionRuleConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyBrowserProtectionRuleConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
