// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_syslog_time_msec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSyslogTimeMsecAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_syslog_time_msec#enable_flag SystemSyslogTimeMsecA#enable_flag}
  */
  readonly enableFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_syslog_time_msec#id SystemSyslogTimeMsecA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_syslog_time_msec thunder_system_syslog_time_msec}
*/
export class SystemSyslogTimeMsecA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_syslog_time_msec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSyslogTimeMsecA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSyslogTimeMsecA to import
  * @param importFromId The id of the existing SystemSyslogTimeMsecA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_syslog_time_msec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSyslogTimeMsecA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_syslog_time_msec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_syslog_time_msec thunder_system_syslog_time_msec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSyslogTimeMsecAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSyslogTimeMsecAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_syslog_time_msec',
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
    this._enableFlag = config.enableFlag;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_flag - computed: false, optional: true, required: false
  private _enableFlag?: number; 
  public get enableFlag() {
    return this.getNumberAttribute('enable_flag');
  }
  public set enableFlag(value: number) {
    this._enableFlag = value;
  }
  public resetEnableFlag() {
    this._enableFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFlagInput() {
    return this._enableFlag;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_flag: cdktf.numberToTerraform(this._enableFlag),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_flag: {
        value: cdktf.numberToHclTerraform(this._enableFlag),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
