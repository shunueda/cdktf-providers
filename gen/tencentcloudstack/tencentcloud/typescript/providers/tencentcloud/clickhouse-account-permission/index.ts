// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickhouseAccountPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether all database tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#all_database ClickhouseAccountPermission#all_database}
  */
  readonly allDatabase: boolean | cdktf.IResolvable;
  /**
  * Cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#cluster ClickhouseAccountPermission#cluster}
  */
  readonly cluster: string;
  /**
  * Global privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#global_privileges ClickhouseAccountPermission#global_privileges}
  */
  readonly globalPrivileges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#id ClickhouseAccountPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#instance_id ClickhouseAccountPermission#instance_id}
  */
  readonly instanceId: string;
  /**
  * User name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#user_name ClickhouseAccountPermission#user_name}
  */
  readonly userName: string;
  /**
  * database_privilege_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#database_privilege_list ClickhouseAccountPermission#database_privilege_list}
  */
  readonly databasePrivilegeList?: ClickhouseAccountPermissionDatabasePrivilegeListStruct[] | cdktf.IResolvable;
}
export interface ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStruct {
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#table_name ClickhouseAccountPermission#table_name}
  */
  readonly tableName: string;
  /**
  * Table privileges. Valid values: SELECT, INSERT_ALL, ALTER, TRUNCATE, DROP_TABLE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#table_privileges ClickhouseAccountPermission#table_privileges}
  */
  readonly tablePrivileges: string[];
}

export function clickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStructToTerraform(struct?: ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
    table_privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tablePrivileges),
  }
}


export function clickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStructToHclTerraform(struct?: ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tablePrivileges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._tablePrivileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablePrivileges = this._tablePrivileges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableName = undefined;
      this._tablePrivileges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableName = value.tableName;
      this._tablePrivileges = value.tablePrivileges;
    }
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // table_privileges - computed: false, optional: false, required: true
  private _tablePrivileges?: string[]; 
  public get tablePrivileges() {
    return cdktf.Fn.tolist(this.getListAttribute('table_privileges'));
  }
  public set tablePrivileges(value: string[]) {
    this._tablePrivileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrivilegesInput() {
    return this._tablePrivileges;
  }
}

export class ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStructList extends cdktf.ComplexList {
  public internalValue? : ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStructOutputReference {
    return new ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseAccountPermissionDatabasePrivilegeListStruct {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#database_name ClickhouseAccountPermission#database_name}
  */
  readonly databaseName: string;
  /**
  * Database privileges. Valid valuse: SELECT, INSERT_ALL, ALTER, TRUNCATE, DROP_TABLE, CREATE_TABLE, DROP_DATABASE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#database_privileges ClickhouseAccountPermission#database_privileges}
  */
  readonly databasePrivileges?: string[];
  /**
  * table_privilege_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#table_privilege_list ClickhouseAccountPermission#table_privilege_list}
  */
  readonly tablePrivilegeList?: ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStruct[] | cdktf.IResolvable;
}

export function clickhouseAccountPermissionDatabasePrivilegeListStructToTerraform(struct?: ClickhouseAccountPermissionDatabasePrivilegeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    database_privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databasePrivileges),
    table_privilege_list: cdktf.listMapper(clickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStructToTerraform, true)(struct!.tablePrivilegeList),
  }
}


export function clickhouseAccountPermissionDatabasePrivilegeListStructToHclTerraform(struct?: ClickhouseAccountPermissionDatabasePrivilegeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databasePrivileges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    table_privilege_list: {
      value: cdktf.listMapperHcl(clickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStructToHclTerraform, true)(struct!.tablePrivilegeList),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseAccountPermissionDatabasePrivilegeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseAccountPermissionDatabasePrivilegeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._databasePrivileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.databasePrivileges = this._databasePrivileges;
    }
    if (this._tablePrivilegeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablePrivilegeList = this._tablePrivilegeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseAccountPermissionDatabasePrivilegeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._databasePrivileges = undefined;
      this._tablePrivilegeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._databasePrivileges = value.databasePrivileges;
      this._tablePrivilegeList.internalValue = value.tablePrivilegeList;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // database_privileges - computed: false, optional: true, required: false
  private _databasePrivileges?: string[]; 
  public get databasePrivileges() {
    return cdktf.Fn.tolist(this.getListAttribute('database_privileges'));
  }
  public set databasePrivileges(value: string[]) {
    this._databasePrivileges = value;
  }
  public resetDatabasePrivileges() {
    this._databasePrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePrivilegesInput() {
    return this._databasePrivileges;
  }

  // table_privilege_list - computed: false, optional: true, required: false
  private _tablePrivilegeList = new ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStructList(this, "table_privilege_list", false);
  public get tablePrivilegeList() {
    return this._tablePrivilegeList;
  }
  public putTablePrivilegeList(value: ClickhouseAccountPermissionDatabasePrivilegeListTablePrivilegeListStruct[] | cdktf.IResolvable) {
    this._tablePrivilegeList.internalValue = value;
  }
  public resetTablePrivilegeList() {
    this._tablePrivilegeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrivilegeListInput() {
    return this._tablePrivilegeList.internalValue;
  }
}

export class ClickhouseAccountPermissionDatabasePrivilegeListStructList extends cdktf.ComplexList {
  public internalValue? : ClickhouseAccountPermissionDatabasePrivilegeListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseAccountPermissionDatabasePrivilegeListStructOutputReference {
    return new ClickhouseAccountPermissionDatabasePrivilegeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission tencentcloud_clickhouse_account_permission}
*/
export class ClickhouseAccountPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clickhouse_account_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickhouseAccountPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickhouseAccountPermission to import
  * @param importFromId The id of the existing ClickhouseAccountPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickhouseAccountPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clickhouse_account_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/clickhouse_account_permission tencentcloud_clickhouse_account_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickhouseAccountPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: ClickhouseAccountPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clickhouse_account_permission',
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
    this._allDatabase = config.allDatabase;
    this._cluster = config.cluster;
    this._globalPrivileges = config.globalPrivileges;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._userName = config.userName;
    this._databasePrivilegeList.internalValue = config.databasePrivilegeList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_database - computed: false, optional: false, required: true
  private _allDatabase?: boolean | cdktf.IResolvable; 
  public get allDatabase() {
    return this.getBooleanAttribute('all_database');
  }
  public set allDatabase(value: boolean | cdktf.IResolvable) {
    this._allDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allDatabaseInput() {
    return this._allDatabase;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // global_privileges - computed: false, optional: true, required: false
  private _globalPrivileges?: string[]; 
  public get globalPrivileges() {
    return cdktf.Fn.tolist(this.getListAttribute('global_privileges'));
  }
  public set globalPrivileges(value: string[]) {
    this._globalPrivileges = value;
  }
  public resetGlobalPrivileges() {
    this._globalPrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPrivilegesInput() {
    return this._globalPrivileges;
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

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // database_privilege_list - computed: false, optional: true, required: false
  private _databasePrivilegeList = new ClickhouseAccountPermissionDatabasePrivilegeListStructList(this, "database_privilege_list", false);
  public get databasePrivilegeList() {
    return this._databasePrivilegeList;
  }
  public putDatabasePrivilegeList(value: ClickhouseAccountPermissionDatabasePrivilegeListStruct[] | cdktf.IResolvable) {
    this._databasePrivilegeList.internalValue = value;
  }
  public resetDatabasePrivilegeList() {
    this._databasePrivilegeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePrivilegeListInput() {
    return this._databasePrivilegeList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_database: cdktf.booleanToTerraform(this._allDatabase),
      cluster: cdktf.stringToTerraform(this._cluster),
      global_privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globalPrivileges),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      user_name: cdktf.stringToTerraform(this._userName),
      database_privilege_list: cdktf.listMapper(clickhouseAccountPermissionDatabasePrivilegeListStructToTerraform, true)(this._databasePrivilegeList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_database: {
        value: cdktf.booleanToHclTerraform(this._allDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_privileges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._globalPrivileges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_privilege_list: {
        value: cdktf.listMapperHcl(clickhouseAccountPermissionDatabasePrivilegeListStructToHclTerraform, true)(this._databasePrivilegeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseAccountPermissionDatabasePrivilegeListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
