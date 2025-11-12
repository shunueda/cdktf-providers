// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_packet_length
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowspecPacketLengthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_packet_length#id FlowspecPacketLength#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the Packet Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_packet_length#length FlowspecPacketLength#length}
  */
  readonly length: number;
  /**
  * Specify the Packet Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_packet_length#length_end FlowspecPacketLength#length_end}
  */
  readonly lengthEnd?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_packet_length#name FlowspecPacketLength#name}
  */
  readonly name: string;
  /**
  * 'eq': Match only packets on a given Packet Length; 'gt': Match only packets with a greater Packet Length; 'lt': Match only packets with a lower Packet Length; 'range': match only packets in the range of Packet Lengths;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_packet_length#packet_length_attribute FlowspecPacketLength#packet_length_attribute}
  */
  readonly packetLengthAttribute: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_packet_length#uuid FlowspecPacketLength#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_packet_length thunder_flowspec_packet_length}
*/
export class FlowspecPacketLength extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_flowspec_packet_length";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowspecPacketLength resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowspecPacketLength to import
  * @param importFromId The id of the existing FlowspecPacketLength that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_packet_length#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowspecPacketLength to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_flowspec_packet_length", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_packet_length thunder_flowspec_packet_length} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowspecPacketLengthConfig
  */
  public constructor(scope: Construct, id: string, config: FlowspecPacketLengthConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_flowspec_packet_length',
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
    this._length = config.length;
    this._lengthEnd = config.lengthEnd;
    this._name = config.name;
    this._packetLengthAttribute = config.packetLengthAttribute;
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

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // length_end - computed: false, optional: true, required: false
  private _lengthEnd?: number; 
  public get lengthEnd() {
    return this.getNumberAttribute('length_end');
  }
  public set lengthEnd(value: number) {
    this._lengthEnd = value;
  }
  public resetLengthEnd() {
    this._lengthEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthEndInput() {
    return this._lengthEnd;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // packet_length_attribute - computed: false, optional: false, required: true
  private _packetLengthAttribute?: string; 
  public get packetLengthAttribute() {
    return this.getStringAttribute('packet_length_attribute');
  }
  public set packetLengthAttribute(value: string) {
    this._packetLengthAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthAttributeInput() {
    return this._packetLengthAttribute;
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
      length: cdktf.numberToTerraform(this._length),
      length_end: cdktf.numberToTerraform(this._lengthEnd),
      name: cdktf.stringToTerraform(this._name),
      packet_length_attribute: cdktf.stringToTerraform(this._packetLengthAttribute),
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
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      length_end: {
        value: cdktf.numberToHclTerraform(this._lengthEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_length_attribute: {
        value: cdktf.stringToHclTerraform(this._packetLengthAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
