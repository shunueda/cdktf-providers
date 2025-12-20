// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elasticsearch_logstash_instance_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudElasticsearchLogstashInstanceLogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Log end time, in YYYY-MM-DD HH:MM:SS format, such as 2019-01-22 20:15:53.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elasticsearch_logstash_instance_logs#end_time DataTencentcloudElasticsearchLogstashInstanceLogs#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elasticsearch_logstash_instance_logs#id DataTencentcloudElasticsearchLogstashInstanceLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elasticsearch_logstash_instance_logs#instance_id DataTencentcloudElasticsearchLogstashInstanceLogs#instance_id}
  */
  readonly instanceId: string;
  /**
  * Log type. Default 1, Valid values:
  *  - 1: Main Log
  *  - 2: Slow log
  *  - 3: GC Log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elasticsearch_logstash_instance_logs#log_type DataTencentcloudElasticsearchLogstashInstanceLogs#log_type}
  */
  readonly logType: number;
  /**
  * Time sort method. Default is 0. 0: descending; 1: ascending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elasticsearch_logstash_instance_logs#order_by_type DataTencentcloudElasticsearchLogstashInstanceLogs#order_by_type}
  */
  readonly orderByType?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elasticsearch_logstash_instance_logs#result_output_file DataTencentcloudElasticsearchLogstashInstanceLogs#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Search terms, support LUCENE syntax, such as level:WARN, ip:1.1.1.1, message:test-index, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elasticsearch_logstash_instance_logs#search_key DataTencentcloudElasticsearchLogstashInstanceLogs#search_key}
  */
  readonly searchKey?: string;
  /**
  * Log start time, in YYYY-MM-DD HH:MM:SS format, such as 2019-01-22 20:15:53.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elasticsearch_logstash_instance_logs#start_time DataTencentcloudElasticsearchLogstashInstanceLogs#start_time}
  */
  readonly startTime?: string;
}
export interface DataTencentcloudElasticsearchLogstashInstanceLogsInstanceLogListStruct {
}

export function dataTencentcloudElasticsearchLogstashInstanceLogsInstanceLogListStructToTerraform(struct?: DataTencentcloudElasticsearchLogstashInstanceLogsInstanceLogListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticsearchLogstashInstanceLogsInstanceLogListStructToHclTerraform(struct?: DataTencentcloudElasticsearchLogstashInstanceLogsInstanceLogListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticsearchLogstashInstanceLogsInstanceLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticsearchLogstashInstanceLogsInstanceLogListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticsearchLogstashInstanceLogsInstanceLogListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataTencentcloudElasticsearchLogstashInstanceLogsInstanceLogListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticsearchLogstashInstanceLogsInstanceLogListStructOutputReference {
    return new DataTencentcloudElasticsearchLogstashInstanceLogsInstanceLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elasticsearch_logstash_instance_logs tencentcloud_elasticsearch_logstash_instance_logs}
*/
export class DataTencentcloudElasticsearchLogstashInstanceLogs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elasticsearch_logstash_instance_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudElasticsearchLogstashInstanceLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudElasticsearchLogstashInstanceLogs to import
  * @param importFromId The id of the existing DataTencentcloudElasticsearchLogstashInstanceLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elasticsearch_logstash_instance_logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudElasticsearchLogstashInstanceLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elasticsearch_logstash_instance_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elasticsearch_logstash_instance_logs tencentcloud_elasticsearch_logstash_instance_logs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudElasticsearchLogstashInstanceLogsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudElasticsearchLogstashInstanceLogsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elasticsearch_logstash_instance_logs',
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
    this._endTime = config.endTime;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._logType = config.logType;
    this._orderByType = config.orderByType;
    this._resultOutputFile = config.resultOutputFile;
    this._searchKey = config.searchKey;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_log_list - computed: true, optional: false, required: false
  private _instanceLogList = new DataTencentcloudElasticsearchLogstashInstanceLogsInstanceLogListStructList(this, "instance_log_list", false);
  public get instanceLogList() {
    return this._instanceLogList;
  }

  // log_type - computed: false, optional: false, required: true
  private _logType?: number; 
  public get logType() {
    return this.getNumberAttribute('log_type');
  }
  public set logType(value: number) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // order_by_type - computed: false, optional: true, required: false
  private _orderByType?: number; 
  public get orderByType() {
    return this.getNumberAttribute('order_by_type');
  }
  public set orderByType(value: number) {
    this._orderByType = value;
  }
  public resetOrderByType() {
    this._orderByType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByTypeInput() {
    return this._orderByType;
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

  // search_key - computed: false, optional: true, required: false
  private _searchKey?: string; 
  public get searchKey() {
    return this.getStringAttribute('search_key');
  }
  public set searchKey(value: string) {
    this._searchKey = value;
  }
  public resetSearchKey() {
    this._searchKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchKeyInput() {
    return this._searchKey;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
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
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      log_type: cdktf.numberToTerraform(this._logType),
      order_by_type: cdktf.numberToTerraform(this._orderByType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_key: cdktf.stringToTerraform(this._searchKey),
      start_time: cdktf.stringToTerraform(this._startTime),
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
      log_type: {
        value: cdktf.numberToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order_by_type: {
        value: cdktf.numberToHclTerraform(this._orderByType),
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
      search_key: {
        value: cdktf.stringToHclTerraform(this._searchKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
