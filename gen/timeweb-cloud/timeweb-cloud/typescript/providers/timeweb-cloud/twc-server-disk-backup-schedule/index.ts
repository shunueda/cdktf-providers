// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_server_disk_backup_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TwcServerDiskBackupScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum stored copy count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_server_disk_backup_schedule#copy_count TwcServerDiskBackupSchedule#copy_count}
  */
  readonly copyCount: number;
  /**
  * Creation date for first backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_server_disk_backup_schedule#creation_start_at TwcServerDiskBackupSchedule#creation_start_at}
  */
  readonly creationStartAt: string;
  /**
  * Day of the week when auto backup should be created. Allowed only for week interval, counting starts from 1 (Monday)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_server_disk_backup_schedule#day_of_week TwcServerDiskBackupSchedule#day_of_week}
  */
  readonly dayOfWeek?: number;
  /**
  * Enable auto backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_server_disk_backup_schedule#enabled TwcServerDiskBackupSchedule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_server_disk_backup_schedule#id TwcServerDiskBackupSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval between auto backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_server_disk_backup_schedule#interval TwcServerDiskBackupSchedule#interval}
  */
  readonly interval: string;
  /**
  * Disk ID for which backup should be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_server_disk_backup_schedule#source_server_disk_id TwcServerDiskBackupSchedule#source_server_disk_id}
  */
  readonly sourceServerDiskId: number;
  /**
  * Server ID for which disk auto backups should be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_server_disk_backup_schedule#source_server_id TwcServerDiskBackupSchedule#source_server_id}
  */
  readonly sourceServerId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_server_disk_backup_schedule twc_server_disk_backup_schedule}
*/
export class TwcServerDiskBackupSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_server_disk_backup_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TwcServerDiskBackupSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TwcServerDiskBackupSchedule to import
  * @param importFromId The id of the existing TwcServerDiskBackupSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_server_disk_backup_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TwcServerDiskBackupSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_server_disk_backup_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_server_disk_backup_schedule twc_server_disk_backup_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TwcServerDiskBackupScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: TwcServerDiskBackupScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'twc_server_disk_backup_schedule',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.6',
        providerVersionConstraint: '1.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._copyCount = config.copyCount;
    this._creationStartAt = config.creationStartAt;
    this._dayOfWeek = config.dayOfWeek;
    this._enabled = config.enabled;
    this._id = config.id;
    this._interval = config.interval;
    this._sourceServerDiskId = config.sourceServerDiskId;
    this._sourceServerId = config.sourceServerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // copy_count - computed: false, optional: false, required: true
  private _copyCount?: number; 
  public get copyCount() {
    return this.getNumberAttribute('copy_count');
  }
  public set copyCount(value: number) {
    this._copyCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get copyCountInput() {
    return this._copyCount;
  }

  // creation_start_at - computed: false, optional: false, required: true
  private _creationStartAt?: string; 
  public get creationStartAt() {
    return this.getStringAttribute('creation_start_at');
  }
  public set creationStartAt(value: string) {
    this._creationStartAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creationStartAtInput() {
    return this._creationStartAt;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: number; 
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }
  public set dayOfWeek(value: number) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // source_server_disk_id - computed: false, optional: false, required: true
  private _sourceServerDiskId?: number; 
  public get sourceServerDiskId() {
    return this.getNumberAttribute('source_server_disk_id');
  }
  public set sourceServerDiskId(value: number) {
    this._sourceServerDiskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServerDiskIdInput() {
    return this._sourceServerDiskId;
  }

  // source_server_id - computed: false, optional: false, required: true
  private _sourceServerId?: number; 
  public get sourceServerId() {
    return this.getNumberAttribute('source_server_id');
  }
  public set sourceServerId(value: number) {
    this._sourceServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServerIdInput() {
    return this._sourceServerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      copy_count: cdktf.numberToTerraform(this._copyCount),
      creation_start_at: cdktf.stringToTerraform(this._creationStartAt),
      day_of_week: cdktf.numberToTerraform(this._dayOfWeek),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      source_server_disk_id: cdktf.numberToTerraform(this._sourceServerDiskId),
      source_server_id: cdktf.numberToTerraform(this._sourceServerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      copy_count: {
        value: cdktf.numberToHclTerraform(this._copyCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      creation_start_at: {
        value: cdktf.stringToHclTerraform(this._creationStartAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      day_of_week: {
        value: cdktf.numberToHclTerraform(this._dayOfWeek),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_server_disk_id: {
        value: cdktf.numberToHclTerraform(this._sourceServerDiskId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_server_id: {
        value: cdktf.numberToHclTerraform(this._sourceServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
