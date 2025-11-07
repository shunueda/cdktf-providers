// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLogSettingsRollinglocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#days SystemLogSettingsRollinglocal#days}
  */
  readonly days?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#del_files SystemLogSettingsRollinglocal#del_files}
  */
  readonly delFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#directory SystemLogSettingsRollinglocal#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#file_size SystemLogSettingsRollinglocal#file_size}
  */
  readonly fileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#gzip_format SystemLogSettingsRollinglocal#gzip_format}
  */
  readonly gzipFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#hour SystemLogSettingsRollinglocal#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#id SystemLogSettingsRollinglocal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#ip SystemLogSettingsRollinglocal#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#ip2 SystemLogSettingsRollinglocal#ip2}
  */
  readonly ip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#ip3 SystemLogSettingsRollinglocal#ip3}
  */
  readonly ip3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#log_format SystemLogSettingsRollinglocal#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#min SystemLogSettingsRollinglocal#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#password SystemLogSettingsRollinglocal#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#password2 SystemLogSettingsRollinglocal#password2}
  */
  readonly password2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#password3 SystemLogSettingsRollinglocal#password3}
  */
  readonly password3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#port SystemLogSettingsRollinglocal#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#port2 SystemLogSettingsRollinglocal#port2}
  */
  readonly port2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#port3 SystemLogSettingsRollinglocal#port3}
  */
  readonly port3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#rolling_upgrade_status SystemLogSettingsRollinglocal#rolling_upgrade_status}
  */
  readonly rollingUpgradeStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#server SystemLogSettingsRollinglocal#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#server2 SystemLogSettingsRollinglocal#server2}
  */
  readonly server2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#server3 SystemLogSettingsRollinglocal#server3}
  */
  readonly server3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#server_type SystemLogSettingsRollinglocal#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#upload SystemLogSettingsRollinglocal#upload}
  */
  readonly upload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#upload_hour SystemLogSettingsRollinglocal#upload_hour}
  */
  readonly uploadHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#upload_mode SystemLogSettingsRollinglocal#upload_mode}
  */
  readonly uploadMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#upload_trigger SystemLogSettingsRollinglocal#upload_trigger}
  */
  readonly uploadTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#username SystemLogSettingsRollinglocal#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#username2 SystemLogSettingsRollinglocal#username2}
  */
  readonly username2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#username3 SystemLogSettingsRollinglocal#username3}
  */
  readonly username3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#when SystemLogSettingsRollinglocal#when}
  */
  readonly when?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal fortimanager_system_log_settings_rollinglocal}
*/
export class SystemLogSettingsRollinglocal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_log_settings_rollinglocal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLogSettingsRollinglocal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLogSettingsRollinglocal to import
  * @param importFromId The id of the existing SystemLogSettingsRollinglocal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLogSettingsRollinglocal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_log_settings_rollinglocal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_settings_rollinglocal fortimanager_system_log_settings_rollinglocal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLogSettingsRollinglocalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLogSettingsRollinglocalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_log_settings_rollinglocal',
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
    this._days = config.days;
    this._delFiles = config.delFiles;
    this._directory = config.directory;
    this._fileSize = config.fileSize;
    this._gzipFormat = config.gzipFormat;
    this._hour = config.hour;
    this._id = config.id;
    this._ip = config.ip;
    this._ip2 = config.ip2;
    this._ip3 = config.ip3;
    this._logFormat = config.logFormat;
    this._min = config.min;
    this._password = config.password;
    this._password2 = config.password2;
    this._password3 = config.password3;
    this._port = config.port;
    this._port2 = config.port2;
    this._port3 = config.port3;
    this._rollingUpgradeStatus = config.rollingUpgradeStatus;
    this._server = config.server;
    this._server2 = config.server2;
    this._server3 = config.server3;
    this._serverType = config.serverType;
    this._upload = config.upload;
    this._uploadHour = config.uploadHour;
    this._uploadMode = config.uploadMode;
    this._uploadTrigger = config.uploadTrigger;
    this._username = config.username;
    this._username2 = config.username2;
    this._username3 = config.username3;
    this._when = config.when;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // days - computed: true, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return cdktf.Fn.tolist(this.getListAttribute('days'));
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // del_files - computed: true, optional: true, required: false
  private _delFiles?: string; 
  public get delFiles() {
    return this.getStringAttribute('del_files');
  }
  public set delFiles(value: string) {
    this._delFiles = value;
  }
  public resetDelFiles() {
    this._delFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delFilesInput() {
    return this._delFiles;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // file_size - computed: true, optional: true, required: false
  private _fileSize?: number; 
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }
  public set fileSize(value: number) {
    this._fileSize = value;
  }
  public resetFileSize() {
    this._fileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeInput() {
    return this._fileSize;
  }

  // gzip_format - computed: true, optional: true, required: false
  private _gzipFormat?: string; 
  public get gzipFormat() {
    return this.getStringAttribute('gzip_format');
  }
  public set gzipFormat(value: string) {
    this._gzipFormat = value;
  }
  public resetGzipFormat() {
    this._gzipFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipFormatInput() {
    return this._gzipFormat;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip2 - computed: true, optional: true, required: false
  private _ip2?: string; 
  public get ip2() {
    return this.getStringAttribute('ip2');
  }
  public set ip2(value: string) {
    this._ip2 = value;
  }
  public resetIp2() {
    this._ip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip2Input() {
    return this._ip2;
  }

  // ip3 - computed: true, optional: true, required: false
  private _ip3?: string; 
  public get ip3() {
    return this.getStringAttribute('ip3');
  }
  public set ip3(value: string) {
    this._ip3 = value;
  }
  public resetIp3() {
    this._ip3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip3Input() {
    return this._ip3;
  }

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password2 - computed: true, optional: true, required: false
  private _password2?: string[]; 
  public get password2() {
    return cdktf.Fn.tolist(this.getListAttribute('password2'));
  }
  public set password2(value: string[]) {
    this._password2 = value;
  }
  public resetPassword2() {
    this._password2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password2Input() {
    return this._password2;
  }

  // password3 - computed: true, optional: true, required: false
  private _password3?: string[]; 
  public get password3() {
    return cdktf.Fn.tolist(this.getListAttribute('password3'));
  }
  public set password3(value: string[]) {
    this._password3 = value;
  }
  public resetPassword3() {
    this._password3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password3Input() {
    return this._password3;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port2 - computed: false, optional: true, required: false
  private _port2?: number; 
  public get port2() {
    return this.getNumberAttribute('port2');
  }
  public set port2(value: number) {
    this._port2 = value;
  }
  public resetPort2() {
    this._port2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2Input() {
    return this._port2;
  }

  // port3 - computed: false, optional: true, required: false
  private _port3?: number; 
  public get port3() {
    return this.getNumberAttribute('port3');
  }
  public set port3(value: number) {
    this._port3 = value;
  }
  public resetPort3() {
    this._port3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port3Input() {
    return this._port3;
  }

  // rolling_upgrade_status - computed: false, optional: true, required: false
  private _rollingUpgradeStatus?: number; 
  public get rollingUpgradeStatus() {
    return this.getNumberAttribute('rolling_upgrade_status');
  }
  public set rollingUpgradeStatus(value: number) {
    this._rollingUpgradeStatus = value;
  }
  public resetRollingUpgradeStatus() {
    this._rollingUpgradeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpgradeStatusInput() {
    return this._rollingUpgradeStatus;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server2 - computed: false, optional: true, required: false
  private _server2?: string; 
  public get server2() {
    return this.getStringAttribute('server2');
  }
  public set server2(value: string) {
    this._server2 = value;
  }
  public resetServer2() {
    this._server2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server2Input() {
    return this._server2;
  }

  // server3 - computed: false, optional: true, required: false
  private _server3?: string; 
  public get server3() {
    return this.getStringAttribute('server3');
  }
  public set server3(value: string) {
    this._server3 = value;
  }
  public resetServer3() {
    this._server3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server3Input() {
    return this._server3;
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

  // upload_hour - computed: false, optional: true, required: false
  private _uploadHour?: number; 
  public get uploadHour() {
    return this.getNumberAttribute('upload_hour');
  }
  public set uploadHour(value: number) {
    this._uploadHour = value;
  }
  public resetUploadHour() {
    this._uploadHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadHourInput() {
    return this._uploadHour;
  }

  // upload_mode - computed: true, optional: true, required: false
  private _uploadMode?: string; 
  public get uploadMode() {
    return this.getStringAttribute('upload_mode');
  }
  public set uploadMode(value: string) {
    this._uploadMode = value;
  }
  public resetUploadMode() {
    this._uploadMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadModeInput() {
    return this._uploadMode;
  }

  // upload_trigger - computed: true, optional: true, required: false
  private _uploadTrigger?: string; 
  public get uploadTrigger() {
    return this.getStringAttribute('upload_trigger');
  }
  public set uploadTrigger(value: string) {
    this._uploadTrigger = value;
  }
  public resetUploadTrigger() {
    this._uploadTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTriggerInput() {
    return this._uploadTrigger;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username2 - computed: false, optional: true, required: false
  private _username2?: string; 
  public get username2() {
    return this.getStringAttribute('username2');
  }
  public set username2(value: string) {
    this._username2 = value;
  }
  public resetUsername2() {
    this._username2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get username2Input() {
    return this._username2;
  }

  // username3 - computed: false, optional: true, required: false
  private _username3?: string; 
  public get username3() {
    return this.getStringAttribute('username3');
  }
  public set username3(value: string) {
    this._username3 = value;
  }
  public resetUsername3() {
    this._username3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get username3Input() {
    return this._username3;
  }

  // when - computed: true, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      days: cdktf.listMapper(cdktf.stringToTerraform, false)(this._days),
      del_files: cdktf.stringToTerraform(this._delFiles),
      directory: cdktf.stringToTerraform(this._directory),
      file_size: cdktf.numberToTerraform(this._fileSize),
      gzip_format: cdktf.stringToTerraform(this._gzipFormat),
      hour: cdktf.numberToTerraform(this._hour),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip2: cdktf.stringToTerraform(this._ip2),
      ip3: cdktf.stringToTerraform(this._ip3),
      log_format: cdktf.stringToTerraform(this._logFormat),
      min: cdktf.numberToTerraform(this._min),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      password2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password2),
      password3: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password3),
      port: cdktf.numberToTerraform(this._port),
      port2: cdktf.numberToTerraform(this._port2),
      port3: cdktf.numberToTerraform(this._port3),
      rolling_upgrade_status: cdktf.numberToTerraform(this._rollingUpgradeStatus),
      server: cdktf.stringToTerraform(this._server),
      server2: cdktf.stringToTerraform(this._server2),
      server3: cdktf.stringToTerraform(this._server3),
      server_type: cdktf.stringToTerraform(this._serverType),
      upload: cdktf.stringToTerraform(this._upload),
      upload_hour: cdktf.numberToTerraform(this._uploadHour),
      upload_mode: cdktf.stringToTerraform(this._uploadMode),
      upload_trigger: cdktf.stringToTerraform(this._uploadTrigger),
      username: cdktf.stringToTerraform(this._username),
      username2: cdktf.stringToTerraform(this._username2),
      username3: cdktf.stringToTerraform(this._username3),
      when: cdktf.stringToTerraform(this._when),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      days: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._days),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      del_files: {
        value: cdktf.stringToHclTerraform(this._delFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_size: {
        value: cdktf.numberToHclTerraform(this._fileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gzip_format: {
        value: cdktf.stringToHclTerraform(this._gzipFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hour: {
        value: cdktf.numberToHclTerraform(this._hour),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip2: {
        value: cdktf.stringToHclTerraform(this._ip2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip3: {
        value: cdktf.stringToHclTerraform(this._ip3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_format: {
        value: cdktf.stringToHclTerraform(this._logFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min: {
        value: cdktf.numberToHclTerraform(this._min),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password3: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password3),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port2: {
        value: cdktf.numberToHclTerraform(this._port2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port3: {
        value: cdktf.numberToHclTerraform(this._port3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rolling_upgrade_status: {
        value: cdktf.numberToHclTerraform(this._rollingUpgradeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server2: {
        value: cdktf.stringToHclTerraform(this._server2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server3: {
        value: cdktf.stringToHclTerraform(this._server3),
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
      upload: {
        value: cdktf.stringToHclTerraform(this._upload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_hour: {
        value: cdktf.numberToHclTerraform(this._uploadHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upload_mode: {
        value: cdktf.stringToHclTerraform(this._uploadMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_trigger: {
        value: cdktf.stringToHclTerraform(this._uploadTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username2: {
        value: cdktf.stringToHclTerraform(this._username2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username3: {
        value: cdktf.stringToHclTerraform(this._username3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      when: {
        value: cdktf.stringToHclTerraform(this._when),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
