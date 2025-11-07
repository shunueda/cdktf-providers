// https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomerPortalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#default_return_url CustomerPortal#default_return_url}
  */
  readonly defaultReturnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#id CustomerPortal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#metadata CustomerPortal#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * business_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#business_profile CustomerPortal#business_profile}
  */
  readonly businessProfile: CustomerPortalBusinessProfile[] | cdktf.IResolvable;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#features CustomerPortal#features}
  */
  readonly features: CustomerPortalFeatures[] | cdktf.IResolvable;
}
export interface CustomerPortalBusinessProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#headline CustomerPortal#headline}
  */
  readonly headline: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#privacy_policy_url CustomerPortal#privacy_policy_url}
  */
  readonly privacyPolicyUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#terms_of_service_url CustomerPortal#terms_of_service_url}
  */
  readonly termsOfServiceUrl: string;
}

export function customerPortalBusinessProfileToTerraform(struct?: CustomerPortalBusinessProfile | cdktf.IResolvable): any {
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


export function customerPortalBusinessProfileToHclTerraform(struct?: CustomerPortalBusinessProfile | cdktf.IResolvable): any {
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

export class CustomerPortalBusinessProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomerPortalBusinessProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CustomerPortalBusinessProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headline = undefined;
      this._privacyPolicyUrl = undefined;
      this._termsOfServiceUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headline = value.headline;
      this._privacyPolicyUrl = value.privacyPolicyUrl;
      this._termsOfServiceUrl = value.termsOfServiceUrl;
    }
  }

  // headline - computed: false, optional: false, required: true
  private _headline?: string; 
  public get headline() {
    return this.getStringAttribute('headline');
  }
  public set headline(value: string) {
    this._headline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headlineInput() {
    return this._headline;
  }

  // privacy_policy_url - computed: false, optional: false, required: true
  private _privacyPolicyUrl?: string; 
  public get privacyPolicyUrl() {
    return this.getStringAttribute('privacy_policy_url');
  }
  public set privacyPolicyUrl(value: string) {
    this._privacyPolicyUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyUrlInput() {
    return this._privacyPolicyUrl;
  }

  // terms_of_service_url - computed: false, optional: false, required: true
  private _termsOfServiceUrl?: string; 
  public get termsOfServiceUrl() {
    return this.getStringAttribute('terms_of_service_url');
  }
  public set termsOfServiceUrl(value: string) {
    this._termsOfServiceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get termsOfServiceUrlInput() {
    return this._termsOfServiceUrl;
  }
}

export class CustomerPortalBusinessProfileList extends cdktf.ComplexList {
  public internalValue? : CustomerPortalBusinessProfile[] | cdktf.IResolvable

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
  public get(index: number): CustomerPortalBusinessProfileOutputReference {
    return new CustomerPortalBusinessProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerPortalFeaturesCustomerUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#allowed_updates CustomerPortal#allowed_updates}
  */
  readonly allowedUpdates: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#enabled CustomerPortal#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function customerPortalFeaturesCustomerUpdateToTerraform(struct?: CustomerPortalFeaturesCustomerUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_updates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUpdates),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function customerPortalFeaturesCustomerUpdateToHclTerraform(struct?: CustomerPortalFeaturesCustomerUpdate | cdktf.IResolvable): any {
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

export class CustomerPortalFeaturesCustomerUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomerPortalFeaturesCustomerUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CustomerPortalFeaturesCustomerUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedUpdates = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedUpdates = value.allowedUpdates;
      this._enabled = value.enabled;
    }
  }

  // allowed_updates - computed: false, optional: false, required: true
  private _allowedUpdates?: string[]; 
  public get allowedUpdates() {
    return this.getListAttribute('allowed_updates');
  }
  public set allowedUpdates(value: string[]) {
    this._allowedUpdates = value;
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

export class CustomerPortalFeaturesCustomerUpdateList extends cdktf.ComplexList {
  public internalValue? : CustomerPortalFeaturesCustomerUpdate[] | cdktf.IResolvable

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
  public get(index: number): CustomerPortalFeaturesCustomerUpdateOutputReference {
    return new CustomerPortalFeaturesCustomerUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerPortalFeaturesInvoiceHistory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#enabled CustomerPortal#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function customerPortalFeaturesInvoiceHistoryToTerraform(struct?: CustomerPortalFeaturesInvoiceHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function customerPortalFeaturesInvoiceHistoryToHclTerraform(struct?: CustomerPortalFeaturesInvoiceHistory | cdktf.IResolvable): any {
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

export class CustomerPortalFeaturesInvoiceHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomerPortalFeaturesInvoiceHistory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerPortalFeaturesInvoiceHistory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CustomerPortalFeaturesInvoiceHistoryList extends cdktf.ComplexList {
  public internalValue? : CustomerPortalFeaturesInvoiceHistory[] | cdktf.IResolvable

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
  public get(index: number): CustomerPortalFeaturesInvoiceHistoryOutputReference {
    return new CustomerPortalFeaturesInvoiceHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerPortalFeaturesPaymentMethodUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#enabled CustomerPortal#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function customerPortalFeaturesPaymentMethodUpdateToTerraform(struct?: CustomerPortalFeaturesPaymentMethodUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function customerPortalFeaturesPaymentMethodUpdateToHclTerraform(struct?: CustomerPortalFeaturesPaymentMethodUpdate | cdktf.IResolvable): any {
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

export class CustomerPortalFeaturesPaymentMethodUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomerPortalFeaturesPaymentMethodUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerPortalFeaturesPaymentMethodUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CustomerPortalFeaturesPaymentMethodUpdateList extends cdktf.ComplexList {
  public internalValue? : CustomerPortalFeaturesPaymentMethodUpdate[] | cdktf.IResolvable

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
  public get(index: number): CustomerPortalFeaturesPaymentMethodUpdateOutputReference {
    return new CustomerPortalFeaturesPaymentMethodUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerPortalFeaturesSubscriptionCancelCancellationReason {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#enabled CustomerPortal#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#options CustomerPortal#options}
  */
  readonly options: string[];
}

export function customerPortalFeaturesSubscriptionCancelCancellationReasonToTerraform(struct?: CustomerPortalFeaturesSubscriptionCancelCancellationReason | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
  }
}


export function customerPortalFeaturesSubscriptionCancelCancellationReasonToHclTerraform(struct?: CustomerPortalFeaturesSubscriptionCancelCancellationReason | cdktf.IResolvable): any {
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

export class CustomerPortalFeaturesSubscriptionCancelCancellationReasonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomerPortalFeaturesSubscriptionCancelCancellationReason | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CustomerPortalFeaturesSubscriptionCancelCancellationReason | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._options = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CustomerPortalFeaturesSubscriptionCancelCancellationReasonList extends cdktf.ComplexList {
  public internalValue? : CustomerPortalFeaturesSubscriptionCancelCancellationReason[] | cdktf.IResolvable

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
  public get(index: number): CustomerPortalFeaturesSubscriptionCancelCancellationReasonOutputReference {
    return new CustomerPortalFeaturesSubscriptionCancelCancellationReasonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerPortalFeaturesSubscriptionCancel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#enabled CustomerPortal#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#mode CustomerPortal#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#proration_behavior CustomerPortal#proration_behavior}
  */
  readonly prorationBehavior?: string;
  /**
  * cancellation_reason block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#cancellation_reason CustomerPortal#cancellation_reason}
  */
  readonly cancellationReason?: CustomerPortalFeaturesSubscriptionCancelCancellationReason[] | cdktf.IResolvable;
}

export function customerPortalFeaturesSubscriptionCancelToTerraform(struct?: CustomerPortalFeaturesSubscriptionCancel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mode: cdktf.stringToTerraform(struct!.mode),
    proration_behavior: cdktf.stringToTerraform(struct!.prorationBehavior),
    cancellation_reason: cdktf.listMapper(customerPortalFeaturesSubscriptionCancelCancellationReasonToTerraform, true)(struct!.cancellationReason),
  }
}


export function customerPortalFeaturesSubscriptionCancelToHclTerraform(struct?: CustomerPortalFeaturesSubscriptionCancel | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(customerPortalFeaturesSubscriptionCancelCancellationReasonToHclTerraform, true)(struct!.cancellationReason),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerPortalFeaturesSubscriptionCancelCancellationReasonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerPortalFeaturesSubscriptionCancelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomerPortalFeaturesSubscriptionCancel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CustomerPortalFeaturesSubscriptionCancel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._mode = undefined;
      this._prorationBehavior = undefined;
      this._cancellationReason.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _cancellationReason = new CustomerPortalFeaturesSubscriptionCancelCancellationReasonList(this, "cancellation_reason", false);
  public get cancellationReason() {
    return this._cancellationReason;
  }
  public putCancellationReason(value: CustomerPortalFeaturesSubscriptionCancelCancellationReason[] | cdktf.IResolvable) {
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

export class CustomerPortalFeaturesSubscriptionCancelList extends cdktf.ComplexList {
  public internalValue? : CustomerPortalFeaturesSubscriptionCancel[] | cdktf.IResolvable

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
  public get(index: number): CustomerPortalFeaturesSubscriptionCancelOutputReference {
    return new CustomerPortalFeaturesSubscriptionCancelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerPortalFeaturesSubscriptionPause {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#enabled CustomerPortal#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function customerPortalFeaturesSubscriptionPauseToTerraform(struct?: CustomerPortalFeaturesSubscriptionPause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function customerPortalFeaturesSubscriptionPauseToHclTerraform(struct?: CustomerPortalFeaturesSubscriptionPause | cdktf.IResolvable): any {
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

export class CustomerPortalFeaturesSubscriptionPauseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomerPortalFeaturesSubscriptionPause | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerPortalFeaturesSubscriptionPause | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
}

export class CustomerPortalFeaturesSubscriptionPauseList extends cdktf.ComplexList {
  public internalValue? : CustomerPortalFeaturesSubscriptionPause[] | cdktf.IResolvable

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
  public get(index: number): CustomerPortalFeaturesSubscriptionPauseOutputReference {
    return new CustomerPortalFeaturesSubscriptionPauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerPortalFeaturesSubscriptionUpdateProduct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#id CustomerPortal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#prices CustomerPortal#prices}
  */
  readonly prices: string[];
}

export function customerPortalFeaturesSubscriptionUpdateProductToTerraform(struct?: CustomerPortalFeaturesSubscriptionUpdateProduct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    prices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prices),
  }
}


export function customerPortalFeaturesSubscriptionUpdateProductToHclTerraform(struct?: CustomerPortalFeaturesSubscriptionUpdateProduct | cdktf.IResolvable): any {
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
    prices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerPortalFeaturesSubscriptionUpdateProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomerPortalFeaturesSubscriptionUpdateProduct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prices !== undefined) {
      hasAnyValues = true;
      internalValueResult.prices = this._prices;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerPortalFeaturesSubscriptionUpdateProduct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prices = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prices = value.prices;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class CustomerPortalFeaturesSubscriptionUpdateProductList extends cdktf.ComplexList {
  public internalValue? : CustomerPortalFeaturesSubscriptionUpdateProduct[] | cdktf.IResolvable

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
  public get(index: number): CustomerPortalFeaturesSubscriptionUpdateProductOutputReference {
    return new CustomerPortalFeaturesSubscriptionUpdateProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerPortalFeaturesSubscriptionUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#default_allowed_updates CustomerPortal#default_allowed_updates}
  */
  readonly defaultAllowedUpdates: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#enabled CustomerPortal#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#proration_behavior CustomerPortal#proration_behavior}
  */
  readonly prorationBehavior?: string;
  /**
  * product block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#product CustomerPortal#product}
  */
  readonly product?: CustomerPortalFeaturesSubscriptionUpdateProduct[] | cdktf.IResolvable;
}

export function customerPortalFeaturesSubscriptionUpdateToTerraform(struct?: CustomerPortalFeaturesSubscriptionUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_allowed_updates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultAllowedUpdates),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    proration_behavior: cdktf.stringToTerraform(struct!.prorationBehavior),
    product: cdktf.listMapper(customerPortalFeaturesSubscriptionUpdateProductToTerraform, true)(struct!.product),
  }
}


export function customerPortalFeaturesSubscriptionUpdateToHclTerraform(struct?: CustomerPortalFeaturesSubscriptionUpdate | cdktf.IResolvable): any {
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
    product: {
      value: cdktf.listMapperHcl(customerPortalFeaturesSubscriptionUpdateProductToHclTerraform, true)(struct!.product),
      isBlock: true,
      type: "set",
      storageClassType: "CustomerPortalFeaturesSubscriptionUpdateProductList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerPortalFeaturesSubscriptionUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomerPortalFeaturesSubscriptionUpdate | cdktf.IResolvable | undefined {
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
    if (this._product?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerPortalFeaturesSubscriptionUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAllowedUpdates = undefined;
      this._enabled = undefined;
      this._prorationBehavior = undefined;
      this._product.internalValue = undefined;
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
      this._product.internalValue = value.product;
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

  // product - computed: false, optional: true, required: false
  private _product = new CustomerPortalFeaturesSubscriptionUpdateProductList(this, "product", true);
  public get product() {
    return this._product;
  }
  public putProduct(value: CustomerPortalFeaturesSubscriptionUpdateProduct[] | cdktf.IResolvable) {
    this._product.internalValue = value;
  }
  public resetProduct() {
    this._product.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product.internalValue;
  }
}

export class CustomerPortalFeaturesSubscriptionUpdateList extends cdktf.ComplexList {
  public internalValue? : CustomerPortalFeaturesSubscriptionUpdate[] | cdktf.IResolvable

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
  public get(index: number): CustomerPortalFeaturesSubscriptionUpdateOutputReference {
    return new CustomerPortalFeaturesSubscriptionUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerPortalFeatures {
  /**
  * customer_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#customer_update CustomerPortal#customer_update}
  */
  readonly customerUpdate?: CustomerPortalFeaturesCustomerUpdate[] | cdktf.IResolvable;
  /**
  * invoice_history block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#invoice_history CustomerPortal#invoice_history}
  */
  readonly invoiceHistory?: CustomerPortalFeaturesInvoiceHistory[] | cdktf.IResolvable;
  /**
  * payment_method_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#payment_method_update CustomerPortal#payment_method_update}
  */
  readonly paymentMethodUpdate?: CustomerPortalFeaturesPaymentMethodUpdate[] | cdktf.IResolvable;
  /**
  * subscription_cancel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#subscription_cancel CustomerPortal#subscription_cancel}
  */
  readonly subscriptionCancel?: CustomerPortalFeaturesSubscriptionCancel[] | cdktf.IResolvable;
  /**
  * subscription_pause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#subscription_pause CustomerPortal#subscription_pause}
  */
  readonly subscriptionPause?: CustomerPortalFeaturesSubscriptionPause[] | cdktf.IResolvable;
  /**
  * subscription_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#subscription_update CustomerPortal#subscription_update}
  */
  readonly subscriptionUpdate?: CustomerPortalFeaturesSubscriptionUpdate[] | cdktf.IResolvable;
}

export function customerPortalFeaturesToTerraform(struct?: CustomerPortalFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_update: cdktf.listMapper(customerPortalFeaturesCustomerUpdateToTerraform, true)(struct!.customerUpdate),
    invoice_history: cdktf.listMapper(customerPortalFeaturesInvoiceHistoryToTerraform, true)(struct!.invoiceHistory),
    payment_method_update: cdktf.listMapper(customerPortalFeaturesPaymentMethodUpdateToTerraform, true)(struct!.paymentMethodUpdate),
    subscription_cancel: cdktf.listMapper(customerPortalFeaturesSubscriptionCancelToTerraform, true)(struct!.subscriptionCancel),
    subscription_pause: cdktf.listMapper(customerPortalFeaturesSubscriptionPauseToTerraform, true)(struct!.subscriptionPause),
    subscription_update: cdktf.listMapper(customerPortalFeaturesSubscriptionUpdateToTerraform, true)(struct!.subscriptionUpdate),
  }
}


export function customerPortalFeaturesToHclTerraform(struct?: CustomerPortalFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_update: {
      value: cdktf.listMapperHcl(customerPortalFeaturesCustomerUpdateToHclTerraform, true)(struct!.customerUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerPortalFeaturesCustomerUpdateList",
    },
    invoice_history: {
      value: cdktf.listMapperHcl(customerPortalFeaturesInvoiceHistoryToHclTerraform, true)(struct!.invoiceHistory),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerPortalFeaturesInvoiceHistoryList",
    },
    payment_method_update: {
      value: cdktf.listMapperHcl(customerPortalFeaturesPaymentMethodUpdateToHclTerraform, true)(struct!.paymentMethodUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerPortalFeaturesPaymentMethodUpdateList",
    },
    subscription_cancel: {
      value: cdktf.listMapperHcl(customerPortalFeaturesSubscriptionCancelToHclTerraform, true)(struct!.subscriptionCancel),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerPortalFeaturesSubscriptionCancelList",
    },
    subscription_pause: {
      value: cdktf.listMapperHcl(customerPortalFeaturesSubscriptionPauseToHclTerraform, true)(struct!.subscriptionPause),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerPortalFeaturesSubscriptionPauseList",
    },
    subscription_update: {
      value: cdktf.listMapperHcl(customerPortalFeaturesSubscriptionUpdateToHclTerraform, true)(struct!.subscriptionUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerPortalFeaturesSubscriptionUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerPortalFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomerPortalFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._subscriptionPause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionPause = this._subscriptionPause?.internalValue;
    }
    if (this._subscriptionUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionUpdate = this._subscriptionUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerPortalFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerUpdate.internalValue = undefined;
      this._invoiceHistory.internalValue = undefined;
      this._paymentMethodUpdate.internalValue = undefined;
      this._subscriptionCancel.internalValue = undefined;
      this._subscriptionPause.internalValue = undefined;
      this._subscriptionUpdate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerUpdate.internalValue = value.customerUpdate;
      this._invoiceHistory.internalValue = value.invoiceHistory;
      this._paymentMethodUpdate.internalValue = value.paymentMethodUpdate;
      this._subscriptionCancel.internalValue = value.subscriptionCancel;
      this._subscriptionPause.internalValue = value.subscriptionPause;
      this._subscriptionUpdate.internalValue = value.subscriptionUpdate;
    }
  }

  // customer_update - computed: false, optional: true, required: false
  private _customerUpdate = new CustomerPortalFeaturesCustomerUpdateList(this, "customer_update", false);
  public get customerUpdate() {
    return this._customerUpdate;
  }
  public putCustomerUpdate(value: CustomerPortalFeaturesCustomerUpdate[] | cdktf.IResolvable) {
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
  private _invoiceHistory = new CustomerPortalFeaturesInvoiceHistoryList(this, "invoice_history", false);
  public get invoiceHistory() {
    return this._invoiceHistory;
  }
  public putInvoiceHistory(value: CustomerPortalFeaturesInvoiceHistory[] | cdktf.IResolvable) {
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
  private _paymentMethodUpdate = new CustomerPortalFeaturesPaymentMethodUpdateList(this, "payment_method_update", false);
  public get paymentMethodUpdate() {
    return this._paymentMethodUpdate;
  }
  public putPaymentMethodUpdate(value: CustomerPortalFeaturesPaymentMethodUpdate[] | cdktf.IResolvable) {
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
  private _subscriptionCancel = new CustomerPortalFeaturesSubscriptionCancelList(this, "subscription_cancel", false);
  public get subscriptionCancel() {
    return this._subscriptionCancel;
  }
  public putSubscriptionCancel(value: CustomerPortalFeaturesSubscriptionCancel[] | cdktf.IResolvable) {
    this._subscriptionCancel.internalValue = value;
  }
  public resetSubscriptionCancel() {
    this._subscriptionCancel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionCancelInput() {
    return this._subscriptionCancel.internalValue;
  }

  // subscription_pause - computed: false, optional: true, required: false
  private _subscriptionPause = new CustomerPortalFeaturesSubscriptionPauseList(this, "subscription_pause", false);
  public get subscriptionPause() {
    return this._subscriptionPause;
  }
  public putSubscriptionPause(value: CustomerPortalFeaturesSubscriptionPause[] | cdktf.IResolvable) {
    this._subscriptionPause.internalValue = value;
  }
  public resetSubscriptionPause() {
    this._subscriptionPause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionPauseInput() {
    return this._subscriptionPause.internalValue;
  }

  // subscription_update - computed: false, optional: true, required: false
  private _subscriptionUpdate = new CustomerPortalFeaturesSubscriptionUpdateList(this, "subscription_update", false);
  public get subscriptionUpdate() {
    return this._subscriptionUpdate;
  }
  public putSubscriptionUpdate(value: CustomerPortalFeaturesSubscriptionUpdate[] | cdktf.IResolvable) {
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

export class CustomerPortalFeaturesList extends cdktf.ComplexList {
  public internalValue? : CustomerPortalFeatures[] | cdktf.IResolvable

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
  public get(index: number): CustomerPortalFeaturesOutputReference {
    return new CustomerPortalFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal stripe_customer_portal}
*/
export class CustomerPortal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_customer_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomerPortal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomerPortal to import
  * @param importFromId The id of the existing CustomerPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomerPortal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_customer_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/customer_portal stripe_customer_portal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerPortalConfig
  */
  public constructor(scope: Construct, id: string, config: CustomerPortalConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_customer_portal',
      terraformGeneratorMetadata: {
        providerName: 'stripe',
        providerVersion: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultReturnUrl = config.defaultReturnUrl;
    this._id = config.id;
    this._metadata = config.metadata;
    this._businessProfile.internalValue = config.businessProfile;
    this._features.internalValue = config.features;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _businessProfile = new CustomerPortalBusinessProfileList(this, "business_profile", false);
  public get businessProfile() {
    return this._businessProfile;
  }
  public putBusinessProfile(value: CustomerPortalBusinessProfile[] | cdktf.IResolvable) {
    this._businessProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessProfileInput() {
    return this._businessProfile.internalValue;
  }

  // features - computed: false, optional: false, required: true
  private _features = new CustomerPortalFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: CustomerPortalFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_return_url: cdktf.stringToTerraform(this._defaultReturnUrl),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      business_profile: cdktf.listMapper(customerPortalBusinessProfileToTerraform, true)(this._businessProfile.internalValue),
      features: cdktf.listMapper(customerPortalFeaturesToTerraform, true)(this._features.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_return_url: {
        value: cdktf.stringToHclTerraform(this._defaultReturnUrl),
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
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      business_profile: {
        value: cdktf.listMapperHcl(customerPortalBusinessProfileToHclTerraform, true)(this._businessProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerPortalBusinessProfileList",
      },
      features: {
        value: cdktf.listMapperHcl(customerPortalFeaturesToHclTerraform, true)(this._features.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerPortalFeaturesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
