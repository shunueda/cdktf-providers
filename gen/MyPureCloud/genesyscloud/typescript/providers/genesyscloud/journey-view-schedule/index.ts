// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_view_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JourneyViewScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Frequency of execution (Daily | Weekly | Monthly).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_view_schedule#frequency JourneyViewSchedule#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_view_schedule#id JourneyViewSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Journey view ID of the schedule. Changing this will cause the schedule to be dropped and recreated for the new view ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_view_schedule#journey_view_id JourneyViewSchedule#journey_view_id}
  */
  readonly journeyViewId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_view_schedule genesyscloud_journey_view_schedule}
*/
export class JourneyViewSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_journey_view_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JourneyViewSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JourneyViewSchedule to import
  * @param importFromId The id of the existing JourneyViewSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_view_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JourneyViewSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_journey_view_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/journey_view_schedule genesyscloud_journey_view_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JourneyViewScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: JourneyViewScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_journey_view_schedule',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._frequency = config.frequency;
    this._id = config.id;
    this._journeyViewId = config.journeyViewId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // journey_view_id - computed: false, optional: false, required: true
  private _journeyViewId?: string; 
  public get journeyViewId() {
    return this.getStringAttribute('journey_view_id');
  }
  public set journeyViewId(value: string) {
    this._journeyViewId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get journeyViewIdInput() {
    return this._journeyViewId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      frequency: cdktf.stringToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      journey_view_id: cdktf.stringToTerraform(this._journeyViewId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
      journey_view_id: {
        value: cdktf.stringToHclTerraform(this._journeyViewId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
