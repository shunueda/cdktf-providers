// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_l2_bfd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkL2BfdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ethernet paylaod type for L2BFD packets, help-val 16 bit hex value, default is hex 88B6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_l2_bfd#ether_type NetworkL2Bfd#ether_type}
  */
  readonly etherType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_l2_bfd#id NetworkL2Bfd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Multiplier value used to compute holddown (value used to multiply the interval (default: 4))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_l2_bfd#multiplier NetworkL2Bfd#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Minimum receive interval capability (Milliseconds (default: 800))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_l2_bfd#rx_interval NetworkL2Bfd#rx_interval}
  */
  readonly rxInterval?: number;
  /**
  * Transmit interval between BFD packets (Milliseconds (default: 800))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_l2_bfd#tx_interval NetworkL2Bfd#tx_interval}
  */
  readonly txInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_l2_bfd#uuid NetworkL2Bfd#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_l2_bfd thunder_network_l2_bfd}
*/
export class NetworkL2Bfd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_l2_bfd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkL2Bfd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkL2Bfd to import
  * @param importFromId The id of the existing NetworkL2Bfd that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_l2_bfd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkL2Bfd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_l2_bfd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_l2_bfd thunder_network_l2_bfd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkL2BfdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkL2BfdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_l2_bfd',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._etherType = config.etherType;
    this._id = config.id;
    this._multiplier = config.multiplier;
    this._rxInterval = config.rxInterval;
    this._txInterval = config.txInterval;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ether_type - computed: false, optional: true, required: false
  private _etherType?: string; 
  public get etherType() {
    return this.getStringAttribute('ether_type');
  }
  public set etherType(value: string) {
    this._etherType = value;
  }
  public resetEtherType() {
    this._etherType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etherTypeInput() {
    return this._etherType;
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

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // rx_interval - computed: false, optional: true, required: false
  private _rxInterval?: number; 
  public get rxInterval() {
    return this.getNumberAttribute('rx_interval');
  }
  public set rxInterval(value: number) {
    this._rxInterval = value;
  }
  public resetRxInterval() {
    this._rxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxIntervalInput() {
    return this._rxInterval;
  }

  // tx_interval - computed: false, optional: true, required: false
  private _txInterval?: number; 
  public get txInterval() {
    return this.getNumberAttribute('tx_interval');
  }
  public set txInterval(value: number) {
    this._txInterval = value;
  }
  public resetTxInterval() {
    this._txInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txIntervalInput() {
    return this._txInterval;
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
      ether_type: cdktf.stringToTerraform(this._etherType),
      id: cdktf.stringToTerraform(this._id),
      multiplier: cdktf.numberToTerraform(this._multiplier),
      rx_interval: cdktf.numberToTerraform(this._rxInterval),
      tx_interval: cdktf.numberToTerraform(this._txInterval),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ether_type: {
        value: cdktf.stringToHclTerraform(this._etherType),
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
      multiplier: {
        value: cdktf.numberToHclTerraform(this._multiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_interval: {
        value: cdktf.numberToHclTerraform(this._rxInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tx_interval: {
        value: cdktf.numberToHclTerraform(this._txInterval),
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
