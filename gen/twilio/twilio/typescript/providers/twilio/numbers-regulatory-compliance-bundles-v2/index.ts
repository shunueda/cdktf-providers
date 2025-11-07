// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NumbersRegulatoryComplianceBundlesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2#email NumbersRegulatoryComplianceBundlesV2#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2#end_user_type NumbersRegulatoryComplianceBundlesV2#end_user_type}
  */
  readonly endUserType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2#friendly_name NumbersRegulatoryComplianceBundlesV2#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2#id NumbersRegulatoryComplianceBundlesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2#iso_country NumbersRegulatoryComplianceBundlesV2#iso_country}
  */
  readonly isoCountry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2#number_type NumbersRegulatoryComplianceBundlesV2#number_type}
  */
  readonly numberType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2#regulation_sid NumbersRegulatoryComplianceBundlesV2#regulation_sid}
  */
  readonly regulationSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2#status NumbersRegulatoryComplianceBundlesV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2#status_callback NumbersRegulatoryComplianceBundlesV2#status_callback}
  */
  readonly statusCallback?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2 twilio_numbers_regulatory_compliance_bundles_v2}
*/
export class NumbersRegulatoryComplianceBundlesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_numbers_regulatory_compliance_bundles_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NumbersRegulatoryComplianceBundlesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NumbersRegulatoryComplianceBundlesV2 to import
  * @param importFromId The id of the existing NumbersRegulatoryComplianceBundlesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NumbersRegulatoryComplianceBundlesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_numbers_regulatory_compliance_bundles_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_v2 twilio_numbers_regulatory_compliance_bundles_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NumbersRegulatoryComplianceBundlesV2Config
  */
  public constructor(scope: Construct, id: string, config: NumbersRegulatoryComplianceBundlesV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_numbers_regulatory_compliance_bundles_v2',
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
    this._endUserType = config.endUserType;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._isoCountry = config.isoCountry;
    this._numberType = config.numberType;
    this._regulationSid = config.regulationSid;
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

  // end_user_type - computed: true, optional: true, required: false
  private _endUserType?: string; 
  public get endUserType() {
    return this.getStringAttribute('end_user_type');
  }
  public set endUserType(value: string) {
    this._endUserType = value;
  }
  public resetEndUserType() {
    this._endUserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserTypeInput() {
    return this._endUserType;
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

  // iso_country - computed: true, optional: true, required: false
  private _isoCountry?: string; 
  public get isoCountry() {
    return this.getStringAttribute('iso_country');
  }
  public set isoCountry(value: string) {
    this._isoCountry = value;
  }
  public resetIsoCountry() {
    this._isoCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoCountryInput() {
    return this._isoCountry;
  }

  // number_type - computed: true, optional: true, required: false
  private _numberType?: string; 
  public get numberType() {
    return this.getStringAttribute('number_type');
  }
  public set numberType(value: string) {
    this._numberType = value;
  }
  public resetNumberType() {
    this._numberType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberTypeInput() {
    return this._numberType;
  }

  // regulation_sid - computed: true, optional: true, required: false
  private _regulationSid?: string; 
  public get regulationSid() {
    return this.getStringAttribute('regulation_sid');
  }
  public set regulationSid(value: string) {
    this._regulationSid = value;
  }
  public resetRegulationSid() {
    this._regulationSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regulationSidInput() {
    return this._regulationSid;
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
      end_user_type: cdktf.stringToTerraform(this._endUserType),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      iso_country: cdktf.stringToTerraform(this._isoCountry),
      number_type: cdktf.stringToTerraform(this._numberType),
      regulation_sid: cdktf.stringToTerraform(this._regulationSid),
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
      end_user_type: {
        value: cdktf.stringToHclTerraform(this._endUserType),
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
      iso_country: {
        value: cdktf.stringToHclTerraform(this._isoCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_type: {
        value: cdktf.stringToHclTerraform(this._numberType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regulation_sid: {
        value: cdktf.stringToHclTerraform(this._regulationSid),
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
