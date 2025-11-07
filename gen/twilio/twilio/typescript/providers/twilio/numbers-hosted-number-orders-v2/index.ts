// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NumbersHostedNumberOrdersV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#account_sid NumbersHostedNumberOrdersV2#account_sid}
  */
  readonly accountSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#address_sid NumbersHostedNumberOrdersV2#address_sid}
  */
  readonly addressSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#cc_emails NumbersHostedNumberOrdersV2#cc_emails}
  */
  readonly ccEmails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#contact_phone_number NumbersHostedNumberOrdersV2#contact_phone_number}
  */
  readonly contactPhoneNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#contact_title NumbersHostedNumberOrdersV2#contact_title}
  */
  readonly contactTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#email NumbersHostedNumberOrdersV2#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#friendly_name NumbersHostedNumberOrdersV2#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#id NumbersHostedNumberOrdersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#phone_number NumbersHostedNumberOrdersV2#phone_number}
  */
  readonly phoneNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#sms_application_sid NumbersHostedNumberOrdersV2#sms_application_sid}
  */
  readonly smsApplicationSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#sms_capability NumbersHostedNumberOrdersV2#sms_capability}
  */
  readonly smsCapability?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#sms_fallback_method NumbersHostedNumberOrdersV2#sms_fallback_method}
  */
  readonly smsFallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#sms_fallback_url NumbersHostedNumberOrdersV2#sms_fallback_url}
  */
  readonly smsFallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#sms_method NumbersHostedNumberOrdersV2#sms_method}
  */
  readonly smsMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#sms_url NumbersHostedNumberOrdersV2#sms_url}
  */
  readonly smsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#status_callback_method NumbersHostedNumberOrdersV2#status_callback_method}
  */
  readonly statusCallbackMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#status_callback_url NumbersHostedNumberOrdersV2#status_callback_url}
  */
  readonly statusCallbackUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2 twilio_numbers_hosted_number_orders_v2}
*/
export class NumbersHostedNumberOrdersV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_numbers_hosted_number_orders_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NumbersHostedNumberOrdersV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NumbersHostedNumberOrdersV2 to import
  * @param importFromId The id of the existing NumbersHostedNumberOrdersV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NumbersHostedNumberOrdersV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_numbers_hosted_number_orders_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_orders_v2 twilio_numbers_hosted_number_orders_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NumbersHostedNumberOrdersV2Config
  */
  public constructor(scope: Construct, id: string, config: NumbersHostedNumberOrdersV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_numbers_hosted_number_orders_v2',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountSid = config.accountSid;
    this._addressSid = config.addressSid;
    this._ccEmails = config.ccEmails;
    this._contactPhoneNumber = config.contactPhoneNumber;
    this._contactTitle = config.contactTitle;
    this._email = config.email;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._phoneNumber = config.phoneNumber;
    this._smsApplicationSid = config.smsApplicationSid;
    this._smsCapability = config.smsCapability;
    this._smsFallbackMethod = config.smsFallbackMethod;
    this._smsFallbackUrl = config.smsFallbackUrl;
    this._smsMethod = config.smsMethod;
    this._smsUrl = config.smsUrl;
    this._statusCallbackMethod = config.statusCallbackMethod;
    this._statusCallbackUrl = config.statusCallbackUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_sid - computed: true, optional: true, required: false
  private _accountSid?: string; 
  public get accountSid() {
    return this.getStringAttribute('account_sid');
  }
  public set accountSid(value: string) {
    this._accountSid = value;
  }
  public resetAccountSid() {
    this._accountSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSidInput() {
    return this._accountSid;
  }

  // address_sid - computed: false, optional: false, required: true
  private _addressSid?: string; 
  public get addressSid() {
    return this.getStringAttribute('address_sid');
  }
  public set addressSid(value: string) {
    this._addressSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSidInput() {
    return this._addressSid;
  }

  // cc_emails - computed: true, optional: true, required: false
  private _ccEmails?: string[]; 
  public get ccEmails() {
    return this.getListAttribute('cc_emails');
  }
  public set ccEmails(value: string[]) {
    this._ccEmails = value;
  }
  public resetCcEmails() {
    this._ccEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccEmailsInput() {
    return this._ccEmails;
  }

  // contact_phone_number - computed: false, optional: false, required: true
  private _contactPhoneNumber?: string; 
  public get contactPhoneNumber() {
    return this.getStringAttribute('contact_phone_number');
  }
  public set contactPhoneNumber(value: string) {
    this._contactPhoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPhoneNumberInput() {
    return this._contactPhoneNumber;
  }

  // contact_title - computed: true, optional: true, required: false
  private _contactTitle?: string; 
  public get contactTitle() {
    return this.getStringAttribute('contact_title');
  }
  public set contactTitle(value: string) {
    this._contactTitle = value;
  }
  public resetContactTitle() {
    this._contactTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTitleInput() {
    return this._contactTitle;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // sms_application_sid - computed: true, optional: true, required: false
  private _smsApplicationSid?: string; 
  public get smsApplicationSid() {
    return this.getStringAttribute('sms_application_sid');
  }
  public set smsApplicationSid(value: string) {
    this._smsApplicationSid = value;
  }
  public resetSmsApplicationSid() {
    this._smsApplicationSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsApplicationSidInput() {
    return this._smsApplicationSid;
  }

  // sms_capability - computed: true, optional: true, required: false
  private _smsCapability?: boolean | cdktf.IResolvable; 
  public get smsCapability() {
    return this.getBooleanAttribute('sms_capability');
  }
  public set smsCapability(value: boolean | cdktf.IResolvable) {
    this._smsCapability = value;
  }
  public resetSmsCapability() {
    this._smsCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCapabilityInput() {
    return this._smsCapability;
  }

  // sms_fallback_method - computed: true, optional: true, required: false
  private _smsFallbackMethod?: string; 
  public get smsFallbackMethod() {
    return this.getStringAttribute('sms_fallback_method');
  }
  public set smsFallbackMethod(value: string) {
    this._smsFallbackMethod = value;
  }
  public resetSmsFallbackMethod() {
    this._smsFallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsFallbackMethodInput() {
    return this._smsFallbackMethod;
  }

  // sms_fallback_url - computed: true, optional: true, required: false
  private _smsFallbackUrl?: string; 
  public get smsFallbackUrl() {
    return this.getStringAttribute('sms_fallback_url');
  }
  public set smsFallbackUrl(value: string) {
    this._smsFallbackUrl = value;
  }
  public resetSmsFallbackUrl() {
    this._smsFallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsFallbackUrlInput() {
    return this._smsFallbackUrl;
  }

  // sms_method - computed: true, optional: true, required: false
  private _smsMethod?: string; 
  public get smsMethod() {
    return this.getStringAttribute('sms_method');
  }
  public set smsMethod(value: string) {
    this._smsMethod = value;
  }
  public resetSmsMethod() {
    this._smsMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsMethodInput() {
    return this._smsMethod;
  }

  // sms_url - computed: true, optional: true, required: false
  private _smsUrl?: string; 
  public get smsUrl() {
    return this.getStringAttribute('sms_url');
  }
  public set smsUrl(value: string) {
    this._smsUrl = value;
  }
  public resetSmsUrl() {
    this._smsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsUrlInput() {
    return this._smsUrl;
  }

  // status_callback_method - computed: true, optional: true, required: false
  private _statusCallbackMethod?: string; 
  public get statusCallbackMethod() {
    return this.getStringAttribute('status_callback_method');
  }
  public set statusCallbackMethod(value: string) {
    this._statusCallbackMethod = value;
  }
  public resetStatusCallbackMethod() {
    this._statusCallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCallbackMethodInput() {
    return this._statusCallbackMethod;
  }

  // status_callback_url - computed: true, optional: true, required: false
  private _statusCallbackUrl?: string; 
  public get statusCallbackUrl() {
    return this.getStringAttribute('status_callback_url');
  }
  public set statusCallbackUrl(value: string) {
    this._statusCallbackUrl = value;
  }
  public resetStatusCallbackUrl() {
    this._statusCallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCallbackUrlInput() {
    return this._statusCallbackUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_sid: cdktf.stringToTerraform(this._accountSid),
      address_sid: cdktf.stringToTerraform(this._addressSid),
      cc_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ccEmails),
      contact_phone_number: cdktf.stringToTerraform(this._contactPhoneNumber),
      contact_title: cdktf.stringToTerraform(this._contactTitle),
      email: cdktf.stringToTerraform(this._email),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      sms_application_sid: cdktf.stringToTerraform(this._smsApplicationSid),
      sms_capability: cdktf.booleanToTerraform(this._smsCapability),
      sms_fallback_method: cdktf.stringToTerraform(this._smsFallbackMethod),
      sms_fallback_url: cdktf.stringToTerraform(this._smsFallbackUrl),
      sms_method: cdktf.stringToTerraform(this._smsMethod),
      sms_url: cdktf.stringToTerraform(this._smsUrl),
      status_callback_method: cdktf.stringToTerraform(this._statusCallbackMethod),
      status_callback_url: cdktf.stringToTerraform(this._statusCallbackUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_sid: {
        value: cdktf.stringToHclTerraform(this._accountSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_sid: {
        value: cdktf.stringToHclTerraform(this._addressSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cc_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ccEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      contact_phone_number: {
        value: cdktf.stringToHclTerraform(this._contactPhoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_title: {
        value: cdktf.stringToHclTerraform(this._contactTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_application_sid: {
        value: cdktf.stringToHclTerraform(this._smsApplicationSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_capability: {
        value: cdktf.booleanToHclTerraform(this._smsCapability),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sms_fallback_method: {
        value: cdktf.stringToHclTerraform(this._smsFallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_fallback_url: {
        value: cdktf.stringToHclTerraform(this._smsFallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_method: {
        value: cdktf.stringToHclTerraform(this._smsMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_url: {
        value: cdktf.stringToHclTerraform(this._smsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_callback_method: {
        value: cdktf.stringToHclTerraform(this._statusCallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_callback_url: {
        value: cdktf.stringToHclTerraform(this._statusCallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
