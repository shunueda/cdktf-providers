// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_entity_assignments_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrusthubCustomerProfilesEntityAssignmentsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_entity_assignments_v1#customer_profile_sid TrusthubCustomerProfilesEntityAssignmentsV1#customer_profile_sid}
  */
  readonly customerProfileSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_entity_assignments_v1#id TrusthubCustomerProfilesEntityAssignmentsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_entity_assignments_v1#object_sid TrusthubCustomerProfilesEntityAssignmentsV1#object_sid}
  */
  readonly objectSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_entity_assignments_v1 twilio_trusthub_customer_profiles_entity_assignments_v1}
*/
export class TrusthubCustomerProfilesEntityAssignmentsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_trusthub_customer_profiles_entity_assignments_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrusthubCustomerProfilesEntityAssignmentsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrusthubCustomerProfilesEntityAssignmentsV1 to import
  * @param importFromId The id of the existing TrusthubCustomerProfilesEntityAssignmentsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_entity_assignments_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrusthubCustomerProfilesEntityAssignmentsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_trusthub_customer_profiles_entity_assignments_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_entity_assignments_v1 twilio_trusthub_customer_profiles_entity_assignments_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrusthubCustomerProfilesEntityAssignmentsV1Config
  */
  public constructor(scope: Construct, id: string, config: TrusthubCustomerProfilesEntityAssignmentsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_trusthub_customer_profiles_entity_assignments_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customerProfileSid = config.customerProfileSid;
    this._id = config.id;
    this._objectSid = config.objectSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // object_sid - computed: false, optional: false, required: true
  private _objectSid?: string; 
  public get objectSid() {
    return this.getStringAttribute('object_sid');
  }
  public set objectSid(value: string) {
    this._objectSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSidInput() {
    return this._objectSid;
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
      customer_profile_sid: cdktf.stringToTerraform(this._customerProfileSid),
      id: cdktf.stringToTerraform(this._id),
      object_sid: cdktf.stringToTerraform(this._objectSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      object_sid: {
        value: cdktf.stringToHclTerraform(this._objectSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
