// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/systemsnmp_sysinfo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchSystemsnmpSysinfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/systemsnmp_sysinfo#id DataFortiswitchSystemsnmpSysinfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/systemsnmp_sysinfo fortiswitch_systemsnmp_sysinfo}
*/
export class DataFortiswitchSystemsnmpSysinfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_systemsnmp_sysinfo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchSystemsnmpSysinfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchSystemsnmpSysinfo to import
  * @param importFromId The id of the existing DataFortiswitchSystemsnmpSysinfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/systemsnmp_sysinfo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchSystemsnmpSysinfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_systemsnmp_sysinfo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/systemsnmp_sysinfo fortiswitch_systemsnmp_sysinfo} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchSystemsnmpSysinfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchSystemsnmpSysinfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_systemsnmp_sysinfo',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_info - computed: true, optional: false, required: false
  public get contactInfo() {
    return this.getStringAttribute('contact_info');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getStringAttribute('engine_id');
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // trap_high_cpu_interval - computed: true, optional: false, required: false
  public get trapHighCpuInterval() {
    return this.getStringAttribute('trap_high_cpu_interval');
  }

  // trap_high_cpu_threshold - computed: true, optional: false, required: false
  public get trapHighCpuThreshold() {
    return this.getNumberAttribute('trap_high_cpu_threshold');
  }

  // trap_log_full_threshold - computed: true, optional: false, required: false
  public get trapLogFullThreshold() {
    return this.getNumberAttribute('trap_log_full_threshold');
  }

  // trap_low_memory_threshold - computed: true, optional: false, required: false
  public get trapLowMemoryThreshold() {
    return this.getNumberAttribute('trap_low_memory_threshold');
  }

  // trap_temp_alarm_threshold - computed: true, optional: false, required: false
  public get trapTempAlarmThreshold() {
    return this.getNumberAttribute('trap_temp_alarm_threshold');
  }

  // trap_temp_warning_threshold - computed: true, optional: false, required: false
  public get trapTempWarningThreshold() {
    return this.getNumberAttribute('trap_temp_warning_threshold');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
