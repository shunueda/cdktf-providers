// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/rate_limit_admin_notification_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RateLimitAdminNotificationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables or disables admin notifications for rate limiting events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/rate_limit_admin_notification_settings#notifications_enabled RateLimitAdminNotificationSettings#notifications_enabled}
  */
  readonly notificationsEnabled: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/rate_limit_admin_notification_settings okta_rate_limit_admin_notification_settings}
*/
export class RateLimitAdminNotificationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_rate_limit_admin_notification_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RateLimitAdminNotificationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RateLimitAdminNotificationSettings to import
  * @param importFromId The id of the existing RateLimitAdminNotificationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/rate_limit_admin_notification_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RateLimitAdminNotificationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_rate_limit_admin_notification_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/rate_limit_admin_notification_settings okta_rate_limit_admin_notification_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RateLimitAdminNotificationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: RateLimitAdminNotificationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_rate_limit_admin_notification_settings',
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
    this._notificationsEnabled = config.notificationsEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications_enabled - computed: false, optional: false, required: true
  private _notificationsEnabled?: boolean | cdktf.IResolvable; 
  public get notificationsEnabled() {
    return this.getBooleanAttribute('notifications_enabled');
  }
  public set notificationsEnabled(value: boolean | cdktf.IResolvable) {
    this._notificationsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsEnabledInput() {
    return this._notificationsEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      notifications_enabled: cdktf.booleanToTerraform(this._notificationsEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      notifications_enabled: {
        value: cdktf.booleanToHclTerraform(this._notificationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
