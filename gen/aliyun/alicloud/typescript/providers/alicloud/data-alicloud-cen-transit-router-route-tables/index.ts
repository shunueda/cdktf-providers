// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCenTransitRouterRouteTablesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables#id DataAlicloudCenTransitRouterRouteTables#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables#ids DataAlicloudCenTransitRouterRouteTables#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables#name_regex DataAlicloudCenTransitRouterRouteTables#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables#output_file DataAlicloudCenTransitRouterRouteTables#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables#status DataAlicloudCenTransitRouterRouteTables#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables#transit_router_id DataAlicloudCenTransitRouterRouteTables#transit_router_id}
  */
  readonly transitRouterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables#transit_router_route_table_ids DataAlicloudCenTransitRouterRouteTables#transit_router_route_table_ids}
  */
  readonly transitRouterRouteTableIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables#transit_router_route_table_names DataAlicloudCenTransitRouterRouteTables#transit_router_route_table_names}
  */
  readonly transitRouterRouteTableNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables#transit_router_route_table_status DataAlicloudCenTransitRouterRouteTables#transit_router_route_table_status}
  */
  readonly transitRouterRouteTableStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables#transit_router_route_table_type DataAlicloudCenTransitRouterRouteTables#transit_router_route_table_type}
  */
  readonly transitRouterRouteTableType?: string;
}
export interface DataAlicloudCenTransitRouterRouteTablesTables {
}

export function dataAlicloudCenTransitRouterRouteTablesTablesToTerraform(struct?: DataAlicloudCenTransitRouterRouteTablesTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCenTransitRouterRouteTablesTablesToHclTerraform(struct?: DataAlicloudCenTransitRouterRouteTablesTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCenTransitRouterRouteTablesTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudCenTransitRouterRouteTablesTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCenTransitRouterRouteTablesTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_route_table_description - computed: true, optional: false, required: false
  public get transitRouterRouteTableDescription() {
    return this.getStringAttribute('transit_router_route_table_description');
  }

  // transit_router_route_table_id - computed: true, optional: false, required: false
  public get transitRouterRouteTableId() {
    return this.getStringAttribute('transit_router_route_table_id');
  }

  // transit_router_route_table_name - computed: true, optional: false, required: false
  public get transitRouterRouteTableName() {
    return this.getStringAttribute('transit_router_route_table_name');
  }

  // transit_router_route_table_type - computed: true, optional: false, required: false
  public get transitRouterRouteTableType() {
    return this.getStringAttribute('transit_router_route_table_type');
  }
}

export class DataAlicloudCenTransitRouterRouteTablesTablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCenTransitRouterRouteTablesTablesOutputReference {
    return new DataAlicloudCenTransitRouterRouteTablesTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables alicloud_cen_transit_router_route_tables}
*/
export class DataAlicloudCenTransitRouterRouteTables extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_transit_router_route_tables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCenTransitRouterRouteTables resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCenTransitRouterRouteTables to import
  * @param importFromId The id of the existing DataAlicloudCenTransitRouterRouteTables that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCenTransitRouterRouteTables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_transit_router_route_tables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_transit_router_route_tables alicloud_cen_transit_router_route_tables} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCenTransitRouterRouteTablesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCenTransitRouterRouteTablesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_transit_router_route_tables',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._status = config.status;
    this._transitRouterId = config.transitRouterId;
    this._transitRouterRouteTableIds = config.transitRouterRouteTableIds;
    this._transitRouterRouteTableNames = config.transitRouterRouteTableNames;
    this._transitRouterRouteTableStatus = config.transitRouterRouteTableStatus;
    this._transitRouterRouteTableType = config.transitRouterRouteTableType;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tables - computed: true, optional: false, required: false
  private _tables = new DataAlicloudCenTransitRouterRouteTablesTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }

  // transit_router_id - computed: false, optional: false, required: true
  private _transitRouterId?: string; 
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }
  public set transitRouterId(value: string) {
    this._transitRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterIdInput() {
    return this._transitRouterId;
  }

  // transit_router_route_table_ids - computed: false, optional: true, required: false
  private _transitRouterRouteTableIds?: string[]; 
  public get transitRouterRouteTableIds() {
    return this.getListAttribute('transit_router_route_table_ids');
  }
  public set transitRouterRouteTableIds(value: string[]) {
    this._transitRouterRouteTableIds = value;
  }
  public resetTransitRouterRouteTableIds() {
    this._transitRouterRouteTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteTableIdsInput() {
    return this._transitRouterRouteTableIds;
  }

  // transit_router_route_table_names - computed: false, optional: true, required: false
  private _transitRouterRouteTableNames?: string[]; 
  public get transitRouterRouteTableNames() {
    return this.getListAttribute('transit_router_route_table_names');
  }
  public set transitRouterRouteTableNames(value: string[]) {
    this._transitRouterRouteTableNames = value;
  }
  public resetTransitRouterRouteTableNames() {
    this._transitRouterRouteTableNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteTableNamesInput() {
    return this._transitRouterRouteTableNames;
  }

  // transit_router_route_table_status - computed: false, optional: true, required: false
  private _transitRouterRouteTableStatus?: string; 
  public get transitRouterRouteTableStatus() {
    return this.getStringAttribute('transit_router_route_table_status');
  }
  public set transitRouterRouteTableStatus(value: string) {
    this._transitRouterRouteTableStatus = value;
  }
  public resetTransitRouterRouteTableStatus() {
    this._transitRouterRouteTableStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteTableStatusInput() {
    return this._transitRouterRouteTableStatus;
  }

  // transit_router_route_table_type - computed: false, optional: true, required: false
  private _transitRouterRouteTableType?: string; 
  public get transitRouterRouteTableType() {
    return this.getStringAttribute('transit_router_route_table_type');
  }
  public set transitRouterRouteTableType(value: string) {
    this._transitRouterRouteTableType = value;
  }
  public resetTransitRouterRouteTableType() {
    this._transitRouterRouteTableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteTableTypeInput() {
    return this._transitRouterRouteTableType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
      transit_router_route_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitRouterRouteTableIds),
      transit_router_route_table_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitRouterRouteTableNames),
      transit_router_route_table_status: cdktf.stringToTerraform(this._transitRouterRouteTableStatus),
      transit_router_route_table_type: cdktf.stringToTerraform(this._transitRouterRouteTableType),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_table_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitRouterRouteTableIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transit_router_route_table_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitRouterRouteTableNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transit_router_route_table_status: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteTableStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_table_type: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteTableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
