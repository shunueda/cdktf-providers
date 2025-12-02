// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppSecurePasswordStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom error page URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#accessibility_error_redirect_url AppSecurePasswordStore#accessibility_error_redirect_url}
  */
  readonly accessibilityErrorRedirectUrl?: string;
  /**
  * Custom login page URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#accessibility_login_redirect_url AppSecurePasswordStore#accessibility_login_redirect_url}
  */
  readonly accessibilityLoginRedirectUrl?: string;
  /**
  * Enable self service. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#accessibility_self_service AppSecurePasswordStore#accessibility_self_service}
  */
  readonly accessibilitySelfService?: boolean | cdktf.IResolvable;
  /**
  * Application notes for admins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#admin_note AppSecurePasswordStore#admin_note}
  */
  readonly adminNote?: string;
  /**
  * Displays specific appLinks for the app. The value for each application link should be boolean.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#app_links_json AppSecurePasswordStore#app_links_json}
  */
  readonly appLinksJson?: string;
  /**
  * Display auto submit toolbar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#auto_submit_toolbar AppSecurePasswordStore#auto_submit_toolbar}
  */
  readonly autoSubmitToolbar?: boolean | cdktf.IResolvable;
  /**
  * Application credentials scheme. One of: `EDIT_USERNAME_AND_PASSWORD`, `ADMIN_SETS_CREDENTIALS`, `EDIT_PASSWORD_ONLY`, `EXTERNAL_PASSWORD_SYNC`, or `SHARED_USERNAME_AND_PASSWORD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#credentials_scheme AppSecurePasswordStore#credentials_scheme}
  */
  readonly credentialsScheme?: string;
  /**
  * Application notes for end users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#enduser_note AppSecurePasswordStore#enduser_note}
  */
  readonly enduserNote?: string;
  /**
  * Do not display application icon on mobile app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#hide_ios AppSecurePasswordStore#hide_ios}
  */
  readonly hideIos?: boolean | cdktf.IResolvable;
  /**
  * Do not display application icon to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#hide_web AppSecurePasswordStore#hide_web}
  */
  readonly hideWeb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#id AppSecurePasswordStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Application's display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#label AppSecurePasswordStore#label}
  */
  readonly label: string;
  /**
  * Local file path to the logo. The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#logo AppSecurePasswordStore#logo}
  */
  readonly logo?: string;
  /**
  * Name of optional param in the login form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#optional_field1 AppSecurePasswordStore#optional_field1}
  */
  readonly optionalField1?: string;
  /**
  * Name of optional value in login form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#optional_field1_value AppSecurePasswordStore#optional_field1_value}
  */
  readonly optionalField1Value?: string;
  /**
  * Name of optional param in the login form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#optional_field2 AppSecurePasswordStore#optional_field2}
  */
  readonly optionalField2?: string;
  /**
  * Name of optional value in login form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#optional_field2_value AppSecurePasswordStore#optional_field2_value}
  */
  readonly optionalField2Value?: string;
  /**
  * Name of optional param in the login form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#optional_field3 AppSecurePasswordStore#optional_field3}
  */
  readonly optionalField3?: string;
  /**
  * Name of optional value in login form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#optional_field3_value AppSecurePasswordStore#optional_field3_value}
  */
  readonly optionalField3Value?: string;
  /**
  * Login password field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#password_field AppSecurePasswordStore#password_field}
  */
  readonly passwordField: string;
  /**
  * Allow user to reveal password. It can not be set to `true` if `credentials_scheme` is `ADMIN_SETS_CREDENTIALS`, `SHARED_USERNAME_AND_PASSWORD` or `EXTERNAL_PASSWORD_SYNC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#reveal_password AppSecurePasswordStore#reveal_password}
  */
  readonly revealPassword?: boolean | cdktf.IResolvable;
  /**
  * Shared password, required for certain schemes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#shared_password AppSecurePasswordStore#shared_password}
  */
  readonly sharedPassword?: string;
  /**
  * Shared username, required for certain schemes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#shared_username AppSecurePasswordStore#shared_username}
  */
  readonly sharedUsername?: string;
  /**
  * Status of application. By default, it is `ACTIVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#status AppSecurePasswordStore#status}
  */
  readonly status?: string;
  /**
  * Login URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#url AppSecurePasswordStore#url}
  */
  readonly url: string;
  /**
  * Username template. Default: `${source.login}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#user_name_template AppSecurePasswordStore#user_name_template}
  */
  readonly userNameTemplate?: string;
  /**
  * Push username on update. Valid values: `PUSH` and `DONT_PUSH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#user_name_template_push_status AppSecurePasswordStore#user_name_template_push_status}
  */
  readonly userNameTemplatePushStatus?: string;
  /**
  * Username template suffix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#user_name_template_suffix AppSecurePasswordStore#user_name_template_suffix}
  */
  readonly userNameTemplateSuffix?: string;
  /**
  * Username template type. Default: `BUILT_IN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#user_name_template_type AppSecurePasswordStore#user_name_template_type}
  */
  readonly userNameTemplateType?: string;
  /**
  * Login username field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#username_field AppSecurePasswordStore#username_field}
  */
  readonly usernameField: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#timeouts AppSecurePasswordStore#timeouts}
  */
  readonly timeouts?: AppSecurePasswordStoreTimeouts;
}
export interface AppSecurePasswordStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#create AppSecurePasswordStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#read AppSecurePasswordStore#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#update AppSecurePasswordStore#update}
  */
  readonly update?: string;
}

export function appSecurePasswordStoreTimeoutsToTerraform(struct?: AppSecurePasswordStoreTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function appSecurePasswordStoreTimeoutsToHclTerraform(struct?: AppSecurePasswordStoreTimeouts | cdktf.IResolvable): any {
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

export class AppSecurePasswordStoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppSecurePasswordStoreTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
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

  public set internalValue(value: AppSecurePasswordStoreTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store okta_app_secure_password_store}
*/
export class AppSecurePasswordStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_secure_password_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppSecurePasswordStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppSecurePasswordStore to import
  * @param importFromId The id of the existing AppSecurePasswordStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppSecurePasswordStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_app_secure_password_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/app_secure_password_store okta_app_secure_password_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppSecurePasswordStoreConfig
  */
  public constructor(scope: Construct, id: string, config: AppSecurePasswordStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_secure_password_store',
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
    this._accessibilityErrorRedirectUrl = config.accessibilityErrorRedirectUrl;
    this._accessibilityLoginRedirectUrl = config.accessibilityLoginRedirectUrl;
    this._accessibilitySelfService = config.accessibilitySelfService;
    this._adminNote = config.adminNote;
    this._appLinksJson = config.appLinksJson;
    this._autoSubmitToolbar = config.autoSubmitToolbar;
    this._credentialsScheme = config.credentialsScheme;
    this._enduserNote = config.enduserNote;
    this._hideIos = config.hideIos;
    this._hideWeb = config.hideWeb;
    this._id = config.id;
    this._label = config.label;
    this._logo = config.logo;
    this._optionalField1 = config.optionalField1;
    this._optionalField1Value = config.optionalField1Value;
    this._optionalField2 = config.optionalField2;
    this._optionalField2Value = config.optionalField2Value;
    this._optionalField3 = config.optionalField3;
    this._optionalField3Value = config.optionalField3Value;
    this._passwordField = config.passwordField;
    this._revealPassword = config.revealPassword;
    this._sharedPassword = config.sharedPassword;
    this._sharedUsername = config.sharedUsername;
    this._status = config.status;
    this._url = config.url;
    this._userNameTemplate = config.userNameTemplate;
    this._userNameTemplatePushStatus = config.userNameTemplatePushStatus;
    this._userNameTemplateSuffix = config.userNameTemplateSuffix;
    this._userNameTemplateType = config.userNameTemplateType;
    this._usernameField = config.usernameField;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessibility_error_redirect_url - computed: false, optional: true, required: false
  private _accessibilityErrorRedirectUrl?: string; 
  public get accessibilityErrorRedirectUrl() {
    return this.getStringAttribute('accessibility_error_redirect_url');
  }
  public set accessibilityErrorRedirectUrl(value: string) {
    this._accessibilityErrorRedirectUrl = value;
  }
  public resetAccessibilityErrorRedirectUrl() {
    this._accessibilityErrorRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityErrorRedirectUrlInput() {
    return this._accessibilityErrorRedirectUrl;
  }

  // accessibility_login_redirect_url - computed: false, optional: true, required: false
  private _accessibilityLoginRedirectUrl?: string; 
  public get accessibilityLoginRedirectUrl() {
    return this.getStringAttribute('accessibility_login_redirect_url');
  }
  public set accessibilityLoginRedirectUrl(value: string) {
    this._accessibilityLoginRedirectUrl = value;
  }
  public resetAccessibilityLoginRedirectUrl() {
    this._accessibilityLoginRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityLoginRedirectUrlInput() {
    return this._accessibilityLoginRedirectUrl;
  }

  // accessibility_self_service - computed: false, optional: true, required: false
  private _accessibilitySelfService?: boolean | cdktf.IResolvable; 
  public get accessibilitySelfService() {
    return this.getBooleanAttribute('accessibility_self_service');
  }
  public set accessibilitySelfService(value: boolean | cdktf.IResolvable) {
    this._accessibilitySelfService = value;
  }
  public resetAccessibilitySelfService() {
    this._accessibilitySelfService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilitySelfServiceInput() {
    return this._accessibilitySelfService;
  }

  // admin_note - computed: false, optional: true, required: false
  private _adminNote?: string; 
  public get adminNote() {
    return this.getStringAttribute('admin_note');
  }
  public set adminNote(value: string) {
    this._adminNote = value;
  }
  public resetAdminNote() {
    this._adminNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNoteInput() {
    return this._adminNote;
  }

  // app_links_json - computed: false, optional: true, required: false
  private _appLinksJson?: string; 
  public get appLinksJson() {
    return this.getStringAttribute('app_links_json');
  }
  public set appLinksJson(value: string) {
    this._appLinksJson = value;
  }
  public resetAppLinksJson() {
    this._appLinksJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLinksJsonInput() {
    return this._appLinksJson;
  }

  // auto_submit_toolbar - computed: false, optional: true, required: false
  private _autoSubmitToolbar?: boolean | cdktf.IResolvable; 
  public get autoSubmitToolbar() {
    return this.getBooleanAttribute('auto_submit_toolbar');
  }
  public set autoSubmitToolbar(value: boolean | cdktf.IResolvable) {
    this._autoSubmitToolbar = value;
  }
  public resetAutoSubmitToolbar() {
    this._autoSubmitToolbar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSubmitToolbarInput() {
    return this._autoSubmitToolbar;
  }

  // credentials_scheme - computed: false, optional: true, required: false
  private _credentialsScheme?: string; 
  public get credentialsScheme() {
    return this.getStringAttribute('credentials_scheme');
  }
  public set credentialsScheme(value: string) {
    this._credentialsScheme = value;
  }
  public resetCredentialsScheme() {
    this._credentialsScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSchemeInput() {
    return this._credentialsScheme;
  }

  // enduser_note - computed: false, optional: true, required: false
  private _enduserNote?: string; 
  public get enduserNote() {
    return this.getStringAttribute('enduser_note');
  }
  public set enduserNote(value: string) {
    this._enduserNote = value;
  }
  public resetEnduserNote() {
    this._enduserNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enduserNoteInput() {
    return this._enduserNote;
  }

  // hide_ios - computed: false, optional: true, required: false
  private _hideIos?: boolean | cdktf.IResolvable; 
  public get hideIos() {
    return this.getBooleanAttribute('hide_ios');
  }
  public set hideIos(value: boolean | cdktf.IResolvable) {
    this._hideIos = value;
  }
  public resetHideIos() {
    this._hideIos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideIosInput() {
    return this._hideIos;
  }

  // hide_web - computed: false, optional: true, required: false
  private _hideWeb?: boolean | cdktf.IResolvable; 
  public get hideWeb() {
    return this.getBooleanAttribute('hide_web');
  }
  public set hideWeb(value: boolean | cdktf.IResolvable) {
    this._hideWeb = value;
  }
  public resetHideWeb() {
    this._hideWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideWebInput() {
    return this._hideWeb;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional_field1 - computed: false, optional: true, required: false
  private _optionalField1?: string; 
  public get optionalField1() {
    return this.getStringAttribute('optional_field1');
  }
  public set optionalField1(value: string) {
    this._optionalField1 = value;
  }
  public resetOptionalField1() {
    this._optionalField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalField1Input() {
    return this._optionalField1;
  }

  // optional_field1_value - computed: false, optional: true, required: false
  private _optionalField1Value?: string; 
  public get optionalField1Value() {
    return this.getStringAttribute('optional_field1_value');
  }
  public set optionalField1Value(value: string) {
    this._optionalField1Value = value;
  }
  public resetOptionalField1Value() {
    this._optionalField1Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalField1ValueInput() {
    return this._optionalField1Value;
  }

  // optional_field2 - computed: false, optional: true, required: false
  private _optionalField2?: string; 
  public get optionalField2() {
    return this.getStringAttribute('optional_field2');
  }
  public set optionalField2(value: string) {
    this._optionalField2 = value;
  }
  public resetOptionalField2() {
    this._optionalField2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalField2Input() {
    return this._optionalField2;
  }

  // optional_field2_value - computed: false, optional: true, required: false
  private _optionalField2Value?: string; 
  public get optionalField2Value() {
    return this.getStringAttribute('optional_field2_value');
  }
  public set optionalField2Value(value: string) {
    this._optionalField2Value = value;
  }
  public resetOptionalField2Value() {
    this._optionalField2Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalField2ValueInput() {
    return this._optionalField2Value;
  }

  // optional_field3 - computed: false, optional: true, required: false
  private _optionalField3?: string; 
  public get optionalField3() {
    return this.getStringAttribute('optional_field3');
  }
  public set optionalField3(value: string) {
    this._optionalField3 = value;
  }
  public resetOptionalField3() {
    this._optionalField3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalField3Input() {
    return this._optionalField3;
  }

  // optional_field3_value - computed: false, optional: true, required: false
  private _optionalField3Value?: string; 
  public get optionalField3Value() {
    return this.getStringAttribute('optional_field3_value');
  }
  public set optionalField3Value(value: string) {
    this._optionalField3Value = value;
  }
  public resetOptionalField3Value() {
    this._optionalField3Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalField3ValueInput() {
    return this._optionalField3Value;
  }

  // password_field - computed: false, optional: false, required: true
  private _passwordField?: string; 
  public get passwordField() {
    return this.getStringAttribute('password_field');
  }
  public set passwordField(value: string) {
    this._passwordField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFieldInput() {
    return this._passwordField;
  }

  // reveal_password - computed: false, optional: true, required: false
  private _revealPassword?: boolean | cdktf.IResolvable; 
  public get revealPassword() {
    return this.getBooleanAttribute('reveal_password');
  }
  public set revealPassword(value: boolean | cdktf.IResolvable) {
    this._revealPassword = value;
  }
  public resetRevealPassword() {
    this._revealPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revealPasswordInput() {
    return this._revealPassword;
  }

  // shared_password - computed: false, optional: true, required: false
  private _sharedPassword?: string; 
  public get sharedPassword() {
    return this.getStringAttribute('shared_password');
  }
  public set sharedPassword(value: string) {
    this._sharedPassword = value;
  }
  public resetSharedPassword() {
    this._sharedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPasswordInput() {
    return this._sharedPassword;
  }

  // shared_username - computed: false, optional: true, required: false
  private _sharedUsername?: string; 
  public get sharedUsername() {
    return this.getStringAttribute('shared_username');
  }
  public set sharedUsername(value: string) {
    this._sharedUsername = value;
  }
  public resetSharedUsername() {
    this._sharedUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedUsernameInput() {
    return this._sharedUsername;
  }

  // sign_on_mode - computed: true, optional: false, required: false
  public get signOnMode() {
    return this.getStringAttribute('sign_on_mode');
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

  // user_name_template - computed: false, optional: true, required: false
  private _userNameTemplate?: string; 
  public get userNameTemplate() {
    return this.getStringAttribute('user_name_template');
  }
  public set userNameTemplate(value: string) {
    this._userNameTemplate = value;
  }
  public resetUserNameTemplate() {
    this._userNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateInput() {
    return this._userNameTemplate;
  }

  // user_name_template_push_status - computed: false, optional: true, required: false
  private _userNameTemplatePushStatus?: string; 
  public get userNameTemplatePushStatus() {
    return this.getStringAttribute('user_name_template_push_status');
  }
  public set userNameTemplatePushStatus(value: string) {
    this._userNameTemplatePushStatus = value;
  }
  public resetUserNameTemplatePushStatus() {
    this._userNameTemplatePushStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplatePushStatusInput() {
    return this._userNameTemplatePushStatus;
  }

  // user_name_template_suffix - computed: false, optional: true, required: false
  private _userNameTemplateSuffix?: string; 
  public get userNameTemplateSuffix() {
    return this.getStringAttribute('user_name_template_suffix');
  }
  public set userNameTemplateSuffix(value: string) {
    this._userNameTemplateSuffix = value;
  }
  public resetUserNameTemplateSuffix() {
    this._userNameTemplateSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateSuffixInput() {
    return this._userNameTemplateSuffix;
  }

  // user_name_template_type - computed: false, optional: true, required: false
  private _userNameTemplateType?: string; 
  public get userNameTemplateType() {
    return this.getStringAttribute('user_name_template_type');
  }
  public set userNameTemplateType(value: string) {
    this._userNameTemplateType = value;
  }
  public resetUserNameTemplateType() {
    this._userNameTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateTypeInput() {
    return this._userNameTemplateType;
  }

  // username_field - computed: false, optional: false, required: true
  private _usernameField?: string; 
  public get usernameField() {
    return this.getStringAttribute('username_field');
  }
  public set usernameField(value: string) {
    this._usernameField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFieldInput() {
    return this._usernameField;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppSecurePasswordStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppSecurePasswordStoreTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessibility_error_redirect_url: cdktf.stringToTerraform(this._accessibilityErrorRedirectUrl),
      accessibility_login_redirect_url: cdktf.stringToTerraform(this._accessibilityLoginRedirectUrl),
      accessibility_self_service: cdktf.booleanToTerraform(this._accessibilitySelfService),
      admin_note: cdktf.stringToTerraform(this._adminNote),
      app_links_json: cdktf.stringToTerraform(this._appLinksJson),
      auto_submit_toolbar: cdktf.booleanToTerraform(this._autoSubmitToolbar),
      credentials_scheme: cdktf.stringToTerraform(this._credentialsScheme),
      enduser_note: cdktf.stringToTerraform(this._enduserNote),
      hide_ios: cdktf.booleanToTerraform(this._hideIos),
      hide_web: cdktf.booleanToTerraform(this._hideWeb),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      logo: cdktf.stringToTerraform(this._logo),
      optional_field1: cdktf.stringToTerraform(this._optionalField1),
      optional_field1_value: cdktf.stringToTerraform(this._optionalField1Value),
      optional_field2: cdktf.stringToTerraform(this._optionalField2),
      optional_field2_value: cdktf.stringToTerraform(this._optionalField2Value),
      optional_field3: cdktf.stringToTerraform(this._optionalField3),
      optional_field3_value: cdktf.stringToTerraform(this._optionalField3Value),
      password_field: cdktf.stringToTerraform(this._passwordField),
      reveal_password: cdktf.booleanToTerraform(this._revealPassword),
      shared_password: cdktf.stringToTerraform(this._sharedPassword),
      shared_username: cdktf.stringToTerraform(this._sharedUsername),
      status: cdktf.stringToTerraform(this._status),
      url: cdktf.stringToTerraform(this._url),
      user_name_template: cdktf.stringToTerraform(this._userNameTemplate),
      user_name_template_push_status: cdktf.stringToTerraform(this._userNameTemplatePushStatus),
      user_name_template_suffix: cdktf.stringToTerraform(this._userNameTemplateSuffix),
      user_name_template_type: cdktf.stringToTerraform(this._userNameTemplateType),
      username_field: cdktf.stringToTerraform(this._usernameField),
      timeouts: appSecurePasswordStoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accessibility_error_redirect_url: {
        value: cdktf.stringToHclTerraform(this._accessibilityErrorRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accessibility_login_redirect_url: {
        value: cdktf.stringToHclTerraform(this._accessibilityLoginRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accessibility_self_service: {
        value: cdktf.booleanToHclTerraform(this._accessibilitySelfService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_note: {
        value: cdktf.stringToHclTerraform(this._adminNote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_links_json: {
        value: cdktf.stringToHclTerraform(this._appLinksJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_submit_toolbar: {
        value: cdktf.booleanToHclTerraform(this._autoSubmitToolbar),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      credentials_scheme: {
        value: cdktf.stringToHclTerraform(this._credentialsScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enduser_note: {
        value: cdktf.stringToHclTerraform(this._enduserNote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_ios: {
        value: cdktf.booleanToHclTerraform(this._hideIos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hide_web: {
        value: cdktf.booleanToHclTerraform(this._hideWeb),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo: {
        value: cdktf.stringToHclTerraform(this._logo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optional_field1: {
        value: cdktf.stringToHclTerraform(this._optionalField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optional_field1_value: {
        value: cdktf.stringToHclTerraform(this._optionalField1Value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optional_field2: {
        value: cdktf.stringToHclTerraform(this._optionalField2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optional_field2_value: {
        value: cdktf.stringToHclTerraform(this._optionalField2Value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optional_field3: {
        value: cdktf.stringToHclTerraform(this._optionalField3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optional_field3_value: {
        value: cdktf.stringToHclTerraform(this._optionalField3Value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_field: {
        value: cdktf.stringToHclTerraform(this._passwordField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reveal_password: {
        value: cdktf.booleanToHclTerraform(this._revealPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_password: {
        value: cdktf.stringToHclTerraform(this._sharedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_username: {
        value: cdktf.stringToHclTerraform(this._sharedUsername),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_template: {
        value: cdktf.stringToHclTerraform(this._userNameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_template_push_status: {
        value: cdktf.stringToHclTerraform(this._userNameTemplatePushStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_template_suffix: {
        value: cdktf.stringToHclTerraform(this._userNameTemplateSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_template_type: {
        value: cdktf.stringToHclTerraform(this._userNameTemplateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_field: {
        value: cdktf.stringToHclTerraform(this._usernameField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: appSecurePasswordStoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppSecurePasswordStoreTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
