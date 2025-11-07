// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RiskPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A single nested object that specifies the default result value for the risk policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#default_result RiskPolicy#default_result}
  */
  readonly defaultResult?: RiskPolicyDefaultResult;
  /**
  * The ID of the environment to configure the risk policy in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#environment_id RiskPolicy#environment_id}
  */
  readonly environmentId: string;
  /**
  * A set of IDs for the predictors to evaluate in this policy set.  If omitted, if this property is null, all of the licensed predictors are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#evaluated_predictors RiskPolicy#evaluated_predictors}
  */
  readonly evaluatedPredictors?: string[];
  /**
  * A string that specifies the unique, friendly name for this policy set. Valid characters consist of any Unicode letter, mark (such as, accent, umlaut), # (numeric), / (forward slash), . (period), ' (apostrophe), _ (underscore), space, or - (hyphen). Maximum size is 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#name RiskPolicy#name}
  */
  readonly name: string;
  /**
  * An ordered list of policy overrides to apply to the policy.  The ordering of the overrides is important as it determines the priority of the policy override during policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#overrides RiskPolicy#overrides}
  */
  readonly overrides?: RiskPolicyOverrides[] | cdktf.IResolvable;
  /**
  * An object that describes settings for a risk policy calculated by aggregating score values, with a final result being the sum of score values from each of the configured predictors.  Exactly one of the following must be defined: `policy_weights`, `policy_scores`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#policy_scores RiskPolicy#policy_scores}
  */
  readonly policyScores?: RiskPolicyPolicyScores;
  /**
  * An object that describes settings for a risk policy using a weighted average calculation, with a final result being a risk score between `0` and `10`.  Exactly one of the following must be defined: `policy_weights`, `policy_scores`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#policy_weights RiskPolicy#policy_weights}
  */
  readonly policyWeights?: RiskPolicyPolicyWeights;
}
export interface RiskPolicyDefaultResult {
  /**
  * The default result level.  Options are `LOW`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#level RiskPolicy#level}
  */
  readonly level: string;
}

export function riskPolicyDefaultResultToTerraform(struct?: RiskPolicyDefaultResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function riskPolicyDefaultResultToHclTerraform(struct?: RiskPolicyDefaultResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPolicyDefaultResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPolicyDefaultResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPolicyDefaultResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: true, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface RiskPolicyOverridesCondition {
  /**
  * Required when `equals` is set to `VALUE_COMPARISON`.  A string that specifies the compact name of the predictor to apply to the override condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#compact_name RiskPolicy#compact_name}
  */
  readonly compactName?: string;
  /**
  * Required when `equals` is set to `VALUE_COMPARISON`.  A string that specifies the value of the `predictor_reference_value` that must be matched for the override result to be applied to the policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#equals RiskPolicy#equals}
  */
  readonly equalTo?: string;
  /**
  * Required when `equals` is set to `IP_RANGE`.  A set of strings that specifies the CIDR ranges that should be evaluated against the value of the `predictor_reference_contains` attribute, that must be matched for the override result to be applied to the policy evaluation.  Values must be valid IPv4 or IPv6 CIDR ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#ip_range RiskPolicy#ip_range}
  */
  readonly ipRange?: string[];
  /**
  * A string that specifies the type of the override condition to evaluate.  Options are `IP_RANGE`, `VALUE_COMPARISON`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#type RiskPolicy#type}
  */
  readonly type: string;
}

export function riskPolicyOverridesConditionToTerraform(struct?: RiskPolicyOverridesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compact_name: cdktf.stringToTerraform(struct!.compactName),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    ip_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRange),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function riskPolicyOverridesConditionToHclTerraform(struct?: RiskPolicyOverridesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compact_name: {
      value: cdktf.stringToHclTerraform(struct!.compactName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRange),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPolicyOverridesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPolicyOverridesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compactName !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactName = this._compactName;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._ipRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPolicyOverridesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compactName = undefined;
      this._equals = undefined;
      this._ipRange = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compactName = value.compactName;
      this._equals = value.equalTo;
      this._ipRange = value.ipRange;
      this._type = value.type;
    }
  }

  // compact_name - computed: false, optional: true, required: false
  private _compactName?: string; 
  public get compactName() {
    return this.getStringAttribute('compact_name');
  }
  public set compactName(value: string) {
    this._compactName = value;
  }
  public resetCompactName() {
    this._compactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactNameInput() {
    return this._compactName;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange?: string[]; 
  public get ipRange() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_range'));
  }
  public set ipRange(value: string[]) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }

  // predictor_reference_contains - computed: true, optional: false, required: false
  public get predictorReferenceContains() {
    return this.getStringAttribute('predictor_reference_contains');
  }

  // predictor_reference_value - computed: true, optional: false, required: false
  public get predictorReferenceValue() {
    return this.getStringAttribute('predictor_reference_value');
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
}
export interface RiskPolicyOverridesResult {
  /**
  * A string that specifies the risk level that should be applied to the policy evalution result when the override condition is met.  Options are `HIGH`, `LOW`, `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#level RiskPolicy#level}
  */
  readonly level: string;
  /**
  * A string that specifies the type of the risk result should be applied to the policy evalution result when the override condition is met.  Options are `VALUE`.  Defaults to `VALUE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#type RiskPolicy#type}
  */
  readonly type?: string;
  /**
  * An administrator defined string value that is applied to the policy evaluation result when the override condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#value RiskPolicy#value}
  */
  readonly value?: string;
}

export function riskPolicyOverridesResultToTerraform(struct?: RiskPolicyOverridesResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function riskPolicyOverridesResultToHclTerraform(struct?: RiskPolicyOverridesResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPolicyOverridesResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPolicyOverridesResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPolicyOverridesResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RiskPolicyOverrides {
  /**
  * A single object that contains the conditions to evaluate that determine whether the override result will be applied to the risk policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#condition RiskPolicy#condition}
  */
  readonly condition: RiskPolicyOverridesCondition;
  /**
  * A string that represents the name of the overriding risk policy in the set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#name RiskPolicy#name}
  */
  readonly name?: string;
  /**
  * A single object that contains the risk result that should be applied to the policy evaluation result when the override condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#result RiskPolicy#result}
  */
  readonly result: RiskPolicyOverridesResult;
}

export function riskPolicyOverridesToTerraform(struct?: RiskPolicyOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: riskPolicyOverridesConditionToTerraform(struct!.condition),
    name: cdktf.stringToTerraform(struct!.name),
    result: riskPolicyOverridesResultToTerraform(struct!.result),
  }
}


export function riskPolicyOverridesToHclTerraform(struct?: RiskPolicyOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: riskPolicyOverridesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPolicyOverridesCondition",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result: {
      value: riskPolicyOverridesResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPolicyOverridesResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPolicyOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RiskPolicyOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPolicyOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._name = undefined;
      this._result.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._name = value.name;
      this._result.internalValue = value.result;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new RiskPolicyOverridesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: RiskPolicyOverridesCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // result - computed: false, optional: false, required: true
  private _result = new RiskPolicyOverridesResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: RiskPolicyOverridesResult) {
    this._result.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }
}

export class RiskPolicyOverridesList extends cdktf.ComplexList {
  public internalValue? : RiskPolicyOverrides[] | cdktf.IResolvable

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
  public get(index: number): RiskPolicyOverridesOutputReference {
    return new RiskPolicyOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RiskPolicyPolicyScoresPolicyThresholdHigh {
  /**
  * An integer that specifies the minimum score to use as the lower bound value of the policy threshold.  Maximum value allowed is `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#min_score RiskPolicy#min_score}
  */
  readonly minScore: number;
}

export function riskPolicyPolicyScoresPolicyThresholdHighToTerraform(struct?: RiskPolicyPolicyScoresPolicyThresholdHigh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_score: cdktf.numberToTerraform(struct!.minScore),
  }
}


export function riskPolicyPolicyScoresPolicyThresholdHighToHclTerraform(struct?: RiskPolicyPolicyScoresPolicyThresholdHigh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_score: {
      value: cdktf.numberToHclTerraform(struct!.minScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPolicyPolicyScoresPolicyThresholdHighOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPolicyPolicyScoresPolicyThresholdHigh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.minScore = this._minScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPolicyPolicyScoresPolicyThresholdHigh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minScore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minScore = value.minScore;
    }
  }

  // max_score - computed: true, optional: false, required: false
  public get maxScore() {
    return this.getNumberAttribute('max_score');
  }

  // min_score - computed: false, optional: false, required: true
  private _minScore?: number; 
  public get minScore() {
    return this.getNumberAttribute('min_score');
  }
  public set minScore(value: number) {
    this._minScore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minScoreInput() {
    return this._minScore;
  }
}
export interface RiskPolicyPolicyScoresPolicyThresholdMedium {
  /**
  * An integer that specifies the minimum score to use as the lower bound value of the policy threshold.  Maximum value allowed is `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#min_score RiskPolicy#min_score}
  */
  readonly minScore: number;
}

export function riskPolicyPolicyScoresPolicyThresholdMediumToTerraform(struct?: RiskPolicyPolicyScoresPolicyThresholdMedium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_score: cdktf.numberToTerraform(struct!.minScore),
  }
}


export function riskPolicyPolicyScoresPolicyThresholdMediumToHclTerraform(struct?: RiskPolicyPolicyScoresPolicyThresholdMedium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_score: {
      value: cdktf.numberToHclTerraform(struct!.minScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPolicyPolicyScoresPolicyThresholdMediumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPolicyPolicyScoresPolicyThresholdMedium | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.minScore = this._minScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPolicyPolicyScoresPolicyThresholdMedium | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minScore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minScore = value.minScore;
    }
  }

  // max_score - computed: true, optional: false, required: false
  public get maxScore() {
    return this.getNumberAttribute('max_score');
  }

  // min_score - computed: false, optional: false, required: true
  private _minScore?: number; 
  public get minScore() {
    return this.getNumberAttribute('min_score');
  }
  public set minScore(value: number) {
    this._minScore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minScoreInput() {
    return this._minScore;
  }
}
export interface RiskPolicyPolicyScoresPredictors {
  /**
  * A string that specifies the compact name of the predictor to apply to the risk policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#compact_name RiskPolicy#compact_name}
  */
  readonly compactName: string;
  /**
  * An integer that specifies the score to apply to the High risk / true outcome of the predictor, to apply to the overall risk calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#score RiskPolicy#score}
  */
  readonly score: number;
}

export function riskPolicyPolicyScoresPredictorsToTerraform(struct?: RiskPolicyPolicyScoresPredictors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compact_name: cdktf.stringToTerraform(struct!.compactName),
    score: cdktf.numberToTerraform(struct!.score),
  }
}


export function riskPolicyPolicyScoresPredictorsToHclTerraform(struct?: RiskPolicyPolicyScoresPredictors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compact_name: {
      value: cdktf.stringToHclTerraform(struct!.compactName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPolicyPolicyScoresPredictorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RiskPolicyPolicyScoresPredictors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compactName !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactName = this._compactName;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPolicyPolicyScoresPredictors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compactName = undefined;
      this._score = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compactName = value.compactName;
      this._score = value.score;
    }
  }

  // compact_name - computed: false, optional: false, required: true
  private _compactName?: string; 
  public get compactName() {
    return this.getStringAttribute('compact_name');
  }
  public set compactName(value: string) {
    this._compactName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compactNameInput() {
    return this._compactName;
  }

  // predictor_reference_value - computed: true, optional: false, required: false
  public get predictorReferenceValue() {
    return this.getStringAttribute('predictor_reference_value');
  }

  // score - computed: false, optional: false, required: true
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}

export class RiskPolicyPolicyScoresPredictorsList extends cdktf.ComplexList {
  public internalValue? : RiskPolicyPolicyScoresPredictors[] | cdktf.IResolvable

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
  public get(index: number): RiskPolicyPolicyScoresPredictorsOutputReference {
    return new RiskPolicyPolicyScoresPredictorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RiskPolicyPolicyScores {
  /**
  * An object that specifies the lower and upper bound threshold values that define the high risk outcome as a result of the policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#policy_threshold_high RiskPolicy#policy_threshold_high}
  */
  readonly policyThresholdHigh: RiskPolicyPolicyScoresPolicyThresholdHigh;
  /**
  * An object that specifies the lower and upper bound threshold values that define the medium risk outcome as a result of the policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#policy_threshold_medium RiskPolicy#policy_threshold_medium}
  */
  readonly policyThresholdMedium: RiskPolicyPolicyScoresPolicyThresholdMedium;
  /**
  * An object that describes a predictor to apply to the risk policy and its associated high risk / true outcome score to apply to the risk calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#predictors RiskPolicy#predictors}
  */
  readonly predictors: RiskPolicyPolicyScoresPredictors[] | cdktf.IResolvable;
}

export function riskPolicyPolicyScoresToTerraform(struct?: RiskPolicyPolicyScores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_threshold_high: riskPolicyPolicyScoresPolicyThresholdHighToTerraform(struct!.policyThresholdHigh),
    policy_threshold_medium: riskPolicyPolicyScoresPolicyThresholdMediumToTerraform(struct!.policyThresholdMedium),
    predictors: cdktf.listMapper(riskPolicyPolicyScoresPredictorsToTerraform, false)(struct!.predictors),
  }
}


export function riskPolicyPolicyScoresToHclTerraform(struct?: RiskPolicyPolicyScores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_threshold_high: {
      value: riskPolicyPolicyScoresPolicyThresholdHighToHclTerraform(struct!.policyThresholdHigh),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPolicyPolicyScoresPolicyThresholdHigh",
    },
    policy_threshold_medium: {
      value: riskPolicyPolicyScoresPolicyThresholdMediumToHclTerraform(struct!.policyThresholdMedium),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPolicyPolicyScoresPolicyThresholdMedium",
    },
    predictors: {
      value: cdktf.listMapperHcl(riskPolicyPolicyScoresPredictorsToHclTerraform, false)(struct!.predictors),
      isBlock: true,
      type: "set",
      storageClassType: "RiskPolicyPolicyScoresPredictorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPolicyPolicyScoresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPolicyPolicyScores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyThresholdHigh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyThresholdHigh = this._policyThresholdHigh?.internalValue;
    }
    if (this._policyThresholdMedium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyThresholdMedium = this._policyThresholdMedium?.internalValue;
    }
    if (this._predictors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictors = this._predictors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPolicyPolicyScores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyThresholdHigh.internalValue = undefined;
      this._policyThresholdMedium.internalValue = undefined;
      this._predictors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyThresholdHigh.internalValue = value.policyThresholdHigh;
      this._policyThresholdMedium.internalValue = value.policyThresholdMedium;
      this._predictors.internalValue = value.predictors;
    }
  }

  // policy_threshold_high - computed: false, optional: false, required: true
  private _policyThresholdHigh = new RiskPolicyPolicyScoresPolicyThresholdHighOutputReference(this, "policy_threshold_high");
  public get policyThresholdHigh() {
    return this._policyThresholdHigh;
  }
  public putPolicyThresholdHigh(value: RiskPolicyPolicyScoresPolicyThresholdHigh) {
    this._policyThresholdHigh.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyThresholdHighInput() {
    return this._policyThresholdHigh.internalValue;
  }

  // policy_threshold_medium - computed: false, optional: false, required: true
  private _policyThresholdMedium = new RiskPolicyPolicyScoresPolicyThresholdMediumOutputReference(this, "policy_threshold_medium");
  public get policyThresholdMedium() {
    return this._policyThresholdMedium;
  }
  public putPolicyThresholdMedium(value: RiskPolicyPolicyScoresPolicyThresholdMedium) {
    this._policyThresholdMedium.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyThresholdMediumInput() {
    return this._policyThresholdMedium.internalValue;
  }

  // predictors - computed: false, optional: false, required: true
  private _predictors = new RiskPolicyPolicyScoresPredictorsList(this, "predictors", true);
  public get predictors() {
    return this._predictors;
  }
  public putPredictors(value: RiskPolicyPolicyScoresPredictors[] | cdktf.IResolvable) {
    this._predictors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorsInput() {
    return this._predictors.internalValue;
  }
}
export interface RiskPolicyPolicyWeightsPolicyThresholdHigh {
  /**
  * An integer that specifies the minimum score to use as the lower bound value of the policy threshold.  For weights policies, the score values should be 10x the desired risk value in the console. For example, a risk score of `5` in the console should be entered as `50`.  The provided score must be exactly divisible by 10.  Maximum value allowed is `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#min_score RiskPolicy#min_score}
  */
  readonly minScore: number;
}

export function riskPolicyPolicyWeightsPolicyThresholdHighToTerraform(struct?: RiskPolicyPolicyWeightsPolicyThresholdHigh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_score: cdktf.numberToTerraform(struct!.minScore),
  }
}


export function riskPolicyPolicyWeightsPolicyThresholdHighToHclTerraform(struct?: RiskPolicyPolicyWeightsPolicyThresholdHigh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_score: {
      value: cdktf.numberToHclTerraform(struct!.minScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPolicyPolicyWeightsPolicyThresholdHighOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPolicyPolicyWeightsPolicyThresholdHigh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.minScore = this._minScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPolicyPolicyWeightsPolicyThresholdHigh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minScore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minScore = value.minScore;
    }
  }

  // max_score - computed: true, optional: false, required: false
  public get maxScore() {
    return this.getNumberAttribute('max_score');
  }

  // min_score - computed: false, optional: false, required: true
  private _minScore?: number; 
  public get minScore() {
    return this.getNumberAttribute('min_score');
  }
  public set minScore(value: number) {
    this._minScore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minScoreInput() {
    return this._minScore;
  }
}
export interface RiskPolicyPolicyWeightsPolicyThresholdMedium {
  /**
  * An integer that specifies the minimum score to use as the lower bound value of the policy threshold.  For weights policies, the score values should be 10x the desired risk value in the console. For example, a risk score of `5` in the console should be entered as `50`.  The provided score must be exactly divisible by 10.  Maximum value allowed is `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#min_score RiskPolicy#min_score}
  */
  readonly minScore: number;
}

export function riskPolicyPolicyWeightsPolicyThresholdMediumToTerraform(struct?: RiskPolicyPolicyWeightsPolicyThresholdMedium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_score: cdktf.numberToTerraform(struct!.minScore),
  }
}


export function riskPolicyPolicyWeightsPolicyThresholdMediumToHclTerraform(struct?: RiskPolicyPolicyWeightsPolicyThresholdMedium | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_score: {
      value: cdktf.numberToHclTerraform(struct!.minScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPolicyPolicyWeightsPolicyThresholdMediumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPolicyPolicyWeightsPolicyThresholdMedium | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.minScore = this._minScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPolicyPolicyWeightsPolicyThresholdMedium | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minScore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minScore = value.minScore;
    }
  }

  // max_score - computed: true, optional: false, required: false
  public get maxScore() {
    return this.getNumberAttribute('max_score');
  }

  // min_score - computed: false, optional: false, required: true
  private _minScore?: number; 
  public get minScore() {
    return this.getNumberAttribute('min_score');
  }
  public set minScore(value: number) {
    this._minScore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minScoreInput() {
    return this._minScore;
  }
}
export interface RiskPolicyPolicyWeightsPredictors {
  /**
  * A string that specifies the compact name of the predictor to apply to the risk policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#compact_name RiskPolicy#compact_name}
  */
  readonly compactName: string;
  /**
  * An integer that specifies the weight to apply to the predictor when calculating the overall risk score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#weight RiskPolicy#weight}
  */
  readonly weight: number;
}

export function riskPolicyPolicyWeightsPredictorsToTerraform(struct?: RiskPolicyPolicyWeightsPredictors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compact_name: cdktf.stringToTerraform(struct!.compactName),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function riskPolicyPolicyWeightsPredictorsToHclTerraform(struct?: RiskPolicyPolicyWeightsPredictors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compact_name: {
      value: cdktf.stringToHclTerraform(struct!.compactName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPolicyPolicyWeightsPredictorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RiskPolicyPolicyWeightsPredictors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compactName !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactName = this._compactName;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPolicyPolicyWeightsPredictors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compactName = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compactName = value.compactName;
      this._weight = value.weight;
    }
  }

  // compact_name - computed: false, optional: false, required: true
  private _compactName?: string; 
  public get compactName() {
    return this.getStringAttribute('compact_name');
  }
  public set compactName(value: string) {
    this._compactName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compactNameInput() {
    return this._compactName;
  }

  // predictor_reference_value - computed: true, optional: false, required: false
  public get predictorReferenceValue() {
    return this.getStringAttribute('predictor_reference_value');
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class RiskPolicyPolicyWeightsPredictorsList extends cdktf.ComplexList {
  public internalValue? : RiskPolicyPolicyWeightsPredictors[] | cdktf.IResolvable

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
  public get(index: number): RiskPolicyPolicyWeightsPredictorsOutputReference {
    return new RiskPolicyPolicyWeightsPredictorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RiskPolicyPolicyWeights {
  /**
  * An object that specifies the lower and upper bound threshold score values that define the high risk outcome as a result of the policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#policy_threshold_high RiskPolicy#policy_threshold_high}
  */
  readonly policyThresholdHigh: RiskPolicyPolicyWeightsPolicyThresholdHigh;
  /**
  * An object that specifies the lower and upper bound threshold score values that define the medium risk outcome as a result of the policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#policy_threshold_medium RiskPolicy#policy_threshold_medium}
  */
  readonly policyThresholdMedium: RiskPolicyPolicyWeightsPolicyThresholdMedium;
  /**
  * An object that describes a predictor to apply to the risk policy and its associated weight value for the overall weighted average risk calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#predictors RiskPolicy#predictors}
  */
  readonly predictors: RiskPolicyPolicyWeightsPredictors[] | cdktf.IResolvable;
}

export function riskPolicyPolicyWeightsToTerraform(struct?: RiskPolicyPolicyWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_threshold_high: riskPolicyPolicyWeightsPolicyThresholdHighToTerraform(struct!.policyThresholdHigh),
    policy_threshold_medium: riskPolicyPolicyWeightsPolicyThresholdMediumToTerraform(struct!.policyThresholdMedium),
    predictors: cdktf.listMapper(riskPolicyPolicyWeightsPredictorsToTerraform, false)(struct!.predictors),
  }
}


export function riskPolicyPolicyWeightsToHclTerraform(struct?: RiskPolicyPolicyWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_threshold_high: {
      value: riskPolicyPolicyWeightsPolicyThresholdHighToHclTerraform(struct!.policyThresholdHigh),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPolicyPolicyWeightsPolicyThresholdHigh",
    },
    policy_threshold_medium: {
      value: riskPolicyPolicyWeightsPolicyThresholdMediumToHclTerraform(struct!.policyThresholdMedium),
      isBlock: true,
      type: "struct",
      storageClassType: "RiskPolicyPolicyWeightsPolicyThresholdMedium",
    },
    predictors: {
      value: cdktf.listMapperHcl(riskPolicyPolicyWeightsPredictorsToHclTerraform, false)(struct!.predictors),
      isBlock: true,
      type: "set",
      storageClassType: "RiskPolicyPolicyWeightsPredictorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RiskPolicyPolicyWeightsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RiskPolicyPolicyWeights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyThresholdHigh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyThresholdHigh = this._policyThresholdHigh?.internalValue;
    }
    if (this._policyThresholdMedium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyThresholdMedium = this._policyThresholdMedium?.internalValue;
    }
    if (this._predictors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictors = this._predictors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RiskPolicyPolicyWeights | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyThresholdHigh.internalValue = undefined;
      this._policyThresholdMedium.internalValue = undefined;
      this._predictors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyThresholdHigh.internalValue = value.policyThresholdHigh;
      this._policyThresholdMedium.internalValue = value.policyThresholdMedium;
      this._predictors.internalValue = value.predictors;
    }
  }

  // policy_threshold_high - computed: false, optional: false, required: true
  private _policyThresholdHigh = new RiskPolicyPolicyWeightsPolicyThresholdHighOutputReference(this, "policy_threshold_high");
  public get policyThresholdHigh() {
    return this._policyThresholdHigh;
  }
  public putPolicyThresholdHigh(value: RiskPolicyPolicyWeightsPolicyThresholdHigh) {
    this._policyThresholdHigh.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyThresholdHighInput() {
    return this._policyThresholdHigh.internalValue;
  }

  // policy_threshold_medium - computed: false, optional: false, required: true
  private _policyThresholdMedium = new RiskPolicyPolicyWeightsPolicyThresholdMediumOutputReference(this, "policy_threshold_medium");
  public get policyThresholdMedium() {
    return this._policyThresholdMedium;
  }
  public putPolicyThresholdMedium(value: RiskPolicyPolicyWeightsPolicyThresholdMedium) {
    this._policyThresholdMedium.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyThresholdMediumInput() {
    return this._policyThresholdMedium.internalValue;
  }

  // predictors - computed: false, optional: false, required: true
  private _predictors = new RiskPolicyPolicyWeightsPredictorsList(this, "predictors", true);
  public get predictors() {
    return this._predictors;
  }
  public putPredictors(value: RiskPolicyPolicyWeightsPredictors[] | cdktf.IResolvable) {
    this._predictors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predictorsInput() {
    return this._predictors.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy pingone_risk_policy}
*/
export class RiskPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_risk_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RiskPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RiskPolicy to import
  * @param importFromId The id of the existing RiskPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RiskPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_risk_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/risk_policy pingone_risk_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RiskPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: RiskPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_risk_policy',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultResult.internalValue = config.defaultResult;
    this._environmentId = config.environmentId;
    this._evaluatedPredictors = config.evaluatedPredictors;
    this._name = config.name;
    this._overrides.internalValue = config.overrides;
    this._policyScores.internalValue = config.policyScores;
    this._policyWeights.internalValue = config.policyWeights;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // default_result - computed: true, optional: true, required: false
  private _defaultResult = new RiskPolicyDefaultResultOutputReference(this, "default_result");
  public get defaultResult() {
    return this._defaultResult;
  }
  public putDefaultResult(value: RiskPolicyDefaultResult) {
    this._defaultResult.internalValue = value;
  }
  public resetDefaultResult() {
    this._defaultResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResultInput() {
    return this._defaultResult.internalValue;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // evaluated_predictors - computed: true, optional: true, required: false
  private _evaluatedPredictors?: string[]; 
  public get evaluatedPredictors() {
    return cdktf.Fn.tolist(this.getListAttribute('evaluated_predictors'));
  }
  public set evaluatedPredictors(value: string[]) {
    this._evaluatedPredictors = value;
  }
  public resetEvaluatedPredictors() {
    this._evaluatedPredictors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatedPredictorsInput() {
    return this._evaluatedPredictors;
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

  // overrides - computed: false, optional: true, required: false
  private _overrides = new RiskPolicyOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: RiskPolicyOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // policy_scores - computed: false, optional: true, required: false
  private _policyScores = new RiskPolicyPolicyScoresOutputReference(this, "policy_scores");
  public get policyScores() {
    return this._policyScores;
  }
  public putPolicyScores(value: RiskPolicyPolicyScores) {
    this._policyScores.internalValue = value;
  }
  public resetPolicyScores() {
    this._policyScores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyScoresInput() {
    return this._policyScores.internalValue;
  }

  // policy_weights - computed: false, optional: true, required: false
  private _policyWeights = new RiskPolicyPolicyWeightsOutputReference(this, "policy_weights");
  public get policyWeights() {
    return this._policyWeights;
  }
  public putPolicyWeights(value: RiskPolicyPolicyWeights) {
    this._policyWeights.internalValue = value;
  }
  public resetPolicyWeights() {
    this._policyWeights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyWeightsInput() {
    return this._policyWeights.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_result: riskPolicyDefaultResultToTerraform(this._defaultResult.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      evaluated_predictors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._evaluatedPredictors),
      name: cdktf.stringToTerraform(this._name),
      overrides: cdktf.listMapper(riskPolicyOverridesToTerraform, false)(this._overrides.internalValue),
      policy_scores: riskPolicyPolicyScoresToTerraform(this._policyScores.internalValue),
      policy_weights: riskPolicyPolicyWeightsToTerraform(this._policyWeights.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_result: {
        value: riskPolicyDefaultResultToHclTerraform(this._defaultResult.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPolicyDefaultResult",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluated_predictors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._evaluatedPredictors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overrides: {
        value: cdktf.listMapperHcl(riskPolicyOverridesToHclTerraform, false)(this._overrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RiskPolicyOverridesList",
      },
      policy_scores: {
        value: riskPolicyPolicyScoresToHclTerraform(this._policyScores.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPolicyPolicyScores",
      },
      policy_weights: {
        value: riskPolicyPolicyWeightsToHclTerraform(this._policyWeights.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RiskPolicyPolicyWeights",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
