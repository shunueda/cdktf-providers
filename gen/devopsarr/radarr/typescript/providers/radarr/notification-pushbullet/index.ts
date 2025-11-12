// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationPushbulletConfig extends cdktf.TerraformMetaArguments {
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#api_key NotificationPushbullet#api_key}
  */
  readonly apiKey: string;
  /**
  * List of channel tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#channel_tags NotificationPushbullet#channel_tags}
  */
  readonly channelTags?: string[];
  /**
  * List of devices IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#device_ids NotificationPushbullet#device_ids}
  */
  readonly deviceIds?: string[];
  /**
  * Include health warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#include_health_warnings NotificationPushbullet#include_health_warnings}
  */
  readonly includeHealthWarnings?: boolean | cdktf.IResolvable;
  /**
  * NotificationPushbullet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#name NotificationPushbullet#name}
  */
  readonly name: string;
  /**
  * On application update flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#on_application_update NotificationPushbullet#on_application_update}
  */
  readonly onApplicationUpdate?: boolean | cdktf.IResolvable;
  /**
  * On download flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#on_download NotificationPushbullet#on_download}
  */
  readonly onDownload?: boolean | cdktf.IResolvable;
  /**
  * On grab flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#on_grab NotificationPushbullet#on_grab}
  */
  readonly onGrab?: boolean | cdktf.IResolvable;
  /**
  * On health issue flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#on_health_issue NotificationPushbullet#on_health_issue}
  */
  readonly onHealthIssue?: boolean | cdktf.IResolvable;
  /**
  * On health restored flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#on_health_restored NotificationPushbullet#on_health_restored}
  */
  readonly onHealthRestored?: boolean | cdktf.IResolvable;
  /**
  * On manual interaction required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#on_manual_interaction_required NotificationPushbullet#on_manual_interaction_required}
  */
  readonly onManualInteractionRequired?: boolean | cdktf.IResolvable;
  /**
  * On movie added flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#on_movie_added NotificationPushbullet#on_movie_added}
  */
  readonly onMovieAdded?: boolean | cdktf.IResolvable;
  /**
  * On movie delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#on_movie_delete NotificationPushbullet#on_movie_delete}
  */
  readonly onMovieDelete: boolean | cdktf.IResolvable;
  /**
  * On movie file delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#on_movie_file_delete NotificationPushbullet#on_movie_file_delete}
  */
  readonly onMovieFileDelete?: boolean | cdktf.IResolvable;
  /**
  * On movie file delete for upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#on_movie_file_delete_for_upgrade NotificationPushbullet#on_movie_file_delete_for_upgrade}
  */
  readonly onMovieFileDeleteForUpgrade?: boolean | cdktf.IResolvable;
  /**
  * On upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#on_upgrade NotificationPushbullet#on_upgrade}
  */
  readonly onUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Sender ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#sender_id NotificationPushbullet#sender_id}
  */
  readonly senderId?: string;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#tags NotificationPushbullet#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet radarr_notification_pushbullet}
*/
export class NotificationPushbullet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_notification_pushbullet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationPushbullet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationPushbullet to import
  * @param importFromId The id of the existing NotificationPushbullet that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationPushbullet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_notification_pushbullet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/notification_pushbullet radarr_notification_pushbullet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationPushbulletConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationPushbulletConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_notification_pushbullet',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._channelTags = config.channelTags;
    this._deviceIds = config.deviceIds;
    this._includeHealthWarnings = config.includeHealthWarnings;
    this._name = config.name;
    this._onApplicationUpdate = config.onApplicationUpdate;
    this._onDownload = config.onDownload;
    this._onGrab = config.onGrab;
    this._onHealthIssue = config.onHealthIssue;
    this._onHealthRestored = config.onHealthRestored;
    this._onManualInteractionRequired = config.onManualInteractionRequired;
    this._onMovieAdded = config.onMovieAdded;
    this._onMovieDelete = config.onMovieDelete;
    this._onMovieFileDelete = config.onMovieFileDelete;
    this._onMovieFileDeleteForUpgrade = config.onMovieFileDeleteForUpgrade;
    this._onUpgrade = config.onUpgrade;
    this._senderId = config.senderId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // channel_tags - computed: true, optional: true, required: false
  private _channelTags?: string[]; 
  public get channelTags() {
    return cdktf.Fn.tolist(this.getListAttribute('channel_tags'));
  }
  public set channelTags(value: string[]) {
    this._channelTags = value;
  }
  public resetChannelTags() {
    this._channelTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTagsInput() {
    return this._channelTags;
  }

  // device_ids - computed: true, optional: true, required: false
  private _deviceIds?: string[]; 
  public get deviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('device_ids'));
  }
  public set deviceIds(value: string[]) {
    this._deviceIds = value;
  }
  public resetDeviceIds() {
    this._deviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // include_health_warnings - computed: true, optional: true, required: false
  private _includeHealthWarnings?: boolean | cdktf.IResolvable; 
  public get includeHealthWarnings() {
    return this.getBooleanAttribute('include_health_warnings');
  }
  public set includeHealthWarnings(value: boolean | cdktf.IResolvable) {
    this._includeHealthWarnings = value;
  }
  public resetIncludeHealthWarnings() {
    this._includeHealthWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHealthWarningsInput() {
    return this._includeHealthWarnings;
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

  // on_application_update - computed: true, optional: true, required: false
  private _onApplicationUpdate?: boolean | cdktf.IResolvable; 
  public get onApplicationUpdate() {
    return this.getBooleanAttribute('on_application_update');
  }
  public set onApplicationUpdate(value: boolean | cdktf.IResolvable) {
    this._onApplicationUpdate = value;
  }
  public resetOnApplicationUpdate() {
    this._onApplicationUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onApplicationUpdateInput() {
    return this._onApplicationUpdate;
  }

  // on_download - computed: true, optional: true, required: false
  private _onDownload?: boolean | cdktf.IResolvable; 
  public get onDownload() {
    return this.getBooleanAttribute('on_download');
  }
  public set onDownload(value: boolean | cdktf.IResolvable) {
    this._onDownload = value;
  }
  public resetOnDownload() {
    this._onDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDownloadInput() {
    return this._onDownload;
  }

  // on_grab - computed: true, optional: true, required: false
  private _onGrab?: boolean | cdktf.IResolvable; 
  public get onGrab() {
    return this.getBooleanAttribute('on_grab');
  }
  public set onGrab(value: boolean | cdktf.IResolvable) {
    this._onGrab = value;
  }
  public resetOnGrab() {
    this._onGrab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onGrabInput() {
    return this._onGrab;
  }

  // on_health_issue - computed: true, optional: true, required: false
  private _onHealthIssue?: boolean | cdktf.IResolvable; 
  public get onHealthIssue() {
    return this.getBooleanAttribute('on_health_issue');
  }
  public set onHealthIssue(value: boolean | cdktf.IResolvable) {
    this._onHealthIssue = value;
  }
  public resetOnHealthIssue() {
    this._onHealthIssue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHealthIssueInput() {
    return this._onHealthIssue;
  }

  // on_health_restored - computed: true, optional: true, required: false
  private _onHealthRestored?: boolean | cdktf.IResolvable; 
  public get onHealthRestored() {
    return this.getBooleanAttribute('on_health_restored');
  }
  public set onHealthRestored(value: boolean | cdktf.IResolvable) {
    this._onHealthRestored = value;
  }
  public resetOnHealthRestored() {
    this._onHealthRestored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHealthRestoredInput() {
    return this._onHealthRestored;
  }

  // on_manual_interaction_required - computed: true, optional: true, required: false
  private _onManualInteractionRequired?: boolean | cdktf.IResolvable; 
  public get onManualInteractionRequired() {
    return this.getBooleanAttribute('on_manual_interaction_required');
  }
  public set onManualInteractionRequired(value: boolean | cdktf.IResolvable) {
    this._onManualInteractionRequired = value;
  }
  public resetOnManualInteractionRequired() {
    this._onManualInteractionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onManualInteractionRequiredInput() {
    return this._onManualInteractionRequired;
  }

  // on_movie_added - computed: true, optional: true, required: false
  private _onMovieAdded?: boolean | cdktf.IResolvable; 
  public get onMovieAdded() {
    return this.getBooleanAttribute('on_movie_added');
  }
  public set onMovieAdded(value: boolean | cdktf.IResolvable) {
    this._onMovieAdded = value;
  }
  public resetOnMovieAdded() {
    this._onMovieAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMovieAddedInput() {
    return this._onMovieAdded;
  }

  // on_movie_delete - computed: false, optional: false, required: true
  private _onMovieDelete?: boolean | cdktf.IResolvable; 
  public get onMovieDelete() {
    return this.getBooleanAttribute('on_movie_delete');
  }
  public set onMovieDelete(value: boolean | cdktf.IResolvable) {
    this._onMovieDelete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onMovieDeleteInput() {
    return this._onMovieDelete;
  }

  // on_movie_file_delete - computed: true, optional: true, required: false
  private _onMovieFileDelete?: boolean | cdktf.IResolvable; 
  public get onMovieFileDelete() {
    return this.getBooleanAttribute('on_movie_file_delete');
  }
  public set onMovieFileDelete(value: boolean | cdktf.IResolvable) {
    this._onMovieFileDelete = value;
  }
  public resetOnMovieFileDelete() {
    this._onMovieFileDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMovieFileDeleteInput() {
    return this._onMovieFileDelete;
  }

  // on_movie_file_delete_for_upgrade - computed: true, optional: true, required: false
  private _onMovieFileDeleteForUpgrade?: boolean | cdktf.IResolvable; 
  public get onMovieFileDeleteForUpgrade() {
    return this.getBooleanAttribute('on_movie_file_delete_for_upgrade');
  }
  public set onMovieFileDeleteForUpgrade(value: boolean | cdktf.IResolvable) {
    this._onMovieFileDeleteForUpgrade = value;
  }
  public resetOnMovieFileDeleteForUpgrade() {
    this._onMovieFileDeleteForUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMovieFileDeleteForUpgradeInput() {
    return this._onMovieFileDeleteForUpgrade;
  }

  // on_upgrade - computed: true, optional: true, required: false
  private _onUpgrade?: boolean | cdktf.IResolvable; 
  public get onUpgrade() {
    return this.getBooleanAttribute('on_upgrade');
  }
  public set onUpgrade(value: boolean | cdktf.IResolvable) {
    this._onUpgrade = value;
  }
  public resetOnUpgrade() {
    this._onUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUpgradeInput() {
    return this._onUpgrade;
  }

  // sender_id - computed: true, optional: true, required: false
  private _senderId?: string; 
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }
  public set senderId(value: string) {
    this._senderId = value;
  }
  public resetSenderId() {
    this._senderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderIdInput() {
    return this._senderId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: number[]; 
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }
  public set tags(value: number[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      channel_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._channelTags),
      device_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceIds),
      include_health_warnings: cdktf.booleanToTerraform(this._includeHealthWarnings),
      name: cdktf.stringToTerraform(this._name),
      on_application_update: cdktf.booleanToTerraform(this._onApplicationUpdate),
      on_download: cdktf.booleanToTerraform(this._onDownload),
      on_grab: cdktf.booleanToTerraform(this._onGrab),
      on_health_issue: cdktf.booleanToTerraform(this._onHealthIssue),
      on_health_restored: cdktf.booleanToTerraform(this._onHealthRestored),
      on_manual_interaction_required: cdktf.booleanToTerraform(this._onManualInteractionRequired),
      on_movie_added: cdktf.booleanToTerraform(this._onMovieAdded),
      on_movie_delete: cdktf.booleanToTerraform(this._onMovieDelete),
      on_movie_file_delete: cdktf.booleanToTerraform(this._onMovieFileDelete),
      on_movie_file_delete_for_upgrade: cdktf.booleanToTerraform(this._onMovieFileDeleteForUpgrade),
      on_upgrade: cdktf.booleanToTerraform(this._onUpgrade),
      sender_id: cdktf.stringToTerraform(this._senderId),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._channelTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_health_warnings: {
        value: cdktf.booleanToHclTerraform(this._includeHealthWarnings),
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
      on_application_update: {
        value: cdktf.booleanToHclTerraform(this._onApplicationUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_download: {
        value: cdktf.booleanToHclTerraform(this._onDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_grab: {
        value: cdktf.booleanToHclTerraform(this._onGrab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_health_issue: {
        value: cdktf.booleanToHclTerraform(this._onHealthIssue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_health_restored: {
        value: cdktf.booleanToHclTerraform(this._onHealthRestored),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_manual_interaction_required: {
        value: cdktf.booleanToHclTerraform(this._onManualInteractionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_movie_added: {
        value: cdktf.booleanToHclTerraform(this._onMovieAdded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_movie_delete: {
        value: cdktf.booleanToHclTerraform(this._onMovieDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_movie_file_delete: {
        value: cdktf.booleanToHclTerraform(this._onMovieFileDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_movie_file_delete_for_upgrade: {
        value: cdktf.booleanToHclTerraform(this._onMovieFileDeleteForUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_upgrade: {
        value: cdktf.booleanToHclTerraform(this._onUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sender_id: {
        value: cdktf.stringToHclTerraform(this._senderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
