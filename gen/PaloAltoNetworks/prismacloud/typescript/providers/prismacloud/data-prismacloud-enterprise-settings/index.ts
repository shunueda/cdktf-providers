// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/enterprise_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrismacloudEnterpriseSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/enterprise_settings#id DataPrismacloudEnterpriseSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/enterprise_settings prismacloud_enterprise_settings}
*/
export class DataPrismacloudEnterpriseSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_enterprise_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrismacloudEnterpriseSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrismacloudEnterpriseSettings to import
  * @param importFromId The id of the existing DataPrismacloudEnterpriseSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/enterprise_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrismacloudEnterpriseSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_enterprise_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/enterprise_settings prismacloud_enterprise_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrismacloudEnterpriseSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPrismacloudEnterpriseSettingsConfig = {}) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_max_validity - computed: true, optional: false, required: false
  public get accessKeyMaxValidity() {
    return this.getNumberAttribute('access_key_max_validity');
  }

  // alarm_enabled - computed: true, optional: false, required: false
  public get alarmEnabled() {
    return this.getBooleanAttribute('alarm_enabled');
  }

  // apply_default_policies_enabled - computed: true, optional: false, required: false
  public get applyDefaultPoliciesEnabled() {
    return this.getBooleanAttribute('apply_default_policies_enabled');
  }

  // audit_log_siem_intgr_ids - computed: true, optional: false, required: false
  public get auditLogSiemIntgrIds() {
    return cdktf.Fn.tolist(this.getListAttribute('audit_log_siem_intgr_ids'));
  }

  // audit_logs_enabled - computed: true, optional: false, required: false
  public get auditLogsEnabled() {
    return this.getBooleanAttribute('audit_logs_enabled');
  }

  // default_policies_enabled - computed: true, optional: false, required: false
  private _defaultPoliciesEnabled = new cdktf.BooleanMap(this, "default_policies_enabled");
  public get defaultPoliciesEnabled() {
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

  // named_users_access_keys_expiry_notifications_enabled - computed: true, optional: false, required: false
  public get namedUsersAccessKeysExpiryNotificationsEnabled() {
    return this.getBooleanAttribute('named_users_access_keys_expiry_notifications_enabled');
  }

  // notification_threshold_access_keys_expiry - computed: true, optional: false, required: false
  public get notificationThresholdAccessKeysExpiry() {
    return this.getNumberAttribute('notification_threshold_access_keys_expiry');
  }

  // require_alert_dismissal_note - computed: true, optional: false, required: false
  public get requireAlertDismissalNote() {
    return this.getBooleanAttribute('require_alert_dismissal_note');
  }

  // service_users_access_keys_expiry_notifications_enabled - computed: true, optional: false, required: false
  public get serviceUsersAccessKeysExpiryNotificationsEnabled() {
    return this.getBooleanAttribute('service_users_access_keys_expiry_notifications_enabled');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // user_attribution_in_notification - computed: true, optional: false, required: false
  public get userAttributionInNotification() {
    return this.getBooleanAttribute('user_attribution_in_notification');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
