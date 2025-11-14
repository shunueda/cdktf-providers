// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_outcome_predictor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JourneyOutcomePredictorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_outcome_predictor#id JourneyOutcomePredictor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The outcome associated with this predictor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_outcome_predictor#outcome_id JourneyOutcomePredictor#outcome_id}
  */
  readonly outcomeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_outcome_predictor genesyscloud_journey_outcome_predictor}
*/
export class JourneyOutcomePredictor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_journey_outcome_predictor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JourneyOutcomePredictor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JourneyOutcomePredictor to import
  * @param importFromId The id of the existing JourneyOutcomePredictor that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_outcome_predictor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JourneyOutcomePredictor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_journey_outcome_predictor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/journey_outcome_predictor genesyscloud_journey_outcome_predictor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JourneyOutcomePredictorConfig
  */
  public constructor(scope: Construct, id: string, config: JourneyOutcomePredictorConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_journey_outcome_predictor',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
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
    this._outcomeId = config.outcomeId;
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

  // outcome_id - computed: false, optional: false, required: true
  private _outcomeId?: string; 
  public get outcomeId() {
    return this.getStringAttribute('outcome_id');
  }
  public set outcomeId(value: string) {
    this._outcomeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeIdInput() {
    return this._outcomeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      outcome_id: cdktf.stringToTerraform(this._outcomeId),
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
      outcome_id: {
        value: cdktf.stringToHclTerraform(this._outcomeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
