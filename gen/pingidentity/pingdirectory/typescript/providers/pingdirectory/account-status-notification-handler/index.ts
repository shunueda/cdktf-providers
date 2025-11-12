// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountStatusNotificationHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that an account has successfully authenticated in a bind operation that matches the criteria provided in the account-authentication-notification-request-criteria property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_authenticated_message_template AccountStatusNotificationHandler#account_authenticated_message_template}
  */
  readonly accountAuthenticatedMessageTemplate?: string;
  /**
  * A result criteria object that identifies which successful bind operations should result in account authentication notifications for this handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_authentication_notification_result_criteria AccountStatusNotificationHandler#account_authentication_notification_result_criteria}
  */
  readonly accountAuthenticationNotificationResultCriteria?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that a new account is created in an add request that matches the criteria provided in the account-creation-notification-request-criteria property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_created_message_template AccountStatusNotificationHandler#account_created_message_template}
  */
  readonly accountCreatedMessageTemplate?: string;
  /**
  * A request criteria object that identifies which add requests should result in account creation notifications for this handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_creation_notification_request_criteria AccountStatusNotificationHandler#account_creation_notification_request_criteria}
  */
  readonly accountCreationNotificationRequestCriteria?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that an existing accout has been removed in a delete request that matches the criteria provided in the account-deletion-notification-request-criteria property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_deleted_message_template AccountStatusNotificationHandler#account_deleted_message_template}
  */
  readonly accountDeletedMessageTemplate?: string;
  /**
  * A request criteria object that identifies which delete requests should result in account deletion notifications for this handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_deletion_notification_request_criteria AccountStatusNotificationHandler#account_deletion_notification_request_criteria}
  */
  readonly accountDeletionNotificationRequestCriteria?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that a user's account is disabled by an administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_disabled_message_template AccountStatusNotificationHandler#account_disabled_message_template}
  */
  readonly accountDisabledMessageTemplate?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that a user's account is enabled by an administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_enabled_message_template AccountStatusNotificationHandler#account_enabled_message_template}
  */
  readonly accountEnabledMessageTemplate?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that an authentication attempt fails because the account has an expiration time that is in the past.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_expired_message_template AccountStatusNotificationHandler#account_expired_message_template}
  */
  readonly accountExpiredMessageTemplate?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that authentication attempt fails because it has been too long since the user last successfully authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_idle_locked_message_template AccountStatusNotificationHandler#account_idle_locked_message_template}
  */
  readonly accountIdleLockedMessageTemplate?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that an authentication attempt fails because the account has an activation time that is in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_not_yet_active_message_template AccountStatusNotificationHandler#account_not_yet_active_message_template}
  */
  readonly accountNotYetActiveMessageTemplate?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that an account becomes permanently locked as a result of too many authentication failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_permanently_failure_locked_message_template AccountStatusNotificationHandler#account_permanently_failure_locked_message_template}
  */
  readonly accountPermanentlyFailureLockedMessageTemplate?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that authentication attempt fails because the user failed to choose a new password in a timely manner after an administrative reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_reset_locked_message_template AccountStatusNotificationHandler#account_reset_locked_message_template}
  */
  readonly accountResetLockedMessageTemplate?: string;
  /**
  * When the `type` attribute is set to:
  *   - `admin-alert`: The types of account status notifications that should result in administrative alerts.
  *   - `error-log`: Indicates which types of event can trigger an account status notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_status_notification_type AccountStatusNotificationHandler#account_status_notification_type}
  */
  readonly accountStatusNotificationType?: string[];
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that an account becomes temporarily locked as a result of too many authentication failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_temporarily_failure_locked_message_template AccountStatusNotificationHandler#account_temporarily_failure_locked_message_template}
  */
  readonly accountTemporarilyFailureLockedMessageTemplate?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that a user's account has been unlocked (e.g., by an administrative password reset).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_unlocked_message_template AccountStatusNotificationHandler#account_unlocked_message_template}
  */
  readonly accountUnlockedMessageTemplate?: string;
  /**
  * A request criteria object that identifies which modify and modify DN requests should result in account update notifications for this handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_update_notification_request_criteria AccountStatusNotificationHandler#account_update_notification_request_criteria}
  */
  readonly accountUpdateNotificationRequestCriteria?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that an existing account is updated with a modify or modify DN operation that matches the criteria provided in the account-update-notification-request-criteria property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#account_updated_message_template AccountStatusNotificationHandler#account_updated_message_template}
  */
  readonly accountUpdatedMessageTemplate?: string;
  /**
  * Indicates whether the server should attempt to invoke this Account Status Notification Handler in a background thread so that any potentially-expensive processing (e.g., performing network communication to deliver a message) will not delay processing for the operation that triggered the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#asynchronous AccountStatusNotificationHandler#asynchronous}
  */
  readonly asynchronous?: boolean | cdktf.IResolvable;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that a user authenticated with a password that failed to satisfy the criteria for one or more of the configured password validators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#bind_password_failed_validation_message_template AccountStatusNotificationHandler#bind_password_failed_validation_message_template}
  */
  readonly bindPasswordFailedValidationMessageTemplate?: string;
  /**
  * A description for this Account Status Notification Handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#description AccountStatusNotificationHandler#description}
  */
  readonly description?: string;
  /**
  * Specifies which attribute in the user's entries may be used to obtain the email address when notifying the end user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#email_address_attribute_type AccountStatusNotificationHandler#email_address_attribute_type}
  */
  readonly emailAddressAttributeType?: string[];
  /**
  * The name of the JSON field whose value is the email address to which the message should be sent. The email address must be contained in a top-level field whose value is a single string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#email_address_json_field AccountStatusNotificationHandler#email_address_json_field}
  */
  readonly emailAddressJsonField?: string;
  /**
  * A JSON object filter that may be used to identify which email address value to use when sending the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#email_address_json_object_filter AccountStatusNotificationHandler#email_address_json_object_filter}
  */
  readonly emailAddressJsonObjectFilter?: string;
  /**
  * Indicates whether the Account Status Notification Handler is enabled. Only enabled handlers are invoked whenever a related event occurs in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#enabled AccountStatusNotificationHandler#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party Account Status Notification Handler. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#extension_argument AccountStatusNotificationHandler#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Account Status Notification Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#extension_class AccountStatusNotificationHandler#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies the subject that should be used for email messages generated by this account status notification handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#message_subject AccountStatusNotificationHandler#message_subject}
  */
  readonly messageSubject?: string[];
  /**
  * Specifies the path to the file containing the message template to generate the email notification messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#message_template_file AccountStatusNotificationHandler#message_template_file}
  */
  readonly messageTemplateFile?: string[];
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that a user successfully authenticates to the server but will be required to choose a new password before they will be allowed to perform any other operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#must_change_password_message_template AccountStatusNotificationHandler#must_change_password_message_template}
  */
  readonly mustChangePasswordMessageTemplate?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#name AccountStatusNotificationHandler#name}
  */
  readonly name: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that a user changes their own password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#password_changed_message_template AccountStatusNotificationHandler#password_changed_message_template}
  */
  readonly passwordChangedMessageTemplate?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that an authentication attempt fails because the account has an expired password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#password_expired_message_template AccountStatusNotificationHandler#password_expired_message_template}
  */
  readonly passwordExpiredMessageTemplate?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that an authentication attempt succeeds, but the user's password is about to expire. This notification will only be generated the first time the user authenticates within the window of time that the server should warn about an upcoming password expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#password_expiring_message_template AccountStatusNotificationHandler#password_expiring_message_template}
  */
  readonly passwordExpiringMessageTemplate?: string;
  /**
  * The path to a file containing the template to use to generate the email message to send in the event that a user's password has been reset by an administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#password_reset_message_template AccountStatusNotificationHandler#password_reset_message_template}
  */
  readonly passwordResetMessageTemplate?: string;
  /**
  * Specifies an email address to which notification messages are sent, either instead of or in addition to the end user for whom the notification has been generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#recipient_address AccountStatusNotificationHandler#recipient_address}
  */
  readonly recipientAddress?: string[];
  /**
  * The set of arguments used to customize the behavior for the Scripted Account Status Notification Handler. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#script_argument AccountStatusNotificationHandler#script_argument}
  */
  readonly scriptArgument?: string[];
  /**
  * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Account Status Notification Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#script_class AccountStatusNotificationHandler#script_class}
  */
  readonly scriptClass?: string;
  /**
  * Indicates whether an email notification message should be generated and sent to the set of notification recipients even if the user entry does not contain any values for any of the email address attributes (that is, in cases when it is not possible to notify the end user).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#send_message_without_end_user_address AccountStatusNotificationHandler#send_message_without_end_user_address}
  */
  readonly sendMessageWithoutEndUserAddress?: boolean | cdktf.IResolvable;
  /**
  * Specifies the email address from which the message is sent. Note that this does not necessarily have to be a legitimate email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#sender_address AccountStatusNotificationHandler#sender_address}
  */
  readonly senderAddress?: string;
  /**
  * The type of Account Status Notification Handler resource. Options are ['smtp', 'groovy-scripted', 'admin-alert', 'error-log', 'multi-part-email', 'third-party']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#type AccountStatusNotificationHandler#type}
  */
  readonly type: string;
}
export interface AccountStatusNotificationHandlerRequiredActions {
}

export function accountStatusNotificationHandlerRequiredActionsToTerraform(struct?: AccountStatusNotificationHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function accountStatusNotificationHandlerRequiredActionsToHclTerraform(struct?: AccountStatusNotificationHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AccountStatusNotificationHandlerRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AccountStatusNotificationHandlerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountStatusNotificationHandlerRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class AccountStatusNotificationHandlerRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AccountStatusNotificationHandlerRequiredActionsOutputReference {
    return new AccountStatusNotificationHandlerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler pingdirectory_account_status_notification_handler}
*/
export class AccountStatusNotificationHandler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_account_status_notification_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountStatusNotificationHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountStatusNotificationHandler to import
  * @param importFromId The id of the existing AccountStatusNotificationHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountStatusNotificationHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_account_status_notification_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/account_status_notification_handler pingdirectory_account_status_notification_handler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountStatusNotificationHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: AccountStatusNotificationHandlerConfig) {
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
    this._accountAuthenticatedMessageTemplate = config.accountAuthenticatedMessageTemplate;
    this._accountAuthenticationNotificationResultCriteria = config.accountAuthenticationNotificationResultCriteria;
    this._accountCreatedMessageTemplate = config.accountCreatedMessageTemplate;
    this._accountCreationNotificationRequestCriteria = config.accountCreationNotificationRequestCriteria;
    this._accountDeletedMessageTemplate = config.accountDeletedMessageTemplate;
    this._accountDeletionNotificationRequestCriteria = config.accountDeletionNotificationRequestCriteria;
    this._accountDisabledMessageTemplate = config.accountDisabledMessageTemplate;
    this._accountEnabledMessageTemplate = config.accountEnabledMessageTemplate;
    this._accountExpiredMessageTemplate = config.accountExpiredMessageTemplate;
    this._accountIdleLockedMessageTemplate = config.accountIdleLockedMessageTemplate;
    this._accountNotYetActiveMessageTemplate = config.accountNotYetActiveMessageTemplate;
    this._accountPermanentlyFailureLockedMessageTemplate = config.accountPermanentlyFailureLockedMessageTemplate;
    this._accountResetLockedMessageTemplate = config.accountResetLockedMessageTemplate;
    this._accountStatusNotificationType = config.accountStatusNotificationType;
    this._accountTemporarilyFailureLockedMessageTemplate = config.accountTemporarilyFailureLockedMessageTemplate;
    this._accountUnlockedMessageTemplate = config.accountUnlockedMessageTemplate;
    this._accountUpdateNotificationRequestCriteria = config.accountUpdateNotificationRequestCriteria;
    this._accountUpdatedMessageTemplate = config.accountUpdatedMessageTemplate;
    this._asynchronous = config.asynchronous;
    this._bindPasswordFailedValidationMessageTemplate = config.bindPasswordFailedValidationMessageTemplate;
    this._description = config.description;
    this._emailAddressAttributeType = config.emailAddressAttributeType;
    this._emailAddressJsonField = config.emailAddressJsonField;
    this._emailAddressJsonObjectFilter = config.emailAddressJsonObjectFilter;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._messageSubject = config.messageSubject;
    this._messageTemplateFile = config.messageTemplateFile;
    this._mustChangePasswordMessageTemplate = config.mustChangePasswordMessageTemplate;
    this._name = config.name;
    this._passwordChangedMessageTemplate = config.passwordChangedMessageTemplate;
    this._passwordExpiredMessageTemplate = config.passwordExpiredMessageTemplate;
    this._passwordExpiringMessageTemplate = config.passwordExpiringMessageTemplate;
    this._passwordResetMessageTemplate = config.passwordResetMessageTemplate;
    this._recipientAddress = config.recipientAddress;
    this._scriptArgument = config.scriptArgument;
    this._scriptClass = config.scriptClass;
    this._sendMessageWithoutEndUserAddress = config.sendMessageWithoutEndUserAddress;
    this._senderAddress = config.senderAddress;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_authenticated_message_template - computed: false, optional: true, required: false
  private _accountAuthenticatedMessageTemplate?: string; 
  public get accountAuthenticatedMessageTemplate() {
    return this.getStringAttribute('account_authenticated_message_template');
  }
  public set accountAuthenticatedMessageTemplate(value: string) {
    this._accountAuthenticatedMessageTemplate = value;
  }
  public resetAccountAuthenticatedMessageTemplate() {
    this._accountAuthenticatedMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAuthenticatedMessageTemplateInput() {
    return this._accountAuthenticatedMessageTemplate;
  }

  // account_authentication_notification_result_criteria - computed: false, optional: true, required: false
  private _accountAuthenticationNotificationResultCriteria?: string; 
  public get accountAuthenticationNotificationResultCriteria() {
    return this.getStringAttribute('account_authentication_notification_result_criteria');
  }
  public set accountAuthenticationNotificationResultCriteria(value: string) {
    this._accountAuthenticationNotificationResultCriteria = value;
  }
  public resetAccountAuthenticationNotificationResultCriteria() {
    this._accountAuthenticationNotificationResultCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAuthenticationNotificationResultCriteriaInput() {
    return this._accountAuthenticationNotificationResultCriteria;
  }

  // account_created_message_template - computed: false, optional: true, required: false
  private _accountCreatedMessageTemplate?: string; 
  public get accountCreatedMessageTemplate() {
    return this.getStringAttribute('account_created_message_template');
  }
  public set accountCreatedMessageTemplate(value: string) {
    this._accountCreatedMessageTemplate = value;
  }
  public resetAccountCreatedMessageTemplate() {
    this._accountCreatedMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCreatedMessageTemplateInput() {
    return this._accountCreatedMessageTemplate;
  }

  // account_creation_notification_request_criteria - computed: false, optional: true, required: false
  private _accountCreationNotificationRequestCriteria?: string; 
  public get accountCreationNotificationRequestCriteria() {
    return this.getStringAttribute('account_creation_notification_request_criteria');
  }
  public set accountCreationNotificationRequestCriteria(value: string) {
    this._accountCreationNotificationRequestCriteria = value;
  }
  public resetAccountCreationNotificationRequestCriteria() {
    this._accountCreationNotificationRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountCreationNotificationRequestCriteriaInput() {
    return this._accountCreationNotificationRequestCriteria;
  }

  // account_deleted_message_template - computed: false, optional: true, required: false
  private _accountDeletedMessageTemplate?: string; 
  public get accountDeletedMessageTemplate() {
    return this.getStringAttribute('account_deleted_message_template');
  }
  public set accountDeletedMessageTemplate(value: string) {
    this._accountDeletedMessageTemplate = value;
  }
  public resetAccountDeletedMessageTemplate() {
    this._accountDeletedMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDeletedMessageTemplateInput() {
    return this._accountDeletedMessageTemplate;
  }

  // account_deletion_notification_request_criteria - computed: false, optional: true, required: false
  private _accountDeletionNotificationRequestCriteria?: string; 
  public get accountDeletionNotificationRequestCriteria() {
    return this.getStringAttribute('account_deletion_notification_request_criteria');
  }
  public set accountDeletionNotificationRequestCriteria(value: string) {
    this._accountDeletionNotificationRequestCriteria = value;
  }
  public resetAccountDeletionNotificationRequestCriteria() {
    this._accountDeletionNotificationRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDeletionNotificationRequestCriteriaInput() {
    return this._accountDeletionNotificationRequestCriteria;
  }

  // account_disabled_message_template - computed: false, optional: true, required: false
  private _accountDisabledMessageTemplate?: string; 
  public get accountDisabledMessageTemplate() {
    return this.getStringAttribute('account_disabled_message_template');
  }
  public set accountDisabledMessageTemplate(value: string) {
    this._accountDisabledMessageTemplate = value;
  }
  public resetAccountDisabledMessageTemplate() {
    this._accountDisabledMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDisabledMessageTemplateInput() {
    return this._accountDisabledMessageTemplate;
  }

  // account_enabled_message_template - computed: false, optional: true, required: false
  private _accountEnabledMessageTemplate?: string; 
  public get accountEnabledMessageTemplate() {
    return this.getStringAttribute('account_enabled_message_template');
  }
  public set accountEnabledMessageTemplate(value: string) {
    this._accountEnabledMessageTemplate = value;
  }
  public resetAccountEnabledMessageTemplate() {
    this._accountEnabledMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountEnabledMessageTemplateInput() {
    return this._accountEnabledMessageTemplate;
  }

  // account_expired_message_template - computed: false, optional: true, required: false
  private _accountExpiredMessageTemplate?: string; 
  public get accountExpiredMessageTemplate() {
    return this.getStringAttribute('account_expired_message_template');
  }
  public set accountExpiredMessageTemplate(value: string) {
    this._accountExpiredMessageTemplate = value;
  }
  public resetAccountExpiredMessageTemplate() {
    this._accountExpiredMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountExpiredMessageTemplateInput() {
    return this._accountExpiredMessageTemplate;
  }

  // account_idle_locked_message_template - computed: false, optional: true, required: false
  private _accountIdleLockedMessageTemplate?: string; 
  public get accountIdleLockedMessageTemplate() {
    return this.getStringAttribute('account_idle_locked_message_template');
  }
  public set accountIdleLockedMessageTemplate(value: string) {
    this._accountIdleLockedMessageTemplate = value;
  }
  public resetAccountIdleLockedMessageTemplate() {
    this._accountIdleLockedMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdleLockedMessageTemplateInput() {
    return this._accountIdleLockedMessageTemplate;
  }

  // account_not_yet_active_message_template - computed: false, optional: true, required: false
  private _accountNotYetActiveMessageTemplate?: string; 
  public get accountNotYetActiveMessageTemplate() {
    return this.getStringAttribute('account_not_yet_active_message_template');
  }
  public set accountNotYetActiveMessageTemplate(value: string) {
    this._accountNotYetActiveMessageTemplate = value;
  }
  public resetAccountNotYetActiveMessageTemplate() {
    this._accountNotYetActiveMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNotYetActiveMessageTemplateInput() {
    return this._accountNotYetActiveMessageTemplate;
  }

  // account_permanently_failure_locked_message_template - computed: false, optional: true, required: false
  private _accountPermanentlyFailureLockedMessageTemplate?: string; 
  public get accountPermanentlyFailureLockedMessageTemplate() {
    return this.getStringAttribute('account_permanently_failure_locked_message_template');
  }
  public set accountPermanentlyFailureLockedMessageTemplate(value: string) {
    this._accountPermanentlyFailureLockedMessageTemplate = value;
  }
  public resetAccountPermanentlyFailureLockedMessageTemplate() {
    this._accountPermanentlyFailureLockedMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPermanentlyFailureLockedMessageTemplateInput() {
    return this._accountPermanentlyFailureLockedMessageTemplate;
  }

  // account_reset_locked_message_template - computed: false, optional: true, required: false
  private _accountResetLockedMessageTemplate?: string; 
  public get accountResetLockedMessageTemplate() {
    return this.getStringAttribute('account_reset_locked_message_template');
  }
  public set accountResetLockedMessageTemplate(value: string) {
    this._accountResetLockedMessageTemplate = value;
  }
  public resetAccountResetLockedMessageTemplate() {
    this._accountResetLockedMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountResetLockedMessageTemplateInput() {
    return this._accountResetLockedMessageTemplate;
  }

  // account_status_notification_type - computed: true, optional: true, required: false
  private _accountStatusNotificationType?: string[]; 
  public get accountStatusNotificationType() {
    return cdktf.Fn.tolist(this.getListAttribute('account_status_notification_type'));
  }
  public set accountStatusNotificationType(value: string[]) {
    this._accountStatusNotificationType = value;
  }
  public resetAccountStatusNotificationType() {
    this._accountStatusNotificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountStatusNotificationTypeInput() {
    return this._accountStatusNotificationType;
  }

  // account_temporarily_failure_locked_message_template - computed: false, optional: true, required: false
  private _accountTemporarilyFailureLockedMessageTemplate?: string; 
  public get accountTemporarilyFailureLockedMessageTemplate() {
    return this.getStringAttribute('account_temporarily_failure_locked_message_template');
  }
  public set accountTemporarilyFailureLockedMessageTemplate(value: string) {
    this._accountTemporarilyFailureLockedMessageTemplate = value;
  }
  public resetAccountTemporarilyFailureLockedMessageTemplate() {
    this._accountTemporarilyFailureLockedMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTemporarilyFailureLockedMessageTemplateInput() {
    return this._accountTemporarilyFailureLockedMessageTemplate;
  }

  // account_unlocked_message_template - computed: false, optional: true, required: false
  private _accountUnlockedMessageTemplate?: string; 
  public get accountUnlockedMessageTemplate() {
    return this.getStringAttribute('account_unlocked_message_template');
  }
  public set accountUnlockedMessageTemplate(value: string) {
    this._accountUnlockedMessageTemplate = value;
  }
  public resetAccountUnlockedMessageTemplate() {
    this._accountUnlockedMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUnlockedMessageTemplateInput() {
    return this._accountUnlockedMessageTemplate;
  }

  // account_update_notification_request_criteria - computed: false, optional: true, required: false
  private _accountUpdateNotificationRequestCriteria?: string; 
  public get accountUpdateNotificationRequestCriteria() {
    return this.getStringAttribute('account_update_notification_request_criteria');
  }
  public set accountUpdateNotificationRequestCriteria(value: string) {
    this._accountUpdateNotificationRequestCriteria = value;
  }
  public resetAccountUpdateNotificationRequestCriteria() {
    this._accountUpdateNotificationRequestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUpdateNotificationRequestCriteriaInput() {
    return this._accountUpdateNotificationRequestCriteria;
  }

  // account_updated_message_template - computed: false, optional: true, required: false
  private _accountUpdatedMessageTemplate?: string; 
  public get accountUpdatedMessageTemplate() {
    return this.getStringAttribute('account_updated_message_template');
  }
  public set accountUpdatedMessageTemplate(value: string) {
    this._accountUpdatedMessageTemplate = value;
  }
  public resetAccountUpdatedMessageTemplate() {
    this._accountUpdatedMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUpdatedMessageTemplateInput() {
    return this._accountUpdatedMessageTemplate;
  }

  // asynchronous - computed: true, optional: true, required: false
  private _asynchronous?: boolean | cdktf.IResolvable; 
  public get asynchronous() {
    return this.getBooleanAttribute('asynchronous');
  }
  public set asynchronous(value: boolean | cdktf.IResolvable) {
    this._asynchronous = value;
  }
  public resetAsynchronous() {
    this._asynchronous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousInput() {
    return this._asynchronous;
  }

  // bind_password_failed_validation_message_template - computed: false, optional: true, required: false
  private _bindPasswordFailedValidationMessageTemplate?: string; 
  public get bindPasswordFailedValidationMessageTemplate() {
    return this.getStringAttribute('bind_password_failed_validation_message_template');
  }
  public set bindPasswordFailedValidationMessageTemplate(value: string) {
    this._bindPasswordFailedValidationMessageTemplate = value;
  }
  public resetBindPasswordFailedValidationMessageTemplate() {
    this._bindPasswordFailedValidationMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordFailedValidationMessageTemplateInput() {
    return this._bindPasswordFailedValidationMessageTemplate;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email_address_attribute_type - computed: true, optional: true, required: false
  private _emailAddressAttributeType?: string[]; 
  public get emailAddressAttributeType() {
    return cdktf.Fn.tolist(this.getListAttribute('email_address_attribute_type'));
  }
  public set emailAddressAttributeType(value: string[]) {
    this._emailAddressAttributeType = value;
  }
  public resetEmailAddressAttributeType() {
    this._emailAddressAttributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressAttributeTypeInput() {
    return this._emailAddressAttributeType;
  }

  // email_address_json_field - computed: false, optional: true, required: false
  private _emailAddressJsonField?: string; 
  public get emailAddressJsonField() {
    return this.getStringAttribute('email_address_json_field');
  }
  public set emailAddressJsonField(value: string) {
    this._emailAddressJsonField = value;
  }
  public resetEmailAddressJsonField() {
    this._emailAddressJsonField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressJsonFieldInput() {
    return this._emailAddressJsonField;
  }

  // email_address_json_object_filter - computed: false, optional: true, required: false
  private _emailAddressJsonObjectFilter?: string; 
  public get emailAddressJsonObjectFilter() {
    return this.getStringAttribute('email_address_json_object_filter');
  }
  public set emailAddressJsonObjectFilter(value: string) {
    this._emailAddressJsonObjectFilter = value;
  }
  public resetEmailAddressJsonObjectFilter() {
    this._emailAddressJsonObjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressJsonObjectFilterInput() {
    return this._emailAddressJsonObjectFilter;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: false, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_subject - computed: true, optional: true, required: false
  private _messageSubject?: string[]; 
  public get messageSubject() {
    return cdktf.Fn.tolist(this.getListAttribute('message_subject'));
  }
  public set messageSubject(value: string[]) {
    this._messageSubject = value;
  }
  public resetMessageSubject() {
    this._messageSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageSubjectInput() {
    return this._messageSubject;
  }

  // message_template_file - computed: true, optional: true, required: false
  private _messageTemplateFile?: string[]; 
  public get messageTemplateFile() {
    return cdktf.Fn.tolist(this.getListAttribute('message_template_file'));
  }
  public set messageTemplateFile(value: string[]) {
    this._messageTemplateFile = value;
  }
  public resetMessageTemplateFile() {
    this._messageTemplateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTemplateFileInput() {
    return this._messageTemplateFile;
  }

  // must_change_password_message_template - computed: false, optional: true, required: false
  private _mustChangePasswordMessageTemplate?: string; 
  public get mustChangePasswordMessageTemplate() {
    return this.getStringAttribute('must_change_password_message_template');
  }
  public set mustChangePasswordMessageTemplate(value: string) {
    this._mustChangePasswordMessageTemplate = value;
  }
  public resetMustChangePasswordMessageTemplate() {
    this._mustChangePasswordMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustChangePasswordMessageTemplateInput() {
    return this._mustChangePasswordMessageTemplate;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // password_changed_message_template - computed: false, optional: true, required: false
  private _passwordChangedMessageTemplate?: string; 
  public get passwordChangedMessageTemplate() {
    return this.getStringAttribute('password_changed_message_template');
  }
  public set passwordChangedMessageTemplate(value: string) {
    this._passwordChangedMessageTemplate = value;
  }
  public resetPasswordChangedMessageTemplate() {
    this._passwordChangedMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangedMessageTemplateInput() {
    return this._passwordChangedMessageTemplate;
  }

  // password_expired_message_template - computed: false, optional: true, required: false
  private _passwordExpiredMessageTemplate?: string; 
  public get passwordExpiredMessageTemplate() {
    return this.getStringAttribute('password_expired_message_template');
  }
  public set passwordExpiredMessageTemplate(value: string) {
    this._passwordExpiredMessageTemplate = value;
  }
  public resetPasswordExpiredMessageTemplate() {
    this._passwordExpiredMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpiredMessageTemplateInput() {
    return this._passwordExpiredMessageTemplate;
  }

  // password_expiring_message_template - computed: false, optional: true, required: false
  private _passwordExpiringMessageTemplate?: string; 
  public get passwordExpiringMessageTemplate() {
    return this.getStringAttribute('password_expiring_message_template');
  }
  public set passwordExpiringMessageTemplate(value: string) {
    this._passwordExpiringMessageTemplate = value;
  }
  public resetPasswordExpiringMessageTemplate() {
    this._passwordExpiringMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpiringMessageTemplateInput() {
    return this._passwordExpiringMessageTemplate;
  }

  // password_reset_message_template - computed: false, optional: true, required: false
  private _passwordResetMessageTemplate?: string; 
  public get passwordResetMessageTemplate() {
    return this.getStringAttribute('password_reset_message_template');
  }
  public set passwordResetMessageTemplate(value: string) {
    this._passwordResetMessageTemplate = value;
  }
  public resetPasswordResetMessageTemplate() {
    this._passwordResetMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetMessageTemplateInput() {
    return this._passwordResetMessageTemplate;
  }

  // recipient_address - computed: true, optional: true, required: false
  private _recipientAddress?: string[]; 
  public get recipientAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('recipient_address'));
  }
  public set recipientAddress(value: string[]) {
    this._recipientAddress = value;
  }
  public resetRecipientAddress() {
    this._recipientAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientAddressInput() {
    return this._recipientAddress;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new AccountStatusNotificationHandlerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // script_argument - computed: true, optional: true, required: false
  private _scriptArgument?: string[]; 
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }
  public set scriptArgument(value: string[]) {
    this._scriptArgument = value;
  }
  public resetScriptArgument() {
    this._scriptArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptArgumentInput() {
    return this._scriptArgument;
  }

  // script_class - computed: false, optional: true, required: false
  private _scriptClass?: string; 
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }
  public set scriptClass(value: string) {
    this._scriptClass = value;
  }
  public resetScriptClass() {
    this._scriptClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptClassInput() {
    return this._scriptClass;
  }

  // send_message_without_end_user_address - computed: true, optional: true, required: false
  private _sendMessageWithoutEndUserAddress?: boolean | cdktf.IResolvable; 
  public get sendMessageWithoutEndUserAddress() {
    return this.getBooleanAttribute('send_message_without_end_user_address');
  }
  public set sendMessageWithoutEndUserAddress(value: boolean | cdktf.IResolvable) {
    this._sendMessageWithoutEndUserAddress = value;
  }
  public resetSendMessageWithoutEndUserAddress() {
    this._sendMessageWithoutEndUserAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendMessageWithoutEndUserAddressInput() {
    return this._sendMessageWithoutEndUserAddress;
  }

  // sender_address - computed: false, optional: true, required: false
  private _senderAddress?: string; 
  public get senderAddress() {
    return this.getStringAttribute('sender_address');
  }
  public set senderAddress(value: string) {
    this._senderAddress = value;
  }
  public resetSenderAddress() {
    this._senderAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderAddressInput() {
    return this._senderAddress;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_authenticated_message_template: cdktf.stringToTerraform(this._accountAuthenticatedMessageTemplate),
      account_authentication_notification_result_criteria: cdktf.stringToTerraform(this._accountAuthenticationNotificationResultCriteria),
      account_created_message_template: cdktf.stringToTerraform(this._accountCreatedMessageTemplate),
      account_creation_notification_request_criteria: cdktf.stringToTerraform(this._accountCreationNotificationRequestCriteria),
      account_deleted_message_template: cdktf.stringToTerraform(this._accountDeletedMessageTemplate),
      account_deletion_notification_request_criteria: cdktf.stringToTerraform(this._accountDeletionNotificationRequestCriteria),
      account_disabled_message_template: cdktf.stringToTerraform(this._accountDisabledMessageTemplate),
      account_enabled_message_template: cdktf.stringToTerraform(this._accountEnabledMessageTemplate),
      account_expired_message_template: cdktf.stringToTerraform(this._accountExpiredMessageTemplate),
      account_idle_locked_message_template: cdktf.stringToTerraform(this._accountIdleLockedMessageTemplate),
      account_not_yet_active_message_template: cdktf.stringToTerraform(this._accountNotYetActiveMessageTemplate),
      account_permanently_failure_locked_message_template: cdktf.stringToTerraform(this._accountPermanentlyFailureLockedMessageTemplate),
      account_reset_locked_message_template: cdktf.stringToTerraform(this._accountResetLockedMessageTemplate),
      account_status_notification_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountStatusNotificationType),
      account_temporarily_failure_locked_message_template: cdktf.stringToTerraform(this._accountTemporarilyFailureLockedMessageTemplate),
      account_unlocked_message_template: cdktf.stringToTerraform(this._accountUnlockedMessageTemplate),
      account_update_notification_request_criteria: cdktf.stringToTerraform(this._accountUpdateNotificationRequestCriteria),
      account_updated_message_template: cdktf.stringToTerraform(this._accountUpdatedMessageTemplate),
      asynchronous: cdktf.booleanToTerraform(this._asynchronous),
      bind_password_failed_validation_message_template: cdktf.stringToTerraform(this._bindPasswordFailedValidationMessageTemplate),
      description: cdktf.stringToTerraform(this._description),
      email_address_attribute_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailAddressAttributeType),
      email_address_json_field: cdktf.stringToTerraform(this._emailAddressJsonField),
      email_address_json_object_filter: cdktf.stringToTerraform(this._emailAddressJsonObjectFilter),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      message_subject: cdktf.listMapper(cdktf.stringToTerraform, false)(this._messageSubject),
      message_template_file: cdktf.listMapper(cdktf.stringToTerraform, false)(this._messageTemplateFile),
      must_change_password_message_template: cdktf.stringToTerraform(this._mustChangePasswordMessageTemplate),
      name: cdktf.stringToTerraform(this._name),
      password_changed_message_template: cdktf.stringToTerraform(this._passwordChangedMessageTemplate),
      password_expired_message_template: cdktf.stringToTerraform(this._passwordExpiredMessageTemplate),
      password_expiring_message_template: cdktf.stringToTerraform(this._passwordExpiringMessageTemplate),
      password_reset_message_template: cdktf.stringToTerraform(this._passwordResetMessageTemplate),
      recipient_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipientAddress),
      script_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scriptArgument),
      script_class: cdktf.stringToTerraform(this._scriptClass),
      send_message_without_end_user_address: cdktf.booleanToTerraform(this._sendMessageWithoutEndUserAddress),
      sender_address: cdktf.stringToTerraform(this._senderAddress),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_authenticated_message_template: {
        value: cdktf.stringToHclTerraform(this._accountAuthenticatedMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_authentication_notification_result_criteria: {
        value: cdktf.stringToHclTerraform(this._accountAuthenticationNotificationResultCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_created_message_template: {
        value: cdktf.stringToHclTerraform(this._accountCreatedMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_creation_notification_request_criteria: {
        value: cdktf.stringToHclTerraform(this._accountCreationNotificationRequestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_deleted_message_template: {
        value: cdktf.stringToHclTerraform(this._accountDeletedMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_deletion_notification_request_criteria: {
        value: cdktf.stringToHclTerraform(this._accountDeletionNotificationRequestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_disabled_message_template: {
        value: cdktf.stringToHclTerraform(this._accountDisabledMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_enabled_message_template: {
        value: cdktf.stringToHclTerraform(this._accountEnabledMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_expired_message_template: {
        value: cdktf.stringToHclTerraform(this._accountExpiredMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_idle_locked_message_template: {
        value: cdktf.stringToHclTerraform(this._accountIdleLockedMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_not_yet_active_message_template: {
        value: cdktf.stringToHclTerraform(this._accountNotYetActiveMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_permanently_failure_locked_message_template: {
        value: cdktf.stringToHclTerraform(this._accountPermanentlyFailureLockedMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_reset_locked_message_template: {
        value: cdktf.stringToHclTerraform(this._accountResetLockedMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_status_notification_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountStatusNotificationType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      account_temporarily_failure_locked_message_template: {
        value: cdktf.stringToHclTerraform(this._accountTemporarilyFailureLockedMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_unlocked_message_template: {
        value: cdktf.stringToHclTerraform(this._accountUnlockedMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_update_notification_request_criteria: {
        value: cdktf.stringToHclTerraform(this._accountUpdateNotificationRequestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_updated_message_template: {
        value: cdktf.stringToHclTerraform(this._accountUpdatedMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asynchronous: {
        value: cdktf.booleanToHclTerraform(this._asynchronous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bind_password_failed_validation_message_template: {
        value: cdktf.stringToHclTerraform(this._bindPasswordFailedValidationMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_address_attribute_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailAddressAttributeType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email_address_json_field: {
        value: cdktf.stringToHclTerraform(this._emailAddressJsonField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_address_json_object_filter: {
        value: cdktf.stringToHclTerraform(this._emailAddressJsonObjectFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_subject: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._messageSubject),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      message_template_file: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._messageTemplateFile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      must_change_password_message_template: {
        value: cdktf.stringToHclTerraform(this._mustChangePasswordMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_changed_message_template: {
        value: cdktf.stringToHclTerraform(this._passwordChangedMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_expired_message_template: {
        value: cdktf.stringToHclTerraform(this._passwordExpiredMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_expiring_message_template: {
        value: cdktf.stringToHclTerraform(this._passwordExpiringMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_reset_message_template: {
        value: cdktf.stringToHclTerraform(this._passwordResetMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipient_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipientAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      script_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scriptArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      script_class: {
        value: cdktf.stringToHclTerraform(this._scriptClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_message_without_end_user_address: {
        value: cdktf.booleanToHclTerraform(this._sendMessageWithoutEndUserAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sender_address: {
        value: cdktf.stringToHclTerraform(this._senderAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
