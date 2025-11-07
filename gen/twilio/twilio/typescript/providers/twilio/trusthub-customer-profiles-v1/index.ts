// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrusthubCustomerProfilesV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_v1#email TrusthubCustomerProfilesV1#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_v1#friendly_name TrusthubCustomerProfilesV1#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_v1#id TrusthubCustomerProfilesV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_v1#policy_sid TrusthubCustomerProfilesV1#policy_sid}
  */
  readonly policySid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_v1#status TrusthubCustomerProfilesV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_v1#status_callback TrusthubCustomerProfilesV1#status_callback}
  */
  readonly statusCallback?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_v1 twilio_trusthub_customer_profiles_v1}
*/
export class TrusthubCustomerProfilesV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_trusthub_customer_profiles_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrusthubCustomerProfilesV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrusthubCustomerProfilesV1 to import
  * @param importFromId The id of the existing TrusthubCustomerProfilesV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrusthubCustomerProfilesV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_trusthub_customer_profiles_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trusthub_customer_profiles_v1 twilio_trusthub_customer_profiles_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrusthubCustomerProfilesV1Config
  */
  public constructor(scope: Construct, id: string, config: TrusthubCustomerProfilesV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_trusthub_customer_profiles_v1',
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
    this._email = config.email;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._policySid = config.policySid;
    this._status = config.status;
    this._statusCallback = config.statusCallback;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
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

  // policy_sid - computed: false, optional: false, required: true
  private _policySid?: string; 
  public get policySid() {
    return this.getStringAttribute('policy_sid');
  }
  public set policySid(value: string) {
    this._policySid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySidInput() {
    return this._policySid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_callback - computed: true, optional: true, required: false
  private _statusCallback?: string; 
  public get statusCallback() {
    return this.getStringAttribute('status_callback');
  }
  public set statusCallback(value: string) {
    this._statusCallback = value;
  }
  public resetStatusCallback() {
    this._statusCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCallbackInput() {
    return this._statusCallback;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      policy_sid: cdktf.stringToTerraform(this._policySid),
      status: cdktf.stringToTerraform(this._status),
      status_callback: cdktf.stringToTerraform(this._statusCallback),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      policy_sid: {
        value: cdktf.stringToHclTerraform(this._policySid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_callback: {
        value: cdktf.stringToHclTerraform(this._statusCallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
