// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileLogBackupLocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * all log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local#all FileLogBackupLocal#all}
  */
  readonly all?: number;
  /**
  * specify number of days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local#date FileLogBackupLocal#date}
  */
  readonly date?: number;
  /**
  * Most recent day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local#day FileLogBackupLocal#day}
  */
  readonly day?: number;
  /**
  * Expedite the Backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local#expedite FileLogBackupLocal#expedite}
  */
  readonly expedite?: number;
  /**
  * full path of the uploaded file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local#file_handle FileLogBackupLocal#file_handle}
  */
  readonly fileHandle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local#id FileLogBackupLocal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Most recent month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local#month FileLogBackupLocal#month}
  */
  readonly month?: number;
  /**
  * Specify backup period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local#period FileLogBackupLocal#period}
  */
  readonly period?: number;
  /**
  * Backup web statistical data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local#stats_data FileLogBackupLocal#stats_data}
  */
  readonly statsData?: number;
  /**
  * Most recent week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local#week FileLogBackupLocal#week}
  */
  readonly week?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local thunder_file_log_backup_local}
*/
export class FileLogBackupLocal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_file_log_backup_local";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileLogBackupLocal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileLogBackupLocal to import
  * @param importFromId The id of the existing FileLogBackupLocal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileLogBackupLocal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_file_log_backup_local", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_log_backup_local thunder_file_log_backup_local} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileLogBackupLocalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FileLogBackupLocalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_file_log_backup_local',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._date = config.date;
    this._day = config.day;
    this._expedite = config.expedite;
    this._fileHandle = config.fileHandle;
    this._id = config.id;
    this._month = config.month;
    this._period = config.period;
    this._statsData = config.statsData;
    this._week = config.week;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // date - computed: false, optional: true, required: false
  private _date?: number; 
  public get date() {
    return this.getNumberAttribute('date');
  }
  public set date(value: number) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // expedite - computed: false, optional: true, required: false
  private _expedite?: number; 
  public get expedite() {
    return this.getNumberAttribute('expedite');
  }
  public set expedite(value: number) {
    this._expedite = value;
  }
  public resetExpedite() {
    this._expedite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expediteInput() {
    return this._expedite;
  }

  // file_handle - computed: false, optional: true, required: false
  private _fileHandle?: string; 
  public get fileHandle() {
    return this.getStringAttribute('file_handle');
  }
  public set fileHandle(value: string) {
    this._fileHandle = value;
  }
  public resetFileHandle() {
    this._fileHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileHandleInput() {
    return this._fileHandle;
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

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // stats_data - computed: false, optional: true, required: false
  private _statsData?: number; 
  public get statsData() {
    return this.getNumberAttribute('stats_data');
  }
  public set statsData(value: number) {
    this._statsData = value;
  }
  public resetStatsData() {
    this._statsData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsDataInput() {
    return this._statsData;
  }

  // week - computed: false, optional: true, required: false
  private _week?: number; 
  public get week() {
    return this.getNumberAttribute('week');
  }
  public set week(value: number) {
    this._week = value;
  }
  public resetWeek() {
    this._week = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekInput() {
    return this._week;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.numberToTerraform(this._all),
      date: cdktf.numberToTerraform(this._date),
      day: cdktf.numberToTerraform(this._day),
      expedite: cdktf.numberToTerraform(this._expedite),
      file_handle: cdktf.stringToTerraform(this._fileHandle),
      id: cdktf.stringToTerraform(this._id),
      month: cdktf.numberToTerraform(this._month),
      period: cdktf.numberToTerraform(this._period),
      stats_data: cdktf.numberToTerraform(this._statsData),
      week: cdktf.numberToTerraform(this._week),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.numberToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      date: {
        value: cdktf.numberToHclTerraform(this._date),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      day: {
        value: cdktf.numberToHclTerraform(this._day),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expedite: {
        value: cdktf.numberToHclTerraform(this._expedite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_handle: {
        value: cdktf.stringToHclTerraform(this._fileHandle),
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
      month: {
        value: cdktf.numberToHclTerraform(this._month),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats_data: {
        value: cdktf.numberToHclTerraform(this._statsData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      week: {
        value: cdktf.numberToHclTerraform(this._week),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
