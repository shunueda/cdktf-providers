// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_ethernet_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpNeighborEthernetNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * AsNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_ethernet_neighbor#as_number RouterBgpNeighborEthernetNeighbor#as_number}
  */
  readonly asNumber: string;
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_ethernet_neighbor#ethernet RouterBgpNeighborEthernetNeighbor#ethernet}
  */
  readonly ethernet: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_ethernet_neighbor#id RouterBgpNeighborEthernetNeighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_ethernet_neighbor#peer_group_name RouterBgpNeighborEthernetNeighbor#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_ethernet_neighbor#unnumbered RouterBgpNeighborEthernetNeighbor#unnumbered}
  */
  readonly unnumbered?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_ethernet_neighbor#uuid RouterBgpNeighborEthernetNeighbor#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_ethernet_neighbor thunder_router_bgp_neighbor_ethernet_neighbor}
*/
export class RouterBgpNeighborEthernetNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_bgp_neighbor_ethernet_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpNeighborEthernetNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpNeighborEthernetNeighbor to import
  * @param importFromId The id of the existing RouterBgpNeighborEthernetNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_ethernet_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpNeighborEthernetNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_bgp_neighbor_ethernet_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_ethernet_neighbor thunder_router_bgp_neighbor_ethernet_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpNeighborEthernetNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpNeighborEthernetNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_bgp_neighbor_ethernet_neighbor',
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
    this._asNumber = config.asNumber;
    this._ethernet = config.ethernet;
    this._id = config.id;
    this._peerGroupName = config.peerGroupName;
    this._unnumbered = config.unnumbered;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: string; 
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
  public set asNumber(value: string) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // ethernet - computed: false, optional: false, required: true
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
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

  // peer_group_name - computed: false, optional: true, required: false
  private _peerGroupName?: string; 
  public get peerGroupName() {
    return this.getStringAttribute('peer_group_name');
  }
  public set peerGroupName(value: string) {
    this._peerGroupName = value;
  }
  public resetPeerGroupName() {
    this._peerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupNameInput() {
    return this._peerGroupName;
  }

  // unnumbered - computed: false, optional: true, required: false
  private _unnumbered?: number; 
  public get unnumbered() {
    return this.getNumberAttribute('unnumbered');
  }
  public set unnumbered(value: number) {
    this._unnumbered = value;
  }
  public resetUnnumbered() {
    this._unnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedInput() {
    return this._unnumbered;
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
      as_number: cdktf.stringToTerraform(this._asNumber),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      id: cdktf.stringToTerraform(this._id),
      peer_group_name: cdktf.stringToTerraform(this._peerGroupName),
      unnumbered: cdktf.numberToTerraform(this._unnumbered),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_number: {
        value: cdktf.stringToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet: {
        value: cdktf.numberToHclTerraform(this._ethernet),
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
      peer_group_name: {
        value: cdktf.stringToHclTerraform(this._peerGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unnumbered: {
        value: cdktf.numberToHclTerraform(this._unnumbered),
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
