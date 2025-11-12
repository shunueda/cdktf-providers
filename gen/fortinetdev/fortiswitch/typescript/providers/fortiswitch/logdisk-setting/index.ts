// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogdiskSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#diskfull LogdiskSetting#diskfull}
  */
  readonly diskfull?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#drive_standby_time LogdiskSetting#drive_standby_time}
  */
  readonly driveStandbyTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#full_final_warning_threshold LogdiskSetting#full_final_warning_threshold}
  */
  readonly fullFinalWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#full_first_warning_threshold LogdiskSetting#full_first_warning_threshold}
  */
  readonly fullFirstWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#full_second_warning_threshold LogdiskSetting#full_second_warning_threshold}
  */
  readonly fullSecondWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#id LogdiskSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#log_quota LogdiskSetting#log_quota}
  */
  readonly logQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#max_log_file_size LogdiskSetting#max_log_file_size}
  */
  readonly maxLogFileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#report_quota LogdiskSetting#report_quota}
  */
  readonly reportQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#roll_day LogdiskSetting#roll_day}
  */
  readonly rollDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#roll_schedule LogdiskSetting#roll_schedule}
  */
  readonly rollSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#roll_time LogdiskSetting#roll_time}
  */
  readonly rollTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#source_ip LogdiskSetting#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#status LogdiskSetting#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#upload LogdiskSetting#upload}
  */
  readonly upload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#upload_delete_files LogdiskSetting#upload_delete_files}
  */
  readonly uploadDeleteFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#upload_destination LogdiskSetting#upload_destination}
  */
  readonly uploadDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#upload_format LogdiskSetting#upload_format}
  */
  readonly uploadFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#upload_ssl_conn LogdiskSetting#upload_ssl_conn}
  */
  readonly uploadSslConn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#uploaddir LogdiskSetting#uploaddir}
  */
  readonly uploaddir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#uploadip LogdiskSetting#uploadip}
  */
  readonly uploadip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#uploadpass LogdiskSetting#uploadpass}
  */
  readonly uploadpass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#uploadport LogdiskSetting#uploadport}
  */
  readonly uploadport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#uploadsched LogdiskSetting#uploadsched}
  */
  readonly uploadsched?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#uploadtime LogdiskSetting#uploadtime}
  */
  readonly uploadtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#uploadtype LogdiskSetting#uploadtype}
  */
  readonly uploadtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#uploaduser LogdiskSetting#uploaduser}
  */
  readonly uploaduser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#uploadzip LogdiskSetting#uploadzip}
  */
  readonly uploadzip?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting fortiswitch_logdisk_setting}
*/
export class LogdiskSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_logdisk_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogdiskSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogdiskSetting to import
  * @param importFromId The id of the existing LogdiskSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogdiskSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_logdisk_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/logdisk_setting fortiswitch_logdisk_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogdiskSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogdiskSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_logdisk_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diskfull = config.diskfull;
    this._driveStandbyTime = config.driveStandbyTime;
    this._fullFinalWarningThreshold = config.fullFinalWarningThreshold;
    this._fullFirstWarningThreshold = config.fullFirstWarningThreshold;
    this._fullSecondWarningThreshold = config.fullSecondWarningThreshold;
    this._id = config.id;
    this._logQuota = config.logQuota;
    this._maxLogFileSize = config.maxLogFileSize;
    this._reportQuota = config.reportQuota;
    this._rollDay = config.rollDay;
    this._rollSchedule = config.rollSchedule;
    this._rollTime = config.rollTime;
    this._sourceIp = config.sourceIp;
    this._status = config.status;
    this._upload = config.upload;
    this._uploadDeleteFiles = config.uploadDeleteFiles;
    this._uploadDestination = config.uploadDestination;
    this._uploadFormat = config.uploadFormat;
    this._uploadSslConn = config.uploadSslConn;
    this._uploaddir = config.uploaddir;
    this._uploadip = config.uploadip;
    this._uploadpass = config.uploadpass;
    this._uploadport = config.uploadport;
    this._uploadsched = config.uploadsched;
    this._uploadtime = config.uploadtime;
    this._uploadtype = config.uploadtype;
    this._uploaduser = config.uploaduser;
    this._uploadzip = config.uploadzip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // diskfull - computed: true, optional: true, required: false
  private _diskfull?: string; 
  public get diskfull() {
    return this.getStringAttribute('diskfull');
  }
  public set diskfull(value: string) {
    this._diskfull = value;
  }
  public resetDiskfull() {
    this._diskfull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskfullInput() {
    return this._diskfull;
  }

  // drive_standby_time - computed: true, optional: true, required: false
  private _driveStandbyTime?: number; 
  public get driveStandbyTime() {
    return this.getNumberAttribute('drive_standby_time');
  }
  public set driveStandbyTime(value: number) {
    this._driveStandbyTime = value;
  }
  public resetDriveStandbyTime() {
    this._driveStandbyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveStandbyTimeInput() {
    return this._driveStandbyTime;
  }

  // full_final_warning_threshold - computed: true, optional: true, required: false
  private _fullFinalWarningThreshold?: number; 
  public get fullFinalWarningThreshold() {
    return this.getNumberAttribute('full_final_warning_threshold');
  }
  public set fullFinalWarningThreshold(value: number) {
    this._fullFinalWarningThreshold = value;
  }
  public resetFullFinalWarningThreshold() {
    this._fullFinalWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullFinalWarningThresholdInput() {
    return this._fullFinalWarningThreshold;
  }

  // full_first_warning_threshold - computed: true, optional: true, required: false
  private _fullFirstWarningThreshold?: number; 
  public get fullFirstWarningThreshold() {
    return this.getNumberAttribute('full_first_warning_threshold');
  }
  public set fullFirstWarningThreshold(value: number) {
    this._fullFirstWarningThreshold = value;
  }
  public resetFullFirstWarningThreshold() {
    this._fullFirstWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullFirstWarningThresholdInput() {
    return this._fullFirstWarningThreshold;
  }

  // full_second_warning_threshold - computed: true, optional: true, required: false
  private _fullSecondWarningThreshold?: number; 
  public get fullSecondWarningThreshold() {
    return this.getNumberAttribute('full_second_warning_threshold');
  }
  public set fullSecondWarningThreshold(value: number) {
    this._fullSecondWarningThreshold = value;
  }
  public resetFullSecondWarningThreshold() {
    this._fullSecondWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullSecondWarningThresholdInput() {
    return this._fullSecondWarningThreshold;
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

  // log_quota - computed: true, optional: true, required: false
  private _logQuota?: number; 
  public get logQuota() {
    return this.getNumberAttribute('log_quota');
  }
  public set logQuota(value: number) {
    this._logQuota = value;
  }
  public resetLogQuota() {
    this._logQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQuotaInput() {
    return this._logQuota;
  }

  // max_log_file_size - computed: true, optional: true, required: false
  private _maxLogFileSize?: number; 
  public get maxLogFileSize() {
    return this.getNumberAttribute('max_log_file_size');
  }
  public set maxLogFileSize(value: number) {
    this._maxLogFileSize = value;
  }
  public resetMaxLogFileSize() {
    this._maxLogFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogFileSizeInput() {
    return this._maxLogFileSize;
  }

  // report_quota - computed: true, optional: true, required: false
  private _reportQuota?: number; 
  public get reportQuota() {
    return this.getNumberAttribute('report_quota');
  }
  public set reportQuota(value: number) {
    this._reportQuota = value;
  }
  public resetReportQuota() {
    this._reportQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportQuotaInput() {
    return this._reportQuota;
  }

  // roll_day - computed: true, optional: true, required: false
  private _rollDay?: string; 
  public get rollDay() {
    return this.getStringAttribute('roll_day');
  }
  public set rollDay(value: string) {
    this._rollDay = value;
  }
  public resetRollDay() {
    this._rollDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollDayInput() {
    return this._rollDay;
  }

  // roll_schedule - computed: true, optional: true, required: false
  private _rollSchedule?: string; 
  public get rollSchedule() {
    return this.getStringAttribute('roll_schedule');
  }
  public set rollSchedule(value: string) {
    this._rollSchedule = value;
  }
  public resetRollSchedule() {
    this._rollSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollScheduleInput() {
    return this._rollSchedule;
  }

  // roll_time - computed: true, optional: true, required: false
  private _rollTime?: string; 
  public get rollTime() {
    return this.getStringAttribute('roll_time');
  }
  public set rollTime(value: string) {
    this._rollTime = value;
  }
  public resetRollTime() {
    this._rollTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollTimeInput() {
    return this._rollTime;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // upload - computed: true, optional: true, required: false
  private _upload?: string; 
  public get upload() {
    return this.getStringAttribute('upload');
  }
  public set upload(value: string) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload;
  }

  // upload_delete_files - computed: true, optional: true, required: false
  private _uploadDeleteFiles?: string; 
  public get uploadDeleteFiles() {
    return this.getStringAttribute('upload_delete_files');
  }
  public set uploadDeleteFiles(value: string) {
    this._uploadDeleteFiles = value;
  }
  public resetUploadDeleteFiles() {
    this._uploadDeleteFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadDeleteFilesInput() {
    return this._uploadDeleteFiles;
  }

  // upload_destination - computed: true, optional: true, required: false
  private _uploadDestination?: string; 
  public get uploadDestination() {
    return this.getStringAttribute('upload_destination');
  }
  public set uploadDestination(value: string) {
    this._uploadDestination = value;
  }
  public resetUploadDestination() {
    this._uploadDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadDestinationInput() {
    return this._uploadDestination;
  }

  // upload_format - computed: true, optional: true, required: false
  private _uploadFormat?: string; 
  public get uploadFormat() {
    return this.getStringAttribute('upload_format');
  }
  public set uploadFormat(value: string) {
    this._uploadFormat = value;
  }
  public resetUploadFormat() {
    this._uploadFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadFormatInput() {
    return this._uploadFormat;
  }

  // upload_ssl_conn - computed: true, optional: true, required: false
  private _uploadSslConn?: string; 
  public get uploadSslConn() {
    return this.getStringAttribute('upload_ssl_conn');
  }
  public set uploadSslConn(value: string) {
    this._uploadSslConn = value;
  }
  public resetUploadSslConn() {
    this._uploadSslConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadSslConnInput() {
    return this._uploadSslConn;
  }

  // uploaddir - computed: true, optional: true, required: false
  private _uploaddir?: string; 
  public get uploaddir() {
    return this.getStringAttribute('uploaddir');
  }
  public set uploaddir(value: string) {
    this._uploaddir = value;
  }
  public resetUploaddir() {
    this._uploaddir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploaddirInput() {
    return this._uploaddir;
  }

  // uploadip - computed: true, optional: true, required: false
  private _uploadip?: string; 
  public get uploadip() {
    return this.getStringAttribute('uploadip');
  }
  public set uploadip(value: string) {
    this._uploadip = value;
  }
  public resetUploadip() {
    this._uploadip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadipInput() {
    return this._uploadip;
  }

  // uploadpass - computed: false, optional: true, required: false
  private _uploadpass?: string; 
  public get uploadpass() {
    return this.getStringAttribute('uploadpass');
  }
  public set uploadpass(value: string) {
    this._uploadpass = value;
  }
  public resetUploadpass() {
    this._uploadpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadpassInput() {
    return this._uploadpass;
  }

  // uploadport - computed: true, optional: true, required: false
  private _uploadport?: number; 
  public get uploadport() {
    return this.getNumberAttribute('uploadport');
  }
  public set uploadport(value: number) {
    this._uploadport = value;
  }
  public resetUploadport() {
    this._uploadport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadportInput() {
    return this._uploadport;
  }

  // uploadsched - computed: true, optional: true, required: false
  private _uploadsched?: string; 
  public get uploadsched() {
    return this.getStringAttribute('uploadsched');
  }
  public set uploadsched(value: string) {
    this._uploadsched = value;
  }
  public resetUploadsched() {
    this._uploadsched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadschedInput() {
    return this._uploadsched;
  }

  // uploadtime - computed: true, optional: true, required: false
  private _uploadtime?: number; 
  public get uploadtime() {
    return this.getNumberAttribute('uploadtime');
  }
  public set uploadtime(value: number) {
    this._uploadtime = value;
  }
  public resetUploadtime() {
    this._uploadtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadtimeInput() {
    return this._uploadtime;
  }

  // uploadtype - computed: true, optional: true, required: false
  private _uploadtype?: string; 
  public get uploadtype() {
    return this.getStringAttribute('uploadtype');
  }
  public set uploadtype(value: string) {
    this._uploadtype = value;
  }
  public resetUploadtype() {
    this._uploadtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadtypeInput() {
    return this._uploadtype;
  }

  // uploaduser - computed: true, optional: true, required: false
  private _uploaduser?: string; 
  public get uploaduser() {
    return this.getStringAttribute('uploaduser');
  }
  public set uploaduser(value: string) {
    this._uploaduser = value;
  }
  public resetUploaduser() {
    this._uploaduser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploaduserInput() {
    return this._uploaduser;
  }

  // uploadzip - computed: true, optional: true, required: false
  private _uploadzip?: string; 
  public get uploadzip() {
    return this.getStringAttribute('uploadzip');
  }
  public set uploadzip(value: string) {
    this._uploadzip = value;
  }
  public resetUploadzip() {
    this._uploadzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadzipInput() {
    return this._uploadzip;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      diskfull: cdktf.stringToTerraform(this._diskfull),
      drive_standby_time: cdktf.numberToTerraform(this._driveStandbyTime),
      full_final_warning_threshold: cdktf.numberToTerraform(this._fullFinalWarningThreshold),
      full_first_warning_threshold: cdktf.numberToTerraform(this._fullFirstWarningThreshold),
      full_second_warning_threshold: cdktf.numberToTerraform(this._fullSecondWarningThreshold),
      id: cdktf.stringToTerraform(this._id),
      log_quota: cdktf.numberToTerraform(this._logQuota),
      max_log_file_size: cdktf.numberToTerraform(this._maxLogFileSize),
      report_quota: cdktf.numberToTerraform(this._reportQuota),
      roll_day: cdktf.stringToTerraform(this._rollDay),
      roll_schedule: cdktf.stringToTerraform(this._rollSchedule),
      roll_time: cdktf.stringToTerraform(this._rollTime),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      status: cdktf.stringToTerraform(this._status),
      upload: cdktf.stringToTerraform(this._upload),
      upload_delete_files: cdktf.stringToTerraform(this._uploadDeleteFiles),
      upload_destination: cdktf.stringToTerraform(this._uploadDestination),
      upload_format: cdktf.stringToTerraform(this._uploadFormat),
      upload_ssl_conn: cdktf.stringToTerraform(this._uploadSslConn),
      uploaddir: cdktf.stringToTerraform(this._uploaddir),
      uploadip: cdktf.stringToTerraform(this._uploadip),
      uploadpass: cdktf.stringToTerraform(this._uploadpass),
      uploadport: cdktf.numberToTerraform(this._uploadport),
      uploadsched: cdktf.stringToTerraform(this._uploadsched),
      uploadtime: cdktf.numberToTerraform(this._uploadtime),
      uploadtype: cdktf.stringToTerraform(this._uploadtype),
      uploaduser: cdktf.stringToTerraform(this._uploaduser),
      uploadzip: cdktf.stringToTerraform(this._uploadzip),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      diskfull: {
        value: cdktf.stringToHclTerraform(this._diskfull),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drive_standby_time: {
        value: cdktf.numberToHclTerraform(this._driveStandbyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      full_final_warning_threshold: {
        value: cdktf.numberToHclTerraform(this._fullFinalWarningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      full_first_warning_threshold: {
        value: cdktf.numberToHclTerraform(this._fullFirstWarningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      full_second_warning_threshold: {
        value: cdktf.numberToHclTerraform(this._fullSecondWarningThreshold),
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
      log_quota: {
        value: cdktf.numberToHclTerraform(this._logQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_log_file_size: {
        value: cdktf.numberToHclTerraform(this._maxLogFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      report_quota: {
        value: cdktf.numberToHclTerraform(this._reportQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      roll_day: {
        value: cdktf.stringToHclTerraform(this._rollDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roll_schedule: {
        value: cdktf.stringToHclTerraform(this._rollSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roll_time: {
        value: cdktf.stringToHclTerraform(this._rollTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload: {
        value: cdktf.stringToHclTerraform(this._upload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_delete_files: {
        value: cdktf.stringToHclTerraform(this._uploadDeleteFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_destination: {
        value: cdktf.stringToHclTerraform(this._uploadDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_format: {
        value: cdktf.stringToHclTerraform(this._uploadFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_ssl_conn: {
        value: cdktf.stringToHclTerraform(this._uploadSslConn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uploaddir: {
        value: cdktf.stringToHclTerraform(this._uploaddir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uploadip: {
        value: cdktf.stringToHclTerraform(this._uploadip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uploadpass: {
        value: cdktf.stringToHclTerraform(this._uploadpass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uploadport: {
        value: cdktf.numberToHclTerraform(this._uploadport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uploadsched: {
        value: cdktf.stringToHclTerraform(this._uploadsched),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uploadtime: {
        value: cdktf.numberToHclTerraform(this._uploadtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uploadtype: {
        value: cdktf.stringToHclTerraform(this._uploadtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uploaduser: {
        value: cdktf.stringToHclTerraform(this._uploaduser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uploadzip: {
        value: cdktf.stringToHclTerraform(this._uploadzip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
