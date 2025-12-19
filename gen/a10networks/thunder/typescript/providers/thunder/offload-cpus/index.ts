// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/offload_cpus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OffloadCpusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/offload_cpus#id OffloadCpus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set number of offload CPUs. Max limit is platform dependent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/offload_cpus#num_offload_cpus OffloadCpus#num_offload_cpus}
  */
  readonly numOffloadCpus?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/offload_cpus thunder_offload_cpus}
*/
export class OffloadCpus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_offload_cpus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OffloadCpus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OffloadCpus to import
  * @param importFromId The id of the existing OffloadCpus that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/offload_cpus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OffloadCpus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_offload_cpus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/offload_cpus thunder_offload_cpus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OffloadCpusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OffloadCpusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_offload_cpus',
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
    this._numOffloadCpus = config.numOffloadCpus;
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

  // num_offload_cpus - computed: false, optional: true, required: false
  private _numOffloadCpus?: number; 
  public get numOffloadCpus() {
    return this.getNumberAttribute('num_offload_cpus');
  }
  public set numOffloadCpus(value: number) {
    this._numOffloadCpus = value;
  }
  public resetNumOffloadCpus() {
    this._numOffloadCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOffloadCpusInput() {
    return this._numOffloadCpus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      num_offload_cpus: cdktf.numberToTerraform(this._numOffloadCpus),
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
      num_offload_cpus: {
        value: cdktf.numberToHclTerraform(this._numOffloadCpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
