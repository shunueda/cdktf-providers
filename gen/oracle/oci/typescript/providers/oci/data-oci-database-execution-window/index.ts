// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_execution_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseExecutionWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_execution_window#execution_window_id DataOciDatabaseExecutionWindow#execution_window_id}
  */
  readonly executionWindowId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_execution_window oci_database_execution_window}
*/
export class DataOciDatabaseExecutionWindow extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_execution_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseExecutionWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseExecutionWindow to import
  * @param importFromId The id of the existing DataOciDatabaseExecutionWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_execution_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseExecutionWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_execution_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_execution_window oci_database_execution_window} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseExecutionWindowConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseExecutionWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_execution_window',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._executionWindowId = config.executionWindowId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // estimated_time_in_mins - computed: true, optional: false, required: false
  public get estimatedTimeInMins() {
    return this.getNumberAttribute('estimated_time_in_mins');
  }

  // execution_resource_id - computed: true, optional: false, required: false
  public get executionResourceId() {
    return this.getStringAttribute('execution_resource_id');
  }

  // execution_window_id - computed: false, optional: false, required: true
  private _executionWindowId?: string; 
  public get executionWindowId() {
    return this.getStringAttribute('execution_window_id');
  }
  public set executionWindowId(value: string) {
    this._executionWindowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionWindowIdInput() {
    return this._executionWindowId;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enforced_duration - computed: true, optional: false, required: false
  public get isEnforcedDuration() {
    return this.getBooleanAttribute('is_enforced_duration');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_substate - computed: true, optional: false, required: false
  public get lifecycleSubstate() {
    return this.getStringAttribute('lifecycle_substate');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_scheduled - computed: true, optional: false, required: false
  public get timeScheduled() {
    return this.getStringAttribute('time_scheduled');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_time_taken_in_mins - computed: true, optional: false, required: false
  public get totalTimeTakenInMins() {
    return this.getNumberAttribute('total_time_taken_in_mins');
  }

  // window_duration_in_mins - computed: true, optional: false, required: false
  public get windowDurationInMins() {
    return this.getNumberAttribute('window_duration_in_mins');
  }

  // window_type - computed: true, optional: false, required: false
  public get windowType() {
    return this.getStringAttribute('window_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_window_id: cdktf.stringToTerraform(this._executionWindowId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_window_id: {
        value: cdktf.stringToHclTerraform(this._executionWindowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
