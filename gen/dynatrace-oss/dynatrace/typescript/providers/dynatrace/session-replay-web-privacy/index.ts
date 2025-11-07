// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SessionReplayWebPrivacyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#application_id SessionReplayWebPrivacy#application_id}
  */
  readonly applicationId?: string;
  /**
  * (Field has overlap with `dynatrace_application_data_privacy`) When [Session Replay opt-in mode](https://dt-url.net/sr-opt-in-mode) is turned on, Session Replay is deactivated until explicitly activated via an API call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#enable_opt_in_mode SessionReplayWebPrivacy#enable_opt_in_mode}
  */
  readonly enableOptInMode: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#id SessionReplayWebPrivacy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Field has overlap with `dynatrace_application_data_privacy`) Exclude webpages or views from Session Replay recording by adding [URL exclusion rules](https://dt-url.net/sr-url-exclusion)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#url_exclusion_pattern_list SessionReplayWebPrivacy#url_exclusion_pattern_list}
  */
  readonly urlExclusionPatternList?: string[];
  /**
  * masking_presets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#masking_presets SessionReplayWebPrivacy#masking_presets}
  */
  readonly maskingPresets: SessionReplayWebPrivacyMaskingPresets;
}
export interface SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRule {
  /**
  * Attribute masking can be applied to web applications that store data within attributes, typically data-NAME attributes in HTML5. When you define attributes, their values are masked while recording but not removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#attribute_expression SessionReplayWebPrivacy#attribute_expression}
  */
  readonly attributeExpression?: string;
  /**
  * Content masking can be applied to webpages where personal data is displayed. When content masking is applied to parent elements, all child elements are masked by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#css_expression SessionReplayWebPrivacy#css_expression}
  */
  readonly cssExpression?: string;
  /**
  * Possible Values: `ATTRIBUTE`, `ELEMENT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#target SessionReplayWebPrivacy#target}
  */
  readonly target: string;
}

export function sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRuleToTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_expression: cdktf.stringToTerraform(struct!.attributeExpression),
    css_expression: cdktf.stringToTerraform(struct!.cssExpression),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRuleToHclTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_expression: {
      value: cdktf.stringToHclTerraform(struct!.attributeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    css_expression: {
      value: cdktf.stringToHclTerraform(struct!.cssExpression),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeExpression = this._attributeExpression;
    }
    if (this._cssExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cssExpression = this._cssExpression;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeExpression = undefined;
      this._cssExpression = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeExpression = value.attributeExpression;
      this._cssExpression = value.cssExpression;
      this._target = value.target;
    }
  }

  // attribute_expression - computed: false, optional: true, required: false
  private _attributeExpression?: string; 
  public get attributeExpression() {
    return this.getStringAttribute('attribute_expression');
  }
  public set attributeExpression(value: string) {
    this._attributeExpression = value;
  }
  public resetAttributeExpression() {
    this._attributeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeExpressionInput() {
    return this._attributeExpression;
  }

  // css_expression - computed: false, optional: true, required: false
  private _cssExpression?: string; 
  public get cssExpression() {
    return this.getStringAttribute('css_expression');
  }
  public set cssExpression(value: string) {
    this._cssExpression = value;
  }
  public resetCssExpression() {
    this._cssExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssExpressionInput() {
    return this._cssExpression;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRuleList extends cdktf.ComplexList {
  public internalValue? : SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRule[] | cdktf.IResolvable

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
  public get(index: number): SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRuleOutputReference {
    return new SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRules {
  /**
  * allow_list_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#allow_list_rule SessionReplayWebPrivacy#allow_list_rule}
  */
  readonly allowListRule: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRule[] | cdktf.IResolvable;
}

export function sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesToTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesOutputReference | SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_list_rule: cdktf.listMapper(sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRuleToTerraform, true)(struct!.allowListRule),
  }
}


export function sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesToHclTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesOutputReference | SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_list_rule: {
      value: cdktf.listMapperHcl(sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRuleToHclTerraform, true)(struct!.allowListRule),
      isBlock: true,
      type: "list",
      storageClassType: "SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowListRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowListRule = this._allowListRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowListRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowListRule.internalValue = value.allowListRule;
    }
  }

  // allow_list_rule - computed: false, optional: false, required: true
  private _allowListRule = new SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRuleList(this, "allow_list_rule", false);
  public get allowListRule() {
    return this._allowListRule;
  }
  public putAllowListRule(value: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesAllowListRule[] | cdktf.IResolvable) {
    this._allowListRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListRuleInput() {
    return this._allowListRule.internalValue;
  }
}
export interface SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRule {
  /**
  * Attribute masking can be applied to web applications that store data within attributes, typically data-NAME attributes in HTML5. When you define attributes, their values are masked while recording but not removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#attribute_expression SessionReplayWebPrivacy#attribute_expression}
  */
  readonly attributeExpression?: string;
  /**
  * Content masking can be applied to webpages where personal data is displayed. When content masking is applied to parent elements, all child elements are masked by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#css_expression SessionReplayWebPrivacy#css_expression}
  */
  readonly cssExpression?: string;
  /**
  * Hide user interactions with these elements, including clicks that expand elements, highlighting that results from hovering a cursor over an option, and selection of specific form options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#hide_user_interaction SessionReplayWebPrivacy#hide_user_interaction}
  */
  readonly hideUserInteraction?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `ELEMENT`, `ATTRIBUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#target SessionReplayWebPrivacy#target}
  */
  readonly target: string;
}

export function sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRuleToTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_expression: cdktf.stringToTerraform(struct!.attributeExpression),
    css_expression: cdktf.stringToTerraform(struct!.cssExpression),
    hide_user_interaction: cdktf.booleanToTerraform(struct!.hideUserInteraction),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRuleToHclTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_expression: {
      value: cdktf.stringToHclTerraform(struct!.attributeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    css_expression: {
      value: cdktf.stringToHclTerraform(struct!.cssExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_user_interaction: {
      value: cdktf.booleanToHclTerraform(struct!.hideUserInteraction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeExpression = this._attributeExpression;
    }
    if (this._cssExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cssExpression = this._cssExpression;
    }
    if (this._hideUserInteraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideUserInteraction = this._hideUserInteraction;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeExpression = undefined;
      this._cssExpression = undefined;
      this._hideUserInteraction = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeExpression = value.attributeExpression;
      this._cssExpression = value.cssExpression;
      this._hideUserInteraction = value.hideUserInteraction;
      this._target = value.target;
    }
  }

  // attribute_expression - computed: false, optional: true, required: false
  private _attributeExpression?: string; 
  public get attributeExpression() {
    return this.getStringAttribute('attribute_expression');
  }
  public set attributeExpression(value: string) {
    this._attributeExpression = value;
  }
  public resetAttributeExpression() {
    this._attributeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeExpressionInput() {
    return this._attributeExpression;
  }

  // css_expression - computed: false, optional: true, required: false
  private _cssExpression?: string; 
  public get cssExpression() {
    return this.getStringAttribute('css_expression');
  }
  public set cssExpression(value: string) {
    this._cssExpression = value;
  }
  public resetCssExpression() {
    this._cssExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssExpressionInput() {
    return this._cssExpression;
  }

  // hide_user_interaction - computed: false, optional: true, required: false
  private _hideUserInteraction?: boolean | cdktf.IResolvable; 
  public get hideUserInteraction() {
    return this.getBooleanAttribute('hide_user_interaction');
  }
  public set hideUserInteraction(value: boolean | cdktf.IResolvable) {
    this._hideUserInteraction = value;
  }
  public resetHideUserInteraction() {
    this._hideUserInteraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideUserInteractionInput() {
    return this._hideUserInteraction;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRuleList extends cdktf.ComplexList {
  public internalValue? : SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRule[] | cdktf.IResolvable

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
  public get(index: number): SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRuleOutputReference {
    return new SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRules {
  /**
  * block_list_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#block_list_rule SessionReplayWebPrivacy#block_list_rule}
  */
  readonly blockListRule: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRule[] | cdktf.IResolvable;
}

export function sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesToTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesOutputReference | SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_list_rule: cdktf.listMapper(sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRuleToTerraform, true)(struct!.blockListRule),
  }
}


export function sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesToHclTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesOutputReference | SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_list_rule: {
      value: cdktf.listMapperHcl(sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRuleToHclTerraform, true)(struct!.blockListRule),
      isBlock: true,
      type: "list",
      storageClassType: "SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockListRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockListRule = this._blockListRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockListRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockListRule.internalValue = value.blockListRule;
    }
  }

  // block_list_rule - computed: false, optional: false, required: true
  private _blockListRule = new SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRuleList(this, "block_list_rule", false);
  public get blockListRule() {
    return this._blockListRule;
  }
  public putBlockListRule(value: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesBlockListRule[] | cdktf.IResolvable) {
    this._blockListRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockListRuleInput() {
    return this._blockListRule.internalValue;
  }
}
export interface SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRule {
  /**
  * Attribute masking can be applied to web applications that store data within attributes, typically data-NAME attributes in HTML5. When you define attributes, their values are masked while recording but not removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#attribute_expression SessionReplayWebPrivacy#attribute_expression}
  */
  readonly attributeExpression?: string;
  /**
  * Content masking can be applied to webpages where personal data is displayed. When content masking is applied to parent elements, all child elements are masked by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#css_expression SessionReplayWebPrivacy#css_expression}
  */
  readonly cssExpression?: string;
  /**
  * Possible Values: `ATTRIBUTE`, `ELEMENT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#target SessionReplayWebPrivacy#target}
  */
  readonly target: string;
}

export function sessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRuleToTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_expression: cdktf.stringToTerraform(struct!.attributeExpression),
    css_expression: cdktf.stringToTerraform(struct!.cssExpression),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function sessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRuleToHclTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_expression: {
      value: cdktf.stringToHclTerraform(struct!.attributeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    css_expression: {
      value: cdktf.stringToHclTerraform(struct!.cssExpression),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeExpression = this._attributeExpression;
    }
    if (this._cssExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cssExpression = this._cssExpression;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeExpression = undefined;
      this._cssExpression = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeExpression = value.attributeExpression;
      this._cssExpression = value.cssExpression;
      this._target = value.target;
    }
  }

  // attribute_expression - computed: false, optional: true, required: false
  private _attributeExpression?: string; 
  public get attributeExpression() {
    return this.getStringAttribute('attribute_expression');
  }
  public set attributeExpression(value: string) {
    this._attributeExpression = value;
  }
  public resetAttributeExpression() {
    this._attributeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeExpressionInput() {
    return this._attributeExpression;
  }

  // css_expression - computed: false, optional: true, required: false
  private _cssExpression?: string; 
  public get cssExpression() {
    return this.getStringAttribute('css_expression');
  }
  public set cssExpression(value: string) {
    this._cssExpression = value;
  }
  public resetCssExpression() {
    this._cssExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssExpressionInput() {
    return this._cssExpression;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRuleList extends cdktf.ComplexList {
  public internalValue? : SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRule[] | cdktf.IResolvable

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
  public get(index: number): SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRuleOutputReference {
    return new SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRules {
  /**
  * allow_list_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#allow_list_rule SessionReplayWebPrivacy#allow_list_rule}
  */
  readonly allowListRule: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRule[] | cdktf.IResolvable;
}

export function sessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesToTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesOutputReference | SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_list_rule: cdktf.listMapper(sessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRuleToTerraform, true)(struct!.allowListRule),
  }
}


export function sessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesToHclTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesOutputReference | SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_list_rule: {
      value: cdktf.listMapperHcl(sessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRuleToHclTerraform, true)(struct!.allowListRule),
      isBlock: true,
      type: "list",
      storageClassType: "SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowListRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowListRule = this._allowListRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowListRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowListRule.internalValue = value.allowListRule;
    }
  }

  // allow_list_rule - computed: false, optional: false, required: true
  private _allowListRule = new SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRuleList(this, "allow_list_rule", false);
  public get allowListRule() {
    return this._allowListRule;
  }
  public putAllowListRule(value: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesAllowListRule[] | cdktf.IResolvable) {
    this._allowListRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListRuleInput() {
    return this._allowListRule.internalValue;
  }
}
export interface SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRule {
  /**
  * Attribute masking can be applied to web applications that store data within attributes, typically data-NAME attributes in HTML5. When you define attributes, their values are masked while recording but not removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#attribute_expression SessionReplayWebPrivacy#attribute_expression}
  */
  readonly attributeExpression?: string;
  /**
  * Content masking can be applied to webpages where personal data is displayed. When content masking is applied to parent elements, all child elements are masked by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#css_expression SessionReplayWebPrivacy#css_expression}
  */
  readonly cssExpression?: string;
  /**
  * Hide user interactions with these elements, including clicks that expand elements, highlighting that results from hovering a cursor over an option, and selection of specific form options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#hide_user_interaction SessionReplayWebPrivacy#hide_user_interaction}
  */
  readonly hideUserInteraction?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `ELEMENT`, `ATTRIBUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#target SessionReplayWebPrivacy#target}
  */
  readonly target: string;
}

export function sessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRuleToTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_expression: cdktf.stringToTerraform(struct!.attributeExpression),
    css_expression: cdktf.stringToTerraform(struct!.cssExpression),
    hide_user_interaction: cdktf.booleanToTerraform(struct!.hideUserInteraction),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function sessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRuleToHclTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_expression: {
      value: cdktf.stringToHclTerraform(struct!.attributeExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    css_expression: {
      value: cdktf.stringToHclTerraform(struct!.cssExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_user_interaction: {
      value: cdktf.booleanToHclTerraform(struct!.hideUserInteraction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeExpression = this._attributeExpression;
    }
    if (this._cssExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cssExpression = this._cssExpression;
    }
    if (this._hideUserInteraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideUserInteraction = this._hideUserInteraction;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeExpression = undefined;
      this._cssExpression = undefined;
      this._hideUserInteraction = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeExpression = value.attributeExpression;
      this._cssExpression = value.cssExpression;
      this._hideUserInteraction = value.hideUserInteraction;
      this._target = value.target;
    }
  }

  // attribute_expression - computed: false, optional: true, required: false
  private _attributeExpression?: string; 
  public get attributeExpression() {
    return this.getStringAttribute('attribute_expression');
  }
  public set attributeExpression(value: string) {
    this._attributeExpression = value;
  }
  public resetAttributeExpression() {
    this._attributeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeExpressionInput() {
    return this._attributeExpression;
  }

  // css_expression - computed: false, optional: true, required: false
  private _cssExpression?: string; 
  public get cssExpression() {
    return this.getStringAttribute('css_expression');
  }
  public set cssExpression(value: string) {
    this._cssExpression = value;
  }
  public resetCssExpression() {
    this._cssExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssExpressionInput() {
    return this._cssExpression;
  }

  // hide_user_interaction - computed: false, optional: true, required: false
  private _hideUserInteraction?: boolean | cdktf.IResolvable; 
  public get hideUserInteraction() {
    return this.getBooleanAttribute('hide_user_interaction');
  }
  public set hideUserInteraction(value: boolean | cdktf.IResolvable) {
    this._hideUserInteraction = value;
  }
  public resetHideUserInteraction() {
    this._hideUserInteraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideUserInteractionInput() {
    return this._hideUserInteraction;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRuleList extends cdktf.ComplexList {
  public internalValue? : SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRule[] | cdktf.IResolvable

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
  public get(index: number): SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRuleOutputReference {
    return new SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRules {
  /**
  * block_list_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#block_list_rule SessionReplayWebPrivacy#block_list_rule}
  */
  readonly blockListRule: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRule[] | cdktf.IResolvable;
}

export function sessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesToTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesOutputReference | SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_list_rule: cdktf.listMapper(sessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRuleToTerraform, true)(struct!.blockListRule),
  }
}


export function sessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesToHclTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesOutputReference | SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_list_rule: {
      value: cdktf.listMapperHcl(sessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRuleToHclTerraform, true)(struct!.blockListRule),
      isBlock: true,
      type: "list",
      storageClassType: "SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockListRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockListRule = this._blockListRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockListRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockListRule.internalValue = value.blockListRule;
    }
  }

  // block_list_rule - computed: false, optional: false, required: true
  private _blockListRule = new SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRuleList(this, "block_list_rule", false);
  public get blockListRule() {
    return this._blockListRule;
  }
  public putBlockListRule(value: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesBlockListRule[] | cdktf.IResolvable) {
    this._blockListRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockListRuleInput() {
    return this._blockListRule.internalValue;
  }
}
export interface SessionReplayWebPrivacyMaskingPresets {
  /**
  * (Field has overlap with `dynatrace_application_data_privacy`) Possible Values: `MASK_ALL`, `MASK_USER_INPUT`, `ALLOW_LIST`, `BLOCK_LIST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#playback_masking_preset SessionReplayWebPrivacy#playback_masking_preset}
  */
  readonly playbackMaskingPreset: string;
  /**
  * (Field has overlap with `dynatrace_application_data_privacy`) Possible Values: `MASK_USER_INPUT`, `ALLOW_LIST`, `BLOCK_LIST`, `MASK_ALL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#recording_masking_preset SessionReplayWebPrivacy#recording_masking_preset}
  */
  readonly recordingMaskingPreset: string;
  /**
  * playback_masking_allow_list_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#playback_masking_allow_list_rules SessionReplayWebPrivacy#playback_masking_allow_list_rules}
  */
  readonly playbackMaskingAllowListRules?: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRules;
  /**
  * playback_masking_block_list_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#playback_masking_block_list_rules SessionReplayWebPrivacy#playback_masking_block_list_rules}
  */
  readonly playbackMaskingBlockListRules?: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRules;
  /**
  * recording_masking_allow_list_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#recording_masking_allow_list_rules SessionReplayWebPrivacy#recording_masking_allow_list_rules}
  */
  readonly recordingMaskingAllowListRules?: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRules;
  /**
  * recording_masking_block_list_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#recording_masking_block_list_rules SessionReplayWebPrivacy#recording_masking_block_list_rules}
  */
  readonly recordingMaskingBlockListRules?: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRules;
}

export function sessionReplayWebPrivacyMaskingPresetsToTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsOutputReference | SessionReplayWebPrivacyMaskingPresets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    playback_masking_preset: cdktf.stringToTerraform(struct!.playbackMaskingPreset),
    recording_masking_preset: cdktf.stringToTerraform(struct!.recordingMaskingPreset),
    playback_masking_allow_list_rules: sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesToTerraform(struct!.playbackMaskingAllowListRules),
    playback_masking_block_list_rules: sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesToTerraform(struct!.playbackMaskingBlockListRules),
    recording_masking_allow_list_rules: sessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesToTerraform(struct!.recordingMaskingAllowListRules),
    recording_masking_block_list_rules: sessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesToTerraform(struct!.recordingMaskingBlockListRules),
  }
}


export function sessionReplayWebPrivacyMaskingPresetsToHclTerraform(struct?: SessionReplayWebPrivacyMaskingPresetsOutputReference | SessionReplayWebPrivacyMaskingPresets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    playback_masking_preset: {
      value: cdktf.stringToHclTerraform(struct!.playbackMaskingPreset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recording_masking_preset: {
      value: cdktf.stringToHclTerraform(struct!.recordingMaskingPreset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    playback_masking_allow_list_rules: {
      value: sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesToHclTerraform(struct!.playbackMaskingAllowListRules),
      isBlock: true,
      type: "list",
      storageClassType: "SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesList",
    },
    playback_masking_block_list_rules: {
      value: sessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesToHclTerraform(struct!.playbackMaskingBlockListRules),
      isBlock: true,
      type: "list",
      storageClassType: "SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesList",
    },
    recording_masking_allow_list_rules: {
      value: sessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesToHclTerraform(struct!.recordingMaskingAllowListRules),
      isBlock: true,
      type: "list",
      storageClassType: "SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesList",
    },
    recording_masking_block_list_rules: {
      value: sessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesToHclTerraform(struct!.recordingMaskingBlockListRules),
      isBlock: true,
      type: "list",
      storageClassType: "SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionReplayWebPrivacyMaskingPresetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SessionReplayWebPrivacyMaskingPresets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._playbackMaskingPreset !== undefined) {
      hasAnyValues = true;
      internalValueResult.playbackMaskingPreset = this._playbackMaskingPreset;
    }
    if (this._recordingMaskingPreset !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingMaskingPreset = this._recordingMaskingPreset;
    }
    if (this._playbackMaskingAllowListRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playbackMaskingAllowListRules = this._playbackMaskingAllowListRules?.internalValue;
    }
    if (this._playbackMaskingBlockListRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playbackMaskingBlockListRules = this._playbackMaskingBlockListRules?.internalValue;
    }
    if (this._recordingMaskingAllowListRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingMaskingAllowListRules = this._recordingMaskingAllowListRules?.internalValue;
    }
    if (this._recordingMaskingBlockListRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordingMaskingBlockListRules = this._recordingMaskingBlockListRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionReplayWebPrivacyMaskingPresets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._playbackMaskingPreset = undefined;
      this._recordingMaskingPreset = undefined;
      this._playbackMaskingAllowListRules.internalValue = undefined;
      this._playbackMaskingBlockListRules.internalValue = undefined;
      this._recordingMaskingAllowListRules.internalValue = undefined;
      this._recordingMaskingBlockListRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._playbackMaskingPreset = value.playbackMaskingPreset;
      this._recordingMaskingPreset = value.recordingMaskingPreset;
      this._playbackMaskingAllowListRules.internalValue = value.playbackMaskingAllowListRules;
      this._playbackMaskingBlockListRules.internalValue = value.playbackMaskingBlockListRules;
      this._recordingMaskingAllowListRules.internalValue = value.recordingMaskingAllowListRules;
      this._recordingMaskingBlockListRules.internalValue = value.recordingMaskingBlockListRules;
    }
  }

  // playback_masking_preset - computed: false, optional: false, required: true
  private _playbackMaskingPreset?: string; 
  public get playbackMaskingPreset() {
    return this.getStringAttribute('playback_masking_preset');
  }
  public set playbackMaskingPreset(value: string) {
    this._playbackMaskingPreset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get playbackMaskingPresetInput() {
    return this._playbackMaskingPreset;
  }

  // recording_masking_preset - computed: false, optional: false, required: true
  private _recordingMaskingPreset?: string; 
  public get recordingMaskingPreset() {
    return this.getStringAttribute('recording_masking_preset');
  }
  public set recordingMaskingPreset(value: string) {
    this._recordingMaskingPreset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingMaskingPresetInput() {
    return this._recordingMaskingPreset;
  }

  // playback_masking_allow_list_rules - computed: false, optional: true, required: false
  private _playbackMaskingAllowListRules = new SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRulesOutputReference(this, "playback_masking_allow_list_rules");
  public get playbackMaskingAllowListRules() {
    return this._playbackMaskingAllowListRules;
  }
  public putPlaybackMaskingAllowListRules(value: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingAllowListRules) {
    this._playbackMaskingAllowListRules.internalValue = value;
  }
  public resetPlaybackMaskingAllowListRules() {
    this._playbackMaskingAllowListRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playbackMaskingAllowListRulesInput() {
    return this._playbackMaskingAllowListRules.internalValue;
  }

  // playback_masking_block_list_rules - computed: false, optional: true, required: false
  private _playbackMaskingBlockListRules = new SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRulesOutputReference(this, "playback_masking_block_list_rules");
  public get playbackMaskingBlockListRules() {
    return this._playbackMaskingBlockListRules;
  }
  public putPlaybackMaskingBlockListRules(value: SessionReplayWebPrivacyMaskingPresetsPlaybackMaskingBlockListRules) {
    this._playbackMaskingBlockListRules.internalValue = value;
  }
  public resetPlaybackMaskingBlockListRules() {
    this._playbackMaskingBlockListRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playbackMaskingBlockListRulesInput() {
    return this._playbackMaskingBlockListRules.internalValue;
  }

  // recording_masking_allow_list_rules - computed: false, optional: true, required: false
  private _recordingMaskingAllowListRules = new SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRulesOutputReference(this, "recording_masking_allow_list_rules");
  public get recordingMaskingAllowListRules() {
    return this._recordingMaskingAllowListRules;
  }
  public putRecordingMaskingAllowListRules(value: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingAllowListRules) {
    this._recordingMaskingAllowListRules.internalValue = value;
  }
  public resetRecordingMaskingAllowListRules() {
    this._recordingMaskingAllowListRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingMaskingAllowListRulesInput() {
    return this._recordingMaskingAllowListRules.internalValue;
  }

  // recording_masking_block_list_rules - computed: false, optional: true, required: false
  private _recordingMaskingBlockListRules = new SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRulesOutputReference(this, "recording_masking_block_list_rules");
  public get recordingMaskingBlockListRules() {
    return this._recordingMaskingBlockListRules;
  }
  public putRecordingMaskingBlockListRules(value: SessionReplayWebPrivacyMaskingPresetsRecordingMaskingBlockListRules) {
    this._recordingMaskingBlockListRules.internalValue = value;
  }
  public resetRecordingMaskingBlockListRules() {
    this._recordingMaskingBlockListRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingMaskingBlockListRulesInput() {
    return this._recordingMaskingBlockListRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy dynatrace_session_replay_web_privacy}
*/
export class SessionReplayWebPrivacy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_session_replay_web_privacy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SessionReplayWebPrivacy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SessionReplayWebPrivacy to import
  * @param importFromId The id of the existing SessionReplayWebPrivacy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SessionReplayWebPrivacy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_session_replay_web_privacy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/session_replay_web_privacy dynatrace_session_replay_web_privacy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SessionReplayWebPrivacyConfig
  */
  public constructor(scope: Construct, id: string, config: SessionReplayWebPrivacyConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_session_replay_web_privacy',
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
    this._applicationId = config.applicationId;
    this._enableOptInMode = config.enableOptInMode;
    this._id = config.id;
    this._urlExclusionPatternList = config.urlExclusionPatternList;
    this._maskingPresets.internalValue = config.maskingPresets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // enable_opt_in_mode - computed: false, optional: false, required: true
  private _enableOptInMode?: boolean | cdktf.IResolvable; 
  public get enableOptInMode() {
    return this.getBooleanAttribute('enable_opt_in_mode');
  }
  public set enableOptInMode(value: boolean | cdktf.IResolvable) {
    this._enableOptInMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOptInModeInput() {
    return this._enableOptInMode;
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

  // url_exclusion_pattern_list - computed: false, optional: true, required: false
  private _urlExclusionPatternList?: string[]; 
  public get urlExclusionPatternList() {
    return cdktf.Fn.tolist(this.getListAttribute('url_exclusion_pattern_list'));
  }
  public set urlExclusionPatternList(value: string[]) {
    this._urlExclusionPatternList = value;
  }
  public resetUrlExclusionPatternList() {
    this._urlExclusionPatternList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlExclusionPatternListInput() {
    return this._urlExclusionPatternList;
  }

  // masking_presets - computed: false, optional: false, required: true
  private _maskingPresets = new SessionReplayWebPrivacyMaskingPresetsOutputReference(this, "masking_presets");
  public get maskingPresets() {
    return this._maskingPresets;
  }
  public putMaskingPresets(value: SessionReplayWebPrivacyMaskingPresets) {
    this._maskingPresets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPresetsInput() {
    return this._maskingPresets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      enable_opt_in_mode: cdktf.booleanToTerraform(this._enableOptInMode),
      id: cdktf.stringToTerraform(this._id),
      url_exclusion_pattern_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlExclusionPatternList),
      masking_presets: sessionReplayWebPrivacyMaskingPresetsToTerraform(this._maskingPresets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_opt_in_mode: {
        value: cdktf.booleanToHclTerraform(this._enableOptInMode),
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
      url_exclusion_pattern_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urlExclusionPatternList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      masking_presets: {
        value: sessionReplayWebPrivacyMaskingPresetsToHclTerraform(this._maskingPresets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SessionReplayWebPrivacyMaskingPresetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
