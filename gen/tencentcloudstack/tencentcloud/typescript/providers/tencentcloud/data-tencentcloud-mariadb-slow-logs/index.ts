// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMariadbSlowLogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specific name of the database to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs#db DataTencentcloudMariadbSlowLogs#db}
  */
  readonly db?: string;
  /**
  * Query end time in the format of 2016-08-22 14:55:20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs#end_time DataTencentcloudMariadbSlowLogs#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs#id DataTencentcloudMariadbSlowLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID in the format of `tdsql-ow728lmc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs#instance_id DataTencentcloudMariadbSlowLogs#instance_id}
  */
  readonly instanceId: string;
  /**
  * Sorting metric. Valid values: query_time_sum, query_count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs#order_by DataTencentcloudMariadbSlowLogs#order_by}
  */
  readonly orderBy?: string;
  /**
  * Sorting order. Valid values: desc, asc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs#order_by_type DataTencentcloudMariadbSlowLogs#order_by_type}
  */
  readonly orderByType?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs#result_output_file DataTencentcloudMariadbSlowLogs#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Query slow queries from either the primary or the replica. Valid values: 0 (primary), 1 (replica).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs#slave DataTencentcloudMariadbSlowLogs#slave}
  */
  readonly slave?: number;
  /**
  * Query start time in the format of 2016-07-23 14:55:20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs#start_time DataTencentcloudMariadbSlowLogs#start_time}
  */
  readonly startTime: string;
}
export interface DataTencentcloudMariadbSlowLogsData {
}

export function dataTencentcloudMariadbSlowLogsDataToTerraform(struct?: DataTencentcloudMariadbSlowLogsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMariadbSlowLogsDataToHclTerraform(struct?: DataTencentcloudMariadbSlowLogsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMariadbSlowLogsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMariadbSlowLogsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMariadbSlowLogsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check_sum - computed: true, optional: false, required: false
  public get checkSum() {
    return this.getStringAttribute('check_sum');
  }

  // db - computed: true, optional: false, required: false
  public get db() {
    return this.getStringAttribute('db');
  }

  // example_sql - computed: true, optional: false, required: false
  public get exampleSql() {
    return this.getStringAttribute('example_sql');
  }

  // finger_print - computed: true, optional: false, required: false
  public get fingerPrint() {
    return this.getStringAttribute('finger_print');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // lock_time_avg - computed: true, optional: false, required: false
  public get lockTimeAvg() {
    return this.getStringAttribute('lock_time_avg');
  }

  // lock_time_max - computed: true, optional: false, required: false
  public get lockTimeMax() {
    return this.getStringAttribute('lock_time_max');
  }

  // lock_time_min - computed: true, optional: false, required: false
  public get lockTimeMin() {
    return this.getStringAttribute('lock_time_min');
  }

  // lock_time_sum - computed: true, optional: false, required: false
  public get lockTimeSum() {
    return this.getStringAttribute('lock_time_sum');
  }

  // query_count - computed: true, optional: false, required: false
  public get queryCount() {
    return this.getStringAttribute('query_count');
  }

  // query_time_avg - computed: true, optional: false, required: false
  public get queryTimeAvg() {
    return this.getStringAttribute('query_time_avg');
  }

  // query_time_max - computed: true, optional: false, required: false
  public get queryTimeMax() {
    return this.getStringAttribute('query_time_max');
  }

  // query_time_min - computed: true, optional: false, required: false
  public get queryTimeMin() {
    return this.getStringAttribute('query_time_min');
  }

  // query_time_sum - computed: true, optional: false, required: false
  public get queryTimeSum() {
    return this.getStringAttribute('query_time_sum');
  }

  // rows_examined_sum - computed: true, optional: false, required: false
  public get rowsExaminedSum() {
    return this.getStringAttribute('rows_examined_sum');
  }

  // rows_sent_sum - computed: true, optional: false, required: false
  public get rowsSentSum() {
    return this.getStringAttribute('rows_sent_sum');
  }

  // ts_max - computed: true, optional: false, required: false
  public get tsMax() {
    return this.getStringAttribute('ts_max');
  }

  // ts_min - computed: true, optional: false, required: false
  public get tsMin() {
    return this.getStringAttribute('ts_min');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataTencentcloudMariadbSlowLogsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMariadbSlowLogsDataOutputReference {
    return new DataTencentcloudMariadbSlowLogsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs tencentcloud_mariadb_slow_logs}
*/
export class DataTencentcloudMariadbSlowLogs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mariadb_slow_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMariadbSlowLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMariadbSlowLogs to import
  * @param importFromId The id of the existing DataTencentcloudMariadbSlowLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMariadbSlowLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mariadb_slow_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mariadb_slow_logs tencentcloud_mariadb_slow_logs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMariadbSlowLogsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMariadbSlowLogsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mariadb_slow_logs',
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
    this._db = config.db;
    this._endTime = config.endTime;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._orderBy = config.orderBy;
    this._orderByType = config.orderByType;
    this._resultOutputFile = config.resultOutputFile;
    this._slave = config.slave;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudMariadbSlowLogsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // db - computed: false, optional: true, required: false
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
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

  // lock_time_sum - computed: true, optional: false, required: false
  public get lockTimeSum() {
    return this.getNumberAttribute('lock_time_sum');
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

  // order_by_type - computed: false, optional: true, required: false
  private _orderByType?: string; 
  public get orderByType() {
    return this.getStringAttribute('order_by_type');
  }
  public set orderByType(value: string) {
    this._orderByType = value;
  }
  public resetOrderByType() {
    this._orderByType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByTypeInput() {
    return this._orderByType;
  }

  // query_count - computed: true, optional: false, required: false
  public get queryCount() {
    return this.getNumberAttribute('query_count');
  }

  // query_time_sum - computed: true, optional: false, required: false
  public get queryTimeSum() {
    return this.getNumberAttribute('query_time_sum');
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

  // slave - computed: false, optional: true, required: false
  private _slave?: number; 
  public get slave() {
    return this.getNumberAttribute('slave');
  }
  public set slave(value: number) {
    this._slave = value;
  }
  public resetSlave() {
    this._slave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveInput() {
    return this._slave;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db: cdktf.stringToTerraform(this._db),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      order_by: cdktf.stringToTerraform(this._orderBy),
      order_by_type: cdktf.stringToTerraform(this._orderByType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      slave: cdktf.numberToTerraform(this._slave),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db: {
        value: cdktf.stringToHclTerraform(this._db),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      order_by_type: {
        value: cdktf.stringToHclTerraform(this._orderByType),
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
      slave: {
        value: cdktf.numberToHclTerraform(this._slave),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
