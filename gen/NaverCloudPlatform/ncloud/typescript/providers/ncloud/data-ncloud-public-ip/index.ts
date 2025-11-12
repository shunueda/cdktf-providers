// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudPublicIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#id DataNcloudPublicIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#instance_no_list DataNcloudPublicIp#instance_no_list}
  */
  readonly instanceNoList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#internet_line_type DataNcloudPublicIp#internet_line_type}
  */
  readonly internetLineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#is_associated DataNcloudPublicIp#is_associated}
  */
  readonly isAssociated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#list DataNcloudPublicIp#list}
  */
  readonly list?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#region DataNcloudPublicIp#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#search_filter_name DataNcloudPublicIp#search_filter_name}
  */
  readonly searchFilterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#search_filter_value DataNcloudPublicIp#search_filter_value}
  */
  readonly searchFilterValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#sorted_by DataNcloudPublicIp#sorted_by}
  */
  readonly sortedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#sorting_order DataNcloudPublicIp#sorting_order}
  */
  readonly sortingOrder?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#filter DataNcloudPublicIp#filter}
  */
  readonly filter?: DataNcloudPublicIpFilter[] | cdktf.IResolvable;
}
export interface DataNcloudPublicIpFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#name DataNcloudPublicIp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#regex DataNcloudPublicIp#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#values DataNcloudPublicIp#values}
  */
  readonly values: string[];
}

export function dataNcloudPublicIpFilterToTerraform(struct?: DataNcloudPublicIpFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataNcloudPublicIpFilterToHclTerraform(struct?: DataNcloudPublicIpFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNcloudPublicIpFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudPublicIpFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudPublicIpFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataNcloudPublicIpFilterList extends cdktf.ComplexList {
  public internalValue? : DataNcloudPublicIpFilter[] | cdktf.IResolvable

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
  public get(index: number): DataNcloudPublicIpFilterOutputReference {
    return new DataNcloudPublicIpFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip ncloud_public_ip}
*/
export class DataNcloudPublicIp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_public_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudPublicIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudPublicIp to import
  * @param importFromId The id of the existing DataNcloudPublicIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudPublicIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_public_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/public_ip ncloud_public_ip} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudPublicIpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNcloudPublicIpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ncloud_public_ip',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4',
        providerVersionConstraint: '4.0.4'
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
    this._instanceNoList = config.instanceNoList;
    this._internetLineType = config.internetLineType;
    this._isAssociated = config.isAssociated;
    this._list = config.list;
    this._region = config.region;
    this._searchFilterName = config.searchFilterName;
    this._searchFilterValue = config.searchFilterValue;
    this._sortedBy = config.sortedBy;
    this._sortingOrder = config.sortingOrder;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // instance_no - computed: true, optional: false, required: false
  public get instanceNo() {
    return this.getStringAttribute('instance_no');
  }

  // instance_no_list - computed: false, optional: true, required: false
  private _instanceNoList?: string[]; 
  public get instanceNoList() {
    return this.getListAttribute('instance_no_list');
  }
  public set instanceNoList(value: string[]) {
    this._instanceNoList = value;
  }
  public resetInstanceNoList() {
    this._instanceNoList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNoListInput() {
    return this._instanceNoList;
  }

  // internet_line_type - computed: true, optional: true, required: false
  private _internetLineType?: string; 
  public get internetLineType() {
    return this.getStringAttribute('internet_line_type');
  }
  public set internetLineType(value: string) {
    this._internetLineType = value;
  }
  public resetInternetLineType() {
    this._internetLineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetLineTypeInput() {
    return this._internetLineType;
  }

  // is_associated - computed: false, optional: true, required: false
  private _isAssociated?: boolean | cdktf.IResolvable; 
  public get isAssociated() {
    return this.getBooleanAttribute('is_associated');
  }
  public set isAssociated(value: boolean | cdktf.IResolvable) {
    this._isAssociated = value;
  }
  public resetIsAssociated() {
    this._isAssociated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAssociatedInput() {
    return this._isAssociated;
  }

  // kind_type - computed: true, optional: false, required: false
  public get kindType() {
    return this.getStringAttribute('kind_type');
  }

  // list - computed: false, optional: true, required: false
  private _list?: string[]; 
  public get list() {
    return this.getListAttribute('list');
  }
  public set list(value: string[]) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_ip_no - computed: true, optional: false, required: false
  public get publicIpNo() {
    return this.getStringAttribute('public_ip_no');
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

  // search_filter_name - computed: false, optional: true, required: false
  private _searchFilterName?: string; 
  public get searchFilterName() {
    return this.getStringAttribute('search_filter_name');
  }
  public set searchFilterName(value: string) {
    this._searchFilterName = value;
  }
  public resetSearchFilterName() {
    this._searchFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterNameInput() {
    return this._searchFilterName;
  }

  // search_filter_value - computed: false, optional: true, required: false
  private _searchFilterValue?: string; 
  public get searchFilterValue() {
    return this.getStringAttribute('search_filter_value');
  }
  public set searchFilterValue(value: string) {
    this._searchFilterValue = value;
  }
  public resetSearchFilterValue() {
    this._searchFilterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterValueInput() {
    return this._searchFilterValue;
  }

  // server_instance_no - computed: true, optional: false, required: false
  public get serverInstanceNo() {
    return this.getStringAttribute('server_instance_no');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // sorted_by - computed: false, optional: true, required: false
  private _sortedBy?: string; 
  public get sortedBy() {
    return this.getStringAttribute('sorted_by');
  }
  public set sortedBy(value: string) {
    this._sortedBy = value;
  }
  public resetSortedBy() {
    this._sortedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortedByInput() {
    return this._sortedBy;
  }

  // sorting_order - computed: false, optional: true, required: false
  private _sortingOrder?: string; 
  public get sortingOrder() {
    return this.getStringAttribute('sorting_order');
  }
  public set sortingOrder(value: string) {
    this._sortingOrder = value;
  }
  public resetSortingOrder() {
    this._sortingOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortingOrderInput() {
    return this._sortingOrder;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNcloudPublicIpFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNcloudPublicIpFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_no_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceNoList),
      internet_line_type: cdktf.stringToTerraform(this._internetLineType),
      is_associated: cdktf.booleanToTerraform(this._isAssociated),
      list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._list),
      region: cdktf.stringToTerraform(this._region),
      search_filter_name: cdktf.stringToTerraform(this._searchFilterName),
      search_filter_value: cdktf.stringToTerraform(this._searchFilterValue),
      sorted_by: cdktf.stringToTerraform(this._sortedBy),
      sorting_order: cdktf.stringToTerraform(this._sortingOrder),
      filter: cdktf.listMapper(dataNcloudPublicIpFilterToTerraform, true)(this._filter.internalValue),
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
      instance_no_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceNoList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      internet_line_type: {
        value: cdktf.stringToHclTerraform(this._internetLineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_associated: {
        value: cdktf.booleanToHclTerraform(this._isAssociated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._list),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_filter_name: {
        value: cdktf.stringToHclTerraform(this._searchFilterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_filter_value: {
        value: cdktf.stringToHclTerraform(this._searchFilterValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sorted_by: {
        value: cdktf.stringToHclTerraform(this._sortedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sorting_order: {
        value: cdktf.stringToHclTerraform(this._sortingOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataNcloudPublicIpFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNcloudPublicIpFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
