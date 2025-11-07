// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PhoneDeliverySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment to configure SMS/voice settings for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#environment_id PhoneDeliverySettings#environment_id}
  */
  readonly environmentId: string;
  /**
  * A single nested attribute with attributes that describe custom phone delivery settings.  Exactly one of the following must be defined: `provider_custom`, `provider_custom_twilio`, `provider_custom_syniverse`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#provider_custom PhoneDeliverySettings#provider_custom}
  */
  readonly providerCustom?: PhoneDeliverySettingsProviderCustom;
  /**
  * A single nested attribute with attributes that describe phone delivery settings for a custom syniverse account.  Exactly one of the following must be defined: `provider_custom`, `provider_custom_twilio`, `provider_custom_syniverse`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#provider_custom_syniverse PhoneDeliverySettings#provider_custom_syniverse}
  */
  readonly providerCustomSyniverse?: PhoneDeliverySettingsProviderCustomSyniverse;
  /**
  * A single nested attribute with attributes that describe phone delivery settings for a custom Twilio account.  Exactly one of the following must be defined: `provider_custom`, `provider_custom_twilio`, `provider_custom_syniverse`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#provider_custom_twilio PhoneDeliverySettings#provider_custom_twilio}
  */
  readonly providerCustomTwilio?: PhoneDeliverySettingsProviderCustomTwilio;
}
export interface PhoneDeliverySettingsProviderCustomAuthentication {
  /**
  * A string that specifies the authentication token to use for the custom provider account. Required when `method` is `BEARER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#auth_token PhoneDeliverySettings#auth_token}
  */
  readonly authToken?: string;
  /**
  * The custom provider account's authentication method.  Options are `BASIC` (`username` and `password` parameters are required to be set), `BEARER` (`token` parameter is required to be set).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#method PhoneDeliverySettings#method}
  */
  readonly method: string;
  /**
  * A string that specifies the password for the custom provider account. Required when `method` is `BASIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#password PhoneDeliverySettings#password}
  */
  readonly password?: string;
  /**
  * A string that specifies the username for the custom provider account. Required when `method` is `BASIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#username PhoneDeliverySettings#username}
  */
  readonly username?: string;
}

export function phoneDeliverySettingsProviderCustomAuthenticationToTerraform(struct?: PhoneDeliverySettingsProviderCustomAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    method: cdktf.stringToTerraform(struct!.method),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function phoneDeliverySettingsProviderCustomAuthenticationToHclTerraform(struct?: PhoneDeliverySettingsProviderCustomAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PhoneDeliverySettingsProviderCustomAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PhoneDeliverySettingsProviderCustomAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneDeliverySettingsProviderCustomAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authToken = undefined;
      this._method = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authToken = value.authToken;
      this._method = value.method;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface PhoneDeliverySettingsProviderCustomNumbers {
  /**
  * A boolean that specifies whether the number is currently available in the provider account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#available PhoneDeliverySettings#available}
  */
  readonly available?: boolean | cdktf.IResolvable;
  /**
  * A collection of the types of phone delivery service capabilities.  Options are `SMS`, `VOICE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#capabilities PhoneDeliverySettings#capabilities}
  */
  readonly capabilities: string[];
  /**
  * A string that specifies the phone number, toll-free number or short code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#number PhoneDeliverySettings#number}
  */
  readonly number: string;
  /**
  * A boolean that specifies whether the number is currently available in the provider account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#selected PhoneDeliverySettings#selected}
  */
  readonly selected?: boolean | cdktf.IResolvable;
  /**
  * Specifies the `number`'s supported countries for notification recipients, depending on the phone number type.  If an SMS template has an alphanumeric `sender` ID and also has short code, the `sender` ID will be used for destination countries that support both alphanumeric senders and short codes. For Unites States and Canada that don't support alphanumeric sender IDs, a short code will be used if both an alphanumeric sender and a short code are specified.
  *     - `SHORT_CODE`: A collection containing a single 2-character ISO country code, for example, `US`, `GB`, `CA`.
  *     If the custom provider is of `type` `CUSTOM_PROVIDER`, this attribute must not be empty or null.
  *     For other custom provider types, if this attribute is null (empty is not supported), the specified short code `number` can only be used to dispatch notifications to United States recipient numbers.
  *     - `TOLL_FREE`: A collection of valid 2-character country ISO codes, for example, `US`, `GB`, `CA`.
  *     If the custom provider is of `type` `CUSTOM_PROVIDER`, this attribute must not be empty or null.
  *     For other custom provider types, if this attribute is null (empty is not supported), the specified toll-free `number` can only be used to dispatch notifications to United States recipient numbers.
  *     - `PHONE_NUMBER`: this attribute cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#supported_countries PhoneDeliverySettings#supported_countries}
  */
  readonly supportedCountries?: string[];
  /**
  * A string that specifies the type of phone number.  Options are `PHONE_NUMBER`, `SHORT_CODE`, `TOLL_FREE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#type PhoneDeliverySettings#type}
  */
  readonly type: string;
}

export function phoneDeliverySettingsProviderCustomNumbersToTerraform(struct?: PhoneDeliverySettingsProviderCustomNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    available: cdktf.booleanToTerraform(struct!.available),
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    number: cdktf.stringToTerraform(struct!.number),
    selected: cdktf.booleanToTerraform(struct!.selected),
    supported_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedCountries),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function phoneDeliverySettingsProviderCustomNumbersToHclTerraform(struct?: PhoneDeliverySettingsProviderCustomNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    available: {
      value: cdktf.booleanToHclTerraform(struct!.available),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected: {
      value: cdktf.booleanToHclTerraform(struct!.selected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    supported_countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedCountries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class PhoneDeliverySettingsProviderCustomNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PhoneDeliverySettingsProviderCustomNumbers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._available !== undefined) {
      hasAnyValues = true;
      internalValueResult.available = this._available;
    }
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._selected !== undefined) {
      hasAnyValues = true;
      internalValueResult.selected = this._selected;
    }
    if (this._supportedCountries !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedCountries = this._supportedCountries;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneDeliverySettingsProviderCustomNumbers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._available = undefined;
      this._capabilities = undefined;
      this._number = undefined;
      this._selected = undefined;
      this._supportedCountries = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._available = value.available;
      this._capabilities = value.capabilities;
      this._number = value.number;
      this._selected = value.selected;
      this._supportedCountries = value.supportedCountries;
      this._type = value.type;
    }
  }

  // available - computed: true, optional: true, required: false
  private _available?: boolean | cdktf.IResolvable; 
  public get available() {
    return this.getBooleanAttribute('available');
  }
  public set available(value: boolean | cdktf.IResolvable) {
    this._available = value;
  }
  public resetAvailable() {
    this._available = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableInput() {
    return this._available;
  }

  // capabilities - computed: false, optional: false, required: true
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // selected - computed: true, optional: true, required: false
  private _selected?: boolean | cdktf.IResolvable; 
  public get selected() {
    return this.getBooleanAttribute('selected');
  }
  public set selected(value: boolean | cdktf.IResolvable) {
    this._selected = value;
  }
  public resetSelected() {
    this._selected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedInput() {
    return this._selected;
  }

  // supported_countries - computed: false, optional: true, required: false
  private _supportedCountries?: string[]; 
  public get supportedCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_countries'));
  }
  public set supportedCountries(value: string[]) {
    this._supportedCountries = value;
  }
  public resetSupportedCountries() {
    this._supportedCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedCountriesInput() {
    return this._supportedCountries;
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

export class PhoneDeliverySettingsProviderCustomNumbersList extends cdktf.ComplexList {
  public internalValue? : PhoneDeliverySettingsProviderCustomNumbers[] | cdktf.IResolvable

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
  public get(index: number): PhoneDeliverySettingsProviderCustomNumbersOutputReference {
    return new PhoneDeliverySettingsProviderCustomNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PhoneDeliverySettingsProviderCustomRequests {
  /**
  * For voice OTP notifications only.  A string that specifies a closing tag which is commonly used by custom providers for defining a pause between each number in the OTP number string.  Example value: `</Say> <Pause length="1"/>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#after_tag PhoneDeliverySettings#after_tag}
  */
  readonly afterTag?: string;
  /**
  * For voice OTP notifications only.  A string that specifies an opening tag which is commonly used by custom providers for defining a pause between each number in the OTP number string.  Possible value: `<Say>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#before_tag PhoneDeliverySettings#before_tag}
  */
  readonly beforeTag?: string;
  /**
  * Optional when the `method` is `POST`.  A string that specifies the notification's request body. The body should include the `${to}` and `${message}` mandatory variables. For some vendors, the optional `${from}` variable may also be required. For example `messageType=ARN&message=${message}&phoneNumber=${to}&sender=${from}`.  In addition, you can use [dynamic variables](https://apidocs.pingidentity.com/pingone/platform/v1/api/#notifications-templates-dynamic-variables) and the following optional variables:
  *     - `${voice}` - the type of voice configured for notifications
  *     - `${locale}` - locale
  *     - `${otp}` - OTP
  *     - `${user.username}` - user's username
  *     - `${user.name.given}` - user's given name
  *     - `${user.name.family}` - user's family name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#body PhoneDeliverySettings#body}
  */
  readonly body?: string;
  /**
  * A string that specifies the notification's delivery method.  Options are `SMS`, `VOICE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#delivery_method PhoneDeliverySettings#delivery_method}
  */
  readonly deliveryMethod: string;
  /**
  * A map of strings that specifies the notification's request headers, matching the format of the request body. The header should include only one of the following if the `method` is set to `POST`:
  *     - `content-type` = `application/x-www-form-urlencoded` (where the `body` should be form encoded)
  *     - `content-type` = `application/json` (where the `body` should be JSON encoded)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#headers PhoneDeliverySettings#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * A string that specifies the type of HTTP request method.  Options are `GET`, `POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#method PhoneDeliverySettings#method}
  */
  readonly method: string;
  /**
  * A string that specifies the phone number format.  Options are `FULL` (The phone number format with a leading `+` sign, in the E.164 standard format.  For example: `+14155552671`), `NUMBER_ONLY` (The phone number format without a leading `+` sign, in the E.164 standard format.  For example: `14155552671`).  Defaults to `FULL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#phone_number_format PhoneDeliverySettings#phone_number_format}
  */
  readonly phoneNumberFormat?: string;
  /**
  * The provider's remote gateway or customer gateway URL.  For requests using the `POST` method, use the provider's remote gateway URL.  For requests using the `GET` method, use the provider's remote gateway URL, including the `${to}` and `${message}` mandatory variables, and the optional `${from}` variable, for example: `https://api.transmitsms.com/send-sms.json?to=${to}&from=${from}&message=${message}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#url PhoneDeliverySettings#url}
  */
  readonly url: string;
}

export function phoneDeliverySettingsProviderCustomRequestsToTerraform(struct?: PhoneDeliverySettingsProviderCustomRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_tag: cdktf.stringToTerraform(struct!.afterTag),
    before_tag: cdktf.stringToTerraform(struct!.beforeTag),
    body: cdktf.stringToTerraform(struct!.body),
    delivery_method: cdktf.stringToTerraform(struct!.deliveryMethod),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    phone_number_format: cdktf.stringToTerraform(struct!.phoneNumberFormat),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function phoneDeliverySettingsProviderCustomRequestsToHclTerraform(struct?: PhoneDeliverySettingsProviderCustomRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_tag: {
      value: cdktf.stringToHclTerraform(struct!.afterTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    before_tag: {
      value: cdktf.stringToHclTerraform(struct!.beforeTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delivery_method: {
      value: cdktf.stringToHclTerraform(struct!.deliveryMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number_format: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumberFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PhoneDeliverySettingsProviderCustomRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PhoneDeliverySettingsProviderCustomRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterTag = this._afterTag;
    }
    if (this._beforeTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeTag = this._beforeTag;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._deliveryMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryMethod = this._deliveryMethod;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._phoneNumberFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumberFormat = this._phoneNumberFormat;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneDeliverySettingsProviderCustomRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afterTag = undefined;
      this._beforeTag = undefined;
      this._body = undefined;
      this._deliveryMethod = undefined;
      this._headers = undefined;
      this._method = undefined;
      this._phoneNumberFormat = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afterTag = value.afterTag;
      this._beforeTag = value.beforeTag;
      this._body = value.body;
      this._deliveryMethod = value.deliveryMethod;
      this._headers = value.headers;
      this._method = value.method;
      this._phoneNumberFormat = value.phoneNumberFormat;
      this._url = value.url;
    }
  }

  // after_tag - computed: false, optional: true, required: false
  private _afterTag?: string; 
  public get afterTag() {
    return this.getStringAttribute('after_tag');
  }
  public set afterTag(value: string) {
    this._afterTag = value;
  }
  public resetAfterTag() {
    this._afterTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterTagInput() {
    return this._afterTag;
  }

  // before_tag - computed: false, optional: true, required: false
  private _beforeTag?: string; 
  public get beforeTag() {
    return this.getStringAttribute('before_tag');
  }
  public set beforeTag(value: string) {
    this._beforeTag = value;
  }
  public resetBeforeTag() {
    this._beforeTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeTagInput() {
    return this._beforeTag;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // delivery_method - computed: false, optional: false, required: true
  private _deliveryMethod?: string; 
  public get deliveryMethod() {
    return this.getStringAttribute('delivery_method');
  }
  public set deliveryMethod(value: string) {
    this._deliveryMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryMethodInput() {
    return this._deliveryMethod;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // phone_number_format - computed: true, optional: true, required: false
  private _phoneNumberFormat?: string; 
  public get phoneNumberFormat() {
    return this.getStringAttribute('phone_number_format');
  }
  public set phoneNumberFormat(value: string) {
    this._phoneNumberFormat = value;
  }
  public resetPhoneNumberFormat() {
    this._phoneNumberFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberFormatInput() {
    return this._phoneNumberFormat;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class PhoneDeliverySettingsProviderCustomRequestsList extends cdktf.ComplexList {
  public internalValue? : PhoneDeliverySettingsProviderCustomRequests[] | cdktf.IResolvable

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
  public get(index: number): PhoneDeliverySettingsProviderCustomRequestsOutputReference {
    return new PhoneDeliverySettingsProviderCustomRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PhoneDeliverySettingsProviderCustom {
  /**
  * A single object that provides authentication settings for authenticating to the custom service API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#authentication PhoneDeliverySettings#authentication}
  */
  readonly authentication: PhoneDeliverySettingsProviderCustomAuthentication;
  /**
  * The string that specifies the name of the custom provider used to identify in the PingOne platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#name PhoneDeliverySettings#name}
  */
  readonly name: string;
  /**
  * One or more objects that describe the numbers to use for phone delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#numbers PhoneDeliverySettings#numbers}
  */
  readonly numbers?: PhoneDeliverySettingsProviderCustomNumbers[] | cdktf.IResolvable;
  /**
  * One or more objects that describe the outbound custom notification requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#requests PhoneDeliverySettings#requests}
  */
  readonly requests: PhoneDeliverySettingsProviderCustomRequests[] | cdktf.IResolvable;
}

export function phoneDeliverySettingsProviderCustomToTerraform(struct?: PhoneDeliverySettingsProviderCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: phoneDeliverySettingsProviderCustomAuthenticationToTerraform(struct!.authentication),
    name: cdktf.stringToTerraform(struct!.name),
    numbers: cdktf.listMapper(phoneDeliverySettingsProviderCustomNumbersToTerraform, false)(struct!.numbers),
    requests: cdktf.listMapper(phoneDeliverySettingsProviderCustomRequestsToTerraform, false)(struct!.requests),
  }
}


export function phoneDeliverySettingsProviderCustomToHclTerraform(struct?: PhoneDeliverySettingsProviderCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: phoneDeliverySettingsProviderCustomAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "PhoneDeliverySettingsProviderCustomAuthentication",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numbers: {
      value: cdktf.listMapperHcl(phoneDeliverySettingsProviderCustomNumbersToHclTerraform, false)(struct!.numbers),
      isBlock: true,
      type: "set",
      storageClassType: "PhoneDeliverySettingsProviderCustomNumbersList",
    },
    requests: {
      value: cdktf.listMapperHcl(phoneDeliverySettingsProviderCustomRequestsToHclTerraform, false)(struct!.requests),
      isBlock: true,
      type: "set",
      storageClassType: "PhoneDeliverySettingsProviderCustomRequestsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PhoneDeliverySettingsProviderCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PhoneDeliverySettingsProviderCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numbers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numbers = this._numbers?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneDeliverySettingsProviderCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._name = undefined;
      this._numbers.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._name = value.name;
      this._numbers.internalValue = value.numbers;
      this._requests.internalValue = value.requests;
    }
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new PhoneDeliverySettingsProviderCustomAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: PhoneDeliverySettingsProviderCustomAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
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

  // numbers - computed: false, optional: true, required: false
  private _numbers = new PhoneDeliverySettingsProviderCustomNumbersList(this, "numbers", true);
  public get numbers() {
    return this._numbers;
  }
  public putNumbers(value: PhoneDeliverySettingsProviderCustomNumbers[] | cdktf.IResolvable) {
    this._numbers.internalValue = value;
  }
  public resetNumbers() {
    this._numbers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numbersInput() {
    return this._numbers.internalValue;
  }

  // requests - computed: false, optional: false, required: true
  private _requests = new PhoneDeliverySettingsProviderCustomRequestsList(this, "requests", true);
  public get requests() {
    return this._requests;
  }
  public putRequests(value: PhoneDeliverySettingsProviderCustomRequests[] | cdktf.IResolvable) {
    this._requests.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}
export interface PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbers {
  /**
  * A string that specifies the phone number, toll-free number or short code that has been configured in Twilio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#number PhoneDeliverySettings#number}
  */
  readonly number: string;
  /**
  * Specifies the `number`'s supported countries for notification recipients, depending on the phone number type.  If an SMS template has an alphanumeric `sender` ID and also has short code, the `sender` ID will be used for destination countries that support both alphanumeric senders and short codes. For Unites States and Canada that don't support alphanumeric sender IDs, a short code will be used if both an alphanumeric sender and a short code are specified.
  *     - `SHORT_CODE`: A collection containing a single 2-character ISO country code, for example, `US`, `GB`, `CA`.
  *     If the custom provider is of `type` `CUSTOM_PROVIDER`, this attribute must not be empty or null.
  *     For other custom provider types, if this attribute is null (empty is not supported), the specified short code `number` can only be used to dispatch notifications to United States recipient numbers.
  *     - `TOLL_FREE`: A collection of valid 2-character country ISO codes, for example, `US`, `GB`, `CA`.
  *     If the custom provider is of `type` `CUSTOM_PROVIDER`, this attribute must not be empty or null.
  *     For other custom provider types, if this attribute is null (empty is not supported), the specified toll-free `number` can only be used to dispatch notifications to United States recipient numbers.
  *     - `PHONE_NUMBER`: this attribute cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#supported_countries PhoneDeliverySettings#supported_countries}
  */
  readonly supportedCountries?: string[];
}

export function phoneDeliverySettingsProviderCustomSyniverseSelectedNumbersToTerraform(struct?: PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.stringToTerraform(struct!.number),
    supported_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedCountries),
  }
}


export function phoneDeliverySettingsProviderCustomSyniverseSelectedNumbersToHclTerraform(struct?: PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedCountries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._supportedCountries !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedCountries = this._supportedCountries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._supportedCountries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._supportedCountries = value.supportedCountries;
    }
  }

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // selected - computed: true, optional: false, required: false
  public get selected() {
    return this.getBooleanAttribute('selected');
  }

  // supported_countries - computed: false, optional: true, required: false
  private _supportedCountries?: string[]; 
  public get supportedCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_countries'));
  }
  public set supportedCountries(value: string[]) {
    this._supportedCountries = value;
  }
  public resetSupportedCountries() {
    this._supportedCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedCountriesInput() {
    return this._supportedCountries;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbersList extends cdktf.ComplexList {
  public internalValue? : PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbers[] | cdktf.IResolvable

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
  public get(index: number): PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbersOutputReference {
    return new PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PhoneDeliverySettingsProviderCustomSyniverseServiceNumbers {
}

export function phoneDeliverySettingsProviderCustomSyniverseServiceNumbersToTerraform(struct?: PhoneDeliverySettingsProviderCustomSyniverseServiceNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function phoneDeliverySettingsProviderCustomSyniverseServiceNumbersToHclTerraform(struct?: PhoneDeliverySettingsProviderCustomSyniverseServiceNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PhoneDeliverySettingsProviderCustomSyniverseServiceNumbersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PhoneDeliverySettingsProviderCustomSyniverseServiceNumbers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneDeliverySettingsProviderCustomSyniverseServiceNumbers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getBooleanAttribute('available');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getStringAttribute('number');
  }

  // selected - computed: true, optional: false, required: false
  public get selected() {
    return this.getBooleanAttribute('selected');
  }

  // supported_countries - computed: true, optional: false, required: false
  public get supportedCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_countries'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PhoneDeliverySettingsProviderCustomSyniverseServiceNumbersList extends cdktf.ComplexList {

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
  public get(index: number): PhoneDeliverySettingsProviderCustomSyniverseServiceNumbersOutputReference {
    return new PhoneDeliverySettingsProviderCustomSyniverseServiceNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PhoneDeliverySettingsProviderCustomSyniverse {
  /**
  * The secret key of the Syniverse account.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#auth_token PhoneDeliverySettings#auth_token}
  */
  readonly authToken: string;
  /**
  * One or more objects that describe the numbers to use for phone delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#selected_numbers PhoneDeliverySettings#selected_numbers}
  */
  readonly selectedNumbers: PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbers[] | cdktf.IResolvable;
}

export function phoneDeliverySettingsProviderCustomSyniverseToTerraform(struct?: PhoneDeliverySettingsProviderCustomSyniverse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    selected_numbers: cdktf.listMapper(phoneDeliverySettingsProviderCustomSyniverseSelectedNumbersToTerraform, false)(struct!.selectedNumbers),
  }
}


export function phoneDeliverySettingsProviderCustomSyniverseToHclTerraform(struct?: PhoneDeliverySettingsProviderCustomSyniverse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_numbers: {
      value: cdktf.listMapperHcl(phoneDeliverySettingsProviderCustomSyniverseSelectedNumbersToHclTerraform, false)(struct!.selectedNumbers),
      isBlock: true,
      type: "set",
      storageClassType: "PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PhoneDeliverySettingsProviderCustomSyniverseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PhoneDeliverySettingsProviderCustomSyniverse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._selectedNumbers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedNumbers = this._selectedNumbers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneDeliverySettingsProviderCustomSyniverse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authToken = undefined;
      this._selectedNumbers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authToken = value.authToken;
      this._selectedNumbers.internalValue = value.selectedNumbers;
    }
  }

  // auth_token - computed: false, optional: false, required: true
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // selected_numbers - computed: false, optional: false, required: true
  private _selectedNumbers = new PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbersList(this, "selected_numbers", true);
  public get selectedNumbers() {
    return this._selectedNumbers;
  }
  public putSelectedNumbers(value: PhoneDeliverySettingsProviderCustomSyniverseSelectedNumbers[] | cdktf.IResolvable) {
    this._selectedNumbers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedNumbersInput() {
    return this._selectedNumbers.internalValue;
  }

  // service_numbers - computed: true, optional: false, required: false
  private _serviceNumbers = new PhoneDeliverySettingsProviderCustomSyniverseServiceNumbersList(this, "service_numbers", true);
  public get serviceNumbers() {
    return this._serviceNumbers;
  }
}
export interface PhoneDeliverySettingsProviderCustomTwilioSelectedNumbers {
  /**
  * A string that specifies the phone number, toll-free number or short code that has been configured in Twilio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#number PhoneDeliverySettings#number}
  */
  readonly number: string;
  /**
  * Specifies the `number`'s supported countries for notification recipients, depending on the phone number type.  If an SMS template has an alphanumeric `sender` ID and also has short code, the `sender` ID will be used for destination countries that support both alphanumeric senders and short codes. For Unites States and Canada that don't support alphanumeric sender IDs, a short code will be used if both an alphanumeric sender and a short code are specified.
  *     - `SHORT_CODE`: A collection containing a single 2-character ISO country code, for example, `US`, `GB`, `CA`.
  *     If the custom provider is of `type` `CUSTOM_PROVIDER`, this attribute must not be empty or null.
  *     For other custom provider types, if this attribute is null (empty is not supported), the specified short code `number` can only be used to dispatch notifications to United States recipient numbers.
  *     - `TOLL_FREE`: A collection of valid 2-character country ISO codes, for example, `US`, `GB`, `CA`.
  *     If the custom provider is of `type` `CUSTOM_PROVIDER`, this attribute must not be empty or null.
  *     For other custom provider types, if this attribute is null (empty is not supported), the specified toll-free `number` can only be used to dispatch notifications to United States recipient numbers.
  *     - `PHONE_NUMBER`: this attribute cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#supported_countries PhoneDeliverySettings#supported_countries}
  */
  readonly supportedCountries?: string[];
  /**
  * A string that specifies the type of phone number.  Options are `PHONE_NUMBER`, `SHORT_CODE`, `TOLL_FREE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#type PhoneDeliverySettings#type}
  */
  readonly type: string;
}

export function phoneDeliverySettingsProviderCustomTwilioSelectedNumbersToTerraform(struct?: PhoneDeliverySettingsProviderCustomTwilioSelectedNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.stringToTerraform(struct!.number),
    supported_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedCountries),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function phoneDeliverySettingsProviderCustomTwilioSelectedNumbersToHclTerraform(struct?: PhoneDeliverySettingsProviderCustomTwilioSelectedNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedCountries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class PhoneDeliverySettingsProviderCustomTwilioSelectedNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PhoneDeliverySettingsProviderCustomTwilioSelectedNumbers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._supportedCountries !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedCountries = this._supportedCountries;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneDeliverySettingsProviderCustomTwilioSelectedNumbers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._supportedCountries = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._supportedCountries = value.supportedCountries;
      this._type = value.type;
    }
  }

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // selected - computed: true, optional: false, required: false
  public get selected() {
    return this.getBooleanAttribute('selected');
  }

  // supported_countries - computed: false, optional: true, required: false
  private _supportedCountries?: string[]; 
  public get supportedCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_countries'));
  }
  public set supportedCountries(value: string[]) {
    this._supportedCountries = value;
  }
  public resetSupportedCountries() {
    this._supportedCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedCountriesInput() {
    return this._supportedCountries;
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

export class PhoneDeliverySettingsProviderCustomTwilioSelectedNumbersList extends cdktf.ComplexList {
  public internalValue? : PhoneDeliverySettingsProviderCustomTwilioSelectedNumbers[] | cdktf.IResolvable

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
  public get(index: number): PhoneDeliverySettingsProviderCustomTwilioSelectedNumbersOutputReference {
    return new PhoneDeliverySettingsProviderCustomTwilioSelectedNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PhoneDeliverySettingsProviderCustomTwilioServiceNumbers {
}

export function phoneDeliverySettingsProviderCustomTwilioServiceNumbersToTerraform(struct?: PhoneDeliverySettingsProviderCustomTwilioServiceNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function phoneDeliverySettingsProviderCustomTwilioServiceNumbersToHclTerraform(struct?: PhoneDeliverySettingsProviderCustomTwilioServiceNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PhoneDeliverySettingsProviderCustomTwilioServiceNumbersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PhoneDeliverySettingsProviderCustomTwilioServiceNumbers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneDeliverySettingsProviderCustomTwilioServiceNumbers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getBooleanAttribute('available');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getStringAttribute('number');
  }

  // selected - computed: true, optional: false, required: false
  public get selected() {
    return this.getBooleanAttribute('selected');
  }

  // supported_countries - computed: true, optional: false, required: false
  public get supportedCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_countries'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PhoneDeliverySettingsProviderCustomTwilioServiceNumbersList extends cdktf.ComplexList {

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
  public get(index: number): PhoneDeliverySettingsProviderCustomTwilioServiceNumbersOutputReference {
    return new PhoneDeliverySettingsProviderCustomTwilioServiceNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PhoneDeliverySettingsProviderCustomTwilio {
  /**
  * The secret key of the Twilio account.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#auth_token PhoneDeliverySettings#auth_token}
  */
  readonly authToken: string;
  /**
  * One or more objects that describe the numbers to use for phone delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#selected_numbers PhoneDeliverySettings#selected_numbers}
  */
  readonly selectedNumbers: PhoneDeliverySettingsProviderCustomTwilioSelectedNumbers[] | cdktf.IResolvable;
  /**
  * The public ID of the Twilio account.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#sid PhoneDeliverySettings#sid}
  */
  readonly sid: string;
}

export function phoneDeliverySettingsProviderCustomTwilioToTerraform(struct?: PhoneDeliverySettingsProviderCustomTwilio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    selected_numbers: cdktf.listMapper(phoneDeliverySettingsProviderCustomTwilioSelectedNumbersToTerraform, false)(struct!.selectedNumbers),
    sid: cdktf.stringToTerraform(struct!.sid),
  }
}


export function phoneDeliverySettingsProviderCustomTwilioToHclTerraform(struct?: PhoneDeliverySettingsProviderCustomTwilio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_numbers: {
      value: cdktf.listMapperHcl(phoneDeliverySettingsProviderCustomTwilioSelectedNumbersToHclTerraform, false)(struct!.selectedNumbers),
      isBlock: true,
      type: "set",
      storageClassType: "PhoneDeliverySettingsProviderCustomTwilioSelectedNumbersList",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PhoneDeliverySettingsProviderCustomTwilioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PhoneDeliverySettingsProviderCustomTwilio | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._selectedNumbers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedNumbers = this._selectedNumbers?.internalValue;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PhoneDeliverySettingsProviderCustomTwilio | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authToken = undefined;
      this._selectedNumbers.internalValue = undefined;
      this._sid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authToken = value.authToken;
      this._selectedNumbers.internalValue = value.selectedNumbers;
      this._sid = value.sid;
    }
  }

  // auth_token - computed: false, optional: false, required: true
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // selected_numbers - computed: false, optional: false, required: true
  private _selectedNumbers = new PhoneDeliverySettingsProviderCustomTwilioSelectedNumbersList(this, "selected_numbers", true);
  public get selectedNumbers() {
    return this._selectedNumbers;
  }
  public putSelectedNumbers(value: PhoneDeliverySettingsProviderCustomTwilioSelectedNumbers[] | cdktf.IResolvable) {
    this._selectedNumbers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedNumbersInput() {
    return this._selectedNumbers.internalValue;
  }

  // service_numbers - computed: true, optional: false, required: false
  private _serviceNumbers = new PhoneDeliverySettingsProviderCustomTwilioServiceNumbersList(this, "service_numbers", true);
  public get serviceNumbers() {
    return this._serviceNumbers;
  }

  // sid - computed: false, optional: false, required: true
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings pingone_phone_delivery_settings}
*/
export class PhoneDeliverySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_phone_delivery_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PhoneDeliverySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PhoneDeliverySettings to import
  * @param importFromId The id of the existing PhoneDeliverySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PhoneDeliverySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_phone_delivery_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/phone_delivery_settings pingone_phone_delivery_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PhoneDeliverySettingsConfig
  */
  public constructor(scope: Construct, id: string, config: PhoneDeliverySettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_phone_delivery_settings',
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
    this._environmentId = config.environmentId;
    this._providerCustom.internalValue = config.providerCustom;
    this._providerCustomSyniverse.internalValue = config.providerCustomSyniverse;
    this._providerCustomTwilio.internalValue = config.providerCustomTwilio;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provider_custom - computed: false, optional: true, required: false
  private _providerCustom = new PhoneDeliverySettingsProviderCustomOutputReference(this, "provider_custom");
  public get providerCustom() {
    return this._providerCustom;
  }
  public putProviderCustom(value: PhoneDeliverySettingsProviderCustom) {
    this._providerCustom.internalValue = value;
  }
  public resetProviderCustom() {
    this._providerCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerCustomInput() {
    return this._providerCustom.internalValue;
  }

  // provider_custom_syniverse - computed: false, optional: true, required: false
  private _providerCustomSyniverse = new PhoneDeliverySettingsProviderCustomSyniverseOutputReference(this, "provider_custom_syniverse");
  public get providerCustomSyniverse() {
    return this._providerCustomSyniverse;
  }
  public putProviderCustomSyniverse(value: PhoneDeliverySettingsProviderCustomSyniverse) {
    this._providerCustomSyniverse.internalValue = value;
  }
  public resetProviderCustomSyniverse() {
    this._providerCustomSyniverse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerCustomSyniverseInput() {
    return this._providerCustomSyniverse.internalValue;
  }

  // provider_custom_twilio - computed: false, optional: true, required: false
  private _providerCustomTwilio = new PhoneDeliverySettingsProviderCustomTwilioOutputReference(this, "provider_custom_twilio");
  public get providerCustomTwilio() {
    return this._providerCustomTwilio;
  }
  public putProviderCustomTwilio(value: PhoneDeliverySettingsProviderCustomTwilio) {
    this._providerCustomTwilio.internalValue = value;
  }
  public resetProviderCustomTwilio() {
    this._providerCustomTwilio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerCustomTwilioInput() {
    return this._providerCustomTwilio.internalValue;
  }

  // provider_type - computed: true, optional: false, required: false
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      provider_custom: phoneDeliverySettingsProviderCustomToTerraform(this._providerCustom.internalValue),
      provider_custom_syniverse: phoneDeliverySettingsProviderCustomSyniverseToTerraform(this._providerCustomSyniverse.internalValue),
      provider_custom_twilio: phoneDeliverySettingsProviderCustomTwilioToTerraform(this._providerCustomTwilio.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_custom: {
        value: phoneDeliverySettingsProviderCustomToHclTerraform(this._providerCustom.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PhoneDeliverySettingsProviderCustom",
      },
      provider_custom_syniverse: {
        value: phoneDeliverySettingsProviderCustomSyniverseToHclTerraform(this._providerCustomSyniverse.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PhoneDeliverySettingsProviderCustomSyniverse",
      },
      provider_custom_twilio: {
        value: phoneDeliverySettingsProviderCustomTwilioToHclTerraform(this._providerCustomTwilio.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PhoneDeliverySettingsProviderCustomTwilio",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
