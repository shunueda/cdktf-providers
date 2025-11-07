// https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the configuration is active and can be used to create portal sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#active PortalConfiguration#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be overriden when creating the session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#default_return_url PortalConfiguration#default_return_url}
  */
  readonly defaultReturnUrl?: string;
  /**
  * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#metadata PortalConfiguration#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * business_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#business_profile PortalConfiguration#business_profile}
  */
  readonly businessProfile: PortalConfigurationBusinessProfile;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#features PortalConfiguration#features}
  */
  readonly features: PortalConfigurationFeatures;
  /**
  * login_page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#login_page PortalConfiguration#login_page}
  */
  readonly loginPage?: PortalConfigurationLoginPage;
}
export interface PortalConfigurationBusinessProfile {
  /**
  * The messaging shown to customers in the portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#headline PortalConfiguration#headline}
  */
  readonly headline?: string;
  /**
  * A link to the business's publicly available privacy policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#privacy_policy_url PortalConfiguration#privacy_policy_url}
  */
  readonly privacyPolicyUrl?: string;
  /**
  * A link to the business's publicly available terms of service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#terms_of_service_url PortalConfiguration#terms_of_service_url}
  */
  readonly termsOfServiceUrl?: string;
}

export function portalConfigurationBusinessProfileToTerraform(struct?: PortalConfigurationBusinessProfileOutputReference | PortalConfigurationBusinessProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headline: cdktf.stringToTerraform(struct!.headline),
    privacy_policy_url: cdktf.stringToTerraform(struct!.privacyPolicyUrl),
    terms_of_service_url: cdktf.stringToTerraform(struct!.termsOfServiceUrl),
  }
}


export function portalConfigurationBusinessProfileToHclTerraform(struct?: PortalConfigurationBusinessProfileOutputReference | PortalConfigurationBusinessProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headline: {
      value: cdktf.stringToHclTerraform(struct!.headline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_policy_url: {
      value: cdktf.stringToHclTerraform(struct!.privacyPolicyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terms_of_service_url: {
      value: cdktf.stringToHclTerraform(struct!.termsOfServiceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalConfigurationBusinessProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PortalConfigurationBusinessProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headline !== undefined) {
      hasAnyValues = true;
      internalValueResult.headline = this._headline;
    }
    if (this._privacyPolicyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPolicyUrl = this._privacyPolicyUrl;
    }
    if (this._termsOfServiceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.termsOfServiceUrl = this._termsOfServiceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalConfigurationBusinessProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headline = undefined;
      this._privacyPolicyUrl = undefined;
      this._termsOfServiceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headline = value.headline;
      this._privacyPolicyUrl = value.privacyPolicyUrl;
      this._termsOfServiceUrl = value.termsOfServiceUrl;
    }
  }

  // headline - computed: false, optional: true, required: false
  private _headline?: string; 
  public get headline() {
    return this.getStringAttribute('headline');
  }
  public set headline(value: string) {
    this._headline = value;
  }
  public resetHeadline() {
    this._headline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headlineInput() {
    return this._headline;
  }

  // privacy_policy_url - computed: false, optional: true, required: false
  private _privacyPolicyUrl?: string; 
  public get privacyPolicyUrl() {
    return this.getStringAttribute('privacy_policy_url');
  }
  public set privacyPolicyUrl(value: string) {
    this._privacyPolicyUrl = value;
  }
  public resetPrivacyPolicyUrl() {
    this._privacyPolicyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyUrlInput() {
    return this._privacyPolicyUrl;
  }

  // terms_of_service_url - computed: false, optional: true, required: false
  private _termsOfServiceUrl?: string; 
  public get termsOfServiceUrl() {
    return this.getStringAttribute('terms_of_service_url');
  }
  public set termsOfServiceUrl(value: string) {
    this._termsOfServiceUrl = value;
  }
  public resetTermsOfServiceUrl() {
    this._termsOfServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsOfServiceUrlInput() {
    return this._termsOfServiceUrl;
  }
}
export interface PortalConfigurationFeaturesCustomerUpdate {
  /**
  * The types of customer updates that are supported. When empty, customers are not updatable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#allowed_updates PortalConfiguration#allowed_updates}
  */
  readonly allowedUpdates?: string[];
  /**
  * Whether the feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#enabled PortalConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function portalConfigurationFeaturesCustomerUpdateToTerraform(struct?: PortalConfigurationFeaturesCustomerUpdateOutputReference | PortalConfigurationFeaturesCustomerUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_updates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUpdates),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function portalConfigurationFeaturesCustomerUpdateToHclTerraform(struct?: PortalConfigurationFeaturesCustomerUpdateOutputReference | PortalConfigurationFeaturesCustomerUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_updates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUpdates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class PortalConfigurationFeaturesCustomerUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PortalConfigurationFeaturesCustomerUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUpdates = this._allowedUpdates;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalConfigurationFeaturesCustomerUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedUpdates = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedUpdates = value.allowedUpdates;
      this._enabled = value.enabled;
    }
  }

  // allowed_updates - computed: false, optional: true, required: false
  private _allowedUpdates?: string[]; 
  public get allowedUpdates() {
    return this.getListAttribute('allowed_updates');
  }
  public set allowedUpdates(value: string[]) {
    this._allowedUpdates = value;
  }
  public resetAllowedUpdates() {
    this._allowedUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUpdatesInput() {
    return this._allowedUpdates;
  }

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
}
export interface PortalConfigurationFeaturesInvoiceHistory {
  /**
  * Whether the feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#enabled PortalConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function portalConfigurationFeaturesInvoiceHistoryToTerraform(struct?: PortalConfigurationFeaturesInvoiceHistoryOutputReference | PortalConfigurationFeaturesInvoiceHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function portalConfigurationFeaturesInvoiceHistoryToHclTerraform(struct?: PortalConfigurationFeaturesInvoiceHistoryOutputReference | PortalConfigurationFeaturesInvoiceHistory): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalConfigurationFeaturesInvoiceHistoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PortalConfigurationFeaturesInvoiceHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalConfigurationFeaturesInvoiceHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

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
}
export interface PortalConfigurationFeaturesPaymentMethodUpdate {
  /**
  * Whether the feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#enabled PortalConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function portalConfigurationFeaturesPaymentMethodUpdateToTerraform(struct?: PortalConfigurationFeaturesPaymentMethodUpdateOutputReference | PortalConfigurationFeaturesPaymentMethodUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function portalConfigurationFeaturesPaymentMethodUpdateToHclTerraform(struct?: PortalConfigurationFeaturesPaymentMethodUpdateOutputReference | PortalConfigurationFeaturesPaymentMethodUpdate): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalConfigurationFeaturesPaymentMethodUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PortalConfigurationFeaturesPaymentMethodUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalConfigurationFeaturesPaymentMethodUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

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
}
export interface PortalConfigurationFeaturesSubscriptionCancelCancellationReason {
  /**
  * Whether the feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#enabled PortalConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Which cancellation reasons will be given as options to the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#options PortalConfiguration#options}
  */
  readonly options: string[];
}

export function portalConfigurationFeaturesSubscriptionCancelCancellationReasonToTerraform(struct?: PortalConfigurationFeaturesSubscriptionCancelCancellationReasonOutputReference | PortalConfigurationFeaturesSubscriptionCancelCancellationReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
  }
}


export function portalConfigurationFeaturesSubscriptionCancelCancellationReasonToHclTerraform(struct?: PortalConfigurationFeaturesSubscriptionCancelCancellationReasonOutputReference | PortalConfigurationFeaturesSubscriptionCancelCancellationReason): any {
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
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalConfigurationFeaturesSubscriptionCancelCancellationReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PortalConfigurationFeaturesSubscriptionCancelCancellationReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalConfigurationFeaturesSubscriptionCancelCancellationReason | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._options = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._options = value.options;
    }
  }

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

  // options - computed: false, optional: false, required: true
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }
}
export interface PortalConfigurationFeaturesSubscriptionCancel {
  /**
  * Whether the feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#enabled PortalConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Whether to cancel subscriptions immediately or at the end of the billing period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#mode PortalConfiguration#mode}
  */
  readonly mode?: string;
  /**
  * Whether to create prorations when canceling subscriptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#proration_behavior PortalConfiguration#proration_behavior}
  */
  readonly prorationBehavior?: string;
  /**
  * cancellation_reason block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#cancellation_reason PortalConfiguration#cancellation_reason}
  */
  readonly cancellationReason?: PortalConfigurationFeaturesSubscriptionCancelCancellationReason;
}

export function portalConfigurationFeaturesSubscriptionCancelToTerraform(struct?: PortalConfigurationFeaturesSubscriptionCancelOutputReference | PortalConfigurationFeaturesSubscriptionCancel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mode: cdktf.stringToTerraform(struct!.mode),
    proration_behavior: cdktf.stringToTerraform(struct!.prorationBehavior),
    cancellation_reason: portalConfigurationFeaturesSubscriptionCancelCancellationReasonToTerraform(struct!.cancellationReason),
  }
}


export function portalConfigurationFeaturesSubscriptionCancelToHclTerraform(struct?: PortalConfigurationFeaturesSubscriptionCancelOutputReference | PortalConfigurationFeaturesSubscriptionCancel): any {
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
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proration_behavior: {
      value: cdktf.stringToHclTerraform(struct!.prorationBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cancellation_reason: {
      value: portalConfigurationFeaturesSubscriptionCancelCancellationReasonToHclTerraform(struct!.cancellationReason),
      isBlock: true,
      type: "list",
      storageClassType: "PortalConfigurationFeaturesSubscriptionCancelCancellationReasonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalConfigurationFeaturesSubscriptionCancelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PortalConfigurationFeaturesSubscriptionCancel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._prorationBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.prorationBehavior = this._prorationBehavior;
    }
    if (this._cancellationReason?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationReason = this._cancellationReason?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalConfigurationFeaturesSubscriptionCancel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._mode = undefined;
      this._prorationBehavior = undefined;
      this._cancellationReason.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._mode = value.mode;
      this._prorationBehavior = value.prorationBehavior;
      this._cancellationReason.internalValue = value.cancellationReason;
    }
  }

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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // proration_behavior - computed: false, optional: true, required: false
  private _prorationBehavior?: string; 
  public get prorationBehavior() {
    return this.getStringAttribute('proration_behavior');
  }
  public set prorationBehavior(value: string) {
    this._prorationBehavior = value;
  }
  public resetProrationBehavior() {
    this._prorationBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prorationBehaviorInput() {
    return this._prorationBehavior;
  }

  // cancellation_reason - computed: false, optional: true, required: false
  private _cancellationReason = new PortalConfigurationFeaturesSubscriptionCancelCancellationReasonOutputReference(this, "cancellation_reason");
  public get cancellationReason() {
    return this._cancellationReason;
  }
  public putCancellationReason(value: PortalConfigurationFeaturesSubscriptionCancelCancellationReason) {
    this._cancellationReason.internalValue = value;
  }
  public resetCancellationReason() {
    this._cancellationReason.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationReasonInput() {
    return this._cancellationReason.internalValue;
  }
}
export interface PortalConfigurationFeaturesSubscriptionUpdateProducts {
  /**
  * The list of price IDs for the product that a subscription can be updated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#prices PortalConfiguration#prices}
  */
  readonly prices: string[];
  /**
  * The product id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#product PortalConfiguration#product}
  */
  readonly product: string;
}

export function portalConfigurationFeaturesSubscriptionUpdateProductsToTerraform(struct?: PortalConfigurationFeaturesSubscriptionUpdateProducts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prices),
    product: cdktf.stringToTerraform(struct!.product),
  }
}


export function portalConfigurationFeaturesSubscriptionUpdateProductsToHclTerraform(struct?: PortalConfigurationFeaturesSubscriptionUpdateProducts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalConfigurationFeaturesSubscriptionUpdateProductsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortalConfigurationFeaturesSubscriptionUpdateProducts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prices !== undefined) {
      hasAnyValues = true;
      internalValueResult.prices = this._prices;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalConfigurationFeaturesSubscriptionUpdateProducts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prices = undefined;
      this._product = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prices = value.prices;
      this._product = value.product;
    }
  }

  // prices - computed: false, optional: false, required: true
  private _prices?: string[]; 
  public get prices() {
    return this.getListAttribute('prices');
  }
  public set prices(value: string[]) {
    this._prices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pricesInput() {
    return this._prices;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }
}

export class PortalConfigurationFeaturesSubscriptionUpdateProductsList extends cdktf.ComplexList {
  public internalValue? : PortalConfigurationFeaturesSubscriptionUpdateProducts[] | cdktf.IResolvable

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
  public get(index: number): PortalConfigurationFeaturesSubscriptionUpdateProductsOutputReference {
    return new PortalConfigurationFeaturesSubscriptionUpdateProductsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortalConfigurationFeaturesSubscriptionUpdate {
  /**
  * The types of subscription updates that are supported. When empty, subscriptions are not updateable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#default_allowed_updates PortalConfiguration#default_allowed_updates}
  */
  readonly defaultAllowedUpdates: string[];
  /**
  * Whether the feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#enabled PortalConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Determines how to handle prorations resulting from subscription updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#proration_behavior PortalConfiguration#proration_behavior}
  */
  readonly prorationBehavior?: string;
  /**
  * products block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#products PortalConfiguration#products}
  */
  readonly products: PortalConfigurationFeaturesSubscriptionUpdateProducts[] | cdktf.IResolvable;
}

export function portalConfigurationFeaturesSubscriptionUpdateToTerraform(struct?: PortalConfigurationFeaturesSubscriptionUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_allowed_updates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultAllowedUpdates),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    proration_behavior: cdktf.stringToTerraform(struct!.prorationBehavior),
    products: cdktf.listMapper(portalConfigurationFeaturesSubscriptionUpdateProductsToTerraform, true)(struct!.products),
  }
}


export function portalConfigurationFeaturesSubscriptionUpdateToHclTerraform(struct?: PortalConfigurationFeaturesSubscriptionUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_allowed_updates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultAllowedUpdates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proration_behavior: {
      value: cdktf.stringToHclTerraform(struct!.prorationBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    products: {
      value: cdktf.listMapperHcl(portalConfigurationFeaturesSubscriptionUpdateProductsToHclTerraform, true)(struct!.products),
      isBlock: true,
      type: "list",
      storageClassType: "PortalConfigurationFeaturesSubscriptionUpdateProductsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalConfigurationFeaturesSubscriptionUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortalConfigurationFeaturesSubscriptionUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAllowedUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAllowedUpdates = this._defaultAllowedUpdates;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._prorationBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.prorationBehavior = this._prorationBehavior;
    }
    if (this._products?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.products = this._products?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalConfigurationFeaturesSubscriptionUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAllowedUpdates = undefined;
      this._enabled = undefined;
      this._prorationBehavior = undefined;
      this._products.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultAllowedUpdates = value.defaultAllowedUpdates;
      this._enabled = value.enabled;
      this._prorationBehavior = value.prorationBehavior;
      this._products.internalValue = value.products;
    }
  }

  // default_allowed_updates - computed: false, optional: false, required: true
  private _defaultAllowedUpdates?: string[]; 
  public get defaultAllowedUpdates() {
    return this.getListAttribute('default_allowed_updates');
  }
  public set defaultAllowedUpdates(value: string[]) {
    this._defaultAllowedUpdates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAllowedUpdatesInput() {
    return this._defaultAllowedUpdates;
  }

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

  // proration_behavior - computed: false, optional: true, required: false
  private _prorationBehavior?: string; 
  public get prorationBehavior() {
    return this.getStringAttribute('proration_behavior');
  }
  public set prorationBehavior(value: string) {
    this._prorationBehavior = value;
  }
  public resetProrationBehavior() {
    this._prorationBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prorationBehaviorInput() {
    return this._prorationBehavior;
  }

  // products - computed: false, optional: false, required: true
  private _products = new PortalConfigurationFeaturesSubscriptionUpdateProductsList(this, "products", false);
  public get products() {
    return this._products;
  }
  public putProducts(value: PortalConfigurationFeaturesSubscriptionUpdateProducts[] | cdktf.IResolvable) {
    this._products.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productsInput() {
    return this._products.internalValue;
  }
}

export class PortalConfigurationFeaturesSubscriptionUpdateList extends cdktf.ComplexList {
  public internalValue? : PortalConfigurationFeaturesSubscriptionUpdate[] | cdktf.IResolvable

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
  public get(index: number): PortalConfigurationFeaturesSubscriptionUpdateOutputReference {
    return new PortalConfigurationFeaturesSubscriptionUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortalConfigurationFeatures {
  /**
  * customer_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#customer_update PortalConfiguration#customer_update}
  */
  readonly customerUpdate?: PortalConfigurationFeaturesCustomerUpdate;
  /**
  * invoice_history block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#invoice_history PortalConfiguration#invoice_history}
  */
  readonly invoiceHistory?: PortalConfigurationFeaturesInvoiceHistory;
  /**
  * payment_method_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#payment_method_update PortalConfiguration#payment_method_update}
  */
  readonly paymentMethodUpdate?: PortalConfigurationFeaturesPaymentMethodUpdate;
  /**
  * subscription_cancel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#subscription_cancel PortalConfiguration#subscription_cancel}
  */
  readonly subscriptionCancel?: PortalConfigurationFeaturesSubscriptionCancel;
  /**
  * subscription_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#subscription_update PortalConfiguration#subscription_update}
  */
  readonly subscriptionUpdate?: PortalConfigurationFeaturesSubscriptionUpdate[] | cdktf.IResolvable;
}

export function portalConfigurationFeaturesToTerraform(struct?: PortalConfigurationFeaturesOutputReference | PortalConfigurationFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_update: portalConfigurationFeaturesCustomerUpdateToTerraform(struct!.customerUpdate),
    invoice_history: portalConfigurationFeaturesInvoiceHistoryToTerraform(struct!.invoiceHistory),
    payment_method_update: portalConfigurationFeaturesPaymentMethodUpdateToTerraform(struct!.paymentMethodUpdate),
    subscription_cancel: portalConfigurationFeaturesSubscriptionCancelToTerraform(struct!.subscriptionCancel),
    subscription_update: cdktf.listMapper(portalConfigurationFeaturesSubscriptionUpdateToTerraform, true)(struct!.subscriptionUpdate),
  }
}


export function portalConfigurationFeaturesToHclTerraform(struct?: PortalConfigurationFeaturesOutputReference | PortalConfigurationFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_update: {
      value: portalConfigurationFeaturesCustomerUpdateToHclTerraform(struct!.customerUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "PortalConfigurationFeaturesCustomerUpdateList",
    },
    invoice_history: {
      value: portalConfigurationFeaturesInvoiceHistoryToHclTerraform(struct!.invoiceHistory),
      isBlock: true,
      type: "list",
      storageClassType: "PortalConfigurationFeaturesInvoiceHistoryList",
    },
    payment_method_update: {
      value: portalConfigurationFeaturesPaymentMethodUpdateToHclTerraform(struct!.paymentMethodUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "PortalConfigurationFeaturesPaymentMethodUpdateList",
    },
    subscription_cancel: {
      value: portalConfigurationFeaturesSubscriptionCancelToHclTerraform(struct!.subscriptionCancel),
      isBlock: true,
      type: "list",
      storageClassType: "PortalConfigurationFeaturesSubscriptionCancelList",
    },
    subscription_update: {
      value: cdktf.listMapperHcl(portalConfigurationFeaturesSubscriptionUpdateToHclTerraform, true)(struct!.subscriptionUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "PortalConfigurationFeaturesSubscriptionUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalConfigurationFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PortalConfigurationFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerUpdate = this._customerUpdate?.internalValue;
    }
    if (this._invoiceHistory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invoiceHistory = this._invoiceHistory?.internalValue;
    }
    if (this._paymentMethodUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentMethodUpdate = this._paymentMethodUpdate?.internalValue;
    }
    if (this._subscriptionCancel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionCancel = this._subscriptionCancel?.internalValue;
    }
    if (this._subscriptionUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionUpdate = this._subscriptionUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalConfigurationFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerUpdate.internalValue = undefined;
      this._invoiceHistory.internalValue = undefined;
      this._paymentMethodUpdate.internalValue = undefined;
      this._subscriptionCancel.internalValue = undefined;
      this._subscriptionUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerUpdate.internalValue = value.customerUpdate;
      this._invoiceHistory.internalValue = value.invoiceHistory;
      this._paymentMethodUpdate.internalValue = value.paymentMethodUpdate;
      this._subscriptionCancel.internalValue = value.subscriptionCancel;
      this._subscriptionUpdate.internalValue = value.subscriptionUpdate;
    }
  }

  // customer_update - computed: false, optional: true, required: false
  private _customerUpdate = new PortalConfigurationFeaturesCustomerUpdateOutputReference(this, "customer_update");
  public get customerUpdate() {
    return this._customerUpdate;
  }
  public putCustomerUpdate(value: PortalConfigurationFeaturesCustomerUpdate) {
    this._customerUpdate.internalValue = value;
  }
  public resetCustomerUpdate() {
    this._customerUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerUpdateInput() {
    return this._customerUpdate.internalValue;
  }

  // invoice_history - computed: false, optional: true, required: false
  private _invoiceHistory = new PortalConfigurationFeaturesInvoiceHistoryOutputReference(this, "invoice_history");
  public get invoiceHistory() {
    return this._invoiceHistory;
  }
  public putInvoiceHistory(value: PortalConfigurationFeaturesInvoiceHistory) {
    this._invoiceHistory.internalValue = value;
  }
  public resetInvoiceHistory() {
    this._invoiceHistory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invoiceHistoryInput() {
    return this._invoiceHistory.internalValue;
  }

  // payment_method_update - computed: false, optional: true, required: false
  private _paymentMethodUpdate = new PortalConfigurationFeaturesPaymentMethodUpdateOutputReference(this, "payment_method_update");
  public get paymentMethodUpdate() {
    return this._paymentMethodUpdate;
  }
  public putPaymentMethodUpdate(value: PortalConfigurationFeaturesPaymentMethodUpdate) {
    this._paymentMethodUpdate.internalValue = value;
  }
  public resetPaymentMethodUpdate() {
    this._paymentMethodUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentMethodUpdateInput() {
    return this._paymentMethodUpdate.internalValue;
  }

  // subscription_cancel - computed: false, optional: true, required: false
  private _subscriptionCancel = new PortalConfigurationFeaturesSubscriptionCancelOutputReference(this, "subscription_cancel");
  public get subscriptionCancel() {
    return this._subscriptionCancel;
  }
  public putSubscriptionCancel(value: PortalConfigurationFeaturesSubscriptionCancel) {
    this._subscriptionCancel.internalValue = value;
  }
  public resetSubscriptionCancel() {
    this._subscriptionCancel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionCancelInput() {
    return this._subscriptionCancel.internalValue;
  }

  // subscription_update - computed: false, optional: true, required: false
  private _subscriptionUpdate = new PortalConfigurationFeaturesSubscriptionUpdateList(this, "subscription_update", false);
  public get subscriptionUpdate() {
    return this._subscriptionUpdate;
  }
  public putSubscriptionUpdate(value: PortalConfigurationFeaturesSubscriptionUpdate[] | cdktf.IResolvable) {
    this._subscriptionUpdate.internalValue = value;
  }
  public resetSubscriptionUpdate() {
    this._subscriptionUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionUpdateInput() {
    return this._subscriptionUpdate.internalValue;
  }
}
export interface PortalConfigurationLoginPage {
  /**
  * Set to true to generate a shareable URL login_page.url that will take your customers to a hosted login page for the customer portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#enabled PortalConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function portalConfigurationLoginPageToTerraform(struct?: PortalConfigurationLoginPageOutputReference | PortalConfigurationLoginPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function portalConfigurationLoginPageToHclTerraform(struct?: PortalConfigurationLoginPageOutputReference | PortalConfigurationLoginPage): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalConfigurationLoginPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PortalConfigurationLoginPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalConfigurationLoginPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration stripe_portal_configuration}
*/
export class PortalConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_portal_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortalConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortalConfiguration to import
  * @param importFromId The id of the existing PortalConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortalConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_portal_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/portal_configuration stripe_portal_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: PortalConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_portal_configuration',
      terraformGeneratorMetadata: {
        providerName: 'stripe',
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._defaultReturnUrl = config.defaultReturnUrl;
    this._metadata = config.metadata;
    this._businessProfile.internalValue = config.businessProfile;
    this._features.internalValue = config.features;
    this._loginPage.internalValue = config.loginPage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // default_return_url - computed: false, optional: true, required: false
  private _defaultReturnUrl?: string; 
  public get defaultReturnUrl() {
    return this.getStringAttribute('default_return_url');
  }
  public set defaultReturnUrl(value: string) {
    this._defaultReturnUrl = value;
  }
  public resetDefaultReturnUrl() {
    this._defaultReturnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultReturnUrlInput() {
    return this._defaultReturnUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // business_profile - computed: false, optional: false, required: true
  private _businessProfile = new PortalConfigurationBusinessProfileOutputReference(this, "business_profile");
  public get businessProfile() {
    return this._businessProfile;
  }
  public putBusinessProfile(value: PortalConfigurationBusinessProfile) {
    this._businessProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessProfileInput() {
    return this._businessProfile.internalValue;
  }

  // features - computed: false, optional: false, required: true
  private _features = new PortalConfigurationFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }
  public putFeatures(value: PortalConfigurationFeatures) {
    this._features.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // login_page - computed: false, optional: true, required: false
  private _loginPage = new PortalConfigurationLoginPageOutputReference(this, "login_page");
  public get loginPage() {
    return this._loginPage;
  }
  public putLoginPage(value: PortalConfigurationLoginPage) {
    this._loginPage.internalValue = value;
  }
  public resetLoginPage() {
    this._loginPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPageInput() {
    return this._loginPage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      default_return_url: cdktf.stringToTerraform(this._defaultReturnUrl),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      business_profile: portalConfigurationBusinessProfileToTerraform(this._businessProfile.internalValue),
      features: portalConfigurationFeaturesToTerraform(this._features.internalValue),
      login_page: portalConfigurationLoginPageToTerraform(this._loginPage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_return_url: {
        value: cdktf.stringToHclTerraform(this._defaultReturnUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      business_profile: {
        value: portalConfigurationBusinessProfileToHclTerraform(this._businessProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PortalConfigurationBusinessProfileList",
      },
      features: {
        value: portalConfigurationFeaturesToHclTerraform(this._features.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PortalConfigurationFeaturesList",
      },
      login_page: {
        value: portalConfigurationLoginPageToHclTerraform(this._loginPage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PortalConfigurationLoginPageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
