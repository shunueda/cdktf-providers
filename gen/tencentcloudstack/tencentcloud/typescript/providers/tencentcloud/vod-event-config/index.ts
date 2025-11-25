// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_event_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VodEventConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to receive video deletion completion event notification, default `OFF` is to ignore the event notification, `ON` is to receive event notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_event_config#delete_media_complete_event_switch VodEventConfig#delete_media_complete_event_switch}
  */
  readonly deleteMediaCompleteEventSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_event_config#id VodEventConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How to receive event notifications. Valid values:
  * - Push: HTTP callback notification;
  * - PULL: Reliable notification based on message queuing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_event_config#mode VodEventConfig#mode}
  */
  readonly mode?: string;
  /**
  * The address used to receive 3.0 format callbacks when receiving HTTP callback notifications. Note: If you take the NotificationUrl parameter and the value is an empty string, the 3.0 format callback address is cleared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_event_config#notification_url VodEventConfig#notification_url}
  */
  readonly notificationUrl?: string;
  /**
  * Sub app id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_event_config#sub_app_id VodEventConfig#sub_app_id}
  */
  readonly subAppId: number;
  /**
  * Whether to receive video upload completion event notification, default `OFF` means to ignore the event notification, `ON` means to receive event notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_event_config#upload_media_complete_event_switch VodEventConfig#upload_media_complete_event_switch}
  */
  readonly uploadMediaCompleteEventSwitch?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_event_config tencentcloud_vod_event_config}
*/
export class VodEventConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vod_event_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VodEventConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VodEventConfig to import
  * @param importFromId The id of the existing VodEventConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_event_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VodEventConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vod_event_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_event_config tencentcloud_vod_event_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VodEventConfigConfig
  */
  public constructor(scope: Construct, id: string, config: VodEventConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vod_event_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMediaCompleteEventSwitch = config.deleteMediaCompleteEventSwitch;
    this._id = config.id;
    this._mode = config.mode;
    this._notificationUrl = config.notificationUrl;
    this._subAppId = config.subAppId;
    this._uploadMediaCompleteEventSwitch = config.uploadMediaCompleteEventSwitch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_media_complete_event_switch - computed: true, optional: true, required: false
  private _deleteMediaCompleteEventSwitch?: string; 
  public get deleteMediaCompleteEventSwitch() {
    return this.getStringAttribute('delete_media_complete_event_switch');
  }
  public set deleteMediaCompleteEventSwitch(value: string) {
    this._deleteMediaCompleteEventSwitch = value;
  }
  public resetDeleteMediaCompleteEventSwitch() {
    this._deleteMediaCompleteEventSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMediaCompleteEventSwitchInput() {
    return this._deleteMediaCompleteEventSwitch;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // notification_url - computed: false, optional: true, required: false
  private _notificationUrl?: string; 
  public get notificationUrl() {
    return this.getStringAttribute('notification_url');
  }
  public set notificationUrl(value: string) {
    this._notificationUrl = value;
  }
  public resetNotificationUrl() {
    this._notificationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationUrlInput() {
    return this._notificationUrl;
  }

  // sub_app_id - computed: false, optional: false, required: true
  private _subAppId?: number; 
  public get subAppId() {
    return this.getNumberAttribute('sub_app_id');
  }
  public set subAppId(value: number) {
    this._subAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subAppIdInput() {
    return this._subAppId;
  }

  // upload_media_complete_event_switch - computed: true, optional: true, required: false
  private _uploadMediaCompleteEventSwitch?: string; 
  public get uploadMediaCompleteEventSwitch() {
    return this.getStringAttribute('upload_media_complete_event_switch');
  }
  public set uploadMediaCompleteEventSwitch(value: string) {
    this._uploadMediaCompleteEventSwitch = value;
  }
  public resetUploadMediaCompleteEventSwitch() {
    this._uploadMediaCompleteEventSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadMediaCompleteEventSwitchInput() {
    return this._uploadMediaCompleteEventSwitch;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_media_complete_event_switch: cdktf.stringToTerraform(this._deleteMediaCompleteEventSwitch),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      notification_url: cdktf.stringToTerraform(this._notificationUrl),
      sub_app_id: cdktf.numberToTerraform(this._subAppId),
      upload_media_complete_event_switch: cdktf.stringToTerraform(this._uploadMediaCompleteEventSwitch),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_media_complete_event_switch: {
        value: cdktf.stringToHclTerraform(this._deleteMediaCompleteEventSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_url: {
        value: cdktf.stringToHclTerraform(this._notificationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_app_id: {
        value: cdktf.numberToHclTerraform(this._subAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upload_media_complete_event_switch: {
        value: cdktf.stringToHclTerraform(this._uploadMediaCompleteEventSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
