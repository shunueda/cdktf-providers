// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationDataPrivacyConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Field has overlap with `dynatrace_data_privacy`) Set to `true` to disable data capture and cookies until JavaScriptAPI `dtrum.enable()` is called
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#data_capture_opt_in ApplicationDataPrivacy#data_capture_opt_in}
  */
  readonly dataCaptureOptIn?: boolean | cdktf.IResolvable;
  /**
  * (Field has overlap with `dynatrace_data_privacy`) How to handle the "Do Not Track" header: 
  * 
  * * `IGNORE_DO_NOT_TRACK`: ignore the header and capture the data. 
  * * `CAPTURE_ANONYMIZED`: capture the data but do not tie it to the user. 
  * * `DO_NOT_CAPTURE`: respect the header and do not capture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#do_not_track_behaviour ApplicationDataPrivacy#do_not_track_behaviour}
  */
  readonly doNotTrackBehaviour: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#id ApplicationDataPrivacy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Field has overlap with `dynatrace_data_privacy`) Set to `true` to set persistent cookie in order to recognize returning devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#persistent_cookie_for_user_tracking ApplicationDataPrivacy#persistent_cookie_for_user_tracking}
  */
  readonly persistentCookieForUserTracking?: boolean | cdktf.IResolvable;
  /**
  * Dynatrace entity ID of the web application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#web_application_id ApplicationDataPrivacy#web_application_id}
  */
  readonly webApplicationId: string;
  /**
  * session_replay_data_privacy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#session_replay_data_privacy ApplicationDataPrivacy#session_replay_data_privacy}
  */
  readonly sessionReplayDataPrivacy: ApplicationDataPrivacySessionReplayDataPrivacy;
}
export interface ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRule {
  /**
  * The selector for the element or the attribute to be masked. 
  * 
  * Specify a CSS expression for an element or a [regular expression](https://dt-url.net/k9e0iaq) for an attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#selector ApplicationDataPrivacy#selector}
  */
  readonly selector: string;
  /**
  * The type of the masking rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#type ApplicationDataPrivacy#type}
  */
  readonly type: string;
  /**
  * Interactions with the element are (`true`) or are not (`false) masked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#user_interaction_hidden ApplicationDataPrivacy#user_interaction_hidden}
  */
  readonly userInteractionHidden?: boolean | cdktf.IResolvable;
}

export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRuleToTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
    type: cdktf.stringToTerraform(struct!.type),
    user_interaction_hidden: cdktf.booleanToTerraform(struct!.userInteractionHidden),
  }
}


export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRuleToHclTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
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
    user_interaction_hidden: {
      value: cdktf.booleanToHclTerraform(struct!.userInteractionHidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userInteractionHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInteractionHidden = this._userInteractionHidden;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector = undefined;
      this._type = undefined;
      this._userInteractionHidden = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector = value.selector;
      this._type = value.type;
      this._userInteractionHidden = value.userInteractionHidden;
    }
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
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

  // user_interaction_hidden - computed: false, optional: true, required: false
  private _userInteractionHidden?: boolean | cdktf.IResolvable; 
  public get userInteractionHidden() {
    return this.getBooleanAttribute('user_interaction_hidden');
  }
  public set userInteractionHidden(value: boolean | cdktf.IResolvable) {
    this._userInteractionHidden = value;
  }
  public resetUserInteractionHidden() {
    this._userInteractionHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInteractionHiddenInput() {
    return this._userInteractionHidden;
  }
}

export class ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRuleList extends cdktf.ComplexList {
  public internalValue? : ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRule[] | cdktf.IResolvable

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
  public get(index: number): ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRuleOutputReference {
    return new ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#rule ApplicationDataPrivacy#rule}
  */
  readonly rule: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRule[] | cdktf.IResolvable;
}

export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesToTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesOutputReference | ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesToHclTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesOutputReference | ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRules | undefined) {
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
  private _rule = new ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlayback {
  /**
  * The type of the masking: 
  * 
  * * `MASK_ALL`: Mask all texts, user input, and images. 
  * * `MASK_USER_INPUT`: Mask all data that is provided through user input 
  * * `ALLOW_LIST`: Only elements, specified in **maskingRules** are shown, everything else is masked. 
  * * `BLOCK_LIST`: Elements, specified in **maskingRules** are masked, everything else is shown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#preset ApplicationDataPrivacy#preset}
  */
  readonly preset: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#rules ApplicationDataPrivacy#rules}
  */
  readonly rules?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRules;
}

export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackToTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackOutputReference | ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preset: cdktf.stringToTerraform(struct!.preset),
    rules: applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesToTerraform(struct!.rules),
  }
}


export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackToHclTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackOutputReference | ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlayback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preset: {
      value: cdktf.stringToHclTerraform(struct!.preset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesToHclTerraform(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlayback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preset !== undefined) {
      hasAnyValues = true;
      internalValueResult.preset = this._preset;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlayback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preset = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preset = value.preset;
      this._rules.internalValue = value.rules;
    }
  }

  // preset - computed: false, optional: false, required: true
  private _preset?: string; 
  public get preset() {
    return this.getStringAttribute('preset');
  }
  public set preset(value: string) {
    this._preset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRule {
  /**
  * The selector for the element or the attribute to be masked. 
  * 
  * Specify a CSS expression for an element or a [regular expression](https://dt-url.net/k9e0iaq) for an attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#selector ApplicationDataPrivacy#selector}
  */
  readonly selector: string;
  /**
  * The type of the masking rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#type ApplicationDataPrivacy#type}
  */
  readonly type: string;
  /**
  * Interactions with the element are (`true`) or are not (`false) masked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#user_interaction_hidden ApplicationDataPrivacy#user_interaction_hidden}
  */
  readonly userInteractionHidden?: boolean | cdktf.IResolvable;
}

export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRuleToTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
    type: cdktf.stringToTerraform(struct!.type),
    user_interaction_hidden: cdktf.booleanToTerraform(struct!.userInteractionHidden),
  }
}


export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRuleToHclTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
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
    user_interaction_hidden: {
      value: cdktf.booleanToHclTerraform(struct!.userInteractionHidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userInteractionHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInteractionHidden = this._userInteractionHidden;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector = undefined;
      this._type = undefined;
      this._userInteractionHidden = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector = value.selector;
      this._type = value.type;
      this._userInteractionHidden = value.userInteractionHidden;
    }
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
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

  // user_interaction_hidden - computed: false, optional: true, required: false
  private _userInteractionHidden?: boolean | cdktf.IResolvable; 
  public get userInteractionHidden() {
    return this.getBooleanAttribute('user_interaction_hidden');
  }
  public set userInteractionHidden(value: boolean | cdktf.IResolvable) {
    this._userInteractionHidden = value;
  }
  public resetUserInteractionHidden() {
    this._userInteractionHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInteractionHiddenInput() {
    return this._userInteractionHidden;
  }
}

export class ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRuleList extends cdktf.ComplexList {
  public internalValue? : ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRule[] | cdktf.IResolvable

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
  public get(index: number): ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRuleOutputReference {
    return new ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#rule ApplicationDataPrivacy#rule}
  */
  readonly rule: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRule[] | cdktf.IResolvable;
}

export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesToTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesOutputReference | ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesToHclTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesOutputReference | ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRules | undefined) {
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
  private _rule = new ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecording {
  /**
  * The type of the masking: 
  * 
  * * `MASK_ALL`: Mask all texts, user input, and images. 
  * * `MASK_USER_INPUT`: Mask all data that is provided through user input 
  * * `ALLOW_LIST`: Only elements, specified in **maskingRules** are shown, everything else is masked. 
  * * `BLOCK_LIST`: Elements, specified in **maskingRules** are masked, everything else is shown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#preset ApplicationDataPrivacy#preset}
  */
  readonly preset: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#rules ApplicationDataPrivacy#rules}
  */
  readonly rules?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRules;
}

export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingToTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingOutputReference | ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preset: cdktf.stringToTerraform(struct!.preset),
    rules: applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesToTerraform(struct!.rules),
  }
}


export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingToHclTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingOutputReference | ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecording): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preset: {
      value: cdktf.stringToHclTerraform(struct!.preset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesToHclTerraform(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecording | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preset !== undefined) {
      hasAnyValues = true;
      internalValueResult.preset = this._preset;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecording | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preset = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preset = value.preset;
      this._rules.internalValue = value.rules;
    }
  }

  // preset - computed: false, optional: false, required: true
  private _preset?: string; 
  public get preset() {
    return this.getStringAttribute('preset');
  }
  public set preset(value: string) {
    this._preset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettings {
  /**
  * playback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#playback ApplicationDataPrivacy#playback}
  */
  readonly playback: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlayback;
  /**
  * recording block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#recording ApplicationDataPrivacy#recording}
  */
  readonly recording: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecording;
}

export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsToTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsOutputReference | ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    playback: applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackToTerraform(struct!.playback),
    recording: applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingToTerraform(struct!.recording),
  }
}


export function applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsToHclTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsOutputReference | ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    playback: {
      value: applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackToHclTerraform(struct!.playback),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackList",
    },
    recording: {
      value: applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingToHclTerraform(struct!.recording),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._playback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playback = this._playback?.internalValue;
    }
    if (this._recording?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recording = this._recording?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._playback.internalValue = undefined;
      this._recording.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._playback.internalValue = value.playback;
      this._recording.internalValue = value.recording;
    }
  }

  // playback - computed: false, optional: false, required: true
  private _playback = new ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlaybackOutputReference(this, "playback");
  public get playback() {
    return this._playback;
  }
  public putPlayback(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsPlayback) {
    this._playback.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get playbackInput() {
    return this._playback.internalValue;
  }

  // recording - computed: false, optional: false, required: true
  private _recording = new ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecordingOutputReference(this, "recording");
  public get recording() {
    return this._recording;
  }
  public putRecording(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsRecording) {
    this._recording.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingInput() {
    return this._recording.internalValue;
  }
}
export interface ApplicationDataPrivacySessionReplayDataPrivacy {
  /**
  * (Field has overlap with `dynatrace_session_replay_web_privacy`) If `true`, session recording is disabled until JavaScriptAPI `dtrum.enableSessionReplay()` is called
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#opt_in ApplicationDataPrivacy#opt_in}
  */
  readonly optIn?: boolean | cdktf.IResolvable;
  /**
  * (Field has overlap with `dynatrace_session_replay_web_privacy`) A list of URLs to be excluded from recording
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#url_exclusion_rules ApplicationDataPrivacy#url_exclusion_rules}
  */
  readonly urlExclusionRules?: string[];
  /**
  * content_masking_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#content_masking_settings ApplicationDataPrivacy#content_masking_settings}
  */
  readonly contentMaskingSettings: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettings;
}

export function applicationDataPrivacySessionReplayDataPrivacyToTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyOutputReference | ApplicationDataPrivacySessionReplayDataPrivacy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opt_in: cdktf.booleanToTerraform(struct!.optIn),
    url_exclusion_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urlExclusionRules),
    content_masking_settings: applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsToTerraform(struct!.contentMaskingSettings),
  }
}


export function applicationDataPrivacySessionReplayDataPrivacyToHclTerraform(struct?: ApplicationDataPrivacySessionReplayDataPrivacyOutputReference | ApplicationDataPrivacySessionReplayDataPrivacy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opt_in: {
      value: cdktf.booleanToHclTerraform(struct!.optIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url_exclusion_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urlExclusionRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    content_masking_settings: {
      value: applicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsToHclTerraform(struct!.contentMaskingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDataPrivacySessionReplayDataPrivacyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationDataPrivacySessionReplayDataPrivacy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.optIn = this._optIn;
    }
    if (this._urlExclusionRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlExclusionRules = this._urlExclusionRules;
    }
    if (this._contentMaskingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentMaskingSettings = this._contentMaskingSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDataPrivacySessionReplayDataPrivacy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optIn = undefined;
      this._urlExclusionRules = undefined;
      this._contentMaskingSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optIn = value.optIn;
      this._urlExclusionRules = value.urlExclusionRules;
      this._contentMaskingSettings.internalValue = value.contentMaskingSettings;
    }
  }

  // opt_in - computed: false, optional: true, required: false
  private _optIn?: boolean | cdktf.IResolvable; 
  public get optIn() {
    return this.getBooleanAttribute('opt_in');
  }
  public set optIn(value: boolean | cdktf.IResolvable) {
    this._optIn = value;
  }
  public resetOptIn() {
    this._optIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInInput() {
    return this._optIn;
  }

  // url_exclusion_rules - computed: false, optional: true, required: false
  private _urlExclusionRules?: string[]; 
  public get urlExclusionRules() {
    return this.getListAttribute('url_exclusion_rules');
  }
  public set urlExclusionRules(value: string[]) {
    this._urlExclusionRules = value;
  }
  public resetUrlExclusionRules() {
    this._urlExclusionRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlExclusionRulesInput() {
    return this._urlExclusionRules;
  }

  // content_masking_settings - computed: false, optional: false, required: true
  private _contentMaskingSettings = new ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettingsOutputReference(this, "content_masking_settings");
  public get contentMaskingSettings() {
    return this._contentMaskingSettings;
  }
  public putContentMaskingSettings(value: ApplicationDataPrivacySessionReplayDataPrivacyContentMaskingSettings) {
    this._contentMaskingSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMaskingSettingsInput() {
    return this._contentMaskingSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy dynatrace_application_data_privacy}
*/
export class ApplicationDataPrivacy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_application_data_privacy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationDataPrivacy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationDataPrivacy to import
  * @param importFromId The id of the existing ApplicationDataPrivacy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationDataPrivacy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_application_data_privacy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_data_privacy dynatrace_application_data_privacy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationDataPrivacyConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationDataPrivacyConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_application_data_privacy',
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
    this._dataCaptureOptIn = config.dataCaptureOptIn;
    this._doNotTrackBehaviour = config.doNotTrackBehaviour;
    this._id = config.id;
    this._persistentCookieForUserTracking = config.persistentCookieForUserTracking;
    this._webApplicationId = config.webApplicationId;
    this._sessionReplayDataPrivacy.internalValue = config.sessionReplayDataPrivacy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_capture_opt_in - computed: false, optional: true, required: false
  private _dataCaptureOptIn?: boolean | cdktf.IResolvable; 
  public get dataCaptureOptIn() {
    return this.getBooleanAttribute('data_capture_opt_in');
  }
  public set dataCaptureOptIn(value: boolean | cdktf.IResolvable) {
    this._dataCaptureOptIn = value;
  }
  public resetDataCaptureOptIn() {
    this._dataCaptureOptIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCaptureOptInInput() {
    return this._dataCaptureOptIn;
  }

  // do_not_track_behaviour - computed: false, optional: false, required: true
  private _doNotTrackBehaviour?: string; 
  public get doNotTrackBehaviour() {
    return this.getStringAttribute('do_not_track_behaviour');
  }
  public set doNotTrackBehaviour(value: string) {
    this._doNotTrackBehaviour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotTrackBehaviourInput() {
    return this._doNotTrackBehaviour;
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

  // persistent_cookie_for_user_tracking - computed: false, optional: true, required: false
  private _persistentCookieForUserTracking?: boolean | cdktf.IResolvable; 
  public get persistentCookieForUserTracking() {
    return this.getBooleanAttribute('persistent_cookie_for_user_tracking');
  }
  public set persistentCookieForUserTracking(value: boolean | cdktf.IResolvable) {
    this._persistentCookieForUserTracking = value;
  }
  public resetPersistentCookieForUserTracking() {
    this._persistentCookieForUserTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentCookieForUserTrackingInput() {
    return this._persistentCookieForUserTracking;
  }

  // web_application_id - computed: false, optional: false, required: true
  private _webApplicationId?: string; 
  public get webApplicationId() {
    return this.getStringAttribute('web_application_id');
  }
  public set webApplicationId(value: string) {
    this._webApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webApplicationIdInput() {
    return this._webApplicationId;
  }

  // session_replay_data_privacy - computed: false, optional: false, required: true
  private _sessionReplayDataPrivacy = new ApplicationDataPrivacySessionReplayDataPrivacyOutputReference(this, "session_replay_data_privacy");
  public get sessionReplayDataPrivacy() {
    return this._sessionReplayDataPrivacy;
  }
  public putSessionReplayDataPrivacy(value: ApplicationDataPrivacySessionReplayDataPrivacy) {
    this._sessionReplayDataPrivacy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReplayDataPrivacyInput() {
    return this._sessionReplayDataPrivacy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_capture_opt_in: cdktf.booleanToTerraform(this._dataCaptureOptIn),
      do_not_track_behaviour: cdktf.stringToTerraform(this._doNotTrackBehaviour),
      id: cdktf.stringToTerraform(this._id),
      persistent_cookie_for_user_tracking: cdktf.booleanToTerraform(this._persistentCookieForUserTracking),
      web_application_id: cdktf.stringToTerraform(this._webApplicationId),
      session_replay_data_privacy: applicationDataPrivacySessionReplayDataPrivacyToTerraform(this._sessionReplayDataPrivacy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_capture_opt_in: {
        value: cdktf.booleanToHclTerraform(this._dataCaptureOptIn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      do_not_track_behaviour: {
        value: cdktf.stringToHclTerraform(this._doNotTrackBehaviour),
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
      persistent_cookie_for_user_tracking: {
        value: cdktf.booleanToHclTerraform(this._persistentCookieForUserTracking),
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
      session_replay_data_privacy: {
        value: applicationDataPrivacySessionReplayDataPrivacyToHclTerraform(this._sessionReplayDataPrivacy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationDataPrivacySessionReplayDataPrivacyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
