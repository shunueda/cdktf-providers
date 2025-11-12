// https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/user#id DataFilesUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/user files_user}
*/
export class DataFilesUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesUser to import
  * @param importFromId The id of the existing DataFilesUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/user files_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesUserConfig) {
    super(scope, id, {
      terraformResourceType: 'files_user',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.377',
        providerVersionConstraint: '0.1.377'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
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

  // allowed_ips - computed: true, optional: false, required: false
  public get allowedIps() {
    return this.getStringAttribute('allowed_ips');
  }

  // api_keys_count - computed: true, optional: false, required: false
  public get apiKeysCount() {
    return this.getNumberAttribute('api_keys_count');
  }

  // attachments_permission - computed: true, optional: false, required: false
  public get attachmentsPermission() {
    return this.getBooleanAttribute('attachments_permission');
  }

  // authenticate_until - computed: true, optional: false, required: false
  public get authenticateUntil() {
    return this.getStringAttribute('authenticate_until');
  }

  // authentication_method - computed: true, optional: false, required: false
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // billable - computed: true, optional: false, required: false
  public get billable() {
    return this.getBooleanAttribute('billable');
  }

  // billing_permission - computed: true, optional: false, required: false
  public get billingPermission() {
    return this.getBooleanAttribute('billing_permission');
  }

  // bypass_site_allowed_ips - computed: true, optional: false, required: false
  public get bypassSiteAllowedIps() {
    return this.getBooleanAttribute('bypass_site_allowed_ips');
  }

  // bypass_user_lifecycle_rules - computed: true, optional: false, required: false
  public get bypassUserLifecycleRules() {
    return this.getBooleanAttribute('bypass_user_lifecycle_rules');
  }

  // company - computed: true, optional: false, required: false
  public get company() {
    return this.getStringAttribute('company');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dav_permission - computed: true, optional: false, required: false
  public get davPermission() {
    return this.getBooleanAttribute('dav_permission');
  }

  // days_remaining_until_password_expire - computed: true, optional: false, required: false
  public get daysRemainingUntilPasswordExpire() {
    return this.getNumberAttribute('days_remaining_until_password_expire');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // disabled_expired_or_inactive - computed: true, optional: false, required: false
  public get disabledExpiredOrInactive() {
    return this.getBooleanAttribute('disabled_expired_or_inactive');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // externally_managed - computed: true, optional: false, required: false
  public get externallyManaged() {
    return this.getBooleanAttribute('externally_managed');
  }

  // filesystem_layout - computed: true, optional: false, required: false
  public get filesystemLayout() {
    return this.getStringAttribute('filesystem_layout');
  }

  // first_login_at - computed: true, optional: false, required: false
  public get firstLoginAt() {
    return this.getStringAttribute('first_login_at');
  }

  // ftp_permission - computed: true, optional: false, required: false
  public get ftpPermission() {
    return this.getBooleanAttribute('ftp_permission');
  }

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return this.getStringAttribute('group_ids');
  }

  // header_text - computed: true, optional: false, required: false
  public get headerText() {
    return this.getStringAttribute('header_text');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // notification_daily_send_time - computed: true, optional: false, required: false
  public get notificationDailySendTime() {
    return this.getNumberAttribute('notification_daily_send_time');
  }

  // office_integration_enabled - computed: true, optional: false, required: false
  public get officeIntegrationEnabled() {
    return this.getBooleanAttribute('office_integration_enabled');
  }

  // partner_admin - computed: true, optional: false, required: false
  public get partnerAdmin() {
    return this.getBooleanAttribute('partner_admin');
  }

  // partner_id - computed: true, optional: false, required: false
  public get partnerId() {
    return this.getNumberAttribute('partner_id');
  }

  // partner_name - computed: true, optional: false, required: false
  public get partnerName() {
    return this.getStringAttribute('partner_name');
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

  // password_validity_days - computed: true, optional: false, required: false
  public get passwordValidityDays() {
    return this.getNumberAttribute('password_validity_days');
  }

  // public_keys_count - computed: true, optional: false, required: false
  public get publicKeysCount() {
    return this.getNumberAttribute('public_keys_count');
  }

  // readonly_site_admin - computed: true, optional: false, required: false
  public get readonlySiteAdmin() {
    return this.getBooleanAttribute('readonly_site_admin');
  }

  // receive_admin_alerts - computed: true, optional: false, required: false
  public get receiveAdminAlerts() {
    return this.getBooleanAttribute('receive_admin_alerts');
  }

  // require_2fa - computed: true, optional: false, required: false
  public get require2Fa() {
    return this.getStringAttribute('require_2fa');
  }

  // require_login_by - computed: true, optional: false, required: false
  public get requireLoginBy() {
    return this.getStringAttribute('require_login_by');
  }

  // require_password_change - computed: true, optional: false, required: false
  public get requirePasswordChange() {
    return this.getBooleanAttribute('require_password_change');
  }

  // restapi_permission - computed: true, optional: false, required: false
  public get restapiPermission() {
    return this.getBooleanAttribute('restapi_permission');
  }

  // self_managed - computed: true, optional: false, required: false
  public get selfManaged() {
    return this.getBooleanAttribute('self_managed');
  }

  // sftp_permission - computed: true, optional: false, required: false
  public get sftpPermission() {
    return this.getBooleanAttribute('sftp_permission');
  }

  // site_admin - computed: true, optional: false, required: false
  public get siteAdmin() {
    return this.getBooleanAttribute('site_admin');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }

  // skip_welcome_screen - computed: true, optional: false, required: false
  public get skipWelcomeScreen() {
    return this.getBooleanAttribute('skip_welcome_screen');
  }

  // ssl_required - computed: true, optional: false, required: false
  public get sslRequired() {
    return this.getStringAttribute('ssl_required');
  }

  // sso_strategy_id - computed: true, optional: false, required: false
  public get ssoStrategyId() {
    return this.getNumberAttribute('sso_strategy_id');
  }

  // subscribe_to_newsletter - computed: true, optional: false, required: false
  public get subscribeToNewsletter() {
    return this.getBooleanAttribute('subscribe_to_newsletter');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // type_of_2fa - computed: true, optional: false, required: false
  public get typeOf2Fa() {
    return this.getStringAttribute('type_of_2fa');
  }

  // type_of_2fa_for_display - computed: true, optional: false, required: false
  public get typeOf2FaForDisplay() {
    return this.getStringAttribute('type_of_2fa_for_display');
  }

  // user_home - computed: true, optional: false, required: false
  public get userHome() {
    return this.getStringAttribute('user_home');
  }

  // user_root - computed: true, optional: false, required: false
  public get userRoot() {
    return this.getStringAttribute('user_root');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
