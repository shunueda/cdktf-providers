// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_region_cost
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateAccessServiceConnectionsRegionCostAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Arbitrary regions map. Key is string; value is a map of key:integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_region_cost#entries PrivateAccessServiceConnectionsRegionCostA#entries}
  */
  readonly entries?: { [key: string]: { [key: string]: number } } | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_region_cost fortisase_private_access_service_connections_region_cost}
*/
export class PrivateAccessServiceConnectionsRegionCostA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_private_access_service_connections_region_cost";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateAccessServiceConnectionsRegionCostA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateAccessServiceConnectionsRegionCostA to import
  * @param importFromId The id of the existing PrivateAccessServiceConnectionsRegionCostA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_region_cost#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateAccessServiceConnectionsRegionCostA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_private_access_service_connections_region_cost", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_region_cost fortisase_private_access_service_connections_region_cost} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateAccessServiceConnectionsRegionCostAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PrivateAccessServiceConnectionsRegionCostAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortisase_private_access_service_connections_region_cost',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entries = config.entries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entries - computed: true, optional: true, required: false
  private _entries?: { [key: string]: { [key: string]: number } } | cdktf.IResolvable; 
  public get entries() {
    return this.interpolationForAttribute('entries');
  }
  public set entries(value: { [key: string]: { [key: string]: number } } | cdktf.IResolvable) {
    this._entries = value;
  }
  public resetEntries() {
    this._entries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entries: cdktf.hashMapper(cdktf.hashMapper(cdktf.numberToTerraform))(this._entries),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entries: {
        value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.numberToHclTerraform))(this._entries),
        isBlock: false,
        type: "map",
        storageClassType: "numberMapMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
