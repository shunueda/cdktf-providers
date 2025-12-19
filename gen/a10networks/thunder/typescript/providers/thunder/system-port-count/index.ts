// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_port_count
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPortCountAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_port_count#id SystemPortCountA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Total Ports to be allocated for alg types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_port_count#port_count_alg SystemPortCountA#port_count_alg}
  */
  readonly portCountAlg?: number;
  /**
  * Total Ports to be allocated for hm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_port_count#port_count_hm SystemPortCountA#port_count_hm}
  */
  readonly portCountHm?: number;
  /**
  * Total Ports to be allocated for kernel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_port_count#port_count_kernel SystemPortCountA#port_count_kernel}
  */
  readonly portCountKernel?: number;
  /**
  * Total Ports to be allocated for logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_port_count#port_count_logging SystemPortCountA#port_count_logging}
  */
  readonly portCountLogging?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_port_count#uuid SystemPortCountA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_port_count thunder_system_port_count}
*/
export class SystemPortCountA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_port_count";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPortCountA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPortCountA to import
  * @param importFromId The id of the existing SystemPortCountA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_port_count#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPortCountA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_port_count", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_port_count thunder_system_port_count} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPortCountAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemPortCountAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_port_count',
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
    this._portCountAlg = config.portCountAlg;
    this._portCountHm = config.portCountHm;
    this._portCountKernel = config.portCountKernel;
    this._portCountLogging = config.portCountLogging;
    this._uuid = config.uuid;
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

  // port_count_alg - computed: false, optional: true, required: false
  private _portCountAlg?: number; 
  public get portCountAlg() {
    return this.getNumberAttribute('port_count_alg');
  }
  public set portCountAlg(value: number) {
    this._portCountAlg = value;
  }
  public resetPortCountAlg() {
    this._portCountAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountAlgInput() {
    return this._portCountAlg;
  }

  // port_count_hm - computed: false, optional: true, required: false
  private _portCountHm?: number; 
  public get portCountHm() {
    return this.getNumberAttribute('port_count_hm');
  }
  public set portCountHm(value: number) {
    this._portCountHm = value;
  }
  public resetPortCountHm() {
    this._portCountHm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountHmInput() {
    return this._portCountHm;
  }

  // port_count_kernel - computed: false, optional: true, required: false
  private _portCountKernel?: number; 
  public get portCountKernel() {
    return this.getNumberAttribute('port_count_kernel');
  }
  public set portCountKernel(value: number) {
    this._portCountKernel = value;
  }
  public resetPortCountKernel() {
    this._portCountKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountKernelInput() {
    return this._portCountKernel;
  }

  // port_count_logging - computed: false, optional: true, required: false
  private _portCountLogging?: number; 
  public get portCountLogging() {
    return this.getNumberAttribute('port_count_logging');
  }
  public set portCountLogging(value: number) {
    this._portCountLogging = value;
  }
  public resetPortCountLogging() {
    this._portCountLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountLoggingInput() {
    return this._portCountLogging;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port_count_alg: cdktf.numberToTerraform(this._portCountAlg),
      port_count_hm: cdktf.numberToTerraform(this._portCountHm),
      port_count_kernel: cdktf.numberToTerraform(this._portCountKernel),
      port_count_logging: cdktf.numberToTerraform(this._portCountLogging),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      port_count_alg: {
        value: cdktf.numberToHclTerraform(this._portCountAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_count_hm: {
        value: cdktf.numberToHclTerraform(this._portCountHm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_count_kernel: {
        value: cdktf.numberToHclTerraform(this._portCountKernel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_count_logging: {
        value: cdktf.numberToHclTerraform(this._portCountLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
