// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLocallogDiskSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#diskfull SystemLocallogDiskSetting#diskfull}
  */
  readonly diskfull?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#id SystemLocallogDiskSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#log_disk_full_percentage SystemLocallogDiskSetting#log_disk_full_percentage}
  */
  readonly logDiskFullPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#log_disk_quota SystemLocallogDiskSetting#log_disk_quota}
  */
  readonly logDiskQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#max_log_file_num SystemLocallogDiskSetting#max_log_file_num}
  */
  readonly maxLogFileNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#max_log_file_size SystemLocallogDiskSetting#max_log_file_size}
  */
  readonly maxLogFileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#roll_day SystemLocallogDiskSetting#roll_day}
  */
  readonly rollDay?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#roll_schedule SystemLocallogDiskSetting#roll_schedule}
  */
  readonly rollSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#roll_time SystemLocallogDiskSetting#roll_time}
  */
  readonly rollTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#server_type SystemLocallogDiskSetting#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#severity SystemLocallogDiskSetting#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#status SystemLocallogDiskSetting#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#upload SystemLocallogDiskSetting#upload}
  */
  readonly upload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#upload_delete_files SystemLocallogDiskSetting#upload_delete_files}
  */
  readonly uploadDeleteFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#upload_time SystemLocallogDiskSetting#upload_time}
  */
  readonly uploadTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#uploaddir SystemLocallogDiskSetting#uploaddir}
  */
  readonly uploaddir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#uploadip SystemLocallogDiskSetting#uploadip}
  */
  readonly uploadip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#uploadpass SystemLocallogDiskSetting#uploadpass}
  */
  readonly uploadpass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#uploadport SystemLocallogDiskSetting#uploadport}
  */
  readonly uploadport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#uploadsched SystemLocallogDiskSetting#uploadsched}
  */
  readonly uploadsched?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#uploadtype SystemLocallogDiskSetting#uploadtype}
  */
  readonly uploadtype?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#uploaduser SystemLocallogDiskSetting#uploaduser}
  */
  readonly uploaduser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#uploadzip SystemLocallogDiskSetting#uploadzip}
  */
  readonly uploadzip?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting fortimanager_system_locallog_disk_setting}
*/
export class SystemLocallogDiskSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_locallog_disk_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLocallogDiskSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLocallogDiskSetting to import
  * @param importFromId The id of the existing SystemLocallogDiskSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLocallogDiskSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_locallog_disk_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_locallog_disk_setting fortimanager_system_locallog_disk_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLocallogDiskSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLocallogDiskSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_locallog_disk_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._id = config.id;
    this._logDiskFullPercentage = config.logDiskFullPercentage;
    this._logDiskQuota = config.logDiskQuota;
    this._maxLogFileNum = config.maxLogFileNum;
    this._maxLogFileSize = config.maxLogFileSize;
    this._rollDay = config.rollDay;
    this._rollSchedule = config.rollSchedule;
    this._rollTime = config.rollTime;
    this._serverType = config.serverType;
    this._severity = config.severity;
    this._status = config.status;
    this._upload = config.upload;
    this._uploadDeleteFiles = config.uploadDeleteFiles;
    this._uploadTime = config.uploadTime;
    this._uploaddir = config.uploaddir;
    this._uploadip = config.uploadip;
    this._uploadpass = config.uploadpass;
    this._uploadport = config.uploadport;
    this._uploadsched = config.uploadsched;
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

  // log_disk_full_percentage - computed: true, optional: true, required: false
  private _logDiskFullPercentage?: number; 
  public get logDiskFullPercentage() {
    return this.getNumberAttribute('log_disk_full_percentage');
  }
  public set logDiskFullPercentage(value: number) {
    this._logDiskFullPercentage = value;
  }
  public resetLogDiskFullPercentage() {
    this._logDiskFullPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDiskFullPercentageInput() {
    return this._logDiskFullPercentage;
  }

  // log_disk_quota - computed: false, optional: true, required: false
  private _logDiskQuota?: number; 
  public get logDiskQuota() {
    return this.getNumberAttribute('log_disk_quota');
  }
  public set logDiskQuota(value: number) {
    this._logDiskQuota = value;
  }
  public resetLogDiskQuota() {
    this._logDiskQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDiskQuotaInput() {
    return this._logDiskQuota;
  }

  // max_log_file_num - computed: true, optional: true, required: false
  private _maxLogFileNum?: number; 
  public get maxLogFileNum() {
    return this.getNumberAttribute('max_log_file_num');
  }
  public set maxLogFileNum(value: number) {
    this._maxLogFileNum = value;
  }
  public resetMaxLogFileNum() {
    this._maxLogFileNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogFileNumInput() {
    return this._maxLogFileNum;
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

  // roll_day - computed: true, optional: true, required: false
  private _rollDay?: string[]; 
  public get rollDay() {
    return cdktf.Fn.tolist(this.getListAttribute('roll_day'));
  }
  public set rollDay(value: string[]) {
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

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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

  // upload_time - computed: true, optional: true, required: false
  private _uploadTime?: string; 
  public get uploadTime() {
    return this.getStringAttribute('upload_time');
  }
  public set uploadTime(value: string) {
    this._uploadTime = value;
  }
  public resetUploadTime() {
    this._uploadTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTimeInput() {
    return this._uploadTime;
  }

  // uploaddir - computed: false, optional: true, required: false
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

  // uploadpass - computed: true, optional: true, required: false
  private _uploadpass?: string[]; 
  public get uploadpass() {
    return cdktf.Fn.tolist(this.getListAttribute('uploadpass'));
  }
  public set uploadpass(value: string[]) {
    this._uploadpass = value;
  }
  public resetUploadpass() {
    this._uploadpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadpassInput() {
    return this._uploadpass;
  }

  // uploadport - computed: false, optional: true, required: false
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

  // uploadtype - computed: true, optional: true, required: false
  private _uploadtype?: string[]; 
  public get uploadtype() {
    return cdktf.Fn.tolist(this.getListAttribute('uploadtype'));
  }
  public set uploadtype(value: string[]) {
    this._uploadtype = value;
  }
  public resetUploadtype() {
    this._uploadtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadtypeInput() {
    return this._uploadtype;
  }

  // uploaduser - computed: false, optional: true, required: false
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
      id: cdktf.stringToTerraform(this._id),
      log_disk_full_percentage: cdktf.numberToTerraform(this._logDiskFullPercentage),
      log_disk_quota: cdktf.numberToTerraform(this._logDiskQuota),
      max_log_file_num: cdktf.numberToTerraform(this._maxLogFileNum),
      max_log_file_size: cdktf.numberToTerraform(this._maxLogFileSize),
      roll_day: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rollDay),
      roll_schedule: cdktf.stringToTerraform(this._rollSchedule),
      roll_time: cdktf.stringToTerraform(this._rollTime),
      server_type: cdktf.stringToTerraform(this._serverType),
      severity: cdktf.stringToTerraform(this._severity),
      status: cdktf.stringToTerraform(this._status),
      upload: cdktf.stringToTerraform(this._upload),
      upload_delete_files: cdktf.stringToTerraform(this._uploadDeleteFiles),
      upload_time: cdktf.stringToTerraform(this._uploadTime),
      uploaddir: cdktf.stringToTerraform(this._uploaddir),
      uploadip: cdktf.stringToTerraform(this._uploadip),
      uploadpass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uploadpass),
      uploadport: cdktf.numberToTerraform(this._uploadport),
      uploadsched: cdktf.stringToTerraform(this._uploadsched),
      uploadtype: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uploadtype),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_disk_full_percentage: {
        value: cdktf.numberToHclTerraform(this._logDiskFullPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_disk_quota: {
        value: cdktf.numberToHclTerraform(this._logDiskQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_log_file_num: {
        value: cdktf.numberToHclTerraform(this._maxLogFileNum),
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
      roll_day: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rollDay),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
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
      upload_time: {
        value: cdktf.stringToHclTerraform(this._uploadTime),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uploadpass),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      uploadtype: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uploadtype),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
