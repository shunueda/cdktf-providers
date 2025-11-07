// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_phone_numbers_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxyServicesPhoneNumbersV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_phone_numbers_v1#id ProxyServicesPhoneNumbersV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_phone_numbers_v1#is_reserved ProxyServicesPhoneNumbersV1#is_reserved}
  */
  readonly isReserved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_phone_numbers_v1#phone_number ProxyServicesPhoneNumbersV1#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_phone_numbers_v1#service_sid ProxyServicesPhoneNumbersV1#service_sid}
  */
  readonly serviceSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_phone_numbers_v1#sid ProxyServicesPhoneNumbersV1#sid}
  */
  readonly sid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_phone_numbers_v1 twilio_proxy_services_phone_numbers_v1}
*/
export class ProxyServicesPhoneNumbersV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_proxy_services_phone_numbers_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProxyServicesPhoneNumbersV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProxyServicesPhoneNumbersV1 to import
  * @param importFromId The id of the existing ProxyServicesPhoneNumbersV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_phone_numbers_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProxyServicesPhoneNumbersV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_proxy_services_phone_numbers_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/proxy_services_phone_numbers_v1 twilio_proxy_services_phone_numbers_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxyServicesPhoneNumbersV1Config
  */
  public constructor(scope: Construct, id: string, config: ProxyServicesPhoneNumbersV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_proxy_services_phone_numbers_v1',
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
    this._id = config.id;
    this._isReserved = config.isReserved;
    this._phoneNumber = config.phoneNumber;
    this._serviceSid = config.serviceSid;
    this._sid = config.sid;
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

  // is_reserved - computed: true, optional: true, required: false
  private _isReserved?: boolean | cdktf.IResolvable; 
  public get isReserved() {
    return this.getBooleanAttribute('is_reserved');
  }
  public set isReserved(value: boolean | cdktf.IResolvable) {
    this._isReserved = value;
  }
  public resetIsReserved() {
    this._isReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReservedInput() {
    return this._isReserved;
  }

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // service_sid - computed: false, optional: false, required: true
  private _serviceSid?: string; 
  public get serviceSid() {
    return this.getStringAttribute('service_sid');
  }
  public set serviceSid(value: string) {
    this._serviceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSidInput() {
    return this._serviceSid;
  }

  // sid - computed: true, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_reserved: cdktf.booleanToTerraform(this._isReserved),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
      sid: cdktf.stringToTerraform(this._sid),
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
      is_reserved: {
        value: cdktf.booleanToHclTerraform(this._isReserved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_sid: {
        value: cdktf.stringToHclTerraform(this._serviceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sid: {
        value: cdktf.stringToHclTerraform(this._sid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
