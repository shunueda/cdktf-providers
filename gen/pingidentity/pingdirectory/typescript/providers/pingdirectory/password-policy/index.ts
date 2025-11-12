// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the names of the account status notification handlers that are used with the associated password storage scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#account_status_notification_handler PasswordPolicy#account_status_notification_handler}
  */
  readonly accountStatusNotificationHandler?: string[];
  /**
  * Indicates whether a user whose password is expired is still allowed to change that password using the password modify extended operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#allow_expired_password_changes PasswordPolicy#allow_expired_password_changes}
  */
  readonly allowExpiredPasswordChanges?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether user entries can have multiple distinct values for the password attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#allow_multiple_password_values PasswordPolicy#allow_multiple_password_values}
  */
  readonly allowMultiplePasswordValues?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether users can change their passwords by providing a pre-encoded value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#allow_pre_encoded_passwords PasswordPolicy#allow_pre_encoded_passwords}
  */
  readonly allowPreEncodedPasswords?: string;
  /**
  * Indicates whether users can change their own passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#allow_user_password_changes PasswordPolicy#allow_user_password_changes}
  */
  readonly allowUserPasswordChanges?: boolean | cdktf.IResolvable;
  /**
  * The set of conditions under which a user governed by this Password Policy will be permitted to generate a password reset token via the deliver password reset token extended operation, and to use that token in lieu of the current password via the password modify extended operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#allowed_password_reset_token_use_condition PasswordPolicy#allowed_password_reset_token_use_condition}
  */
  readonly allowedPasswordResetTokenUseCondition?: string[];
  /**
  * Specifies the behavior that the server should exhibit if a bind password fails validation by one or more of the configured bind password validators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#bind_password_validation_failure_action PasswordPolicy#bind_password_validation_failure_action}
  */
  readonly bindPasswordValidationFailureAction?: string;
  /**
  * Specifies the names of the password validators that should be invoked for bind operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#bind_password_validator PasswordPolicy#bind_password_validator}
  */
  readonly bindPasswordValidator?: string[];
  /**
  * Specifies the names of the password storage schemes that are used to encode clear-text passwords for this password policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#default_password_storage_scheme PasswordPolicy#default_password_storage_scheme}
  */
  readonly defaultPasswordStorageScheme: string[];
  /**
  * Specifies the names of the password storage schemes that are considered deprecated for this password policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#deprecated_password_storage_scheme PasswordPolicy#deprecated_password_storage_scheme}
  */
  readonly deprecatedPasswordStorageScheme?: string[];
  /**
  * A description for this Password Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#description PasswordPolicy#description}
  */
  readonly description?: string;
  /**
  * Indicates whether to enable debugging for the password policy state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#enable_debug PasswordPolicy#enable_debug}
  */
  readonly enableDebug?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the Directory Server allows a user's password to expire even if that user has never seen an expiration warning notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#expire_passwords_without_warning PasswordPolicy#expire_passwords_without_warning}
  */
  readonly expirePasswordsWithoutWarning?: boolean | cdktf.IResolvable;
  /**
  * The action that the server should take for authentication attempts that target a user with more than the configured number of outstanding authentication failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#failure_lockout_action PasswordPolicy#failure_lockout_action}
  */
  readonly failureLockoutAction?: string;
  /**
  * Indicates whether users are forced to change their passwords upon first authenticating to the Directory Server after their account has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#force_change_on_add PasswordPolicy#force_change_on_add}
  */
  readonly forceChangeOnAdd?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether users are forced to change their passwords if they are reset by an administrator. If a user's password is changed by any other user, that is considered an administrative password reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#force_change_on_reset PasswordPolicy#force_change_on_reset}
  */
  readonly forceChangeOnReset?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of grace logins that a user is allowed after the account has expired to allow that user to choose a new password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#grace_login_count PasswordPolicy#grace_login_count}
  */
  readonly graceLoginCount?: number;
  /**
  * Specifies the maximum length of time that an account may remain idle (that is, the associated user does not authenticate to the server) before that user is locked out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#idle_lockout_interval PasswordPolicy#idle_lockout_interval}
  */
  readonly idleLockoutInterval?: string;
  /**
  * Indicates whether to ignore subsequent authentication failures using the same password as an earlier failed authentication attempt (within the time frame defined by the lockout failure expiration interval). If this option is "true", then multiple failed attempts using the same password will be considered only a single failure. If this option is "false", then any failure will be tracked regardless of whether it used the same password as an earlier attempt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#ignore_duplicate_password_failures PasswordPolicy#ignore_duplicate_password_failures}
  */
  readonly ignoreDuplicatePasswordFailures?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name or OID of the attribute type that is used to hold the IP address of the client from which the user last authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#last_login_ip_address_attribute PasswordPolicy#last_login_ip_address_attribute}
  */
  readonly lastLoginIpAddressAttribute?: string;
  /**
  * Specifies the name or OID of the attribute type that is used to hold the last login time for users with the associated password policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#last_login_time_attribute PasswordPolicy#last_login_time_attribute}
  */
  readonly lastLoginTimeAttribute?: string;
  /**
  * Specifies the format string that is used to generate the last login time value for users with the associated password policy. Last login time values will be written using the UTC (also known as GMT, or Greenwich Mean Time) time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#last_login_time_format PasswordPolicy#last_login_time_format}
  */
  readonly lastLoginTimeFormat?: string;
  /**
  * Specifies the length of time that an account is locked after too many authentication failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#lockout_duration PasswordPolicy#lockout_duration}
  */
  readonly lockoutDuration?: string;
  /**
  * Specifies the maximum number of authentication failures that a user is allowed before the account is locked out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#lockout_failure_count PasswordPolicy#lockout_failure_count}
  */
  readonly lockoutFailureCount?: number;
  /**
  * Specifies the length of time before an authentication failure is no longer counted against a user for the purposes of account lockout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#lockout_failure_expiration_interval PasswordPolicy#lockout_failure_expiration_interval}
  */
  readonly lockoutFailureExpirationInterval?: string;
  /**
  * Specifies the maximum length of time that a user can continue using the same password before it must be changed (that is, the password expiration interval).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#max_password_age PasswordPolicy#max_password_age}
  */
  readonly maxPasswordAge?: string;
  /**
  * Specifies the maximum length of time that users have to change passwords after they have been reset by an administrator before they become locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#max_password_reset_age PasswordPolicy#max_password_reset_age}
  */
  readonly maxPasswordResetAge?: string;
  /**
  * Specifies the maximum length of time that a retired password should be considered valid and may be used to authenticate to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#max_retired_password_age PasswordPolicy#max_retired_password_age}
  */
  readonly maxRetiredPasswordAge?: string;
  /**
  * The maximum number of failed authentication attempts to include in the recent login history for each account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#maximum_recent_login_history_failed_authentication_count PasswordPolicy#maximum_recent_login_history_failed_authentication_count}
  */
  readonly maximumRecentLoginHistoryFailedAuthenticationCount?: number;
  /**
  * The maximum age of failed authentication attempts to include in the recent login history for each account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#maximum_recent_login_history_failed_authentication_duration PasswordPolicy#maximum_recent_login_history_failed_authentication_duration}
  */
  readonly maximumRecentLoginHistoryFailedAuthenticationDuration?: string;
  /**
  * The maximum number of successful authentication attempts to include in the recent login history for each account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#maximum_recent_login_history_successful_authentication_count PasswordPolicy#maximum_recent_login_history_successful_authentication_count}
  */
  readonly maximumRecentLoginHistorySuccessfulAuthenticationCount?: number;
  /**
  * The maximum age of successful authentication attempts to include in the recent login history for each account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#maximum_recent_login_history_successful_authentication_duration PasswordPolicy#maximum_recent_login_history_successful_authentication_duration}
  */
  readonly maximumRecentLoginHistorySuccessfulAuthenticationDuration?: string;
  /**
  * Specifies the minimum length of time after a password change before the user is allowed to change the password again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#min_password_age PasswordPolicy#min_password_age}
  */
  readonly minPasswordAge?: string;
  /**
  * Indicates how frequently password validation should be performed during bind operations for each user to whom this password policy is assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#minimum_bind_password_validation_frequency PasswordPolicy#minimum_bind_password_validation_frequency}
  */
  readonly minimumBindPasswordValidationFrequency?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#name PasswordPolicy#name}
  */
  readonly name: string;
  /**
  * Specifies the attribute type used to hold user passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#password_attribute PasswordPolicy#password_attribute}
  */
  readonly passwordAttribute: string;
  /**
  * Indicates whether user password changes must use the password modify extended operation and must include the user's current password before the change is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#password_change_requires_current_password PasswordPolicy#password_change_requires_current_password}
  */
  readonly passwordChangeRequiresCurrentPassword?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum length of time before a user's password actually expires that the server begins to include warning notifications in bind responses for that user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#password_expiration_warning_interval PasswordPolicy#password_expiration_warning_interval}
  */
  readonly passwordExpirationWarningInterval?: string;
  /**
  * Specifies the name of the password generator that is used with the associated password policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#password_generator PasswordPolicy#password_generator}
  */
  readonly passwordGenerator?: string;
  /**
  * Specifies the maximum number of former passwords to maintain in the password history.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#password_history_count PasswordPolicy#password_history_count}
  */
  readonly passwordHistoryCount?: number;
  /**
  * Specifies the maximum length of time that passwords remain in the password history.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#password_history_duration PasswordPolicy#password_history_duration}
  */
  readonly passwordHistoryDuration?: string;
  /**
  * Specifies the conditions under which the server may retire a user's current password in the course of setting a new password for that user (whether via a modify operation or a password modify extended operation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#password_retirement_behavior PasswordPolicy#password_retirement_behavior}
  */
  readonly passwordRetirementBehavior?: string[];
  /**
  * Specifies the names of the password validators that are used with the associated password storage scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#password_validator PasswordPolicy#password_validator}
  */
  readonly passwordValidator?: string[];
  /**
  * Specifies the format string(s) that might have been used with the last login time at any point in the past for users associated with the password policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#previous_last_login_time_format PasswordPolicy#previous_last_login_time_format}
  */
  readonly previousLastLoginTimeFormat?: string[];
  /**
  * Supported in PingDirectory product version 10.0.0.0+. Indicates whether to re-encode passwords on authentication if the configuration for the underlying password storage scheme has changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#re_encode_passwords_on_scheme_config_change PasswordPolicy#re_encode_passwords_on_scheme_config_change}
  */
  readonly reEncodePasswordsOnSchemeConfigChange?: boolean | cdktf.IResolvable;
  /**
  * The behavior that the server will exhibit when multiple similar authentication attempts (with the same values for the successful, authentication-method, client-ip-address, and failure-reason fields) are processed for an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#recent_login_history_similar_attempt_behavior PasswordPolicy#recent_login_history_similar_attempt_behavior}
  */
  readonly recentLoginHistorySimilarAttemptBehavior?: string;
  /**
  * Specifies the time by which all users with the associated password policy must change their passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#require_change_by_time PasswordPolicy#require_change_by_time}
  */
  readonly requireChangeByTime?: string;
  /**
  * Indicates whether users with the associated password policy are required to authenticate in a secure manner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#require_secure_authentication PasswordPolicy#require_secure_authentication}
  */
  readonly requireSecureAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether users with the associated password policy are required to change their password in a secure manner that does not expose the credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#require_secure_password_changes PasswordPolicy#require_secure_password_changes}
  */
  readonly requireSecurePasswordChanges?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server should return the password expiring and password expired response controls (as described in draft-vchu-ldap-pwd-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#return_password_expiration_controls PasswordPolicy#return_password_expiration_controls}
  */
  readonly returnPasswordExpirationControls?: string;
  /**
  * Indicates whether passwords set by administrators are allowed to bypass the password validation process that is required for user password changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#skip_validation_for_administrators PasswordPolicy#skip_validation_for_administrators}
  */
  readonly skipValidationForAdministrators?: boolean | cdktf.IResolvable;
  /**
  * Specifies how the server deals with the inability to update password policy state information during an authentication attempt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#state_update_failure_policy PasswordPolicy#state_update_failure_policy}
  */
  readonly stateUpdateFailurePolicy?: string;
  /**
  * Supported in PingDirectory product version 10.3.0.0+. Indicates whether the server should suppress updates to a user's recent login history as a result of authentication attempts that fail because the account is in an unusable state (e.g., if the account is administratively disabled, if the account is locked, or if the password is expired).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#suppress_recent_login_history_updates_for_unusable_accounts PasswordPolicy#suppress_recent_login_history_updates_for_unusable_accounts}
  */
  readonly suppressRecentLoginHistoryUpdatesForUnusableAccounts?: boolean | cdktf.IResolvable;
  /**
  * The type of Password Policy resource. Options are ['password-policy']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#type PasswordPolicy#type}
  */
  readonly type?: string;
}
export interface PasswordPolicyRequiredActions {
}

export function passwordPolicyRequiredActionsToTerraform(struct?: PasswordPolicyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function passwordPolicyRequiredActionsToHclTerraform(struct?: PasswordPolicyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PasswordPolicyRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PasswordPolicyRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PasswordPolicyRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PasswordPolicyRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PasswordPolicyRequiredActionsOutputReference {
    return new PasswordPolicyRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy pingdirectory_password_policy}
*/
export class PasswordPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PasswordPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PasswordPolicy to import
  * @param importFromId The id of the existing PasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/password_policy pingdirectory_password_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PasswordPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_password_policy',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountStatusNotificationHandler = config.accountStatusNotificationHandler;
    this._allowExpiredPasswordChanges = config.allowExpiredPasswordChanges;
    this._allowMultiplePasswordValues = config.allowMultiplePasswordValues;
    this._allowPreEncodedPasswords = config.allowPreEncodedPasswords;
    this._allowUserPasswordChanges = config.allowUserPasswordChanges;
    this._allowedPasswordResetTokenUseCondition = config.allowedPasswordResetTokenUseCondition;
    this._bindPasswordValidationFailureAction = config.bindPasswordValidationFailureAction;
    this._bindPasswordValidator = config.bindPasswordValidator;
    this._defaultPasswordStorageScheme = config.defaultPasswordStorageScheme;
    this._deprecatedPasswordStorageScheme = config.deprecatedPasswordStorageScheme;
    this._description = config.description;
    this._enableDebug = config.enableDebug;
    this._expirePasswordsWithoutWarning = config.expirePasswordsWithoutWarning;
    this._failureLockoutAction = config.failureLockoutAction;
    this._forceChangeOnAdd = config.forceChangeOnAdd;
    this._forceChangeOnReset = config.forceChangeOnReset;
    this._graceLoginCount = config.graceLoginCount;
    this._idleLockoutInterval = config.idleLockoutInterval;
    this._ignoreDuplicatePasswordFailures = config.ignoreDuplicatePasswordFailures;
    this._lastLoginIpAddressAttribute = config.lastLoginIpAddressAttribute;
    this._lastLoginTimeAttribute = config.lastLoginTimeAttribute;
    this._lastLoginTimeFormat = config.lastLoginTimeFormat;
    this._lockoutDuration = config.lockoutDuration;
    this._lockoutFailureCount = config.lockoutFailureCount;
    this._lockoutFailureExpirationInterval = config.lockoutFailureExpirationInterval;
    this._maxPasswordAge = config.maxPasswordAge;
    this._maxPasswordResetAge = config.maxPasswordResetAge;
    this._maxRetiredPasswordAge = config.maxRetiredPasswordAge;
    this._maximumRecentLoginHistoryFailedAuthenticationCount = config.maximumRecentLoginHistoryFailedAuthenticationCount;
    this._maximumRecentLoginHistoryFailedAuthenticationDuration = config.maximumRecentLoginHistoryFailedAuthenticationDuration;
    this._maximumRecentLoginHistorySuccessfulAuthenticationCount = config.maximumRecentLoginHistorySuccessfulAuthenticationCount;
    this._maximumRecentLoginHistorySuccessfulAuthenticationDuration = config.maximumRecentLoginHistorySuccessfulAuthenticationDuration;
    this._minPasswordAge = config.minPasswordAge;
    this._minimumBindPasswordValidationFrequency = config.minimumBindPasswordValidationFrequency;
    this._name = config.name;
    this._passwordAttribute = config.passwordAttribute;
    this._passwordChangeRequiresCurrentPassword = config.passwordChangeRequiresCurrentPassword;
    this._passwordExpirationWarningInterval = config.passwordExpirationWarningInterval;
    this._passwordGenerator = config.passwordGenerator;
    this._passwordHistoryCount = config.passwordHistoryCount;
    this._passwordHistoryDuration = config.passwordHistoryDuration;
    this._passwordRetirementBehavior = config.passwordRetirementBehavior;
    this._passwordValidator = config.passwordValidator;
    this._previousLastLoginTimeFormat = config.previousLastLoginTimeFormat;
    this._reEncodePasswordsOnSchemeConfigChange = config.reEncodePasswordsOnSchemeConfigChange;
    this._recentLoginHistorySimilarAttemptBehavior = config.recentLoginHistorySimilarAttemptBehavior;
    this._requireChangeByTime = config.requireChangeByTime;
    this._requireSecureAuthentication = config.requireSecureAuthentication;
    this._requireSecurePasswordChanges = config.requireSecurePasswordChanges;
    this._returnPasswordExpirationControls = config.returnPasswordExpirationControls;
    this._skipValidationForAdministrators = config.skipValidationForAdministrators;
    this._stateUpdateFailurePolicy = config.stateUpdateFailurePolicy;
    this._suppressRecentLoginHistoryUpdatesForUnusableAccounts = config.suppressRecentLoginHistoryUpdatesForUnusableAccounts;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_status_notification_handler - computed: true, optional: true, required: false
  private _accountStatusNotificationHandler?: string[]; 
  public get accountStatusNotificationHandler() {
    return cdktf.Fn.tolist(this.getListAttribute('account_status_notification_handler'));
  }
  public set accountStatusNotificationHandler(value: string[]) {
    this._accountStatusNotificationHandler = value;
  }
  public resetAccountStatusNotificationHandler() {
    this._accountStatusNotificationHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountStatusNotificationHandlerInput() {
    return this._accountStatusNotificationHandler;
  }

  // allow_expired_password_changes - computed: true, optional: true, required: false
  private _allowExpiredPasswordChanges?: boolean | cdktf.IResolvable; 
  public get allowExpiredPasswordChanges() {
    return this.getBooleanAttribute('allow_expired_password_changes');
  }
  public set allowExpiredPasswordChanges(value: boolean | cdktf.IResolvable) {
    this._allowExpiredPasswordChanges = value;
  }
  public resetAllowExpiredPasswordChanges() {
    this._allowExpiredPasswordChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExpiredPasswordChangesInput() {
    return this._allowExpiredPasswordChanges;
  }

  // allow_multiple_password_values - computed: true, optional: true, required: false
  private _allowMultiplePasswordValues?: boolean | cdktf.IResolvable; 
  public get allowMultiplePasswordValues() {
    return this.getBooleanAttribute('allow_multiple_password_values');
  }
  public set allowMultiplePasswordValues(value: boolean | cdktf.IResolvable) {
    this._allowMultiplePasswordValues = value;
  }
  public resetAllowMultiplePasswordValues() {
    this._allowMultiplePasswordValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMultiplePasswordValuesInput() {
    return this._allowMultiplePasswordValues;
  }

  // allow_pre_encoded_passwords - computed: true, optional: true, required: false
  private _allowPreEncodedPasswords?: string; 
  public get allowPreEncodedPasswords() {
    return this.getStringAttribute('allow_pre_encoded_passwords');
  }
  public set allowPreEncodedPasswords(value: string) {
    this._allowPreEncodedPasswords = value;
  }
  public resetAllowPreEncodedPasswords() {
    this._allowPreEncodedPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPreEncodedPasswordsInput() {
    return this._allowPreEncodedPasswords;
  }

  // allow_user_password_changes - computed: true, optional: true, required: false
  private _allowUserPasswordChanges?: boolean | cdktf.IResolvable; 
  public get allowUserPasswordChanges() {
    return this.getBooleanAttribute('allow_user_password_changes');
  }
  public set allowUserPasswordChanges(value: boolean | cdktf.IResolvable) {
    this._allowUserPasswordChanges = value;
  }
  public resetAllowUserPasswordChanges() {
    this._allowUserPasswordChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserPasswordChangesInput() {
    return this._allowUserPasswordChanges;
  }

  // allowed_password_reset_token_use_condition - computed: true, optional: true, required: false
  private _allowedPasswordResetTokenUseCondition?: string[]; 
  public get allowedPasswordResetTokenUseCondition() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_password_reset_token_use_condition'));
  }
  public set allowedPasswordResetTokenUseCondition(value: string[]) {
    this._allowedPasswordResetTokenUseCondition = value;
  }
  public resetAllowedPasswordResetTokenUseCondition() {
    this._allowedPasswordResetTokenUseCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPasswordResetTokenUseConditionInput() {
    return this._allowedPasswordResetTokenUseCondition;
  }

  // bind_password_validation_failure_action - computed: true, optional: true, required: false
  private _bindPasswordValidationFailureAction?: string; 
  public get bindPasswordValidationFailureAction() {
    return this.getStringAttribute('bind_password_validation_failure_action');
  }
  public set bindPasswordValidationFailureAction(value: string) {
    this._bindPasswordValidationFailureAction = value;
  }
  public resetBindPasswordValidationFailureAction() {
    this._bindPasswordValidationFailureAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordValidationFailureActionInput() {
    return this._bindPasswordValidationFailureAction;
  }

  // bind_password_validator - computed: true, optional: true, required: false
  private _bindPasswordValidator?: string[]; 
  public get bindPasswordValidator() {
    return cdktf.Fn.tolist(this.getListAttribute('bind_password_validator'));
  }
  public set bindPasswordValidator(value: string[]) {
    this._bindPasswordValidator = value;
  }
  public resetBindPasswordValidator() {
    this._bindPasswordValidator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordValidatorInput() {
    return this._bindPasswordValidator;
  }

  // default_password_storage_scheme - computed: false, optional: false, required: true
  private _defaultPasswordStorageScheme?: string[]; 
  public get defaultPasswordStorageScheme() {
    return cdktf.Fn.tolist(this.getListAttribute('default_password_storage_scheme'));
  }
  public set defaultPasswordStorageScheme(value: string[]) {
    this._defaultPasswordStorageScheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPasswordStorageSchemeInput() {
    return this._defaultPasswordStorageScheme;
  }

  // deprecated_password_storage_scheme - computed: true, optional: true, required: false
  private _deprecatedPasswordStorageScheme?: string[]; 
  public get deprecatedPasswordStorageScheme() {
    return cdktf.Fn.tolist(this.getListAttribute('deprecated_password_storage_scheme'));
  }
  public set deprecatedPasswordStorageScheme(value: string[]) {
    this._deprecatedPasswordStorageScheme = value;
  }
  public resetDeprecatedPasswordStorageScheme() {
    this._deprecatedPasswordStorageScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedPasswordStorageSchemeInput() {
    return this._deprecatedPasswordStorageScheme;
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

  // enable_debug - computed: true, optional: true, required: false
  private _enableDebug?: boolean | cdktf.IResolvable; 
  public get enableDebug() {
    return this.getBooleanAttribute('enable_debug');
  }
  public set enableDebug(value: boolean | cdktf.IResolvable) {
    this._enableDebug = value;
  }
  public resetEnableDebug() {
    this._enableDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDebugInput() {
    return this._enableDebug;
  }

  // expire_passwords_without_warning - computed: true, optional: true, required: false
  private _expirePasswordsWithoutWarning?: boolean | cdktf.IResolvable; 
  public get expirePasswordsWithoutWarning() {
    return this.getBooleanAttribute('expire_passwords_without_warning');
  }
  public set expirePasswordsWithoutWarning(value: boolean | cdktf.IResolvable) {
    this._expirePasswordsWithoutWarning = value;
  }
  public resetExpirePasswordsWithoutWarning() {
    this._expirePasswordsWithoutWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirePasswordsWithoutWarningInput() {
    return this._expirePasswordsWithoutWarning;
  }

  // failure_lockout_action - computed: false, optional: true, required: false
  private _failureLockoutAction?: string; 
  public get failureLockoutAction() {
    return this.getStringAttribute('failure_lockout_action');
  }
  public set failureLockoutAction(value: string) {
    this._failureLockoutAction = value;
  }
  public resetFailureLockoutAction() {
    this._failureLockoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureLockoutActionInput() {
    return this._failureLockoutAction;
  }

  // force_change_on_add - computed: true, optional: true, required: false
  private _forceChangeOnAdd?: boolean | cdktf.IResolvable; 
  public get forceChangeOnAdd() {
    return this.getBooleanAttribute('force_change_on_add');
  }
  public set forceChangeOnAdd(value: boolean | cdktf.IResolvable) {
    this._forceChangeOnAdd = value;
  }
  public resetForceChangeOnAdd() {
    this._forceChangeOnAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceChangeOnAddInput() {
    return this._forceChangeOnAdd;
  }

  // force_change_on_reset - computed: true, optional: true, required: false
  private _forceChangeOnReset?: boolean | cdktf.IResolvable; 
  public get forceChangeOnReset() {
    return this.getBooleanAttribute('force_change_on_reset');
  }
  public set forceChangeOnReset(value: boolean | cdktf.IResolvable) {
    this._forceChangeOnReset = value;
  }
  public resetForceChangeOnReset() {
    this._forceChangeOnReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceChangeOnResetInput() {
    return this._forceChangeOnReset;
  }

  // grace_login_count - computed: true, optional: true, required: false
  private _graceLoginCount?: number; 
  public get graceLoginCount() {
    return this.getNumberAttribute('grace_login_count');
  }
  public set graceLoginCount(value: number) {
    this._graceLoginCount = value;
  }
  public resetGraceLoginCount() {
    this._graceLoginCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceLoginCountInput() {
    return this._graceLoginCount;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_lockout_interval - computed: true, optional: true, required: false
  private _idleLockoutInterval?: string; 
  public get idleLockoutInterval() {
    return this.getStringAttribute('idle_lockout_interval');
  }
  public set idleLockoutInterval(value: string) {
    this._idleLockoutInterval = value;
  }
  public resetIdleLockoutInterval() {
    this._idleLockoutInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleLockoutIntervalInput() {
    return this._idleLockoutInterval;
  }

  // ignore_duplicate_password_failures - computed: true, optional: true, required: false
  private _ignoreDuplicatePasswordFailures?: boolean | cdktf.IResolvable; 
  public get ignoreDuplicatePasswordFailures() {
    return this.getBooleanAttribute('ignore_duplicate_password_failures');
  }
  public set ignoreDuplicatePasswordFailures(value: boolean | cdktf.IResolvable) {
    this._ignoreDuplicatePasswordFailures = value;
  }
  public resetIgnoreDuplicatePasswordFailures() {
    this._ignoreDuplicatePasswordFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDuplicatePasswordFailuresInput() {
    return this._ignoreDuplicatePasswordFailures;
  }

  // last_login_ip_address_attribute - computed: false, optional: true, required: false
  private _lastLoginIpAddressAttribute?: string; 
  public get lastLoginIpAddressAttribute() {
    return this.getStringAttribute('last_login_ip_address_attribute');
  }
  public set lastLoginIpAddressAttribute(value: string) {
    this._lastLoginIpAddressAttribute = value;
  }
  public resetLastLoginIpAddressAttribute() {
    this._lastLoginIpAddressAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastLoginIpAddressAttributeInput() {
    return this._lastLoginIpAddressAttribute;
  }

  // last_login_time_attribute - computed: true, optional: true, required: false
  private _lastLoginTimeAttribute?: string; 
  public get lastLoginTimeAttribute() {
    return this.getStringAttribute('last_login_time_attribute');
  }
  public set lastLoginTimeAttribute(value: string) {
    this._lastLoginTimeAttribute = value;
  }
  public resetLastLoginTimeAttribute() {
    this._lastLoginTimeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastLoginTimeAttributeInput() {
    return this._lastLoginTimeAttribute;
  }

  // last_login_time_format - computed: false, optional: true, required: false
  private _lastLoginTimeFormat?: string; 
  public get lastLoginTimeFormat() {
    return this.getStringAttribute('last_login_time_format');
  }
  public set lastLoginTimeFormat(value: string) {
    this._lastLoginTimeFormat = value;
  }
  public resetLastLoginTimeFormat() {
    this._lastLoginTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastLoginTimeFormatInput() {
    return this._lastLoginTimeFormat;
  }

  // lockout_duration - computed: true, optional: true, required: false
  private _lockoutDuration?: string; 
  public get lockoutDuration() {
    return this.getStringAttribute('lockout_duration');
  }
  public set lockoutDuration(value: string) {
    this._lockoutDuration = value;
  }
  public resetLockoutDuration() {
    this._lockoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutDurationInput() {
    return this._lockoutDuration;
  }

  // lockout_failure_count - computed: true, optional: true, required: false
  private _lockoutFailureCount?: number; 
  public get lockoutFailureCount() {
    return this.getNumberAttribute('lockout_failure_count');
  }
  public set lockoutFailureCount(value: number) {
    this._lockoutFailureCount = value;
  }
  public resetLockoutFailureCount() {
    this._lockoutFailureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutFailureCountInput() {
    return this._lockoutFailureCount;
  }

  // lockout_failure_expiration_interval - computed: true, optional: true, required: false
  private _lockoutFailureExpirationInterval?: string; 
  public get lockoutFailureExpirationInterval() {
    return this.getStringAttribute('lockout_failure_expiration_interval');
  }
  public set lockoutFailureExpirationInterval(value: string) {
    this._lockoutFailureExpirationInterval = value;
  }
  public resetLockoutFailureExpirationInterval() {
    this._lockoutFailureExpirationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutFailureExpirationIntervalInput() {
    return this._lockoutFailureExpirationInterval;
  }

  // max_password_age - computed: true, optional: true, required: false
  private _maxPasswordAge?: string; 
  public get maxPasswordAge() {
    return this.getStringAttribute('max_password_age');
  }
  public set maxPasswordAge(value: string) {
    this._maxPasswordAge = value;
  }
  public resetMaxPasswordAge() {
    this._maxPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPasswordAgeInput() {
    return this._maxPasswordAge;
  }

  // max_password_reset_age - computed: true, optional: true, required: false
  private _maxPasswordResetAge?: string; 
  public get maxPasswordResetAge() {
    return this.getStringAttribute('max_password_reset_age');
  }
  public set maxPasswordResetAge(value: string) {
    this._maxPasswordResetAge = value;
  }
  public resetMaxPasswordResetAge() {
    this._maxPasswordResetAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPasswordResetAgeInput() {
    return this._maxPasswordResetAge;
  }

  // max_retired_password_age - computed: true, optional: true, required: false
  private _maxRetiredPasswordAge?: string; 
  public get maxRetiredPasswordAge() {
    return this.getStringAttribute('max_retired_password_age');
  }
  public set maxRetiredPasswordAge(value: string) {
    this._maxRetiredPasswordAge = value;
  }
  public resetMaxRetiredPasswordAge() {
    this._maxRetiredPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetiredPasswordAgeInput() {
    return this._maxRetiredPasswordAge;
  }

  // maximum_recent_login_history_failed_authentication_count - computed: false, optional: true, required: false
  private _maximumRecentLoginHistoryFailedAuthenticationCount?: number; 
  public get maximumRecentLoginHistoryFailedAuthenticationCount() {
    return this.getNumberAttribute('maximum_recent_login_history_failed_authentication_count');
  }
  public set maximumRecentLoginHistoryFailedAuthenticationCount(value: number) {
    this._maximumRecentLoginHistoryFailedAuthenticationCount = value;
  }
  public resetMaximumRecentLoginHistoryFailedAuthenticationCount() {
    this._maximumRecentLoginHistoryFailedAuthenticationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecentLoginHistoryFailedAuthenticationCountInput() {
    return this._maximumRecentLoginHistoryFailedAuthenticationCount;
  }

  // maximum_recent_login_history_failed_authentication_duration - computed: false, optional: true, required: false
  private _maximumRecentLoginHistoryFailedAuthenticationDuration?: string; 
  public get maximumRecentLoginHistoryFailedAuthenticationDuration() {
    return this.getStringAttribute('maximum_recent_login_history_failed_authentication_duration');
  }
  public set maximumRecentLoginHistoryFailedAuthenticationDuration(value: string) {
    this._maximumRecentLoginHistoryFailedAuthenticationDuration = value;
  }
  public resetMaximumRecentLoginHistoryFailedAuthenticationDuration() {
    this._maximumRecentLoginHistoryFailedAuthenticationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecentLoginHistoryFailedAuthenticationDurationInput() {
    return this._maximumRecentLoginHistoryFailedAuthenticationDuration;
  }

  // maximum_recent_login_history_successful_authentication_count - computed: false, optional: true, required: false
  private _maximumRecentLoginHistorySuccessfulAuthenticationCount?: number; 
  public get maximumRecentLoginHistorySuccessfulAuthenticationCount() {
    return this.getNumberAttribute('maximum_recent_login_history_successful_authentication_count');
  }
  public set maximumRecentLoginHistorySuccessfulAuthenticationCount(value: number) {
    this._maximumRecentLoginHistorySuccessfulAuthenticationCount = value;
  }
  public resetMaximumRecentLoginHistorySuccessfulAuthenticationCount() {
    this._maximumRecentLoginHistorySuccessfulAuthenticationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecentLoginHistorySuccessfulAuthenticationCountInput() {
    return this._maximumRecentLoginHistorySuccessfulAuthenticationCount;
  }

  // maximum_recent_login_history_successful_authentication_duration - computed: false, optional: true, required: false
  private _maximumRecentLoginHistorySuccessfulAuthenticationDuration?: string; 
  public get maximumRecentLoginHistorySuccessfulAuthenticationDuration() {
    return this.getStringAttribute('maximum_recent_login_history_successful_authentication_duration');
  }
  public set maximumRecentLoginHistorySuccessfulAuthenticationDuration(value: string) {
    this._maximumRecentLoginHistorySuccessfulAuthenticationDuration = value;
  }
  public resetMaximumRecentLoginHistorySuccessfulAuthenticationDuration() {
    this._maximumRecentLoginHistorySuccessfulAuthenticationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecentLoginHistorySuccessfulAuthenticationDurationInput() {
    return this._maximumRecentLoginHistorySuccessfulAuthenticationDuration;
  }

  // min_password_age - computed: true, optional: true, required: false
  private _minPasswordAge?: string; 
  public get minPasswordAge() {
    return this.getStringAttribute('min_password_age');
  }
  public set minPasswordAge(value: string) {
    this._minPasswordAge = value;
  }
  public resetMinPasswordAge() {
    this._minPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPasswordAgeInput() {
    return this._minPasswordAge;
  }

  // minimum_bind_password_validation_frequency - computed: true, optional: true, required: false
  private _minimumBindPasswordValidationFrequency?: string; 
  public get minimumBindPasswordValidationFrequency() {
    return this.getStringAttribute('minimum_bind_password_validation_frequency');
  }
  public set minimumBindPasswordValidationFrequency(value: string) {
    this._minimumBindPasswordValidationFrequency = value;
  }
  public resetMinimumBindPasswordValidationFrequency() {
    this._minimumBindPasswordValidationFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBindPasswordValidationFrequencyInput() {
    return this._minimumBindPasswordValidationFrequency;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // password_attribute - computed: false, optional: false, required: true
  private _passwordAttribute?: string; 
  public get passwordAttribute() {
    return this.getStringAttribute('password_attribute');
  }
  public set passwordAttribute(value: string) {
    this._passwordAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAttributeInput() {
    return this._passwordAttribute;
  }

  // password_change_requires_current_password - computed: true, optional: true, required: false
  private _passwordChangeRequiresCurrentPassword?: boolean | cdktf.IResolvable; 
  public get passwordChangeRequiresCurrentPassword() {
    return this.getBooleanAttribute('password_change_requires_current_password');
  }
  public set passwordChangeRequiresCurrentPassword(value: boolean | cdktf.IResolvable) {
    this._passwordChangeRequiresCurrentPassword = value;
  }
  public resetPasswordChangeRequiresCurrentPassword() {
    this._passwordChangeRequiresCurrentPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeRequiresCurrentPasswordInput() {
    return this._passwordChangeRequiresCurrentPassword;
  }

  // password_expiration_warning_interval - computed: true, optional: true, required: false
  private _passwordExpirationWarningInterval?: string; 
  public get passwordExpirationWarningInterval() {
    return this.getStringAttribute('password_expiration_warning_interval');
  }
  public set passwordExpirationWarningInterval(value: string) {
    this._passwordExpirationWarningInterval = value;
  }
  public resetPasswordExpirationWarningInterval() {
    this._passwordExpirationWarningInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpirationWarningIntervalInput() {
    return this._passwordExpirationWarningInterval;
  }

  // password_generator - computed: false, optional: true, required: false
  private _passwordGenerator?: string; 
  public get passwordGenerator() {
    return this.getStringAttribute('password_generator');
  }
  public set passwordGenerator(value: string) {
    this._passwordGenerator = value;
  }
  public resetPasswordGenerator() {
    this._passwordGenerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGeneratorInput() {
    return this._passwordGenerator;
  }

  // password_history_count - computed: true, optional: true, required: false
  private _passwordHistoryCount?: number; 
  public get passwordHistoryCount() {
    return this.getNumberAttribute('password_history_count');
  }
  public set passwordHistoryCount(value: number) {
    this._passwordHistoryCount = value;
  }
  public resetPasswordHistoryCount() {
    this._passwordHistoryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHistoryCountInput() {
    return this._passwordHistoryCount;
  }

  // password_history_duration - computed: true, optional: true, required: false
  private _passwordHistoryDuration?: string; 
  public get passwordHistoryDuration() {
    return this.getStringAttribute('password_history_duration');
  }
  public set passwordHistoryDuration(value: string) {
    this._passwordHistoryDuration = value;
  }
  public resetPasswordHistoryDuration() {
    this._passwordHistoryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHistoryDurationInput() {
    return this._passwordHistoryDuration;
  }

  // password_retirement_behavior - computed: true, optional: true, required: false
  private _passwordRetirementBehavior?: string[]; 
  public get passwordRetirementBehavior() {
    return cdktf.Fn.tolist(this.getListAttribute('password_retirement_behavior'));
  }
  public set passwordRetirementBehavior(value: string[]) {
    this._passwordRetirementBehavior = value;
  }
  public resetPasswordRetirementBehavior() {
    this._passwordRetirementBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRetirementBehaviorInput() {
    return this._passwordRetirementBehavior;
  }

  // password_validator - computed: true, optional: true, required: false
  private _passwordValidator?: string[]; 
  public get passwordValidator() {
    return cdktf.Fn.tolist(this.getListAttribute('password_validator'));
  }
  public set passwordValidator(value: string[]) {
    this._passwordValidator = value;
  }
  public resetPasswordValidator() {
    this._passwordValidator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordValidatorInput() {
    return this._passwordValidator;
  }

  // previous_last_login_time_format - computed: true, optional: true, required: false
  private _previousLastLoginTimeFormat?: string[]; 
  public get previousLastLoginTimeFormat() {
    return cdktf.Fn.tolist(this.getListAttribute('previous_last_login_time_format'));
  }
  public set previousLastLoginTimeFormat(value: string[]) {
    this._previousLastLoginTimeFormat = value;
  }
  public resetPreviousLastLoginTimeFormat() {
    this._previousLastLoginTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousLastLoginTimeFormatInput() {
    return this._previousLastLoginTimeFormat;
  }

  // re_encode_passwords_on_scheme_config_change - computed: true, optional: true, required: false
  private _reEncodePasswordsOnSchemeConfigChange?: boolean | cdktf.IResolvable; 
  public get reEncodePasswordsOnSchemeConfigChange() {
    return this.getBooleanAttribute('re_encode_passwords_on_scheme_config_change');
  }
  public set reEncodePasswordsOnSchemeConfigChange(value: boolean | cdktf.IResolvable) {
    this._reEncodePasswordsOnSchemeConfigChange = value;
  }
  public resetReEncodePasswordsOnSchemeConfigChange() {
    this._reEncodePasswordsOnSchemeConfigChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reEncodePasswordsOnSchemeConfigChangeInput() {
    return this._reEncodePasswordsOnSchemeConfigChange;
  }

  // recent_login_history_similar_attempt_behavior - computed: true, optional: true, required: false
  private _recentLoginHistorySimilarAttemptBehavior?: string; 
  public get recentLoginHistorySimilarAttemptBehavior() {
    return this.getStringAttribute('recent_login_history_similar_attempt_behavior');
  }
  public set recentLoginHistorySimilarAttemptBehavior(value: string) {
    this._recentLoginHistorySimilarAttemptBehavior = value;
  }
  public resetRecentLoginHistorySimilarAttemptBehavior() {
    this._recentLoginHistorySimilarAttemptBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentLoginHistorySimilarAttemptBehaviorInput() {
    return this._recentLoginHistorySimilarAttemptBehavior;
  }

  // require_change_by_time - computed: false, optional: true, required: false
  private _requireChangeByTime?: string; 
  public get requireChangeByTime() {
    return this.getStringAttribute('require_change_by_time');
  }
  public set requireChangeByTime(value: string) {
    this._requireChangeByTime = value;
  }
  public resetRequireChangeByTime() {
    this._requireChangeByTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireChangeByTimeInput() {
    return this._requireChangeByTime;
  }

  // require_secure_authentication - computed: true, optional: true, required: false
  private _requireSecureAuthentication?: boolean | cdktf.IResolvable; 
  public get requireSecureAuthentication() {
    return this.getBooleanAttribute('require_secure_authentication');
  }
  public set requireSecureAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireSecureAuthentication = value;
  }
  public resetRequireSecureAuthentication() {
    this._requireSecureAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSecureAuthenticationInput() {
    return this._requireSecureAuthentication;
  }

  // require_secure_password_changes - computed: true, optional: true, required: false
  private _requireSecurePasswordChanges?: boolean | cdktf.IResolvable; 
  public get requireSecurePasswordChanges() {
    return this.getBooleanAttribute('require_secure_password_changes');
  }
  public set requireSecurePasswordChanges(value: boolean | cdktf.IResolvable) {
    this._requireSecurePasswordChanges = value;
  }
  public resetRequireSecurePasswordChanges() {
    this._requireSecurePasswordChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSecurePasswordChangesInput() {
    return this._requireSecurePasswordChanges;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new PasswordPolicyRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // return_password_expiration_controls - computed: true, optional: true, required: false
  private _returnPasswordExpirationControls?: string; 
  public get returnPasswordExpirationControls() {
    return this.getStringAttribute('return_password_expiration_controls');
  }
  public set returnPasswordExpirationControls(value: string) {
    this._returnPasswordExpirationControls = value;
  }
  public resetReturnPasswordExpirationControls() {
    this._returnPasswordExpirationControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnPasswordExpirationControlsInput() {
    return this._returnPasswordExpirationControls;
  }

  // skip_validation_for_administrators - computed: true, optional: true, required: false
  private _skipValidationForAdministrators?: boolean | cdktf.IResolvable; 
  public get skipValidationForAdministrators() {
    return this.getBooleanAttribute('skip_validation_for_administrators');
  }
  public set skipValidationForAdministrators(value: boolean | cdktf.IResolvable) {
    this._skipValidationForAdministrators = value;
  }
  public resetSkipValidationForAdministrators() {
    this._skipValidationForAdministrators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipValidationForAdministratorsInput() {
    return this._skipValidationForAdministrators;
  }

  // state_update_failure_policy - computed: true, optional: true, required: false
  private _stateUpdateFailurePolicy?: string; 
  public get stateUpdateFailurePolicy() {
    return this.getStringAttribute('state_update_failure_policy');
  }
  public set stateUpdateFailurePolicy(value: string) {
    this._stateUpdateFailurePolicy = value;
  }
  public resetStateUpdateFailurePolicy() {
    this._stateUpdateFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateUpdateFailurePolicyInput() {
    return this._stateUpdateFailurePolicy;
  }

  // suppress_recent_login_history_updates_for_unusable_accounts - computed: true, optional: true, required: false
  private _suppressRecentLoginHistoryUpdatesForUnusableAccounts?: boolean | cdktf.IResolvable; 
  public get suppressRecentLoginHistoryUpdatesForUnusableAccounts() {
    return this.getBooleanAttribute('suppress_recent_login_history_updates_for_unusable_accounts');
  }
  public set suppressRecentLoginHistoryUpdatesForUnusableAccounts(value: boolean | cdktf.IResolvable) {
    this._suppressRecentLoginHistoryUpdatesForUnusableAccounts = value;
  }
  public resetSuppressRecentLoginHistoryUpdatesForUnusableAccounts() {
    this._suppressRecentLoginHistoryUpdatesForUnusableAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressRecentLoginHistoryUpdatesForUnusableAccountsInput() {
    return this._suppressRecentLoginHistoryUpdatesForUnusableAccounts;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_status_notification_handler: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountStatusNotificationHandler),
      allow_expired_password_changes: cdktf.booleanToTerraform(this._allowExpiredPasswordChanges),
      allow_multiple_password_values: cdktf.booleanToTerraform(this._allowMultiplePasswordValues),
      allow_pre_encoded_passwords: cdktf.stringToTerraform(this._allowPreEncodedPasswords),
      allow_user_password_changes: cdktf.booleanToTerraform(this._allowUserPasswordChanges),
      allowed_password_reset_token_use_condition: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPasswordResetTokenUseCondition),
      bind_password_validation_failure_action: cdktf.stringToTerraform(this._bindPasswordValidationFailureAction),
      bind_password_validator: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bindPasswordValidator),
      default_password_storage_scheme: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultPasswordStorageScheme),
      deprecated_password_storage_scheme: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deprecatedPasswordStorageScheme),
      description: cdktf.stringToTerraform(this._description),
      enable_debug: cdktf.booleanToTerraform(this._enableDebug),
      expire_passwords_without_warning: cdktf.booleanToTerraform(this._expirePasswordsWithoutWarning),
      failure_lockout_action: cdktf.stringToTerraform(this._failureLockoutAction),
      force_change_on_add: cdktf.booleanToTerraform(this._forceChangeOnAdd),
      force_change_on_reset: cdktf.booleanToTerraform(this._forceChangeOnReset),
      grace_login_count: cdktf.numberToTerraform(this._graceLoginCount),
      idle_lockout_interval: cdktf.stringToTerraform(this._idleLockoutInterval),
      ignore_duplicate_password_failures: cdktf.booleanToTerraform(this._ignoreDuplicatePasswordFailures),
      last_login_ip_address_attribute: cdktf.stringToTerraform(this._lastLoginIpAddressAttribute),
      last_login_time_attribute: cdktf.stringToTerraform(this._lastLoginTimeAttribute),
      last_login_time_format: cdktf.stringToTerraform(this._lastLoginTimeFormat),
      lockout_duration: cdktf.stringToTerraform(this._lockoutDuration),
      lockout_failure_count: cdktf.numberToTerraform(this._lockoutFailureCount),
      lockout_failure_expiration_interval: cdktf.stringToTerraform(this._lockoutFailureExpirationInterval),
      max_password_age: cdktf.stringToTerraform(this._maxPasswordAge),
      max_password_reset_age: cdktf.stringToTerraform(this._maxPasswordResetAge),
      max_retired_password_age: cdktf.stringToTerraform(this._maxRetiredPasswordAge),
      maximum_recent_login_history_failed_authentication_count: cdktf.numberToTerraform(this._maximumRecentLoginHistoryFailedAuthenticationCount),
      maximum_recent_login_history_failed_authentication_duration: cdktf.stringToTerraform(this._maximumRecentLoginHistoryFailedAuthenticationDuration),
      maximum_recent_login_history_successful_authentication_count: cdktf.numberToTerraform(this._maximumRecentLoginHistorySuccessfulAuthenticationCount),
      maximum_recent_login_history_successful_authentication_duration: cdktf.stringToTerraform(this._maximumRecentLoginHistorySuccessfulAuthenticationDuration),
      min_password_age: cdktf.stringToTerraform(this._minPasswordAge),
      minimum_bind_password_validation_frequency: cdktf.stringToTerraform(this._minimumBindPasswordValidationFrequency),
      name: cdktf.stringToTerraform(this._name),
      password_attribute: cdktf.stringToTerraform(this._passwordAttribute),
      password_change_requires_current_password: cdktf.booleanToTerraform(this._passwordChangeRequiresCurrentPassword),
      password_expiration_warning_interval: cdktf.stringToTerraform(this._passwordExpirationWarningInterval),
      password_generator: cdktf.stringToTerraform(this._passwordGenerator),
      password_history_count: cdktf.numberToTerraform(this._passwordHistoryCount),
      password_history_duration: cdktf.stringToTerraform(this._passwordHistoryDuration),
      password_retirement_behavior: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passwordRetirementBehavior),
      password_validator: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passwordValidator),
      previous_last_login_time_format: cdktf.listMapper(cdktf.stringToTerraform, false)(this._previousLastLoginTimeFormat),
      re_encode_passwords_on_scheme_config_change: cdktf.booleanToTerraform(this._reEncodePasswordsOnSchemeConfigChange),
      recent_login_history_similar_attempt_behavior: cdktf.stringToTerraform(this._recentLoginHistorySimilarAttemptBehavior),
      require_change_by_time: cdktf.stringToTerraform(this._requireChangeByTime),
      require_secure_authentication: cdktf.booleanToTerraform(this._requireSecureAuthentication),
      require_secure_password_changes: cdktf.booleanToTerraform(this._requireSecurePasswordChanges),
      return_password_expiration_controls: cdktf.stringToTerraform(this._returnPasswordExpirationControls),
      skip_validation_for_administrators: cdktf.booleanToTerraform(this._skipValidationForAdministrators),
      state_update_failure_policy: cdktf.stringToTerraform(this._stateUpdateFailurePolicy),
      suppress_recent_login_history_updates_for_unusable_accounts: cdktf.booleanToTerraform(this._suppressRecentLoginHistoryUpdatesForUnusableAccounts),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_status_notification_handler: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountStatusNotificationHandler),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allow_expired_password_changes: {
        value: cdktf.booleanToHclTerraform(this._allowExpiredPasswordChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_multiple_password_values: {
        value: cdktf.booleanToHclTerraform(this._allowMultiplePasswordValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_pre_encoded_passwords: {
        value: cdktf.stringToHclTerraform(this._allowPreEncodedPasswords),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_user_password_changes: {
        value: cdktf.booleanToHclTerraform(this._allowUserPasswordChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_password_reset_token_use_condition: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedPasswordResetTokenUseCondition),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bind_password_validation_failure_action: {
        value: cdktf.stringToHclTerraform(this._bindPasswordValidationFailureAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_password_validator: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bindPasswordValidator),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_password_storage_scheme: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultPasswordStorageScheme),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      deprecated_password_storage_scheme: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deprecatedPasswordStorageScheme),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_debug: {
        value: cdktf.booleanToHclTerraform(this._enableDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expire_passwords_without_warning: {
        value: cdktf.booleanToHclTerraform(this._expirePasswordsWithoutWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failure_lockout_action: {
        value: cdktf.stringToHclTerraform(this._failureLockoutAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_change_on_add: {
        value: cdktf.booleanToHclTerraform(this._forceChangeOnAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_change_on_reset: {
        value: cdktf.booleanToHclTerraform(this._forceChangeOnReset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grace_login_count: {
        value: cdktf.numberToHclTerraform(this._graceLoginCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      idle_lockout_interval: {
        value: cdktf.stringToHclTerraform(this._idleLockoutInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_duplicate_password_failures: {
        value: cdktf.booleanToHclTerraform(this._ignoreDuplicatePasswordFailures),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_login_ip_address_attribute: {
        value: cdktf.stringToHclTerraform(this._lastLoginIpAddressAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_login_time_attribute: {
        value: cdktf.stringToHclTerraform(this._lastLoginTimeAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_login_time_format: {
        value: cdktf.stringToHclTerraform(this._lastLoginTimeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lockout_duration: {
        value: cdktf.stringToHclTerraform(this._lockoutDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lockout_failure_count: {
        value: cdktf.numberToHclTerraform(this._lockoutFailureCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lockout_failure_expiration_interval: {
        value: cdktf.stringToHclTerraform(this._lockoutFailureExpirationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_password_age: {
        value: cdktf.stringToHclTerraform(this._maxPasswordAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_password_reset_age: {
        value: cdktf.stringToHclTerraform(this._maxPasswordResetAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retired_password_age: {
        value: cdktf.stringToHclTerraform(this._maxRetiredPasswordAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_recent_login_history_failed_authentication_count: {
        value: cdktf.numberToHclTerraform(this._maximumRecentLoginHistoryFailedAuthenticationCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_recent_login_history_failed_authentication_duration: {
        value: cdktf.stringToHclTerraform(this._maximumRecentLoginHistoryFailedAuthenticationDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_recent_login_history_successful_authentication_count: {
        value: cdktf.numberToHclTerraform(this._maximumRecentLoginHistorySuccessfulAuthenticationCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_recent_login_history_successful_authentication_duration: {
        value: cdktf.stringToHclTerraform(this._maximumRecentLoginHistorySuccessfulAuthenticationDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_password_age: {
        value: cdktf.stringToHclTerraform(this._minPasswordAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_bind_password_validation_frequency: {
        value: cdktf.stringToHclTerraform(this._minimumBindPasswordValidationFrequency),
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
      password_attribute: {
        value: cdktf.stringToHclTerraform(this._passwordAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_change_requires_current_password: {
        value: cdktf.booleanToHclTerraform(this._passwordChangeRequiresCurrentPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_expiration_warning_interval: {
        value: cdktf.stringToHclTerraform(this._passwordExpirationWarningInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_generator: {
        value: cdktf.stringToHclTerraform(this._passwordGenerator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_history_count: {
        value: cdktf.numberToHclTerraform(this._passwordHistoryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_history_duration: {
        value: cdktf.stringToHclTerraform(this._passwordHistoryDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_retirement_behavior: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passwordRetirementBehavior),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password_validator: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passwordValidator),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      previous_last_login_time_format: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._previousLastLoginTimeFormat),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      re_encode_passwords_on_scheme_config_change: {
        value: cdktf.booleanToHclTerraform(this._reEncodePasswordsOnSchemeConfigChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recent_login_history_similar_attempt_behavior: {
        value: cdktf.stringToHclTerraform(this._recentLoginHistorySimilarAttemptBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_change_by_time: {
        value: cdktf.stringToHclTerraform(this._requireChangeByTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_secure_authentication: {
        value: cdktf.booleanToHclTerraform(this._requireSecureAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_secure_password_changes: {
        value: cdktf.booleanToHclTerraform(this._requireSecurePasswordChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      return_password_expiration_controls: {
        value: cdktf.stringToHclTerraform(this._returnPasswordExpirationControls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_validation_for_administrators: {
        value: cdktf.booleanToHclTerraform(this._skipValidationForAdministrators),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state_update_failure_policy: {
        value: cdktf.stringToHclTerraform(this._stateUpdateFailurePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_recent_login_history_updates_for_unusable_accounts: {
        value: cdktf.booleanToHclTerraform(this._suppressRecentLoginHistoryUpdatesForUnusableAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
