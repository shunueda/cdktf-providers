// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_item_assignments_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NumbersRegulatoryComplianceBundlesItemAssignmentsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_item_assignments_v2#bundle_sid NumbersRegulatoryComplianceBundlesItemAssignmentsV2#bundle_sid}
  */
  readonly bundleSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_item_assignments_v2#id NumbersRegulatoryComplianceBundlesItemAssignmentsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_item_assignments_v2#object_sid NumbersRegulatoryComplianceBundlesItemAssignmentsV2#object_sid}
  */
  readonly objectSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_item_assignments_v2 twilio_numbers_regulatory_compliance_bundles_item_assignments_v2}
*/
export class NumbersRegulatoryComplianceBundlesItemAssignmentsV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_numbers_regulatory_compliance_bundles_item_assignments_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NumbersRegulatoryComplianceBundlesItemAssignmentsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NumbersRegulatoryComplianceBundlesItemAssignmentsV2 to import
  * @param importFromId The id of the existing NumbersRegulatoryComplianceBundlesItemAssignmentsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_item_assignments_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NumbersRegulatoryComplianceBundlesItemAssignmentsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_numbers_regulatory_compliance_bundles_item_assignments_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_regulatory_compliance_bundles_item_assignments_v2 twilio_numbers_regulatory_compliance_bundles_item_assignments_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NumbersRegulatoryComplianceBundlesItemAssignmentsV2Config
  */
  public constructor(scope: Construct, id: string, config: NumbersRegulatoryComplianceBundlesItemAssignmentsV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_numbers_regulatory_compliance_bundles_item_assignments_v2',
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
    this._bundleSid = config.bundleSid;
    this._id = config.id;
    this._objectSid = config.objectSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_sid - computed: false, optional: false, required: true
  private _bundleSid?: string; 
  public get bundleSid() {
    return this.getStringAttribute('bundle_sid');
  }
  public set bundleSid(value: string) {
    this._bundleSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleSidInput() {
    return this._bundleSid;
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
      bundle_sid: cdktf.stringToTerraform(this._bundleSid),
      id: cdktf.stringToTerraform(this._id),
      object_sid: cdktf.stringToTerraform(this._objectSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_sid: {
        value: cdktf.stringToHclTerraform(this._bundleSid),
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
