// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCatProbeDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * true is Ascending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#ascending DataTencentcloudCatProbeData#ascending}
  */
  readonly ascending: boolean | cdktf.IResolvable;
  /**
  * Start timestamp (in milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#begin_time DataTencentcloudCatProbeData#begin_time}
  */
  readonly beginTime: number;
  /**
  * City list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#city DataTencentcloudCatProbeData#city}
  */
  readonly city?: string[];
  /**
  * Code list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#code DataTencentcloudCatProbeData#code}
  */
  readonly code?: string[];
  /**
  * Districts list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#districts DataTencentcloudCatProbeData#districts}
  */
  readonly districts?: string[];
  /**
  * End timestamp (in milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#end_time DataTencentcloudCatProbeData#end_time}
  */
  readonly endTime: number;
  /**
  * ErrorTypes list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#error_types DataTencentcloudCatProbeData#error_types}
  */
  readonly errorTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#id DataTencentcloudCatProbeData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#limit DataTencentcloudCatProbeData#limit}
  */
  readonly limit: number;
  /**
  * Offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#offset DataTencentcloudCatProbeData#offset}
  */
  readonly offset: number;
  /**
  * Operators list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#operators DataTencentcloudCatProbeData#operators}
  */
  readonly operators?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#result_output_file DataTencentcloudCatProbeData#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Selected Fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#selected_fields DataTencentcloudCatProbeData#selected_fields}
  */
  readonly selectedFields: string[];
  /**
  * Fields to be sorted ProbeTime dial test time sorting can be filled in You can also fill in the selected fields in SelectedFields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#sort_field DataTencentcloudCatProbeData#sort_field}
  */
  readonly sortField: string;
  /**
  * TaskID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#task_id DataTencentcloudCatProbeData#task_id}
  */
  readonly taskId?: string[];
  /**
  * Task Type in AnalyzeTaskType_Network,AnalyzeTaskType_Browse,AnalyzeTaskType_UploadDownload,AnalyzeTaskType_Transport,AnalyzeTaskType_MediaStream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#task_type DataTencentcloudCatProbeData#task_type}
  */
  readonly taskType: string;
}
export interface DataTencentcloudCatProbeDataDetailedSingleDataDefineFields {
}

export function dataTencentcloudCatProbeDataDetailedSingleDataDefineFieldsToTerraform(struct?: DataTencentcloudCatProbeDataDetailedSingleDataDefineFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCatProbeDataDetailedSingleDataDefineFieldsToHclTerraform(struct?: DataTencentcloudCatProbeDataDetailedSingleDataDefineFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCatProbeDataDetailedSingleDataDefineFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCatProbeDataDetailedSingleDataDefineFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCatProbeDataDetailedSingleDataDefineFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataTencentcloudCatProbeDataDetailedSingleDataDefineFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCatProbeDataDetailedSingleDataDefineFieldsOutputReference {
    return new DataTencentcloudCatProbeDataDetailedSingleDataDefineFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCatProbeDataDetailedSingleDataDefineLabels {
}

export function dataTencentcloudCatProbeDataDetailedSingleDataDefineLabelsToTerraform(struct?: DataTencentcloudCatProbeDataDetailedSingleDataDefineLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCatProbeDataDetailedSingleDataDefineLabelsToHclTerraform(struct?: DataTencentcloudCatProbeDataDetailedSingleDataDefineLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCatProbeDataDetailedSingleDataDefineLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCatProbeDataDetailedSingleDataDefineLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCatProbeDataDetailedSingleDataDefineLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudCatProbeDataDetailedSingleDataDefineLabelsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCatProbeDataDetailedSingleDataDefineLabelsOutputReference {
    return new DataTencentcloudCatProbeDataDetailedSingleDataDefineLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCatProbeDataDetailedSingleDataDefine {
}

export function dataTencentcloudCatProbeDataDetailedSingleDataDefineToTerraform(struct?: DataTencentcloudCatProbeDataDetailedSingleDataDefine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCatProbeDataDetailedSingleDataDefineToHclTerraform(struct?: DataTencentcloudCatProbeDataDetailedSingleDataDefine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCatProbeDataDetailedSingleDataDefineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCatProbeDataDetailedSingleDataDefine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCatProbeDataDetailedSingleDataDefine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataTencentcloudCatProbeDataDetailedSingleDataDefineFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new DataTencentcloudCatProbeDataDetailedSingleDataDefineLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }

  // probe_time - computed: true, optional: false, required: false
  public get probeTime() {
    return this.getNumberAttribute('probe_time');
  }
}

export class DataTencentcloudCatProbeDataDetailedSingleDataDefineList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCatProbeDataDetailedSingleDataDefineOutputReference {
    return new DataTencentcloudCatProbeDataDetailedSingleDataDefineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data tencentcloud_cat_probe_data}
*/
export class DataTencentcloudCatProbeData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cat_probe_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCatProbeData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCatProbeData to import
  * @param importFromId The id of the existing DataTencentcloudCatProbeData that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCatProbeData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cat_probe_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cat_probe_data tencentcloud_cat_probe_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCatProbeDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCatProbeDataConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cat_probe_data',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ascending = config.ascending;
    this._beginTime = config.beginTime;
    this._city = config.city;
    this._code = config.code;
    this._districts = config.districts;
    this._endTime = config.endTime;
    this._errorTypes = config.errorTypes;
    this._id = config.id;
    this._limit = config.limit;
    this._offset = config.offset;
    this._operators = config.operators;
    this._resultOutputFile = config.resultOutputFile;
    this._selectedFields = config.selectedFields;
    this._sortField = config.sortField;
    this._taskId = config.taskId;
    this._taskType = config.taskType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ascending - computed: false, optional: false, required: true
  private _ascending?: boolean | cdktf.IResolvable; 
  public get ascending() {
    return this.getBooleanAttribute('ascending');
  }
  public set ascending(value: boolean | cdktf.IResolvable) {
    this._ascending = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ascendingInput() {
    return this._ascending;
  }

  // begin_time - computed: false, optional: false, required: true
  private _beginTime?: number; 
  public get beginTime() {
    return this.getNumberAttribute('begin_time');
  }
  public set beginTime(value: number) {
    this._beginTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginTimeInput() {
    return this._beginTime;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string[]; 
  public get city() {
    return cdktf.Fn.tolist(this.getListAttribute('city'));
  }
  public set city(value: string[]) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // code - computed: false, optional: true, required: false
  private _code?: string[]; 
  public get code() {
    return cdktf.Fn.tolist(this.getListAttribute('code'));
  }
  public set code(value: string[]) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // detailed_single_data_define - computed: true, optional: false, required: false
  private _detailedSingleDataDefine = new DataTencentcloudCatProbeDataDetailedSingleDataDefineList(this, "detailed_single_data_define", false);
  public get detailedSingleDataDefine() {
    return this._detailedSingleDataDefine;
  }

  // districts - computed: false, optional: true, required: false
  private _districts?: string[]; 
  public get districts() {
    return cdktf.Fn.tolist(this.getListAttribute('districts'));
  }
  public set districts(value: string[]) {
    this._districts = value;
  }
  public resetDistricts() {
    this._districts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get districtsInput() {
    return this._districts;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // error_types - computed: false, optional: true, required: false
  private _errorTypes?: string[]; 
  public get errorTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('error_types'));
  }
  public set errorTypes(value: string[]) {
    this._errorTypes = value;
  }
  public resetErrorTypes() {
    this._errorTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorTypesInput() {
    return this._errorTypes;
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

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: false, required: true
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // operators - computed: false, optional: true, required: false
  private _operators?: string[]; 
  public get operators() {
    return cdktf.Fn.tolist(this.getListAttribute('operators'));
  }
  public set operators(value: string[]) {
    this._operators = value;
  }
  public resetOperators() {
    this._operators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorsInput() {
    return this._operators;
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

  // selected_fields - computed: false, optional: false, required: true
  private _selectedFields?: string[]; 
  public get selectedFields() {
    return cdktf.Fn.tolist(this.getListAttribute('selected_fields'));
  }
  public set selectedFields(value: string[]) {
    this._selectedFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedFieldsInput() {
    return this._selectedFields;
  }

  // sort_field - computed: false, optional: false, required: true
  private _sortField?: string; 
  public get sortField() {
    return this.getStringAttribute('sort_field');
  }
  public set sortField(value: string) {
    this._sortField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortFieldInput() {
    return this._sortField;
  }

  // task_id - computed: false, optional: true, required: false
  private _taskId?: string[]; 
  public get taskId() {
    return cdktf.Fn.tolist(this.getListAttribute('task_id'));
  }
  public set taskId(value: string[]) {
    this._taskId = value;
  }
  public resetTaskId() {
    this._taskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ascending: cdktf.booleanToTerraform(this._ascending),
      begin_time: cdktf.numberToTerraform(this._beginTime),
      city: cdktf.listMapper(cdktf.stringToTerraform, false)(this._city),
      code: cdktf.listMapper(cdktf.stringToTerraform, false)(this._code),
      districts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._districts),
      end_time: cdktf.numberToTerraform(this._endTime),
      error_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._errorTypes),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      operators: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operators),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      selected_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedFields),
      sort_field: cdktf.stringToTerraform(this._sortField),
      task_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taskId),
      task_type: cdktf.stringToTerraform(this._taskType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ascending: {
        value: cdktf.booleanToHclTerraform(this._ascending),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      begin_time: {
        value: cdktf.numberToHclTerraform(this._beginTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      city: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._city),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      code: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._code),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      districts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._districts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._errorTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      operators: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operators),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selected_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedFields),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sort_field: {
        value: cdktf.stringToHclTerraform(this._sortField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._taskId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      task_type: {
        value: cdktf.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
