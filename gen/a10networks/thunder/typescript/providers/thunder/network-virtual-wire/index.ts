// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkVirtualWireConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire#eth1 NetworkVirtualWire#eth1}
  */
  readonly eth1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire#eth2 NetworkVirtualWire#eth2}
  */
  readonly eth2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire#group1 NetworkVirtualWire#group1}
  */
  readonly group1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire#group2 NetworkVirtualWire#group2}
  */
  readonly group2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire#id NetworkVirtualWire#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire#trunk1 NetworkVirtualWire#trunk1}
  */
  readonly trunk1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire#trunk2 NetworkVirtualWire#trunk2}
  */
  readonly trunk2?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire#user_tag NetworkVirtualWire#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire#uuid NetworkVirtualWire#uuid}
  */
  readonly uuid?: string;
  /**
  * virtual wire id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire#virtual_wire_id NetworkVirtualWire#virtual_wire_id}
  */
  readonly virtualWireId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire thunder_network_virtual_wire}
*/
export class NetworkVirtualWire extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_virtual_wire";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkVirtualWire resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkVirtualWire to import
  * @param importFromId The id of the existing NetworkVirtualWire that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkVirtualWire to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_virtual_wire", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire thunder_network_virtual_wire} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkVirtualWireConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkVirtualWireConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_virtual_wire',
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
    this._eth1 = config.eth1;
    this._eth2 = config.eth2;
    this._group1 = config.group1;
    this._group2 = config.group2;
    this._id = config.id;
    this._trunk1 = config.trunk1;
    this._trunk2 = config.trunk2;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._virtualWireId = config.virtualWireId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eth1 - computed: false, optional: true, required: false
  private _eth1?: number; 
  public get eth1() {
    return this.getNumberAttribute('eth1');
  }
  public set eth1(value: number) {
    this._eth1 = value;
  }
  public resetEth1() {
    this._eth1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eth1Input() {
    return this._eth1;
  }

  // eth2 - computed: false, optional: true, required: false
  private _eth2?: number; 
  public get eth2() {
    return this.getNumberAttribute('eth2');
  }
  public set eth2(value: number) {
    this._eth2 = value;
  }
  public resetEth2() {
    this._eth2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eth2Input() {
    return this._eth2;
  }

  // group1 - computed: false, optional: true, required: false
  private _group1?: number; 
  public get group1() {
    return this.getNumberAttribute('group1');
  }
  public set group1(value: number) {
    this._group1 = value;
  }
  public resetGroup1() {
    this._group1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get group1Input() {
    return this._group1;
  }

  // group2 - computed: false, optional: true, required: false
  private _group2?: number; 
  public get group2() {
    return this.getNumberAttribute('group2');
  }
  public set group2(value: number) {
    this._group2 = value;
  }
  public resetGroup2() {
    this._group2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get group2Input() {
    return this._group2;
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

  // trunk1 - computed: false, optional: true, required: false
  private _trunk1?: number; 
  public get trunk1() {
    return this.getNumberAttribute('trunk1');
  }
  public set trunk1(value: number) {
    this._trunk1 = value;
  }
  public resetTrunk1() {
    this._trunk1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunk1Input() {
    return this._trunk1;
  }

  // trunk2 - computed: false, optional: true, required: false
  private _trunk2?: number; 
  public get trunk2() {
    return this.getNumberAttribute('trunk2');
  }
  public set trunk2(value: number) {
    this._trunk2 = value;
  }
  public resetTrunk2() {
    this._trunk2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunk2Input() {
    return this._trunk2;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // virtual_wire_id - computed: false, optional: false, required: true
  private _virtualWireId?: number; 
  public get virtualWireId() {
    return this.getNumberAttribute('virtual_wire_id');
  }
  public set virtualWireId(value: number) {
    this._virtualWireId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWireIdInput() {
    return this._virtualWireId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eth1: cdktf.numberToTerraform(this._eth1),
      eth2: cdktf.numberToTerraform(this._eth2),
      group1: cdktf.numberToTerraform(this._group1),
      group2: cdktf.numberToTerraform(this._group2),
      id: cdktf.stringToTerraform(this._id),
      trunk1: cdktf.numberToTerraform(this._trunk1),
      trunk2: cdktf.numberToTerraform(this._trunk2),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      virtual_wire_id: cdktf.numberToTerraform(this._virtualWireId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eth1: {
        value: cdktf.numberToHclTerraform(this._eth1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eth2: {
        value: cdktf.numberToHclTerraform(this._eth2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group1: {
        value: cdktf.numberToHclTerraform(this._group1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group2: {
        value: cdktf.numberToHclTerraform(this._group2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk1: {
        value: cdktf.numberToHclTerraform(this._trunk1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trunk2: {
        value: cdktf.numberToHclTerraform(this._trunk2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      virtual_wire_id: {
        value: cdktf.numberToHclTerraform(this._virtualWireId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
