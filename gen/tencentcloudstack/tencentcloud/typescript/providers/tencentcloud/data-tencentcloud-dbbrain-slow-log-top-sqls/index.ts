// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDbbrainSlowLogTopSqlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The deadline, such as `2019-09-11 10:13:14`, the interval between the deadline and the start time is less than 7 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls#end_time DataTencentcloudDbbrainSlowLogTopSqls#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls#id DataTencentcloudDbbrainSlowLogTopSqls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls#instance_id DataTencentcloudDbbrainSlowLogTopSqls#instance_id}
  */
  readonly instanceId: string;
  /**
  * The sorting method supports ASC (ascending) and DESC (descending). The default is DESC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls#order_by DataTencentcloudDbbrainSlowLogTopSqls#order_by}
  */
  readonly orderBy?: string;
  /**
  * Service product type, supported values include: `mysql` - cloud database MySQL, `cynosdb` - cloud database CynosDB for MySQL, the default is `mysql`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls#product DataTencentcloudDbbrainSlowLogTopSqls#product}
  */
  readonly product?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls#result_output_file DataTencentcloudDbbrainSlowLogTopSqls#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Sort key, currently supports sort keys such as QueryTime, ExecTimes, RowsSent, LockTime and RowsExamined, the default is QueryTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls#sort_by DataTencentcloudDbbrainSlowLogTopSqls#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Start time, such as `2019-09-10 12:13:14`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls#start_time DataTencentcloudDbbrainSlowLogTopSqls#start_time}
  */
  readonly startTime: string;
  /**
  * schema_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls#schema_list DataTencentcloudDbbrainSlowLogTopSqls#schema_list}
  */
  readonly schemaList?: DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStruct[] | cdktf.IResolvable;
}
export interface DataTencentcloudDbbrainSlowLogTopSqlsRows {
}

export function dataTencentcloudDbbrainSlowLogTopSqlsRowsToTerraform(struct?: DataTencentcloudDbbrainSlowLogTopSqlsRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDbbrainSlowLogTopSqlsRowsToHclTerraform(struct?: DataTencentcloudDbbrainSlowLogTopSqlsRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDbbrainSlowLogTopSqlsRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDbbrainSlowLogTopSqlsRows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDbbrainSlowLogTopSqlsRows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exec_times - computed: true, optional: false, required: false
  public get execTimes() {
    return this.getNumberAttribute('exec_times');
  }

  // lock_time - computed: true, optional: false, required: false
  public get lockTime() {
    return this.getNumberAttribute('lock_time');
  }

  // lock_time_avg - computed: true, optional: false, required: false
  public get lockTimeAvg() {
    return this.getNumberAttribute('lock_time_avg');
  }

  // lock_time_max - computed: true, optional: false, required: false
  public get lockTimeMax() {
    return this.getNumberAttribute('lock_time_max');
  }

  // lock_time_min - computed: true, optional: false, required: false
  public get lockTimeMin() {
    return this.getNumberAttribute('lock_time_min');
  }

  // lock_time_ratio - computed: true, optional: false, required: false
  public get lockTimeRatio() {
    return this.getNumberAttribute('lock_time_ratio');
  }

  // md5 - computed: true, optional: false, required: false
  public get md5() {
    return this.getStringAttribute('md5');
  }

  // query_time - computed: true, optional: false, required: false
  public get queryTime() {
    return this.getNumberAttribute('query_time');
  }

  // query_time_avg - computed: true, optional: false, required: false
  public get queryTimeAvg() {
    return this.getNumberAttribute('query_time_avg');
  }

  // query_time_max - computed: true, optional: false, required: false
  public get queryTimeMax() {
    return this.getNumberAttribute('query_time_max');
  }

  // query_time_min - computed: true, optional: false, required: false
  public get queryTimeMin() {
    return this.getNumberAttribute('query_time_min');
  }

  // query_time_ratio - computed: true, optional: false, required: false
  public get queryTimeRatio() {
    return this.getNumberAttribute('query_time_ratio');
  }

  // rows_examined - computed: true, optional: false, required: false
  public get rowsExamined() {
    return this.getNumberAttribute('rows_examined');
  }

  // rows_examined_avg - computed: true, optional: false, required: false
  public get rowsExaminedAvg() {
    return this.getNumberAttribute('rows_examined_avg');
  }

  // rows_examined_max - computed: true, optional: false, required: false
  public get rowsExaminedMax() {
    return this.getNumberAttribute('rows_examined_max');
  }

  // rows_examined_min - computed: true, optional: false, required: false
  public get rowsExaminedMin() {
    return this.getNumberAttribute('rows_examined_min');
  }

  // rows_examined_ratio - computed: true, optional: false, required: false
  public get rowsExaminedRatio() {
    return this.getNumberAttribute('rows_examined_ratio');
  }

  // rows_sent - computed: true, optional: false, required: false
  public get rowsSent() {
    return this.getNumberAttribute('rows_sent');
  }

  // rows_sent_avg - computed: true, optional: false, required: false
  public get rowsSentAvg() {
    return this.getNumberAttribute('rows_sent_avg');
  }

  // rows_sent_max - computed: true, optional: false, required: false
  public get rowsSentMax() {
    return this.getNumberAttribute('rows_sent_max');
  }

  // rows_sent_min - computed: true, optional: false, required: false
  public get rowsSentMin() {
    return this.getNumberAttribute('rows_sent_min');
  }

  // rows_sent_ratio - computed: true, optional: false, required: false
  public get rowsSentRatio() {
    return this.getNumberAttribute('rows_sent_ratio');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // sql_template - computed: true, optional: false, required: false
  public get sqlTemplate() {
    return this.getStringAttribute('sql_template');
  }

  // sql_text - computed: true, optional: false, required: false
  public get sqlText() {
    return this.getStringAttribute('sql_text');
  }
}

export class DataTencentcloudDbbrainSlowLogTopSqlsRowsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDbbrainSlowLogTopSqlsRowsOutputReference {
    return new DataTencentcloudDbbrainSlowLogTopSqlsRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStruct {
  /**
  * DB name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls#schema DataTencentcloudDbbrainSlowLogTopSqls#schema}
  */
  readonly schema: string;
}

export function dataTencentcloudDbbrainSlowLogTopSqlsSchemaListStructToTerraform(struct?: DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function dataTencentcloudDbbrainSlowLogTopSqlsSchemaListStructToHclTerraform(struct?: DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schema = value.schema;
    }
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}

export class DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStructList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStructOutputReference {
    return new DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls tencentcloud_dbbrain_slow_log_top_sqls}
*/
export class DataTencentcloudDbbrainSlowLogTopSqls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dbbrain_slow_log_top_sqls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDbbrainSlowLogTopSqls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDbbrainSlowLogTopSqls to import
  * @param importFromId The id of the existing DataTencentcloudDbbrainSlowLogTopSqls that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDbbrainSlowLogTopSqls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dbbrain_slow_log_top_sqls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/dbbrain_slow_log_top_sqls tencentcloud_dbbrain_slow_log_top_sqls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDbbrainSlowLogTopSqlsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDbbrainSlowLogTopSqlsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dbbrain_slow_log_top_sqls',
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
    this._endTime = config.endTime;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._orderBy = config.orderBy;
    this._product = config.product;
    this._resultOutputFile = config.resultOutputFile;
    this._sortBy = config.sortBy;
    this._startTime = config.startTime;
    this._schemaList.internalValue = config.schemaList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
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

  // rows - computed: true, optional: false, required: false
  private _rows = new DataTencentcloudDbbrainSlowLogTopSqlsRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
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

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // schema_list - computed: false, optional: true, required: false
  private _schemaList = new DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStructList(this, "schema_list", false);
  public get schemaList() {
    return this._schemaList;
  }
  public putSchemaList(value: DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStruct[] | cdktf.IResolvable) {
    this._schemaList.internalValue = value;
  }
  public resetSchemaList() {
    this._schemaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaListInput() {
    return this._schemaList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      order_by: cdktf.stringToTerraform(this._orderBy),
      product: cdktf.stringToTerraform(this._product),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      start_time: cdktf.stringToTerraform(this._startTime),
      schema_list: cdktf.listMapper(dataTencentcloudDbbrainSlowLogTopSqlsSchemaListStructToTerraform, true)(this._schemaList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_list: {
        value: cdktf.listMapperHcl(dataTencentcloudDbbrainSlowLogTopSqlsSchemaListStructToHclTerraform, true)(this._schemaList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudDbbrainSlowLogTopSqlsSchemaListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
