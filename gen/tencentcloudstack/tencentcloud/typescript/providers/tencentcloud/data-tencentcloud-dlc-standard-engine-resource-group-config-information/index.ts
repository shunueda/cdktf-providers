// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dlc_standard_engine_resource_group_config_information
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDlcStandardEngineResourceGroupConfigInformationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dlc_standard_engine_resource_group_config_information#id DataTencentcloudDlcStandardEngineResourceGroupConfigInformation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dlc_standard_engine_resource_group_config_information#result_output_file DataTencentcloudDlcStandardEngineResourceGroupConfigInformation#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Sort Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dlc_standard_engine_resource_group_config_information#sort_by DataTencentcloudDlcStandardEngineResourceGroupConfigInformation#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Ascending or descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dlc_standard_engine_resource_group_config_information#sorting DataTencentcloudDlcStandardEngineResourceGroupConfigInformation#sorting}
  */
  readonly sorting?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dlc_standard_engine_resource_group_config_information#filters DataTencentcloudDlcStandardEngineResourceGroupConfigInformation#filters}
  */
  readonly filters?: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosDynamicConfigPairs {
}

export function dataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosDynamicConfigPairsToTerraform(struct?: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosDynamicConfigPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosDynamicConfigPairsToHclTerraform(struct?: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosDynamicConfigPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosDynamicConfigPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosDynamicConfigPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosDynamicConfigPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_item - computed: true, optional: false, required: false
  public get configItem() {
    return this.getStringAttribute('config_item');
  }

  // config_value - computed: true, optional: false, required: false
  public get configValue() {
    return this.getStringAttribute('config_value');
  }
}

export class DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosDynamicConfigPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosDynamicConfigPairsOutputReference {
    return new DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosDynamicConfigPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosStaticConfigPairs {
}

export function dataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosStaticConfigPairsToTerraform(struct?: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosStaticConfigPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosStaticConfigPairsToHclTerraform(struct?: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosStaticConfigPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosStaticConfigPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosStaticConfigPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosStaticConfigPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_item - computed: true, optional: false, required: false
  public get configItem() {
    return this.getStringAttribute('config_item');
  }

  // config_value - computed: true, optional: false, required: false
  public get configValue() {
    return this.getStringAttribute('config_value');
  }
}

export class DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosStaticConfigPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosStaticConfigPairsOutputReference {
    return new DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosStaticConfigPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfos {
}

export function dataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosToTerraform(struct?: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosToHclTerraform(struct?: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // data_engine_id - computed: true, optional: false, required: false
  public get dataEngineId() {
    return this.getStringAttribute('data_engine_id');
  }

  // dynamic_config_pairs - computed: true, optional: false, required: false
  private _dynamicConfigPairs = new DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosDynamicConfigPairsList(this, "dynamic_config_pairs", false);
  public get dynamicConfigPairs() {
    return this._dynamicConfigPairs;
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // static_config_pairs - computed: true, optional: false, required: false
  private _staticConfigPairs = new DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosStaticConfigPairsList(this, "static_config_pairs", false);
  public get staticConfigPairs() {
    return this._staticConfigPairs;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }
}

export class DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosOutputReference {
    return new DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFilters {
  /**
  * Attribute name. If there are multiple filters, the relationship between the filters is a logical OR relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dlc_standard_engine_resource_group_config_information#name DataTencentcloudDlcStandardEngineResourceGroupConfigInformation#name}
  */
  readonly name: string;
  /**
  * Attribute value, if there are multiple Values in the same Filter, the relationship between the Values under the same Filter is a logical OR relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dlc_standard_engine_resource_group_config_information#values DataTencentcloudDlcStandardEngineResourceGroupConfigInformation#values}
  */
  readonly values: string[];
}

export function dataTencentcloudDlcStandardEngineResourceGroupConfigInformationFiltersToTerraform(struct?: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudDlcStandardEngineResourceGroupConfigInformationFiltersToHclTerraform(struct?: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFilters | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFiltersOutputReference {
    return new DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dlc_standard_engine_resource_group_config_information tencentcloud_dlc_standard_engine_resource_group_config_information}
*/
export class DataTencentcloudDlcStandardEngineResourceGroupConfigInformation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_standard_engine_resource_group_config_information";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDlcStandardEngineResourceGroupConfigInformation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDlcStandardEngineResourceGroupConfigInformation to import
  * @param importFromId The id of the existing DataTencentcloudDlcStandardEngineResourceGroupConfigInformation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dlc_standard_engine_resource_group_config_information#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDlcStandardEngineResourceGroupConfigInformation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_standard_engine_resource_group_config_information", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/dlc_standard_engine_resource_group_config_information tencentcloud_dlc_standard_engine_resource_group_config_information} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDlcStandardEngineResourceGroupConfigInformationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_standard_engine_resource_group_config_information',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._resultOutputFile = config.resultOutputFile;
    this._sortBy = config.sortBy;
    this._sorting = config.sorting;
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

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sorting - computed: false, optional: true, required: false
  private _sorting?: string; 
  public get sorting() {
    return this.getStringAttribute('sorting');
  }
  public set sorting(value: string) {
    this._sorting = value;
  }
  public resetSorting() {
    this._sorting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortingInput() {
    return this._sorting;
  }

  // standard_engine_resource_group_config_infos - computed: true, optional: false, required: false
  private _standardEngineResourceGroupConfigInfos = new DataTencentcloudDlcStandardEngineResourceGroupConfigInformationStandardEngineResourceGroupConfigInfosList(this, "standard_engine_resource_group_config_infos", false);
  public get standardEngineResourceGroupConfigInfos() {
    return this._standardEngineResourceGroupConfigInfos;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFilters[] | cdktf.IResolvable) {
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
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sorting: cdktf.stringToTerraform(this._sorting),
      filters: cdktf.listMapper(dataTencentcloudDlcStandardEngineResourceGroupConfigInformationFiltersToTerraform, true)(this._filters.internalValue),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sorting: {
        value: cdktf.stringToHclTerraform(this._sorting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudDlcStandardEngineResourceGroupConfigInformationFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudDlcStandardEngineResourceGroupConfigInformationFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
