// https://registry.terraform.io/providers/files-com/files/0.1.411/docs/data-sources/notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Notification ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.411/docs/data-sources/notification#id DataFilesNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.411/docs/data-sources/notification files_notification}
*/
export class DataFilesNotification extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesNotification to import
  * @param importFromId The id of the existing DataFilesNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.411/docs/data-sources/notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.411/docs/data-sources/notification files_notification} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'files_notification',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.411',
        providerVersionConstraint: '0.1.411'
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

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // notify_on_copy - computed: true, optional: false, required: false
  public get notifyOnCopy() {
    return this.getBooleanAttribute('notify_on_copy');
  }

  // notify_on_delete - computed: true, optional: false, required: false
  public get notifyOnDelete() {
    return this.getBooleanAttribute('notify_on_delete');
  }

  // notify_on_download - computed: true, optional: false, required: false
  public get notifyOnDownload() {
    return this.getBooleanAttribute('notify_on_download');
  }

  // notify_on_move - computed: true, optional: false, required: false
  public get notifyOnMove() {
    return this.getBooleanAttribute('notify_on_move');
  }

  // notify_on_upload - computed: true, optional: false, required: false
  public get notifyOnUpload() {
    return this.getBooleanAttribute('notify_on_upload');
  }

  // notify_user_actions - computed: true, optional: false, required: false
  public get notifyUserActions() {
    return this.getBooleanAttribute('notify_user_actions');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // recursive - computed: true, optional: false, required: false
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }

  // send_interval - computed: true, optional: false, required: false
  public get sendInterval() {
    return this.getStringAttribute('send_interval');
  }

  // suppressed_email - computed: true, optional: false, required: false
  public get suppressedEmail() {
    return this.getBooleanAttribute('suppressed_email');
  }

  // trigger_by_share_recipients - computed: true, optional: false, required: false
  public get triggerByShareRecipients() {
    return this.getBooleanAttribute('trigger_by_share_recipients');
  }

  // triggering_filenames - computed: true, optional: false, required: false
  public get triggeringFilenames() {
    return this.getListAttribute('triggering_filenames');
  }

  // triggering_group_ids - computed: true, optional: false, required: false
  public get triggeringGroupIds() {
    return this.getNumberListAttribute('triggering_group_ids');
  }

  // triggering_user_ids - computed: true, optional: false, required: false
  public get triggeringUserIds() {
    return this.getNumberListAttribute('triggering_user_ids');
  }

  // unsubscribed - computed: true, optional: false, required: false
  public get unsubscribed() {
    return this.getBooleanAttribute('unsubscribed');
  }

  // unsubscribed_reason - computed: true, optional: false, required: false
  public get unsubscribedReason() {
    return this.getStringAttribute('unsubscribed_reason');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
