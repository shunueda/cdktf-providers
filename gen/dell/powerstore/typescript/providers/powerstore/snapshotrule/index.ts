// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The days of the week when the snapshot rule should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule#days_of_week Snapshotrule#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Specify whether all snapshots previously created by this snapshot rule should also be deleted when this rule is removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule#delete_snaps Snapshotrule#delete_snaps}
  */
  readonly deleteSnaps?: boolean | cdktf.IResolvable;
  /**
  * The Desired snapshot retention period in hours to retain snapshots for this time period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule#desired_retention Snapshotrule#desired_retention}
  */
  readonly desiredRetention: number;
  /**
  * The interval between snapshots taken by a snapshot rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule#interval Snapshotrule#interval}
  */
  readonly interval?: string;
  /**
  * Indicates whether this snapshot rule can be modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule#is_read_only Snapshotrule#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of the snapshot rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule#name Snapshotrule#name}
  */
  readonly name: string;
  /**
  * The NAS filesystem snapshot access method for snapshot rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule#nas_access_type Snapshotrule#nas_access_type}
  */
  readonly nasAccessType?: string;
  /**
  * The time of the day to take a daily snapshot, with format hh:mm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule#time_of_day Snapshotrule#time_of_day}
  */
  readonly timeOfDay?: string;
  /**
  * The time zone identifier for applying the time zone to the time_of_day for a snapshot rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule#timezone Snapshotrule#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule powerstore_snapshotrule}
*/
export class Snapshotrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_snapshotrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snapshotrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snapshotrule to import
  * @param importFromId The id of the existing Snapshotrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snapshotrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_snapshotrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/snapshotrule powerstore_snapshotrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotruleConfig
  */
  public constructor(scope: Construct, id: string, config: SnapshotruleConfig) {
    super(scope, id, {
      terraformResourceType: 'powerstore_snapshotrule',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._daysOfWeek = config.daysOfWeek;
    this._deleteSnaps = config.deleteSnaps;
    this._desiredRetention = config.desiredRetention;
    this._interval = config.interval;
    this._isReadOnly = config.isReadOnly;
    this._name = config.name;
    this._nasAccessType = config.nasAccessType;
    this._timeOfDay = config.timeOfDay;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // days_of_week - computed: true, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // delete_snaps - computed: false, optional: true, required: false
  private _deleteSnaps?: boolean | cdktf.IResolvable; 
  public get deleteSnaps() {
    return this.getBooleanAttribute('delete_snaps');
  }
  public set deleteSnaps(value: boolean | cdktf.IResolvable) {
    this._deleteSnaps = value;
  }
  public resetDeleteSnaps() {
    this._deleteSnaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSnapsInput() {
    return this._deleteSnaps;
  }

  // desired_retention - computed: false, optional: false, required: true
  private _desiredRetention?: number; 
  public get desiredRetention() {
    return this.getNumberAttribute('desired_retention');
  }
  public set desiredRetention(value: number) {
    this._desiredRetention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredRetentionInput() {
    return this._desiredRetention;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // is_read_only - computed: true, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // is_replica - computed: true, optional: false, required: false
  public get isReplica() {
    return this.getBooleanAttribute('is_replica');
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }

  // managed_by_id - computed: true, optional: false, required: false
  public get managedById() {
    return this.getStringAttribute('managed_by_id');
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

  // nas_access_type - computed: true, optional: true, required: false
  private _nasAccessType?: string; 
  public get nasAccessType() {
    return this.getStringAttribute('nas_access_type');
  }
  public set nasAccessType(value: string) {
    this._nasAccessType = value;
  }
  public resetNasAccessType() {
    this._nasAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasAccessTypeInput() {
    return this._nasAccessType;
  }

  // time_of_day - computed: true, optional: true, required: false
  private _timeOfDay?: string; 
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(this._daysOfWeek),
      delete_snaps: cdktf.booleanToTerraform(this._deleteSnaps),
      desired_retention: cdktf.numberToTerraform(this._desiredRetention),
      interval: cdktf.stringToTerraform(this._interval),
      is_read_only: cdktf.booleanToTerraform(this._isReadOnly),
      name: cdktf.stringToTerraform(this._name),
      nas_access_type: cdktf.stringToTerraform(this._nasAccessType),
      time_of_day: cdktf.stringToTerraform(this._timeOfDay),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      days_of_week: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._daysOfWeek),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      delete_snaps: {
        value: cdktf.booleanToHclTerraform(this._deleteSnaps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      desired_retention: {
        value: cdktf.numberToHclTerraform(this._desiredRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_read_only: {
        value: cdktf.booleanToHclTerraform(this._isReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nas_access_type: {
        value: cdktf.stringToHclTerraform(this._nasAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_of_day: {
        value: cdktf.stringToHclTerraform(this._timeOfDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
