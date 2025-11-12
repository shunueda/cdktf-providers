// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlpFpdocsourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#date DlpFpdocsource#date}
  */
  readonly date?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#device_name DlpFpdocsource#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#device_vdom DlpFpdocsource#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#file_path DlpFpdocsource#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#file_pattern DlpFpdocsource#file_pattern}
  */
  readonly filePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#id DlpFpdocsource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#keep_modified DlpFpdocsource#keep_modified}
  */
  readonly keepModified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#name DlpFpdocsource#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#password DlpFpdocsource#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#period DlpFpdocsource#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#remove_deleted DlpFpdocsource#remove_deleted}
  */
  readonly removeDeleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#scan_on_creation DlpFpdocsource#scan_on_creation}
  */
  readonly scanOnCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#scan_subdirectories DlpFpdocsource#scan_subdirectories}
  */
  readonly scanSubdirectories?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#sensitivity DlpFpdocsource#sensitivity}
  */
  readonly sensitivity?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#server DlpFpdocsource#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#server_type DlpFpdocsource#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#tod_hour DlpFpdocsource#tod_hour}
  */
  readonly todHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#tod_min DlpFpdocsource#tod_min}
  */
  readonly todMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#username DlpFpdocsource#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#vdom DlpFpdocsource#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#weekday DlpFpdocsource#weekday}
  */
  readonly weekday?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource fmgdevice_dlp_fpdocsource}
*/
export class DlpFpdocsource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_dlp_fpdocsource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlpFpdocsource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlpFpdocsource to import
  * @param importFromId The id of the existing DlpFpdocsource that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlpFpdocsource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_dlp_fpdocsource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_fpdocsource fmgdevice_dlp_fpdocsource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlpFpdocsourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DlpFpdocsourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_dlp_fpdocsource',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
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
    this._date = config.date;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._filePath = config.filePath;
    this._filePattern = config.filePattern;
    this._id = config.id;
    this._keepModified = config.keepModified;
    this._name = config.name;
    this._password = config.password;
    this._period = config.period;
    this._removeDeleted = config.removeDeleted;
    this._scanOnCreation = config.scanOnCreation;
    this._scanSubdirectories = config.scanSubdirectories;
    this._sensitivity = config.sensitivity;
    this._server = config.server;
    this._serverType = config.serverType;
    this._todHour = config.todHour;
    this._todMin = config.todMin;
    this._username = config.username;
    this._vdom = config.vdom;
    this._weekday = config.weekday;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date - computed: true, optional: true, required: false
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

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // file_pattern - computed: true, optional: true, required: false
  private _filePattern?: string; 
  public get filePattern() {
    return this.getStringAttribute('file_pattern');
  }
  public set filePattern(value: string) {
    this._filePattern = value;
  }
  public resetFilePattern() {
    this._filePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePatternInput() {
    return this._filePattern;
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

  // keep_modified - computed: true, optional: true, required: false
  private _keepModified?: string; 
  public get keepModified() {
    return this.getStringAttribute('keep_modified');
  }
  public set keepModified(value: string) {
    this._keepModified = value;
  }
  public resetKeepModified() {
    this._keepModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepModifiedInput() {
    return this._keepModified;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // period - computed: true, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // remove_deleted - computed: true, optional: true, required: false
  private _removeDeleted?: string; 
  public get removeDeleted() {
    return this.getStringAttribute('remove_deleted');
  }
  public set removeDeleted(value: string) {
    this._removeDeleted = value;
  }
  public resetRemoveDeleted() {
    this._removeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeDeletedInput() {
    return this._removeDeleted;
  }

  // scan_on_creation - computed: true, optional: true, required: false
  private _scanOnCreation?: string; 
  public get scanOnCreation() {
    return this.getStringAttribute('scan_on_creation');
  }
  public set scanOnCreation(value: string) {
    this._scanOnCreation = value;
  }
  public resetScanOnCreation() {
    this._scanOnCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanOnCreationInput() {
    return this._scanOnCreation;
  }

  // scan_subdirectories - computed: true, optional: true, required: false
  private _scanSubdirectories?: string; 
  public get scanSubdirectories() {
    return this.getStringAttribute('scan_subdirectories');
  }
  public set scanSubdirectories(value: string) {
    this._scanSubdirectories = value;
  }
  public resetScanSubdirectories() {
    this._scanSubdirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanSubdirectoriesInput() {
    return this._scanSubdirectories;
  }

  // sensitivity - computed: true, optional: true, required: false
  private _sensitivity?: string[]; 
  public get sensitivity() {
    return cdktf.Fn.tolist(this.getListAttribute('sensitivity'));
  }
  public set sensitivity(value: string[]) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
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

  // tod_hour - computed: true, optional: true, required: false
  private _todHour?: number; 
  public get todHour() {
    return this.getNumberAttribute('tod_hour');
  }
  public set todHour(value: number) {
    this._todHour = value;
  }
  public resetTodHour() {
    this._todHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get todHourInput() {
    return this._todHour;
  }

  // tod_min - computed: false, optional: true, required: false
  private _todMin?: number; 
  public get todMin() {
    return this.getNumberAttribute('tod_min');
  }
  public set todMin(value: number) {
    this._todMin = value;
  }
  public resetTodMin() {
    this._todMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get todMinInput() {
    return this._todMin;
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

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // weekday - computed: true, optional: true, required: false
  private _weekday?: string; 
  public get weekday() {
    return this.getStringAttribute('weekday');
  }
  public set weekday(value: string) {
    this._weekday = value;
  }
  public resetWeekday() {
    this._weekday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayInput() {
    return this._weekday;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      date: cdktf.numberToTerraform(this._date),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      file_path: cdktf.stringToTerraform(this._filePath),
      file_pattern: cdktf.stringToTerraform(this._filePattern),
      id: cdktf.stringToTerraform(this._id),
      keep_modified: cdktf.stringToTerraform(this._keepModified),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      period: cdktf.stringToTerraform(this._period),
      remove_deleted: cdktf.stringToTerraform(this._removeDeleted),
      scan_on_creation: cdktf.stringToTerraform(this._scanOnCreation),
      scan_subdirectories: cdktf.stringToTerraform(this._scanSubdirectories),
      sensitivity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitivity),
      server: cdktf.stringToTerraform(this._server),
      server_type: cdktf.stringToTerraform(this._serverType),
      tod_hour: cdktf.numberToTerraform(this._todHour),
      tod_min: cdktf.numberToTerraform(this._todMin),
      username: cdktf.stringToTerraform(this._username),
      vdom: cdktf.stringToTerraform(this._vdom),
      weekday: cdktf.stringToTerraform(this._weekday),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      date: {
        value: cdktf.numberToHclTerraform(this._date),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_pattern: {
        value: cdktf.stringToHclTerraform(this._filePattern),
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
      keep_modified: {
        value: cdktf.stringToHclTerraform(this._keepModified),
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
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_deleted: {
        value: cdktf.stringToHclTerraform(this._removeDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_on_creation: {
        value: cdktf.stringToHclTerraform(this._scanOnCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_subdirectories: {
        value: cdktf.stringToHclTerraform(this._scanSubdirectories),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitivity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sensitivity),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
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
      tod_hour: {
        value: cdktf.numberToHclTerraform(this._todHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tod_min: {
        value: cdktf.numberToHclTerraform(this._todMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weekday: {
        value: cdktf.stringToHclTerraform(this._weekday),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
