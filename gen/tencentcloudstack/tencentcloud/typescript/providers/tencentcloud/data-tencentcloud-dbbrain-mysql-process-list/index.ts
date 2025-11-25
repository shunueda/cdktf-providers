// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDbbrainMysqlProcessListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The execution type of the thread, used to filter the thread list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list#command DataTencentcloudDbbrainMysqlProcessList#command}
  */
  readonly command?: string;
  /**
  * The threads operations database, used to filter the thread list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list#db DataTencentcloudDbbrainMysqlProcessList#db}
  */
  readonly db?: string;
  /**
  * The operating host address of the thread, used to filter the thread list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list#host DataTencentcloudDbbrainMysqlProcessList#host}
  */
  readonly host?: string;
  /**
  * thread ID, used to filter the thread list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list#id DataTencentcloudDbbrainMysqlProcessList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The threads operation statement is used to filter the thread list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list#info DataTencentcloudDbbrainMysqlProcessList#info}
  */
  readonly info?: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list#instance_id DataTencentcloudDbbrainMysqlProcessList#instance_id}
  */
  readonly instanceId: string;
  /**
  * Service product type, supported values: `mysql` - cloud database MySQL; `cynosdb` - cloud database TDSQL-C for MySQL, the default is `mysql`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list#product DataTencentcloudDbbrainMysqlProcessList#product}
  */
  readonly product?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list#result_output_file DataTencentcloudDbbrainMysqlProcessList#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The operational state of the thread, used to filter the thread list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list#state DataTencentcloudDbbrainMysqlProcessList#state}
  */
  readonly state?: string;
  /**
  * The minimum value of the operation duration of a thread, in seconds, used to filter the list of threads whose operation duration is longer than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list#time DataTencentcloudDbbrainMysqlProcessList#time}
  */
  readonly time?: number;
  /**
  * The operating account name of the thread, used to filter the thread list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list#user DataTencentcloudDbbrainMysqlProcessList#user}
  */
  readonly user?: string;
}
export interface DataTencentcloudDbbrainMysqlProcessListProcessListStruct {
}

export function dataTencentcloudDbbrainMysqlProcessListProcessListStructToTerraform(struct?: DataTencentcloudDbbrainMysqlProcessListProcessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDbbrainMysqlProcessListProcessListStructToHclTerraform(struct?: DataTencentcloudDbbrainMysqlProcessListProcessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDbbrainMysqlProcessListProcessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDbbrainMysqlProcessListProcessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDbbrainMysqlProcessListProcessListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // db - computed: true, optional: false, required: false
  public get db() {
    return this.getStringAttribute('db');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // info - computed: true, optional: false, required: false
  public get info() {
    return this.getStringAttribute('info');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataTencentcloudDbbrainMysqlProcessListProcessListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDbbrainMysqlProcessListProcessListStructOutputReference {
    return new DataTencentcloudDbbrainMysqlProcessListProcessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list tencentcloud_dbbrain_mysql_process_list}
*/
export class DataTencentcloudDbbrainMysqlProcessList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dbbrain_mysql_process_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDbbrainMysqlProcessList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDbbrainMysqlProcessList to import
  * @param importFromId The id of the existing DataTencentcloudDbbrainMysqlProcessList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDbbrainMysqlProcessList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dbbrain_mysql_process_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dbbrain_mysql_process_list tencentcloud_dbbrain_mysql_process_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDbbrainMysqlProcessListConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDbbrainMysqlProcessListConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dbbrain_mysql_process_list',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._command = config.command;
    this._db = config.db;
    this._host = config.host;
    this._id = config.id;
    this._info = config.info;
    this._instanceId = config.instanceId;
    this._product = config.product;
    this._resultOutputFile = config.resultOutputFile;
    this._state = config.state;
    this._time = config.time;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // info - computed: false, optional: true, required: false
  private _info?: string; 
  public get info() {
    return this.getStringAttribute('info');
  }
  public set info(value: string) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
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

  // process_list - computed: true, optional: false, required: false
  private _processList = new DataTencentcloudDbbrainMysqlProcessListProcessListStructList(this, "process_list", false);
  public get processList() {
    return this._processList;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time - computed: false, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
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
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
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
      command: cdktf.stringToTerraform(this._command),
      db: cdktf.stringToTerraform(this._db),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.numberToTerraform(this._id),
      info: cdktf.stringToTerraform(this._info),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      product: cdktf.stringToTerraform(this._product),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      state: cdktf.stringToTerraform(this._state),
      time: cdktf.numberToTerraform(this._time),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db: {
        value: cdktf.stringToHclTerraform(this._db),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      info: {
        value: cdktf.stringToHclTerraform(this._info),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time: {
        value: cdktf.numberToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
