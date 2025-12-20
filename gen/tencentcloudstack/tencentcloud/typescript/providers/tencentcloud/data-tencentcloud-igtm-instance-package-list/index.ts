// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/igtm_instance_package_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudIgtmInstancePackageListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/igtm_instance_package_list#id DataTencentcloudIgtmInstancePackageList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether used: 0 not used 1 used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/igtm_instance_package_list#is_used DataTencentcloudIgtmInstancePackageList#is_used}
  */
  readonly isUsed?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/igtm_instance_package_list#result_output_file DataTencentcloudIgtmInstancePackageList#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/igtm_instance_package_list#filters DataTencentcloudIgtmInstancePackageList#filters}
  */
  readonly filters?: DataTencentcloudIgtmInstancePackageListFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudIgtmInstancePackageListInstanceSetCostItemListStruct {
}

export function dataTencentcloudIgtmInstancePackageListInstanceSetCostItemListStructToTerraform(struct?: DataTencentcloudIgtmInstancePackageListInstanceSetCostItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudIgtmInstancePackageListInstanceSetCostItemListStructToHclTerraform(struct?: DataTencentcloudIgtmInstancePackageListInstanceSetCostItemListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudIgtmInstancePackageListInstanceSetCostItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudIgtmInstancePackageListInstanceSetCostItemListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudIgtmInstancePackageListInstanceSetCostItemListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost_name - computed: true, optional: false, required: false
  public get costName() {
    return this.getStringAttribute('cost_name');
  }

  // cost_value - computed: true, optional: false, required: false
  public get costValue() {
    return this.getNumberAttribute('cost_value');
  }
}

export class DataTencentcloudIgtmInstancePackageListInstanceSetCostItemListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudIgtmInstancePackageListInstanceSetCostItemListStructOutputReference {
    return new DataTencentcloudIgtmInstancePackageListInstanceSetCostItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudIgtmInstancePackageListInstanceSet {
}

export function dataTencentcloudIgtmInstancePackageListInstanceSetToTerraform(struct?: DataTencentcloudIgtmInstancePackageListInstanceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudIgtmInstancePackageListInstanceSetToHclTerraform(struct?: DataTencentcloudIgtmInstancePackageListInstanceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudIgtmInstancePackageListInstanceSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudIgtmInstancePackageListInstanceSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudIgtmInstancePackageListInstanceSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_renew_flag - computed: true, optional: false, required: false
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }

  // cost_item_list - computed: true, optional: false, required: false
  private _costItemList = new DataTencentcloudIgtmInstancePackageListInstanceSetCostItemListStructList(this, "cost_item_list", false);
  public get costItemList() {
    return this._costItemList;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // current_deadline - computed: true, optional: false, required: false
  public get currentDeadline() {
    return this.getStringAttribute('current_deadline');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // is_expire - computed: true, optional: false, required: false
  public get isExpire() {
    return this.getNumberAttribute('is_expire');
  }

  // min_check_interval - computed: true, optional: false, required: false
  public get minCheckInterval() {
    return this.getNumberAttribute('min_check_interval');
  }

  // min_global_ttl - computed: true, optional: false, required: false
  public get minGlobalTtl() {
    return this.getNumberAttribute('min_global_ttl');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // schedule_strategy - computed: true, optional: false, required: false
  public get scheduleStrategy() {
    return cdktf.Fn.tolist(this.getListAttribute('schedule_strategy'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // traffic_strategy - computed: true, optional: false, required: false
  public get trafficStrategy() {
    return cdktf.Fn.tolist(this.getListAttribute('traffic_strategy'));
  }
}

export class DataTencentcloudIgtmInstancePackageListInstanceSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudIgtmInstancePackageListInstanceSetOutputReference {
    return new DataTencentcloudIgtmInstancePackageListInstanceSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudIgtmInstancePackageListFilters {
  /**
  * Whether to enable fuzzy query, only supports filter field name as domain.
  * When fuzzy query is enabled, maximum Value length is 1, otherwise maximum Value length is 5. (Reserved field, not currently used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/igtm_instance_package_list#fuzzy DataTencentcloudIgtmInstancePackageList#fuzzy}
  */
  readonly fuzzy?: boolean | cdktf.IResolvable;
  /**
  * Filter field name, supported list as follows:
  * - InstanceId: instance ID.
  * - InstanceName: instance name.
  * - ResourceId: package ID.
  * - PackageType: package type. This is a required parameter, not passing it will cause interface query failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/igtm_instance_package_list#name DataTencentcloudIgtmInstancePackageList#name}
  */
  readonly name: string;
  /**
  * Filter field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/igtm_instance_package_list#value DataTencentcloudIgtmInstancePackageList#value}
  */
  readonly value: string[];
}

export function dataTencentcloudIgtmInstancePackageListFiltersToTerraform(struct?: DataTencentcloudIgtmInstancePackageListFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fuzzy: cdktf.booleanToTerraform(struct!.fuzzy),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataTencentcloudIgtmInstancePackageListFiltersToHclTerraform(struct?: DataTencentcloudIgtmInstancePackageListFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fuzzy: {
      value: cdktf.booleanToHclTerraform(struct!.fuzzy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudIgtmInstancePackageListFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudIgtmInstancePackageListFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fuzzy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fuzzy = this._fuzzy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudIgtmInstancePackageListFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fuzzy = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fuzzy = value.fuzzy;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // fuzzy - computed: false, optional: true, required: false
  private _fuzzy?: boolean | cdktf.IResolvable; 
  public get fuzzy() {
    return this.getBooleanAttribute('fuzzy');
  }
  public set fuzzy(value: boolean | cdktf.IResolvable) {
    this._fuzzy = value;
  }
  public resetFuzzy() {
    this._fuzzy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuzzyInput() {
    return this._fuzzy;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataTencentcloudIgtmInstancePackageListFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudIgtmInstancePackageListFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudIgtmInstancePackageListFiltersOutputReference {
    return new DataTencentcloudIgtmInstancePackageListFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/igtm_instance_package_list tencentcloud_igtm_instance_package_list}
*/
export class DataTencentcloudIgtmInstancePackageList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_igtm_instance_package_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudIgtmInstancePackageList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudIgtmInstancePackageList to import
  * @param importFromId The id of the existing DataTencentcloudIgtmInstancePackageList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/igtm_instance_package_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudIgtmInstancePackageList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_igtm_instance_package_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/igtm_instance_package_list tencentcloud_igtm_instance_package_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudIgtmInstancePackageListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudIgtmInstancePackageListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_igtm_instance_package_list',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._isUsed = config.isUsed;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
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

  // instance_set - computed: true, optional: false, required: false
  private _instanceSet = new DataTencentcloudIgtmInstancePackageListInstanceSetList(this, "instance_set", false);
  public get instanceSet() {
    return this._instanceSet;
  }

  // is_used - computed: false, optional: true, required: false
  private _isUsed?: number; 
  public get isUsed() {
    return this.getNumberAttribute('is_used');
  }
  public set isUsed(value: number) {
    this._isUsed = value;
  }
  public resetIsUsed() {
    this._isUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUsedInput() {
    return this._isUsed;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudIgtmInstancePackageListFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudIgtmInstancePackageListFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_used: cdktf.numberToTerraform(this._isUsed),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudIgtmInstancePackageListFiltersToTerraform, true)(this._filters.internalValue),
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
      is_used: {
        value: cdktf.numberToHclTerraform(this._isUsed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudIgtmInstancePackageListFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudIgtmInstancePackageListFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
