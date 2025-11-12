// https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/data-sources/fabric_connection_route_aggregation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixFabricConnectionRouteAggregationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The uuid of the connection this data source should retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/data-sources/fabric_connection_route_aggregation#connection_id DataEquinixFabricConnectionRouteAggregation#connection_id}
  */
  readonly connectionId: string;
  /**
  * The uuid of the route aggregation this data source should retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/data-sources/fabric_connection_route_aggregation#route_aggregation_id DataEquinixFabricConnectionRouteAggregation#route_aggregation_id}
  */
  readonly routeAggregationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/data-sources/fabric_connection_route_aggregation equinix_fabric_connection_route_aggregation}
*/
export class DataEquinixFabricConnectionRouteAggregation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_connection_route_aggregation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixFabricConnectionRouteAggregation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixFabricConnectionRouteAggregation to import
  * @param importFromId The id of the existing DataEquinixFabricConnectionRouteAggregation that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/data-sources/fabric_connection_route_aggregation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixFabricConnectionRouteAggregation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_connection_route_aggregation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/data-sources/fabric_connection_route_aggregation equinix_fabric_connection_route_aggregation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixFabricConnectionRouteAggregationConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixFabricConnectionRouteAggregationConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_connection_route_aggregation',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.10.0',
        providerVersionConstraint: '4.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._routeAggregationId = config.routeAggregationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_status - computed: true, optional: false, required: false
  public get attachmentStatus() {
    return this.getStringAttribute('attachment_status');
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // route_aggregation_id - computed: false, optional: false, required: true
  private _routeAggregationId?: string; 
  public get routeAggregationId() {
    return this.getStringAttribute('route_aggregation_id');
  }
  public set routeAggregationId(value: string) {
    this._routeAggregationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeAggregationIdInput() {
    return this._routeAggregationId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      route_aggregation_id: cdktf.stringToTerraform(this._routeAggregationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_aggregation_id: {
        value: cdktf.stringToHclTerraform(this._routeAggregationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
