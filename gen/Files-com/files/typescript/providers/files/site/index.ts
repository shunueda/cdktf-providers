// https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the currently selected custom SFTP Host Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#active_sftp_host_key_id Site#active_sftp_host_key_id}
  */
  readonly activeSftpHostKeyId?: number;
  /**
  * Additional extensions that are considered text files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#additional_text_file_types Site#additional_text_file_types}
  */
  readonly additionalTextFileTypes?: string[];
  /**
  * Allow admins to bypass the locked subfolders setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#admins_bypass_locked_subfolders Site#admins_bypass_locked_subfolders}
  */
  readonly adminsBypassLockedSubfolders?: boolean | cdktf.IResolvable;
  /**
  * Are manual Bundle names allowed?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#allow_bundle_names Site#allow_bundle_names}
  */
  readonly allowBundleNames?: boolean | cdktf.IResolvable;
  /**
  * Are users allowed to configure their two factor authentication to be bypassed for FTP/SFTP/WebDAV?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#allowed_2fa_method_bypass_for_ftp_sftp_dav Site#allowed_2fa_method_bypass_for_ftp_sftp_dav}
  */
  readonly allowed2FaMethodBypassForFtpSftpDav?: boolean | cdktf.IResolvable;
  /**
  * Is OTP via email two factor authentication allowed?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#allowed_2fa_method_email Site#allowed_2fa_method_email}
  */
  readonly allowed2FaMethodEmail?: boolean | cdktf.IResolvable;
  /**
  * Is SMS two factor authentication allowed?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#allowed_2fa_method_sms Site#allowed_2fa_method_sms}
  */
  readonly allowed2FaMethodSms?: boolean | cdktf.IResolvable;
  /**
  * Is OTP via static codes for two factor authentication allowed?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#allowed_2fa_method_static Site#allowed_2fa_method_static}
  */
  readonly allowed2FaMethodStatic?: boolean | cdktf.IResolvable;
  /**
  * Is TOTP two factor authentication allowed?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#allowed_2fa_method_totp Site#allowed_2fa_method_totp}
  */
  readonly allowed2FaMethodTotp?: boolean | cdktf.IResolvable;
  /**
  * Is WebAuthn two factor authentication allowed?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#allowed_2fa_method_webauthn Site#allowed_2fa_method_webauthn}
  */
  readonly allowed2FaMethodWebauthn?: boolean | cdktf.IResolvable;
  /**
  * Is yubikey two factor authentication allowed?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#allowed_2fa_method_yubi Site#allowed_2fa_method_yubi}
  */
  readonly allowed2FaMethodYubi?: boolean | cdktf.IResolvable;
  /**
  * Comma separated list of allowed Country codes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#allowed_countries Site#allowed_countries}
  */
  readonly allowedCountries?: string;
  /**
  * List of allowed IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#allowed_ips Site#allowed_ips}
  */
  readonly allowedIps?: string;
  /**
  * Create parent directories if they do not exist during uploads?  This is primarily used to work around broken upload clients that assume servers will perform this step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#always_mkdir_parents Site#always_mkdir_parents}
  */
  readonly alwaysMkdirParents?: boolean | cdktf.IResolvable;
  /**
  * Number of days to retain AS2 messages (incoming and outgoing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#as2_message_retention_days Site#as2_message_retention_days}
  */
  readonly as2MessageRetentionDays?: number;
  /**
  * If false, rename conflicting files instead of asking for overwrite confirmation.  Only applies to web interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ask_about_overwrites Site#ask_about_overwrites}
  */
  readonly askAboutOverwrites?: boolean | cdktf.IResolvable;
  /**
  * Do Bundle owners receive activity notifications?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_activity_notifications Site#bundle_activity_notifications}
  */
  readonly bundleActivityNotifications?: string;
  /**
  * Site-wide Bundle expiration in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_expiration Site#bundle_expiration}
  */
  readonly bundleExpiration?: number;
  /**
  * Custom error message to show when bundle is not found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_not_found_message Site#bundle_not_found_message}
  */
  readonly bundleNotFoundMessage?: string;
  /**
  * Do Bundles require password protection?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_password_required Site#bundle_password_required}
  */
  readonly bundlePasswordRequired?: boolean | cdktf.IResolvable;
  /**
  * List of email domains to disallow when entering a Bundle/Inbox recipients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_recipient_blacklist_domains Site#bundle_recipient_blacklist_domains}
  */
  readonly bundleRecipientBlacklistDomains?: string[];
  /**
  * Disallow free email domains for Bundle/Inbox recipients?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_recipient_blacklist_free_email_domains Site#bundle_recipient_blacklist_free_email_domains}
  */
  readonly bundleRecipientBlacklistFreeEmailDomains?: boolean | cdktf.IResolvable;
  /**
  * Do Bundle owners receive registration notification?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_registration_notifications Site#bundle_registration_notifications}
  */
  readonly bundleRegistrationNotifications?: string;
  /**
  * Do Bundles require internal notes?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_require_note Site#bundle_require_note}
  */
  readonly bundleRequireNote?: boolean | cdktf.IResolvable;
  /**
  * Do Bundles require registration?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_require_registration Site#bundle_require_registration}
  */
  readonly bundleRequireRegistration?: boolean | cdktf.IResolvable;
  /**
  * Do Bundles require recipients for sharing?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_require_share_recipient Site#bundle_require_share_recipient}
  */
  readonly bundleRequireShareRecipient?: boolean | cdktf.IResolvable;
  /**
  * Do Bundle creators receive receipts of invitations?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_send_shared_receipts Site#bundle_send_shared_receipts}
  */
  readonly bundleSendSharedReceipts?: boolean | cdktf.IResolvable;
  /**
  * Do Bundle uploaders receive upload confirmation notifications?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_upload_receipt_notifications Site#bundle_upload_receipt_notifications}
  */
  readonly bundleUploadReceiptNotifications?: string;
  /**
  * Preview watermark settings applied to all bundle items. Uses the same keys as Behavior.value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#bundle_watermark_value Site#bundle_watermark_value}
  */
  readonly bundleWatermarkValue?: { [key: string]: any };
  /**
  * Calculate CRC32 checksums for files?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#calculate_file_checksums_crc32 Site#calculate_file_checksums_crc32}
  */
  readonly calculateFileChecksumsCrc32?: boolean | cdktf.IResolvable;
  /**
  * Calculate MD5 checksums for files?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#calculate_file_checksums_md5 Site#calculate_file_checksums_md5}
  */
  readonly calculateFileChecksumsMd5?: boolean | cdktf.IResolvable;
  /**
  * Calculate SHA1 checksums for files?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#calculate_file_checksums_sha1 Site#calculate_file_checksums_sha1}
  */
  readonly calculateFileChecksumsSha1?: boolean | cdktf.IResolvable;
  /**
  * Calculate SHA256 checksums for files?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#calculate_file_checksums_sha256 Site#calculate_file_checksums_sha256}
  */
  readonly calculateFileChecksumsSha256?: boolean | cdktf.IResolvable;
  /**
  * Page link and button color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#color2_left Site#color2_left}
  */
  readonly color2Left?: string;
  /**
  * Top bar link color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#color2_link Site#color2_link}
  */
  readonly color2Link?: string;
  /**
  * Page link and button color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#color2_text Site#color2_text}
  */
  readonly color2Text?: string;
  /**
  * Top bar background color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#color2_top Site#color2_top}
  */
  readonly color2Top?: string;
  /**
  * Top bar text color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#color2_top_text Site#color2_top_text}
  */
  readonly color2TopText?: string;
  /**
  * Is this site using a custom namespace for users?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#custom_namespace Site#custom_namespace}
  */
  readonly customNamespace?: boolean | cdktf.IResolvable;
  /**
  * Is WebDAV enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#dav_enabled Site#dav_enabled}
  */
  readonly davEnabled?: boolean | cdktf.IResolvable;
  /**
  * Use user FTP roots also for WebDAV?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#dav_user_root_enabled Site#dav_user_root_enabled}
  */
  readonly davUserRootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Number of days to keep deleted files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#days_to_retain_backups Site#days_to_retain_backups}
  */
  readonly daysToRetainBackups?: number;
  /**
  * Site default time zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#default_time_zone Site#default_time_zone}
  */
  readonly defaultTimeZone?: string;
  /**
  * Is the desktop app enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#desktop_app Site#desktop_app}
  */
  readonly desktopApp?: boolean | cdktf.IResolvable;
  /**
  * Is desktop app session IP pinning enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#desktop_app_session_ip_pinning Site#desktop_app_session_ip_pinning}
  */
  readonly desktopAppSessionIpPinning?: boolean | cdktf.IResolvable;
  /**
  * Desktop app session lifetime (in hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#desktop_app_session_lifetime Site#desktop_app_session_lifetime}
  */
  readonly desktopAppSessionLifetime?: number;
  /**
  * If set, Files.com will not set the CAA records required to generate future SSL certificates for this domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#disable_files_certificate_generation Site#disable_files_certificate_generation}
  */
  readonly disableFilesCertificateGeneration?: boolean | cdktf.IResolvable;
  /**
  * Is password reset disabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#disable_password_reset Site#disable_password_reset}
  */
  readonly disablePasswordReset?: boolean | cdktf.IResolvable;
  /**
  * Comma separated list of disallowed Country codes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#disallowed_countries Site#disallowed_countries}
  */
  readonly disallowedCountries?: string;
  /**
  * If true, allow public viewers of Bundles with full permissions to use document editing integrations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#document_edits_in_bundle_allowed Site#document_edits_in_bundle_allowed}
  */
  readonly documentEditsInBundleAllowed?: boolean | cdktf.IResolvable;
  /**
  * Custom domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#domain Site#domain}
  */
  readonly domain?: string;
  /**
  * Send HSTS (HTTP Strict Transport Security) header when visitors access the site via a custom domain?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#domain_hsts_header Site#domain_hsts_header}
  */
  readonly domainHstsHeader?: boolean | cdktf.IResolvable;
  /**
  * Letsencrypt chain to use when registering SSL Certificate for domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#domain_letsencrypt_chain Site#domain_letsencrypt_chain}
  */
  readonly domainLetsencryptChain?: string;
  /**
  * Main email for this site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#email Site#email}
  */
  readonly email?: string;
  /**
  * If true, permissions for this site must be bound to a group (not a user).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#folder_permissions_groups_only Site#folder_permissions_groups_only}
  */
  readonly folderPermissionsGroupsOnly?: boolean | cdktf.IResolvable;
  /**
  * Is FTP enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ftp_enabled Site#ftp_enabled}
  */
  readonly ftpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Allow group admins set password authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#group_admins_can_set_user_password Site#group_admins_can_set_user_password}
  */
  readonly groupAdminsCanSetUserPassword?: boolean | cdktf.IResolvable;
  /**
  * Include password in emails to new users?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#include_password_in_welcome_email Site#include_password_in_welcome_email}
  */
  readonly includePasswordInWelcomeEmail?: boolean | cdktf.IResolvable;
  /**
  * Site default language
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#language Site#language}
  */
  readonly language?: string;
  /**
  * Base DN for looking up users in LDAP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_base_dn Site#ldap_base_dn}
  */
  readonly ldapBaseDn?: string;
  /**
  * Domain name that will be appended to usernames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_domain Site#ldap_domain}
  */
  readonly ldapDomain?: string;
  /**
  * Main LDAP setting: is LDAP enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_enabled Site#ldap_enabled}
  */
  readonly ldapEnabled?: boolean | cdktf.IResolvable;
  /**
  * Should we sync groups from LDAP server?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_group_action Site#ldap_group_action}
  */
  readonly ldapGroupAction?: string;
  /**
  * Comma or newline separated list of group names (with optional wildcards) to exclude when syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_group_exclusion Site#ldap_group_exclusion}
  */
  readonly ldapGroupExclusion?: string;
  /**
  * Comma or newline separated list of group names (with optional wildcards) to include when syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_group_inclusion Site#ldap_group_inclusion}
  */
  readonly ldapGroupInclusion?: string;
  /**
  * LDAP host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_host Site#ldap_host}
  */
  readonly ldapHost?: string;
  /**
  * LDAP backup host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_host_2 Site#ldap_host_2}
  */
  readonly ldapHost2?: string;
  /**
  * LDAP backup host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_host_3 Site#ldap_host_3}
  */
  readonly ldapHost3?: string;
  /**
  * LDAP port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_port Site#ldap_port}
  */
  readonly ldapPort?: number;
  /**
  * Use secure LDAP?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_secure Site#ldap_secure}
  */
  readonly ldapSecure?: boolean | cdktf.IResolvable;
  /**
  * LDAP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_type Site#ldap_type}
  */
  readonly ldapType?: string;
  /**
  * Should we sync users from LDAP server?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_user_action Site#ldap_user_action}
  */
  readonly ldapUserAction?: string;
  /**
  * Comma or newline separated list of group names (with optional wildcards) - if provided, only users in these groups will be added or synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_user_include_groups Site#ldap_user_include_groups}
  */
  readonly ldapUserIncludeGroups?: string;
  /**
  * Username for signing in to LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_username Site#ldap_username}
  */
  readonly ldapUsername?: string;
  /**
  * LDAP username field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ldap_username_field Site#ldap_username_field}
  */
  readonly ldapUsernameField?: string;
  /**
  * Use legacy checksums mode?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#legacy_checksums_mode Site#legacy_checksums_mode}
  */
  readonly legacyChecksumsMode?: boolean | cdktf.IResolvable;
  /**
  * Login help text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#login_help_text Site#login_help_text}
  */
  readonly loginHelpText?: string;
  /**
  * Number of prior passwords to disallow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#max_prior_passwords Site#max_prior_passwords}
  */
  readonly maxPriorPasswords?: number;
  /**
  * If true, we will migrate all remote server syncs to the new Sync model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#migrate_remote_server_sync_to_sync Site#migrate_remote_server_sync_to_sync}
  */
  readonly migrateRemoteServerSyncToSync?: boolean | cdktf.IResolvable;
  /**
  * Is the mobile app enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#mobile_app Site#mobile_app}
  */
  readonly mobileApp?: boolean | cdktf.IResolvable;
  /**
  * Is mobile app session IP pinning enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#mobile_app_session_ip_pinning Site#mobile_app_session_ip_pinning}
  */
  readonly mobileAppSessionIpPinning?: boolean | cdktf.IResolvable;
  /**
  * Mobile app session lifetime (in hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#mobile_app_session_lifetime Site#mobile_app_session_lifetime}
  */
  readonly mobileAppSessionLifetime?: number;
  /**
  * A message to show users when they connect via FTP or SFTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#motd_text Site#motd_text}
  */
  readonly motdText?: string;
  /**
  * Show message to users connecting via FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#motd_use_for_ftp Site#motd_use_for_ftp}
  */
  readonly motdUseForFtp?: boolean | cdktf.IResolvable;
  /**
  * Show message to users connecting via SFTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#motd_use_for_sftp Site#motd_use_for_sftp}
  */
  readonly motdUseForSftp?: boolean | cdktf.IResolvable;
  /**
  * Site name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#name Site#name}
  */
  readonly name?: string;
  /**
  * If true, groups can be manually created / modified / deleted by Site Admins. Otherwise, groups can only be managed via your SSO provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#non_sso_groups_allowed Site#non_sso_groups_allowed}
  */
  readonly nonSsoGroupsAllowed?: boolean | cdktf.IResolvable;
  /**
  * If true, users can be manually created / modified / deleted by Site Admins. Otherwise, users can only be managed via your SSO provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#non_sso_users_allowed Site#non_sso_users_allowed}
  */
  readonly nonSsoUsersAllowed?: boolean | cdktf.IResolvable;
  /**
  * If true, allows users to use a document editing integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#office_integration_available Site#office_integration_available}
  */
  readonly officeIntegrationAvailable?: boolean | cdktf.IResolvable;
  /**
  * Which document editing integration to support. Files.com Editor or Microsoft Office for the Web.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#office_integration_type Site#office_integration_type}
  */
  readonly officeIntegrationType?: string;
  /**
  * Use servers in the USA only?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#opt_out_global Site#opt_out_global}
  */
  readonly optOutGlobal?: boolean | cdktf.IResolvable;
  /**
  * Shortest password length for users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#password_min_length Site#password_min_length}
  */
  readonly passwordMinLength?: number;
  /**
  * Require a letter in passwords?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#password_require_letter Site#password_require_letter}
  */
  readonly passwordRequireLetter?: boolean | cdktf.IResolvable;
  /**
  * Require lower and upper case letters in passwords?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#password_require_mixed Site#password_require_mixed}
  */
  readonly passwordRequireMixed?: boolean | cdktf.IResolvable;
  /**
  * Require a number in passwords?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#password_require_number Site#password_require_number}
  */
  readonly passwordRequireNumber?: boolean | cdktf.IResolvable;
  /**
  * Require special characters in password?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#password_require_special Site#password_require_special}
  */
  readonly passwordRequireSpecial?: boolean | cdktf.IResolvable;
  /**
  * Require passwords that have not been previously breached? (see https://haveibeenpwned.com/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#password_require_unbreached Site#password_require_unbreached}
  */
  readonly passwordRequireUnbreached?: boolean | cdktf.IResolvable;
  /**
  * Require bundles' passwords, and passwords for other items (inboxes, public shares, etc.) to conform to the same requirements as users' passwords?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#password_requirements_apply_to_bundles Site#password_requirements_apply_to_bundles}
  */
  readonly passwordRequirementsApplyToBundles?: boolean | cdktf.IResolvable;
  /**
  * Number of days password is valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#password_validity_days Site#password_validity_days}
  */
  readonly passwordValidityDays?: number;
  /**
  * If true, we will ensure that all internal communications with any remote server are made through the primary region of the site. This setting overrides individual remote server settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#pin_all_remote_servers_to_site_region Site#pin_all_remote_servers_to_site_region}
  */
  readonly pinAllRemoteServersToSiteRegion?: boolean | cdktf.IResolvable;
  /**
  * If true, we will prevent non-administrators from receiving any permissions directly on the root folder.  This is commonly used to prevent the accidental application of permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#prevent_root_permissions_for_non_site_admins Site#prevent_root_permissions_for_non_site_admins}
  */
  readonly preventRootPermissionsForNonSiteAdmins?: boolean | cdktf.IResolvable;
  /**
  * If true, protocol access permissions on users will be ignored, and only protocol access permissions set on Groups will be honored.  Make sure that your current user is a member of a group with API permission when changing this value to avoid locking yourself out of your site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#protocol_access_groups_only Site#protocol_access_groups_only}
  */
  readonly protocolAccessGroupsOnly?: boolean | cdktf.IResolvable;
  /**
  * Reply-to email for this site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#reply_to_email Site#reply_to_email}
  */
  readonly replyToEmail?: string;
  /**
  * Require two-factor authentication for all users?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#require_2fa Site#require_2fa}
  */
  readonly require2Fa?: boolean | cdktf.IResolvable;
  /**
  * What type of user is required to use two-factor authentication (when require_2fa is set to `true` for this site)?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#require_2fa_user_type Site#require_2fa_user_type}
  */
  readonly require2FaUserType?: string;
  /**
  * If true, we will hide the 'Remember Me' box on Inbox and Bundle registration pages, requiring that the user logout and log back in every time they visit the page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#require_logout_from_bundles_and_inboxes Site#require_logout_from_bundles_and_inboxes}
  */
  readonly requireLogoutFromBundlesAndInboxes?: boolean | cdktf.IResolvable;
  /**
  * Auto-removes bundles for disabled/deleted users and enforces bundle expiry within user access period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#revoke_bundle_access_on_disable_or_delete Site#revoke_bundle_access_on_disable_or_delete}
  */
  readonly revokeBundleAccessOnDisableOrDelete?: boolean | cdktf.IResolvable;
  /**
  * Session expiry in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#session_expiry Site#session_expiry}
  */
  readonly sessionExpiry?: string;
  /**
  * Session expiry in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#session_expiry_minutes Site#session_expiry_minutes}
  */
  readonly sessionExpiryMinutes?: number;
  /**
  * Is SFTP enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#sftp_enabled Site#sftp_enabled}
  */
  readonly sftpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Sftp Host Key Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#sftp_host_key_type Site#sftp_host_key_type}
  */
  readonly sftpHostKeyType?: string;
  /**
  * If true, we will allow weak and known insecure ciphers to be used for SFTP connections.  Enabling this setting severely weakens the security of your site and it is not recommend, except as a last resort for compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#sftp_insecure_ciphers Site#sftp_insecure_ciphers}
  */
  readonly sftpInsecureCiphers?: boolean | cdktf.IResolvable;
  /**
  * If true, we will allow weak Diffie Hellman parameters to be used within ciphers for SFTP that are otherwise on our secure list.  This has the effect of making the cipher weaker than our normal threshold for security, but is required to support certain legacy or broken SSH and MFT clients.  Enabling this weakens security, but not nearly as much as enabling the full `sftp_insecure_ciphers` option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#sftp_insecure_diffie_hellman Site#sftp_insecure_diffie_hellman}
  */
  readonly sftpInsecureDiffieHellman?: boolean | cdktf.IResolvable;
  /**
  * Use user FTP roots also for SFTP?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#sftp_user_root_enabled Site#sftp_user_root_enabled}
  */
  readonly sftpUserRootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Allow bundle creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#sharing_enabled Site#sharing_enabled}
  */
  readonly sharingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Show request access link for users without access?  Currently unused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#show_request_access_link Site#show_request_access_link}
  */
  readonly showRequestAccessLink?: boolean | cdktf.IResolvable;
  /**
  * Show log in link in user notifications?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#show_user_notifications_log_in_link Site#show_user_notifications_log_in_link}
  */
  readonly showUserNotificationsLogInLink?: boolean | cdktf.IResolvable;
  /**
  * Custom site footer text for authenticated pages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#site_footer Site#site_footer}
  */
  readonly siteFooter?: string;
  /**
  * Custom site header text for authenticated pages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#site_header Site#site_header}
  */
  readonly siteHeader?: string;
  /**
  * Custom site footer text for public pages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#site_public_footer Site#site_public_footer}
  */
  readonly sitePublicFooter?: string;
  /**
  * Custom site header text for public pages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#site_public_header Site#site_public_header}
  */
  readonly sitePublicHeader?: string;
  /**
  * SMTP server hostname or IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#smtp_address Site#smtp_address}
  */
  readonly smtpAddress?: string;
  /**
  * SMTP server authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#smtp_authentication Site#smtp_authentication}
  */
  readonly smtpAuthentication?: string;
  /**
  * From address to use when mailing through custom SMTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#smtp_from Site#smtp_from}
  */
  readonly smtpFrom?: string;
  /**
  * SMTP server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#smtp_port Site#smtp_port}
  */
  readonly smtpPort?: number;
  /**
  * SMTP server username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#smtp_username Site#smtp_username}
  */
  readonly smtpUsername?: string;
  /**
  * Allow snapshot share links creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#snapshot_sharing_enabled Site#snapshot_sharing_enabled}
  */
  readonly snapshotSharingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Is SSL required?  Disabling this is insecure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#ssl_required Site#ssl_required}
  */
  readonly sslRequired?: boolean | cdktf.IResolvable;
  /**
  * Site subdomain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#subdomain Site#subdomain}
  */
  readonly subdomain?: string;
  /**
  * Do incoming emails in the Inboxes require checking for SPF/DKIM/DMARC?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#uploads_via_email_authentication Site#uploads_via_email_authentication}
  */
  readonly uploadsViaEmailAuthentication?: boolean | cdktf.IResolvable;
  /**
  * If using custom SMTP, should we use dedicated IPs to deliver emails?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#use_dedicated_ips_for_smtp Site#use_dedicated_ips_for_smtp}
  */
  readonly useDedicatedIpsForSmtp?: boolean | cdktf.IResolvable;
  /**
  * Allow uploaders to set `provided_modified_at` for uploaded files?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#use_provided_modified_at Site#use_provided_modified_at}
  */
  readonly useProvidedModifiedAt?: boolean | cdktf.IResolvable;
  /**
  * Will users be locked out after incorrect login attempts?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#user_lockout Site#user_lockout}
  */
  readonly userLockout?: boolean | cdktf.IResolvable;
  /**
  * How many hours to lock user out for failed password?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#user_lockout_lock_period Site#user_lockout_lock_period}
  */
  readonly userLockoutLockPeriod?: number;
  /**
  * Number of login tries within `user_lockout_within` hours before users are locked out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#user_lockout_tries Site#user_lockout_tries}
  */
  readonly userLockoutTries?: number;
  /**
  * Number of hours for user lockout window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#user_lockout_within Site#user_lockout_within}
  */
  readonly userLockoutWithin?: number;
  /**
  * Enable User Requests feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#user_requests_enabled Site#user_requests_enabled}
  */
  readonly userRequestsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Send email to site admins when a user request is received?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#user_requests_notify_admins Site#user_requests_notify_admins}
  */
  readonly userRequestsNotifyAdmins?: boolean | cdktf.IResolvable;
  /**
  * Allow users to create their own API keys?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#users_can_create_api_keys Site#users_can_create_api_keys}
  */
  readonly usersCanCreateApiKeys?: boolean | cdktf.IResolvable;
  /**
  * Allow users to create their own SSH keys?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#users_can_create_ssh_keys Site#users_can_create_ssh_keys}
  */
  readonly usersCanCreateSshKeys?: boolean | cdktf.IResolvable;
  /**
  * Custom text send in user welcome email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#welcome_custom_text Site#welcome_custom_text}
  */
  readonly welcomeCustomText?: string;
  /**
  * Include this email in welcome emails if enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#welcome_email_cc Site#welcome_email_cc}
  */
  readonly welcomeEmailCc?: string;
  /**
  * Will the welcome email be sent to new users?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#welcome_email_enabled Site#welcome_email_enabled}
  */
  readonly welcomeEmailEnabled?: boolean | cdktf.IResolvable;
  /**
  * Include this email subject in welcome emails if enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#welcome_email_subject Site#welcome_email_subject}
  */
  readonly welcomeEmailSubject?: string;
  /**
  * Does the welcome screen appear?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#welcome_screen Site#welcome_screen}
  */
  readonly welcomeScreen?: string;
  /**
  * Does FTP user Windows emulation mode?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#windows_mode_ftp Site#windows_mode_ftp}
  */
  readonly windowsModeFtp?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site files_site}
*/
export class Site extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Site resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Site to import
  * @param importFromId The id of the existing Site that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Site to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/site files_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SiteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'files_site',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.375'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeSftpHostKeyId = config.activeSftpHostKeyId;
    this._additionalTextFileTypes = config.additionalTextFileTypes;
    this._adminsBypassLockedSubfolders = config.adminsBypassLockedSubfolders;
    this._allowBundleNames = config.allowBundleNames;
    this._allowed2FaMethodBypassForFtpSftpDav = config.allowed2FaMethodBypassForFtpSftpDav;
    this._allowed2FaMethodEmail = config.allowed2FaMethodEmail;
    this._allowed2FaMethodSms = config.allowed2FaMethodSms;
    this._allowed2FaMethodStatic = config.allowed2FaMethodStatic;
    this._allowed2FaMethodTotp = config.allowed2FaMethodTotp;
    this._allowed2FaMethodWebauthn = config.allowed2FaMethodWebauthn;
    this._allowed2FaMethodYubi = config.allowed2FaMethodYubi;
    this._allowedCountries = config.allowedCountries;
    this._allowedIps = config.allowedIps;
    this._alwaysMkdirParents = config.alwaysMkdirParents;
    this._as2MessageRetentionDays = config.as2MessageRetentionDays;
    this._askAboutOverwrites = config.askAboutOverwrites;
    this._bundleActivityNotifications = config.bundleActivityNotifications;
    this._bundleExpiration = config.bundleExpiration;
    this._bundleNotFoundMessage = config.bundleNotFoundMessage;
    this._bundlePasswordRequired = config.bundlePasswordRequired;
    this._bundleRecipientBlacklistDomains = config.bundleRecipientBlacklistDomains;
    this._bundleRecipientBlacklistFreeEmailDomains = config.bundleRecipientBlacklistFreeEmailDomains;
    this._bundleRegistrationNotifications = config.bundleRegistrationNotifications;
    this._bundleRequireNote = config.bundleRequireNote;
    this._bundleRequireRegistration = config.bundleRequireRegistration;
    this._bundleRequireShareRecipient = config.bundleRequireShareRecipient;
    this._bundleSendSharedReceipts = config.bundleSendSharedReceipts;
    this._bundleUploadReceiptNotifications = config.bundleUploadReceiptNotifications;
    this._bundleWatermarkValue = config.bundleWatermarkValue;
    this._calculateFileChecksumsCrc32 = config.calculateFileChecksumsCrc32;
    this._calculateFileChecksumsMd5 = config.calculateFileChecksumsMd5;
    this._calculateFileChecksumsSha1 = config.calculateFileChecksumsSha1;
    this._calculateFileChecksumsSha256 = config.calculateFileChecksumsSha256;
    this._color2Left = config.color2Left;
    this._color2Link = config.color2Link;
    this._color2Text = config.color2Text;
    this._color2Top = config.color2Top;
    this._color2TopText = config.color2TopText;
    this._customNamespace = config.customNamespace;
    this._davEnabled = config.davEnabled;
    this._davUserRootEnabled = config.davUserRootEnabled;
    this._daysToRetainBackups = config.daysToRetainBackups;
    this._defaultTimeZone = config.defaultTimeZone;
    this._desktopApp = config.desktopApp;
    this._desktopAppSessionIpPinning = config.desktopAppSessionIpPinning;
    this._desktopAppSessionLifetime = config.desktopAppSessionLifetime;
    this._disableFilesCertificateGeneration = config.disableFilesCertificateGeneration;
    this._disablePasswordReset = config.disablePasswordReset;
    this._disallowedCountries = config.disallowedCountries;
    this._documentEditsInBundleAllowed = config.documentEditsInBundleAllowed;
    this._domain = config.domain;
    this._domainHstsHeader = config.domainHstsHeader;
    this._domainLetsencryptChain = config.domainLetsencryptChain;
    this._email = config.email;
    this._folderPermissionsGroupsOnly = config.folderPermissionsGroupsOnly;
    this._ftpEnabled = config.ftpEnabled;
    this._groupAdminsCanSetUserPassword = config.groupAdminsCanSetUserPassword;
    this._includePasswordInWelcomeEmail = config.includePasswordInWelcomeEmail;
    this._language = config.language;
    this._ldapBaseDn = config.ldapBaseDn;
    this._ldapDomain = config.ldapDomain;
    this._ldapEnabled = config.ldapEnabled;
    this._ldapGroupAction = config.ldapGroupAction;
    this._ldapGroupExclusion = config.ldapGroupExclusion;
    this._ldapGroupInclusion = config.ldapGroupInclusion;
    this._ldapHost = config.ldapHost;
    this._ldapHost2 = config.ldapHost2;
    this._ldapHost3 = config.ldapHost3;
    this._ldapPort = config.ldapPort;
    this._ldapSecure = config.ldapSecure;
    this._ldapType = config.ldapType;
    this._ldapUserAction = config.ldapUserAction;
    this._ldapUserIncludeGroups = config.ldapUserIncludeGroups;
    this._ldapUsername = config.ldapUsername;
    this._ldapUsernameField = config.ldapUsernameField;
    this._legacyChecksumsMode = config.legacyChecksumsMode;
    this._loginHelpText = config.loginHelpText;
    this._maxPriorPasswords = config.maxPriorPasswords;
    this._migrateRemoteServerSyncToSync = config.migrateRemoteServerSyncToSync;
    this._mobileApp = config.mobileApp;
    this._mobileAppSessionIpPinning = config.mobileAppSessionIpPinning;
    this._mobileAppSessionLifetime = config.mobileAppSessionLifetime;
    this._motdText = config.motdText;
    this._motdUseForFtp = config.motdUseForFtp;
    this._motdUseForSftp = config.motdUseForSftp;
    this._name = config.name;
    this._nonSsoGroupsAllowed = config.nonSsoGroupsAllowed;
    this._nonSsoUsersAllowed = config.nonSsoUsersAllowed;
    this._officeIntegrationAvailable = config.officeIntegrationAvailable;
    this._officeIntegrationType = config.officeIntegrationType;
    this._optOutGlobal = config.optOutGlobal;
    this._passwordMinLength = config.passwordMinLength;
    this._passwordRequireLetter = config.passwordRequireLetter;
    this._passwordRequireMixed = config.passwordRequireMixed;
    this._passwordRequireNumber = config.passwordRequireNumber;
    this._passwordRequireSpecial = config.passwordRequireSpecial;
    this._passwordRequireUnbreached = config.passwordRequireUnbreached;
    this._passwordRequirementsApplyToBundles = config.passwordRequirementsApplyToBundles;
    this._passwordValidityDays = config.passwordValidityDays;
    this._pinAllRemoteServersToSiteRegion = config.pinAllRemoteServersToSiteRegion;
    this._preventRootPermissionsForNonSiteAdmins = config.preventRootPermissionsForNonSiteAdmins;
    this._protocolAccessGroupsOnly = config.protocolAccessGroupsOnly;
    this._replyToEmail = config.replyToEmail;
    this._require2Fa = config.require2Fa;
    this._require2FaUserType = config.require2FaUserType;
    this._requireLogoutFromBundlesAndInboxes = config.requireLogoutFromBundlesAndInboxes;
    this._revokeBundleAccessOnDisableOrDelete = config.revokeBundleAccessOnDisableOrDelete;
    this._sessionExpiry = config.sessionExpiry;
    this._sessionExpiryMinutes = config.sessionExpiryMinutes;
    this._sftpEnabled = config.sftpEnabled;
    this._sftpHostKeyType = config.sftpHostKeyType;
    this._sftpInsecureCiphers = config.sftpInsecureCiphers;
    this._sftpInsecureDiffieHellman = config.sftpInsecureDiffieHellman;
    this._sftpUserRootEnabled = config.sftpUserRootEnabled;
    this._sharingEnabled = config.sharingEnabled;
    this._showRequestAccessLink = config.showRequestAccessLink;
    this._showUserNotificationsLogInLink = config.showUserNotificationsLogInLink;
    this._siteFooter = config.siteFooter;
    this._siteHeader = config.siteHeader;
    this._sitePublicFooter = config.sitePublicFooter;
    this._sitePublicHeader = config.sitePublicHeader;
    this._smtpAddress = config.smtpAddress;
    this._smtpAuthentication = config.smtpAuthentication;
    this._smtpFrom = config.smtpFrom;
    this._smtpPort = config.smtpPort;
    this._smtpUsername = config.smtpUsername;
    this._snapshotSharingEnabled = config.snapshotSharingEnabled;
    this._sslRequired = config.sslRequired;
    this._subdomain = config.subdomain;
    this._uploadsViaEmailAuthentication = config.uploadsViaEmailAuthentication;
    this._useDedicatedIpsForSmtp = config.useDedicatedIpsForSmtp;
    this._useProvidedModifiedAt = config.useProvidedModifiedAt;
    this._userLockout = config.userLockout;
    this._userLockoutLockPeriod = config.userLockoutLockPeriod;
    this._userLockoutTries = config.userLockoutTries;
    this._userLockoutWithin = config.userLockoutWithin;
    this._userRequestsEnabled = config.userRequestsEnabled;
    this._userRequestsNotifyAdmins = config.userRequestsNotifyAdmins;
    this._usersCanCreateApiKeys = config.usersCanCreateApiKeys;
    this._usersCanCreateSshKeys = config.usersCanCreateSshKeys;
    this._welcomeCustomText = config.welcomeCustomText;
    this._welcomeEmailCc = config.welcomeEmailCc;
    this._welcomeEmailEnabled = config.welcomeEmailEnabled;
    this._welcomeEmailSubject = config.welcomeEmailSubject;
    this._welcomeScreen = config.welcomeScreen;
    this._windowsModeFtp = config.windowsModeFtp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_sftp_host_key_id - computed: true, optional: true, required: false
  private _activeSftpHostKeyId?: number; 
  public get activeSftpHostKeyId() {
    return this.getNumberAttribute('active_sftp_host_key_id');
  }
  public set activeSftpHostKeyId(value: number) {
    this._activeSftpHostKeyId = value;
  }
  public resetActiveSftpHostKeyId() {
    this._activeSftpHostKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSftpHostKeyIdInput() {
    return this._activeSftpHostKeyId;
  }

  // additional_text_file_types - computed: true, optional: true, required: false
  private _additionalTextFileTypes?: string[]; 
  public get additionalTextFileTypes() {
    return this.getListAttribute('additional_text_file_types');
  }
  public set additionalTextFileTypes(value: string[]) {
    this._additionalTextFileTypes = value;
  }
  public resetAdditionalTextFileTypes() {
    this._additionalTextFileTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTextFileTypesInput() {
    return this._additionalTextFileTypes;
  }

  // admin_user_id - computed: true, optional: false, required: false
  public get adminUserId() {
    return this.getNumberAttribute('admin_user_id');
  }

  // admins_bypass_locked_subfolders - computed: true, optional: true, required: false
  private _adminsBypassLockedSubfolders?: boolean | cdktf.IResolvable; 
  public get adminsBypassLockedSubfolders() {
    return this.getBooleanAttribute('admins_bypass_locked_subfolders');
  }
  public set adminsBypassLockedSubfolders(value: boolean | cdktf.IResolvable) {
    this._adminsBypassLockedSubfolders = value;
  }
  public resetAdminsBypassLockedSubfolders() {
    this._adminsBypassLockedSubfolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminsBypassLockedSubfoldersInput() {
    return this._adminsBypassLockedSubfolders;
  }

  // allow_bundle_names - computed: true, optional: true, required: false
  private _allowBundleNames?: boolean | cdktf.IResolvable; 
  public get allowBundleNames() {
    return this.getBooleanAttribute('allow_bundle_names');
  }
  public set allowBundleNames(value: boolean | cdktf.IResolvable) {
    this._allowBundleNames = value;
  }
  public resetAllowBundleNames() {
    this._allowBundleNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBundleNamesInput() {
    return this._allowBundleNames;
  }

  // allowed_2fa_method_bypass_for_ftp_sftp_dav - computed: true, optional: true, required: false
  private _allowed2FaMethodBypassForFtpSftpDav?: boolean | cdktf.IResolvable; 
  public get allowed2FaMethodBypassForFtpSftpDav() {
    return this.getBooleanAttribute('allowed_2fa_method_bypass_for_ftp_sftp_dav');
  }
  public set allowed2FaMethodBypassForFtpSftpDav(value: boolean | cdktf.IResolvable) {
    this._allowed2FaMethodBypassForFtpSftpDav = value;
  }
  public resetAllowed2FaMethodBypassForFtpSftpDav() {
    this._allowed2FaMethodBypassForFtpSftpDav = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowed2FaMethodBypassForFtpSftpDavInput() {
    return this._allowed2FaMethodBypassForFtpSftpDav;
  }

  // allowed_2fa_method_email - computed: true, optional: true, required: false
  private _allowed2FaMethodEmail?: boolean | cdktf.IResolvable; 
  public get allowed2FaMethodEmail() {
    return this.getBooleanAttribute('allowed_2fa_method_email');
  }
  public set allowed2FaMethodEmail(value: boolean | cdktf.IResolvable) {
    this._allowed2FaMethodEmail = value;
  }
  public resetAllowed2FaMethodEmail() {
    this._allowed2FaMethodEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowed2FaMethodEmailInput() {
    return this._allowed2FaMethodEmail;
  }

  // allowed_2fa_method_sms - computed: true, optional: true, required: false
  private _allowed2FaMethodSms?: boolean | cdktf.IResolvable; 
  public get allowed2FaMethodSms() {
    return this.getBooleanAttribute('allowed_2fa_method_sms');
  }
  public set allowed2FaMethodSms(value: boolean | cdktf.IResolvable) {
    this._allowed2FaMethodSms = value;
  }
  public resetAllowed2FaMethodSms() {
    this._allowed2FaMethodSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowed2FaMethodSmsInput() {
    return this._allowed2FaMethodSms;
  }

  // allowed_2fa_method_static - computed: true, optional: true, required: false
  private _allowed2FaMethodStatic?: boolean | cdktf.IResolvable; 
  public get allowed2FaMethodStatic() {
    return this.getBooleanAttribute('allowed_2fa_method_static');
  }
  public set allowed2FaMethodStatic(value: boolean | cdktf.IResolvable) {
    this._allowed2FaMethodStatic = value;
  }
  public resetAllowed2FaMethodStatic() {
    this._allowed2FaMethodStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowed2FaMethodStaticInput() {
    return this._allowed2FaMethodStatic;
  }

  // allowed_2fa_method_totp - computed: true, optional: true, required: false
  private _allowed2FaMethodTotp?: boolean | cdktf.IResolvable; 
  public get allowed2FaMethodTotp() {
    return this.getBooleanAttribute('allowed_2fa_method_totp');
  }
  public set allowed2FaMethodTotp(value: boolean | cdktf.IResolvable) {
    this._allowed2FaMethodTotp = value;
  }
  public resetAllowed2FaMethodTotp() {
    this._allowed2FaMethodTotp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowed2FaMethodTotpInput() {
    return this._allowed2FaMethodTotp;
  }

  // allowed_2fa_method_webauthn - computed: true, optional: true, required: false
  private _allowed2FaMethodWebauthn?: boolean | cdktf.IResolvable; 
  public get allowed2FaMethodWebauthn() {
    return this.getBooleanAttribute('allowed_2fa_method_webauthn');
  }
  public set allowed2FaMethodWebauthn(value: boolean | cdktf.IResolvable) {
    this._allowed2FaMethodWebauthn = value;
  }
  public resetAllowed2FaMethodWebauthn() {
    this._allowed2FaMethodWebauthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowed2FaMethodWebauthnInput() {
    return this._allowed2FaMethodWebauthn;
  }

  // allowed_2fa_method_yubi - computed: true, optional: true, required: false
  private _allowed2FaMethodYubi?: boolean | cdktf.IResolvable; 
  public get allowed2FaMethodYubi() {
    return this.getBooleanAttribute('allowed_2fa_method_yubi');
  }
  public set allowed2FaMethodYubi(value: boolean | cdktf.IResolvable) {
    this._allowed2FaMethodYubi = value;
  }
  public resetAllowed2FaMethodYubi() {
    this._allowed2FaMethodYubi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowed2FaMethodYubiInput() {
    return this._allowed2FaMethodYubi;
  }

  // allowed_countries - computed: true, optional: true, required: false
  private _allowedCountries?: string; 
  public get allowedCountries() {
    return this.getStringAttribute('allowed_countries');
  }
  public set allowedCountries(value: string) {
    this._allowedCountries = value;
  }
  public resetAllowedCountries() {
    this._allowedCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCountriesInput() {
    return this._allowedCountries;
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

  // always_mkdir_parents - computed: true, optional: true, required: false
  private _alwaysMkdirParents?: boolean | cdktf.IResolvable; 
  public get alwaysMkdirParents() {
    return this.getBooleanAttribute('always_mkdir_parents');
  }
  public set alwaysMkdirParents(value: boolean | cdktf.IResolvable) {
    this._alwaysMkdirParents = value;
  }
  public resetAlwaysMkdirParents() {
    this._alwaysMkdirParents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysMkdirParentsInput() {
    return this._alwaysMkdirParents;
  }

  // as2_message_retention_days - computed: true, optional: true, required: false
  private _as2MessageRetentionDays?: number; 
  public get as2MessageRetentionDays() {
    return this.getNumberAttribute('as2_message_retention_days');
  }
  public set as2MessageRetentionDays(value: number) {
    this._as2MessageRetentionDays = value;
  }
  public resetAs2MessageRetentionDays() {
    this._as2MessageRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get as2MessageRetentionDaysInput() {
    return this._as2MessageRetentionDays;
  }

  // ask_about_overwrites - computed: true, optional: true, required: false
  private _askAboutOverwrites?: boolean | cdktf.IResolvable; 
  public get askAboutOverwrites() {
    return this.getBooleanAttribute('ask_about_overwrites');
  }
  public set askAboutOverwrites(value: boolean | cdktf.IResolvable) {
    this._askAboutOverwrites = value;
  }
  public resetAskAboutOverwrites() {
    this._askAboutOverwrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get askAboutOverwritesInput() {
    return this._askAboutOverwrites;
  }

  // bundle_activity_notifications - computed: true, optional: true, required: false
  private _bundleActivityNotifications?: string; 
  public get bundleActivityNotifications() {
    return this.getStringAttribute('bundle_activity_notifications');
  }
  public set bundleActivityNotifications(value: string) {
    this._bundleActivityNotifications = value;
  }
  public resetBundleActivityNotifications() {
    this._bundleActivityNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleActivityNotificationsInput() {
    return this._bundleActivityNotifications;
  }

  // bundle_expiration - computed: true, optional: true, required: false
  private _bundleExpiration?: number; 
  public get bundleExpiration() {
    return this.getNumberAttribute('bundle_expiration');
  }
  public set bundleExpiration(value: number) {
    this._bundleExpiration = value;
  }
  public resetBundleExpiration() {
    this._bundleExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleExpirationInput() {
    return this._bundleExpiration;
  }

  // bundle_not_found_message - computed: true, optional: true, required: false
  private _bundleNotFoundMessage?: string; 
  public get bundleNotFoundMessage() {
    return this.getStringAttribute('bundle_not_found_message');
  }
  public set bundleNotFoundMessage(value: string) {
    this._bundleNotFoundMessage = value;
  }
  public resetBundleNotFoundMessage() {
    this._bundleNotFoundMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleNotFoundMessageInput() {
    return this._bundleNotFoundMessage;
  }

  // bundle_password_required - computed: true, optional: true, required: false
  private _bundlePasswordRequired?: boolean | cdktf.IResolvable; 
  public get bundlePasswordRequired() {
    return this.getBooleanAttribute('bundle_password_required');
  }
  public set bundlePasswordRequired(value: boolean | cdktf.IResolvable) {
    this._bundlePasswordRequired = value;
  }
  public resetBundlePasswordRequired() {
    this._bundlePasswordRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundlePasswordRequiredInput() {
    return this._bundlePasswordRequired;
  }

  // bundle_recipient_blacklist_domains - computed: true, optional: true, required: false
  private _bundleRecipientBlacklistDomains?: string[]; 
  public get bundleRecipientBlacklistDomains() {
    return this.getListAttribute('bundle_recipient_blacklist_domains');
  }
  public set bundleRecipientBlacklistDomains(value: string[]) {
    this._bundleRecipientBlacklistDomains = value;
  }
  public resetBundleRecipientBlacklistDomains() {
    this._bundleRecipientBlacklistDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleRecipientBlacklistDomainsInput() {
    return this._bundleRecipientBlacklistDomains;
  }

  // bundle_recipient_blacklist_free_email_domains - computed: true, optional: true, required: false
  private _bundleRecipientBlacklistFreeEmailDomains?: boolean | cdktf.IResolvable; 
  public get bundleRecipientBlacklistFreeEmailDomains() {
    return this.getBooleanAttribute('bundle_recipient_blacklist_free_email_domains');
  }
  public set bundleRecipientBlacklistFreeEmailDomains(value: boolean | cdktf.IResolvable) {
    this._bundleRecipientBlacklistFreeEmailDomains = value;
  }
  public resetBundleRecipientBlacklistFreeEmailDomains() {
    this._bundleRecipientBlacklistFreeEmailDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleRecipientBlacklistFreeEmailDomainsInput() {
    return this._bundleRecipientBlacklistFreeEmailDomains;
  }

  // bundle_registration_notifications - computed: true, optional: true, required: false
  private _bundleRegistrationNotifications?: string; 
  public get bundleRegistrationNotifications() {
    return this.getStringAttribute('bundle_registration_notifications');
  }
  public set bundleRegistrationNotifications(value: string) {
    this._bundleRegistrationNotifications = value;
  }
  public resetBundleRegistrationNotifications() {
    this._bundleRegistrationNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleRegistrationNotificationsInput() {
    return this._bundleRegistrationNotifications;
  }

  // bundle_require_note - computed: true, optional: true, required: false
  private _bundleRequireNote?: boolean | cdktf.IResolvable; 
  public get bundleRequireNote() {
    return this.getBooleanAttribute('bundle_require_note');
  }
  public set bundleRequireNote(value: boolean | cdktf.IResolvable) {
    this._bundleRequireNote = value;
  }
  public resetBundleRequireNote() {
    this._bundleRequireNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleRequireNoteInput() {
    return this._bundleRequireNote;
  }

  // bundle_require_registration - computed: true, optional: true, required: false
  private _bundleRequireRegistration?: boolean | cdktf.IResolvable; 
  public get bundleRequireRegistration() {
    return this.getBooleanAttribute('bundle_require_registration');
  }
  public set bundleRequireRegistration(value: boolean | cdktf.IResolvable) {
    this._bundleRequireRegistration = value;
  }
  public resetBundleRequireRegistration() {
    this._bundleRequireRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleRequireRegistrationInput() {
    return this._bundleRequireRegistration;
  }

  // bundle_require_share_recipient - computed: true, optional: true, required: false
  private _bundleRequireShareRecipient?: boolean | cdktf.IResolvable; 
  public get bundleRequireShareRecipient() {
    return this.getBooleanAttribute('bundle_require_share_recipient');
  }
  public set bundleRequireShareRecipient(value: boolean | cdktf.IResolvable) {
    this._bundleRequireShareRecipient = value;
  }
  public resetBundleRequireShareRecipient() {
    this._bundleRequireShareRecipient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleRequireShareRecipientInput() {
    return this._bundleRequireShareRecipient;
  }

  // bundle_send_shared_receipts - computed: true, optional: true, required: false
  private _bundleSendSharedReceipts?: boolean | cdktf.IResolvable; 
  public get bundleSendSharedReceipts() {
    return this.getBooleanAttribute('bundle_send_shared_receipts');
  }
  public set bundleSendSharedReceipts(value: boolean | cdktf.IResolvable) {
    this._bundleSendSharedReceipts = value;
  }
  public resetBundleSendSharedReceipts() {
    this._bundleSendSharedReceipts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleSendSharedReceiptsInput() {
    return this._bundleSendSharedReceipts;
  }

  // bundle_upload_receipt_notifications - computed: true, optional: true, required: false
  private _bundleUploadReceiptNotifications?: string; 
  public get bundleUploadReceiptNotifications() {
    return this.getStringAttribute('bundle_upload_receipt_notifications');
  }
  public set bundleUploadReceiptNotifications(value: string) {
    this._bundleUploadReceiptNotifications = value;
  }
  public resetBundleUploadReceiptNotifications() {
    this._bundleUploadReceiptNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleUploadReceiptNotificationsInput() {
    return this._bundleUploadReceiptNotifications;
  }

  // bundle_watermark_attachment - computed: true, optional: false, required: false
  public get bundleWatermarkAttachment() {
    return this.getStringAttribute('bundle_watermark_attachment');
  }

  // bundle_watermark_value - computed: true, optional: true, required: false
  private _bundleWatermarkValue?: { [key: string]: any }; 
  public get bundleWatermarkValue() {
    return this.getAnyMapAttribute('bundle_watermark_value');
  }
  public set bundleWatermarkValue(value: { [key: string]: any }) {
    this._bundleWatermarkValue = value;
  }
  public resetBundleWatermarkValue() {
    this._bundleWatermarkValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleWatermarkValueInput() {
    return this._bundleWatermarkValue;
  }

  // calculate_file_checksums_crc32 - computed: true, optional: true, required: false
  private _calculateFileChecksumsCrc32?: boolean | cdktf.IResolvable; 
  public get calculateFileChecksumsCrc32() {
    return this.getBooleanAttribute('calculate_file_checksums_crc32');
  }
  public set calculateFileChecksumsCrc32(value: boolean | cdktf.IResolvable) {
    this._calculateFileChecksumsCrc32 = value;
  }
  public resetCalculateFileChecksumsCrc32() {
    this._calculateFileChecksumsCrc32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculateFileChecksumsCrc32Input() {
    return this._calculateFileChecksumsCrc32;
  }

  // calculate_file_checksums_md5 - computed: true, optional: true, required: false
  private _calculateFileChecksumsMd5?: boolean | cdktf.IResolvable; 
  public get calculateFileChecksumsMd5() {
    return this.getBooleanAttribute('calculate_file_checksums_md5');
  }
  public set calculateFileChecksumsMd5(value: boolean | cdktf.IResolvable) {
    this._calculateFileChecksumsMd5 = value;
  }
  public resetCalculateFileChecksumsMd5() {
    this._calculateFileChecksumsMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculateFileChecksumsMd5Input() {
    return this._calculateFileChecksumsMd5;
  }

  // calculate_file_checksums_sha1 - computed: true, optional: true, required: false
  private _calculateFileChecksumsSha1?: boolean | cdktf.IResolvable; 
  public get calculateFileChecksumsSha1() {
    return this.getBooleanAttribute('calculate_file_checksums_sha1');
  }
  public set calculateFileChecksumsSha1(value: boolean | cdktf.IResolvable) {
    this._calculateFileChecksumsSha1 = value;
  }
  public resetCalculateFileChecksumsSha1() {
    this._calculateFileChecksumsSha1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculateFileChecksumsSha1Input() {
    return this._calculateFileChecksumsSha1;
  }

  // calculate_file_checksums_sha256 - computed: true, optional: true, required: false
  private _calculateFileChecksumsSha256?: boolean | cdktf.IResolvable; 
  public get calculateFileChecksumsSha256() {
    return this.getBooleanAttribute('calculate_file_checksums_sha256');
  }
  public set calculateFileChecksumsSha256(value: boolean | cdktf.IResolvable) {
    this._calculateFileChecksumsSha256 = value;
  }
  public resetCalculateFileChecksumsSha256() {
    this._calculateFileChecksumsSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculateFileChecksumsSha256Input() {
    return this._calculateFileChecksumsSha256;
  }

  // color2_left - computed: true, optional: true, required: false
  private _color2Left?: string; 
  public get color2Left() {
    return this.getStringAttribute('color2_left');
  }
  public set color2Left(value: string) {
    this._color2Left = value;
  }
  public resetColor2Left() {
    this._color2Left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get color2LeftInput() {
    return this._color2Left;
  }

  // color2_link - computed: true, optional: true, required: false
  private _color2Link?: string; 
  public get color2Link() {
    return this.getStringAttribute('color2_link');
  }
  public set color2Link(value: string) {
    this._color2Link = value;
  }
  public resetColor2Link() {
    this._color2Link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get color2LinkInput() {
    return this._color2Link;
  }

  // color2_text - computed: true, optional: true, required: false
  private _color2Text?: string; 
  public get color2Text() {
    return this.getStringAttribute('color2_text');
  }
  public set color2Text(value: string) {
    this._color2Text = value;
  }
  public resetColor2Text() {
    this._color2Text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get color2TextInput() {
    return this._color2Text;
  }

  // color2_top - computed: true, optional: true, required: false
  private _color2Top?: string; 
  public get color2Top() {
    return this.getStringAttribute('color2_top');
  }
  public set color2Top(value: string) {
    this._color2Top = value;
  }
  public resetColor2Top() {
    this._color2Top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get color2TopInput() {
    return this._color2Top;
  }

  // color2_top_text - computed: true, optional: true, required: false
  private _color2TopText?: string; 
  public get color2TopText() {
    return this.getStringAttribute('color2_top_text');
  }
  public set color2TopText(value: string) {
    this._color2TopText = value;
  }
  public resetColor2TopText() {
    this._color2TopText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get color2TopTextInput() {
    return this._color2TopText;
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

  // custom_namespace - computed: true, optional: true, required: false
  private _customNamespace?: boolean | cdktf.IResolvable; 
  public get customNamespace() {
    return this.getBooleanAttribute('custom_namespace');
  }
  public set customNamespace(value: boolean | cdktf.IResolvable) {
    this._customNamespace = value;
  }
  public resetCustomNamespace() {
    this._customNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNamespaceInput() {
    return this._customNamespace;
  }

  // dav_enabled - computed: true, optional: true, required: false
  private _davEnabled?: boolean | cdktf.IResolvable; 
  public get davEnabled() {
    return this.getBooleanAttribute('dav_enabled');
  }
  public set davEnabled(value: boolean | cdktf.IResolvable) {
    this._davEnabled = value;
  }
  public resetDavEnabled() {
    this._davEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davEnabledInput() {
    return this._davEnabled;
  }

  // dav_user_root_enabled - computed: true, optional: true, required: false
  private _davUserRootEnabled?: boolean | cdktf.IResolvable; 
  public get davUserRootEnabled() {
    return this.getBooleanAttribute('dav_user_root_enabled');
  }
  public set davUserRootEnabled(value: boolean | cdktf.IResolvable) {
    this._davUserRootEnabled = value;
  }
  public resetDavUserRootEnabled() {
    this._davUserRootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davUserRootEnabledInput() {
    return this._davUserRootEnabled;
  }

  // days_to_retain_backups - computed: true, optional: true, required: false
  private _daysToRetainBackups?: number; 
  public get daysToRetainBackups() {
    return this.getNumberAttribute('days_to_retain_backups');
  }
  public set daysToRetainBackups(value: number) {
    this._daysToRetainBackups = value;
  }
  public resetDaysToRetainBackups() {
    this._daysToRetainBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysToRetainBackupsInput() {
    return this._daysToRetainBackups;
  }

  // default_time_zone - computed: true, optional: true, required: false
  private _defaultTimeZone?: string; 
  public get defaultTimeZone() {
    return this.getStringAttribute('default_time_zone');
  }
  public set defaultTimeZone(value: string) {
    this._defaultTimeZone = value;
  }
  public resetDefaultTimeZone() {
    this._defaultTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeZoneInput() {
    return this._defaultTimeZone;
  }

  // desktop_app - computed: true, optional: true, required: false
  private _desktopApp?: boolean | cdktf.IResolvable; 
  public get desktopApp() {
    return this.getBooleanAttribute('desktop_app');
  }
  public set desktopApp(value: boolean | cdktf.IResolvable) {
    this._desktopApp = value;
  }
  public resetDesktopApp() {
    this._desktopApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopAppInput() {
    return this._desktopApp;
  }

  // desktop_app_session_ip_pinning - computed: true, optional: true, required: false
  private _desktopAppSessionIpPinning?: boolean | cdktf.IResolvable; 
  public get desktopAppSessionIpPinning() {
    return this.getBooleanAttribute('desktop_app_session_ip_pinning');
  }
  public set desktopAppSessionIpPinning(value: boolean | cdktf.IResolvable) {
    this._desktopAppSessionIpPinning = value;
  }
  public resetDesktopAppSessionIpPinning() {
    this._desktopAppSessionIpPinning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopAppSessionIpPinningInput() {
    return this._desktopAppSessionIpPinning;
  }

  // desktop_app_session_lifetime - computed: true, optional: true, required: false
  private _desktopAppSessionLifetime?: number; 
  public get desktopAppSessionLifetime() {
    return this.getNumberAttribute('desktop_app_session_lifetime');
  }
  public set desktopAppSessionLifetime(value: number) {
    this._desktopAppSessionLifetime = value;
  }
  public resetDesktopAppSessionLifetime() {
    this._desktopAppSessionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopAppSessionLifetimeInput() {
    return this._desktopAppSessionLifetime;
  }

  // disable_files_certificate_generation - computed: true, optional: true, required: false
  private _disableFilesCertificateGeneration?: boolean | cdktf.IResolvable; 
  public get disableFilesCertificateGeneration() {
    return this.getBooleanAttribute('disable_files_certificate_generation');
  }
  public set disableFilesCertificateGeneration(value: boolean | cdktf.IResolvable) {
    this._disableFilesCertificateGeneration = value;
  }
  public resetDisableFilesCertificateGeneration() {
    this._disableFilesCertificateGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFilesCertificateGenerationInput() {
    return this._disableFilesCertificateGeneration;
  }

  // disable_notifications - computed: true, optional: false, required: false
  public get disableNotifications() {
    return this.getBooleanAttribute('disable_notifications');
  }

  // disable_password_reset - computed: true, optional: true, required: false
  private _disablePasswordReset?: boolean | cdktf.IResolvable; 
  public get disablePasswordReset() {
    return this.getBooleanAttribute('disable_password_reset');
  }
  public set disablePasswordReset(value: boolean | cdktf.IResolvable) {
    this._disablePasswordReset = value;
  }
  public resetDisablePasswordReset() {
    this._disablePasswordReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasswordResetInput() {
    return this._disablePasswordReset;
  }

  // disallowed_countries - computed: true, optional: true, required: false
  private _disallowedCountries?: string; 
  public get disallowedCountries() {
    return this.getStringAttribute('disallowed_countries');
  }
  public set disallowedCountries(value: string) {
    this._disallowedCountries = value;
  }
  public resetDisallowedCountries() {
    this._disallowedCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedCountriesInput() {
    return this._disallowedCountries;
  }

  // document_edits_in_bundle_allowed - computed: true, optional: true, required: false
  private _documentEditsInBundleAllowed?: boolean | cdktf.IResolvable; 
  public get documentEditsInBundleAllowed() {
    return this.getBooleanAttribute('document_edits_in_bundle_allowed');
  }
  public set documentEditsInBundleAllowed(value: boolean | cdktf.IResolvable) {
    this._documentEditsInBundleAllowed = value;
  }
  public resetDocumentEditsInBundleAllowed() {
    this._documentEditsInBundleAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentEditsInBundleAllowedInput() {
    return this._documentEditsInBundleAllowed;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_hsts_header - computed: true, optional: true, required: false
  private _domainHstsHeader?: boolean | cdktf.IResolvable; 
  public get domainHstsHeader() {
    return this.getBooleanAttribute('domain_hsts_header');
  }
  public set domainHstsHeader(value: boolean | cdktf.IResolvable) {
    this._domainHstsHeader = value;
  }
  public resetDomainHstsHeader() {
    this._domainHstsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainHstsHeaderInput() {
    return this._domainHstsHeader;
  }

  // domain_letsencrypt_chain - computed: true, optional: true, required: false
  private _domainLetsencryptChain?: string; 
  public get domainLetsencryptChain() {
    return this.getStringAttribute('domain_letsencrypt_chain');
  }
  public set domainLetsencryptChain(value: string) {
    this._domainLetsencryptChain = value;
  }
  public resetDomainLetsencryptChain() {
    this._domainLetsencryptChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainLetsencryptChainInput() {
    return this._domainLetsencryptChain;
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

  // folder_permissions_groups_only - computed: true, optional: true, required: false
  private _folderPermissionsGroupsOnly?: boolean | cdktf.IResolvable; 
  public get folderPermissionsGroupsOnly() {
    return this.getBooleanAttribute('folder_permissions_groups_only');
  }
  public set folderPermissionsGroupsOnly(value: boolean | cdktf.IResolvable) {
    this._folderPermissionsGroupsOnly = value;
  }
  public resetFolderPermissionsGroupsOnly() {
    this._folderPermissionsGroupsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPermissionsGroupsOnlyInput() {
    return this._folderPermissionsGroupsOnly;
  }

  // ftp_enabled - computed: true, optional: true, required: false
  private _ftpEnabled?: boolean | cdktf.IResolvable; 
  public get ftpEnabled() {
    return this.getBooleanAttribute('ftp_enabled');
  }
  public set ftpEnabled(value: boolean | cdktf.IResolvable) {
    this._ftpEnabled = value;
  }
  public resetFtpEnabled() {
    this._ftpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpEnabledInput() {
    return this._ftpEnabled;
  }

  // group_admins_can_set_user_password - computed: true, optional: true, required: false
  private _groupAdminsCanSetUserPassword?: boolean | cdktf.IResolvable; 
  public get groupAdminsCanSetUserPassword() {
    return this.getBooleanAttribute('group_admins_can_set_user_password');
  }
  public set groupAdminsCanSetUserPassword(value: boolean | cdktf.IResolvable) {
    this._groupAdminsCanSetUserPassword = value;
  }
  public resetGroupAdminsCanSetUserPassword() {
    this._groupAdminsCanSetUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAdminsCanSetUserPasswordInput() {
    return this._groupAdminsCanSetUserPassword;
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

  // include_password_in_welcome_email - computed: true, optional: true, required: false
  private _includePasswordInWelcomeEmail?: boolean | cdktf.IResolvable; 
  public get includePasswordInWelcomeEmail() {
    return this.getBooleanAttribute('include_password_in_welcome_email');
  }
  public set includePasswordInWelcomeEmail(value: boolean | cdktf.IResolvable) {
    this._includePasswordInWelcomeEmail = value;
  }
  public resetIncludePasswordInWelcomeEmail() {
    this._includePasswordInWelcomeEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePasswordInWelcomeEmailInput() {
    return this._includePasswordInWelcomeEmail;
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

  // ldap_base_dn - computed: true, optional: true, required: false
  private _ldapBaseDn?: string; 
  public get ldapBaseDn() {
    return this.getStringAttribute('ldap_base_dn');
  }
  public set ldapBaseDn(value: string) {
    this._ldapBaseDn = value;
  }
  public resetLdapBaseDn() {
    this._ldapBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBaseDnInput() {
    return this._ldapBaseDn;
  }

  // ldap_domain - computed: true, optional: true, required: false
  private _ldapDomain?: string; 
  public get ldapDomain() {
    return this.getStringAttribute('ldap_domain');
  }
  public set ldapDomain(value: string) {
    this._ldapDomain = value;
  }
  public resetLdapDomain() {
    this._ldapDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapDomainInput() {
    return this._ldapDomain;
  }

  // ldap_enabled - computed: true, optional: true, required: false
  private _ldapEnabled?: boolean | cdktf.IResolvable; 
  public get ldapEnabled() {
    return this.getBooleanAttribute('ldap_enabled');
  }
  public set ldapEnabled(value: boolean | cdktf.IResolvable) {
    this._ldapEnabled = value;
  }
  public resetLdapEnabled() {
    this._ldapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapEnabledInput() {
    return this._ldapEnabled;
  }

  // ldap_group_action - computed: true, optional: true, required: false
  private _ldapGroupAction?: string; 
  public get ldapGroupAction() {
    return this.getStringAttribute('ldap_group_action');
  }
  public set ldapGroupAction(value: string) {
    this._ldapGroupAction = value;
  }
  public resetLdapGroupAction() {
    this._ldapGroupAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupActionInput() {
    return this._ldapGroupAction;
  }

  // ldap_group_exclusion - computed: true, optional: true, required: false
  private _ldapGroupExclusion?: string; 
  public get ldapGroupExclusion() {
    return this.getStringAttribute('ldap_group_exclusion');
  }
  public set ldapGroupExclusion(value: string) {
    this._ldapGroupExclusion = value;
  }
  public resetLdapGroupExclusion() {
    this._ldapGroupExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupExclusionInput() {
    return this._ldapGroupExclusion;
  }

  // ldap_group_inclusion - computed: true, optional: true, required: false
  private _ldapGroupInclusion?: string; 
  public get ldapGroupInclusion() {
    return this.getStringAttribute('ldap_group_inclusion');
  }
  public set ldapGroupInclusion(value: string) {
    this._ldapGroupInclusion = value;
  }
  public resetLdapGroupInclusion() {
    this._ldapGroupInclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupInclusionInput() {
    return this._ldapGroupInclusion;
  }

  // ldap_host - computed: true, optional: true, required: false
  private _ldapHost?: string; 
  public get ldapHost() {
    return this.getStringAttribute('ldap_host');
  }
  public set ldapHost(value: string) {
    this._ldapHost = value;
  }
  public resetLdapHost() {
    this._ldapHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapHostInput() {
    return this._ldapHost;
  }

  // ldap_host_2 - computed: true, optional: true, required: false
  private _ldapHost2?: string; 
  public get ldapHost2() {
    return this.getStringAttribute('ldap_host_2');
  }
  public set ldapHost2(value: string) {
    this._ldapHost2 = value;
  }
  public resetLdapHost2() {
    this._ldapHost2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapHost2Input() {
    return this._ldapHost2;
  }

  // ldap_host_3 - computed: true, optional: true, required: false
  private _ldapHost3?: string; 
  public get ldapHost3() {
    return this.getStringAttribute('ldap_host_3');
  }
  public set ldapHost3(value: string) {
    this._ldapHost3 = value;
  }
  public resetLdapHost3() {
    this._ldapHost3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapHost3Input() {
    return this._ldapHost3;
  }

  // ldap_port - computed: true, optional: true, required: false
  private _ldapPort?: number; 
  public get ldapPort() {
    return this.getNumberAttribute('ldap_port');
  }
  public set ldapPort(value: number) {
    this._ldapPort = value;
  }
  public resetLdapPort() {
    this._ldapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPortInput() {
    return this._ldapPort;
  }

  // ldap_secure - computed: true, optional: true, required: false
  private _ldapSecure?: boolean | cdktf.IResolvable; 
  public get ldapSecure() {
    return this.getBooleanAttribute('ldap_secure');
  }
  public set ldapSecure(value: boolean | cdktf.IResolvable) {
    this._ldapSecure = value;
  }
  public resetLdapSecure() {
    this._ldapSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSecureInput() {
    return this._ldapSecure;
  }

  // ldap_type - computed: true, optional: true, required: false
  private _ldapType?: string; 
  public get ldapType() {
    return this.getStringAttribute('ldap_type');
  }
  public set ldapType(value: string) {
    this._ldapType = value;
  }
  public resetLdapType() {
    this._ldapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapTypeInput() {
    return this._ldapType;
  }

  // ldap_user_action - computed: true, optional: true, required: false
  private _ldapUserAction?: string; 
  public get ldapUserAction() {
    return this.getStringAttribute('ldap_user_action');
  }
  public set ldapUserAction(value: string) {
    this._ldapUserAction = value;
  }
  public resetLdapUserAction() {
    this._ldapUserAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUserActionInput() {
    return this._ldapUserAction;
  }

  // ldap_user_include_groups - computed: true, optional: true, required: false
  private _ldapUserIncludeGroups?: string; 
  public get ldapUserIncludeGroups() {
    return this.getStringAttribute('ldap_user_include_groups');
  }
  public set ldapUserIncludeGroups(value: string) {
    this._ldapUserIncludeGroups = value;
  }
  public resetLdapUserIncludeGroups() {
    this._ldapUserIncludeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUserIncludeGroupsInput() {
    return this._ldapUserIncludeGroups;
  }

  // ldap_username - computed: true, optional: true, required: false
  private _ldapUsername?: string; 
  public get ldapUsername() {
    return this.getStringAttribute('ldap_username');
  }
  public set ldapUsername(value: string) {
    this._ldapUsername = value;
  }
  public resetLdapUsername() {
    this._ldapUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUsernameInput() {
    return this._ldapUsername;
  }

  // ldap_username_field - computed: true, optional: true, required: false
  private _ldapUsernameField?: string; 
  public get ldapUsernameField() {
    return this.getStringAttribute('ldap_username_field');
  }
  public set ldapUsernameField(value: string) {
    this._ldapUsernameField = value;
  }
  public resetLdapUsernameField() {
    this._ldapUsernameField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUsernameFieldInput() {
    return this._ldapUsernameField;
  }

  // legacy_checksums_mode - computed: true, optional: true, required: false
  private _legacyChecksumsMode?: boolean | cdktf.IResolvable; 
  public get legacyChecksumsMode() {
    return this.getBooleanAttribute('legacy_checksums_mode');
  }
  public set legacyChecksumsMode(value: boolean | cdktf.IResolvable) {
    this._legacyChecksumsMode = value;
  }
  public resetLegacyChecksumsMode() {
    this._legacyChecksumsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyChecksumsModeInput() {
    return this._legacyChecksumsMode;
  }

  // login_help_text - computed: true, optional: true, required: false
  private _loginHelpText?: string; 
  public get loginHelpText() {
    return this.getStringAttribute('login_help_text');
  }
  public set loginHelpText(value: string) {
    this._loginHelpText = value;
  }
  public resetLoginHelpText() {
    this._loginHelpText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginHelpTextInput() {
    return this._loginHelpText;
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

  // max_prior_passwords - computed: true, optional: true, required: false
  private _maxPriorPasswords?: number; 
  public get maxPriorPasswords() {
    return this.getNumberAttribute('max_prior_passwords');
  }
  public set maxPriorPasswords(value: number) {
    this._maxPriorPasswords = value;
  }
  public resetMaxPriorPasswords() {
    this._maxPriorPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriorPasswordsInput() {
    return this._maxPriorPasswords;
  }

  // migrate_remote_server_sync_to_sync - computed: true, optional: true, required: false
  private _migrateRemoteServerSyncToSync?: boolean | cdktf.IResolvable; 
  public get migrateRemoteServerSyncToSync() {
    return this.getBooleanAttribute('migrate_remote_server_sync_to_sync');
  }
  public set migrateRemoteServerSyncToSync(value: boolean | cdktf.IResolvable) {
    this._migrateRemoteServerSyncToSync = value;
  }
  public resetMigrateRemoteServerSyncToSync() {
    this._migrateRemoteServerSyncToSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateRemoteServerSyncToSyncInput() {
    return this._migrateRemoteServerSyncToSync;
  }

  // mobile_app - computed: true, optional: true, required: false
  private _mobileApp?: boolean | cdktf.IResolvable; 
  public get mobileApp() {
    return this.getBooleanAttribute('mobile_app');
  }
  public set mobileApp(value: boolean | cdktf.IResolvable) {
    this._mobileApp = value;
  }
  public resetMobileApp() {
    this._mobileApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileAppInput() {
    return this._mobileApp;
  }

  // mobile_app_session_ip_pinning - computed: true, optional: true, required: false
  private _mobileAppSessionIpPinning?: boolean | cdktf.IResolvable; 
  public get mobileAppSessionIpPinning() {
    return this.getBooleanAttribute('mobile_app_session_ip_pinning');
  }
  public set mobileAppSessionIpPinning(value: boolean | cdktf.IResolvable) {
    this._mobileAppSessionIpPinning = value;
  }
  public resetMobileAppSessionIpPinning() {
    this._mobileAppSessionIpPinning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileAppSessionIpPinningInput() {
    return this._mobileAppSessionIpPinning;
  }

  // mobile_app_session_lifetime - computed: true, optional: true, required: false
  private _mobileAppSessionLifetime?: number; 
  public get mobileAppSessionLifetime() {
    return this.getNumberAttribute('mobile_app_session_lifetime');
  }
  public set mobileAppSessionLifetime(value: number) {
    this._mobileAppSessionLifetime = value;
  }
  public resetMobileAppSessionLifetime() {
    this._mobileAppSessionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileAppSessionLifetimeInput() {
    return this._mobileAppSessionLifetime;
  }

  // motd_text - computed: true, optional: true, required: false
  private _motdText?: string; 
  public get motdText() {
    return this.getStringAttribute('motd_text');
  }
  public set motdText(value: string) {
    this._motdText = value;
  }
  public resetMotdText() {
    this._motdText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdTextInput() {
    return this._motdText;
  }

  // motd_use_for_ftp - computed: true, optional: true, required: false
  private _motdUseForFtp?: boolean | cdktf.IResolvable; 
  public get motdUseForFtp() {
    return this.getBooleanAttribute('motd_use_for_ftp');
  }
  public set motdUseForFtp(value: boolean | cdktf.IResolvable) {
    this._motdUseForFtp = value;
  }
  public resetMotdUseForFtp() {
    this._motdUseForFtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdUseForFtpInput() {
    return this._motdUseForFtp;
  }

  // motd_use_for_sftp - computed: true, optional: true, required: false
  private _motdUseForSftp?: boolean | cdktf.IResolvable; 
  public get motdUseForSftp() {
    return this.getBooleanAttribute('motd_use_for_sftp');
  }
  public set motdUseForSftp(value: boolean | cdktf.IResolvable) {
    this._motdUseForSftp = value;
  }
  public resetMotdUseForSftp() {
    this._motdUseForSftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdUseForSftpInput() {
    return this._motdUseForSftp;
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

  // next_billing_amount - computed: true, optional: false, required: false
  public get nextBillingAmount() {
    return this.getStringAttribute('next_billing_amount');
  }

  // next_billing_date - computed: true, optional: false, required: false
  public get nextBillingDate() {
    return this.getStringAttribute('next_billing_date');
  }

  // non_sso_groups_allowed - computed: true, optional: true, required: false
  private _nonSsoGroupsAllowed?: boolean | cdktf.IResolvable; 
  public get nonSsoGroupsAllowed() {
    return this.getBooleanAttribute('non_sso_groups_allowed');
  }
  public set nonSsoGroupsAllowed(value: boolean | cdktf.IResolvable) {
    this._nonSsoGroupsAllowed = value;
  }
  public resetNonSsoGroupsAllowed() {
    this._nonSsoGroupsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSsoGroupsAllowedInput() {
    return this._nonSsoGroupsAllowed;
  }

  // non_sso_users_allowed - computed: true, optional: true, required: false
  private _nonSsoUsersAllowed?: boolean | cdktf.IResolvable; 
  public get nonSsoUsersAllowed() {
    return this.getBooleanAttribute('non_sso_users_allowed');
  }
  public set nonSsoUsersAllowed(value: boolean | cdktf.IResolvable) {
    this._nonSsoUsersAllowed = value;
  }
  public resetNonSsoUsersAllowed() {
    this._nonSsoUsersAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSsoUsersAllowedInput() {
    return this._nonSsoUsersAllowed;
  }

  // office_integration_available - computed: true, optional: true, required: false
  private _officeIntegrationAvailable?: boolean | cdktf.IResolvable; 
  public get officeIntegrationAvailable() {
    return this.getBooleanAttribute('office_integration_available');
  }
  public set officeIntegrationAvailable(value: boolean | cdktf.IResolvable) {
    this._officeIntegrationAvailable = value;
  }
  public resetOfficeIntegrationAvailable() {
    this._officeIntegrationAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeIntegrationAvailableInput() {
    return this._officeIntegrationAvailable;
  }

  // office_integration_type - computed: true, optional: true, required: false
  private _officeIntegrationType?: string; 
  public get officeIntegrationType() {
    return this.getStringAttribute('office_integration_type');
  }
  public set officeIntegrationType(value: string) {
    this._officeIntegrationType = value;
  }
  public resetOfficeIntegrationType() {
    this._officeIntegrationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeIntegrationTypeInput() {
    return this._officeIntegrationType;
  }

  // oncehub_link - computed: true, optional: false, required: false
  public get oncehubLink() {
    return this.getStringAttribute('oncehub_link');
  }

  // opt_out_global - computed: true, optional: true, required: false
  private _optOutGlobal?: boolean | cdktf.IResolvable; 
  public get optOutGlobal() {
    return this.getBooleanAttribute('opt_out_global');
  }
  public set optOutGlobal(value: boolean | cdktf.IResolvable) {
    this._optOutGlobal = value;
  }
  public resetOptOutGlobal() {
    this._optOutGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optOutGlobalInput() {
    return this._optOutGlobal;
  }

  // overdue - computed: true, optional: false, required: false
  public get overdue() {
    return this.getBooleanAttribute('overdue');
  }

  // password_min_length - computed: true, optional: true, required: false
  private _passwordMinLength?: number; 
  public get passwordMinLength() {
    return this.getNumberAttribute('password_min_length');
  }
  public set passwordMinLength(value: number) {
    this._passwordMinLength = value;
  }
  public resetPasswordMinLength() {
    this._passwordMinLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMinLengthInput() {
    return this._passwordMinLength;
  }

  // password_require_letter - computed: true, optional: true, required: false
  private _passwordRequireLetter?: boolean | cdktf.IResolvable; 
  public get passwordRequireLetter() {
    return this.getBooleanAttribute('password_require_letter');
  }
  public set passwordRequireLetter(value: boolean | cdktf.IResolvable) {
    this._passwordRequireLetter = value;
  }
  public resetPasswordRequireLetter() {
    this._passwordRequireLetter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequireLetterInput() {
    return this._passwordRequireLetter;
  }

  // password_require_mixed - computed: true, optional: true, required: false
  private _passwordRequireMixed?: boolean | cdktf.IResolvable; 
  public get passwordRequireMixed() {
    return this.getBooleanAttribute('password_require_mixed');
  }
  public set passwordRequireMixed(value: boolean | cdktf.IResolvable) {
    this._passwordRequireMixed = value;
  }
  public resetPasswordRequireMixed() {
    this._passwordRequireMixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequireMixedInput() {
    return this._passwordRequireMixed;
  }

  // password_require_number - computed: true, optional: true, required: false
  private _passwordRequireNumber?: boolean | cdktf.IResolvable; 
  public get passwordRequireNumber() {
    return this.getBooleanAttribute('password_require_number');
  }
  public set passwordRequireNumber(value: boolean | cdktf.IResolvable) {
    this._passwordRequireNumber = value;
  }
  public resetPasswordRequireNumber() {
    this._passwordRequireNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequireNumberInput() {
    return this._passwordRequireNumber;
  }

  // password_require_special - computed: true, optional: true, required: false
  private _passwordRequireSpecial?: boolean | cdktf.IResolvable; 
  public get passwordRequireSpecial() {
    return this.getBooleanAttribute('password_require_special');
  }
  public set passwordRequireSpecial(value: boolean | cdktf.IResolvable) {
    this._passwordRequireSpecial = value;
  }
  public resetPasswordRequireSpecial() {
    this._passwordRequireSpecial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequireSpecialInput() {
    return this._passwordRequireSpecial;
  }

  // password_require_unbreached - computed: true, optional: true, required: false
  private _passwordRequireUnbreached?: boolean | cdktf.IResolvable; 
  public get passwordRequireUnbreached() {
    return this.getBooleanAttribute('password_require_unbreached');
  }
  public set passwordRequireUnbreached(value: boolean | cdktf.IResolvable) {
    this._passwordRequireUnbreached = value;
  }
  public resetPasswordRequireUnbreached() {
    this._passwordRequireUnbreached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequireUnbreachedInput() {
    return this._passwordRequireUnbreached;
  }

  // password_requirements_apply_to_bundles - computed: true, optional: true, required: false
  private _passwordRequirementsApplyToBundles?: boolean | cdktf.IResolvable; 
  public get passwordRequirementsApplyToBundles() {
    return this.getBooleanAttribute('password_requirements_apply_to_bundles');
  }
  public set passwordRequirementsApplyToBundles(value: boolean | cdktf.IResolvable) {
    this._passwordRequirementsApplyToBundles = value;
  }
  public resetPasswordRequirementsApplyToBundles() {
    this._passwordRequirementsApplyToBundles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequirementsApplyToBundlesInput() {
    return this._passwordRequirementsApplyToBundles;
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

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // pin_all_remote_servers_to_site_region - computed: true, optional: true, required: false
  private _pinAllRemoteServersToSiteRegion?: boolean | cdktf.IResolvable; 
  public get pinAllRemoteServersToSiteRegion() {
    return this.getBooleanAttribute('pin_all_remote_servers_to_site_region');
  }
  public set pinAllRemoteServersToSiteRegion(value: boolean | cdktf.IResolvable) {
    this._pinAllRemoteServersToSiteRegion = value;
  }
  public resetPinAllRemoteServersToSiteRegion() {
    this._pinAllRemoteServersToSiteRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinAllRemoteServersToSiteRegionInput() {
    return this._pinAllRemoteServersToSiteRegion;
  }

  // prevent_root_permissions_for_non_site_admins - computed: true, optional: true, required: false
  private _preventRootPermissionsForNonSiteAdmins?: boolean | cdktf.IResolvable; 
  public get preventRootPermissionsForNonSiteAdmins() {
    return this.getBooleanAttribute('prevent_root_permissions_for_non_site_admins');
  }
  public set preventRootPermissionsForNonSiteAdmins(value: boolean | cdktf.IResolvable) {
    this._preventRootPermissionsForNonSiteAdmins = value;
  }
  public resetPreventRootPermissionsForNonSiteAdmins() {
    this._preventRootPermissionsForNonSiteAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventRootPermissionsForNonSiteAdminsInput() {
    return this._preventRootPermissionsForNonSiteAdmins;
  }

  // protocol_access_groups_only - computed: true, optional: true, required: false
  private _protocolAccessGroupsOnly?: boolean | cdktf.IResolvable; 
  public get protocolAccessGroupsOnly() {
    return this.getBooleanAttribute('protocol_access_groups_only');
  }
  public set protocolAccessGroupsOnly(value: boolean | cdktf.IResolvable) {
    this._protocolAccessGroupsOnly = value;
  }
  public resetProtocolAccessGroupsOnly() {
    this._protocolAccessGroupsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolAccessGroupsOnlyInput() {
    return this._protocolAccessGroupsOnly;
  }

  // reply_to_email - computed: true, optional: true, required: false
  private _replyToEmail?: string; 
  public get replyToEmail() {
    return this.getStringAttribute('reply_to_email');
  }
  public set replyToEmail(value: string) {
    this._replyToEmail = value;
  }
  public resetReplyToEmail() {
    this._replyToEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToEmailInput() {
    return this._replyToEmail;
  }

  // require_2fa - computed: true, optional: true, required: false
  private _require2Fa?: boolean | cdktf.IResolvable; 
  public get require2Fa() {
    return this.getBooleanAttribute('require_2fa');
  }
  public set require2Fa(value: boolean | cdktf.IResolvable) {
    this._require2Fa = value;
  }
  public resetRequire2Fa() {
    this._require2Fa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get require2FaInput() {
    return this._require2Fa;
  }

  // require_2fa_stop_time - computed: true, optional: false, required: false
  public get require2FaStopTime() {
    return this.getStringAttribute('require_2fa_stop_time');
  }

  // require_2fa_user_type - computed: true, optional: true, required: false
  private _require2FaUserType?: string; 
  public get require2FaUserType() {
    return this.getStringAttribute('require_2fa_user_type');
  }
  public set require2FaUserType(value: string) {
    this._require2FaUserType = value;
  }
  public resetRequire2FaUserType() {
    this._require2FaUserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get require2FaUserTypeInput() {
    return this._require2FaUserType;
  }

  // require_logout_from_bundles_and_inboxes - computed: true, optional: true, required: false
  private _requireLogoutFromBundlesAndInboxes?: boolean | cdktf.IResolvable; 
  public get requireLogoutFromBundlesAndInboxes() {
    return this.getBooleanAttribute('require_logout_from_bundles_and_inboxes');
  }
  public set requireLogoutFromBundlesAndInboxes(value: boolean | cdktf.IResolvable) {
    this._requireLogoutFromBundlesAndInboxes = value;
  }
  public resetRequireLogoutFromBundlesAndInboxes() {
    this._requireLogoutFromBundlesAndInboxes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLogoutFromBundlesAndInboxesInput() {
    return this._requireLogoutFromBundlesAndInboxes;
  }

  // revoke_bundle_access_on_disable_or_delete - computed: true, optional: true, required: false
  private _revokeBundleAccessOnDisableOrDelete?: boolean | cdktf.IResolvable; 
  public get revokeBundleAccessOnDisableOrDelete() {
    return this.getBooleanAttribute('revoke_bundle_access_on_disable_or_delete');
  }
  public set revokeBundleAccessOnDisableOrDelete(value: boolean | cdktf.IResolvable) {
    this._revokeBundleAccessOnDisableOrDelete = value;
  }
  public resetRevokeBundleAccessOnDisableOrDelete() {
    this._revokeBundleAccessOnDisableOrDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeBundleAccessOnDisableOrDeleteInput() {
    return this._revokeBundleAccessOnDisableOrDelete;
  }

  // session - computed: true, optional: false, required: false
  public get session() {
    return this.getStringAttribute('session');
  }

  // session_expiry - computed: true, optional: true, required: false
  private _sessionExpiry?: string; 
  public get sessionExpiry() {
    return this.getStringAttribute('session_expiry');
  }
  public set sessionExpiry(value: string) {
    this._sessionExpiry = value;
  }
  public resetSessionExpiry() {
    this._sessionExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionExpiryInput() {
    return this._sessionExpiry;
  }

  // session_expiry_minutes - computed: true, optional: true, required: false
  private _sessionExpiryMinutes?: number; 
  public get sessionExpiryMinutes() {
    return this.getNumberAttribute('session_expiry_minutes');
  }
  public set sessionExpiryMinutes(value: number) {
    this._sessionExpiryMinutes = value;
  }
  public resetSessionExpiryMinutes() {
    this._sessionExpiryMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionExpiryMinutesInput() {
    return this._sessionExpiryMinutes;
  }

  // sftp_enabled - computed: true, optional: true, required: false
  private _sftpEnabled?: boolean | cdktf.IResolvable; 
  public get sftpEnabled() {
    return this.getBooleanAttribute('sftp_enabled');
  }
  public set sftpEnabled(value: boolean | cdktf.IResolvable) {
    this._sftpEnabled = value;
  }
  public resetSftpEnabled() {
    this._sftpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpEnabledInput() {
    return this._sftpEnabled;
  }

  // sftp_host_key_type - computed: true, optional: true, required: false
  private _sftpHostKeyType?: string; 
  public get sftpHostKeyType() {
    return this.getStringAttribute('sftp_host_key_type');
  }
  public set sftpHostKeyType(value: string) {
    this._sftpHostKeyType = value;
  }
  public resetSftpHostKeyType() {
    this._sftpHostKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpHostKeyTypeInput() {
    return this._sftpHostKeyType;
  }

  // sftp_insecure_ciphers - computed: true, optional: true, required: false
  private _sftpInsecureCiphers?: boolean | cdktf.IResolvable; 
  public get sftpInsecureCiphers() {
    return this.getBooleanAttribute('sftp_insecure_ciphers');
  }
  public set sftpInsecureCiphers(value: boolean | cdktf.IResolvable) {
    this._sftpInsecureCiphers = value;
  }
  public resetSftpInsecureCiphers() {
    this._sftpInsecureCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpInsecureCiphersInput() {
    return this._sftpInsecureCiphers;
  }

  // sftp_insecure_diffie_hellman - computed: true, optional: true, required: false
  private _sftpInsecureDiffieHellman?: boolean | cdktf.IResolvable; 
  public get sftpInsecureDiffieHellman() {
    return this.getBooleanAttribute('sftp_insecure_diffie_hellman');
  }
  public set sftpInsecureDiffieHellman(value: boolean | cdktf.IResolvable) {
    this._sftpInsecureDiffieHellman = value;
  }
  public resetSftpInsecureDiffieHellman() {
    this._sftpInsecureDiffieHellman = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpInsecureDiffieHellmanInput() {
    return this._sftpInsecureDiffieHellman;
  }

  // sftp_user_root_enabled - computed: true, optional: true, required: false
  private _sftpUserRootEnabled?: boolean | cdktf.IResolvable; 
  public get sftpUserRootEnabled() {
    return this.getBooleanAttribute('sftp_user_root_enabled');
  }
  public set sftpUserRootEnabled(value: boolean | cdktf.IResolvable) {
    this._sftpUserRootEnabled = value;
  }
  public resetSftpUserRootEnabled() {
    this._sftpUserRootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpUserRootEnabledInput() {
    return this._sftpUserRootEnabled;
  }

  // sharing_enabled - computed: true, optional: true, required: false
  private _sharingEnabled?: boolean | cdktf.IResolvable; 
  public get sharingEnabled() {
    return this.getBooleanAttribute('sharing_enabled');
  }
  public set sharingEnabled(value: boolean | cdktf.IResolvable) {
    this._sharingEnabled = value;
  }
  public resetSharingEnabled() {
    this._sharingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingEnabledInput() {
    return this._sharingEnabled;
  }

  // show_request_access_link - computed: true, optional: true, required: false
  private _showRequestAccessLink?: boolean | cdktf.IResolvable; 
  public get showRequestAccessLink() {
    return this.getBooleanAttribute('show_request_access_link');
  }
  public set showRequestAccessLink(value: boolean | cdktf.IResolvable) {
    this._showRequestAccessLink = value;
  }
  public resetShowRequestAccessLink() {
    this._showRequestAccessLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showRequestAccessLinkInput() {
    return this._showRequestAccessLink;
  }

  // show_user_notifications_log_in_link - computed: true, optional: true, required: false
  private _showUserNotificationsLogInLink?: boolean | cdktf.IResolvable; 
  public get showUserNotificationsLogInLink() {
    return this.getBooleanAttribute('show_user_notifications_log_in_link');
  }
  public set showUserNotificationsLogInLink(value: boolean | cdktf.IResolvable) {
    this._showUserNotificationsLogInLink = value;
  }
  public resetShowUserNotificationsLogInLink() {
    this._showUserNotificationsLogInLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUserNotificationsLogInLinkInput() {
    return this._showUserNotificationsLogInLink;
  }

  // site_footer - computed: true, optional: true, required: false
  private _siteFooter?: string; 
  public get siteFooter() {
    return this.getStringAttribute('site_footer');
  }
  public set siteFooter(value: string) {
    this._siteFooter = value;
  }
  public resetSiteFooter() {
    this._siteFooter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteFooterInput() {
    return this._siteFooter;
  }

  // site_header - computed: true, optional: true, required: false
  private _siteHeader?: string; 
  public get siteHeader() {
    return this.getStringAttribute('site_header');
  }
  public set siteHeader(value: string) {
    this._siteHeader = value;
  }
  public resetSiteHeader() {
    this._siteHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteHeaderInput() {
    return this._siteHeader;
  }

  // site_public_footer - computed: true, optional: true, required: false
  private _sitePublicFooter?: string; 
  public get sitePublicFooter() {
    return this.getStringAttribute('site_public_footer');
  }
  public set sitePublicFooter(value: string) {
    this._sitePublicFooter = value;
  }
  public resetSitePublicFooter() {
    this._sitePublicFooter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePublicFooterInput() {
    return this._sitePublicFooter;
  }

  // site_public_header - computed: true, optional: true, required: false
  private _sitePublicHeader?: string; 
  public get sitePublicHeader() {
    return this.getStringAttribute('site_public_header');
  }
  public set sitePublicHeader(value: string) {
    this._sitePublicHeader = value;
  }
  public resetSitePublicHeader() {
    this._sitePublicHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePublicHeaderInput() {
    return this._sitePublicHeader;
  }

  // smtp_address - computed: true, optional: true, required: false
  private _smtpAddress?: string; 
  public get smtpAddress() {
    return this.getStringAttribute('smtp_address');
  }
  public set smtpAddress(value: string) {
    this._smtpAddress = value;
  }
  public resetSmtpAddress() {
    this._smtpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpAddressInput() {
    return this._smtpAddress;
  }

  // smtp_authentication - computed: true, optional: true, required: false
  private _smtpAuthentication?: string; 
  public get smtpAuthentication() {
    return this.getStringAttribute('smtp_authentication');
  }
  public set smtpAuthentication(value: string) {
    this._smtpAuthentication = value;
  }
  public resetSmtpAuthentication() {
    this._smtpAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpAuthenticationInput() {
    return this._smtpAuthentication;
  }

  // smtp_from - computed: true, optional: true, required: false
  private _smtpFrom?: string; 
  public get smtpFrom() {
    return this.getStringAttribute('smtp_from');
  }
  public set smtpFrom(value: string) {
    this._smtpFrom = value;
  }
  public resetSmtpFrom() {
    this._smtpFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpFromInput() {
    return this._smtpFrom;
  }

  // smtp_port - computed: true, optional: true, required: false
  private _smtpPort?: number; 
  public get smtpPort() {
    return this.getNumberAttribute('smtp_port');
  }
  public set smtpPort(value: number) {
    this._smtpPort = value;
  }
  public resetSmtpPort() {
    this._smtpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPortInput() {
    return this._smtpPort;
  }

  // smtp_username - computed: true, optional: true, required: false
  private _smtpUsername?: string; 
  public get smtpUsername() {
    return this.getStringAttribute('smtp_username');
  }
  public set smtpUsername(value: string) {
    this._smtpUsername = value;
  }
  public resetSmtpUsername() {
    this._smtpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpUsernameInput() {
    return this._smtpUsername;
  }

  // snapshot_sharing_enabled - computed: true, optional: true, required: false
  private _snapshotSharingEnabled?: boolean | cdktf.IResolvable; 
  public get snapshotSharingEnabled() {
    return this.getBooleanAttribute('snapshot_sharing_enabled');
  }
  public set snapshotSharingEnabled(value: boolean | cdktf.IResolvable) {
    this._snapshotSharingEnabled = value;
  }
  public resetSnapshotSharingEnabled() {
    this._snapshotSharingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotSharingEnabledInput() {
    return this._snapshotSharingEnabled;
  }

  // ssl_required - computed: true, optional: true, required: false
  private _sslRequired?: boolean | cdktf.IResolvable; 
  public get sslRequired() {
    return this.getBooleanAttribute('ssl_required');
  }
  public set sslRequired(value: boolean | cdktf.IResolvable) {
    this._sslRequired = value;
  }
  public resetSslRequired() {
    this._sslRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRequiredInput() {
    return this._sslRequired;
  }

  // subdomain - computed: true, optional: true, required: false
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  public resetSubdomain() {
    this._subdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
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

  // uploads_via_email_authentication - computed: true, optional: true, required: false
  private _uploadsViaEmailAuthentication?: boolean | cdktf.IResolvable; 
  public get uploadsViaEmailAuthentication() {
    return this.getBooleanAttribute('uploads_via_email_authentication');
  }
  public set uploadsViaEmailAuthentication(value: boolean | cdktf.IResolvable) {
    this._uploadsViaEmailAuthentication = value;
  }
  public resetUploadsViaEmailAuthentication() {
    this._uploadsViaEmailAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadsViaEmailAuthenticationInput() {
    return this._uploadsViaEmailAuthentication;
  }

  // use_dedicated_ips_for_smtp - computed: true, optional: true, required: false
  private _useDedicatedIpsForSmtp?: boolean | cdktf.IResolvable; 
  public get useDedicatedIpsForSmtp() {
    return this.getBooleanAttribute('use_dedicated_ips_for_smtp');
  }
  public set useDedicatedIpsForSmtp(value: boolean | cdktf.IResolvable) {
    this._useDedicatedIpsForSmtp = value;
  }
  public resetUseDedicatedIpsForSmtp() {
    this._useDedicatedIpsForSmtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDedicatedIpsForSmtpInput() {
    return this._useDedicatedIpsForSmtp;
  }

  // use_provided_modified_at - computed: true, optional: true, required: false
  private _useProvidedModifiedAt?: boolean | cdktf.IResolvable; 
  public get useProvidedModifiedAt() {
    return this.getBooleanAttribute('use_provided_modified_at');
  }
  public set useProvidedModifiedAt(value: boolean | cdktf.IResolvable) {
    this._useProvidedModifiedAt = value;
  }
  public resetUseProvidedModifiedAt() {
    this._useProvidedModifiedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProvidedModifiedAtInput() {
    return this._useProvidedModifiedAt;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // user_lockout - computed: true, optional: true, required: false
  private _userLockout?: boolean | cdktf.IResolvable; 
  public get userLockout() {
    return this.getBooleanAttribute('user_lockout');
  }
  public set userLockout(value: boolean | cdktf.IResolvable) {
    this._userLockout = value;
  }
  public resetUserLockout() {
    this._userLockout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLockoutInput() {
    return this._userLockout;
  }

  // user_lockout_lock_period - computed: true, optional: true, required: false
  private _userLockoutLockPeriod?: number; 
  public get userLockoutLockPeriod() {
    return this.getNumberAttribute('user_lockout_lock_period');
  }
  public set userLockoutLockPeriod(value: number) {
    this._userLockoutLockPeriod = value;
  }
  public resetUserLockoutLockPeriod() {
    this._userLockoutLockPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLockoutLockPeriodInput() {
    return this._userLockoutLockPeriod;
  }

  // user_lockout_tries - computed: true, optional: true, required: false
  private _userLockoutTries?: number; 
  public get userLockoutTries() {
    return this.getNumberAttribute('user_lockout_tries');
  }
  public set userLockoutTries(value: number) {
    this._userLockoutTries = value;
  }
  public resetUserLockoutTries() {
    this._userLockoutTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLockoutTriesInput() {
    return this._userLockoutTries;
  }

  // user_lockout_within - computed: true, optional: true, required: false
  private _userLockoutWithin?: number; 
  public get userLockoutWithin() {
    return this.getNumberAttribute('user_lockout_within');
  }
  public set userLockoutWithin(value: number) {
    this._userLockoutWithin = value;
  }
  public resetUserLockoutWithin() {
    this._userLockoutWithin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLockoutWithinInput() {
    return this._userLockoutWithin;
  }

  // user_requests_enabled - computed: true, optional: true, required: false
  private _userRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get userRequestsEnabled() {
    return this.getBooleanAttribute('user_requests_enabled');
  }
  public set userRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._userRequestsEnabled = value;
  }
  public resetUserRequestsEnabled() {
    this._userRequestsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRequestsEnabledInput() {
    return this._userRequestsEnabled;
  }

  // user_requests_notify_admins - computed: true, optional: true, required: false
  private _userRequestsNotifyAdmins?: boolean | cdktf.IResolvable; 
  public get userRequestsNotifyAdmins() {
    return this.getBooleanAttribute('user_requests_notify_admins');
  }
  public set userRequestsNotifyAdmins(value: boolean | cdktf.IResolvable) {
    this._userRequestsNotifyAdmins = value;
  }
  public resetUserRequestsNotifyAdmins() {
    this._userRequestsNotifyAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRequestsNotifyAdminsInput() {
    return this._userRequestsNotifyAdmins;
  }

  // users_can_create_api_keys - computed: true, optional: true, required: false
  private _usersCanCreateApiKeys?: boolean | cdktf.IResolvable; 
  public get usersCanCreateApiKeys() {
    return this.getBooleanAttribute('users_can_create_api_keys');
  }
  public set usersCanCreateApiKeys(value: boolean | cdktf.IResolvable) {
    this._usersCanCreateApiKeys = value;
  }
  public resetUsersCanCreateApiKeys() {
    this._usersCanCreateApiKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersCanCreateApiKeysInput() {
    return this._usersCanCreateApiKeys;
  }

  // users_can_create_ssh_keys - computed: true, optional: true, required: false
  private _usersCanCreateSshKeys?: boolean | cdktf.IResolvable; 
  public get usersCanCreateSshKeys() {
    return this.getBooleanAttribute('users_can_create_ssh_keys');
  }
  public set usersCanCreateSshKeys(value: boolean | cdktf.IResolvable) {
    this._usersCanCreateSshKeys = value;
  }
  public resetUsersCanCreateSshKeys() {
    this._usersCanCreateSshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersCanCreateSshKeysInput() {
    return this._usersCanCreateSshKeys;
  }

  // welcome_custom_text - computed: true, optional: true, required: false
  private _welcomeCustomText?: string; 
  public get welcomeCustomText() {
    return this.getStringAttribute('welcome_custom_text');
  }
  public set welcomeCustomText(value: string) {
    this._welcomeCustomText = value;
  }
  public resetWelcomeCustomText() {
    this._welcomeCustomText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get welcomeCustomTextInput() {
    return this._welcomeCustomText;
  }

  // welcome_email_cc - computed: true, optional: true, required: false
  private _welcomeEmailCc?: string; 
  public get welcomeEmailCc() {
    return this.getStringAttribute('welcome_email_cc');
  }
  public set welcomeEmailCc(value: string) {
    this._welcomeEmailCc = value;
  }
  public resetWelcomeEmailCc() {
    this._welcomeEmailCc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get welcomeEmailCcInput() {
    return this._welcomeEmailCc;
  }

  // welcome_email_enabled - computed: true, optional: true, required: false
  private _welcomeEmailEnabled?: boolean | cdktf.IResolvable; 
  public get welcomeEmailEnabled() {
    return this.getBooleanAttribute('welcome_email_enabled');
  }
  public set welcomeEmailEnabled(value: boolean | cdktf.IResolvable) {
    this._welcomeEmailEnabled = value;
  }
  public resetWelcomeEmailEnabled() {
    this._welcomeEmailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get welcomeEmailEnabledInput() {
    return this._welcomeEmailEnabled;
  }

  // welcome_email_subject - computed: true, optional: true, required: false
  private _welcomeEmailSubject?: string; 
  public get welcomeEmailSubject() {
    return this.getStringAttribute('welcome_email_subject');
  }
  public set welcomeEmailSubject(value: string) {
    this._welcomeEmailSubject = value;
  }
  public resetWelcomeEmailSubject() {
    this._welcomeEmailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get welcomeEmailSubjectInput() {
    return this._welcomeEmailSubject;
  }

  // welcome_screen - computed: true, optional: true, required: false
  private _welcomeScreen?: string; 
  public get welcomeScreen() {
    return this.getStringAttribute('welcome_screen');
  }
  public set welcomeScreen(value: string) {
    this._welcomeScreen = value;
  }
  public resetWelcomeScreen() {
    this._welcomeScreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get welcomeScreenInput() {
    return this._welcomeScreen;
  }

  // windows_mode_ftp - computed: true, optional: true, required: false
  private _windowsModeFtp?: boolean | cdktf.IResolvable; 
  public get windowsModeFtp() {
    return this.getBooleanAttribute('windows_mode_ftp');
  }
  public set windowsModeFtp(value: boolean | cdktf.IResolvable) {
    this._windowsModeFtp = value;
  }
  public resetWindowsModeFtp() {
    this._windowsModeFtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsModeFtpInput() {
    return this._windowsModeFtp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_sftp_host_key_id: cdktf.numberToTerraform(this._activeSftpHostKeyId),
      additional_text_file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalTextFileTypes),
      admins_bypass_locked_subfolders: cdktf.booleanToTerraform(this._adminsBypassLockedSubfolders),
      allow_bundle_names: cdktf.booleanToTerraform(this._allowBundleNames),
      allowed_2fa_method_bypass_for_ftp_sftp_dav: cdktf.booleanToTerraform(this._allowed2FaMethodBypassForFtpSftpDav),
      allowed_2fa_method_email: cdktf.booleanToTerraform(this._allowed2FaMethodEmail),
      allowed_2fa_method_sms: cdktf.booleanToTerraform(this._allowed2FaMethodSms),
      allowed_2fa_method_static: cdktf.booleanToTerraform(this._allowed2FaMethodStatic),
      allowed_2fa_method_totp: cdktf.booleanToTerraform(this._allowed2FaMethodTotp),
      allowed_2fa_method_webauthn: cdktf.booleanToTerraform(this._allowed2FaMethodWebauthn),
      allowed_2fa_method_yubi: cdktf.booleanToTerraform(this._allowed2FaMethodYubi),
      allowed_countries: cdktf.stringToTerraform(this._allowedCountries),
      allowed_ips: cdktf.stringToTerraform(this._allowedIps),
      always_mkdir_parents: cdktf.booleanToTerraform(this._alwaysMkdirParents),
      as2_message_retention_days: cdktf.numberToTerraform(this._as2MessageRetentionDays),
      ask_about_overwrites: cdktf.booleanToTerraform(this._askAboutOverwrites),
      bundle_activity_notifications: cdktf.stringToTerraform(this._bundleActivityNotifications),
      bundle_expiration: cdktf.numberToTerraform(this._bundleExpiration),
      bundle_not_found_message: cdktf.stringToTerraform(this._bundleNotFoundMessage),
      bundle_password_required: cdktf.booleanToTerraform(this._bundlePasswordRequired),
      bundle_recipient_blacklist_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bundleRecipientBlacklistDomains),
      bundle_recipient_blacklist_free_email_domains: cdktf.booleanToTerraform(this._bundleRecipientBlacklistFreeEmailDomains),
      bundle_registration_notifications: cdktf.stringToTerraform(this._bundleRegistrationNotifications),
      bundle_require_note: cdktf.booleanToTerraform(this._bundleRequireNote),
      bundle_require_registration: cdktf.booleanToTerraform(this._bundleRequireRegistration),
      bundle_require_share_recipient: cdktf.booleanToTerraform(this._bundleRequireShareRecipient),
      bundle_send_shared_receipts: cdktf.booleanToTerraform(this._bundleSendSharedReceipts),
      bundle_upload_receipt_notifications: cdktf.stringToTerraform(this._bundleUploadReceiptNotifications),
      bundle_watermark_value: cdktf.hashMapper(cdktf.anyToTerraform)(this._bundleWatermarkValue),
      calculate_file_checksums_crc32: cdktf.booleanToTerraform(this._calculateFileChecksumsCrc32),
      calculate_file_checksums_md5: cdktf.booleanToTerraform(this._calculateFileChecksumsMd5),
      calculate_file_checksums_sha1: cdktf.booleanToTerraform(this._calculateFileChecksumsSha1),
      calculate_file_checksums_sha256: cdktf.booleanToTerraform(this._calculateFileChecksumsSha256),
      color2_left: cdktf.stringToTerraform(this._color2Left),
      color2_link: cdktf.stringToTerraform(this._color2Link),
      color2_text: cdktf.stringToTerraform(this._color2Text),
      color2_top: cdktf.stringToTerraform(this._color2Top),
      color2_top_text: cdktf.stringToTerraform(this._color2TopText),
      custom_namespace: cdktf.booleanToTerraform(this._customNamespace),
      dav_enabled: cdktf.booleanToTerraform(this._davEnabled),
      dav_user_root_enabled: cdktf.booleanToTerraform(this._davUserRootEnabled),
      days_to_retain_backups: cdktf.numberToTerraform(this._daysToRetainBackups),
      default_time_zone: cdktf.stringToTerraform(this._defaultTimeZone),
      desktop_app: cdktf.booleanToTerraform(this._desktopApp),
      desktop_app_session_ip_pinning: cdktf.booleanToTerraform(this._desktopAppSessionIpPinning),
      desktop_app_session_lifetime: cdktf.numberToTerraform(this._desktopAppSessionLifetime),
      disable_files_certificate_generation: cdktf.booleanToTerraform(this._disableFilesCertificateGeneration),
      disable_password_reset: cdktf.booleanToTerraform(this._disablePasswordReset),
      disallowed_countries: cdktf.stringToTerraform(this._disallowedCountries),
      document_edits_in_bundle_allowed: cdktf.booleanToTerraform(this._documentEditsInBundleAllowed),
      domain: cdktf.stringToTerraform(this._domain),
      domain_hsts_header: cdktf.booleanToTerraform(this._domainHstsHeader),
      domain_letsencrypt_chain: cdktf.stringToTerraform(this._domainLetsencryptChain),
      email: cdktf.stringToTerraform(this._email),
      folder_permissions_groups_only: cdktf.booleanToTerraform(this._folderPermissionsGroupsOnly),
      ftp_enabled: cdktf.booleanToTerraform(this._ftpEnabled),
      group_admins_can_set_user_password: cdktf.booleanToTerraform(this._groupAdminsCanSetUserPassword),
      include_password_in_welcome_email: cdktf.booleanToTerraform(this._includePasswordInWelcomeEmail),
      language: cdktf.stringToTerraform(this._language),
      ldap_base_dn: cdktf.stringToTerraform(this._ldapBaseDn),
      ldap_domain: cdktf.stringToTerraform(this._ldapDomain),
      ldap_enabled: cdktf.booleanToTerraform(this._ldapEnabled),
      ldap_group_action: cdktf.stringToTerraform(this._ldapGroupAction),
      ldap_group_exclusion: cdktf.stringToTerraform(this._ldapGroupExclusion),
      ldap_group_inclusion: cdktf.stringToTerraform(this._ldapGroupInclusion),
      ldap_host: cdktf.stringToTerraform(this._ldapHost),
      ldap_host_2: cdktf.stringToTerraform(this._ldapHost2),
      ldap_host_3: cdktf.stringToTerraform(this._ldapHost3),
      ldap_port: cdktf.numberToTerraform(this._ldapPort),
      ldap_secure: cdktf.booleanToTerraform(this._ldapSecure),
      ldap_type: cdktf.stringToTerraform(this._ldapType),
      ldap_user_action: cdktf.stringToTerraform(this._ldapUserAction),
      ldap_user_include_groups: cdktf.stringToTerraform(this._ldapUserIncludeGroups),
      ldap_username: cdktf.stringToTerraform(this._ldapUsername),
      ldap_username_field: cdktf.stringToTerraform(this._ldapUsernameField),
      legacy_checksums_mode: cdktf.booleanToTerraform(this._legacyChecksumsMode),
      login_help_text: cdktf.stringToTerraform(this._loginHelpText),
      max_prior_passwords: cdktf.numberToTerraform(this._maxPriorPasswords),
      migrate_remote_server_sync_to_sync: cdktf.booleanToTerraform(this._migrateRemoteServerSyncToSync),
      mobile_app: cdktf.booleanToTerraform(this._mobileApp),
      mobile_app_session_ip_pinning: cdktf.booleanToTerraform(this._mobileAppSessionIpPinning),
      mobile_app_session_lifetime: cdktf.numberToTerraform(this._mobileAppSessionLifetime),
      motd_text: cdktf.stringToTerraform(this._motdText),
      motd_use_for_ftp: cdktf.booleanToTerraform(this._motdUseForFtp),
      motd_use_for_sftp: cdktf.booleanToTerraform(this._motdUseForSftp),
      name: cdktf.stringToTerraform(this._name),
      non_sso_groups_allowed: cdktf.booleanToTerraform(this._nonSsoGroupsAllowed),
      non_sso_users_allowed: cdktf.booleanToTerraform(this._nonSsoUsersAllowed),
      office_integration_available: cdktf.booleanToTerraform(this._officeIntegrationAvailable),
      office_integration_type: cdktf.stringToTerraform(this._officeIntegrationType),
      opt_out_global: cdktf.booleanToTerraform(this._optOutGlobal),
      password_min_length: cdktf.numberToTerraform(this._passwordMinLength),
      password_require_letter: cdktf.booleanToTerraform(this._passwordRequireLetter),
      password_require_mixed: cdktf.booleanToTerraform(this._passwordRequireMixed),
      password_require_number: cdktf.booleanToTerraform(this._passwordRequireNumber),
      password_require_special: cdktf.booleanToTerraform(this._passwordRequireSpecial),
      password_require_unbreached: cdktf.booleanToTerraform(this._passwordRequireUnbreached),
      password_requirements_apply_to_bundles: cdktf.booleanToTerraform(this._passwordRequirementsApplyToBundles),
      password_validity_days: cdktf.numberToTerraform(this._passwordValidityDays),
      pin_all_remote_servers_to_site_region: cdktf.booleanToTerraform(this._pinAllRemoteServersToSiteRegion),
      prevent_root_permissions_for_non_site_admins: cdktf.booleanToTerraform(this._preventRootPermissionsForNonSiteAdmins),
      protocol_access_groups_only: cdktf.booleanToTerraform(this._protocolAccessGroupsOnly),
      reply_to_email: cdktf.stringToTerraform(this._replyToEmail),
      require_2fa: cdktf.booleanToTerraform(this._require2Fa),
      require_2fa_user_type: cdktf.stringToTerraform(this._require2FaUserType),
      require_logout_from_bundles_and_inboxes: cdktf.booleanToTerraform(this._requireLogoutFromBundlesAndInboxes),
      revoke_bundle_access_on_disable_or_delete: cdktf.booleanToTerraform(this._revokeBundleAccessOnDisableOrDelete),
      session_expiry: cdktf.stringToTerraform(this._sessionExpiry),
      session_expiry_minutes: cdktf.numberToTerraform(this._sessionExpiryMinutes),
      sftp_enabled: cdktf.booleanToTerraform(this._sftpEnabled),
      sftp_host_key_type: cdktf.stringToTerraform(this._sftpHostKeyType),
      sftp_insecure_ciphers: cdktf.booleanToTerraform(this._sftpInsecureCiphers),
      sftp_insecure_diffie_hellman: cdktf.booleanToTerraform(this._sftpInsecureDiffieHellman),
      sftp_user_root_enabled: cdktf.booleanToTerraform(this._sftpUserRootEnabled),
      sharing_enabled: cdktf.booleanToTerraform(this._sharingEnabled),
      show_request_access_link: cdktf.booleanToTerraform(this._showRequestAccessLink),
      show_user_notifications_log_in_link: cdktf.booleanToTerraform(this._showUserNotificationsLogInLink),
      site_footer: cdktf.stringToTerraform(this._siteFooter),
      site_header: cdktf.stringToTerraform(this._siteHeader),
      site_public_footer: cdktf.stringToTerraform(this._sitePublicFooter),
      site_public_header: cdktf.stringToTerraform(this._sitePublicHeader),
      smtp_address: cdktf.stringToTerraform(this._smtpAddress),
      smtp_authentication: cdktf.stringToTerraform(this._smtpAuthentication),
      smtp_from: cdktf.stringToTerraform(this._smtpFrom),
      smtp_port: cdktf.numberToTerraform(this._smtpPort),
      smtp_username: cdktf.stringToTerraform(this._smtpUsername),
      snapshot_sharing_enabled: cdktf.booleanToTerraform(this._snapshotSharingEnabled),
      ssl_required: cdktf.booleanToTerraform(this._sslRequired),
      subdomain: cdktf.stringToTerraform(this._subdomain),
      uploads_via_email_authentication: cdktf.booleanToTerraform(this._uploadsViaEmailAuthentication),
      use_dedicated_ips_for_smtp: cdktf.booleanToTerraform(this._useDedicatedIpsForSmtp),
      use_provided_modified_at: cdktf.booleanToTerraform(this._useProvidedModifiedAt),
      user_lockout: cdktf.booleanToTerraform(this._userLockout),
      user_lockout_lock_period: cdktf.numberToTerraform(this._userLockoutLockPeriod),
      user_lockout_tries: cdktf.numberToTerraform(this._userLockoutTries),
      user_lockout_within: cdktf.numberToTerraform(this._userLockoutWithin),
      user_requests_enabled: cdktf.booleanToTerraform(this._userRequestsEnabled),
      user_requests_notify_admins: cdktf.booleanToTerraform(this._userRequestsNotifyAdmins),
      users_can_create_api_keys: cdktf.booleanToTerraform(this._usersCanCreateApiKeys),
      users_can_create_ssh_keys: cdktf.booleanToTerraform(this._usersCanCreateSshKeys),
      welcome_custom_text: cdktf.stringToTerraform(this._welcomeCustomText),
      welcome_email_cc: cdktf.stringToTerraform(this._welcomeEmailCc),
      welcome_email_enabled: cdktf.booleanToTerraform(this._welcomeEmailEnabled),
      welcome_email_subject: cdktf.stringToTerraform(this._welcomeEmailSubject),
      welcome_screen: cdktf.stringToTerraform(this._welcomeScreen),
      windows_mode_ftp: cdktf.booleanToTerraform(this._windowsModeFtp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_sftp_host_key_id: {
        value: cdktf.numberToHclTerraform(this._activeSftpHostKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      additional_text_file_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalTextFileTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      admins_bypass_locked_subfolders: {
        value: cdktf.booleanToHclTerraform(this._adminsBypassLockedSubfolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_bundle_names: {
        value: cdktf.booleanToHclTerraform(this._allowBundleNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_2fa_method_bypass_for_ftp_sftp_dav: {
        value: cdktf.booleanToHclTerraform(this._allowed2FaMethodBypassForFtpSftpDav),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_2fa_method_email: {
        value: cdktf.booleanToHclTerraform(this._allowed2FaMethodEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_2fa_method_sms: {
        value: cdktf.booleanToHclTerraform(this._allowed2FaMethodSms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_2fa_method_static: {
        value: cdktf.booleanToHclTerraform(this._allowed2FaMethodStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_2fa_method_totp: {
        value: cdktf.booleanToHclTerraform(this._allowed2FaMethodTotp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_2fa_method_webauthn: {
        value: cdktf.booleanToHclTerraform(this._allowed2FaMethodWebauthn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_2fa_method_yubi: {
        value: cdktf.booleanToHclTerraform(this._allowed2FaMethodYubi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_countries: {
        value: cdktf.stringToHclTerraform(this._allowedCountries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_ips: {
        value: cdktf.stringToHclTerraform(this._allowedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      always_mkdir_parents: {
        value: cdktf.booleanToHclTerraform(this._alwaysMkdirParents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      as2_message_retention_days: {
        value: cdktf.numberToHclTerraform(this._as2MessageRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ask_about_overwrites: {
        value: cdktf.booleanToHclTerraform(this._askAboutOverwrites),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundle_activity_notifications: {
        value: cdktf.stringToHclTerraform(this._bundleActivityNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_expiration: {
        value: cdktf.numberToHclTerraform(this._bundleExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bundle_not_found_message: {
        value: cdktf.stringToHclTerraform(this._bundleNotFoundMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_password_required: {
        value: cdktf.booleanToHclTerraform(this._bundlePasswordRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundle_recipient_blacklist_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bundleRecipientBlacklistDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bundle_recipient_blacklist_free_email_domains: {
        value: cdktf.booleanToHclTerraform(this._bundleRecipientBlacklistFreeEmailDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundle_registration_notifications: {
        value: cdktf.stringToHclTerraform(this._bundleRegistrationNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_require_note: {
        value: cdktf.booleanToHclTerraform(this._bundleRequireNote),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundle_require_registration: {
        value: cdktf.booleanToHclTerraform(this._bundleRequireRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundle_require_share_recipient: {
        value: cdktf.booleanToHclTerraform(this._bundleRequireShareRecipient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundle_send_shared_receipts: {
        value: cdktf.booleanToHclTerraform(this._bundleSendSharedReceipts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundle_upload_receipt_notifications: {
        value: cdktf.stringToHclTerraform(this._bundleUploadReceiptNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_watermark_value: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._bundleWatermarkValue),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      calculate_file_checksums_crc32: {
        value: cdktf.booleanToHclTerraform(this._calculateFileChecksumsCrc32),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      calculate_file_checksums_md5: {
        value: cdktf.booleanToHclTerraform(this._calculateFileChecksumsMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      calculate_file_checksums_sha1: {
        value: cdktf.booleanToHclTerraform(this._calculateFileChecksumsSha1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      calculate_file_checksums_sha256: {
        value: cdktf.booleanToHclTerraform(this._calculateFileChecksumsSha256),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      color2_left: {
        value: cdktf.stringToHclTerraform(this._color2Left),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color2_link: {
        value: cdktf.stringToHclTerraform(this._color2Link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color2_text: {
        value: cdktf.stringToHclTerraform(this._color2Text),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color2_top: {
        value: cdktf.stringToHclTerraform(this._color2Top),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color2_top_text: {
        value: cdktf.stringToHclTerraform(this._color2TopText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_namespace: {
        value: cdktf.booleanToHclTerraform(this._customNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dav_enabled: {
        value: cdktf.booleanToHclTerraform(this._davEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dav_user_root_enabled: {
        value: cdktf.booleanToHclTerraform(this._davUserRootEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      days_to_retain_backups: {
        value: cdktf.numberToHclTerraform(this._daysToRetainBackups),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_time_zone: {
        value: cdktf.stringToHclTerraform(this._defaultTimeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desktop_app: {
        value: cdktf.booleanToHclTerraform(this._desktopApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      desktop_app_session_ip_pinning: {
        value: cdktf.booleanToHclTerraform(this._desktopAppSessionIpPinning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      desktop_app_session_lifetime: {
        value: cdktf.numberToHclTerraform(this._desktopAppSessionLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_files_certificate_generation: {
        value: cdktf.booleanToHclTerraform(this._disableFilesCertificateGeneration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_password_reset: {
        value: cdktf.booleanToHclTerraform(this._disablePasswordReset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disallowed_countries: {
        value: cdktf.stringToHclTerraform(this._disallowedCountries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_edits_in_bundle_allowed: {
        value: cdktf.booleanToHclTerraform(this._documentEditsInBundleAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_hsts_header: {
        value: cdktf.booleanToHclTerraform(this._domainHstsHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_letsencrypt_chain: {
        value: cdktf.stringToHclTerraform(this._domainLetsencryptChain),
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
      folder_permissions_groups_only: {
        value: cdktf.booleanToHclTerraform(this._folderPermissionsGroupsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ftp_enabled: {
        value: cdktf.booleanToHclTerraform(this._ftpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_admins_can_set_user_password: {
        value: cdktf.booleanToHclTerraform(this._groupAdminsCanSetUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_password_in_welcome_email: {
        value: cdktf.booleanToHclTerraform(this._includePasswordInWelcomeEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_base_dn: {
        value: cdktf.stringToHclTerraform(this._ldapBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_domain: {
        value: cdktf.stringToHclTerraform(this._ldapDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_enabled: {
        value: cdktf.booleanToHclTerraform(this._ldapEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldap_group_action: {
        value: cdktf.stringToHclTerraform(this._ldapGroupAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group_exclusion: {
        value: cdktf.stringToHclTerraform(this._ldapGroupExclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group_inclusion: {
        value: cdktf.stringToHclTerraform(this._ldapGroupInclusion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_host: {
        value: cdktf.stringToHclTerraform(this._ldapHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_host_2: {
        value: cdktf.stringToHclTerraform(this._ldapHost2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_host_3: {
        value: cdktf.stringToHclTerraform(this._ldapHost3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_port: {
        value: cdktf.numberToHclTerraform(this._ldapPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldap_secure: {
        value: cdktf.booleanToHclTerraform(this._ldapSecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldap_type: {
        value: cdktf.stringToHclTerraform(this._ldapType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_user_action: {
        value: cdktf.stringToHclTerraform(this._ldapUserAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_user_include_groups: {
        value: cdktf.stringToHclTerraform(this._ldapUserIncludeGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_username: {
        value: cdktf.stringToHclTerraform(this._ldapUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_username_field: {
        value: cdktf.stringToHclTerraform(this._ldapUsernameField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legacy_checksums_mode: {
        value: cdktf.booleanToHclTerraform(this._legacyChecksumsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_help_text: {
        value: cdktf.stringToHclTerraform(this._loginHelpText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_prior_passwords: {
        value: cdktf.numberToHclTerraform(this._maxPriorPasswords),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      migrate_remote_server_sync_to_sync: {
        value: cdktf.booleanToHclTerraform(this._migrateRemoteServerSyncToSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mobile_app: {
        value: cdktf.booleanToHclTerraform(this._mobileApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mobile_app_session_ip_pinning: {
        value: cdktf.booleanToHclTerraform(this._mobileAppSessionIpPinning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mobile_app_session_lifetime: {
        value: cdktf.numberToHclTerraform(this._mobileAppSessionLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      motd_text: {
        value: cdktf.stringToHclTerraform(this._motdText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      motd_use_for_ftp: {
        value: cdktf.booleanToHclTerraform(this._motdUseForFtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      motd_use_for_sftp: {
        value: cdktf.booleanToHclTerraform(this._motdUseForSftp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_sso_groups_allowed: {
        value: cdktf.booleanToHclTerraform(this._nonSsoGroupsAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      non_sso_users_allowed: {
        value: cdktf.booleanToHclTerraform(this._nonSsoUsersAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      office_integration_available: {
        value: cdktf.booleanToHclTerraform(this._officeIntegrationAvailable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      office_integration_type: {
        value: cdktf.stringToHclTerraform(this._officeIntegrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_out_global: {
        value: cdktf.booleanToHclTerraform(this._optOutGlobal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_min_length: {
        value: cdktf.numberToHclTerraform(this._passwordMinLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_require_letter: {
        value: cdktf.booleanToHclTerraform(this._passwordRequireLetter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_require_mixed: {
        value: cdktf.booleanToHclTerraform(this._passwordRequireMixed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_require_number: {
        value: cdktf.booleanToHclTerraform(this._passwordRequireNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_require_special: {
        value: cdktf.booleanToHclTerraform(this._passwordRequireSpecial),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_require_unbreached: {
        value: cdktf.booleanToHclTerraform(this._passwordRequireUnbreached),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_requirements_apply_to_bundles: {
        value: cdktf.booleanToHclTerraform(this._passwordRequirementsApplyToBundles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_validity_days: {
        value: cdktf.numberToHclTerraform(this._passwordValidityDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pin_all_remote_servers_to_site_region: {
        value: cdktf.booleanToHclTerraform(this._pinAllRemoteServersToSiteRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_root_permissions_for_non_site_admins: {
        value: cdktf.booleanToHclTerraform(this._preventRootPermissionsForNonSiteAdmins),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protocol_access_groups_only: {
        value: cdktf.booleanToHclTerraform(this._protocolAccessGroupsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reply_to_email: {
        value: cdktf.stringToHclTerraform(this._replyToEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_2fa: {
        value: cdktf.booleanToHclTerraform(this._require2Fa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_2fa_user_type: {
        value: cdktf.stringToHclTerraform(this._require2FaUserType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_logout_from_bundles_and_inboxes: {
        value: cdktf.booleanToHclTerraform(this._requireLogoutFromBundlesAndInboxes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      revoke_bundle_access_on_disable_or_delete: {
        value: cdktf.booleanToHclTerraform(this._revokeBundleAccessOnDisableOrDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_expiry: {
        value: cdktf.stringToHclTerraform(this._sessionExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_expiry_minutes: {
        value: cdktf.numberToHclTerraform(this._sessionExpiryMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sftp_enabled: {
        value: cdktf.booleanToHclTerraform(this._sftpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sftp_host_key_type: {
        value: cdktf.stringToHclTerraform(this._sftpHostKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sftp_insecure_ciphers: {
        value: cdktf.booleanToHclTerraform(this._sftpInsecureCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sftp_insecure_diffie_hellman: {
        value: cdktf.booleanToHclTerraform(this._sftpInsecureDiffieHellman),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sftp_user_root_enabled: {
        value: cdktf.booleanToHclTerraform(this._sftpUserRootEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sharing_enabled: {
        value: cdktf.booleanToHclTerraform(this._sharingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_request_access_link: {
        value: cdktf.booleanToHclTerraform(this._showRequestAccessLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_user_notifications_log_in_link: {
        value: cdktf.booleanToHclTerraform(this._showUserNotificationsLogInLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_footer: {
        value: cdktf.stringToHclTerraform(this._siteFooter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_header: {
        value: cdktf.stringToHclTerraform(this._siteHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_public_footer: {
        value: cdktf.stringToHclTerraform(this._sitePublicFooter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_public_header: {
        value: cdktf.stringToHclTerraform(this._sitePublicHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_address: {
        value: cdktf.stringToHclTerraform(this._smtpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_authentication: {
        value: cdktf.stringToHclTerraform(this._smtpAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_from: {
        value: cdktf.stringToHclTerraform(this._smtpFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_port: {
        value: cdktf.numberToHclTerraform(this._smtpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smtp_username: {
        value: cdktf.stringToHclTerraform(this._smtpUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_sharing_enabled: {
        value: cdktf.booleanToHclTerraform(this._snapshotSharingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_required: {
        value: cdktf.booleanToHclTerraform(this._sslRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subdomain: {
        value: cdktf.stringToHclTerraform(this._subdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uploads_via_email_authentication: {
        value: cdktf.booleanToHclTerraform(this._uploadsViaEmailAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_dedicated_ips_for_smtp: {
        value: cdktf.booleanToHclTerraform(this._useDedicatedIpsForSmtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_provided_modified_at: {
        value: cdktf.booleanToHclTerraform(this._useProvidedModifiedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_lockout: {
        value: cdktf.booleanToHclTerraform(this._userLockout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_lockout_lock_period: {
        value: cdktf.numberToHclTerraform(this._userLockoutLockPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_lockout_tries: {
        value: cdktf.numberToHclTerraform(this._userLockoutTries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_lockout_within: {
        value: cdktf.numberToHclTerraform(this._userLockoutWithin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_requests_enabled: {
        value: cdktf.booleanToHclTerraform(this._userRequestsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_requests_notify_admins: {
        value: cdktf.booleanToHclTerraform(this._userRequestsNotifyAdmins),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      users_can_create_api_keys: {
        value: cdktf.booleanToHclTerraform(this._usersCanCreateApiKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      users_can_create_ssh_keys: {
        value: cdktf.booleanToHclTerraform(this._usersCanCreateSshKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      welcome_custom_text: {
        value: cdktf.stringToHclTerraform(this._welcomeCustomText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      welcome_email_cc: {
        value: cdktf.stringToHclTerraform(this._welcomeEmailCc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      welcome_email_enabled: {
        value: cdktf.booleanToHclTerraform(this._welcomeEmailEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      welcome_email_subject: {
        value: cdktf.stringToHclTerraform(this._welcomeEmailSubject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      welcome_screen: {
        value: cdktf.stringToHclTerraform(this._welcomeScreen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      windows_mode_ftp: {
        value: cdktf.booleanToHclTerraform(this._windowsModeFtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
