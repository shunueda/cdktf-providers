// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FailureDetectionParametersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#description FailureDetectionParameters#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#id FailureDetectionParameters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#name FailureDetectionParameters#name}
  */
  readonly name: string;
  /**
  * broken_links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#broken_links FailureDetectionParameters#broken_links}
  */
  readonly brokenLinks: FailureDetectionParametersBrokenLinks;
  /**
  * exception_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#exception_rules FailureDetectionParameters#exception_rules}
  */
  readonly exceptionRules: FailureDetectionParametersExceptionRules;
  /**
  * http_response_codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#http_response_codes FailureDetectionParameters#http_response_codes}
  */
  readonly httpResponseCodes: FailureDetectionParametersHttpResponseCodes;
}
export interface FailureDetectionParametersBrokenLinks {
  /**
  * If your application relies on other hosts at other domains, add the associated domain names here. Once configured, Dynatrace will consider 404s thrown by hosts at these domains to be service failures related to your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#broken_link_domains FailureDetectionParameters#broken_link_domains}
  */
  readonly brokenLinkDomains?: string[];
  /**
  * Consider 404 HTTP response codes as failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#http_404_not_found_failures FailureDetectionParameters#http_404_not_found_failures}
  */
  readonly http404NotFoundFailures: boolean | cdktf.IResolvable;
}

export function failureDetectionParametersBrokenLinksToTerraform(struct?: FailureDetectionParametersBrokenLinksOutputReference | FailureDetectionParametersBrokenLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broken_link_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.brokenLinkDomains),
    http_404_not_found_failures: cdktf.booleanToTerraform(struct!.http404NotFoundFailures),
  }
}


export function failureDetectionParametersBrokenLinksToHclTerraform(struct?: FailureDetectionParametersBrokenLinksOutputReference | FailureDetectionParametersBrokenLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broken_link_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.brokenLinkDomains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    http_404_not_found_failures: {
      value: cdktf.booleanToHclTerraform(struct!.http404NotFoundFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionParametersBrokenLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionParametersBrokenLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokenLinkDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokenLinkDomains = this._brokenLinkDomains;
    }
    if (this._http404NotFoundFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.http404NotFoundFailures = this._http404NotFoundFailures;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionParametersBrokenLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brokenLinkDomains = undefined;
      this._http404NotFoundFailures = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brokenLinkDomains = value.brokenLinkDomains;
      this._http404NotFoundFailures = value.http404NotFoundFailures;
    }
  }

  // broken_link_domains - computed: false, optional: true, required: false
  private _brokenLinkDomains?: string[]; 
  public get brokenLinkDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('broken_link_domains'));
  }
  public set brokenLinkDomains(value: string[]) {
    this._brokenLinkDomains = value;
  }
  public resetBrokenLinkDomains() {
    this._brokenLinkDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokenLinkDomainsInput() {
    return this._brokenLinkDomains;
  }

  // http_404_not_found_failures - computed: false, optional: false, required: true
  private _http404NotFoundFailures?: boolean | cdktf.IResolvable; 
  public get http404NotFoundFailures() {
    return this.getBooleanAttribute('http_404_not_found_failures');
  }
  public set http404NotFoundFailures(value: boolean | cdktf.IResolvable) {
    this._http404NotFoundFailures = value;
  }
  // Temporarily expose input value. Use with caution.
  public get http404NotFoundFailuresInput() {
    return this._http404NotFoundFailures;
  }
}
export interface FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleCondition {
  /**
  * Case sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#case_sensitive FailureDetectionParameters#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Apply this comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#compare_operation_type FailureDetectionParameters#compare_operation_type}
  */
  readonly compareOperationType: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#double_value FailureDetectionParameters#double_value}
  */
  readonly doubleValue?: number;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#int_value FailureDetectionParameters#int_value}
  */
  readonly intValue?: number;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#text_value FailureDetectionParameters#text_value}
  */
  readonly textValue?: string;
}

export function failureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleConditionToTerraform(struct?: FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleConditionOutputReference | FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleCondition): any {
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


export function failureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleConditionToHclTerraform(struct?: FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleConditionOutputReference | FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleCondition): any {
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

export class FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleCondition | undefined {
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

  public set internalValue(value: FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleCondition | undefined) {
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
export interface FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRule {
  /**
  * Request attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#request_attribute FailureDetectionParameters#request_attribute}
  */
  readonly requestAttribute: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#condition FailureDetectionParameters#condition}
  */
  readonly condition: FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleCondition;
}

export function failureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleToTerraform(struct?: FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_attribute: cdktf.stringToTerraform(struct!.requestAttribute),
    condition: failureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleConditionToTerraform(struct!.condition),
  }
}


export function failureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleToHclTerraform(struct?: FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRule | cdktf.IResolvable): any {
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
      value: failureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRule | cdktf.IResolvable | undefined) {
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
  private _condition = new FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleList extends cdktf.ComplexList {
  public internalValue? : FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRule[] | cdktf.IResolvable

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
  public get(index: number): FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleOutputReference {
    return new FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FailureDetectionParametersExceptionRulesCustomErrorRules {
  /**
  * custom_error_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#custom_error_rule FailureDetectionParameters#custom_error_rule}
  */
  readonly customErrorRule: FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRule[] | cdktf.IResolvable;
}

export function failureDetectionParametersExceptionRulesCustomErrorRulesToTerraform(struct?: FailureDetectionParametersExceptionRulesCustomErrorRulesOutputReference | FailureDetectionParametersExceptionRulesCustomErrorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_error_rule: cdktf.listMapper(failureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleToTerraform, true)(struct!.customErrorRule),
  }
}


export function failureDetectionParametersExceptionRulesCustomErrorRulesToHclTerraform(struct?: FailureDetectionParametersExceptionRulesCustomErrorRulesOutputReference | FailureDetectionParametersExceptionRulesCustomErrorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_error_rule: {
      value: cdktf.listMapperHcl(failureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleToHclTerraform, true)(struct!.customErrorRule),
      isBlock: true,
      type: "set",
      storageClassType: "FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionParametersExceptionRulesCustomErrorRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionParametersExceptionRulesCustomErrorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customErrorRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrorRule = this._customErrorRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionParametersExceptionRulesCustomErrorRules | undefined) {
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
  private _customErrorRule = new FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRuleList(this, "custom_error_rule", true);
  public get customErrorRule() {
    return this._customErrorRule;
  }
  public putCustomErrorRule(value: FailureDetectionParametersExceptionRulesCustomErrorRulesCustomErrorRule[] | cdktf.IResolvable) {
    this._customErrorRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorRuleInput() {
    return this._customErrorRule.internalValue;
  }
}
export interface FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledException {
  /**
  * The pattern will match if it is contained within the actual class name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#class_pattern FailureDetectionParameters#class_pattern}
  */
  readonly classPattern?: string;
  /**
  * Optionally, define an exception message pattern. The pattern will match if the actual exception message contains the pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#message_pattern FailureDetectionParameters#message_pattern}
  */
  readonly messagePattern?: string;
}

export function failureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledExceptionToTerraform(struct?: FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_pattern: cdktf.stringToTerraform(struct!.classPattern),
    message_pattern: cdktf.stringToTerraform(struct!.messagePattern),
  }
}


export function failureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledExceptionToHclTerraform(struct?: FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledException | cdktf.IResolvable): any {
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

export class FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledException | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledException | cdktf.IResolvable | undefined) {
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

export class FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledExceptionList extends cdktf.ComplexList {
  public internalValue? : FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledException[] | cdktf.IResolvable

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
  public get(index: number): FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledExceptionOutputReference {
    return new FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FailureDetectionParametersExceptionRulesCustomHandledExceptions {
  /**
  * custom_handled_exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#custom_handled_exception FailureDetectionParameters#custom_handled_exception}
  */
  readonly customHandledException: FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledException[] | cdktf.IResolvable;
}

export function failureDetectionParametersExceptionRulesCustomHandledExceptionsToTerraform(struct?: FailureDetectionParametersExceptionRulesCustomHandledExceptionsOutputReference | FailureDetectionParametersExceptionRulesCustomHandledExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_handled_exception: cdktf.listMapper(failureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledExceptionToTerraform, true)(struct!.customHandledException),
  }
}


export function failureDetectionParametersExceptionRulesCustomHandledExceptionsToHclTerraform(struct?: FailureDetectionParametersExceptionRulesCustomHandledExceptionsOutputReference | FailureDetectionParametersExceptionRulesCustomHandledExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_handled_exception: {
      value: cdktf.listMapperHcl(failureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledExceptionToHclTerraform, true)(struct!.customHandledException),
      isBlock: true,
      type: "set",
      storageClassType: "FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledExceptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionParametersExceptionRulesCustomHandledExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionParametersExceptionRulesCustomHandledExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHandledException?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHandledException = this._customHandledException?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionParametersExceptionRulesCustomHandledExceptions | undefined) {
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
  private _customHandledException = new FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledExceptionList(this, "custom_handled_exception", true);
  public get customHandledException() {
    return this._customHandledException;
  }
  public putCustomHandledException(value: FailureDetectionParametersExceptionRulesCustomHandledExceptionsCustomHandledException[] | cdktf.IResolvable) {
    this._customHandledException.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customHandledExceptionInput() {
    return this._customHandledException.internalValue;
  }
}
export interface FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledException {
  /**
  * The pattern will match if it is contained within the actual class name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#class_pattern FailureDetectionParameters#class_pattern}
  */
  readonly classPattern?: string;
  /**
  * Optionally, define an exception message pattern. The pattern will match if the actual exception message contains the pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#message_pattern FailureDetectionParameters#message_pattern}
  */
  readonly messagePattern?: string;
}

export function failureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledExceptionToTerraform(struct?: FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_pattern: cdktf.stringToTerraform(struct!.classPattern),
    message_pattern: cdktf.stringToTerraform(struct!.messagePattern),
  }
}


export function failureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledExceptionToHclTerraform(struct?: FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledException | cdktf.IResolvable): any {
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

export class FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledException | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledException | cdktf.IResolvable | undefined) {
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

export class FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledExceptionList extends cdktf.ComplexList {
  public internalValue? : FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledException[] | cdktf.IResolvable

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
  public get(index: number): FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledExceptionOutputReference {
    return new FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FailureDetectionParametersExceptionRulesIgnoredExceptions {
  /**
  * custom_handled_exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#custom_handled_exception FailureDetectionParameters#custom_handled_exception}
  */
  readonly customHandledException: FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledException[] | cdktf.IResolvable;
}

export function failureDetectionParametersExceptionRulesIgnoredExceptionsToTerraform(struct?: FailureDetectionParametersExceptionRulesIgnoredExceptionsOutputReference | FailureDetectionParametersExceptionRulesIgnoredExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_handled_exception: cdktf.listMapper(failureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledExceptionToTerraform, true)(struct!.customHandledException),
  }
}


export function failureDetectionParametersExceptionRulesIgnoredExceptionsToHclTerraform(struct?: FailureDetectionParametersExceptionRulesIgnoredExceptionsOutputReference | FailureDetectionParametersExceptionRulesIgnoredExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_handled_exception: {
      value: cdktf.listMapperHcl(failureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledExceptionToHclTerraform, true)(struct!.customHandledException),
      isBlock: true,
      type: "set",
      storageClassType: "FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledExceptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionParametersExceptionRulesIgnoredExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionParametersExceptionRulesIgnoredExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHandledException?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHandledException = this._customHandledException?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionParametersExceptionRulesIgnoredExceptions | undefined) {
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
  private _customHandledException = new FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledExceptionList(this, "custom_handled_exception", true);
  public get customHandledException() {
    return this._customHandledException;
  }
  public putCustomHandledException(value: FailureDetectionParametersExceptionRulesIgnoredExceptionsCustomHandledException[] | cdktf.IResolvable) {
    this._customHandledException.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customHandledExceptionInput() {
    return this._customHandledException.internalValue;
  }
}
export interface FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledException {
  /**
  * The pattern will match if it is contained within the actual class name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#class_pattern FailureDetectionParameters#class_pattern}
  */
  readonly classPattern?: string;
  /**
  * Optionally, define an exception message pattern. The pattern will match if the actual exception message contains the pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#message_pattern FailureDetectionParameters#message_pattern}
  */
  readonly messagePattern?: string;
}

export function failureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledExceptionToTerraform(struct?: FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_pattern: cdktf.stringToTerraform(struct!.classPattern),
    message_pattern: cdktf.stringToTerraform(struct!.messagePattern),
  }
}


export function failureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledExceptionToHclTerraform(struct?: FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledException | cdktf.IResolvable): any {
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

export class FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledException | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledException | cdktf.IResolvable | undefined) {
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

export class FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledExceptionList extends cdktf.ComplexList {
  public internalValue? : FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledException[] | cdktf.IResolvable

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
  public get(index: number): FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledExceptionOutputReference {
    return new FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FailureDetectionParametersExceptionRulesSuccessForcingExceptions {
  /**
  * custom_handled_exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#custom_handled_exception FailureDetectionParameters#custom_handled_exception}
  */
  readonly customHandledException: FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledException[] | cdktf.IResolvable;
}

export function failureDetectionParametersExceptionRulesSuccessForcingExceptionsToTerraform(struct?: FailureDetectionParametersExceptionRulesSuccessForcingExceptionsOutputReference | FailureDetectionParametersExceptionRulesSuccessForcingExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_handled_exception: cdktf.listMapper(failureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledExceptionToTerraform, true)(struct!.customHandledException),
  }
}


export function failureDetectionParametersExceptionRulesSuccessForcingExceptionsToHclTerraform(struct?: FailureDetectionParametersExceptionRulesSuccessForcingExceptionsOutputReference | FailureDetectionParametersExceptionRulesSuccessForcingExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_handled_exception: {
      value: cdktf.listMapperHcl(failureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledExceptionToHclTerraform, true)(struct!.customHandledException),
      isBlock: true,
      type: "set",
      storageClassType: "FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledExceptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionParametersExceptionRulesSuccessForcingExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionParametersExceptionRulesSuccessForcingExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHandledException?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHandledException = this._customHandledException?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionParametersExceptionRulesSuccessForcingExceptions | undefined) {
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
  private _customHandledException = new FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledExceptionList(this, "custom_handled_exception", true);
  public get customHandledException() {
    return this._customHandledException;
  }
  public putCustomHandledException(value: FailureDetectionParametersExceptionRulesSuccessForcingExceptionsCustomHandledException[] | cdktf.IResolvable) {
    this._customHandledException.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customHandledExceptionInput() {
    return this._customHandledException.internalValue;
  }
}
export interface FailureDetectionParametersExceptionRules {
  /**
  * Ignore all exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#ignore_all_exceptions FailureDetectionParameters#ignore_all_exceptions}
  */
  readonly ignoreAllExceptions: boolean | cdktf.IResolvable;
  /**
  * Ignore span failure detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#ignore_span_failure_detection FailureDetectionParameters#ignore_span_failure_detection}
  */
  readonly ignoreSpanFailureDetection: boolean | cdktf.IResolvable;
  /**
  * custom_error_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#custom_error_rules FailureDetectionParameters#custom_error_rules}
  */
  readonly customErrorRules?: FailureDetectionParametersExceptionRulesCustomErrorRules;
  /**
  * custom_handled_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#custom_handled_exceptions FailureDetectionParameters#custom_handled_exceptions}
  */
  readonly customHandledExceptions?: FailureDetectionParametersExceptionRulesCustomHandledExceptions;
  /**
  * ignored_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#ignored_exceptions FailureDetectionParameters#ignored_exceptions}
  */
  readonly ignoredExceptions?: FailureDetectionParametersExceptionRulesIgnoredExceptions;
  /**
  * success_forcing_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#success_forcing_exceptions FailureDetectionParameters#success_forcing_exceptions}
  */
  readonly successForcingExceptions?: FailureDetectionParametersExceptionRulesSuccessForcingExceptions;
}

export function failureDetectionParametersExceptionRulesToTerraform(struct?: FailureDetectionParametersExceptionRulesOutputReference | FailureDetectionParametersExceptionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_all_exceptions: cdktf.booleanToTerraform(struct!.ignoreAllExceptions),
    ignore_span_failure_detection: cdktf.booleanToTerraform(struct!.ignoreSpanFailureDetection),
    custom_error_rules: failureDetectionParametersExceptionRulesCustomErrorRulesToTerraform(struct!.customErrorRules),
    custom_handled_exceptions: failureDetectionParametersExceptionRulesCustomHandledExceptionsToTerraform(struct!.customHandledExceptions),
    ignored_exceptions: failureDetectionParametersExceptionRulesIgnoredExceptionsToTerraform(struct!.ignoredExceptions),
    success_forcing_exceptions: failureDetectionParametersExceptionRulesSuccessForcingExceptionsToTerraform(struct!.successForcingExceptions),
  }
}


export function failureDetectionParametersExceptionRulesToHclTerraform(struct?: FailureDetectionParametersExceptionRulesOutputReference | FailureDetectionParametersExceptionRules): any {
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
      value: failureDetectionParametersExceptionRulesCustomErrorRulesToHclTerraform(struct!.customErrorRules),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionParametersExceptionRulesCustomErrorRulesList",
    },
    custom_handled_exceptions: {
      value: failureDetectionParametersExceptionRulesCustomHandledExceptionsToHclTerraform(struct!.customHandledExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionParametersExceptionRulesCustomHandledExceptionsList",
    },
    ignored_exceptions: {
      value: failureDetectionParametersExceptionRulesIgnoredExceptionsToHclTerraform(struct!.ignoredExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionParametersExceptionRulesIgnoredExceptionsList",
    },
    success_forcing_exceptions: {
      value: failureDetectionParametersExceptionRulesSuccessForcingExceptionsToHclTerraform(struct!.successForcingExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionParametersExceptionRulesSuccessForcingExceptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionParametersExceptionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionParametersExceptionRules | undefined {
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

  public set internalValue(value: FailureDetectionParametersExceptionRules | undefined) {
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
  private _customErrorRules = new FailureDetectionParametersExceptionRulesCustomErrorRulesOutputReference(this, "custom_error_rules");
  public get customErrorRules() {
    return this._customErrorRules;
  }
  public putCustomErrorRules(value: FailureDetectionParametersExceptionRulesCustomErrorRules) {
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
  private _customHandledExceptions = new FailureDetectionParametersExceptionRulesCustomHandledExceptionsOutputReference(this, "custom_handled_exceptions");
  public get customHandledExceptions() {
    return this._customHandledExceptions;
  }
  public putCustomHandledExceptions(value: FailureDetectionParametersExceptionRulesCustomHandledExceptions) {
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
  private _ignoredExceptions = new FailureDetectionParametersExceptionRulesIgnoredExceptionsOutputReference(this, "ignored_exceptions");
  public get ignoredExceptions() {
    return this._ignoredExceptions;
  }
  public putIgnoredExceptions(value: FailureDetectionParametersExceptionRulesIgnoredExceptions) {
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
  private _successForcingExceptions = new FailureDetectionParametersExceptionRulesSuccessForcingExceptionsOutputReference(this, "success_forcing_exceptions");
  public get successForcingExceptions() {
    return this._successForcingExceptions;
  }
  public putSuccessForcingExceptions(value: FailureDetectionParametersExceptionRulesSuccessForcingExceptions) {
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
export interface FailureDetectionParametersHttpResponseCodes {
  /**
  * HTTP response codes which indicate client side errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#client_side_errors FailureDetectionParameters#client_side_errors}
  */
  readonly clientSideErrors: string;
  /**
  * Treat missing HTTP response code as client side error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#fail_on_missing_response_code_client_side FailureDetectionParameters#fail_on_missing_response_code_client_side}
  */
  readonly failOnMissingResponseCodeClientSide: boolean | cdktf.IResolvable;
  /**
  * Treat missing HTTP response code as server side errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#fail_on_missing_response_code_server_side FailureDetectionParameters#fail_on_missing_response_code_server_side}
  */
  readonly failOnMissingResponseCodeServerSide: boolean | cdktf.IResolvable;
  /**
  * HTTP response codes which indicate an error on the server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#server_side_errors FailureDetectionParameters#server_side_errors}
  */
  readonly serverSideErrors: string;
}

export function failureDetectionParametersHttpResponseCodesToTerraform(struct?: FailureDetectionParametersHttpResponseCodesOutputReference | FailureDetectionParametersHttpResponseCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_side_errors: cdktf.stringToTerraform(struct!.clientSideErrors),
    fail_on_missing_response_code_client_side: cdktf.booleanToTerraform(struct!.failOnMissingResponseCodeClientSide),
    fail_on_missing_response_code_server_side: cdktf.booleanToTerraform(struct!.failOnMissingResponseCodeServerSide),
    server_side_errors: cdktf.stringToTerraform(struct!.serverSideErrors),
  }
}


export function failureDetectionParametersHttpResponseCodesToHclTerraform(struct?: FailureDetectionParametersHttpResponseCodesOutputReference | FailureDetectionParametersHttpResponseCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_side_errors: {
      value: cdktf.stringToHclTerraform(struct!.clientSideErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_missing_response_code_client_side: {
      value: cdktf.booleanToHclTerraform(struct!.failOnMissingResponseCodeClientSide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_on_missing_response_code_server_side: {
      value: cdktf.booleanToHclTerraform(struct!.failOnMissingResponseCodeServerSide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_side_errors: {
      value: cdktf.stringToHclTerraform(struct!.serverSideErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionParametersHttpResponseCodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionParametersHttpResponseCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSideErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSideErrors = this._clientSideErrors;
    }
    if (this._failOnMissingResponseCodeClientSide !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnMissingResponseCodeClientSide = this._failOnMissingResponseCodeClientSide;
    }
    if (this._failOnMissingResponseCodeServerSide !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnMissingResponseCodeServerSide = this._failOnMissingResponseCodeServerSide;
    }
    if (this._serverSideErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideErrors = this._serverSideErrors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionParametersHttpResponseCodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientSideErrors = undefined;
      this._failOnMissingResponseCodeClientSide = undefined;
      this._failOnMissingResponseCodeServerSide = undefined;
      this._serverSideErrors = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientSideErrors = value.clientSideErrors;
      this._failOnMissingResponseCodeClientSide = value.failOnMissingResponseCodeClientSide;
      this._failOnMissingResponseCodeServerSide = value.failOnMissingResponseCodeServerSide;
      this._serverSideErrors = value.serverSideErrors;
    }
  }

  // client_side_errors - computed: false, optional: false, required: true
  private _clientSideErrors?: string; 
  public get clientSideErrors() {
    return this.getStringAttribute('client_side_errors');
  }
  public set clientSideErrors(value: string) {
    this._clientSideErrors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSideErrorsInput() {
    return this._clientSideErrors;
  }

  // fail_on_missing_response_code_client_side - computed: false, optional: false, required: true
  private _failOnMissingResponseCodeClientSide?: boolean | cdktf.IResolvable; 
  public get failOnMissingResponseCodeClientSide() {
    return this.getBooleanAttribute('fail_on_missing_response_code_client_side');
  }
  public set failOnMissingResponseCodeClientSide(value: boolean | cdktf.IResolvable) {
    this._failOnMissingResponseCodeClientSide = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnMissingResponseCodeClientSideInput() {
    return this._failOnMissingResponseCodeClientSide;
  }

  // fail_on_missing_response_code_server_side - computed: false, optional: false, required: true
  private _failOnMissingResponseCodeServerSide?: boolean | cdktf.IResolvable; 
  public get failOnMissingResponseCodeServerSide() {
    return this.getBooleanAttribute('fail_on_missing_response_code_server_side');
  }
  public set failOnMissingResponseCodeServerSide(value: boolean | cdktf.IResolvable) {
    this._failOnMissingResponseCodeServerSide = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnMissingResponseCodeServerSideInput() {
    return this._failOnMissingResponseCodeServerSide;
  }

  // server_side_errors - computed: false, optional: false, required: true
  private _serverSideErrors?: string; 
  public get serverSideErrors() {
    return this.getStringAttribute('server_side_errors');
  }
  public set serverSideErrors(value: string) {
    this._serverSideErrors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideErrorsInput() {
    return this._serverSideErrors;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters dynatrace_failure_detection_parameters}
*/
export class FailureDetectionParameters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_failure_detection_parameters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FailureDetectionParameters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FailureDetectionParameters to import
  * @param importFromId The id of the existing FailureDetectionParameters that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FailureDetectionParameters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_failure_detection_parameters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/failure_detection_parameters dynatrace_failure_detection_parameters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FailureDetectionParametersConfig
  */
  public constructor(scope: Construct, id: string, config: FailureDetectionParametersConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_failure_detection_parameters',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._brokenLinks.internalValue = config.brokenLinks;
    this._exceptionRules.internalValue = config.exceptionRules;
    this._httpResponseCodes.internalValue = config.httpResponseCodes;
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

  // broken_links - computed: false, optional: false, required: true
  private _brokenLinks = new FailureDetectionParametersBrokenLinksOutputReference(this, "broken_links");
  public get brokenLinks() {
    return this._brokenLinks;
  }
  public putBrokenLinks(value: FailureDetectionParametersBrokenLinks) {
    this._brokenLinks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokenLinksInput() {
    return this._brokenLinks.internalValue;
  }

  // exception_rules - computed: false, optional: false, required: true
  private _exceptionRules = new FailureDetectionParametersExceptionRulesOutputReference(this, "exception_rules");
  public get exceptionRules() {
    return this._exceptionRules;
  }
  public putExceptionRules(value: FailureDetectionParametersExceptionRules) {
    this._exceptionRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionRulesInput() {
    return this._exceptionRules.internalValue;
  }

  // http_response_codes - computed: false, optional: false, required: true
  private _httpResponseCodes = new FailureDetectionParametersHttpResponseCodesOutputReference(this, "http_response_codes");
  public get httpResponseCodes() {
    return this._httpResponseCodes;
  }
  public putHttpResponseCodes(value: FailureDetectionParametersHttpResponseCodes) {
    this._httpResponseCodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseCodesInput() {
    return this._httpResponseCodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      broken_links: failureDetectionParametersBrokenLinksToTerraform(this._brokenLinks.internalValue),
      exception_rules: failureDetectionParametersExceptionRulesToTerraform(this._exceptionRules.internalValue),
      http_response_codes: failureDetectionParametersHttpResponseCodesToTerraform(this._httpResponseCodes.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broken_links: {
        value: failureDetectionParametersBrokenLinksToHclTerraform(this._brokenLinks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FailureDetectionParametersBrokenLinksList",
      },
      exception_rules: {
        value: failureDetectionParametersExceptionRulesToHclTerraform(this._exceptionRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FailureDetectionParametersExceptionRulesList",
      },
      http_response_codes: {
        value: failureDetectionParametersHttpResponseCodesToHclTerraform(this._httpResponseCodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FailureDetectionParametersHttpResponseCodesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
