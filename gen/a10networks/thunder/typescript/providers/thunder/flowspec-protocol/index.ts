// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_protocol
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowspecProtocolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_protocol#id FlowspecProtocol#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_protocol#name FlowspecProtocol#name}
  */
  readonly name: string;
  /**
  * 'eq': Match only packets on a given protocol; 'gt': Match only packets with a greater protocol number; 'lt': Match only packets with a lower protocol number; 'range': match only packets in the range of protocol numbers;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_protocol#proto_attribute FlowspecProtocol#proto_attribute}
  */
  readonly protoAttribute: string;
  /**
  * Specify the protocol number(6 for TCP and 17 for UDP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_protocol#proto_num FlowspecProtocol#proto_num}
  */
  readonly protoNum: number;
  /**
  * Specify the protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_protocol#proto_num_end FlowspecProtocol#proto_num_end}
  */
  readonly protoNumEnd?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_protocol#uuid FlowspecProtocol#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_protocol thunder_flowspec_protocol}
*/
export class FlowspecProtocol extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_flowspec_protocol";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowspecProtocol resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowspecProtocol to import
  * @param importFromId The id of the existing FlowspecProtocol that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_protocol#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowspecProtocol to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_flowspec_protocol", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_protocol thunder_flowspec_protocol} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowspecProtocolConfig
  */
  public constructor(scope: Construct, id: string, config: FlowspecProtocolConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_flowspec_protocol',
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
    this._name = config.name;
    this._protoAttribute = config.protoAttribute;
    this._protoNum = config.protoNum;
    this._protoNumEnd = config.protoNumEnd;
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

  // proto_attribute - computed: false, optional: false, required: true
  private _protoAttribute?: string; 
  public get protoAttribute() {
    return this.getStringAttribute('proto_attribute');
  }
  public set protoAttribute(value: string) {
    this._protoAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoAttributeInput() {
    return this._protoAttribute;
  }

  // proto_num - computed: false, optional: false, required: true
  private _protoNum?: number; 
  public get protoNum() {
    return this.getNumberAttribute('proto_num');
  }
  public set protoNum(value: number) {
    this._protoNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoNumInput() {
    return this._protoNum;
  }

  // proto_num_end - computed: false, optional: true, required: false
  private _protoNumEnd?: number; 
  public get protoNumEnd() {
    return this.getNumberAttribute('proto_num_end');
  }
  public set protoNumEnd(value: number) {
    this._protoNumEnd = value;
  }
  public resetProtoNumEnd() {
    this._protoNumEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoNumEndInput() {
    return this._protoNumEnd;
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
      name: cdktf.stringToTerraform(this._name),
      proto_attribute: cdktf.stringToTerraform(this._protoAttribute),
      proto_num: cdktf.numberToTerraform(this._protoNum),
      proto_num_end: cdktf.numberToTerraform(this._protoNumEnd),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proto_attribute: {
        value: cdktf.stringToHclTerraform(this._protoAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proto_num: {
        value: cdktf.numberToHclTerraform(this._protoNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proto_num_end: {
        value: cdktf.numberToHclTerraform(this._protoNumEnd),
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
