// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_postgresql_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbPostgresqlUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_postgresql_user#cluster_id DataYandexMdbPostgresqlUser#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The maximum number of connections per user. (Default 50).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_postgresql_user#conn_limit DataYandexMdbPostgresqlUser#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_postgresql_user#deletion_protection DataYandexMdbPostgresqlUser#deletion_protection}
  */
  readonly deletionProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_postgresql_user#id DataYandexMdbPostgresqlUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User's ability to login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_postgresql_user#login DataYandexMdbPostgresqlUser#login}
  */
  readonly login?: boolean | cdktf.IResolvable;
  /**
  * The name of the PostgreSQL user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_postgresql_user#name DataYandexMdbPostgresqlUser#name}
  */
  readonly name: string;
  /**
  * Map of user settings. [Full description](https://yandex.cloud/docs/managed-postgresql/api-ref/grpc/Cluster/create#yandex.cloud.mdb.postgresql.v1.UserSettings).
  * 
  * * `default_transaction_isolation` - defines the default isolation level to be set for all new SQL transactions. One of:
  *   - `read uncommitted`
  *   - `read committed`
  *   - `repeatable read`
  *   - `serializable`
  * 
  * * `lock_timeout` - The maximum time (in milliseconds) for any statement to wait for acquiring a lock on an table, index, row or other database object (default 0)
  * 
  * * `log_min_duration_statement` - This setting controls logging of the duration of statements. (default -1 disables logging of the duration of statements.)
  * 
  * * `synchronous_commit` - This setting defines whether DBMS will commit transaction in a synchronous way. One of:
  *   - `on`
  *   - `off`
  *   - `local`
  *   - `remote write`
  *   - `remote apply`
  * 
  * * `temp_file_limit` - The maximum storage space size (in kilobytes) that a single process can use to create temporary files.
  * 
  * * `log_statement` - This setting specifies which SQL statements should be logged (on the user level). One of:
  *   - `none`
  *   - `ddl`
  *   - `mod`
  *   - `all`
  * 
  * * `pool_mode` - Mode that the connection pooler is working in with specified user. One of:
  *   - `session`
  *   - `transaction`
  *   - `statement`
  * 
  * * `prepared_statements_pooling` - This setting allows user to use prepared statements with transaction pooling. Boolean.
  * 
  * * `catchup_timeout` - The connection pooler setting. It determines the maximum allowed replication lag (in seconds). Pooler will reject connections to the replica with a lag above this threshold. Default value is 0, which disables this feature. Integer.
  * 
  * * `wal_sender_timeout` - The maximum time (in milliseconds) to wait for WAL replication (can be set only for PostgreSQL 12+). Terminate replication connections that are inactive for longer than this amount of time. Integer.
  * 
  * * `idle_in_transaction_session_timeout` - Sets the maximum allowed idle time (in milliseconds) between queries, when in a transaction. Value of 0 (default) disables the timeout. Integer.
  * 
  * * `statement_timeout` - The maximum time (in milliseconds) to wait for statement. Value of 0 (default) disables the timeout. Integer.
  * 
  * * `pgaudit` - Settings of the PostgreSQL Audit Extension (pgaudit). [Full description](https://yandex.cloud/ru/docs/managed-postgresql/api-ref/grpc/Cluster/create#yandex.cloud.mdb.postgresql.v1.PGAuditSettings). String (json with with escaped quotes). Example `"{\"log\": [\"READ\", \"WRITE\"]}"`
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_postgresql_user#settings DataYandexMdbPostgresqlUser#settings}
  */
  readonly settings?: { [key: string]: string };
}
export interface DataYandexMdbPostgresqlUserPermission {
}

export function dataYandexMdbPostgresqlUserPermissionToTerraform(struct?: DataYandexMdbPostgresqlUserPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbPostgresqlUserPermissionToHclTerraform(struct?: DataYandexMdbPostgresqlUserPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbPostgresqlUserPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbPostgresqlUserPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbPostgresqlUserPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
}

export class DataYandexMdbPostgresqlUserPermissionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbPostgresqlUserPermissionOutputReference {
    return new DataYandexMdbPostgresqlUserPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_postgresql_user yandex_mdb_postgresql_user}
*/
export class DataYandexMdbPostgresqlUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_postgresql_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexMdbPostgresqlUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexMdbPostgresqlUser to import
  * @param importFromId The id of the existing DataYandexMdbPostgresqlUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_postgresql_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexMdbPostgresqlUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_postgresql_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/data-sources/mdb_postgresql_user yandex_mdb_postgresql_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbPostgresqlUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbPostgresqlUserConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_postgresql_user',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._connLimit = config.connLimit;
    this._deletionProtection = config.deletionProtection;
    this._id = config.id;
    this._login = config.login;
    this._name = config.name;
    this._settings = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_method - computed: true, optional: false, required: false
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // conn_limit - computed: false, optional: true, required: false
  private _connLimit?: number; 
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }
  public set connLimit(value: number) {
    this._connLimit = value;
  }
  public resetConnLimit() {
    this._connLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitInput() {
    return this._connLimit;
  }

  // connection_manager - computed: true, optional: false, required: false
  private _connectionManager = new cdktf.StringMap(this, "connection_manager");
  public get connectionManager() {
    return this._connectionManager;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: string; 
  public get deletionProtection() {
    return this.getStringAttribute('deletion_protection');
  }
  public set deletionProtection(value: string) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // grants - computed: true, optional: false, required: false
  public get grants() {
    return this.getListAttribute('grants');
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

  // login - computed: false, optional: true, required: false
  private _login?: boolean | cdktf.IResolvable; 
  public get login() {
    return this.getBooleanAttribute('login');
  }
  public set login(value: boolean | cdktf.IResolvable) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // permission - computed: true, optional: false, required: false
  private _permission = new DataYandexMdbPostgresqlUserPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }

  // settings - computed: true, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      conn_limit: cdktf.numberToTerraform(this._connLimit),
      deletion_protection: cdktf.stringToTerraform(this._deletionProtection),
      id: cdktf.stringToTerraform(this._id),
      login: cdktf.booleanToTerraform(this._login),
      name: cdktf.stringToTerraform(this._name),
      settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._settings),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_limit: {
        value: cdktf.numberToHclTerraform(this._connLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deletion_protection: {
        value: cdktf.stringToHclTerraform(this._deletionProtection),
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
      login: {
        value: cdktf.booleanToHclTerraform(this._login),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._settings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
