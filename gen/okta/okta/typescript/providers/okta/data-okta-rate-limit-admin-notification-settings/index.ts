// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/rate_limit_admin_notification_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaRateLimitAdminNotificationSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/rate_limit_admin_notification_settings okta_rate_limit_admin_notification_settings}
*/
export class DataOktaRateLimitAdminNotificationSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_rate_limit_admin_notification_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaRateLimitAdminNotificationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaRateLimitAdminNotificationSettings to import
  * @param importFromId The id of the existing DataOktaRateLimitAdminNotificationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/rate_limit_admin_notification_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaRateLimitAdminNotificationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_rate_limit_admin_notification_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/data-sources/rate_limit_admin_notification_settings okta_rate_limit_admin_notification_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaRateLimitAdminNotificationSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaRateLimitAdminNotificationSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_rate_limit_admin_notification_settings',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications_enabled - computed: true, optional: false, required: false
  public get notificationsEnabled() {
    return this.getBooleanAttribute('notifications_enabled');
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
