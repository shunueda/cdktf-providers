// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCenTransitRouterRouteEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries#id DataAlicloudCenTransitRouterRouteEntries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries#ids DataAlicloudCenTransitRouterRouteEntries#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries#name_regex DataAlicloudCenTransitRouterRouteEntries#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries#output_file DataAlicloudCenTransitRouterRouteEntries#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries#status DataAlicloudCenTransitRouterRouteEntries#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries#transit_router_route_entry_ids DataAlicloudCenTransitRouterRouteEntries#transit_router_route_entry_ids}
  */
  readonly transitRouterRouteEntryIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries#transit_router_route_entry_names DataAlicloudCenTransitRouterRouteEntries#transit_router_route_entry_names}
  */
  readonly transitRouterRouteEntryNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries#transit_router_route_entry_status DataAlicloudCenTransitRouterRouteEntries#transit_router_route_entry_status}
  */
  readonly transitRouterRouteEntryStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries#transit_router_route_table_id DataAlicloudCenTransitRouterRouteEntries#transit_router_route_table_id}
  */
  readonly transitRouterRouteTableId: string;
}
export interface DataAlicloudCenTransitRouterRouteEntriesEntries {
}

export function dataAlicloudCenTransitRouterRouteEntriesEntriesToTerraform(struct?: DataAlicloudCenTransitRouterRouteEntriesEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCenTransitRouterRouteEntriesEntriesToHclTerraform(struct?: DataAlicloudCenTransitRouterRouteEntriesEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCenTransitRouterRouteEntriesEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCenTransitRouterRouteEntriesEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCenTransitRouterRouteEntriesEntries | undefined) {
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

  // transit_router_route_entry_type - computed: true, optional: false, required: false
  public get transitRouterRouteEntryType() {
    return this.getStringAttribute('transit_router_route_entry_type');
  }
}

export class DataAlicloudCenTransitRouterRouteEntriesEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCenTransitRouterRouteEntriesEntriesOutputReference {
    return new DataAlicloudCenTransitRouterRouteEntriesEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries alicloud_cen_transit_router_route_entries}
*/
export class DataAlicloudCenTransitRouterRouteEntries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_transit_router_route_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCenTransitRouterRouteEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCenTransitRouterRouteEntries to import
  * @param importFromId The id of the existing DataAlicloudCenTransitRouterRouteEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCenTransitRouterRouteEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_transit_router_route_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cen_transit_router_route_entries alicloud_cen_transit_router_route_entries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCenTransitRouterRouteEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCenTransitRouterRouteEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_transit_router_route_entries',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
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
    this._transitRouterRouteEntryIds = config.transitRouterRouteEntryIds;
    this._transitRouterRouteEntryNames = config.transitRouterRouteEntryNames;
    this._transitRouterRouteEntryStatus = config.transitRouterRouteEntryStatus;
    this._transitRouterRouteTableId = config.transitRouterRouteTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entries - computed: true, optional: false, required: false
  private _entries = new DataAlicloudCenTransitRouterRouteEntriesEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
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

  // transit_router_route_entry_ids - computed: false, optional: true, required: false
  private _transitRouterRouteEntryIds?: string[]; 
  public get transitRouterRouteEntryIds() {
    return this.getListAttribute('transit_router_route_entry_ids');
  }
  public set transitRouterRouteEntryIds(value: string[]) {
    this._transitRouterRouteEntryIds = value;
  }
  public resetTransitRouterRouteEntryIds() {
    this._transitRouterRouteEntryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryIdsInput() {
    return this._transitRouterRouteEntryIds;
  }

  // transit_router_route_entry_names - computed: false, optional: true, required: false
  private _transitRouterRouteEntryNames?: string[]; 
  public get transitRouterRouteEntryNames() {
    return this.getListAttribute('transit_router_route_entry_names');
  }
  public set transitRouterRouteEntryNames(value: string[]) {
    this._transitRouterRouteEntryNames = value;
  }
  public resetTransitRouterRouteEntryNames() {
    this._transitRouterRouteEntryNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryNamesInput() {
    return this._transitRouterRouteEntryNames;
  }

  // transit_router_route_entry_status - computed: false, optional: true, required: false
  private _transitRouterRouteEntryStatus?: string; 
  public get transitRouterRouteEntryStatus() {
    return this.getStringAttribute('transit_router_route_entry_status');
  }
  public set transitRouterRouteEntryStatus(value: string) {
    this._transitRouterRouteEntryStatus = value;
  }
  public resetTransitRouterRouteEntryStatus() {
    this._transitRouterRouteEntryStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteEntryStatusInput() {
    return this._transitRouterRouteEntryStatus;
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
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
      transit_router_route_entry_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitRouterRouteEntryIds),
      transit_router_route_entry_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitRouterRouteEntryNames),
      transit_router_route_entry_status: cdktf.stringToTerraform(this._transitRouterRouteEntryStatus),
      transit_router_route_table_id: cdktf.stringToTerraform(this._transitRouterRouteTableId),
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
      transit_router_route_entry_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitRouterRouteEntryIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transit_router_route_entry_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitRouterRouteEntryNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transit_router_route_entry_status: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteEntryStatus),
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
