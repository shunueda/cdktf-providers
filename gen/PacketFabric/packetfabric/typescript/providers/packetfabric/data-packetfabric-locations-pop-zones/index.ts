// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_pop_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricLocationsPopZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_pop_zones#id DataPacketfabricLocationsPopZones#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location pop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_pop_zones#pop DataPacketfabricLocationsPopZones#pop}
  */
  readonly pop: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_pop_zones packetfabric_locations_pop_zones}
*/
export class DataPacketfabricLocationsPopZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_locations_pop_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricLocationsPopZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricLocationsPopZones to import
  * @param importFromId The id of the existing DataPacketfabricLocationsPopZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_pop_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricLocationsPopZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_locations_pop_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/locations_pop_zones packetfabric_locations_pop_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricLocationsPopZonesConfig
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricLocationsPopZonesConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_locations_pop_zones',
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
    this._pop = config.pop;
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

  // locations_zones - computed: true, optional: false, required: false
  public get locationsZones() {
    return this.getListAttribute('locations_zones');
  }

  // pop - computed: false, optional: false, required: true
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pop: cdktf.stringToTerraform(this._pop),
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
      pop: {
        value: cdktf.stringToHclTerraform(this._pop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
