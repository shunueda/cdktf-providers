// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/sms_provider_twilio
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmsProviderTwilioConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/sms_provider_twilio#id SmsProviderTwilio#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sender number which is used to send the SMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/sms_provider_twilio#sender_number SmsProviderTwilio#sender_number}
  */
  readonly senderNumber: string;
  /**
  * Set the SMS provider as active after creating/updating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/sms_provider_twilio#set_active SmsProviderTwilio#set_active}
  */
  readonly setActive?: boolean | cdktf.IResolvable;
  /**
  * SID used to communicate with Twilio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/sms_provider_twilio#sid SmsProviderTwilio#sid}
  */
  readonly sid: string;
  /**
  * Token used to communicate with Twilio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/sms_provider_twilio#token SmsProviderTwilio#token}
  */
  readonly token: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/sms_provider_twilio zitadel_sms_provider_twilio}
*/
export class SmsProviderTwilio extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_sms_provider_twilio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmsProviderTwilio resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmsProviderTwilio to import
  * @param importFromId The id of the existing SmsProviderTwilio that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/sms_provider_twilio#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmsProviderTwilio to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_sms_provider_twilio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/sms_provider_twilio zitadel_sms_provider_twilio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmsProviderTwilioConfig
  */
  public constructor(scope: Construct, id: string, config: SmsProviderTwilioConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_sms_provider_twilio',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
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
    this._senderNumber = config.senderNumber;
    this._setActive = config.setActive;
    this._sid = config.sid;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sender_number - computed: false, optional: false, required: true
  private _senderNumber?: string; 
  public get senderNumber() {
    return this.getStringAttribute('sender_number');
  }
  public set senderNumber(value: string) {
    this._senderNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get senderNumberInput() {
    return this._senderNumber;
  }

  // set_active - computed: false, optional: true, required: false
  private _setActive?: boolean | cdktf.IResolvable; 
  public get setActive() {
    return this.getBooleanAttribute('set_active');
  }
  public set setActive(value: boolean | cdktf.IResolvable) {
    this._setActive = value;
  }
  public resetSetActive() {
    this._setActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setActiveInput() {
    return this._setActive;
  }

  // sid - computed: false, optional: false, required: true
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sender_number: cdktf.stringToTerraform(this._senderNumber),
      set_active: cdktf.booleanToTerraform(this._setActive),
      sid: cdktf.stringToTerraform(this._sid),
      token: cdktf.stringToTerraform(this._token),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sender_number: {
        value: cdktf.stringToHclTerraform(this._senderNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_active: {
        value: cdktf.booleanToHclTerraform(this._setActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sid: {
        value: cdktf.stringToHclTerraform(this._sid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
