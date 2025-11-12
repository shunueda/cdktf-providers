// https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesSiteConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/site files_site}
*/
export class DataFilesSite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesSite to import
  * @param importFromId The id of the existing DataFilesSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/site files_site} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesSiteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFilesSiteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'files_site',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_sftp_host_key_id - computed: true, optional: false, required: false
  public get activeSftpHostKeyId() {
    return this.getNumberAttribute('active_sftp_host_key_id');
  }

  // additional_text_file_types - computed: true, optional: false, required: false
  public get additionalTextFileTypes() {
    return this.getListAttribute('additional_text_file_types');
  }

  // admin_user_id - computed: true, optional: false, required: false
  public get adminUserId() {
    return this.getNumberAttribute('admin_user_id');
  }

  // admins_bypass_locked_subfolders - computed: true, optional: false, required: false
  public get adminsBypassLockedSubfolders() {
    return this.getBooleanAttribute('admins_bypass_locked_subfolders');
  }

  // allow_bundle_names - computed: true, optional: false, required: false
  public get allowBundleNames() {
    return this.getBooleanAttribute('allow_bundle_names');
  }

  // allowed_2fa_method_bypass_for_ftp_sftp_dav - computed: true, optional: false, required: false
  public get allowed2FaMethodBypassForFtpSftpDav() {
    return this.getBooleanAttribute('allowed_2fa_method_bypass_for_ftp_sftp_dav');
  }

  // allowed_2fa_method_email - computed: true, optional: false, required: false
  public get allowed2FaMethodEmail() {
    return this.getBooleanAttribute('allowed_2fa_method_email');
  }

  // allowed_2fa_method_sms - computed: true, optional: false, required: false
  public get allowed2FaMethodSms() {
    return this.getBooleanAttribute('allowed_2fa_method_sms');
  }

  // allowed_2fa_method_static - computed: true, optional: false, required: false
  public get allowed2FaMethodStatic() {
    return this.getBooleanAttribute('allowed_2fa_method_static');
  }

  // allowed_2fa_method_totp - computed: true, optional: false, required: false
  public get allowed2FaMethodTotp() {
    return this.getBooleanAttribute('allowed_2fa_method_totp');
  }

  // allowed_2fa_method_webauthn - computed: true, optional: false, required: false
  public get allowed2FaMethodWebauthn() {
    return this.getBooleanAttribute('allowed_2fa_method_webauthn');
  }

  // allowed_2fa_method_yubi - computed: true, optional: false, required: false
  public get allowed2FaMethodYubi() {
    return this.getBooleanAttribute('allowed_2fa_method_yubi');
  }

  // allowed_countries - computed: true, optional: false, required: false
  public get allowedCountries() {
    return this.getStringAttribute('allowed_countries');
  }

  // allowed_ips - computed: true, optional: false, required: false
  public get allowedIps() {
    return this.getStringAttribute('allowed_ips');
  }

  // always_mkdir_parents - computed: true, optional: false, required: false
  public get alwaysMkdirParents() {
    return this.getBooleanAttribute('always_mkdir_parents');
  }

  // as2_message_retention_days - computed: true, optional: false, required: false
  public get as2MessageRetentionDays() {
    return this.getNumberAttribute('as2_message_retention_days');
  }

  // ask_about_overwrites - computed: true, optional: false, required: false
  public get askAboutOverwrites() {
    return this.getBooleanAttribute('ask_about_overwrites');
  }

  // bundle_activity_notifications - computed: true, optional: false, required: false
  public get bundleActivityNotifications() {
    return this.getStringAttribute('bundle_activity_notifications');
  }

  // bundle_expiration - computed: true, optional: false, required: false
  public get bundleExpiration() {
    return this.getNumberAttribute('bundle_expiration');
  }

  // bundle_not_found_message - computed: true, optional: false, required: false
  public get bundleNotFoundMessage() {
    return this.getStringAttribute('bundle_not_found_message');
  }

  // bundle_password_required - computed: true, optional: false, required: false
  public get bundlePasswordRequired() {
    return this.getBooleanAttribute('bundle_password_required');
  }

  // bundle_recipient_blacklist_domains - computed: true, optional: false, required: false
  public get bundleRecipientBlacklistDomains() {
    return this.getListAttribute('bundle_recipient_blacklist_domains');
  }

  // bundle_recipient_blacklist_free_email_domains - computed: true, optional: false, required: false
  public get bundleRecipientBlacklistFreeEmailDomains() {
    return this.getBooleanAttribute('bundle_recipient_blacklist_free_email_domains');
  }

  // bundle_registration_notifications - computed: true, optional: false, required: false
  public get bundleRegistrationNotifications() {
    return this.getStringAttribute('bundle_registration_notifications');
  }

  // bundle_require_note - computed: true, optional: false, required: false
  public get bundleRequireNote() {
    return this.getBooleanAttribute('bundle_require_note');
  }

  // bundle_require_registration - computed: true, optional: false, required: false
  public get bundleRequireRegistration() {
    return this.getBooleanAttribute('bundle_require_registration');
  }

  // bundle_require_share_recipient - computed: true, optional: false, required: false
  public get bundleRequireShareRecipient() {
    return this.getBooleanAttribute('bundle_require_share_recipient');
  }

  // bundle_send_shared_receipts - computed: true, optional: false, required: false
  public get bundleSendSharedReceipts() {
    return this.getBooleanAttribute('bundle_send_shared_receipts');
  }

  // bundle_upload_receipt_notifications - computed: true, optional: false, required: false
  public get bundleUploadReceiptNotifications() {
    return this.getStringAttribute('bundle_upload_receipt_notifications');
  }

  // bundle_watermark_attachment - computed: true, optional: false, required: false
  public get bundleWatermarkAttachment() {
    return this.getStringAttribute('bundle_watermark_attachment');
  }

  // bundle_watermark_value - computed: true, optional: false, required: false
  private _bundleWatermarkValue = new cdktf.AnyMap(this, "bundle_watermark_value");
  public get bundleWatermarkValue() {
    return this._bundleWatermarkValue;
  }

  // calculate_file_checksums_crc32 - computed: true, optional: false, required: false
  public get calculateFileChecksumsCrc32() {
    return this.getBooleanAttribute('calculate_file_checksums_crc32');
  }

  // calculate_file_checksums_md5 - computed: true, optional: false, required: false
  public get calculateFileChecksumsMd5() {
    return this.getBooleanAttribute('calculate_file_checksums_md5');
  }

  // calculate_file_checksums_sha1 - computed: true, optional: false, required: false
  public get calculateFileChecksumsSha1() {
    return this.getBooleanAttribute('calculate_file_checksums_sha1');
  }

  // calculate_file_checksums_sha256 - computed: true, optional: false, required: false
  public get calculateFileChecksumsSha256() {
    return this.getBooleanAttribute('calculate_file_checksums_sha256');
  }

  // color2_left - computed: true, optional: false, required: false
  public get color2Left() {
    return this.getStringAttribute('color2_left');
  }

  // color2_link - computed: true, optional: false, required: false
  public get color2Link() {
    return this.getStringAttribute('color2_link');
  }

  // color2_text - computed: true, optional: false, required: false
  public get color2Text() {
    return this.getStringAttribute('color2_text');
  }

  // color2_top - computed: true, optional: false, required: false
  public get color2Top() {
    return this.getStringAttribute('color2_top');
  }

  // color2_top_text - computed: true, optional: false, required: false
  public get color2TopText() {
    return this.getStringAttribute('color2_top_text');
  }

  // contact_name - computed: true, optional: false, required: false
  public get contactName() {
    return this.getStringAttribute('contact_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // custom_namespace - computed: true, optional: false, required: false
  public get customNamespace() {
    return this.getBooleanAttribute('custom_namespace');
  }

  // dav_enabled - computed: true, optional: false, required: false
  public get davEnabled() {
    return this.getBooleanAttribute('dav_enabled');
  }

  // dav_user_root_enabled - computed: true, optional: false, required: false
  public get davUserRootEnabled() {
    return this.getBooleanAttribute('dav_user_root_enabled');
  }

  // days_to_retain_backups - computed: true, optional: false, required: false
  public get daysToRetainBackups() {
    return this.getNumberAttribute('days_to_retain_backups');
  }

  // default_time_zone - computed: true, optional: false, required: false
  public get defaultTimeZone() {
    return this.getStringAttribute('default_time_zone');
  }

  // desktop_app - computed: true, optional: false, required: false
  public get desktopApp() {
    return this.getBooleanAttribute('desktop_app');
  }

  // desktop_app_session_ip_pinning - computed: true, optional: false, required: false
  public get desktopAppSessionIpPinning() {
    return this.getBooleanAttribute('desktop_app_session_ip_pinning');
  }

  // desktop_app_session_lifetime - computed: true, optional: false, required: false
  public get desktopAppSessionLifetime() {
    return this.getNumberAttribute('desktop_app_session_lifetime');
  }

  // disable_files_certificate_generation - computed: true, optional: false, required: false
  public get disableFilesCertificateGeneration() {
    return this.getBooleanAttribute('disable_files_certificate_generation');
  }

  // disable_notifications - computed: true, optional: false, required: false
  public get disableNotifications() {
    return this.getBooleanAttribute('disable_notifications');
  }

  // disable_password_reset - computed: true, optional: false, required: false
  public get disablePasswordReset() {
    return this.getBooleanAttribute('disable_password_reset');
  }

  // disallowed_countries - computed: true, optional: false, required: false
  public get disallowedCountries() {
    return this.getStringAttribute('disallowed_countries');
  }

  // document_edits_in_bundle_allowed - computed: true, optional: false, required: false
  public get documentEditsInBundleAllowed() {
    return this.getBooleanAttribute('document_edits_in_bundle_allowed');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domain_hsts_header - computed: true, optional: false, required: false
  public get domainHstsHeader() {
    return this.getBooleanAttribute('domain_hsts_header');
  }

  // domain_letsencrypt_chain - computed: true, optional: false, required: false
  public get domainLetsencryptChain() {
    return this.getStringAttribute('domain_letsencrypt_chain');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // folder_permissions_groups_only - computed: true, optional: false, required: false
  public get folderPermissionsGroupsOnly() {
    return this.getBooleanAttribute('folder_permissions_groups_only');
  }

  // ftp_enabled - computed: true, optional: false, required: false
  public get ftpEnabled() {
    return this.getBooleanAttribute('ftp_enabled');
  }

  // group_admins_can_set_user_password - computed: true, optional: false, required: false
  public get groupAdminsCanSetUserPassword() {
    return this.getBooleanAttribute('group_admins_can_set_user_password');
  }

  // hipaa - computed: true, optional: false, required: false
  public get hipaa() {
    return this.getBooleanAttribute('hipaa');
  }

  // icon128 - computed: true, optional: false, required: false
  public get icon128() {
    return this.getStringAttribute('icon128');
  }

  // icon16 - computed: true, optional: false, required: false
  public get icon16() {
    return this.getStringAttribute('icon16');
  }

  // icon32 - computed: true, optional: false, required: false
  public get icon32() {
    return this.getStringAttribute('icon32');
  }

  // icon48 - computed: true, optional: false, required: false
  public get icon48() {
    return this.getStringAttribute('icon48');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // immutable_files_set_at - computed: true, optional: false, required: false
  public get immutableFilesSetAt() {
    return this.getStringAttribute('immutable_files_set_at');
  }

  // include_password_in_welcome_email - computed: true, optional: false, required: false
  public get includePasswordInWelcomeEmail() {
    return this.getBooleanAttribute('include_password_in_welcome_email');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // ldap_base_dn - computed: true, optional: false, required: false
  public get ldapBaseDn() {
    return this.getStringAttribute('ldap_base_dn');
  }

  // ldap_domain - computed: true, optional: false, required: false
  public get ldapDomain() {
    return this.getStringAttribute('ldap_domain');
  }

  // ldap_enabled - computed: true, optional: false, required: false
  public get ldapEnabled() {
    return this.getBooleanAttribute('ldap_enabled');
  }

  // ldap_group_action - computed: true, optional: false, required: false
  public get ldapGroupAction() {
    return this.getStringAttribute('ldap_group_action');
  }

  // ldap_group_exclusion - computed: true, optional: false, required: false
  public get ldapGroupExclusion() {
    return this.getStringAttribute('ldap_group_exclusion');
  }

  // ldap_group_inclusion - computed: true, optional: false, required: false
  public get ldapGroupInclusion() {
    return this.getStringAttribute('ldap_group_inclusion');
  }

  // ldap_host - computed: true, optional: false, required: false
  public get ldapHost() {
    return this.getStringAttribute('ldap_host');
  }

  // ldap_host_2 - computed: true, optional: false, required: false
  public get ldapHost2() {
    return this.getStringAttribute('ldap_host_2');
  }

  // ldap_host_3 - computed: true, optional: false, required: false
  public get ldapHost3() {
    return this.getStringAttribute('ldap_host_3');
  }

  // ldap_port - computed: true, optional: false, required: false
  public get ldapPort() {
    return this.getNumberAttribute('ldap_port');
  }

  // ldap_secure - computed: true, optional: false, required: false
  public get ldapSecure() {
    return this.getBooleanAttribute('ldap_secure');
  }

  // ldap_type - computed: true, optional: false, required: false
  public get ldapType() {
    return this.getStringAttribute('ldap_type');
  }

  // ldap_user_action - computed: true, optional: false, required: false
  public get ldapUserAction() {
    return this.getStringAttribute('ldap_user_action');
  }

  // ldap_user_include_groups - computed: true, optional: false, required: false
  public get ldapUserIncludeGroups() {
    return this.getStringAttribute('ldap_user_include_groups');
  }

  // ldap_username - computed: true, optional: false, required: false
  public get ldapUsername() {
    return this.getStringAttribute('ldap_username');
  }

  // ldap_username_field - computed: true, optional: false, required: false
  public get ldapUsernameField() {
    return this.getStringAttribute('ldap_username_field');
  }

  // legacy_checksums_mode - computed: true, optional: false, required: false
  public get legacyChecksumsMode() {
    return this.getBooleanAttribute('legacy_checksums_mode');
  }

  // login_help_text - computed: true, optional: false, required: false
  public get loginHelpText() {
    return this.getStringAttribute('login_help_text');
  }

  // login_page_background_image - computed: true, optional: false, required: false
  public get loginPageBackgroundImage() {
    return this.getStringAttribute('login_page_background_image');
  }

  // logo - computed: true, optional: false, required: false
  public get logo() {
    return this.getStringAttribute('logo');
  }

  // managed_site_settings - computed: true, optional: false, required: false
  private _managedSiteSettings = new cdktf.AnyMap(this, "managed_site_settings");
  public get managedSiteSettings() {
    return this._managedSiteSettings;
  }

  // max_prior_passwords - computed: true, optional: false, required: false
  public get maxPriorPasswords() {
    return this.getNumberAttribute('max_prior_passwords');
  }

  // migrate_remote_server_sync_to_sync - computed: true, optional: false, required: false
  public get migrateRemoteServerSyncToSync() {
    return this.getBooleanAttribute('migrate_remote_server_sync_to_sync');
  }

  // mobile_app - computed: true, optional: false, required: false
  public get mobileApp() {
    return this.getBooleanAttribute('mobile_app');
  }

  // mobile_app_session_ip_pinning - computed: true, optional: false, required: false
  public get mobileAppSessionIpPinning() {
    return this.getBooleanAttribute('mobile_app_session_ip_pinning');
  }

  // mobile_app_session_lifetime - computed: true, optional: false, required: false
  public get mobileAppSessionLifetime() {
    return this.getNumberAttribute('mobile_app_session_lifetime');
  }

  // motd_text - computed: true, optional: false, required: false
  public get motdText() {
    return this.getStringAttribute('motd_text');
  }

  // motd_use_for_ftp - computed: true, optional: false, required: false
  public get motdUseForFtp() {
    return this.getBooleanAttribute('motd_use_for_ftp');
  }

  // motd_use_for_sftp - computed: true, optional: false, required: false
  public get motdUseForSftp() {
    return this.getBooleanAttribute('motd_use_for_sftp');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_billing_amount - computed: true, optional: false, required: false
  public get nextBillingAmount() {
    return this.getStringAttribute('next_billing_amount');
  }

  // next_billing_date - computed: true, optional: false, required: false
  public get nextBillingDate() {
    return this.getStringAttribute('next_billing_date');
  }

  // non_sso_groups_allowed - computed: true, optional: false, required: false
  public get nonSsoGroupsAllowed() {
    return this.getBooleanAttribute('non_sso_groups_allowed');
  }

  // non_sso_users_allowed - computed: true, optional: false, required: false
  public get nonSsoUsersAllowed() {
    return this.getBooleanAttribute('non_sso_users_allowed');
  }

  // office_integration_available - computed: true, optional: false, required: false
  public get officeIntegrationAvailable() {
    return this.getBooleanAttribute('office_integration_available');
  }

  // office_integration_type - computed: true, optional: false, required: false
  public get officeIntegrationType() {
    return this.getStringAttribute('office_integration_type');
  }

  // oncehub_link - computed: true, optional: false, required: false
  public get oncehubLink() {
    return this.getStringAttribute('oncehub_link');
  }

  // opt_out_global - computed: true, optional: false, required: false
  public get optOutGlobal() {
    return this.getBooleanAttribute('opt_out_global');
  }

  // overdue - computed: true, optional: false, required: false
  public get overdue() {
    return this.getBooleanAttribute('overdue');
  }

  // password_min_length - computed: true, optional: false, required: false
  public get passwordMinLength() {
    return this.getNumberAttribute('password_min_length');
  }

  // password_require_letter - computed: true, optional: false, required: false
  public get passwordRequireLetter() {
    return this.getBooleanAttribute('password_require_letter');
  }

  // password_require_mixed - computed: true, optional: false, required: false
  public get passwordRequireMixed() {
    return this.getBooleanAttribute('password_require_mixed');
  }

  // password_require_number - computed: true, optional: false, required: false
  public get passwordRequireNumber() {
    return this.getBooleanAttribute('password_require_number');
  }

  // password_require_special - computed: true, optional: false, required: false
  public get passwordRequireSpecial() {
    return this.getBooleanAttribute('password_require_special');
  }

  // password_require_unbreached - computed: true, optional: false, required: false
  public get passwordRequireUnbreached() {
    return this.getBooleanAttribute('password_require_unbreached');
  }

  // password_requirements_apply_to_bundles - computed: true, optional: false, required: false
  public get passwordRequirementsApplyToBundles() {
    return this.getBooleanAttribute('password_requirements_apply_to_bundles');
  }

  // password_validity_days - computed: true, optional: false, required: false
  public get passwordValidityDays() {
    return this.getNumberAttribute('password_validity_days');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // pin_all_remote_servers_to_site_region - computed: true, optional: false, required: false
  public get pinAllRemoteServersToSiteRegion() {
    return this.getBooleanAttribute('pin_all_remote_servers_to_site_region');
  }

  // prevent_root_permissions_for_non_site_admins - computed: true, optional: false, required: false
  public get preventRootPermissionsForNonSiteAdmins() {
    return this.getBooleanAttribute('prevent_root_permissions_for_non_site_admins');
  }

  // protocol_access_groups_only - computed: true, optional: false, required: false
  public get protocolAccessGroupsOnly() {
    return this.getBooleanAttribute('protocol_access_groups_only');
  }

  // reply_to_email - computed: true, optional: false, required: false
  public get replyToEmail() {
    return this.getStringAttribute('reply_to_email');
  }

  // require_2fa - computed: true, optional: false, required: false
  public get require2Fa() {
    return this.getBooleanAttribute('require_2fa');
  }

  // require_2fa_stop_time - computed: true, optional: false, required: false
  public get require2FaStopTime() {
    return this.getStringAttribute('require_2fa_stop_time');
  }

  // require_2fa_user_type - computed: true, optional: false, required: false
  public get require2FaUserType() {
    return this.getStringAttribute('require_2fa_user_type');
  }

  // require_logout_from_bundles_and_inboxes - computed: true, optional: false, required: false
  public get requireLogoutFromBundlesAndInboxes() {
    return this.getBooleanAttribute('require_logout_from_bundles_and_inboxes');
  }

  // revoke_bundle_access_on_disable_or_delete - computed: true, optional: false, required: false
  public get revokeBundleAccessOnDisableOrDelete() {
    return this.getBooleanAttribute('revoke_bundle_access_on_disable_or_delete');
  }

  // session - computed: true, optional: false, required: false
  public get session() {
    return this.getStringAttribute('session');
  }

  // session_expiry - computed: true, optional: false, required: false
  public get sessionExpiry() {
    return this.getStringAttribute('session_expiry');
  }

  // session_expiry_minutes - computed: true, optional: false, required: false
  public get sessionExpiryMinutes() {
    return this.getNumberAttribute('session_expiry_minutes');
  }

  // sftp_enabled - computed: true, optional: false, required: false
  public get sftpEnabled() {
    return this.getBooleanAttribute('sftp_enabled');
  }

  // sftp_host_key_type - computed: true, optional: false, required: false
  public get sftpHostKeyType() {
    return this.getStringAttribute('sftp_host_key_type');
  }

  // sftp_insecure_ciphers - computed: true, optional: false, required: false
  public get sftpInsecureCiphers() {
    return this.getBooleanAttribute('sftp_insecure_ciphers');
  }

  // sftp_insecure_diffie_hellman - computed: true, optional: false, required: false
  public get sftpInsecureDiffieHellman() {
    return this.getBooleanAttribute('sftp_insecure_diffie_hellman');
  }

  // sftp_user_root_enabled - computed: true, optional: false, required: false
  public get sftpUserRootEnabled() {
    return this.getBooleanAttribute('sftp_user_root_enabled');
  }

  // sharing_enabled - computed: true, optional: false, required: false
  public get sharingEnabled() {
    return this.getBooleanAttribute('sharing_enabled');
  }

  // show_request_access_link - computed: true, optional: false, required: false
  public get showRequestAccessLink() {
    return this.getBooleanAttribute('show_request_access_link');
  }

  // show_user_notifications_log_in_link - computed: true, optional: false, required: false
  public get showUserNotificationsLogInLink() {
    return this.getBooleanAttribute('show_user_notifications_log_in_link');
  }

  // site_footer - computed: true, optional: false, required: false
  public get siteFooter() {
    return this.getStringAttribute('site_footer');
  }

  // site_header - computed: true, optional: false, required: false
  public get siteHeader() {
    return this.getStringAttribute('site_header');
  }

  // site_public_footer - computed: true, optional: false, required: false
  public get sitePublicFooter() {
    return this.getStringAttribute('site_public_footer');
  }

  // site_public_header - computed: true, optional: false, required: false
  public get sitePublicHeader() {
    return this.getStringAttribute('site_public_header');
  }

  // smtp_address - computed: true, optional: false, required: false
  public get smtpAddress() {
    return this.getStringAttribute('smtp_address');
  }

  // smtp_authentication - computed: true, optional: false, required: false
  public get smtpAuthentication() {
    return this.getStringAttribute('smtp_authentication');
  }

  // smtp_from - computed: true, optional: false, required: false
  public get smtpFrom() {
    return this.getStringAttribute('smtp_from');
  }

  // smtp_port - computed: true, optional: false, required: false
  public get smtpPort() {
    return this.getNumberAttribute('smtp_port');
  }

  // smtp_username - computed: true, optional: false, required: false
  public get smtpUsername() {
    return this.getStringAttribute('smtp_username');
  }

  // snapshot_sharing_enabled - computed: true, optional: false, required: false
  public get snapshotSharingEnabled() {
    return this.getBooleanAttribute('snapshot_sharing_enabled');
  }

  // ssl_required - computed: true, optional: false, required: false
  public get sslRequired() {
    return this.getBooleanAttribute('ssl_required');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // switch_to_plan_date - computed: true, optional: false, required: false
  public get switchToPlanDate() {
    return this.getStringAttribute('switch_to_plan_date');
  }

  // trial_days_left - computed: true, optional: false, required: false
  public get trialDaysLeft() {
    return this.getNumberAttribute('trial_days_left');
  }

  // trial_until - computed: true, optional: false, required: false
  public get trialUntil() {
    return this.getStringAttribute('trial_until');
  }

  // uploads_via_email_authentication - computed: true, optional: false, required: false
  public get uploadsViaEmailAuthentication() {
    return this.getBooleanAttribute('uploads_via_email_authentication');
  }

  // use_dedicated_ips_for_smtp - computed: true, optional: false, required: false
  public get useDedicatedIpsForSmtp() {
    return this.getBooleanAttribute('use_dedicated_ips_for_smtp');
  }

  // use_provided_modified_at - computed: true, optional: false, required: false
  public get useProvidedModifiedAt() {
    return this.getBooleanAttribute('use_provided_modified_at');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // user_lockout - computed: true, optional: false, required: false
  public get userLockout() {
    return this.getBooleanAttribute('user_lockout');
  }

  // user_lockout_lock_period - computed: true, optional: false, required: false
  public get userLockoutLockPeriod() {
    return this.getNumberAttribute('user_lockout_lock_period');
  }

  // user_lockout_tries - computed: true, optional: false, required: false
  public get userLockoutTries() {
    return this.getNumberAttribute('user_lockout_tries');
  }

  // user_lockout_within - computed: true, optional: false, required: false
  public get userLockoutWithin() {
    return this.getNumberAttribute('user_lockout_within');
  }

  // user_requests_enabled - computed: true, optional: false, required: false
  public get userRequestsEnabled() {
    return this.getBooleanAttribute('user_requests_enabled');
  }

  // user_requests_notify_admins - computed: true, optional: false, required: false
  public get userRequestsNotifyAdmins() {
    return this.getBooleanAttribute('user_requests_notify_admins');
  }

  // users_can_create_api_keys - computed: true, optional: false, required: false
  public get usersCanCreateApiKeys() {
    return this.getBooleanAttribute('users_can_create_api_keys');
  }

  // users_can_create_ssh_keys - computed: true, optional: false, required: false
  public get usersCanCreateSshKeys() {
    return this.getBooleanAttribute('users_can_create_ssh_keys');
  }

  // welcome_custom_text - computed: true, optional: false, required: false
  public get welcomeCustomText() {
    return this.getStringAttribute('welcome_custom_text');
  }

  // welcome_email_cc - computed: true, optional: false, required: false
  public get welcomeEmailCc() {
    return this.getStringAttribute('welcome_email_cc');
  }

  // welcome_email_enabled - computed: true, optional: false, required: false
  public get welcomeEmailEnabled() {
    return this.getBooleanAttribute('welcome_email_enabled');
  }

  // welcome_email_subject - computed: true, optional: false, required: false
  public get welcomeEmailSubject() {
    return this.getStringAttribute('welcome_email_subject');
  }

  // welcome_screen - computed: true, optional: false, required: false
  public get welcomeScreen() {
    return this.getStringAttribute('welcome_screen');
  }

  // windows_mode_ftp - computed: true, optional: false, required: false
  public get windowsModeFtp() {
    return this.getBooleanAttribute('windows_mode_ftp');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
