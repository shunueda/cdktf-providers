// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * A single object that specifies the user's account information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#account User#account}
  */
  readonly account?: UserAccount;
  /**
  * A single object that specifies the user's address information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#address User#address}
  */
  readonly address?: UserAddress;
  /**
  * A string that specifies the user's email address, which must be provided and valid. For more information about email address formatting, see section 3.4 of [RFC 2822, Internet Message Format](http://www.faqs.org/rfcs/rfc2822.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * A boolean that specifies whether the user is enabled. This attribute is set to `true` by default when the user is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#enabled User#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the environment to manage the user in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#environment_id User#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies an identifier for the user resource as defined by the provisioning client. This may be explicitly set to null when updating a user to unset it. The external id attribute simplifies the correlation of the user in PingOne with the user's account in another system of record. The platform does not use this attribute directly in any way, but it is used by Ping Identity's Data Sync product. It can have a length of no more than 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#external_id User#external_id}
  */
  readonly externalId?: string;
  /**
  * A single object that specifies the user's identity provider information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#identity_provider User#identity_provider}
  */
  readonly identityProvider?: UserIdentityProvider;
  /**
  * A string that specifies the user's default location. This may be explicitly set to null when updating a user to unset it. This is used for purposes of localizing such items as currency, date time format, or numerical representations. If provided, it must be a valid language tag as defined in [RFC 5646](https://www.rfc-editor.org/rfc/rfc5646.html). The following are example tags: `fr`, `en-US`, `es-419`, `az-Arab`, `man-Nkoo-GN`. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace. It can have a length of no more than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#locale User#locale}
  */
  readonly locale?: string;
  /**
  * A boolean that specifies whether multi-factor authentication is enabled.  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#mfa_enabled User#mfa_enabled}
  */
  readonly mfaEnabled?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the user's native phone number. This might also match the `primary_phone` attribute. This may be explicitly set to null when updating a user to unset it. Valid phone numbers must have at least one number and a maximum character length of 32.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#mobile_phone User#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * A single object that specifies the user's name information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#name User#name}
  */
  readonly name?: UserName;
  /**
  * A string that specifies the user's nickname. This can be explicitly set to null when updating a user to unset it. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace. It can have a length of no more than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#nickname User#nickname}
  */
  readonly nickname?: string;
  /**
  * A single object that specifies the user's password information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#password User#password}
  */
  readonly password?: UserPassword;
  /**
  * A single object that describes the user's photo information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#photo User#photo}
  */
  readonly photo?: UserPhoto;
  /**
  * The identifier of the population resource associated with the user.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#population_id User#population_id}
  */
  readonly populationId: string;
  /**
  * A string that specifies the user's preferred written or spoken languages. This may be explicitly set to null when updating a user to unset it. If provided, the format of the value must be a valid language range and the same as the HTTP `Accept-Language` header field (not including `Accept-Language:` prefix) and is specified in [Section 5.3.5 of RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-5.3.5). For example: `en-US`, `en-gb;q=0.8`, `en;q=0.7`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#preferred_language User#preferred_language}
  */
  readonly preferredLanguage?: string;
  /**
  * A string that specifies the user's primary phone number. This might also match the `mobile_phone` attribute. This may be explicitly set to null when updating a user to unset it. Valid phone numbers must have at least one number and a maximum character length of 32.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#primary_phone User#primary_phone}
  */
  readonly primaryPhone?: string;
  /**
  * A string that specifies the user's time zone. This can be explicitly set to null when updating a user to unset it. If provided, it must conform with the IANA Time Zone database format [RFC 6557](https://www.rfc-editor.org/rfc/rfc6557.html), also known as the "Olson" time zone database format [Olson-TZ](https://www.iana.org/time-zones) for example, `America/Los_Angeles`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#timezone User#timezone}
  */
  readonly timezone?: string;
  /**
  * A string that specifies the user's title, such as `Vice President`. This can be explicitly set to null when updating a user to unset it. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace. It can have a length of no more than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#title User#title}
  */
  readonly title?: string;
  /**
  * A string that specifies the user's type, which is optional. This can be explicitly set to null when updating a user to unset it. This attribute is organization-specific and has no special meaning within the PingOne platform. It is a free-text field that could have values of (for example) `Contractor`, `Employee`, `Intern`, `Temp`, `External`, and `Unknown`. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace. It can have a length of no more than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#type User#type}
  */
  readonly type?: string;
  /**
  * A single object that specifies the user's identity lifecycle information.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#user_lifecycle User#user_lifecycle}
  */
  readonly userLifecycle?: UserUserLifecycle;
  /**
  * A string that specifies the user name, which must be provided and must be unique within an environment. The `username` must either be a well-formed email address or a string. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#username User#username}
  */
  readonly username: string;
  /**
  * A string that indicates whether ID verification can be done for the user.  Options are `DISABLED`, `ENABLED`, `NOT_INITIATED`.  If the user verification status is `DISABLED`, a new verification status cannot be created for that user until the status is changed to `ENABLED`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#verify_status User#verify_status}
  */
  readonly verifyStatus?: string;
}
export interface UserAccount {
  /**
  * A boolean that specifies whether the user can authenticate. If the value is set to `false`, the account is locked or the user is disabled, and unless specified otherwise in administrative configuration, the user will be unable to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#can_authenticate User#can_authenticate}
  */
  readonly canAuthenticate?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the the account locked state.  Options are `LOCKED`, `OK`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#status User#status}
  */
  readonly status: string;
}

export function userAccountToTerraform(struct?: UserAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_authenticate: cdktf.booleanToTerraform(struct!.canAuthenticate),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function userAccountToHclTerraform(struct?: UserAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_authenticate: {
      value: cdktf.booleanToHclTerraform(struct!.canAuthenticate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canAuthenticate !== undefined) {
      hasAnyValues = true;
      internalValueResult.canAuthenticate = this._canAuthenticate;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canAuthenticate = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canAuthenticate = value.canAuthenticate;
      this._status = value.status;
    }
  }

  // can_authenticate - computed: true, optional: true, required: false
  private _canAuthenticate?: boolean | cdktf.IResolvable; 
  public get canAuthenticate() {
    return this.getBooleanAttribute('can_authenticate');
  }
  public set canAuthenticate(value: boolean | cdktf.IResolvable) {
    this._canAuthenticate = value;
  }
  public resetCanAuthenticate() {
    this._canAuthenticate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canAuthenticateInput() {
    return this._canAuthenticate;
  }

  // locked_at - computed: true, optional: false, required: false
  public get lockedAt() {
    return this.getStringAttribute('locked_at');
  }

  // status - computed: true, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface UserAddress {
  /**
  * A string that specifies the country name component. When specified, the value must be in [ISO 3166-1](https://www.iso.org/iso-3166-country-codes.html) "alpha-2" code format. For example, the country codes for the United States and Sweden are `US` and `SE`, respectively. Valid characters consist of two upper-case letters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#country_code User#country_code}
  */
  readonly countryCode?: string;
  /**
  * A string that specifies the city or locality component of the address. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace. It can have a length of no more than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#locality User#locality}
  */
  readonly locality?: string;
  /**
  * A string that specifies the ZIP code or postal code component of the address. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace. It can have a length of no more than 40 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#postal_code User#postal_code}
  */
  readonly postalCode?: string;
  /**
  * A string that specifies the state, province, or region component of the address. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace. It can have a length of no more than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#region User#region}
  */
  readonly region?: string;
  /**
  * A string that specifies the full street address component, which may include house number, street name, P.O. box, and multi-line extended street address information. This attribute may contain newlines. It can have a length of no more than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#street_address User#street_address}
  */
  readonly streetAddress?: string;
}

export function userAddressToTerraform(struct?: UserAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    locality: cdktf.stringToTerraform(struct!.locality),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    region: cdktf.stringToTerraform(struct!.region),
    street_address: cdktf.stringToTerraform(struct!.streetAddress),
  }
}


export function userAddressToHclTerraform(struct?: UserAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street_address: {
      value: cdktf.stringToHclTerraform(struct!.streetAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._streetAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetAddress = this._streetAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
      this._locality = undefined;
      this._postalCode = undefined;
      this._region = undefined;
      this._streetAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
      this._locality = value.locality;
      this._postalCode = value.postalCode;
      this._region = value.region;
      this._streetAddress = value.streetAddress;
    }
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }
}
export interface UserIdentityProvider {
  /**
  * A string that identifies the external identity provider used to authenticate the user. If not provided, PingOne is the identity provider. This attribute is required if the identity provider is authoritative for just-in-time user provisioning.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function userIdentityProviderToTerraform(struct?: UserIdentityProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function userIdentityProviderToHclTerraform(struct?: UserIdentityProvider | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserIdentityProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserIdentityProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserIdentityProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface UserName {
  /**
  * A string that specifies the family name of the user, or Last in most Western languages (for example, `Jensen` given the full name `Ms. Barbara J Jensen, III`). This may be explicitly set to null when updating a name to unset it. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), space, dot, apostrophe, or hyphen. It can have a length of no more than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#family User#family}
  */
  readonly family?: string;
  /**
  * A string that specifies the fully formatted name of the user (for example `Ms. Barbara J Jensen, III`). This can be explicitly set to null when updating a name to unset it. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), space, dot, apostrophe, or hyphen. It can have a length of no more than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#formatted User#formatted}
  */
  readonly formatted?: string;
  /**
  * A string that specifies the given name of the user, or First in most Western languages (for example, `Barbara` given the full name `Ms. Barbara J Jensen, III`). This may be explicitly set to null when updating a name to unset it. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace. It can have a length of no more than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#given User#given}
  */
  readonly given?: string;
  /**
  * A string that specifies the honorific prefix(es) of the user, or title in most Western languages (for example, `Ms.` given the full name `Ms. Barbara Jane Jensen, III`). This can be explicitly set to null when updating a name to unset it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#honorific_prefix User#honorific_prefix}
  */
  readonly honorificPrefix?: string;
  /**
  * A string that specifies the honorific suffix(es) of the user, or suffix in most Western languages (for example, `III` given the full name `Ms. Barbara Jane Jensen, III`). This can be explicitly set to null when updating a name to unset it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#honorific_suffix User#honorific_suffix}
  */
  readonly honorificSuffix?: string;
  /**
  * A string that specifies the middle name(s) of the user (for exmple, `Jane` given the full name `Ms. Barbara Jane Jensen, III`). This can be explicitly set to null when updating a name to unset it. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace. It can have a length of no more than 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#middle User#middle}
  */
  readonly middle?: string;
}

export function userNameToTerraform(struct?: UserName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    formatted: cdktf.stringToTerraform(struct!.formatted),
    given: cdktf.stringToTerraform(struct!.given),
    honorific_prefix: cdktf.stringToTerraform(struct!.honorificPrefix),
    honorific_suffix: cdktf.stringToTerraform(struct!.honorificSuffix),
    middle: cdktf.stringToTerraform(struct!.middle),
  }
}


export function userNameToHclTerraform(struct?: UserName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    formatted: {
      value: cdktf.stringToHclTerraform(struct!.formatted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given: {
      value: cdktf.stringToHclTerraform(struct!.given),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    honorific_prefix: {
      value: cdktf.stringToHclTerraform(struct!.honorificPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    honorific_suffix: {
      value: cdktf.stringToHclTerraform(struct!.honorificSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    middle: {
      value: cdktf.stringToHclTerraform(struct!.middle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._formatted !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatted = this._formatted;
    }
    if (this._given !== undefined) {
      hasAnyValues = true;
      internalValueResult.given = this._given;
    }
    if (this._honorificPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorificPrefix = this._honorificPrefix;
    }
    if (this._honorificSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorificSuffix = this._honorificSuffix;
    }
    if (this._middle !== undefined) {
      hasAnyValues = true;
      internalValueResult.middle = this._middle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._formatted = undefined;
      this._given = undefined;
      this._honorificPrefix = undefined;
      this._honorificSuffix = undefined;
      this._middle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._formatted = value.formatted;
      this._given = value.given;
      this._honorificPrefix = value.honorificPrefix;
      this._honorificSuffix = value.honorificSuffix;
      this._middle = value.middle;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // formatted - computed: false, optional: true, required: false
  private _formatted?: string; 
  public get formatted() {
    return this.getStringAttribute('formatted');
  }
  public set formatted(value: string) {
    this._formatted = value;
  }
  public resetFormatted() {
    this._formatted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formattedInput() {
    return this._formatted;
  }

  // given - computed: false, optional: true, required: false
  private _given?: string; 
  public get given() {
    return this.getStringAttribute('given');
  }
  public set given(value: string) {
    this._given = value;
  }
  public resetGiven() {
    this._given = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenInput() {
    return this._given;
  }

  // honorific_prefix - computed: false, optional: true, required: false
  private _honorificPrefix?: string; 
  public get honorificPrefix() {
    return this.getStringAttribute('honorific_prefix');
  }
  public set honorificPrefix(value: string) {
    this._honorificPrefix = value;
  }
  public resetHonorificPrefix() {
    this._honorificPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorificPrefixInput() {
    return this._honorificPrefix;
  }

  // honorific_suffix - computed: false, optional: true, required: false
  private _honorificSuffix?: string; 
  public get honorificSuffix() {
    return this.getStringAttribute('honorific_suffix');
  }
  public set honorificSuffix(value: string) {
    this._honorificSuffix = value;
  }
  public resetHonorificSuffix() {
    this._honorificSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorificSuffixInput() {
    return this._honorificSuffix;
  }

  // middle - computed: false, optional: true, required: false
  private _middle?: string; 
  public get middle() {
    return this.getStringAttribute('middle');
  }
  public set middle(value: string) {
    this._middle = value;
  }
  public resetMiddle() {
    this._middle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleInput() {
    return this._middle;
  }
}
export interface UserPasswordExternalGateway {
  /**
  * A string map that maps the external LDAP directory attributes to PingOne attributes. PingOne uses these values to read the attributes from the external LDAP directory and map them to the corresponding PingOne attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#correlation_attributes User#correlation_attributes}
  */
  readonly correlationAttributes?: { [key: string]: string };
  /**
  * A string that specifies the UUID of the linked gateway that references the remote directory.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A string that indicates one of the supported gateway types.  Options are `API_GATEWAY_INTEGRATION`, `LDAP`, `PING_FEDERATE`, `PING_INTELLIGENCE`, `RADIUS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#type User#type}
  */
  readonly type?: string;
  /**
  * A string that specifies the UUID of a user type in the list of user types for the LDAP gateway.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#user_type_id User#user_type_id}
  */
  readonly userTypeId?: string;
}

export function userPasswordExternalGatewayToTerraform(struct?: UserPasswordExternalGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.correlationAttributes),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    user_type_id: cdktf.stringToTerraform(struct!.userTypeId),
  }
}


export function userPasswordExternalGatewayToHclTerraform(struct?: UserPasswordExternalGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlation_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.correlationAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    user_type_id: {
      value: cdktf.stringToHclTerraform(struct!.userTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserPasswordExternalGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserPasswordExternalGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlationAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlationAttributes = this._correlationAttributes;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTypeId = this._userTypeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPasswordExternalGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlationAttributes = undefined;
      this._id = undefined;
      this._type = undefined;
      this._userTypeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlationAttributes = value.correlationAttributes;
      this._id = value.id;
      this._type = value.type;
      this._userTypeId = value.userTypeId;
    }
  }

  // correlation_attributes - computed: false, optional: true, required: false
  private _correlationAttributes?: { [key: string]: string }; 
  public get correlationAttributes() {
    return this.getStringMapAttribute('correlation_attributes');
  }
  public set correlationAttributes(value: { [key: string]: string }) {
    this._correlationAttributes = value;
  }
  public resetCorrelationAttributes() {
    this._correlationAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationAttributesInput() {
    return this._correlationAttributes;
  }

  // id - computed: false, optional: true, required: false
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

  // user_type_id - computed: false, optional: true, required: false
  private _userTypeId?: string; 
  public get userTypeId() {
    return this.getStringAttribute('user_type_id');
  }
  public set userTypeId(value: string) {
    this._userTypeId = value;
  }
  public resetUserTypeId() {
    this._userTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeIdInput() {
    return this._userTypeId;
  }
}
export interface UserPasswordExternal {
  /**
  * A single object that contains the external gateway properties. When this is value is specified, the user's password is managed in an external directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#gateway User#gateway}
  */
  readonly gateway: UserPasswordExternalGateway;
}

export function userPasswordExternalToTerraform(struct?: UserPasswordExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: userPasswordExternalGatewayToTerraform(struct!.gateway),
  }
}


export function userPasswordExternalToHclTerraform(struct?: UserPasswordExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: userPasswordExternalGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "UserPasswordExternalGateway",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserPasswordExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserPasswordExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPasswordExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway.internalValue = value.gateway;
    }
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway = new UserPasswordExternalGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: UserPasswordExternalGateway) {
    this._gateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }
}
export interface UserPassword {
  /**
  * A single object that maps the information relevant to the user's password, and its association to external directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#external User#external}
  */
  readonly external?: UserPasswordExternal;
  /**
  * A boolean that specifies whether the user is forced to change the password on the next log in.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#force_change User#force_change}
  */
  readonly forceChange?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the user's initial password value. The string is either in cleartext or pre-encoded format.  User passwords cannot be extracted from the platfom.  This value, if defined or changed on the PingOne service by an identity administrator or the user account's owner, will not be refreshed in the Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#initial_value User#initial_value}
  */
  readonly initialValue?: string;
}

export function userPasswordToTerraform(struct?: UserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: userPasswordExternalToTerraform(struct!.external),
    force_change: cdktf.booleanToTerraform(struct!.forceChange),
    initial_value: cdktf.stringToTerraform(struct!.initialValue),
  }
}


export function userPasswordToHclTerraform(struct?: UserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: userPasswordExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "UserPasswordExternal",
    },
    force_change: {
      value: cdktf.booleanToHclTerraform(struct!.forceChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_value: {
      value: cdktf.stringToHclTerraform(struct!.initialValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._forceChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceChange = this._forceChange;
    }
    if (this._initialValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialValue = this._initialValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._external.internalValue = undefined;
      this._forceChange = undefined;
      this._initialValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._external.internalValue = value.external;
      this._forceChange = value.forceChange;
      this._initialValue = value.initialValue;
    }
  }

  // external - computed: false, optional: true, required: false
  private _external = new UserPasswordExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: UserPasswordExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // force_change - computed: true, optional: true, required: false
  private _forceChange?: boolean | cdktf.IResolvable; 
  public get forceChange() {
    return this.getBooleanAttribute('force_change');
  }
  public set forceChange(value: boolean | cdktf.IResolvable) {
    this._forceChange = value;
  }
  public resetForceChange() {
    this._forceChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceChangeInput() {
    return this._forceChange;
  }

  // initial_value - computed: false, optional: true, required: false
  private _initialValue?: string; 
  public get initialValue() {
    return this.getStringAttribute('initial_value');
  }
  public set initialValue(value: string) {
    this._initialValue = value;
  }
  public resetInitialValue() {
    this._initialValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialValueInput() {
    return this._initialValue;
  }
}
export interface UserPhoto {
  /**
  * The URI that is a uniform resource locator (as defined in [Section 1.1.3 of RFC 3986](https://www.rfc-editor.org/rfc/rfc3986#section-1.3)) that points to a resource location representing the user's image. This can be removed from a user by setting the photo attribute to null. If provided, the resource must be a file (for example, a GIF, JPEG, or PNG image file) rather than a web page containing an image. It must be a valid URL that starts with the HTTP or HTTPS scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#href User#href}
  */
  readonly href: string;
}

export function userPhotoToTerraform(struct?: UserPhoto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function userPhotoToHclTerraform(struct?: UserPhoto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserPhotoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserPhoto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPhoto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface UserUserLifecycle {
  /**
  * A string that specifies the status of the account lifecycle.  Options are `ACCOUNT_OK`, `VERIFICATION_REQUIRED`.  This property value is only allowed to be set when importing a user to set the initial account status. If the initial status is set to `VERIFICATION_REQUIRED` and an email address is provided, a verification email is sent.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#status User#status}
  */
  readonly status?: string;
  /**
  * A boolean that specifies whether to suppress the verification code when the user is imported and the `status` is set to `VERIFICATION_REQUIRED`. If this property is set to `true`, no verification email is sent to the user. If this property is omitted or set to `false`, a verification email is sent automatically to the user.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#suppress_verification_code User#suppress_verification_code}
  */
  readonly suppressVerificationCode?: boolean | cdktf.IResolvable;
}

export function userUserLifecycleToTerraform(struct?: UserUserLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    suppress_verification_code: cdktf.booleanToTerraform(struct!.suppressVerificationCode),
  }
}


export function userUserLifecycleToHclTerraform(struct?: UserUserLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress_verification_code: {
      value: cdktf.booleanToHclTerraform(struct!.suppressVerificationCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserUserLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserUserLifecycle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._suppressVerificationCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressVerificationCode = this._suppressVerificationCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserUserLifecycle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._suppressVerificationCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._suppressVerificationCode = value.suppressVerificationCode;
    }
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // suppress_verification_code - computed: true, optional: true, required: false
  private _suppressVerificationCode?: boolean | cdktf.IResolvable; 
  public get suppressVerificationCode() {
    return this.getBooleanAttribute('suppress_verification_code');
  }
  public set suppressVerificationCode(value: boolean | cdktf.IResolvable) {
    this._suppressVerificationCode = value;
  }
  public resetSuppressVerificationCode() {
    this._suppressVerificationCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressVerificationCodeInput() {
    return this._suppressVerificationCode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user pingone_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user pingone_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_user',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account.internalValue = config.account;
    this._address.internalValue = config.address;
    this._email = config.email;
    this._enabled = config.enabled;
    this._environmentId = config.environmentId;
    this._externalId = config.externalId;
    this._identityProvider.internalValue = config.identityProvider;
    this._locale = config.locale;
    this._mfaEnabled = config.mfaEnabled;
    this._mobilePhone = config.mobilePhone;
    this._name.internalValue = config.name;
    this._nickname = config.nickname;
    this._password.internalValue = config.password;
    this._photo.internalValue = config.photo;
    this._populationId = config.populationId;
    this._preferredLanguage = config.preferredLanguage;
    this._primaryPhone = config.primaryPhone;
    this._timezone = config.timezone;
    this._title = config.title;
    this._type = config.type;
    this._userLifecycle.internalValue = config.userLifecycle;
    this._username = config.username;
    this._verifyStatus = config.verifyStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: true, required: false
  private _account = new UserAccountOutputReference(this, "account");
  public get account() {
    return this._account;
  }
  public putAccount(value: UserAccount) {
    this._account.internalValue = value;
  }
  public resetAccount() {
    this._account.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // address - computed: false, optional: true, required: false
  private _address = new UserAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: UserAddress) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enabled - computed: true, optional: true, required: false
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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider - computed: true, optional: true, required: false
  private _identityProvider = new UserIdentityProviderOutputReference(this, "identity_provider");
  public get identityProvider() {
    return this._identityProvider;
  }
  public putIdentityProvider(value: UserIdentityProvider) {
    this._identityProvider.internalValue = value;
  }
  public resetIdentityProvider() {
    this._identityProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider.internalValue;
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // mfa_enabled - computed: true, optional: true, required: false
  private _mfaEnabled?: boolean | cdktf.IResolvable; 
  public get mfaEnabled() {
    return this.getBooleanAttribute('mfa_enabled');
  }
  public set mfaEnabled(value: boolean | cdktf.IResolvable) {
    this._mfaEnabled = value;
  }
  public resetMfaEnabled() {
    this._mfaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnabledInput() {
    return this._mfaEnabled;
  }

  // mobile_phone - computed: false, optional: true, required: false
  private _mobilePhone?: string; 
  public get mobilePhone() {
    return this.getStringAttribute('mobile_phone');
  }
  public set mobilePhone(value: string) {
    this._mobilePhone = value;
  }
  public resetMobilePhone() {
    this._mobilePhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePhoneInput() {
    return this._mobilePhone;
  }

  // name - computed: false, optional: true, required: false
  private _name = new UserNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: UserName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // nickname - computed: false, optional: true, required: false
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  public resetNickname() {
    this._nickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
  }

  // password - computed: false, optional: true, required: false
  private _password = new UserPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: UserPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // photo - computed: false, optional: true, required: false
  private _photo = new UserPhotoOutputReference(this, "photo");
  public get photo() {
    return this._photo;
  }
  public putPhoto(value: UserPhoto) {
    this._photo.internalValue = value;
  }
  public resetPhoto() {
    this._photo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photoInput() {
    return this._photo.internalValue;
  }

  // population_id - computed: false, optional: false, required: true
  private _populationId?: string; 
  public get populationId() {
    return this.getStringAttribute('population_id');
  }
  public set populationId(value: string) {
    this._populationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get populationIdInput() {
    return this._populationId;
  }

  // preferred_language - computed: false, optional: true, required: false
  private _preferredLanguage?: string; 
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }
  public set preferredLanguage(value: string) {
    this._preferredLanguage = value;
  }
  public resetPreferredLanguage() {
    this._preferredLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLanguageInput() {
    return this._preferredLanguage;
  }

  // primary_phone - computed: false, optional: true, required: false
  private _primaryPhone?: string; 
  public get primaryPhone() {
    return this.getStringAttribute('primary_phone');
  }
  public set primaryPhone(value: string) {
    this._primaryPhone = value;
  }
  public resetPrimaryPhone() {
    this._primaryPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPhoneInput() {
    return this._primaryPhone;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // user_lifecycle - computed: true, optional: true, required: false
  private _userLifecycle = new UserUserLifecycleOutputReference(this, "user_lifecycle");
  public get userLifecycle() {
    return this._userLifecycle;
  }
  public putUserLifecycle(value: UserUserLifecycle) {
    this._userLifecycle.internalValue = value;
  }
  public resetUserLifecycle() {
    this._userLifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLifecycleInput() {
    return this._userLifecycle.internalValue;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // verify_status - computed: true, optional: true, required: false
  private _verifyStatus?: string; 
  public get verifyStatus() {
    return this.getStringAttribute('verify_status');
  }
  public set verifyStatus(value: string) {
    this._verifyStatus = value;
  }
  public resetVerifyStatus() {
    this._verifyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyStatusInput() {
    return this._verifyStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: userAccountToTerraform(this._account.internalValue),
      address: userAddressToTerraform(this._address.internalValue),
      email: cdktf.stringToTerraform(this._email),
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      external_id: cdktf.stringToTerraform(this._externalId),
      identity_provider: userIdentityProviderToTerraform(this._identityProvider.internalValue),
      locale: cdktf.stringToTerraform(this._locale),
      mfa_enabled: cdktf.booleanToTerraform(this._mfaEnabled),
      mobile_phone: cdktf.stringToTerraform(this._mobilePhone),
      name: userNameToTerraform(this._name.internalValue),
      nickname: cdktf.stringToTerraform(this._nickname),
      password: userPasswordToTerraform(this._password.internalValue),
      photo: userPhotoToTerraform(this._photo.internalValue),
      population_id: cdktf.stringToTerraform(this._populationId),
      preferred_language: cdktf.stringToTerraform(this._preferredLanguage),
      primary_phone: cdktf.stringToTerraform(this._primaryPhone),
      timezone: cdktf.stringToTerraform(this._timezone),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      user_lifecycle: userUserLifecycleToTerraform(this._userLifecycle.internalValue),
      username: cdktf.stringToTerraform(this._username),
      verify_status: cdktf.stringToTerraform(this._verifyStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: userAccountToHclTerraform(this._account.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserAccount",
      },
      address: {
        value: userAddressToHclTerraform(this._address.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserAddress",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider: {
        value: userIdentityProviderToHclTerraform(this._identityProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserIdentityProvider",
      },
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mfa_enabled: {
        value: cdktf.booleanToHclTerraform(this._mfaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mobile_phone: {
        value: cdktf.stringToHclTerraform(this._mobilePhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: userNameToHclTerraform(this._name.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserName",
      },
      nickname: {
        value: cdktf.stringToHclTerraform(this._nickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: userPasswordToHclTerraform(this._password.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserPassword",
      },
      photo: {
        value: userPhotoToHclTerraform(this._photo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserPhoto",
      },
      population_id: {
        value: cdktf.stringToHclTerraform(this._populationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_language: {
        value: cdktf.stringToHclTerraform(this._preferredLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_phone: {
        value: cdktf.stringToHclTerraform(this._primaryPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_lifecycle: {
        value: userUserLifecycleToHclTerraform(this._userLifecycle.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserUserLifecycle",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_status: {
        value: cdktf.stringToHclTerraform(this._verifyStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
