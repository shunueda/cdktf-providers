// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppRequestErrorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#id WebAppRequestErrors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Field has overlap with `dynatrace_application_error_rules`) This setting overrides Apdex settings for individual rules listed below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#ignore_request_errors_in_apdex_calculation WebAppRequestErrors#ignore_request_errors_in_apdex_calculation}
  */
  readonly ignoreRequestErrorsInApdexCalculation: boolean | cdktf.IResolvable;
  /**
  * The scope of this setting (APPLICATION)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#scope WebAppRequestErrors#scope}
  */
  readonly scope: string;
  /**
  * error_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#error_rules WebAppRequestErrors#error_rules}
  */
  readonly errorRules?: WebAppRequestErrorsErrorRules;
}
export interface WebAppRequestErrorsErrorRulesErrorRuleCaptureSettings {
  /**
  * Capture this error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#capture WebAppRequestErrors#capture}
  */
  readonly capture: boolean | cdktf.IResolvable;
  /**
  * [View more details](https://dt-url.net/hd580p2k)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#consider_for_ai WebAppRequestErrors#consider_for_ai}
  */
  readonly considerForAi?: boolean | cdktf.IResolvable;
  /**
  * Include error in Apdex calculations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#impact_apdex WebAppRequestErrors#impact_apdex}
  */
  readonly impactApdex?: boolean | cdktf.IResolvable;
}

export function webAppRequestErrorsErrorRulesErrorRuleCaptureSettingsToTerraform(struct?: WebAppRequestErrorsErrorRulesErrorRuleCaptureSettingsOutputReference | WebAppRequestErrorsErrorRulesErrorRuleCaptureSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture: cdktf.booleanToTerraform(struct!.capture),
    consider_for_ai: cdktf.booleanToTerraform(struct!.considerForAi),
    impact_apdex: cdktf.booleanToTerraform(struct!.impactApdex),
  }
}


export function webAppRequestErrorsErrorRulesErrorRuleCaptureSettingsToHclTerraform(struct?: WebAppRequestErrorsErrorRulesErrorRuleCaptureSettingsOutputReference | WebAppRequestErrorsErrorRulesErrorRuleCaptureSettings): any {
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
    consider_for_ai: {
      value: cdktf.booleanToHclTerraform(struct!.considerForAi),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppRequestErrorsErrorRulesErrorRuleCaptureSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppRequestErrorsErrorRulesErrorRuleCaptureSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capture !== undefined) {
      hasAnyValues = true;
      internalValueResult.capture = this._capture;
    }
    if (this._considerForAi !== undefined) {
      hasAnyValues = true;
      internalValueResult.considerForAi = this._considerForAi;
    }
    if (this._impactApdex !== undefined) {
      hasAnyValues = true;
      internalValueResult.impactApdex = this._impactApdex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppRequestErrorsErrorRulesErrorRuleCaptureSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capture = undefined;
      this._considerForAi = undefined;
      this._impactApdex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capture = value.capture;
      this._considerForAi = value.considerForAi;
      this._impactApdex = value.impactApdex;
    }
  }

  // capture - computed: false, optional: false, required: true
  private _capture?: boolean | cdktf.IResolvable; 
  public get capture() {
    return this.getBooleanAttribute('capture');
  }
  public set capture(value: boolean | cdktf.IResolvable) {
    this._capture = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureInput() {
    return this._capture;
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
}
export interface WebAppRequestErrorsErrorRulesErrorRuleFilterSettings {
  /**
  * Possible Values: `BEGINS_WITH`, `CONTAINS`, `ENDS_WITH`, `EQUALS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#filter WebAppRequestErrors#filter}
  */
  readonly filter?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#url WebAppRequestErrors#url}
  */
  readonly url?: string;
}

export function webAppRequestErrorsErrorRulesErrorRuleFilterSettingsToTerraform(struct?: WebAppRequestErrorsErrorRulesErrorRuleFilterSettingsOutputReference | WebAppRequestErrorsErrorRulesErrorRuleFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function webAppRequestErrorsErrorRulesErrorRuleFilterSettingsToHclTerraform(struct?: WebAppRequestErrorsErrorRulesErrorRuleFilterSettingsOutputReference | WebAppRequestErrorsErrorRulesErrorRuleFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class WebAppRequestErrorsErrorRulesErrorRuleFilterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppRequestErrorsErrorRulesErrorRuleFilterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppRequestErrorsErrorRulesErrorRuleFilterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._url = value.url;
    }
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
export interface WebAppRequestErrorsErrorRulesErrorRule {
  /**
  * Match by errors that have CSP violations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#consider_csp_violations WebAppRequestErrors#consider_csp_violations}
  */
  readonly considerCspViolations: boolean | cdktf.IResolvable;
  /**
  * Match by errors that have failed image requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#consider_failed_images WebAppRequestErrors#consider_failed_images}
  */
  readonly considerFailedImages: boolean | cdktf.IResolvable;
  /**
  * Match by error code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#error_codes WebAppRequestErrors#error_codes}
  */
  readonly errorCodes?: string;
  /**
  * capture_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#capture_settings WebAppRequestErrors#capture_settings}
  */
  readonly captureSettings: WebAppRequestErrorsErrorRulesErrorRuleCaptureSettings;
  /**
  * filter_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#filter_settings WebAppRequestErrors#filter_settings}
  */
  readonly filterSettings: WebAppRequestErrorsErrorRulesErrorRuleFilterSettings;
}

export function webAppRequestErrorsErrorRulesErrorRuleToTerraform(struct?: WebAppRequestErrorsErrorRulesErrorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consider_csp_violations: cdktf.booleanToTerraform(struct!.considerCspViolations),
    consider_failed_images: cdktf.booleanToTerraform(struct!.considerFailedImages),
    error_codes: cdktf.stringToTerraform(struct!.errorCodes),
    capture_settings: webAppRequestErrorsErrorRulesErrorRuleCaptureSettingsToTerraform(struct!.captureSettings),
    filter_settings: webAppRequestErrorsErrorRulesErrorRuleFilterSettingsToTerraform(struct!.filterSettings),
  }
}


export function webAppRequestErrorsErrorRulesErrorRuleToHclTerraform(struct?: WebAppRequestErrorsErrorRulesErrorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consider_csp_violations: {
      value: cdktf.booleanToHclTerraform(struct!.considerCspViolations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consider_failed_images: {
      value: cdktf.booleanToHclTerraform(struct!.considerFailedImages),
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
    capture_settings: {
      value: webAppRequestErrorsErrorRulesErrorRuleCaptureSettingsToHclTerraform(struct!.captureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppRequestErrorsErrorRulesErrorRuleCaptureSettingsList",
    },
    filter_settings: {
      value: webAppRequestErrorsErrorRulesErrorRuleFilterSettingsToHclTerraform(struct!.filterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppRequestErrorsErrorRulesErrorRuleFilterSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppRequestErrorsErrorRulesErrorRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebAppRequestErrorsErrorRulesErrorRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._considerCspViolations !== undefined) {
      hasAnyValues = true;
      internalValueResult.considerCspViolations = this._considerCspViolations;
    }
    if (this._considerFailedImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.considerFailedImages = this._considerFailedImages;
    }
    if (this._errorCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCodes = this._errorCodes;
    }
    if (this._captureSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureSettings = this._captureSettings?.internalValue;
    }
    if (this._filterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSettings = this._filterSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppRequestErrorsErrorRulesErrorRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._considerCspViolations = undefined;
      this._considerFailedImages = undefined;
      this._errorCodes = undefined;
      this._captureSettings.internalValue = undefined;
      this._filterSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._considerCspViolations = value.considerCspViolations;
      this._considerFailedImages = value.considerFailedImages;
      this._errorCodes = value.errorCodes;
      this._captureSettings.internalValue = value.captureSettings;
      this._filterSettings.internalValue = value.filterSettings;
    }
  }

  // consider_csp_violations - computed: false, optional: false, required: true
  private _considerCspViolations?: boolean | cdktf.IResolvable; 
  public get considerCspViolations() {
    return this.getBooleanAttribute('consider_csp_violations');
  }
  public set considerCspViolations(value: boolean | cdktf.IResolvable) {
    this._considerCspViolations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get considerCspViolationsInput() {
    return this._considerCspViolations;
  }

  // consider_failed_images - computed: false, optional: false, required: true
  private _considerFailedImages?: boolean | cdktf.IResolvable; 
  public get considerFailedImages() {
    return this.getBooleanAttribute('consider_failed_images');
  }
  public set considerFailedImages(value: boolean | cdktf.IResolvable) {
    this._considerFailedImages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get considerFailedImagesInput() {
    return this._considerFailedImages;
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

  // capture_settings - computed: false, optional: false, required: true
  private _captureSettings = new WebAppRequestErrorsErrorRulesErrorRuleCaptureSettingsOutputReference(this, "capture_settings");
  public get captureSettings() {
    return this._captureSettings;
  }
  public putCaptureSettings(value: WebAppRequestErrorsErrorRulesErrorRuleCaptureSettings) {
    this._captureSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureSettingsInput() {
    return this._captureSettings.internalValue;
  }

  // filter_settings - computed: false, optional: false, required: true
  private _filterSettings = new WebAppRequestErrorsErrorRulesErrorRuleFilterSettingsOutputReference(this, "filter_settings");
  public get filterSettings() {
    return this._filterSettings;
  }
  public putFilterSettings(value: WebAppRequestErrorsErrorRulesErrorRuleFilterSettings) {
    this._filterSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSettingsInput() {
    return this._filterSettings.internalValue;
  }
}

export class WebAppRequestErrorsErrorRulesErrorRuleList extends cdktf.ComplexList {
  public internalValue? : WebAppRequestErrorsErrorRulesErrorRule[] | cdktf.IResolvable

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
  public get(index: number): WebAppRequestErrorsErrorRulesErrorRuleOutputReference {
    return new WebAppRequestErrorsErrorRulesErrorRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebAppRequestErrorsErrorRules {
  /**
  * error_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#error_rule WebAppRequestErrors#error_rule}
  */
  readonly errorRule: WebAppRequestErrorsErrorRulesErrorRule[] | cdktf.IResolvable;
}

export function webAppRequestErrorsErrorRulesToTerraform(struct?: WebAppRequestErrorsErrorRulesOutputReference | WebAppRequestErrorsErrorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_rule: cdktf.listMapper(webAppRequestErrorsErrorRulesErrorRuleToTerraform, true)(struct!.errorRule),
  }
}


export function webAppRequestErrorsErrorRulesToHclTerraform(struct?: WebAppRequestErrorsErrorRulesOutputReference | WebAppRequestErrorsErrorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_rule: {
      value: cdktf.listMapperHcl(webAppRequestErrorsErrorRulesErrorRuleToHclTerraform, true)(struct!.errorRule),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppRequestErrorsErrorRulesErrorRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppRequestErrorsErrorRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppRequestErrorsErrorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRule = this._errorRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppRequestErrorsErrorRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorRule.internalValue = value.errorRule;
    }
  }

  // error_rule - computed: false, optional: false, required: true
  private _errorRule = new WebAppRequestErrorsErrorRulesErrorRuleList(this, "error_rule", false);
  public get errorRule() {
    return this._errorRule;
  }
  public putErrorRule(value: WebAppRequestErrorsErrorRulesErrorRule[] | cdktf.IResolvable) {
    this._errorRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRuleInput() {
    return this._errorRule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors dynatrace_web_app_request_errors}
*/
export class WebAppRequestErrors extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_request_errors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppRequestErrors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppRequestErrors to import
  * @param importFromId The id of the existing WebAppRequestErrors that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppRequestErrors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_request_errors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_request_errors dynatrace_web_app_request_errors} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppRequestErrorsConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppRequestErrorsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_request_errors',
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
    this._ignoreRequestErrorsInApdexCalculation = config.ignoreRequestErrorsInApdexCalculation;
    this._scope = config.scope;
    this._errorRules.internalValue = config.errorRules;
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

  // ignore_request_errors_in_apdex_calculation - computed: false, optional: false, required: true
  private _ignoreRequestErrorsInApdexCalculation?: boolean | cdktf.IResolvable; 
  public get ignoreRequestErrorsInApdexCalculation() {
    return this.getBooleanAttribute('ignore_request_errors_in_apdex_calculation');
  }
  public set ignoreRequestErrorsInApdexCalculation(value: boolean | cdktf.IResolvable) {
    this._ignoreRequestErrorsInApdexCalculation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRequestErrorsInApdexCalculationInput() {
    return this._ignoreRequestErrorsInApdexCalculation;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // error_rules - computed: false, optional: true, required: false
  private _errorRules = new WebAppRequestErrorsErrorRulesOutputReference(this, "error_rules");
  public get errorRules() {
    return this._errorRules;
  }
  public putErrorRules(value: WebAppRequestErrorsErrorRules) {
    this._errorRules.internalValue = value;
  }
  public resetErrorRules() {
    this._errorRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRulesInput() {
    return this._errorRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ignore_request_errors_in_apdex_calculation: cdktf.booleanToTerraform(this._ignoreRequestErrorsInApdexCalculation),
      scope: cdktf.stringToTerraform(this._scope),
      error_rules: webAppRequestErrorsErrorRulesToTerraform(this._errorRules.internalValue),
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
      ignore_request_errors_in_apdex_calculation: {
        value: cdktf.booleanToHclTerraform(this._ignoreRequestErrorsInApdexCalculation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_rules: {
        value: webAppRequestErrorsErrorRulesToHclTerraform(this._errorRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppRequestErrorsErrorRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
