// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/multi_ctrl_cpu
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MultiCtrlCpuConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/multi_ctrl_cpu#id MultiCtrlCpu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set number of control CPUs. Default is lowest possible. Limits are platform dependent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/multi_ctrl_cpu#num_ctrl_cpus MultiCtrlCpu#num_ctrl_cpus}
  */
  readonly numCtrlCpus?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/multi_ctrl_cpu thunder_multi_ctrl_cpu}
*/
export class MultiCtrlCpu extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_multi_ctrl_cpu";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MultiCtrlCpu resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MultiCtrlCpu to import
  * @param importFromId The id of the existing MultiCtrlCpu that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/multi_ctrl_cpu#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MultiCtrlCpu to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_multi_ctrl_cpu", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/multi_ctrl_cpu thunder_multi_ctrl_cpu} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MultiCtrlCpuConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MultiCtrlCpuConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_multi_ctrl_cpu',
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
    this._id = config.id;
    this._numCtrlCpus = config.numCtrlCpus;
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

  // num_ctrl_cpus - computed: false, optional: true, required: false
  private _numCtrlCpus?: number; 
  public get numCtrlCpus() {
    return this.getNumberAttribute('num_ctrl_cpus');
  }
  public set numCtrlCpus(value: number) {
    this._numCtrlCpus = value;
  }
  public resetNumCtrlCpus() {
    this._numCtrlCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCtrlCpusInput() {
    return this._numCtrlCpus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      num_ctrl_cpus: cdktf.numberToTerraform(this._numCtrlCpus),
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
      num_ctrl_cpus: {
        value: cdktf.numberToHclTerraform(this._numCtrlCpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
