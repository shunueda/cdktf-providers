// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryPasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_policy#name DataPingdirectoryPasswordPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_policy pingdirectory_password_policy}
*/
export class DataPingdirectoryPasswordPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryPasswordPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryPasswordPolicy to import
  * @param importFromId The id of the existing DataPingdirectoryPasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryPasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/password_policy pingdirectory_password_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryPasswordPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryPasswordPolicyConfig) {
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_status_notification_handler - computed: true, optional: false, required: false
  public get accountStatusNotificationHandler() {
    return cdktf.Fn.tolist(this.getListAttribute('account_status_notification_handler'));
  }

  // allow_expired_password_changes - computed: true, optional: false, required: false
  public get allowExpiredPasswordChanges() {
    return this.getBooleanAttribute('allow_expired_password_changes');
  }

  // allow_multiple_password_values - computed: true, optional: false, required: false
  public get allowMultiplePasswordValues() {
    return this.getBooleanAttribute('allow_multiple_password_values');
  }

  // allow_pre_encoded_passwords - computed: true, optional: false, required: false
  public get allowPreEncodedPasswords() {
    return this.getStringAttribute('allow_pre_encoded_passwords');
  }

  // allow_user_password_changes - computed: true, optional: false, required: false
  public get allowUserPasswordChanges() {
    return this.getBooleanAttribute('allow_user_password_changes');
  }

  // allowed_password_reset_token_use_condition - computed: true, optional: false, required: false
  public get allowedPasswordResetTokenUseCondition() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_password_reset_token_use_condition'));
  }

  // bind_password_validation_failure_action - computed: true, optional: false, required: false
  public get bindPasswordValidationFailureAction() {
    return this.getStringAttribute('bind_password_validation_failure_action');
  }

  // bind_password_validator - computed: true, optional: false, required: false
  public get bindPasswordValidator() {
    return cdktf.Fn.tolist(this.getListAttribute('bind_password_validator'));
  }

  // default_password_storage_scheme - computed: true, optional: false, required: false
  public get defaultPasswordStorageScheme() {
    return cdktf.Fn.tolist(this.getListAttribute('default_password_storage_scheme'));
  }

  // deprecated_password_storage_scheme - computed: true, optional: false, required: false
  public get deprecatedPasswordStorageScheme() {
    return cdktf.Fn.tolist(this.getListAttribute('deprecated_password_storage_scheme'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_debug - computed: true, optional: false, required: false
  public get enableDebug() {
    return this.getBooleanAttribute('enable_debug');
  }

  // expire_passwords_without_warning - computed: true, optional: false, required: false
  public get expirePasswordsWithoutWarning() {
    return this.getBooleanAttribute('expire_passwords_without_warning');
  }

  // failure_lockout_action - computed: true, optional: false, required: false
  public get failureLockoutAction() {
    return this.getStringAttribute('failure_lockout_action');
  }

  // force_change_on_add - computed: true, optional: false, required: false
  public get forceChangeOnAdd() {
    return this.getBooleanAttribute('force_change_on_add');
  }

  // force_change_on_reset - computed: true, optional: false, required: false
  public get forceChangeOnReset() {
    return this.getBooleanAttribute('force_change_on_reset');
  }

  // grace_login_count - computed: true, optional: false, required: false
  public get graceLoginCount() {
    return this.getNumberAttribute('grace_login_count');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_lockout_interval - computed: true, optional: false, required: false
  public get idleLockoutInterval() {
    return this.getStringAttribute('idle_lockout_interval');
  }

  // ignore_duplicate_password_failures - computed: true, optional: false, required: false
  public get ignoreDuplicatePasswordFailures() {
    return this.getBooleanAttribute('ignore_duplicate_password_failures');
  }

  // last_login_ip_address_attribute - computed: true, optional: false, required: false
  public get lastLoginIpAddressAttribute() {
    return this.getStringAttribute('last_login_ip_address_attribute');
  }

  // last_login_time_attribute - computed: true, optional: false, required: false
  public get lastLoginTimeAttribute() {
    return this.getStringAttribute('last_login_time_attribute');
  }

  // last_login_time_format - computed: true, optional: false, required: false
  public get lastLoginTimeFormat() {
    return this.getStringAttribute('last_login_time_format');
  }

  // lockout_duration - computed: true, optional: false, required: false
  public get lockoutDuration() {
    return this.getStringAttribute('lockout_duration');
  }

  // lockout_failure_count - computed: true, optional: false, required: false
  public get lockoutFailureCount() {
    return this.getNumberAttribute('lockout_failure_count');
  }

  // lockout_failure_expiration_interval - computed: true, optional: false, required: false
  public get lockoutFailureExpirationInterval() {
    return this.getStringAttribute('lockout_failure_expiration_interval');
  }

  // max_password_age - computed: true, optional: false, required: false
  public get maxPasswordAge() {
    return this.getStringAttribute('max_password_age');
  }

  // max_password_reset_age - computed: true, optional: false, required: false
  public get maxPasswordResetAge() {
    return this.getStringAttribute('max_password_reset_age');
  }

  // max_retired_password_age - computed: true, optional: false, required: false
  public get maxRetiredPasswordAge() {
    return this.getStringAttribute('max_retired_password_age');
  }

  // maximum_recent_login_history_failed_authentication_count - computed: true, optional: false, required: false
  public get maximumRecentLoginHistoryFailedAuthenticationCount() {
    return this.getNumberAttribute('maximum_recent_login_history_failed_authentication_count');
  }

  // maximum_recent_login_history_failed_authentication_duration - computed: true, optional: false, required: false
  public get maximumRecentLoginHistoryFailedAuthenticationDuration() {
    return this.getStringAttribute('maximum_recent_login_history_failed_authentication_duration');
  }

  // maximum_recent_login_history_successful_authentication_count - computed: true, optional: false, required: false
  public get maximumRecentLoginHistorySuccessfulAuthenticationCount() {
    return this.getNumberAttribute('maximum_recent_login_history_successful_authentication_count');
  }

  // maximum_recent_login_history_successful_authentication_duration - computed: true, optional: false, required: false
  public get maximumRecentLoginHistorySuccessfulAuthenticationDuration() {
    return this.getStringAttribute('maximum_recent_login_history_successful_authentication_duration');
  }

  // min_password_age - computed: true, optional: false, required: false
  public get minPasswordAge() {
    return this.getStringAttribute('min_password_age');
  }

  // minimum_bind_password_validation_frequency - computed: true, optional: false, required: false
  public get minimumBindPasswordValidationFrequency() {
    return this.getStringAttribute('minimum_bind_password_validation_frequency');
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

  // password_attribute - computed: true, optional: false, required: false
  public get passwordAttribute() {
    return this.getStringAttribute('password_attribute');
  }

  // password_change_requires_current_password - computed: true, optional: false, required: false
  public get passwordChangeRequiresCurrentPassword() {
    return this.getBooleanAttribute('password_change_requires_current_password');
  }

  // password_expiration_warning_interval - computed: true, optional: false, required: false
  public get passwordExpirationWarningInterval() {
    return this.getStringAttribute('password_expiration_warning_interval');
  }

  // password_generator - computed: true, optional: false, required: false
  public get passwordGenerator() {
    return this.getStringAttribute('password_generator');
  }

  // password_history_count - computed: true, optional: false, required: false
  public get passwordHistoryCount() {
    return this.getNumberAttribute('password_history_count');
  }

  // password_history_duration - computed: true, optional: false, required: false
  public get passwordHistoryDuration() {
    return this.getStringAttribute('password_history_duration');
  }

  // password_retirement_behavior - computed: true, optional: false, required: false
  public get passwordRetirementBehavior() {
    return cdktf.Fn.tolist(this.getListAttribute('password_retirement_behavior'));
  }

  // password_validator - computed: true, optional: false, required: false
  public get passwordValidator() {
    return cdktf.Fn.tolist(this.getListAttribute('password_validator'));
  }

  // previous_last_login_time_format - computed: true, optional: false, required: false
  public get previousLastLoginTimeFormat() {
    return cdktf.Fn.tolist(this.getListAttribute('previous_last_login_time_format'));
  }

  // re_encode_passwords_on_scheme_config_change - computed: true, optional: false, required: false
  public get reEncodePasswordsOnSchemeConfigChange() {
    return this.getBooleanAttribute('re_encode_passwords_on_scheme_config_change');
  }

  // recent_login_history_similar_attempt_behavior - computed: true, optional: false, required: false
  public get recentLoginHistorySimilarAttemptBehavior() {
    return this.getStringAttribute('recent_login_history_similar_attempt_behavior');
  }

  // require_change_by_time - computed: true, optional: false, required: false
  public get requireChangeByTime() {
    return this.getStringAttribute('require_change_by_time');
  }

  // require_secure_authentication - computed: true, optional: false, required: false
  public get requireSecureAuthentication() {
    return this.getBooleanAttribute('require_secure_authentication');
  }

  // require_secure_password_changes - computed: true, optional: false, required: false
  public get requireSecurePasswordChanges() {
    return this.getBooleanAttribute('require_secure_password_changes');
  }

  // return_password_expiration_controls - computed: true, optional: false, required: false
  public get returnPasswordExpirationControls() {
    return this.getStringAttribute('return_password_expiration_controls');
  }

  // skip_validation_for_administrators - computed: true, optional: false, required: false
  public get skipValidationForAdministrators() {
    return this.getBooleanAttribute('skip_validation_for_administrators');
  }

  // state_update_failure_policy - computed: true, optional: false, required: false
  public get stateUpdateFailurePolicy() {
    return this.getStringAttribute('state_update_failure_policy');
  }

  // suppress_recent_login_history_updates_for_unusable_accounts - computed: true, optional: false, required: false
  public get suppressRecentLoginHistoryUpdatesForUnusableAccounts() {
    return this.getBooleanAttribute('suppress_recent_login_history_updates_for_unusable_accounts');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
