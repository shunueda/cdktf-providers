// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_rxtx_desc_size
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSetRxtxDescSizeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_rxtx_desc_size#id SystemSetRxtxDescSizeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * port index to be configured (Specify port index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_rxtx_desc_size#port_index SystemSetRxtxDescSizeA#port_index}
  */
  readonly portIndex?: number;
  /**
  * Set new rx-descriptor size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_rxtx_desc_size#rxd_size SystemSetRxtxDescSizeA#rxd_size}
  */
  readonly rxdSize?: number;
  /**
  * Set new tx-descriptor size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_rxtx_desc_size#txd_size SystemSetRxtxDescSizeA#txd_size}
  */
  readonly txdSize?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_rxtx_desc_size thunder_system_set_rxtx_desc_size}
*/
export class SystemSetRxtxDescSizeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_set_rxtx_desc_size";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSetRxtxDescSizeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSetRxtxDescSizeA to import
  * @param importFromId The id of the existing SystemSetRxtxDescSizeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_rxtx_desc_size#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSetRxtxDescSizeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_set_rxtx_desc_size", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_set_rxtx_desc_size thunder_system_set_rxtx_desc_size} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSetRxtxDescSizeAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSetRxtxDescSizeAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_set_rxtx_desc_size',
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
    this._portIndex = config.portIndex;
    this._rxdSize = config.rxdSize;
    this._txdSize = config.txdSize;
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

  // rxd_size - computed: false, optional: true, required: false
  private _rxdSize?: number; 
  public get rxdSize() {
    return this.getNumberAttribute('rxd_size');
  }
  public set rxdSize(value: number) {
    this._rxdSize = value;
  }
  public resetRxdSize() {
    this._rxdSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxdSizeInput() {
    return this._rxdSize;
  }

  // txd_size - computed: false, optional: true, required: false
  private _txdSize?: number; 
  public get txdSize() {
    return this.getNumberAttribute('txd_size');
  }
  public set txdSize(value: number) {
    this._txdSize = value;
  }
  public resetTxdSize() {
    this._txdSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txdSizeInput() {
    return this._txdSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port_index: cdktf.numberToTerraform(this._portIndex),
      rxd_size: cdktf.numberToTerraform(this._rxdSize),
      txd_size: cdktf.numberToTerraform(this._txdSize),
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
      rxd_size: {
        value: cdktf.numberToHclTerraform(this._rxdSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      txd_size: {
        value: cdktf.numberToHclTerraform(this._txdSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
