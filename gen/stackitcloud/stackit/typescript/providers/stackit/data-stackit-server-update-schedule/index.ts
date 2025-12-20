// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/server_update_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitServerUpdateScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * STACKIT Project ID to which the server is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/server_update_schedule#project_id DataStackitServerUpdateSchedule#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/server_update_schedule#region DataStackitServerUpdateSchedule#region}
  */
  readonly region?: string;
  /**
  * Server ID for the update schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/server_update_schedule#server_id DataStackitServerUpdateSchedule#server_id}
  */
  readonly serverId: string;
  /**
  * Update schedule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/server_update_schedule#update_schedule_id DataStackitServerUpdateSchedule#update_schedule_id}
  */
  readonly updateScheduleId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/server_update_schedule stackit_server_update_schedule}
*/
export class DataStackitServerUpdateSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_server_update_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitServerUpdateSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitServerUpdateSchedule to import
  * @param importFromId The id of the existing DataStackitServerUpdateSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/server_update_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitServerUpdateSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_server_update_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/data-sources/server_update_schedule stackit_server_update_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitServerUpdateScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitServerUpdateScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_server_update_schedule',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.76.0',
        providerVersionConstraint: '0.76.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._region = config.region;
    this._serverId = config.serverId;
    this._updateScheduleId = config.updateScheduleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintenance_window - computed: true, optional: false, required: false
  public get maintenanceWindow() {
    return this.getNumberAttribute('maintenance_window');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rrule - computed: true, optional: false, required: false
  public get rrule() {
    return this.getStringAttribute('rrule');
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // update_schedule_id - computed: false, optional: false, required: true
  private _updateScheduleId?: number; 
  public get updateScheduleId() {
    return this.getNumberAttribute('update_schedule_id');
  }
  public set updateScheduleId(value: number) {
    this._updateScheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateScheduleIdInput() {
    return this._updateScheduleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      server_id: cdktf.stringToTerraform(this._serverId),
      update_schedule_id: cdktf.numberToTerraform(this._updateScheduleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_schedule_id: {
        value: cdktf.numberToHclTerraform(this._updateScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
