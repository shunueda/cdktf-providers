// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_alpha_senders_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MessagingServicesAlphaSendersV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_alpha_senders_v1#alpha_sender MessagingServicesAlphaSendersV1#alpha_sender}
  */
  readonly alphaSender: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_alpha_senders_v1#id MessagingServicesAlphaSendersV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_alpha_senders_v1#service_sid MessagingServicesAlphaSendersV1#service_sid}
  */
  readonly serviceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_alpha_senders_v1 twilio_messaging_services_alpha_senders_v1}
*/
export class MessagingServicesAlphaSendersV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_messaging_services_alpha_senders_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MessagingServicesAlphaSendersV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MessagingServicesAlphaSendersV1 to import
  * @param importFromId The id of the existing MessagingServicesAlphaSendersV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_alpha_senders_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MessagingServicesAlphaSendersV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_messaging_services_alpha_senders_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/messaging_services_alpha_senders_v1 twilio_messaging_services_alpha_senders_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MessagingServicesAlphaSendersV1Config
  */
  public constructor(scope: Construct, id: string, config: MessagingServicesAlphaSendersV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_messaging_services_alpha_senders_v1',
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
    this._alphaSender = config.alphaSender;
    this._id = config.id;
    this._serviceSid = config.serviceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alpha_sender - computed: false, optional: false, required: true
  private _alphaSender?: string; 
  public get alphaSender() {
    return this.getStringAttribute('alpha_sender');
  }
  public set alphaSender(value: string) {
    this._alphaSender = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alphaSenderInput() {
    return this._alphaSender;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alpha_sender: cdktf.stringToTerraform(this._alphaSender),
      id: cdktf.stringToTerraform(this._id),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alpha_sender: {
        value: cdktf.stringToHclTerraform(this._alphaSender),
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
