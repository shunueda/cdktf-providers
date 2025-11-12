// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/notification_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRenderNotificationSettingConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/notification_setting render_notification_setting}
*/
export class DataRenderNotificationSetting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_notification_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRenderNotificationSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRenderNotificationSetting to import
  * @param importFromId The id of the existing DataRenderNotificationSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/notification_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRenderNotificationSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_notification_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/notification_setting render_notification_setting} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRenderNotificationSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRenderNotificationSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'render_notification_setting',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
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

  // email_enabled - computed: true, optional: false, required: false
  public get emailEnabled() {
    return this.getBooleanAttribute('email_enabled');
  }

  // notifications_to_send - computed: true, optional: false, required: false
  public get notificationsToSend() {
    return this.getStringAttribute('notifications_to_send');
  }

  // preview_notifications_enabled - computed: true, optional: false, required: false
  public get previewNotificationsEnabled() {
    return this.getBooleanAttribute('preview_notifications_enabled');
  }

  // slack_enabled - computed: true, optional: false, required: false
  public get slackEnabled() {
    return this.getBooleanAttribute('slack_enabled');
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
