// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_code
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowspecIcmpCodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the ICMP Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_code#code FlowspecIcmpCode#code}
  */
  readonly code: number;
  /**
  * Specify the ICMP Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_code#code_end FlowspecIcmpCode#code_end}
  */
  readonly codeEnd?: number;
  /**
  * 'eq': Match only packets on a given ICMP Code; 'gt': Match only packets with a greater ICMP Code; 'lt': Match only packets with a lower ICMP Code; 'range': match only packets in the range of ICMP Codes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_code#icmp_code_attribute FlowspecIcmpCode#icmp_code_attribute}
  */
  readonly icmpCodeAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_code#id FlowspecIcmpCode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_code#name FlowspecIcmpCode#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_code#uuid FlowspecIcmpCode#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_code thunder_flowspec_icmp_code}
*/
export class FlowspecIcmpCode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_flowspec_icmp_code";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowspecIcmpCode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowspecIcmpCode to import
  * @param importFromId The id of the existing FlowspecIcmpCode that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_code#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowspecIcmpCode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_flowspec_icmp_code", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_icmp_code thunder_flowspec_icmp_code} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowspecIcmpCodeConfig
  */
  public constructor(scope: Construct, id: string, config: FlowspecIcmpCodeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_flowspec_icmp_code',
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
    this._code = config.code;
    this._codeEnd = config.codeEnd;
    this._icmpCodeAttribute = config.icmpCodeAttribute;
    this._id = config.id;
    this._name = config.name;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // code_end - computed: false, optional: true, required: false
  private _codeEnd?: number; 
  public get codeEnd() {
    return this.getNumberAttribute('code_end');
  }
  public set codeEnd(value: number) {
    this._codeEnd = value;
  }
  public resetCodeEnd() {
    this._codeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEndInput() {
    return this._codeEnd;
  }

  // icmp_code_attribute - computed: false, optional: false, required: true
  private _icmpCodeAttribute?: string; 
  public get icmpCodeAttribute() {
    return this.getStringAttribute('icmp_code_attribute');
  }
  public set icmpCodeAttribute(value: string) {
    this._icmpCodeAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeAttributeInput() {
    return this._icmpCodeAttribute;
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
      code: cdktf.numberToTerraform(this._code),
      code_end: cdktf.numberToTerraform(this._codeEnd),
      icmp_code_attribute: cdktf.stringToTerraform(this._icmpCodeAttribute),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      code: {
        value: cdktf.numberToHclTerraform(this._code),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      code_end: {
        value: cdktf.numberToHclTerraform(this._codeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_code_attribute: {
        value: cdktf.stringToHclTerraform(this._icmpCodeAttribute),
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
