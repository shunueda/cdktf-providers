// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/port_vlans
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricPortVlansConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/port_vlans#id DataPacketfabricPortVlans#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The port circuit ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/port_vlans#port_circuit_id DataPacketfabricPortVlans#port_circuit_id}
  */
  readonly portCircuitId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/port_vlans packetfabric_port_vlans}
*/
export class DataPacketfabricPortVlans extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_port_vlans";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricPortVlans resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricPortVlans to import
  * @param importFromId The id of the existing DataPacketfabricPortVlans that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/port_vlans#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricPortVlans to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_port_vlans", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/port_vlans packetfabric_port_vlans} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricPortVlansConfig
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricPortVlansConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_port_vlans',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
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
    this._portCircuitId = config.portCircuitId;
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

  // lowest_available_vlan - computed: true, optional: false, required: false
  public get lowestAvailableVlan() {
    return this.getNumberAttribute('lowest_available_vlan');
  }

  // max_vlan - computed: true, optional: false, required: false
  public get maxVlan() {
    return this.getNumberAttribute('max_vlan');
  }

  // port_circuit_id - computed: false, optional: false, required: true
  private _portCircuitId?: string; 
  public get portCircuitId() {
    return this.getStringAttribute('port_circuit_id');
  }
  public set portCircuitId(value: string) {
    this._portCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portCircuitIdInput() {
    return this._portCircuitId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port_circuit_id: cdktf.stringToTerraform(this._portCircuitId),
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
      port_circuit_id: {
        value: cdktf.stringToHclTerraform(this._portCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
