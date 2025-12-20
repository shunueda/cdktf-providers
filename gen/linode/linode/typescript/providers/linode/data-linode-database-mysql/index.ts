// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/database_mysql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeDatabaseMysqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the MySQL database. DEPRECATED: Use ID instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/database_mysql#database_id DataLinodeDatabaseMysql#database_id}
  */
  readonly databaseId?: number;
  /**
  * Unique identifier for this DataSource. The ID of the MySQL database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/database_mysql#id DataLinodeDatabaseMysql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}
export interface DataLinodeDatabaseMysqlUpdates {
}

export function dataLinodeDatabaseMysqlUpdatesToTerraform(struct?: DataLinodeDatabaseMysqlUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlUpdatesToHclTerraform(struct?: DataLinodeDatabaseMysqlUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlUpdatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeDatabaseMysqlUpdates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlUpdates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // hour_of_day - computed: true, optional: false, required: false
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }

  // week_of_month - computed: true, optional: false, required: false
  public get weekOfMonth() {
    return this.getNumberAttribute('week_of_month');
  }
}

export class DataLinodeDatabaseMysqlUpdatesList extends cdktf.ComplexList {

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
  public get(index: number): DataLinodeDatabaseMysqlUpdatesOutputReference {
    return new DataLinodeDatabaseMysqlUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/database_mysql linode_database_mysql}
*/
export class DataLinodeDatabaseMysql extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_database_mysql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeDatabaseMysql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeDatabaseMysql to import
  * @param importFromId The id of the existing DataLinodeDatabaseMysql that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/database_mysql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeDatabaseMysql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_database_mysql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/database_mysql linode_database_mysql} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeDatabaseMysqlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLinodeDatabaseMysqlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_database_mysql',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseId = config.databaseId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list - computed: true, optional: false, required: false
  public get allowList() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_list'));
  }

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // cluster_size - computed: true, optional: false, required: false
  public get clusterSize() {
    return this.getNumberAttribute('cluster_size');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // database_id - computed: false, optional: true, required: false
  private _databaseId?: number; 
  public get databaseId() {
    return this.getNumberAttribute('database_id');
  }
  public set databaseId(value: number) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }

  // host_primary - computed: true, optional: false, required: false
  public get hostPrimary() {
    return this.getStringAttribute('host_primary');
  }

  // host_secondary - computed: true, optional: false, required: false
  public get hostSecondary() {
    return this.getStringAttribute('host_secondary');
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

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // replication_type - computed: true, optional: false, required: false
  public get replicationType() {
    return this.getStringAttribute('replication_type');
  }

  // root_password - computed: true, optional: false, required: false
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }

  // root_username - computed: true, optional: false, required: false
  public get rootUsername() {
    return this.getStringAttribute('root_username');
  }

  // ssl_connection - computed: true, optional: false, required: false
  public get sslConnection() {
    return this.getBooleanAttribute('ssl_connection');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // updates - computed: true, optional: false, required: false
  private _updates = new DataLinodeDatabaseMysqlUpdatesList(this, "updates", false);
  public get updates() {
    return this._updates;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: cdktf.numberToTerraform(this._databaseId),
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_id: {
        value: cdktf.numberToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
