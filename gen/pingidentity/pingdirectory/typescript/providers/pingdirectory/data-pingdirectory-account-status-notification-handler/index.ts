// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/account_status_notification_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryAccountStatusNotificationHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/account_status_notification_handler#name DataPingdirectoryAccountStatusNotificationHandler#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/account_status_notification_handler pingdirectory_account_status_notification_handler}
*/
export class DataPingdirectoryAccountStatusNotificationHandler extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_account_status_notification_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryAccountStatusNotificationHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryAccountStatusNotificationHandler to import
  * @param importFromId The id of the existing DataPingdirectoryAccountStatusNotificationHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/account_status_notification_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryAccountStatusNotificationHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_account_status_notification_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/account_status_notification_handler pingdirectory_account_status_notification_handler} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryAccountStatusNotificationHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryAccountStatusNotificationHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_account_status_notification_handler',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_authenticated_message_template - computed: true, optional: false, required: false
  public get accountAuthenticatedMessageTemplate() {
    return this.getStringAttribute('account_authenticated_message_template');
  }

  // account_authentication_notification_result_criteria - computed: true, optional: false, required: false
  public get accountAuthenticationNotificationResultCriteria() {
    return this.getStringAttribute('account_authentication_notification_result_criteria');
  }

  // account_created_message_template - computed: true, optional: false, required: false
  public get accountCreatedMessageTemplate() {
    return this.getStringAttribute('account_created_message_template');
  }

  // account_creation_notification_request_criteria - computed: true, optional: false, required: false
  public get accountCreationNotificationRequestCriteria() {
    return this.getStringAttribute('account_creation_notification_request_criteria');
  }

  // account_deleted_message_template - computed: true, optional: false, required: false
  public get accountDeletedMessageTemplate() {
    return this.getStringAttribute('account_deleted_message_template');
  }

  // account_deletion_notification_request_criteria - computed: true, optional: false, required: false
  public get accountDeletionNotificationRequestCriteria() {
    return this.getStringAttribute('account_deletion_notification_request_criteria');
  }

  // account_disabled_message_template - computed: true, optional: false, required: false
  public get accountDisabledMessageTemplate() {
    return this.getStringAttribute('account_disabled_message_template');
  }

  // account_enabled_message_template - computed: true, optional: false, required: false
  public get accountEnabledMessageTemplate() {
    return this.getStringAttribute('account_enabled_message_template');
  }

  // account_expired_message_template - computed: true, optional: false, required: false
  public get accountExpiredMessageTemplate() {
    return this.getStringAttribute('account_expired_message_template');
  }

  // account_idle_locked_message_template - computed: true, optional: false, required: false
  public get accountIdleLockedMessageTemplate() {
    return this.getStringAttribute('account_idle_locked_message_template');
  }

  // account_not_yet_active_message_template - computed: true, optional: false, required: false
  public get accountNotYetActiveMessageTemplate() {
    return this.getStringAttribute('account_not_yet_active_message_template');
  }

  // account_permanently_failure_locked_message_template - computed: true, optional: false, required: false
  public get accountPermanentlyFailureLockedMessageTemplate() {
    return this.getStringAttribute('account_permanently_failure_locked_message_template');
  }

  // account_reset_locked_message_template - computed: true, optional: false, required: false
  public get accountResetLockedMessageTemplate() {
    return this.getStringAttribute('account_reset_locked_message_template');
  }

  // account_status_notification_type - computed: true, optional: false, required: false
  public get accountStatusNotificationType() {
    return cdktf.Fn.tolist(this.getListAttribute('account_status_notification_type'));
  }

  // account_temporarily_failure_locked_message_template - computed: true, optional: false, required: false
  public get accountTemporarilyFailureLockedMessageTemplate() {
    return this.getStringAttribute('account_temporarily_failure_locked_message_template');
  }

  // account_unlocked_message_template - computed: true, optional: false, required: false
  public get accountUnlockedMessageTemplate() {
    return this.getStringAttribute('account_unlocked_message_template');
  }

  // account_update_notification_request_criteria - computed: true, optional: false, required: false
  public get accountUpdateNotificationRequestCriteria() {
    return this.getStringAttribute('account_update_notification_request_criteria');
  }

  // account_updated_message_template - computed: true, optional: false, required: false
  public get accountUpdatedMessageTemplate() {
    return this.getStringAttribute('account_updated_message_template');
  }

  // asynchronous - computed: true, optional: false, required: false
  public get asynchronous() {
    return this.getBooleanAttribute('asynchronous');
  }

  // bind_password_failed_validation_message_template - computed: true, optional: false, required: false
  public get bindPasswordFailedValidationMessageTemplate() {
    return this.getStringAttribute('bind_password_failed_validation_message_template');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email_address_attribute_type - computed: true, optional: false, required: false
  public get emailAddressAttributeType() {
    return cdktf.Fn.tolist(this.getListAttribute('email_address_attribute_type'));
  }

  // email_address_json_field - computed: true, optional: false, required: false
  public get emailAddressJsonField() {
    return this.getStringAttribute('email_address_json_field');
  }

  // email_address_json_object_filter - computed: true, optional: false, required: false
  public get emailAddressJsonObjectFilter() {
    return this.getStringAttribute('email_address_json_object_filter');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_subject - computed: true, optional: false, required: false
  public get messageSubject() {
    return cdktf.Fn.tolist(this.getListAttribute('message_subject'));
  }

  // message_template_file - computed: true, optional: false, required: false
  public get messageTemplateFile() {
    return cdktf.Fn.tolist(this.getListAttribute('message_template_file'));
  }

  // must_change_password_message_template - computed: true, optional: false, required: false
  public get mustChangePasswordMessageTemplate() {
    return this.getStringAttribute('must_change_password_message_template');
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

  // password_changed_message_template - computed: true, optional: false, required: false
  public get passwordChangedMessageTemplate() {
    return this.getStringAttribute('password_changed_message_template');
  }

  // password_expired_message_template - computed: true, optional: false, required: false
  public get passwordExpiredMessageTemplate() {
    return this.getStringAttribute('password_expired_message_template');
  }

  // password_expiring_message_template - computed: true, optional: false, required: false
  public get passwordExpiringMessageTemplate() {
    return this.getStringAttribute('password_expiring_message_template');
  }

  // password_reset_message_template - computed: true, optional: false, required: false
  public get passwordResetMessageTemplate() {
    return this.getStringAttribute('password_reset_message_template');
  }

  // recipient_address - computed: true, optional: false, required: false
  public get recipientAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('recipient_address'));
  }

  // script_argument - computed: true, optional: false, required: false
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }

  // script_class - computed: true, optional: false, required: false
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }

  // send_message_without_end_user_address - computed: true, optional: false, required: false
  public get sendMessageWithoutEndUserAddress() {
    return this.getBooleanAttribute('send_message_without_end_user_address');
  }

  // sender_address - computed: true, optional: false, required: false
  public get senderAddress() {
    return this.getStringAttribute('sender_address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
