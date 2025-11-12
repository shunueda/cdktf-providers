// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user's street address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#address IamUser#address}
  */
  readonly address?: string;
  /**
  * A user's per-group role assignments, in JSON form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#auth_grants_json IamUser#auth_grants_json}
  */
  readonly authGrantsJson: string;
  /**
  * The user's city.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#city IamUser#city}
  */
  readonly city?: string;
  /**
  * To help characterize the user, the value can be any that are available from the view-contact-types operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#contact_type IamUser#contact_type}
  */
  readonly contactType?: string;
  /**
  * As part of the user's location, the value can be any that are available from the view-supported-countries operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#country IamUser#country}
  */
  readonly country: string;
  /**
  * The user's email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#email IamUser#email}
  */
  readonly email: string;
  /**
  * Indicates whether multi-factor authentication is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#enable_mfa IamUser#enable_mfa}
  */
  readonly enableMfa?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether two-factor authentication is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#enable_tfa IamUser#enable_tfa}
  */
  readonly enableTfa?: boolean | cdktf.IResolvable;
  /**
  * The user's first name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#first_name IamUser#first_name}
  */
  readonly firstName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#id IamUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The user's position at your company.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#job_title IamUser#job_title}
  */
  readonly jobTitle?: string;
  /**
  * The user's surname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#last_name IamUser#last_name}
  */
  readonly lastName: string;
  /**
  * Flag to block a user account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#lock IamUser#lock}
  */
  readonly lock?: boolean | cdktf.IResolvable;
  /**
  * The user's mobile phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#mobile_phone IamUser#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * New password for a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#password IamUser#password}
  */
  readonly password?: string;
  /**
  * The user's main phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#phone IamUser#phone}
  */
  readonly phone?: string;
  /**
  * The value can be any that are available from the view-languages operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#preferred_language IamUser#preferred_language}
  */
  readonly preferredLanguage?: string;
  /**
  * The user's secondary email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#secondary_email IamUser#secondary_email}
  */
  readonly secondaryEmail?: string;
  /**
  * The number of seconds it takes for the user's Control Center session to time out if there hasn't been any activity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#session_timeout IamUser#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * The user's state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#state IamUser#state}
  */
  readonly state?: string;
  /**
  * The user's time zone. The value can be any that are available from the view-time-zones operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#time_zone IamUser#time_zone}
  */
  readonly timeZone?: string;
  /**
  * The user's five-digit ZIP code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#zip_code IamUser#zip_code}
  */
  readonly zipCode?: string;
  /**
  * user_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#user_notifications IamUser#user_notifications}
  */
  readonly userNotifications?: IamUserUserNotifications;
}
export interface IamUserUserNotifications {
  /**
  * Enables notifications for expiring API client credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#api_client_credential_expiry_notification IamUser#api_client_credential_expiry_notification}
  */
  readonly apiClientCredentialExpiryNotification?: boolean | cdktf.IResolvable;
  /**
  * Enables email notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#enable_email_notifications IamUser#enable_email_notifications}
  */
  readonly enableEmailNotifications: boolean | cdktf.IResolvable;
  /**
  * Enables notifications for group administrators when the user creates other new users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#new_user_notification IamUser#new_user_notification}
  */
  readonly newUserNotification?: boolean | cdktf.IResolvable;
  /**
  * Enables notifications for expiring passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#password_expiry IamUser#password_expiry}
  */
  readonly passwordExpiry: boolean | cdktf.IResolvable;
  /**
  * Products for which the user gets notifications for service issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#proactive IamUser#proactive}
  */
  readonly proactive: string[];
  /**
  * Products for which the user receives notifications for upgrades.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#upgrade IamUser#upgrade}
  */
  readonly upgrade: string[];
}

export function iamUserUserNotificationsToTerraform(struct?: IamUserUserNotificationsOutputReference | IamUserUserNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_client_credential_expiry_notification: cdktf.booleanToTerraform(struct!.apiClientCredentialExpiryNotification),
    enable_email_notifications: cdktf.booleanToTerraform(struct!.enableEmailNotifications),
    new_user_notification: cdktf.booleanToTerraform(struct!.newUserNotification),
    password_expiry: cdktf.booleanToTerraform(struct!.passwordExpiry),
    proactive: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proactive),
    upgrade: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upgrade),
  }
}


export function iamUserUserNotificationsToHclTerraform(struct?: IamUserUserNotificationsOutputReference | IamUserUserNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_client_credential_expiry_notification: {
      value: cdktf.booleanToHclTerraform(struct!.apiClientCredentialExpiryNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_email_notifications: {
      value: cdktf.booleanToHclTerraform(struct!.enableEmailNotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    new_user_notification: {
      value: cdktf.booleanToHclTerraform(struct!.newUserNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.passwordExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proactive: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proactive),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    upgrade: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upgrade),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamUserUserNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamUserUserNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiClientCredentialExpiryNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiClientCredentialExpiryNotification = this._apiClientCredentialExpiryNotification;
    }
    if (this._enableEmailNotifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEmailNotifications = this._enableEmailNotifications;
    }
    if (this._newUserNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.newUserNotification = this._newUserNotification;
    }
    if (this._passwordExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordExpiry = this._passwordExpiry;
    }
    if (this._proactive !== undefined) {
      hasAnyValues = true;
      internalValueResult.proactive = this._proactive;
    }
    if (this._upgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgrade = this._upgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamUserUserNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiClientCredentialExpiryNotification = undefined;
      this._enableEmailNotifications = undefined;
      this._newUserNotification = undefined;
      this._passwordExpiry = undefined;
      this._proactive = undefined;
      this._upgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiClientCredentialExpiryNotification = value.apiClientCredentialExpiryNotification;
      this._enableEmailNotifications = value.enableEmailNotifications;
      this._newUserNotification = value.newUserNotification;
      this._passwordExpiry = value.passwordExpiry;
      this._proactive = value.proactive;
      this._upgrade = value.upgrade;
    }
  }

  // api_client_credential_expiry_notification - computed: false, optional: true, required: false
  private _apiClientCredentialExpiryNotification?: boolean | cdktf.IResolvable; 
  public get apiClientCredentialExpiryNotification() {
    return this.getBooleanAttribute('api_client_credential_expiry_notification');
  }
  public set apiClientCredentialExpiryNotification(value: boolean | cdktf.IResolvable) {
    this._apiClientCredentialExpiryNotification = value;
  }
  public resetApiClientCredentialExpiryNotification() {
    this._apiClientCredentialExpiryNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiClientCredentialExpiryNotificationInput() {
    return this._apiClientCredentialExpiryNotification;
  }

  // enable_email_notifications - computed: false, optional: false, required: true
  private _enableEmailNotifications?: boolean | cdktf.IResolvable; 
  public get enableEmailNotifications() {
    return this.getBooleanAttribute('enable_email_notifications');
  }
  public set enableEmailNotifications(value: boolean | cdktf.IResolvable) {
    this._enableEmailNotifications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEmailNotificationsInput() {
    return this._enableEmailNotifications;
  }

  // new_user_notification - computed: false, optional: true, required: false
  private _newUserNotification?: boolean | cdktf.IResolvable; 
  public get newUserNotification() {
    return this.getBooleanAttribute('new_user_notification');
  }
  public set newUserNotification(value: boolean | cdktf.IResolvable) {
    this._newUserNotification = value;
  }
  public resetNewUserNotification() {
    this._newUserNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newUserNotificationInput() {
    return this._newUserNotification;
  }

  // password_expiry - computed: false, optional: false, required: true
  private _passwordExpiry?: boolean | cdktf.IResolvable; 
  public get passwordExpiry() {
    return this.getBooleanAttribute('password_expiry');
  }
  public set passwordExpiry(value: boolean | cdktf.IResolvable) {
    this._passwordExpiry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpiryInput() {
    return this._passwordExpiry;
  }

  // proactive - computed: false, optional: false, required: true
  private _proactive?: string[]; 
  public get proactive() {
    return this.getListAttribute('proactive');
  }
  public set proactive(value: string[]) {
    this._proactive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proactiveInput() {
    return this._proactive;
  }

  // upgrade - computed: false, optional: false, required: true
  private _upgrade?: string[]; 
  public get upgrade() {
    return this.getListAttribute('upgrade');
  }
  public set upgrade(value: string[]) {
    this._upgrade = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeInput() {
    return this._upgrade;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user akamai_iam_user}
*/
export class IamUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_iam_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamUser to import
  * @param importFromId The id of the existing IamUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_iam_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_user akamai_iam_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamUserConfig
  */
  public constructor(scope: Construct, id: string, config: IamUserConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_iam_user',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._authGrantsJson = config.authGrantsJson;
    this._city = config.city;
    this._contactType = config.contactType;
    this._country = config.country;
    this._email = config.email;
    this._enableMfa = config.enableMfa;
    this._enableTfa = config.enableTfa;
    this._firstName = config.firstName;
    this._id = config.id;
    this._jobTitle = config.jobTitle;
    this._lastName = config.lastName;
    this._lock = config.lock;
    this._mobilePhone = config.mobilePhone;
    this._password = config.password;
    this._phone = config.phone;
    this._preferredLanguage = config.preferredLanguage;
    this._secondaryEmail = config.secondaryEmail;
    this._sessionTimeout = config.sessionTimeout;
    this._state = config.state;
    this._timeZone = config.timeZone;
    this._zipCode = config.zipCode;
    this._userNotifications.internalValue = config.userNotifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // auth_grants_json - computed: false, optional: false, required: true
  private _authGrantsJson?: string; 
  public get authGrantsJson() {
    return this.getStringAttribute('auth_grants_json');
  }
  public set authGrantsJson(value: string) {
    this._authGrantsJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authGrantsJsonInput() {
    return this._authGrantsJson;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // contact_type - computed: true, optional: true, required: false
  private _contactType?: string; 
  public get contactType() {
    return this.getStringAttribute('contact_type');
  }
  public set contactType(value: string) {
    this._contactType = value;
  }
  public resetContactType() {
    this._contactType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTypeInput() {
    return this._contactType;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
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

  // email_update_pending - computed: true, optional: false, required: false
  public get emailUpdatePending() {
    return this.getBooleanAttribute('email_update_pending');
  }

  // enable_mfa - computed: false, optional: true, required: false
  private _enableMfa?: boolean | cdktf.IResolvable; 
  public get enableMfa() {
    return this.getBooleanAttribute('enable_mfa');
  }
  public set enableMfa(value: boolean | cdktf.IResolvable) {
    this._enableMfa = value;
  }
  public resetEnableMfa() {
    this._enableMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMfaInput() {
    return this._enableMfa;
  }

  // enable_tfa - computed: false, optional: true, required: false
  private _enableTfa?: boolean | cdktf.IResolvable; 
  public get enableTfa() {
    return this.getBooleanAttribute('enable_tfa');
  }
  public set enableTfa(value: boolean | cdktf.IResolvable) {
    this._enableTfa = value;
  }
  public resetEnableTfa() {
    this._enableTfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTfaInput() {
    return this._enableTfa;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
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

  // job_title - computed: false, optional: true, required: false
  private _jobTitle?: string; 
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }
  public set jobTitle(value: string) {
    this._jobTitle = value;
  }
  public resetJobTitle() {
    this._jobTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTitleInput() {
    return this._jobTitle;
  }

  // last_login - computed: true, optional: false, required: false
  public get lastLogin() {
    return this.getStringAttribute('last_login');
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // lock - computed: false, optional: true, required: false
  private _lock?: boolean | cdktf.IResolvable; 
  public get lock() {
    return this.getBooleanAttribute('lock');
  }
  public set lock(value: boolean | cdktf.IResolvable) {
    this._lock = value;
  }
  public resetLock() {
    this._lock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockInput() {
    return this._lock;
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

  // password_expired_after - computed: true, optional: false, required: false
  public get passwordExpiredAfter() {
    return this.getStringAttribute('password_expired_after');
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // preferred_language - computed: true, optional: true, required: false
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

  // secondary_email - computed: false, optional: true, required: false
  private _secondaryEmail?: string; 
  public get secondaryEmail() {
    return this.getStringAttribute('secondary_email');
  }
  public set secondaryEmail(value: string) {
    this._secondaryEmail = value;
  }
  public resetSecondaryEmail() {
    this._secondaryEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryEmailInput() {
    return this._secondaryEmail;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tfa_configured - computed: true, optional: false, required: false
  public get tfaConfigured() {
    return this.getBooleanAttribute('tfa_configured');
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // zip_code - computed: false, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }

  // user_notifications - computed: false, optional: true, required: false
  private _userNotifications = new IamUserUserNotificationsOutputReference(this, "user_notifications");
  public get userNotifications() {
    return this._userNotifications;
  }
  public putUserNotifications(value: IamUserUserNotifications) {
    this._userNotifications.internalValue = value;
  }
  public resetUserNotifications() {
    this._userNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNotificationsInput() {
    return this._userNotifications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      auth_grants_json: cdktf.stringToTerraform(this._authGrantsJson),
      city: cdktf.stringToTerraform(this._city),
      contact_type: cdktf.stringToTerraform(this._contactType),
      country: cdktf.stringToTerraform(this._country),
      email: cdktf.stringToTerraform(this._email),
      enable_mfa: cdktf.booleanToTerraform(this._enableMfa),
      enable_tfa: cdktf.booleanToTerraform(this._enableTfa),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      job_title: cdktf.stringToTerraform(this._jobTitle),
      last_name: cdktf.stringToTerraform(this._lastName),
      lock: cdktf.booleanToTerraform(this._lock),
      mobile_phone: cdktf.stringToTerraform(this._mobilePhone),
      password: cdktf.stringToTerraform(this._password),
      phone: cdktf.stringToTerraform(this._phone),
      preferred_language: cdktf.stringToTerraform(this._preferredLanguage),
      secondary_email: cdktf.stringToTerraform(this._secondaryEmail),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      state: cdktf.stringToTerraform(this._state),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      zip_code: cdktf.stringToTerraform(this._zipCode),
      user_notifications: iamUserUserNotificationsToTerraform(this._userNotifications.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_grants_json: {
        value: cdktf.stringToHclTerraform(this._authGrantsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_type: {
        value: cdktf.stringToHclTerraform(this._contactType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_mfa: {
        value: cdktf.booleanToHclTerraform(this._enableMfa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tfa: {
        value: cdktf.booleanToHclTerraform(this._enableTfa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
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
      job_title: {
        value: cdktf.stringToHclTerraform(this._jobTitle),
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
      lock: {
        value: cdktf.booleanToHclTerraform(this._lock),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone: {
        value: cdktf.stringToHclTerraform(this._phone),
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
      secondary_email: {
        value: cdktf.stringToHclTerraform(this._secondaryEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zip_code: {
        value: cdktf.stringToHclTerraform(this._zipCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_notifications: {
        value: iamUserUserNotificationsToHclTerraform(this._userNotifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamUserUserNotificationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
