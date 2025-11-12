// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/otp_delivery_mechanism
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryOtpDeliveryMechanismConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/otp_delivery_mechanism#name DataPingdirectoryOtpDeliveryMechanism#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/otp_delivery_mechanism pingdirectory_otp_delivery_mechanism}
*/
export class DataPingdirectoryOtpDeliveryMechanism extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_otp_delivery_mechanism";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryOtpDeliveryMechanism resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryOtpDeliveryMechanism to import
  * @param importFromId The id of the existing DataPingdirectoryOtpDeliveryMechanism that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/otp_delivery_mechanism#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryOtpDeliveryMechanism to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_otp_delivery_mechanism", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/otp_delivery_mechanism pingdirectory_otp_delivery_mechanism} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryOtpDeliveryMechanismConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryOtpDeliveryMechanismConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_otp_delivery_mechanism',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email_address_attribute_type - computed: true, optional: false, required: false
  public get emailAddressAttributeType() {
    return this.getStringAttribute('email_address_attribute_type');
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

  // http_proxy_external_server - computed: true, optional: false, required: false
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_subject - computed: true, optional: false, required: false
  public get messageSubject() {
    return this.getStringAttribute('message_subject');
  }

  // message_text_after_otp - computed: true, optional: false, required: false
  public get messageTextAfterOtp() {
    return this.getStringAttribute('message_text_after_otp');
  }

  // message_text_before_otp - computed: true, optional: false, required: false
  public get messageTextBeforeOtp() {
    return this.getStringAttribute('message_text_before_otp');
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

  // phone_number_attribute_type - computed: true, optional: false, required: false
  public get phoneNumberAttributeType() {
    return this.getStringAttribute('phone_number_attribute_type');
  }

  // phone_number_json_field - computed: true, optional: false, required: false
  public get phoneNumberJsonField() {
    return this.getStringAttribute('phone_number_json_field');
  }

  // phone_number_json_object_filter - computed: true, optional: false, required: false
  public get phoneNumberJsonObjectFilter() {
    return this.getStringAttribute('phone_number_json_object_filter');
  }

  // sender_address - computed: true, optional: false, required: false
  public get senderAddress() {
    return this.getStringAttribute('sender_address');
  }

  // sender_phone_number - computed: true, optional: false, required: false
  public get senderPhoneNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('sender_phone_number'));
  }

  // twilio_account_sid - computed: true, optional: false, required: false
  public get twilioAccountSid() {
    return this.getStringAttribute('twilio_account_sid');
  }

  // twilio_auth_token - computed: true, optional: false, required: false
  public get twilioAuthToken() {
    return this.getStringAttribute('twilio_auth_token');
  }

  // twilio_auth_token_passphrase_provider - computed: true, optional: false, required: false
  public get twilioAuthTokenPassphraseProvider() {
    return this.getStringAttribute('twilio_auth_token_passphrase_provider');
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
