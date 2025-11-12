// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_phone_numbers_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrunkingTrunksPhoneNumbersV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_phone_numbers_v1#id TrunkingTrunksPhoneNumbersV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_phone_numbers_v1#phone_number_sid TrunkingTrunksPhoneNumbersV1#phone_number_sid}
  */
  readonly phoneNumberSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_phone_numbers_v1#trunk_sid TrunkingTrunksPhoneNumbersV1#trunk_sid}
  */
  readonly trunkSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_phone_numbers_v1 twilio_trunking_trunks_phone_numbers_v1}
*/
export class TrunkingTrunksPhoneNumbersV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_trunking_trunks_phone_numbers_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrunkingTrunksPhoneNumbersV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrunkingTrunksPhoneNumbersV1 to import
  * @param importFromId The id of the existing TrunkingTrunksPhoneNumbersV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_phone_numbers_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrunkingTrunksPhoneNumbersV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_trunking_trunks_phone_numbers_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/trunking_trunks_phone_numbers_v1 twilio_trunking_trunks_phone_numbers_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrunkingTrunksPhoneNumbersV1Config
  */
  public constructor(scope: Construct, id: string, config: TrunkingTrunksPhoneNumbersV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_trunking_trunks_phone_numbers_v1',
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
    this._id = config.id;
    this._phoneNumberSid = config.phoneNumberSid;
    this._trunkSid = config.trunkSid;
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

  // phone_number_sid - computed: false, optional: false, required: true
  private _phoneNumberSid?: string; 
  public get phoneNumberSid() {
    return this.getStringAttribute('phone_number_sid');
  }
  public set phoneNumberSid(value: string) {
    this._phoneNumberSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberSidInput() {
    return this._phoneNumberSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // trunk_sid - computed: false, optional: false, required: true
  private _trunkSid?: string; 
  public get trunkSid() {
    return this.getStringAttribute('trunk_sid');
  }
  public set trunkSid(value: string) {
    this._trunkSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkSidInput() {
    return this._trunkSid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      phone_number_sid: cdktf.stringToTerraform(this._phoneNumberSid),
      trunk_sid: cdktf.stringToTerraform(this._trunkSid),
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
      phone_number_sid: {
        value: cdktf.stringToHclTerraform(this._phoneNumberSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_sid: {
        value: cdktf.stringToHclTerraform(this._trunkSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
