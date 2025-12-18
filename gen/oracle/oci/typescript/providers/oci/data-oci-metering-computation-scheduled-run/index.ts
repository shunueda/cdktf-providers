// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/metering_computation_scheduled_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMeteringComputationScheduledRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/metering_computation_scheduled_run#id DataOciMeteringComputationScheduledRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/metering_computation_scheduled_run#scheduled_run_id DataOciMeteringComputationScheduledRun#scheduled_run_id}
  */
  readonly scheduledRunId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/metering_computation_scheduled_run oci_metering_computation_scheduled_run}
*/
export class DataOciMeteringComputationScheduledRun extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_metering_computation_scheduled_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMeteringComputationScheduledRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMeteringComputationScheduledRun to import
  * @param importFromId The id of the existing DataOciMeteringComputationScheduledRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/metering_computation_scheduled_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMeteringComputationScheduledRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_metering_computation_scheduled_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/metering_computation_scheduled_run oci_metering_computation_scheduled_run} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMeteringComputationScheduledRunConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMeteringComputationScheduledRunConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_scheduled_run',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._scheduledRunId = config.scheduledRunId;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }

  // scheduled_run_id - computed: false, optional: false, required: true
  private _scheduledRunId?: string; 
  public get scheduledRunId() {
    return this.getStringAttribute('scheduled_run_id');
  }
  public set scheduledRunId(value: string) {
    this._scheduledRunId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledRunIdInput() {
    return this._scheduledRunId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scheduled_run_id: cdktf.stringToTerraform(this._scheduledRunId),
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
      scheduled_run_id: {
        value: cdktf.stringToHclTerraform(this._scheduledRunId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
