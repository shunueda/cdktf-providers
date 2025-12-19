// https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of Group to receive notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#group_id Notification#group_id}
  */
  readonly groupId?: number;
  /**
  * Custom message to include in notification emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#message Notification#message}
  */
  readonly message?: string;
  /**
  * Trigger on files copied to this path?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#notify_on_copy Notification#notify_on_copy}
  */
  readonly notifyOnCopy?: boolean | cdktf.IResolvable;
  /**
  * Trigger on files deleted in this path?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#notify_on_delete Notification#notify_on_delete}
  */
  readonly notifyOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Trigger on files downloaded in this path?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#notify_on_download Notification#notify_on_download}
  */
  readonly notifyOnDownload?: boolean | cdktf.IResolvable;
  /**
  * Trigger on files moved to this path?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#notify_on_move Notification#notify_on_move}
  */
  readonly notifyOnMove?: boolean | cdktf.IResolvable;
  /**
  * Trigger on files created/uploaded/updated/changed in this path?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#notify_on_upload Notification#notify_on_upload}
  */
  readonly notifyOnUpload?: boolean | cdktf.IResolvable;
  /**
  * If true, will send notifications about a user's own activity to that user.  If false, only activity performed by other users (or anonymous users) will be sent in notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#notify_user_actions Notification#notify_user_actions}
  */
  readonly notifyUserActions?: boolean | cdktf.IResolvable;
  /**
  * Folder path to notify on. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#path Notification#path}
  */
  readonly path?: string;
  /**
  * Apply notification recursively?  This will enable notifications for each subfolder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#recursive Notification#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * The time interval that notifications are aggregated to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#send_interval Notification#send_interval}
  */
  readonly sendInterval?: string;
  /**
  * Notify when actions are performed by a share recipient?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#trigger_by_share_recipients Notification#trigger_by_share_recipients}
  */
  readonly triggerByShareRecipients?: boolean | cdktf.IResolvable;
  /**
  * Array of filenames (possibly with wildcards) to scope trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#triggering_filenames Notification#triggering_filenames}
  */
  readonly triggeringFilenames?: string[];
  /**
  * If set, will only notify on actions made by a member of one of the specified groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#triggering_group_ids Notification#triggering_group_ids}
  */
  readonly triggeringGroupIds?: number[];
  /**
  * If set, will only notify on actions made one of the specified users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#triggering_user_ids Notification#triggering_user_ids}
  */
  readonly triggeringUserIds?: number[];
  /**
  * Notification user ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#user_id Notification#user_id}
  */
  readonly userId?: number;
  /**
  * Notification username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#username Notification#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification files_notification}
*/
export class Notification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Notification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Notification to import
  * @param importFromId The id of the existing Notification that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Notification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/notification files_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NotificationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'files_notification',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.417',
        providerVersionConstraint: '0.1.417'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._message = config.message;
    this._notifyOnCopy = config.notifyOnCopy;
    this._notifyOnDelete = config.notifyOnDelete;
    this._notifyOnDownload = config.notifyOnDownload;
    this._notifyOnMove = config.notifyOnMove;
    this._notifyOnUpload = config.notifyOnUpload;
    this._notifyUserActions = config.notifyUserActions;
    this._path = config.path;
    this._recursive = config.recursive;
    this._sendInterval = config.sendInterval;
    this._triggerByShareRecipients = config.triggerByShareRecipients;
    this._triggeringFilenames = config.triggeringFilenames;
    this._triggeringGroupIds = config.triggeringGroupIds;
    this._triggeringUserIds = config.triggeringUserIds;
    this._userId = config.userId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: true, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // notify_on_copy - computed: true, optional: true, required: false
  private _notifyOnCopy?: boolean | cdktf.IResolvable; 
  public get notifyOnCopy() {
    return this.getBooleanAttribute('notify_on_copy');
  }
  public set notifyOnCopy(value: boolean | cdktf.IResolvable) {
    this._notifyOnCopy = value;
  }
  public resetNotifyOnCopy() {
    this._notifyOnCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnCopyInput() {
    return this._notifyOnCopy;
  }

  // notify_on_delete - computed: true, optional: true, required: false
  private _notifyOnDelete?: boolean | cdktf.IResolvable; 
  public get notifyOnDelete() {
    return this.getBooleanAttribute('notify_on_delete');
  }
  public set notifyOnDelete(value: boolean | cdktf.IResolvable) {
    this._notifyOnDelete = value;
  }
  public resetNotifyOnDelete() {
    this._notifyOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnDeleteInput() {
    return this._notifyOnDelete;
  }

  // notify_on_download - computed: true, optional: true, required: false
  private _notifyOnDownload?: boolean | cdktf.IResolvable; 
  public get notifyOnDownload() {
    return this.getBooleanAttribute('notify_on_download');
  }
  public set notifyOnDownload(value: boolean | cdktf.IResolvable) {
    this._notifyOnDownload = value;
  }
  public resetNotifyOnDownload() {
    this._notifyOnDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnDownloadInput() {
    return this._notifyOnDownload;
  }

  // notify_on_move - computed: true, optional: true, required: false
  private _notifyOnMove?: boolean | cdktf.IResolvable; 
  public get notifyOnMove() {
    return this.getBooleanAttribute('notify_on_move');
  }
  public set notifyOnMove(value: boolean | cdktf.IResolvable) {
    this._notifyOnMove = value;
  }
  public resetNotifyOnMove() {
    this._notifyOnMove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnMoveInput() {
    return this._notifyOnMove;
  }

  // notify_on_upload - computed: true, optional: true, required: false
  private _notifyOnUpload?: boolean | cdktf.IResolvable; 
  public get notifyOnUpload() {
    return this.getBooleanAttribute('notify_on_upload');
  }
  public set notifyOnUpload(value: boolean | cdktf.IResolvable) {
    this._notifyOnUpload = value;
  }
  public resetNotifyOnUpload() {
    this._notifyOnUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnUploadInput() {
    return this._notifyOnUpload;
  }

  // notify_user_actions - computed: true, optional: true, required: false
  private _notifyUserActions?: boolean | cdktf.IResolvable; 
  public get notifyUserActions() {
    return this.getBooleanAttribute('notify_user_actions');
  }
  public set notifyUserActions(value: boolean | cdktf.IResolvable) {
    this._notifyUserActions = value;
  }
  public resetNotifyUserActions() {
    this._notifyUserActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyUserActionsInput() {
    return this._notifyUserActions;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // recursive - computed: true, optional: true, required: false
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // send_interval - computed: true, optional: true, required: false
  private _sendInterval?: string; 
  public get sendInterval() {
    return this.getStringAttribute('send_interval');
  }
  public set sendInterval(value: string) {
    this._sendInterval = value;
  }
  public resetSendInterval() {
    this._sendInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIntervalInput() {
    return this._sendInterval;
  }

  // suppressed_email - computed: true, optional: false, required: false
  public get suppressedEmail() {
    return this.getBooleanAttribute('suppressed_email');
  }

  // trigger_by_share_recipients - computed: true, optional: true, required: false
  private _triggerByShareRecipients?: boolean | cdktf.IResolvable; 
  public get triggerByShareRecipients() {
    return this.getBooleanAttribute('trigger_by_share_recipients');
  }
  public set triggerByShareRecipients(value: boolean | cdktf.IResolvable) {
    this._triggerByShareRecipients = value;
  }
  public resetTriggerByShareRecipients() {
    this._triggerByShareRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerByShareRecipientsInput() {
    return this._triggerByShareRecipients;
  }

  // triggering_filenames - computed: true, optional: true, required: false
  private _triggeringFilenames?: string[]; 
  public get triggeringFilenames() {
    return this.getListAttribute('triggering_filenames');
  }
  public set triggeringFilenames(value: string[]) {
    this._triggeringFilenames = value;
  }
  public resetTriggeringFilenames() {
    this._triggeringFilenames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeringFilenamesInput() {
    return this._triggeringFilenames;
  }

  // triggering_group_ids - computed: true, optional: true, required: false
  private _triggeringGroupIds?: number[]; 
  public get triggeringGroupIds() {
    return this.getNumberListAttribute('triggering_group_ids');
  }
  public set triggeringGroupIds(value: number[]) {
    this._triggeringGroupIds = value;
  }
  public resetTriggeringGroupIds() {
    this._triggeringGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeringGroupIdsInput() {
    return this._triggeringGroupIds;
  }

  // triggering_user_ids - computed: true, optional: true, required: false
  private _triggeringUserIds?: number[]; 
  public get triggeringUserIds() {
    return this.getNumberListAttribute('triggering_user_ids');
  }
  public set triggeringUserIds(value: number[]) {
    this._triggeringUserIds = value;
  }
  public resetTriggeringUserIds() {
    this._triggeringUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeringUserIdsInput() {
    return this._triggeringUserIds;
  }

  // unsubscribed - computed: true, optional: false, required: false
  public get unsubscribed() {
    return this.getBooleanAttribute('unsubscribed');
  }

  // unsubscribed_reason - computed: true, optional: false, required: false
  public get unsubscribedReason() {
    return this.getStringAttribute('unsubscribed_reason');
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.numberToTerraform(this._groupId),
      message: cdktf.stringToTerraform(this._message),
      notify_on_copy: cdktf.booleanToTerraform(this._notifyOnCopy),
      notify_on_delete: cdktf.booleanToTerraform(this._notifyOnDelete),
      notify_on_download: cdktf.booleanToTerraform(this._notifyOnDownload),
      notify_on_move: cdktf.booleanToTerraform(this._notifyOnMove),
      notify_on_upload: cdktf.booleanToTerraform(this._notifyOnUpload),
      notify_user_actions: cdktf.booleanToTerraform(this._notifyUserActions),
      path: cdktf.stringToTerraform(this._path),
      recursive: cdktf.booleanToTerraform(this._recursive),
      send_interval: cdktf.stringToTerraform(this._sendInterval),
      trigger_by_share_recipients: cdktf.booleanToTerraform(this._triggerByShareRecipients),
      triggering_filenames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggeringFilenames),
      triggering_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._triggeringGroupIds),
      triggering_user_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._triggeringUserIds),
      user_id: cdktf.numberToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_on_copy: {
        value: cdktf.booleanToHclTerraform(this._notifyOnCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_on_delete: {
        value: cdktf.booleanToHclTerraform(this._notifyOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_on_download: {
        value: cdktf.booleanToHclTerraform(this._notifyOnDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_on_move: {
        value: cdktf.booleanToHclTerraform(this._notifyOnMove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_on_upload: {
        value: cdktf.booleanToHclTerraform(this._notifyOnUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_user_actions: {
        value: cdktf.booleanToHclTerraform(this._notifyUserActions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recursive: {
        value: cdktf.booleanToHclTerraform(this._recursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_interval: {
        value: cdktf.stringToHclTerraform(this._sendInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_by_share_recipients: {
        value: cdktf.booleanToHclTerraform(this._triggerByShareRecipients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      triggering_filenames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._triggeringFilenames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      triggering_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._triggeringGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      triggering_user_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._triggeringUserIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
