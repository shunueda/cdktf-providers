// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogDiskSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#device_name LogDiskSetting#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#device_vdom LogDiskSetting#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#diskfull LogDiskSetting#diskfull}
  */
  readonly diskfull?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#dlp_archive_quota LogDiskSetting#dlp_archive_quota}
  */
  readonly dlpArchiveQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#full_final_warning_threshold LogDiskSetting#full_final_warning_threshold}
  */
  readonly fullFinalWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#full_first_warning_threshold LogDiskSetting#full_first_warning_threshold}
  */
  readonly fullFirstWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#full_second_warning_threshold LogDiskSetting#full_second_warning_threshold}
  */
  readonly fullSecondWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#id LogDiskSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#interface LogDiskSetting#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#interface_select_method LogDiskSetting#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#ips_archive LogDiskSetting#ips_archive}
  */
  readonly ipsArchive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#log_quota LogDiskSetting#log_quota}
  */
  readonly logQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#max_log_file_size LogDiskSetting#max_log_file_size}
  */
  readonly maxLogFileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#max_policy_packet_capture_size LogDiskSetting#max_policy_packet_capture_size}
  */
  readonly maxPolicyPacketCaptureSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#maximum_log_age LogDiskSetting#maximum_log_age}
  */
  readonly maximumLogAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#report_quota LogDiskSetting#report_quota}
  */
  readonly reportQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#roll_day LogDiskSetting#roll_day}
  */
  readonly rollDay?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#roll_schedule LogDiskSetting#roll_schedule}
  */
  readonly rollSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#roll_time LogDiskSetting#roll_time}
  */
  readonly rollTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#source_ip LogDiskSetting#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#status LogDiskSetting#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#upload LogDiskSetting#upload}
  */
  readonly upload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#upload_delete_files LogDiskSetting#upload_delete_files}
  */
  readonly uploadDeleteFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#upload_destination LogDiskSetting#upload_destination}
  */
  readonly uploadDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#upload_ssl_conn LogDiskSetting#upload_ssl_conn}
  */
  readonly uploadSslConn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#uploaddir LogDiskSetting#uploaddir}
  */
  readonly uploaddir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#uploadip LogDiskSetting#uploadip}
  */
  readonly uploadip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#uploadpass LogDiskSetting#uploadpass}
  */
  readonly uploadpass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#uploadport LogDiskSetting#uploadport}
  */
  readonly uploadport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#uploadsched LogDiskSetting#uploadsched}
  */
  readonly uploadsched?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#uploadtime LogDiskSetting#uploadtime}
  */
  readonly uploadtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#uploadtype LogDiskSetting#uploadtype}
  */
  readonly uploadtype?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#uploaduser LogDiskSetting#uploaduser}
  */
  readonly uploaduser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#vrf_select LogDiskSetting#vrf_select}
  */
  readonly vrfSelect?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting fmgdevice_log_disk_setting}
*/
export class LogDiskSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_log_disk_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogDiskSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogDiskSetting to import
  * @param importFromId The id of the existing LogDiskSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogDiskSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_log_disk_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_disk_setting fmgdevice_log_disk_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogDiskSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogDiskSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_log_disk_setting',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._diskfull = config.diskfull;
    this._dlpArchiveQuota = config.dlpArchiveQuota;
    this._fullFinalWarningThreshold = config.fullFinalWarningThreshold;
    this._fullFirstWarningThreshold = config.fullFirstWarningThreshold;
    this._fullSecondWarningThreshold = config.fullSecondWarningThreshold;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._ipsArchive = config.ipsArchive;
    this._logQuota = config.logQuota;
    this._maxLogFileSize = config.maxLogFileSize;
    this._maxPolicyPacketCaptureSize = config.maxPolicyPacketCaptureSize;
    this._maximumLogAge = config.maximumLogAge;
    this._reportQuota = config.reportQuota;
    this._rollDay = config.rollDay;
    this._rollSchedule = config.rollSchedule;
    this._rollTime = config.rollTime;
    this._sourceIp = config.sourceIp;
    this._status = config.status;
    this._upload = config.upload;
    this._uploadDeleteFiles = config.uploadDeleteFiles;
    this._uploadDestination = config.uploadDestination;
    this._uploadSslConn = config.uploadSslConn;
    this._uploaddir = config.uploaddir;
    this._uploadip = config.uploadip;
    this._uploadpass = config.uploadpass;
    this._uploadport = config.uploadport;
    this._uploadsched = config.uploadsched;
    this._uploadtime = config.uploadtime;
    this._uploadtype = config.uploadtype;
    this._uploaduser = config.uploaduser;
    this._vrfSelect = config.vrfSelect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

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

  // dlp_archive_quota - computed: false, optional: true, required: false
  private _dlpArchiveQuota?: number; 
  public get dlpArchiveQuota() {
    return this.getNumberAttribute('dlp_archive_quota');
  }
  public set dlpArchiveQuota(value: number) {
    this._dlpArchiveQuota = value;
  }
  public resetDlpArchiveQuota() {
    this._dlpArchiveQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpArchiveQuotaInput() {
    return this._dlpArchiveQuota;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // ips_archive - computed: true, optional: true, required: false
  private _ipsArchive?: string; 
  public get ipsArchive() {
    return this.getStringAttribute('ips_archive');
  }
  public set ipsArchive(value: string) {
    this._ipsArchive = value;
  }
  public resetIpsArchive() {
    this._ipsArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsArchiveInput() {
    return this._ipsArchive;
  }

  // log_quota - computed: false, optional: true, required: false
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

  // max_policy_packet_capture_size - computed: true, optional: true, required: false
  private _maxPolicyPacketCaptureSize?: number; 
  public get maxPolicyPacketCaptureSize() {
    return this.getNumberAttribute('max_policy_packet_capture_size');
  }
  public set maxPolicyPacketCaptureSize(value: number) {
    this._maxPolicyPacketCaptureSize = value;
  }
  public resetMaxPolicyPacketCaptureSize() {
    this._maxPolicyPacketCaptureSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPolicyPacketCaptureSizeInput() {
    return this._maxPolicyPacketCaptureSize;
  }

  // maximum_log_age - computed: true, optional: true, required: false
  private _maximumLogAge?: number; 
  public get maximumLogAge() {
    return this.getNumberAttribute('maximum_log_age');
  }
  public set maximumLogAge(value: number) {
    this._maximumLogAge = value;
  }
  public resetMaximumLogAge() {
    this._maximumLogAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLogAgeInput() {
    return this._maximumLogAge;
  }

  // report_quota - computed: false, optional: true, required: false
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

  // upload_delete_files - computed: false, optional: true, required: false
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

  // upload_destination - computed: false, optional: true, required: false
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

  // uploadip - computed: false, optional: true, required: false
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

  // uploadsched - computed: false, optional: true, required: false
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

  // uploadtime - computed: false, optional: true, required: false
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

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      diskfull: cdktf.stringToTerraform(this._diskfull),
      dlp_archive_quota: cdktf.numberToTerraform(this._dlpArchiveQuota),
      full_final_warning_threshold: cdktf.numberToTerraform(this._fullFinalWarningThreshold),
      full_first_warning_threshold: cdktf.numberToTerraform(this._fullFirstWarningThreshold),
      full_second_warning_threshold: cdktf.numberToTerraform(this._fullSecondWarningThreshold),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      ips_archive: cdktf.stringToTerraform(this._ipsArchive),
      log_quota: cdktf.numberToTerraform(this._logQuota),
      max_log_file_size: cdktf.numberToTerraform(this._maxLogFileSize),
      max_policy_packet_capture_size: cdktf.numberToTerraform(this._maxPolicyPacketCaptureSize),
      maximum_log_age: cdktf.numberToTerraform(this._maximumLogAge),
      report_quota: cdktf.numberToTerraform(this._reportQuota),
      roll_day: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rollDay),
      roll_schedule: cdktf.stringToTerraform(this._rollSchedule),
      roll_time: cdktf.stringToTerraform(this._rollTime),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      status: cdktf.stringToTerraform(this._status),
      upload: cdktf.stringToTerraform(this._upload),
      upload_delete_files: cdktf.stringToTerraform(this._uploadDeleteFiles),
      upload_destination: cdktf.stringToTerraform(this._uploadDestination),
      upload_ssl_conn: cdktf.stringToTerraform(this._uploadSslConn),
      uploaddir: cdktf.stringToTerraform(this._uploaddir),
      uploadip: cdktf.stringToTerraform(this._uploadip),
      uploadpass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uploadpass),
      uploadport: cdktf.numberToTerraform(this._uploadport),
      uploadsched: cdktf.stringToTerraform(this._uploadsched),
      uploadtime: cdktf.numberToTerraform(this._uploadtime),
      uploadtype: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uploadtype),
      uploaduser: cdktf.stringToTerraform(this._uploaduser),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diskfull: {
        value: cdktf.stringToHclTerraform(this._diskfull),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_archive_quota: {
        value: cdktf.numberToHclTerraform(this._dlpArchiveQuota),
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
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_archive: {
        value: cdktf.stringToHclTerraform(this._ipsArchive),
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
      max_policy_packet_capture_size: {
        value: cdktf.numberToHclTerraform(this._maxPolicyPacketCaptureSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_log_age: {
        value: cdktf.numberToHclTerraform(this._maximumLogAge),
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
      uploadtime: {
        value: cdktf.numberToHclTerraform(this._uploadtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
