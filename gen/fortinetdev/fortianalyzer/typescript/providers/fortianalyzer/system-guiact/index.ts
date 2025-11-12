// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemGuiactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact#backup_all SystemGuiact#backup_all}
  */
  readonly backupAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact#backup_conf SystemGuiact#backup_conf}
  */
  readonly backupConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact#eventlog_msg SystemGuiact#eventlog_msg}
  */
  readonly eventlogMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact#eventlog_path SystemGuiact#eventlog_path}
  */
  readonly eventlogPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact#id SystemGuiact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact#reboot SystemGuiact#reboot}
  */
  readonly reboot?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact#reset2default SystemGuiact#reset2default}
  */
  readonly reset2Default?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact#restore_all SystemGuiact#restore_all}
  */
  readonly restoreAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact#restore_conf SystemGuiact#restore_conf}
  */
  readonly restoreConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact#time SystemGuiact#time}
  */
  readonly time?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact fortianalyzer_system_guiact}
*/
export class SystemGuiact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_guiact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemGuiact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemGuiact to import
  * @param importFromId The id of the existing SystemGuiact that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemGuiact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_guiact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_guiact fortianalyzer_system_guiact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemGuiactConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemGuiactConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_guiact',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupAll = config.backupAll;
    this._backupConf = config.backupConf;
    this._eventlogMsg = config.eventlogMsg;
    this._eventlogPath = config.eventlogPath;
    this._id = config.id;
    this._reboot = config.reboot;
    this._reset2Default = config.reset2Default;
    this._restoreAll = config.restoreAll;
    this._restoreConf = config.restoreConf;
    this._time = config.time;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_all - computed: false, optional: true, required: false
  private _backupAll?: string; 
  public get backupAll() {
    return this.getStringAttribute('backup_all');
  }
  public set backupAll(value: string) {
    this._backupAll = value;
  }
  public resetBackupAll() {
    this._backupAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAllInput() {
    return this._backupAll;
  }

  // backup_conf - computed: false, optional: true, required: false
  private _backupConf?: string; 
  public get backupConf() {
    return this.getStringAttribute('backup_conf');
  }
  public set backupConf(value: string) {
    this._backupConf = value;
  }
  public resetBackupConf() {
    this._backupConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfInput() {
    return this._backupConf;
  }

  // eventlog_msg - computed: false, optional: true, required: false
  private _eventlogMsg?: string; 
  public get eventlogMsg() {
    return this.getStringAttribute('eventlog_msg');
  }
  public set eventlogMsg(value: string) {
    this._eventlogMsg = value;
  }
  public resetEventlogMsg() {
    this._eventlogMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventlogMsgInput() {
    return this._eventlogMsg;
  }

  // eventlog_path - computed: false, optional: true, required: false
  private _eventlogPath?: string; 
  public get eventlogPath() {
    return this.getStringAttribute('eventlog_path');
  }
  public set eventlogPath(value: string) {
    this._eventlogPath = value;
  }
  public resetEventlogPath() {
    this._eventlogPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventlogPathInput() {
    return this._eventlogPath;
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

  // reboot - computed: false, optional: true, required: false
  private _reboot?: number; 
  public get reboot() {
    return this.getNumberAttribute('reboot');
  }
  public set reboot(value: number) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }

  // reset2default - computed: false, optional: true, required: false
  private _reset2Default?: number; 
  public get reset2Default() {
    return this.getNumberAttribute('reset2default');
  }
  public set reset2Default(value: number) {
    this._reset2Default = value;
  }
  public resetReset2Default() {
    this._reset2Default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reset2DefaultInput() {
    return this._reset2Default;
  }

  // restore_all - computed: false, optional: true, required: false
  private _restoreAll?: string; 
  public get restoreAll() {
    return this.getStringAttribute('restore_all');
  }
  public set restoreAll(value: string) {
    this._restoreAll = value;
  }
  public resetRestoreAll() {
    this._restoreAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreAllInput() {
    return this._restoreAll;
  }

  // restore_conf - computed: false, optional: true, required: false
  private _restoreConf?: string; 
  public get restoreConf() {
    return this.getStringAttribute('restore_conf');
  }
  public set restoreConf(value: string) {
    this._restoreConf = value;
  }
  public resetRestoreConf() {
    this._restoreConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreConfInput() {
    return this._restoreConf;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_all: cdktf.stringToTerraform(this._backupAll),
      backup_conf: cdktf.stringToTerraform(this._backupConf),
      eventlog_msg: cdktf.stringToTerraform(this._eventlogMsg),
      eventlog_path: cdktf.stringToTerraform(this._eventlogPath),
      id: cdktf.stringToTerraform(this._id),
      reboot: cdktf.numberToTerraform(this._reboot),
      reset2default: cdktf.numberToTerraform(this._reset2Default),
      restore_all: cdktf.stringToTerraform(this._restoreAll),
      restore_conf: cdktf.stringToTerraform(this._restoreConf),
      time: cdktf.stringToTerraform(this._time),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_all: {
        value: cdktf.stringToHclTerraform(this._backupAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_conf: {
        value: cdktf.stringToHclTerraform(this._backupConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventlog_msg: {
        value: cdktf.stringToHclTerraform(this._eventlogMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventlog_path: {
        value: cdktf.stringToHclTerraform(this._eventlogPath),
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
      reboot: {
        value: cdktf.numberToHclTerraform(this._reboot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset2default: {
        value: cdktf.numberToHclTerraform(this._reset2Default),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restore_all: {
        value: cdktf.stringToHclTerraform(this._restoreAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_conf: {
        value: cdktf.stringToHclTerraform(this._restoreConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time: {
        value: cdktf.stringToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
