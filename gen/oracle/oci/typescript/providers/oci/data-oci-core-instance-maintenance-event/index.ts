// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_instance_maintenance_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreInstanceMaintenanceEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_instance_maintenance_event#instance_maintenance_event_id DataOciCoreInstanceMaintenanceEvent#instance_maintenance_event_id}
  */
  readonly instanceMaintenanceEventId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_instance_maintenance_event oci_core_instance_maintenance_event}
*/
export class DataOciCoreInstanceMaintenanceEvent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_instance_maintenance_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreInstanceMaintenanceEvent to import
  * @param importFromId The id of the existing DataOciCoreInstanceMaintenanceEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_instance_maintenance_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreInstanceMaintenanceEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_instance_maintenance_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_instance_maintenance_event oci_core_instance_maintenance_event} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreInstanceMaintenanceEventConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreInstanceMaintenanceEventConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_maintenance_event',
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
    this._instanceMaintenanceEventId = config.instanceMaintenanceEventId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_details - computed: true, optional: false, required: false
  private _additionalDetails = new cdktf.StringMap(this, "additional_details");
  public get additionalDetails() {
    return this._additionalDetails;
  }

  // alternative_resolution_action - computed: true, optional: false, required: false
  public get alternativeResolutionAction() {
    return this.getStringAttribute('alternative_resolution_action');
  }

  // alternative_resolution_actions - computed: true, optional: false, required: false
  public get alternativeResolutionActions() {
    return this.getListAttribute('alternative_resolution_actions');
  }

  // can_delete_local_storage - computed: true, optional: false, required: false
  public get canDeleteLocalStorage() {
    return this.getBooleanAttribute('can_delete_local_storage');
  }

  // can_reschedule - computed: true, optional: false, required: false
  public get canReschedule() {
    return this.getBooleanAttribute('can_reschedule');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // correlation_token - computed: true, optional: false, required: false
  public get correlationToken() {
    return this.getStringAttribute('correlation_token');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // estimated_duration - computed: true, optional: false, required: false
  public get estimatedDuration() {
    return this.getStringAttribute('estimated_duration');
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

  // instance_action - computed: true, optional: false, required: false
  public get instanceAction() {
    return this.getStringAttribute('instance_action');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_maintenance_event_id - computed: false, optional: false, required: true
  private _instanceMaintenanceEventId?: string; 
  public get instanceMaintenanceEventId() {
    return this.getStringAttribute('instance_maintenance_event_id');
  }
  public set instanceMaintenanceEventId(value: string) {
    this._instanceMaintenanceEventId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMaintenanceEventIdInput() {
    return this._instanceMaintenanceEventId;
  }

  // maintenance_category - computed: true, optional: false, required: false
  public get maintenanceCategory() {
    return this.getStringAttribute('maintenance_category');
  }

  // maintenance_reason - computed: true, optional: false, required: false
  public get maintenanceReason() {
    return this.getStringAttribute('maintenance_reason');
  }

  // start_window_duration - computed: true, optional: false, required: false
  public get startWindowDuration() {
    return this.getStringAttribute('start_window_duration');
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

  // time_hard_due_date - computed: true, optional: false, required: false
  public get timeHardDueDate() {
    return this.getStringAttribute('time_hard_due_date');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // time_window_start - computed: true, optional: false, required: false
  public get timeWindowStart() {
    return this.getStringAttribute('time_window_start');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_maintenance_event_id: cdktf.stringToTerraform(this._instanceMaintenanceEventId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_maintenance_event_id: {
        value: cdktf.stringToHclTerraform(this._instanceMaintenanceEventId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
