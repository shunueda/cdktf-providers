// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OtpDeliveryMechanismConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for this OTP Delivery Mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#description OtpDeliveryMechanism#description}
  */
  readonly description?: string;
  /**
  * The name or OID of the attribute that holds the email address to which the message should be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#email_address_attribute_type OtpDeliveryMechanism#email_address_attribute_type}
  */
  readonly emailAddressAttributeType?: string;
  /**
  * The name of the JSON field whose value is the email address to which the message should be sent. The email address must be contained in a top-level field whose value is a single string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#email_address_json_field OtpDeliveryMechanism#email_address_json_field}
  */
  readonly emailAddressJsonField?: string;
  /**
  * A JSON object filter that may be used to identify which email address value to use when sending the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#email_address_json_object_filter OtpDeliveryMechanism#email_address_json_object_filter}
  */
  readonly emailAddressJsonObjectFilter?: string;
  /**
  * Indicates whether this OTP Delivery Mechanism is enabled for use in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#enabled OtpDeliveryMechanism#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party OTP Delivery Mechanism. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#extension_argument OtpDeliveryMechanism#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party OTP Delivery Mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#extension_class OtpDeliveryMechanism#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * A reference to an HTTP proxy server that should be used for requests sent to the Twilio service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#http_proxy_external_server OtpDeliveryMechanism#http_proxy_external_server}
  */
  readonly httpProxyExternalServer?: string;
  /**
  * The subject to use for the e-mail message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#message_subject OtpDeliveryMechanism#message_subject}
  */
  readonly messageSubject?: string;
  /**
  * Any text that should appear in the message after the one-time password value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#message_text_after_otp OtpDeliveryMechanism#message_text_after_otp}
  */
  readonly messageTextAfterOtp?: string;
  /**
  * Any text that should appear in the message before the one-time password value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#message_text_before_otp OtpDeliveryMechanism#message_text_before_otp}
  */
  readonly messageTextBeforeOtp?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#name OtpDeliveryMechanism#name}
  */
  readonly name: string;
  /**
  * The name or OID of the attribute in the user's entry that holds the phone number to which the message should be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#phone_number_attribute_type OtpDeliveryMechanism#phone_number_attribute_type}
  */
  readonly phoneNumberAttributeType?: string;
  /**
  * The name of the JSON field whose value is the phone number to which the message should be sent. The phone number must be contained in a top-level field whose value is a single string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#phone_number_json_field OtpDeliveryMechanism#phone_number_json_field}
  */
  readonly phoneNumberJsonField?: string;
  /**
  * A JSON object filter that may be used to identify which phone number value to use when sending the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#phone_number_json_object_filter OtpDeliveryMechanism#phone_number_json_object_filter}
  */
  readonly phoneNumberJsonObjectFilter?: string;
  /**
  * The e-mail address to use as the sender for the one-time password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#sender_address OtpDeliveryMechanism#sender_address}
  */
  readonly senderAddress?: string;
  /**
  * The outgoing phone number to use for the messages. Values must be phone numbers you have obtained for use with your Twilio account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#sender_phone_number OtpDeliveryMechanism#sender_phone_number}
  */
  readonly senderPhoneNumber?: string[];
  /**
  * The unique identifier assigned to the Twilio account that will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#twilio_account_sid OtpDeliveryMechanism#twilio_account_sid}
  */
  readonly twilioAccountSid?: string;
  /**
  * The auth token for the Twilio account that will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#twilio_auth_token OtpDeliveryMechanism#twilio_auth_token}
  */
  readonly twilioAuthToken?: string;
  /**
  * The passphrase provider that may be used to obtain the auth token for the Twilio account that will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#twilio_auth_token_passphrase_provider OtpDeliveryMechanism#twilio_auth_token_passphrase_provider}
  */
  readonly twilioAuthTokenPassphraseProvider?: string;
  /**
  * The type of OTP Delivery Mechanism resource. Options are ['twilio', 'email', 'third-party']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#type OtpDeliveryMechanism#type}
  */
  readonly type: string;
}
export interface OtpDeliveryMechanismRequiredActions {
}

export function otpDeliveryMechanismRequiredActionsToTerraform(struct?: OtpDeliveryMechanismRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function otpDeliveryMechanismRequiredActionsToHclTerraform(struct?: OtpDeliveryMechanismRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OtpDeliveryMechanismRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OtpDeliveryMechanismRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtpDeliveryMechanismRequiredActions | undefined) {
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

export class OtpDeliveryMechanismRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): OtpDeliveryMechanismRequiredActionsOutputReference {
    return new OtpDeliveryMechanismRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism pingdirectory_otp_delivery_mechanism}
*/
export class OtpDeliveryMechanism extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_otp_delivery_mechanism";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OtpDeliveryMechanism resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OtpDeliveryMechanism to import
  * @param importFromId The id of the existing OtpDeliveryMechanism that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OtpDeliveryMechanism to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_otp_delivery_mechanism", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/otp_delivery_mechanism pingdirectory_otp_delivery_mechanism} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OtpDeliveryMechanismConfig
  */
  public constructor(scope: Construct, id: string, config: OtpDeliveryMechanismConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_otp_delivery_mechanism',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._emailAddressAttributeType = config.emailAddressAttributeType;
    this._emailAddressJsonField = config.emailAddressJsonField;
    this._emailAddressJsonObjectFilter = config.emailAddressJsonObjectFilter;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._httpProxyExternalServer = config.httpProxyExternalServer;
    this._messageSubject = config.messageSubject;
    this._messageTextAfterOtp = config.messageTextAfterOtp;
    this._messageTextBeforeOtp = config.messageTextBeforeOtp;
    this._name = config.name;
    this._phoneNumberAttributeType = config.phoneNumberAttributeType;
    this._phoneNumberJsonField = config.phoneNumberJsonField;
    this._phoneNumberJsonObjectFilter = config.phoneNumberJsonObjectFilter;
    this._senderAddress = config.senderAddress;
    this._senderPhoneNumber = config.senderPhoneNumber;
    this._twilioAccountSid = config.twilioAccountSid;
    this._twilioAuthToken = config.twilioAuthToken;
    this._twilioAuthTokenPassphraseProvider = config.twilioAuthTokenPassphraseProvider;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _emailAddressAttributeType?: string; 
  public get emailAddressAttributeType() {
    return this.getStringAttribute('email_address_attribute_type');
  }
  public set emailAddressAttributeType(value: string) {
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

  // http_proxy_external_server - computed: false, optional: true, required: false
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

  // message_text_after_otp - computed: false, optional: true, required: false
  private _messageTextAfterOtp?: string; 
  public get messageTextAfterOtp() {
    return this.getStringAttribute('message_text_after_otp');
  }
  public set messageTextAfterOtp(value: string) {
    this._messageTextAfterOtp = value;
  }
  public resetMessageTextAfterOtp() {
    this._messageTextAfterOtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTextAfterOtpInput() {
    return this._messageTextAfterOtp;
  }

  // message_text_before_otp - computed: false, optional: true, required: false
  private _messageTextBeforeOtp?: string; 
  public get messageTextBeforeOtp() {
    return this.getStringAttribute('message_text_before_otp');
  }
  public set messageTextBeforeOtp(value: string) {
    this._messageTextBeforeOtp = value;
  }
  public resetMessageTextBeforeOtp() {
    this._messageTextBeforeOtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTextBeforeOtpInput() {
    return this._messageTextBeforeOtp;
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

  // phone_number_attribute_type - computed: true, optional: true, required: false
  private _phoneNumberAttributeType?: string; 
  public get phoneNumberAttributeType() {
    return this.getStringAttribute('phone_number_attribute_type');
  }
  public set phoneNumberAttributeType(value: string) {
    this._phoneNumberAttributeType = value;
  }
  public resetPhoneNumberAttributeType() {
    this._phoneNumberAttributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberAttributeTypeInput() {
    return this._phoneNumberAttributeType;
  }

  // phone_number_json_field - computed: false, optional: true, required: false
  private _phoneNumberJsonField?: string; 
  public get phoneNumberJsonField() {
    return this.getStringAttribute('phone_number_json_field');
  }
  public set phoneNumberJsonField(value: string) {
    this._phoneNumberJsonField = value;
  }
  public resetPhoneNumberJsonField() {
    this._phoneNumberJsonField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberJsonFieldInput() {
    return this._phoneNumberJsonField;
  }

  // phone_number_json_object_filter - computed: false, optional: true, required: false
  private _phoneNumberJsonObjectFilter?: string; 
  public get phoneNumberJsonObjectFilter() {
    return this.getStringAttribute('phone_number_json_object_filter');
  }
  public set phoneNumberJsonObjectFilter(value: string) {
    this._phoneNumberJsonObjectFilter = value;
  }
  public resetPhoneNumberJsonObjectFilter() {
    this._phoneNumberJsonObjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberJsonObjectFilterInput() {
    return this._phoneNumberJsonObjectFilter;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new OtpDeliveryMechanismRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
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

  // twilio_account_sid - computed: false, optional: true, required: false
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

  // twilio_auth_token - computed: false, optional: true, required: false
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

  // twilio_auth_token_passphrase_provider - computed: false, optional: true, required: false
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
      description: cdktf.stringToTerraform(this._description),
      email_address_attribute_type: cdktf.stringToTerraform(this._emailAddressAttributeType),
      email_address_json_field: cdktf.stringToTerraform(this._emailAddressJsonField),
      email_address_json_object_filter: cdktf.stringToTerraform(this._emailAddressJsonObjectFilter),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      http_proxy_external_server: cdktf.stringToTerraform(this._httpProxyExternalServer),
      message_subject: cdktf.stringToTerraform(this._messageSubject),
      message_text_after_otp: cdktf.stringToTerraform(this._messageTextAfterOtp),
      message_text_before_otp: cdktf.stringToTerraform(this._messageTextBeforeOtp),
      name: cdktf.stringToTerraform(this._name),
      phone_number_attribute_type: cdktf.stringToTerraform(this._phoneNumberAttributeType),
      phone_number_json_field: cdktf.stringToTerraform(this._phoneNumberJsonField),
      phone_number_json_object_filter: cdktf.stringToTerraform(this._phoneNumberJsonObjectFilter),
      sender_address: cdktf.stringToTerraform(this._senderAddress),
      sender_phone_number: cdktf.listMapper(cdktf.stringToTerraform, false)(this._senderPhoneNumber),
      twilio_account_sid: cdktf.stringToTerraform(this._twilioAccountSid),
      twilio_auth_token: cdktf.stringToTerraform(this._twilioAuthToken),
      twilio_auth_token_passphrase_provider: cdktf.stringToTerraform(this._twilioAuthTokenPassphraseProvider),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_address_attribute_type: {
        value: cdktf.stringToHclTerraform(this._emailAddressAttributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      http_proxy_external_server: {
        value: cdktf.stringToHclTerraform(this._httpProxyExternalServer),
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
      message_text_after_otp: {
        value: cdktf.stringToHclTerraform(this._messageTextAfterOtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_text_before_otp: {
        value: cdktf.stringToHclTerraform(this._messageTextBeforeOtp),
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
      phone_number_attribute_type: {
        value: cdktf.stringToHclTerraform(this._phoneNumberAttributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_number_json_field: {
        value: cdktf.stringToHclTerraform(this._phoneNumberJsonField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_number_json_object_filter: {
        value: cdktf.stringToHclTerraform(this._phoneNumberJsonObjectFilter),
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
