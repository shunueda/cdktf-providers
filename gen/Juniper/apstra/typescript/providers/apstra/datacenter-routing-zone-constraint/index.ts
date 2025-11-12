// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_constraint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterRoutingZoneConstraintConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_constraint#blueprint_id DatacenterRoutingZoneConstraint#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * When `allow` instance constraint mode is chosen, only VNs from selected Routing Zones are allowed to have endpoints on the interface(s) the policy is applied to. The permitted Routing Zones may be specified directly or indirectly (via Routing Zone Groups)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_constraint#constraints DatacenterRoutingZoneConstraint#constraints}
  */
  readonly constraints?: string[];
  /**
  * The maximum number of Routing Zones that the Application Point can be part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_constraint#max_count_constraint DatacenterRoutingZoneConstraint#max_count_constraint}
  */
  readonly maxCountConstraint?: number;
  /**
  * Name displayed in the Apstra web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_constraint#name DatacenterRoutingZoneConstraint#name}
  */
  readonly name: string;
  /**
  * Instance constraint mode.
  * - `allow` - only allow the specified routing zones (add specific routing zones to allow)
  * - `deny` - denies allocation of specified routing zones (add specific routing zones to deny)
  * - `none` - no additional constraints on routing zones (any routing zones)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_constraint#routing_zones_list_constraint DatacenterRoutingZoneConstraint#routing_zones_list_constraint}
  */
  readonly routingZonesListConstraint: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_constraint apstra_datacenter_routing_zone_constraint}
*/
export class DatacenterRoutingZoneConstraint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_routing_zone_constraint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterRoutingZoneConstraint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterRoutingZoneConstraint to import
  * @param importFromId The id of the existing DatacenterRoutingZoneConstraint that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_constraint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterRoutingZoneConstraint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_routing_zone_constraint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_constraint apstra_datacenter_routing_zone_constraint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterRoutingZoneConstraintConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterRoutingZoneConstraintConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_routing_zone_constraint',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._constraints = config.constraints;
    this._maxCountConstraint = config.maxCountConstraint;
    this._name = config.name;
    this._routingZonesListConstraint = config.routingZonesListConstraint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints?: string[]; 
  public get constraints() {
    return cdktf.Fn.tolist(this.getListAttribute('constraints'));
  }
  public set constraints(value: string[]) {
    this._constraints = value;
  }
  public resetConstraints() {
    this._constraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_count_constraint - computed: false, optional: true, required: false
  private _maxCountConstraint?: number; 
  public get maxCountConstraint() {
    return this.getNumberAttribute('max_count_constraint');
  }
  public set maxCountConstraint(value: number) {
    this._maxCountConstraint = value;
  }
  public resetMaxCountConstraint() {
    this._maxCountConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountConstraintInput() {
    return this._maxCountConstraint;
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

  // routing_zones_list_constraint - computed: false, optional: false, required: true
  private _routingZonesListConstraint?: string; 
  public get routingZonesListConstraint() {
    return this.getStringAttribute('routing_zones_list_constraint');
  }
  public set routingZonesListConstraint(value: string) {
    this._routingZonesListConstraint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZonesListConstraintInput() {
    return this._routingZonesListConstraint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      constraints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._constraints),
      max_count_constraint: cdktf.numberToTerraform(this._maxCountConstraint),
      name: cdktf.stringToTerraform(this._name),
      routing_zones_list_constraint: cdktf.stringToTerraform(this._routingZonesListConstraint),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      constraints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._constraints),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_count_constraint: {
        value: cdktf.numberToHclTerraform(this._maxCountConstraint),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_zones_list_constraint: {
        value: cdktf.stringToHclTerraform(this._routingZonesListConstraint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
