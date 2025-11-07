// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmptrapthreshold
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerSnmptrapthresholdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmptrapthreshold#id SwitchcontrollerSnmptrapthreshold#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmptrapthreshold#trap_high_cpu_threshold SwitchcontrollerSnmptrapthreshold#trap_high_cpu_threshold}
  */
  readonly trapHighCpuThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmptrapthreshold#trap_log_full_threshold SwitchcontrollerSnmptrapthreshold#trap_log_full_threshold}
  */
  readonly trapLogFullThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmptrapthreshold#trap_low_memory_threshold SwitchcontrollerSnmptrapthreshold#trap_low_memory_threshold}
  */
  readonly trapLowMemoryThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmptrapthreshold#vdomparam SwitchcontrollerSnmptrapthreshold#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmptrapthreshold fortios_switchcontroller_snmptrapthreshold}
*/
export class SwitchcontrollerSnmptrapthreshold extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_snmptrapthreshold";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerSnmptrapthreshold resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerSnmptrapthreshold to import
  * @param importFromId The id of the existing SwitchcontrollerSnmptrapthreshold that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmptrapthreshold#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerSnmptrapthreshold to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_snmptrapthreshold", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_snmptrapthreshold fortios_switchcontroller_snmptrapthreshold} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerSnmptrapthresholdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerSnmptrapthresholdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_snmptrapthreshold',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._trapHighCpuThreshold = config.trapHighCpuThreshold;
    this._trapLogFullThreshold = config.trapLogFullThreshold;
    this._trapLowMemoryThreshold = config.trapLowMemoryThreshold;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // trap_high_cpu_threshold - computed: true, optional: true, required: false
  private _trapHighCpuThreshold?: number; 
  public get trapHighCpuThreshold() {
    return this.getNumberAttribute('trap_high_cpu_threshold');
  }
  public set trapHighCpuThreshold(value: number) {
    this._trapHighCpuThreshold = value;
  }
  public resetTrapHighCpuThreshold() {
    this._trapHighCpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapHighCpuThresholdInput() {
    return this._trapHighCpuThreshold;
  }

  // trap_log_full_threshold - computed: true, optional: true, required: false
  private _trapLogFullThreshold?: number; 
  public get trapLogFullThreshold() {
    return this.getNumberAttribute('trap_log_full_threshold');
  }
  public set trapLogFullThreshold(value: number) {
    this._trapLogFullThreshold = value;
  }
  public resetTrapLogFullThreshold() {
    this._trapLogFullThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapLogFullThresholdInput() {
    return this._trapLogFullThreshold;
  }

  // trap_low_memory_threshold - computed: true, optional: true, required: false
  private _trapLowMemoryThreshold?: number; 
  public get trapLowMemoryThreshold() {
    return this.getNumberAttribute('trap_low_memory_threshold');
  }
  public set trapLowMemoryThreshold(value: number) {
    this._trapLowMemoryThreshold = value;
  }
  public resetTrapLowMemoryThreshold() {
    this._trapLowMemoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapLowMemoryThresholdInput() {
    return this._trapLowMemoryThreshold;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      trap_high_cpu_threshold: cdktf.numberToTerraform(this._trapHighCpuThreshold),
      trap_log_full_threshold: cdktf.numberToTerraform(this._trapLogFullThreshold),
      trap_low_memory_threshold: cdktf.numberToTerraform(this._trapLowMemoryThreshold),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      trap_high_cpu_threshold: {
        value: cdktf.numberToHclTerraform(this._trapHighCpuThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_log_full_threshold: {
        value: cdktf.numberToHclTerraform(this._trapLogFullThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_low_memory_threshold: {
        value: cdktf.numberToHclTerraform(this._trapLowMemoryThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
