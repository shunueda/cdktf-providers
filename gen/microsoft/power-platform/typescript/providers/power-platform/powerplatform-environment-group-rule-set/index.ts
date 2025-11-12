// https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PowerplatformEnvironmentGroupRuleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique id of the environment group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#environment_group_id PowerplatformEnvironmentGroupRuleSet#environment_group_id}
  */
  readonly environmentGroupId: string;
  /**
  * Rules for the environment group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#rules PowerplatformEnvironmentGroupRuleSet#rules}
  */
  readonly rules?: PowerplatformEnvironmentGroupRuleSetRules;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#timeouts PowerplatformEnvironmentGroupRuleSet#timeouts}
  */
  readonly timeouts?: PowerplatformEnvironmentGroupRuleSetTimeouts;
}
export interface PowerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptions {
  /**
  * Enable AI generated description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#ai_description_enabled PowerplatformEnvironmentGroupRuleSet#ai_description_enabled}
  */
  readonly aiDescriptionEnabled: boolean | cdktf.IResolvable;
}

export function powerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptionsToTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_description_enabled: cdktf.booleanToTerraform(struct!.aiDescriptionEnabled),
  }
}


export function powerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptionsToHclTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_description_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.aiDescriptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiDescriptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiDescriptionEnabled = this._aiDescriptionEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiDescriptionEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiDescriptionEnabled = value.aiDescriptionEnabled;
    }
  }

  // ai_description_enabled - computed: false, optional: false, required: true
  private _aiDescriptionEnabled?: boolean | cdktf.IResolvable; 
  public get aiDescriptionEnabled() {
    return this.getBooleanAttribute('ai_description_enabled');
  }
  public set aiDescriptionEnabled(value: boolean | cdktf.IResolvable) {
    this._aiDescriptionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aiDescriptionEnabledInput() {
    return this._aiDescriptionEnabled;
  }
}
export interface PowerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettings {
  /**
  * Agree to enable Bing search features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#bing_search_enabled PowerplatformEnvironmentGroupRuleSet#bing_search_enabled}
  */
  readonly bingSearchEnabled: boolean | cdktf.IResolvable;
  /**
  * Agree to move data across regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#move_data_across_regions_enabled PowerplatformEnvironmentGroupRuleSet#move_data_across_regions_enabled}
  */
  readonly moveDataAcrossRegionsEnabled: boolean | cdktf.IResolvable;
}

export function powerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettingsToTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bing_search_enabled: cdktf.booleanToTerraform(struct!.bingSearchEnabled),
    move_data_across_regions_enabled: cdktf.booleanToTerraform(struct!.moveDataAcrossRegionsEnabled),
  }
}


export function powerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettingsToHclTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bing_search_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bingSearchEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    move_data_across_regions_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.moveDataAcrossRegionsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bingSearchEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bingSearchEnabled = this._bingSearchEnabled;
    }
    if (this._moveDataAcrossRegionsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.moveDataAcrossRegionsEnabled = this._moveDataAcrossRegionsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bingSearchEnabled = undefined;
      this._moveDataAcrossRegionsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bingSearchEnabled = value.bingSearchEnabled;
      this._moveDataAcrossRegionsEnabled = value.moveDataAcrossRegionsEnabled;
    }
  }

  // bing_search_enabled - computed: false, optional: false, required: true
  private _bingSearchEnabled?: boolean | cdktf.IResolvable; 
  public get bingSearchEnabled() {
    return this.getBooleanAttribute('bing_search_enabled');
  }
  public set bingSearchEnabled(value: boolean | cdktf.IResolvable) {
    this._bingSearchEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bingSearchEnabledInput() {
    return this._bingSearchEnabled;
  }

  // move_data_across_regions_enabled - computed: false, optional: false, required: true
  private _moveDataAcrossRegionsEnabled?: boolean | cdktf.IResolvable; 
  public get moveDataAcrossRegionsEnabled() {
    return this.getBooleanAttribute('move_data_across_regions_enabled');
  }
  public set moveDataAcrossRegionsEnabled(value: boolean | cdktf.IResolvable) {
    this._moveDataAcrossRegionsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moveDataAcrossRegionsEnabledInput() {
    return this._moveDataAcrossRegionsEnabled;
  }
}
export interface PowerplatformEnvironmentGroupRuleSetRulesBackupRetention {
  /**
  * Backup retention period in days: 7, 14, 21, 28
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#period_in_days PowerplatformEnvironmentGroupRuleSet#period_in_days}
  */
  readonly periodInDays: number;
}

export function powerplatformEnvironmentGroupRuleSetRulesBackupRetentionToTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesBackupRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period_in_days: cdktf.numberToTerraform(struct!.periodInDays),
  }
}


export function powerplatformEnvironmentGroupRuleSetRulesBackupRetentionToHclTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesBackupRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.periodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformEnvironmentGroupRuleSetRulesBackupRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformEnvironmentGroupRuleSetRulesBackupRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodInDays = this._periodInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformEnvironmentGroupRuleSetRulesBackupRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._periodInDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._periodInDays = value.periodInDays;
    }
  }

  // period_in_days - computed: false, optional: false, required: true
  private _periodInDays?: number; 
  public get periodInDays() {
    return this.getNumberAttribute('period_in_days');
  }
  public set periodInDays(value: number) {
    this._periodInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInDaysInput() {
    return this._periodInDays;
  }
}
export interface PowerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContent {
  /**
  * Maker onboarding markdown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#maker_onboarding_markdown PowerplatformEnvironmentGroupRuleSet#maker_onboarding_markdown}
  */
  readonly makerOnboardingMarkdown: string;
  /**
  * Maker onboarding URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#maker_onboarding_url PowerplatformEnvironmentGroupRuleSet#maker_onboarding_url}
  */
  readonly makerOnboardingUrl: string;
}

export function powerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContentToTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maker_onboarding_markdown: cdktf.stringToTerraform(struct!.makerOnboardingMarkdown),
    maker_onboarding_url: cdktf.stringToTerraform(struct!.makerOnboardingUrl),
  }
}


export function powerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContentToHclTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maker_onboarding_markdown: {
      value: cdktf.stringToHclTerraform(struct!.makerOnboardingMarkdown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maker_onboarding_url: {
      value: cdktf.stringToHclTerraform(struct!.makerOnboardingUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._makerOnboardingMarkdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.makerOnboardingMarkdown = this._makerOnboardingMarkdown;
    }
    if (this._makerOnboardingUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.makerOnboardingUrl = this._makerOnboardingUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._makerOnboardingMarkdown = undefined;
      this._makerOnboardingUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._makerOnboardingMarkdown = value.makerOnboardingMarkdown;
      this._makerOnboardingUrl = value.makerOnboardingUrl;
    }
  }

  // maker_onboarding_markdown - computed: false, optional: false, required: true
  private _makerOnboardingMarkdown?: string; 
  public get makerOnboardingMarkdown() {
    return this.getStringAttribute('maker_onboarding_markdown');
  }
  public set makerOnboardingMarkdown(value: string) {
    this._makerOnboardingMarkdown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get makerOnboardingMarkdownInput() {
    return this._makerOnboardingMarkdown;
  }

  // maker_onboarding_url - computed: false, optional: false, required: true
  private _makerOnboardingUrl?: string; 
  public get makerOnboardingUrl() {
    return this.getStringAttribute('maker_onboarding_url');
  }
  public set makerOnboardingUrl(value: string) {
    this._makerOnboardingUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get makerOnboardingUrlInput() {
    return this._makerOnboardingUrl;
  }
}
export interface PowerplatformEnvironmentGroupRuleSetRulesSharingControls {
  /**
  * Maximum total of individual who can be shared to: (-1..99). If `share_mode` is `No limit`, this value must be -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#share_max_limit PowerplatformEnvironmentGroupRuleSet#share_max_limit}
  */
  readonly shareMaxLimit?: number;
  /**
  * Share mode for canvas apps: `No limit`, `Exclude sharing with security groups`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#share_mode PowerplatformEnvironmentGroupRuleSet#share_mode}
  */
  readonly shareMode: string;
}

export function powerplatformEnvironmentGroupRuleSetRulesSharingControlsToTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesSharingControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    share_max_limit: cdktf.numberToTerraform(struct!.shareMaxLimit),
    share_mode: cdktf.stringToTerraform(struct!.shareMode),
  }
}


export function powerplatformEnvironmentGroupRuleSetRulesSharingControlsToHclTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesSharingControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    share_max_limit: {
      value: cdktf.numberToHclTerraform(struct!.shareMaxLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    share_mode: {
      value: cdktf.stringToHclTerraform(struct!.shareMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformEnvironmentGroupRuleSetRulesSharingControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformEnvironmentGroupRuleSetRulesSharingControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shareMaxLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareMaxLimit = this._shareMaxLimit;
    }
    if (this._shareMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareMode = this._shareMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformEnvironmentGroupRuleSetRulesSharingControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shareMaxLimit = undefined;
      this._shareMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shareMaxLimit = value.shareMaxLimit;
      this._shareMode = value.shareMode;
    }
  }

  // share_max_limit - computed: true, optional: true, required: false
  private _shareMaxLimit?: number; 
  public get shareMaxLimit() {
    return this.getNumberAttribute('share_max_limit');
  }
  public set shareMaxLimit(value: number) {
    this._shareMaxLimit = value;
  }
  public resetShareMaxLimit() {
    this._shareMaxLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareMaxLimitInput() {
    return this._shareMaxLimit;
  }

  // share_mode - computed: false, optional: false, required: true
  private _shareMode?: string; 
  public get shareMode() {
    return this.getStringAttribute('share_mode');
  }
  public set shareMode(value: string) {
    this._shareMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareModeInput() {
    return this._shareMode;
  }
}
export interface PowerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcement {
  /**
  * Send emails only when solution is blocked, if unchecked you'll also get emails when there are warnings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#send_emails_enabled PowerplatformEnvironmentGroupRuleSet#send_emails_enabled}
  */
  readonly sendEmailsEnabled: boolean | cdktf.IResolvable;
  /**
  * Solution checker enforceemnt mode: none, warm, block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#solution_checker_mode PowerplatformEnvironmentGroupRuleSet#solution_checker_mode}
  */
  readonly solutionCheckerMode: string;
}

export function powerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcementToTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send_emails_enabled: cdktf.booleanToTerraform(struct!.sendEmailsEnabled),
    solution_checker_mode: cdktf.stringToTerraform(struct!.solutionCheckerMode),
  }
}


export function powerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcementToHclTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    send_emails_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sendEmailsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    solution_checker_mode: {
      value: cdktf.stringToHclTerraform(struct!.solutionCheckerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendEmailsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendEmailsEnabled = this._sendEmailsEnabled;
    }
    if (this._solutionCheckerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.solutionCheckerMode = this._solutionCheckerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sendEmailsEnabled = undefined;
      this._solutionCheckerMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sendEmailsEnabled = value.sendEmailsEnabled;
      this._solutionCheckerMode = value.solutionCheckerMode;
    }
  }

  // send_emails_enabled - computed: false, optional: false, required: true
  private _sendEmailsEnabled?: boolean | cdktf.IResolvable; 
  public get sendEmailsEnabled() {
    return this.getBooleanAttribute('send_emails_enabled');
  }
  public set sendEmailsEnabled(value: boolean | cdktf.IResolvable) {
    this._sendEmailsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailsEnabledInput() {
    return this._sendEmailsEnabled;
  }

  // solution_checker_mode - computed: false, optional: false, required: true
  private _solutionCheckerMode?: string; 
  public get solutionCheckerMode() {
    return this.getStringAttribute('solution_checker_mode');
  }
  public set solutionCheckerMode(value: string) {
    this._solutionCheckerMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionCheckerModeInput() {
    return this._solutionCheckerMode;
  }
}
export interface PowerplatformEnvironmentGroupRuleSetRulesUsageInsights {
  /**
  * Inculde insights for all Managed Environment in this group in weekly email digest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#insights_enabled PowerplatformEnvironmentGroupRuleSet#insights_enabled}
  */
  readonly insightsEnabled: boolean | cdktf.IResolvable;
}

export function powerplatformEnvironmentGroupRuleSetRulesUsageInsightsToTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesUsageInsights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insights_enabled: cdktf.booleanToTerraform(struct!.insightsEnabled),
  }
}


export function powerplatformEnvironmentGroupRuleSetRulesUsageInsightsToHclTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRulesUsageInsights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insights_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.insightsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformEnvironmentGroupRuleSetRulesUsageInsightsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformEnvironmentGroupRuleSetRulesUsageInsights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insightsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsEnabled = this._insightsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformEnvironmentGroupRuleSetRulesUsageInsights | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insightsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insightsEnabled = value.insightsEnabled;
    }
  }

  // insights_enabled - computed: false, optional: false, required: true
  private _insightsEnabled?: boolean | cdktf.IResolvable; 
  public get insightsEnabled() {
    return this.getBooleanAttribute('insights_enabled');
  }
  public set insightsEnabled(value: boolean | cdktf.IResolvable) {
    this._insightsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsEnabledInput() {
    return this._insightsEnabled;
  }
}
export interface PowerplatformEnvironmentGroupRuleSetRules {
  /**
  * AI Generated Descriptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#ai_generated_descriptions PowerplatformEnvironmentGroupRuleSet#ai_generated_descriptions}
  */
  readonly aiGeneratedDescriptions?: PowerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptions;
  /**
  * AI Generative Settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#ai_generative_settings PowerplatformEnvironmentGroupRuleSet#ai_generative_settings}
  */
  readonly aiGenerativeSettings?: PowerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettings;
  /**
  * Backup Retention
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#backup_retention PowerplatformEnvironmentGroupRuleSet#backup_retention}
  */
  readonly backupRetention?: PowerplatformEnvironmentGroupRuleSetRulesBackupRetention;
  /**
  * Maker Welcome Content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#maker_welcome_content PowerplatformEnvironmentGroupRuleSet#maker_welcome_content}
  */
  readonly makerWelcomeContent?: PowerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContent;
  /**
  * Sharing controls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#sharing_controls PowerplatformEnvironmentGroupRuleSet#sharing_controls}
  */
  readonly sharingControls?: PowerplatformEnvironmentGroupRuleSetRulesSharingControls;
  /**
  * Solution Checker Enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#solution_checker_enforcement PowerplatformEnvironmentGroupRuleSet#solution_checker_enforcement}
  */
  readonly solutionCheckerEnforcement?: PowerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcement;
  /**
  * Usage Insights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#usage_insights PowerplatformEnvironmentGroupRuleSet#usage_insights}
  */
  readonly usageInsights?: PowerplatformEnvironmentGroupRuleSetRulesUsageInsights;
}

export function powerplatformEnvironmentGroupRuleSetRulesToTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_generated_descriptions: powerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptionsToTerraform(struct!.aiGeneratedDescriptions),
    ai_generative_settings: powerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettingsToTerraform(struct!.aiGenerativeSettings),
    backup_retention: powerplatformEnvironmentGroupRuleSetRulesBackupRetentionToTerraform(struct!.backupRetention),
    maker_welcome_content: powerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContentToTerraform(struct!.makerWelcomeContent),
    sharing_controls: powerplatformEnvironmentGroupRuleSetRulesSharingControlsToTerraform(struct!.sharingControls),
    solution_checker_enforcement: powerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcementToTerraform(struct!.solutionCheckerEnforcement),
    usage_insights: powerplatformEnvironmentGroupRuleSetRulesUsageInsightsToTerraform(struct!.usageInsights),
  }
}


export function powerplatformEnvironmentGroupRuleSetRulesToHclTerraform(struct?: PowerplatformEnvironmentGroupRuleSetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_generated_descriptions: {
      value: powerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptionsToHclTerraform(struct!.aiGeneratedDescriptions),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptions",
    },
    ai_generative_settings: {
      value: powerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettingsToHclTerraform(struct!.aiGenerativeSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettings",
    },
    backup_retention: {
      value: powerplatformEnvironmentGroupRuleSetRulesBackupRetentionToHclTerraform(struct!.backupRetention),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformEnvironmentGroupRuleSetRulesBackupRetention",
    },
    maker_welcome_content: {
      value: powerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContentToHclTerraform(struct!.makerWelcomeContent),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContent",
    },
    sharing_controls: {
      value: powerplatformEnvironmentGroupRuleSetRulesSharingControlsToHclTerraform(struct!.sharingControls),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformEnvironmentGroupRuleSetRulesSharingControls",
    },
    solution_checker_enforcement: {
      value: powerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcementToHclTerraform(struct!.solutionCheckerEnforcement),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcement",
    },
    usage_insights: {
      value: powerplatformEnvironmentGroupRuleSetRulesUsageInsightsToHclTerraform(struct!.usageInsights),
      isBlock: true,
      type: "struct",
      storageClassType: "PowerplatformEnvironmentGroupRuleSetRulesUsageInsights",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformEnvironmentGroupRuleSetRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformEnvironmentGroupRuleSetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiGeneratedDescriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiGeneratedDescriptions = this._aiGeneratedDescriptions?.internalValue;
    }
    if (this._aiGenerativeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiGenerativeSettings = this._aiGenerativeSettings?.internalValue;
    }
    if (this._backupRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetention = this._backupRetention?.internalValue;
    }
    if (this._makerWelcomeContent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.makerWelcomeContent = this._makerWelcomeContent?.internalValue;
    }
    if (this._sharingControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharingControls = this._sharingControls?.internalValue;
    }
    if (this._solutionCheckerEnforcement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.solutionCheckerEnforcement = this._solutionCheckerEnforcement?.internalValue;
    }
    if (this._usageInsights?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageInsights = this._usageInsights?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformEnvironmentGroupRuleSetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiGeneratedDescriptions.internalValue = undefined;
      this._aiGenerativeSettings.internalValue = undefined;
      this._backupRetention.internalValue = undefined;
      this._makerWelcomeContent.internalValue = undefined;
      this._sharingControls.internalValue = undefined;
      this._solutionCheckerEnforcement.internalValue = undefined;
      this._usageInsights.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiGeneratedDescriptions.internalValue = value.aiGeneratedDescriptions;
      this._aiGenerativeSettings.internalValue = value.aiGenerativeSettings;
      this._backupRetention.internalValue = value.backupRetention;
      this._makerWelcomeContent.internalValue = value.makerWelcomeContent;
      this._sharingControls.internalValue = value.sharingControls;
      this._solutionCheckerEnforcement.internalValue = value.solutionCheckerEnforcement;
      this._usageInsights.internalValue = value.usageInsights;
    }
  }

  // ai_generated_descriptions - computed: false, optional: true, required: false
  private _aiGeneratedDescriptions = new PowerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptionsOutputReference(this, "ai_generated_descriptions");
  public get aiGeneratedDescriptions() {
    return this._aiGeneratedDescriptions;
  }
  public putAiGeneratedDescriptions(value: PowerplatformEnvironmentGroupRuleSetRulesAiGeneratedDescriptions) {
    this._aiGeneratedDescriptions.internalValue = value;
  }
  public resetAiGeneratedDescriptions() {
    this._aiGeneratedDescriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiGeneratedDescriptionsInput() {
    return this._aiGeneratedDescriptions.internalValue;
  }

  // ai_generative_settings - computed: false, optional: true, required: false
  private _aiGenerativeSettings = new PowerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettingsOutputReference(this, "ai_generative_settings");
  public get aiGenerativeSettings() {
    return this._aiGenerativeSettings;
  }
  public putAiGenerativeSettings(value: PowerplatformEnvironmentGroupRuleSetRulesAiGenerativeSettings) {
    this._aiGenerativeSettings.internalValue = value;
  }
  public resetAiGenerativeSettings() {
    this._aiGenerativeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiGenerativeSettingsInput() {
    return this._aiGenerativeSettings.internalValue;
  }

  // backup_retention - computed: false, optional: true, required: false
  private _backupRetention = new PowerplatformEnvironmentGroupRuleSetRulesBackupRetentionOutputReference(this, "backup_retention");
  public get backupRetention() {
    return this._backupRetention;
  }
  public putBackupRetention(value: PowerplatformEnvironmentGroupRuleSetRulesBackupRetention) {
    this._backupRetention.internalValue = value;
  }
  public resetBackupRetention() {
    this._backupRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionInput() {
    return this._backupRetention.internalValue;
  }

  // maker_welcome_content - computed: false, optional: true, required: false
  private _makerWelcomeContent = new PowerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContentOutputReference(this, "maker_welcome_content");
  public get makerWelcomeContent() {
    return this._makerWelcomeContent;
  }
  public putMakerWelcomeContent(value: PowerplatformEnvironmentGroupRuleSetRulesMakerWelcomeContent) {
    this._makerWelcomeContent.internalValue = value;
  }
  public resetMakerWelcomeContent() {
    this._makerWelcomeContent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get makerWelcomeContentInput() {
    return this._makerWelcomeContent.internalValue;
  }

  // sharing_controls - computed: false, optional: true, required: false
  private _sharingControls = new PowerplatformEnvironmentGroupRuleSetRulesSharingControlsOutputReference(this, "sharing_controls");
  public get sharingControls() {
    return this._sharingControls;
  }
  public putSharingControls(value: PowerplatformEnvironmentGroupRuleSetRulesSharingControls) {
    this._sharingControls.internalValue = value;
  }
  public resetSharingControls() {
    this._sharingControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingControlsInput() {
    return this._sharingControls.internalValue;
  }

  // solution_checker_enforcement - computed: false, optional: true, required: false
  private _solutionCheckerEnforcement = new PowerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcementOutputReference(this, "solution_checker_enforcement");
  public get solutionCheckerEnforcement() {
    return this._solutionCheckerEnforcement;
  }
  public putSolutionCheckerEnforcement(value: PowerplatformEnvironmentGroupRuleSetRulesSolutionCheckerEnforcement) {
    this._solutionCheckerEnforcement.internalValue = value;
  }
  public resetSolutionCheckerEnforcement() {
    this._solutionCheckerEnforcement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionCheckerEnforcementInput() {
    return this._solutionCheckerEnforcement.internalValue;
  }

  // usage_insights - computed: false, optional: true, required: false
  private _usageInsights = new PowerplatformEnvironmentGroupRuleSetRulesUsageInsightsOutputReference(this, "usage_insights");
  public get usageInsights() {
    return this._usageInsights;
  }
  public putUsageInsights(value: PowerplatformEnvironmentGroupRuleSetRulesUsageInsights) {
    this._usageInsights.internalValue = value;
  }
  public resetUsageInsights() {
    this._usageInsights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInsightsInput() {
    return this._usageInsights.internalValue;
  }
}
export interface PowerplatformEnvironmentGroupRuleSetTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#create PowerplatformEnvironmentGroupRuleSet#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#delete PowerplatformEnvironmentGroupRuleSet#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#read PowerplatformEnvironmentGroupRuleSet#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#update PowerplatformEnvironmentGroupRuleSet#update}
  */
  readonly update?: string;
}

export function powerplatformEnvironmentGroupRuleSetTimeoutsToTerraform(struct?: PowerplatformEnvironmentGroupRuleSetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function powerplatformEnvironmentGroupRuleSetTimeoutsToHclTerraform(struct?: PowerplatformEnvironmentGroupRuleSetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformEnvironmentGroupRuleSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformEnvironmentGroupRuleSetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformEnvironmentGroupRuleSetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set powerplatform_environment_group_rule_set}
*/
export class PowerplatformEnvironmentGroupRuleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_environment_group_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PowerplatformEnvironmentGroupRuleSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PowerplatformEnvironmentGroupRuleSet to import
  * @param importFromId The id of the existing PowerplatformEnvironmentGroupRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PowerplatformEnvironmentGroupRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_environment_group_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_environment_group_rule_set powerplatform_environment_group_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowerplatformEnvironmentGroupRuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: PowerplatformEnvironmentGroupRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_environment_group_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '3.9.1',
        providerVersionConstraint: '3.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentGroupId = config.environmentGroupId;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_group_id - computed: false, optional: false, required: true
  private _environmentGroupId?: string; 
  public get environmentGroupId() {
    return this.getStringAttribute('environment_group_id');
  }
  public set environmentGroupId(value: string) {
    this._environmentGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentGroupIdInput() {
    return this._environmentGroupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new PowerplatformEnvironmentGroupRuleSetRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: PowerplatformEnvironmentGroupRuleSetRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PowerplatformEnvironmentGroupRuleSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PowerplatformEnvironmentGroupRuleSetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_group_id: cdktf.stringToTerraform(this._environmentGroupId),
      rules: powerplatformEnvironmentGroupRuleSetRulesToTerraform(this._rules.internalValue),
      timeouts: powerplatformEnvironmentGroupRuleSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_group_id: {
        value: cdktf.stringToHclTerraform(this._environmentGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: powerplatformEnvironmentGroupRuleSetRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PowerplatformEnvironmentGroupRuleSetRules",
      },
      timeouts: {
        value: powerplatformEnvironmentGroupRuleSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PowerplatformEnvironmentGroupRuleSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
