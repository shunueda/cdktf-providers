// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_policy_groups_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopeNpaPolicyGroupsListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Return values only from specified fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_policy_groups_list#fields DataNetskopeNpaPolicyGroupsList#fields}
  */
  readonly fields?: string;
  /**
  * Query string based on query operaters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_policy_groups_list#filter DataNetskopeNpaPolicyGroupsList#filter}
  */
  readonly filter?: string;
  /**
  * Max number of policy groups to retrieve. Default will be all policy groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_policy_groups_list#limit DataNetskopeNpaPolicyGroupsList#limit}
  */
  readonly limit?: number;
  /**
  * The offset of the first policy group in the list to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_policy_groups_list#offset DataNetskopeNpaPolicyGroupsList#offset}
  */
  readonly offset?: number;
  /**
  * Sort retrieved policy group by specified field. Default is policy group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_policy_groups_list#sortby DataNetskopeNpaPolicyGroupsList#sortby}
  */
  readonly sortby?: string;
  /**
  * Sort in either asc or desc order. The default is asc order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_policy_groups_list#sortorder DataNetskopeNpaPolicyGroupsList#sortorder}
  */
  readonly sortorder?: string;
}
export interface DataNetskopeNpaPolicyGroupsListData {
}

export function dataNetskopeNpaPolicyGroupsListDataToTerraform(struct?: DataNetskopeNpaPolicyGroupsListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaPolicyGroupsListDataToHclTerraform(struct?: DataNetskopeNpaPolicyGroupsListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaPolicyGroupsListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaPolicyGroupsListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaPolicyGroupsListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_be_edited_deleted - computed: true, optional: false, required: false
  public get canBeEditedDeleted() {
    return this.getStringAttribute('can_be_edited_deleted');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // group_pinned_id - computed: true, optional: false, required: false
  public get groupPinnedId() {
    return this.getStringAttribute('group_pinned_id');
  }

  // group_prod_id - computed: true, optional: false, required: false
  public get groupProdId() {
    return this.getStringAttribute('group_prod_id');
  }

  // group_type - computed: true, optional: false, required: false
  public get groupType() {
    return this.getStringAttribute('group_type');
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // modify_type - computed: true, optional: false, required: false
  public get modifyType() {
    return this.getStringAttribute('modify_type');
  }
}

export class DataNetskopeNpaPolicyGroupsListDataList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaPolicyGroupsListDataOutputReference {
    return new DataNetskopeNpaPolicyGroupsListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_policy_groups_list netskope_npa_policy_groups_list}
*/
export class DataNetskopeNpaPolicyGroupsList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_policy_groups_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopeNpaPolicyGroupsList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopeNpaPolicyGroupsList to import
  * @param importFromId The id of the existing DataNetskopeNpaPolicyGroupsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_policy_groups_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopeNpaPolicyGroupsList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_policy_groups_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_policy_groups_list netskope_npa_policy_groups_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopeNpaPolicyGroupsListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetskopeNpaPolicyGroupsListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_policy_groups_list',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fields = config.fields;
    this._filter = config.filter;
    this._limit = config.limit;
    this._offset = config.offset;
    this._sortby = config.sortby;
    this._sortorder = config.sortorder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataNetskopeNpaPolicyGroupsListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string; 
  public get fields() {
    return this.getStringAttribute('fields');
  }
  public set fields(value: string) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // sortby - computed: false, optional: true, required: false
  private _sortby?: string; 
  public get sortby() {
    return this.getStringAttribute('sortby');
  }
  public set sortby(value: string) {
    this._sortby = value;
  }
  public resetSortby() {
    this._sortby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortbyInput() {
    return this._sortby;
  }

  // sortorder - computed: false, optional: true, required: false
  private _sortorder?: string; 
  public get sortorder() {
    return this.getStringAttribute('sortorder');
  }
  public set sortorder(value: string) {
    this._sortorder = value;
  }
  public resetSortorder() {
    this._sortorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortorderInput() {
    return this._sortorder;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fields: cdktf.stringToTerraform(this._fields),
      filter: cdktf.stringToTerraform(this._filter),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      sortby: cdktf.stringToTerraform(this._sortby),
      sortorder: cdktf.stringToTerraform(this._sortorder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fields: {
        value: cdktf.stringToHclTerraform(this._fields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sortby: {
        value: cdktf.stringToHclTerraform(this._sortby),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sortorder: {
        value: cdktf.stringToHclTerraform(this._sortorder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
