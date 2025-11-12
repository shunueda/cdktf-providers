// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnterpriseSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access Keys maximum validity in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#access_key_max_validity EnterpriseSettings#access_key_max_validity}
  */
  readonly accessKeyMaxValidity: number;
  /**
  * Alarms enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#alarm_enabled EnterpriseSettings#alarm_enabled}
  */
  readonly alarmEnabled?: boolean | cdktf.IResolvable;
  /**
  * Apply default policies enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#apply_default_policies_enabled EnterpriseSettings#apply_default_policies_enabled}
  */
  readonly applyDefaultPoliciesEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of audit log siem integration ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#audit_log_siem_intgr_ids EnterpriseSettings#audit_log_siem_intgr_ids}
  */
  readonly auditLogSiemIntgrIds?: string[];
  /**
  * Audit Logs Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#audit_logs_enabled EnterpriseSettings#audit_logs_enabled}
  */
  readonly auditLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Default policies enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#default_policies_enabled EnterpriseSettings#default_policies_enabled}
  */
  readonly defaultPoliciesEnabled?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#id EnterpriseSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Named users access keys expiry notifications enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#named_users_access_keys_expiry_notifications_enabled EnterpriseSettings#named_users_access_keys_expiry_notifications_enabled}
  */
  readonly namedUsersAccessKeysExpiryNotificationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Notification threshold access keys expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#notification_threshold_access_keys_expiry EnterpriseSettings#notification_threshold_access_keys_expiry}
  */
  readonly notificationThresholdAccessKeysExpiry?: number;
  /**
  * Require alert dismissal note
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#require_alert_dismissal_note EnterpriseSettings#require_alert_dismissal_note}
  */
  readonly requireAlertDismissalNote?: boolean | cdktf.IResolvable;
  /**
  * Service users access keys expiry notifications enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#service_users_access_keys_expiry_notifications_enabled EnterpriseSettings#service_users_access_keys_expiry_notifications_enabled}
  */
  readonly serviceUsersAccessKeysExpiryNotificationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Browser session timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#session_timeout EnterpriseSettings#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * User attribution in notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#user_attribution_in_notification EnterpriseSettings#user_attribution_in_notification}
  */
  readonly userAttributionInNotification?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings prismacloud_enterprise_settings}
*/
export class EnterpriseSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_enterprise_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnterpriseSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnterpriseSettings to import
  * @param importFromId The id of the existing EnterpriseSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnterpriseSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_enterprise_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/enterprise_settings prismacloud_enterprise_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnterpriseSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: EnterpriseSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_enterprise_settings',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyMaxValidity = config.accessKeyMaxValidity;
    this._alarmEnabled = config.alarmEnabled;
    this._applyDefaultPoliciesEnabled = config.applyDefaultPoliciesEnabled;
    this._auditLogSiemIntgrIds = config.auditLogSiemIntgrIds;
    this._auditLogsEnabled = config.auditLogsEnabled;
    this._defaultPoliciesEnabled = config.defaultPoliciesEnabled;
    this._id = config.id;
    this._namedUsersAccessKeysExpiryNotificationsEnabled = config.namedUsersAccessKeysExpiryNotificationsEnabled;
    this._notificationThresholdAccessKeysExpiry = config.notificationThresholdAccessKeysExpiry;
    this._requireAlertDismissalNote = config.requireAlertDismissalNote;
    this._serviceUsersAccessKeysExpiryNotificationsEnabled = config.serviceUsersAccessKeysExpiryNotificationsEnabled;
    this._sessionTimeout = config.sessionTimeout;
    this._userAttributionInNotification = config.userAttributionInNotification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_max_validity - computed: false, optional: false, required: true
  private _accessKeyMaxValidity?: number; 
  public get accessKeyMaxValidity() {
    return this.getNumberAttribute('access_key_max_validity');
  }
  public set accessKeyMaxValidity(value: number) {
    this._accessKeyMaxValidity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyMaxValidityInput() {
    return this._accessKeyMaxValidity;
  }

  // alarm_enabled - computed: false, optional: true, required: false
  private _alarmEnabled?: boolean | cdktf.IResolvable; 
  public get alarmEnabled() {
    return this.getBooleanAttribute('alarm_enabled');
  }
  public set alarmEnabled(value: boolean | cdktf.IResolvable) {
    this._alarmEnabled = value;
  }
  public resetAlarmEnabled() {
    this._alarmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmEnabledInput() {
    return this._alarmEnabled;
  }

  // apply_default_policies_enabled - computed: false, optional: true, required: false
  private _applyDefaultPoliciesEnabled?: boolean | cdktf.IResolvable; 
  public get applyDefaultPoliciesEnabled() {
    return this.getBooleanAttribute('apply_default_policies_enabled');
  }
  public set applyDefaultPoliciesEnabled(value: boolean | cdktf.IResolvable) {
    this._applyDefaultPoliciesEnabled = value;
  }
  public resetApplyDefaultPoliciesEnabled() {
    this._applyDefaultPoliciesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyDefaultPoliciesEnabledInput() {
    return this._applyDefaultPoliciesEnabled;
  }

  // audit_log_siem_intgr_ids - computed: false, optional: true, required: false
  private _auditLogSiemIntgrIds?: string[]; 
  public get auditLogSiemIntgrIds() {
    return cdktf.Fn.tolist(this.getListAttribute('audit_log_siem_intgr_ids'));
  }
  public set auditLogSiemIntgrIds(value: string[]) {
    this._auditLogSiemIntgrIds = value;
  }
  public resetAuditLogSiemIntgrIds() {
    this._auditLogSiemIntgrIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogSiemIntgrIdsInput() {
    return this._auditLogSiemIntgrIds;
  }

  // audit_logs_enabled - computed: false, optional: true, required: false
  private _auditLogsEnabled?: boolean | cdktf.IResolvable; 
  public get auditLogsEnabled() {
    return this.getBooleanAttribute('audit_logs_enabled');
  }
  public set auditLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._auditLogsEnabled = value;
  }
  public resetAuditLogsEnabled() {
    this._auditLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogsEnabledInput() {
    return this._auditLogsEnabled;
  }

  // default_policies_enabled - computed: false, optional: true, required: false
  private _defaultPoliciesEnabled?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get defaultPoliciesEnabled() {
    return this.getBooleanMapAttribute('default_policies_enabled');
  }
  public set defaultPoliciesEnabled(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._defaultPoliciesEnabled = value;
  }
  public resetDefaultPoliciesEnabled() {
    this._defaultPoliciesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoliciesEnabledInput() {
    return this._defaultPoliciesEnabled;
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

  // named_users_access_keys_expiry_notifications_enabled - computed: false, optional: true, required: false
  private _namedUsersAccessKeysExpiryNotificationsEnabled?: boolean | cdktf.IResolvable; 
  public get namedUsersAccessKeysExpiryNotificationsEnabled() {
    return this.getBooleanAttribute('named_users_access_keys_expiry_notifications_enabled');
  }
  public set namedUsersAccessKeysExpiryNotificationsEnabled(value: boolean | cdktf.IResolvable) {
    this._namedUsersAccessKeysExpiryNotificationsEnabled = value;
  }
  public resetNamedUsersAccessKeysExpiryNotificationsEnabled() {
    this._namedUsersAccessKeysExpiryNotificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedUsersAccessKeysExpiryNotificationsEnabledInput() {
    return this._namedUsersAccessKeysExpiryNotificationsEnabled;
  }

  // notification_threshold_access_keys_expiry - computed: false, optional: true, required: false
  private _notificationThresholdAccessKeysExpiry?: number; 
  public get notificationThresholdAccessKeysExpiry() {
    return this.getNumberAttribute('notification_threshold_access_keys_expiry');
  }
  public set notificationThresholdAccessKeysExpiry(value: number) {
    this._notificationThresholdAccessKeysExpiry = value;
  }
  public resetNotificationThresholdAccessKeysExpiry() {
    this._notificationThresholdAccessKeysExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationThresholdAccessKeysExpiryInput() {
    return this._notificationThresholdAccessKeysExpiry;
  }

  // require_alert_dismissal_note - computed: false, optional: true, required: false
  private _requireAlertDismissalNote?: boolean | cdktf.IResolvable; 
  public get requireAlertDismissalNote() {
    return this.getBooleanAttribute('require_alert_dismissal_note');
  }
  public set requireAlertDismissalNote(value: boolean | cdktf.IResolvable) {
    this._requireAlertDismissalNote = value;
  }
  public resetRequireAlertDismissalNote() {
    this._requireAlertDismissalNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAlertDismissalNoteInput() {
    return this._requireAlertDismissalNote;
  }

  // service_users_access_keys_expiry_notifications_enabled - computed: false, optional: true, required: false
  private _serviceUsersAccessKeysExpiryNotificationsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceUsersAccessKeysExpiryNotificationsEnabled() {
    return this.getBooleanAttribute('service_users_access_keys_expiry_notifications_enabled');
  }
  public set serviceUsersAccessKeysExpiryNotificationsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceUsersAccessKeysExpiryNotificationsEnabled = value;
  }
  public resetServiceUsersAccessKeysExpiryNotificationsEnabled() {
    this._serviceUsersAccessKeysExpiryNotificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUsersAccessKeysExpiryNotificationsEnabledInput() {
    return this._serviceUsersAccessKeysExpiryNotificationsEnabled;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // user_attribution_in_notification - computed: false, optional: true, required: false
  private _userAttributionInNotification?: boolean | cdktf.IResolvable; 
  public get userAttributionInNotification() {
    return this.getBooleanAttribute('user_attribution_in_notification');
  }
  public set userAttributionInNotification(value: boolean | cdktf.IResolvable) {
    this._userAttributionInNotification = value;
  }
  public resetUserAttributionInNotification() {
    this._userAttributionInNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributionInNotificationInput() {
    return this._userAttributionInNotification;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_max_validity: cdktf.numberToTerraform(this._accessKeyMaxValidity),
      alarm_enabled: cdktf.booleanToTerraform(this._alarmEnabled),
      apply_default_policies_enabled: cdktf.booleanToTerraform(this._applyDefaultPoliciesEnabled),
      audit_log_siem_intgr_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditLogSiemIntgrIds),
      audit_logs_enabled: cdktf.booleanToTerraform(this._auditLogsEnabled),
      default_policies_enabled: cdktf.hashMapper(cdktf.booleanToTerraform)(this._defaultPoliciesEnabled),
      id: cdktf.stringToTerraform(this._id),
      named_users_access_keys_expiry_notifications_enabled: cdktf.booleanToTerraform(this._namedUsersAccessKeysExpiryNotificationsEnabled),
      notification_threshold_access_keys_expiry: cdktf.numberToTerraform(this._notificationThresholdAccessKeysExpiry),
      require_alert_dismissal_note: cdktf.booleanToTerraform(this._requireAlertDismissalNote),
      service_users_access_keys_expiry_notifications_enabled: cdktf.booleanToTerraform(this._serviceUsersAccessKeysExpiryNotificationsEnabled),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      user_attribution_in_notification: cdktf.booleanToTerraform(this._userAttributionInNotification),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_max_validity: {
        value: cdktf.numberToHclTerraform(this._accessKeyMaxValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alarm_enabled: {
        value: cdktf.booleanToHclTerraform(this._alarmEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      apply_default_policies_enabled: {
        value: cdktf.booleanToHclTerraform(this._applyDefaultPoliciesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audit_log_siem_intgr_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditLogSiemIntgrIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      audit_logs_enabled: {
        value: cdktf.booleanToHclTerraform(this._auditLogsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_policies_enabled: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._defaultPoliciesEnabled),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      named_users_access_keys_expiry_notifications_enabled: {
        value: cdktf.booleanToHclTerraform(this._namedUsersAccessKeysExpiryNotificationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notification_threshold_access_keys_expiry: {
        value: cdktf.numberToHclTerraform(this._notificationThresholdAccessKeysExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      require_alert_dismissal_note: {
        value: cdktf.booleanToHclTerraform(this._requireAlertDismissalNote),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_users_access_keys_expiry_notifications_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceUsersAccessKeysExpiryNotificationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_attribution_in_notification: {
        value: cdktf.booleanToHclTerraform(this._userAttributionInNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
