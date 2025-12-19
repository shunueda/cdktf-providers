// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkVirtualWireVlanPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair#id NetworkVirtualWireVlanPair#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * virtual wire vlan pair id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair#pair_id NetworkVirtualWireVlanPair#pair_id}
  */
  readonly pairId: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair#user_tag NetworkVirtualWireVlanPair#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair#uuid NetworkVirtualWireVlanPair#uuid}
  */
  readonly uuid?: string;
  /**
  * first vlan in the pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair#vlan1 NetworkVirtualWireVlanPair#vlan1}
  */
  readonly vlan1?: number;
  /**
  * second vlan in the pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair#vlan2 NetworkVirtualWireVlanPair#vlan2}
  */
  readonly vlan2?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair thunder_network_virtual_wire_vlan_pair}
*/
export class NetworkVirtualWireVlanPair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_virtual_wire_vlan_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkVirtualWireVlanPair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkVirtualWireVlanPair to import
  * @param importFromId The id of the existing NetworkVirtualWireVlanPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkVirtualWireVlanPair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_virtual_wire_vlan_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair thunder_network_virtual_wire_vlan_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkVirtualWireVlanPairConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkVirtualWireVlanPairConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_virtual_wire_vlan_pair',
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
    this._pairId = config.pairId;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vlan1 = config.vlan1;
    this._vlan2 = config.vlan2;
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

  // pair_id - computed: false, optional: false, required: true
  private _pairId?: number; 
  public get pairId() {
    return this.getNumberAttribute('pair_id');
  }
  public set pairId(value: number) {
    this._pairId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairIdInput() {
    return this._pairId;
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

  // vlan1 - computed: false, optional: true, required: false
  private _vlan1?: number; 
  public get vlan1() {
    return this.getNumberAttribute('vlan1');
  }
  public set vlan1(value: number) {
    this._vlan1 = value;
  }
  public resetVlan1() {
    this._vlan1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlan1Input() {
    return this._vlan1;
  }

  // vlan2 - computed: false, optional: true, required: false
  private _vlan2?: number; 
  public get vlan2() {
    return this.getNumberAttribute('vlan2');
  }
  public set vlan2(value: number) {
    this._vlan2 = value;
  }
  public resetVlan2() {
    this._vlan2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlan2Input() {
    return this._vlan2;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pair_id: cdktf.numberToTerraform(this._pairId),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vlan1: cdktf.numberToTerraform(this._vlan1),
      vlan2: cdktf.numberToTerraform(this._vlan2),
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
      pair_id: {
        value: cdktf.numberToHclTerraform(this._pairId),
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
      vlan1: {
        value: cdktf.numberToHclTerraform(this._vlan1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan2: {
        value: cdktf.numberToHclTerraform(this._vlan2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
