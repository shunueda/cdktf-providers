// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional Application Id. When this value is provided, it will be used to resolve an application specific email template if you have configured transactional emails such as setup password, email verification and others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#application_id User#application_id}
  */
  readonly applicationId?: string;
  /**
  * An ISO-8601 formatted date of the User’s birthdate such as YYYY-MM-DD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#birth_date User#birth_date}
  */
  readonly birthDate?: string;
  /**
  * An object that can hold any information about a User that should be persisted. Must be a JSON encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#data User#data}
  */
  readonly data?: string;
  /**
  * A tenant has the option to configure one or more email domains to be blocked in order to restrict email domains during user create or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#disable_domain_block User#disable_domain_block}
  */
  readonly disableDomainBlock?: boolean | cdktf.IResolvable;
  /**
  * The User’s email address. An email address is a unique in FusionAuth and stored in lower case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * The method for encrypting the User’s password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#encryption_scheme User#encryption_scheme}
  */
  readonly encryptionScheme?: string;
  /**
  * The expiration instant of the User’s account. An expired user is not permitted to login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#expiry User#expiry}
  */
  readonly expiry?: number;
  /**
  * The first name of the User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#first_name User#first_name}
  */
  readonly firstName?: string;
  /**
  * The User’s full name as a separate field that is not calculated from firstName and lastName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#full_name User#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The URL that points to an image file that is the User’s profile image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#image_url User#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The User’s last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#last_name User#last_name}
  */
  readonly lastName?: string;
  /**
  * The User’s middle name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#middle_name User#middle_name}
  */
  readonly middleName?: string;
  /**
  * The User’s mobile phone number. This is useful is you will be sending push notifications or SMS messages to the User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#mobile_phone User#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * The email address of the user’s parent or guardian. This field is used to allow a child user to identify their parent so FusionAuth can make a request to the parent to confirm the parent relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#parent_email User#parent_email}
  */
  readonly parentEmail?: string;
  /**
  * The User’s plain texts password. This password will be hashed and the provided value will never be stored and cannot be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Indicates that the User’s password needs to be changed during their next login attempt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#password_change_required User#password_change_required}
  */
  readonly passwordChangeRequired?: boolean | cdktf.IResolvable;
  /**
  * An array of locale strings that give, in order, the User’s preferred languages. These are important for email templates and other localizable text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#preferred_languages User#preferred_languages}
  */
  readonly preferredLanguages?: string[];
  /**
  * Indicates to FusionAuth to send the User an email asking them to set their password. The Email Template that is used is configured in the System Configuration setting for Set Password Email Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#send_set_password_email User#send_set_password_email}
  */
  readonly sendSetPasswordEmail?: boolean | cdktf.IResolvable;
  /**
  * Indicates to FusionAuth that it should skip email verification even if it is enabled. This is useful for creating admin or internal User accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#skip_verification User#skip_verification}
  */
  readonly skipVerification?: boolean | cdktf.IResolvable;
  /**
  * The unique Id of the tenant used to scope this API request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#tenant_id User#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The User’s preferred timezone. The string must be in an IANA time zone format. For example:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#timezone User#timezone}
  */
  readonly timezone?: string;
  /**
  * A list of recovery codes. These may be used in place of a code provided by an MFA factor. They are single use. If a recovery code is used in a disable request, all MFA methods are removed. If, after that, a Multi-Factor method is added, a new set of recovery codes will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#two_factor_recovery_codes User#two_factor_recovery_codes}
  */
  readonly twoFactorRecoveryCodes?: string[];
  /**
  * The Id to use for the new User. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#user_id User#user_id}
  */
  readonly userId?: string;
  /**
  * The username of the User. The username is stored and returned as a case sensitive value, however a username is considered unique regardless of the case. bob is considered equal to BoB so either version of this username can be used whenever providing it as input to an API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#username User#username}
  */
  readonly username?: string;
  /**
  * The current status of the username. This is used if you are moderating usernames via CleanSpeak.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#username_status User#username_status}
  */
  readonly usernameStatus?: string;
  /**
  * two_factor_methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#two_factor_methods User#two_factor_methods}
  */
  readonly twoFactorMethods?: UserTwoFactorMethods[] | cdktf.IResolvable;
}
export interface UserTwoFactorMethods {
  /**
  * The algorithm used by the TOTP authenticator. With the current implementation, this will always be HmacSHA1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#authenticator_algorithm User#authenticator_algorithm}
  */
  readonly authenticatorAlgorithm?: string;
  /**
  * The length of code generated by the TOTP. With the current implementation, this will always be 6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#authenticator_code_length User#authenticator_code_length}
  */
  readonly authenticatorCodeLength?: number;
  /**
  * The time-step size in seconds. With the current implementation, this will always be 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#authenticator_time_step User#authenticator_time_step}
  */
  readonly authenticatorTimeStep?: number;
  /**
  * The value of the email address for this method. Only present if user.twoFactor.methods[x].method is email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * The type of this method. There will also be an object with the same value containing additional information about this method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#method User#method}
  */
  readonly method?: string;
  /**
  * The value of the mobile phone for this method. Only present if user.twoFactor.methods[x].method is sms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#mobile_phone User#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * A base64 encoded secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#secret User#secret}
  */
  readonly secret?: string;
}

export function userTwoFactorMethodsToTerraform(struct?: UserTwoFactorMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticator_algorithm: cdktf.stringToTerraform(struct!.authenticatorAlgorithm),
    authenticator_code_length: cdktf.numberToTerraform(struct!.authenticatorCodeLength),
    authenticator_time_step: cdktf.numberToTerraform(struct!.authenticatorTimeStep),
    email: cdktf.stringToTerraform(struct!.email),
    method: cdktf.stringToTerraform(struct!.method),
    mobile_phone: cdktf.stringToTerraform(struct!.mobilePhone),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function userTwoFactorMethodsToHclTerraform(struct?: UserTwoFactorMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticator_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.authenticatorAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticator_code_length: {
      value: cdktf.numberToHclTerraform(struct!.authenticatorCodeLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authenticator_time_step: {
      value: cdktf.numberToHclTerraform(struct!.authenticatorTimeStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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
    mobile_phone: {
      value: cdktf.stringToHclTerraform(struct!.mobilePhone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserTwoFactorMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserTwoFactorMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticatorAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorAlgorithm = this._authenticatorAlgorithm;
    }
    if (this._authenticatorCodeLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorCodeLength = this._authenticatorCodeLength;
    }
    if (this._authenticatorTimeStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorTimeStep = this._authenticatorTimeStep;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._mobilePhone !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePhone = this._mobilePhone;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserTwoFactorMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticatorAlgorithm = undefined;
      this._authenticatorCodeLength = undefined;
      this._authenticatorTimeStep = undefined;
      this._email = undefined;
      this._method = undefined;
      this._mobilePhone = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticatorAlgorithm = value.authenticatorAlgorithm;
      this._authenticatorCodeLength = value.authenticatorCodeLength;
      this._authenticatorTimeStep = value.authenticatorTimeStep;
      this._email = value.email;
      this._method = value.method;
      this._mobilePhone = value.mobilePhone;
      this._secret = value.secret;
    }
  }

  // authenticator_algorithm - computed: true, optional: true, required: false
  private _authenticatorAlgorithm?: string; 
  public get authenticatorAlgorithm() {
    return this.getStringAttribute('authenticator_algorithm');
  }
  public set authenticatorAlgorithm(value: string) {
    this._authenticatorAlgorithm = value;
  }
  public resetAuthenticatorAlgorithm() {
    this._authenticatorAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorAlgorithmInput() {
    return this._authenticatorAlgorithm;
  }

  // authenticator_code_length - computed: true, optional: true, required: false
  private _authenticatorCodeLength?: number; 
  public get authenticatorCodeLength() {
    return this.getNumberAttribute('authenticator_code_length');
  }
  public set authenticatorCodeLength(value: number) {
    this._authenticatorCodeLength = value;
  }
  public resetAuthenticatorCodeLength() {
    this._authenticatorCodeLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorCodeLengthInput() {
    return this._authenticatorCodeLength;
  }

  // authenticator_time_step - computed: true, optional: true, required: false
  private _authenticatorTimeStep?: number; 
  public get authenticatorTimeStep() {
    return this.getNumberAttribute('authenticator_time_step');
  }
  public set authenticatorTimeStep(value: number) {
    this._authenticatorTimeStep = value;
  }
  public resetAuthenticatorTimeStep() {
    this._authenticatorTimeStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorTimeStepInput() {
    return this._authenticatorTimeStep;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // two_factor_method_id - computed: true, optional: false, required: false
  public get twoFactorMethodId() {
    return this.getStringAttribute('two_factor_method_id');
  }
}

export class UserTwoFactorMethodsList extends cdktf.ComplexList {
  public internalValue? : UserTwoFactorMethods[] | cdktf.IResolvable

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
  public get(index: number): UserTwoFactorMethodsOutputReference {
    return new UserTwoFactorMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user fusionauth_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/user fusionauth_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_user',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
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
    this._birthDate = config.birthDate;
    this._data = config.data;
    this._disableDomainBlock = config.disableDomainBlock;
    this._email = config.email;
    this._encryptionScheme = config.encryptionScheme;
    this._expiry = config.expiry;
    this._firstName = config.firstName;
    this._fullName = config.fullName;
    this._id = config.id;
    this._imageUrl = config.imageUrl;
    this._lastName = config.lastName;
    this._middleName = config.middleName;
    this._mobilePhone = config.mobilePhone;
    this._parentEmail = config.parentEmail;
    this._password = config.password;
    this._passwordChangeRequired = config.passwordChangeRequired;
    this._preferredLanguages = config.preferredLanguages;
    this._sendSetPasswordEmail = config.sendSetPasswordEmail;
    this._skipVerification = config.skipVerification;
    this._tenantId = config.tenantId;
    this._timezone = config.timezone;
    this._twoFactorRecoveryCodes = config.twoFactorRecoveryCodes;
    this._userId = config.userId;
    this._username = config.username;
    this._usernameStatus = config.usernameStatus;
    this._twoFactorMethods.internalValue = config.twoFactorMethods;
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

  // birth_date - computed: false, optional: true, required: false
  private _birthDate?: string; 
  public get birthDate() {
    return this.getStringAttribute('birth_date');
  }
  public set birthDate(value: string) {
    this._birthDate = value;
  }
  public resetBirthDate() {
    this._birthDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get birthDateInput() {
    return this._birthDate;
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // disable_domain_block - computed: false, optional: true, required: false
  private _disableDomainBlock?: boolean | cdktf.IResolvable; 
  public get disableDomainBlock() {
    return this.getBooleanAttribute('disable_domain_block');
  }
  public set disableDomainBlock(value: boolean | cdktf.IResolvable) {
    this._disableDomainBlock = value;
  }
  public resetDisableDomainBlock() {
    this._disableDomainBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDomainBlockInput() {
    return this._disableDomainBlock;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // encryption_scheme - computed: false, optional: true, required: false
  private _encryptionScheme?: string; 
  public get encryptionScheme() {
    return this.getStringAttribute('encryption_scheme');
  }
  public set encryptionScheme(value: string) {
    this._encryptionScheme = value;
  }
  public resetEncryptionScheme() {
    this._encryptionScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSchemeInput() {
    return this._encryptionScheme;
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
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

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // middle_name - computed: false, optional: true, required: false
  private _middleName?: string; 
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }
  public set middleName(value: string) {
    this._middleName = value;
  }
  public resetMiddleName() {
    this._middleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleNameInput() {
    return this._middleName;
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

  // parent_email - computed: false, optional: true, required: false
  private _parentEmail?: string; 
  public get parentEmail() {
    return this.getStringAttribute('parent_email');
  }
  public set parentEmail(value: string) {
    this._parentEmail = value;
  }
  public resetParentEmail() {
    this._parentEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentEmailInput() {
    return this._parentEmail;
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

  // password_change_required - computed: false, optional: true, required: false
  private _passwordChangeRequired?: boolean | cdktf.IResolvable; 
  public get passwordChangeRequired() {
    return this.getBooleanAttribute('password_change_required');
  }
  public set passwordChangeRequired(value: boolean | cdktf.IResolvable) {
    this._passwordChangeRequired = value;
  }
  public resetPasswordChangeRequired() {
    this._passwordChangeRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeRequiredInput() {
    return this._passwordChangeRequired;
  }

  // preferred_languages - computed: false, optional: true, required: false
  private _preferredLanguages?: string[]; 
  public get preferredLanguages() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_languages'));
  }
  public set preferredLanguages(value: string[]) {
    this._preferredLanguages = value;
  }
  public resetPreferredLanguages() {
    this._preferredLanguages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLanguagesInput() {
    return this._preferredLanguages;
  }

  // send_set_password_email - computed: false, optional: true, required: false
  private _sendSetPasswordEmail?: boolean | cdktf.IResolvable; 
  public get sendSetPasswordEmail() {
    return this.getBooleanAttribute('send_set_password_email');
  }
  public set sendSetPasswordEmail(value: boolean | cdktf.IResolvable) {
    this._sendSetPasswordEmail = value;
  }
  public resetSendSetPasswordEmail() {
    this._sendSetPasswordEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSetPasswordEmailInput() {
    return this._sendSetPasswordEmail;
  }

  // skip_verification - computed: false, optional: true, required: false
  private _skipVerification?: boolean | cdktf.IResolvable; 
  public get skipVerification() {
    return this.getBooleanAttribute('skip_verification');
  }
  public set skipVerification(value: boolean | cdktf.IResolvable) {
    this._skipVerification = value;
  }
  public resetSkipVerification() {
    this._skipVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerificationInput() {
    return this._skipVerification;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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

  // two_factor_recovery_codes - computed: true, optional: true, required: false
  private _twoFactorRecoveryCodes?: string[]; 
  public get twoFactorRecoveryCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('two_factor_recovery_codes'));
  }
  public set twoFactorRecoveryCodes(value: string[]) {
    this._twoFactorRecoveryCodes = value;
  }
  public resetTwoFactorRecoveryCodes() {
    this._twoFactorRecoveryCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorRecoveryCodesInput() {
    return this._twoFactorRecoveryCodes;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
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

  // username_status - computed: false, optional: true, required: false
  private _usernameStatus?: string; 
  public get usernameStatus() {
    return this.getStringAttribute('username_status');
  }
  public set usernameStatus(value: string) {
    this._usernameStatus = value;
  }
  public resetUsernameStatus() {
    this._usernameStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameStatusInput() {
    return this._usernameStatus;
  }

  // two_factor_methods - computed: false, optional: true, required: false
  private _twoFactorMethods = new UserTwoFactorMethodsList(this, "two_factor_methods", false);
  public get twoFactorMethods() {
    return this._twoFactorMethods;
  }
  public putTwoFactorMethods(value: UserTwoFactorMethods[] | cdktf.IResolvable) {
    this._twoFactorMethods.internalValue = value;
  }
  public resetTwoFactorMethods() {
    this._twoFactorMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorMethodsInput() {
    return this._twoFactorMethods.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      birth_date: cdktf.stringToTerraform(this._birthDate),
      data: cdktf.stringToTerraform(this._data),
      disable_domain_block: cdktf.booleanToTerraform(this._disableDomainBlock),
      email: cdktf.stringToTerraform(this._email),
      encryption_scheme: cdktf.stringToTerraform(this._encryptionScheme),
      expiry: cdktf.numberToTerraform(this._expiry),
      first_name: cdktf.stringToTerraform(this._firstName),
      full_name: cdktf.stringToTerraform(this._fullName),
      id: cdktf.stringToTerraform(this._id),
      image_url: cdktf.stringToTerraform(this._imageUrl),
      last_name: cdktf.stringToTerraform(this._lastName),
      middle_name: cdktf.stringToTerraform(this._middleName),
      mobile_phone: cdktf.stringToTerraform(this._mobilePhone),
      parent_email: cdktf.stringToTerraform(this._parentEmail),
      password: cdktf.stringToTerraform(this._password),
      password_change_required: cdktf.booleanToTerraform(this._passwordChangeRequired),
      preferred_languages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredLanguages),
      send_set_password_email: cdktf.booleanToTerraform(this._sendSetPasswordEmail),
      skip_verification: cdktf.booleanToTerraform(this._skipVerification),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timezone: cdktf.stringToTerraform(this._timezone),
      two_factor_recovery_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._twoFactorRecoveryCodes),
      user_id: cdktf.stringToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
      username_status: cdktf.stringToTerraform(this._usernameStatus),
      two_factor_methods: cdktf.listMapper(userTwoFactorMethodsToTerraform, true)(this._twoFactorMethods.internalValue),
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
      birth_date: {
        value: cdktf.stringToHclTerraform(this._birthDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_domain_block: {
        value: cdktf.booleanToHclTerraform(this._disableDomainBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_scheme: {
        value: cdktf.stringToHclTerraform(this._encryptionScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry: {
        value: cdktf.numberToHclTerraform(this._expiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
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
      image_url: {
        value: cdktf.stringToHclTerraform(this._imageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      middle_name: {
        value: cdktf.stringToHclTerraform(this._middleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mobile_phone: {
        value: cdktf.stringToHclTerraform(this._mobilePhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_email: {
        value: cdktf.stringToHclTerraform(this._parentEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_change_required: {
        value: cdktf.booleanToHclTerraform(this._passwordChangeRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preferred_languages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredLanguages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      send_set_password_email: {
        value: cdktf.booleanToHclTerraform(this._sendSetPasswordEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_verification: {
        value: cdktf.booleanToHclTerraform(this._skipVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
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
      two_factor_recovery_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._twoFactorRecoveryCodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_status: {
        value: cdktf.stringToHclTerraform(this._usernameStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor_methods: {
        value: cdktf.listMapperHcl(userTwoFactorMethodsToHclTerraform, true)(this._twoFactorMethods.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserTwoFactorMethodsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
