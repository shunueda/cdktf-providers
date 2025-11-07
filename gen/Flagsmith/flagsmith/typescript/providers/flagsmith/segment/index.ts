// https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#description Segment#description}
  */
  readonly description?: string;
  /**
  * Set this to create a feature specific segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#feature_id Segment#feature_id}
  */
  readonly featureId?: number;
  /**
  * Name of the segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#name Segment#name}
  */
  readonly name: string;
  /**
  * UUID of project the segment belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#project_uuid Segment#project_uuid}
  */
  readonly projectUuid: string;
  /**
  * Rules for the segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#rules Segment#rules}
  */
  readonly rules: SegmentRules[] | cdktf.IResolvable;
}
export interface SegmentRulesConditions {
  /**
  * Operator of the condition, can be one of `EQUAL`, `GREATER_THAN`, `LESS_THAN`, `LESS_THAN_INCLUSIVE` `CONTAINS`, `GREATER_THAN_INCLUSIVE`, `NOT_CONTAINS`, `NOT_EQUAL`,  `REGEX`, `PERCENTAGE_SPLIT`,  `MODULO`, `IS_SET`, `IS_NOT_SET`, `IN` 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#operator Segment#operator}
  */
  readonly operator: string;
  /**
  * Property of the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#property Segment#property}
  */
  readonly property?: string;
  /**
  * Value of the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#value Segment#value}
  */
  readonly value?: string;
}

export function segmentRulesConditionsToTerraform(struct?: SegmentRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    property: cdktf.stringToTerraform(struct!.property),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function segmentRulesConditionsToHclTerraform(struct?: SegmentRulesConditions | cdktf.IResolvable): any {
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
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
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

export class SegmentRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._property = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._property = value.property;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
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

export class SegmentRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : SegmentRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): SegmentRulesConditionsOutputReference {
    return new SegmentRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SegmentRulesRulesConditions {
  /**
  * Operator of the condition, can be one of `EQUAL`, `GREATER_THAN`, `LESS_THAN`, `LESS_THAN_INCLUSIVE` `CONTAINS`, `GREATER_THAN_INCLUSIVE`, `NOT_CONTAINS`, `NOT_EQUAL`,  `REGEX`, `PERCENTAGE_SPLIT`,  `MODULO`, `IS_SET`, `IS_NOT_SET`, `IN` 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#operator Segment#operator}
  */
  readonly operator: string;
  /**
  * Property of the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#property Segment#property}
  */
  readonly property?: string;
  /**
  * Value of the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#value Segment#value}
  */
  readonly value?: string;
}

export function segmentRulesRulesConditionsToTerraform(struct?: SegmentRulesRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    property: cdktf.stringToTerraform(struct!.property),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function segmentRulesRulesConditionsToHclTerraform(struct?: SegmentRulesRulesConditions | cdktf.IResolvable): any {
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
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
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

export class SegmentRulesRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentRulesRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentRulesRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._property = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._property = value.property;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
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

export class SegmentRulesRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : SegmentRulesRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): SegmentRulesRulesConditionsOutputReference {
    return new SegmentRulesRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SegmentRulesRules {
  /**
  * List of Conditions for the nested Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#conditions Segment#conditions}
  */
  readonly conditions?: SegmentRulesRulesConditions[] | cdktf.IResolvable;
  /**
  * Type of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#type Segment#type}
  */
  readonly type: string;
}

export function segmentRulesRulesToTerraform(struct?: SegmentRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(segmentRulesRulesConditionsToTerraform, false)(struct!.conditions),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function segmentRulesRulesToHclTerraform(struct?: SegmentRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(segmentRulesRulesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "SegmentRulesRulesConditionsList",
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

export class SegmentRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._type = value.type;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new SegmentRulesRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SegmentRulesRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
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

export class SegmentRulesRulesList extends cdktf.ComplexList {
  public internalValue? : SegmentRulesRules[] | cdktf.IResolvable

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
  public get(index: number): SegmentRulesRulesOutputReference {
    return new SegmentRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SegmentRules {
  /**
  * List of Conditions for the nested Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#conditions Segment#conditions}
  */
  readonly conditions?: SegmentRulesConditions[] | cdktf.IResolvable;
  /**
  * List of Nested Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#rules Segment#rules}
  */
  readonly rules?: SegmentRulesRules[] | cdktf.IResolvable;
  /**
  * Type of the rule, can be of: `ALL`, `ANY`, `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#type Segment#type}
  */
  readonly type: string;
}

export function segmentRulesToTerraform(struct?: SegmentRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(segmentRulesConditionsToTerraform, false)(struct!.conditions),
    rules: cdktf.listMapper(segmentRulesRulesToTerraform, false)(struct!.rules),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function segmentRulesToHclTerraform(struct?: SegmentRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(segmentRulesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "SegmentRulesConditionsList",
    },
    rules: {
      value: cdktf.listMapperHcl(segmentRulesRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "SegmentRulesRulesList",
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

export class SegmentRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._rules.internalValue = value.rules;
      this._type = value.type;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new SegmentRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SegmentRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new SegmentRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SegmentRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
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

export class SegmentRulesList extends cdktf.ComplexList {
  public internalValue? : SegmentRules[] | cdktf.IResolvable

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
  public get(index: number): SegmentRulesOutputReference {
    return new SegmentRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment flagsmith_segment}
*/
export class Segment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flagsmith_segment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Segment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Segment to import
  * @param importFromId The id of the existing Segment that should be imported. Refer to the {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Segment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flagsmith_segment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/segment flagsmith_segment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SegmentConfig
  */
  public constructor(scope: Construct, id: string, config: SegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'flagsmith_segment',
      terraformGeneratorMetadata: {
        providerName: 'flagsmith',
        providerVersion: '0.9.1'
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
    this._featureId = config.featureId;
    this._name = config.name;
    this._projectUuid = config.projectUuid;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // feature_id - computed: true, optional: true, required: false
  private _featureId?: number; 
  public get featureId() {
    return this.getNumberAttribute('feature_id');
  }
  public set featureId(value: number) {
    this._featureId = value;
  }
  public resetFeatureId() {
    this._featureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureIdInput() {
    return this._featureId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // project_uuid - computed: false, optional: false, required: true
  private _projectUuid?: string; 
  public get projectUuid() {
    return this.getStringAttribute('project_uuid');
  }
  public set projectUuid(value: string) {
    this._projectUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectUuidInput() {
    return this._projectUuid;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new SegmentRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SegmentRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      feature_id: cdktf.numberToTerraform(this._featureId),
      name: cdktf.stringToTerraform(this._name),
      project_uuid: cdktf.stringToTerraform(this._projectUuid),
      rules: cdktf.listMapper(segmentRulesToTerraform, false)(this._rules.internalValue),
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
      feature_id: {
        value: cdktf.numberToHclTerraform(this._featureId),
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
      project_uuid: {
        value: cdktf.stringToHclTerraform(this._projectUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(segmentRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SegmentRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
