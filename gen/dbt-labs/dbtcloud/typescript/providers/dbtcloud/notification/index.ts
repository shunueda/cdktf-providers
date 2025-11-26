// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The external email to receive the notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification#external_email Notification#external_email}
  */
  readonly externalEmail?: string;
  /**
  * Type of notification (1 = dbt Cloud user email (default): does not require an external_email ; 2 = Slack channel: requires `slack_channel_id` and `slack_channel_name` ; 4 = external email: requires setting an `external_email`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification#notification_type Notification#notification_type}
  */
  readonly notificationType?: number;
  /**
  * List of job IDs to trigger the webhook on cancel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification#on_cancel Notification#on_cancel}
  */
  readonly onCancel?: number[];
  /**
  * List of job IDs to trigger the webhook on failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification#on_failure Notification#on_failure}
  */
  readonly onFailure?: number[];
  /**
  * List of job IDs to trigger the webhook on success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification#on_success Notification#on_success}
  */
  readonly onSuccess?: number[];
  /**
  * List of job IDs to trigger the webhook on warning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification#on_warning Notification#on_warning}
  */
  readonly onWarning?: number[];
  /**
  * The ID of the Slack channel to receive the notification. It can be found at the bottom of the Slack channel settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification#slack_channel_id Notification#slack_channel_id}
  */
  readonly slackChannelId?: string;
  /**
  * The name of the slack channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification#slack_channel_name Notification#slack_channel_name}
  */
  readonly slackChannelName?: string;
  /**
  * State of the notification (1 = active (default), 2 = inactive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification#state Notification#state}
  */
  readonly state?: number;
  /**
  * Internal dbt Cloud User ID. Must be the user_id for an existing user even if the notification is an external one. In the case of a Slack notification, it must be the user_id of the user that set up the Slack Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification#user_id Notification#user_id}
  */
  readonly userId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification dbtcloud_notification}
*/
export class Notification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Notification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Notification to import
  * @param importFromId The id of the existing Notification that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Notification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/notification dbtcloud_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_notification',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalEmail = config.externalEmail;
    this._notificationType = config.notificationType;
    this._onCancel = config.onCancel;
    this._onFailure = config.onFailure;
    this._onSuccess = config.onSuccess;
    this._onWarning = config.onWarning;
    this._slackChannelId = config.slackChannelId;
    this._slackChannelName = config.slackChannelName;
    this._state = config.state;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_email - computed: false, optional: true, required: false
  private _externalEmail?: string; 
  public get externalEmail() {
    return this.getStringAttribute('external_email');
  }
  public set externalEmail(value: string) {
    this._externalEmail = value;
  }
  public resetExternalEmail() {
    this._externalEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEmailInput() {
    return this._externalEmail;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_type - computed: true, optional: true, required: false
  private _notificationType?: number; 
  public get notificationType() {
    return this.getNumberAttribute('notification_type');
  }
  public set notificationType(value: number) {
    this._notificationType = value;
  }
  public resetNotificationType() {
    this._notificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // on_cancel - computed: true, optional: true, required: false
  private _onCancel?: number[]; 
  public get onCancel() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('on_cancel')));
  }
  public set onCancel(value: number[]) {
    this._onCancel = value;
  }
  public resetOnCancel() {
    this._onCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCancelInput() {
    return this._onCancel;
  }

  // on_failure - computed: true, optional: true, required: false
  private _onFailure?: number[]; 
  public get onFailure() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('on_failure')));
  }
  public set onFailure(value: number[]) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
  }

  // on_success - computed: true, optional: true, required: false
  private _onSuccess?: number[]; 
  public get onSuccess() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('on_success')));
  }
  public set onSuccess(value: number[]) {
    this._onSuccess = value;
  }
  public resetOnSuccess() {
    this._onSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess;
  }

  // on_warning - computed: true, optional: true, required: false
  private _onWarning?: number[]; 
  public get onWarning() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('on_warning')));
  }
  public set onWarning(value: number[]) {
    this._onWarning = value;
  }
  public resetOnWarning() {
    this._onWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onWarningInput() {
    return this._onWarning;
  }

  // slack_channel_id - computed: false, optional: true, required: false
  private _slackChannelId?: string; 
  public get slackChannelId() {
    return this.getStringAttribute('slack_channel_id');
  }
  public set slackChannelId(value: string) {
    this._slackChannelId = value;
  }
  public resetSlackChannelId() {
    this._slackChannelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelIdInput() {
    return this._slackChannelId;
  }

  // slack_channel_name - computed: false, optional: true, required: false
  private _slackChannelName?: string; 
  public get slackChannelName() {
    return this.getStringAttribute('slack_channel_name');
  }
  public set slackChannelName(value: string) {
    this._slackChannelName = value;
  }
  public resetSlackChannelName() {
    this._slackChannelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelNameInput() {
    return this._slackChannelName;
  }

  // state - computed: true, optional: true, required: false
  private _state?: number; 
  public get state() {
    return this.getNumberAttribute('state');
  }
  public set state(value: number) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_email: cdktf.stringToTerraform(this._externalEmail),
      notification_type: cdktf.numberToTerraform(this._notificationType),
      on_cancel: cdktf.listMapper(cdktf.numberToTerraform, false)(this._onCancel),
      on_failure: cdktf.listMapper(cdktf.numberToTerraform, false)(this._onFailure),
      on_success: cdktf.listMapper(cdktf.numberToTerraform, false)(this._onSuccess),
      on_warning: cdktf.listMapper(cdktf.numberToTerraform, false)(this._onWarning),
      slack_channel_id: cdktf.stringToTerraform(this._slackChannelId),
      slack_channel_name: cdktf.stringToTerraform(this._slackChannelName),
      state: cdktf.numberToTerraform(this._state),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_email: {
        value: cdktf.stringToHclTerraform(this._externalEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_type: {
        value: cdktf.numberToHclTerraform(this._notificationType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      on_cancel: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._onCancel),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      on_failure: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._onFailure),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      on_success: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._onSuccess),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      on_warning: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._onWarning),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      slack_channel_id: {
        value: cdktf.stringToHclTerraform(this._slackChannelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slack_channel_name: {
        value: cdktf.stringToHclTerraform(this._slackChannelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.numberToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
