// https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/routing_table_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitRoutingTableRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The network area ID to which the routing table is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/routing_table_route#network_area_id DataStackitRoutingTableRoute#network_area_id}
  */
  readonly networkAreaId: string;
  /**
  * STACKIT organization ID to which the routing table is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/routing_table_route#organization_id DataStackitRoutingTableRoute#organization_id}
  */
  readonly organizationId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/routing_table_route#region DataStackitRoutingTableRoute#region}
  */
  readonly region?: string;
  /**
  * Route ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/routing_table_route#route_id DataStackitRoutingTableRoute#route_id}
  */
  readonly routeId: string;
  /**
  * The routing tables ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/routing_table_route#routing_table_id DataStackitRoutingTableRoute#routing_table_id}
  */
  readonly routingTableId: string;
}
export interface DataStackitRoutingTableRouteDestination {
}

export function dataStackitRoutingTableRouteDestinationToTerraform(struct?: DataStackitRoutingTableRouteDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitRoutingTableRouteDestinationToHclTerraform(struct?: DataStackitRoutingTableRouteDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitRoutingTableRouteDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitRoutingTableRouteDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitRoutingTableRouteDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataStackitRoutingTableRouteNextHop {
}

export function dataStackitRoutingTableRouteNextHopToTerraform(struct?: DataStackitRoutingTableRouteNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitRoutingTableRouteNextHopToHclTerraform(struct?: DataStackitRoutingTableRouteNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitRoutingTableRouteNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitRoutingTableRouteNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitRoutingTableRouteNextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/routing_table_route stackit_routing_table_route}
*/
export class DataStackitRoutingTableRoute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_routing_table_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitRoutingTableRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitRoutingTableRoute to import
  * @param importFromId The id of the existing DataStackitRoutingTableRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/routing_table_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitRoutingTableRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_routing_table_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/routing_table_route stackit_routing_table_route} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitRoutingTableRouteConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitRoutingTableRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_routing_table_route',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.72.0',
        providerVersionConstraint: '0.72.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkAreaId = config.networkAreaId;
    this._organizationId = config.organizationId;
    this._region = config.region;
    this._routeId = config.routeId;
    this._routingTableId = config.routingTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataStackitRoutingTableRouteDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // network_area_id - computed: false, optional: false, required: true
  private _networkAreaId?: string; 
  public get networkAreaId() {
    return this.getStringAttribute('network_area_id');
  }
  public set networkAreaId(value: string) {
    this._networkAreaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAreaIdInput() {
    return this._networkAreaId;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataStackitRoutingTableRouteNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // route_id - computed: false, optional: false, required: true
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
  }

  // routing_table_id - computed: false, optional: false, required: true
  private _routingTableId?: string; 
  public get routingTableId() {
    return this.getStringAttribute('routing_table_id');
  }
  public set routingTableId(value: string) {
    this._routingTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableIdInput() {
    return this._routingTableId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_area_id: cdktf.stringToTerraform(this._networkAreaId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      region: cdktf.stringToTerraform(this._region),
      route_id: cdktf.stringToTerraform(this._routeId),
      routing_table_id: cdktf.stringToTerraform(this._routingTableId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_area_id: {
        value: cdktf.stringToHclTerraform(this._networkAreaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_id: {
        value: cdktf.stringToHclTerraform(this._routeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_table_id: {
        value: cdktf.stringToHclTerraform(this._routingTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
