// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_messaging_configurations_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifyServicesMessagingConfigurationsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_messaging_configurations_v2#country VerifyServicesMessagingConfigurationsV2#country}
  */
  readonly country: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_messaging_configurations_v2#id VerifyServicesMessagingConfigurationsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_messaging_configurations_v2#messaging_service_sid VerifyServicesMessagingConfigurationsV2#messaging_service_sid}
  */
  readonly messagingServiceSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_messaging_configurations_v2#service_sid VerifyServicesMessagingConfigurationsV2#service_sid}
  */
  readonly serviceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_messaging_configurations_v2 twilio_verify_services_messaging_configurations_v2}
*/
export class VerifyServicesMessagingConfigurationsV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_verify_services_messaging_configurations_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifyServicesMessagingConfigurationsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifyServicesMessagingConfigurationsV2 to import
  * @param importFromId The id of the existing VerifyServicesMessagingConfigurationsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_messaging_configurations_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifyServicesMessagingConfigurationsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_verify_services_messaging_configurations_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/verify_services_messaging_configurations_v2 twilio_verify_services_messaging_configurations_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifyServicesMessagingConfigurationsV2Config
  */
  public constructor(scope: Construct, id: string, config: VerifyServicesMessagingConfigurationsV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_verify_services_messaging_configurations_v2',
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
    this._country = config.country;
    this._id = config.id;
    this._messagingServiceSid = config.messagingServiceSid;
    this._serviceSid = config.serviceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
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

  // messaging_service_sid - computed: false, optional: false, required: true
  private _messagingServiceSid?: string; 
  public get messagingServiceSid() {
    return this.getStringAttribute('messaging_service_sid');
  }
  public set messagingServiceSid(value: string) {
    this._messagingServiceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingServiceSidInput() {
    return this._messagingServiceSid;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      country: cdktf.stringToTerraform(this._country),
      id: cdktf.stringToTerraform(this._id),
      messaging_service_sid: cdktf.stringToTerraform(this._messagingServiceSid),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      country: {
        value: cdktf.stringToHclTerraform(this._country),
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
      messaging_service_sid: {
        value: cdktf.stringToHclTerraform(this._messagingServiceSid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
