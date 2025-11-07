// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationAuthenticationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of domains that will be allowed to embed Genesys Cloud applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#domain_allowlist OrganizationAuthenticationSettings#domain_allowlist}
  */
  readonly domainAllowlist?: string[];
  /**
  * Indicates whether the domain allowlist is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#domain_allowlist_enabled OrganizationAuthenticationSettings#domain_allowlist_enabled}
  */
  readonly domainAllowlistEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#id OrganizationAuthenticationSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The list of IP addresses that will be allowed to authenticate with Genesys Cloud. Warning: Changing these will result in only allowing specified ip Addresses to log in and will invalidate credentials with a different ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#ip_address_allowlist OrganizationAuthenticationSettings#ip_address_allowlist}
  */
  readonly ipAddressAllowlist?: string[];
  /**
  * Indicates whether multi-factor authentication is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#multifactor_authentication_required OrganizationAuthenticationSettings#multifactor_authentication_required}
  */
  readonly multifactorAuthenticationRequired?: boolean | cdktf.IResolvable;
  /**
  * password_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#password_requirements OrganizationAuthenticationSettings#password_requirements}
  */
  readonly passwordRequirements?: OrganizationAuthenticationSettingsPasswordRequirements;
  /**
  * timeout_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#timeout_settings OrganizationAuthenticationSettings#timeout_settings}
  */
  readonly timeoutSettings?: OrganizationAuthenticationSettingsTimeoutSettings;
}
export interface OrganizationAuthenticationSettingsPasswordRequirements {
  /**
  * Length of time (in days) before a password must be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#expiration_days OrganizationAuthenticationSettings#expiration_days}
  */
  readonly expirationDays?: number;
  /**
  * Minimum age of the password (in seconds) before it can be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#minimum_age_seconds OrganizationAuthenticationSettings#minimum_age_seconds}
  */
  readonly minimumAgeSeconds?: number;
  /**
  * The minimum number of numerals (0-9) that must be included in passwords Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#minimum_digits OrganizationAuthenticationSettings#minimum_digits}
  */
  readonly minimumDigits?: number;
  /**
  * The minimum character length for passwords Defaults to `8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#minimum_length OrganizationAuthenticationSettings#minimum_length}
  */
  readonly minimumLength?: number;
  /**
  * The minimum number of characters required for passwords Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#minimum_letters OrganizationAuthenticationSettings#minimum_letters}
  */
  readonly minimumLetters?: number;
  /**
  * The minimum number of lower case letters that must be included in passwords Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#minimum_lower OrganizationAuthenticationSettings#minimum_lower}
  */
  readonly minimumLower?: number;
  /**
  * The minimum number of special characters that must be included in passwords Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#minimum_specials OrganizationAuthenticationSettings#minimum_specials}
  */
  readonly minimumSpecials?: number;
  /**
  * The minimum number of upper case letters that must be included in passwords Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#minimum_upper OrganizationAuthenticationSettings#minimum_upper}
  */
  readonly minimumUpper?: number;
}

export function organizationAuthenticationSettingsPasswordRequirementsToTerraform(struct?: OrganizationAuthenticationSettingsPasswordRequirementsOutputReference | OrganizationAuthenticationSettingsPasswordRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_days: cdktf.numberToTerraform(struct!.expirationDays),
    minimum_age_seconds: cdktf.numberToTerraform(struct!.minimumAgeSeconds),
    minimum_digits: cdktf.numberToTerraform(struct!.minimumDigits),
    minimum_length: cdktf.numberToTerraform(struct!.minimumLength),
    minimum_letters: cdktf.numberToTerraform(struct!.minimumLetters),
    minimum_lower: cdktf.numberToTerraform(struct!.minimumLower),
    minimum_specials: cdktf.numberToTerraform(struct!.minimumSpecials),
    minimum_upper: cdktf.numberToTerraform(struct!.minimumUpper),
  }
}


export function organizationAuthenticationSettingsPasswordRequirementsToHclTerraform(struct?: OrganizationAuthenticationSettingsPasswordRequirementsOutputReference | OrganizationAuthenticationSettingsPasswordRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_days: {
      value: cdktf.numberToHclTerraform(struct!.expirationDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_age_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minimumAgeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_digits: {
      value: cdktf.numberToHclTerraform(struct!.minimumDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_length: {
      value: cdktf.numberToHclTerraform(struct!.minimumLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_letters: {
      value: cdktf.numberToHclTerraform(struct!.minimumLetters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_lower: {
      value: cdktf.numberToHclTerraform(struct!.minimumLower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_specials: {
      value: cdktf.numberToHclTerraform(struct!.minimumSpecials),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_upper: {
      value: cdktf.numberToHclTerraform(struct!.minimumUpper),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationAuthenticationSettingsPasswordRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationAuthenticationSettingsPasswordRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDays = this._expirationDays;
    }
    if (this._minimumAgeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumAgeSeconds = this._minimumAgeSeconds;
    }
    if (this._minimumDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumDigits = this._minimumDigits;
    }
    if (this._minimumLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLength = this._minimumLength;
    }
    if (this._minimumLetters !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLetters = this._minimumLetters;
    }
    if (this._minimumLower !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLower = this._minimumLower;
    }
    if (this._minimumSpecials !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSpecials = this._minimumSpecials;
    }
    if (this._minimumUpper !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumUpper = this._minimumUpper;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationAuthenticationSettingsPasswordRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationDays = undefined;
      this._minimumAgeSeconds = undefined;
      this._minimumDigits = undefined;
      this._minimumLength = undefined;
      this._minimumLetters = undefined;
      this._minimumLower = undefined;
      this._minimumSpecials = undefined;
      this._minimumUpper = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationDays = value.expirationDays;
      this._minimumAgeSeconds = value.minimumAgeSeconds;
      this._minimumDigits = value.minimumDigits;
      this._minimumLength = value.minimumLength;
      this._minimumLetters = value.minimumLetters;
      this._minimumLower = value.minimumLower;
      this._minimumSpecials = value.minimumSpecials;
      this._minimumUpper = value.minimumUpper;
    }
  }

  // expiration_days - computed: false, optional: true, required: false
  private _expirationDays?: number; 
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }
  public set expirationDays(value: number) {
    this._expirationDays = value;
  }
  public resetExpirationDays() {
    this._expirationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDaysInput() {
    return this._expirationDays;
  }

  // minimum_age_seconds - computed: false, optional: true, required: false
  private _minimumAgeSeconds?: number; 
  public get minimumAgeSeconds() {
    return this.getNumberAttribute('minimum_age_seconds');
  }
  public set minimumAgeSeconds(value: number) {
    this._minimumAgeSeconds = value;
  }
  public resetMinimumAgeSeconds() {
    this._minimumAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumAgeSecondsInput() {
    return this._minimumAgeSeconds;
  }

  // minimum_digits - computed: false, optional: true, required: false
  private _minimumDigits?: number; 
  public get minimumDigits() {
    return this.getNumberAttribute('minimum_digits');
  }
  public set minimumDigits(value: number) {
    this._minimumDigits = value;
  }
  public resetMinimumDigits() {
    this._minimumDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumDigitsInput() {
    return this._minimumDigits;
  }

  // minimum_length - computed: false, optional: true, required: false
  private _minimumLength?: number; 
  public get minimumLength() {
    return this.getNumberAttribute('minimum_length');
  }
  public set minimumLength(value: number) {
    this._minimumLength = value;
  }
  public resetMinimumLength() {
    this._minimumLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLengthInput() {
    return this._minimumLength;
  }

  // minimum_letters - computed: false, optional: true, required: false
  private _minimumLetters?: number; 
  public get minimumLetters() {
    return this.getNumberAttribute('minimum_letters');
  }
  public set minimumLetters(value: number) {
    this._minimumLetters = value;
  }
  public resetMinimumLetters() {
    this._minimumLetters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLettersInput() {
    return this._minimumLetters;
  }

  // minimum_lower - computed: false, optional: true, required: false
  private _minimumLower?: number; 
  public get minimumLower() {
    return this.getNumberAttribute('minimum_lower');
  }
  public set minimumLower(value: number) {
    this._minimumLower = value;
  }
  public resetMinimumLower() {
    this._minimumLower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLowerInput() {
    return this._minimumLower;
  }

  // minimum_specials - computed: false, optional: true, required: false
  private _minimumSpecials?: number; 
  public get minimumSpecials() {
    return this.getNumberAttribute('minimum_specials');
  }
  public set minimumSpecials(value: number) {
    this._minimumSpecials = value;
  }
  public resetMinimumSpecials() {
    this._minimumSpecials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSpecialsInput() {
    return this._minimumSpecials;
  }

  // minimum_upper - computed: false, optional: true, required: false
  private _minimumUpper?: number; 
  public get minimumUpper() {
    return this.getNumberAttribute('minimum_upper');
  }
  public set minimumUpper(value: number) {
    this._minimumUpper = value;
  }
  public resetMinimumUpper() {
    this._minimumUpper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumUpperInput() {
    return this._minimumUpper;
  }
}
export interface OrganizationAuthenticationSettingsTimeoutSettings {
  /**
  * Indicates whether the Token Timeout should be enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#enable_idle_token_timeout OrganizationAuthenticationSettings#enable_idle_token_timeout}
  */
  readonly enableIdleTokenTimeout: boolean | cdktf.IResolvable;
  /**
  * Token timeout length in seconds. Must be at least 5 minutes and 8 hours or less (if HIPAA is disabled) or 15 minutes or less (if HIPAA is enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#idle_token_timeout_seconds OrganizationAuthenticationSettings#idle_token_timeout_seconds}
  */
  readonly idleTokenTimeoutSeconds: number;
}

export function organizationAuthenticationSettingsTimeoutSettingsToTerraform(struct?: OrganizationAuthenticationSettingsTimeoutSettingsOutputReference | OrganizationAuthenticationSettingsTimeoutSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_idle_token_timeout: cdktf.booleanToTerraform(struct!.enableIdleTokenTimeout),
    idle_token_timeout_seconds: cdktf.numberToTerraform(struct!.idleTokenTimeoutSeconds),
  }
}


export function organizationAuthenticationSettingsTimeoutSettingsToHclTerraform(struct?: OrganizationAuthenticationSettingsTimeoutSettingsOutputReference | OrganizationAuthenticationSettingsTimeoutSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_idle_token_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.enableIdleTokenTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idle_token_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.idleTokenTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationAuthenticationSettingsTimeoutSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationAuthenticationSettingsTimeoutSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIdleTokenTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdleTokenTimeout = this._enableIdleTokenTimeout;
    }
    if (this._idleTokenTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTokenTimeoutSeconds = this._idleTokenTimeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationAuthenticationSettingsTimeoutSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIdleTokenTimeout = undefined;
      this._idleTokenTimeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIdleTokenTimeout = value.enableIdleTokenTimeout;
      this._idleTokenTimeoutSeconds = value.idleTokenTimeoutSeconds;
    }
  }

  // enable_idle_token_timeout - computed: false, optional: false, required: true
  private _enableIdleTokenTimeout?: boolean | cdktf.IResolvable; 
  public get enableIdleTokenTimeout() {
    return this.getBooleanAttribute('enable_idle_token_timeout');
  }
  public set enableIdleTokenTimeout(value: boolean | cdktf.IResolvable) {
    this._enableIdleTokenTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdleTokenTimeoutInput() {
    return this._enableIdleTokenTimeout;
  }

  // idle_token_timeout_seconds - computed: false, optional: false, required: true
  private _idleTokenTimeoutSeconds?: number; 
  public get idleTokenTimeoutSeconds() {
    return this.getNumberAttribute('idle_token_timeout_seconds');
  }
  public set idleTokenTimeoutSeconds(value: number) {
    this._idleTokenTimeoutSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTokenTimeoutSecondsInput() {
    return this._idleTokenTimeoutSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings genesyscloud_organization_authentication_settings}
*/
export class OrganizationAuthenticationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_organization_authentication_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationAuthenticationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationAuthenticationSettings to import
  * @param importFromId The id of the existing OrganizationAuthenticationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationAuthenticationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_organization_authentication_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/organization_authentication_settings genesyscloud_organization_authentication_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationAuthenticationSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrganizationAuthenticationSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_organization_authentication_settings',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainAllowlist = config.domainAllowlist;
    this._domainAllowlistEnabled = config.domainAllowlistEnabled;
    this._id = config.id;
    this._ipAddressAllowlist = config.ipAddressAllowlist;
    this._multifactorAuthenticationRequired = config.multifactorAuthenticationRequired;
    this._passwordRequirements.internalValue = config.passwordRequirements;
    this._timeoutSettings.internalValue = config.timeoutSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_allowlist - computed: false, optional: true, required: false
  private _domainAllowlist?: string[]; 
  public get domainAllowlist() {
    return this.getListAttribute('domain_allowlist');
  }
  public set domainAllowlist(value: string[]) {
    this._domainAllowlist = value;
  }
  public resetDomainAllowlist() {
    this._domainAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAllowlistInput() {
    return this._domainAllowlist;
  }

  // domain_allowlist_enabled - computed: false, optional: true, required: false
  private _domainAllowlistEnabled?: boolean | cdktf.IResolvable; 
  public get domainAllowlistEnabled() {
    return this.getBooleanAttribute('domain_allowlist_enabled');
  }
  public set domainAllowlistEnabled(value: boolean | cdktf.IResolvable) {
    this._domainAllowlistEnabled = value;
  }
  public resetDomainAllowlistEnabled() {
    this._domainAllowlistEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAllowlistEnabledInput() {
    return this._domainAllowlistEnabled;
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

  // ip_address_allowlist - computed: false, optional: true, required: false
  private _ipAddressAllowlist?: string[]; 
  public get ipAddressAllowlist() {
    return this.getListAttribute('ip_address_allowlist');
  }
  public set ipAddressAllowlist(value: string[]) {
    this._ipAddressAllowlist = value;
  }
  public resetIpAddressAllowlist() {
    this._ipAddressAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressAllowlistInput() {
    return this._ipAddressAllowlist;
  }

  // multifactor_authentication_required - computed: false, optional: true, required: false
  private _multifactorAuthenticationRequired?: boolean | cdktf.IResolvable; 
  public get multifactorAuthenticationRequired() {
    return this.getBooleanAttribute('multifactor_authentication_required');
  }
  public set multifactorAuthenticationRequired(value: boolean | cdktf.IResolvable) {
    this._multifactorAuthenticationRequired = value;
  }
  public resetMultifactorAuthenticationRequired() {
    this._multifactorAuthenticationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multifactorAuthenticationRequiredInput() {
    return this._multifactorAuthenticationRequired;
  }

  // password_requirements - computed: false, optional: true, required: false
  private _passwordRequirements = new OrganizationAuthenticationSettingsPasswordRequirementsOutputReference(this, "password_requirements");
  public get passwordRequirements() {
    return this._passwordRequirements;
  }
  public putPasswordRequirements(value: OrganizationAuthenticationSettingsPasswordRequirements) {
    this._passwordRequirements.internalValue = value;
  }
  public resetPasswordRequirements() {
    this._passwordRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequirementsInput() {
    return this._passwordRequirements.internalValue;
  }

  // timeout_settings - computed: false, optional: true, required: false
  private _timeoutSettings = new OrganizationAuthenticationSettingsTimeoutSettingsOutputReference(this, "timeout_settings");
  public get timeoutSettings() {
    return this._timeoutSettings;
  }
  public putTimeoutSettings(value: OrganizationAuthenticationSettingsTimeoutSettings) {
    this._timeoutSettings.internalValue = value;
  }
  public resetTimeoutSettings() {
    this._timeoutSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSettingsInput() {
    return this._timeoutSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainAllowlist),
      domain_allowlist_enabled: cdktf.booleanToTerraform(this._domainAllowlistEnabled),
      id: cdktf.stringToTerraform(this._id),
      ip_address_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddressAllowlist),
      multifactor_authentication_required: cdktf.booleanToTerraform(this._multifactorAuthenticationRequired),
      password_requirements: organizationAuthenticationSettingsPasswordRequirementsToTerraform(this._passwordRequirements.internalValue),
      timeout_settings: organizationAuthenticationSettingsTimeoutSettingsToTerraform(this._timeoutSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainAllowlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domain_allowlist_enabled: {
        value: cdktf.booleanToHclTerraform(this._domainAllowlistEnabled),
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
      ip_address_allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddressAllowlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      multifactor_authentication_required: {
        value: cdktf.booleanToHclTerraform(this._multifactorAuthenticationRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_requirements: {
        value: organizationAuthenticationSettingsPasswordRequirementsToHclTerraform(this._passwordRequirements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationAuthenticationSettingsPasswordRequirementsList",
      },
      timeout_settings: {
        value: organizationAuthenticationSettingsTimeoutSettingsToHclTerraform(this._timeoutSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationAuthenticationSettingsTimeoutSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
