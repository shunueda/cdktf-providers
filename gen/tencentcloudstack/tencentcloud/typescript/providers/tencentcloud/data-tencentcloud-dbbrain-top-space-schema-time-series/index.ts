// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_top_space_schema_time_series
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The deadline, such as 2021-01-01, the earliest is the 29th day before the current day, and the default is the current day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_top_space_schema_time_series#end_date DataTencentcloudDbbrainTopSpaceSchemaTimeSeries#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_top_space_schema_time_series#id DataTencentcloudDbbrainTopSpaceSchemaTimeSeries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_top_space_schema_time_series#instance_id DataTencentcloudDbbrainTopSpaceSchemaTimeSeries#instance_id}
  */
  readonly instanceId: string;
  /**
  * The number of Top libraries to return, the maximum value is 100, and the default is 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_top_space_schema_time_series#limit DataTencentcloudDbbrainTopSpaceSchemaTimeSeries#limit}
  */
  readonly limit?: number;
  /**
  * Service product type, supported values include: mysql - cloud database MySQL, cynosdb - cloud database CynosDB for MySQL, the default is mysql.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_top_space_schema_time_series#product DataTencentcloudDbbrainTopSpaceSchemaTimeSeries#product}
  */
  readonly product?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_top_space_schema_time_series#result_output_file DataTencentcloudDbbrainTopSpaceSchemaTimeSeries#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The sorting field used to filter the Top library. The optional fields include DataLength, IndexLength, TotalLength, DataFree, FragRatio, TableRows, and PhysicalFileSize (only supported by ApsaraDB for MySQL instances). The default for ApsaraDB for MySQL instances is PhysicalFileSize, and the default for other product instances is TotalLength.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_top_space_schema_time_series#sort_by DataTencentcloudDbbrainTopSpaceSchemaTimeSeries#sort_by}
  */
  readonly sortBy?: string;
  /**
  * The start date, such as 2021-01-01, the earliest is the 29th day before the current day, and the default is the 6th day before the deadline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_top_space_schema_time_series#start_date DataTencentcloudDbbrainTopSpaceSchemaTimeSeries#start_date}
  */
  readonly startDate?: string;
}
export interface DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataSeries {
}

export function dataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataSeriesToTerraform(struct?: DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataSeriesToHclTerraform(struct?: DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataSeriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataSeries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataSeries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('values')));
  }
}

export class DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataSeriesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataSeriesOutputReference {
    return new DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesData {
}

export function dataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataToTerraform(struct?: DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataToHclTerraform(struct?: DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // series - computed: true, optional: false, required: false
  private _series = new DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataSeriesList(this, "series", false);
  public get series() {
    return this._series;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('timestamp')));
  }
}

export class DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataOutputReference {
    return new DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeries {
}

export function dataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesToTerraform(struct?: DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesToHclTerraform(struct?: DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // series_data - computed: true, optional: false, required: false
  private _seriesData = new DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesSeriesDataList(this, "series_data", false);
  public get seriesData() {
    return this._seriesData;
  }

  // table_schema - computed: true, optional: false, required: false
  public get tableSchema() {
    return this.getStringAttribute('table_schema');
  }
}

export class DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesOutputReference {
    return new DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_top_space_schema_time_series tencentcloud_dbbrain_top_space_schema_time_series}
*/
export class DataTencentcloudDbbrainTopSpaceSchemaTimeSeries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dbbrain_top_space_schema_time_series";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDbbrainTopSpaceSchemaTimeSeries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDbbrainTopSpaceSchemaTimeSeries to import
  * @param importFromId The id of the existing DataTencentcloudDbbrainTopSpaceSchemaTimeSeries that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_top_space_schema_time_series#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDbbrainTopSpaceSchemaTimeSeries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dbbrain_top_space_schema_time_series", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_top_space_schema_time_series tencentcloud_dbbrain_top_space_schema_time_series} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dbbrain_top_space_schema_time_series',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endDate = config.endDate;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._limit = config.limit;
    this._product = config.product;
    this._resultOutputFile = config.resultOutputFile;
    this._sortBy = config.sortBy;
    this._startDate = config.startDate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
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

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // top_space_schema_time_series - computed: true, optional: false, required: false
  private _topSpaceSchemaTimeSeries = new DataTencentcloudDbbrainTopSpaceSchemaTimeSeriesTopSpaceSchemaTimeSeriesList(this, "top_space_schema_time_series", false);
  public get topSpaceSchemaTimeSeries() {
    return this._topSpaceSchemaTimeSeries;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_date: cdktf.stringToTerraform(this._endDate),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      limit: cdktf.numberToTerraform(this._limit),
      product: cdktf.stringToTerraform(this._product),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      start_date: cdktf.stringToTerraform(this._startDate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
      product: {
        value: cdktf.stringToHclTerraform(this._product),
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
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
