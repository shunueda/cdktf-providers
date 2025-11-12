// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zone_constraints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterRoutingZoneConstraintsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zone_constraints#blueprint_id DataApstraDatacenterRoutingZoneConstraints#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * List of filters used to select only desired node IDs. For a node to match a filter, all specified attributes must match (each attribute within a filter is AND-ed together). The returned node IDs represent the nodes matched by all of the filters together (filters are OR-ed together).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zone_constraints#filters DataApstraDatacenterRoutingZoneConstraints#filters}
  */
  readonly filters?: DataApstraDatacenterRoutingZoneConstraintsFilters[] | cdktf.IResolvable;
}
export interface DataApstraDatacenterRoutingZoneConstraintsFilters {
  /**
  * Set of Routing Zone IDs. All Routing Zones supplied here are used to match the Routing Zone Constraint, but a matching Routing Zone Constraintmay have additional Security Zones not enumerated in this set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zone_constraints#constraints DataApstraDatacenterRoutingZoneConstraints#constraints}
  */
  readonly constraints?: string[];
  /**
  * The maximum number of Routing Zones that the Application Point can be part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zone_constraints#max_count_constraint DataApstraDatacenterRoutingZoneConstraints#max_count_constraint}
  */
  readonly maxCountConstraint?: number;
  /**
  * Name displayed in the Apstra web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zone_constraints#name DataApstraDatacenterRoutingZoneConstraints#name}
  */
  readonly name?: string;
  /**
  * Routing Zone constraint mode. One of: `allow`, `deny`, `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zone_constraints#routing_zones_list_constraint DataApstraDatacenterRoutingZoneConstraints#routing_zones_list_constraint}
  */
  readonly routingZonesListConstraint?: string;
}

export function dataApstraDatacenterRoutingZoneConstraintsFiltersToTerraform(struct?: DataApstraDatacenterRoutingZoneConstraintsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.constraints),
    max_count_constraint: cdktf.numberToTerraform(struct!.maxCountConstraint),
    name: cdktf.stringToTerraform(struct!.name),
    routing_zones_list_constraint: cdktf.stringToTerraform(struct!.routingZonesListConstraint),
  }
}


export function dataApstraDatacenterRoutingZoneConstraintsFiltersToHclTerraform(struct?: DataApstraDatacenterRoutingZoneConstraintsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.constraints),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_count_constraint: {
      value: cdktf.numberToHclTerraform(struct!.maxCountConstraint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_zones_list_constraint: {
      value: cdktf.stringToHclTerraform(struct!.routingZonesListConstraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApstraDatacenterRoutingZoneConstraintsFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataApstraDatacenterRoutingZoneConstraintsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints;
    }
    if (this._maxCountConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCountConstraint = this._maxCountConstraint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routingZonesListConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingZonesListConstraint = this._routingZonesListConstraint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterRoutingZoneConstraintsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints = undefined;
      this._maxCountConstraint = undefined;
      this._name = undefined;
      this._routingZonesListConstraint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints = value.constraints;
      this._maxCountConstraint = value.maxCountConstraint;
      this._name = value.name;
      this._routingZonesListConstraint = value.routingZonesListConstraint;
    }
  }

  // blueprint_id - computed: true, optional: false, required: false
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
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

  // routing_zones_list_constraint - computed: false, optional: true, required: false
  private _routingZonesListConstraint?: string; 
  public get routingZonesListConstraint() {
    return this.getStringAttribute('routing_zones_list_constraint');
  }
  public set routingZonesListConstraint(value: string) {
    this._routingZonesListConstraint = value;
  }
  public resetRoutingZonesListConstraint() {
    this._routingZonesListConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZonesListConstraintInput() {
    return this._routingZonesListConstraint;
  }
}

export class DataApstraDatacenterRoutingZoneConstraintsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataApstraDatacenterRoutingZoneConstraintsFilters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataApstraDatacenterRoutingZoneConstraintsFiltersOutputReference {
    return new DataApstraDatacenterRoutingZoneConstraintsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zone_constraints apstra_datacenter_routing_zone_constraints}
*/
export class DataApstraDatacenterRoutingZoneConstraints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_routing_zone_constraints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterRoutingZoneConstraints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterRoutingZoneConstraints to import
  * @param importFromId The id of the existing DataApstraDatacenterRoutingZoneConstraints that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zone_constraints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterRoutingZoneConstraints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_routing_zone_constraints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_zone_constraints apstra_datacenter_routing_zone_constraints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterRoutingZoneConstraintsConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterRoutingZoneConstraintsConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_routing_zone_constraints',
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
    this._filters.internalValue = config.filters;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new DataApstraDatacenterRoutingZoneConstraintsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataApstraDatacenterRoutingZoneConstraintsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // graph_queries - computed: true, optional: false, required: false
  public get graphQueries() {
    return this.getListAttribute('graph_queries');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      filters: cdktf.listMapper(dataApstraDatacenterRoutingZoneConstraintsFiltersToTerraform, false)(this._filters.internalValue),
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
      filters: {
        value: cdktf.listMapperHcl(dataApstraDatacenterRoutingZoneConstraintsFiltersToHclTerraform, false)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataApstraDatacenterRoutingZoneConstraintsFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
