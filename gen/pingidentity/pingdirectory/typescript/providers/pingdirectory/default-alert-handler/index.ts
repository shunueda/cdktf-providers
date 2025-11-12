// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultAlertHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * When the `type` attribute is set to:
  *   - One of [`output`, `groovy-scripted`, `custom`, `error-log`, `third-party`]: Indicates whether the server should attempt to invoke this Alert Handler in a background thread so that any potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server was performing when the alert was generated.
  *   - `smtp`: Indicates whether the server should attempt to invoke this SMTP Alert Handler in a background thread so that any potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server was performing when the alert was generated.
  *   - `jmx`: Indicates whether the server should attempt to invoke this JMX Alert Handler in a background thread so that any potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server was performing when the alert was generated.
  *   - `snmp`: Indicates whether the server should attempt to invoke this SNMP Alert Handler in a background thread so that any potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server was performing when the alert was generated.
  *   - `twilio`: Indicates whether the server should attempt to invoke this Twilio Alert Handler in a background thread so that any potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server was performing when the alert was generated.
  *   - `snmp-sub-agent`: Indicates whether the server should attempt to invoke this SNMP Sub Agent Alert Handler in a background thread so that any potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server was performing when the alert was generated.
  *   - `exec`: Indicates whether the server should attempt to invoke this Exec Alert Handler in a background thread so that any potentially-expensive processing (e.g., performing network communication to deliver the alert notification) will not delay whatever processing the server was performing when the alert was generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#asynchronous DefaultAlertHandler#asynchronous}
  */
  readonly asynchronous?: boolean | cdktf.IResolvable;
  /**
  * Specifies the path of the command to execute, without any arguments. It must be an absolute path for reasons of security and reliability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#command DefaultAlertHandler#command}
  */
  readonly command?: string;
  /**
  * Supported in PingDirectory product version 10.1.0.0+. The maximum length of time this server will wait for the executed command to finish executing before forcibly terminating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#command_timeout DefaultAlertHandler#command_timeout}
  */
  readonly commandTimeout?: string;
  /**
  * Specifies the name of the community to which the traps will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#community_name DefaultAlertHandler#community_name}
  */
  readonly communityName?: string;
  /**
  * A description for this Alert Handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#description DefaultAlertHandler#description}
  */
  readonly description?: string;
  /**
  * Specifies the names of the alert types that are disabled for this alert handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#disabled_alert_type DefaultAlertHandler#disabled_alert_type}
  */
  readonly disabledAlertType?: string[];
  /**
  * Indicates whether the Alert Handler is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#enabled DefaultAlertHandler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the alert severities for which this alert handler should be used. If no values are provided, then this alert handler will be enabled for alerts with any severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#enabled_alert_severity DefaultAlertHandler#enabled_alert_severity}
  */
  readonly enabledAlertSeverity?: string[];
  /**
  * Specifies the names of the alert types that are enabled for this alert handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#enabled_alert_type DefaultAlertHandler#enabled_alert_type}
  */
  readonly enabledAlertType?: string[];
  /**
  * The set of arguments used to customize the behavior for the Third Party Alert Handler. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#extension_argument DefaultAlertHandler#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Alert Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#extension_class DefaultAlertHandler#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * A reference to an HTTP proxy server that should be used for requests sent to the Twilio service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#http_proxy_external_server DefaultAlertHandler#http_proxy_external_server}
  */
  readonly httpProxyExternalServer?: string;
  /**
  * Include monitor entries that match this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#include_monitor_data_filter DefaultAlertHandler#include_monitor_data_filter}
  */
  readonly includeMonitorDataFilter?: string;
  /**
  * The behavior to use for alert messages that are longer than the 160-character size limit for SMS messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#long_message_behavior DefaultAlertHandler#long_message_behavior}
  */
  readonly longMessageBehavior?: string;
  /**
  * Specifies the body that should be used for email messages generated by this alert handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#message_body DefaultAlertHandler#message_body}
  */
  readonly messageBody?: string;
  /**
  * Specifies the subject that should be used for email messages generated by this alert handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#message_subject DefaultAlertHandler#message_subject}
  */
  readonly messageSubject?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#name DefaultAlertHandler#name}
  */
  readonly name: string;
  /**
  * The format to use when writing the alert messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#output_format DefaultAlertHandler#output_format}
  */
  readonly outputFormat?: string;
  /**
  * The location to which alert messages will be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#output_location DefaultAlertHandler#output_location}
  */
  readonly outputLocation?: string;
  /**
  * Specifies an email address to which the messages should be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#recipient_address DefaultAlertHandler#recipient_address}
  */
  readonly recipientAddress?: string[];
  /**
  * The phone number to which alert notifications should be delivered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#recipient_phone_number DefaultAlertHandler#recipient_phone_number}
  */
  readonly recipientPhoneNumber?: string[];
  /**
  * The set of arguments used to customize the behavior for the Scripted Alert Handler. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#script_argument DefaultAlertHandler#script_argument}
  */
  readonly scriptArgument?: string[];
  /**
  * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Alert Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#script_class DefaultAlertHandler#script_class}
  */
  readonly scriptClass?: string;
  /**
  * Specifies the email address to use as the sender for messages generated by this alert handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#sender_address DefaultAlertHandler#sender_address}
  */
  readonly senderAddress?: string;
  /**
  * The outgoing phone number to use for the messages. Values must be phone numbers you have obtained for use with your Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#sender_phone_number DefaultAlertHandler#sender_phone_number}
  */
  readonly senderPhoneNumber?: string[];
  /**
  * Specifies the address of the SNMP agent to which traps will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#server_host_name DefaultAlertHandler#server_host_name}
  */
  readonly serverHostName?: string;
  /**
  * Specifies the port number of the SNMP agent to which traps will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#server_port DefaultAlertHandler#server_port}
  */
  readonly serverPort?: number;
  /**
  * The unique identifier assigned to the Twilio account that will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#twilio_account_sid DefaultAlertHandler#twilio_account_sid}
  */
  readonly twilioAccountSid?: string;
  /**
  * The auth token for the Twilio account that will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#twilio_auth_token DefaultAlertHandler#twilio_auth_token}
  */
  readonly twilioAuthToken?: string;
  /**
  * The passphrase provider that may be used to obtain the auth token for the Twilio account that will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#twilio_auth_token_passphrase_provider DefaultAlertHandler#twilio_auth_token_passphrase_provider}
  */
  readonly twilioAuthTokenPassphraseProvider?: string;
}
export interface DefaultAlertHandlerRequiredActions {
}

export function defaultAlertHandlerRequiredActionsToTerraform(struct?: DefaultAlertHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultAlertHandlerRequiredActionsToHclTerraform(struct?: DefaultAlertHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultAlertHandlerRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultAlertHandlerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultAlertHandlerRequiredActions | undefined) {
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

export class DefaultAlertHandlerRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultAlertHandlerRequiredActionsOutputReference {
    return new DefaultAlertHandlerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler pingdirectory_default_alert_handler}
*/
export class DefaultAlertHandler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_alert_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultAlertHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultAlertHandler to import
  * @param importFromId The id of the existing DefaultAlertHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultAlertHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_alert_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_alert_handler pingdirectory_default_alert_handler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultAlertHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultAlertHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_alert_handler',
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
    this._asynchronous = config.asynchronous;
    this._command = config.command;
    this._commandTimeout = config.commandTimeout;
    this._communityName = config.communityName;
    this._description = config.description;
    this._disabledAlertType = config.disabledAlertType;
    this._enabled = config.enabled;
    this._enabledAlertSeverity = config.enabledAlertSeverity;
    this._enabledAlertType = config.enabledAlertType;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._httpProxyExternalServer = config.httpProxyExternalServer;
    this._includeMonitorDataFilter = config.includeMonitorDataFilter;
    this._longMessageBehavior = config.longMessageBehavior;
    this._messageBody = config.messageBody;
    this._messageSubject = config.messageSubject;
    this._name = config.name;
    this._outputFormat = config.outputFormat;
    this._outputLocation = config.outputLocation;
    this._recipientAddress = config.recipientAddress;
    this._recipientPhoneNumber = config.recipientPhoneNumber;
    this._scriptArgument = config.scriptArgument;
    this._scriptClass = config.scriptClass;
    this._senderAddress = config.senderAddress;
    this._senderPhoneNumber = config.senderPhoneNumber;
    this._serverHostName = config.serverHostName;
    this._serverPort = config.serverPort;
    this._twilioAccountSid = config.twilioAccountSid;
    this._twilioAuthToken = config.twilioAuthToken;
    this._twilioAuthTokenPassphraseProvider = config.twilioAuthTokenPassphraseProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // command - computed: true, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // command_timeout - computed: true, optional: true, required: false
  private _commandTimeout?: string; 
  public get commandTimeout() {
    return this.getStringAttribute('command_timeout');
  }
  public set commandTimeout(value: string) {
    this._commandTimeout = value;
  }
  public resetCommandTimeout() {
    this._commandTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandTimeoutInput() {
    return this._commandTimeout;
  }

  // community_name - computed: true, optional: true, required: false
  private _communityName?: string; 
  public get communityName() {
    return this.getStringAttribute('community_name');
  }
  public set communityName(value: string) {
    this._communityName = value;
  }
  public resetCommunityName() {
    this._communityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityNameInput() {
    return this._communityName;
  }

  // description - computed: true, optional: true, required: false
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

  // disabled_alert_type - computed: true, optional: true, required: false
  private _disabledAlertType?: string[]; 
  public get disabledAlertType() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_alert_type'));
  }
  public set disabledAlertType(value: string[]) {
    this._disabledAlertType = value;
  }
  public resetDisabledAlertType() {
    this._disabledAlertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledAlertTypeInput() {
    return this._disabledAlertType;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enabled_alert_severity - computed: true, optional: true, required: false
  private _enabledAlertSeverity?: string[]; 
  public get enabledAlertSeverity() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_alert_severity'));
  }
  public set enabledAlertSeverity(value: string[]) {
    this._enabledAlertSeverity = value;
  }
  public resetEnabledAlertSeverity() {
    this._enabledAlertSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledAlertSeverityInput() {
    return this._enabledAlertSeverity;
  }

  // enabled_alert_type - computed: true, optional: true, required: false
  private _enabledAlertType?: string[]; 
  public get enabledAlertType() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_alert_type'));
  }
  public set enabledAlertType(value: string[]) {
    this._enabledAlertType = value;
  }
  public resetEnabledAlertType() {
    this._enabledAlertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledAlertTypeInput() {
    return this._enabledAlertType;
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

  // extension_class - computed: true, optional: true, required: false
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

  // http_proxy_external_server - computed: true, optional: true, required: false
  private _httpProxyExternalServer?: string; 
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }
  public set httpProxyExternalServer(value: string) {
    this._httpProxyExternalServer = value;
  }
  public resetHttpProxyExternalServer() {
    this._httpProxyExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyExternalServerInput() {
    return this._httpProxyExternalServer;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_monitor_data_filter - computed: true, optional: true, required: false
  private _includeMonitorDataFilter?: string; 
  public get includeMonitorDataFilter() {
    return this.getStringAttribute('include_monitor_data_filter');
  }
  public set includeMonitorDataFilter(value: string) {
    this._includeMonitorDataFilter = value;
  }
  public resetIncludeMonitorDataFilter() {
    this._includeMonitorDataFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMonitorDataFilterInput() {
    return this._includeMonitorDataFilter;
  }

  // long_message_behavior - computed: true, optional: true, required: false
  private _longMessageBehavior?: string; 
  public get longMessageBehavior() {
    return this.getStringAttribute('long_message_behavior');
  }
  public set longMessageBehavior(value: string) {
    this._longMessageBehavior = value;
  }
  public resetLongMessageBehavior() {
    this._longMessageBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longMessageBehaviorInput() {
    return this._longMessageBehavior;
  }

  // message_body - computed: true, optional: true, required: false
  private _messageBody?: string; 
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }
  public set messageBody(value: string) {
    this._messageBody = value;
  }
  public resetMessageBody() {
    this._messageBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBodyInput() {
    return this._messageBody;
  }

  // message_subject - computed: true, optional: true, required: false
  private _messageSubject?: string; 
  public get messageSubject() {
    return this.getStringAttribute('message_subject');
  }
  public set messageSubject(value: string) {
    this._messageSubject = value;
  }
  public resetMessageSubject() {
    this._messageSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageSubjectInput() {
    return this._messageSubject;
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

  // output_format - computed: true, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // output_location - computed: true, optional: true, required: false
  private _outputLocation?: string; 
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }
  public set outputLocation(value: string) {
    this._outputLocation = value;
  }
  public resetOutputLocation() {
    this._outputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation;
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

  // recipient_phone_number - computed: true, optional: true, required: false
  private _recipientPhoneNumber?: string[]; 
  public get recipientPhoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('recipient_phone_number'));
  }
  public set recipientPhoneNumber(value: string[]) {
    this._recipientPhoneNumber = value;
  }
  public resetRecipientPhoneNumber() {
    this._recipientPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientPhoneNumberInput() {
    return this._recipientPhoneNumber;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultAlertHandlerRequiredActionsList(this, "required_actions", true);
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

  // script_class - computed: true, optional: true, required: false
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

  // sender_address - computed: true, optional: true, required: false
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

  // sender_phone_number - computed: true, optional: true, required: false
  private _senderPhoneNumber?: string[]; 
  public get senderPhoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('sender_phone_number'));
  }
  public set senderPhoneNumber(value: string[]) {
    this._senderPhoneNumber = value;
  }
  public resetSenderPhoneNumber() {
    this._senderPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderPhoneNumberInput() {
    return this._senderPhoneNumber;
  }

  // server_host_name - computed: true, optional: true, required: false
  private _serverHostName?: string; 
  public get serverHostName() {
    return this.getStringAttribute('server_host_name');
  }
  public set serverHostName(value: string) {
    this._serverHostName = value;
  }
  public resetServerHostName() {
    this._serverHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostNameInput() {
    return this._serverHostName;
  }

  // server_port - computed: true, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // twilio_account_sid - computed: true, optional: true, required: false
  private _twilioAccountSid?: string; 
  public get twilioAccountSid() {
    return this.getStringAttribute('twilio_account_sid');
  }
  public set twilioAccountSid(value: string) {
    this._twilioAccountSid = value;
  }
  public resetTwilioAccountSid() {
    this._twilioAccountSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioAccountSidInput() {
    return this._twilioAccountSid;
  }

  // twilio_auth_token - computed: true, optional: true, required: false
  private _twilioAuthToken?: string; 
  public get twilioAuthToken() {
    return this.getStringAttribute('twilio_auth_token');
  }
  public set twilioAuthToken(value: string) {
    this._twilioAuthToken = value;
  }
  public resetTwilioAuthToken() {
    this._twilioAuthToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioAuthTokenInput() {
    return this._twilioAuthToken;
  }

  // twilio_auth_token_passphrase_provider - computed: true, optional: true, required: false
  private _twilioAuthTokenPassphraseProvider?: string; 
  public get twilioAuthTokenPassphraseProvider() {
    return this.getStringAttribute('twilio_auth_token_passphrase_provider');
  }
  public set twilioAuthTokenPassphraseProvider(value: string) {
    this._twilioAuthTokenPassphraseProvider = value;
  }
  public resetTwilioAuthTokenPassphraseProvider() {
    this._twilioAuthTokenPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioAuthTokenPassphraseProviderInput() {
    return this._twilioAuthTokenPassphraseProvider;
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
      asynchronous: cdktf.booleanToTerraform(this._asynchronous),
      command: cdktf.stringToTerraform(this._command),
      command_timeout: cdktf.stringToTerraform(this._commandTimeout),
      community_name: cdktf.stringToTerraform(this._communityName),
      description: cdktf.stringToTerraform(this._description),
      disabled_alert_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledAlertType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enabled_alert_severity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledAlertSeverity),
      enabled_alert_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledAlertType),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      http_proxy_external_server: cdktf.stringToTerraform(this._httpProxyExternalServer),
      include_monitor_data_filter: cdktf.stringToTerraform(this._includeMonitorDataFilter),
      long_message_behavior: cdktf.stringToTerraform(this._longMessageBehavior),
      message_body: cdktf.stringToTerraform(this._messageBody),
      message_subject: cdktf.stringToTerraform(this._messageSubject),
      name: cdktf.stringToTerraform(this._name),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      output_location: cdktf.stringToTerraform(this._outputLocation),
      recipient_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipientAddress),
      recipient_phone_number: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipientPhoneNumber),
      script_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scriptArgument),
      script_class: cdktf.stringToTerraform(this._scriptClass),
      sender_address: cdktf.stringToTerraform(this._senderAddress),
      sender_phone_number: cdktf.listMapper(cdktf.stringToTerraform, false)(this._senderPhoneNumber),
      server_host_name: cdktf.stringToTerraform(this._serverHostName),
      server_port: cdktf.numberToTerraform(this._serverPort),
      twilio_account_sid: cdktf.stringToTerraform(this._twilioAccountSid),
      twilio_auth_token: cdktf.stringToTerraform(this._twilioAuthToken),
      twilio_auth_token_passphrase_provider: cdktf.stringToTerraform(this._twilioAuthTokenPassphraseProvider),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asynchronous: {
        value: cdktf.booleanToHclTerraform(this._asynchronous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_timeout: {
        value: cdktf.stringToHclTerraform(this._commandTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      community_name: {
        value: cdktf.stringToHclTerraform(this._communityName),
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
      disabled_alert_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledAlertType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_alert_severity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledAlertSeverity),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled_alert_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledAlertType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      http_proxy_external_server: {
        value: cdktf.stringToHclTerraform(this._httpProxyExternalServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_monitor_data_filter: {
        value: cdktf.stringToHclTerraform(this._includeMonitorDataFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_message_behavior: {
        value: cdktf.stringToHclTerraform(this._longMessageBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_body: {
        value: cdktf.stringToHclTerraform(this._messageBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_subject: {
        value: cdktf.stringToHclTerraform(this._messageSubject),
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
      output_format: {
        value: cdktf.stringToHclTerraform(this._outputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_location: {
        value: cdktf.stringToHclTerraform(this._outputLocation),
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
      recipient_phone_number: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipientPhoneNumber),
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
      sender_address: {
        value: cdktf.stringToHclTerraform(this._senderAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sender_phone_number: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._senderPhoneNumber),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_host_name: {
        value: cdktf.stringToHclTerraform(this._serverHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_port: {
        value: cdktf.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      twilio_account_sid: {
        value: cdktf.stringToHclTerraform(this._twilioAccountSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      twilio_auth_token: {
        value: cdktf.stringToHclTerraform(this._twilioAuthToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      twilio_auth_token_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._twilioAuthTokenPassphraseProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
