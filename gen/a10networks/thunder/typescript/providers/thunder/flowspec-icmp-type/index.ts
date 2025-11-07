// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowspecIcmpTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'eq': Match only packets on a given ICMP Type; 'gt': Match only packets with a greater ICMP Type; 'lt': Match only packets with a lower ICMP Type; 'range': match only packets in the range of ICMP Types;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_type#icmp_type_attribute FlowspecIcmpType#icmp_type_attribute}
  */
  readonly icmpTypeAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_type#id FlowspecIcmpType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_type#name FlowspecIcmpType#name}
  */
  readonly name: string;
  /**
  * Specify the ICMP Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_type#type FlowspecIcmpType#type}
  */
  readonly type: number;
  /**
  * Specify the ICMP Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_type#type_end FlowspecIcmpType#type_end}
  */
  readonly typeEnd?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_type#uuid FlowspecIcmpType#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_type thunder_flowspec_icmp_type}
*/
export class FlowspecIcmpType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_flowspec_icmp_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowspecIcmpType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowspecIcmpType to import
  * @param importFromId The id of the existing FlowspecIcmpType that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowspecIcmpType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_flowspec_icmp_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_type thunder_flowspec_icmp_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowspecIcmpTypeConfig
  */
  public constructor(scope: Construct, id: string, config: FlowspecIcmpTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_flowspec_icmp_type',
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
    this._icmpTypeAttribute = config.icmpTypeAttribute;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._typeEnd = config.typeEnd;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // icmp_type_attribute - computed: false, optional: false, required: true
  private _icmpTypeAttribute?: string; 
  public get icmpTypeAttribute() {
    return this.getStringAttribute('icmp_type_attribute');
  }
  public set icmpTypeAttribute(value: string) {
    this._icmpTypeAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeAttributeInput() {
    return this._icmpTypeAttribute;
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

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_end - computed: false, optional: true, required: false
  private _typeEnd?: number; 
  public get typeEnd() {
    return this.getNumberAttribute('type_end');
  }
  public set typeEnd(value: number) {
    this._typeEnd = value;
  }
  public resetTypeEnd() {
    this._typeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeEndInput() {
    return this._typeEnd;
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
      icmp_type_attribute: cdktf.stringToTerraform(this._icmpTypeAttribute),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.numberToTerraform(this._type),
      type_end: cdktf.numberToTerraform(this._typeEnd),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icmp_type_attribute: {
        value: cdktf.stringToHclTerraform(this._icmpTypeAttribute),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_end: {
        value: cdktf.numberToHclTerraform(this._typeEnd),
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
