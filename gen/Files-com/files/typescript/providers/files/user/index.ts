// https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of allowed IPs if applicable.  Newline delimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#allowed_ips User#allowed_ips}
  */
  readonly allowedIps?: string;
  /**
  * Signifies that the user has read all the announcements in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#announcements_read User#announcements_read}
  */
  readonly announcementsRead?: boolean | cdktf.IResolvable;
  /**
  * If `true`, the user can user create Bundles (aka Share Links). Use the bundle permission instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#attachments_permission User#attachments_permission}
  */
  readonly attachmentsPermission?: boolean | cdktf.IResolvable;
  /**
  * Scheduled Date/Time at which user will be deactivated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#authenticate_until User#authenticate_until}
  */
  readonly authenticateUntil?: string;
  /**
  * How is this user authenticated?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#authentication_method User#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * If true, the avatar will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#avatar_delete User#avatar_delete}
  */
  readonly avatarDelete?: boolean | cdktf.IResolvable;
  /**
  * Allow this user to perform operations on the account, payments, and invoices?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#billing_permission User#billing_permission}
  */
  readonly billingPermission?: boolean | cdktf.IResolvable;
  /**
  * Allow this user to skip site-wide IP blacklists?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#bypass_site_allowed_ips User#bypass_site_allowed_ips}
  */
  readonly bypassSiteAllowedIps?: boolean | cdktf.IResolvable;
  /**
  * Exempt this user from user lifecycle rules?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#bypass_user_lifecycle_rules User#bypass_user_lifecycle_rules}
  */
  readonly bypassUserLifecycleRules?: boolean | cdktf.IResolvable;
  /**
  * Used for changing a password on an existing user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#change_password User#change_password}
  */
  readonly changePassword?: string;
  /**
  * Optional, but if provided, we will ensure that it matches the value sent in `change_password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#change_password_confirmation User#change_password_confirmation}
  */
  readonly changePasswordConfirmation?: string;
  /**
  * User's company
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#company User#company}
  */
  readonly company?: string;
  /**
  * Can the user connect with WebDAV?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#dav_permission User#dav_permission}
  */
  readonly davPermission?: boolean | cdktf.IResolvable;
  /**
  * Is user disabled? Disabled users cannot log in, and do not count for billing purposes. Users can be automatically disabled after an inactivity period via a Site setting or schedule to be deactivated after specific date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#disabled User#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * User email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * File system layout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#filesystem_layout User#filesystem_layout}
  */
  readonly filesystemLayout?: string;
  /**
  * Can the user access with FTP/FTPS?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#ftp_permission User#ftp_permission}
  */
  readonly ftpPermission?: boolean | cdktf.IResolvable;
  /**
  * Permission to grant on the User Root upon user creation. Can be blank or `full`, `read`, `write`, `list`, `read+write`, or `list+write`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#grant_permission User#grant_permission}
  */
  readonly grantPermission?: string;
  /**
  * Group ID to associate this user with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#group_id User#group_id}
  */
  readonly groupId?: number;
  /**
  * Comma-separated list of group IDs of which this user is a member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#group_ids User#group_ids}
  */
  readonly groupIds?: string;
  /**
  * Text to display to the user in the header of the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#header_text User#header_text}
  */
  readonly headerText?: string;
  /**
  * Pre-calculated hash of the user's password. If supplied, this will be used to authenticate the user on first login. Supported hash methods are MD5, SHA1, and SHA256.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#imported_password_hash User#imported_password_hash}
  */
  readonly importedPasswordHash?: string;
  /**
  * Preferred language
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#language User#language}
  */
  readonly language?: string;
  /**
  * User's full name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#name User#name}
  */
  readonly name?: string;
  /**
  * Any internal notes on the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#notes User#notes}
  */
  readonly notes?: string;
  /**
  * Hour of the day at which daily notifications should be sent. Can be in range 0 to 23
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#notification_daily_send_time User#notification_daily_send_time}
  */
  readonly notificationDailySendTime?: number;
  /**
  * Enable integration with Office for the web?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#office_integration_enabled User#office_integration_enabled}
  */
  readonly officeIntegrationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Is this user a Partner administrator?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#partner_admin User#partner_admin}
  */
  readonly partnerAdmin?: boolean | cdktf.IResolvable;
  /**
  * Partner ID if this user belongs to a Partner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#partner_id User#partner_id}
  */
  readonly partnerId?: number;
  /**
  * User password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Optional, but if provided, we will ensure that it matches the value sent in `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#password_confirmation User#password_confirmation}
  */
  readonly passwordConfirmation?: string;
  /**
  * Number of days to allow user to use the same password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#password_validity_days User#password_validity_days}
  */
  readonly passwordValidityDays?: number;
  /**
  * Is the user an allowed to view all (non-billing) site configuration for this site?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#readonly_site_admin User#readonly_site_admin}
  */
  readonly readonlySiteAdmin?: boolean | cdktf.IResolvable;
  /**
  * Should the user receive admin alerts such a certificate expiration notifications and overages?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#receive_admin_alerts User#receive_admin_alerts}
  */
  readonly receiveAdminAlerts?: boolean | cdktf.IResolvable;
  /**
  * 2FA required setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#require_2fa User#require_2fa}
  */
  readonly require2Fa?: string;
  /**
  * Require user to login by specified date otherwise it will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#require_login_by User#require_login_by}
  */
  readonly requireLoginBy?: string;
  /**
  * Is a password change required upon next user login?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#require_password_change User#require_password_change}
  */
  readonly requirePasswordChange?: boolean | cdktf.IResolvable;
  /**
  * Can this user access the Web app, Desktop app, SDKs, or REST API?  (All of these tools use the API internally, so this is one unified permission set.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#restapi_permission User#restapi_permission}
  */
  readonly restapiPermission?: boolean | cdktf.IResolvable;
  /**
  * Does this user manage it's own credentials or is it a shared/bot user?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#self_managed User#self_managed}
  */
  readonly selfManaged?: boolean | cdktf.IResolvable;
  /**
  * Can the user access with SFTP?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#sftp_permission User#sftp_permission}
  */
  readonly sftpPermission?: boolean | cdktf.IResolvable;
  /**
  * Is the user an administrator for this site?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#site_admin User#site_admin}
  */
  readonly siteAdmin?: boolean | cdktf.IResolvable;
  /**
  * Skip Welcome page in the UI?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#skip_welcome_screen User#skip_welcome_screen}
  */
  readonly skipWelcomeScreen?: boolean | cdktf.IResolvable;
  /**
  * SSL required setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#ssl_required User#ssl_required}
  */
  readonly sslRequired?: string;
  /**
  * SSO (Single Sign On) strategy ID for the user, if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#sso_strategy_id User#sso_strategy_id}
  */
  readonly ssoStrategyId?: number;
  /**
  * Is the user subscribed to the newsletter?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#subscribe_to_newsletter User#subscribe_to_newsletter}
  */
  readonly subscribeToNewsletter?: boolean | cdktf.IResolvable;
  /**
  * Comma-separated list of Tags for this user. Tags are used for other features, such as UserLifecycleRules, which can target specific tags.  Tags must only contain lowercase letters, numbers, and hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#tags User#tags}
  */
  readonly tags?: string;
  /**
  * User time zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#time_zone User#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Home folder for FTP/SFTP.  Note that this is not used for API, Desktop, or Web interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#user_home User#user_home}
  */
  readonly userHome?: string;
  /**
  * Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set).  Note that this is not used for API, Desktop, or Web interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#user_root User#user_root}
  */
  readonly userRoot?: string;
  /**
  * User's username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#username User#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user files_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/user files_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'files_user',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.419',
        providerVersionConstraint: '0.1.419'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedIps = config.allowedIps;
    this._announcementsRead = config.announcementsRead;
    this._attachmentsPermission = config.attachmentsPermission;
    this._authenticateUntil = config.authenticateUntil;
    this._authenticationMethod = config.authenticationMethod;
    this._avatarDelete = config.avatarDelete;
    this._billingPermission = config.billingPermission;
    this._bypassSiteAllowedIps = config.bypassSiteAllowedIps;
    this._bypassUserLifecycleRules = config.bypassUserLifecycleRules;
    this._changePassword = config.changePassword;
    this._changePasswordConfirmation = config.changePasswordConfirmation;
    this._company = config.company;
    this._davPermission = config.davPermission;
    this._disabled = config.disabled;
    this._email = config.email;
    this._filesystemLayout = config.filesystemLayout;
    this._ftpPermission = config.ftpPermission;
    this._grantPermission = config.grantPermission;
    this._groupId = config.groupId;
    this._groupIds = config.groupIds;
    this._headerText = config.headerText;
    this._importedPasswordHash = config.importedPasswordHash;
    this._language = config.language;
    this._name = config.name;
    this._notes = config.notes;
    this._notificationDailySendTime = config.notificationDailySendTime;
    this._officeIntegrationEnabled = config.officeIntegrationEnabled;
    this._partnerAdmin = config.partnerAdmin;
    this._partnerId = config.partnerId;
    this._password = config.password;
    this._passwordConfirmation = config.passwordConfirmation;
    this._passwordValidityDays = config.passwordValidityDays;
    this._readonlySiteAdmin = config.readonlySiteAdmin;
    this._receiveAdminAlerts = config.receiveAdminAlerts;
    this._require2Fa = config.require2Fa;
    this._requireLoginBy = config.requireLoginBy;
    this._requirePasswordChange = config.requirePasswordChange;
    this._restapiPermission = config.restapiPermission;
    this._selfManaged = config.selfManaged;
    this._sftpPermission = config.sftpPermission;
    this._siteAdmin = config.siteAdmin;
    this._skipWelcomeScreen = config.skipWelcomeScreen;
    this._sslRequired = config.sslRequired;
    this._ssoStrategyId = config.ssoStrategyId;
    this._subscribeToNewsletter = config.subscribeToNewsletter;
    this._tags = config.tags;
    this._timeZone = config.timeZone;
    this._userHome = config.userHome;
    this._userRoot = config.userRoot;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_2fa - computed: true, optional: false, required: false
  public get active2Fa() {
    return this.getBooleanAttribute('active_2fa');
  }

  // admin_group_ids - computed: true, optional: false, required: false
  public get adminGroupIds() {
    return this.getNumberListAttribute('admin_group_ids');
  }

  // allowed_ips - computed: true, optional: true, required: false
  private _allowedIps?: string; 
  public get allowedIps() {
    return this.getStringAttribute('allowed_ips');
  }
  public set allowedIps(value: string) {
    this._allowedIps = value;
  }
  public resetAllowedIps() {
    this._allowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpsInput() {
    return this._allowedIps;
  }

  // announcements_read - computed: false, optional: true, required: false
  private _announcementsRead?: boolean | cdktf.IResolvable; 
  public get announcementsRead() {
    return this.getBooleanAttribute('announcements_read');
  }
  public set announcementsRead(value: boolean | cdktf.IResolvable) {
    this._announcementsRead = value;
  }
  public resetAnnouncementsRead() {
    this._announcementsRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementsReadInput() {
    return this._announcementsRead;
  }

  // api_keys_count - computed: true, optional: false, required: false
  public get apiKeysCount() {
    return this.getNumberAttribute('api_keys_count');
  }

  // attachments_permission - computed: true, optional: true, required: false
  private _attachmentsPermission?: boolean | cdktf.IResolvable; 
  public get attachmentsPermission() {
    return this.getBooleanAttribute('attachments_permission');
  }
  public set attachmentsPermission(value: boolean | cdktf.IResolvable) {
    this._attachmentsPermission = value;
  }
  public resetAttachmentsPermission() {
    this._attachmentsPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsPermissionInput() {
    return this._attachmentsPermission;
  }

  // authenticate_until - computed: true, optional: true, required: false
  private _authenticateUntil?: string; 
  public get authenticateUntil() {
    return this.getStringAttribute('authenticate_until');
  }
  public set authenticateUntil(value: string) {
    this._authenticateUntil = value;
  }
  public resetAuthenticateUntil() {
    this._authenticateUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateUntilInput() {
    return this._authenticateUntil;
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // avatar_delete - computed: false, optional: true, required: false
  private _avatarDelete?: boolean | cdktf.IResolvable; 
  public get avatarDelete() {
    return this.getBooleanAttribute('avatar_delete');
  }
  public set avatarDelete(value: boolean | cdktf.IResolvable) {
    this._avatarDelete = value;
  }
  public resetAvatarDelete() {
    this._avatarDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarDeleteInput() {
    return this._avatarDelete;
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // billable - computed: true, optional: false, required: false
  public get billable() {
    return this.getBooleanAttribute('billable');
  }

  // billing_permission - computed: true, optional: true, required: false
  private _billingPermission?: boolean | cdktf.IResolvable; 
  public get billingPermission() {
    return this.getBooleanAttribute('billing_permission');
  }
  public set billingPermission(value: boolean | cdktf.IResolvable) {
    this._billingPermission = value;
  }
  public resetBillingPermission() {
    this._billingPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingPermissionInput() {
    return this._billingPermission;
  }

  // bypass_site_allowed_ips - computed: true, optional: true, required: false
  private _bypassSiteAllowedIps?: boolean | cdktf.IResolvable; 
  public get bypassSiteAllowedIps() {
    return this.getBooleanAttribute('bypass_site_allowed_ips');
  }
  public set bypassSiteAllowedIps(value: boolean | cdktf.IResolvable) {
    this._bypassSiteAllowedIps = value;
  }
  public resetBypassSiteAllowedIps() {
    this._bypassSiteAllowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassSiteAllowedIpsInput() {
    return this._bypassSiteAllowedIps;
  }

  // bypass_user_lifecycle_rules - computed: true, optional: true, required: false
  private _bypassUserLifecycleRules?: boolean | cdktf.IResolvable; 
  public get bypassUserLifecycleRules() {
    return this.getBooleanAttribute('bypass_user_lifecycle_rules');
  }
  public set bypassUserLifecycleRules(value: boolean | cdktf.IResolvable) {
    this._bypassUserLifecycleRules = value;
  }
  public resetBypassUserLifecycleRules() {
    this._bypassUserLifecycleRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassUserLifecycleRulesInput() {
    return this._bypassUserLifecycleRules;
  }

  // change_password - computed: false, optional: true, required: false
  private _changePassword?: string; 
  public get changePassword() {
    return this.getStringAttribute('change_password');
  }
  public set changePassword(value: string) {
    this._changePassword = value;
  }
  public resetChangePassword() {
    this._changePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordInput() {
    return this._changePassword;
  }

  // change_password_confirmation - computed: false, optional: true, required: false
  private _changePasswordConfirmation?: string; 
  public get changePasswordConfirmation() {
    return this.getStringAttribute('change_password_confirmation');
  }
  public set changePasswordConfirmation(value: string) {
    this._changePasswordConfirmation = value;
  }
  public resetChangePasswordConfirmation() {
    this._changePasswordConfirmation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordConfirmationInput() {
    return this._changePasswordConfirmation;
  }

  // company - computed: true, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dav_permission - computed: true, optional: true, required: false
  private _davPermission?: boolean | cdktf.IResolvable; 
  public get davPermission() {
    return this.getBooleanAttribute('dav_permission');
  }
  public set davPermission(value: boolean | cdktf.IResolvable) {
    this._davPermission = value;
  }
  public resetDavPermission() {
    this._davPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davPermissionInput() {
    return this._davPermission;
  }

  // days_remaining_until_password_expire - computed: true, optional: false, required: false
  public get daysRemainingUntilPasswordExpire() {
    return this.getNumberAttribute('days_remaining_until_password_expire');
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // disabled_expired_or_inactive - computed: true, optional: false, required: false
  public get disabledExpiredOrInactive() {
    return this.getBooleanAttribute('disabled_expired_or_inactive');
  }

  // email - computed: true, optional: true, required: false
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

  // externally_managed - computed: true, optional: false, required: false
  public get externallyManaged() {
    return this.getBooleanAttribute('externally_managed');
  }

  // filesystem_layout - computed: true, optional: true, required: false
  private _filesystemLayout?: string; 
  public get filesystemLayout() {
    return this.getStringAttribute('filesystem_layout');
  }
  public set filesystemLayout(value: string) {
    this._filesystemLayout = value;
  }
  public resetFilesystemLayout() {
    this._filesystemLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemLayoutInput() {
    return this._filesystemLayout;
  }

  // first_login_at - computed: true, optional: false, required: false
  public get firstLoginAt() {
    return this.getStringAttribute('first_login_at');
  }

  // ftp_permission - computed: true, optional: true, required: false
  private _ftpPermission?: boolean | cdktf.IResolvable; 
  public get ftpPermission() {
    return this.getBooleanAttribute('ftp_permission');
  }
  public set ftpPermission(value: boolean | cdktf.IResolvable) {
    this._ftpPermission = value;
  }
  public resetFtpPermission() {
    this._ftpPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpPermissionInput() {
    return this._ftpPermission;
  }

  // grant_permission - computed: false, optional: true, required: false
  private _grantPermission?: string; 
  public get grantPermission() {
    return this.getStringAttribute('grant_permission');
  }
  public set grantPermission(value: string) {
    this._grantPermission = value;
  }
  public resetGrantPermission() {
    this._grantPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantPermissionInput() {
    return this._grantPermission;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_ids - computed: true, optional: true, required: false
  private _groupIds?: string; 
  public get groupIds() {
    return this.getStringAttribute('group_ids');
  }
  public set groupIds(value: string) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // header_text - computed: true, optional: true, required: false
  private _headerText?: string; 
  public get headerText() {
    return this.getStringAttribute('header_text');
  }
  public set headerText(value: string) {
    this._headerText = value;
  }
  public resetHeaderText() {
    this._headerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTextInput() {
    return this._headerText;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // imported_password_hash - computed: false, optional: true, required: false
  private _importedPasswordHash?: string; 
  public get importedPasswordHash() {
    return this.getStringAttribute('imported_password_hash');
  }
  public set importedPasswordHash(value: string) {
    this._importedPasswordHash = value;
  }
  public resetImportedPasswordHash() {
    this._importedPasswordHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importedPasswordHashInput() {
    return this._importedPasswordHash;
  }

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // last_active_at - computed: true, optional: false, required: false
  public get lastActiveAt() {
    return this.getStringAttribute('last_active_at');
  }

  // last_api_use_at - computed: true, optional: false, required: false
  public get lastApiUseAt() {
    return this.getStringAttribute('last_api_use_at');
  }

  // last_dav_login_at - computed: true, optional: false, required: false
  public get lastDavLoginAt() {
    return this.getStringAttribute('last_dav_login_at');
  }

  // last_desktop_login_at - computed: true, optional: false, required: false
  public get lastDesktopLoginAt() {
    return this.getStringAttribute('last_desktop_login_at');
  }

  // last_ftp_login_at - computed: true, optional: false, required: false
  public get lastFtpLoginAt() {
    return this.getStringAttribute('last_ftp_login_at');
  }

  // last_login_at - computed: true, optional: false, required: false
  public get lastLoginAt() {
    return this.getStringAttribute('last_login_at');
  }

  // last_protocol_cipher - computed: true, optional: false, required: false
  public get lastProtocolCipher() {
    return this.getStringAttribute('last_protocol_cipher');
  }

  // last_restapi_login_at - computed: true, optional: false, required: false
  public get lastRestapiLoginAt() {
    return this.getStringAttribute('last_restapi_login_at');
  }

  // last_sftp_login_at - computed: true, optional: false, required: false
  public get lastSftpLoginAt() {
    return this.getStringAttribute('last_sftp_login_at');
  }

  // last_web_login_at - computed: true, optional: false, required: false
  public get lastWebLoginAt() {
    return this.getStringAttribute('last_web_login_at');
  }

  // lockout_expires - computed: true, optional: false, required: false
  public get lockoutExpires() {
    return this.getStringAttribute('lockout_expires');
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

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // notification_daily_send_time - computed: true, optional: true, required: false
  private _notificationDailySendTime?: number; 
  public get notificationDailySendTime() {
    return this.getNumberAttribute('notification_daily_send_time');
  }
  public set notificationDailySendTime(value: number) {
    this._notificationDailySendTime = value;
  }
  public resetNotificationDailySendTime() {
    this._notificationDailySendTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationDailySendTimeInput() {
    return this._notificationDailySendTime;
  }

  // office_integration_enabled - computed: true, optional: true, required: false
  private _officeIntegrationEnabled?: boolean | cdktf.IResolvable; 
  public get officeIntegrationEnabled() {
    return this.getBooleanAttribute('office_integration_enabled');
  }
  public set officeIntegrationEnabled(value: boolean | cdktf.IResolvable) {
    this._officeIntegrationEnabled = value;
  }
  public resetOfficeIntegrationEnabled() {
    this._officeIntegrationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeIntegrationEnabledInput() {
    return this._officeIntegrationEnabled;
  }

  // partner_admin - computed: true, optional: true, required: false
  private _partnerAdmin?: boolean | cdktf.IResolvable; 
  public get partnerAdmin() {
    return this.getBooleanAttribute('partner_admin');
  }
  public set partnerAdmin(value: boolean | cdktf.IResolvable) {
    this._partnerAdmin = value;
  }
  public resetPartnerAdmin() {
    this._partnerAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerAdminInput() {
    return this._partnerAdmin;
  }

  // partner_id - computed: true, optional: true, required: false
  private _partnerId?: number; 
  public get partnerId() {
    return this.getNumberAttribute('partner_id');
  }
  public set partnerId(value: number) {
    this._partnerId = value;
  }
  public resetPartnerId() {
    this._partnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerIdInput() {
    return this._partnerId;
  }

  // partner_name - computed: true, optional: false, required: false
  public get partnerName() {
    return this.getStringAttribute('partner_name');
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

  // password_confirmation - computed: false, optional: true, required: false
  private _passwordConfirmation?: string; 
  public get passwordConfirmation() {
    return this.getStringAttribute('password_confirmation');
  }
  public set passwordConfirmation(value: string) {
    this._passwordConfirmation = value;
  }
  public resetPasswordConfirmation() {
    this._passwordConfirmation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordConfirmationInput() {
    return this._passwordConfirmation;
  }

  // password_expire_at - computed: true, optional: false, required: false
  public get passwordExpireAt() {
    return this.getStringAttribute('password_expire_at');
  }

  // password_expired - computed: true, optional: false, required: false
  public get passwordExpired() {
    return this.getBooleanAttribute('password_expired');
  }

  // password_set_at - computed: true, optional: false, required: false
  public get passwordSetAt() {
    return this.getStringAttribute('password_set_at');
  }

  // password_validity_days - computed: true, optional: true, required: false
  private _passwordValidityDays?: number; 
  public get passwordValidityDays() {
    return this.getNumberAttribute('password_validity_days');
  }
  public set passwordValidityDays(value: number) {
    this._passwordValidityDays = value;
  }
  public resetPasswordValidityDays() {
    this._passwordValidityDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordValidityDaysInput() {
    return this._passwordValidityDays;
  }

  // public_keys_count - computed: true, optional: false, required: false
  public get publicKeysCount() {
    return this.getNumberAttribute('public_keys_count');
  }

  // readonly_site_admin - computed: true, optional: true, required: false
  private _readonlySiteAdmin?: boolean | cdktf.IResolvable; 
  public get readonlySiteAdmin() {
    return this.getBooleanAttribute('readonly_site_admin');
  }
  public set readonlySiteAdmin(value: boolean | cdktf.IResolvable) {
    this._readonlySiteAdmin = value;
  }
  public resetReadonlySiteAdmin() {
    this._readonlySiteAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlySiteAdminInput() {
    return this._readonlySiteAdmin;
  }

  // receive_admin_alerts - computed: true, optional: true, required: false
  private _receiveAdminAlerts?: boolean | cdktf.IResolvable; 
  public get receiveAdminAlerts() {
    return this.getBooleanAttribute('receive_admin_alerts');
  }
  public set receiveAdminAlerts(value: boolean | cdktf.IResolvable) {
    this._receiveAdminAlerts = value;
  }
  public resetReceiveAdminAlerts() {
    this._receiveAdminAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveAdminAlertsInput() {
    return this._receiveAdminAlerts;
  }

  // require_2fa - computed: true, optional: true, required: false
  private _require2Fa?: string; 
  public get require2Fa() {
    return this.getStringAttribute('require_2fa');
  }
  public set require2Fa(value: string) {
    this._require2Fa = value;
  }
  public resetRequire2Fa() {
    this._require2Fa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get require2FaInput() {
    return this._require2Fa;
  }

  // require_login_by - computed: true, optional: true, required: false
  private _requireLoginBy?: string; 
  public get requireLoginBy() {
    return this.getStringAttribute('require_login_by');
  }
  public set requireLoginBy(value: string) {
    this._requireLoginBy = value;
  }
  public resetRequireLoginBy() {
    this._requireLoginBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLoginByInput() {
    return this._requireLoginBy;
  }

  // require_password_change - computed: true, optional: true, required: false
  private _requirePasswordChange?: boolean | cdktf.IResolvable; 
  public get requirePasswordChange() {
    return this.getBooleanAttribute('require_password_change');
  }
  public set requirePasswordChange(value: boolean | cdktf.IResolvable) {
    this._requirePasswordChange = value;
  }
  public resetRequirePasswordChange() {
    this._requirePasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePasswordChangeInput() {
    return this._requirePasswordChange;
  }

  // restapi_permission - computed: true, optional: true, required: false
  private _restapiPermission?: boolean | cdktf.IResolvable; 
  public get restapiPermission() {
    return this.getBooleanAttribute('restapi_permission');
  }
  public set restapiPermission(value: boolean | cdktf.IResolvable) {
    this._restapiPermission = value;
  }
  public resetRestapiPermission() {
    this._restapiPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restapiPermissionInput() {
    return this._restapiPermission;
  }

  // self_managed - computed: true, optional: true, required: false
  private _selfManaged?: boolean | cdktf.IResolvable; 
  public get selfManaged() {
    return this.getBooleanAttribute('self_managed');
  }
  public set selfManaged(value: boolean | cdktf.IResolvable) {
    this._selfManaged = value;
  }
  public resetSelfManaged() {
    this._selfManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedInput() {
    return this._selfManaged;
  }

  // sftp_permission - computed: true, optional: true, required: false
  private _sftpPermission?: boolean | cdktf.IResolvable; 
  public get sftpPermission() {
    return this.getBooleanAttribute('sftp_permission');
  }
  public set sftpPermission(value: boolean | cdktf.IResolvable) {
    this._sftpPermission = value;
  }
  public resetSftpPermission() {
    this._sftpPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpPermissionInput() {
    return this._sftpPermission;
  }

  // site_admin - computed: true, optional: true, required: false
  private _siteAdmin?: boolean | cdktf.IResolvable; 
  public get siteAdmin() {
    return this.getBooleanAttribute('site_admin');
  }
  public set siteAdmin(value: boolean | cdktf.IResolvable) {
    this._siteAdmin = value;
  }
  public resetSiteAdmin() {
    this._siteAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteAdminInput() {
    return this._siteAdmin;
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }

  // skip_welcome_screen - computed: true, optional: true, required: false
  private _skipWelcomeScreen?: boolean | cdktf.IResolvable; 
  public get skipWelcomeScreen() {
    return this.getBooleanAttribute('skip_welcome_screen');
  }
  public set skipWelcomeScreen(value: boolean | cdktf.IResolvable) {
    this._skipWelcomeScreen = value;
  }
  public resetSkipWelcomeScreen() {
    this._skipWelcomeScreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWelcomeScreenInput() {
    return this._skipWelcomeScreen;
  }

  // ssl_required - computed: true, optional: true, required: false
  private _sslRequired?: string; 
  public get sslRequired() {
    return this.getStringAttribute('ssl_required');
  }
  public set sslRequired(value: string) {
    this._sslRequired = value;
  }
  public resetSslRequired() {
    this._sslRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRequiredInput() {
    return this._sslRequired;
  }

  // sso_strategy_id - computed: true, optional: true, required: false
  private _ssoStrategyId?: number; 
  public get ssoStrategyId() {
    return this.getNumberAttribute('sso_strategy_id');
  }
  public set ssoStrategyId(value: number) {
    this._ssoStrategyId = value;
  }
  public resetSsoStrategyId() {
    this._ssoStrategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoStrategyIdInput() {
    return this._ssoStrategyId;
  }

  // subscribe_to_newsletter - computed: true, optional: true, required: false
  private _subscribeToNewsletter?: boolean | cdktf.IResolvable; 
  public get subscribeToNewsletter() {
    return this.getBooleanAttribute('subscribe_to_newsletter');
  }
  public set subscribeToNewsletter(value: boolean | cdktf.IResolvable) {
    this._subscribeToNewsletter = value;
  }
  public resetSubscribeToNewsletter() {
    this._subscribeToNewsletter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeToNewsletterInput() {
    return this._subscribeToNewsletter;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // type_of_2fa - computed: true, optional: false, required: false
  public get typeOf2Fa() {
    return this.getStringAttribute('type_of_2fa');
  }

  // type_of_2fa_for_display - computed: true, optional: false, required: false
  public get typeOf2FaForDisplay() {
    return this.getStringAttribute('type_of_2fa_for_display');
  }

  // user_home - computed: true, optional: true, required: false
  private _userHome?: string; 
  public get userHome() {
    return this.getStringAttribute('user_home');
  }
  public set userHome(value: string) {
    this._userHome = value;
  }
  public resetUserHome() {
    this._userHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userHomeInput() {
    return this._userHome;
  }

  // user_root - computed: true, optional: true, required: false
  private _userRoot?: string; 
  public get userRoot() {
    return this.getStringAttribute('user_root');
  }
  public set userRoot(value: string) {
    this._userRoot = value;
  }
  public resetUserRoot() {
    this._userRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRootInput() {
    return this._userRoot;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_ips: cdktf.stringToTerraform(this._allowedIps),
      announcements_read: cdktf.booleanToTerraform(this._announcementsRead),
      attachments_permission: cdktf.booleanToTerraform(this._attachmentsPermission),
      authenticate_until: cdktf.stringToTerraform(this._authenticateUntil),
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      avatar_delete: cdktf.booleanToTerraform(this._avatarDelete),
      billing_permission: cdktf.booleanToTerraform(this._billingPermission),
      bypass_site_allowed_ips: cdktf.booleanToTerraform(this._bypassSiteAllowedIps),
      bypass_user_lifecycle_rules: cdktf.booleanToTerraform(this._bypassUserLifecycleRules),
      change_password: cdktf.stringToTerraform(this._changePassword),
      change_password_confirmation: cdktf.stringToTerraform(this._changePasswordConfirmation),
      company: cdktf.stringToTerraform(this._company),
      dav_permission: cdktf.booleanToTerraform(this._davPermission),
      disabled: cdktf.booleanToTerraform(this._disabled),
      email: cdktf.stringToTerraform(this._email),
      filesystem_layout: cdktf.stringToTerraform(this._filesystemLayout),
      ftp_permission: cdktf.booleanToTerraform(this._ftpPermission),
      grant_permission: cdktf.stringToTerraform(this._grantPermission),
      group_id: cdktf.numberToTerraform(this._groupId),
      group_ids: cdktf.stringToTerraform(this._groupIds),
      header_text: cdktf.stringToTerraform(this._headerText),
      imported_password_hash: cdktf.stringToTerraform(this._importedPasswordHash),
      language: cdktf.stringToTerraform(this._language),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      notification_daily_send_time: cdktf.numberToTerraform(this._notificationDailySendTime),
      office_integration_enabled: cdktf.booleanToTerraform(this._officeIntegrationEnabled),
      partner_admin: cdktf.booleanToTerraform(this._partnerAdmin),
      partner_id: cdktf.numberToTerraform(this._partnerId),
      password: cdktf.stringToTerraform(this._password),
      password_confirmation: cdktf.stringToTerraform(this._passwordConfirmation),
      password_validity_days: cdktf.numberToTerraform(this._passwordValidityDays),
      readonly_site_admin: cdktf.booleanToTerraform(this._readonlySiteAdmin),
      receive_admin_alerts: cdktf.booleanToTerraform(this._receiveAdminAlerts),
      require_2fa: cdktf.stringToTerraform(this._require2Fa),
      require_login_by: cdktf.stringToTerraform(this._requireLoginBy),
      require_password_change: cdktf.booleanToTerraform(this._requirePasswordChange),
      restapi_permission: cdktf.booleanToTerraform(this._restapiPermission),
      self_managed: cdktf.booleanToTerraform(this._selfManaged),
      sftp_permission: cdktf.booleanToTerraform(this._sftpPermission),
      site_admin: cdktf.booleanToTerraform(this._siteAdmin),
      skip_welcome_screen: cdktf.booleanToTerraform(this._skipWelcomeScreen),
      ssl_required: cdktf.stringToTerraform(this._sslRequired),
      sso_strategy_id: cdktf.numberToTerraform(this._ssoStrategyId),
      subscribe_to_newsletter: cdktf.booleanToTerraform(this._subscribeToNewsletter),
      tags: cdktf.stringToTerraform(this._tags),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      user_home: cdktf.stringToTerraform(this._userHome),
      user_root: cdktf.stringToTerraform(this._userRoot),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_ips: {
        value: cdktf.stringToHclTerraform(this._allowedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      announcements_read: {
        value: cdktf.booleanToHclTerraform(this._announcementsRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      attachments_permission: {
        value: cdktf.booleanToHclTerraform(this._attachmentsPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authenticate_until: {
        value: cdktf.stringToHclTerraform(this._authenticateUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avatar_delete: {
        value: cdktf.booleanToHclTerraform(this._avatarDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      billing_permission: {
        value: cdktf.booleanToHclTerraform(this._billingPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_site_allowed_ips: {
        value: cdktf.booleanToHclTerraform(this._bypassSiteAllowedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_user_lifecycle_rules: {
        value: cdktf.booleanToHclTerraform(this._bypassUserLifecycleRules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      change_password: {
        value: cdktf.stringToHclTerraform(this._changePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_password_confirmation: {
        value: cdktf.stringToHclTerraform(this._changePasswordConfirmation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dav_permission: {
        value: cdktf.booleanToHclTerraform(this._davPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      filesystem_layout: {
        value: cdktf.stringToHclTerraform(this._filesystemLayout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftp_permission: {
        value: cdktf.booleanToHclTerraform(this._ftpPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grant_permission: {
        value: cdktf.stringToHclTerraform(this._grantPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_ids: {
        value: cdktf.stringToHclTerraform(this._groupIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_text: {
        value: cdktf.stringToHclTerraform(this._headerText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imported_password_hash: {
        value: cdktf.stringToHclTerraform(this._importedPasswordHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_daily_send_time: {
        value: cdktf.numberToHclTerraform(this._notificationDailySendTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      office_integration_enabled: {
        value: cdktf.booleanToHclTerraform(this._officeIntegrationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      partner_admin: {
        value: cdktf.booleanToHclTerraform(this._partnerAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      partner_id: {
        value: cdktf.numberToHclTerraform(this._partnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_confirmation: {
        value: cdktf.stringToHclTerraform(this._passwordConfirmation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_validity_days: {
        value: cdktf.numberToHclTerraform(this._passwordValidityDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      readonly_site_admin: {
        value: cdktf.booleanToHclTerraform(this._readonlySiteAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      receive_admin_alerts: {
        value: cdktf.booleanToHclTerraform(this._receiveAdminAlerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_2fa: {
        value: cdktf.stringToHclTerraform(this._require2Fa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_login_by: {
        value: cdktf.stringToHclTerraform(this._requireLoginBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_password_change: {
        value: cdktf.booleanToHclTerraform(this._requirePasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restapi_permission: {
        value: cdktf.booleanToHclTerraform(this._restapiPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      self_managed: {
        value: cdktf.booleanToHclTerraform(this._selfManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sftp_permission: {
        value: cdktf.booleanToHclTerraform(this._sftpPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_admin: {
        value: cdktf.booleanToHclTerraform(this._siteAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_welcome_screen: {
        value: cdktf.booleanToHclTerraform(this._skipWelcomeScreen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_required: {
        value: cdktf.stringToHclTerraform(this._sslRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_strategy_id: {
        value: cdktf.numberToHclTerraform(this._ssoStrategyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subscribe_to_newsletter: {
        value: cdktf.booleanToHclTerraform(this._subscribeToNewsletter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
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
      user_home: {
        value: cdktf.stringToHclTerraform(this._userHome),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_root: {
        value: cdktf.stringToHclTerraform(this._userRoot),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
