// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_routing_zone_constraint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterCtRoutingZoneConstraintConfig extends cdktf.TerraformMetaArguments {
  /**
  * Primitive name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_routing_zone_constraint#name DataApstraDatacenterCtRoutingZoneConstraint#name}
  */
  readonly name?: string;
  /**
  * Apstra Object ID of Routing Zone Constraint to be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_routing_zone_constraint#routing_zone_constraint_id DataApstraDatacenterCtRoutingZoneConstraint#routing_zone_constraint_id}
  */
  readonly routingZoneConstraintId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_routing_zone_constraint apstra_datacenter_ct_routing_zone_constraint}
*/
export class DataApstraDatacenterCtRoutingZoneConstraint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_ct_routing_zone_constraint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterCtRoutingZoneConstraint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterCtRoutingZoneConstraint to import
  * @param importFromId The id of the existing DataApstraDatacenterCtRoutingZoneConstraint that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_routing_zone_constraint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterCtRoutingZoneConstraint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_ct_routing_zone_constraint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_routing_zone_constraint apstra_datacenter_ct_routing_zone_constraint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterCtRoutingZoneConstraintConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterCtRoutingZoneConstraintConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_ct_routing_zone_constraint',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._routingZoneConstraintId = config.routingZoneConstraintId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // primitive - computed: true, optional: false, required: false
  public get primitive() {
    return this.getStringAttribute('primitive');
  }

  // routing_zone_constraint_id - computed: false, optional: false, required: true
  private _routingZoneConstraintId?: string; 
  public get routingZoneConstraintId() {
    return this.getStringAttribute('routing_zone_constraint_id');
  }
  public set routingZoneConstraintId(value: string) {
    this._routingZoneConstraintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZoneConstraintIdInput() {
    return this._routingZoneConstraintId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      routing_zone_constraint_id: cdktf.stringToTerraform(this._routingZoneConstraintId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_zone_constraint_id: {
        value: cdktf.stringToHclTerraform(this._routingZoneConstraintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
