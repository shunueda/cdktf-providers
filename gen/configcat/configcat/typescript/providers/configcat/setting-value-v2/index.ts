// https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SettingValueV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#environment_id SettingValueV2#environment_id}
  */
  readonly environmentId: string;
  /**
  * The main purpose of this resource to provide an initial value for the Feature Flag/Setting.  
  * 
  * The `init_only` argument's default value is `true`. Meaning that the Feature Flag or Setting's **value will be only be applied once** during resource creation. If someone modifies the value on the [ConfigCat Dashboard](https://app.configcat.com) those modifications will **not be overwritten** by the Terraform script.
  * 
  * If you want to fully manage the Feature Flag/Setting's value from Terraform, set `init_only` argument to `false`. After setting the`init_only` argument to `false` each terraform run will update the Feature Flag/Setting's value to the state provided in Terraform.  
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#init_only SettingValueV2#init_only}
  */
  readonly initOnly?: boolean | cdktf.IResolvable;
  /**
  * If the Product's "Mandatory notes" preference is turned on for the Environment the Mandatory note must be passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#mandatory_notes SettingValueV2#mandatory_notes}
  */
  readonly mandatoryNotes?: string;
  /**
  * The user attribute used for percentage evaluation. If not set, it defaults to the Identifier user object attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#percentage_evaluation_attribute SettingValueV2#percentage_evaluation_attribute}
  */
  readonly percentageEvaluationAttribute?: string;
  /**
  * The ID of the Feature Flag or Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#setting_id SettingValueV2#setting_id}
  */
  readonly settingId: string;
  /**
  * The targeting rules of the Feature Flag or Setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#targeting_rules SettingValueV2#targeting_rules}
  */
  readonly targetingRules?: SettingValueV2TargetingRules[] | cdktf.IResolvable;
  /**
  * Represents the value of a Feature Flag or Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#value SettingValueV2#value}
  */
  readonly value: SettingValueV2Value;
}
export interface SettingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValue {
  /**
  * The boolean representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#bool_value SettingValueV2#bool_value}
  */
  readonly boolValue?: boolean | cdktf.IResolvable;
  /**
  * The decimal number representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#double_value SettingValueV2#double_value}
  */
  readonly doubleValue?: number;
  /**
  * The whole number representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#int_value SettingValueV2#int_value}
  */
  readonly intValue?: number;
  /**
  * The string representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#string_value SettingValueV2#string_value}
  */
  readonly stringValue?: string;
}

export function settingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValueToTerraform(struct?: SettingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktf.booleanToTerraform(struct!.boolValue),
    double_value: cdktf.numberToTerraform(struct!.doubleValue),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function settingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValueToHclTerraform(struct?: SettingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_value: {
      value: cdktf.booleanToHclTerraform(struct!.boolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    double_value: {
      value: cdktf.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SettingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolValue = undefined;
      this._doubleValue = undefined;
      this._intValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolValue = value.boolValue;
      this._doubleValue = value.doubleValue;
      this._intValue = value.intValue;
      this._stringValue = value.stringValue;
    }
  }

  // bool_value - computed: false, optional: true, required: false
  private _boolValue?: boolean | cdktf.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktf.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // int_value - computed: false, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface SettingValueV2TargetingRulesConditionsPrerequisiteFlagCondition {
  /**
  * Prerequisite flag comparison operator used during the evaluation process. Possible values: `equals`,`doesNotEqual`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#comparator SettingValueV2#comparator}
  */
  readonly comparator: string;
  /**
  * Represents the value of a Feature Flag or Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#comparison_value SettingValueV2#comparison_value}
  */
  readonly comparisonValue: SettingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValue;
  /**
  * The prerequisite flag's identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#prerequisite_setting_id SettingValueV2#prerequisite_setting_id}
  */
  readonly prerequisiteSettingId: string;
}

export function settingValueV2TargetingRulesConditionsPrerequisiteFlagConditionToTerraform(struct?: SettingValueV2TargetingRulesConditionsPrerequisiteFlagCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    comparison_value: settingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValueToTerraform(struct!.comparisonValue),
    prerequisite_setting_id: cdktf.stringToTerraform(struct!.prerequisiteSettingId),
  }
}


export function settingValueV2TargetingRulesConditionsPrerequisiteFlagConditionToHclTerraform(struct?: SettingValueV2TargetingRulesConditionsPrerequisiteFlagCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison_value: {
      value: settingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValueToHclTerraform(struct!.comparisonValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SettingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValue",
    },
    prerequisite_setting_id: {
      value: cdktf.stringToHclTerraform(struct!.prerequisiteSettingId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValueV2TargetingRulesConditionsPrerequisiteFlagConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SettingValueV2TargetingRulesConditionsPrerequisiteFlagCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._comparisonValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonValue = this._comparisonValue?.internalValue;
    }
    if (this._prerequisiteSettingId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prerequisiteSettingId = this._prerequisiteSettingId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueV2TargetingRulesConditionsPrerequisiteFlagCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._comparisonValue.internalValue = undefined;
      this._prerequisiteSettingId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._comparisonValue.internalValue = value.comparisonValue;
      this._prerequisiteSettingId = value.prerequisiteSettingId;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // comparison_value - computed: false, optional: false, required: true
  private _comparisonValue = new SettingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValueOutputReference(this, "comparison_value");
  public get comparisonValue() {
    return this._comparisonValue;
  }
  public putComparisonValue(value: SettingValueV2TargetingRulesConditionsPrerequisiteFlagConditionComparisonValue) {
    this._comparisonValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonValueInput() {
    return this._comparisonValue.internalValue;
  }

  // prerequisite_setting_id - computed: false, optional: false, required: true
  private _prerequisiteSettingId?: string; 
  public get prerequisiteSettingId() {
    return this.getStringAttribute('prerequisite_setting_id');
  }
  public set prerequisiteSettingId(value: string) {
    this._prerequisiteSettingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prerequisiteSettingIdInput() {
    return this._prerequisiteSettingId;
  }
}
export interface SettingValueV2TargetingRulesConditionsSegmentCondition {
  /**
  * The segment comparison operator used during the evaluation process. Possible values: `isIn`,`isNotIn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#comparator SettingValueV2#comparator}
  */
  readonly comparator: string;
  /**
  * The segment's identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#segment_id SettingValueV2#segment_id}
  */
  readonly segmentId: string;
}

export function settingValueV2TargetingRulesConditionsSegmentConditionToTerraform(struct?: SettingValueV2TargetingRulesConditionsSegmentCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
  }
}


export function settingValueV2TargetingRulesConditionsSegmentConditionToHclTerraform(struct?: SettingValueV2TargetingRulesConditionsSegmentCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValueV2TargetingRulesConditionsSegmentConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SettingValueV2TargetingRulesConditionsSegmentCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueV2TargetingRulesConditionsSegmentCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._segmentId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._segmentId = value.segmentId;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }
}
export interface SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValues {
  /**
  * An optional hint for the comparison value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#hint SettingValueV2#hint}
  */
  readonly hint?: string;
  /**
  * The actual comparison value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#value SettingValueV2#value}
  */
  readonly value: string;
}

export function settingValueV2TargetingRulesConditionsUserConditionComparisonValueListValuesToTerraform(struct?: SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hint: cdktf.stringToTerraform(struct!.hint),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function settingValueV2TargetingRulesConditionsUserConditionComparisonValueListValuesToHclTerraform(struct?: SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hint: {
      value: cdktf.stringToHclTerraform(struct!.hint),
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

export class SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hint !== undefined) {
      hasAnyValues = true;
      internalValueResult.hint = this._hint;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hint = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hint = value.hint;
      this._value = value.value;
    }
  }

  // hint - computed: false, optional: true, required: false
  private _hint?: string; 
  public get hint() {
    return this.getStringAttribute('hint');
  }
  public set hint(value: string) {
    this._hint = value;
  }
  public resetHint() {
    this._hint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hintInput() {
    return this._hint;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValuesList extends cdktf.ComplexList {
  public internalValue? : SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValues[] | cdktf.IResolvable

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
  public get(index: number): SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValuesOutputReference {
    return new SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SettingValueV2TargetingRulesConditionsUserConditionComparisonValue {
  /**
  * The number representation of the comparison value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#double_value SettingValueV2#double_value}
  */
  readonly doubleValue?: number;
  /**
  * The list representation of the comparison value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#list_values SettingValueV2#list_values}
  */
  readonly listValues?: SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValues[] | cdktf.IResolvable;
  /**
  * The string representation of the comparison value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#string_value SettingValueV2#string_value}
  */
  readonly stringValue?: string;
}

export function settingValueV2TargetingRulesConditionsUserConditionComparisonValueToTerraform(struct?: SettingValueV2TargetingRulesConditionsUserConditionComparisonValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_value: cdktf.numberToTerraform(struct!.doubleValue),
    list_values: cdktf.listMapper(settingValueV2TargetingRulesConditionsUserConditionComparisonValueListValuesToTerraform, false)(struct!.listValues),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function settingValueV2TargetingRulesConditionsUserConditionComparisonValueToHclTerraform(struct?: SettingValueV2TargetingRulesConditionsUserConditionComparisonValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_value: {
      value: cdktf.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    list_values: {
      value: cdktf.listMapperHcl(settingValueV2TargetingRulesConditionsUserConditionComparisonValueListValuesToHclTerraform, false)(struct!.listValues),
      isBlock: true,
      type: "list",
      storageClassType: "SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValuesList",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValueV2TargetingRulesConditionsUserConditionComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SettingValueV2TargetingRulesConditionsUserConditionComparisonValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._listValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listValues = this._listValues?.internalValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueV2TargetingRulesConditionsUserConditionComparisonValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleValue = undefined;
      this._listValues.internalValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleValue = value.doubleValue;
      this._listValues.internalValue = value.listValues;
      this._stringValue = value.stringValue;
    }
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // list_values - computed: false, optional: true, required: false
  private _listValues = new SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValuesList(this, "list_values", false);
  public get listValues() {
    return this._listValues;
  }
  public putListValues(value: SettingValueV2TargetingRulesConditionsUserConditionComparisonValueListValues[] | cdktf.IResolvable) {
    this._listValues.internalValue = value;
  }
  public resetListValues() {
    this._listValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listValuesInput() {
    return this._listValues.internalValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface SettingValueV2TargetingRulesConditionsUserCondition {
  /**
  * The comparison operator which defines the relation between the comparison attribute and the comparison value. For possible values check the [documentation](https://api.configcat.com/docs/index.html#tag/Feature-Flag-and-Setting-values-V2/operation/replace-setting-value-v2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#comparator SettingValueV2#comparator}
  */
  readonly comparator: string;
  /**
  * The User Object attribute that the condition is based on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#comparison_attribute SettingValueV2#comparison_attribute}
  */
  readonly comparisonAttribute: string;
  /**
  * The value that the user object's attribute is compared to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#comparison_value SettingValueV2#comparison_value}
  */
  readonly comparisonValue: SettingValueV2TargetingRulesConditionsUserConditionComparisonValue;
}

export function settingValueV2TargetingRulesConditionsUserConditionToTerraform(struct?: SettingValueV2TargetingRulesConditionsUserCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    comparison_attribute: cdktf.stringToTerraform(struct!.comparisonAttribute),
    comparison_value: settingValueV2TargetingRulesConditionsUserConditionComparisonValueToTerraform(struct!.comparisonValue),
  }
}


export function settingValueV2TargetingRulesConditionsUserConditionToHclTerraform(struct?: SettingValueV2TargetingRulesConditionsUserCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison_attribute: {
      value: cdktf.stringToHclTerraform(struct!.comparisonAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison_value: {
      value: settingValueV2TargetingRulesConditionsUserConditionComparisonValueToHclTerraform(struct!.comparisonValue),
      isBlock: true,
      type: "struct",
      storageClassType: "SettingValueV2TargetingRulesConditionsUserConditionComparisonValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValueV2TargetingRulesConditionsUserConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SettingValueV2TargetingRulesConditionsUserCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._comparisonAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonAttribute = this._comparisonAttribute;
    }
    if (this._comparisonValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonValue = this._comparisonValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueV2TargetingRulesConditionsUserCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._comparisonAttribute = undefined;
      this._comparisonValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._comparisonAttribute = value.comparisonAttribute;
      this._comparisonValue.internalValue = value.comparisonValue;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // comparison_attribute - computed: false, optional: false, required: true
  private _comparisonAttribute?: string; 
  public get comparisonAttribute() {
    return this.getStringAttribute('comparison_attribute');
  }
  public set comparisonAttribute(value: string) {
    this._comparisonAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonAttributeInput() {
    return this._comparisonAttribute;
  }

  // comparison_value - computed: false, optional: false, required: true
  private _comparisonValue = new SettingValueV2TargetingRulesConditionsUserConditionComparisonValueOutputReference(this, "comparison_value");
  public get comparisonValue() {
    return this._comparisonValue;
  }
  public putComparisonValue(value: SettingValueV2TargetingRulesConditionsUserConditionComparisonValue) {
    this._comparisonValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonValueInput() {
    return this._comparisonValue.internalValue;
  }
}
export interface SettingValueV2TargetingRulesConditions {
  /**
  * Describes a condition that is based on a prerequisite flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#prerequisite_flag_condition SettingValueV2#prerequisite_flag_condition}
  */
  readonly prerequisiteFlagCondition?: SettingValueV2TargetingRulesConditionsPrerequisiteFlagCondition;
  /**
  * Describes a condition that is based on a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#segment_condition SettingValueV2#segment_condition}
  */
  readonly segmentCondition?: SettingValueV2TargetingRulesConditionsSegmentCondition;
  /**
  * Describes a condition that is based on user attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#user_condition SettingValueV2#user_condition}
  */
  readonly userCondition?: SettingValueV2TargetingRulesConditionsUserCondition;
}

export function settingValueV2TargetingRulesConditionsToTerraform(struct?: SettingValueV2TargetingRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prerequisite_flag_condition: settingValueV2TargetingRulesConditionsPrerequisiteFlagConditionToTerraform(struct!.prerequisiteFlagCondition),
    segment_condition: settingValueV2TargetingRulesConditionsSegmentConditionToTerraform(struct!.segmentCondition),
    user_condition: settingValueV2TargetingRulesConditionsUserConditionToTerraform(struct!.userCondition),
  }
}


export function settingValueV2TargetingRulesConditionsToHclTerraform(struct?: SettingValueV2TargetingRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prerequisite_flag_condition: {
      value: settingValueV2TargetingRulesConditionsPrerequisiteFlagConditionToHclTerraform(struct!.prerequisiteFlagCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "SettingValueV2TargetingRulesConditionsPrerequisiteFlagCondition",
    },
    segment_condition: {
      value: settingValueV2TargetingRulesConditionsSegmentConditionToHclTerraform(struct!.segmentCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "SettingValueV2TargetingRulesConditionsSegmentCondition",
    },
    user_condition: {
      value: settingValueV2TargetingRulesConditionsUserConditionToHclTerraform(struct!.userCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "SettingValueV2TargetingRulesConditionsUserCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValueV2TargetingRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SettingValueV2TargetingRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prerequisiteFlagCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prerequisiteFlagCondition = this._prerequisiteFlagCondition?.internalValue;
    }
    if (this._segmentCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentCondition = this._segmentCondition?.internalValue;
    }
    if (this._userCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCondition = this._userCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueV2TargetingRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prerequisiteFlagCondition.internalValue = undefined;
      this._segmentCondition.internalValue = undefined;
      this._userCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prerequisiteFlagCondition.internalValue = value.prerequisiteFlagCondition;
      this._segmentCondition.internalValue = value.segmentCondition;
      this._userCondition.internalValue = value.userCondition;
    }
  }

  // prerequisite_flag_condition - computed: false, optional: true, required: false
  private _prerequisiteFlagCondition = new SettingValueV2TargetingRulesConditionsPrerequisiteFlagConditionOutputReference(this, "prerequisite_flag_condition");
  public get prerequisiteFlagCondition() {
    return this._prerequisiteFlagCondition;
  }
  public putPrerequisiteFlagCondition(value: SettingValueV2TargetingRulesConditionsPrerequisiteFlagCondition) {
    this._prerequisiteFlagCondition.internalValue = value;
  }
  public resetPrerequisiteFlagCondition() {
    this._prerequisiteFlagCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prerequisiteFlagConditionInput() {
    return this._prerequisiteFlagCondition.internalValue;
  }

  // segment_condition - computed: false, optional: true, required: false
  private _segmentCondition = new SettingValueV2TargetingRulesConditionsSegmentConditionOutputReference(this, "segment_condition");
  public get segmentCondition() {
    return this._segmentCondition;
  }
  public putSegmentCondition(value: SettingValueV2TargetingRulesConditionsSegmentCondition) {
    this._segmentCondition.internalValue = value;
  }
  public resetSegmentCondition() {
    this._segmentCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentConditionInput() {
    return this._segmentCondition.internalValue;
  }

  // user_condition - computed: false, optional: true, required: false
  private _userCondition = new SettingValueV2TargetingRulesConditionsUserConditionOutputReference(this, "user_condition");
  public get userCondition() {
    return this._userCondition;
  }
  public putUserCondition(value: SettingValueV2TargetingRulesConditionsUserCondition) {
    this._userCondition.internalValue = value;
  }
  public resetUserCondition() {
    this._userCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userConditionInput() {
    return this._userCondition.internalValue;
  }
}

export class SettingValueV2TargetingRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : SettingValueV2TargetingRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): SettingValueV2TargetingRulesConditionsOutputReference {
    return new SettingValueV2TargetingRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SettingValueV2TargetingRulesPercentageOptionsValue {
  /**
  * The boolean representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#bool_value SettingValueV2#bool_value}
  */
  readonly boolValue?: boolean | cdktf.IResolvable;
  /**
  * The decimal number representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#double_value SettingValueV2#double_value}
  */
  readonly doubleValue?: number;
  /**
  * The whole number representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#int_value SettingValueV2#int_value}
  */
  readonly intValue?: number;
  /**
  * The string representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#string_value SettingValueV2#string_value}
  */
  readonly stringValue?: string;
}

export function settingValueV2TargetingRulesPercentageOptionsValueToTerraform(struct?: SettingValueV2TargetingRulesPercentageOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktf.booleanToTerraform(struct!.boolValue),
    double_value: cdktf.numberToTerraform(struct!.doubleValue),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function settingValueV2TargetingRulesPercentageOptionsValueToHclTerraform(struct?: SettingValueV2TargetingRulesPercentageOptionsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_value: {
      value: cdktf.booleanToHclTerraform(struct!.boolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    double_value: {
      value: cdktf.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValueV2TargetingRulesPercentageOptionsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SettingValueV2TargetingRulesPercentageOptionsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueV2TargetingRulesPercentageOptionsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolValue = undefined;
      this._doubleValue = undefined;
      this._intValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolValue = value.boolValue;
      this._doubleValue = value.doubleValue;
      this._intValue = value.intValue;
      this._stringValue = value.stringValue;
    }
  }

  // bool_value - computed: false, optional: true, required: false
  private _boolValue?: boolean | cdktf.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktf.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // int_value - computed: false, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface SettingValueV2TargetingRulesPercentageOptions {
  /**
  * A number between 0 and 100 that represents a randomly allocated fraction of the users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#percentage SettingValueV2#percentage}
  */
  readonly percentage: number;
  /**
  * Represents the value of a Feature Flag or Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#value SettingValueV2#value}
  */
  readonly value: SettingValueV2TargetingRulesPercentageOptionsValue;
}

export function settingValueV2TargetingRulesPercentageOptionsToTerraform(struct?: SettingValueV2TargetingRulesPercentageOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    value: settingValueV2TargetingRulesPercentageOptionsValueToTerraform(struct!.value),
  }
}


export function settingValueV2TargetingRulesPercentageOptionsToHclTerraform(struct?: SettingValueV2TargetingRulesPercentageOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: settingValueV2TargetingRulesPercentageOptionsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SettingValueV2TargetingRulesPercentageOptionsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValueV2TargetingRulesPercentageOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SettingValueV2TargetingRulesPercentageOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueV2TargetingRulesPercentageOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentage = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentage = value.percentage;
      this._value.internalValue = value.value;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SettingValueV2TargetingRulesPercentageOptionsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SettingValueV2TargetingRulesPercentageOptionsValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SettingValueV2TargetingRulesPercentageOptionsList extends cdktf.ComplexList {
  public internalValue? : SettingValueV2TargetingRulesPercentageOptions[] | cdktf.IResolvable

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
  public get(index: number): SettingValueV2TargetingRulesPercentageOptionsOutputReference {
    return new SettingValueV2TargetingRulesPercentageOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SettingValueV2TargetingRulesValue {
  /**
  * The boolean representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#bool_value SettingValueV2#bool_value}
  */
  readonly boolValue?: boolean | cdktf.IResolvable;
  /**
  * The decimal number representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#double_value SettingValueV2#double_value}
  */
  readonly doubleValue?: number;
  /**
  * The whole number representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#int_value SettingValueV2#int_value}
  */
  readonly intValue?: number;
  /**
  * The string representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#string_value SettingValueV2#string_value}
  */
  readonly stringValue?: string;
}

export function settingValueV2TargetingRulesValueToTerraform(struct?: SettingValueV2TargetingRulesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktf.booleanToTerraform(struct!.boolValue),
    double_value: cdktf.numberToTerraform(struct!.doubleValue),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function settingValueV2TargetingRulesValueToHclTerraform(struct?: SettingValueV2TargetingRulesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_value: {
      value: cdktf.booleanToHclTerraform(struct!.boolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    double_value: {
      value: cdktf.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValueV2TargetingRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SettingValueV2TargetingRulesValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueV2TargetingRulesValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolValue = undefined;
      this._doubleValue = undefined;
      this._intValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolValue = value.boolValue;
      this._doubleValue = value.doubleValue;
      this._intValue = value.intValue;
      this._stringValue = value.stringValue;
    }
  }

  // bool_value - computed: false, optional: true, required: false
  private _boolValue?: boolean | cdktf.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktf.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // int_value - computed: false, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface SettingValueV2TargetingRules {
  /**
  * The conditions that are combined with the AND logical operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#conditions SettingValueV2#conditions}
  */
  readonly conditions?: SettingValueV2TargetingRulesConditions[] | cdktf.IResolvable;
  /**
  * The percentage options from where the evaluation process will choose a value based on the flag's percentage evaluation attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#percentage_options SettingValueV2#percentage_options}
  */
  readonly percentageOptions?: SettingValueV2TargetingRulesPercentageOptions[] | cdktf.IResolvable;
  /**
  * Represents the value of a Feature Flag or Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#value SettingValueV2#value}
  */
  readonly value?: SettingValueV2TargetingRulesValue;
}

export function settingValueV2TargetingRulesToTerraform(struct?: SettingValueV2TargetingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(settingValueV2TargetingRulesConditionsToTerraform, false)(struct!.conditions),
    percentage_options: cdktf.listMapper(settingValueV2TargetingRulesPercentageOptionsToTerraform, false)(struct!.percentageOptions),
    value: settingValueV2TargetingRulesValueToTerraform(struct!.value),
  }
}


export function settingValueV2TargetingRulesToHclTerraform(struct?: SettingValueV2TargetingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(settingValueV2TargetingRulesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "SettingValueV2TargetingRulesConditionsList",
    },
    percentage_options: {
      value: cdktf.listMapperHcl(settingValueV2TargetingRulesPercentageOptionsToHclTerraform, false)(struct!.percentageOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SettingValueV2TargetingRulesPercentageOptionsList",
    },
    value: {
      value: settingValueV2TargetingRulesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SettingValueV2TargetingRulesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValueV2TargetingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SettingValueV2TargetingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._percentageOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageOptions = this._percentageOptions?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueV2TargetingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._percentageOptions.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._percentageOptions.internalValue = value.percentageOptions;
      this._value.internalValue = value.value;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new SettingValueV2TargetingRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SettingValueV2TargetingRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // percentage_options - computed: false, optional: true, required: false
  private _percentageOptions = new SettingValueV2TargetingRulesPercentageOptionsList(this, "percentage_options", false);
  public get percentageOptions() {
    return this._percentageOptions;
  }
  public putPercentageOptions(value: SettingValueV2TargetingRulesPercentageOptions[] | cdktf.IResolvable) {
    this._percentageOptions.internalValue = value;
  }
  public resetPercentageOptions() {
    this._percentageOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageOptionsInput() {
    return this._percentageOptions.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new SettingValueV2TargetingRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SettingValueV2TargetingRulesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SettingValueV2TargetingRulesList extends cdktf.ComplexList {
  public internalValue? : SettingValueV2TargetingRules[] | cdktf.IResolvable

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
  public get(index: number): SettingValueV2TargetingRulesOutputReference {
    return new SettingValueV2TargetingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SettingValueV2Value {
  /**
  * The boolean representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#bool_value SettingValueV2#bool_value}
  */
  readonly boolValue?: boolean | cdktf.IResolvable;
  /**
  * The decimal number representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#double_value SettingValueV2#double_value}
  */
  readonly doubleValue?: number;
  /**
  * The whole number representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#int_value SettingValueV2#int_value}
  */
  readonly intValue?: number;
  /**
  * The string representation of the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#string_value SettingValueV2#string_value}
  */
  readonly stringValue?: string;
}

export function settingValueV2ValueToTerraform(struct?: SettingValueV2Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktf.booleanToTerraform(struct!.boolValue),
    double_value: cdktf.numberToTerraform(struct!.doubleValue),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function settingValueV2ValueToHclTerraform(struct?: SettingValueV2Value | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_value: {
      value: cdktf.booleanToHclTerraform(struct!.boolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    double_value: {
      value: cdktf.numberToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValueV2ValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SettingValueV2Value | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueV2Value | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolValue = undefined;
      this._doubleValue = undefined;
      this._intValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolValue = value.boolValue;
      this._doubleValue = value.doubleValue;
      this._intValue = value.intValue;
      this._stringValue = value.stringValue;
    }
  }

  // bool_value - computed: false, optional: true, required: false
  private _boolValue?: boolean | cdktf.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktf.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
  }

  // double_value - computed: false, optional: true, required: false
  private _doubleValue?: number; 
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }
  public set doubleValue(value: number) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // int_value - computed: false, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2 configcat_setting_value_v2}
*/
export class SettingValueV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "configcat_setting_value_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SettingValueV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SettingValueV2 to import
  * @param importFromId The id of the existing SettingValueV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SettingValueV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "configcat_setting_value_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value_v2 configcat_setting_value_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SettingValueV2Config
  */
  public constructor(scope: Construct, id: string, config: SettingValueV2Config) {
    super(scope, id, {
      terraformResourceType: 'configcat_setting_value_v2',
      terraformGeneratorMetadata: {
        providerName: 'configcat',
        providerVersion: '5.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._initOnly = config.initOnly;
    this._mandatoryNotes = config.mandatoryNotes;
    this._percentageEvaluationAttribute = config.percentageEvaluationAttribute;
    this._settingId = config.settingId;
    this._targetingRules.internalValue = config.targetingRules;
    this._value.internalValue = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // init_only - computed: true, optional: true, required: false
  private _initOnly?: boolean | cdktf.IResolvable; 
  public get initOnly() {
    return this.getBooleanAttribute('init_only');
  }
  public set initOnly(value: boolean | cdktf.IResolvable) {
    this._initOnly = value;
  }
  public resetInitOnly() {
    this._initOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initOnlyInput() {
    return this._initOnly;
  }

  // mandatory_notes - computed: false, optional: true, required: false
  private _mandatoryNotes?: string; 
  public get mandatoryNotes() {
    return this.getStringAttribute('mandatory_notes');
  }
  public set mandatoryNotes(value: string) {
    this._mandatoryNotes = value;
  }
  public resetMandatoryNotes() {
    this._mandatoryNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryNotesInput() {
    return this._mandatoryNotes;
  }

  // percentage_evaluation_attribute - computed: false, optional: true, required: false
  private _percentageEvaluationAttribute?: string; 
  public get percentageEvaluationAttribute() {
    return this.getStringAttribute('percentage_evaluation_attribute');
  }
  public set percentageEvaluationAttribute(value: string) {
    this._percentageEvaluationAttribute = value;
  }
  public resetPercentageEvaluationAttribute() {
    this._percentageEvaluationAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageEvaluationAttributeInput() {
    return this._percentageEvaluationAttribute;
  }

  // setting_id - computed: false, optional: false, required: true
  private _settingId?: string; 
  public get settingId() {
    return this.getStringAttribute('setting_id');
  }
  public set settingId(value: string) {
    this._settingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingIdInput() {
    return this._settingId;
  }

  // setting_type - computed: true, optional: false, required: false
  public get settingType() {
    return this.getStringAttribute('setting_type');
  }

  // targeting_rules - computed: false, optional: true, required: false
  private _targetingRules = new SettingValueV2TargetingRulesList(this, "targeting_rules", false);
  public get targetingRules() {
    return this._targetingRules;
  }
  public putTargetingRules(value: SettingValueV2TargetingRules[] | cdktf.IResolvable) {
    this._targetingRules.internalValue = value;
  }
  public resetTargetingRules() {
    this._targetingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetingRulesInput() {
    return this._targetingRules.internalValue;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SettingValueV2ValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SettingValueV2Value) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      init_only: cdktf.booleanToTerraform(this._initOnly),
      mandatory_notes: cdktf.stringToTerraform(this._mandatoryNotes),
      percentage_evaluation_attribute: cdktf.stringToTerraform(this._percentageEvaluationAttribute),
      setting_id: cdktf.stringToTerraform(this._settingId),
      targeting_rules: cdktf.listMapper(settingValueV2TargetingRulesToTerraform, false)(this._targetingRules.internalValue),
      value: settingValueV2ValueToTerraform(this._value.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      init_only: {
        value: cdktf.booleanToHclTerraform(this._initOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mandatory_notes: {
        value: cdktf.stringToHclTerraform(this._mandatoryNotes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      percentage_evaluation_attribute: {
        value: cdktf.stringToHclTerraform(this._percentageEvaluationAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setting_id: {
        value: cdktf.stringToHclTerraform(this._settingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targeting_rules: {
        value: cdktf.listMapperHcl(settingValueV2TargetingRulesToHclTerraform, false)(this._targetingRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SettingValueV2TargetingRulesList",
      },
      value: {
        value: settingValueV2ValueToHclTerraform(this._value.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SettingValueV2Value",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
