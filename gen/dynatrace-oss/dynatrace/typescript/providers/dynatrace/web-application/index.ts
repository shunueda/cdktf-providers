// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Field has overlap with `dynatrace_web_app_enablement`) Analize *X*% of user sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#cost_control_user_session_percentage WebApplication#cost_control_user_session_percentage}
  */
  readonly costControlUserSessionPercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#id WebApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The key performance metric of load actions. Possible values are `ACTION_DURATION`, `CUMULATIVE_LAYOUT_SHIFT`, `DOM_INTERACTIVE`, `FIRST_INPUT_DELAY`, `LARGEST_CONTENTFUL_PAINT`, `LOAD_EVENT_END`, `LOAD_EVENT_START`, `RESPONSE_END`, `RESPONSE_START`, `SPEED_INDEX` and `VISUALLY_COMPLETE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#load_action_key_performance_metric WebApplication#load_action_key_performance_metric}
  */
  readonly loadActionKeyPerformanceMetric: string;
  /**
  * The name of the web application, displayed in the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#name WebApplication#name}
  */
  readonly name: string;
  /**
  * (Field has overlap with `dynatrace_web_app_enablement`) Real user monitoring enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#real_user_monitoring_enabled WebApplication#real_user_monitoring_enabled}
  */
  readonly realUserMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * The type of the web application. Possible values are `AUTO_INJECTED`, `BROWSER_EXTENSION_INJECTED` and `MANUALLY_INJECTED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#type WebApplication#type}
  */
  readonly type: string;
  /**
  * URL injection pattern for manual web application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#url_injection_pattern WebApplication#url_injection_pattern}
  */
  readonly urlInjectionPattern?: string;
  /**
  * The key performance metric of XHR actions. Possible values are `ACTION_DURATION`, `RESPONSE_END`, `RESPONSE_START` and `VISUALLY_COMPLETE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#xhr_action_key_performance_metric WebApplication#xhr_action_key_performance_metric}
  */
  readonly xhrActionKeyPerformanceMetric: string;
  /**
  * conversion_goals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#conversion_goals WebApplication#conversion_goals}
  */
  readonly conversionGoals?: WebApplicationConversionGoals;
  /**
  * custom_action_apdex_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#custom_action_apdex_settings WebApplication#custom_action_apdex_settings}
  */
  readonly customActionApdexSettings: WebApplicationCustomActionApdexSettings;
  /**
  * key_user_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#key_user_actions WebApplication#key_user_actions}
  */
  readonly keyUserActions?: WebApplicationKeyUserActions[] | cdktf.IResolvable;
  /**
  * load_action_apdex_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#load_action_apdex_settings WebApplication#load_action_apdex_settings}
  */
  readonly loadActionApdexSettings: WebApplicationLoadActionApdexSettings;
  /**
  * meta_data_capture_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#meta_data_capture_settings WebApplication#meta_data_capture_settings}
  */
  readonly metaDataCaptureSettings?: WebApplicationMetaDataCaptureSettings;
  /**
  * monitoring_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#monitoring_settings WebApplication#monitoring_settings}
  */
  readonly monitoringSettings: WebApplicationMonitoringSettings;
  /**
  * session_replay_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#session_replay_config WebApplication#session_replay_config}
  */
  readonly sessionReplayConfig?: WebApplicationSessionReplayConfig;
  /**
  * user_action_and_session_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#user_action_and_session_properties WebApplication#user_action_and_session_properties}
  */
  readonly userActionAndSessionProperties?: WebApplicationUserActionAndSessionProperties;
  /**
  * user_action_naming_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#user_action_naming_settings WebApplication#user_action_naming_settings}
  */
  readonly userActionNamingSettings?: WebApplicationUserActionNamingSettings;
  /**
  * user_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#user_tags WebApplication#user_tags}
  */
  readonly userTags?: WebApplicationUserTags;
  /**
  * waterfall_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#waterfall_settings WebApplication#waterfall_settings}
  */
  readonly waterfallSettings: WebApplicationWaterfallSettings;
  /**
  * xhr_action_apdex_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#xhr_action_apdex_settings WebApplication#xhr_action_apdex_settings}
  */
  readonly xhrActionApdexSettings: WebApplicationXhrActionApdexSettings;
}
export interface WebApplicationConversionGoalsGoalDestination {
  /**
  * The match is case-sensitive (`true`) or (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#case_sensitive WebApplication#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * The operator of the match. Possible values are `Begins`, `Contains` and `Ends`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#match_type WebApplication#match_type}
  */
  readonly matchType?: string;
  /**
  * The path to be reached to hit the conversion goal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#url_or_path WebApplication#url_or_path}
  */
  readonly urlOrPath: string;
}

export function webApplicationConversionGoalsGoalDestinationToTerraform(struct?: WebApplicationConversionGoalsGoalDestinationOutputReference | WebApplicationConversionGoalsGoalDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    url_or_path: cdktf.stringToTerraform(struct!.urlOrPath),
  }
}


export function webApplicationConversionGoalsGoalDestinationToHclTerraform(struct?: WebApplicationConversionGoalsGoalDestinationOutputReference | WebApplicationConversionGoalsGoalDestination): any {
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
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_or_path: {
      value: cdktf.stringToHclTerraform(struct!.urlOrPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationConversionGoalsGoalDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationConversionGoalsGoalDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._urlOrPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlOrPath = this._urlOrPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationConversionGoalsGoalDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._matchType = undefined;
      this._urlOrPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._matchType = value.matchType;
      this._urlOrPath = value.urlOrPath;
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

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // url_or_path - computed: false, optional: false, required: true
  private _urlOrPath?: string; 
  public get urlOrPath() {
    return this.getStringAttribute('url_or_path');
  }
  public set urlOrPath(value: string) {
    this._urlOrPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlOrPathInput() {
    return this._urlOrPath;
  }
}
export interface WebApplicationConversionGoalsGoalUserAction {
  /**
  * Type of the action to which the rule applies. Possible values are `Custom`, `Load` and `Xhr`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#action_type WebApplication#action_type}
  */
  readonly actionType?: string;
  /**
  * The match is case-sensitive (`true`) or (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#case_sensitive WebApplication#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * The type of the entity to which the rule applies. Possible values are `ActionName`, `CssSelector`, `JavaScriptVariable`, `MetaTag`, `PagePath`, `PageTitle`, `PageUrl`, `UrlAnchor` and `XhrUrl`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#match_entity WebApplication#match_entity}
  */
  readonly matchEntity?: string;
  /**
  * The operator of the match. Possible values are `Begins`, `Contains` and `Ends`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#match_type WebApplication#match_type}
  */
  readonly matchType?: string;
  /**
  * The value to be matched to hit the conversion goal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#value WebApplication#value}
  */
  readonly value?: string;
}

export function webApplicationConversionGoalsGoalUserActionToTerraform(struct?: WebApplicationConversionGoalsGoalUserActionOutputReference | WebApplicationConversionGoalsGoalUserAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_entity: cdktf.stringToTerraform(struct!.matchEntity),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webApplicationConversionGoalsGoalUserActionToHclTerraform(struct?: WebApplicationConversionGoalsGoalUserActionOutputReference | WebApplicationConversionGoalsGoalUserAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_entity: {
      value: cdktf.stringToHclTerraform(struct!.matchEntity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
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

export class WebApplicationConversionGoalsGoalUserActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationConversionGoalsGoalUserAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchEntity !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntity = this._matchEntity;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationConversionGoalsGoalUserAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._caseSensitive = undefined;
      this._matchEntity = undefined;
      this._matchType = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._caseSensitive = value.caseSensitive;
      this._matchEntity = value.matchEntity;
      this._matchType = value.matchType;
      this._value = value.value;
    }
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
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

  // match_entity - computed: false, optional: true, required: false
  private _matchEntity?: string; 
  public get matchEntity() {
    return this.getStringAttribute('match_entity');
  }
  public set matchEntity(value: string) {
    this._matchEntity = value;
  }
  public resetMatchEntity() {
    this._matchEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntityInput() {
    return this._matchEntity;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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
export interface WebApplicationConversionGoalsGoalVisitDuration {
  /**
  * The duration of session to hit the conversion goal, in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#duration WebApplication#duration}
  */
  readonly duration: number;
}

export function webApplicationConversionGoalsGoalVisitDurationToTerraform(struct?: WebApplicationConversionGoalsGoalVisitDurationOutputReference | WebApplicationConversionGoalsGoalVisitDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function webApplicationConversionGoalsGoalVisitDurationToHclTerraform(struct?: WebApplicationConversionGoalsGoalVisitDurationOutputReference | WebApplicationConversionGoalsGoalVisitDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationConversionGoalsGoalVisitDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationConversionGoalsGoalVisitDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationConversionGoalsGoalVisitDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface WebApplicationConversionGoalsGoalVisitNumAction {
  /**
  * The number of user actions to hit the conversion goal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#num_user_actions WebApplication#num_user_actions}
  */
  readonly numUserActions?: number;
}

export function webApplicationConversionGoalsGoalVisitNumActionToTerraform(struct?: WebApplicationConversionGoalsGoalVisitNumActionOutputReference | WebApplicationConversionGoalsGoalVisitNumAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_user_actions: cdktf.numberToTerraform(struct!.numUserActions),
  }
}


export function webApplicationConversionGoalsGoalVisitNumActionToHclTerraform(struct?: WebApplicationConversionGoalsGoalVisitNumActionOutputReference | WebApplicationConversionGoalsGoalVisitNumAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_user_actions: {
      value: cdktf.numberToHclTerraform(struct!.numUserActions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationConversionGoalsGoalVisitNumActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationConversionGoalsGoalVisitNumAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numUserActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numUserActions = this._numUserActions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationConversionGoalsGoalVisitNumAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numUserActions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numUserActions = value.numUserActions;
    }
  }

  // num_user_actions - computed: false, optional: true, required: false
  private _numUserActions?: number; 
  public get numUserActions() {
    return this.getNumberAttribute('num_user_actions');
  }
  public set numUserActions(value: number) {
    this._numUserActions = value;
  }
  public resetNumUserActions() {
    this._numUserActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numUserActionsInput() {
    return this._numUserActions;
  }
}
export interface WebApplicationConversionGoalsGoal {
  /**
  * The ID of conversion goal. 
  * 
  *  Omit it while creating a new conversion goal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#id WebApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the conversion goal. Valid length within 1 and 50 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#name WebApplication#name}
  */
  readonly name: string;
  /**
  * The type of the conversion goal. Possible values are `Destination`, `UserAction`, `VisitDuration` and `VisitNumActions`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#type WebApplication#type}
  */
  readonly type?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#destination WebApplication#destination}
  */
  readonly destination?: WebApplicationConversionGoalsGoalDestination;
  /**
  * user_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#user_action WebApplication#user_action}
  */
  readonly userAction?: WebApplicationConversionGoalsGoalUserAction;
  /**
  * visit_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#visit_duration WebApplication#visit_duration}
  */
  readonly visitDuration?: WebApplicationConversionGoalsGoalVisitDuration;
  /**
  * visit_num_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#visit_num_action WebApplication#visit_num_action}
  */
  readonly visitNumAction?: WebApplicationConversionGoalsGoalVisitNumAction;
}

export function webApplicationConversionGoalsGoalToTerraform(struct?: WebApplicationConversionGoalsGoal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    destination: webApplicationConversionGoalsGoalDestinationToTerraform(struct!.destination),
    user_action: webApplicationConversionGoalsGoalUserActionToTerraform(struct!.userAction),
    visit_duration: webApplicationConversionGoalsGoalVisitDurationToTerraform(struct!.visitDuration),
    visit_num_action: webApplicationConversionGoalsGoalVisitNumActionToTerraform(struct!.visitNumAction),
  }
}


export function webApplicationConversionGoalsGoalToHclTerraform(struct?: WebApplicationConversionGoalsGoal | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    destination: {
      value: webApplicationConversionGoalsGoalDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationConversionGoalsGoalDestinationList",
    },
    user_action: {
      value: webApplicationConversionGoalsGoalUserActionToHclTerraform(struct!.userAction),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationConversionGoalsGoalUserActionList",
    },
    visit_duration: {
      value: webApplicationConversionGoalsGoalVisitDurationToHclTerraform(struct!.visitDuration),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationConversionGoalsGoalVisitDurationList",
    },
    visit_num_action: {
      value: webApplicationConversionGoalsGoalVisitNumActionToHclTerraform(struct!.visitNumAction),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationConversionGoalsGoalVisitNumActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationConversionGoalsGoalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationConversionGoalsGoal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._userAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAction = this._userAction?.internalValue;
    }
    if (this._visitDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visitDuration = this._visitDuration?.internalValue;
    }
    if (this._visitNumAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visitNumAction = this._visitNumAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationConversionGoalsGoal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
      this._destination.internalValue = undefined;
      this._userAction.internalValue = undefined;
      this._visitDuration.internalValue = undefined;
      this._visitNumAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
      this._destination.internalValue = value.destination;
      this._userAction.internalValue = value.userAction;
      this._visitDuration.internalValue = value.visitDuration;
      this._visitNumAction.internalValue = value.visitNumAction;
    }
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

  // type - computed: false, optional: true, required: false
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

  // destination - computed: false, optional: true, required: false
  private _destination = new WebApplicationConversionGoalsGoalDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: WebApplicationConversionGoalsGoalDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // user_action - computed: false, optional: true, required: false
  private _userAction = new WebApplicationConversionGoalsGoalUserActionOutputReference(this, "user_action");
  public get userAction() {
    return this._userAction;
  }
  public putUserAction(value: WebApplicationConversionGoalsGoalUserAction) {
    this._userAction.internalValue = value;
  }
  public resetUserAction() {
    this._userAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActionInput() {
    return this._userAction.internalValue;
  }

  // visit_duration - computed: false, optional: true, required: false
  private _visitDuration = new WebApplicationConversionGoalsGoalVisitDurationOutputReference(this, "visit_duration");
  public get visitDuration() {
    return this._visitDuration;
  }
  public putVisitDuration(value: WebApplicationConversionGoalsGoalVisitDuration) {
    this._visitDuration.internalValue = value;
  }
  public resetVisitDuration() {
    this._visitDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visitDurationInput() {
    return this._visitDuration.internalValue;
  }

  // visit_num_action - computed: false, optional: true, required: false
  private _visitNumAction = new WebApplicationConversionGoalsGoalVisitNumActionOutputReference(this, "visit_num_action");
  public get visitNumAction() {
    return this._visitNumAction;
  }
  public putVisitNumAction(value: WebApplicationConversionGoalsGoalVisitNumAction) {
    this._visitNumAction.internalValue = value;
  }
  public resetVisitNumAction() {
    this._visitNumAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visitNumActionInput() {
    return this._visitNumAction.internalValue;
  }
}

export class WebApplicationConversionGoalsGoalList extends cdktf.ComplexList {
  public internalValue? : WebApplicationConversionGoalsGoal[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationConversionGoalsGoalOutputReference {
    return new WebApplicationConversionGoalsGoalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationConversionGoals {
  /**
  * goal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#goal WebApplication#goal}
  */
  readonly goal: WebApplicationConversionGoalsGoal[] | cdktf.IResolvable;
}

export function webApplicationConversionGoalsToTerraform(struct?: WebApplicationConversionGoalsOutputReference | WebApplicationConversionGoals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    goal: cdktf.listMapper(webApplicationConversionGoalsGoalToTerraform, true)(struct!.goal),
  }
}


export function webApplicationConversionGoalsToHclTerraform(struct?: WebApplicationConversionGoalsOutputReference | WebApplicationConversionGoals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    goal: {
      value: cdktf.listMapperHcl(webApplicationConversionGoalsGoalToHclTerraform, true)(struct!.goal),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationConversionGoalsGoalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationConversionGoalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationConversionGoals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._goal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goal = this._goal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationConversionGoals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._goal.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._goal.internalValue = value.goal;
    }
  }

  // goal - computed: false, optional: false, required: true
  private _goal = new WebApplicationConversionGoalsGoalList(this, "goal", false);
  public get goal() {
    return this._goal;
  }
  public putGoal(value: WebApplicationConversionGoalsGoal[] | cdktf.IResolvable) {
    this._goal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goalInput() {
    return this._goal.internalValue;
  }
}
export interface WebApplicationCustomActionApdexSettings {
  /**
  * Fallback threshold of an XHR action, defining a tolerable user experience, when the configured KPM is not available. Values between 0 and 240000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#frustrating_fallback_threshold WebApplication#frustrating_fallback_threshold}
  */
  readonly frustratingFallbackThreshold: number;
  /**
  * Maximal value of apdex, which is considered as tolerable user experience. Values between 0 and 240000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#frustrating_threshold WebApplication#frustrating_threshold}
  */
  readonly frustratingThreshold: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#threshold WebApplication#threshold}
  */
  readonly threshold?: number;
  /**
  * Fallback threshold of an XHR action, defining a satisfied user experience, when the configured KPM is not available. Values between 0 and 60000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#tolerated_fallback_threshold WebApplication#tolerated_fallback_threshold}
  */
  readonly toleratedFallbackThreshold: number;
  /**
  * Maximal value of apdex, which is considered as satisfied user experience. Values between 0 and 60000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#tolerated_threshold WebApplication#tolerated_threshold}
  */
  readonly toleratedThreshold: number;
}

export function webApplicationCustomActionApdexSettingsToTerraform(struct?: WebApplicationCustomActionApdexSettingsOutputReference | WebApplicationCustomActionApdexSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frustrating_fallback_threshold: cdktf.numberToTerraform(struct!.frustratingFallbackThreshold),
    frustrating_threshold: cdktf.numberToTerraform(struct!.frustratingThreshold),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    tolerated_fallback_threshold: cdktf.numberToTerraform(struct!.toleratedFallbackThreshold),
    tolerated_threshold: cdktf.numberToTerraform(struct!.toleratedThreshold),
  }
}


export function webApplicationCustomActionApdexSettingsToHclTerraform(struct?: WebApplicationCustomActionApdexSettingsOutputReference | WebApplicationCustomActionApdexSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frustrating_fallback_threshold: {
      value: cdktf.numberToHclTerraform(struct!.frustratingFallbackThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frustrating_threshold: {
      value: cdktf.numberToHclTerraform(struct!.frustratingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerated_fallback_threshold: {
      value: cdktf.numberToHclTerraform(struct!.toleratedFallbackThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerated_threshold: {
      value: cdktf.numberToHclTerraform(struct!.toleratedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationCustomActionApdexSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationCustomActionApdexSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frustratingFallbackThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.frustratingFallbackThreshold = this._frustratingFallbackThreshold;
    }
    if (this._frustratingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.frustratingThreshold = this._frustratingThreshold;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._toleratedFallbackThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleratedFallbackThreshold = this._toleratedFallbackThreshold;
    }
    if (this._toleratedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleratedThreshold = this._toleratedThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationCustomActionApdexSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frustratingFallbackThreshold = undefined;
      this._frustratingThreshold = undefined;
      this._threshold = undefined;
      this._toleratedFallbackThreshold = undefined;
      this._toleratedThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frustratingFallbackThreshold = value.frustratingFallbackThreshold;
      this._frustratingThreshold = value.frustratingThreshold;
      this._threshold = value.threshold;
      this._toleratedFallbackThreshold = value.toleratedFallbackThreshold;
      this._toleratedThreshold = value.toleratedThreshold;
    }
  }

  // frustrating_fallback_threshold - computed: false, optional: false, required: true
  private _frustratingFallbackThreshold?: number; 
  public get frustratingFallbackThreshold() {
    return this.getNumberAttribute('frustrating_fallback_threshold');
  }
  public set frustratingFallbackThreshold(value: number) {
    this._frustratingFallbackThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frustratingFallbackThresholdInput() {
    return this._frustratingFallbackThreshold;
  }

  // frustrating_threshold - computed: false, optional: false, required: true
  private _frustratingThreshold?: number; 
  public get frustratingThreshold() {
    return this.getNumberAttribute('frustrating_threshold');
  }
  public set frustratingThreshold(value: number) {
    this._frustratingThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frustratingThresholdInput() {
    return this._frustratingThreshold;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // tolerated_fallback_threshold - computed: false, optional: false, required: true
  private _toleratedFallbackThreshold?: number; 
  public get toleratedFallbackThreshold() {
    return this.getNumberAttribute('tolerated_fallback_threshold');
  }
  public set toleratedFallbackThreshold(value: number) {
    this._toleratedFallbackThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toleratedFallbackThresholdInput() {
    return this._toleratedFallbackThreshold;
  }

  // tolerated_threshold - computed: false, optional: false, required: true
  private _toleratedThreshold?: number; 
  public get toleratedThreshold() {
    return this.getNumberAttribute('tolerated_threshold');
  }
  public set toleratedThreshold(value: number) {
    this._toleratedThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toleratedThresholdInput() {
    return this._toleratedThreshold;
  }
}
export interface WebApplicationKeyUserActionsAction {
  /**
  * The domain where the action is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#domain WebApplication#domain}
  */
  readonly domain?: string;
  /**
  * The name of the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#name WebApplication#name}
  */
  readonly name: string;
  /**
  * The type of the action. Possible values are `Custom`, `Load` and `Xhr`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#type WebApplication#type}
  */
  readonly type: string;
}

export function webApplicationKeyUserActionsActionToTerraform(struct?: WebApplicationKeyUserActionsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function webApplicationKeyUserActionsActionToHclTerraform(struct?: WebApplicationKeyUserActionsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationKeyUserActionsActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationKeyUserActionsAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationKeyUserActionsAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

export class WebApplicationKeyUserActionsActionList extends cdktf.ComplexList {
  public internalValue? : WebApplicationKeyUserActionsAction[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationKeyUserActionsActionOutputReference {
    return new WebApplicationKeyUserActionsActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationKeyUserActions {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#action WebApplication#action}
  */
  readonly action: WebApplicationKeyUserActionsAction[] | cdktf.IResolvable;
}

export function webApplicationKeyUserActionsToTerraform(struct?: WebApplicationKeyUserActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(webApplicationKeyUserActionsActionToTerraform, true)(struct!.action),
  }
}


export function webApplicationKeyUserActionsToHclTerraform(struct?: WebApplicationKeyUserActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(webApplicationKeyUserActionsActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "WebApplicationKeyUserActionsActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationKeyUserActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationKeyUserActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationKeyUserActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new WebApplicationKeyUserActionsActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: WebApplicationKeyUserActionsAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}

export class WebApplicationKeyUserActionsList extends cdktf.ComplexList {
  public internalValue? : WebApplicationKeyUserActions[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationKeyUserActionsOutputReference {
    return new WebApplicationKeyUserActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationLoadActionApdexSettings {
  /**
  * Fallback threshold of an XHR action, defining a tolerable user experience, when the configured KPM is not available. Values between 0 and 240000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#frustrating_fallback_threshold WebApplication#frustrating_fallback_threshold}
  */
  readonly frustratingFallbackThreshold: number;
  /**
  * Maximal value of apdex, which is considered as tolerable user experience. Values between 0 and 240000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#frustrating_threshold WebApplication#frustrating_threshold}
  */
  readonly frustratingThreshold: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#threshold WebApplication#threshold}
  */
  readonly threshold?: number;
  /**
  * Fallback threshold of an XHR action, defining a satisfied user experience, when the configured KPM is not available. Values between 0 and 60000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#tolerated_fallback_threshold WebApplication#tolerated_fallback_threshold}
  */
  readonly toleratedFallbackThreshold: number;
  /**
  * Maximal value of apdex, which is considered as satisfied user experience. Values between 0 and 60000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#tolerated_threshold WebApplication#tolerated_threshold}
  */
  readonly toleratedThreshold: number;
}

export function webApplicationLoadActionApdexSettingsToTerraform(struct?: WebApplicationLoadActionApdexSettingsOutputReference | WebApplicationLoadActionApdexSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frustrating_fallback_threshold: cdktf.numberToTerraform(struct!.frustratingFallbackThreshold),
    frustrating_threshold: cdktf.numberToTerraform(struct!.frustratingThreshold),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    tolerated_fallback_threshold: cdktf.numberToTerraform(struct!.toleratedFallbackThreshold),
    tolerated_threshold: cdktf.numberToTerraform(struct!.toleratedThreshold),
  }
}


export function webApplicationLoadActionApdexSettingsToHclTerraform(struct?: WebApplicationLoadActionApdexSettingsOutputReference | WebApplicationLoadActionApdexSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frustrating_fallback_threshold: {
      value: cdktf.numberToHclTerraform(struct!.frustratingFallbackThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frustrating_threshold: {
      value: cdktf.numberToHclTerraform(struct!.frustratingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerated_fallback_threshold: {
      value: cdktf.numberToHclTerraform(struct!.toleratedFallbackThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerated_threshold: {
      value: cdktf.numberToHclTerraform(struct!.toleratedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationLoadActionApdexSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationLoadActionApdexSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frustratingFallbackThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.frustratingFallbackThreshold = this._frustratingFallbackThreshold;
    }
    if (this._frustratingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.frustratingThreshold = this._frustratingThreshold;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._toleratedFallbackThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleratedFallbackThreshold = this._toleratedFallbackThreshold;
    }
    if (this._toleratedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleratedThreshold = this._toleratedThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationLoadActionApdexSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frustratingFallbackThreshold = undefined;
      this._frustratingThreshold = undefined;
      this._threshold = undefined;
      this._toleratedFallbackThreshold = undefined;
      this._toleratedThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frustratingFallbackThreshold = value.frustratingFallbackThreshold;
      this._frustratingThreshold = value.frustratingThreshold;
      this._threshold = value.threshold;
      this._toleratedFallbackThreshold = value.toleratedFallbackThreshold;
      this._toleratedThreshold = value.toleratedThreshold;
    }
  }

  // frustrating_fallback_threshold - computed: false, optional: false, required: true
  private _frustratingFallbackThreshold?: number; 
  public get frustratingFallbackThreshold() {
    return this.getNumberAttribute('frustrating_fallback_threshold');
  }
  public set frustratingFallbackThreshold(value: number) {
    this._frustratingFallbackThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frustratingFallbackThresholdInput() {
    return this._frustratingFallbackThreshold;
  }

  // frustrating_threshold - computed: false, optional: false, required: true
  private _frustratingThreshold?: number; 
  public get frustratingThreshold() {
    return this.getNumberAttribute('frustrating_threshold');
  }
  public set frustratingThreshold(value: number) {
    this._frustratingThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frustratingThresholdInput() {
    return this._frustratingThreshold;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // tolerated_fallback_threshold - computed: false, optional: false, required: true
  private _toleratedFallbackThreshold?: number; 
  public get toleratedFallbackThreshold() {
    return this.getNumberAttribute('tolerated_fallback_threshold');
  }
  public set toleratedFallbackThreshold(value: number) {
    this._toleratedFallbackThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toleratedFallbackThresholdInput() {
    return this._toleratedFallbackThreshold;
  }

  // tolerated_threshold - computed: false, optional: false, required: true
  private _toleratedThreshold?: number; 
  public get toleratedThreshold() {
    return this.getNumberAttribute('tolerated_threshold');
  }
  public set toleratedThreshold(value: number) {
    this._toleratedThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toleratedThresholdInput() {
    return this._toleratedThreshold;
  }
}
export interface WebApplicationMetaDataCaptureSettingsCapture {
  /**
  * The name of the meta data to capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#capturing_name WebApplication#capturing_name}
  */
  readonly capturingName: string;
  /**
  * Name for displaying the captured values in Dynatrace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#name WebApplication#name}
  */
  readonly name: string;
  /**
  * `true` if this metadata should be captured regardless of the privacy settings, `false` otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#public_metadata WebApplication#public_metadata}
  */
  readonly publicMetadata?: boolean | cdktf.IResolvable;
  /**
  * The type of the meta data to capture. Possible values are `COOKIE`, `CSS_SELECTOR`, `JAVA_SCRIPT_FUNCTION`, `JAVA_SCRIPT_VARIABLE`, `META_TAG` and `QUERY_STRING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#type WebApplication#type}
  */
  readonly type: string;
  /**
  * The unique ID of the meta data to capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#unique_id WebApplication#unique_id}
  */
  readonly uniqueId?: number;
  /**
  * `true` if the last captured value should be used for this metadata. By default the first value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#use_last_value WebApplication#use_last_value}
  */
  readonly useLastValue?: boolean | cdktf.IResolvable;
}

export function webApplicationMetaDataCaptureSettingsCaptureToTerraform(struct?: WebApplicationMetaDataCaptureSettingsCapture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capturing_name: cdktf.stringToTerraform(struct!.capturingName),
    name: cdktf.stringToTerraform(struct!.name),
    public_metadata: cdktf.booleanToTerraform(struct!.publicMetadata),
    type: cdktf.stringToTerraform(struct!.type),
    unique_id: cdktf.numberToTerraform(struct!.uniqueId),
    use_last_value: cdktf.booleanToTerraform(struct!.useLastValue),
  }
}


export function webApplicationMetaDataCaptureSettingsCaptureToHclTerraform(struct?: WebApplicationMetaDataCaptureSettingsCapture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capturing_name: {
      value: cdktf.stringToHclTerraform(struct!.capturingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.publicMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_id: {
      value: cdktf.numberToHclTerraform(struct!.uniqueId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_last_value: {
      value: cdktf.booleanToHclTerraform(struct!.useLastValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMetaDataCaptureSettingsCaptureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationMetaDataCaptureSettingsCapture | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capturingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.capturingName = this._capturingName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicMetadata = this._publicMetadata;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueId = this._uniqueId;
    }
    if (this._useLastValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLastValue = this._useLastValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMetaDataCaptureSettingsCapture | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capturingName = undefined;
      this._name = undefined;
      this._publicMetadata = undefined;
      this._type = undefined;
      this._uniqueId = undefined;
      this._useLastValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capturingName = value.capturingName;
      this._name = value.name;
      this._publicMetadata = value.publicMetadata;
      this._type = value.type;
      this._uniqueId = value.uniqueId;
      this._useLastValue = value.useLastValue;
    }
  }

  // capturing_name - computed: false, optional: false, required: true
  private _capturingName?: string; 
  public get capturingName() {
    return this.getStringAttribute('capturing_name');
  }
  public set capturingName(value: string) {
    this._capturingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capturingNameInput() {
    return this._capturingName;
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

  // public_metadata - computed: false, optional: true, required: false
  private _publicMetadata?: boolean | cdktf.IResolvable; 
  public get publicMetadata() {
    return this.getBooleanAttribute('public_metadata');
  }
  public set publicMetadata(value: boolean | cdktf.IResolvable) {
    this._publicMetadata = value;
  }
  public resetPublicMetadata() {
    this._publicMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicMetadataInput() {
    return this._publicMetadata;
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

  // unique_id - computed: false, optional: true, required: false
  private _uniqueId?: number; 
  public get uniqueId() {
    return this.getNumberAttribute('unique_id');
  }
  public set uniqueId(value: number) {
    this._uniqueId = value;
  }
  public resetUniqueId() {
    this._uniqueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdInput() {
    return this._uniqueId;
  }

  // use_last_value - computed: false, optional: true, required: false
  private _useLastValue?: boolean | cdktf.IResolvable; 
  public get useLastValue() {
    return this.getBooleanAttribute('use_last_value');
  }
  public set useLastValue(value: boolean | cdktf.IResolvable) {
    this._useLastValue = value;
  }
  public resetUseLastValue() {
    this._useLastValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLastValueInput() {
    return this._useLastValue;
  }
}

export class WebApplicationMetaDataCaptureSettingsCaptureList extends cdktf.ComplexList {
  public internalValue? : WebApplicationMetaDataCaptureSettingsCapture[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationMetaDataCaptureSettingsCaptureOutputReference {
    return new WebApplicationMetaDataCaptureSettingsCaptureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationMetaDataCaptureSettings {
  /**
  * capture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#capture WebApplication#capture}
  */
  readonly capture?: WebApplicationMetaDataCaptureSettingsCapture[] | cdktf.IResolvable;
}

export function webApplicationMetaDataCaptureSettingsToTerraform(struct?: WebApplicationMetaDataCaptureSettingsOutputReference | WebApplicationMetaDataCaptureSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture: cdktf.listMapper(webApplicationMetaDataCaptureSettingsCaptureToTerraform, true)(struct!.capture),
  }
}


export function webApplicationMetaDataCaptureSettingsToHclTerraform(struct?: WebApplicationMetaDataCaptureSettingsOutputReference | WebApplicationMetaDataCaptureSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture: {
      value: cdktf.listMapperHcl(webApplicationMetaDataCaptureSettingsCaptureToHclTerraform, true)(struct!.capture),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMetaDataCaptureSettingsCaptureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMetaDataCaptureSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMetaDataCaptureSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capture = this._capture?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMetaDataCaptureSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capture.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capture.internalValue = value.capture;
    }
  }

  // capture - computed: false, optional: true, required: false
  private _capture = new WebApplicationMetaDataCaptureSettingsCaptureList(this, "capture", false);
  public get capture() {
    return this._capture;
  }
  public putCapture(value: WebApplicationMetaDataCaptureSettingsCapture[] | cdktf.IResolvable) {
    this._capture.internalValue = value;
  }
  public resetCapture() {
    this._capture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureInput() {
    return this._capture.internalValue;
  }
}
export interface WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlers {
  /**
  * Blur event handler enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#blur WebApplication#blur}
  */
  readonly blur?: boolean | cdktf.IResolvable;
  /**
  * Change event handler enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#change WebApplication#change}
  */
  readonly change?: boolean | cdktf.IResolvable;
  /**
  * Click event handler enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#click WebApplication#click}
  */
  readonly click?: boolean | cdktf.IResolvable;
  /**
  * Max. number of DOM nodes to instrument. Valid values range from 0 to 100000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#max_dom_nodes WebApplication#max_dom_nodes}
  */
  readonly maxDomNodes: number;
  /**
  * Mouseup event handler enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#mouseup WebApplication#mouseup}
  */
  readonly mouseup?: boolean | cdktf.IResolvable;
  /**
  * toString method enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#to_string_method WebApplication#to_string_method}
  */
  readonly toStringMethod?: boolean | cdktf.IResolvable;
  /**
  * Use mouseup event for clicks enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#use_mouse_up_event_for_clicks WebApplication#use_mouse_up_event_for_clicks}
  */
  readonly useMouseUpEventForClicks?: boolean | cdktf.IResolvable;
}

export function webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlersToTerraform(struct?: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlersOutputReference | WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blur: cdktf.booleanToTerraform(struct!.blur),
    change: cdktf.booleanToTerraform(struct!.change),
    click: cdktf.booleanToTerraform(struct!.click),
    max_dom_nodes: cdktf.numberToTerraform(struct!.maxDomNodes),
    mouseup: cdktf.booleanToTerraform(struct!.mouseup),
    to_string_method: cdktf.booleanToTerraform(struct!.toStringMethod),
    use_mouse_up_event_for_clicks: cdktf.booleanToTerraform(struct!.useMouseUpEventForClicks),
  }
}


export function webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlersToHclTerraform(struct?: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlersOutputReference | WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blur: {
      value: cdktf.booleanToHclTerraform(struct!.blur),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    change: {
      value: cdktf.booleanToHclTerraform(struct!.change),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    click: {
      value: cdktf.booleanToHclTerraform(struct!.click),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_dom_nodes: {
      value: cdktf.numberToHclTerraform(struct!.maxDomNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mouseup: {
      value: cdktf.booleanToHclTerraform(struct!.mouseup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    to_string_method: {
      value: cdktf.booleanToHclTerraform(struct!.toStringMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_mouse_up_event_for_clicks: {
      value: cdktf.booleanToHclTerraform(struct!.useMouseUpEventForClicks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blur !== undefined) {
      hasAnyValues = true;
      internalValueResult.blur = this._blur;
    }
    if (this._change !== undefined) {
      hasAnyValues = true;
      internalValueResult.change = this._change;
    }
    if (this._click !== undefined) {
      hasAnyValues = true;
      internalValueResult.click = this._click;
    }
    if (this._maxDomNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDomNodes = this._maxDomNodes;
    }
    if (this._mouseup !== undefined) {
      hasAnyValues = true;
      internalValueResult.mouseup = this._mouseup;
    }
    if (this._toStringMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.toStringMethod = this._toStringMethod;
    }
    if (this._useMouseUpEventForClicks !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMouseUpEventForClicks = this._useMouseUpEventForClicks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blur = undefined;
      this._change = undefined;
      this._click = undefined;
      this._maxDomNodes = undefined;
      this._mouseup = undefined;
      this._toStringMethod = undefined;
      this._useMouseUpEventForClicks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blur = value.blur;
      this._change = value.change;
      this._click = value.click;
      this._maxDomNodes = value.maxDomNodes;
      this._mouseup = value.mouseup;
      this._toStringMethod = value.toStringMethod;
      this._useMouseUpEventForClicks = value.useMouseUpEventForClicks;
    }
  }

  // blur - computed: false, optional: true, required: false
  private _blur?: boolean | cdktf.IResolvable; 
  public get blur() {
    return this.getBooleanAttribute('blur');
  }
  public set blur(value: boolean | cdktf.IResolvable) {
    this._blur = value;
  }
  public resetBlur() {
    this._blur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blurInput() {
    return this._blur;
  }

  // change - computed: false, optional: true, required: false
  private _change?: boolean | cdktf.IResolvable; 
  public get change() {
    return this.getBooleanAttribute('change');
  }
  public set change(value: boolean | cdktf.IResolvable) {
    this._change = value;
  }
  public resetChange() {
    this._change = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeInput() {
    return this._change;
  }

  // click - computed: false, optional: true, required: false
  private _click?: boolean | cdktf.IResolvable; 
  public get click() {
    return this.getBooleanAttribute('click');
  }
  public set click(value: boolean | cdktf.IResolvable) {
    this._click = value;
  }
  public resetClick() {
    this._click = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickInput() {
    return this._click;
  }

  // max_dom_nodes - computed: false, optional: false, required: true
  private _maxDomNodes?: number; 
  public get maxDomNodes() {
    return this.getNumberAttribute('max_dom_nodes');
  }
  public set maxDomNodes(value: number) {
    this._maxDomNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDomNodesInput() {
    return this._maxDomNodes;
  }

  // mouseup - computed: false, optional: true, required: false
  private _mouseup?: boolean | cdktf.IResolvable; 
  public get mouseup() {
    return this.getBooleanAttribute('mouseup');
  }
  public set mouseup(value: boolean | cdktf.IResolvable) {
    this._mouseup = value;
  }
  public resetMouseup() {
    this._mouseup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mouseupInput() {
    return this._mouseup;
  }

  // to_string_method - computed: false, optional: true, required: false
  private _toStringMethod?: boolean | cdktf.IResolvable; 
  public get toStringMethod() {
    return this.getBooleanAttribute('to_string_method');
  }
  public set toStringMethod(value: boolean | cdktf.IResolvable) {
    this._toStringMethod = value;
  }
  public resetToStringMethod() {
    this._toStringMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toStringMethodInput() {
    return this._toStringMethod;
  }

  // use_mouse_up_event_for_clicks - computed: false, optional: true, required: false
  private _useMouseUpEventForClicks?: boolean | cdktf.IResolvable; 
  public get useMouseUpEventForClicks() {
    return this.getBooleanAttribute('use_mouse_up_event_for_clicks');
  }
  public set useMouseUpEventForClicks(value: boolean | cdktf.IResolvable) {
    this._useMouseUpEventForClicks = value;
  }
  public resetUseMouseUpEventForClicks() {
    this._useMouseUpEventForClicks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMouseUpEventForClicksInput() {
    return this._useMouseUpEventForClicks;
  }
}
export interface WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettings {
  /**
  * Blur enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#blur WebApplication#blur}
  */
  readonly blur?: boolean | cdktf.IResolvable;
  /**
  * Change enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#change WebApplication#change}
  */
  readonly change?: boolean | cdktf.IResolvable;
  /**
  * Click enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#click WebApplication#click}
  */
  readonly click?: boolean | cdktf.IResolvable;
  /**
  * MouseUp enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#mouseup WebApplication#mouseup}
  */
  readonly mouseup?: boolean | cdktf.IResolvable;
  /**
  * TouchEnd enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#touch_end WebApplication#touch_end}
  */
  readonly touchEnd?: boolean | cdktf.IResolvable;
  /**
  * TouchStart enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#touch_start WebApplication#touch_start}
  */
  readonly touchStart?: boolean | cdktf.IResolvable;
}

export function webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettingsToTerraform(struct?: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettingsOutputReference | WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blur: cdktf.booleanToTerraform(struct!.blur),
    change: cdktf.booleanToTerraform(struct!.change),
    click: cdktf.booleanToTerraform(struct!.click),
    mouseup: cdktf.booleanToTerraform(struct!.mouseup),
    touch_end: cdktf.booleanToTerraform(struct!.touchEnd),
    touch_start: cdktf.booleanToTerraform(struct!.touchStart),
  }
}


export function webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettingsToHclTerraform(struct?: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettingsOutputReference | WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blur: {
      value: cdktf.booleanToHclTerraform(struct!.blur),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    change: {
      value: cdktf.booleanToHclTerraform(struct!.change),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    click: {
      value: cdktf.booleanToHclTerraform(struct!.click),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mouseup: {
      value: cdktf.booleanToHclTerraform(struct!.mouseup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    touch_end: {
      value: cdktf.booleanToHclTerraform(struct!.touchEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    touch_start: {
      value: cdktf.booleanToHclTerraform(struct!.touchStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blur !== undefined) {
      hasAnyValues = true;
      internalValueResult.blur = this._blur;
    }
    if (this._change !== undefined) {
      hasAnyValues = true;
      internalValueResult.change = this._change;
    }
    if (this._click !== undefined) {
      hasAnyValues = true;
      internalValueResult.click = this._click;
    }
    if (this._mouseup !== undefined) {
      hasAnyValues = true;
      internalValueResult.mouseup = this._mouseup;
    }
    if (this._touchEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.touchEnd = this._touchEnd;
    }
    if (this._touchStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.touchStart = this._touchStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blur = undefined;
      this._change = undefined;
      this._click = undefined;
      this._mouseup = undefined;
      this._touchEnd = undefined;
      this._touchStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blur = value.blur;
      this._change = value.change;
      this._click = value.click;
      this._mouseup = value.mouseup;
      this._touchEnd = value.touchEnd;
      this._touchStart = value.touchStart;
    }
  }

  // blur - computed: false, optional: true, required: false
  private _blur?: boolean | cdktf.IResolvable; 
  public get blur() {
    return this.getBooleanAttribute('blur');
  }
  public set blur(value: boolean | cdktf.IResolvable) {
    this._blur = value;
  }
  public resetBlur() {
    this._blur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blurInput() {
    return this._blur;
  }

  // change - computed: false, optional: true, required: false
  private _change?: boolean | cdktf.IResolvable; 
  public get change() {
    return this.getBooleanAttribute('change');
  }
  public set change(value: boolean | cdktf.IResolvable) {
    this._change = value;
  }
  public resetChange() {
    this._change = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeInput() {
    return this._change;
  }

  // click - computed: false, optional: true, required: false
  private _click?: boolean | cdktf.IResolvable; 
  public get click() {
    return this.getBooleanAttribute('click');
  }
  public set click(value: boolean | cdktf.IResolvable) {
    this._click = value;
  }
  public resetClick() {
    this._click = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickInput() {
    return this._click;
  }

  // mouseup - computed: false, optional: true, required: false
  private _mouseup?: boolean | cdktf.IResolvable; 
  public get mouseup() {
    return this.getBooleanAttribute('mouseup');
  }
  public set mouseup(value: boolean | cdktf.IResolvable) {
    this._mouseup = value;
  }
  public resetMouseup() {
    this._mouseup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mouseupInput() {
    return this._mouseup;
  }

  // touch_end - computed: false, optional: true, required: false
  private _touchEnd?: boolean | cdktf.IResolvable; 
  public get touchEnd() {
    return this.getBooleanAttribute('touch_end');
  }
  public set touchEnd(value: boolean | cdktf.IResolvable) {
    this._touchEnd = value;
  }
  public resetTouchEnd() {
    this._touchEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get touchEndInput() {
    return this._touchEnd;
  }

  // touch_start - computed: false, optional: true, required: false
  private _touchStart?: boolean | cdktf.IResolvable; 
  public get touchStart() {
    return this.getBooleanAttribute('touch_start');
  }
  public set touchStart(value: boolean | cdktf.IResolvable) {
    this._touchStart = value;
  }
  public resetTouchStart() {
    this._touchStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get touchStartInput() {
    return this._touchStart;
  }
}
export interface WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettings {
  /**
  * Additional events to be captured globally as user input. 
  * 
  * For example `DragStart` or `DragEnd`. Maximum 100 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#additional_event_captured_as_user_input WebApplication#additional_event_captured_as_user_input}
  */
  readonly additionalEventCapturedAsUserInput?: string;
  /**
  * Change enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#change WebApplication#change}
  */
  readonly change?: boolean | cdktf.IResolvable;
  /**
  * Click enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#click WebApplication#click}
  */
  readonly click?: boolean | cdktf.IResolvable;
  /**
  * DoubleClick enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#doubleclick WebApplication#doubleclick}
  */
  readonly doubleclick?: boolean | cdktf.IResolvable;
  /**
  * KeyDown enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#keydown WebApplication#keydown}
  */
  readonly keydown?: boolean | cdktf.IResolvable;
  /**
  * KeyUp enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#keyup WebApplication#keyup}
  */
  readonly keyup?: boolean | cdktf.IResolvable;
  /**
  * MouseDown enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#mousedown WebApplication#mousedown}
  */
  readonly mousedown?: boolean | cdktf.IResolvable;
  /**
  * MouseUp enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#mouseup WebApplication#mouseup}
  */
  readonly mouseup?: boolean | cdktf.IResolvable;
  /**
  * Scroll enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#scroll WebApplication#scroll}
  */
  readonly scroll?: boolean | cdktf.IResolvable;
  /**
  * TouchEnd enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#touch_end WebApplication#touch_end}
  */
  readonly touchEnd?: boolean | cdktf.IResolvable;
  /**
  * TouchStart enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#touch_start WebApplication#touch_start}
  */
  readonly touchStart?: boolean | cdktf.IResolvable;
}

export function webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettingsToTerraform(struct?: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettingsOutputReference | WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_event_captured_as_user_input: cdktf.stringToTerraform(struct!.additionalEventCapturedAsUserInput),
    change: cdktf.booleanToTerraform(struct!.change),
    click: cdktf.booleanToTerraform(struct!.click),
    doubleclick: cdktf.booleanToTerraform(struct!.doubleclick),
    keydown: cdktf.booleanToTerraform(struct!.keydown),
    keyup: cdktf.booleanToTerraform(struct!.keyup),
    mousedown: cdktf.booleanToTerraform(struct!.mousedown),
    mouseup: cdktf.booleanToTerraform(struct!.mouseup),
    scroll: cdktf.booleanToTerraform(struct!.scroll),
    touch_end: cdktf.booleanToTerraform(struct!.touchEnd),
    touch_start: cdktf.booleanToTerraform(struct!.touchStart),
  }
}


export function webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettingsToHclTerraform(struct?: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettingsOutputReference | WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_event_captured_as_user_input: {
      value: cdktf.stringToHclTerraform(struct!.additionalEventCapturedAsUserInput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    change: {
      value: cdktf.booleanToHclTerraform(struct!.change),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    click: {
      value: cdktf.booleanToHclTerraform(struct!.click),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    doubleclick: {
      value: cdktf.booleanToHclTerraform(struct!.doubleclick),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keydown: {
      value: cdktf.booleanToHclTerraform(struct!.keydown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keyup: {
      value: cdktf.booleanToHclTerraform(struct!.keyup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mousedown: {
      value: cdktf.booleanToHclTerraform(struct!.mousedown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mouseup: {
      value: cdktf.booleanToHclTerraform(struct!.mouseup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scroll: {
      value: cdktf.booleanToHclTerraform(struct!.scroll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    touch_end: {
      value: cdktf.booleanToHclTerraform(struct!.touchEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    touch_start: {
      value: cdktf.booleanToHclTerraform(struct!.touchStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalEventCapturedAsUserInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalEventCapturedAsUserInput = this._additionalEventCapturedAsUserInput;
    }
    if (this._change !== undefined) {
      hasAnyValues = true;
      internalValueResult.change = this._change;
    }
    if (this._click !== undefined) {
      hasAnyValues = true;
      internalValueResult.click = this._click;
    }
    if (this._doubleclick !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleclick = this._doubleclick;
    }
    if (this._keydown !== undefined) {
      hasAnyValues = true;
      internalValueResult.keydown = this._keydown;
    }
    if (this._keyup !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyup = this._keyup;
    }
    if (this._mousedown !== undefined) {
      hasAnyValues = true;
      internalValueResult.mousedown = this._mousedown;
    }
    if (this._mouseup !== undefined) {
      hasAnyValues = true;
      internalValueResult.mouseup = this._mouseup;
    }
    if (this._scroll !== undefined) {
      hasAnyValues = true;
      internalValueResult.scroll = this._scroll;
    }
    if (this._touchEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.touchEnd = this._touchEnd;
    }
    if (this._touchStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.touchStart = this._touchStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalEventCapturedAsUserInput = undefined;
      this._change = undefined;
      this._click = undefined;
      this._doubleclick = undefined;
      this._keydown = undefined;
      this._keyup = undefined;
      this._mousedown = undefined;
      this._mouseup = undefined;
      this._scroll = undefined;
      this._touchEnd = undefined;
      this._touchStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalEventCapturedAsUserInput = value.additionalEventCapturedAsUserInput;
      this._change = value.change;
      this._click = value.click;
      this._doubleclick = value.doubleclick;
      this._keydown = value.keydown;
      this._keyup = value.keyup;
      this._mousedown = value.mousedown;
      this._mouseup = value.mouseup;
      this._scroll = value.scroll;
      this._touchEnd = value.touchEnd;
      this._touchStart = value.touchStart;
    }
  }

  // additional_event_captured_as_user_input - computed: false, optional: true, required: false
  private _additionalEventCapturedAsUserInput?: string; 
  public get additionalEventCapturedAsUserInput() {
    return this.getStringAttribute('additional_event_captured_as_user_input');
  }
  public set additionalEventCapturedAsUserInput(value: string) {
    this._additionalEventCapturedAsUserInput = value;
  }
  public resetAdditionalEventCapturedAsUserInput() {
    this._additionalEventCapturedAsUserInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEventCapturedAsUserInputInput() {
    return this._additionalEventCapturedAsUserInput;
  }

  // change - computed: false, optional: true, required: false
  private _change?: boolean | cdktf.IResolvable; 
  public get change() {
    return this.getBooleanAttribute('change');
  }
  public set change(value: boolean | cdktf.IResolvable) {
    this._change = value;
  }
  public resetChange() {
    this._change = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeInput() {
    return this._change;
  }

  // click - computed: false, optional: true, required: false
  private _click?: boolean | cdktf.IResolvable; 
  public get click() {
    return this.getBooleanAttribute('click');
  }
  public set click(value: boolean | cdktf.IResolvable) {
    this._click = value;
  }
  public resetClick() {
    this._click = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickInput() {
    return this._click;
  }

  // doubleclick - computed: false, optional: true, required: false
  private _doubleclick?: boolean | cdktf.IResolvable; 
  public get doubleclick() {
    return this.getBooleanAttribute('doubleclick');
  }
  public set doubleclick(value: boolean | cdktf.IResolvable) {
    this._doubleclick = value;
  }
  public resetDoubleclick() {
    this._doubleclick = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleclickInput() {
    return this._doubleclick;
  }

  // keydown - computed: false, optional: true, required: false
  private _keydown?: boolean | cdktf.IResolvable; 
  public get keydown() {
    return this.getBooleanAttribute('keydown');
  }
  public set keydown(value: boolean | cdktf.IResolvable) {
    this._keydown = value;
  }
  public resetKeydown() {
    this._keydown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keydownInput() {
    return this._keydown;
  }

  // keyup - computed: false, optional: true, required: false
  private _keyup?: boolean | cdktf.IResolvable; 
  public get keyup() {
    return this.getBooleanAttribute('keyup');
  }
  public set keyup(value: boolean | cdktf.IResolvable) {
    this._keyup = value;
  }
  public resetKeyup() {
    this._keyup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyupInput() {
    return this._keyup;
  }

  // mousedown - computed: false, optional: true, required: false
  private _mousedown?: boolean | cdktf.IResolvable; 
  public get mousedown() {
    return this.getBooleanAttribute('mousedown');
  }
  public set mousedown(value: boolean | cdktf.IResolvable) {
    this._mousedown = value;
  }
  public resetMousedown() {
    this._mousedown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mousedownInput() {
    return this._mousedown;
  }

  // mouseup - computed: false, optional: true, required: false
  private _mouseup?: boolean | cdktf.IResolvable; 
  public get mouseup() {
    return this.getBooleanAttribute('mouseup');
  }
  public set mouseup(value: boolean | cdktf.IResolvable) {
    this._mouseup = value;
  }
  public resetMouseup() {
    this._mouseup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mouseupInput() {
    return this._mouseup;
  }

  // scroll - computed: false, optional: true, required: false
  private _scroll?: boolean | cdktf.IResolvable; 
  public get scroll() {
    return this.getBooleanAttribute('scroll');
  }
  public set scroll(value: boolean | cdktf.IResolvable) {
    this._scroll = value;
  }
  public resetScroll() {
    this._scroll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrollInput() {
    return this._scroll;
  }

  // touch_end - computed: false, optional: true, required: false
  private _touchEnd?: boolean | cdktf.IResolvable; 
  public get touchEnd() {
    return this.getBooleanAttribute('touch_end');
  }
  public set touchEnd(value: boolean | cdktf.IResolvable) {
    this._touchEnd = value;
  }
  public resetTouchEnd() {
    this._touchEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get touchEndInput() {
    return this._touchEnd;
  }

  // touch_start - computed: false, optional: true, required: false
  private _touchStart?: boolean | cdktf.IResolvable; 
  public get touchStart() {
    return this.getBooleanAttribute('touch_start');
  }
  public set touchStart(value: boolean | cdktf.IResolvable) {
    this._touchStart = value;
  }
  public resetTouchStart() {
    this._touchStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get touchStartInput() {
    return this._touchStart;
  }
}
export interface WebApplicationMonitoringSettingsAdvancedJavascriptTagSettings {
  /**
  * Instrumentation of unsupported Ajax frameworks enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#instrument_unsupported_ajax_frameworks WebApplication#instrument_unsupported_ajax_frameworks}
  */
  readonly instrumentUnsupportedAjaxFrameworks?: boolean | cdktf.IResolvable;
  /**
  * Maximum character length for action names. Valid values range from 5 to 10000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#max_action_name_length WebApplication#max_action_name_length}
  */
  readonly maxActionNameLength: number;
  /**
  * Maximum number of errors to be captured per page. Valid values range from 0 to 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#max_errors_to_capture WebApplication#max_errors_to_capture}
  */
  readonly maxErrorsToCapture: number;
  /**
  * Proxy wrapper enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#proxy_wrapper_enabled WebApplication#proxy_wrapper_enabled}
  */
  readonly proxyWrapperEnabled?: boolean | cdktf.IResolvable;
  /**
  * Additional special characters that are to be escaped using non-alphanumeric characters in HTML escape format. Maximum length 30 character. Allowed characters are `^`, `\`, `<` and `>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#special_characters_to_escape WebApplication#special_characters_to_escape}
  */
  readonly specialCharactersToEscape?: string;
  /**
  * Send the beacon signal as a synchronous XMLHttpRequest using Firefox enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#sync_beacon_firefox WebApplication#sync_beacon_firefox}
  */
  readonly syncBeaconFirefox?: boolean | cdktf.IResolvable;
  /**
  * Send the beacon signal as a synchronous XMLHttpRequest using Internet Explorer enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#sync_beacon_internet_explorer WebApplication#sync_beacon_internet_explorer}
  */
  readonly syncBeaconInternetExplorer?: boolean | cdktf.IResolvable;
  /**
  * User action name attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#user_action_name_attribute WebApplication#user_action_name_attribute}
  */
  readonly userActionNameAttribute?: string;
  /**
  * additional_event_handlers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#additional_event_handlers WebApplication#additional_event_handlers}
  */
  readonly additionalEventHandlers: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlers;
  /**
  * event_wrapper_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#event_wrapper_settings WebApplication#event_wrapper_settings}
  */
  readonly eventWrapperSettings?: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettings;
  /**
  * global_event_capture_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#global_event_capture_settings WebApplication#global_event_capture_settings}
  */
  readonly globalEventCaptureSettings?: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettings;
}

export function webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsToTerraform(struct?: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsOutputReference | WebApplicationMonitoringSettingsAdvancedJavascriptTagSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instrument_unsupported_ajax_frameworks: cdktf.booleanToTerraform(struct!.instrumentUnsupportedAjaxFrameworks),
    max_action_name_length: cdktf.numberToTerraform(struct!.maxActionNameLength),
    max_errors_to_capture: cdktf.numberToTerraform(struct!.maxErrorsToCapture),
    proxy_wrapper_enabled: cdktf.booleanToTerraform(struct!.proxyWrapperEnabled),
    special_characters_to_escape: cdktf.stringToTerraform(struct!.specialCharactersToEscape),
    sync_beacon_firefox: cdktf.booleanToTerraform(struct!.syncBeaconFirefox),
    sync_beacon_internet_explorer: cdktf.booleanToTerraform(struct!.syncBeaconInternetExplorer),
    user_action_name_attribute: cdktf.stringToTerraform(struct!.userActionNameAttribute),
    additional_event_handlers: webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlersToTerraform(struct!.additionalEventHandlers),
    event_wrapper_settings: webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettingsToTerraform(struct!.eventWrapperSettings),
    global_event_capture_settings: webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettingsToTerraform(struct!.globalEventCaptureSettings),
  }
}


export function webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsToHclTerraform(struct?: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsOutputReference | WebApplicationMonitoringSettingsAdvancedJavascriptTagSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instrument_unsupported_ajax_frameworks: {
      value: cdktf.booleanToHclTerraform(struct!.instrumentUnsupportedAjaxFrameworks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_action_name_length: {
      value: cdktf.numberToHclTerraform(struct!.maxActionNameLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_errors_to_capture: {
      value: cdktf.numberToHclTerraform(struct!.maxErrorsToCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_wrapper_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.proxyWrapperEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    special_characters_to_escape: {
      value: cdktf.stringToHclTerraform(struct!.specialCharactersToEscape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_beacon_firefox: {
      value: cdktf.booleanToHclTerraform(struct!.syncBeaconFirefox),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_beacon_internet_explorer: {
      value: cdktf.booleanToHclTerraform(struct!.syncBeaconInternetExplorer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_action_name_attribute: {
      value: cdktf.stringToHclTerraform(struct!.userActionNameAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_event_handlers: {
      value: webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlersToHclTerraform(struct!.additionalEventHandlers),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlersList",
    },
    event_wrapper_settings: {
      value: webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettingsToHclTerraform(struct!.eventWrapperSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettingsList",
    },
    global_event_capture_settings: {
      value: webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettingsToHclTerraform(struct!.globalEventCaptureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsAdvancedJavascriptTagSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instrumentUnsupportedAjaxFrameworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.instrumentUnsupportedAjaxFrameworks = this._instrumentUnsupportedAjaxFrameworks;
    }
    if (this._maxActionNameLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxActionNameLength = this._maxActionNameLength;
    }
    if (this._maxErrorsToCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxErrorsToCapture = this._maxErrorsToCapture;
    }
    if (this._proxyWrapperEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyWrapperEnabled = this._proxyWrapperEnabled;
    }
    if (this._specialCharactersToEscape !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialCharactersToEscape = this._specialCharactersToEscape;
    }
    if (this._syncBeaconFirefox !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncBeaconFirefox = this._syncBeaconFirefox;
    }
    if (this._syncBeaconInternetExplorer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncBeaconInternetExplorer = this._syncBeaconInternetExplorer;
    }
    if (this._userActionNameAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userActionNameAttribute = this._userActionNameAttribute;
    }
    if (this._additionalEventHandlers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalEventHandlers = this._additionalEventHandlers?.internalValue;
    }
    if (this._eventWrapperSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventWrapperSettings = this._eventWrapperSettings?.internalValue;
    }
    if (this._globalEventCaptureSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalEventCaptureSettings = this._globalEventCaptureSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instrumentUnsupportedAjaxFrameworks = undefined;
      this._maxActionNameLength = undefined;
      this._maxErrorsToCapture = undefined;
      this._proxyWrapperEnabled = undefined;
      this._specialCharactersToEscape = undefined;
      this._syncBeaconFirefox = undefined;
      this._syncBeaconInternetExplorer = undefined;
      this._userActionNameAttribute = undefined;
      this._additionalEventHandlers.internalValue = undefined;
      this._eventWrapperSettings.internalValue = undefined;
      this._globalEventCaptureSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instrumentUnsupportedAjaxFrameworks = value.instrumentUnsupportedAjaxFrameworks;
      this._maxActionNameLength = value.maxActionNameLength;
      this._maxErrorsToCapture = value.maxErrorsToCapture;
      this._proxyWrapperEnabled = value.proxyWrapperEnabled;
      this._specialCharactersToEscape = value.specialCharactersToEscape;
      this._syncBeaconFirefox = value.syncBeaconFirefox;
      this._syncBeaconInternetExplorer = value.syncBeaconInternetExplorer;
      this._userActionNameAttribute = value.userActionNameAttribute;
      this._additionalEventHandlers.internalValue = value.additionalEventHandlers;
      this._eventWrapperSettings.internalValue = value.eventWrapperSettings;
      this._globalEventCaptureSettings.internalValue = value.globalEventCaptureSettings;
    }
  }

  // instrument_unsupported_ajax_frameworks - computed: false, optional: true, required: false
  private _instrumentUnsupportedAjaxFrameworks?: boolean | cdktf.IResolvable; 
  public get instrumentUnsupportedAjaxFrameworks() {
    return this.getBooleanAttribute('instrument_unsupported_ajax_frameworks');
  }
  public set instrumentUnsupportedAjaxFrameworks(value: boolean | cdktf.IResolvable) {
    this._instrumentUnsupportedAjaxFrameworks = value;
  }
  public resetInstrumentUnsupportedAjaxFrameworks() {
    this._instrumentUnsupportedAjaxFrameworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentUnsupportedAjaxFrameworksInput() {
    return this._instrumentUnsupportedAjaxFrameworks;
  }

  // max_action_name_length - computed: false, optional: false, required: true
  private _maxActionNameLength?: number; 
  public get maxActionNameLength() {
    return this.getNumberAttribute('max_action_name_length');
  }
  public set maxActionNameLength(value: number) {
    this._maxActionNameLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxActionNameLengthInput() {
    return this._maxActionNameLength;
  }

  // max_errors_to_capture - computed: false, optional: false, required: true
  private _maxErrorsToCapture?: number; 
  public get maxErrorsToCapture() {
    return this.getNumberAttribute('max_errors_to_capture');
  }
  public set maxErrorsToCapture(value: number) {
    this._maxErrorsToCapture = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxErrorsToCaptureInput() {
    return this._maxErrorsToCapture;
  }

  // proxy_wrapper_enabled - computed: false, optional: true, required: false
  private _proxyWrapperEnabled?: boolean | cdktf.IResolvable; 
  public get proxyWrapperEnabled() {
    return this.getBooleanAttribute('proxy_wrapper_enabled');
  }
  public set proxyWrapperEnabled(value: boolean | cdktf.IResolvable) {
    this._proxyWrapperEnabled = value;
  }
  public resetProxyWrapperEnabled() {
    this._proxyWrapperEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyWrapperEnabledInput() {
    return this._proxyWrapperEnabled;
  }

  // special_characters_to_escape - computed: false, optional: true, required: false
  private _specialCharactersToEscape?: string; 
  public get specialCharactersToEscape() {
    return this.getStringAttribute('special_characters_to_escape');
  }
  public set specialCharactersToEscape(value: string) {
    this._specialCharactersToEscape = value;
  }
  public resetSpecialCharactersToEscape() {
    this._specialCharactersToEscape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialCharactersToEscapeInput() {
    return this._specialCharactersToEscape;
  }

  // sync_beacon_firefox - computed: false, optional: true, required: false
  private _syncBeaconFirefox?: boolean | cdktf.IResolvable; 
  public get syncBeaconFirefox() {
    return this.getBooleanAttribute('sync_beacon_firefox');
  }
  public set syncBeaconFirefox(value: boolean | cdktf.IResolvable) {
    this._syncBeaconFirefox = value;
  }
  public resetSyncBeaconFirefox() {
    this._syncBeaconFirefox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncBeaconFirefoxInput() {
    return this._syncBeaconFirefox;
  }

  // sync_beacon_internet_explorer - computed: false, optional: true, required: false
  private _syncBeaconInternetExplorer?: boolean | cdktf.IResolvable; 
  public get syncBeaconInternetExplorer() {
    return this.getBooleanAttribute('sync_beacon_internet_explorer');
  }
  public set syncBeaconInternetExplorer(value: boolean | cdktf.IResolvable) {
    this._syncBeaconInternetExplorer = value;
  }
  public resetSyncBeaconInternetExplorer() {
    this._syncBeaconInternetExplorer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncBeaconInternetExplorerInput() {
    return this._syncBeaconInternetExplorer;
  }

  // user_action_name_attribute - computed: false, optional: true, required: false
  private _userActionNameAttribute?: string; 
  public get userActionNameAttribute() {
    return this.getStringAttribute('user_action_name_attribute');
  }
  public set userActionNameAttribute(value: string) {
    this._userActionNameAttribute = value;
  }
  public resetUserActionNameAttribute() {
    this._userActionNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActionNameAttributeInput() {
    return this._userActionNameAttribute;
  }

  // additional_event_handlers - computed: false, optional: false, required: true
  private _additionalEventHandlers = new WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlersOutputReference(this, "additional_event_handlers");
  public get additionalEventHandlers() {
    return this._additionalEventHandlers;
  }
  public putAdditionalEventHandlers(value: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsAdditionalEventHandlers) {
    this._additionalEventHandlers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEventHandlersInput() {
    return this._additionalEventHandlers.internalValue;
  }

  // event_wrapper_settings - computed: false, optional: true, required: false
  private _eventWrapperSettings = new WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettingsOutputReference(this, "event_wrapper_settings");
  public get eventWrapperSettings() {
    return this._eventWrapperSettings;
  }
  public putEventWrapperSettings(value: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsEventWrapperSettings) {
    this._eventWrapperSettings.internalValue = value;
  }
  public resetEventWrapperSettings() {
    this._eventWrapperSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventWrapperSettingsInput() {
    return this._eventWrapperSettings.internalValue;
  }

  // global_event_capture_settings - computed: false, optional: true, required: false
  private _globalEventCaptureSettings = new WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettingsOutputReference(this, "global_event_capture_settings");
  public get globalEventCaptureSettings() {
    return this._globalEventCaptureSettings;
  }
  public putGlobalEventCaptureSettings(value: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsGlobalEventCaptureSettings) {
    this._globalEventCaptureSettings.internalValue = value;
  }
  public resetGlobalEventCaptureSettings() {
    this._globalEventCaptureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalEventCaptureSettingsInput() {
    return this._globalEventCaptureSettings.internalValue;
  }
}
export interface WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestriction {
  /**
  * The type of the browser that is used. Possible values are `ANDROID_WEBKIT`, `BOTS_SPIDERS`, `CHROME`, `EDGE`, `FIREFOX`, `INTERNET_EXPLORER, `OPERA` and `SAFARI`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#browser_type WebApplication#browser_type}
  */
  readonly browserType: string;
  /**
  * The version of the browser that is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#browser_version WebApplication#browser_version}
  */
  readonly browserVersion?: string;
  /**
  * No documentation available. Possible values are `EQUALS`, `GREATER_THAN_OR_EQUAL` and `LOWER_THAN_OR_EQUAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#comparator WebApplication#comparator}
  */
  readonly comparator?: string;
  /**
  * The platform on which the browser is being used. Possible values are `ALL`, `DESKTOP` and `MOBILE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#platform WebApplication#platform}
  */
  readonly platform?: string;
}

export function webApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestrictionToTerraform(struct?: WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browser_type: cdktf.stringToTerraform(struct!.browserType),
    browser_version: cdktf.stringToTerraform(struct!.browserVersion),
    comparator: cdktf.stringToTerraform(struct!.comparator),
    platform: cdktf.stringToTerraform(struct!.platform),
  }
}


export function webApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestrictionToHclTerraform(struct?: WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browser_type: {
      value: cdktf.stringToHclTerraform(struct!.browserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    browser_version: {
      value: cdktf.stringToHclTerraform(struct!.browserVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestriction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserType = this._browserType;
    }
    if (this._browserVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserVersion = this._browserVersion;
    }
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestriction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._browserType = undefined;
      this._browserVersion = undefined;
      this._comparator = undefined;
      this._platform = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._browserType = value.browserType;
      this._browserVersion = value.browserVersion;
      this._comparator = value.comparator;
      this._platform = value.platform;
    }
  }

  // browser_type - computed: false, optional: false, required: true
  private _browserType?: string; 
  public get browserType() {
    return this.getStringAttribute('browser_type');
  }
  public set browserType(value: string) {
    this._browserType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get browserTypeInput() {
    return this._browserType;
  }

  // browser_version - computed: false, optional: true, required: false
  private _browserVersion?: string; 
  public get browserVersion() {
    return this.getStringAttribute('browser_version');
  }
  public set browserVersion(value: string) {
    this._browserVersion = value;
  }
  public resetBrowserVersion() {
    this._browserVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserVersionInput() {
    return this._browserVersion;
  }

  // comparator - computed: false, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }
}

export class WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestrictionList extends cdktf.ComplexList {
  public internalValue? : WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestriction[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestrictionOutputReference {
    return new WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictions {
  /**
  * restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#restriction WebApplication#restriction}
  */
  readonly restriction: WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestriction[] | cdktf.IResolvable;
}

export function webApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsToTerraform(struct?: WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsOutputReference | WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restriction: cdktf.listMapper(webApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestrictionToTerraform, true)(struct!.restriction),
  }
}


export function webApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsToHclTerraform(struct?: WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsOutputReference | WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restriction: {
      value: cdktf.listMapperHcl(webApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestrictionToHclTerraform, true)(struct!.restriction),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestrictionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restriction = this._restriction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restriction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restriction.internalValue = value.restriction;
    }
  }

  // restriction - computed: false, optional: false, required: true
  private _restriction = new WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestrictionList(this, "restriction", false);
  public get restriction() {
    return this._restriction;
  }
  public putRestriction(value: WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsRestriction[] | cdktf.IResolvable) {
    this._restriction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionInput() {
    return this._restriction.internalValue;
  }
}
export interface WebApplicationMonitoringSettingsBrowserRestrictionSettings {
  /**
  * The mode of the list of browser restrictions. Possible values area `EXCLUDE` and `INCLUDE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#mode WebApplication#mode}
  */
  readonly mode: string;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#restrictions WebApplication#restrictions}
  */
  readonly restrictions?: WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictions;
}

export function webApplicationMonitoringSettingsBrowserRestrictionSettingsToTerraform(struct?: WebApplicationMonitoringSettingsBrowserRestrictionSettingsOutputReference | WebApplicationMonitoringSettingsBrowserRestrictionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    restrictions: webApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsToTerraform(struct!.restrictions),
  }
}


export function webApplicationMonitoringSettingsBrowserRestrictionSettingsToHclTerraform(struct?: WebApplicationMonitoringSettingsBrowserRestrictionSettingsOutputReference | WebApplicationMonitoringSettingsBrowserRestrictionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrictions: {
      value: webApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsToHclTerraform(struct!.restrictions),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsBrowserRestrictionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsBrowserRestrictionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._restrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictions = this._restrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsBrowserRestrictionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._restrictions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._restrictions.internalValue = value.restrictions;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictionsOutputReference(this, "restrictions");
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: WebApplicationMonitoringSettingsBrowserRestrictionSettingsRestrictions) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }
}
export interface WebApplicationMonitoringSettingsContentCaptureResourceTimingSettings {
  /**
  * Instrumentation delay for monitoring resource and image resource impact in browsers that don't offer W3C resource timings. 
  * 
  * Valid values range from 0 to 9999.
  * 
  * Only effective if `nonW3cResourceTimings` is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#instrumentation_delay WebApplication#instrumentation_delay}
  */
  readonly instrumentationDelay: number;
  /**
  * Timing for JavaScript files and images on non-W3C supported browsers enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#non_w3c_resource_timings WebApplication#non_w3c_resource_timings}
  */
  readonly nonW3CResourceTimings?: boolean | cdktf.IResolvable;
  /**
  * Defines how detailed resource timings are captured.
  * 
  * Only effective if **w3cResourceTimings** or **nonW3cResourceTimings** is enabled. Possible values are `CAPTURE_ALL_SUMMARIES`, `CAPTURE_FULL_DETAILS` and `CAPTURE_LIMITED_SUMMARIES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#resource_timing_capture_type WebApplication#resource_timing_capture_type}
  */
  readonly resourceTimingCaptureType?: string;
  /**
  * Limits the number of domains for which W3C resource timings are captured.
  * 
  * Only effective if **resourceTimingCaptureType** is `CAPTURE_LIMITED_SUMMARIES`. Valid values range from 0 to 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#resource_timings_domain_limit WebApplication#resource_timings_domain_limit}
  */
  readonly resourceTimingsDomainLimit?: number;
  /**
  * W3C resource timings for third party/CDN enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#w3c_resource_timings WebApplication#w3c_resource_timings}
  */
  readonly w3CResourceTimings?: boolean | cdktf.IResolvable;
}

export function webApplicationMonitoringSettingsContentCaptureResourceTimingSettingsToTerraform(struct?: WebApplicationMonitoringSettingsContentCaptureResourceTimingSettingsOutputReference | WebApplicationMonitoringSettingsContentCaptureResourceTimingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instrumentation_delay: cdktf.numberToTerraform(struct!.instrumentationDelay),
    non_w3c_resource_timings: cdktf.booleanToTerraform(struct!.nonW3CResourceTimings),
    resource_timing_capture_type: cdktf.stringToTerraform(struct!.resourceTimingCaptureType),
    resource_timings_domain_limit: cdktf.numberToTerraform(struct!.resourceTimingsDomainLimit),
    w3c_resource_timings: cdktf.booleanToTerraform(struct!.w3CResourceTimings),
  }
}


export function webApplicationMonitoringSettingsContentCaptureResourceTimingSettingsToHclTerraform(struct?: WebApplicationMonitoringSettingsContentCaptureResourceTimingSettingsOutputReference | WebApplicationMonitoringSettingsContentCaptureResourceTimingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instrumentation_delay: {
      value: cdktf.numberToHclTerraform(struct!.instrumentationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_w3c_resource_timings: {
      value: cdktf.booleanToHclTerraform(struct!.nonW3CResourceTimings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_timing_capture_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceTimingCaptureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_timings_domain_limit: {
      value: cdktf.numberToHclTerraform(struct!.resourceTimingsDomainLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    w3c_resource_timings: {
      value: cdktf.booleanToHclTerraform(struct!.w3CResourceTimings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsContentCaptureResourceTimingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsContentCaptureResourceTimingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instrumentationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.instrumentationDelay = this._instrumentationDelay;
    }
    if (this._nonW3CResourceTimings !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonW3CResourceTimings = this._nonW3CResourceTimings;
    }
    if (this._resourceTimingCaptureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTimingCaptureType = this._resourceTimingCaptureType;
    }
    if (this._resourceTimingsDomainLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTimingsDomainLimit = this._resourceTimingsDomainLimit;
    }
    if (this._w3CResourceTimings !== undefined) {
      hasAnyValues = true;
      internalValueResult.w3CResourceTimings = this._w3CResourceTimings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsContentCaptureResourceTimingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instrumentationDelay = undefined;
      this._nonW3CResourceTimings = undefined;
      this._resourceTimingCaptureType = undefined;
      this._resourceTimingsDomainLimit = undefined;
      this._w3CResourceTimings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instrumentationDelay = value.instrumentationDelay;
      this._nonW3CResourceTimings = value.nonW3CResourceTimings;
      this._resourceTimingCaptureType = value.resourceTimingCaptureType;
      this._resourceTimingsDomainLimit = value.resourceTimingsDomainLimit;
      this._w3CResourceTimings = value.w3CResourceTimings;
    }
  }

  // instrumentation_delay - computed: false, optional: false, required: true
  private _instrumentationDelay?: number; 
  public get instrumentationDelay() {
    return this.getNumberAttribute('instrumentation_delay');
  }
  public set instrumentationDelay(value: number) {
    this._instrumentationDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentationDelayInput() {
    return this._instrumentationDelay;
  }

  // non_w3c_resource_timings - computed: false, optional: true, required: false
  private _nonW3CResourceTimings?: boolean | cdktf.IResolvable; 
  public get nonW3CResourceTimings() {
    return this.getBooleanAttribute('non_w3c_resource_timings');
  }
  public set nonW3CResourceTimings(value: boolean | cdktf.IResolvable) {
    this._nonW3CResourceTimings = value;
  }
  public resetNonW3CResourceTimings() {
    this._nonW3CResourceTimings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonW3CResourceTimingsInput() {
    return this._nonW3CResourceTimings;
  }

  // resource_timing_capture_type - computed: false, optional: true, required: false
  private _resourceTimingCaptureType?: string; 
  public get resourceTimingCaptureType() {
    return this.getStringAttribute('resource_timing_capture_type');
  }
  public set resourceTimingCaptureType(value: string) {
    this._resourceTimingCaptureType = value;
  }
  public resetResourceTimingCaptureType() {
    this._resourceTimingCaptureType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTimingCaptureTypeInput() {
    return this._resourceTimingCaptureType;
  }

  // resource_timings_domain_limit - computed: false, optional: true, required: false
  private _resourceTimingsDomainLimit?: number; 
  public get resourceTimingsDomainLimit() {
    return this.getNumberAttribute('resource_timings_domain_limit');
  }
  public set resourceTimingsDomainLimit(value: number) {
    this._resourceTimingsDomainLimit = value;
  }
  public resetResourceTimingsDomainLimit() {
    this._resourceTimingsDomainLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTimingsDomainLimitInput() {
    return this._resourceTimingsDomainLimit;
  }

  // w3c_resource_timings - computed: false, optional: true, required: false
  private _w3CResourceTimings?: boolean | cdktf.IResolvable; 
  public get w3CResourceTimings() {
    return this.getBooleanAttribute('w3c_resource_timings');
  }
  public set w3CResourceTimings(value: boolean | cdktf.IResolvable) {
    this._w3CResourceTimings = value;
  }
  public resetW3CResourceTimings() {
    this._w3CResourceTimings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get w3CResourceTimingsInput() {
    return this._w3CResourceTimings;
  }
}
export interface WebApplicationMonitoringSettingsContentCaptureTimeoutSettings {
  /**
  * Defines how deep temporary actions may cascade. 0 disables temporary actions completely. Recommended value if enabled is 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#temporary_action_limit WebApplication#temporary_action_limit}
  */
  readonly temporaryActionLimit: number;
  /**
  * The total timeout of all cascaded timeouts that should still be able to create a temporary action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#temporary_action_total_timeout WebApplication#temporary_action_total_timeout}
  */
  readonly temporaryActionTotalTimeout: number;
  /**
  * Timed action support enabled/disabled. 
  * 
  * Enable to detect actions that trigger sending of XHRs via `setTimout` methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#timed_action_support WebApplication#timed_action_support}
  */
  readonly timedActionSupport?: boolean | cdktf.IResolvable;
}

export function webApplicationMonitoringSettingsContentCaptureTimeoutSettingsToTerraform(struct?: WebApplicationMonitoringSettingsContentCaptureTimeoutSettingsOutputReference | WebApplicationMonitoringSettingsContentCaptureTimeoutSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    temporary_action_limit: cdktf.numberToTerraform(struct!.temporaryActionLimit),
    temporary_action_total_timeout: cdktf.numberToTerraform(struct!.temporaryActionTotalTimeout),
    timed_action_support: cdktf.booleanToTerraform(struct!.timedActionSupport),
  }
}


export function webApplicationMonitoringSettingsContentCaptureTimeoutSettingsToHclTerraform(struct?: WebApplicationMonitoringSettingsContentCaptureTimeoutSettingsOutputReference | WebApplicationMonitoringSettingsContentCaptureTimeoutSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    temporary_action_limit: {
      value: cdktf.numberToHclTerraform(struct!.temporaryActionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    temporary_action_total_timeout: {
      value: cdktf.numberToHclTerraform(struct!.temporaryActionTotalTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timed_action_support: {
      value: cdktf.booleanToHclTerraform(struct!.timedActionSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsContentCaptureTimeoutSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsContentCaptureTimeoutSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._temporaryActionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryActionLimit = this._temporaryActionLimit;
    }
    if (this._temporaryActionTotalTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryActionTotalTimeout = this._temporaryActionTotalTimeout;
    }
    if (this._timedActionSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedActionSupport = this._timedActionSupport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsContentCaptureTimeoutSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._temporaryActionLimit = undefined;
      this._temporaryActionTotalTimeout = undefined;
      this._timedActionSupport = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._temporaryActionLimit = value.temporaryActionLimit;
      this._temporaryActionTotalTimeout = value.temporaryActionTotalTimeout;
      this._timedActionSupport = value.timedActionSupport;
    }
  }

  // temporary_action_limit - computed: false, optional: false, required: true
  private _temporaryActionLimit?: number; 
  public get temporaryActionLimit() {
    return this.getNumberAttribute('temporary_action_limit');
  }
  public set temporaryActionLimit(value: number) {
    this._temporaryActionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryActionLimitInput() {
    return this._temporaryActionLimit;
  }

  // temporary_action_total_timeout - computed: false, optional: false, required: true
  private _temporaryActionTotalTimeout?: number; 
  public get temporaryActionTotalTimeout() {
    return this.getNumberAttribute('temporary_action_total_timeout');
  }
  public set temporaryActionTotalTimeout(value: number) {
    this._temporaryActionTotalTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryActionTotalTimeoutInput() {
    return this._temporaryActionTotalTimeout;
  }

  // timed_action_support - computed: false, optional: true, required: false
  private _timedActionSupport?: boolean | cdktf.IResolvable; 
  public get timedActionSupport() {
    return this.getBooleanAttribute('timed_action_support');
  }
  public set timedActionSupport(value: boolean | cdktf.IResolvable) {
    this._timedActionSupport = value;
  }
  public resetTimedActionSupport() {
    this._timedActionSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedActionSupportInput() {
    return this._timedActionSupport;
  }
}
export interface WebApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettings {
  /**
  * A RegularExpression used to exclude images and iframes from being detected by the VC module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#exclude_url_regex WebApplication#exclude_url_regex}
  */
  readonly excludeUrlRegex?: string;
  /**
  * Query selector for mutation nodes to ignore in VC and SI calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#ignored_mutations_list WebApplication#ignored_mutations_list}
  */
  readonly ignoredMutationsList?: string;
  /**
  * The time in ms the VC module waits for no mutations happening on the page after the load action. Defaults to 1000. Valid values range from 0 to 30000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#inactivity_timeout WebApplication#inactivity_timeout}
  */
  readonly inactivityTimeout?: number;
  /**
  * Determines the time in ms VC waits after an action closes to start calculation. Defaults to 50. Valid values range from 0 to 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#mutation_timeout WebApplication#mutation_timeout}
  */
  readonly mutationTimeout?: number;
  /**
  * Minimum visible area in pixels of elements to be counted towards VC and SI. Defaults to 50. Valid values range from 0 to 10000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#threshold WebApplication#threshold}
  */
  readonly threshold?: number;
}

export function webApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettingsToTerraform(struct?: WebApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettingsOutputReference | WebApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_url_regex: cdktf.stringToTerraform(struct!.excludeUrlRegex),
    ignored_mutations_list: cdktf.stringToTerraform(struct!.ignoredMutationsList),
    inactivity_timeout: cdktf.numberToTerraform(struct!.inactivityTimeout),
    mutation_timeout: cdktf.numberToTerraform(struct!.mutationTimeout),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function webApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettingsToHclTerraform(struct?: WebApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettingsOutputReference | WebApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_url_regex: {
      value: cdktf.stringToHclTerraform(struct!.excludeUrlRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignored_mutations_list: {
      value: cdktf.stringToHclTerraform(struct!.ignoredMutationsList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inactivity_timeout: {
      value: cdktf.numberToHclTerraform(struct!.inactivityTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mutation_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mutationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeUrlRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeUrlRegex = this._excludeUrlRegex;
    }
    if (this._ignoredMutationsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredMutationsList = this._ignoredMutationsList;
    }
    if (this._inactivityTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityTimeout = this._inactivityTimeout;
    }
    if (this._mutationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutationTimeout = this._mutationTimeout;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeUrlRegex = undefined;
      this._ignoredMutationsList = undefined;
      this._inactivityTimeout = undefined;
      this._mutationTimeout = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeUrlRegex = value.excludeUrlRegex;
      this._ignoredMutationsList = value.ignoredMutationsList;
      this._inactivityTimeout = value.inactivityTimeout;
      this._mutationTimeout = value.mutationTimeout;
      this._threshold = value.threshold;
    }
  }

  // exclude_url_regex - computed: false, optional: true, required: false
  private _excludeUrlRegex?: string; 
  public get excludeUrlRegex() {
    return this.getStringAttribute('exclude_url_regex');
  }
  public set excludeUrlRegex(value: string) {
    this._excludeUrlRegex = value;
  }
  public resetExcludeUrlRegex() {
    this._excludeUrlRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUrlRegexInput() {
    return this._excludeUrlRegex;
  }

  // ignored_mutations_list - computed: false, optional: true, required: false
  private _ignoredMutationsList?: string; 
  public get ignoredMutationsList() {
    return this.getStringAttribute('ignored_mutations_list');
  }
  public set ignoredMutationsList(value: string) {
    this._ignoredMutationsList = value;
  }
  public resetIgnoredMutationsList() {
    this._ignoredMutationsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredMutationsListInput() {
    return this._ignoredMutationsList;
  }

  // inactivity_timeout - computed: false, optional: true, required: false
  private _inactivityTimeout?: number; 
  public get inactivityTimeout() {
    return this.getNumberAttribute('inactivity_timeout');
  }
  public set inactivityTimeout(value: number) {
    this._inactivityTimeout = value;
  }
  public resetInactivityTimeout() {
    this._inactivityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutInput() {
    return this._inactivityTimeout;
  }

  // mutation_timeout - computed: false, optional: true, required: false
  private _mutationTimeout?: number; 
  public get mutationTimeout() {
    return this.getNumberAttribute('mutation_timeout');
  }
  public set mutationTimeout(value: number) {
    this._mutationTimeout = value;
  }
  public resetMutationTimeout() {
    this._mutationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutationTimeoutInput() {
    return this._mutationTimeout;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface WebApplicationMonitoringSettingsContentCapture {
  /**
  * JavaScript errors monitoring enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#javascript_errors WebApplication#javascript_errors}
  */
  readonly javascriptErrors?: boolean | cdktf.IResolvable;
  /**
  * Visually complete and Speed index support enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#visually_complete_and_speed_index WebApplication#visually_complete_and_speed_index}
  */
  readonly visuallyCompleteAndSpeedIndex?: boolean | cdktf.IResolvable;
  /**
  * resource_timing_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#resource_timing_settings WebApplication#resource_timing_settings}
  */
  readonly resourceTimingSettings: WebApplicationMonitoringSettingsContentCaptureResourceTimingSettings;
  /**
  * timeout_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#timeout_settings WebApplication#timeout_settings}
  */
  readonly timeoutSettings: WebApplicationMonitoringSettingsContentCaptureTimeoutSettings;
  /**
  * visually_complete_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#visually_complete_settings WebApplication#visually_complete_settings}
  */
  readonly visuallyCompleteSettings?: WebApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettings;
}

export function webApplicationMonitoringSettingsContentCaptureToTerraform(struct?: WebApplicationMonitoringSettingsContentCaptureOutputReference | WebApplicationMonitoringSettingsContentCapture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_errors: cdktf.booleanToTerraform(struct!.javascriptErrors),
    visually_complete_and_speed_index: cdktf.booleanToTerraform(struct!.visuallyCompleteAndSpeedIndex),
    resource_timing_settings: webApplicationMonitoringSettingsContentCaptureResourceTimingSettingsToTerraform(struct!.resourceTimingSettings),
    timeout_settings: webApplicationMonitoringSettingsContentCaptureTimeoutSettingsToTerraform(struct!.timeoutSettings),
    visually_complete_settings: webApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettingsToTerraform(struct!.visuallyCompleteSettings),
  }
}


export function webApplicationMonitoringSettingsContentCaptureToHclTerraform(struct?: WebApplicationMonitoringSettingsContentCaptureOutputReference | WebApplicationMonitoringSettingsContentCapture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_errors: {
      value: cdktf.booleanToHclTerraform(struct!.javascriptErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    visually_complete_and_speed_index: {
      value: cdktf.booleanToHclTerraform(struct!.visuallyCompleteAndSpeedIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_timing_settings: {
      value: webApplicationMonitoringSettingsContentCaptureResourceTimingSettingsToHclTerraform(struct!.resourceTimingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsContentCaptureResourceTimingSettingsList",
    },
    timeout_settings: {
      value: webApplicationMonitoringSettingsContentCaptureTimeoutSettingsToHclTerraform(struct!.timeoutSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsContentCaptureTimeoutSettingsList",
    },
    visually_complete_settings: {
      value: webApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettingsToHclTerraform(struct!.visuallyCompleteSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsContentCaptureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsContentCapture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptErrors = this._javascriptErrors;
    }
    if (this._visuallyCompleteAndSpeedIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.visuallyCompleteAndSpeedIndex = this._visuallyCompleteAndSpeedIndex;
    }
    if (this._resourceTimingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTimingSettings = this._resourceTimingSettings?.internalValue;
    }
    if (this._timeoutSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSettings = this._timeoutSettings?.internalValue;
    }
    if (this._visuallyCompleteSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visuallyCompleteSettings = this._visuallyCompleteSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsContentCapture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptErrors = undefined;
      this._visuallyCompleteAndSpeedIndex = undefined;
      this._resourceTimingSettings.internalValue = undefined;
      this._timeoutSettings.internalValue = undefined;
      this._visuallyCompleteSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptErrors = value.javascriptErrors;
      this._visuallyCompleteAndSpeedIndex = value.visuallyCompleteAndSpeedIndex;
      this._resourceTimingSettings.internalValue = value.resourceTimingSettings;
      this._timeoutSettings.internalValue = value.timeoutSettings;
      this._visuallyCompleteSettings.internalValue = value.visuallyCompleteSettings;
    }
  }

  // javascript_errors - computed: false, optional: true, required: false
  private _javascriptErrors?: boolean | cdktf.IResolvable; 
  public get javascriptErrors() {
    return this.getBooleanAttribute('javascript_errors');
  }
  public set javascriptErrors(value: boolean | cdktf.IResolvable) {
    this._javascriptErrors = value;
  }
  public resetJavascriptErrors() {
    this._javascriptErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptErrorsInput() {
    return this._javascriptErrors;
  }

  // visually_complete_and_speed_index - computed: false, optional: true, required: false
  private _visuallyCompleteAndSpeedIndex?: boolean | cdktf.IResolvable; 
  public get visuallyCompleteAndSpeedIndex() {
    return this.getBooleanAttribute('visually_complete_and_speed_index');
  }
  public set visuallyCompleteAndSpeedIndex(value: boolean | cdktf.IResolvable) {
    this._visuallyCompleteAndSpeedIndex = value;
  }
  public resetVisuallyCompleteAndSpeedIndex() {
    this._visuallyCompleteAndSpeedIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visuallyCompleteAndSpeedIndexInput() {
    return this._visuallyCompleteAndSpeedIndex;
  }

  // resource_timing_settings - computed: false, optional: false, required: true
  private _resourceTimingSettings = new WebApplicationMonitoringSettingsContentCaptureResourceTimingSettingsOutputReference(this, "resource_timing_settings");
  public get resourceTimingSettings() {
    return this._resourceTimingSettings;
  }
  public putResourceTimingSettings(value: WebApplicationMonitoringSettingsContentCaptureResourceTimingSettings) {
    this._resourceTimingSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTimingSettingsInput() {
    return this._resourceTimingSettings.internalValue;
  }

  // timeout_settings - computed: false, optional: false, required: true
  private _timeoutSettings = new WebApplicationMonitoringSettingsContentCaptureTimeoutSettingsOutputReference(this, "timeout_settings");
  public get timeoutSettings() {
    return this._timeoutSettings;
  }
  public putTimeoutSettings(value: WebApplicationMonitoringSettingsContentCaptureTimeoutSettings) {
    this._timeoutSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSettingsInput() {
    return this._timeoutSettings.internalValue;
  }

  // visually_complete_settings - computed: false, optional: true, required: false
  private _visuallyCompleteSettings = new WebApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettingsOutputReference(this, "visually_complete_settings");
  public get visuallyCompleteSettings() {
    return this._visuallyCompleteSettings;
  }
  public putVisuallyCompleteSettings(value: WebApplicationMonitoringSettingsContentCaptureVisuallyCompleteSettings) {
    this._visuallyCompleteSettings.internalValue = value;
  }
  public resetVisuallyCompleteSettings() {
    this._visuallyCompleteSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visuallyCompleteSettingsInput() {
    return this._visuallyCompleteSettings.internalValue;
  }
}
export interface WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRange {
  /**
  * The IP address to be mapped. 
  * 
  * For an IP address range, this is the **from** address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#address WebApplication#address}
  */
  readonly address: string;
  /**
  * The **to** address of the IP address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#address_to WebApplication#address_to}
  */
  readonly addressTo?: string;
  /**
  * The subnet mask of the IP address range. Valid values range from 0 to 128.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#subnet_mask WebApplication#subnet_mask}
  */
  readonly subnetMask?: number;
}

export function webApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRangeToTerraform(struct?: WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_to: cdktf.stringToTerraform(struct!.addressTo),
    subnet_mask: cdktf.numberToTerraform(struct!.subnetMask),
  }
}


export function webApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRangeToHclTerraform(struct?: WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_to: {
      value: cdktf.stringToHclTerraform(struct!.addressTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.numberToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressTo = this._addressTo;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressTo = undefined;
      this._subnetMask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressTo = value.addressTo;
      this._subnetMask = value.subnetMask;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_to - computed: false, optional: true, required: false
  private _addressTo?: string; 
  public get addressTo() {
    return this.getStringAttribute('address_to');
  }
  public set addressTo(value: string) {
    this._addressTo = value;
  }
  public resetAddressTo() {
    this._addressTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressToInput() {
    return this._addressTo;
  }

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: number; 
  public get subnetMask() {
    return this.getNumberAttribute('subnet_mask');
  }
  public set subnetMask(value: number) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }
}

export class WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRangeList extends cdktf.ComplexList {
  public internalValue? : WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRange[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRangeOutputReference {
    return new WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictions {
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#range WebApplication#range}
  */
  readonly range: WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRange[] | cdktf.IResolvable;
}

export function webApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsToTerraform(struct?: WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsOutputReference | WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.listMapper(webApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRangeToTerraform, true)(struct!.range),
  }
}


export function webApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsToHclTerraform(struct?: WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsOutputReference | WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.listMapperHcl(webApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._range.internalValue = value.range;
    }
  }

  // range - computed: false, optional: false, required: true
  private _range = new WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface WebApplicationMonitoringSettingsIpAddressRestrictionSettings {
  /**
  * The mode of the list of ip address restrictions. Possible values area `EXCLUDE` and `INCLUDE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#mode WebApplication#mode}
  */
  readonly mode: string;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#restrictions WebApplication#restrictions}
  */
  readonly restrictions?: WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictions;
}

export function webApplicationMonitoringSettingsIpAddressRestrictionSettingsToTerraform(struct?: WebApplicationMonitoringSettingsIpAddressRestrictionSettingsOutputReference | WebApplicationMonitoringSettingsIpAddressRestrictionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    restrictions: webApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsToTerraform(struct!.restrictions),
  }
}


export function webApplicationMonitoringSettingsIpAddressRestrictionSettingsToHclTerraform(struct?: WebApplicationMonitoringSettingsIpAddressRestrictionSettingsOutputReference | WebApplicationMonitoringSettingsIpAddressRestrictionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrictions: {
      value: webApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsToHclTerraform(struct!.restrictions),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsIpAddressRestrictionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsIpAddressRestrictionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._restrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictions = this._restrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsIpAddressRestrictionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._restrictions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._restrictions.internalValue = value.restrictions;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictionsOutputReference(this, "restrictions");
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: WebApplicationMonitoringSettingsIpAddressRestrictionSettingsRestrictions) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }
}
export interface WebApplicationMonitoringSettingsJavascriptFrameworkSupport {
  /**
  * ActiveXObject support enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#active_x_object WebApplication#active_x_object}
  */
  readonly activeXObject?: boolean | cdktf.IResolvable;
  /**
  * AngularJS and Angular support enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#angular WebApplication#angular}
  */
  readonly angular?: boolean | cdktf.IResolvable;
  /**
  * Dojo support enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#dojo WebApplication#dojo}
  */
  readonly dojo?: boolean | cdktf.IResolvable;
  /**
  * ExtJS, Sencha Touch support enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#extjs WebApplication#extjs}
  */
  readonly extjs?: boolean | cdktf.IResolvable;
  /**
  * ICEfaces support enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#icefaces WebApplication#icefaces}
  */
  readonly icefaces?: boolean | cdktf.IResolvable;
  /**
  * jQuery, Backbone.js support enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#jquery WebApplication#jquery}
  */
  readonly jquery?: boolean | cdktf.IResolvable;
  /**
  * MooTools support enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#moo_tools WebApplication#moo_tools}
  */
  readonly mooTools?: boolean | cdktf.IResolvable;
  /**
  * Prototype support enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#prototype WebApplication#prototype}
  */
  readonly prototype?: boolean | cdktf.IResolvable;
}

export function webApplicationMonitoringSettingsJavascriptFrameworkSupportToTerraform(struct?: WebApplicationMonitoringSettingsJavascriptFrameworkSupportOutputReference | WebApplicationMonitoringSettingsJavascriptFrameworkSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_x_object: cdktf.booleanToTerraform(struct!.activeXObject),
    angular: cdktf.booleanToTerraform(struct!.angular),
    dojo: cdktf.booleanToTerraform(struct!.dojo),
    extjs: cdktf.booleanToTerraform(struct!.extjs),
    icefaces: cdktf.booleanToTerraform(struct!.icefaces),
    jquery: cdktf.booleanToTerraform(struct!.jquery),
    moo_tools: cdktf.booleanToTerraform(struct!.mooTools),
    prototype: cdktf.booleanToTerraform(struct!.prototype),
  }
}


export function webApplicationMonitoringSettingsJavascriptFrameworkSupportToHclTerraform(struct?: WebApplicationMonitoringSettingsJavascriptFrameworkSupportOutputReference | WebApplicationMonitoringSettingsJavascriptFrameworkSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_x_object: {
      value: cdktf.booleanToHclTerraform(struct!.activeXObject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    angular: {
      value: cdktf.booleanToHclTerraform(struct!.angular),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dojo: {
      value: cdktf.booleanToHclTerraform(struct!.dojo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extjs: {
      value: cdktf.booleanToHclTerraform(struct!.extjs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    icefaces: {
      value: cdktf.booleanToHclTerraform(struct!.icefaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jquery: {
      value: cdktf.booleanToHclTerraform(struct!.jquery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    moo_tools: {
      value: cdktf.booleanToHclTerraform(struct!.mooTools),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prototype: {
      value: cdktf.booleanToHclTerraform(struct!.prototype),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsJavascriptFrameworkSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsJavascriptFrameworkSupport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeXObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeXObject = this._activeXObject;
    }
    if (this._angular !== undefined) {
      hasAnyValues = true;
      internalValueResult.angular = this._angular;
    }
    if (this._dojo !== undefined) {
      hasAnyValues = true;
      internalValueResult.dojo = this._dojo;
    }
    if (this._extjs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extjs = this._extjs;
    }
    if (this._icefaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.icefaces = this._icefaces;
    }
    if (this._jquery !== undefined) {
      hasAnyValues = true;
      internalValueResult.jquery = this._jquery;
    }
    if (this._mooTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.mooTools = this._mooTools;
    }
    if (this._prototype !== undefined) {
      hasAnyValues = true;
      internalValueResult.prototype = this._prototype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsJavascriptFrameworkSupport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeXObject = undefined;
      this._angular = undefined;
      this._dojo = undefined;
      this._extjs = undefined;
      this._icefaces = undefined;
      this._jquery = undefined;
      this._mooTools = undefined;
      this._prototype = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeXObject = value.activeXObject;
      this._angular = value.angular;
      this._dojo = value.dojo;
      this._extjs = value.extjs;
      this._icefaces = value.icefaces;
      this._jquery = value.jquery;
      this._mooTools = value.mooTools;
      this._prototype = value.prototype;
    }
  }

  // active_x_object - computed: false, optional: true, required: false
  private _activeXObject?: boolean | cdktf.IResolvable; 
  public get activeXObject() {
    return this.getBooleanAttribute('active_x_object');
  }
  public set activeXObject(value: boolean | cdktf.IResolvable) {
    this._activeXObject = value;
  }
  public resetActiveXObject() {
    this._activeXObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeXObjectInput() {
    return this._activeXObject;
  }

  // angular - computed: false, optional: true, required: false
  private _angular?: boolean | cdktf.IResolvable; 
  public get angular() {
    return this.getBooleanAttribute('angular');
  }
  public set angular(value: boolean | cdktf.IResolvable) {
    this._angular = value;
  }
  public resetAngular() {
    this._angular = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get angularInput() {
    return this._angular;
  }

  // dojo - computed: false, optional: true, required: false
  private _dojo?: boolean | cdktf.IResolvable; 
  public get dojo() {
    return this.getBooleanAttribute('dojo');
  }
  public set dojo(value: boolean | cdktf.IResolvable) {
    this._dojo = value;
  }
  public resetDojo() {
    this._dojo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dojoInput() {
    return this._dojo;
  }

  // extjs - computed: false, optional: true, required: false
  private _extjs?: boolean | cdktf.IResolvable; 
  public get extjs() {
    return this.getBooleanAttribute('extjs');
  }
  public set extjs(value: boolean | cdktf.IResolvable) {
    this._extjs = value;
  }
  public resetExtjs() {
    this._extjs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extjsInput() {
    return this._extjs;
  }

  // icefaces - computed: false, optional: true, required: false
  private _icefaces?: boolean | cdktf.IResolvable; 
  public get icefaces() {
    return this.getBooleanAttribute('icefaces');
  }
  public set icefaces(value: boolean | cdktf.IResolvable) {
    this._icefaces = value;
  }
  public resetIcefaces() {
    this._icefaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icefacesInput() {
    return this._icefaces;
  }

  // jquery - computed: false, optional: true, required: false
  private _jquery?: boolean | cdktf.IResolvable; 
  public get jquery() {
    return this.getBooleanAttribute('jquery');
  }
  public set jquery(value: boolean | cdktf.IResolvable) {
    this._jquery = value;
  }
  public resetJquery() {
    this._jquery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqueryInput() {
    return this._jquery;
  }

  // moo_tools - computed: false, optional: true, required: false
  private _mooTools?: boolean | cdktf.IResolvable; 
  public get mooTools() {
    return this.getBooleanAttribute('moo_tools');
  }
  public set mooTools(value: boolean | cdktf.IResolvable) {
    this._mooTools = value;
  }
  public resetMooTools() {
    this._mooTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mooToolsInput() {
    return this._mooTools;
  }

  // prototype - computed: false, optional: true, required: false
  private _prototype?: boolean | cdktf.IResolvable; 
  public get prototype() {
    return this.getBooleanAttribute('prototype');
  }
  public set prototype(value: boolean | cdktf.IResolvable) {
    this._prototype = value;
  }
  public resetPrototype() {
    this._prototype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prototypeInput() {
    return this._prototype;
  }
}
export interface WebApplicationMonitoringSettingsJavascriptInjectionRulesRule {
  /**
  * `fetch()` request capture enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#enabled WebApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The HTML pattern of the java script injection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#html_pattern WebApplication#html_pattern}
  */
  readonly htmlPattern?: string;
  /**
  * The url rule of the java script injection. Possible values are `AFTER_SPECIFIC_HTML`, `AUTOMATIC_INJECTION`, `BEFORE_SPECIFIC_HTML` and `DO_NOT_INJECT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#rule WebApplication#rule}
  */
  readonly rule: string;
  /**
  * The target against which the rule of the java script injection should be matched. Possible values are `PAGE_QUERY` and `URL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#target WebApplication#target}
  */
  readonly target?: string;
  /**
  * The url operator of the java script injection. Possible values are `ALL_PAGES`, `CONTAINS`, `ENDS_WITH`, `EQUALS` and `STARTS_WITH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#url_operator WebApplication#url_operator}
  */
  readonly urlOperator: string;
  /**
  * The url pattern of the java script injection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#url_pattern WebApplication#url_pattern}
  */
  readonly urlPattern?: string;
}

export function webApplicationMonitoringSettingsJavascriptInjectionRulesRuleToTerraform(struct?: WebApplicationMonitoringSettingsJavascriptInjectionRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    html_pattern: cdktf.stringToTerraform(struct!.htmlPattern),
    rule: cdktf.stringToTerraform(struct!.rule),
    target: cdktf.stringToTerraform(struct!.target),
    url_operator: cdktf.stringToTerraform(struct!.urlOperator),
    url_pattern: cdktf.stringToTerraform(struct!.urlPattern),
  }
}


export function webApplicationMonitoringSettingsJavascriptInjectionRulesRuleToHclTerraform(struct?: WebApplicationMonitoringSettingsJavascriptInjectionRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    html_pattern: {
      value: cdktf.stringToHclTerraform(struct!.htmlPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_operator: {
      value: cdktf.stringToHclTerraform(struct!.urlOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_pattern: {
      value: cdktf.stringToHclTerraform(struct!.urlPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsJavascriptInjectionRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationMonitoringSettingsJavascriptInjectionRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._htmlPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlPattern = this._htmlPattern;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._urlOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlOperator = this._urlOperator;
    }
    if (this._urlPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPattern = this._urlPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsJavascriptInjectionRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._htmlPattern = undefined;
      this._rule = undefined;
      this._target = undefined;
      this._urlOperator = undefined;
      this._urlPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._htmlPattern = value.htmlPattern;
      this._rule = value.rule;
      this._target = value.target;
      this._urlOperator = value.urlOperator;
      this._urlPattern = value.urlPattern;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // html_pattern - computed: false, optional: true, required: false
  private _htmlPattern?: string; 
  public get htmlPattern() {
    return this.getStringAttribute('html_pattern');
  }
  public set htmlPattern(value: string) {
    this._htmlPattern = value;
  }
  public resetHtmlPattern() {
    this._htmlPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlPatternInput() {
    return this._htmlPattern;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // url_operator - computed: false, optional: false, required: true
  private _urlOperator?: string; 
  public get urlOperator() {
    return this.getStringAttribute('url_operator');
  }
  public set urlOperator(value: string) {
    this._urlOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlOperatorInput() {
    return this._urlOperator;
  }

  // url_pattern - computed: false, optional: true, required: false
  private _urlPattern?: string; 
  public get urlPattern() {
    return this.getStringAttribute('url_pattern');
  }
  public set urlPattern(value: string) {
    this._urlPattern = value;
  }
  public resetUrlPattern() {
    this._urlPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPatternInput() {
    return this._urlPattern;
  }
}

export class WebApplicationMonitoringSettingsJavascriptInjectionRulesRuleList extends cdktf.ComplexList {
  public internalValue? : WebApplicationMonitoringSettingsJavascriptInjectionRulesRule[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationMonitoringSettingsJavascriptInjectionRulesRuleOutputReference {
    return new WebApplicationMonitoringSettingsJavascriptInjectionRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationMonitoringSettingsJavascriptInjectionRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#rule WebApplication#rule}
  */
  readonly rule: WebApplicationMonitoringSettingsJavascriptInjectionRulesRule[] | cdktf.IResolvable;
}

export function webApplicationMonitoringSettingsJavascriptInjectionRulesToTerraform(struct?: WebApplicationMonitoringSettingsJavascriptInjectionRulesOutputReference | WebApplicationMonitoringSettingsJavascriptInjectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(webApplicationMonitoringSettingsJavascriptInjectionRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function webApplicationMonitoringSettingsJavascriptInjectionRulesToHclTerraform(struct?: WebApplicationMonitoringSettingsJavascriptInjectionRulesOutputReference | WebApplicationMonitoringSettingsJavascriptInjectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(webApplicationMonitoringSettingsJavascriptInjectionRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsJavascriptInjectionRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsJavascriptInjectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettingsJavascriptInjectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettingsJavascriptInjectionRules | undefined) {
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
  private _rule = new WebApplicationMonitoringSettingsJavascriptInjectionRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: WebApplicationMonitoringSettingsJavascriptInjectionRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface WebApplicationMonitoringSettings {
  /**
  * Add the cross origin = anonymous attribute to capture JavaScript error messages and W3C resource timings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#add_cross_origin_anonymous_attribute WebApplication#add_cross_origin_anonymous_attribute}
  */
  readonly addCrossOriginAnonymousAttribute?: boolean | cdktf.IResolvable;
  /**
  * The name of the angular package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#angular_package_name WebApplication#angular_package_name}
  */
  readonly angularPackageName?: string;
  /**
  * Optimize the value of cache control headers for use with Dynatrace real user monitoring enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#cache_control_header_optimizations WebApplication#cache_control_header_optimizations}
  */
  readonly cacheControlHeaderOptimizations?: boolean | cdktf.IResolvable;
  /**
  * Domain for cookie placement. Maximum 150 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#cookie_placement_domain WebApplication#cookie_placement_domain}
  */
  readonly cookiePlacementDomain?: string;
  /**
  * To enable RUM for XHR calls to AWS Lambda, define a regular expression matching these calls, Dynatrace can then automatically add a custom header (`x-dtc`) to each such request to the respective endpoints in AWS.
  * 
  * Important: These endpoints must accept the `x-dtc` header, or the requests will fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#correlation_header_inclusion_regex WebApplication#correlation_header_inclusion_regex}
  */
  readonly correlationHeaderInclusionRegex?: string;
  /**
  * The location to send monitoring data from the JavaScript tag.
  * 
  *  Specify either a relative or an absolute URL. If you use an absolute URL, data will be sent using CORS. 
  * 
  *  **Required** for auto-injected applications, optional for agentless applications. Maximum 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#custom_configuration_properties WebApplication#custom_configuration_properties}
  */
  readonly customConfigurationProperties?: string;
  /**
  * You can exclude some actions from becoming XHR actions.
  * 
  * Put a regular expression, matching all the required URLs, here.
  * 
  * If noting specified the feature is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#exclude_xhr_regex WebApplication#exclude_xhr_regex}
  */
  readonly excludeXhrRegex?: string;
  /**
  * `fetch()` request capture enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#fetch_requests WebApplication#fetch_requests}
  */
  readonly fetchRequests?: boolean | cdktf.IResolvable;
  /**
  * Manage IP address exclusion settings with `dynatrace_web_app_ip_address_exclusion` resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#ignore_ip_address_restriction_settings WebApplication#ignore_ip_address_restriction_settings}
  */
  readonly ignoreIpAddressRestrictionSettings?: boolean | cdktf.IResolvable;
  /**
  * Possible valures are `CODE_SNIPPET`, `CODE_SNIPPET_ASYNC`, `INLINE_CODE`, `JAVASCRIPT_TAG`, `JAVASCRIPT_TAG_COMPLETE`, `JAVASCRIPT_TAG_SRI`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#injection_mode WebApplication#injection_mode}
  */
  readonly injectionMode: string;
  /**
  * Instrumented web or app server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#instrumented_web_server WebApplication#instrumented_web_server}
  */
  readonly instrumentedWebServer?: boolean | cdktf.IResolvable;
  /**
  * Get the JavaScript library file from the CDN. Not supported by agentless applications and assumed to be false for auto-injected applications if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#library_file_from_cdn WebApplication#library_file_from_cdn}
  */
  readonly libraryFileFromCdn?: boolean | cdktf.IResolvable;
  /**
  * The location of your application’s custom JavaScript library file. 
  * 
  *  If nothing specified the root directory of your web server is used. 
  * 
  *  **Required** for auto-injected applications, not supported by agentless applications. Maximum 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#library_file_location WebApplication#library_file_location}
  */
  readonly libraryFileLocation?: string;
  /**
  * The location to send monitoring data from the JavaScript tag.
  * 
  *  Specify either a relative or an absolute URL. If you use an absolute URL, data will be sent using CORS. 
  * 
  *  **Required** for auto-injected applications, optional for agentless applications. Maximum 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#monitoring_data_path WebApplication#monitoring_data_path}
  */
  readonly monitoringDataPath?: string;
  /**
  * Same site cookie attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#same_site_cookie_attribute WebApplication#same_site_cookie_attribute}
  */
  readonly sameSiteCookieAttribute?: string;
  /**
  * Time duration for the cache settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#script_tag_cache_duration_in_hours WebApplication#script_tag_cache_duration_in_hours}
  */
  readonly scriptTagCacheDurationInHours?: number;
  /**
  * Secure attribute usage for Dynatrace cookies enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#secure_cookie_attribute WebApplication#secure_cookie_attribute}
  */
  readonly secureCookieAttribute?: boolean | cdktf.IResolvable;
  /**
  * Path to identify the server’s request ID. Maximum 150 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#server_request_path_id WebApplication#server_request_path_id}
  */
  readonly serverRequestPathId?: string;
  /**
  * Send beacon data via CORS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#use_cors WebApplication#use_cors}
  */
  readonly useCors?: boolean | cdktf.IResolvable;
  /**
  * `XmlHttpRequest` support enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#xml_http_request WebApplication#xml_http_request}
  */
  readonly xmlHttpRequest?: boolean | cdktf.IResolvable;
  /**
  * advanced_javascript_tag_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#advanced_javascript_tag_settings WebApplication#advanced_javascript_tag_settings}
  */
  readonly advancedJavascriptTagSettings: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettings;
  /**
  * browser_restriction_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#browser_restriction_settings WebApplication#browser_restriction_settings}
  */
  readonly browserRestrictionSettings?: WebApplicationMonitoringSettingsBrowserRestrictionSettings;
  /**
  * content_capture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#content_capture WebApplication#content_capture}
  */
  readonly contentCapture: WebApplicationMonitoringSettingsContentCapture;
  /**
  * ip_address_restriction_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#ip_address_restriction_settings WebApplication#ip_address_restriction_settings}
  */
  readonly ipAddressRestrictionSettings?: WebApplicationMonitoringSettingsIpAddressRestrictionSettings;
  /**
  * javascript_framework_support block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#javascript_framework_support WebApplication#javascript_framework_support}
  */
  readonly javascriptFrameworkSupport?: WebApplicationMonitoringSettingsJavascriptFrameworkSupport;
  /**
  * javascript_injection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#javascript_injection_rules WebApplication#javascript_injection_rules}
  */
  readonly javascriptInjectionRules?: WebApplicationMonitoringSettingsJavascriptInjectionRules;
}

export function webApplicationMonitoringSettingsToTerraform(struct?: WebApplicationMonitoringSettingsOutputReference | WebApplicationMonitoringSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_cross_origin_anonymous_attribute: cdktf.booleanToTerraform(struct!.addCrossOriginAnonymousAttribute),
    angular_package_name: cdktf.stringToTerraform(struct!.angularPackageName),
    cache_control_header_optimizations: cdktf.booleanToTerraform(struct!.cacheControlHeaderOptimizations),
    cookie_placement_domain: cdktf.stringToTerraform(struct!.cookiePlacementDomain),
    correlation_header_inclusion_regex: cdktf.stringToTerraform(struct!.correlationHeaderInclusionRegex),
    custom_configuration_properties: cdktf.stringToTerraform(struct!.customConfigurationProperties),
    exclude_xhr_regex: cdktf.stringToTerraform(struct!.excludeXhrRegex),
    fetch_requests: cdktf.booleanToTerraform(struct!.fetchRequests),
    ignore_ip_address_restriction_settings: cdktf.booleanToTerraform(struct!.ignoreIpAddressRestrictionSettings),
    injection_mode: cdktf.stringToTerraform(struct!.injectionMode),
    instrumented_web_server: cdktf.booleanToTerraform(struct!.instrumentedWebServer),
    library_file_from_cdn: cdktf.booleanToTerraform(struct!.libraryFileFromCdn),
    library_file_location: cdktf.stringToTerraform(struct!.libraryFileLocation),
    monitoring_data_path: cdktf.stringToTerraform(struct!.monitoringDataPath),
    same_site_cookie_attribute: cdktf.stringToTerraform(struct!.sameSiteCookieAttribute),
    script_tag_cache_duration_in_hours: cdktf.numberToTerraform(struct!.scriptTagCacheDurationInHours),
    secure_cookie_attribute: cdktf.booleanToTerraform(struct!.secureCookieAttribute),
    server_request_path_id: cdktf.stringToTerraform(struct!.serverRequestPathId),
    use_cors: cdktf.booleanToTerraform(struct!.useCors),
    xml_http_request: cdktf.booleanToTerraform(struct!.xmlHttpRequest),
    advanced_javascript_tag_settings: webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsToTerraform(struct!.advancedJavascriptTagSettings),
    browser_restriction_settings: webApplicationMonitoringSettingsBrowserRestrictionSettingsToTerraform(struct!.browserRestrictionSettings),
    content_capture: webApplicationMonitoringSettingsContentCaptureToTerraform(struct!.contentCapture),
    ip_address_restriction_settings: webApplicationMonitoringSettingsIpAddressRestrictionSettingsToTerraform(struct!.ipAddressRestrictionSettings),
    javascript_framework_support: webApplicationMonitoringSettingsJavascriptFrameworkSupportToTerraform(struct!.javascriptFrameworkSupport),
    javascript_injection_rules: webApplicationMonitoringSettingsJavascriptInjectionRulesToTerraform(struct!.javascriptInjectionRules),
  }
}


export function webApplicationMonitoringSettingsToHclTerraform(struct?: WebApplicationMonitoringSettingsOutputReference | WebApplicationMonitoringSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_cross_origin_anonymous_attribute: {
      value: cdktf.booleanToHclTerraform(struct!.addCrossOriginAnonymousAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    angular_package_name: {
      value: cdktf.stringToHclTerraform(struct!.angularPackageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_control_header_optimizations: {
      value: cdktf.booleanToHclTerraform(struct!.cacheControlHeaderOptimizations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie_placement_domain: {
      value: cdktf.stringToHclTerraform(struct!.cookiePlacementDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    correlation_header_inclusion_regex: {
      value: cdktf.stringToHclTerraform(struct!.correlationHeaderInclusionRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_configuration_properties: {
      value: cdktf.stringToHclTerraform(struct!.customConfigurationProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_xhr_regex: {
      value: cdktf.stringToHclTerraform(struct!.excludeXhrRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fetch_requests: {
      value: cdktf.booleanToHclTerraform(struct!.fetchRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_ip_address_restriction_settings: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreIpAddressRestrictionSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    injection_mode: {
      value: cdktf.stringToHclTerraform(struct!.injectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instrumented_web_server: {
      value: cdktf.booleanToHclTerraform(struct!.instrumentedWebServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    library_file_from_cdn: {
      value: cdktf.booleanToHclTerraform(struct!.libraryFileFromCdn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    library_file_location: {
      value: cdktf.stringToHclTerraform(struct!.libraryFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring_data_path: {
      value: cdktf.stringToHclTerraform(struct!.monitoringDataPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_site_cookie_attribute: {
      value: cdktf.stringToHclTerraform(struct!.sameSiteCookieAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_tag_cache_duration_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.scriptTagCacheDurationInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secure_cookie_attribute: {
      value: cdktf.booleanToHclTerraform(struct!.secureCookieAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_request_path_id: {
      value: cdktf.stringToHclTerraform(struct!.serverRequestPathId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cors: {
      value: cdktf.booleanToHclTerraform(struct!.useCors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xml_http_request: {
      value: cdktf.booleanToHclTerraform(struct!.xmlHttpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advanced_javascript_tag_settings: {
      value: webApplicationMonitoringSettingsAdvancedJavascriptTagSettingsToHclTerraform(struct!.advancedJavascriptTagSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsList",
    },
    browser_restriction_settings: {
      value: webApplicationMonitoringSettingsBrowserRestrictionSettingsToHclTerraform(struct!.browserRestrictionSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsBrowserRestrictionSettingsList",
    },
    content_capture: {
      value: webApplicationMonitoringSettingsContentCaptureToHclTerraform(struct!.contentCapture),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsContentCaptureList",
    },
    ip_address_restriction_settings: {
      value: webApplicationMonitoringSettingsIpAddressRestrictionSettingsToHclTerraform(struct!.ipAddressRestrictionSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsIpAddressRestrictionSettingsList",
    },
    javascript_framework_support: {
      value: webApplicationMonitoringSettingsJavascriptFrameworkSupportToHclTerraform(struct!.javascriptFrameworkSupport),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsJavascriptFrameworkSupportList",
    },
    javascript_injection_rules: {
      value: webApplicationMonitoringSettingsJavascriptInjectionRulesToHclTerraform(struct!.javascriptInjectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationMonitoringSettingsJavascriptInjectionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationMonitoringSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationMonitoringSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addCrossOriginAnonymousAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.addCrossOriginAnonymousAttribute = this._addCrossOriginAnonymousAttribute;
    }
    if (this._angularPackageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.angularPackageName = this._angularPackageName;
    }
    if (this._cacheControlHeaderOptimizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheControlHeaderOptimizations = this._cacheControlHeaderOptimizations;
    }
    if (this._cookiePlacementDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiePlacementDomain = this._cookiePlacementDomain;
    }
    if (this._correlationHeaderInclusionRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlationHeaderInclusionRegex = this._correlationHeaderInclusionRegex;
    }
    if (this._customConfigurationProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfigurationProperties = this._customConfigurationProperties;
    }
    if (this._excludeXhrRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeXhrRegex = this._excludeXhrRegex;
    }
    if (this._fetchRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchRequests = this._fetchRequests;
    }
    if (this._ignoreIpAddressRestrictionSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreIpAddressRestrictionSettings = this._ignoreIpAddressRestrictionSettings;
    }
    if (this._injectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectionMode = this._injectionMode;
    }
    if (this._instrumentedWebServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.instrumentedWebServer = this._instrumentedWebServer;
    }
    if (this._libraryFileFromCdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.libraryFileFromCdn = this._libraryFileFromCdn;
    }
    if (this._libraryFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.libraryFileLocation = this._libraryFileLocation;
    }
    if (this._monitoringDataPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringDataPath = this._monitoringDataPath;
    }
    if (this._sameSiteCookieAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSiteCookieAttribute = this._sameSiteCookieAttribute;
    }
    if (this._scriptTagCacheDurationInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptTagCacheDurationInHours = this._scriptTagCacheDurationInHours;
    }
    if (this._secureCookieAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureCookieAttribute = this._secureCookieAttribute;
    }
    if (this._serverRequestPathId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRequestPathId = this._serverRequestPathId;
    }
    if (this._useCors !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCors = this._useCors;
    }
    if (this._xmlHttpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlHttpRequest = this._xmlHttpRequest;
    }
    if (this._advancedJavascriptTagSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedJavascriptTagSettings = this._advancedJavascriptTagSettings?.internalValue;
    }
    if (this._browserRestrictionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserRestrictionSettings = this._browserRestrictionSettings?.internalValue;
    }
    if (this._contentCapture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentCapture = this._contentCapture?.internalValue;
    }
    if (this._ipAddressRestrictionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressRestrictionSettings = this._ipAddressRestrictionSettings?.internalValue;
    }
    if (this._javascriptFrameworkSupport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptFrameworkSupport = this._javascriptFrameworkSupport?.internalValue;
    }
    if (this._javascriptInjectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptInjectionRules = this._javascriptInjectionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationMonitoringSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addCrossOriginAnonymousAttribute = undefined;
      this._angularPackageName = undefined;
      this._cacheControlHeaderOptimizations = undefined;
      this._cookiePlacementDomain = undefined;
      this._correlationHeaderInclusionRegex = undefined;
      this._customConfigurationProperties = undefined;
      this._excludeXhrRegex = undefined;
      this._fetchRequests = undefined;
      this._ignoreIpAddressRestrictionSettings = undefined;
      this._injectionMode = undefined;
      this._instrumentedWebServer = undefined;
      this._libraryFileFromCdn = undefined;
      this._libraryFileLocation = undefined;
      this._monitoringDataPath = undefined;
      this._sameSiteCookieAttribute = undefined;
      this._scriptTagCacheDurationInHours = undefined;
      this._secureCookieAttribute = undefined;
      this._serverRequestPathId = undefined;
      this._useCors = undefined;
      this._xmlHttpRequest = undefined;
      this._advancedJavascriptTagSettings.internalValue = undefined;
      this._browserRestrictionSettings.internalValue = undefined;
      this._contentCapture.internalValue = undefined;
      this._ipAddressRestrictionSettings.internalValue = undefined;
      this._javascriptFrameworkSupport.internalValue = undefined;
      this._javascriptInjectionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addCrossOriginAnonymousAttribute = value.addCrossOriginAnonymousAttribute;
      this._angularPackageName = value.angularPackageName;
      this._cacheControlHeaderOptimizations = value.cacheControlHeaderOptimizations;
      this._cookiePlacementDomain = value.cookiePlacementDomain;
      this._correlationHeaderInclusionRegex = value.correlationHeaderInclusionRegex;
      this._customConfigurationProperties = value.customConfigurationProperties;
      this._excludeXhrRegex = value.excludeXhrRegex;
      this._fetchRequests = value.fetchRequests;
      this._ignoreIpAddressRestrictionSettings = value.ignoreIpAddressRestrictionSettings;
      this._injectionMode = value.injectionMode;
      this._instrumentedWebServer = value.instrumentedWebServer;
      this._libraryFileFromCdn = value.libraryFileFromCdn;
      this._libraryFileLocation = value.libraryFileLocation;
      this._monitoringDataPath = value.monitoringDataPath;
      this._sameSiteCookieAttribute = value.sameSiteCookieAttribute;
      this._scriptTagCacheDurationInHours = value.scriptTagCacheDurationInHours;
      this._secureCookieAttribute = value.secureCookieAttribute;
      this._serverRequestPathId = value.serverRequestPathId;
      this._useCors = value.useCors;
      this._xmlHttpRequest = value.xmlHttpRequest;
      this._advancedJavascriptTagSettings.internalValue = value.advancedJavascriptTagSettings;
      this._browserRestrictionSettings.internalValue = value.browserRestrictionSettings;
      this._contentCapture.internalValue = value.contentCapture;
      this._ipAddressRestrictionSettings.internalValue = value.ipAddressRestrictionSettings;
      this._javascriptFrameworkSupport.internalValue = value.javascriptFrameworkSupport;
      this._javascriptInjectionRules.internalValue = value.javascriptInjectionRules;
    }
  }

  // add_cross_origin_anonymous_attribute - computed: true, optional: true, required: false
  private _addCrossOriginAnonymousAttribute?: boolean | cdktf.IResolvable; 
  public get addCrossOriginAnonymousAttribute() {
    return this.getBooleanAttribute('add_cross_origin_anonymous_attribute');
  }
  public set addCrossOriginAnonymousAttribute(value: boolean | cdktf.IResolvable) {
    this._addCrossOriginAnonymousAttribute = value;
  }
  public resetAddCrossOriginAnonymousAttribute() {
    this._addCrossOriginAnonymousAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addCrossOriginAnonymousAttributeInput() {
    return this._addCrossOriginAnonymousAttribute;
  }

  // angular_package_name - computed: false, optional: true, required: false
  private _angularPackageName?: string; 
  public get angularPackageName() {
    return this.getStringAttribute('angular_package_name');
  }
  public set angularPackageName(value: string) {
    this._angularPackageName = value;
  }
  public resetAngularPackageName() {
    this._angularPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get angularPackageNameInput() {
    return this._angularPackageName;
  }

  // cache_control_header_optimizations - computed: false, optional: true, required: false
  private _cacheControlHeaderOptimizations?: boolean | cdktf.IResolvable; 
  public get cacheControlHeaderOptimizations() {
    return this.getBooleanAttribute('cache_control_header_optimizations');
  }
  public set cacheControlHeaderOptimizations(value: boolean | cdktf.IResolvable) {
    this._cacheControlHeaderOptimizations = value;
  }
  public resetCacheControlHeaderOptimizations() {
    this._cacheControlHeaderOptimizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlHeaderOptimizationsInput() {
    return this._cacheControlHeaderOptimizations;
  }

  // cookie_placement_domain - computed: false, optional: true, required: false
  private _cookiePlacementDomain?: string; 
  public get cookiePlacementDomain() {
    return this.getStringAttribute('cookie_placement_domain');
  }
  public set cookiePlacementDomain(value: string) {
    this._cookiePlacementDomain = value;
  }
  public resetCookiePlacementDomain() {
    this._cookiePlacementDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiePlacementDomainInput() {
    return this._cookiePlacementDomain;
  }

  // correlation_header_inclusion_regex - computed: false, optional: true, required: false
  private _correlationHeaderInclusionRegex?: string; 
  public get correlationHeaderInclusionRegex() {
    return this.getStringAttribute('correlation_header_inclusion_regex');
  }
  public set correlationHeaderInclusionRegex(value: string) {
    this._correlationHeaderInclusionRegex = value;
  }
  public resetCorrelationHeaderInclusionRegex() {
    this._correlationHeaderInclusionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationHeaderInclusionRegexInput() {
    return this._correlationHeaderInclusionRegex;
  }

  // custom_configuration_properties - computed: false, optional: true, required: false
  private _customConfigurationProperties?: string; 
  public get customConfigurationProperties() {
    return this.getStringAttribute('custom_configuration_properties');
  }
  public set customConfigurationProperties(value: string) {
    this._customConfigurationProperties = value;
  }
  public resetCustomConfigurationProperties() {
    this._customConfigurationProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigurationPropertiesInput() {
    return this._customConfigurationProperties;
  }

  // exclude_xhr_regex - computed: false, optional: true, required: false
  private _excludeXhrRegex?: string; 
  public get excludeXhrRegex() {
    return this.getStringAttribute('exclude_xhr_regex');
  }
  public set excludeXhrRegex(value: string) {
    this._excludeXhrRegex = value;
  }
  public resetExcludeXhrRegex() {
    this._excludeXhrRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeXhrRegexInput() {
    return this._excludeXhrRegex;
  }

  // fetch_requests - computed: false, optional: true, required: false
  private _fetchRequests?: boolean | cdktf.IResolvable; 
  public get fetchRequests() {
    return this.getBooleanAttribute('fetch_requests');
  }
  public set fetchRequests(value: boolean | cdktf.IResolvable) {
    this._fetchRequests = value;
  }
  public resetFetchRequests() {
    this._fetchRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchRequestsInput() {
    return this._fetchRequests;
  }

  // ignore_ip_address_restriction_settings - computed: true, optional: true, required: false
  private _ignoreIpAddressRestrictionSettings?: boolean | cdktf.IResolvable; 
  public get ignoreIpAddressRestrictionSettings() {
    return this.getBooleanAttribute('ignore_ip_address_restriction_settings');
  }
  public set ignoreIpAddressRestrictionSettings(value: boolean | cdktf.IResolvable) {
    this._ignoreIpAddressRestrictionSettings = value;
  }
  public resetIgnoreIpAddressRestrictionSettings() {
    this._ignoreIpAddressRestrictionSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIpAddressRestrictionSettingsInput() {
    return this._ignoreIpAddressRestrictionSettings;
  }

  // injection_mode - computed: false, optional: false, required: true
  private _injectionMode?: string; 
  public get injectionMode() {
    return this.getStringAttribute('injection_mode');
  }
  public set injectionMode(value: string) {
    this._injectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get injectionModeInput() {
    return this._injectionMode;
  }

  // instrumented_web_server - computed: false, optional: true, required: false
  private _instrumentedWebServer?: boolean | cdktf.IResolvable; 
  public get instrumentedWebServer() {
    return this.getBooleanAttribute('instrumented_web_server');
  }
  public set instrumentedWebServer(value: boolean | cdktf.IResolvable) {
    this._instrumentedWebServer = value;
  }
  public resetInstrumentedWebServer() {
    this._instrumentedWebServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrumentedWebServerInput() {
    return this._instrumentedWebServer;
  }

  // library_file_from_cdn - computed: false, optional: true, required: false
  private _libraryFileFromCdn?: boolean | cdktf.IResolvable; 
  public get libraryFileFromCdn() {
    return this.getBooleanAttribute('library_file_from_cdn');
  }
  public set libraryFileFromCdn(value: boolean | cdktf.IResolvable) {
    this._libraryFileFromCdn = value;
  }
  public resetLibraryFileFromCdn() {
    this._libraryFileFromCdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryFileFromCdnInput() {
    return this._libraryFileFromCdn;
  }

  // library_file_location - computed: false, optional: true, required: false
  private _libraryFileLocation?: string; 
  public get libraryFileLocation() {
    return this.getStringAttribute('library_file_location');
  }
  public set libraryFileLocation(value: string) {
    this._libraryFileLocation = value;
  }
  public resetLibraryFileLocation() {
    this._libraryFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryFileLocationInput() {
    return this._libraryFileLocation;
  }

  // monitoring_data_path - computed: false, optional: true, required: false
  private _monitoringDataPath?: string; 
  public get monitoringDataPath() {
    return this.getStringAttribute('monitoring_data_path');
  }
  public set monitoringDataPath(value: string) {
    this._monitoringDataPath = value;
  }
  public resetMonitoringDataPath() {
    this._monitoringDataPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringDataPathInput() {
    return this._monitoringDataPath;
  }

  // same_site_cookie_attribute - computed: false, optional: true, required: false
  private _sameSiteCookieAttribute?: string; 
  public get sameSiteCookieAttribute() {
    return this.getStringAttribute('same_site_cookie_attribute');
  }
  public set sameSiteCookieAttribute(value: string) {
    this._sameSiteCookieAttribute = value;
  }
  public resetSameSiteCookieAttribute() {
    this._sameSiteCookieAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteCookieAttributeInput() {
    return this._sameSiteCookieAttribute;
  }

  // script_tag_cache_duration_in_hours - computed: true, optional: true, required: false
  private _scriptTagCacheDurationInHours?: number; 
  public get scriptTagCacheDurationInHours() {
    return this.getNumberAttribute('script_tag_cache_duration_in_hours');
  }
  public set scriptTagCacheDurationInHours(value: number) {
    this._scriptTagCacheDurationInHours = value;
  }
  public resetScriptTagCacheDurationInHours() {
    this._scriptTagCacheDurationInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptTagCacheDurationInHoursInput() {
    return this._scriptTagCacheDurationInHours;
  }

  // secure_cookie_attribute - computed: false, optional: true, required: false
  private _secureCookieAttribute?: boolean | cdktf.IResolvable; 
  public get secureCookieAttribute() {
    return this.getBooleanAttribute('secure_cookie_attribute');
  }
  public set secureCookieAttribute(value: boolean | cdktf.IResolvable) {
    this._secureCookieAttribute = value;
  }
  public resetSecureCookieAttribute() {
    this._secureCookieAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureCookieAttributeInput() {
    return this._secureCookieAttribute;
  }

  // server_request_path_id - computed: false, optional: true, required: false
  private _serverRequestPathId?: string; 
  public get serverRequestPathId() {
    return this.getStringAttribute('server_request_path_id');
  }
  public set serverRequestPathId(value: string) {
    this._serverRequestPathId = value;
  }
  public resetServerRequestPathId() {
    this._serverRequestPathId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRequestPathIdInput() {
    return this._serverRequestPathId;
  }

  // use_cors - computed: false, optional: true, required: false
  private _useCors?: boolean | cdktf.IResolvable; 
  public get useCors() {
    return this.getBooleanAttribute('use_cors');
  }
  public set useCors(value: boolean | cdktf.IResolvable) {
    this._useCors = value;
  }
  public resetUseCors() {
    this._useCors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCorsInput() {
    return this._useCors;
  }

  // xml_http_request - computed: false, optional: true, required: false
  private _xmlHttpRequest?: boolean | cdktf.IResolvable; 
  public get xmlHttpRequest() {
    return this.getBooleanAttribute('xml_http_request');
  }
  public set xmlHttpRequest(value: boolean | cdktf.IResolvable) {
    this._xmlHttpRequest = value;
  }
  public resetXmlHttpRequest() {
    this._xmlHttpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlHttpRequestInput() {
    return this._xmlHttpRequest;
  }

  // advanced_javascript_tag_settings - computed: false, optional: false, required: true
  private _advancedJavascriptTagSettings = new WebApplicationMonitoringSettingsAdvancedJavascriptTagSettingsOutputReference(this, "advanced_javascript_tag_settings");
  public get advancedJavascriptTagSettings() {
    return this._advancedJavascriptTagSettings;
  }
  public putAdvancedJavascriptTagSettings(value: WebApplicationMonitoringSettingsAdvancedJavascriptTagSettings) {
    this._advancedJavascriptTagSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedJavascriptTagSettingsInput() {
    return this._advancedJavascriptTagSettings.internalValue;
  }

  // browser_restriction_settings - computed: false, optional: true, required: false
  private _browserRestrictionSettings = new WebApplicationMonitoringSettingsBrowserRestrictionSettingsOutputReference(this, "browser_restriction_settings");
  public get browserRestrictionSettings() {
    return this._browserRestrictionSettings;
  }
  public putBrowserRestrictionSettings(value: WebApplicationMonitoringSettingsBrowserRestrictionSettings) {
    this._browserRestrictionSettings.internalValue = value;
  }
  public resetBrowserRestrictionSettings() {
    this._browserRestrictionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserRestrictionSettingsInput() {
    return this._browserRestrictionSettings.internalValue;
  }

  // content_capture - computed: false, optional: false, required: true
  private _contentCapture = new WebApplicationMonitoringSettingsContentCaptureOutputReference(this, "content_capture");
  public get contentCapture() {
    return this._contentCapture;
  }
  public putContentCapture(value: WebApplicationMonitoringSettingsContentCapture) {
    this._contentCapture.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentCaptureInput() {
    return this._contentCapture.internalValue;
  }

  // ip_address_restriction_settings - computed: false, optional: true, required: false
  private _ipAddressRestrictionSettings = new WebApplicationMonitoringSettingsIpAddressRestrictionSettingsOutputReference(this, "ip_address_restriction_settings");
  public get ipAddressRestrictionSettings() {
    return this._ipAddressRestrictionSettings;
  }
  public putIpAddressRestrictionSettings(value: WebApplicationMonitoringSettingsIpAddressRestrictionSettings) {
    this._ipAddressRestrictionSettings.internalValue = value;
  }
  public resetIpAddressRestrictionSettings() {
    this._ipAddressRestrictionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressRestrictionSettingsInput() {
    return this._ipAddressRestrictionSettings.internalValue;
  }

  // javascript_framework_support - computed: false, optional: true, required: false
  private _javascriptFrameworkSupport = new WebApplicationMonitoringSettingsJavascriptFrameworkSupportOutputReference(this, "javascript_framework_support");
  public get javascriptFrameworkSupport() {
    return this._javascriptFrameworkSupport;
  }
  public putJavascriptFrameworkSupport(value: WebApplicationMonitoringSettingsJavascriptFrameworkSupport) {
    this._javascriptFrameworkSupport.internalValue = value;
  }
  public resetJavascriptFrameworkSupport() {
    this._javascriptFrameworkSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptFrameworkSupportInput() {
    return this._javascriptFrameworkSupport.internalValue;
  }

  // javascript_injection_rules - computed: false, optional: true, required: false
  private _javascriptInjectionRules = new WebApplicationMonitoringSettingsJavascriptInjectionRulesOutputReference(this, "javascript_injection_rules");
  public get javascriptInjectionRules() {
    return this._javascriptInjectionRules;
  }
  public putJavascriptInjectionRules(value: WebApplicationMonitoringSettingsJavascriptInjectionRules) {
    this._javascriptInjectionRules.internalValue = value;
  }
  public resetJavascriptInjectionRules() {
    this._javascriptInjectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptInjectionRulesInput() {
    return this._javascriptInjectionRules.internalValue;
  }
}
export interface WebApplicationSessionReplayConfig {
  /**
  * (Field has overlap with `dynatrace_web_app_enablement`) Session replay sampling rating in percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#cost_control_percentage WebApplication#cost_control_percentage}
  */
  readonly costControlPercentage: number;
  /**
  * (Field has overlap with `dynatrace_session_replay_resource_capture`) A list of URLs to be excluded from CSS resource capturing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#css_resource_capturing_exclusion_rules WebApplication#css_resource_capturing_exclusion_rules}
  */
  readonly cssResourceCapturingExclusionRules?: string[];
  /**
  * (Field has overlap with `dynatrace_session_replay_resource_capture`) Capture (`true`) or don't capture (`false`) CSS resources from the session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#enable_css_resource_capturing WebApplication#enable_css_resource_capturing}
  */
  readonly enableCssResourceCapturing?: boolean | cdktf.IResolvable;
  /**
  * (Field has overlap with `dynatrace_web_app_enablement`) SessionReplay Enabled/Disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#enabled WebApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function webApplicationSessionReplayConfigToTerraform(struct?: WebApplicationSessionReplayConfigOutputReference | WebApplicationSessionReplayConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_control_percentage: cdktf.numberToTerraform(struct!.costControlPercentage),
    css_resource_capturing_exclusion_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cssResourceCapturingExclusionRules),
    enable_css_resource_capturing: cdktf.booleanToTerraform(struct!.enableCssResourceCapturing),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function webApplicationSessionReplayConfigToHclTerraform(struct?: WebApplicationSessionReplayConfigOutputReference | WebApplicationSessionReplayConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_control_percentage: {
      value: cdktf.numberToHclTerraform(struct!.costControlPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    css_resource_capturing_exclusion_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cssResourceCapturingExclusionRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_css_resource_capturing: {
      value: cdktf.booleanToHclTerraform(struct!.enableCssResourceCapturing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationSessionReplayConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationSessionReplayConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costControlPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.costControlPercentage = this._costControlPercentage;
    }
    if (this._cssResourceCapturingExclusionRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.cssResourceCapturingExclusionRules = this._cssResourceCapturingExclusionRules;
    }
    if (this._enableCssResourceCapturing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCssResourceCapturing = this._enableCssResourceCapturing;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationSessionReplayConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costControlPercentage = undefined;
      this._cssResourceCapturingExclusionRules = undefined;
      this._enableCssResourceCapturing = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costControlPercentage = value.costControlPercentage;
      this._cssResourceCapturingExclusionRules = value.cssResourceCapturingExclusionRules;
      this._enableCssResourceCapturing = value.enableCssResourceCapturing;
      this._enabled = value.enabled;
    }
  }

  // cost_control_percentage - computed: false, optional: false, required: true
  private _costControlPercentage?: number; 
  public get costControlPercentage() {
    return this.getNumberAttribute('cost_control_percentage');
  }
  public set costControlPercentage(value: number) {
    this._costControlPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costControlPercentageInput() {
    return this._costControlPercentage;
  }

  // css_resource_capturing_exclusion_rules - computed: false, optional: true, required: false
  private _cssResourceCapturingExclusionRules?: string[]; 
  public get cssResourceCapturingExclusionRules() {
    return this.getListAttribute('css_resource_capturing_exclusion_rules');
  }
  public set cssResourceCapturingExclusionRules(value: string[]) {
    this._cssResourceCapturingExclusionRules = value;
  }
  public resetCssResourceCapturingExclusionRules() {
    this._cssResourceCapturingExclusionRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssResourceCapturingExclusionRulesInput() {
    return this._cssResourceCapturingExclusionRules;
  }

  // enable_css_resource_capturing - computed: false, optional: true, required: false
  private _enableCssResourceCapturing?: boolean | cdktf.IResolvable; 
  public get enableCssResourceCapturing() {
    return this.getBooleanAttribute('enable_css_resource_capturing');
  }
  public set enableCssResourceCapturing(value: boolean | cdktf.IResolvable) {
    this._enableCssResourceCapturing = value;
  }
  public resetEnableCssResourceCapturing() {
    this._enableCssResourceCapturing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCssResourceCapturingInput() {
    return this._enableCssResourceCapturing;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface WebApplicationUserActionAndSessionPropertiesProperty {
  /**
  * The aggregation type of the property. 
  * 
  *   It defines how multiple values of the property are aggregated. Possible values are `AVERAGE`, `FIRST`, `LAST`, `MAXIMUM`, `MINIMUM` and `SUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#aggregation WebApplication#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The cleanup rule of the property. 
  * 
  * Defines how to extract the data you need from a string value. Specify the [regular expression](https://dt-url.net/k9e0iaq) for the data you need there
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#cleanup_rule WebApplication#cleanup_rule}
  */
  readonly cleanupRule?: string;
  /**
  * The display name of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#display_name WebApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * Unique id among all userTags and properties of this application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#id WebApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * If `true`, the value of this property will always be stored in lower case. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#ignore_case WebApplication#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Key of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#key WebApplication#key}
  */
  readonly key: string;
  /**
  * If the `type` is `LONG_STRING`, the max length for this property. Must be a multiple of `100`. Defaults to `200`. Maximum is `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#long_string_length WebApplication#long_string_length}
  */
  readonly longStringLength?: number;
  /**
  * If the origin is `META_DATA`, metaData id of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#metadata_id WebApplication#metadata_id}
  */
  readonly metadataId?: number;
  /**
  * The origin of the property. Possible values are `JAVASCRIPT_API`, `META_DATA` and `SERVER_SIDE_REQUEST_ATTRIBUTE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#origin WebApplication#origin}
  */
  readonly origin: string;
  /**
  * The ID of the request attribute. 
  * 
  * Only applicable when the **origin** is set to `SERVER_SIDE_REQUEST_ATTRIBUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#server_side_request_attribute WebApplication#server_side_request_attribute}
  */
  readonly serverSideRequestAttribute?: string;
  /**
  * If `true`, the property is stored as a session property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#store_as_session_property WebApplication#store_as_session_property}
  */
  readonly storeAsSessionProperty?: boolean | cdktf.IResolvable;
  /**
  * If `true`, the property is stored as a user action property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#store_as_user_action_property WebApplication#store_as_user_action_property}
  */
  readonly storeAsUserActionProperty?: boolean | cdktf.IResolvable;
  /**
  * The data type of the property. Possible values are `DATE`, `DOUBLE`, `LONG`, `LONG_STRING` and `STRING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#type WebApplication#type}
  */
  readonly type: string;
}

export function webApplicationUserActionAndSessionPropertiesPropertyToTerraform(struct?: WebApplicationUserActionAndSessionPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    cleanup_rule: cdktf.stringToTerraform(struct!.cleanupRule),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.numberToTerraform(struct!.id),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    key: cdktf.stringToTerraform(struct!.key),
    long_string_length: cdktf.numberToTerraform(struct!.longStringLength),
    metadata_id: cdktf.numberToTerraform(struct!.metadataId),
    origin: cdktf.stringToTerraform(struct!.origin),
    server_side_request_attribute: cdktf.stringToTerraform(struct!.serverSideRequestAttribute),
    store_as_session_property: cdktf.booleanToTerraform(struct!.storeAsSessionProperty),
    store_as_user_action_property: cdktf.booleanToTerraform(struct!.storeAsUserActionProperty),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function webApplicationUserActionAndSessionPropertiesPropertyToHclTerraform(struct?: WebApplicationUserActionAndSessionPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cleanup_rule: {
      value: cdktf.stringToHclTerraform(struct!.cleanupRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_string_length: {
      value: cdktf.numberToHclTerraform(struct!.longStringLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata_id: {
      value: cdktf.numberToHclTerraform(struct!.metadataId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_side_request_attribute: {
      value: cdktf.stringToHclTerraform(struct!.serverSideRequestAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_as_session_property: {
      value: cdktf.booleanToHclTerraform(struct!.storeAsSessionProperty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    store_as_user_action_property: {
      value: cdktf.booleanToHclTerraform(struct!.storeAsUserActionProperty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class WebApplicationUserActionAndSessionPropertiesPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationUserActionAndSessionPropertiesProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._cleanupRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupRule = this._cleanupRule;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._longStringLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.longStringLength = this._longStringLength;
    }
    if (this._metadataId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataId = this._metadataId;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._serverSideRequestAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideRequestAttribute = this._serverSideRequestAttribute;
    }
    if (this._storeAsSessionProperty !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeAsSessionProperty = this._storeAsSessionProperty;
    }
    if (this._storeAsUserActionProperty !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeAsUserActionProperty = this._storeAsUserActionProperty;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionAndSessionPropertiesProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._cleanupRule = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._ignoreCase = undefined;
      this._key = undefined;
      this._longStringLength = undefined;
      this._metadataId = undefined;
      this._origin = undefined;
      this._serverSideRequestAttribute = undefined;
      this._storeAsSessionProperty = undefined;
      this._storeAsUserActionProperty = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._cleanupRule = value.cleanupRule;
      this._displayName = value.displayName;
      this._id = value.id;
      this._ignoreCase = value.ignoreCase;
      this._key = value.key;
      this._longStringLength = value.longStringLength;
      this._metadataId = value.metadataId;
      this._origin = value.origin;
      this._serverSideRequestAttribute = value.serverSideRequestAttribute;
      this._storeAsSessionProperty = value.storeAsSessionProperty;
      this._storeAsUserActionProperty = value.storeAsUserActionProperty;
      this._type = value.type;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // cleanup_rule - computed: false, optional: true, required: false
  private _cleanupRule?: string; 
  public get cleanupRule() {
    return this.getStringAttribute('cleanup_rule');
  }
  public set cleanupRule(value: string) {
    this._cleanupRule = value;
  }
  public resetCleanupRule() {
    this._cleanupRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupRuleInput() {
    return this._cleanupRule;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // long_string_length - computed: false, optional: true, required: false
  private _longStringLength?: number; 
  public get longStringLength() {
    return this.getNumberAttribute('long_string_length');
  }
  public set longStringLength(value: number) {
    this._longStringLength = value;
  }
  public resetLongStringLength() {
    this._longStringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longStringLengthInput() {
    return this._longStringLength;
  }

  // metadata_id - computed: false, optional: true, required: false
  private _metadataId?: number; 
  public get metadataId() {
    return this.getNumberAttribute('metadata_id');
  }
  public set metadataId(value: number) {
    this._metadataId = value;
  }
  public resetMetadataId() {
    this._metadataId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataIdInput() {
    return this._metadataId;
  }

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // server_side_request_attribute - computed: false, optional: true, required: false
  private _serverSideRequestAttribute?: string; 
  public get serverSideRequestAttribute() {
    return this.getStringAttribute('server_side_request_attribute');
  }
  public set serverSideRequestAttribute(value: string) {
    this._serverSideRequestAttribute = value;
  }
  public resetServerSideRequestAttribute() {
    this._serverSideRequestAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideRequestAttributeInput() {
    return this._serverSideRequestAttribute;
  }

  // store_as_session_property - computed: false, optional: true, required: false
  private _storeAsSessionProperty?: boolean | cdktf.IResolvable; 
  public get storeAsSessionProperty() {
    return this.getBooleanAttribute('store_as_session_property');
  }
  public set storeAsSessionProperty(value: boolean | cdktf.IResolvable) {
    this._storeAsSessionProperty = value;
  }
  public resetStoreAsSessionProperty() {
    this._storeAsSessionProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeAsSessionPropertyInput() {
    return this._storeAsSessionProperty;
  }

  // store_as_user_action_property - computed: false, optional: true, required: false
  private _storeAsUserActionProperty?: boolean | cdktf.IResolvable; 
  public get storeAsUserActionProperty() {
    return this.getBooleanAttribute('store_as_user_action_property');
  }
  public set storeAsUserActionProperty(value: boolean | cdktf.IResolvable) {
    this._storeAsUserActionProperty = value;
  }
  public resetStoreAsUserActionProperty() {
    this._storeAsUserActionProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeAsUserActionPropertyInput() {
    return this._storeAsUserActionProperty;
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

export class WebApplicationUserActionAndSessionPropertiesPropertyList extends cdktf.ComplexList {
  public internalValue? : WebApplicationUserActionAndSessionPropertiesProperty[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationUserActionAndSessionPropertiesPropertyOutputReference {
    return new WebApplicationUserActionAndSessionPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationUserActionAndSessionProperties {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#property WebApplication#property}
  */
  readonly property?: WebApplicationUserActionAndSessionPropertiesProperty[] | cdktf.IResolvable;
}

export function webApplicationUserActionAndSessionPropertiesToTerraform(struct?: WebApplicationUserActionAndSessionPropertiesOutputReference | WebApplicationUserActionAndSessionProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.listMapper(webApplicationUserActionAndSessionPropertiesPropertyToTerraform, true)(struct!.property),
  }
}


export function webApplicationUserActionAndSessionPropertiesToHclTerraform(struct?: WebApplicationUserActionAndSessionPropertiesOutputReference | WebApplicationUserActionAndSessionProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.listMapperHcl(webApplicationUserActionAndSessionPropertiesPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionAndSessionPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionAndSessionPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationUserActionAndSessionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionAndSessionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._property.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._property.internalValue = value.property;
    }
  }

  // property - computed: false, optional: true, required: false
  private _property = new WebApplicationUserActionAndSessionPropertiesPropertyList(this, "property", false);
  public get property() {
    return this._property;
  }
  public putProperty(value: WebApplicationUserActionAndSessionPropertiesProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}
export interface WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsCondition {
  /**
  * Must be a defined placeholder wrapped in curly braces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#operand1 WebApplication#operand1}
  */
  readonly operand1: string;
  /**
  * Must be null if operator is `IS_EMPTY`, a regex if operator is `MATCHES_REGULAR_ERPRESSION`. In all other cases the value can be a freetext or a placeholder wrapped in curly braces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#operand2 WebApplication#operand2}
  */
  readonly operand2?: string;
  /**
  * The operator of the condition. Possible values are `CONTAINS`, `ENDS_WITH`, `EQUALS`, `IS_EMPTY`, `IS_NOT_EMPTY`, `MATCHES_REGULAR_EXPRESSION`, `NOT_CONTAINS`, `NOT_ENDS_WITH`, `NOT_EQUALS`, `NOT_MATCHES_REGULAR_EXPRESSION`, `NOT_STARTS_WITH` and `STARTS_WITH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#operator WebApplication#operator}
  */
  readonly operator: string;
}

export function webApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsConditionToTerraform(struct?: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operand1: cdktf.stringToTerraform(struct!.operand1),
    operand2: cdktf.stringToTerraform(struct!.operand2),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function webApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsConditionToHclTerraform(struct?: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operand1: {
      value: cdktf.stringToHclTerraform(struct!.operand1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operand2: {
      value: cdktf.stringToHclTerraform(struct!.operand2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operand1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.operand1 = this._operand1;
    }
    if (this._operand2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.operand2 = this._operand2;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operand1 = undefined;
      this._operand2 = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operand1 = value.operand1;
      this._operand2 = value.operand2;
      this._operator = value.operator;
    }
  }

  // operand1 - computed: false, optional: false, required: true
  private _operand1?: string; 
  public get operand1() {
    return this.getStringAttribute('operand1');
  }
  public set operand1(value: string) {
    this._operand1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operand1Input() {
    return this._operand1;
  }

  // operand2 - computed: false, optional: true, required: false
  private _operand2?: string; 
  public get operand2() {
    return this.getStringAttribute('operand2');
  }
  public set operand2(value: string) {
    this._operand2 = value;
  }
  public resetOperand2() {
    this._operand2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operand2Input() {
    return this._operand2;
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
}

export class WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsConditionOutputReference {
    return new WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#condition WebApplication#condition}
  */
  readonly condition: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsCondition[] | cdktf.IResolvable;
}

export function webApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsToTerraform(struct?: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsOutputReference | WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(webApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function webApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsToHclTerraform(struct?: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsOutputReference | WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(webApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface WebApplicationUserActionNamingSettingsCustomActionNamingRulesRule {
  /**
  * Naming pattern. Use Curly brackets `{}` to select placeholders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#template WebApplication#template}
  */
  readonly template: string;
  /**
  * If set to `true` the conditions will be connected by logical OR instead of logical AND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#use_or_conditions WebApplication#use_or_conditions}
  */
  readonly useOrConditions?: boolean | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#conditions WebApplication#conditions}
  */
  readonly conditions?: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditions;
}

export function webApplicationUserActionNamingSettingsCustomActionNamingRulesRuleToTerraform(struct?: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
    use_or_conditions: cdktf.booleanToTerraform(struct!.useOrConditions),
    conditions: webApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsToTerraform(struct!.conditions),
  }
}


export function webApplicationUserActionNamingSettingsCustomActionNamingRulesRuleToHclTerraform(struct?: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_or_conditions: {
      value: cdktf.booleanToHclTerraform(struct!.useOrConditions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conditions: {
      value: webApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationUserActionNamingSettingsCustomActionNamingRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._useOrConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOrConditions = this._useOrConditions;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
      this._useOrConditions = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
      this._useOrConditions = value.useOrConditions;
      this._conditions.internalValue = value.conditions;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // use_or_conditions - computed: false, optional: true, required: false
  private _useOrConditions?: boolean | cdktf.IResolvable; 
  public get useOrConditions() {
    return this.getBooleanAttribute('use_or_conditions');
  }
  public set useOrConditions(value: boolean | cdktf.IResolvable) {
    this._useOrConditions = value;
  }
  public resetUseOrConditions() {
    this._useOrConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOrConditionsInput() {
    return this._useOrConditions;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleList extends cdktf.ComplexList {
  public internalValue? : WebApplicationUserActionNamingSettingsCustomActionNamingRulesRule[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleOutputReference {
    return new WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationUserActionNamingSettingsCustomActionNamingRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#rule WebApplication#rule}
  */
  readonly rule: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRule[] | cdktf.IResolvable;
}

export function webApplicationUserActionNamingSettingsCustomActionNamingRulesToTerraform(struct?: WebApplicationUserActionNamingSettingsCustomActionNamingRulesOutputReference | WebApplicationUserActionNamingSettingsCustomActionNamingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(webApplicationUserActionNamingSettingsCustomActionNamingRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function webApplicationUserActionNamingSettingsCustomActionNamingRulesToHclTerraform(struct?: WebApplicationUserActionNamingSettingsCustomActionNamingRulesOutputReference | WebApplicationUserActionNamingSettingsCustomActionNamingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(webApplicationUserActionNamingSettingsCustomActionNamingRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsCustomActionNamingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationUserActionNamingSettingsCustomActionNamingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsCustomActionNamingRules | undefined) {
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
  private _rule = new WebApplicationUserActionNamingSettingsCustomActionNamingRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: WebApplicationUserActionNamingSettingsCustomActionNamingRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsCondition {
  /**
  * Must be a defined placeholder wrapped in curly braces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#operand1 WebApplication#operand1}
  */
  readonly operand1: string;
  /**
  * Must be null if operator is `IS_EMPTY`, a regex if operator is `MATCHES_REGULAR_ERPRESSION`. In all other cases the value can be a freetext or a placeholder wrapped in curly braces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#operand2 WebApplication#operand2}
  */
  readonly operand2?: string;
  /**
  * The operator of the condition. Possible values are `CONTAINS`, `ENDS_WITH`, `EQUALS`, `IS_EMPTY`, `IS_NOT_EMPTY`, `MATCHES_REGULAR_EXPRESSION`, `NOT_CONTAINS`, `NOT_ENDS_WITH`, `NOT_EQUALS`, `NOT_MATCHES_REGULAR_EXPRESSION`, `NOT_STARTS_WITH` and `STARTS_WITH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#operator WebApplication#operator}
  */
  readonly operator: string;
}

export function webApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsConditionToTerraform(struct?: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operand1: cdktf.stringToTerraform(struct!.operand1),
    operand2: cdktf.stringToTerraform(struct!.operand2),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function webApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsConditionToHclTerraform(struct?: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operand1: {
      value: cdktf.stringToHclTerraform(struct!.operand1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operand2: {
      value: cdktf.stringToHclTerraform(struct!.operand2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operand1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.operand1 = this._operand1;
    }
    if (this._operand2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.operand2 = this._operand2;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operand1 = undefined;
      this._operand2 = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operand1 = value.operand1;
      this._operand2 = value.operand2;
      this._operator = value.operator;
    }
  }

  // operand1 - computed: false, optional: false, required: true
  private _operand1?: string; 
  public get operand1() {
    return this.getStringAttribute('operand1');
  }
  public set operand1(value: string) {
    this._operand1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operand1Input() {
    return this._operand1;
  }

  // operand2 - computed: false, optional: true, required: false
  private _operand2?: string; 
  public get operand2() {
    return this.getStringAttribute('operand2');
  }
  public set operand2(value: string) {
    this._operand2 = value;
  }
  public resetOperand2() {
    this._operand2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operand2Input() {
    return this._operand2;
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
}

export class WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsConditionOutputReference {
    return new WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#condition WebApplication#condition}
  */
  readonly condition: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsCondition[] | cdktf.IResolvable;
}

export function webApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsToTerraform(struct?: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsOutputReference | WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(webApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function webApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsToHclTerraform(struct?: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsOutputReference | WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(webApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface WebApplicationUserActionNamingSettingsLoadActionNamingRulesRule {
  /**
  * Naming pattern. Use Curly brackets `{}` to select placeholders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#template WebApplication#template}
  */
  readonly template: string;
  /**
  * If set to `true` the conditions will be connected by logical OR instead of logical AND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#use_or_conditions WebApplication#use_or_conditions}
  */
  readonly useOrConditions?: boolean | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#conditions WebApplication#conditions}
  */
  readonly conditions?: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditions;
}

export function webApplicationUserActionNamingSettingsLoadActionNamingRulesRuleToTerraform(struct?: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
    use_or_conditions: cdktf.booleanToTerraform(struct!.useOrConditions),
    conditions: webApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsToTerraform(struct!.conditions),
  }
}


export function webApplicationUserActionNamingSettingsLoadActionNamingRulesRuleToHclTerraform(struct?: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_or_conditions: {
      value: cdktf.booleanToHclTerraform(struct!.useOrConditions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conditions: {
      value: webApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationUserActionNamingSettingsLoadActionNamingRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._useOrConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOrConditions = this._useOrConditions;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
      this._useOrConditions = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
      this._useOrConditions = value.useOrConditions;
      this._conditions.internalValue = value.conditions;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // use_or_conditions - computed: false, optional: true, required: false
  private _useOrConditions?: boolean | cdktf.IResolvable; 
  public get useOrConditions() {
    return this.getBooleanAttribute('use_or_conditions');
  }
  public set useOrConditions(value: boolean | cdktf.IResolvable) {
    this._useOrConditions = value;
  }
  public resetUseOrConditions() {
    this._useOrConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOrConditionsInput() {
    return this._useOrConditions;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleList extends cdktf.ComplexList {
  public internalValue? : WebApplicationUserActionNamingSettingsLoadActionNamingRulesRule[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleOutputReference {
    return new WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationUserActionNamingSettingsLoadActionNamingRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#rule WebApplication#rule}
  */
  readonly rule: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRule[] | cdktf.IResolvable;
}

export function webApplicationUserActionNamingSettingsLoadActionNamingRulesToTerraform(struct?: WebApplicationUserActionNamingSettingsLoadActionNamingRulesOutputReference | WebApplicationUserActionNamingSettingsLoadActionNamingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(webApplicationUserActionNamingSettingsLoadActionNamingRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function webApplicationUserActionNamingSettingsLoadActionNamingRulesToHclTerraform(struct?: WebApplicationUserActionNamingSettingsLoadActionNamingRulesOutputReference | WebApplicationUserActionNamingSettingsLoadActionNamingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(webApplicationUserActionNamingSettingsLoadActionNamingRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsLoadActionNamingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationUserActionNamingSettingsLoadActionNamingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsLoadActionNamingRules | undefined) {
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
  private _rule = new WebApplicationUserActionNamingSettingsLoadActionNamingRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: WebApplicationUserActionNamingSettingsLoadActionNamingRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStep {
  /**
  * If set to `true`: Returns the input if `patternBefore` or `patternAfter` cannot be found and the `type` is `SUBSTRING`. Returns the input if `regularExpression` doesn't match and `type` is `EXTRACT_BY_REGULAR_EXPRESSION`. 
  * 
  *  Otherwise `null` is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#fallback_to_input WebApplication#fallback_to_input}
  */
  readonly fallbackToInput?: boolean | cdktf.IResolvable;
  /**
  * The pattern after the required value. It will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#pattern_after WebApplication#pattern_after}
  */
  readonly patternAfter?: string;
  /**
  * The required occurrence of **patternAfter**. Possible values are `FIRST` and `LAST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#pattern_after_search_type WebApplication#pattern_after_search_type}
  */
  readonly patternAfterSearchType?: string;
  /**
  * The pattern before the required value. It will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#pattern_before WebApplication#pattern_before}
  */
  readonly patternBefore?: string;
  /**
  * The required occurrence of **patternBefore**. Possible values are `FIRST` and `LAST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#pattern_before_search_type WebApplication#pattern_before_search_type}
  */
  readonly patternBeforeSearchType?: string;
  /**
  * The pattern to be replaced. 
  * 
  *  Only applicable if the `type` is `REPLACE_WITH_PATTERN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#pattern_to_replace WebApplication#pattern_to_replace}
  */
  readonly patternToReplace?: string;
  /**
  * A regular expression for the string to be extracted or replaced. Only applicable if the `type` is `EXTRACT_BY_REGULAR_EXPRESSION` or `REPLACE_WITH_REGULAR_EXPRESSION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#regular_expression WebApplication#regular_expression}
  */
  readonly regularExpression?: string;
  /**
  * Replacement for the original value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#replacement WebApplication#replacement}
  */
  readonly replacement?: string;
  /**
  * An action to be taken by the processing: 
  * 
  * * `SUBSTRING`: Extracts the string between `patternBefore` and `patternAfter`. 
  * * `REPLACEMENT`: Replaces the string between `patternBefore` and `patternAfter` with the specified `replacement`.
  * * `REPLACE_WITH_PATTERN`: Replaces the **patternToReplace** with the specified **replacement**. 
  * * `EXTRACT_BY_REGULAR_EXPRESSION`: Extracts the part of the string that matches the **regularExpression**. 
  * * `REPLACE_WITH_REGULAR_EXPRESSION`: Replaces all occurrences that match **regularExpression** with the specified **replacement**. 
  * * `REPLACE_IDS`: Replaces all IDs and UUIDs with the specified **replacement**. Possible values are `EXTRACT_BY_REGULAR_EXPRESSION`, `REPLACEMENT`, `REPLACE_IDS`, `REPLACE_WITH_PATTERN`, `REPLACE_WITH_REGULAR_EXPRESSION` and `SUBSTRING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#type WebApplication#type}
  */
  readonly type: string;
}

export function webApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStepToTerraform(struct?: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_to_input: cdktf.booleanToTerraform(struct!.fallbackToInput),
    pattern_after: cdktf.stringToTerraform(struct!.patternAfter),
    pattern_after_search_type: cdktf.stringToTerraform(struct!.patternAfterSearchType),
    pattern_before: cdktf.stringToTerraform(struct!.patternBefore),
    pattern_before_search_type: cdktf.stringToTerraform(struct!.patternBeforeSearchType),
    pattern_to_replace: cdktf.stringToTerraform(struct!.patternToReplace),
    regular_expression: cdktf.stringToTerraform(struct!.regularExpression),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function webApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStepToHclTerraform(struct?: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_to_input: {
      value: cdktf.booleanToHclTerraform(struct!.fallbackToInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern_after: {
      value: cdktf.stringToHclTerraform(struct!.patternAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_after_search_type: {
      value: cdktf.stringToHclTerraform(struct!.patternAfterSearchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_before: {
      value: cdktf.stringToHclTerraform(struct!.patternBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_before_search_type: {
      value: cdktf.stringToHclTerraform(struct!.patternBeforeSearchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_to_replace: {
      value: cdktf.stringToHclTerraform(struct!.patternToReplace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regular_expression: {
      value: cdktf.stringToHclTerraform(struct!.regularExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackToInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackToInput = this._fallbackToInput;
    }
    if (this._patternAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternAfter = this._patternAfter;
    }
    if (this._patternAfterSearchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternAfterSearchType = this._patternAfterSearchType;
    }
    if (this._patternBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternBefore = this._patternBefore;
    }
    if (this._patternBeforeSearchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternBeforeSearchType = this._patternBeforeSearchType;
    }
    if (this._patternToReplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternToReplace = this._patternToReplace;
    }
    if (this._regularExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularExpression = this._regularExpression;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackToInput = undefined;
      this._patternAfter = undefined;
      this._patternAfterSearchType = undefined;
      this._patternBefore = undefined;
      this._patternBeforeSearchType = undefined;
      this._patternToReplace = undefined;
      this._regularExpression = undefined;
      this._replacement = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackToInput = value.fallbackToInput;
      this._patternAfter = value.patternAfter;
      this._patternAfterSearchType = value.patternAfterSearchType;
      this._patternBefore = value.patternBefore;
      this._patternBeforeSearchType = value.patternBeforeSearchType;
      this._patternToReplace = value.patternToReplace;
      this._regularExpression = value.regularExpression;
      this._replacement = value.replacement;
      this._type = value.type;
    }
  }

  // fallback_to_input - computed: false, optional: true, required: false
  private _fallbackToInput?: boolean | cdktf.IResolvable; 
  public get fallbackToInput() {
    return this.getBooleanAttribute('fallback_to_input');
  }
  public set fallbackToInput(value: boolean | cdktf.IResolvable) {
    this._fallbackToInput = value;
  }
  public resetFallbackToInput() {
    this._fallbackToInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToInputInput() {
    return this._fallbackToInput;
  }

  // pattern_after - computed: false, optional: true, required: false
  private _patternAfter?: string; 
  public get patternAfter() {
    return this.getStringAttribute('pattern_after');
  }
  public set patternAfter(value: string) {
    this._patternAfter = value;
  }
  public resetPatternAfter() {
    this._patternAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternAfterInput() {
    return this._patternAfter;
  }

  // pattern_after_search_type - computed: false, optional: true, required: false
  private _patternAfterSearchType?: string; 
  public get patternAfterSearchType() {
    return this.getStringAttribute('pattern_after_search_type');
  }
  public set patternAfterSearchType(value: string) {
    this._patternAfterSearchType = value;
  }
  public resetPatternAfterSearchType() {
    this._patternAfterSearchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternAfterSearchTypeInput() {
    return this._patternAfterSearchType;
  }

  // pattern_before - computed: false, optional: true, required: false
  private _patternBefore?: string; 
  public get patternBefore() {
    return this.getStringAttribute('pattern_before');
  }
  public set patternBefore(value: string) {
    this._patternBefore = value;
  }
  public resetPatternBefore() {
    this._patternBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternBeforeInput() {
    return this._patternBefore;
  }

  // pattern_before_search_type - computed: false, optional: true, required: false
  private _patternBeforeSearchType?: string; 
  public get patternBeforeSearchType() {
    return this.getStringAttribute('pattern_before_search_type');
  }
  public set patternBeforeSearchType(value: string) {
    this._patternBeforeSearchType = value;
  }
  public resetPatternBeforeSearchType() {
    this._patternBeforeSearchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternBeforeSearchTypeInput() {
    return this._patternBeforeSearchType;
  }

  // pattern_to_replace - computed: false, optional: true, required: false
  private _patternToReplace?: string; 
  public get patternToReplace() {
    return this.getStringAttribute('pattern_to_replace');
  }
  public set patternToReplace(value: string) {
    this._patternToReplace = value;
  }
  public resetPatternToReplace() {
    this._patternToReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternToReplaceInput() {
    return this._patternToReplace;
  }

  // regular_expression - computed: false, optional: true, required: false
  private _regularExpression?: string; 
  public get regularExpression() {
    return this.getStringAttribute('regular_expression');
  }
  public set regularExpression(value: string) {
    this._regularExpression = value;
  }
  public resetRegularExpression() {
    this._regularExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularExpressionInput() {
    return this._regularExpression;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
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

export class WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStepList extends cdktf.ComplexList {
  public internalValue? : WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStep[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStepOutputReference {
    return new WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingSteps {
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#step WebApplication#step}
  */
  readonly step: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStep[] | cdktf.IResolvable;
}

export function webApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsToTerraform(struct?: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsOutputReference | WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step: cdktf.listMapper(webApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStepToTerraform, true)(struct!.step),
  }
}


export function webApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsToHclTerraform(struct?: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsOutputReference | WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    step: {
      value: cdktf.listMapperHcl(webApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStepToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._step?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._step.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._step.internalValue = value.step;
    }
  }

  // step - computed: false, optional: false, required: true
  private _step = new WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }
}
export interface WebApplicationUserActionNamingSettingsPlaceholdersPlaceholder {
  /**
  * The input for the place holder. Possible values are `ELEMENT_IDENTIFIER`, `INPUT_TYPE`, `METADATA`, `PAGE_TITLE`, `PAGE_URL`, `SOURCE_URL`, `TOP_XHR_URL` and `XHR_URL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#input WebApplication#input}
  */
  readonly input: string;
  /**
  * The ID of the metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#metadata_id WebApplication#metadata_id}
  */
  readonly metadataId?: number;
  /**
  * Placeholder name. Valid length needs to be between 1 and 50 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#name WebApplication#name}
  */
  readonly name: string;
  /**
  * The part to process. Possible values are `ALL`, `ANCHOR` and `PATH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#processing_part WebApplication#processing_part}
  */
  readonly processingPart: string;
  /**
  * Use the element identifier that was selected by Dynatrace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#use_guessed_element_identifier WebApplication#use_guessed_element_identifier}
  */
  readonly useGuessedElementIdentifier?: boolean | cdktf.IResolvable;
  /**
  * processing_steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#processing_steps WebApplication#processing_steps}
  */
  readonly processingSteps?: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingSteps;
}

export function webApplicationUserActionNamingSettingsPlaceholdersPlaceholderToTerraform(struct?: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktf.stringToTerraform(struct!.input),
    metadata_id: cdktf.numberToTerraform(struct!.metadataId),
    name: cdktf.stringToTerraform(struct!.name),
    processing_part: cdktf.stringToTerraform(struct!.processingPart),
    use_guessed_element_identifier: cdktf.booleanToTerraform(struct!.useGuessedElementIdentifier),
    processing_steps: webApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsToTerraform(struct!.processingSteps),
  }
}


export function webApplicationUserActionNamingSettingsPlaceholdersPlaceholderToHclTerraform(struct?: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: cdktf.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_id: {
      value: cdktf.numberToHclTerraform(struct!.metadataId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processing_part: {
      value: cdktf.stringToHclTerraform(struct!.processingPart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_guessed_element_identifier: {
      value: cdktf.booleanToHclTerraform(struct!.useGuessedElementIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processing_steps: {
      value: webApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsToHclTerraform(struct!.processingSteps),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationUserActionNamingSettingsPlaceholdersPlaceholder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._metadataId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataId = this._metadataId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processingPart !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingPart = this._processingPart;
    }
    if (this._useGuessedElementIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGuessedElementIdentifier = this._useGuessedElementIdentifier;
    }
    if (this._processingSteps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingSteps = this._processingSteps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
      this._metadataId = undefined;
      this._name = undefined;
      this._processingPart = undefined;
      this._useGuessedElementIdentifier = undefined;
      this._processingSteps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
      this._metadataId = value.metadataId;
      this._name = value.name;
      this._processingPart = value.processingPart;
      this._useGuessedElementIdentifier = value.useGuessedElementIdentifier;
      this._processingSteps.internalValue = value.processingSteps;
    }
  }

  // input - computed: false, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // metadata_id - computed: false, optional: true, required: false
  private _metadataId?: number; 
  public get metadataId() {
    return this.getNumberAttribute('metadata_id');
  }
  public set metadataId(value: number) {
    this._metadataId = value;
  }
  public resetMetadataId() {
    this._metadataId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataIdInput() {
    return this._metadataId;
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

  // processing_part - computed: false, optional: false, required: true
  private _processingPart?: string; 
  public get processingPart() {
    return this.getStringAttribute('processing_part');
  }
  public set processingPart(value: string) {
    this._processingPart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingPartInput() {
    return this._processingPart;
  }

  // use_guessed_element_identifier - computed: false, optional: true, required: false
  private _useGuessedElementIdentifier?: boolean | cdktf.IResolvable; 
  public get useGuessedElementIdentifier() {
    return this.getBooleanAttribute('use_guessed_element_identifier');
  }
  public set useGuessedElementIdentifier(value: boolean | cdktf.IResolvable) {
    this._useGuessedElementIdentifier = value;
  }
  public resetUseGuessedElementIdentifier() {
    this._useGuessedElementIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGuessedElementIdentifierInput() {
    return this._useGuessedElementIdentifier;
  }

  // processing_steps - computed: false, optional: true, required: false
  private _processingSteps = new WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingStepsOutputReference(this, "processing_steps");
  public get processingSteps() {
    return this._processingSteps;
  }
  public putProcessingSteps(value: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderProcessingSteps) {
    this._processingSteps.internalValue = value;
  }
  public resetProcessingSteps() {
    this._processingSteps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingStepsInput() {
    return this._processingSteps.internalValue;
  }
}

export class WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderList extends cdktf.ComplexList {
  public internalValue? : WebApplicationUserActionNamingSettingsPlaceholdersPlaceholder[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderOutputReference {
    return new WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationUserActionNamingSettingsPlaceholders {
  /**
  * placeholder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#placeholder WebApplication#placeholder}
  */
  readonly placeholder: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholder[] | cdktf.IResolvable;
}

export function webApplicationUserActionNamingSettingsPlaceholdersToTerraform(struct?: WebApplicationUserActionNamingSettingsPlaceholdersOutputReference | WebApplicationUserActionNamingSettingsPlaceholders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    placeholder: cdktf.listMapper(webApplicationUserActionNamingSettingsPlaceholdersPlaceholderToTerraform, true)(struct!.placeholder),
  }
}


export function webApplicationUserActionNamingSettingsPlaceholdersToHclTerraform(struct?: WebApplicationUserActionNamingSettingsPlaceholdersOutputReference | WebApplicationUserActionNamingSettingsPlaceholders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    placeholder: {
      value: cdktf.listMapperHcl(webApplicationUserActionNamingSettingsPlaceholdersPlaceholderToHclTerraform, true)(struct!.placeholder),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsPlaceholdersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationUserActionNamingSettingsPlaceholders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placeholder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholder = this._placeholder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsPlaceholders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._placeholder.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._placeholder.internalValue = value.placeholder;
    }
  }

  // placeholder - computed: false, optional: false, required: true
  private _placeholder = new WebApplicationUserActionNamingSettingsPlaceholdersPlaceholderList(this, "placeholder", false);
  public get placeholder() {
    return this._placeholder;
  }
  public putPlaceholder(value: WebApplicationUserActionNamingSettingsPlaceholdersPlaceholder[] | cdktf.IResolvable) {
    this._placeholder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderInput() {
    return this._placeholder.internalValue;
  }
}
export interface WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsCondition {
  /**
  * Must be a defined placeholder wrapped in curly braces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#operand1 WebApplication#operand1}
  */
  readonly operand1: string;
  /**
  * Must be null if operator is `IS_EMPTY`, a regex if operator is `MATCHES_REGULAR_ERPRESSION`. In all other cases the value can be a freetext or a placeholder wrapped in curly braces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#operand2 WebApplication#operand2}
  */
  readonly operand2?: string;
  /**
  * The operator of the condition. Possible values are `CONTAINS`, `ENDS_WITH`, `EQUALS`, `IS_EMPTY`, `IS_NOT_EMPTY`, `MATCHES_REGULAR_EXPRESSION`, `NOT_CONTAINS`, `NOT_ENDS_WITH`, `NOT_EQUALS`, `NOT_MATCHES_REGULAR_EXPRESSION`, `NOT_STARTS_WITH` and `STARTS_WITH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#operator WebApplication#operator}
  */
  readonly operator: string;
}

export function webApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsConditionToTerraform(struct?: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operand1: cdktf.stringToTerraform(struct!.operand1),
    operand2: cdktf.stringToTerraform(struct!.operand2),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function webApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsConditionToHclTerraform(struct?: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operand1: {
      value: cdktf.stringToHclTerraform(struct!.operand1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operand2: {
      value: cdktf.stringToHclTerraform(struct!.operand2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operand1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.operand1 = this._operand1;
    }
    if (this._operand2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.operand2 = this._operand2;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operand1 = undefined;
      this._operand2 = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operand1 = value.operand1;
      this._operand2 = value.operand2;
      this._operator = value.operator;
    }
  }

  // operand1 - computed: false, optional: false, required: true
  private _operand1?: string; 
  public get operand1() {
    return this.getStringAttribute('operand1');
  }
  public set operand1(value: string) {
    this._operand1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operand1Input() {
    return this._operand1;
  }

  // operand2 - computed: false, optional: true, required: false
  private _operand2?: string; 
  public get operand2() {
    return this.getStringAttribute('operand2');
  }
  public set operand2(value: string) {
    this._operand2 = value;
  }
  public resetOperand2() {
    this._operand2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operand2Input() {
    return this._operand2;
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
}

export class WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsConditionOutputReference {
    return new WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#condition WebApplication#condition}
  */
  readonly condition: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsCondition[] | cdktf.IResolvable;
}

export function webApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsToTerraform(struct?: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsOutputReference | WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(webApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function webApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsToHclTerraform(struct?: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsOutputReference | WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(webApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface WebApplicationUserActionNamingSettingsXhrActionNamingRulesRule {
  /**
  * Naming pattern. Use Curly brackets `{}` to select placeholders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#template WebApplication#template}
  */
  readonly template: string;
  /**
  * If set to `true` the conditions will be connected by logical OR instead of logical AND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#use_or_conditions WebApplication#use_or_conditions}
  */
  readonly useOrConditions?: boolean | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#conditions WebApplication#conditions}
  */
  readonly conditions?: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditions;
}

export function webApplicationUserActionNamingSettingsXhrActionNamingRulesRuleToTerraform(struct?: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
    use_or_conditions: cdktf.booleanToTerraform(struct!.useOrConditions),
    conditions: webApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsToTerraform(struct!.conditions),
  }
}


export function webApplicationUserActionNamingSettingsXhrActionNamingRulesRuleToHclTerraform(struct?: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_or_conditions: {
      value: cdktf.booleanToHclTerraform(struct!.useOrConditions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conditions: {
      value: webApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationUserActionNamingSettingsXhrActionNamingRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._useOrConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOrConditions = this._useOrConditions;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
      this._useOrConditions = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
      this._useOrConditions = value.useOrConditions;
      this._conditions.internalValue = value.conditions;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // use_or_conditions - computed: false, optional: true, required: false
  private _useOrConditions?: boolean | cdktf.IResolvable; 
  public get useOrConditions() {
    return this.getBooleanAttribute('use_or_conditions');
  }
  public set useOrConditions(value: boolean | cdktf.IResolvable) {
    this._useOrConditions = value;
  }
  public resetUseOrConditions() {
    this._useOrConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOrConditionsInput() {
    return this._useOrConditions;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleList extends cdktf.ComplexList {
  public internalValue? : WebApplicationUserActionNamingSettingsXhrActionNamingRulesRule[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleOutputReference {
    return new WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationUserActionNamingSettingsXhrActionNamingRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#rule WebApplication#rule}
  */
  readonly rule: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRule[] | cdktf.IResolvable;
}

export function webApplicationUserActionNamingSettingsXhrActionNamingRulesToTerraform(struct?: WebApplicationUserActionNamingSettingsXhrActionNamingRulesOutputReference | WebApplicationUserActionNamingSettingsXhrActionNamingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(webApplicationUserActionNamingSettingsXhrActionNamingRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function webApplicationUserActionNamingSettingsXhrActionNamingRulesToHclTerraform(struct?: WebApplicationUserActionNamingSettingsXhrActionNamingRulesOutputReference | WebApplicationUserActionNamingSettingsXhrActionNamingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(webApplicationUserActionNamingSettingsXhrActionNamingRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsXhrActionNamingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationUserActionNamingSettingsXhrActionNamingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettingsXhrActionNamingRules | undefined) {
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
  private _rule = new WebApplicationUserActionNamingSettingsXhrActionNamingRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: WebApplicationUserActionNamingSettingsXhrActionNamingRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface WebApplicationUserActionNamingSettings {
  /**
  * Case insensitive naming
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#ignore_case WebApplication#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * User action naming rules for custom actions. If not specified Dynatrace assumes `__sid`, `cfid`, `cftoken`, `phpsessid` and `sid`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#query_parameter_cleanups WebApplication#query_parameter_cleanups}
  */
  readonly queryParameterCleanups?: string[];
  /**
  * Deactivate this setting if different domains should not result in separate user actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#split_user_actions_by_domain WebApplication#split_user_actions_by_domain}
  */
  readonly splitUserActionsByDomain?: boolean | cdktf.IResolvable;
  /**
  * First load action found under an XHR action should be used when true. Else the deepest one under the xhr action is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#use_first_detected_load_action WebApplication#use_first_detected_load_action}
  */
  readonly useFirstDetectedLoadAction?: boolean | cdktf.IResolvable;
  /**
  * custom_action_naming_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#custom_action_naming_rules WebApplication#custom_action_naming_rules}
  */
  readonly customActionNamingRules?: WebApplicationUserActionNamingSettingsCustomActionNamingRules;
  /**
  * load_action_naming_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#load_action_naming_rules WebApplication#load_action_naming_rules}
  */
  readonly loadActionNamingRules?: WebApplicationUserActionNamingSettingsLoadActionNamingRules;
  /**
  * placeholders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#placeholders WebApplication#placeholders}
  */
  readonly placeholders?: WebApplicationUserActionNamingSettingsPlaceholders;
  /**
  * xhr_action_naming_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#xhr_action_naming_rules WebApplication#xhr_action_naming_rules}
  */
  readonly xhrActionNamingRules?: WebApplicationUserActionNamingSettingsXhrActionNamingRules;
}

export function webApplicationUserActionNamingSettingsToTerraform(struct?: WebApplicationUserActionNamingSettingsOutputReference | WebApplicationUserActionNamingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    query_parameter_cleanups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryParameterCleanups),
    split_user_actions_by_domain: cdktf.booleanToTerraform(struct!.splitUserActionsByDomain),
    use_first_detected_load_action: cdktf.booleanToTerraform(struct!.useFirstDetectedLoadAction),
    custom_action_naming_rules: webApplicationUserActionNamingSettingsCustomActionNamingRulesToTerraform(struct!.customActionNamingRules),
    load_action_naming_rules: webApplicationUserActionNamingSettingsLoadActionNamingRulesToTerraform(struct!.loadActionNamingRules),
    placeholders: webApplicationUserActionNamingSettingsPlaceholdersToTerraform(struct!.placeholders),
    xhr_action_naming_rules: webApplicationUserActionNamingSettingsXhrActionNamingRulesToTerraform(struct!.xhrActionNamingRules),
  }
}


export function webApplicationUserActionNamingSettingsToHclTerraform(struct?: WebApplicationUserActionNamingSettingsOutputReference | WebApplicationUserActionNamingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_parameter_cleanups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryParameterCleanups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    split_user_actions_by_domain: {
      value: cdktf.booleanToHclTerraform(struct!.splitUserActionsByDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_first_detected_load_action: {
      value: cdktf.booleanToHclTerraform(struct!.useFirstDetectedLoadAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_action_naming_rules: {
      value: webApplicationUserActionNamingSettingsCustomActionNamingRulesToHclTerraform(struct!.customActionNamingRules),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsCustomActionNamingRulesList",
    },
    load_action_naming_rules: {
      value: webApplicationUserActionNamingSettingsLoadActionNamingRulesToHclTerraform(struct!.loadActionNamingRules),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsLoadActionNamingRulesList",
    },
    placeholders: {
      value: webApplicationUserActionNamingSettingsPlaceholdersToHclTerraform(struct!.placeholders),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsPlaceholdersList",
    },
    xhr_action_naming_rules: {
      value: webApplicationUserActionNamingSettingsXhrActionNamingRulesToHclTerraform(struct!.xhrActionNamingRules),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserActionNamingSettingsXhrActionNamingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserActionNamingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationUserActionNamingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._queryParameterCleanups !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterCleanups = this._queryParameterCleanups;
    }
    if (this._splitUserActionsByDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitUserActionsByDomain = this._splitUserActionsByDomain;
    }
    if (this._useFirstDetectedLoadAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFirstDetectedLoadAction = this._useFirstDetectedLoadAction;
    }
    if (this._customActionNamingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customActionNamingRules = this._customActionNamingRules?.internalValue;
    }
    if (this._loadActionNamingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadActionNamingRules = this._loadActionNamingRules?.internalValue;
    }
    if (this._placeholders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholders = this._placeholders?.internalValue;
    }
    if (this._xhrActionNamingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xhrActionNamingRules = this._xhrActionNamingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserActionNamingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreCase = undefined;
      this._queryParameterCleanups = undefined;
      this._splitUserActionsByDomain = undefined;
      this._useFirstDetectedLoadAction = undefined;
      this._customActionNamingRules.internalValue = undefined;
      this._loadActionNamingRules.internalValue = undefined;
      this._placeholders.internalValue = undefined;
      this._xhrActionNamingRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreCase = value.ignoreCase;
      this._queryParameterCleanups = value.queryParameterCleanups;
      this._splitUserActionsByDomain = value.splitUserActionsByDomain;
      this._useFirstDetectedLoadAction = value.useFirstDetectedLoadAction;
      this._customActionNamingRules.internalValue = value.customActionNamingRules;
      this._loadActionNamingRules.internalValue = value.loadActionNamingRules;
      this._placeholders.internalValue = value.placeholders;
      this._xhrActionNamingRules.internalValue = value.xhrActionNamingRules;
    }
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // query_parameter_cleanups - computed: true, optional: true, required: false
  private _queryParameterCleanups?: string[]; 
  public get queryParameterCleanups() {
    return cdktf.Fn.tolist(this.getListAttribute('query_parameter_cleanups'));
  }
  public set queryParameterCleanups(value: string[]) {
    this._queryParameterCleanups = value;
  }
  public resetQueryParameterCleanups() {
    this._queryParameterCleanups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterCleanupsInput() {
    return this._queryParameterCleanups;
  }

  // split_user_actions_by_domain - computed: false, optional: true, required: false
  private _splitUserActionsByDomain?: boolean | cdktf.IResolvable; 
  public get splitUserActionsByDomain() {
    return this.getBooleanAttribute('split_user_actions_by_domain');
  }
  public set splitUserActionsByDomain(value: boolean | cdktf.IResolvable) {
    this._splitUserActionsByDomain = value;
  }
  public resetSplitUserActionsByDomain() {
    this._splitUserActionsByDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitUserActionsByDomainInput() {
    return this._splitUserActionsByDomain;
  }

  // use_first_detected_load_action - computed: false, optional: true, required: false
  private _useFirstDetectedLoadAction?: boolean | cdktf.IResolvable; 
  public get useFirstDetectedLoadAction() {
    return this.getBooleanAttribute('use_first_detected_load_action');
  }
  public set useFirstDetectedLoadAction(value: boolean | cdktf.IResolvable) {
    this._useFirstDetectedLoadAction = value;
  }
  public resetUseFirstDetectedLoadAction() {
    this._useFirstDetectedLoadAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFirstDetectedLoadActionInput() {
    return this._useFirstDetectedLoadAction;
  }

  // custom_action_naming_rules - computed: false, optional: true, required: false
  private _customActionNamingRules = new WebApplicationUserActionNamingSettingsCustomActionNamingRulesOutputReference(this, "custom_action_naming_rules");
  public get customActionNamingRules() {
    return this._customActionNamingRules;
  }
  public putCustomActionNamingRules(value: WebApplicationUserActionNamingSettingsCustomActionNamingRules) {
    this._customActionNamingRules.internalValue = value;
  }
  public resetCustomActionNamingRules() {
    this._customActionNamingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionNamingRulesInput() {
    return this._customActionNamingRules.internalValue;
  }

  // load_action_naming_rules - computed: false, optional: true, required: false
  private _loadActionNamingRules = new WebApplicationUserActionNamingSettingsLoadActionNamingRulesOutputReference(this, "load_action_naming_rules");
  public get loadActionNamingRules() {
    return this._loadActionNamingRules;
  }
  public putLoadActionNamingRules(value: WebApplicationUserActionNamingSettingsLoadActionNamingRules) {
    this._loadActionNamingRules.internalValue = value;
  }
  public resetLoadActionNamingRules() {
    this._loadActionNamingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadActionNamingRulesInput() {
    return this._loadActionNamingRules.internalValue;
  }

  // placeholders - computed: false, optional: true, required: false
  private _placeholders = new WebApplicationUserActionNamingSettingsPlaceholdersOutputReference(this, "placeholders");
  public get placeholders() {
    return this._placeholders;
  }
  public putPlaceholders(value: WebApplicationUserActionNamingSettingsPlaceholders) {
    this._placeholders.internalValue = value;
  }
  public resetPlaceholders() {
    this._placeholders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholdersInput() {
    return this._placeholders.internalValue;
  }

  // xhr_action_naming_rules - computed: false, optional: true, required: false
  private _xhrActionNamingRules = new WebApplicationUserActionNamingSettingsXhrActionNamingRulesOutputReference(this, "xhr_action_naming_rules");
  public get xhrActionNamingRules() {
    return this._xhrActionNamingRules;
  }
  public putXhrActionNamingRules(value: WebApplicationUserActionNamingSettingsXhrActionNamingRules) {
    this._xhrActionNamingRules.internalValue = value;
  }
  public resetXhrActionNamingRules() {
    this._xhrActionNamingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xhrActionNamingRulesInput() {
    return this._xhrActionNamingRules.internalValue;
  }
}
export interface WebApplicationUserTagsTag {
  /**
  * Cleanup rule expression of the userTag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#cleanup_rule WebApplication#cleanup_rule}
  */
  readonly cleanupRule?: string;
  /**
  * A unique ID among all userTags and properties of this application. Minimum value is 1. Do not set that attribute anymore - terraform will handle it. Kept for backwards compatibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#id WebApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * If `true`, the value of this tag will always be stored in lower case. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#ignore_case WebApplication#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * If it's of type metaData, metaData id of the userTag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#metadata_id WebApplication#metadata_id}
  */
  readonly metadataId?: number;
  /**
  * The ID of the RrequestAttribute for the userTag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#server_side_request_attribute WebApplication#server_side_request_attribute}
  */
  readonly serverSideRequestAttribute?: string;
}

export function webApplicationUserTagsTagToTerraform(struct?: WebApplicationUserTagsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_rule: cdktf.stringToTerraform(struct!.cleanupRule),
    id: cdktf.numberToTerraform(struct!.id),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    metadata_id: cdktf.numberToTerraform(struct!.metadataId),
    server_side_request_attribute: cdktf.stringToTerraform(struct!.serverSideRequestAttribute),
  }
}


export function webApplicationUserTagsTagToHclTerraform(struct?: WebApplicationUserTagsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_rule: {
      value: cdktf.stringToHclTerraform(struct!.cleanupRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metadata_id: {
      value: cdktf.numberToHclTerraform(struct!.metadataId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_side_request_attribute: {
      value: cdktf.stringToHclTerraform(struct!.serverSideRequestAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserTagsTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebApplicationUserTagsTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupRule = this._cleanupRule;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._metadataId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataId = this._metadataId;
    }
    if (this._serverSideRequestAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideRequestAttribute = this._serverSideRequestAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserTagsTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanupRule = undefined;
      this._id = undefined;
      this._ignoreCase = undefined;
      this._metadataId = undefined;
      this._serverSideRequestAttribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanupRule = value.cleanupRule;
      this._id = value.id;
      this._ignoreCase = value.ignoreCase;
      this._metadataId = value.metadataId;
      this._serverSideRequestAttribute = value.serverSideRequestAttribute;
    }
  }

  // cleanup_rule - computed: false, optional: true, required: false
  private _cleanupRule?: string; 
  public get cleanupRule() {
    return this.getStringAttribute('cleanup_rule');
  }
  public set cleanupRule(value: string) {
    this._cleanupRule = value;
  }
  public resetCleanupRule() {
    this._cleanupRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupRuleInput() {
    return this._cleanupRule;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // metadata_id - computed: false, optional: true, required: false
  private _metadataId?: number; 
  public get metadataId() {
    return this.getNumberAttribute('metadata_id');
  }
  public set metadataId(value: number) {
    this._metadataId = value;
  }
  public resetMetadataId() {
    this._metadataId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataIdInput() {
    return this._metadataId;
  }

  // server_side_request_attribute - computed: false, optional: true, required: false
  private _serverSideRequestAttribute?: string; 
  public get serverSideRequestAttribute() {
    return this.getStringAttribute('server_side_request_attribute');
  }
  public set serverSideRequestAttribute(value: string) {
    this._serverSideRequestAttribute = value;
  }
  public resetServerSideRequestAttribute() {
    this._serverSideRequestAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideRequestAttributeInput() {
    return this._serverSideRequestAttribute;
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getNumberAttribute('unique_id');
  }
}

export class WebApplicationUserTagsTagList extends cdktf.ComplexList {
  public internalValue? : WebApplicationUserTagsTag[] | cdktf.IResolvable

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
  public get(index: number): WebApplicationUserTagsTagOutputReference {
    return new WebApplicationUserTagsTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebApplicationUserTags {
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#tag WebApplication#tag}
  */
  readonly tag: WebApplicationUserTagsTag[] | cdktf.IResolvable;
}

export function webApplicationUserTagsToTerraform(struct?: WebApplicationUserTagsOutputReference | WebApplicationUserTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.listMapper(webApplicationUserTagsTagToTerraform, true)(struct!.tag),
  }
}


export function webApplicationUserTagsToHclTerraform(struct?: WebApplicationUserTagsOutputReference | WebApplicationUserTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.listMapperHcl(webApplicationUserTagsTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "WebApplicationUserTagsTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationUserTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationUserTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationUserTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tag.internalValue = value.tag;
    }
  }

  // tag - computed: false, optional: false, required: true
  private _tag = new WebApplicationUserTagsTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: WebApplicationUserTagsTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface WebApplicationWaterfallSettings {
  /**
  * Warn about resources with a lower browser cache rate above *X*%. Values between 1 and 100 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#resource_browser_caching_threshold WebApplication#resource_browser_caching_threshold}
  */
  readonly resourceBrowserCachingThreshold: number;
  /**
  * Warn about resources larger than *X* bytes. Values between 0 and 99999000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#resources_threshold WebApplication#resources_threshold}
  */
  readonly resourcesThreshold: number;
  /**
  * Warn about slow CDN resources with a response time above *X* ms. Values between 0 and 99999000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#slow_cnd_resources_threshold WebApplication#slow_cnd_resources_threshold}
  */
  readonly slowCndResourcesThreshold: number;
  /**
  * Warn about slow 1st party resources with a response time above *X* ms. Values between 0 and 99999000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#slow_first_party_resources_threshold WebApplication#slow_first_party_resources_threshold}
  */
  readonly slowFirstPartyResourcesThreshold: number;
  /**
  * Warn about slow 3rd party resources with a response time above *X* ms. Values between 0 and 99999000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#slow_third_party_resources_threshold WebApplication#slow_third_party_resources_threshold}
  */
  readonly slowThirdPartyResourcesThreshold: number;
  /**
  * Warn if Speed index exceeds *X* % of Visually complete. Values between 1 and 99 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#speed_index_visually_complete_ratio_threshold WebApplication#speed_index_visually_complete_ratio_threshold}
  */
  readonly speedIndexVisuallyCompleteRatioThreshold: number;
  /**
  * Warn about uncompressed resources larger than *X* bytes. Values between 0 and 99999 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#uncompressed_resources_threshold WebApplication#uncompressed_resources_threshold}
  */
  readonly uncompressedResourcesThreshold: number;
}

export function webApplicationWaterfallSettingsToTerraform(struct?: WebApplicationWaterfallSettingsOutputReference | WebApplicationWaterfallSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_browser_caching_threshold: cdktf.numberToTerraform(struct!.resourceBrowserCachingThreshold),
    resources_threshold: cdktf.numberToTerraform(struct!.resourcesThreshold),
    slow_cnd_resources_threshold: cdktf.numberToTerraform(struct!.slowCndResourcesThreshold),
    slow_first_party_resources_threshold: cdktf.numberToTerraform(struct!.slowFirstPartyResourcesThreshold),
    slow_third_party_resources_threshold: cdktf.numberToTerraform(struct!.slowThirdPartyResourcesThreshold),
    speed_index_visually_complete_ratio_threshold: cdktf.numberToTerraform(struct!.speedIndexVisuallyCompleteRatioThreshold),
    uncompressed_resources_threshold: cdktf.numberToTerraform(struct!.uncompressedResourcesThreshold),
  }
}


export function webApplicationWaterfallSettingsToHclTerraform(struct?: WebApplicationWaterfallSettingsOutputReference | WebApplicationWaterfallSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_browser_caching_threshold: {
      value: cdktf.numberToHclTerraform(struct!.resourceBrowserCachingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources_threshold: {
      value: cdktf.numberToHclTerraform(struct!.resourcesThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow_cnd_resources_threshold: {
      value: cdktf.numberToHclTerraform(struct!.slowCndResourcesThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow_first_party_resources_threshold: {
      value: cdktf.numberToHclTerraform(struct!.slowFirstPartyResourcesThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow_third_party_resources_threshold: {
      value: cdktf.numberToHclTerraform(struct!.slowThirdPartyResourcesThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    speed_index_visually_complete_ratio_threshold: {
      value: cdktf.numberToHclTerraform(struct!.speedIndexVisuallyCompleteRatioThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_resources_threshold: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedResourcesThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationWaterfallSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationWaterfallSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceBrowserCachingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceBrowserCachingThreshold = this._resourceBrowserCachingThreshold;
    }
    if (this._resourcesThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcesThreshold = this._resourcesThreshold;
    }
    if (this._slowCndResourcesThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowCndResourcesThreshold = this._slowCndResourcesThreshold;
    }
    if (this._slowFirstPartyResourcesThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowFirstPartyResourcesThreshold = this._slowFirstPartyResourcesThreshold;
    }
    if (this._slowThirdPartyResourcesThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowThirdPartyResourcesThreshold = this._slowThirdPartyResourcesThreshold;
    }
    if (this._speedIndexVisuallyCompleteRatioThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.speedIndexVisuallyCompleteRatioThreshold = this._speedIndexVisuallyCompleteRatioThreshold;
    }
    if (this._uncompressedResourcesThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedResourcesThreshold = this._uncompressedResourcesThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationWaterfallSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceBrowserCachingThreshold = undefined;
      this._resourcesThreshold = undefined;
      this._slowCndResourcesThreshold = undefined;
      this._slowFirstPartyResourcesThreshold = undefined;
      this._slowThirdPartyResourcesThreshold = undefined;
      this._speedIndexVisuallyCompleteRatioThreshold = undefined;
      this._uncompressedResourcesThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceBrowserCachingThreshold = value.resourceBrowserCachingThreshold;
      this._resourcesThreshold = value.resourcesThreshold;
      this._slowCndResourcesThreshold = value.slowCndResourcesThreshold;
      this._slowFirstPartyResourcesThreshold = value.slowFirstPartyResourcesThreshold;
      this._slowThirdPartyResourcesThreshold = value.slowThirdPartyResourcesThreshold;
      this._speedIndexVisuallyCompleteRatioThreshold = value.speedIndexVisuallyCompleteRatioThreshold;
      this._uncompressedResourcesThreshold = value.uncompressedResourcesThreshold;
    }
  }

  // resource_browser_caching_threshold - computed: false, optional: false, required: true
  private _resourceBrowserCachingThreshold?: number; 
  public get resourceBrowserCachingThreshold() {
    return this.getNumberAttribute('resource_browser_caching_threshold');
  }
  public set resourceBrowserCachingThreshold(value: number) {
    this._resourceBrowserCachingThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceBrowserCachingThresholdInput() {
    return this._resourceBrowserCachingThreshold;
  }

  // resources_threshold - computed: false, optional: false, required: true
  private _resourcesThreshold?: number; 
  public get resourcesThreshold() {
    return this.getNumberAttribute('resources_threshold');
  }
  public set resourcesThreshold(value: number) {
    this._resourcesThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesThresholdInput() {
    return this._resourcesThreshold;
  }

  // slow_cnd_resources_threshold - computed: false, optional: false, required: true
  private _slowCndResourcesThreshold?: number; 
  public get slowCndResourcesThreshold() {
    return this.getNumberAttribute('slow_cnd_resources_threshold');
  }
  public set slowCndResourcesThreshold(value: number) {
    this._slowCndResourcesThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowCndResourcesThresholdInput() {
    return this._slowCndResourcesThreshold;
  }

  // slow_first_party_resources_threshold - computed: false, optional: false, required: true
  private _slowFirstPartyResourcesThreshold?: number; 
  public get slowFirstPartyResourcesThreshold() {
    return this.getNumberAttribute('slow_first_party_resources_threshold');
  }
  public set slowFirstPartyResourcesThreshold(value: number) {
    this._slowFirstPartyResourcesThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowFirstPartyResourcesThresholdInput() {
    return this._slowFirstPartyResourcesThreshold;
  }

  // slow_third_party_resources_threshold - computed: false, optional: false, required: true
  private _slowThirdPartyResourcesThreshold?: number; 
  public get slowThirdPartyResourcesThreshold() {
    return this.getNumberAttribute('slow_third_party_resources_threshold');
  }
  public set slowThirdPartyResourcesThreshold(value: number) {
    this._slowThirdPartyResourcesThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slowThirdPartyResourcesThresholdInput() {
    return this._slowThirdPartyResourcesThreshold;
  }

  // speed_index_visually_complete_ratio_threshold - computed: false, optional: false, required: true
  private _speedIndexVisuallyCompleteRatioThreshold?: number; 
  public get speedIndexVisuallyCompleteRatioThreshold() {
    return this.getNumberAttribute('speed_index_visually_complete_ratio_threshold');
  }
  public set speedIndexVisuallyCompleteRatioThreshold(value: number) {
    this._speedIndexVisuallyCompleteRatioThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedIndexVisuallyCompleteRatioThresholdInput() {
    return this._speedIndexVisuallyCompleteRatioThreshold;
  }

  // uncompressed_resources_threshold - computed: false, optional: false, required: true
  private _uncompressedResourcesThreshold?: number; 
  public get uncompressedResourcesThreshold() {
    return this.getNumberAttribute('uncompressed_resources_threshold');
  }
  public set uncompressedResourcesThreshold(value: number) {
    this._uncompressedResourcesThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedResourcesThresholdInput() {
    return this._uncompressedResourcesThreshold;
  }
}
export interface WebApplicationXhrActionApdexSettings {
  /**
  * Fallback threshold of an XHR action, defining a tolerable user experience, when the configured KPM is not available. Values between 0 and 240000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#frustrating_fallback_threshold WebApplication#frustrating_fallback_threshold}
  */
  readonly frustratingFallbackThreshold: number;
  /**
  * Maximal value of apdex, which is considered as tolerable user experience. Values between 0 and 240000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#frustrating_threshold WebApplication#frustrating_threshold}
  */
  readonly frustratingThreshold: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#threshold WebApplication#threshold}
  */
  readonly threshold?: number;
  /**
  * Fallback threshold of an XHR action, defining a satisfied user experience, when the configured KPM is not available. Values between 0 and 60000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#tolerated_fallback_threshold WebApplication#tolerated_fallback_threshold}
  */
  readonly toleratedFallbackThreshold: number;
  /**
  * Maximal value of apdex, which is considered as satisfied user experience. Values between 0 and 60000 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#tolerated_threshold WebApplication#tolerated_threshold}
  */
  readonly toleratedThreshold: number;
}

export function webApplicationXhrActionApdexSettingsToTerraform(struct?: WebApplicationXhrActionApdexSettingsOutputReference | WebApplicationXhrActionApdexSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frustrating_fallback_threshold: cdktf.numberToTerraform(struct!.frustratingFallbackThreshold),
    frustrating_threshold: cdktf.numberToTerraform(struct!.frustratingThreshold),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    tolerated_fallback_threshold: cdktf.numberToTerraform(struct!.toleratedFallbackThreshold),
    tolerated_threshold: cdktf.numberToTerraform(struct!.toleratedThreshold),
  }
}


export function webApplicationXhrActionApdexSettingsToHclTerraform(struct?: WebApplicationXhrActionApdexSettingsOutputReference | WebApplicationXhrActionApdexSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frustrating_fallback_threshold: {
      value: cdktf.numberToHclTerraform(struct!.frustratingFallbackThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frustrating_threshold: {
      value: cdktf.numberToHclTerraform(struct!.frustratingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerated_fallback_threshold: {
      value: cdktf.numberToHclTerraform(struct!.toleratedFallbackThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerated_threshold: {
      value: cdktf.numberToHclTerraform(struct!.toleratedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebApplicationXhrActionApdexSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebApplicationXhrActionApdexSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frustratingFallbackThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.frustratingFallbackThreshold = this._frustratingFallbackThreshold;
    }
    if (this._frustratingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.frustratingThreshold = this._frustratingThreshold;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._toleratedFallbackThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleratedFallbackThreshold = this._toleratedFallbackThreshold;
    }
    if (this._toleratedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleratedThreshold = this._toleratedThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationXhrActionApdexSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frustratingFallbackThreshold = undefined;
      this._frustratingThreshold = undefined;
      this._threshold = undefined;
      this._toleratedFallbackThreshold = undefined;
      this._toleratedThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frustratingFallbackThreshold = value.frustratingFallbackThreshold;
      this._frustratingThreshold = value.frustratingThreshold;
      this._threshold = value.threshold;
      this._toleratedFallbackThreshold = value.toleratedFallbackThreshold;
      this._toleratedThreshold = value.toleratedThreshold;
    }
  }

  // frustrating_fallback_threshold - computed: false, optional: false, required: true
  private _frustratingFallbackThreshold?: number; 
  public get frustratingFallbackThreshold() {
    return this.getNumberAttribute('frustrating_fallback_threshold');
  }
  public set frustratingFallbackThreshold(value: number) {
    this._frustratingFallbackThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frustratingFallbackThresholdInput() {
    return this._frustratingFallbackThreshold;
  }

  // frustrating_threshold - computed: false, optional: false, required: true
  private _frustratingThreshold?: number; 
  public get frustratingThreshold() {
    return this.getNumberAttribute('frustrating_threshold');
  }
  public set frustratingThreshold(value: number) {
    this._frustratingThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frustratingThresholdInput() {
    return this._frustratingThreshold;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // tolerated_fallback_threshold - computed: false, optional: false, required: true
  private _toleratedFallbackThreshold?: number; 
  public get toleratedFallbackThreshold() {
    return this.getNumberAttribute('tolerated_fallback_threshold');
  }
  public set toleratedFallbackThreshold(value: number) {
    this._toleratedFallbackThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toleratedFallbackThresholdInput() {
    return this._toleratedFallbackThreshold;
  }

  // tolerated_threshold - computed: false, optional: false, required: true
  private _toleratedThreshold?: number; 
  public get toleratedThreshold() {
    return this.getNumberAttribute('tolerated_threshold');
  }
  public set toleratedThreshold(value: number) {
    this._toleratedThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toleratedThresholdInput() {
    return this._toleratedThreshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application dynatrace_web_application}
*/
export class WebApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebApplication to import
  * @param importFromId The id of the existing WebApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_application dynatrace_web_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: WebApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_application',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._costControlUserSessionPercentage = config.costControlUserSessionPercentage;
    this._id = config.id;
    this._loadActionKeyPerformanceMetric = config.loadActionKeyPerformanceMetric;
    this._name = config.name;
    this._realUserMonitoringEnabled = config.realUserMonitoringEnabled;
    this._type = config.type;
    this._urlInjectionPattern = config.urlInjectionPattern;
    this._xhrActionKeyPerformanceMetric = config.xhrActionKeyPerformanceMetric;
    this._conversionGoals.internalValue = config.conversionGoals;
    this._customActionApdexSettings.internalValue = config.customActionApdexSettings;
    this._keyUserActions.internalValue = config.keyUserActions;
    this._loadActionApdexSettings.internalValue = config.loadActionApdexSettings;
    this._metaDataCaptureSettings.internalValue = config.metaDataCaptureSettings;
    this._monitoringSettings.internalValue = config.monitoringSettings;
    this._sessionReplayConfig.internalValue = config.sessionReplayConfig;
    this._userActionAndSessionProperties.internalValue = config.userActionAndSessionProperties;
    this._userActionNamingSettings.internalValue = config.userActionNamingSettings;
    this._userTags.internalValue = config.userTags;
    this._waterfallSettings.internalValue = config.waterfallSettings;
    this._xhrActionApdexSettings.internalValue = config.xhrActionApdexSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cost_control_user_session_percentage - computed: false, optional: false, required: true
  private _costControlUserSessionPercentage?: number; 
  public get costControlUserSessionPercentage() {
    return this.getNumberAttribute('cost_control_user_session_percentage');
  }
  public set costControlUserSessionPercentage(value: number) {
    this._costControlUserSessionPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costControlUserSessionPercentageInput() {
    return this._costControlUserSessionPercentage;
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

  // load_action_key_performance_metric - computed: false, optional: false, required: true
  private _loadActionKeyPerformanceMetric?: string; 
  public get loadActionKeyPerformanceMetric() {
    return this.getStringAttribute('load_action_key_performance_metric');
  }
  public set loadActionKeyPerformanceMetric(value: string) {
    this._loadActionKeyPerformanceMetric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadActionKeyPerformanceMetricInput() {
    return this._loadActionKeyPerformanceMetric;
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

  // real_user_monitoring_enabled - computed: false, optional: true, required: false
  private _realUserMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get realUserMonitoringEnabled() {
    return this.getBooleanAttribute('real_user_monitoring_enabled');
  }
  public set realUserMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._realUserMonitoringEnabled = value;
  }
  public resetRealUserMonitoringEnabled() {
    this._realUserMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realUserMonitoringEnabledInput() {
    return this._realUserMonitoringEnabled;
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

  // url_injection_pattern - computed: false, optional: true, required: false
  private _urlInjectionPattern?: string; 
  public get urlInjectionPattern() {
    return this.getStringAttribute('url_injection_pattern');
  }
  public set urlInjectionPattern(value: string) {
    this._urlInjectionPattern = value;
  }
  public resetUrlInjectionPattern() {
    this._urlInjectionPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInjectionPatternInput() {
    return this._urlInjectionPattern;
  }

  // xhr_action_key_performance_metric - computed: false, optional: false, required: true
  private _xhrActionKeyPerformanceMetric?: string; 
  public get xhrActionKeyPerformanceMetric() {
    return this.getStringAttribute('xhr_action_key_performance_metric');
  }
  public set xhrActionKeyPerformanceMetric(value: string) {
    this._xhrActionKeyPerformanceMetric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xhrActionKeyPerformanceMetricInput() {
    return this._xhrActionKeyPerformanceMetric;
  }

  // conversion_goals - computed: false, optional: true, required: false
  private _conversionGoals = new WebApplicationConversionGoalsOutputReference(this, "conversion_goals");
  public get conversionGoals() {
    return this._conversionGoals;
  }
  public putConversionGoals(value: WebApplicationConversionGoals) {
    this._conversionGoals.internalValue = value;
  }
  public resetConversionGoals() {
    this._conversionGoals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversionGoalsInput() {
    return this._conversionGoals.internalValue;
  }

  // custom_action_apdex_settings - computed: false, optional: false, required: true
  private _customActionApdexSettings = new WebApplicationCustomActionApdexSettingsOutputReference(this, "custom_action_apdex_settings");
  public get customActionApdexSettings() {
    return this._customActionApdexSettings;
  }
  public putCustomActionApdexSettings(value: WebApplicationCustomActionApdexSettings) {
    this._customActionApdexSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionApdexSettingsInput() {
    return this._customActionApdexSettings.internalValue;
  }

  // key_user_actions - computed: false, optional: true, required: false
  private _keyUserActions = new WebApplicationKeyUserActionsList(this, "key_user_actions", false);
  public get keyUserActions() {
    return this._keyUserActions;
  }
  public putKeyUserActions(value: WebApplicationKeyUserActions[] | cdktf.IResolvable) {
    this._keyUserActions.internalValue = value;
  }
  public resetKeyUserActions() {
    this._keyUserActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUserActionsInput() {
    return this._keyUserActions.internalValue;
  }

  // load_action_apdex_settings - computed: false, optional: false, required: true
  private _loadActionApdexSettings = new WebApplicationLoadActionApdexSettingsOutputReference(this, "load_action_apdex_settings");
  public get loadActionApdexSettings() {
    return this._loadActionApdexSettings;
  }
  public putLoadActionApdexSettings(value: WebApplicationLoadActionApdexSettings) {
    this._loadActionApdexSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadActionApdexSettingsInput() {
    return this._loadActionApdexSettings.internalValue;
  }

  // meta_data_capture_settings - computed: false, optional: true, required: false
  private _metaDataCaptureSettings = new WebApplicationMetaDataCaptureSettingsOutputReference(this, "meta_data_capture_settings");
  public get metaDataCaptureSettings() {
    return this._metaDataCaptureSettings;
  }
  public putMetaDataCaptureSettings(value: WebApplicationMetaDataCaptureSettings) {
    this._metaDataCaptureSettings.internalValue = value;
  }
  public resetMetaDataCaptureSettings() {
    this._metaDataCaptureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataCaptureSettingsInput() {
    return this._metaDataCaptureSettings.internalValue;
  }

  // monitoring_settings - computed: false, optional: false, required: true
  private _monitoringSettings = new WebApplicationMonitoringSettingsOutputReference(this, "monitoring_settings");
  public get monitoringSettings() {
    return this._monitoringSettings;
  }
  public putMonitoringSettings(value: WebApplicationMonitoringSettings) {
    this._monitoringSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringSettingsInput() {
    return this._monitoringSettings.internalValue;
  }

  // session_replay_config - computed: false, optional: true, required: false
  private _sessionReplayConfig = new WebApplicationSessionReplayConfigOutputReference(this, "session_replay_config");
  public get sessionReplayConfig() {
    return this._sessionReplayConfig;
  }
  public putSessionReplayConfig(value: WebApplicationSessionReplayConfig) {
    this._sessionReplayConfig.internalValue = value;
  }
  public resetSessionReplayConfig() {
    this._sessionReplayConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReplayConfigInput() {
    return this._sessionReplayConfig.internalValue;
  }

  // user_action_and_session_properties - computed: false, optional: true, required: false
  private _userActionAndSessionProperties = new WebApplicationUserActionAndSessionPropertiesOutputReference(this, "user_action_and_session_properties");
  public get userActionAndSessionProperties() {
    return this._userActionAndSessionProperties;
  }
  public putUserActionAndSessionProperties(value: WebApplicationUserActionAndSessionProperties) {
    this._userActionAndSessionProperties.internalValue = value;
  }
  public resetUserActionAndSessionProperties() {
    this._userActionAndSessionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActionAndSessionPropertiesInput() {
    return this._userActionAndSessionProperties.internalValue;
  }

  // user_action_naming_settings - computed: false, optional: true, required: false
  private _userActionNamingSettings = new WebApplicationUserActionNamingSettingsOutputReference(this, "user_action_naming_settings");
  public get userActionNamingSettings() {
    return this._userActionNamingSettings;
  }
  public putUserActionNamingSettings(value: WebApplicationUserActionNamingSettings) {
    this._userActionNamingSettings.internalValue = value;
  }
  public resetUserActionNamingSettings() {
    this._userActionNamingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActionNamingSettingsInput() {
    return this._userActionNamingSettings.internalValue;
  }

  // user_tags - computed: false, optional: true, required: false
  private _userTags = new WebApplicationUserTagsOutputReference(this, "user_tags");
  public get userTags() {
    return this._userTags;
  }
  public putUserTags(value: WebApplicationUserTags) {
    this._userTags.internalValue = value;
  }
  public resetUserTags() {
    this._userTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagsInput() {
    return this._userTags.internalValue;
  }

  // waterfall_settings - computed: false, optional: false, required: true
  private _waterfallSettings = new WebApplicationWaterfallSettingsOutputReference(this, "waterfall_settings");
  public get waterfallSettings() {
    return this._waterfallSettings;
  }
  public putWaterfallSettings(value: WebApplicationWaterfallSettings) {
    this._waterfallSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waterfallSettingsInput() {
    return this._waterfallSettings.internalValue;
  }

  // xhr_action_apdex_settings - computed: false, optional: false, required: true
  private _xhrActionApdexSettings = new WebApplicationXhrActionApdexSettingsOutputReference(this, "xhr_action_apdex_settings");
  public get xhrActionApdexSettings() {
    return this._xhrActionApdexSettings;
  }
  public putXhrActionApdexSettings(value: WebApplicationXhrActionApdexSettings) {
    this._xhrActionApdexSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xhrActionApdexSettingsInput() {
    return this._xhrActionApdexSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cost_control_user_session_percentage: cdktf.numberToTerraform(this._costControlUserSessionPercentage),
      id: cdktf.stringToTerraform(this._id),
      load_action_key_performance_metric: cdktf.stringToTerraform(this._loadActionKeyPerformanceMetric),
      name: cdktf.stringToTerraform(this._name),
      real_user_monitoring_enabled: cdktf.booleanToTerraform(this._realUserMonitoringEnabled),
      type: cdktf.stringToTerraform(this._type),
      url_injection_pattern: cdktf.stringToTerraform(this._urlInjectionPattern),
      xhr_action_key_performance_metric: cdktf.stringToTerraform(this._xhrActionKeyPerformanceMetric),
      conversion_goals: webApplicationConversionGoalsToTerraform(this._conversionGoals.internalValue),
      custom_action_apdex_settings: webApplicationCustomActionApdexSettingsToTerraform(this._customActionApdexSettings.internalValue),
      key_user_actions: cdktf.listMapper(webApplicationKeyUserActionsToTerraform, true)(this._keyUserActions.internalValue),
      load_action_apdex_settings: webApplicationLoadActionApdexSettingsToTerraform(this._loadActionApdexSettings.internalValue),
      meta_data_capture_settings: webApplicationMetaDataCaptureSettingsToTerraform(this._metaDataCaptureSettings.internalValue),
      monitoring_settings: webApplicationMonitoringSettingsToTerraform(this._monitoringSettings.internalValue),
      session_replay_config: webApplicationSessionReplayConfigToTerraform(this._sessionReplayConfig.internalValue),
      user_action_and_session_properties: webApplicationUserActionAndSessionPropertiesToTerraform(this._userActionAndSessionProperties.internalValue),
      user_action_naming_settings: webApplicationUserActionNamingSettingsToTerraform(this._userActionNamingSettings.internalValue),
      user_tags: webApplicationUserTagsToTerraform(this._userTags.internalValue),
      waterfall_settings: webApplicationWaterfallSettingsToTerraform(this._waterfallSettings.internalValue),
      xhr_action_apdex_settings: webApplicationXhrActionApdexSettingsToTerraform(this._xhrActionApdexSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cost_control_user_session_percentage: {
        value: cdktf.numberToHclTerraform(this._costControlUserSessionPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_action_key_performance_metric: {
        value: cdktf.stringToHclTerraform(this._loadActionKeyPerformanceMetric),
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
      real_user_monitoring_enabled: {
        value: cdktf.booleanToHclTerraform(this._realUserMonitoringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_injection_pattern: {
        value: cdktf.stringToHclTerraform(this._urlInjectionPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xhr_action_key_performance_metric: {
        value: cdktf.stringToHclTerraform(this._xhrActionKeyPerformanceMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conversion_goals: {
        value: webApplicationConversionGoalsToHclTerraform(this._conversionGoals.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationConversionGoalsList",
      },
      custom_action_apdex_settings: {
        value: webApplicationCustomActionApdexSettingsToHclTerraform(this._customActionApdexSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationCustomActionApdexSettingsList",
      },
      key_user_actions: {
        value: cdktf.listMapperHcl(webApplicationKeyUserActionsToHclTerraform, true)(this._keyUserActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationKeyUserActionsList",
      },
      load_action_apdex_settings: {
        value: webApplicationLoadActionApdexSettingsToHclTerraform(this._loadActionApdexSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationLoadActionApdexSettingsList",
      },
      meta_data_capture_settings: {
        value: webApplicationMetaDataCaptureSettingsToHclTerraform(this._metaDataCaptureSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationMetaDataCaptureSettingsList",
      },
      monitoring_settings: {
        value: webApplicationMonitoringSettingsToHclTerraform(this._monitoringSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationMonitoringSettingsList",
      },
      session_replay_config: {
        value: webApplicationSessionReplayConfigToHclTerraform(this._sessionReplayConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationSessionReplayConfigList",
      },
      user_action_and_session_properties: {
        value: webApplicationUserActionAndSessionPropertiesToHclTerraform(this._userActionAndSessionProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationUserActionAndSessionPropertiesList",
      },
      user_action_naming_settings: {
        value: webApplicationUserActionNamingSettingsToHclTerraform(this._userActionNamingSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationUserActionNamingSettingsList",
      },
      user_tags: {
        value: webApplicationUserTagsToHclTerraform(this._userTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationUserTagsList",
      },
      waterfall_settings: {
        value: webApplicationWaterfallSettingsToHclTerraform(this._waterfallSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationWaterfallSettingsList",
      },
      xhr_action_apdex_settings: {
        value: webApplicationXhrActionApdexSettingsToHclTerraform(this._xhrActionApdexSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebApplicationXhrActionApdexSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
