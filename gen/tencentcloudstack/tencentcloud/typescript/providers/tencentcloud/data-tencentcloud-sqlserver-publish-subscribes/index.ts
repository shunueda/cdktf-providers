// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudSqlserverPublishSubscribesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes#id DataTencentcloudSqlserverPublishSubscribes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the SQL Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes#instance_id DataTencentcloudSqlserverPublishSubscribes#instance_id}
  */
  readonly instanceId: string;
  /**
  * The subscribe/publish instance ID. It is related to whether the `instance_id` is a publish instance or a subscribe instance. when `instance_id` is a publish instance, this field is filtered according to the subscribe instance ID; when `instance_id` is a subscribe instance, this field is filtering according to the publish instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes#pub_or_sub_instance_id DataTencentcloudSqlserverPublishSubscribes#pub_or_sub_instance_id}
  */
  readonly pubOrSubInstanceId?: string;
  /**
  * The intranet IP of the subscribe/publish instance. It is related to whether the `instance_id` is a publish instance or a subscribe instance. when `instance_id` is a publish instance, this field is filtered according to the intranet IP of the subscribe instance; when `instance_id` is a subscribe instance, this field is based on the publish instance intranet IP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes#pub_or_sub_instance_ip DataTencentcloudSqlserverPublishSubscribes#pub_or_sub_instance_ip}
  */
  readonly pubOrSubInstanceIp?: string;
  /**
  * Name of publish database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes#publish_database DataTencentcloudSqlserverPublishSubscribes#publish_database}
  */
  readonly publishDatabase?: string;
  /**
  * The id of the Publish and Subscribe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes#publish_subscribe_id DataTencentcloudSqlserverPublishSubscribes#publish_subscribe_id}
  */
  readonly publishSubscribeId?: number;
  /**
  * The name of the Publish and Subscribe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes#publish_subscribe_name DataTencentcloudSqlserverPublishSubscribes#publish_subscribe_name}
  */
  readonly publishSubscribeName?: string;
  /**
  * Used to store results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes#result_output_file DataTencentcloudSqlserverPublishSubscribes#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Name of subscribe database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes#subscribe_database DataTencentcloudSqlserverPublishSubscribes#subscribe_database}
  */
  readonly subscribeDatabase?: string;
}
export interface DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListDatabaseTuples {
}

export function dataTencentcloudSqlserverPublishSubscribesPublishSubscribeListDatabaseTuplesToTerraform(struct?: DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListDatabaseTuples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSqlserverPublishSubscribesPublishSubscribeListDatabaseTuplesToHclTerraform(struct?: DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListDatabaseTuples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListDatabaseTuplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListDatabaseTuples | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListDatabaseTuples | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_sync_time - computed: true, optional: false, required: false
  public get lastSyncTime() {
    return this.getStringAttribute('last_sync_time');
  }

  // publish_database - computed: true, optional: false, required: false
  public get publishDatabase() {
    return this.getStringAttribute('publish_database');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subscribe_database - computed: true, optional: false, required: false
  public get subscribeDatabase() {
    return this.getStringAttribute('subscribe_database');
  }
}

export class DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListDatabaseTuplesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListDatabaseTuplesOutputReference {
    return new DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListDatabaseTuplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListStruct {
}

export function dataTencentcloudSqlserverPublishSubscribesPublishSubscribeListStructToTerraform(struct?: DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSqlserverPublishSubscribesPublishSubscribeListStructToHclTerraform(struct?: DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_tuples - computed: true, optional: false, required: false
  private _databaseTuples = new DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListDatabaseTuplesList(this, "database_tuples", true);
  public get databaseTuples() {
    return this._databaseTuples;
  }

  // publish_instance_id - computed: true, optional: false, required: false
  public get publishInstanceId() {
    return this.getStringAttribute('publish_instance_id');
  }

  // publish_instance_ip - computed: true, optional: false, required: false
  public get publishInstanceIp() {
    return this.getStringAttribute('publish_instance_ip');
  }

  // publish_instance_name - computed: true, optional: false, required: false
  public get publishInstanceName() {
    return this.getStringAttribute('publish_instance_name');
  }

  // publish_subscribe_id - computed: true, optional: false, required: false
  public get publishSubscribeId() {
    return this.getNumberAttribute('publish_subscribe_id');
  }

  // publish_subscribe_name - computed: true, optional: false, required: false
  public get publishSubscribeName() {
    return this.getStringAttribute('publish_subscribe_name');
  }

  // subscribe_instance_id - computed: true, optional: false, required: false
  public get subscribeInstanceId() {
    return this.getStringAttribute('subscribe_instance_id');
  }

  // subscribe_instance_ip - computed: true, optional: false, required: false
  public get subscribeInstanceIp() {
    return this.getStringAttribute('subscribe_instance_ip');
  }

  // subscribe_instance_name - computed: true, optional: false, required: false
  public get subscribeInstanceName() {
    return this.getStringAttribute('subscribe_instance_name');
  }
}

export class DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListStructOutputReference {
    return new DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes tencentcloud_sqlserver_publish_subscribes}
*/
export class DataTencentcloudSqlserverPublishSubscribes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_publish_subscribes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudSqlserverPublishSubscribes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudSqlserverPublishSubscribes to import
  * @param importFromId The id of the existing DataTencentcloudSqlserverPublishSubscribes that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudSqlserverPublishSubscribes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_publish_subscribes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/sqlserver_publish_subscribes tencentcloud_sqlserver_publish_subscribes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudSqlserverPublishSubscribesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudSqlserverPublishSubscribesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_publish_subscribes',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
    this._instanceId = config.instanceId;
    this._pubOrSubInstanceId = config.pubOrSubInstanceId;
    this._pubOrSubInstanceIp = config.pubOrSubInstanceIp;
    this._publishDatabase = config.publishDatabase;
    this._publishSubscribeId = config.publishSubscribeId;
    this._publishSubscribeName = config.publishSubscribeName;
    this._resultOutputFile = config.resultOutputFile;
    this._subscribeDatabase = config.subscribeDatabase;
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

  // pub_or_sub_instance_id - computed: false, optional: true, required: false
  private _pubOrSubInstanceId?: string; 
  public get pubOrSubInstanceId() {
    return this.getStringAttribute('pub_or_sub_instance_id');
  }
  public set pubOrSubInstanceId(value: string) {
    this._pubOrSubInstanceId = value;
  }
  public resetPubOrSubInstanceId() {
    this._pubOrSubInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubOrSubInstanceIdInput() {
    return this._pubOrSubInstanceId;
  }

  // pub_or_sub_instance_ip - computed: false, optional: true, required: false
  private _pubOrSubInstanceIp?: string; 
  public get pubOrSubInstanceIp() {
    return this.getStringAttribute('pub_or_sub_instance_ip');
  }
  public set pubOrSubInstanceIp(value: string) {
    this._pubOrSubInstanceIp = value;
  }
  public resetPubOrSubInstanceIp() {
    this._pubOrSubInstanceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubOrSubInstanceIpInput() {
    return this._pubOrSubInstanceIp;
  }

  // publish_database - computed: false, optional: true, required: false
  private _publishDatabase?: string; 
  public get publishDatabase() {
    return this.getStringAttribute('publish_database');
  }
  public set publishDatabase(value: string) {
    this._publishDatabase = value;
  }
  public resetPublishDatabase() {
    this._publishDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishDatabaseInput() {
    return this._publishDatabase;
  }

  // publish_subscribe_id - computed: false, optional: true, required: false
  private _publishSubscribeId?: number; 
  public get publishSubscribeId() {
    return this.getNumberAttribute('publish_subscribe_id');
  }
  public set publishSubscribeId(value: number) {
    this._publishSubscribeId = value;
  }
  public resetPublishSubscribeId() {
    this._publishSubscribeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishSubscribeIdInput() {
    return this._publishSubscribeId;
  }

  // publish_subscribe_list - computed: true, optional: false, required: false
  private _publishSubscribeList = new DataTencentcloudSqlserverPublishSubscribesPublishSubscribeListStructList(this, "publish_subscribe_list", false);
  public get publishSubscribeList() {
    return this._publishSubscribeList;
  }

  // publish_subscribe_name - computed: false, optional: true, required: false
  private _publishSubscribeName?: string; 
  public get publishSubscribeName() {
    return this.getStringAttribute('publish_subscribe_name');
  }
  public set publishSubscribeName(value: string) {
    this._publishSubscribeName = value;
  }
  public resetPublishSubscribeName() {
    this._publishSubscribeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishSubscribeNameInput() {
    return this._publishSubscribeName;
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

  // subscribe_database - computed: false, optional: true, required: false
  private _subscribeDatabase?: string; 
  public get subscribeDatabase() {
    return this.getStringAttribute('subscribe_database');
  }
  public set subscribeDatabase(value: string) {
    this._subscribeDatabase = value;
  }
  public resetSubscribeDatabase() {
    this._subscribeDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeDatabaseInput() {
    return this._subscribeDatabase;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      pub_or_sub_instance_id: cdktf.stringToTerraform(this._pubOrSubInstanceId),
      pub_or_sub_instance_ip: cdktf.stringToTerraform(this._pubOrSubInstanceIp),
      publish_database: cdktf.stringToTerraform(this._publishDatabase),
      publish_subscribe_id: cdktf.numberToTerraform(this._publishSubscribeId),
      publish_subscribe_name: cdktf.stringToTerraform(this._publishSubscribeName),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      subscribe_database: cdktf.stringToTerraform(this._subscribeDatabase),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pub_or_sub_instance_id: {
        value: cdktf.stringToHclTerraform(this._pubOrSubInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pub_or_sub_instance_ip: {
        value: cdktf.stringToHclTerraform(this._pubOrSubInstanceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_database: {
        value: cdktf.stringToHclTerraform(this._publishDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_subscribe_id: {
        value: cdktf.numberToHclTerraform(this._publishSubscribeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publish_subscribe_name: {
        value: cdktf.stringToHclTerraform(this._publishSubscribeName),
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
      subscribe_database: {
        value: cdktf.stringToHclTerraform(this._subscribeDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
