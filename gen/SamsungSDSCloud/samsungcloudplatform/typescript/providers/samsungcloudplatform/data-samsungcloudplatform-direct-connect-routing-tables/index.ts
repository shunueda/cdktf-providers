// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/direct_connect_routing_tables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformDirectConnectRoutingTablesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Created By
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/direct_connect_routing_tables#created_by DataSamsungcloudplatformDirectConnectRoutingTables#created_by}
  */
  readonly createdBy?: string;
  /**
  * DirectConnect Connention Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/direct_connect_routing_tables#direct_connect_connection_id DataSamsungcloudplatformDirectConnectRoutingTables#direct_connect_connection_id}
  */
  readonly directConnectConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/direct_connect_routing_tables#id DataSamsungcloudplatformDirectConnectRoutingTables#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Routing Table Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/direct_connect_routing_tables#routing_table_id DataSamsungcloudplatformDirectConnectRoutingTables#routing_table_id}
  */
  readonly routingTableId?: string;
  /**
  * Routing Table Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/direct_connect_routing_tables#routing_table_name DataSamsungcloudplatformDirectConnectRoutingTables#routing_table_name}
  */
  readonly routingTableName?: string;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/direct_connect_routing_tables#contents DataSamsungcloudplatformDirectConnectRoutingTables#contents}
  */
  readonly contents?: DataSamsungcloudplatformDirectConnectRoutingTablesContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformDirectConnectRoutingTablesContents {
}

export function dataSamsungcloudplatformDirectConnectRoutingTablesContentsToTerraform(struct?: DataSamsungcloudplatformDirectConnectRoutingTablesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformDirectConnectRoutingTablesContentsToHclTerraform(struct?: DataSamsungcloudplatformDirectConnectRoutingTablesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformDirectConnectRoutingTablesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformDirectConnectRoutingTablesContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformDirectConnectRoutingTablesContents | cdktf.IResolvable | undefined) {
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

  // direct_connect_connection_id - computed: true, optional: false, required: false
  public get directConnectConnectionId() {
    return this.getStringAttribute('direct_connect_connection_id');
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
}

export class DataSamsungcloudplatformDirectConnectRoutingTablesContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformDirectConnectRoutingTablesContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformDirectConnectRoutingTablesContentsOutputReference {
    return new DataSamsungcloudplatformDirectConnectRoutingTablesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/direct_connect_routing_tables samsungcloudplatform_direct_connect_routing_tables}
*/
export class DataSamsungcloudplatformDirectConnectRoutingTables extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_direct_connect_routing_tables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformDirectConnectRoutingTables resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformDirectConnectRoutingTables to import
  * @param importFromId The id of the existing DataSamsungcloudplatformDirectConnectRoutingTables that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/direct_connect_routing_tables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformDirectConnectRoutingTables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_direct_connect_routing_tables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/direct_connect_routing_tables samsungcloudplatform_direct_connect_routing_tables} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformDirectConnectRoutingTablesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformDirectConnectRoutingTablesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_direct_connect_routing_tables',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
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
    this._directConnectConnectionId = config.directConnectConnectionId;
    this._id = config.id;
    this._routingTableId = config.routingTableId;
    this._routingTableName = config.routingTableName;
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

  // direct_connect_connection_id - computed: false, optional: true, required: false
  private _directConnectConnectionId?: string; 
  public get directConnectConnectionId() {
    return this.getStringAttribute('direct_connect_connection_id');
  }
  public set directConnectConnectionId(value: string) {
    this._directConnectConnectionId = value;
  }
  public resetDirectConnectConnectionId() {
    this._directConnectConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectConnectionIdInput() {
    return this._directConnectConnectionId;
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

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformDirectConnectRoutingTablesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformDirectConnectRoutingTablesContents[] | cdktf.IResolvable) {
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
      direct_connect_connection_id: cdktf.stringToTerraform(this._directConnectConnectionId),
      id: cdktf.stringToTerraform(this._id),
      routing_table_id: cdktf.stringToTerraform(this._routingTableId),
      routing_table_name: cdktf.stringToTerraform(this._routingTableName),
      contents: cdktf.listMapper(dataSamsungcloudplatformDirectConnectRoutingTablesContentsToTerraform, true)(this._contents.internalValue),
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
      direct_connect_connection_id: {
        value: cdktf.stringToHclTerraform(this._directConnectConnectionId),
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
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformDirectConnectRoutingTablesContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformDirectConnectRoutingTablesContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
