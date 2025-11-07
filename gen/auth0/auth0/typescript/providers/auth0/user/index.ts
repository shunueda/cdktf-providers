// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom fields that store info about the user that impact the user's core functionality, such as how an application functions or what the user can access. Examples include support plans and IDs for external accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#app_metadata User#app_metadata}
  */
  readonly appMetadata?: string;
  /**
  * Indicates whether the user is blocked or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#blocked User#blocked}
  */
  readonly blocked?: boolean | cdktf.IResolvable;
  /**
  * Name of the connection from which the user information was sourced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#connection_name User#connection_name}
  */
  readonly connectionName: string;
  /**
  * Sets the `Auth0-Custom-Domain` header on all requests for this resource. Global setting of provider takes precedence over resource specific param, if both are set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#custom_domain_header User#custom_domain_header}
  */
  readonly customDomainHeader?: string;
  /**
  * Email address of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * Indicates whether the email address has been verified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#email_verified User#email_verified}
  */
  readonly emailVerified?: boolean | cdktf.IResolvable;
  /**
  * Family name of the user. This value can only be updated if the connection is a database connection (using the Auth0 store), a passwordless connection (email or sms) or has disabled 'Sync user profile attributes at each login'. For more information, see: [Configure Identity Provider Connection for User Profile Updates](https://auth0.com/docs/manage-users/user-accounts/user-profiles/configure-connection-sync-with-auth0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#family_name User#family_name}
  */
  readonly familyName?: string;
  /**
  * Given name of the user. This value can only be updated if the connection is a database connection (using the Auth0 store), a passwordless connection (email or sms) or has disabled 'Sync user profile attributes at each login'. For more information, see: [Configure Identity Provider Connection for User Profile Updates](https://auth0.com/docs/manage-users/user-accounts/user-profiles/configure-connection-sync-with-auth0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#given_name User#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the user. This value can only be updated if the connection is a database connection (using the Auth0 store), a passwordless connection (email or sms) or has disabled 'Sync user profile attributes at each login'. For more information, see: [Configure Identity Provider Connection for User Profile Updates](https://auth0.com/docs/manage-users/user-accounts/user-profiles/configure-connection-sync-with-auth0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#name User#name}
  */
  readonly name?: string;
  /**
  * Preferred nickname or alias of the user. This value can only be updated if the connection is a database connection (using the Auth0 store), a passwordless connection (email or sms) or has disabled 'Sync user profile attributes at each login'. For more information, see: [Configure Identity Provider Connection for User Profile Updates](https://auth0.com/docs/manage-users/user-accounts/user-profiles/configure-connection-sync-with-auth0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#nickname User#nickname}
  */
  readonly nickname?: string;
  /**
  * Initial password for this user. Required for non-passwordless connections (SMS and email).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Phone number for the user; follows the E.164 recommendation. Used for SMS connections. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#phone_number User#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Indicates whether the phone number has been verified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#phone_verified User#phone_verified}
  */
  readonly phoneVerified?: boolean | cdktf.IResolvable;
  /**
  * Picture of the user. This value can only be updated if the connection is a database connection (using the Auth0 store), a passwordless connection (email or sms) or has disabled 'Sync user profile attributes at each login'. For more information, see: [Configure Identity Provider Connection for User Profile Updates](https://auth0.com/docs/manage-users/user-accounts/user-profiles/configure-connection-sync-with-auth0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#picture User#picture}
  */
  readonly picture?: string;
  /**
  * ID of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#user_id User#user_id}
  */
  readonly userId?: string;
  /**
  * Custom fields that store info about the user that does not impact a user's core functionality. Examples include work address, home address, and user preferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#user_metadata User#user_metadata}
  */
  readonly userMetadata?: string;
  /**
  * Username of the user. Only valid if the connection requires a username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#username User#username}
  */
  readonly username?: string;
  /**
  * Indicates whether the user will receive a verification email after creation. Overrides behavior of `email_verified` parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#verify_email User#verify_email}
  */
  readonly verifyEmail?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user auth0_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/user auth0_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_user',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.33.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appMetadata = config.appMetadata;
    this._blocked = config.blocked;
    this._connectionName = config.connectionName;
    this._customDomainHeader = config.customDomainHeader;
    this._email = config.email;
    this._emailVerified = config.emailVerified;
    this._familyName = config.familyName;
    this._givenName = config.givenName;
    this._id = config.id;
    this._name = config.name;
    this._nickname = config.nickname;
    this._password = config.password;
    this._phoneNumber = config.phoneNumber;
    this._phoneVerified = config.phoneVerified;
    this._picture = config.picture;
    this._userId = config.userId;
    this._userMetadata = config.userMetadata;
    this._username = config.username;
    this._verifyEmail = config.verifyEmail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_metadata - computed: false, optional: true, required: false
  private _appMetadata?: string; 
  public get appMetadata() {
    return this.getStringAttribute('app_metadata');
  }
  public set appMetadata(value: string) {
    this._appMetadata = value;
  }
  public resetAppMetadata() {
    this._appMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appMetadataInput() {
    return this._appMetadata;
  }

  // blocked - computed: false, optional: true, required: false
  private _blocked?: boolean | cdktf.IResolvable; 
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }
  public set blocked(value: boolean | cdktf.IResolvable) {
    this._blocked = value;
  }
  public resetBlocked() {
    this._blocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // custom_domain_header - computed: false, optional: true, required: false
  private _customDomainHeader?: string; 
  public get customDomainHeader() {
    return this.getStringAttribute('custom_domain_header');
  }
  public set customDomainHeader(value: string) {
    this._customDomainHeader = value;
  }
  public resetCustomDomainHeader() {
    this._customDomainHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainHeaderInput() {
    return this._customDomainHeader;
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

  // email_verified - computed: false, optional: true, required: false
  private _emailVerified?: boolean | cdktf.IResolvable; 
  public get emailVerified() {
    return this.getBooleanAttribute('email_verified');
  }
  public set emailVerified(value: boolean | cdktf.IResolvable) {
    this._emailVerified = value;
  }
  public resetEmailVerified() {
    this._emailVerified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerifiedInput() {
    return this._emailVerified;
  }

  // family_name - computed: false, optional: true, required: false
  private _familyName?: string; 
  public get familyName() {
    return this.getStringAttribute('family_name');
  }
  public set familyName(value: string) {
    this._familyName = value;
  }
  public resetFamilyName() {
    this._familyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyNameInput() {
    return this._familyName;
  }

  // given_name - computed: false, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nickname - computed: true, optional: true, required: false
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

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // phone_verified - computed: false, optional: true, required: false
  private _phoneVerified?: boolean | cdktf.IResolvable; 
  public get phoneVerified() {
    return this.getBooleanAttribute('phone_verified');
  }
  public set phoneVerified(value: boolean | cdktf.IResolvable) {
    this._phoneVerified = value;
  }
  public resetPhoneVerified() {
    this._phoneVerified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneVerifiedInput() {
    return this._phoneVerified;
  }

  // picture - computed: true, optional: true, required: false
  private _picture?: string; 
  public get picture() {
    return this.getStringAttribute('picture');
  }
  public set picture(value: string) {
    this._picture = value;
  }
  public resetPicture() {
    this._picture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pictureInput() {
    return this._picture;
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

  // user_metadata - computed: false, optional: true, required: false
  private _userMetadata?: string; 
  public get userMetadata() {
    return this.getStringAttribute('user_metadata');
  }
  public set userMetadata(value: string) {
    this._userMetadata = value;
  }
  public resetUserMetadata() {
    this._userMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMetadataInput() {
    return this._userMetadata;
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

  // verify_email - computed: false, optional: true, required: false
  private _verifyEmail?: boolean | cdktf.IResolvable; 
  public get verifyEmail() {
    return this.getBooleanAttribute('verify_email');
  }
  public set verifyEmail(value: boolean | cdktf.IResolvable) {
    this._verifyEmail = value;
  }
  public resetVerifyEmail() {
    this._verifyEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyEmailInput() {
    return this._verifyEmail;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_metadata: cdktf.stringToTerraform(this._appMetadata),
      blocked: cdktf.booleanToTerraform(this._blocked),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      custom_domain_header: cdktf.stringToTerraform(this._customDomainHeader),
      email: cdktf.stringToTerraform(this._email),
      email_verified: cdktf.booleanToTerraform(this._emailVerified),
      family_name: cdktf.stringToTerraform(this._familyName),
      given_name: cdktf.stringToTerraform(this._givenName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nickname: cdktf.stringToTerraform(this._nickname),
      password: cdktf.stringToTerraform(this._password),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      phone_verified: cdktf.booleanToTerraform(this._phoneVerified),
      picture: cdktf.stringToTerraform(this._picture),
      user_id: cdktf.stringToTerraform(this._userId),
      user_metadata: cdktf.stringToTerraform(this._userMetadata),
      username: cdktf.stringToTerraform(this._username),
      verify_email: cdktf.booleanToTerraform(this._verifyEmail),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_metadata: {
        value: cdktf.stringToHclTerraform(this._appMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked: {
        value: cdktf.booleanToHclTerraform(this._blocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_domain_header: {
        value: cdktf.stringToHclTerraform(this._customDomainHeader),
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
      email_verified: {
        value: cdktf.booleanToHclTerraform(this._emailVerified),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      family_name: {
        value: cdktf.stringToHclTerraform(this._familyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      given_name: {
        value: cdktf.stringToHclTerraform(this._givenName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nickname: {
        value: cdktf.stringToHclTerraform(this._nickname),
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
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_verified: {
        value: cdktf.booleanToHclTerraform(this._phoneVerified),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      picture: {
        value: cdktf.stringToHclTerraform(this._picture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_metadata: {
        value: cdktf.stringToHclTerraform(this._userMetadata),
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
      verify_email: {
        value: cdktf.booleanToHclTerraform(this._verifyEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
