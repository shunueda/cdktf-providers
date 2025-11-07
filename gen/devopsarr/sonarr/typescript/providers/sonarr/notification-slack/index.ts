// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationSlackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#channel NotificationSlack#channel}
  */
  readonly channel?: string;
  /**
  * Icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#icon NotificationSlack#icon}
  */
  readonly icon?: string;
  /**
  * Include health warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#include_health_warnings NotificationSlack#include_health_warnings}
  */
  readonly includeHealthWarnings?: boolean | cdktf.IResolvable;
  /**
  * NotificationSlack name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#name NotificationSlack#name}
  */
  readonly name: string;
  /**
  * On application update flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_application_update NotificationSlack#on_application_update}
  */
  readonly onApplicationUpdate?: boolean | cdktf.IResolvable;
  /**
  * On download flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_download NotificationSlack#on_download}
  */
  readonly onDownload?: boolean | cdktf.IResolvable;
  /**
  * On episode file delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_episode_file_delete NotificationSlack#on_episode_file_delete}
  */
  readonly onEpisodeFileDelete?: boolean | cdktf.IResolvable;
  /**
  * On episode file delete for upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_episode_file_delete_for_upgrade NotificationSlack#on_episode_file_delete_for_upgrade}
  */
  readonly onEpisodeFileDeleteForUpgrade?: boolean | cdktf.IResolvable;
  /**
  * On grab flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_grab NotificationSlack#on_grab}
  */
  readonly onGrab?: boolean | cdktf.IResolvable;
  /**
  * On health issue flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_health_issue NotificationSlack#on_health_issue}
  */
  readonly onHealthIssue?: boolean | cdktf.IResolvable;
  /**
  * On health restored flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_health_restored NotificationSlack#on_health_restored}
  */
  readonly onHealthRestored?: boolean | cdktf.IResolvable;
  /**
  * On import complete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_import_complete NotificationSlack#on_import_complete}
  */
  readonly onImportComplete?: boolean | cdktf.IResolvable;
  /**
  * On manual interaction required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_manual_interaction_required NotificationSlack#on_manual_interaction_required}
  */
  readonly onManualInteractionRequired?: boolean | cdktf.IResolvable;
  /**
  * On rename flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_rename NotificationSlack#on_rename}
  */
  readonly onRename?: boolean | cdktf.IResolvable;
  /**
  * On series add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_series_add NotificationSlack#on_series_add}
  */
  readonly onSeriesAdd?: boolean | cdktf.IResolvable;
  /**
  * On series delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_series_delete NotificationSlack#on_series_delete}
  */
  readonly onSeriesDelete?: boolean | cdktf.IResolvable;
  /**
  * On upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#on_upgrade NotificationSlack#on_upgrade}
  */
  readonly onUpgrade?: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#tags NotificationSlack#tags}
  */
  readonly tags?: number[];
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#username NotificationSlack#username}
  */
  readonly username: string;
  /**
  * URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#web_hook_url NotificationSlack#web_hook_url}
  */
  readonly webHookUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack sonarr_notification_slack}
*/
export class NotificationSlack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_notification_slack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationSlack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationSlack to import
  * @param importFromId The id of the existing NotificationSlack that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationSlack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_notification_slack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_slack sonarr_notification_slack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationSlackConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationSlackConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_notification_slack',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channel = config.channel;
    this._icon = config.icon;
    this._includeHealthWarnings = config.includeHealthWarnings;
    this._name = config.name;
    this._onApplicationUpdate = config.onApplicationUpdate;
    this._onDownload = config.onDownload;
    this._onEpisodeFileDelete = config.onEpisodeFileDelete;
    this._onEpisodeFileDeleteForUpgrade = config.onEpisodeFileDeleteForUpgrade;
    this._onGrab = config.onGrab;
    this._onHealthIssue = config.onHealthIssue;
    this._onHealthRestored = config.onHealthRestored;
    this._onImportComplete = config.onImportComplete;
    this._onManualInteractionRequired = config.onManualInteractionRequired;
    this._onRename = config.onRename;
    this._onSeriesAdd = config.onSeriesAdd;
    this._onSeriesDelete = config.onSeriesDelete;
    this._onUpgrade = config.onUpgrade;
    this._tags = config.tags;
    this._username = config.username;
    this._webHookUrl = config.webHookUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel - computed: true, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // on_episode_file_delete - computed: true, optional: true, required: false
  private _onEpisodeFileDelete?: boolean | cdktf.IResolvable; 
  public get onEpisodeFileDelete() {
    return this.getBooleanAttribute('on_episode_file_delete');
  }
  public set onEpisodeFileDelete(value: boolean | cdktf.IResolvable) {
    this._onEpisodeFileDelete = value;
  }
  public resetOnEpisodeFileDelete() {
    this._onEpisodeFileDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onEpisodeFileDeleteInput() {
    return this._onEpisodeFileDelete;
  }

  // on_episode_file_delete_for_upgrade - computed: true, optional: true, required: false
  private _onEpisodeFileDeleteForUpgrade?: boolean | cdktf.IResolvable; 
  public get onEpisodeFileDeleteForUpgrade() {
    return this.getBooleanAttribute('on_episode_file_delete_for_upgrade');
  }
  public set onEpisodeFileDeleteForUpgrade(value: boolean | cdktf.IResolvable) {
    this._onEpisodeFileDeleteForUpgrade = value;
  }
  public resetOnEpisodeFileDeleteForUpgrade() {
    this._onEpisodeFileDeleteForUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onEpisodeFileDeleteForUpgradeInput() {
    return this._onEpisodeFileDeleteForUpgrade;
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

  // on_import_complete - computed: true, optional: true, required: false
  private _onImportComplete?: boolean | cdktf.IResolvable; 
  public get onImportComplete() {
    return this.getBooleanAttribute('on_import_complete');
  }
  public set onImportComplete(value: boolean | cdktf.IResolvable) {
    this._onImportComplete = value;
  }
  public resetOnImportComplete() {
    this._onImportComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onImportCompleteInput() {
    return this._onImportComplete;
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

  // on_rename - computed: true, optional: true, required: false
  private _onRename?: boolean | cdktf.IResolvable; 
  public get onRename() {
    return this.getBooleanAttribute('on_rename');
  }
  public set onRename(value: boolean | cdktf.IResolvable) {
    this._onRename = value;
  }
  public resetOnRename() {
    this._onRename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onRenameInput() {
    return this._onRename;
  }

  // on_series_add - computed: true, optional: true, required: false
  private _onSeriesAdd?: boolean | cdktf.IResolvable; 
  public get onSeriesAdd() {
    return this.getBooleanAttribute('on_series_add');
  }
  public set onSeriesAdd(value: boolean | cdktf.IResolvable) {
    this._onSeriesAdd = value;
  }
  public resetOnSeriesAdd() {
    this._onSeriesAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSeriesAddInput() {
    return this._onSeriesAdd;
  }

  // on_series_delete - computed: true, optional: true, required: false
  private _onSeriesDelete?: boolean | cdktf.IResolvable; 
  public get onSeriesDelete() {
    return this.getBooleanAttribute('on_series_delete');
  }
  public set onSeriesDelete(value: boolean | cdktf.IResolvable) {
    this._onSeriesDelete = value;
  }
  public resetOnSeriesDelete() {
    this._onSeriesDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSeriesDeleteInput() {
    return this._onSeriesDelete;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // web_hook_url - computed: false, optional: false, required: true
  private _webHookUrl?: string; 
  public get webHookUrl() {
    return this.getStringAttribute('web_hook_url');
  }
  public set webHookUrl(value: string) {
    this._webHookUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webHookUrlInput() {
    return this._webHookUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel: cdktf.stringToTerraform(this._channel),
      icon: cdktf.stringToTerraform(this._icon),
      include_health_warnings: cdktf.booleanToTerraform(this._includeHealthWarnings),
      name: cdktf.stringToTerraform(this._name),
      on_application_update: cdktf.booleanToTerraform(this._onApplicationUpdate),
      on_download: cdktf.booleanToTerraform(this._onDownload),
      on_episode_file_delete: cdktf.booleanToTerraform(this._onEpisodeFileDelete),
      on_episode_file_delete_for_upgrade: cdktf.booleanToTerraform(this._onEpisodeFileDeleteForUpgrade),
      on_grab: cdktf.booleanToTerraform(this._onGrab),
      on_health_issue: cdktf.booleanToTerraform(this._onHealthIssue),
      on_health_restored: cdktf.booleanToTerraform(this._onHealthRestored),
      on_import_complete: cdktf.booleanToTerraform(this._onImportComplete),
      on_manual_interaction_required: cdktf.booleanToTerraform(this._onManualInteractionRequired),
      on_rename: cdktf.booleanToTerraform(this._onRename),
      on_series_add: cdktf.booleanToTerraform(this._onSeriesAdd),
      on_series_delete: cdktf.booleanToTerraform(this._onSeriesDelete),
      on_upgrade: cdktf.booleanToTerraform(this._onUpgrade),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      username: cdktf.stringToTerraform(this._username),
      web_hook_url: cdktf.stringToTerraform(this._webHookUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      on_episode_file_delete: {
        value: cdktf.booleanToHclTerraform(this._onEpisodeFileDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_episode_file_delete_for_upgrade: {
        value: cdktf.booleanToHclTerraform(this._onEpisodeFileDeleteForUpgrade),
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
      on_import_complete: {
        value: cdktf.booleanToHclTerraform(this._onImportComplete),
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
      on_rename: {
        value: cdktf.booleanToHclTerraform(this._onRename),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_series_add: {
        value: cdktf.booleanToHclTerraform(this._onSeriesAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_series_delete: {
        value: cdktf.booleanToHclTerraform(this._onSeriesDelete),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_hook_url: {
        value: cdktf.stringToHclTerraform(this._webHookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
