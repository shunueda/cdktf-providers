// https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/vlan_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The server ID to assign to the virtual network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/vlan_assignment#server_id VlanAssignment#server_id}
  */
  readonly serverId: string;
  /**
  * The virtual network ID to assign the server to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/vlan_assignment#virtual_network_id VlanAssignment#virtual_network_id}
  */
  readonly virtualNetworkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/vlan_assignment latitudesh_vlan_assignment}
*/
export class VlanAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "latitudesh_vlan_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VlanAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VlanAssignment to import
  * @param importFromId The id of the existing VlanAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/vlan_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VlanAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "latitudesh_vlan_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/vlan_assignment latitudesh_vlan_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: VlanAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'latitudesh_vlan_assignment',
      terraformGeneratorMetadata: {
        providerName: 'latitudesh',
        providerVersion: '2.8.7',
        providerVersionConstraint: '2.8.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serverId = config.serverId;
    this._virtualNetworkId = config.virtualNetworkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vid - computed: true, optional: false, required: false
  public get vid() {
    return this.getNumberAttribute('vid');
  }

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      server_id: cdktf.stringToTerraform(this._serverId),
      virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_id: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
