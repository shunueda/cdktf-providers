// https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/notification_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether email notifications are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/notification_setting#email_enabled NotificationSetting#email_enabled}
  */
  readonly emailEnabled?: boolean | cdktf.IResolvable;
  /**
  * The types of notifications to send. Must be one of `all`, `failure`, or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/notification_setting#notifications_to_send NotificationSetting#notifications_to_send}
  */
  readonly notificationsToSend?: string;
  /**
  * Whether notifications for preview environments are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/notification_setting#preview_notifications_enabled NotificationSetting#preview_notifications_enabled}
  */
  readonly previewNotificationsEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/notification_setting render_notification_setting}
*/
export class NotificationSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_notification_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationSetting to import
  * @param importFromId The id of the existing NotificationSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/notification_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_notification_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/notification_setting render_notification_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NotificationSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'render_notification_setting',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailEnabled = config.emailEnabled;
    this._notificationsToSend = config.notificationsToSend;
    this._previewNotificationsEnabled = config.previewNotificationsEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_enabled - computed: true, optional: true, required: false
  private _emailEnabled?: boolean | cdktf.IResolvable; 
  public get emailEnabled() {
    return this.getBooleanAttribute('email_enabled');
  }
  public set emailEnabled(value: boolean | cdktf.IResolvable) {
    this._emailEnabled = value;
  }
  public resetEmailEnabled() {
    this._emailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailEnabledInput() {
    return this._emailEnabled;
  }

  // notifications_to_send - computed: true, optional: true, required: false
  private _notificationsToSend?: string; 
  public get notificationsToSend() {
    return this.getStringAttribute('notifications_to_send');
  }
  public set notificationsToSend(value: string) {
    this._notificationsToSend = value;
  }
  public resetNotificationsToSend() {
    this._notificationsToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsToSendInput() {
    return this._notificationsToSend;
  }

  // preview_notifications_enabled - computed: true, optional: true, required: false
  private _previewNotificationsEnabled?: boolean | cdktf.IResolvable; 
  public get previewNotificationsEnabled() {
    return this.getBooleanAttribute('preview_notifications_enabled');
  }
  public set previewNotificationsEnabled(value: boolean | cdktf.IResolvable) {
    this._previewNotificationsEnabled = value;
  }
  public resetPreviewNotificationsEnabled() {
    this._previewNotificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewNotificationsEnabledInput() {
    return this._previewNotificationsEnabled;
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
      email_enabled: cdktf.booleanToTerraform(this._emailEnabled),
      notifications_to_send: cdktf.stringToTerraform(this._notificationsToSend),
      preview_notifications_enabled: cdktf.booleanToTerraform(this._previewNotificationsEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_enabled: {
        value: cdktf.booleanToHclTerraform(this._emailEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notifications_to_send: {
        value: cdktf.stringToHclTerraform(this._notificationsToSend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview_notifications_enabled: {
        value: cdktf.booleanToHclTerraform(this._previewNotificationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
