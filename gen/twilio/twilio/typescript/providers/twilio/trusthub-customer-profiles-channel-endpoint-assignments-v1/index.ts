// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_channel_endpoint_assignments_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrusthubCustomerProfilesChannelEndpointAssignmentsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_channel_endpoint_assignments_v1#channel_endpoint_sid TrusthubCustomerProfilesChannelEndpointAssignmentsV1#channel_endpoint_sid}
  */
  readonly channelEndpointSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_channel_endpoint_assignments_v1#channel_endpoint_type TrusthubCustomerProfilesChannelEndpointAssignmentsV1#channel_endpoint_type}
  */
  readonly channelEndpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_channel_endpoint_assignments_v1#customer_profile_sid TrusthubCustomerProfilesChannelEndpointAssignmentsV1#customer_profile_sid}
  */
  readonly customerProfileSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_channel_endpoint_assignments_v1#id TrusthubCustomerProfilesChannelEndpointAssignmentsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_channel_endpoint_assignments_v1 twilio_trusthub_customer_profiles_channel_endpoint_assignments_v1}
*/
export class TrusthubCustomerProfilesChannelEndpointAssignmentsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_trusthub_customer_profiles_channel_endpoint_assignments_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrusthubCustomerProfilesChannelEndpointAssignmentsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrusthubCustomerProfilesChannelEndpointAssignmentsV1 to import
  * @param importFromId The id of the existing TrusthubCustomerProfilesChannelEndpointAssignmentsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_channel_endpoint_assignments_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrusthubCustomerProfilesChannelEndpointAssignmentsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_trusthub_customer_profiles_channel_endpoint_assignments_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_channel_endpoint_assignments_v1 twilio_trusthub_customer_profiles_channel_endpoint_assignments_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrusthubCustomerProfilesChannelEndpointAssignmentsV1Config
  */
  public constructor(scope: Construct, id: string, config: TrusthubCustomerProfilesChannelEndpointAssignmentsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_trusthub_customer_profiles_channel_endpoint_assignments_v1',
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
    this._channelEndpointSid = config.channelEndpointSid;
    this._channelEndpointType = config.channelEndpointType;
    this._customerProfileSid = config.customerProfileSid;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_endpoint_sid - computed: false, optional: false, required: true
  private _channelEndpointSid?: string; 
  public get channelEndpointSid() {
    return this.getStringAttribute('channel_endpoint_sid');
  }
  public set channelEndpointSid(value: string) {
    this._channelEndpointSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelEndpointSidInput() {
    return this._channelEndpointSid;
  }

  // channel_endpoint_type - computed: false, optional: false, required: true
  private _channelEndpointType?: string; 
  public get channelEndpointType() {
    return this.getStringAttribute('channel_endpoint_type');
  }
  public set channelEndpointType(value: string) {
    this._channelEndpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelEndpointTypeInput() {
    return this._channelEndpointType;
  }

  // customer_profile_sid - computed: false, optional: false, required: true
  private _customerProfileSid?: string; 
  public get customerProfileSid() {
    return this.getStringAttribute('customer_profile_sid');
  }
  public set customerProfileSid(value: string) {
    this._customerProfileSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerProfileSidInput() {
    return this._customerProfileSid;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_endpoint_sid: cdktf.stringToTerraform(this._channelEndpointSid),
      channel_endpoint_type: cdktf.stringToTerraform(this._channelEndpointType),
      customer_profile_sid: cdktf.stringToTerraform(this._customerProfileSid),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_endpoint_sid: {
        value: cdktf.stringToHclTerraform(this._channelEndpointSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_endpoint_type: {
        value: cdktf.stringToHclTerraform(this._channelEndpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_profile_sid: {
        value: cdktf.stringToHclTerraform(this._customerProfileSid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
