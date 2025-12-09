// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformTransitGatewayRoutingRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_routes#id DataSamsungcloudplatformTransitGatewayRoutingRoutes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Routing Table ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_routes#routing_table_id DataSamsungcloudplatformTransitGatewayRoutingRoutes#routing_table_id}
  */
  readonly routingTableId?: string;
  /**
  * Total List size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_routes#total_counts DataSamsungcloudplatformTransitGatewayRoutingRoutes#total_counts}
  */
  readonly totalCounts?: number;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_routes#contents DataSamsungcloudplatformTransitGatewayRoutingRoutes#contents}
  */
  readonly contents?: DataSamsungcloudplatformTransitGatewayRoutingRoutesContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformTransitGatewayRoutingRoutesContents {
}

export function dataSamsungcloudplatformTransitGatewayRoutingRoutesContentsToTerraform(struct?: DataSamsungcloudplatformTransitGatewayRoutingRoutesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformTransitGatewayRoutingRoutesContentsToHclTerraform(struct?: DataSamsungcloudplatformTransitGatewayRoutingRoutesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformTransitGatewayRoutingRoutesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformTransitGatewayRoutingRoutesContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformTransitGatewayRoutingRoutesContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // source_service_interface_id - computed: true, optional: false, required: false
  public get sourceServiceInterfaceId() {
    return this.getStringAttribute('source_service_interface_id');
  }

  // source_service_interface_name - computed: true, optional: false, required: false
  public get sourceServiceInterfaceName() {
    return this.getStringAttribute('source_service_interface_name');
  }
}

export class DataSamsungcloudplatformTransitGatewayRoutingRoutesContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformTransitGatewayRoutingRoutesContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformTransitGatewayRoutingRoutesContentsOutputReference {
    return new DataSamsungcloudplatformTransitGatewayRoutingRoutesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_routes samsungcloudplatform_transit_gateway_routing_routes}
*/
export class DataSamsungcloudplatformTransitGatewayRoutingRoutes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_transit_gateway_routing_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformTransitGatewayRoutingRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformTransitGatewayRoutingRoutes to import
  * @param importFromId The id of the existing DataSamsungcloudplatformTransitGatewayRoutingRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformTransitGatewayRoutingRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_transit_gateway_routing_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_routes samsungcloudplatform_transit_gateway_routing_routes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformTransitGatewayRoutingRoutesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformTransitGatewayRoutingRoutesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_transit_gateway_routing_routes',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
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
    this._routingTableId = config.routingTableId;
    this._totalCounts = config.totalCounts;
    this._contents.internalValue = config.contents;
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

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformTransitGatewayRoutingRoutesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformTransitGatewayRoutingRoutesContents[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      routing_table_id: cdktf.stringToTerraform(this._routingTableId),
      total_counts: cdktf.numberToTerraform(this._totalCounts),
      contents: cdktf.listMapper(dataSamsungcloudplatformTransitGatewayRoutingRoutesContentsToTerraform, true)(this._contents.internalValue),
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
      routing_table_id: {
        value: cdktf.stringToHclTerraform(this._routingTableId),
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
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformTransitGatewayRoutingRoutesContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformTransitGatewayRoutingRoutesContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
