// https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the connector within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_schedule#connector_id ConnectorSchedule#connector_id}
  */
  readonly connectorId?: string;
  /**
  * The name used both as the connection's name within the Fivetran system and as the source schema's name within your destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_schedule#connector_name ConnectorSchedule#connector_name}
  */
  readonly connectorName?: string;
  /**
  * The optional parameter that defines the sync start time when the sync frequency is already set or being set by the current request to 1440. It can be specified in one hour increments starting from 00:00 to 23:00. If not specified, we will use [the baseline sync start time](https://fivetran.com/docs/getting-started/syncoverview#syncfrequencyandscheduling). This parameter has no effect on the [0 to 60 minutes offset](https://fivetran.com/docs/getting-started/syncoverview#syncstarttimesandoffsets) used to determine the actual sync start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_schedule#daily_sync_time ConnectorSchedule#daily_sync_time}
  */
  readonly dailySyncTime?: string;
  /**
  * The unique identifier for the Group (Destination) within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_schedule#group_id ConnectorSchedule#group_id}
  */
  readonly groupId?: string;
  /**
  * Specifies whether the connector should be paused after the free trial period has ended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_schedule#pause_after_trial ConnectorSchedule#pause_after_trial}
  */
  readonly pauseAfterTrial?: string;
  /**
  * Specifies whether the connector is paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_schedule#paused ConnectorSchedule#paused}
  */
  readonly paused?: string;
  /**
  * The connector schedule configuration type. Supported values: auto, manual.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_schedule#schedule_type ConnectorSchedule#schedule_type}
  */
  readonly scheduleType?: string;
  /**
  * The connector sync frequency in minutes. Supported values: 1, 5, 15, 30, 60, 120, 180, 360, 480, 720, 1440.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_schedule#sync_frequency ConnectorSchedule#sync_frequency}
  */
  readonly syncFrequency?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_schedule fivetran_connector_schedule}
*/
export class ConnectorSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_connector_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorSchedule to import
  * @param importFromId The id of the existing ConnectorSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_connector_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/resources/connector_schedule fivetran_connector_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorScheduleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConnectorScheduleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fivetran_connector_schedule',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.13',
        providerVersionConstraint: '1.9.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorId = config.connectorId;
    this._connectorName = config.connectorName;
    this._dailySyncTime = config.dailySyncTime;
    this._groupId = config.groupId;
    this._pauseAfterTrial = config.pauseAfterTrial;
    this._paused = config.paused;
    this._scheduleType = config.scheduleType;
    this._syncFrequency = config.syncFrequency;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_id - computed: true, optional: true, required: false
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  public resetConnectorId() {
    this._connectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // connector_name - computed: false, optional: true, required: false
  private _connectorName?: string; 
  public get connectorName() {
    return this.getStringAttribute('connector_name');
  }
  public set connectorName(value: string) {
    this._connectorName = value;
  }
  public resetConnectorName() {
    this._connectorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorNameInput() {
    return this._connectorName;
  }

  // daily_sync_time - computed: true, optional: true, required: false
  private _dailySyncTime?: string; 
  public get dailySyncTime() {
    return this.getStringAttribute('daily_sync_time');
  }
  public set dailySyncTime(value: string) {
    this._dailySyncTime = value;
  }
  public resetDailySyncTime() {
    this._dailySyncTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailySyncTimeInput() {
    return this._dailySyncTime;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pause_after_trial - computed: true, optional: true, required: false
  private _pauseAfterTrial?: string; 
  public get pauseAfterTrial() {
    return this.getStringAttribute('pause_after_trial');
  }
  public set pauseAfterTrial(value: string) {
    this._pauseAfterTrial = value;
  }
  public resetPauseAfterTrial() {
    this._pauseAfterTrial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseAfterTrialInput() {
    return this._pauseAfterTrial;
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: string; 
  public get paused() {
    return this.getStringAttribute('paused');
  }
  public set paused(value: string) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // schedule_type - computed: true, optional: true, required: false
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  public resetScheduleType() {
    this._scheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // sync_frequency - computed: true, optional: true, required: false
  private _syncFrequency?: string; 
  public get syncFrequency() {
    return this.getStringAttribute('sync_frequency');
  }
  public set syncFrequency(value: string) {
    this._syncFrequency = value;
  }
  public resetSyncFrequency() {
    this._syncFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncFrequencyInput() {
    return this._syncFrequency;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connector_id: cdktf.stringToTerraform(this._connectorId),
      connector_name: cdktf.stringToTerraform(this._connectorName),
      daily_sync_time: cdktf.stringToTerraform(this._dailySyncTime),
      group_id: cdktf.stringToTerraform(this._groupId),
      pause_after_trial: cdktf.stringToTerraform(this._pauseAfterTrial),
      paused: cdktf.stringToTerraform(this._paused),
      schedule_type: cdktf.stringToTerraform(this._scheduleType),
      sync_frequency: cdktf.stringToTerraform(this._syncFrequency),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_id: {
        value: cdktf.stringToHclTerraform(this._connectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_name: {
        value: cdktf.stringToHclTerraform(this._connectorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daily_sync_time: {
        value: cdktf.stringToHclTerraform(this._dailySyncTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pause_after_trial: {
        value: cdktf.stringToHclTerraform(this._pauseAfterTrial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paused: {
        value: cdktf.stringToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_type: {
        value: cdktf.stringToHclTerraform(this._scheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_frequency: {
        value: cdktf.stringToHclTerraform(this._syncFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
