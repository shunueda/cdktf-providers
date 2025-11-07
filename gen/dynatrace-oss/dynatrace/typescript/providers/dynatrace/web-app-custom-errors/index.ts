// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppCustomErrorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#id WebAppCustomErrors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Field has overlap with `dynatrace_application_error_rules`) This setting overrides Apdex settings for individual rules listed below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#ignore_custom_errors_in_apdex_calculation WebAppCustomErrors#ignore_custom_errors_in_apdex_calculation}
  */
  readonly ignoreCustomErrorsInApdexCalculation: boolean | cdktf.IResolvable;
  /**
  * The scope of this setting (APPLICATION)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#scope WebAppCustomErrors#scope}
  */
  readonly scope: string;
  /**
  * error_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#error_rules WebAppCustomErrors#error_rules}
  */
  readonly errorRules?: WebAppCustomErrorsErrorRules;
}
export interface WebAppCustomErrorsErrorRulesErrorRuleCaptureSettings {
  /**
  * Capture this error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#capture WebAppCustomErrors#capture}
  */
  readonly capture: boolean | cdktf.IResolvable;
  /**
  * [View more details](https://dt-url.net/hd580p2k)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#consider_for_ai WebAppCustomErrors#consider_for_ai}
  */
  readonly considerForAi?: boolean | cdktf.IResolvable;
  /**
  * Include error in Apdex calculations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#impact_apdex WebAppCustomErrors#impact_apdex}
  */
  readonly impactApdex?: boolean | cdktf.IResolvable;
}

export function webAppCustomErrorsErrorRulesErrorRuleCaptureSettingsToTerraform(struct?: WebAppCustomErrorsErrorRulesErrorRuleCaptureSettingsOutputReference | WebAppCustomErrorsErrorRulesErrorRuleCaptureSettings): any {
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


export function webAppCustomErrorsErrorRulesErrorRuleCaptureSettingsToHclTerraform(struct?: WebAppCustomErrorsErrorRulesErrorRuleCaptureSettingsOutputReference | WebAppCustomErrorsErrorRulesErrorRuleCaptureSettings): any {
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

export class WebAppCustomErrorsErrorRulesErrorRuleCaptureSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppCustomErrorsErrorRulesErrorRuleCaptureSettings | undefined {
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

  public set internalValue(value: WebAppCustomErrorsErrorRulesErrorRuleCaptureSettings | undefined) {
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
export interface WebAppCustomErrorsErrorRulesErrorRule {
  /**
  * Possible Values: `ALL`, `BEGINS_WITH`, `CONTAINS`, `ENDS_WITH`, `EQUALS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#key_matcher WebAppCustomErrors#key_matcher}
  */
  readonly keyMatcher: string;
  /**
  * A case-insensitive key pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#key_pattern WebAppCustomErrors#key_pattern}
  */
  readonly keyPattern?: string;
  /**
  * Possible Values: `ALL`, `BEGINS_WITH`, `CONTAINS`, `ENDS_WITH`, `EQUALS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#value_matcher WebAppCustomErrors#value_matcher}
  */
  readonly valueMatcher: string;
  /**
  * A case-insensitive value pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#value_pattern WebAppCustomErrors#value_pattern}
  */
  readonly valuePattern?: string;
  /**
  * capture_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#capture_settings WebAppCustomErrors#capture_settings}
  */
  readonly captureSettings: WebAppCustomErrorsErrorRulesErrorRuleCaptureSettings;
}

export function webAppCustomErrorsErrorRulesErrorRuleToTerraform(struct?: WebAppCustomErrorsErrorRulesErrorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_matcher: cdktf.stringToTerraform(struct!.keyMatcher),
    key_pattern: cdktf.stringToTerraform(struct!.keyPattern),
    value_matcher: cdktf.stringToTerraform(struct!.valueMatcher),
    value_pattern: cdktf.stringToTerraform(struct!.valuePattern),
    capture_settings: webAppCustomErrorsErrorRulesErrorRuleCaptureSettingsToTerraform(struct!.captureSettings),
  }
}


export function webAppCustomErrorsErrorRulesErrorRuleToHclTerraform(struct?: WebAppCustomErrorsErrorRulesErrorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    capture_settings: {
      value: webAppCustomErrorsErrorRulesErrorRuleCaptureSettingsToHclTerraform(struct!.captureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppCustomErrorsErrorRulesErrorRuleCaptureSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppCustomErrorsErrorRulesErrorRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebAppCustomErrorsErrorRulesErrorRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._captureSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureSettings = this._captureSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppCustomErrorsErrorRulesErrorRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyMatcher = undefined;
      this._keyPattern = undefined;
      this._valueMatcher = undefined;
      this._valuePattern = undefined;
      this._captureSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyMatcher = value.keyMatcher;
      this._keyPattern = value.keyPattern;
      this._valueMatcher = value.valueMatcher;
      this._valuePattern = value.valuePattern;
      this._captureSettings.internalValue = value.captureSettings;
    }
  }

  // key_matcher - computed: false, optional: false, required: true
  private _keyMatcher?: string; 
  public get keyMatcher() {
    return this.getStringAttribute('key_matcher');
  }
  public set keyMatcher(value: string) {
    this._keyMatcher = value;
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

  // value_matcher - computed: false, optional: false, required: true
  private _valueMatcher?: string; 
  public get valueMatcher() {
    return this.getStringAttribute('value_matcher');
  }
  public set valueMatcher(value: string) {
    this._valueMatcher = value;
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

  // capture_settings - computed: false, optional: false, required: true
  private _captureSettings = new WebAppCustomErrorsErrorRulesErrorRuleCaptureSettingsOutputReference(this, "capture_settings");
  public get captureSettings() {
    return this._captureSettings;
  }
  public putCaptureSettings(value: WebAppCustomErrorsErrorRulesErrorRuleCaptureSettings) {
    this._captureSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureSettingsInput() {
    return this._captureSettings.internalValue;
  }
}

export class WebAppCustomErrorsErrorRulesErrorRuleList extends cdktf.ComplexList {
  public internalValue? : WebAppCustomErrorsErrorRulesErrorRule[] | cdktf.IResolvable

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
  public get(index: number): WebAppCustomErrorsErrorRulesErrorRuleOutputReference {
    return new WebAppCustomErrorsErrorRulesErrorRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebAppCustomErrorsErrorRules {
  /**
  * error_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#error_rule WebAppCustomErrors#error_rule}
  */
  readonly errorRule: WebAppCustomErrorsErrorRulesErrorRule[] | cdktf.IResolvable;
}

export function webAppCustomErrorsErrorRulesToTerraform(struct?: WebAppCustomErrorsErrorRulesOutputReference | WebAppCustomErrorsErrorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_rule: cdktf.listMapper(webAppCustomErrorsErrorRulesErrorRuleToTerraform, true)(struct!.errorRule),
  }
}


export function webAppCustomErrorsErrorRulesToHclTerraform(struct?: WebAppCustomErrorsErrorRulesOutputReference | WebAppCustomErrorsErrorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_rule: {
      value: cdktf.listMapperHcl(webAppCustomErrorsErrorRulesErrorRuleToHclTerraform, true)(struct!.errorRule),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppCustomErrorsErrorRulesErrorRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppCustomErrorsErrorRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppCustomErrorsErrorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRule = this._errorRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppCustomErrorsErrorRules | undefined) {
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
  private _errorRule = new WebAppCustomErrorsErrorRulesErrorRuleList(this, "error_rule", false);
  public get errorRule() {
    return this._errorRule;
  }
  public putErrorRule(value: WebAppCustomErrorsErrorRulesErrorRule[] | cdktf.IResolvable) {
    this._errorRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRuleInput() {
    return this._errorRule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors dynatrace_web_app_custom_errors}
*/
export class WebAppCustomErrors extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_custom_errors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppCustomErrors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppCustomErrors to import
  * @param importFromId The id of the existing WebAppCustomErrors that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppCustomErrors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_custom_errors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_custom_errors dynatrace_web_app_custom_errors} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppCustomErrorsConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppCustomErrorsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_custom_errors',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
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
    this._ignoreCustomErrorsInApdexCalculation = config.ignoreCustomErrorsInApdexCalculation;
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

  // ignore_custom_errors_in_apdex_calculation - computed: false, optional: false, required: true
  private _ignoreCustomErrorsInApdexCalculation?: boolean | cdktf.IResolvable; 
  public get ignoreCustomErrorsInApdexCalculation() {
    return this.getBooleanAttribute('ignore_custom_errors_in_apdex_calculation');
  }
  public set ignoreCustomErrorsInApdexCalculation(value: boolean | cdktf.IResolvable) {
    this._ignoreCustomErrorsInApdexCalculation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCustomErrorsInApdexCalculationInput() {
    return this._ignoreCustomErrorsInApdexCalculation;
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
  private _errorRules = new WebAppCustomErrorsErrorRulesOutputReference(this, "error_rules");
  public get errorRules() {
    return this._errorRules;
  }
  public putErrorRules(value: WebAppCustomErrorsErrorRules) {
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
      ignore_custom_errors_in_apdex_calculation: cdktf.booleanToTerraform(this._ignoreCustomErrorsInApdexCalculation),
      scope: cdktf.stringToTerraform(this._scope),
      error_rules: webAppCustomErrorsErrorRulesToTerraform(this._errorRules.internalValue),
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
      ignore_custom_errors_in_apdex_calculation: {
        value: cdktf.booleanToHclTerraform(this._ignoreCustomErrorsInApdexCalculation),
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
        value: webAppCustomErrorsErrorRulesToHclTerraform(this._errorRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppCustomErrorsErrorRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
