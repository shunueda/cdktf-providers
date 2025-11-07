// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alias name to create for each snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_schedule#alias SnapshotSchedule#alias}
  */
  readonly alias?: string;
  /**
  * The schedule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_schedule#name SnapshotSchedule#name}
  */
  readonly name: string;
  /**
  * Unix Epoch time of next snapshot to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_schedule#next_run SnapshotSchedule#next_run}
  */
  readonly nextRun?: number;
  /**
  * Formatted name (see pattern) of next snapshot to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_schedule#next_snapshot SnapshotSchedule#next_snapshot}
  */
  readonly nextSnapshot?: string;
  /**
  * The /ifs path snapshotted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_schedule#path SnapshotSchedule#path}
  */
  readonly path?: string;
  /**
  * Pattern expanded with strftime to create snapshot names.Some sample values for pattern are: 'snap-%F' would yield snap-1984-03-20 , 'backup-%FT%T' would yield backup-1984-03-20T22:30:00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_schedule#pattern SnapshotSchedule#pattern}
  */
  readonly pattern?: string;
  /**
  * Time value in String for which snapshots created by this snapshot schedule should be retained.Values supported are of format : Never Expires, x Second(s), x Minute(s), x Hour(s), x Day(s), x Week(s), x Year(s) where x can be any integer value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_schedule#retention_time SnapshotSchedule#retention_time}
  */
  readonly retentionTime?: string;
  /**
  * The isidate-compatible natural language description of the schedule. It specifies the frequency of the schedule. You can specify this as combination of <interval> and <frequency> where each of them can be defined as: 
  * 				<interval>:
  * 					*Every [ ( other | <integer> ) ] ( weekday | day | week [ on <day>] | month [ on the <integer> ] | <day>[, ...] [ of every [ ( other | <integer> ) ] week ] | The last (day | weekday | <day>) of every [ (other | <integer>) ] month | The <integer> (weekday | <day>) of every [ (other | <integer>) ] month | The <integer> of every [ (other | <integer>) ] month | Yearly on <month> <integer> | Yearly on the (last | <integer>) [ weekday | <day> ] of <month>
  * 				<frequency>:
  * 					*at <hh>[:<mm>] [ (AM | PM) ] | every [ <integer> ] (hours | minutes) [ between <hh>[:<mm>] [ (AM | PM) ] and <hh>[:<mm>] [ (AM | PM) ] | every [ <integer> ] (hours | minutes) [ from <hh>[:<mm>] [ (AM | PM) ] to <hh>[:<mm>] [ (AM | PM) ]
  * 				Additionally:
  * 					<integer> can include "st," "th," or "rd," e.g., "Every 1st month."
  * 					<day> can be a day of the week or a three-letter abbreviation, e.g., "saturday" or "sat."
  * 					<month> must be the name of the month or its abbreviation, e.g., "July" or "Jul."
  * 				Some sample values:  "Every 2 days.", "Every 3rd weekday at 11 PM.", "Every month on the 15th at 1:30 AM."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_schedule#schedule SnapshotSchedule#schedule}
  */
  readonly schedule?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_schedule powerscale_snapshot_schedule}
*/
export class SnapshotSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_snapshot_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnapshotSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnapshotSchedule to import
  * @param importFromId The id of the existing SnapshotSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnapshotSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_snapshot_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/snapshot_schedule powerscale_snapshot_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: SnapshotScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_snapshot_schedule',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._name = config.name;
    this._nextRun = config.nextRun;
    this._nextSnapshot = config.nextSnapshot;
    this._path = config.path;
    this._pattern = config.pattern;
    this._retentionTime = config.retentionTime;
    this._schedule = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next_run - computed: true, optional: true, required: false
  private _nextRun?: number; 
  public get nextRun() {
    return this.getNumberAttribute('next_run');
  }
  public set nextRun(value: number) {
    this._nextRun = value;
  }
  public resetNextRun() {
    this._nextRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRunInput() {
    return this._nextRun;
  }

  // next_snapshot - computed: true, optional: true, required: false
  private _nextSnapshot?: string; 
  public get nextSnapshot() {
    return this.getStringAttribute('next_snapshot');
  }
  public set nextSnapshot(value: string) {
    this._nextSnapshot = value;
  }
  public resetNextSnapshot() {
    this._nextSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextSnapshotInput() {
    return this._nextSnapshot;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // retention_time - computed: true, optional: true, required: false
  private _retentionTime?: string; 
  public get retentionTime() {
    return this.getStringAttribute('retention_time');
  }
  public set retentionTime(value: string) {
    this._retentionTime = value;
  }
  public resetRetentionTime() {
    this._retentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionTimeInput() {
    return this._retentionTime;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      name: cdktf.stringToTerraform(this._name),
      next_run: cdktf.numberToTerraform(this._nextRun),
      next_snapshot: cdktf.stringToTerraform(this._nextSnapshot),
      path: cdktf.stringToTerraform(this._path),
      pattern: cdktf.stringToTerraform(this._pattern),
      retention_time: cdktf.stringToTerraform(this._retentionTime),
      schedule: cdktf.stringToTerraform(this._schedule),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_run: {
        value: cdktf.numberToHclTerraform(this._nextRun),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      next_snapshot: {
        value: cdktf.stringToHclTerraform(this._nextSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_time: {
        value: cdktf.stringToHclTerraform(this._retentionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
