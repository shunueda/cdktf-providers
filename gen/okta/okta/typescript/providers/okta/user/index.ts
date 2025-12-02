// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * User city
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#city User#city}
  */
  readonly city?: string;
  /**
  * User cost center
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#cost_center User#cost_center}
  */
  readonly costCenter?: string;
  /**
  * User country code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#country_code User#country_code}
  */
  readonly countryCode?: string;
  /**
  * JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#custom_profile_attributes User#custom_profile_attributes}
  */
  readonly customProfileAttributes?: string;
  /**
  * List of custom_profile_attribute keys that should be excluded from being managed by Terraform. This is useful in situations where specific custom fields may contain sensitive information and should be managed outside of Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#custom_profile_attributes_to_ignore User#custom_profile_attributes_to_ignore}
  */
  readonly customProfileAttributesToIgnore?: string[];
  /**
  * User department
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#department User#department}
  */
  readonly department?: string;
  /**
  * User display name, suitable to show end users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#display_name User#display_name}
  */
  readonly displayName?: string;
  /**
  * User division
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#division User#division}
  */
  readonly division?: string;
  /**
  * User primary email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * User employee number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#employee_number User#employee_number}
  */
  readonly employeeNumber?: string;
  /**
  * If set to `true`, the user will have to change the password at the next login. This property will be used when user is being created and works only when `password` field is set. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#expire_password_on_create User#expire_password_on_create}
  */
  readonly expirePasswordOnCreate?: boolean | cdktf.IResolvable;
  /**
  * User first name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#first_name User#first_name}
  */
  readonly firstName: string;
  /**
  * User honorific prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#honorific_prefix User#honorific_prefix}
  */
  readonly honorificPrefix?: string;
  /**
  * User honorific suffix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#honorific_suffix User#honorific_suffix}
  */
  readonly honorificSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User last name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#last_name User#last_name}
  */
  readonly lastName: string;
  /**
  * User default location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#locale User#locale}
  */
  readonly locale?: string;
  /**
  * User Okta login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#login User#login}
  */
  readonly login: string;
  /**
  * Manager of User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#manager User#manager}
  */
  readonly manager?: string;
  /**
  * Manager ID of User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#manager_id User#manager_id}
  */
  readonly managerId?: string;
  /**
  * User middle name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#middle_name User#middle_name}
  */
  readonly middleName?: string;
  /**
  * User mobile phone number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#mobile_phone User#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * User nickname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#nick_name User#nick_name}
  */
  readonly nickName?: string;
  /**
  * Old User Password. Should be only set in case the password was not changed using the provider. fter successful password change this field should be removed and `password` field should be used for further changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#old_password User#old_password}
  */
  readonly oldPassword?: string;
  /**
  * User organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#organization User#organization}
  */
  readonly organization?: string;
  /**
  * User Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Specifies that a Password Import Inline Hook should be triggered to handle verification of the user's password the first time the user logs in. This allows an existing password to be imported into Okta directly from some other store. When updating a user with a password hook the user must be in the `STAGED` status. The `password` field should not be specified when using Password Import Inline Hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#password_inline_hook User#password_inline_hook}
  */
  readonly passwordInlineHook?: string;
  /**
  * User mailing address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#postal_address User#postal_address}
  */
  readonly postalAddress?: string;
  /**
  * User preferred language
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#preferred_language User#preferred_language}
  */
  readonly preferredLanguage?: string;
  /**
  * User primary phone number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#primary_phone User#primary_phone}
  */
  readonly primaryPhone?: string;
  /**
  * User online profile (web page)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#profile_url User#profile_url}
  */
  readonly profileUrl?: string;
  /**
  * User Password Recovery Answer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#recovery_answer User#recovery_answer}
  */
  readonly recoveryAnswer?: string;
  /**
  * User Password Recovery Question
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#recovery_question User#recovery_question}
  */
  readonly recoveryQuestion?: string;
  /**
  * User secondary email address, used for account recovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#second_email User#second_email}
  */
  readonly secondEmail?: string;
  /**
  * Do not populate user roles information (prevents additional API call)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#skip_roles User#skip_roles}
  */
  readonly skipRoles?: boolean | cdktf.IResolvable;
  /**
  * User state or region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#state User#state}
  */
  readonly state?: string;
  /**
  * User profile property. Valid values are `ACTIVE`, `DEPROVISIONED`, `STAGED`, `SUSPENDED`. Default: `ACTIVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#status User#status}
  */
  readonly status?: string;
  /**
  * User street address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#street_address User#street_address}
  */
  readonly streetAddress?: string;
  /**
  * User default timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#timezone User#timezone}
  */
  readonly timezone?: string;
  /**
  * User title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#title User#title}
  */
  readonly title?: string;
  /**
  * User employee type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#user_type User#user_type}
  */
  readonly userType?: string;
  /**
  * User zipcode or postal code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#zip_code User#zip_code}
  */
  readonly zipCode?: string;
  /**
  * password_hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#password_hash User#password_hash}
  */
  readonly passwordHash?: UserPasswordHash;
}
export interface UserPasswordHash {
  /**
  * The algorithm used to generate the hash using the password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#algorithm User#algorithm}
  */
  readonly algorithm: string;
  /**
  * Only required for salted hashes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#salt User#salt}
  */
  readonly salt?: string;
  /**
  * Specifies whether salt was pre- or postfixed to the password before hashing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#salt_order User#salt_order}
  */
  readonly saltOrder?: string;
  /**
  * For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used). This is the Base64 encoded value of the SHA-512/SHA-256/SHA-1/MD5 digest that was computed by either pre-fixing or post-fixing the salt to the password, depending on the saltOrder. If a salt was not used in the source system, then this should just be the the Base64 encoded value of the password's SHA-512/SHA-256/SHA-1/MD5 digest. For BCRYPT, This is the actual radix64-encoded hashed password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#value User#value}
  */
  readonly value: string;
  /**
  * Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#work_factor User#work_factor}
  */
  readonly workFactor?: number;
}

export function userPasswordHashToTerraform(struct?: UserPasswordHashOutputReference | UserPasswordHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    salt: cdktf.stringToTerraform(struct!.salt),
    salt_order: cdktf.stringToTerraform(struct!.saltOrder),
    value: cdktf.stringToTerraform(struct!.value),
    work_factor: cdktf.numberToTerraform(struct!.workFactor),
  }
}


export function userPasswordHashToHclTerraform(struct?: UserPasswordHashOutputReference | UserPasswordHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    salt: {
      value: cdktf.stringToHclTerraform(struct!.salt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    salt_order: {
      value: cdktf.stringToHclTerraform(struct!.saltOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_factor: {
      value: cdktf.numberToHclTerraform(struct!.workFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserPasswordHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserPasswordHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._salt !== undefined) {
      hasAnyValues = true;
      internalValueResult.salt = this._salt;
    }
    if (this._saltOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.saltOrder = this._saltOrder;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._workFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.workFactor = this._workFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPasswordHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._salt = undefined;
      this._saltOrder = undefined;
      this._value = undefined;
      this._workFactor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._salt = value.salt;
      this._saltOrder = value.saltOrder;
      this._value = value.value;
      this._workFactor = value.workFactor;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // salt - computed: false, optional: true, required: false
  private _salt?: string; 
  public get salt() {
    return this.getStringAttribute('salt');
  }
  public set salt(value: string) {
    this._salt = value;
  }
  public resetSalt() {
    this._salt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltInput() {
    return this._salt;
  }

  // salt_order - computed: false, optional: true, required: false
  private _saltOrder?: string; 
  public get saltOrder() {
    return this.getStringAttribute('salt_order');
  }
  public set saltOrder(value: string) {
    this._saltOrder = value;
  }
  public resetSaltOrder() {
    this._saltOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltOrderInput() {
    return this._saltOrder;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // work_factor - computed: false, optional: true, required: false
  private _workFactor?: number; 
  public get workFactor() {
    return this.getNumberAttribute('work_factor');
  }
  public set workFactor(value: number) {
    this._workFactor = value;
  }
  public resetWorkFactor() {
    this._workFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workFactorInput() {
    return this._workFactor;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user okta_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/user okta_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_user',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._city = config.city;
    this._costCenter = config.costCenter;
    this._countryCode = config.countryCode;
    this._customProfileAttributes = config.customProfileAttributes;
    this._customProfileAttributesToIgnore = config.customProfileAttributesToIgnore;
    this._department = config.department;
    this._displayName = config.displayName;
    this._division = config.division;
    this._email = config.email;
    this._employeeNumber = config.employeeNumber;
    this._expirePasswordOnCreate = config.expirePasswordOnCreate;
    this._firstName = config.firstName;
    this._honorificPrefix = config.honorificPrefix;
    this._honorificSuffix = config.honorificSuffix;
    this._id = config.id;
    this._lastName = config.lastName;
    this._locale = config.locale;
    this._login = config.login;
    this._manager = config.manager;
    this._managerId = config.managerId;
    this._middleName = config.middleName;
    this._mobilePhone = config.mobilePhone;
    this._nickName = config.nickName;
    this._oldPassword = config.oldPassword;
    this._organization = config.organization;
    this._password = config.password;
    this._passwordInlineHook = config.passwordInlineHook;
    this._postalAddress = config.postalAddress;
    this._preferredLanguage = config.preferredLanguage;
    this._primaryPhone = config.primaryPhone;
    this._profileUrl = config.profileUrl;
    this._recoveryAnswer = config.recoveryAnswer;
    this._recoveryQuestion = config.recoveryQuestion;
    this._secondEmail = config.secondEmail;
    this._skipRoles = config.skipRoles;
    this._state = config.state;
    this._status = config.status;
    this._streetAddress = config.streetAddress;
    this._timezone = config.timezone;
    this._title = config.title;
    this._userType = config.userType;
    this._zipCode = config.zipCode;
    this._passwordHash.internalValue = config.passwordHash;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cost_center - computed: false, optional: true, required: false
  private _costCenter?: string; 
  public get costCenter() {
    return this.getStringAttribute('cost_center');
  }
  public set costCenter(value: string) {
    this._costCenter = value;
  }
  public resetCostCenter() {
    this._costCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCenterInput() {
    return this._costCenter;
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

  // custom_profile_attributes - computed: true, optional: true, required: false
  private _customProfileAttributes?: string; 
  public get customProfileAttributes() {
    return this.getStringAttribute('custom_profile_attributes');
  }
  public set customProfileAttributes(value: string) {
    this._customProfileAttributes = value;
  }
  public resetCustomProfileAttributes() {
    this._customProfileAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProfileAttributesInput() {
    return this._customProfileAttributes;
  }

  // custom_profile_attributes_to_ignore - computed: false, optional: true, required: false
  private _customProfileAttributesToIgnore?: string[]; 
  public get customProfileAttributesToIgnore() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_profile_attributes_to_ignore'));
  }
  public set customProfileAttributesToIgnore(value: string[]) {
    this._customProfileAttributesToIgnore = value;
  }
  public resetCustomProfileAttributesToIgnore() {
    this._customProfileAttributesToIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProfileAttributesToIgnoreInput() {
    return this._customProfileAttributesToIgnore;
  }

  // department - computed: false, optional: true, required: false
  private _department?: string; 
  public get department() {
    return this.getStringAttribute('department');
  }
  public set department(value: string) {
    this._department = value;
  }
  public resetDepartment() {
    this._department = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentInput() {
    return this._department;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // division - computed: false, optional: true, required: false
  private _division?: string; 
  public get division() {
    return this.getStringAttribute('division');
  }
  public set division(value: string) {
    this._division = value;
  }
  public resetDivision() {
    this._division = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionInput() {
    return this._division;
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

  // employee_number - computed: false, optional: true, required: false
  private _employeeNumber?: string; 
  public get employeeNumber() {
    return this.getStringAttribute('employee_number');
  }
  public set employeeNumber(value: string) {
    this._employeeNumber = value;
  }
  public resetEmployeeNumber() {
    this._employeeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeNumberInput() {
    return this._employeeNumber;
  }

  // expire_password_on_create - computed: false, optional: true, required: false
  private _expirePasswordOnCreate?: boolean | cdktf.IResolvable; 
  public get expirePasswordOnCreate() {
    return this.getBooleanAttribute('expire_password_on_create');
  }
  public set expirePasswordOnCreate(value: boolean | cdktf.IResolvable) {
    this._expirePasswordOnCreate = value;
  }
  public resetExpirePasswordOnCreate() {
    this._expirePasswordOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirePasswordOnCreateInput() {
    return this._expirePasswordOnCreate;
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

  // login - computed: false, optional: false, required: true
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // manager - computed: false, optional: true, required: false
  private _manager?: string; 
  public get manager() {
    return this.getStringAttribute('manager');
  }
  public set manager(value: string) {
    this._manager = value;
  }
  public resetManager() {
    this._manager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInput() {
    return this._manager;
  }

  // manager_id - computed: false, optional: true, required: false
  private _managerId?: string; 
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }
  public set managerId(value: string) {
    this._managerId = value;
  }
  public resetManagerId() {
    this._managerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdInput() {
    return this._managerId;
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

  // nick_name - computed: false, optional: true, required: false
  private _nickName?: string; 
  public get nickName() {
    return this.getStringAttribute('nick_name');
  }
  public set nickName(value: string) {
    this._nickName = value;
  }
  public resetNickName() {
    this._nickName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nickNameInput() {
    return this._nickName;
  }

  // old_password - computed: false, optional: true, required: false
  private _oldPassword?: string; 
  public get oldPassword() {
    return this.getStringAttribute('old_password');
  }
  public set oldPassword(value: string) {
    this._oldPassword = value;
  }
  public resetOldPassword() {
    this._oldPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordInput() {
    return this._oldPassword;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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

  // password_inline_hook - computed: false, optional: true, required: false
  private _passwordInlineHook?: string; 
  public get passwordInlineHook() {
    return this.getStringAttribute('password_inline_hook');
  }
  public set passwordInlineHook(value: string) {
    this._passwordInlineHook = value;
  }
  public resetPasswordInlineHook() {
    this._passwordInlineHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInlineHookInput() {
    return this._passwordInlineHook;
  }

  // postal_address - computed: false, optional: true, required: false
  private _postalAddress?: string; 
  public get postalAddress() {
    return this.getStringAttribute('postal_address');
  }
  public set postalAddress(value: string) {
    this._postalAddress = value;
  }
  public resetPostalAddress() {
    this._postalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalAddressInput() {
    return this._postalAddress;
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

  // profile_url - computed: false, optional: true, required: false
  private _profileUrl?: string; 
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }
  public set profileUrl(value: string) {
    this._profileUrl = value;
  }
  public resetProfileUrl() {
    this._profileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileUrlInput() {
    return this._profileUrl;
  }

  // raw_status - computed: true, optional: false, required: false
  public get rawStatus() {
    return this.getStringAttribute('raw_status');
  }

  // recovery_answer - computed: false, optional: true, required: false
  private _recoveryAnswer?: string; 
  public get recoveryAnswer() {
    return this.getStringAttribute('recovery_answer');
  }
  public set recoveryAnswer(value: string) {
    this._recoveryAnswer = value;
  }
  public resetRecoveryAnswer() {
    this._recoveryAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryAnswerInput() {
    return this._recoveryAnswer;
  }

  // recovery_question - computed: false, optional: true, required: false
  private _recoveryQuestion?: string; 
  public get recoveryQuestion() {
    return this.getStringAttribute('recovery_question');
  }
  public set recoveryQuestion(value: string) {
    this._recoveryQuestion = value;
  }
  public resetRecoveryQuestion() {
    this._recoveryQuestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryQuestionInput() {
    return this._recoveryQuestion;
  }

  // second_email - computed: false, optional: true, required: false
  private _secondEmail?: string; 
  public get secondEmail() {
    return this.getStringAttribute('second_email');
  }
  public set secondEmail(value: string) {
    this._secondEmail = value;
  }
  public resetSecondEmail() {
    this._secondEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondEmailInput() {
    return this._secondEmail;
  }

  // skip_roles - computed: false, optional: true, required: false
  private _skipRoles?: boolean | cdktf.IResolvable; 
  public get skipRoles() {
    return this.getBooleanAttribute('skip_roles');
  }
  public set skipRoles(value: boolean | cdktf.IResolvable) {
    this._skipRoles = value;
  }
  public resetSkipRoles() {
    this._skipRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRolesInput() {
    return this._skipRoles;
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

  // status - computed: false, optional: true, required: false
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

  // user_type - computed: false, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
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

  // password_hash - computed: false, optional: true, required: false
  private _passwordHash = new UserPasswordHashOutputReference(this, "password_hash");
  public get passwordHash() {
    return this._passwordHash;
  }
  public putPasswordHash(value: UserPasswordHash) {
    this._passwordHash.internalValue = value;
  }
  public resetPasswordHash() {
    this._passwordHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHashInput() {
    return this._passwordHash.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      city: cdktf.stringToTerraform(this._city),
      cost_center: cdktf.stringToTerraform(this._costCenter),
      country_code: cdktf.stringToTerraform(this._countryCode),
      custom_profile_attributes: cdktf.stringToTerraform(this._customProfileAttributes),
      custom_profile_attributes_to_ignore: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customProfileAttributesToIgnore),
      department: cdktf.stringToTerraform(this._department),
      display_name: cdktf.stringToTerraform(this._displayName),
      division: cdktf.stringToTerraform(this._division),
      email: cdktf.stringToTerraform(this._email),
      employee_number: cdktf.stringToTerraform(this._employeeNumber),
      expire_password_on_create: cdktf.booleanToTerraform(this._expirePasswordOnCreate),
      first_name: cdktf.stringToTerraform(this._firstName),
      honorific_prefix: cdktf.stringToTerraform(this._honorificPrefix),
      honorific_suffix: cdktf.stringToTerraform(this._honorificSuffix),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      locale: cdktf.stringToTerraform(this._locale),
      login: cdktf.stringToTerraform(this._login),
      manager: cdktf.stringToTerraform(this._manager),
      manager_id: cdktf.stringToTerraform(this._managerId),
      middle_name: cdktf.stringToTerraform(this._middleName),
      mobile_phone: cdktf.stringToTerraform(this._mobilePhone),
      nick_name: cdktf.stringToTerraform(this._nickName),
      old_password: cdktf.stringToTerraform(this._oldPassword),
      organization: cdktf.stringToTerraform(this._organization),
      password: cdktf.stringToTerraform(this._password),
      password_inline_hook: cdktf.stringToTerraform(this._passwordInlineHook),
      postal_address: cdktf.stringToTerraform(this._postalAddress),
      preferred_language: cdktf.stringToTerraform(this._preferredLanguage),
      primary_phone: cdktf.stringToTerraform(this._primaryPhone),
      profile_url: cdktf.stringToTerraform(this._profileUrl),
      recovery_answer: cdktf.stringToTerraform(this._recoveryAnswer),
      recovery_question: cdktf.stringToTerraform(this._recoveryQuestion),
      second_email: cdktf.stringToTerraform(this._secondEmail),
      skip_roles: cdktf.booleanToTerraform(this._skipRoles),
      state: cdktf.stringToTerraform(this._state),
      status: cdktf.stringToTerraform(this._status),
      street_address: cdktf.stringToTerraform(this._streetAddress),
      timezone: cdktf.stringToTerraform(this._timezone),
      title: cdktf.stringToTerraform(this._title),
      user_type: cdktf.stringToTerraform(this._userType),
      zip_code: cdktf.stringToTerraform(this._zipCode),
      password_hash: userPasswordHashToTerraform(this._passwordHash.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost_center: {
        value: cdktf.stringToHclTerraform(this._costCenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_profile_attributes: {
        value: cdktf.stringToHclTerraform(this._customProfileAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_profile_attributes_to_ignore: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customProfileAttributesToIgnore),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      department: {
        value: cdktf.stringToHclTerraform(this._department),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      division: {
        value: cdktf.stringToHclTerraform(this._division),
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
      employee_number: {
        value: cdktf.stringToHclTerraform(this._employeeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_password_on_create: {
        value: cdktf.booleanToHclTerraform(this._expirePasswordOnCreate),
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
      honorific_prefix: {
        value: cdktf.stringToHclTerraform(this._honorificPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      honorific_suffix: {
        value: cdktf.stringToHclTerraform(this._honorificSuffix),
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
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login: {
        value: cdktf.stringToHclTerraform(this._login),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager: {
        value: cdktf.stringToHclTerraform(this._manager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_id: {
        value: cdktf.stringToHclTerraform(this._managerId),
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
      nick_name: {
        value: cdktf.stringToHclTerraform(this._nickName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      old_password: {
        value: cdktf.stringToHclTerraform(this._oldPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
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
      password_inline_hook: {
        value: cdktf.stringToHclTerraform(this._passwordInlineHook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postal_address: {
        value: cdktf.stringToHclTerraform(this._postalAddress),
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
      profile_url: {
        value: cdktf.stringToHclTerraform(this._profileUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_answer: {
        value: cdktf.stringToHclTerraform(this._recoveryAnswer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_question: {
        value: cdktf.stringToHclTerraform(this._recoveryQuestion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      second_email: {
        value: cdktf.stringToHclTerraform(this._secondEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_roles: {
        value: cdktf.booleanToHclTerraform(this._skipRoles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      street_address: {
        value: cdktf.stringToHclTerraform(this._streetAddress),
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
      user_type: {
        value: cdktf.stringToHclTerraform(this._userType),
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
      password_hash: {
        value: userPasswordHashToHclTerraform(this._passwordHash.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserPasswordHashList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
