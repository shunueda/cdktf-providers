// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMysqlSlowLogDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of databases accessed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data#data_bases DataTencentcloudMysqlSlowLogData#data_bases}
  */
  readonly dataBases?: string[];
  /**
  * End timestamp. For example 1585142640.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data#end_time DataTencentcloudMysqlSlowLogData#end_time}
  */
  readonly endTime: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data#id DataTencentcloudMysqlSlowLogData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Only valid when the instance is the master instance or disaster recovery instance, the optional value: slave, which means to pull the log of the slave machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data#inst_type DataTencentcloudMysqlSlowLogData#inst_type}
  */
  readonly instType?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data#instance_id DataTencentcloudMysqlSlowLogData#instance_id}
  */
  readonly instanceId: string;
  /**
  * Sort in ascending or descending order. Currently supported: ASC,DESC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data#order_by DataTencentcloudMysqlSlowLogData#order_by}
  */
  readonly orderBy?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data#result_output_file DataTencentcloudMysqlSlowLogData#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Sort field. Currently supported: Timestamp, QueryTime, LockTime, RowsExamined, RowsSent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data#sort_by DataTencentcloudMysqlSlowLogData#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Start timestamp. For example 1585142640.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data#start_time DataTencentcloudMysqlSlowLogData#start_time}
  */
  readonly startTime: number;
  /**
  * List of client hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data#user_hosts DataTencentcloudMysqlSlowLogData#user_hosts}
  */
  readonly userHosts?: string[];
  /**
  * A list of client usernames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data#user_names DataTencentcloudMysqlSlowLogData#user_names}
  */
  readonly userNames?: string[];
}
export interface DataTencentcloudMysqlSlowLogDataItems {
}

export function dataTencentcloudMysqlSlowLogDataItemsToTerraform(struct?: DataTencentcloudMysqlSlowLogDataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMysqlSlowLogDataItemsToHclTerraform(struct?: DataTencentcloudMysqlSlowLogDataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMysqlSlowLogDataItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMysqlSlowLogDataItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMysqlSlowLogDataItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // lock_time - computed: true, optional: false, required: false
  public get lockTime() {
    return this.getNumberAttribute('lock_time');
  }

  // md5 - computed: true, optional: false, required: false
  public get md5() {
    return this.getStringAttribute('md5');
  }

  // query_time - computed: true, optional: false, required: false
  public get queryTime() {
    return this.getNumberAttribute('query_time');
  }

  // rows_examined - computed: true, optional: false, required: false
  public get rowsExamined() {
    return this.getNumberAttribute('rows_examined');
  }

  // rows_sent - computed: true, optional: false, required: false
  public get rowsSent() {
    return this.getNumberAttribute('rows_sent');
  }

  // sql_template - computed: true, optional: false, required: false
  public get sqlTemplate() {
    return this.getStringAttribute('sql_template');
  }

  // sql_text - computed: true, optional: false, required: false
  public get sqlText() {
    return this.getStringAttribute('sql_text');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }

  // user_host - computed: true, optional: false, required: false
  public get userHost() {
    return this.getStringAttribute('user_host');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class DataTencentcloudMysqlSlowLogDataItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMysqlSlowLogDataItemsOutputReference {
    return new DataTencentcloudMysqlSlowLogDataItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data tencentcloud_mysql_slow_log_data}
*/
export class DataTencentcloudMysqlSlowLogData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_slow_log_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMysqlSlowLogData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMysqlSlowLogData to import
  * @param importFromId The id of the existing DataTencentcloudMysqlSlowLogData that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMysqlSlowLogData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_slow_log_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mysql_slow_log_data tencentcloud_mysql_slow_log_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMysqlSlowLogDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMysqlSlowLogDataConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_slow_log_data',
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
    this._dataBases = config.dataBases;
    this._endTime = config.endTime;
    this._id = config.id;
    this._instType = config.instType;
    this._instanceId = config.instanceId;
    this._orderBy = config.orderBy;
    this._resultOutputFile = config.resultOutputFile;
    this._sortBy = config.sortBy;
    this._startTime = config.startTime;
    this._userHosts = config.userHosts;
    this._userNames = config.userNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_bases - computed: false, optional: true, required: false
  private _dataBases?: string[]; 
  public get dataBases() {
    return cdktf.Fn.tolist(this.getListAttribute('data_bases'));
  }
  public set dataBases(value: string[]) {
    this._dataBases = value;
  }
  public resetDataBases() {
    this._dataBases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBasesInput() {
    return this._dataBases;
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

  // inst_type - computed: false, optional: true, required: false
  private _instType?: string; 
  public get instType() {
    return this.getStringAttribute('inst_type');
  }
  public set instType(value: string) {
    this._instType = value;
  }
  public resetInstType() {
    this._instType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instTypeInput() {
    return this._instType;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudMysqlSlowLogDataItemsList(this, "items", false);
  public get items() {
    return this._items;
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

  // start_time - computed: false, optional: false, required: true
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // user_hosts - computed: false, optional: true, required: false
  private _userHosts?: string[]; 
  public get userHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('user_hosts'));
  }
  public set userHosts(value: string[]) {
    this._userHosts = value;
  }
  public resetUserHosts() {
    this._userHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userHostsInput() {
    return this._userHosts;
  }

  // user_names - computed: false, optional: true, required: false
  private _userNames?: string[]; 
  public get userNames() {
    return cdktf.Fn.tolist(this.getListAttribute('user_names'));
  }
  public set userNames(value: string[]) {
    this._userNames = value;
  }
  public resetUserNames() {
    this._userNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNamesInput() {
    return this._userNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_bases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataBases),
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      inst_type: cdktf.stringToTerraform(this._instType),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      order_by: cdktf.stringToTerraform(this._orderBy),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      start_time: cdktf.numberToTerraform(this._startTime),
      user_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userHosts),
      user_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_bases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataBases),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inst_type: {
        value: cdktf.stringToHclTerraform(this._instType),
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
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
