// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceFailureConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#enabled ServiceFailure#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#id ServiceFailure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#service_id ServiceFailure#service_id}
  */
  readonly serviceId: string;
  /**
  * exception_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#exception_rules ServiceFailure#exception_rules}
  */
  readonly exceptionRules?: ServiceFailureExceptionRules;
}
export interface ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleCondition {
  /**
  * Case sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#case_sensitive ServiceFailure#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Apply this comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#compare_operation_type ServiceFailure#compare_operation_type}
  */
  readonly compareOperationType: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#double_value ServiceFailure#double_value}
  */
  readonly doubleValue?: number;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#int_value ServiceFailure#int_value}
  */
  readonly intValue?: number;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#text_value ServiceFailure#text_value}
  */
  readonly textValue?: string;
}

export function serviceFailureExceptionRulesCustomErrorRulesCustomErrorRuleConditionToTerraform(struct?: ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleConditionOutputReference | ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    compare_operation_type: cdktf.stringToTerraform(struct!.compareOperationType),
    double_value: cdktf.numberToTerraform(struct!.doubleValue),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    text_value: cdktf.stringToTerraform(struct!.textValue),
  }
}


export function serviceFailureExceptionRulesCustomErrorRulesCustomErrorRuleConditionToHclTerraform(struct?: ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleConditionOutputReference | ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compare_operation_type: {
      value: cdktf.stringToHclTerraform(struct!.compareOperationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    text_value: {
      value: cdktf.stringToHclTerraform(struct!.textValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._compareOperationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compareOperationType = this._compareOperationType;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._textValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textValue = this._textValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._compareOperationType = undefined;
      this._doubleValue = undefined;
      this._intValue = undefined;
      this._textValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._compareOperationType = value.compareOperationType;
      this._doubleValue = value.doubleValue;
      this._intValue = value.intValue;
      this._textValue = value.textValue;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // compare_operation_type - computed: false, optional: false, required: true
  private _compareOperationType?: string; 
  public get compareOperationType() {
    return this.getStringAttribute('compare_operation_type');
  }
  public set compareOperationType(value: string) {
    this._compareOperationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareOperationTypeInput() {
    return this._compareOperationType;
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

  // text_value - computed: false, optional: true, required: false
  private _textValue?: string; 
  public get textValue() {
    return this.getStringAttribute('text_value');
  }
  public set textValue(value: string) {
    this._textValue = value;
  }
  public resetTextValue() {
    this._textValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValueInput() {
    return this._textValue;
  }
}
export interface ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRule {
  /**
  * Request attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#request_attribute ServiceFailure#request_attribute}
  */
  readonly requestAttribute: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#condition ServiceFailure#condition}
  */
  readonly condition: ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleCondition;
}

export function serviceFailureExceptionRulesCustomErrorRulesCustomErrorRuleToTerraform(struct?: ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_attribute: cdktf.stringToTerraform(struct!.requestAttribute),
    condition: serviceFailureExceptionRulesCustomErrorRulesCustomErrorRuleConditionToTerraform(struct!.condition),
  }
}


export function serviceFailureExceptionRulesCustomErrorRulesCustomErrorRuleToHclTerraform(struct?: ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_attribute: {
      value: cdktf.stringToHclTerraform(struct!.requestAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: serviceFailureExceptionRulesCustomErrorRulesCustomErrorRuleConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestAttribute = this._requestAttribute;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestAttribute = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestAttribute = value.requestAttribute;
      this._condition.internalValue = value.condition;
    }
  }

  // request_attribute - computed: false, optional: false, required: true
  private _requestAttribute?: string; 
  public get requestAttribute() {
    return this.getStringAttribute('request_attribute');
  }
  public set requestAttribute(value: string) {
    this._requestAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAttributeInput() {
    return this._requestAttribute;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleList extends cdktf.ComplexList {
  public internalValue? : ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRule[] | cdktf.IResolvable

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
  public get(index: number): ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleOutputReference {
    return new ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFailureExceptionRulesCustomErrorRules {
  /**
  * custom_error_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#custom_error_rule ServiceFailure#custom_error_rule}
  */
  readonly customErrorRule: ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRule[] | cdktf.IResolvable;
}

export function serviceFailureExceptionRulesCustomErrorRulesToTerraform(struct?: ServiceFailureExceptionRulesCustomErrorRulesOutputReference | ServiceFailureExceptionRulesCustomErrorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_error_rule: cdktf.listMapper(serviceFailureExceptionRulesCustomErrorRulesCustomErrorRuleToTerraform, true)(struct!.customErrorRule),
  }
}


export function serviceFailureExceptionRulesCustomErrorRulesToHclTerraform(struct?: ServiceFailureExceptionRulesCustomErrorRulesOutputReference | ServiceFailureExceptionRulesCustomErrorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_error_rule: {
      value: cdktf.listMapperHcl(serviceFailureExceptionRulesCustomErrorRulesCustomErrorRuleToHclTerraform, true)(struct!.customErrorRule),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFailureExceptionRulesCustomErrorRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFailureExceptionRulesCustomErrorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customErrorRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrorRule = this._customErrorRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFailureExceptionRulesCustomErrorRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customErrorRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customErrorRule.internalValue = value.customErrorRule;
    }
  }

  // custom_error_rule - computed: false, optional: false, required: true
  private _customErrorRule = new ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRuleList(this, "custom_error_rule", true);
  public get customErrorRule() {
    return this._customErrorRule;
  }
  public putCustomErrorRule(value: ServiceFailureExceptionRulesCustomErrorRulesCustomErrorRule[] | cdktf.IResolvable) {
    this._customErrorRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorRuleInput() {
    return this._customErrorRule.internalValue;
  }
}
export interface ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledException {
  /**
  * The pattern will match if it is contained within the actual class name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#class_pattern ServiceFailure#class_pattern}
  */
  readonly classPattern?: string;
  /**
  * Optionally, define an exception message pattern. The pattern will match if the actual exception message contains the pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#message_pattern ServiceFailure#message_pattern}
  */
  readonly messagePattern?: string;
}

export function serviceFailureExceptionRulesCustomHandledExceptionsCustomHandledExceptionToTerraform(struct?: ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_pattern: cdktf.stringToTerraform(struct!.classPattern),
    message_pattern: cdktf.stringToTerraform(struct!.messagePattern),
  }
}


export function serviceFailureExceptionRulesCustomHandledExceptionsCustomHandledExceptionToHclTerraform(struct?: ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_pattern: {
      value: cdktf.stringToHclTerraform(struct!.classPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_pattern: {
      value: cdktf.stringToHclTerraform(struct!.messagePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledException | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.classPattern = this._classPattern;
    }
    if (this._messagePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagePattern = this._messagePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledException | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classPattern = undefined;
      this._messagePattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classPattern = value.classPattern;
      this._messagePattern = value.messagePattern;
    }
  }

  // class_pattern - computed: false, optional: true, required: false
  private _classPattern?: string; 
  public get classPattern() {
    return this.getStringAttribute('class_pattern');
  }
  public set classPattern(value: string) {
    this._classPattern = value;
  }
  public resetClassPattern() {
    this._classPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classPatternInput() {
    return this._classPattern;
  }

  // message_pattern - computed: false, optional: true, required: false
  private _messagePattern?: string; 
  public get messagePattern() {
    return this.getStringAttribute('message_pattern');
  }
  public set messagePattern(value: string) {
    this._messagePattern = value;
  }
  public resetMessagePattern() {
    this._messagePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagePatternInput() {
    return this._messagePattern;
  }
}

export class ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledExceptionList extends cdktf.ComplexList {
  public internalValue? : ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledException[] | cdktf.IResolvable

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
  public get(index: number): ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledExceptionOutputReference {
    return new ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFailureExceptionRulesCustomHandledExceptions {
  /**
  * custom_handled_exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#custom_handled_exception ServiceFailure#custom_handled_exception}
  */
  readonly customHandledException: ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledException[] | cdktf.IResolvable;
}

export function serviceFailureExceptionRulesCustomHandledExceptionsToTerraform(struct?: ServiceFailureExceptionRulesCustomHandledExceptionsOutputReference | ServiceFailureExceptionRulesCustomHandledExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_handled_exception: cdktf.listMapper(serviceFailureExceptionRulesCustomHandledExceptionsCustomHandledExceptionToTerraform, true)(struct!.customHandledException),
  }
}


export function serviceFailureExceptionRulesCustomHandledExceptionsToHclTerraform(struct?: ServiceFailureExceptionRulesCustomHandledExceptionsOutputReference | ServiceFailureExceptionRulesCustomHandledExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_handled_exception: {
      value: cdktf.listMapperHcl(serviceFailureExceptionRulesCustomHandledExceptionsCustomHandledExceptionToHclTerraform, true)(struct!.customHandledException),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledExceptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFailureExceptionRulesCustomHandledExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFailureExceptionRulesCustomHandledExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHandledException?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHandledException = this._customHandledException?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFailureExceptionRulesCustomHandledExceptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customHandledException.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customHandledException.internalValue = value.customHandledException;
    }
  }

  // custom_handled_exception - computed: false, optional: false, required: true
  private _customHandledException = new ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledExceptionList(this, "custom_handled_exception", true);
  public get customHandledException() {
    return this._customHandledException;
  }
  public putCustomHandledException(value: ServiceFailureExceptionRulesCustomHandledExceptionsCustomHandledException[] | cdktf.IResolvable) {
    this._customHandledException.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customHandledExceptionInput() {
    return this._customHandledException.internalValue;
  }
}
export interface ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledException {
  /**
  * The pattern will match if it is contained within the actual class name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#class_pattern ServiceFailure#class_pattern}
  */
  readonly classPattern?: string;
  /**
  * Optionally, define an exception message pattern. The pattern will match if the actual exception message contains the pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#message_pattern ServiceFailure#message_pattern}
  */
  readonly messagePattern?: string;
}

export function serviceFailureExceptionRulesIgnoredExceptionsCustomHandledExceptionToTerraform(struct?: ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_pattern: cdktf.stringToTerraform(struct!.classPattern),
    message_pattern: cdktf.stringToTerraform(struct!.messagePattern),
  }
}


export function serviceFailureExceptionRulesIgnoredExceptionsCustomHandledExceptionToHclTerraform(struct?: ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_pattern: {
      value: cdktf.stringToHclTerraform(struct!.classPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_pattern: {
      value: cdktf.stringToHclTerraform(struct!.messagePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledException | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.classPattern = this._classPattern;
    }
    if (this._messagePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagePattern = this._messagePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledException | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classPattern = undefined;
      this._messagePattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classPattern = value.classPattern;
      this._messagePattern = value.messagePattern;
    }
  }

  // class_pattern - computed: false, optional: true, required: false
  private _classPattern?: string; 
  public get classPattern() {
    return this.getStringAttribute('class_pattern');
  }
  public set classPattern(value: string) {
    this._classPattern = value;
  }
  public resetClassPattern() {
    this._classPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classPatternInput() {
    return this._classPattern;
  }

  // message_pattern - computed: false, optional: true, required: false
  private _messagePattern?: string; 
  public get messagePattern() {
    return this.getStringAttribute('message_pattern');
  }
  public set messagePattern(value: string) {
    this._messagePattern = value;
  }
  public resetMessagePattern() {
    this._messagePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagePatternInput() {
    return this._messagePattern;
  }
}

export class ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledExceptionList extends cdktf.ComplexList {
  public internalValue? : ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledException[] | cdktf.IResolvable

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
  public get(index: number): ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledExceptionOutputReference {
    return new ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFailureExceptionRulesIgnoredExceptions {
  /**
  * custom_handled_exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#custom_handled_exception ServiceFailure#custom_handled_exception}
  */
  readonly customHandledException: ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledException[] | cdktf.IResolvable;
}

export function serviceFailureExceptionRulesIgnoredExceptionsToTerraform(struct?: ServiceFailureExceptionRulesIgnoredExceptionsOutputReference | ServiceFailureExceptionRulesIgnoredExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_handled_exception: cdktf.listMapper(serviceFailureExceptionRulesIgnoredExceptionsCustomHandledExceptionToTerraform, true)(struct!.customHandledException),
  }
}


export function serviceFailureExceptionRulesIgnoredExceptionsToHclTerraform(struct?: ServiceFailureExceptionRulesIgnoredExceptionsOutputReference | ServiceFailureExceptionRulesIgnoredExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_handled_exception: {
      value: cdktf.listMapperHcl(serviceFailureExceptionRulesIgnoredExceptionsCustomHandledExceptionToHclTerraform, true)(struct!.customHandledException),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledExceptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFailureExceptionRulesIgnoredExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFailureExceptionRulesIgnoredExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHandledException?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHandledException = this._customHandledException?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFailureExceptionRulesIgnoredExceptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customHandledException.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customHandledException.internalValue = value.customHandledException;
    }
  }

  // custom_handled_exception - computed: false, optional: false, required: true
  private _customHandledException = new ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledExceptionList(this, "custom_handled_exception", true);
  public get customHandledException() {
    return this._customHandledException;
  }
  public putCustomHandledException(value: ServiceFailureExceptionRulesIgnoredExceptionsCustomHandledException[] | cdktf.IResolvable) {
    this._customHandledException.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customHandledExceptionInput() {
    return this._customHandledException.internalValue;
  }
}
export interface ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledException {
  /**
  * The pattern will match if it is contained within the actual class name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#class_pattern ServiceFailure#class_pattern}
  */
  readonly classPattern?: string;
  /**
  * Optionally, define an exception message pattern. The pattern will match if the actual exception message contains the pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#message_pattern ServiceFailure#message_pattern}
  */
  readonly messagePattern?: string;
}

export function serviceFailureExceptionRulesSuccessForcingExceptionsCustomHandledExceptionToTerraform(struct?: ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_pattern: cdktf.stringToTerraform(struct!.classPattern),
    message_pattern: cdktf.stringToTerraform(struct!.messagePattern),
  }
}


export function serviceFailureExceptionRulesSuccessForcingExceptionsCustomHandledExceptionToHclTerraform(struct?: ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_pattern: {
      value: cdktf.stringToHclTerraform(struct!.classPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_pattern: {
      value: cdktf.stringToHclTerraform(struct!.messagePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledException | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.classPattern = this._classPattern;
    }
    if (this._messagePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagePattern = this._messagePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledException | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classPattern = undefined;
      this._messagePattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classPattern = value.classPattern;
      this._messagePattern = value.messagePattern;
    }
  }

  // class_pattern - computed: false, optional: true, required: false
  private _classPattern?: string; 
  public get classPattern() {
    return this.getStringAttribute('class_pattern');
  }
  public set classPattern(value: string) {
    this._classPattern = value;
  }
  public resetClassPattern() {
    this._classPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classPatternInput() {
    return this._classPattern;
  }

  // message_pattern - computed: false, optional: true, required: false
  private _messagePattern?: string; 
  public get messagePattern() {
    return this.getStringAttribute('message_pattern');
  }
  public set messagePattern(value: string) {
    this._messagePattern = value;
  }
  public resetMessagePattern() {
    this._messagePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagePatternInput() {
    return this._messagePattern;
  }
}

export class ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledExceptionList extends cdktf.ComplexList {
  public internalValue? : ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledException[] | cdktf.IResolvable

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
  public get(index: number): ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledExceptionOutputReference {
    return new ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFailureExceptionRulesSuccessForcingExceptions {
  /**
  * custom_handled_exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#custom_handled_exception ServiceFailure#custom_handled_exception}
  */
  readonly customHandledException: ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledException[] | cdktf.IResolvable;
}

export function serviceFailureExceptionRulesSuccessForcingExceptionsToTerraform(struct?: ServiceFailureExceptionRulesSuccessForcingExceptionsOutputReference | ServiceFailureExceptionRulesSuccessForcingExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_handled_exception: cdktf.listMapper(serviceFailureExceptionRulesSuccessForcingExceptionsCustomHandledExceptionToTerraform, true)(struct!.customHandledException),
  }
}


export function serviceFailureExceptionRulesSuccessForcingExceptionsToHclTerraform(struct?: ServiceFailureExceptionRulesSuccessForcingExceptionsOutputReference | ServiceFailureExceptionRulesSuccessForcingExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_handled_exception: {
      value: cdktf.listMapperHcl(serviceFailureExceptionRulesSuccessForcingExceptionsCustomHandledExceptionToHclTerraform, true)(struct!.customHandledException),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledExceptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFailureExceptionRulesSuccessForcingExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFailureExceptionRulesSuccessForcingExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHandledException?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHandledException = this._customHandledException?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFailureExceptionRulesSuccessForcingExceptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customHandledException.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customHandledException.internalValue = value.customHandledException;
    }
  }

  // custom_handled_exception - computed: false, optional: false, required: true
  private _customHandledException = new ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledExceptionList(this, "custom_handled_exception", true);
  public get customHandledException() {
    return this._customHandledException;
  }
  public putCustomHandledException(value: ServiceFailureExceptionRulesSuccessForcingExceptionsCustomHandledException[] | cdktf.IResolvable) {
    this._customHandledException.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customHandledExceptionInput() {
    return this._customHandledException.internalValue;
  }
}
export interface ServiceFailureExceptionRules {
  /**
  * Ignore all exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#ignore_all_exceptions ServiceFailure#ignore_all_exceptions}
  */
  readonly ignoreAllExceptions: boolean | cdktf.IResolvable;
  /**
  * Ignore span failure detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#ignore_span_failure_detection ServiceFailure#ignore_span_failure_detection}
  */
  readonly ignoreSpanFailureDetection: boolean | cdktf.IResolvable;
  /**
  * custom_error_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#custom_error_rules ServiceFailure#custom_error_rules}
  */
  readonly customErrorRules?: ServiceFailureExceptionRulesCustomErrorRules;
  /**
  * custom_handled_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#custom_handled_exceptions ServiceFailure#custom_handled_exceptions}
  */
  readonly customHandledExceptions?: ServiceFailureExceptionRulesCustomHandledExceptions;
  /**
  * ignored_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#ignored_exceptions ServiceFailure#ignored_exceptions}
  */
  readonly ignoredExceptions?: ServiceFailureExceptionRulesIgnoredExceptions;
  /**
  * success_forcing_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#success_forcing_exceptions ServiceFailure#success_forcing_exceptions}
  */
  readonly successForcingExceptions?: ServiceFailureExceptionRulesSuccessForcingExceptions;
}

export function serviceFailureExceptionRulesToTerraform(struct?: ServiceFailureExceptionRulesOutputReference | ServiceFailureExceptionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_all_exceptions: cdktf.booleanToTerraform(struct!.ignoreAllExceptions),
    ignore_span_failure_detection: cdktf.booleanToTerraform(struct!.ignoreSpanFailureDetection),
    custom_error_rules: serviceFailureExceptionRulesCustomErrorRulesToTerraform(struct!.customErrorRules),
    custom_handled_exceptions: serviceFailureExceptionRulesCustomHandledExceptionsToTerraform(struct!.customHandledExceptions),
    ignored_exceptions: serviceFailureExceptionRulesIgnoredExceptionsToTerraform(struct!.ignoredExceptions),
    success_forcing_exceptions: serviceFailureExceptionRulesSuccessForcingExceptionsToTerraform(struct!.successForcingExceptions),
  }
}


export function serviceFailureExceptionRulesToHclTerraform(struct?: ServiceFailureExceptionRulesOutputReference | ServiceFailureExceptionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_all_exceptions: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreAllExceptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_span_failure_detection: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSpanFailureDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_error_rules: {
      value: serviceFailureExceptionRulesCustomErrorRulesToHclTerraform(struct!.customErrorRules),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFailureExceptionRulesCustomErrorRulesList",
    },
    custom_handled_exceptions: {
      value: serviceFailureExceptionRulesCustomHandledExceptionsToHclTerraform(struct!.customHandledExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFailureExceptionRulesCustomHandledExceptionsList",
    },
    ignored_exceptions: {
      value: serviceFailureExceptionRulesIgnoredExceptionsToHclTerraform(struct!.ignoredExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFailureExceptionRulesIgnoredExceptionsList",
    },
    success_forcing_exceptions: {
      value: serviceFailureExceptionRulesSuccessForcingExceptionsToHclTerraform(struct!.successForcingExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFailureExceptionRulesSuccessForcingExceptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFailureExceptionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFailureExceptionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreAllExceptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreAllExceptions = this._ignoreAllExceptions;
    }
    if (this._ignoreSpanFailureDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSpanFailureDetection = this._ignoreSpanFailureDetection;
    }
    if (this._customErrorRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrorRules = this._customErrorRules?.internalValue;
    }
    if (this._customHandledExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHandledExceptions = this._customHandledExceptions?.internalValue;
    }
    if (this._ignoredExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredExceptions = this._ignoredExceptions?.internalValue;
    }
    if (this._successForcingExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successForcingExceptions = this._successForcingExceptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFailureExceptionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreAllExceptions = undefined;
      this._ignoreSpanFailureDetection = undefined;
      this._customErrorRules.internalValue = undefined;
      this._customHandledExceptions.internalValue = undefined;
      this._ignoredExceptions.internalValue = undefined;
      this._successForcingExceptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreAllExceptions = value.ignoreAllExceptions;
      this._ignoreSpanFailureDetection = value.ignoreSpanFailureDetection;
      this._customErrorRules.internalValue = value.customErrorRules;
      this._customHandledExceptions.internalValue = value.customHandledExceptions;
      this._ignoredExceptions.internalValue = value.ignoredExceptions;
      this._successForcingExceptions.internalValue = value.successForcingExceptions;
    }
  }

  // ignore_all_exceptions - computed: false, optional: false, required: true
  private _ignoreAllExceptions?: boolean | cdktf.IResolvable; 
  public get ignoreAllExceptions() {
    return this.getBooleanAttribute('ignore_all_exceptions');
  }
  public set ignoreAllExceptions(value: boolean | cdktf.IResolvable) {
    this._ignoreAllExceptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAllExceptionsInput() {
    return this._ignoreAllExceptions;
  }

  // ignore_span_failure_detection - computed: false, optional: false, required: true
  private _ignoreSpanFailureDetection?: boolean | cdktf.IResolvable; 
  public get ignoreSpanFailureDetection() {
    return this.getBooleanAttribute('ignore_span_failure_detection');
  }
  public set ignoreSpanFailureDetection(value: boolean | cdktf.IResolvable) {
    this._ignoreSpanFailureDetection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSpanFailureDetectionInput() {
    return this._ignoreSpanFailureDetection;
  }

  // custom_error_rules - computed: false, optional: true, required: false
  private _customErrorRules = new ServiceFailureExceptionRulesCustomErrorRulesOutputReference(this, "custom_error_rules");
  public get customErrorRules() {
    return this._customErrorRules;
  }
  public putCustomErrorRules(value: ServiceFailureExceptionRulesCustomErrorRules) {
    this._customErrorRules.internalValue = value;
  }
  public resetCustomErrorRules() {
    this._customErrorRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorRulesInput() {
    return this._customErrorRules.internalValue;
  }

  // custom_handled_exceptions - computed: false, optional: true, required: false
  private _customHandledExceptions = new ServiceFailureExceptionRulesCustomHandledExceptionsOutputReference(this, "custom_handled_exceptions");
  public get customHandledExceptions() {
    return this._customHandledExceptions;
  }
  public putCustomHandledExceptions(value: ServiceFailureExceptionRulesCustomHandledExceptions) {
    this._customHandledExceptions.internalValue = value;
  }
  public resetCustomHandledExceptions() {
    this._customHandledExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHandledExceptionsInput() {
    return this._customHandledExceptions.internalValue;
  }

  // ignored_exceptions - computed: false, optional: true, required: false
  private _ignoredExceptions = new ServiceFailureExceptionRulesIgnoredExceptionsOutputReference(this, "ignored_exceptions");
  public get ignoredExceptions() {
    return this._ignoredExceptions;
  }
  public putIgnoredExceptions(value: ServiceFailureExceptionRulesIgnoredExceptions) {
    this._ignoredExceptions.internalValue = value;
  }
  public resetIgnoredExceptions() {
    this._ignoredExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredExceptionsInput() {
    return this._ignoredExceptions.internalValue;
  }

  // success_forcing_exceptions - computed: false, optional: true, required: false
  private _successForcingExceptions = new ServiceFailureExceptionRulesSuccessForcingExceptionsOutputReference(this, "success_forcing_exceptions");
  public get successForcingExceptions() {
    return this._successForcingExceptions;
  }
  public putSuccessForcingExceptions(value: ServiceFailureExceptionRulesSuccessForcingExceptions) {
    this._successForcingExceptions.internalValue = value;
  }
  public resetSuccessForcingExceptions() {
    this._successForcingExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successForcingExceptionsInput() {
    return this._successForcingExceptions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure dynatrace_service_failure}
*/
export class ServiceFailure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_service_failure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceFailure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceFailure to import
  * @param importFromId The id of the existing ServiceFailure that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceFailure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_service_failure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_failure dynatrace_service_failure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceFailureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceFailureConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_service_failure',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._serviceId = config.serviceId;
    this._exceptionRules.internalValue = config.exceptionRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // exception_rules - computed: false, optional: true, required: false
  private _exceptionRules = new ServiceFailureExceptionRulesOutputReference(this, "exception_rules");
  public get exceptionRules() {
    return this._exceptionRules;
  }
  public putExceptionRules(value: ServiceFailureExceptionRules) {
    this._exceptionRules.internalValue = value;
  }
  public resetExceptionRules() {
    this._exceptionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionRulesInput() {
    return this._exceptionRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      service_id: cdktf.stringToTerraform(this._serviceId),
      exception_rules: serviceFailureExceptionRulesToTerraform(this._exceptionRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_rules: {
        value: serviceFailureExceptionRulesToHclTerraform(this._exceptionRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFailureExceptionRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
