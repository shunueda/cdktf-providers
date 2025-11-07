// https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag if this user should be active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#active User#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Flag if this user should be an administrator or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#admin User#admin}
  */
  readonly admin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#allow_create_organization User#allow_create_organization}
  */
  readonly allowCreateOrganization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#allow_git_hook User#allow_git_hook}
  */
  readonly allowGitHook?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#allow_import_local User#allow_import_local}
  */
  readonly allowImportLocal?: boolean | cdktf.IResolvable;
  /**
  * A description of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#description User#description}
  */
  readonly description?: string;
  /**
  * E-Mail Address of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * Flag if the user defined password should be overwritten or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#force_password_change User#force_password_change}
  */
  readonly forcePasswordChange?: boolean | cdktf.IResolvable;
  /**
  * Full name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#full_name User#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#location User#location}
  */
  readonly location?: string;
  /**
  * The login name can differ from the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#login_name User#login_name}
  */
  readonly loginName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#max_repo_creation User#max_repo_creation}
  */
  readonly maxRepoCreation?: number;
  /**
  * Flag if the user should change the password after first login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#must_change_password User#must_change_password}
  */
  readonly mustChangePassword?: boolean | cdktf.IResolvable;
  /**
  * Password to be set for the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#password User#password}
  */
  readonly password: string;
  /**
  * Flag if the user should not be allowed to log in (bot user)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#prohibit_login User#prohibit_login}
  */
  readonly prohibitLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#restricted User#restricted}
  */
  readonly restricted?: boolean | cdktf.IResolvable;
  /**
  * Flag to send a notification about the user creation to the defined `email`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#send_notification User#send_notification}
  */
  readonly sendNotification?: boolean | cdktf.IResolvable;
  /**
  * Username of the user to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#username User#username}
  */
  readonly username: string;
  /**
  * Visibility of the user. Can be `public`, `limited` or `private`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#visibility User#visibility}
  */
  readonly visibility?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user gitea_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitea_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitea_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/user gitea_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'gitea_user',
      terraformGeneratorMetadata: {
        providerName: 'gitea',
        providerVersion: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._admin = config.admin;
    this._allowCreateOrganization = config.allowCreateOrganization;
    this._allowGitHook = config.allowGitHook;
    this._allowImportLocal = config.allowImportLocal;
    this._description = config.description;
    this._email = config.email;
    this._forcePasswordChange = config.forcePasswordChange;
    this._fullName = config.fullName;
    this._id = config.id;
    this._location = config.location;
    this._loginName = config.loginName;
    this._maxRepoCreation = config.maxRepoCreation;
    this._mustChangePassword = config.mustChangePassword;
    this._password = config.password;
    this._prohibitLogin = config.prohibitLogin;
    this._restricted = config.restricted;
    this._sendNotification = config.sendNotification;
    this._username = config.username;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // admin - computed: false, optional: true, required: false
  private _admin?: boolean | cdktf.IResolvable; 
  public get admin() {
    return this.getBooleanAttribute('admin');
  }
  public set admin(value: boolean | cdktf.IResolvable) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // allow_create_organization - computed: false, optional: true, required: false
  private _allowCreateOrganization?: boolean | cdktf.IResolvable; 
  public get allowCreateOrganization() {
    return this.getBooleanAttribute('allow_create_organization');
  }
  public set allowCreateOrganization(value: boolean | cdktf.IResolvable) {
    this._allowCreateOrganization = value;
  }
  public resetAllowCreateOrganization() {
    this._allowCreateOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCreateOrganizationInput() {
    return this._allowCreateOrganization;
  }

  // allow_git_hook - computed: false, optional: true, required: false
  private _allowGitHook?: boolean | cdktf.IResolvable; 
  public get allowGitHook() {
    return this.getBooleanAttribute('allow_git_hook');
  }
  public set allowGitHook(value: boolean | cdktf.IResolvable) {
    this._allowGitHook = value;
  }
  public resetAllowGitHook() {
    this._allowGitHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGitHookInput() {
    return this._allowGitHook;
  }

  // allow_import_local - computed: false, optional: true, required: false
  private _allowImportLocal?: boolean | cdktf.IResolvable; 
  public get allowImportLocal() {
    return this.getBooleanAttribute('allow_import_local');
  }
  public set allowImportLocal(value: boolean | cdktf.IResolvable) {
    this._allowImportLocal = value;
  }
  public resetAllowImportLocal() {
    this._allowImportLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowImportLocalInput() {
    return this._allowImportLocal;
  }

  // description - computed: false, optional: true, required: false
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

  // force_password_change - computed: false, optional: true, required: false
  private _forcePasswordChange?: boolean | cdktf.IResolvable; 
  public get forcePasswordChange() {
    return this.getBooleanAttribute('force_password_change');
  }
  public set forcePasswordChange(value: boolean | cdktf.IResolvable) {
    this._forcePasswordChange = value;
  }
  public resetForcePasswordChange() {
    this._forcePasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePasswordChangeInput() {
    return this._forcePasswordChange;
  }

  // full_name - computed: true, optional: true, required: false
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // login_name - computed: false, optional: false, required: true
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
  }

  // max_repo_creation - computed: false, optional: true, required: false
  private _maxRepoCreation?: number; 
  public get maxRepoCreation() {
    return this.getNumberAttribute('max_repo_creation');
  }
  public set maxRepoCreation(value: number) {
    this._maxRepoCreation = value;
  }
  public resetMaxRepoCreation() {
    this._maxRepoCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRepoCreationInput() {
    return this._maxRepoCreation;
  }

  // must_change_password - computed: false, optional: true, required: false
  private _mustChangePassword?: boolean | cdktf.IResolvable; 
  public get mustChangePassword() {
    return this.getBooleanAttribute('must_change_password');
  }
  public set mustChangePassword(value: boolean | cdktf.IResolvable) {
    this._mustChangePassword = value;
  }
  public resetMustChangePassword() {
    this._mustChangePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustChangePasswordInput() {
    return this._mustChangePassword;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // prohibit_login - computed: false, optional: true, required: false
  private _prohibitLogin?: boolean | cdktf.IResolvable; 
  public get prohibitLogin() {
    return this.getBooleanAttribute('prohibit_login');
  }
  public set prohibitLogin(value: boolean | cdktf.IResolvable) {
    this._prohibitLogin = value;
  }
  public resetProhibitLogin() {
    this._prohibitLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prohibitLoginInput() {
    return this._prohibitLogin;
  }

  // restricted - computed: false, optional: true, required: false
  private _restricted?: boolean | cdktf.IResolvable; 
  public get restricted() {
    return this.getBooleanAttribute('restricted');
  }
  public set restricted(value: boolean | cdktf.IResolvable) {
    this._restricted = value;
  }
  public resetRestricted() {
    this._restricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedInput() {
    return this._restricted;
  }

  // send_notification - computed: false, optional: true, required: false
  private _sendNotification?: boolean | cdktf.IResolvable; 
  public get sendNotification() {
    return this.getBooleanAttribute('send_notification');
  }
  public set sendNotification(value: boolean | cdktf.IResolvable) {
    this._sendNotification = value;
  }
  public resetSendNotification() {
    this._sendNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendNotificationInput() {
    return this._sendNotification;
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

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      admin: cdktf.booleanToTerraform(this._admin),
      allow_create_organization: cdktf.booleanToTerraform(this._allowCreateOrganization),
      allow_git_hook: cdktf.booleanToTerraform(this._allowGitHook),
      allow_import_local: cdktf.booleanToTerraform(this._allowImportLocal),
      description: cdktf.stringToTerraform(this._description),
      email: cdktf.stringToTerraform(this._email),
      force_password_change: cdktf.booleanToTerraform(this._forcePasswordChange),
      full_name: cdktf.stringToTerraform(this._fullName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      login_name: cdktf.stringToTerraform(this._loginName),
      max_repo_creation: cdktf.numberToTerraform(this._maxRepoCreation),
      must_change_password: cdktf.booleanToTerraform(this._mustChangePassword),
      password: cdktf.stringToTerraform(this._password),
      prohibit_login: cdktf.booleanToTerraform(this._prohibitLogin),
      restricted: cdktf.booleanToTerraform(this._restricted),
      send_notification: cdktf.booleanToTerraform(this._sendNotification),
      username: cdktf.stringToTerraform(this._username),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin: {
        value: cdktf.booleanToHclTerraform(this._admin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_create_organization: {
        value: cdktf.booleanToHclTerraform(this._allowCreateOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_git_hook: {
        value: cdktf.booleanToHclTerraform(this._allowGitHook),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_import_local: {
        value: cdktf.booleanToHclTerraform(this._allowImportLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      force_password_change: {
        value: cdktf.booleanToHclTerraform(this._forcePasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_name: {
        value: cdktf.stringToHclTerraform(this._loginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_repo_creation: {
        value: cdktf.numberToHclTerraform(this._maxRepoCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      must_change_password: {
        value: cdktf.booleanToHclTerraform(this._mustChangePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prohibit_login: {
        value: cdktf.booleanToHclTerraform(this._prohibitLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restricted: {
        value: cdktf.booleanToHclTerraform(this._restricted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_notification: {
        value: cdktf.booleanToHclTerraform(this._sendNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
