// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationmanagerIdpUserpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bruteforce protection policy for this userpool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#bruteforce_protection_policy OrganizationmanagerIdpUserpool#bruteforce_protection_policy}
  */
  readonly bruteforceProtectionPolicy?: OrganizationmanagerIdpUserpoolBruteforceProtectionPolicy;
  /**
  * Default subdomain for the userpool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#default_subdomain OrganizationmanagerIdpUserpool#default_subdomain}
  */
  readonly defaultSubdomain: string;
  /**
  * Description of the userpool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#description OrganizationmanagerIdpUserpool#description}
  */
  readonly description?: string;
  /**
  * ID of the userpool to return.
  *  To get the userpool ID, make a [UserpoolService.List] request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#id OrganizationmanagerIdpUserpool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels as key:value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#labels OrganizationmanagerIdpUserpool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the userpool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#name OrganizationmanagerIdpUserpool#name}
  */
  readonly name: string;
  /**
  * ID of the organization this userpool belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#organization_id OrganizationmanagerIdpUserpool#organization_id}
  */
  readonly organizationId: string;
  /**
  * Password lifetime policy for this userpool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#password_lifetime_policy OrganizationmanagerIdpUserpool#password_lifetime_policy}
  */
  readonly passwordLifetimePolicy?: OrganizationmanagerIdpUserpoolPasswordLifetimePolicy;
  /**
  * Password quality policy for this userpool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#password_quality_policy OrganizationmanagerIdpUserpool#password_quality_policy}
  */
  readonly passwordQualityPolicy?: OrganizationmanagerIdpUserpoolPasswordQualityPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#timeouts OrganizationmanagerIdpUserpool#timeouts}
  */
  readonly timeouts?: OrganizationmanagerIdpUserpoolTimeouts;
  /**
  * User settings for this userpool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#user_settings OrganizationmanagerIdpUserpool#user_settings}
  */
  readonly userSettings?: OrganizationmanagerIdpUserpoolUserSettings;
  /**
  * ID of the userpool to return.
  *  To get the userpool ID, make a [UserpoolService.List] request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#userpool_id OrganizationmanagerIdpUserpool#userpool_id}
  */
  readonly userpoolId?: string;
}
export interface OrganizationmanagerIdpUserpoolBruteforceProtectionPolicy {
  /**
  * Number of failed attempts allowed within the window before blocking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#attempts OrganizationmanagerIdpUserpool#attempts}
  */
  readonly attempts?: number;
  /**
  * Duration of the block after too many failed attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#block OrganizationmanagerIdpUserpool#block}
  */
  readonly block?: string;
  /**
  * Time window for counting failed authentication attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#window OrganizationmanagerIdpUserpool#window}
  */
  readonly window?: string;
}

export function organizationmanagerIdpUserpoolBruteforceProtectionPolicyToTerraform(struct?: OrganizationmanagerIdpUserpoolBruteforceProtectionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    block: cdktf.stringToTerraform(struct!.block),
    window: cdktf.stringToTerraform(struct!.window),
  }
}


export function organizationmanagerIdpUserpoolBruteforceProtectionPolicyToHclTerraform(struct?: OrganizationmanagerIdpUserpoolBruteforceProtectionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block: {
      value: cdktf.stringToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpUserpoolBruteforceProtectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpUserpoolBruteforceProtectionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpUserpoolBruteforceProtectionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._block = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._block = value.block;
      this._window = value.window;
    }
  }

  // attempts - computed: true, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // block - computed: true, optional: true, required: false
  private _block?: string; 
  public get block() {
    return this.getStringAttribute('block');
  }
  public set block(value: string) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // window - computed: true, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}
export interface OrganizationmanagerIdpUserpoolPasswordLifetimePolicy {
  /**
  * Maximum number of days a password remains valid.
  *  Zero means passwords never expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#max_days_count OrganizationmanagerIdpUserpool#max_days_count}
  */
  readonly maxDaysCount?: number;
  /**
  * Minimum number of days before a password can be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#min_days_count OrganizationmanagerIdpUserpool#min_days_count}
  */
  readonly minDaysCount?: number;
}

export function organizationmanagerIdpUserpoolPasswordLifetimePolicyToTerraform(struct?: OrganizationmanagerIdpUserpoolPasswordLifetimePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_days_count: cdktf.numberToTerraform(struct!.maxDaysCount),
    min_days_count: cdktf.numberToTerraform(struct!.minDaysCount),
  }
}


export function organizationmanagerIdpUserpoolPasswordLifetimePolicyToHclTerraform(struct?: OrganizationmanagerIdpUserpoolPasswordLifetimePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_days_count: {
      value: cdktf.numberToHclTerraform(struct!.maxDaysCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_days_count: {
      value: cdktf.numberToHclTerraform(struct!.minDaysCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpUserpoolPasswordLifetimePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpUserpoolPasswordLifetimePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxDaysCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDaysCount = this._maxDaysCount;
    }
    if (this._minDaysCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDaysCount = this._minDaysCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpUserpoolPasswordLifetimePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxDaysCount = undefined;
      this._minDaysCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxDaysCount = value.maxDaysCount;
      this._minDaysCount = value.minDaysCount;
    }
  }

  // max_days_count - computed: true, optional: true, required: false
  private _maxDaysCount?: number; 
  public get maxDaysCount() {
    return this.getNumberAttribute('max_days_count');
  }
  public set maxDaysCount(value: number) {
    this._maxDaysCount = value;
  }
  public resetMaxDaysCount() {
    this._maxDaysCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDaysCountInput() {
    return this._maxDaysCount;
  }

  // min_days_count - computed: true, optional: true, required: false
  private _minDaysCount?: number; 
  public get minDaysCount() {
    return this.getNumberAttribute('min_days_count');
  }
  public set minDaysCount(value: number) {
    this._minDaysCount = value;
  }
  public resetMinDaysCount() {
    this._minDaysCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDaysCountInput() {
    return this._minDaysCount;
  }
}
export interface OrganizationmanagerIdpUserpoolPasswordQualityPolicyFixed {
  /**
  * Whether digits are required in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#digits_required OrganizationmanagerIdpUserpool#digits_required}
  */
  readonly digitsRequired?: boolean | cdktf.IResolvable;
  /**
  * Whether lowercase letters are required in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#lowers_required OrganizationmanagerIdpUserpool#lowers_required}
  */
  readonly lowersRequired?: boolean | cdktf.IResolvable;
  /**
  * Minimum length required for all passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#min_length OrganizationmanagerIdpUserpool#min_length}
  */
  readonly minLength?: number;
  /**
  * Whether special characters are required in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#specials_required OrganizationmanagerIdpUserpool#specials_required}
  */
  readonly specialsRequired?: boolean | cdktf.IResolvable;
  /**
  * Whether uppercase letters are required in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#uppers_required OrganizationmanagerIdpUserpool#uppers_required}
  */
  readonly uppersRequired?: boolean | cdktf.IResolvable;
}

export function organizationmanagerIdpUserpoolPasswordQualityPolicyFixedToTerraform(struct?: OrganizationmanagerIdpUserpoolPasswordQualityPolicyFixed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digits_required: cdktf.booleanToTerraform(struct!.digitsRequired),
    lowers_required: cdktf.booleanToTerraform(struct!.lowersRequired),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    specials_required: cdktf.booleanToTerraform(struct!.specialsRequired),
    uppers_required: cdktf.booleanToTerraform(struct!.uppersRequired),
  }
}


export function organizationmanagerIdpUserpoolPasswordQualityPolicyFixedToHclTerraform(struct?: OrganizationmanagerIdpUserpoolPasswordQualityPolicyFixed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digits_required: {
      value: cdktf.booleanToHclTerraform(struct!.digitsRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lowers_required: {
      value: cdktf.booleanToHclTerraform(struct!.lowersRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    specials_required: {
      value: cdktf.booleanToHclTerraform(struct!.specialsRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uppers_required: {
      value: cdktf.booleanToHclTerraform(struct!.uppersRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpUserpoolPasswordQualityPolicyFixedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpUserpoolPasswordQualityPolicyFixed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digitsRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitsRequired = this._digitsRequired;
    }
    if (this._lowersRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowersRequired = this._lowersRequired;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._specialsRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialsRequired = this._specialsRequired;
    }
    if (this._uppersRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.uppersRequired = this._uppersRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpUserpoolPasswordQualityPolicyFixed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digitsRequired = undefined;
      this._lowersRequired = undefined;
      this._minLength = undefined;
      this._specialsRequired = undefined;
      this._uppersRequired = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digitsRequired = value.digitsRequired;
      this._lowersRequired = value.lowersRequired;
      this._minLength = value.minLength;
      this._specialsRequired = value.specialsRequired;
      this._uppersRequired = value.uppersRequired;
    }
  }

  // digits_required - computed: true, optional: true, required: false
  private _digitsRequired?: boolean | cdktf.IResolvable; 
  public get digitsRequired() {
    return this.getBooleanAttribute('digits_required');
  }
  public set digitsRequired(value: boolean | cdktf.IResolvable) {
    this._digitsRequired = value;
  }
  public resetDigitsRequired() {
    this._digitsRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsRequiredInput() {
    return this._digitsRequired;
  }

  // lowers_required - computed: true, optional: true, required: false
  private _lowersRequired?: boolean | cdktf.IResolvable; 
  public get lowersRequired() {
    return this.getBooleanAttribute('lowers_required');
  }
  public set lowersRequired(value: boolean | cdktf.IResolvable) {
    this._lowersRequired = value;
  }
  public resetLowersRequired() {
    this._lowersRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowersRequiredInput() {
    return this._lowersRequired;
  }

  // min_length - computed: true, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // specials_required - computed: true, optional: true, required: false
  private _specialsRequired?: boolean | cdktf.IResolvable; 
  public get specialsRequired() {
    return this.getBooleanAttribute('specials_required');
  }
  public set specialsRequired(value: boolean | cdktf.IResolvable) {
    this._specialsRequired = value;
  }
  public resetSpecialsRequired() {
    this._specialsRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialsRequiredInput() {
    return this._specialsRequired;
  }

  // uppers_required - computed: true, optional: true, required: false
  private _uppersRequired?: boolean | cdktf.IResolvable; 
  public get uppersRequired() {
    return this.getBooleanAttribute('uppers_required');
  }
  public set uppersRequired(value: boolean | cdktf.IResolvable) {
    this._uppersRequired = value;
  }
  public resetUppersRequired() {
    this._uppersRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uppersRequiredInput() {
    return this._uppersRequired;
  }
}
export interface OrganizationmanagerIdpUserpoolPasswordQualityPolicySmart {
  /**
  * For passwords with all four classes of characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#four_classes OrganizationmanagerIdpUserpool#four_classes}
  */
  readonly fourClasses?: number;
  /**
  * For passwords with one class of characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#one_class OrganizationmanagerIdpUserpool#one_class}
  */
  readonly oneClass?: number;
  /**
  * For passwords with three classes of characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#three_classes OrganizationmanagerIdpUserpool#three_classes}
  */
  readonly threeClasses?: number;
  /**
  * For passwords with two classes of characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#two_classes OrganizationmanagerIdpUserpool#two_classes}
  */
  readonly twoClasses?: number;
}

export function organizationmanagerIdpUserpoolPasswordQualityPolicySmartToTerraform(struct?: OrganizationmanagerIdpUserpoolPasswordQualityPolicySmart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    four_classes: cdktf.numberToTerraform(struct!.fourClasses),
    one_class: cdktf.numberToTerraform(struct!.oneClass),
    three_classes: cdktf.numberToTerraform(struct!.threeClasses),
    two_classes: cdktf.numberToTerraform(struct!.twoClasses),
  }
}


export function organizationmanagerIdpUserpoolPasswordQualityPolicySmartToHclTerraform(struct?: OrganizationmanagerIdpUserpoolPasswordQualityPolicySmart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    four_classes: {
      value: cdktf.numberToHclTerraform(struct!.fourClasses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_class: {
      value: cdktf.numberToHclTerraform(struct!.oneClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    three_classes: {
      value: cdktf.numberToHclTerraform(struct!.threeClasses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    two_classes: {
      value: cdktf.numberToHclTerraform(struct!.twoClasses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpUserpoolPasswordQualityPolicySmartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpUserpoolPasswordQualityPolicySmart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fourClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.fourClasses = this._fourClasses;
    }
    if (this._oneClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneClass = this._oneClass;
    }
    if (this._threeClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.threeClasses = this._threeClasses;
    }
    if (this._twoClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoClasses = this._twoClasses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpUserpoolPasswordQualityPolicySmart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fourClasses = undefined;
      this._oneClass = undefined;
      this._threeClasses = undefined;
      this._twoClasses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fourClasses = value.fourClasses;
      this._oneClass = value.oneClass;
      this._threeClasses = value.threeClasses;
      this._twoClasses = value.twoClasses;
    }
  }

  // four_classes - computed: true, optional: true, required: false
  private _fourClasses?: number; 
  public get fourClasses() {
    return this.getNumberAttribute('four_classes');
  }
  public set fourClasses(value: number) {
    this._fourClasses = value;
  }
  public resetFourClasses() {
    this._fourClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fourClassesInput() {
    return this._fourClasses;
  }

  // one_class - computed: true, optional: true, required: false
  private _oneClass?: number; 
  public get oneClass() {
    return this.getNumberAttribute('one_class');
  }
  public set oneClass(value: number) {
    this._oneClass = value;
  }
  public resetOneClass() {
    this._oneClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneClassInput() {
    return this._oneClass;
  }

  // three_classes - computed: true, optional: true, required: false
  private _threeClasses?: number; 
  public get threeClasses() {
    return this.getNumberAttribute('three_classes');
  }
  public set threeClasses(value: number) {
    this._threeClasses = value;
  }
  public resetThreeClasses() {
    this._threeClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threeClassesInput() {
    return this._threeClasses;
  }

  // two_classes - computed: true, optional: true, required: false
  private _twoClasses?: number; 
  public get twoClasses() {
    return this.getNumberAttribute('two_classes');
  }
  public set twoClasses(value: number) {
    this._twoClasses = value;
  }
  public resetTwoClasses() {
    this._twoClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoClassesInput() {
    return this._twoClasses;
  }
}
export interface OrganizationmanagerIdpUserpoolPasswordQualityPolicy {
  /**
  * Whether passwords similar to previous ones are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#allow_similar OrganizationmanagerIdpUserpool#allow_similar}
  */
  readonly allowSimilar?: boolean | cdktf.IResolvable;
  /**
  * Fixed complexity requirements. Exactly one of complexity requirements must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#fixed OrganizationmanagerIdpUserpool#fixed}
  */
  readonly fixed?: OrganizationmanagerIdpUserpoolPasswordQualityPolicyFixed;
  /**
  * Minimum length of substrings to check for similarity to vulnerable sequences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#match_length OrganizationmanagerIdpUserpool#match_length}
  */
  readonly matchLength?: number;
  /**
  * Maximum password length. Zero means no maximum length is enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#max_length OrganizationmanagerIdpUserpool#max_length}
  */
  readonly maxLength?: number;
  /**
  * Smart complexity requirements. Exactly one of complexity requirements must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#smart OrganizationmanagerIdpUserpool#smart}
  */
  readonly smart?: OrganizationmanagerIdpUserpoolPasswordQualityPolicySmart;
}

export function organizationmanagerIdpUserpoolPasswordQualityPolicyToTerraform(struct?: OrganizationmanagerIdpUserpoolPasswordQualityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_similar: cdktf.booleanToTerraform(struct!.allowSimilar),
    fixed: organizationmanagerIdpUserpoolPasswordQualityPolicyFixedToTerraform(struct!.fixed),
    match_length: cdktf.numberToTerraform(struct!.matchLength),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    smart: organizationmanagerIdpUserpoolPasswordQualityPolicySmartToTerraform(struct!.smart),
  }
}


export function organizationmanagerIdpUserpoolPasswordQualityPolicyToHclTerraform(struct?: OrganizationmanagerIdpUserpoolPasswordQualityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_similar: {
      value: cdktf.booleanToHclTerraform(struct!.allowSimilar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed: {
      value: organizationmanagerIdpUserpoolPasswordQualityPolicyFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "struct",
      storageClassType: "OrganizationmanagerIdpUserpoolPasswordQualityPolicyFixed",
    },
    match_length: {
      value: cdktf.numberToHclTerraform(struct!.matchLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart: {
      value: organizationmanagerIdpUserpoolPasswordQualityPolicySmartToHclTerraform(struct!.smart),
      isBlock: true,
      type: "struct",
      storageClassType: "OrganizationmanagerIdpUserpoolPasswordQualityPolicySmart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpUserpoolPasswordQualityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpUserpoolPasswordQualityPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSimilar !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSimilar = this._allowSimilar;
    }
    if (this._fixed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed?.internalValue;
    }
    if (this._matchLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLength = this._matchLength;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._smart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smart = this._smart?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpUserpoolPasswordQualityPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowSimilar = undefined;
      this._fixed.internalValue = undefined;
      this._matchLength = undefined;
      this._maxLength = undefined;
      this._smart.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowSimilar = value.allowSimilar;
      this._fixed.internalValue = value.fixed;
      this._matchLength = value.matchLength;
      this._maxLength = value.maxLength;
      this._smart.internalValue = value.smart;
    }
  }

  // allow_similar - computed: true, optional: true, required: false
  private _allowSimilar?: boolean | cdktf.IResolvable; 
  public get allowSimilar() {
    return this.getBooleanAttribute('allow_similar');
  }
  public set allowSimilar(value: boolean | cdktf.IResolvable) {
    this._allowSimilar = value;
  }
  public resetAllowSimilar() {
    this._allowSimilar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSimilarInput() {
    return this._allowSimilar;
  }

  // fixed - computed: true, optional: true, required: false
  private _fixed = new OrganizationmanagerIdpUserpoolPasswordQualityPolicyFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: OrganizationmanagerIdpUserpoolPasswordQualityPolicyFixed) {
    this._fixed.internalValue = value;
  }
  public resetFixed() {
    this._fixed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed.internalValue;
  }

  // match_length - computed: true, optional: true, required: false
  private _matchLength?: number; 
  public get matchLength() {
    return this.getNumberAttribute('match_length');
  }
  public set matchLength(value: number) {
    this._matchLength = value;
  }
  public resetMatchLength() {
    this._matchLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLengthInput() {
    return this._matchLength;
  }

  // max_length - computed: true, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // smart - computed: true, optional: true, required: false
  private _smart = new OrganizationmanagerIdpUserpoolPasswordQualityPolicySmartOutputReference(this, "smart");
  public get smart() {
    return this._smart;
  }
  public putSmart(value: OrganizationmanagerIdpUserpoolPasswordQualityPolicySmart) {
    this._smart.internalValue = value;
  }
  public resetSmart() {
    this._smart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartInput() {
    return this._smart.internalValue;
  }
}
export interface OrganizationmanagerIdpUserpoolTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#create OrganizationmanagerIdpUserpool#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#delete OrganizationmanagerIdpUserpool#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#read OrganizationmanagerIdpUserpool#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#update OrganizationmanagerIdpUserpool#update}
  */
  readonly update?: string;
}

export function organizationmanagerIdpUserpoolTimeoutsToTerraform(struct?: OrganizationmanagerIdpUserpoolTimeouts | cdktf.IResolvable): any {
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


export function organizationmanagerIdpUserpoolTimeoutsToHclTerraform(struct?: OrganizationmanagerIdpUserpoolTimeouts | cdktf.IResolvable): any {
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

export class OrganizationmanagerIdpUserpoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpUserpoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrganizationmanagerIdpUserpoolTimeouts | cdktf.IResolvable | undefined) {
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
export interface OrganizationmanagerIdpUserpoolUserSettings {
  /**
  * Whether users can edit their own contact information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#allow_edit_self_contacts OrganizationmanagerIdpUserpool#allow_edit_self_contacts}
  */
  readonly allowEditSelfContacts?: boolean | cdktf.IResolvable;
  /**
  * Whether users can edit their own profile information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#allow_edit_self_info OrganizationmanagerIdpUserpool#allow_edit_self_info}
  */
  readonly allowEditSelfInfo?: boolean | cdktf.IResolvable;
  /**
  * Whether users can edit their own login information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#allow_edit_self_login OrganizationmanagerIdpUserpool#allow_edit_self_login}
  */
  readonly allowEditSelfLogin?: boolean | cdktf.IResolvable;
  /**
  * Whether users can change their own passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#allow_edit_self_password OrganizationmanagerIdpUserpool#allow_edit_self_password}
  */
  readonly allowEditSelfPassword?: boolean | cdktf.IResolvable;
}

export function organizationmanagerIdpUserpoolUserSettingsToTerraform(struct?: OrganizationmanagerIdpUserpoolUserSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_edit_self_contacts: cdktf.booleanToTerraform(struct!.allowEditSelfContacts),
    allow_edit_self_info: cdktf.booleanToTerraform(struct!.allowEditSelfInfo),
    allow_edit_self_login: cdktf.booleanToTerraform(struct!.allowEditSelfLogin),
    allow_edit_self_password: cdktf.booleanToTerraform(struct!.allowEditSelfPassword),
  }
}


export function organizationmanagerIdpUserpoolUserSettingsToHclTerraform(struct?: OrganizationmanagerIdpUserpoolUserSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_edit_self_contacts: {
      value: cdktf.booleanToHclTerraform(struct!.allowEditSelfContacts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_edit_self_info: {
      value: cdktf.booleanToHclTerraform(struct!.allowEditSelfInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_edit_self_login: {
      value: cdktf.booleanToHclTerraform(struct!.allowEditSelfLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_edit_self_password: {
      value: cdktf.booleanToHclTerraform(struct!.allowEditSelfPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpUserpoolUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpUserpoolUserSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEditSelfContacts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEditSelfContacts = this._allowEditSelfContacts;
    }
    if (this._allowEditSelfInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEditSelfInfo = this._allowEditSelfInfo;
    }
    if (this._allowEditSelfLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEditSelfLogin = this._allowEditSelfLogin;
    }
    if (this._allowEditSelfPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEditSelfPassword = this._allowEditSelfPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpUserpoolUserSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowEditSelfContacts = undefined;
      this._allowEditSelfInfo = undefined;
      this._allowEditSelfLogin = undefined;
      this._allowEditSelfPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowEditSelfContacts = value.allowEditSelfContacts;
      this._allowEditSelfInfo = value.allowEditSelfInfo;
      this._allowEditSelfLogin = value.allowEditSelfLogin;
      this._allowEditSelfPassword = value.allowEditSelfPassword;
    }
  }

  // allow_edit_self_contacts - computed: true, optional: true, required: false
  private _allowEditSelfContacts?: boolean | cdktf.IResolvable; 
  public get allowEditSelfContacts() {
    return this.getBooleanAttribute('allow_edit_self_contacts');
  }
  public set allowEditSelfContacts(value: boolean | cdktf.IResolvable) {
    this._allowEditSelfContacts = value;
  }
  public resetAllowEditSelfContacts() {
    this._allowEditSelfContacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEditSelfContactsInput() {
    return this._allowEditSelfContacts;
  }

  // allow_edit_self_info - computed: true, optional: true, required: false
  private _allowEditSelfInfo?: boolean | cdktf.IResolvable; 
  public get allowEditSelfInfo() {
    return this.getBooleanAttribute('allow_edit_self_info');
  }
  public set allowEditSelfInfo(value: boolean | cdktf.IResolvable) {
    this._allowEditSelfInfo = value;
  }
  public resetAllowEditSelfInfo() {
    this._allowEditSelfInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEditSelfInfoInput() {
    return this._allowEditSelfInfo;
  }

  // allow_edit_self_login - computed: true, optional: true, required: false
  private _allowEditSelfLogin?: boolean | cdktf.IResolvable; 
  public get allowEditSelfLogin() {
    return this.getBooleanAttribute('allow_edit_self_login');
  }
  public set allowEditSelfLogin(value: boolean | cdktf.IResolvable) {
    this._allowEditSelfLogin = value;
  }
  public resetAllowEditSelfLogin() {
    this._allowEditSelfLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEditSelfLoginInput() {
    return this._allowEditSelfLogin;
  }

  // allow_edit_self_password - computed: true, optional: true, required: false
  private _allowEditSelfPassword?: boolean | cdktf.IResolvable; 
  public get allowEditSelfPassword() {
    return this.getBooleanAttribute('allow_edit_self_password');
  }
  public set allowEditSelfPassword(value: boolean | cdktf.IResolvable) {
    this._allowEditSelfPassword = value;
  }
  public resetAllowEditSelfPassword() {
    this._allowEditSelfPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEditSelfPasswordInput() {
    return this._allowEditSelfPassword;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool yandex_organizationmanager_idp_userpool}
*/
export class OrganizationmanagerIdpUserpool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_organizationmanager_idp_userpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationmanagerIdpUserpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationmanagerIdpUserpool to import
  * @param importFromId The id of the existing OrganizationmanagerIdpUserpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationmanagerIdpUserpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_organizationmanager_idp_userpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/organizationmanager_idp_userpool yandex_organizationmanager_idp_userpool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationmanagerIdpUserpoolConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationmanagerIdpUserpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_organizationmanager_idp_userpool',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bruteforceProtectionPolicy.internalValue = config.bruteforceProtectionPolicy;
    this._defaultSubdomain = config.defaultSubdomain;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._passwordLifetimePolicy.internalValue = config.passwordLifetimePolicy;
    this._passwordQualityPolicy.internalValue = config.passwordQualityPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._userSettings.internalValue = config.userSettings;
    this._userpoolId = config.userpoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bruteforce_protection_policy - computed: true, optional: true, required: false
  private _bruteforceProtectionPolicy = new OrganizationmanagerIdpUserpoolBruteforceProtectionPolicyOutputReference(this, "bruteforce_protection_policy");
  public get bruteforceProtectionPolicy() {
    return this._bruteforceProtectionPolicy;
  }
  public putBruteforceProtectionPolicy(value: OrganizationmanagerIdpUserpoolBruteforceProtectionPolicy) {
    this._bruteforceProtectionPolicy.internalValue = value;
  }
  public resetBruteforceProtectionPolicy() {
    this._bruteforceProtectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bruteforceProtectionPolicyInput() {
    return this._bruteforceProtectionPolicy.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_subdomain - computed: false, optional: false, required: true
  private _defaultSubdomain?: string; 
  public get defaultSubdomain() {
    return this.getStringAttribute('default_subdomain');
  }
  public set defaultSubdomain(value: string) {
    this._defaultSubdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSubdomainInput() {
    return this._defaultSubdomain;
  }

  // description - computed: true, optional: true, required: false
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

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return this.getListAttribute('domains');
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

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // password_lifetime_policy - computed: true, optional: true, required: false
  private _passwordLifetimePolicy = new OrganizationmanagerIdpUserpoolPasswordLifetimePolicyOutputReference(this, "password_lifetime_policy");
  public get passwordLifetimePolicy() {
    return this._passwordLifetimePolicy;
  }
  public putPasswordLifetimePolicy(value: OrganizationmanagerIdpUserpoolPasswordLifetimePolicy) {
    this._passwordLifetimePolicy.internalValue = value;
  }
  public resetPasswordLifetimePolicy() {
    this._passwordLifetimePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLifetimePolicyInput() {
    return this._passwordLifetimePolicy.internalValue;
  }

  // password_quality_policy - computed: true, optional: true, required: false
  private _passwordQualityPolicy = new OrganizationmanagerIdpUserpoolPasswordQualityPolicyOutputReference(this, "password_quality_policy");
  public get passwordQualityPolicy() {
    return this._passwordQualityPolicy;
  }
  public putPasswordQualityPolicy(value: OrganizationmanagerIdpUserpoolPasswordQualityPolicy) {
    this._passwordQualityPolicy.internalValue = value;
  }
  public resetPasswordQualityPolicy() {
    this._passwordQualityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordQualityPolicyInput() {
    return this._passwordQualityPolicy.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrganizationmanagerIdpUserpoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrganizationmanagerIdpUserpoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_settings - computed: true, optional: true, required: false
  private _userSettings = new OrganizationmanagerIdpUserpoolUserSettingsOutputReference(this, "user_settings");
  public get userSettings() {
    return this._userSettings;
  }
  public putUserSettings(value: OrganizationmanagerIdpUserpoolUserSettings) {
    this._userSettings.internalValue = value;
  }
  public resetUserSettings() {
    this._userSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsInput() {
    return this._userSettings.internalValue;
  }

  // userpool_id - computed: true, optional: true, required: false
  private _userpoolId?: string; 
  public get userpoolId() {
    return this.getStringAttribute('userpool_id');
  }
  public set userpoolId(value: string) {
    this._userpoolId = value;
  }
  public resetUserpoolId() {
    this._userpoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userpoolIdInput() {
    return this._userpoolId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bruteforce_protection_policy: organizationmanagerIdpUserpoolBruteforceProtectionPolicyToTerraform(this._bruteforceProtectionPolicy.internalValue),
      default_subdomain: cdktf.stringToTerraform(this._defaultSubdomain),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      password_lifetime_policy: organizationmanagerIdpUserpoolPasswordLifetimePolicyToTerraform(this._passwordLifetimePolicy.internalValue),
      password_quality_policy: organizationmanagerIdpUserpoolPasswordQualityPolicyToTerraform(this._passwordQualityPolicy.internalValue),
      timeouts: organizationmanagerIdpUserpoolTimeoutsToTerraform(this._timeouts.internalValue),
      user_settings: organizationmanagerIdpUserpoolUserSettingsToTerraform(this._userSettings.internalValue),
      userpool_id: cdktf.stringToTerraform(this._userpoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bruteforce_protection_policy: {
        value: organizationmanagerIdpUserpoolBruteforceProtectionPolicyToHclTerraform(this._bruteforceProtectionPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpUserpoolBruteforceProtectionPolicy",
      },
      default_subdomain: {
        value: cdktf.stringToHclTerraform(this._defaultSubdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_lifetime_policy: {
        value: organizationmanagerIdpUserpoolPasswordLifetimePolicyToHclTerraform(this._passwordLifetimePolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpUserpoolPasswordLifetimePolicy",
      },
      password_quality_policy: {
        value: organizationmanagerIdpUserpoolPasswordQualityPolicyToHclTerraform(this._passwordQualityPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpUserpoolPasswordQualityPolicy",
      },
      timeouts: {
        value: organizationmanagerIdpUserpoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpUserpoolTimeouts",
      },
      user_settings: {
        value: organizationmanagerIdpUserpoolUserSettingsToHclTerraform(this._userSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpUserpoolUserSettings",
      },
      userpool_id: {
        value: cdktf.stringToHclTerraform(this._userpoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
