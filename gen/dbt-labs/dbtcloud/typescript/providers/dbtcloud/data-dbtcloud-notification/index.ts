// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/notification#notification_id DataDbtcloudNotification#notification_id}
  */
  readonly notificationId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/notification dbtcloud_notification}
*/
export class DataDbtcloudNotification extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudNotification to import
  * @param importFromId The id of the existing DataDbtcloudNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/notification dbtcloud_notification} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_notification',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._notificationId = config.notificationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_email - computed: true, optional: false, required: false
  public get externalEmail() {
    return this.getStringAttribute('external_email');
  }

  // notification_id - computed: false, optional: false, required: true
  private _notificationId?: number; 
  public get notificationId() {
    return this.getNumberAttribute('notification_id');
  }
  public set notificationId(value: number) {
    this._notificationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationIdInput() {
    return this._notificationId;
  }

  // notification_type - computed: true, optional: false, required: false
  public get notificationType() {
    return this.getNumberAttribute('notification_type');
  }

  // on_cancel - computed: true, optional: false, required: false
  public get onCancel() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('on_cancel')));
  }

  // on_failure - computed: true, optional: false, required: false
  public get onFailure() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('on_failure')));
  }

  // on_success - computed: true, optional: false, required: false
  public get onSuccess() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('on_success')));
  }

  // on_warning - computed: true, optional: false, required: false
  public get onWarning() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('on_warning')));
  }

  // slack_channel_id - computed: true, optional: false, required: false
  public get slackChannelId() {
    return this.getStringAttribute('slack_channel_id');
  }

  // slack_channel_name - computed: true, optional: false, required: false
  public get slackChannelName() {
    return this.getStringAttribute('slack_channel_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getNumberAttribute('state');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      notification_id: cdktf.numberToTerraform(this._notificationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      notification_id: {
        value: cdktf.numberToHclTerraform(this._notificationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
