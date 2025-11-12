// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HumanUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#display_name HumanUser#display_name}
  */
  readonly displayName?: string;
  /**
  * Email of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#email HumanUser#email}
  */
  readonly email: string;
  /**
  * First name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#first_name HumanUser#first_name}
  */
  readonly firstName: string;
  /**
  * Gender of the user, supported values: GENDER_UNSPECIFIED, GENDER_FEMALE, GENDER_MALE, GENDER_DIVERSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#gender HumanUser#gender}
  */
  readonly gender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#id HumanUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initial hashed password for the user, not changeable after creation. Being able to pass an initial hashed password is useful in migration scenarios.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#initial_hashed_password HumanUser#initial_hashed_password}
  */
  readonly initialHashedPassword?: string;
  /**
  * Initially set password for the user, not changeable after creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#initial_password HumanUser#initial_password}
  */
  readonly initialPassword?: string;
  /**
  * Whether the user has to change the password on first login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#initial_skip_password_change HumanUser#initial_skip_password_change}
  */
  readonly initialSkipPasswordChange?: boolean | cdktf.IResolvable;
  /**
  * Is the email verified of the user, can only be true if password of the user is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#is_email_verified HumanUser#is_email_verified}
  */
  readonly isEmailVerified?: boolean | cdktf.IResolvable;
  /**
  * Is the phone verified of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#is_phone_verified HumanUser#is_phone_verified}
  */
  readonly isPhoneVerified?: boolean | cdktf.IResolvable;
  /**
  * Last name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#last_name HumanUser#last_name}
  */
  readonly lastName: string;
  /**
  * Nick name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#nick_name HumanUser#nick_name}
  */
  readonly nickName?: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#org_id HumanUser#org_id}
  */
  readonly orgId?: string;
  /**
  * Phone of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#phone HumanUser#phone}
  */
  readonly phone?: string;
  /**
  * Preferred language of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#preferred_language HumanUser#preferred_language}
  */
  readonly preferredLanguage?: string;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#user_name HumanUser#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user zitadel_human_user}
*/
export class HumanUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_human_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HumanUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HumanUser to import
  * @param importFromId The id of the existing HumanUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HumanUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_human_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/human_user zitadel_human_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HumanUserConfig
  */
  public constructor(scope: Construct, id: string, config: HumanUserConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_human_user',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._email = config.email;
    this._firstName = config.firstName;
    this._gender = config.gender;
    this._id = config.id;
    this._initialHashedPassword = config.initialHashedPassword;
    this._initialPassword = config.initialPassword;
    this._initialSkipPasswordChange = config.initialSkipPasswordChange;
    this._isEmailVerified = config.isEmailVerified;
    this._isPhoneVerified = config.isPhoneVerified;
    this._lastName = config.lastName;
    this._nickName = config.nickName;
    this._orgId = config.orgId;
    this._phone = config.phone;
    this._preferredLanguage = config.preferredLanguage;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: true, required: false
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

  // gender - computed: false, optional: true, required: false
  private _gender?: string; 
  public get gender() {
    return this.getStringAttribute('gender');
  }
  public set gender(value: string) {
    this._gender = value;
  }
  public resetGender() {
    this._gender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genderInput() {
    return this._gender;
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

  // initial_hashed_password - computed: false, optional: true, required: false
  private _initialHashedPassword?: string; 
  public get initialHashedPassword() {
    return this.getStringAttribute('initial_hashed_password');
  }
  public set initialHashedPassword(value: string) {
    this._initialHashedPassword = value;
  }
  public resetInitialHashedPassword() {
    this._initialHashedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialHashedPasswordInput() {
    return this._initialHashedPassword;
  }

  // initial_password - computed: false, optional: true, required: false
  private _initialPassword?: string; 
  public get initialPassword() {
    return this.getStringAttribute('initial_password');
  }
  public set initialPassword(value: string) {
    this._initialPassword = value;
  }
  public resetInitialPassword() {
    this._initialPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPasswordInput() {
    return this._initialPassword;
  }

  // initial_skip_password_change - computed: false, optional: true, required: false
  private _initialSkipPasswordChange?: boolean | cdktf.IResolvable; 
  public get initialSkipPasswordChange() {
    return this.getBooleanAttribute('initial_skip_password_change');
  }
  public set initialSkipPasswordChange(value: boolean | cdktf.IResolvable) {
    this._initialSkipPasswordChange = value;
  }
  public resetInitialSkipPasswordChange() {
    this._initialSkipPasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSkipPasswordChangeInput() {
    return this._initialSkipPasswordChange;
  }

  // is_email_verified - computed: false, optional: true, required: false
  private _isEmailVerified?: boolean | cdktf.IResolvable; 
  public get isEmailVerified() {
    return this.getBooleanAttribute('is_email_verified');
  }
  public set isEmailVerified(value: boolean | cdktf.IResolvable) {
    this._isEmailVerified = value;
  }
  public resetIsEmailVerified() {
    this._isEmailVerified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEmailVerifiedInput() {
    return this._isEmailVerified;
  }

  // is_phone_verified - computed: false, optional: true, required: false
  private _isPhoneVerified?: boolean | cdktf.IResolvable; 
  public get isPhoneVerified() {
    return this.getBooleanAttribute('is_phone_verified');
  }
  public set isPhoneVerified(value: boolean | cdktf.IResolvable) {
    this._isPhoneVerified = value;
  }
  public resetIsPhoneVerified() {
    this._isPhoneVerified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPhoneVerifiedInput() {
    return this._isPhoneVerified;
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

  // login_names - computed: true, optional: false, required: false
  public get loginNames() {
    return this.getListAttribute('login_names');
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
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

  // preferred_login_name - computed: true, optional: false, required: false
  public get preferredLoginName() {
    return this.getStringAttribute('preferred_login_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      gender: cdktf.stringToTerraform(this._gender),
      id: cdktf.stringToTerraform(this._id),
      initial_hashed_password: cdktf.stringToTerraform(this._initialHashedPassword),
      initial_password: cdktf.stringToTerraform(this._initialPassword),
      initial_skip_password_change: cdktf.booleanToTerraform(this._initialSkipPasswordChange),
      is_email_verified: cdktf.booleanToTerraform(this._isEmailVerified),
      is_phone_verified: cdktf.booleanToTerraform(this._isPhoneVerified),
      last_name: cdktf.stringToTerraform(this._lastName),
      nick_name: cdktf.stringToTerraform(this._nickName),
      org_id: cdktf.stringToTerraform(this._orgId),
      phone: cdktf.stringToTerraform(this._phone),
      preferred_language: cdktf.stringToTerraform(this._preferredLanguage),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gender: {
        value: cdktf.stringToHclTerraform(this._gender),
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
      initial_hashed_password: {
        value: cdktf.stringToHclTerraform(this._initialHashedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_password: {
        value: cdktf.stringToHclTerraform(this._initialPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_skip_password_change: {
        value: cdktf.booleanToHclTerraform(this._initialSkipPasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_email_verified: {
        value: cdktf.booleanToHclTerraform(this._isEmailVerified),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_phone_verified: {
        value: cdktf.booleanToHclTerraform(this._isPhoneVerified),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
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
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
