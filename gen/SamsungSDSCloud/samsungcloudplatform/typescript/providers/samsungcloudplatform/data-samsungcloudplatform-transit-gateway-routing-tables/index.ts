// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_routing_tables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformTransitGatewayRoutingTablesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Created By 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_routing_tables#created_by DataSamsungcloudplatformTransitGatewayRoutingTables#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_routing_tables#id DataSamsungcloudplatformTransitGatewayRoutingTables#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Routing Table ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_routing_tables#routing_table_id DataSamsungcloudplatformTransitGatewayRoutingTables#routing_table_id}
  */
  readonly routingTableId?: string;
  /**
  * Routing Table Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_routing_tables#routing_table_name DataSamsungcloudplatformTransitGatewayRoutingTables#routing_table_name}
  */
  readonly routingTableName?: string;
  /**
  * Total List size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_routing_tables#total_counts DataSamsungcloudplatformTransitGatewayRoutingTables#total_counts}
  */
  readonly totalCounts?: number;
  /**
  * Transit Gateway Connection ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_routing_tables#transit_gateway_connection_id DataSamsungcloudplatformTransitGatewayRoutingTables#transit_gateway_connection_id}
  */
  readonly transitGatewayConnectionId?: string;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_routing_tables#contents DataSamsungcloudplatformTransitGatewayRoutingTables#contents}
  */
  readonly contents?: DataSamsungcloudplatformTransitGatewayRoutingTablesContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformTransitGatewayRoutingTablesContents {
  /**
  * Transit Gateway Connection ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_routing_tables#transit_gateway_connection_id DataSamsungcloudplatformTransitGatewayRoutingTables#transit_gateway_connection_id}
  */
  readonly transitGatewayConnectionId?: string;
}

export function dataSamsungcloudplatformTransitGatewayRoutingTablesContentsToTerraform(struct?: DataSamsungcloudplatformTransitGatewayRoutingTablesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transit_gateway_connection_id: cdktf.stringToTerraform(struct!.transitGatewayConnectionId),
  }
}


export function dataSamsungcloudplatformTransitGatewayRoutingTablesContentsToHclTerraform(struct?: DataSamsungcloudplatformTransitGatewayRoutingTablesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transit_gateway_connection_id: {
      value: cdktf.stringToHclTerraform(struct!.transitGatewayConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSamsungcloudplatformTransitGatewayRoutingTablesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformTransitGatewayRoutingTablesContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transitGatewayConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayConnectionId = this._transitGatewayConnectionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformTransitGatewayRoutingTablesContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transitGatewayConnectionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transitGatewayConnectionId = value.transitGatewayConnectionId;
    }
  }

  // routing_rule_count - computed: true, optional: false, required: false
  public get routingRuleCount() {
    return this.getNumberAttribute('routing_rule_count');
  }

  // routing_table_id - computed: true, optional: false, required: false
  public get routingTableId() {
    return this.getStringAttribute('routing_table_id');
  }

  // routing_table_name - computed: true, optional: false, required: false
  public get routingTableName() {
    return this.getStringAttribute('routing_table_name');
  }

  // routing_table_type - computed: true, optional: false, required: false
  public get routingTableType() {
    return this.getStringAttribute('routing_table_type');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // t1_router_id - computed: true, optional: false, required: false
  public get t1RouterId() {
    return this.getStringAttribute('t1_router_id');
  }

  // transit_gateway_connection_id - computed: false, optional: true, required: false
  private _transitGatewayConnectionId?: string; 
  public get transitGatewayConnectionId() {
    return this.getStringAttribute('transit_gateway_connection_id');
  }
  public set transitGatewayConnectionId(value: string) {
    this._transitGatewayConnectionId = value;
  }
  public resetTransitGatewayConnectionId() {
    this._transitGatewayConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayConnectionIdInput() {
    return this._transitGatewayConnectionId;
  }
}

export class DataSamsungcloudplatformTransitGatewayRoutingTablesContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformTransitGatewayRoutingTablesContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformTransitGatewayRoutingTablesContentsOutputReference {
    return new DataSamsungcloudplatformTransitGatewayRoutingTablesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_routing_tables samsungcloudplatform_transit_gateway_routing_tables}
*/
export class DataSamsungcloudplatformTransitGatewayRoutingTables extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_transit_gateway_routing_tables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformTransitGatewayRoutingTables resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformTransitGatewayRoutingTables to import
  * @param importFromId The id of the existing DataSamsungcloudplatformTransitGatewayRoutingTables that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_routing_tables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformTransitGatewayRoutingTables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_transit_gateway_routing_tables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_routing_tables samsungcloudplatform_transit_gateway_routing_tables} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformTransitGatewayRoutingTablesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformTransitGatewayRoutingTablesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_transit_gateway_routing_tables',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0',
        providerVersionConstraint: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._routingTableId = config.routingTableId;
    this._routingTableName = config.routingTableName;
    this._totalCounts = config.totalCounts;
    this._transitGatewayConnectionId = config.transitGatewayConnectionId;
    this._contents.internalValue = config.contents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // routing_table_id - computed: false, optional: true, required: false
  private _routingTableId?: string; 
  public get routingTableId() {
    return this.getStringAttribute('routing_table_id');
  }
  public set routingTableId(value: string) {
    this._routingTableId = value;
  }
  public resetRoutingTableId() {
    this._routingTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableIdInput() {
    return this._routingTableId;
  }

  // routing_table_name - computed: false, optional: true, required: false
  private _routingTableName?: string; 
  public get routingTableName() {
    return this.getStringAttribute('routing_table_name');
  }
  public set routingTableName(value: string) {
    this._routingTableName = value;
  }
  public resetRoutingTableName() {
    this._routingTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableNameInput() {
    return this._routingTableName;
  }

  // total_counts - computed: false, optional: true, required: false
  private _totalCounts?: number; 
  public get totalCounts() {
    return this.getNumberAttribute('total_counts');
  }
  public set totalCounts(value: number) {
    this._totalCounts = value;
  }
  public resetTotalCounts() {
    this._totalCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCountsInput() {
    return this._totalCounts;
  }

  // transit_gateway_connection_id - computed: false, optional: true, required: false
  private _transitGatewayConnectionId?: string; 
  public get transitGatewayConnectionId() {
    return this.getStringAttribute('transit_gateway_connection_id');
  }
  public set transitGatewayConnectionId(value: string) {
    this._transitGatewayConnectionId = value;
  }
  public resetTransitGatewayConnectionId() {
    this._transitGatewayConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayConnectionIdInput() {
    return this._transitGatewayConnectionId;
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformTransitGatewayRoutingTablesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformTransitGatewayRoutingTablesContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      routing_table_id: cdktf.stringToTerraform(this._routingTableId),
      routing_table_name: cdktf.stringToTerraform(this._routingTableName),
      total_counts: cdktf.numberToTerraform(this._totalCounts),
      transit_gateway_connection_id: cdktf.stringToTerraform(this._transitGatewayConnectionId),
      contents: cdktf.listMapper(dataSamsungcloudplatformTransitGatewayRoutingTablesContentsToTerraform, true)(this._contents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      routing_table_name: {
        value: cdktf.stringToHclTerraform(this._routingTableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_counts: {
        value: cdktf.numberToHclTerraform(this._totalCounts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transit_gateway_connection_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformTransitGatewayRoutingTablesContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformTransitGatewayRoutingTablesContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
