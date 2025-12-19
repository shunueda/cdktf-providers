// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * all log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#all BackupLog#all}
  */
  readonly all?: number;
  /**
  * Backup core files only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#core BackupLog#core}
  */
  readonly core?: number;
  /**
  * specify number of days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#date BackupLog#date}
  */
  readonly date?: number;
  /**
  * Most recent day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#day BackupLog#day}
  */
  readonly day?: number;
  /**
  * Expedite the Backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#expedite BackupLog#expedite}
  */
  readonly expedite?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#id BackupLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Backup messages file only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#messages BackupLog#messages}
  */
  readonly messages?: number;
  /**
  * Most recent month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#month BackupLog#month}
  */
  readonly month?: number;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#password BackupLog#password}
  */
  readonly password?: string;
  /**
  * Specify backup period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#period BackupLog#period}
  */
  readonly period?: number;
  /**
  * profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#remote_file BackupLog#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Backup showtech files only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#showtech BackupLog#showtech}
  */
  readonly showtech?: number;
  /**
  * Backup web statistical data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#stats_data BackupLog#stats_data}
  */
  readonly statsData?: number;
  /**
  * Save backup store information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#store_name BackupLog#store_name}
  */
  readonly storeName?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#use_mgmt_port BackupLog#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * Most recent week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#week BackupLog#week}
  */
  readonly week?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log thunder_backup_log}
*/
export class BackupLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_backup_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupLog to import
  * @param importFromId The id of the existing BackupLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_backup_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/backup_log thunder_backup_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupLogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BackupLogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_backup_log',
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
    this._core = config.core;
    this._date = config.date;
    this._day = config.day;
    this._expedite = config.expedite;
    this._id = config.id;
    this._messages = config.messages;
    this._month = config.month;
    this._password = config.password;
    this._period = config.period;
    this._remoteFile = config.remoteFile;
    this._showtech = config.showtech;
    this._statsData = config.statsData;
    this._storeName = config.storeName;
    this._useMgmtPort = config.useMgmtPort;
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

  // core - computed: false, optional: true, required: false
  private _core?: number; 
  public get core() {
    return this.getNumberAttribute('core');
  }
  public set core(value: number) {
    this._core = value;
  }
  public resetCore() {
    this._core = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInput() {
    return this._core;
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

  // messages - computed: false, optional: true, required: false
  private _messages?: number; 
  public get messages() {
    return this.getNumberAttribute('messages');
  }
  public set messages(value: number) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // showtech - computed: false, optional: true, required: false
  private _showtech?: number; 
  public get showtech() {
    return this.getNumberAttribute('showtech');
  }
  public set showtech(value: number) {
    this._showtech = value;
  }
  public resetShowtech() {
    this._showtech = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showtechInput() {
    return this._showtech;
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

  // store_name - computed: false, optional: true, required: false
  private _storeName?: string; 
  public get storeName() {
    return this.getStringAttribute('store_name');
  }
  public set storeName(value: string) {
    this._storeName = value;
  }
  public resetStoreName() {
    this._storeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeNameInput() {
    return this._storeName;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
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
      core: cdktf.numberToTerraform(this._core),
      date: cdktf.numberToTerraform(this._date),
      day: cdktf.numberToTerraform(this._day),
      expedite: cdktf.numberToTerraform(this._expedite),
      id: cdktf.stringToTerraform(this._id),
      messages: cdktf.numberToTerraform(this._messages),
      month: cdktf.numberToTerraform(this._month),
      password: cdktf.stringToTerraform(this._password),
      period: cdktf.numberToTerraform(this._period),
      remote_file: cdktf.stringToTerraform(this._remoteFile),
      showtech: cdktf.numberToTerraform(this._showtech),
      stats_data: cdktf.numberToTerraform(this._statsData),
      store_name: cdktf.stringToTerraform(this._storeName),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
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
      core: {
        value: cdktf.numberToHclTerraform(this._core),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messages: {
        value: cdktf.numberToHclTerraform(this._messages),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      month: {
        value: cdktf.numberToHclTerraform(this._month),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_file: {
        value: cdktf.stringToHclTerraform(this._remoteFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      showtech: {
        value: cdktf.numberToHclTerraform(this._showtech),
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
      store_name: {
        value: cdktf.stringToHclTerraform(this._storeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
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
