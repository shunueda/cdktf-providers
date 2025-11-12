// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_set_rxtx_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSetRxtxQueueAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_set_rxtx_queue#id SystemSetRxtxQueueA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * port index to be configured (Specify port index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_set_rxtx_queue#port_index SystemSetRxtxQueueA#port_index}
  */
  readonly portIndex?: number;
  /**
  * Set number of new rx queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_set_rxtx_queue#rxq_size SystemSetRxtxQueueA#rxq_size}
  */
  readonly rxqSize?: number;
  /**
  * Set number of new tx queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_set_rxtx_queue#txq_size SystemSetRxtxQueueA#txq_size}
  */
  readonly txqSize?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_set_rxtx_queue thunder_system_set_rxtx_queue}
*/
export class SystemSetRxtxQueueA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_set_rxtx_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSetRxtxQueueA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSetRxtxQueueA to import
  * @param importFromId The id of the existing SystemSetRxtxQueueA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_set_rxtx_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSetRxtxQueueA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_set_rxtx_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_set_rxtx_queue thunder_system_set_rxtx_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSetRxtxQueueAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSetRxtxQueueAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_set_rxtx_queue',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._portIndex = config.portIndex;
    this._rxqSize = config.rxqSize;
    this._txqSize = config.txqSize;
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

  // port_index - computed: false, optional: true, required: false
  private _portIndex?: number; 
  public get portIndex() {
    return this.getNumberAttribute('port_index');
  }
  public set portIndex(value: number) {
    this._portIndex = value;
  }
  public resetPortIndex() {
    this._portIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndexInput() {
    return this._portIndex;
  }

  // rxq_size - computed: false, optional: true, required: false
  private _rxqSize?: number; 
  public get rxqSize() {
    return this.getNumberAttribute('rxq_size');
  }
  public set rxqSize(value: number) {
    this._rxqSize = value;
  }
  public resetRxqSize() {
    this._rxqSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxqSizeInput() {
    return this._rxqSize;
  }

  // txq_size - computed: false, optional: true, required: false
  private _txqSize?: number; 
  public get txqSize() {
    return this.getNumberAttribute('txq_size');
  }
  public set txqSize(value: number) {
    this._txqSize = value;
  }
  public resetTxqSize() {
    this._txqSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txqSizeInput() {
    return this._txqSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port_index: cdktf.numberToTerraform(this._portIndex),
      rxq_size: cdktf.numberToTerraform(this._rxqSize),
      txq_size: cdktf.numberToTerraform(this._txqSize),
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
      port_index: {
        value: cdktf.numberToHclTerraform(this._portIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rxq_size: {
        value: cdktf.numberToHclTerraform(this._rxqSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      txq_size: {
        value: cdktf.numberToHclTerraform(this._txqSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
