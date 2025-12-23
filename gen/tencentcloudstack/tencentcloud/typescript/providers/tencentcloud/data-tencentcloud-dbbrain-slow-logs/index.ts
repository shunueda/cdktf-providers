// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDbbrainSlowLogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * database list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#db DataTencentcloudDbbrainSlowLogs#db}
  */
  readonly db?: string[];
  /**
  * The deadline, such as 2019-09-11 10:13:14, the interval between the deadline and the start time is less than 7 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#end_time DataTencentcloudDbbrainSlowLogs#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#id DataTencentcloudDbbrainSlowLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#instance_id DataTencentcloudDbbrainSlowLogs#instance_id}
  */
  readonly instanceId: string;
  /**
  * ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#ip DataTencentcloudDbbrainSlowLogs#ip}
  */
  readonly ip?: string[];
  /**
  * keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#key DataTencentcloudDbbrainSlowLogs#key}
  */
  readonly key?: string[];
  /**
  * md5 value of sql template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#md5 DataTencentcloudDbbrainSlowLogs#md5}
  */
  readonly md5: string;
  /**
  * Service product type, supported values include: mysql - cloud database MySQL, cynosdb - cloud database CynosDB for MySQL, the default is mysql.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#product DataTencentcloudDbbrainSlowLogs#product}
  */
  readonly product: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#result_output_file DataTencentcloudDbbrainSlowLogs#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Start time, such as 2019-09-10 12:13:14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#start_time DataTencentcloudDbbrainSlowLogs#start_time}
  */
  readonly startTime: string;
  /**
  * Time-consuming interval, the left and right boundaries of the time-consuming interval correspond to the 0th element and the first element of the array respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#time DataTencentcloudDbbrainSlowLogs#time}
  */
  readonly time?: number[];
  /**
  * user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#user DataTencentcloudDbbrainSlowLogs#user}
  */
  readonly user?: string[];
}
export interface DataTencentcloudDbbrainSlowLogsRows {
}

export function dataTencentcloudDbbrainSlowLogsRowsToTerraform(struct?: DataTencentcloudDbbrainSlowLogsRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDbbrainSlowLogsRowsToHclTerraform(struct?: DataTencentcloudDbbrainSlowLogsRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDbbrainSlowLogsRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDbbrainSlowLogsRows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDbbrainSlowLogsRows | undefined) {
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

  // sql_text - computed: true, optional: false, required: false
  public get sqlText() {
    return this.getStringAttribute('sql_text');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
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

export class DataTencentcloudDbbrainSlowLogsRowsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDbbrainSlowLogsRowsOutputReference {
    return new DataTencentcloudDbbrainSlowLogsRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs tencentcloud_dbbrain_slow_logs}
*/
export class DataTencentcloudDbbrainSlowLogs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dbbrain_slow_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDbbrainSlowLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDbbrainSlowLogs to import
  * @param importFromId The id of the existing DataTencentcloudDbbrainSlowLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDbbrainSlowLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dbbrain_slow_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/dbbrain_slow_logs tencentcloud_dbbrain_slow_logs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDbbrainSlowLogsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDbbrainSlowLogsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dbbrain_slow_logs',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
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
    this._ip = config.ip;
    this._key = config.key;
    this._md5 = config.md5;
    this._product = config.product;
    this._resultOutputFile = config.resultOutputFile;
    this._startTime = config.startTime;
    this._time = config.time;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db - computed: false, optional: true, required: false
  private _db?: string[]; 
  public get db() {
    return cdktf.Fn.tolist(this.getListAttribute('db'));
  }
  public set db(value: string[]) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

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

  // ip - computed: false, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return cdktf.Fn.tolist(this.getListAttribute('ip'));
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string[]; 
  public get key() {
    return cdktf.Fn.tolist(this.getListAttribute('key'));
  }
  public set key(value: string[]) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // md5 - computed: false, optional: false, required: true
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
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
  private _rows = new DataTencentcloudDbbrainSlowLogsRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
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

  // time - computed: false, optional: true, required: false
  private _time?: number[]; 
  public get time() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('time')));
  }
  public set time(value: number[]) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string[]; 
  public get user() {
    return cdktf.Fn.tolist(this.getListAttribute('user'));
  }
  public set user(value: string[]) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db: cdktf.listMapper(cdktf.stringToTerraform, false)(this._db),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ip),
      key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._key),
      md5: cdktf.stringToTerraform(this._md5),
      product: cdktf.stringToTerraform(this._product),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_time: cdktf.stringToTerraform(this._startTime),
      time: cdktf.listMapper(cdktf.numberToTerraform, false)(this._time),
      user: cdktf.listMapper(cdktf.stringToTerraform, false)(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._db),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ip),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._key),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      md5: {
        value: cdktf.stringToHclTerraform(this._md5),
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
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._time),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      user: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._user),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
