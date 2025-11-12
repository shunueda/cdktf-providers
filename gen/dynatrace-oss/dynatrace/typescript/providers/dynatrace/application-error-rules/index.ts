// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationErrorRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#id ApplicationErrorRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Field has overlap with `dynatrace_web_app_custom_errors`) Exclude (`true`) or include (`false`) custom errors listed in **customErrorRules** in Apdex calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#ignore_custom_errors_apdex ApplicationErrorRules#ignore_custom_errors_apdex}
  */
  readonly ignoreCustomErrorsApdex?: boolean | cdktf.IResolvable;
  /**
  * (Field has overlap with `dynatrace_web_app_request_errors`) Exclude (`true`) or include (`false`) HTTP errors listed in **httpErrorRules** in Apdex calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#ignore_http_errors_apdex ApplicationErrorRules#ignore_http_errors_apdex}
  */
  readonly ignoreHttpErrorsApdex?: boolean | cdktf.IResolvable;
  /**
  * Exclude (`true`) or include (`false`) JavaScript errors in Apdex calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#ignore_js_errors_apdex ApplicationErrorRules#ignore_js_errors_apdex}
  */
  readonly ignoreJsErrorsApdex?: boolean | cdktf.IResolvable;
  /**
  * The EntityID of the the WebApplication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#web_application_id ApplicationErrorRules#web_application_id}
  */
  readonly webApplicationId?: string;
  /**
  * custom_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#custom_errors ApplicationErrorRules#custom_errors}
  */
  readonly customErrors?: ApplicationErrorRulesCustomErrors;
  /**
  * http_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#http_errors ApplicationErrorRules#http_errors}
  */
  readonly httpErrors?: ApplicationErrorRulesHttpErrors;
}
export interface ApplicationErrorRulesCustomErrorsRule {
  /**
  * Capture (`true`) or ignore (`false`) the error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#capture ApplicationErrorRules#capture}
  */
  readonly capture?: boolean | cdktf.IResolvable;
  /**
  * Include (`true`) or exclude (`false`) the error in Davis AI [problem detection and analysis](https://dt-url.net/a963kd2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#custom_alerting ApplicationErrorRules#custom_alerting}
  */
  readonly customAlerting?: boolean | cdktf.IResolvable;
  /**
  * Include (`true`) or exclude (`false`) the error in Apdex calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#impact_apdex ApplicationErrorRules#impact_apdex}
  */
  readonly impactApdex?: boolean | cdktf.IResolvable;
  /**
  * The matching operation for the **keyPattern**. Possible values are `BEGINS_WITH`, `CONTAINS`, `ENDS_WITH` and `EQUALS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#key_matcher ApplicationErrorRules#key_matcher}
  */
  readonly keyMatcher?: string;
  /**
  * The key of the error to look for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#key_pattern ApplicationErrorRules#key_pattern}
  */
  readonly keyPattern?: string;
  /**
  * The matching operation for the **valuePattern**. Possible values are `BEGINS_WITH`, `CONTAINS`, `ENDS_WITH` and `EQUALS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#value_matcher ApplicationErrorRules#value_matcher}
  */
  readonly valueMatcher?: string;
  /**
  * The value of the error to look for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#value_pattern ApplicationErrorRules#value_pattern}
  */
  readonly valuePattern?: string;
}

export function applicationErrorRulesCustomErrorsRuleToTerraform(struct?: ApplicationErrorRulesCustomErrorsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture: cdktf.booleanToTerraform(struct!.capture),
    custom_alerting: cdktf.booleanToTerraform(struct!.customAlerting),
    impact_apdex: cdktf.booleanToTerraform(struct!.impactApdex),
    key_matcher: cdktf.stringToTerraform(struct!.keyMatcher),
    key_pattern: cdktf.stringToTerraform(struct!.keyPattern),
    value_matcher: cdktf.stringToTerraform(struct!.valueMatcher),
    value_pattern: cdktf.stringToTerraform(struct!.valuePattern),
  }
}


export function applicationErrorRulesCustomErrorsRuleToHclTerraform(struct?: ApplicationErrorRulesCustomErrorsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture: {
      value: cdktf.booleanToHclTerraform(struct!.capture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_alerting: {
      value: cdktf.booleanToHclTerraform(struct!.customAlerting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    impact_apdex: {
      value: cdktf.booleanToHclTerraform(struct!.impactApdex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_matcher: {
      value: cdktf.stringToHclTerraform(struct!.keyMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pattern: {
      value: cdktf.stringToHclTerraform(struct!.keyPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_matcher: {
      value: cdktf.stringToHclTerraform(struct!.valueMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_pattern: {
      value: cdktf.stringToHclTerraform(struct!.valuePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationErrorRulesCustomErrorsRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationErrorRulesCustomErrorsRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capture !== undefined) {
      hasAnyValues = true;
      internalValueResult.capture = this._capture;
    }
    if (this._customAlerting !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAlerting = this._customAlerting;
    }
    if (this._impactApdex !== undefined) {
      hasAnyValues = true;
      internalValueResult.impactApdex = this._impactApdex;
    }
    if (this._keyMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyMatcher = this._keyMatcher;
    }
    if (this._keyPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPattern = this._keyPattern;
    }
    if (this._valueMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMatcher = this._valueMatcher;
    }
    if (this._valuePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationErrorRulesCustomErrorsRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capture = undefined;
      this._customAlerting = undefined;
      this._impactApdex = undefined;
      this._keyMatcher = undefined;
      this._keyPattern = undefined;
      this._valueMatcher = undefined;
      this._valuePattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capture = value.capture;
      this._customAlerting = value.customAlerting;
      this._impactApdex = value.impactApdex;
      this._keyMatcher = value.keyMatcher;
      this._keyPattern = value.keyPattern;
      this._valueMatcher = value.valueMatcher;
      this._valuePattern = value.valuePattern;
    }
  }

  // capture - computed: false, optional: true, required: false
  private _capture?: boolean | cdktf.IResolvable; 
  public get capture() {
    return this.getBooleanAttribute('capture');
  }
  public set capture(value: boolean | cdktf.IResolvable) {
    this._capture = value;
  }
  public resetCapture() {
    this._capture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureInput() {
    return this._capture;
  }

  // custom_alerting - computed: false, optional: true, required: false
  private _customAlerting?: boolean | cdktf.IResolvable; 
  public get customAlerting() {
    return this.getBooleanAttribute('custom_alerting');
  }
  public set customAlerting(value: boolean | cdktf.IResolvable) {
    this._customAlerting = value;
  }
  public resetCustomAlerting() {
    this._customAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAlertingInput() {
    return this._customAlerting;
  }

  // impact_apdex - computed: false, optional: true, required: false
  private _impactApdex?: boolean | cdktf.IResolvable; 
  public get impactApdex() {
    return this.getBooleanAttribute('impact_apdex');
  }
  public set impactApdex(value: boolean | cdktf.IResolvable) {
    this._impactApdex = value;
  }
  public resetImpactApdex() {
    this._impactApdex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impactApdexInput() {
    return this._impactApdex;
  }

  // key_matcher - computed: false, optional: true, required: false
  private _keyMatcher?: string; 
  public get keyMatcher() {
    return this.getStringAttribute('key_matcher');
  }
  public set keyMatcher(value: string) {
    this._keyMatcher = value;
  }
  public resetKeyMatcher() {
    this._keyMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyMatcherInput() {
    return this._keyMatcher;
  }

  // key_pattern - computed: false, optional: true, required: false
  private _keyPattern?: string; 
  public get keyPattern() {
    return this.getStringAttribute('key_pattern');
  }
  public set keyPattern(value: string) {
    this._keyPattern = value;
  }
  public resetKeyPattern() {
    this._keyPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern;
  }

  // value_matcher - computed: false, optional: true, required: false
  private _valueMatcher?: string; 
  public get valueMatcher() {
    return this.getStringAttribute('value_matcher');
  }
  public set valueMatcher(value: string) {
    this._valueMatcher = value;
  }
  public resetValueMatcher() {
    this._valueMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMatcherInput() {
    return this._valueMatcher;
  }

  // value_pattern - computed: false, optional: true, required: false
  private _valuePattern?: string; 
  public get valuePattern() {
    return this.getStringAttribute('value_pattern');
  }
  public set valuePattern(value: string) {
    this._valuePattern = value;
  }
  public resetValuePattern() {
    this._valuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern;
  }
}

export class ApplicationErrorRulesCustomErrorsRuleList extends cdktf.ComplexList {
  public internalValue? : ApplicationErrorRulesCustomErrorsRule[] | cdktf.IResolvable

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
  public get(index: number): ApplicationErrorRulesCustomErrorsRuleOutputReference {
    return new ApplicationErrorRulesCustomErrorsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationErrorRulesCustomErrors {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#rule ApplicationErrorRules#rule}
  */
  readonly rule: ApplicationErrorRulesCustomErrorsRule[] | cdktf.IResolvable;
}

export function applicationErrorRulesCustomErrorsToTerraform(struct?: ApplicationErrorRulesCustomErrorsOutputReference | ApplicationErrorRulesCustomErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(applicationErrorRulesCustomErrorsRuleToTerraform, true)(struct!.rule),
  }
}


export function applicationErrorRulesCustomErrorsToHclTerraform(struct?: ApplicationErrorRulesCustomErrorsOutputReference | ApplicationErrorRulesCustomErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(applicationErrorRulesCustomErrorsRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationErrorRulesCustomErrorsRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationErrorRulesCustomErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationErrorRulesCustomErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationErrorRulesCustomErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new ApplicationErrorRulesCustomErrorsRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ApplicationErrorRulesCustomErrorsRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface ApplicationErrorRulesHttpErrorsRule {
  /**
  * Capture (`true`) or ignore (`false`) the error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#capture ApplicationErrorRules#capture}
  */
  readonly capture?: boolean | cdktf.IResolvable;
  /**
  * If `true`, match by errors that have CSP Rule violations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#consider_blocked_requests ApplicationErrorRules#consider_blocked_requests}
  */
  readonly considerBlockedRequests?: boolean | cdktf.IResolvable;
  /**
  * Include (`true`) or exclude (`false`) the error in Davis AI [problem detection and analysis](https://dt-url.net/a963kd2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#consider_for_ai ApplicationErrorRules#consider_for_ai}
  */
  readonly considerForAi?: boolean | cdktf.IResolvable;
  /**
  * If `true`, match by errors that have unknown HTTP status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#consider_unknown_error_code ApplicationErrorRules#consider_unknown_error_code}
  */
  readonly considerUnknownErrorCode?: boolean | cdktf.IResolvable;
  /**
  * The HTTP status code or status code range to match by. 
  * 
  * This field is required if **considerUnknownErrorCode** AND **considerBlockedRequests** are both set to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#error_codes ApplicationErrorRules#error_codes}
  */
  readonly errorCodes?: string;
  /**
  * The matching rule for the URL. Popssible values are `BEGINS_WITH`, `CONTAINS`, `ENDS_WITH` and `EQUALS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#filter ApplicationErrorRules#filter}
  */
  readonly filter?: string;
  /**
  * If `true`, filter errors by URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#filter_by_url ApplicationErrorRules#filter_by_url}
  */
  readonly filterByUrl?: boolean | cdktf.IResolvable;
  /**
  * Include (`true`) or exclude (`false`) the error in Apdex calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#impact_apdex ApplicationErrorRules#impact_apdex}
  */
  readonly impactApdex?: boolean | cdktf.IResolvable;
  /**
  * The URL to look for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#url ApplicationErrorRules#url}
  */
  readonly url?: string;
}

export function applicationErrorRulesHttpErrorsRuleToTerraform(struct?: ApplicationErrorRulesHttpErrorsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture: cdktf.booleanToTerraform(struct!.capture),
    consider_blocked_requests: cdktf.booleanToTerraform(struct!.considerBlockedRequests),
    consider_for_ai: cdktf.booleanToTerraform(struct!.considerForAi),
    consider_unknown_error_code: cdktf.booleanToTerraform(struct!.considerUnknownErrorCode),
    error_codes: cdktf.stringToTerraform(struct!.errorCodes),
    filter: cdktf.stringToTerraform(struct!.filter),
    filter_by_url: cdktf.booleanToTerraform(struct!.filterByUrl),
    impact_apdex: cdktf.booleanToTerraform(struct!.impactApdex),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function applicationErrorRulesHttpErrorsRuleToHclTerraform(struct?: ApplicationErrorRulesHttpErrorsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture: {
      value: cdktf.booleanToHclTerraform(struct!.capture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consider_blocked_requests: {
      value: cdktf.booleanToHclTerraform(struct!.considerBlockedRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consider_for_ai: {
      value: cdktf.booleanToHclTerraform(struct!.considerForAi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consider_unknown_error_code: {
      value: cdktf.booleanToHclTerraform(struct!.considerUnknownErrorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    error_codes: {
      value: cdktf.stringToHclTerraform(struct!.errorCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_by_url: {
      value: cdktf.booleanToHclTerraform(struct!.filterByUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    impact_apdex: {
      value: cdktf.booleanToHclTerraform(struct!.impactApdex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationErrorRulesHttpErrorsRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationErrorRulesHttpErrorsRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capture !== undefined) {
      hasAnyValues = true;
      internalValueResult.capture = this._capture;
    }
    if (this._considerBlockedRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.considerBlockedRequests = this._considerBlockedRequests;
    }
    if (this._considerForAi !== undefined) {
      hasAnyValues = true;
      internalValueResult.considerForAi = this._considerForAi;
    }
    if (this._considerUnknownErrorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.considerUnknownErrorCode = this._considerUnknownErrorCode;
    }
    if (this._errorCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCodes = this._errorCodes;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._filterByUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterByUrl = this._filterByUrl;
    }
    if (this._impactApdex !== undefined) {
      hasAnyValues = true;
      internalValueResult.impactApdex = this._impactApdex;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationErrorRulesHttpErrorsRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capture = undefined;
      this._considerBlockedRequests = undefined;
      this._considerForAi = undefined;
      this._considerUnknownErrorCode = undefined;
      this._errorCodes = undefined;
      this._filter = undefined;
      this._filterByUrl = undefined;
      this._impactApdex = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capture = value.capture;
      this._considerBlockedRequests = value.considerBlockedRequests;
      this._considerForAi = value.considerForAi;
      this._considerUnknownErrorCode = value.considerUnknownErrorCode;
      this._errorCodes = value.errorCodes;
      this._filter = value.filter;
      this._filterByUrl = value.filterByUrl;
      this._impactApdex = value.impactApdex;
      this._url = value.url;
    }
  }

  // capture - computed: false, optional: true, required: false
  private _capture?: boolean | cdktf.IResolvable; 
  public get capture() {
    return this.getBooleanAttribute('capture');
  }
  public set capture(value: boolean | cdktf.IResolvable) {
    this._capture = value;
  }
  public resetCapture() {
    this._capture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureInput() {
    return this._capture;
  }

  // consider_blocked_requests - computed: false, optional: true, required: false
  private _considerBlockedRequests?: boolean | cdktf.IResolvable; 
  public get considerBlockedRequests() {
    return this.getBooleanAttribute('consider_blocked_requests');
  }
  public set considerBlockedRequests(value: boolean | cdktf.IResolvable) {
    this._considerBlockedRequests = value;
  }
  public resetConsiderBlockedRequests() {
    this._considerBlockedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get considerBlockedRequestsInput() {
    return this._considerBlockedRequests;
  }

  // consider_for_ai - computed: false, optional: true, required: false
  private _considerForAi?: boolean | cdktf.IResolvable; 
  public get considerForAi() {
    return this.getBooleanAttribute('consider_for_ai');
  }
  public set considerForAi(value: boolean | cdktf.IResolvable) {
    this._considerForAi = value;
  }
  public resetConsiderForAi() {
    this._considerForAi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get considerForAiInput() {
    return this._considerForAi;
  }

  // consider_unknown_error_code - computed: false, optional: true, required: false
  private _considerUnknownErrorCode?: boolean | cdktf.IResolvable; 
  public get considerUnknownErrorCode() {
    return this.getBooleanAttribute('consider_unknown_error_code');
  }
  public set considerUnknownErrorCode(value: boolean | cdktf.IResolvable) {
    this._considerUnknownErrorCode = value;
  }
  public resetConsiderUnknownErrorCode() {
    this._considerUnknownErrorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get considerUnknownErrorCodeInput() {
    return this._considerUnknownErrorCode;
  }

  // error_codes - computed: false, optional: true, required: false
  private _errorCodes?: string; 
  public get errorCodes() {
    return this.getStringAttribute('error_codes');
  }
  public set errorCodes(value: string) {
    this._errorCodes = value;
  }
  public resetErrorCodes() {
    this._errorCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodesInput() {
    return this._errorCodes;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_by_url - computed: false, optional: true, required: false
  private _filterByUrl?: boolean | cdktf.IResolvable; 
  public get filterByUrl() {
    return this.getBooleanAttribute('filter_by_url');
  }
  public set filterByUrl(value: boolean | cdktf.IResolvable) {
    this._filterByUrl = value;
  }
  public resetFilterByUrl() {
    this._filterByUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByUrlInput() {
    return this._filterByUrl;
  }

  // impact_apdex - computed: false, optional: true, required: false
  private _impactApdex?: boolean | cdktf.IResolvable; 
  public get impactApdex() {
    return this.getBooleanAttribute('impact_apdex');
  }
  public set impactApdex(value: boolean | cdktf.IResolvable) {
    this._impactApdex = value;
  }
  public resetImpactApdex() {
    this._impactApdex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impactApdexInput() {
    return this._impactApdex;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ApplicationErrorRulesHttpErrorsRuleList extends cdktf.ComplexList {
  public internalValue? : ApplicationErrorRulesHttpErrorsRule[] | cdktf.IResolvable

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
  public get(index: number): ApplicationErrorRulesHttpErrorsRuleOutputReference {
    return new ApplicationErrorRulesHttpErrorsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationErrorRulesHttpErrors {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#rule ApplicationErrorRules#rule}
  */
  readonly rule: ApplicationErrorRulesHttpErrorsRule[] | cdktf.IResolvable;
}

export function applicationErrorRulesHttpErrorsToTerraform(struct?: ApplicationErrorRulesHttpErrorsOutputReference | ApplicationErrorRulesHttpErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(applicationErrorRulesHttpErrorsRuleToTerraform, true)(struct!.rule),
  }
}


export function applicationErrorRulesHttpErrorsToHclTerraform(struct?: ApplicationErrorRulesHttpErrorsOutputReference | ApplicationErrorRulesHttpErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(applicationErrorRulesHttpErrorsRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationErrorRulesHttpErrorsRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationErrorRulesHttpErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationErrorRulesHttpErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationErrorRulesHttpErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new ApplicationErrorRulesHttpErrorsRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ApplicationErrorRulesHttpErrorsRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules dynatrace_application_error_rules}
*/
export class ApplicationErrorRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_application_error_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationErrorRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationErrorRules to import
  * @param importFromId The id of the existing ApplicationErrorRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationErrorRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_application_error_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_error_rules dynatrace_application_error_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationErrorRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplicationErrorRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_application_error_rules',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ignoreCustomErrorsApdex = config.ignoreCustomErrorsApdex;
    this._ignoreHttpErrorsApdex = config.ignoreHttpErrorsApdex;
    this._ignoreJsErrorsApdex = config.ignoreJsErrorsApdex;
    this._webApplicationId = config.webApplicationId;
    this._customErrors.internalValue = config.customErrors;
    this._httpErrors.internalValue = config.httpErrors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ignore_custom_errors_apdex - computed: false, optional: true, required: false
  private _ignoreCustomErrorsApdex?: boolean | cdktf.IResolvable; 
  public get ignoreCustomErrorsApdex() {
    return this.getBooleanAttribute('ignore_custom_errors_apdex');
  }
  public set ignoreCustomErrorsApdex(value: boolean | cdktf.IResolvable) {
    this._ignoreCustomErrorsApdex = value;
  }
  public resetIgnoreCustomErrorsApdex() {
    this._ignoreCustomErrorsApdex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCustomErrorsApdexInput() {
    return this._ignoreCustomErrorsApdex;
  }

  // ignore_http_errors_apdex - computed: false, optional: true, required: false
  private _ignoreHttpErrorsApdex?: boolean | cdktf.IResolvable; 
  public get ignoreHttpErrorsApdex() {
    return this.getBooleanAttribute('ignore_http_errors_apdex');
  }
  public set ignoreHttpErrorsApdex(value: boolean | cdktf.IResolvable) {
    this._ignoreHttpErrorsApdex = value;
  }
  public resetIgnoreHttpErrorsApdex() {
    this._ignoreHttpErrorsApdex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttpErrorsApdexInput() {
    return this._ignoreHttpErrorsApdex;
  }

  // ignore_js_errors_apdex - computed: false, optional: true, required: false
  private _ignoreJsErrorsApdex?: boolean | cdktf.IResolvable; 
  public get ignoreJsErrorsApdex() {
    return this.getBooleanAttribute('ignore_js_errors_apdex');
  }
  public set ignoreJsErrorsApdex(value: boolean | cdktf.IResolvable) {
    this._ignoreJsErrorsApdex = value;
  }
  public resetIgnoreJsErrorsApdex() {
    this._ignoreJsErrorsApdex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreJsErrorsApdexInput() {
    return this._ignoreJsErrorsApdex;
  }

  // web_application_id - computed: false, optional: true, required: false
  private _webApplicationId?: string; 
  public get webApplicationId() {
    return this.getStringAttribute('web_application_id');
  }
  public set webApplicationId(value: string) {
    this._webApplicationId = value;
  }
  public resetWebApplicationId() {
    this._webApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webApplicationIdInput() {
    return this._webApplicationId;
  }

  // custom_errors - computed: false, optional: true, required: false
  private _customErrors = new ApplicationErrorRulesCustomErrorsOutputReference(this, "custom_errors");
  public get customErrors() {
    return this._customErrors;
  }
  public putCustomErrors(value: ApplicationErrorRulesCustomErrors) {
    this._customErrors.internalValue = value;
  }
  public resetCustomErrors() {
    this._customErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorsInput() {
    return this._customErrors.internalValue;
  }

  // http_errors - computed: false, optional: true, required: false
  private _httpErrors = new ApplicationErrorRulesHttpErrorsOutputReference(this, "http_errors");
  public get httpErrors() {
    return this._httpErrors;
  }
  public putHttpErrors(value: ApplicationErrorRulesHttpErrors) {
    this._httpErrors.internalValue = value;
  }
  public resetHttpErrors() {
    this._httpErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpErrorsInput() {
    return this._httpErrors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ignore_custom_errors_apdex: cdktf.booleanToTerraform(this._ignoreCustomErrorsApdex),
      ignore_http_errors_apdex: cdktf.booleanToTerraform(this._ignoreHttpErrorsApdex),
      ignore_js_errors_apdex: cdktf.booleanToTerraform(this._ignoreJsErrorsApdex),
      web_application_id: cdktf.stringToTerraform(this._webApplicationId),
      custom_errors: applicationErrorRulesCustomErrorsToTerraform(this._customErrors.internalValue),
      http_errors: applicationErrorRulesHttpErrorsToTerraform(this._httpErrors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_custom_errors_apdex: {
        value: cdktf.booleanToHclTerraform(this._ignoreCustomErrorsApdex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_http_errors_apdex: {
        value: cdktf.booleanToHclTerraform(this._ignoreHttpErrorsApdex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_js_errors_apdex: {
        value: cdktf.booleanToHclTerraform(this._ignoreJsErrorsApdex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_application_id: {
        value: cdktf.stringToHclTerraform(this._webApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_errors: {
        value: applicationErrorRulesCustomErrorsToHclTerraform(this._customErrors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationErrorRulesCustomErrorsList",
      },
      http_errors: {
        value: applicationErrorRulesHttpErrorsToHclTerraform(this._httpErrors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationErrorRulesHttpErrorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
