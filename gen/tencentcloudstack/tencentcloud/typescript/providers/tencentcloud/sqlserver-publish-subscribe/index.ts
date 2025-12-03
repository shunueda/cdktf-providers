// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_publish_subscribe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverPublishSubscribeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to delete the subscriber database when deleting the Publish and Subscribe. `true` for deletes the subscribe database, `false` for does not delete the subscribe database. default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_publish_subscribe#delete_subscribe_db SqlserverPublishSubscribe#delete_subscribe_db}
  */
  readonly deleteSubscribeDb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_publish_subscribe#id SqlserverPublishSubscribe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the SQL Server instance which publish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_publish_subscribe#publish_instance_id SqlserverPublishSubscribe#publish_instance_id}
  */
  readonly publishInstanceId: string;
  /**
  * The name of the Publish and Subscribe. Default is `default_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_publish_subscribe#publish_subscribe_name SqlserverPublishSubscribe#publish_subscribe_name}
  */
  readonly publishSubscribeName?: string;
  /**
  * ID of the SQL Server instance which subscribe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_publish_subscribe#subscribe_instance_id SqlserverPublishSubscribe#subscribe_instance_id}
  */
  readonly subscribeInstanceId: string;
  /**
  * database_tuples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_publish_subscribe#database_tuples SqlserverPublishSubscribe#database_tuples}
  */
  readonly databaseTuples: SqlserverPublishSubscribeDatabaseTuples[] | cdktf.IResolvable;
}
export interface SqlserverPublishSubscribeDatabaseTuples {
  /**
  * Publish the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_publish_subscribe#publish_database SqlserverPublishSubscribe#publish_database}
  */
  readonly publishDatabase: string;
  /**
  * Subscribe the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_publish_subscribe#subscribe_database SqlserverPublishSubscribe#subscribe_database}
  */
  readonly subscribeDatabase: string;
}

export function sqlserverPublishSubscribeDatabaseTuplesToTerraform(struct?: SqlserverPublishSubscribeDatabaseTuples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    publish_database: cdktf.stringToTerraform(struct!.publishDatabase),
    subscribe_database: cdktf.stringToTerraform(struct!.subscribeDatabase),
  }
}


export function sqlserverPublishSubscribeDatabaseTuplesToHclTerraform(struct?: SqlserverPublishSubscribeDatabaseTuples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    publish_database: {
      value: cdktf.stringToHclTerraform(struct!.publishDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscribe_database: {
      value: cdktf.stringToHclTerraform(struct!.subscribeDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverPublishSubscribeDatabaseTuplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlserverPublishSubscribeDatabaseTuples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publishDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishDatabase = this._publishDatabase;
    }
    if (this._subscribeDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribeDatabase = this._subscribeDatabase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverPublishSubscribeDatabaseTuples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publishDatabase = undefined;
      this._subscribeDatabase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publishDatabase = value.publishDatabase;
      this._subscribeDatabase = value.subscribeDatabase;
    }
  }

  // publish_database - computed: false, optional: false, required: true
  private _publishDatabase?: string; 
  public get publishDatabase() {
    return this.getStringAttribute('publish_database');
  }
  public set publishDatabase(value: string) {
    this._publishDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishDatabaseInput() {
    return this._publishDatabase;
  }

  // subscribe_database - computed: false, optional: false, required: true
  private _subscribeDatabase?: string; 
  public get subscribeDatabase() {
    return this.getStringAttribute('subscribe_database');
  }
  public set subscribeDatabase(value: string) {
    this._subscribeDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeDatabaseInput() {
    return this._subscribeDatabase;
  }
}

export class SqlserverPublishSubscribeDatabaseTuplesList extends cdktf.ComplexList {
  public internalValue? : SqlserverPublishSubscribeDatabaseTuples[] | cdktf.IResolvable

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
  public get(index: number): SqlserverPublishSubscribeDatabaseTuplesOutputReference {
    return new SqlserverPublishSubscribeDatabaseTuplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_publish_subscribe tencentcloud_sqlserver_publish_subscribe}
*/
export class SqlserverPublishSubscribe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_publish_subscribe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverPublishSubscribe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverPublishSubscribe to import
  * @param importFromId The id of the existing SqlserverPublishSubscribe that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_publish_subscribe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverPublishSubscribe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_publish_subscribe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_publish_subscribe tencentcloud_sqlserver_publish_subscribe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverPublishSubscribeConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverPublishSubscribeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_publish_subscribe',
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
    this._deleteSubscribeDb = config.deleteSubscribeDb;
    this._id = config.id;
    this._publishInstanceId = config.publishInstanceId;
    this._publishSubscribeName = config.publishSubscribeName;
    this._subscribeInstanceId = config.subscribeInstanceId;
    this._databaseTuples.internalValue = config.databaseTuples;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_subscribe_db - computed: false, optional: true, required: false
  private _deleteSubscribeDb?: boolean | cdktf.IResolvable; 
  public get deleteSubscribeDb() {
    return this.getBooleanAttribute('delete_subscribe_db');
  }
  public set deleteSubscribeDb(value: boolean | cdktf.IResolvable) {
    this._deleteSubscribeDb = value;
  }
  public resetDeleteSubscribeDb() {
    this._deleteSubscribeDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSubscribeDbInput() {
    return this._deleteSubscribeDb;
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

  // publish_instance_id - computed: false, optional: false, required: true
  private _publishInstanceId?: string; 
  public get publishInstanceId() {
    return this.getStringAttribute('publish_instance_id');
  }
  public set publishInstanceId(value: string) {
    this._publishInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInstanceIdInput() {
    return this._publishInstanceId;
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

  // subscribe_instance_id - computed: false, optional: false, required: true
  private _subscribeInstanceId?: string; 
  public get subscribeInstanceId() {
    return this.getStringAttribute('subscribe_instance_id');
  }
  public set subscribeInstanceId(value: string) {
    this._subscribeInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeInstanceIdInput() {
    return this._subscribeInstanceId;
  }

  // database_tuples - computed: false, optional: false, required: true
  private _databaseTuples = new SqlserverPublishSubscribeDatabaseTuplesList(this, "database_tuples", true);
  public get databaseTuples() {
    return this._databaseTuples;
  }
  public putDatabaseTuples(value: SqlserverPublishSubscribeDatabaseTuples[] | cdktf.IResolvable) {
    this._databaseTuples.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTuplesInput() {
    return this._databaseTuples.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_subscribe_db: cdktf.booleanToTerraform(this._deleteSubscribeDb),
      id: cdktf.stringToTerraform(this._id),
      publish_instance_id: cdktf.stringToTerraform(this._publishInstanceId),
      publish_subscribe_name: cdktf.stringToTerraform(this._publishSubscribeName),
      subscribe_instance_id: cdktf.stringToTerraform(this._subscribeInstanceId),
      database_tuples: cdktf.listMapper(sqlserverPublishSubscribeDatabaseTuplesToTerraform, true)(this._databaseTuples.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_subscribe_db: {
        value: cdktf.booleanToHclTerraform(this._deleteSubscribeDb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_instance_id: {
        value: cdktf.stringToHclTerraform(this._publishInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_subscribe_name: {
        value: cdktf.stringToHclTerraform(this._publishSubscribeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscribe_instance_id: {
        value: cdktf.stringToHclTerraform(this._subscribeInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_tuples: {
        value: cdktf.listMapperHcl(sqlserverPublishSubscribeDatabaseTuplesToHclTerraform, true)(this._databaseTuples.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SqlserverPublishSubscribeDatabaseTuplesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
