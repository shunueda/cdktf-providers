// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_tacacsaccounting3_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogTacacsaccounting3FilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_tacacsaccounting3_filter#cli_cmd_audit LogTacacsaccounting3Filter#cli_cmd_audit}
  */
  readonly cliCmdAudit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_tacacsaccounting3_filter#config_change_audit LogTacacsaccounting3Filter#config_change_audit}
  */
  readonly configChangeAudit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_tacacsaccounting3_filter#device_name LogTacacsaccounting3Filter#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_tacacsaccounting3_filter#device_vdom LogTacacsaccounting3Filter#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_tacacsaccounting3_filter#id LogTacacsaccounting3Filter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_tacacsaccounting3_filter#login_audit LogTacacsaccounting3Filter#login_audit}
  */
  readonly loginAudit?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_tacacsaccounting3_filter fmgdevice_log_tacacsaccounting3_filter}
*/
export class LogTacacsaccounting3Filter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_log_tacacsaccounting3_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogTacacsaccounting3Filter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogTacacsaccounting3Filter to import
  * @param importFromId The id of the existing LogTacacsaccounting3Filter that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_tacacsaccounting3_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogTacacsaccounting3Filter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_log_tacacsaccounting3_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_tacacsaccounting3_filter fmgdevice_log_tacacsaccounting3_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogTacacsaccounting3FilterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogTacacsaccounting3FilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_log_tacacsaccounting3_filter',
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
    this._cliCmdAudit = config.cliCmdAudit;
    this._configChangeAudit = config.configChangeAudit;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._loginAudit = config.loginAudit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cli_cmd_audit - computed: false, optional: true, required: false
  private _cliCmdAudit?: string; 
  public get cliCmdAudit() {
    return this.getStringAttribute('cli_cmd_audit');
  }
  public set cliCmdAudit(value: string) {
    this._cliCmdAudit = value;
  }
  public resetCliCmdAudit() {
    this._cliCmdAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliCmdAuditInput() {
    return this._cliCmdAudit;
  }

  // config_change_audit - computed: true, optional: true, required: false
  private _configChangeAudit?: string; 
  public get configChangeAudit() {
    return this.getStringAttribute('config_change_audit');
  }
  public set configChangeAudit(value: string) {
    this._configChangeAudit = value;
  }
  public resetConfigChangeAudit() {
    this._configChangeAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configChangeAuditInput() {
    return this._configChangeAudit;
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

  // login_audit - computed: true, optional: true, required: false
  private _loginAudit?: string; 
  public get loginAudit() {
    return this.getStringAttribute('login_audit');
  }
  public set loginAudit(value: string) {
    this._loginAudit = value;
  }
  public resetLoginAudit() {
    this._loginAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAuditInput() {
    return this._loginAudit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cli_cmd_audit: cdktf.stringToTerraform(this._cliCmdAudit),
      config_change_audit: cdktf.stringToTerraform(this._configChangeAudit),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      login_audit: cdktf.stringToTerraform(this._loginAudit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cli_cmd_audit: {
        value: cdktf.stringToHclTerraform(this._cliCmdAudit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_change_audit: {
        value: cdktf.stringToHclTerraform(this._configChangeAudit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_audit: {
        value: cdktf.stringToHclTerraform(this._loginAudit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
