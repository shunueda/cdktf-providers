// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cen_transit_router_route_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackCenTransitRouterRouteEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cen_transit_router_route_entries#description_regex DataAlibabacloudstackCenTransitRouterRouteEntries#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cen_transit_router_route_entries#id DataAlibabacloudstackCenTransitRouterRouteEntries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cen_transit_router_route_entries#ids DataAlibabacloudstackCenTransitRouterRouteEntries#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cen_transit_router_route_entries#name_regex DataAlibabacloudstackCenTransitRouterRouteEntries#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * ID of the route table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cen_transit_router_route_entries#transit_router_route_table_id DataAlibabacloudstackCenTransitRouterRouteEntries#transit_router_route_table_id}
  */
  readonly transitRouterRouteTableId: string;
}
export interface DataAlibabacloudstackCenTransitRouterRouteEntriesTransitRouterRouteEntries {
}

export function dataAlibabacloudstackCenTransitRouterRouteEntriesTransitRouterRouteEntriesToTerraform(struct?: DataAlibabacloudstackCenTransitRouterRouteEntriesTransitRouterRouteEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackCenTransitRouterRouteEntriesTransitRouterRouteEntriesToHclTerraform(struct?: DataAlibabacloudstackCenTransitRouterRouteEntriesTransitRouterRouteEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackCenTransitRouterRouteEntriesTransitRouterRouteEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackCenTransitRouterRouteEntriesTransitRouterRouteEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackCenTransitRouterRouteEntriesTransitRouterRouteEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // operational_mode - computed: true, optional: false, required: false
  public get operationalMode() {
    return this.getBooleanAttribute('operational_mode');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_route_entry_description - computed: true, optional: false, required: false
  public get transitRouterRouteEntryDescription() {
    return this.getStringAttribute('transit_router_route_entry_description');
  }

  // transit_router_route_entry_destination_cidr_block - computed: true, optional: false, required: false
  public get transitRouterRouteEntryDestinationCidrBlock() {
    return this.getStringAttribute('transit_router_route_entry_destination_cidr_block');
  }

  // transit_router_route_entry_id - computed: true, optional: false, required: false
  public get transitRouterRouteEntryId() {
    return this.getStringAttribute('transit_router_route_entry_id');
  }

  // transit_router_route_entry_name - computed: true, optional: false, required: false
  public get transitRouterRouteEntryName() {
    return this.getStringAttribute('transit_router_route_entry_name');
  }

  // transit_router_route_entry_next_hop_id - computed: true, optional: false, required: false
  public get transitRouterRouteEntryNextHopId() {
    return this.getStringAttribute('transit_router_route_entry_next_hop_id');
  }

  // transit_router_route_entry_next_hop_type - computed: true, optional: false, required: false
  public get transitRouterRouteEntryNextHopType() {
    return this.getStringAttribute('transit_router_route_entry_next_hop_type');
  }

  // transit_router_route_entry_status - computed: true, optional: false, required: false
  public get transitRouterRouteEntryStatus() {
    return this.getStringAttribute('transit_router_route_entry_status');
  }

  // transit_router_route_entry_type - computed: true, optional: false, required: false
  public get transitRouterRouteEntryType() {
    return this.getStringAttribute('transit_router_route_entry_type');
  }
}

export class DataAlibabacloudstackCenTransitRouterRouteEntriesTransitRouterRouteEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackCenTransitRouterRouteEntriesTransitRouterRouteEntriesOutputReference {
    return new DataAlibabacloudstackCenTransitRouterRouteEntriesTransitRouterRouteEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cen_transit_router_route_entries alibabacloudstack_cen_transit_router_route_entries}
*/
export class DataAlibabacloudstackCenTransitRouterRouteEntries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cen_transit_router_route_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackCenTransitRouterRouteEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackCenTransitRouterRouteEntries to import
  * @param importFromId The id of the existing DataAlibabacloudstackCenTransitRouterRouteEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cen_transit_router_route_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackCenTransitRouterRouteEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cen_transit_router_route_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/data-sources/cen_transit_router_route_entries alibabacloudstack_cen_transit_router_route_entries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackCenTransitRouterRouteEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackCenTransitRouterRouteEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cen_transit_router_route_entries',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._descriptionRegex = config.descriptionRegex;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._transitRouterRouteTableId = config.transitRouterRouteTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description_regex - computed: false, optional: true, required: false
  private _descriptionRegex?: string; 
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }
  public set descriptionRegex(value: string) {
    this._descriptionRegex = value;
  }
  public resetDescriptionRegex() {
    this._descriptionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexInput() {
    return this._descriptionRegex;
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

  // transit_router_route_entries - computed: true, optional: false, required: false
  private _transitRouterRouteEntries = new DataAlibabacloudstackCenTransitRouterRouteEntriesTransitRouterRouteEntriesList(this, "transit_router_route_entries", false);
  public get transitRouterRouteEntries() {
    return this._transitRouterRouteEntries;
  }

  // transit_router_route_table_id - computed: false, optional: false, required: true
  private _transitRouterRouteTableId?: string; 
  public get transitRouterRouteTableId() {
    return this.getStringAttribute('transit_router_route_table_id');
  }
  public set transitRouterRouteTableId(value: string) {
    this._transitRouterRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteTableIdInput() {
    return this._transitRouterRouteTableId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description_regex: cdktf.stringToTerraform(this._descriptionRegex),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      transit_router_route_table_id: cdktf.stringToTerraform(this._transitRouterRouteTableId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description_regex: {
        value: cdktf.stringToHclTerraform(this._descriptionRegex),
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
      transit_router_route_table_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
